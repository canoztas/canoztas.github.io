---
layout: '~/layouts/MarkdownLayout.astro'
title: Güvenli Kodlama ve Programlama
description: 'Secure Coding and Programming — 14 haftalık seçmeli lisans dersi izlencesi (R.C. Öztaş, Turknet): OWASP Top 10 (2025), tehdit modelleme, web ve bellek güvenliği, SAST/DAST, AI destekli geliştirme ve LLM uygulama güvenliği.'
---

**Secure Coding and Programming** · Seçmeli Lisans Dersi · 2026–27 Güz Dönemi  
Eğitmen: **[Refik Can Öztaş](https://www.linkedin.com/in/can-oztas/)** (Offensive Security, Turknet)

---

### Ders Tanımı

Bu ders, öğrencilere yazılım geliştirme yaşam döngüsünün her aşamasında güvenliği gözeten bir programlama ve mühendislik bakış açısı (*security by design*) kazandırmayı amaçlar. Yaygın yazılım zafiyetleri önce **saldırgan bakış açısıyla** sömürü senaryoları üzerinden gösterilir, ardından **savunma ve güvenli kodlama** teknikleri uygulamalı olarak işlenir. Ders; web ve bellek güvenliğinin yanı sıra yapay zekâ destekli geliştirmenin ve büyük dil modeli (LLM) tabanlı uygulamaların güvenliğini de kapsar.

- **Dönem:** 2026–27 Güz Dönemi
- **Seviye:** Lisans 3. ve 4. sınıf (Seçmeli)
- **Ön Koşul:** Temel programlama dersini almış olmak (Java, C#, Python vb. bir dilde kod geliştirebilmek); web uygulamaları ve veri tabanı kavramlarında temel düzeyde bilgi. C bilgisi tercih sebebidir.
- **Eğitmen:** Refik Can Öztaş — Offensive Security Uzmanı ve Güvenlik Araştırmacısı, Turknet

---

### Haftalık Ders Planı

| Hafta | Konu | Ödev / Teslim |
|:---:|---|---|
| 1 | Yazılım güvenliğine giriş: saldırgan bakış açısı, güvenli tasarım ilkeleri ve tehdit modelleme (STRIDE) | Dönem projesinin duyurulması |
| 2 | Enjeksiyon saldırıları (SQLi, CMDi, NoSQL, XXE) ve güvenilmeyen girdinin güvenli işlenmesi | **Ödev 1 verilir** |
| 3 | Tarayıcı güvenlik modeli, istemci taraflı web saldırıları (XSS, CSRF, Clickjacking) ve savunma | Takımlar ve konu seçimi |
| 4 | Yazılım geliştiriciler için uygulamalı kriptografi: doğru kullanım, TLS ve yaygın hatalar | |
| 5 | Kimlik doğrulama, parola politikaları, oturum yönetimi ve modern protokoller (OAuth 2.0, JWT, Passkey) | **Ödev 1 teslimi** |
| 6 | Yetkilendirme, erişim kontrolü modelleri (RBAC/ABAC), IDOR/BOLA ve API güvenliği | Proje ara kontrolü |
| 7 | Bellek güvenliği: C/C++ zafiyetleri (taşma, use-after-free), sömürü mantığı ve önlemler (ASLR, DEP, Canary) | **Ödev 2 verilir** |
| 8 | Güvenli yapılandırma, loglama/hata yönetimi ve yazılım tedarik zinciri güvenliği (SCA, SBOM) | |
| 9 | Statik ve dinamik program analizi (SAST/DAST) ile zafiyet tespiti ve bulgu triyajı | **Ödev 2 teslimi** |
| 10 | Yapay zekâ destekli yazılım geliştirmede güvenlik ve kod asistanlarının riskleri | |
| 11 | Büyük dil modeli (LLM) tabanlı uygulamaların güvenliği (Prompt Injection, OWASP LLM Top 10, Ajan Güvenliği) | |
| 12 | Dönem projesi sunumları (I) | Sunumlar |
| 13 | Dönem projesi sunumları (II) ve dönem değerlendirmesi | Sunumlar & Rapor teslimi |
| 14 | Genel tekrar ve sınav hazırlığı: zafiyetten yamaya bütünleşik vaka çalışması | |
| 15 | Yarıyıl sonu sınavı | **Final Sınavı** |

---

### Değerlendirme

| Faaliyet | Sayı | Ağırlık |
|---|:---:|:---:|
| Ödevler | 2 | %20 |
| Dönem Projesi (Zafiyet Otopsisi) | 1 | %30 |
| Final Sınavı | 1 | %50 |
| **Toplam** | | **%100** |

- **Ödevler (%20):** İki bireysel ödev (her biri %10). Ödev 1: Zafiyetli web uygulamasında açık tespiti, PoC ve kök neden/düzeltme raporu. Ödev 2: C programında bellek hatası tespiti/onarımı ve SAST çıktısı triyajı.
- **Dönem Projesi — Zafiyet Otopsisi (%30):** Takımlar halinde gerçek ve yamalanmış bir zafiyetin (CVE veya olay) kök neden, sömürü yolu, yama eleştirisi ve çıkarımlarla incelenmesi; teknik rapor ve sunum.
- **Final Sınavı (%50):** Kapalı kaynak dönem sonu sınavı (kod analizi, zafiyet tespiti, düzeltme yazma ve tasarım kararları).

---

### Kaynaklar

**Standartlar ve Rehberler**
- [OWASP Top 10 (2025)](https://owasp.org/Top10/)
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org)
- [OWASP Application Security Verification Standard (ASVS)](https://owasp.org/ASVS)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org)
- [SEI CERT Secure Coding Standards](https://wiki.sei.cmu.edu)

**Önerilen Kitaplar**
- Mathias Payer, *Software Security: Principles, Policies, and Protection* (SS3P) — [nebelwelt.net/SS3P](https://nebelwelt.net/SS3P/)
- Robert C. Seacord, *Secure Coding in C and C++*, 2. Baskı, Addison-Wesley, 2013.
- Dan Bergh Johnsson, Daniel Deogun & Daniel Sawano, *Secure by Design*, Manning, 2019.
- Adam Shostack, *Threat Modeling: Designing for Security*, Wiley, 2014.
- Dafydd Stuttard & Marcus Pinto, *The Web Application Hacker's Handbook*, 2. Baskı, Wiley, 2011.
- Michael Howard & David LeBlanc, *Writing Secure Code*, 2. Baskı, Microsoft Press, 2003.

**Ek Kaynaklar**
- OpenSSF, *Developing Secure Software* (LFD121) — [training.linuxfoundation.org](https://training.linuxfoundation.org/training/developing-secure-software-lfd121/)
- Stanford CS 253 *Web Security* — [web.stanford.edu/class/cs253](https://web.stanford.edu/class/cs253)
