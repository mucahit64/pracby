import type { McQ } from "../../../../types";

export const MAT_YUZDE_PROBLEMLERI_T1: McQ[] = [
  {
    text: "<p><b>400 sayısının %20'si kaçtır?</b></p>",
    diff: 1,
    expl: "400 · 20/100 = 80.",
    answers: [
      { text: "60", ok: false },
      { text: "80", ok: true },
      { text: "90", ok: false },
      { text: "100", ok: false },
      { text: "120", ok: false }
    ]
  },
  {
    text: "<p><b>Hangi sayının %30'u 120'dir?</b></p>",
    diff: 1,
    expl: "Sayı x olsun. x · 30/100 = 120 ⇒ 3x = 1200 ⇒ x = 400.",
    answers: [
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: false },
      { text: "350", ok: false },
      { text: "400", ok: true }
    ]
  },
  {
    text: "<p><b>600 sayısının %25'inin %30'u kaçtır?</b></p>",
    diff: 1,
    expl: "600 · 25/100 = 150; 150 · 30/100 = 45.",
    answers: [
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "45", ok: true },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p><b>%40'ının %15'i, 6 olan sayı kaçtır?</b></p>",
    diff: 2,
    expl: "x · 40/100 · 15/100 = 6 ⇒ x · 6/100 = 6 ⇒ x = 100.",
    answers: [
      { text: "100", ok: true },
      { text: "150", ok: false },
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: false }
    ]
  },
  {
    text: "<p><b>%24'ü ile %20'si arasındaki fark 8 olan pozitif tam sayı kaçtır?</b></p>",
    diff: 1,
    expl: "Fark sayının %4'üdür. x · 4/100 = 8 ⇒ x = 200.",
    answers: [
      { text: "120", ok: false },
      { text: "160", ok: false },
      { text: "200", ok: true },
      { text: "240", ok: false },
      { text: "320", ok: false }
    ]
  },
  {
    text: "<p><b>%15'i %8'inden 21 fazla olan sayı kaçtır?</b></p>",
    diff: 1,
    expl: "%15 − %8 = %7. x · 7/100 = 21 ⇒ x = 300.",
    answers: [
      { text: "200", ok: false },
      { text: "210", ok: false },
      { text: "280", ok: false },
      { text: "300", ok: true },
      { text: "350", ok: false }
    ]
  },
  {
    text: "<p><b>Bir sayının %40 fazlasının %30'u 21 olan sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Sayının %40 fazlası 140x/100'dür. 140x/100 · 30/100 = 21 ⇒ 42x/100 = 21 ⇒ x = 50.",
    answers: [
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: true },
      { text: "60", ok: false },
      { text: "100", ok: false }
    ]
  },
  {
    text: "<p>Bir sayının %35'inin %20'si aynı sayının %12'sinin 4 eksiğine eşittir.</p><p><b>Buna göre bu sayı kaçtır?</b></p>",
    diff: 2,
    expl: "x · 35/100 · 20/100 = 7x/100. 7x/100 = 12x/100 − 4 ⇒ 5x/100 = 4 ⇒ x = 80.",
    answers: [
      { text: "150", ok: false },
      { text: "120", ok: false },
      { text: "100", ok: false },
      { text: "90", ok: false },
      { text: "80", ok: true }
    ]
  },
  {
    text: "<p><b>4/5 sayısı 3/10 sayısının yüzde kaçıdır?</b></p>",
    diff: 2,
    expl: "(4/5) / (3/10) · 100 = (4/5) · (10/3) · 100 = (8/3) · 100 = 800/3.",
    answers: [
      { text: "500/3", ok: false },
      { text: "200", ok: false },
      { text: "700/3", ok: false },
      { text: "800/3", ok: true },
      { text: "300", ok: false }
    ]
  },
  {
    text: "<p>80 kişinin bulunduğu bir topluluğun 24'ü kızdır.</p><p><b>Buna göre bu topluluğun % kaçı erkektir?</b></p>",
    diff: 1,
    expl: "Erkek sayısı 80 − 24 = 56. 56/80 = 70/100 olduğundan topluluğun %70'i erkektir.",
    answers: [
      { text: "75", ok: false },
      { text: "70", ok: true },
      { text: "65", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>a sayısı, b sayısının %80'dir.</p><p><b>Buna göre b sayısı a sayısının yüzde kaçıdır?</b></p>",
    diff: 2,
    expl: "b = 100 alınırsa a = 80 olur. b/a · 100 = 100/80 · 100 = 125.",
    answers: [
      { text: "125", ok: true },
      { text: "130", ok: false },
      { text: "140", ok: false },
      { text: "150", ok: false },
      { text: "160", ok: false }
    ]
  },
  {
    text: "<p>Ali'nin parası Çağrı'nın parasının %30'u kadardır.</p><p><b>Çağrı parasının %20'sini Ali'ye verdiğinde Ali'nin parası Çağrı'nın parasının yüzde kaçı olur?</b></p>",
    diff: 2,
    expl: "Çağrı 100x, Ali 30x olsun. Çağrı 20x verince Çağrı 80x, Ali 50x olur. 50x/80x · 100 = 62,5.",
    answers: [
      { text: "44,5", ok: false },
      { text: "48", ok: false },
      { text: "50", ok: false },
      { text: "60", ok: false },
      { text: "62,5", ok: true }
    ]
  },
  {
    text: "<p>x sayısının %30 eksiği y sayısına, y sayısının %40'ı ise z sayısına eşittir.</p><p><b>Buna göre z sayısı x sayısının yüzde kaçıdır?</b></p>",
    diff: 2,
    expl: "x = 100 olsun. y = 70, z = 70 · 40/100 = 28. z, x'in %28'idir.",
    answers: [
      { text: "20", ok: false },
      { text: "24", ok: false },
      { text: "28", ok: true },
      { text: "32", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>Bir miktar undan %60'ı kadar hamur, elde edilen hamurdan %80'i kadar ekmek elde ediliyor.</p><p><b>Buna göre 720 gr ekmek elde etmek için kaç kg un kullanılmalıdır?</b></p>",
    diff: 2,
    expl: "Ekmek, unun 60/100 · 80/100 = 48/100'üdür. U · 48/100 = 720 ⇒ U = 1500 gr = 1,5 kg.",
    answers: [
      { text: "1,2", ok: false },
      { text: "1,5", ok: true },
      { text: "1,8", ok: false },
      { text: "2", ok: false },
      { text: "2,5", ok: false }
    ]
  },
  {
    text: "<p>Bir satıcı elindeki ürünlerin önce %20'sini, sonra kalan ürünlerin %15'ini satmıştır.</p><p><b>Buna göre ürünlerin % kaçı satılmamıştır?</b></p>",
    diff: 2,
    expl: "100 ürün olsun. Önce 20 satılır, 80 kalır. Sonra 80'in %15'i olan 12 satılır. Kalan 80 − 12 = 68, yani %68.",
    answers: [
      { text: "32", ok: false },
      { text: "44", ok: false },
      { text: "52", ok: false },
      { text: "68", ok: true },
      { text: "76", ok: false }
    ]
  },
  {
    text: "<p>Bir deponun %70'i su ile doludur. Depodaki suyun %40'ı kullanıldıktan sonra depoya 66 litre su eklenirse deponun 3/4'ü dolu oluyor.</p><p><b>Buna göre deponun kapasitesi kaç litredir?</b></p>",
    diff: 3,
    expl: "Kapasite 100x olsun. Su 70x; %40'ı (28x) kullanılınca 42x kalır. 42x + 66 = 75x ⇒ 33x = 66 ⇒ x = 2. Kapasite 200 litre.",
    answers: [
      { text: "100", ok: false },
      { text: "150", ok: false },
      { text: "200", ok: true },
      { text: "250", ok: false },
      { text: "300", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 2 ───────────────────────────────────────────────

  {
    text: "<p>Esra ilk gün parasının %40'ını, ikinci gün kalan parasının %30'unu harcıyor.</p><p><b>Geriye 126 TL'si kaldığına göre Esra ilk gün kaç TL harcamıştır?</b></p>",
    diff: 2,
    expl: "Para 100x olsun. İlk gün 40x harcar, 60x kalır. İkinci gün 60x'in %30'u olan 18x harcar, 42x kalır. 42x = 126 ⇒ x = 3. İlk gün 40x = 120 TL harcamıştır.",
    answers: [
      { text: "120", ok: true },
      { text: "140", ok: false },
      { text: "160", ok: false },
      { text: "180", ok: false },
      { text: "200", ok: false }
    ]
  },
  {
    text: "<p>Bir aracın benzin deposunun %60'ı doludur. Bu depoya 8 litre daha benzin konulursa deponun %80'i dolu oluyor.</p><p><b>Buna göre bu deponun tamamı kaç litredir?</b></p>",
    diff: 1,
    expl: "Deponun %80 − %60 = %20'si 8 litredir. Tamamı 8 · 5 = 40 litre.",
    answers: [
      { text: "32", ok: false },
      { text: "36", ok: false },
      { text: "40", ok: true },
      { text: "42", ok: false },
      { text: "44", ok: false }
    ]
  },
  {
    text: "<p><b>Bir dikdörtgenin eni %10 kısalır, boyu %20 artırılırsa alanı nasıl değişir?</b></p>",
    diff: 2,
    expl: "En 10, boy 10 olsun; alan 100. Yeni en 9, yeni boy 12; yeni alan 108. Alan %8 artar.",
    answers: [
      { text: "%8 azalır.", ok: false },
      { text: "%8 artar.", ok: true },
      { text: "%10 azalır.", ok: false },
      { text: "%10 artar.", ok: false },
      { text: "Değişmez", ok: false }
    ]
  },
  {
    text: "<p><b>Bir karenin kenar uzunluğu %20 artırılırsa alanı % kaç artar?</b></p>",
    diff: 1,
    expl: "Kenar 10 ise alan 100. Yeni kenar 12, yeni alan 144. Alan %44 artar.",
    answers: [
      { text: "20", ok: false },
      { text: "32", ok: false },
      { text: "44", ok: true },
      { text: "48", ok: false },
      { text: "52", ok: false }
    ]
  },
  {
    text: "<p>Bir araç gideceği yolun %50'sini gittikten sonra kalan yolun %30'unu daha gidince geriye 280 km kalıyor.</p><p><b>Buna göre tüm yol kaç km'dir?</b></p>",
    diff: 2,
    expl: "Yol 100x olsun. 50x gidilir, 50x kalır; bunun %30'u olan 15x de gidilince 35x kalır. 35x = 280 ⇒ x = 8. Tüm yol 800 km.",
    answers: [
      { text: "600", ok: false },
      { text: "650", ok: false },
      { text: "750", ok: false },
      { text: "800", ok: true },
      { text: "900", ok: false }
    ]
  },
  {
    text: "<p>Sütten ağırlığının %30 eksiği kadar yoğurt, yoğurtunda ağırlığının %40 fazlası kadar ayran elde edilmektedir.</p><p><b>Buna göre 49 litre ayran elde etmek için kaç litre yoğurt gereklidir?</b></p>",
    diff: 2,
    expl: "Ayran, yoğurdun 140/100'üdür. Y · 140/100 = 49 ⇒ Y = 35 litre.",
    answers: [
      { text: "35", ok: true },
      { text: "40", ok: false },
      { text: "45", ok: false },
      { text: "50", ok: false },
      { text: "55", ok: false }
    ]
  },
  {
    text: "<p>Bir sınıftaki erkek öğrencilerin sayısı, kız öğrencilerin sayısının %60'ına eşittir.</p><p><b>Sınıf mevcudu 27'den fazla olduğuna göre sınıftaki kız öğrencilerin sayısı <u>en az</u> kaçtır?</b></p>",
    diff: 3,
    expl: "Erkek/Kız = 60/100 = 3/5. Erkek 3m, kız 5m, mevcut 8m. 8m > 27 ⇒ en küçük m = 4. Kız sayısı en az 5 · 4 = 20.",
    answers: [
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: true }
    ]
  },
  {
    text: "<p>Bir sınıfta %70'i erkektir. Erkeklerin %30'u sarışındır.</p><p><b>Buna göre sarışın olmayan erkekler sınıfın yüzde kaçıdır?</b></p>",
    diff: 2,
    expl: "Sınıf 100 kişi olsun. Erkek 70, sarışın erkek 21, sarışın olmayan erkek 49. Sınıfın %49'u.",
    answers: [
      { text: "47", ok: false },
      { text: "49", ok: true },
      { text: "51", ok: false },
      { text: "53", ok: false },
      { text: "55", ok: false }
    ]
  },
  {
    text: "<p>Bir öğrenci (m + n) soruluk bir yazılı sınavda m tane soruyu doğru, n tane soruyu yanlış yapmıştır.</p><p><b>Buna göre bu öğrencinin yanlış cevaplarının sayısı toplam soru sayısının yüzde kaçıdır?</b></p>",
    diff: 2,
    expl: "Yüzde = n/(m + n) · 100 = 100n/(m + n).",
    answers: [
      { text: "n/m", ok: false },
      { text: "n/(m + n)", ok: false },
      { text: "100n/(m + n)", ok: true },
      { text: "m/(m + n)", ok: false },
      { text: "n/100", ok: false }
    ]
  },
  {
    text: "<p>Su oranı %78 olan 36 kg yaş üzüm kurumaya bırakılıyor. Bir süre sonra yaş üzümlerin su oranı ağırlıkça %56 oluyor.</p><p><b>Buna göre en son durumda yaş üzümlerin ağırlığı kaç kg olmuştur?</b></p>",
    diff: 3,
    expl: "Kuru madde değişmez: 36 · 22/100 = 7,92 kg. Son durumda kuru madde %44'tür: Y · 44/100 = 7,92 ⇒ Y = 18 kg.",
    answers: [
      { text: "24", ok: false },
      { text: "22", ok: false },
      { text: "20", ok: false },
      { text: "18", ok: true },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>Bir aracın benzin deposunun %80'i doludur. Deponun doluluk oranı %20 olduğunda tekrar benzin alınacaktır.</p><p><b>Buna göre depodaki benzinin yüzde kaçı kullanılırsa tekrar benzin alınır?</b></p>",
    diff: 3,
    expl: "Depo 100 birim olsun. Depoda 80 birim var; 20 birim kalınca benzin alınacağından 60 birim kullanılır. 60/80 · 100 = 75.",
    answers: [
      { text: "64", ok: false },
      { text: "65", ok: false },
      { text: "70", ok: false },
      { text: "72", ok: false },
      { text: "75", ok: true }
    ]
  },
  {
    text: "<p>Bir karenin kenar uzunlukları %x artırıldığında, alanı %21 artmıştır.</p><p><b>Buna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "Kenar 10 ise alan 100. Yeni alan 121 ⇒ yeni kenar 11. Kenar %10 artmıştır; x = 10.",
    answers: [
      { text: "10", ok: true },
      { text: "11", ok: false },
      { text: "15", ok: false },
      { text: "18", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p><b>Dikdörtgen şeklindeki bir levhanın kenar uzunlukları önce %20 artırılıp, sonra %75 kısaltılırsa bu levhanın alanı yüzde kaç azalır?</b></p>",
    diff: 3,
    expl: "Her kenar önce 1,2 katına, sonra bunun %25'ine iner: 1,2 · 0,25 = 0,3 katı. Alan 0,3 · 0,3 = 0,09 katına iner. Alan %91 azalır.",
    answers: [
      { text: "9", ok: false },
      { text: "25", ok: false },
      { text: "55", ok: false },
      { text: "81", ok: false },
      { text: "91", ok: true }
    ]
  },
  {
    text: "<p>Ayşe, kardeşi Aslı ile oynadığı 16 oyunun 12'sinde galip gelmiştir.</p><p><b>Beraber 40 oyun oynadıklarına göre Ayşe kaç tanesinde daha galip gelirse tüm oyunların %60'ında galip gelmiş olur?</b></p>",
    diff: 2,
    expl: "40 oyunun %60'ı 24'tür. Ayşe 12 oyun kazanmıştır; 24 − 12 = 12 oyun daha kazanmalıdır.",
    answers: [
      { text: "9", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false },
      { text: "16", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>Ağırlıkça %40'ı şeker olan 300 litre şekerli suyun 3/5'i dökülüp, yerine dökülen miktar kadar su ekleniyor.</p><p><b>Buna göre yeni karışımın şeker yüzdesi kaçtır?</b></p>",
    diff: 3,
    expl: "180 litre dökülür, 120 litre kalır; içindeki şeker 120 · 40/100 = 48. 180 litre su eklenince karışım yine 300 litre olur. Şeker oranı 48/300 · 100 = 16.",
    answers: [
      { text: "48", ok: false },
      { text: "32", ok: false },
      { text: "24", ok: false },
      { text: "16", ok: true },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>Ağırlıkça %32'si tuz olan x gram tuzlu su karışımına kaç gram su ilave edilirse karışımının tuz oranı %25 olur?</b></p>",
    diff: 3,
    expl: "Tuz 32x/100 gramdır. y gram su eklensin: (32x/100)/(x + y) = 1/4 ⇒ 128x/100 = x + y ⇒ y = 28x/100 = 7x/25.",
    answers: [
      { text: "7x/25", ok: true },
      { text: "x/25", ok: false },
      { text: "3x/25", ok: false },
      { text: "x/5", ok: false },
      { text: "x/7", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 3 ───────────────────────────────────────────────

  {
    text: "<p><b>Maliyeti 400 TL olan bir ürün 700 TL'ye satılırsa yüzde kaç kâr edilir?</b></p>",
    diff: 1,
    expl: "Kâr 700 − 400 = 300 TL. Kâr yüzdesi 300/400 · 100 = 75.",
    answers: [
      { text: "30", ok: false },
      { text: "50", ok: false },
      { text: "75", ok: true },
      { text: "150", ok: false },
      { text: "300", ok: false }
    ]
  },
  {
    text: "<p><b>%30 zararla 210 TL'ye satılan bir ürün %40 kârla ne kadara satılır?</b></p>",
    diff: 2,
    expl: "Maliyet 100x olsun. 70x = 210 ⇒ x = 3, maliyet 300 TL. %40 kârla 300 · 140/100 = 420 TL.",
    answers: [
      { text: "340", ok: false },
      { text: "360", ok: false },
      { text: "390", ok: false },
      { text: "400", ok: false },
      { text: "420", ok: true }
    ]
  },
  {
    text: "<p><b>Bir paketi a TL olan çaydan kaç paket alınıp paketi b TL'ye satılırsa toplamda 50 TL kâr edilir?</b></p>",
    diff: 2,
    expl: "Paket başına kâr b − a TL'dir. Paket sayısı 50/(b − a) = −50/(a − b).",
    answers: [
      { text: "50 − b + a", ok: false },
      { text: "50/b + a", ok: false },
      { text: "50/(a + b)", ok: false },
      { text: "−50/(a − b)", ok: true },
      { text: "ab/50", ok: false }
    ]
  },
  {
    text: "<p><b>250 TL'ye satılan bir ayakkabıyı 200 TL'ye almak isteyen Afşin için mağaza yüzde kaç indirim uygulamalıdır?</b></p>",
    diff: 1,
    expl: "İndirim 50 TL'dir. 50/250 · 100 = 20.",
    answers: [
      { text: "15", ok: false },
      { text: "20", ok: true },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>Bir ekmek fırını 200 gramlık ve 300 gramlık ekmek çeşidi çıkarmaktadır.</p><p><b>Satış fiyatları sırasıyla 1,5 TL ve 2,7 TL olan ekmeklerden 300 gramlık ekmek 200 gramlık ekmekten yüzde kaç pahalıdır?</b></p>",
    diff: 3,
    expl: "100 gramın fiyatı: 200 gramlıkta 1,5/2 = 0,75 TL, 300 gramlıkta 2,7/3 = 0,90 TL. (0,90 − 0,75)/0,75 · 100 = 20.",
    answers: [
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "22", ok: false },
      { text: "23", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "<p><b>Yüzde 10 kârla satılan bir ürüne satış fiyatı üzerinden %10 indirim yapılırsa son durumda kâr zarar durumu ne olur?</b></p>",
    diff: 1,
    expl: "Maliyet 100 olsun. Satış 110; %10 indirimle 110 − 11 = 99. %1 zarar edilir.",
    answers: [
      { text: "%1 zarar", ok: true },
      { text: "%2 zarar", ok: false },
      { text: "%1 kâr", ok: false },
      { text: "%2 kâr", ok: false },
      { text: "Ne kâr ne zarar", ok: false }
    ]
  },
  {
    text: "<p><b>%10 zararına satılırken satış fiyatı üzerinden %10 zam ile satılan üründen elde edilen son kâr - zarar durumu nedir?</b></p>",
    diff: 1,
    expl: "Maliyet 100 olsun. Satış 90; %10 zamla 90 + 9 = 99. %1 zarar edilir.",
    answers: [
      { text: "%1 kâr", ok: false },
      { text: "%2 kâr", ok: false },
      { text: "%1 zarar", ok: true },
      { text: "%2 zarar", ok: false },
      { text: "Ne kâr ne zarar", ok: false }
    ]
  },
  {
    text: "<p>%50 kârla satılırken satış fiyatı üzerinden 90 TL indirim yapılan üründen yine de %25 kâr elde ediliyor.</p><p><b>Buna göre bu ürünün maliyeti nedir?</b></p>",
    diff: 2,
    expl: "Maliyet 100x olsun. 150x − 90 = 125x ⇒ 25x = 90 ⇒ 100x = 360 TL.",
    answers: [
      { text: "200", ok: false },
      { text: "240", ok: false },
      { text: "300", ok: false },
      { text: "360", ok: true },
      { text: "400", ok: false }
    ]
  },
  {
    text: "<p>Bir mağaza etiket fiyatlarına %40 indirim yaparak satışlarını %50 artırmıştır.</p><p><b>Bu durumda mağazanın hasılatı nasıl değişir?</b></p>",
    diff: 2,
    expl: "Fiyat 10, satış 10 adet olsun; hasılat 100. Yeni fiyat 6, satış 15 adet; hasılat 90. Hasılat %10 azalır.",
    answers: [
      { text: "%5 azalır", ok: false },
      { text: "%10 azalır", ok: true },
      { text: "%20 azalır", ok: false },
      { text: "%5 artar", ok: false },
      { text: "%10 artar", ok: false }
    ]
  },
  {
    text: "<p>Bir tüccar mallarının %20'sini %40 kârla, %40'ını da %20 kârla satıyor.</p><p><b>Kalan mallarını en fazla yüzde kaç indirimle satarsa kârlı kalır?</b></p>",
    diff: 3,
    expl: "100 mal, tanesi 10 TL olsun; maliyet 1000 TL. 20 mal 14 TL'den 280 TL, 40 mal 12 TL'den 480 TL getirir; toplam 760 TL. Kalan 40 malın 240 TL'den fazla getirmesi, yani tanesinin 6 TL'den pahalı satılması gerekir. %40 indirimde (6 TL) ne kâr ne zarar olur; kârlı kalmak için indirim en fazla %39 olabilir.",
    answers: [
      { text: "38", ok: false },
      { text: "39", ok: true },
      { text: "40", ok: false },
      { text: "41", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "<p><b>Enflasyonun %25 olduğu bir ülkede, maaşına %5 zam alan bir işçinin alım gücü yüzde kaç azalır?</b></p>",
    diff: 3,
    expl: "Maaş ve fiyat 100 olsun. Yeni fiyat 125, yeni maaş 105. Alım gücü 105/125 = 84/100'e iner; %16 azalır.",
    answers: [
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p><b>Bir züccaciyecinin aldığı 480 tane bardağın %20'si hasarlı çıktığına göre maliyeti yüzde kaç artmıştır?</b></p>",
    diff: 2,
    expl: "Bardağın tanesi 1 TL olsun; toplam 480 TL. Sağlam bardak 384 tanedir. Sağlam bardağın maliyeti 480/384 = 1,25 TL olur; maliyet %25 artmıştır.",
    answers: [
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: true },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>Bir toptancıdan kalem alan bir kırtasiyeci kalemlerin 10 tanesini 5 TL'ye almış, 5 tanesini 20 TL'ye satmıştır.</p><p><b>Kırtasiyeci % kaç kâr yapmıştır?</b></p>",
    diff: 2,
    expl: "Bir kalemin alışı 0,5 TL, satışı 4 TL'dir. Kâr 3,5 TL; 3,5/0,5 · 100 = 700.",
    answers: [
      { text: "200", ok: false },
      { text: "500", ok: false },
      { text: "700", ok: true },
      { text: "800", ok: false },
      { text: "1050", ok: false }
    ]
  },
  {
    text: "<p><b>%18 KDV ile 944 TL'ye satılan bir oyuncağın KDV'siz fiyatı kaç TL'dir?</b></p>",
    diff: 2,
    expl: "x · 118/100 = 944 ⇒ x = 800 TL.",
    answers: [
      { text: "800", ok: true },
      { text: "860", ok: false },
      { text: "920", ok: false },
      { text: "980", ok: false },
      { text: "1120", ok: false }
    ]
  },
  {
    text: "<p>Bir mağaza aynısından 3 pantolon alana 2. sini %50 indirimli, 3. sünü %70 indirimli satmaktadır.</p><p><b>3 pantolon satışından %20 kâr eden mağaza pantolonun etiket fiyatını % kaç kâr ile belirlemiştir?</b></p>",
    diff: 3,
    expl: "Etiket fiyatı 100x, maliyet M olsun. 3 pantolondan gelir 100x + 50x + 30x = 180x. 180x = 3M · 120/100 = 3,6M ⇒ M = 50x. Etiket fiyatı maliyetin 2 katıdır; %100 kâr.",
    answers: [
      { text: "50", ok: false },
      { text: "100", ok: true },
      { text: "150", ok: false },
      { text: "200", ok: false },
      { text: "250", ok: false }
    ]
  },
  {
    text: "<p><b>Kilogram fiyatı 6 TL olan yaş üzümden bir miktar alan ve kuruttuktan sonra kilogramını 10 TL'ye satan manav kuru üzüm satışından %50 kâr ettiğine göre yaş üzüm kurutulduktan sonra % kaç fire olmuştur?</b></p>",
    diff: 3,
    expl: "100 kg yaş üzüm 600 TL'ye alınsın. %50 kârla gelir 900 TL olmalıdır; 10 TL'den 90 kg kuru üzüm satılmıştır. 100 kg'dan 90 kg kaldığından fire %10'dur.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 4 ───────────────────────────────────────────────

  {
    text: "<p>Her bir ofiste en fazla üç kişinin çalıştığı bir iş merkezindeki ofislerin 20 tanesinde hiç kimse çalışmamaktadır. Bu iş merkezindeki ofislerde çalışan kişi sayılarıyla ilgili aşağıdakiler bilinmektedir.</p><p>• Ofislerin %40'ında birer kişi çalışmaktadır.<br>• Üçer kişinin çalıştığı ofis sayısı, ikişer kişinin çalıştığı ofis sayısının 3 katıdır.<br>• Bu iş merkezindeki ofislerde toplam 150 kişi çalışmaktadır.</p><p><b>Buna göre, 3 kişinin çalıştığı ofis sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "Ofis sayısı 100k olsun. Boş 20, tek kişilik 40k. Kalan 60k − 20 ofis, 2 kişilik y ve 3 kişilik 3y ofisten oluşur: 4y = 60k − 20 ⇒ y = 15k − 5. Kişi sayısı: 40k + 2(15k − 5) + 3(45k − 15) = 205k − 55 = 150 ⇒ k = 1. 3 kişilik ofis sayısı 45 − 15 = 30.",
    answers: [
      { text: "30", ok: true },
      { text: "36", ok: false },
      { text: "24", ok: false },
      { text: "48", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>Etiket fiyatı 48 TL olan sabun indirimli satışlarda 42 TL ye satılarak maliyet fiyatına göre yüzde 20 daha az kar elde edilmektedir.</p><p><b>Buna göre bu ürünün etiket fiyatı yüzde kaç karla hesaplanmıştır?</b></p>",
    diff: 3,
    expl: "Fiyattaki 6 TL'lik düşüş, maliyetin %20'sine eşittir: M · 20/100 = 6 ⇒ M = 30 TL. Etiket fiyatındaki kâr 48 − 30 = 18 TL; 18/30 · 100 = 60.",
    answers: [
      { text: "20", ok: false },
      { text: "50", ok: false },
      { text: "40", ok: false },
      { text: "30", ok: false },
      { text: "60", ok: true }
    ]
  },
  {
    text: "<p>Bir satıcı bir gömleğin satışından satış fiyatı üzerinden yüzde 20 kar etmektedir.</p><p><b>Buna göre bu satıcı bu gömlekten maliyet fiyatı üzerinden yüzde kaç kar etmiştir?</b></p>",
    diff: 2,
    expl: "Satış fiyatı 100 ise kâr 20, maliyet 80'dir. 20/80 · 100 = 25.",
    answers: [
      { text: "40", ok: false },
      { text: "25", ok: true },
      { text: "45", ok: false },
      { text: "30", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>Bir ülkede enflasyon ilk 6 ay içinde yüzde 20, ikinci altı ay içinde ise yüzde 12,5 olarak açıklanmıştır.</p><p><b>Memur maaşına yıl sonunda yüzde 9 zam yapıldığına göre memurun reel kaybı yüzde kaçtır?</b></p>",
    diff: 3,
    expl: "Fiyatlar 100 iken yıl sonunda 100 · 1,2 · 1,125 = 135 olur. Maaş 100'den 109'a çıkar. Alım gücü 109/135 ≈ 0,807'ye iner; reel kayıp yaklaşık %19,3'tür. Seçeneklerden en yakını ve cevap anahtarındaki değer 20'dir (zam %8 olsaydı 108/135 = 0,8 ile kayıp tam %20 olurdu).",
    answers: [
      { text: "15", ok: false },
      { text: "25", ok: false },
      { text: "12", ok: false },
      { text: "8", ok: false },
      { text: "20", ok: true }
    ]
  },

// ─── FAİZ PROBLEMLERİ TEST - 1 ────────────────────────────────────────────────

  {
    text: "<p>2000 TL yıllık yüzde 30 faiz oranı üzerinden 3 yıllığına bankaya yatırılıyor.</p><p><b>Buna göre bankanın 3 yıl sonunda faiz getirisi kaç TL dir?</b></p>",
    diff: 1,
    expl: "Faiz = A · n · t/100 = 2000 · 30 · 3/100 = 1800 TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "1800", ok: true },
      { text: "2400", ok: false },
      { text: "2000", ok: false },
      { text: "2600", ok: false }
    ]
  },
  {
    text: "<p><b>Yıllık %24 faiz oranı üzerinden bankaya yatırılan 800 TL 2 yıl sonunda faizi ile birlikte kaç TL olur?</b></p>",
    diff: 1,
    expl: "Faiz = 800 · 24 · 2/100 = 384 TL. Faiziyle birlikte 800 + 384 = 1184 TL.",
    answers: [
      { text: "384", ok: false },
      { text: "2160", ok: false },
      { text: "1214", ok: false },
      { text: "1184", ok: true },
      { text: "1768", ok: false }
    ]
  },
  {
    text: "<p><b>Yıllık yüzde 36 ile bankaya yatırılan bir miktar para 6 ay sonra 720 TL faiz getirdiğine göre bankaya yatırılan ana para kaç TL dir?</b></p>",
    diff: 2,
    expl: "Aylık hesap: Faiz = A · n · t/1200. 720 = A · 36 · 6/1200 = 18A/100 ⇒ A = 4000 TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "1600", ok: false },
      { text: "2400", ok: false },
      { text: "4000", ok: true },
      { text: "3000", ok: false }
    ]
  },
  {
    text: "<p>240 TL para bir bankaya 3 aylığına yatırılıyor.</p><p><b>3 ay sonra para faizi ile birlikte bankadan 288 TL olarak geri çekildiğine göre bankanın uyguladığı yıllık faiz oranı kaçtır?</b></p>",
    diff: 2,
    expl: "Faiz 288 − 240 = 48 TL. 48 = 240 · n · 3/1200 = 0,6n ⇒ n = 80. Yıllık faiz oranı %80.",
    answers: [
      { text: "80", ok: true },
      { text: "60", ok: false },
      { text: "72", ok: false },
      { text: "50", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p><b>Yıllık yüzde 30 üzerinden bankaya yatırılan bir miktar para kaç ay sonra kendisinin 1/5'i kadar faiz getirir?</b></p>",
    diff: 2,
    expl: "Ana para 100 olsun; istenen faiz 20. 20 = 100 · 30 · t/1200 = 2,5t ⇒ t = 8 ay.",
    answers: [
      { text: "6", ok: false },
      { text: "16", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p><b>Yıllık yüzde 12 faiz oranı üzerinden bankaya yatırılan bir miktar para kaç yıl sonra kendisinin 4 katına çıkar?</b></p>",
    diff: 2,
    expl: "Paranın 4 katına çıkması için faizin ana paranın 3 katı olması gerekir. 3A = A · 12 · t/100 ⇒ t = 25 yıl.",
    answers: [
      { text: "25", ok: true },
      { text: "20", ok: false },
      { text: "18", ok: false },
      { text: "30", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>Yıllık yüzde 30'dan bankaya yatırılan bir miktar para 3 yıl sonra bankadan 950 TL olarak geri çekiliyor.</p><p><b>Buna göre bankaya yatırılan ana para kaç TL dir?</b></p>",
    diff: 2,
    expl: "Faiz = A · 30 · 3/100 = 0,9A. A + 0,9A = 1,9A = 950 ⇒ A = 500 TL.",
    answers: [
      { text: "300", ok: false },
      { text: "500", ok: true },
      { text: "400", ok: false },
      { text: "600", ok: false },
      { text: "800", ok: false }
    ]
  },
  {
    text: "<p>Mehmet parasını %25 faizle bankaya yatırıyor. Eğer Mehmet parasını %40 faizle bankaya yatırsaydı 300 TL daha fazla faiz alacaktı.</p><p><b>Buna göre Mehmet'in bankaya yatırdığı para kaç TL dir?</b></p>",
    diff: 2,
    expl: "Oran farkı %15'tir (süre 1 yıl alınır). A · 15/100 = 300 ⇒ A = 2000 TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "2400", ok: false },
      { text: "2000", ok: true },
      { text: "1800", ok: false },
      { text: "1600", ok: false }
    ]
  },
  {
    text: "<p>Bir miktar para %16 üzerinden bankaya yatırılıyor ve a TL faiz getiriyor. Eğer para %10 üzerinden bankaya yatırılsaydı aynı sürede a − 42 TL faiz getirecekti.</p><p><b>Buna göre bankaya yatırılan ana para kaç TL dir?</b></p>",
    diff: 2,
    expl: "Faiz farkı 42 TL, oran farkı %6'dır (süre 1 yıl alınır). A · 6/100 = 42 ⇒ A = 700 TL.",
    answers: [
      { text: "840", ok: false },
      { text: "600", ok: false },
      { text: "560", ok: false },
      { text: "700", ok: true },
      { text: "500", ok: false }
    ]
  },
  {
    text: "<p>1500 TL'nin yıllık %x'ten getirdiği basit faiz 1200 TL'nin yıllık %y'den getirdiği basit faize eşittir.</p><p><b>Buna göre x, y'nin yüzde kaçına eşittir?</b></p>",
    diff: 2,
    expl: "1500x/100 = 1200y/100 ⇒ 5x = 4y ⇒ x = 4y/5 = 80y/100. x, y'nin %80'idir.",
    answers: [
      { text: "80", ok: true },
      { text: "60", ok: false },
      { text: "100", ok: false },
      { text: "120", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>2 · x TL'nin %3 · a'dan 3 yılda getirdiği basit faiz, 3 · y TL'nin %2 · b'den 2 yılda getirdiği basit faize eşittir.</p><p><b>x, y'nin %40'ı olduğuna göre b/a oranı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "2x · 3a · 3/100 = 3y · 2b · 2/100 ⇒ 18ax = 12by ⇒ 3ax = 2by. x = 2y/5 yazılırsa 6ay/5 = 2by ⇒ 3a = 5b ⇒ b/a = 3/5.",
    answers: [
      { text: "2/5", ok: false },
      { text: "5/3", ok: false },
      { text: "3/5", ok: true },
      { text: "1/5", ok: false },
      { text: "6/5", ok: false }
    ]
  },
  {
    text: "<p><b>Aylık yüzde 5 faiz oranı üzerinden bankaya yatırılan bir miktar para kaç ay sonra kendisinin 3 katı kadar faiz getirir?</b></p>",
    diff: 2,
    expl: "Oran aylık, süre ay olduğundan Faiz = A · 5 · t/100. 3A = 5At/100 ⇒ t = 60 ay.",
    answers: [
      { text: "60", ok: true },
      { text: "36", ok: false },
      { text: "45", ok: false },
      { text: "54", ok: false },
      { text: "72", ok: false }
    ]
  }
];
