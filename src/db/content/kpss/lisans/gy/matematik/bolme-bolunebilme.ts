import type { McQ } from "../../../../types";

export const MAT_BOLME_T1: McQ[] = [
  {
    text: "<p><b>ABABAB 6 basamaklı sayının 2 basamaklı AB sayısına bölümünden elde edilen bölüm kaçtır?</b></p>",
    diff: 1,
    expl: "ABABAB = AB · 10000 + AB · 100 + AB = AB · 10101 olduğundan bölüm 10101'dir.",
    answers: [
      { text: "111", ok: false },
      { text: "1010", ok: false },
      { text: "10101", ok: true },
      { text: "1011", ok: false },
      { text: "111111", ok: false }
    ]
  },
  {
    text: "<p><b>ABAB8 beş basamaklı sayının AB iki basamaklı sayısına bölümünden elde edilen bölüm ve kalanın toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "ABAB8 = AB · 1000 + AB · 10 + 8 = AB · 1010 + 8. AB ≥ 10 > 8 olduğundan bölüm 1010, kalan 8'dir. Toplam: 1010 + 8 = 1018.",
    answers: [
      { text: "107", ok: false },
      { text: "108", ok: false },
      { text: "1017", ok: false },
      { text: "1018", ok: true },
      { text: "1010", ok: false }
    ]
  },
  {
    text: "<p><b>A0AA0A altı basamaklı sayının A0 iki basamaklı sayısına bölümünden elde edilen bölüm kaçtır?</b></p>",
    diff: 2,
    expl: "A0AA0A = A0 · 10000 + A0 · 100 + A0 · 10 + A = A0 · 10110 + A. A &lt; A0 olduğundan bölüm 10110, kalan A'dır.",
    answers: [
      { text: "10110", ok: true },
      { text: "10101", ok: false },
      { text: "11010", ok: false },
      { text: "1110", ok: false },
      { text: "10111", ok: false }
    ]
  },
  {
    text: "<p>A doğal sayısının 13 ile bölümünden elde edilen kalan 4'tür.</p><p><b>Buna göre A<sup>2</sup> + 4 · A sayısının 13 ile bölümünden kalan kaçtır?</b></p>",
    diff: 1,
    expl: "A yerine kalanı (4) yazabiliriz: 4<sup>2</sup> + 4 · 4 = 32. 32 = 13 · 2 + 6 olduğundan kalan 6'dır.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: true }
    ]
  },
  {
    text: "<p>x doğal sayısının 11 ile bölümünden kalan 5, y sayısının 11 ile bölümünden kalan 6'dır.</p><p><b>Buna göre x<sup>2</sup> − x · y + y<sup>2</sup> ifadesinin 11 ile bölümünden kalan aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "x yerine 5, y yerine 6 yazılır: 25 − 30 + 36 = 31. 31 = 11 · 2 + 9 olduğundan kalan 9'dur.",
    answers: [
      { text: "9", ok: true },
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "7", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işleminde 4a 2 basamaklı sayısında a'nın alabileceği kaç farklı değer vardır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q6.jpg",
    diff: 2,
    expl: "Bölümün ilk basamağı 2 olduğundan 93 içinde 4a sayısı 2 kez vardır: 2 · 4a ≤ 93 &lt; 3 · 4a. 3 · 4a ≥ 120 &gt; 93 her zaman sağlanır. 2 · (40 + a) ≤ 93 ⇒ a ≤ 6. a ∈ {0, 1, 2, 3, 4, 5, 6} olup 7 farklı değer vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işleminde x ve A birer pozitif tam sayı ve kalan 4x olduğuna göre A <u>en çok</u> kaç olabilir?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q7.jpg",
    diff: 2,
    expl: "Kalan bölenden küçük olmalıdır: 4x &lt; 3x + 6 ⇒ x &lt; 6. A'nın en büyük olması için x = 5 alınır. A = (3 · 5 + 6) · 7 + 4 · 5 = 147 + 20 = 167.",
    answers: [
      { text: "157", ok: false },
      { text: "177", ok: false },
      { text: "167", ok: true },
      { text: "162", ok: false },
      { text: "171", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işlemine göre A <u>en az</u> kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q8.jpg",
    diff: 2,
    expl: "A = 3B + 14 ve B = 2C + 2'dir. Kalan bölenden küçük olduğundan B &gt; 14 ve C &gt; 2 olmalıdır. B = 2C + 2 çift ve 14'ten büyük olmalı; en küçük B = 16 (C = 7). A = 3 · 16 + 14 = 62.",
    answers: [
      { text: "38", ok: false },
      { text: "62", ok: true },
      { text: "54", ok: false },
      { text: "60", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işlemine göre A bir doğal sayı olduğuna göre x tam sayısı kaç farklı değer alabilir?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q9.jpg",
    diff: 3,
    expl: "Bölen 27, bölüm x + 4, kalan x<sup>2</sup>'dir. Kalan bölenden küçük olmalı: x<sup>2</sup> &lt; 27 ⇒ −5 ≤ x ≤ 5. A doğal sayı olduğundan bölüm x + 4 ≥ 0 ⇒ x ≥ −4. Buna göre x ∈ {−4, −3, …, 5} olup 10 farklı değer vardır.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: true },
      { text: "6", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işlemine göre A sayısının 6 ile bölümünden kalan kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q10.jpg",
    diff: 3,
    expl: "A = 3B + 4 ve B = 2C + 5'tir. A = 3(2C + 5) + 4 = 6C + 19 = 6(C + 3) + 1. Kalan 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>Toplamları 272 olan iki doğal sayıdan büyük olan sayı küçük olan sayıya bölündüğünde bölüm 4 kalan 12'dir.</p><p><b>Buna göre büyük sayı kaçtır?</b></p>",
    diff: 1,
    expl: "Küçük sayı K ise büyük sayı 4K + 12'dir. 4K + 12 + K = 272 ⇒ 5K = 260 ⇒ K = 52. Büyük sayı 272 − 52 = 220.",
    answers: [
      { text: "234", ok: false },
      { text: "214", ok: false },
      { text: "216", ok: false },
      { text: "244", ok: false },
      { text: "220", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen bölme işlemine göre kalan xy iki basamaklı sayısı kaç farklı değer alabilir?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t1_q12.jpg",
    diff: 3,
    expl: "Bölen 18 olduğundan iki basamaklı kalan 10 ≤ xy ≤ 17 olmalıdır. abc6 ve 18 · (x + 4) çift olduğundan kalan xy de çift olmalıdır: 10, 12, 14, 16. Buna göre xy 4 farklı değer alabilir.",
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
    text: "<p><b>Aşağıdakilerden hangisi 3 ile tam <u>bölünemez</u>?</b></p>",
    diff: 1,
    expl: "3 ile bölünebilme için rakamlar toplamı 3'ün katı olmalıdır. 129 → 12, 927 → 18, 1032 → 6, 4917 → 21 (3'ün katı). 787 → 22 olduğundan 3 ile tam bölünemez.",
    answers: [
      { text: "129", ok: false },
      { text: "927", ok: false },
      { text: "787", ok: true },
      { text: "1032", ok: false },
      { text: "4917", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 4 ile tam <u>bölünür</u>?</b></p>",
    diff: 1,
    expl: "4 ile bölünebilme için son iki basamak 4'ün katı olmalıdır. 1304'ün son iki basamağı 04 olup 4'ün katıdır.",
    answers: [
      { text: "1304", ok: true },
      { text: "733", ok: false },
      { text: "322", ok: false },
      { text: "198", ok: false },
      { text: "126", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinin 5 ile bölümünden kalan 2'dir?</b></p>",
    diff: 1,
    expl: "5 ile bölümünden kalanın 2 olması için birler basamağı 2 veya 7 olmalıdır. Bu koşulu yalnızca 3907 sağlar.",
    answers: [
      { text: "498", ok: false },
      { text: "336", ok: false },
      { text: "1284", ok: false },
      { text: "3907", ok: true },
      { text: "7539", ok: false }
    ]
  },
  {
    text: "<p><b>Dört basamaklı 395A doğal sayısı 2 ile tam bölünebildiğine göre A yerine yazılabilecek kaç farklı değer vardır?</b></p>",
    diff: 1,
    expl: "Sayı çift olmalıdır; A ∈ {0, 2, 4, 6, 8} olup 5 farklı değer vardır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>Üç basamaklı 37A doğal sayısı 5 ile bölündüğünde 3 kalanını vermektedir.</p><p><b>Buna göre A'nın alabileceği değerlerin toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "5 ile bölümünden kalanın 3 olması için birler basamağı 3 veya 8 olmalıdır. A ∈ {3, 8}; toplam 3 + 8 = 11.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "11", ok: true },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>Üç basamaklı 3AB doğal sayısı 4 ile tam bölünebilmekte ve 10 ile bölündüğünde 4 kalanını verdiğine göre A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "10 ile bölümünden kalan 4 ise B = 4'tür. 3A4'ün 4 ile bölünmesi için A4 4'ün katı olmalıdır: 04, 24, 44, 64, 84. A ∈ {0, 2, 4, 6, 8} olup 5 farklı değer vardır.",
    answers: [
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>İki basamaklı B5 doğal sayısının 3 ile bölümünden kalan 2 olduğuna göre B'nin alabileceği kaç farklı değer vardır?</b></p>",
    diff: 1,
    expl: "B + 5 sayısının 3 ile bölümünden kalan 2 olmalı, yani B 3'ün katı olmalıdır. B ≠ 0 olduğundan B ∈ {3, 6, 9}: 3 farklı değer.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Bir x doğal sayısının rakamların toplamı 23'tür.</p><p><b>Buna göre x doğal sayısının 9 ile bölümünden kalan kaçtır?</b></p>",
    diff: 1,
    expl: "Bir sayının 9 ile bölümünden kalan, rakamları toplamının 9 ile bölümünden kalana eşittir. 23 = 9 · 2 + 5 olduğundan kalan 5'tir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>357A4 beş basamaklı doğal sayısı 9 ile bölündüğünde 4 kalanını vermektedir.</p><p><b>Buna göre A kaçtır?</b></p>",
    diff: 1,
    expl: "Rakamlar toplamı 3 + 5 + 7 + A + 4 = 19 + A, 9'un katından 4 fazla olmalıdır: 15 + A 9'un katı ⇒ A = 3.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>A4B79 beş basamaklı doğal sayısı 11 ile bölündüğünde 3 kalanını vermektedir.</p><p><b>Buna göre A + B'nin alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "11 ile bölünebilme kuralı (sağdan +, −, +, −, +): 9 − 7 + B − 4 + A = A + B − 2. Bu değerin 11 ile bölümünden kalan 3 olmalı: A + B = 11k + 5. A + B ≤ 18 olduğundan A + B = 5 veya 16. Toplam: 5 + 16 = 21.",
    answers: [
      { text: "2", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "21", ok: true }
    ]
  },
  {
    text: "<p><b>30 basamaklı 343434 ---- 34 doğal sayısının 11 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "Sağdan başlayarak +4, −3 şeklinde gidilir; her \"34\" bloğu 4 − 3 = 1 katkı verir. 30 basamakta 15 blok vardır: toplam 15. 15'in 11 ile bölümünden kalan 4'tür.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Üç basamaklı 36A doğal sayısı 4 ile bölündüğünde 1 kalanını verdiğine göre A'nın alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Son iki basamak 6A'nın 4 ile bölümünden kalan 1 olmalıdır: 61, 65, 69. A ∈ {1, 5, 9}; toplam 15.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true }
    ]
  },
  {
    text: "<p><b>Beş basamaklı 430A6 doğal sayısı 8 ile tam bölünebildiğine göre A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "8 ile bölünebilmede son üç basamağa bakılır: 0A6, yani A6 sayısı 8'in katı olmalıdır. 16, 56, 96 uygundur. A ∈ {1, 5, 9}: 3 farklı değer.",
    answers: [
      { text: "5", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p><b>Dört basamaklı B32A doğal sayısının 8 ile bölümünden kalan 7 olduğuna göre A + B ifadesinin alabileceği <u>en büyük</u> değer kaçtır?</b></p>",
    diff: 3,
    expl: "Son üç basamak 32A = 320 + A ve 320 = 8 · 40 olduğundan kalan A'dır: A = 7. B için kısıt yoktur; en büyük B = 9. A + B = 7 + 9 = 16.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true }
    ]
  },
  {
    text: "<p>Bir A doğal sayısının rakamları toplamı 11'dir.</p><p><b>Buna göre A<sup>3</sup> + 3A sayısının 9 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "A'nın 9 ile bölümünden kalan 11'in 9 ile bölümünden kalana, yani 2'ye eşittir. 2<sup>3</sup> + 3 · 2 = 14; 14'ün 9 ile bölümünden kalan 5'tir.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>x bir pozitif tam sayı olmak üzere 29 sayısının x ile bölümünden kalan 5 olduğuna göre x'in alabileceği değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "29 = k · x + 5 ⇒ k · x = 24. Kalan bölenden küçük olduğundan x &gt; 5. 24'ün 5'ten büyük bölenleri: 6, 8, 12, 24. Toplam 50.",
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
    text: "<p>Üç basamaklı 47A doğal sayısı 6 ile tam bölünebilmektedir.</p><p><b>Buna göre A'nın alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "6 ile bölünmesi için hem 2 hem 3 ile bölünmelidir. A çift ve 11 + A 3'ün katı olmalıdır: yalnızca A = 4. Toplam 4.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>Üç basamaklı rakamları birbirinden farklı 53B doğal sayısının 2 ile bölümünden kalan 1 olduğuna göre B'nin alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Sayı tek olduğundan B ∈ {1, 3, 5, 7, 9}. Rakamlar farklı olduğundan B ≠ 3, 5. B ∈ {1, 7, 9}; toplam 17.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false },
      { text: "17", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "<p>Dört basamaklı A3B4 doğal sayısı 9 ile bölündüğünde 3 kalanını vermektedir.</p><p><b>Buna göre (A + B)'nin alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "A + 3 + B + 4 = 9k + 3 ⇒ A + B + 4 = 9k. A ≥ 1 ve A + B ≤ 18 olduğundan A + B = 5 veya 14. Toplam 19.",
    answers: [
      { text: "5", ok: false },
      { text: "14", ok: false },
      { text: "19", ok: true },
      { text: "28", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "<p><b>Üç basamaklı 4AB doğal sayısı 5 ve 9 ile tam bölünebildiğine göre A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "5 ile bölünme: B = 0 veya 5. B = 0 ise 4 + A = 9k ⇒ A = 5. B = 5 ise 9 + A = 9k ⇒ A = 0 veya 9. A ∈ {0, 5, 9}: 3 farklı değer.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Üç basamaklı 73A doğal sayısı 12 ile tam bölünebilmektedir.</p><p><b>Buna göre A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "12 ile bölünme için 3 ve 4 ile bölünmelidir. 4 ile: 3A ∈ {32, 36} ⇒ A = 2 veya 6. 3 ile: 10 + A 3'ün katı ⇒ yalnızca A = 2. 1 farklı değer.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A35B dört basamaklı doğal sayısı 6 ile tam bölünebilmektedir.</p><p><b>Buna göre (A + B)'nin alabileceği <u>en küçük</u> değer kaçtır?</b></p>",
    diff: 2,
    expl: "B çift olmalı ve A + 3 + 5 + B = A + B + 8 3'ün katı olmalıdır. A = 1, B = 0 için 9 elde edilir (1350). A ≥ 1 olduğundan en küçük A + B = 1.",
    answers: [
      { text: "6", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "<p><b>AB iki basamaklı sayısının 9 ile bölümünden kalan 4 olduğuna göre, beş basamaklı 8A3B9 doğal sayısının 9 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "A + B'nin 9 ile bölümünden kalan 4'tür. 8 + A + 3 + B + 9 = 20 + (A + B) ⇒ kalan, 20 + 4 = 24'ün 9 ile bölümünden kalana eşittir: 6.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>Bir A doğal sayısının 9 ile bölümünden kalan 5 ise A<sup>3</sup> + 4 · A doğal sayısının 9 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "A yerine 5 yazılır: 5<sup>3</sup> + 4 · 5 = 145. 1 + 4 + 5 = 10 olduğundan 9 ile bölümünden kalan 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>875B dört basamaklı bir doğal sayıdır.</p><p><b>Yukarıdaki bölme işlemine göre B'nin alabileceği kaç farklı değer vardır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t2_q25.jpg",
    diff: 3,
    expl: "875B = 20k + 13'tür. 20k'nın birler basamağı 0 olduğundan 20k + 13'ün birler basamağı 3'tür; B = 3 (8753 = 20 · 437 + 13). 1 farklı değer.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Dört basamaklı A36B doğal sayısının 30 ile bölümünden kalan 2 olduğuna göre, A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "30 ile bölümünden kalan 2 ise 10 ile bölümünden kalan 2 (B = 2) ve 3 ile bölümünden kalan 2'dir. A + 3 + 6 + 2 = A + 11 ≡ 2 (mod 3) ⇒ A 3'ün katı. A ≠ 0 olduğundan A ∈ {3, 6, 9}: 3 farklı değer.",
    answers: [
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p><b>x &lt; y olmak üzere, dört basamaklı 3x8y doğal sayının 15 ile bölümünden kalan 7 olduğuna göre x'in alabileceği <u>en büyük</u> değer kaçtır?</b></p>",
    diff: 3,
    expl: "15 ile bölümünden kalan 7 ise 5 ile bölümünden kalan 2 (y = 2 veya 7) ve 3 ile bölümünden kalan 1'dir: 3 + x + 8 + y = 3k + 1 ⇒ x + y + 10 = 3k. y = 2 ise x + 12 = 3k ⇒ x ∈ {0, 3, 6, 9}; x &lt; 2 ⇒ x = 0. y = 7 ise x + 17 = 3k ⇒ x ∈ {1, 4, 7}; x &lt; 7 ⇒ x = 1 veya 4. En büyük x = 4.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>3x4y ve 7x4y dört basamaklı doğal sayılardır.</p><p><b>3x4y doğal sayısının 12 ile bölümünden kalan 3 ile 7x4y doğal sayısının 12 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "7x4y − 3x4y = 4000 ve 4000 = 12 · 333 + 4'tür. 7x4y'nin kalanı 3 + 4 = 7 olur.",
    answers: [
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>3x7y doğal sayısı 45 ile bölündüğünde 13 kalanını vermektedir.</p><p><b>Buna göre (x + y) <u>en fazla</u> kaçtır?</b></p>",
    diff: 3,
    expl: "5 ile bölümünden kalan 3 ⇒ y = 3 veya 8. 9 ile bölümünden kalan 4 ⇒ 3 + x + 7 + y = 9k + 4 ⇒ x + y + 6 = 9k ⇒ x + y = 3 veya 12 (21 olamaz). y = 8, x = 4 veya y = 3, x = 9 ile x + y = 12 en büyük değerdir.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false }
    ]
  },
  {
    text: "<p>24x5y doğal sayısı 36 ile bölündüğünde 17 kalanını vermektedir.</p><p><b>Buna göre (x − y)'nin alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "4 ile bölümünden kalan 1 ⇒ 5y ∈ {53, 57} ⇒ y = 3 veya 7. 9 ile bölümünden kalan 8 ⇒ 2 + 4 + x + 5 + y = 9k + 8 ⇒ x + y + 3 = 9k. y = 3 ⇒ x = 3, x − y = 0. y = 7 ⇒ x = 8, x − y = 1. Toplam 0 + 1 = 1.",
    answers: [
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>(2346)<sup>2</sup> = 550a716</p><p><b>olduğuna göre a kaçtır?</b></p>",
    diff: 3,
    expl: "2346'nın rakamları toplamı 15 olup 9 ile bölümünden kalan 6'dır; 6<sup>2</sup> = 36 ⇒ kare 9'a tam bölünür. 5 + 5 + 0 + a + 7 + 1 + 6 = 24 + a 9'un katı olmalı ⇒ a = 3.",
    answers: [
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>Rakamları farklı 78A3B doğal sayısı 44 ile tam bölündüğüne göre A'nın alabileceği kaç farklı değer vardır?</b></p>",
    diff: 3,
    expl: "44 = 4 · 11. 4 ile bölünme: 3B ∈ {32, 36} ⇒ B = 2 veya 6. 11 ile bölünme (sağdan +, −, +, −, +): B − 3 + A − 8 + 7 = A + B − 4 11'in katı olmalı. B = 2 ⇒ A = 2; B = 6 ⇒ A = 9. Cevap anahtarı bu iki değeri sayarak 2 kabul eder (A = 2, B = 2 durumunda rakamların farklı olma şartı bozulsa da).",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  }
];

export const MAT_BOLME_BOLUNEBILME_T4: McQ[] = [
  {
    text: "<p>2323 ........ 23</p><p><b>20 basamaklı sayısının 45 ile bölümünden kalan aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "45 = 5 · 9. Birler basamağı 3 olduğundan 5 ile bölümünden kalan 3'tür. Sayıda 10 tane 2, 10 tane 3 vardır; rakamlar toplamı 50 olup 9 ile bölümünden kalan 5'tir. Seçeneklerden 5 ile bölümünden 3, 9 ile bölümünden 5 kalanını veren 23'tür.",
    answers: [
      { text: "3", ok: false },
      { text: "8", ok: false },
      { text: "18", ok: false },
      { text: "23", ok: true },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>Dört basamaklı 4a3b sayısının 13 ile bölümünden kalan 5 olduğuna göre dört basamaklı 2a5b sayısının 13 ile bölümünden kalan kaçtır?</b></p>",
    diff: 3,
    expl: "4a3b − 2a5b = 2000 − 20 = 1980 ve 1980 = 13 · 152 + 4'tür. Buna göre 2a5b'nin kalanı 5 − 4 = 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>6 ile tam bölünemeyen pozitif tam sayılar küçükten büyüğe doğru sıralanıyor.</p><p><b>Bu sıralamada 72. sayı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Her ardışık 6 sayıdan 5'i sıralamaya girer. 72 = 5 · 14 + 2 olduğundan ilk 14 grup 84'e kadar 70 sayı verir. Sonraki 2 sayı 85 ve 86'dır; 72. sayı 86'dır.",
    answers: [
      { text: "91", ok: false },
      { text: "87", ok: false },
      { text: "85", ok: false },
      { text: "86", ok: true },
      { text: "89", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki bölme işlemine göre xy iki basamaklı sayısı kaç farklı değer alır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q4.jpg",
    diff: 3,
    expl: "xy, aaa3 sayısının 36 ile bölümünden kalan olup 10 ≤ xy ≤ 35'tir. a = 1, 2, …, 9 için aaa3'ün 36 ile bölümünden kalanlar: 33, 27, 21, 15, 9, 3, 33, 27, 21. İki basamaklı olanlar 33, 27, 21, 15 olmak üzere 4 farklı değerdir.",
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
    text: "<p><b>72 sayısının tam bölen sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "72 = 2<sup>3</sup> · 3<sup>2</sup>. Pozitif bölen sayısı (3 + 1)(2 + 1) = 12; tam bölen sayısı negatifler dahil 2 · 12 = 24.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "24", ok: true },
      { text: "26", ok: false }
    ]
  },
  {
    text: "<p><b>60 sayısının pozitif bölenlerinin kaç tanesi çift sayıdır?</b></p>",
    diff: 2,
    expl: "60 = 2<sup>2</sup> · 3 · 5. Tüm pozitif bölenler (2 + 1)(1 + 1)(1 + 1) = 12, tek bölenler (1 + 1)(1 + 1) = 4. Çift bölenler 12 − 4 = 8.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true }
    ]
  },
  {
    text: "<p><b>150 sayısının pozitif bölenlerinden çift olanlar tek sayı olanlardan kaç fazladır?</b></p>",
    diff: 2,
    expl: "150 = 2 · 3 · 5<sup>2</sup>. Pozitif bölen sayısı 2 · 2 · 3 = 12, tek bölenler 2 · 3 = 6, çift bölenler 12 − 6 = 6. Fark 0'dır.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>120 sayısının asal olmayan pozitif bölen sayısı ile asal olan pozitif bölen sayısı çarpımı kaçtır?</b></p>",
    diff: 1,
    expl: "120 = 2<sup>3</sup> · 3 · 5. Pozitif bölen sayısı 4 · 2 · 2 = 16. Asal bölenler 2, 3, 5 (3 tane); asal olmayanlar 16 − 3 = 13. Çarpım 13 · 3 = 39.",
    answers: [
      { text: "48", ok: false },
      { text: "39", ok: true },
      { text: "16", ok: false },
      { text: "13", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p><b>24<sup>3</sup> · 15<sup>2</sup> sayısının kaç tane negatif tam sayı böleni vardır?</b></p>",
    diff: 2,
    expl: "24<sup>3</sup> · 15<sup>2</sup> = 2<sup>9</sup> · 3<sup>3</sup> · 3<sup>2</sup> · 5<sup>2</sup> = 2<sup>9</sup> · 3<sup>5</sup> · 5<sup>2</sup>. Pozitif bölen sayısı 10 · 6 · 3 = 180; negatif bölen sayısı da 180'dir.",
    answers: [
      { text: "12", ok: false },
      { text: "60", ok: false },
      { text: "90", ok: false },
      { text: "162", ok: false },
      { text: "180", ok: true }
    ]
  },
  {
    text: "<p>ekok(a, b) = 600<br>ebob(a, b) = 20</p><p><b>olacak şekilde verilen a, b doğal sayıları için a · b değeri kaçtır?</b></p>",
    diff: 1,
    expl: "a · b = ebob(a, b) · ekok(a, b) = 20 · 600 = 12000.",
    answers: [
      { text: "30", ok: false },
      { text: "50", ok: false },
      { text: "100", ok: false },
      { text: "2400", ok: false },
      { text: "12000", ok: true }
    ]
  },
  {
    text: "<p>16, 18 ve 36 br uzunluktaki doğru parçaları eşit uzunlukta ve artansız parçalara bölünecektir.</p><p><b>En az kaç doğru parçası elde edilir?</b></p>",
    diff: 1,
    expl: "En az parça için parça uzunluğu ebob(16, 18, 36) = 2 alınır. Parça sayısı 8 + 9 + 18 = 35.",
    answers: [
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "35", ok: true },
      { text: "70", ok: false },
      { text: "144", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık üç çift sayının ekoku 420 olduğuna göre ortanca sayı kaçtır?</b></p>",
    diff: 2,
    expl: "420 = 2<sup>2</sup> · 3 · 5 · 7. 10 = 2 · 5, 12 = 2<sup>2</sup> · 3, 14 = 2 · 7 sayılarının ekoku 420'dir. Ortanca sayı 12'dir.",
    answers: [
      { text: "10", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c birbirinden farklı asal sayılar olmak üzere,</p><p>x = a<sup>3</sup> · b<sup>2</sup><br>y = a<sup>2</sup> · b · c<sup>3</sup><br>z = a<sup>7</sup> · b<sup>4</sup> · c<sup>6</sup></p><p><b>ekok(x, y, z) ÷ ebob(x, y, z) oranı kaçtır?</b></p>",
    diff: 2,
    expl: "ekok: tüm asalların en büyük üsleri ⇒ a<sup>7</sup> · b<sup>4</sup> · c<sup>6</sup>. ebob: ortak asalların en küçük üsleri (c, x'te yok) ⇒ a<sup>2</sup> · b. Oran: a<sup>5</sup> · b<sup>3</sup> · c<sup>6</sup>.",
    answers: [
      { text: "a<sup>5</sup>b<sup>3</sup>c<sup>6</sup>", ok: true },
      { text: "a<sup>4</sup>bc", ok: false },
      { text: "a<sup>5</sup>b<sup>4</sup>", ok: false },
      { text: "a<sup>3</sup>b<sup>3</sup>c<sup>3</sup>", ok: false },
      { text: "a<sup>3</sup>b<sup>4</sup>", ok: false }
    ]
  },
  {
    text: "<p>Kenar uzunlukları 30 m ve 45 m olan dikdörtgen biçimde bir kâğıt eş kare bölmelere ayrılacaktır.</p><p><b><u>En az</u> kaç bölme elde edilir?</b></p>",
    diff: 2,
    expl: "Cevap anahtarı 54'tür; bu değer karenin kenarı 5 m alındığında elde edilir: (30 · 45) / (5 · 5) = 6 · 9 = 54. (Not: En az bölme için kenar ebob(30, 45) = 15 m alınırsa 2 · 3 = 6 bölme çıkar; bu değer seçeneklerde yoktur.)",
    answers: [
      { text: "45", ok: false },
      { text: "60", ok: false },
      { text: "54", ok: true },
      { text: "70", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p>a ve b pozitif tam sayıları için (a + 2b) ile (3a − b) sayıları aralarında asaldır.</p><p>ekok(a + 2b, 3a − b) = 19</p><p><b>olduğuna göre 3a + 2b kaçtır?</b></p>",
    diff: 2,
    expl: "Aralarında asal sayıların ekoku çarpımlarıdır: (a + 2b)(3a − b) = 19. a + 2b ≥ 3 olduğundan a + 2b = 19 ve 3a − b = 1. b = 3a − 1 ⇒ 7a − 2 = 19 ⇒ a = 3, b = 8. 3a + 2b = 9 + 16 = 25.",
    answers: [
      { text: "22", ok: false },
      { text: "25", ok: true },
      { text: "17", ok: false },
      { text: "15", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>1 &lt; x &lt; y olacak şekilde aralarında asal x ve y sayılarının ekokları ile ebobları toplamı 103 olduğuna göre y − x değeri en az kaçtır?</b></p>",
    diff: 2,
    expl: "ebob = 1 ⇒ ekok = 102 = x · y. 1 &lt; x &lt; y ve aralarında asal çiftler: (2, 51), (3, 34), (6, 17). En küçük fark 17 − 6 = 11.",
    answers: [
      { text: "49", ok: false },
      { text: "31", ok: false },
      { text: "17", ok: false },
      { text: "11", ok: true },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>9 · a = a · b + 32</p><p><b>olacak şekilde aralarında asal a, b sayılarının ekokları 40 olduğuna göre b kaçtır?</b></p>",
    diff: 2,
    expl: "Aralarında asal olduklarından a · b = 40. 9a = 40 + 32 = 72 ⇒ a = 8, b = 5.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c doğal sayılar olmak üzere</p><p>K = 4a − 2 = 5b + 3 = 7c + 5</p><p><b>olduğuna göre K'nın <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Her tarafa 2 eklenirse K + 2 = 4a = 5(b + 1) = 7(c + 1). K + 2, 4, 5 ve 7'nin ortak katıdır; en küçük K + 2 = ekok(4, 5, 7) = 140 ⇒ K = 138.",
    answers: [
      { text: "136", ok: false },
      { text: "138", ok: true },
      { text: "140", ok: false },
      { text: "142", ok: false },
      { text: "144", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer doğal sayı olmak üzere</p><p>ekok(a, b) = 36</p><p><b>olduğuna göre a + b en çok kaçtır?</b></p>",
    diff: 1,
    expl: "a ve b'nin farklı olması gerekmediğinden a = b = 36 alınabilir. a + b en çok 72'dir.",
    answers: [
      { text: "13", ok: false },
      { text: "20", ok: false },
      { text: "36", ok: false },
      { text: "54", ok: false },
      { text: "72", ok: true }
    ]
  },
  {
    text: "<p>2/5, 12/5 ve 14/9</p><p><b>rasyonel sayılarının ekok'u kaçtır?</b></p>",
    diff: 2,
    expl: "Rasyonel sayıların ekoku = paylarının ekoku / paydalarının ebobu = ekok(2, 12, 14) / ebob(5, 5, 9) = 84 / 1 = 84.",
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
    text: "<p><b>200 sayısının pozitif bölen sayısının asal çarpanlarının sayısına oranı nedir?</b></p>",
    diff: 1,
    expl: "200 = 2<sup>3</sup> · 5<sup>2</sup>. Pozitif bölen sayısı 4 · 3 = 12; asal çarpanlar 2 ve 5 (2 tane). Oran 12 / 2 = 6.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>360 sayısının pozitif bölenlerinin kaç tanesi tek sayıdır?</b></p>",
    diff: 2,
    expl: "360 = 2<sup>3</sup> · 3<sup>2</sup> · 5. Tek bölenler 3<sup>2</sup> · 5'in bölenleridir: (2 + 1)(1 + 1) = 6.",
    answers: [
      { text: "2", ok: false },
      { text: "6", ok: true },
      { text: "12", ok: false },
      { text: "15", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "<p><b>Üçü birlikte eşit olmayan ve ebobları 16 olan üç tam sayının toplamı aşağıdakilerden hangisi <u>olamaz</u>?</b></p>",
    diff: 2,
    expl: "Sayılar 16x, 16y, 16z (ebob(x, y, z) = 1) biçimindedir; toplam 16(x + y + z). 48 için x + y + z = 3 olmalı; pozitif sayılarla bu yalnızca 1, 1, 1 ile olur ve sayılar 16, 16, 16 (üçü eşit) olur. Bu nedenle toplam 48 olamaz. Diğerleri mümkündür (ör. 64: 16, 16, 32).",
    answers: [
      { text: "48", ok: true },
      { text: "64", ok: false },
      { text: "80", ok: false },
      { text: "96", ok: false },
      { text: "112", ok: false }
    ]
  },
  {
    text: "<p>a ve b birbirinden farklı iki doğal sayı olmak üzere</p><p>(a, b)<sub>ekok</sub> = 40</p><p><b>olduğuna göre a + b değeri en çok kaçtır?</b></p>",
    diff: 1,
    expl: "Toplamın en büyük olması için sayılardan biri 40, diğeri 40'ın kendisinden sonraki en büyük böleni 20 seçilir: 40 + 20 = 60.",
    answers: [
      { text: "10", ok: false },
      { text: "20", ok: false },
      { text: "40", ok: false },
      { text: "60", ok: true },
      { text: "80", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c birer doğal sayı olmak üzere;</p><p>M = 2a − 5 = 3b − 1 = 5c + 8</p><p><b>olduğuna göre üç basamaklı <u>en küçük</u> M sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "Her tarafa 7 eklenirse M + 7 = 2(a + 1) = 3(b + 2) = 5(c + 3). M + 7, ekok(2, 3, 5) = 30'un katıdır. M + 7 = 120 ⇒ M = 113 (M + 7 = 90 ⇒ M = 83 iki basamaklıdır).",
    answers: [
      { text: "101", ok: false },
      { text: "113", ok: true },
      { text: "120", ok: false },
      { text: "127", ok: false },
      { text: "133", ok: false }
    ]
  },
  {
    text: "<p>x, y ve z sayma sayıları için;</p><p>K = 5 · x + 16 = 9 · y + 29 = 15 · z − 19</p><p><b>olduğuna göre üç basamaklı <u>en küçük</u> K sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "Her tarafa 34 eklenirse K + 34 = 5(x + 10) = 9(y + 7) = 15(z + 1). K + 34, ekok(5, 9, 15) = 45'in katıdır: K = 45n − 34 ⇒ 11, 56, 101, … Üç basamaklı en küçük K = 101 (x = 17, y = 8, z = 8).",
    answers: [
      { text: "101", ok: true },
      { text: "111", ok: false },
      { text: "124", ok: false },
      { text: "135", ok: false },
      { text: "146", ok: false }
    ]
  },
  {
    text: "<p><b>5'e bölündüğünde 3, 6'ya bölündüğünde 2, 7'ye bölündüğünde 6 kalanını veren üç basamaklı sayıların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "A = 7c + 6 yazılır. 6 ile bölümünden kalan 2 ⇒ c = 6k + 2 ⇒ A = 42k + 20. 5 ile bölümünden kalan 3 ⇒ 2k ≡ 3 (mod 5) ⇒ k = 5m + 4 ⇒ A = 210m + 188. Üç basamaklılar: 188, 398, 608, 818. Toplam 2012.",
    answers: [
      { text: "1992", ok: false },
      { text: "2002", ok: false },
      { text: "2018", ok: false },
      { text: "2012", ok: true },
      { text: "2078", ok: false }
    ]
  },
  {
    text: "<p>Boyutları 30 m, 42 m ve 60 m olan bir depoya eş küpler yerleştirilecek.</p><p><b>Bu depoya <u>en çok</u> kaç küp yerleştirilir?</b></p>",
    diff: 2,
    expl: "Küpün kenarı ebob(30, 42, 60) = 6 m alınır. Küp sayısı (30 · 42 · 60) / (6 · 6 · 6) = 5 · 7 · 10 = 350.",
    answers: [
      { text: "240", ok: false },
      { text: "480", ok: false },
      { text: "360", ok: false },
      { text: "350", ok: true },
      { text: "540", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b iki farklı doğal sayı olmak üzere; ekok(a, b) = 60 ise a + b toplamının en büyük değeri ile <u>en küçük</u> değerinin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "En büyük toplam: 60 + 30 = 90. En küçük toplam için 60 = 2<sup>2</sup> · 3 · 5 aralarında asal iki çarpana ayrılır: 12 + 5 = 17, 4 + 15 = 19, 3 + 20 = 23; en küçüğü 17. Sonuç 90 + 17 = 107.",
    answers: [
      { text: "90", ok: false },
      { text: "97", ok: false },
      { text: "107", ok: true },
      { text: "120", ok: false },
      { text: "137", ok: false }
    ]
  },
  {
    text: "<p>a ve b aralarında asal olmak üzere;</p><p>okek(4a, 8b) / obeb(5a, 10b) = 56</p><p><b>olduğuna göre a + b toplamı en az kaçtır?</b></p>",
    diff: 3,
    expl: "okek(4a, 8b) = 4 · okek(a, 2b), obeb(5a, 10b) = 5 · obeb(a, 2b) ⇒ okek(a, 2b) / obeb(a, 2b) = 70. a tek ise obeb(a, 2b) = 1, okek = 2ab ⇒ ab = 35 ⇒ (5, 7) için a + b = 12. a çift ise ab = 140 olur ve toplam daha büyüktür. En az 12.",
    answers: [
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "12", ok: true },
      { text: "17", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>(a + 3) ve (a<sup>2</sup> − 3a + 9) sayıları aralarında asal olmak üzere,</p><p>ekok((a + 3), (a<sup>2</sup> − 3a + 9)) = 370</p><p><b>olduğuna göre a<sup>2</sup> − 3a + 9 kaçtır?</b></p>",
    diff: 3,
    expl: "Aralarında asal sayıların ekoku çarpımlarıdır: (a + 3)(a<sup>2</sup> − 3a + 9) = a<sup>3</sup> + 27 = 370 ⇒ a<sup>3</sup> = 343 ⇒ a = 7. a<sup>2</sup> − 3a + 9 = 49 − 21 + 9 = 37.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "25", ok: false },
      { text: "37", ok: true },
      { text: "49", ok: false }
    ]
  },
  {
    text: "<p><b>5 m, 4 m boyutlarındaki bir stüdyo duvarı fotoğraf çerçeveleri ile kaplanmak isteniyor. Duvar yalnızca kare olan çerçevelerle kaplandığında, boyutları eş kare çerçevelerle kaplandığında kullanılan çerçeve sayısından kaç eksik çerçeve gereklidir?</b> (Her durumda en az çerçeve kullanılacaktır.)</p>",
    diff: 3,
    expl: "Eş karelerle: kenar ebob(5, 4) = 1 m ⇒ 20 çerçeve. Farklı boyutlu karelerle: 4 × 4'lük 1 kare ve kalan 1 × 4'lük şerit için 4 tane 1 × 1 kare ⇒ 5 çerçeve. Fark 20 − 5 = 15.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "<p>Bir spor okulunda 170 futbol, 136 basketbol, 102 voleybol öğrencisi vardır. Her branş kendi içinde olmak üzere eş sayılı gruplarla sınıflara ayrılacaklardır.</p><p><b>Mevcutlar 10'ar kişiden az olmamak zorunda olduğuna göre gerekli en az derslik sayısı, en fazla derslik sayısı toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "ebob(170, 136, 102) = 34. Sınıf mevcudu 34'ün 10'dan küçük olmayan bir böleni olmalı: 17 veya 34. Toplam öğrenci 408. En az derslik 408 / 34 = 12, en fazla derslik 408 / 17 = 24. Toplam 36.",
    answers: [
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "18", ok: false },
      { text: "24", ok: false },
      { text: "36", ok: true }
    ]
  },
  {
    text: "<p>a, b ve c tam sayılar olmak üzere; günlük 120 soru, 160 soru ve 200 soru çözen üç öğrenci, aynı soru bankasını sırasıyla a, b ve c günde bitirmişlerdir.</p><p><b>En küçük a, b ve c değerleri için a + b + c toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Soru sayısı 120, 160 ve 200'ün ortak katıdır; en küçüğü ekok = 2400. a = 20, b = 15, c = 12 ⇒ toplam 47.",
    answers: [
      { text: "45", ok: false },
      { text: "46", ok: false },
      { text: "47", ok: true },
      { text: "48", ok: false },
      { text: "49", ok: false }
    ]
  },
  {
    text: "<p>Bir DJ remix çalışması esnasında 24/5 dakikalık, 12/3 dakikalık ve 3/2 dakikalık ses kayıtlarını 15:00'da aynı anda açıp molaya çıkıyor.</p><p><b>DJ 16:15'te döndüğünde kayıtlar kaç kez tekrar birlikte başlamışlardır?</b></p>",
    diff: 2,
    expl: "ekok = ekok(24, 12, 3) / ebob(5, 3, 2) = 24 / 1 = 24 dakika. 75 dakikada 24., 48. ve 72. dakikalarda birlikte başlarlar: 3 kez.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },

// ─── EBOB - EKOK TEST - 3 ─────────────────────────────────────────────────────

  {
    text: "<p><b>Farklarının mutlak değeri 168 olan a ve b tam sayılarının ebobu aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 2,
    expl: "ebob(a, b) hem a'yı hem b'yi böldüğünden |a − b| = 168'i de böler. 168 = 2<sup>3</sup> · 3 · 7; seçeneklerden yalnızca 21 168'i böler.",
    answers: [
      { text: "5", ok: false },
      { text: "11", ok: false },
      { text: "21", ok: true },
      { text: "27", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p><b>Ebob'u, Ekok'unun %10'una eşit olan iki basamaklı a ve b tam sayıları için a − b = 42 olduğuna göre a + b toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "a = e · m, b = e · n (m, n aralarında asal) ise ekok = e · m · n ve ebob = e. e = e · m · n / 10 ⇒ m · n = 10 ⇒ (m, n) = (10, 1) veya (5, 2). a − b = e(m − n) = 42: (10, 1) için 9e = 42 olmaz; (5, 2) için 3e = 42 ⇒ e = 14. a = 70, b = 28 ⇒ a + b = 98.",
    answers: [
      { text: "42", ok: false },
      { text: "84", ok: false },
      { text: "98", ok: true },
      { text: "140", ok: false },
      { text: "154", ok: false }
    ]
  },
  {
    text: "<p>a = 7! + 8!<br>b = 8! + 9!</p><p><b>olduğuna göre; ekok(a, b) / (a + b) değeri kaçtır?</b></p>",
    diff: 3,
    expl: "a = 7!(1 + 8) = 9 · 7!, b = 8!(1 + 9) = 10 · 8 · 7! = 80 · 7!. ekok(a, b) = 7! · ekok(9, 80) = 720 · 7!, a + b = 89 · 7!. Oran 720/89.",
    answers: [
      { text: "10", ok: false },
      { text: "11!", ok: false },
      { text: "240/75", ok: false },
      { text: "720/89", ok: true },
      { text: "990/(7! · 8 · 9)", ok: false }
    ]
  },
  {
    text: "<p><b>75 = b · c + k bölme algoritmasına göre ebob(75, b) = 3 olduğuna göre ebob(b, k) kaçtır?</b></p>",
    diff: 2,
    expl: "k = 75 − b · c olduğundan b ile k'nın ortak bölenleri b ile 75'in ortak bölenleriyle aynıdır (Öklid algoritması). ebob(b, k) = ebob(75, b) = 3.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>20 m ve 70 m ebatlarındaki bir bahçe peyzaj firması tarafından parsellere ayrılarak tüm köşelere fidan veya ağaç dikilecektir. Bahçenin kenarlarına denk gelen köşelere yetişmiş ağaçlar, içerde kalan köşelere fidan dikili yapılacak. Firma ağaç dikimi için 20'şer TL, fidan dikimi için 10'ar TL olacaktır.</p><p><b>Firmaya toplam ne kadar ödeme yapılacaktır?</b></p>",
    diff: 3,
    expl: "En büyük kare parsel kenarı ebob(20, 70) = 10 m'dir; bahçe 2 × 7 parsele ayrılır. Köşe noktaları 3 · 8 = 24 tanedir. Kenardaki noktalar 2 · (3 + 8) − 4 = 18 (ağaç), içerdekiler 24 − 18 = 6 (fidan). Ödeme 18 · 20 + 6 · 10 = 360 + 60 = 420 TL.",
    answers: [
      { text: "360", ok: false },
      { text: "540", ok: false },
      { text: "420", ok: true },
      { text: "400", ok: false },
      { text: "280", ok: false }
    ]
  },

// ─── RASYONEL SAYILAR TEST - 1 ────────────────────────────────────────────────

  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q41.jpg",
    diff: 1,
    expl: "Pay: (1 + 1/2) · (2 − 2/3) = 3/2 · 4/3 = 2. Payda: (2 − 3/4) · (1 − 1/5) = 5/4 · 4/5 = 1. Sonuç 2 / 1 = 2.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q42.jpg",
    diff: 1,
    expl: "3 + 1/3 = 10/3 ⇒ 1 / (10/3) = 3/10. 1/3 − 3/10 = 10/30 − 9/30 = 1/30.",
    answers: [
      { text: "1/20", ok: false },
      { text: "1/15", ok: false },
      { text: "1/10", ok: false },
      { text: "1/30", ok: true },
      { text: "1/6", ok: false }
    ]
  },
  {
    text: "<p>(1/5 + 3/4 − 3/8) : 3/8</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1/5 + 3/4 − 3/8 = 8/40 + 30/40 − 15/40 = 23/40. 23/40 : 3/8 = 23/40 · 8/3 = 23/15.",
    answers: [
      { text: "23/15", ok: true },
      { text: "3/11", ok: false },
      { text: "2", ok: false },
      { text: "1/8", ok: false },
      { text: "11/8", ok: false }
    ]
  },
  {
    text: "<p>(1/3 − 2/5) + (5/3 + 2/5)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "−2/5 ile +2/5 birbirini götürür: 1/3 + 5/3 = 6/3 = 2.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q45.jpg",
    diff: 2,
    expl: "Pay: (1 − 1/3) + (1/3 − 4) = 1 − 4 = −3. Payda: (2 + 1/5) − (1 + 1/5) = 1. Sonuç −3.",
    answers: [
      { text: "−2", ok: false },
      { text: "−3", ok: true },
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q46.jpg",
    diff: 2,
    expl: "Pay: 1/3 − 3/4 · 1/6 = 1/3 − 1/8 = 5/24. Payda: 1/4 − 1/8 = 1/8. Sonuç (5/24) / (1/8) = 5/3.",
    answers: [
      { text: "5/3", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>2/7 − 1/7 : (1 + 1/7)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1 + 1/7 = 8/7. Önce bölme: 1/7 : 8/7 = 1/8. Sonra 2/7 − 1/8 = 16/56 − 7/56 = 9/56.",
    answers: [
      { text: "1/8", ok: false },
      { text: "11/56", ok: false },
      { text: "9/56", ok: true },
      { text: "7/8", ok: false },
      { text: "13/56", ok: false }
    ]
  },
  {
    text: "<p>(1 − 1/9) · (1 − 1/16) · (1 − 1/25)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "8/9 · 15/16 · 24/25 = (8 · 15 · 24) / (9 · 16 · 25) = 2880 / 3600 = 4/5.",
    answers: [
      { text: "1/5", ok: false },
      { text: "4/5", ok: true },
      { text: "2/5", ok: false },
      { text: "3/5", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q49.jpg",
    diff: 2,
    expl: "Pay: 3 4/7 − 2 1/5 = 25/7 − 11/5 = 125/35 − 77/35 = 48/35. Payda: 5 1/3 = 16/3. Sonuç 48/35 · 3/16 = 9/35.",
    answers: [
      { text: "1/35", ok: false },
      { text: "8/35", ok: false },
      { text: "7/35", ok: false },
      { text: "3/35", ok: false },
      { text: "9/35", ok: true }
    ]
  },
  {
    text: "<p>4/5 + 44/55 + 444/555</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "44/55 = 4/5 ve 444/555 = 4/5'tir. Toplam 3 · 4/5 = 12/5.",
    answers: [
      { text: "8/5", ok: false },
      { text: "4/5", ok: false },
      { text: "1/5", ok: false },
      { text: "12/5", ok: true },
      { text: "13/5", ok: false }
    ]
  },
  {
    text: "<p>x = 1/4 + 2/5 + 1/3 ise</p><p><b>7/4 + 3/5 + 5/3 ifadesinin x türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İstenen ifadeye y denirse x + y = (1/4 + 7/4) + (2/5 + 3/5) + (1/3 + 5/3) = 2 + 1 + 2 = 5 ⇒ y = 5 − x.",
    answers: [
      { text: "x − 6", ok: false },
      { text: "5 − x", ok: true },
      { text: "x + 6", ok: false },
      { text: "x − 3", ok: false },
      { text: "3 − x", ok: false }
    ]
  },
  {
    text: "<p>a = 3/5 + 1/7</p><p><b>olduğuna göre 4/5 + 5/7 ifadesinin a türünden değeri kaçtır?</b></p>",
    diff: 3,
    expl: "İstenen ifadeye b denirse 2a = 6/5 + 2/7 ve 2a + b = (6/5 + 4/5) + (2/7 + 5/7) = 2 + 1 = 3 ⇒ b = 3 − 2a.",
    answers: [
      { text: "2 + 2a", ok: false },
      { text: "2a − 2", ok: false },
      { text: "3 − 2a", ok: true },
      { text: "a − 2", ok: false },
      { text: "2 − a", ok: false }
    ]
  },

// ─── RASYONEL SAYILAR TEST - 2 ────────────────────────────────────────────────

  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q53.jpg",
    diff: 2,
    expl: "1 − 1/4 = 3/4 ⇒ 1 / (3/4) = 4/3. 1 + 4/3 = 7/3.",
    answers: [
      { text: "5/3", ok: false },
      { text: "7/4", ok: false },
      { text: "7/3", ok: true },
      { text: "7/2", ok: false },
      { text: "1/3", ok: false }
    ]
  },
  {
    text: "<p>(1 + 1/3) · (1 + 1/4) .... (1 + 1/77)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "4/3 · 5/4 · 6/5 · … · 78/77 çarpımında ardışık pay ve paydalar sadeleşir; geriye 78/3 = 26 kalır.",
    answers: [
      { text: "26", ok: true },
      { text: "23", ok: false },
      { text: "4/77", ok: false },
      { text: "27", ok: false },
      { text: "1/77", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q55.jpg",
    diff: 3,
    expl: "Ana kesir çizgilerine dikkat edilir. Birinci terim: (2/3) / 4 = 2/12 = 1/6. İkinci terim: 2 / (3/4) = 8/3. Toplam 1/6 + 8/3 = 1/6 + 16/6 = 17/6.",
    answers: [
      { text: "13/5", ok: false },
      { text: "13/6", ok: false },
      { text: "17/5", ok: false },
      { text: "17/6", ok: true },
      { text: "11/6", ok: false }
    ]
  },
  {
    text: "<p><b>x/100 sayısı y/10 sayısının kaç katıdır?</b></p>",
    diff: 1,
    expl: "(x/100) : (y/10) = x/100 · 10/y = x / (10y).",
    answers: [
      { text: "10x/y", ok: false },
      { text: "10y/x", ok: false },
      { text: "x/(10y)", ok: true },
      { text: "y/(10x)", ok: false },
      { text: "100 · x/y", ok: false }
    ]
  },
  {
    text: "<p>0,4/0,04 + 0,2/0,02 + 10/0,05</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "0,4/0,04 = 10, 0,2/0,02 = 10, 10/0,05 = 1000/5 = 200. Toplam 220.",
    answers: [
      { text: "200", ok: false },
      { text: "20", ok: false },
      { text: "22", ok: false },
      { text: "222", ok: false },
      { text: "220", ok: true }
    ]
  },
  {
    text: "<p>(0,3/4 − 0,4/3) : 0,5/6</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "0,3/4 − 0,4/3 = (0,9 − 1,6)/12 = −0,7/12. (−0,7/12) : (0,5/6) = (−0,7/12) · (6/0,5) = −0,7 / 1 = −0,7.",
    answers: [
      { text: "−0,5", ok: false },
      { text: "−0,1", ok: false },
      { text: "−0,6", ok: false },
      { text: "−0,7", ok: true },
      { text: "−0,4", ok: false }
    ]
  },
  {
    text: "<p>x pozitif bir reel sayı olmak üzere;</p><p>x + 3/8</p><p><b>toplamı pozitif bir tam sayıya eşit olduğuna göre x sayısının virgülden sonraki kısmının rakamları toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "3/8 = 0,375. Toplamın tam sayı olması için x'in virgülden sonraki kısmı 1 − 0,375 = 0,625 olmalıdır. Rakamlar toplamı 6 + 2 + 5 = 13.",
    answers: [
      { text: "11", ok: false },
      { text: "13", ok: true },
      { text: "14", ok: false },
      { text: "12", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q60.jpg",
    diff: 2,
    expl: "Pay: 0,2 + 0,02 + 0,002 = 0,222. Payda: 0,4 − 0,03 = 0,37. 0,222 / 0,37 = 222/370 = 0,6. 0,6 : 0,3 = 2.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true },
      { text: "1", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/bolme-bolunebilme_t3_q61.jpg",
    diff: 2,
    expl: "1/0,1 = 10 ve 0,3/0,03 = 10 ⇒ pay 20. Payda 0,2/2 = 0,1. Sonuç 20 / 0,1 = 200.",
    answers: [
      { text: "0,1", ok: false },
      { text: "100", ok: false },
      { text: "10", ok: false },
      { text: "0,01", ok: false },
      { text: "200", ok: true }
    ]
  },
  {
    text: "<p>0,x/0,0x − 0,0x/0,x + x/0,x</p><p><b>işleminde x bir tam sayı olduğuna göre sonuç kaçtır?</b></p>",
    diff: 2,
    expl: "0,x/0,0x = 10, 0,0x/0,x = 0,1, x/0,x = 10. Sonuç 10 − 0,1 + 10 = 19,9.",
    answers: [
      { text: "1,9", ok: false },
      { text: "199", ok: false },
      { text: "1,99", ok: false },
      { text: "19,9", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "<p>[(0,2) · (0,3)] / [(1,2)<sup>2</sup> − (0,6)<sup>2</sup>]</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "Pay: 0,06. Payda iki kare farkıdır: (1,2 − 0,6)(1,2 + 0,6) = 0,6 · 1,8 = 1,08. 0,06 / 1,08 = 6/108 = 1/18.",
    answers: [
      { text: "1/18", ok: true },
      { text: "1/9", ok: false },
      { text: "1/36", ok: false },
      { text: "1/6", ok: false },
      { text: "1/24", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer pozitif tam sayı olmak üzere;</p><p>3,6 = a + b/5</p><p><b>olduğuna göre b'nin alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "3,6 = 18/5 ⇒ 5a + b = 18. a = 1, 2, 3 için b = 13, 8, 3. Toplam 24.",
    answers: [
      { text: "28", ok: false },
      { text: "21", ok: false },
      { text: "20", ok: false },
      { text: "26", ok: false },
      { text: "24", ok: true }
    ]
  }
];
