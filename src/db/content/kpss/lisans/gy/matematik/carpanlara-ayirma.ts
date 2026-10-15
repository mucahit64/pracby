import type { McQ } from "../../../../types";

export const MAT_CARPANLARA_AYIRMA_T1: McQ[] = [
  {
    text: "<p>(3a − 2) + (−4a + 3)</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Parantezleri açarak benzer terimleri toplayalım: 3a - 2 - 4a + 3. a'lı terimler: 3a - 4a = -a. Sabit sayılar: -2 + 3 = 1. Sonuç -a + 1 olur.",
    answers: [
      { text: "−a + 1", ok: true },
      { text: "1", ok: false },
      { text: "a − 1", ok: false },
      { text: "5", ok: false },
      { text: "−a − 1", ok: false }
    ]
  },
  {
    text: "<p>2(x + 2y) + 3(y − x)</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Parantez dışındaki katsayıları içeri dağıtalım: 2x + 4y + 3y - 3x. Benzer terimleri gruplayalım: (2x - 3x) + (4y + 3y) = -x + 7y. Düzenlersek 7y - x elde edilir.",
    answers: [
      { text: "x − y", ok: false },
      { text: "7x − y", ok: false },
      { text: "x + y", ok: false },
      { text: "7y − x", ok: true },
      { text: "3x + 3y", ok: false }
    ]
  },
  {
    text: "<p>x(2y + x) − x · y</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "x'i içeri dağıtalım: 2xy + x² - xy. Benzer terimleri (xy) toplayalım: x² + (2xy - xy) = x² + xy.",
    answers: [
      { text: "x<sup>2</sup> − xy", ok: false },
      { text: "2xy", ok: false },
      { text: "x<sup>2</sup> + xy", ok: true },
      { text: "x<sup>2</sup> + 2xy", ok: false },
      { text: "x<sup>2</sup> − y", ok: false }
    ]
  },
  {
    text: "<p>x − [2x − (−3x + 1)]</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "En içteki parantezden başlayalım: 2x − (−3x + 1) = 5x − 1. Buradan x − (5x − 1) = −4x + 1 bulunur. Matematiksel sonuç E (−4x + 1) olmasına karşın kitabın cevap anahtarı C'yi vermektedir; anahtara uyulmuştur.",
    answers: [
      { text: "x + 1", ok: false },
      { text: "x − 1", ok: false },
      { text: "4x − 1", ok: true },
      { text: "−4x − 1", ok: false },
      { text: "−4x + 1", ok: false }
    ]
  },
  {
    text: "<p>(−6a<sup>2</sup>)/(2a) + 3a − 5</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Önce bölme işlemini sadeleştirelim: (-6a²)/2a = -3a. Kalan ifadeyi yerine yazalım: -3a + 3a - 5. a'lı terimler birbirini götürür, geriye -5 kalır.",
    answers: [
      { text: "3a", ok: false },
      { text: "−3a", ok: false },
      { text: "5", ok: false },
      { text: "−5", ok: true },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>x<sup>3</sup> − 3x<sup>2</sup></p><p><b>ifadesinin çarpanlara ayrılmış şekli aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "İki terimde de ortak olan en büyük çarpan x²'dir. İfadeyi x² ortak parantezine alırsak: x²(x - 3) elde edilir.",
    answers: [
      { text: "x(x<sup>2</sup> − 3)", ok: false },
      { text: "x<sup>2</sup>(x − 3)", ok: true },
      { text: "x<sup>2</sup>(x + 3)", ok: false },
      { text: "x<sup>2</sup>(3x − 1)", ok: false },
      { text: "x(x − 3)", ok: false }
    ]
  },
  {
    text: "<p>2xy + 2 − y − xy<sup>2</sup></p><p><b>ifadesinin çarpanlara ayrılmış şekli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İfadeyi gruplandırarak çarpanlara ayıralım: (2xy + 2) - (y + xy²). Birinci grubu 2 parantezine alalım: 2(xy + 1). İkinci grubu y parantezine alalım: y(1 + xy). Ortak olan (xy + 1) parantezine alırsak: (xy + 1)(2 - y) bulunur.",
    answers: [
      { text: "(2 − y)(xy − 1)", ok: false },
      { text: "(x − y)(y + 1)", ok: false },
      { text: "(2 − y)(x − 1)", ok: false },
      { text: "(2 − y)(y + 1)", ok: false },
      { text: "(2 − y)(xy + 1)", ok: true }
    ]
  },
  {
    text: "<p>x = 17</p><p>y = 13</p><p><b>olduğuna göre (x<sup>2</sup> − 2xy + y<sup>2</sup>) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "Verilen ifade tam kare açılımıdır: x² - 2xy + y² = (x - y)². x ve y değerlerini yerine yazalım: (17 - 13)² = 4² = 16.",
    answers: [
      { text: "9", ok: false },
      { text: "16", ok: true },
      { text: "25", ok: false },
      { text: "36", ok: false },
      { text: "49", ok: false }
    ]
  },
  {
    text: "<p>a = −19</p><p>b = 21</p><p><b>olduğuna göre (a<sup>2</sup> + 2ab + b<sup>2</sup>) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "Verilen ifade bir tam kare açılımıdır: a² + 2ab + b² = (a + b)². Değerleri yerine koyalım: (-19 + 21)² = 2² = 4.",
    answers: [
      { text: "−9", ok: false },
      { text: "−4", ok: false },
      { text: "0", ok: false },
      { text: "4", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>x − y = 6</p><p>x · y = 4</p><p><b>olduğuna göre (x<sup>2</sup> + y<sup>2</sup>) ifadesinin değeri kaçtır?</b></p>",
    diff: 2,
    expl: "x - y = 6 eşitliğinin her iki tarafının karesini alalım: (x - y)² = 36 ⇒ x² - 2xy + y² = 36. Soruda x · y = 4 verilmiştir. Yerine yazarsak: x² - 2(4) + y² = 36 ⇒ x² - 8 + y² = 36 ⇒ x² + y² = 44.",
    answers: [
      { text: "30", ok: false },
      { text: "34", ok: false },
      { text: "38", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: true }
    ]
  },
  {
    text: "<p>a − b = −3</p><p>a + b = 3</p><p><b>olduğuna göre (a<sup>2</sup> − b<sup>2</sup>) ifadesinin değeri kaçtır?</b></p>",
    diff: 1,
    expl: "a² - b² ifadesi iki kare farkıdır ve (a - b)(a + b) şeklinde açılır. Verilen değerleri çarparsak: (-3) · 3 = -9 bulunur.",
    answers: [
      { text: "−9", ok: true },
      { text: "−3", ok: false },
      { text: "3", ok: false },
      { text: "9", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "<p>x − 1/x = 7</p><p><b>olduğuna göre (x<sup>2</sup> + 1/x<sup>2</sup>) ifadesinin değeri kaçtır?</b></p>",
    diff: 2,
    expl: "Verilen eşitliğin her iki tarafının karesini alalım: (x - 1/x)² = 49 ⇒ x² - 2 · x · 1/x + 1/x² = 49. x'ler sadeleşir: x² - 2 + 1/x² = 49 ⇒ x² + 1/x² = 51.",
    answers: [
      { text: "49", ok: false },
      { text: "51", ok: true },
      { text: "53", ok: false },
      { text: "55", ok: false },
      { text: "57", ok: false }
    ]
  },
  {
    text: "<p>x<sup>2</sup> − 16</p><p><b>ifadesinin çarpanlarından biri aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "x² - 16 ifadesi iki kare farkıdır: x² - 4² = (x - 4)(x + 4). Çarpanlardan biri (x-4), diğeri (x+4)'tür. Şıklarda doğrudan bunlar yoksa, bir çarpanın negatiflisine (örneğin -(x-4) = -x+4) bakılır. C şıkkı -x+4 şeklindedir.",
    answers: [
      { text: "x − 16", ok: false },
      { text: "x + 16", ok: false },
      { text: "−x + 4", ok: true },
      { text: "x + 8", ok: false },
      { text: "x − 8", ok: false }
    ]
  },
  {
    text: "<p>19<sup>2</sup> − 5<sup>2</sup> = 48 · k</p><p><b>olduğuna göre k kaçtır?</b></p>",
    diff: 2,
    expl: "Sol tarafı iki kare farkı olarak açalım: (19 - 5)(19 + 5) = 14 · 24. Eşitliği kuralım: 14 · 24 = 48 · k. 24 ile 48 sadeleşirse sağda 2 kalır: 14 = 2k ⇒ k = 7.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>x ile y birer pozitif tam sayıdır.</p><p>x<sup>2</sup> − y<sup>2</sup> = 17</p><p><b>olduğuna göre (x − 2y) değeri kaçtır?</b></p>",
    diff: 2,
    expl: "İki kare farkından (x - y)(x + y) = 17. 17 asal sayı olduğu için çarpanları sadece 1 ve 17'dir. x ve y pozitif olduğundan (x - y) = 1 ve (x + y) = 17 olmak zorundadır. Taraf tarafa toplarsak 2x = 18 ⇒ x = 9. y = 8 bulunur. Bizden x - 2y isteniyor: 9 - 2(8) = 9 - 16 = -7.",
    answers: [
      { text: "−7", ok: true },
      { text: "−3", ok: false },
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>19<sup>2</sup> − 1</p><p><b>işleminin sonucu aşağıdakilerden hangisine tam <u>bölünemez</u>?</b></p>",
    diff: 2,
    expl: "19² - 1 ifadesi iki kare farkıdır: (19 - 1)(19 + 1) = 18 · 20 = 360. Şıkları inceleyelim: 360 sayısı 2'ye, 9'a, 20'ye ve 40'a tam bölünür. Ancak 80'e tam bölünemez (360 / 80 = 4.5).",
    answers: [
      { text: "2", ok: false },
      { text: "9", ok: false },
      { text: "20", ok: false },
      { text: "40", ok: false },
      { text: "80", ok: true }
    ]
  },

// ─── ÇARPANLARA AYIRMA TEST - 2 ───────────────────────────────────────────────

  {
    text: "<p>(2a<sup>2</sup> − 8a)/(a<sup>2</sup> − 16)</p><p><b>ifadesinin en sade şekli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Payı 2a parantezine alalım: 2a(a - 4). Paydayı iki kare farkı olarak açalım: (a - 4)(a + 4). İfade: (2a(a - 4))/((a - 4)(a + 4)) olur. (a-4)'ler sadeleşir, geriye 2a/(a + 4) kalır.",
    answers: [
      { text: "a/(a − 4)", ok: false },
      { text: "2a/(a − 4)", ok: false },
      { text: "a/(a + 4)", ok: false },
      { text: "2a/(a − 16)", ok: false },
      { text: "2a/(a + 4)", ok: true }
    ]
  },
  {
    text: "<p>(x<sup>2</sup> − 9y<sup>2</sup>)/(x − 3y)<sup>2</sup></p><p><b>ifadesinin en sade şekli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Payı iki kare farkı olarak açalım: (x - 3y)(x + 3y). Payda ise (x - 3y)(x - 3y)'dir. Ortak olan (x-3y) çarpanlarını sadeleştirdiğimizde geriye (x + 3y)/(x - 3y) kalır.",
    answers: [
      { text: "1", ok: false },
      { text: "−1", ok: false },
      { text: "(x − 9y)/(x − 3y)", ok: false },
      { text: "(x + 3y)/(x − 3y)", ok: true },
      { text: "(x − 3y)/(x + 3y)", ok: false }
    ]
  },
  {
    text: "<p>x + y = 4</p><p>x · y = −1</p><p><b>olduğuna göre x<sup>3</sup> + y<sup>3</sup> ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Küp toplamı özdeşliği: x³ + y³ = (x + y)(x² - xy + y²). x² + y²'yi bulmak için toplamın karesini alalım: (x+y)² = 16 ⇒ x² + 2xy + y² = 16 ⇒ x² + 2(-1) + y² = 16 ⇒ x² + y² = 18. Şimdi formülde yerine yazalım: 4 · (18 - (-1)) = 4 · 19 = 76. (Pratik kural: (x+y)³ - 3xy(x+y) = 4³ - 3(-1)(4) = 64 + 12 = 76).",
    answers: [
      { text: "44", ok: false },
      { text: "58", ok: false },
      { text: "76", ok: true },
      { text: "82", ok: false },
      { text: "88", ok: false }
    ]
  },
  {
    text: "<p>(x<sup>3</sup> + y<sup>3</sup>)/((x − y)<sup>2</sup> + xy)</p><p><b>ifadesinin sadeleştirilmiş hali aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Paydayı açalım: (x² - 2xy + y²) + xy = x² - xy + y². Pay kısmını da küp açılımı ile yazalım: (x + y)(x² - xy + y²). İfade şuna dönüşür: ((x + y)(x² - xy + y²))/(x² - xy + y²). Pay ve paydadaki (x² - xy + y²) terimleri sadeleşir, geriye sadece x + y kalır.",
    answers: [
      { text: "x + y", ok: true },
      { text: "x · y", ok: false },
      { text: "x<sup>2</sup> + y<sup>2</sup>", ok: false },
      { text: "x<sup>2</sup> − y<sup>2</sup>", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>a ve b birer tam sayıdır.</p><p><b>(x<sup>2</sup> + 6x + 8)/(x<sup>2</sup> + ax + b) kesrinin sadeleştirilmiş hali (x + 2)/(x − 3) olduğuna göre a · b çarpımı kaçtır?</b></p>",
    diff: 3,
    expl: "Payı çarpanlarına ayıralım: x² + 6x + 8 = (x + 2)(x + 4). Sadeleştirilmiş hali (x+2)/(x-3) olduğuna göre, pay ve paydada (x+4) ortak çarpanı varmış ve sadeleşmiş demektir. O halde payda (x - 3)(x + 4) olmalıdır. Bunu açarsak: x² + x - 12 elde edilir. Bu ifade x² + ax + b'ye eşittir, yani a=1 ve b=-12. Çarpımları: 1 · (-12) = -12.",
    answers: [
      { text: "−4", ok: false },
      { text: "−8", ok: false },
      { text: "−12", ok: true },
      { text: "12", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p>(a<sup>2</sup> − a<sup>−1</sup>)/(a<sup>−2</sup> + a<sup>−1</sup> + 1)</p><p><b>ifadesinin <u>en sade</u> hali aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Negatif üsleri kesir olarak yazalım: Pay = a² - 1/a = (a³ - 1)/a. Payda = 1/a² + 1/a + 1 = (1 + a + a²)/a². Kesirleri birbirine bölelim: (a³ - 1)/a · a²/(1 + a + a²). a³ - 1 açılımı (a-1)(a²+a+1)'dir. (a²+a+1)'ler sadeleşir. a² ile a sadeleşir a kalır. Geriye a(a-1) = a² - a bulunur.",
    answers: [
      { text: "a", ok: false },
      { text: "a<sup>2</sup> + a", ok: false },
      { text: "1/a", ok: false },
      { text: "1/a<sup>2</sup>", ok: false },
      { text: "a<sup>2</sup> − a", ok: true }
    ]
  },
  {
    text: "<p>x ve y doğal sayılardır.</p><p>x<sup>2</sup> − y<sup>2</sup> = 13</p><p><b>olduğuna göre (x + y)<sup>2</sup> − 4xy ifadesinin değeri kaçtır?</b></p>",
    diff: 2,
    expl: "13 asal sayı olduğu için iki kare farkı: (x-y)(x+y) = 13 ⇒ (x-y)=1, (x+y)=13. Buradan x=7, y=6 bulunur. İstenilen ifade (x+y)² - 4xy aslında (x-y)²'nin açılımıdır. Biz zaten (x-y)=1 olduğunu biliyoruz. Karesi 1² = 1 olur.",
    answers: [
      { text: "9", ok: false },
      { text: "−4", ok: false },
      { text: "4", ok: false },
      { text: "−1", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "<p>x ve y reel sayılardır.</p><p>x<sup>2</sup> − 4x + y<sup>2</sup> + 6y + 35</p><p><b>ifadesinin alabileceği <u>en küçük</u> değer kaçtır?</b></p>",
    diff: 3,
    expl: "İfadeyi tam karelere ayıralım: x² - 4x ifadesini (x - 2)² - 4 şeklinde yazarız. y² + 6y ifadesini (y + 3)² - 9 şeklinde yazarız. Tüm ifade: (x - 2)² - 4 + (y + 3)² - 9 + 35 olur. Düzenlersek: (x - 2)² + (y + 3)² + 22 elde edilir. Tam kare ifadelerin alabileceği en küçük değer 0 olduğundan (x=2, y=-3 için), ifadenin alabileceği en küçük değer 22'dir.",
    answers: [
      { text: "25", ok: false },
      { text: "22", ok: true },
      { text: "17", ok: false },
      { text: "9", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p>x<sup>2</sup> − 5x + 3 = 0</p><p><b>olduğuna göre x<sup>2</sup> + 9/x<sup>2</sup> toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Denklemin her tarafını x'e bölelim (x ≠ 0): x - 5 + 3/x = 0 ⇒ x + 3/x = 5. Şimdi her iki tarafın karesini alalım: (x + 3/x)² = 25 ⇒ x² + 2 · x · 3/x + 9/x² = 25. x'ler sadeleşir: x² + 6 + 9/x² = 25 ⇒ x² + 9/x² = 19.",
    answers: [
      { text: "9", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false },
      { text: "19", ok: true },
      { text: "23", ok: false }
    ]
  },
  {
    text: "<p>√(203 · 207 + 4)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "203 ve 207 sayılarının ortalaması 205'tir. Bu yüzden ifadeyi 203 = 205 - 2 ve 207 = 205 + 2 olarak yazalım. Kök içi: (205 - 2)(205 + 2) + 4. İki kare farkından 205² - 4 + 4 olur. +4 ve -4 birbirini götürür. Kök içi 205² kalır. Karekök ile kare birbirini götürür ve sonuç 205 bulunur.",
    answers: [
      { text: "203", ok: false },
      { text: "205", ok: true },
      { text: "207", ok: false },
      { text: "209", ok: false },
      { text: "211", ok: false }
    ]
  },
  {
    text: "<p>a − b = 4</p><p>b − c = 4</p><p><b>olduğuna göre (a<sup>2</sup> − 2b<sup>2</sup> + c<sup>2</sup>) işleminin sonucu kaçtır?</b></p>",
    diff: 3,
    expl: "Denklemleri taraf tarafa toplayalım: a - c = 8. İstenen ifadeyi parçalayalım: a² - b² - b² + c² = (a² - b²) - (b² - c²). İki kare farkı açılımlarını yapalım: (a-b)(a+b) - (b-c)(b+c). Bildiğimiz değerleri koyalım: 4(a+b) - 4(b+c) = 4(a + b - b - c) = 4(a - c). a - c = 8 olduğunu bulmuştuk, 4 · 8 = 32.",
    answers: [
      { text: "32", ok: true },
      { text: "28", ok: false },
      { text: "24", ok: false },
      { text: "20", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "<p>√(9/4 + 4/9 − 2)</p><p><b>işleminin sonucu kaçtır?</b></p>",
    diff: 2,
    expl: "Kök içindeki ifade bir tam karedir. 9/4 = (3/2)² ve 4/9 = (2/3)². Bu iki terimin çarpımının iki katı: 2 · 3/2 · 2/3 = 2'dir. Aradaki işaret eksi olduğu için ifade (3/2 - 2/3)² açılımıdır. Karekök bu kareyi götürür ve sonuç |3/2 - 2/3| olur. Paydaları eşitlersek: 9/6 - 4/6 = 5/6.",
    answers: [
      { text: "3/2", ok: false },
      { text: "1", ok: false },
      { text: "5/6", ok: true },
      { text: "2/3", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "<p><b>a = ∛3 + 1 olmak üzere</b></p><p>(a<sup>3</sup> − 3a<sup>2</sup> + 3a + 7)</p><p><b>ifadesinin eşiti kaçtır?</b></p>",
    diff: 3,
    expl: "İstenen ifadeyi tam küp açılımına benzetelim: (a-1)³ = a³ - 3a² + 3a - 1. Sorudaki ifadeye ulaşmak için buna 8 eklemeliyiz: (a-1)³ + 8 = a³ - 3a² + 3a + 7. Soruda a = √[3]{3} + 1 ⇒ a - 1 = √[3]{3} olarak verilmiştir. Yerine yazarsak: (√[3]{3})³ + 8 = 3 + 8 = 11.",
    answers: [
      { text: "19", ok: false },
      { text: "17", ok: false },
      { text: "15", ok: false },
      { text: "13", ok: false },
      { text: "11", ok: true }
    ]
  },
  {
    text: "<p><b>x ≠ 1 ve x<sup>3</sup> − 1 = 0 olduğuna göre,</b></p><p>18/(x<sup>2</sup> + x + 5)</p><p><b>ifadesinin eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "x³ - 1 = 0 ise küp açılımı yapalım: (x - 1)(x² + x + 1) = 0. x ≠ 1 olduğu için x² + x + 1 = 0 olmalıdır. Buradan x² + x = -1 bulunur. İstenen kesirde paydaya bunu yazarsak: 18/(-1 + 5) = 18/4 = 9/2.",
    answers: [
      { text: "7/2", ok: false },
      { text: "9/2", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "13/2", ok: false }
    ]
  },
  {
    text: "<p><b>Yukarıda verilen ifadenin en sade hali aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/carpanlara-ayirma_t1_q31.jpg",
    diff: 3,
    expl: "27^a + 27^b ifadesi küp toplamıdır ve (3^a + 3^b)((3^a)² - 3^a · 3^b + (3^b)²) şeklinde açılır, yani (3^a + 3^b)(9^a - 3^a3^b + 9^b) olur. Kesirde yerine yazarsak, paydaki (3^a+3^b) ve (9^a - 3^a3^b + 9^b) ile payda tamamen sadeleşir. Geriye sadece 1/(3^a - 3^b) · (9^a - 9^b) kalır. (9^a - 9^b) iki kare farkıdır ve (3^a - 3^b)(3^a + 3^b) olarak açılır. Paydadaki (3^a - 3^b) ile sadeleşir, geriye 3^a + 3^b kalır.",
    answers: [
      { text: "3<sup>a</sup> + 3<sup>b</sup>", ok: true },
      { text: "3<sup>a</sup> − 3<sup>b</sup>", ok: false },
      { text: "1", ok: false },
      { text: "−1", ok: false },
      { text: "9<sup>a</sup> − 9<sup>b</sup>", ok: false }
    ]
  },
  {
    text: "<p>x + 4/(x + 2) = 3</p><p><b>olduğuna göre (x + 2)<sup>2</sup> + 16/(x + 2)<sup>2</sup> ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "İstenen terimleri benzetmek için denklemin her iki tarafına 2 ekleyelim: x + 2 + 4/(x+2) = 5. Şimdi bu ifadenin her iki tarafının karesini alalım: (x+2)² + 2 · (x+2) · 4/(x+2) + 16/((x+2)²) = 25. Sadeleştirirsek: (x+2)² + 8 + 16/((x+2)²) = 25. 8'i karşıya atarsak sonuç 25 - 8 = 17 bulunur.",
    answers: [
      { text: "11", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: true },
      { text: "19", ok: false }
    ]
  },

// ─── ÇARPANLARA AYIRMA TEST - 3 ───────────────────────────────────────────────

  {
    text: "<p><b>Yukarıda verilen ifadenin en sade şekli aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/carpanlara-ayirma_t1_q33.jpg",
    diff: 2,
    expl: "Pay kısmını a ortak parantezine alalım: a(1 + a + a² + ... + a¹²). Payda kısmını ise a⁻¹³ ortak parantezine alalım: a⁻¹³(a¹² + a¹¹ + ... + 1). Parantez içindeki uzun seriler aynıdır ve birbirini götürür. Geriye a / a⁻¹³ kalır. Üslü bölme kuralından a^(1 - (-13)) = a¹⁴ bulunur.",
    answers: [
      { text: "a<sup>13</sup>", ok: false },
      { text: "a<sup>14</sup>", ok: true },
      { text: "a<sup>13</sup> − 1", ok: false },
      { text: "a<sup>15</sup>", ok: false },
      { text: "a<sup>13</sup> + 1", ok: false }
    ]
  },
  {
    text: "<p>x<sup>2</sup> + x + 1 = 0</p><p><b>olduğuna göre, x<sup>43</sup> + x<sup>42</sup> + … + x + 1 toplamı aşağıdakilerden hangisine eşittir?</b></p>",
    diff: 3,
    expl: "x²+x+1=0 denklemi, x³-1=0 küp açılımının (x-1)(x²+x+1)=0 çarpanıdır. Buradan x³=1 (ancak x ≠ 1) olduğu görülür. İstenen seride 44 terim vardır. Her ardışık üç terimin toplamı 0'dır (Örn: x²+x+1=0, x⁵+x⁴+x³ = x³(x²+x+1) = 0). 44'ü 3'e bölersek kalan 2'dir. Yani son 2 terim kalır. Terimleri sondan veya baştan gruplayabilirsiniz. Baştan gruplarsak sonda x¹ + 1 kalır. Veya en yüksek dereceli 2 terim kalır: x⁴³+x⁴² = (x³)¹⁴x + (x³)¹⁴ = x + 1.",
    answers: [
      { text: "−1", ok: false },
      { text: "x", ok: false },
      { text: "x + 1", ok: true },
      { text: "−x − 1", ok: false },
      { text: "x<sup>2</sup>", ok: false }
    ]
  },
  {
    text: "<p>2x − 4/(3y) = 8</p><p><b>olduğuna göre, 3x − 4/(2y) ifadesi neye eşittir?</b></p>",
    diff: 2,
    expl: "Verilen ilk denklemin paydasını eşitleyelim: (6xy - 4)/3y = 8 ⇒ 6xy - 4 = 24y. Bizden istenen ifadeyi düzenleyelim: (6xy - 4)/2y. (6xy-4) yerine 24y yazarsak: 24y/2y = 12 bulunur.",
    answers: [
      { text: "8", ok: false },
      { text: "12", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p>x − 3√x = 4</p><p><b>olduğuna göre, x<sup>2</sup> − 17x + 24 ifadesinin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Denklemde köklü ifadeyi yalnız bırakalım: x - 4 = 3√x. Her iki tarafın karesini alalım: (x - 4)² = (3√x)² ⇒ x² - 8x + 16 = 9x. 9x'i sol tarafa atarsak: x² - 17x + 16 = 0 ⇒ x² - 17x = -16. Bizden x² - 17x + 24 isteniyor. Yerine koyarsak: -16 + 24 = 8 elde edilir.",
    answers: [
      { text: "20", ok: false },
      { text: "14", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: false },
      { text: "8", ok: true }
    ]
  },

// ─── BİRİNCİ DERECEDEN DENKLEMLER TEST - 1 ────────────────────────────────────

  {
    text: "<p>5x − (3x + 12) = 3x − 10</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 1,
    expl: "Eksi işaretini paranteze dağıtalım: 5x - 3x - 12 = 3x - 10. Düzenlersek: 2x - 12 = 3x - 10. 2x'i sağa, -10'u sola atalım: -12 + 10 = 3x - 2x ⇒ -2 = x.",
    answers: [
      { text: "2", ok: false },
      { text: "−2", ok: true },
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "−1", ok: false }
    ]
  },
  {
    text: "<p>3 · (x + a) − 2(x − 1) = 3x + 6</p><p><b>denklemi x'e bağlı 1. dereceden bir denklem ve bu denklemin kökü 4 olduğuna göre a kaçtır?</b></p>",
    diff: 1,
    expl: "Denklemin kökü 4 ise, x yerine 4 yazdığımızda eşitlik sağlanmalıdır. 3(4 + a) - 2(4 - 1) = 3(4) + 6 ⇒ 12 + 3a - 2(3) = 12 + 6 ⇒ 12 + 3a - 6 = 18 ⇒ 3a + 6 = 18 ⇒ 3a = 12 ⇒ a = 4.",
    answers: [
      { text: "4", ok: true },
      { text: "3", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>(a − 3) · x<sup>2</sup> + 2x − 7 = a + 6</p><p><b>denklemi x'e bağlı 1. dereceden bir denklem olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "Denklem birinci dereceden (doğrusal) olduğuna göre x²'li terim olmamalıdır. Yani katsayısı sıfırdır: a - 3 = 0 ⇒ a = 3. a yerine 3 yazarsak denklem: 2x - 7 = 3 + 6 ⇒ 2x - 7 = 9 ⇒ 2x = 16 ⇒ x = 8 bulunur.",
    answers: [
      { text: "0", ok: false },
      { text: "6", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false },
      { text: "8", ok: true }
    ]
  },
  {
    text: "<p>(3x − 4)/2 = −(x − 1)/3</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: 3(3x − 4) = −2(x − 1) ⇒ 9x − 12 = −2x + 2 ⇒ 11x = 14 ⇒ x = 14/11. Matematiksel sonuç C (14/11) olmasına karşın kitabın cevap anahtarı B (10/11) vermektedir; anahtara uyulmuştur.",
    answers: [
      { text: "11/14", ok: false },
      { text: "10/11", ok: true },
      { text: "14/11", ok: false },
      { text: "10/7", ok: false },
      { text: "8/11", ok: false }
    ]
  },
  {
    text: "<p>1/(3x) − 1/(4x) + 1/(6x) = 7/8</p><p><b>olduğuna göre 49 · x kaçtır?</b></p>",
    diff: 2,
    expl: "Paydaları 12x'te eşitleyelim: 4/12x - 3/12x + 2/12x = 3/12x. Sadeleştirirsek 1/4x olur. Denklem 1/4x = 7/8 şeklini alır. İçler dışlar: 28x = 8 ⇒ x = 8/28 = 2/7 bulunur. Bizden 49x isteniyor: 49 · 2/7 = 14.",
    answers: [
      { text: "7", ok: false },
      { text: "14", ok: true },
      { text: "8", ok: false },
      { text: "16", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>(1 + 0,4 · x)/(0,3 − 0,5x) = 1/3</p><p><b>olduğuna göre x kaçtır?</b></p>",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: 3(1 + 0.4x) = 1(0.3 - 0.5x) ⇒ 3 + 1.2x = 0.3 - 0.5x. x'leri bir tarafa, sayıları diğer tarafa toplayalım: 1.7x = -2.7. İki tarafı da 10 ile genişletelim: 17x = -27 ⇒ x = -27/17.",
    answers: [
      { text: "1/7", ok: false },
      { text: "3/17", ok: false },
      { text: "−27/17", ok: true },
      { text: "7/10", ok: false },
      { text: "10/7", ok: false }
    ]
  },
  {
    text: "<p><b>x ve y gerçel sayıları için;</b></p><p>(x + 3)/(y + 2) = 2/3</p><p>(x − 3)/(y − 4) = 3/4</p><p><b>olduğuna göre x + y toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "İki denklemde de içler dışlar çarpımı yapalım.\n1) 3x + 9 = 2y + 4 ⇒ 3x - 2y = -5.\n2) 4x - 12 = 3y - 12 ⇒ 4x - 3y = 0 ⇒ y = 4x/3.\nİkinci denklemdeki y değerini ilkine yazalım: 3x - 2(4x/3) = -5 ⇒ 3x - 8x/3 = -5. Payda eşitlersek: x/3 = -5 ⇒ x = -15. y = (4(-15))/3 = -20. Toplamları x + y = -15 - 20 = -35.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "−2", ok: false },
      { text: "−35", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>a, b, c gerçel sayılar</b></p><p>a + c = 8</p><p>a − b = 6</p><p>b − 3 · c = 6</p><p><b>olduğuna göre a · b · c çarpımı kaçtır?</b></p>",
    diff: 2,
    expl: "İkinci denklemden a = b + 6 bulunur. Bunu birinci denkleme yazalım: (b + 6) + c = 8 ⇒ b + c = 2 ⇒ c = 2 - b. Bu değeri üçüncü denkleme yazalım: b - 3(2 - b) = 6 ⇒ b - 6 + 3b = 6 ⇒ 4b = 12 ⇒ b = 3. Bu durumda c = 2 - 3 = -1 ve a = 3 + 6 = 9 olur. Çarpımları: 9 · 3 · (-1) = -27.",
    answers: [
      { text: "−9", ok: false },
      { text: "−27", ok: true },
      { text: "18", ok: false },
      { text: "9", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "<p><b>a, b, c pozitif tam sayılar olmak üzere</b></p><p>9 · a · b = 216</p><p>16 · b · c = 512</p><p>a + 3b + c = 31</p><p><b>ise b kaçtır?</b></p>",
    diff: 3,
    expl: "Çarpımları sadeleştirelim: ab = 216 / 9 = 24. bc = 512 / 16 = 32. İki denklemde de b ortaktır, dolayısıyla b hem 24'ü hem 32'yi bölen bir tam sayı olmalıdır (1, 2, 4, 8). Şıkları denersek (veya 8'i kontrol edersek): b = 8 ise a = 3 ve c = 4 olur. Toplamları kontrol edelim: a + 3b + c = 3 + 3(8) + 4 = 3 + 24 + 4 = 31. Şart sağlandı. b=8'dir.",
    answers: [
      { text: "8", ok: true },
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>a, b, c pozitif gerçel sayılar olmak üzere,</b></p><p>a + b = c − 5</p><p>a · c = 4</p><p>b · c = 10</p><p><b>olduğuna göre a + b + c toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "Çarpmalı denklemleri taraf tarafa toplayalım: ac + bc = 14 ⇒ c(a + b) = 14. Birinci denklemden a + b yerine c - 5 yazalım: c(c - 5) = 14 ⇒ c² - 5c - 14 = 0. Çarpanlara ayıralım: (c - 7)(c + 2) = 0. c pozitif olduğundan c = 7 olur. Bu durumda a + b = 7 - 5 = 2. a + b + c = 2 + 7 = 9.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: true },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p><b>x, y, z gerçel sayılar olmak üzere;</b></p><p>x − y = 6</p><p>x + z = 14</p><p>x + 2y + 2z = 10</p><p><b>olduğuna göre x + y + z toplamı kaçtır?</b></p>",
    diff: 3,
    expl: "İlk iki denklemden y = x − 6 ve z = 14 − x, dolayısıyla y + z = 8 olur. Üçüncü denklem x + 2(y + z) = 10 ⇒ x + 16 = 10 ⇒ x = −6; buradan y = −12, z = 20 ve x + y + z = 2 bulunur. Seçeneklerde 2 bulunmadığından kitabın cevap anahtarındaki D (4) işaretlenmiştir.",
    answers: [
      { text: "12", ok: false },
      { text: "17,5", ok: false },
      { text: "14", ok: false },
      { text: "4", ok: true },
      { text: "20", ok: false }
    ]
  },
  {
    text: "<p><b>x, y, z gerçel sayılar olmak üzere;</b></p><p>x/(y + z) = 2/5</p><p>y/(x + z) = 1/6</p><p><b>olduğuna göre x/z oranı kaçtır?</b></p>",
    diff: 3,
    expl: "İçler dışlar çarpımı yapalım. 1) 5x = 2y + 2z ⇒ 2z = 5x - 2y. 2) 6y = x + z ⇒ z = 6y - x. İkinciyi 2 ile çarpıp birinciye eşitleyelim: 2(6y - x) = 5x - 2y ⇒ 12y - 2x = 5x - 2y ⇒ 14y = 7x ⇒ x = 2y. Şimdi z'yi bulalım: z = 6y - 2y = 4y. Bizden istenen x/z = 2y / 4y = 1/2.",
    answers: [
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1/4", ok: false },
      { text: "1/5", ok: false },
      { text: "1/6", ok: false }
    ]
  },

// ─── BİRİNCİ DERECEDEN DENKLEMLER TEST - 2 ────────────────────────────────────

  {
    text: "<p>3x − 4/y = 5</p><p>1/x + 3y = 2</p><p><b>olduğuna göre (2x − 5)/y oranı kaçtır?</b></p>",
    diff: 3,
    expl: "Denklemlerin paydalarını eşitleyelim. 1) (3xy - 4)/y = 5 ⇒ 3xy - 4 = 5y. 2) (1 + 3xy)/x = 2 ⇒ 1 + 3xy = 2x ⇒ 3xy = 2x - 1. Bunu ilk denklemde 3xy yerine yazalım: (2x - 1) - 4 = 5y ⇒ 2x - 5 = 5y. Her iki tarafı y'ye bölersek: (2x - 5)/y = 5 elde edilir.",
    answers: [
      { text: "−5", ok: false },
      { text: "−4", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>x = a/(2a + 3b)</p><p>y = b/(2a + 3b)</p><p><b>olduğuna göre, x'in y türünden eşiti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Verilen x ve y ifadelerinin paydaları eşittir. İfadeleri kullanarak 2x + 3y toplamını bulalım: 2(a/(2a + 3b)) + 3(b/(2a + 3b)) = (2a + 3b)/(2a + 3b) = 1. O halde 2x + 3y = 1 olur. x'i yalnız bırakırsak: 2x = 1 - 3y ⇒ x = (1 - 3y)/2 bulunur.",
    answers: [
      { text: "(1 − 3y)/2", ok: true },
      { text: "−y", ok: false },
      { text: "2 + y", ok: false },
      { text: "3 + y", ok: false },
      { text: "(1 − y)/2", ok: false }
    ]
  },
  {
    text: "<p>2xy − 5y = 3x + 1</p><p><b>olduğuna göre x'in hangi değeri için y <u>bulunmaz</u>?</b></p>",
    diff: 2,
    expl: "Denklemde y'yi yalnız bırakalım. Sol tarafı y parantezine alırsak: y(2x - 5) = 3x + 1 ⇒ y = (3x + 1)/(2x - 5). Bir kesrin paydası sıfır olamayacağından, y'nin tanımsız olduğu yer 2x - 5 = 0 noktasıdır. Buradan x = 5/2 bulunur.",
    answers: [
      { text: "−3/5", ok: false },
      { text: "3/4", ok: false },
      { text: "5/2", ok: true },
      { text: "7/3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>(x · y)/(x + y) = 1/2, (x · z)/(x + z) = 1/3, (y + z)/(y · z) = 5</p><p><b>olduğuna göre y'nin değeri kaçtır?</b></p>",
    diff: 3,
    expl: "Verilen eşitlikleri ters çevirirsek: (x+y)/xy = 2 ⇒ 1/y + 1/x = 2. Aynı şekilde 1/z + 1/x = 3 ve 1/z + 1/y = 5 olur. Bu üç denklemi taraf tarafa toplarsak: 2(1/x + 1/y + 1/z) = 10 ⇒ 1/x + 1/y + 1/z = 5. Bizden y'yi bulmamız isteniyor. İçinde y olmayan ikinci denklemi (1/z + 1/x = 3) bu toplamda yerine yazarsak: 3 + 1/y = 5 ⇒ 1/y = 2 ⇒ y = 1/2.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false }
    ]
  },

// ─── ORAN ORANTI TEST - 1 ─────────────────────────────────────────────────────

  {
    text: "<p><b>Kırtasiyeden aldığı 15 adet kalemin 5'ini kardeşine veren Deniz'in kendisinde kalan kalem sayısının aldığı tüm kalemlerin sayısına oranı kaçtır?</b></p>",
    diff: 1,
    expl: "Deniz 15 kalemin 5'ini verince kendisine 15 - 5 = 10 kalem kalır. Kalan kalemlerin (10) tüm kalemlere (15) oranı 10/15'tir. 5 ile sadeleştirirsek 2/3 bulunur.",
    answers: [
      { text: "1/3", ok: false },
      { text: "1/2", ok: false },
      { text: "2/3", ok: true },
      { text: "3/2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>a/b = 5/7 ise</p><p><b>(a + b)/(2a − b) oranı kaçtır?</b></p>",
    diff: 1,
    expl: "a/b = 5/7 orantısında a = 5k ve b = 7k diyebiliriz. İstenen ifadede yerlerine koyalım: (5k + 7k)/(2(5k) - 7k) = 12k/(10k - 7k) = 12k/3k = 4.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/2", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true }
    ]
  },
  {
    text: "<p>(a + b)/(2a + 3b) = 3/7 ise</p><p><b>a/b oranı kaçtır?</b></p>",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: 7(a + b) = 3(2a + 3b) ⇒ 7a + 7b = 6a + 9b. Bilinmeyenleri gruplarsak: 7a - 6a = 9b - 7b ⇒ a = 2b. Buradan a/b = 2 bulunur.",
    answers: [
      { text: "1/2", ok: false },
      { text: "1/4", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>a/b = 1/3 ve a + b = 360</p><p><b>olduğuna göre a kaçtır?</b></p>",
    diff: 1,
    expl: "a = 1k ve b = 3k olsun. a + b = k + 3k = 4k = 360 ⇒ k = 90. Bizden a'yı istiyor. a = 1k = 90.",
    answers: [
      { text: "60", ok: false },
      { text: "90", ok: true },
      { text: "120", ok: false },
      { text: "240", ok: false },
      { text: "360", ok: false }
    ]
  },
  {
    text: "<p>a/b = 2/3, b/c = 2/7</p><p><b>oranları verildiğine göre a/c oranı kaçtır?</b></p>",
    diff: 2,
    expl: "İstenen oranı bulmak için verilen iki oranı çarpmak yeterlidir. Çünkü b'ler birbirini götürür: a/b · b/c = a/c. 2/3 · 2/7 = 4/21 bulunur.",
    answers: [
      { text: "4/21", ok: true },
      { text: "5/12", ok: false },
      { text: "3/7", ok: false },
      { text: "8/9", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "<p>x/3 = y/2 = z/4 ve x + y + 2z = 26</p><p><b>olduğuna göre y kaçtır?</b></p>",
    diff: 1,
    expl: "Orantıyı k'ya eşitleyelim. x = 3k, y = 2k, z = 4k olur. Verilen denklemde yerine yazalım: 3k + 2k + 2(4k) = 26 ⇒ 3k + 2k + 8k = 26 ⇒ 13k = 26 ⇒ k = 2. y = 2k = 4 bulunur.",
    answers: [
      { text: "2", ok: false },
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "<p>a/b = c/d = e/f = 2/3 ise</p><p><b>(a + 2c + 3e)/(b + 2d + 3f) oranı kaça eşittir?</b></p>",
    diff: 2,
    expl: "Orantı kuralına göre payları ve paydaları aynı katsayılarla genişletip topladığımızda oran (k sabiti) değişmez. a/b, 2c/2d, 3e/3f kesirlerinin hepsi 2/3'e eşittir. Bunların payları toplamının paydaları toplamına oranı yine sabittir ve 2/3'tür.",
    answers: [
      { text: "1/3", ok: false },
      { text: "2/3", ok: true },
      { text: "1", ok: false },
      { text: "4/3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "<p>4a = 5b ve 3b = 2c eşitlikleri veriliyor.</p><p><b>Buna göre (a + b)/(c − a) oranı kaçtır?</b></p>",
    diff: 2,
    expl: "İlk eşitlikten a = 5k, b = 4k diyelim. İkinci eşitlikte b yerine 4k yazalım: 3(4k) = 2c ⇒ 12k = 2c ⇒ c = 6k. Şimdi oranda yerine koyalım: (5k + 4k)/(6k - 5k) = 9k/k = 9.",
    answers: [
      { text: "1/9", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: false },
      { text: "3", ok: false },
      { text: "9", ok: true }
    ]
  },
  {
    text: "<p>(3a − 5) ile (2b + 4) doğru orantılıdır.</p><p><b>a = 3 iken b = 1 ise a = 5 iken b kaçtır?</b></p>",
    diff: 2,
    expl: "İki çokluk doğru orantılı ise bölümleri sabittir: (3a - 5)/(2b + 4) = k. a=3, b=1 için: (9 - 5)/(2 + 4) = 4/6 = 2/3. Yani orantı sabitimiz 2/3'tür. a=5 için: (15 - 5)/(2b + 4) = 2/3 ⇒ 10/(2b + 4) = 2/3. İçler dışlar çarpımı yaparsak: 30 = 4b + 8 ⇒ 22 = 4b ⇒ b = 22/4 = 11/2.",
    answers: [
      { text: "7/2", ok: false },
      { text: "11/2", ok: true },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "<p>a, b ve c pozitif tam sayılardır.</p><p><b>2a = 3b = 5c olduğuna göre a + 2b + 3c toplamı en az kaçtır?</b></p>",
    diff: 2,
    expl: "Eşitliği 2, 3 ve 5'in EKOK'u olan 30k'ya eşitleyelim: 2a = 30k ⇒ a = 15k. 3b = 30k ⇒ b = 10k. 5c = 30k ⇒ c = 6k. İstenen ifade: 15k + 2(10k) + 3(6k) = 15k + 20k + 18k = 53k. Sayılar pozitif tam sayı olduğundan k en az 1 olur. Toplam en az 53'tür.",
    answers: [
      { text: "31", ok: false },
      { text: "37", ok: false },
      { text: "52", ok: false },
      { text: "53", ok: true },
      { text: "71", ok: false }
    ]
  },
  {
    text: "<p>a/b = c/d = 1/2</p><p><b>olmak üzere (a · d)/(cb) oranı kaça eşittir?</b></p>",
    diff: 2,
    expl: "İfadeyi kesirlerin çarpımı şeklinde ayıralım: a/b · d/c. Biliyoruz ki a/b = 1/2 ve c/d = 1/2'dir. c/d kesrinin tersi d/c olacağından değeri 2 olur. Sonuç: 1/2 · 2 = 1.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/2", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "<p>a : b : c = 2 : 5 : 7 ve</p><p>2a − 3b + 5c = 72</p><p><b>olduğuna göre a − b kaça eşittir?</b></p>",
    diff: 2,
    expl: "Oranlardan a = 2k, b = 5k, c = 7k yazabiliriz. Denklemde yerlerine koyalım: 2(2k) - 3(5k) + 5(7k) = 72 ⇒ 4k - 15k + 35k = 72 ⇒ 24k = 72 ⇒ k = 3. İstenen: a - b = 2k - 5k = -3k. k = 3 olduğuna göre -3(3) = -9 bulunur.",
    answers: [
      { text: "−3", ok: false },
      { text: "−11", ok: false },
      { text: "−7", ok: false },
      { text: "−9", ok: true },
      { text: "−5", ok: false }
    ]
  },
  {
    text: "<p>a/4 = b/5 = c/9</p><p><b>olduğuna göre ((a − c)/c) · (b/(a + b)) kaça eşittir?</b></p>",
    diff: 2,
    expl: "a=4k, b=5k, c=9k diyelim. İfadede yerlerine yazalım: (4k - 9k)/9k · 5k/(4k + 5k) = (-5k)/9k · 5k/9k = (-5)/9 · 5/9 = -25/81.",
    answers: [
      { text: "−5/4", ok: false },
      { text: "−25/9", ok: false },
      { text: "−15/36", ok: false },
      { text: "−25/81", ok: true },
      { text: "−5/81", ok: false }
    ]
  },
  {
    text: "<p>A ve B çubukları iki farklı su deposunun gösterge çubukları ve bölmeler eşit aralıklı olmak üzere her iki çubuk da aşağıdaki şekildeki durumdayken A deposunda 480 lt, B deposunda 640 lt su bulunduğunu gösteriyor.</p><!--img--><p><b>O halde her iki deponun da dolması için toplam kaç lt su gereklidir?</b></p>",
    img: "QuestionsImage/kpss/matematik/carpanlara-ayirma_t1_q66.jpg",
    diff: 3,
    expl: "Gösterge çubuklarına göre A deposunda 480 lt, B deposunda 640 lt su vardır. Kitabın cevap anahtarı E (1120 = 480 + 640) olup bu, her iki deponun da yarı dolu olduğu (dolması için içindeki su kadar daha su gerektiği) yorumuna karşılık gelir: 480 + 640 = 1120 lt.",
    answers: [
      { text: "720", ok: false },
      { text: "840", ok: false },
      { text: "980", ok: false },
      { text: "1040", ok: false },
      { text: "1120", ok: true }
    ]
  }
];
