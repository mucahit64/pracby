import type { McQ } from "../../../../types";

export const MAT_SAYISAL_MANTIK_T5: McQ[] = [
  {
    text: "<p>Aşağıdaki tabloda hafta içi bir fabrikada üretilen makine sayılarının dağılımı gösterilmektedir.</p><!--img--><p><b>Hangi gün işçi başına düşen bozuk makine sayısı <u>en yüksektir</u>?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q1.jpg",
    diff: 1,
    expl: "İşçi başına düşen bozuk makine sayıları: Pazartesi 12/20 = 0,6; Salı 15/18 ≈ 0,83; Çarşamba 19/20 = 0,95; Perşembe 16/18 ≈ 0,89; Cuma 18/18 = 1. En yüksek değer Cuma günüdür.",
    answers: [
      { text: "Pazartesi", ok: false },
      { text: "Salı", ok: false },
      { text: "Çarşamba", ok: false },
      { text: "Perşembe", ok: false },
      { text: "Cuma", ok: true }
    ]
  },
  {
    text: "<p>Aşağıdaki tabloda hafta içi bir fabrikada üretilen makine sayılarının dağılımı gösterilmektedir.</p><!--img--><p><b>Beş günün sonunda üretilen tüm makineler göz önüne alındığında rastgele seçilen bir makinenin pazartesi günü üretilen bozuk makine olma olasılığı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q2.jpg",
    diff: 1,
    expl: "Beş günde üretilen toplam makine sayısı 900 + 800 + 850 + 750 + 700 = 4000'dir. Pazartesi üretilen bozuk makine sayısı 12'dir. Olasılık = 12/4000 = 3/1000.",
    answers: [
      { text: "4/125", ok: false },
      { text: "3/100", ok: false },
      { text: "3/1000", ok: true },
      { text: "3/800", ok: false },
      { text: "1/100", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki tabloda hafta içi bir fabrikada üretilen makine sayılarının dağılımı gösterilmektedir.</p><!--img--><p>Perşembe günü üretilen makinelerin sayısı x fazla olsaydı hafta içi üretilen makinelerin sayısının %35'ini oluşturacaktı.</p><p><b>Buna göre Perşembe günü üretilen fazla makine sayısı aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q3.jpg",
    diff: 2,
    expl: "Perşembe üretimi 750 + x, haftalık toplam 4000 + x olur. (750 + x)/(4000 + x) = 35/100 = 7/20 ⇒ 20(750 + x) = 7(4000 + x) ⇒ 15000 + 20x = 28000 + 7x ⇒ 13x = 13000 ⇒ x = 1000.",
    answers: [
      { text: "1000", ok: true },
      { text: "800", ok: false },
      { text: "1200", ok: false },
      { text: "1500", ok: false },
      { text: "600", ok: false }
    ]
  },
  {
    text: "<p>İlk üç hanesi harflerden, son iki hanesi rakamlardan oluşan beş haneli kod numaraları üretiliyor. Harfler A, B, C, D, E, F arasından, rakamlar ise 1, 2, 3, 4, 5, 6 arasından seçiliyor.</p><p>Her hanesinde birbirinden farklı harf ve rakam bulunan bu kodlar ile ilgili olarak aşağıdakiler bilinmektedir.</p><p>• Harf hanesinde bir veya iki sessiz harf varsa rakam hanesindeki sayıların biri tek biri çifttir.<br>• Harf hanesinde üç sessiz harf varsa rakam hanesindeki sayıların ikisi de çifttir.</p><p><b>Rakam hanesi 23 olan kaç tane kod numarası üretilebilir?</b></p>",
    diff: 3,
    expl: "Rakamlardan biri tek biri çift olduğundan harf hanesinde bir veya iki sessiz harf olmalıdır (3 sessiz olamaz; yalnızca 2 sesli harf olduğundan hiç sessiz olmaması da mümkün değildir). 6 harften farklı 3 harfle oluşturulan tüm sıralamalar 6 · 5 · 4 = 120'dir. Üçü de sessiz (B, C, D, F) olan sıralamalar 4 · 3 · 2 = 24'tür. İstenen: 120 − 24 = 96.",
    answers: [
      { text: "88", ok: false },
      { text: "84", ok: false },
      { text: "76", ok: false },
      { text: "96", ok: true },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p>İlk üç hanesi harflerden, son iki hanesi rakamlardan oluşan beş haneli kod numaraları üretiliyor. Harfler A, B, C, D, E, F arasından, rakamlar ise 1, 2, 3, 4, 5, 6 arasından seçiliyor.</p><p>Her hanesinde birbirinden farklı harf ve rakam bulunan bu kodlar ile ilgili olarak aşağıdakiler bilinmektedir.</p><p>• Harf hanesinde bir veya iki sessiz harf varsa rakam hanesindeki sayıların biri tek biri çifttir.<br>• Harf hanesinde üç sessiz harf varsa rakam hanesindeki sayıların ikisi de çifttir.</p><p><b>Harf hanesinde 3 sessiz harf olan kaç tane kod üretilebilir?</b></p>",
    diff: 3,
    expl: "Cevap anahtarı D (432) vermektedir. Harf hanesine 4 sessiz harften (B, C, D, F) farklı 3 tanesi 4 · 3 · 2 = 24 şekilde yerleşir. Bu durumda rakamların ikisi de çift (2, 4, 6) olmalıdır ve rakam hanesi 3 · 2 = 6 şekilde doldurulur. Bu kurallarla hesap 24 · 6 = 144 verir; anahtardaki 432 sonucu (144 · 3) soru metninden elde edilememektedir.",
    answers: [
      { text: "96", ok: false },
      { text: "100", ok: false },
      { text: "124", ok: false },
      { text: "432", ok: true },
      { text: "172", ok: false }
    ]
  },
  {
    text: "<p>İlk üç hanesi harflerden, son iki hanesi rakamlardan oluşan beş haneli kod numaraları üretiliyor. Harfler A, B, C, D, E, F arasından, rakamlar ise 1, 2, 3, 4, 5, 6 arasından seçiliyor.</p><p>Her hanesinde birbirinden farklı harf ve rakam bulunan bu kodlar ile ilgili olarak aşağıdakiler bilinmektedir.</p><p>• Harf hanesinde bir veya iki sessiz harf varsa rakam hanesindeki sayıların biri tek biri çifttir.<br>• Harf hanesinde üç sessiz harf varsa rakam hanesindeki sayıların ikisi de çifttir.</p><p><b>Aşağıdakilerden hangisi üretilen bir kod numarası olabilir?</b></p>",
    diff: 2,
    expl: "ABC24: 2 sessiz harf var, rakamlardan biri tek biri çift olmalıydı (yanlış). CDE46: 2 sessiz, rakamların ikisi çift (yanlış). AEC13: 1 sessiz, rakamların ikisi tek (yanlış). BCD12: 3 sessiz, rakamların ikisi de çift olmalıydı (yanlış). CDF46: 3 sessiz harf ve iki çift rakam; kurallara uyar.",
    answers: [
      { text: "ABC24", ok: false },
      { text: "CDE46", ok: false },
      { text: "AEC13", ok: false },
      { text: "BCD12", ok: false },
      { text: "CDF46", ok: true }
    ]
  },
  {
    text: "<p>Bir üniversitedeki harf notlarının 4'lük sistemde karşılığı aşağıdaki tabloda verilmiştir.</p><!--img--><p>Bu üniversitedeki öğrencilerin 4'lük sistemdeki akademik not ortalaması şöyle hesaplanıyor.</p><p>• Bir dersin ortalamaya katkısı o dersten alınan harf notunun 4'lük sistemde karşılığı ile dersin kredisi çarpılarak elde edilir.<br>• Alınan tüm derslerin ortalamaya katkıları toplanarak genel toplam değeri bulunur.<br>• Genel toplam değeri, alınan tüm derslerin kredilerinin toplamına bölünerek akademik not ortalaması hesaplanır.</p><p>Bu üniversiteye yeni başlayan bir öğrenci kredisi 4, 3 ve 3 olan derslerden sırasıyla CB, BB ve AA notlarını almıştır.</p><p><b>Buna göre, öğrencinin akademik not ortalaması kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q7.jpg",
    diff: 1,
    expl: "CB = 2,5; BB = 3,0; AA = 4,0. Genel toplam = 4 · 2,5 + 3 · 3 + 3 · 4 = 10 + 9 + 12 = 31. Toplam kredi = 4 + 3 + 3 = 10. Ortalama = 31/10 = 3,1.",
    answers: [
      { text: "3,5", ok: false },
      { text: "3,2", ok: false },
      { text: "3", ok: false },
      { text: "3,1", ok: true },
      { text: "2,9", ok: false }
    ]
  },
  {
    text: "<p>Bir üniversitedeki harf notlarının 4'lük sistemde karşılığı aşağıdaki tabloda verilmiştir.</p><!--img--><p>Bu üniversitedeki öğrencilerin 4'lük sistemdeki akademik not ortalaması şöyle hesaplanıyor.</p><p>• Bir dersin ortalamaya katkısı o dersten alınan harf notunun 4'lük sistemde karşılığı ile dersin kredisi çarpılarak elde edilir.<br>• Alınan tüm derslerin ortalamaya katkıları toplanarak genel toplam değeri bulunur.<br>• Genel toplam değeri, alınan tüm derslerin kredilerinin toplamına bölünerek akademik not ortalaması hesaplanır.</p><p>Toplam 46 kredilik ders almış bir öğrencinin akademik not ortalaması 2,50'dır. Bu öğrenci, 4 kredilik bir ders daha alıp bu dersten AA notunu alıyor.</p><p><b>Buna göre, öğrencinin akademik not ortalaması kaç olmuştur?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q8.jpg",
    diff: 2,
    expl: "Mevcut genel toplam = 46 · 2,50 = 115. Yeni dersin katkısı = 4 · 4,0 = 16. Yeni toplam = 131, yeni kredi = 50. Ortalama = 131/50 = 2,62.",
    answers: [
      { text: "2,62", ok: true },
      { text: "2,60", ok: false },
      { text: "2,70", ok: false },
      { text: "2,58", ok: false },
      { text: "2,55", ok: false }
    ]
  },
  {
    text: "<p>Bir üniversitedeki harf notlarının 4'lük sistemde karşılığı aşağıdaki tabloda verilmiştir.</p><!--img--><p>Bu üniversitedeki öğrencilerin 4'lük sistemdeki akademik not ortalaması şöyle hesaplanıyor.</p><p>• Bir dersin ortalamaya katkısı o dersten alınan harf notunun 4'lük sistemde karşılığı ile dersin kredisi çarpılarak elde edilir.<br>• Alınan tüm derslerin ortalamaya katkıları toplanarak genel toplam değeri bulunur.<br>• Genel toplam değeri, alınan tüm derslerin kredilerinin toplamına bölünerek akademik not ortalaması hesaplanır.</p><p><b>Toplam 40 kredilik ders almış bir öğrencinin akademik not ortalaması 3,00'dır. Bu öğrenci yeni bir dersten BA notunu aldığında akademik not ortalamasının 3,10'u geçmesi için bu dersin en az kaç kredilik olması gereklidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q9.jpg",
    diff: 3,
    expl: "Mevcut genel toplam = 40 · 3 = 120. Yeni dersin kredisi x olsun; BA = 3,5. (120 + 3,5x)/(40 + x) > 3,10 ⇒ 120 + 3,5x > 124 + 3,1x ⇒ 0,4x > 4 ⇒ x > 10. En az 11 kredi olmalıdır.",
    answers: [
      { text: "8", ok: false },
      { text: "11", ok: true },
      { text: "10", ok: false },
      { text: "6", ok: false },
      { text: "12", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 6 ──────────────────────────────────────

  {
    text: "<p>10 daireden oluşan bir şekilde, teğet iki daireye komşu daireler denir. 1'den 20'ye kadar olan tek sayılar bu dairelerin içine her dairede farklı bir sayı olacak biçimde yazılıyor. Bir daireye yazılan sayı kendisine komşu olan iki dairedeki sayıdan büyük ise daire griye boyanıyor.</p><!--img--><p><b>Yukarıdaki şekilde kaç daire griye boyanacaktır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q10.jpg",
    diff: 2,
    expl: "Saat yönünde sayılar: 7, 13, 11, 19, 17, 9, 1, 15, 5, 3. İki komşusundan da büyük olanlar: 13 (7 ve 11'den büyük), 19 (11 ve 17'den büyük), 15 (1 ve 5'ten büyük). Diğerlerinin en az bir komşusu kendisinden büyüktür. Toplam 3 daire griye boyanır.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>10 daireden oluşan bir şekilde, teğet iki daireye komşu daireler denir. 1'den 20'ye kadar olan tek sayılar bu dairelerin içine her dairede farklı bir sayı olacak biçimde yazılıyor. Bir daireye yazılan sayı kendisine komşu olan iki dairedeki sayıdan büyük ise daire griye boyanıyor.</p><!--img--><p><b>Yukarıda verilen şekilde a, b, c harflerinin olduğu dairesel bölgeler gri renkli olduğuna göre a + b'nin <u>en büyük</u> değeri aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q11.jpg",
    diff: 3,
    expl: "Kullanılmayan sayılar 13, 17 ve 19'dur. c, 11 ve 15'ten; a, 15 ve 9'dan büyük olmalıdır. Bu yüzden a ve c, 17 ve 19 değerlerini alır; b'ye 13 kalır (13 > 1 ve 13 > 3). a + b'nin en büyük değeri 19 + 13 = 32'dir.",
    answers: [
      { text: "24", ok: false },
      { text: "32", ok: true },
      { text: "30", ok: false },
      { text: "28", ok: false },
      { text: "49", ok: false }
    ]
  },
  {
    text: "<p>10 daireden oluşan bir şekilde, teğet iki daireye komşu daireler denir. 1'den 20'ye kadar olan tek sayılar bu dairelerin içine her dairede farklı bir sayı olacak biçimde yazılıyor. Bir daireye yazılan sayı kendisine komşu olan iki dairedeki sayıdan büyük ise daire griye boyanıyor.</p><!--img--><p>Yukarıdaki gri renkli hücreler verilmiştir.</p><p><b>Buna göre sayılar yerleştirildikten sonra a − b ifadesinin <u>en az</u> değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q12.jpg",
    diff: 3,
    expl: "Şekilde saat yönünde: 1 (beyaz), b (gri), boş (beyaz), 9 (gri), boş (beyaz), a (gri), 11 (beyaz), boş (gri), 15 (beyaz), boş (gri). 9 gri olduğundan iki beyaz komşusu 9'dan küçüktür, yani 3, 5, 7'den ikisidir. 11 ile 15 arasındaki ve 15 ile 1 arasındaki gri daireler 15'ten büyük olmalıdır: 17 ve 19. Geriye 13 ile 3, 5, 7'den biri kalır. a, 11'den büyük olmak zorunda olduğundan a = 13'tür. b, 3, 5, 7'den kalan sayıdır ve en büyük 7 olabilir (komşusu 3 veya 5 olur). En az a − b = 13 − 7 = 6.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "2", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Üçgen biçimindeki bir düzeneğin dairesel hücrelerine 1'den 6'ya kadar olan rakamlar, her hücrede farklı bir rakam olacak biçimde yerleştiriliyor. Sonra, her karenin (ve eşkenar dörtgenin) içine o kare ile aynı doğrultuda bulunan üç dairesel hücredeki sayıların çarpımı yazılıyor: tepedeki kareye sol kenardaki, sağ alttaki kareye sağ kenardaki, soldaki eşkenar dörtgene alt kenardaki üç sayının çarpımı yazılır.</p><p>Örnek: Tepe 5, sol kenar ortası 1, sol alt köşe 3, sağ kenar ortası 4, sağ alt köşe 2, alt kenar ortası 6 ise tepedeki kareye 5 · 1 · 3 = 15, sağ alttaki kareye 5 · 4 · 2 = 40, eşkenar dörtgene 3 · 6 · 2 = 36 yazılır.</p><!--img--><p><b>Yukarıda verilenlere göre x en çok kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q13.jpg",
    diff: 3,
    expl: "Sağ kenar: tepe · 4 · sağ alt = 60 ⇒ tepe · sağ alt = 15 ⇒ {3, 5}. Alt kenar çarpımı 10'dur; sağ alt 3 olursa kalan çarpım 10/3 olur, bu yüzden sağ alt = 5, tepe = 3. Alt kenarda kalan iki sayının çarpımı 2 ⇒ {1, 2}. Sol kenar ortasına kalan 6 gelir. x = 3 · 6 · (sol alt); sol alt 1 veya 2 olabilir. x en çok 3 · 6 · 2 = 36.",
    answers: [
      { text: "24", ok: false },
      { text: "48", ok: false },
      { text: "36", ok: true },
      { text: "30", ok: false },
      { text: "54", ok: false }
    ]
  },
  {
    text: "<p>Üçgen biçimindeki bir düzeneğin dairesel hücrelerine 1'den 6'ya kadar olan rakamlar, her hücrede farklı bir rakam olacak biçimde yerleştiriliyor. Sonra, her karenin (ve eşkenar dörtgenin) içine o kare ile aynı doğrultuda bulunan üç dairesel hücredeki sayıların çarpımı yazılıyor: tepedeki kareye sol kenardaki, sağ alttaki kareye sağ kenardaki, soldaki eşkenar dörtgene alt kenardaki üç sayının çarpımı yazılır.</p><p>Örnek: Tepe 5, sol kenar ortası 1, sol alt köşe 3, sağ kenar ortası 4, sağ alt köşe 2, alt kenar ortası 6 ise tepedeki kareye 5 · 1 · 3 = 15, sağ alttaki kareye 5 · 4 · 2 = 40, eşkenar dörtgene 3 · 6 · 2 = 36 yazılır.</p><!--img--><p><b>Yukarıda verilenlere göre A sayısının alabileceği değerler toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q14.jpg",
    diff: 3,
    expl: "Sağ kenar: 3 · (sağ orta) · 4 = 24 ⇒ sağ orta = 2. Alt kenar: (sol alt) · (alt orta) · 4 = 20 ⇒ sol alt ile alt ortanın çarpımı 5 ⇒ {1, 5}. Sol kenar ortasına kalan 6 gelir. A = 3 · 6 · (sol alt); sol alt 1 ise A = 18, 5 ise A = 90. Toplam 18 + 90 = 108.",
    answers: [
      { text: "96", ok: false },
      { text: "108", ok: true },
      { text: "72", ok: false },
      { text: "120", ok: false },
      { text: "132", ok: false }
    ]
  },
  {
    text: "<p>Üçgen biçimindeki bir düzeneğin dairesel hücrelerine 1'den 6'ya kadar olan rakamlar, her hücrede farklı bir rakam olacak biçimde yerleştiriliyor. Sonra, her karenin (ve eşkenar dörtgenin) içine o kare ile aynı doğrultuda bulunan üç dairesel hücredeki sayıların çarpımı yazılıyor: tepedeki kareye sol kenardaki, sağ alttaki kareye sağ kenardaki, soldaki eşkenar dörtgene alt kenardaki üç sayının çarpımı yazılır.</p><p>Örnek: Tepe 5, sol kenar ortası 1, sol alt köşe 3, sağ kenar ortası 4, sağ alt köşe 2, alt kenar ortası 6 ise tepedeki kareye 5 · 1 · 3 = 15, sağ alttaki kareye 5 · 4 · 2 = 40, eşkenar dörtgene 3 · 6 · 2 = 36 yazılır.</p><!--img--><p><b>Yukarıda verilenlere göre A + B + C toplamı aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/sayisal-mantik_t1_q15.jpg",
    diff: 3,
    expl: "Alt kenar: B · (alt orta) · C = 15 ⇒ bu üç sayı 1, 3, 5'tir. Kalan 2, 4, 6 sayıları A ve iki kenar ortasına gelir. Sağ kenar: A · (sağ orta) · C = 36; 2, 4, 6'dan iki sayının çarpımı 8, 12 veya 24 olabildiğinden C = 3 ve A · (sağ orta) = 12 ⇒ {2, 6}. Sol kenar: A · (sol orta) · B = 24; B = 1 ise A · (sol orta) = 24 ⇒ {4, 6}. Ortak sayı A = 6'dır. A + B + C = 6 + 1 + 3 = 10.",
    answers: [
      { text: "11", ok: false },
      { text: "8", ok: false },
      { text: "14", ok: false },
      { text: "12", ok: false },
      { text: "10", ok: true }
    ]
  },
  {
    text: "<p>Bir çocuk kırmızı, mavi ve beyaz renkli özdeş küpler kullanarak aşağıda tarif edilen biçimde bir yapı oluşturuyor.</p><p>• 86 küpü yan yana dizerek birinci katı oluşturuyor. Birinci katın üzerine yan yana 81 küp koyarak ikinci katı, ikinci katın üzerine yan yana 76 küp koyarak üçüncü katı ve bundan sonraki her katta bir önceki katta kullandığı küp sayısından 5 tane daha az küp kullanarak diğer katları oluşturuyor.<br>• Birinci katta beyaz, ikinci katta kırmızı, üçüncü katta mavi küpler kullanarak üstteki diğer katlarda da aynı renk düzenini tekrar ediyor.</p><p><b>Buna göre bu yapının 12. katında bulunan küp sayısı ve rengi aşağıdakilerden hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "n. kattaki küp sayısı 86 − 5(n − 1)'dir. 12. kat: 86 − 55 = 31. Renkler 3 katta bir tekrar eder; 12, 3'ün katı olduğundan 12. kat 3. kat gibi mavidir.",
    answers: [
      { text: "36 – Mavi", ok: false },
      { text: "31 – Kırmızı", ok: false },
      { text: "36 – Kırmızı", ok: false },
      { text: "31 – Mavi", ok: true },
      { text: "36 – Beyaz", ok: false }
    ]
  },
  {
    text: "<p>Bir çocuk kırmızı, mavi ve beyaz renkli özdeş küpler kullanarak aşağıda tarif edilen biçimde bir yapı oluşturuyor.</p><p>• 86 küpü yan yana dizerek birinci katı oluşturuyor. Birinci katın üzerine yan yana 81 küp koyarak ikinci katı, ikinci katın üzerine yan yana 76 küp koyarak üçüncü katı ve bundan sonraki her katta bir önceki katta kullandığı küp sayısından 5 tane daha az küp kullanarak diğer katları oluşturuyor.<br>• Birinci katta beyaz, ikinci katta kırmızı, üçüncü katta mavi küpler kullanarak üstteki diğer katlarda da aynı renk düzenini tekrar ediyor.</p><p><b>Bu çocuk mümkün olduğu kadar en çok küp kullanarak bu yapıyı oluşturduğuna göre toplam kaç tane kırmızı küp kullanılmıştır?</b></p>",
    diff: 3,
    expl: "86 − 5(n − 1) ≥ 1 ⇒ n ≤ 18; yapı 18 katlıdır (son katta 1 küp). Kırmızı katlar 2, 5, 8, 11, 14, 17'dir; bu katlardaki küp sayıları 81, 66, 51, 36, 21, 6'dır. Toplam 81 + 66 + 51 + 36 + 21 + 6 = 261.",
    answers: [
      { text: "249", ok: false },
      { text: "280", ok: false },
      { text: "271", ok: false },
      { text: "258", ok: false },
      { text: "261", ok: true }
    ]
  },
  {
    text: "<p>Bir çocuk kırmızı, mavi ve beyaz renkli özdeş küpler kullanarak aşağıda tarif edilen biçimde bir yapı oluşturuyor.</p><p>• 86 küpü yan yana dizerek birinci katı oluşturuyor. Birinci katın üzerine yan yana 81 küp koyarak ikinci katı, ikinci katın üzerine yan yana 76 küp koyarak üçüncü katı ve bundan sonraki her katta bir önceki katta kullandığı küp sayısından 5 tane daha az küp kullanarak diğer katları oluşturuyor.<br>• Birinci katta beyaz, ikinci katta kırmızı, üçüncü katta mavi küpler kullanarak üstteki diğer katlarda da aynı renk düzenini tekrar ediyor.</p><p><b>Bu çocuk 10 katlı bir yapı oluşturduğuna göre bu yapıda kullanılan beyaz renkli küp sayısı mavi renkli küp sayısından kaç fazladır?</b></p>",
    diff: 3,
    expl: "Beyaz katlar 1, 4, 7, 10: 86 + 71 + 56 + 41 = 254. Mavi katlar 3, 6, 9: 76 + 61 + 46 = 183. Fark 254 − 183 = 71.",
    answers: [
      { text: "62", ok: false },
      { text: "73", ok: false },
      { text: "71", ok: true },
      { text: "81", ok: false },
      { text: "69", ok: false }
    ]
  },

// ─── YAŞ PROBLEMLERİ TEST - 1 ─────────────────────────────────────────────────

  {
    text: "<p>Annenin yaşı 34, 2 çocuğunun yaşları toplamı 13'tür.</p><p><b>Buna göre 5 yıl sonra anne ile çocukların yaşları toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Bugünkü toplam 34 + 13 = 47. 3 kişinin her biri 5 yaş büyüyeceğinden toplam 3 · 5 = 15 artar: 47 + 15 = 62.",
    answers: [
      { text: "57", ok: false },
      { text: "67", ok: false },
      { text: "62", ok: true },
      { text: "52", ok: false },
      { text: "59", ok: false }
    ]
  },
  {
    text: "<p>Babanın yaşı üç çocuğunun yaşları toplamının 4 katıdır.</p><p><b>4 yıl sonra babanın yaşı üç çocuğunun yaşları toplamının 2 katı olacağına göre baba bugün kaç yaşındadır?</b></p>",
    diff: 2,
    expl: "Çocukların yaşları toplamı Ç, baba 4Ç olsun. 4 yıl sonra baba 4Ç + 4, çocukların toplamı Ç + 12 olur. 4Ç + 4 = 2(Ç + 12) ⇒ 2Ç = 20 ⇒ Ç = 10. Baba 4 · 10 = 40 yaşındadır.",
    answers: [
      { text: "32", ok: false },
      { text: "40", ok: true },
      { text: "48", ok: false },
      { text: "52", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p><b>Annenin yaşı kızının yaşının 6 katıdır. Kızı annesinin bugünkü yaşına geldiğinde anne ile kızının yaşları toplamı 85 olduğuna göre anne ile kızının yaşları farkı kaçtır?</b></p>",
    diff: 2,
    expl: "Kız x, anne 6x olsun. Kızın 6x yaşına gelmesi için 5x yıl geçer; anne 11x olur. 11x + 6x = 17x = 85 ⇒ x = 5. Yaş farkı 5x = 25.",
    answers: [
      { text: "35", ok: false },
      { text: "25", ok: true },
      { text: "20", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>Bir annenin yaşı iki çocuğunun yaşları farkının 3 katından 4 fazladır.</p><p><b>5 yıl sonra annenin yaşı çocukların yaşları farkının 4 katı olacağına göre anne bugün kaç yaşındadır?</b></p>",
    diff: 2,
    expl: "Çocukların yaş farkı F sabittir. Anne = 3F + 4. 5 yıl sonra: 3F + 4 + 5 = 4F ⇒ F = 9. Anne = 3 · 9 + 4 = 31.",
    answers: [
      { text: "31", ok: true },
      { text: "29", ok: false },
      { text: "28", ok: false },
      { text: "42", ok: false },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p>Bir babanın yaşı dörder yıl arayla doğmuş üç çocuğunun yaşları toplamına eşittir.</p><p><b>Baba bugün 72 yaşında olduğuna göre en küçük çocuk doğduğunda baba kaç yaşındadır?</b></p>",
    diff: 2,
    expl: "Çocuklar x, x + 4, x + 8 yaşında olsun. 3x + 12 = 72 ⇒ x = 20. En küçük çocuk doğduğunda baba 72 − 20 = 52 yaşındaydı.",
    answers: [
      { text: "48", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: false },
      { text: "52", ok: true },
      { text: "56", ok: false }
    ]
  },
  {
    text: "<p>6 yıl önce babanın yaşı oğlunun yaşının 5 katıydı. 6 yıl sonra ise babanın yaşı oğlunun yaşının 3 katı olacaktır.</p><p><b>Buna göre babanın bugünkü yaşı kaçtır?</b></p>",
    diff: 2,
    expl: "Baba B, oğul O olsun. B − 6 = 5(O − 6) ⇒ B = 5O − 24. B + 6 = 3(O + 6) ⇒ B = 3O + 12. 5O − 24 = 3O + 12 ⇒ O = 18, B = 66.",
    answers: [
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "56", ok: false },
      { text: "48", ok: false },
      { text: "66", ok: true }
    ]
  },
  {
    text: "<p>Bilge'nin bugünkü yaşı 11, annesinin yaşı 33'tür.</p><p><b>Kaç yıl sonra Bilge ile annesinin yaşları toplamı Bilge'nin bugünkü yaşının 6 katı olacaktır?</b></p>",
    diff: 2,
    expl: "x yıl sonra toplam 11 + 33 + 2x = 44 + 2x olur. 44 + 2x = 6 · 11 = 66 ⇒ x = 11.",
    answers: [
      { text: "11", ok: true },
      { text: "14", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Mehmet kardeşinden 4 yaş büyük, babasından ise 24 yaş küçüktür.</p><p><b>Mehmet'in, kardeşinin ve babasının bugünkü yaşları toplamı 62 olduğuna göre Mehmet'in bugünkü yaşı kaçtır?</b></p>",
    diff: 1,
    expl: "Mehmet M ise kardeşi M − 4, babası M + 24'tür. 3M + 20 = 62 ⇒ M = 14.",
    answers: [
      { text: "10", ok: false },
      { text: "18", ok: false },
      { text: "14", ok: true },
      { text: "16", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>Burak ve babasının bugünkü yaşları oranı 2/7'dir.</p><p><b>4 yıl sonra bu oran 1/3 olacağına göre Burak ve babasının bugünkü yaşları toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Burak 2x, baba 7x olsun. (2x + 4)/(7x + 4) = 1/3 ⇒ 6x + 12 = 7x + 4 ⇒ x = 8. Toplam 9x = 72.",
    answers: [
      { text: "32", ok: false },
      { text: "25", ok: false },
      { text: "24", ok: false },
      { text: "72", ok: true },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>Mehmet arkadaşına \"4 yıl önce yaşım doğum yılımın rakamları toplamına eşitti\" diyor.</p><p><b>Bu konuşma 2002 yılında gerçekleştiğine göre Mehmet'in doğum tarihi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Doğum yılı 19AB olsun. 4 yıl önce (1998) yaşı 98 − 10A − B'dir. Rakamlar toplamı 10 + A + B. 98 − 10A − B = 10 + A + B ⇒ 11A + 2B = 88 ⇒ A = 8, B = 0. Doğum yılı 1980 (1998'de 18 yaşında, 1 + 9 + 8 + 0 = 18).",
    answers: [
      { text: "1976", ok: false },
      { text: "1984", ok: false },
      { text: "1980", ok: true },
      { text: "1986", ok: false },
      { text: "1990", ok: false }
    ]
  },
  {
    text: "<p>Bir annenin bugünkü yaşı üç çocuğunun yaşları toplamının 2 katıdır.</p><p><b>Üç çocuğunun yaşları toplamı annenin bugünkü yaşına geldiğinde dört kişinin yaşları toplamı 65 olacağına göre annenin bugünkü yaşı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Çocukların toplamı Ç, anne 2Ç olsun. Çocukların toplamının Ç artması için Ç/3 yıl geçer. O zaman anne 2Ç + Ç/3 = 7Ç/3, çocukların toplamı 2Ç olur. 7Ç/3 + 2Ç = 13Ç/3 = 65 ⇒ Ç = 15. Anne bugün 30 yaşındadır.",
    answers: [
      { text: "45", ok: false },
      { text: "30", ok: true },
      { text: "36", ok: false },
      { text: "42", ok: false },
      { text: "27", ok: false }
    ]
  },
  {
    text: "<p>Mehmet 4 yıl önce, Bilge 5 yıl sonra doğmuş olsaydı, Mehmet'in yaşı Bilge'nin yaşının 2 katından 6 fazla olacaktı.</p><p><b>Mehmet ile Bilge'nin bugünkü yaşları toplamı 46 olduğuna göre Mehmet'in bugünkü yaşı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Mehmet M, Bilge B olsun; M + B = 46. 4 yıl önce doğmak 4 yaş büyük, 5 yıl sonra doğmak 5 yaş küçük olmak demektir: M + 4 = 2(B − 5) + 6 ⇒ M = 2B − 8. 3B − 8 = 46 ⇒ B = 18, M = 28.",
    answers: [
      { text: "32", ok: false },
      { text: "36", ok: false },
      { text: "24", ok: false },
      { text: "30", ok: false },
      { text: "28", ok: true }
    ]
  },

// ─── YAŞ PROBLEMLERİ TEST - 2 ─────────────────────────────────────────────────

  {
    text: "<p>Okan ile Orkun'un bugünkü yaşları toplamı 65'tir.</p><p><b>Okan, Orkun'un bugünkü yaşındayken Orkun 34 yaşında olduğuna göre Okan'ın bugünkü yaşı kaçtır?</b></p>",
    diff: 3,
    expl: "Okan O, Orkun K olsun; O + K = 65. Okan K yaşındayken O − K yıl önceydi ve Orkun K − (O − K) = 2K − O yaşındaydı: 2K − O = 34. İki denklem toplanırsa 3K = 99 ⇒ K = 33, O = 32.",
    answers: [
      { text: "29", ok: false },
      { text: "28", ok: false },
      { text: "32", ok: true },
      { text: "33", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>Mehmet 4 yıl önce doğmuş olsaydı annesinin bugünkü yaşı Mehmet'in yaşının 3 katı olacaktı.</p><p><b>Buna göre Mehmet doğduğunda annesi 36 yaşında olduğuna göre Mehmet bugün kaç yaşındadır?</b></p>",
    diff: 2,
    expl: "Mehmet M ise anne M + 36'dır. 4 yıl önce doğsaydı Mehmet M + 4 yaşında olurdu: M + 36 = 3(M + 4) ⇒ 2M = 24 ⇒ M = 12.",
    answers: [
      { text: "16", ok: false },
      { text: "12", ok: true },
      { text: "18", ok: false },
      { text: "14", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Abisinden 5 yaş küçük olan Mehmet doğduğunda annesi 27 yaşındaydı.</p><p><b>Abisi Mehmet'in yaşında iken annesi 36 yaşında olduğuna göre Mehmet bugün kaç yaşındadır?</b></p>",
    diff: 3,
    expl: "Abi, Mehmet'in bugünkü yaşındayken 5 yıl önceydi; anne o zaman 36, bugün 41 yaşındadır. Anne ile Mehmet arasındaki yaş farkı 27 olduğundan Mehmet 41 − 27 = 14 yaşındadır.",
    answers: [
      { text: "14", ok: true },
      { text: "18", ok: false },
      { text: "16", ok: false },
      { text: "12", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Ali'nin yaşı Betül'ün yaşının 3 katı, Canan'ın yaşının ise 5 katıdır.</p><p><b>Canan, Betül'ün yaşına geldiğinde Ali 68 yaşında olacağına göre Betül ile Canan'ın bugünkü yaşları toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Ali 15x, Betül 5x, Canan 3x olsun. Canan'ın 5x yaşına gelmesi için 2x yıl geçer; Ali 17x = 68 ⇒ x = 4. Betül + Canan = 8x = 32.",
    answers: [
      { text: "32", ok: true },
      { text: "28", ok: false },
      { text: "24", ok: false },
      { text: "42", ok: false },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p>Ahmet, Burak ve Can'ın bugünkü yaşları toplamı 48'dir. Ahmet, Burak'ın bugünkü yaşına geldiğinde Can'ın yaşı da Burak'ın yaşının 2 katı olacaktır.</p><p><b>Buna göre Burak'ın bugünkü yaşı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Ahmet A, Burak B, Can C olsun; A + B + C = 48. Ahmet'in B yaşına gelmesi için B − A yıl geçer. O zaman Burak 2B − A, Can C + B − A yaşında olur: C + B − A = 2(2B − A) ⇒ C = 3B − A. Toplamda yerine yazılırsa A + B + 3B − A = 4B = 48 ⇒ B = 12.",
    answers: [
      { text: "14", ok: false },
      { text: "18", ok: false },
      { text: "16", ok: false },
      { text: "12", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Onur'a babasının yaşı sorulduğunda Onur aşağıdaki bilgileri vermiştir.</p><p>• Amcamın bugünkü yaşı benim yaşımın 4 katından 3 fazladır.<br>• 5 yıl önce amcam ile babamın yaşları toplamı 43'tür.<br>• Ben amcamın bugünkü yaşına geldiğimde amcam 34 yaşında olacaktır.</p><p><b>Buna göre, Onur'un babasının bugünkü yaşı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Onur O, amca A, baba B olsun. A = 4O + 3. (A − 5) + (B − 5) = 43 ⇒ A + B = 53. Onur A yaşına geldiğinde A − O yıl geçer ve amca 2A − O = 34 olur. A = 4O + 3 yazılırsa 8O + 6 − O = 34 ⇒ O = 4, A = 19. B = 53 − 19 = 34.",
    answers: [
      { text: "32", ok: false },
      { text: "30", ok: false },
      { text: "36", ok: false },
      { text: "42", ok: false },
      { text: "34", ok: true }
    ]
  },
  {
    text: "<p>Bilge ve Pamir arasındaki konuşma aşağıdaki gibi geçiyor.</p><p>Bilge: Senin bugünkü yaşına geldiğimde kaç yaşında olacaksın?<br>Pamir: 40 yaşında olacağım. Peki, ben senin bugünkü yaşındayken sen kaç yaşındaydın?<br>Bilge: 3 yaşındaydım.</p><p><b>Buna göre, Bilge ve Pamir'in bugünkü yaşları toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Bilge B, Pamir P olsun (P > B). Bilge P yaşına geldiğinde P − B yıl geçer; Pamir 2P − B = 40 olur. Pamir B yaşındayken P − B yıl önceydi; Bilge 2B − P = 3 yaşındaydı. İki denklem toplanırsa (2P − B) + (2B − P) = P + B = 43.",
    answers: [
      { text: "41", ok: false },
      { text: "45", ok: false },
      { text: "43", ok: true },
      { text: "42", ok: false },
      { text: "46", ok: false }
    ]
  },
  {
    text: "<p>19AB yılında doğan Ali'nin doğum yılının rakamları toplamı, Aliye'nin 2002 yılındaki yaşına eşittir.</p><p><b>Ali doğduğunda Aliye 4 yaşında olduğuna göre, Aliye'nin doğum yılı kaçtır?</b></p>",
    diff: 3,
    expl: "Ali'nin 2002'deki yaşı 102 − 10A − B, Aliye'ninki 106 − 10A − B'dir. 106 − 10A − B = 1 + 9 + A + B ⇒ 11A + 2B = 96 ⇒ A = 8, B = 4. Ali 1984'te doğmuştur; Aliye 4 yaş büyük olduğundan 1980'de doğmuştur.",
    answers: [
      { text: "1985", ok: false },
      { text: "1980", ok: true },
      { text: "1984", ok: false },
      { text: "1990", ok: false },
      { text: "1995", ok: false }
    ]
  },
  {
    text: "<p>Anne, baba ve bir çocuktan oluşan bir ailede; anne ile çocuğunun bugünkü yaşlarının aritmetik ortalaması, baba ile çocuğunun bugünkü yaşlarının aritmetik ortalamasından 3 fazladır. 1 yıl önce annenin yaşı çocuğunun yaşının 5 katı, babanın yaşı ise çocuğunun yaşının 4 katıydı.</p><p><b>Buna göre, çocuğun bugünkü yaşı kaçtır?</b></p>",
    diff: 2,
    expl: "(A + Ç)/2 = (B + Ç)/2 + 3 ⇒ A − B = 6. 1 yıl önce: A − 1 = 5(Ç − 1), B − 1 = 4(Ç − 1). Taraf tarafa çıkarılırsa A − B = Ç − 1 = 6 ⇒ Ç = 7.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: true },
      { text: "5", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Üç kardeşin bugünkü yaşları ortalaması 18'dir. En küçük kardeşin yaşı, şimdiki yaşının 4 katına geldiğinde bu üç kardeşin yaşları ortalaması 42 olmaktadır.</p><p><b>Buna göre <u>en küçük</u> kardeşin şimdiki yaşı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Bugünkü toplam 3 · 18 = 54. En küçük kardeş K yaşındaysa 4K yaşına gelmesi için 3K yıl geçer; toplam 3 · 3K = 9K artar. 54 + 9K = 3 · 42 = 126 ⇒ K = 8.",
    answers: [
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "6", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Bir şirkette çalışan 70 yaşındaki Murat Bey ve diğer çalışanların yaşlarının ortalaması 1 Ocak 2020 tarihinde 50 olarak hesaplanmıştır. Murat Bey, 2020 yılının sonunda emekli olup işten ayrıldıktan sonra bu şirkette çalışanların yaş ortalaması 1 Ocak 2021 tarihinde yine 50 olarak hesaplanmıştır.</p><p><b>Murat Bey'den başka işten ayrılan veya işe yeni alınan biri olmadığına göre, 1 Ocak 2020 tarihinde bu şirketteki toplam çalışan sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "Çalışan sayısı n olsun; yaş toplamı 50n. Murat Bey ayrılınca kalan n − 1 kişinin toplamı 50n − 70; bir yıl sonra 50n − 70 + (n − 1) = 51n − 71 olur. (51n − 71)/(n − 1) = 50 ⇒ 51n − 71 = 50n − 50 ⇒ n = 21.",
    answers: [
      { text: "21", ok: true },
      { text: "24", ok: false },
      { text: "20", ok: false },
      { text: "18", ok: false },
      { text: "23", ok: false }
    ]
  },
  {
    text: "<p>Bir şirkette 40 kişi çalışmaktadır. Bu şirketteki kadın çalışanların yaş ortalaması 36, erkek çalışanların yaş ortalaması ise 40'tır. Şirketten her birinin yaşı 52 olan iki kadın çalışan ayrılıyor ve şirkete her biri 57 yaşında olan 4 erkek çalışan katılıyor. Son durumda şirketteki kadın çalışanların yaş ortalaması 32 oluyor.</p><p><b>Buna göre, son durumda şirkette çalışan erkeklerin yaş ortalaması aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Kadın sayısı K olsun. (36K − 104)/(K − 2) = 32 ⇒ 4K = 40 ⇒ K = 10, erkek sayısı 30. Erkeklerin yaş toplamı 30 · 40 = 1200; 4 · 57 = 228 eklenince 1428, erkek sayısı 34 olur. Ortalama 1428/34 = 42.",
    answers: [
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "56", ok: false },
      { text: "48", ok: false },
      { text: "42", ok: true }
    ]
  },

// ─── YAŞ PROBLEMLERİ TEST - 3 ─────────────────────────────────────────────────

  {
    text: "<p>Bir ailede baba 10 yıl önce doğmuş olsaydı anne ile yaşları eşit olacaktı.</p><p><b>Annenin yaşı kızının yaşının 9 katı, babanın yaşı kızının yaşının 7 katı olduğuna göre annenin yaşı kaçtır?</b></p>",
    diff: 2,
    expl: "Baba 10 yıl önce doğsaydı 10 yaş büyük olurdu; yani anne − baba = 10. 9x − 7x = 2x = 10 ⇒ x = 5. Anne 9 · 5 = 45 yaşındadır.",
    answers: [
      { text: "27", ok: false },
      { text: "63", ok: false },
      { text: "45", ok: true },
      { text: "54", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>Mehmet'in yaşı a'dır. Annesinin yaşı Mehmet'in yaşının a katıdır. Mehmet'in bugünkü yaşının 4 katı ile annesinin bugünkü yaşının toplamı, Mehmet'in bugünkü yaşının 11 katından 6 eksiktir.</p><p><b>Buna göre, Mehmet doğduğunda annesi kaç yaşındadır?</b></p>",
    diff: 3,
    expl: "Anne a² yaşındadır. 4a + a² = 11a − 6 ⇒ a² − 7a + 6 = 0 ⇒ a = 6 veya a = 1. a = 1 olursa anne ile Mehmet aynı yaşta olur, bu yüzden a = 6. Anne 36, Mehmet 6 yaşında; Mehmet doğduğunda anne 36 − 6 = 30 yaşındaydı.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "30", ok: true },
      { text: "20", ok: false },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p>20'nci yüzyılda doğmuş bir matematikçi yaşını soran arkadaşına \"x<sup>2</sup> yılında x yaşındayım\" demiştir.</p><p><b>Buna göre bu matematikçinin doğum yılının rakamları toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Doğum yılı x² − x'tir. x = 44 için 1936 − 44 = 1892 (19. yüzyıl), x = 45 için 2025 − 45 = 1980 (20. yüzyıl), x = 46 için 2116 − 46 = 2070 olur. Doğum yılı 1980'dir; rakamları toplamı 1 + 9 + 8 + 0 = 18.",
    answers: [
      { text: "18", ok: true },
      { text: "20", ok: false },
      { text: "21", ok: false },
      { text: "17", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>Mehmet'in yaşı 2 basamaklı xy sayısına eşittir. İki basamaklı yx sayısı ile xy sayısı arasında</p><p>2 · xy = yx + 1</p><p>bağıntısı vardır.</p><p><b>Buna göre en az kaç yıl sonra Mehmet'in yaşı bir rakamın karesine eşit olur?</b></p>",
    diff: 3,
    expl: "2(10x + y) = 10y + x + 1 ⇒ 19x = 8y + 1. Rakamlar içinde tek çözüm x = 3, y = 7'dir; Mehmet 37 yaşındadır. 37'den büyük ilk rakam karesi 49 = 7²'dir. 49 − 37 = 12 yıl sonra.",
    answers: [
      { text: "6", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: true },
      { text: "7", ok: false },
      { text: "10", ok: false }
    ]
  }
];
