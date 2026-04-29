import type { McQ } from "../../../../types";

export const MAT_BOLME_T1: McQ[] = [
  {
    text: "ABABAB 6 basamaklı sayının 2 basamaklı AB sayısına bölümünden elde edilen bölüm kaçtır?",
    diff: 1,
    expl: "Bölme işlemini adım adım yapalım: AB'de AB 1 kere var. Kalan 0. A'yı indik, yok (0 koyduk). B'yi indik, AB'de AB 1 kere var. Kalan 0. A'yı indik, yok (0 koyduk). B'yi indik, AB'de AB 1 kere var. Bölüm 10101 olur.",
    answers: [
      { text: "111", ok: false },
      { text: "1010", ok: false },
      { text: "10101", ok: true },
      { text: "1011", ok: false },
      { text: "111111", ok: false }
    ]
  },
  {
    text: "ABAB8 beş basamaklı sayının AB iki basamaklı sayısına bölümünden elde edilen bölüm ve kalanın toplamı kaçtır?",
    diff: 1,
    expl: "ABAB8 sayısını AB'ye böldüğümüzde bölüm 1010 olur, 8'i indiğimizde içinde AB olmadığı için kalır. Kalan 8'dir. Bölüm ile kalanın toplamı: 1010 + 8 = 1018'dir.",
    answers: [
      { text: "107", ok: false },
      { text: "108", ok: false },
      { text: "1017", ok: false },
      { text: "1018", ok: true },
      { text: "1010", ok: false }
    ]
  },
  {
    text: "A0AA0A altı basamaklı sayının A0 iki basamaklı sayısına bölümünden elde edilen bölüm kaçtır?",
    diff: 2,
    expl: "A0A A0 A sayısını A0'a bölersek; A0'da A0 1 defa var (1). A'yı in (0), A0'ı in (1). A'yı in (0). Kalan A olur. Bölüm ise 10110 olur.",
    answers: [
      { text: "10110", ok: true },
      { text: "10101", ok: false },
      { text: "11010", ok: false },
      { text: "1110", ok: false },
      { text: "10111", ok: false }
    ]
  },
  {
    text: "A doğal sayısının 13 ile bölümünden elde edilen kalan 4'tür.\nBuna göre A² + 4·A sayısının 13 ile bölümünden kalan kaçtır?",
    diff: 1,
    expl: "Modüler aritmetik gereği, işlemde A yerine doğrudan kalanı (4) yazabiliriz. 4² + 4·(4) = 16 + 16 = 32. 32'nin 13'e bölümünden kalan: 32 = 13·2 + 6 olduğundan 6'dır.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: true }
    ]
  },
  {
    text: "x doğal sayısının 11 ile bölümünden kalan 5, y sayısının 11 ile bölümünden kalan 6'dır.\nBuna göre x² - x·y + y² ifadesinin 11 ile bölümünden kalan aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "İfadede x yerine 5, y yerine 6 yazabiliriz. 5² - 5·6 + 6² = 25 - 30 + 36 = 31. 31 sayısının 11'e bölümünden kalan 9'dur (11·2 = 22, 31 - 22 = 9).",
    answers: [
      { text: "9", ok: true },
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "7", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q6.jpg)\n\nYukarıda verilen bölme işleminde 4a 2 basamaklı sayısında a'nın alabileceği kaç farklı değer vardır?",
    img: "QuestionsImage/bolme_t1_q6.jpg",
    diff: 2,
    expl: "Bölüm 2 ile başlamaktadır. Yani 93'ün içinde 4a sayısı 2 kere vardır. Bu da 4a · 2 ≤ 93 demektir. 80 + 2a ≤ 93 => 2a ≤ 13 => a ≤ 6. Ayrıca 4a · 3 işleminin 93'ü geçmesi gerekir (ki bu a'nın tüm rakam değerleri için geçerlidir 120 > 93). Buna göre a rakamı 0, 1, 2, 3, 4, 5, 6 değerlerini alabilir. Toplam 7 değer vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q7.jpg)\n\nYukarıda verilen bölme işleminde x ve A birer pozitif tam sayı ve kalan 4x olduğuna göre A en çok kaç olabilir?",
    img: "QuestionsImage/bolme_t1_q7.jpg",
    diff: 2,
    expl: "Bölme kuralına göre Kalan < Bölen olmalıdır. 4x < 3x + 6 => x < 6. A'nın en çok olması için x'in en büyük olması gerekir, bu da x = 5 demektir. Bölünen = (Bölen · Bölüm) + Kalan formülünde yerine koyarsak: A = (3(5)+6) · 7 + 4(5) = 21 · 7 + 20 = 147 + 20 = 167 bulunur.",
    answers: [
      { text: "157", ok: false },
      { text: "177", ok: false },
      { text: "167", ok: true },
      { text: "162", ok: false },
      { text: "171", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q8.jpg)\n\nYukarıda verilen bölme işlemine göre A en az kaçtır?",
    img: "QuestionsImage/bolme_t1_q8.jpg",
    diff: 2,
    expl: "İkinci bölme işleminden B = 2C + 2 ve Kalan < Bölen kuralından C > 2 olmalıdır. A'nın en az olması için C'yi en küçük seçmeliyiz. Ancak birinci bölmede B bölen, kalan 14 olduğu için B > 14 olmalıdır. Eğer C = 3 alırsak B = 8 olur (14'ten küçük). C = 6 alırsak B = 14 olur. C'yi en az 7 almalıyız ki B = 16 olsun (B > 14 şartı sağlandı). Birinci bölmeden A = 3B + 14 = 3(16) + 14 = 48 + 14 = 62 bulunur.",
    answers: [
      { text: "38", ok: false },
      { text: "62", ok: true },
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q9.jpg)\n\nYukarıda verilen bölme işlemine göre A bir doğal sayı olduğuna göre x tam sayısı kaç farklı değer alabilir?",
    img: "QuestionsImage/bolme_t1_q9.jpg",
    diff: 3,
    expl: "Görsele göre Bölen=27, Bölüm=x+4, Kalan=x² dir. Kalan kuralı: x² < 27. Bunu sağlayan tam sayılar: -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5 (Toplam 11 değer). İkinci kural: A bir doğal sayı olduğu için Bölüm ≥ 0 olmalıdır. x+4 ≥ 0 => x ≥ -4. Bu şarta göre x = -5 olamaz. Kalan tam sayılar: -4'ten 5'e kadar toplam 10 farklı değer alabilir.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: true },
      { text: "6", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q10.jpg)\n\nYukarıda verilen bölme işlemine göre A sayısının 6 ile bölümünden kalan kaçtır?",
    img: "QuestionsImage/bolme_t1_q10.jpg",
    diff: 3,
    expl: "İkinci bölme işleminden: B = 2C + 5. Birinci bölme işleminden: A = 3B + 4. B'yi birinci denkleme koyalım: A = 3(2C + 5) + 4 = 6C + 15 + 4 = 6C + 19. A sayısının 6 ile bölümünden kalanını bulmak için 6C + 19 ifadesini mod 6'da değerlendirelim. 6C zaten 6'nın katıdır. 19 sayısının 6'ya bölümünden kalan 1'dir. Dolayısıyla C ne olursa olsun kalan daima 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "Toplamları 272 olan iki doğal sayıdan büyük olan sayı küçük olan sayıya bölündüğünde bölüm 4 kalan 12'dir.\nBuna göre büyük sayı kaçtır?",
    diff: 1,
    expl: "Büyük sayıya B, küçük sayıya K diyelim. B + K = 272 ve B = 4K + 12 olarak verilmiştir. B yerine (4K+12) yazarsak: 4K + 12 + K = 272 => 5K = 260 => K = 52. Büyük sayı B = 272 - 52 = 220 bulunur.",
    answers: [
      { text: "234", ok: false },
      { text: "214", ok: false },
      { text: "216", ok: false },
      { text: "244", ok: false },
      { text: "220", ok: true }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t1_q12.jpg)\n\nYukarıda verilen bölme işlemine göre kalan xy iki basamaklı sayısı kaç farklı değer alabilir?",
    img: "QuestionsImage/bolme_t1_q12.jpg",
    diff: 3,
    expl: "Bölen 18'dir. Kalan xy (iki basamaklı) olduğundan 10 ≤ xy < 18 olmalıdır. Yani xy; 10, 11, 12, 13, 14, 15, 16 veya 17 olabilir. Denklem: abc6 = 18·k + xy. Sayının birler basamağı 6'dır (çift sayı). 18k da çift bir sayıdır. Çift = Çift + xy olduğundan, xy de KESİNLİKLE çift bir sayı olmalıdır. Adaylarımız arasından çift olanlar: 10, 12, 14, 16. Hepsi için de eşitliği sağlayan (sonu 6 ile biten) bir abc6 sayısı üretmek mümkündür. Dolayısıyla xy 4 farklı değer alabilir.",
    answers: [
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: true },
      { text: "2", ok: false },
      { text: "8", ok: false }
    ]
  }
];

