---
layout: '~/layouts/MarkdownLayout.astro'
title: Güvenli Kodlama ve Programlama
description: 'Secure Coding and Programming — 14 haftalık seçmeli lisans dersi izlencesi (R.C. Öztaş, Turknet): OWASP Top 10 (2025), tehdit modelleme, web ve bellek güvenliği, SAST/DAST, AI destekli geliştirme ve LLM uygulama güvenliği.'
---

**Secure Coding and Programming** · Seçmeli Lisans Dersi · 2026–27 Güz Dönemi · Eğitmen: **Refik Can Öztaş** (Offensive Security, Turknet)

Bu ders, öğrencilere yazılım geliştirme yaşam döngüsünün her aşamasında güvenliği gözeten bir programlama ve mühendislik bakış açısı kazandırmayı amaçlar. Yaygın yazılım zafiyetleri önce **saldırgan bakış açısıyla** sömürü senaryoları üzerinden gösterilir, ardından **savunma ve güvenli kodlama** teknikleri uygulamalı olarak işlenir. Ders, klasik web ve bellek güvenliği konularının yanında yapay zekâ destekli geliştirmenin ve büyük dil modeli (LLM) tabanlı uygulamaların güvenliğini de kapsar. Hedef; güvenliği tasarım aşamasından itibaren uygulayabilen (*security by design*) yazılım geliştiriciler yetiştirmektir.

## Temel Bilgiler

