import type { McQ } from "../../../../types";

export const MAT_KOKLU_SAYILAR_T1: McQ[] = [
  {
    text: "√(49) + √(121) - √(256)\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Kök içindeki tam kare sayıları dışarı çıkaralım: √(49) = 7, √(121) = 11, √(256) = 16'dır. İşlem: 7 + 11 - 16 = 18 - 16 = 2 bulunur.",
    answers: [
      { text: "1", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q2.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q2.jpg",
    diff: 1,
    expl: "Pay kısmındaki kökleri çıkaralım: √(289) = 17, √(196) = 14. Pay: 17 - 14 = 3.\nPayda kısmındaki kökleri çıkaralım: ∛(125) = 5, ∜(16) = 2. Payda: 5 + 2 = 7.\nSonuç: 3 / 7 bulunur.",
    answers: [
      { text: "3/7", ok: true },
      { text: "1/7", ok: false },
      { text: "2/7", ok: false },
      { text: "1", ok: false },
      { text: "6/7", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q3.jpg",
    diff: 2,
    expl: "Çift dereceli köklerin içi dışarıya mutlak değerle çıkar, tek dereceliler ise olduğu gibi çıkar.\nPay: √((-3)²) = |-3| = 3. ∜((-5)⁴) = |-5| = 5. Pay: 3 - 5 = -2.\nPayda: ∛(-125) = -5. √((-7)²) = |-7| = 7. Payda: -5 + 7 = 2.\nSonuç: -2 / 2 = -1'dir.",
    answers: [
      { text: "2", ok: false },
      { text: "4", ok: false },
      { text: "-1", ok: true },
      { text: "5", ok: false },
      { text: "-2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q4.jpg)\n\nise A reel sayısının değeri kaçtır?",
    img: "QuestionsImage/koklu_t1_q4.jpg",
    diff: 3,
    expl: "A'nın bir reel sayı olabilmesi için çift dereceli köklerin içinin 0 veya 0'dan büyük olması gerekir. \n√(x-4) için x - 4 ≥ 0 => x ≥ 4.\n∜(4-x) için 4 - x ≥ 0 => x ≤ 4.\nHer iki şartı aynı anda sağlayan tek değer x = 4'tür. \nx yerine 4 yazarsak: A = (√(0) + ∛(8)) / (∛(1) - ∜(0)) = (0 + 2) / (1 - 0) = 2 / 1 = 2 bulunur.",
    answers: [
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q5.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q5.jpg",
    diff: 2,
    expl: "İç içe köklerde en içten başlanır:\n√(1) = 1.\n8 + 1 = 9 => √(9) = 3.\n13 + 3 = 16 => √(16) = 4.\n21 + 4 = 25 => √(25) = 5.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q6.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q6.jpg",
    diff: 3,
    expl: "Tek dereceli kök olduğu gibi çıkar: ∛((3-√11)³) = 3 - √11.\nÇift dereceli kök mutlak değerle çıkar: ∜((3-√11)⁴) = |3 - √11|. 3 = √(9) olduğu için √(9) < √(11)'dir, yani içerisi negatiftir. Dışarıya eksi ile çarpılarak çıkar: √11 - 3.\nSon terim: √((-2)²) = |-2| = 2.\nHepsini toplayalım: (3 - √11) + (√11 - 3) + 2 = 2.",
    answers: [
      { text: "4", ok: false },
      { text: "7", ok: false },
      { text: "2√11", ok: false },
      { text: "6", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "√(75) + √(12) - √(108) + √(48)\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Kök içlerindeki sayıları tam kare çarpanlarına ayıralım:\n√(75) = √(25·3) = 5√3\n√(12) = √(4·3) = 2√3\n√(108) = √(36·3) = 6√3\n√(48) = √(16·3) = 4√3\nİşlemi yaparsak: 5√3 + 2√3 - 6√3 + 4√3 = (5+2-6+4)√3 = 5√3 bulunur.",
    answers: [
      { text: "3√3", ok: false },
      { text: "4√3", ok: false },
      { text: "2√3", ok: false },
      { text: "5√3", ok: true },
      { text: "√3", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q8.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q8.jpg",
    diff: 1,
    expl: "Kök içindeki çarpma ve bölme işlemlerini aynı kök içinde yapabiliriz:\n√(120 / (40 · 27)). 120'yi 40'a bölersek 3 kalır.\nİfade √(3 / 27) haline gelir. Sadeleştirirsek √(1/9) olur. √(1/9) = 1/3'tür.",
    answers: [
      { text: "3", ok: false },
      { text: "2/3", ok: false },
      { text: "1/3", ok: true },
      { text: "1", ok: false },
      { text: "4/3", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q9.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q9.jpg",
    diff: 2,
    expl: "Kökleri a√b formatına çevirelim:\nPay: √(108) + √(27) = 6√3 + 3√3 = 9√3.\nPayda: √(48) - √(12) = 4√3 - 2√3 = 2√3.\nBölme işlemi: (9√3) / (2√3) = 9/2.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "9/2", ok: true },
      { text: "2", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q10.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q10.jpg",
    diff: 2,
    expl: "Ondalık kökleri kesre çevirelim:\nPay: √(4/10) + √(9/10) = 2/√10 + 3/√10 = 5/√10.\nPayda: √(1/10) - √(36/10) = 1/√10 - 6/√10 = -5/√10.\nBölme işlemi: (5/√10) / (-5/√10) = -1'dir.",
    answers: [
      { text: "1", ok: false },
      { text: "-2", ok: false },
      { text: "2", ok: false },
      { text: "-1", ok: true },
      { text: "-3", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t1_q11.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t1_q11.jpg",
    diff: 3,
    expl: "1'den başlayan ardışık tek sayıların toplamı (1+3+5+...+(2n-1) = n²) formülüyle bulunur.\nPay: 1+3+...+11. Son terim 2n-1 = 11 => 2n = 12 => n=6. Toplam n² = 36. √(36) = 6.\nPayda: 1+3+...+23. Son terim 2n-1 = 23 => 2n = 24 => n=12. Toplam n² = 144. √(144) = 12.\nSonuç: 6 / 12 = 1/2.",
    answers: [
      { text: "2", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1/4", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "x ve y pozitif tam sayılar olmak üzere\nx = ∛(20 · y)\neşitliği veriliyor.\nBuna göre, x + y en az kaçtır?",
    diff: 2,
    expl: "Eşitliğin her iki tarafının küpünü alırsak: x³ = 20 · y => x³ = 2² · 5 · y. Eşitliğin sol tarafı bir tam küp olduğu için sağ tarafı da tam küp yapacak en küçük y değerini bulmalıyız. 2'nin üssünü 3 yapmak için bir tane 2'ye, 5'in üssünü 3 yapmak için iki tane 5'e (5²) ihtiyacımız var. O halde en küçük y = 2 · 5² = 50'dir. \nBu durumda x³ = 2³ · 5³ = 1000 olur ve x = 10 bulunur.\nBize x + y toplamı soruluyor: 10 + 50 = 60'tır.",
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
    text: "![Köklü İşlem](QuestionsImage/koklu_t2_q1.jpg)\n\neşitliğine göre a · b çarpımı kaçtır?",
    img: "QuestionsImage/koklu_t2_q1.jpg",
    diff: 3,
    expl: "Kök dışına çıkarma işlemlerini yapalım (a, b pozitif):\nİlk terim: √(a²b²) / √b = ab / √b = a√b.\nİkinci terim: √(a³b) / √a = a√(ab) / √a = a√b.\nToplarsak: a√b + a√b = 2a√b.\nEşitlik: 2a√b = 3√a. Her iki tarafın karesini alalım: 4a²b = 9a. Her iki tarafı a'ya bölersek (a pozitif olduğundan a≠0): 4ab = 9 => ab = 9/4 bulunur.",
    answers: [
      { text: "3/2", ok: false },
      { text: "9/4", ok: true },
      { text: "4/9", ok: false },
      { text: "1", ok: false },
      { text: "2/3", ok: false }
    ]
  },
  {
    text: "√(4 - √7)\n\nişleminin sonucu aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İfadeyi √(a - 2√b) kalıbına getirmek için içeriyi 2 ile çarpıp bölelim: √( (8 - 2√7) / 2 ).\nPay kısmı: √(8 - 2√7) kurala uyar. Çarpımları 7, toplamları 8 olan sayılar 7 ve 1'dir. Dışarı √7 - √1 = √7 - 1 olarak çıkar.\nPayda ise √2'dir.\nSonuç: (√7 - 1) / √2 olur.",
    answers: [
      { text: "(√7 + 1) / √2", ok: false },
      { text: "(√7 - 1) / √2", ok: true },
      { text: "(√5 + 1) / √2", ok: false },
      { text: "(2√2 + 1) / √2", ok: false },
      { text: "(√14 - 2) / √2", ok: false }
    ]
  },
  {
    text: "∛(4ˣ⁺¹) = 16ˣ⁻¹\n\neşitliğine göre x kaçtır?",
    diff: 2,
    expl: "İki tarafı da 4 tabanında yazalım. \nSol taraf: 4^((x+1)/3)\nSağ taraf: (4²)ˣ⁻¹ = 4^(2x-2)\nÜsleri eşitlersek: (x+1)/3 = 2x - 2 => x + 1 = 6x - 6 => 5x = 7 => x = 7/5.",
    answers: [
      { text: "5/7", ok: false },
      { text: "1/7", ok: false },
      { text: "7/5", ok: true },
      { text: "2/5", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "√(448)\n\nsayısının yaklaşık değerinin bulunması için aşağıdakilerden hangisinin yaklaşık değeri bilinmelidir?",
    diff: 1,
    expl: "448 sayısını tam kare çarpanlarına ayıralım. 448 = 64 · 7'dir. √(448) = √(64·7) = 8√7 olur. Bu ifadenin sonucunun bulunabilmesi için √7'nin yaklaşık değerinin bilinmesi gerekir.",
    answers: [
      { text: "√3", ok: false },
      { text: "√5", ok: false },
      { text: "√2", ok: false },
      { text: "√7", ok: true },
      { text: "√11", ok: false }
    ]
  },
  {
    text: "√(204 · 210 + 9)\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Ortadaki sayıya x diyelim, yani x = 207 olsun. Bu durumda 204 = (x - 3) ve 210 = (x + 3) olur.\nİfade: √((x - 3)(x + 3) + 9) = √(x² - 9 + 9) = √(x²) = x olur.\nx = 207 olduğundan sonuç 207'dir.",
    answers: [
      { text: "207", ok: true },
      { text: "212", ok: false },
      { text: "201", ok: false },
      { text: "205", ok: false },
      { text: "213", ok: false }
    ]
  },
  {
    text: "√(2004 · 2003 - 2001 · 2006)\n\nişleminin sonucu kaçtır?",
    diff: 3,
    expl: "Değişken kullanalım. x = 2004 olsun.\n2004 = x\n2003 = x - 1\n2001 = x - 3\n2006 = x + 2\nKök içi: x(x - 1) - (x - 3)(x + 2) = (x² - x) - (x² - x - 6) = x² - x - x² + x + 6 = 6.\nSonuç: √6 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "√3", ok: false },
      { text: "√6", ok: true },
      { text: "√2", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t2_q7.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t2_q7.jpg",
    diff: 3,
    expl: "Tüm kökleri üslü sayıya çevirelim. Pay: 2^(1/3) · 2^(1/4). Payda: 2^(1/2).\nBölme ve çarpmada üsleri toplayıp çıkaralım: 1/3 + 1/4 - 1/2.\nPaydaları 12'de eşitlersek: 4/12 + 3/12 - 6/12 = 1/12.\nSonuç: 2^(1/12), yani 12. dereceden kök 2 (¹²√2)'dir.",
    answers: [
      { text: "√2", ok: false },
      { text: "⁶√2", ok: false },
      { text: "∛2", ok: false },
      { text: "¹²√2", ok: true },
      { text: "∜2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t2_q8.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t2_q8.jpg",
    diff: 2,
    expl: "Kök içindeki çıkarma işlemini yapalım: 1/36 - 1/100. Paydaları 3600'de eşitlersek: 100/3600 - 36/3600 = 64/3600.\n√(64 / 3600) = 8 / 60.\nSadeleştirirsek: (4'e böl) = 2/15 bulunur.",
    answers: [
      { text: "1/24", ok: false },
      { text: "1/8", ok: false },
      { text: "2/15", ok: true },
      { text: "2/5", ok: false },
      { text: "1/5", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t2_q9.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t2_q9.jpg",
    diff: 3,
    expl: "Kök içindeki ifade bir tam karedir. 25/36 = (5/6)² ve 9/25 = (3/5)². Bu ikisinin çarpımının 2 katına bakalım: 2 · (5/6) · (3/5) = 1'dir. O halde kök içindeki ifade (5/6 + 3/5)² açılımıdır.\nKarekök ile kare birbirini götürür: 5/6 + 3/5 işlemi kalır. Paydaları 30'da eşitlersek: 25/30 + 18/30 = 43/30 bulunur.",
    answers: [
      { text: "1/30", ok: false },
      { text: "1/6", ok: false },
      { text: "1/5", ok: false },
      { text: "43/30", ok: true },
      { text: "1/10", ok: false }
    ]
  },
  {
    text: "√(8 - 2√15) + √(5 + √24)\n\nişleminin sonucu kaçtır?",
    diff: 3,
    expl: "Birinci terim: √(8 - 2√15). Çarpımları 15, toplamları 8 olan sayılar 5 ve 3'tür. Dışarı √5 - √3 olarak çıkar.\nİkinci terim: √(5 + √24) = √(5 + 2√6). Çarpımları 6, toplamları 5 olan sayılar 3 ve 2'dir. Dışarı √3 + √2 olarak çıkar.\nToplarsak: (√5 - √3) + (√3 + √2) = √5 + √2 bulunur.",
    answers: [
      { text: "√5 - √2", ok: false },
      { text: "√3 - √2", ok: false },
      { text: "√5 - √3", ok: false },
      { text: "√5 + √2", ok: true },
      { text: "√3 + √2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t2_q11.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t2_q11.jpg",
    diff: 2,
    expl: "Kesirli kısmı eşleniğiyle (2 + √5) çarpalım:\n1 / (2 - √5) = (2 + √5) / (2² - (√5)²) = (2 + √5) / (4 - 5) = (2 + √5) / -1 = -2 - √5 olur.\nBaştaki 6 ile toplarsak: 6 - 2 - √5 = 4 - √5 bulunur.",
    answers: [
      { text: "2 + √5", ok: false },
      { text: "4 + √5", ok: false },
      { text: "4 - √5", ok: true },
      { text: "√5 - 2", ok: false },
      { text: "3 - √5", ok: false }
    ]
  },
  {
    text: "√(9 · ∛3) = 3ˣ\n\nolduğuna göre x kaçtır?",
    diff: 2,
    expl: "Sol tarafı düzenleyelim. 9'u küp kök içine alırsak 9³ = 729 olur. İçerideki 3 ile çarpılırsa ∛(729 · 3) = ∛(3⁶ · 3) = ∛(3⁷). Bu da dıştaki karekökün içinde olduğu için √(∛(3⁷)) = ⁶√(3⁷) = 3^(7/6) olur. Üsleri eşitlersek x = 7/6 bulunur.",
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
    text: "√(10 · 12 · 14 · 16 + 16)\n\nişleminin sonucu kaçtır?",
    diff: 3,
    expl: "İfadeyi 16 parantezine alırsak: √(16 · (10·12·14 + 1)) = 4 · √(1680 + 1) = 4 · √(1681). 1681 sayısı 41'in karesidir. Sonuç: 4 · 41 = 164 bulunur.",
    answers: [
      { text: "168", ok: false },
      { text: "160", ok: false },
      { text: "164", ok: true },
      { text: "158", ok: false },
      { text: "162", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t3_q2.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t3_q2.jpg",
    diff: 2,
    expl: "Payda kısmı: √(24) / √(3) = √(8) = 2√2'dir. Yanında -√6 var. Payda: 2√2 - √6.\nPay kısmı: √(18) = 3√2.\nKesir: 3√2 / (2√2 - √6). Paydayı √2 parantezine alalım: √2(2 - √3). \nPaydaki √2 ile paydadaki √2 sadeleşir. Geriye 3 / (2 - √3) kalır.\nEşleniği (2 + √3) ile çarparsak: 3(2 + √3) / (4 - 3) = 6 + 3√3 bulunur.",
    answers: [
      { text: "6 + √3", ok: false },
      { text: "6 - 3√3", ok: false },
      { text: "6 + 3√3", ok: true },
      { text: "3√3", ok: false },
      { text: "√3", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t3_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t3_q3.jpg",
    diff: 2,
    expl: "Kesirleri eşlenikleriyle çarpalım. İlk kesrin eşleniği (2√2 - 3), ikincisinin (2√2 + 3)'tür. Her ikisinin de paydası (2√2)² - 3² = 8 - 9 = -1 olur.\nPaylar: (2√2 - 3) - (2√2 + 3) = -6 olur.\nSonuç: -6 / -1 = 6'dır.",
    answers: [
      { text: "2√3", ok: false },
      { text: "√3", ok: false },
      { text: "-2√3", ok: false },
      { text: "4", ok: false },
      { text: "6", ok: true }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t3_q4.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t3_q4.jpg",
    diff: 2,
    expl: "Pay kısmı: √(50) = 5√2.\nPayda kısmı: 1/√2 + √8/3. √8 = 2√2'dir. 1/√2'yi √2/2 olarak yazarız. (√2/2) + (2√2/3). Paydaları 6'da eşitlersek: 3√2/6 + 4√2/6 = 7√2/6 olur.\nBölme işlemi: (5√2) / (7√2/6) = (5√2) · (6 / 7√2). √2'ler sadeleşir. Sonuç: 30/7 bulunur.",
    answers: [
      { text: "5/7", ok: false },
      { text: "1/7", ok: false },
      { text: "30/7", ok: true },
      { text: "2/7", ok: false },
      { text: "4/7", ok: false }
    ]
  },
  {
    text: "√(10 - √19) · √(10 + √19)\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Kök dereceleri aynı olduğu için içlerini çarpabiliriz: √((10 - √19)(10 + √19)). Bu iki kare farkıdır: √(10² - (√19)²) = √(100 - 19) = √(81) = 9 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t3_q6.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t3_q6.jpg",
    diff: 2,
    expl: "Pay kısmı: 2 + √2 + √18 = 2 + √2 + 3√2 = 2 + 4√2.\nPayda kısmı: 4 + √128 = 4 + 8√2.\nİfadeyi oranlarsak: (2 + 4√2) / (4 + 8√2). Paydayı 2 parantezine alırsak: 2(2 + 4√2) elde edilir. Pay ile payda sadeleşir, geriye 1/2 kalır.",
    answers: [
      { text: "√2/3", ok: false },
      { text: "√2/2", ok: false },
      { text: "√2", ok: false },
      { text: "1/2", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "![Köklü İşlem](QuestionsImage/koklu_t3_q7.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/koklu_t3_q7.jpg",
    diff: 2,
    expl: "Önce kesri eşleniği (√7 + √5) ile çarpalım:\nPay: (√7 + √5)² = 7 + 5 + 2√(35) = 12 + 2√35.\nPayda: (√7)² - (√5)² = 7 - 5 = 2.\nKesir: (12 + 2√35) / 2 = 6 + √35 olur.\nYanındaki -√35 ile işleme sokarsak: 6 + √35 - √35 = 6 kalır.",
    answers: [
      { text: "6", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "a = 2 - √5 olduğuna göre,\na · (a + √5) · (a + 2√5)\nçarpımının sonucu kaçtır?",
    diff: 2,
    expl: "a yerine (2 - √5) değerini koyalım:\n1. çarpan: 2 - √5\n2. çarpan: 2 - √5 + √5 = 2\n3. çarpan: 2 - √5 + 2√5 = 2 + √5\nÇarpım: (2 - √5) · 2 · (2 + √5). İki kare farkından: 2 · (2² - (√5)²) = 2 · (4 - 5) = 2 · (-1) = -2 bulunur.",
    answers: [
      { text: "2", ok: false },
      { text: "-1", ok: false },
      { text: "-2", ok: true },
      { text: "1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "x = √3\ny = ∛5\nz = ∜7\n\nsayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 3,
    expl: "Kök derecelerini eşitlemek için 2, 3 ve 4'ün EKOK'u olan 12'de genişletelim.\nx = 3^(1/2) = 3^(6/12) = ¹²√(3⁶) = ¹²√(729)\ny = 5^(1/3) = 5^(4/12) = ¹²√(5⁴) = ¹²√(625)\nz = 7^(1/4) = 7^(3/12) = ¹²√(7³) = ¹²√(343)\nKök içlerini kıyaslarsak: 343 < 625 < 729 olduğundan sıralama z < y < x şeklindedir.",
    answers: [
      { text: "x < y < z", ok: false },
      { text: "x < z < y", ok: false },
      { text: "z < y < x", ok: true },
      { text: "z < x < y", ok: false },
      { text: "y < x < z", ok: false }
    ]
  },
  {
    text: "a = 4√3\nb = 5√2\nc = 3√10\n\nsayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 1,
    expl: "Katsayıları kök içine alarak karelerini bulalım:\na = √(4² · 3) = √(48)\nb = √(5² · 2) = √(50)\nc = √(3² · 10) = √(90)\nSıralama 48 < 50 < 90 olduğundan a < b < c şeklindedir.",
    answers: [
      { text: "a < c < b", ok: false },
      { text: "a < b < c", ok: true },
      { text: "c < a < b", ok: false },
      { text: "d < c < a", ok: false },
      { text: "b < c < a", ok: false }
    ]
  },
  {
    text: "a = √7 / 2\nb = √5 / 3\nc = √3 / 4\n\nsayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 2,
    expl: "Paydaları da kök içine alarak kesirlerin karesine bakalım:\na² = 7/4 = 1.75\nb² = 5/9 = 0.555...\nc² = 3/16 = 0.1875\n0.1875 < 0.555... < 1.75 olduğundan sıralama c < b < a şeklindedir.",
    answers: [
      { text: "c < b < a", ok: true },
      { text: "c < a < b", ok: false },
      { text: "b < c < a", ok: false },
      { text: "b < a < c", ok: false },
      { text: "a < c < b", ok: false }
    ]
  },
  {
    text: "a = √7 + √5\nb = √10 + √2\nc = 3 + √3\n\nsayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 3,
    expl: "C sayısını köklü yazalım: c = √9 + √3. Sayıların karelerini alarak kıyaslayalım:\na² = 7 + 5 + 2√(35) = 12 + 2√(35)\nb² = 10 + 2 + 2√(20) = 12 + 2√(20)\nc² = 9 + 3 + 2√(27) = 12 + 2√(27)\nTam kısımlar eşittir (12). Kök içindeki değerleri kıyaslarsak 20 < 27 < 35'tir. Bu yüzden b < c < a sıralaması elde edilir.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "a < c < b", ok: false },
      { text: "b < c < a", ok: true },
      { text: "b < a < c", ok: false },
      { text: "c < a < b", ok: false }
    ]
  },

// ─── KÖKLÜ SAYILAR TEST - 4 ───────────────────────────────────────────────────

  {
    text: "(√(6 + √20))ˣ = 4\n\nolduğuna göre (√5 - 1)ˣ ifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İlk ifadeyi düzenleyelim: √(6 + √20) = √(6 + 2√5). Çarpımları 5, toplamları 6 olan sayılar 5 ve 1'dir. İfade dışarı (√5 + 1) olarak çıkar. Yani (√5 + 1)ˣ = 4'tür.\nBizden (√5 - 1)ˣ isteniyor, buna y diyelim.\nİki ifadeyi taraf tarafa çarparsak: ((√5 + 1)·(√5 - 1))ˣ = 4 · y. İki kare farkından: (5 - 1)ˣ = 4 · y => 4ˣ = 4y => y = 4ˣ / 4 = 4ˣ⁻¹ bulunur.",
    answers: [
      { text: "4ˣ⁻¹", ok: true },
      { text: "4ˣ⁺¹", ok: false },
      { text: "4ˣ", ok: false },
      { text: "2²ˣ⁺⁴", ok: false },
      { text: "2²ˣ⁻⁴", ok: false }
    ]
  },
  {
    text: "a = ∛7 - ∛2\nb = ∛49 + ∛14 + ∛4\n\nolduğuna göre a · b çarpımı kaçtır?",
    diff: 2,
    expl: "Çarpmayı dikkatli incelersek, b ifadesi a'daki terimlerin kareleri ve çarpımlarıdır. Yani (x - y)(x² + xy + y²) açılımıdır. Bu da (x³ - y³) özdeşliğidir.\nx = ∛7 ve y = ∛2 olduğuna göre: a · b = (∛7)³ - (∛2)³ = 7 - 2 = 5 bulunur.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "A = √(789 · 791 + 1)\nB = √(393 · 397 + 4)\n\nolduğuna göre A / B oranı kaçtır?",
    diff: 3,
    expl: "A ifadesinde 790'a x dersek: (x-1)(x+1)+1 = x²-1+1 = x². A = √(790²) = 790.\nB ifadesinde 395'e y dersek: (y-2)(y+2)+4 = y²-4+4 = y². B = √(395²) = 395.\nA / B oranı: 790 / 395 = 2 bulunur.",
    answers: [
      { text: "17/4", ok: false },
      { text: "13/3", ok: false },
      { text: "11/2", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: true }
    ]
  },
  {
    text: "x - 4√x = 6 olduğuna göre\nx - 24/√x\nifadesinin değeri kaçtır?",
    diff: 3,
    expl: "x - 6 = 4√x. Her tarafı √x'e bölelim: √x - 6/√x = 4. Bu ifadeyi 4 ile çarpalım: 4√x - 24/√x = 16. \nSoruda verilen 4√x = x - 6 ifadesini burada yerine koyalım: (x - 6) - 24/√x = 16. Düzenlersek: x - 24/√x = 22 bulunur.",
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
    text: "20/5 - a/3 < 2\n\neşitsizliğini sağlayan a'nın değer aralığı aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "20/5 = 4'tür. 4 - a/3 < 2 => 4 - 2 < a/3 => 2 < a/3. Her iki tarafı 3 ile çarparsak: 6 < a elde edilir. Dolayısıyla a, (6, ∞) aralığındadır.",
    answers: [
      { text: "(-∞, 2)", ok: false },
      { text: "(-∞, 15)", ok: false },
      { text: "(0, 30)", ok: false },
      { text: "(6, ∞)", ok: true },
      { text: "(-∞, 30)", ok: false }
    ]
  },
  {
    text: "a ve b tam sayı olmak üzere\n7 ≤ a < 21\n8 < b ≤ 24\n\nolduğuna göre (a + 3) / (b - 4) ifadesinin en küçük değeri kaçtır?",
    diff: 2,
    expl: "Kesrin en küçük olması için payın en küçük, paydanın ise en büyük pozitif değerleri alması gerekir. a ve b tam sayı dendiği için a'yı en küçük 7, b'yi ise en büyük 24 alırız. \n(a + 3) / (b - 4) = (7 + 3) / (24 - 4) = 10 / 20 = 1/2.",
    answers: [
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "a + c = 8/9\nb + c = 9/10\na + b = 10/11\n\neşitliklerine göre a, b ve c'nin doğru sıralanışı hangisidir?",
    diff: 2,
    expl: "Kesirleri kıyaslayalım: 8/9, 9/10, 10/11 hepsi bir bütüne (1'e) yakın basit kesirlerdir. Pay ve payda farkı 1 olduğu için sayılar büyüdükçe kesrin değeri artar: 8/9 < 9/10 < 10/11.\nYani (a+c) < (b+c) < (a+b) olur.\n1) (a+c) < (b+c) => a < b.\n2) (b+c) < (a+b) => c < a.\nSıralama birleştirilirse c < a < b bulunur.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "a < c < b", ok: false },
      { text: "c < a < b", ok: true },
      { text: "b < a < c", ok: false },
      { text: "b < c < a", ok: false }
    ]
  },
  {
    text: "x + y = 1/15\nx + z = 1/30\ny + z = 1/45\n\nolduğuna göre x, y, z küçükten büyüğe nasıl sıralanır?",
    diff: 2,
    expl: "Kesirleri kıyaslarsak: 1/15 > 1/30 > 1/45'tir.\nYani (x+y) > (x+z) > (y+z).\n1) (x+y) > (x+z) => y > z.\n2) (x+z) > (y+z) => x > y.\nBüyükten küçüğe x > y > z'dir. Küçükten büyüğe z < y < x olur.",
    answers: [
      { text: "x < y < z", ok: false },
      { text: "x < z < y", ok: false },
      { text: "y < x < z", ok: false },
      { text: "z < y < x", ok: true },
      { text: "z < x < y", ok: false }
    ]
  },
  {
    text: "3 / (2x - 1) < 5 / 3\n\neşitsizliğindeki x pozitif bir tam sayı olduğuna göre x'in en küçük değeri kaçtır?",
    diff: 2,
    expl: "x pozitif tam sayı ise (x≥1) payda 2x-1 her zaman pozitiftir. Eşitsizliği ters çevirirsek işaret yön değiştirir: (2x - 1) / 3 > 3 / 5. İçler dışlar çarpımı yaparsak (pozitif oldukları için): 10x - 5 > 9 => 10x > 14 => x > 1.4. Bu şartı sağlayan en küçük tam sayı 2'dir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "(3x + 1)² ≤ 16\n\neşitsizliğini sağlayan x tam sayı değerlerinin toplamı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Karesi 16'dan küçük veya eşit olan sayılar -4 ile 4 arasındadır. -4 ≤ 3x + 1 ≤ 4. Her taraftan 1 çıkarırsak: -5 ≤ 3x ≤ 3. Her tarafı 3'e bölersek: -5/3 ≤ x ≤ 1. Bu aralıktaki tam sayılar -1, 0 ve 1'dir. Toplamları: -1 + 0 + 1 = 0'dır.",
    answers: [
      { text: "-1", ok: false },
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "x < |x| < x²\n\neşitsizliğine göre x'in değer aralığı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İlk eşitsizlik x < |x| olduğuna göre x sıfırdan küçük negatif bir sayıdır. Bu durumda |x| dışarıya -x olarak çıkar.\nİkinci eşitsizlik -x < x² olur. İfadeyi düzenlersek x² + x > 0 => x(x + 1) > 0. Kökler 0 ve -1'dir. Tabloya göre pozitif yapan değerler x > 0 veya x < -1'dir. Ancak x'in negatif olduğunu en başta bulmuştuk. O halde sadece x < -1 şartı geçerlidir. Aralık (-∞, -1) olur.",
    answers: [
      { text: "(0, 1)", ok: false },
      { text: "(-1, 0)", ok: false },
      { text: "(-∞, 1)", ok: false },
      { text: "(-∞, -1)", ok: true },
      { text: "(-∞, 0]", ok: false }
    ]
  },
  {
    text: "Karesi kendisinden küçük olan bir sayının 3 katının 5 fazlası hangi değer aralığında yer alır?",
    diff: 2,
    expl: "Karesi kendisinden küçük olan sayılar (x² < x) sadece 0 ile 1 arasındaki pozitif basit kesirlerdir (0 < x < 1). Bizden 3x + 5'in aralığı isteniyor. Eşitsizliği 3 ile çarparsak: 0 < 3x < 3. Her tarafa 5 eklersek: 5 < 3x + 5 < 8 bulunur. Yani (5, 8) aralığındadır.",
    answers: [
      { text: "(3, 5)", ok: false },
      { text: "(3, 8)", ok: false },
      { text: "(0, 15)", ok: false },
      { text: "(5, 8)", ok: true },
      { text: "(5, 15)", ok: false }
    ]
  },
  {
    text: "Çağrı, Çağatay ve Çağlar mevsimlik işçi olarak bir bahçeden vişne toplamaktadır. Çağrı ve Çağlar bir ağacı 3 saatte, Çağatay ve Çağlar bir ağacı 5 saatte, Çağrı ve Çağatay bir ağacı 4 saatte topladıklarına göre; toplama hızları yavaştan hızlıya doğru hangisinden doğrudur?",
    diff: 3,
    expl: "İşçi hızlarını S1(Çağrı), S2(Çağatay), S3(Çağlar) olarak alalım. Birlikte çalışma hızları şöyledir:\nS1 + S3 = 1/3 (~0.33)\nS2 + S3 = 1/5 (0.2)\nS1 + S2 = 1/4 (0.25)\nEn hızlı ikili (Çağrı-Çağlar) olduğu için en yavaş olan onların dışındaki Çağatay'dır. En yavaş ikili (Çağatay-Çağlar) olduğu için en hızlı olan onların dışındaki Çağrı'dır. Hızlara göre sıralama Çağrı > Çağlar > Çağatay şeklindedir. Soru bizden yavaştan hızlıya istiyor: Çağatay - Çağlar - Çağrı.",
    answers: [
      { text: "Çağrı - Çağatay - Çağlar", ok: false },
      { text: "Çağrı - Çağlar - Çağatay", ok: false },
      { text: "Çağatay - Çağlar - Çağrı", ok: true },
      { text: "Çağatay - Çağrı - Çağlar", ok: false },
      { text: "Çağlar - Çağrı - Çağatay", ok: false }
    ]
  },
  {
    text: "a < 0 < b < c\n\nolduğuna göre aşağıdakilerden hangisi negatiftir?",
    diff: 2,
    expl: "a negatif, b ve c pozitiftir. Seçenekleri inceleyelim:\nA) (a+b)² / c => Pozitif / Pozitif = Pozitif.\nB) a²b / (b-a) => (+·+) / (+) = Pozitif.\nC) (c-b) / (a(a-1)) => (+) / (-·-) = Pozitif / Pozitif = Pozitif.\nD) |a-c| / ab => Pozitif / (-·+) = Pozitif / Negatif = Negatif.\nCevap D şıkkıdır.",
    answers: [
      { text: "((a+b)²) / c", ok: false },
      { text: "(a² · b) / (b-a)", ok: false },
      { text: "(c-b) / (a(a-1))", ok: false },
      { text: "|a-c| / ab", ok: true },
      { text: "abc / (b-c)", ok: false }
    ]
  },
  {
    text: "a · b² > 0\nb⁴ · c³ < 0\nabc / b² < 0\n\neşitsizliklerine göre a, b ve c'nin işaretleri hangisidir?",
    diff: 3,
    expl: "İlk eşitsizlikte b² daima pozitiftir (b≠0). Bu durumda a > 0 (+) olmalıdır.\nİkinci eşitsizlikte b⁴ pozitiftir. Çarpımın negatif olması için c³ < 0, yani c < 0 (-) olmalıdır.\nÜçüncü eşitsizlikte abc / b² < 0 verilmiştir. a(+) ve c(-) olduğu için a·c negatiftir. (- · b) / (+) < 0 olabilmesi için b'nin pozitif (+) olması gerekir.\nSırasıyla işaretler: +, +, - 'dir.",
    answers: [
      { text: "-, +, +", ok: false },
      { text: "-, -, +", ok: false },
      { text: "+, -, -", ok: false },
      { text: "+, +, +", ok: false },
      { text: "+, +, -", ok: true }
    ]
  },
  {
    text: "a negatif bir tam sayı olmak üzere,\n\n5ab < 7(a - 3) + 21\n\neşitsizliğine göre b'nin en küçük tam sayı değeri kaçtır?",
    diff: 2,
    expl: "Eşitsizliğin sağ tarafını düzenleyelim: 7a - 21 + 21 = 7a. Yani 5ab < 7a elde edilir. Soruda a'nın negatif bir tam sayı olduğu belirtilmiştir. Eşitsizliğin her iki tarafını negatif bir sayıya (a'ya) bölersek eşitsizlik yön değiştirir: 5b > 7 => b > 7/5 => b > 1.4. Bu şarta uyan en küçük b tam sayısı 2'dir.",
    answers: [
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "a ve b pozitif tam sayılar için a < b ve a = 2b + bc olduğuna göre c'nin değer aralığı aşağıdakilerden hangisi olabilir?",
    diff: 3,
    expl: "a = b(2+c) olarak yazabiliriz. a ve b pozitif olduğundan b'ye bölelim: a/b = 2+c. Soruda a < b verildiği için a/b kesri 1'den küçüktür (a/b < 1). Bu yüzden 2+c < 1 => c < -1 olur. Ayrıca a pozitif olduğu için 2+c > 0 olmalıdır => c > -2. Bu iki durumu birleştirirsek: -2 < c < -1 aralığı bulunur.",
    answers: [
      { text: "(-∞, -1)", ok: false },
      { text: "(0, 1)", ok: false },
      { text: "(-2, -1)", ok: true },
      { text: "[-2, ∞)", ok: false },
      { text: "(-∞, -2)", ok: false }
    ]
  }
];
