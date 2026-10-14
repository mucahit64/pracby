import type { McQ } from "../../../../types";

export const MAT_ISCI_HAVUZ_T1: McQ[] = [
  {
    text: "<p>Ahmet bir işi 10 saatte Mehmet aynı işi 15 saatte yapmaktadır.</p><p><b>İkisi beraber bu işi kaç saatte bitirebilirler?</b></p>",
    diff: 1,
    expl: "1/t = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 ⇒ t = 6 saat.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "2", ok: false },
      { text: "8", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Ahmet bir işin 2/5 ini 12 saatte yapmaktadır.</p><p><b>Buna göre Ahmet bu işte 5 saat çalışırsa işin kaçta kaçı bitmiş olur?</b></p>",
    diff: 2,
    expl: "İşin 2/5'i 12 saatte yapılıyorsa 1/5'i 6 saatte, tamamı 30 saatte yapılır. 5 saatte işin 5/30 = 1/6'sı biter.",
    answers: [
      { text: "1/3", ok: false },
      { text: "3/7", ok: false },
      { text: "1/5", ok: false },
      { text: "1/6", ok: true },
      { text: "1/4", ok: false }
    ]
  },
  {
    text: "<p>Oktay bir işi 2 · x saatte Meriç ise aynı işi (3 · x)/5 saatte yapabilmektedir.</p><p><b>İkisi beraber bu işi 30 saatte yapabildiklerine göre Meriç bu işi tek başına kaç saatte yapabilir?</b></p>",
    diff: 3,
    expl: "1/(2x) + 5/(3x) = 1/30 ⇒ 3/(6x) + 10/(6x) = 13/(6x) = 1/30 ⇒ 6x = 390 ⇒ x = 65. Meriç'in süresi = 3 · 65/5 = 39 saat.",
    answers: [
      { text: "45", ok: false },
      { text: "18", ok: false },
      { text: "39", ok: true },
      { text: "26", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p>Mehmet bir işi 4 günde, Mustafa aynı işi 6 günde yapmaktadır. İkisi beraber bu işte 2 gün çalıştıktan sonra Mehmet işi bırakıyor.</p><p><b>Buna göre Mustafa kalan işi tek başına kaç günde yapar?</b></p>",
    diff: 2,
    expl: "2 günde yapılan iş = 2 · (1/4 + 1/6) = 2 · 5/12 = 5/6. Kalan 1/6'lık işi Mustafa 6 · 1/6 = 1 günde yapar.",
    answers: [
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A, B ve C muslukları sırasıyla bir havuzu 5, 6, ve 10 saatte doldurmaktadırlar. Üç musluk açıldıktan 1 saat sonra A musluğu, 1 saat sonra da B musluğu kapatılıyor.</p><p><b>Buna göre bu havuz toplam kaç saatte dolar?</b></p>",
    diff: 3,
    expl: "Havuz 30 birim olsun; A saatte 6, B 5, C 3 birim doldurur. 1. saatte 14, 2. saatte (B + C) 8 birim dolar: toplam 22. Kalan 8 birimi C 8/3 saatte doldurur. Toplam süre = 2 + 8/3 = 14/3 saat.",
    answers: [
      { text: "8", ok: false },
      { text: "6", ok: false },
      { text: "14/3", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>Bir A musluğu bir havuzu tek başına 12 saatte doldurmaktadır. B musluğu ise aynı havuzu 3 kat hızlı doldurmaktadır.</p><p><b>Buna göre bu iki musluk aynı anda açılırsa havuz kaç saatte dolar?</b></p>",
    diff: 1,
    expl: "B, 3 kat hızlı olduğundan havuzu 12/3 = 4 saatte doldurur. 1/t = 1/12 + 1/4 = 4/12 = 1/3 ⇒ t = 3 saat.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>Aynı miktarda su akıtan 10 musluk boş bir havuzu 6 saatte dolduruyor. Muslukların tümü aynı anda açılıp havuzun yarısı dolduktan sonra muslukların bazıları kapatılıyor. Açık kalan musluklar havuzun kalan yarısını 5 saatte doldurmaktadır.</p><p><b>Buna göre açık kalan musluk sayısı kaçtır?</b></p>",
    diff: 2,
    expl: "Havuzun yarısını 10 musluk 3 saatte doldurur. Diğer yarısını x musluk 5 saatte dolduruyorsa 10 · 3 = x · 5 ⇒ x = 6.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "3", ok: false },
      { text: "7", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Ali bir işi 10 günde Mehmet aynı işi 15 günde bitirmektedir.</p><p><b>Ali çalışma hızını yarıya düşürür, Mehmet ise çalışma hızını 2 kat arttırırsa ikisi birlikte bu işi kaç günde yaparlar?</b></p>",
    diff: 3,
    expl: "Ali'nin hızı yarıya inerse süresi 20 gün olur. Mehmet'in hızı 2 kat artarsa (3 katına çıkar) süresi 15/3 = 5 gün olur. 1/t = 1/20 + 1/5 = 5/20 ⇒ t = 4 gün.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>Üç işçi bir işi sırasıyla a, b, c günde bitirebilmektedirler.</p><p><b>a &lt; b &lt; c olmak üzere bu üç işçi beraber çalıştıklarında bu iş 20 günde bitirildiğine göre a'nın alabileceği kaç farklı tamsayı değeri vardır?</b></p>",
    diff: 3,
    expl: "1/a + 1/b + 1/c = 1/20. a en kısa süre olduğundan 1/a en büyük terimdir: 1/a > 1/60 ⇒ a < 60. Ayrıca tek başına çalışan, üçünün birlikte bitirdiği süreden uzun sürede bitirir: a > 20. 20 < a < 60 ⇒ 21, 22, …, 59: 39 farklı değer.",
    answers: [
      { text: "59", ok: false },
      { text: "60", ok: false },
      { text: "39", ok: true },
      { text: "49", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p>Şekilde 2 havuz ve 1 fıskiye verilmiştir. Fıskiyeden akan su önce I numaralı havuzu, I numaralı havuzdan taşan su ise 2 numaralı havuzu doldurmaktadır. Havuzlar boşken I numaralı havuz 15 saatte doluyor.</p><p><b>Buna göre fıskiye çalıştırıldıktan 30 saat sonra II numaralı havuzun yüzde kaçı dolmuş olur?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q10.jpg",
    diff: 2,
    expl: "I numaralı havuz 3V, II numaralı havuz 6V hacimlidir. 3V su 15 saatte aktığından fıskiye 5 saatte V su akıtır; 30 saatte 6V akıtır. 3V'si I numaralı havuzu doldurur, kalan 3V II numaralı havuza geçer: 3V/6V = %50.",
    answers: [
      { text: "20", ok: false },
      { text: "15", ok: false },
      { text: "60", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: true }
    ]
  },
  {
    text: "<p>Yandaki A musluğu boş havuzu 24 saatte dolduruyor. B musluğu ise kendi seviyesine kadar olan kısmı 18 saatte boşaltmaktadır.</p><p><b>Buna göre iki musluk aynı anda açılırsa havuz toplam kaç saatte dolar?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q11.jpg",
    diff: 3,
    expl: "B musluğu havuzun yarı yüksekliğindedir. A, havuzun her yarısını 12 saatte doldurur. Alt yarı dolarken B su boşaltmaz: 12 saat. Üst yarıda A doldururken B boşaltır: 1/12 − 1/18 = 1/36 ⇒ 36 saat. Toplam = 12 + 36 = 48 saat.",
    answers: [
      { text: "48", ok: true },
      { text: "36", ok: false },
      { text: "60", ok: false },
      { text: "30", ok: false },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p>Yandaki A, B, C özdeş muslukları aynı anda açıldığında dolu havuz 44 saatte boşalmaktadır.</p><p><b>Buna göre C musluğu tek başına açıldığında havuz kaç saatte boşalır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q12.jpg",
    diff: 3,
    expl: "Havuz eşit hacimli üç bölmedir; bir musluk bir bölmeyi x saatte boşaltsın. Üst bölmeyi üç musluk x/3, orta bölmeyi B ve C x/2, alt bölmeyi yalnız C x saatte boşaltır. x/3 + x/2 + x = 11x/6 = 44 ⇒ x = 24. C tek başına üç bölmeyi 3 · 24 = 72 saatte boşaltır.",
    answers: [
      { text: "60", ok: false },
      { text: "72", ok: true },
      { text: "84", ok: false },
      { text: "120", ok: false },
      { text: "90", ok: false }
    ]
  },

// ─── İŞÇİ - HAVUZ PROBLEMLERİ TEST - 2 ────────────────────────────────────────

  {
    text: "<p>2 işçinin 18 saatte bitirdiği bir işi (x − 2) işçi K saatte bitiriyor.</p><p><b>x işçi bu işi 6 saatte bitirdiğine göre; K sayıda işçi bu işi kaç saatte bitirir?</b></p>",
    diff: 2,
    expl: "İş = 2 · 18 = 36 işçi-saat. x · 6 = 36 ⇒ x = 6. (x − 2) · K = 4K = 36 ⇒ K = 9. 9 işçi bu işi 36/9 = 4 saatte bitirir.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>İki ustanın bir gün içerisinde performans ve üretimleri hakkında;</p><ul><li>Birinci usta çalışma süresinin 1/3'ünde tam, 1/3'ünde yarı, 1/3'ünde 1/4 performans ortaya koyarak üretim yapmıştır.</li><li>İkinci usta birinci ustanın yarısı kadar süre de tam performans ile üretim yapmıştır.</li><li>Gün sonunda birinci ustanın üretimi ikinci ustanın üretiminin 3/2'si kadardır.</li></ul><p><b>Birinci ustanın performansının ikinci ustanın performansına oranı kaçtır?</b></p>",
    diff: 3,
    expl: "Birinci ustanın çalışma süresi T, tam performansları P₁ ve P₂ olsun. Ü₁ = P₁ · T · (1/3 + 1/6 + 1/12) = 7P₁T/12. Ü₂ = P₂ · T/2. Ü₁ = (3/2)Ü₂ ⇒ 7P₁/12 = 3P₂/4 ⇒ P₁/P₂ = 9/7 bulunur. Not: Kitabın cevap anahtarı E (9/8) seçeneğini vermektedir; bu değer verilen bilgilerle elde edilememektedir.",
    answers: [
      { text: "6/7", ok: false },
      { text: "7/9", ok: false },
      { text: "1", ok: false },
      { text: "7/6", ok: false },
      { text: "9/8", ok: true }
    ]
  },
  {
    text: "<p>Eş güçteki 6 işçi birlikte bir işe başlıyorlar.</p><ul><li>2. gün: 2 işçi %50 performans</li><li>3. gün: 4 işçi %25 performans</li><li>5. gün: 6 işçi %50 performans</li></ul><p>Yukarıda verilen performanslara uyan işçiler, bilgi verilmemiş ise tam performans çalışılmaktadır. Bu şekilde her beş günde bir başa dönüp bu beş günlük rutinle 30 günde işi tamamlıyorlar.</p><p><b>Bu 6 işçi sürekli olarak tam performansla çalıştırılsalardı aynı işi kaç günde bitirirlerdi?</b></p>",
    diff: 3,
    expl: "Bir işçinin bir günlük tam işi 1 birim olsun. 5 günlük rutin: 1. gün 6, 2. gün 4 + 2 · 0,5 = 5, 3. gün 2 + 4 · 0,25 = 3, 4. gün 6, 5. gün 6 · 0,5 = 3 birim; toplam 23 birim. 30 günde 6 rutin: 6 · 23 = 138 birim. Tam performansla günde 6 birim yapılırsa 138/6 = 23 gün bulunur. Not: Kitabın cevap anahtarı B (17) seçeneğini vermektedir; hesaplanan 23 seçeneklerde yoktur.",
    answers: [
      { text: "21", ok: false },
      { text: "17", ok: true },
      { text: "25", ok: false },
      { text: "27", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "<p><b>Saatte 8<sup>20</sup> adet ürün çıkaran birinci makine ile saatte 4<sup>30</sup> adet ürün çıkaran ikinci makine birlikte yarım saatte toplamda alınacak ürünü 8 saatte veren üçüncü makinenin saatte verdiği ürün, birinci ve ikinci makinenin 15 dakikada verdikleri toplam ürünün kaçta kaçıdır?</b></p>",
    diff: 3,
    expl: "8²⁰ = 2⁶⁰ ve 4³⁰ = 2⁶⁰. İki makine birlikte saatte 2⁶¹ ürün verir; yarım saatte 2⁶⁰. Üçüncü makine 2⁶⁰ ürünü 8 saatte verdiğinden saatte 2⁵⁷ ürün verir. İlk iki makine 15 dakikada 2⁶¹/4 = 2⁵⁹ ürün verir. Oran = 2⁵⁷/2⁵⁹ = 1/4.",
    answers: [
      { text: "1/8", ok: false },
      { text: "1/4", ok: true },
      { text: "1/2", ok: false },
      { text: "1", ok: false },
      { text: "3/2", ok: false }
    ]
  },

// ─── GRAFİK PROBLEMLERİ TEST - 1 ──────────────────────────────────────────────

  {
    text: "<p>Yukarıdaki grafikte bir kurstaki öğrenci sayısının yıllara göre değişimi gösterilmiştir.</p><p><b>Buna göre 2017 yılındaki öğrenci sayısı dört yıldaki toplam öğrenci sayısının yüzde kaçıdır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q17.jpg",
    diff: 1,
    expl: "2015: 300, 2016: 400, 2017: 450, 2018: 350. Toplam = 1500. 450/1500 · 100 = %30.",
    answers: [
      { text: "25", ok: false },
      { text: "30", ok: true },
      { text: "35", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir okuldaki kız öğrenci sayılarının yıllara göre değişimi gösterilmiştir.</p><p><b>Buna göre 2012 yılındaki kız öğrenci sayısı dört yıldaki toplam kız sayısının yüzde kaçıdır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q18.jpg",
    diff: 1,
    expl: "2012: 100, 2013: 75, 2014: 75, 2015: 150. Toplam = 400. 100/400 · 100 = %25.",
    answers: [
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: true },
      { text: "30", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir şirketin A, B, C ve D ürünlerinin yurtdışından ithal ettikleri ürün miktarları gösterilmiştir.</p><p><b>Buna göre D ürünün ithal miktarı tüm ürünlerin ithal miktarlarının yüzde kaçıdır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q19.jpg",
    diff: 1,
    expl: "A: 150, B: 75, C: 125, D: 50 kg. Toplam = 400 kg. 50/400 · 100 = %12,5.",
    answers: [
      { text: "25", ok: false },
      { text: "22,5", ok: false },
      { text: "20", ok: false },
      { text: "17,5", ok: false },
      { text: "12,5", ok: true }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir sınıftaki öğrencilerin fizik dersinden alınan I. dönem not ortalamaları gösterilmiştir.</p><p><b>Ortalaması 4 ve 5 olan öğrencilerin sayısı toplam öğrenci sayısının yüzde kaçıdır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q20.jpg",
    diff: 1,
    expl: "Not 1: 4, not 2: 6, not 3: 5, not 4: 7, not 5: 3 kişi. Toplam = 25. Ortalaması 4 ve 5 olanlar 7 + 3 = 10 kişi: 10/25 · 100 = %40.",
    answers: [
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: true },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte Elif ve Esra'nın dört günde çözdüğü soru sayıları gösterilmiştir.</p><p><b>Buna göre 4 günde Esra'nın çözdüğü soru sayısı Elif'in çözdüğü soru sayısından kaç eksiktir?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q21.jpg",
    diff: 2,
    expl: "Elif: 30 + 50 + 80 + 40 = 200. Esra: 20 + 70 + 20 + 20 = 130. Fark = 200 − 130 = 70.",
    answers: [
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "70", ok: true },
      { text: "100", ok: false },
      { text: "110", ok: false }
    ]
  },
  {
    text: "<p>Yukarıda Aralık ayında bir firmanın A, B, C, D ürünlerinden sattığı miktar gösterilmiştir. A ürününden satılan miktar toplam satış miktarının %25'idir.</p><p><b>Buna göre x kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q22.jpg",
    diff: 2,
    expl: "A: x, B: 50, C: 90, D: 40. x = (x + 180)/4 ⇒ 4x = x + 180 ⇒ x = 60.",
    answers: [
      { text: "60", ok: true },
      { text: "65", ok: false },
      { text: "75", ok: false },
      { text: "80", ok: false },
      { text: "85", ok: false }
    ]
  },
  {
    text: "<p>O merkezli dairesel grafikte bir kumaş fabrikasında üretilen A, B, C, D ürünlerinin miktarları arasındaki dağılım gösterilmiştir.</p><p><b>B ürününün yıllık üretim miktarı 60 ton olduğuna göre, C ürününün yıllık üretim miktarı kaç tondur?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q23.jpg",
    diff: 2,
    expl: "C'nin açısı = 360° − (80° + 120° + 50°) = 110°. 120° → 60 ton ise 1° → 0,5 ton. C = 110 · 0,5 = 55 ton.",
    answers: [
      { text: "60", ok: false },
      { text: "55", ok: true },
      { text: "50", ok: false },
      { text: "45", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>Yandaki dairesel grafikte bir üreticinin ürettiği A, B, C ürünlerinin üretim miktarlarının dağılımı verilmiştir.</p><p><b>Buna göre A, B ve C ürünlerinin miktarları sırasıyla hangi sayılarla orantılıdır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q24.jpg",
    diff: 2,
    expl: "A: 126°, B: 90°, C: 144°. 18'e bölünürse 7, 5, 8 bulunur.",
    answers: [
      { text: "5, 7, 8", ok: false },
      { text: "6, 7, 8", ok: false },
      { text: "8, 5, 7", ok: false },
      { text: "7, 5, 8", ok: true },
      { text: "7, 6, 5", ok: false }
    ]
  },

// ─── GRAFİK PROBLEMLERİ TEST - 2 ──────────────────────────────────────────────

  {
    text: "<p>Yukarıdaki grafikte bir çiftlikteki hayvanların dağılımı gösterilmiştir.</p><p><b>Bu çiftlikte toplam 144 hayvan olduğuna göre inek sayısı ile koyun sayılarının toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q25.jpg",
    diff: 2,
    expl: "İnek 50°, koyun 70°: toplam 120°, yani dairenin 1/3'ü. 144/3 = 48.",
    answers: [
      { text: "40", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: false },
      { text: "48", ok: true },
      { text: "56", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir işletmenin kullandığı x, y, z ham maddelerinin dağılımı gösterilmiştir. x'in miktarı z'nin miktarının %160'ına eşittir.</p><p><b>y ham maddesinin 24 ton olduğu bilindiğine göre z ham maddesinden kaç ton kullanılmıştır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q26.jpg",
    diff: 3,
    expl: "y'nin açısı 100° olduğundan x + z = 260°. x = 1,6z ⇒ 2,6z = 260° ⇒ z = 100°. z'nin açısı y'ninkine eşit olduğundan z de 24 tondur.",
    answers: [
      { text: "29", ok: false },
      { text: "30", ok: false },
      { text: "33", ok: false },
      { text: "36", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte E şirketinin başkanlık seçiminde A, B, C, D adaylarının aldıkları oy dağılımı gösterilmektedir.</p><p><b>C adayı 35 oy aldığına göre D adayı kaç oy almıştır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q27.jpg",
    diff: 2,
    expl: "C: 56° → 35 oy, D: 136°. D = 136 · 35/56 = 136 · 5/8 = 85 oy.",
    answers: [
      { text: "85", ok: true },
      { text: "88", ok: false },
      { text: "90", ok: false },
      { text: "92", ok: false },
      { text: "95", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte Ali'nin biriktirdiği paranın zamana göre değişimi gösteriliyor.</p><p><b>Buna göre 15 günün sonunda Ali'nin biriktirdiği para kaç TL'dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q28.jpg",
    diff: 1,
    expl: "Başlangıçta 150 TL, 7. gün 360 TL: günde (360 − 150)/7 = 30 TL. 15. gün sonunda 150 + 15 · 30 = 600 TL.",
    answers: [
      { text: "720", ok: false },
      { text: "600", ok: true },
      { text: "550", ok: false },
      { text: "525", ok: false },
      { text: "500", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir deponun hacminin zamana bağlı değişimi gösterilmiştir.</p><p><b>Buna göre kaç saat sonra depoda 42 litre su kalır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q29.jpg",
    diff: 2,
    expl: "60 litre 10 saatte biter: saatte 6 litre azalır. 60 − 42 = 18 litre için 18/6 = 3 saat.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir aracın deposunda bulunan benzinin aracın aldığı yola göre değişimi veriliyor.</p><p><b>Buna göre kaç km sonra aracın deposunda 10 litre benzin kalır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q30.jpg",
    diff: 2,
    expl: "150 km'de 40 − 25 = 15 litre harcanır. 10 litre kalması için 30 litre harcanmalıdır: 2 · 150 = 300 km.",
    answers: [
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: true },
      { text: "350", ok: false },
      { text: "400", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir ürünün alış ile satış fiyatları arasındaki bağıntı gösterilmiştir.</p><p><b>Buna göre bu ürünün satışından %30 kâr elde edildiğine göre x kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q31.jpg",
    diff: 2,
    expl: "Alış 40 TL iken satış x TL'dir. %30 kârla x = 40 · 1,3 = 52.",
    answers: [
      { text: "50", ok: false },
      { text: "52", ok: true },
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "64", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki grafikte bir bitkinin aylara göre boyundaki değişim gösterilmiştir.</p><p><b>Buna göre bitki dikildikten kaç ay sonra 320 cm boya ulaşır?</b></p>",
    img: "QuestionsImage/kpss/matematik/isci-havuz_t1_q32.jpg",
    diff: 2,
    expl: "Boy 20 cm'den 6 ayda 140 cm'ye çıkmıştır: ayda 20 cm. 320 − 20 = 300 cm için 300/20 = 15 ay.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: true },
      { text: "16", ok: false },
      { text: "17", ok: false }
    ]
  }
];
