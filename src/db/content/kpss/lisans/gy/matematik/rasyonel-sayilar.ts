import type { McQ } from "../../../../types";

export const MAT_RASYONEL_SAYILAR_T3_T4: McQ[] = [
  {
    text: "8 / a = 0,12 (12 devirli)\n\nolduğuna göre a aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "0,12 devirli sayısını kesre çevirelim: Sayının tamamı (12) eksi devretmeyen kısım (0) bölü devreden kadar 9 (99) kuralıyla: 12 / 99 elde edilir. Sadeleştirirsek (3'e bölerek) 4 / 33 olur. Eşitliği yazalım: 8 / a = 4 / 33. İçler dışlar çarpımı veya payları eşitleme mantığıyla 4a = 8 · 33 => a = 2 · 33 = 66 bulunur.",
    answers: [
      { text: "66", ok: true },
      { text: "33", ok: false },
      { text: "88", ok: false },
      { text: "99", ok: false },
      { text: "11", ok: false }
    ]
  },
  {
    text: "x ve y devirli ondalık sayılar olmak üzere;\n\nx = 0,4 (4 devirli)\ny = 0,5 (5 devirli) ise\n\n1/x + 1/y toplamı kaçtır?",
    diff: 1,
    expl: "Devirli sayıları kesre çevirelim: x = 4/9 ve y = 5/9'dur. Bizden 1/x ve 1/y isteniyor, yani kesirleri ters çevireceğiz. 1/x = 9/4 ve 1/y = 9/5 olur. Toplarsak: 9/4 + 9/5. Paydaları 20'de eşitleriz: 45/20 + 36/20 = 81/20 bulunur.",
    answers: [
      { text: "16/9", ok: false },
      { text: "41/20", ok: false },
      { text: "81/20", ok: true },
      { text: "81/10", ok: false },
      { text: "16/5", ok: false }
    ]
  },
  {
    text: "a = 0,333....\nb = 0,666....\n\nolduğuna göre a + b toplamı aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Verilen sayılar aslında devirli sayılardır. a = 0,3 (devirli) = 3/9 = 1/3'tür. b = 0,6 (devirli) = 6/9 = 2/3'tür. Toplamları: 1/3 + 2/3 = 3/3 = 1'dir.",
    answers: [
      { text: "9", ok: false },
      { text: "1", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t3_q4.jpg)\n\nYukarıda verilen işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t3_q4.jpg",
    diff: 2,
    expl: "Devirli ondalık sayılarda, devreden rakam sadece 9 ise, bu sayı bir önceki rakamı 1 artırarak tam sayıya yuvarlanır. Buna göre: 14,9 (9 devirli) = 15. 17,9 (9 devirli) = 18. 11,9 (9 devirli) = 12 ve 6,9 (9 devirli) = 7'dir. İşlem: (15 + 18 - 12) / 7 = 21 / 7 = 3 olur.",
    answers: [
      { text: "5", ok: false },
      { text: "2", ok: false },
      { text: "1", ok: false },
      { text: "4", ok: false },
      { text: "3", ok: true }
    ]
  },
  {
    text: "a = 3/10, b = 3/14, c = 3/11\n\nolduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 1,
    expl: "Kesirlerin payları eşittir (hepsi 3). Payları eşit olan pozitif kesirlerde, paydası büyük olan kesir daha küçüktür. Paydaları kıyaslarsak 14 > 11 > 10 olduğundan, en küçük b, sonra c, en büyük a'dır. Sıralama: b < c < a şeklindedir.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "c < a < b", ok: false },
      { text: "c < b < a", ok: false },
      { text: "a < c < b", ok: false },
      { text: "b < c < a", ok: true }
    ]
  },
  {
    text: "x = 11/10, y = 111/100, z = 1111/1000\n\nolduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 1,
    expl: "Kesirleri ondalık sayıya çevirelim. x = 1,1. y = 1,11. z = 1,111. Basamakları eşitleyerek bakarsak: x = 1,100... y = 1,110... z = 1,111... Görüldüğü gibi en küçük x, sonra y, en büyük z'dir. Sıralama x < y < z olur.",
    answers: [
      { text: "x < y < z", ok: true },
      { text: "x < z < y", ok: false },
      { text: "y < x < z", ok: false },
      { text: "z < x < y", ok: false },
      { text: "z < y < x", ok: false }
    ]
  },
  {
    text: "a = -3/4, b = -5/6, c = -7/9\n\nolduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 2,
    expl: "Öncelikle sayıları pozitifmiş gibi düşünüp paydalarını eşitleyelim. EKOK(4, 6, 9) = 36'dır. a = 27/36, b = 30/36, c = 28/36. Pozitif olsalardı sıralama a < c < b olurdu. Ancak sayılar negatif olduğundan sıralama tam tersine döner. Yani b < c < a olur.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "a < c < b", ok: false },
      { text: "c < a < b", ok: false },
      { text: "b < c < a", ok: true },
      { text: "b < a < c", ok: false }
    ]
  },
  {
    text: "x = 13/14, y = 15/16, z = 14/15\n\nolduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 2,
    expl: "Verilen kesirlerin hepsi basit kesirdir ve pay ile payda arasındaki fark sabittir (hepsinde 1 fark var). Pay ile payda arasındaki farkın sabit olduğu pozitif basit kesirlerde, sayılar büyüdükçe kesrin değeri de büyür. (Çünkü 1 bütüne daha çok yaklaşırlar). 13 < 14 < 15 olduğundan sıralama x < z < y şeklindedir.",
    answers: [
      { text: "x < y < z", ok: false },
      { text: "x < z < y", ok: true },
      { text: "y < x < z", ok: false },
      { text: "y < z < x", ok: false },
      { text: "z < x < y", ok: false }
    ]
  },
  {
    text: "a, b, c birer reel sayı\n\na + b = 1/16\nb + c = 1/32\na + c = 1/24\n\nolduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 3,
    expl: "Verilen toplamların sonuçlarını kıyaslayalım: 1/16 > 1/24 > 1/32. Bu durumda (a+b) > (a+c) > (b+c) eşitsizliği elde edilir.\n(a+b) > (a+c) eşitsizliğinde a'lar sadeleşirse b > c kalır.\n(a+c) > (b+c) eşitsizliğinde c'ler sadeleşirse a > b kalır.\nİkisini birleştirirsek a > b > c olur. Küçükten büyüğe: c < b < a'dır.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "b < a < c", ok: false },
      { text: "b < c < a", ok: false },
      { text: "a < c < b", ok: false },
      { text: "c < b < a", ok: true }
    ]
  },
  {
    text: "x, y, z birer reel sayı\n\nx + y = 111/110\ny + z = 115/114\nx + z = 113/112\n\nolduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 3,
    expl: "Verilen kesirlerin hepsi bileşik kesirdir ve pay ile payda arasındaki fark sabittir (fark 1). Bileşik kesirlerde, pay ve payda arasındaki fark sabitse, sayılar büyüdükçe kesrin değeri KÜÇÜLÜR (çünkü 1 bütüne doğru inerler). Buna göre 111/110 > 113/112 > 115/114 olur.\nBöylece (x+y) > (x+z) > (y+z) eşitsizliği elde edilir.\nx+y > x+z => y > z.\nx+z > y+z => x > y.\nSonuç x > y > z olur. Küçükten büyüğe z < y < x'tir.",
    answers: [
      { text: "z < y < x", ok: true },
      { text: "z < x < y", ok: false },
      { text: "y < z < x", ok: false },
      { text: "y < x < z", ok: false },
      { text: "x < y < z", ok: false }
    ]
  },
  {
    text: "a, b, c negatif reel sayı\n\na · b = 15/17\nb · c = 13/15\na · c = 19/21\n\nolduğuna göre a, b, c sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 3,
    expl: "Çarpımları verilen kesirler basit kesirdir ve pay/payda farkı (2) sabittir. Sayılar büyüdükçe değer büyür: 19/21 > 15/17 > 13/15. \nYani ac > ab > bc olur.\nac > ab eşitsizliğinde her iki tarafı 'a' sayısına bölelim. Soruda a, b, c'nin NEGATİF olduğu belirtilmiştir. Negatif bir sayıya bölersek eşitsizlik yön değiştirir: c < b olur.\nab > bc eşitsizliğinde her iki tarafı negatif 'b' sayısına bölersek: a < c olur.\nBirleştirirsek: a < c < b sıralaması elde edilir.",
    answers: [
      { text: "a < b < c", ok: false },
      { text: "c < b < a", ok: false },
      { text: "a < c < b", ok: true },
      { text: "b < c < a", ok: false },
      { text: "b < a < c", ok: false }
    ]
  },
  {
    text: "x = 3,473 (3 devirli)\ny = 3,473 (73 devirli)\nz = 3,473 (473 devirli)\n\nolduğuna göre x, y, z sayılarını küçükten büyüğe doğru sıralayınız?",
    diff: 2,
    expl: "Devirli sayıların ondalık açılımlarını virgülden sonraki birkaç basamak için yazalım:\nx = 3,4733333...\ny = 3,4737373...\nz = 3,4734734...\nİlk 3 basamak (473) hepsinde aynıdır. 4. basamaklara bakarsak: x'te 3, y'de 7, z'de 4'tür. 3 < 4 < 7 olduğuna göre x < z < y sıralaması doğrudur.",
    answers: [
      { text: "x < y < z", ok: false },
      { text: "x < z < y", ok: true },
      { text: "z < y < x", ok: false },
      { text: "z < x < y", ok: false },
      { text: "y < x < z", ok: false }
    ]
  },
  {
    text: "1/(3·4) + 1/(4·5) + ......... + 1/(17·18)\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Bu tür serilerde 1/(n·(n+1)) ifadesi 1/n - 1/(n+1) şeklinde yazılabilir. Tüm terimleri bu şekilde açarsak:\n(1/3 - 1/4) + (1/4 - 1/5) + ... + (1/17 - 1/18).\nOrtadaki tüm çapraz terimler birbirini yok eder (+1/4 ile -1/4 gibi). Geriye sadece ilk terim ve son terim kalır: 1/3 - 1/18. Paydaları eşitlersek: 6/18 - 1/18 = 5/18 bulunur.",
    answers: [
      { text: "1/18", ok: false },
      { text: "1/9", ok: false },
      { text: "1/6", ok: false },
      { text: "2/9", ok: false },
      { text: "5/18", ok: true }
    ]
  },
  {
    text: "1/3 + 1/4 + 1/5 + ......... + 1/2021 = y\n\nolduğuna göre\n4/3 + 5/4 + 6/5 + ......... + 2022/2021\ntoplamının y türünden eşiti aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İkinci ifadedeki her bir kesri tam sayılı kesir olarak düşünelim: 4/3 = 1 + 1/3. Aynı şekilde 5/4 = 1 + 1/4. İkinci dizi şu hale gelir:\n(1 + 1/3) + (1 + 1/4) + ... + (1 + 1/2021).\n1/3'ten 1/2021'e kadar olan kısım soruda 'y' olarak verilmiştir. Geriye kaç tane 1 toplandığını bulmamız gerekir. Terim sayısı = Son Terim - İlk Terim + 1 = 2021 - 3 + 1 = 2019'dur. Yani 2019 tane 1 vardır. Toplam: 2019 + y (veya y + 2019) olur.",
    answers: [
      { text: "y + 2021", ok: false },
      { text: "y + 2020", ok: false },
      { text: "y + 2019", ok: true },
      { text: "y + 2018", ok: false },
      { text: "y + 2022", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t4_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/rasyonel_t4_q3.jpg",
    diff: 3,
    expl: "Paydaki sayılar a,a (a devirli) ve b,b (b devirli). Formüle göre: a,a(devirli) = a + a/9 = 10a/9. Aynı şekilde b,b(devirli) = 10b/9. Pay kısmının toplamı: 10(a+b)/9 olur. \nPaydadaki sayı ise ab ve ba iki basamaklı sayıların toplamıdır. 10a+b + 10b+a = 11(a+b) yapar.\nBölme işlemi: [10(a+b)/9] / [11(a+b)]. (a+b) ifadeleri sadeleşir. Geriye 10 / (9 · 11) = 10 / 99 kalır.",
    answers: [
      { text: "10/99", ok: true },
      { text: "10/11", ok: false },
      { text: "9/11", ok: false },
      { text: "1/11", ok: false },
      { text: "11/10", ok: false }
    ]
  },
  {
    text: "![Rasyonel İşlem](QuestionsImage/rasyonel_t4_q4.jpg)\n\nYukarıdaki ifadenin tam sayı olması için x'in en küçük değeri kaçtır?",
    img: "QuestionsImage/rasyonel_t4_q4.jpg",
    diff: 2,
    expl: "Pay kısmı: 0,8 (devirli) - 0,3 (devirli) = 8/9 - 3/9 = 5/9'dur. \nPayda kısmı: 0,09 (sadece 9 devirli) = 9/90 = 1/10'dur.\nKesir: (5/9) / (1/10) = 50/9 olur. \n50/9 + x = Tam Sayı. 50'yi 9'a bölersek 5 tam 5/9 elde ederiz. Bunu bir sonraki tam sayıya (6'ya) tamamlamak için eklenecek en küçük pozitif değer 4/9 olmalıdır. 4/9 sayısı ondalık olarak 0,4 (4 devirli) şeklinde yazılır.",
    answers: [
      { text: "0,1 (devirli)", ok: false },
      { text: "0,2 (devirli)", ok: false },
      { text: "0,3 (devirli)", ok: false },
      { text: "0,4 (devirli)", ok: true },
      { text: "0,5 (devirli)", ok: false }
    ]
  },

// ─── ÜSLÜ SAYILAR TEST - 1 & 2 ────────────────────────────────────────────────

  {
    text: "(4 + 4 + 4 + .... + 4)  [20 tane]\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "20 tane 4'ün yan yana toplanması, 20 ile 4'ün çarpılması demektir. 20 · 4 = 80.",
    answers: [
      { text: "60", ok: false },
      { text: "70", ok: false },
      { text: "80", ok: true },
      { text: "90", ok: false },
      { text: "100", ok: false }
    ]
  },
  {
    text: "(-5) + (-5) + (-5) + .... + (-5)  [30 tane]\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "30 tane (-5) sayısının toplanması, 30 · (-5) işlemiyle bulunur. Sonuç -150'dir.",
    answers: [
      { text: "-100", ok: false },
      { text: "-120", ok: false },
      { text: "-130", ok: false },
      { text: "-140", ok: false },
      { text: "-150", ok: true }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t1_q3.jpg)\n\nYukarıdaki verilere göre a / b kaçtır?",
    img: "QuestionsImage/uslu_t1_q3.jpg",
    diff: 1,
    expl: "a değeri 15 tane 3'ün toplamıdır: 15 · 3 = 45. \nb değeri 6 tane 12'nin toplamıdır: 6 · 12 = 72.\na / b oranı: 45 / 72. Her ikisini de 9 ile sadeleştirirsek 5 / 8 elde ederiz.",
    answers: [
      { text: "3/5", ok: false },
      { text: "5/8", ok: true },
      { text: "7/12", ok: false },
      { text: "6/7", ok: false },
      { text: "1/2", ok: false }
    ]
  },
  {
    text: "5 · 5 · 5 · .... · 5  [10 tane]\n\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Aynı sayının kendisiyle tekrar tekrar çarpılması üslü ifade oluşturur. 10 tane 5'in çarpımı 5¹⁰ şeklinde yazılır.",
    answers: [
      { text: "105", ok: false },
      { text: "50", ok: false },
      { text: "5¹⁰", ok: true },
      { text: "500", ok: false },
      { text: "550", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t1_q5.jpg)\n\nYukarıdaki eşitliğe göre 5 · x kaçtır?",
    img: "QuestionsImage/uslu_t1_q5.jpg",
    diff: 1,
    expl: "x ifadesinin pay kısmı 5 tane 2'nin çarpımıdır: 2⁵ = 32. Payda kısmı ise 5 tane 4'ün toplamıdır: 5 · 4 = 20. Buradan x = 32 / 20 = 8 / 5 bulunur. Bizden 5 · x isteniyor: 5 · (8 / 5) = 8.",
    answers: [
      { text: "6", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false },
      { text: "12", ok: false },
      { text: "15", ok: false }
    ]
  },
  {
    text: "Aşağıdakilerden hangisi yanlıştır?",
    diff: 1,
    expl: "Şıkları inceleyelim: 2³ = 8 (Doğru). 4² = 16 (Doğru). 5³ = 125 (Doğru). 1⁷ = 1 (Doğru). 3² = 9 olmalıdır, ancak E şıkkında 6 yazılmıştır. Bu yanlıştır.",
    answers: [
      { text: "2³ = 8", ok: false },
      { text: "4² = 16", ok: false },
      { text: "5³ = 125", ok: false },
      { text: "1⁷ = 1", ok: false },
      { text: "3² = 6", ok: true }
    ]
  },
  {
    text: "(-2)² + (-3)² - (-4)²\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Negatif sayıların çift kuvvetleri pozitiftir. (-2)² = 4. (-3)² = 9. (-4)² = 16. İşlem: 4 + 9 - 16 = 13 - 16 = -3 bulunur.",
    answers: [
      { text: "-3", ok: true },
      { text: "3", ok: false },
      { text: "12", ok: false },
      { text: "18", ok: false },
      { text: "29", ok: false }
    ]
  },
  {
    text: "(-2/3)² + (-3/2)²\nişleminin sonucu kaçtır?",
    diff: 1,
    expl: "Kare alma işlemlerini yapalım: (-2/3)² = 4/9. (-3/2)² = 9/4. Kesirleri toplayalım: 4/9 + 9/4. Paydaları 36'da eşitleriz: 16/36 + 81/36 = 97/36.",
    answers: [
      { text: "3/7", ok: false },
      { text: "36/97", ok: false },
      { text: "17/97", ok: false },
      { text: "97/36", ok: true },
      { text: "97/16", ok: false }
    ]
  },
  {
    text: "(-2²) + (-2)³ - (-1)²\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "İlk terim (-2²) ifadesinde kare sadece 2'nin üzerindedir (parantez dışı olmadığı için eksiyi etkilemez): -4 olur. İkinci terim (-2)³ tek kuvvet olduğu için negatif çıkar: -8. Üçüncü terim (-1)² çift kuvvet olduğundan 1'dir. İşlem: -4 + (-8) - 1 = -13 bulunur.",
    answers: [
      { text: "-11", ok: false },
      { text: "-12", ok: false },
      { text: "-13", ok: true },
      { text: "-14", ok: false },
      { text: "-15", ok: false }
    ]
  },
  {
    text: "5⁰ - (-3)² - (-2²)²\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "5⁰ = 1. (-3)² = 9. Üçüncü terimde içteki ifade -2² = -4'tür (çünkü kare eksiyi kapsamaz). Daha sonra dıştaki kare alınır: (-4)² = 16'dır. İşlem: 1 - 9 - 16 = -24 bulunur.",
    answers: [
      { text: "-24", ok: true },
      { text: "-25", ok: false },
      { text: "-26", ok: false },
      { text: "24", ok: false },
      { text: "23", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t1_q11.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/uslu_t1_q11.jpg",
    diff: 1,
    expl: "Pay kısmını hesaplayalım: (-2)³ = -8 ve (-3)² = 9. Toplamları -8 + 9 = 1 eder. Payda kısmını hesaplayalım: 3³ = 27 ve (-1)² = 1. Toplamları 27 + 1 = 28 eder. Sonuç 1/28'dir.",
    answers: [
      { text: "1/20", ok: false },
      { text: "1/24", ok: false },
      { text: "1/27", ok: false },
      { text: "1/28", ok: true },
      { text: "28", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t1_q12.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/uslu_t1_q12.jpg",
    diff: 2,
    expl: "Negatif üs, sayıyı ters çevirmek anlamına gelir. Pay kısmı: 2⁻¹ + 3⁻¹ = 1/2 + 1/3 = 5/6. Payda kısmı: (6/5)⁻¹ = 5/6'dır. Pay ve payda birbirine eşit olduğu için bölümlerinin sonucu 1'dir.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "1/5", ok: false },
      { text: "-1", ok: false }
    ]
  },
  {
    text: "(3⁴)^0,25 - (2⁵)^0,2\n\nişleminin sonucu kaçtır?",
    diff: 2,
    expl: "Üssün üssü kuralına göre üsler çarpılır. 0,25 kesir olarak 1/4'tür. 4 · (1/4) = 1 olduğundan ilk terim 3¹ = 3 olur. 0,2 kesir olarak 1/5'tir. 5 · (1/5) = 1 olduğundan ikinci terim 2¹ = 2 olur. İşlem: 3 - 2 = 1 bulunur.",
    answers: [
      { text: "-2", ok: false },
      { text: "-1", ok: false },
      { text: "0", ok: false },
      { text: "1", ok: true },
      { text: "2", ok: false }
    ]
  },
  {
    text: "5ˣ = 2\n\nolduğuna göre 5⁻²ˣ ifadesinin sonucu kaçtır?",
    diff: 2,
    expl: "İstenen ifade üslü sayıların özellikleri kullanılarak (5ˣ)⁻² şeklinde yazılabilir. 5ˣ yerine 2 koyarsak: 2⁻² = 1 / 2² = 1/4 bulunur.",
    answers: [
      { text: "-4", ok: false },
      { text: "-2", ok: false },
      { text: "1/2", ok: false },
      { text: "4", ok: false },
      { text: "1/4", ok: true }
    ]
  },
  {
    text: "2ˣ⁻¹ = 5\n\nolduğuna göre 4ˣ ifadesinin sonucu kaçtır?",
    diff: 2,
    expl: "Verilen denklemi açalım: 2ˣ / 2 = 5 => 2ˣ = 10 olur. Bizden 4ˣ yani (2²)ˣ isteniyor. Bu ifade aynı zamanda (2ˣ)² şeklinde yazılabilir. 10² = 100 bulunur.",
    answers: [
      { text: "125", ok: false },
      { text: "120", ok: false },
      { text: "100", ok: true },
      { text: "25", ok: false },
      { text: "20", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t1_q16.jpg)\n\nYukarıdaki eşitliğe göre verilen ifadenin a cinsinden eşiti aşağıdakilerden hangisidir?",
    img: "QuestionsImage/uslu_t1_q16.jpg",
    diff: 3,
    expl: "Verilen kesri düzenleyelim. Pay: 9ˣ⁻¹ = (3²)ˣ⁻¹ = 3²ˣ⁻². Payda: 3⁻ˣ⁻². Bölme işleminde tabanlar aynıysa üsler çıkarılır: 3²ˣ⁻² ⁻ ⁽⁻ˣ⁻²⁾ = 3²ˣ⁻² ⁺ ˣ⁺² = 3³ˣ olur. Bu ifade (3ˣ)³ demektir. Soruda 3ˣ = a olarak verilmiştir. Sonuç a³ bulunur.",
    answers: [
      { text: "-3a", ok: false },
      { text: "-a", ok: false },
      { text: "2a", ok: false },
      { text: "a³", ok: true },
      { text: "a", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t2_q1.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/uslu_t2_q1.jpg",
    diff: 2,
    expl: "Pay kısmını en küçük üslü terim olan 3ˣ parantezine alalım: 3ˣ(1 + 3¹ + 3²) = 3ˣ(13). Payda kısmını 3ˣ⁺¹ parantezine alalım: 3ˣ⁺¹(1 + 3¹ + 3²) = 3ˣ⁺¹(13). Parantez içindeki 13'ler sadeleşir. Geriye 3ˣ / 3ˣ⁺¹ kalır, bu da 1/3'e eşittir.",
    answers: [
      { text: "1/6", ok: false },
      { text: "1/3", ok: true },
      { text: "1/2", ok: false },
      { text: "1", ok: false },
      { text: "3", ok: false }
    ]
  },
  {
    text: "(-a)³ · (-a)² · (-a⁻⁴)\n\nifadesinin eşiti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "İfadelerin işaretlerini belirleyelim: (-a)³ tek kuvvet olduğu için negatif (-a³) çıkar. (-a)² çift kuvvet olduğu için pozitif (a²) çıkar. (-a⁻⁴) çift kuvvet olduğu için pozitif (a⁻⁴) çıkar. Çarpımları: (-a³) · a² · a⁻⁴ = -a³⁺²⁻⁴ = -a¹ = -a bulunur.",
    answers: [
      { text: "-a²", ok: false },
      { text: "-a", ok: true },
      { text: "a", ok: false },
      { text: "a²", ok: false },
      { text: "a³", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t2_q3.jpg)\n\nYukarıdaki işlemin sonucu kaçtır?",
    img: "QuestionsImage/uslu_t2_q3.jpg",
    diff: 2,
    expl: "Pay kısmını 5ˣ⁺¹ parantezine alalım: 5ˣ⁺¹(5² - 5) = 5ˣ⁺¹(20). Payda kısmını da 5ˣ⁺¹ parantezine alalım: 5ˣ⁺¹(1 - 5²) = 5ˣ⁺¹(-24). Pay ve paydadaki 5ˣ⁺¹ terimleri sadeleşir. Geriye 20 / -24 kalır. Her iki tarafı 4 ile sadeleştirirsek -5/6 bulunur.",
    answers: [
      { text: "-5/6", ok: true },
      { text: "-6/5", ok: false },
      { text: "-1", ok: false },
      { text: "5/6", ok: false },
      { text: "6/5", ok: false }
    ]
  },
  {
    text: "5¹² + 5¹³ = a\n\nolduğuna göre 5¹³ + 5¹⁴ ifadesinin a cinsinden eşiti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "İstenen ifadeyi 5 parantezine alırsak: 5 · (5¹² + 5¹³) olur. Parantez içindeki ifadenin soruda a'ya eşit olduğu verilmiştir. Dolayısıyla sonuç 5a olur.",
    answers: [
      { text: "a/5", ok: false },
      { text: "a", ok: false },
      { text: "a²", ok: false },
      { text: "5a", ok: true },
      { text: "5a²", ok: false }
    ]
  },
  {
    text: "![Üslü İşlem](QuestionsImage/uslu_t2_q5.jpg)\n\nYukarıdaki eşitliğe göre x kaçtır?",
    img: "QuestionsImage/uslu_t2_q5.jpg",
    diff: 2,
    expl: "Bölme işleminde tabanlar aynı ise üsler çıkarılır: 3⁽⁴ˣ⁻⁷⁾ ⁻ ⁽³ˣ⁻⁵⁾ = 3ˣ⁻² olur. Bu ifade 27'ye, yani 3³'e eşittir. Üsleri eşitlersek: x - 2 = 3 => x = 5 bulunur.",
    answers: [
      { text: "9", ok: false },
      { text: "8", ok: false },
      { text: "7", ok: false },
      { text: "6", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "2ˣ⁻² = (1/8)⁻⁵\n\nolduğuna göre x kaçtır?",
    diff: 2,
    expl: "(1/8)⁻⁵ = (8⁻¹)⁻⁵ = 8⁵ olur. 8 sayısını 2³ şeklinde yazarsak: (2³)⁵ = 2¹⁵ elde edilir. Tabanlar eşitlendi, üsleri eşitleyelim: x - 2 = 15 => x = 17.",
    answers: [
      { text: "13", ok: false },
      { text: "14", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: true },
      { text: "19", ok: false }
    ]
  },
  {
    text: "(9ᵃ⁺⁴)² = (3²ᵃ⁻²)³\n\nolduğuna göre a kaçtır?",
    diff: 2,
    expl: "Her iki tarafın da tabanını 3 yapalım. 9 = 3² olduğundan sol taraf: ((3²)ᵃ⁺⁴)² = (3²ᵃ⁺⁸)² = 3⁴ᵃ⁺¹⁶ olur. Sağ taraf: 3⁶ᵃ⁻⁶ olur. Üsleri eşitlersek: 4a + 16 = 6a - 6 => 2a = 22 => a = 11 bulunur.",
    answers: [
      { text: "9", ok: false },
      { text: "11", ok: true },
      { text: "13", ok: false },
      { text: "15", ok: false },
      { text: "17", ok: false }
    ]
  },
  {
    text: "(2a + 3)⁴ = (a + 6)⁴\n\nolduğuna göre a'nın alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 3,
    expl: "Üsler çift sayı (4) olduğu için eşitliğin sağ tarafı ile sol tarafı birbirine mutlak değerce eşittir. \nDurum 1: 2a + 3 = a + 6 => a = 3.\nDurum 2: 2a + 3 = -(a + 6) => 2a + 3 = -a - 6 => 3a = -9 => a = -3.\na'nın alabileceği değerler toplamı: 3 + (-3) = 0'dır.",
    answers: [
      { text: "-3", ok: false },
      { text: "-2", ok: false },
      { text: "0", ok: true },
      { text: "3", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "(x - 2)^(x² - 25) = 1\n\ndenklemini sağlayan x'in alabileceği farklı değerlerin toplamı kaçtır?",
    diff: 3,
    expl: "Bir üslü ifadenin 1'e eşit olması için 3 farklı durum vardır:\n1) Taban 1 olmalıdır: x - 2 = 1 => x = 3.\n2) Taban -1 olmalı ve üs çift olmalıdır: x - 2 = -1 => x = 1. Üs kısmına bakarsak: 1² - 25 = -24 (Çift). Bu durum sağlar.\n3) Üs 0 olmalı ve taban sıfırdan farklı olmalıdır: x² - 25 = 0 => x = 5 veya x = -5. Her iki değer de tabanı (x-2) sıfır yapmaz.\nGeçerli x değerleri: 3, 1, 5, -5'tir. Toplamları: 3 + 1 + 5 - 5 = 4 bulunur.",
    answers: [
      { text: "0", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  }
];
