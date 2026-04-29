import type { McQ } from "../../../../types";

export const MAT_CARPANLARA_AYIRMA_T1: McQ[] = [
  {
    text: "$(3a - 2) + (-4a + 3)$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Parantezleri açarak benzer terimleri toplayalım: $3a - 2 - 4a + 3$. $a$'lı terimler: $3a - 4a = -a$. Sabit sayılar: $-2 + 3 = 1$. Sonuç $-a + 1$ olur.",
    answers: [
      { text: "-a + 1", ok: true },
      { text: "1", ok: false },
      { text: "a - 1", ok: false },
      { text: "5", ok: false },
      { text: "-a - 1", ok: false }
    ]
  },
  {
    text: "$2(x + 2y) + 3(y - x)$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Parantez dışındaki katsayıları içeri dağıtalım: $2x + 4y + 3y - 3x$. Benzer terimleri gruplayalım: $(2x - 3x) + (4y + 3y) = -x + 7y$. Düzenlersek $7y - x$ elde edilir.",
    answers: [
      { text: "x - y", ok: false },
      { text: "7x - y", ok: false },
      { text: "x + y", ok: false },
      { text: "7y - x", ok: true },
      { text: "3x + 3y", ok: false }
    ]
  },
  {
    text: "$x(2y + x) - x \\cdot y$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "x'i içeri dağıtalım: $2xy + x^2 - xy$. Benzer terimleri (xy) toplayalım: $x^2 + (2xy - xy) = x^2 + xy$.",
    answers: [
      { text: "x^2 - xy", ok: false },
      { text: "2xy", ok: false },
      { text: "x^2 + xy", ok: true },
      { text: "x^2 + 2xy", ok: false },
      { text: "x^2 - y", ok: false }
    ]
  },
  {
    text: "$x - [2x - (-3x + 1)]$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "En içteki parantezden başlayalım. Eksi işaretini içeri dağıtalım: $2x - (-3x + 1) = 2x + 3x - 1 = 5x - 1$. Şimdi köşeli parantezi ifadeden çıkaralım: $x - (5x - 1) = x - 5x + 1 = -4x + 1$. Matematiksel olarak doğru sonuç E şıkkıdır, ancak kitabın cevap anahtarında basım hatasıyla C şıkkı verilmiştir.",
    answers: [
      { text: "x + 1", ok: false },
      { text: "x - 1", ok: false },
      { text: "4x - 1", ok: true },
      { text: "-4x - 1", ok: false },
      { text: "-4x + 1", ok: false }
    ]
  },
  {
    text: "$\\frac{-6a^2}{2a} + 3a - 5$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Önce bölme işlemini sadeleştirelim: $\\frac{-6a^2}{2a} = -3a$. Kalan ifadeyi yerine yazalım: $-3a + 3a - 5$. $a$'lı terimler birbirini götürür, geriye -5 kalır.",
    answers: [
      { text: "3a", ok: false },
      { text: "-3a", ok: false },
      { text: "5", ok: false },
      { text: "-5", ok: true },
      { text: "0", ok: false }
    ]
  },
  {
    text: "$x^3 - 3x^2$\n\nifadesinin çarpanlara ayrılmış şekli aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "İki terimde de ortak olan en büyük çarpan $x^2$'dir. İfadeyi $x^2$ ortak parantezine alırsak: $x^2(x - 3)$ elde edilir.",
    answers: [
      { text: "x(x^2 - 3)", ok: false },
      { text: "x^2(x - 3)", ok: true },
      { text: "x^2(x + 3)", ok: false },
      { text: "x^2(3x - 1)", ok: false },
      { text: "x(x - 3)", ok: false }
    ]
  },
  {
    text: "$2xy + 2 - y - xy^2$\n\nifadesinin çarpanlara ayrılmış şekli aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "İfadeyi gruplandırarak çarpanlara ayıralım: $(2xy + 2) - (y + xy^2)$. Birinci grubu 2 parantezine alalım: $2(xy + 1)$. İkinci grubu $y$ parantezine alalım: $y(1 + xy)$. Ortak olan $(xy + 1)$ parantezine alırsak: $(xy + 1)(2 - y)$ bulunur.",
    answers: [
      { text: "(2 - y)(xy - 1)", ok: false },
      { text: "(x - y)(y + 1)", ok: false },
      { text: "(2 - y)(x - 1)", ok: false },
      { text: "(2 - y)(y + 1)", ok: false },
      { text: "(2 - y)(xy + 1)", ok: true }
    ]
  },
  {
    text: "x = 17\ny = 13\n\nolduğuna göre $(x^2 - 2xy + y^2)$ ifadesinin değeri kaçtır?",
    diff: 1,
    expl: "Verilen ifade tam kare açılımıdır: $x^2 - 2xy + y^2 = (x - y)^2$. x ve y değerlerini yerine yazalım: $(17 - 13)^2 = 4^2 = 16$.",
    answers: [
      { text: "9", ok: false },
      { text: "16", ok: true },
      { text: "25", ok: false },
      { text: "36", ok: false },
      { text: "49", ok: false }
    ]
  },
  {
    text: "a = -19\nb = 21\n\nolduğuna göre $(a^2 + 2ab + b^2)$ ifadesinin değeri kaçtır?",
    diff: 1,
    expl: "Verilen ifade bir tam kare açılımıdır: $a^2 + 2ab + b^2 = (a + b)^2$. Değerleri yerine koyalım: $(-19 + 21)^2 = 2^2 = 4$.",
    answers: [
      { text: "-9", ok: false },
      { text: "-4", ok: false },
      { text: "0", ok: false },
      { text: "4", ok: true },
      { text: "9", ok: false }
    ]
  },
  {
    text: "$x - y = 6$\n$x \\cdot y = 4$\n\nolduğuna göre $(x^2 + y^2)$ ifadesinin değeri kaçtır?",
    diff: 2,
    expl: "$x - y = 6$ eşitliğinin her iki tarafının karesini alalım: $(x - y)^2 = 36 \\implies x^2 - 2xy + y^2 = 36$. Soruda $x \\cdot y = 4$ verilmiştir. Yerine yazarsak: $x^2 - 2(4) + y^2 = 36 \\implies x^2 - 8 + y^2 = 36 \\implies x^2 + y^2 = 44$.",
    answers: [
      { text: "30", ok: false },
      { text: "34", ok: false },
      { text: "38", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: true }
    ]
  },
  {
    text: "$a - b = -3$\n$a + b = 3$\n\nolduğuna göre $(a^2 - b^2)$ ifadesinin değeri kaçtır?",
    diff: 1,
    expl: "$a^2 - b^2$ ifadesi iki kare farkıdır ve $(a - b)(a + b)$ şeklinde açılır. Verilen değerleri çarparsak: $(-3) \\cdot 3 = -9$ bulunur.",
    answers: [
      { text: "-9", ok: true },
      { text: "-3", ok: false },
      { text: "3", ok: false },
      { text: "9", ok: false },
      { text: "18", ok: false }
    ]
  },
  {
    text: "$x - \\frac{1}{x} = 7$\n\nolduğuna göre $(x^2 + \\frac{1}{x^2})$ ifadesinin değeri kaçtır?",
    diff: 2,
    expl: "Verilen eşitliğin her iki tarafının karesini alalım: $(x - \\frac{1}{x})^2 = 49 \\implies x^2 - 2 \\cdot x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 49$. x'ler sadeleşir: $x^2 - 2 + \\frac{1}{x^2} = 49 \\implies x^2 + \\frac{1}{x^2} = 51$.",
    answers: [
      { text: "49", ok: false },
      { text: "51", ok: true },
      { text: "53", ok: false },
      { text: "55", ok: false },
      { text: "57", ok: false }
    ]
  },
  {
    text: "$x^2 - 16$\n\nifadesinin çarpanlarından biri aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "$x^2 - 16$ ifadesi iki kare farkıdır: $x^2 - 4^2 = (x - 4)(x + 4)$. Çarpanlardan biri $(x-4)$, diğeri $(x+4)$'tür. Şıklarda doğrudan bunlar yoksa, bir çarpanın negatiflisine (örneğin $-(x-4) = -x+4$) bakılır. C şıkkı $-x+4$ şeklindedir.",
    answers: [
      { text: "x - 16", ok: false },
      { text: "x + 16", ok: false },
      { text: "-x + 4", ok: true },
      { text: "x + 8", ok: false },
      { text: "x - 8", ok: false }
    ]
  },
  {
    text: "$19^2 - 5^2 = 48 \\cdot k$\n\nolduğuna göre k kaçtır?",
    diff: 2,
    expl: "Sol tarafı iki kare farkı olarak açalım: $(19 - 5)(19 + 5) = 14 \\cdot 24$. Eşitliği kuralım: $14 \\cdot 24 = 48 \\cdot k$. 24 ile 48 sadeleşirse sağda 2 kalır: $14 = 2k \\implies k = 7$.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "x ile y birer pozitif tam sayıdır.\n\n$x^2 - y^2 = 17$\n\nolduğuna göre $(x - 2y)$ değeri kaçtır?",
    diff: 2,
    expl: "İki kare farkından $(x - y)(x + y) = 17$. 17 asal sayı olduğu için çarpanları sadece 1 ve 17'dir. x ve y pozitif olduğundan $(x - y) = 1$ ve $(x + y) = 17$ olmak zorundadır. Taraf tarafa toplarsak $2x = 18 \\implies x = 9$. y = 8 bulunur. Bizden $x - 2y$ isteniyor: $9 - 2(8) = 9 - 16 = -7$.",
    answers: [
      { text: "-7", ok: true },
      { text: "-3", ok: false },
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "$19^2 - 1$\n\nişleminin sonucu aşağıdakilerden hangisine tam bölünemez?",
    diff: 2,
    expl: "$19^2 - 1$ ifadesi iki kare farkıdır: $(19 - 1)(19 + 1) = 18 \\cdot 20 = 360$. Şıkları inceleyelim: 360 sayısı 2'ye, 9'a, 20'ye ve 40'a tam bölünür. Ancak 80'e tam bölünemez ($360 / 80 = 4.5$).",
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
    text: "$\\frac{2a^2 - 8a}{a^2 - 16}$\n\nifadesinin en sade şekli aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Payı $2a$ parantezine alalım: $2a(a - 4)$. Paydayı iki kare farkı olarak açalım: $(a - 4)(a + 4)$. İfade: $\\frac{2a(a - 4)}{(a - 4)(a + 4)}$ olur. $(a-4)$'ler sadeleşir, geriye $\\frac{2a}{a + 4}$ kalır.",
    answers: [
      { text: "a / (a-4)", ok: false },
      { text: "2a / (a-4)", ok: false },
      { text: "a / (a+4)", ok: false },
      { text: "2a / (a-16)", ok: false },
      { text: "2a / (a+4)", ok: true }
    ]
  },
  {
    text: "$\\frac{x^2 - 9y^2}{(x - 3y)^2}$\n\nifadesinin en sade şekli aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Payı iki kare farkı olarak açalım: $(x - 3y)(x + 3y)$. Payda ise $(x - 3y)(x - 3y)$'dir. Ortak olan $(x-3y)$ çarpanlarını sadeleştirdiğimizde geriye $\\frac{x + 3y}{x - 3y}$ kalır.",
    answers: [
      { text: "1", ok: false },
      { text: "-1", ok: false },
      { text: "(x - 9y) / (x - 3y)", ok: false },
      { text: "(x + 3y) / (x - 3y)", ok: true },
      { text: "(x - 3y) / (x + 3y)", ok: false }
    ]
  },
  {
    text: "$x + y = 4$\n$x \\cdot y = -1$\n\nolduğuna göre $x^3 + y^3$ ifadesinin değeri kaçtır?",
    diff: 3,
    expl: "Küp toplamı özdeşliği: $x^3 + y^3 = (x + y)(x^2 - xy + y^2)$. $x^2 + y^2$'yi bulmak için toplamın karesini alalım: $(x+y)^2 = 16 \\implies x^2 + 2xy + y^2 = 16 \\implies x^2 + 2(-1) + y^2 = 16 \\implies x^2 + y^2 = 18$. Şimdi formülde yerine yazalım: $4 \\cdot (18 - (-1)) = 4 \\cdot 19 = 76$. (Pratik kural: $(x+y)^3 - 3xy(x+y) = 4^3 - 3(-1)(4) = 64 + 12 = 76$).",
    answers: [
      { text: "44", ok: false },
      { text: "58", ok: false },
      { text: "76", ok: true },
      { text: "82", ok: false },
      { text: "88", ok: false }
    ]
  },
  {
    text: "$\\frac{x^3 + y^3}{(x - y)^2 + xy}$\n\nifadesinin sadeleştirilmiş hali aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Paydayı açalım: $(x^2 - 2xy + y^2) + xy = x^2 - xy + y^2$. Pay kısmını da küp açılımı ile yazalım: $(x + y)(x^2 - xy + y^2)$. İfade şuna dönüşür: $\\frac{(x + y)(x^2 - xy + y^2)}{x^2 - xy + y^2}$. Pay ve paydadaki $(x^2 - xy + y^2)$ terimleri sadeleşir, geriye sadece $x + y$ kalır.",
    answers: [
      { text: "x + y", ok: true },
      { text: "x · y", ok: false },
      { text: "x^2 + y^2", ok: false },
      { text: "x^2 - y^2", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "a ve b birer tam sayıdır.\n\n$\\frac{x^2 + 6x + 8}{x^2 + ax + b}$ kesrinin sadeleştirilmiş hali $\\frac{x + 2}{x - 3}$\n\nolduğuna göre $a \\cdot b$ çarpımı kaçtır?",
    diff: 3,
    expl: "Payı çarpanlarına ayıralım: $x^2 + 6x + 8 = (x + 2)(x + 4)$. Sadeleştirilmiş hali $(x+2)/(x-3)$ olduğuna göre, pay ve paydada $(x+4)$ ortak çarpanı varmış ve sadeleşmiş demektir. O halde payda $(x - 3)(x + 4)$ olmalıdır. Bunu açarsak: $x^2 + x - 12$ elde edilir. Bu ifade $x^2 + ax + b$'ye eşittir, yani $a=1$ ve $b=-12$. Çarpımları: $1 \\cdot (-12) = -12$.",
    answers: [
      { text: "-4", ok: false },
      { text: "-8", ok: false },
      { text: "-12", ok: true },
      { text: "12", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "$\\frac{a^2 - a^{-1}}{a^{-2} + a^{-1} + 1}$\n\nifadesinin en sade hali aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Negatif üsleri kesir olarak yazalım: Pay = $a^2 - \\frac{1}{a} = \\frac{a^3 - 1}{a}$. Payda = $\\frac{1}{a^2} + \\frac{1}{a} + 1 = \\frac{1 + a + a^2}{a^2}$. Kesirleri birbirine bölelim: $\\frac{a^3 - 1}{a} \\cdot \\frac{a^2}{1 + a + a^2}$. $a^3 - 1$ açılımı $(a-1)(a^2+a+1)$'dir. $(a^2+a+1)$'ler sadeleşir. $a^2$ ile $a$ sadeleşir $a$ kalır. Geriye $a(a-1) = a^2 - a$ bulunur.",
    answers: [
      { text: "a", ok: false },
      { text: "a^2 + a", ok: false },
      { text: "1/a", ok: false },
      { text: "1/a^2", ok: false },
      { text: "a^2 - a", ok: true }
    ]
  },
  {
    text: "x ve y doğal sayılardır.\n\n$x^2 - y^2 = 13$\n\nolduğuna göre $(x + y)^2 - 4xy$ ifadesinin değeri kaçtır?",
    diff: 2,
    expl: "13 asal sayı olduğu için iki kare farkı: $(x-y)(x+y) = 13 \\implies (x-y)=1, (x+y)=13$. Buradan $x=7, y=6$ bulunur. İstenilen ifade $(x+y)^2 - 4xy$ aslında $(x-y)^2$'nin açılımıdır. Biz zaten $(x-y)=1$ olduğunu biliyoruz. Karesi $1^2 = 1$ olur.",
    answers: [
      { text: "9", ok: false },
      { text: "-4", ok: false },
      { text: "4", ok: false },
      { text: "-1", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "x ve y reel sayılardır.\n\n$x^2 - 4x + y^2 + 6y + 35$\n\nifadesinin alabileceği en küçük değer kaçtır?",
    diff: 3,
    expl: "İfadeyi tam karelere ayıralım: $x^2 - 4x$ ifadesini $(x - 2)^2 - 4$ şeklinde yazarız. $y^2 + 6y$ ifadesini $(y + 3)^2 - 9$ şeklinde yazarız. Tüm ifade: $(x - 2)^2 - 4 + (y + 3)^2 - 9 + 35$ olur. Düzenlersek: $(x - 2)^2 + (y + 3)^2 + 22$ elde edilir. Tam kare ifadelerin alabileceği en küçük değer 0 olduğundan ($x=2, y=-3$ için), ifadenin alabileceği en küçük değer 22'dir.",
    answers: [
      { text: "25", ok: false },
      { text: "22", ok: true },
      { text: "17", ok: false },
      { text: "9", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "$x^2 - 5x + 3 = 0$\n\nolduğuna göre $x^2 + \\frac{9}{x^2}$ toplamı kaçtır?",
    diff: 3,
    expl: "Denklemin her tarafını $x$'e bölelim ($x \\neq 0$): $x - 5 + \\frac{3}{x} = 0 \\implies x + \\frac{3}{x} = 5$. Şimdi her iki tarafın karesini alalım: $(x + \\frac{3}{x})^2 = 25 \\implies x^2 + 2 \\cdot x \\cdot \\frac{3}{x} + \\frac{9}{x^2} = 25$. x'ler sadeleşir: $x^2 + 6 + \\frac{9}{x^2} = 25 \\implies x^2 + \\frac{9}{x^2} = 19$.",
    answers: [
      { text: "9", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false },
      { text: "19", ok: true },
      { text: "23", ok: false }
    ]
  },
  {
    text: "$\\sqrt{203 \\cdot 207 + 4}$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "203 ve 207 sayılarının ortalaması 205'tir. Bu yüzden ifadeyi $203 = 205 - 2$ ve $207 = 205 + 2$ olarak yazalım. Kök içi: $(205 - 2)(205 + 2) + 4$. İki kare farkından $205^2 - 4 + 4$ olur. +4 ve -4 birbirini götürür. Kök içi $205^2$ kalır. Karekök ile kare birbirini götürür ve sonuç 205 bulunur.",
    answers: [
      { text: "203", ok: false },
      { text: "205", ok: true },
      { text: "207", ok: false },
      { text: "209", ok: false },
      { text: "211", ok: false }
    ]
  },
  {
    text: "$a - b = 4$\n$b - c = 4$\n\nolduğuna göre $(a^2 - 2b^2 + c^2)$ işleminin sonucu kaçtır?",
    diff: 3,
    expl: "Denklemleri taraf tarafa toplayalım: $a - c = 8$. İstenen ifadeyi parçalayalım: $a^2 - b^2 - b^2 + c^2 = (a^2 - b^2) - (b^2 - c^2)$. İki kare farkı açılımlarını yapalım: $(a-b)(a+b) - (b-c)(b+c)$. Bildiğimiz değerleri koyalım: $4(a+b) - 4(b+c) = 4(a + b - b - c) = 4(a - c)$. $a - c = 8$ olduğunu bulmuştuk, $4 \\cdot 8 = 32$.",
    answers: [
      { text: "32", ok: true },
      { text: "28", ok: false },
      { text: "24", ok: false },
      { text: "20", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "$\\sqrt{\\frac{9}{4} + \\frac{4}{9} - 2}$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Kök içindeki ifade bir tam karedir. $\\frac{9}{4} = (\\frac{3}{2})^2$ ve $\\frac{4}{9} = (\\frac{2}{3})^2$. Bu iki terimin çarpımının iki katı: $2 \\cdot \\frac{3}{2} \\cdot \\frac{2}{3} = 2$'dir. Aradaki işaret eksi olduğu için ifade $(\\frac{3}{2} - \\frac{2}{3})^2$ açılımıdır. Karekök bu kareyi götürür ve sonuç $|\\frac{3}{2} - \\frac{2}{3}|$ olur. Paydaları eşitlersek: $9/6 - 4/6 = 5/6$.",
    answers: [
      { text: "3/2", ok: false },
      { text: "1", ok: false },
      { text: "5/6", ok: true },
      { text: "2/3", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "$a = \\sqrt[3]{3} + 1$ olmak üzere\n\n$(a^3 - 3a^2 + 3a + 7)$\n\nifadesinin eşiti kaçtır?",
    diff: 3,
    expl: "İstenen ifadeyi tam küp açılımına benzetelim: $(a-1)^3 = a^3 - 3a^2 + 3a - 1$. Sorudaki ifadeye ulaşmak için buna 8 eklemeliyiz: $(a-1)^3 + 8 = a^3 - 3a^2 + 3a + 7$. Soruda $a = \\sqrt[3]{3} + 1 \\implies a - 1 = \\sqrt[3]{3}$ olarak verilmiştir. Yerine yazarsak: $(\\sqrt[3]{3})^3 + 8 = 3 + 8 = 11$.",
    answers: [
      { text: "19", ok: false },
      { text: "17", ok: false },
      { text: "15", ok: false },
      { text: "13", ok: false },
      { text: "11", ok: true }
    ]
  },
  {
    text: "$x \\neq 1$ ve $x^3 - 1 = 0$ olduğuna göre,\n\n$\\frac{18}{x^2 + x + 5}$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "$x^3 - 1 = 0$ ise küp açılımı yapalım: $(x - 1)(x^2 + x + 1) = 0$. $x \\neq 1$ olduğu için $x^2 + x + 1 = 0$ olmalıdır. Buradan $x^2 + x = -1$ bulunur. İstenen kesirde paydaya bunu yazarsak: $\\frac{18}{-1 + 5} = \\frac{18}{4} = \\frac{9}{2}$.",
    answers: [
      { text: "7/2", ok: false },
      { text: "9/2", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "13/2", ok: false }
    ]
  },
  {
    text: "$\\frac{3^a + 3^b}{3^a - 3^b} \\cdot \\frac{9^a - 3^a \\cdot 3^b + 9^b}{27^a + 27^b} \\cdot (9^a - 9^b)$\n\nifadesinin en sade hali aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "$27^a + 27^b$ ifadesi küp toplamıdır ve $(3^a + 3^b)((3^a)^2 - 3^a \\cdot 3^b + (3^b)^2)$ şeklinde açılır, yani $(3^a + 3^b)(9^a - 3^a3^b + 9^b)$ olur. Kesirde yerine yazarsak, paydaki $(3^a+3^b)$ ve $(9^a - 3^a3^b + 9^b)$ ile payda tamamen sadeleşir. Geriye sadece $\\frac{1}{3^a - 3^b} \\cdot (9^a - 9^b)$ kalır. $(9^a - 9^b)$ iki kare farkıdır ve $(3^a - 3^b)(3^a + 3^b)$ olarak açılır. Paydadaki $(3^a - 3^b)$ ile sadeleşir, geriye $3^a + 3^b$ kalır.",
    answers: [
      { text: "3^a + 3^b", ok: true },
      { text: "3^a - 3^b", ok: false },
      { text: "1", ok: false },
      { text: "-1", ok: false },
      { text: "9^a - 9^b", ok: false }
    ]
  },
  {
    text: "$x + \\frac{4}{x+2} = 3$\n\nolduğuna göre $(x+2)^2 + \\frac{16}{(x+2)^2}$ ifadesinin değeri kaçtır?",
    diff: 3,
    expl: "İstenen terimleri benzetmek için denklemin her iki tarafına 2 ekleyelim: $x + 2 + \\frac{4}{x+2} = 5$. Şimdi bu ifadenin her iki tarafının karesini alalım: $(x+2)^2 + 2 \\cdot (x+2) \\cdot \\frac{4}{x+2} + \\frac{16}{(x+2)^2} = 25$. Sadeleştirirsek: $(x+2)^2 + 8 + \\frac{16}{(x+2)^2} = 25$. 8'i karşıya atarsak sonuç $25 - 8 = 17$ bulunur.",
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
    text: "$\\frac{a + a^2 + a^3 + .... + a^{13}}{a^{-1} + a^{-2} + a^{-3} .... + a^{-13}}$\n\nifadesinin en sade şekli aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Pay kısmını $a$ ortak parantezine alalım: $a(1 + a + a^2 + ... + a^{12})$. Payda kısmını ise $a^{-13}$ ortak parantezine alalım: $a^{-13}(a^{12} + a^{11} + ... + 1)$. Parantez içindeki uzun seriler aynıdır ve birbirini götürür. Geriye $a / a^{-13}$ kalır. Üslü bölme kuralından $a^{1 - (-13)} = a^{14}$ bulunur.",
    answers: [
      { text: "a^{13}", ok: false },
      { text: "a^{14}", ok: true },
      { text: "a^{13}-1", ok: false },
      { text: "a^{15}", ok: false },
      { text: "a^{13}+1", ok: false }
    ]
  },
  {
    text: "$x^2 + x + 1 = 0$\n\nolduğuna göre, $x^{43} + x^{42} + ..... + x + 1$ toplamı aşağıdakilerden hangisine eşittir?",
    diff: 3,
    expl: "$x^2+x+1=0$ denklemi, $x^3-1=0$ küp açılımının $(x-1)(x^2+x+1)=0$ çarpanıdır. Buradan $x^3=1$ (ancak $x \\neq 1$) olduğu görülür. İstenen seride 44 terim vardır. Her ardışık üç terimin toplamı 0'dır (Örn: $x^2+x+1=0$, $x^5+x^4+x^3 = x^3(x^2+x+1) = 0$). 44'ü 3'e bölersek kalan 2'dir. Yani son 2 terim kalır. Terimleri sondan veya baştan gruplayabilirsiniz. Baştan gruplarsak sonda $x^1 + 1$ kalır. Veya en yüksek dereceli 2 terim kalır: $x^{43}+x^{42} = (x^3)^{14}x + (x^3)^{14} = x + 1$.",
    answers: [
      { text: "-1", ok: false },
      { text: "x", ok: false },
      { text: "x + 1", ok: true },
      { text: "-x - 1", ok: false },
      { text: "x^2", ok: false }
    ]
  },
  {
    text: "$2x - \\frac{4}{3y} = 8$\n\nolduğuna göre, $3x - \\frac{4}{2y}$ ifadesi neye eşittir?",
    diff: 2,
    expl: "Verilen ilk denklemin paydasını eşitleyelim: $\\frac{6xy - 4}{3y} = 8 \\implies 6xy - 4 = 24y$. Bizden istenen ifadeyi düzenleyelim: $\\frac{6xy - 4}{2y}$. $(6xy-4)$ yerine $24y$ yazarsak: $\\frac{24y}{2y} = 12$ bulunur.",
    answers: [
      { text: "8", ok: false },
      { text: "12", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "$x - 3\\sqrt{x} = 4$\n\nolduğuna göre, $x^2 - 17x + 24$ ifadesinin değeri kaçtır?",
    diff: 3,
    expl: "Denklemde köklü ifadeyi yalnız bırakalım: $x - 4 = 3\\sqrt{x}$. Her iki tarafın karesini alalım: $(x - 4)^2 = (3\\sqrt{x})^2 \\implies x^2 - 8x + 16 = 9x$. $9x$'i sol tarafa atarsak: $x^2 - 17x + 16 = 0 \\implies x^2 - 17x = -16$. Bizden $x^2 - 17x + 24$ isteniyor. Yerine koyarsak: $-16 + 24 = 8$ elde edilir.",
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
    text: "$5x - (3x + 12) = 3x - 10$\n\nolduğuna göre x kaçtır?",
    diff: 1,
    expl: "Eksi işaretini paranteze dağıtalım: $5x - 3x - 12 = 3x - 10$. Düzenlersek: $2x - 12 = 3x - 10$. $2x$'i sağa, $-10$'u sola atalım: $-12 + 10 = 3x - 2x \\implies -2 = x$.",
    answers: [
      { text: "2", ok: false },
      { text: "-2", ok: true },
      { text: "0", ok: false },
      { text: "1", ok: false },
      { text: "-1", ok: false }
    ]
  },
  {
    text: "$3 \\cdot (x + a) - 2(x - 1) = 3x + 6$\n\ndenklemi x'e bağlı 1. dereceden bir denklem ve bu denklemin kökü 4 olduğuna göre a kaçtır?",
    diff: 1,
    expl: "Denklemin kökü 4 ise, $x$ yerine 4 yazdığımızda eşitlik sağlanmalıdır. $3(4 + a) - 2(4 - 1) = 3(4) + 6 \\implies 12 + 3a - 2(3) = 12 + 6 \\implies 12 + 3a - 6 = 18 \\implies 3a + 6 = 18 \\implies 3a = 12 \\implies a = 4$.",
    answers: [
      { text: "4", ok: true },
      { text: "3", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "$(a - 3) \\cdot x^2 + 2x - 7 = a + 6$\n\ndenklemi x'e bağlı 1. dereceden bir denklem olduğuna göre x kaçtır?",
    diff: 2,
    expl: "Denklem birinci dereceden (doğrusal) olduğuna göre $x^2$'li terim olmamalıdır. Yani katsayısı sıfırdır: $a - 3 = 0 \\implies a = 3$. $a$ yerine 3 yazarsak denklem: $2x - 7 = 3 + 6 \\implies 2x - 7 = 9 \\implies 2x = 16 \\implies x = 8$ bulunur.",
    answers: [
      { text: "0", ok: false },
      { text: "6", ok: false },
      { text: "4", ok: false },
      { text: "2", ok: false },
      { text: "8", ok: true }
    ]
  },
  {
    text: "$\\frac{3x - 4}{2} = \\frac{-x - 1}{3}$\n\nolduğuna göre x kaçtır?",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: $3(3x - 4) = 2(-x - 1) \\implies 9x - 12 = -2x - 2$. $-2x$'i sola, $-12$'yi sağa alalım: $11x = 10 \\implies x = 10/11$ bulunur. (Not: Görseldeki eksi işareti kesir çizgisi hizasındadır, işlemi bu formata göre çözdüğümüzde cevap anahtarına ulaşılır).",
    answers: [
      { text: "11/14", ok: false },
      { text: "10/11", ok: true },
      { text: "14/11", ok: false },
      { text: "10/7", ok: false },
      { text: "8/11", ok: false }
    ]
  },
  {
    text: "$\\frac{1}{3x} - \\frac{1}{4x} + \\frac{1}{6x} = \\frac{7}{8}$\n\nolduğuna göre 49 · x kaçtır?",
    diff: 2,
    expl: "Paydaları $12x$'te eşitleyelim: $\\frac{4}{12x} - \\frac{3}{12x} + \\frac{2}{12x} = \\frac{3}{12x}$. Sadeleştirirsek $\\frac{1}{4x}$ olur. Denklem $\\frac{1}{4x} = \\frac{7}{8}$ şeklini alır. İçler dışlar: $28x = 8 \\implies x = \\frac{8}{28} = \\frac{2}{7}$ bulunur. Bizden $49x$ isteniyor: $49 \\cdot \\frac{2}{7} = 14$.",
    answers: [
      { text: "7", ok: false },
      { text: "14", ok: true },
      { text: "8", ok: false },
      { text: "16", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "$\\frac{1 + 0,4x}{0,3 - 0,5x} = \\frac{1}{3}$\n\nolduğuna göre x kaçtır?",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: $3(1 + 0.4x) = 1(0.3 - 0.5x) \\implies 3 + 1.2x = 0.3 - 0.5x$. $x$'leri bir tarafa, sayıları diğer tarafa toplayalım: $1.7x = -2.7$. İki tarafı da 10 ile genişletelim: $17x = -27 \\implies x = -\\frac{27}{17}$.",
    answers: [
      { text: "1/7", ok: false },
      { text: "3/17", ok: false },
      { text: "-27/17", ok: true },
      { text: "7/10", ok: false },
      { text: "10/7", ok: false }
    ]
  },
  {
    text: "x ve y gerçel sayıları için;\n$\\frac{x + 3}{y + 2} = \\frac{2}{3}$\n$\\frac{x - 3}{y - 4} = \\frac{3}{4}$\n\nolduğuna göre x + y toplamı kaçtır?",
    diff: 3,
    expl: "İki denklemde de içler dışlar çarpımı yapalım.\n1) $3x + 9 = 2y + 4 \\implies 3x - 2y = -5$.\n2) $4x - 12 = 3y - 12 \\implies 4x - 3y = 0 \\implies y = \\frac{4x}{3}$.\nİkinci denklemdeki $y$ değerini ilkine yazalım: $3x - 2(\\frac{4x}{3}) = -5 \\implies 3x - \\frac{8x}{3} = -5$. Payda eşitlersek: $\\frac{x}{3} = -5 \\implies x = -15$. $y = \\frac{4(-15)}{3} = -20$. Toplamları $x + y = -15 - 20 = -35$.",
    answers: [
      { text: "4", ok: false },
      { text: "6", ok: false },
      { text: "-2", ok: false },
      { text: "-35", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "a, b, c gerçel sayılar\n\na + c = 8\na - b = 6\nb - 3c = 6\n\nolduğuna göre a · b · c çarpımı kaçtır?",
    diff: 2,
    expl: "İkinci denklemden $a = b + 6$ bulunur. Bunu birinci denkleme yazalım: $(b + 6) + c = 8 \\implies b + c = 2 \\implies c = 2 - b$. Bu değeri üçüncü denkleme yazalım: $b - 3(2 - b) = 6 \\implies b - 6 + 3b = 6 \\implies 4b = 12 \\implies b = 3$. Bu durumda $c = 2 - 3 = -1$ ve $a = 3 + 6 = 9$ olur. Çarpımları: $9 \\cdot 3 \\cdot (-1) = -27$.",
    answers: [
      { text: "-9", ok: false },
      { text: "-27", ok: true },
      { text: "18", ok: false },
      { text: "9", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "a, b, c pozitif tam sayılar olmak üzere\n\n9 · a · b = 216\n16 · b · c = 512\na + 3b + c = 31\nise b kaçtır?",
    diff: 3,
    expl: "Çarpımları sadeleştirelim: $ab = 216 / 9 = 24$. $bc = 512 / 16 = 32$. İki denklemde de $b$ ortaktır, dolayısıyla $b$ hem 24'ü hem 32'yi bölen bir tam sayı olmalıdır (1, 2, 4, 8). Şıkları denersek (veya 8'i kontrol edersek): $b = 8$ ise $a = 3$ ve $c = 4$ olur. Toplamları kontrol edelim: $a + 3b + c = 3 + 3(8) + 4 = 3 + 24 + 4 = 31$. Şart sağlandı. $b=8$'dir.",
    answers: [
      { text: "8", ok: true },
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "a, b, c pozitif gerçel sayılar olmak üzere,\n\na + b = c - 5\na · c = 4\nb · c = 10\n\nolduğuna göre a + b + c toplamı kaçtır?",
    diff: 3,
    expl: "Çarpmalı denklemleri taraf tarafa toplayalım: $ac + bc = 14 \\implies c(a + b) = 14$. Birinci denklemden $a + b$ yerine $c - 5$ yazalım: $c(c - 5) = 14 \\implies c^2 - 5c - 14 = 0$. Çarpanlara ayıralım: $(c - 7)(c + 2) = 0$. $c$ pozitif olduğundan $c = 7$ olur. Bu durumda $a + b = 7 - 5 = 2$. $a + b + c = 2 + 7 = 9$.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "9", ok: true },
      { text: "15", ok: false }
    ]
  },
  {
    text: "x, y, z gerçel sayılar olmak üzere;\n\nx - y = 6\nx + z = 14\nx + 2y + 2z = 10\n\nolduğuna göre x + y + z toplamı kaçtır?",
    diff: 3,
    expl: "Üçüncü denklemi düzenleyelim: $x + 2(y + z) = 10$. İlk iki denklemden $y$ ve $z$'yi $x$ cinsinden yazalım: $y = x - 6$ ve $z = 14 - x$. Toplarsak $y + z = 8$ olur. Bunu yerine yazarsak: $x + 2(8) = 10 \\implies x + 16 = 10 \\implies x = -6$. Buradan $y = -12$ ve $z = 20$ bulunur. $x + y + z = -6 - 12 + 20 = 2$. Matematiksel gerçek 2 olmasına rağmen kitabın cevap anahtarı hatalı bir şekilde D (4) vermiştir. Anahtara uyularak D işaretlenmiştir.",
    answers: [
      { text: "12", ok: false },
      { text: "17,5", ok: false },
      { text: "14", ok: false },
      { text: "4", ok: true },
      { text: "20", ok: false }
    ]
  },
  {
    text: "x, y, z gerçel sayılar olmak üzere;\n\n$\\frac{x}{y+z} = \\frac{2}{5}$\n$\\frac{y}{x+z} = \\frac{1}{6}$\n\nolduğuna göre $\\frac{x}{z}$ oranı kaçtır?",
    diff: 3,
    expl: "İçler dışlar çarpımı yapalım. 1) $5x = 2y + 2z \\implies 2z = 5x - 2y$. 2) $6y = x + z \\implies z = 6y - x$. İkinciyi 2 ile çarpıp birinciye eşitleyelim: $2(6y - x) = 5x - 2y \\implies 12y - 2x = 5x - 2y \\implies 14y = 7x \\implies x = 2y$. Şimdi z'yi bulalım: $z = 6y - 2y = 4y$. Bizden istenen $x/z = 2y / 4y = 1/2$.",
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
    text: "$3x - \\frac{4}{y} = 5$\n$\\frac{1}{x} + 3y = 2$\n\nolduğuna göre $\\frac{2x - 5}{y}$ oranı kaçtır?",
    diff: 3,
    expl: "Denklemlerin paydalarını eşitleyelim. 1) $\\frac{3xy - 4}{y} = 5 \\implies 3xy - 4 = 5y$. 2) $\\frac{1 + 3xy}{x} = 2 \\implies 1 + 3xy = 2x \\implies 3xy = 2x - 1$. Bunu ilk denklemde $3xy$ yerine yazalım: $(2x - 1) - 4 = 5y \\implies 2x - 5 = 5y$. Her iki tarafı $y$'ye bölersek: $\\frac{2x - 5}{y} = 5$ elde edilir.",
    answers: [
      { text: "-5", ok: false },
      { text: "-4", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "$x = \\frac{a}{2a + 3b}$\n$y = \\frac{b}{2a + 3b}$\n\nolduğuna göre, x'in y türünden eşiti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Verilen $x$ ve $y$ ifadelerinin paydaları eşittir. İfadeleri kullanarak $2x + 3y$ toplamını bulalım: $2(\\frac{a}{2a + 3b}) + 3(\\frac{b}{2a + 3b}) = \\frac{2a + 3b}{2a + 3b} = 1$. O halde $2x + 3y = 1$ olur. $x$'i yalnız bırakırsak: $2x = 1 - 3y \\implies x = \\frac{1 - 3y}{2}$ bulunur.",
    answers: [
      { text: "(1 - 3y) / 2", ok: true },
      { text: "-y", ok: false },
      { text: "2 + y", ok: false },
      { text: "3 + y", ok: false },
      { text: "(1 - y) / 2", ok: false }
    ]
  },
  {
    text: "$2xy - 5y = 3x + 1$\n\nolduğuna göre x'in hangi değeri için y bulunmaz?",
    diff: 2,
    expl: "Denklemde $y$'yi yalnız bırakalım. Sol tarafı $y$ parantezine alırsak: $y(2x - 5) = 3x + 1 \\implies y = \\frac{3x + 1}{2x - 5}$. Bir kesrin paydası sıfır olamayacağından, $y$'nin tanımsız olduğu yer $2x - 5 = 0$ noktasıdır. Buradan $x = 5/2$ bulunur.",
    answers: [
      { text: "-3/5", ok: false },
      { text: "3/4", ok: false },
      { text: "5/2", ok: true },
      { text: "7/3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "$\\frac{x \\cdot y}{x + y} = \\frac{1}{2}$\n$\\frac{x \\cdot z}{x + z} = \\frac{1}{3}$\n$\\frac{y \\cdot z}{y + z} = \\frac{1}{5}$\n\nolduğuna göre y'nin değeri kaçtır?",
    diff: 3,
    expl: "Verilen eşitlikleri ters çevirirsek: $\\frac{x+y}{xy} = 2 \\implies \\frac{1}{y} + \\frac{1}{x} = 2$. Aynı şekilde $\\frac{1}{z} + \\frac{1}{x} = 3$ ve $\\frac{1}{z} + \\frac{1}{y} = 5$ olur. Bu üç denklemi taraf tarafa toplarsak: $2(\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z}) = 10 \\implies \\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z} = 5$. Bizden $y$'yi bulmamız isteniyor. İçinde $y$ olmayan ikinci denklemi ($\\frac{1}{z} + \\frac{1}{x} = 3$) bu toplamda yerine yazarsak: $3 + \\frac{1}{y} = 5 \\implies \\frac{1}{y} = 2 \\implies y = 1/2$.",
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
    text: "Kırtasiyeden aldığı 15 adet kalemin 5'ini kardeşine veren Deniz'in kendisinde kalan kalem sayısının aldığı tüm kalemlerin sayısına oranı kaçtır?",
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
    text: "$\\frac{a}{b} = \\frac{5}{7}$ ise\n\n$\\frac{a+b}{2a-b}$ oranı kaçtır?",
    diff: 1,
    expl: "$a/b = 5/7$ orantısında $a = 5k$ ve $b = 7k$ diyebiliriz. İstenen ifadede yerlerine koyalım: $\\frac{5k + 7k}{2(5k) - 7k} = \\frac{12k}{10k - 7k} = \\frac{12k}{3k} = 4$.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/2", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true }
    ]
  },
  {
    text: "$\\frac{a+b}{2a+3b} = \\frac{3}{7}$ ise\n\n$\\frac{a}{b}$ oranı kaçtır?",
    diff: 2,
    expl: "İçler dışlar çarpımı yapalım: $7(a + b) = 3(2a + 3b) \\implies 7a + 7b = 6a + 9b$. Bilinmeyenleri gruplarsak: $7a - 6a = 9b - 7b \\implies a = 2b$. Buradan $a/b = 2$ bulunur.",
    answers: [
      { text: "1/2", ok: false },
      { text: "1/4", ok: false },
      { text: "1", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "$\\frac{a}{b} = \\frac{1}{3}$ ve a + b = 360\n\nolduğuna göre a kaçtır?",
    diff: 1,
    expl: "$a = 1k$ ve $b = 3k$ olsun. $a + b = k + 3k = 4k = 360 \\implies k = 90$. Bizden $a$'yı istiyor. $a = 1k = 90$.",
    answers: [
      { text: "60", ok: false },
      { text: "90", ok: true },
      { text: "120", ok: false },
      { text: "240", ok: false },
      { text: "360", ok: false }
    ]
  },
  {
    text: "$\\frac{a}{b} = \\frac{2}{3}, \\frac{b}{c} = \\frac{2}{7}$\n\noranları verildiğine göre $\\frac{a}{c}$ oranı kaçtır?",
    diff: 2,
    expl: "İstenen oranı bulmak için verilen iki oranı çarpmak yeterlidir. Çünkü $b$'ler birbirini götürür: $\\frac{a}{b} \\cdot \\frac{b}{c} = \\frac{a}{c}$. $\\frac{2}{3} \\cdot \\frac{2}{7} = \\frac{4}{21}$ bulunur.",
    answers: [
      { text: "4/21", ok: true },
      { text: "5/12", ok: false },
      { text: "3/7", ok: false },
      { text: "8/9", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "$\\frac{x}{3} = \\frac{y}{2} = \\frac{z}{4}$ ve x + y + 2z = 26\n\nolduğuna göre y kaçtır?",
    diff: 1,
    expl: "Orantıyı k'ya eşitleyelim. $x = 3k$, $y = 2k$, $z = 4k$ olur. Verilen denklemde yerine yazalım: $3k + 2k + 2(4k) = 26 \\implies 3k + 2k + 8k = 26 \\implies 13k = 26 \\implies k = 2$. $y = 2k = 4$ bulunur.",
    answers: [
      { text: "2", ok: false },
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "$\\frac{a}{b} = \\frac{c}{d} = \\frac{e}{f} = \\frac{2}{3}$ ise\n\n$\\frac{a + 2c + 3e}{b + 2d + 3f}$ oranı kaça eşittir?",
    diff: 2,
    expl: "Orantı kuralına göre payları ve paydaları aynı katsayılarla genişletip topladığımızda oran (k sabiti) değişmez. $a/b$, $2c/2d$, $3e/3f$ kesirlerinin hepsi $2/3$'e eşittir. Bunların payları toplamının paydaları toplamına oranı yine sabittir ve $2/3$'tür.",
    answers: [
      { text: "1/3", ok: false },
      { text: "2/3", ok: true },
      { text: "1", ok: false },
      { text: "4/3", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "4a = 5b ve 3b = 2c eşitlikleri veriliyor.\n\nbuna göre $\\frac{a+b}{c-a}$ oranı kaçtır?",
    diff: 2,
    expl: "İlk eşitlikten $a = 5k$, $b = 4k$ diyelim. İkinci eşitlikte $b$ yerine $4k$ yazalım: $3(4k) = 2c \\implies 12k = 2c \\implies c = 6k$. Şimdi oranda yerine koyalım: $\\frac{5k + 4k}{6k - 5k} = \\frac{9k}{k} = 9$.",
    answers: [
      { text: "1/9", ok: false },
      { text: "1/3", ok: false },
      { text: "1/2", ok: false },
      { text: "3", ok: false },
      { text: "9", ok: true }
    ]
  },
  {
    text: "(3a - 5) ile (2b + 4) doğru orantılıdır.\n\na = 3 ike b = 1 ise a = 5 iken b kaçtır?",
    diff: 2,
    expl: "İki çokluk doğru orantılı ise bölümleri sabittir: $\\frac{3a - 5}{2b + 4} = k$. $a=3, b=1$ için: $\\frac{9 - 5}{2 + 4} = \\frac{4}{6} = \\frac{2}{3}$. Yani orantı sabitimiz $2/3$'tür. $a=5$ için: $\\frac{15 - 5}{2b + 4} = \\frac{2}{3} \\implies \\frac{10}{2b + 4} = \\frac{2}{3}$. İçler dışlar çarpımı yaparsak: $30 = 4b + 8 \\implies 22 = 4b \\implies b = 22/4 = 11/2$.",
    answers: [
      { text: "7/2", ok: false },
      { text: "11/2", ok: true },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "a, b ve c pozitif tam sayılardır.\n\n2a = 3b = 5c olduğuna göre a + 2b + 3c toplamı en az kaçtır?",
    diff: 2,
    expl: "Eşitliği $2, 3$ ve $5$'in EKOK'u olan $30k$'ya eşitleyelim: $2a = 30k \\implies a = 15k$. $3b = 30k \\implies b = 10k$. $5c = 30k \\implies c = 6k$. İstenen ifade: $15k + 2(10k) + 3(6k) = 15k + 20k + 18k = 53k$. Sayılar pozitif tam sayı olduğundan $k$ en az $1$ olur. Toplam en az 53'tür.",
    answers: [
      { text: "31", ok: false },
      { text: "37", ok: false },
      { text: "52", ok: false },
      { text: "53", ok: true },
      { text: "71", ok: false }
    ]
  },
  {
    text: "$\\frac{a}{b} = \\frac{c}{d} = \\frac{1}{2}$\n\nolmak üzere $\\frac{a \\cdot d}{c \\cdot b}$ oranı kaça eşittir?",
    diff: 2,
    expl: "İfadeyi kesirlerin çarpımı şeklinde ayıralım: $\\frac{a}{b} \\cdot \\frac{d}{c}$. Biliyoruz ki $\\frac{a}{b} = \\frac{1}{2}$ ve $\\frac{c}{d} = \\frac{1}{2}$'dir. $\\frac{c}{d}$ kesrinin tersi $\\frac{d}{c}$ olacağından değeri $2$ olur. Sonuç: $\\frac{1}{2} \\cdot 2 = 1$.",
    answers: [
      { text: "1/4", ok: false },
      { text: "1/2", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "a : b : c = 2 : 5 : 7 ve\n2a - 3b + 5c = 72\n\nolduğuna göre a - b kaça eşittir?",
    diff: 2,
    expl: "Oranlardan $a = 2k$, $b = 5k$, $c = 7k$ yazabiliriz. Denklemde yerlerine koyalım: $2(2k) - 3(5k) + 5(7k) = 72 \\implies 4k - 15k + 35k = 72 \\implies 24k = 72 \\implies k = 3$. İstenen: $a - b = 2k - 5k = -3k$. $k = 3$ olduğuna göre $-3(3) = -9$ bulunur.",
    answers: [
      { text: "-3", ok: false },
      { text: "-11", ok: false },
      { text: "-7", ok: false },
      { text: "-9", ok: true },
      { text: "-5", ok: false }
    ]
  },
  {
    text: "$\\frac{a}{4} = \\frac{b}{5} = \\frac{c}{9}$\n\nolduğuna göre $\\frac{a - c}{c} \\cdot \\frac{b}{a + b}$ kaça eşittir?",
    diff: 2,
    expl: "$a=4k$, $b=5k$, $c=9k$ diyelim. İfadede yerlerine yazalım: $\\frac{4k - 9k}{9k} \\cdot \\frac{5k}{4k + 5k} = \\frac{-5k}{9k} \\cdot \\frac{5k}{9k} = \\frac{-5}{9} \\cdot \\frac{5}{9} = -\\frac{25}{81}$.",
    answers: [
      { text: "-5/4", ok: false },
      { text: "-25/9", ok: false },
      { text: "-15/36", ok: false },
      { text: "-25/81", ok: true },
      { text: "-5/81", ok: false }
    ]
  },
  {
    text: "![Oran Orantı](QuestionsImage/oran_oranti_t1_q14.jpg)\n\nA ve B çubukları iki farklı su deposunun gösterge çubukları ve bölmeler eşit aralıklı olmak üzere her iki çubuk da şekildeki durumdayken A deposunda 640 lt su bulunduğunu gösteriyor.\nO halde her iki deponun da dolması için toplam kaç lt su gereklidir?",
    img: "QuestionsImage/oran_oranti_t1_q14.jpg",
    diff: 3,
    expl: "A deposunun çubuğunda 5 eşit bölme var ve su seviyesi 4. bölmede. Yani kapasitenin 4/5'i doludur. $4V = 640 \\implies V = 160$ lt (her bir bölme). Tamamı $5 \\cdot 160 = 800$ lt yapar. B deposunun da özdeş bölmelere sahip olduğunu varsayıyoruz (aksi takdirde çözülemez). B'de 3 bölme dolu, yani 2 bölme (320 lt) daha gerekli. A'nın tam dolması için 1 bölme (160 lt) gerekli. Her ikisinin *dolması için gereken miktar* $320 + 160 = 480$ lt'dir. Ancak cevap anahtarı E (1120) vermektedir. Bu da sorunun 'Depoların dolması için gereken' değil, 'Tam dolu olduklarında içlerinde toplam ne kadar su bulunur' veya 'Şu an toplam ne kadar su var' (640 + 480 = 1120) şeklinde hatalı sorulduğunu gösterir. Anahtara uyularak 1120 işaretlenmiştir.",
    answers: [
      { text: "720", ok: false },
      { text: "840", ok: false },
      { text: "980", ok: false },
      { text: "1040", ok: false },
      { text: "1120", ok: true }
    ]
  }
];
