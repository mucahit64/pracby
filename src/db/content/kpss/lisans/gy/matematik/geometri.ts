import type { McQ } from "../../../../types";

export const MAT_KATI_CISIMLER_T2: McQ[] = [
  {
    text: "<p><b>Şekil-1'de verilen silindir şeklindeki kabın içindeki suyun tamamı Şekil-2'deki kaba aktarılırsa h yüksekliği kaç olur?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q1.jpg",
    diff: 1,
    expl: "Suyun hacmi değişmez. Şekil-1: π · 2<sup>2</sup> · 3 = 12π. Şekil-2: π · 1<sup>2</sup> · h = πh. 12π = πh ⇒ h = 12.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: true },
      { text: "16", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>Yarıçapı 3 br ve yüksekliği 8π br olan silindirin açılımı verilmiştir.</p><p><b>A noktasında bulunan bir karınca, silindir etrafında bir tur atmak şartıyla, D noktasına giderken aldığı <u>en kısa</u> yol kaç π dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q2.jpg",
    diff: 2,
    expl: "Açılımda dikdörtgenin tabanı silindirin çevresi 2π · 3 = 6π, yüksekliği 8π'dir. En kısa yol dikdörtgenin köşegenidir: √((6π)<sup>2</sup> + (8π)<sup>2</sup>) = 10π.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false }
    ]
  },
  {
    text: "<p>Yukarıdaki şekilde O merkezli koni ve silindir iç içe verilmiştir.</p><p>Silindirin yarıçapı 1 cm, koninin yarıçapı 3 cm dir.</p><p><b>Koninin yanal alanı 15π olduğuna göre taralı bölgenin hacmi kaç π'dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q3.jpg",
    diff: 3,
    expl: "Yanal alan π · 3 · l = 15π ⇒ l = 5, koninin yüksekliği √(25 − 9) = 4. Taralı bölge silindirin üstünde kalan, taban yarıçapı 1 olan küçük konidir. Benzerlik oranı 1/3 olduğundan yüksekliği 4/3'tür. Hacim: (1/3) · π · 1<sup>2</sup> · 4/3 = 4π/9.",
    answers: [
      { text: "4/3", ok: false },
      { text: "2/3", ok: false },
      { text: "2/9", ok: false },
      { text: "4/9", ok: true },
      { text: "9/5", ok: false }
    ]
  },
  {
    text: "<p><b>Yarıçapı r = 2 cm, yüksekliği h = 7 cm olarak verilen yarım silindir şeklindeki tahta parçanın yüzey alanı kaç cm<sup>2</sup> dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q4.jpg",
    diff: 2,
    expl: "Yüzey: dikdörtgen yüz 4 · 7 = 28, iki yarım daire π · 2<sup>2</sup> = 4π, eğri yüzey (2π · 2 · 7)/2 = 14π. Toplam: 18π + 28.",
    answers: [
      { text: "18π", ok: false },
      { text: "14π", ok: false },
      { text: "16π + 24", ok: false },
      { text: "18π + 28", ok: true },
      { text: "28π", ok: false }
    ]
  },
  {
    text: "<p><b>O merkezli yarıçapı 5 br olan kürenin içerisinden yarıçapı 4 br olan koni çıkarılırsa kalan kısmın hacmi kaç br<sup>3</sup> dür?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q5.jpg",
    diff: 3,
    expl: "Küre hacmi (4/3)π · 125 = 500π/3. Koninin tabanının merkeze uzaklığı √(25 − 16) = 3 olduğundan koninin yüksekliği 5 + 3 = 8. Koni hacmi (1/3)π · 16 · 8 = 128π/3. Kalan: 372π/3 = 124π.",
    answers: [
      { text: "124π", ok: true },
      { text: "128π", ok: false },
      { text: "130π", ok: false },
      { text: "136π", ok: false },
      { text: "140π", ok: false }
    ]
  },
  {
    text: "<p>Bilgi: Tabanları ve yükseklikleri aynı olan silindirin hacmi koninin hacminin 3 katıdır.</p><!--img--><p><b>Yukarıdaki bilgiye göre şekilde içi sıvı dolu olan kap ters çevrilirse sıvı yüksekliği kaç br olur?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q6.jpg",
    diff: 3,
    expl: "Sıvı, yüksekliği 6 olan koniyi ve silindirin 6 birimlik kısmını doldurur. Koni hacmi 6 yükseklikli silindirin 1/3'ü, yani 2 birim yükseklikli silindire eşittir. Ters çevrilince sıvı silindirde 2 + 6 = 8 br yükseklik oluşturur.",
    answers: [
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "14", ok: false }
    ]
  },
  {
    text: "<p>Tabanı kare yan yüzeyleri eşkenar üçgen olan piramidin bir yüksekliği 3√2 cm'dir.</p><p>|TK| = 3√2 cm</p><!--img--><p><b>Buna göre yanal alanı kaç cm<sup>2</sup> dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q7.jpg",
    diff: 3,
    expl: "Ayrıt a olsun. Yan ayrıt da a, merkezden köşeye uzaklık a√2/2'dir. a<sup>2</sup> = 18 + a<sup>2</sup>/2 ⇒ a<sup>2</sup> = 36 ⇒ a = 6. Yanal alan: 4 · (36√3/4) = 36√3.",
    answers: [
      { text: "18√3", ok: false },
      { text: "36√3", ok: true },
      { text: "25√3", ok: false },
      { text: "18", ok: false },
      { text: "54", ok: false }
    ]
  },
  {
    text: "<p>ABC üçgen<br>|AC| = 3 br<br>|AB| = 4 br</p><!--img--><p><b>Şekilde verilen üçgenin AB etrafında 360° dönmesiyle oluşan koninin, AC etrafında 360° dönmesiyle oluşan koninin hacmine oranı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q8.jpg",
    diff: 1,
    expl: "AB etrafında: yükseklik 4, yarıçap 3 ⇒ V<sub>1</sub> = (1/3)π · 9 · 4 = 12π. AC etrafında: yükseklik 3, yarıçap 4 ⇒ V<sub>2</sub> = (1/3)π · 16 · 3 = 16π. Oran: 12π/16π = 3/4.",
    answers: [
      { text: "2/3", ok: false },
      { text: "3/2", ok: false },
      { text: "3/4", ok: true },
      { text: "4/3", ok: false },
      { text: "5/4", ok: false }
    ]
  },
  {
    text: "<p>ABC ve ADE konilerinin merkezleri K ve L noktalarıdır.</p><p>|AB| = 10<br>|DK| = 3</p><!--img--><p><b>Taralı bölgedeki kesik koninin hacmi kaç cm<sup>3</sup> tür?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q9.jpg",
    diff: 3,
    expl: "Şekildeki işaretlerden D, [AB]'nin orta noktasıdır; büyük koninin yarıçapı 2 · 3 = 6, yüksekliği √(100 − 36) = 8; küçük koninin yarıçapı 3, yüksekliği 4'tür. Kesik koni hacmi: (1/3)π · 36 · 8 − (1/3)π · 9 · 4 = 96π − 12π = 84π.",
    answers: [
      { text: "84π", ok: true },
      { text: "87π", ok: false },
      { text: "90π", ok: false },
      { text: "92π", ok: false },
      { text: "96π", ok: false }
    ]
  },
  {
    text: "<p>Su dolu silindirik kabın yarıçapı r = 4 cm, yüksekliği h = 10 cm'dir.</p><!--img--><p><b>Silindir 45° eğilirse kaç cm<sup>3</sup> su dökülür?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t1_q10.jpg",
    diff: 3,
    expl: "45° eğilince su yüzeyi taban çapı boyunca 8 · tan45° = 8 cm'lik bir yükseklik farkı oluşturur. Dökülen su, yüksekliği 8 cm olan silindirin yarısıdır: (1/2) · π · 4<sup>2</sup> · 8 = 64π.",
    answers: [
      { text: "30π", ok: false },
      { text: "32π", ok: false },
      { text: "48π", ok: false },
      { text: "60π", ok: false },
      { text: "64π", ok: true }
    ]
  }
];

