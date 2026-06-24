import type { McQ } from "../../../../types";

// ============================================================================
// JEOLOJİK ZAMANLAR - TEST 1
// ============================================================================
export const JEOLOJIK_ZAMANLAR_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 EKPSS-LİSANS)</b><br><br>Anadolunun en eski kıvrımlarını oluşturan dağlar zamanla metamorfizmaya uğramış, sertleşmiş, aşınmış ve başlıca masif kütleleri oluşturmuşlardır.<br><br><b>Aşağıdakilerden hangisi bu kütlelerden biri değildir?</b></p>",
    diff: 2,
    expl: "Türkiye'deki masif araziler I. Jeolojik zamanda oluşmuş sert, yaşlı kütlelerdir. Yıldız Dağları, Saruhan-Menteşe, Ilgaz-Daday ve Bitlis kütleleri masif alanlara örnektir. Bolkar kütlesi (Toroslar) ise III. Jeolojik zamanda Alp orojenezi ile oluşan genç kıvrım sistemine aittir, masif değildir.",
    answers: [
      { text: "Saruhan-Menteşe kütlesi", ok: false },
      { text: "Yıldız Dağı kütlesi", ok: false },
      { text: "Ilgaz-Daday kütlesi", ok: false },
      { text: "Bolkar kütlesi", ok: true },
      { text: "Bitlis kütlesi", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi, Türkiye'nin temel arazilerini oluşturan masiflerde bulunan metamorfik taşlar arasında yer alır?</b></p>",
    diff: 1,
    expl: "Masif araziler eski ve sertleşmiş yapılar olup basınç ve sıcaklık altında metamorfizma (başkalaşım) geçirmişlerdir. Kalkerin (kireç taşı) başkalaşmasıyla oluşan Mermer, metamorfik (başkalaşım) bir taştır ve masif alanlarda sıkça görülür.",
    answers: [
      { text: "Mermer", ok: true },
      { text: "Alçıtaşı", ok: false },
      { text: "Andezit", ok: false },
      { text: "Granit", ok: false },
      { text: "Çakıltaşı", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><br>Anadolu'da jeolojik dönemler boyunca yağışlı ve nemli iklim koşullarına bağlı olarak gür bir bitki örtüsü gelişmiştir. Bu bitkilerin göl ve bataklık ortamlara birikmesi sonucu zamanla zengin kömür yatakları oluşmuştur. Bunlardan rezerv bakımından en zengin olanı, linyit yataklarıdır. Soma, Yatağan, Elbistan gibi linyit yatakları bunlardan bazılarıdır.<br><br><b>Bu yataklar aşağıdaki jeolojik dönemlerin hangisinde oluşmuştur?</b></p>",
    diff: 1,
    expl: "Türkiye'de linyit, tuz, bor ve petrol yatakları III. Jeolojik Zaman'da (Tersiyer / Senozoik) oluşmuştur. Taşkömürü ise daha eski olan I. zamanda (Paleozoyik) oluşmuştur.",
    answers: [
      { text: "Prekambriyen", ok: false },
      { text: "Paleozoyik", ok: false },
      { text: "Mesozoyik", ok: false },
      { text: "Tersiyer", ok: true },
      { text: "Kuvaterner", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ÖNLİSANS)</b><br><br>I. Tersiyer'de linyit kömürü yatakları oluşmuştur.<br>II. Kuvaterner'de boğazlar oluşmuştur.<br>III. Mesozoyik'te Toroslar oluşmuştur.<br><br><b>Türkiye arazisinin jeolojik gelişimiyle ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Tersiyer'de linyit yatakları oluşmuştur (I doğru). Kuvaterner'de Egeid karası çökerek Ege Denizi ile İstanbul ve Çanakkale boğazları oluşmuştur (II doğru). Ancak Toroslar ve Kuzey Anadolu Dağları Mesozoyik'te değil, III. Jeolojik Zaman'da (Tersiyer) meydana gelen Alp Orojenezi ile oluşmuştur (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Yukarıdaki haritada numaralandırılarak koyu renkle gösterilen yerlerden hangisi masif arazilerin bulunduğu alanlardan biri değildir?</p>",
    diff: 3,
    expl: "Haritadaki I numaralı yer Saruhan-Menteşe, II numaralı yer Ilgaz-Daday (Kastamonu), III numaralı yer Kırşehir, V numaralı yer ise Bitlis masiflerini göstermektedir. IV numaralı Doğu Karadeniz - Erzurum/Kars çevresi ise genç volkanik ve kıvrım arazilerden oluşur, masif özellik göstermez.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-LİSANS)</b><br><br>I. Ege Denizi'nin oluşması - İkinci Jeolojik Zaman<br>II. Kuzey Anadolu ve Toros Dağlarının oluşması - Üçüncü Jeolojik Zaman<br>III. İstanbul Boğazı'nın oluşması - Dördüncü Jeolojik Zaman<br><br><b>Türkiye'deki bazı coğrafi olayların meydana geldiği jeolojik zamanlarla ilgili yukarıdaki eşleştirmelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Kuzey Anadolu ve Toros Dağları Üçüncü Jeolojik Zaman'da (Tersiyer) oluşmuştur (II doğru). İstanbul ve Çanakkale Boğazları ile Ege Denizi'nin oluşumu ise Dördüncü Jeolojik Zaman'da (Kuvaterner) gerçekleşmiştir (III doğru). Ege Denizi İkinci Jeolojik zamanda oluşmamıştır (I yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>(2017 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar koyu renkle gösterilmiştir.<br><br><b>Aşağıdakilerden hangisi bu alanlar için ortak bir özelliktir?</b></p>",
    diff: 2,
    expl: "Haritada Yıldız Dağları, Menteşe yöresi, Kastamonu (Daday-Devrekani), Kırşehir, Alanya-Anamur ve Bitlis çevresi taranmıştır. Bu alanların tamamı I. Jeolojik Zaman'da (Paleozoyik) oluşmuş, sert, oturmuş ve deprem riskinin nispeten düşük olduğu masif (yaşlı temel) arazilerdir.",
    answers: [
      { text: "Karstik alanlardır.", ok: false },
      { text: "Volkanik alanlardır.", ok: false },
      { text: "Yaşlı temel arazilerdir.", ok: true },
      { text: "Doğa koruma alanlarıdır.", ok: false },
      { text: "Önemli linyit havzalarıdır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Egeid karasının çökmesiyle Akdeniz'in suları ile Karadeniz'in suları hangi jeolojik zamanda birleşmiştir?</b></p>",
    diff: 1,
    expl: "Egeid karasının çökerek Ege Denizi'nin oluşması ve Akdeniz sularının İstanbul-Çanakkale boğazlarını aşarak Karadeniz ile birleşmesi Dördüncü Jeolojik Zaman'da (Kuvaterner) meydana gelmiştir.",
    answers: [
      { text: "Paleozoik", ok: false },
      { text: "Mezozoik", ok: false },
      { text: "Tersiyer", ok: false },
      { text: "Kuvaterner", ok: true },
      { text: "Prekambrien", ok: false }
    ]
  }
];

// ============================================================================
// İÇ KUVVETLER (OROJENEZ, VOLKANİZMA, DEPREMLER) - TEST 1
// ============================================================================
export const IC_KUVVETLER_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki yeryüzü şekillerinden hangisinin oluşum sürecinde iç kuvvetler etkili olmamıştır?</b></p>",
    diff: 1,
    expl: "Meke Maarı ve Kula Volkanitleri volkanizma, Gediz Grabeni ve Süphan Dağı orojenez/volkanizma gibi iç kuvvetlerin eseridir. Akyatan Lagünü (Kıyı set gölü) ise dalga ve akıntıların biriktirmesiyle oluşan bir dış kuvvet şeklidir.",
    answers: [
      { text: "Meke Maarı", ok: false },
      { text: "Gediz Grabeni", ok: false },
      { text: "Akyatan Lagünü", ok: true },
      { text: "Kula Volkanitleri", ok: false },
      { text: "Süphan Dağı", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-LİSANS)</b><br><br>I. İstanbul ve Çanakkale boğazları<br>II. Kuzey Anadolu ve Toros Dağları<br>III. Çukurova, Bafra ve Çarşamba deltaları<br><br><b>Yukarıdakilerden hangilerinin oluşumunda orojenik hareketler etkili olmuştur?</b></p>",
    diff: 2,
    expl: "İstanbul ve Çanakkale boğazları epirojenez (kıta oluşumu) sonucu çökmeyle, deltalar ise akarsuların (dış kuvvet) taşıdığı alüvyonları biriktirmesiyle oluşmuştur. Kuzey Anadolu ve Toros Dağları ise Alp-Himalaya orojenezi (kıvrım dağları) sonucu meydana gelmiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Yukarıdaki alanlar numaralandırılarak gösterilmiştir.<br><br><b>Bu alanların hangisi genç volkanik arazilerin yaygın olduğu sahalardan biridir?</b></p>",
    img: "QuestionsImage/kpss/cografya/ic-kuvvetler_volkanizma_t1_q1.jpg",
    diff: 2,
    expl: "Haritadaki III numaralı bölge (Nevşehir, Niğde, Kayseri çevresi) Kapadokya ve Erciyes, Hasan Dağı gibi sönmüş genç volkanların bulunduğu geniş volkanik arazileri kapsar.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-ÖNLİSANS)</b><br><br><b>Kapadokya Bölgesi'nde görülen kırgıbayır topoğrafyası yaygın olarak hangi tür kayaç üzerinde gelişmiştir?</b></p>",
    diff: 1,
    expl: "Kırgıbayır (Badlands), bitki örtüsünün cılız olduğu, özellikle volkanik tüf gibi kolay aşınabilen kayaçların bulunduğu yamaçlarda sel sularının oluşturduğu yarıntılı arazilerdir.",
    answers: [
      { text: "Mermer", ok: false },
      { text: "Bazalt", ok: false },
      { text: "Tüf", ok: true },
      { text: "Kireç taşı", ok: false },
      { text: "Granit", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak koyu renkle gösterilmiştir.<br><br><b>Bu alanlardan hangisi volkanik sahalardan değildir?</b></p>",
    img: "QuestionsImage/kpss/cografya/ic-kuvvetler_volkanizma_t1_q3.jpg",
    diff: 2,
    expl: "Haritadaki I (Kula), III (Kapadokya), IV (Karacadağ) ve V (Erzurum-Kars Platosu) volkanik arazilerdir. Ancak II numaralı alan Menteşe Yöresi'dir ve masif (eski, sert, volkanik olmayan) bir arazidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2017 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Yukarıdaki haritada numaralandırılarak gösterilen alanların hangisinde volkanik araziler yaygın olarak görülür?</p>",
    img: "QuestionsImage/kpss/cografya/ic-kuvvetler_volkanizma_t1_q4.jpg",
    diff: 2,
    expl: "Haritadaki I numaralı alan Manisa (Kula) çevresidir ve Türkiye'nin en genç volkanik arazilerine (Kula Volkanitleri) ev sahipliği yapar. Diğer numaralı yerlerde volkanik araziler yaygın değildir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2011 KPSS-LİSANS)</b><br><br>I. Topraklarının mineral bakımından genellikle zengin olması<br>II. Turizm açısından önemli yer şekillerine sahip olması<br>III. Aktif volkanların bulunması<br>IV. Fay hatları ve püskürük kayaçların olduğu yerlerde bulunması<br><br><b>Yukarıdakilerden hangileri Türkiye'deki volkanik arazilerin tümü için ortak bir özelliktir?</b></p>",
    diff: 3,
    expl: "Türkiye'de aktif volkan yoktur (III yanlış). Bütün volkanik araziler turizm açısından (Kapadokya gibi) önemli yer şekillerine sahip değildir (II yanlış). Ancak volkanik arazilerin tamamı mineralce zengin topraklara sahiptir ve kırık hatları (faylar) boyunca dağılış gösterirler (I ve IV doğru).",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-LİSANS)</b><br><br><b>Türkiye'de meydana gelen tektonik hareketler sonucu oluşan ve batıda Saros Körfezi'nden başlayıp doğuda Karlıova'ya kadar uzanan fay hattı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Saros Körfezi'nden başlayıp Marmara Denizi'nin altından geçerek Karadeniz sahil şeridine paralel bir şekilde Bingöl Karlıova'ya kadar uzanan dünyanın en aktif fay hatlarından biri Kuzey Anadolu Fay Hattı'dır (KAF).",
    answers: [
      { text: "Orta Anadolu Fay Hattı", ok: false },
      { text: "Doğu Anadolu Fay Hattı", ok: false },
      { text: "Kuzey Anadolu Fay Hattı", ok: true },
      { text: "Tuz Gölü Fay Hattı", ok: false },
      { text: "Akşehir Fay Hattı", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 KPSS-LİSANS)</b><br><br>Kuzey Anadolu Fay Kuşağı, Doğu Anadolu'da Karlıova yakınlarından başlayıp Ege Denizi'ne kadar ulaşmaktadır.<br><br><b>Aşağıdaki illerden hangisi bu fay kuşağı üzerinde yer almaz?</b></p>",
    diff: 2,
    expl: "Bolu, Tokat, Yalova ve Erzincan illeri Kuzey Anadolu Fay Hattı (KAF) üzerindedir. Elazığ ise Bingöl Karlıova'dan güneye, Hatay'a doğru uzanan Doğu Anadolu Fay Hattı (DAF) üzerinde yer alır.",
    answers: [
      { text: "Bolu", ok: false },
      { text: "Tokat", ok: false },
      { text: "Yalova", ok: false },
      { text: "Elazığ", ok: true },
      { text: "Erzincan", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi, Kuzey Anadolu Fay Kuşağı'ndaki ovalardan biri değildir?</b></p>",
    diff: 2,
    expl: "Düzce, Erzincan, Merzifon ve Erbaa ovaları Kuzey Anadolu Fay Hattı (KAF) üzerinde oluşan tektonik ovalardır. Iğdır Ovası ise Doğu Anadolu Bölgesi'nde yer alır ve KAF üzerinde bulunmaz.",
    answers: [
      { text: "Düzce Ovası", ok: false },
      { text: "Erzincan Ovası", ok: false },
      { text: "Merzifon Ovası", ok: false },
      { text: "Iğdır Ovası", ok: true },
      { text: "Erbaa Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ÖNLİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak koyu renkle gösterilmiştir.<br><br><b>Bu alanların hangisinde jeotermal enerji potansiyeli daha fazladır?</b></p>",
    img: "QuestionsImage/kpss/cografya/ic-kuvvetler_depremler_t1_q4.jpg",
    diff: 1,
    expl: "Jeotermal (sıcak su) enerji potansiyeli fay hatlarının yoğun olduğu yerlerde fazladır. Ege Bölgesi (II numaralı alan) kırıklı dağ ve graben yapısından (Batı Anadolu Fay Hattı - BAF) dolayı Türkiye'de jeotermal potansiyelin en yüksek olduğu alandır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Yukarıdaki haritada numaralarla gösterilen alanların hangisinde deprem riski diğerlerinden daha azdır?</p>",
    img: "QuestionsImage/kpss/cografya/ic-kuvvetler_depremler_t1_q5.jpg",
    diff: 2,
    expl: "Türkiye'de Tuz Gölü'nün güneyi, Karaman çevresi ve Taşeli Platosu (III numaralı alan) eski ve sert (masif) arazi yapısına sahip olduğu için aktif fay hatlarına uzaktır ve deprem riski en az olan bölgelerden biridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-ORTAÖĞRETİM)</b><br><br>I. Depremler<br>II. Obruklar<br>III. Peribacaları<br>IV. Kaplıcalar<br>V. Toprak kaymaları<br><br><b>Yukarıdaki olay ve yer şekilleri göz önüne alındığında hangilerinin Türkiye'de yaygın olarak bir arada bulunması beklenir?</b></p>",
    diff: 1,
    expl: "Depremler ve kaplıcalar (sıcak su kaynakları) yer kabuğundaki zayıf, kırıklı hatlara (faylara) bağlı olarak oluşurlar. Bu nedenle Türkiye'de fay hatlarının geçtiği yerlerde bu iki olayın bir arada görülmesi beklenen bir durumdur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  }
];

// ============================================================================
// TÜRKİYE'NİN YER ŞEKİLLERİNİN GENEL ÖZELLİKLERİ - TEST 1
// ============================================================================
export const TURKIYENIN_YER_SEKILLERININ_GENEL_OZELLIKLERI_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 EKPSS-LİSANS)</b><br><br><b>Türkiye'de kırgıbayırların bazı alanlarda yoğun olarak görülmesinde aşağıdakilerden hangisinin etkisi daha fazladır?</b></p>",
    diff: 2,
    expl: "Kırgıbayır (Badlands), bitki örtüsünün zayıf/cılız olduğu, eğimli ve aşınmaya karşı dayanıksız (tüf vb.) yamaçlarda sel sularının oluşturduğu derin yarıntılardır.",
    answers: [
      { text: "Karstlaşmaya uygun alanların fazla olması", ok: false },
      { text: "Yükseltinin fazla ve dağlık bir yapının olması", ok: false },
      { text: "Bitki örtüsüz ve aşınmaya dayanıksız eğimli yamaçların bulunması", ok: true },
      { text: "Akdeniz ikliminin geniş alanlarda etkili olması", ok: false },
      { text: "Farklı özelliklere sahip toprak tiplerinin bulunması", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıda, harita üzerinde numaralandırılarak gösterilmiş beş alan ve bu alanların dördüne ait bilgi verilmiştir.<br><br>• Kalkan şekilli volkan dağı bulunur.<br>• Karstik şekiller yaygın olarak bulunur.<br>• Grabenler arasında yer alan bir horst yapısı bulunur.<br>• Buzul aşındırma ve biriktirme şekilleri bulunur.<br><br><b>Buna göre haritada hangi numarayla gösterilen alana ait bilgi verilmemiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q2.jpg",
    diff: 3,
    expl: "Kalkan şekilli volkan Karacadağ'dır (V). Karstik şekiller Teke/Taşeli yöresindedir (IV). Horst-Graben sistemi Ege Bölgesi'ndedir (III). Buzul şekilleri Doğu Karadeniz/Kaçkarlardadır (II). Haritadaki I numaralı alan Ergene Havzasıdır (düzlük) ve verilen özelliklerden hiçbirine sahip değildir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 MEB-EKYS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak gösterilmiştir.<br><br><b>Türkiye'nin yerşekilleri dikkate alındığında bu alanlarla ilgili aşağıdakilerden hangisi söylenemez?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q3.jpg",
    diff: 2,
    expl: "Haritadaki III numaralı alan (Kastamonu/Sinop güneyi civarı) dağlık ve ormanlık bir Karadeniz içi alanıdır. Rüzgâr etkisiyle oluşan yer şekilleri (kumullar, mantar kayalar) bitki örtüsünün çok cılız olduğu kurak/yarı kurak (İç Anadolu - Karapınar gibi) yerlerde yaygındır.",
    answers: [
      { text: "I numaralı alandaki dağlık saha bir horst örneğidir.", ok: false },
      { text: "II numaralı alandaki platoda karstik şekiller görülebilmektedir.", ok: false },
      { text: "III numaralı alanda rüzgâr etkisiyle oluşan yeryüzü şekilleri yaygındır.", ok: true },
      { text: "IV numaralı ovanın oluşumunda tektonik hareketler etkili olmuştur.", ok: false },
      { text: "V numaralı alanda takke buzuluna rastlanmaktadır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Eğimin fazla ve yükselti değerlerinin kısa mesafede önemli değişmeler gösterdiği yerlerin iz düşüm alanı ile gerçek alanı arasındaki fark fazladır.<br><br><b>Yukarıdaki haritada numaralandırılan eş alanlı yerlerin hangisinde bu fark daha azdır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q4.jpg",
    diff: 1,
    expl: "İzdüşüm alanı ile gerçek alan arasındaki farkın az olması için arazinin olabildiğince 'düz' olması gerekir. Haritadaki III numaralı yer Tuz Gölü'nün güneyi (Konya Ovası ve çevresi) olup Türkiye'nin en düz ve sade yer şekillerine sahip alanlarından biridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 AYT)</b><br><br>I. Dağlık ve eğimli alanların fazlalığı tarımsal etkinlikleri kısıtlamaktadır.<br>II. Topraktaki organik ve mineral madde miktarı her yerde yeterli değildir.<br>III. İç kesimlerdeki geniş düzlükler önemli tahıl üretim alanlarını oluşturur.<br>IV. Nadasa bırakılan alanlar giderek azalmaktadır.<br><br><b>Yukarıdakilerden hangileri Türkiye'de yer şekillerinin bitkisel üretim üzerindeki etkisini göstermektedir?</b></p>",
    diff: 2,
    expl: "Soru bizden doğrudan 'yer şekillerinin' etkisini istemektedir. Eğimin ve dağlık alanların tarımı kısıtlaması (I) ile geniş düzlüklerin tahıl tarımına imkan sağlaması (III) doğrudan yer şekilleriyle ilgilidir. Toprak yapısı ve nadas uygulaması yer şekli değildir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin Ege Denizi kıyılarına ait özelliklerden biri değildir?</b></p>",
    diff: 1,
    expl: "Ege Denizi kıyılarında dağlar denize dik uzandığı için 'Enine Kıyı Tipi' görülür, bu nedenle girinti-çıkıntı ve koy/körfez çoktur. 'Dalmaçya tipi kıyılar' ise Ege'de değil, Akdeniz'de (Antalya Kaş-Finike çevresi) görülür.",
    answers: [
      { text: "Kıyılar çok girintili çıkıntılıdır.", ok: false },
      { text: "Dalmaçya tipi kıyılar yaygındır.", ok: true },
      { text: "Çok sayıda ada bulunur.", ok: false },
      { text: "Kıta sahanlığı geniştir.", ok: false },
      { text: "Çok sayıda doğal liman vardır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-LİSANS)</b><br><br><b>Türkiye'nin ortalama yükseltisinin fazla olmasındaki en önemli etken aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Türkiye'nin ortalama 1132 metre gibi yüksek bir değere sahip olmasının en temel nedeni, III. Jeolojik Zaman'daki 'Alp Orojenezi' (kıvrım dağlarının oluşumu) ve IV. Jeolojik Zaman'daki 'Epirojenez' (Anadolu yarımadasının toptan yükselmesi) hareketleridir.",
    answers: [
      { text: "Karstik süreçler", ok: false },
      { text: "Buzullaşma ve buzul faaliyetleri", ok: false },
      { text: "Orojenik ve epirojenik hareketler", ok: true },
      { text: "Akarsu aşındırma ve biriktirme faaliyetleri", ok: false },
      { text: "Rüzgâr aşındırma ve biriktirme faaliyetleri", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 AYT)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak koyu renkle gösterilmiştir.<br><br><b>Bu alanların hangilerinde arazinin dağlık ve engebeli olması tarla tarımının yapılmasını daha fazla kısıtlamaktadır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q8.jpg",
    diff: 2,
    expl: "Haritadaki II numaralı alan Menteşe Yöresi (Muğla), V numaralı alan ise Doğu Karadeniz (Rize/Artvin civarı) yöresidir. Bu iki alan da oldukça dağlık ve sarp olduğu için tarla tarımı yapılabilecek düzlükler çok kısıtlıdır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "II ve V", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 MSÜ)</b><br><br>Kayseri, Niğde, Nevşehir ve Konya illeri arazilerinin yer yer engebeli bir yapıya sahip olmasında ---- önemli ölçüde etkili olurken obrukların oluşumunda ---- önemli bir paya sahiptir.<br><br><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Kayseri ve Nevşehir çevresindeki engebeli araziler (Erciyes, Hasan Dağı, Kapadokya tüfleri) volkanizma faaliyetleri sonucudur. Konya (Karapınar) çevresindeki obruklar ise yeraltı sularının kireçtaşı gibi eriyebilen 'ana kaya'yı (karstik yapı) eriterek çökertmesiyle oluşur.",
    answers: [
      { text: "kıvrılma - volkanizma", ok: false },
      { text: "volkanizma - ana kaya", ok: true },
      { text: "sel suları - volkanizma", ok: false },
      { text: "ana kaya - akarsular", ok: false },
      { text: "kıvrılma - akarsular", ok: false }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-LİSANS)</b><br><br>I. Kuzey ve güneyde Alp orojeneziyle oluşan sıradağların bulunması<br>II. Batı Anadolu'da horst ve grabenlerin bulunması<br>III. Epirojenik hareketlerle Anadolu yarımadasının yükselmesi<br>IV. Akarsu aşındırmasıyla oluşan derin vadilerin yer alması<br><br><b>Yukarıdakilerden hangileri, Türkiye arazisinin ortalama yükseltisinin fazla olmasında diğerlerinden daha etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Türkiye'yi genel olarak yüksek bir ülke yapan iki temel etken; dağlık sistemlerin kurulduğu Alp Orojenezi (I) ve Anadolu kütlesinin blok halinde toptan yükselmesini sağlayan Epirojenik hareketlerdir (III). Vadiler, yüksekliğin nedeni değil sonucudur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br>Türkiye genel hatlarıyla yüksek, dağlık ve engebeli bir arazi yapısına sahiptir.<br><br><b>Bu durumun ortaya çıkmasında aşağıdakilerden hangisi daha az etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Orojenez (kıvrım dağları), epirojenez (toptan yükselme), akarsuların araziyi derin yarması ve aktif fay hatlarına bağlı kırılmalar engebeyi yaratan faktörlerdir. 'Farklı kayaç türlerinin bulunması' doğrudan yüksek veya engebeli olmayı yaratan ana bir kuvvet değildir.",
    answers: [
      { text: "Alp orojenez kuşağında bulunması", ok: false },
      { text: "Epirojenez ile yükselmesi", ok: false },
      { text: "Akarsu aşındırmasının fazla olması", ok: false },
      { text: "Aktif fayların bulunması", ok: false },
      { text: "Farklı kayaç türlerinin bulunması", ok: true }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br><b>Türkiye'nin jeomorfolojik özellikleri dikkate alındığında aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 2,
    expl: "Türkiye'de yükseltisi 3000 metreyi aşan büyük volkanik dağlar (Örn: Ağrı, Süphan, Erciyes) üzerinde güncel takke buzulları veya eski buzul izleri bulunmaktadır. 'Buzullar bulunmamaktadır' ifadesi yanlıştır.",
    answers: [
      { text: "Erzurum-Kars-Ardahan Platosu'nun oluşumunda akıcı lavların yayılması etkilidir.", ok: false },
      { text: "Taşeli Platosu'nda karstlaşma etkilidir.", ok: false },
      { text: "Üçüncü Zaman'da geniş alan kaplayan göller zamanla karalaşmıştır.", ok: false },
      { text: "Ege Bölgesi'ndeki doğu-batı uzantılı ovalar birer grabendir.", ok: false },
      { text: "Türkiye'deki volkanik dağlar üzerinde buzullar bulunmamaktadır.", ok: true }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ÖNLİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada numaralandırılarak koyu renkle gösterilmiş beş doğrultu verilmiştir.<br><br><b>Yer şekli özellikleri göz önüne alındığında, doğrultu boyunca yükselti farkının en fazla olduğu yer aşağıdakilerden hangisidir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q13.jpg",
    diff: 3,
    expl: "I numaralı alanda Batı Toroslar (Bey Dağları) kıyı çizgisinden aniden yükselir. 0 metreden (deniz seviyesi) kısa bir mesafe içinde 2500-3000 metrelere çıkıldığı için en kısa mesafede yükselti farkının en fazla olduğu yerdir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ORTAÖĞRETİM)</b><br><br>Akdeniz ve Ege Denizi'nin kıyı kesimlerinde iklim özellikleri benzer olduğu hâlde, Ege kıyılarında zeytin yetişme alanları daha geniştir.<br><br><b>Bu durumun nedeni aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Ege Bölgesi'nde dağlar denize dik uzandığı için denizel etki (Akdeniz iklimi) vadiler boyunca (grabenler) iç kesimlere kadar rahatça sokulabilir. Bu da zeytin gibi ürünlerin daha geniş bir alanda yetişmesini sağlar.",
    answers: [
      { text: "Dağların uzanışı", ok: true },
      { text: "Yıllık yağış tutarı", ok: false },
      { text: "Deniz etkisi", ok: false },
      { text: "Ortalama yükselti", ok: false },
      { text: "Akarsu ağının genişliği", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br>Ege Bölgesi, genellikle horst ve graben sistemlerini meydana getiren tektonik hareketlerle şekillenmiştir.<br><br><b>Buna göre, aşağıdakilerden hangisi bu şekillenmenin bir sonucu değildir?</b></p>",
    diff: 1,
    expl: "Ege Bölgesi'nde dağların (horstların) denize dik (doğu-batı yönlü) uzanması ve aralarında çöküntü ovaları (grabenler) bulunması nedeniyle kıyı ile iç kesimler arasındaki ulaşım 'zor değil, aksine oldukça kolaydır'. Ulaşımın zor olduğu yerler dağların denize paralel uzandığı Akdeniz ve Karadeniz kıyılarıdır.",
    answers: [
      { text: "Akarsuların doğu-batı yönünde akması", ok: false },
      { text: "Kıyı ile iç kesimler arasındaki ulaşımın zor olması", ok: true },
      { text: "Kıyıların çok fazla girintili-çıkıntılı olması", ok: false },
      { text: "Kıyılarda çok sayıda doğal liman bulunması", ok: false },
      { text: "Denizel hava kütlelerinin iç kısımlara kolay erişebilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>(2013 KPSS-LİSANS)</b><br><br><b>Türkiye'de Doğu Karadeniz kıyı kesimine ait aşağıdaki özelliklerin hangisinde, yer şekillerinin etkisi yoktur?</b></p>",
    diff: 1,
    expl: "Bölgenin dağlık ve engebeli olması tarım alanlarının az olmasına, nüfusun kıyıda sıkışmasına ve ulaşımın zor olmasına neden olur. Ancak yer altı kaynaklarının (madenlerin) dağılışı yer şekilleriyle değil, arazinin jeolojik yapısıyla (kayaların içeriğiyle) ilgilidir.",
    answers: [
      { text: "Halkın bir kısmının hayvancılığa yönelmesinde", ok: false },
      { text: "Kıyıyla iç kesimler arasında kara yolu ulaşımının zor olmasında", ok: false },
      { text: "Nüfusun, dar kıyı kesiminde yoğunlaşmasında", ok: false },
      { text: "Tarım alanlarının az olmasında", ok: false },
      { text: "Yer altı kaynaklarının dağılışında", ok: true }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Haritada verilen X ve Y yerleşim birimleriyle ilgili aşağıdakilerden hangisi kesin olarak söylenir?</p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-genel_t1_q17.jpg",
    diff: 2,
    expl: "Haritaya baktığımızda Y merkezinin X merkezine göre daha doğuda yer aldığını görüyoruz. Dünya batıdan doğuya doğru döndüğü için doğudaki merkezlerde yerel saat daha ileridir ve güneş daha erken doğar. Bu nedenle X beldesinde güneş Y'ye göre daha geç doğar.",
    answers: [
      { text: "X beldesinde güneş daha geç doğar.", ok: true },
      { text: "Y beldesinde makilik alanlar daha geniş yer kaplar.", ok: false },
      { text: "X beldesinin ortalama yükseltisi daha azdır.", ok: false },
      { text: "Y beldesinde güneşli gün sayısı daha fazladır.", ok: false },
      { text: "Y beldesinde karstik şekillere daha çok rastlanır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıda verilen ekonomik etkinliklerden hangisinin, topoğrafik koşullara bağlı olarak geliştiği söylenemez?</b></p>",
    diff: 2,
    expl: "Yaylacılık, hidroelektrik santraller, kış turizmi ve kıyı ovalarındaki tarım tamamen yükselti ve yer şekilleri (topoğrafya) ile ilgilidir. Ancak Çatalca-Kocaeli'de sanayinin gelişmesi yer şekillerinin düzlüğünden çok sermaye, ulaşım ve pazar gibi beşeri faktörlere bağlıdır.",
    answers: [
      { text: "Karadeniz yaylalarında hayvancılık etkinliklerinin yapılması", ok: false },
      { text: "Kıyı ovalarında tarımsal etkinliklerin yoğun olması", ok: false },
      { text: "Palandöken Dağlarında kış turizminin yoğun olması", ok: false },
      { text: "Doğu ve Güneydoğu Anadolu'da hidroelektrik santrallerinin fazla olması", ok: false },
      { text: "Çatalca ve Kocaeli platolarında endüstriyel etkinliklerin gelişmiş olması", ok: true }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'de ortalama yükseltinin fazla olması sonucunda ortaya çıkan bir durum değildir?</b></p>",
    diff: 1,
    expl: "Depremler, ülkenin ortalama yükseltisi veya engebesi ile ilgili bir durum değildir. Depremler yer kabuğundaki kırıklar (fay hatları) ve tektonik hareketlerle ilgilidir. Yükseltinin fazla olması ulaşımı zorlaştırır, sıcaklığı düşürür ve kışların sert geçmesine neden olur.",
    answers: [
      { text: "Şiddetli depremlerin sıkça yaşanması", ok: true },
      { text: "Kış mevsiminde bazı göl ve akarsu yüzeylerinin donması", ok: false },
      { text: "Kış mevsiminde kara yolu ve hava yolu ulaşımının zorlaşması", ok: false },
      { text: "Doğal bitki örtüsü olarak çayırların geniş yer kaplaması", ok: false },
      { text: "Yıllık ortalama sıcaklık değerinin düşük olması", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin kıyı kesimlerinin ortak özelliğidir?</b></p>",
    diff: 2,
    expl: "Tüm kıyı bölgelerimizde (Karadeniz, Marmara, Ege, Akdeniz) denizin ılımanlaştırıcı etkisinden dolayı kışlar iç kesimlere göre daha ılık geçer, bu nedenle kar yağışlı gün sayısı ve don olayları azdır. Diğer seçenekler (kıta sahanlığı, karstik arazi vs.) kıyıdan kıyıya farklılık gösterir.",
    answers: [
      { text: "Doğal limanlar sayıca fazladır.", ok: false },
      { text: "Karstik arazi yaygındır.", ok: false },
      { text: "Akarsuların akış hızı fazladır.", ok: false },
      { text: "Geniş bir kıta sahanlığı vardır.", ok: false },
      { text: "Kar yağışlı gün sayısı azdır.", ok: true }
    ]
  },
  {
    text: "<p><b>(2011 KPSS-LİSANS)</b><br><br>Akdeniz Bölgesi'nin dağlık ve platoluk kesimlerinin jeomorfolojik özellikleri,<br>I. yaylacılık,<br>II. ticaret,<br>III. turizm,<br>IV. ulaşım<br><br><b>etkinliklerinden hangilerini olumlu yönde etkilemiştir?</b></p>",
    diff: 2,
    expl: "Dağlık ve yüksek kesimler sıcak yaz aylarında serinlemek için 'Yaylacılık' (I) faaliyetlerini ve sahip olduğu doğal güzellikler/kış şartları ile doğa/kış 'Turizmini' (III) olumlu yönde etkiler. Ticaret ve ulaşım ise engebeli araziden olumsuz etkilenir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2011 KPSS-LİSANS)</b><br><br>İzmir'in merkez ilçesine bağlı bir köye kara yoluyla ulaşabilmek için ortalama on kilometre yol almak gerekirken Kütahya'da kuş uçumu mesafesi aynı olan bir köye on beş kilometre yol almak gerekmektedir.<br><br><b>Bu durum, aşağıdakilerden hangisiyle açıklanabilir?</b></p>",
    diff: 1,
    expl: "Kuş uçumu (harita üzerindeki düz çizgi) mesafe aynı olmasına rağmen karayolu mesafesi uzuyorsa, o arazide yolun mecburen dağların ve vadilerin etrafından dolandığı anlaşılır. Bu durum doğrudan yer şekillerinin engebeliği ile ilgilidir.",
    answers: [
      { text: "Yerleşme birimlerinin sıklığıyla", ok: false },
      { text: "Doğal bitki örtüsünün farklılığıyla", ok: false },
      { text: "İklim koşullarının farklılığıyla", ok: false },
      { text: "Tarım alanlarının genişliğiyle", ok: false },
      { text: "Yer şekillerinin engebeliğiyle", ok: true }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-ÖNLİSANS)</b><br><br><b>Türkiye'nin yüksek ve engebeli bir ülke olmasının aşağıdaki ekonomik etkinliklerden hangisi üzerinde etkisi yoktur?</b></p>",
    diff: 2,
    expl: "Madenlerin yeryüzünde bulunması veya çıkarılması, yer şekillerinin (topoğrafyanın) engebeli olup olmamasına değil; arazinin jeolojik yaşına ve yapısına bağlıdır.",
    answers: [
      { text: "Kış turizmi", ok: false },
      { text: "Büyükbaş hayvancılık", ok: false },
      { text: "Yaylacılık", ok: false },
      { text: "Madencilik", ok: true },
      { text: "Orman işletmeciliği", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-LİSANS)</b><br><br><b>Türkiye'nin aşağıdaki özelliklerinden hangisi, yükseltinin fazla olmasının sonucu değildir?</b></p>",
    diff: 3,
    expl: "Kuzey Anadolu ve Toros Sıradağlarının genelde doğu-batı yönünde uzanması, Türkiye'nin kuzeyden ve güneyden (Avrasya ve Afrika/Arap levhaları tarafından) sıkıştırılmasının bir sonucudur. Dağların uzanış yönü, yükseltinin fazla olmasının bir sonucu değildir.",
    answers: [
      { text: "Bitki türleri bakımından zengin olması", ok: false },
      { text: "Kara yolu ve demir yolu yapım maliyetinin yüksek olması", ok: false },
      { text: "Sıra dağların genelde doğu batı yönünde uzanması", ok: true },
      { text: "Nüfus dağılışının düzensiz olması", ok: false },
      { text: "Yaylacılığın önemli bir etkinlik olması", ok: false }
    ]
  }
];

// ============================================================================
// DAĞLAR - TEST 1
// ============================================================================
export const DAGLAR_TEST_1: McQ[] = [
  {
    text: "<p><b>(2025 MEB-EKYS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak gösterilmiştir.<br><br><b>Bu alanlarda bulunan dağ sıraları aşağıdakilerin hangisinde doğru verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-daglar_t1_q1.jpg",
    diff: 3,
    expl: "Haritada I numara Batı Toroslar'da Geyik Dağları'nı, II numara Orta Toroslar'da Aladağlar'ı (veya Bolkar), III numara ise İç Anadolu'da Tecer Dağları'nı (Sivas çevresi) göstermektedir. Geyik (I), Aladağlar (II) ve Tecer (III) sıralaması D seçeneğinde doğru verilmiştir.",
    answers: [
      { text: "I: Dedegöl, II: Bolkar, III: Kaçkar", ok: false },
      { text: "I: Geyik, II: Bey, III: Kaçkar", ok: false },
      { text: "I: Bolkar, II: Geyik, III: Tecer", ok: false },
      { text: "I: Geyik, II: Aladağlar, III: Tecer", ok: true },
      { text: "I: Aladağlar, II: Bolkar, III: Bey", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 KPSS-LİSANS)</b><br><br><b>Üçüncü Jeolojik Zaman'da, Toros Dağları'nın oluşumunda aşağıdakilerden hangisi etkili olmuştur?</b></p>",
    diff: 1,
    expl: "Toros Dağları ve Kuzey Anadolu Dağları, III. Jeolojik Zaman'da (Tersiyer) meydana gelen 'Alp Orojenezi' (kıvrım hareketleri) sonucu oluşmuştur.",
    answers: [
      { text: "Alp orojenezi", ok: true },
      { text: "Buzullaşma", ok: false },
      { text: "Deniz seviyesi alçalması", ok: false },
      { text: "Akarsu aşındırması", ok: false },
      { text: "Dalga ve akıntılar", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada beş alan numaralandırılarak gösterilmiştir.<br><br><b>Bu alanların hangilerinde dağlık sahalar daha az yer kaplar?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-daglar_t1_q3.jpg",
    diff: 2,
    expl: "Haritadaki I numara Küre Dağları, II numara İç Anadolu (Tuz Gölü kuzeyi, nispeten düz), III numara Orta Toroslar (Bolkar/Aladağlar), IV numara Güneydoğu Anadolu'nun güneyi (Harran/Ceylanpınar düzlükleri), V numara ise Doğu Karadeniz Dağlarıdır. Dağlık sahaların en az olduğu (en düz) yerler II ve IV'tür.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve V", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "II ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'deki volkanik dağlardan biridir?</b></p>",
    diff: 1,
    expl: "Ilgaz, Canik, Istranca ve Akdağ kıvrım/kırık dağlarına örnektir. Süphan Dağı (Bitlis/Muş civarı) ise Doğu Anadolu'daki sönmüş volkanik dağlardan biridir.",
    answers: [
      { text: "Ilgaz", ok: false },
      { text: "Canik", ok: false },
      { text: "Süphan", ok: true },
      { text: "Istranca", ok: false },
      { text: "Akdağ", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 MEB-EKYS)</b><br><br>Alp-Himalaya Orojenik Kuşağı içerisinde yer alan Türkiye'de Kuzey Anadolu Dağları ve Toros Dağları iki önemli dağ sırasını oluşturur.<br><br><b>Aşağıda verilen bu dağ sıraları ile içerisindeki bazı dağ eşleştirmelerinden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Küre Dağları, Kuzey Anadolu Dağları (Karadeniz) sistemi içinde yer alırken; Dedegöl Dağları, Toroslar (Akdeniz) sistemi içinde yer alır. Bu eşleştirme C seçeneğinde doğru verilmiştir.",
    answers: [
      { text: "Kuzey Anadolu: Canik / Toroslar: Köroğlu", ok: false },
      { text: "Kuzey Anadolu: Tahtalı / Toroslar: Yalnızçam", ok: false },
      { text: "Kuzey Anadolu: Küre / Toroslar: Dedegöl", ok: true },
      { text: "Kuzey Anadolu: Bolkar / Toroslar: Giresun", ok: false },
      { text: "Kuzey Anadolu: Ilgaz / Toroslar: Çimen", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><br><b>Türkiye'nin güneyindeki en uç noktasından kuzeyindeki en uç noktasına çizilecek doğrusal bir hat boyunca seyahat edecek bir kişinin sırasıyla aşağıdaki dağlardan hangileri ile karşılaşması beklenir?</b></p>",
    diff: 3,
    expl: "Hatay (en güney) bölgesinden yola çıkan biri önce Nur (Amanos) Dağları'nı geçer. İç Anadolu'ya doğru ilerlerken Sivas çevresinde Tahtalı (veya Tecer/Binboğa uzantıları) ile karşılaşır. En kuzeye (Sinop) ulaştığında ise Küre Dağları'nı aşması gerekir.",
    answers: [
      { text: "Amanos dağları, Tahtalı dağları, Küre dağları", ok: true },
      { text: "Küre dağları, Ilgaz Dağları, Bolkar Dağları", ok: false },
      { text: "Yıldız Dağları, Tecer Dağları, Aydın Dağları", ok: false },
      { text: "Tahtalı dağları, Ilgaz Dağları, Küre dağları", ok: false },
      { text: "Köroğlu dağları, Munzur Dağları, Amanos dağları", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı dağ sıraları numaralandırılarak gösterilmiştir.<br><br><b>Bu dağ sıralarının adları aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-daglar_t1_q7.jpg",
    diff: 2,
    expl: "I numaralı yer Göller Yöresi çevresindeki Sultan Dağları'nı, II numaralı yer Kastamonu-Çankırı sınırındaki Ilgaz Dağları'nı, III numaralı yer ise Erzincan-Tunceli çevresindeki Mercan (Munzur) Dağları'nı gösterir.",
    answers: [
      { text: "I: Sultan, II: Ilgaz, III: Mercan", ok: true },
      { text: "I: Ilgaz, II: Mercan, III: Sultan", ok: false },
      { text: "I: Sultan, II: Mercan, III: Ilgaz", ok: false },
      { text: "I: Mercan, II: Sultan, III: Ilgaz", ok: false },
      { text: "I: Mercan, II: Ilgaz, III: Sultan", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ORTAÖĞRETİM)</b><br><br>Normal faylar arasında yükselen bloklar horst yapıları olarak adlandırılmaktadır. Türkiye'deki bazı dağlar büyük horst yapılarından oluşmuştur.<br><br><b>Aşağıdakilerden hangisi, bu şekilde oluşmuş dağlardan biri değildir?</b></p>",
    diff: 1,
    expl: "Boz, Aydın, Yunt ve Madra dağları Ege Bölgesi'nde kırılma sonucu oluşan 'Horst' (kırık) dağlarıdır. Tahtalı Dağları ise Toroslar sistemi içinde yer alan ve kıvrılma (orojenez) sonucu oluşan dağlardır.",
    answers: [
      { text: "Boz Dağlar", ok: false },
      { text: "Aydın Dağları", ok: false },
      { text: "Yunt Dağı", ok: false },
      { text: "Tahtalı Dağları", ok: true },
      { text: "Madra Dağı", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-LİSANS)</b><br><br>Karadeniz kıyılarına paralel uzanan Kuzey Anadolu Dağları, birbirine paralel birkaç sıra halinde uzanır.<br><br><b>Aşağıdakilerden hangisi bu dağ sıralarından biri değildir?</b></p>",
    diff: 1,
    expl: "Canik, Küre, Mescit ve Ilgaz dağları Karadeniz Bölgesi'nde Kuzey Anadolu Dağ sistemi içerisinde yer alır. Binboğa Dağları ise Akdeniz Bölgesi'nde Toroslar sistemi içinde bulunur.",
    answers: [
      { text: "Canik Dağları", ok: false },
      { text: "Küre Dağları", ok: false },
      { text: "Mescit Dağları", ok: false },
      { text: "Binboğa Dağları", ok: true },
      { text: "Ilgaz Dağları", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Türkiye, genel olarak engebeli ve dağlık bölgelerin geniş alanlar kapladığı bir ülkedir.<br><br><b>Buna göre yukarıdaki haritada numaralandırılarak gösterilen yerlerden hangisi dağlık bölgelere örnek gösterilebilir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-daglar_t1_q10.jpg",
    diff: 2,
    expl: "Haritada I (Ergene), III (Tuz Gölü çevresi), IV (Çukurova), V (Güneydoğu düzlükleri) nispeten düz alanlardır. II numaralı alan ise Menteşe Yöresi (Muğla) olup oldukça dağlık ve engebeli bir bölgedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 KPSS-LİSANS)</b><br><br>I. Tektonik hareketler<br>II. Volkanik faaliyetler<br>III. Kimyasal ayrışma<br>IV. Kayaç türü<br><br><b>Türkiye'de dağların geniş alanlar kaplamasında yukarıdakilerden hangileri daha fazla etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Türkiye'deki dağların büyük çoğunluğu kıvrılma/kırılma (tektonik hareketler - Alp Orojenezi) ve yanardağ patlamaları (volkanik faaliyetler) sonucu oluşmuştur. Kimyasal ayrışma ve kayaç türü yer şekillerini aşındırır/şekillendirir ama 'dağ oluşumunu' sağlayan ana kuvvetler değildir.",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdakilerden hangisi ülkemizdeki volkanik dağlardan biridir?</b></p>",
    diff: 1,
    expl: "Kaz, Aladağlar, Kaçkar ve Küre dağları orojenez (kıvrım/kırık) ile oluşmuştur. Kayseri'deki Erciyes Dağı ise Türkiye'nin en büyük sönmüş volkanik dağlarından biridir.",
    answers: [
      { text: "Kaz Dağı", ok: false },
      { text: "Aladağlar", ok: false },
      { text: "Kaçkar Dağları", ok: false },
      { text: "Erciyes Dağı", ok: true },
      { text: "Küre Dağları", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-ORTAÖĞRETİM)</b><br><br>I. Ilgaz<br>II. Bolkar<br>III. Melendiz<br>IV. Tendürek<br><br><b>Yukarıdaki dağlardan hangileri volkanik faaliyet sonucu oluşmuştur?</b></p>",
    diff: 2,
    expl: "Ilgaz ve Bolkar kıvrım dağlarıdır. Melendiz (İç Anadolu) ve Tendürek (Doğu Anadolu) ise volkanik patlamalar sonucu oluşmuş sönmüş volkan dağlarıdır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki dağlık alanlardan hangisi oluşum özellikleri bakımından diğerlerinden farklıdır?</b></p>",
    diff: 1,
    expl: "Istranca (Yıldız), Munzur, Canik ve Bolkar dağları kıvrılma (orojenez) sonucu oluşan dağlardır. Nemrut (Bitlis) ise volkanik bir dağdır (farklıdır).",
    answers: [
      { text: "Nemrut", ok: true },
      { text: "Istranca", ok: false },
      { text: "Munzur", ok: false },
      { text: "Canik", ok: false },
      { text: "Bolkar", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki dağlardan hangisi volkaniktir?</b></p>",
    diff: 1,
    expl: "Aydın, Kaçkar, Canik ve Bolkar kıvrım/kırık dağlarıdır. Erciyes Dağı volkaniktir.",
    answers: [
      { text: "Aydın Dağı", ok: false },
      { text: "Erciyes Dağı", ok: true },
      { text: "Kaçkar Dağları", ok: false },
      { text: "Canik Dağları", ok: false },
      { text: "Bolar Dağları", ok: false }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-ORTAÖĞRETİM)</b><br><br>Türkiye'nin ortalama yükseltisinin fazla olmasında etkili olan dağlar genel olarak;<br>I. kıvrılma,<br>II. kırılma,<br>III. volkanizma<br>ile meydana gelmişlerdir.<br><br><b>Numaralandırılan bu etmenler, aşağıdaki dağların hangilerinin oluşumunda daha fazla etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Küre Dağları Karadeniz'de 'kıvrılma' (I) ile, Madra Dağı Ege'de 'kırılma' (II) ile, Karacadağ ise Güneydoğu/İç Anadolu'da 'volkanizma' (III) ile oluşmuştur. Bu eşleştirme B seçeneğinde doğru verilmiştir.",
    answers: [
      { text: "I: Bozdağlar, II: Aydın Dağları, III: Erciyes Dağı", ok: false },
      { text: "I: Küre Dağları, II: Madra Dağı, III: Karacadağ", ok: true },
      { text: "I: Yunt Dağı, II: Süphan Dağı, III: Madra Dağı", ok: false },
      { text: "I: Aydın Dağları, II: Küre Dağları, III: Yıldız Dağları", ok: false },
      { text: "I: Yıldız Dağları, II: Köroğlu Dağları, III: Ağrı Dağı", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Ülkemizin önemli zirvelerinden biri olan Demirkazık Tepesi aşağıdaki dağlarımızın hangisinde yer almaktadır?</b></p>",
    diff: 3,
    expl: "Demirkazık Tepesi (3756m), Orta Toroslar'da Niğde, Kayseri ve Adana sınırları içinde yer alan Aladağlar kütlesinin en yüksek zirvesidir.",
    answers: [
      { text: "Kaçkarlar Dağları", ok: false },
      { text: "Aladağlar", ok: true },
      { text: "Tahtalı Dağları", ok: false },
      { text: "Bolkar Dağları", ok: false },
      { text: "Küre Dağları", ok: false }
    ]
  },
  {
    text: "<p><b>(2013 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdakilerden hangisi Kuzey Anadolu Dağlarından biridir?</b></p>",
    diff: 1,
    expl: "Sultan, Geyik (Toroslar), Tecer (İç Anadolu) ve Madra (Ege) dağlarıdır. Canik Dağları ise Orta Karadeniz'de (Samsun gerisi) yer alan ve Kuzey Anadolu Dağları sistemine ait olan bir dağ sırasıdır.",
    answers: [
      { text: "Sultan Dağları", ok: false },
      { text: "Tecer Dağları", ok: false },
      { text: "Geyik Dağları", ok: false },
      { text: "Madra Dağları", ok: false },
      { text: "Canik Dağları", ok: true }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-LİSANS)</b><br><br><b>Türkiye'nin dağlarıyla ilgili aşağıda verilen bilgilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Türkiye'de dağların yükseltisi ve güncel (aktif) buzullar batıdan doğuya doğru gidildikçe artar. Güncel takke buzulları Cilo, Ağrı, Süphan gibi ülkenin doğusundaki yüksek dağlar üzerinde toplanmıştır.",
    answers: [
      { text: "Karadeniz ve Akdeniz kıyıları boyunca uzanan sıradağlar, kırılmayla oluşmuştur.", ok: false },
      { text: "Güncel buzullar çoğunlukla ülkenin doğusundaki dağlar üzerindedir.", ok: true },
      { text: "Ülkenin batısında çok sayıda volkanik dağ vardır.", ok: false },
      { text: "Dağların yükseltisi doğudan batıya doğru gidildikçe artmaktadır.", ok: false },
      { text: "En yüksek zirve kıvrımlı dağlar üzerindedir.", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><i>(Haritalı Soru)</i><br><br><b>Melendiz Volkanik Dağı kaç numaralı daire içinde yer alır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-daglar_t1_q20.jpg",
    diff: 2,
    expl: "Melendiz Dağı İç Anadolu Bölgesi'nde, Niğde-Aksaray çevresinde yer alır. Haritada bu konuma denk gelen daire III numaralı alandır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2009 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıdaki sıradağlardan hangisi diğerlerine göre daha doğuda yer alır?</b></p>",
    diff: 2,
    expl: "Eğrigöz (Ege), Bolkar (Orta Toroslar), Tecer (Sivas), Erciyes (Kayseri) daha batıdadır. Kargapazarı Dağları ise Doğu Anadolu'da (Erzurum çevresi) yer aldığı için hepsinden daha doğudadır.",
    answers: [
      { text: "Eğrigöz Dağı", ok: false },
      { text: "Bolkar Dağları", ok: false },
      { text: "Tecer Dağları", ok: false },
      { text: "Kargapazarı Dağları", ok: true },
      { text: "Erciyes", ok: false }
    ]
  }
];

// ============================================================================
// TÜRKİYE'NİN PLATOLARI - TEST 1
// ============================================================================
export const TURKIYENIN_PLATOLARI_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi Orta Anadolu'da yer alan platolardan biridir?</b></p>",
    diff: 1,
    expl: "Haymana Platosu Ankara çevresinde, yani Orta (İç) Anadolu Bölgesi'nde yer alır. Taşeli Akdeniz'de, Ardahan Doğu Anadolu'da, Gaziantep Güneydoğu Anadolu'da, Çatalca-Kocaeli ise Marmara Bölgesi'ndedir.",
    answers: [
      { text: "Haymana", ok: true },
      { text: "Taşeli", ok: false },
      { text: "Ardahan", ok: false },
      { text: "Gaziantep", ok: false },
      { text: "Çatalca-Kocaeli", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br>I. Uzunyayla platosunda buzul şekilleri yaygındır.<br>II. Cihanbeyli platosunda derin kanyon vadiler yaygındır.<br>III. Kapadokya platosunda volkanik şekiller yaygındır.<br><br><b>Türkiye'nin platolarıyla ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Kapadokya platosu volkanik tüflerden oluştuğu için volkanik şekiller (peribacaları) yaygındır (III doğru). Uzunyayla'da buzul şekilleri bulunmaz (yükseltisi buzullaşma sınırında değildir). Cihanbeyli platosu ise dümdüz ve sığ vadilerden oluşur, kanyon vadi görülmez.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ORTAÖĞRETİM)</b><br><br>Türkiye'de geniş yer kaplayan platolarda en fazla yapılan ekonomik faaliyet tarım ve hayvancılıktır.<br><br><b>Aşağıdaki platolardan hangisi bu özelliğin dışında kalmaktadır?</b></p>",
    diff: 1,
    expl: "Çatalca-Kocaeli platosu, Türkiye'nin en gelişmiş, nüfusun ve sanayinin en yoğun olduğu bölgesidir. Bu platoda tarım ve hayvancılık yerine sanayi, ticaret ve hizmet sektörleri ön plandadır.",
    answers: [
      { text: "Erzurum - Kars - Ardahan", ok: false },
      { text: "Gaziantep", ok: false },
      { text: "Çatalca - Kocaeli", ok: true },
      { text: "Uzunyayla", ok: false },
      { text: "Haymana", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-LİSANS)</b><br><br>Volkanik faaliyet sonucu yüzeye çıkan lavlardan oluşan arazinin akarsular tarafından aşındırılmasıyla lav platoları oluşur.<br><br><b>Aşağıdaki platolardan hangisi bu tür oluşum özelliğine sahiptir?</b></p>",
    diff: 1,
    expl: "Türkiye'deki en tipik ve en büyük lav platosu örneği, Doğu Anadolu Bölgesi'nde yer alan Erzurum-Kars (ve Ardahan) platolarıdır.",
    answers: [
      { text: "Çatalca-Kocaeli", ok: false },
      { text: "Cihanbeyli", ok: false },
      { text: "Haymana", ok: false },
      { text: "Taşeli", ok: false },
      { text: "Erzurum-Kars", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ORTAÖĞRETİM)</b><br><br>Platolar, geniş düzlüklerin akarsular tarafından derin bir şekilde yarılarak parçalanması sonucu oluşmuşlardır. Türkiye'de platolara daha çok Orta Anadolu Bölgesi'nde rastlanır.<br><br><b>Aşağıdakilerden hangisi bu bölgede yer alan platolardan biri değildir?</b></p>",
    diff: 1,
    expl: "Obruk, Bozok, Haymana ve Uzunyayla platoları İç (Orta) Anadolu Bölgesi'nde yer alırken, Taşeli Platosu Akdeniz Bölgesi'nde yer alan karstik bir platodur.",
    answers: [
      { text: "Obruk Platosu", ok: false },
      { text: "Bozok Platosu", ok: false },
      { text: "Taşeli Platosu", ok: true },
      { text: "Haymana Platosu", ok: false },
      { text: "Uzunyayla Platosu", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-LİSANS)</b><br><br><b>Oluşumunda Fırat Nehri ve kollarının etkili olduğu plato aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Fırat Nehri ve kolları Güneydoğu Anadolu Bölgesi'nden geçer. Bu bölgedeki geniş düzlükleri yararak Şanlıurfa Platosu ve Gaziantep Platosu'nun oluşumunda etkili olmuştur.",
    answers: [
      { text: "Cihanbeyli Platosu", ok: false },
      { text: "Taşeli Platosu", ok: false },
      { text: "Bozok Platosu", ok: false },
      { text: "Obruk Platosu", ok: false },
      { text: "Şanlıurfa Platosu", ok: true }
    ]
  },
  {
    text: "<p><b>(2019 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Obruk Platosu, adını üzerinde yer alan çok sayıdaki obruktan almıştır. Yüzeyi genel olarak 1100-1150 metre arasında değişen ve çevresindeki ovalara göre yükseltisi fazla olmayan bu plato, özellikle yer altı karst gelişiminin etkin olduğu bir sahadır.<br><br><b>Yukarıda açıklaması verilen plato, haritada numaralandırılarak gösterilen alanların hangisinde yer almaktadır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-platolar_t1_q7.jpg",
    diff: 2,
    expl: "Obruk Platosu, İç Anadolu Bölgesi'nde Tuz Gölü'nün güney ve güneydoğusunda (Konya, Karapınar civarı) yer alır. Haritada bu konuma karşılık gelen yer III numaralı alandır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 MEB-EKYS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak kırmızı renkle gösterilmiştir.<br><br><b>Bu alanlardan hangisi karstik platodur?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-platolar_t1_q8.jpg",
    diff: 2,
    expl: "Türkiye'nin en belirgin karstik platoları Akdeniz Bölgesi'nde yer alan Teke ve Taşeli platolarıdır. Haritada III numaralı alan (Antalya'nın doğusu, Mersin'in batısı) Taşeli Platosu'dur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2015 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Platolar, Türkiye arazisi içinde geniş yer kaplamaktadır. Bu alanlarda genellikle kuru tarım ve hayvancılık faaliyetleri yapılmaktadır.<br><br><b>Buna göre yukarıdaki haritada numaralarla gösterilen platolardan hangisi bu faaliyetlerin her ikisi bakımından bu genellemeye uymamaktadır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-platolar_t1_q9.jpg",
    diff: 3,
    expl: "Haritadaki II numaralı alan İstanbul ve Kocaeli'yi kapsayan Çatalca-Kocaeli Platosu'dur. Bu plato tarım ve hayvancılıktan çok sanayi, ticaret ve yoğun yerleşme özellikleriyle diğer tüm platolardan farklıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><i>(Haritalı Soru)</i><br><br><b>Numaralandırılarak verilen plato alanları hangi seçenekte doğru sıralanmıştır?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-platolar_t1_q10.jpg",
    diff: 2,
    expl: "Haritada 1 numara Ankara güneyindeki Haymana Platosunu, 2 numara Tuz Gölü güneyindeki Obruk Platosunu, 3 numara ise Yozgat çevresindeki Bozok Platosunu göstermektedir.",
    answers: [
      { text: "1: Haymana, 2: Uzunyayla, 3: Bozok", ok: false },
      { text: "1: Haymana, 2: Obruk, 3: Bozok", ok: true },
      { text: "1: Cihanbeyli, 2: Obruk, 3: Haymana", ok: false },
      { text: "1: Cihanbeyli, 2: Uzunyayla, 3: Obruk", ok: false },
      { text: "1: Obruk, 2: Haymana, 3: Cihanbeyli", ok: false }
    ]
  }
];

// ============================================================================
// TÜRKİYE'NİN OVALARI - TEST 1
// ============================================================================
export const TURKIYENIN_OVALARI_TEST_1: McQ[] = [
  {
    text: "<p><b>(2025 MEB AGS)</b><br><br>Türkiye'de tektonik kökenli ovaların büyük bir kısmı aktif fay kuşakları üzerinde yer alır.<br><br><b>Aşağıdakilerden hangisi bu kuşaklar üzerinde yer alan ovalardan biri değildir?</b></p>",
    diff: 2,
    expl: "Amik, Muş, Düzce ve Niksar ovaları aktif fay kuşakları üzerinde oluşan tektonik çöküntü ovalarıdır. Ergene Ovası da tektonik (çöküntü) kökenlidir ancak aktif ve büyük bir deprem üreten fay kuşağı (KAF/DAF gibi) üzerinde yer almaz; masif arazilerle çevrili nispeten daha durağan bir çöküntü alanıdır.",
    answers: [
      { text: "Amik Ovası", ok: false },
      { text: "Muş Ovası", ok: false },
      { text: "Düzce Ovası", ok: false },
      { text: "Ergene Ovası", ok: true },
      { text: "Niksar Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 KPSS-ÖNLİSANS)</b><br><br>Türkiye'de ovalar bulundukları yere ve oluşumlarında etkili olan süreçlere bağlı olarak farklı yükseltilerde bulunur.<br><br><b>Buna göre aşağıdaki ovalardan hangisinin ortalama yükseltisi daha azdır?</b></p>",
    diff: 1,
    expl: "Muş, Kütahya, Develi ve Pasinler ovaları iç kesimlerde yer alan yüksek rakımlı tektonik ovalardır. Akhisar Ovası ise Ege Bölgesi'nde, denize çok daha yakın ve graben sistemleri içinde yer aldığı için yükseltisi en az olandır.",
    answers: [
      { text: "Muş Ovası", ok: false },
      { text: "Kütahya Ovası", ok: false },
      { text: "Develi Ovası", ok: false },
      { text: "Pasinler Ovası", ok: false },
      { text: "Akhisar Ovası", ok: true }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-ORTAÖĞRETİM)</b><br><br>Bir grup öğrenci, Güneydoğu Anadolu Projesi'nin kapsadığı illerde yer alan ovalarda araştırma yapacaktır.<br><br><b>Bu öğrencilerin aşağıdaki ovalardan hangisine gitmesi beklenmez?</b></p>",
    diff: 1,
    expl: "Ceylanpınar, Harran, Suruç ve Viranşehir ovaları Güneydoğu Anadolu Bölgesi'nde yer alan ve GAP kapsamında sulanan ovalardır. Amik Ovası ise Akdeniz Bölgesi'nde (Hatay) yer alır ve GAP kapsamında değildir.",
    answers: [
      { text: "Ceylanpınar", ok: false },
      { text: "Harran", ok: false },
      { text: "Suruç", ok: false },
      { text: "Amik", ok: true },
      { text: "Viranşehir", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada üç kıyı ovası numaralandırılarak gösterilmiştir.<br><br><b>Bu ovaları oluşturan akarsular aşağıdakilerin hangisinde verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-ovalar_t1_q4.jpg",
    diff: 2,
    expl: "I numaralı yer Sakarya Nehri'nin oluşturduğu Karasu Ovası/Deltasıdır. II numaralı yer Göksu Nehri'nin oluşturduğu Silifke Deltasıdır. III numaralı yer ise Yeşilırmak'ın oluşturduğu Çarşamba Deltasıdır.",
    answers: [
      { text: "I: Göksu, II: Yeşilırmak, III: Sakarya", ok: false },
      { text: "I: Yeşilırmak, II: Göksu, III: Sakarya", ok: false },
      { text: "I: Sakarya, II: Göksu, III: Yeşilırmak", ok: true },
      { text: "I: Göksu, II: Sakarya, III: Yeşilırmak", ok: false },
      { text: "I: Sakarya, II: Yeşilırmak, III: Göksu", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br>Türkiye'deki ovalarda ana ekonomik faaliyet tarımsal etkinliklerdir. Bununla birlikte büyük şehirlere yakın olan bazı ovalarda ulaşım ve sanayi gibi diğer faaliyetler de önemli oranda yapılmaktadır.<br><br><b>Aşağıdaki ovalardan hangisinin belirtilen tarım dışı faaliyetlerde yoğun bir kullanımı söz konusudur?</b></p>",
    diff: 1,
    expl: "İnegöl Ovası (Bursa) çevresindeki büyük şehirlere yakınlığı ve gelişmiş kara yolları üzerinde olması nedeniyle Türkiye'de sanayinin (özellikle mobilya sanayisinin) ve yerleşmenin en yoğun olduğu ovalardan biridir.",
    answers: [
      { text: "Tercan", ok: false },
      { text: "Pasinler", ok: false },
      { text: "Tefenni", ok: false },
      { text: "Pınarbaşı", ok: false },
      { text: "İnegöl", ok: true }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ORTAÖĞRETİM)</b><br><br>Ovaların bir kısmı akarsular tarafından taşınan malzemenin denizi doldurması ile oluşmaktadır.<br><br><b>Aşağıdakilerden hangisi bu türde oluşan ovalardan biri değildir?</b></p>",
    diff: 1,
    expl: "Akarsuların denizi doldurmasıyla 'Delta Ovaları' oluşur. Bakırçay, Silifke, Bafra ve Menemen ovaları delta ovasıdır. Elmalı Ovası (Antalya) ise eriyebilen kayaçların çökmesiyle oluşan 'Karstik' bir ovadır.",
    answers: [
      { text: "Elmalı Ovası", ok: true },
      { text: "Bakırçay Ovası", ok: false },
      { text: "Silifke Ovası", ok: false },
      { text: "Bafra Ovası", ok: false },
      { text: "Menemen Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki ovalardan hangisi küçük ölçekli bir fiziki haritada yeşil renkle gösterilir?</b></p>",
    diff: 1,
    expl: "Fiziki haritalarda 0-500 metre arası yükseltiler yeşil renkle gösterilir. Bu nedenle deniz kenarında bulunan delta ve kıyı ovaları yeşildir. Çarşamba Ovası (Samsun) deniz kıyısında yer alan bir delta ovasıdır.",
    answers: [
      { text: "Tercan", ok: false },
      { text: "Iğdır", ok: false },
      { text: "Çarşamba", ok: true },
      { text: "Aksaray", ok: false },
      { text: "Malatya", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br>Türkiye'de iç kesimlerdeki ovaların büyük çoğunluğunun yükseltisi 500 metrenin üzerindedir.<br><br><b>Aşağıdaki ovalardan hangisinin ortalama yükseltisi bu genellemenin dışında kalır?</b></p>",
    diff: 2,
    expl: "Pasinler, Malatya, Aksaray ve Konya ovaları iç kesimlerde yer alır ve rakımları 1000 metrenin üzerindedir. Güneydoğu Anadolu'daki Ceylanpınar Ovası ise iç kesimde yer almasına rağmen ortalama yükseltisi 400-500 metre civarında olup diğerlerine göre çok daha alçaktır.",
    answers: [
      { text: "Ceylanpınar", ok: true },
      { text: "Pasinler", ok: false },
      { text: "Malatya", ok: false },
      { text: "Aksaray", ok: false },
      { text: "Konya", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi Güneydoğu Anadolu Projesi kapsamında sulanan ovalardan biridir?</b></p>",
    diff: 1,
    expl: "GAP (Güneydoğu Anadolu Projesi) Şanlıurfa, Mardin, Diyarbakır gibi illeri kapsar. Harran Ovası bu projenin en önemli sulama ve tarım merkezlerinden biridir.",
    answers: [
      { text: "Elazığ Ovası", ok: false },
      { text: "Harran Ovası", ok: true },
      { text: "Elbistan Ovası", ok: false },
      { text: "Amik Ovası", ok: false },
      { text: "Yüksekova", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-LİSANS)</b><br><br>Tektonik hareketler sonucunda sınırları büyük ölçüde faylarla belirlenmiş olan çöküntü alanlarına akarsularla taşınan sedimanların birikmesiyle tektonik kökenli ovalar oluşmuştur.<br><br><b>Aşağıdakilerden hangisi bu tür ovalardan biri değildir?</b></p>",
    diff: 1,
    expl: "Muş, Erzincan, Amik ve Suluova fay hatları üzerindeki tektonik çöküntü ovalarıdır. Bafra Ovası ise Kızılırmak'ın taşıdığı alüvyonları Karadeniz kıyısında biriktirmesiyle oluşan bir Delta ovasıdır.",
    answers: [
      { text: "Bafra Ovası", ok: true },
      { text: "Muş Ovası", ok: false },
      { text: "Erzincan Ovası", ok: false },
      { text: "Amik Ovası", ok: false },
      { text: "Suluova", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki ovalardan hangisinin oluşumunda etkili olan faktörler diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "Çarşamba, Menemen, Silifke ve Çukurova ovaları akarsu biriktirmesi sonucu oluşan (dış kuvvet etkili) Delta ovalarıdır. Elmalı Ovası (Antalya) ise kireçtaşının kimyasal yollarla erimesiyle oluşan Karstik bir ovadır.",
    answers: [
      { text: "Çarşamba Ovası", ok: false },
      { text: "Elmalı Ovası", ok: true },
      { text: "Menemen Ovası", ok: false },
      { text: "Silifke Ovası", ok: false },
      { text: "Çukurova", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 MEB-EKYS)</b><br><br>I. Kızılırmak - Bafra<br>II. Aksu - Silifke<br>III. Gediz - Menemen<br>IV. Filyos - Çarşamba<br><br><b>Yukarıdaki akarsu ve oluşturduğu ova eşleştirmelerinden hangileri doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "Kızılırmak Bafra deltasını (I), Gediz Nehri Menemen deltasını (III) oluşturur. Silifke deltasını Aksu değil Göksu Nehri oluşturur. Çarşamba deltasını ise Filyos değil Yeşilırmak oluşturur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 MSÜ)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı ovalık alanlar numaralandırılarak gösterilmiştir.<br><br><b>Bu alanlardan hangilerinin oluşumunda tektonik hareketlerin etkisi daha fazla olmuştur?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-ovalar_t1_q13.jpg",
    diff: 3,
    expl: "Haritadaki III (Çarşamba) ve V (Çukurova) akarsu biriktirmesiyle oluşan delta ovalarıdır. II numaralı alan Kuzey Anadolu Fay Hattı üzerindeki Düzce/Bolu tektonik ovasını, IV numaralı alan ise Batı Anadolu'daki tektonik çöküntü alanı olan Büyük Menderes grabenini gösterir. Tektonik olanlar II ve IV'tür.",
    answers: [
      { text: "I ve III", ok: false },
      { text: "I ve V", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 KPSS-LİSANS)</b><br><br>Türkiye'de;<br>I. tektonik hareketler sonucunda oluşan çöküntü alanlarında gelişen,<br>II. akarsuların taşıdığı alüvyonların deniz kıyısında birikmesiyle oluşan,<br>III. kireç taşının çözünmesi sonucunda başlıca karstik süreçlerle şekillenen ovalar yaygın olarak görülmektedir.<br><br><b>Buna göre I, II ve III numaralı süreçlere bağlı gelişen ovalara ait örnekler aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "Suluova Kuzey Anadolu Fay Hattı üzerindeki 'tektonik' (I) bir ovadır. Çarşamba Ovası Karadeniz kıyısındaki bir 'delta' (II) ovasıdır. Elmalı Ovası ise Antalya çevresindeki 'karstik' (III) bir ovadır.",
    answers: [
      { text: "I: Suluova, II: Çarşamba Ovası, III: Elmalı Ovası", ok: true },
      { text: "I: Erzincan Ovası, II: Niksar Ovası, III: Antalya Ovası", ok: false },
      { text: "I: Silifke Ovası, II: Bafra Ovası, III: Tefenni Ovası", ok: false },
      { text: "I: Niksar Ovası, II: Elmalı Ovası, III: Çarşamba Ovası", ok: false },
      { text: "I: Tefenni Ovası, II: Suluova, III: Düzce Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi graben içerisinde oluşmuş ovalardan biri değildir?</b></p>",
    diff: 1,
    expl: "Acıpayam, Küçük Menderes, Bakırçay ve Gediz ovaları Ege Bölgesi'ndeki kırılmalar sonucu çöken graben (tektonik) ovalarıdır. Çarşamba Ovası ise faylanma ile değil, akarsuyun (Yeşilırmak) denizi doldurmasıyla oluşan bir delta ovasıdır.",
    answers: [
      { text: "Çarşamba", ok: true },
      { text: "Acıpayam", ok: false },
      { text: "Küçük Menderes", ok: false },
      { text: "Bakırçay", ok: false },
      { text: "Gediz", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ORTAÖĞRETİM)</b><br><br>I. Erzurum - Karstik<br>II. Bafra - Delta<br>III. Gediz - Delta<br><br><b>Yukarıdakilerin hangilerinde ova ve ovanın oluşum türü doğru eşleştirilmiştir?</b></p>",
    diff: 1,
    expl: "Bafra ve Gediz deniz kıyısında akarsuların getirdiği alüvyonlarla oluşan delta ovalarıdır (II ve III doğru). Erzurum Ovası ise karstik değil, fay hatlarına bağlı olarak oluşan 'tektonik' bir ovadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi karstik kökenli bir ova değildir?</b></p>",
    diff: 1,
    expl: "Muğla, Kestel, Elmalı ve Suğla (TAKKE-M şifresi ile bilinen) eriyebilen kalkerli arazide oluşan karstik polyelerdir (ovalar). Tercan (Erzincan) ise fay hatları üzerindeki tektonik bir ovadır.",
    answers: [
      { text: "Tercan", ok: true },
      { text: "Muğla", ok: false },
      { text: "Kestel", ok: false },
      { text: "Elmalı", ok: false },
      { text: "Suğla", ok: false }
    ]
  },
  {
    text: "<p><b>(2015 KPSS-LİSANS)</b><br><br><b>Aşağıdaki ova ve oluşum kökeni eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Ergene Ovası, Marmara Bölgesi'nde Trakya'nın iç kısımlarında yer alan ve toptan çökmeyle oluşan tektonik bir ovadır. Deniz kıyısında olmadığı için delta ovası olması imkânsızdır.",
    answers: [
      { text: "Elmalı – Karstik", ok: false },
      { text: "Bafra – Delta", ok: false },
      { text: "Nazilli – Tektonik", ok: false },
      { text: "Merzifon – Tektonik", ok: false },
      { text: "Ergene – Delta", ok: true }
    ]
  },
  {
    text: "<p><b>(2015 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki ovalarımızdan hangisinin ortalama yükseltisi daha fazladır?</b></p>",
    diff: 2,
    expl: "Düzce (~150m), Çarşamba ve Bafra (Delta, ~0m) deniz seviyesine yakındır. Harran (~400m) civarıdır. Erzincan Ovası ise Doğu Anadolu Bölgesi'nde yer aldığı için yükseltisi en fazla olandır (~1200m).",
    answers: [
      { text: "Düzce Ovası", ok: false },
      { text: "Erzincan Ovası", ok: true },
      { text: "Çarşamba Ovası", ok: false },
      { text: "Harran (Altınbaşak) Ovası", ok: false },
      { text: "Bafra Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2015 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdakilerden hangisi delta ovası değildir?</b></p>",
    diff: 1,
    expl: "Çukurova, Çarşamba, Bafra ve Silifke deniz kenarında akarsu biriktirmesiyle oluşan büyük delta ovalarımızdır. Konya Ovası ise İç Anadolu Bölgesi'nde yer alan, eski göl tabanı olan tektonik bir ovadır.",
    answers: [
      { text: "Çukurova", ok: false },
      { text: "Çarşamba Ovası", ok: false },
      { text: "Konya Ovası", ok: true },
      { text: "Bafra Ovası", ok: false },
      { text: "Silifke Ovası", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ÖNLİSANS)</b><br><br>Bir Türkiye fiziki haritası incelendiğinde Çukurova'nın yeşil, Konya Ovası'nın sarı, Erzurum Ovası'nın kahverengi ile gösterilmesi aşağıdakilerin hangisiyle ilgilidir?</p>",
    diff: 1,
    expl: "Fiziki haritalarda renkler arazinin bitki örtüsünü değil, doğrudan yükselti basamaklarını gösterir. 0-500m Yeşil (Çukurova), 500-1000m Sarı (Konya), 1500m ve üzeri Kahverengi (Erzurum) ile ifade edilir.",
    answers: [
      { text: "Bitki örtülerinin farklılığıyla", ok: false },
      { text: "Eğim derecelerinin farklılığıyla", ok: false },
      { text: "Yükseltilerinin farklılığıyla", ok: true },
      { text: "Toprak türlerinin farklılığıyla", ok: false },
      { text: "Jeolojik yapılarının farklılığıyla", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br>Ovalar; tarım, yerleşme, sanayi kuruluşu için uygun alanları oluşturur.<br><br><b>Buna göre, aşağıdaki ovalardan hangisi diğerlerinden farklı bir özellik göstermektedir?</b></p>",
    diff: 2,
    expl: "Konya, Erzincan, Bursa ve Eskişehir ovalarında tarımın yanı sıra ulaşım kolaylığı ve stratejik konumdan dolayı sanayi tesisleri ve yoğun yerleşmeler kurulmuştur. Muş Ovası ise Doğu Anadolu'da şiddetli kış koşulları ve ulaşım zorluğu nedeniyle sanayi kuruluşu açısından en elverişsiz ve gelişmemiş ovadır.",
    answers: [
      { text: "Konya Ovası", ok: false },
      { text: "Erzincan Ovası", ok: false },
      { text: "Bursa Ovası", ok: false },
      { text: "Eskişehir Ovası", ok: false },
      { text: "Muş Ovası", ok: true }
    ]
  },
  {
    text: "<p><b>(2013 KPSS-LİSANS)</b><br><br><b>Bir Türkiye fiziki haritasında, yaklaşık aynı boylam üzerinde olan iki ovanın farklı renklerle gösterilmesi aşağıdakilerden hangisine bağlanabilir?</b></p>",
    diff: 1,
    expl: "Fiziki haritalarda renk farklılığı sadece ve sadece yükselti farkını belirtmek için kullanılır. Ovaların aynı boylamda (kuzey-güney hizasında) olması yükseltilerinin de aynı olacağı anlamına gelmez (Örn: Bafra ovası 0m yeşil iken, aynı boylamdaki Elbistan ovası 1150m sarıdır).",
    answers: [
      { text: "Eğim değerlerinin farklı olmasına", ok: false },
      { text: "Yüz ölçümlerinin farklı olmasına", ok: false },
      { text: "Yüksekliklerinin farklı olmasına", ok: true },
      { text: "Enlem derecelerinin farklı olmasına", ok: false },
      { text: "Bitki örtülerinin farklı olmasına", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdakilerden hangisi deniz kıyısında yer alan ovamızdır?</b></p>",
    diff: 1,
    expl: "Düzce, Niksar, Altınbaşak (Harran) ve Pasinler ovaları Türkiye'nin iç kısımlarında, kara içlerinde yer alırlar. Bafra Ovası ise Kızılırmak'ın Karadeniz'e döküldüğü yerde oluşan kıyı (delta) ovasıdır.",
    answers: [
      { text: "Düzce Ovası", ok: false },
      { text: "Bafra Ovası", ok: true },
      { text: "Niksar Ovası", ok: false },
      { text: "Altınbaşak Ovası", ok: false },
      { text: "Pasinler Ovası", ok: false }
    ]
  }
];

// ============================================================================
// DENİZLER VE KÖRFEZLER - TEST 1
// ============================================================================
export const DENIZLER_VE_KORFEZLER_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki körfezlerden hangisi diğerlerine göre Ege Denizi'nin daha kuzeyinde yer almaktadır?</b></p>",
    diff: 1,
    expl: "Ege kıyılarımızdaki körfezler kuzeyden güneye doğru; Saros, Edremit, Çandarlı, İzmir, Kuşadası, Güllük ve Gökova şeklinde sıralanır. Seçeneklerde verilenler arasında en kuzeyde yer alanı Edremit Körfezi'dir.",
    answers: [
      { text: "Edremit Körfezi", ok: true },
      { text: "Kuşadası Körfezi", ok: false },
      { text: "Güllük Körfezi", ok: false },
      { text: "Çandarlı Körfezi", ok: false },
      { text: "İzmir Körfezi", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br><b>Bozcaada'dan Aydın Kuşadası'na gemiyle kıyı boyunca seyahat eden bir kişinin sırasıyla aşağıdaki körfezlerin hangilerinden geçmesi beklenir?</b></p>",
    diff: 2,
    expl: "Bozcaada (Çanakkale) açıklarından güneye (Aydın/Kuşadası yönüne) doğru hareket eden bir gemi, harita üzerinde sırasıyla Edremit (Balıkesir), Çandarlı (İzmir kuzeyi) ve İzmir körfezlerinden geçerek Kuşadası'na ulaşır.",
    answers: [
      { text: "Saros - Edremit - Çandarlı", ok: false },
      { text: "Edremit - Saros - İzmir", ok: false },
      { text: "Güllük - İzmir - Çandarlı", ok: false },
      { text: "Çandarlı - Edremit - Güllük", ok: false },
      { text: "Edremit - Çandarlı - İzmir", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Osman Gazi Köprüsü aşağıdaki körfezlerden hangisinin iki kıyısını birbirine bağlar?</b></p>",
    diff: 1,
    expl: "Osman Gazi Köprüsü, Marmara Denizi'nin doğu uzantısı olan İzmit Körfezi'nin iki yakasını (Dilovası ile Hersek Burnu) birbirine bağlayarak İstanbul-İzmir otoyolunun geçişini sağlar.",
    answers: [
      { text: "İzmit", ok: true },
      { text: "Saroz", ok: false },
      { text: "Erdek", ok: false },
      { text: "Gemlik", ok: false },
      { text: "Edremit", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 KPSS-LİSANS)</b><br><br>Karadeniz'de tuzluluk oranının Akdeniz'den daha az olmasında;<br>I. büyük akarsularla beslenmesi,<br>II. buharlaşmanın daha az olması,<br>III. derinliğin fazla olması,<br>IV. kirliliğin yüksek olması<br><br><b>faktörlerinden hangileri etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Karadeniz'in tuzluluk oranının düşük olmasının temel nedenleri; enlemden dolayı güneş ışınlarını daha eğik alması ve buna bağlı buharlaşmanın az olması (II) ile Kızılırmak, Yeşilırmak, Sakarya gibi büyük akarsularla (bol tatlı suyla) beslenmesidir (I).",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada Türkiye kıyılarına ait üç yer numaralandırılarak gösterilmiştir.<br><br><b>Bu yerlerin kıta sahanlıkları, genişten dara doğru aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-denizler-korfezler_t1_q5.jpg",
    diff: 3,
    expl: "Haritadaki yerleri incelediğimizde; III numaralı yer Ege kıyılarıdır ve dağlar denize dik uzandığı için kıta sahanlığı en geniş olan yerdir. II numaralı yer Çukurova deltasıdır, delta oluşabildiğine göre kıta sahanlığı geniştir. I numaralı yer ise Doğu Karadeniz'dir, dağlar kıyıya çok yakın ve paralel olduğu için kıta sahanlığı en dar olan yerdir. Genişten dara sıralama: III (Ege) > II (Çukurova) > I (Doğu Karadeniz) şeklindedir.",
    answers: [
      { text: "I, II, III", ok: false },
      { text: "II, I, III", ok: false },
      { text: "II, III, I", ok: false },
      { text: "III, I, II", ok: false },
      { text: "III, II, I", ok: true }
    ]
  },
  {
    text: "<p><b>(2015 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki denizlerimizden hangisinin toplam kıyı uzunluğu daha fazladır?</b></p>",
    diff: 1,
    expl: "Ege Bölgesi'nde dağların denize dik uzanması nedeniyle girinti, çıkıntı, koy, körfez ve yarımada sayısı çok fazladır. Bu zikzaklı yapı (enine kıyı tipi), Ege Denizi'nin Türkiye'nin en uzun kıyı şeridine sahip denizi olmasını sağlamıştır.",
    answers: [
      { text: "Ege Denizi", ok: true },
      { text: "Akdeniz", ok: false },
      { text: "Karadeniz", ok: false },
      { text: "Marmara Denizi", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br>Türkiye'de ekonomik balıkçılık açısından Karadeniz önemli bir yer tutmaktadır. Ancak Karadeniz'de 200 metrenin altındaki derinliklerde canlı yaşamamaktadır.<br><br><b>Bunun nedeni aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Karadeniz'de 200 metrenin altındaki derinliklerde zehirli bir gaz olan hidrojen sülfür (kükürtlü hidrojen) yoğun olarak bulunduğu ve oksijen tükendiği için deniz canlılarının yaşaması imkânsızdır.",
    answers: [
      { text: "Güneş ışınlarının 200 metreden fazla derinlikte etkili olmaması", ok: false },
      { text: "Karadeniz'e dökülen bazı nehirlerin taşıdığı kimyasal atıklar", ok: false },
      { text: "200 metreden fazla derinlikte bulunan kükürtlü hidrojen gazı", ok: true },
      { text: "Karadeniz tabanındaki volkanik aktiviteler", ok: false },
      { text: "200 metreden fazla derinlikte su sıcaklığının canlı varlığına engel olması", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-ORTAÖĞRETİM)</b><br><i>(Haritalı Soru)</i><br><br>İzmir ile Yunanistan'ın Dedeağaç yerleşmesi arasında turizm faaliyetinde bulunan bir yat firması, İzmir Körfezi'nden hareket edip Türkiye'nin kıyı çizgisini takip ederek sırasıyla bazı körfezlere uğramaktadır.<br><br><b>Buna göre, haritada numaralandırılan körfezler aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-denizler-korfezler_t1_q8.jpg",
    diff: 2,
    expl: "İzmir'den kuzeye doğru hareket eden yat; sırasıyla I numaralı yerdeki Çandarlı Körfezi'ne (İzmir kuzeyi), ardından II numaralı yerdeki Edremit Körfezi'ne (Balıkesir) ve Çanakkale Boğazı'nı geçmeden hemen yukarıda yer alan III numaralı Saros Körfezi'ne uğrar.",
    answers: [
      { text: "I: Çandarlı, II: Edremit, III: Saros", ok: true },
      { text: "I: Güllük, II: Gökova, III: Gemlik", ok: false },
      { text: "I: Saros, II: Erdek, III: Çandarlı", ok: false },
      { text: "I: Erdek, II: Edremit, III: Gemlik", ok: false },
      { text: "I: Çandarlı, II: Gökova, III: Saros", ok: false }
    ]
  }
];

// ============================================================================
// GÖLLER - TEST 1
// ============================================================================
export const GOLLER_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 KPSS-LİSANS)</b><br><br>Bazı göller, vadilerin önlerinin birikinti yelpazesiyle tıkanması sonucunda oluşur.<br><br><b>Türkiye'de yer alan aşağıdaki göllerden hangisi bu şekilde oluşmuştur?</b></p>",
    diff: 1,
    expl: "Açıklamada 'Alüvyal set gölü' tanımlanmıştır. Vadilerin önünün alüvyonlarla (birikinti yelpazesi) tıkanmasıyla oluşan göllere örneğin Ankara'daki Eymir ve Mogan gölleri, Ege'deki Bafa (Çamiçi) ve Akdeniz'deki Köyceğiz gölleri verilebilir.",
    answers: [
      { text: "Van Gölü", ok: false },
      { text: "Tuz Gölü", ok: false },
      { text: "Terkos Gölü", ok: false },
      { text: "Tortum Gölü", ok: false },
      { text: "Mogan Gölü", ok: true }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi Kuzey Anadolu Fay hattındaki göllerden biridir?</b></p>",
    diff: 2,
    expl: "Güney Marmara'da doğu-batı doğrultusunda sıralanan Sapanca, İznik, Ulubat ve Manyas (Kuş) gölleri, Kuzey Anadolu Fay Hattı'nın (KAF) güney kolu üzerindeki tektonik çöküntü hendeklerinde oluşmuştur.",
    answers: [
      { text: "Eğirdir Gölü", ok: false },
      { text: "İznik Gölü", ok: true },
      { text: "Bafa Gölü", ok: false },
      { text: "Suğla Gölü", ok: false },
      { text: "Eber Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br>Tektonik hareketlere bağlı olarak oluşan göl, kapalı bir havzada yer alır. Türkiye'de göçmen kuşların önemli uğrak yerleri arasında olan gölün su seviyesi son yıllarda önemli miktarda alçalmış ve alanı daralmıştır.<br><br><b>Bazı özellikleri belirtilen bu göl aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Tektonik kökenli, kapalı havza özelliği gösteren, uluslararası öneme sahip bir kuş alanı (Ramsar) olan ve son yıllarda ciddi kuruma/çekilme tehlikesi yaşayan göl, Göller Yöresi'ndeki Burdur Gölü'dür.",
    answers: [
      { text: "Tortum", ok: false },
      { text: "Nemrut", ok: false },
      { text: "Burdur", ok: true },
      { text: "Küçük Çekmece", ok: false },
      { text: "Durusu", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi tektonik kökenli göllerden biridir?</b></p>",
    diff: 1,
    expl: "Burdur Gölü tektonik kökenli bir göldür. Tortum heyelan set, Terkos (Durusu) kıyı set, Nemrut volkanik (kaldera), Bafa ise alüvyal set gölüdür.",
    answers: [
      { text: "Tortum Gölü", ok: false },
      { text: "Terkos Gölü", ok: false },
      { text: "Burdur Gölü", ok: true },
      { text: "Nemrut Gölü", ok: false },
      { text: "Bafa Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdaki göllerden hangisi baraj gölüdür?</b></p>",
    diff: 1,
    expl: "Keban, Elazığ'da Fırat Nehri üzerinde elektrik üretimi amacıyla inşa edilmiş Türkiye'nin en büyük yapay (baraj) göllerinden biridir. Burdur, İznik, Beyşehir ve Van doğal göllerdir.",
    answers: [
      { text: "Burdur", ok: false },
      { text: "İznik", ok: false },
      { text: "Keban", ok: true },
      { text: "Beyşehir", ok: false },
      { text: "Van", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ORTAÖĞRETİM)</b><br><br>Göl / Oluşum türü<br>I. Mogan - Volkanik set<br>II. Avlan - Alüvyal set<br>III. Durusu - Kıyı set<br>IV. Yedigöller - Heyelan set<br><br><b>Yukarıdakilerin hangilerinde göl ve gölün oluşum türü doğru eşleştirilmiştir?</b></p>",
    diff: 2,
    expl: "Durusu (Terkos) kıyı set gölüdür, Yedigöller ise heyelan set gölüdür (III ve IV doğru). Mogan alüvyal set gölüdür (volkanik değil). Avlan ise Elmalı polyesinde yer alan karstik bir göldür (alüvyal değil).",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ÖNLİSANS)</b><br><br>Kütle hareketleri sonucunda bir akarsu vadisinin tıkanması ve gerisinde suyun birikmesiyle doğal göller oluşabilmektedir.<br><br><b>Aşağıdaki göllerden hangisi bu şekilde oluşmuştur?</b></p>",
    diff: 2,
    expl: "Kütle hareketleri (heyelan/toprak kayması) sonucu oluşan göllere Heyelan Set Gölü denir. Trabzon'daki Sera Gölü, Erzurum'daki Tortum ve Bolu'daki Abant/Yedigöller bu duruma örnektir.",
    answers: [
      { text: "Salda", ok: false },
      { text: "Sera", ok: true },
      { text: "Mogan", ok: false },
      { text: "Çıldır", ok: false },
      { text: "Köyceğiz", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><br>Bazı göl çanaklarının oluşumunda karstik süreçler etkilidir.<br><br><b>Aşağıdakilerden hangisi bu süreçte oluşmuş göllerden biridir?</b></p>",
    diff: 3,
    expl: "Karstik göller kalker ve jips gibi eriyebilen kayaçların olduğu yerlerde oluşur. Sivas çevresindeki Hafik, Tödürge (Zara) ve Lota gölleri jips (alçıtaşı) karstı üzerinde oluşmuş karstik göllerdir.",
    answers: [
      { text: "Hızır", ok: false },
      { text: "Sapanca", ok: false },
      { text: "Abant", ok: false },
      { text: "Ulubat", ok: false },
      { text: "Hafik", ok: true }
    ]
  },
  {
    text: "<p><b>(2021 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Marmara Gölü hangi ilimizin sınırları içindedir?</b></p>",
    diff: 1,
    expl: "Marmara Gölü (Gölmarmara), isminin aksine Marmara Bölgesi'nde değil, Ege Bölgesi'nde Manisa il sınırları içerisinde yer alan alüvyal set gölüdür.",
    answers: [
      { text: "Balıkesir", ok: false },
      { text: "Aydın", ok: false },
      { text: "Bursa", ok: false },
      { text: "Manisa", ok: true },
      { text: "Tekirdağ", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 MEB-EKYS)</b><br><br><b>Aşağıdakilerden hangisi, Van Gölü çevresinde yer alan göllerden biri değildir?</b></p>",
    diff: 2,
    expl: "Erçek, Nazik, Arin, Haçlı ve Çıldır gölleri Doğu Anadolu Bölgesi'nde (Van Gölü çevresinde) yer alan volkanik set gölleridir. Seyfe Gölü ise İç Anadolu Bölgesi'nde Kırşehir il sınırları içerisinde yer alır.",
    answers: [
      { text: "Erçek Gölü", ok: false },
      { text: "Seyfe Gölü", ok: true },
      { text: "Nazik Gölü", ok: false },
      { text: "Arin Gölü", ok: false },
      { text: "Haçlı Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 TYT)</b><br><br>Türkiye'de yer alan göllerin özellikleri ile ilgili,<br>I. Ülke genelinde dengeli bir dağılıma sahiptir.<br>II. Yükseklikleri, batıdan doğuya doğru genellikle artmaktadır.<br>III. Bazıları taşımacılık yapmaya elverişlidir.<br>IV. Tamamı tektonik aktivitelere bağlı olarak gelişmiştir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Türkiye'nin genel yükseltisi doğuya doğru arttığı için göllerin rakımı da doğuya gidildikçe artar (II doğru). Van Gölü gibi büyük göllerde feribot taşımacılığı yapılır (III doğru). Ancak göller dengeli dağılmamıştır (Göller Yöresi, Marmara gibi alanlarda yoğundur) ve tamamı tektonik değildir (karstik, set vb. tipleri vardır).",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi heyelan set göllerden biri değildir?</b></p>",
    diff: 2,
    expl: "Tortum, Abant, Borabay ve Sera gölleri vadilerin önünün heyelan sonucu kapanmasıyla oluşmuş heyelan set gölleridir. Küçükçekmece Gölü ise dalgaların bir körfezin ağzını kumlarla kapatmasıyla oluşan bir Kıyı Set (Lagün) gölüdür.",
    answers: [
      { text: "Tortum Gölü", ok: false },
      { text: "Abant Gölü", ok: false },
      { text: "Borabay Gölü", ok: false },
      { text: "Küçük Çekmece Gölü", ok: true },
      { text: "Sera Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi Göller Yöresi'nde göllerden biridir?</b></p>",
    diff: 1,
    expl: "Göller Yöresi Akdeniz Bölgesi'nin batısındadır (Isparta, Burdur civarı). Bu yörede Eğirdir, Burdur, Acıgöl, Beyşehir ve Salda gibi birçok karstik/tektonik göl bulunur. Salda Gölü (Burdur) bu yörededir.",
    answers: [
      { text: "Hafik Gölü", ok: false },
      { text: "Hazar Gölü", ok: false },
      { text: "Salda Gölü", ok: true },
      { text: "Meke Gölü", ok: false },
      { text: "Bafa Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi kıyı set gölüdür?</b></p>",
    diff: 1,
    expl: "Dalga ve akıntıların taşıdığı kumların koy veya körfezlerin önünü kapatmasıyla Kıyı Set Gölleri (Lagün / Deniz Kulağı) oluşur. İstanbul'daki Büyükçekmece, Küçükçekmece ve Durusu (Terkos) en bilinen kıyı set gölleridir.",
    answers: [
      { text: "İznik", ok: false },
      { text: "Büyükçekmece", ok: true },
      { text: "Tortum", ok: false },
      { text: "Burdur", ok: false },
      { text: "Eğirdir", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ÖNLİSNAS)</b><br><br><b>Aşağıdaki göllerden hangisi kapalı havza içinde yer alır?</b></p>",
    diff: 2,
    expl: "Sularını bir akarsu vasıtasıyla denize ulaştıramayan göller kapalı havza durumundadır. İznik, Manyas ve Sapanca sularını Marmara Denizi'ne, Tortum ise Karadeniz'e ulaştırır. İç Anadolu'daki Akşehir Gölü (ve Tuz Gölü, Eber Gölü) kapalı havza içindedir.",
    answers: [
      { text: "İznik", ok: false },
      { text: "Akşehir", ok: true },
      { text: "Tortum", ok: false },
      { text: "Manyas", ok: false },
      { text: "Sapanca", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki göllerden hangisi Güney Marmara'da yer alır?</b></p>",
    diff: 1,
    expl: "Güney Marmara bölümünde tektonik çöküntüler (KAF güney kolu) içerisinde Sapanca, İznik, Ulubat ve Manyas (Kuş) gölleri yer alır.",
    answers: [
      { text: "Ulubat Gölü", ok: true },
      { text: "Çıldır Gölü", ok: false },
      { text: "Eğirdir Gölü", ok: false },
      { text: "Tortum Gölü", ok: false },
      { text: "Göl Marmara", ok: false }
    ]
  },
  {
    text: "<p><b>(2017 KPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'deki set göllerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Büyükçekmece (Kıyı set), Köyceğiz (Alüvyal set), Uzungöl (Alüvyal/Heyelan set), Tortum (Heyelan set) doğal setleşmelerle oluşmuştur. Beyşehir Gölü ise tektonik ve karstik çöküntü alanına suların dolmasıyla oluşan 'karma yapılı' bir göldür, set gölü değildir.",
    answers: [
      { text: "Büyük Çekmece Gölü", ok: false },
      { text: "Köyceğiz Gölü", ok: false },
      { text: "Uzungöl", ok: false },
      { text: "Beyşehir Gölü", ok: true },
      { text: "Tortum Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2017 MEB-MÜFETTİŞLİK)</b><br><br><b>Aşağıdakilerden hangisi heyelan sonucu yamaçtan kopup gelen kütlenin bir vadi veya çukurluğu tıkamasına bağlı oluşan heyelan set göllerinden biridir?</b></p>",
    diff: 1,
    expl: "Erzurum'daki Tortum Gölü, Tortum Çayı vadisinin önünün yamaçtan inen devasa bir heyelan kütlesiyle kapanması sonucu oluşmuş tipik bir heyelan set gölüdür.",
    answers: [
      { text: "Van Gölü", ok: false },
      { text: "Eğirdir Gölü", ok: false },
      { text: "Köyceğiz Gölü", ok: false },
      { text: "Tortum Gölü", ok: true },
      { text: "İznik Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-ÖNLİSANS)</b><br><br>I. Ereğli Sazlığı<br>II. Sultan Sazlığı<br>III. Hotamış Sazlığı<br><br><b>Yukarıdakilerin hangileri Konya Kapalı Havzası'nda bulunan sulak alanlardan biri değildir?</b></p>",
    diff: 3,
    expl: "Ereğli ve Hotamış sazlıkları Konya sınırları içerisinde ve Konya Kapalı Havzası'ndadır. Sultan Sazlığı ise Kayseri (Develi Ovası) sınırları içerisinde yer aldığı için Konya Kapalı Havzası'nda yer almaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Türkiye ile Gürcistan arasındaki sınırın bir bölümü hangi gölün üzerinden geçer?</b></p>",
    diff: 2,
    expl: "Aktaş (Hazapin) Gölü, Ardahan ilimizde yer alır ve gölün ortasından Türkiye-Gürcistan uluslararası sınırı geçmektedir.",
    answers: [
      { text: "Çıldır Gölü", ok: false },
      { text: "Balık Gölü", ok: false },
      { text: "Erçek Gölü", ok: false },
      { text: "Aktaş (Hazapin) Gölü", ok: true },
      { text: "Nazik Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-ÖNLİSANS)</b><br><br>Karadeniz Bölgesi'nin jeolojik ve jeomorfolojik özellikleri göz önüne alındığında, bölgede aşağıdaki göl tiplerinden hangisine rastlanması beklenmez?</p>",
    diff: 2,
    expl: "Karadeniz Bölgesi'nde aktif veya sönmüş volkanik dağ oluşumları bulunmadığı için krater, kaldera veya maar gibi volkanik aktivitelere bağlı göllere rastlanmaz. (Heyelan set, buzul, alüvyal set, kıyı set gölleri mevcuttur).",
    answers: [
      { text: "Krater", ok: true },
      { text: "Heyelan set", ok: false },
      { text: "Buzul", ok: false },
      { text: "Alüvyal set", ok: false },
      { text: "Kıyı set", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıda verilen göllerden hangisi oluşum bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "Tuz Gölü, İznik, Hazar ve Manyas gölleri yerkabuğundaki fay hatlarına bağlı çöküntülerde oluşan Tektonik göllerdir. Burdur ilindeki Salda Gölü ise kalkerli (kireçtaşı) arazinin erimesiyle oluşan Karstik bir göldür.",
    answers: [
      { text: "Tuz Gölü", ok: false },
      { text: "İznik Gölü", ok: false },
      { text: "Hazar Gölü", ok: false },
      { text: "Salda Gölü", ok: true },
      { text: "Manyas Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2009 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıdaki göllerden hangisi heyelân sonucu oluşmamıştır?</b></p>",
    diff: 2,
    expl: "Tortum (Erzurum), Zinav (Tokat), Sülük (Bolu), Borabay (Amasya) ve Abant/Yedigöller heyelan set gölleridir. Kırşehir'deki Seyfe Gölü ise faylanmalara bağlı tektonik çöküntü içinde oluşan tuzlu, kapalı havza gölüdür.",
    answers: [
      { text: "Tortum Gölü", ok: false },
      { text: "Zinav Gölü", ok: false },
      { text: "Sülük Gölü", ok: false },
      { text: "Seyfe Gölü", ok: true },
      { text: "Borabay Gölü", ok: false }
    ]
  },
  {
    text: "<p><b>(2009 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıdaki göllerden hangisi Isparta ve Konya il sınırlarının bir bölümünü oluşturur?</b></p>",
    diff: 1,
    expl: "Türkiye'nin en büyük tatlı su gölü olan Beyşehir Gölü, İç Anadolu (Konya) ile Akdeniz (Isparta) bölgeleri arasında doğal bir il sınırı oluşturur.",
    answers: [
      { text: "Eğridir Gölü", ok: false },
      { text: "Acı Göl", ok: false },
      { text: "Suğla Gölü", ok: false },
      { text: "Beyşehir Gölü", ok: true },
      { text: "Akşehir Gölü", ok: false }
    ]
  }
];

// ============================================================================
// AKARSULAR - TEST 1
// ============================================================================
export const AKARSULAR_TEST_1: McQ[] = [
  {
    text: "<p><b>(2024 KPSS-ÖNLİSANS)</b><br><br>Türkiye'nin önemli akarsularından biri olan Kızılırmak ile ilgili<br><br>I. Taşıdığı alüvyonlarla oluşturduğu Çarşamba Ovası'ndan denize dökülür.<br>II. Kaynağını Sivas ilindeki Kızıldağ'dan alarak Orta Anadolu'da büyük bir yay çizer.<br>III. Terme Çayı ve Kelkit Çayı en önemli kolları arasında yer alır.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Kızılırmak, Sivas Kızıldağ'dan doğar ve geniş bir yay çizerek Karadeniz'e ulaşır (II doğru). Ancak Çarşamba'dan değil, Bafra Ovası'ndan denize dökülür (I yanlış). Kelkit Çayı ise Kızılırmak'ın değil, Yeşilırmak'ın en büyük koludur (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-ÖNLİSANS)</b><br><br>I. Türkiye'den doğan ve yine Türkiye'den denize dökülen en uzun akarsudur.<br>II. Taşıdığı alüvyonlarla oluşturduğu Çarşamba Ovası'ndan denize dökülür.<br>III. Küre ve Ilgaz dağları arasından doğuya doğru akan Gökırmak en önemli kollarından biridir.<br><br><b>Yeşilırmak ile ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Yeşilırmak, Karadeniz kıyısında Çarşamba Deltası'nı oluşturur (II doğru). Sınırlarımız içindeki en uzun akarsu Kızılırmak'tır (I yanlış). Gökırmak da Yeşilırmak'ın değil, Kızılırmak'ın önemli bir koludur (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 EKPSS-LİSANS)</b><br><br><b>Aşağıdaki akarsulardan hangisi bir graben içinde akmaktadır?</b></p>",
    diff: 1,
    expl: "Ege Bölgesi'ndeki akarsular (Bakırçay, Gediz, Küçük Menderes, Büyük Menderes) dağların kırılmasıyla çöken tektonik hendekler olan grabenler içerisinde akarlar.",
    answers: [
      { text: "Gediz", ok: true },
      { text: "Filyos", ok: false },
      { text: "Fırat", ok: false },
      { text: "Meriç", ok: false },
      { text: "Ceyhan", ok: false }
    ]
  },
  {
    text: "<p><b>(2024 KPSS-ORTAÖĞRETİM)</b><br><br><b>Sinop - Ordu arasında deniz yoluyla kıyı boyunca seyahat eden bir kişi, aşağıdaki akarsulardan hangisinin denize döküldüğü yeri görebilir?</b></p>",
    diff: 2,
    expl: "Sinop'tan Ordu'ya doğru (doğuya) Karadeniz kıyısında seyahat eden biri, Samsun kıyılarından geçerken sırasıyla Kızılırmak (Bafra) ve Yeşilırmak (Çarşamba) nehirlerinin denize döküldüğü yerleri görür.",
    answers: [
      { text: "Çoruh", ok: false },
      { text: "Sakarya", ok: false },
      { text: "Filyos", ok: false },
      { text: "Yeşilırmak", ok: true },
      { text: "Bartın", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br><b>Aşağıdakilerin hangisinde akarsu havzalarının açık veya kapalı olma durumuna ilişkin eşleştirme doğru verilmiştir?</b></p>",
    diff: 2,
    expl: "Gediz Nehri Ege Denizi'ne ulaşır (Açık Havza). Aras Nehri, bir göl olan Hazar Denizi'ne/Gölü'ne döküldüğü için okyanuslara bağlantısı yoktur (Kapalı Havza). Çoruh Nehri Gürcistan üzerinden Karadeniz'e dökülür (Açık Havza).",
    answers: [
      { text: "Gediz: açık, Aras: kapalı, Çoruh: açık", ok: true },
      { text: "Gediz: kapalı, Aras: kapalı, Çoruh: açık", ok: false },
      { text: "Gediz: kapalı, Aras: açık, Çoruh: açık", ok: false },
      { text: "Gediz: açık, Aras: açık, Çoruh: kapalı", ok: false },
      { text: "Gediz: kapalı, Aras: açık, Çoruh: kapalı", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıda bir bölümü gösterilen harita parçasında Anamur Burnu'ndan Karataş Burnu'na hareket eden yolcu teknesinin rotası gösterilmiştir.<br><br><b>Bu rotada yolcuların aşağıdaki akarsulardan hangisinin denize döküldüğü yeri görmesi beklenir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-akarsular_t1_q6.jpg",
    diff: 3,
    expl: "Haritada Anamur (Mersin'in batısı) ile Karataş (Adana'nın güneyi) arasındaki kıyı şeridi gösterilmiştir. Bu rota üzerinde Mersin'in Silifke ilçesinden denize dökülen Göksu Nehri'nin deltası görülür. Seyhan ve Ceyhan Karataş Burnu'nun daha doğusundadır.",
    answers: [
      { text: "Ceyhan Nehri", ok: false },
      { text: "Göksu Nehri", ok: true },
      { text: "Manavgat Çayı", ok: false },
      { text: "Aksu Çayı", ok: false },
      { text: "Köprü Çayı", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki akarsulardan hangisi Karadeniz'e dökülür?</b></p>",
    diff: 1,
    expl: "Sakarya Nehri, İç Batı Anadolu'dan doğup Adapazarı üzerinden Karadeniz'e dökülür. Gediz ve Bakırçay Ege'ye; Susurluk ve Gönen ise Marmara Denizi'ne dökülür.",
    answers: [
      { text: "Gediz", ok: false },
      { text: "Bakırçay", ok: false },
      { text: "Sakarya", ok: true },
      { text: "Susurluk", ok: false },
      { text: "Gönen Çayı", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 MEB-EKYS)</b><br><br>Bir yolcu, Sinop İnce Burun'dan yola çıkarak deniz yoluyla Şile'ye doğru sahil şeridini takip edecek şekilde seyahat gerçekleştirecektir.<br><br><b>Bu yolcunun aşağıdaki akarsulardan hangilerinin denize döküldüğü yerlerden sırasıyla geçmesi beklenir?</b></p>",
    diff: 2,
    expl: "Sinop'tan yola çıkıp batıya (İstanbul/Şile yönüne) giden biri sırasıyla Bartın Çayı'nı (Bartın), Filyos Nehri'ni (Zonguldak) ve son olarak Sakarya Nehri'ni (Karasu) geçerek Şile'ye ulaşır.",
    answers: [
      { text: "Bartın - Filyos - Sakarya", ok: true },
      { text: "Kızılırmak - Bartın - Filyos", ok: false },
      { text: "Yeşilırmak - Kızılırmak - Sakarya", ok: false },
      { text: "Filyos - Aksu - Yeşilırmak", ok: false },
      { text: "Aksu - Yeşilırmak - Kızılırmak", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-LİSANS)</b><br><br><b>Aşağıdaki akarsulardan hangisinin üzerinde kurulu barajlardan elde edilen toplam hidroelektrik enerji üretimi diğerlerinden daha fazladır?</b></p>",
    diff: 1,
    expl: "Fırat Nehri, taşıdığı su miktarı ve yatak eğimi sayesinde Türkiye'nin hidroelektrik potansiyeli en yüksek nehridir. Üzerinde Atatürk, Karakaya ve Keban gibi Türkiye'nin en çok enerji üreten devasa barajları yer alır.",
    answers: [
      { text: "Bakırçay", ok: false },
      { text: "Aras", ok: false },
      { text: "Fırat", ok: true },
      { text: "Sakarya", ok: false },
      { text: "Ceyhan", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki akarsu ile üzerinde kurulan baraj eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Keban Barajı Dicle Nehri üzerinde değil, Elazığ sınırları içerisinde Fırat Nehri üzerinde kurulmuştur.",
    answers: [
      { text: "Çoruh - Deriner", ok: false },
      { text: "Kızılırmak - Hirfanlı", ok: false },
      { text: "Fırat - Karakaya", ok: false },
      { text: "Manavgat - Oymapınar", ok: false },
      { text: "Dicle - Keban", ok: true }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdaki akarsu ve döküldüğü deniz eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Sakarya Nehri Marmara Denizi'ne değil, Karasu (Adapazarı kuzeyi) üzerinden Karadeniz'e dökülmektedir.",
    answers: [
      { text: "Filyos - Karadeniz", ok: false },
      { text: "Sakarya - Marmara", ok: true },
      { text: "Susurluk - Marmara", ok: false },
      { text: "Meriç - Ege", ok: false },
      { text: "Yeşilırmak - Karadeniz", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdaki akarsuların hangisi Ege Denizi'ne dökülür?</b></p>",
    diff: 1,
    expl: "Gediz Nehri, Ege Bölgesi'nde graben alanı içinde akarak İzmir kıyılarından (Menemen deltası) Ege Denizi'ne dökülür.",
    answers: [
      { text: "Kızılırmak", ok: false },
      { text: "Asi", ok: false },
      { text: "Sakarya", ok: false },
      { text: "Seyhan", ok: false },
      { text: "Gediz", ok: true }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br>Türkiye'deki akarsuların genellikle en fazla akım miktarına sahip oldukları dönem ilkbahar mevsimidir. Bu dönemde kar erimelerinin fazla olması akarsuların akım miktarının artmasına neden olmaktadır.<br><br><b>Buna göre;<br>I. Fırat<br>II. Bakırçay<br>III. Seyhan<br>IV. Asi<br>akarsularından hangilerinin akım miktarının artmasında bu etkinin rolü daha fazladır?</b></p>",
    diff: 2,
    expl: "Kaynağını yüksek dağlık alanlardan (Doğu Anadolu ve Toroslar) alan Fırat ve Seyhan nehirleri, ilkbaharda yağan karların erimesiyle en yüksek debilerine ulaşırlar. Bakırçay ve Asi ise daha düşük rakımlı yerlerden beslendiği için kar erimelerinden ziyade yağmur suları etkilidir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><br>Aşağıda, Türkiye'de yer alan bir akarsu ile ilgili bazı özellikler verilmiştir.<br>► En büyük su toplama havzasına sahiptir.<br>► En yüksek akım değerlerine sahiptir.<br>► En önemli kolları Murat Nehri ve Karasu'dur.<br>► Sınır aşan akarsu olup Basra Körfezi'nden denize dökülmektedir.<br><br><b>Özellikleri verilen bu akarsu aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Murat ve Karasu kollarının birleşmesiyle oluşan, Türkiye'nin en büyük havzasına ve su potansiyeline sahip, Suriye ve Irak'ı geçerek Şattülarap'ta Dicle ile birleşip Basra'ya dökülen nehir Fırat'tır.",
    answers: [
      { text: "Aras", ok: false },
      { text: "Fırat", ok: true },
      { text: "Kura", ok: false },
      { text: "Dicle", ok: false },
      { text: "Meriç", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ÖNLİSANS)</b><br><br>I. Akdeniz'e dökülen akarsuların debisinin en yüksek olduğu mevsim yazdır.<br>II. Karadeniz'e dökülen kısa boylu akarsuların rejimi diğerlerine göre daha düzenlidir.<br>III. İç Anadolu'da akarsular yaz mevsiminde düşük debiyle akış gösterir.<br><br><b>Türkiye'deki akarsuların rejimleriyle ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Karadeniz her mevsim yağışlı olduğu için akarsu rejimleri diğer bölgelere göre daha düzenlidir (II doğru). İç Anadolu'da şiddetli yaz kuraklığı nedeniyle akarsuların suları yazın çekilir (III doğru). Akdeniz ikliminde ise yazlar kurak olduğu için debi yazın en yüksek değil, tam tersine en düşüktür (I yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-ORTAÖĞRETİM)</b><br><br>I. Çarşamba Ovası'ndan Karadeniz'e dökülür.<br>II. Nehir üzerinde Kesikköprü ve Altınkaya barajları bulunur.<br>III. Türkiye topraklarından doğarak Karadeniz'e dökülen en uzun akarsudur.<br><br><b>Kızılırmak Nehri'yle ilgili yukarıdaki ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Kızılırmak Türkiye içindeki en uzun nehir olup üzerinde Altınkaya, Derbent, Kesikköprü, Hirfanlı gibi barajlar vardır (II ve III doğru). Ancak Karadeniz'e Çarşamba'dan değil, Bafra Deltası'nı oluşturarak dökülür (I yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ÖNLİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı akarsular numaralandırılarak gösterilmiştir.<br><br><b>Bu akarsular aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-akarsular_t1_q17.jpg",
    diff: 3,
    expl: "Haritadaki I numaralı nehir İç Batı Anadolu'dan doğup Karadeniz'e dökülen Sakarya'dır. II numaralı nehir İç Anadolu'da yay çizerek Bafra'dan dökülen Kızılırmak'tır. III numaralı nehir ise Orta Toroslardan doğup Mersin Silifke'den denize dökülen Göksu nehridir.",
    answers: [
      { text: "I: Sakarya, II: Kızılırmak, III: Göksu", ok: true },
      { text: "I: Susurluk, II: Kızılırmak, III: Seyhan", ok: false },
      { text: "I: Sakarya, II: Yeşilırmak, III: Göksu", ok: false },
      { text: "I: Filyos, II: Yeşilırmak, III: Seyhan", ok: false },
      { text: "I: Sakarya, II: Filyos, III: Susurluk", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-LİSANS)</b><br><br><b>Arpaçay ırmağı, aşağıdaki ülkelerden hangisiyle Türkiye arasında sınırın bir bölümünü oluşturur?</b></p>",
    diff: 1,
    expl: "Aras Nehri'nin önemli bir kolu olan Arpaçay, Çıldır Gölü'nden doğar ve Türkiye ile Ermenistan arasındaki doğal devlet sınırının büyük bir bölümünü çizer.",
    answers: [
      { text: "Ermenistan", ok: true },
      { text: "Suriye", ok: false },
      { text: "Irak", ok: false },
      { text: "Gürcistan", ok: false },
      { text: "İran", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi sınır aşan akarsu özelliği taşımaz?</b></p>",
    diff: 1,
    expl: "Dicle ve Fırat güneyden, Çoruh, Aras ve Kura doğudan Türkiye'yi terk eder; Asi ve Meriç ise dışarıdan gelir (Sınır aşan sulardır). Susurluk Nehri ise kaynağını Türkiye'den alıp Marmara Denizi'ne dökülen, tamamen iç sınırlarımızda kalan bir akarsudur.",
    answers: [
      { text: "Dicle", ok: false },
      { text: "Fırat", ok: false },
      { text: "Aras", ok: false },
      { text: "Çoruh", ok: false },
      { text: "Susurluk", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Kızılırmak Nehri ile ilgili aşağıda verilen bilgilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Kızılırmak, Türkiye'nin kendi içindeki en uzun nehridir, Bafra deltasını oluşturur ve Gökırmak, Delice gibi kolları vardır. Ancak 'Birecik' ve 'Kralkızı' barajları Kızılırmak üzerinde değil, sırasıyla Fırat ve Dicle nehirleri üzerindedir.",
    answers: [
      { text: "Sularını Karadeniz'e boşaltır.", ok: false },
      { text: "Bafra delta ovasını oluşturmuştur.", ok: false },
      { text: "Birecik ve Kralkızı üzerinde kurulu olan barajlardandır.", ok: true },
      { text: "Türkiye'den doğan ve yine Türkiye topraklarından denize ulaşan en uzun nehirdir.", ok: false },
      { text: "En önemli kolu Gökırmak'tır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada Ege Denizi'ne ulaşan önemli akarsularımızdan üçü numaralandırılarak gösterilmiştir.<br><br><b>Bu akarsularımızın isimlerinin kuzeyden güneye sıralanışı hangi seçenekte doğru verilmiştir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-akarsular_t1_q21.jpg",
    diff: 3,
    expl: "Haritada Ege kıyılarında yer alan akarsular; en kuzeyde Bakırçay (III), ortada Gediz (II) ve en güneyde Büyük Menderes (I) olarak işaretlenmiştir. Kuzeyden güneye doğru isim sıralaması Bakırçay, Gediz, Büyük Menderes şeklindedir (Seçeneklerde I, II, III sütunları haritadaki numaralarla eşleşmektedir).",
    answers: [
      { text: "I: Gediz, II: Bakırçay, III: B.Menderes", ok: false },
      { text: "I: Bakırçay, II: B.Menderes, III: Gediz", ok: false },
      { text: "I: B.Menderes, II: Bakırçay, III: Gediz", ok: false },
      { text: "I: Bakırçay, II: Gediz, III: B.Menderes", ok: false },
      { text: "I: B.Menderes, II: Gediz, III: Bakırçay", ok: true }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi, Anadolu'nun iç kısımlarından kaynağını alarak kuzey veya güneydeki sıradağları aşan akarsulardan biri değildir?</b></p>",
    diff: 2,
    expl: "Kızılırmak ve Sakarya Karadeniz dağlarını, Fırat ve Seyhan ise Toros Dağlarını yararak denize/güneye ulaşır. Dalaman Çayı ise boyu çok kısa olan ve kaynağını doğrudan Akdeniz kıyısındaki dağların denize bakan yamaçlarından alan bir akarsudur, iç kısımlardan gelip sıradağ aşmaz.",
    answers: [
      { text: "Kızılırmak", ok: false },
      { text: "Fırat Irmağı", ok: false },
      { text: "Seyhan Nehri", ok: false },
      { text: "Sakarya Irmağı", ok: false },
      { text: "Dalaman Çayı", ok: true }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Seyhan ve Ceyhan akarsularının oluşturduğu ova aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Toroslardan doğan Seyhan ve Ceyhan nehirlerinin taşıdığı alüvyonların Akdeniz'e döküldüğü yerde birikmesiyle Türkiye'nin en büyük delta ovası olan Çukurova oluşmuştur.",
    answers: [
      { text: "Suluova", ok: false },
      { text: "Çukurova", ok: true },
      { text: "Çarşamba", ok: false },
      { text: "Sakarya", ok: false },
      { text: "Silifke", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ORTAÖĞRETİM)</b><br><br>Türkiye'deki bazı akarsular, kaynağını ülke içinden alarak başka ülke topraklarından deniz ve göle dökülmektedir.<br><br><b>Aşağıdakilerden hangisi bu tür akarsulara örnektir?</b></p>",
    diff: 1,
    expl: "Kızılırmak ve Sakarya sadece Türkiye içindedir. Asi ve Meriç dışarıdan doğup ülkemize girerler. Arpaçay ise Türkiye'den (Çıldır'dan) doğup Ermenistan sınırını çizerek dışarıda (Hazar kapalı havzasında) Aras nehri ile birleşir.",
    answers: [
      { text: "Kızılırmak", ok: false },
      { text: "Sakarya", ok: false },
      { text: "Asi", ok: false },
      { text: "Arpaçay", ok: true },
      { text: "Meriç", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Çarşamba deltası aşağıda verilen akarsulardan hangisinin taşıdığı alüvyonlarla oluşmuştur?</b></p>",
    diff: 1,
    expl: "Orta Karadeniz'de Samsun kıyılarında yer alan Çarşamba Deltası'nı Yeşilırmak, hemen batısındaki Bafra Deltası'nı ise Kızılırmak oluşturmuştur.",
    answers: [
      { text: "Kızılırmak", ok: false },
      { text: "Manavgat", ok: false },
      { text: "Seyhan", ok: false },
      { text: "Gediz", ok: false },
      { text: "Yeşilırmak", ok: true }
    ]
  },
  {
    text: "<p><b>(2018 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Kaynağını Türkiye'den alan Fırat ve Dicle nehirleri hangi körfeze dökülür?</b></p>",
    diff: 1,
    expl: "Fırat ve Dicle nehirleri Türkiye'den doğup Suriye ve Irak topraklarını geçer, Şattülarap adı verilen bölgede birleşerek Basra Körfezi'ne dökülürler.",
    answers: [
      { text: "Basra Körfezi", ok: true },
      { text: "Aden Körfezi", ok: false },
      { text: "Bengal Körfezi", ok: false },
      { text: "Gine Körfezi", ok: false },
      { text: "Çandarlı Körfezi", ok: false }
    ]
  },
  {
    text: "<p><b>(2016 KPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi Akdeniz'e dökülen akarsulardan biri değildir?</b></p>",
    diff: 1,
    expl: "Seyhan, Ceyhan, Eşen ve Manavgat çayları sularını Akdeniz'e ulaştırır. Gönen Çayı ise Marmara Bölgesi'nden doğup Marmara Denizi'ne dökülen bir akarsudur.",
    answers: [
      { text: "Seyhan", ok: false },
      { text: "Ceyhan", ok: false },
      { text: "Eşen", ok: false },
      { text: "Manavgat", ok: false },
      { text: "Gönen", ok: true }
    ]
  },
  {
    text: "<p><b>(2015 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki akarsularımızdan hangisinin denize ulaştığı yer daha batıdadır?</b></p>",
    diff: 1,
    expl: "Verilen akarsuların tamamı Karadeniz'e dökülür. Doğudan batıya doğru sırasıyla; Çoruh, Yeşilırmak, Kızılırmak, Filyos ve Sakarya bulunur. İçlerinde en batıda olanı (Adapazarı/Karasu'dan dökülen) Sakarya Nehri'dir.",
    answers: [
      { text: "Filyos", ok: false },
      { text: "Yeşilırmak", ok: false },
      { text: "Çoruh", ok: false },
      { text: "Sakarya", ok: true },
      { text: "Kızılırmak", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ORTAÖĞRETİM)</b><br><br>I. Göksu - Akdeniz<br>II. Sakarya - Karadeniz<br>III. Filyos - Marmara<br>IV. Ergene - Ege<br><br><b>Yukarıdaki akarsulardan hangileri, karşısında verilen denize dökülmez?</b></p>",
    diff: 2,
    expl: "Göksu Akdeniz'e, Sakarya Karadeniz'e dökülür. Ergene Nehri ise Meriç ile birleşerek Ege Denizi'ne ulaşır. Ancak Filyos (Yenice) Irmağı Marmara Denizi'ne değil, Batı Karadeniz'den Karadeniz'e dökülür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıda verilen akarsu ve oluşturduğu delta ovası eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Büyük Menderes Nehri, Balat deltasını oluşturur. Menemen deltasını ise Gediz Nehri oluşturmaktadır.",
    answers: [
      { text: "Kızılırmak - Bafra", ok: false },
      { text: "Sakarya - Karasu", ok: false },
      { text: "Yeşilırmak - Çarşamba", ok: false },
      { text: "Büyük Menderes - Menemen", ok: true },
      { text: "Göksu - Silifke", ok: false }
    ]
  },
  {
    text: "<p><b>(2013 KPSS-LİSANS)</b><br><br>Kaynağını Batı ve Orta Torosların güney yamaçlarından alan akarsuların Akdeniz'e döküldükleri alanlarda büyük deltalar oluşmamıştır.<br><br><b>Bu durum, aşağıdakilerden hangisi ile açıklanabilir?</b></p>",
    diff: 2,
    expl: "Batı ve Orta Toroslar ağırlıklı olarak kolay eriyebilen 'Kalker' (kireçtaşı) kayalarından oluşur. Akarsular bu litolojik (taş yapısı) özellik nedeniyle malzeme (alüvyon) taşımak yerine kayayı eriterek kimyasal yolla taşır. Alüvyon yükü az olduğu için kıyıda biriktirme yapıp delta oluşturmaları çok zordur.",
    answers: [
      { text: "Yatak eğimlerinin fazla olmasıyla", ok: false },
      { text: "Rejimlerinin düzenli olmasıyla", ok: false },
      { text: "Bitki örtüsünün tahrip edilmesiyla", ok: false },
      { text: "Havzalarındaki kayaçların litolojik özellikleriyle", ok: true },
      { text: "Kıyıdaki derinliğin fazla olmasıyla", ok: false }
    ]
  },
  {
    text: "<p><b>(2013 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>\"Demirköprü Barajı\" hangi akarsu üzerinde kurulmuştur?</b></p>",
    diff: 2,
    expl: "Demirköprü Barajı, Manisa ili sınırları içerisinde yer alan ve taşkın koruma/enerji üretimi amacıyla Gediz Nehri üzerinde inşa edilmiş önemli bir barajdır.",
    answers: [
      { text: "Gediz", ok: true },
      { text: "Göksu", ok: false },
      { text: "Bakırçay", ok: false },
      { text: "Kızılırmak", ok: false },
      { text: "Küçükmenderes", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-LİSANS)</b><br><br><b>Aşağıdaki akarsuların hangisinde, geçtiği yerler göz önüne alındığında endüstriyel atıklara bağlı kirlilik oranının en az olması beklenir?</b></p>",
    diff: 1,
    expl: "Ergene, Büyük Menderes, Sakarya ve Gediz nehirleri sanayinin, tarımın ve yerleşimin çok yoğun olduğu bölgelerden geçtikleri için kirlilik oranları yüksektir. Çoruh Nehri ise sarp ve sanayileşmemiş Doğu Karadeniz dağlarından aktığı için en temiz nehirlerden biridir.",
    answers: [
      { text: "Ergene", ok: false },
      { text: "Büyük Menderes", ok: false },
      { text: "Sakarya", ok: false },
      { text: "Çoruh", ok: true },
      { text: "Gediz", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki akarsulardan hangisi, Türkiye sınırları dışında denize dökülür?</b></p>",
    diff: 1,
    expl: "Kızılırmak, Sakarya, Gediz Türkiye'den doğup Türkiye kıyılarından dökülür. Asi, dışarıdan doğup Türkiye'den dökülür. Çoruh Nehri ise Mescit Dağları'ndan (Erzurum) doğar, Gürcistan'ın Batum şehrinden Karadeniz'e (sınır dışından) dökülür.",
    answers: [
      { text: "Sakarya", ok: false },
      { text: "Kızılırmak", ok: false },
      { text: "Asi", ok: false },
      { text: "Çoruh", ok: true },
      { text: "Gediz", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-ÖNLİSANS)</b><br><br><b>Kaynağını Türkiye'den alan aşağıdaki akarsulardan hangisi kapalı havzada akmaktadır?</b></p>",
    diff: 1,
    expl: "Aras Nehri ve Kura Nehri Türkiye'den doğup, okyanus bağlantısı olmayan (kapalı havza özelliği gösteren) dünyanın en büyük gölü olan Hazar'a döküldükleri için Kapalı Havza akarsularıdır.",
    answers: [
      { text: "Yeşilırmak", ok: false },
      { text: "Göksu", ok: false },
      { text: "Aras", ok: true },
      { text: "Fırat", ok: false },
      { text: "Gediz", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-ORTAÖĞRETİM)</b><br><br><b>Yatak eğimi ve yağış rejimi, Doğu Karadeniz Bölümü akarsularının aşağıdaki özelliklerinden hangisi üzerinde etkili değildir?</b></p>",
    diff: 2,
    expl: "Yatak eğiminin fazla olması; derin vadilerde akmalarını (E), akış hızlarının (C) ve enerji potansiyellerinin (A) yüksek olmasını sağlar. Düzenli yağış rejimi ise yıl boyunca su taşımalarını (D) sağlar. Ancak buzullardan beslenmeleri, iklim veya eğimle değil o dağların 3000 metrenin üzerinde (kalıcı kar sınırında) olmasıyla ilgilidir.",
    answers: [
      { text: "Enerji potansiyelinin yüksek olması", ok: false },
      { text: "Buzullardan beslenmeleri", ok: true },
      { text: "Akış hızlarının fazla olması", ok: false },
      { text: "Yıl boyunca su taşımaları", ok: false },
      { text: "Derin vadilerde akmaları", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Taşıdığı alüvyonların İzmir Körfezi'ni doldurma tehlikesinden dolayı; yatağı 1886 yılında insan müdahalesiyle değiştirilen akarsu aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Gediz Nehri'nin taşıdığı yoğun alüvyonların İzmir Körfezi'ni doldurup limanı kullanılamaz hale getirme riski üzerine, 1886 yılında Fransız mühendisler tarafından yatağı değiştirilerek körfezin daha uzağından (Kuzeyden) denize dökülmesi sağlanmıştır.",
    answers: [
      { text: "Bakırçay", ok: false },
      { text: "Gediz", ok: true },
      { text: "Büyük Menderes", ok: false },
      { text: "Küçük Menderes", ok: false },
      { text: "Meriç", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıdaki akarsulardan hangisi Ege Denizi'ne dökülmez?</b></p>",
    diff: 1,
    expl: "Bakırçay, Gediz, Büyük Menderes (ve Küçük Menderes) Ege bölgesinden, Meriç Nehri ise Trakya'dan Ege Denizi'ne dökülür. Susurluk Nehri ise Marmara Bölgesi'nden doğup Marmara Denizi'ne dökülür.",
    answers: [
      { text: "Susurluk", ok: true },
      { text: "Gediz", ok: false },
      { text: "Meriç", ok: false },
      { text: "Büyük Menderes", ok: false },
      { text: "Bakırçay", ok: false }
    ]
  },
  {
    text: "<p><b>(2009 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>Aşağıdaki akarsulardan hangisi Çandarlı Körfezinden denize ulaşır?</b></p>",
    diff: 2,
    expl: "Ege kıyılarında kuzeyden güneye doğru nehirlerin döküldüğü yerler; Bakırçay -> Çandarlı Körfezi, Gediz -> İzmir Körfezi, Küçük Menderes -> Selçuk (Kuşadası Körfezi), Büyük Menderes -> Balat şeklindedir. Çandarlı'ya dökülen Bakırçay'dır.",
    answers: [
      { text: "Bakırçay", ok: true },
      { text: "Gediz", ok: false },
      { text: "Küçük Menderes", ok: false },
      { text: "Büyük Menderes", ok: false },
      { text: "Meriç", ok: false }
    ]
  }
];

// ============================================================================
// YER ŞEKİLLERİ - TÜRKİYE'NİN YERALTI SULARI, KAYNAKLARI VE KIYI TİPLERİ (TEST 1)
// ============================================================================
export const YER_SEKILLERI_TURKIYENIN_YERALTI_SULARI_KAYNAKLARI_VE_KIYI_TIPLERI_TEST_1: McQ[] = [
  {
    text: "<p><b>(2018 KPSS-ÖNLİSANS)</b><br><br>I. Anadolu'daki toprak çeşitliliği son derece fazladır.<br>II. Anadolu aktif bir tektonik kuşakta yer alır.<br>III. Anadolu'da çok sayıda uzun boylu akarsu yer alır.<br>IV. Anadolu'da genç volkanik alanlar bulunmaktadır.<br><br><b>\"Türkiye, termal su kaynakları bakımından zengindir.\" ifadesini kullanan bir kişi, yukarıdakilerden hangilerine dayanarak bu yargıya varmıştır?</b></p>",
    diff: 2,
    expl: "Termal sular (sıcak sular) ve jeotermal enerji potansiyeli; yer kabuğunun kırıklı olduğu aktif fay hatlarına (tektonik kuşak - II) ve magmaya yakın olan genç volkanik arazilerin (IV) varlığına bağlıdır. Toprak çeşitliliği veya akarsuların boyu termal su oluşumunu etkilemez.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Yukarıdaki haritada bazı alanlar numaralandırılarak koyu renkle gösterilmiştir.<br><br><b>Bu alanlardan hangisi termal kaynaklar bakımından daha zengindir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-yeralti-sulari_t1_q2.jpg",
    diff: 2,
    expl: "Türkiye'de termal (sıcak su) ve jeotermal kaynakların en zengin olduğu bölge, kırıklı dağ yapısının (fay hatlarının) çok yaygın olduğu Ege Bölgesi'dir. Haritada Batı Anadolu Fay Hattı (BAF) üzerinde yer alan II numaralı alan termal kaynaklar bakımından en zengin olanıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ÖNLİSANS)</b><br><br><b>Türkiye'de aşağıdaki kıyı tiplerinden hangisi görülmez?</b></p>",
    diff: 1,
    expl: "Fiyort ve Skyer tipi kıyılar, buzulların deniz seviyesine kadar inip vadileri aşındırmasıyla oluşur. Türkiye, orta kuşakta yer aldığı için (mutlak konum) buzullar deniz seviyesine inemez, bu nedenle fiyort tipi kıyılar Türkiye'de görülmez.",
    answers: [
      { text: "Ria tipi kıyı", ok: false },
      { text: "Haliçli kıyı", ok: false },
      { text: "Kalanıklı kıyı", ok: false },
      { text: "Dalmaçya tipi kıyı", ok: false },
      { text: "Fiyortlu kıyı", ok: true }
    ]
  },
  {
    text: "<p><b>(2021 KPSS-LİSANS)</b><br><i>(Haritalı Soru)</i><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak gösterilmiştir.<br><br><b>Bu alanların hangisinde Dalmaçya tipi kıyılar görülmektedir?</b></p>",
    img: "QuestionsImage/kpss/cografya/yer-sekilleri-kiyi-tipleri_t1_q2.jpg",
    diff: 1,
    expl: "Dalmaçya kıyı tipi, dağların kıyıya paralel uzandığı yerlerde deniz seviyesinin yükselmesiyle dağlar arasındaki vadilerin sular altında kalması ve dağ zirvelerinin kıyıya paralel adalar halinde dizilmesiyle oluşur. Türkiye'de bu kıyı tipinin tek örneği Akdeniz kıyılarındaki Antalya Kaş - Finike arasındaki kıyı şerididir (Haritada III numaralı alan).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

