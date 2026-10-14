import type { McQ } from "../../../../types";

export const MAT_ISLEM_T1: McQ[] = [
  {
    text: "<p>R<sup>2</sup>'den R<sup>2</sup>'ye tanımlı</p><p><b>(x, y) * (z, t) = (x + z, y<sup>t</sup>) işlemine göre (−3, 1) * (4, −1) işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "Birinci bileşenler toplanır, ikinci bileşende ilki taban ikincisi üs olur: (−3, 1) * (4, −1) = (−3 + 4, 1<sup>−1</sup>) = (1, 1).",
    answers: [
      { text: "(−1, −1)", ok: false },
      { text: "(1, −1)", ok: false },
      { text: "(1, 1)", ok: true },
      { text: "(−1, 1)", ok: false },
      { text: "(1, 0)", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde yukarıdaki tabloda tanımlanan * işlemine göre;</p><p><b>(1 * 3) * 2 işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q2.jpg",
    diff: 1,
    expl: "Tablodan 1 * 3 = 5 (1. satır, 3. sütun). Sonra 5 * 2 = 3 (5. satır, 2. sütun).",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde yukarıdaki tabloda * işlemi tanımlanmıştır.</p><p><b>2. soruda verilen tabloya göre (3<sup>−1</sup> * 3)<sup>−1</sup> * 4 işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q3.jpg",
    diff: 3,
    expl: "Tabloda 4. satır başlık satırının aynısı olduğundan birim eleman e = 4'tür. Bir elemanın tersiyle işlemi birim elemanı verir: 3<sup>−1</sup> * 3 = 4. Birim elemanın tersi kendisidir: 4<sup>−1</sup> = 4. Sonuç: 4 * 4 = 4.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>R'de ⊙ işlemi,</p><p>a ⊙ b = a<sup>b</sup> − ab şeklinde tanımlanmıştır.</p><p><b>Buna göre (2 ⊙ 3) ⊙ k = 22 olduğuna göre k kaçtır?</b></p>",
    diff: 2,
    expl: "2 ⊙ 3 = 2<sup>3</sup> − 2 · 3 = 8 − 6 = 2. Buradan 2 ⊙ k = 2<sup>k</sup> − 2k = 22 olmalıdır. k = 5 için 32 − 10 = 22 sağlanır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p>R'den R'ye tanımlanan Δ işlemi;</p><p>a Δ b = (a · b)/(a + b) şeklindedir.</p><p><b>Buna göre, (3 Δ 6) Δ 4 işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "3 Δ 6 = 18/9 = 2. Sonra 2 Δ 4 = 8/6 = 4/3.",
    answers: [
      { text: "1", ok: false },
      { text: "4/3", ok: true },
      { text: "5/3", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p><b>R'de tanımlı a * b = a + b + 1 işleminin birim elemanı kaçtır?</b></p>",
    diff: 2,
    expl: "Birim eleman e için a * e = a olmalıdır: a + e + 1 = a ⇒ e = −1.",
    answers: [
      { text: "−2", ok: false },
      { text: "−1", ok: true },
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>R'de tanımlanan * işlemi</p><p>a * b = a + b − 2 şeklindedir.</p><p><b>Buna göre 4'ün tersi kaçtır?</b></p>",
    diff: 2,
    expl: "Birim eleman: a + e − 2 = a ⇒ e = 2. 4'ün tersi x ise 4 * x = 2 ⇒ 4 + x − 2 = 2 ⇒ x = 0.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Reel sayılarda tanımlı □ işlemi;</p><p>a □ b = 3a − b + 1 şeklinde tanımlanmıştır.</p><p><b>O halde, (2 □ 3) □ 5 işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "2 □ 3 = 6 − 3 + 1 = 4. Sonra 4 □ 5 = 12 − 5 + 1 = 8.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>R'de tanımlı ⊕ işlemi,</p><p>a ⊕ b = (a + b)/2 + 5 şeklinde tanımlanıyor.</p><p><b>Buna göre 4 ⊕ 7 = 5 ⊕ k eşitliğini sağlayan k değeri kaçtır?</b></p>",
    diff: 2,
    expl: "4 ⊕ 7 = 11/2 + 5 ve 5 ⊕ k = (5 + k)/2 + 5. Eşitlikten 11 = 5 + k ⇒ k = 6.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>R'de tanımlı * ve Δ işlemleri;</p><p>a * b = a − b + 4<br>a □ b = b − a − 4 şeklinde tanımlanıyor.</p><p><b>Buna göre; (1 * 5) □ (4 □ (−3)) işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1 * 5 = 1 − 5 + 4 = 0. 4 □ (−3) = −3 − 4 − 4 = −11. Sonuç: 0 □ (−11) = −11 − 0 − 4 = −15.",
    answers: [
      { text: "−9", ok: false },
      { text: "−15", ok: true },
      { text: "−5", ok: false },
      { text: "−3", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>R'de tanımlanan Δ işlemi;</p><p>6/a Δ b/4 = 3a + ab − 2b şeklinde tanımlanıyor.</p><p><b>Buna göre, 1 Δ 9 işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "6/a = 1 ⇒ a = 6 ve b/4 = 9 ⇒ b = 36. 1 Δ 9 = 3 · 6 + 6 · 36 − 2 · 36 = 18 + 216 − 72 = 162.",
    answers: [
      { text: "82", ok: false },
      { text: "91", ok: false },
      { text: "102", ok: false },
      { text: "141", ok: false },
      { text: "162", ok: true }
    ]
  },
  {
    text: "<p>a * b = 4a − 7b − 7(b * a) ise</p><p><b>4 * 7 işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "x = 4 * 7 ve y = 7 * 4 olsun. x = 16 − 49 − 7y = −33 − 7y; y = 28 − 28 − 7x = −7x. Yerine yazılırsa x = −33 + 49x ⇒ 48x = 33 ⇒ x = 11/16.",
    answers: [
      { text: "1/3", ok: false },
      { text: "1/2", ok: false },
      { text: "1", ok: false },
      { text: "5/3", ok: false },
      { text: "11/16", ok: true }
    ]
  },
  {
    text: "<p>a * b = ekok(2a, 3b)<br>a Δ b = ebob(2a, 4b) olmak üzere</p><p><b>(5 * 3) Δ 24 işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "5 * 3 = ekok(10, 9) = 90. 90 Δ 24 = ebob(180, 96) = 12.",
    answers: [
      { text: "12", ok: true },
      { text: "24", ok: false },
      { text: "36", ok: false },
      { text: "72", ok: false },
      { text: "180", ok: false }
    ]
  },
  {
    text: "<p>R'de tanımlanan * işlemi değişme özelliğine sahip olmak üzere,</p><p><b>x Δ y = x + y + 4(y Δ x) şeklinde tanımlandığına göre −3 Δ 0 işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "İşlem değişmeli olduğundan x Δ y = y Δ x = u alınırsa u = x + y + 4u ⇒ u = −(x + y)/3. Buna göre −3 Δ 0 = −(−3 + 0)/3 = 1.",
    answers: [
      { text: "−3", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p><b>x □ y = 3x + 3y − 3xy − 2 işleminin yutan elemanı kaçtır?</b></p>",
    diff: 3,
    expl: "Yutan eleman k için x □ k = k olmalıdır: 3x + 3k − 3xk − 2 = k ⇒ x(3 − 3k) + 2k − 2 = 0. Her x için sağlanması için 3 − 3k = 0 ⇒ k = 1 (sabit terim de 2 − 2 = 0 olur).",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p><b>a Δ b = 2a + 2b + a · b + 2 işlemine göre hangi elemanın tersi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Tersi olmayan eleman yutan elemandır. a Δ k = k ⇒ 2a + 2k + ak + 2 = k ⇒ a(2 + k) + (k + 2) = 0. Her a için sağlanması için k = −2 bulunur.",
    answers: [
      { text: "−4", ok: false },
      { text: "−2", ok: true },
      { text: "0", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: false }
    ]
  },

// ─── İŞLEM TEST - 2 ───────────────────────────────────────────────────────────

  {
    text: "<p>Tam sayılar kümesinde tanımlı</p><p>a Δ b = a · b + b işlemi tanımlanıyor.</p><p><b>Buna göre (3 Δ 2) Δ 4 işleminin sonucu kaçtır?</b></p>",
    diff: 1,
    expl: "3 Δ 2 = 6 + 2 = 8. Sonra 8 Δ 4 = 32 + 4 = 36.",
    answers: [
      { text: "10", ok: false },
      { text: "24", ok: false },
      { text: "36", ok: true },
      { text: "44", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p>1/(a □ b) = 2/(3a) + 3/(2b) işlemi tanımlanıyor.</p><p><b>Buna göre, (2 □ 3) işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "1/(2 □ 3) = 2/6 + 3/6 = 5/6 olduğundan 2 □ 3 = 6/5.",
    answers: [
      { text: "1/2", ok: false },
      { text: "2/3", ok: false },
      { text: "5/6", ok: false },
      { text: "1", ok: false },
      { text: "6/5", ok: true }
    ]
  },
  {
    text: "<p>a * b = 2<sup>a</sup> + b<br>a Δ b = a + 3<sup>b</sup></p><p><b>işlemleri pozitif tam sayılar kümesinde tanımlı olduğuna göre, 2 * (a Δ 1) = 10 eşitliğini sağlayan a değeri kaçtır?</b></p>",
    diff: 3,
    expl: "a Δ 1 = a + 3. 2 * (a + 3) = 2<sup>2</sup> + a + 3 = a + 7 = 10 ⇒ a = 3.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Pozitif tam sayılarda tanımlı ↑ işlemi;</p><p>a ↑ b = a<sup>2</sup> · b − a · b<sup>2</sup> şeklinde tanımlanıyor ve m ↑ n = n ↑ m</p><p><b>olduğuna göre m · n çarpımının değeri <u>en az</u> kaçtır?</b></p>",
    diff: 3,
    expl: "m<sup>2</sup>n − mn<sup>2</sup> = n<sup>2</sup>m − nm<sup>2</sup> ⇒ 2mn(m − n) = 0. m, n pozitif olduğundan m = n olmalıdır. En küçük pozitif tam sayı değerleri m = n = 1 olup m · n en az 1'dir.",
    answers: [
      { text: "0", ok: false },
      { text: "1/4", ok: false },
      { text: "1/2", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>x ⧄ y = 4x + 4y + x · y − 3 işlemi tanımlanıyor.</p><p><b>Buna göre ⧄ işleminin birim elemanı kaçtır?</b></p>",
    diff: 3,
    expl: "Birim eleman e için x ⧄ e = x olmalıdır: 4x + 4e + xe − 3 = x ⇒ x(3 + e) + 4e − 3 = 0. Kitabın cevabı sabit terimin sıfırlanmasından gelir: 4e − 3 = 0 ⇒ e = 3/4. (Not: x'in katsayısı bu değerde sıfırlanmadığından işlemin tanımında bir basım hatası olduğu düşünülmektedir.)",
    answers: [
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "3/4", ok: true },
      { text: "1", ok: false },
      { text: "8/3", ok: false }
    ]
  },
  {
    text: "<p>Yukarıda tanımlanan → işlemine göre</p><p><b>((−4) → (−2)) → 1/32 işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q22.jpg",
    diff: 3,
    expl: "−4 ≤ −2 olduğundan (−4) → (−2) = (−4)<sup>−2</sup> = 1/16. 1/16 &gt; 1/32 olduğundan (1/16) → (1/32) = (1/16)/(1/32) = 2.",
    answers: [
      { text: "−2", ok: false },
      { text: "−1", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>Pozitif reel sayılar kümesinde</p><p>a ⏢ b = ab + b<sup>2</sup> şeklinde ⏢ işlemi tanımlanıyor.</p><p><b>(1 ⏢ x) ⏢ 2 = 28 olduğuna göre x kaçtır?</b></p>",
    diff: 3,
    expl: "1 ⏢ x = x + x<sup>2</sup>. (x + x<sup>2</sup>) ⏢ 2 = 2(x + x<sup>2</sup>) + 4 = 28 ⇒ x<sup>2</sup> + x − 12 = 0 ⇒ (x + 4)(x − 3) = 0. x pozitif olduğundan x = 3.",
    answers: [
      { text: "1", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>x ▽ y = 4x + 4y + xy − 16</p><p><b>işleminin yutan elemanı kaçtır?</b></p>",
    diff: 3,
    expl: "Yutan eleman k için x ▽ k = k olmalıdır: 4x + 4k + xk − 16 = k ⇒ x(4 + k) + 3k − 16 = 0. Sonucun x'ten bağımsız olması için 4 + k = 0 ⇒ k = −4. (Not: bu değerde sabit terim sıfırlanmadığından işlemin tanımında bir basım hatası olduğu düşünülmektedir; kitabın cevabı −4'tür.)",
    answers: [
      { text: "−5", ok: false },
      { text: "−4", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>Pozitif tam sayılarda tanımlı * işlemi,</p><p>x<sup>3</sup> * ∜y = (2 · √(x + y))/√3</p><p>şeklinde tanımlanıyor.</p><p><b>Buna göre (27 * 3) işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "x<sup>3</sup> = 27 ⇒ x = 3; ∜y = 3 ⇒ y = 81. Sonuç: 2 · √84/√3 = 2√28 = 4√7.",
    answers: [
      { text: "2√10", ok: false },
      { text: "4√7", ok: true },
      { text: "3√3", ok: false },
      { text: "2√5", ok: false },
      { text: "2√7", ok: false }
    ]
  },
  {
    text: "<p>Bir AB iki basamaklı sayısı ile tanımlanan işlemler yukarıda verilmiştir.</p><p><b>Yukarıdaki eşitlik sağlandığına göre AB iki basamaklı sayısı kaçtır? (A &lt; B)</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q26.jpg",
    diff: 3,
    expl: "A &lt; B olduğundan ilk işlem B − A, ikinci işlem A'dan B'ye kadar ardışık sayıların çarpımıdır. A = 3, B = 6 için 3 · 4 · 5 · 6 = 360 ve 120 · (6 − 3) = 360 olup eşitlik sağlanır. AB = 36.",
    answers: [
      { text: "12", ok: false },
      { text: "24", ok: false },
      { text: "36", ok: true },
      { text: "38", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde tanımlı ⇔ işlemi yukarıdaki tablodaki gibidir.</p><p><b>Buna göre, (p ⇔ 1) ⇔ 5 = 3 olduğuna göre p kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q27.jpg",
    diff: 2,
    expl: "Tabloda 5. satır başlık satırının aynısı olduğundan birim eleman 5'tir. Bu yüzden (p ⇔ 1) ⇔ 5 = p ⇔ 1 = 3 olmalıdır. 1. sütunda sonucu 3 olan satır 2'dir, yani p = 2.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde tanımlı ⇔ işlemi yukarıdaki tablodaki gibidir.</p><p><b>11. sorunun tablosuna göre, (2<sup>3</sup> ⇔ 1<sup>2</sup>) ⇔ 5<sup>4</sup> işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q28.jpg",
    diff: 3,
    expl: "Üs, elemanın kendisiyle tekrar tekrar işleme girmesidir. Birim eleman 5'tir. 2<sup>2</sup> = 2 ⇔ 2 = 4, 2<sup>3</sup> = 4 ⇔ 2 = 1; 1<sup>2</sup> = 1 ⇔ 1 = 2; 5<sup>4</sup> = 5. Sonuç: (1 ⇔ 2) ⇔ 5 = 3 ⇔ 5 = 3.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde tanımlı ⇔ işlemi yukarıdaki tablodaki gibidir.</p><p><b>11. sorunun tablosuna göre; (3<sup>1920</sup> ⇔ 4<sup>1923</sup>) ⇔ 1<sup>1071</sup> işleminin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q29.jpg",
    diff: 3,
    expl: "Birim eleman 5'tir ve her elemanın kuvvetleri 5 adımda tekrar eder. 1920 = 5k olduğundan 3<sup>1920</sup> = 5. 1923'ün 5'e bölümünden kalan 3 olduğundan 4<sup>1923</sup> = 4<sup>3</sup> = 2. 1071'in 5'e bölümünden kalan 1 olduğundan 1<sup>1071</sup> = 1. Sonuç: (5 ⇔ 2) ⇔ 1 = 2 ⇔ 1 = 3.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>A = {1, 2, 3, 4, 5} kümesi üzerinde tanımlı ⇔ işlemi yukarıdaki tablodaki gibidir.</p><p><b>11. sorunun tablosuna göre, (3<sup>−1</sup> ⇔ 4<sup>−1903</sup>) ⇔ a<sup>−3</sup> = 5 olduğuna göre a kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q30.jpg",
    diff: 3,
    expl: "Birim eleman 5'tir. 3 ⇔ 2 = 5 olduğundan 3<sup>−1</sup> = 2. 4 ⇔ 1 = 5 olduğundan 4<sup>−1</sup> = 1 ve 4<sup>−1903</sup> = 1<sup>1903</sup> = 1<sup>3</sup> = 3 (1903'ün 5'e bölümünden kalan 3). Parantez: 2 ⇔ 3 = 5. Buradan 5 ⇔ a<sup>−3</sup> = a<sup>−3</sup> = 5 olmalıdır; bu ancak a = 5 için sağlanır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },

// ─── İŞLEM TEST - 3 ───────────────────────────────────────────────────────────

  {
    text: "<p>Reel sayılar kümesinde</p><p>x Δ y = x<sup>3</sup> − 3x<sup>2</sup>y + 3xy<sup>2</sup> + 5</p><p>işlemi tanımlanıyor.</p><p><b>Buna göre (∛2 + 1) Δ 1 işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "x Δ y = (x − y)<sup>3</sup> + y<sup>3</sup> + 5 biçiminde yazılabilir. x − y = ∛2 olduğundan sonuç 2 + 1 + 5 = 8.",
    answers: [
      { text: "8", ok: true },
      { text: "7", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>Reel sayılarda tanımlı Δ işlemi</p><p>x Δ y = (2m − 1) · x + (m − 2) · y + 4</p><p>şeklinde tanımlanıyor.</p><p><b>Δ işleminin değişme özelliği olduğuna göre (2 Δ (−3)) Δ 4 işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "Değişme özelliği için x ve y'nin katsayıları eşit olmalıdır: 2m − 1 = m − 2 ⇒ m = −1. Böylece x Δ y = −3x − 3y + 4. 2 Δ (−3) = −6 + 9 + 4 = 7; 7 Δ 4 = −21 − 12 + 4 = −29.",
    answers: [
      { text: "−23", ok: false },
      { text: "−27", ok: false },
      { text: "−29", ok: true },
      { text: "−24", ok: false },
      { text: "−25", ok: false }
    ]
  },
  {
    text: "<p>Reel sayılarda tanımlı</p><p>6/x * 12/y = 3x + 2y − x(x * y)</p><p>işlemi tanımlanıyor.</p><p><b>Buna göre 3 * 3 işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "3 * 3 için x = 2, y = 4: 3 * 3 = 6 + 8 − 2(2 * 4). 2 * 4 için x = 3, y = 3: 2 * 4 = 9 + 6 − 3(3 * 3). K = 3 * 3, L = 2 * 4 denirse K = 14 − 2L ve L = 15 − 3K ⇒ K = 14 − 30 + 6K ⇒ 5K = 16 ⇒ K = 16/5.",
    answers: [
      { text: "3", ok: false },
      { text: "11/5", ok: false },
      { text: "2", ok: false },
      { text: "13/5", ok: false },
      { text: "16/5", ok: true }
    ]
  },
  {
    text: "<p>Reel sayılarda ★ ve O işlemi</p><p>a ★ b = a − b + (a O b)<br>a O b = a + 2b − (a ★ b)</p><p>biçiminde tanımlanıyor.</p><p><b>Buna göre 2 ★ 5 işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "İkinci eşitlik birinciye yazılırsa a ★ b = a − b + a + 2b − (a ★ b) ⇒ 2(a ★ b) = 2a + b ⇒ a ★ b = (2a + b)/2. 2 ★ 5 = 9/2.",
    answers: [
      { text: "6", ok: false },
      { text: "9/2", ok: true },
      { text: "4", ok: false },
      { text: "7/2", ok: false },
      { text: "5", ok: false }
    ]
  },

// ─── FONKSİYONLAR TEST - 1 ────────────────────────────────────────────────────

  {
    text: "<p>f(x) = 3x + 2</p><p><b>olduğuna göre f(2) + f(1) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "f(2) = 8, f(1) = 5; toplam 13.",
    answers: [
      { text: "9", ok: false },
      { text: "11", ok: false },
      { text: "13", ok: true },
      { text: "15", ok: false },
      { text: "17", ok: false }
    ]
  },
  {
    text: "<p>f(x) = (4x − 7)/3</p><p><b>olduğuna göre f(3) − f(10) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "f(3) = 5/3, f(10) = 33/3 = 11. Fark: 5/3 − 11 = −28/3.",
    answers: [
      { text: "−3", ok: false },
      { text: "−17/3", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false },
      { text: "−28/3", ok: true }
    ]
  },
  {
    text: "<p>f(x + 3) = x<sup>2</sup> − 5x</p><p><b>olduğuna göre f(4) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "x + 3 = 4 ⇒ x = 1. f(4) = 1 − 5 = −4.",
    answers: [
      { text: "−4", ok: true },
      { text: "−3", ok: false },
      { text: "−1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>f(4x − 3) = 12x + 4</p><p><b>olduğuna göre f(2) ifadesinin değeri kaçtır?</b></p>",
    diff: 2,
    expl: "4x − 3 = 2 ⇒ x = 5/4. f(2) = 12 · 5/4 + 4 = 19.",
    answers: [
      { text: "5/2", ok: false },
      { text: "11/2", ok: false },
      { text: "13", ok: false },
      { text: "17", ok: false },
      { text: "19", ok: true }
    ]
  },
  {
    text: "<p>f(x + 3) − f(x − 2) = 5x + 1</p><p><b>olduğuna göre f(5) − f(0) farkının değeri kaçtır?</b></p>",
    diff: 2,
    expl: "x = 2 yazılırsa f(5) − f(0) = 5 · 2 + 1 = 11.",
    answers: [
      { text: "26", ok: false },
      { text: "17", ok: false },
      { text: "13", ok: false },
      { text: "11", ok: true },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>f = {(2, 3), (3, −1), (5, 4), (6, 7)}</p><p><b>olduğuna göre f(3) − f(6) toplamı kaçtır?</b></p>",
    diff: 1,
    expl: "f(3) = −1, f(6) = 7. f(3) − f(6) = −1 − 7 = −8.",
    answers: [
      { text: "−4", ok: false },
      { text: "−8", ok: true },
      { text: "4", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>Yukarıda A'dan B'ye tanımlı bir f fonksiyonu verilmiştir.</p><p><b>Buna göre f(a) + f(b) · f(c) kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q41.jpg",
    diff: 1,
    expl: "Şemaya göre f(a) = 2, f(b) = 3, f(c) = 3. f(a) + f(b) · f(c) = 2 + 3 · 3 = 11.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "11", ok: true }
    ]
  },
  {
    text: "<p>f(x) = 2x − 7</p><p><b>olduğuna göre f(x + 1) + f(x + 2) fonksiyonu aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "f(x + 1) = 2x − 5, f(x + 2) = 2x − 3. Toplam: 4x − 8.",
    answers: [
      { text: "4x − 7", ok: false },
      { text: "4x − 8", ok: true },
      { text: "4x − 9", ok: false },
      { text: "4x − 10", ok: false },
      { text: "4x − 12", ok: false }
    ]
  },
  {
    text: "<p>Yukarıda y = f(x) ve y = g(x) fonksiyonları verilmiştir.</p><p><b>Buna göre f(0) + g<sup>−1</sup>(5) kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/islem_t1_q43.jpg",
    diff: 2,
    expl: "f'nin grafiği y eksenini 4'te kestiğinden f(0) = 4. g'nin grafiği 5 değerini x = 0'da (y ekseni üzerinde) aldığından g(0) = 5, yani g<sup>−1</sup>(5) = 0. Toplam: 4 + 0 = 4.",
    answers: [
      { text: "0", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>f(x) = 3x − 2</p><p><b>olduğuna göre f(x + 1) fonksiyonunun f(x) cinsinden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "f(x + 1) = 3(x + 1) − 2 = 3x + 1 = (3x − 2) + 3 = f(x) + 3.",
    answers: [
      { text: "f(x) + 1", ok: false },
      { text: "f(x) + 2", ok: false },
      { text: "f(x) + 3", ok: true },
      { text: "2f(x) + 1", ok: false },
      { text: "2f(x) + 3", ok: false }
    ]
  },
  {
    text: "<p>f(x<sup>2</sup> + 4x) = 3x<sup>2</sup> + 12x + 7</p><p><b>olduğuna göre f(x) fonksiyonu aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "3x<sup>2</sup> + 12x + 7 = 3(x<sup>2</sup> + 4x) + 7 olduğundan f(x) = 3x + 7.",
    answers: [
      { text: "x + 3", ok: false },
      { text: "x + 7", ok: false },
      { text: "2x + 5", ok: false },
      { text: "3x + 7", ok: true },
      { text: "4x + 7", ok: false }
    ]
  },
  {
    text: "<p>f(x) = (a + 1) · x<sup>2</sup> + (b − 2) · x + c − 3</p><p><b>birim fonksiyon olduğuna göre a + b + c toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "Birim fonksiyon f(x) = x'tir: a + 1 = 0 ⇒ a = −1; b − 2 = 1 ⇒ b = 3; c − 3 = 0 ⇒ c = 3. Bu değerlerle a + b + c = 5 bulunur; ancak kitabın cevap anahtarı 6'yı (D) vermektedir.",
    answers: [
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>f : R → R olmak üzere,</p><p>f(x) = (c − 2) · x + 2c + 3</p><p><b>sabit fonksiyonu olmak üzere f(58) kaçtır?</b></p>",
    diff: 2,
    expl: "Sabit fonksiyonda x'in katsayısı 0'dır: c − 2 = 0 ⇒ c = 2. f(x) = 7 olduğundan f(58) = 7.",
    answers: [
      { text: "3", ok: false },
      { text: "7", ok: true },
      { text: "19", ok: false },
      { text: "35", ok: false },
      { text: "58", ok: false }
    ]
  },
  {
    text: "<p>f(x) doğrusal fonksiyondur.</p><p>f(3) = 10<br>f(5) = 14</p><p><b>olduğuna göre f(−5) kaçtır?</b></p>",
    diff: 2,
    expl: "f(x) = ax + b: 3a + b = 10, 5a + b = 14 ⇒ a = 2, b = 4. f(−5) = −10 + 4 = −6.",
    answers: [
      { text: "−2", ok: false },
      { text: "−3", ok: false },
      { text: "−4", ok: false },
      { text: "−5", ok: false },
      { text: "−6", ok: true }
    ]
  },
  {
    text: "<p>f(4x − 5) = 6x + 2</p><p><b>olduğuna göre f<sup>−1</sup>(20) ifadesinin eşiti kaçtır?</b></p>",
    diff: 2,
    expl: "f<sup>−1</sup>(6x + 2) = 4x − 5. 6x + 2 = 20 ⇒ x = 3. f<sup>−1</sup>(20) = 12 − 5 = 7.",
    answers: [
      { text: "7", ok: true },
      { text: "6", ok: false },
      { text: "5", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>f(x) = 2x + 3<br>g(x) = 2x<sup>3</sup> + 4x</p><p><b>olduğuna göre (g∘f<sup>−1</sup>)(5) kaçtır?</b></p>",
    diff: 2,
    expl: "f<sup>−1</sup>(5): 2x + 3 = 5 ⇒ x = 1. g(1) = 2 + 4 = 6.",
    answers: [
      { text: "−2", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: true },
      { text: "8", ok: false },
      { text: "13", ok: false }
    ]
  }
];
