---
title: "IoT Security: Hacking ZigBee Networks - An Offensive Case Study"
published: 2025-01-20
draft: false
tags: ['cybersecurity', 'iot', 'zigbee', 'wireless-security', 'hardware-hacking', 'offensive-security']
description: "A hands-on case study of attacking real IoT devices using ZigBee protocol. From channel scanning to packet injection, here's how I broke into a smart home network."
toc: true
---

## The IoT Security Problem

IoT devices are everywhere. Smart lights, temperature sensors, motion detectors—they're all connected, and they're all vulnerable. While these devices are incredibly useful, their security is often an afterthought. This case study dives deep into the wireless security of IoT devices, specifically focusing on **ZigBee protocol attacks** on real hardware.

The reality? Most IoT devices prioritize functionality over security. They're designed to be cheap, low-power, and easy to use. Security? That's someone else's problem. Until it isn't.

## Building the Attack Lab

To conduct real attacks, I needed real hardware. I built a physical IoT network with:

- **Imou ZigBee Gateway** - The central hub
- **ZTM1 Temperature Sensor** - Proof-of-concept endpoint
- **Zp1 Motion Detector** - Another endpoint device

![IoT Devices](/posts/iot-project/page5_img1.png)

The network topology is straightforward: IoT devices communicate with the ZigBee Gateway via ZigBee protocol (2.4GHz), and the Gateway connects to the router via Wi-Fi for internet access and mobile app communication.

![Network Topology](/posts/iot-project/page4_img1.png)

## The Attack Hardware

To attack wireless networks, you need specialized hardware. I used a **CC2531 USB Dongle**—a Texas Instruments SoC designed for ZigBee applications. The catch? It needs custom firmware to perform attacks.

![Attack Hardware](/posts/iot-project/page6_img1.png)

The CC2531 requires a CC Debugger to flash firmware. Different packet capture tools need different firmware:
- **Ubiqua Protocol Analyzer** → `ubqia-sn_v0.9.0.hex`
- **Wireshark** → `zboss_sniffer.hex`

![Firmware Setup](/posts/iot-project/page15_img1.png)

## Attack 1: ZigBee Channel Scanning

ZigBee uses 2.4GHz channels, ranging from 2405MHz (channel 0x0B) to 2480MHz (channel 0x1A). Most networks use a single frequency channel, so the first step is reconnaissance: **channel fuzzing**.

I listened to all channels with 1-second time slots. In my case, channel **0x0E (2420MHz)** was active.

![Channel Scanning](/posts/iot-project/page7_img1.png)

This is passive reconnaissance—no logs, no detection. Just listening.

## Attack 2: Network Sniffing and Key Extraction

ZigBee traffic is encrypted, but that encryption is **easily broken**. The protocol uses two keys:
- **Trust Center Link Key** - Usually generic (some vendors like Hue use custom keys)
- **Network Key** - The secret that encrypts all traffic

Here's the vulnerability: when a new device joins the network, the gateway must send the network key in plaintext during the join process. As an attacker, I can sniff this key.

![Network Key in Wireshark](/posts/iot-project/page8_img1.png)

Once I have the network key, I can decrypt all traffic. The gateway becomes transparent.

![Decrypted Frames](/posts/iot-project/page9_img1.png)

### Packet Analysis Tools

I used three different packet sniffers:

1. **Ubiqua Protocol Analyzer** - Enterprise solution, very user-friendly
2. **Wireshark** - The standard for packet inspection
3. **Texas Instruments SmartRF** - Less stable, but vendor-specific

![Encrypted Packets in SmartRF](/posts/iot-project/page17_img1.png)

![Packets in Wireshark](/posts/iot-project/page17_img2.png)

![Network Key Configuration in Ubiqua](/posts/iot-project/page18_img1.png)

## Attack 3: Packet Injection and Manipulation

Once traffic is decrypted, it can be manipulated. In my network, sensors send temperature data to the gateway. While jamming and forging packets isn't trivial, **sending crafted packets** can manipulate the entire system.

![ZigBee Packet Structure](/posts/iot-project/page10_img1.png)

The attack scenario: if there's a rule that enables a cooling system at a specific temperature, I can trigger it by injecting fake temperature readings. This is an **integrity attack**—the data looks legitimate, but it's malicious.

## Attack 4: Wi-Fi Deauthentication

The ZigBee Gateway uses Wi-Fi (2.4GHz) to communicate with the internet. This creates another attack surface: **Wi-Fi deauthentication attacks**.

Wi-Fi deauth attacks send deauthentication frames to force devices to disconnect from the network. When I disconnect the gateway's Wi-Fi connection, it can't communicate with the cloud.

![Finding Gateway MAC Address](/posts/iot-project/page19_img1.png)

![Performing DeAuth Attack](/posts/iot-project/page19_img2.png)

**Result**: The gateway turns red (connection lost), and the mobile app can't receive alarm notifications. This is a **Denial of Service** attack—the ZigBee network still works locally, but cloud communication is severed.

![Gateway Connection Lost](/posts/iot-project/page20_img1.png)

![Mobile App Loses Connection](/posts/iot-project/page20_img2.png)

## Additional Findings

### Man-in-the-Middle Attack

