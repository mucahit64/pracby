import type { McQ } from "../../../../types";

export const MAT_BASIT_ESITSIZLIKLER_T2_DEVAM: McQ[] = [

// ─── BASİT EŞİTSİZLİKLER TEST - 2 ──────────────────────────────────────────────

  {
    text: "<p>3 &lt; 2a &lt; 11</p><p><b>olduğuna göre 5a'nın en büyük tam sayı değeri kaçtır?</b></p>",
    diff: 1,
    expl: "Eşitsizliğin her tarafı 5/2 ile çarpılırsa 7,5 < 5a < 27,5 olur. 5a'nın en büyük tam sayı değeri 27'dir.",
    answers: [
      { text: "25", ok: false },
      { text: "26", ok: false },
      { text: "27", ok: true },
      { text: "28", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "<p>13 &lt; 3x − 2 ≤ 25</p><p><b>eşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Her tarafa 2 eklenirse 15 < 3x ≤ 27, 3'e bölünürse 5 < x ≤ 9 olur. Çözüm aralığı (5, 9]'dur.",
    answers: [
      { text: "(23/3, 31/3)", ok: false },
      { text: "(11/3, 23/3)", ok: false },
      { text: "(5, 9)", ok: false },
      { text: "(5, 9]", ok: true },
      { text: "(22/3, 31/3]", ok: false }
    ]
  },
  {
    text: "<p>−3 &lt; (2x − 3)/2 &lt; 7</p><p><b>eşitsizliğini sağlayan aralıkta kaç tane doğal sayı vardır?</b></p>",
    diff: 2,
    expl: "Her taraf 2 ile çarpılırsa −6 < 2x − 3 < 14, 3 eklenirse −3 < 2x < 17, 2'ye bölünürse −1,5 < x < 8,5 olur. Bu aralıktaki doğal sayılar 0, 1, …, 8 olup 9 tanedir.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>1/3 &lt; 3/(a + 2) ≤ 3</p><p><b>eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "3/(a + 2) pozitif olduğundan a + 2 > 0'dır. Kesirler ters çevrilirse eşitsizlik yön değiştirir: 1/3 ≤ (a + 2)/3 < 3 ⇒ 1 ≤ a + 2 < 9 ⇒ −1 ≤ a < 7. Çözüm kümesi [−1, 7)'dir.",
    answers: [
      { text: "(−∞, 7)", ok: false },
      { text: "(−7, −1]", ok: false },
      { text: "[−1, 7)", ok: true },
      { text: "(1, 7]", ok: false },
      { text: "[1, 7)", ok: false }
    ]
  },
  {
    text: "<p>2 &lt; x &lt; 6</p><p><b>olmak üzere x<sup>2</sup> − 6x ifadesinin tüm reel sayı değerlerinin aralığı hangisidir?</b></p>",
    diff: 3,
    expl: "x² − 6x = (x − 3)² − 9 yazılır. 2 < x < 6 ⇒ −1 < x − 3 < 3. Aralıkta 0 bulunduğundan 0 ≤ (x − 3)² < 9 olur. 9 çıkarılırsa −9 ≤ x² − 6x < 0, yani [−9, 0) bulunur.",
    answers: [
      { text: "[0, 9)", ok: false },
      { text: "(−9, 0)", ok: false },
      { text: "(−8, 0]", ok: false },
      { text: "[−9, 0)", ok: true },
      { text: "(0, 9)", ok: false }
    ]
  },
  {
    text: "<p>a bir reel sayı olmak üzere</p><p>(4a + 7)/3 &lt; a + 5</p><p><b>eşitsizliğine göre a kaç farklı doğal sayı değeri olabilir?</b></p>",
    diff: 2,
    expl: "Her iki taraf 3 ile çarpılırsa 4a + 7 < 3a + 15 ⇒ a < 8 olur. a'nın doğal sayı değerleri 0, 1, …, 7 olup 8 tanedir.",
    answers: [
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>−5 &lt; a &lt; 3</p><p><b>olmak üzere a<sup>2</sup> + 2'nin alabileceği en büyük tam sayı değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Aralıkta 0 bulunduğundan 0 ≤ a² < 25 olur (sınırların kareleri 25 ve 9'dur). 2 eklenirse 2 ≤ a² + 2 < 27. En büyük tam sayı değeri 26'dır.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "14", ok: false },
      { text: "26", ok: true },
      { text: "27", ok: false }
    ]
  },
  {
    text: "<p>−5 &lt; x ≤ 1 ve y + 2x = 5</p><p><b>olduğuna göre y'nin en küçük ve en büyük tam sayı değerleri toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "y = 5 − 2x'tir. −5 < x ≤ 1 eşitsizliği −2 ile çarpılırsa −2 ≤ −2x < 10, 5 eklenirse 3 ≤ y < 15 olur. En küçük tam sayı değeri 3, en büyüğü 14'tür; toplamları 17'dir.",
    answers: [
      { text: "−3", ok: false },
      { text: "7", ok: false },
      { text: "14", ok: false },
      { text: "17", ok: true },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>a ve b iki tam sayı olmak üzere,</p><p>−1 ≤ a &lt; 5<br>−5 &lt; b &lt; 9</p><p><b>a + b toplamının en büyük değeri kaçtır?</b></p>",
    diff: 1,
    expl: "a ve b tam sayı olduğundan en büyük değerler a = 4 ve b = 8'dir. a + b = 12.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: true },
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer reel sayı olmak üzere</p><p>−3 &lt; a &lt; 7<br>4 &lt; b &lt; 8</p><p><b>olduğuna göre a + b değerinin alabileceği <u>en büyük</u> tam sayı değeri kaçtır?</b></p>",
    diff: 1,
    expl: "Eşitsizlikler taraf tarafa toplanırsa 1 < a + b < 15 olur. En büyük tam sayı değeri 14'tür.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>3 ≤ a &lt; 6<br>4 ≤ b &lt; 9</p><p><b>eşitsizliklerine göre 18/a + 18/b toplamının <u>en küçük</u> tam sayı değeri kaçtır?</b></p>",
    diff: 3,
    expl: "3 ≤ a < 6 ⇒ 1/6 < 1/a ≤ 1/3 ⇒ 3 < 18/a ≤ 6.\n4 ≤ b < 9 ⇒ 1/9 < 1/b ≤ 1/4 ⇒ 2 < 18/b ≤ 4,5.\nToplanırsa 5 < 18/a + 18/b ≤ 10,5 olur. En küçük tam sayı değeri 6'dır.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>−5 &lt; a &lt; 7<br>1 &lt; b &lt; 8</p><p><b>olduğuna göre 3a + 4b toplamının değer aralığında kaç tane tam sayı vardır?</b></p>",
    diff: 2,
    expl: "−15 < 3a < 21 ve 4 < 4b < 32 taraf tarafa toplanırsa −11 < 3a + 4b < 53 olur. Bu aralıktaki tam sayılar −10'dan 52'ye kadardır: 52 − (−10) + 1 = 63 tane.",
    answers: [
      { text: "52", ok: false },
      { text: "53", ok: false },
      { text: "57", ok: false },
      { text: "63", ok: true },
      { text: "64", ok: false }
    ]
  },
  {
    text: "<p>−4 &lt; a ≤ 6<br>−5 ≤ b &lt; 4</p><p><b>olmak üzere a · b çarpımının en büyük ve en küçük tam sayı değerlerinin toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Sınırların çarpımları: (−4)(−5) = 20 (dahil değil), (−4)(4) = −16, 6 · (−5) = −30 (ikisi de dahil), 6 · 4 = 24 (dahil değil).\nBuna göre −30 ≤ a · b < 24'tür. En küçük tam sayı değeri −30, en büyüğü 23'tür; toplamları −7'dir.",
    answers: [
      { text: "−10", ok: false },
      { text: "−7", ok: true },
      { text: "−6", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: false }
    ]
  },
  {
    text: "<p>−2 &lt; a ≤ 4 ve 1 ≤ b &lt; 8</p><p><b>olmak üzere a ve b tam sayı ise 2a − 3b'nin <u>en büyük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "2a − 3b'nin en büyük olması için a en büyük (a = 4), b en küçük (b = 1) seçilir: 2 · 4 − 3 · 1 = 5.",
    answers: [
      { text: "−14", ok: false },
      { text: "−5", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>1 ≤ a &lt; b &lt; c &lt; 7</p><p><b>olduğuna göre a + b + 2c toplamının değer aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "a en küçük 1 olabilir; b ve c ise 1'den büyüktür. Bu yüzden a + b + 2c > 1 + 1 + 2 = 4'tür.\nHepsi 7'den küçük olduğundan a + b + 2c < 7 + 7 + 14 = 28'dir.\nDeğer aralığı (4, 28)'dir.",
    answers: [
      { text: "(8, 24)", ok: false },
      { text: "(4, 28)", ok: true },
      { text: "[4, 28)", ok: false },
      { text: "[8, 24)", ok: false },
      { text: "[4, 24)", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c pozitif olmak üzere a &lt; b &lt; c ve 1/a + 1/b + 1/c = 1/9</p><p><b>olduğuna göre c sayısının <u>en küçük</u> tam sayı değeri kaçtır?</b></p>",
    diff: 3,
    expl: "a < b < c ⇒ 1/c < 1/b < 1/a olduğundan 1/a + 1/b + 1/c > 3/c'dir. Yani 3/c < 1/9 ⇒ c > 27. c'nin en küçük tam sayı değeri 28'dir.",
    answers: [
      { text: "27", ok: false },
      { text: "28", ok: true },
      { text: "29", ok: false },
      { text: "30", ok: false },
      { text: "31", ok: false }
    ]
  },

// ─── MUTLAK DEĞER TEST - 1 ───────────────────────────────────────────────────

  {
    text: "<p>|−3 + 5| − |−4| + |3 − 7|</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "|2| − |−4| + |−4| = 2 − 4 + 4 = 2 bulunur.",
    answers: [
      { text: "−3", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false },
      { text: "0", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>(|−5| − |−6| + |4|) / (|−2| − |−3|)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "Pay: 5 − 6 + 4 = 3. Payda: 2 − 3 = −1. Sonuç: 3 / (−1) = −3.",
    answers: [
      { text: "−1", ok: false },
      { text: "−2", ok: false },
      { text: "3", ok: false },
      { text: "−3", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>x = −4 ve y = −3 olmak üzere</p><p>|x + y| − |x − y| − |x|</p><p><b>ifadesinin eşiti kaçtır?</b></p>",
    diff: 2,
    expl: "|−4 − 3| − |−4 + 3| − |−4| = 7 − 1 − 4 = 2 bulunur.",
    answers: [
      { text: "2", ok: true },
      { text: "−2", ok: false },
      { text: "3", ok: false },
      { text: "1", ok: false },
      { text: "−1", ok: false }
    ]
  },
  {
    text: "<p>|1 − √2| + |√5 − √2| − |√5 − 2|</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1 < √2 olduğundan |1 − √2| = √2 − 1.\n√5 > √2 olduğundan |√5 − √2| = √5 − √2.\n√5 > 2 olduğundan |√5 − 2| = √5 − 2.\nİşlem: (√2 − 1) + (√5 − √2) − (√5 − 2) = 1.",
    answers: [
      { text: "3", ok: false },
      { text: "0", ok: false },
      { text: "−3", ok: false },
      { text: "−2", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "<p>3 &lt; x &lt; 7 olmak üzere</p><p>|3 − x| + |8 − x|</p><p><b>ifadesinin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "x > 3 olduğundan |3 − x| = x − 3; x < 8 olduğundan |8 − x| = 8 − x. Toplam: (x − 3) + (8 − x) = 5.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>x &gt; 0 olmak üzere</p><p>|x| − |−3x| − |x + 4|</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "x > 0 olduğundan |x| = x, |−3x| = 3x, |x + 4| = x + 4. İşlem: x − 3x − (x + 4) = −3x − 4.",
    answers: [
      { text: "−3x", ok: false },
      { text: "−4", ok: false },
      { text: "−3x + 4", ok: false },
      { text: "−3x − 4", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>a &lt; 0 olmak üzere</p><p>|−a| − |a − 2| + |3a|</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "a < 0 olduğundan |−a| = −a, |a − 2| = 2 − a, |3a| = −3a. İşlem: −a − (2 − a) + (−3a) = −3a − 2.",
    answers: [
      { text: "−3a", ok: false },
      { text: "−2", ok: false },
      { text: "−3a − 2", ok: true },
      { text: "3a + 2", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>x &lt; 0 olmak üzere</p><p>||x − 2| − x| − 2</p><p><b>ifadesinin eşiti aşağıdakilerden hangisine eşittir?</b></p>",
    diff: 3,
    expl: "x < 0 olduğundan |x − 2| = 2 − x. İfade |2 − x − x| − 2 = |2 − 2x| − 2 olur. 2 − 2x > 0 olduğundan sonuç 2 − 2x − 2 = −2x'tir.",
    answers: [
      { text: "−2x", ok: true },
      { text: "2x", ok: false },
      { text: "0", ok: false },
      { text: "−2x + 2", ok: false },
      { text: "−2x − 2", ok: false }
    ]
  },
  {
    text: "<p>a<sup>2</sup> · b &lt; 0<br>a<sup>5</sup> · b &lt; 0 olduğuna göre</p><p>|a − b| − |a| + |b|</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "a² > 0 olduğundan b < 0'dır. a⁵ · b < 0 ve b < 0 olduğundan a > 0'dır.\n|a − b| = a − b, |a| = a, |b| = −b.\nİşlem: (a − b) − a + (−b) = −2b.",
    answers: [
      { text: "−2a", ok: false },
      { text: "−2b", ok: true },
      { text: "2a", ok: false },
      { text: "2a − 2b", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>a, b, c pozitif tam sayılar</p><p>1/a &lt; 1/b &lt; 1/c olduğuna göre</p><p>|a − b| − |c − a| + |c − b|</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "Pozitif sayılarda 1/a < 1/b < 1/c ⇒ a > b > c'dir.\n|a − b| = a − b, |c − a| = a − c, |c − b| = b − c.\nİşlem: (a − b) − (a − c) + (b − c) = 0.",
    answers: [
      { text: "2a", ok: false },
      { text: "2b", ok: false },
      { text: "2c", ok: false },
      { text: "2a − 2b", ok: false },
      { text: "0", ok: true }
    ]
  },
  {
    text: "<p>|x − 2| + |x − 5|</p><p><b>ifadesinin <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "|x − 2| + |x − 5| ifadesi x'in 2'ye ve 5'e olan uzaklıklarının toplamıdır. x, 2 ile 5 arasında olduğunda bu toplam 5 − 2 = 3 olur ve en küçük değer 3'tür.",
    answers: [
      { text: "5", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>|x − 4| + |2x − 12|</p><p><b>ifadesinin <u>en küçük</u> değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Kritik noktalar x = 4 ve x = 6'dır. x = 4 için 0 + 4 = 4; x = 6 için 2 + 0 = 2 olur. En küçük değer 2'dir.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "2", ok: true },
      { text: "0", ok: false },
      { text: "8", ok: false }
    ]
  },

// ─── MUTLAK DEĞER TEST - 2 ───────────────────────────────────────────────────

  {
    text: "<p>|2x − 3| = 11</p><p><b>olduğuna göre x'in alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "2x − 3 = 11 ⇒ x = 7; 2x − 3 = −11 ⇒ x = −4. Toplam: 7 + (−4) = 3.",
    answers: [
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "5", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>|x + 4| = 12!</p><p><b>olduğuna göre x'in alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "x + 4 = 12! ⇒ x = 12! − 4; x + 4 = −12! ⇒ x = −12! − 4. Toplam: (12! − 4) + (−12! − 4) = −8.",
    answers: [
      { text: "−4", ok: false },
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "−8", ok: true },
      { text: "12!", ok: false }
    ]
  },
  {
    text: "<p>|x − 3| + 4 = 2</p><p><b>denkleminin çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "|x − 3| = −2 olur. Mutlak değer negatif olamayacağından çözüm kümesi boş kümedir (∅).",
    answers: [
      { text: "R", ok: false },
      { text: "{5}", ok: false },
      { text: "∅", ok: true },
      { text: "{1}", ok: false },
      { text: "{1, 5}", ok: false }
    ]
  },
  {
    text: "<p>|x − 4| = 2x − 11</p><p><b>denkleminin çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "x − 4 = 2x − 11 ⇒ x = 7. Kontrol: |3| = 3 ✓.\nx − 4 = −(2x − 11) ⇒ 3x = 15 ⇒ x = 5. Kontrol: |1| = −1 ✗.\nÇözüm kümesi {7}'dir.",
    answers: [
      { text: "{5}", ok: false },
      { text: "{7}", ok: true },
      { text: "{5, 7}", ok: false },
      { text: "∅", ok: false },
      { text: "R", ok: false }
    ]
  },
  {
    text: "<p>|3x − 12| + |20 − 5x| = 40</p><p><b>olduğuna göre x'in alabileceği değerler çarpımı kaçtır?</b></p>",
    diff: 2,
    expl: "3|x − 4| + 5|x − 4| = 40 ⇒ 8|x − 4| = 40 ⇒ |x − 4| = 5. Buradan x = 9 veya x = −1'dir. Çarpım: −9.",
    answers: [
      { text: "−1", ok: false },
      { text: "9", ok: false },
      { text: "3", ok: false },
      { text: "−3", ok: false },
      { text: "−9", ok: true }
    ]
  },
  {
    text: "<p>||x − 4| − 3| = 4</p><p><b>olduğuna göre x'in alabileceği değerler toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "|x − 4| − 3 = 4 ⇒ |x − 4| = 7 ⇒ x = 11 veya x = −3.\n|x − 4| − 3 = −4 ⇒ |x − 4| = −1, çözüm yoktur.\nToplam: 11 + (−3) = 8.",
    answers: [
      { text: "4", ok: false },
      { text: "8", ok: true },
      { text: "−4", ok: false },
      { text: "2", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>|3x − 4| &lt; 14</p><p><b>eşitsizliğini sağlayan x tam sayıları kaç tanedir?</b></p>",
    diff: 1,
    expl: "−14 < 3x − 4 < 14 ⇒ −10 < 3x < 18 ⇒ −10/3 < x < 6. Tam sayılar −3, −2, …, 5 olup 9 tanedir.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: true },
      { text: "8", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>x bir reel sayı ve |x| ≤ 3 olmak üzere;</p><p>x + 2y = 6</p><p><b>eşitsizliğini sağlayan y tam sayılarının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "−3 ≤ x ≤ 3 ve x = 6 − 2y'dir: −3 ≤ 6 − 2y ≤ 3 ⇒ −9 ≤ −2y ≤ −3 ⇒ 1,5 ≤ y ≤ 4,5. y tam sayıları 2, 3, 4 olup toplamları 9'dur.",
    answers: [
      { text: "12", ok: false },
      { text: "6", ok: false },
      { text: "3", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: true }
    ]
  },
  {
    text: "<p><b>|x − 3| ≥ 4 eşitsizliğini sağlamayan x tam sayılarının toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Sağlamayan değerler |x − 3| < 4 eşitsizliğini sağlar: −4 < x − 3 < 4 ⇒ −1 < x < 7. Tam sayılar 0, 1, …, 6 olup toplamları 21'dir.",
    answers: [
      { text: "21", ok: true },
      { text: "24", ok: false },
      { text: "26", ok: false },
      { text: "25", ok: false },
      { text: "28", ok: false }
    ]
  },
  {
    text: "<p>3 &lt; |2x − 1| ≤ 7</p><p><b>eşitsizliğini sağlayan kaç farklı x tam sayısı vardır?</b></p>",
    diff: 2,
    expl: "3 < 2x − 1 ≤ 7 ⇒ 2 < x ≤ 4: x = 3, 4.\n−7 ≤ 2x − 1 < −3 ⇒ −3 ≤ x < −1: x = −3, −2.\nToplam 4 farklı tam sayı vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: true },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>A = |x − 2| − |x − 7|</p><p><b>olduğuna göre A değeri kaç farklı tam sayı değeri alır?</b></p>",
    diff: 3,
    expl: "A'nın en küçük değeri x ≤ 2 için −5, en büyük değeri x ≥ 7 için 5'tir ve A bu aralıktaki tüm değerleri alır. −5'ten 5'e kadar 11 tam sayı vardır.",
    answers: [
      { text: "14", ok: false },
      { text: "11", ok: true },
      { text: "12", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>|x − 3| &lt; |x − 1|</p><p><b>eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Her iki tarafın karesi alınırsa (x − 3)² < (x − 1)² ⇒ −6x + 9 < −2x + 1 ⇒ 8 < 4x ⇒ x > 2. Çözüm kümesi (2, ∞)'dur.",
    answers: [
      { text: "[2, ∞)", ok: false },
      { text: "(2, ∞)", ok: true },
      { text: "(−∞, 2)", ok: false },
      { text: "(−∞, 2]", ok: false },
      { text: "(−2, 2)", ok: false }
    ]
  },

// ─── MUTLAK DEĞER TEST - 3 ───────────────────────────────────────────────────

  {
    text: "<p>|3x − 5| = 2022!</p><p><b>denklemini sağlayan x değerlerinin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "3x − 5 = 2022! ⇒ x = (2022! + 5)/3; 3x − 5 = −2022! ⇒ x = (5 − 2022!)/3. Toplam: 10/3.",
    answers: [
      { text: "5/3", ok: false },
      { text: "10/3", ok: true },
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>x bir gerçel sayı olmak üzere</p><p>|x| &lt; 3</p><p><b>olduğuna göre x · (x + 2) ifadesinin alabileceği kaç farklı tam sayı değeri vardır?</b></p>",
    diff: 3,
    expl: "x(x + 2) = (x + 1)² − 1. −3 < x < 3 ⇒ −2 < x + 1 < 4 ⇒ 0 ≤ (x + 1)² < 16 ⇒ −1 ≤ x(x + 2) < 15. Tam sayı değerleri −1'den 14'e kadar 16 tanedir.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true },
      { text: "17", ok: false }
    ]
  },
  {
    text: "<p>|x − 2| + |y + 3| + |z − 1| = 7</p><p><b>olduğuna göre, |x + y + z| ifadesinin alabileceği kaç farklı tam sayı değeri vardır?</b></p>",
    diff: 3,
    expl: "a = x − 2, b = y + 3, c = z − 1 dersek |a| + |b| + |c| = 7 ve x + y + z = a + b + c olur. |a + b + c| ≤ |a| + |b| + |c| = 7 olduğundan 0 ≤ |x + y + z| ≤ 7'dir ve bu aralıktaki tüm değerler alınabilir. 0'dan 7'ye 8 tam sayı vardır.",
    answers: [
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>||x − 3| − k| ≤ 0</p><p><b>eşitsizliğini sağlayan x gerçel sayılarının çarpımı 4 olduğuna göre k kaçtır?</b></p>",
    diff: 3,
    expl: "Mutlak değer negatif olamayacağından ||x − 3| − k| = 0 ⇒ |x − 3| = k'dir. Kökler 3 + k ve 3 − k'dir. Çarpım: 9 − k² = 4 ⇒ k² = 5 ⇒ k = √5.",
    answers: [
      { text: "√2", ok: false },
      { text: "√3", ok: false },
      { text: "2", ok: false },
      { text: "√5", ok: true },
      { text: "√6", ok: false }
    ]
  }
];

export const MAT_BASIT_ESITSIZLIKLER_T3: McQ[] = [

// ─── BASİT EŞİTSİZLİKLER TEST - 3 ──────────────────────────────────────────────

  {
    text: "<p>3(x + 7) + 5(x − 8) ≤ 4(2x − 3) − 7</p><p><b>eşitsizliğinin en geniş çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Sol taraf: 3x + 21 + 5x − 40 = 8x − 19. Sağ taraf: 8x − 12 − 7 = 8x − 19. Eşitsizlik 8x − 19 ≤ 8x − 19 olur ve her x için doğrudur. Çözüm kümesi R'dir.",
    answers: [
      { text: "∅", ok: false },
      { text: "{1}", ok: false },
      { text: "{0, 1}", ok: false },
      { text: "Z", ok: false },
      { text: "R", ok: true }
    ]
  },
  {
    text: "<p>3x + 2 ≤ 2(x + 4) + 4x</p><p><b>eşitsizliğinin en geniş çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "3x + 2 ≤ 6x + 8 ⇒ −6 ≤ 3x ⇒ x ≥ −2. Çözüm kümesi [−2, ∞)'dur.",
    answers: [
      { text: "[2, ∞)", ok: false },
      { text: "[−2, ∞)", ok: true },
      { text: "(−2, ∞)", ok: false },
      { text: "(−∞, −2)", ok: false },
      { text: "(−∞, −2]", ok: false }
    ]
  },
  {
    text: "<p>(x + 4)/6 ≤ x/9 + 1</p><p><b>eşitsizliğini sağlayan kaç farklı x doğal sayısı vardır?</b></p>",
    diff: 2,
    expl: "Her iki taraf 18 ile çarpılırsa 3(x + 4) ≤ 2x + 18 ⇒ 3x + 12 ≤ 2x + 18 ⇒ x ≤ 6. Doğal sayılar 0, 1, …, 6 olup 7 tanedir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>x ve y birer gerçek sayı olmak üzere;</p><p>−9 &lt; x &lt; −2<br>4 &lt; y &lt; 9</p><p><b>olduğuna göre 36/x + 36/y toplamının en büyük tam sayı değeri kaçtır?</b></p>",
    diff: 3,
    expl: "−9 < x < −2 ⇒ −1/2 < 1/x < −1/9 ⇒ −18 < 36/x < −4.\n4 < y < 9 ⇒ 1/9 < 1/y < 1/4 ⇒ 4 < 36/y < 9.\nToplanırsa −14 < 36/x + 36/y < 5 olur. En büyük tam sayı değeri 4'tür.",
    answers: [
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>x pozitif bir tam sayı olmak üzere</p><p>(x − 7)/(2x + 3) &lt; 3/8</p><p><b>eşitsizliğine göre x'in alabileceği en büyük değer kaçtır?</b></p>",
    diff: 2,
    expl: "2x + 3 > 0 olduğundan içler dışlar çarpımı yapılabilir: 8(x − 7) < 3(2x + 3) ⇒ 8x − 56 < 6x + 9 ⇒ 2x < 65 ⇒ x < 32,5. Kitabın cevap anahtarı 31 (C) seçeneğini vermektedir; ancak bu çözüme göre x = 32 de eşitsizliği sağlar (25/67 < 3/8), bu nedenle anahtar tartışmalıdır.",
    answers: [
      { text: "29", ok: false },
      { text: "30", ok: false },
      { text: "31", ok: true },
      { text: "32", ok: false },
      { text: "33", ok: false }
    ]
  },
  {
    text: "<p>2x − 2 &lt; 5x + 5 ≤ 2x + 23</p><p><b>eşitsizliğini sağlayan kaç farklı doğal sayı vardır?</b></p>",
    diff: 2,
    expl: "2x − 2 < 5x + 5 ⇒ x > −7/3.\n5x + 5 ≤ 2x + 23 ⇒ x ≤ 6.\n−7/3 < x ≤ 6 aralığındaki doğal sayılar 0, 1, …, 6 olup 7 tanedir.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>2x + 4 &lt; x + 6 &lt; 4x + 9</p><p><b>eşitsizliğini sağlayan x değer aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "2x + 4 < x + 6 ⇒ x < 2.\nx + 6 < 4x + 9 ⇒ x > −1.\nDeğer aralığı (−1, 2)'dir.",
    answers: [
      { text: "[−2, 1]", ok: false },
      { text: "[−1, 2)", ok: false },
      { text: "(0, 1)", ok: false },
      { text: "(−1, 2)", ok: true },
      { text: "(−2, 1)", ok: false }
    ]
  },
  {
    text: "<p>(a − 3)/(a + 4) ≤ 0</p><p><b>olmak üzere a'nın alabileceği tam sayı değerlerinin toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Pay ile payda ters işaretli veya pay 0 olmalıdır; payda 0 olamaz. Çözüm aralığı (−4, 3]'tür. Tam sayılar −3, −2, …, 3 olup toplamları 0'dır.",
    answers: [
      { text: "−4", ok: false },
      { text: "−3", ok: false },
      { text: "−2", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: true }
    ]
  },
  {
    text: "<p>a &lt; 25/a &lt; 0</p><p><b>eşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "25/a < 0 olduğundan a < 0'dır. a < 25/a eşitsizliği negatif a ile çarpılırsa yön değişir: a² > 25 ⇒ a < −5 veya a > 5. a negatif olduğundan çözüm kümesi (−∞, −5)'tir.",
    answers: [
      { text: "(−∞, 5)", ok: false },
      { text: "(5, ∞)", ok: false },
      { text: "(−5, 5)", ok: false },
      { text: "(−∞, −5)", ok: true },
      { text: "(−25, −5)", ok: false }
    ]
  },
  {
    text: "<p>a &lt; b &lt; 0 &lt; c</p><p><b>şeklinde verilen a, b ve c reel sayıları için aşağıda verilenlerden hangisi kesinlikle doğrudur?</b></p>",
    diff: 2,
    expl: "a ve b negatif, c pozitiftir.\nA) (a + b)/c negatiftir, yanlış.\nB) b + c'nin işareti belli değildir, kesin değil.\nC) a/b pozitif, a/c negatif olduğundan yanlış.\nD) b − a > 0 ve b − c < 0 olduğundan (b − a)/(b − c) < 0, kesinlikle doğru.\nE) Bir önerme değildir.\nCevap D'dir.",
    answers: [
      { text: "(a + b)/c &gt; 0", ok: false },
      { text: "(b + c)/a &lt; 0", ok: false },
      { text: "a/b &lt; a/c", ok: false },
      { text: "(b − a)/(b − c) &lt; 0", ok: true },
      { text: "ac/(b + c)", ok: false }
    ]
  },
  {
    text: "<p>a ve b tam sayıları için</p><p>−5 &lt; b − a &lt; 0 &lt; a</p><p><b>eşitliğine göre a + b toplamı en az kaçtır?</b></p>",
    diff: 3,
    expl: "a pozitif tam sayıdır (a ≥ 1) ve b − a tam sayısı −4 ile −1 arasındadır. a + b = 2a + (b − a) ≥ 2 · 1 + (−4) = −2 bulunur (a = 1, b = −3). Kitabın cevap anahtarı −3 (B) seçeneğini vermektedir; ancak bu çözüme göre en küçük değer −2'dir, bu nedenle anahtar tartışmalıdır.",
    answers: [
      { text: "−4", ok: false },
      { text: "−3", ok: true },
      { text: "−2", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>−1 &lt; x · y &lt; 0 &lt; x</p><p><b>eşitliğine göre aşağıdakilerden hangisi kesinlikle <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "x > 0 ve xy < 0 olduğundan y < 0'dır; ayrıca xy > −1 ⇒ y > −1/x'tir. x > 1 iken −1/x > −1 olduğundan y > −1 olmak zorundadır. Kitabın cevap anahtarı D seçeneğini vermektedir; ancak bu çözüme göre D (x > 1 iken y > −1) her zaman doğrudur, kesinlikle yanlış olan E (x > 1 iken y < −1) seçeneğidir. Anahtar tartışmalıdır.",
    answers: [
      { text: "x &lt; 1 iken y &lt; −1", ok: false },
      { text: "x &lt; 1 iken y &gt; −1", ok: false },
      { text: "y &lt; −1 iken x &lt; 1", ok: false },
      { text: "x &gt; 1 iken y &gt; −1", ok: true },
      { text: "x &gt; 1 iken y &lt; −1", ok: false }
    ]
  },
  {
    text: "<p>x &lt; 2 ve y bir sayma sayısı olmak üzere</p><p>4 + 3xy &gt; 2x + 6y</p><p><b>eşitsizliğine göre y'nin alabileceği kaç farklı değer vardır?</b></p>",
    diff: 3,
    expl: "3xy − 6y > 2x − 4 ⇒ 3y(x − 2) > 2(x − 2). x < 2 olduğundan x − 2 negatiftir; bölünce yön değişir: 3y < 2 ⇒ y < 2/3. 2/3'ten küçük sayma sayısı yoktur, cevap 0'dır.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>x ve y birer gerçek sayı olmak üzere,</p><p>−2 &lt; x ≤ 5<br>3 ≤ y ≤ 11</p><p><b>olduğuna göre, x + y'nin alabileceği en küçük tam sayı değeri en büyük tam sayı değerinden kaç eksiktir?</b></p>",
    diff: 2,
    expl: "Eşitsizlikler taraf tarafa toplanırsa 1 < x + y ≤ 16 olur. En küçük tam sayı değeri 2, en büyüğü 16'dır. Fark: 16 − 2 = 14.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>−3 ≤ x &lt; 5 ve<br>−1 &lt; y ≤ 6</p><p><b>eşitsizliklerine göre x · (y + 2) çarpımının değer aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "−1 < y ≤ 6 ⇒ 1 < y + 2 ≤ 8. Sınırların çarpımları: (−3) · 8 = −24 (ikisi de dahil), (−3) · 1 = −3, 5 · 1 = 5, 5 · 8 = 40 (5 dahil değil). Buna göre −24 ≤ x · (y + 2) < 40, yani [−24, 40)'tır.",
    answers: [
      { text: "[−18, 40)", ok: false },
      { text: "[−24, 40)", ok: true },
      { text: "(−18, 40)", ok: false },
      { text: "(−24, 40)", ok: false },
      { text: "[−24, 40]", ok: false }
    ]
  },

// ─── BASİT EŞİTSİZLİKLER TEST - 4 ──────────────────────────────────────────────

  {
    text: "<p>x &gt; x<sup>2</sup> olmak üzere,</p><p><b>(x<sup>2</sup> + 8x + 3) ifadesi kaç farklı tam değer alır?</b></p>",
    diff: 3,
    expl: "x > x² ise 0 < x < 1'dir. x² + 8x + 3 = (x + 4)² − 13. 4 < x + 4 < 5 ⇒ 16 < (x + 4)² < 25 ⇒ 3 < x² + 8x + 3 < 12. Tam değerler 4, 5, …, 11 olup 8 tanedir.",
    answers: [
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>−2 &lt; x ≤ 16<br>−3 ≤ y ≤ 5<br>1 &lt; z ≤ 7</p><p><b>olmak üzere (x − y · z) ifadesinin alabileceği tam sayı değerleri toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "y · z için sınır çarpımları: (−3) · 7 = −21 (dahil), 5 · 7 = 35 (dahil), (−3) · 1 = −3 ve 5 · 1 = 5 (dahil değil). −21 ≤ yz ≤ 35 ⇒ −35 ≤ −yz ≤ 21.\nx ile toplanırsa −37 < x − yz ≤ 37 olur. Tam sayılar −36'dan 37'ye kadardır; −36 ile 36 arası birbirini götürür, toplam 37'dir.",
    answers: [
      { text: "35", ok: false },
      { text: "36", ok: false },
      { text: "37", ok: true },
      { text: "38", ok: false },
      { text: "39", ok: false }
    ]
  },
  {
    text: "<p>x bir gerçel sayı ve p &lt; 0 &lt; q &lt; r dir.</p><p>x = (p + q − r)/(q − r)</p><p><b>olduğuna göre x sayısı aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 3,
    expl: "x = 1 + p/(q − r). p < 0 ve q − r < 0 olduğundan p/(q − r) > 0'dır, yani x > 1'dir. Seçeneklerde 1'den büyük olan tek sayı 5/4'tür.",
    answers: [
      { text: "8/9", ok: false },
      { text: "7/8", ok: false },
      { text: "1", ok: false },
      { text: "5/4", ok: true },
      { text: "3/4", ok: false }
    ]
  },
  {
    text: "<p>x ve y gerçel sayılar olmak üzere</p><p>3/5 ≤ x &lt; 4<br>1/7 ≤ y ≤ 5/2</p><p><b>için (x + y)/(x · y) ifadesi kaç farklı tam sayı değeri alır?</b></p>",
    diff: 3,
    expl: "(x + y)/(xy) = 1/x + 1/y.\n3/5 ≤ x < 4 ⇒ 1/4 < 1/x ≤ 5/3.\n1/7 ≤ y ≤ 5/2 ⇒ 2/5 ≤ 1/y ≤ 7.\nToplanırsa 13/20 < 1/x + 1/y ≤ 26/3 (≈ 8,67) olur. Tam sayı değerleri 1, 2, …, 8 olup 8 tanedir.",
    answers: [
      { text: "12", ok: false },
      { text: "11", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "8", ok: true }
    ]
  }
];
