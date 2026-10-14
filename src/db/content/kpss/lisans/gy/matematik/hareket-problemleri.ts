import type { McQ } from "../../../../types";

export const MAT_HAREKET_PROBLEMLERI_T1: McQ[] = [
  {
    text: "<p><b>300 km'lik yolu 6 saatte giden bir araç saatte kaç km hızla gitmiştir?</b></p>",
    diff: 1,
    expl: "Yol = Hız · Zaman. 300 = V · 6 ⇒ V = 50 km/s.",
    answers: [
      { text: "50", ok: true },
      { text: "60", ok: false },
      { text: "120", ok: false },
      { text: "360", ok: false },
      { text: "1800", ok: false }
    ]
  },
  {
    text: "<p><b>Evi ile işyeri arasındaki yolu gidişte 100 km/s hızla 12 dakikada giden bir kişi dönüşte 16 dakikada evine varıyor ise dönüş hızı kaç km/s'tir?</b></p>",
    diff: 2,
    expl: "Yol sabittir: 100 · 12 = V · 16 ⇒ V = 1200/16 = 75 km/s.",
    answers: [
      { text: "30", ok: false },
      { text: "60", ok: false },
      { text: "75", ok: true },
      { text: "120", ok: false },
      { text: "150", ok: false }
    ]
  },
  {
    text: "<p>Bir araç gideceği mesafeyi 80 km/s hızla giderse istediği saatten 1 saat geç, 120 km/s hızla giderse 3 saat erken orada oluyor.</p><p><b>Buna göre gideceği mesafe kaç km'dir?</b></p>",
    diff: 2,
    expl: "Planlanan süre t olsun. 80(t + 1) = 120(t − 3) ⇒ 2t + 2 = 3t − 9 ⇒ t = 11 saat. Mesafe = 80 · 12 = 960 km.",
    answers: [
      { text: "1020", ok: false },
      { text: "960", ok: true },
      { text: "800", ok: false },
      { text: "360", ok: false },
      { text: "160", ok: false }
    ]
  },
  {
    text: "<p>Bir bisikletli gideceği yolun 1/6'sını 30 dk'da gidiyor.</p><p><b>Sabit hızlı olan bisikletli kaç dakika daha yola devam ederse yolu yarılamış olur?</b></p>",
    diff: 2,
    expl: "Yolun tamamı 6x olsun. x yolu 30 dakikada gidiyor. Yarı yol 3x olduğundan 3x − x = 2x yol daha gitmelidir: 2 · 30 = 60 dakika.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "45", ok: false },
      { text: "60", ok: true },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p><b>240 km'lik yolun bir kısmını 90 km/s hızla gittikten sonra hızını 60 km/s'e düşüren bir kişi yolun tamamını 3 saatte gittiğine göre hızlı olduğu sürede kaç km yol gitmiştir?</b></p>",
    diff: 2,
    expl: "Hızlı gittiği süre t olsun. 90t + 60(3 − t) = 240 ⇒ 30t = 60 ⇒ t = 2 saat. Hızlı olduğu sürede aldığı yol = 90 · 2 = 180 km.",
    answers: [
      { text: "60", ok: false },
      { text: "120", ok: false },
      { text: "180", ok: true },
      { text: "200", ok: false },
      { text: "210", ok: false }
    ]
  },
  {
    text: "<p>Hızları farkı V<sub>1</sub> − V<sub>2</sub> = 25 km/s olan iki araç birlikte A noktasından harekete başlıyor. Hızlı olan B noktasından geçip C'ye varıyor. Hiç durmadan geri döndüğünde diğer araçla B noktasında karşılaşıyorlar.</p><p><b>|AB| / |AC| = 3/4 olduğuna göre V<sub>1</sub> kaçtır?</b></p>",
    diff: 3,
    expl: "|AB| = 3y, |AC| = 4y ⇒ |BC| = y. Aynı sürede yavaş araç 3y, hızlı araç 4y + y = 5y yol alır. V₁/V₂ = 5/3 ⇒ V₁ = 5k, V₂ = 3k. 5k − 3k = 25 ⇒ k = 25/2. V₁ = 5 · 25/2 = 125/2 km/s.",
    answers: [
      { text: "15/2", ok: false },
      { text: "45/2", ok: false },
      { text: "75/2", ok: false },
      { text: "125/2", ok: true },
      { text: "75", ok: false }
    ]
  },
  {
    text: "<p>Hızı saatte 192 km olan 100 metre uzunluğundaki hızlı tren 1400 metre uzunluğundaki tünele belirli bir uzaklıktan yaklaşmaktadır.</p><p><b>Trenin tünele girip tamamen çıkması 3/8 saat sürdüğüne göre trenin tünele uzaklığı kaç km'dir?</b></p>",
    diff: 3,
    expl: "Trenin aldığı toplam yol = tünele uzaklık + tünel boyu + tren boyu. Toplam yol = 192 · 3/8 = 72 km. Tünel 1,4 km, tren 0,1 km olduğundan tünele uzaklık = 72 − 1,5 = 70,5 km.",
    answers: [
      { text: "68,6", ok: false },
      { text: "69,5", ok: false },
      { text: "70,5", ok: true },
      { text: "71", ok: false },
      { text: "73,5", ok: false }
    ]
  },
  {
    text: "<p>Hızları 2 ve 3 ile orantılı iki araç birbirinden 350 km uzakta iken aynı anda birbirine doğru yola çıkıyorlar.</p><p><b>3,5 saat sonra buluştuklarında yavaş olan kaç km yol gitmiştir?</b></p>",
    diff: 2,
    expl: "Hızlar 2v ve 3v olsun. (2v + 3v) · 3,5 = 350 ⇒ 17,5v = 350 ⇒ v = 20. Yavaş aracın hızı 40 km/s, aldığı yol 40 · 3,5 = 140 km.",
    answers: [
      { text: "120", ok: false },
      { text: "140", ok: true },
      { text: "160", ok: false },
      { text: "180", ok: false },
      { text: "210", ok: false }
    ]
  },
  {
    text: "<p>Bir araç saatte 120 km hızla 3 saat yol gittikten sonra yarım saat mola veriyor. Moladan sonra 100 km/s hızla 4 saat gidip yarım saatlik bir mola daha veriyor ve artık molasız 110 km/s sabit hızla 4 saat yol alıp yolculuğu bitiriyor.</p><p><b>Tüm yolculuktaki ortalama hızı kaçtır?</b></p>",
    diff: 2,
    expl: "Toplam yol = 120 · 3 + 100 · 4 + 110 · 4 = 360 + 400 + 440 = 1200 km. Toplam süre (molalar dahil) = 3 + 0,5 + 4 + 0,5 + 4 = 12 saat. Ortalama hız = 1200/12 = 100 km/s.",
    answers: [
      { text: "100", ok: true },
      { text: "103", ok: false },
      { text: "105", ok: false },
      { text: "110", ok: false },
      { text: "115", ok: false }
    ]
  },
  {
    text: "<p>Çevresi 1440 m olan dairesel pistin herhangi bir noktasından hızları farklı iki araç harekete geçiyorlar. Hızlı olan 1. turunu tamamladıktan sonra yavaş olanı yakalamak için hiç durmadan ve aynı hızla devam ediyor. Yavaş araç pistin 3/4'ünü tamamladığında hızlı araç yetişiyor.</p><p><b>Buna göre araçların hızları oranı nedir?</b></p>",
    diff: 3,
    expl: "Yavaş araç 1440 · 3/4 = 1080 m yol alır. Hızlı araç bir tur fazla atarak yetiştiğinden 1080 + 1440 = 2520 m yol alır. Aynı sürede alınan yollar hızlarla orantılıdır: 2520/1080 = 7/3.",
    answers: [
      { text: "4/7", ok: false },
      { text: "3/4", ok: false },
      { text: "1", ok: false },
      { text: "7/3", ok: true },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>A'dan saatte 130 km hızla harekete başlayan araç, B'den aynı yönde 90 km/s hızla harekete başlayan aracı bir C noktasında yakalamaktadır.</p><p><b>A'nın B'ye uzaklığı 200 km olduğuna göre B'nin C'ye uzaklığı kaç km'dir?</b></p>",
    diff: 2,
    expl: "Yakalama süresi = aradaki mesafe / hız farkı = 200 / (130 − 90) = 5 saat. |BC| = 90 · 5 = 450 km.",
    answers: [
      { text: "250", ok: false },
      { text: "300", ok: false },
      { text: "400", ok: false },
      { text: "450", ok: true },
      { text: "650", ok: false }
    ]
  },
  {
    text: "<p><b>Akıntı hızı 5 km/s olan bir nehirde akıntı yönünde 2 saatte alınan mesafe, akıntıya karşı 4 saatte alındığına göre bu mesafe kaç km'dir?</b></p>",
    diff: 2,
    expl: "Teknenin hızı V olsun. 2(V + 5) = 4(V − 5) ⇒ 2V + 10 = 4V − 20 ⇒ V = 15 km/s. Mesafe = 2 · (15 + 5) = 40 km.",
    answers: [
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "40", ok: true }
    ]
  },
  {
    text: "<p>Saatte 70 km hızla A'dan, saatte 50 km hızla B'den aynı anda aynı yöne doğru harekete başlayan iki araç arasındaki ilk mesafe 40 km'dir.</p><p><b>Hızlı aracın yavaşa yetişip, geçip 60 km mesafeyi açıp öne geçmesi kaç saat sürer?</b></p>",
    diff: 2,
    expl: "Hız farkı 70 − 50 = 20 km/s. Hızlı araç önce 40 km'yi kapatmalı, sonra 60 km fark açmalıdır: 40 + 60 = 100 km. Süre = 100/20 = 5 saat.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki grafikte A ve B fidanlarının ilk boyları ve uzama süreleri verilmiştir. Grafiğe göre x + y toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/hareket-problemleri_t1_q14.jpg",
    diff: 3,
    expl: "A fidanı 15'ten başlayıp 2. ayda 30 olmuştur: ayda (30 − 15)/2 = 7,5 birim uzar. 15 + 7,5x = 60 ⇒ x = 6. B fidanı 20'den başlayıp 2. ayda 30 olmuştur: ayda 5 birim uzar. 20 + 5y = 60 ⇒ y = 8. x + y = 6 + 8 = 14.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "14", ok: true },
      { text: "16", ok: false }
    ]
  },