export const MAT_ANALITIK_GEOMETRI_T1: McQ[] = [
  {
    text: "<p>Analitik düzlemde ABCD paralelkenar D(a, 7), C(8, b) noktaları veriliyor.</p><!--img--><p><b>2 · |OA| = |OB| = 6 ise a · b kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q1.jpg",
    diff: 2,
    expl: "|OA| = 3, |OB| = 6 olduğundan A(0, 3), B(6, 0). Paralelkenarda D − A = C − B: (a, 7 − 3) = (8 − 6, b) ⇒ a = 2, b = 4. a · b = 8.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "14", ok: false }
    ]
  },
  {
    text: "<p><b>Yandaki koordinat sisteminde A(−2, 3) noktasında bulunan karınca 2 br sola 4 br aşağı ve B(5, 1) noktasında bulunan karınca 3 br sağa 3 br yukarı giderse aralarındaki uzaklık kaç br olur?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q2.jpg",
    diff: 1,
    expl: "Yeni konumlar A'(−4, −1) ve B'(8, 4). Uzaklık: √(12<sup>2</sup> + 5<sup>2</sup>) = 13.",
    answers: [
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>Yandaki koordinat düzleminde verilen A karesinin x eksenine göre B karesinin y eksenine göre simetrisi alınarak C bölgesi oluşturuluyor.</p><!--img--><p><b>Buna göre oluşan bölgenin alanı kaç birim karedir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q3.jpg",
    diff: 3,
    expl: "A karesi: 1 ≤ x ≤ 5, 1 ≤ y ≤ 5; x eksenine göre simetriği 1 ≤ x ≤ 5, −5 ≤ y ≤ −1. B karesi: −7 ≤ x ≤ −2, −7 ≤ y ≤ −2; y eksenine göre simetriği 2 ≤ x ≤ 7, −7 ≤ y ≤ −2. Ortak C bölgesi 2 ≤ x ≤ 5, −5 ≤ y ≤ −2 olup 3 × 3'lük karedir. Alan = 9.",
    answers: [
      { text: "4", ok: false },
      { text: "9", ok: true },
      { text: "16", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false }
    ]
  },
  {
    text: "<p><b>Dik koordinat düzleminde y ekseni üzerinde bulunan bir A noktası B(−3, 2) ve C(1, 6) noktalarına eşit uzaklıkta olduğuna göre A noktasının orijine uzaklığı kaç br'dir?</b></p>",
    diff: 2,
    expl: "A(0, y): 9 + (2 − y)<sup>2</sup> = 1 + (6 − y)<sup>2</sup> ⇒ 13 − 4y = 37 − 12y ⇒ y = 3. A(0, 3) olup orijine uzaklığı 3'tür.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>Dik koordinat düzleminde A(3, 4) ve B(−9, 7) olmak üzere [AB]'yi içten [AC]/[BC] = 1/2 olacak şekilde bölen C noktasının koordinatları aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "C, A'dan B'ye giden yolun 1/3'ündedir: C = A + (B − A)/3 = (3 − 4, 4 + 1) = (−1, 5).",
    answers: [
      { text: "(−1, 5)", ok: true },
      { text: "(0, 7)", ok: false },
      { text: "(−5, 7)", ok: false },
      { text: "(−4, −7)", ok: false },
      { text: "(−5, −7)", ok: false }
    ]
  },
  {
    text: "<p>Koordinat düzleminde A(8, −3) noktası veriliyor.</p><p>m(ABO) = 45°</p><!--img--><p><b>Yukarıda verilenlere göre ABO üçgeninin alanı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q6.jpg",
    diff: 3,
    expl: "B, y ekseni üzerindedir ve AB doğrusu y ekseniyle 45° yapar; eğim −1'dir. (−3 − y<sub>B</sub>)/8 = −1 ⇒ y<sub>B</sub> = 5. Taban |OB| = 5, yükseklik A'nın apsisi 8. Alan = (5 · 8)/2 = 20.",
    answers: [
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: true },
      { text: "24", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "<p>Dik koordinat düzleminde verilen [CD] doğru parçasının uzunluğu 18 br'dir.</p><!--img--><p><b>CDO üçgeninin ağırlık merkezi P(a, b) noktası olduğuna göre a<sup>2</sup> + b<sup>2</sup> değeri kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q7.jpg",
    diff: 2,
    expl: "CDO dik üçgeninde O'dan hipotenüse çizilen kenarortay 18/2 = 9'dur. Ağırlık merkezi bu kenarortayı 2:1 böldüğünden |OP| = 6. a<sup>2</sup> + b<sup>2</sup> = |OP|<sup>2</sup> = 36.",
    answers: [
      { text: "16", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "36", ok: true },
      { text: "49", ok: false }
    ]
  },
  {
    text: "<p>A, B, C, D, E noktalarından biri orjin olmak üzere birim kareli verilen dik koordinat düzleminde K ve L noktalarının orijine uzaklıkları eşittir.</p><!--img--><p><b>Buna göre x noktasının orijine uzaklığı kaç br'dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q8.jpg",
    diff: 3,
    expl: "Orijin E alınırsa K(−3, −2) ve L(2, 3) olur; |EK| = |EL| = √13 sağlanır (diğer noktalar için eşitlik sağlanmaz). Bu durumda x noktası (−3, 4) olup orijine uzaklığı √(9 + 16) = 5'tir.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>Dik koordinat düzleminde verilen A(4, −3) noktasının x eksenine göre simetrisi B, y eksenine göre simetrisi C, olduğuna göre B ve C noktaları arasındaki uzaklık kaçtır?</b></p>",
    diff: 1,
    expl: "B(4, 3), C(−4, −3). |BC| = √(8<sup>2</sup> + 6<sup>2</sup>) = 10.",
    answers: [
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "12", ok: false },
      { text: "15", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>ABCD kare<br>A(7, 4) ve |OB| = 2 cm</p><!--img--><p><b>Yukarıdaki verilenlere göre C noktasının koordinatları toplamı kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t2_q10.jpg",
    diff: 3,
    expl: "B(2, 0) ve BA = (5, 4). Karede BC, BA'nın 90° döndürülmüşüdür: BC = (−4, 5). C = (2 − 4, 0 + 5) = (−2, 5). Koordinatlar toplamı 3.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false }
    ]
  }
];

export const MAT_ANALITIK_GEOMETRI_T2: McQ[] = [
  {
    text: "<p>Şekilde verilen d<sub>1</sub> ve d<sub>2</sub> doğruları K noktasında kesişmektedir.</p><!--img--><p><b>Buna göre K noktasının apsisi kaçtır?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q1.jpg",
    diff: 2,
    expl: "d<sub>1</sub>: (−10, 0) ve (0, 5) ⇒ −x + 2y = 10. d<sub>2</sub>: (6, 0) ve (0, 6) ⇒ x + y = 6. Toplanırsa 3y = 16 ⇒ y = 16/3, x = 6 − 16/3 = 2/3.",
    answers: [
      { text: "1/4", ok: false },
      { text: "2/3", ok: true },
      { text: "3/5", ok: false },
      { text: "2/7", ok: false },
      { text: "11/8", ok: false }
    ]
  },
  {
    text: "<p><b>Koordinat düzleminde A(1, 5) noktasının d doğrusuna uzaklığı h olmak üzere h kaç br dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q2.jpg",
    diff: 2,
    expl: "d doğrusu (0, 8) ve (6, 0) noktalarından geçer: x/6 + y/8 = 1 ⇒ 4x + 3y − 24 = 0. h = |4 · 1 + 3 · 5 − 24|/√(16 + 9) = 5/5 = 1.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "√2", ok: false },
      { text: "√5", ok: false },
      { text: "√3", ok: false }
    ]
  },
  {
    text: "<p>x = 5, y = −3, y = 2x + 7</p><p><b>doğrularının sınırlandığı kapalı bölgenin alanı kaç br<sup>2</sup> dir?</b></p>",
    diff: 2,
    expl: "Köşeler: (5, −3), (5, 17), (−5, −3). Dik kenarlar 20 ve 10 olduğundan alan = (20 · 10)/2 = 100.",
    answers: [
      { text: "50", ok: false },
      { text: "60", ok: false },
      { text: "72", ok: false },
      { text: "80", ok: false },
      { text: "100", ok: true }
    ]
  },
  {
    text: "<p>Yanda verilen koordinat sisteminde y = 7 br, y = 3 br doğruları arasında çizilen ABCD karesinin B ve D noktalarının y eksenine uzaklıkları farkı 3 tür.</p><!--img--><p><b>Buna göre A(ABCD) kaç br<sup>2</sup> dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q4.jpg",
    diff: 3,
    expl: "B ve D'nin ordinatları farkı 7 − 3 = 4, apsisleri farkı 3'tür. Köşegen |BD| = √(9 + 16) = 5. Karenin alanı köşegenin karesinin yarısıdır: 25/2.",
    answers: [
      { text: "5", ok: false },
      { text: "12/5", ok: false },
      { text: "25/2", ok: true },
      { text: "25", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p><b>Dik koordinat düzleminde A(1, 2), B(−2, 0), C(4, K) noktaları aynı doğru üzerinde ise K kaçtır?</b></p>",
    diff: 1,
    expl: "m<sub>AB</sub> = (0 − 2)/(−2 − 1) = 2/3. m<sub>AC</sub> = (K − 2)/3 = 2/3 ⇒ K = 4.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>Dik koordinat düzleminde 2y + x − 11 = 0 doğrusuna A(3, 2) noktasından çizilen dikme doğrusunun y eksenini kestiği nokta hangisidir?</b></p>",
    diff: 2,
    expl: "Verilen doğrunun eğimi −1/2, dikmenin eğimi 2'dir. y − 2 = 2(x − 3) ⇒ y = 2x − 4. x = 0 için y = −4.",
    answers: [
      { text: "−4", ok: true },
      { text: "−5", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>A(4, 5) B(2, 7) C(1, 3)</p><p><b>noktalarından geçen üçgenin AB kenarına ait kenarortay doğrusunun eğimi kaçtır?</b></p>",
    diff: 2,
    expl: "AB'nin orta noktası M(3, 6). Kenarortay C(1, 3) ve M(3, 6)'dan geçer; eğimi (6 − 3)/(3 − 1) = 3/2.",
    answers: [
      { text: "1/4", ok: false },
      { text: "3/2", ok: true },
      { text: "1/5", ok: false },
      { text: "2/7", ok: false },
      { text: "1/9", ok: false }
    ]
  },
  {
    text: "<p>d<sub>1</sub>: x − y + 1 = 0<br>d<sub>2</sub>: x − 2y + 4 = 0</p><p>y eksenine teğet çizilen ABCD karesinin ağırlık merkezi d<sub>1</sub> ve d<sub>2</sub> doğrularının kesişim noktasından geçmektedir.</p><!--img--><p><b>Buna göre ABCD karesinin alanı kaç br<sup>2</sup> dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q8.jpg",
    diff: 3,
    expl: "x = y − 1 ikinci denkleme yazılırsa y = 3, x = 2. Ağırlık merkezi (2, 3)'tür. Karenin bir kenarı y ekseni üzerinde olduğundan merkezin y eksenine uzaklığı yarım kenardır: a/2 = 2 ⇒ a = 4. Alan = 16.",
    answers: [
      { text: "16", ok: true },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "36", ok: false },
      { text: "64", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki şekle göre, AOBK dörtgeninin alanı kaç br<sup>2</sup> dir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q9.jpg",
    diff: 2,
    expl: "A(12, 0) (d<sub>1</sub>'in x eksenini kestiği nokta), B(0, 12) (d<sub>2</sub>'nin y eksenini kestiği nokta). K: x + 2y = 12 ve 2x + y = 12 ⇒ K(4, 4). Alan = A(AOK) + A(BOK) = (12 · 4)/2 + (12 · 4)/2 = 48.",
    answers: [
      { text: "42", ok: false },
      { text: "45", ok: false },
      { text: "48", ok: true },
      { text: "60", ok: false },
      { text: "64", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıdaki şekle göre d doğrusunun x eksenini kestiği noktanın apsisi kaç birimdir?</b></p>",
    img: "QuestionsImage/kpss/matematik/geometri_t3_q10.jpg",
    diff: 3,
    expl: "k doğrusu (−2, 0) ve (0, 1)'den geçer, eğimi 1/2'dir. d ⊥ k olduğundan d'nin eğimi −2'dir ve d, y eksenini 6'da keser: y = −2x + 6. y = 0 için x = 3.",
    answers: [
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "8", ok: false }
    ]
  }
];
