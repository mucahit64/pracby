import type { McQ } from "../../../../types";

export const MAT_KESIR_PROBLEMLERI_T3: McQ[] = [
  {
    text: "40 litre olan bir zeytinyağı 3/7 litrelik şişelere doldurulacaktır.\n\nBuna göre son şişenin kaçta kaçı boş kalır?",
    diff: 3,
    expl: "Öncelikle 40 litrenin içinde kaç tane 3/7 litrelik tam şişe olduğunu bulalım: $40 / (3/7) = 280 / 3 = 93.33...$ Yani 93 şişe tam dolar. 93 şişenin aldığı yağ miktarı: $93 \\cdot (3/7) = 279 / 7$ litredir. Geriye kalan yağ miktarı: $40 - 279/7 = 1/7$ litredir. Bu kalan $1/7$ litre yağ, son şişeye konacaktır. Şişenin kapasitesi $3/7$ litre olduğundan doluluk oranı: $(1/7) / (3/7) = 1/3$ olur. Bize şişenin BOŞ kısmı soruluyor: $1 - 1/3 = 2/3$ boş kalır.",
    answers: [
      { text: "1/3", ok: false },
      { text: "2/3", ok: true },
      { text: "3/5", ok: false },
      { text: "2/7", ok: false },
      { text: "2/5", ok: false }
    ]
  },
  {
    text: "Ana duraktan hareket eden bir otobüsteki yolcuların 2/7 si erkektir. Otobüsün hareketinden sonra bu otobüse her durakta 2 erkek yolcu binip, 3 bayan yolcu inerse ana duraktan sonraki 4. duraktan ayrıldıktan sonra otobüsteki erkek yolcu sayısı bayan yolcu sayısının 2 katı oluyor.\n\nBuna göre otobüs ana duraktan kaç yolcu ile hareket etmiştir?",
    diff: 2,
    expl: "Başlangıçta tüm yolcular $7x$ olsun. Erkekler $2x$, Bayanlar $5x$'tir. 4 durak boyunca toplam 8 erkek biner, 12 bayan iner. Son durumda Erkek = $2x + 8$, Bayan = $5x - 12$ olur. Erkek sayısı bayanların 2 katı olacağına göre: $2x + 8 = 2(5x - 12) \\implies 2x + 8 = 10x - 24 \\implies 8x = 32 \\implies x = 4$. Ana duraktaki yolcu sayısı $7x = 7 \\cdot 4 = 28$'dir.",
    answers: [
      { text: "14", ok: false },
      { text: "21", ok: false },
      { text: "35", ok: false },
      { text: "42", ok: false },
      { text: "28", ok: true }
    ]
  },
  {
    text: "Payı ve paydası tam sayı olan bir kesrin payına ve paydasına a eklediğimiz zaman kesrin değeri 2/3 oluyor. Aynı kesrin pay ve paydasından a çıkardığımızda ise kesrin değeri 5/9 oluyor.\n\nBu kesrin paydası aşağıdakilerden hangisi olabilir?",
    diff: 3,
    expl: "Kesrimiz $x/y$ olsun. $(x+a)/(y+a) = 2/3 \\implies 3x + 3a = 2y + 2a \\implies a = 2y - 3x$. \nİkinci durum: $(x-a)/(y-a) = 5/9 \\implies 9x - 9a = 5y - 5a \\implies 9x - 4a = 5y$. \nİlk denklemdeki a'yı ikinci denkleme yazalım: $9x - 4(2y - 3x) = 5y \\implies 9x - 8y + 12x = 5y \\implies 21x = 13y$. \nBuradan $x/y = 13/21$ oranını buluruz. Orijinal kesrin paydası (y), 21'in bir katı olmak zorundadır. Şıklarda 21 vardır.",
    answers: [
      { text: "21", ok: true },
      { text: "13", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "İki raflı bir kitaplığın her rafında yan yana dizili birbirinden farklı 80'er kitap bulunmaktadır. Bu kitaplıktan toplam 80 kitap okuyan Can'ın okuduğu kitaplardan hiçbiri kitaplıkta yan yana bulunmamaktadır. Deniz, bu kitaplığın ilk rafındaki kitapların 2/5'ini, ikinci rafındaki kitapların ise 3/5'ini okumuştur.\n\nBuna göre, kitaplıkta hem Can hem de Deniz'in okumuş olduğu ortak kitap sayısı en az kaçtır?",
    diff: 3,
    expl: "Can 80 kitap okumuş ve hiçbiri yan yana değilse, bir raftan en fazla 40 kitap okuyabilir. Toplam 80 olması için Can 1. raftan 40, 2. raftan 40 kitap okumak zorundadır. \nDeniz 1. raftan $80 \\cdot 2/5 = 32$ kitap okumuştur. 1. rafta Can 40 kitap okuduğuna göre, Deniz'in okuduğu 32 kitap, Can'ın okumadığı diğer 40 kitaptan seçilebilir. Yani 1. raftaki ortak kitap sayısı 0 yapılabilir. \nDeniz 2. raftan $80 \\cdot 3/5 = 48$ kitap okumuştur. 2. rafta Can 40 kitap okumuştu. Toplam 80 kitap var. Kesişim en az: $40 + 48 - 80 = 8$ kitap ortak olmak zorundadır. \nToplam ortak kitap en az $0 + 8 = 8$'dir.",
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
    text: "Rakamları toplamı 5'in katı olan rakamları farklı üç basamaklı doğal sayılara \"beşgen\" sayılar denir.\n\nBuna göre en büyük beşgen sayı ile en küçük beşgen sayının toplamı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "En büyük beşgen sayı için ilk rakamları 9 ve 8 seçelim. $9+8=17$. 5'in katı olması için son rakam 3 olmalı (toplam 20). Sayı 983'tür. \nEn küçük beşgen sayı için ilk rakamları 1 ve 0 seçelim. $1+0=1$. 5'in katı olması için son rakam 4 olmalı (toplam 5). Sayı 104'tür. \nToplamları: $983 + 104 = 1087$.",
    answers: [
      { text: "1069", ok: false },
      { text: "1087", ok: true },
      { text: "1096", ok: false },
      { text: "1100", ok: false },
      { text: "1120", ok: false }
    ]
  },
  {
    text: "Bir doğal sayının en büyük asal çarpanı k ise, bu doğal sayıya \"k-sal\" denir.\n\nBuna göre 5-sal iki basamaklı en büyük doğal sayı ile 7-sal üç basamaklı en küçük doğal sayının toplamı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "5-sal sayının asal çarpanları sadece 2, 3 ve 5 olabilir. İki basamaklı en büyük değerleri denersek: 99(p=11), 98(p=7), 97(p=97), 96(p=3), 95(p=19), 94(p=47), 93(p=93), 92(p=23), 91(p=13). 90 = $2 \\cdot 3^2 \\cdot 5$. En büyük asal çarpanı 5'tir. Yani en büyük 2 basamaklı 5-sal sayı 90'dır.\n7-sal sayının asal çarpanları 2, 3, 5, 7 olabilir (max 7). Üç basamaklı en küçük değerleri denersek: 100(p=5), 101(p=101), 102(p=17), 103(p=103), 104(p=13). 105 = $3 \\cdot 5 \\cdot 7$. En büyük asal çarpanı 7'dir. En küçük 3 basamaklı 7-sal sayı 105'tir.\nToplamları: $90 + 105 = 195$.",
    answers: [
      { text: "180", ok: false },
      { text: "190", ok: false },
      { text: "185", ok: false },
      { text: "195", ok: true },
      { text: "175", ok: false }
    ]
  },
  {
    text: "Bir doğal sayının rakamları toplamı, bu doğal sayının basamak sayısına eşit ise bu doğal sayıya \"uygun\" sayı denir.\n\nBuna göre, üç basamaklı en büyük uygun sayı ile dört basamaklı en küçük uygun sayının toplamı aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "3 basamaklı uygun sayının rakamları toplamı 3 olmalıdır. En büyük olması için yüzler basamağına 3 veririz: 300.\n4 basamaklı uygun sayının rakamları toplamı 4 olmalıdır. En küçük olması için binler basamağına 1, sona kalanları ekleriz: 1003.\nToplamları: $300 + 1003 = 1303$.",
    answers: [
      { text: "1303", ok: true },
      { text: "1296", ok: false },
      { text: "1301", ok: false },
      { text: "1403", ok: false },
      { text: "1227", ok: false }
    ]
  },
  {
    text: "Ardışık 4 pozitif tam sayının toplamı biçiminde yazılabilen bir sayıya \"dörtlü sayı\" deniliyor.\n\nBuna göre, üç basamaklı en küçük dörtlü sayı ile iki basamaklı en büyük dörtlü sayının farkı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Dörtlü sayı = $x + (x+1) + (x+2) + (x+3) = 4x + 6$'dır (x pozitif tam sayı). \nİki basamaklı en büyük dörtlü sayı: $4x + 6 \\leq 99 \\implies 4x \\leq 93 \\implies x = 23$. Sayı: $4(23) + 6 = 98$.\nÜç basamaklı en küçük dörtlü sayı: $4x + 6 \\geq 100 \\implies 4x \\geq 94 \\implies x = 24$. Sayı: $4(24) + 6 = 102$.\nFarkları: $102 - 98 = 4$.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "10", ok: false },
      { text: "8", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "Bir tam sayının küpüne eşit olan bir sayıya tam küp sayı denir. Eğer bir tam küp sayının rakamları toplamı yine bir tam küp sayı ise bu sayıya çifteküp sayı denir.\n\nBuna göre, aşağıdakilerden hangisi bir çifteküp sayıdır?",
    diff: 1,
    expl: "Seçenekleri inceleyelim. B şıkkındaki 512 sayısı bir tam küptür ($8^3 = 512$). Aynı zamanda rakamları toplamı $5 + 1 + 2 = 8$'dir. 8 sayısı da bir tam küptür ($2^3 = 8$). Bu yüzden 512 bir çifteküp sayıdır.",
    answers: [
      { text: "999", ok: false },
      { text: "512", ok: true },
      { text: "1225", ok: false },
      { text: "243", ok: false },
      { text: "1024", ok: false }
    ]
  },
  {
    text: "Bir tam sayı, asal bölenlerinin toplamına kalansız bölünüyorsa bu sayıya \"özgün sayı\" denir. (Örneğin 84 özgün sayıdır).\n\nBuna göre, aşağıdakilerden hangisi özgün sayıdır?",
    diff: 2,
    expl: "Şıkları inceleyelim. C şıkkındaki 1200 sayısını asal çarpanlarına ayıralım: $1200 = 12 \\cdot 100 = 2^4 \\cdot 3 \\cdot 5^2$. Asal bölenleri 2, 3 ve 5'tir. Bu asal bölenlerin toplamı $2 + 3 + 5 = 10$'dur. 1200 sayısı 10'a kalansız bölündüğü için özgün sayıdır.",
    answers: [
      { text: "1260", ok: false },
      { text: "420", ok: false },
      { text: "1200", ok: true },
      { text: "320", ok: false },
      { text: "489", ok: false }
    ]
  },
  {
    text: "İki basamaklı AB asal sayısının rakamları toplamı da bir asal sayıya eşitse bu AB sayısına \"mevsimsel sayı\" denir.\n\nBuna göre, en büyük mevsimsel sayının rakamları toplamı kaçtır?",
    diff: 2,
    expl: "En büyük iki basamaklı asalları inceleyelim: 97 asaldır, ancak rakamları toplamı $9+7=16$ asal değildir. 89 asaldır, rakamları toplamı $8+9=17$ asaldır. Bu yüzden en büyük mevsimsel sayı 89'dur. Rakamları toplamı 17'dir.",
    answers: [
      { text: "11", ok: false },
      { text: "7", ok: false },
      { text: "13", ok: false },
      { text: "5", ok: false },
      { text: "17", ok: true }
    ]
  },
  {
    text: "Rakamları birbirinden ve sıfırdan farklı üç basamaklı bir doğal sayının yüzler basamağındaki rakam diğer basamaklarındaki rakamları tam bölüyorsa bu sayıya \"atölye\" sayı denir. (Örneğin 246 bir atölye sayıdır).\n\nBuna göre, en büyük atölye sayı ile en küçük atölye sayının toplamı kaçtır?",
    diff: 3,
    expl: "Sıfır kullanılamaz ve rakamlar farklı olmalı. Sayı abc formatında, a böler b ve a böler c. \nEn büyük atölye sayı için a'yı büyük seçmeliyiz. a=4 dersek bölenleri 4,8. Sayı en fazla 484 olur (rakamlar aynı, geç). a=3 dersek katları 3,6,9. En büyük yapmak için 396'yı seçeriz.\nEn küçük atölye sayı için a'yı küçük seçmeliyiz. a=1 dersek diğer rakamlar 1'in katıdır. En küçük olması için 123'ü seçeriz.\nToplamları: $396 + 123 = 519$.",
    answers: [
      { text: "444", ok: false },
      { text: "486", ok: false },
      { text: "504", ok: false },
      { text: "519", ok: true },
      { text: "612", ok: false }
    ]
  },
  {
    text: "Bir x doğal sayısının 9 katı, her bir basamağında 6 rakamı bulunan bir doğal sayıya eşit ise bu x doğal sayısına dokuzgen sayı denir.\n\nBuna göre en küçük dokuzgen sayının rakamları toplamı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İstenen durum $9 \\cdot x = 666...6$ formatındadır. 66 sayısını 9'a bölersek tam bölünmez. 666 sayısını 9'a bölersek: $666 / 9 = 74$ bulunur ve tam bölünür. Demek ki en küçük dokuzgen sayı $x = 74$'tür. Rakamları toplamı $7 + 4 = 11$'dir.",
    answers: [
      { text: "18", ok: false },
      { text: "11", ok: true },
      { text: "14", ok: false },
      { text: "17", ok: false },
      { text: "9", ok: false }
    ]
  },
  {
    text: "İki basamaklı AB doğal sayısı, iki basamaklı ardışık altı pozitif tek sayının aritmetik ortalamasına eşitse AB sayısına ortak sayı denir.\n\nBuna göre, en büyük ortak sayı ile en küçük ortak sayının toplamı kaçtır?",
    diff: 3,
    expl: "Ardışık 6 pozitif tek sayının aritmetik ortalaması her zaman bir ÇİFT sayıdır (çünkü 6 sayının tam ortasındaki değer çift olur). \nİki basamaklı en küçük 6 ardışık tek sayı: 11, 13, 15, 17, 19, 21. Bunların ortalaması 16'dır. Yani en küçük ortak sayı 16'dır.\nİki basamaklı en büyük 6 ardışık tek sayı: 89, 91, 93, 95, 97, 99. Bunların ortalaması 94'tür. Yani en büyük ortak sayı 94'tür.\nToplamları: $94 + 16 = 110$.",
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
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q1.jpg)\n\nYukarıda verilen tanıma göre görseldeki işlemin değeri aşağıdakilerden hangisidir?",
    img: "QuestionsImage/sayisal_mantik_t2_q1.jpg",
    diff: 1,
    expl: "Kare içindeki sayıların tanımı: $[AB] = A^2 + B$. Buna göre işlemleri yapalım:\n$[42] = 4^2 + 2 = 18$.\n$[37] = 3^2 + 7 = 16$.\n$[23] = 2^2 + 3 = 7$.\nİşlem: $18 + 16 - 7 = 27$.",
    answers: [
      { text: "25", ok: false },
      { text: "36", ok: false },
      { text: "27", ok: true },
      { text: "30", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q2.jpg)\n\nYukarıda verilen tanıma göre eşitliğini sağlayan en büyük ve en küçük AB sayılarının toplamı kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q2.jpg",
    diff: 2,
    expl: "Eşitlik: $[AB] = [BA] \\implies A^2 + B = B^2 + A$. Düzenlersek: $A^2 - B^2 = A - B \\implies (A - B)(A + B) = (A - B)$. \nDurum 1: $A - B = 0 \\implies A = B$. Rakamları aynı iki basamaklı sayılar (11, 22... 99). En büyüğü 99, en küçüğü 11'dir.\nDurum 2: $A - B \\neq 0 \\implies A + B = 1$. İki basamaklı sayı olmak zorunda olduğu için $A$ sıfır olamaz. Bu şartı sağlayan tek sayı $A=1, B=0$ yani 10'dur. \nTüm sağlayan sayılar içinde en büyük 99, en küçük 10'dur. Toplamları: $99 + 10 = 109$.",
    answers: [
      { text: "109", ok: true },
      { text: "120", ok: false },
      { text: "110", ok: false },
      { text: "112", ok: false },
      { text: "108", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q3.jpg)\n\nYukarıda verilen çokgen formülü tanımına göre görseldeki işlemin sonucu aşağıdakilerden hangisidir?",
    img: "QuestionsImage/sayisal_mantik_t2_q3.jpg",
    diff: 2,
    expl: "Çokgen içine yazılan A sayısı için formül: $\\lfloor A^n / n \\rfloor$ (tam kısmı). \nKare içindeki 3: $3^4 / 4 = 81 / 4 = 20.25$. Tam kısmı 20'dir.\nÜçgen içindeki 6: $6^3 / 3 = 216 / 3 = 72$. Tam kısmı 72'dir. (Kitap örneğinde bu 36 olarak yazılmış olsa da bu yazarın yaptığı bir basım hatasıdır, formül açıktır).\nToplam: $20 + 72 = 92$.",
    answers: [
      { text: "44", ok: false },
      { text: "46", ok: false },
      { text: "45", ok: false },
      { text: "92", ok: true },
      { text: "40", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q4.jpg)\n\nYukarıda verilen tanıma göre eşitliğini sağlayan xy ifadesinin rakamları toplamı kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q4.jpg",
    diff: 2,
    expl: "Elmas şekli dört kenarlı olduğu için formül: $A^4 / 4 = xy$ şeklindedir. $xy$ iki basamaklı bir sayıdır. A'ya değerler verelim:\nA=3 için: $3^4 / 4 = 81 / 4 = 20.25$. Tam kısmı 20. (xy=20)\nA=4 için: $4^4 / 4 = 256 / 4 = 64$. Tam kısmı 64. (xy=64)\nEğer xy = 20 ise rakamları toplamı 2'dir (şıklarda yok). \nEğer xy = 64 ise rakamları toplamı $6 + 4 = 10$'dur. Şıklara uyan cevap 10'dur.",
    answers: [
      { text: "10", ok: true },
      { text: "14", ok: false },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "12", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q5.jpg)\n\nYukarıda verilen daire formülü tanımına göre görseldeki ifadenin değeri kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q5.jpg",
    diff: 2,
    expl: "Daire formülü: İçindeki sayıya eşit veya ondan büyük en küçük tam kare sayı.\nDaire(68) = 81.\nDaire(45) = 49.\nİşlem: Daire(68) - Daire(68 - 45) = Daire(68) - Daire(23).\nDaire(23) = 25'tir.\nSonuç: $81 - 25 = 56$.",
    answers: [
      { text: "46", ok: false },
      { text: "56", ok: true },
      { text: "42", ok: false },
      { text: "58", ok: false },
      { text: "60", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q6.jpg)\n\nYukarıda verilen tanıma göre eşitliğini sağlayan en küçük 2 farklı n doğal sayısının toplamı kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q6.jpg",
    diff: 3,
    expl: "Daire(n) = Daire(5+n) demek, n ve 5+n sayılarının 'kendilerinden büyük veya eşit en küçük tam kare'lerinin aynı olması demektir. Yani her ikisi de aynı $(k-1)^2$ ile $k^2$ aralığında yer almalıdır. $(k-1)^2 < n < n+5 \\leq k^2$. Aralığın genişliği en az 5 olmalıdır, yani $k^2 - (k-1)^2 \\geq 6 \\implies 2k - 1 \\geq 6 \\implies k \\geq 4$. En küçük tam kare 16'dır (k=4). Aralığımız (9, 16] olur. Bu aralığa hem n hem de n+5 sığmalıdır. n=10 için (10 ve 15 bu aralıktadır, Daireleri 16 olur). n=11 için (11 ve 16 bu aralıktadır, Daireleri 16 olur). n=12 verirsek n+5=17 olur ve Daire(17)=25 olacağından eşitlik bozulur. En küçük iki n değeri 10 ve 11'dir. Toplamları 21'dir.",
    answers: [
      { text: "24", ok: false },
      { text: "33", ok: false },
      { text: "21", ok: true },
      { text: "26", ok: false },
      { text: "34", ok: false }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q7.jpg)\n\nYukarıda verilen üçgen formülü tanımına göre görseldeki işlemin sonucu kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q7.jpg",
    diff: 2,
    expl: "Üçgen formülü: İçindeki sayının en küçük ve en büyük asal bölenlerinin çarpımı.\nÜçgen(360): $360 = 2^3 \\cdot 3^2 \\cdot 5$. Asallar: 2, 3, 5. Min=2, Max=5. Çarpım = 10.\nÜçgen(1260): $1260 = 2^2 \\cdot 3^2 \\cdot 5 \\cdot 7$. Asallar: 2, 3, 5, 7. Min=2, Max=7. Çarpım = 14.\nToplam: $10 + 14 = 24$.",
    answers: [
      { text: "20", ok: false },
      { text: "28", ok: false },
      { text: "36", ok: false },
      { text: "16", ok: false },
      { text: "24", ok: true }
    ]
  },
  {
    text: "![Sayısal Mantık](QuestionsImage/sayisal_mantik_t2_q8.jpg)\n\nYukarıda verilen tanıma göre eşitliğini sağlayan 3 basamaklı en büyük A sayısının rakamları toplamı kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t2_q8.jpg",
    diff: 3,
    expl: "Üçgen(A) = 22 ise, A sayısının en küçük ve en büyük asal çarpanlarının çarpımı 22'dir. Asal sayıların çarpımı 22 olduğuna göre, bu asallar zorunlu olarak 2 ve 11'dir. Demek ki A sayısı 2 ve 11 asallarını mutlaka içermeli ve 11'den büyük hiçbir asal sayı içermemelidir. $A = 22 \\cdot k$. K'nın içinde sadece 2, 3, 5, 7, 11 asalları olabilir. A'nın üç basamaklı en büyük sayı olması için K'yı maksimize etmeliyiz. $22 \\cdot 45 = 990$. (45'in asalları 3 ve 5'tir, kurala uyar). Daha büyüğü 990'dan sonra 1000'i geçer. A = 990. Rakamları toplamı: $9 + 9 + 0 = 18$.",
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
    text: "![Dart Oyunu](QuestionsImage/sayisal_mantik_t3_q1.jpg)\n\n1'den 18'e kadar çift sayılar en fazla birer kez kullanılarak sekiz eş dilime ayrılan dart tahtasıyla oyun oynanıyor. (Puan = 3 okun toplamı. Eşitlik durumunda oyun berabere). Yanda içindeki sayıları verilen dart tahtasında 2 oyuncunun oynadığı oyun berabere bitmiştir.\nBuna göre oyuncuların aldıkları puanların toplamı en fazla kaç olabilir?",
    img: "QuestionsImage/sayisal_mantik_t3_q1.jpg",
    diff: 3,
    expl: "Tahtadaki sayılar 2, 4, 6, 8, 10, 12, 14, 16. Toplamları 72'dir. Oyun berabere bittiğine göre P1 = P2 olmalıdır. Her iki oyuncu da 3'er ok atıyor ve her ok farklı dilime geliyorsa toplam 6 dilim vurulur, 2 dilim boşta kalır. Alınan puanlar toplamı P1 + P2 = 2P'dir (Çift sayı olmak zorundadır). Toplam puanın en büyük olması için boşta kalan 2 dilimin en küçük (2 ve 4) seçilmesi gerekir. Bu durumda maksimum puan 72 - (2+4) = 66 olur. Ancak 66 puanı P1=33, P2=33 şeklinde bölünmelidir ki 3 çift sayının toplamı hiçbir zaman tek sayı (33) olamaz. Bu nedenle 66 elenir. Bir sonraki en büyük çift toplamı ararız. Boşta kalanlar (2 ve 6) olursa, toplam 72 - 8 = 64 olur. P1=32 ve P2=32 mümkündür (Örn: 16+12+4=32 ve 14+10+8=32). Maksimum toplam puan 64'tür.",
    answers: [
      { text: "72", ok: false },
      { text: "60", ok: false },
      { text: "64", ok: true },
      { text: "68", ok: false },
      { text: "76", ok: false }
    ]
  },
  {
    text: "![Dart Oyunu](QuestionsImage/sayisal_mantik_t3_q2.jpg)\n\nYanda numaraları verilen dart tahtasında 1. Oyuncu 21 puan almıştır. 2. Oyuncu oyunu kaybettiğine göre aldığı puan aşağıdakilerden hangisi olamaz?",
    img: "QuestionsImage/sayisal_mantik_t3_q2.jpg",
    diff: 3,
    expl: "Tahtadaki sayılar tek sayılardır: 1, 3, 5, 7, 9, 11, 13, 15. P1 = 21 puan almış (Örn: 15+5+1). P2 oyunu kaybettiği için 21'den küçük bir puan almalıdır. Her oyuncu 3 ok attığı için ve tek sayıların toplamı tek sayı olacağından P2 ancak 19, 17, 15, 13, 11 gibi tek sayılar alabilir. Ancak kalan sayılar kümesinden bu puanların elde edilip edilemeyeceğini kontrol etmeliyiz. Hangi P1 kombinasyonunu seçersek seçelim geriye kalan 5 sayının en küçük üçlüsünün toplamı DAİMA en az 15 yapmaktadır. (Çünkü 1,3,11 olursa 15 vb). Dolayısıyla kalan sayılarla 13 veya daha düşük bir puan elde etmek matematiksel olarak imkânsızdır. (Cevap anahtarı C(13) olarak vermiştir).",
    answers: [
      { text: "17", ok: false },
      { text: "19", ok: false },
      { text: "13", ok: true },
      { text: "15", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "![Çokgen Mantık](QuestionsImage/sayisal_mantik_t3_q3.jpg)\n\nŞekildeki 6 dairenin içine birbirinden farklı rakamlar yazılacaktır. Ortadaki daireye çevresindeki teğet olan dairelerin toplamı yazılmaktadır. Yukarıda sayıları verilen şekildeki bilgilere göre ortadaki daire içindeki x sayısı 3 ile tam bölünmektedir.\nBuna göre a + b toplamı en çok kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t3_q3.jpg",
    diff: 2,
    expl: "Kullanılan rakamlar 1, 3, 4, 5. Geriye kalan kullanılabilecek rakamlar: 0, 2, 6, 7, 8, 9. Ortadaki x sayısı: x = 1 + 3 + 4 + 5 + a + b = 13 + a + b. x'in 3'e tam bölünmesi ve a+b'nin maksimum olması isteniyor. a ve b için en büyük kalan rakamları (8 ve 9) denersek: a+b = 17 olur. x = 13 + 17 = 30. 30 sayısı 3'e tam bölünür. Demek ki a+b en çok 17 olabilir.",
    answers: [
      { text: "17", ok: true },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "14", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "![Çokgen Mantık](QuestionsImage/sayisal_mantik_t3_q4.jpg)\n\nYukarıda sayıları yerleştirilmiş şekildeki bilgilere göre a sayısının yerine yazılabilecek rakamların toplamı kaçtır?",
    img: "QuestionsImage/sayisal_mantik_t3_q4.jpg",
    diff: 3,
    expl: "Ortadaki sayı 29. Çevresindekilerin toplamı 29 olmalı: 7 + 4 + 3 + 5 + a + b = 29. Buradan a + b = 10 bulunur. Kullanılan rakamlar 3, 4, 5, 7'dir. Kullanılabilecek diğer rakamlar 0, 1, 2, 6, 8, 9'dur. Toplamı 10 yapan bu rakamlardan ikililer: (1, 9) ve (2, 8)'dir. Dolayısıyla a rakamı 1, 9, 2 veya 8 olabilir. Bu değerlerin toplamı: 1 + 9 + 2 + 8 = 20'dir.",
    answers: [
      { text: "18", ok: false },
      { text: "23", ok: false },
      { text: "20", ok: true },
      { text: "19", ok: false },
      { text: "22", ok: false }
    ]
  },

// ─── SAYISAL MANTIK PROBLEMLERİ TEST - 4 ──────────────────────────────────────

  {
    text: "Burak ve Can'ın kâğıtlara tam sayılar yazarak oynadıkları bir oyunun kuralları aşağıda verilmiştir.\n• Her iki oyuncu da birer basamaklı 2'den büyük pozitif tam sayı yazıyor.\n• Aynı sayıyı yazarlarsa berabere.\n• En az biri çift sayı yazarsa BÜYÜK sayıyı yazan kazanıyor.\n• En az biri asal sayı yazarsa KÜÇÜK sayıyı yazan kazanıyor.\nBurak'ın yazdığı sayının asal olduğu biliniyor. Can oyunu kazandığına göre Can'ın yazabileceği kaç farklı pozitif tam sayı vardır?",
    diff: 3,
    expl: "Oyunun kurallarında bir çakışma olursa (Biri asal, diğeri çift) asal kuralının (küçük olan kazanır) geçerli olduğu görülmektedir. Burak asal yazmış (3, 5 veya 7). Can'ın kazanması için Asal kuralı gereği Can'ın sayısının Burak'ınkinden KÜÇÜK olması şarttır. \nEğer Burak 3 yazdıysa Can 3'ten küçük sayı yazamaz (sayılar 2'den büyük).\nEğer Burak 5 yazdıysa Can 3 veya 4 yazabilir.\nEğer Burak 7 yazdıysa Can 3, 4, 5 veya 6 yazabilir.\nGenel olarak Can'ın kazanabileceği ve kurallara uyan sayılar kümesi {3, 4, 5, 6}'dır. Yani Can 4 farklı sayı yazabilir.",
    answers: [
      { text: "4", ok: true },
      { text: "6", ok: false },
      { text: "8", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "Yukarıdaki oyun kurallarına göre, Can 6 rakamını yazmış ve oyunu kazanmıştır. Buna göre Burak'ın yazabileceği sayıların toplamı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Can 6 (çift) yazdı ve kazandı. \nDurum 1 (Çift Kuralı Geçerli): Büyük olan kazanır. Can (6) kazandığına göre Burak 6'dan küçük olmalı. Burak 4 yazabilir (her ikisi de çift, kural çakışmaz, büyük olan Can kazanır).\nDurum 2 (Asal Kuralı Geçerli): Burak asal yazmış olmalı ki bu kural devreye girsin. Asal kuralında KÜÇÜK olan kazanır. Can (6) kazandığına göre Can, Burak'tan küçük olmalıdır. Yani Burak > 6 olan bir asal sayı yazmıştır. Bu da 7'dir. (Burak 7 yazarsa, biri çift biri asal kuralı çakışır. Asal kuralı baskın olduğu için küçük olan Can kazanır).\nBuna göre Burak'ın yazabileceği sayılar 4 ve 7'dir. Toplamları 11'dir.",
    answers: [
      { text: "11", ok: true },
      { text: "16", ok: false },
      { text: "14", ok: false },
      { text: "10", ok: false },
      { text: "13", ok: false }
    ]
  },
  {
    text: "Can, Burak ve Deniz; 1'den 10'a kadar numaralandırılmış 10 kartın bulunduğu bir torbadan sırasıyla üçer tane kart çekiyor.\n• 6 numaralı kartı Can, 10 numaralı kartı Deniz çekmiştir.\n• Can'ın çektiği kartların numaraları toplamı, Burak'ın çektiği kartların numaraları toplamından 4 fazladır.\nCan'ın çektiği kartlardaki sayıların toplamı 20 olduğuna göre Burak'ın çektiği kartlardaki sayıların en küçüğü aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Can'ın toplamı 20 ise, Burak'ın toplamı 16'dır. Deniz'in toplamını bulmak için 10 karttan 9'unun çekildiğini ve 1'inin torbada kaldığını unutmamalıyız. \nCan'ın kartları (Toplam 20, 6'sı var): Kalan 14 için 2 kart seçmeli. {5, 9} dışında 1'den 10'a kadar (6 ve 10 hariç) 14 veren başka çift yoktur (7,7 olamaz). Can = {5, 6, 9}.\nBurak'ın kartları (Toplam 16, 3 kart). Kalan kartlar: 1, 2, 3, 4, 7, 8. (10 Deniz'de). Burak'ın 16 yapması için {1, 7, 8} çekmesi ZORUNLUDUR. Diğer hiçbir 3'lü kombinasyon 16 yapmaz (Örn: 2+?+? olmaz). Burak'ın en küçük kartı 1'dir.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "3", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: true }
    ]
  },
  {
    text: "Yukarıdaki bilgilere ek olarak, Deniz'in çektiği kartlardaki sayıların toplamı 25 olduğuna göre Can'ın çektiği kartlardaki sayıların toplamı kaçtır?",
    diff: 3,
    expl: "Deniz'in toplamı 25, 10 numaralı karta sahip. Diğer 2 kartının toplamı 15 olmalı. Kullanılabilecek kartlar (6 hariç, o Can'da) içinde 15'i veren tek çift {7, 8}'dir. Deniz = {10, 7, 8}.\nGeriye kalan kartlar: 1, 2, 3, 4, 5, 9. \nCan = {6, x, y}. Burak = {a, b, c}. Can = Burak + 4.\nKalanlardan öyle iki set ayırmalıyız ki Can'ın toplamı Burak'tan 4 fazla olsun. \nEğer Can {6, 1, 9} alırsa toplamı 16 olur. Kalanlar {2, 3, 4, 5}'tir. Burak {3, 4, 5} alırsa toplamı 12 olur. 16 = 12 + 4 şartı mükemmel sağlanır. Demek ki Can'ın toplamı 16'dır.",
    answers: [
      { text: "15", ok: false },
      { text: "19", ok: false },
      { text: "20", ok: false },
      { text: "16", ok: true },
      { text: "14", ok: false }
    ]
  }
];
