import type { McQ } from "../../../../types";

export const TAR_ILK_TURK_DEVLETLERI_TEST_1: McQ[] = [
  // ---------------- TEST 1 ----------------
  {
    text: "<p><b>İlk Türk devletlerine ait bilgilere;</b></p><p>I. Çin,<br>II. Arap,<br>III. İran,<br>IV. Mısır</p><p><b>kaynaklarının hangilerinden ulaşılabilir?</b></p>",
    diff: 1,
    expl: "İlk Türk devletleri Çin, Arap ve İran ile siyasi ve ticari ilişkiler kurmuştur. Mısır kaynaklarında ise bu döneme ait Türk izlerine rastlanmaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve IV", ok: false },
      { text: "I, II ve III", ok: true } // Cevap E
    ]
  },
  {
    text: "<p><b>Asya ve Avrupa'nın siyasi ve kültürel yapısının değişmesinde;</b></p><p>I. Kırgız,<br>II. Avar,<br>III. Hun</p><p><b>devletlerinden hangileri etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Avarlar ve Hunlar hem Asya'da hem de Avrupa'da devlet kurarak geniş coğrafyaları etkilemişlerdir. Kırgızlar ise sadece Asya'da hüküm sürmüştür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }, // Cevap D
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<ul><li>\"Dokuz Oğuz\" olarak bilinirler.</li><li>Orhun, Selenga nehirleri ile Aral Gölü kıyısında yaşamışlardır.</li><li>II. Göktürk Devleti'ne son vererek kurulmuşlardır.</li></ul><p><b>Özellikleri verilen Türk devleti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Dokuz Oğuz boyunun bir araya gelmesiyle kurulan, Kutluk (II. Göktürk) Devleti'ni yıkarak Ötüken'de kurulan devlet Uygurlardır.",
    answers: [
      { text: "Hun", ok: false },
      { text: "Kırgız", ok: false },
      { text: "Tabgaç", ok: false },
      { text: "Uygur", ok: true }, // Cevap D
      { text: "Hazar", ok: false }
    ]
  },
  {
    text: "<p>Orta Asya Gobi, Taklamakan, Karakum gibi çöllerden, geniş bozkırlardan ve ıssız düzlüklerden oluşmuştur. Ayrıca büyük bölümü kapalı havza olan Orta Asya'da yer yer yüksekliği 7000 metreyi aşan sıra dağlar, büyük çukurlar ve göller yer almıştır. Bu coğrafi bölgedeki bozkırların kışı çok soğuk ve kar fırtınalı, yazı ise genellikle sıcak ve kuraktır.</p><p><b>Orta Asya'nın bu coğrafi ve iklimsel özelliklerinin ilk Türk toplumlarında aşağıdakilerden hangisi üzerinde etkili olduğu <u>söylenemez</u>?</b></p>",
    diff: 1,
    expl: "İkta uygulaması, Türk-İslam devletlerinde (örneğin Büyük Selçuklu) görülen bir toprak sistemidir. İlk Türk devletlerindeki coğrafi şartlarla bir ilgisi yoktur.",
    answers: [
      { text: "Savaşçı özelliklerinin gelişmesi", ok: false },
      { text: "İkta uygulamasının görülmesi", ok: true }, // Cevap B
      { text: "Tarımsal faaliyetlerin az olması", ok: false },
      { text: "Yarı göçebe yaşam tarzının benimsenmesi", ok: false },
      { text: "Hayvancılık eksenli ekonominin oluşması", ok: false }
    ]
  },
  {
    text: "<p>I. Asya Hun<br>II. Birinci Köktürk<br>III. İkinci Köktürk</p><p><b>devletlerinden hangileri ikili teşkilata bağlı olarak <u>yıkılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "İkinci Köktürk (Kutluk) Devleti, ikili teşkilatın getirdiği doğu-batı bölünmesiyle değil, Karluk, Basmil ve Uygur boylarının isyanı sonucu yıkılmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true }, // Cevap C
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>İpek Yolu Orta Asya Türk devletleri için önemli bir gelir kaynağı olmuş ve İpek Yolu'na egemen olan devletler ekonomik yönden ciddi bir gelişme kaydetmişlerdir.</p><p><b>Bu amaç doğrultusunda İpek Yolu'na hâkim olmak isteyen I. Göktürk Devleti aşağıdaki devletlerin hangisi ile ittifak yaparak Akhunlara son vermiştir?</b></p>",
    diff: 2,
    expl: "I. Göktürk Devleti (İstemi Yabgu dönemi), İpek Yolu kontrolü için Sasaniler ile ittifak kurup Akhun (Eftalit) devletini yıkmıştır.",
    answers: [
      { text: "Hazar", ok: false },
      { text: "Sasani", ok: true }, // Cevap B
      { text: "Bizans", ok: false },
      { text: "Uygur", ok: false },
      { text: "Türgiş", ok: false }
    ]
  },
  {
    text: "<p><b>I. Göktürk Devleti'nde batıda aktif siyaset izleyen İstemi Yabgu;</b></p><p>I. Bumin Kağan,<br>II. Kolo Kağan,<br>III. Mukan Kağan</p><p><b>dönemlerinin hangilerinde görev yapmıştır?</b></p>",
    diff: 3,
    expl: "İstemi Yabgu, devletin kurucusu abisi Bumin Kağan, kısa süre tahtta kalan Kolo Kağan ve en parlak dönemi yaşatan Mukan Kağan zamanında batı kanadını yönetmiştir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true } // Cevap E
    ]
  },
  {
    text: "<p><b>Göktürk ve Uygurlar arasında 717 yılında yaşanan ve sonucunda Uygurların bağımsız devlet kurmasının gecikmesine neden olan savaş aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "717 yılında Göktürkler ile Uygurlar arasında yapılan Kargan Savaşı, Uygurların bağımsızlık girişimini bir süre ertelemiştir.",
    answers: [
      { text: "Kargan", ok: true }, // Cevap A
      { text: "Şantan", ok: false },
      { text: "Peiting", ok: false },
      { text: "Belencer", ok: false },
      { text: "Galya", ok: false }
    ]
  },
  {
    text: "<p><b>Türgiş Devleti ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Avrupa'nın siyasi, ekonomik ve sosyal yapısının değişmesinde etkili olanlar Kavimler Göçü ile Hunlar ve Avarlardır. Türgişler Asya'da kalmıştır.",
    answers: [
      { text: "Göktürklerin zayıflaması ile kurulmuşlardır.", ok: false },
      { text: "Bağa Tarkan'ın hükümdarlığı döneminde para bastırılmıştır.", ok: false },
      { text: "Sulu Kağan Dönemi'nde İslam orduları ile yoğun mücadeleler görülmüştür.", ok: false },
      { text: "Alfabe ile ilgili çalışmalarda bulunmuşlardır.", ok: false },
      { text: "Avrupa'nın siyasi, ekonomik ve sosyal yapısının değişmesinde etkili olmuşlardır.", ok: true } // Cevap E
    ]
  },
  {
    text: "<ul><li>Bizans ile ittifak yapmışlardır.</li><li>İslam ordularını Kafkasya'da durdurmuşlardır.</li><li>Rus Knezliği tarafından yıkılmışlardır.</li></ul><p><b>Özellikleri verilen Türk devleti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Hazarlar, Kafkasya'da İslamiyet'in yayılmasını (Belencer Savaşı) durdurmuş ve sonrasında Kiev Knezliği (Ruslar) tarafından yıkılmışlardır.",
    answers: [
      { text: "Hazarlar", ok: true }, // Cevap A
      { text: "Türgişler", ok: false },
      { text: "Uygurlar", ok: false },
      { text: "Sibirler", ok: false },
      { text: "Göktürkler", ok: false }
    ]
  },
  {
    text: "<p>I. Avarlar<br>II. Bulgarlar<br>III. Hazarlar</p><p><b>Yukarıda verilen Türk devletlerinden hangileri İstanbul'u kuşatma girişiminde bulunmuştur?</b></p>",
    diff: 2,
    expl: "İstanbul'u kuşatan ilk Türk devleti Avarlardır. Daha sonra Tuna Bulgarları da İstanbul'u kuşatmıştır. Hazarların böyle bir girişimi yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true }, // Cevap C
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>I. Göktürk Devleti'ne en parlak dönemini yaşatan Türk hükümdarı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "I. Göktürk Devleti en geniş sınırlarına ve en güçlü zamanına Mukan Kağan döneminde ulaşmıştır.",
    answers: [
      { text: "Bumin", ok: false },
      { text: "Bilge", ok: false },
      { text: "Mukan", ok: true }, // Cevap C
      { text: "Tapo", ok: false },
      { text: "Attila", ok: false }
    ]
  },
  {
    text: "<p>Türklerin Orta Asya'dan değişik bölgelere göç etmesinde siyasi, ekonomik, sosyal ve coğrafi faktörler etkili olmuştur.</p><p><b>Aşağıdakilerden hangisi bu göç hareketlerinin nedenleri içinde <u>yer almaz</u>?</b></p>",
    diff: 1,
    expl: "Eski Türklerde Gök Tanrı inancı milli bir dindi, bu dini başka milletlere yayma (cihat/tebliğ) gibi bir düşünceleri yoktu.",
    answers: [
      { text: "Nüfus artışı", ok: false },
      { text: "Hayvan hastalıkları", ok: false },
      { text: "İklim koşulları", ok: false },
      { text: "Çin ve Moğol baskısı", ok: false },
      { text: "Gök Tanrı dinini yayma düşüncesi", ok: true } // Cevap E
    ]
  },
  {
    text: "<p><b>Uygurları Orta Asya'daki diğer Türk devletlerinden ayıran özellikler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "İlk düzenli ordu sistemi Uygurlara değil, Asya Hun Devleti hükümdarı Mete Han'a (Onlu Sistem) aittir.",
    answers: [
      { text: "Yerleşik yaşama geçmeleri", ok: false },
      { text: "Manihaizm'i benimsemeleri", ok: false },
      { text: "İlk düzenli orduyu kurmaları", ok: true }, // Cevap C
      { text: "Kâğıt ve matbaayı kullanmaları", ok: false },
      { text: "Bilim ve sanatta ileri gitmeleri", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi ilk Türk devletlerinde görülen toplumsal bölümlerden biri <u>değildir</u>?</b></p>",
    diff: 1,
    expl: "Oguş (Aile), Urug (Sülale), Bod (Boy), Budun (Millet) sosyal yapıyı oluşturur. Trampa ise takas (ticaret) yöntemidir.",
    answers: [
      { text: "Oguş", ok: false },
      { text: "Trampa", ok: true }, // Cevap B
      { text: "Urug", ok: false },
      { text: "Bod", ok: false },
      { text: "Budun", ok: false }
    ]
  },
  {
    text: "<p><b>Avrupa Hun Devleti ile ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Türk topluluklarını ilk kez tek çatı altında toplayan devlet Avrupa Hunları değil, Asya Hun (Büyük Hun) Devleti'dir (Mete Han dönemi).",
    answers: [
      { text: "Türk kültürünün Avrupa'ya taşınmasında etkili olmuşlardır.", ok: false },
      { text: "Balkanlara inerek Bizans üzerinde baskı oluşturmuşlardır.", ok: false },
      { text: "Bizans'ı Margus ve Anatolios antlaşmaları ilk kez vergiye bağlamışlardır.", ok: false },
      { text: "En parlak dönemlerini Attila zamanında yaşamışlardır.", ok: false },
      { text: "Türk topluluklarını ilk kez tek çatı altında toplamışlardır.", ok: true } // Cevap E
    ]
  }
];

export const TAR_ILK_TURK_DEVLETLERI_TEST_2: McQ[] = [
  // ---------------- TEST 2 ----------------
  {
    text: "<p><b>Aşağıdakilerden hangisi Mani dininin etkisiyle Uygurlar tarafından yapılan tapınaklara verilen isimdir?</b></p>",
    diff: 2,
    expl: "Uygurlarda Manihaizm inancı tapınak mimarisini geliştirmiştir. Bu tapınaklara 'Stupa' adı verilir.",
    answers: [
      { text: "Umay", ok: false },
      { text: "Ay Tengri", ok: false },
      { text: "Stupa", ok: true },
      { text: "Raca", ok: false },
      { text: "Ongun", ok: false }
    ]
  },
  {
    text: "<p><b>Uygur ve Göktürk devletlerinin ortak özellikleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 1,
    expl: "Uygurlar yerleşik hayata geçtikleri için mimaride büyük gelişim göstermişlerdir, ancak Göktürkler göçebe oldukları için mimari eser bırakmamışlardır.",
    answers: [
      { text: "Yazılı eserler bırakmaları", ok: false },
      { text: "Alfabe çalışmalarında bulunmaları", ok: false },
      { text: "Veraset sistemi", ok: false },
      { text: "Mimaride gelişim göstermeleri", ok: true },
      { text: "Sözlü edebiyata önem vermeleri", ok: false }
    ]
  },
  {
    text: "<p><b>İslam öncesi Türk devletlerinde görülen;</b></p><p>I. Boylar federasyonu şeklinde örgütlenme<br>II. İkili yönetim anlayışına sahip olma<br>III. göçebe yaşam tarzını benimseme</p><p><b>özelliklerinin aşağıdakilerden hangisine ortam hazırladıkları <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Türk devletlerinde oligarşi (zümre/soylu yönetimi) görülmez, yönetim doğrudan hanedana (Kut anlayışı) aittir.",
    answers: [
      { text: "Yaylak - kışlak hayatının görülmesi", ok: false },
      { text: "Federatif devlet anlayışı", ok: false },
      { text: "Savaşçılığın gelişmesi", ok: false },
      { text: "Devletlerin kısa ömürlü olması", ok: false },
      { text: "Oligarşik iktidarların ortaya çıkması", ok: true }
    ]
  },
  {
    text: "<p><b>Uygur Devleti Dönemi'nde vergi tahsilatı yapmakla sorumlu olan görevli aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Uygurlarda vergi toplayan maliye görevlisine 'İmga' veya 'Ağıcı' denilirdi. Bahşi öğretmen, Otacı hekim, Tilmaç çevirmendir.",
    answers: [
      { text: "Otacı", ok: false },
      { text: "Bahşi", ok: false },
      { text: "İmga", ok: true },
      { text: "Alpagu", ok: false },
      { text: "Tilmaç", ok: false }
    ]
  },
  {
    text: "<p><b>İlk Türk devletleri ekonomik açıdan gelişmek için;</b></p><p>I. Kürk,<br>II. İpek,<br>III. Baharat</p><p><b>yollarından hangileri üzerinde hâkimiyet kurmaya çalışmışlardır?</b></p>",
    diff: 1,
    expl: "İlk Türk devletleri Orta Asya coğrafyasından geçen İpek ve Kürk yollarını kontrol etmişlerdir. Baharat Yolu daha güneyde, Hindistan'dan Mısır'a uzanır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Orta Asya Türk devletlerinde hatunların;</b></p><p>I. ayrı saraya sahip olma,<br>II. kurultaya başkanlık etme,<br>III. elçi kabul edebilme</p><p><b>görev ve özelliklerinden hangilerine sahip olduğu söylenebilir?</b></p>",
    diff: 2,
    expl: "Hatunlar (Kağanın eşi) siyasi yetkilere sahipti; gerektiğinde elçi kabul eder ve kağan yokken kurultaya başkanlık yaparlardı.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>İlk Türk devletlerinde hem toplum hem devlet hayatında töre adı verilen kurallar belirgin bir şekilde egemen olmuştur.</p><p><b>Sözlü hukuk kuralları olan törenin oluşumunda;</b></p><p>I. kağan,<br>II. kurultay,<br>III. halk</p><p><b>unsurlarından hangilerinin katkı sağladığı söylenebilir?</b></p>",
    diff: 2,
    expl: "Töre kuralları kağanın emirleri (yarlığ), kurultay kararları ve halkın geleneklerinden (yusün) oluşurdu.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. Taht kavgalarının yaşanması<br>II. Egemenliğin tek bir hanedana ait olması<br>III. Devlet yönetiminde dinî kuralların etkin kılınması</p><p><b>Yukarıda verilen durumlardan hangilerinin kut anlayışının sonuçları arasında yer aldığı söylenebilir?</b></p>",
    diff: 2,
    expl: "Kut (yönetme yetkisinin Tanrı'dan kan bağıyla gelmesi), egemenliği bir hanedana verirken, ailedeki tüm erkeklerin tahtta hak iddia etmesine (taht kavgalarına) yol açar. İlk Türk devletleri teokratik (dinî kural) değildir.",
    answers: [
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Uygur ve Göktürk devletlerinin ortak özellikleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 1,
    expl: "Yazılı hukuk kuralları yerleşik yaşama geçen Uygurlar ile başlamıştır, Göktürklerde hukuk sözlüdür (Töre).",
    answers: [
      { text: "Sözlü edebiyatın gelişmesi", ok: false },
      { text: "Yazılı hukuk kurallarının oluşması", ok: true },
      { text: "Ülkenin hanedanın malı olarak kabul edilmesi", ok: false },
      { text: "Kendilerine özgü alfabeler kullanılması", ok: false },
      { text: "Hükümdarlarının farklı din arayışlarına girmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Türk devletlerinin kısa ömürlü olmasında aşağıdakilerden hangisinin etkili olduğu <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Oligarşi, zümre (soylu azınlık) yönetimidir ve Türk devletlerinde görülmez. Yıkılma nedenleri kut inancı, ikili teşkilat ve taht kavgalarıdır.",
    answers: [
      { text: "Oligarşik yönetimin benimsenmesi", ok: true },
      { text: "Ülkenin hanedanın ortak malı olarak kabul edilmesi", ok: false },
      { text: "İkili yönetim anlayışının görülmesi", ok: false },
      { text: "Kut inancının kan yolu ile geçmesi", ok: false },
      { text: "Veraset sisteminin düzensiz olması", ok: false }
    ]
  },
  {
    text: "<p><b>İlk Türk devletlerinin;</b></p><p>I. Şamanizm'i benimsemeleri,<br>II. geniş bir coğrafyada egemenlik kurmaları,<br>III. yazıyı geç kullanmaları</p><p><b>özelliklerinden hangilerinin Türk tarihinin incelenmesini zorlaştırdığı <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Türk tarihinin zor incelenme sebebi coğrafyanın genişliği ve yazının geç kullanılmasıdır. Şamanizm gibi inanç sistemlerinin tarih incelemesini zorlaştırmakla bir ilgisi yoktur.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türk topluluklarının;</b></p><ul><li><b>Nevruz bayramını kutlamaları,</b></li><li><b>Çiçek aşısını uygulamaları,</b></li></ul><p>I. astronomi,<br>II. tıp,<br>III. toponomi</p><p><b>bilim alanlarının hangilerinde ilerleme kaydettiğini göstermektedir?</b></p>",
    diff: 2,
    expl: "Nevruz, güneş yılı takvimiyle (Astronomi) ilgilidir. Aşı uygulaması ise Tıp alanındaki gelişmeyi kanıtlar.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<ul><li>Göktürkler Dönemi'ne aittir.</li><li>Demir dağın eritilip Türklerin tarih sahnesine çıkışı anlatılmıştır.</li></ul><p><b>Özellikleri verilen edebî eser aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Göktürklerin demir dağı eriterek kurtulduklarını anlatan efsane Ergenekon Destanı'dır. Bozkurt Destanı da Göktürklere aittir ancak dişi kurttan türeyişi anlatır.",
    answers: [
      { text: "Bozkurt Destanı", ok: false },
      { text: "Yenisey Yazıtları", ok: false },
      { text: "Ergenekon Destanı", ok: true },
      { text: "Orhun Abideleri", ok: false },
      { text: "Göç Destanı", ok: false }
    ]
  },
  {
    text: "<p><b>İtil Bulgarları yöneticileri tarafından kullanılan ve Hazar Hakanlığı'na bağlılıklarının sembolü olarak kabul edilen unvan aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "İtil (Volga) Bulgarları hükümdarı Almış Han, bağımsız olmadan önce Hazar hakanına bağlılığın simgesi olarak 'İlteber' (vali/tâbi hükümdar) unvanını kullanmıştır.",
    answers: [
      { text: "İlteber", ok: true },
      { text: "İdikut", ok: false },
      { text: "Ay Tengri", ok: false },
      { text: "Yalvaç", ok: false },
      { text: "Bitigci", ok: false }
    ]
  }
];

export const TAR_ILK_TURK_DEVLETLERI_TEST_3: McQ[] = [
  // ---------------- TEST 3 ----------------
  {
    text: "<p>Asya Hunları, Çinlilere genellikle hayvansal ürünler satarken onlardan tahıl ve ipekli kumaşlar almışlardır.</p><p><b>Buna göre Asya Hun Devleti ile ilgili olarak;</b></p><p>I. yarı göçebe yaşam tarzını benimsedikleri,<br>II. askerî bakımdan güçlü oldukları,<br>III. komşuları ile ticari ilişkiler kurdukları</p><p><b>yargılarından hangilerine ulaşılabilir?</b></p>",
    diff: 2,
    expl: "Hayvansal ürün satıp tarım ürünü almaları yarı göçebe olduklarını kanıtlar. Alışveriş yapmaları da ticari ilişkiyi gösterir. Sadece bu metinden askeri güce ulaşılamaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Eski Türklere ait aşağıdaki özelliklerden hangisinin Türklerin demokrasiyle yakınlıklarının doğrudan bir göstergesi olduğu söylenebilir?</b></p>",
    diff: 1,
    expl: "Devlet meselelerinin Kurultay (Toy) adı verilen mecliste, boy beylerinin katılımıyla tartışılarak karara bağlanması demokratik bir özelliktir.",
    answers: [
      { text: "Komşularıyla iyi ilişkiler kurmaları", ok: false },
      { text: "Toplum yapısında eşitlik ve adaleti hâkim kılmaları", ok: false },
      { text: "Federatif anlayışı benimsemeleri", ok: false },
      { text: "Devlet yönetiminde kurultay meclisine yer vermeleri", ok: true },
      { text: "Elçi kabulünde hatunların da yetkisinin olması", ok: false }
    ]
  },
  {
    text: "<p>Orta Asya Türk devletlerinde hükümdar ailesinden gelen herkesin ülkeyi yönetme yetkisine sahip olduğuna inanılırdı.</p><p><b>Aşağıdakilerden hangisinin bu durumun bir sonucu olduğu savunulabilir?</b></p>",
    diff: 1,
    expl: "Kut kan yoluyla tüm hanedan erkeklerine geçtiği için, kağan ölünce her prens (tigin) tahtta hak iddia etmiş ve bu da taht kavgalarına neden olmuştur.",
    answers: [
      { text: "Devletin askerî ve siyasi bakımdan güçlenmesi", ok: false },
      { text: "Boylar federasyonu şeklinde örgütlenilmesi", ok: false },
      { text: "Taht kavgalarının yaşanması", ok: true },
      { text: "Töre adı verilen hukuk kurallarının hâkim olması", ok: false },
      { text: "Halkın devlete olan bağlılığının artması", ok: false }
    ]
  },
  {
    text: "<p>I. Balbal adı verilen heykellerin dikilmesi<br>II. Hayvancılığın temel geçim kaynağı olması<br>III. Taşınabilir sanat eserlerinin yapılması</p><p><b>Orta Asya Türk topluluklarına ait yukarıda verilen özelliklerden hangileri göçebe yaşam tarzının kanıtıdır?</b></p>",
    diff: 2,
    expl: "Göçebe hayatta temel geçim hayvancılıktır ve eşyalar taşınabilir olmak zorundadır. Balballar (mezar taşları) kalıcı yapılardır ve göçebeliğin değil, ahiret inancının kanıtıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<ul><li>Uygurlar Dönemi'ne aittir.</li><li>Türklerin açlık ve kuraklık sonucunda anavatanlarından ayrılmalarını anlatır.</li></ul><p><b>Özellikleri verilen Türk destanı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Kutsal Yada taşının Çinlilere verilmesi sonucu ülkeye kıtlık gelmesini ve Uygurların göç etmesini anlatan destan Göç Destanı'dır.",
    answers: [
      { text: "Bozkurt", ok: false },
      { text: "Ergenekon", ok: false },
      { text: "Türeyiş", ok: false },
      { text: "Göç", ok: true },
      { text: "Oğuz Kağan", ok: false }
    ]
  },
  {
    text: "<p><b>Uygurlarla ilgili aşağıdakilerden hangisi doğru <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Türk tarihinin ilk yazılı eserleri (Orhun Abideleri) II. Göktürkler zamanında dikilmiştir. Uygurlara ait eserler daha sonradır.",
    answers: [
      { text: "Yerleşik yaşam tarzını benimsemişlerdir.", ok: false },
      { text: "Yazılı hukuk belgelerini düzenlemişlerdir.", ok: false },
      { text: "Kütüphaneler oluşturmuşlardır.", ok: false },
      { text: "İlk yazılı Türk eserlerini ortaya koymuşlardır.", ok: true },
      { text: "Manihaizm dinini tanıtmışlardır.", ok: false }
    ]
  },
  {
    text: "<p>I. Göktürk alfabesi ile yazılması<br>II. Bilge Kağan, Kültekin ve Vezir Tonyukuk adına dikilmesi<br>III. Menkıbe özelliği taşıması</p><p><b>Yukarıdakilerden hangileri Orhun Abideleri'ne ait bir özellik <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Orhun Abideleri efsane (menkıbe) değil, gerçek tarihi olayları anlatan somut bir siyasetnamedir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>İlk Türk devletlerinde hükümdar çocukları \"Tigin\" unvanı ile anılırdı.</p><p>Tiginlerin idaresine bazı bölgeler bırakılır, yanlarına da askerî birlik verilirdi.</p><p><b>Bu uygulama ile;</b></p><p>I. monarşik yapıyı güçlendirmek,<br>II. askerî ve idari alanda deneyim kazanmalarını sağlamak,<br>III. boylar federasyonu şeklinde örgütlenmek</p><p><b>düşüncelerinden hangileri amaçlanmıştır?</b></p>",
    diff: 2,
    expl: "Tiginlerin (prenslerin) boyların başına yönetici (şad) olarak gönderilmesi, devlet tecrübesi kazanmaları (staj) içindir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>İslamiyet öncesi Türk devletlerinin yönetim anlayışı ile ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Kut inancına göre yönetme yetkisi kan yoluyla geçer fakat tahta hangi şehzadenin çıkacağı önceden belli değildir, güçlü olan başa geçer.",
    answers: [
      { text: "Egemenlik tanrısal kaynaklıdır.", ok: false },
      { text: "Hanedanın hükümdar olacak üyesi önceden belirlenir.", ok: true },
      { text: "Hükümdar olma hakkı kız çocuklarına verilmez.", ok: false },
      { text: "Ülke federatif anlayışla yönetilir.", ok: false },
      { text: "Yönetimle ilgili kararlar kurultayda alınır.", ok: false }
    ]
  },
  {
    text: "<p>Uygurlarda yerleşik yaşama geçilmesi ile ticari faaliyetler yoğunlaşma göstermiş ve sözleşmeler yapılmıştır.</p><p><b>Uygurlarda görülen bu ticari sözleşmeler aşağıdaki kavramlardan hangisi ile ifade edilmiştir?</b></p>",
    diff: 3,
    expl: "Verilen şıklar arasında 'Trampa' (takas) ticaretle ilgili olan tek kavramdır. Uygurlarda ticari anlaşmalar ve borç alıp verme gelişmiştir.",
    answers: [
      { text: "Umay", ok: false },
      { text: "Trampa", ok: true },
      { text: "Yuğ", ok: false },
      { text: "İduk", ok: false },
      { text: "Ongun", ok: false }
    ]
  },
  {
    text: "<p><b>İlk Türk devletlerinde keşif görevi yapan askerî birlik aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Düşman durumu ve arazisi hakkında bilgi toplamak için gönderilen öncü keşif birliklerine 'Yelme' adı verilir.",
    answers: [
      { text: "Subaşı", ok: false },
      { text: "Sipahi", ok: false },
      { text: "Yelme", ok: true },
      { text: "Börk", ok: false },
      { text: "Noyan", ok: false }
    ]
  },
  {
    text: "<p><b>Kurultay ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "İlk Türk devletlerinde din adamlarının devlet yönetiminde doğrudan bir rolü (Teokrasi) yoktur. Kurultay siyasi ve demokratik bir meclistir.",
    answers: [
      { text: "Teokratik özellik göstermesi", ok: true },
      { text: "Katılmayan boy beylerinin vatana ihanet ile suçlanması", ok: false },
      { text: "Yargı yetkisinin bulunması", ok: false },
      { text: "İnsan ve hayvan sayımı gibi çalışmaları düzenlemesi", ok: false },
      { text: "Katılanlara \"Toygun\" unvanının verilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>İlk yazılı hukuk kurallarının Uygurlar Dönemi'nde görülmesinde Uygurların;</b></p><p>I. yerleşik yaşama geçiş yapmaları,<br>II. özel mülkiyet anlayışının oluşması,<br>III. ticari faaliyetlerin gelişmesi</p><p><b>özelliklerinden hangileri etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Yerleşik yaşam, ev/tarla gibi özel mülkiyeti doğurmuş, ticaret canlanmış ve bunların kayıt altına alınması ihtiyacı yazılı hukuku başlatmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Paralı askerlik uygulamalarına yer veren ilk Türk devleti aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Türk devletlerinde ordu-millet anlayışı (herkes asker) vardır. Ancak ticaretle zenginleşen Hazarlar, ordularında ücretli (paralı) asker kullanan ilk ve tek Türk devletidir.",
    answers: [
      { text: "Uygurlar", ok: false },
      { text: "Hazar", ok: true },
      { text: "Göktürk", ok: false },
      { text: "Hun", ok: false },
      { text: "Kırgız", ok: false }
    ]
  },
  {
    text: "<p><b>Oğuzlara ait olan Dede Korkut Hikâyeleri Oğuzların aşağıdaki Türk boylarından hangisi ile olan mücadelesini konu almaktadır?</b></p>",
    diff: 2,
    expl: "Dede Korkut Hikayeleri, Oğuz Türklerinin Kıpçak (Kuman) Türkleri ile olan mücadelelerini anlatır.",
    answers: [
      { text: "Kıpçak", ok: true },
      { text: "İskit", ok: false },
      { text: "Tabgaç", ok: false },
      { text: "Uygur", ok: false },
      { text: "Hun", ok: false }
    ]
  }
];

export const TAR_ILK_TURK_DEVLETLERI_TEST_4: McQ[] = [
  // ---------------- TEST 4 ----------------
  {
    text: "<p><b>İslam öncesi Türk devletlerinde görülen;</b></p><ul><li>Boylar federasyonu şeklinde örgütlenilmesi</li><li>İkili yönetim anlayışının hâkim olması</li><li>Göçebe yaşam tarzının benimsenmesi</li></ul><p><b>gibi özellikler aşağıdakilerden hangisi ile <u>ilişkilendirilemez</u>?</b></p>",
    diff: 2,
    expl: "Verilen bu özelliklerin hiçbiri yazının kullanılması veya yazılı eserlerin (edebiyat, hukuk vb.) ortaya çıkması ile ilgili değildir.",
    answers: [
      { text: "Yazılı eserlerin ortaya çıkması", ok: true },
      { text: "Federatif devlet anlayışı", ok: false },
      { text: "Savaşçı özelliklerinin gelişmesi", ok: false },
      { text: "Devletlerin kısa ömürlü olması", ok: false },
      { text: "Yaylak kışlak hayatının görülmesi", ok: false }
    ]
  },
  {
    text: "<p>Yarı göçebe yaşam tarzı sebebi ile farklı coğrafyalara göç eden Türk toplulukları farklı kültürlerle etkileşim içerisinde bulunmuş ve bu süreçte Gök Tanrı dışında da dinler - inanışlar benimsemişlerdir.</p><p><b>Bu duruma göre topluluk - din eşleşmelerinden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Tabgaçlar Budizm'i benimsemiş ve Çinlileşmişlerdir. Zerdüştlük (Ateşperestlik) bir Türk devleti tarafından resmî din olarak benimsenmemiştir.",
    answers: [
      { text: "Hazarlar - Musevilik", ok: false },
      { text: "Avarlar - Hristiyanlık", ok: false },
      { text: "Uygurlar - Manihaizm", ok: false },
      { text: "Karluklar - İslamiyet", ok: false },
      { text: "Tabgaçlar - Zerdüştlük", ok: true }
    ]
  },
  {
    text: "<p>Çin elçisi Wang Yen - Te 981 - 984 yılları arasında Turfan Uygurlarının yaşadığı coğrafyaya ziyarette bulunmuş ve raporunda Turfan Uygurlarında \"Turfan şehrinde kar ve yağmur yoktur. Evler beyaz badanalıdır. Chinling dağlarından çıkan nehir şehrin bütün çevresini dolaşır, tarlaları ve meyve bahçelerini sular.\" şeklinde bahsetmiştir.</p><p><b>Buna göre Turfan Uygurları ile ilgili aşağıda verilen yargılardan hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Metinde evlerden (mimari), tarla ve bahçelerden (tarım ve yerleşik yaşam) bahsedilmektedir ancak boylar federasyonu gibi siyasi bir örgütlenme bilgisi yoktur.",
    answers: [
      { text: "Mimari eserler verilmiştir.", ok: false },
      { text: "Yerleşik yaşamdan izler görülür.", ok: false },
      { text: "Tarımsal faaliyetlerde bulunulmuştur.", ok: false },
      { text: "Coğrafi ve iklimsel özellikler hayatı kolaylaştırmıştır.", ok: false },
      { text: "Boylar federasyonu şeklinde örgütlenilmiştir.", ok: true }
    ]
  },
  {
    text: "<p><b>İlk Türk devletlerinde hükümdarların</b> \"iktisadi gücü\" <b>aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 3,
    expl: "Hükümdarın halkı doyurması, zenginliği paylaştırması anlamına gelen ve ekonomik gücü simgeleyen kavram 'Ülüş' (pay/kısmet) kavramıdır.",
    answers: [
      { text: "Ülüş", ok: true },
      { text: "Kut", ok: false },
      { text: "Küç", ok: false },
      { text: "İl", ok: false },
      { text: "Tüz", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen yönetici-görev eşleştirmelerinden hangisi doğru <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Bitigci, devlet yazışmalarını yapan katip (sekreter) demektir, Vezir (Aygucı) demek değildir.",
    answers: [
      { text: "Ağılıg - Hazine görevlisi", ok: false },
      { text: "Aygucı - Hükûmet başkanı", ok: false },
      { text: "Alpagu - Subay", ok: false },
      { text: "Bitigci - Vezir", ok: true },
      { text: "Tarkan - Komutan", ok: false }
    ]
  },
  {
    text: "<p>I. Elçileri kabul etme<br>II. Kurultaya başkanlık etme<br>III. Ülkeyi gerektiğinde hakan adına yönetme</p><p><b>Yukarıda verilenlerden hangileri ilk Türk topluluklarında hatunun görevleri arasındadır?</b></p>",
    diff: 1,
    expl: "Hatun, kağan seferde veya küçükken devleti yönetebilir (naip), kurultaya katılabilir ve kendi elçilerini kabul edebilirdi.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Uygurlarla birlikte Türklerde görülmeye başlanan sanat dalları arasında hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Heykelcilik, Uygurlardan çok daha önce dikilen Balbal heykelleri (mezar taşları) sayesinde İskitler, Asya Hunları ve Göktürkler döneminde de vardı.",
    answers: [
      { text: "Minyatür", ok: false },
      { text: "Mimari", ok: false },
      { text: "Heykelcilik", ok: true },
      { text: "Fresko", ok: false },
      { text: "Ciltçilik", ok: false }
    ]
  },
  {
    text: "<p><b>İlk Türklerde kağanların hükümdarlık alametleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 1,
    expl: "Hutbe okutmak, İslamiyet'in kabulüyle birlikte Türk devlet geleneğine giren bir hükümdarlık alametidir. İslam öncesinde yoktur.",
    answers: [
      { text: "Otağ", ok: false },
      { text: "Hutbe", ok: true },
      { text: "Nevbet", ok: false },
      { text: "Yarlığ", ok: false },
      { text: "Örgin", ok: false }
    ]
  },
  {
    text: "<p><b>Avarlar ile ilgili aşağıdakilerden hangisi doğru bir bilgi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Baga Tarkan, kendi adına para bastıran Türgiş hükümdarıdır. Avarların en ünlü hükümdarı ise Bayan Kağan'dır.",
    answers: [
      { text: "Slavları askerî bakımdan etkilemişlerdir.", ok: false },
      { text: "Hristiyanlığı kabul eden İlk Türk devletidir.", ok: false },
      { text: "Hem Asya hem Avrupa'da devlet kurmuşlardır.", ok: false },
      { text: "En önemli hükümdarları Baga Tarkan'dır.", ok: true },
      { text: "Göktürkler ile mücadele etmişlerdir.", ok: false }
    ]
  },
  {
    text: "<p><b>Eski Türk topluluklarında hükümdar dâhil herkesin töre adı verilen hukuk kurallarına uymak zorunda olması;</b></p><p>I. kanun üstünlüğünün kabul edilmesi,<br>II. taht kavgalarının azalması,<br>III. monarşik yönetimin egemen olması</p><p><b>durumlarından hangilerini engellemiştir?</b></p>",
    diff: 3,
    expl: "Hükümdarın bile Töreye uymak zorunda olması mutlak monarşiyi (krallığın sınırsız gücünü) engeller, kanun üstünlüğünü gösterir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Hun<br>II. Türgiş<br>III. Hazar</p><p><b>Yukarıda verilen Türk topluluklarından hangileri Müslüman Araplarla askerî mücadeleye girişmiştir?</b></p>",
    diff: 2,
    expl: "Hazarlar Hz. Osman döneminde (Kafkasya'da), Türgişler ise Emeviler döneminde (Orta Asya'da) Müslüman Arapların ilerleyişini durdurmuşlardır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Uygur bilgini Singku Seli Tutung tarafından Budizm'i tanıtmak amacıyla Çinceden Uygur diline çevrilen yazılı eser aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Altun Yaruk (Altın Işık), Budizm felsefesini anlatan Çinceden Uygurcaya çevrilmiş en önemli dini-edebi metindir.",
    answers: [
      { text: "Altun Yaruk", ok: true },
      { text: "Pendname", ok: false },
      { text: "Nibelungen", ok: false },
      { text: "Yenisey Yazıtları", ok: false },
      { text: "Codex Cumanicus", ok: false }
    ]
  },
  {
    text: "<p><b>Makedon Kralı Büyük İskender ile Türklerin mücadelelerini konu alan Türk destanı hangisidir?</b></p>",
    diff: 2,
    expl: "Büyük İskender'in Asya seferi sırasında Saka (İskit) Türkleriyle yaptığı mücadeleleri anlatan destan Şu Destanı'dır.",
    answers: [
      { text: "Bozkurt", ok: false },
      { text: "Şu", ok: true },
      { text: "Şehname", ok: false },
      { text: "Sihirli Geyik", ok: false },
      { text: "Dede Korkut", ok: false }
    ]
  },
  {
    text: "<p><b>İslam öncesi Türk devletlerinde kullanılan hukuk terimleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 3,
    expl: "Emr-i Dad (Adalet Emiri), Türk-İslam devletlerinde (örneğin Türkiye Selçuklularında) örfi davalara bakan görevlinin unvanıdır. İslam öncesinde yoktur.",
    answers: [
      { text: "Tüz", ok: false },
      { text: "Könilik", ok: false },
      { text: "Emr-i Dad", ok: true },
      { text: "Yarguci", ok: false },
      { text: "Uzluk", ok: false }
    ]
  },
  {
    text: "<p>Arzu Öğretmen sınıfta bulunan Fırat'a \"Hangisi ilk kez Uygurlarda görülen uygulamalardan biri değildir?\" sorusunu yöneltmiştir.</p><p><b>Fırat doğru yanıta ulaşmak için aşağıdakilerden hangisini işaretlemelidir?</b></p>",
    diff: 1,
    expl: "İlk milli alfabe ve ilk yazılı eserler Uygurlara değil, onlardan önce yaşayan Göktürklere (Orhun Abideleri) aittir.",
    answers: [
      { text: "İlk yazının kullanımı", ok: true },
      { text: "İlk mimari faaliyetler", ok: false },
      { text: "İlk kütüphaneler", ok: false },
      { text: "İlk yazılı hukuk kuralları", ok: false },
      { text: "İlk kâğıt - matbaa", ok: false }
    ]
  }
];
