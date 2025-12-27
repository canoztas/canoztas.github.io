---
title: "Building an AI-Powered MQTT IDS: From GNS3 Simulation to Machine Learning"
published: 2025-01-27
draft: false
tags: ['cybersecurity', 'iot', 'mqtt', 'ids', 'machine-learning', 'gns3', 'network-security']
description: "How I built a high-fidelity MQTT intrusion detection system using GNS3 emulation, flow-based feature extraction, and ML models. Spoiler: flow-based features fail on application-layer attacks."
toc: true
---

## The Problem: MQTT is Everywhere, and It's Vulnerable

MQTT (Message Queuing Telemetry Transport) is the backbone of modern IoT. Your smart home devices? Probably using MQTT. Industrial sensors? MQTT. The protocol is lightweight, efficient, and perfect for low-bandwidth environments. But here's the catch: **it's insecure by default**.

Most MQTT deployments send credentials in plaintext, allow anonymous connections, and have zero encryption. This makes them prime targets for attackers. The question is: how do we detect when someone's exploiting these vulnerabilities?

Traditional IDS solutions rely on flow-based features—packet counts, duration, byte statistics. But what happens when the attack isn't about volume? What if the malice is hidden in the payload itself?

## Building a Realistic Attack Environment

I needed labeled data to train an IDS, but real-world attack datasets are hard to come by. So I built my own using **GNS3**—a network emulator that runs real operating systems and actual software, not just simulations.

### The Network Topology

I designed a smart home network with:
- **MQTT Broker** (Mosquitto on Alpine Linux)
- **Two benign clients** publishing sensor data
- **One attacker node** for launching attacks
- **Switch and router** for realistic network behavior

![GNS3 Network Topology](/posts/mqtt-ids/gns3_topology.png)

The beauty of GNS3 is that it runs real Alpine Linux VMs with actual Mosquitto broker software. This means the attacks I generate exploit real vulnerabilities, not abstracted models.

### Attack Scenarios

I captured four distinct traffic patterns:

1. **Benign Traffic**: Normal sensor data publishing every 7-10 seconds
2. **DoS Attack**: TCP SYN flood targeting port 1883
3. **Brute Force**: Dictionary attack on MQTT authentication
4. **Poison Attack**: A novel "retained message poisoning" attack

The poison attack is particularly interesting. MQTT has a `RETAIN` flag that tells the broker to store the last message for a topic. When a new client subscribes, they immediately get this retained message. An attacker can exploit this by publishing a malicious payload with `retain=True`, and the broker itself becomes the persistent attack vector.

![Poison Attack Proof](/posts/mqtt-ids/gns3_poison_proof.png)

## From Raw Packets to ML-Ready Data

Raw `.pcapng` files aren't useful for machine learning. I needed to extract features. I built a custom tool called `ciciot_pcap2csv` that uses `tshark` to parse packet captures and generate 47 statistical features per network flow.

The initial dataset was heavily imbalanced—DoS traffic dominated everything. I used:
- **SMOTE** to oversample minority classes (Benign, BruteForce, Poison) to 100,000 samples each
- **RandomUnderSampler** to reduce DoS to 100,000 samples

Final result: 400,000 balanced samples, split 80/20 for training/testing.

## Model Performance: The Good and The Ugly

I trained two models: **XGBoost** (tree-based ensemble) and **LSTM** (sequential neural network).

### XGBoost Results

- **Accuracy**: 86.20%
- **Weighted F1-Score**: 86.06%

![XGBoost Confusion Matrix](/posts/mqtt-ids/xgboost_cm.png)

XGBoost crushed DoS and Brute Force detection. But here's where it gets interesting: it confused **6,712 benign samples as Poison** and **3,564 Poison samples as Benign**.

### LSTM Results

- **Accuracy**: 85.31%
- **Weighted F1-Score**: 85.15%

![LSTM Confusion Matrix](/posts/mqtt-ids/lstm_cm.png)

The LSTM showed the **exact same failure mode**: 9,101 benign samples misclassified as Poison.

## The Critical Finding: Flow-Based Features Are Insufficient

Two completely different architectures (tree-based vs. sequential) failed in the identical way. This isn't a model problem—it's a **feature problem**.

Flow-based features (L3/L4) capture network-layer attacks beautifully:
- DoS floods create massive packet volumes → easy to detect
- Brute force creates authentication patterns → easy to detect

But the Poison attack is an **application-layer (L7) attack**. The malice is in the payload content, not the traffic pattern. Flow-based features can't see inside the packets, so they can't distinguish between:
- A benign sensor reading: `{"temperature_c": 25.5, "humidity": 45}`
- A poisoned payload: `{"temperature_c": -100.0, "pressure": 0}`

Both look identical from a flow perspective: same packet size, same duration, same protocol.

## What This Means for IoT Security

