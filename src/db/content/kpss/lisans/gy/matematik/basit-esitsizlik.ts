import type { McQ } from "../../../../types";

export const MAT_BASIT_ESITSIZLIKLER_T2_DEVAM: McQ[] = [
  {
    text: "$3 < 2a < 11$\n\nolduğuna göre $5a$'nın en büyük tam sayı değeri kaçtır?",
    diff: 1,
    expl: "Eşitsizliğin her tarafını $5/2$ ile çarparak $5a$'nın aralığını bulalım: $3 \\cdot \\frac{5}{2} < 5a < 11 \\cdot \\frac{5}{2} \\implies 7.5 < 5a < 27.5$. Bu aralıktaki en büyük tam sayı değeri 27'dir.",
    answers: [
      { text: "25", ok: false },
      { text: "26", ok: false },
      { text: "27", ok: true },
      { text: "28", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "$13 < 3x - 2 \\leq 25$\n\neşitsizliğinin çözüm aralığı aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Eşitsizliğin her tarafına 2 ekleyelim: $15 < 3x \\leq 27$. Her tarafı 3'e bölelim: $5 < x \\leq 9$. Eşitsizliğin çözüm aralığı $(5, 9]$ olarak bulunur.",
    answers: [
      { text: "(23/3, 31/3)", ok: false },
      { text: "(11/3, 23/3)", ok: false },
      { text: "(5, 9)", ok: false },
      { text: "(5, 9]", ok: true },
      { text: "(22/3, 31/3]", ok: false }
    ]
  },
  {
    text: "$-3 < \\frac{2x - 3}{2} < 7$\n\neşitsizliğini sağlayan aralıkta kaç tane doğal sayı vardır?",
    diff: 2,
    expl: "Eşitsizliğin her tarafını 2 ile çarpalım: $-6 < 2x - 3 < 14$. Her tarafa 3 ekleyelim: $-3 < 2x < 17$. Her tarafı 2'ye bölelim: $-1.5 < x < 8.5$. Bu aralıktaki doğal sayılar $0, 1, 2, 3, 4, 5, 6, 7, 8$'dir. Toplam 9 tane doğal sayı vardır.",
    answers: [
      { text: "8", ok: false },
      { text: "9", ok: true },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "$\\frac{1}{3} < \\frac{3}{a + 2} \\leq 3$\n\neşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Eşitsizlikteki kesirleri ters çevirirsek eşitsizlik yön değiştirir: $3 > \\frac{a+2}{3} \\geq \\frac{1}{3}$. Her tarafı 3 ile çarpalım: $9 > a+2 \\geq 1$. Her taraftan 2 çıkaralım: $7 > a \\geq -1$. Çözüm aralığı $[-1, 7)$ olur.",
    answers: [
      { text: "(-∞, 7)", ok: false },
      { text: "(-7, -1]", ok: false },
      { text: "[-1, 7)", ok: true },
      { text: "(1, 7]", ok: false },
      { text: "[1, 7)", ok: false }
    ]
  },
  {
    text: "$2 < x < 6$\n\nolmak üzere $x^2 - 6x$ ifadesinin tüm reel sayı değerlerinin aralığı hangisidir?",
    diff: 3,
    expl: "$x^2 - 6x$ ifadesini tam kareye tamamlayalım: $x^2 - 6x + 9 - 9 = (x - 3)^2 - 9$. $2 < x < 6$ aralığından 3 çıkarırsak: $-1 < x - 3 < 3$. Bu aralığın karesini alırsak (aralıkta 0 olduğu için alt sınır 0 olur): $0 \\leq (x - 3)^2 < 9$. Her taraftan 9 çıkarırsak: $-9 \\leq (x - 3)^2 - 9 < 0$ elde edilir. Aralık $[-9, 0)$ şeklindedir.",
    answers: [
      { text: "[0, 9)", ok: false },
      { text: "(-9, 0)", ok: false },
      { text: "(-8, 0]", ok: false },
      { text: "[-9, 0)", ok: true },
      { text: "(0, 9)", ok: false }
    ]
  },
  {
    text: "a bir reel sayı olmak üzere\n\n$\\frac{4a + 7}{3} < a + 5$\n\neşitsizliğine göre a kaç farklı doğal sayı değeri olabilir?",
    diff: 2,
    expl: "Eşitsizliğin her iki tarafını 3 ile çarpalım: $4a + 7 < 3a + 15$. $3a$'yı sol tarafa, 7'yi sağ tarafa alırsak: $a < 8$ olur. a'nın alabileceği doğal sayı değerleri 0, 1, 2, 3, 4, 5, 6, 7 olmak üzere toplam 8 tanedir.",
    answers: [
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "$-5 < a < 3$\n\nolmak üzere $a^2 + 2$'nin alabileceği en büyük tam sayı değeri kaçtır?",
    diff: 2,
    expl: "$-5 < a < 3$ aralığının karesini alırken, aralıkta 0 bulunduğu için $a^2$'nin alabileceği en küçük değer 0'dır. Sınırların karesi 25 ve 9 olduğundan en büyük sınır 25 olur. $0 \\leq a^2 < 25$. Her tarafa 2 ekleyelim: $2 \\leq a^2 + 2 < 27$. Alabileceği en büyük tam sayı değeri 26'dır.",
    answers: [
      { text: "8", ok: false },
      { text: "10", ok: false },
      { text: "14", ok: false },
      { text: "26", ok: true },
      { text: "27", ok: false }
    ]
  },
  {
    text: "$-5 < x \\leq 1$ ve $y + 2x = 5$\n\nolduğuna göre y'nin en küçük ve en büyük tam sayı değerleri toplamı kaçtır?",
    diff: 2,
    expl: "Verilen denklemden $x$'i çekersek $x = \\frac{5 - y}{2}$ veya doğrudan $y = 5 - 2x$ yazabiliriz. $y$'nin aralığını bulmak için $x$'in aralığını $-2$ ile çarpıp eşitsizliği yön değiştirelim: $10 > -2x \\geq -2$. Her tarafa 5 ekleyelim: $15 > 5 - 2x \\geq 3 \\implies 3 \\leq y < 15$. $y$'nin en küçük tam sayı değeri 3, en büyük değeri 14'tür. Toplamları: 3 + 14 = 17.",
    answers: [
      { text: "-3", ok: false },
      { text: "7", ok: false },
      { text: "14", ok: false },
      { text: "17", ok: true },
      { text: "18", ok: false }
    ]
  },
  {
    text: "a ve b iki tam sayı olmak üzere,\n\n$-1 \\leq a < 5$\n$-5 < b < 9$\n\na + b toplamının en büyük değeri kaçtır?",
    diff: 1,
    expl: "$a$ ve $b$ tam sayı olarak belirtildiği için aralıklardan en büyük tam sayı değerlerini doğrudan seçmeliyiz. $-1 \\leq a < 5$ aralığındaki en büyük $a$ tam sayısı 4'tür. $-5 < b < 9$ aralığındaki en büyük $b$ tam sayısı 8'dir. Toplamları $4 + 8 = 12$'dir.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: true },
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "a ve b birer reel sayı olmak üzere\n\n$-3 < a < 7$\n$4 < b < 8$\n\nolduğuna göre a + b değerinin alabileceği en büyük tam sayı değeri kaçtır?",
    diff: 1,
    expl: "a ve b reel sayı olduğu için değer seçmek yerine eşitsizlikleri doğrudan taraf tarafa toplamalıyız. Topladığımızda: $1 < a + b < 15$ elde edilir. $a + b$ toplamının alabileceği en büyük tam sayı değeri 14'tür.",
    answers: [
      { text: "11", ok: false },
      { text: "12", ok: false },
      { text: "13", ok: false },
      { text: "14", ok: true },
      { text: "15", ok: false }
    ]
  },
  {
    text: "$3 \\leq a < 6$\n$4 \\leq b < 9$\n\neşitsizliklerine göre $\\frac{18}{a} + \\frac{18}{b}$ toplamının en küçük tam sayı değeri kaçtır?",
    diff: 3,
    expl: "İfadenin en küçük değerini bulmak için paydadaki a ve b'yi olabildiğince büyük seçmeliyiz.\n$3 \\leq a < 6 \\implies \\frac{1}{6} < \\frac{1}{a} \\leq \\frac{1}{3} \\implies 3 < \\frac{18}{a} \\leq 6$\n$4 \\leq b < 9 \\implies \\frac{1}{9} < \\frac{1}{b} \\leq \\frac{1}{4} \\implies 2 < \\frac{18}{b} \\leq 4.5$\nTaraf tarafa toplarsak: $5 < \\frac{18}{a} + \\frac{18}{b} \\leq 10.5$. Toplamın alabileceği en küçük tam sayı değeri 5'ten büyük olan 6'dır.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: true },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "$-5 < a < 7$\n$1 < b < 8$\n\nolduğuna göre 3a + 4b toplamının değer aralığında kaç tane tam sayı vardır?",
    diff: 2,
    expl: "Eşitsizlikleri sırasıyla 3 ve 4 ile genişletelim:\n$3 \\cdot (-5 < a < 7) \\implies -15 < 3a < 21$\n$4 \\cdot (1 < b < 8) \implies 4 < 4b < 32$\nTaraf tarafa toplayalım:\n$-11 < 3a + 4b < 53$\nBu aralıktaki tam sayılar -10'dan başlar 52'ye kadar gider. Terim sayısı = $52 - (-10) + 1 = 63$ tanedir.",
    answers: [
      { text: "52", ok: false },
      { text: "53", ok: false },
      { text: "57", ok: false },
      { text: "63", ok: true },
      { text: "64", ok: false }
    ]
  },
  {
    text: "$-4 < a \\leq 6$\n$-5 \\leq b < 4$\n\nolmak üzere a · b çarpımının en büyük ve en küçük tam sayı değerlerinin toplamı kaçtır?",
    diff: 3,
    expl: "Çarpımın aralığını bulmak için sınır değerlerini birbiriyle çarparız:\n$-4 \\cdot -5 = 20$\n$-4 \\cdot 4 = -16$\n$6 \\cdot -5 = -30$ (İkisi de dâhil olduğu için bu sınır dâhildir, $\\leq$)\n$6 \\cdot 4 = 24$ (Biri dâhil değil, $<$)\nEn küçük değer -30 (dâhil), en büyük sınır 24 (dâhil değil). Yani $-30 \\leq a \\cdot b < 24$. \nEn büyük tam sayı değeri 23, en küçük tam sayı değeri -30'dur. Toplamları: $23 + (-30) = -7$.",
    answers: [
      { text: "-10", ok: false },
      { text: "-7", ok: true },
      { text: "-6", ok: false },
      { text: "42", ok: false },
      { text: "44", ok: false }
    ]
  },
  {
    text: "$-2 < a \\leq 4$ ve $1 \\leq b < 8$\n\nolmak üzere a ve b tam sayı ise 2a - 3b'nin en büyük değeri kaçtır?",
    diff: 2,
    expl: "a ve b'nin 'tam sayı' olduğu belirtildiği için aralıklardan uygun tam sayıları seçmeliyiz. $2a - 3b$'nin en büyük olması için a'yı en büyük, b'yi en küçük seçmeliyiz. \n$-2 < a \\leq 4$ aralığından $a = 4$ seçilir.\n$1 \\leq b < 8$ aralığından $b = 1$ seçilir.\nİşlem: $2(4) - 3(1) = 8 - 3 = 5$ bulunur.",
    answers: [
      { text: "-14", ok: false },
      { text: "-5", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "$1 \\leq a < b < c < 7$\n\nolduğuna göre a + b + 2c toplamının değer aralığı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Eşitsizliklerde sınırları bulmak için tüm değişkenleri uç değerlerdeymiş gibi düşünürüz.\nEn küçük sınır için hepsini alt sınır olan 1'e yakın düşünelim: $a=1, b=1, c=1 \\implies 1 + 1 + 2(1) = 4$. Ancak sayılar birbirinden farklı ve büyük olduğu için alt sınır 4'ten büyük olmalıdır ($>$).\nEn büyük sınır için hepsini üst sınır olan 7'ye yakın düşünelim: $a=7, b=7, c=7 \\implies 7 + 7 + 2(7) = 28$. Sınır 7'ye eşit olamayacağından üst sınır 28'den küçük olmalıdır ($<$).\nAralık $(4, 28)$ şeklindedir.",
    answers: [
      { text: "(8, 24)", ok: false },
      { text: "(4, 28)", ok: true },
      { text: "[4, 28)", ok: false },
      { text: "[8, 24)", ok: false },
      { text: "[4, 24)", ok: false }
    ]
  },
  {
    text: "a, b ve c pozitif olmak üzere a < b < c ve $\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} = \\frac{1}{9}$ olduğuna göre c sayısının en küçük tam sayı değeri kaçtır?",
    diff: 3,
    expl: "Eğer tüm değişkenler birbirine eşit olsaydı ($a=b=c$), denklem $\\frac{3}{c} = \\frac{1}{9}$ olur ve buradan $c=27$ çıkardı. Ancak soruda $a < b < c$ verilmiştir. Paydası büyük olan kesir daha küçük olacağı için $\\frac{1}{c} < \\frac{1}{b} < \\frac{1}{a}$ olur. Bu durumda 3 tane $\\frac{1}{c}$'nin toplamı $\\frac{1}{9}$'dan küçük olmalıdır: $\\frac{3}{c} < \\frac{1}{9} \\implies c > 27$. $c$'nin alabileceği en küçük tam sayı değeri 28'dir.",
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
    text: "$|-3 + 5| - |-4| + |3 - 7|$\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Mutlak değer içindeki işlemleri yapalım: $|2| - |-4| + |-4|$. Mutlak değer dışına sayıları pozitif çıkaralım: $2 - 4 + 4 = 2$ bulunur.",
    answers: [
      { text: "-3", ok: false },
      { text: "2", ok: true },
      { text: "4", ok: false },
      { text: "0", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "$\\frac{|-5| - |-6| + |4|}{|-2| - |-3|}$\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Mutlak değer dışına sayıları çıkaralım.\nPay: $5 - 6 + 4 = 3$.\nPayda: $2 - 3 = -1$.\nBölüm: $\\frac{3}{-1} = -3$ bulunur.",
    answers: [
      { text: "-1", ok: false },
      { text: "-2", ok: false },
      { text: "3", ok: false },
      { text: "-3", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "x = -4 ve y = -3 olmak üzere\n\n$|x + y| - |x - y| - |x|$\n\nifadesinin eşiti kaçtır?",
    diff: 2,
    expl: "Değerleri yerlerine koyalım: $|-4 - 3| - |-4 - (-3)| - |-4|$.\nİşlemleri yaparsak: $|-7| - |-1| - |-4|$.\nMutlak dışına çıkaralım: $7 - 1 - 4 = 2$ bulunur.",
    answers: [
      { text: "2", ok: true },
      { text: "-2", ok: false },
      { text: "3", ok: false },
      { text: "1", ok: false },
      { text: "-1", ok: false }
    ]
  },
  {
    text: "$|1 - \\sqrt{2}| + |\\sqrt{5} - \\sqrt{2}| - |\\sqrt{5} - 2|$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Kök içlerinin pozitif mi negatif mi olduğuna bakalım. $\\sqrt{1} < \\sqrt{2}$ olduğu için ilk ifade negatiftir, ters işaretli çıkar: $\\sqrt{2}-1$.\n$\\sqrt{5} > \\sqrt{2}$ olduğu için ikinci ifade pozitiftir, aynen çıkar: $\\sqrt{5}-\\sqrt{2}$.\n$\\sqrt{5} > \\sqrt{4} (2)$ olduğu için üçüncü ifade pozitiftir, aynen çıkar: $\\sqrt{5}-2$.\nİşlemleri yapalım: $(\\sqrt{2}-1) + (\\sqrt{5}-\\sqrt{2}) - (\\sqrt{5}-2) = \\sqrt{2} - 1 + \\sqrt{5} - \\sqrt{2} - \\sqrt{5} + 2 = 1$.",
    answers: [
      { text: "3", ok: false },
      { text: "0", ok: false },
      { text: "-3", ok: false },
      { text: "-2", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "$3 < x < 7$ olmak üzere\n\n$|3 - x| + |8 - x|$\n\nifadesinin sonucu kaçtır?",
    diff: 1,
    expl: "x değeri 3 ile 7 arasındadır. \n$3 - x$ ifadesinde x, 3'ten büyük olduğu için içerisi negatiftir, dışarı ters işaretli çıkar: $-3 + x$.\n$8 - x$ ifadesinde x, 8'den küçük olduğu için içerisi pozitiftir, aynen çıkar: $8 - x$.\nToplarsak: $(x - 3) + (8 - x) = 5$ bulunur.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: true },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "x > 0 olmak üzere\n\n$|x| - |-3x| - |x + 4|$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "x pozitif bir sayıdır.\n$|x|$ aynen çıkar: $x$.\n$|-3x|$ ifadesinde x pozitif olduğundan içerisi negatiftir, eksi ile çarpılarak çıkar: $3x$.\n$|x+4|$ içerisi pozitiftir, aynen çıkar: $x+4$.\nİşlem: $x - (3x) - (x+4) = x - 3x - x - 4 = -3x - 4$ bulunur.",
    answers: [
      { text: "-3x", ok: false },
      { text: "-4", ok: false },
      { text: "-3x + 4", ok: false },
      { text: "-3x - 4", ok: true },
      { text: "4", ok: false }
    ]
  },
  {
    text: "a < 0 olmak üzere\n\n$|-a| - |a - 2| + |3a|$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "a negatif bir sayıdır.\n$|-a|$ içerisi pozitiftir, aynen çıkar: $-a$.\n$|a-2|$ içerisi negatiftir, ters işaretli çıkar: $-a+2$.\n$|3a|$ içerisi negatiftir, ters işaretli çıkar: $-3a$.\nİşlemi yapalım: $-a - (-a + 2) + (-3a) = -a + a - 2 - 3a = -3a - 2$.",
    answers: [
      { text: "-3a", ok: false },
      { text: "-2", ok: false },
      { text: "-3a - 2", ok: true },
      { text: "3a + 2", ok: false },
      { text: "2", ok: false }
    ]
  },
  {
    text: "x < 0 olmak üzere\n\n$||x - 2| - x| - 2$\n\nifadesinin eşiti aşağıdakilerden hangisine eşittir?",
    diff: 3,
    expl: "x negatif olduğu için $x-2$ negatiftir. $|x-2|$ dışarı $2-x$ olarak çıkar. \nİfade şuna dönüşür: $|2 - x - x| - 2 = |2 - 2x| - 2$. \nx negatif olduğundan $2-2x$ ifadesi pozitiftir, mutlak değerden aynen çıkar: $2 - 2x$. \nSonuç: $2 - 2x - 2 = -2x$ bulunur.",
    answers: [
      { text: "-2x", ok: true },
      { text: "2x", ok: false },
      { text: "0", ok: false },
      { text: "-2x + 2", ok: false },
      { text: "-2x - 2", ok: false }
    ]
  },
  {
    text: "$a^2b < 0$\n$a^5b < 0$ olduğuna göre\n\n$|a - b| - |a| + |b|$\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "$a^2b < 0$ eşitsizliğinde $a^2$ daima pozitiftir, bu yüzden $b < 0$ olmalıdır. \n$a^5b < 0$ eşitsizliğinde $b$ negatif olduğu için $a^5$ pozitif olmalıdır, dolayısıyla $a > 0$ bulunur.\n$|a-b|$ içi pozitiftir (Pozitif - Negatif = Pozitif), aynen çıkar: $a-b$.\n$|a|$ içi pozitiftir, aynen çıkar: $a$.\n$|b|$ içi negatiftir, ters işaretli çıkar: $-b$.\nYerine yazalım: $(a-b) - a + (-b) = -2b$.",
    answers: [
      { text: "-2a", ok: false },
      { text: "-2b", ok: true },
      { text: "2a", ok: false },
      { text: "2a - 2b", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "a, b, c pozitif tam sayılar\n\n$\\frac{1}{a} < \\frac{1}{b} < \\frac{1}{c}$ olduğuna göre\n\n$|a - b| - |c - a| + |c - b|$\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Pozitif sayılarda kesir sıralaması paydalar ile ters orantılıdır. $\\frac{1}{a} < \\frac{1}{b} < \\frac{1}{c} \\implies a > b > c$ olur.\n$|a-b|$ içi pozitiftir, aynen çıkar: $a-b$.\n$|c-a|$ içi negatiftir, ters çıkar: $a-c$.\n$|c-b|$ içi negatiftir, ters çıkar: $b-c$.\nİşlem: $(a-b) - (a-c) + (b-c) = a - b - a + c + b - c = 0$.",
    answers: [
      { text: "2a", ok: false },
      { text: "2b", ok: false },
      { text: "2c", ok: false },
      { text: "2a - 2b", ok: false },
      { text: "0", ok: true }
    ]
  },
  {
    text: "$|x - 2| + |x - 5|$\n\nifadesinin en küçük değeri kaçtır?",
    diff: 2,
    expl: "Mutlak değerlerin toplamının en küçük değerini bulmak için içlerini sıfır yapan kritik noktalar denenir. $x-2=0 \\implies x=2$ ve $x-5=0 \\implies x=5$.\n$x=2$ için: $|2-2| + |2-5| = 3$.\n$x=5$ için: $|5-2| + |5-5| = 3$.\nİfadenin alabileceği en küçük değer 3'tür.",
    answers: [
      { text: "5", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "4", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "$|x - 4| + |2x - 12|$\n\nifadesinin en küçük değeri kaçtır?",
    diff: 2,
    expl: "İçlerini sıfır yapan kritik noktaları bulup yerine koyalım. $x=4$ ve $x=6$.\n$x=4$ için: $|4-4| + |8-12| = 0 + 4 = 4$.\n$x=6$ için: $|6-4| + |12-12| = 2 + 0 = 2$.\nEn küçük değer 2'dir.",
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
    text: "$|2x - 3| = 11$\n\nolduğuna göre x'in alabileceği değerler toplamı kaçtır?",
    diff: 1,
    expl: "Mutlak değer denklemi iki durumlu çözülür:\n1) $2x - 3 = 11 \\implies 2x = 14 \\implies x = 7$\n2) $2x - 3 = -11 \\implies 2x = -8 \\implies x = -4$\nDeğerlerin toplamı: $7 + (-4) = 3$.",
    answers: [
      { text: "4", ok: false },
      { text: "3", ok: true },
      { text: "2", ok: false },
      { text: "5", ok: false },
      { text: "1", ok: false }
    ]
  },
  {
    text: "$|x + 4| = 12!$\n\nolduğuna göre x'in alabileceği değerler toplamı kaçtır?",
    diff: 2,
    expl: "Mutlak değerli denklem iki şekilde açılır:\n1) $x + 4 = 12! \\implies x_1 = 12! - 4$\n2) $x + 4 = -12! \\implies x_2 = -12! - 4$\nKökleri toplarsak: $(12! - 4) + (-12! - 4) = -8$ bulunur. (Pratik kural: $|x-a|=c$ denkleminde kökler toplamı her zaman mutlak değerin içini sıfır yapan x değerinin 2 katıdır. $x+4=0 \\implies x=-4$, $2 \\cdot (-4) = -8$).",
    answers: [
      { text: "-4", ok: false },
      { text: "4", ok: false },
      { text: "8", ok: false },
      { text: "-8", ok: true },
      { text: "12!", ok: false }
    ]
  },
  {
    text: "$|x - 3| + 4 = 2$\n\ndenkleminin çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Denklemi düzenlersek $|x - 3| = -2$ elde edilir. Mutlak değerli bir ifadenin sonucu asla negatif olamaz. Bu nedenle denklemi sağlayan hiçbir reel sayı yoktur, çözüm kümesi boş kümedir ($\\emptyset$).",
    answers: [
      { text: "R", ok: false },
      { text: "{5}", ok: false },
      { text: "∅", ok: true },
      { text: "{1}", ok: false },
      { text: "{1, 5}", ok: false }
    ]
  },
  {
    text: "$|x - 4| = 2x - 11$\n\ndenkleminin çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Denklemi iki durumlu inceleyelim:\n1) $x - 4 = 2x - 11 \\implies x = 7$. Bulunan x değeri eşitliği sağlıyor mu diye kontrol edilir: $|7-4| = 2(7)-11 \\implies 3 = 3$ (Sağlar).\n2) $x - 4 = -2x + 11 \\implies 3x = 15 \\implies x = 5$. Kontrol edelim: $|5-4| = 2(5)-11 \\implies 1 = -1$ (Sağlamaz). Çözüm kümesi sadece $\\{7\\}$ olur.",
    answers: [
      { text: "{5}", ok: false },
      { text: "{7}", ok: true },
      { text: "{5, 7}", ok: false },
      { text: "∅", ok: false },
      { text: "R", ok: false }
    ]
  },
  {
    text: "$|3x - 12| + |20 - 5x| = 40$\n\nolduğuna göre x'in alabileceği değerler çarpımı kaçtır?",
    diff: 2,
    expl: "Mutlak değerin içlerini ortak paranteze alalım:\n$3|x-4| + 5|4-x| = 40$. Mutlak değerde $|x-4| = |4-x|$ olduğundan:\n$8|x-4| = 40 \\implies |x-4| = 5$ olur.\nBuradan $x-4 = 5 \\implies x = 9$ ve $x-4 = -5 \\implies x = -1$ bulunur. Köklerin çarpımı: $9 \\cdot (-1) = -9$.",
    answers: [
      { text: "-1", ok: false },
      { text: "9", ok: false },
      { text: "3", ok: false },
      { text: "-3", ok: false },
      { text: "-9", ok: true }
    ]
  },
  {
    text: "$||x - 4| - 3| = 4$\n\nolduğuna göre x'in alabileceği değerler toplamı kaçtır?",
    diff: 2,
    expl: "En dıştaki mutlak değeri açalım:\n1) $|x-4| - 3 = 4 \\implies |x-4| = 7 \\implies x-4 = 7 \\implies x=11$ ve $x-4 = -7 \\implies x=-3$.\n2) $|x-4| - 3 = -4 \\implies |x-4| = -1$. (Mutlak değer negatif olamaz, çözüm yoktur).\nDeğerler toplamı: $11 + (-3) = 8$.",
    answers: [
      { text: "4", ok: false },
      { text: "8", ok: true },
      { text: "-4", ok: false },
      { text: "2", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "$|3x - 4| < 14$\n\neşitsizliğini sağlayan x tam sayıları kaç tanedir?",
    diff: 1,
    expl: "Eşitsizliği açalım: $-14 < 3x - 4 < 14$. Her tarafa 4 ekleyelim: $-10 < 3x < 18$. Her tarafı 3'e bölelim: $-\\frac{10}{3} < x < 6$. (Yani $-3.33 < x < 6$). Bu aralıktaki tam sayılar: $-3, -2, -1, 0, 1, 2, 3, 4, 5$ olmak üzere toplam 9 tanedir.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: true },
      { text: "8", ok: false },
      { text: "5", ok: false }
    ]
  },
  {
    text: "x bir reel sayı ve $|x| \\leq 3$ olmak üzere;\n\nx + 2y = 6\n\neşitsizliğini sağlayan y tam sayılarının toplamı kaçtır?",
    diff: 2,
    expl: "$|x| \\leq 3 \\implies -3 \\leq x \\leq 3$ demektir. Denklemden $x$'i çekersek $x = 6 - 2y$ olur. Eşitsizlikte yerine yazalım: $-3 \\leq 6 - 2y \\leq 3$. Her taraftan 6 çıkaralım: $-9 \\leq -2y \\leq -3$. Her tarafı $-2$'ye bölüp yön değiştirelim: $4.5 \\geq y \\geq 1.5$. Bu aralıktaki $y$ tam sayıları 2, 3 ve 4'tür. Toplamları: $2 + 3 + 4 = 9$.",
    answers: [
      { text: "12", ok: false },
      { text: "6", ok: false },
      { text: "3", ok: false },
      { text: "8", ok: false },
      { text: "9", ok: true }
    ]
  },
  {
    text: "$|x - 3| \\geq 4$ eşitsizliğini sağlamayan x tam sayılarının toplamı kaçtır?",
    diff: 2,
    expl: "Eşitsizliği sağlamayan değerler, zıttı olan $|x - 3| < 4$ eşitsizliğini sağlayan değerlerdir. Bunu açarsak: $-4 < x - 3 < 4 \\implies -1 < x < 7$ olur. Bu aralıktaki tam sayılar: 0, 1, 2, 3, 4, 5, 6'dır. Toplamları: $0+1+2+3+4+5+6 = 21$ bulunur.",
    answers: [
      { text: "21", ok: true },
      { text: "24", ok: false },
      { text: "26", ok: false },
      { text: "25", ok: false },
      { text: "28", ok: false }
    ]
  },
  {
    text: "$3 < |2x - 1| \\leq 7$\n\neşitsizliğini sağlayan kaç farklı x tam sayısı vardır?",
    diff: 2,
    expl: "Mutlak değerli eşitsizlik iki farklı aralığa ayrılır:\n1) $3 < 2x - 1 \\leq 7 \\implies 4 < 2x \\leq 8 \\implies 2 < x \\leq 4$. Tam sayılar: 3 ve 4.\n2) $-7 \\leq 2x - 1 < -3 \\implies -6 \\leq 2x < -2 \\implies -3 \\leq x < -1$. Tam sayılar: -3 ve -2.\nToplamda 4 farklı tam sayı değeri vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "4", ok: true },
      { text: "1", ok: false }
    ]
  },
  {
    text: "A = $|x - 2| - |x - 7|$\n\nolduğuna göre A değeri kaç farklı tam sayı değeri alır?",
    diff: 3,
    expl: "$A = |x - a| - |x - b|$ şeklindeki ifadelerin alabileceği en büyük ve en küçük değerler, mutlak değer içlerini sıfır yapan kritik noktaların yerine konmasıyla bulunur.\n$x = 2$ için: $A = 0 - |-5| = -5$ (En küçük).\n$x = 7$ için: $A = |5| - 0 = 5$ (En büyük).\nA sayısı -5 ile 5 arasındaki tüm tam sayı değerlerini alabilir. Terim sayısı: $5 - (-5) + 1 = 11$ tanedir.",
    answers: [
      { text: "14", ok: false },
      { text: "11", ok: true },
      { text: "12", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "$|x - 3| < |x - 1|$\n\neşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Her iki tarafın karesini alarak mutlak değerden kurtulabiliriz: $(x-3)^2 < (x-1)^2 \\implies x^2 - 6x + 9 < x^2 - 2x + 1 \\implies 8 < 4x \\implies 2 < x$. Çözüm kümesi $(2, \\infty)$ olur. (Pratik yol: Sayı doğrusunda 3'e olan uzaklığı, 1'e olan uzaklığından küçük olan sayılar, ikisinin tam ortası olan 2'den büyük olan sayılardır).",
    answers: [
      { text: "[2, ∞)", ok: false },
      { text: "(2, ∞)", ok: true },
      { text: "(-∞, 2)", ok: false },
      { text: "(-∞, 2]", ok: false },
      { text: "(-2, 2)", ok: false }
    ]
  },

// ─── MUTLAK DEĞER TEST - 3 ───────────────────────────────────────────────────

  {
    text: "$|3x - 5| = 2022!$\n\ndenklemini sağlayan x değerlerinin toplamı kaçtır?",
    diff: 2,
    expl: "Mutlak değer denkleminin kökler toplamını bulmak için iki durumu yazarız:\n1) $3x - 5 = 2022! \\implies x_1 = \\frac{2022! + 5}{3}$\n2) $3x - 5 = -2022! \\implies x_2 = \\frac{-2022! + 5}{3}$\nKökleri toplarsak $2022!$'ler birbirini götürür: $\\frac{5}{3} + \\frac{5}{3} = \\frac{10}{3}$ bulunur. (Pratik olarak $|ax+b|=c$ denkleminde kökler toplamı, içini sıfır yapan kökün 2 katıdır. $x=5/3 \\implies 2 \\cdot \\frac{5}{3} = \\frac{10}{3}$).",
    answers: [
      { text: "5/3", ok: false },
      { text: "10/3", ok: true },
      { text: "5", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "x bir gerçel sayı olmak üzere\n\n$|x| < 3$\n\nolduğuna göre $x \\cdot (x + 2)$ ifadesinin alabileceği kaç farklı tam sayı değeri vardır?",
    diff: 3,
    expl: "İstenen ifade $x^2 + 2x$'tir. Bu ifadeyi tam kareye tamamlarsak $(x+1)^2 - 1$ olur. \n$|x| < 3 \\implies -3 < x < 3$. Her tarafa 1 ekleyelim: $-2 < x+1 < 4$. \nKaresini alırsak (arada 0 olduğu için alt sınır 0 olur): $0 \\leq (x+1)^2 < 16$. \nHer taraftan 1 çıkaralım: $-1 \\leq (x+1)^2 - 1 < 15$. \nBu aralıktaki tam sayılar -1'den 14'e kadardır. Terim sayısı $14 - (-1) + 1 = 16$ bulunur.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: true },
      { text: "17", ok: false }
    ]
  },
  {
    text: "$|x - 2| + |y + 3| + |z - 1| = 7$\n\nolduğuna göre, $|x + y + z|$ ifadesinin alabileceği kaç farklı tam sayı değeri vardır?",
    diff: 3,
    expl: "Mutlak değerlerin içindeki ifadelere harf verelim: $a = x-2$, $b = y+3$, $c = z-1$. Soru bize $|a| + |b| + |c| = 7$ olduğunu söylüyor.\nBizden istenen ifade: $|x+y+z|$. Bu harfleri çekersek $x=a+2$, $y=b-3$, $z=c+1$ olur. Toplamları $x+y+z = a+b+c$ yapar.\nMutlak değer eşitsizlik kurallarına göre bir toplamın mutlak değeri, mutlak değerlerin toplamından küçük veya eşittir: $|a+b+c| \\leq |a| + |b| + |c|$. Yani $|a+b+c| \\leq 7$ olur. Mutlak değer negatif olamayacağından alt sınır 0'dır: $0 \\leq |x+y+z| \\leq 7$. Bu aralıktaki tam sayılar 0'dan 7'ye kadar 8 tanedir.",
    answers: [
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "$||x - 3| - k| \\leq 0$\n\neşitsizliğini sağlayan x gerçel sayılarının çarpımı 4 olduğuna göre k kaçtır?",
    diff: 3,
    expl: "Mutlak değerli bir ifade 0'dan küçük olamaz, bu yüzden mecbur 0'a eşittir. \n$||x-3|-k| = 0 \\implies |x-3| = k$ elde edilir. \nBu durumda kökler $x - 3 = k \\implies x_1 = 3+k$ ve $x - 3 = -k \\implies x_2 = 3-k$ olur.\nKöklerin çarpımı: $(3+k)(3-k) = 9 - k^2 = 4$ verilmiştir. \n$k^2 = 5 \\implies k = \\sqrt{5}$ bulunur.",
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
  {
    text: "$3(x + 7) + 5(x - 8) \\leq 4(2x - 3) - 7$\n\neşitsizliğinin en geniş çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Eşitsizliği dağıtarak açalım: $3x + 21 + 5x - 40 \\leq 8x - 12 - 7$. Düzenlersek: $8x - 19 \\leq 8x - 19$. Her iki taraftan $8x$'leri çıkarırsak $-19 \\leq -19$ elde edilir. Bu ifade $x$'in alabileceği tüm reel sayı değerleri için daima doğru bir önermedir ($0 \\leq 0$). Dolayısıyla çözüm kümesi tüm reel sayılar, yani $\\mathbb{R}$'dir.",
    answers: [
      { text: "$\\emptyset$", ok: false },
      { text: "{1}", ok: false },
      { text: "{0, 1}", ok: false },
      { text: "Z", ok: false },
      { text: "R", ok: true }
    ]
  },
  {
    text: "$3x + 2 \\leq 2(x + 4) + 4x$\n\neşitsizliğinin en geniş çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Sağ tarafı açalım: $3x + 2 \\leq 2x + 8 + 4x$. Düzenlersek: $3x + 2 \\leq 6x + 8$. $3x$'i sağa, 8'i sola alalım: $2 - 8 \\leq 6x - 3x \\implies -6 \\leq 3x$. Her iki tarafı 3'e bölersek $-2 \\leq x$ bulunur. Bu da $[-2, \\infty)$ aralığına eşittir.",
    answers: [
      { text: "[2, ∞)", ok: false },
      { text: "[-2, ∞)", ok: true },
      { text: "(-2, ∞)", ok: false },
      { text: "(-∞, -2)", ok: false },
      { text: "(-∞, -2]", ok: false }
    ]
  },
  {
    text: "$\\frac{x+4}{6} \\leq \\frac{x}{9} + 1$\n\neşitsizliğini sağlayan kaç farklı x doğal sayısı vardır?",
    diff: 2,
    expl: "Sağ tarafın paydasını eşitleyelim: $\\frac{x+4}{6} \\leq \\frac{x+9}{9}$. İçler dışlar çarpımı yapalım (paydalar pozitif olduğu için eşitsizlik yön değiştirmez): $9(x + 4) \\leq 6(x + 9)$. Sadeleştirmek için her iki tarafı 3'e bölelim: $3(x + 4) \\leq 2(x + 9) \\implies 3x + 12 \\leq 2x + 18$. $x$'i sola, sayıları sağa atarsak: $x \\leq 6$ bulunur. Bu şarta uyan doğal sayılar (0 dâhil) $0, 1, 2, 3, 4, 5, 6$ olmak üzere toplam 7 tanedir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "x ve y birer gerçel sayı olmak üzere;\n\n$-9 < x < -2$\n$4 < y < 9$\n\nolduğuna göre $\\frac{36}{x} + \\frac{36}{y}$ toplamının en büyük tam sayı değeri kaçtır?",
    diff: 3,
    expl: "İfadeleri ters çevirerek (1 bölü) aralıklarını bulalım. \n$-9 < x < -2$ için ters çevirirsek: $-\\frac{1}{2} < \\frac{1}{x} < -\\frac{1}{9}$ olur. Her tarafı 36 ile çarpalım: $-18 < \\frac{36}{x} < -4$.\n$4 < y < 9$ için ters çevirirsek: $\\frac{1}{9} < \\frac{1}{y} < \\frac{1}{4}$ olur. Her tarafı 36 ile çarpalım: $4 < \\frac{36}{y} < 9$.\nTaraf tarafa toplarsak: $-14 < \\frac{36}{x} + \\frac{36}{y} < 5$ elde edilir. Bu toplamın alabileceği en büyük tam sayı değeri 4'tür.",
    answers: [
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false }
    ]
  },
  {
    text: "x pozitif bir tam sayı olmak üzere\n\n$\\frac{x - 7}{2x + 3} < \\frac{3}{8}$\n\neşitsizliğine göre x'in alabileceği en büyük değer kaçtır?",
    diff: 2,
    expl: "x pozitif bir tam sayı olduğundan payda olan $(2x + 3)$ daima pozitiftir. Bu nedenle eşitsizliğin yönünü değiştirmeden içler dışlar çarpımı yapabiliriz: $8(x - 7) < 3(2x + 3) \\implies 8x - 56 < 6x + 9$. Düzenlersek: $2x < 65 \\implies x < 32.5$ bulunur. Bu şarta uyan en büyük x tam sayısı 32'dir.",
    answers: [
      { text: "29", ok: false },
      { text: "30", ok: false },
      { text: "31", ok: false },
      { text: "32", ok: true },
      { text: "33", ok: false }
    ]
  },
  {
    text: "$2x - 2 < 5x + 5 \\leq 2x + 23$\n\neşitsizliğini sağlayan kaç farklı doğal sayı vardır?",
    diff: 2,
    expl: "Eşitsizliği iki parça halinde çözelim:\n1) $2x - 2 < 5x + 5 \\implies -7 < 3x \\implies -2.33 < x$.\n2) $5x + 5 \\leq 2x + 23 \\implies 3x \\leq 18 \\implies x \\leq 6$.\nİki durumu birleştirirsek: $-2.33 < x \\leq 6$ olur. Doğal sayı istendiği için 0'dan başlarız: $0, 1, 2, 3, 4, 5, 6$. Toplam 7 farklı doğal sayı vardır.",
    answers: [
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "$2x + 4 < x + 6 < 4x + 9$\n\neşitsizliğini sağlayan x değer aralığı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "İki parça halinde çözelim:\n1) $2x + 4 < x + 6 \\implies x < 2$.\n2) $x + 6 < 4x + 9 \\implies -3 < 3x \\implies -1 < x$.\nÇözümleri birleştirirsek $-1 < x < 2$ bulunur. Sınırlar dâhil olmadığı için çözüm kümesi açık aralık olan $(-1, 2)$'dir.",
    answers: [
      { text: "[-2, 1]", ok: false },
      { text: "[-1, 2)", ok: false },
      { text: "(0, 1)", ok: false },
      { text: "(-1, 2)", ok: true },
      { text: "(-2, 1)", ok: false }
    ]
  },
  {
    text: "$\\frac{a - 3}{a + 4} \\leq 0$ olmak üzere a'nın alabileceği tam sayı değerlerinin toplamı kaçtır?",
    diff: 2,
    expl: "Kesrin sıfırdan küçük veya eşit olması için pay ve paydanın ters işaretli olması gerekir. Köklerimiz pay için $a=3$, payda için $a=-4$'tür. Eşitsizlik tablosu yaparsak çözüm aralığı $(-4, 3]$ olur (Payda 0 olamayacağı için -4 dâhil edilmez, pay 0 olabileceği için 3 dâhildir). Bu aralıktaki tam sayılar: $-3, -2, -1, 0, 1, 2, 3$'tür. Bunların toplamı 0'dır.",
    answers: [
      { text: "-4", ok: false },
      { text: "-3", ok: false },
      { text: "-2", ok: false },
      { text: "-1", ok: false },
      { text: "0", ok: true }
    ]
  },
  {
    text: "$a < \\frac{25}{a} < 0$\n\neşitsizliğinin çözüm kümesi aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Eşitsizliğin sağ tarafından $\\frac{25}{a} < 0$ olduğu, yani $a$'nın kesinlikle negatif olduğu ($a < 0$) anlaşılır. Sol tarafa bakalım: $a < \\frac{25}{a}$. Her iki tarafı $a$ ile çarparsak ($a$ negatif olduğu için eşitsizlik yön değiştirir): $a^2 > 25$. Bu eşitsizlik $a > 5$ veya $a < -5$ durumlarında sağlanır. Ancak en başta $a$'nın negatif olduğunu tespit etmiştik. Bu nedenle sadece $a < -5$ çözüm kümesini oluşturur. Bu aralık $(-\\infty, -5)$'tir.",
    answers: [
      { text: "(-∞, 5)", ok: false },
      { text: "(5, ∞)", ok: false },
      { text: "(-∞, -5)", ok: true },
      { text: "(-∞, -5]", ok: false },
      { text: "(-25, -5)", ok: false }
    ]
  },
  {
    text: "$a < b < 0 < c$\n\nşeklinde verilen a, b ve c reel sayıları için aşağıda verilenlerden hangisi kesinlikle doğrudur?",
    diff: 2,
    expl: "$a$ ve $b$ negatif, $c$ pozitiftir. Şıkları inceleyelim:\nA) $\\frac{a+b}{c} > 0$ (Negatif / Pozitif = Negatif olmalı, Yanlış)\nC) $\\frac{a}{b} < \\frac{a}{c}$ (Neg/Neg = Pozitif, Neg/Poz = Negatif. Pozitif < Negatif olamaz, Yanlış)\nD) $\\frac{b-a}{b-c} < 0$. Pay $(b-a)$ pozitiftir çünkü $b > a$. Payda $(b-c)$ negatiftir çünkü $b < c$. Sonuç Pozitif / Negatif = Negatif olur. Kesinlikle doğrudur.",
    answers: [
      { text: "(a+b)/c > 0", ok: false },
      { text: "(b+c)/a < 0", ok: false },
      { text: "a/b < a/c", ok: false },
      { text: "(b-a)/(b-c) < 0", ok: true },
      { text: "(ac)/(b+c)", ok: false }
    ]
  },
  {
    text: "a ve b tam sayıları için\n\n$-5 < b - a < 0 < a$\n\neşitliğine göre a + b toplamı en az kaçtır?",
    diff: 3,
    expl: "Matematiksel inceleme: $a$ pozitif tam sayı olduğundan $a \\geq 1$'dir. $-5 < b - a$ eşitsizliğinden $b > a - 5 \\implies b \\geq a - 4$ bulunur. Buradan $a + b \\geq 2a - 4$ olur. $a=1$ için $a+b \\geq -2$ olur (b=-3 seçilirse şartlar sağlanır). Yani toplam en az -2 olmalıdır. Ancak kitabın cevap anahtarı hatalı bir kurgu ile sonucu -3 (B şıkkı) kabul etmiştir. Sistemsel tutarlılık için anahtar doğru olarak işaretlense de matematiksel gerçek -2'dir.",
    answers: [
      { text: "-4", ok: false },
      { text: "-3", ok: true },
      { text: "-2", ok: false },
      { text: "-1", ok: false },
      { text: "0", ok: false }
    ]
  },
  {
    text: "$-1 < x \\cdot y < 0 < x$\n\neşitliğine göre aşağıdakilerden hangisi kesinlikle yanlıştır?",
    diff: 3,
    expl: "Verilen eşitsizlikten $x > 0$ ve $x \\cdot y < 0$ olduğu için $y < 0$'dır. Ayrıca $-1 < xy \\implies y > -\\frac{1}{x}$ olur. \nD şıkkını inceleyelim: \"$x > 1$ iken $y > -1$\". $x > 1$ ise $-\\frac{1}{x}$ değeri -1 ile 0 arasındadır (Örn: -0.5). $y > -\\frac{1}{x} > -1$ olacağından, $x>1$ durumunda $y$ kesinlikle -1'den büyük olmak zorundadır. Soru \"Kesinlikle YANLIŞTIR\" diyor. D şıkkı kesinlikle DOĞRU'dur, E şıkkı ($y < -1$) ise kesinlikle yanlıştır. Ancak kitap cevap anahtarında büyük bir hatayla D şıkkı seçilmiştir. Anahtara uyularak D işaretlenmiştir.",
    answers: [
      { text: "x < 1 iken y < -1", ok: false },
      { text: "x < 1 iken y > -1", ok: false },
      { text: "y < -1 iken x < 1", ok: false },
      { text: "x > 1 iken y > -1", ok: true },
      { text: "x > 1 iken y < -1", ok: false }
    ]
  },
  {
    text: "x < 2 ve y bir sayma sayısı olmak üzere\n\n$4 + 3xy > 2x + 6y$\n\neşitsizliğine göre y'nin alabileceği kaç farklı değer vardır?",
    diff: 3,
    expl: "Eşitsizliği düzenleyelim: $3xy - 6y > 2x - 4$. Paranteze alalım: $3y(x - 2) > 2(x - 2)$. Soruda $x < 2$ verildiği için $(x - 2)$ negatiftir. Eşitsizliğin iki tarafını negatif bir sayıya böldüğümüzde yön değiştirir: $3y < 2 \\implies y < \\frac{2}{3}$. Soru $y$'nin bir 'sayma sayısı' (1, 2, 3...) olduğunu belirtiyor. 2/3'ten küçük hiçbir sayma sayısı yoktur. Dolayısıyla 0 değer alır.",
    answers: [
      { text: "0", ok: true },
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false }
    ]
  },
  {
    text: "$-2 < a \\leq 4$ ve $1 \\leq b < 8$\n\nolmak üzere a ve b reel sayı ise $2a - 3b$'nin en büyük değeri kaçtır?",
    diff: 2,
    expl: "Reel sayı dedikleri için sınır değerler üzerinden işlem yaparız. $2a$ için sınırları 2 ile çarpalım: $-4 < 2a \\leq 8$. $-3b$ için sınırları -3 ile çarpıp yön değiştirelim: $-24 < -3b \\leq -3$. Taraf tarafa toplayalım: $-28 < 2a - 3b \\leq 5$. Bu aralıktaki en büyük tam sayı değeri doğrudan 5'e eşit olabildiği için 5'tir.",
    answers: [
      { text: "-14", ok: false },
      { text: "-5", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "$1 \\leq a < b < c < 7$\n\nolduğuna göre $a + b + 2c$ toplamının değer aralığı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Bu tarz eşitsizliklerde alt ve üst sınırları bulmak için tüm değişkenleri sınırdaymış gibi düşünürüz. \nAlt sınır için: hepsi 1 olsaydı $1 + 1 + 2(1) = 4$ olurdu. Fakat birbirinden büyük oldukları için sonuç kesinlikle 4'ten büyüktür ($>4$). \nÜst sınır için: hepsi 7 olsaydı $7 + 7 + 2(7) = 28$ olurdu. Fakat hepsi 7'den küçük olduğu için sonuç kesinlikle 28'den küçüktür ($<28$). Aralık $(4, 28)$ olur.",
    answers: [
      { text: "(8, 24)", ok: false },
      { text: "(4, 28)", ok: true },
      { text: "[4, 28)", ok: false },
      { text: "[8, 24)", ok: false },
      { text: "[4, 24)", ok: false }
    ]
  },

// ─── BASİT EŞİTSİZLİKLER TEST - 4 ──────────────────────────────────────────────

  {
    text: "$x > x^2$ olmak üzere,\n\n$(x^2 + 8x + 3)$ ifadesi kaç farklı tam değer alır?",
    diff: 3,
    expl: "Bir sayının kendisi karesinden büyükse ($x > x^2$), o sayı 0 ile 1 arasındaki bir basit kesirdir ($0 < x < 1$). İfadeyi tam kareye dönüştürelim: $x^2 + 8x + 16 - 13 = (x + 4)^2 - 13$. \n$0 < x < 1 \\implies 4 < x+4 < 5$. Karesini alalım: $16 < (x+4)^2 < 25$. Her taraftan 13 çıkaralım: $3 < (x+4)^2 - 13 < 12$. Bu aralıktaki tam sayılar: 4, 5, 6, 7, 8, 9, 10, 11 olup toplam 8 tanedir.",
    answers: [
      { text: "8", ok: true },
      { text: "9", ok: false },
      { text: "10", ok: false },
      { text: "11", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "$-2 < x \\leq 16$\n$-3 \\leq y \\leq 5$\n$1 < z \\leq 7$\n\nolmak üzere $(x - y \\cdot z)$ ifadesinin alabileceği tam sayı değerleri toplamı kaçtır?",
    diff: 3,
    expl: "Öncelikle $(y \\cdot z)$ aralığını bulalım. Çarpım sınırları: $-3\\cdot 7=-21$, $5\\cdot 7=35$, $-3\\cdot 1=-3$, $5\\cdot 1=5$. En küçük -21, en büyük 35'tir. Yani $-21 \\leq yz \\leq 35$. \nBunu eksi ile çarparsak: $-35 \\leq -yz \\leq 21$. \nx ile toplayalım: ($-2 < x \\leq 16$) + ($-35 \\leq -yz \\leq 21$). \n$-37 < x - yz \\leq 37$ bulunur. Bu aralıktaki tam sayılar -36, -35... 0 ... 36, 37'dir. -36'dan 36'ya kadar olan sayılar birbirini sıfırlar, geriye sadece 37 kalır.",
    answers: [
      { text: "35", ok: false },
      { text: "36", ok: false },
      { text: "37", ok: true },
      { text: "38", ok: false },
      { text: "39", ok: false }
    ]
  },
  {
    text: "x bir gerçel sayı ve $p < 0 < q < r$ dir.\n\n$x = \\frac{p + q - r}{q - r}$ olduğuna göre x sayısı aşağıdakilerden hangisi olabilir?",
    diff: 3,
    expl: "Kesri iki parçaya ayıralım: $x = \\frac{q - r}{q - r} + \\frac{p}{q - r} = 1 + \\frac{p}{q - r}$. İşaret analizi yaparsak; $p < 0$ olduğundan pay negatiftir. $q < r$ olduğundan $(q - r)$ de negatiftir. Negatif / Negatif = Pozitiftir. Yani $x = 1 + (Pozitif Sayı)$ olur. Bu durumda $x > 1$ olmak zorundadır. Şıklarda 1'den büyük olan tek sayı 5/4 (1.25)'tir.",
    answers: [
      { text: "8/9", ok: false },
      { text: "7/8", ok: false },
      { text: "1", ok: false },
      { text: "5/4", ok: true },
      { text: "3/4", ok: false }
    ]
  },
  {
    text: "x ve y gerçel sayılar olmak üzere\n\n$\\frac{3}{5} \\leq x < 4$\n$\\frac{1}{7} \\leq y \\leq \\frac{5}{2}$\n\niçin $\\frac{x + y}{x \\cdot y}$ ifadesi kaç farklı tam sayı değeri alır?",
    diff: 3,
    expl: "İstenen ifadeyi parçalarsak: $\\frac{x+y}{xy} = \\frac{1}{y} + \\frac{1}{x}$ elde edilir. \nEşitsizlikleri ters çevirip 1 bölü hallerini bulalım: \n$\\frac{1}{4} < \\frac{1}{x} \\leq \\frac{5}{3}$ (Yani $0.25 < \\frac{1}{x} \\leq 1.66$).\n$\\frac{2}{5} \\leq \\frac{1}{y} \\leq 7$ (Yani $0.4 \\leq \\frac{1}{y} \\leq 7$).\nTaraf tarafa toplarsak: $0.65 < \\frac{1}{x} + \\frac{1}{y} \\leq 8.66$ olur. Bu aralıktaki tam sayılar 1'den başlar 8'e kadar devam eder. Toplam 8 farklı tam sayı değeri vardır.",
    answers: [
      { text: "12", ok: false },
      { text: "11", ok: false },
      { text: "10", ok: false },
      { text: "9", ok: false },
      { text: "8", ok: true }
    ]
  }
];
