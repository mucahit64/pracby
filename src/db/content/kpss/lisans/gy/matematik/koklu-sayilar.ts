import type { McQ } from "../../../../types";

export const MAT_KOKLU_SAYILAR_T1: McQ[] = [
  {
    text: "<p>√49 + √121 − √256</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "√49 = 7, √121 = 11, √256 = 16'dır. İşlem: 7 + 11 − 16 = 2 bulunur.",
    answers: [
      { text: "1", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q2.jpg",
    diff: 1,
    expl: "Pay: √289 − √196 = 17 − 14 = 3.\nPayda: ∛125 + ∜16 = 5 + 2 = 7.\nSonuç: 3/7 bulunur.",
    answers: [
      { text: "3/7", ok: true },
      { text: "1/7", ok: false },
      { text: "2/7", ok: false },
      { text: "1", ok: false },
      { text: "6/7", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q3.jpg",
    diff: 2,
    expl: "Çift dereceli köklerin içi dışarıya mutlak değerle çıkar, tek dereceliler ise olduğu gibi çıkar.\nPay: √((−3)²) = |−3| = 3, ∜((−5)⁴) = |−5| = 5. Pay: 3 − 5 = −2.\nPayda: ∛(−125) = −5, √((−7)²) = 7. Payda: −5 + 7 = 2.\nSonuç: −2 / 2 = −1'dir.",
    answers: [
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "−1", ok: true },
      { text: "5", ok: false },
      { text: "−2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliğe göre A reel sayısının değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q4.jpg",
    diff: 3,
    expl: "A'nın reel sayı olabilmesi için çift dereceli köklerin içi negatif olmamalıdır.\n√(x − 4) için x − 4 ≥ 0 ⇒ x ≥ 4.\n∜(4 − x) için 4 − x ≥ 0 ⇒ x ≤ 4.\nİki şartı birlikte sağlayan tek değer x = 4'tür.\nA = (√0 + ∛8) / (∛1 − ∜0) = (0 + 2) / (1 − 0) = 2 bulunur.",
    answers: [
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q5.jpg",
    diff: 2,
    expl: "İç içe köklerde en içten başlanır:\n√1 = 1.\n8 + 1 = 9 ⇒ √9 = 3.\n13 + 3 = 16 ⇒ √16 = 4.\n21 + 4 = 25 ⇒ √25 = 5.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q6.jpg",
    diff: 3,
    expl: "Tek dereceli kök olduğu gibi çıkar: ∛((3 − √11)³) = 3 − √11.\nÇift dereceli kök mutlak değerle çıkar: ∜((3 − √11)⁴) = |3 − √11|. 3 = √9 < √11 olduğundan içerisi negatiftir, dışarı √11 − 3 olarak çıkar.\nSon terim: √((−2)²) = |−2| = 2.\nToplam: (3 − √11) + (√11 − 3) + 2 = 2.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: false },
      { text: "2√11", ok: false },
      { text: "6", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "<p>√75 + √12 − √108 + √48</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "√75 = 5√3, √12 = 2√3, √108 = 6√3, √48 = 4√3.\nİşlem: 5√3 + 2√3 − 6√3 + 4√3 = 5√3 bulunur.",
    answers: [
      { text: "3√3", ok: false },
      { text: "4√3", ok: false },
      { text: "2√3", ok: false },
      { text: "5√3", ok: true },
      { text: "√3", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q8.jpg",
    diff: 1,
    expl: "Aynı dereceli kökler tek kök altında birleştirilebilir: √(120 / (40 · 27)) = √(3 / 27) = √(1/9) = 1/3.",
    answers: [
      { text: "3", ok: false },
      { text: "2/3", ok: false },
      { text: "1/3", ok: true },
      { text: "1", ok: false },
      { text: "4/3", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q9.jpg",
    diff: 2,
    expl: "Pay: √108 + √27 = 6√3 + 3√3 = 9√3.\nPayda: √48 − √12 = 4√3 − 2√3 = 2√3.\nSonuç: 9√3 / 2√3 = 9/2.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "9/2", ok: true },
      { text: "2", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q10.jpg",
    diff: 2,
    expl: "Ondalık sayıları kesre çevirelim:\nPay: √(4/10) + √(9/10) = 2/√10 + 3/√10 = 5/√10.\nPayda: √(1/10) − √(36/10) = 1/√10 − 6/√10 = −5/√10.\nSonuç: (5/√10) / (−5/√10) = −1.",
    answers: [
      { text: "1", ok: false },
      { text: "−2", ok: false },
      { text: "2", ok: false },
      { text: "−1", ok: true },
      { text: "−3", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q11.jpg",
    diff: 3,
    expl: "1'den başlayan ardışık n tek sayının toplamı n²'dir.\nPay: 1 + 3 + … + 11 → 6 terim, toplam 36, √36 = 6.\nPayda: 1 + 3 + … + 23 → 12 terim, toplam 144, √144 = 12.\nSonuç: 6 / 12 = 1/2.",
    answers: [
      { text: "2", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1/4", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "<p>x ve y pozitif tam sayılar olmak üzere</p><p>x = ∛(20 · y)</p><p>eşitliği veriliyor.</p><p><b>Buna göre, x + y <u>en az</u> kaçtır?</b></p>",
    diff: 2,
    expl: "Her iki tarafın küpü alınırsa x³ = 20 · y = 2² · 5 · y olur. Sağ tarafın tam küp olması için en küçük y = 2 · 5² = 50'dir.\nBu durumda x³ = 2³ · 5³ = 1000 ve x = 10 bulunur.\nx + y = 10 + 50 = 60.",
    answers: [
      { text: "60", ok: true },
      { text: "20", ok: false },
      { text: "48", ok: false },
      { text: "80", ok: false },
      { text: "64", ok: false }
    ]
  },

// ─── KÖKLÜ SAYILAR TEST - 2 ───────────────────────────────────────────────────

  {
    text: "<p>a ve b pozitif gerçel sayılardır.</p><!--img--><p><b>Yukarıda verilen eşitliğe göre a · b çarpımı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q13.jpg",
    diff: 3,
    expl: "İlk terim: √(a²b²) / √b = ab / √b = a√b.\nİkinci terim: √(a³b) / √a = a√(ab) / √a = a√b.\nToplam: 2a√b = 3√a. Her iki tarafın karesi alınırsa 4a²b = 9a ⇒ 4ab = 9 ⇒ ab = 9/4 bulunur.",
    answers: [
      { text: "3/2", ok: false },
      { text: "9/4", ok: true },
      { text: "4/9", ok: false },
      { text: "1", ok: false },
      { text: "2/3", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q14.jpg",
    diff: 3,
    expl: "İfadeyi √(a − 2√b) kalıbına getirmek için kök içini 2 ile çarpıp bölelim: √((8 − 2√7) / 2).\nÇarpımları 7, toplamları 8 olan sayılar 7 ve 1 olduğundan √(8 − 2√7) = √7 − 1'dir.\nSonuç: (√7 − 1) / √2 olur.",
    answers: [
      { text: "(√7 + 1) / √2", ok: false },
      { text: "(√7 − 1) / √2", ok: true },
      { text: "(√5 + 1) / √2", ok: false },
      { text: "(2√2 + 1) / √2", ok: false },
      { text: "(√14 − 2) / √2", ok: false }
    ]
  },
  {
    text: "<p>∛(4<sup>x+1</sup>) = 16<sup>x−1</sup></p><p><b>eşitliğine göre x kaçtır?</b></p>",
    diff: 2,
    expl: "İki tarafı da 4 tabanında yazalım: 4^((x+1)/3) = 4^(2x−2).\nÜsler eşitlenirse (x + 1)/3 = 2x − 2 ⇒ x + 1 = 6x − 6 ⇒ 5x = 7 ⇒ x = 7/5.",
    answers: [
      { text: "5/7", ok: false },
      { text: "1/7", ok: false },
      { text: "7/5", ok: true },
      { text: "2/5", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "<p>√448</p><p><b>sayısının yaklaşık değerinin bulunması için aşağıdakilerden hangisinin yaklaşık değeri bilinmektedir?</b></p>",
    diff: 1,
    expl: "448 = 64 · 7 olduğundan √448 = 8√7'dir. Bu sayının yaklaşık değerini bulmak için √7'nin yaklaşık değeri bilinmelidir.",
    answers: [
      { text: "√3", ok: false },
      { text: "√5", ok: false },
      { text: "√2", ok: false },
      { text: "√7", ok: true },
      { text: "√11", ok: false }
    ]
  },
  {
    text: "<p>√(204 · 210 + 9)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "x = 207 dersek 204 = x − 3 ve 210 = x + 3 olur.\n√((x − 3)(x + 3) + 9) = √(x² − 9 + 9) = √(x²) = x = 207.",
    answers: [
      { text: "207", ok: true },
      { text: "212", ok: false },
      { text: "201", ok: false },
      { text: "205", ok: false },
      { text: "213", ok: false }
    ]
  },
  {
    text: "<p>√(2004 · 2003 − 2001 · 2006)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "x = 2004 dersek 2003 = x − 1, 2001 = x − 3, 2006 = x + 2 olur.\nKök içi: x(x − 1) − (x − 3)(x + 2) = (x² − x) − (x² − x − 6) = 6.\nSonuç: √6 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "√3", ok: false },
      { text: "√6", ok: true },
      { text: "√2", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q19.jpg",
    diff: 3,
    expl: "Kökleri üslü sayıya çevirelim: 2^(1/3) · 2^(1/4) / 2^(1/2).\nÜsler: 1/3 + 1/4 − 1/2 = 4/12 + 3/12 − 6/12 = 1/12.\nSonuç: 2^(1/12) = ¹²√2.",
    answers: [
      { text: "√2", ok: false },
      { text: "⁶√2", ok: false },
      { text: "∛2", ok: false },
      { text: "¹²√2", ok: true },
      { text: "∜2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q20.jpg",
    diff: 2,
    expl: "Kök içi: 1/36 − 1/100 = 100/3600 − 36/3600 = 64/3600.\n√(64/3600) = 8/60 = 2/15 bulunur.",
    answers: [
      { text: "1/24", ok: false },
      { text: "1/8", ok: false },
      { text: "2/15", ok: true },
      { text: "2/5", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q21.jpg",
    diff: 3,
    expl: "25/36 = (5/6)², 9/25 = (3/5)² ve 2 · (5/6) · (3/5) = 1'dir. Kök içi (5/6 + 3/5)² olur.\nSonuç: 5/6 + 3/5 = 25/30 + 18/30 = 43/30 bulunur.",
    answers: [
      { text: "1/30", ok: false },
      { text: "1/6", ok: false },
      { text: "1/5", ok: false },
      { text: "43/30", ok: true },
      { text: "1/10", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q22.jpg",
    diff: 3,
    expl: "√(8 − 2√15): çarpımları 15, toplamları 8 olan sayılar 5 ve 3'tür, √5 − √3 olarak çıkar.\n√(5 + √24) = √(5 + 2√6): çarpımları 6, toplamları 5 olan sayılar 3 ve 2'dir, √3 + √2 olarak çıkar.\nToplam: (√5 − √3) + (√3 + √2) = √5 + √2 bulunur.",
    answers: [
      { text: "√5 − √2", ok: false },
      { text: "√3 − √2", ok: false },
      { text: "√5 − √3", ok: false },
      { text: "√5 + √2", ok: true },
      { text: "√3 + √2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q23.jpg",
    diff: 2,
    expl: "Kesri eşleniği (2 + √5) ile genişletelim: 1 / (2 − √5) = (2 + √5) / (4 − 5) = −2 − √5.\n6 ile toplarsak: 6 − 2 − √5 = 4 − √5 bulunur.",
    answers: [
      { text: "2 + √5", ok: false },
      { text: "4 + √5", ok: false },
      { text: "4 − √5", ok: true },
      { text: "√5 − 2", ok: false },
      { text: "3 − √5", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen eşitliğe göre x kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q24.jpg",
    diff: 2,
    expl: "9 · ∛3 = 3² · 3^(1/3) = 3^(7/3). Karekökü alınırsa 3^(7/6) olur. 3^(7/6) = 3^x ⇒ x = 7/6 bulunur.",
    answers: [
      { text: "5/6", ok: false },
      { text: "7/6", ok: true },
      { text: "1", ok: false },
      { text: "8/6", ok: false },
      { text: "4/3", ok: false }
    ]
  },

// ─── KÖKLÜ SAYILAR TEST - 3 ───────────────────────────────────────────────────

  {
    text: "<p>√(10 · 12 · 14 · 16 + 16)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "16 parantezine alalım: √(16 · (10 · 12 · 14 + 1)) = 4 · √(1680 + 1) = 4 · √1681. 1681 = 41² olduğundan sonuç 4 · 41 = 164 bulunur.",
    answers: [
      { text: "168", ok: false },
      { text: "160", ok: false },
      { text: "164", ok: true },
      { text: "158", ok: false },
      { text: "162", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q26.jpg",
    diff: 2,
    expl: "Payda: √24 / √3 − √6 = √8 − √6 = 2√2 − √6 = √2(2 − √3).\nPay: √18 = 3√2.\nKesir: 3√2 / (√2(2 − √3)) = 3 / (2 − √3). Eşleniği ile genişletilirse 3(2 + √3) / (4 − 3) = 6 + 3√3 bulunur.",
    answers: [
      { text: "6 + √3", ok: false },
      { text: "6 − 3√3", ok: false },
      { text: "6 + 3√3", ok: true },
      { text: "3√3", ok: false },
      { text: "√3", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q27.jpg",
    diff: 2,
    expl: "Paydaları eşitleyelim: (2√2 + 3)(2√2 − 3) = 8 − 9 = −1.\nPay: (2√2 − 3) − (2√2 + 3) = −6.\nSonuç: −6 / −1 = 6'dır.",
    answers: [
      { text: "2√3", ok: false },
      { text: "√3", ok: false },
      { text: "−2√3", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: true }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q28.jpg",
    diff: 2,
    expl: "Pay: √50 = 5√2.\nPayda: 1/√2 + √8/3 = √2/2 + 2√2/3 = 3√2/6 + 4√2/6 = 7√2/6.\nSonuç: 5√2 · 6 / (7√2) = 30/7 bulunur.",
    answers: [
      { text: "5/7", ok: false },
      { text: "1/7", ok: false },
      { text: "30/7", ok: true },
      { text: "2/7", ok: false },
      { text: "4/7", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q29.jpg",
    diff: 1,
    expl: "Kök dereceleri aynı olduğundan içler çarpılabilir: √((10 − √19)(10 + √19)) = √(100 − 19) = √81 = 9 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q30.jpg",
    diff: 2,
    expl: "Pay: 2 + √2 + √18 = 2 + √2 + 3√2 = 2 + 4√2.\nPayda: 4 + √128 = 4 + 8√2 = 2(2 + 4√2).\nSonuç: (2 + 4√2) / (2(2 + 4√2)) = 1/2.",
    answers: [
      { text: "√2/3", ok: false },
      { text: "√2/2", ok: false },
      { text: "√2", ok: false },
      { text: "1/2", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q31.jpg",
    diff: 2,
    expl: "Kesri eşleniği (√7 + √5) ile genişletelim:\nPay: (√7 + √5)² = 12 + 2√35. Payda: 7 − 5 = 2.\nKesir: (12 + 2√35) / 2 = 6 + √35.\nSonuç: 6 + √35 − √35 = 6.",
    answers: [
      { text: "6", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>a = 2 − √5 olduğuna göre,</p><p>a · (a + √5) · (a + 2√5)</p><p><b>çarpımının sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "a = 2 − √5 için a + √5 = 2 ve a + 2√5 = 2 + √5 olur.\nÇarpım: (2 − √5) · 2 · (2 + √5) = 2 · (4 − 5) = −2 bulunur.",
    answers: [
      { text: "2", ok: false },
      { text: "−1", ok: false },
      { text: "−2", ok: true },
      { text: "1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>x = √3<br>y = ∛5<br>z = ∜7</p><p><b>sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 3,
    expl: "Kök dereceleri EKOK(2, 3, 4) = 12'de eşitlenir:\nx = ¹²√(3⁶) = ¹²√729\ny = ¹²√(5⁴) = ¹²√625\nz = ¹²√(7³) = ¹²√343\n343 < 625 < 729 olduğundan z < y < x'tir.",
    answers: [
      { text: "x &lt; y &lt; z", ok: false },
      { text: "x &lt; z &lt; y", ok: false },
      { text: "z &lt; y &lt; x", ok: true },
      { text: "z &lt; x &lt; y", ok: false },
      { text: "y &lt; x &lt; z", ok: false }
    ]
  },
  {
    text: "<p>a = 4 · √3<br>b = 5 · √2<br>c = 3 · √10</p><p><b>sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 1,
    expl: "Katsayıları kök içine alalım: a = √48, b = √50, c = √90.\n48 < 50 < 90 olduğundan a < b < c'dir.",
    answers: [
      { text: "a &lt; c &lt; b", ok: false },
      { text: "a &lt; b &lt; c", ok: true },
      { text: "c &lt; a &lt; b", ok: false },
      { text: "c &lt; b &lt; a", ok: false },
      { text: "b &lt; c &lt; a", ok: false }
    ]
  },
  {
    text: "<p>a = √7/2<br>b = √5/3<br>c = √3/4</p><p><b>sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 2,
    expl: "Pozitif sayıların karelerini kıyaslayalım: a² = 7/4 = 1,75; b² = 5/9 ≈ 0,56; c² = 3/16 ≈ 0,19.\nBuna göre c < b < a'dır.",
    answers: [
      { text: "c &lt; b &lt; a", ok: true },
      { text: "c &lt; a &lt; b", ok: false },
      { text: "b &lt; c &lt; a", ok: false },
      { text: "b &lt; a &lt; c", ok: false },
      { text: "a &lt; c &lt; b", ok: false }
    ]
  },
  {
    text: "<p>a = √7 + √5<br>b = √10 + √2<br>c = 3 + √3</p><p><b>sayılarını küçükten büyüğe doğru sıralayınız?</b></p>",
    diff: 3,
    expl: "c = √9 + √3 yazalım ve kareleri kıyaslayalım:\na² = 12 + 2√35\nb² = 12 + 2√20\nc² = 12 + 2√27\n20 < 27 < 35 olduğundan b < c < a'dır.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "a &lt; c &lt; b", ok: false },
      { text: "b &lt; c &lt; a", ok: true },
      { text: "b &lt; a &lt; c", ok: false },
      { text: "c &lt; a &lt; b", ok: false }
    ]
  },

// ─── KÖKLÜ SAYILAR TEST - 4 ───────────────────────────────────────────────────

  {
    text: "<p><b>Yukarıda verilen eşitliğe göre (√5 − 1)<sup>x</sup> ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/koklu-sayilar_t1_q37.jpg",
    diff: 3,
    expl: "√(6 + √20) = √(6 + 2√5) = √5 + 1 olduğundan (√5 + 1)^x = 4'tür.\n(√5 − 1)^x = y diyelim. İki ifade taraf tarafa çarpılırsa ((√5 + 1)(√5 − 1))^x = 4y ⇒ 4^x = 4y ⇒ y = 4^(x−1) bulunur.",
    answers: [
      { text: "4<sup>x−1</sup>", ok: true },
      { text: "4<sup>x+1</sup>", ok: false },
      { text: "4<sup>x</sup>", ok: false },
      { text: "2<sup>2x+4</sup>", ok: false },
      { text: "2<sup>2x−4</sup>", ok: false }
    ]
  },
  {
    text: "<p>a = ∛7 − ∛2<br>b = ∛49 + ∛14 + ∛4</p><p><b>olduğuna göre a · b çarpımı kaçtır?</b></p>",
    diff: 2,
    expl: "x = ∛7, y = ∛2 dersek a = x − y ve b = x² + xy + y² olur. (x − y)(x² + xy + y²) = x³ − y³ özdeşliğinden a · b = 7 − 2 = 5 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>A = √(789 · 791 + 1)<br>B = √(393 · 397 + 4)</p><p><b>olduğuna göre A/B oranı kaçtır?</b></p>",
    diff: 3,
    expl: "789 · 791 + 1 = (790 − 1)(790 + 1) + 1 = 790² ⇒ A = 790.\n393 · 397 + 4 = (395 − 2)(395 + 2) + 4 = 395² ⇒ B = 395.\nA/B = 790/395 = 2 bulunur.",
    answers: [
      { text: "17/4", ok: false },
      { text: "13/3", ok: false },
      { text: "11/2", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "<p>x − 4√x = 6 olduğuna göre</p><p>x − 24/√x</p><p><b>ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "x − 6 = 4√x eşitliğinin her iki tarafı √x'e bölünürse √x − 6/√x = 4 olur. Bu eşitlik 4 ile çarpılırsa 4√x − 24/√x = 16 elde edilir.\n4√x = x − 6 yazılırsa (x − 6) − 24/√x = 16 ⇒ x − 24/√x = 22 bulunur.",
    answers: [
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: false },
      { text: "22", ok: true },
      { text: "24", ok: false }
    ]
  },

// ─── BASİT EŞİTSİZLİKLER TEST - 1 ──────────────────────────────────────────────

  {
    text: "<p>20/5 − a/3 &lt; 2</p><p><b>eşitsizliğini sağlayan a'nın değer aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "20/5 = 4 olduğundan 4 − a/3 < 2 ⇒ 2 < a/3 ⇒ 6 < a. Değer aralığı (6, ∞)'dur.",
    answers: [
      { text: "(−∞, 2)", ok: false },
      { text: "(−∞, 15)", ok: false },
      { text: "(0, 30)", ok: false },
      { text: "(6, ∞)", ok: true },
      { text: "(−∞, 30)", ok: false }
    ]
  },
  {
    text: "<p>a ve b tam sayı olmak üzere</p><p>7 ≤ a &lt; 21<br>8 &lt; b ≤ 24</p><p><b>olduğuna göre (a + 3)/(b − 4) ifadesinin en küçük değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Pay ve payda pozitiftir. Kesrin en küçük olması için pay en küçük (a = 7), payda en büyük (b = 24) seçilir.\n(7 + 3)/(24 − 4) = 10/20 = 1/2.",
    answers: [
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>a + c = 8/9<br>b + c = 9/10<br>a + b = 10/11</p><p><b>eşitliklerine göre a, b ve c'nin doğru sıralanışı hangisidir?</b></p>",
    diff: 2,
    expl: "8/9 < 9/10 < 10/11 olduğundan a + c < b + c < a + b'dir.\na + c < b + c ⇒ a < b.\nb + c < a + b ⇒ c < a.\nSıralama: c < a < b.",
    answers: [
      { text: "a &lt; b &lt; c", ok: false },
      { text: "a &lt; c &lt; b", ok: false },
      { text: "c &lt; a &lt; b", ok: true },
      { text: "b &lt; a &lt; c", ok: false },
      { text: "b &lt; c &lt; a", ok: false }
    ]
  },
  {
    text: "<p>x + y = 1/15<br>x + z = 1/30<br>y + z = 1/45</p><p><b>olduğuna göre x, y, z küçükten büyüğe nasıl sıralanır?</b></p>",
    diff: 2,
    expl: "1/15 > 1/30 > 1/45 olduğundan x + y > x + z > y + z'dir.\nx + y > x + z ⇒ y > z.\nx + z > y + z ⇒ x > y.\nKüçükten büyüğe: z < y < x.",
    answers: [
      { text: "x &lt; y &lt; z", ok: false },
      { text: "x &lt; z &lt; y", ok: false },
      { text: "y &lt; x &lt; z", ok: false },
      { text: "z &lt; y &lt; x", ok: true },
      { text: "z &lt; x &lt; y", ok: false }
    ]
  },
  {
    text: "<p>3/(2x − 1) &lt; 5/3</p><p><b>eşitsizliğindeki x pozitif bir tam sayı olduğuna göre x'in en küçük değeri kaçtır?</b></p>",
    diff: 2,
    expl: "x pozitif tam sayı olduğundan 2x − 1 > 0'dır. İçler dışlar çarpımı: 9 < 5(2x − 1) ⇒ 14 < 10x ⇒ x > 1,4. En küçük tam sayı değeri 2'dir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>(3x + 1)<sup>2</sup> ≤ 16</p><p><b>eşitsizliğini sağlayan x tam sayı değerlerinin toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "−4 ≤ 3x + 1 ≤ 4 ⇒ −5 ≤ 3x ≤ 3 ⇒ −5/3 ≤ x ≤ 1. Tam sayılar −1, 0, 1'dir; toplamları 0'dır.",
    answers: [
      { text: "−1", ok: false },
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>x &lt; |x| &lt; x<sup>2</sup></p><p><b>eşitsizliğine göre x'in değer aralığı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "x < |x| olduğundan x negatiftir ve |x| = −x'tir.\n−x < x² ⇒ x² + x > 0 ⇒ x(x + 1) > 0 ⇒ x < −1 veya x > 0. x negatif olduğundan x < −1, yani (−∞, −1) bulunur.",
    answers: [
      { text: "(0, 1)", ok: false },
      { text: "(−1, 0)", ok: false },
      { text: "(−∞, 1)", ok: false },
      { text: "(−∞, −1)", ok: true },
      { text: "(−∞, 0]", ok: false }
    ]
  },
  {
    text: "<p><b>Karesi kendisinden küçük olan bir sayının 3 katının 5 fazlası hangi değer aralığında yer alır?</b></p>",
    diff: 2,
    expl: "x² < x ise 0 < x < 1'dir. 3 ile çarpılırsa 0 < 3x < 3, 5 eklenirse 5 < 3x + 5 < 8 olur. Aralık (5, 8)'dir.",
    answers: [
      { text: "(3, 5)", ok: false },
      { text: "(3, 8)", ok: false },
      { text: "(0, 15)", ok: false },
      { text: "(5, 8)", ok: true },
      { text: "(5, 15)", ok: false }
    ]
  },
  {
    text: "<p>Çağrı, Çağatay ve Çağlar mevsimlik işçi olarak bir bahçeden vişne toplamaktadır. Çağrı ve Çağlar bir ağacı 3 saatte, Çağatay ve Çağlar bir ağacı 5 saatte, Çağrı ve Çağatay bir ağacı 4 saatte topladıklarına göre;</p><p><b>toplama hızları yavaştan hızlıya doğru hangisinden doğrudur?</b></p>",
    diff: 3,
    expl: "Hızlar Çağrı = A, Çağatay = B, Çağlar = C olsun:\nA + C = 1/3, B + C = 1/5, A + B = 1/4.\nA + C > B + C ⇒ A > B; A + C > A + B ⇒ C > B; A + B > B + C ⇒ A > C.\nSıralama: B < C < A, yani yavaştan hızlıya Çağatay − Çağlar − Çağrı.",
    answers: [
      { text: "Çağrı − Çağatay − Çağlar", ok: false },
      { text: "Çağrı − Çağlar − Çağatay", ok: false },
      { text: "Çağatay − Çağlar − Çağrı", ok: true },
      { text: "Çağatay − Çağrı − Çağlar", ok: false },
      { text: "Çağlar − Çağrı − Çağatay", ok: false }
    ]
  },
  {
    text: "<p>a &lt; 0 &lt; b &lt; c</p><p><b>olduğuna göre aşağıdakilerden hangisi negatiftir?</b></p>",
    diff: 2,
    expl: "a negatif, b ve c pozitiftir.\nA) (a + b)²/c: pozitif/pozitif = pozitif.\nB) a²·b/(b − a): pozitif/pozitif = pozitif.\nC) (c − b)/(a(a − 1)): a(a − 1) pozitif olduğundan pozitif.\nD) |a − c|/ab: ab negatif olduğundan negatif.\nE) abc/(b − c): negatif/negatif = pozitif.\nCevap D'dir.",
    answers: [
      { text: "(a + b)<sup>2</sup>/c", ok: false },
      { text: "a<sup>2</sup> · b/(b − a)", ok: false },
      { text: "(c − b)/(a · (a − 1))", ok: false },
      { text: "|a − c|/ab", ok: true },
      { text: "abc/(b − c)", ok: false }
    ]
  },
  {
    text: "<p>a · b<sup>2</sup> &gt; 0<br>b<sup>4</sup> · c<sup>3</sup> &lt; 0<br>abc/b<sup>2</sup> &lt; 0</p><p><b>eşitsizliklerine göre a, b ve c'nin işaretleri hangisidir?</b></p>",
    diff: 3,
    expl: "b² > 0 olduğundan a · b² > 0 ⇒ a > 0.\nb⁴ > 0 olduğundan c³ < 0 ⇒ c < 0.\nabc/b² < 0 ⇒ abc < 0. a > 0, c < 0 olduğundan b > 0'dır.\nİşaretler: +, +, −.",
    answers: [
      { text: "−, +, +", ok: false },
      { text: "−, −, +", ok: false },
      { text: "+, −, −", ok: false },
      { text: "+, +, +", ok: false },
      { text: "+, +, −", ok: true }
    ]
  },
  {
    text: "<p>a negatif bir tam sayı olmak üzere,</p><p>5ab &lt; 7(a − 3) + 21</p><p><b>eşitsizliğine göre b'nin en küçük tam sayı değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Sağ taraf 7a − 21 + 21 = 7a'dır: 5ab < 7a. a negatif olduğundan a'ya bölünce yön değişir: 5b > 7 ⇒ b > 1,4. En küçük tam sayı değeri 2'dir.",
    answers: [
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>a ve b pozitif tam sayılar için a &lt; b ve a = 2b + bc olduğuna göre c'nin değer aralığı aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 3,
    expl: "a = b(2 + c) ⇒ a/b = 2 + c. a < b olduğundan a/b < 1 ⇒ 2 + c < 1 ⇒ c < −1. Buna göre c'nin değer aralığı (−∞, −1) olabilir. (a > 0 şartı ayrıca c > −2 verdiği için c'nin değerleri bu aralığın içindeki (−2, −1) bölgesinde yer alır.)",
    answers: [
      { text: "(−∞, −1)", ok: true },
      { text: "(0, 1)", ok: false },
      { text: "(−2, −1)", ok: false },
      { text: "[−2, ∞)", ok: false },
      { text: "(−∞, −2)", ok: false }
    ]
  }
];
