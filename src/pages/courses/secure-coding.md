---
layout: '~/layouts/MarkdownLayout.astro'
title: Güvenli Kodlama ve Programlama
description: 'Secure Coding and Programming — 14 haftalık seçmeli lisans dersi izlencesi (R.C. Öztaş): SSDLC, OWASP Top 10, tehdit modelleme, bellek güvenliği ve güvenli kod incelemesi.'
---

**Secure Coding and Programming** &middot; Seçmeli Lisans Dersi &middot; 2026–27 Güz Dönemi &middot; Eğitmen: **Refik Can Öztaş**

Bu ders, öğrencilere yazılım geliştirme yaşam döngüsünün her aşamasında güvenliği gözeten bir programlama ve mühendislik bakış açısı kazandırmayı amaçlar. Yaygın yazılım zafiyetleri önce **saldırgan bakış açısıyla** sömürü senaryoları üzerinden gösterilir, ardından **savunma ve güvenli kodlama** teknikleri uygulamalı olarak işlenir. Hedef; güvenliği tasarım aşamasından itibaren uygulayabilen (*security by design*) yazılım geliştiriciler yetiştirmektir.

## Temel Bilgiler

| | |
|---|---|
| **Ders Kodu** | MTH – *(üniversite tarafından belirlenecektir)* |
| **Ders Adı** | Güvenli Kodlama ve Programlama (*Secure Coding and Programming*) |
| **Dersin Türü** | Seçmeli |
| **Ders Dili** | Türkçe |
| **Sınıf Seviyesi** | Lisans 3. ve 4. sınıf |
| **Dönem** | 2026–27 Güz Dönemi |
| **Uygun Bölümler** | Bilgisayar Müh., Yazılım Müh., Bilişim Sistemleri Müh., Bilgisayar Bilimleri, Yapay Zekâ Müh., Matematik Müh. |
| **Ön Koşul** | Temel programlama dersini almış olmak (Java, C#, Python vb. bir dilde kod geliştirebilmek); web uygulamaları ve veri tabanı kavramlarında temel düzeyde bilgi. |
| **Eğitmen** | Refik Can Öztaş |

## Dersin Özet İçeriği

Yazılım güvenliğinin temel kavramları (tehdit, zafiyet, risk, gizlilik–bütünlük–erişilebilirlik) ve saldırgan (*offensive*) bakış açısı; güvenli yazılım geliştirme yaşam döngüsü (SSDLC); tehdit modelleme (STRIDE) ve saldırı yüzeyi analizi; güvenli tasarım ilkeleri; güvenli kodlama standartları (OWASP, SEI CERT); OWASP Top 10; enjeksiyon saldırıları ve girdi doğrulama; XSS ve CSRF; kimlik doğrulama, parola ve oturum yönetimi; erişim kontrolü ve yetkilendirme; uygulamalı kriptografi; bellek güvenliği ve C/C++ zafiyetleri (taşma, use-after-free) ile önlemleri; güvenli API ve veri katmanı (deserialization, SSRF); güvenli hata yönetimi, loglama ve yapılandırma; üçüncü parti bağımlılık ve tedarik zinciri güvenliği; statik/dinamik analiz ve fuzzing (SAST/DAST) ile güvenli kod incelemesi; sektörden gerçek vaka ve saldırı analizleri.

## Öğrenme Kazanımları

Bu dersi başarıyla tamamlayan öğrenci:

1. Yazılım güvenliğinin temel kavramlarını (tehdit, zafiyet, risk, CIA üçlüsü) ve saldırgan bakış açısını açıklar.
2. Web/uygulama katmanından bellek güvenliği hatalarına kadar yaygın zafiyetleri (OWASP Top 10) tanır; kök nedenlerini ve sömürü senaryolarını analiz eder.
3. Tehdit modelleme yöntemleriyle bir yazılımın saldırı yüzeyini analiz eder.
4. Girdi doğrulama, çıktı kodlama, kimlik doğrulama, yetkilendirme, kriptografi ve güvenli API tasarımı gibi güvenli kodlama tekniklerini doğru şekilde uygular.
5. Güvenli kodlama standartlarına (OWASP, SEI CERT) uygun, bellek-güvenli ve dayanıklı kod yazar.
6. Statik/dinamik analiz ve fuzzing araçlarını (SAST/DAST) kullanarak kaynak koddaki güvenlik açıklarını tespit eder ve giderir.
7. Güvenli kod inceleme süreçlerine katılır ve güvenlik gereksinimlerini yazılım geliştirme sürecine entegre eder.

## Değerlendirme

| Faaliyet | Sayı | Ağırlık |
|---|:---:|:---:|
| Proje | 1 | %30 |
| Ödev | 2 | %20 |
| Final Sınavı | 1 | %50 |
| **Toplam** | | **%100** |

> Ders açma sürecinde, üniversitenin kriterlerine göre değerlendirme süreçlerinde değişiklik yapılabilir.

## Haftalık Ders İçeriği

| Hafta | Konu | Açıklama |
|:---:|---|---|
| 1 | Yazılım güvenliğine giriş ve saldırgan bakış açısı | Temel kavramlar: tehdit, zafiyet, risk, CIA üçlüsü; saldırı zinciri (*cyber kill chain*) ve atak yüzeyi; güvenli kodlama standartlarına giriş (OWASP, SEI CERT); dönem projesinin tanıtımı. |
| 2 | Güvenli tasarım ilkeleri ve güvenlik gereksinimleri | Güvenlik gereksinimlerinin belirlenmesi; güvenli tasarım ilkeleri (en az ayrıcalık, derinlemesine savunma, güvenli varsayılanlar, açık tasarım); güvensiz tasarım örnekleri üzerinden tartışma. |
| 3 | Tehdit modelleme ve saldırı yüzeyi analizi | STRIDE metodolojisi; veri akış diyagramları; saldırgan gözünden saldırı ağaçları; uygulamalı tehdit modelleme çalışması. |
| 4 | Enjeksiyon zafiyetleri ve girdi doğrulama | SQL ve komut enjeksiyonu saldırılarının sömürülmesi; parametreli sorgular; girdi doğrulama ve çıktı kodlama stratejileriyle savunma (uygulamalı laboratuvar). |
| 5 | İstemci taraflı web güvenliği | XSS türleri ve CSRF saldırılarının sömürülmesi; Content Security Policy, güvenli çerez kullanımı ve çıktı kodlama ile savunma (uygulamalı laboratuvar). |
| 6 | Kimlik doğrulama ve oturum yönetimi | Kimlik bilgisi hırsızlığı ve oturum ele geçirme (*session hijacking*) saldırıları; parola saklama (hash + salt), çok faktörlü kimlik doğrulama; JWT ve OAuth 2.0 temelleri. |
| 7 | Erişim kontrolü ve yetkilendirme | IDOR/BOLA ve yetki yükseltme (*privilege escalation*) saldırıları; RBAC/ABAC modelleri ile güvenli yetkilendirme (uygulamalı laboratuvar). |
| 8 | Uygulamalı kriptografi | Zayıf kriptografi ve yanlış kullanım saldırıları; simetrik/asimetrik şifreleme, özet fonksiyonları, TLS; gizli anahtar (*secret*) yönetimi. |
| 9 | Bellek güvenliği ve C/C++ zafiyetleri | Düşük seviyeli bellek zafiyetleri (yığın/öbek taşması, use-after-free, format string) ve sömürü mantığı; önlemler (ASLR, DEP/NX, stack canary) ve bellek-güvenli kodlama (uygulamalı gösterim). |
| 10 | Güvenli API ve veri katmanı güvenliği | REST/GraphQL API güvenliği, hız sınırlama; güvensiz serileştirme/deserileştirme, SSRF ve toplu atama (*mass assignment*) saldırıları; güvenli veri işleme ve depolama. |
| 11 | Güvenli hata yönetimi, loglama ve yapılandırma | Bilgi sızıntısı ve hatalı yapılandırma (*misconfiguration*) saldırıları; güvenli loglama, hata yönetimi ve yapılandırma sıkılaştırma. |
| 12 | Bağımlılık ve tedarik zinciri güvenliği | Üçüncü parti kütüphane zafiyetleri ve tedarik zinciri saldırıları; yazılım bileşen analizi (SCA); sürüm ve yama yönetimi. |
| 13 | Güvenlik test araçları ve güvenli kod incelemesi | SAST, DAST ve fuzzing araçlarıyla uygulama; CI/CD hattına güvenlik testlerinin entegrasyonu; güvenli kod incelemesi pratiği. |
| 14 | Sektörden vaka analizleri ve proje sunumları | Gerçek saldırı/olay incelemeleri; dönem projesi sunumları ve değerlendirme; genel tekrar. |
| 15 | Yarıyıl sonu sınavı | — |

## Ders Kitabı / Önerilen Kaynaklar

- OWASP Top 10 (2021) ve OWASP Cheat Sheet Series — [owasp.org](https://owasp.org)
- OWASP Application Security Verification Standard (ASVS) — [owasp.org/ASVS](https://owasp.org/ASVS)
- SEI CERT Secure Coding Standards — [wiki.sei.cmu.edu](https://wiki.sei.cmu.edu)
- Tanya Janca, *Alice and Bob Learn Application Security*, Wiley, 2020.
- Adam Shostack, *Threat Modeling: Designing for Security*, Wiley, 2014.
- Michael Howard & David LeBlanc, *Writing Secure Code*, 2. Baskı, Microsoft Press, 2003.
- Dafydd Stuttard & Marcus Pinto, *The Web Application Hacker's Handbook*, 2. Baskı, Wiley, 2011.

<details>
<summary><strong>Programın Öğrenme Çıktıları ile İlişki (Katkı Düzeyi)</strong></summary>

*Katkı düzeyi: 0 – Yok · 1 – Çok Düşük · 2 – Düşük · 3 – Orta · 4 – Yüksek · 5 – Çok Yüksek*

| No | Programın Öğrenme Çıktısı | Katkı |
|:---:|---|:---:|
| PÇ-1 | Programlama temelleri, veri yapıları ve algoritmaları kullanarak doğru, verimli ve sürdürülebilir yazılım geliştirebilme. | 4 |
| PÇ-2 | Yazılım güvenliğinin temel kavramlarını ve saldırgan bakış açısını kavrama ve açıklayabilme. | 5 |
| PÇ-3 | Yaygın yazılım zafiyetlerini (OWASP Top 10, bellek güvenliği) tanıma, kök neden analizi ve sömürü senaryolarını değerlendirme. | 5 |
| PÇ-4 | Bir yazılımın saldırı yüzeyini ve tehdit modelini (STRIDE) analiz edebilme. | 4 |
| PÇ-5 | Girdi doğrulama, çıktı kodlama, kimlik doğrulama, yetkilendirme ve oturum yönetimini güvenli biçimde uygulayabilme. | 5 |
| PÇ-6 | Kriptografik yöntemleri (şifreleme, özetleme, anahtar yönetimi) doğru ve güvenli kullanabilme. | 4 |
| PÇ-7 | Bellek-güvenli programlama ilkelerini uygulayabilme ve düşük seviyeli (C/C++) zafiyetlere önlem alabilme. | 4 |
| PÇ-8 | Güvenli kodlama standartlarına (OWASP ASVS, SEI CERT) uygun, dayanıklı kod yazabilme. | 5 |
| PÇ-9 | SAST/DAST ve fuzzing araçlarıyla güvenlik açıklarını tespit edip giderebilme. | 4 |
| PÇ-10 | Güvenli yazılım geliştirme yaşam döngüsünü ve güvenli tasarım ilkelerini sürece entegre edebilme. | 5 |
| PÇ-11 | Güvenli kod incelemesi yapabilme ve güvenlik gereksinimlerini yazılım sürecine dâhil edebilme. | 5 |
| PÇ-12 | Üçüncü parti bağımlılıkların ve yazılım tedarik zincirinin güvenliğini değerlendirebilme. | 3 |
| PÇ-13 | API, veri katmanı ve yapılandırma güvenliğini sağlayabilme. | 4 |
| PÇ-14 | Gerçek dünya güvenlik olaylarını analiz ederek çıkarımları uygulamaya aktarabilme. | 4 |
| PÇ-15 | Etik ve yasal sorumluluk bilinciyle, bireysel ve takım hâlinde güvenli yazılım geliştirebilme; yaşam boyu öğrenme. | 4 |

</details>