// ─── HAREKET PROBLEMLERİ TEST - 2 ─────────────────────────────────────────────

  {
    text: "<p>Birinin hızı 50 km/s olan iki hareketli, aynı anda aynı noktadan dik doğrultuda harekete başlıyorlar.</p><p><b>4 saat sonra aralarındaki uzaklık 520 km olduğuna göre diğer hareketlinin hızı saatte kaç km'dir?</b></p>",
    diff: 2,
    expl: "Hareketliler dik doğrultuda gittiğinden aradaki uzaklık dik üçgenin hipotenüsüdür. Birinci hareketli 50 · 4 = 200 km yol alır. 200² + (4V)² = 520² ⇒ (5-12-13 üçgeninin 40 katı) 4V = 480 ⇒ V = 120 km/s bulunur. Not: Kitabın cevap anahtarı A (60) seçeneğini vermektedir; hesaplama ise 120 sonucunu verir.",
    answers: [
      { text: "60", ok: true },
      { text: "80", ok: false },
      { text: "90", ok: false },
      { text: "120", ok: false },
      { text: "140", ok: false }
    ]
  },
  {
    text: "<p>Aralarında 80 km mesafe bulunan iki hareketliden önde bulunan hareketlinin hızı 80 km/s'tir. Bu hareketliler aynı yönde giderlerse 2 saat sonra aynı noktada olacaklardır.</p><p><b>Birbirlerine doğru hareket ederlerse kaç dakika sonra karşılaşırlar?</b></p>",
    diff: 2,
    expl: "Arkadakinin hızı V olsun. (V − 80) · 2 = 80 ⇒ V = 120 km/s. Birbirlerine doğru: (120 + 80) · t = 80 ⇒ t = 2/5 saat = 24 dakika.",
    answers: [
      { text: "20", ok: false },
      { text: "30", ok: false },
      { text: "24", ok: true },
      { text: "50", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>Çevresi 2400 m olan dairesel bir pistin bir noktasından hızları farklı üç yarışmacı yarışa aynı anda başlıyor. Hızları sabit olan yarışmacılardan en hızlı olanın başlangıç noktasıyla arasındaki doğru çap oluşturduğunda en yavaş olanın bu doğruya en yakın uzaklığı yarıçap uzunluğundadır. Diğer yarışmacı ise tam ortalarındadır.</p><p><b>İkinci gelen bu yarışmacı yarışı bitirdiğinde 3. nün kaç metresi kalmıştır?</b></p>",
    diff: 3,
    expl: "En hızlı yarışmacı yarım tur (1200 m), en yavaş olan çeyrek tur (600 m), ortadaki ise (1200 + 600)/2 = 900 m yol almıştır. Hızlar 1200 : 900 : 600 oranındadır. İkinci yarışmacı 2400 m'yi bitirdiğinde üçüncü 2400 · 600/900 = 1600 m yol alır. Kalan = 2400 − 1600 = 800 m.",
    answers: [
      { text: "400", ok: false },
      { text: "600", ok: false },
      { text: "800", ok: true },
      { text: "900", ok: false },
      { text: "1200", ok: false }
    ]
  },
  {
    text: "<p>Saat 15.00'de akrep ile yelkovan arasında 90°'lik açı vardır.</p><p><b>Bu andan kaç dakika sonra aralarındaki açı ilk kez tekrar 90° olur?</b></p>",
    diff: 3,
    expl: "Yelkovan dakikada 6°, akrep 0,5° ilerler; bağıl hız 11/2 derece/dakikadır. Yelkovan önce 90°'yi kapatıp sonra 90° öne geçmelidir: 180°. Süre = 180 / (11/2) = 360/11 dakika.",
    answers: [
      { text: "845/11", ok: false },
      { text: "420/13", ok: false },
      { text: "33", ok: false },
      { text: "360/11", ok: true },
      { text: "450/13", ok: false }
    ]
  },
  {
    text: "<p>Aynı miktarda basamak ve uzunluğa sahip zıt yönlü ve paralel iki yürüyen merdivenden yukarıdan aşağıya inen Ömer 36 adımda en aşağıya, aşağıdan yukarıya çıkan Gökçe 48 adımda en üste varmıştır.</p><p><b>Ömer yukarıdan Gökçe aşağıdan aynı anda ve kendi hızlarında basamaklara adım attıklarında karşılaşana kadar (yanyana gelene kadar) geçen sürede Gökçe merdivenin kaçta kaçını çıkmıştır?</b></p>",
    diff: 3,
    expl: "Aynı hızda adım attıklarından merdiveni bitirme süreleri adım sayılarıyla orantılıdır: Ömer 36k, Gökçe 48k sürede. Karşılaşma süresi t için t/36k + t/48k = 1 ⇒ t = 144k/7. Gökçe'nin çıktığı kısım = t/48k = 3/7.",
    answers: [
      { text: "1/3", ok: false },
      { text: "3/7", ok: true },
      { text: "2/3", ok: false },
      { text: "4/7", ok: false },
      { text: "3/4", ok: false }
    ]
  },
  {
    text: "<p>Bir araç dairesel pistte 2 tam tur atıyor. 1. turu (2V + 10) km/s hızla, 2. turu (V − 30) km/s hızla tamamlıyor.</p><p><b>İki tur boyunca hiç durmayan araç iki turu toplam 17 saatte tamamladığına göre 2. turu tamamlama süresi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Tur süreleri t₁ ve t₂ olsun; t₁ + t₂ = 17 ve (2V + 10)t₁ = (V − 30)t₂. t₁ = 17 − t₂ yazılırsa (2V + 10)(17 − t₂) = (V − 30)t₂ ⇒ 17(2V + 10) = t₂(3V − 20) ⇒ t₂ = 34(V + 5)/(3V − 20).",
    answers: [
      { text: "17 · (V − 10) / (3V + 40)", ok: false },
      { text: "(17V − 510) / (3V − 10)", ok: false },
      { text: "(34V − 340) / (V + 17)", ok: false },
      { text: "34(V + 5) / (3V − 20)", ok: true },
      { text: "(17V + 340) / (3V + 10)", ok: false }
    ]
  },
  {
    text: "<p>A noktasındaki Yasir ile B noktasındaki Mustafa arasındaki uzaklık Yasir adımlarına göre 30 adımdır. Yasir'in bir adım uzunluğu Mustafa'nın bir adım uzunluğunun 2/3'üdür.</p><p><b>Birim zamanda eşit sayıda adım attıklarına göre A ve B noktalarından birbirlerine doğru adım atan Yasir ve Mustafa karşılaşana kadar toplam kaç adım atarlar?</b></p>",
    diff: 2,
    expl: "Yasir'in adımı 2x, Mustafa'nınki 3x olsun. Uzaklık = 30 · 2x = 60x. Her birim zamanda 2x + 3x = 5x yol kapanır: 60x/5x = 12. Her biri 12 adım atar, toplam 24 adım.",
    answers: [
      { text: "12", ok: false },
      { text: "16", ok: false },
      { text: "20", ok: false },
      { text: "24", ok: true },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p>Boyları 5 cm ve 10 cm olan aynı cins iki mumdan kısa olan 3 saatte, uzun olan 6 saatte tamamen yanmaktadır.</p><p><b>Kaç dakika sonra kısa olanın boyu uzun olanın boyunun 2/5'i olur?</b> (Aynı anda yakılmaktadırlar.)</p>",
    diff: 2,
    expl: "İki mum da saatte 5/3 cm kısalır. t saat sonra: 5 − 5t/3 = (2/5)(10 − 5t/3) ⇒ 5 − 5t/3 = 4 − 2t/3 ⇒ t = 1 saat = 60 dakika.",
    answers: [
      { text: "40", ok: false },
      { text: "24", ok: false },
      { text: "72", ok: false },
      { text: "48", ok: false },
      { text: "60", ok: true }
    ]
  },
  {
    text: "<p>Sabah saat 07.00'de 28 km uzakta bulunan işyerine gitmek üzere yürüyerek yola koyulan Selim dakikada 600 m hızla bir süre gittikten sonra evde bazı şeyler unuttuğunu fark ederek aynı hızla eve dönüyor. 2 dk evdeki zaman kaybından sonra 30 km/s hızla bisikletiyle yola çıkarak 08.00'de işine varıyor.</p><p><b>Buna göre bazı şeyler unuttuğunu fark ettiğinde kaç m yürümüştür?</b></p>",
    diff: 3,
    expl: "30 km/s = 500 m/dk; bisikletle 28000/500 = 56 dakika. Toplam 60 dakikadan 56 + 2 = 58 dakika çıkarsa gidiş-dönüş yürüyüşü 2 dakikadır. Gidiş 1 dakika: 600 m.",
    answers: [
      { text: "600 m", ok: true },
      { text: "800 m", ok: false },
      { text: "1200 m", ok: false },
      { text: "1600 m", ok: false },
      { text: "1800 m", ok: false }
    ]
  },
  {
    text: "<p>Sahilden 3 m/sn hızla 4 km uzaklıktaki A noktasına doğru, A noktasından 7,2 km/s hızla sahile doğru aynı anda (birbirlerine doğru) iki tekne hareket edecektir.</p><p><b>Sahile doğru 0,5 m/s akıntı hızı da düşünüldüğünde kaç dakika sonra karşılaşacaklardır?</b></p>",
    diff: 2,
    expl: "Birbirine doğru giden teknelerde akıntı birini hızlandırıp diğerini aynı miktarda yavaşlattığından toplam hıza etkisi yoktur. 7,2 km/s = 2 m/sn. Toplam hız 3 + 2 = 5 m/sn. Süre = 4000/5 = 800 sn = 40/3 dakika.",
    answers: [
      { text: "10/3", ok: false },
      { text: "20/3", ok: false },
      { text: "10", ok: false },
      { text: "40/3", ok: true },
      { text: "50/3", ok: false }
    ]
  },
  {
    text: "<p>Aralarında belli bir uzaklık bulunan, 300 m uzunluğa 3 m/sn hıza sahip kuru yük gemisi ile 30 m uzunluğa 15 m/sn hıza sahip yolcu gemisi birbirlerine doğru yaklaşmaktadır.</p><p><b>50 sn sonra birbirlerini tamamen geçmiş olduklarına göre aralarındaki ilk uzaklık kaç metredir?</b></p>",
    diff: 2,
    expl: "Toplam alınan yol = (3 + 15) · 50 = 900 m. Bu yol = ilk uzaklık + 300 + 30 olduğundan ilk uzaklık = 900 − 330 = 570 m.",
    answers: [
      { text: "270", ok: false },
      { text: "360", ok: false },
      { text: "480", ok: false },
      { text: "540", ok: false },
      { text: "570", ok: true }
    ]
  },

// ─── HAREKET PROBLEMLERİ TEST - 3 ─────────────────────────────────────────────

  {
    text: "<p>Deniz ve Tuna yanyana olan iki bilet gişesinde sıraya girerler. Önlerindeki kişi sayısı aynıdır fakat Deniz'in bulunduğu sıranın gişe görevlisi 15 sn de bir müşteri bakarken, Tuna'nın bulunduğu sıranın gişe görevlisi 10 sn de bir müşteri bakmaktadır.</p><p><b>2,5 dk sonra Deniz'in önündeki kişi sayısı Tuna'nın önündeki kişi sayısının 2 katı olduğuna göre sıraya girdiklerinde önlerindeki kişiler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Her birinin önünde x kişi olsun. 150 saniyede Deniz'in gişesi 10, Tuna'nınki 15 kişiye bakar. x − 10 = 2(x − 15) ⇒ x = 20. Toplam = 2x = 40.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "40", ok: true }
    ]
  },
  {
    text: "<p>Sağ şeritten V<sub>1</sub> hızıyla giden 20 m uzunluğundaki tünelin girişinde bulunan tır ile 15 metre geriden sol şeritten V<sub>2</sub> hızıyla aynı yönde giden 5 m uzunluğundaki araç bir tünele yaklaşmaktadır. 4V<sub>1</sub> = 3V<sub>2</sub> olmak üzere tır ile araç tüneli aynı anda terk etmektedir.</p><p><b>Buna göre tünelin uzunluğu kaç metredir?</b></p>",
    diff: 3,
    expl: "Tünel uzunluğu X olsun. Tırın önü tünel girişindedir; tüneli terk etmesi için X + 20 m yol alır. Araç tırın arkasından 15 m geride olduğundan tünel girişine 20 + 15 = 35 m uzaktadır; tüneli terk etmesi için 35 + X + 5 = X + 40 m yol alır. Süreler eşit olduğundan (X + 20)/(X + 40) = V₁/V₂ = 3/4 ⇒ 4X + 80 = 3X + 120 ⇒ X = 40 m.",
    answers: [
      { text: "20", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: true },
      { text: "80", ok: false },
      { text: "120", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki şekilde bir düzgün beşgenin kenarlarını çap kabul eden yarım çemberlerden oluşan pist verilmiştir.</p><p><b>Pistin A noktasından zıt yönde harekete başlayan 1 ve 2 nolu hareketliler ilk kez C noktasında karşılaştıklarına göre 13. karşılaşmaları hangi noktada olur?</b></p>",
    img: "QuestionsImage/kpss/matematik/hareket-problemleri_t1_q28.jpg",
    diff: 3,
    expl: "Her yarım çember 1 birim olsun. İlk karşılaşmada 1 nolu hareketli A → E → D → C (3 birim), 2 nolu A → B → C (2 birim) yol almıştır; hızlar oranı 3/2'dir. Her karşılaşma arasında toplam 5 birim (bir tur) yol alınır ve 1 nolu hareketli aynı yönde 3 birim ilerler: 1. C, 2. E, 3. B, 4. D, 5. A. Karşılaşmalar 5'li periyotla tekrar eder; 13 = 2 · 5 + 3 olduğundan 13. karşılaşma 3. karşılaşma ile aynı noktada, B'de olur.",
    answers: [
      { text: "A", ok: false },
      { text: "B", ok: true },
      { text: "C", ok: false },
      { text: "D", ok: false },
      { text: "E", ok: false }
    ]
  },
  {
    text: "<p>A şehrinden 1400 km uzaktaki B şehrine doğru saat 07.00'de yola çıkan sabit hızlı bir araç 21.00'de yolculuğunu tamamlamayı planlamıştır. 300 km gittikten sonra yolun belirli bir kısmındaki çalışmadan dolayı bu kısmı 2 katı uzunluğundaki alternatif yoldan yarı hızla gitmek durumunda kalmıştır. Bu durumdan dolayı artık 23.00'de B şehrinde olmak istediği için alternatif yoldan asıl yola çıkınca hızını %2,5 artırmış ve bu kez planını gerçekleştirerek 23.00'de B şehrinde olmuştur.</p><p><b>Buna göre yol çalışması yapılan mesafe kaç km'dir?</b></p>",
    diff: 3,
    expl: "Planlanan hız = 1400/14 = 100 km/s. İlk 300 km 3 saat sürer. Çalışma yapılan mesafe X olsun: alternatif yol 2X km, hız 50 km/s, süre 2X/50 = X/25. Kalan (1100 − X) km 102,5 km/s ile gidilir. Toplam süre 16 saat: 3 + X/25 + (1100 − X)/102,5 = 16. 1025 ile çarpılırsa 41X + 10(1100 − X) = 13325 ⇒ 31X = 2325 ⇒ X = 75 km.",
    answers: [
      { text: "40", ok: false },
      { text: "50", ok: false },
      { text: "75", ok: true },
      { text: "90", ok: false },
      { text: "100", ok: false }
    ]
  }
];