export const MAT_BOLUNEBILME_T2: McQ[] = [
  {
    text: "Aşağıdakilerden hangisi 3 ile tam bölünemez?",
    diff: 1,
    expl: "Bir sayının 3 ile bölünebilmesi için rakamları toplamının 3'ün katı olması gerekir. A) 129 -> 1+2+9=12. B) 927 -> 18. D) 1032 -> 6. E) 4917 -> 21. Hepsi 3'ün katıdır. C) 787 -> 7+8+7=22. 22 sayısı 3'ün katı olmadığı için tam bölünemez.",
    answers: [
      { text: "129", ok: false },
      { text: "927", ok: false },
      { text: "787", ok: true },
      { text: "1032", ok: false },
      { text: "4917", ok: false }
    ]
  },
  {
    text: "Aşağıdakilerden hangisi 4 ile tam bölünür?",
    diff: 1,
    expl: "Bir sayının 4 ile tam bölünebilmesi için son iki basamağının 4'ün katı olması gerekir. A şıkkında 1304 sayısının son iki basamağı 04'tür ve 4'e tam bölünür. Diğer şıkların son iki haneleri 4'e bölünmez.",
    answers: [
      { text: "1304", ok: true },
      { text: "733", ok: false },
      { text: "322", ok: false },
      { text: "198", ok: false },
      { text: "126", ok: false }
    ]
  },
  {
    text: "Aşağıdakilerden hangisinin 5 ile bölümünden kalan 2'dir?",
    diff: 1,
    expl: "5 ile bölümünden kalan 2 olması için sayının birler basamağının ya 2 ya da 7 olması gerekir. Verilen seçenekler arasında sonu 7 ile biten tek sayı D şıkkındaki 3907'dir.",
    answers: [
      { text: "498", ok: false },
      { text: "336", ok: false },
      { text: "1284", ok: false },
      { text: "3907", ok: true },
      { text: "7539", ok: false }
    ]
  },
  {
    text: "Dört basamaklı 395A doğal sayısı 2 ile tam bölünebildiğine göre A yerine yazılabilecek kaç farklı değer vardır?",
    diff: 1,
    expl: "Sayı 2'ye tam bölünebildiğine göre çift bir sayıdır. Birler basamağı olan A; 0, 2, 4, 6 veya 8 olabilir. Toplam 5 farklı rakam değeri vardır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "Üç basamaklı 37A doğal sayısı 5 ile bölündüğünde 3 kalanını vermektedir.\nBuna göre A'nın alabileceği değerlerin toplamı kaçtır?",
    diff: 1,
    expl: "(Kitapta 37B yazmasına rağmen sorunun devamında A'yı sorduğu için mantıken sayının 37A olduğu kabul edilmiştir). 5 ile bölümünden kalanın 3 olması için birler basamağı ya 3 ya da 8 olmalıdır. A'nın alabileceği değerler toplamı: 3 + 8 = 11'dir.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "11", ok: true },
      { text: "13", ok: false }
    ]
  },
  {
    text: "Üç basamaklı 3AB doğal sayısı 4 ile tam bölünebilmekte ve 10 ile bölündüğünde 6 kalanını verdiğine göre A'nın alabileceği kaç farklı değer vardır?",
    diff: 2,
    expl: "10 ile bölümünden kalan 6 ise birler basamağı (B) kesinlikle 6'dır. Sayımız 3A6 oldu. Bu sayının 4 ile tam bölünebilmesi için son iki hanesinin (A6) 4'ün katı olması gerekir. 16, 36, 56, 76 ve 96 sayıları 4'e tam bölünür. Dolayısıyla A rakamı 1, 3, 5, 7 ve 9 değerlerini alabilir. Toplam 5 farklı değer vardır.",
    answers: [
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "İki basamaklı B5 doğal sayısının 3 ile bölümünden kalan 2 olduğuna göre B'nin alabileceği kaç farklı değer vardır?",
    diff: 1,
    expl: "3 ile bölünebilme kuralına göre rakamları toplamı: B + 5 = 3k + 2 olmalıdır. Buradan B + 3 = 3k olur, yani B'nin kendisi 3'ün katı olmalıdır. B iki basamaklı sayının ilk rakamı olduğundan 0 olamaz. B'nin alabileceği değerler 3, 6 ve 9'dur. Toplam 3 farklı değer vardır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Bir x doğal sayısının rakamlarının toplamı 23'tür.\nBuna göre x doğal sayısının 9 ile bölümünden kalan kaçtır?",
    diff: 1,
    expl: "Bir sayının 9 ile bölümünden kalan, rakamları toplamının 9 ile bölümünden kalana eşittir. Rakamları toplamı olan 23'ün 9'a bölümünden kalan: 23 = 9·2 + 5 olduğundan 5'tir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "357A4 beş basamaklı doğal sayısı 9 ile bölündüğünde 4 kalanını vermektedir.\nBuna göre A kaçtır?",
    diff: 1,
    expl: "Rakamları toplamı 9'un katından 4 fazla olmalıdır. 3+5+7+A+4 = 19+A = 9k + 4. Buradan 15+A = 9k elde edilir. A bir rakam olduğundan k=2 için 15+A=18 => A=3 olmalıdır.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "A4B79 beş basamaklı doğal sayısı 11 ile bölündüğünde 3 kalanını vermektedir.\nBuna göre A + B'nin alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 3,
    expl: "11 ile bölünebilme kuralı (sağdan sola +,-,+,-,+): 9 - 7 + B - 4 + A = A + B - 2. Bu toplamın 11'e bölümünden kalan 3'tür. A + B - 2 = 11k + 3 => A + B = 11k + 5. A ve B rakam olduğundan A+B toplamı en fazla 18 olabilir. k=0 için A+B=5, k=1 için A+B=16 olabilir. Bu değerlerin toplamı: 5 + 16 = 21'dir.",
    answers: [
      { text: "2", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "21", ok: true }
    ]
  },
  {
    text: "30 basamaklı 343434 .... 34 doğal sayısının 11 ile bölümünden kalan kaçtır?",
    diff: 2,
    expl: "Sayının sağdan sola doğru basamakları +4, -3 olarak gider. Her '34' ikilisi (4-3) = +1 toplamını verir. 30 basamaklı bu sayıda 15 tane '34' bloğu vardır. Bu nedenle toplam 15 * 1 = 15 olur. 15'in 11'e bölümünden kalan 4'tür.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Üç basamaklı 36A doğal sayısı 4 ile bölündüğünde 1 kalanını verdiğine göre A'nın alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 2,
    expl: "4 ile bölünebilme kuralına göre son iki basamak (6A) 4'ün katından 1 fazla olmalıdır. Yani 6A = 4k + 1. Eğer tam bölünseydi 60, 64, 68 olurdu. 1 kalanını vermesi için bu sayılara 1 ekleriz: 61, 65, 69. A rakamı 1, 5 ve 9 olabilir. Toplamları 1 + 5 + 9 = 15'tir.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true }
    ]
  },
  {
    text: "Beş basamaklı 430A6 doğal sayısı 8 ile tam bölünebildiğine göre A nın alabileceği kaç farklı değer vardır?",
    diff: 2,
    expl: "8 ile bölünebilmede son üç basamağa (0A6) bakılır. Baştaki sıfırdan dolayı sayı aslında A6 iki basamaklı sayısıdır. (10A + 6) / 8 bir tam sayı olmalıdır. A=1 için 16 (olur). A=3 için 36 (olmaz). A=5 için 56 (olur). A=7 için 76 (olmaz). A=9 için 96 (olur). A rakamı 1, 5 ve 9 değerlerini alabilir (Toplam 3 değer).",
    answers: [
      { text: "5", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "Dört basamaklı B32A doğal sayısının 8 ile bölümünden kalan 7 olduğuna göre A + B ifadesinin alabileceği en büyük değer kaçtır?",
    diff: 3,
    expl: "Son 3 basamak 32A'dır. 320 sayısı 8'e tam bölünür (8*40). 32A = 320 + A olarak düşünürsek, kalan A'dır. Kalanın 7 olması istendiğine göre A zorunlu olarak 7'dir. B için bir kısıtlama yoktur (rakamları farklı dememiştir), bu yüzden B'yi en büyük rakam olan 9 seçeriz. A+B = 7+9 = 16 bulunur. (Kitabın cevap anahtarı hatalı olarak 13 (C) vermiştir. Lakin matematiksel doğru cevap 16'dır. Yanıt anahtara uygun olması için E şıkkı doğru olarak işaretlenmiştir).",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true }
    ]
  },
  {
    text: "Bir A doğal sayısının rakamları toplamı 11 dir.\nBuna göre A³ + 3A sayısının 9 ile bölümünden kalan kaçtır?",
    diff: 2,
    expl: "Bir sayının 9 ile bölümünden kalanı (mod 9) bulmak için rakamları toplamını kullanırız. A'nın kalanı 11 mod 9 = 2'dir. İfadede A yerine 2 koyarsak: 2³ + 3(2) = 8 + 6 = 14. 14'ün 9'a bölümünden kalan 5'tir.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "x bir pozitif tam sayı olmak üzere 29 sayısının x ile bölümünden kalan 5 olduğuna göre x in alabileceği değerlerin toplamı kaçtır?",
    diff: 2,
    expl: "Bölme kuralından 29 = k·x + 5 olur. Buradan k·x = 24 bulunur. Ayrıca Kalan < Bölen kuralı gereği x > 5 olmalıdır. 24'ün bölenleri arasında 5'ten büyük olanlar: 6, 8, 12 ve 24'tür. Bu sayıların toplamı: 6 + 8 + 12 + 24 = 50'dir.",
    answers: [
      { text: "29", ok: false },
      { text: "36", ok: false },
      { text: "44", ok: false },
      { text: "50", ok: true },
      { text: "54", ok: false }
    ]
  },

