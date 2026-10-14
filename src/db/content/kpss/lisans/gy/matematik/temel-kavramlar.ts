import type { McQ } from "../../../../types";

export const MAT_DEGER_VERME: McQ[] = [
  {
    text: "<p><b>a, b ve c birbirinden farklı birer rakam olmak üzere; a + 3b + 5c ifadesinin <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 1,
    expl: "En büyük katsayılı değişkene en küçük rakam verilir: c = 0, b = 1, a = 2. Sonuç: 2 + 3 · 1 + 5 · 0 = 5.",
    answers: [
      { text: "0", ok: false },
      { text: "5", ok: true },
      { text: "9", ok: false },
      { text: "11", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c birer negatif tam sayı olmak üzere, a + 2b + 3c ifadesinin <u>en büyük</u> değeri kaçtır?</b></p>",
    diff: 1,
    expl: "İfadenin en büyük olması için negatif sayılar sıfıra en yakın seçilir. Farklı olma şartı olmadığından a = b = c = −1 alınır: −1 + 2 · (−1) + 3 · (−1) = −6.",
    answers: [
      { text: "−14", ok: false },
      { text: "−10", ok: false },
      { text: "−6", ok: true },
      { text: "−4", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>a ve b birbirinden farklı birer doğal sayı olmak üzere;</p><p>a + b = 10 ise</p><p><b>3a + 2b ifadesi <u>en çok</u> kaçtır?</b></p>",
    diff: 1,
    expl: "3a + 2b = 2(a + b) + a = 20 + a olduğundan a en büyük seçilir: a = 10, b = 0. Sonuç: 30 + 0 = 30.",
    answers: [
      { text: "24", ok: false },
      { text: "25", ok: false },
      { text: "26", ok: false },
      { text: "29", ok: false },
      { text: "30", ok: true }
    ]
  },
  {
    text: "<p><b>a ve b tam sayı olmak üzere a + b = 13 ise a · b ifadesi <u>en çok</u> kaçtır?</b></p>",
    diff: 1,
    expl: "Toplamı sabit iki sayının çarpımı, sayılar birbirine en yakın olduğunda en büyüktür: a = 6, b = 7 için a · b = 42.",
    answers: [
      { text: "13", ok: false },
      { text: "36", ok: false },
      { text: "40", ok: false },
      { text: "42", ok: true },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b doğal sayı olmak üzere a + b = 11 ise a · b <u>en çok</u> kaçtır?</b></p>",
    diff: 1,
    expl: "Toplamı 11 olan birbirine en yakın iki doğal sayı 5 ve 6'dır. Çarpımları: 5 · 6 = 30.",
    answers: [
      { text: "0", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "30", ok: true },
      { text: "33", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b pozitif tam sayı olmak üzere ab = 36 ise a + b ifadesi <u>en az</u> kaçtır?</b></p>",
    diff: 1,
    expl: "Çarpımı sabit iki sayının toplamı, sayılar birbirine en yakın olduğunda en küçüktür. Farklı olma şartı olmadığından a = b = 6 alınır: 6 + 6 = 12.",
    answers: [
      { text: "12", ok: true },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "37", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b birer rakam olmak üzere a · b = 12 ise a + b ifadesinin alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "Çarpımı 12 olan rakam çiftleri: (2, 6), (6, 2), (3, 4), (4, 3). Toplamlar 8 ve 7 olmak üzere 2 farklı değer vardır.",
    answers: [
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b birbirinden farklı birer negatif tam sayı olmak üzere a · b = 36 ise a + b ifadesi <u>en çok</u> kaçtır?</b></p>",
    diff: 2,
    expl: "Negatif sayıların toplamının en büyük olması için sayılar birbirine en yakın seçilir. a = b = −6 olamayacağından (farklı olmalı) a = −4, b = −9 alınır: a + b = −13.",
    answers: [
      { text: "−12", ok: false },
      { text: "−13", ok: true },
      { text: "−15", ok: false },
      { text: "−20", ok: false },
      { text: "−37", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c tam sayı olmak üzere</p><p>a · b = 21<br>b · c = 36</p><p><b>olduğuna göre a + 2b − 3c ifadesinin değeri en çok kaçtır?</b></p>",
    diff: 3,
    expl: "c'nin negatif ve mutlak değerce büyük olması gerekir; b ile c aynı işaretlidir. b = −1 seçilirse a = −21, c = −36 olur: −21 + 2 · (−1) − 3 · (−36) = −21 − 2 + 108 = 85.",
    answers: [
      { text: "−85", ok: false },
      { text: "−23", ok: false },
      { text: "13", ok: false },
      { text: "23", ok: false },
      { text: "85", ok: true }
    ]
  },
  {
    text: "<p>a, b ve c birer tam sayı olmak üzere;</p><p>a · b = 6<br>b · c = 8 ise</p><p><b>a + b + c ifadesi <u>en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "Toplamın en az olması için sayılar negatif ve mutlak değerce büyük seçilir. b = −1 için a = −6, c = −8 olur: −6 − 1 − 8 = −15.",
    answers: [
      { text: "−6", ok: false },
      { text: "−9", ok: false },
      { text: "−15", ok: true },
      { text: "9", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c birbirinden farklı pozitif tam sayılar olmak üzere,</p><p>a = b · (c − 1) ve a + b = 14</p><p><b>olduğuna göre b'nin alabileceği en büyük ve en küçük değerler toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "a = bc − b ⇒ a + b = bc = 14. b = 1 ⇒ c = 14, a = 13; b = 2 ⇒ c = 7, a = 12; b = 7 ⇒ c = 2, a = 7; b = 14 ⇒ a = 0 (olmaz). Cevap anahtarı b = 1 ve b = 7 değerlerini alarak 1 + 7 = 8 sonucunu verir. (Not: b = 7 için a = b = 7 olup 'farklı' şartı bozulur; bu şart dikkate alınırsa sonuç 1 + 2 = 3 olur.)",
    answers: [
      { text: "3", ok: false },
      { text: "15", ok: false },
      { text: "8", ok: true },
      { text: "7", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c doğal sayı ve a &gt; b &gt; 10 &gt; c olmak üzere a + b + c = 60 ise b en çok kaçtır?</b></p>",
    diff: 2,
    expl: "b'nin en çok olması için c en küçük seçilir: c = 0. a + b = 60 ve a &gt; b olduğundan b en çok 29 olur (a = 31).",
    answers: [
      { text: "11", ok: false },
      { text: "40", ok: false },
      { text: "29", ok: true },
      { text: "26", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p>a ve b tam sayılardır.</p><p><b>a · b = 18 olduğuna göre a + b toplamının en büyük değeri <u>en küçük</u> değerinden kaç fazladır?</b></p>",
    diff: 2,
    expl: "En büyük toplam: a = 18, b = 1 ⇒ 19. En küçük toplam: a = −18, b = −1 ⇒ −19. Fark: 19 − (−19) = 38.",
    answers: [
      { text: "19", ok: false },
      { text: "28", ok: false },
      { text: "32", ok: false },
      { text: "36", ok: false },
      { text: "38", ok: true }
    ]
  },
  {
    text: "<p>Yukarıda verilen eşitliğe göre;</p><p><b>25a + 20b + 14c ifadesinin değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t1_q14.jpg",
    diff: 3,
    expl: "Paydalar 28, 35, 50 ve 35'tir; EKOK = 700. Eşitliğin her iki tarafı 700 ile çarpılırsa: 25a + 20b + 14c = 20.",
    answers: [
      { text: "20", ok: true },
      { text: "24", ok: false },
      { text: "28", ok: false },
      { text: "32", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c birbirinden farklı tam sayılar olmak üzere,</p><p><b>a = 36/(b · c) olduğuna göre a + b + c ifadesi <u>en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "a · b · c = 36'dır. Toplamın en az olması için bir sayı mutlak değerce çok büyük negatif seçilir: a = −36, b = 1, c = −1 (hepsi farklı, çarpım 36). Toplam: −36 + 1 − 1 = −36.",
    answers: [
      { text: "−36", ok: true },
      { text: "−12", ok: false },
      { text: "−11", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c sıfırdan farklı birer rakamdır.</p><p>a = 3b &nbsp;&nbsp; 2b = c</p><p><b>eşitliklerine göre a + b + c ifadesinin en büyük değeri ile <u>en küçük</u> değerinin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "a + b + c = 3b + b + 2b = 6b. a = 3b bir rakam olduğundan b ∈ {1, 2, 3}. En küçük değer 6, en büyük değer 18; toplamları 24.",
    answers: [
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "18", ok: false },
      { text: "24", ok: true },
      { text: "30", ok: false }
    ]
  }
];

export const MAT_EN_BUYUK_EN_KUCUK: McQ[] = [
  {
    text: "<p><b>3 basamaklı rakamları farklı <u>en büyük</u> doğal sayı ile 2 basamaklı <u>en küçük</u> tam sayının toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "3 basamaklı rakamları farklı en büyük doğal sayı 987, 2 basamaklı en küçük tam sayı −99'dur. Toplam: 987 + (−99) = 888.",
    answers: [
      { text: "997", ok: false },
      { text: "889", ok: false },
      { text: "976", ok: false },
      { text: "1014", ok: false },
      { text: "888", ok: true }
    ]
  },
  {
    text: "<p><b>2 basamaklı <u>en büyük</u> çift doğal sayı ile 2 basamaklı <u>en küçük</u> tek doğal sayının farkı kaçtır?</b></p>",
    diff: 1,
    expl: "2 basamaklı en büyük çift doğal sayı 98, en küçük tek doğal sayı 11'dir. Fark: 98 − 11 = 87.",
    answers: [
      { text: "77", ok: false },
      { text: "87", ok: true },
      { text: "67", ok: false },
      { text: "89", ok: false },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p><b>3 basamaklı <u>en büyük</u> çift tam sayı ile 3 basamaklı rakamları farklı <u>en küçük</u> tek tam sayının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "3 basamaklı en büyük çift tam sayı 998, 3 basamaklı rakamları farklı en küçük tek tam sayı −987'dir. Toplam: 998 + (−987) = 11.",
    answers: [
      { text: "884", ok: false },
      { text: "1", ok: false },
      { text: "11", ok: true },
      { text: "1089", ok: false },
      { text: "1973", ok: false }
    ]
  },
  {
    text: "<p><b>Her rakam birer kez kullanılması koşuluyla yazılabilecek 2 basamaklı 3 doğal sayının toplamı <u>en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "Onlar basamaklarına sıfırdan farklı en küçük rakamlar (1, 2, 3), birler basamaklarına kalan en küçük rakamlar (0, 4, 5) yazılır. Toplam: 10 · (1 + 2 + 3) + (0 + 4 + 5) = 60 + 9 = 69 (ör. 10 + 24 + 35).",
    answers: [
      { text: "69", ok: true },
      { text: "83", ok: false },
      { text: "75", ok: false },
      { text: "102", ok: false },
      { text: "96", ok: false }
    ]
  },
  {
    text: "<p><b>2 basamaklı rakamları farklı <u>en büyük</u> doğal sayı ile asal rakamlarla yazılan 2 basamaklı <u>en küçük</u> tam sayının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "2 basamaklı rakamları farklı en büyük doğal sayı 98'dir. Asal rakamlar 2, 3, 5, 7 olduğundan bunlarla yazılan 2 basamaklı en küçük tam sayı −77'dir. Toplam: 98 + (−77) = 21.",
    answers: [
      { text: "108", ok: false },
      { text: "120", ok: false },
      { text: "11", ok: false },
      { text: "21", ok: true },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>2 basamaklı birbirinden farklı 4 doğal sayının toplamı 333'tür.</p><p><b>Bu sayıların <u>en küçüğü en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "En küçüğün en az olması için diğer üç sayı en büyük seçilir: 99 + 98 + 97 = 294. En küçük sayı: 333 − 294 = 39.",
    answers: [
      { text: "35", ok: false },
      { text: "33", ok: false },
      { text: "36", ok: false },
      { text: "42", ok: false },
      { text: "39", ok: true }
    ]
  },
  {
    text: "<p>3 basamaklı rakamları farklı ve birbirinden farklı 5 doğal sayının toplamı 737'dir.</p><p><b>Bu sayıların <u>en büyüğü en çok</u> kaçtır?</b></p>",
    diff: 3,
    expl: "Diğer dört sayı en küçük seçilir: 102 + 103 + 104 + 105 = 414 ⇒ 737 − 414 = 323 (rakamları farklı değil). 106 alınırsa kalan 322 (rakamları farklı değil). 107 alınırsa: 102 + 103 + 104 + 107 = 416 ⇒ 737 − 416 = 321 (uygun). En büyük sayı en çok 321'dir.",
    answers: [
      { text: "323", ok: false },
      { text: "322", ok: false },
      { text: "324", ok: false },
      { text: "321", ok: true },
      { text: "320", ok: false }
    ]
  },
  {
    text: "<p>3 tanesi 50'den büyük iki basamaklı birbirinden farklı 5 doğal sayının toplamı 209'dur.</p><p><b>Bu sayıların <u>en büyüğü en çok</u> kaçtır?</b></p>",
    diff: 3,
    expl: "En büyüğün en çok olması için diğerleri en küçük seçilir: 50'den büyük olması gerekmeyen iki sayı 10 ve 11, 50'den büyük diğer iki sayı 51 ve 52. Toplamları 124 ⇒ en büyük sayı: 209 − 124 = 85.",
    answers: [
      { text: "82", ok: false },
      { text: "83", ok: false },
      { text: "84", ok: false },
      { text: "85", ok: true },
      { text: "86", ok: false }
    ]
  },
  {
    text: "<p>Birbirinden farklı 5 doğal sayının toplamı 345'tir.</p><p><b>Bu sayıların <u>en büyüğü en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "En büyüğün en az olması için sayılar ardışık seçilir. Ortanca 345 / 5 = 69 ⇒ 67, 68, 69, 70, 71. En büyük sayı en az 71'dir.",
    answers: [
      { text: "68", ok: false },
      { text: "72", ok: false },
      { text: "71", ok: true },
      { text: "70", ok: false },
      { text: "69", ok: false }
    ]
  },
  {
    text: "<p>Birbirinden farklı 7 doğal sayının toplamı 347'dir.</p><p><b>Bu sayıların <u>en küçüğü en çok</u> kaçtır?</b></p>",
    diff: 2,
    expl: "En küçük sayı x olsun; diğerleri en az x + 1, …, x + 6 olur. 7x + 21 ≤ 347 ⇒ x ≤ 46,5… ⇒ x en çok 46'dır (ör. 46, 47, 48, 49, 50, 51, 56).",
    answers: [
      { text: "47", ok: false },
      { text: "48", ok: false },
      { text: "49", ok: false },
      { text: "45", ok: false },
      { text: "46", ok: true }
    ]
  },
  {
    text: "<p>Birbirinden farklı 6 doğal sayının toplamı 270'tir.</p><p><b>Bu sayıların <u>en küçüğü en çok</u> kaçtır?</b></p>",
    diff: 2,
    expl: "En küçük sayı x olsun; diğerleri en az x + 1, …, x + 5 olur. 6x + 15 ≤ 270 ⇒ x ≤ 42,5 ⇒ x en çok 42'dir (ör. 42, 43, 44, 45, 46, 50).",
    answers: [
      { text: "42", ok: true },
      { text: "45", ok: false },
      { text: "44", ok: false },
      { text: "46", ok: false },
      { text: "47", ok: false }
    ]
  },
  {
    text: "<p>4 farklı doğal sayının toplamı 447'dir.</p><p><b>Bu sayıların <u>en büyüğü en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "En büyük sayı y olsun; diğerleri en çok y − 1, y − 2, y − 3 olur. 4y − 6 ≥ 447 ⇒ y ≥ 113,25 ⇒ y en az 114'tür (ör. 110, 111, 112, 114).",
    answers: [
      { text: "113", ok: false },
      { text: "115", ok: false },
      { text: "114", ok: true },
      { text: "111", ok: false },
      { text: "112", ok: false }
    ]
  }
];

export const MAT_ARDISIK_SAYILAR_T1: McQ[] = [
  {
    text: "<p>A = 1 + 2 + 3 + 4 + 5</p><p><b>olduğuna göre A sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "1 + 2 + 3 + 4 + 5 = 5 · 6 / 2 = 15.",
    answers: [
      { text: "13", ok: false },
      { text: "15", ok: true },
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>B = 4 + 8 + 12 + ... + 24</p><p><b>olduğuna göre B sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "B = 4 · (1 + 2 + ... + 6) = 4 · 21 = 84.",
    answers: [
      { text: "76", ok: false },
      { text: "80", ok: false },
      { text: "84", ok: true },
      { text: "88", ok: false },
      { text: "92", ok: false }
    ]
  },
  {
    text: "<p>C = 5 + 7 + ... + 17</p><p><b>olduğuna göre C sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "Terim sayısı: (17 − 5) / 2 + 1 = 7. Toplam: 7 · (5 + 17) / 2 = 7 · 11 = 77.",
    answers: [
      { text: "77", ok: true },
      { text: "75", ok: false },
      { text: "73", ok: false },
      { text: "71", ok: false },
      { text: "69", ok: false }
    ]
  },
  {
    text: "<p>x &lt; y &lt; z olmak üzere,</p><p>x, y ve z ardışık tek tam sayılardır.</p><p>x + 2y + 3z = 22</p><p><b>olduğuna göre z kaçtır?</b></p>",
    diff: 2,
    expl: "y = x + 2, z = x + 4 yazılırsa: x + 2(x + 2) + 3(x + 4) = 22 ⇒ 6x + 16 = 22 ⇒ x = 1, z = 5 bulunur. Not: Kitabın cevap anahtarı D (3) seçeneğini vermektedir; işlem sonucu ise 5'tir (E).",
    answers: [
      { text: "−3", ok: false },
      { text: "−1", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>c &lt; b &lt; a olmak üzere,</p><p>a, b ve c ardışık tam sayılardır.</p><p>a + 2b + 4c = 18</p><p><b>olduğuna göre a kaçtır?</b></p>",
    diff: 2,
    expl: "b = c + 1, a = c + 2 yazılırsa: (c + 2) + 2(c + 1) + 4c = 18 ⇒ 7c + 4 = 18 ⇒ c = 2. a = c + 2 = 4.",
    answers: [
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: true },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>x bir tam sayı olmak üzere,</p><p>(2x − 7) ve (4x + 6)</p><p><b>sayıları ardışık tam sayılar olduğuna göre x'in alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Ardışık iki tam sayının farkı 1 veya −1'dir. (4x + 6) − (2x − 7) = 2x + 13. 2x + 13 = 1 ⇒ x = −6; 2x + 13 = −1 ⇒ x = −7. Toplam: −6 + (−7) = −13.",
    answers: [
      { text: "−1", ok: false },
      { text: "−7", ok: false },
      { text: "−13", ok: true },
      { text: "1", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p>x bir tam sayı olmak üzere,</p><p>(4x − 5) ve (3x − 3)</p><p><b>sayıları ardışık tek tam sayılar olduğuna göre x'in alabileceği farklı değerlerin çarpımı kaçtır?</b></p>",
    diff: 2,
    expl: "Ardışık iki tek sayının farkı 2 veya −2'dir. (4x − 5) − (3x − 3) = x − 2. x − 2 = 2 ⇒ x = 4; x − 2 = −2 ⇒ x = 0. Çarpım: 4 · 0 = 0.",
    answers: [
      { text: "−2", ok: false },
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık 3 tek sayının toplamı 21 olduğuna göre bu sayıların <u>en küçüğü</u> kaçtır?</b></p>",
    diff: 1,
    expl: "Ortanca terim 21 / 3 = 7'dir. Sayılar 5, 7, 9 olup en küçüğü 5'tir.",
    answers: [
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık 15 çift tam sayının toplamı 60 olduğuna göre bu sayıların en küçüğü kaçtır?</b></p>",
    diff: 2,
    expl: "Ortanca (8.) terim 60 / 15 = 4'tür. En küçük terim ortancadan 7 adım geridedir: 4 − 7 · 2 = −10.",
    answers: [
      { text: "−2", ok: false },
      { text: "−4", ok: false },
      { text: "−6", ok: false },
      { text: "−8", ok: false },
      { text: "−10", ok: true }
    ]
  },
  {
    text: "<p>1 − 2 + 3 − 4 + ... + 49 − 50</p><p><b>toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "(1 − 2) + (3 − 4) + ... + (49 − 50) şeklinde 25 grup vardır ve her grup −1'dir. Toplam: 25 · (−1) = −25.",
    answers: [
      { text: "−25", ok: true },
      { text: "−24", ok: false },
      { text: "0", ok: false },
      { text: "24", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "<p>12 − 14 + 16 − 18 + ... + 84 − 86</p><p><b>toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Terim sayısı: (86 − 12) / 2 + 1 = 38, yani 19 grup vardır. Her grup (12 − 14), (16 − 18), ... −2'dir. Toplam: 19 · (−2) = −38.",
    answers: [
      { text: "−44", ok: false },
      { text: "38", ok: false },
      { text: "−4", ok: false },
      { text: "−38", ok: true },
      { text: "44", ok: false }
    ]
  },
  {
    text: "<p>x ve y ardışık pozitif çift tam sayılardır.</p><p>x &lt; y olmak üzere,</p><p>(x + 2) · (y − 2) = 24</p><p><b>olduğuna göre x + y toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "y = x + 2 olduğundan (x + 2) · x = 24 ⇒ x = 4, y = 6. x + y = 10.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>Ardışık 3 tam sayıdan küçük olanın 4 katı, büyük olanın 3 katına eşittir.</p><p><b>Buna göre bu sayıların ortancası kaçtır?</b></p>",
    diff: 2,
    expl: "Sayılar x, x + 1, x + 2 olsun. 4x = 3(x + 2) ⇒ x = 6. Sayılar 6, 7, 8; ortanca 7.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Ardışık 5 çift tam sayıdan küçük olanın 4 katının 20 fazlası, büyük olanın 3 katına eşittir.</p><p><b>Buna göre bu sayıların ortancası kaçtır?</b></p>",
    diff: 2,
    expl: "Sayılar x, x + 2, x + 4, x + 6, x + 8 olsun. 4x + 20 = 3(x + 8) ⇒ x = 4. Sayılar 4, 6, 8, 10, 12 olup ortanca 8 bulunur. Not: Kitabın cevap anahtarı A (14) seçeneğini vermektedir; işlem sonucu ise 8'dir (C).",
    answers: [
      { text: "14", ok: true },
      { text: "10", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>x, y, z ardışık tam sayılardır.</p><p>x &lt; y &lt; z</p><p><b>olduğuna göre yukarıda verilen ifadenin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t3_q15.jpg",
    diff: 2,
    expl: "x − y = −1, x − z = −2, y − z = −1. İfade: (−1 − 2) / (−1) = 3.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>a, b, c ardışık çift tam sayılardır.</p><p>c &lt; b &lt; a</p><p><b>olduğuna göre yukarıda verilen ifadenin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t3_q16.jpg",
    diff: 2,
    expl: "a − c = 4, a − b = 2, b − c = 2. İfade: (4 + 2) / 2 = 3.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false }
    ]
  }
];

export const MAT_ARDISIK_SAYILAR_T2: McQ[] = [
  {
    text: "<p>1 + 2 + 3 + ... + 10 = x<br>2 + 4 + 6 + ... + 20 = y</p><p><b>olduğuna göre x/y ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "y = 2 · (1 + 2 + ... + 10) = 2x olduğundan x/y = 1/2.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>2 + 4 + 6 + ... + 20 = a<br>1 + 3 + 5 + ... + 19 = b</p><p><b>olduğuna göre (a − b) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "Taraf tarafa çıkarılırsa (2 − 1) + (4 − 3) + ... + (20 − 19) = 10 · 1 = 10.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>n bir doğal sayı olmak üzere 1'den n'ye kadar ardışık doğal sayıların toplamı x, 5'ten n'ye kadar olan ardışık doğal sayıların toplamı y'dir.</p><p>x + y = 110</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "x − y = 1 + 2 + 3 + 4 = 10. x + y = 110 ile taraf tarafa toplanırsa 2x = 120 ⇒ x = 60.",
    answers: [
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: false },
      { text: "60", ok: true },
      { text: "70", ok: false }
    ]
  },
  {
    text: "<p>n bir doğal sayı olmak üzere 6'dan n'ye kadar ardışık tam sayıların toplamı x, 19'dan n'ye kadar olan ardışık tam sayıların toplamı y'dir.</p><p>x + y = 224</p><p><b>olduğuna göre y kaçtır?</b></p>",
    diff: 2,
    expl: "x − y = 6 + 7 + ... + 18 = 13 · 12 = 156. x + y = 224 ile çıkarılırsa 2y = 68 ⇒ y = 34.",
    answers: [
      { text: "40", ok: false },
      { text: "39", ok: false },
      { text: "37", ok: false },
      { text: "36", ok: false },
      { text: "34", ok: true }
    ]
  },
  {
    text: "<p>A = 1 · 2 + 2 · 3 + 3 · 4 + ... + 14 · 15</p><p><b>işlemindeki her bir terimin 1. terimi 1 artırılırsa oluşan yeni toplamın değişimi ne olur?</b></p>",
    diff: 2,
    expl: "k · (k + 1) terimi (k + 1) · (k + 1) olur; her terim (k + 1) kadar artar. Toplam artış: 2 + 3 + ... + 15 = 120 − 1 = 119. Toplam 119 artar.",
    answers: [
      { text: "119 azalır.", ok: false },
      { text: "Değişmez.", ok: false },
      { text: "78 artar.", ok: false },
      { text: "119 artar.", ok: true },
      { text: "78 azalır.", ok: false }
    ]
  },
  {
    text: "<p>A = 1 · 2 + 3 · 4 + 5 · 6 + ... + 13 · 14<br>B = 2 · 3 + 4 · 5 + 6 · 7 + ... + 14 · 15</p><p><b>olduğuna göre A − B farkı kaçtır?</b></p>",
    diff: 3,
    expl: "Karşılıklı terimler çıkarılırsa: 2 · (1 − 3) + 4 · (3 − 5) + ... + 14 · (13 − 15) = −2 · (2 + 4 + ... + 14) = −2 · 56 = −112.",
    answers: [
      { text: "−112", ok: true },
      { text: "−110", ok: false },
      { text: "0", ok: false },
      { text: "110", ok: false },
      { text: "112", ok: false }
    ]
  },
  {
    text: "<p>Ahmet, 9'dan başlayarak ve yukarıdaki kurallara uyarak sayma yapıyor.</p><p><b>Buna göre Ahmet'in söylediği 35. sayı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t4_q7.jpg",
    diff: 3,
    expl: "Sırasıyla +4 ve +7 eklendiğinden her iki adımda sayı 11 artar. Tek sıradaki terimler: 1. terim 9, 3. terim 20, 5. terim 31, ... ⇒ (2k + 1). terim = 9 + 11k. 35. terim için k = 17: 9 + 187 = 196.",
    answers: [
      { text: "184", ok: false },
      { text: "188", ok: false },
      { text: "192", ok: false },
      { text: "196", ok: true },
      { text: "203", ok: false }
    ]
  },
  {
    text: "<p>3'ten başlanarak yukarıda verilen kurallara göre sayma işlemi yapılıyor.</p><p><b>Buna göre 93. sayı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t4_q8.jpg",
    diff: 3,
    expl: "Sırasıyla −3 ve +1 eklendiğinden her iki adımda sayı 2 azalır. Tek sıradaki terimler: 1. terim 3, 3. terim 1, 5. terim −1, ... ⇒ n tek ise n. terim = 4 − n. 93. terim: 4 − 93 = −89.",
    answers: [
      { text: "−93", ok: false },
      { text: "−92", ok: false },
      { text: "−91", ok: false },
      { text: "−90", ok: false },
      { text: "−89", ok: true }
    ]
  },
  {
    text: "<p>x ve y pozitif tam sayılar olmak üzere</p><p>x<sup>2</sup> − 7, &nbsp;x + y, &nbsp;x + 7</p><p><b>artan ardışık 3'ün katı tek tam sayılar ise (y − x) ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Ardışık 3'ün katı tek sayılar arasındaki fark 6'dır. (x + 7) − (x<sup>2</sup> − 7) = 12 ⇒ x<sup>2</sup> − x − 2 = 0 ⇒ x = 2 (pozitif). Terimler −3, 2 + y, 9 ⇒ 2 + y = 3 ⇒ y = 1. y − x = 1 − 2 = −1.",
    answers: [
      { text: "−3", ok: false },
      { text: "−2", ok: false },
      { text: "−1", ok: true },
      { text: "0", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>x, y, z ardışık 3'ün katı olan çift tam sayılar ve x &lt; y &lt; z dir.</p><p>3 · x + 4y − 5z = −36</p><p><b>olduğuna göre, x + 2y − z ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Ardışık 3'ün katı çift sayılar arasındaki fark 6'dır: y = x + 6, z = x + 12. 3x + 4(x + 6) − 5(x + 12) = −36 ⇒ 2x − 36 = −36 ⇒ x = 0, y = 6, z = 12. x + 2y − z = 0 + 12 − 12 = 0.",
    answers: [
      { text: "0", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "9", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>a, b, c ardışık 4'ün katı tam sayılar ve c &lt; b &lt; a dır.</p><p>2 · a + 3 · b − 4c = 20</p><p><b>olduğuna göre (a + b)/c ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "b = c + 4, a = c + 8. 2(c + 8) + 3(c + 4) − 4c = 20 ⇒ c + 28 = 20 ⇒ c = −8, b = −4, a = 0. (a + b)/c = −4 / −8 = 1/2.",
    answers: [
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1/2", ok: true }
    ]
  },
  {
    text: "<p>Birbirinden farklı 2 basamaklı iki pozitif tam sayının toplamı x'tir.</p><p><b>Buna göre x kaç farklı değer alabilir?</b></p>",
    diff: 2,
    expl: "En küçük toplam 10 + 11 = 21, en büyük toplam 98 + 99 = 197'dir ve aradaki her değer elde edilebilir. Farklı değer sayısı: 197 − 21 + 1 = 177.",
    answers: [
      { text: "180", ok: false },
      { text: "179", ok: false },
      { text: "178", ok: false },
      { text: "177", ok: true },
      { text: "176", ok: false }
    ]
  },
  {
    text: "<p>1, 2, 3, ..., n terimler olmak üzere</p><p>T = 1<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + ... + n<sup>2</sup></p><p><b>ifadesinde her bir terim 1 artırılınca toplam ne kadar artar?</b></p>",
    diff: 2,
    expl: "Yeni toplam 2<sup>2</sup> + 3<sup>2</sup> + ... + (n + 1)<sup>2</sup> olur. Artış: (n + 1)<sup>2</sup> − 1<sup>2</sup> = n<sup>2</sup> + 2n.",
    answers: [
      { text: "n<sup>2</sup>", ok: false },
      { text: "n<sup>2</sup> + n", ok: false },
      { text: "n<sup>2</sup> + 2n", ok: true },
      { text: "n<sup>2</sup> + 3n", ok: false },
      { text: "n<sup>2</sup> − n", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c ardışık tek tam sayılar ve a &lt; b &lt; c dir.</p><p>(1 − 2/a) · (1 − 2/b) · (1 − 2/c) = 5/11</p><p><b>olduğuna göre b kaçtır?</b></p>",
    diff: 3,
    expl: "İfade ((a − 2)/a) · ((b − 2)/b) · ((c − 2)/c) olur; b − 2 = a ve c − 2 = b olduğundan sadeleşerek (a − 2)/c = 5/11 kalır. c = a + 4 ⇒ 11a − 22 = 5a + 20 ⇒ a = 7, b = 9 bulunur. Not: Kitabın cevap anahtarı B (11) seçeneğini vermektedir; işlem sonucu ise 9'dur (A).",
    answers: [
      { text: "9", ok: false },
      { text: "11", ok: true },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false }
    ]
  },
  {
    text: "<p>Ardışık 3 doğal sayının çarpımı toplamlarının 8 katına eşittir.</p><p><b>Buna göre <u>en büyük</u> sayı kaçtır?</b></p>",
    diff: 2,
    expl: "Sayılar x − 1, x, x + 1 olsun. (x − 1) · x · (x + 1) = 8 · 3x ⇒ x<sup>2</sup> − 1 = 24 ⇒ x = 5. Sayılar 4, 5, 6; en büyüğü 6.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>En küçüğü x olan y tane ardışık tek tam sayının toplamı 15y olduğuna göre y'nin x türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Ortanca terim 15y / y = 15'tir. En büyük terim x + 2(y − 1) olduğundan ortanca (x + x + 2y − 2) / 2 = x + y − 1 = 15 ⇒ y = 16 − x.",
    answers: [
      { text: "x", ok: false },
      { text: "16 + x", ok: false },
      { text: "15 + x", ok: false },
      { text: "15 − x", ok: false },
      { text: "16 − x", ok: true }
    ]
  }
];

export const MAT_ARDISIK_SAYILARIN_TOPLAMI: McQ[] = [
  {
    text: "<p><b>1 + 2 + 3 + ... + n = 210 ise n kaçtır?</b></p>",
    diff: 1,
    expl: "n(n + 1)/2 = 210 ⇒ n(n + 1) = 420 = 20 · 21 ⇒ n = 20.",
    answers: [
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "22", ok: false }
    ]
  },
  {
    text: "<p>−11 − 7 − 3 + 1 + 5 + ... + 93 + 97</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "4'er artan dizide terim sayısı: (97 − (−11)) / 4 + 1 = 28. Toplam: 28 · (97 + (−11)) / 2 = 14 · 86 = 1204.",
    answers: [
      { text: "1161", ok: false },
      { text: "1204", ok: true },
      { text: "1261", ok: false },
      { text: "1240", ok: false },
      { text: "1440", ok: false }
    ]
  },
  {
    text: "<p>A, 3'ten 49'a kadar olan tek sayıların toplamı<br>B, 4'ten 48'e kadar olan çift sayıların toplamı</p><p><b>olduğuna göre A + B toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "A + B = 3 + 4 + 5 + ... + 49 = (1 + 2 + ... + 49) − 3 = 1225 − 3 = 1222.",
    answers: [
      { text: "1222", ok: true },
      { text: "1225", ok: false },
      { text: "1240", ok: false },
      { text: "1440", ok: false },
      { text: "1460", ok: false }
    ]
  },
  {
    text: "<p><b>1'den (4n + 3)'e kadar olan ardışık tam sayıların toplamı 496 olduğuna göre, n sayısının rakamları toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "k = 4n + 3 olsun: k(k + 1)/2 = 496 ⇒ k(k + 1) = 992 = 31 · 32 ⇒ k = 31. 4n + 3 = 31 ⇒ n = 7; rakamları toplamı 7.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "31", ok: false },
      { text: "35", ok: false }
    ]
  },
  {
    text: "<p><b>6'nın katı olan 120'den küçük pozitif tam sayıların toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "6 + 12 + ... + 114 = 6 · (1 + 2 + ... + 19) = 6 · 190 = 1140.",
    answers: [
      { text: "1020", ok: false },
      { text: "1050", ok: false },
      { text: "1080", ok: false },
      { text: "1140", ok: true },
      { text: "1146", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık iki basamaklı <u>en küçük</u> iki çift doğal sayının toplamı A, ardışık üç basamaklı <u>en büyük</u> iki tek doğal sayının toplamı B ise A + B toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "A = 10 + 12 = 22, B = 997 + 999 = 1996. A + B = 2018.",
    answers: [
      { text: "0", ok: false },
      { text: "180", ok: false },
      { text: "1800", ok: false },
      { text: "1972", ok: false },
      { text: "2018", ok: true }
    ]
  },
  {
    text: "<p><b>100 ile 210 arasındaki yer alan 5 ile bölümünden 2 kalanını veren sayıların toplamı ile 1 kalanını veren sayıların toplamı arasındaki fark kaçtır?</b></p>",
    diff: 2,
    expl: "2 kalanını verenler: 102, 107, ..., 207 (22 terim); 1 kalanını verenler: 101, 106, ..., 206 (22 terim). Karşılıklı terimlerin farkı 1 olduğundan toplamlar farkı 22 · 1 = 22.",
    answers: [
      { text: "22", ok: true },
      { text: "44", ok: false },
      { text: "11", ok: false },
      { text: "0", ok: false },
      { text: "33", ok: false }
    ]
  },
  {
    text: "<p>1'den a'ya kadar olan tam sayılar toplamı 300;</p><p><b>1'den b'ye kadar olan tek tam sayıların toplamı 625 olduğuna göre b − a farkı kaçtır?</b></p>",
    diff: 3,
    expl: "a(a + 1)/2 = 300 ⇒ a = 24. İlk k tek sayının toplamı k<sup>2</sup> = 625 ⇒ k = 25, b = 2 · 25 − 1 = 49. b − a = 49 − 24 = 25 bulunur. Not: Kitabın cevap anahtarı A (24) seçeneğini vermektedir; işlem sonucu ise 25'tir (B).",
    answers: [
      { text: "24", ok: true },
      { text: "25", ok: false },
      { text: "49", ok: false },
      { text: "73", ok: false },
      { text: "74", ok: false }
    ]
  },
  {
    text: "<p>−2 + 3 − 4 + 5 − 6 + 7 ... − 98</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "(−2 + 3) + (−4 + 5) + ... + (−96 + 97) − 98 şeklinde gruplanırsa 48 tane +1 ve sonda −98 kalır: 48 − 98 = −50.",
    answers: [
      { text: "−90", ok: false },
      { text: "−50", ok: true },
      { text: "−40", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık iki tek pozitif tam sayının çarpımı 255 ise bu sayıların toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "255 = 15 · 17 olduğundan sayılar 15 ve 17'dir. Toplamları 32.",
    answers: [
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "17", ok: false },
      { text: "27", ok: false },
      { text: "32", ok: true }
    ]
  },
  {
    text: "<p>1 · 3 + 3 · 5 + 5 · 7 + ... + 15 · 17</p><p><b>toplamının ilk çarpanları 3'er artırılırsa toplam kaç artar?</b></p>",
    diff: 2,
    expl: "Her a · b terimi (a + 3) · b olur ve 3b kadar artar. İkinci çarpanlar 3, 5, ..., 17 (8 terim, toplamı 80). Artış: 3 · 80 = 240.",
    answers: [
      { text: "240", ok: true },
      { text: "162", ok: false },
      { text: "192", ok: false },
      { text: "196", ok: false },
      { text: "216", ok: false }
    ]
  },
  {
    text: "<p>n · (n + 1) + n · (n + 2) + ... + n · (n + 9)</p><p><b>toplamı 594 olduğuna göre n doğal sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "n parantezine alınırsa n · (9n + 45) = 594 ⇒ 9n(n + 5) = 594 ⇒ n(n + 5) = 66 = 6 · 11 ⇒ n = 6.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>1'den n'ye kadar olan pozitif tam sayıların kareleri toplamı 506 olduğuna göre 1'den n'ye kadar olan bu sayıların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "n(n + 1)(2n + 1)/6 = 506 ⇒ n(n + 1)(2n + 1) = 3036 = 11 · 12 · 23 ⇒ n = 11. 1 + 2 + ... + 11 = 11 · 12 / 2 = 66.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "15", ok: false },
      { text: "45", ok: false },
      { text: "66", ok: true }
    ]
  },
  {
    text: "<p>1<sup>3</sup> + 2<sup>3</sup> + 3<sup>3</sup> + ... + n<sup>3</sup> = 3<sup>4</sup> · 5<sup>2</sup></p><p><b>olduğuna göre n kaçtır?</b></p>",
    diff: 2,
    expl: "1<sup>3</sup> + ... + n<sup>3</sup> = (n(n + 1)/2)<sup>2</sup>. 3<sup>4</sup> · 5<sup>2</sup> = 45<sup>2</sup> ⇒ n(n + 1)/2 = 45 ⇒ n(n + 1) = 90 ⇒ n = 9.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p><b>Ardışık a tane tek sayının toplamı a<sup>2</sup> + 10a olduğuna göre bu sayıların en küçüğü kaçtır?</b></p>",
    diff: 3,
    expl: "Ortanca terim (a<sup>2</sup> + 10a) / a = a + 10. En küçük terim ortancadan (a − 1)/2 adım geridedir ve adım 2'dir: (a + 10) − (a − 1) = 11.",
    answers: [
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: true },
      { text: "12", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>x = 3 · 4 + 4 · 5 + 5 · 6 + ... + 12 · 13 olduğuna göre 17 + 25 + 35 + ... + 161 toplamının x türünden değeri nedir?</b></p>",
    diff: 2,
    expl: "x = 12 + 20 + 30 + ... + 156 (10 terim). İstenen toplamın her terimi x'teki karşılık gelen terimden 5 fazladır (17 = 12 + 5, ..., 161 = 156 + 5). Sonuç: x + 10 · 5 = x + 50.",
    answers: [
      { text: "x + 5", ok: false },
      { text: "x + 29", ok: false },
      { text: "x + 45", ok: false },
      { text: "x + 21", ok: false },
      { text: "x + 50", ok: true }
    ]
  }
];

export const MAT_TEK_CIFT_T1: McQ[] = [
  {
    text: "<p><b>x tek sayı, y çift sayı olduğuna göre aşağıdakilerden hangisi <u>tek sayıdır</u>?</b></p>",
    diff: 1,
    expl: "A) 2x + y = Ç + Ç = Ç. B) 3x + y + 1 = T + Ç + T = Ç. C) (x + 1) · y = Ç · Ç = Ç. D) x² − y = T − Ç = T. E) x · y = T · Ç = Ç. Tek sayı olan D seçeneğidir.",
    answers: [
      { text: "2x + y", ok: false },
      { text: "3x + y + 1", ok: false },
      { text: "(x + 1) · y", ok: false },
      { text: "x<sup>2</sup> − y", ok: true },
      { text: "x · y", ok: false }
    ]
  },
  {
    text: "<p><b>(x + 5) ifadesi tek sayı olduğuna göre aşağıdakilerden hangisi <u>tek sayıdır</u>?</b></p>",
    diff: 1,
    expl: "x + 5 tek ise x çift sayıdır. A) 2 · (x + 5) = Ç. B) (x + 1) · (x + 2) = T · Ç = Ç. C) x² = Ç. D) (x + 2) · (x + 4) = Ç · Ç = Ç. E) (x + 1) · (x − 1) = T · T = T.",
    answers: [
      { text: "2 · (x + 5)", ok: false },
      { text: "(x + 1) · (x + 2)", ok: false },
      { text: "x<sup>2</sup>", ok: false },
      { text: "(x + 2) · (x + 4)", ok: false },
      { text: "(x + 1) · (x − 1)", ok: true }
    ]
  },
  {
    text: "<p><b>(a − 2) ifadesi çift sayı olduğuna göre aşağıdakilerden hangisi <u>çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "(a − 2) çift ise a çift sayıdır. A) a² − 2 = Ç − Ç = Ç. B) 2a + 3 = T. C) (a + 5)³ = T. D) 3a − 3 = T. E) a⁴ + 3 = T. Cevap A'dır.",
    answers: [
      { text: "a<sup>2</sup> − 2", ok: true },
      { text: "2a + 3", ok: false },
      { text: "(a + 5)<sup>3</sup>", ok: false },
      { text: "3a − 3", ok: false },
      { text: "a<sup>4</sup> + 3", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki işlemlerden hangisinin sonucu <u>tek sayıdır</u>?</b></p>",
    diff: 2,
    expl: "A) 3⁵ · 2⁷ = T · Ç = Ç. B) 2²⁰²¹ − 4¹⁰⁰³ = Ç − Ç = Ç. C) 4¹⁹⁰³ − 5¹⁹⁰³ = Ç − T = T. D) 10¹⁰ · 7⁷ = Ç · T = Ç. E) 5⁻² = 1/25 tam sayı değildir. Cevap C'dir.",
    answers: [
      { text: "3<sup>5</sup> · 2<sup>7</sup>", ok: false },
      { text: "2<sup>2021</sup> − 4<sup>1003</sup>", ok: false },
      { text: "4<sup>1903</sup> − 5<sup>1903</sup>", ok: true },
      { text: "10<sup>10</sup> · 7<sup>7</sup>", ok: false },
      { text: "5<sup>−2</sup>", ok: false }
    ]
  },
  {
    text: "<p><b>a çift doğal sayı ise aşağıdakilerden hangisi <u>tek sayıdır</u>?</b></p>",
    diff: 2,
    expl: "a çift doğal sayıdır. A) a² + a = Ç. B) a + 4 = Ç. C) 3ᵃ + 5ᵃ = T + T = Ç. D) a⁷ − 5 = Ç − T = T. E) a¹¹ + 10 = Ç. Cevap D'dir.",
    answers: [
      { text: "a<sup>2</sup> + a", ok: false },
      { text: "a + 4", ok: false },
      { text: "3<sup>a</sup> + 5<sup>a</sup>", ok: false },
      { text: "a<sup>7</sup> − 5", ok: true },
      { text: "a<sup>11</sup> + 10", ok: false }
    ]
  },
  {
    text: "<p><b>k tek tam sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "k tek ise k³ de tektir; k³ + k = T + T = Ç olur. Diğerleri: 5ᵏ + 3 (k negatif olabilir, tam sayı olmayabilir), (k + 2) · 2ᵏ (k negatifse tam sayı olmayabilir), (2k − 1)(k + 2) = T · T = T, (3k − 2)(k − 4) = T · T = T. Cevap D'dir.",
    answers: [
      { text: "5<sup>k</sup> + 3", ok: false },
      { text: "(k + 2) · 2<sup>k</sup>", ok: false },
      { text: "(2k − 1)(k + 2)", ok: false },
      { text: "k<sup>3</sup> + k", ok: true },
      { text: "(3k − 2) · (k − 4)", ok: false }
    ]
  },
  {
    text: "<p><b>Pozitif tek tam sayıları T ve pozitif çift tam sayıları Ç ile göstermek üzere aşağıdakilerden kaç tanesi doğrudur?</b></p><p>I. T − T = Ç<br>II. Ç · T = Ç<br>III. T + T = Ç<br>IV. Ç − T = Ç<br>V. T · T = T<br>VI. Ç<sup>T</sup> = Ç</p>",
    diff: 2,
    expl: "I. T − T = Ç (doğru). II. Ç · T = Ç (doğru). III. T + T = Ç (doğru). IV. Ç − T = T olur (yanlış). V. T · T = T (doğru). VI. Ç<sup>T</sup> = Ç (T pozitif olduğundan doğru). 5 tanesi doğrudur.",
    answers: [
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki ifadelerin hangileri <u>tek sayıdır</u>?</b></p><p>I. 4023 · 298 − 192 · 15<br>II. 153 + 198 · 20154<br>III. 4078 + 0!</p>",
    diff: 2,
    expl: "I. (T · Ç) − (Ç · T) = Ç − Ç = Ç.\nII. T + (Ç · Ç) = T + Ç = T.\nIII. 4078 + 0! = 4078 + 1 = 4079 = T.\nII ve III tek sayıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki ifadelerin hangileri <u>çift sayıdır</u>?</b></p><p>I. (7 + 13)<sup>2</sup> + 473<br>II. (2021)<sup>3</sup> − 5 · 194<br>III. 17<sup>2</sup> + 2 · 17 · 15 + 15<sup>2</sup></p>",
    diff: 2,
    expl: "I. 20² + 473 = Ç + T = T.\nII. T − (T · Ç) = T − Ç = T.\nIII. 17² + 2 · 17 · 15 + 15² = (17 + 15)² = 32² = Ç.\nYalnız III çift sayıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. 4<sup>2</sup> + 5<sup>3</sup> − 7<sup>2</sup><br>II. 3<sup>0</sup> + 0<sup>3</sup> + 6<br>III. 12<sup>2</sup> − 1<sup>100</sup> + 0<sup>102</sup></p><p><b>Yukarıdaki ifadelerden hangileri <u>tek sayıdır</u>?</b></p>",
    diff: 2,
    expl: "I. 16 + 125 − 49 = 92 (çift).\nII. 1 + 0 + 6 = 7 (tek).\nIII. 144 − 1 + 0 = 143 (tek).\nII ve III tek sayıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>• 4<sup>13</sup> − 5<sup>12</sup> tek sayıdır.<br>• 3<sup>7</sup> + 11<sup>9</sup> tek sayıdır.<br>• 6<sup>−2</sup> − 12 çift sayıdır.<br>• 3 + 4<sup>0</sup> çift sayıdır.</p><p><b>Yukarıdakilerden kaç tanesi doğrudur?</b></p>",
    diff: 2,
    expl: "1. ifade: Ç − T = T (doğru).\n2. ifade: T + T = Ç (yanlış).\n3. ifade: 6⁻² tam sayı olmadığından sonuç tam sayı değildir (yanlış).\n4. ifade: 3 + 1 = 4 çift (doğru).\n2 tanesi doğrudur.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>n bir tam sayı ve (n<sup>5</sup> + 4) ifadesi tek sayı ise aşağıdakilerden hangisi <u>çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "n⁵ + 4 tek ise n⁵ tektir, dolayısıyla n tektir. A) n² + n + 6 = T + T + Ç = Ç. Diğer seçeneklerin hepsi tektir.",
    answers: [
      { text: "n<sup>2</sup> + n + 6", ok: true },
      { text: "2n − 3", ok: false },
      { text: "3n − 8", ok: false },
      { text: "n · (n + 2) · (n + 4)", ok: false },
      { text: "5 · n<sup>3</sup> − 4 · n<sup>2</sup>", ok: false }
    ]
  },
  {
    text: "<p>x, y, z tam sayılardır.</p><p>(4x + 5y) / 4 = z</p><p><b>olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 2,
    expl: "4x + 5y = 4z olur. 4x ve 4z çift olduğundan 5y çifttir, yani y kesinlikle çift sayıdır.",
    answers: [
      { text: "x tek sayıdır.", ok: false },
      { text: "x + y tek sayıdır.", ok: false },
      { text: "y çift sayıdır.", ok: true },
      { text: "x tek ise y tektir.", ok: false },
      { text: "x − y + z çift sayıdır.", ok: false }
    ]
  },
  {
    text: "<p>x, y ve z pozitif tam sayılardır.</p><p>(x + 4y = 6z)</p><p><b>olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 2,
    expl: "x = 6z − 4y = 2(3z − 2y) olduğundan x kesinlikle çift sayıdır.",
    answers: [
      { text: "x + y tek sayıdır.", ok: false },
      { text: "y çift sayıdır.", ok: false },
      { text: "x çift sayıdır.", ok: true },
      { text: "z tek sayıdır.", ok: false },
      { text: "x + y + z tek sayıdır.", ok: false }
    ]
  },
  {
    text: "<p>a, b, c pozitif tam sayılardır.</p><p>(10 · a + 4) / (a + b) = 2 · c + 3</p><p><b>olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 3,
    expl: "10a + 4 = (a + b) · (2c + 3) olur. Sol taraf çift, 2c + 3 tek olduğundan (a + b) çift olmalıdır; bu da a tek ise b'nin tek olmasını gerektirir (E). Kitabın cevap anahtarı ise D seçeneğini vermektedir.",
    answers: [
      { text: "a tektir", ok: false },
      { text: "b tektir.", ok: false },
      { text: "a tek ise c tektir.", ok: false },
      { text: "(a + b) tektir.", ok: true },
      { text: "a tek ise b tektir.", ok: false }
    ]
  },

// ─── TEK ÇİFT SAYILAR TEST - 2 ────────────────────────────────────────────────

  {
    text: "<p>a ve b pozitif tam sayılardır.</p><p>(b<sup>a</sup> + 5)</p><p><b>ifadesi tek sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "(bᵃ + 5) tek ise bᵃ çifttir; a pozitif olduğundan b çifttir. a · b + 8 = Ç + Ç = Ç olur.",
    answers: [
      { text: "7a − 3b", ok: false },
      { text: "a + 8b", ok: false },
      { text: "a + b + 4", ok: false },
      { text: "a · b + 8", ok: true },
      { text: "a · b + 1", ok: false }
    ]
  },
  {
    text: "<p><b>a bir gerçel sayı olmak üzere (a<sup>5</sup> + 13) çift sayı olduğuna göre</b></p><p>I. a<sup>4</sup> + 1 çift sayıdır.<br>II. 2a − 5 çift sayıdır.<br>III. a<sup>70</sup> + 4 tek sayıdır.</p><p><b>ifadelerinden hangileri <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 3,
    expl: "a⁵ + 13 çift ise a⁵ tek tam sayıdır. a gerçel sayı olduğundan tam sayı olmak zorunda değildir (ör. a = ⁵√3), bu yüzden a⁴ ve 2a tam sayı olmayabilir. a⁷⁰ = (a⁵)¹⁴ tek tam sayıdır; tek + 4 = tek. Yalnız III kesinlikle doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve III", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>x, y ve z birer tam sayı olmak üzere</p><p>x + 5y = 4z + 10</p><p><b>olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> çifttir?</b></p>",
    diff: 2,
    expl: "x + 5y çift olduğundan x ve y aynı karakterdedir (ikisi de tek ya da ikisi de çift). Bu durumda x − y kesinlikle çifttir.",
    answers: [
      { text: "z + y", ok: false },
      { text: "x · y", ok: false },
      { text: "x − y", ok: true },
      { text: "x<sup>y</sup>", ok: false },
      { text: "y<sup>x</sup>", ok: false }
    ]
  },
  {
    text: "<p><b>a bir doğal sayı olmak üzere aşağıdakilerden hangisi <u>kesinlikle çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "a² − 3a − 4 = a(a − 3) − 4. a ile a − 3'ün farkı tek olduğundan biri çifttir, çarpımları çifttir. Çift − 4 = Çift.",
    answers: [
      { text: "a<sup>3</sup>", ok: false },
      { text: "a<sup>4</sup> + 1", ok: false },
      { text: "a<sup>2</sup> + a + 1", ok: false },
      { text: "a<sup>2</sup> − 3a − 4", ok: true },
      { text: "a<sup>2</sup> − a + 1", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b gerçel sayılar olmak üzere</b></p><p>(2a − 3) ve (b<sup>2</sup> + 4)</p><p><b>sayıları çift olduğuna göre aşağıdakilerden hangisi <u>kesinlikle tek sayıdır</u>?</b></p>",
    diff: 3,
    expl: "2a − 3 çift ise 2a tek tam sayıdır; b² + 4 çift ise b² çift tam sayıdır. 6a + 3b² + 1 = 3 · (2a) + 3b² + 1 = T + Ç + T = Ç çıkar. Matematiksel olarak kesinlikle tek olan 4a + b² − 3 = 2 · (2a) + b² − 3 = Ç + Ç − T = T ifadesidir (E). Kitabın cevap anahtarı ise A seçeneğini vermektedir.",
    answers: [
      { text: "6a + 3b<sup>2</sup> + 1", ok: true },
      { text: "a − b", ok: false },
      { text: "a + b", ok: false },
      { text: "a<sup>b</sup>", ok: false },
      { text: "4a + b<sup>2</sup> − 3", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c birer tam sayı olmak üzere</b></p><p>(a<sup>2</sup> + a + b<sup>2</sup> + b + c<sup>2</sup>)</p><p><b>ifadesi tek sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 2,
    expl: "a² + a = a(a + 1) ve b² + b = b(b + 1) daima çifttir. İfade tek olduğundan c² tektir, yani c kesinlikle tektir.",
    answers: [
      { text: "a tektir.", ok: false },
      { text: "b çifttir.", ok: false },
      { text: "c tektir.", ok: true },
      { text: "a · b tektir.", ok: false },
      { text: "a · c çifttir.", ok: false }
    ]
  },
  {
    text: "<p><b>x ve y tam sayılar olmak üzere</b></p><p><b>(x<sup>2</sup> + 2y) / (x − y) = 5 olduğuna göre aşağıdakilerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "x² + 2y = 5x − 5y ⇒ x(x − 5) + 7y = 0. x ile x − 5'in farkı tek olduğundan x(x − 5) çifttir. Çift + 7y = 0 ise 7y çifttir, yani y çifttir.",
    answers: [
      { text: "x tek ise y tektir.", ok: false },
      { text: "y çifttir.", ok: true },
      { text: "y tek ise x tektir.", ok: false },
      { text: "x tektir.", ok: false },
      { text: "(x + y) çifttir.", ok: false }
    ]
  },
  {
    text: "<p><b>y bir doğal sayı olmak üzere aşağıdakilerden hangisi <u>kesinlikle</u> çift sayıdır?</b></p>",
    diff: 1,
    expl: "2y her zaman çifttir; 2y + 4 = Ç + Ç = Ç olur.",
    answers: [
      { text: "y<sup>0</sup> + 3", ok: false },
      { text: "2y + 4", ok: true },
      { text: "3y − 5", ok: false },
      { text: "4y − 7", ok: false },
      { text: "5y + 10", ok: false }
    ]
  },
  {
    text: "<p><b>k bir tam sayı olmak üzere</b></p><p>(3k + 2) ve (2k − 2)</p><p><b>ardışık 2 çift tam sayı olduğuna göre k nın alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Ardışık iki çift sayının farkı 2 veya −2'dir. (3k + 2) − (2k − 2) = 2 ⇒ k = −2. (2k − 2) − (3k + 2) = 2 ⇒ k = −6. Toplam: −2 + (−6) = −8.",
    answers: [
      { text: "−2", ok: false },
      { text: "−6", ok: false },
      { text: "−8", ok: true },
      { text: "4", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>(5x + 2) ve (3y + 3) birer tek sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> tektir?</b></p>",
    diff: 2,
    expl: "5x + 2 tek ise 5x tek tam sayıdır; 3y + 3 tek ise 3y çift tam sayıdır. 15x − 3y = 3 · (5x) − 3y = T − Ç = T.",
    answers: [
      { text: "4x − 2y", ok: false },
      { text: "15xy", ok: false },
      { text: "2x − y", ok: false },
      { text: "15x − 3y", ok: true },
      { text: "10xy", ok: false }
    ]
  },
  {
    text: "<p>x, y, z birer tam sayıdır.</p><p>(4x + 5) · (5y − 3) · (8z + 3)</p><p><b>çarpımı çift sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 2,
    expl: "4x + 5 ve 8z + 3 tektir. Çarpım çift olduğundan 5y − 3 çifttir; 5y tek, dolayısıyla y kesinlikle tektir.",
    answers: [
      { text: "y tektir.", ok: true },
      { text: "x<sup>z</sup> çifttir.", ok: false },
      { text: "x − y çifttir.", ok: false },
      { text: "x · y tektir.", ok: false },
      { text: "z − y tektir.", ok: false }
    ]
  },
  {
    text: "<p><b>x, y, z birer tam sayı olmak üzere</b></p><p>• x + y toplamı tek sayı<br>• x − z farkı çift sayı<br>• x · z çarpımı tek sayı ise</p><p><b>aşağıdakilerin hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "x · z tek ise x ve z tektir. x + y tek olduğundan y çifttir. y · z = Ç · T = Ç.",
    answers: [
      { text: "x çifttir.", ok: false },
      { text: "y tektir.", ok: false },
      { text: "x · y tektir.", ok: false },
      { text: "x<sup>y</sup> çifttir.", ok: false },
      { text: "y · z çifttir.", ok: true }
    ]
  },
  {
    text: "<p>x, y ve z pozitif tam sayılardır.</p><p>x · y + x · z + z + y = 77</p><p><b>olduğuna göre</b></p><p>I. y · z + x<br>II. x · y · z<br>III. x + y + z − 4</p><p><b>hangileri <u>daima tek sayıdır</u>?</b></p>",
    diff: 3,
    expl: "x(y + z) + (y + z) = (x + 1)(y + z) = 77. x + 1 ≥ 2 ve y + z ≥ 2 olduğundan {7, 11} çarpanları kullanılır. x = 6, y + z = 11 veya x = 10, y + z = 7 olur; her iki durumda x + y + z = 17 ve III: 17 − 4 = 13 tektir. I'de y + z tek olduğundan y · z çift, x çift; toplam çifttir. II'de x çift olduğundan çarpım çifttir. Yalnız III.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>(x<sup>3</sup> + 79)</p><p><b>ifadesi tek sayı olduğuna göre aşağıdakilerden hangisi <u>kesinlikle çift sayıdır</u>?</b></p>",
    diff: 2,
    expl: "x³ + 79 tek ise x³ çifttir, yani x çifttir. x³ + 20 = Ç + Ç = Ç.",
    answers: [
      { text: "x + 5", ok: false },
      { text: "x<sup>2</sup> − 7", ok: false },
      { text: "x<sup>3</sup> + 20", ok: true },
      { text: "x<sup>6</sup> − 7", ok: false },
      { text: "x<sup>9</sup> + x<sup>6</sup> + x", ok: false }
    ]
  },
  {
    text: "<p>n<sup>2</sup> pozitif bir çift tam sayıdır.</p><p><b>Buna göre</b></p><p>I. n çifttir.<br>II. n − 2 çifttir.<br>III. n<sup>2</sup> + 5 tektir.</p><p><b>hangileri daima doğrudur?</b></p>",
    diff: 3,
    expl: "n tam sayı kabul edilirse n² çift olduğundan n çifttir (I doğru), n − 2 de çifttir (II doğru), n² + 5 = Ç + T = T (III doğru). Cevap I, II ve III'tür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },

// ─── SAYI BASAMAKLARI TEST - 1 ────────────────────────────────────────────────

  {
    text: "<p>Yukarıdaki çıkarma işlemine göre A + B + C = 120'dir.</p><p><b>Buna göre A kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q31.jpg",
    diff: 1,
    expl: "Çıkarma işleminde A − B = C olduğundan A = B + C'dir. A + B + C = 120 ⇒ A + A = 120 ⇒ 2A = 120 ⇒ A = 60.",
    answers: [
      { text: "40", ok: false },
      { text: "80", ok: false },
      { text: "60", ok: true },
      { text: "20", ok: false },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki çıkarma işlemine göre B − C kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q32.jpg",
    diff: 2,
    expl: "7A6BC − 6A7CB = (70600 + 1000A + 10B + C) − (60700 + 1000A + 10C + B) = 9900 + 9B − 9C = 9918 ⇒ 9(B − C) = 18 ⇒ B − C = 2.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıdaki toplama işleminde tüm rakamlar birbirinden farklı olduğuna göre A + B + C kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q33.jpg",
    diff: 3,
    expl: "İşlem 3A1 − 1BC = D80 çıkarmasıdır. Birler: 1 − C = 0 ⇒ C = 1. Onlar: A − B = 8 ⇒ (A, B) = (9, 1) veya (8, 0); B = 1 olamayacağından (C = 1) A = 8, B = 0. Yüzler: 3 − 1 = 2 = D. (381 − 101 = 280.) A + B + C = 8 + 0 + 1 = 9.",
    answers: [
      { text: "12", ok: false },
      { text: "9", ok: true },
      { text: "14", ok: false },
      { text: "7", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki verilen çıkarma işlemine göre A kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q34.jpg",
    diff: 2,
    expl: "Birler: C − 7 = 3 için onlardan 1 alınır: 10 + C − 7 = 3 ⇒ C = 0. Onlar: 3 − 1 = 2, 2 − B = 4 için yüzlerden 1 alınır: 12 − B = 4 ⇒ B = 8. Yüzler: (B − 1) − A = 5 ⇒ 7 − A = 5 ⇒ A = 2.",
    answers: [
      { text: "3", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen toplama işlemine göre x + z kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q35.jpg",
    diff: 2,
    expl: "Birler: 8 + y sonucu 1 ile bitmeli ⇒ 8 + y = 11 ⇒ y = 3 (elde 1). Onlar: 4 + 3 + 1 = 8 = z. Yüzler: x + 3 = 5 ⇒ x = 2. x + z = 2 + 8 = 10.",
    answers: [
      { text: "10", ok: true },
      { text: "12", ok: false },
      { text: "11", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki çarpma işleminde sonuç aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q36.jpg",
    diff: 2,
    expl: "İkinci satırdaki 2250, üstteki sayının 125'in onlar basamağındaki 2 ile çarpımıdır. Üstteki sayı 2250 / 2 = 1125'tir. Sonuç: 1125 · 125 = 140625.",
    answers: [
      { text: "120625", ok: false },
      { text: "140625", ok: true },
      { text: "14625", ok: false },
      { text: "124525", ok: false },
      { text: "130625", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki çarpma işlemine göre x + y + z kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q37.jpg",
    diff: 2,
    expl: "148, xy sayısının 4 ile çarpımıdır: xy = 148 / 4 = 37. 37 · 4z = 1554 ⇒ 4z = 42 ⇒ z = 2. x + y + z = 3 + 7 + 2 = 12.",
    answers: [
      { text: "12", ok: true },
      { text: "17", ok: false },
      { text: "9", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen çarpma işlemine göre K + L + M kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q38.jpg",
    diff: 2,
    expl: "2448, abc sayısının 4 ile çarpımıdır: abc = 2448 / 4 = 612. 612 · 42 = 25704 ⇒ K = 2, L = 5, M = 7. K + L + M = 14.",
    answers: [
      { text: "18", ok: false },
      { text: "20", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki çarpma işleminde A, B ve C sıfırdan farklı rakamlar olmak üzere C kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q39.jpg",
    diff: 3,
    expl: "AB · 4 = 2A0 ⇒ 40A + 4B = 200 + 10A ⇒ 30A + 4B = 200. B ≠ 0 için A = 6, B = 5 (65 · 4 = 260). İkinci satır AB · A = 65 · 6 = 390 = 3C0 ⇒ C = 9 bulunur (65 · 64 = 4160). Hesaplama 9 (E) verse de kitabın cevap anahtarı D seçeneğini (6) göstermektedir.",
    answers: [
      { text: "7", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen çarpma işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q40.jpg",
    diff: 3,
    expl: "Çarpan xx olduğundan iki ara çarpım da abc · x sayısıdır. 1•0• ve •9•4 aynı sayı olduğundan abc · x = 1904'tür. Sonuç: 1904 + 19040 = 20944.",
    answers: [
      { text: "21494", ok: false },
      { text: "21944", ok: false },
      { text: "20914", ok: false },
      { text: "21940", ok: false },
      { text: "20944", ok: true }
    ]
  },
  {
    text: "<p>Yukarıdaki çarpma işleminde basamak kaydırmayarak hata yapılmıştır.</p><p><b>Buna göre a + b + c kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q41.jpg",
    diff: 2,
    expl: "Basamak kaydırılmadığından toplam 3 · abc + 4 · abc = 7 · abc olur. 7 · abc = 868 ⇒ abc = 124. a + b + c = 1 + 2 + 4 = 7.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: true },
      { text: "11", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Yukarıda verilen çarpma işlemi yanlış yapılmıştır.</p><p><b>Doğru sonuç kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t6_q42.jpg",
    diff: 2,
    expl: "Ara çarpımlar ters yere yazılmıştır: ab · 3 bir basamak sola, ab · 2 ise birler hizasına yazılmıştır. Toplam 30 · ab + 2 · ab = 32 · ab = 1376 ⇒ ab = 43. Doğru sonuç: 43 · 23 = 989.",
    answers: [
      { text: "873", ok: false },
      { text: "989", ok: true },
      { text: "898", ok: false },
      { text: "916", ok: false },
      { text: "765", ok: false }
    ]
  },

// ─── SAYI BASAMAKLARI TEST - 2 ────────────────────────────────────────────────

  {
    text: "<p>ab ve ba 2 basamaklı sayılardır.</p><p><b>ab + ba = 154 olduğuna göre a + b kaçtır?</b></p>",
    diff: 1,
    expl: "(10a + b) + (10b + a) = 11(a + b) = 154 ⇒ a + b = 14.",
    answers: [
      { text: "15", ok: false },
      { text: "14", ok: true },
      { text: "13", ok: false },
      { text: "16", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>xyz, yzx, zxy 3 basamaklı doğal sayılardır.</p><p><b>(xyz + yzx + zxy) / (x + y + z) ifadesinin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "xyz + yzx + zxy = 111x + 111y + 111z = 111(x + y + z). (x + y + z)'ye bölünce sonuç 111 olur.",
    answers: [
      { text: "11", ok: false },
      { text: "121", ok: false },
      { text: "111", ok: true },
      { text: "1111", ok: false },
      { text: "99", ok: false }
    ]
  },
  {
    text: "<p>ab ve ba 2 basamaklı sayılardır.</p><p><b>ab − ba = 45 ise <u>en büyük</u> ve <u>en küçük</u> ab sayılarının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "9(a − b) = 45 ⇒ a − b = 5. ba iki basamaklı olduğundan b ≥ 1'dir. En büyük ab = 94, en küçük ab = 61. Toplam: 94 + 61 = 155.",
    answers: [
      { text: "144", ok: false },
      { text: "163", ok: false },
      { text: "124", ok: false },
      { text: "176", ok: false },
      { text: "155", ok: true }
    ]
  },
  {
    text: "<p>xx ve xy 2 basamaklı sayılardır.</p><p><b>xx − xy = 3 ise kaç farklı xy sayısı yazılabilir?</b></p>",
    diff: 2,
    expl: "11x − (10x + y) = 3 ⇒ x − y = 3. (x, y) = (3, 0), (4, 1), (5, 2), (6, 3), (7, 4), (8, 5), (9, 6) olmak üzere 7 farklı sayı yazılabilir.",
    answers: [
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "5", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>abc ve cba 3 basamaklı doğal sayılardır.</p><p><b>abc − cba = 495 ise en büyük abc sayısı ile en küçük abc sayılarının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "99(a − c) = 495 ⇒ a − c = 5. En büyük abc: a = 9, c = 4, b = 9 ⇒ 994. En küçük abc: cba 3 basamaklı olduğundan c ≥ 1; a = 6, c = 1, b = 0 ⇒ 601. Toplam: 994 + 601 = 1595.",
    answers: [
      { text: "1493", ok: false },
      { text: "1585", ok: false },
      { text: "1595", ok: true },
      { text: "1695", ok: false },
      { text: "1795", ok: false }
    ]
  },
  {
    text: "<p>abc ve bac 3 basamaklı doğal sayılardır.</p><p><b>abc − bac = 270 ise rakamları farklı 3 basamaklı en büyük abc sayısı için a + b + c toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "abc − bac = 90(a − b) = 270 ⇒ a − b = 3. Rakamları farklı en büyük abc için a = 9, b = 6 ve c = 8 seçilir: abc = 968, a + b + c = 23 (D) bulunur. Kitabın cevap anahtarı ise E seçeneğini (22) vermektedir.",
    answers: [
      { text: "24", ok: false },
      { text: "25", ok: false },
      { text: "21", ok: false },
      { text: "23", ok: false },
      { text: "22", ok: true }
    ]
  },
  {
    text: "<p>3 basamaklı bir doğal sayının birler basamağındaki rakam ile yüzler basamağındaki rakam yer değiştiğinde sayının değeri 594 artıyor.</p><p><b>Bu şarta uyan kaç farklı 3 basamaklı doğal sayı vardır?</b></p>",
    diff: 3,
    expl: "Sayı ABC olsun: CBA − ABC = 99(C − A) = 594 ⇒ C − A = 6. (A, C) = (1, 7), (2, 8), (3, 9) olabilir; B için 10 seçenek vardır. 3 · 10 = 30 farklı sayı.",
    answers: [
      { text: "40", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: false },
      { text: "30", ok: true },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>x, y, z birer rakamdır.</p><p>x = y + 1<br>y = z + 3</p><p><b>olduğuna göre bu şarta uyan 3 basamaklı kaç xyz doğal sayısı vardır?</b></p>",
    diff: 2,
    expl: "x = z + 4 olur. z = 0, 1, 2, 3, 4, 5 değerlerini alabilir (z = 5 için x = 9). Buna göre 6 farklı xyz sayısı vardır (430, 541, ..., 985).",
    answers: [
      { text: "6", ok: true },
      { text: "7", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>AA ve BB 2 basamaklı doğal sayılardır.</p><p>AA · BB = 1452</p><p><b>olduğuna göre en büyük AB sayısı ile en küçük AB sayısının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "11A · 11B = 121 · A · B = 1452 ⇒ A · B = 12. (A, B) = (2, 6), (6, 2), (3, 4), (4, 3). En büyük AB = 62, en küçük AB = 26. Toplam: 88.",
    answers: [
      { text: "105", ok: false },
      { text: "77", ok: false },
      { text: "88", ok: true },
      { text: "108", ok: false },
      { text: "96", ok: false }
    ]
  },
  {
    text: "<p>2 basamaklı AB doğal sayısı rakamları toplamının 3 katına eşittir.</p><p><b>Buna göre 2 basamaklı BA doğal sayısı rakamları toplamının kaç katına eşittir?</b></p>",
    diff: 2,
    expl: "10A + B = 3(A + B) ⇒ 7A = 2B ⇒ A = 2, B = 7 (AB = 27). BA = 72 = 8 · (7 + 2). Cevap 8'dir.",
    answers: [
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "8", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>Rakamları toplamının 7 katına eşit olan 2 basamaklı kaç doğal sayı vardır?</b></p>",
    diff: 2,
    expl: "10A + B = 7(A + B) ⇒ 3A = 6B ⇒ A = 2B. B = 1, 2, 3, 4 için 21, 42, 63, 84 olmak üzere 4 sayı vardır.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "2", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>aa, bb ve ba iki basamaklı doğal sayılardır.</p><p><b>(aa + bb) / ba = 33 / 15 ise a · b kaçtır?</b></p>",
    diff: 2,
    expl: "11(a + b) / (10b + a) = 11/5 ⇒ 5(a + b) = 10b + a ⇒ 4a = 5b ⇒ a = 5, b = 4. a · b = 20.",
    answers: [
      { text: "45", ok: false },
      { text: "63", ok: false },
      { text: "20", ok: true },
      { text: "72", ok: false },
      { text: "36", ok: false }
    ]
  },

// ─── SAYI BASAMAKLARI TEST - 3 ────────────────────────────────────────────────

  {
    text: "<p>2 basamaklı xy sayısı rakamları toplamının 7 katından 3 fazladır.</p><p><b>Bu koşula uyan <u>en büyük</u> xy sayısının rakamları toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "10x + y = 7(x + y) + 3 ⇒ 3x − 6y = 3 ⇒ x − 2y = 1. En büyük sayı için x = 9 ⇒ y = 4, xy = 94. Rakamları toplamı 9 + 4 = 13.",
    answers: [
      { text: "11", ok: false },
      { text: "14", ok: false },
      { text: "13", ok: true },
      { text: "12", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>3 basamaklı ABC doğal sayısı 2 basamaklı BC doğal sayısının 41 katına eşittir.</p><p><b>Buna göre bu şarta uyan en büyük ABC sayısı için A + B + C toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "100A + BC = 41 · BC ⇒ 100A = 40 · BC ⇒ BC = 5A/2. BC iki basamaklı olduğundan A = 4, 6, 8 olabilir. En büyük ABC için A = 8 ⇒ BC = 20, ABC = 820. A + B + C = 8 + 2 + 0 = 10.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "14", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>xy ve yx 2 basamaklı doğal sayılardır.</p><p>xy − yx = 45<br>xy + yx = 121</p><p><b>olduğuna göre x · y kaçtır?</b></p>",
    diff: 1,
    expl: "9(x − y) = 45 ⇒ x − y = 5. 11(x + y) = 121 ⇒ x + y = 11. Buradan x = 8, y = 3; x · y = 24.",
    answers: [
      { text: "28", ok: false },
      { text: "15", ok: false },
      { text: "30", ok: false },
      { text: "12", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "<p>2 basamaklı ab doğal sayısının soluna 3 yazıldığında elde edilen üç basamaklı sayı, sağına 1 yazıldığında elde edilen üç basamaklı sayıdan 56 fazladır.</p><p><b>Buna göre a + b kaçtır?</b></p>",
    diff: 3,
    expl: "(300 + ab) − (10 · ab + 1) = 56 ⇒ 299 − 9 · ab = 56 ⇒ 9 · ab = 243 ⇒ ab = 27. a + b = 2 + 7 = 9.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>ab3 sayısı 3 basamaklı 2ab5 sayısı 4 basamaklı doğal sayılardır.</p><p><b>ab3 = x olduğuna göre 2ab5 sayısının x türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "ab3 = 10 · ab + 3 = x ⇒ 10 · ab = x − 3. 2ab5 = 2000 + 10 · ab + 5 = 2000 + (x − 3) + 5 = x + 2002.",
    answers: [
      { text: "10x + 2005", ok: false },
      { text: "10x − 1975", ok: false },
      { text: "10x − 2005", ok: false },
      { text: "x + 1975", ok: false },
      { text: "x + 2002", ok: true }
    ]
  },
  {
    text: "<p>2 basamaklı AB sayısı rakamları toplamının 2x − 1 katına, 2 basamaklı BA sayısı rakamları toplamının 3x − 3 katına eşittir.</p><p><b>Buna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "AB + BA = 11(A + B) ve AB + BA = (2x − 1 + 3x − 3)(A + B) = (5x − 4)(A + B). 5x − 4 = 11 ⇒ x = 3.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>1, 3, 5, 7, 9 rakamları kullanılarak rakamları farklı beş basamaklı ABCDE sayıları yazılacaktır.</p><p><b>A + B = C + D olduğuna göre en büyük ABCDE sayısı ile en küçük ABCDE sayısının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "En büyük sayı için A = 9: B = 3 alınırsa 9 + 3 = 12 = 7 + 5 sağlanır (B = 5 veya 7 için uygun C, D yoktur). En büyük sayı 93751'dir. En küçük sayı için A = 1: B = 3 ve B = 5 için uygun C, D yoktur; B = 7 için 1 + 7 = 8 = 3 + 5 olur. En küçük sayı 17359'dur. Toplam: 93751 + 17359 = 111110.",
    answers: [
      { text: "111110", ok: true },
      { text: "110111", ok: false },
      { text: "11111", ok: false },
      { text: "11011", ok: false },
      { text: "111101", ok: false }
    ]
  },
  {
    text: "<p>abc sayısı 3 basamaklı doğal sayı x bir reel sayı olmak üzere</p><p>a · x = 1,4<br>b · x = 42<br>c · x = 6</p><p><b>olduğuna göre (abc) · x'in değeri kaçtır?</b></p>",
    diff: 2,
    expl: "(abc) · x = (100a + 10b + c) · x = 100 · ax + 10 · bx + cx = 100 · 1,4 + 10 · 42 + 6 = 140 + 420 + 6 = 566.",
    answers: [
      { text: "342", ok: false },
      { text: "188", ok: false },
      { text: "566", ok: true },
      { text: "376", ok: false },
      { text: "466", ok: false }
    ]
  },
  {
    text: "<p>ABC üç basamaklı AB iki basamaklı doğal sayılardır.</p><p>ABC + AB = 357</p><p><b>olduğuna göre A + B + C toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "(100A + 10B + C) + (10A + B) = 110A + 11B + C = 357. A = 3 ⇒ 11B + C = 27 ⇒ B = 2, C = 5. A + B + C = 3 + 2 + 5 = 10.",
    answers: [
      { text: "14", ok: false },
      { text: "17", ok: false },
      { text: "10", ok: true },
      { text: "16", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p>x, y, z birbirinden farklı rakamlardır.</p><p>x = z<sup>y</sup></p><p><b>koşuluna uyan üç basamaklı <u>en büyük</u> ve <u>en küçük</u> xyz sayıların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "En büyük xyz için x = 9 = 3² ⇒ 923. En küçük xyz için x = 1 = z⁰ ve z en küçük (z ≠ 1, z ≠ 0) ⇒ z = 2, 102. Toplam: 923 + 102 = 1025.",
    answers: [
      { text: "987", ok: false },
      { text: "1036", ok: false },
      { text: "1025", ok: true },
      { text: "999", ok: false },
      { text: "1043", ok: false }
    ]
  },
  {
    text: "<p><b>Her biri <u>en az</u> üç basamaklı olan beş doğal sayının, her birinin yüzler basamağındaki rakam 2 arttırılıp onlar basamağındaki rakam 4 azaltılırsa bu beş sayının toplamı kaç artar?</b></p>",
    diff: 1,
    expl: "Her sayı 200 − 40 = 160 artar. Beş sayının toplamı 5 · 160 = 800 artar.",
    answers: [
      { text: "600", ok: false },
      { text: "400", ok: false },
      { text: "200", ok: false },
      { text: "1000", ok: false },
      { text: "800", ok: true }
    ]
  },
  {
    text: "<p><b>20 basamaklı <u>en büyük</u> doğal sayı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "20 basamaklı en büyük sayı yirmi tane 9'dan oluşur. Bu sayı, 21 basamaklı en küçük sayı olan 10²⁰'den 1 eksiktir: 10²⁰ − 1.",
    answers: [
      { text: "10<sup>20</sup> + 1", ok: false },
      { text: "10<sup>20</sup> − 1", ok: true },
      { text: "10<sup>21</sup> − 1", ok: false },
      { text: "10<sup>21</sup> + 1", ok: false },
      { text: "10<sup>20</sup>", ok: false }
    ]
  },

// ─── POZİTİF - NEGATİF SAYILAR ────────────────────────────────────────────────

  {
    text: "<p><b>a &lt; 0 &lt; b &lt; c olduğuna göre aşağıdakilerden hangisi (b − c) / (a − b) ile <u>kesinlikle</u> aynı işaretlidir?</b></p>",
    diff: 2,
    expl: "b − c < 0 ve a − b < 0 olduğundan (b − c) / (a − b) pozitiftir. a, a − b ve a · b negatif; a + c'nin işareti belli değil; 6 − a ise a negatif olduğundan kesinlikle pozitiftir.",
    answers: [
      { text: "a", ok: false },
      { text: "a − b", ok: false },
      { text: "a + c", ok: false },
      { text: "6 − a", ok: true },
      { text: "a · b", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c tam sayıları için a &lt; b &lt; 0 &lt; c olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> negatiftir?</b></p>",
    diff: 2,
    expl: "c − a > 0, a < 0 ve 1 − a > 0 olduğundan (c − a) · a / (1 − a) = (+)(−)/(+) negatiftir. Diğerleri: A (−)/(−) = +, B (+)/(+) = +, C b(a − c)/(ab) = (+)/(+) = +, E a ≤ −2 olduğundan (a + 1) · a / (c + 1) = (−)(−)/(+) = +.",
    answers: [
      { text: "(a + b) / (b − c)", ok: false },
      { text: "(c − b) / (c − a)", ok: false },
      { text: "b · (a − c) / (a · b)", ok: false },
      { text: "(c − a) · a / (1 − a)", ok: true },
      { text: "(a + 1) · a / (c + 1)", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c tam sayıları için a &lt; 0 &lt; b &lt; c olduğuna göre, aşağıdakilerden hangisi <u>kesinlikle</u> pozitiftir?</b></p>",
    diff: 2,
    expl: "c − a > 0 ve b > 0 olduğundan (c − a) / b kesinlikle pozitiftir. A ve B'de a + b, a + c'nin işareti belli değildir; D (−)/(+) ve E (+)/(−) negatiftir.",
    answers: [
      { text: "(a + b) / c", ok: false },
      { text: "(b − c) / (a + c)", ok: false },
      { text: "(c − a) / b", ok: true },
      { text: "(a − b) / (b + c)", ok: false },
      { text: "(b − a) / (a − 1)", ok: false }
    ]
  },
  {
    text: "<p><b>a + b &lt; 0 &lt; a · b olacak şekilde a ve b tam sayıları için</b></p><p>I. a &gt; 0<br>II. b &lt; 0<br>III. a − b &lt; 0</p><p><b>verilen ifadelerden hangileri <u>kesinlikle</u> doğrudur?</b></p>",
    diff: 2,
    expl: "a · b > 0 ise a ve b aynı işaretli; a + b < 0 olduğundan ikisi de negatiftir. I yanlış, II doğru, III'ün doğruluğu a ve b'nin büyüklüğüne bağlıdır. Yalnız II.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "I − II", ok: false },
      { text: "II − III", ok: false },
      { text: "I − II − III", ok: false }
    ]
  },
  {
    text: "<p>a<sup>2</sup> · b &lt; 0<br>a<sup>5</sup> · b<sup>3</sup> &gt; 0</p><p><b>olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> pozitiftir?</b></p>",
    diff: 2,
    expl: "a² · b < 0 ⇒ b < 0. a⁵ · b³ > 0 ⇒ a ile b aynı işaretli ⇒ a < 0. Buna göre a · b > 0'dır.",
    answers: [
      { text: "a · b", ok: true },
      { text: "a + b", ok: false },
      { text: "b", ok: false },
      { text: "(a + 1) / b", ok: false },
      { text: "ab / (a + b)", ok: false }
    ]
  },
  {
    text: "<p>a + b &lt; 0<br>b − c &gt; 0</p><p><b>olduğuna göre aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "b > c'dir. a > 0 ise a + b < 0 olduğundan b < 0'dır; c < b olduğundan c < 0 olur. B seçeneği doğrudur.",
    answers: [
      { text: "a &lt; 0 ise b &gt; 0", ok: false },
      { text: "a &gt; 0 ise c &lt; 0", ok: true },
      { text: "b &gt; 0 ise c &gt; 0", ok: false },
      { text: "b &lt; 0 ise c &gt; 0", ok: false },
      { text: "b pozitiftir.", ok: false }
    ]
  },
  {
    text: "<p>a<sup>3</sup> · b<sup>5</sup> &gt; 0<br>a<sup>2</sup> · c &gt; 0<br>b · c<sup>3</sup> &lt; 0</p><p><b>olduğuna göre a, b ve c'nin işaretleri sırasıyla aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "a² · c > 0 ⇒ c > 0. b · c³ < 0 ⇒ b < 0. a³ · b⁵ > 0 ⇒ a ile b aynı işaretli ⇒ a < 0. İşaretler: −, −, +.",
    answers: [
      { text: "+, +, −", ok: false },
      { text: "+, −, +", ok: false },
      { text: "+, +, +", ok: false },
      { text: "−, +, −", ok: false },
      { text: "−, −, +", ok: true }
    ]
  },
  {
    text: "<p><b>a<sup>3</sup>/b<sup>2</sup> &lt; 0, a<sup>2</sup>/b &gt; 0 ve a<sup>2</sup> + b &lt; c olduğuna göre aşağıdakilerden hangisi <u>kesinlikle</u> pozitiftir?</b></p>",
    diff: 2,
    expl: "a³/b² < 0 ⇒ a < 0. a²/b > 0 ⇒ b > 0. c > a² + b > b ⇒ c > b > 0 > a. (a − b) · (b − c) = (−)(−) = + kesinlikle pozitiftir.",
    answers: [
      { text: "(a − b) · c", ok: false },
      { text: "(a − b) · (b − c)", ok: true },
      { text: "a · (c − a)", ok: false },
      { text: "(c − b) · (a − c)", ok: false },
      { text: "(b + c) · (a + b)", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c gerçel sayılardır.</p><p>a<sup>4</sup> · b<sup>2</sup> · c &lt; 0<br>a · b · c &lt; 0<br>a · b<sup>6</sup> · c<sup>2</sup> &gt; 0</p><p><b>olduğuna göre a, b ve c'nin işareti sırasıyla hangisidir?</b></p>",
    diff: 2,
    expl: "a⁴ · b² · c < 0 ⇒ c < 0. a · b⁶ · c² > 0 ⇒ a > 0. a · b · c < 0 ⇒ a · b > 0 ⇒ b > 0. İşaretler: +, +, −.",
    answers: [
      { text: "−, +, +", ok: false },
      { text: "+, +, +", ok: false },
      { text: "+, +, −", ok: true },
      { text: "−, −, +", ok: false },
      { text: "−, −, −", ok: false }
    ]
  },
  {
    text: "<p><b>a sıfırdan küçük bir gerçel sayı olmak üzere,</b></p><p>I. a − a<sup>2</sup><br>II. a<sup>3</sup> + a<br>III. −a<sup>2</sup><br>IV. a<sup>2</sup> − a<br>V. (−a)<sup>3</sup><br>VI. −(−a<sup>5</sup>)</p><p><b>Yukarıdakilerden hangileri pozitiftir?</b></p>",
    diff: 2,
    expl: "a < 0 için: I (−) − (+) = −. II (−) + (−) = −. III −a² < 0. IV (+) − (−) = +. V (−a)³: −a > 0 olduğundan +. VI −(−a⁵) = a⁵ < 0. Pozitif olanlar IV ve V.",
    answers: [
      { text: "I − II − IV", ok: false },
      { text: "II − V − VI", ok: false },
      { text: "II − IV − V", ok: false },
      { text: "III − IV", ok: false },
      { text: "IV − V", ok: true }
    ]
  },
  {
    text: "<p><b>a &lt; b &lt; 0 &lt; c olmak üzere aşağıdakilerden hangisi <u>kesinlikle</u> negatiftir?</b></p>",
    diff: 2,
    expl: "c − a > 0 ve ac < 0 olduğundan (c − a) / (ac) negatiftir. A (−)/(−) = +, B abc > 0 ve c − a > 0 ⇒ +, D (−)/(−) = +, E'de c + a'nın işareti belli değildir.",
    answers: [
      { text: "(a + b) / (a − c)", ok: false },
      { text: "abc / (c − a)", ok: false },
      { text: "(c − a) / (ac)", ok: true },
      { text: "(b − c) / (ac)", ok: false },
      { text: "(a + b − c) / (c + a)", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b pozitif tam sayılar olmak üzere a · b = k için a + b'nin en büyük değeri aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Çarpımı sabit olan iki pozitif tam sayının toplamı, sayılar birbirinden en uzak olduğunda en büyüktür: a = 1, b = k ⇒ a + b = k + 1.",
    answers: [
      { text: "k − 1", ok: false },
      { text: "k", ok: false },
      { text: "k/2 + 2", ok: false },
      { text: "k + 1", ok: true },
      { text: "−k − 1", ok: false }
    ]
  },
  {
    text: "<p>a · b · c &lt; 0<br>a + b + c &gt; 0</p><p><b>olacak şekilde verilen a, b, c gerçek sayılarının işaretleri sırasıyla hangisi olabilir?</b></p>",
    diff: 2,
    expl: "Çarpım negatif olduğundan ya bir ya da üç sayı negatiftir. Üçü de negatif olursa toplam pozitif olamaz. Bir negatif sayı içeren tek seçenek −, +, + (D) olup toplam pozitif olabilir.",
    answers: [
      { text: "−, −, +", ok: false },
      { text: "−, −, −", ok: false },
      { text: "+, −, −", ok: false },
      { text: "−, +, +", ok: true },
      { text: "+, +, +", ok: false }
    ]
  },
  {
    text: "<p><b>a, b ve c gerçek sayı, k pozitif tam sayı olmak üzere,</b></p><p>• a<sup>2k</sup> · b<sup>2k−1</sup> &lt; 0<br>• b<sup>2k+2</sup> · c<sup>k</sup> &lt; 0<br>• a<sup>2k+1</sup> · c<sup>4k</sup> &gt; 0</p><p><b>olduğuna göre a, b · c ve a · b · c'nin işaretleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "a<sup>2k</sup> > 0 ve b<sup>2k−1</sup> < 0 ⇒ b < 0. b<sup>2k+2</sup> > 0 ⇒ c<sup>k</sup> < 0 ⇒ c < 0. c<sup>4k</sup> > 0 ⇒ a<sup>2k+1</sup> > 0 ⇒ a > 0. Buna göre a: +, b · c: +, a · b · c: + (A) bulunur. Kitabın cevap anahtarı ise B seçeneğini vermektedir.",
    answers: [
      { text: "+, +, +", ok: false },
      { text: "+, −, −", ok: true },
      { text: "+, −, +", ok: false },
      { text: "−, +, +", ok: false },
      { text: "−, −, +", ok: false }
    ]
  },
  {
    text: "<p>a &lt; 0 ve b &gt; 0 olmak üzere a ve b reel sayılardır.</p><p><b>Buna göre, aşağıdakilerden hangisi sıfır olabilir?</b></p>",
    diff: 1,
    expl: "a − b < 0'dır ve a − b = −1 olabilir (ör. a = −0,5, b = 0,5); bu durumda a − b + 1 = 0 olur. 3a − b ve a − b − 2 daima negatif, b − a ve 3 − 2a + b daima pozitiftir.",
    answers: [
      { text: "3a − b", ok: false },
      { text: "a − b + 1", ok: true },
      { text: "b − a", ok: false },
      { text: "3 − 2a + b", ok: false },
      { text: "a − b − 2", ok: false }
    ]
  },

// ─── ASAL SAYILAR ─────────────────────────────────────────────────────────────

  {
    text: "<p><b>3 basamaklı asal rakamlarla yazılan rakamları farklı <u>en büyük</u> doğal sayı 2 basamaklı asal rakamlarla yazılan <u>en küçük</u> doğal sayının toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "Asal rakamlar 2, 3, 5, 7'dir. Rakamları farklı en büyük 3 basamaklı sayı 753, asal rakamlarla yazılan en küçük 2 basamaklı sayı 22'dir. Toplam: 753 + 22 = 775.",
    answers: [
      { text: "757", ok: false },
      { text: "775", ok: true },
      { text: "875", ok: false },
      { text: "925", ok: false },
      { text: "975", ok: false }
    ]
  },
  {
    text: "<p>a, b, c birer asal sayıdır.</p><p>a / (b − c) = 17</p><p><b>olduğuna göre a + b + c toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "a = 17 · (b − c) ve a asal olduğundan b − c = 1, a = 17'dir. Farkı 1 olan asallar b = 3, c = 2'dir. a + b + c = 17 + 3 + 2 = 22.",
    answers: [
      { text: "23", ok: false },
      { text: "21", ok: false },
      { text: "22", ok: true },
      { text: "24", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>x, y, z asal sayılar</p><p>x = 5<sup>y − z</sup></p><p><b>olduğuna göre x · y · z kaçtır?</b></p>",
    diff: 2,
    expl: "x asal olduğundan y − z = 1 ve x = 5'tir. Farkı 1 olan asallar y = 3, z = 2'dir. x · y · z = 5 · 3 · 2 = 30.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "48", ok: false },
      { text: "30", ok: true },
      { text: "54", ok: false }
    ]
  },
  {
    text: "<p>a ve b pozitif tam sayı</p><p>a<sup>2</sup> − b<sup>2</sup> = 19</p><p><b>olduğuna göre a · b aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "(a − b)(a + b) = 19 ve 19 asal olduğundan a − b = 1, a + b = 19 ⇒ a = 10, b = 9. a · b = 90.",
    answers: [
      { text: "90", ok: true },
      { text: "72", ok: false },
      { text: "80", ok: false },
      { text: "63", ok: false },
      { text: "100", ok: false }
    ]
  },
  {
    text: "<p>a ve b asal sayılar</p><p>a − b = 177 ise</p><p><b>a + b toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İki asalın farkı tek ise biri çift asal olan 2'dir: b = 2, a = 179. a + b = 181.",
    answers: [
      { text: "175", ok: false },
      { text: "179", ok: false },
      { text: "178", ok: false },
      { text: "181", ok: true },
      { text: "193", ok: false }
    ]
  },
  {
    text: "<p>x ve y pozitif tam sayı n bir asal sayı</p><p>x<sup>2</sup> − y<sup>2</sup> = n ise</p><p><b>y'nin n türünden değeri kaçtır?</b></p>",
    diff: 2,
    expl: "(x − y)(x + y) = n asal olduğundan x − y = 1, x + y = n. Taraf tarafa çıkarılırsa 2y = n − 1 ⇒ y = (n − 1)/2.",
    answers: [
      { text: "(n + 1)/2", ok: false },
      { text: "(n − 1)/2", ok: true },
      { text: "(1 − n)/2", ok: false },
      { text: "(n + 2)/2", ok: false },
      { text: "(n − 2)/2", ok: false }
    ]
  },
  {
    text: "<p>a ile b aralarında asal sayılardır.</p><p>a · b = 24</p><p><b>olduğuna göre a'nın alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "24 = 2³ · 3. Aralarında asal (a, b) çiftleri: (1, 24), (24, 1), (3, 8), (8, 3). a'nın değerleri toplamı: 1 + 24 + 3 + 8 = 36.",
    answers: [
      { text: "38", ok: false },
      { text: "24", ok: false },
      { text: "36", ok: true },
      { text: "30", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "<p>x − 3 ile y + 1 sayıları aralarında asaldır.</p><p>(x − 3) · (y + 1) = 56</p><p><b>olduğuna göre x + y <u>en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "56 = 2³ · 7. Aralarında asal çarpanlar (1, 56) veya (8, 7) olabilir. x + y = (x − 3) + (y + 1) + 2 olduğundan en küçük toplam 8 + 7 + 2 = 17'dir.",
    answers: [
      { text: "17", ok: true },
      { text: "14", ok: false },
      { text: "20", ok: false },
      { text: "18", ok: false },
      { text: "19", ok: false }
    ]
  },
  {
    text: "<p>2x + 1 ile 3y − 2 sayıları aralarında asal sayılardır.</p><p>(2x + 1) / (3y − 2) = 25/35</p><p><b>olduğuna göre x + y toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "25/35 = 5/7 ve 2x + 1 ile 3y − 2 aralarında asal olduğundan 2x + 1 = 5 ⇒ x = 2, 3y − 2 = 7 ⇒ y = 3. x + y = 5.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>x − y ile x + y sayıları aralarında asal sayılardır.</p><p>(x − y) / (x + y) = 24/40</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "24/40 = 3/5 ⇒ x − y = 3, x + y = 5. Toplanırsa 2x = 8 ⇒ x = 4.",
    answers: [
      { text: "13/2", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "15/2", ok: false }
    ]
  },
  {
    text: "<p>x ile y aralarında asal sayılardır.</p><p>(x − y) / (x + y) = 24/40</p><p><b>olduğuna göre x · y aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "24/40 = 3/5 ⇒ x − y = 3, x + y = 5 ⇒ x = 4, y = 1 (4 ile 1 aralarında asaldır). x · y = 4.",
    answers: [
      { text: "5", ok: false },
      { text: "8", ok: false },
      { text: "4", ok: true },
      { text: "3", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>(x + 2) ve (2x + y − 3) sayıları aralarında asal sayılardır.</p><p>40 · (x + 2) = 55 · (2x + y − 3)</p><p><b>ise y kaçtır?</b></p>",
    diff: 2,
    expl: "(x + 2) / (2x + y − 3) = 55/40 = 11/8. Aralarında asal olduklarından x + 2 = 11 ⇒ x = 9; 2x + y − 3 = 8 ⇒ 18 + y − 3 = 8 ⇒ y = −7.",
    answers: [
      { text: "−3", ok: false },
      { text: "−5", ok: false },
      { text: "−7", ok: true },
      { text: "−10", ok: false },
      { text: "−6", ok: false }
    ]
  },

// ─── ASAL ÇARPANLARA AYIRMA ───────────────────────────────────────────────────

  {
    text: "<p><b>36 sayısının asal çarpanlarına ayrılmış hali aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "36 = 4 · 9 = 2² · 3².",
    answers: [
      { text: "2 · 3<sup>2</sup>", ok: false },
      { text: "2<sup>2</sup> · 3", ok: false },
      { text: "2<sup>2</sup> · 3<sup>2</sup>", ok: true },
      { text: "2<sup>3</sup> · 3", ok: false },
      { text: "2 · 3<sup>3</sup>", ok: false }
    ]
  },
  {
    text: "<p><b>120 sayısının kaç farklı asal çarpanı vardır?</b></p>",
    diff: 1,
    expl: "120 = 2³ · 3 · 5. Farklı asal çarpanlar 2, 3, 5 olmak üzere 3 tanedir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>330 sayısının en büyük asal çarpanı kaçtır?</b></p>",
    diff: 1,
    expl: "330 = 2 · 3 · 5 · 11. En büyük asal çarpan 11'dir.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "11", ok: true }
    ]
  },
  {
    text: "<p><b>AB iki basamaklı bir doğal sayıdır. AB sayısının asal çarpanları 2 ve 3 olduğuna göre <u>en büyük</u> AB sayısı kaçtır?</b></p>",
    diff: 2,
    expl: "AB = 2ᵐ · 3ⁿ (m, n ≥ 1) biçimindedir. Seçeneklerden 96 = 2⁵ · 3 uygundur; 98 = 2 · 7² uygun değildir. En büyük AB = 96.",
    answers: [
      { text: "72", ok: false },
      { text: "88", ok: false },
      { text: "92", ok: false },
      { text: "96", ok: true },
      { text: "98", ok: false }
    ]
  },
  {
    text: "<p>a ve b pozitif tam sayılardır.</p><p>a<sup>2</sup> = 20 · b</p><p><b>olduğuna göre (a + b) toplamının <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "20 · b = 2² · 5 · b tam kare olmalı; en küçük b = 5 ⇒ a² = 100 ⇒ a = 10. a + b = 15.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "<p>a ve b pozitif tam sayılardır.</p><p>a<sup>3</sup> = 120 · b</p><p><b>olduğuna göre b'nin alabileceği <u>en küçük</u> değer kaçtır?</b></p>",
    diff: 2,
    expl: "120 · b = 2³ · 3 · 5 · b tam küp olmalıdır. En küçük b = 3² · 5² = 225.",
    answers: [
      { text: "10", ok: false },
      { text: "25", ok: false },
      { text: "100", ok: false },
      { text: "150", ok: false },
      { text: "225", ok: true }
    ]
  },
  {
    text: "<p>7200 sayısı asal çarpanlarına</p><p>7200 = 2<sup>a</sup> · 3<sup>b</sup> · 5<sup>c</sup></p><p>şeklinde ayrılıyor.</p><p><b>Buna göre (a + b + c) toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "7200 = 72 · 100 = 2³ · 3² · 2² · 5² = 2⁵ · 3² · 5². a + b + c = 5 + 2 + 2 = 9.",
    answers: [
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer doğal sayıdır.</p><p>(b − 1)<sup>3</sup> = 24 · (a + 1)<sup>2</sup></p><p><b>olduğuna göre a · b çarpımının alabileceği en küçük değer kaçtır?</b></p>",
    diff: 3,
    expl: "24 · (a + 1)² = 2³ · 3 · (a + 1)² tam küp olmalıdır. En küçük durumda a + 1 = 3 ⇒ 24 · 9 = 216 = 6³. Buradan b − 1 = 6 ⇒ b = 7, a = 2. a · b = 14.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "14", ok: true },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p>x ve y pozitif tam sayı olmak üzere</p><p>72 · x = y<sup>4</sup></p><p><b>olduğuna göre (x + y) toplamının <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "72 = 2³ · 3². 72 · x'in 4. kuvvet olması için en küçük x = 2 · 3² = 18 ⇒ y⁴ = 2⁴ · 3⁴ ⇒ y = 6. x + y = 24.",
    answers: [
      { text: "18", ok: false },
      { text: "20", ok: false },
      { text: "24", ok: true },
      { text: "30", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p><b>432 sayısının pozitif tam sayı bölenlerinin sayısı kaçtır?</b></p>",
    diff: 1,
    expl: "432 = 2⁴ · 3³. Pozitif bölen sayısı (4 + 1)(3 + 1) = 20.",
    answers: [
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "22", ok: false },
      { text: "23", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "<p><b>24000 .... 0 sayısının pozitif tam bölen sayısı 80 olduğuna göre bu sayının sondan kaç basamağı 0'dır?</b></p>",
    diff: 3,
    expl: "Sayı 24 · 10ᵏ = 2ᵏ⁺³ · 3 · 5ᵏ biçimindedir (k: sondaki sıfır sayısı). Bölen sayısı (k + 4) · 2 · (k + 1) = 80 ⇒ (k + 4)(k + 1) = 40 ⇒ k = 4.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>3<sup>n</sup> · 40 sayısının 128 tane tam sayı böleni varsa n doğal sayısı kaçtır?</b></p>",
    diff: 2,
    expl: "3ⁿ · 40 = 2³ · 3ⁿ · 5. Pozitif bölen sayısı 4 · (n + 1) · 2 = 8(n + 1); tam sayı bölen sayısı 16(n + 1) = 128 ⇒ n = 7.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>60 sayısının asal olmayan tam sayı bölenlerinin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Bir sayının tüm tam sayı bölenlerinin toplamı 0'dır. 60'ın asal bölenleri 2, 3, 5'tir (toplamı 10). Asal olmayan tam sayı bölenlerinin toplamı 0 − 10 = −10.",
    answers: [
      { text: "−15", ok: false },
      { text: "−10", ok: true },
      { text: "0", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p><b>240 sayısının pozitif tam bölenlerinin kaç tanesi tek sayıdır?</b></p>",
    diff: 2,
    expl: "240 = 2⁴ · 3 · 5. Tek bölenler 3 · 5 = 15'in bölenleridir: (1 + 1)(1 + 1) = 4.",
    answers: [
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>A = 12 + 24 + 36 + ... + 120</p><p><b>olduğuna göre A'yı tam bölen asal sayıların toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "A = 12 · (1 + 2 + ... + 10) = 12 · 55 = 660 = 2² · 3 · 5 · 11. Asal bölenlerin toplamı 2 + 3 + 5 + 11 = 21.",
    answers: [
      { text: "5", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "21", ok: true },
      { text: "23", ok: false }
    ]
  },
  {
    text: "<p><b>150/a sayısı pozitif tam sayı olduğuna göre, a doğal sayısının alabileceği kaç farklı değer vardır?</b></p>",
    diff: 2,
    expl: "a, 150'nin pozitif bölenidir. 150 = 2 · 3 · 5² ⇒ (1 + 1)(1 + 1)(2 + 1) = 12.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: true }
    ]
  }
];

export const MAT_FAKTORIYEL_T3: McQ[] = [
// ─── FAKTÖRİYEL TEST - 1 ──────────────────────────────────────────────────────

  {
    text: "<p><b>7! sayısı 5! sayısının kaç katıdır?</b></p>",
    diff: 1,
    expl: "7! / 5! = 7 · 6 = 42.",
    answers: [
      { text: "2", ok: false },
      { text: "13", ok: false },
      { text: "21", ok: false },
      { text: "42", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>(6 · 5! + 2 · 6!) / (2 · 4! + 4 · 3!)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "Pay: 6 · 120 + 2 · 720 = 720 + 1440 = 2160. Payda: 2 · 24 + 4 · 6 = 48 + 24 = 72. Sonuç: 2160 / 72 = 30.",
    answers: [
      { text: "20", ok: false },
      { text: "30", ok: true },
      { text: "40", ok: false },
      { text: "50", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>7! / (5! + 6!)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "5! + 6! = 5!(1 + 6) = 7 · 5!. 7! / (7 · 5!) = 7 · 6 · 5! / (7 · 5!) = 6.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>0! + 1! + 2! + 3! + ...... + 4!</p><p><b>toplamının birler basamağındaki rakam kaçtır?</b></p>",
    diff: 1,
    expl: "1 + 1 + 2 + 6 + 24 = 34. Birler basamağı 4'tür.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true }
    ]
  },
  {
    text: "<p>0! + 2! + 4! + 6! + ...... + 142!</p><p><b>toplamının birler basamağındaki rakam kaçtır?</b></p>",
    diff: 1,
    expl: "5! ve sonraki faktöriyellerin birler basamağı 0'dır. 0! + 2! + 4! = 1 + 2 + 24 = 27 ⇒ birler basamağı 7.",
    answers: [
      { text: "0", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliğe göre n! kaça eşittir?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q6.jpg",
    diff: 2,
    expl: "(n + 2)! = (n + 2)(n + 1)! olduğundan pay (n + 1)!(n + 3), payda (n + 1)!(n + 1) olur. (n + 3)/(n + 1) = 4/3 ⇒ 3n + 9 = 4n + 4 ⇒ n = 5. n! = 120.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "24", ok: false },
      { text: "120", ok: true },
      { text: "720", ok: false }
    ]
  },
  {
    text: "<p><b>n bir doğal sayı olmak üzere</b></p><p>(n + 3)! / (n + 1)! = 56 ise</p><p><b>(n − 1)! kaça eşittir?</b></p>",
    diff: 2,
    expl: "(n + 3)(n + 2) = 56 = 8 · 7 ⇒ n = 5. (n − 1)! = 4! = 24.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliğe göre n kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q8.jpg",
    diff: 2,
    expl: "(n + 1)!/(n + 3)! = 1/((n + 3)(n + 2)) ve n!/(n + 2)! = 1/((n + 2)(n + 1)). n = 1 için 1/12 + 1/6 = 3/12 = 1/4 sağlanır. n = 1.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>a ve b sayma sayıları olmak üzere,</p><p>55! = 2<sup>a</sup> · b</p><p><b>olduğuna göre a <u>en çok</u> kaçtır?</b></p>",
    diff: 2,
    expl: "55! içindeki 2 çarpanı sayısı: 27 + 13 + 6 + 3 + 1 = 50 olduğundan a en çok 50 bulunur; bu değer seçeneklerde yoktur. Kitabın cevap anahtarı E seçeneğini (49) vermektedir.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "49", ok: true }
    ]
  },
  {
    text: "<p>72! / 6<sup>n</sup></p><p><b>ifadesinin doğal sayı olması için n en büyük kaç olmalıdır?</b></p>",
    diff: 2,
    expl: "6 = 2 · 3; 72! içinde 3 çarpanı 2'den azdır. 3 sayısı: 24 + 8 + 2 = 34. n en çok 34.",
    answers: [
      { text: "12", ok: false },
      { text: "24", ok: false },
      { text: "34", ok: true },
      { text: "36", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p>121! / 25<sup>n</sup></p><p><b>ifadesinin tam sayı olması için n pozitif tam sayısı en çok kaçtır?</b></p>",
    diff: 2,
    expl: "121! içindeki 5 çarpanı: 24 + 4 = 28. 25ⁿ = 5²ⁿ ⇒ 2n ≤ 28 ⇒ n en çok 14.",
    answers: [
      { text: "4", ok: false },
      { text: "11", ok: false },
      { text: "14", ok: true },
      { text: "25", ok: false },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p>44! / 4<sup>n</sup></p><p><b>ifadesinin tam sayı olması için n pozitif tam sayısı en çok kaçtır?</b></p>",
    diff: 2,
    expl: "44! içindeki 2 çarpanı: 22 + 11 + 5 + 2 + 1 = 41. 4ⁿ = 2²ⁿ ⇒ 2n ≤ 41 ⇒ n en çok 20.",
    answers: [
      { text: "13", ok: false },
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "40", ok: false },
      { text: "44", ok: false }
    ]
  },
  {
    text: "<p>(29! − 2 · 28!) / 27<sup>n</sup></p><p><b>ifadesinin tam sayı olması için n pozitif tam sayısı en çok kaç olmalıdır?</b></p>",
    diff: 3,
    expl: "29! − 2 · 28! = 28!(29 − 2) = 27 · 28! = 3³ · 28!. 28! içindeki 3 çarpanı: 9 + 3 + 1 = 13; toplam 16. 27ⁿ = 3³ⁿ ⇒ 3n ≤ 16 ⇒ n en çok 5.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: true },
      { text: "13", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p><b>121! sayısının sondan kaç basamağı sıfırdır?</b></p>",
    diff: 1,
    expl: "121! içindeki 5 çarpanı sayısı: 24 + 4 = 28. Sondan 28 basamak sıfırdır.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "28", ok: true },
      { text: "31", ok: false }
    ]
  },
  {
    text: "<p><b>75! − 1 sayısının sondan kaç basamağı dokuzdur?</b></p>",
    diff: 2,
    expl: "75!'in sonundaki sıfır sayısı: 15 + 3 = 18. 1 çıkarılınca bu 18 sıfır 9 olur.",
    answers: [
      { text: "18", ok: true },
      { text: "15", ok: false },
      { text: "9", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>24! = a · 3<sup>b</sup> · 5<sup>c</sup> için;</p><p><b>a, b ve c pozitif tam sayılar olduğuna göre b + c toplamının en büyük değeri kaçtır?</b></p>",
    diff: 2,
    expl: "24! içindeki 3 çarpanı: 8 + 2 = 10; 5 çarpanı: 4. b + c en çok 10 + 4 = 14.",
    answers: [
      { text: "4", ok: false },
      { text: "10", ok: false },
      { text: "14", ok: true },
      { text: "24", ok: false },
      { text: "28", ok: false }
    ]
  },

// ─── FAKTÖRİYEL TEST - 2 ──────────────────────────────────────────────────────

  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q17.jpg",
    diff: 2,
    expl: "Pay: 7 · 7! − 6! = 6!(49 − 1) = 48 · 6!. Payda: 5 · 6! − 18 · 5! = 5!(30 − 18) = 12 · 5!. Sonuç: 48 · 6! / (12 · 5!) = 4 · 6 = 24.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıdaki eşitliği sağlayan n doğal sayısı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q18.jpg",
    diff: 2,
    expl: "2(n + 2)! − n! = 3(n + 1)!. n = 0 için 2 · 2! − 0! = 3 ve 3 · 1! = 3 olduğundan eşitlik sağlanır. n = 0.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki eşitliği sağlayan n doğal sayısı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q19.jpg",
    diff: 2,
    expl: "(n + 1)!/(n − 1)! = (n + 1)n ve n!/(n − 2)! = n(n − 1). Eşitlik: (n + 1)n/2 + n(n − 1)/3 = n ⇒ (n + 1)/2 + (n − 1)/3 = 1 ⇒ 3n + 3 + 2n − 2 = 6 ⇒ n = 1. Kitabın cevap anahtarına göre cevap 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>6! = 6<sup>n</sup> · m</p><p><b>eşitliğinde n ve m doğal sayılar olmak üzere n en çok olduğunda m kaçtır?</b></p>",
    diff: 2,
    expl: "6! = 720 = 2⁴ · 3² · 5. 3 çarpanı 2 tane olduğundan n en çok 2; m = 720 / 36 = 20.",
    answers: [
      { text: "2", ok: false },
      { text: "20", ok: true },
      { text: "60", ok: false },
      { text: "120", ok: false },
      { text: "720", ok: false }
    ]
  },
  {
    text: "<p>10! = 2<sup>a</sup> · 3<sup>b</sup> · c</p><p><b>eşitliğinde a, b ve c doğal sayı olmak üzere c'nin <u>en küçük</u> değeri için c − a · b değeri kaçtır?</b></p>",
    diff: 2,
    expl: "10! = 2⁸ · 3⁴ · 5² · 7. c en küçük olduğunda a = 8, b = 4, c = 25 · 7 = 175. c − a · b = 175 − 32 = 143.",
    answers: [
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "32", ok: false },
      { text: "143", ok: true },
      { text: "175", ok: false }
    ]
  },
  {
    text: "<p><b>98! + 99! toplamının sondan kaç basamağı sıfırdır?</b></p>",
    diff: 2,
    expl: "98! + 99! = 98!(1 + 99) = 100 · 98!. 98!'in sonundaki sıfır sayısı 19 + 3 = 22; 100 ile çarpınca 22 + 2 = 24.",
    answers: [
      { text: "22", ok: false },
      { text: "23", ok: false },
      { text: "24", ok: true },
      { text: "25", ok: false },
      { text: "26", ok: false }
    ]
  },
  {
    text: "<p><b>24! + 25! − 1 işleminin sonucunda sondan kaç basamak dokuzdur?</b></p>",
    diff: 2,
    expl: "24! + 25! = 24!(1 + 25) = 26 · 24!. 24! içinde 4 tane 5 çarpanı vardır, 26 yeni 5 getirmez; sondaki sıfır sayısı 4'tür. 1 çıkarılınca sondan 4 basamak 9 olur.",
    answers: [
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>4 · 21! + 23! toplamının sondan kaç basamağı sıfırdır?</b></p>",
    diff: 2,
    expl: "4 · 21! + 23! = 21!(4 + 22 · 23) = 21! · 510. 21! içinde 4 tane 5 çarpanı, 510 = 2 · 3 · 5 · 17 içinde 1 tane 5 çarpanı vardır; sondaki sıfır sayısı 5 (B) bulunur. Kitabın cevap anahtarı ise C seçeneğini (6) vermektedir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>a! / b! = 42</p><p><b>olduğuna göre, a + b toplamının alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "a!/b! = 42 için a = 42, b = 41 (a + b = 83) veya a = 7, b = 5 (7 · 6 = 42, a + b = 12) olabilir. Değerler toplamı 83 + 12 = 95.",
    answers: [
      { text: "83", ok: false },
      { text: "93", ok: false },
      { text: "95", ok: true },
      { text: "103", ok: false },
      { text: "105", ok: false }
    ]
  },
  {
    text: "<p>1 · 1! + 2 · 2! + 3 · 3! + ..... + 41 · 41!</p><p><b>toplamının 5 ile bölümünden kalan kaçtır?</b></p>",
    diff: 3,
    expl: "k · k! = (k + 1)! − k! olduğundan toplam 42! − 1'dir. 42! 5'e bölünür, 42! − 1'in 5 ile bölümünden kalan 4'tür.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true }
    ]
  },
  {
    text: "<p>1! + 3! + 5! + ...... + 19!</p><p><b>sayısının 18 ile bölümünden kalan kaçtır?</b></p>",
    diff: 2,
    expl: "7! ve sonrası 18'e bölünür. 1! + 3! + 5! = 1 + 6 + 120 = 127 = 18 · 7 + 1. Kalan 1.",
    answers: [
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>50! sayısının asal çarpanlarından en büyüğü ile en küçüğü arasındaki fark kaçtır?</b></p>",
    diff: 1,
    expl: "50!'in en büyük asal çarpanı 47, en küçüğü 2'dir. Fark 45.",
    answers: [
      { text: "30", ok: false },
      { text: "35", ok: false },
      { text: "40", ok: false },
      { text: "45", ok: true },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki eşitliğe göre (n + 1)! ifadesinin değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q29.jpg",
    diff: 2,
    expl: "(n + 1)! = (n + 1) · n! olduğundan oran (n + 2)/n = 3 ⇒ n = 1. (n + 1)! = 2! = 2.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p><b>n pozitif doğal sayısı için 56! / 4<sup>n</sup>'nin doğal sayı olması için n <u>en çok</u> kaç olmalıdır?</b></p>",
    diff: 2,
    expl: "56! içindeki 2 çarpanı: 28 + 14 + 7 + 3 + 1 = 53. 4ⁿ = 2²ⁿ ⇒ 2n ≤ 53 ⇒ n en çok 26.",
    answers: [
      { text: "13", ok: false },
      { text: "26", ok: true },
      { text: "27", ok: false },
      { text: "52", ok: false },
      { text: "53", ok: false }
    ]
  },
  {
    text: "<p><b>n! ifadesinin onlar basamağının sıfırdan farklı olması için n yerine yazılabilecek 1'den büyük doğal sayıların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "4! = 24, 5! = 120, 6! = 720, 7! = 5040, 8! = 40320, 9! = 362880 sayılarının onlar basamağı sıfırdan farklıdır; 2!, 3! ve 10! ile sonrasında onlar basamağı 0'dır. Toplam: 4 + 5 + 6 + 7 + 8 + 9 = 39.",
    answers: [
      { text: "39", ok: true },
      { text: "36", ok: false },
      { text: "45", ok: false },
      { text: "27", ok: false },
      { text: "54", ok: false }
    ]
  },
  {
    text: "<p><b>60 = a · b! eşitliğindeki a ve b doğal sayıları için b kaç farklı değer alabilir?</b></p>",
    diff: 2,
    expl: "b!, 60'ı bölmelidir: 0! = 1, 1! = 1, 2! = 2, 3! = 6 uygundur; 4! = 24 bölmez. b = 0, 1, 2, 3 olmak üzere 4 farklı değer.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },

// ─── FAKTÖRİYEL TEST - 3 ──────────────────────────────────────────────────────

  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q33.jpg",
    diff: 1,
    expl: "3! = 6, 4! = 24, 2! = 2. (6 + 12/24) · 2 = (13/2) · 2 = 13.",
    answers: [
      { text: "1/2", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "6", ok: false },
      { text: "13", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/temel-kavramlar_t7_q34.jpg",
    diff: 2,
    expl: "İki kare farkı: (5!)² − (3!)² = (5! − 3!)(5! + 3!). Sadeleşince 5! − 3! = 120 − 6 = 114.",
    answers: [
      { text: "2", ok: false },
      { text: "16", ok: false },
      { text: "114", ok: true },
      { text: "126", ok: false },
      { text: "720", ok: false }
    ]
  },
  {
    text: "<p>(2! + 3!)! / x = (3!)!</p><p><b>eşitliğinde x değeri kaçtır?</b></p>",
    diff: 2,
    expl: "2! + 3! = 8 ve 3! = 6 ⇒ 8!/x = 6! ⇒ x = 8!/6! = 8 · 7 = 56.",
    answers: [
      { text: "1", ok: false },
      { text: "15", ok: false },
      { text: "56", ok: true },
      { text: "359", ok: false },
      { text: "7!", ok: false }
    ]
  },
  {
    text: "<p>x! &lt; 409</p><p><b>eşitsizliğini sağlayan kaç tane x doğal sayısı vardır?</b></p>",
    diff: 1,
    expl: "0! = 1, 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720. x = 0, 1, 2, 3, 4, 5 olmak üzere 6 değer vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p><b>a! sayısının asal çarpanlarının en büyüğü 23 olduğuna göre a yerine yazılabilecek en büyük değer ile <u>en küçük</u> değer arasındaki fark kaçtır?</b></p>",
    diff: 2,
    expl: "a en az 23 olmalı; 29 asal olduğundan a en çok 28 olabilir. Fark: 28 − 23 = 5.",
    answers: [
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "23", ok: false },
      { text: "28", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "<p><b>a! · b! = 144 eşitliğinde a yerine yazılabilecek değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "144 = 24 · 6 = 4! · 3!. a = 4, b = 3 veya a = 3, b = 4 olabilir. a'nın değerleri toplamı 3 + 4 = 7.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true }
    ]
  },
  {
    text: "<p><b>a · 10! ifadesinin bir tam kare olması için a yerine yazılabilecek <u>en küçük</u> sayma sayısı kaçtır?</b></p>",
    diff: 2,
    expl: "10! = 2⁸ · 3⁴ · 5² · 7. Tam kare olması için 7'nin üssü çift olmalıdır; en küçük a = 7.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: true },
      { text: "10", ok: false },
      { text: "14", ok: false },
      { text: "56", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b birer doğal sayı olmak üzere, a! + b! toplamı [2, 25] aralığında değerler aldığına göre a + b toplamı kaç farklı değer alır?</b></p>",
    diff: 3,
    expl: "Uygun faktöriyeller 0! = 1! = 1, 2! = 2, 3! = 6, 4! = 24'tür. 4! kullanılırsa diğeri 0 veya 1 olmalıdır. Uygun (a, b) ikilileri için a + b: (0,0) → 0, (0,1) → 1, (1,1) ve (0,2) → 2, (1,2) ve (0,3) → 3, (2,2), (1,3) ve (0,4) → 4, (2,3) ve (1,4) → 5, (3,3) → 6. a + b; 0, 1, 2, 3, 4, 5, 6 olmak üzere 7 farklı değer alır.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>a = 4! / (4! + 5!)&nbsp;&nbsp;&nbsp;b = 5! / (5! + 6!)&nbsp;&nbsp;&nbsp;c = 6! / (6! + 7!)</p><p><b>a, b ve c reel sayılarının küçükten büyüğe sıralanışı hangisinde doğru verilmiştir?</b></p>",
    diff: 2,
    expl: "a = 4!/(4!(1 + 5)) = 1/6, b = 1/7, c = 1/8. 1/8 < 1/7 < 1/6 ⇒ c < b < a.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "b &lt; a &lt; c", ok: false },
      { text: "b &lt; c &lt; a", ok: false },
      { text: "c &lt; b &lt; a", ok: true },
      { text: "c &lt; a &lt; b", ok: false }
    ]
  },
  {
    text: "<p>4<sup>a</sup> = (3 · 4!)! / b</p><p><b>olacak şekilde verilen a ve b doğal sayıları için a <u>en çok</u> kaçtır?</b></p>",
    diff: 3,
    expl: "3 · 4! = 72 ⇒ 2²ᵃ · b = 72!. 72! içindeki 2 çarpanı: 36 + 18 + 9 + 4 + 2 + 1 = 70 ⇒ 2a ≤ 70 ⇒ a en çok 35.",
    answers: [
      { text: "8", ok: false },
      { text: "17", ok: false },
      { text: "35", ok: true },
      { text: "70", ok: false },
      { text: "140", ok: false }
    ]
  },
  {
    text: "<p><b>12! sayısının pozitif bölen sayısı ile asal çarpan sayısının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "12! = 2¹⁰ · 3⁵ · 5² · 7 · 11. Pozitif bölen sayısı 11 · 6 · 3 · 2 · 2 = 792; asal çarpan sayısı 5. Toplam 797.",
    answers: [
      { text: "185", ok: false },
      { text: "360", ok: false },
      { text: "720", ok: false },
      { text: "725", ok: false },
      { text: "797", ok: true }
    ]
  },
  {
    text: "<p>1! + 2! + 3! + ....... + 15!</p><p><b>toplamının 7 ile bölümünden elde edilen kalan kaçtır?</b></p>",
    diff: 2,
    expl: "7! ve sonrası 7'ye bölünür. 1 + 2 + 6 + 24 + 120 + 720 = 873 = 7 · 124 + 5. Kalan 5.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>x bir doğal sayı olmak üzere x! sayısının en büyük asal çarpanı 17 olduğuna göre max(x!) / min(x!) oranı kaçtır?</b></p>",
    diff: 2,
    expl: "x en az 17, en çok 18 olabilir (19 asaldır). 18!/17! = 18.",
    answers: [
      { text: "17", ok: false },
      { text: "18", ok: true },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p>abc üç basamaklı doğal sayısı için a = 2b = 2c'dir.</p><p><b>(abc)! = 15<sup>n</sup> · k eşitliğinde <u>en küçük</u> k doğal sayısı için <u>en büyük</u> n doğal sayısı kaçtır?</b></p>",
    diff: 3,
    expl: "b = c ve a = 2b ⇒ abc ∈ {211, 422, 633, 844}. 15 = 3 · 5 olduğundan n, (abc)! içindeki 5 çarpanı sayısıdır. abc = 211 için 42 + 8 + 1 = 51 bulunur. Kitabın cevap anahtarına göre cevap 51'dir.",
    answers: [
      { text: "28", ok: false },
      { text: "29", ok: false },
      { text: "51", ok: true },
      { text: "103", ok: false },
      { text: "119", ok: false }
    ]
  },
  {
    text: "<p>71! / 5<sup>n</sup></p><p><b>sayısı 10 ile tam bölünemeyen bir doğal sayı olduğuna göre n kaçtır?</b></p>",
    diff: 2,
    expl: "Bölümde hiç 5 çarpanı kalmamalıdır. 71! içindeki 5 çarpanı: 14 + 2 = 16 ⇒ n = 16.",
    answers: [
      { text: "16", ok: true },
      { text: "17", ok: false },
      { text: "18", ok: false },
      { text: "19", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>66! / 7<sup>n</sup></p><p><b>sayısı 7 ile tam bölünebilen bir doğal sayı olduğuna göre n <u>en çok</u> kaçtır?</b></p>",
    diff: 2,
    expl: "66! içindeki 7 çarpanı: 9 + 1 = 10. Bölümde en az bir 7 kalmalı ⇒ n en çok 9.",
    answers: [
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false }
    ]
  }
];

export const MAT_TEMEL_KAVRAMLAR_GENEL: McQ[] = [
  {
    text: "<p><b>a, b, c pozitif tam sayılar olmak üzere;</b></p><p>4a + 3b + c = 50<br>3a + 2b − c = 27</p><p><b>ise b'nin en büyük değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Taraf tarafa toplanırsa 7a + 5b = 77. b en büyük için a = 1 ⇒ 5b = 70 ⇒ b = 14. Kontrol: 4 + 42 + c = 50 ⇒ c = 4 > 0. b en çok 14.",
    answers: [
      { text: "10", ok: false },
      { text: "18", ok: false },
      { text: "15", ok: false },
      { text: "6", ok: false },
      { text: "14", ok: true }
    ]
  },
  {
    text: "<p>2 · 2! + 3 · 3! + ...... + 40 · 40!</p><p><b>toplamının birler ve onlar basamağındaki rakamların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "k · k! = (k + 1)! − k! olduğundan 1 · 1! + 2 · 2! + ... + 40 · 40! = 41! − 1. 1 · 1! = 1 çıkarılırsa toplam 41! − 2 olur. 41! sonu ...00 olduğundan 41! − 2 sonu ...98'dir. 9 + 8 = 17.",
    answers: [
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "17", ok: true }
    ]
  },
  {
    text: "<p><b>360 / (x − 3) ifadesini tam sayı yapan x tam sayılarının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "x − 3 = d, 360'ın bir tam sayı böleni olmalıdır. 360 = 2³ · 3² · 5 ⇒ 24 pozitif, 48 tam sayı böleni vardır ve bunların toplamı 0'dır. x = d + 3 olduğundan toplam 0 + 48 · 3 = 144.",
    answers: [
      { text: "60", ok: false },
      { text: "72", ok: false },
      { text: "144", ok: true },
      { text: "56", ok: false },
      { text: "90", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b reel sayılar olmak üzere;</b></p><p>a + 1/b = 6</p><p><b>olduğuna göre a/b oranı en fazla kaçtır?</b></p>",
    diff: 3,
    expl: "a = 6 − 1/b ⇒ a/b = 6/b − 1/b². 1/b = u dersek a/b = 6u − u² = 9 − (u − 3)². En büyük değer u = 3 için 9'dur.",
    answers: [
      { text: "6", ok: false },
      { text: "9", ok: true },
      { text: "12", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p><b>x, y birer rakam olmak üzere;</b></p><p>1/(x − 2) − 1/(y − 3) = 1</p><p><b>eşitliğini sağlayan x ve y değerlerinin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "x − 2 = u, y − 3 = v dersek 1/u − 1/v = 1 ⇒ v − u = uv. Tam sayı çözüm u = 2, v = −2'dir: 1/2 + 1/2 = 1. x = 4, y = 1 ⇒ x + y = 5.",
    answers: [
      { text: "5", ok: true },
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p><b>222 sayfalık bir kitabın sayfalarını numaralandırmak için 2 rakamı kaç defa kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Birler basamağında: 2, 12, ..., 222 ⇒ 23 kez. Onlar basamağında: 20–29, 120–129 (10'ar) ve 220–222 (3) ⇒ 23 kez. Yüzler basamağında: 200–222 ⇒ 23 kez. Toplam 69.",
    answers: [
      { text: "59", ok: false },
      { text: "62", ok: false },
      { text: "55", ok: false },
      { text: "65", ok: false },
      { text: "69", ok: true }
    ]
  },
  {
    text: "<p><b>a, b, c pozitif çift doğal sayılar olmak üzere aşağıdakilerden hangisi daima çift'tir?</b></p>",
    diff: 2,
    expl: "a = 2x, b = 2y, c = 2z ⇒ (a · b · c)/4 = 8xyz/4 = 2xyz daima çifttir. Diğerleri tek veya tam sayı olmayan değerler alabilir (ör. a = b = c = 2 için (a·b·c)/8 = 1).",
    answers: [
      { text: "a + (b · c)/4", ok: false },
      { text: "(a + b − c)/2", ok: false },
      { text: "(a · b · c)/4", ok: true },
      { text: "(a · b · c)/16", ok: false },
      { text: "(a · b · c)/8", ok: false }
    ]
  },
  {
    text: "<p><b>aa ve bb 2 basamaklı doğal sayılar olmak üzere;</b></p><p>aa − bb = a<sup>2</sup> − b<sup>2</sup></p><p><b>olduğuna göre 2 basamaklı kaç farklı ab sayısı yazılabilir?</b></p>",
    diff: 2,
    expl: "11(a − b) = (a − b)(a + b). a = b ise 11, 22, ..., 99 ⇒ 9 sayı. a ≠ b ise a + b = 11 ⇒ 29, 38, 47, 56, 65, 74, 83, 92 ⇒ 8 sayı. Toplam 17.",
    answers: [
      { text: "13", ok: false },
      { text: "17", ok: true },
      { text: "7", ok: false },
      { text: "9", ok: false },
      { text: "11", ok: false }
    ]
  }
];
