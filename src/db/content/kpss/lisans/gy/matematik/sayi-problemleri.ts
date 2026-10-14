import type { McQ } from "../../../../types";

export const MAT_SAYI_PROBLEMLERI_T3: McQ[] = [
  {
    text: "<p>Ahmet 4 kitap, 5 silgi ve 3 deftere 29 TL ya da 2 defter 1 kitaba 11 TL ödüyor.</p><p><b>Buna göre Ahmet 2 kitap, 2 silgi ve 2 deftere kaç TL öder?</b></p>",
    diff: 2,
    expl: "4k + 5s + 3d = 29 ve k + 2d = 11. Birinci denklemin 2/5'i ile ikinci denklemin 2/5'i toplanırsa (8k/5 + 2s + 6d/5) + (2k/5 + 4d/5) = 2k + 2s + 2d = (2/5)(29 + 11) = 16 TL.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>Bir salonda 30 evli çift ve 35 bekar kadın vardır.</p><p><b>Bu salona kaç evli çift gelirse salondaki kadın sayısı erkek sayısının 2 katı olur?</b></p>",
    diff: 1,
    expl: "Başlangıçta erkek = 30, kadın = 30 + 35 = 65. x evli çift gelirse erkek = 30 + x, kadın = 65 + x olur. 65 + x = 2(30 + x) ⇒ x = 5.",
    answers: [
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>Bir öğrenci cebindeki parasıyla 2 kalem ve 6 silgi veya sadece 12 silgi alabiliyor.</p><p><b>Buna göre bu öğrenci cebindeki parası ile kaç tane kalem alabilir?</b></p>",
    diff: 1,
    expl: "2k + 6s = 12s ⇒ 2k = 6s ⇒ k = 3s. Parası 12s olduğundan 12s / 3s = 4 kalem alabilir.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>Elif hergün bir öncekinden 15 soru fazla çözüyor.</p><p><b>Elif 7 günün sonunda 490 soru çözdüğüne göre üçüncü gün kaç soru çözmüştür?</b></p>",
    diff: 2,
    expl: "Günler: a, a + 15, …, a + 90. Toplam 7a + 315 = 490 ⇒ a = 25. Üçüncü gün a + 30 = 55 soru çözmüştür.",
    answers: [
      { text: "55", ok: true },
      { text: "70", ok: false },
      { text: "85", ok: false },
      { text: "100", ok: false },
      { text: "110", ok: false }
    ]
  },
  {
    text: "<p>Esra 540 sayfalık bir kitabı hergün bir önceki günden 4 sayfa fazla okursa 9 günde bitiriyor.</p><p><b>Buna göre Esra ilk gün kaç sayfa kitap okumuştur?</b></p>",
    diff: 2,
    expl: "Ortanca (5.) gün okunan sayfa = 540 / 9 = 60. 5. gün = a + 4 · 4 = 60 ⇒ a = 44.",
    answers: [
      { text: "32", ok: false },
      { text: "36", ok: false },
      { text: "40", ok: false },
      { text: "44", ok: true },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p>Bir kumbara da 50 kr ve 1 TL'lik madeni paralardan 50 adet vardır.</p><p><b>Kumbaradaki paraların toplam tutarı 43 TL olduğuna göre kumbarada kaç tane 50 Kr'luk vardır?</b></p>",
    diff: 1,
    expl: "50 kr'luk x, 1 TL'lik y adet olsun. x + y = 50 ve 0,5x + y = 43. Taraf tarafa çıkarılırsa 0,5x = 7 ⇒ x = 14.",
    answers: [
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>50 kuruşluk ve 25 kuruşluk madeni paraların bulunduğu bir kumbarada toplam 150 adet madeni para vardır.</p><p><b>Kumbarada 65 TL olduğuna göre madeni paraların kaç tanesi 25 kuruşluktur?</b></p>",
    diff: 2,
    expl: "50 kr'luk x, 25 kr'luk y adet olsun. x + y = 150 ve 0,5x + 0,25y = 65 ⇒ 2x + y = 260. Çıkarılırsa x = 110, y = 40.",
    answers: [
      { text: "80", ok: false },
      { text: "70", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: false },
      { text: "40", ok: true }
    ]
  },
  {
    text: "<p><b>Bir markette ödeme sırasına giren Demet baştan 4. sondan 8. sırada olduğuna göre sırada kaç kişi vardır?</b></p>",
    diff: 1,
    expl: "Kişi sayısı = baştan sıra + sondan sıra − 1 = 4 + 8 − 1 = 11.",
    answers: [
      { text: "12", ok: false },
      { text: "11", ok: true },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>Bir kuyrukta Zeynep baştan 12., Fatma sondan 19. sıradadır.</p><p><b>İkisinin arasında 4 kişi olduğuna göre bu kuyrukta <u>en çok</u> kaç kişi vardır?</b></p>",
    diff: 1,
    expl: "En çok kişi için Zeynep önde, Fatma arkada olmalıdır: 12 + 4 + 19 = 35.",
    answers: [
      { text: "31", ok: false },
      { text: "32", ok: false },
      { text: "33", ok: false },
      { text: "35", ok: true },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>Bir sinema bilet kuyruğunda Talha baştan 12., Murat ise sondan 18. sıradadır.</p><p><b>Talha ile Murat arasında 6 kişi olduğuna ve Murat, Talha'dan önde olduğuna göre bu kuyrukta kaç kişi vardır?</b></p>",
    diff: 2,
    expl: "Murat önde ise Talha'nın önündeki 11 kişi içinde Murat ve aradaki 6 kişi bulunur; Murat baştan 12 − 6 − 1 = 5. sıradadır. Kişi sayısı = 5 + 18 − 1 = 22.",
    answers: [
      { text: "20", ok: false },
      { text: "21", ok: false },
      { text: "22", ok: true },
      { text: "23", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "<p>Mustafa bir deneme sınavındaki başarı sıralamasında baştan (n + 5)., sondan (2n − 4). kişidir.</p><p><b>Deneme sınavına 120 kişi katıldığına göre n kaçtır?</b></p>",
    diff: 2,
    expl: "(n + 5) + (2n − 4) − 1 = 120 ⇒ 3n = 120 ⇒ n = 40.",
    answers: [
      { text: "39", ok: false },
      { text: "40", ok: true },
      { text: "41", ok: false },
      { text: "42", ok: false },
      { text: "43", ok: false }
    ]
  },
  {
    text: "<p>Bir çubuğun yarısı kesilirse orta noktası 14 cm kayıyor.</p><p><b>Buna göre çubuk kesilmeden önce kaç cm'dir?</b></p>",
    diff: 1,
    expl: "Bir uçtan kesilen parçanın yarısı kadar orta nokta kayar. Kesilen parça 2 · 14 = 28 cm ve bu çubuğun yarısıdır; çubuk 56 cm'dir.",
    answers: [
      { text: "28", ok: false },
      { text: "36", ok: false },
      { text: "40", ok: false },
      { text: "48", ok: false },
      { text: "56", ok: true }
    ]
  },
  {
    text: "<p>Bir parça telin ucundan telin 1/10'u, diğer ucundan 1/6'sı kesildiğinde orta noktası ilk duruma göre 4 cm kayıyor.</p><p><b>Buna göre başlangıçta telin uzunluğu kaç cm dir?</b></p>",
    diff: 2,
    expl: "İki uçtan kesildiğinde orta nokta, kesilen parçaların farkının yarısı kadar kayar: (x/6 − x/10) / 2 = x/30 = 4 ⇒ x = 120 cm.",
    answers: [
      { text: "240", ok: false },
      { text: "300", ok: false },
      { text: "360", ok: false },
      { text: "420", ok: false },
      { text: "120", ok: true }
    ]
  },
  {
    text: "<p>Bir otelin 40 odasının bir bölümü 2 yataklı, gerisi 3 yataklıdır.</p><p><b>Bu otelin yatak kapasitesi 95 olduğuna göre kaç odası 2 yataklıdır?</b></p>",
    diff: 1,
    expl: "x + y = 40 ve 2x + 3y = 95 ⇒ 2x + 3(40 − x) = 95 ⇒ x = 25.",
    answers: [
      { text: "20", ok: false },
      { text: "23", ok: false },
      { text: "25", ok: true },
      { text: "27", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p><b>48 tane tavşan ve tavuğun bulunduğu bir kümeste toplam ayak sayısı 128 olduğuna göre, kümeste kaç tavşan vardır?</b></p>",
    diff: 1,
    expl: "Tavşan x, tavuk 48 − x olsun. 4x + 2(48 − x) = 128 ⇒ 2x = 32 ⇒ x = 16.",
    answers: [
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>100 soruluk bir sınavda 4 yanlış bir doğruyu götürmektedir. Her net için 4 puan kazanan bir öğrenci bütün sorularını cevaplamış ve 360 puan almıştır.</p><p><b>Buna göre bu öğrenci kaç soruya yanlış cevap vermiştir?</b></p>",
    diff: 2,
    expl: "Kitabın cevap anahtarı B (24) seçeneğini vermektedir. Not: 360 / 4 = 90 net; D + Y = 100 ve D − Y/4 = 90 denklemlerinden Y = 8 bulunur, bu değer seçeneklerde yoktur.",
    answers: [
      { text: "20", ok: false },
      { text: "24", ok: true },
      { text: "28", ok: false },
      { text: "32", ok: false },
      { text: "36", ok: false }
    ]
  },

// ─── SAYI PROBLEMLERİ TEST - 4 ────────────────────────────────────────────────

  {
    text: "<p>Bir sınıfta öğrenciler sıralara ikişer ikişer otururlarsa 8 kişi ayakta kalıyor. Üçer üçer otururlarsa 4 kişilik boş yer kalıyor.</p><p><b>Buna göre bu sınıfta kaç öğrenci vardır?</b></p>",
    diff: 2,
    expl: "Sıra sayısı x olsun. 2x + 8 = 3x − 4 ⇒ x = 12. Öğrenci sayısı 2 · 12 + 8 = 32.",
    answers: [
      { text: "20", ok: false },
      { text: "24", ok: false },
      { text: "28", ok: false },
      { text: "30", ok: false },
      { text: "32", ok: true }
    ]
  },
  {
    text: "<p>Bir sınıftaki öğrenciler sıralara üçerli otururlarsa 6 öğrenci ayakta kalıyor. Eğer dörderli otururlarsa 2 sıra boş kalıyor.</p><p><b>Buna göre, öğrenciler sıralara beşerli otururlarsa, kaç sıra tam <u>dolmaz</u>?</b></p>",
    diff: 3,
    expl: "Sıra sayısı x olsun. 3x + 6 = 4(x − 2) ⇒ x = 14, öğrenci sayısı 48. Beşerli oturulursa 9 sıra tam dolar, 1 sırada 3 kişi oturur, 4 sıra boş kalır. Tam dolmayan sıra sayısı 1 + 4 = 5.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>50 kişilik boş koltuğun bulunduğu 150 kişilik bir konferans salonuna a kişi gelirse boş koltuk sayısı (a + 10) a düşeceğine göre bu salondan (a + 3) kişi çıksaydı boş koltuk sayısı kaç olurdu?</b></p>",
    diff: 2,
    expl: "Salonda 100 kişi vardır. a kişi gelirse boş koltuk 50 − a = a + 10 ⇒ a = 20. Salondan a + 3 = 23 kişi çıksaydı boş koltuk sayısı 50 + 23 = 73 olurdu.",
    answers: [
      { text: "27", ok: false },
      { text: "43", ok: false },
      { text: "57", ok: false },
      { text: "73", ok: true },
      { text: "77", ok: false }
    ]
  },
  {
    text: "<p>Enes 6 adım ileri, 2 adım geri atarak ilerliyor.</p><p><b>Toplam 89 adım attığına göre kaç adım ilerlemiş olur?</b></p>",
    diff: 2,
    expl: "Her 8 adımda net 4 adım ilerler. 89 = 11 · 8 + 1 olduğundan 11 · 4 = 44 adım ilerler, kalan 1 adım da ileri atılır: 44 + 1 = 45.",
    answers: [
      { text: "42", ok: false },
      { text: "43", ok: false },
      { text: "44", ok: false },
      { text: "45", ok: true },
      { text: "46", ok: false }
    ]
  },
  {
    text: "<p>30 metre derinliğindeki bir kuyunun dibinde bulunan kurbağa, hergün 5 metre yukarı çıkarken 3 metre aşağı kaymaktadır.</p><p><b>Buna göre kurbağa kaçıncı günde kuyudan çıkar?</b></p>",
    diff: 2,
    expl: "Günlük net ilerleme 2 m'dir. Son gün kaymayacağından n. gün sonunda 2(n − 1) + 5 ≥ 30 olmalıdır ⇒ n − 1 ≥ 12,5 ⇒ n = 14. (13 gün sonunda 26 m'dedir, 14. gün 5 m çıkarak kuyudan çıkar.)",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "17", ok: false }
    ]
  },
  {
    text: "<p>Bir fare 32 m uzunluğundaki bir ağaca tırmanırken 4 m çıkıp 1 m aşağı kayıyor.</p><p><b>Buna göre fare bu ağacın en üst yüzeyine geldiğinde kaç m yol almış olur?</b></p>",
    diff: 3,
    expl: "Her döngüde 5 m yol alır, net 3 m yükselir. 10 döngü sonunda 30 m yükseklikte olur ve 50 m yol almıştır. Kalan 2 m'yi çıkarak tepeye ulaşır: 50 + 2 = 52 m.",
    answers: [
      { text: "45", ok: false },
      { text: "46", ok: false },
      { text: "48", ok: false },
      { text: "50", ok: false },
      { text: "52", ok: true }
    ]
  },
  {
    text: "<p>Bir fidan dikildikten sonra her ayın sonunda bir önceki aydaki boyunun 3 katı oluyor.</p><p><b>Bu fidanın boyu 8. ayın sonunda 3<sup>8</sup>/2 cm olduğuna göre kaçıncı ayın sonunda boyu 13,5 cm olur?</b></p>",
    diff: 2,
    expl: "Başlangıç boyu x ise n. ayın sonunda x · 3<sup>n</sup> olur. x · 3<sup>8</sup> = 3<sup>8</sup>/2 ⇒ x = 1/2. (1/2) · 3<sup>n</sup> = 27/2 ⇒ 3<sup>n</sup> = 27 ⇒ n = 3.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>Ferda bir merdivenin basamaklarını ikişer ikişer çıkıp, üçer üçer inmiştir.</p><p><b>Ferda'nın çıkarken attığı adım sayısı, inerken attığı adım sayısından 15 fazla ise bu merdiven kaç basamaklıdır?</b></p>",
    diff: 1,
    expl: "x/2 − x/3 = 15 ⇒ x/6 = 15 ⇒ x = 90.",
    answers: [
      { text: "60", ok: false },
      { text: "75", ok: false },
      { text: "90", ok: true },
      { text: "120", ok: false },
      { text: "150", ok: false }
    ]
  },
  {
    text: "<p>Dolu bir bidonun ağırlığı x kg, yarısı dolu bidonun ağırlığı y kg'dır.</p><p><b>Buna göre boş bidonun ağırlığı kaç kg'dır?</b></p>",
    diff: 2,
    expl: "Boş bidon B, su S olsun. B + S = x, B + S/2 = y. İkinci denklemin 2 katından birinci çıkarılırsa B = 2y − x.",
    answers: [
      { text: "2y − x", ok: true },
      { text: "y − x", ok: false },
      { text: "x − y", ok: false },
      { text: "x + y", ok: false },
      { text: "(x − y)/(x + y)", ok: false }
    ]
  },
  {
    text: "<p>Bir kitabın sayfalarını 1 den başlayarak numaralandırmak için 264 rakam kullanılmıştır.</p><p><b>Buna göre bu kitap kaç sayfadır?</b></p>",
    diff: 2,
    expl: "1–9 için 9, 10–99 için 180 rakam kullanılır (toplam 189). Kalan 264 − 189 = 75 rakam, 75 / 3 = 25 tane üç basamaklı sayfadır. Sayfa sayısı 99 + 25 = 124.",
    answers: [
      { text: "123", ok: false },
      { text: "124", ok: true },
      { text: "125", ok: false },
      { text: "126", ok: false },
      { text: "127", ok: false }
    ]
  },
  {
    text: "<p><b>İçinde bir miktar su bulunan kap 3 kg gelmektedir. Kaba içindeki suyun 3 katı kadar su ilave edildiğinde kalan ağırlığı 4,8 kg geldiğine göre boş kabın ağırlığı kaç kg'dır?</b></p>",
    diff: 2,
    expl: "K + S = 3 ve K + 4S = 4,8 ⇒ 3S = 1,8 ⇒ S = 0,6 ⇒ K = 2,4 kg.",
    answers: [
      { text: "2,2", ok: false },
      { text: "2,3", ok: false },
      { text: "2,4", ok: true },
      { text: "2,5", ok: false },
      { text: "2,6", ok: false }
    ]
  },
  {
    text: "<p>Su dolu bir şişe 900 gramdır. Suyun yarısı içildiğinde şişe 680 gram gelmektedir.</p><p><b>Buna göre boş şişenin ağırlığı kaç gramdır?</b></p>",
    diff: 1,
    expl: "Suyun yarısı 900 − 680 = 220 g, tamamı 440 g'dır. Boş şişe 900 − 440 = 460 g.",
    answers: [
      { text: "460", ok: true },
      { text: "440", ok: false },
      { text: "420", ok: false },
      { text: "400", ok: false },
      { text: "380", ok: false }
    ]
  },
  {
    text: "<p>Bir sokağın her iki tarafına eşit aralıklarla sokağın başına ve sonuna bir direk gelecek şekilde toplam 18 direk dikilecektir. 2 direk arası 3 m daha uzun olsaydı toplam 12 direk dikilecekti.</p><p><b>Buna göre sokağın uzunluğu kaç m'dir?</b></p>",
    diff: 3,
    expl: "Kitabın cevap anahtarı B (93,5) seçeneğini vermektedir; bu sonuç her bir tarafa 18 ve 12 direk dikildiği kabul edilerek bulunur: aralık x ise 17x = 11(x + 3) ⇒ x = 5,5 ⇒ uzunluk 17 · 5,5 = 93,5 m. (\"Toplam\" ifadesi iki tarafın toplamı olarak alınırsa 8x = 5(x + 3) ⇒ 40 m bulunur ve bu seçeneklerde yoktur.)",
    answers: [
      { text: "36", ok: false },
      { text: "93,5", ok: true },
      { text: "45", ok: false },
      { text: "48", ok: false },
      { text: "67,5", ok: false }
    ]
  },
  {
    text: "<p>Ali, Ahmet ve Ayşe'nin toplam 45 tane oyuncağı vardır. Ali oyuncaklarının yarısını Ahmet'e, Ahmet oyuncaklarının üçte birini Ayşe'ye ve Ayşe'de oyuncaklarının dörtte birini Ali'ye verdiğinde hiç kimsenin oyuncak sayısı değişmiyor.</p><p><b>Başlangıçta Ahmet'in kaç oyuncağı vardır?</b></p>",
    diff: 3,
    expl: "Ali, Ahmet, Ayşe'nin oyuncakları A, B, C olsun. Herkesin verdiği aldığına eşittir: A/2 = C/4, B/3 = A/2 ⇒ C = 2A, B = 1,5A. A + 1,5A + 2A = 4,5A = 45 ⇒ A = 10, B = 15.",
    answers: [
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: true },
      { text: "18", ok: false }
    ]
  }
];

export const MAT_SAYI_PROBLEMLERI_T5: McQ[] = [
  {
    text: "<p>Bir koşu yarışmasında üç koşucu aynı anda koşmaya başlamışlardır.</p><p>Birinci gelen koşucu yarışı bitirdiğinde ikinci ile arasında 28 m, üçüncü ile arasında 48 m mesafe bulunmaktadır. İkinci gelen atlet yarışı bitirdiğinde ise üçüncü ile arasında 24 metre mesafe bulunmaktadır.</p><p><b>Buna göre yarış pisti kaç m dir?</b></p>",
    diff: 3,
    expl: "Pist L olsun. Birinci bitirdiğinde ikinci L − 28, üçüncü L − 48 metrededir. İkinci kalan 28 m'yi koşarken üçüncü 48 − 24 = 24 m koşar; hız oranı 28/24 = 7/6'dır. (L − 28)/(L − 48) = 7/6 ⇒ 6L − 168 = 7L − 336 ⇒ L = 168 m.",
    answers: [
      { text: "140", ok: false },
      { text: "168", ok: true },
      { text: "192", ok: false },
      { text: "144", ok: false },
      { text: "156", ok: false }
    ]
  },
  {
    text: "<p>Kitap fuarına giden bir öğrenci grubunda 10 öğrenci 1'er kitap almış, diğer öğrencilerin her biri ise en az 3 en fazla 5 kitap almıştır. 4'er kitap alan öğrencilerin sayısı; 3'er kitap alan öğrencilerin sayısının üç katına, 5'er kitap alan öğrencilerin sayısının ise yarısına eşittir.</p><p><b>Gruptaki öğrenciler toplam 190 kitap aldığına göre, grupta kaç öğrenci vardır?</b></p>",
    diff: 3,
    expl: "3'er kitap alan a kişi ise 4'er alan 3a, 5'er alan 6a kişidir. 10 + 3a + 12a + 30a = 190 ⇒ 45a = 180 ⇒ a = 4. Öğrenci sayısı 10 + 4 + 12 + 24 = 50.",
    answers: [
      { text: "36", ok: false },
      { text: "40", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: true },
      { text: "44", ok: false }
    ]
  },
  {
    text: "<p>Murat, 1'den 10'a kadar tam sayılarla numaralandırılmış 10 karttan önce iki kart çekiyor, sonra kalan kartlardan iki kart daha alarak toplam dört kart alıyor. Murat'ın aldığı kartlarla ilgili aşağıdakiler bilinmektedir.</p><ul><li>Murat'ın önce aldığı iki kartın numaraları çarpımı 24'tür.</li><li>Murat'ın önce aldığı iki kartın numaraları toplamı, sonra aldığı iki kartın numaraları toplamına eşittir.</li></ul><p><b>Buna göre, Murat'ın sonradan aldığı kartların numaraları çarpımı kaç farklı değer alabilir?</b></p>",
    diff: 3,
    expl: "Çarpımı 24 olan kartlar (3, 8) veya (4, 6)'dır. (3, 8) için toplam 11: sonraki kartlar (1, 10), (2, 9), (4, 7), (5, 6) ⇒ çarpımlar 10, 18, 28, 30. (4, 6) için toplam 10: (1, 9), (2, 8), (3, 7) ⇒ çarpımlar 9, 16, 21. Toplam 7 farklı değer.",
    answers: [
      { text: "7", ok: true },
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Mehmet, ikisi fizik ve ikisi kimya olmak üzere her birinde 16'şar soru bulunan 4 farklı test çözmüştür. Mehmet'in bu 4 testteki doğru cevap sayılarının ortalaması 12, kimya testlerindeki doğru cevap sayılarının ortalaması ise 11'dir.</p><p><b>Buna göre, Mehmet'in bir fizik testindeki doğru cevap sayısı ile bir kimya testindeki doğru cevap sayısı arasındaki fark en fazla kaç olabilir?</b></p>",
    diff: 3,
    expl: "Toplam doğru 48, kimya toplamı 22, fizik toplamı 26'dır. Fizik testlerinden biri 16 olabilir; kimya testlerinden biri en az 22 − 16 = 6 olur. Fark en fazla 16 − 6 = 10'dur. (Ters durumda kimya 16, fizik en az 26 − 16 = 10 ⇒ fark 6.)",
    answers: [
      { text: "8", ok: false },
      { text: "7", ok: false },
      { text: "11", ok: false },
      { text: "10", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Yedi vagonlu trendeki her bir vagona en fazla 25 yolcu binmektedir. Bu trende ardışık olan her iki vagondaki toplam yolcu sayısının 29 olduğu biliniyor.</p><p><b>Buna göre, trendeki toplam yolcu sayısı en az kaç olabilir?</b></p>",
    diff: 3,
    expl: "Ardışık iki vagonun toplamı 29 olduğundan tek sıradaki vagonlar (1, 3, 5, 7) x, çift sıradakiler (2, 4, 6) 29 − x yolcu taşır. Toplam 4x + 3(29 − x) = x + 87. 29 − x ≤ 25 ⇒ x ≥ 4. En az toplam 4 + 87 = 91.",
    answers: [
      { text: "90", ok: false },
      { text: "91", ok: true },
      { text: "104", ok: false },
      { text: "86", ok: false },
      { text: "85", ok: false }
    ]
  },
  {
    text: "<p>0 ile 100 arasında puan verilen bir sınava giren 15 öğrenciden 10 öğrencinin 60'dan fazla 80'den az puan aldığı bilinmektedir.</p><p><b>Buna göre bu 15 öğrencinin sınavdan aldıkları puanların aritmetik ortalaması</b></p><p>I. 45<br>II. 75<br>III. 88</p><p><b>değerlerinden hangileri olabilir?</b></p>",
    diff: 3,
    expl: "10 öğrencinin toplamı 600'den büyük, 800'den küçüktür; diğer 5 öğrencinin toplamı 0 ile 500 arasındadır. Ortalama 600/15 = 40'tan büyük, 1300/15 ≈ 86,7'den küçüktür. 45 ve 75 olabilir, 88 olamaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>Bir grup çocuk belirli sayıdaki ellerinde bulunan şekerleri eşit sayıda paylaşmış ve her biri kendi şekerlerinden 2 tanesini yemiştir. Gruba daha sonra katılan Ozan'a ellerinde kalan şekerlerden birer tane verdiklerinden gruptaki herkesin elinde eşit sayıda şeker olduğu görülmüştür.</p><p><b>Buna göre başlangıçtaki şeker sayısı aşağıdakilerden hangisi <u>olamaz</u>?</b></p>",
    diff: 3,
    expl: "N çocuk ve C şeker olsun. Her çocukta C/N − 3 şeker kalır, Ozan'da N şeker olur. C/N − 3 = N ⇒ C = N(N + 3). 108 = 9 · 12, 40 = 5 · 8, 54 = 6 · 9, 70 = 7 · 10 yazılabilir; 36 bu biçimde yazılamaz.",
    answers: [
      { text: "108", ok: false },
      { text: "40", ok: false },
      { text: "54", ok: false },
      { text: "36", ok: true },
      { text: "70", ok: false }
    ]
  },
  {
    text: "<p>Tamamen dolu olan bir laptopun bataryası; sadece uyku moduna alındığında 120 saatte, film izlerken ise 5 saatte tamamen bitiyor. Bu laptopun bataryası uyku modunda da film izlerken de sabit hızla azalıyor. Bataryası tamamen dolu olan bu laptop 40 saat sadece uyku moduna alınıyor ve hemen ardından 45 dakika sadece film izleniyor.</p><p><b>Buna göre, bu laptopun kalan bataryası ile en fazla kaç dakika film izlenebilir?</b></p>",
    diff: 2,
    expl: "40 saat uyku bataryanın 40/120 = 1/3'ünü, 45 dakika film 45/300 = 3/20'sini tüketir. Kalan 1 − 1/3 − 3/20 = 31/60. Film süresi 300 · 31/60 = 155 dakika.",
    answers: [
      { text: "155", ok: true },
      { text: "145", ok: false },
      { text: "165", ok: false },
      { text: "90", ok: false },
      { text: "135", ok: false }
    ]
  },

// ─── KESİR PROBLEMLERİ TEST - 1 ───────────────────────────────────────────────

  {
    text: "<p><b>Yarısı ile 2 katının toplamı 45 olan sayının 1/3'ü kaçtır?</b></p>",
    diff: 1,
    expl: "x/2 + 2x = 45 ⇒ 5x/2 = 45 ⇒ x = 18. 18'in 1/3'ü 6'dır.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: true },
      { text: "20/3", ok: false },
      { text: "25/3", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>Hangi sayının 1/4'üne 7 eklenirse 15 elde edilir?</b></p>",
    diff: 1,
    expl: "x/4 + 7 = 15 ⇒ x/4 = 8 ⇒ x = 32.",
    answers: [
      { text: "2", ok: false },
      { text: "8", ok: false },
      { text: "16", ok: false },
      { text: "32", ok: true },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p><b>200 gramı 36 TL olan bir baharat çeşidinin 3/4 kg'ı kaç TL dir?</b></p>",
    diff: 1,
    expl: "1 kg = 5 · 36 = 180 TL. 3/4 kg = 180 · 3/4 = 135 TL.",
    answers: [
      { text: "96", ok: false },
      { text: "108", ok: false },
      { text: "120", ok: false },
      { text: "135", ok: true },
      { text: "180", ok: false }
    ]
  },
  {
    text: "<p><b>3/5'i 21 olan sayının 2/7'si kaçtır?</b></p>",
    diff: 1,
    expl: "3x/5 = 21 ⇒ x = 35. 35 · 2/7 = 10.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "27", ok: false }
    ]
  },
  {
    text: "<p><b>Hangi sayının 1/5'inin 18 fazlası, aynı sayının 1/3'ünün 8 eksiğine eşittir?</b></p>",
    diff: 2,
    expl: "x/5 + 18 = x/3 − 8 ⇒ 26 = 2x/15 ⇒ x = 195.",
    answers: [
      { text: "145", ok: false },
      { text: "165", ok: false },
      { text: "195", ok: true },
      { text: "225", ok: false },
      { text: "270", ok: false }
    ]
  },
  {
    text: "<p>Bir aracın yakıt deposuna 20 lt yakıt eklenince deponun yarısı, 10 lt yakıt azaltınca deponun 1/4'ü dolu oluyor.</p><p><b>Buna göre depo kaç lt'liktir?</b></p>",
    diff: 2,
    expl: "Yakıt x, depo V olsun. x + 20 = V/2 ve x − 10 = V/4 ⇒ 30 = V/4 ⇒ V = 120 lt.",
    answers: [
      { text: "60", ok: false },
      { text: "90", ok: false },
      { text: "100", ok: false },
      { text: "120", ok: true },
      { text: "150", ok: false }
    ]
  },
  {
    text: "<p>Bir kitabın önce 2/7'si sonra kalanın 1/5'i okunuyor.</p><p><b>Okunan kısım tüm kitabın kaçta kaçıdır?</b></p>",
    diff: 2,
    expl: "Kitap 35x olsun. Önce 10x okunur, kalan 25x'in 1/5'i 5x okunur. Okunan 15x/35x = 3/7.",
    answers: [
      { text: "3/7", ok: true },
      { text: "4/7", ok: false },
      { text: "8/35", ok: false },
      { text: "18/35", ok: false },
      { text: "33/35", ok: false }
    ]
  },
  {
    text: "<p><b>3 yanlışın 1 doğruyu götürdüğü 30 soruluk bir sınavda, sadece 2 soruyu boş bırakan öğrenci 20 net yaptığına göre kaç yanlış yapmıştır?</b></p>",
    diff: 2,
    expl: "D + Y = 28 ve D − Y/3 = 20 ⇒ 28 − Y − Y/3 = 20 ⇒ 4Y/3 = 8 ⇒ Y = 6.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: true },
      { text: "9", ok: false },
      { text: "12", ok: false },
      { text: "22", ok: false }
    ]
  },
  {
    text: "<p><b>İpek parasının 2/15'ini kardeşine verince, kardeşine verdiği paranın 6 katının 15 TL fazlası kendisinde kaldığına göre kardeşine ne kadar vermiştir?</b></p>",
    diff: 2,
    expl: "Para 15x olsun. Kardeşine 2x verir, 13x kalır. 13x = 6 · 2x + 15 ⇒ x = 15. Kardeşine 2x = 30 TL vermiştir.",
    answers: [
      { text: "15", ok: false },
      { text: "30", ok: true },
      { text: "105", ok: false },
      { text: "195", ok: false },
      { text: "225", ok: false }
    ]
  },
  {
    text: "<p><b>Bir yayık makinesindeki ayranın önce 1/5'i sonra 2/3'ü satıldığında makinede 4 litre ayran kaldığına göre, yayık makinesi kaç litreliktir?</b></p>",
    diff: 2,
    expl: "Kesirler bütüne göredir. Makine 15x olsun: 3x + 10x = 13x satılır, 2x kalır. 2x = 4 ⇒ x = 2 ⇒ 30 litre.",
    answers: [
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: true }
    ]
  },
  {
    text: "<p>Halit her gün cebindeki paranın 1/5'ini harcıyor.</p><p><b>4. günün başında 320 TL parası olduğuna göre, Halit'in cebinde ilk günün sonunda ne kadar kalmıştır?</b></p>",
    diff: 3,
    expl: "Kitabın cevap anahtarı A (400) seçeneğini vermektedir. Her gün paranın 4/5'i kalır. 4. günün başı 3. günün sonudur: 3. gün başında 320 · 5/4 = 400 TL vardır (bu, 2. günün sonundaki paradır). Not: Hesap ilk günün sonu için sürdürülürse 400 · 5/4 = 500 TL bulunur.",
    answers: [
      { text: "400", ok: true },
      { text: "450", ok: false },
      { text: "480", ok: false },
      { text: "500", ok: false },
      { text: "600", ok: false }
    ]
  },
  {
    text: "<p>Açık parfüm satan bir mağaza her gün 2 litre daha fazla satış yapıyor.</p><p><b>5. günün sonunda 35 litre satış yaptığına göre, 3. gün yaptığı satış 5. gün yaptığı satışın kaçta kaçıdır?</b></p>",
    diff: 2,
    expl: "Satışlar a, a + 2, a + 4, a + 6, a + 8. Toplam 5a + 20 = 35 ⇒ a = 3. 3. gün 7, 5. gün 11 litre ⇒ 7/11.",
    answers: [
      { text: "1/3", ok: false },
      { text: "3/11", ok: false },
      { text: "5/9", ok: false },
      { text: "7/11", ok: true },
      { text: "7/9", ok: false }
    ]
  },
  {
    text: "<p>KPSS'ye hazırlanan İbrahim, fasikülündeki soruların 4/15'ini çözmüştür.</p><p><b>70 soru daha çözerse sorularının yarısını çözmüş olacağına göre, çözmesi gereken kaç soru kalmıştır?</b></p>",
    diff: 2,
    expl: "Soru sayısı 30x olsun. 8x + 70 = 15x ⇒ x = 10, toplam 300 soru. 70 soru daha çözdükten sonra 150 soru çözmüş olur ve çözmesi gereken 150 soru kalır.",
    answers: [
      { text: "80", ok: false },
      { text: "100", ok: false },
      { text: "150", ok: true },
      { text: "220", ok: false },
      { text: "300", ok: false }
    ]
  },
  {
    text: "<p>Bir konser alanındaki insanların, 1/8'i konser bitmeden önce alandan ayrılmıştır. Konser bittiğinde alanda kalanların 5/7'si daha ayrılmıştır.</p><p><b>Alanda 400 kişi kaldığına göre, konser alanına toplam kaç kişi gelmiştir?</b></p>",
    diff: 2,
    expl: "Toplam 8x olsun. x kişi ayrılır, 7x kalır; 7x'in 5/7'si (5x) ayrılınca 2x kalır. 2x = 400 ⇒ 8x = 1600.",
    answers: [
      { text: "800", ok: false },
      { text: "1200", ok: false },
      { text: "1500", ok: false },
      { text: "1600", ok: true },
      { text: "2400", ok: false }
    ]
  },
  {
    text: "<p>Evden okula bisiklet ile giden Ümit, yolun 4/7'sini gittikten sonra lastiği patlıyor. Yolun kalan kısmını 1/2'sini yürüyen Ümit kalan yolu arkadaşının aracıyla gidiyor.</p><p><b>Ümit'in yürüdüğü mesafe 6 km ise ev-okul arası kaç km'dir?</b></p>",
    diff: 2,
    expl: "Yol 14x olsun. 8x bisikletle gidilir, kalan 6x'in yarısı 3x yürünür. 3x = 6 ⇒ x = 2 ⇒ 28 km.",
    answers: [
      { text: "14", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "22", ok: false },
      { text: "28", ok: true }
    ]
  },

// ─── KESİR PROBLEMLERİ TEST - 2 ───────────────────────────────────────────────

  {
    text: "<p><b>1/3'ünün 2/5'i, 1/10'unun 9 fazlası olan sayı kaçtır?</b></p>",
    diff: 2,
    expl: "(x/3) · (2/5) = x/10 + 9 ⇒ 2x/15 − x/10 = 9 ⇒ x/30 = 9 ⇒ x = 270.",
    answers: [
      { text: "15", ok: false },
      { text: "30", ok: false },
      { text: "90", ok: false },
      { text: "150", ok: false },
      { text: "270", ok: true }
    ]
  },
  {
    text: "<p><b>Bir sayının 3 eksiğinin 1/6'sı ile 3 fazlasının 1/2'si toplamı aynı sayının 3/5'ine eşit olduğuna göre bu sayı kaçtır?</b></p>",
    diff: 2,
    expl: "(x − 3)/6 + (x + 3)/2 = 3x/5. 30 ile çarpılırsa 5x − 15 + 15x + 45 = 18x ⇒ 2x = −30 ⇒ x = −15.",
    answers: [
      { text: "−18", ok: false },
      { text: "−15", ok: true },
      { text: "−5", ok: false },
      { text: "−3", ok: false },
      { text: "−1", ok: false }
    ]
  },
  {
    text: "<p>Ali cebindeki paranın 1/6'sını harcarsa cebinde 4a + 240 TL'si, 1/4'ünü harcarsa 400 − a TL'si kalacaktır.</p><p><b>1/3'ünü harcarsa kalan parası aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 3,
    expl: "Para x olsun. 5x/6 = 4a + 240 ve 3x/4 = 400 − a ⇒ a = 400 − 3x/4. Yerine yazılırsa 5x/6 = 1840 − 3x ⇒ x = 480, a = 40. Kalan para 2x/3 = 320 TL'dir. a = 40 için 40 · a − 1280 = 320 olur.",
    answers: [
      { text: "4a", ok: false },
      { text: "40 · a − 1280", ok: true },
      { text: "8a − 60", ok: false },
      { text: "8a", ok: false },
      { text: "10a − 100", ok: false }
    ]
  },
  {
    text: "<p><b>Dolu bir bidonun ağırlığı 6 kg gelmektedir. Bidondaki suyun 2/3'ü döküldükten sonra kalan su ile bidonun ağırlığı 3 kg geldiğine göre, boş bidon ağırlığı kaç kg'dır?</b></p>",
    diff: 2,
    expl: "B + S = 6 ve B + S/3 = 3 ⇒ 2S/3 = 3 ⇒ S = 9/2 ⇒ B = 3/2 kg.",
    answers: [
      { text: "3/2", ok: true },
      { text: "3", ok: false },
      { text: "9/2", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>Selim ve Sibel aynı miktardaki faturalarının ödemeleri için sırasıyla paralarının 2/7'si ve 1/4'ünü kullanmışlardır.</p><p><b>Ödemelerden önce Selim'in parası Sibel'in parasının kaç katıdır?</b></p>",
    diff: 2,
    expl: "Fatura F olsun. Selim'in parası 7F/2, Sibel'in parası 4F'dir. Oran (7F/2) / 4F = 7/8.",
    answers: [
      { text: "7/4", ok: false },
      { text: "7/8", ok: true },
      { text: "13/14", ok: false },
      { text: "20/21", ok: false },
      { text: "8/7", ok: false }
    ]
  },
  {
    text: "<p>Bir sınıftaki öğrencilerin 3/7'si kızdır. Sınıfa 2 kız, 1 erkek öğrenci daha gelince sınıfın 5/9'u erkek öğrenci oluyor.</p><p><b>Buna göre son durumda sınıfın mevcudu kaçtır?</b></p>",
    diff: 2,
    expl: "Sınıf 7x olsun: 3x kız, 4x erkek. (4x + 1)/(7x + 3) = 5/9 ⇒ 36x + 9 = 35x + 15 ⇒ x = 6. Son mevcut 7 · 6 + 3 = 45.",
    answers: [
      { text: "6", ok: false },
      { text: "18", ok: false },
      { text: "24", ok: false },
      { text: "42", ok: false },
      { text: "45", ok: true }
    ]
  },
  {
    text: "<p>Bir tahta parçasının ucundan 1/8'e kesiliyor. Tahtanın orta noktası ilk duruma göre 6 cm kayıyor.</p><p><b>Buna göre tahtanın kesildikten sonraki uzunluğu kaç cm'dir?</b></p>",
    diff: 2,
    expl: "Orta nokta kesilen parçanın yarısı kadar kayar: (L/8)/2 = 6 ⇒ L = 96 cm. Kesilen 12 cm, kalan 84 cm.",
    answers: [
      { text: "42", ok: false },
      { text: "58", ok: false },
      { text: "64", ok: false },
      { text: "84", ok: true },
      { text: "96", ok: false }
    ]
  },
  {
    text: "<p>Bir grupta kızlar erkeklerin 1/2'si kadardır. Erkeklerin 1/4'ü esmerdir.</p><p><b>Sarışın erkeklerin 1/9'u kadar esmer kız olduğuna göre, 16 esmer bulunan bu grupta toplam kaç kişi vardır?</b> (Grupta kumral yoktur. Yalnızca esmer ve sarışın vardır.)</p>",
    diff: 3,
    expl: "Erkekler 4x, kızlar 2x olsun. Esmer erkek x, sarışın erkek 3x, esmer kız 3x/9 = x/3. x + x/3 = 16 ⇒ x = 12. Toplam 6x = 72.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "48", ok: false },
      { text: "60", ok: false },
      { text: "72", ok: true }
    ]
  },
  {
    text: "<p>52 kişinin bulunduğu bir salona 4 çift ardından 8 bayan giriyor.</p><p><b>Son durumda salondaki erkek sayısının bayan sayısına oranı 8/9 olduğuna göre başlangıçta salonda kaç erkek vardır?</b></p>",
    diff: 3,
    expl: "E + K = 52. Son durumda erkek E + 4, bayan K + 12. (E + 4)/(K + 12) = 8/9 ⇒ 9E − 8K = 60. 8E + 8K = 416 ile toplanırsa 17E = 476 ⇒ E = 28.",
    answers: [
      { text: "22", ok: false },
      { text: "24", ok: false },
      { text: "26", ok: false },
      { text: "28", ok: true },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>Bir kesrin değeri 4/9'dur. Kesrin payına 4 eklenir, paydasından 5 çıkarılırsa kesrin değeri 4/7 oluyor.</p><p><b>İlk kesrin pay ve paydasının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Kesir 4k/9k olsun. (4k + 4)/(9k − 5) = 4/7 ⇒ 28k + 28 = 36k − 20 ⇒ k = 6. Kesir 24/54, toplam 78.",
    answers: [
      { text: "37", ok: false },
      { text: "54", ok: false },
      { text: "77", ok: false },
      { text: "78", ok: true },
      { text: "79", ok: false }
    ]
  },
  {
    text: "<p>İçinde bir miktar su bulunan bir su deposuna 35 lt su eklenince deponun 1/6'sı kadar taşma oluyor. 21 lt su eklenince deponun 1/6'sı boş kalıyor.</p><p><b>Depoda başlangıçta kaç litre su vardır?</b></p>",
    diff: 2,
    expl: "S + 35 = 7V/6 ve S + 21 = 5V/6 ⇒ 14 = V/3 ⇒ V = 42. S = 35 − 21 = 14 litre.",
    answers: [
      { text: "7", ok: false },
      { text: "14", ok: true },
      { text: "21", ok: false },
      { text: "28", ok: false },
      { text: "35", ok: false }
    ]
  },
  {
    text: "<p>Bir yazar evindeki kitapların 1/3'ünü dağıtmaya karar verir.</p><p><b>Dağıtmayı düşündüğü kitapların 1/3'ünü üniversitesine, 1/3'ünü memleketinin kütüphanesine ve kalanın 1/3'ünü lisesine verdikten sonra dağıtılacak 80 kitabı kaldığına göre, başlangıçta yazarın evinde toplam kaç kitap vardır?</b></p>",
    diff: 3,
    expl: "Dağıtılacak kitaplar Y olsun. 2Y/3 verilir, Y/3 kalır; bunun 1/3'ü liseye gidince 2Y/9 kalır. 2Y/9 = 80 ⇒ Y = 360. Toplam kitap 3 · 360 = 1080.",
    answers: [
      { text: "180", ok: false },
      { text: "270", ok: false },
      { text: "540", ok: false },
      { text: "1080", ok: true },
      { text: "1180", ok: false }
    ]
  }
];
