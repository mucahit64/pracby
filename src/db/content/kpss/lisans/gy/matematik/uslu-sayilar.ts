import type { McQ } from "../../../../types";

export const MAT_USLU_SAYILAR_T3_T4: McQ[] = [
  // ─── ÜSLÜ SAYILAR TEST - 2 (devamı, 10–16) ──────────────────────────────────
  {
    text: "<p>x ve y birer tam sayıdır.</p><p>5<sup>3x−y−4</sup> = 7<sup>2x+y−1</sup></p><p><b>olduğuna göre x · y çarpımı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "5 ile 7'nin tam sayı kuvvetlerinin eşit olması için iki üs de 0 olmalıdır (5<sup>0</sup> = 7<sup>0</sup> = 1). 3x − y = 4 ve 2x + y = 1 denklemleri taraf tarafa toplanırsa 5x = 5 ⇒ x = 1, y = −1 bulunur. x · y = −1'dir.",
    answers: [
      { text: "−2", ok: false },
      { text: "−1", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer tam sayıdır.</p><p>3<sup>a+5</sup> = 2<sup>2b+a+3</sup></p><p><b>olduğuna göre a + b toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "3 ile 2'nin tam sayı kuvvetlerinin eşit olması için üsler 0 olmalıdır. a + 5 = 0 ⇒ a = −5. 2b + a + 3 = 0 ⇒ 2b − 2 = 0 ⇒ b = 1. a + b = −4 bulunur.",
    answers: [
      { text: "−7", ok: false },
      { text: "−6", ok: false },
      { text: "−5", ok: false },
      { text: "−4", ok: true },
      { text: "−3", ok: false }
    ]
  },
  {
    text: "<p>3<sup>a</sup> = 2, 5<sup>b</sup> = 3</p><p>olduğuna göre,</p><p>(3<sup>2a</sup> + 5<sup>b</sup> − 2)<sup>b</sup></p><p><b>ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "3<sup>2a</sup> = (3<sup>a</sup>)<sup>2</sup> = 4'tür. Parantez içi 4 + 3 − 2 = 5 olur. İfade 5<sup>b</sup> = 3 bulunur.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "6", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>2<sup>x</sup> = a, 3<sup>x</sup> = b, 5<sup>x</sup> = c</p><p><b>olduğuna göre (120)<sup>x</sup> ifadelerinin a, b ve c türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "120 = 2<sup>3</sup> · 3 · 5 olduğundan 120<sup>x</sup> = (2<sup>x</sup>)<sup>3</sup> · 3<sup>x</sup> · 5<sup>x</sup> = a<sup>3</sup> · b · c'dir.",
    answers: [
      { text: "a<sup>3</sup> · b · c", ok: true },
      { text: "a<sup>2</sup> · b · c<sup>2</sup>", ok: false },
      { text: "a · b<sup>2</sup>c<sup>2</sup>", ok: false },
      { text: "3abc", ok: false },
      { text: "3a + b + c", ok: false }
    ]
  },
  {
    text: "<p>2<sup>x</sup> = 3, 2<sup>y</sup> = 9</p><p><b>olduğuna göre (x + y)/(y − x) işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "2<sup>y</sup> = 9 = 3<sup>2</sup> = (2<sup>x</sup>)<sup>2</sup> = 2<sup>2x</sup> olduğundan y = 2x'tir. (x + 2x)/(2x − x) = 3x/x = 3 bulunur.",
    answers: [
      { text: "−3", ok: false },
      { text: "−1", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true }
    ]
  },
  {
    text: "<p>12<sup>x</sup> = 75</p><p><b>olduğuna göre 3<sup>x−1</sup> · 2<sup>2x+1</sup> ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "12<sup>x</sup> = 3<sup>x</sup> · 2<sup>2x</sup> = 75'tir. 3<sup>x−1</sup> · 2<sup>2x+1</sup> = (3<sup>x</sup> · 2<sup>2x</sup>) · 2/3 = 75 · 2/3 = 50 bulunur.",
    answers: [
      { text: "150", ok: false },
      { text: "75", ok: false },
      { text: "50", ok: true },
      { text: "25", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>2<sup>x</sup> · 12<sup>−x</sup> = 6<sup>−3</sup></p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "2<sup>x</sup> · 12<sup>−x</sup> = (2/12)<sup>x</sup> = (1/6)<sup>x</sup> = 6<sup>−x</sup>'tir. 6<sup>−x</sup> = 6<sup>−3</sup> ⇒ x = 3 bulunur.",
    answers: [
      { text: "3", ok: true },
      { text: "−1", ok: false },
      { text: "1", ok: false },
      { text: "−3", ok: false },
      { text: "4", ok: false }
    ]
  },

  // ─── ÜSLÜ SAYILAR TEST - 3 ───────────────────────────────────────────────────
  {
    text: "<p>30<sup>x</sup> = 100</p><p><b>olduğuna göre 3<sup>x+1</sup> · 5<sup>x−1</sup> · 2<sup>x−2</sup> çarpımının sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "3<sup>x+1</sup> · 5<sup>x−1</sup> · 2<sup>x−2</sup> = (3<sup>x</sup> · 5<sup>x</sup> · 2<sup>x</sup>) · 3/(5 · 4) = 30<sup>x</sup> · 3/20 = 100 · 3/20 = 15 bulunur.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>a = 3<sup>x</sup><br>b = 9<sup>x</sup> − 2</p><p><b>olduğuna göre b'nin a cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "9<sup>x</sup> = (3<sup>x</sup>)<sup>2</sup> = a<sup>2</sup> olduğundan b = a<sup>2</sup> − 2'dir.",
    answers: [
      { text: "a<sup>2</sup> − 2", ok: true },
      { text: "a<sup>2</sup> − 1", ok: false },
      { text: "a<sup>2</sup>", ok: false },
      { text: "a<sup>2</sup> + 1", ok: false },
      { text: "a<sup>2</sup> + 2", ok: false }
    ]
  },
  {
    text: "<p>a = 3<sup>−x</sup> − 1<br>b = 3<sup>x</sup> + 1</p><p><b>olduğuna göre b'nin a cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "3<sup>−x</sup> = a + 1 ⇒ 3<sup>x</sup> = 1/(a + 1). b = 1/(a + 1) + 1 = (a + 2)/(a + 1) bulunur.",
    answers: [
      { text: "a + 1", ok: false },
      { text: "(a + 1)/a", ok: false },
      { text: "a/(a + 2)", ok: false },
      { text: "(a + 2)/(a + 1)", ok: true },
      { text: "(a + 1)/(a + 2)", ok: false }
    ]
  },
  {
    text: "<p>a = 2<sup>−x</sup> − 2<br>b = 2<sup>x</sup> + 3</p><p><b>olduğuna göre (a + 2) · (b − 3) çarpımının sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "a + 2 = 2<sup>−x</sup> ve b − 3 = 2<sup>x</sup>'tir. Çarpımları 2<sup>−x</sup> · 2<sup>x</sup> = 2<sup>0</sup> = 1'dir.",
    answers: [
      { text: "−1", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>25<sup>x</sup> − 1 = a<br>1 + 5<sup>−2x</sup> = b</p><p><b>olduğuna göre a'nın b cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "5<sup>−2x</sup> = b − 1 ⇒ 25<sup>x</sup> = 5<sup>2x</sup> = 1/(b − 1). a = 1/(b − 1) − 1 = (2 − b)/(b − 1) bulunur.",
    answers: [
      { text: "(b − 1)/(2b)", ok: false },
      { text: "(b + 2)/b", ok: false },
      { text: "(b − 2)/(b − 1)", ok: false },
      { text: "(b − 1)/(2 − b)", ok: false },
      { text: "(2 − b)/(b − 1)", ok: true }
    ]
  },
  {
    text: "<p><b>36<sup>a+2</sup> sayısı (6<sup>a−1</sup>)<sup>2</sup> sayısının kaç katıdır?</b></p>",
    diff: 2,
    expl: "36<sup>a+2</sup> = 6<sup>2a+4</sup> ve (6<sup>a−1</sup>)<sup>2</sup> = 6<sup>2a−2</sup>'dir. Oran 6<sup>(2a+4) − (2a−2)</sup> = 6<sup>6</sup> = 36<sup>3</sup> bulunur.",
    answers: [
      { text: "36", ok: false },
      { text: "36<sup>2</sup>", ok: false },
      { text: "36<sup>3</sup>", ok: true },
      { text: "36<sup>4</sup>", ok: false },
      { text: "36<sup>5</sup>", ok: false }
    ]
  },
  {
    text: "<p>2<sup>x</sup> = 30<br>3<sup>y</sup> = 79<br>5<sup>z</sup> = 120</p><p><b>olduğuna göre x, y ve z sayılarının küçükten büyüğe sıralanışı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "2<sup>4</sup> = 16 &lt; 30 &lt; 32 = 2<sup>5</sup> ⇒ 4 &lt; x &lt; 5. 3<sup>3</sup> = 27 &lt; 79 &lt; 81 = 3<sup>4</sup> ⇒ 3 &lt; y &lt; 4. 5<sup>2</sup> = 25 &lt; 120 &lt; 125 = 5<sup>3</sup> ⇒ 2 &lt; z &lt; 3. Sıralama z &lt; y &lt; x'tir.",
    answers: [
      { text: "x &lt; y &lt; z", ok: false },
      { text: "y &lt; x &lt; z", ok: false },
      { text: "x &lt; z &lt; y", ok: false },
      { text: "z &lt; y &lt; x", ok: true },
      { text: "z &lt; x &lt; y", ok: false }
    ]
  },
  {
    text: "<p>x = (−2<sup>−3</sup>)<sup>2</sup><br>y = (−2<sup>2</sup>)<sup>−3</sup><br>z = (−2<sup>3</sup>)<sup>−1</sup></p><p><b>olduğuna göre aşağıdaki sıralamalardan hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "x = (−1/8)<sup>2</sup> = 1/64, y = (−4)<sup>−3</sup> = −1/64, z = (−8)<sup>−1</sup> = −1/8'dir. −1/8 &lt; −1/64 &lt; 1/64 olduğundan x &gt; y &gt; z'dir.",
    answers: [
      { text: "y &gt; x &gt; z", ok: false },
      { text: "y &gt; z &lt; x", ok: false },
      { text: "z &gt; x &gt; y", ok: false },
      { text: "x &gt; z &gt; y", ok: false },
      { text: "x &gt; y &gt; z", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitsizliği sağlayan kaç farklı x negatif tam sayısı vardır?</b></p>",
    img: "QuestionsImage/kpss/matematik/uslu-sayilar_t1_q16.jpg",
    diff: 3,
    expl: "16/9 = (3/4)<sup>−2</sup> olduğundan sağ taraf (3/4)<sup>−12−2x</sup> olur. Taban 0 ile 1 arasında olduğundan üslerde eşitsizlik yön değiştirir: 2x − 4 ≥ −12 − 2x ⇒ 4x ≥ −8 ⇒ x ≥ −2. Negatif tam sayılar −2 ve −1 olmak üzere 2 tanedir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "6", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitsizliği sağlayan en büyük tam sayı değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/uslu-sayilar_t1_q17.jpg",
    diff: 2,
    expl: "4/5 = (5/4)<sup>−1</sup> olduğundan sağ taraf (5/4)<sup>5−x</sup> olur. Taban 1'den büyük olduğundan yön değişmez: x + 3 &lt; 5 − x ⇒ x &lt; 1. En büyük tam sayı 0'dır.",
    answers: [
      { text: "−2", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>2<sup>x</sup> = 3<sup>y</sup></p><p><b>olduğuna göre 4<sup>x/y</sup> − 9<sup>y/x</sup> ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "2<sup>x</sup> = 3<sup>y</sup> eşitliğinden 2<sup>x/y</sup> = 3 ve 3<sup>y/x</sup> = 2 elde edilir. 4<sup>x/y</sup> = (2<sup>x/y</sup>)<sup>2</sup> = 9 ve 9<sup>y/x</sup> = (3<sup>y/x</sup>)<sup>2</sup> = 4'tür. Sonuç 9 − 4 = 5'tir.",
    answers: [
      { text: "−3", ok: false },
      { text: "−1", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>10<sup>−1</sup> + 10<sup>−2</sup> = x</p><p><b>olduğuna göre 0,1 + 0,01 + 0,001 + 0,0001 ifadesinin x cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "x = 0,11'dir. 0,1 + 0,01 + 0,001 + 0,0001 = 0,1111 = 0,11 + 0,0011 = x + x/100 = 101x/100 bulunur.",
    answers: [
      { text: "x/100", ok: false },
      { text: "100x/99", ok: false },
      { text: "101x/100", ok: true },
      { text: "99x/101", ok: false },
      { text: "101x/102", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen ifadenin eşiti aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/uslu-sayilar_t1_q20.jpg",
    diff: 3,
    expl: "4<sup>x−2</sup> = u dersek 4<sup>2−x</sup> = 1/u olur. 5/(1 − 1/u) = 5u/(u − 1) = −5u/(1 − u)'dur. Toplam: (5 − 5u)/(1 − u) = 5 bulunur.",
    answers: [
      { text: "5", ok: true },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliği sağlayan x kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/uslu-sayilar_t1_q21.jpg",
    diff: 3,
    expl: "Sol tarafı 15 = 2<sup>4</sup> − 1 ile çarparsak iki kare farkı zinciri oluşur: (2<sup>4</sup> − 1)(2<sup>4</sup> + 1)(2<sup>8</sup> + 1)(2<sup>16</sup> + 1) = 2<sup>32</sup> − 1. Buna göre 2<sup>32</sup> − 1 = 32<sup>32x</sup> − 1 ⇒ 2<sup>160x</sup> = 2<sup>32</sup> ⇒ x = 32/160 = 1/5 bulunur.",
    answers: [
      { text: "1/10", ok: false },
      { text: "1/5", ok: true },
      { text: "1", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>(2<sup>x</sup> − 1)(2<sup>x</sup> + 1)(4<sup>x</sup> + 1) = 63</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "(2<sup>x</sup> − 1)(2<sup>x</sup> + 1) = 4<sup>x</sup> − 1 ve (4<sup>x</sup> − 1)(4<sup>x</sup> + 1) = 16<sup>x</sup> − 1'dir. 16<sup>x</sup> − 1 = 63 ⇒ 16<sup>x</sup> = 64 ⇒ 2<sup>4x</sup> = 2<sup>6</sup> ⇒ x = 3/2 bulunur.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "3/2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>3<sup>x</sup> = 5<sup>y</sup> = 2</p><p><b>olduğuna göre 8<sup>1/x</sup> + 4<sup>1/y</sup> ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "3<sup>x</sup> = 2 ⇒ 2<sup>1/x</sup> = 3 ve 5<sup>y</sup> = 2 ⇒ 2<sup>1/y</sup> = 5'tir. 8<sup>1/x</sup> = (2<sup>1/x</sup>)<sup>3</sup> = 27 ve 4<sup>1/y</sup> = (2<sup>1/y</sup>)<sup>2</sup> = 25'tir. Toplam 52'dir.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "44", ok: false },
      { text: "48", ok: false },
      { text: "52", ok: true }
    ]
  },

  // ─── ÜSLÜ SAYILAR TEST - 4 ───────────────────────────────────────────────────
  {
    text: "<p>a ve b tam sayı olmak üzere</p><p>2<sup>a+5</sup> + 2<sup>b+3</sup> = 2<sup>12</sup></p><p><b>olduğuna göre 3<sup>b−a</sup> ifadesinin eşiti nedir?</b></p>",
    diff: 3,
    expl: "İki kuvvetin toplamının 2<sup>12</sup> olması için 2<sup>11</sup> + 2<sup>11</sup> = 2<sup>12</sup> olmalıdır. a + 5 = 11 ⇒ a = 6 ve b + 3 = 11 ⇒ b = 8. 3<sup>b−a</sup> = 3<sup>2</sup> = 9 bulunur.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "9", ok: true },
      { text: "27", ok: false },
      { text: "81", ok: false }
    ]
  },
  {
    text: "<p>x ve y birer doğal sayı olmak üzere</p><p>3 · x = 10<sup>y</sup> − 1</p><p><b>eşitliğini sağlayan x sayısının rakamları toplamı 54 olduğuna göre y kaçtır?</b></p>",
    diff: 3,
    expl: "10<sup>y</sup> − 1 sayısı y tane 9'dan oluşur (99...9). Bu sayı 3'e bölünürse x = 33...3 (y tane 3) olur. Rakamları toplamı 3y = 54 ⇒ y = 18 bulunur.",
    answers: [
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "15", ok: false },
      { text: "18", ok: true },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p>2<sup>a</sup> · 5<sup>b</sup> = 8<br>2<sup>b</sup> · 5<sup>a</sup> = 125</p><p>eşitlikleri veriliyor.</p><p><b>Buna göre (a − b)/(a + b) değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Eşitlikleri çarparsak 10<sup>a+b</sup> = 1000 ⇒ a + b = 3. Birinciyi ikinciye bölersek (2/5)<sup>a−b</sup> = 8/125 = (2/5)<sup>3</sup> ⇒ a − b = 3. Oran 3/3 = 1 bulunur.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>15<sup>x</sup> = 3 ve 5<sup>y</sup> = 2 olduğuna göre</p><p><b>15<sup>−y·(1−x)</sup> ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "15<sup>1−x</sup> = 15/15<sup>x</sup> = 15/3 = 5'tir. 15<sup>−y·(1−x)</sup> = (15<sup>1−x</sup>)<sup>−y</sup> = 5<sup>−y</sup> = 1/2 bulunur.",
    answers: [
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "1/2", ok: true },
      { text: "−1", ok: false },
      { text: "−1/2", ok: false }
    ]
  }
];
