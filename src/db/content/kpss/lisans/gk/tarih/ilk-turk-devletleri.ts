import type { McQ } from "../../../../types";

export const TAR_ILK_TURK_DEVLETLERI: McQ[] = [
  // ---------------- TEST 1 ----------------
  {
    text: "İlk Türk devletlerine ait bilgilere;\nI. Çin,\nII. Arap,\nIII. İran,\nIV. Mısır\nkaynaklarının hangilerinden ulaşılabilir?",
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
    text: "Asya ve Avrupa'nın siyasi ve kültürel yapısının değişmesinde;\nI. Kırgız,\nII. Avar,\nIII. Hun\ndevletlerinden hangileri etkili olmuştur?",
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
    text: "- \"Dokuz Oğuz\" olarak bilinirler.\n- Orhun, Selenga nehirleri ile Aral Gölü kıyısında yaşamışlardır.\n- II. Göktürk Devleti'ne son vererek kurulmuşlardır.\nÖzellikleri verilen Türk devleti aşağıdakilerden hangisidir?",
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
    text: "Orta Asya Gobi, Taklamakan, Karakum gibi çöllerden, geniş bozkırlardan ve ıssız düzlüklerden oluşmuştur... Bu coğrafi bölgedeki bozkırların kışı çok soğuk ve kar fırtınalı, yazı ise genellikle sıcak ve kuraktır.\nOrta Asya'nın bu coğrafi ve iklimsel özelliklerinin ilk Türk toplumlarında aşağıdakilerden hangisi üzerinde etkili olduğu söylenemez?",
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
    text: "I. Asya Hun\nII. Birinci Köktürk\nIII. İkinci Köktürk\ndevletlerinden hangileri ikili teşkilata bağlı olarak yıkılmamıştır?",
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
    text: "İpek Yolu'na hâkim olmak isteyen I. Göktürk Devleti aşağıdaki devletlerin hangisi ile ittifak yaparak Akhunlara son vermiştir?",
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
    text: "I. Göktürk Devleti'nde batıda aktif siyaset izleyen İstemi Yabgu;\nI. Bumin Kağan,\nII. Kolo Kağan,\nIII. Mukan Kağan\ndönemlerinin hangilerinde görev yapmıştır?",
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
    text: "Göktürk ve Uygurlar arasında 717 yılında yaşanan ve sonucunda Uygurların bağımsız devlet kurmasının gecikmesine neden olan savaş aşağıdakilerden hangisidir?",
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
    text: "Türgiş Devleti ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte değildir?",
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
    text: "- Bizans ile ittifak yapmışlardır.\n- İslam ordularını Kafkasya'da durdurmuşlardır.\n- Rus Knezliği tarafından yıkılmışlardır.\nÖzellikleri verilen Türk devleti aşağıdakilerden hangisidir?",
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
    text: "I. Avarlar\nII. Bulgarlar\nIII. Hazarlar\nYukarıda verilen Türk devletlerinden hangileri İstanbul'u kuşatma girişiminde bulunmuştur?",
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
    text: "I. Göktürk Devleti'ne en parlak dönemini yaşatan Türk hükümdarı aşağıdakilerden hangisidir?",
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
    text: "Türklerin Orta Asya'dan değişik bölgelere göç etmesinde siyasi, ekonomik, sosyal ve coğrafi faktörler etkili olmuştur.\nAşağıdakilerden hangisi bu göç hareketlerinin nedenleri içinde yer almaz?",
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
    text: "Uygurları Orta Asya'daki diğer Türk devletlerinden ayıran özellikler arasında aşağıdakilerden hangisi yer almaz?",
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
    text: "Aşağıdakilerden hangisi ilk Türk devletlerinde görülen toplumsal bölümlerden biri değildir?",
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
    text: "Avrupa Hun Devleti ile ilgili aşağıdakilerden hangisi söylenemez?",
    diff: 2,
    expl: "Türk topluluklarını ilk kez tek çatı altında toplayan devlet Avrupa Hunları değil, Asya Hun (Büyük Hun) Devleti'dir (Mete Han dönemi).",
    answers: [
      { text: "Türk kültürünün Avrupa'ya taşınmasında etkili olmuşlardır.", ok: false },
      { text: "Balkanlara inerek Bizans üzerinde baskı oluşturmuşlardır.", ok: false },
      { text: "Bizans'ı Margus ve Anatolios antlaşmaları ilk kez vergiye bağlamışlardır.", ok: false },
      { text: "En parlak dönemlerini Attila zamanında yaşamışlardır.", ok: false },
      { text: "Türk topluluklarını ilk kez tek çatı altında toplamışlardır.", ok: true } // Cevap E
    ]
  },
  // ---------------- TEST 2 ----------------
  {
    text: "Aşağıdakilerden hangisi Mani dininin etkisiyle Uygurlar tarafından yapılan tapınaklara verilen isimdir?",
    diff: 2,
    expl: "Uygurlarda Manihaizm inancı tapınak mimarisini geliştirmiştir. Bu tapınaklara 'Stupa' adı verilir.",
    answers: [
      { text: "Umay", ok: false }, { text: "Ay Tengri", ok: false }, { text: "Stupa", ok: true }, { text: "Raca", ok: false }, { text: "Ongun", ok: false }
    ]
  },
  {
    text: "Uygur ve Göktürk devletlerinin ortak özellikleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 1,
    expl: "Uygurlar yerleşik hayata geçtikleri için mimaride büyük gelişim göstermişlerdir, ancak Göktürkler göçebe oldukları için mimari eser bırakmamışlardır.",
    answers: [
      { text: "Yazılı eserler bırakmaları", ok: false }, { text: "Alfabe çalışmalarında bulunmaları", ok: false }, { text: "Veraset sistemi", ok: false }, { text: "Mimaride gelişim göstermeleri", ok: true }, { text: "Sözlü edebiyata önem vermeleri", ok: false }
    ]
  },
  {
    text: "İslam öncesi Türk devletlerinde görülen;\nI. Boylar federasyonu şeklinde örgütlenme\nII. İkili yönetim anlayışına sahip olma\nIII. göçebe yaşam tarzını benimseme\nözelliklerinin aşağıdakilerden hangisine ortam hazırladıkları söylenemez?",
    diff: 3,
    expl: "Türk devletlerinde oligarşi (zümre/soylu yönetimi) görülmez, yönetim doğrudan hanedana (Kut anlayışı) aittir.",
    answers: [
      { text: "Yaylak - kışlak hayatının görülmesi", ok: false }, { text: "Federatif devlet anlayışı", ok: false }, { text: "Savaşçılığın gelişmesi", ok: false }, { text: "Devletlerin kısa ömürlü olması", ok: false }, { text: "Oligarşik iktidarların ortaya çıkması", ok: true }
    ]
  },
  {
    text: "Uygur Devleti Dönemi'nde vergi tahsilatı yapmakla sorumlu olan görevli aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Uygurlarda vergi toplayan maliye görevlisine 'İmga' veya 'Ağıcı' denilirdi. Bahşi öğretmen, Otacı hekim, Tilmaç çevirmendir.",
    answers: [
      { text: "Otacı", ok: false }, { text: "Bahşi", ok: false }, { text: "İmga", ok: true }, { text: "Alpagu", ok: false }, { text: "Tilmaç", ok: false }
    ]
  },
  {
    text: "İlk Türk devletleri ekonomik açıdan gelişmek için;\nI. Kürk,\nII. İpek,\nIII. Baharat\nyollarından hangileri üzerinde hâkimiyet kurmaya çalışmışlardır?",
    diff: 1,
    expl: "İlk Türk devletleri Orta Asya coğrafyasından geçen İpek ve Kürk yollarını kontrol etmişlerdir. Baharat Yolu daha güneyde, Hindistan'dan Mısır'a uzanır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Orta Asya Türk devletlerinde hatunların;\nI. ayrı saraya sahip olma,\nII. kurultaya başkanlık etme,\nIII. elçi kabul edebilme\ngörev ve özelliklerinden hangilerine sahip olduğu söylenebilir?",
    diff: 2,
    expl: "Hatunlar (Kağanın eşi) siyasi yetkilere sahipti; gerektiğinde elçi kabul eder ve kağan yokken kurultaya başkanlık yaparlardı.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "İlk Türk devletlerinde hem toplum hem devlet hayatında töre adı verilen kurallar belirgin bir şekilde egemen olmuştur.\nSözlü hukuk kuralları olan törenin oluşumunda;\nI. kağan,\nII. kurultay,\nIII. halk\nunsurlarından hangilerinin katkı sağladığı söylenebilir?",
    diff: 2,
    expl: "Töre kuralları kağanın emirleri (yarlığ), kurultay kararları ve halkın geleneklerinden (yusün) oluşurdu.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "I. Taht kavgalarının yaşanması\nII. Egemenliğin tek bir hanedana ait olması\nIII. Devlet yönetiminde dinî kuralların etkin kılınması\nYukarıda verilen durumlardan hangilerinin kut anlayışının sonuçları arasında yer aldığı söylenebilir?",
    diff: 2,
    expl: "Kut (yönetme yetkisinin Tanrı'dan kan bağıyla gelmesi), egemenliği bir hanedana verirken, ailedeki tüm erkeklerin tahtta hak iddia etmesine (taht kavgalarına) yol açar. İlk Türk devletleri teokratik (dinî kural) değildir.",
    answers: [
      { text: "Yalnız III", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Uygur ve Göktürk devletlerinin ortak özellikleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 1,
    expl: "Yazılı hukuk kuralları yerleşik yaşama geçen Uygurlar ile başlamıştır, Göktürklerde hukuk sözlüdür (Töre).",
    answers: [
      { text: "Sözlü edebiyatın gelişmesi", ok: false }, { text: "Yazılı hukuk kurallarının oluşması", ok: true }, { text: "Ülkenin hanedanın malı olarak kabul edilmesi", ok: false }, { text: "Kendilerine özgü alfabeler kullanılması", ok: false }, { text: "Hükümdarlarının farklı din arayışlarına girmesi", ok: false }
    ]
  },
  {
    text: "Türk devletlerinin kısa ömürlü olmasında aşağıdakilerden hangisinin etkili olduğu söylenemez?",
    diff: 2,
    expl: "Oligarşi, zümre (soylu azınlık) yönetimidir ve Türk devletlerinde görülmez. Yıkılma nedenleri kut inancı, ikili teşkilat ve taht kavgalarıdır.",
    answers: [
      { text: "Oligarşik yönetimin benimsenmesi", ok: true }, { text: "Ülkenin hanedanın ortak malı olarak kabul edilmesi", ok: false }, { text: "İkili yönetim anlayışının görülmesi", ok: false }, { text: "Kut inancının kan yolu ile geçmesi", ok: false }, { text: "Veraset sisteminin düzensiz olması", ok: false }
    ]
  },
  {
    text: "İlk Türk devletlerinin;\nI. Şamanizm'i benimsemeleri,\nII. geniş bir coğrafyada egemenlik kurmaları,\nIII. yazıyı geç kullanmaları\nözelliklerinden hangilerinin Türk tarihinin incelenmesini zorlaştırdığı söylenemez?",
    diff: 3,
    expl: "Türk tarihinin zor incelenme sebebi coğrafyanın genişliği ve yazının geç kullanılmasıdır. Şamanizm gibi inanç sistemlerinin tarih incelemesini zorlaştırmakla bir ilgisi yoktur.",
    answers: [
      { text: "Yalnız I", ok: true }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }
    ]
  },
  {
    text: "Türk topluluklarının;\n- Nevruz bayramını kutlamaları,\n- Çiçek aşısını uygulamaları,\nI. astronomi,\nII. tıp,\nIII. toponomi\nbilim alanlarının hangilerinde ilerleme kaydettiğini göstermektedir?",
    diff: 2,
    expl: "Nevruz, güneş yılı takvimiyle (Astronomi) ilgilidir. Aşı uygulaması ise Tıp alanındaki gelişmeyi kanıtlar.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "Yalnız I", ok: false }, { text: "I ve II", ok: true }, { text: "II ve III", ok: false }
    ]
  },
  {
    text: "- Göktürkler Dönemi'ne aittir.\n- Demir dağın eritilip Türklerin tarih sahnesine çıkışı anlatılmıştır.\nÖzellikleri verilen edebî eser aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Göktürklerin demir dağı eriterek kurtulduklarını anlatan efsane Ergenekon Destanı'dır. Bozkurt Destanı da Göktürklere aittir ancak dişi kurttan türeyişi anlatır.",
    answers: [
      { text: "Bozkurt Destanı", ok: false }, { text: "Yenisey Yazıtları", ok: false }, { text: "Ergenekon Destanı", ok: true }, { text: "Orhun Abideleri", ok: false }, { text: "Göç Destanı", ok: false }
    ]
  },
  {
    text: "İtil Bulgarları yöneticileri tarafından kullanılan ve Hazar Hakanlığı'na bağlılıklarının sembolü olarak kabul edilen unvan aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İtil (Volga) Bulgarları hükümdarı Almış Han, bağımsız olmadan önce Hazar hakanına bağlılığın simgesi olarak 'İlteber' (vali/tâbi hükümdar) unvanını kullanmıştır.",
    answers: [
      { text: "İlteber", ok: true }, { text: "İdikut", ok: false }, { text: "Ay Tengri", ok: false }, { text: "Yalvaç", ok: false }, { text: "Bitigci", ok: false }
    ]
  },

  // ---------------- TEST 3 ----------------
  {
    text: "Asya Hunları, Çinlilere genellikle hayvansal ürünler satarken onlardan tahıl ve ipekli kumaşlar almışlardır.\nBuna göre Asya Hun Devleti ile ilgili olarak;\nI. yarı göçebe yaşam tarzını benimsedikleri,\nII. askerî bakımdan güçlü oldukları,\nIII. komşuları ile ticari ilişkiler kurdukları\nyargılarından hangilerine ulaşılabilir?",
    diff: 2,
    expl: "Hayvansal ürün satıp tarım ürünü almaları yarı göçebe olduklarını kanıtlar. Alışveriş yapmaları da ticari ilişkiyi gösterir. Sadece bu metinden askeri güce ulaşılamaz.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Eski Türklere ait aşağıdaki özelliklerden hangisinin Türklerin demokrasiyle yakınlıklarının doğrudan bir göstergesi olduğu söylenebilir?",
    diff: 1,
    expl: "Devlet meselelerinin Kurultay (Toy) adı verilen mecliste, boy beylerinin katılımıyla tartışılarak karara bağlanması demokratik bir özelliktir.",
    answers: [
      { text: "Komşularıyla iyi ilişkiler kurmaları", ok: false }, { text: "Toplum yapısında eşitlik ve adaleti hâkim kılmaları", ok: false }, { text: "Federatif anlayışı benimsemeleri", ok: false }, { text: "Devlet yönetiminde kurultay meclisine yer vermeleri", ok: true }, { text: "Elçi kabulünde hatunların da yetkisinin olması", ok: false }
    ]
  },
  {
    text: "Orta Asya Türk devletlerinde hükümdar ailesinden gelen herkesin ülkeyi yönetme yetkisine sahip olduğuna inanılırdı.\nAşağıdakilerden hangisinin bu durumun bir sonucu olduğu savunulabilir?",
    diff: 1,
    expl: "Kut kan yoluyla tüm hanedan erkeklerine geçtiği için, kağan ölünce her prens (tigin) tahtta hak iddia etmiş ve bu da taht kavgalarına neden olmuştur.",
    answers: [
      { text: "Devletin askerî ve siyasi bakımdan güçlenmesi", ok: false }, { text: "Boylar federasyonu şeklinde örgütlenilmesi", ok: false }, { text: "Taht kavgalarının yaşanması", ok: true }, { text: "Töre adı verilen hukuk kurallarının hâkim olması", ok: false }, { text: "Halkın devlete olan bağlılığının artması", ok: false }
    ]
  },
  {
    text: "I. Balbal adı verilen heykellerin dikilmesi\nII. Hayvancılığın temel geçim kaynağı olması\nIII. Taşınabilir sanat eserlerinin yapılması\nOrta Asya Türk topluluklarına ait yukarıda verilen özelliklerden hangileri göçebe yaşam tarzının kanıtıdır?",
    diff: 2,
    expl: "Göçebe hayatta temel geçim hayvancılıktır ve eşyalar taşınabilir olmak zorundadır. Balballar (mezar taşları) kalıcı yapılardır ve göçebeliğin değil, ahiret inancının kanıtıdır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "- Uygurlar Dönemi'ne aittir.\n- Türklerin açlık ve kuraklık sonucunda anavatanlarından ayrılmalarını anlatır.\nÖzellikleri verilen Türk destanı aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Kutsal Yada taşının Çinlilere verilmesi sonucu ülkeye kıtlık gelmesini ve Uygurların göç etmesini anlatan destan Göç Destanı'dır.",
    answers: [
      { text: "Bozkurt", ok: false }, { text: "Ergenekon", ok: false }, { text: "Türeyiş", ok: false }, { text: "Göç", ok: true }, { text: "Oğuz Kağan", ok: false }
    ]
  },
  {
    text: "Uygurlarla ilgili aşağıdakilerden hangisi doğru değildir?",
    diff: 2,
    expl: "Türk tarihinin ilk yazılı eserleri (Orhun Abideleri) II. Göktürkler zamanında dikilmiştir. Uygurlara ait eserler daha sonradır.",
    answers: [
      { text: "Yerleşik yaşam tarzını benimsemişlerdir.", ok: false }, { text: "Yazılı hukuk belgelerini düzenlemişlerdir.", ok: false }, { text: "Kütüphaneler oluşturmuşlardır.", ok: false }, { text: "İlk yazılı Türk eserlerini ortaya koymuşlardır.", ok: true }, { text: "Manihaizm dinini tanıtmışlardır.", ok: false }
    ]
  },
  {
    text: "I. Göktürk alfabesi ile yazılması\nII. Bilge Kağan, Kültekin ve Vezir Tonyukuk adına dikilmesi\nIII. Menkıbe özelliği taşıması\nYukarıdakilerden hangileri Orhun Abideleri'ne ait bir özellik değildir?",
    diff: 2,
    expl: "Orhun Abideleri efsane (menkıbe) değil, gerçek tarihi olayları anlatan somut bir siyasetnamedir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }
    ]
  },
  {
    text: "İlk Türk devletlerinde hükümdar çocukları \"Tigin\" unvanı ile anılırdı. Tiginlerin idaresine bazı bölgeler bırakılır, yanlarına da askerî birlik verilirdi.\nBu uygulama ile;\nI. monarşik yapıyı güçlendirmek,\nII. askerî ve idari alanda deneyim kazanmalarını sağlamak,\nIII. boylar federasyonu şeklinde örgütlenmek\ndüşüncelerinden hangileri amaçlanmıştır?",
    diff: 2,
    expl: "Tiginlerin (prenslerin) boyların başına yönetici (şad) olarak gönderilmesi, devlet tecrübesi kazanmaları (staj) içindir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: true }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "İslamiyet öncesi Türk devletlerinin yönetim anlayışı ile ilgili olarak aşağıdakilerden hangisi söylenemez?",
    diff: 2,
    expl: "Kut inancına göre yönetme yetkisi kan yoluyla geçer fakat tahta hangi şehzadenin çıkacağı önceden belli değildir, güçlü olan başa geçer.",
    answers: [
      { text: "Egemenlik tanrısal kaynaklıdır.", ok: false }, { text: "Hanedanın hükümdar olacak üyesi önceden belirlenir.", ok: true }, { text: "Hükümdar olma hakkı kız çocuklarına verilmez.", ok: false }, { text: "Ülke federatif anlayışla yönetilir.", ok: false }, { text: "Yönetimle ilgili kararlar kurultayda alınır.", ok: false }
    ]
  },
  {
    text: "Uygurlarda yerleşik yaşama geçilmesi ile ticari faaliyetler yoğunlaşma göstermiş ve sözleşmeler yapılmıştır.\nUygurlarda görülen bu ticari sözleşmeler aşağıdaki kavramlardan hangisi ile ifade edilmiştir?",
    diff: 3,
    expl: "Verilen şıklar arasında 'Trampa' (takas) ticaretle ilgili olan tek kavramdır. Uygurlarda ticari anlaşmalar ve borç alıp verme gelişmiştir.",
    answers: [
      { text: "Umay", ok: false }, { text: "Trampa", ok: true }, { text: "Yuğ", ok: false }, { text: "İduk", ok: false }, { text: "Ongun", ok: false }
    ]
  },
  {
    text: "İlk Türk devletlerinde keşif görevi yapan askerî birlik aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Düşman durumu ve arazisi hakkında bilgi toplamak için gönderilen öncü keşif birliklerine 'Yelme' adı verilir.",
    answers: [
      { text: "Subaşı", ok: false }, { text: "Sipahi", ok: false }, { text: "Yelme", ok: true }, { text: "Börk", ok: false }, { text: "Noyan", ok: false }
    ]
  },
  {
    text: "Kurultay ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte değildir?",
    diff: 2,
    expl: "İlk Türk devletlerinde din adamlarının devlet yönetiminde doğrudan bir rolü (Teokrasi) yoktur. Kurultay siyasi ve demokratik bir meclistir.",
    answers: [
      { text: "Teokratik özellik göstermesi", ok: true }, { text: "Katılmayan boy beylerinin vatana ihanet ile suçlanması", ok: false }, { text: "Yargı yetkisinin bulunması", ok: false }, { text: "İnsan ve hayvan sayımı gibi çalışmaları düzenlemesi", ok: false }, { text: "Katılanlara \"Toygun\" unvanının verilmesi", ok: false }
    ]
  },
  {
    text: "İlk yazılı hukuk kurallarının Uygurlar Dönemi'nde görülmesinde Uygurların;\nI. yerleşik yaşama geçiş yapmaları,\nII. özel mülkiyet anlayışının oluşması,\nIII. ticari faaliyetlerin gelişmesi\nözelliklerinden hangileri etkili olmuştur?",
    diff: 2,
    expl: "Yerleşik yaşam, ev/tarla gibi özel mülkiyeti doğurmuş, ticaret canlanmış ve bunların kayıt altına alınması ihtiyacı yazılı hukuku başlatmıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "Paralı askerlik uygulamalarına yer veren ilk Türk devleti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Türk devletlerinde ordu-millet anlayışı (herkes asker) vardır. Ancak ticaretle zenginleşen Hazarlar, ordularında ücretli (paralı) asker kullanan ilk ve tek Türk devletidir.",
    answers: [
      { text: "Uygurlar", ok: false }, { text: "Hazar", ok: true }, { text: "Göktürk", ok: false }, { text: "Hun", ok: false }, { text: "Kırgız", ok: false }
    ]
  },
  {
    text: "Oğuzlara ait olan Dede Korkut Hikâyeleri Oğuzların aşağıdaki Türk boylarından hangisi ile olan mücadelesini konu almaktadır?",
    diff: 2,
    expl: "Dede Korkut Hikayeleri, Oğuz Türklerinin Kıpçak (Kuman) Türkleri ile olan mücadelelerini anlatır.",
    answers: [
      { text: "Kıpçak", ok: true }, { text: "İskit", ok: false }, { text: "Tabgaç", ok: false }, { text: "Uygur", ok: false }, { text: "Hun", ok: false }
    ]
  },

  // ---------------- TEST 4 ----------------
  {
    text: "İslam öncesi Türk devletlerinde görülen;\n- Boylar federasyonu şeklinde örgütlenilmesi\n- İkili yönetim anlayışının hâkim olması\n- Göçebe yaşam tarzının benimsenmesi\ngibi özellikler aşağıdakilerden hangisi ile ilişkilendirilemez?",
    diff: 2,
    expl: "Verilen bu özelliklerin hiçbiri yazının kullanılması veya yazılı eserlerin (edebiyat, hukuk vb.) ortaya çıkması ile ilgili değildir.",
    answers: [
      { text: "Yazılı eserlerin ortaya çıkması", ok: true }, { text: "Federatif devlet anlayışı", ok: false }, { text: "Savaşçı özelliklerinin gelişmesi", ok: false }, { text: "Devletlerin kısa ömürlü olması", ok: false }, { text: "Yaylak kışlak hayatının görülmesi", ok: false }
    ]
  },
  {
    text: "Yarı göçebe yaşam tarzı sebebi ile farklı coğrafyalara göç eden Türk toplulukları farklı kültürlerle etkileşim içerisinde bulunmuş ve bu süreçte Gök Tanrı dışında da dinler - inanışlar benimsemişlerdir.\nBu duruma göre topluluk - din eşleşmelerinden hangisi yanlıştır?",
    diff: 2,
    expl: "Tabgaçlar Budizm'i benimsemiş ve Çinlileşmişlerdir. Zerdüştlük (Ateşperestlik) bir Türk devleti tarafından resmî din olarak benimsenmemiştir.",
    answers: [
      { text: "Hazarlar - Musevilik", ok: false }, { text: "Avarlar - Hristiyanlık", ok: false }, { text: "Uygurlar - Manihaizm", ok: false }, { text: "Karluklar - İslamiyet", ok: false }, { text: "Tabgaçlar - Zerdüştlük", ok: true }
    ]
  },
  {
    text: "Çin elçisi Wang Yen-Te 981-984 yılları arasında Turfan Uygurlarının yaşadığı coğrafyaya ziyarette bulunmuş ve raporunda Turfan Uygurlarında \"Turfan şehrinde kar ve yağmur yoktur. Evler beyaz badanalıdır. Chinling dağlarından çıkan nehir şehrin bütün çevresini dolaşır, tarlaları ve meyve bahçelerini sular.\" şeklinde bahsetmiştir.\nBuna göre Turfan Uygurları ile ilgili aşağıda verilen yargılardan hangisine ulaşılamaz?",
    diff: 2,
    expl: "Metinde evlerden (mimari), tarla ve bahçelerden (tarım ve yerleşik yaşam) bahsedilmektedir ancak boylar federasyonu gibi siyasi bir örgütlenme bilgisi yoktur.",
    answers: [
      { text: "Mimari eserler verilmiştir.", ok: false }, { text: "Yerleşik yaşamdan izler görülür.", ok: false }, { text: "Tarımsal faaliyetlerde bulunulmuştur.", ok: false }, { text: "Coğrafi ve iklimsel özellikler hayatı kolaylaştırmıştır.", ok: false }, { text: "Boylar federasyonu şeklinde örgütlenilmiştir.", ok: true }
    ]
  },
  {
    text: "İlk Türk devletlerinde hükümdarların \"iktisadi gücü\" aşağıdakilerden hangisi ile ifade edilir?",
    diff: 3,
    expl: "Hükümdarın halkı doyurması, zenginliği paylaştırması anlamına gelen ve ekonomik gücü simgeleyen kavram 'Ülüş' (pay/kısmet) kavramıdır.",
    answers: [
      { text: "Ülüş", ok: true }, { text: "Kut", ok: false }, { text: "Küç", ok: false }, { text: "İl", ok: false }, { text: "Tüz", ok: false }
    ]
  },
  {
    text: "Aşağıda verilen yönetici-görev eşleştirmelerinden hangisi doğru değildir?",
    diff: 2,
    expl: "Bitigci, devlet yazışmalarını yapan katip (sekreter) demektir, Vezir (Aygucı) demek değildir.",
    answers: [
      { text: "Ağılıg - Hazine görevlisi", ok: false }, { text: "Aygucı - Hükûmet başkanı", ok: false }, { text: "Alpagu - Subay", ok: false }, { text: "Bitigci - Vezir", ok: true }, { text: "Tarkan - Komutan", ok: false }
    ]
  },
  {
    text: "I. Elçileri kabul etme\nII. Kurultaya başkanlık etme\nIII. Ülkeyi gerektiğinde hakan adına yönetme\nYukarıda verilenlerden hangileri ilk Türk topluluklarında hatunun görevleri arasındadır?",
    diff: 1,
    expl: "Hatun, kağan seferde veya küçükken devleti yönetebilir (naip), kurultaya katılabilir ve kendi elçilerini kabul edebilirdi.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "Uygurlarla birlikte Türklerde görülmeye başlanan sanat dalları arasında hangisi yer almaz?",
    diff: 2,
    expl: "Heykelcilik, Uygurlardan çok daha önce dikilen Balbal heykelleri (mezar taşları) sayesinde İskitler, Asya Hunları ve Göktürkler döneminde de vardı.",
    answers: [
      { text: "Minyatür", ok: false }, { text: "Mimari", ok: false }, { text: "Heykelcilik", ok: true }, { text: "Fresko", ok: false }, { text: "Ciltçilik", ok: false }
    ]
  },
  {
    text: "İlk Türklerde kağanların hükümdarlık alametleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 1,
    expl: "Hutbe okutmak, İslamiyet'in kabulüyle birlikte Türk devlet geleneğine giren bir hükümdarlık alametidir. İslam öncesinde yoktur.",
    answers: [
      { text: "Otağ", ok: false }, { text: "Hutbe", ok: true }, { text: "Nevbet", ok: false }, { text: "Yarlığ", ok: false }, { text: "Örgin", ok: false }
    ]
  },
  {
    text: "Avarlar ile ilgili aşağıdakilerden hangisi doğru bir bilgi değildir?",
    diff: 2,
    expl: "Baga Tarkan, kendi adına para bastıran Türgiş hükümdarıdır. Avarların en ünlü hükümdarı ise Bayan Kağan'dır.",
    answers: [
      { text: "Slavları askerî bakımdan etkilemişlerdir.", ok: false }, { text: "Hristiyanlığı kabul eden İlk Türk devletidir.", ok: false }, { text: "Hem Asya hem Avrupa'da devlet kurmuşlardır.", ok: false }, { text: "En önemli hükümdarları Baga Tarkan'dır.", ok: true }, { text: "Göktürkler ile mücadele etmişlerdir.", ok: false }
    ]
  },
  {
    text: "Eski Türk topluluklarında hükümdar dâhil herkesin töre adı verilen hukuk kurallarına uymak zorunda olması;\nI. kanun üstünlüğünün kabul edilmesi,\nII. taht kavgalarının azalması,\nIII. monarşik yönetimin egemen olması\ndurumlarından hangilerini engellemiştir?",
    diff: 3,
    expl: "Hükümdarın bile Töreye uymak zorunda olması mutlak monarşiyi (krallığın sınırsız gücünü) engeller, kanun üstünlüğünü gösterir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }
    ]
  },
  {
    text: "I. Hun\nII. Türgiş\nIII. Hazar\nYukarıda verilen Türk topluluklarından hangileri Müslüman Araplarla askerî mücadeleye girişmiştir?",
    diff: 2,
    expl: "Hazarlar Hz. Osman döneminde (Kafkasya'da), Türgişler ise Emeviler döneminde (Orta Asya'da) Müslüman Arapların ilerleyişini durdurmuşlardır.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Uygur bilgini Singku Seli Tutung tarafından Budizm'i tanıtmak amacıyla Çinceden Uygur diline çevrilen yazılı eser aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Altun Yaruk (Altın Işık), Budizm felsefesini anlatan Çinceden Uygurcaya çevrilmiş en önemli dini-edebi metindir.",
    answers: [
      { text: "Altun Yaruk", ok: true }, { text: "Pendname", ok: false }, { text: "Nibelungen", ok: false }, { text: "Yenisey Yazıtları", ok: false }, { text: "Codex Cumanicus", ok: false }
    ]
  },
  {
    text: "Makedon Kralı Büyük İskender ile Türklerin mücadelelerini konu alan Türk destanı hangisidir?",
    diff: 2,
    expl: "Büyük İskender'in Asya seferi sırasında Saka (İskit) Türkleriyle yaptığı mücadeleleri anlatan destan Şu Destanı'dır.",
    answers: [
      { text: "Bozkurt", ok: false }, { text: "Şu", ok: true }, { text: "Şehname", ok: false }, { text: "Sihirli Geyik", ok: false }, { text: "Dede Korkut", ok: false }
    ]
  },
  {
    text: "İslam öncesi Türk devletlerinde kullanılan hukuk terimleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 3,
    expl: "Emr-i Dad (Adalet Emiri), Türk-İslam devletlerinde (örneğin Türkiye Selçuklularında) örfi davalara bakan görevlinin unvanıdır. İslam öncesinde yoktur.",
    answers: [
      { text: "Tüz", ok: false }, { text: "Könilik", ok: false }, { text: "Emr-i Dad", ok: true }, { text: "Yarguci", ok: false }, { text: "Uzluk", ok: false }
    ]
  },
  {
    text: "Arzu Öğretmen sınıfta bulunan Fırat'a \"Hangisi ilk kez Uygurlarda görülen uygulamalardan biri değildir?\" sorusunu yöneltmiştir.\nFırat doğru yanıta ulaşmak için aşağıdakilerden hangisini işaretlemelidir?",
    diff: 1,
    expl: "İlk milli alfabe ve ilk yazılı eserler Uygurlara değil, onlardan önce yaşayan Göktürklere (Orhun Abideleri) aittir.",
    answers: [
      { text: "İlk yazının kullanımı", ok: true }, { text: "İlk mimari faaliyetler", ok: false }, { text: "İlk kütüphaneler", ok: false }, { text: "İlk yazılı hukuk kuralları", ok: false }, { text: "İlk kâğıt - matbaa", ok: false }
    ]
  }
];
