import type { McQ } from "../../../../types";

export const MAT_KESIR_PROBLEMLERI_T3: McQ[] = [
  {
    text: "<p>40 litre olan bir zeytinyağı 3/7 litrelik şişelere doldurulacaktır.</p><p><b>Buna göre son şişenin kaçta kaçı boş kalır?</b></p>",
    diff: 3,
    expl: "40 / (3/7) = 280/3 = 93 + 1/3. 93 şişe tam dolar, son şişenin 1/3'ü dolar. Son şişenin 1 − 1/3 = 2/3'ü boş kalır.",
    answers: [
      { text: "1/3", ok: false },
      { text: "2/3", ok: true },
      { text: "3/5", ok: false },
      { text: "2/7", ok: false },
      { text: "2/5", ok: false }
    ]
  },
  {
    text: "<p>Ana duraktan hareket eden bir otobüsteki yolcuların 2/7 si erkektir. Otobüsün hareketinden sonra bu otobüse her durakta 2 erkek yolcu binip, 3 bayan yolcu inerse ana duraktan sonraki 4. duraktan ayrıldıktan sonra otobüsteki erkek yolcu sayısı bayan yolcu sayısının 2 katı oluyor.</p><p><b>Buna göre otobüs ana duraktan kaç yolcu ile hareket etmiştir?</b></p>",
    diff: 2,
    expl: "Yolcular 7x olsun: 2x erkek, 5x bayan. 4 durakta 8 erkek biner, 12 bayan iner. 2x + 8 = 2(5x − 12) ⇒ 8x = 32 ⇒ x = 4. Başlangıçta 7x = 28 yolcu vardır.",
    answers: [
      { text: "14", ok: false },
      { text: "21", ok: false },
      { text: "35", ok: false },
      { text: "42", ok: false },
      { text: "28", ok: true }
    ]
  },
  {
    text: "<p>Payı ve paydası tam sayı olan bir kesrin payına ve paydasına a eklediğimiz zaman kesrin değeri 2/3 oluyor. Aynı kesrin pay ve paydasından a çıkardığımızda ise kesrin değeri 5/9 oluyor.</p><p><b>Bu kesrin paydası aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 3,
    expl: "Kesir x/y olsun. 3(x + a) = 2(y + a) ⇒ a = 2y − 3x. 9(x − a) = 5(y − a) ⇒ 9x − 4a = 5y. a yerine yazılırsa 21x = 13y ⇒ x/y = 13/21. Payda 21'in katı olmalıdır; seçeneklerde 21 vardır.",
    answers: [
      { text: "21", ok: true },
      { text: "13", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "<p>İki raflı bir kitaplığın her rafında yan yana dizili birbirinden farklı 80'er kitap bulunmaktadır. Bu kitaplıktan toplam 80 kitap okuyan Can'ın okuduğu kitaplardan hiçbiri kitaplıkta yan yana bulunmamaktadır. Deniz, bu kitaplığın ilk rafındaki kitapların 2/5'ini, ikinci rafındaki kitapların ise 3/5'ini okumuştur.</p><p><b>Buna göre, kitaplıkta hem Can hem de Deniz'in okumuş olduğu ortak kitap sayısı <u>en az</u> kaçtır?</b></p>",
    diff: 3,
    expl: "Yan yana olmayan kitaplardan bir rafta en fazla 40 tane seçilebilir; Can her raftan 40 kitap okumuştur. Deniz 1. raftan 32 kitap okumuştur; bunlar Can'ın okumadığı 40 kitaptan seçilebilir, ortak 0 olur. Deniz 2. raftan 48 kitap okumuştur; ortak en az 40 + 48 − 80 = 8'dir. En az ortak kitap 8.",
    answers: [
      { text: "30", ok: false },
      { text: "32", ok: false },
      { text: "16", ok: false },
      { text: "8", ok: true },
      { text: "24", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 1 ──────────────────────────────────────

  {
    text: "<p>Rakamları toplamı 5'in katı olan rakamları farklı üç basamaklı doğal sayılara \"beşgen\" sayılar denir.</p><p><b>Buna göre en büyük beşgen sayı ile en küçük beşgen sayının toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "En büyük: 98_ için 9 + 8 + c = 20 ⇒ c = 3, sayı 983. En küçük: 10_ için 1 + 0 + c = 5 ⇒ c = 4, sayı 104. Toplam 983 + 104 = 1087.",
    answers: [
      { text: "1069", ok: false },
      { text: "1087", ok: true },
      { text: "1096", ok: false },
      { text: "1100", ok: false },
      { text: "1120", ok: false }
    ]
  },
  {
    text: "<p>Bir doğal sayının en büyük asal çarpanı k ise, bu doğal sayıya \"k-sal\" denir.</p><p><b>Buna göre 5-sal iki basamaklı en büyük doğal sayı ile 7-sal üç basamaklı en küçük doğal sayının toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "99'dan geriye doğru: 99, 98, 97, 96 (en büyük asal çarpanı 3), 95, 94, 93, 92, 91 uygun değil; 90 = 2 · 3<sup>2</sup> · 5 uygundur. 100'den ileri: 100 (5), 101, 102 (17), 103, 104 (13) uygun değil; 105 = 3 · 5 · 7 uygundur. Toplam 90 + 105 = 195.",
    answers: [
      { text: "180", ok: false },
      { text: "190", ok: false },
      { text: "185", ok: false },
      { text: "195", ok: true },
      { text: "175", ok: false }
    ]
  },
  {
    text: "<p>Bir doğal sayının rakamları toplamı, bu doğal sayının basamak sayısına eşit ise bu doğal sayıya \"uygun\" sayı denir.</p><p><b>Buna göre, üç basamaklı en büyük uygun sayı ile dört basamaklı en küçük uygun sayının toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Üç basamaklı en büyük uygun sayının rakamları toplamı 3'tür: 300. Dört basamaklı en küçük uygun sayının rakamları toplamı 4'tür: 1003. Toplam 1303.",
    answers: [
      { text: "1303", ok: true },
      { text: "1296", ok: false },
      { text: "1301", ok: false },
      { text: "1403", ok: false },
      { text: "1227", ok: false }
    ]
  },
  {
    text: "<p>Ardışık 4 pozitif tam sayının toplamı biçiminde yazılabilen bir sayıya \"dörtlü sayı\" deniliyor.</p><p><b>Buna göre, üç basamaklı en küçük dörtlü sayı ile iki basamaklı en büyük dörtlü sayının farkı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Dörtlü sayı x + (x + 1) + (x + 2) + (x + 3) = 4x + 6 biçimindedir. İki basamaklı en büyüğü x = 23 için 98, üç basamaklı en küçüğü x = 24 için 102'dir. Fark 102 − 98 = 4.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "10", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>Bir tam sayının küpüne eşit olan bir sayıya tam küp sayı denir. Eğer bir tam küp sayının rakamları toplamı yine bir tam küp sayı ise bu sayıya çifteküp sayı denir.</p><p><b>Buna göre, aşağıdakilerden hangisi bir tam küp sayıdır?</b></p>",
    diff: 1,
    expl: "512 = 8<sup>3</sup> bir tam küptür; rakamları toplamı 5 + 1 + 2 = 8 = 2<sup>3</sup> olduğundan aynı zamanda çifteküp sayıdır. Diğer seçenekler (999, 1225, 243 = 3<sup>5</sup>, 1024 = 2<sup>10</sup>) tam küp değildir.",
    answers: [
      { text: "999", ok: false },
      { text: "512", ok: true },
      { text: "1225", ok: false },
      { text: "243", ok: false },
      { text: "1024", ok: false }
    ]
  },
  {
    text: "<p>Bir tam sayı, asal bölenlerinin toplamına kalansız bölünüyorsa bu sayıya \"özgün sayı\" denir.</p><p>Örneğin, 84 özgün sayıdır.</p><p>Çünkü, asal bölenleri olan 2, 3 ve 7 sayılarının toplamına kalansız bölünür.</p><p><b>Buna göre, aşağıdakilerden hangisi özgün sayıdır?</b></p>",
    diff: 2,
    expl: "1200 = 2<sup>4</sup> · 3 · 5<sup>2</sup>; asal bölenlerin toplamı 2 + 3 + 5 = 10 ve 1200, 10'a kalansız bölünür. (1260 ve 420 için toplam 17, 320 için 7, 489 = 3 · 163 için 166'dır; bunlara bölünmezler.)",
    answers: [
      { text: "1260", ok: false },
      { text: "420", ok: false },
      { text: "1200", ok: true },
      { text: "320", ok: false },
      { text: "489", ok: false }
    ]
  },
  {
    text: "<p>İki basamaklı AB asal sayısının rakamları toplamı da bir asal sayıya eşitse bu AB sayısına \"mevsimsel sayı\" denir.</p><p><b>Buna göre, en büyük mevsimsel sayının rakamları toplamı kaçtır?</b></p>",
    diff: 2,
    expl: "97 asaldır fakat 9 + 7 = 16 asal değildir. 89 asaldır ve 8 + 9 = 17 asaldır. En büyük mevsimsel sayı 89, rakamları toplamı 17.",
    answers: [
      { text: "11", ok: false },
      { text: "7", ok: false },
      { text: "13", ok: false },
      { text: "5", ok: false },
      { text: "17", ok: true }
    ]
  },
  {
    text: "<p>Rakamları birbirinden ve sıfırdan farklı üç basamaklı bir doğal sayının yüzler basamağındaki rakam diğer basamaklarındaki rakamları tam bölüyorsa bu sayıya \"atölye\" sayı denir.</p><p>Örneğin, 246 bir atölye sayıdır.</p><p><b>Buna göre, en büyük atölye sayı ile en küçük atölye sayının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Yüzler basamağı 5 veya daha büyükse kendisinden farklı iki katı rakam bulunamaz; 4 için yalnızca 8 vardır. Yüzler basamağı 3 iken 6 ve 9 kullanılabilir: en büyük atölye sayı 396. En küçük atölye sayı 123. Toplam 396 + 123 = 519.",
    answers: [
      { text: "444", ok: false },
      { text: "486", ok: false },
      { text: "504", ok: false },
      { text: "519", ok: true },
      { text: "612", ok: false }
    ]
  },
  {
    text: "<p>Bir x doğal sayısının 9 katı, her bir basamağında 6 rakamı bulunan bir doğal sayıya eşit ise bu x doğal sayısına dokuzgen sayı denir.</p><p><b>Buna göre en küçük dokuzgen sayının rakamları toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "66…6 sayısının 9'a bölünmesi için rakamları toplamı 9'un katı olmalıdır; en küçüğü 666'dır. 666 / 9 = 74 ⇒ rakamları toplamı 7 + 4 = 11.",
    answers: [
      { text: "18", ok: false },
      { text: "11", ok: true },
      { text: "14", ok: false },
      { text: "17", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>İki basamaklı AB doğal sayısı, iki basamaklı ardışık altı pozitif tek sayının aritmetik ortalamasına eşitse AB sayısına ortak sayı denir.</p><p><b>Buna göre, <u>en büyük</u> ortak sayı ile <u>en küçük</u> ortak sayının toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "En küçük: 11, 13, 15, 17, 19, 21 ⇒ ortalama 16. En büyük: 89, 91, 93, 95, 97, 99 ⇒ ortalama 94. Toplam 94 + 16 = 110.",
    answers: [
      { text: "106", ok: false },
      { text: "104", ok: false },
      { text: "110", ok: true },
      { text: "108", ok: false },
      { text: "120", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 2 ──────────────────────────────────────

  {
    text: "<p>2 basamaklı AB doğal sayısı için kare içine yazılan AB = A<sup>2</sup> + B biçiminde tanımlanıyor.</p><p>Örneğin; kare içindeki 43 = 4<sup>2</sup> + 3 = 19'dur.</p><!--img--><p><b>Buna göre yukarıda verilen ifadenin değeri aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q15.jpg",
    diff: 1,
    expl: "42 → 4<sup>2</sup> + 2 = 18, 37 → 3<sup>2</sup> + 7 = 16, 23 → 2<sup>2</sup> + 3 = 7. Sonuç 18 + 16 − 7 = 27.",
    answers: [
      { text: "25", ok: false },
      { text: "36", ok: false },
      { text: "27", ok: true },
      { text: "30", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "<p>2 basamaklı AB doğal sayısı için kare içine yazılan AB = A<sup>2</sup> + B biçiminde tanımlanıyor.</p><!--img--><p><b>Buna göre yukarıda verilen eşitliği sağlayan <u>en büyük</u> ve <u>en küçük</u> AB sayılarının toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q16.jpg",
    diff: 2,
    expl: "A<sup>2</sup> + B = B<sup>2</sup> + A ⇒ (A − B)(A + B − 1) = 0. AB ve BA iki basamaklı olduğundan A, B ≠ 0; A + B = 1 olamaz, dolayısıyla A = B. Uygun sayılar 11, 22, …, 99. Toplam 99 + 11 = 110.",
    answers: [
      { text: "109", ok: false },
      { text: "120", ok: false },
      { text: "110", ok: true },
      { text: "112", ok: false },
      { text: "108", ok: false }
    ]
  },
  {
    text: "<p>n kenarlı bir çokgenin içine yazılan bir A doğal sayısı için çokgenin sonucu A<sup>n</sup>/n ifadesinin tam kısmı olarak tanımlanıyor.</p><p>Örneğin: üçgen içine yazılan 6 = 6<sup>3</sup>/3 = 72'dir.</p><!--img--><p><b>Buna göre yukarıda verilen ifadenin sonucu aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q17.jpg",
    diff: 2,
    expl: "Kare içindeki 3: 3<sup>4</sup>/4 = 81/4 = 20,25 ⇒ 20. Üçgen içindeki 6: 6<sup>3</sup>/3 = 72. Sonuç 20 + 72 = 92.",
    answers: [
      { text: "44", ok: false },
      { text: "46", ok: false },
      { text: "45", ok: false },
      { text: "92", ok: true },
      { text: "40", ok: false }
    ]
  },
  {
    text: "<p>n kenarlı bir çokgenin içine yazılan bir A doğal sayısı için çokgenin sonucu A<sup>n</sup>/n ifadesinin tam kısmı olarak tanımlanıyor.</p><!--img--><p><b>Yukarıdaki eşitliği sağlayan xy ifadesinin rakamları toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q18.jpg",
    diff: 2,
    expl: "A beşgen içindedir: sonuç A<sup>5</sup>/5'in tam kısmıdır. A = 2 için 32/5 ⇒ 6 (tek basamaklı), A = 3 için 243/5 = 48,6 ⇒ 48, A = 4 için 1024/5 ⇒ 204 (üç basamaklı). xy = 48, rakamları toplamı 12.",
    answers: [
      { text: "10", ok: false },
      { text: "14", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "12", ok: true }
    ]
  },
  {
    text: "<p>Bir tam sayının karesine eşit olan sayılara tam kare sayı denir. x sayısına eşit veya x sayısından büyük en küçük tam kare sayı, daire içine yazılan x olarak gösteriliyor.</p><p>Örnek: daire içindeki 34 = 36 = 6<sup>2</sup>, daire içindeki 49 = 49 = 7<sup>2</sup></p><!--img--><p><b>Buna göre yukarıda verilen ifadenin değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q19.jpg",
    diff: 2,
    expl: "Daire içindeki 45 = 49 olduğundan büyük dairenin içi 68 − 49 = 19 olur; daire içindeki 19 = 25. Daire içindeki 68 = 81. Sonuç 81 − 25 = 56.",
    answers: [
      { text: "46", ok: false },
      { text: "56", ok: true },
      { text: "42", ok: false },
      { text: "58", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>Bir tam sayının karesine eşit olan sayılara tam kare sayı denir. x sayısına eşit veya x sayısından büyük en küçük tam kare sayı, daire içine yazılan x olarak gösteriliyor.</p><!--img--><p><b>Yukarıdaki eşitliği sağlayan <u>en küçük</u> 2 farklı n doğal sayısının toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q20.jpg",
    diff: 3,
    expl: "n ile n + 5 aynı tam kareye yuvarlanmalıdır. n = 0, …, 9 için n ile n + 5 farklı tam karelere gider (örneğin 9 → 9, 14 → 16). n = 10 için 10 ve 15 → 16; n = 11 için 11 ve 16 → 16; n = 12 için 17 → 25 olur. En küçük iki değer 10 ve 11, toplam 21.",
    answers: [
      { text: "24", ok: false },
      { text: "33", ok: false },
      { text: "21", ok: true },
      { text: "26", ok: false },
      { text: "34", ok: false }
    ]
  },
  {
    text: "<p>En az iki farklı asal böleni olan bir A pozitif tam sayısının en küçük ve en büyük asal bölenlerinin çarpımı, üçgen içine yazılan A ile gösteriliyor.</p><!--img--><p><b>Buna göre yukarıda verilen işlemin sonucu kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q21.jpg",
    diff: 2,
    expl: "360 = 2<sup>3</sup> · 3<sup>2</sup> · 5 ⇒ 2 · 5 = 10. 1260 = 2<sup>2</sup> · 3<sup>2</sup> · 5 · 7 ⇒ 2 · 7 = 14. Sonuç 10 + 14 = 24.",
    answers: [
      { text: "20", ok: false },
      { text: "28", ok: false },
      { text: "36", ok: false },
      { text: "16", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "<p>En az iki farklı asal böleni olan bir A pozitif tam sayısının en küçük ve en büyük asal bölenlerinin çarpımı, üçgen içine yazılan A ile gösteriliyor.</p><!--img--><p><b>Yukarıdaki eşitliği sağlayan 3 basamaklı en büyük A sayısının rakamları toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q22.jpg",
    diff: 3,
    expl: "22 = 2 · 11 olduğundan A'nın en küçük asal böleni 2, en büyüğü 11'dir. A = 22k ve k yalnızca 2, 3, 5, 7, 11 asallarını içerebilir. En büyük üç basamaklı değer k = 45 için A = 990'dır. Rakamları toplamı 9 + 9 + 0 = 18.",
    answers: [
      { text: "16", ok: false },
      { text: "27", ok: false },
      { text: "18", ok: true },
      { text: "14", ok: false },
      { text: "21", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 3 ──────────────────────────────────────

  {
    text: "<p>1'den 18'e kadar sayılar en fazla birer kez kullanılarak sekiz eş dilime ayrılan daire biçimindeki bir dart tahtasının dilimlerine yerleştiriliyor. Bu dart tahtasına oklarla atış yapılarak oynanan bir oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her bir atışta dart farklı bir daire dilimine gelmektedir.</li><li>Her bir turda oyunculardan her biri, daire dilimlerinin içine toplam 3 ok isabet edene kadar atış yapmaktadır.</li><li>Her bir turda okların isabet ettiği daire dilimlerindeki sayıların toplamı oyuncunun tur puanını belirlemektedir.</li><li>Bir tur sonunda oyuncunun tur puanları toplamı o oyuncunun oyun puanını belirlemektedir.</li><li>Oyun puanı en yüksek olan oyuncu oyunu kazanmaktadır.</li></ul><p>Aşağıda içindeki sayıları verilen dart tahtasında 2 oyuncunun oynadığı oyun berabere bitmiştir.</p><!--img--><p><b>Buna göre oyuncuların aldıkları puanların toplamı <u>en fazla</u> kaç olabilir?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q23.jpg",
    diff: 3,
    expl: "Tahtadaki sayılar 2, 4, …, 16 (toplam 72). İki oyuncu farklı 6 dilime atış yapar, 2 dilim boş kalır. Toplam en çok 72 − (2 + 4) = 66 olabilir; ancak bu durumda her oyuncu 33 almalıdır ve çift sayıların toplamı tek olamaz. Boş dilimler 2 ve 6 olursa toplam 64 olur: 16 + 12 + 4 = 32 ve 14 + 10 + 8 = 32. En fazla 64.",
    answers: [
      { text: "72", ok: false },
      { text: "60", ok: false },
      { text: "64", ok: true },
      { text: "68", ok: false },
      { text: "76", ok: false }
    ]
  },
  {
    text: "<p>1'den 18'e kadar sayılar en fazla birer kez kullanılarak sekiz eş dilime ayrılan daire biçimindeki bir dart tahtasının dilimlerine yerleştiriliyor. Bu dart tahtasına oklarla atış yapılarak oynanan bir oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her bir atışta dart farklı bir daire dilimine gelmektedir.</li><li>Her bir turda oyunculardan her biri, daire dilimlerinin içine toplam 3 ok isabet edene kadar atış yapmaktadır.</li><li>Her bir turda okların isabet ettiği daire dilimlerindeki sayıların toplamı oyuncunun tur puanını belirlemektedir.</li><li>Bir tur sonunda oyuncunun tur puanları toplamı o oyuncunun oyun puanını belirlemektedir.</li><li>Oyun puanı en yüksek olan oyuncu oyunu kazanmaktadır.</li></ul><p>Aşağıda numaraları verilen dart tahtasında 1. Oyuncu 21 puan almıştır.</p><!--img--><p><b>2. Oyuncu oyunu kaybettiğine göre aldığı puan aşağıdakilerden hangisi <u>olamaz</u>?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q24.jpg",
    diff: 3,
    expl: "Kitabın cevap anahtarı C (13) seçeneğini vermektedir. 1. oyuncunun 21 puanı {1, 5, 15}, {1, 7, 13}, {1, 9, 11}, {3, 5, 13}, {3, 7, 11} veya {5, 7, 9} ile alınır. 13 puan yalnızca {1, 3, 9} veya {1, 5, 7} ile alınabilir ve her ikisi de 1. oyuncunun her seçeneğiyle ortak dilim içerdiğinden 13 puan alınamaz. 15, 17, 19 alınabilir (örneğin {5, 7, 9} karşısında {1, 3, 11} = 15). Not: 11 puanı veren tek üçlü {1, 3, 7} de her seçenekle çakıştığından 11 de alınamaz.",
    answers: [
      { text: "17", ok: false },
      { text: "19", ok: false },
      { text: "13", ok: true },
      { text: "15", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "<p>Şekildeki 6 dairenin içine birbirinden farklı rakamlar yazılacaktır.</p><ul><li>her daireye gelecek rakamlar birbirinden farklı,</li><li>ortadaki daireye çevresindeki teğet olan dairelerin toplamı</li></ul><p>olacak şekilde yerleştiriliyor. Örnek: çevredeki dairelerde 7, 2, 3, 4, 5, 6 varken ortadaki dairede 27 yazar.</p><!--img--><p>Yukarıda sayıları verilen şekildeki bilgilere göre ortadaki daire içindeki x sayısı 3 ile tam bölünmektedir.</p><p><b>Buna göre a + b toplamı <u>en çok</u> kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q25.jpg",
    diff: 2,
    expl: "x = 1 + 4 + 3 + 5 + a + b = 13 + a + b. a ve b, 1, 3, 4, 5'ten farklıdır; en büyük seçim 8 ve 9 ile a + b = 17 olur ve x = 30, 3'e tam bölünür. En çok 17.",
    answers: [
      { text: "17", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "14", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p>Şekildeki 6 dairenin içine birbirinden farklı rakamlar yazılacaktır.</p><ul><li>her daireye gelecek rakamlar birbirinden farklı,</li><li>ortadaki daireye çevresindeki teğet olan dairelerin toplamı</li></ul><p>olacak şekilde yerleştiriliyor.</p><!--img--><p><b>Yukarıda sayıları yerleştirilmiş şekildeki bilgilere göre a sayısının yerine yazılabilecek rakamların toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q26.jpg",
    diff: 3,
    expl: "7 + 4 + 3 + 5 + a + b = 29 ⇒ a + b = 10. a ve b, 3, 4, 5, 7'den ve birbirinden farklıdır: (1, 9), (9, 1), (2, 8), (8, 2). a'nın alabileceği değerler 1, 9, 2, 8; toplam 20.",
    answers: [
      { text: "18", ok: false },
      { text: "23", ok: false },
      { text: "20", ok: true },
      { text: "19", ok: false },
      { text: "22", ok: false }
    ]
  },
  {
    text: "<p>Burak ve Can'ın kâğıtlara tam sayılar yazarak oynadıkları bir oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her iki oyuncu da birer kâğıda, diğerine göstermeden bir basamaklı 2'den büyük bir pozitif tam sayı yazıyor.</li><li>Oyuncular aynı sayıyı yazarsa oyun berabere bitiyor.</li><li>Oyunculardan <u>en az</u> biri çift sayı yazarsa büyük sayıyı yazan oyunu kazanıyor.</li><li>Oyunculardan <u>en az</u> biri asal sayı yazarsa küçük sayıyı yazan oyunu kazanıyor.</li></ul><p>Burak'ın yazdığı sayının asal olduğu biliniyor.</p><p><b>Buna göre Can oyunu kazandığına göre Can'ın yazabileceği kaç farklı pozitif tamsayı vardır?</b></p>",
    diff: 3,
    expl: "Burak asal (3, 5 veya 7) yazdığından küçük sayıyı yazan kazanır; Can'ın sayısı Burak'ınkinden küçük olmalıdır. Burak 5 yazarsa Can 3, 4; Burak 7 yazarsa Can 3, 4, 5, 6 yazabilir. Can'ın yazabileceği sayılar {3, 4, 5, 6} ⇒ 4 farklı sayı.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "<p>Burak ve Can'ın kâğıtlara tam sayılar yazarak oynadıkları bir oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her iki oyuncu da birer kâğıda, diğerine göstermeden bir basamaklı 2'den büyük bir pozitif tam sayı yazıyor.</li><li>Oyuncular aynı sayıyı yazarsa oyun berabere bitiyor.</li><li>Oyunculardan <u>en az</u> biri çift sayı yazarsa büyük sayıyı yazan oyunu kazanıyor.</li><li>Oyunculardan <u>en az</u> biri asal sayı yazarsa küçük sayıyı yazan oyunu kazanıyor.</li></ul><p>Can 6 rakamını yazmış ve oyunu kazanmıştır.</p><p><b>Buna göre Burak'ın yazabileceği sayıların toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Burak asal olmayan bir sayı yazarsa çift kuralıyla büyük sayı kazanır; Can'ın kazanması için Burak 6'dan küçük, asal olmayan bir sayı, yani 4 yazmalıdır. Burak asal yazarsa küçük sayı kazanır; Burak 6'dan büyük asal, yani 7 yazmalıdır. Toplam 4 + 7 = 11.",
    answers: [
      { text: "11", ok: true },
      { text: "16", ok: false },
      { text: "14", ok: false },
      { text: "10", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "<p>Can, Burak ve Deniz; 1'den 10'a kadar rakamlarla numaralandırılmış 10 kartın bulunduğu bir torbadan sırasıyla üçer tane kart çekiyor. Çekilen bu kartlarla ilgili bazı bilgiler aşağıda verilmiştir.</p><ul><li>6 numaralı kartı Can, 10 numaralı kartı Deniz çekmiştir.</li><li>Can'ın çektiği kartların numaraları toplamı, Burak'ın çektiği kartların numaraları toplamından 4 fazladır.</li></ul><p><b>Can'ın çektiği kartlardaki sayıların toplamı 20 olduğuna göre Burak'ın çektiği kartlardaki sayıların <u>en küçüğü</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Kitabın cevap anahtarı C (3) seçeneğini vermektedir. Not: Can'ın diğer iki kartının toplamı 14'tür; 6 ve 10 kullanılamadığından bu kartlar 5 ve 9'dur. Burak'ın toplamı 16'dır ve kalan 1, 2, 3, 4, 7, 8 kartlarından toplamı 16 olan tek üçlü {1, 7, 8}'dir; bu hesapla en küçük kart 1 bulunur.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>Can, Burak ve Deniz; 1'den 10'a kadar rakamlarla numaralandırılmış 10 kartın bulunduğu bir torbadan sırasıyla üçer tane kart çekiyor. Çekilen bu kartlarla ilgili bazı bilgiler aşağıda verilmiştir.</p><ul><li>6 numaralı kartı Can, 10 numaralı kartı Deniz çekmiştir.</li><li>Can'ın çektiği kartların numaraları toplamı, Burak'ın çektiği kartların numaraları toplamından 4 fazladır.</li></ul><p><b>Deniz'in çektiği kartlardaki sayıların toplamı 25 olduğuna göre Can'ın çektiği kartlardaki sayıların toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Deniz'in diğer iki kartının toplamı 15'tir; 6 Can'da olduğundan bunlar 7 ve 8'dir. Kalan kartlar 1, 2, 3, 4, 5, 9 (biri torbada kalır). Can = {6, 1, 9} = 16 ve Burak = {3, 4, 5} = 12 koşulu sağlar (16 = 12 + 4); diğer seçimler sağlamaz. Can'ın toplamı 16.",
    answers: [
      { text: "15", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "16", ok: true },
      { text: "14", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 4 ──────────────────────────────────────

  {
    text: "<p>Bir müşteri, evinin önünden taksiye binmiş ve şoföre şunu söylemiştir:</p><p>\"Önce yol üzerindeki restauranta uğramam lazım. Oradan yemek aldığımda beni iş yerime bırakırsın.\"</p><p>Taksici de müşteriye şu şekilde karşılık vermiştir:</p><p>\"Beklediğim süreler için ayrı bir ücret alıyorum. Kabul ediyorsanız devam edeyim.\"</p><p>Müşterinin kabul ettiği bu ücret tarifesi aşağıdaki tabloda verilmiştir.</p><!--img--><p>Rastaurantta 15 dk bekleyen bu müşteri toplam 8 km yol gitmiştir.</p><p><b>Buna göre taksiciye kaç TL ödeme yapmıştır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q31.jpg",
    diff: 2,
    expl: "Açılış 2,5 TL; 8 km = 80 · 100 m ⇒ 80 · 0,25 = 20 TL; bekleme 15 · 0,20 = 3 TL. Toplam 2,5 + 20 + 3 = 25,5 TL.",
    answers: [
      { text: "24", ok: false },
      { text: "27,5", ok: false },
      { text: "25,5", ok: true },
      { text: "29", ok: false },
      { text: "22,5", ok: false }
    ]
  },
  {
    text: "<p>Bir müşteri, evinin önünden taksiye binmiş ve şoföre şunu söylemiştir:</p><p>\"Önce yol üzerindeki restauranta uğramam lazım. Oradan yemek aldığımda beni iş yerime bırakırsın.\"</p><p>Taksici de müşteriye şu şekilde karşılık vermiştir:</p><p>\"Beklediğim süreler için ayrı bir ücret alıyorum. Kabul ediyorsanız devam edeyim.\"</p><p>Müşterinin kabul ettiği bu ücret tarifesi aşağıdaki tabloda verilmiştir.</p><!--img--><p><b>Bu müşteri taksiyle toplam 12 km yol gitmiş ve taksiciye 35,9 TL verdiğine göre taksiciyi uğradığı restaurantta kaç dk bekletmiştir?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q32.jpg",
    diff: 2,
    expl: "Açılış 2,5 TL; 12 km = 120 · 100 m ⇒ 30 TL. Bekleme ücreti 35,9 − 32,5 = 3,4 TL ⇒ 3,4 / 0,20 = 17 dakika.",
    answers: [
      { text: "23", ok: false },
      { text: "17", ok: true },
      { text: "20", ok: false },
      { text: "19", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "<p>Ali, Berk ve Can'ın katıldığı bir poligon yarışmasında yarışmanın kuralları şu şekildedir:</p><ul><li>Her bir yarışmacı, dört farklı mesafenin her birinden 3 atış yapacaktır.</li><li>Hedefe isabet eden her atış için yarışmacılara aşağıdaki tabloda verilen puanlar verilecektir.</li><li>Yarışmacıların aldıkları puana göre sıralama oluşturulmuştur.</li></ul><!--img--><p><b>Birinci olan kişi 4 atış kaçırdığına göre ikinci olan kişi <u>en az</u> kaç atış kaçırmıştır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q33.jpg",
    diff: 3,
    expl: "Tüm atışlar isabet ederse puan 3 · (20 + 25 + 35 + 50) = 390 olur. Birinci 4 atış kaçırdığından en fazla 390 − (3 · 20 + 25) = 305 puan alabilir. İkinci 1 atış kaçırsaydı en az 390 − 50 = 340 puan alırdı ve birinciyi geçerdi. 2 atış kaçırırsa (iki 100 m atışı) 290 puan alabilir. En az 2.",
    answers: [
      { text: "2", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>Ali, Berk ve Can'ın katıldığı bir poligon yarışmasında yarışmanın kuralları şu şekildedir:</p><ul><li>Her bir yarışmacı, dört farklı mesafenin her birinden 3 atış yapacaktır.</li><li>Hedefe isabet eden her atış için yarışmacılara aşağıdaki tabloda verilen puanlar verilecektir.</li><li>Yarışmacıların aldıkları puana göre sıralama oluşturulmuştur.</li></ul><!--img--><p>Toplam da 175 puan alan Berk 20 m ve 100 m atışlarının sadece birini kaçırmıştır.</p><p><b>Buna göre Berk 30 m ve 50 m atışlarında toplam kaç atışı kaçırmıştır?</b></p>",
    img: "QuestionsImage/kpss/matematik/kesir-problemleri_t1_q34.jpg",
    diff: 3,
    expl: "Berk 20 m ve 100 m mesafelerinin her birinde birer atış kaçırmıştır: 2 · 20 + 2 · 50 = 140 puan. Kalan 35 puan yalnızca bir adet 50 m isabetiyle alınabilir. 30 m'de 3, 50 m'de 2 atış kaçırmıştır; toplam 5.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>1'den 9'a kadar olan rakamlar 9 farklı karta yazılmış ve bu kartlar bir torbaya atılmıştır. 3 öğrencinin oynadığı bu oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her öğrenci torbadan birer kart seçer.</li><li>Her oyunda bir öğrenci belirlenir.</li><li>Diğer iki öğrenci belirlenen bu öğrenciye kendi çektiği kartlardaki sayıların çarpımını söyler.</li><li>Belirlenen ilk öğrenci de bu sayıyla kendi sayısını çarpar ve bir sayı bulur.</li></ul><p><b>Buna göre birinci öğrencinin seçtiği rakam 7 olduğuna göre diğer iki öğrenciden çarptıkları sayıyı aldıktan sonra ki bulabileceği sayı aşağıdakilerden hangisi olabilir?</b></p>",
    diff: 2,
    expl: "Bulunan sayı 7'nin katı olmalıdır; seçeneklerde yalnızca 35 vardır: 35 = 7 · 5 ve 5 = 1 · 5 (farklı iki kart).",
    answers: [
      { text: "86", ok: false },
      { text: "150", ok: false },
      { text: "120", ok: false },
      { text: "72", ok: false },
      { text: "35", ok: true }
    ]
  },
  {
    text: "<p>1'den 9'a kadar olan rakamlar 9 farklı karta yazılmış ve bu kartlar bir torbaya atılmıştır. 3 öğrencinin oynadığı bu oyunun kuralları aşağıda verilmiştir.</p><ul><li>Her öğrenci torbadan birer kart seçer.</li><li>Her oyunda bir öğrenci belirlenir.</li><li>Diğer iki öğrenci belirlenen bu öğrenciye kendi çektiği kartlardaki sayıların çarpımını söyler.</li><li>Belirlenen ilk öğrenci de bu sayıyla kendi sayısını çarpar ve bir sayı bulur.</li></ul><p>İlk öğrenci seçtiği kartı yanlışlıkla ters tutmuş ve arkadaşlarından sayıyı alıp kendi sayısıyla çarptıktan sonra bulması gereken sayıyı 120 fazla bulmuştur.</p><p><b>Buna göre diğer iki öğrencinin çektikleri kartlardaki sayıların toplamı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Ters tutulunca farklı bir rakam gibi okunabilen kart 6'dır (9 olarak okunur). Diğer iki kartın çarpımı P ise 9P − 6P = 3P = 120 ⇒ P = 40 = 5 · 8. Toplam 5 + 8 = 13.",
    answers: [
      { text: "13", ok: true },
      { text: "11", ok: false },
      { text: "9", ok: false },
      { text: "12", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>Bir doğal sayının en sağdaki rakamı siliniyor ve kalan sayı, rakamlarının yerleri değiştirilmeden silinen rakama bölünüyor.</p><p>Bu bölme işleminden elde edilen bölüm, o doğal sayının atölye sayısı olarak tanımlanıyor.</p><p>Örneğin 345 sayısının atölye sayısı 6, 562 sayısının atölye sayısı ise 28' dir.</p><p><b>Yukarıda verilen bilgilere göre 2567 sayısının atölye sayısı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Son rakam 7 silinir, kalan 256 sayısı 7'ye bölünür: 256 = 7 · 36 + 4. Bölüm 36.",
    answers: [
      { text: "32", ok: false },
      { text: "35", ok: false },
      { text: "36", ok: true },
      { text: "42", ok: false },
      { text: "34", ok: false }
    ]
  },
  {
    text: "<p>Bir doğal sayının en sağdaki rakamı siliniyor ve kalan sayı, rakamlarının yerleri değiştirilmeden silinen rakama bölünüyor.</p><p>Bu bölme işleminden elde edilen bölüm, o doğal sayının atölye sayısı olarak tanımlanıyor.</p><p>Örneğin 345 sayısının atölye sayısı 6, 562 sayısının atölye sayısı ise 28' dir.</p><p><b>AABB dört basamaklı sayısının atölye sayısı 23 olduğuna göre A + B toplamının değeri aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "AAB sayısı B'ye bölündüğünde bölüm 23'tür: 23B ≤ 110A + B < 24B ⇒ 22B ≤ 110A < 23B ⇒ 4,78A < B ≤ 5A. A = 1 için B = 5 (115 / 5 = 23); A ≥ 2 için B rakam olamaz. A + B = 6.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: true }
    ]
  }
];
