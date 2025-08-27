---
title: "The Key from Diffie-Hellman"
published: 2024-03-02
draft: false
tags: ['cryptography']
description: Secure communication over insecure channels using Diffie-Hellman key exchange
toc: true
series: 'Cryptography Basics' 
---

## Motivation... 

Since ancient times the fundamental way of secure communication has always been encryption.

But there's one big problem. We need to share the key with our target
so he can decrypt our message. How can we share the key securely?

To put it formally our challenge is to establish secure communication over insecure channels without the need for prior shared secrets.

Diffie-Hellman algorithm allows two parties to agree on shared secret key, even on public networks with eavesdroppers.

Understanding Diffie-Hellman is important, because the concepts here is
used almost everywhere where we need to exchange keys.

## How? 

In essence we are using some public variables and combine it with our private variables to generate the same key.

In the first part, I will explain the concept at high level then we will delve into mathmetics behind.

Bob and Alice will generate the same key on their own, so they can talk privately in an insecure network.

Let's start by defining our variables.

g - generator, it's a small prime number, and public.
<br>
n - it's a big prime number, and public
<br>
a - Alice's private variable (a number between 0 to n).
<br>
b - Bob's private variable (a number between 0 to n).
<br>
Private variables are never shared.

In the beginning our networks looks like this.

```
Alice | Public | Bob
a     | g n    | b
```

Alice combines her private variable with g and generates a new number, we will call this "ag".
<br>
Bob does the same with his private variables and generates "bg".

ag - Alice's shared variable
<br>
bg - Bob's shared variable

```
Alice | Public | Bob
ag    |        | bg
```

Alice sends the number she generated (ag) to Bob.
Bob does the same and sends his newly generated number (bg) to Alice.

```
Alice | Public | Bob
      | ag bg  |
```

Now Alice has Bob's shared variable, and Bob has the Alice's shared variable.

```
Alice | Public | Bob
bg    |        | ag
```

Alice will combine her private variable a, with Bob's shared variable bg, and generate
bga.
<br>
Bob will combine his private variable b, with Alice's shared variable ag, and generate
agb.

Mathemetics used here guarantees that both agb and bga will be the same.

```
Alice | Public | Bob
bga   |        | agb
```

This is it. Both Bob and Alice now has the same key.

## Math 

Math is actually really simple here.

g - is a small prime number.
<br>
n - Very large n is needed for this to work. Big enough to make brute forcing not viable.
<br>
a - is a random number between 0 to n.
<br>
b - is a random number between 0 to n.

Alice calculates g to the power of a mod n, generating ag.
<br>
Bob calculates g to the power of b mod n, generating bg.

```
ag = g**a mod n
bg = g**b mob n
```

Results will be less than n, from ag and bg, it's impossible to know what a or b was.

To find a and b from ag and bg is a problem of discrete logarithms. This problem is too difficult for even supercomputers of today.

Alice takes bg and raises it with her private number.
<br>
Bob takes ag raises it with his private number.

```
agb = (g**b)**a mod n
bga = (g**a)**b mod n
```

As you can see both reached the same number.

```
shared_key = g**(ab) mod n
```

## Conclusion 

Understanding Diffie-Hellman is important to understand how encryption of modern applications work.

The point of Diffie-Hellman is that nothing in public domain can be combined in any way to get our secret key.

Truth is Diffie-Hellman is never used by itself because by default it provides no defense against man-in-the-middle attacks.

Discrete Logarithms problem is very computationally expensive problem, but dedicated organizations like NSA or other security agencies of world may have more than enough resources to attempt bruteforce.

I will cover these problems, especially the man-in-the-middle aspect of key exchanges in future a post. If you are interested, you can use these keywords to do your own research.

- RSA, PKI, SSL Certificates, Digital Signature

## Sources and Further Reading 

[Secret Key Exchange (Diffie-Hellman) - Computerphile](https://www.youtube.com/watch?v=NmM9HA2MQGI)

[Diffie Hellman -the Mathematics bit- Computerphile](https://www.youtube.com/watch?v=Yjrfm_oRO0w)

[Key Exchange Problems - Computerphile](https://www.youtube.com/watch?v=vsXMMT2CqqE)

[Diffie–Hellman key exchange - Wikipedia](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