|                    |                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ders Kodu**      | MTH – *(üniversite tarafından belirlenecektir)*                                                                                                                |
| **Ders Adı**       | Güvenli Kodlama ve Programlama (*Secure Coding and Programming*)                                                                                               |
| **Dersin Türü**    | Seçmeli                                                                                                                                                        |
| **Ders Dili**      | Türkçe                                                                                                                                                         |
| **Sınıf Seviyesi** | Lisans 3. ve 4. sınıf                                                                                                                                          |
| **Dönem**          | 2026–27 Güz Dönemi                                                                                                                                             |
| **Uygun Bölümler** | Bilgisayar Müh., Yazılım Müh., Bilişim Sistemleri Müh., Bilgisayar Bilimleri, Yapay Zekâ Müh., Matematik Müh.                                                  |
| **Ön Koşul**       | Temel programlama dersini almış olmak (Java, C#, Python vb. bir dilde kod geliştirebilmek); web uygulamaları ve veri tabanı kavramlarında temel düzeyde bilgi. C bilgisi tercih sebebidir, zorunlu değildir. |
| **Eğitmen**        | Refik Can Öztaş — Offensive Security Uzmanı ve Güvenlik Araştırmacısı, Turknet                                                                                 |

## Dersin Özet İçeriği

Yazılım güvenliğinin temel kavramları (tehdit, zafiyet, risk, gizlilik–bütünlük–erişilebilirlik) ve saldırgan (*offensive*) bakış açısı; güvenli tasarım ilkeleri ve güvenli yazılım geliştirme yaşam döngüsü (SSDLC); tehdit modelleme (STRIDE) ve saldırı yüzeyi analizi; güvenli kodlama standartları (OWASP, SEI CERT) ve OWASP Top 10 (2025); enjeksiyon saldırıları ve güvenilmeyen girdinin işlenmesi (girdi doğrulama, deserileştirme, dosya yükleme); tarayıcı güvenlik modeli, XSS ve CSRF; uygulamalı kriptografi; kimlik doğrulama, parola ve oturum yönetimi; yetkilendirme, erişim kontrolü ve API güvenliği (IDOR/BOLA, SSRF, toplu atama); bellek güvenliği ve C/C++ zafiyetleri (taşma, use-after-free) ile önlemleri; güvenli yapılandırma, hata yönetimi, loglama ve yazılım tedarik zinciri güvenliği; statik ve dinamik program analizinin (SAST/DAST) çalışma prensipleri ve sınırları; yapay zekâ destekli yazılım geliştirmede güvenlik; LLM tabanlı uygulamaların güvenliği (prompt injection, ajan yetkileri, güvensiz çıktı işleme); her hafta sektörden gerçek vaka ve saldırı analizleri.

## Öğrenme Kazanımları

Bu dersi başarıyla tamamlayan öğrenci:

1. Yazılım güvenliğinin temel kavramlarını (tehdit, zafiyet, risk, CIA üçlüsü) ve saldırgan bakış açısını açıklar.
2. Web/uygulama katmanından bellek güvenliği hatalarına kadar yaygın zafiyetleri (OWASP Top 10) tanır; kök nedenlerini ve sömürü senaryolarını analiz eder.
3. Tehdit modelleme yöntemleriyle bir yazılımın saldırı yüzeyini analiz eder.
4. Girdi doğrulama, çıktı kodlama, kimlik doğrulama, yetkilendirme, kriptografi ve güvenli API tasarımı gibi güvenli kodlama tekniklerini doğru şekilde uygular.
5. Güvenli kodlama standartlarına (OWASP, SEI CERT) uygun, bellek-güvenli ve dayanıklı kod yazar.
6. Statik ve dinamik analiz araçlarının (SAST/DAST) çalışma prensiplerini açıklar, sınırlarını değerlendirir ve bu araçları kullanarak kaynak koddaki güvenlik açıklarını tespit edip giderir.
7. Güvenli kod inceleme süreçlerine katılır ve güvenlik gereksinimlerini yazılım geliştirme sürecine entegre eder.
8. Yapay zekâ destekli kod üretiminin güvenlik risklerini değerlendirir; LLM tabanlı uygulamaları güvenli tasarlar ve test eder.

## Dersin İşleyişi

Her hafta aynı düzen izlenir: konunun **saldırı tarafı** gerçek bir zafiyet veya olay üzerinden gösterilir, ardından **savunma ve güvenli kodlama** teknikleri işlenir, hafta **kod incelemesi veya kısa uygulama** ile kapanır. Ders materyalleri ve duyurular bu sayfadan ve ders platformundan paylaşılır.

## Değerlendirme

| Faaliyet     | Sayı | Ağırlık  |
| ------------ | ---- | -------- |
| Ödev         | 2    | %20      |
| Dönem Projesi | 1   | %30      |
| Final Sınavı | 1    | %50      |
| **Toplam**   |      | **%100** |

> Ders açma sürecinde, üniversitenin kriterlerine göre değerlendirme süreçlerinde değişiklik yapılabilir.

### Ödevler (%20)

İki bireysel ödev, her biri %10.

- **Ödev 1 — Web zafiyetleri.** 2. haftada verilir, 5. haftada teslim edilir. Verilen zafiyetli web uygulamasında enjeksiyon, XSS ve CSRF sınıflarından açıkların bulunması, çalışan bir PoC ile gösterilmesi, düzeltilmesi ve her bulgu için kök neden → düzeltme → CWE eşlemesi içeren kısa bir rapor.
- **Ödev 2 — Bellek güvenliği ve analiz.** 7. haftada verilir, 9. haftada teslim edilir. Verilen C programındaki bellek hatalarının tespiti, kök neden analizi ve düzeltilmesi; ek olarak bir statik analiz aracının aynı kod üzerindeki bulgularının triyajı (gerçek bulgu / yanlış pozitif / kaçırılan hata).

Geç teslimde her gün için %10 kesinti uygulanır; 3 günden sonra teslim alınmaz.

### Dönem Projesi — Zafiyet Otopsisi (%30)

Takımlar, ders haftalarına eşlenmiş listeden gerçek ve yamalanmış bir zafiyet (CVE veya güvenlik olayı) seçer ve onu uçtan uca inceler. Sunumun zorunlu beş bölümü:

1. **Zafiyetli kod ve kök neden** — gerçek repodan kod parçası, CWE ve OWASP Top 10 eşlemesi.
2. **Sömürü yolu** — tetikleme adımları ve etkisi; izole ortamda canlı gösterim isteğe bağlı bonus.
3. **Yama eleştirisi** — yayınlanan diff üzerinden "bu düzeltme tam mı?": bypass edildi mi, takip CVE'si çıktı mı.
4. **Önleme** — dersteki hangi ilke veya pratik bu hatayı engellerdi; statik/dinamik analiz bunu yakalar mıydı, neden.
5. **Üç çıkarım.**

**Takım büyüklüğü ve sunum süresi** ders mevcuduna göre belirlenir:

| Ders mevcudu | Takım | Sunum | Sunum haftaları |
| ------------ | ----- | ----- | --------------- |
| ≤ 24 öğrenci | 2 kişi | 12 dk + 5 dk soru-cevap | 12. hafta |
| 25–45 öğrenci | 3 kişi | 12 dk + 5 dk soru-cevap | 12.–13. hafta |
| > 45 öğrenci | 4 kişi | 10 dk + 5 dk soru-cevap | 12.–13. hafta |

**Takvim:** 1. hafta konu listesi ve duyuru · 3. hafta takımlar ve konu seçimi (aynı konu en fazla bir takıma) · 6. hafta ara kontrol (zafiyetli kod ve yama diff'i bulunmuş, kök neden yazılmış olmalı) · 12.–13. hafta sunum ve 4–6 sayfalık teknik raporun teslimi.

**Puanlama (30 puan):** teknik derinlik ve doğruluk 10 · soru-cevap 8 · yama eleştirisi 5 · sunum kalitesi 4 · rapor 3. Soru-cevap her takım üyesine ayrı ayrı yöneltilir; bireysel notlar takım notundan farklılaşabilir.

### Final Sınavı (%50)

Tüm haftaları kapsar, kapalı kaynaktır. Soru tipleri: verilen kod parçasında zafiyeti bulma ve kök nedeni açıklama, düzeltme yazma veya doğru düzeltmeyi seçme, kısa senaryo üzerinden tehdit modeli ve tasarım kararı, kısa açık uçlu sorular.

### Yapay Zekâ Araçlarının Kullanımı

Ödev ve projede yapay zekâ araçları (kod asistanları, ajanlar) serbesttir. Her teslime hangi aracın ne için kullanıldığını belirten kısa bir kullanım notu eklenir. Değerlendirme, teslim edilen çıktının anlaşılmış olmasına dayanır: proje soru-cevabı bireyseldir ve ödevlerle ilgili sözlü açıklama istenebilir. Sınavda yapay zekâ araçları kullanılamaz.

### Etik Kurallar

Saldırı teknikleri yalnızca ders kapsamında sağlanan hedef sistemler ve izole ortamlar üzerinde uygulanır. Gerçek sistemlere izinsiz test yapmak dersin kapsamı dışındadır ve yasal sorumluluk doğurur. Bulunan gerçek zafiyetler sorumlu ifşa (*responsible disclosure*) ilkelerine göre, eğitmenle birlikte ele alınır.

## Haftalık Ders İçeriği

| Hafta | Konu | Açıklama |
| ----- | ---- | -------- |
| 1 | Yazılım güvenliğine giriş: saldırgan bakış açısı, güvenli tasarım ilkeleri ve tehdit modelleme | Temel kavramlar (tehdit, zafiyet, risk, exploit, CIA üçlüsü), saldırı yüzeyi ve saldırı zinciri; uygulama hatası (*bug*) ile tasarım hatası (*flaw*) ayrımı; CWE/CVE/CVSS okuryazarlığı; OWASP Top 10 (2025) ve SEI CERT'e giriş; güvenli tasarım ilkeleri (en az ayrıcalık, derinlemesine savunma, güvenli varsayılanlar, açık tasarım, tam aracılık) gerçek ihlal örnekleriyle; STRIDE, veri akış diyagramı ve güven sınırlarıyla tehdit modellemeye giriş; etik ve sorumlu ifşa; dönem projesinin duyurulması. |
| 2 | Enjeksiyon saldırıları ve güvenilmeyen girdinin güvenli işlenmesi | SQL enjeksiyonu (union/blind/time-based), komut enjeksiyonu, NoSQL/LDAP/şablon enjeksiyonu, XXE, güvensiz deserileştirme ve dosya yükleme zafiyetlerinin sömürülmesi; parametreli sorgular ve ORM'in sınırları, allowlist temelli doğrulama, kanonikleştirme, çıktı kodlama, *domain primitive* yaklaşımı, güvenli serileştirme ve dosya işleme, en az ayrıcalıklı veritabanı hesabı. Ödev 1 verilir. |
| 3 | Tarayıcı güvenlik modeli ve istemci taraflı web saldırıları (XSS, CSRF) | Same-origin policy, çerez öznitelikleri (HttpOnly, Secure, SameSite), CORS; reflected/stored/DOM XSS, CSRF ve clickjacking saldırıları; bağlama duyarlı çıktı kodlama, Content Security Policy, anti-CSRF token, frame-ancestors ve güvenli şablon motorlarıyla savunma. Proje takımlarının oluşturulması ve konu seçimi. |
| 4 | Yazılım geliştiriciler için uygulamalı kriptografi: doğru kullanım ve yaygın hatalar | Simetrik/asimetrik şifreleme, AEAD, özet fonksiyonları ve HMAC, dijital imza, anahtar türetme, güvenli rastgelelik, TLS ve sertifika doğrulama; yanlış kullanım saldırıları (ECB, IV tekrarı, MD5/SHA-1, gömülü anahtar, sertifika doğrulamanın kapatılması, padding oracle); iyi bilinen kütüphanelerin yüksek seviyeli API'leri, gizli anahtar (*secret*) yönetimi ve rotasyon. |
| 5 | Kimlik doğrulama, parola ve oturum yönetimi | Credential stuffing ve kaba kuvvet, oturum sabitleme ve ele geçirme (*session hijacking*), parola sıfırlama akışı hataları, JWT hataları (alg=none, zayıf secret); parola saklama (bcrypt/scrypt/Argon2), hız sınırlama ve hesap kilitleme, çok faktörlü kimlik doğrulama, oturum yaşam döngüsü, JWT/OAuth 2.0/OIDC'nin doğru kullanımı, passkey/WebAuthn'e bakış. Ödev 1 teslimi. |
| 6 | Yetkilendirme, erişim kontrolü ve API güvenliği | IDOR/BOLA, yatay/dikey yetki yükseltme (*privilege escalation*), fonksiyon düzeyinde yetki eksikliği, path traversal, toplu atama (*mass assignment*), aşırı veri ifşası, SSRF ve GraphQL'e özgü riskler; varsayılan olarak reddetme, sunucu tarafında merkezi yetkilendirme, RBAC/ABAC, nesne düzeyinde yetkilendirme, şema tabanlı doğrulama, hız sınırlama, SSRF için allowlist ve egress kontrolü. Proje ara kontrolü. |
| 7 | Bellek güvenliği: C/C++ zafiyetleri, sömürü mantığı ve önlemler | C bellek modeli ve tanımsız davranış (*undefined behavior*); yığın/öbek taşması, use-after-free, format string ve tamsayı taşması zafiyetleri ile sömürü mantığı (uygulamalı gösterim); stack canary, DEP/NX, ASLR, RELRO/PIE ve CFI önlemleri; SEI CERT C/C++ kuralları, sınırlı fonksiyonlar, güvenli tamsayı aritmetiği, sanitizer'larla hata yakalama, bellek-güvenli dillere (Rust) bakış. Ödev 2 verilir. |
| 8 | Güvenli yapılandırma, loglama ve yazılım tedarik zinciri güvenliği | Hatalı yapılandırma (*misconfiguration*) ve bilgi sızıntısı, fail-open hata yönetimi ve istisnaların yutulması, log enjeksiyonu ve loglarda hassas veri; güvenli varsayılanlar, yapılandırma sıkılaştırma, gizli anahtarların koddan ayrılması, güvenlik loglaması ve alarm; bilinen zafiyetli bileşenler, typosquatting ve dependency confusion, ele geçirilmiş paketler, CI/CD zehirlenmesi; yazılım bileşen analizi (SCA), SBOM, sürüm sabitleme ve bütünlük doğrulama, güvenli CI/CD ve güvenlik testlerinin hatta yerleşimi. Vaka: Log4Shell, xz-utils, SolarWinds. |
| 9 | Statik ve dinamik program analizi ile zafiyet tespiti (SAST/DAST) | Statik analizin katmanları: örüntü eşleme, soyut sözdizim ağacı, kontrol ve veri akışı, taint analizi (source–sanitizer–sink), prosedürler arası analiz ve yol duyarlılığı; soundness/completeness ödünleşimi ve yanlış pozitif/negatiflerin kaynağı. Dinamik analiz: DAST anatomisi (tarama, yük üretimi, yanıt oracle'ları, out-of-band tespit), IAST ve sanitizer'lar. Yöntem–zafiyet sınıfı eşlemesi, bulgu triyajı, aracın kaçırdığını insan incelemesiyle bulma. Ödev 2 teslimi. |
| 10 | Yapay zekâ destekli yazılım geliştirmede güvenlik | Kod asistanlarının ürettiği koddaki tipik zafiyet kalıpları, var olmayan paket önerileri (*slopsquatting*) ve AI çıktısını inceleme disiplini; alandaki ampirik çalışmalar; güvenlik için AI: LLM ile zafiyet tespiti, kod incelemesi ve bulgu triyajı — nerede işe yarar, nerede yanılır; sorumlu kullanım: kaynak kod ve gizli anahtar sızdırma riski, lisans ve kurumsal politika. |
| 11 | Büyük dil modeli (LLM) tabanlı uygulamaların güvenliği | LLM uygulama mimarisi ve güven sınırları (sistem istemi, kullanıcı girdisi, RAG belgeleri, araç çağırma, ajan döngüsü); doğrudan ve dolaylı prompt injection, veri sızdırma, araç suistimali ve aşırı yetki, güvensiz çıktı işleme, sistem istemi sızıntısı, veri ve model zehirlenmesi, model tedarik zinciri, sınırsız tüketim (OWASP Top 10 for LLM Applications); mimari savunma: araçlar için en az ayrıcalık, insan onayı, çıktı doğrulama, sandbox, allowlist ve egress kontrolü, RAG'de erişim kontrolü; LLM uygulamalarını test etme. |
| 12 | Dönem projesi sunumları (I) | Takım sunumları ve soru-cevap. |
| 13 | Dönem projesi sunumları (II) ve dönem değerlendirmesi | Kalan takım sunumları; sunumlardan çıkan derslerin haftalara geri bağlanması. |
| 14 | Genel tekrar ve sınav hazırlığı | Zafiyetten yamaya bütünleşik vaka çalışması; dönemin tekrarı ve sınav formatının tanıtılması. |
| 15 | Yarıyıl sonu sınavı | — |

## Ders Kitabı / Önerilen Kaynaklar

**Standartlar ve rehberler**

- OWASP Top 10 (2025) — [owasp.org/Top10](https://owasp.org/Top10/)
- OWASP Cheat Sheet Series — [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org)
- OWASP Application Security Verification Standard (ASVS) — [owasp.org/ASVS](https://owasp.org/ASVS)
- OWASP Top 10 for LLM Applications — [genai.owasp.org](https://genai.owasp.org)
- SEI CERT Secure Coding Standards — [wiki.sei.cmu.edu](https://wiki.sei.cmu.edu)

**Kitaplar**

- Mathias Payer, *Software Security: Principles, Policies, and Protection* (SS3P) — ücretsiz, [nebelwelt.net/SS3P](https://nebelwelt.net/SS3P/)
- Robert C. Seacord, *Secure Coding in C and C++*, 2. Baskı, Addison-Wesley, 2013.
- Dan Bergh Johnsson, Daniel Deogun & Daniel Sawano, *Secure by Design*, Manning, 2019.
- Neil Daswani, Christoph Kern & Anita Kesavan, *Foundations of Security*, Apress, 2007.
- Tanya Janca, *Alice and Bob Learn Application Security*, Wiley, 2020.
- Adam Shostack, *Threat Modeling: Designing for Security*, Wiley, 2014.
- Dafydd Stuttard & Marcus Pinto, *The Web Application Hacker's Handbook*, 2. Baskı, Wiley, 2011.
- Michael Howard & David LeBlanc, *Writing Secure Code*, 2. Baskı, Microsoft Press, 2003.

**Ek çalışma (isteğe bağlı)**

- OpenSSF, *Developing Secure Software* (LFD121) — ücretsiz, sertifikalı çevrimiçi kurs, [training.linuxfoundation.org](https://training.linuxfoundation.org/training/developing-secure-software-lfd121/)
- Stanford CS 253 *Web Security* — açık ders videoları, [web.stanford.edu/class/cs253](https://web.stanford.edu/class/cs253)

**Programın Öğrenme Çıktıları ile İlişki (Katkı Düzeyi)**

*Katkı düzeyi: 0 – Yok · 1 – Çok Düşük · 2 – Düşük · 3 – Orta · 4 – Yüksek · 5 – Çok Yüksek*

| No    | Programın Öğrenme Çıktısı                                                                                                      | Katkı |
| ----- | ------------------------------------------------------------------------------------------------------------------------------ | ----- |
| PÇ-1  | Programlama temelleri, veri yapıları ve algoritmaları kullanarak doğru, verimli ve sürdürülebilir yazılım geliştirebilme.      | 4     |
| PÇ-2  | Yazılım güvenliğinin temel kavramlarını ve saldırgan bakış açısını kavrama ve açıklayabilme.                                   | 5     |
| PÇ-3  | Yaygın yazılım zafiyetlerini (OWASP Top 10, bellek güvenliği) tanıma, kök neden analizi ve sömürü senaryolarını değerlendirme. | 5     |
| PÇ-4  | Bir yazılımın saldırı yüzeyini ve tehdit modelini (STRIDE) analiz edebilme.                                                    | 4     |
| PÇ-5  | Girdi doğrulama, çıktı kodlama, kimlik doğrulama, yetkilendirme ve oturum yönetimini güvenli biçimde uygulayabilme.            | 5     |
| PÇ-6  | Kriptografik yöntemleri (şifreleme, özetleme, anahtar yönetimi) doğru ve güvenli kullanabilme.                                 | 4     |
| PÇ-7  | Bellek-güvenli programlama ilkelerini uygulayabilme ve düşük seviyeli (C/C++) zafiyetlere önlem alabilme.                      | 4     |
| PÇ-8  | Güvenli kodlama standartlarına (OWASP ASVS, SEI CERT) uygun, dayanıklı kod yazabilme.                                          | 5     |
| PÇ-9  | Statik ve dinamik analiz araçlarının (SAST/DAST) çalışma prensiplerini kavrayarak güvenlik açıklarını tespit edip giderebilme. | 4     |
| PÇ-10 | Güvenli yazılım geliştirme yaşam döngüsünü ve güvenli tasarım ilkelerini sürece entegre edebilme.                              | 5     |
| PÇ-11 | Güvenli kod incelemesi yapabilme ve güvenlik gereksinimlerini yazılım sürecine dâhil edebilme.                                 | 5     |
| PÇ-12 | Üçüncü parti bağımlılıkların ve yazılım tedarik zincirinin güvenliğini değerlendirebilme.                                      | 3     |
| PÇ-13 | API, veri katmanı ve yapılandırma güvenliğini sağlayabilme.                                                                    | 4     |
| PÇ-14 | Gerçek dünya güvenlik olaylarını analiz ederek çıkarımları uygulamaya aktarabilme.                                             | 4     |
| PÇ-15 | Etik ve yasal sorumluluk bilinciyle, bireysel ve takım hâlinde güvenli yazılım geliştirebilme; yaşam boyu öğrenme.             | 4     |
| PÇ-16 | Yapay zekâ destekli geliştirmenin ve LLM tabanlı uygulamaların güvenlik risklerini değerlendirebilme ve güvenli tasarım uygulayabilme. | 4 |
