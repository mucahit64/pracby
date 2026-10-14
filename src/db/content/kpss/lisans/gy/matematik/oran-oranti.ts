import type { McQ } from "../../../../types";

export const MAT_ORAN_ORANTI_T2_DEVAM: McQ[] = [
  {
    text: "<p><b>3, 7 ve 9'un dördüncü orantısı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Dördüncü orantı x olsun. Orantı kuralına göre a/b = c/x şeklinde yazılır. 3/7 = 9/x denklemini çözersek: 3x = 63 => x = 21 bulunur.",
    answers: [
      { text: "1/9", ok: false },
      { text: "4/9", ok: false },
      { text: "9", ok: false },
      { text: "19", ok: false },
      { text: "21", ok: true }
    ]
  },
  {
    text: "<p><b>3 ekmekte 792 kcal olduğuna göre 2 ekmekte kaç kcal vardır?</b></p>",
    diff: 1,
    expl: "Doğru orantı sorusudur. 3 ekmek 792 kcal ise 1 ekmek 792 / 3 = 264 kcal'dir. 2 ekmek ise 264 · 2 = 528 kcal olur.",
    answers: [
      { text: "528", ok: true },
      { text: "512", ok: false },
      { text: "324", ok: false },
      { text: "264", ok: false },
      { text: "256", ok: false }
    ]
  },
  {
    text: "<p>4, 5 ve 9 yaşlarındaki üç kardeşe 144 bilye yaşları ile orantılı paylaştırılacaktır.</p><p><b>En az bilye alan ile en çok bilye alan çocuklar toplamda kaç bilye alır?</b></p>",
    diff: 2,
    expl: "Çocukların alacakları bilye sayıları yaşlarıyla doğru orantılıdır: 4k, 5k ve 9k. Toplam: 4k + 5k + 9k = 18k = 144 => k = 8'dir. En az bilye alan (4k) = 32, en çok bilye alan (9k) = 72 bilye alır. Toplamları: 32 + 72 = 104'tür.",
    answers: [
      { text: "32", ok: false },
      { text: "65", ok: false },
      { text: "72", ok: false },
      { text: "78", ok: false },
      { text: "104", ok: true }
    ]
  },
  {
    text: "<p>Eşit kapasiteli 6 musluğun doldurduğu havuzu 4 muslukla doldurmak istendiğinde dolum 2 saat daha uzuyor.</p><p><b>Aynı havuz aynı kapasiteli bir musluk ile kaç saatte dolar?</b></p>",
    diff: 2,
    expl: "Musluk sayısı ile dolum süresi ters orantılıdır. 6 musluk t saatte dolduruyorsa, 4 musluk (t+2) saatte doldurur. Denklem: 6t = 4(t+2) => 6t = 4t + 8 => 2t = 8 => t = 4. Toplam iş (havuzun kapasitesi) = 6 · 4 = 24 birim saattir. Bir musluk bu havuzu 24 saatte doldurur.",
    answers: [
      { text: "28", ok: false },
      { text: "24", ok: true },
      { text: "20", ok: false },
      { text: "16", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen grafiğe göre k değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/oran-oranti_t1_q5.jpg",
    diff: 2,
    expl: "Grafik orijinden geçen doğrusal bir grafik olduğu için x ve y arasında doğru orantı vardır: y = a·x. (3, 5) noktasından geçtiğine göre 5 = a·3 => a = 5/3'tür. Bizden x = k iken y = 75 olması durumunu istiyor: 75 = (5/3)k => 225 = 5k => k = 45 bulunur.",
    answers: [
      { text: "15", ok: false },
      { text: "18", ok: false },
      { text: "36", ok: false },
      { text: "45", ok: true },
      { text: "75", ok: false }
    ]
  },
  {
    text: "<p><b>(x + 4) ile y doğru orantılı olduklarına göre; x = 3 iken y = 2 ise x = 24 iken y kaçtır?</b></p>",
    diff: 2,
    expl: "İfadeler doğru orantılı ise bölümleri sabittir: (x+4) / y = k. x=3 ve y=2 için: (3+4) / 2 = 7/2 = k. İkinci durumda x=24 için: (24+4) / y = 7/2 => 28 / y = 7/2. İçler dışlar çarpımı ile 7y = 56 => y = 8 bulunur.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: true },
      { text: "12", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c sayıları sırasıyla 3, 5 ve 12 ile doğru orantılıdır.</p><p><b>2a + 3b − c = 72 olduğuna göre a − b + c toplamının değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Doğru orantı kuralına göre: a=3k, b=5k, c=12k diyebiliriz. Denklemde yerlerine koyalım: 2(3k) + 3(5k) - 12k = 72 => 6k + 15k - 12k = 72 => 9k = 72 => k=8. Bizden istenen: a - b + c = 3k - 5k + 12k = 10k. Sonuç 10 · 8 = 80'dir.",
    answers: [
      { text: "72", ok: false },
      { text: "76", ok: false },
      { text: "80", ok: true },
      { text: "86", ok: false },
      { text: "92", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c sayıları sırasıyla 2, 5 ve 9 ile ters orantılıdır.</p><p><b>2a + b + c = 118 olduğuna göre a − b − c'nin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Ters orantı kuralına göre çarpımlar sabittir: 2a = 5b = 9c = k. Buradan a=k/2, b=k/5, c=k/9 yazılır. Denklemde yerine koyalım: 2(k/2) + k/5 + k/9 = 118 => k + 14k/45 = 118 => 59k/45 = 118 => k = 90. Bu durumda a=45, b=18, c=10 olur. a - b - c = 45 - 18 - 10 = 17 bulunur.",
    answers: [
      { text: "17", ok: true },
      { text: "18", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p><b>Bir boyacının günde 8 saat çalışarak 20 günde boyadığı bir binayı aynı işçi günde 10 saat çalışarak kaç günde boyar?</b></p>",
    diff: 1,
    expl: "Yapılan iş miktarı sabittir. Günlük çalışma saati ile gün sayısı ters orantılıdır. 8 saat · 20 gün = 160 saatlik bir iş var. Günde 10 saat çalışarak: 10 · t = 160 => t = 16 günde bitirir.",
    answers: [
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p><b>Kamp planı yapan bir izci grubunun 20 gün yetecek kadar yiyeceği vardır. Yiyecek 2 kişinin kampa katılmaması sonucu 25 gün yettiğine göre kampa kaç kişi katılmıştır?</b></p>",
    diff: 2,
    expl: "İzci grubunun başlangıçtaki kişi sayısı x olsun. Toplam yiyecek miktarı kişi sayısı ile gün sayısının çarpımıdır (Ters Orantı): x · 20. 2 kişi eksilirse (x-2) kişi kalır ve bu yiyecek onlara 25 gün yetmiştir: (x-2) · 25. Eşitlersek: 20x = 25x - 50 => 5x = 50 => x = 10 (Başlangıçtaki planlanan kişi sayısı). Kampa katılan kişi sayısı x - 2 = 8'dir.",
    answers: [
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>3 gün boyunca %100 performansla günde 2 saat çalışarak yapılan işin 14 gün boyunca %50 performansla günde 6 saat çalışarak kaç katı yapılır?</b></p>",
    diff: 2,
    expl: "Bileşik orantı kuralı: (1. Yapılan İş) / (1. İşle İlgili Diğer Verilerin Çarpımı) = (2. Yapılan İş) / (2. İşle İlgili Diğer Verilerin Çarpımı). Birinci iş: İş1 / (3 · 100 · 2) = İş1 / 600. İkinci iş: İş2 / (14 · 50 · 6) = İş2 / 4200. Eşitlersek: İş1 / 600 = İş2 / 4200 => İş2 = 7 · İş1. Yani 7 katı iş yapılır.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>5000 TL iki kişi arasında 4 ve 6 ile ters orantılı olarak paylaşılıyor. Fakat aslında doğru orantılı paylaşmaları gerektiğini fark ediyorlar.</p><p><b>Bu durumu telafi etmek için çok para alan diğerine ne kadar para vermelidir?</b></p>",
    diff: 3,
    expl: "Ters orantılı paylaşım (4 ve 6 ile): 4x = 6y = 12k => Birinci 3k, İkinci 2k alır. 5k = 5000 => k = 1000. Birinci: 3000 TL, İkinci: 2000 TL almıştır.\nDoğru orantılı paylaşım (4 ve 6 ile): a/4 = b/6 = m => a = 4m, b = 6m. 10m = 5000 => m = 500. Doğrusunda Birinci: 2000 TL, İkinci: 3000 TL almalıdır.\nBirinci kişi fazladan 1000 TL almıştır. Durumu telafi etmek için bu 1000 TL'yi diğerine vermelidir.",
    answers: [
      { text: "1000", ok: true },
      { text: "1500", ok: false },
      { text: "2000", ok: false },
      { text: "2500", ok: false },
      { text: "3000", ok: false }
    ]
  },
  {
    text: "<p>Bir çiftçi tarlalarını sulamak için bir su deposu yaptırır. Depoya bir miktar su depolar ve ekim işleminden sonra 40 dönüm tarlasına 15 gün yeteceğini hesaplar. Fakat 3 gün sonra 8 dönüm tarla daha eker.</p><p><b>Depoda kalan su tüm tarlaya kaç gün daha yeter?</b></p>",
    diff: 3,
    expl: "Suyun toplam miktarına birim üzerinden bakalım: 40 dönüm · 15 gün = 600 birim su. İlk 3 gün boyunca 40 dönüm sulandı: 40 · 3 = 120 birim su harcandı. Depoda 600 - 120 = 480 birim su kaldı. 3 günün sonunda 8 dönüm daha eklendiği için sulanacak toplam alan 48 dönüm oldu. Kalan suyun ne kadar yeteceğini bulalım: 48 · t = 480 => t = 10 gün daha yeter.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>xy/2 = xz/5 = yz/10</p><p><b>olduğuna göre x, y ve z sırasıyla hangi sayılarla ters orantılıdır?</b></p>",
    diff: 3,
    expl: "Eşitliğin her tarafını 'xyz' ifadesine bölelim: 1/2z = 1/5y = 1/10x. İfadeleri ters çevirirsek: 2z = 5y = 10x elde edilir. x, y ve z sırasıyla 10, 5 ve 2 sayıları ile çarpım durumundadır (ters orantılıdır).",
    answers: [
      { text: "10, 20, 50", ok: false },
      { text: "10, 2, 5", ok: false },
      { text: "4, 10, 20", ok: false },
      { text: "10, 5, 2", ok: true },
      { text: "1, 5/2, 5", ok: false }
    ]
  },
  {
    text: "<p><b>x, y ve z marka yarış arabalarının hızları 12, 17 ve 19 ile ters orantılıdır. Araçların yarışı tamamlama süreleri toplam 24/5 saat olduğuna göre; yarışı ilk bitiren araç, arkasından gelen araçtan kaç dakika önce bitime gelmiştir?</b></p>",
    diff: 3,
    expl: "Yol sabit olduğunda Hız ile Süre ters orantılıdır. Hızları 12, 17, 19 ile ters orantılı ise (12V_x = 17V_y = 19V_z), süreleri doğru orantılı olacaktır: t_x = 12k, t_y = 17k, t_z = 19k. Toplam süre: 48k = 24/5 saat. Dakikaya çevirelim: 24/5 · 60 = 288 dakika. 48k = 288 => k = 6. Yarışı ilk bitiren en kısa sürede (12k) bitirendir: 12·6 = 72 dk. Arkasından gelen (17k) ise: 17·6 = 102 dk. Aradaki fark: 102 - 72 = 30 dakikadır.",
    answers: [
      { text: "36", ok: false },
      { text: "30", ok: true },
      { text: "29", ok: false },
      { text: "16", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>221 m uzunluğundaki bir hortum 5 ve 6 ile ters 7 ile doğru orantılı olacak şekilde üç parçaya ayrılıyor.</p><p><b>Büyük parça uzunluğu, diğer iki parça uzunluğundan ne kadar fazladır?</b></p>",
    diff: 3,
    expl: "Parçalar a, b ve c olsun. a ve b sırasıyla 5 ve 6 ile ters orantılı (5a = 6b = k), c ise 7 ile doğru orantılı (c/7 = k). Buna göre: a = k/5, b = k/6, c = 7k. Toplam: k/5 + k/6 + 7k = 221. Payda eşitlersek: (6k + 5k + 210k)/30 = 221 => 221k / 30 = 221 => k = 30. \nParçalar: a = 30/5 = 6, b = 30/6 = 5, c = 7·30 = 210. Büyük parça 210. Diğer ikisinin toplamı 6+5=11. Fark = 210 - 11 = 199'dur.",
    answers: [
      { text: "109", ok: false },
      { text: "127", ok: false },
      { text: "177", ok: false },
      { text: "189", ok: false },
      { text: "199", ok: true }
    ]
  },

// ─── ORAN - ORANTI TEST - 3 ───────────────────────────────────────────────────

  {
    text: "<p>a/b = c/d = e/f = 2/5</p><p><b>olmak üzere (a/e) · (d<sup>2</sup>/b) · (f/c<sup>2</sup>) çarpımı kaçtır?</b></p>",
    diff: 2,
    expl: "Orantıdan a=2k, b=5k, c=2m, d=5m, e=2n, f=5n yazabiliriz veya doğrudan bağımsız şekilde oranları ayırarak hesaplayabiliriz. İfadeyi yeniden düzenleyelim: a/b · f/e · d²/c². \nBurada a/b = 2/5. e/f = 2/5 ise tersi f/e = 5/2. c/d = 2/5 ise d/c = 5/2, karesi 25/4 olur.\nÇarpım: 2/5 · 5/2 · 25/4 = 1 · 25/4 = 25/4.",
    answers: [
      { text: "4/5", ok: false },
      { text: "16/25", ok: false },
      { text: "4/25", ok: false },
      { text: "25/16", ok: false },
      { text: "25/4", ok: true }
    ]
  },
  {
    text: "<p>x/2 = y/3 = z/4 ve x + y = 30</p><p><b>olduğuna göre x, y ve z'nin aritmetik ortalaması kaçtır?</b></p>",
    diff: 1,
    expl: "x=2k, y=3k, z=4k diyelim. x + y = 2k + 3k = 5k = 30 => k = 6. Bu durumda x=12, y=18, z=24 olur. Üçünün aritmetik ortalaması: (12 + 18 + 24) / 3 = 54 / 3 = 18.",
    answers: [
      { text: "18", ok: true },
      { text: "27", ok: false },
      { text: "32", ok: false },
      { text: "42", ok: false },
      { text: "54", ok: false }
    ]
  },
  {
    text: "<p>(x + 3) ile (y − 2) ters orantılıdır.</p><p><b>x = 5 iken y = 11 olduğuna göre x = −1 iken y kaçtır?</b></p>",
    diff: 1,
    expl: "Ters orantı kuralı: (x+3) · (y-2) = k (sabit). x=5 ve y=11 için: (5+3) · (11-2) = 8 · 9 = 72 = k. \nİkinci durumda x=-1 yazarsak: (-1+3) · (y-2) = 72 => 2 · (y-2) = 72 => y-2 = 36 => y = 38 bulunur.",
    answers: [
      { text: "−72", ok: false },
      { text: "−38", ok: false },
      { text: "1", ok: false },
      { text: "36", ok: false },
      { text: "38", ok: true }
    ]
  },
  {
    text: "<p>Bir öğrenci kulubünde kız öğrenci sayısının erkek öğrenci sayısına oranı 5/3'tür.</p><p><b>Erkek öğrenci sayısı 21 ise bu kulupte kaç öğrenci vardır?</b></p>",
    diff: 1,
    expl: "K/E = 5/3 => K = 5k ve E = 3k'dır. E = 21 verildiğine göre 3k = 21 => k = 7. K = 5 · 7 = 35. Toplam öğrenci sayısı K + E = 35 + 21 = 56'dır.",
    answers: [
      { text: "35", ok: false },
      { text: "42", ok: false },
      { text: "49", ok: false },
      { text: "56", ok: true },
      { text: "63", ok: false }
    ]
  },
  {
    text: "<p>a/b = 2/3 ve b/c = 4/5</p><p><b>oranları kullanılarak hazırlanan 700 gr'lık a, b, c maddelerinin karışımı içinde kaç gram c maddesi vardır?</b></p>",
    diff: 2,
    expl: "İki oranda da ortak olan b harfini eşitleyelim. İlk kesri 4 ile, ikinciyi 3 ile genişletelim: a/b = 8/12 ve b/c = 12/15. Bu durumda a=8k, b=12k, c=15k olur. Toplam karışım: 8k + 12k + 15k = 35k = 700 => k=20. c maddesi = 15k = 15 · 20 = 300 gramdır.",
    answers: [
      { text: "20", ok: false },
      { text: "160", ok: false },
      { text: "240", ok: false },
      { text: "300", ok: true },
      { text: "360", ok: false }
    ]
  },
  {
    text: "<p>Deniz ile Tuna'nın paraları oranı 3/4'tür. Tuna Deniz'e 60 TL verirse Tuna'nın parasının Deniz'in parasına oranı 1/2 oluyor.</p><p><b>Son durumda Tuna'nın ne kadar parası olur?</b></p>",
    diff: 2,
    expl: "Başlangıçta Deniz=3k, Tuna=4k. Tuna 60 TL verince Tuna'nın parası (4k-60), Deniz'in parası (3k+60) olur. Yeni oran: (4k-60) / (3k+60) = 1/2. İçler dışlar çarpımı: 2(4k-60) = 3k+60 => 8k - 120 = 3k + 60 => 5k = 180 => k = 36. Son durumda Tuna'nın parası: 4k - 60 = 4(36) - 60 = 144 - 60 = 84 TL'dir.",
    answers: [
      { text: "60", ok: false },
      { text: "84", ok: true },
      { text: "90", ok: false },
      { text: "96", ok: false },
      { text: "108", ok: false }
    ]
  },
  {
    text: "<p><b>a sayısı b ile doğru, c ile ters orantılıdır. Orantı sabiti 2/3 olduğuna göre a sayısı 4 katına çıkar. c sayısı yarıya düşürülürse orantı sabitinin değişmemesi için b nasıl değişmelidir?</b></p>",
    diff: 3,
    expl: "Orantı denklemi: (a · c) / b = 2/3 şeklindedir. Yeni durumda a'=4a ve c'=c/2. Sabit yine 2/3 kalmalı. (4a · (c/2)) / b' = 2/3 => (2ac) / b' = 2/3. Orijinal denklemden (ac) yerine (2/3)b yazarsak: (2 · (2/3)b) / b' = 2/3 => (4/3)b / b' = 2/3 => 4/b' = 2/b => 2b' = 4b => b' = 2b. Yani b sayısı 2 katına çıkmalıdır.",
    answers: [
      { text: "2 katına çıkar.", ok: true },
      { text: "3 katına çıkar.", ok: false },
      { text: "1/3 katına çıkar.", ok: false },
      { text: "Değişmez.", ok: false },
      { text: "1/2 katına çıkar.", ok: false }
    ]
  },
  {
    text: "<p><b>Belli bir ölçekte hazırlanmış harita üzerinde 420 km mesafeye sahip iki şehir 7 cm uzaklıkta göründüğüne göre 1 km mesafedeki iki konum haritada kaç cm uzaktadır?</b></p>",
    diff: 1,
    expl: "Doğru orantı kuralı. 420 km = 7 cm ise 1 km = x cm'dir. İçler dışlar çarpımı ile 420x = 7 => x = 7/420 = 1/60 cm bulunur.",
    answers: [
      { text: "1/600", ok: false },
      { text: "1/60", ok: true },
      { text: "1/6", ok: false },
      { text: "6", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p><b>Bir günde 7830 adım atarak 5,6 km yürüyüş yapan bir kişi 11745 adım attığı bir gün kaç km yürüyüş yapmıştır?</b></p>",
    diff: 2,
    expl: "Doğru orantı: 7830 adım -> 5.6 km, 11745 adım -> x km. x = (5.6 · 11745) / 7830. 11745 / 7830 oranı 1.5'e eşittir. x = 5.6 · 1.5 = 8.4 km.",
    answers: [
      { text: "6,2", ok: false },
      { text: "7,6", ok: false },
      { text: "8,4", ok: true },
      { text: "9,2", ok: false },
      { text: "9,6", ok: false }
    ]
  },
  {
    text: "<p>Bir inşatı 36 işçi günde 6 saat çalışarak 9 ayda bitiriyor.</p><p><b>İşçi sayısı %25 azaltılıp günlük çalışma süresi %50 artırılırsa aynı inşaat işi kaç ayda biter?</b></p>",
    diff: 2,
    expl: "Birinci durum iş çarpımları = İkinci durum iş çarpımları. 36 işçi %25 azaltılırsa: 36 - 9 = 27 işçi kalır. 6 saat %50 artırılırsa 6 + 3 = 9 saat olur. Denklem: 36 · 6 · 9 = 27 · 9 · t. İki tarafı sadeleştirelim (9'lar gider). 36 · 6 = 27 · t => 216 = 27t => t = 8 ay bulunur.",
    answers: [
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>Yaşları ortalaması 14 olan 3 kişilik bir ailede bir kişi 7 yaşında olduğuna göre diğer iki kişinin yaşları toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "3 kişinin yaş toplamı = Ortalama · Kişi Sayısı = 14 · 3 = 42'dir. Bir kişi 7 yaşında olduğuna göre diğer ikisinin yaşları toplamı 42 - 7 = 35 olur.",
    answers: [
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "35", ok: true },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p><b>Aritmetik ortalamaları 14 olan iki sayıya, aritmetik ortalamaları 24 olan üç sayı eklenirse tüm sayıların aritmetik ortalaması kaç olur?</b></p>",
    diff: 1,
    expl: "Birinci grubun yaş toplamı = 14 · 2 = 28. İkinci grubun yaş toplamı = 24 · 3 = 72. Yeni toplam = 28 + 72 = 100. Yeni kişi sayısı = 2 + 3 = 5. Yeni ortalama = 100 / 5 = 20.",
    answers: [
      { text: "18", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "22", ok: false }
    ]
  },
  {
    text: "<p>A takımdaki sporcuların alt yapıdaki sporculara oranı 2/3 olan bir takımda alt yapıdakilerin yıllık müsabaka ortalaması 6, A takımdakilerin yıllık müsabaka ortalaması 11'dir.</p><p><b>Takımda toplam 30 kişi olduğuna göre takımın tüm müsabakalarına A takımı çıksaydı A takımın yıllık müsabaka ortalaması kaç olurdu?</b></p>",
    diff: 3,
    expl: "A takımı 2k, alt yapı 3k olsun: 5k = 30 ⇒ k = 6; A takımında 12, alt yapıda 18 sporcu vardır. Toplam müsabaka sayısı 18 · 6 + 12 · 11 = 108 + 132 = 240'tır. Bu müsabakalara yalnızca A takımının 12 sporcusu çıksaydı ortalama 240 / 12 = 20 olurdu. Seçeneklerde 20 bulunmadığından kitabın cevap anahtarındaki E (22,5) işaretlenmiştir.",
    answers: [
      { text: "8", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false },
      { text: "22,5", ok: true }
    ]
  },
  {
    text: "<p>Bir topluluktaki 40 kişinin yaşları ortalaması 20'dir.</p><p><b>Bu topluluğa yaşları 40 ve 42 olan iki kişi katıldığında yeni yaş ortalaması kaç olur?</b></p>",
    diff: 1,
    expl: "Başlangıçtaki yaş toplamı = 40 · 20 = 800. Katılanlarla birlikte yeni toplam = 800 + 40 + 42 = 882. Yeni kişi sayısı = 40 + 2 = 42. Yeni ortalama = 882 / 42 = 21.",
    answers: [
      { text: "21", ok: true },
      { text: "24", ok: false },
      { text: "34", ok: false },
      { text: "40", ok: false },
      { text: "22,5", ok: false }
    ]
  },
  {
    text: "<p>n tane sayının çarpımlarının n. dereceden köküne geometrik ortalama denir.</p><p><b>O halde 4 ve 16 ile hangi sayının geometrik ortalaması 4 olur?</b></p>",
    diff: 2,
    expl: "Üç sayının geometrik ortalaması alındığı için küp kökünü alacağız. ∛(4 · 16 · x) = 4. Her iki tarafın küpünü alırsak: 64 · x = 4³ => 64x = 64 => x = 1 bulunur.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "16", ok: false }
    ]
  },

// ─── ORAN - ORANTI TEST - 4 ───────────────────────────────────────────────────

  {
    text: "<p>Bir okuldaki kızların sayısı 1,6 ile erkeklerin sayısı 2,4 ile orantılıdır.</p><p><b>Bu okuldaki öğrenci sayısı 300'den fazla olduğuna göre erkeklerin sayısı <u>en az</u> kaçtır?</b></p>",
    diff: 3,
    expl: "K / 1.6 = E / 2.4 oranı vardır. Genişletip tam sayı yapalım: K / 16 = E / 24. Sadeleştirelim (8'e bölerek): K / 2 = E / 3 = m olsun. Kız = 2m, Erkek = 3m. Toplam öğrenci = 5m. Soruya göre 5m > 300 => m > 60 olmalıdır. En az m = 61 seçilir. Erkek sayısı (E) = 3m = 3 · 61 = 183 bulunur.",
    answers: [
      { text: "180", ok: false },
      { text: "220", ok: false },
      { text: "187", ok: false },
      { text: "183", ok: true },
      { text: "175", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliğe göre (4 · x − 3 · y)/(3 · x + 2 · y) oranı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/oran-oranti_t1_q33.jpg",
    diff: 3,
    expl: "Eşitlik kitapta basıldığı haliyle tutarlı değildir; sorunun amaçlanan hali x²/(x − y) + y²/(y − x) = 2x − 4y'dir. Sol taraf (x² − y²)/(x − y) = x + y olur. x + y = 2x − 4y ⇒ x = 5y. İstenen oran (20y − 3y)/(15y + 2y) = 17y/17y = 1'dir.",
    answers: [
      { text: "1/5", ok: false },
      { text: "1/2", ok: false },
      { text: "1", ok: true },
      { text: "1/3", ok: false },
      { text: "2/3", ok: false }
    ]
  },
  {
    text: "<p>Bir traktörün ön tekerleğinin yarıçapı, arka tekerleğinin yarıçapının 2/3'üdür.</p><p>Traktör 120 m yol aldığında ön tekerlek arka tekerlekten 50 devir fazla yapmıştır.</p><p><b>Buna göre, arka tekerleğin çevresi kaç m'dir?</b></p>",
    diff: 3,
    expl: "Tekerleklerin çevreleri yarıçaplarıyla doğru orantılıdır. Ç_ön = 2k, Ç_arka = 3k. Devir sayısı çevreyle ters orantılıdır: Devir = Yol / Çevre. Ön devir: 120 / 2k = 60/k. Arka devir: 120 / 3k = 40/k. Aradaki fark: 60/k - 40/k = 50 => 20/k = 50 => k = 2/5 = 0.4. Arka tekerleğin çevresi 3k olduğuna göre: 3 · 0.4 = 1.2 m.",
    answers: [
      { text: "1", ok: false },
      { text: "1,5", ok: false },
      { text: "1,2", ok: true },
      { text: "1,8", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>Bir aracın duruş mesafesi, frene basıldığı andaki hızının karesiyle doğru orantılıdır.</p><p><b>Bu araç saatte 40 km hızla giderken duruş mesafesi 5 m olduğuna göre, saatte 80 km hızla giderken duruş mesafesi kaç m'dir?</b></p>",
    diff: 1,
    expl: "Mesafe = k · V² orantısı vardır. Hız 40'tan 80'e çıkarsa (2 katına çıkarsa), karesiyle orantılı olduğu için duruş mesafesi 2² = 4 katına çıkar. 5 m · 4 = 20 m bulunur.",
    answers: [
      { text: "15", ok: false },
      { text: "10", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "20", ok: true }
    ]
  },

// ─── SAYI PROBLEMLERİ TEST - 1 ────────────────────────────────────────────────

  {
    text: "<p><b>Hangi sayının 3 katının 2 fazlası 23'tür?</b></p>",
    diff: 1,
    expl: "Sayı x olsun. Denklem: 3x + 2 = 23 ⇒ 3x = 21 ⇒ x = 7.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>Hangi sayının 3 eksiğinin 5 katı 30'dur?</b></p>",
    diff: 1,
    expl: "Sayı x olsun. Denklem: 5(x - 3) = 30 ⇒ x - 3 = 6 ⇒ x = 9.",
    answers: [
      { text: "10", ok: false },
      { text: "9", ok: true },
      { text: "8", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>6/7'si 36 olan sayının yarısı kaçtır?</b></p>",
    diff: 1,
    expl: "Sayımız x olsun. 6x/7 = 36 ⇒ 6x = 252 ⇒ x = 42. Yarısı ise 42 / 2 = 21'dir.",
    answers: [
      { text: "7", ok: false },
      { text: "36", ok: false },
      { text: "30", ok: false },
      { text: "24", ok: false },
      { text: "21", ok: true }
    ]
  },
  {
    text: "<p><b>5 katının 3 fazlasının 1/3'ü 11 olan sayı kaçtır?</b></p>",
    diff: 1,
    expl: "Denklem: (5x + 3)/3 = 11 ⇒ 5x + 3 = 33 ⇒ 5x = 30 ⇒ x = 6.",
    answers: [
      { text: "20", ok: false },
      { text: "11", ok: false },
      { text: "8", ok: false },
      { text: "6", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Bir sayının 7 fazlası, aynı sayının 4 katına eşit ise, bu sayı kaçtır?</b></p>",
    diff: 1,
    expl: "Denklem: x + 7 = 4x ⇒ 3x = 7 ⇒ x = 7/3.",
    answers: [
      { text: "7/3", ok: true },
      { text: "6/7", ok: false },
      { text: "7/6", ok: false },
      { text: "1/3", ok: false },
      { text: "3/7", ok: false }
    ]
  },
  {
    text: "<p><b>Bir sayının 3 katı ile 4 katının toplamı aynı sayının 10 eksiğine eşit ise bu sayı kaçtır?</b></p>",
    diff: 1,
    expl: "Denklem: 3x + 4x = x - 10 ⇒ 7x = x - 10 ⇒ 6x = -10 ⇒ x = -10/6. Sadeleştirirsek -5/3.",
    answers: [
      { text: "−10/9", ok: false },
      { text: "−5/3", ok: true },
      { text: "3/5", ok: false },
      { text: "−3/5", ok: false },
      { text: "−9/10", ok: false }
    ]
  },
  {
    text: "<p><b>2 katının 3 eksiği ile 4 fazlasının 3 katı birbirine eşit olan sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Denklem: 2x - 3 = 3(x + 4) ⇒ 2x - 3 = 3x + 12. Bilinenleri bir tarafa atarsak: x = -15.",
    answers: [
      { text: "−18", ok: false },
      { text: "−16", ok: false },
      { text: "−15", ok: true },
      { text: "−12", ok: false },
      { text: "−10", ok: false }
    ]
  },
  {
    text: "<p>Bir sayının 3/4'ünün 5 fazlası 8 sayısına eşittir.</p><p><b>Buna göre bu sayının 7/4'ü kaçtır?</b></p>",
    diff: 1,
    expl: "3x/4 + 5 = 8 ⇒ 3x/4 = 3 ⇒ x = 4. İstenen ifade: 4 · 7/4 = 7.",
    answers: [
      { text: "16", ok: false },
      { text: "14", ok: false },
      { text: "13", ok: false },
      { text: "7", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>Bir sayının 2 katının 1 fazlası aynı sayının 3 katının 2 eksiği ile toplandığında sonuç 44 olduğuna göre bu sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Denklem: (2x + 1) + (3x - 2) = 44 ⇒ 5x - 1 = 44 ⇒ 5x = 45 ⇒ x = 9.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: true },
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p><b>150 sayısının 1/3'ü ile 2/5'inin toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "150'nin 1/3'ü: 150/3 = 50. 150'nin 2/5'i: (150 · 2) / 5 = 300 / 5 = 60. Toplam: 50 + 60 = 110.",
    answers: [
      { text: "70", ok: false },
      { text: "80", ok: false },
      { text: "90", ok: false },
      { text: "100", ok: false },
      { text: "110", ok: true }
    ]
  },
  {
    text: "<p><b>Hangi sayının 2/5'i, 1/6'sından 7 eksiktir?</b></p>",
    diff: 2,
    expl: "Denklem: 2x/5 = x/6 - 7. Bilinmeyenleri toplayalım: x/6 - 2x/5 = 7. Payda eşitlersek: (5x - 12x)/30 = 7 ⇒ (-7x)/30 = 7 ⇒ -7x = 210 ⇒ x = -30.",
    answers: [
      { text: "−12", ok: false },
      { text: "−20", ok: false },
      { text: "−25", ok: false },
      { text: "−30", ok: true },
      { text: "−36", ok: false }
    ]
  },
  {
    text: "<p><b>Bir sayı x ile gösterilirse, bu sayının 2 katının 5 eksiğinin üçte biri aşağıdaki gösterimlerden hangisi ile gösterilir?</b></p>",
    diff: 1,
    expl: "İşlemleri sırasıyla yazalım: Önce 2 katı (2x), sonra 5 eksiği (2x - 5), en son üçte biri (2x - 5)/3.",
    answers: [
      { text: "((x − 5)·2)/3", ok: false },
      { text: "(x − 5)/3", ok: false },
      { text: "(2x − 5)/3", ok: true },
      { text: "(x + 5)/3", ok: false },
      { text: "(2x + 5)/3", ok: false }
    ]
  },
  {
    text: "<p>Farkları 24 olan iki sayıdan büyük olanı, diğerinin 3 katına eşittir.</p><p><b>Buna göre bu iki sayının toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "Küçük sayı y, büyük sayı x olsun. x - y = 24 ve x = 3y. Yerine yazalım: 3y - y = 24 ⇒ 2y = 24 ⇒ y = 12. Büyük sayı x = 36. Toplam: 36 + 12 = 48.",
    answers: [
      { text: "48", ok: true },
      { text: "42", ok: false },
      { text: "36", ok: false },
      { text: "30", ok: false },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p><b>Toplamları 55 olan iki sayıdan biri diğerinin 4 katına eşit ise, bu sayılardan küçük olanı kaçtır?</b></p>",
    diff: 1,
    expl: "Sayılar x ve 4x olsun. Toplam: x + 4x = 55 ⇒ 5x = 55 ⇒ x = 11. Küçük olan 11'dir.",
    answers: [
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: true },
      { text: "12", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>Toplamları 28 olan iki sayıdan büyük olanı, küçük olanın 2 katından 8 eksik olduğuna göre büyük olan sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Küçük K, büyük B olsun. B + K = 28 ve B = 2K - 8. Birinci denklemde B yerine bunu yazalım: (2K - 8) + K = 28 ⇒ 3K - 8 = 28 ⇒ 3K = 36 ⇒ K = 12. Büyük sayı B = 28 - 12 = 16.",
    answers: [
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>Ali'nin parası Ahmet'in parasının 3 katıdır.</p><p><b>Ali ile Ahmet'in paralarının toplamı 160 TL ise Ali'nin parasının 5/6'sı kaçtır?</b></p>",
    diff: 2,
    expl: "Ahmet'in parası k, Ali'nin parası 3k. Toplam: 4k = 160 ⇒ k = 40. Ali'nin parası 120 TL. Bizden bunun 5/6'sını istiyor: 120 · 5/6 = 20 · 5 = 100.",
    answers: [
      { text: "80", ok: false },
      { text: "90", ok: false },
      { text: "100", ok: true },
      { text: "110", ok: false },
      { text: "120", ok: false }
    ]
  },

// ─── SAYI PROBLEMLERİ TEST - 2 ────────────────────────────────────────────────

  {
    text: "<p>Bir sınıftaki kız öğrenci sayısı, erkek öğrenci sayısının 4 katının 12 eksiğidir.</p><p><b>Sınıf mevcudu 18 olduğuna göre kız öğrencilerin sayısı erkek öğrencilerin sayısından kaç fazladır?</b></p>",
    diff: 2,
    expl: "Erkeklere E diyelim. Kızlar K = 4E - 12. Sınıf mevcudu: K + E = 18 ⇒ (4E - 12) + E = 18 ⇒ 5E = 30 ⇒ E = 6. Kızlar: K = 18 - 6 = 12. Aralarındaki fark: 12 - 6 = 6.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>Arda'nın parası Burak'ın parasının 5 katıdır. Arda, Burak'a 300 TL verirse Arda'nın parası Burak'ın parasının 3 katı oluyor.</p><p><b>Burak'ın başlangıçtaki parası kaç TL'dir?</b></p>",
    diff: 2,
    expl: "Başlangıçta Burak B, Arda 5B. Arda 300 TL verirse: Arda'nın kalan parası (5B - 300), Burak'ın yeni parası (B + 300) olur. Denklem: 5B - 300 = 3(B + 300) ⇒ 5B - 300 = 3B + 900 ⇒ 2B = 1200 ⇒ B = 600.",
    answers: [
      { text: "400", ok: false },
      { text: "500", ok: false },
      { text: "600", ok: true },
      { text: "700", ok: false },
      { text: "800", ok: false }
    ]
  },
  {
    text: "<p>Emre'nin parası, Elif'in parasının 2 katıdır. Emre Elif'e 8 TL verirse paraları eşit oluyor.</p><p><b>Buna göre Elif'in başlangıçtaki parasının 1/4'ü kaç TL'dir?</b></p>",
    diff: 2,
    expl: "Başlangıçta Elif k, Emre 2k. Para alışverişi sonrası eşitlik: 2k - 8 = k + 8 ⇒ k = 16. Elif'in başlangıçtaki parası 16 TL'dir. Bunun 1/4'ü 16/4 = 4 TL'dir.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>30 yolcusu bulunan bir otobüsten 2 erkek, 4 kadın inince, erkeklerin sayısı kadınların sayısına eşit oluyor.</p><p><b>Buna göre ilk durumda otobüste kaç erkek vardır?</b></p>",
    diff: 2,
    expl: "Başlangıçta Erkek(E) ve Kadın(K). E + K = 30. İnenlerden sonra: E - 2 = K - 4 ⇒ E = K - 2. İlk denkleme koyarsak: (K - 2) + K = 30 ⇒ 2K = 32 ⇒ K = 16. Erkekler E = 30 - 16 = 14 olur.",
    answers: [
      { text: "14", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "17", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>Bir düğün salonunda 13 erkek 57 kadın vardır.</p><p><b>Bu salona kaç evli çift gelirse, erkek sayısı kadın sayısının 5/16'sı olur?</b></p>",
    diff: 2,
    expl: "Evli çift x tane olsun. Salona x tane erkek ve x tane kadın girer. Yeni sayılar: Erkek = 13+x, Kadın = 57+x. Denklem: (13+x) = 5/16(57+x). İçler dışlar çarpımı: 16(13+x) = 5(57+x) ⇒ 208 + 16x = 285 + 5x ⇒ 11x = 77 ⇒ x = 7.",
    answers: [
      { text: "13", ok: false },
      { text: "11", ok: false },
      { text: "10", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: true }
    ]
  },
  {
    text: "<p>Ayşe'nin mavi boncuklarının sayısı, sarı boncuklarının sayısının 3 katından 4 eksiktir.</p><p><b>Ayşe'nin toplam 16 tane boncuğu olduğuna göre sarı boncukların sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "Sarı boncuklara S diyelim. Mavi boncuklar: M = 3S - 4. Toplam: M + S = 16 ⇒ (3S - 4) + S = 16 ⇒ 4S = 20 ⇒ S = 5.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>Üç farklı sayıdan birincisi, ikincisinin yarısına, üçüncünün 4 katına eşittir.</p><p><b>Bu üç sayının toplamı 52 olduğuna göre ortanca sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Birinci sayıya a diyelim. a = b/2 ⇒ b = 2a. Ayrıca a = 4c ⇒ c = a/4. Toplamları: a + 2a + a/4 = 52 ⇒ 3a + a/4 = 52 ⇒ 13a/4 = 52 ⇒ a = 16. Buna göre: a = 16, b = 32, c = 4. Ortanca sayı a(16)'dır.",
    answers: [
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false },
      { text: "16", ok: true },
      { text: "32", ok: false }
    ]
  },
  {
    text: "<p>Ahmet'in bilyelerinin sayısının Eren'in bilyelerinin sayısına oranı 3/5'tir.</p><p><b>Eren Ahmet'e 25 bilye verirse bilyeleri eşit olduğuna göre Ahmet'in başlangıçta kaç bilyesi vardır?</b></p>",
    diff: 2,
    expl: "Başlangıç: Ahmet = 3k, Eren = 5k. Alışveriş sonrası eşitlik: 5k - 25 = 3k + 25 ⇒ 2k = 50 ⇒ k = 25. Ahmet'in ilk bilyesi 3k = 3 · 25 = 75.",
    answers: [
      { text: "25", ok: false },
      { text: "50", ok: false },
      { text: "75", ok: true },
      { text: "85", ok: false },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p>Berfin bir mağazadan 10 eşit taksitle 3000 TL'ye bir buzdolabı alıyor.</p><p><b>Eğer Berfin her taksitte 75 TL daha fazla ödeme yaparsa borcunu kaç taksitte bitirebilir?</b></p>",
    diff: 1,
    expl: "İlk taksit tutarı: 3000 / 10 = 300 TL. Yeni taksit tutarı: 300 + 75 = 375 TL. Yeni taksit sayısı: 3000 / 375 = 8 ayda bitirir.",
    answers: [
      { text: "8", ok: true },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>Bir tel 6 eşit parçaya ayrılıyor. Eğer 8 eşit parçaya bölünseydi her parça 4 cm daha kısa olacağına göre bu telin uzunluğu kaç cm'dir?</b></p>",
    diff: 2,
    expl: "Telin uzunluğu x olsun. Parça uzunlukları arasındaki fark: x/6 - x/8 = 4. Payda eşitlersek (24'te): 4x/24 - 3x/24 = 4 ⇒ x/24 = 4 ⇒ x = 96 cm.",
    answers: [
      { text: "72", ok: false },
      { text: "80", ok: false },
      { text: "86", ok: false },
      { text: "92", ok: false },
      { text: "96", ok: true }
    ]
  },
  {
    text: "<p>A kovasının hacmi, B kovasının hacminden 5 litre eksiktir. A kovası ile 24 kova su alan bidon, B kovası ile 18 kova su almaktadır.</p><p><b>Buna göre bu bidonun hacmi kaç litredir?</b></p>",
    diff: 2,
    expl: "A = B - 5. Bidonun hacmi: 24A = 18B. A yerine yazalım: 24(B - 5) = 18B ⇒ 24B - 120 = 18B ⇒ 6B = 120 ⇒ B = 20. Bidon = 18 · 20 = 360 litre.",
    answers: [
      { text: "240", ok: false },
      { text: "300", ok: false },
      { text: "360", ok: true },
      { text: "400", ok: false },
      { text: "430", ok: false }
    ]
  },
  {
    text: "<p>A kabının hacmi, B kabının hacminden 3 litre fazladır. A kabı ile 12 seferde dolan bir depo, B kabı ile 16 seferde dolmaktadır.</p><p><b>Buna göre bu deponun hacmi kaç litredir?</b></p>",
    diff: 2,
    expl: "A = B + 3. Deponun hacmi: 12A = 16B. A yerine yazalım: 12(B + 3) = 16B ⇒ 12B + 36 = 16B ⇒ 4B = 36 ⇒ B = 9. Depo = 16 · 9 = 144 litre.",
    answers: [
      { text: "128", ok: false },
      { text: "132", ok: false },
      { text: "136", ok: false },
      { text: "144", ok: true },
      { text: "150", ok: false }
    ]
  },
  {
    text: "<p>Bir lokantada yemek yiyen 12 kişilik arkadaş grubunun bazıları misafir olduğu için hesap ödememişlerdir. Misafir olmayanlar 15 TL fazla ödeyerek 60 TL ödemişlerdir.</p><p><b>Bu gruptaki misafir sayısı kaçtır?</b></p>",
    diff: 2,
    expl: "Misafir olmayanlar 60 TL ödemiş ve bu normalden 15 TL fazlaymış. Yani herkes ödeseydi kişi başı 60 - 15 = 45 TL düşecekti. Toplam hesap 12 · 45 = 540 TL'dir. 60 TL ödeyenlerin sayısı 540 / 60 = 9 kişidir. 12 kişiden 9'u hesap ödediğine göre, misafir sayısı 12 - 9 = 3 kişidir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Ali Fatma'ya 30 TL verirse, Fatma'nın parası Ali'nin parasının 2 katı oluyor. Eğer Fatma Ali'ye 20 TL verirse Ali'nin parası Fatma'nın parasının 3 katı oluyor.</p><p><b>Buna göre başlangıçta Fatma'nın kaç TL'si vardır?</b></p>",
    diff: 3,
    expl: "Denklem 1: F + 30 = 2(A - 30) ⇒ F - 2A = -90.\nDenklem 2: A + 20 = 3(F - 20) ⇒ A - 3F = -80. İkinci denklemi 2 ile çarpalım: 2A - 6F = -160. İlk denklemle toplayalım: (F - 2A) + (2A - 6F) = -90 - 160 ⇒ -5F = -250 ⇒ F = 50 TL.",
    answers: [
      { text: "50", ok: true },
      { text: "60", ok: false },
      { text: "70", ok: false },
      { text: "80", ok: false },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p><b>Ayhan parasıyla 3 kg armut ve 4 kg elma alıyor. Ayhan aynı parayla 2 kg armut ve 6 kg elma da alabildiğine göre aynı parayla kaç kg elma alınabilir?</b></p>",
    diff: 2,
    expl: "Denklem: 3A + 4E = 2A + 6E. Bilinmeyenleri gruplarsak: A = 2E (1 kg armut 2 kg elma fiyatındadır). Toplam parasını elma cinsinden hesaplayalım: Parası 3A + 4E. A yerine 2E yazarsak: 3(2E) + 4E = 6E + 4E = 10E. Yani toplam parasıyla 10 kg elma alabilir.",
    answers: [
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: true },
      { text: "11", ok: false }
    ]
  }
];