This research reveals a fundamental limitation in current IDS approaches. Flow-based detection works great for network-layer attacks, but it's **blind to application-layer integrity attacks**.

To properly defend MQTT networks, we need:
1. **Deep Packet Inspection (DPI)**: Actually inspect payload content
2. **Stateful Behavioral Analysis**: Track message patterns and anomalies
3. **Protocol-Aware Detection**: Understand MQTT semantics, not just TCP/IP

## Reproducing the Research

All code, GNS3 project files, and the dataset will be published in the repository:

**Source Code**: [CMP625-ComputerNetworks-MQTTIDS](https://github.com/canoztas/CMP625-ComputerNetworks-MQTTIDS)

The repository includes:
- GNS3 project configuration
- Attack scripts (DoS, Brute Force, Poison)
- Benign traffic generation scripts
- Feature extraction pipeline (`ciciot_pcap2csv`)
- Model training notebooks (XGBoost and LSTM)
- Complete dataset

### Key Scripts

**Benign Traffic Generator** (Client 1):
```python
import paho.mqtt.client as mqtt
import json
import random

client = mqtt.Client()
client.connect("192.168.1.10", 1883, 60)

while True:
    payload = {
        "device_id": "ZONE1-MULTI-001",
        "temperature_c": round(random.uniform(25, 30), 2),
        "humidity_percent": round(random.uniform(40, 50), 2)
    }
    client.publish("building/zone1/sensors", json.dumps(payload))
    time.sleep(10)
```

**Poison Attack Script**:
```python
poison_payload = {
    "device_id": "ATTACKER-SPOOF",
    "temperature_c": -100.0,  # Anomaly
    "pressure_hpa": 0
}

client.publish(target_topic, json.dumps(poison_payload), retain=True)
# The retain=True flag makes the broker persist this malicious message
```

## Setup Guide

### GNS3 Configuration

1. **Node Selection**: Use Alpine Linux (v3.18) template via QEMU
2. **Topology**: Connect Server, Clients, and Attacker through a Switch to a Router
3. **NAT Configuration**: Add NAT1 cloud node for internet access (package installation)

![GNS3 Step 1: Node Selection](/posts/mqtt-ids/gns3_step1.png)

![GNS3 Step 2: Wiring](/posts/mqtt-ids/gns3_step2_wiring.png)

![GNS3 Step 3: NAT Configuration](/posts/mqtt-ids/gns3_step3_nat.png)

### Traffic Capture

Use Wireshark or `tshark` to capture traffic on the broker interface:

```bash
tshark -i eth0 -w mqtt_benign.pcapng
```

![Wireshark DoS Capture](/posts/mqtt-ids/gns3_dos_wireshark.png)

## Analysis and Insights

### Why Flow-Based IDS Fails

The fundamental issue is that flow-based features operate at the wrong layer of abstraction. They see:
- **Packet counts**: Both benign and poison look the same
- **Duration**: Both are short-lived connections
- **Byte statistics**: Similar payload sizes
- **Protocol flags**: Both use standard MQTT packets

What they **can't** see:
- Payload content (temperature values, device IDs)
- Semantic anomalies (negative temperatures, zero pressure)
- Message context (retained flags, topic structure)

### The Retained Message Attack Vector

The retained message feature is particularly dangerous because:
1. **Persistent**: The malicious payload stays in the broker
2. **Automatic**: New subscribers receive it without any action from the attacker
3. **Invisible**: From a flow perspective, it looks like normal MQTT traffic

This is a perfect example of why protocol-aware detection is critical.

### Model Comparison

Both XGBoost and LSTM performed similarly, which suggests:
- The models are learning the same patterns
- The limitation is in the features, not the algorithms
- Tree-based and sequential models converge when features are insufficient

## Future Work

1. **Payload Inspection**: Implement DPI to extract content-based features
2. **Behavioral Analysis**: Track message patterns over time
3. **Protocol State Tracking**: Monitor MQTT session state and retained messages
4. **Hybrid Approach**: Combine flow-based and content-based detection

## Conclusion

Building an IDS for MQTT requires understanding both the network layer and the application layer. Flow-based features are powerful for detecting volume-based attacks, but they're blind to semantic integrity attacks.

The takeaway? **Don't rely solely on flow-based detection for IoT security.** You need protocol-aware, content-inspecting systems to catch the subtle attacks that flow analysis misses.

The code, dataset, and GNS3 project files are all available in the repository. Feel free to reproduce, extend, or critique the work. Security research is only as strong as its reproducibility.

---

**Repository**: [CMP625-ComputerNetworks-MQTTIDS](https://github.com/canoztas/CMP625-ComputerNetworks-MQTTIDS)

**Notebook**: [CiCIOT.ipynb](https://github.com/canoztas/CMP625-ComputerNetworks-MQTTIDS/blob/main/CiCIOT.ipynb)