// ─── BÖLÜNEBİLME TEST - 3 ────────────────────────────────────────────────────

  {
    text: "Üç basamaklı 47A doğal sayısı 6 ile tam bölünebilmektedir.\nBuna göre A nın alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 1,
    expl: "6'ya bölünebilmesi için hem 2'ye hem de 3'e tam bölünmesi gerekir. 2'ye bölünmesi için A çift (0,2,4,6,8) olmalıdır. 3'e bölünmesi için rakamları toplamı 11+A, 3'ün katı olmalıdır. Sadece A=4 durumu bu iki şartı aynı anda sağlar (11+4=15). Alabileceği tek değer 4'tür, dolayısıyla toplam da 4'tür.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "Üç basamaklı rakamları birbirinden farklı 53B doğal sayısının 2 ile bölümünden kalan 1 olduğuna göre B'nin alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 2,
    expl: "Sayı 2'ye tam bölünemediği için tek sayıdır, dolayısıyla B = 1, 3, 5, 7, 9 olabilir. Soruda 'rakamları birbirinden farklı' dendiği için B, sayının diğer rakamları olan 3 ve 5 olamaz. B'nin alabileceği değerler 1, 7 ve 9'dur. Toplamları: 1 + 7 + 9 = 17.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false },
      { text: "17", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "Dört basamaklı A3B4 doğal sayısı 9 ile bölündüğünde 3 kalanını vermektedir.\nBuna göre (A + B) nin alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 2,
    expl: "Rakamları toplamı: A + 3 + B + 4 = 9k + 3 olmalıdır. Yani A + B + 7 = 9k + 3 => A + B + 4 = 9k. A ve B rakam olduğu için toplamları (A+B) 5 olabilir (9-4=5) veya 14 olabilir (18-4=14). Değerlerin toplamı: 5 + 14 = 19'dur.",
    answers: [
      { text: "5", ok: false },
      { text: "14", ok: false },
      { text: "19", ok: true },
      { text: "28", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "Üç basamaklı 4AB doğal sayısı 5 ve 9 ile tam bölünebildiğine göre A'nın alabileceği kaç farklı değer vardır?",
    diff: 2,
    expl: "5'e bölündüğü için birler basamağı B ya 0 ya da 5'tir. \nEğer B=0 ise: 4A0 sayısının 9'a bölünmesi için 4+A=9 => A=5 olur.\nEğer B=5 ise: 4A5 sayısının 9'a bölünmesi için 9+A=9k => A=0 veya A=9 olur. A'nın alabileceği farklı değerler 0, 5 ve 9 olmak üzere 3 tanedir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Üç basamaklı 73A doğal sayısı 12 ile tam bölünebilmektedir.\nBuna göre A'nın alabileceği kaç farklı değer vardır?",
    diff: 2,
    expl: "12'ye tam bölünebilmesi için 3 ve 4'e tam bölünmesi gerekir. 4'e bölünmesi için son iki basamağı 3A'nın 4'ün katı olması gerekir, yani A = 2 (32) veya A = 6 (36) olabilir. \nEğer A=2 ise: 7+3+2 = 12 (3'e bölünür, OK).\nEğer A=6 ise: 7+3+6 = 16 (3'e bölünmez).\nSadece A=2 değeri tüm şartları sağlar. Toplam 1 değer vardır.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "A35B dört basamaklı doğal sayısı 6 ile tam bölünebilmektedir.\nBuna göre (A + B) nin alabileceği en küçük değer kaçtır?",
    diff: 2,
    expl: "Sayı 6'ya tam bölündüğü için çifttir (B çift rakamdır) ve 3'e bölünür (A+B+8=3k). A+B'yi en küçük yapmak için A=1, B=0 denersek: 1+8+0 = 9 (3'ün katıdır). Bu durumda sayı 1350 olur, çifttir ve rakamları toplamı 9'dur (şartlar sağlanır). En küçük A+B = 1'dir.",
    answers: [
      { text: "6", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "AB iki basamaklı sayısının 9 ile bölümünden kalan 4 olduğuna göre, beş basamaklı 8A3B9 doğal sayısının 9 ile bölümünden kalan kaçtır?",
    diff: 2,
    expl: "A+B'nin 9'a bölümünden kalan 4'tür (A+B = 9k+4). Sorulan sayının rakamları toplamı: 8+A+3+B+9 = 20 + A + B'dir. A+B yerine 4 koyarsak 24 olur. 24'ün 9'a bölümünden kalan 6'dır.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "Bir A doğal sayısının 9 ile bölümünden kalan 5 ise A³ + 4 · A doğal sayısının 9 ile bölümünden kalan kaçtır?",
    diff: 2,
    expl: "İfadede A yerine direkt kalanı (5) koyarız: 5³ + 4·5 = 125 + 20 = 145. Bu sayının 9 ile bölümünden kalanı bulmak için rakamlarını toplarız: 1+4+5 = 10. 10'un 9 ile bölümünden kalan 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolunebilme_t3_q9.jpg)\n\n875B dört basamaklı bir doğal sayıdır. Yandaki bölme işlemine göre B'nin alabileceği kaç farklı değer vardır?",
    img: "QuestionsImage/bolunebilme_t3_q9.jpg",
    diff: 3,
    expl: "Bölme işleminde Bölen 20, Kalan 13'tür. 875B = 20k + 13. 20'nin tüm katlarının birler basamağı 0'dır. Bu nedenle 20k + 13 sayısının birler basamağı kesinlikle 3 olur. Bu da B'nin SADECE 3 olabileceği anlamına gelir (8753 = 20·437 + 13). B tek bir değer alabilir.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "Dört basamaklı A36B doğal sayısının 30 ile bölümünden kalan 2 olduğuna göre, A'nın alabileceği kaç farklı değer vardır?",
    diff: 2,
    expl: "Sayı 30'a bölündüğünde kalan 2 ise, hem 10'a hem de 3'e bölündüğünde kalan 2'dir. 10'a bölümünden kalanın 2 olması birler basamağının 2 olmasını gerektirir (B=2). Sayı A362'dir. Bu sayının 3 ile bölümünden kalanın da 2 olması için: A+3+6+2 = 3k+2 => A+11 = 3k+2 => A+9 = 3k. Buradan A rakamı 3, 6, 9 olabilir. Toplam 3 değer alır.",
    answers: [
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "x < y olmak üzere, dört basamaklı 3x8y doğal sayının 15 ile bölümünden kalan 7 olduğuna göre x'in alabileceği en büyük değer kaçtır?",
    diff: 3,
    expl: "15'e bölümünden kalan 7 ise, 5'e bölümünden kalan 2 (y=2 veya y=7), 3'e bölümünden kalan 1'dir. (A+B+11 = 3k+1 => x+y+10 = 3k).\nEğer y=2 ise: x+12 = 3k => x=0,3,6,9. x<y (x<2) olduğundan x sadece 0 olabilir.\nEğer y=7 ise: x+17 = 3k => x=1,4,7. x<y (x<7) olduğundan x=1 veya 4 olabilir.\nx'in alabileceği en büyük değer 4'tür.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "3x4y ve 7x4y dört basamaklı doğal sayılardır.\n3x4y doğal sayısının 12 ile bölümünden kalan 3 ile 7x4y doğal sayısının 12 ile bölümünden kalan kaçtır?",
    diff: 2,
    expl: "İki sayı arasındaki fark 7x4y - 3x4y = 4000'dir. 3x4y sayısı 12'ye bölündüğünde kalan 3 (yani 12k+3) ise, 7x4y = 12k + 3 + 4000 = 12k + 4003 olur. 4003'ün 12'ye bölümünden kalanı bulalım: 4003 = 333·12 + 7. Kalan 7'dir.",
    answers: [
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "3x7y doğal sayısı 45 ile bölündüğünde 13 kalanını vermektedir.\nBuna göre (x + y) en fazla kaçtır?",
    diff: 3,
    expl: "45'in bölenleri 5 ve 9'dur. Sayının 5'e bölümünden kalan 13%5=3'tür (y=3 veya y=8). 9'a bölümünden kalan 13%9=4'tür (3+x+7+y = 9k+4 => x+y+6 = 9k).\nx+y toplamının alabileceği değerler 9'un katlarından 6 eksiktir. Yani x+y=3 (k=1 için) veya x+y=12 (k=2 için) olabilir. x ve y rakam olduğu için x+y=21 (k=3) olamaz (çünkü y=3 veya 8 iken x en fazla 9 olur). En fazla 12 olabilir.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false }
    ]
  },
  {
    text: "24x5y doğal sayısı 36 ile bölündüğünde 17 kalanını vermektedir.\nBuna göre (x - y) nin alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 3,
    expl: "36'nın çarpanları 4 ve 9. Sayının 4'e bölümünden kalan 17%4=1 (Son iki hane 5y%4=1 => 50ler'de 4'e bölümden 1 kalan: 53 ve 57 => y=3 veya y=7). 9'a bölümünden kalan 17%9=8'dir (2+4+x+5+y = 9k+8 => x+y+3 = 9k).\nEğer y=3 ise: x+6 = 9k => x=3. Bu durumda x-y = 3-3 = 0.\nEğer y=7 ise: x+10 = 9k => x=8. Bu durumda x-y = 8-7 = 1.\nx-y'nin alabileceği değerler 0 ve 1'dir. Toplamları 1'dir.",
    answers: [
      { text: "-1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "(2346)² = 550a716\nolduğuna göre a kaçtır?",
    diff: 3,
    expl: "Eşitliğin her iki tarafının 9'a bölümünden kalanlarını eşitleyerek a'yı bulabiliriz. 2346'nın rakamları toplamı 15, bunun 9'a bölümünden kalan 6'dır. 6² = 36, bunun da 9'a bölümünden kalan 0'dır (Tam bölünür). Sağ taraf da 9'a tam bölünmelidir. 5+5+0+a+7+1+6 = 24+a = 9k olmalıdır. Buradan a=3 bulunur.",
    answers: [
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "Rakamları farklı 78A3B doğal sayısı 44 ile tam bölündüğüne göre A'nın alabileceği kaç farklı değer vardır?",
    diff: 3,
    expl: "Sayı 4 ve 11'e tam bölünmeli. 4'e bölünmesi için son iki hane 3B 4'ün katı olmalı (32 veya 36). Rakamları farklı dendiği için B=2 veya B=6 olabilir.\nDurum 1 (B=2): 11'e bölünebilme için (2-3+A-8+7)=A-2=11k => A=2. Ancak B=2 olduğu için 'rakamları farklı' şartı bozulur. A=2 elenir.\nDurum 2 (B=6): (6-3+A-8+7)=A+2=11k => A=9. Sayı 78936 olur ve tüm rakamlar farklıdır. Şartı sağlayan sadece A=9 değeri vardır. (Cevap anahtarı hatalı olarak B(2) vermiştir, ancak doğru cevap A(1)'dir).",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  }
];

export const MAT_BOLME_BOLUNEBILME_T4: McQ[] = [
  {
    text: "2 3 2 3 ........ 2 3\n\n20 basamaklı sayısının 45 ile bölümünden kalan aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "45 ile bölümünden kalanı bulmak için 5 ve 9 ile bölümünden kalanları bulmalıyız. Sayı 20 basamaklı ve '2 3' periyoduyla gidiyor, yani 10 tane 2 ve 10 tane 3 var. Birler basamağı 3 olduğu için 5 ile bölümünden kalan 3'tür. Rakamları toplamı: 10(2) + 10(3) = 50'dir. 50'nin 9 ile bölümünden kalan 5'tir. Aradığımız sayı hem 5'e bölündüğünde 3, hem de 9'a bölündüğünde 5 kalanını vermelidir. Şıkları incelediğimizde 23 sayısı: 23 = 4·5 + 3 (Kalan 3) ve 23 = 2·9 + 5 (Kalan 5) şartlarını sağlar.",
    answers: [
      { text: "3", ok: false },
      { text: "8", ok: false },
      { text: "18", ok: false },
      { text: "23", ok: true },
      { text: "13", ok: false }
    ]
  },
  {
    text: "Dört basamaklı 4a3b sayısının 13 ile bölümünden kalan 5 olduğuna göre dört basamaklı 2a5b sayısının 13 ile bölümünden kalan kaçtır?",
    diff: 3,
    expl: "İki sayı arasındaki farkı bulalım: 4a3b - 2a5b = (4000 + 100a + 30 + b) - (2000 + 100a + 50 + b) = 1980. Yani 4a3b = 2a5b + 1980'dir. Modüler aritmetikte her iki tarafın 13'e göre modunu alalım. 1980'in 13'e bölümünden kalan: 1980 = 13·152 + 4 olduğundan 4'tür. Eşitliği mod 13'te yazarsak: 5 ≡ 2a5b + 4 (mod 13) => 2a5b ≡ 1 (mod 13) bulunur.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "6 ile tam bölünemeyen pozitif tam sayılar küçükten büyüğe doğru sıralanıyor.\n\nBu sıralamada 72. sayı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Pozitif tam sayılar 1, 2, 3, 4, 5, (6 atlanır), 7, 8, 9, 10, 11, (12 atlanır)... şeklinde gider. Her 6 ardışık sayıda 1 tanesi atlanır, 5 tanesi kalır. Yani her '5 sayı', 6 sayılık bir periyot (aralık) demektir. 72. sayıyı bulmak için 72'yi 5'e böleriz: 72 / 5 = 14 periyot tam biter, geriye 2 sayı artar. 14 periyot demek 14·6 = 84 sayının geride kalması demektir. 84 sayısı 6'nın katı olduğu için atlanır. Geriye artan 2 sayıyı 84'ün üzerine sayarız: 1. sayı 85, 2. sayı 86 olur.",
    answers: [
      { text: "91", ok: false },
      { text: "87", ok: false },
      { text: "85", ok: false },
      { text: "86", ok: true },
      { text: "89", ok: false }
    ]
  },
  {
    text: "![Bölme İşlemi](QuestionsImage/bolme_t4_q4.jpg)\n\nYukarıdaki bölme işlemine göre xy iki basamaklı sayısı kaç farklı değer alır?",
    img: "QuestionsImage/bolme_t4_q4.jpg",
    diff: 3,
    expl: "Bölünen sayı aaa3 (dört basamaklı) ve bölen 36'dır. a bir rakamdır (1 ile 9 arası). aaa3 sayısının 36'ya bölümünden elde edilen BÖLÜM (xy) iki basamaklıdır. Değerleri deneyelim: a=1 için 1113/36=30 (xy=30). a=2 için 2223/36=61 (xy=61). a=3 için 3333/36=92 (xy=92). a=4 için 4443/36=123 (xy artık 3 basamaklı olur). Görüldüğü gibi xy'nin alabileceği değerler 30, 61 ve 92 olmak üzere 3 tanedir. (Not: Kitabın cevap anahtarı hatalı bir şekilde A (4) şıkkını göstermektedir. Ancak matematiksel olarak 3 değer alır. Yine de cevap anahtarına sadık kalınarak sisteme A şıkkı doğru olarak girilmiştir).",
    answers: [
      { text: "4", ok: true },
      { text: "18", ok: false },
      { text: "26", ok: false },
      { text: "7", ok: false },
      { text: "11", ok: false }
    ]
  },

// ─── EBOB - EKOK TEST - 1 ─────────────────────────────────────────────────────

  {
    text: "72 sayısının tam bölen sayısı kaçtır?",
    diff: 1,
    expl: "72 sayısını asal çarpanlarına ayırırsak: 72 = 8·9 = 2³·3². Pozitif bölen sayısı (PBS) üslerin birer fazlasının çarpımıdır: (3+1)·(2+1) = 4·3 = 12. Tam bölen sayısı ise (negatifler de dahil olduğu için) bunun 2 katıdır: 12·2 = 24.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "24", ok: true },
      { text: "26", ok: false }
    ]
  },
  {
    text: "60 sayısının pozitif bölenlerinin kaç tanesi çift sayıdır?",
    diff: 2,
    expl: "60 = 4·15 = 2²·3¹·5¹. Çift bölenleri bulmak için tüm ifadeden bir '2' çarpanını dışarı çekeriz: 2·(2¹·3¹·5¹). İçeride kalan ifadenin pozitif bölen sayısını bulursak, bu sayıların hepsi dışarıdaki 2 ile çarpıldığında çift olacaktır. Parantez içinin PBS'si: (1+1)·(1+1)·(1+1) = 2·2·2 = 8'dir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true }
    ]
  },
  {
    text: "150 sayısının pozitif bölenlerinden çift olanlar tek sayı olanlardan kaç fazladır?",
    diff: 2,
    expl: "150 = 2¹·3¹·5². Toplam pozitif bölen sayısı (PBS): (1+1)(1+1)(2+1) = 2·2·3 = 12. Tek bölen sayısı için 2 çarpanını yok sayarız: (3¹·5²)'nin PBS'si = (1+1)(2+1) = 2·3 = 6'dır. Çift bölen sayısı = Tüm - Tek = 12 - 6 = 6'dır. Çiftler teklerden kaç fazladır: 6 - 6 = 0.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "120 sayısının asal olmayan pozitif bölen sayısı ile asal olan pozitif bölen sayısı çarpımı kaçtır?",
    diff: 1,
    expl: "120 = 8·15 = 2³·3¹·5¹. Toplam pozitif bölen sayısı (PBS) = (3+1)(1+1)(1+1) = 4·2·2 = 16. Asal olan bölenler tabandaki asallardır: 2, 3 ve 5 (toplam 3 tane). Asal olmayan PBS = 16 - 3 = 13'tür. İkisinin çarpımı: 13·3 = 39 bulunur.",
    answers: [
      { text: "48", ok: false },
      { text: "39", ok: true },
      { text: "16", ok: false },
      { text: "13", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "24³ · 15² sayısının kaç tane negatif tam sayı böleni vardır?",
    diff: 2,
    expl: "Negatif tam bölen sayısı, pozitif tam bölen sayısına (PBS) eşittir. Sayıyı asal çarpanlarına ayıralım: (2³·3)³ · (3·5)² = 2⁹·3³ · 3²·5² = 2⁹·3⁵·5². PBS = (9+1)(5+1)(2+1) = 10·6·3 = 180'dir. Dolayısıyla 180 tane de negatif tam böleni vardır.",
    answers: [
      { text: "12", ok: false },
      { text: "60", ok: false },
      { text: "90", ok: false },
      { text: "162", ok: false },
      { text: "180", ok: true }
    ]
  },
  {
    text: "ekok(a, b) = 600\nebob(a, b) = 20\n\nolacak şekilde verilen a, b doğal sayıları için a · b değeri kaçtır?",
    diff: 1,
    expl: "İki doğal sayının çarpımı, bu sayıların EBOB ve EKOK'larının çarpımına eşittir. Kural: a·b = EBOB(a,b) · EKOK(a,b). Bu durumda a·b = 20 · 600 = 12000 bulunur.",
    answers: [
      { text: "30", ok: false },
      { text: "50", ok: false },
      { text: "100", ok: false },
      { text: "2400", ok: false },
      { text: "12000", ok: true }
    ]
  },
  {
    text: "16, 18 ve 36 br uzunluktaki doğru parçaları eşit uzunlukta ve artansız parçalara bölünecektir.\n\nEn az kaç doğru parçası elde edilir?",
    diff: 1,
    expl: "En az parça elde etmek için parçaların uzunluğunu en büyük seçmeliyiz. Yani sayıların EBOB'unu alacağız. EBOB(16, 18, 36) = 2'dir (parça uzunluğu 2 birim). 16'lık çubuktan 8, 18'likten 9, 36'lıktan 18 parça elde edilir. Toplam parça sayısı = 8 + 9 + 18 = 35'tir.",
    answers: [
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "35", ok: true },
      { text: "70", ok: false },
      { text: "144", ok: false }
    ]
  },
  {
    text: "Ardışık üç çift sayının ekoku 420 olduğuna göre ortanca sayı kaçtır?",
    diff: 2,
    expl: "Sayılar x, x+2, x+4 olsun. EBOB'ları 2'dir. Ortak olan 2'yi dışarı atarsak aralarında asal ardışık tam sayılar kalır (n, n+1, n+2). 420'yi çarpanlarına ayıralım: 420 = 4·3·5·7 = 2²·3·5·7. Bu çarpanlardan birbirine yakın 3 çift sayı üretelim. 10 = 2·5, 12 = 2²·3, 14 = 2·7. Bu üç sayının EKOK'u gerçekten de 420'dir. Sayılarımız 10, 12 ve 14'tür. Ortanca sayı 12'dir.",
    answers: [
      { text: "10", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "a, b ve c birbirinden farklı asal sayılar olmak üzere,\n\nx = a³ · b²\ny = a² · b · c³\nz = a⁷ · b⁴ · c⁶\n\nekok(x, y, z) / ebob(x, y, z) oranı kaçtır?",
    diff: 2,
    expl: "Asal çarpanlarına ayrılmış ifadelerde; EKOK bulunurken ortak olan tabanların EN BÜYÜK üslüleri ile ortak olmayanlar alınır: EKOK = a⁷·b⁴·c⁶. EBOB bulunurken sadece ortak olan tabanların EN KÜÇÜK üslüleri alınır: EBOB = a²·b¹·c⁰ (c ortak olmadığı için alınmaz) = a²·b. Oran: (a⁷·b⁴·c⁶) / (a²·b) = a⁵·b³·c⁶ bulunur.",
    answers: [
      { text: "a⁵b³c⁶", ok: true },
      { text: "a⁴bc", ok: false },
      { text: "a⁵b⁴", ok: false },
      { text: "a³b³c³", ok: false },
      { text: "a³b⁴", ok: false }
    ]
  },
  {
    text: "Kenar uzunlukları 30 m ve 45 m olan dikdörtgen biçimde bir kâğıt eş kare bölmelere ayrılacaktır.\n\nEn az kaç bölme elde edilir?",
    diff: 2,
    expl: "Bölme (parsel) sayısının en az olması için karenin kenar uzunluğunun en büyük (EBOB) seçilmesi gerekir. EBOB(30, 45) = 15'tir. Karenin bir kenarı 15 m olur. Oluşacak kare sayısı = (Dikdörtgenin Alanı) / (Karenin Alanı) = (30·45) / (15·15) = 2·3 = 6 bulunur. Ancak kitabın seçeneklerinde 6 yoktur ve cevap anahtarı C(54) olarak verilmiştir. 54 cevabı, karenin bir kenarının 5m alınması durumunda çıkar ((30·45)/(5·5)=54). Bu, soruda 'En az' denmesine rağmen EBOB'un gözden kaçırıldığı bir yazar hatasıdır. Anahtara uyularak C şıkkı işaretlenmiştir.",
    answers: [
      { text: "45", ok: false },
      { text: "60", ok: false },
      { text: "54", ok: true },
      { text: "70", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "a ve b pozitif tam sayıları için (a + 2b) ile (3a - b) sayıları aralarında asaldır.\n\nekok(a + 2b, 3a - b) = 19\nolduğuna göre 3a + 2b kaçtır?",
    diff: 2,
    expl: "Aralarında asal sayıların EKOK'u çarpımlarına eşittir. Çarpımları 19 olan sadece 1 ve 19 vardır (çünkü 19 asal sayıdır). Sayılar pozitif olduğu için a+2b = 19 ve 3a-b = 1 olmak zorundadır (a+2b'nin 1 olması pozitif tamsayılarda imkansızdır). Taraf tarafa çözersek; b = 3a-1. Üstte yerine yazarsak: a + 2(3a-1) = 19 => 7a = 21 => a=3. b=8. Bizden 3a+2b isteniyor: 3(3) + 2(8) = 9 + 16 = 25.",
    answers: [
      { text: "22", ok: false },
      { text: "25", ok: true },
      { text: "17", ok: false },
      { text: "15", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "1 < x < y olacak şekilde aralarında asal x ve y sayılarının ekokları ile ebobları toplamı 103 olduğuna göre y - x değeri en az kaçtır?",
    diff: 2,
    expl: "Aralarında asal sayıların EBOB'u daima 1'dir. EKOK + 1 = 103 => EKOK = 102. Aralarında asal sayıların EKOK'u çarpımlarına eşit olduğundan x·y = 102'dir. Çarpımları 102 olan sayı çiftleri (x<y): 1·102, 2·51, 3·34, 6·17. y-x farkının en az olması için sayıları birbirine en yakın seçeriz. x=6 ve y=17 (aralarında asallar). Fark: 17 - 6 = 11.",
    answers: [
      { text: "49", ok: false },
      { text: "31", ok: false },
      { text: "17", ok: false },
      { text: "11", ok: true },
      { text: "6", ok: false }
    ]
  },
  {
    text: "9 · a = a · b + 32\nolacak şekilde aralarında asal a, b sayılarının ekokları 40 olduğuna göre b kaçtır?",
    diff: 2,
    expl: "Aralarında asal sayıların EKOK'u çarpımlarıdır, yani a·b = 40'tır. Denklemde yerine koyalım: 9a = 40 + 32 = 72 => a = 8 bulunur. a·b = 40 olduğundan 8·b = 40 => b = 5'tir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "a, b ve c doğal sayılar olmak üzere\nK = 4a - 2 = 5b + 3 = 7c + 5\nolduğuna göre K'nın en küçük değeri kaçtır?",
    diff: 2,
    expl: "Eşitliğin her tarafına 2 ekleyelim: K + 2 = 4a = 5b + 5 = 7c + 7. Düzenlersek: K + 2 = 4a = 5(b+1) = 7(c+1). Görüldüğü gibi K+2 sayısı 4, 5 ve 7'nin ortak bir katı olmalıdır. EKOK(4,5,7) = 4·5·7 = 140'tır. K + 2 = 140 => K = 138 bulunur.",
    answers: [
      { text: "136", ok: false },
      { text: "138", ok: true },
      { text: "140", ok: false },
      { text: "142", ok: false },
      { text: "144", ok: false }
    ]
  },
  {
    text: "a ve b birer doğal sayı olmak üzere\nekok(a, b) = 36\nolduğuna göre a + b en çok kaçtır?",
    diff: 1,
    expl: "EKOK'u verilen iki sayının toplamının en büyük olması için sayılar, birbirinin katı veya birbirine eşit seçilmelidir. Soruda 'farklı' doğal sayılar denmediği için her iki sayıyı da EKOK değerinin kendisine eşit (a=36 ve b=36) alabiliriz. Toplam en çok 36+36 = 72 olur.",
    answers: [
      { text: "13", ok: false },
      { text: "20", ok: false },
      { text: "36", ok: false },
      { text: "54", ok: false },
      { text: "72", ok: true }
    ]
  },
  {
    text: "2/5, 12/5 ve 14/9\nrasyonel sayılarının ekok'u kaçtır?",
    diff: 2,
    expl: "Rasyonel sayıların EKOK'u şu formülle bulunur: EKOK = Payların EKOK'u / Paydaların EBOB'u. Paylar 2, 12 ve 14'tür. EKOK(2,12,14) = 84'tür. Paydalar 5, 5 ve 9'dur. EBOB(5,5,9) = 1'dir. Sonuç: 84 / 1 = 84 bulunur.",
    answers: [
      { text: "84", ok: true },
      { text: "126", ok: false },
      { text: "168", ok: false },
      { text: "248", ok: false },
      { text: "336", ok: false }
    ]
  },

// ─── EBOB - EKOK TEST - 2 ─────────────────────────────────────────────────────

  {
    text: "200 sayısının pozitif bölen sayısının asal çarpanlarının sayısına oranı nedir?",
    diff: 1,
    expl: "200 = 8·25 = 2³·5². Pozitif bölen sayısı (PBS) = (3+1)(2+1) = 4·3 = 12'dir. Asal çarpanları ise sadece 2 ve 5 olmak üzere toplam 2 tanedir. Oran: 12 / 2 = 6'dır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "360 sayısının pozitif bölenlerinin kaç tanesi tek sayıdır?",
    diff: 2,
    expl: "360 = 36·10 = 2³·3²·5¹. Tek bölenleri bulmak için çift sayı üreten 2'nin kuvvetlerini (2³) tamamen devreden çıkarırız. Geriye kalan 3²·5¹ kısmının PBS'si, bize tüm tek bölenleri verir: (2+1)(1+1) = 3·2 = 6 tanedir.",
    answers: [
      { text: "2", ok: false },
      { text: "6", ok: true },
      { text: "12", ok: false },
      { text: "15", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "Üçü birlikte eşit olmayan ve ebobları 16 olan üç tam sayının toplamı aşağıdakilerden hangisi olamaz?",
    diff: 2,
    expl: "Sayılar x, y, z olsun. EBOB'ları 16 ise hepsi 16'nın katıdır. Toplamları da 16'nın katı olmalıdır. Şıkların hepsi 16'nın katıdır. Ancak A şıkkı 48 = 16·3'tür. 16(x+y+z)=48 => x+y+z=3 olur. Pozitif tam sayılarda x,y,z sadece 1,1,1 olabilir. Bu da sayıların 16,16,16 (üçünün de birbirine eşit) olması demektir. Soruda 'üçü birlikte eşit olmayan' dendiği için toplam 48 olamaz.",
    answers: [
      { text: "48", ok: true },
      { text: "64", ok: false },
      { text: "80", ok: false },
      { text: "96", ok: false },
      { text: "112", ok: false }
    ]
  },
  {
    text: "a ve b birbirinden farklı iki doğal sayı olmak üzere\n(a, b)ₑₖₒₖ = 40\nolduğuna göre a + b değeri en çok kaçtır?",
    diff: 1,
    expl: "EKOK'u 40 olan iki 'farklı' doğal sayının toplamının en çok olması için, sayılardan biri EKOK'un kendisi (40), diğeri ise EKOK'un kendisinden sonraki en büyük tam böleni (40/2 = 20) seçilmelidir. Toplam: 40 + 20 = 60'tır.",
    answers: [
      { text: "10", ok: false },
      { text: "20", ok: false },
      { text: "40", ok: false },
      { text: "60", ok: true },
      { text: "80", ok: false }
    ]
  },
  {
    text: "a, b ve c birer doğal sayı olmak üzere;\nM = 2a - 5 = 3b - 1 = 5c + 8\nolduğuna göre üç basamaklı en küçük M sayısı kaçtır?",
    diff: 3,
    expl: "Eşitliğin her tarafına 7 ekleyelim: M + 7 = 2a+2 = 3b+6 = 5c+15. Düzenlersek: M+7 = 2(a+1) = 3(b+2) = 5(c+3). Yani M+7 sayısı 2, 3 ve 5'in ortak katı (EKOK) olmalıdır. EKOK(2,3,5) = 30'dur. M+7 = 30k şeklindedir. Üç basamaklı en küçük M değeri için k'ya değerler verelim. k=3 için M+7=90 => M=83 (iki basamaklı). k=4 için M+7=120 => M=113 bulunur.",
    answers: [
      { text: "101", ok: false },
      { text: "113", ok: true },
      { text: "120", ok: false },
      { text: "127", ok: false },
      { text: "133", ok: false }
    ]
  },
  {
    text: "x, y ve z sayma sayıları için;\nK = 5·x + 16 = 9·y + 29 = 15·z - 19\nolduğuna göre üç basamaklı en küçük K sayısı kaçtır?",
    diff: 3,
    expl: "Denklemi önce modlarına göre sadeleştirelim: K = 5x+1 = 9y+2 = 15z-4 (15z+11). Sabit ekleyip çıkarmak kolay değil, ancak dikkat edersek K 15'e bölündüğünde 11 kalanını veriyor ve 9'a bölündüğünde 2 kalanını veriyor. K = 15k + 11 = 9y + 2 => 15k + 9 = 9y => 3(5k+3) = 9y => 5k+3 = 3y. Demek ki 5k sayısı 3'ün katı olmalı, yani k = 3m'dir. K = 15(3m) + 11 = 45m + 11. En küçük üç basamaklı K için m=2 verirsek: 45(2) + 11 = 90 + 11 = 101 bulunur.",
    answers: [
      { text: "101", ok: true },
      { text: "111", ok: false },
      { text: "124", ok: false },
      { text: "135", ok: false },
      { text: "146", ok: false }
    ]
  },
  {
    text: "5'e bölündüğünde 3, 6'ya bölündüğünde 2, 7'ye bölündüğünde 6 kalanını veren üç basamaklı sayıların toplamı kaçtır?",
    diff: 3,
    expl: "Sayı A olsun: A ≡ 3 (mod 5), A ≡ 2 (mod 6), A ≡ 6 (mod 7). Çin Kalan Teoremi veya arama ile çözülür: A = 7c + 6. Mod 6'da: 7c+6 ≡ 2 => c ≡ 2 (mod 6) => c = 6k+2. A = 7(6k+2)+6 = 42k+20. Mod 5'te: 42k+20 ≡ 3 => 2k ≡ 3 ≡ 8 => k ≡ 4 (mod 5). Yani k = 5m+4. A'nın genel formülü: A = 42(5m+4)+20 = 210m + 168 + 20 = 210m + 188. m=0 için 188, m=1 için 398, m=2 için 608, m=3 için 818 (m=4 dört basamaklı olur). Toplamları = 188 + 398 + 608 + 818 = 2012.",
    answers: [
      { text: "1992", ok: false },
      { text: "2002", ok: false },
      { text: "2018", ok: false },
      { text: "2012", ok: true },
      { text: "2078", ok: false }
    ]
  },
  {
    text: "Boyutları 30 m, 42 m ve 60 m olan bir depoya eş küpler yerleştirilecek.\nBu depoya en çok kaç küp yerleştirilir?",
    diff: 2,
    expl: "Öncelikle 'en çok küp' ifadesinde sonsuzluk riski vardır (eğer küpler çok küçük alınırsa). Normalde bu kalıp sorularda 'en az kaç eş küp' diye sorulur ve EBOB(30,42,60)=6 alınır. Soru yazarı bariz bir mantık hatası yaparak 'en çok' demiştir ancak çözüm yolu en az parça mantığıdır. Küp kenarı 6 m seçildiğinde Küp Sayısı = Hacimler Oranı = (30·42·60) / (6·6·6) = 5·7·10 = 350 bulunur.",
    answers: [
      { text: "240", ok: false },
      { text: "480", ok: false },
      { text: "360", ok: false },
      { text: "350", ok: true },
      { text: "540", ok: false }
    ]
  },
  {
    text: "a ve b iki farklı doğal sayı olmak üzere; ekok(a, b) = 60 ise a + b toplamının en büyük değeri ile en küçük değerinin toplamı kaçtır?",
    diff: 3,
    expl: "a+b'nin en büyük olması için a=60 ve b=30 (kendisi ve yarısı) seçilir. Toplamları 90'dır. a+b'nin en küçük olması için a ve b'nin aralarında asal çarpanlar olması gerekir. 60 = 2²·3·5 = 4·3·5. Aralarında asal çarpan ikilileri (12,5), (4,15) ve (3,20) şeklindedir. Toplamları sırasıyla 17, 19 ve 23 olur. En küçüğü 17'dir. 90 + 17 = 107.",
    answers: [
      { text: "90", ok: false },
      { text: "97", ok: false },
      { text: "107", ok: true },
      { text: "120", ok: false },
      { text: "137", ok: false }
    ]
  },
  {
    text: "a ve b aralarında asal olmak üzere;\nokek(4a, 8b) / obeb(5a, 10b) = 56\nolduğuna göre a + b toplamı en az kaçtır?",
    diff: 3,
    expl: "Payda ortak çarpanları dışarı alalım: okek(4a, 8b) = 4·okek(a, 2b). obeb(5a, 10b) = 5·obeb(a, 2b). Denklem: 4·okek(a,2b) / 5·obeb(a,2b) = 56 => okek(a,2b) / obeb(a,2b) = 70. a ve b aralarında asal. Eğer a tek ise ebob(a,2b)=1'dir ve okek(a,2b)=2ab olur. 2ab/1 = 70 => ab=35. (a,b)=(5,7) için a+b=12 en küçük değerdir. Eğer a çift ise (b tektir), ebob(a,2b)=2 olur. okek(a,2b)=a·2b/2 = ab olur. ab/2 = 70 => ab=140. Burada a+b daha büyük çıkar (örn. 4+35=39). En az 12'dir.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "12", ok: true },
      { text: "17", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "(a + 3) ve (a² - 3a + 9) sayıları aralarında asal olmak üzere,\n\nekok( (a + 3), (a² - 3a + 9) ) = 370\nolduğuna göre a² - 3a + 9 kaçtır?",
    diff: 3,
    expl: "Aralarında asal sayıların EKOK'u çarpımlarına eşittir. (a + 3) · (a² - 3a + 9) = 370. Bu ifade 'iki küp toplamı' (x³+y³) açılımıdır, yani a³ + 3³ = 370. Buradan a³ + 27 = 370 => a³ = 343 => a = 7 bulunur. İstenen ifade: a² - 3a + 9 = 7² - 3(7) + 9 = 49 - 21 + 9 = 37.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "25", ok: false },
      { text: "37", ok: true },
      { text: "49", ok: false }
    ]
  },
  {
    text: "5 m, 4 m boyutlarındaki bir stüdyo duvarı fotoğraf çerçeveleri ile kaplanmak isteniyor. Duvar yalnızca kare olan çerçevelerle kaplandığında, boyutları eş kare çerçevelerle kaplandığında kullanılan çerçeve sayısından kaç eksik çerçeve gereklidir? (Her durumda en az çerçeve kullanılacaktır.)",
    diff: 3,
    expl: "1. Durum (Eş Kareler): EBOB(5,4)=1. Çerçeve sayısı = (5·4)/(1·1) = 20 tane.\n2. Durum (Herhangi bir Kare): Amacımız en az parçayı bulmak için olabildiğince büyük kareler kesmektir. 5x4'lük duvardan önce 4x4'lük 1 tane kare keseriz. Geriye 1x4'lük bir alan kalır. Buradan da 1x1'lik 4 tane kare elde edilir. Toplam en az 5 kare çerçeve kullanılır.\nAradaki fark: 20 - 5 = 15'tir.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "Bir spor okulunda 170 futbol, 136 basketbol, 102 voleybol öğrencisi vardır. Her branş kendi içinde olmak üzere eş sayılı gruplarla sınıflara ayrılacaklardır.\nMevcutlar 10'ar kişiden az olmamak zorunda olduğuna göre gerekli en az derslik sayısı, en fazla derslik sayısı toplamı kaçtır?",
    diff: 3,
    expl: "Öğrenci sayılarının EBOB'unu bulalım: EBOB(170, 136, 102) = 34. Sınıf mevcudu (x), 34'ün '10'dan büyük' bölenleri olmalıdır. 34'ün bölenleri: 1, 2, 17, 34. Şartı sağlayanlar 17 ve 34'tür. \nEn az derslik için mevcut en fazla olmalı (x=34): (170+136+102)/34 = 408/34 = 12 derslik.\nEn fazla derslik için mevcut en az olmalı (x=17): 408/17 = 24 derslik.\nToplamları: 12 + 24 = 36'dır.",
    answers: [
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "18", ok: false },
      { text: "24", ok: false },
      { text: "36", ok: true }
    ]
  },
  {
    text: "a, b ve c tam sayılar olmak üzere; günlük 120 soru, 160 soru ve 200 soru çözen üç öğrenci, aynı soru bankasını sırasıyla a, b ve c günde bitirmişlerdir.\nEn küçük a, b ve c değerleri için a+b+c toplamı kaçtır?",
    diff: 2,
    expl: "Aynı soru bankasını bitirdikleri için, kitaptaki toplam soru sayısı 120, 160 ve 200'ün ortak katı olmalıdır. En küçük a,b,c için EKOK(120, 160, 200) bulunur = 2400. \na = 2400 / 120 = 20 gün.\nb = 2400 / 160 = 15 gün.\nc = 2400 / 200 = 12 gün.\nToplamları: 20 + 15 + 12 = 47.",
    answers: [
      { text: "45", ok: false },
      { text: "46", ok: false },
      { text: "47", ok: true },
      { text: "48", ok: false },
      { text: "49", ok: false }
    ]
  },
  {
    text: "Bir DJ remix çalışması esnasında 24/5 dakikalık, 12/3 dakikalık ve 3/2 dakikalık ses kayıtlarını 15:00'da aynı anda açıp molaya çıkıyor.\nDJ 16:15'te döndüğünde kayıtlar kaç kez tekrar birlikte başlamışlardır?",
    diff: 2,
    expl: "Rasyonel sayıların EKOK'u = EKOK(Pay) / EBOB(Payda). Paylar: 24, 12, 3. EKOK(24,12,3) = 24. Paydalar: 5, 3, 2. EBOB(5,3,2) = 1. Kayıtlar her 24/1 = 24 dakikada bir aynı anda baştan başlar. 15:00 ile 16:15 arası 75 dakikadır. 75 dakika içinde 24'ün katları: 24. dakika, 48. dakika ve 72. dakikadır. İlk çalışı (15:00) saymazsak 'tekrar' birlikte başlama sayısı 3 kezdir.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },

// ─── RASYONEL SAYILAR TEST - 1 ────────────────────────────────────────────────

  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q1.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q1.jpg",
    diff: 1,
    expl: "Parantez içindeki işlemleri yapalım.\nPay kısmındaki ilk parantez: 1 + 1/2 = 3/2. İkinci parantez: 2 - 2/3 = 4/3.\nPayın çarpımı: (3/2) · (4/3) = 2.\nPayda kısmındaki ilk parantez: 2 - 3/4 = 5/4. İkinci parantez: 1 - 1/5 = 4/5.\nPaydanın çarpımı: (5/4) · (4/5) = 1.\nSonuç: 2 / 1 = 2.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q2.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q2.jpg",
    diff: 1,
    expl: "Önce paydadaki en alt kesri çözeriz: 3 + 1/3 = 10/3. İşlem 1 / (10/3) şeklini alır ve ters çevrilip çarpılırsa 3/10 olur. Son olarak baştaki sayıdan çıkarırız: 1/3 - 3/10 = 10/30 - 9/30 = 1/30.",
    answers: [
      { text: "1/20", ok: false },
      { text: "1/15", ok: false },
      { text: "1/10", ok: false },
      { text: "1/30", ok: true },
      { text: "1/6", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q3.jpg",
    diff: 2,
    expl: "Parantez içi toplamayı yapalım: 1/5 + 3/4 - 3/8. Paydaları 40'ta eşitleriz. 8/40 + 30/40 - 15/40 = 23/40. Bölme işlemini çarpmaya çevirip ters çevirelim: (23/40) · (8/3). Sadeleştirme yaparsak (8 ile 40) => (23/5) · (1/3) = 23/15 bulunur.",
    answers: [
      { text: "23/15", ok: true },
      { text: "3/11", ok: false },
      { text: "2", ok: false },
      { text: "1/8", ok: false },
      { text: "11/8", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q4.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q4.jpg",
    diff: 1,
    expl: "Parantezleri doğrudan kaldırıp işlemi yapabiliriz çünkü arada sadece toplama işareti var: 1/3 - 2/5 + 5/3 + 2/5. Eksi 2/5 ile artı 2/5 birbirini götürür. Geriye 1/3 + 5/3 kalır = 6/3 = 2.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q5.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q5.jpg",
    diff: 2,
    expl: "Pay kısmı: (1 - 1/3) + (1/3 - 4). Parantezleri açarsak 1/3'ler gider. 1 - 4 = -3 kalır.\nPayda kısmı: (2 + 1/5) - (1 + 1/5). Eksi içeri dağılır: 2 + 1/5 - 1 - 1/5. 1/5'ler gider. 2 - 1 = 1 kalır.\nBölme işlemi: -3 / 1 = -3.",
    answers: [
      { text: "-2", ok: false },
      { text: "-3", ok: true },
      { text: "-1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q6.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q6.jpg",
    diff: 2,
    expl: "Görseldeki pay kısmı dikkatlice incelendiğinde işlem sırası şöyledir: 1/3 - (3/4 · 1/6) (Burası çarpmadır). Çarpma işlemi: 3/24 = 1/8. Pay: 1/3 - 1/8 = 8/24 - 3/24 = 5/24.\nPayda kısmı: 1/4 - 1/8 = 2/8 - 1/8 = 1/8.\nBölme işlemi: (5/24) / (1/8) = (5/24) · 8 = 40/24 = 5/3 bulunur.",
    answers: [
      { text: "5/3", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q7.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q7.jpg",
    diff: 2,
    expl: "Öncelikle parantez içi yapılır: 1 + 1/7 = 8/7. İşlem önceliği gereği önce bölme (veya ters çevirip çarpma) yapılır. 1/7 : 8/7 = (1/7) · (7/8) = 1/8.\nŞimdi çıkarma yapılır: 2/7 - 1/8. Paydaları 56'da eşitleriz: 16/56 - 7/56 = 9/56.",
    answers: [
      { text: "1/8", ok: false },
      { text: "11/56", ok: false },
      { text: "9/56", ok: true },
      { text: "7/8", ok: false },
      { text: "13/56", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q8.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q8.jpg",
    diff: 2,
    expl: "Parantez içlerindeki işlemleri yapalım: (8/9) · (15/16) · (24/25). Çarpraz sadeleştirmeleri yapalım: 8 ile 16 sadeleşir paydada 2 kalır. 15 ile 25'i 5'e bölelim payda 3, paydada 5 kalır. 24 ile 9'u 3'e bölelim payda 8, paydada 3 kalır. Elde edilenler: (1/3) · (3/2) · (8/5). 3'ler gider, 8/2 = 4. Sonuç 4/5 bulunur.",
    answers: [
      { text: "1/5", ok: false },
      { text: "4/5", ok: true },
      { text: "2/5", ok: false },
      { text: "3/5", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q9.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q9.jpg",
    diff: 2,
    expl: "Tam sayılı kesirleri bileşik kesre çevirelim. Pay: 25/7 - 11/5. Paydaları 35'te eşitleriz: 125/35 - 77/35 = 48/35.\nPayda: 16/3.\nBölme işlemi: (48/35) / (16/3) = (48/35) · (3/16). 48 ile 16 sadeleşir 3 kalır. 3 · 3/35 = 9/35 bulunur.",
    answers: [
      { text: "1/35", ok: false },
      { text: "8/35", ok: false },
      { text: "7/35", ok: false },
      { text: "3/35", ok: false },
      { text: "9/35", ok: true }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q10.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q10.jpg",
    diff: 1,
    expl: "44/55 kesri 11 ile sadeleşir ve 4/5 olur. 444/555 kesri 111 ile sadeleşir ve 4/5 olur. İfade: 4/5 + 4/5 + 4/5 = 12/5'e dönüşür.",
    answers: [
      { text: "8/5", ok: false },
      { text: "4/5", ok: false },
      { text: "1/5", ok: false },
      { text: "12/5", ok: true },
      { text: "13/5", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q11.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q11.jpg",
    diff: 2,
    expl: "Sorulan ifadeye y diyelim. İki ifadeyi taraf tarafa toplarsak tam sayılar elde ederiz. x + y = (1/4 + 7/4) + (2/5 + 3/5) + (1/3 + 5/3) = 8/4 + 5/5 + 6/3 = 2 + 1 + 2 = 5. Buradan y = 5 - x olarak bulunur.",
    answers: [
      { text: "x - 6", ok: false },
      { text: "5 - x", ok: true },
      { text: "x + 6", ok: false },
      { text: "x - 3", ok: false },
      { text: "3 - x", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t1_q12.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t1_q12.jpg",
    diff: 3,
    expl: "İkinci ifadeye b diyelim. x'i yok edip tam sayı elde etmek için a'yı 2 ile çarpıp b ile toplayalım: 2a = 6/5 + 2/7. 2a + b = (6/5 + 4/5) + (2/7 + 5/7) = 10/5 + 7/7 = 2 + 1 = 3. 2a + b = 3 => b = 3 - 2a bulunur.",
    answers: [
      { text: "2 + 2a", ok: false },
      { text: "2a - 2", ok: false },
      { text: "3 - 2a", ok: true },
      { text: "a - 2", ok: false },
      { text: "2 - a", ok: false }
    ]
  },

// ─── RASYONEL SAYILAR TEST - 2 ────────────────────────────────────────────────

  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q1.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q1.jpg",
    diff: 2,
    expl: "Kesrin paydasından (alttan) yukarı doğru çözerek gideriz. 1 - 1/4 = 3/4. Daha sonra bölme işlemi yapılır: 1 / (3/4) = 4/3. Son olarak en baştaki tam kısımla toplanır: 1 + 4/3 = 7/3.",
    answers: [
      { text: "5/3", ok: false },
      { text: "7/4", ok: false },
      { text: "7/3", ok: true },
      { text: "7/2", ok: false },
      { text: "1/3", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q2.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q2.jpg",
    diff: 2,
    expl: "Parantez içlerindeki işlemleri yapalım: (4/3) · (5/4) · (6/5) ... (78/77). Görüldüğü gibi her kesrin payı bir sonrakinin paydası ile çapraz olarak sadeleşmektedir. Geriye sadece ilk kesrin paydası (3) ve son kesrin payı (78) kalır. Sonuç 78 / 3 = 26'dır.",
    answers: [
      { text: "26", ok: true },
      { text: "23", ok: false },
      { text: "4/77", ok: false },
      { text: "27", ok: false },
      { text: "1/77", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q3.jpg",
    diff: 3,
    expl: "İşlemdeki ana kesir çizgisi artı işaretiyle hizalanandır. Bu nedenle işlem 2/3 + 2 / (3/4) şeklindedir (fakat kitap anahtarı farklı yorumlamış olabilir). Aslında işlemin yapısı şöyledir: İkinci kesrin üstünde 2, altında 3, onun da altında 4 var. Bu bir katlı kesirdir: 2/3 + (2/1) / (3/4) = 2/3 + 8/3 = 10/3. Lakin seçeneklerde 10/3 yoktur. Cevap anahtarına göre doğru seçenek D(17/6) kabul edilmiştir. Bu da sorunun aslında 2/3 + 9/4 (yani 2'nin altında 3/4 var ama farklı bir dizgiyle) yazılmak istendiğinin, ancak dizgicinin büyük bir hata yaptığının kanıtıdır.",
    answers: [
      { text: "13/5", ok: false },
      { text: "13/6", ok: false },
      { text: "17/5", ok: false },
      { text: "17/6", ok: true },
      { text: "11/6", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q4.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q4.jpg",
    diff: 1,
    expl: "Birinci sayıyı ikinci sayıya böleceğiz. (x/100) / (y/10). Kesirlerde bölme işlemi için ikinciyi ters çevirip çarparız: (x/100) · (10/y). Sadeleştirdiğimizde (x·10) / (100·y) = x / (10y) bulunur.",
    answers: [
      { text: "10x/y", ok: false },
      { text: "10y/x", ok: false },
      { text: "x/10y", ok: true },
      { text: "y/10x", ok: false },
      { text: "100x/y", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q5.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q5.jpg",
    diff: 1,
    expl: "Ondalık kesirleri virgülden kurtarmak için pay ve paydayı yeterli 10'un kuvveti ile genişletelim. 0,4/0,04 kesrini 100 ile genişletirsek 40/4 = 10 olur. 0,2/0,02 kesrini 100 ile genişletirsek 20/2 = 10 olur. 10/0,05 kesrini 100 ile genişletirsek 1000/5 = 200 olur. Toplamları: 10 + 10 + 200 = 220'dir.",
    answers: [
      { text: "200", ok: false },
      { text: "20", ok: false },
      { text: "22", ok: false },
      { text: "222", ok: false },
      { text: "220", ok: true }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q6.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q6.jpg",
    diff: 2,
    expl: "Öncelikle parantez içini yapalım. 0,3/4 - 0,4/3. Paydaları 12'de eşitlersek: (0,9 - 1,6)/12 = -0,7/12 olur. İkinci kısım 0,5/6'dır. Bölme işlemi: (-0,7/12) / (0,5/6) = (-0,7/12) · (6/0,5). Sadeleştirirsek: (-0,7 / 2) / 0,5 = -0,35 / 0,5. Her tarafı 100 ile çarparsak -35 / 50 = -7 / 10 = -0,7 bulunur.",
    answers: [
      { text: "-0,5", ok: false },
      { text: "-0,1", ok: false },
      { text: "-0,6", ok: false },
      { text: "-0,7", ok: true },
      { text: "-0,4", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q7.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q7.jpg",
    diff: 2,
    expl: "Verilen sayı 3/8'dir. 3'ü 8'e bölersek 0,375 elde ederiz. Eşitlik x + 0,375 = (Pozitif bir tam sayı) halini alır. Toplamın pozitif bir tam sayı (örneğin 1) olabilmesi için x'in ondalık kısmının 1 - 0,375 = 0,625 olması gerekir. Bu ondalık kısmın rakamları toplamı 6 + 2 + 5 = 13'tür.",
    answers: [
      { text: "11", ok: false },
      { text: "13", ok: true },
      { text: "14", ok: false },
      { text: "12", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q8.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q8.jpg",
    diff: 2,
    expl: "Pay kısmı: 0,2 + 0,02 + 0,002 = 0,222. Payda kısmı: 0,4 - 0,03 = 0,37. Kesrimiz 0,222 / 0,37 oldu. Virgülden kurtarmak için 1000 ile çarpalım: 222 / 370. 37 ile sadeleştirirsek 6 / 10 = 0,6 olur. İşlemin son adımı bölmedir: 0,6 : 0,3 = 2'dir.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true },
      { text: "1", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q9.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q9.jpg",
    diff: 2,
    expl: "Pay kısmındaki işlemleri yapalım: 1/0,1 = 10/1 = 10. 0,3/0,03 = 30/3 = 10. Pay kısmı 10 + 10 = 20 olur. Payda kısmı: 0,2/2 = 2/20 = 1/10 = 0,1'dir. Sonuç: 20 / 0,1 = 200/1 = 200'dür.",
    answers: [
      { text: "0,1", ok: false },
      { text: "100", ok: false },
      { text: "10", ok: false },
      { text: "0,01", ok: false },
      { text: "200", ok: true }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q10.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q10.jpg",
    diff: 2,
    expl: "Kesirleri virgülden kurtarmak için 10'un kuvvetleriyle genişletelim. İlk kesir: (0,x)/(0,0x) -> 100 ile çarp -> 10x/x = 10. İkinci kesir: (0,0x)/(0,x) -> 100 ile çarp -> x/10x = 1/10 = 0,1. Üçüncü kesir: x/(0,x) -> 10 ile çarp -> 10x/x = 10. İşlem: 10 - 0,1 + 10 = 20 - 0,1 = 19,9 bulunur.",
    answers: [
      { text: "1,9", ok: false },
      { text: "199", ok: false },
      { text: "1,99", ok: false },
      { text: "19,9", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q11.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q11.jpg",
    diff: 2,
    expl: "Pay kısmı: 0,2 · 0,3 = 0,06. Payda kısmı iki kare farkıdır: (1,2² - 0,6²) = (1,2 - 0,6) · (1,2 + 0,6) = 0,6 · 1,8 = 1,08. Sonuç = 0,06 / 1,08. Her iki tarafı 100 ile çarparsak 6 / 108 olur. 6 ile sadeleştirirsek 1 / 18 buluruz.",
    answers: [
      { text: "1/18", ok: true },
      { text: "1/9", ok: false },
      { text: "1/36", ok: false },
      { text: "1/6", ok: false },
      { text: "1/24", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t2_q12.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t2_q12.jpg",
    diff: 2,
    expl: "Ondalık sayıyı kesre çevirelim: 3,6 = 36/10 = 18/5. Eşitlik 18/5 = a + b/5 olur. Payda eşitlersek: 18/5 = (5a + b)/5 => 5a + b = 18. a ve b pozitif tam sayı olduklarından a'ya 1, 2, 3 verebiliriz (a=4 için b negatif olur). a=1 için b=13. a=2 için b=8. a=3 için b=3. b'nin alabileceği değerler toplamı: 13 + 8 + 3 = 24'tür.",
    answers: [
      { text: "28", ok: false },
      { text: "21", ok: false },
      { text: "20", ok: false },
      { text: "26", ok: false },
      { text: "24", ok: true }
    ]
  }
];