I poisoned the ARP table to intercept traffic between the gateway, router, and mobile app. This revealed the **cloud server IP address**.

![L4 Traffic in Wireshark](/posts/iot-project/page21_img1.png)

![Cloud Server IP Info](/posts/iot-project/page21_img2.png)

### Port Scanning

A full port scan of the ZigBee gateway revealed **port 7050 is open**. This could be an additional attack vector.

![Nmap Port Scan](/posts/iot-project/page22_img1.png)

## Why ZigBee Security is Broken

The fundamental issues:

1. **Weak Encryption**: Network keys are transmitted in plaintext during device joining
2. **No Authentication**: Devices can join networks without proper verification
3. **Vendor Dependencies**: Security varies wildly between vendors
4. **Legacy Design**: ZigBee prioritizes low power and cost over security

The protocol was designed for low-resource devices, but that design philosophy creates inherent vulnerabilities. Hong Kong CERT published security guidelines to prevent these attacks, but vendor implementation varies too much for universal security principles.

## Attack Classification

Wireless attacks fall into three categories:

1. **Packet Sniffing** - Passive reconnaissance, confidentiality attacks
2. **Packet Injection** - Active attacks, integrity and availability
3. **Packet Manipulation** - Active attacks, integrity violations

All three are possible on ZigBee networks with the right hardware.

## Future Work

This case study opens several research directions:

1. **Dataset Creation**: Generate labeled ZigBee traffic datasets from real networks
2. **ML-Based Detection**: Use machine learning for anomaly detection and attack classification
3. **IDS/IPS Development**: Build intrusion detection/prevention systems for ZigBee
4. **Endpoint Security**: Combine network and hardware security for comprehensive protection
5. **Protocol Vulnerabilities**: Deep-dive into ZigBee protocol flaws
6. **Physical Attacks**: Explore SDR-based jamming and other physical attack vectors

## The Reality Check

ZigBee is cheap and efficient, but its security is problematic. While security guidelines exist, vendor implementation is inconsistent. The IoT ecosystem is too fragmented for universal security standards.

This case study demonstrates that with **$20 hardware** (CC2531 dongle), an attacker can:
- Sniff all network traffic
- Decrypt encrypted communications
- Inject malicious packets
- Disrupt cloud connectivity
- Map the entire network topology

## Conclusion

IoT security requires understanding both the network layer and the application layer. ZigBee's design makes it vulnerable to a wide range of attacks, from passive sniffing to active manipulation.

The takeaway? **Don't trust wireless IoT protocols by default.** They're designed for convenience, not security. If you're deploying IoT devices, assume they're compromised and build defense-in-depth.

## Dataset and Resources

The captured ZigBee traffic is available for research:
- [zigbeedata1.pcapng](https://canoztas.github.io/zigbeedata1.pcapng)
- [zigbeedata2.cubx](https://canoztas.github.io/zigbeedata2.cubx)
- [zigbeedata3.psd](https://canoztas.github.io/zigbeedata3.psd)

## Hardware Setup Guide

### CC2531 Firmware Flashing

1. **Required Hardware**:
   - CC2531 USB Dongle
   - CC Debugger (Texas Instruments)
   - Transformer cable (10-pin to 8-pin)

2. **Firmware Selection**:
   - For Ubiqua: `ubqia-sn_v0.9.0.hex`
   - For Wireshark: `zboss_sniffer.hex`

3. **Flashing Process**:
   - Connect CC Debugger to CC2531
   - Use Texas Instruments Flash Programmer
   - Upload firmware to SoC

![Firmware List](/posts/iot-project/page16_img1.png)

### Packet Capture Setup

Once firmware is flashed, you can use:
- **Ubiqua Protocol Analyzer** - Best for ZigBee-specific analysis
- **Wireshark** - Universal packet inspection
- **SmartRF Packet Sniffer** - Vendor tool (less stable)

Each tool requires the corresponding firmware on the CC2531.

## Attack Methodology

### Step 1: Reconnaissance
- Channel scanning to find active ZigBee networks
- Identify gateway and device MAC addresses
- Map network topology

### Step 2: Key Extraction
- Monitor device join process
- Capture network key during join
- Decrypt all network traffic

### Step 3: Traffic Analysis
- Decode packet structures
- Identify sensor data patterns
- Map device behaviors

### Step 4: Active Attacks
- Packet injection
- Packet manipulation
- Wi-Fi deauthentication
- Man-in-the-middle attacks

## Security Implications

This research demonstrates that:

1. **ZigBee encryption is easily broken** - Network keys are transmitted insecurely
2. **No authentication mechanism** - Devices can join networks without verification
3. **Vendor inconsistencies** - Security varies between implementations
4. **Physical access = network compromise** - With the right hardware, the network is transparent

The attacks shown here are **not theoretical**. They work on real devices, in real networks, with off-the-shelf hardware.

## References and Further Reading

- ZigBee Security Analysis (MIT)
- Hong Kong CERT IoT Security Guidelines
- ZigBee Protocol Specifications (IEEE 802.15.4)
- Various academic papers on ZigBee vulnerabilities

---

**Note**: This research was conducted in a controlled lab environment for educational purposes. Always ensure you have proper authorization before testing security on any network.

