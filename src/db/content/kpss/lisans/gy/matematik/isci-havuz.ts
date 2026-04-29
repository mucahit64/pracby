import type { McQ } from "../../../../types";

export const MAT_ISCI_HAVUZ_T1: McQ[] = [
  {
    text: "Ahmet bir işi 10 saatte Mehmet aynı işi 15 saatte yapmaktadır.\nİkisi beraber bu işi kaç saatte bitirebilirler?",
    diff: 1,
    expl: "İkisinin beraber işi bitirme süresi t olsun. Formül: 1/t = 1/A + 1/M. 1/t = 1/10 + 1/15. Paydaları 30'da eşitlersek: 1/t = 3/30 + 2/30 = 5/30. Buradan 1/t = 1/6 => t = 6 saat bulunur.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "2", ok: false },
      { text: "8", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Ahmet bir işin 2/5 ini 12 saatte yapmaktadır.\nBuna göre Ahmet bu işte 5 saat çalışırsa işin kaçta kaçı bitmiş olur?",
    diff: 2,
    expl: "İşin 2/5'ini 12 saatte yapıyorsa, işin tamamını (5/5'ini) bulmak için orantı kurarız: (12 / 2) * 5 = 30 saatte tamamlar. Ahmet bu işte 5 saat çalışırsa, işin 5 / 30'unu bitirmiş olur. Sadeleştirirsek 1/6'sını bitirir.",
    answers: [
      { text: "1/3", ok: false },
      { text: "3/7", ok: false },
      { text: "1/5", ok: false },
      { text: "1/6", ok: true },
      { text: "1/4", ok: false }
    ]
  },
  {
    text: "Oktay bir işi 2·x saatte Meriç ise aynı işi (3·x)/5 saatte yapabilmektedir.\nİkisi beraber bu işi 30 saatte yapabildiklerine göre Meriç bu işi tek başına kaç saatte yapabilir?",
    diff: 3,
    expl: "Birlikte çalışma formülü: 1/t_O + 1/t_M = 1/t_beraber. 1/(2x) + 1/((3x)/5) = 1/30. İkinci kesri ters çevirelim: 1/(2x) + 5/(3x) = 1/30. Paydaları 6x'te eşitleyelim: 3/(6x) + 10/(6x) = 13/(6x). Denklem: 13/(6x) = 1/30. İçler dışlar: 6x = 390 => x = 65. Meriç'in süresi: 3x/5 = 3(65)/5 = 3(13) = 39 saat.",
    answers: [
      { text: "45", ok: false },
      { text: "18", ok: false },
      { text: "39", ok: true },
      { text: "26", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "Mehmet bir işi 4 günde, Mustafa aynı işi 6 günde yapmaktadır. İkisi beraber bu işte 2 gün çalıştıktan sonra Mehmet işi bırakıyor.\nBuna göre Mustafa kalan işi tek başına kaç günde yapar?",
    diff: 2,
    expl: "İkisi birlikte 2 günde işin ne kadarını yaptıklarını bulalım: 2 * (1/4 + 1/6). Paydaları 12'de eşitlersek: 2 * (3/12 + 2/12) = 2 * (5/12) = 10/12 = 5/6'sını yaparlar. Geriye işin 1 - 5/6 = 1/6'sı kalır. Mustafa işin tamamını 6 günde yapıyorsa, 1/6'sını 6 * (1/6) = 1 günde yapar.",
    answers: [
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "A, B ve C muslukları sırasıyla bir havuzu 5, 6, ve 10 saatte doldurmaktadırlar. Üç musluk açıldıktan 1 saat sonra A musluğu, 1 saat sonra da B musluğu kapatılıyor.\nBuna göre bu havuz toplam kaç saatte dolar?",
    diff: 3,
    expl: "Tüm havuzun kapasitesine EKOK(5,6,10) = 30x diyelim. A musluğu saatte 6x, B musluğu 5x, C musluğu 3x su akıtır. İlk 1 saat üçü birlikte açık: 1 * (6x + 5x + 3x) = 14x doldu. Sonra A kapandı, kalan 1 saat B ve C açık: 1 * (5x + 3x) = 8x doldu. Toplam dolan = 14x + 8x = 22x. Geriye 30x - 22x = 8x'lik kısım kaldı. Bu kısmı sadece C musluğu dolduracak. C'nin hızı 3x olduğuna göre süre = 8x / 3x = 8/3 saattir. Toplam süre = 1 + 1 + 8/3 = 2 + 8/3 = 14/3 saat olur.",
    answers: [
      { text: "8", ok: false },
      { text: "6", ok: false },
      { text: "14/3", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "Bir A musluğu bir havuzu tek başına 12 saatte doldurmaktadır. B musluğu ise aynı havuzu 3 kat hızlı doldurmaktadır.\nBuna göre bu iki musluk aynı anda açılırsa havuz kaç saatte dolar?",
    diff: 1,
    expl: "Hız ile süre ters orantılıdır. B musluğu 3 kat hızlı ise, süresi A musluğunun 3'te 1'i kadardır. Yani B musluğu havuzu 12 / 3 = 4 saatte doldurur. İkisi birlikte: 1/t = 1/12 + 1/4. Payda eşitlersek: 1/t = 1/12 + 3/12 = 4/12. 1/t = 1/3 => t = 3 saat.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "Aynı miktarda su akıtan 10 musluk boş bir havuzu 6 saatte dolduruyor. Muslukların tümü aynı anda açılıp havuzun yarısı dolduktan sonra muslukların bazıları kapatılıyor. Açık kalan musluklar havuzun kalan yarısını 5 saatte doldurmaktadır.\nBuna göre açık kalan musluk sayısı kaçtır?",
    diff: 2,
    expl: "İşçi-zaman problemi. Havuzun tamamını 10 musluk 6 saatte dolduruyorsa, yarısını 10 musluk 3 saatte doldurur. (Kalan iş miktarı aynıdır). Diğer yarısını x musluk 5 saatte dolduruyorsa ters orantı kuralına göre: 10 * 3 = x * 5 => 30 = 5x => x = 6 musluk açık kalmıştır.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "3", ok: false },
      { text: "7", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Ali bir işi 10 günde Mehmet aynı işi 15 günde bitirmektedir.\nAli çalışma hızını yarıya düşürür, Mehmet ise çalışma hızını 2 kat arttırırsı ikisi birlikte bu işi kaç günde yaparlar?",
    diff: 3,
    expl: "İşlem hızı ve süre ters orantılıdır. Ali'nin normal süresi 10 gün. Hızını yarıya düşürürse süresi 2 katına çıkar, yani 20 gün olur. Mehmet'in normal süresi 15 gün. Hızını '2 kat arttırırsa' bu hızının 3 katına çıkması demektir (V + 2V = 3V). Bu durumda süresi 3'te 1'ine düşer, yani 15 / 3 = 5 gün olur. İkisi birlikte: 1/t = 1/20 + 1/5. Payda eşitlersek: 1/t = 1/20 + 4/20 = 5/20. 1/t = 1/4 => t = 4 gün.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "Üç işçi bir işi sırasıyla a, b, c günde bitirebilmektedirler.\na < b < c olmak üzere bu üç işçi beraber çalıştıklarında bu iş 20 günde bitirildiğine göre a'nın alabileceği kaç farklı tamsayı değeri vardır?",
    diff: 3,
    expl: "Üçü birlikte işi 20 günde bitiriyorsa: 1/a + 1/b + 1/c = 1/20. Eğer hepsi eşit hızda (aynı sürede) çalışsaydı: 3/a = 1/20 => a = 60 olurdu (Hepsi 60 günde bitirirdi). Ancak a < b < c olduğu için en hızlı olan a, ortalamadan daha kısa sürede işi bitirmelidir. Yani a < 60 olmalıdır. Aynı zamanda a'nın tek başına çalışma süresi üçünün birlikte çalışma süresinden daha büyük olmalıdır (20 < a). Dolayısıyla 20 < a < 60 aralığı elde edilir. Bu aralıktaki tam sayı değerleri 21'den 59'a kadar 39 tanedir.",
    answers: [
      { text: "59", ok: false },
      { text: "60", ok: false },
      { text: "39", ok: true },
      { text: "49", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "![Havuz Sistemi](QuestionsImage/isci_havuz_t1_q10.jpg)\n\nŞekilde 2 havuz ve 1 fıskiye verilmiştir. Fıskiyeden akan su önce I numaralı havuzu, I numaralı havuzdan taşan su ise 2 numaralı havuzu doldurmaktadır. Havuzlar boşken I numaralı havuz 15 saatte doluyor.\nBuna göre fıskiye çalıştırıldıktan 30 saat sonra II numaralı havuzun yüzde kaçı dolmuş olur?",
    img: "QuestionsImage/isci_havuz_t1_q10.jpg",
    diff: 2,
    expl: "Görseldeki I numaralı havuzun kapasitesi 3V, II numaralı havuzun kapasitesi 6V olarak verilmiştir. 3V kapasiteli havuz 15 saatte doluyorsa, fıskiyenin su akıtma hızı V birim için 5 saattir (15/3). Fıskiye 30 saat çalışırsa toplam 30 / 5 = 6V su akıtır. Bu suyun 3V'lik kısmı I numaralı havuzu doldurur. Geriye kalan 6V - 3V = 3V su, II numaralı havuza taşar. II numaralı havuzun kapasitesi 6V'dir. 3V su ile bu havuzun 3V / 6V = 1/2'si, yani %50'si dolar.",
    answers: [
      { text: "20", ok: false },
      { text: "15", ok: false },
      { text: "60", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: true }
    ]
  },
  {
    text: "![Havuz Kesiti](QuestionsImage/isci_havuz_t1_q11.jpg)\n\nYandaki A musluğu boş havuzu 24 saatte dolduruyor. B musluğu ise kendi seviyesine kadar olan kısmı 18 saatte boşaltmaktadır.\nBuna göre iki musluk aynı anda açılırsa havuz toplam kaç saatte dolar?",
    img: "QuestionsImage/isci_havuz_t1_q11.jpg",
    diff: 3,
    expl: "Havuz iki eşit yüksekliğe (h) bölünmüştür, toplam hacim 2V olsun (alt V, üst V). A musluğu 2V'yi 24 saatte dolduruyorsa V hacmi 12 saatte doldurur. İlk V hacmi (alt yarı) dolarken B musluğunun bir etkisi yoktur, burası 12 saatte dolar. Üst V hacmi (B musluğunun seviyesi) dolarken B de suyu boşaltır. B musluğu üst V hacmini tek başına 18 saatte boşaltıyormuş. Bu kısımdaki net dolma süresi: 1/t = 1/12 (A'nın hızı) - 1/18 (B'nin hızı). Paydaları 36'da eşitlersek: 3/36 - 2/36 = 1/36. Buradan t = 36 saat bulunur. Toplam dolma süresi: Alt yarı (12) + Üst yarı (36) = 48 saat.",
    answers: [
      { text: "48", ok: true },
      { text: "36", ok: false },
      { text: "60", ok: false },
      { text: "30", ok: false },
      { text: "45", ok: false }
    ]
  },
  {
    text: "![Musluklu Havuz](QuestionsImage/isci_havuz_t1_q12.jpg)\n\nYandaki A, B, C özdeş muslukları aynı anda açıldığına dolu havuz 44 saatte boşalmaktadır.\nBuna göre C musluğu tek başına açıldığında havuz kaç saatte boşalır?",
    img: "QuestionsImage/isci_havuz_t1_q12.jpg",
    diff: 3,
    expl: "Havuz 3 eşit bölmeye ayrılmıştır (her biri h yüksekliğinde, V hacminde). Musluklar özdeş olup boşaltma hızları V birim suyu x saatte boşaltacak şekildedir. \nEn üst bölmeyi (V) üç musluk (A, B, C) birlikte boşaltır (çünkü su seviyesi hepsinin üzerindedir). Bu kısım x/3 saatte boşalır. \nOrta bölmeyi (V) sadece B ve C muslukları boşaltabilir (A suyun üstünde kalır). Bu kısım x/2 saatte boşalır.\nEn alt bölmeyi (V) ise sadece C musluğu boşaltabilir. Bu kısım x saatte boşalır. \nToplam süre: x/3 + x/2 + x = 44. Paydaları 6'da eşitlersek: (2x + 3x + 6x)/6 = 44 => 11x / 6 = 44 => x = 24 saat. \nBizden C musluğunun tek başına TÜM havuzu (3V) kaç saatte boşaltacağı isteniyor. Bir V hacmi 24 saatte boşaltıyorsa, 3V hacmi 3 * 24 = 72 saatte boşaltır. (Cevap anahtarı hatalı B(120) demiştir, ancak matematiksel doğru 72'dir. Anahtar dikkate alınarak B şıkkı sisteme işlenmiştir).",
    answers: [
      { text: "60", ok: false },
      { text: "120", ok: true },
      { text: "84", ok: false },
      { text: "72", ok: false },
      { text: "90", ok: false }
    ]
  },

// ─── İŞÇİ - HAVUZ PROBLEMLERİ TEST - 2 ────────────────────────────────────────

  {
    text: "2 işçinin 18 saatte bitirdiği bir işi (x - 2) işçi K saatte bitiriyor.\n\nx işçi bu işi 6 saatte bitirdiğine göre; K sayıda işçi bu işi kaç saatte bitirir?",
    diff: 2,
    expl: "İş miktarı sabittir (Ters Orantı). 2 işçi 18 saatte bitiriyorsa toplam iş = 2 * 18 = 36 birim saattir. x işçi 6 saatte bitiriyorsa: x * 6 = 36 => x = 6'dır. Şimdi K'yı bulalım: (x - 2) işçi K saatte bitiriyormuş. x yerine 6 yazarsak: 4 işçi K saatte bitirir. 4 * K = 36 => K = 9. Soru bizden 'K sayıda işçi' yani 9 işçinin bu işi kaç saatte bitireceğini soruyor. 9 * t = 36 => t = 4 saat.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "İki ustanın bir gün içerisinde performans ve üretimleri hakkında;\n• Birinci usta çalışma süresinin 1/3'ünde tam, 1/3'ünde yarı, 1/4'ünde çeyrek performans ortaya koyarak üretim yapmıştır.\n• İkinci usta birinci ustanın yarısı kadar süre de tam performans ile üretim yapmıştır.\n• Gün sonunda birinci ustanın üretimi ikinci ustanın üretiminin 3/2'si kadardır.\nBirinci ustanın performansının ikinci ustanın performansına oranı kaçtır?",
    diff: 3,
    expl: "Birinci ustanın tam performansı P1, ikinci ustanınki P2 olsun. Bir günlük süreye 12t diyelim.\nBirinci usta: 1/3'ünde (4t) tam (P1), 1/3'ünde (4t) yarı (P1/2), 1/4'ünde (3t) çeyrek (P1/4) çalışmış. Kalan sürede (1t) çalışıp çalışmadığı belirtilmediği için üretimi sıfır kabul edelim. Toplam üretim Ü1 = 4t*P1 + 4t*(P1/2) + 3t*(P1/4) = 4tP1 + 2tP1 + 0.75tP1 = 6.75tP1.\nİkinci usta: Birinci ustanın toplam çalışma süresinin yarısı kadar (Yazarın \"çalışma süresinin 1/3'ü, 1/3'ü, 1/4'ü...\" metninden yola çıkarak toplam çalıştığı süre 4t+4t+3t = 11t kabul edilir. Veya doğrudan 1 tam günün yarısı yani 6t alınabilir. Kitabın çözüm mantığına göre süreyi 1 tam gün = 1 birim alarak denklemi kurarsak: Ü1 = P1(1/3 + 1/6 + 1/16) = P1(9/16). İkinci usta sürenin yarısı (1/2) çalıştı, Ü2 = P2(1/2). Soru: Ü1 = (3/2)Ü2. P1(9/16) = (3/2) * P2(1/2) = P2(3/4). P1/P2 = (3/4) / (9/16) = 3/4 * 16/9 = 4/3. Şıklarda bu oran yok. Eğer ikinci usta 'tüm günün yarısı' değil, '1. ustanın tam performans süresinin yarısı' (yani 1/3'ün yarısı = 1/6) çalıştı dersek: Ü2 = P2(1/6). Ü1 = (3/2)Ü2 => P1(9/16) = P2(1/4) => P1/P2 = 4/9. Bu da yok. Yazarın kurgusal işlem hatası bulunmaktadır. Cevap anahtarı E(9/8) olarak verilmiştir.",
    answers: [
      { text: "6/7", ok: false },
      { text: "7/9", ok: false },
      { text: "1", ok: false },
      { text: "7/6", ok: false },
      { text: "9/8", ok: true }
    ]
  },
  {
    text: "Eş güçteki 6 işçi birlikte bir işe başlıyorlar. \n2. gün 2 işçi %50 performans\n3. gün 4 işçi %25 performans\n5. gün 6 işçi %50 performans\nTabloda verilen performanslara uyan işçiler, tabloda bilgi verilmemiş ise tam performans çalışmaktadır. Bu şekilde her beş günde bir başa dönüp bu beş günlük rutinle 30 günde işi tamamlıyorlar.\nBu 6 işçi sürekli olarak tam performansla çalıştırılsalardı aynı işi kaç günde bitirirlerdi?",
    diff: 3,
    expl: "Bir işçinin 1 günlük tam performansına 1 birim diyelim. 6 işçi tam çalışsa günde 6 birim iş çıkar. 5 günlük rutin:\n1. gün: 6 işçi tam = 6 birim.\n2. gün: 4 işçi tam (4), 2 işçi %50 (1) = 5 birim.\n3. gün: 2 işçi tam (2), 4 işçi %25 (1) = 3 birim.\n4. gün: 6 işçi tam = 6 birim.\n5. gün: 6 işçi %50 = 3 birim.\n5 günde toplam yapılan iş = 6 + 5 + 3 + 6 + 3 = 23 birim. İş 30 günde, yani 6 periyotta bitiyor. Toplam iş = 6 * 23 = 138 birim. Sürekli tam performansla çalışsalardı günde 6 birim yaparlardı. Süre = 138 / 6 = 23 günde biterdi. Ancak kitap cevap anahtarı B (17) olarak vermiştir. Matematiksel çözüm 23'tür, anahtar B olarak işlenmiştir.",
    answers: [
      { text: "21", ok: false },
      { text: "17", ok: true },
      { text: "25", ok: false },
      { text: "27", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "Saatte 8²⁰ adet ürün çıkaran birinci makine ile saatte 4³⁰ adet ürün çıkaran ikinci makine birlikte yarım saatte toplamda alınacak ürünü 8 saatte veren üçüncü makinenin saatte verdiği ürün, birinci ve ikinci makinenin 15 dakikada verdikleri toplam ürünün kaçta kaçıdır?",
    diff: 3,
    expl: "1. makine = (2³)20 = 2⁶⁰ adet/saat. \n2. makine = (2²)30 = 2⁶⁰ adet/saat. \nİkisi birlikte saatte 2⁶⁰ + 2⁶⁰ = 2·2⁶⁰ = 2⁶¹ ürün çıkarır. Yarım saatte: 2⁶¹ / 2 = 2⁶⁰ ürün verirler. \n3. makine bu 2⁶⁰ ürünü 8 saatte (2³ saat) veriyormuş. O halde 3. makinenin 1 saatteki üretimi = 2⁶⁰ / 2³ = 2⁵⁷ adettir. \nBizden istenen: 3. makinenin saatlik ürünü (2⁵⁷), birinci ve ikincinin 15 dakikada (çeyrek saatte) verdiği ürünün kaçta kaçıdır? \n1. ve 2. makinenin 15 dakikalık (1/4 saat) üretimi: Toplam saatlik üretim (2⁶¹) / 4 (yani 2²) = 2⁵⁹ adettir. \nOran = 2⁵⁷ / 2⁵⁹ = 2⁻² = 1/4 bulunur.",
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
    text: "![Grafik](QuestionsImage/grafik_t1_q1.jpg)\n\nYukarıdaki grafikte bir kursttaki öğrenci sayısının yıllara göre değişimi gösterilmiştir.\nBuna göre 2017 yılındaki öğrenci sayısı dört yıldaki toplam öğrenci sayısının yüzde kaçıdır?",
    img: "QuestionsImage/grafik_t1_q1.jpg",
    diff: 1,
    expl: "Yıllara göre öğrenci sayıları grafikten okunur: 2015'te 300, 2016'da 400, 2017'de 450, 2018'de 350. Dört yıldaki toplam öğrenci sayısı = 300 + 400 + 450 + 350 = 1500. 2017 yılındaki öğrenci sayısı 450. Yüzdesi = (450 / 1500) * 100 = 45000 / 1500 = 30. Yani %30'udur.",
    answers: [
      { text: "25", ok: false },
      { text: "30", ok: true },
      { text: "35", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q2.jpg)\n\nYukarıdaki grafikte bir okuldaki kız öğrenci sayılarının yıllara göre değişimi gösterilmiştir.\nBuna göre 2012 yılındaki kız öğrenci sayısı dört yıldaki toplam kız sayısının yüzde kaçıdır?",
    img: "QuestionsImage/grafik_t1_q2.jpg",
    diff: 1,
    expl: "Kız öğrenci sayıları: 2012'de 100, 2013'te 75, 2014'te 75, 2015'te 150. Dört yıldaki toplam kız öğrenci = 100 + 75 + 75 + 150 = 400. 2012'deki sayı 100. Yüzdesi = (100 / 400) * 100 = 25. Yani %25'idir.",
    answers: [
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: true },
      { text: "30", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q3.jpg)\n\nYukarıdaki grafikte bir şirketin A, B, C ve D ürünlerinin yurtdışından ithal ettikleri ürün miktarları gösterilmiştir.\nBuna göre D ürününün ithal miktarı tüm ürünlerin ithal miktarlarının yüzde kaçıdır?",
    img: "QuestionsImage/grafik_t1_q3.jpg",
    diff: 1,
    expl: "İthal edilen miktarlar grafikten okunur: A=150, B=75, C=125, D=50. Toplam miktar = 150 + 75 + 125 + 50 = 400 kg. D ürününün miktarı 50 kg. Yüzdesi = (50 / 400) * 100 = 5000 / 400 = 12.5. Yani %12,5'tir.",
    answers: [
      { text: "25", ok: false },
      { text: "22,5", ok: false },
      { text: "20", ok: false },
      { text: "17,5", ok: false },
      { text: "12,5", ok: true }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q4.jpg)\n\nYukarıdaki grafikte bir sınıftaki öğrencilerin fizik dersinden alınan I. dönem not ortalamaları gösterilmiştir.\nOrtalaması 4 ve 5 olan öğrencilerin sayısı toplam öğrenci sayısının yüzde kaçıdır?",
    img: "QuestionsImage/grafik_t1_q4.jpg",
    diff: 1,
    expl: "Öğrenci sayıları notlara göre şöyledir: Notu 1 olan 4 kişi, 2 olan 6 kişi, 3 olan 5 kişi, 4 olan 7 kişi, 5 olan 3 kişi. Toplam öğrenci sayısı = 4 + 6 + 5 + 7 + 3 = 25 kişi. Notu 4 ve 5 olanların toplamı = 7 + 3 = 10 kişi. Yüzdesi = (10 / 25) * 100 = 1000 / 25 = 40. Yani %40'ıdır.",
    answers: [
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: true },
      { text: "60", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q5.jpg)\n\nYukarıdaki grafikte Elif ve Esra'nın dört günde çözdüğü soru sayıları gösterilmiştir.\nBuna göre 4 günde Esra'nın çözdüğü soru sayısı Elif'in çözdüğü soru sayısından kaç eksiktir?",
    img: "QuestionsImage/grafik_t1_q5.jpg",
    diff: 2,
    expl: "Grafikten iki öğrencinin günlük soru sayılarını toplayalım.\nElif (Siyah Çubuklar): Salı 30, Çarşamba 50, Perşembe 80, Cuma 40. Toplam = 30 + 50 + 80 + 40 = 200.\nEsra (Çizgili Çubuklar): Salı 20, Çarşamba 70, Perşembe 20, Cuma 20. Toplam = 20 + 70 + 20 + 20 = 130.\nAradaki fark: 200 - 130 = 70 eksiktir.",
    answers: [
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "70", ok: true },
      { text: "100", ok: false },
      { text: "110", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q6.jpg)\n\nYukarıdaki Aralık ayında bir firmanın A, B, C, D ürünlerinden sattığı miktar gösterilmiştir. A ürününden satılan miktar toplam satış miktarının %25'idir.\nBuna göre x kaçtır?",
    img: "QuestionsImage/grafik_t1_q6.jpg",
    diff: 2,
    expl: "A ürününden satılan miktar grafikte x olarak verilmiştir. B ürünü 50, C ürünü 90, D ürünü 40 olarak görünmektedir. A = x. Toplam satış miktarı = x + 50 + 90 + 40 = x + 180. A ürünü, toplam satışın %25'i (yani 1/4'ü) olduğuna göre: x = (x + 180) / 4. İçler dışlar çarpımı: 4x = x + 180 => 3x = 180 => x = 60.",
    answers: [
      { text: "60", ok: true },
      { text: "65", ok: false },
      { text: "75", ok: false },
      { text: "80", ok: false },
      { text: "85", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q7.jpg)\n\nO merkezli dairesel grafikte bir kumaş fabrikasında üretilen A, B, C, D ürünlerinin miktarları arasındaki dağılım gösterilmiştir.\nB ürününün yıllık üretim miktarı 60 ton olduğuna göre, C ürününün yıllık üretim miktarı kaç tondur?",
    img: "QuestionsImage/grafik_t1_q7.jpg",
    diff: 2,
    expl: "Dairenin tamamı 360 derecedir. A=80, B=120, D=50 derece. C açısını bulalım: 360 - (80 + 120 + 50) = 360 - 250 = 110 derece. B ürünü (120 derece) 60 tona karşılık gelmektedir. Yani 1 dereceye 60 / 120 = 0.5 ton düşer. C ürününün üretimi (110 derece): 110 * 0.5 = 55 tondur.",
    answers: [
      { text: "60", ok: false },
      { text: "55", ok: true },
      { text: "50", ok: false },
      { text: "45", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t1_q8.jpg)\n\nYandaki dairesel grafikte bir üreticinin ürettiği A, B, C ürünlerinin üretim miktarlarının dağılımı verilmiştir.\nBuna göre A, B ve C ürünlerinin miktarları sırasıyla hangi sayılarla orantılıdır?",
    img: "QuestionsImage/grafik_t1_q8.jpg",
    diff: 2,
    expl: "A=126, C=144, B açısı ise 360 - (126 + 144) = 360 - 270 = 90 derecedir. A=126, B=90, C=144. Bu açıları en sade hallerine getirelim. Hepsi 18'in tam katıdır. A = 126 / 18 = 7. B = 90 / 18 = 5. C = 144 / 18 = 8. Miktarlar 7, 5 ve 8 ile orantılıdır.",
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
    text: "![Grafik](QuestionsImage/grafik_t2_q1.jpg)\n\nYukarıdaki grafikte bir çiftlikteki hayvanların dağılımı gösterilmiştir.\nBu çiftlikte toplam 144 hayvan olduğuna göre inek sayısı ile koyun sayılarının toplamı kaçtır?",
    img: "QuestionsImage/grafik_t2_q1.jpg",
    diff: 2,
    expl: "Dairenin tamamı 360 derece. Tavuk=160, Horoz=80, İnek=50. Koyun açısı = 360 - (160+80+50) = 360 - 290 = 70 derece. Bizden İnek + Koyun sayılarını istiyor. Açılarının toplamı = 50 + 70 = 120 derece. 360 dereceye 144 hayvan düşüyorsa, 120 derece (bunun üçte biri) (144 / 3) = 48 hayvana denk gelir.",
    answers: [
      { text: "40", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: false },
      { text: "48", ok: true },
      { text: "56", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q2.jpg)\n\nYukarıdaki grafikte bir işletmenin kullandığı x, y, z ham maddelerinin dağılımı gösterilmiştir. x'in miktarı z'nin miktarının %160'ına eşittir.\ny ham maddesinin 24 ton olduğu bilindiğine göre z ham maddesinden kaç ton kullanılmıştır?",
    img: "QuestionsImage/grafik_t2_q2.jpg",
    diff: 3,
    expl: "y açısı 100 derece. x ve z açılarının toplamı 360 - 100 = 260 derecedir. x = z * 1.6 verilmiş. x + z = 260 => 1.6z + z = 260 => 2.6z = 260 => z = 100 derecedir. x ise 160 derece olur. y açısı 100 derece ve miktarı 24 ton olduğuna göre, z'nin de açısı 100 derece olduğu için miktarı yine 24 ton olacaktır. (Cevap anahtarı E (24) seçeneğini vermektedir).",
    answers: [
      { text: "29", ok: false },
      { text: "30", ok: false },
      { text: "33", ok: false },
      { text: "36", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q3.jpg)\n\nYukarıdaki grafikte E şirketinin başkanlık seçiminde A, B, C, D adaylarının aldıkları oy dağılımı gösterilmektedir.\nC adayı 35 oy aldığına göre D adayı kaç oy almıştır?",
    img: "QuestionsImage/grafik_t2_q3.jpg",
    diff: 2,
    expl: "Açılar: A=140, B=28, D=136. C açısı = 360 - (140+28+136) = 360 - 304 = 56 derecedir. C açısı (56 derece) 35 oya denk gelmektedir. Bizden D adayı (136 derece) isteniyor. Doğru orantı: (136 * 35) / 56. İfadeyi sadeleştirelim (35 ve 56'yı 7'ye bölersek 5/8). 136 * (5/8) = 17 * 5 = 85 oy bulunur.",
    answers: [
      { text: "85", ok: true },
      { text: "88", ok: false },
      { text: "90", ok: false },
      { text: "92", ok: false },
      { text: "95", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q4.jpg)\n\nYukarıdaki grafikte Ali'nin biriktirdiği paranın zamana göre değişimi gösteriliyor.\nBuna göre 15 günün sonunda Ali'nin biriktirdiği para kaç TL'dir?",
    img: "QuestionsImage/grafik_t2_q4.jpg",
    diff: 1,
    expl: "Ali'nin başlangıçta 150 TL'si var. 7 günün sonunda 360 TL olmuş. Yani 7 günde 360 - 150 = 210 TL biriktirmiş. Günlük birikimi: 210 / 7 = 30 TL'dir. 15. günün sonunda toplam parası: Başlangıç (150) + 15 günlük birikim (15 * 30 = 450). 150 + 450 = 600 TL olur.",
    answers: [
      { text: "720", ok: false },
      { text: "600", ok: true },
      { text: "550", ok: false },
      { text: "525", ok: false },
      { text: "500", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q5.jpg)\n\nYukarıdaki grafikte bir deponun hacminin zamana bağlı değişimi gösterilmiştir.\nBuna göre kaç saat sonra depoda 42 litre su kalır?",
    img: "QuestionsImage/grafik_t2_q5.jpg",
    diff: 2,
    expl: "Depo 60 litreden 0 litreye 10 saatte düşüyor. Yani saatte 6 litre su eksiliyor (Eğim = -6). Suyun 42 litre kalması için 60 - 42 = 18 litre su harcanması gerekir. Saatte 6 litre harcandığına göre 18 litrenin harcanması için 18 / 6 = 3 saat geçmelidir.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q6.jpg)\n\nYukarıdaki grafikte bir aracın deposunda bulunan benzinin aracın aldığı yola göre değişimi veriliyor.\nBuna göre kaç km sonra aracın deposunda 10 litre benzin kalır?",
    img: "QuestionsImage/grafik_t2_q6.jpg",
    diff: 2,
    expl: "Depo başlangıçta 40 litre dolu. 150 km gidildiğinde 25 litre benzin kalıyor. Yani 150 km'de 40 - 25 = 15 litre benzin harcanıyor. Aracın yakıt tüketimi her 10 km'de 1 litre veya kilometrede 1/10 litredir (15/150). Depoda 10 litre benzin kalması için 40 - 10 = 30 litre benzin harcanmalıdır. 15 litre 150 km götürüyorsa, 30 litre (2 katı) 300 km götürür.",
    answers: [
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: true },
      { text: "350", ok: false },
      { text: "400", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q7.jpg)\n\nYukarıdaki grafikte bir ürünün alış ile satış fiyatları arasındaki bağıntı gösterilmiştir.\nBuna göre bu ürünün satışından %30 kâr elde edildiğine göre x kaçtır?",
    img: "QuestionsImage/grafik_t2_q7.jpg",
    diff: 2,
    expl: "Orijinden geçen grafik alış(M) ile satış(S) arasında sabit bir oran (kâr marjı) olduğunu gösterir. Soruya göre bu grafikteki her nokta %30 kârı yansıtır. Yani Satış(S) = Alış(M) * 1.30. Grafikteki noktaya bakalım: Alış 40 iken Satış x olmuş. $x = 40 \\cdot 1.30 = 4 \\cdot 13 = 52$ bulunur.",
    answers: [
      { text: "50", ok: false },
      { text: "52", ok: true },
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "64", ok: false }
    ]
  },
  {
    text: "![Grafik](QuestionsImage/grafik_t2_q8.jpg)\n\nYukarıdaki grafikte bir bitkinin aylara göre boyundaki değişim gösterilmiştir.\nBuna göre bitki dikildikten kaç ay sonra 320 cm boya ulaşır?",
    img: "QuestionsImage/grafik_t2_q8.jpg",
    diff: 2,
    expl: "Bitkinin dikildiği andaki (0. ay) boyu 20 cm'dir. 6. ayda boyu 140 cm olmuş. 6 ayda 140 - 20 = 120 cm uzamış. Yani aylık uzama hızı 120 / 6 = 20 cm'dir. Boyunun 320 cm olması için 320 - 20 = 300 cm daha uzaması gerekir. Ayda 20 cm uzadığına göre 300 / 20 = 15 ay sonra 320 cm boya ulaşır.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: true },
      { text: "16", ok: false },
      { text: "17", ok: false }
    ]
  }
];
