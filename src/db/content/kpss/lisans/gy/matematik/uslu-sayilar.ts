import type { McQ } from "../../../../types";

export const MAT_USLU_SAYILAR_T3_T4: McQ[] = [
  {
    text: "x ve y birer tam sayıdır.\n\n5³ˣ⁻ʸ⁻⁴ = 7²ˣ⁺ʸ⁻¹\n\nolduğuna göre x · y çarpımı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Tabanları aralarında asal olan iki üslü sayının eşit olabilmesi için her iki üssün de zorunlu olarak 0'a eşit olması gerekir (Çünkü 5⁰ = 7⁰ = 1'dir). \n3x - y - 4 = 0 => 3x - y = 4\n2x + y - 1 = 0 => 2x + y = 1\nTaraf tarafa toplarsak 5x = 5 => x = 1. Herhangi bir denklemde x yerine 1 yazarsak y = -1 bulunur. Bizden çarpımları isteniyor: 1 · (-1) = -1.",
    answers: [
      { text: "-2", ok: false },
      { text: "-1", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "a ve b birer tam sayıdır.\n\n3ᵃ⁺⁵ = 2²ᵇ⁺ᵃ⁺³\n\nolduğuna göre a + b toplamı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Bir önceki sorudaki mantıkla; 3 ve 2 aralarında asal olduğundan üsleri sıfır olmak zorundadır. a + 5 = 0 => a = -5. İkinci üs: 2b + a + 3 = 0. a yerine -5 yazarsak: 2b - 5 + 3 = 0 => 2b = 2 => b = 1. a + b toplamı = -5 + 1 = -4.",
    answers: [
      { text: "-7", ok: false },
      { text: "-6", ok: false },
      { text: "-5", ok: false },
      { text: "-4", ok: true },
      { text: "-3", ok: false }
    ]
  },
  {
    text: "3ᵃ = 2, 5ᵇ = 3\n\nolduğuna göre,\n(3²ᵃ + 5ᵇ - 2)ᵇ\nifadesinin değeri kaçtır?",
    diff: 3,
    expl: "Öncelikle parantez içindeki 3²ᵃ ifadesini bulalım. 3²ᵃ = (3ᵃ)²'dir. 3ᵃ = 2 olduğuna göre 2² = 4'tür. 5ᵇ = 3 olarak verilmiş. Parantez içindeki işlem: (4 + 3 - 2) = 5 olur. Dışarıdaki üs b olduğuna göre işlem 5ᵇ şekline gelir. Soruda 5ᵇ = 3 olarak verildiği için sonuç 3'tür.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "6", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "2ˣ = a, 3ˣ = b, 5ˣ = c\n\nolduğuna göre (120)ˣ ifadelerinin a, b ve c türünden eşiti aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "120 sayısını asal çarpanlarına ayırırsak: 120 = 8 · 3 · 5 = 2³ · 3 · 5 olur. (120)ˣ = (2³ · 3 · 5)ˣ = (2ˣ)³ · 3ˣ · 5ˣ şeklinde dağıtılır. Verilen harfleri yerlerine yazarsak a³ · b · c elde edilir.",
    answers: [
      { text: "a³ · b · c", ok: true },
      { text: "a² · b · c²", ok: false },
      { text: "a · b²c²", ok: false },
      { text: "3abc", ok: false },
      { text: "3a + b + c", ok: false }
    ]
  },
  {
    text: "2ˣ = 3, 2ʸ = 9\n\nolduğuna göre (x + y) / (y - x) işleminin sonucu kaçtır?",
    diff: 2,
    expl: "2ʸ = 9 ifadesini 2ʸ = 3² şeklinde yazabiliriz. 2ˣ = 3 olduğuna göre 3 yerine 2ˣ yazarsak: 2ʸ = (2ˣ)² = 2²ˣ elde edilir. Tabanlar eşit olduğundan y = 2x olur. Sorulan ifadede y yerine 2x yazarsak: (x + 2x) / (2x - x) = 3x / x = 3 bulunur.",
    answers: [
      { text: "-3", ok: false },
      { text: "-1", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true }
    ]
  },
  {
    text: "12ˣ = 75\n\nolduğuna göre 3ˣ⁻¹ · 2²ˣ⁺¹ ifadesinin değeri kaçtır?",
    diff: 3,
    expl: "12ˣ = 75 denklemini (3 · 4)ˣ = 75 => 3ˣ · 2²ˣ = 75 şeklinde açabiliriz. İstenen ifadeyi düzenleyelim: 3ˣ⁻¹ · 2²ˣ⁺¹ = (3ˣ / 3) · (2²ˣ · 2) = (3ˣ · 2²ˣ) · (2 / 3). İlk kısmın 75 olduğu verilmiştir. 75 · (2 / 3) = 25 · 2 = 50 bulunur.",
    answers: [
      { text: "150", ok: false },
      { text: "75", ok: false },
      { text: "50", ok: true },
      { text: "25", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "2ˣ · 12⁻ˣ = 6⁻³\n\nolduğuna göre x kaçtır?",
    diff: 2,
    expl: "Sol tarafı düzenlersek: 2ˣ / 12ˣ = (2/12)ˣ = (1/6)ˣ = 6⁻ˣ olur. Eşitlik 6⁻ˣ = 6⁻³ haline gelir. Üsleri eşitlersek x = 3 bulunur.",
    answers: [
      { text: "3", ok: true },
      { text: "-1", ok: false },
      { text: "1", ok: false },
      { text: "-3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "![Üslü Eşitsizlik](QuestionsImage/uslu_t3_q9.jpg)\n\neşitsizliğini sağlayan kaç farklı negatif tam sayısı vardır?",
    img: "QuestionsImage/uslu_t3_q9.jpg",
    diff: 3,
    expl: "Sağ tarafı 3/4 tabanında yazalım. 16/9 = (4/3)² = (3/4)⁻²'dir. Sağ taraf: ((3/4)⁻²)⁶⁺ˣ = (3/4)⁻¹²⁻²ˣ olur. Eşitsizlik: (3/4)²ˣ⁻⁴ ≤ (3/4)⁻¹²⁻²ˣ. Taban (3/4) basit kesir (0 ile 1 arasında) olduğu için üslerde eşitsizlik yön değiştirir: 2x - 4 ≥ -12 - 2x => 4x ≥ -8 => x ≥ -2. Bu şarta uyan negatif tam sayılar -2 ve -1'dir. Toplam 2 tanedir.",
    answers: [
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "6", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "![Üslü Eşitsizlik](QuestionsImage/uslu_t3_q10.jpg)\n\neşitsizliğini sağlayan en büyük tam sayı değeri kaçtır?",
    img: "QuestionsImage/uslu_t3_q10.jpg",
    diff: 2,
    expl: "Sağ tarafı (5/4) tabanında yazalım. 4/5 = (5/4)⁻¹'dir. Sağ taraf: ((5/4)⁻¹)ˣ⁻⁵ = (5/4)⁵⁻ˣ olur. Eşitsizlik: (5/4)ˣ⁺³ < (5/4)⁵⁻ˣ. Taban (5/4) bileşik kesir (1'den büyük) olduğu için eşitsizlik yön değiştirmez: x + 3 < 5 - x => 2x < 2 => x < 1. Bu şartı sağlayan en büyük tam sayı 0'dır.",
    answers: [
      { text: "-2", ok: false },
      { text: "-1", ok: false },
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t3_q11.jpg)\n\nYukarıdaki eşitliğe göre verilen ifadenin eşiti aşağıdakilerden hangisidir?",
    img: "QuestionsImage/uslu_t3_q11.jpg",
    diff: 3,
    expl: "İstenilen ifade: 4^(x/y) - 9^(y/x). 4 = 2² ve 9 = 3² olduğundan bu ifade (2^(x/y))² - (3^(y/x))² şeklindedir. Verilen denklem 2ˣ = 3ʸ 'den: 2^(x/y) = 3 ve 3^(y/x) = 2 elde edilir. Yerine koyarsak: 3² - 2² = 9 - 4 = 5 bulunur.",
    answers: [
      { text: "-3", ok: false },
      { text: "-1", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t3_q13.jpg)\n\nYukarıdaki ifadenin sonucu kaçtır?",
    img: "QuestionsImage/uslu_t3_q13.jpg",
    diff: 3,
    expl: "Paydalardaki 4ˣ⁻² terimine 'u' diyelim. İkinci paydadaki 4²⁻ˣ terimi 1/u olur. İfade: 5/(1-u) + 5/(1-1/u) şeklini alır. İkinci kesri düzenlersek: 5 / ((u-1)/u) = 5u / (u-1) = -5u / (1-u) olur. Kesirleri toplarsak: (5 - 5u) / (1-u) = 5(1-u) / (1-u) = 5 elde edilir.",
    answers: [
      { text: "5", ok: true },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "![Üslü Denklik](QuestionsImage/uslu_t3_q14.jpg)\n\neşitliğini sağlayan x kaçtır?",
    img: "QuestionsImage/uslu_t3_q14.jpg",
    diff: 3,
    expl: "Eşitliğin sol tarafındaki terimler (2ⁿ+1) formundadır. Bu seriyi (2⁴ - 1) ile yani 15 ile çarparsak iki kare farkı zincirlemesi oluşur. (2⁴ - 1)(2⁴ + 1)(2⁸ + 1)(2¹⁶ + 1) = (2⁸ - 1)(2⁸ + 1)(2¹⁶ + 1) = (2¹⁶ - 1)(2¹⁶ + 1) = 2³² - 1. Sorudaki sağ taraftaki 15'i sol tarafa çarpan olarak atarsak tam olarak bu zincir oluşur. Yani 2³² - 1 = 32³²ˣ - 1 olur. 32³²ˣ = (2⁵)³²ˣ = 2¹⁶⁰ˣ. Buradan 160x = 32 => x = 32 / 160 = 1 / 5 bulunur.",
    answers: [
      { text: "1/10", ok: false },
      { text: "1/5", ok: true },
      { text: "1", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "![Üslü Denklik](QuestionsImage/uslu_t3_q16.jpg)\n\nolduğuna göre verilen ifadenin değeri kaçtır?",
    img: "QuestionsImage/uslu_t3_q16.jpg",
    diff: 3,
    expl: "İstenen ifade: 8^(1/x) + 4^(1/y). Verilen denklemlerden: 3ˣ = 2 => 2^(1/x) = 3'tür. 5ʸ = 2 => 2^(1/y) = 5'tir. İfadeyi düzenleyelim: 8^(1/x) = (2³)^(1/x) = (2^(1/x))³ = 3³ = 27'dir. İkinci kısım: 4^(1/y) = (2²)^(1/y) = (2^(1/y))² = 5² = 25'tir. Toplamları 27 + 25 = 52'dir.",
    answers: [
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "44", ok: false },
      { text: "48", ok: false },
      { text: "52", ok: true }
    ]
  }
];
