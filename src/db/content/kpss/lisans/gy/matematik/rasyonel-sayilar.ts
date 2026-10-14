import type { McQ } from "../../../../types";

export const MAT_RASYONEL_SAYILAR_T3_T4: McQ[] = [
  // ─── RASYONEL SAYILAR TEST - 3 ───────────────────────────────────────────────
  {
    text: "<p>8/a = 0,<span style='text-decoration: overline'>12</span></p><p><b>olduğuna göre a aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "0,12 (12 devirli) = 12/99 = 4/33'tür. 8/a = 4/33 ⇒ 4a = 8 · 33 ⇒ a = 66 bulunur.",
    answers: [
      { text: "66", ok: true },
      { text: "33", ok: false },
      { text: "88", ok: false },
      { text: "99", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>x ve y devirli ondalık sayılar olmak üzere;</p><p>x = 0,<span style='text-decoration: overline'>4</span><br>y = 0,<span style='text-decoration: overline'>5</span> ise</p><p><b>1/x + 1/y toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "x = 4/9 ve y = 5/9'dur. 1/x = 9/4 ve 1/y = 9/5 olur. Toplam: 9/4 + 9/5 = 45/20 + 36/20 = 81/20 bulunur.",
    answers: [
      { text: "16/9", ok: false },
      { text: "41/20", ok: false },
      { text: "81/20", ok: true },
      { text: "81/10", ok: false },
      { text: "16/5", ok: false }
    ]
  },
  {
    text: "<p>a = 0,333 ....<br>b = 0,666 ....</p><p><b>olduğuna göre a + b toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "a = 0,3 (3 devirli) = 3/9 = 1/3 ve b = 0,6 (6 devirli) = 6/9 = 2/3'tür. Toplamları 1/3 + 2/3 = 1'dir.",
    answers: [
      { text: "9", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q4.jpg",
    diff: 2,
    expl: "Devreden kısmı yalnızca 9 olan sayılar bir üst tam sayıya eşittir: 14,9 (9 devirli) = 15, 17,9 (9 devirli) = 18, 11,9 (9 devirli) = 12 ve 6,9 (9 devirli) = 7. İşlem: (15 + 18 − 12) / 7 = 21 / 7 = 3 olur.",
    answers: [
      { text: "5", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: true }
    ]
  },
  {
    text: "<p>a = 3/10, b = 3/14, c = 3/11</p><p><b>olduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 1,
    expl: "Payları eşit olan pozitif kesirlerde paydası büyük olan kesir daha küçüktür. 14 > 11 > 10 olduğundan sıralama b < c < a şeklindedir.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "c &lt; a &lt; b", ok: false },
      { text: "c &lt; b &lt; a", ok: false },
      { text: "a &lt; c &lt; b", ok: false },
      { text: "b &lt; c &lt; a", ok: true }
    ]
  },
  {
    text: "<p>x = 11/10, y = 111/100, z = 1111/1000</p><p><b>olduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 1,
    expl: "x = 1,1; y = 1,11; z = 1,111'dir. Basamakları eşitlersek 1,100 < 1,110 < 1,111 olduğundan sıralama x < y < z olur.",
    answers: [
      { text: "x &lt; y &lt; z", ok: true },
      { text: "x &lt; z &lt; y", ok: false },
      { text: "y &lt; x &lt; z", ok: false },
      { text: "z &lt; x &lt; y", ok: false },
      { text: "z &lt; y &lt; x", ok: false }
    ]
  },
  {
    text: "<p>a = −3/4, b = −5/6, c = −7/9</p><p><b>olduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 2,
    expl: "Paydaları 36'da eşitleyelim: 3/4 = 27/36, 5/6 = 30/36, 7/9 = 28/36. Pozitif hâlleri için 3/4 < 7/9 < 5/6'dır. Sayılar negatif olduğundan sıralama tersine döner: b < c < a.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "a &lt; c &lt; b", ok: false },
      { text: "c &lt; a &lt; b", ok: false },
      { text: "b &lt; c &lt; a", ok: true },
      { text: "b &lt; a &lt; c", ok: false }
    ]
  },
  {
    text: "<p>x = 13/14, y = 15/16, z = 14/15</p><p><b>olduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 2,
    expl: "Pay ile payda arasındaki farkın sabit (1) olduğu pozitif basit kesirlerde sayılar büyüdükçe kesrin değeri de büyür. 13/14 < 14/15 < 15/16 olduğundan sıralama x < z < y şeklindedir.",
    answers: [
      { text: "x &lt; y &lt; z", ok: false },
      { text: "x &lt; z &lt; y", ok: true },
      { text: "y &lt; x &lt; z", ok: false },
      { text: "y &lt; z &lt; x", ok: false },
      { text: "z &lt; x &lt; y", ok: false }
    ]
  },
  {
    text: "<p>a, b, c birer reel sayı</p><p>a + b = 1/16<br>b + c = 1/32<br>a + c = 1/24</p><p><b>olduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 3,
    expl: "1/16 > 1/24 > 1/32 olduğundan (a + b) > (a + c) > (b + c) olur. (a + b) > (a + c) ⇒ b > c; (a + c) > (b + c) ⇒ a > b. Buna göre c < b < a'dır.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "b &lt; a &lt; c", ok: false },
      { text: "b &lt; c &lt; a", ok: false },
      { text: "a &lt; c &lt; b", ok: false },
      { text: "c &lt; b &lt; a", ok: true }
    ]
  },
  {
    text: "<p>x, y, z birer reel sayı</p><p>x + y = 111/110<br>y + z = 115/114<br>x + z = 113/112</p><p><b>olduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 3,
    expl: "Pay ile payda arasındaki farkın sabit (1) olduğu bileşik kesirlerde sayılar büyüdükçe kesrin değeri küçülür: 111/110 > 113/112 > 115/114. Böylece (x + y) > (x + z) > (y + z) olur. x + y > x + z ⇒ y > z; x + z > y + z ⇒ x > y. Sıralama z < y < x'tir.",
    answers: [
      { text: "z &lt; y &lt; x", ok: true },
      { text: "z &lt; x &lt; y", ok: false },
      { text: "y &lt; z &lt; x", ok: false },
      { text: "y &lt; x &lt; z", ok: false },
      { text: "x &lt; y &lt; z", ok: false }
    ]
  },
  {
    text: "<p>a, b, c negatif reel sayı</p><p>a · b = 15/17<br>b · c = 13/15<br>a · c = 19/21</p><p><b>olduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 3,
    expl: "Pay ile payda arasındaki farkın sabit (2) olduğu basit kesirlerde sayılar büyüdükçe değer büyür: 19/21 > 15/17 > 13/15, yani ac > ab > bc. ac > ab eşitsizliğini negatif a'ya bölersek yön değişir: c < b. ab > bc eşitsizliğini negatif b'ye bölersek a < c olur. Sıralama a < c < b'dir.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "c &lt; b &lt; a", ok: false },
      { text: "a &lt; c &lt; b", ok: true },
      { text: "b &lt; c &lt; a", ok: false },
      { text: "b &lt; a &lt; c", ok: false }
    ]
  },
  {
    text: "<p>x = 3,<span style='text-decoration: overline'>473</span><br>y = 3,4<span style='text-decoration: overline'>73</span><br>z = 3,47<span style='text-decoration: overline'>3</span></p><p><b>olduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 2,
    expl: "Sayıları açarak yazalım: x = 3,473473..., y = 3,473737..., z = 3,473333... İlk dört basamak (3,473) aynıdır. Sonraki basamaklar: x'te 4, y'de 7, z'de 3'tür. 3 < 4 < 7 olduğundan z < x < y olur.",
    answers: [
      { text: "x &lt; y &lt; z", ok: false },
      { text: "z &lt; x &lt; y", ok: true },
      { text: "z &lt; y &lt; x", ok: false },
      { text: "x &lt; z &lt; y", ok: false },
      { text: "y &lt; x &lt; z", ok: false }
    ]
  },

  // ─── RASYONEL SAYILAR TEST - 4 ───────────────────────────────────────────────
  {
    text: "<p>1/(3·4) + 1/(4·5) + ........... + 1/(17·18)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1/(n·(n+1)) = 1/n − 1/(n+1) şeklinde yazılır. Toplam (1/3 − 1/4) + (1/4 − 1/5) + ... + (1/17 − 1/18) olur; ara terimler birbirini götürür ve 1/3 − 1/18 = 6/18 − 1/18 = 5/18 kalır.",
    answers: [
      { text: "1/18", ok: false },
      { text: "1/9", ok: false },
      { text: "1/6", ok: false },
      { text: "2/9", ok: false },
      { text: "5/18", ok: true }
    ]
  },
  {
    text: "<p>1/3 + 1/4 + 1/5 + .......... + 1/2021 = y</p><p>olduğuna göre</p><p>4/3 + 5/4 + 6/5 + ............ + 2022/2021</p><p><b>toplamının y türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Her terim 1 + 1/n şeklinde yazılır: 4/3 = 1 + 1/3, 5/4 = 1 + 1/4, ..., 2022/2021 = 1 + 1/2021. Terim sayısı 2021 − 3 + 1 = 2019 olduğundan toplam 2019 + y = y + 2019'dur.",
    answers: [
      { text: "y + 2021", ok: false },
      { text: "y + 2020", ok: false },
      { text: "y + 2019", ok: true },
      { text: "y + 2018", ok: false },
      { text: "y + 2022", ok: false }
    ]
  },
  {
    text: "<p><b>a,<span style='text-decoration: overline'>a</span> + b,<span style='text-decoration: overline'>b</span> toplamı, (ab + ba) toplamının kaç katıdır?</b></p>",
    diff: 3,
    expl: "a,a (a devirli) = a + a/9 = 10a/9 ve b,b (b devirli) = 10b/9'dur. Toplamları 10(a + b)/9 olur. ab ve ba iki basamaklı sayılar olduğundan ab + ba = (10a + b) + (10b + a) = 11(a + b)'dir. Oran: [10(a + b)/9] / [11(a + b)] = 10/99 bulunur.",
    answers: [
      { text: "10/99", ok: true },
      { text: "10/11", ok: false },
      { text: "9/11", ok: false },
      { text: "1/11", ok: false },
      { text: "11/10", ok: false }
    ]
  },
  {
    text: "<p><b>x &gt; 0 olmak (0,8 − 0,3)/0,09 + x ifadesinin tam sayı olması için x'in en küçük değeri kaçtır?</b></p>",
    diff: 2,
    expl: "(0,8 − 0,3)/0,09 = 0,5/0,09 = 50/9 = 5 + 5/9'dur. İfadenin tam sayı olması için x en az 6 − 50/9 = 4/9 olmalıdır. 4/9 = 0,4 (4 devirli) bulunur.",
    answers: [
      { text: "0,<span style='text-decoration: overline'>1</span>", ok: false },
      { text: "0,<span style='text-decoration: overline'>2</span>", ok: false },
      { text: "0,<span style='text-decoration: overline'>3</span>", ok: false },
      { text: "0,<span style='text-decoration: overline'>4</span>", ok: true },
      { text: "0,<span style='text-decoration: overline'>5</span>", ok: false }
    ]
  },

  // ─── ÜSLÜ SAYILAR TEST - 1 ───────────────────────────────────────────────────
  {
    text: "<p>4 + 4 + 4 + 4 + 4 + .... + 4 (20 tane)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "20 tane 4'ün toplamı 20 · 4 = 80'dir.",
    answers: [
      { text: "60", ok: false },
      { text: "70", ok: false },
      { text: "80", ok: true },
      { text: "90", ok: false },
      { text: "100", ok: false }
    ]
  },
  {
    text: "<p>(−5) + (−5) + (−5) + .... + (−5) (30 tane)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "30 tane (−5)'in toplamı 30 · (−5) = −150'dir.",
    answers: [
      { text: "−100", ok: false },
      { text: "−120", ok: false },
      { text: "−130", ok: false },
      { text: "−140", ok: false },
      { text: "−150", ok: true }
    ]
  },
  {
    text: "<p>a = 3 + 3 + 3 + .... + 3 (15 tane)<br>b = 12 + 12 + .... + 12 (6 tane)</p><p><b>olduğuna göre a/b kaçtır?</b></p>",
    diff: 1,
    expl: "a = 15 · 3 = 45 ve b = 6 · 12 = 72'dir. a/b = 45/72 = 5/8 bulunur.",
    answers: [
      { text: "3/5", ok: false },
      { text: "5/8", ok: true },
      { text: "7/12", ok: false },
      { text: "6/7", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "<p>5 · 5 · 5 · 5 · .... · 5 (10 tane)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "10 tane 5'in çarpımı 5<sup>10</sup> şeklinde yazılır.",
    answers: [
      { text: "105", ok: false },
      { text: "50", ok: false },
      { text: "5<sup>10</sup>", ok: true },
      { text: "500", ok: false },
      { text: "550", ok: false }
    ]
  },
  {
    text: "<p>x = (2 · 2 · 2 · 2 · 2) / (4 + 4 + 4 + 4 + 4)</p><p><b>olduğuna göre 5 · x kaçtır?</b></p>",
    diff: 1,
    expl: "Pay 2<sup>5</sup> = 32, payda 5 · 4 = 20'dir. x = 32/20 = 8/5 olduğundan 5 · x = 8 bulunur.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 1,
    expl: "2<sup>3</sup> = 8, 4<sup>2</sup> = 16, 5<sup>3</sup> = 125 ve 1<sup>7</sup> = 1 doğrudur. 3<sup>2</sup> = 9 olduğundan E seçeneğindeki 3<sup>2</sup> = 6 yanlıştır.",
    answers: [
      { text: "2<sup>3</sup> = 8", ok: false },
      { text: "4<sup>2</sup> = 16", ok: false },
      { text: "5<sup>3</sup> = 125", ok: false },
      { text: "1<sup>7</sup> = 1", ok: false },
      { text: "3<sup>2</sup> = 6", ok: true }
    ]
  },
  {
    text: "<p>(−2)<sup>2</sup> + (−3)<sup>2</sup> − (−4)<sup>2</sup></p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "Negatif sayıların çift kuvvetleri pozitiftir: 4 + 9 − 16 = −3 bulunur.",
    answers: [
      { text: "−3", ok: true },
      { text: "3", ok: false },
      { text: "12", ok: false },
      { text: "18", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "<p>(−2/3)<sup>2</sup> + (−3/2)<sup>2</sup></p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "(−2/3)<sup>2</sup> = 4/9 ve (−3/2)<sup>2</sup> = 9/4'tür. 4/9 + 9/4 = 16/36 + 81/36 = 97/36 bulunur.",
    answers: [
      { text: "3/7", ok: false },
      { text: "36/97", ok: false },
      { text: "17/97", ok: false },
      { text: "97/36", ok: true },
      { text: "97/16", ok: false }
    ]
  },
  {
    text: "<p>(−2<sup>2</sup>) + (−2)<sup>3</sup> − (−1)<sup>2</sup></p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "−2<sup>2</sup> ifadesinde üs yalnızca 2'ye aittir: −4. (−2)<sup>3</sup> = −8 ve (−1)<sup>2</sup> = 1'dir. İşlem: −4 − 8 − 1 = −13 bulunur.",
    answers: [
      { text: "−11", ok: false },
      { text: "−12", ok: false },
      { text: "−13", ok: true },
      { text: "−14", ok: false },
      { text: "−15", ok: false }
    ]
  },
  {
    text: "<p>5<sup>0</sup> − (−3)<sup>2</sup> − (−2<sup>2</sup>)<sup>2</sup></p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "5<sup>0</sup> = 1, (−3)<sup>2</sup> = 9, −2<sup>2</sup> = −4 ve (−4)<sup>2</sup> = 16'dır. İşlem: 1 − 9 − 16 = −24 bulunur.",
    answers: [
      { text: "−24", ok: true },
      { text: "−25", ok: false },
      { text: "−26", ok: false },
      { text: "24", ok: false },
      { text: "23", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q27.jpg",
    diff: 1,
    expl: "Pay: (−2)<sup>3</sup> + (−3)<sup>2</sup> = −8 + 9 = 1. Payda: 3<sup>3</sup> + (−1)<sup>2</sup> = 27 + 1 = 28. Sonuç 1/28'dir.",
    answers: [
      { text: "1/20", ok: false },
      { text: "1/24", ok: false },
      { text: "1/27", ok: false },
      { text: "1/28", ok: true },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q28.jpg",
    diff: 2,
    expl: "Pay: 2<sup>−1</sup> + 3<sup>−1</sup> = 1/2 + 1/3 = 5/6. Payda: (6/5)<sup>−1</sup> = 5/6. Pay ve payda eşit olduğundan sonuç 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "1", ok: true },
      { text: "−1", ok: false }
    ]
  },
  {
    text: "<p>(3<sup>4</sup>)<sup>0,25</sup> − (2<sup>5</sup>)<sup>0,2</sup></p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "Üssün üssünde üsler çarpılır: 4 · 0,25 = 1 ve 5 · 0,2 = 1. İşlem 3<sup>1</sup> − 2<sup>1</sup> = 1 olur.",
    answers: [
      { text: "−2", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>5<sup>x</sup> = 2</p><p><b>olduğuna göre 5<sup>−2x</sup> ifadesinin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "5<sup>−2x</sup> = (5<sup>x</sup>)<sup>−2</sup> = 2<sup>−2</sup> = 1/4 bulunur.",
    answers: [
      { text: "−4", ok: false },
      { text: "−2", ok: false },
      { text: "1/2", ok: false },
      { text: "4", ok: false },
      { text: "1/4", ok: true }
    ]
  },
  {
    text: "<p>2<sup>x−1</sup> = 5</p><p><b>olduğuna göre 4<sup>x</sup> ifadesinin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "2<sup>x</sup>/2 = 5 ⇒ 2<sup>x</sup> = 10. 4<sup>x</sup> = (2<sup>x</sup>)<sup>2</sup> = 10<sup>2</sup> = 100 bulunur.",
    answers: [
      { text: "125", ok: false },
      { text: "120", ok: false },
      { text: "100", ok: true },
      { text: "25", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>3<sup>x</sup> = a</p><p><b>olduğuna göre 9<sup>x−1</sup> / 3<sup>−x−2</sup> ifadesinin a cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "9<sup>x−1</sup> = 3<sup>2x−2</sup>'dir. Bölmede üsler çıkarılır: 3<sup>(2x−2) − (−x−2)</sup> = 3<sup>3x</sup> = (3<sup>x</sup>)<sup>3</sup> = a<sup>3</sup> bulunur.",
    answers: [
      { text: "−3a", ok: false },
      { text: "−a", ok: false },
      { text: "2a", ok: false },
      { text: "a<sup>3</sup>", ok: true },
      { text: "a", ok: false }
    ]
  },

  // ─── ÜSLÜ SAYILAR TEST - 2 ───────────────────────────────────────────────────
  {
    text: "<p><b>Yukarıda verilen ifadenin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q33.jpg",
    diff: 2,
    expl: "Pay: 3<sup>x</sup>(1 + 3 + 9) = 13 · 3<sup>x</sup>. Payda: 3<sup>x+1</sup>(1 + 3 + 9) = 13 · 3<sup>x+1</sup>. Sadeleştirince 3<sup>x</sup>/3<sup>x+1</sup> = 1/3 kalır.",
    answers: [
      { text: "1/6", ok: false },
      { text: "1/3", ok: true },
      { text: "1/2", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>(−a)<sup>3</sup> · (−a)<sup>2</sup> · (−a<sup>−4</sup>)</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "(−a)<sup>3</sup> = −a<sup>3</sup>, (−a)<sup>2</sup> = a<sup>2</sup>'dir. Üçüncü çarpanda üs yalnızca a'ya ait olduğundan (−a<sup>−4</sup>) negatif kalır. Çarpım: (−a<sup>3</sup>) · a<sup>2</sup> · (−a<sup>−4</sup>) = a<sup>3+2−4</sup> = a bulunur.",
    answers: [
      { text: "−a<sup>2</sup>", ok: false },
      { text: "−a", ok: false },
      { text: "a", ok: true },
      { text: "a<sup>2</sup>", ok: false },
      { text: "a<sup>3</sup>", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q35.jpg",
    diff: 2,
    expl: "Pay: 5<sup>x+3</sup> − 5 · 5<sup>x+1</sup> = 5<sup>x+1</sup>(25 − 5) = 20 · 5<sup>x+1</sup>. Payda: 5<sup>x+1</sup> − 5<sup>x+3</sup> = 5<sup>x+1</sup>(1 − 25) = −24 · 5<sup>x+1</sup>. Sonuç 20/(−24) = −5/6'dır.",
    answers: [
      { text: "−5/6", ok: true },
      { text: "−6/5", ok: false },
      { text: "−1", ok: false },
      { text: "5/6", ok: false },
      { text: "6/5", ok: false }
    ]
  },
  {
    text: "<p>5<sup>12</sup> + 5<sup>13</sup> = a</p><p><b>olduğuna göre 5<sup>13</sup> + 5<sup>14</sup> ifadesinin a cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "5<sup>13</sup> + 5<sup>14</sup> = 5 · (5<sup>12</sup> + 5<sup>13</sup>) = 5a'dır.",
    answers: [
      { text: "a/5", ok: false },
      { text: "a", ok: false },
      { text: "a<sup>2</sup>", ok: false },
      { text: "5a", ok: true },
      { text: "5a<sup>2</sup>", ok: false }
    ]
  },
  {
    text: "<p>3<sup>4x−7</sup> / 3<sup>3x−5</sup> = 27</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "Bölmede üsler çıkarılır: 3<sup>(4x−7) − (3x−5)</sup> = 3<sup>x−2</sup> = 27 = 3<sup>3</sup>. x − 2 = 3 ⇒ x = 5 bulunur.",
    answers: [
      { text: "9", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>2<sup>x−2</sup> = (1/8)<sup>−5</sup></p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "(1/8)<sup>−5</sup> = 8<sup>5</sup> = (2<sup>3</sup>)<sup>5</sup> = 2<sup>15</sup>'tir. x − 2 = 15 ⇒ x = 17 bulunur.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "<p>(9<sup>a+4</sup>)<sup>2</sup> = (3<sup>2a−2</sup>)<sup>3</sup></p><p><b>olduğuna göre a kaçtır?</b></p>",
    diff: 2,
    expl: "Sol taraf: (3<sup>2a+8</sup>)<sup>2</sup> = 3<sup>4a+16</sup>. Sağ taraf: 3<sup>6a−6</sup>. 4a + 16 = 6a − 6 ⇒ 2a = 22 ⇒ a = 11 bulunur.",
    answers: [
      { text: "9", ok: false },
      { text: "11", ok: true },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false }
    ]
  },
  {
    text: "<p>(2a + 3)<sup>4</sup> = (a + 6)<sup>4</sup></p><p><b>olduğuna göre a'nın alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Üs çift olduğundan tabanlar ya eşit ya da zıt işaretlidir. 2a + 3 = a + 6 ⇒ a = 3. 2a + 3 = −(a + 6) ⇒ 3a = −9 ⇒ a = −3. Toplam: 3 + (−3) = 0'dır.",
    answers: [
      { text: "−3", ok: false },
      { text: "−2", ok: false },
      { text: "0", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen denklemi sağlayan x'in alabileceği farklı değerlerin toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/rasyonel-sayilar_t1_q41.jpg",
    diff: 3,
    expl: "1) Taban 1: x − 2 = 1 ⇒ x = 3. 2) Taban −1 ve üs çift: x − 2 = −1 ⇒ x = 1; üs 1 − 25 = −24 çifttir, sağlar. 3) Üs 0 ve taban sıfırdan farklı: x<sup>2</sup> − 25 = 0 ⇒ x = 5 veya x = −5 (tabanlar 3 ve −7, sıfır değil). Değerler 3, 1, 5, −5; toplamları 4'tür.",
    answers: [
      { text: "0", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  }
];
