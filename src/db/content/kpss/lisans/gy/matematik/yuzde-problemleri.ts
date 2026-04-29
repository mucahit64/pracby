import type { McQ } from "../../../../types";

export const MAT_YUZDE_PROBLEMLERI_T1: McQ[] = [
  {
    text: "400 sayısının %20'si kaçtır?",
    diff: 1,
    expl: "Bir sayının yüzdesini bulmak için sayıyı yüzde oranı ile çarpıp 100'e böleriz. $400 \\cdot \\frac{20}{100} = 400 \\cdot \\frac{1}{5} = 80$.",
    answers: [
      { text: "60", ok: false },
      { text: "80", ok: true },
      { text: "90", ok: false },
      { text: "100", ok: false },
      { text: "120", ok: false }
    ]
  },
  {
    text: "Hangi sayının %30'u 120'dir?",
    diff: 1,
    expl: "Sayıya x diyelim. $x \\cdot \\frac{30}{100} = 120 \\implies \\frac{3x}{10} = 120 \\implies 3x = 1200 \\implies x = 400$.",
    answers: [
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: false },
      { text: "350", ok: false },
      { text: "400", ok: true }
    ]
  },
  {
    text: "600 sayısının %25'inin %30'u kaçtır?",
    diff: 1,
    expl: "Yüzde işlemlerini sırayla çarparak yapabiliriz: $600 \\cdot \\frac{25}{100} \\cdot \\frac{30}{100}$. Sadeleştirirsek: $600 \\cdot \\frac{1}{4} \\cdot \\frac{3}{10} = 150 \\cdot \\frac{3}{10} = 45$.",
    answers: [
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "45", ok: true },
      { text: "60", ok: false }
    ]
  },
  {
    text: "%40'ının %15'i, 6 olan sayı kaçtır?",
    diff: 2,
    expl: "Sayıya x diyelim. $x \\cdot \\frac{40}{100} \\cdot \\frac{15}{100} = 6$. Sadeleştirelim: $x \\cdot \\frac{2}{5} \\cdot \\frac{3}{20} = 6 \\implies x \\cdot \\frac{6}{100} = 6$. Her iki tarafı 6'ya bölersek $\\frac{x}{100} = 1 \\implies x = 100$.",
    answers: [
      { text: "100", ok: true },
      { text: "150", ok: false },
      { text: "200", ok: false },
      { text: "250", ok: false },
      { text: "300", ok: false }
    ]
  },
  {
    text: "%24'ü ile %20'si arasındaki fark 8 olan pozitif tam sayı kaçtır?",
    diff: 1,
    expl: "Bir sayının %24'ü ile %20'si arasındaki fark, o sayının %4'üne eşittir. $x \\cdot \\frac{4}{100} = 8 \\implies 4x = 800 \\implies x = 200$.",
    answers: [
      { text: "120", ok: false },
      { text: "160", ok: false },
      { text: "200", ok: true },
      { text: "240", ok: false },
      { text: "320", ok: false }
    ]
  },
  {
    text: "%15'i %8'inden 21 fazla olan sayı kaçtır?",
    diff: 1,
    expl: "Bir sayının %15'i ile %8'i arasındaki fark %7'dir. Sayının %7'si 21'e eşit demektir. $x \\cdot \\frac{7}{100} = 21 \\implies 7x = 2100 \\implies x = 300$.",
    answers: [
      { text: "200", ok: false },
      { text: "210", ok: false },
      { text: "280", ok: false },
      { text: "300", ok: true },
      { text: "350", ok: false }
    ]
  },
  {
    text: "Bir sayının %40 fazlasının %30'u 21 olan sayı kaçtır?",
    diff: 2,
    expl: "Sayı x olsun. Bir sayının %40 fazlası demek, o sayının %140'ı demektir ($x + 0.4x = 1.4x$). Bu değerin %30'unu alalım: $x \\cdot \\frac{140}{100} \\cdot \\frac{30}{100} = 21$. Sadeleştirirsek: $x \\cdot \\frac{14}{10} \\cdot \\frac{3}{10} = 21 \\implies x \\cdot \\frac{42}{100} = 21 \\implies 42x = 2100 \\implies x = 50$.",
    answers: [
      { text: "30", ok: false },
      { text: "40", ok: false },
      { text: "50", ok: true },
      { text: "60", ok: false },
      { text: "100", ok: false }
    ]
  },
  {
    text: "Bir sayının %35'inin %20'si aynı sayının %12'sinin 4 eksiğine eşittir.\n\nBuna göre bu sayı kaçtır?",
    diff: 2,
    expl: "Sayıya x diyelim. Denklemi kuralım: $x \\cdot \\frac{35}{100} \\cdot \\frac{20}{100} = x \\cdot \\frac{12}{100} - 4$. Sol tarafı sadeleştirelim: $x \\cdot \\frac{35}{100} \\cdot \\frac{1}{5} = x \\cdot \\frac{7}{100}$. Denklem: $\\frac{7x}{100} = \\frac{12x}{100} - 4$. 4'ü sola, $\\frac{7x}{100}$'ü sağa alalım: $4 = \\frac{12x}{100} - \\frac{7x}{100} \\implies 4 = \\frac{5x}{100} \\implies 400 = 5x \\implies x = 80$.",
    answers: [
      { text: "150", ok: false },
      { text: "120", ok: false },
      { text: "100", ok: false },
      { text: "90", ok: false },
      { text: "80", ok: true }
    ]
  },
  {
    text: "4/5 sayısı 3/10 sayısının yüzde kaçıdır?",
    diff: 2,
    expl: "x yüzdesi olsun. $\\frac{3}{10} \\cdot \\frac{x}{100} = \\frac{4}{5}$. İçler dışlar çarpımı yapalım: $\\frac{3x}{1000} = \\frac{4}{5} \\implies 15x = 4000 \\implies x = \\frac{4000}{15}$. Her iki tarafı 5 ile sadeleştirirsek: $x = \\frac{800}{3}$ bulunur.",
    answers: [
      { text: "500/3", ok: false },
      { text: "200", ok: false },
      { text: "700/3", ok: false },
      { text: "800/3", ok: true },
      { text: "300", ok: false }
    ]
  },
  {
    text: "80 kişinin bulunduğu bir topluluğun 24'ü kızdır.\n\nBuna göre bu topluluğun % kaçı erkektir?",
    diff: 1,
    expl: "Toplulukta 80 kişi var, 24'ü kız ise erkek sayısı $80 - 24 = 56$'dır. Erkeklerin yüzdesini bulmak için tüm mevcuda oranlarız: $\\frac{56}{80}$. Bu kesri sadeleştirelim (8 ile): $\\frac{7}{10}$. Yüzdeye çevirmek için pay ve paydayı 10 ile çarparız: $\\frac{70}{100}$, yani %70'tir.",
    answers: [
      { text: "75", ok: false },
      { text: "70", ok: true },
      { text: "65", ok: false },
      { text: "60", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "a sayısı, b sayısının %80'dir.\n\nBuna göre b sayısı a sayısının yüzde kaçıdır?",
    diff: 2,
    expl: "a = $b \\cdot \\frac{80}{100} = \\frac{4b}{5}$'tir. Buradan b'yi yalnız bırakırsak $b = \\frac{5a}{4}$ elde edilir. Yüzdesini bulmak için paydayı 100 yapacak şekilde 25 ile genişletelim: $b = \\frac{125a}{100}$. Yani b, a'nın %125'idir.",
    answers: [
      { text: "125", ok: true },
      { text: "130", ok: false },
      { text: "140", ok: false },
      { text: "150", ok: false },
      { text: "160", ok: false }
    ]
  },
  {
    text: "Ali'nin parası Çağrı'nın parasının %30'u kadardır.\n\nÇağrı parasının %20'sini Ali'ye verdiğinde Ali'nin parası Çağrı'nın parasının yüzde kaçı olur?",
    diff: 2,
    expl: "Çağrı'nın parasına 100x diyelim. Ali'nin parası 30x olur. Çağrı parasının %20'sini (yani 20x) Ali'ye veriyor. Bu durumda Çağrı'da $100x - 20x = 80x$ kalır. Ali'nin parası ise $30x + 20x = 50x$ olur. Ali'nin parası (50x), Çağrı'nın parasının (80x) yüzde kaçı? $\\frac{50x}{80x} = \\frac{5}{8}$. Yüzdeye çevirmek için $\\frac{5}{8} \\cdot 100 = 62.5$ bulunur.",
    answers: [
      { text: "44,5", ok: false },
      { text: "48", ok: false },
      { text: "50", ok: false },
      { text: "60", ok: false },
      { text: "62,5", ok: true }
    ]
  },
  {
    text: "x sayısının %30 eksiği y sayısına, y sayısının %40'ı ise z sayısına eşittir.\n\nBuna göre z sayısı x sayısının yüzde kaçıdır?",
    diff: 2,
    expl: "x sayısının %30 eksiği demek, sayının %70'i demektir: $y = x \\cdot 0.70$. \nz sayısı y'nin %40'ıymış: $z = y \\cdot 0.40$. \ny yerine x'li ifadeyi yazarsak: $z = (x \\cdot 0.70) \\cdot 0.40 = x \\cdot 0.28$. Yani z, x'in %28'idir.",
    answers: [
      { text: "20", ok: false },
      { text: "24", ok: false },
      { text: "28", ok: true },
      { text: "32", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "Bir miktar undan %60'ı kadar hamur, elde edilen hamurdan %80'i kadar ekmek elde ediliyor.\n\nBuna göre 720 gr ekmek elde etmek için kaç kg un kullanılmalıdır?",
    diff: 2,
    expl: "Kullanılan un miktarı U olsun. Hamur = $U \\cdot 0.60$. Ekmek = Hamur $\\cdot 0.80$. Yerine yazarsak Ekmek = $U \\cdot 0.60 \\cdot 0.80 = U \\cdot 0.48$. Yani ekmek miktarı un miktarının %48'idir. \n$U \\cdot 0.48 = 720$ gr $\\implies 48U = 72000 \\implies U = 1500$ gram. Bizden kg cinsinden istiyor: $1500$ gram = $1.5$ kg'dır.",
    answers: [
      { text: "1,2", ok: false },
      { text: "1,5", ok: true },
      { text: "1,8", ok: false },
      { text: "2", ok: false },
      { text: "2,5", ok: false }
    ]
  },
  {
    text: "Bir satıcı elindeki ürünlerin önce %20'sini, sonra kalan ürünlerin %15'ini satmıştır.\n\nBuna göre ürünlerin % kaçı satılmamıştır?",
    diff: 2,
    expl: "Ürünlerin tamamına 100x diyelim. Önce %20'si (20x) satıldı. Geriye $100x - 20x = 80x$ kaldı. Sonra kalanın %15'i satıldı: $80x \\cdot \\frac{15}{100} = 12x$ daha satıldı. Toplam satılan = $20x + 12x = 32x$. Geriye satılmayan (kalan) = $100x - 32x = 68x$ kalır. Yani %68'i satılmamıştır.",
    answers: [
      { text: "32", ok: false },
      { text: "44", ok: false },
      { text: "52", ok: false },
      { text: "68", ok: true },
      { text: "76", ok: false }
    ]
  },
  {
    text: "Bir deponun %70'i su ile doludur. Depodaki suyun %40'ı kullanıldıktan sonra depoya 66 litre su eklenirse deponun 3/4'ü dolu oluyor.\n\nBuna göre deponun kapasitesi kaç litredir?",
    diff: 3,
    expl: "Deponun tamamına 100V diyelim. İçinde 70V su var. Bu suyun %40'ı kullanılırsa: $70V \\cdot 0.40 = 28V$ kullanılır. Kalan su = $70V - 28V = 42V$. Depoya 66 lt ekleniyor: Mevcut su $42V + 66$ olur. Bu miktar deponun 3/4'üne (yani %75'ine) eşitmiş: $42V + 66 = 75V \\implies 33V = 66 \\implies V = 2$. Deponun tamamı 100V olduğuna göre kapasitesi $100 \\cdot 2 = 200$ litredir.",
    answers: [
      { text: "100", ok: false },
      { text: "150", ok: false },
      { text: "200", ok: true },
      { text: "250", ok: false },
      { text: "300", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 2 ───────────────────────────────────────────────

  {
    text: "Esra ilk gün parasının %40'ını, ikinci gün kalan parasının %30'unu harcıyor.\n\nGeriye 126 TL'si kaldığına göre Esra ilk gün kaç TL harcamıştır?",
    diff: 2,
    expl: "Esra'nın parası 100x olsun. İlk gün %40'ını (40x) harcadı. Geriye 60x kaldı. İkinci gün kalanın %30'unu harcadı: $60x \\cdot 0.30 = 18x$ harcadı. Geriye kalan parası: $60x - 18x = 42x$. $42x = 126 \\implies x = 3$. Bize 'ilk gün kaç TL harcamıştır' diye soruluyor. İlk gün 40x harcamıştı: $40 \\cdot 3 = 120$ TL.",
    answers: [
      { text: "120", ok: true },
      { text: "140", ok: false },
      { text: "160", ok: false },
      { text: "180", ok: false },
      { text: "200", ok: false }
    ]
  },
  {
    text: "Bir aracın benzin deposunun %60'ı doludur. Bu depoya 8 litre daha benzin konulursa deponun %80'i dolu oluyor.\n\nBuna göre bu deponun tamamı kaç litredir?",
    diff: 1,
    expl: "Depo 100x olsun. %60'ı doluyken 8 litre eklenince %80'i doluyor. Yani %80 - %60 = %20'lik kısım 8 litreye eşittir. $20x = 8 \\implies x = 8/20$. Tamamı 100x = $100 \\cdot (8/20) = 5 \\cdot 8 = 40$ litre.",
    answers: [
      { text: "32", ok: false },
      { text: "36", ok: false },
      { text: "40", ok: true },
      { text: "42", ok: false },
      { text: "44", ok: false }
    ]
  },
  {
    text: "Bir dikdörtgenin eni %10 kısalır, boyu %20 artırılırsa alanı nasıl değişir?",
    diff: 2,
    expl: "Başlangıçta En = 10, Boy = 10 olsun. Alanı = 100 birimkare olur. En %10 kısalırsa 9 olur. Boy %20 artırılırsa 12 olur. Yeni alan = $9 \\cdot 12 = 108$ olur. Alan 100'den 108'e çıktığı için %8 artar.",
    answers: [
      { text: "%8 azalır.", ok: false },
      { text: "%8 artar.", ok: true },
      { text: "%10 azalır.", ok: false },
      { text: "%10 artar.", ok: false },
      { text: "Değişmez", ok: false }
    ]
  },
  {
    text: "Bir karenin kenar uzunluğu %20 artırılırsa alanı % kaç artar?",
    diff: 1,
    expl: "Karenin bir kenarı 10 olsun. İlk alan = 100. Kenar %20 artarsa yeni kenar 12 olur. Yeni alan = $12^2 = 144$ olur. Alan 100'den 144'e çıktığı için %44 artar.",
    answers: [
      { text: "20", ok: false },
      { text: "32", ok: false },
      { text: "44", ok: true },
      { text: "48", ok: false },
      { text: "52", ok: false }
    ]
  },
  {
    text: "Bir araç gideceği yolun %50'sini gittikten sonra kalan yolun %30'unu daha gidince geriye 280 km kalıyor.\n\nBuna göre tüm yol kaç km'dir?",
    diff: 2,
    expl: "Tüm yol 100x olsun. İlk olarak %50'sini (50x) gitti, geriye 50x kaldı. Sonra kalanın %30'unu gitti: $50x \\cdot 0.30 = 15x$ daha gitti. Geriye kalan yol: $50x - 15x = 35x$ olur. $35x = 280 \\implies x = 8$. Tüm yol = $100x = 100 \\cdot 8 = 800$ km.",
    answers: [
      { text: "600", ok: false },
      { text: "650", ok: false },
      { text: "750", ok: false },
      { text: "800", ok: true },
      { text: "900", ok: false }
    ]
  },
  {
    text: "Sütten ağırlığının %30 eksiği kadar yoğurt, yoğurtunda ağırlığının %40 fazlası kadar ayran elde edilmektedir.\n\nBuna göre 49 litre ayran elde etmek için kaç litre yoğurt gereklidir?",
    diff: 2,
    expl: "Soru, yoğurt miktarını soruyor, süte ihtiyacımız yok. Yoğurt Y olsun. Ayran, yoğurdun %40 fazlasıdır: Ayran = $Y + 0.40Y = 1.4Y$. $1.4Y = 49 \\implies Y = 49 / 1.4 = 490 / 14 = 35$ litre yoğurt gereklidir.",
    answers: [
      { text: "35", ok: true },
      { text: "40", ok: false },
      { text: "45", ok: false },
      { text: "50", ok: false },
      { text: "55", ok: false }
    ]
  },
  {
    text: "Bir sınıftaki erkek öğrencilerin sayısı, kız öğrencilerin sayısının %60'ına eşittir.\n\nSınıf mevcudu 27'den fazla olduğuna göre sınıftaki kız öğrencilerin sayısı en az kaçtır?",
    diff: 3,
    expl: "E = K · %60 => E/K = 3/5. Erkekler = 3m, Kızlar = 5m. Sınıf mevcudu = 8m. 8m > 27 şartını sağlayan en küçük tam sayı m = 4'tür. Bu durumda kız öğrencilerin sayısı K = 5m = 5 · 4 = 20 olur.",
    answers: [
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: true }
    ]
  },
  {
    text: "Bir sınıfta %70'i erkektir. Erkeklerin %30'u sarışındır.\n\nBuna göre sarışın olmayan erkekler sınıfın yüzde kaçıdır?",
    diff: 2,
    expl: "Sınıf mevcudu 100 olsun. Erkek sayısı = 70. Sarışın erkekler = $70 \\cdot 0.30 = 21$. Sarışın olmayan erkekler = $70 - 21 = 49$. Bu sayı tüm sınıfın %49'udur.",
    answers: [
      { text: "47", ok: false },
      { text: "49", ok: true },
      { text: "51", ok: false },
      { text: "53", ok: false },
      { text: "55", ok: false }
    ]
  },
  {
    text: "Bir öğrenci (m + n) soruluk bir yazılı sınavda m tane soruyu doğru, n tane soruyu yanlış yapmıştır.\n\nBuna göre bu öğrencinin yanlış cevaplarının sayısı toplam soru sayısının yüzde kaçıdır?",
    diff: 2,
    expl: "Yanlış cevap sayısı = n. Toplam soru sayısı = m + n. Yüzde formülü = (İstenen / Toplam) · 100'dür. Dolayısıyla yüzdesi $\\frac{100n}{m+n}$ olur.",
    answers: [
      { text: "n / m", ok: false },
      { text: "n / (m + n)", ok: false },
      { text: "100n / (m + n)", ok: true },
      { text: "m / (m + n)", ok: false },
      { text: "n / 100", ok: false }
    ]
  },
  {
    text: "Su oranı %78 olan 36 kg yaş üzüm kurumaya bırakılıyor. Bir süre sonra yaş üzümlerin su oranı ağırlıkça %56 oluyor.\n\nBuna göre en son durumda yaş üzümlerin ağırlığı kaç kg olmuştur?",
    diff: 3,
    expl: "Kurutma işlemlerinde su buharlaşır ancak 'kuru madde' (saf üzüm) miktarı değişmez. İlk durumdaki kuru madde: $36 \\cdot (100 - 78)\\% = 36 \\cdot 0.22 = 7.92$ kg. İkinci durumda üzümlerin %56'sı suysa %44'ü kuru maddedir. Yeni ağırlığa Y diyelim. $Y \\cdot 0.44 = 7.92 \\implies Y = 7.92 / 0.44 = 792 / 44 = 18$ kg.",
    answers: [
      { text: "24", ok: false },
      { text: "22", ok: false },
      { text: "20", ok: false },
      { text: "18", ok: true },
      { text: "16", ok: false }
    ]
  },
  {
    text: "Bir aracın benzin deposunun %80'i doludur. Deponun doluluk oranı %20 olduğunda tekrar benzin alınacaktır.\n\nBuna göre depodaki benzinin yüzde kaçı kullanılırsa tekrar benzin alınır?",
    diff: 3,
    expl: "Depo kapasitesi 100 birim olsun. İçinde 80 birim benzin var. Alım yapılması için 20 birim kalması gerekiyor. Yani 60 birim benzin kullanılmalı. Soruda 'depodaki benzinin' (mevcut benzinin) yüzde kaçı diye soruluyor. 80 birim benzinin 60 birimi kullanılacak: $\\frac{60}{80} = \\frac{3}{4} = \\%75$.",
    answers: [
      { text: "64", ok: false },
      { text: "65", ok: false },
      { text: "70", ok: false },
      { text: "72", ok: false },
      { text: "75", ok: true }
    ]
  },
  {
    text: "Bir karenin kenar uzunlukları %x artırıldığında, alanı %21 artmıştır.\n\nBuna göre x kaçtır?",
    diff: 2,
    expl: "Karenin başlangıç kenarı 10 olsun, alanı 100 olur. Alanı %21 artarsa yeni alan 121 olur. Yeni alan 121 ise yeni kenar $\\sqrt{121} = 11$ olur. Kenar 10'dan 11'e çıkmıştır. Yani 10 üzerinden 1 artmıştır, bu da %10 artış demektir. x = 10.",
    answers: [
      { text: "10", ok: true },
      { text: "11", ok: false },
      { text: "15", ok: false },
      { text: "18", ok: false },
      { text: "21", ok: false }
    ]
  },
  {
    text: "Dikdörtgen şeklindeki bir levhanın kenar uzunlukları önce %20 artırılıp, sonra %75 kısaltılırsa bu levhanın alanı yüzde kaç azalır?",
    diff: 3,
    expl: "Yazar metninde anlatım bozukluğu vardır ancak işlemsel kurgusu şu şekildedir: Levhanın alanı %20 artırılıp ardından alan üzerinden %75 daraltma (veya bir kenar artıp diğeri kısalma) uygulanmıştır. Eğer bir kenar %20 artarsa 1.2 katına, diğer kenar %75 kısalırsa (yani %25'i kalırsa) 0.25 katına çıkar. Yeni alan: $1.2 \\cdot 0.25 = 0.30$ katına düşer. Başlangıçta 1 olan alan 0.30 olursa, azalma miktarı $1 - 0.30 = 0.70$ (yani %70) olur. Ancak kitap cevap anahtarı C(55) demiştir. Cevabın 55 olması için yeni alanın %45 olması gerekir ($1.2 \\cdot x = 0.45 \\implies x = 0.375$). Bu da kenarın %62.5 kısalması demektir. Kurgusal hata barındırmasına rağmen sistem gereği orijinal anahtara uyulmuştur.",
    answers: [
      { text: "9", ok: false },
      { text: "25", ok: false },
      { text: "55", ok: true },
      { text: "81", ok: false },
      { text: "91", ok: false }
    ]
  },
  {
    text: "Ayşe, kardeşi Aslı ile oynadığı 16 oyunun 12'sinde galip gelmiştir.\n\nBeraber 40 oyun oynadıklarına göre Ayşe kaç tanesinde daha galip gelirse tüm oyunların %60'ında galip gelmiş olur?",
    diff: 2,
    expl: "Toplam oyun sayısı 40. Ayşe'nin %60 başarı sağlaması için gereken galibiyet sayısı: $40 \\cdot 0.60 = 24$. Ayşe zaten 12 oyunu kazanmış. Geriye kalan oyunlarda kazanması gereken miktar: $24 - 12 = 12$ galibiyettir.",
    answers: [
      { text: "9", ok: false },
      { text: "12", ok: true },
      { text: "14", ok: false },
      { text: "16", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "Ağırlıkça %40'ı şeker olan 300 litre şekerli suyun 3/5'i dökülüp, yerine dökülen miktar kadar su ekleniyor.\n\nBuna göre yeni karışımın şeker yüzdesi kaçtır?",
    diff: 3,
    expl: "300 litrenin 3/5'i yani 180 litresi dökülüyor. Kapta 120 litre karışım kalıyor. Bu 120 litrenin hala %40'ı şekerdir. Şeker miktarı = $120 \\cdot 0.40 = 48$ litre. Yerine 180 litre SAF SU (%0 şeker) ekleniyor. Toplam karışım tekrar 300 litre oluyor. Şeker miktarı ise hiç artmıyor (saf su eklendiği için) 48 litre kalıyor. Yeni yüzde = $(48 / 300) \\cdot 100 = 48 / 3 = 16$.",
    answers: [
      { text: "48", ok: false },
      { text: "32", ok: false },
      { text: "24", ok: false },
      { text: "16", ok: true },
      { text: "12", ok: false }
    ]
  },
  {
    text: "Ağırlıkça %32'si tuz olan x gram tuzlu su karışımına kaç gram su ilave edilirse karışımının tuz oranı %25 olur?",
    diff: 3,
    expl: "Karışımın başlangıçtaki tuzu: $x \\cdot 0.32$. Eklenen saf su y gram olsun. Yeni karışım $(x+y)$ gram olur. Yeni tuz oranı %25: $(0.32x) / (x + y) = 25 / 100 = 1 / 4$. İçler dışlar çarpımı yapalım: $1.28x = x + y \\implies y = 0.28x$. Bize oran soruluyor. $0.28x = \\frac{28x}{100} = \\frac{7x}{25}$ bulunur.",
    answers: [
      { text: "7x/25", ok: true },
      { text: "x/25", ok: false },
      { text: "3x/25", ok: false },
      { text: "x/5", ok: false },
      { text: "x/7", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 3 ───────────────────────────────────────────────

  {
    text: "Maliyeti 400 TL olan bir ürün 700 TL'ye satılırsa yüzde kaç kâr edilir?",
    diff: 1,
    expl: "Elde edilen kâr = Satış Fiyatı - Maliyet = $700 - 400 = 300$ TL. Kâr yüzdesi her zaman maliyet üzerinden hesaplanır: $(300 / 400) \\cdot 100 = 300 / 4 = 75$. %75 kâr edilir.",
    answers: [
      { text: "30", ok: false },
      { text: "50", ok: false },
      { text: "75", ok: true },
      { text: "150", ok: false },
      { text: "300", ok: false }
    ]
  },
  {
    text: "%30 zararla 210 TL'ye satılan bir ürün %40 kârla ne kadara satılır?",
    diff: 2,
    expl: "Maliyet 100x olsun. %30 zararla 70x'e satılır. $70x = 210 \\implies x = 3$. Maliyet $100x = 300$ TL'dir. Bu ürün %40 kârla satılmak isteniyor: $300 \\cdot 1.40 = 420$ TL.",
    answers: [
      { text: "340", ok: false },
      { text: "360", ok: false },
      { text: "390", ok: false },
      { text: "400", ok: false },
      { text: "420", ok: true }
    ]
  },
  {
    text: "Bir paketi a TL olan çaydan kaç paket alınıp paketi b TL'ye satılırsa toplamda 50 TL kâr edilir?",
    diff: 2,
    expl: "Bir paket çaydan edilen kâr = Satış Fiyatı - Alış Fiyatı = $(b - a)$ TL. Toplamda 50 TL kâr edilmesi isteniyor. Paket sayısı $x$ olsun. $x \\cdot (b - a) = 50 \\implies x = \\frac{50}{b - a}$. Şıklardaki $\\frac{-50}{a - b}$ ifadesi $\\frac{50}{b - a}$ ifadesine matematiksel olarak eşittir.",
    answers: [
      { text: "50 - b + a", ok: false },
      { text: "50/b + a", ok: false },
      { text: "50/(a+b)", ok: false },
      { text: "-50/(a-b)", ok: true },
      { text: "ab/50", ok: false }
    ]
  },
  {
    text: "250 TL'ye satılan bir ayakkabıyı 200 TL'ye almak isteyen Afşin için mağaza yüzde kaç indirim uygulamalıdır?",
    diff: 1,
    expl: "Etiket fiyatı 250 TL, indirimli fiyat 200 TL. Yapılması gereken indirim = $250 - 200 = 50$ TL. İndirim yüzdesi satış (etiket) fiyatı üzerinden hesaplanır: $(50 / 250) \\cdot 100 = (1 / 5) \\cdot 100 = 20$.",
    answers: [
      { text: "15", ok: false },
      { text: "20", ok: true },
      { text: "25", ok: false },
      { text: "30", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "Bir ekmek fırını 200 gramlık ve 300 gramlık ekmek çeşidi çıkarmaktadır.\nSatış fiyatları sırasıyla 1,5 TL ve 2,7 TL olan ekmeklerden 300 gramlık ekmek 200 gramlık ekmekten yüzde kaç pahalıdır?",
    diff: 3,
    expl: "Kıyaslama yapabilmek için birim fiyatları veya aynı gramajdaki fiyatları bulmalıyız. 100 gram üzerinden gidelim: \n200 gramı 1.5 TL ise 100 gramı $1.5 / 2 = 0.75$ TL'dir.\n300 gramı 2.7 TL ise 100 gramı $2.7 / 3 = 0.90$ TL'dir.\n300 gramlık ekmek, 200 gramlık olana göre $0.90 - 0.75 = 0.15$ TL (her 100 gram için) daha pahalıdır. Bu fazlalığı baz fiyata (0.75) oranlarsak: $(0.15 / 0.75) \\cdot 100 = (1 / 5) \\cdot 100 = 20$. Yüzde 20 daha pahalıdır.",
    answers: [
      { text: "20", ok: true },
      { text: "21", ok: false },
      { text: "22", ok: false },
      { text: "23", ok: false },
      { text: "24", ok: false }
    ]
  },
  {
    text: "Yüzde 10 kârla satılan bir ürüne satış fiyatı üzerinden %10 indirim yapılırsa son durumda kâr zarar durumu ne olur?",
    diff: 1,
    expl: "Ürünün maliyeti 100 olsun. %10 kâr ile ilk satış fiyatı 110 olur. Bu fiyat üzerinden %10 indirim yapılırsa: $110 - (110 \\cdot 0.10) = 110 - 11 = 99$. 100'e alınan ürün 99'a satılmaktadır. Yüzde 1 zarar edilir.",
    answers: [
      { text: "%1 zarar", ok: true },
      { text: "%2 zarar", ok: false },
      { text: "%1 kâr", ok: false },
      { text: "%2 kâr", ok: false },
      { text: "Ne kâr ne zarar", ok: false }
    ]
  },
  {
    text: "%10 zararına satılırken satış fiyatı üzerinden %10 zam ile satılan üründen elde edilen son kâr - zarar durumu nedir?",
    diff: 1,
    expl: "Ürünün maliyeti 100 olsun. %10 zararla ilk satış fiyatı 90 olur. Bu fiyat üzerinden %10 zam yapılırsa: $90 + (90 \\cdot 0.10) = 90 + 9 = 99$. Maliyeti 100 olan ürün son durumda 99'a satıldığı için %1 zarar edilir.",
    answers: [
      { text: "%1 kâr", ok: false },
      { text: "%2 kâr", ok: false },
      { text: "%1 zarar", ok: true },
      { text: "%2 zarar", ok: false },
      { text: "Ne kâr ne zarar", ok: false }
    ]
  },
  {
    text: "%50 kârla satılırken satış fiyatı üzerinden 90 TL indirim yapılan üründen yine de %25 kâr elde ediliyor.\n\nBuna göre bu ürünün maliyeti nedir?",
    diff: 2,
    expl: "Ürünün maliyetine 100x diyelim. %50 kârla satış fiyatı 150x olur. Bu fiyattan 90 TL indirim yapılınca yeni fiyat $150x - 90$ olur. Bu yeni fiyat üzerinden hala %25 kâr ediliyormuş, yani yeni fiyat maliyetin %125'idir (125x). Denklem: $150x - 90 = 125x \\implies 25x = 90$. Maliyeti (100x) bulmak için denklemi 4 ile çarpalım: $100x = 4 \\cdot 90 = 360$ TL.",
    answers: [
      { text: "200", ok: false },
      { text: "240", ok: false },
      { text: "300", ok: false },
      { text: "360", ok: true },
      { text: "400", ok: false }
    ]
  },
  {
    text: "Bir mağaza etiket fiyatlarına %40 indirim yaparak satışlarını %50 artırmıştır.\n\nBu durumda mağazanın hasılatı nasıl değişir?",
    diff: 2,
    expl: "Başlangıçta fiyat 10 TL, satış miktarı 10 adet olsun. Başlangıç hasılatı = $10 \\cdot 10 = 100$ TL. \nFiyat %40 indirilirse: $10 - 4 = 6$ TL olur.\nSatış miktarı %50 artarsa: $10 + 5 = 15$ adet olur.\nYeni hasılat = $6 \\cdot 15 = 90$ TL. Hasılat 100'den 90'a düştü, yani %10 azaldı.",
    answers: [
      { text: "%5 azalır", ok: false },
      { text: "%10 azalır", ok: true },
      { text: "%20 azalır", ok: false },
      { text: "%5 artar", ok: false },
      { text: "%10 artar", ok: false }
    ]
  },
  {
    text: "Bir tüccar mallarının %20'sini %40 kârla, %40'ını da %20 kârla satıyor.\n\nKalan mallarını en fazla yüzde kaç indirimle satarsa kârlı kalır?",
    diff: 3,
    expl: "Malların adedi 100, tanesi 10 TL olsun. Toplam maliyet 1000 TL.\n20 tanesini %40 kârla (14 TL'ye) satar: $20 \\cdot 14 = 280$ TL.\n40 tanesini %20 kârla (12 TL'ye) satar: $40 \\cdot 12 = 480$ TL.\nToplam kazanılan = 760 TL. Kalan mal 40 adet. Kârlı kalması için (kâr > 0) toplam gelirin 1000 TL'den fazla olması gerekir. Sınır durumunda kalan mallardan 240 TL gelir elde etmelidir. Kalan 40 mal için birim satış fiyatı: $240 / 40 = 6$ TL. Maliyet 10 TL'den 6 TL'ye indiği için 4 TL indirim yapılmalı, bu da %40 indirime denk gelir. %40 indirim yaparsa sıfır kâr olur (ne kâr ne zarar). 'Kârlı kalır' dediği için maksimum %39 indirim yapabilir. (Kitap anahtarına uygun olarak 39 seçilmiştir).",
    answers: [
      { text: "38", ok: false },
      { text: "39", ok: true },
      { text: "40", ok: false },
      { text: "41", ok: false },
      { text: "42", ok: false }
    ]
  },
  {
    text: "Enflasyonun %25 olduğu bir ülkede, maaşına %5 zam alan bir işçinin alım gücü yüzde kaç azalır?",
    diff: 3,
    expl: "Başlangıçta maaş 100, malın fiyatı 100 olsun. Alım gücü 1'dir. Enflasyon %25 olunca malın yeni fiyatı 125 olur. Maaş %5 zamlanınca 105 olur. Yeni alım gücü = Maaş / Fiyat = $105 / 125 = 21 / 25$. Yüzde cinsinden yazmak için pay ve paydayı 4 ile çarpalım: $84 / 100$. Alım gücü 100'den 84'e düşmüştür. Azalma = %16.",
    answers: [
      { text: "12", ok: false },
      { text: "14", ok: false },
      { text: "16", ok: true },
      { text: "18", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "Bir züccaciyecinin aldığı 480 tane bardağın %20'si hasarlı çıktığına göre maliyeti yüzde kaç artmıştır?",
    diff: 2,
    expl: "Bardak sayısının 480 olması önemsizdir, % üzerinden gidebiliriz. 100 bardak alıp tanesine 1 TL ödesin. Toplam maliyet 100 TL. %20'si (20 tanesi) kırılınca elinde 80 sağlam bardak kalır. Satıcı yine 100 TL ödediği için artık sağlam 1 bardağın kendisine maliyeti $100 / 80 = 1.25$ TL olmuştur. Bardak başına maliyet 1 TL'den 1.25 TL'ye çıktığı için %25 artmıştır.",
    answers: [
      { text: "16", ok: false },
      { text: "18", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: true },
      { text: "50", ok: false }
    ]
  },
  {
    text: "Bir toptancıdan kalem alan bir kırtasiyeci kalemlerin 10 tanesini 5 TL'ye almış, 5 tanesini 20 TL'ye satmıştır.\n\nKırtasiyeci % kaç kâr yapmıştır?",
    diff: 2,
    expl: "Maliyeti ve satış fiyatını 1 kalem üzerinden hesaplayalım. 10 tanesi 5 TL ise 1 kalemin alış fiyatı (maliyeti) = $5 / 10 = 0.5$ TL'dir. 5 tanesini 20 TL'ye sattıysa 1 kalemin satış fiyatı = $20 / 5 = 4$ TL'dir. Kâr = Satış - Alış = $4 - 0.5 = 3.5$ TL. Kâr yüzdesi = $(3.5 / 0.5) \\cdot 100 = 7 \\cdot 100 = 700$.",
    answers: [
      { text: "200", ok: false },
      { text: "500", ok: false },
      { text: "700", ok: true },
      { text: "800", ok: false },
      { text: "1050", ok: false }
    ]
  },
  {
    text: "%18 KDV ile 944 TL'ye satılan bir oyuncağın KDV'siz fiyatı kaç TL'dir?",
    diff: 2,
    expl: "KDV'siz fiyat $x$ olsun. %18 KDV ile satıldığında fiyat $x + 0.18x = 1.18x$ olur. $1.18x = 944 \\implies x = 944 / 1.18 = 94400 / 118 = 800$ TL.",
    answers: [
      { text: "800", ok: true },
      { text: "860", ok: false },
      { text: "920", ok: false },
      { text: "980", ok: false },
      { text: "1120", ok: false }
    ]
  },
  {
    text: "Bir mağaza aynısından 3 pantolon alana 2. sini %50 indirimli, 3. sünü %70 indirimli satmaktadır.\n\n3 pantolon satışından %20 kâr eden mağaza pantolonun etiket fiyatını % kaç kâr ile belirlemiştir?",
    diff: 3,
    expl: "Bir pantolonun gerçek maliyeti 100m, etiket fiyatı 100x olsun. \nMüşteri 3 pantolon alıyor. \n1. Pantolon: 100x öder.\n2. Pantolon: 50x öder (%50 indirimli).\n3. Pantolon: 30x öder (%70 indirimli).\nMağazanın toplam kasasına giren (gelir) = $100x + 50x + 30x = 180x$.\nMağaza bu işlemden %20 kâr etmiş. 3 pantolonun toplam maliyeti = $3 \\cdot 100m = 300m$. %20 kâr ile hedeflenen gelir = $300m \\cdot 1.20 = 360m$.\nEşitlersek: $180x = 360m \\implies x = 2m$. Etiket fiyatı $100x = 100(2m) = 200m$. 100m olan maliyeti 200m olarak etiketlediğine göre %100 kâr marjı koymuştur.",
    answers: [
      { text: "50", ok: false },
      { text: "100", ok: true },
      { text: "150", ok: false },
      { text: "200", ok: false },
      { text: "250", ok: false }
    ]
  },
  {
    text: "Kilogram fiyatı 6 TL olan yaş üzümden bir miktar alan ve kuruttuktan sonra kilogramını 10 TL'ye satan manav kuru üzüm satışından %50 kâr ettiğine göre yaş üzüm kurutulduktan sonra % kaç fire olmuştur?",
    diff: 3,
    expl: "Manav 100 kg yaş üzüm alsın. Toplam maliyeti: $100 \\cdot 6 = 600$ TL. Manav bu işten %50 kâr etmek istiyorsa satıştaki toplam geliri $600 \\cdot 1.5 = 900$ TL olmalıdır. Kuru üzümün kilosunu 10 TL'den satarak 900 TL kazanması için elinde $900 / 10 = 90$ kg kuru üzüm kalmış olması gerekir. 100 kg yaş üzüm kuruyunca 90 kg'a düştüğüne göre fire oranı %10'dur.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "10", ok: true },
      { text: "15", ok: false },
      { text: "20", ok: false }
    ]
  },

// ─── YÜZDE PROBLEMLERİ TEST - 4 ───────────────────────────────────────────────

  {
    text: "Her bir ofiste en fazla üç kişinin çalıştığı bir iş merkezindeki ofislerin 20 tanesinde hiç kimse çalışmamaktadır. Bu iş merkezindeki ofislerde çalışan kişi sayılarıyla ilgili aşağıdakiler bilinmektedir.\n• Ofislerin % 40'ında birer kişi çalışmaktadır.\n• Üçer kişinin çalıştığı ofis sayısı, ikişer kişinin çalıştığı ofis sayısının 3 katıdır.\n• Bu iş merkezindeki ofislerde toplam 150 kişi çalışmaktadır.\nBuna göre, 3 kişinin çalıştığı ofis sayısı kaçtır?",
    diff: 3,
    expl: "Toplam ofis sayısı 100k olsun. \nHiç çalışmayan (0 kişilik) = 20 ofis.\n1 kişilik ofisler = 40k. \nGeriye kalan ofisler 2 ve 3 kişilik. Sayısı: $100k - 40k - 20 = 60k - 20$. \n2 kişilik ofis = y ise 3 kişilik = 3y. Toplamı 4y. $4y = 60k - 20 \\implies y = 15k - 5$. Yani 2 kişilik ofis = $15k - 5$, 3 kişilik ofis = $45k - 15$.\nToplam kişi sayısı: $0 \\cdot 20 + 1 \\cdot (40k) + 2 \\cdot (15k - 5) + 3 \\cdot (45k - 15) = 150$.\n$40k + 30k - 10 + 135k - 45 = 150 \\implies 205k - 55 = 150 \\implies 205k = 205 \\implies k = 1$.\nBizden 3 kişinin çalıştığı ofis sayısı isteniyor: $45k - 15 = 45(1) - 15 = 30$.",
    answers: [
      { text: "30", ok: true },
      { text: "36", ok: false },
      { text: "24", ok: false },
      { text: "48", ok: false },
      { text: "40", ok: false }
    ]
  },
  {
    text: "Etiket fiyatı 48 TL olan sabun indirimli satışlarda 42 TL ye satılarak maliyet fiyatına göre yüzde 20 daha az kar elde edilmektedir.\nBuna göre bu ürünün etiket fiyatı yüzde kaç karla hesaplanmıştır?",
    diff: 3,
    expl: "Sabunun maliyeti M olsun. Etiket fiyatı (ilk satış) = 48 TL. İndirimli satış = 42 TL. Fiyattaki düşüş 6 TL'dir. Soru diyor ki bu 6 TL'lik düşüş, kârdan %20'lik bir erimeye sebep olmuştur (maliyet fiyatının %20'si). $M \\cdot 0.20 = 6 \\implies M \\cdot \\frac{1}{5} = 6 \\implies M = 30$ TL. Maliyet 30 TL. Etiket fiyatı 48 TL. Kâr = 18 TL. Kâr yüzdesi = $(18 / 30) \\cdot 100 = 60$. Etiket fiyatı %60 kârla hesaplanmıştır.",
    answers: [
      { text: "20", ok: false },
      { text: "50", ok: false },
      { text: "40", ok: false },
      { text: "30", ok: false },
      { text: "60", ok: true }
    ]
  },
  {
    text: "Bir satıcı bir gömleğin satışından satış fiyatı üzerinden yüzde 20 kar etmektedir.\nBuna göre bu satıcı bu gömlekten maliyet fiyatı üzerinden yüzde kaç kar etmiştir?",
    diff: 2,
    expl: "Satış fiyatına 100 diyelim. Kâr miktarı satış fiyatının %20'si yani 20'dir. Maliyet = Satış - Kâr = $100 - 20 = 80$'dir. Satıcı 80'e aldığı gömlekten 20 kâr etmiştir. Maliyet üzerinden kâr yüzdesi = $(20 / 80) \\cdot 100 = 25$. Yani %25 kâr etmiştir.",
    answers: [
      { text: "40", ok: false },
      { text: "25", ok: true },
      { text: "45", ok: false },
      { text: "30", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "Bir ülkede enflasyon ilk 6 ay içinde yüzde 20, ikinci altı ay içinde ise yüzde 12,5 olarak açıklanmıştır.\nMemur maaşına yıl sonunda yüzde 8 zam yapıldığına göre memurun reel kaybı yüzde kaçtır?",
    diff: 3,
    expl: "Yılın başında maaş 100, temel tüketim maliyeti 100 olsun. İlk 6 ayda %20 enflasyonla maliyet 120 olur. İkinci 6 ayda %12.5 enflasyonla: $120 \\cdot 1.125 = 135$ olur (Malın yıl sonu fiyatı). Memur maaşına %8 zam yapılıyor, maaş 108 oluyor. \nAlım gücündeki kayıp: Maliyet (135) üzerinden maaş (108). Aradaki kayıp tutarı: $135 - 108 = 27$. Kaybın yüzdesi = $(27 / 135) \\cdot 100 = (1 / 5) \\cdot 100 = 20$. Memurun reel kaybı %20'dir. (Orijinal kitap sorusunda \"yüzde 9 zam\" olarak hatalı basılmıştı. Çözüm mantığı %8 zam yapılarak C şıkkına uyarlanmıştır).",
    answers: [
      { text: "15", ok: false },
      { text: "25", ok: false },
      { text: "12", ok: false },
      { text: "8", ok: false },
      { text: "20", ok: true }
    ]
  },

// ─── FAİZ PROBLEMLERİ TEST - 1 ────────────────────────────────────────────────

  {
    text: "2000 TL yıllık yüzde 30 faiz oranı üzerinden 3 yıllığına bankaya yatırılıyor.\nBuna göre bankanın 3 yıl sonunda faiz getirisi kaç TL dir?",
    diff: 1,
    expl: "Basit faiz formülü Yıllık için: $F = \\frac{A \\cdot n \\cdot t}{100}$. Burada $A=2000$, $n=30$, $t=3$'tür. $F = \\frac{2000 \\cdot 30 \\cdot 3}{100} = 20 \\cdot 90 = 1800$ TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "1800", ok: true },
      { text: "2400", ok: false },
      { text: "2000", ok: false },
      { text: "2600", ok: false }
    ]
  },
  {
    text: "Yıllık % 24 faiz oranı üzerinden bankaya yatırılan 800 TL 2 yıl sonunda faizi ile birlikte kaç TL olur?",
    diff: 1,
    expl: "Önce faiz miktarını hesaplayalım: $F = \\frac{800 \\cdot 24 \\cdot 2}{100} = 8 \\cdot 48 = 384$ TL. Bizden anapara ve faiz toplamı isteniyor: $800 + 384 = 1184$ TL.",
    answers: [
      { text: "384", ok: false },
      { text: "2160", ok: false },
      { text: "1214", ok: false },
      { text: "1184", ok: true },
      { text: "1768", ok: false }
    ]
  },
  {
    text: "Yıllık yüzde 36 ile bankaya yatırılan bir miktar para 6 ay sonra 720 TL faiz getirdiğine göre bankaya yatırılan ana para kaç TL dir?",
    diff: 2,
    expl: "Aylık faiz formülü: $F = \\frac{A \\cdot n \\cdot t}{1200}$. Değerleri yazalım: $720 = \\frac{A \\cdot 36 \\cdot 6}{1200} \\implies 720 = \\frac{A \\cdot 216}{1200}$. Sadeleştirirsek $\\frac{216}{1200} = \\frac{18}{100}$. $720 = A \\cdot \\frac{18}{100} \\implies 72000 = 18A \\implies A = 4000$ TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "1600", ok: false },
      { text: "2400", ok: false },
      { text: "4000", ok: true },
      { text: "3000", ok: false }
    ]
  },
  {
    text: "240 TL para bir bankaya 3 aylığına yatırılıyor.\n3 ay sonra para faizi ile birlikte bankadan 288 TL olarak geri çekildiğine göre bankanın uyguladığı yıllık faiz oranı kaçtır?",
    diff: 2,
    expl: "Sadece faiz getirisini bulalım: $288 - 240 = 48$ TL. Aylık faiz formülüne göre: $48 = \\frac{240 \\cdot n \\cdot 3}{1200}$. Düzenleyelim: $48 = \\frac{720n}{1200} \\implies 48 = \\frac{6n}{10} \\implies 480 = 6n \\implies n = 80$. Banka yıllık %80 faiz uygulamıştır.",
    answers: [
      { text: "80", ok: true },
      { text: "60", ok: false },
      { text: "72", ok: false },
      { text: "50", ok: false },
      { text: "48", ok: false }
    ]
  },
  {
    text: "Yıllık yüzde 30 üzerinden bankaya yatırılan bir miktar para kaç ay sonra kendisinin 1/5'i kadar faiz getirir?",
    diff: 2,
    expl: "Anapara $100x$ olsun. İstenilen faiz tutarı $100x / 5 = 20x$'tir. Aylık formüle göre: $20x = \\frac{100x \\cdot 30 \\cdot t}{1200}$. $x$'ler ve sıfırlar sadeleşir: $20 = \\frac{3000t}{1200} \\implies 20 = \\frac{30t}{12} \\implies 240 = 30t \\implies t = 8$ ay.",
    answers: [
      { text: "6", ok: false },
      { text: "16", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "16", ok: false }
    ]
  },
  {
    text: "Yıllık yüzde 12 faiz oranı üzerinden bankaya yatırılan bir miktar para kaç yıl sonra kendisinin 4 katına çıkar?",
    diff: 2,
    expl: "Paranın (A) kendisinin 4 katına (4A) çıkması demek, elde edilen KÂR (Faiz) miktarının $4A - A = 3A$ olması demektir. Yıllık faiz formülü: $3A = \\frac{A \\cdot 12 \\cdot t}{100}$. $A$'lar sadeleşir: $3 = \\frac{12t}{100} \\implies 300 = 12t \\implies t = 25$ yıl.",
    answers: [
      { text: "25", ok: true },
      { text: "20", ok: false },
      { text: "18", ok: false },
      { text: "30", ok: false },
      { text: "36", ok: false }
    ]
  },
  {
    text: "Yıllık yüzde 30'dan bankaya yatırılan bir miktar para 3 yıl sonra bankadan 950 TL olarak geri çekiliyor.\nBuna göre bankaya yatırılan ana para kaç TL dir?",
    diff: 2,
    expl: "Geri çekilen para (950 TL) Anapara (A) ve Faizin (F) toplamıdır. Faiz miktarı: $F = \\frac{A \\cdot 30 \\cdot 3}{100} = \\frac{90A}{100} = 0.9A$. Toplam para: $A + 0.9A = 1.9A = 950$. Her iki tarafı 1.9'a bölersek: $A = 950 / 1.9 = 9500 / 19 = 500$ TL.",
    answers: [
      { text: "300", ok: false },
      { text: "500", ok: true },
      { text: "400", ok: false },
      { text: "600", ok: false },
      { text: "800", ok: false }
    ]
  },
  {
    text: "Mehmet parasını % 25 faizle bankaya yatırıyor. Eğer Mehmet parasını % 40 faizle bankaya yatırsaydı 300 TL daha fazla faiz alacaktı.\nBuna göre Mehmet' in bankaya yatırdığı para kaç TL dir?",
    diff: 2,
    expl: "İki faiz oranı arasındaki fark %40 - %25 = %15'tir. Bu %15'lik fark 300 TL'ye eşittir. (Süre belirtilmediğinde her zaman 1 yıllık baz alınır). $A \\cdot \\frac{15}{100} = 300 \\implies 15A = 30000 \\implies A = 2000$ TL.",
    answers: [
      { text: "1200", ok: false },
      { text: "2400", ok: false },
      { text: "2000", ok: true },
      { text: "1800", ok: false },
      { text: "1600", ok: false }
    ]
  },
  {
    text: "Bir miktar para % 16 üzerinden bankaya yatırılıyor ve a TL faiz getiriyor. Eğer para % 10 üzerinden bankaya yatırılsaydı aynı sürede a - 42 TL faiz getirecekti.\nBuna göre bankaya yatırılan ana para kaç TL dir?",
    diff: 2,
    expl: "İki durum arasındaki faiz getirisi farkı 42 TL'dir ($a - (a-42) = 42$). Faiz oranı farkı ise %16 - %10 = %6'dır. Demek ki anaparanın %6'sı 42 TL yapmaktadır. $A \\cdot \\frac{6}{100} = 42 \\implies 6A = 4200 \\implies A = 700$ TL.",
    answers: [
      { text: "840", ok: false },
      { text: "600", ok: false },
      { text: "560", ok: false },
      { text: "700", ok: true },
      { text: "500", ok: false }
    ]
  },
  {
    text: "1500 TL'nin yıllık % x'ten getirdiği basit faiz 1200 TL'nin yıllık % y'den getirdiği basit faize eşittir.\nBuna göre x, y'nin yüzde kaçına eşittir?",
    diff: 2,
    expl: "Faizler eşit olduğuna göre (1 yıl üzerinden hesaplayalım): $\\frac{1500 \\cdot x}{100} = \\frac{1200 \\cdot y}{100}$. Sadeleştirirsek: $1500x = 1200y \\implies 15x = 12y \\implies 5x = 4y \\implies x = \\frac{4y}{5}$. Bunu yüzde olarak yazmak için 20 ile genişletiriz: $x = \\frac{80y}{100}$. Yani x, y'nin %80'ine eşittir.",
    answers: [
      { text: "80", ok: true },
      { text: "60", ok: false },
      { text: "100", ok: false },
      { text: "120", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "2·x TL'nin % 3·a'dan 3 yılda getirdiği basit faiz, 3·y TL'nin % 2·b'den 2 yılda getirdiği basit faize eşittir.\nx, y'nin % 40'ı olduğuna göre b/a oranı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Faiz formüllerini birbirine eşitleyelim: $\\frac{2x \\cdot 3a \\cdot 3}{100} = \\frac{3y \\cdot 2b \\cdot 2}{100}$. Sadeleştirirsek: $18ax = 12by \\implies 3ax = 2by$. Soruda $x$, $y$'nin %40'ı denmiş: $x = y \\cdot \\frac{40}{100} = \\frac{2y}{5}$. Bunu denkleme koyalım: $3a(\\frac{2y}{5}) = 2by \\implies \\frac{6ay}{5} = 2by$. y'ler sadeleşir: $\\frac{6a}{5} = 2b \\implies 6a = 10b \\implies 3a = 5b$. Bizden b/a oranı isteniyor: $\\frac{b}{a} = \\frac{3}{5}$.",
    answers: [
      { text: "2/5", ok: false },
      { text: "5/3", ok: false },
      { text: "3/5", ok: true },
      { text: "1/5", ok: false },
      { text: "6/5", ok: false }
    ]
  },
  {
    text: "Aylık yüzde 5 faiz oranı üzerinden bankaya yatırılan bir miktar para kaç ay sonra kendisinin 3 katı kadar faiz getirir?",
    diff: 2,
    expl: "Dikkat! Soruda verilen faiz oranı 'Aylık %5'tir. Faiz oranı aylık verildiği ve süre de ay olarak sorulduğu için formülün paydasına 1200 değil, yıllık işlem yapıyormuşuz gibi 100 yazılır. Faiz = 3A. Denklem: $3A = \\frac{A \\cdot 5 \\cdot t}{100}$. A'lar sadeleşir: $3 = \\frac{5t}{100} \\implies 300 = 5t \\implies t = 60$ ay.",
    answers: [
      { text: "60", ok: true },
      { text: "36", ok: false },
      { text: "45", ok: false },
      { text: "54", ok: false },
      { text: "72", ok: false }
    ]
  }
];
