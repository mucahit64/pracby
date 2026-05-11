import { McQ } from "../../../../types";

// ============================================================================
// TÜRKİYE'NİN COĞRAFİ KONUMU - TEST 1
// ============================================================================
export const COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_1: McQ[] = [
  {
    text: "Aşağıdakilerden hangisi Türkiye'nin matematiksel konumunun sonuçları arasında yer almaz?",
    diff: 1,
    expl: "Yer altı kaynaklarının zenginliği (bor, linyit vb.) matematiksel konumla değil, jeolojik yapı ve yer şekilleri (özel konum) ile ilgilidir.",
    answers: [
      { text: "21 Haziran'da tarihinde en uzun gündüzün yaşanması", ok: false },
      { text: "Yer altı kaynakları bakımından zengin olması", ok: true },
      { text: "Doğusu ile batısı arasındaki zaman farkının 76 dakika olması", ok: false },
      { text: "Akdeniz'in sularının Karadeniz'in sularından daha sıcak ve tuzlu olması", ok: false },
      { text: "Buzul aşındırma ve biriktirme şekillerine 2800 m'den sonra rastlanması", ok: false }
    ]
  },
  {
    text: "I. Kuzeye doğru gidildikçe güneş ışınlarının geliş açısının daralması\nII. Aynı anda dört mevsim koşullarının yaşanması\nIII. Yerel saatin başlangıç meridyeninin saatinden daha ileri olması\nIV. Yıl içinde cephesel yağışların görülmesi\nYukarıda verilen bilgilerden hangilerine bakılarak Türkiye'nin orta kuşakta yer aldığı söylenebilir?",
    diff: 2,
    expl: "Cephesel yağışlar (IV) ve Akdeniz iklimi görülmesi orta kuşak kanıtıdır. Aynı anda dört mevsim yaşanması (II) ise yer şekilleriyle (özel konum) ilgilidir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız IV", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false }
    ]
  },
  {
    text: "Yukarıdaki haritada gösterilen iller ile ilgili aşağıda verilen bilgilerden hangisi yanlış verilmiştir?",
    img: "image_88c051_soru3.jpg",
    diff: 2,
    expl: "21 Mart'ta güneş ışınları Ekvator'a dik düşer. Türkiye Kuzey Yarım Küre'de olduğu için hiçbir zaman öğle vakti gölge boyu sıfır olmaz.",
    answers: [
      { text: "Erzurum ve Batman'ın yerel saatleri yıl boyunca aynıdır.", ok: false },
      { text: "Yıl boyunca gölge boyunun en uzun olduğu kentler Çanakkale, Ankara ve Erzurum'dur.", ok: false },
      { text: "Çanakkale'nin yerel saati yıl boyunca ulusal saatten geridir.", ok: false },
      { text: "Ankara ve Erzurum yıl boyunca güneş ışınlarını aynı açı ile alırlar.", ok: false },
      { text: "21 Mart'ta Çanakkale'de öğlen vakti cisimlerin gölge boyu sıfır olur.", ok: true }
    ]
  },
  {
    text: "Aşağıdaki illerimizden hangisinde 21 Aralık tarihinde yaşanan gündüz süresi daha uzundur?",
    diff: 2,
    expl: "21 Aralık'ta güneye gidildikçe gündüz süresi uzar. Seçenekler arasındaki en güneydeki il Şanlıurfa'dır.",
    answers: [
      { text: "Malatya", ok: false },
      { text: "Çanakkale", ok: false },
      { text: "Artvin", ok: false },
      { text: "Şanlıurfa", ok: true },
      { text: "Van", ok: false }
    ]
  },
  {
    text: "Haritada işaretlenmiş merkezlerle ilgili aşağıdakilerden hangisi söylenemez?",
    img: "image_88c051_soru5.jpg",
    diff: 2,
    expl: "21 Haziran'da kuzeye gidildikçe gündüz süresi uzar. V numaralı merkezden II numaralı merkeze (kuzeye) gidildikçe gündüz süresi kısalmaz, uzar.",
    answers: [
      { text: "23 Eylül tarihinde bütün merkezlerde gece-gündüz süresi eşittir.", ok: false },
      { text: "21 Haziran'da V. merkezden II. merkeze gidildikçe gündüz süresi kısalır.", ok: true },
      { text: "Yılı boyunca yerel saat ile ulusal saat arasında farkın en az olduğu merkez III'tür.", ok: false },
      { text: "Gece gündüz süresi değişiminin en fazla yaşandığı merkez II. merkezdir.", ok: false },
      { text: "Yıl boyunca I. ve IV. merkezlerde yerel saatler aynıdır.", ok: false }
    ]
  },
  {
    text: "Nemrut Dağı aşağıda verilen illerin hangisinde yer alsaydı turistler güneşin doğuş ve batışını daha kısa süre seyrederdi?",
    diff: 3,
    expl: "Güneşin doğuş ve batış süresi (alacakaranlık süresi) çizgisel hıza bağlıdır. Ekvator'a yakın yerlerde çizgisel hız fazla olduğu için bu süreler daha kısadır. Mersin en güneydedir.",
    answers: [
      { text: "Malatya", ok: false },
      { text: "Muğla", ok: false },
      { text: "Iğdır", ok: false },
      { text: "Giresun", ok: false },
      { text: "Mersin", ok: true }
    ]
  },
  {
    text: "Türkiye'de gündüzlerin gecelerden uzun olmaya başladığı tarih aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "21 Mart ekinoksunda gece ve gündüz eşittir. Bu tarihten sonra Kuzey Yarım Küre'de gündüzler geceleri geçmeye başlar.",
    answers: [
      { text: "23 Eylül", ok: false },
      { text: "21 Haziran", ok: false },
      { text: "3 Ocak", ok: false },
      { text: "21 Mart", ok: true },
      { text: "21 Aralık", ok: false }
    ]
  },
  {
    text: "Aşağıda verilenlerden hangisinin ortaya çıkmasında Türkiye'nin hem matematiksel hem de özel konumu etkili olmuştur?",
    diff: 3,
    expl: "Tarım ürünü çeşitliliği; hem enlem (matematiksel) hem de yer şekilleri, denize yakınlık ve yükselti (özel konum) etkileriyle oluşur.",
    answers: [
      { text: "Üç tarafı denizlerle çevrili bir yarımada olması", ok: false },
      { text: "Yetiştirilen tarım ürünü çeşidinin fazla olması", ok: true },
      { text: "Doğusu ile batısı arasında 76 dakikalık zaman farkının olması", ok: false },
      { text: "Güneyden gelen rüzgarların sıcaklığı artırması", ok: false },
      { text: "21 Aralık'ta kuzeye gidildikçe gecelerin uzaması", ok: false }
    ]
  },
  {
    text: "Türkiye 26°- 45° doğu meridyenleri ile 36°- 42° kuzey paralelleri arasında yer almaktadır. Yalnızca yukarıda verilen bilgilere dayanılarak aşağıdakilerden hangisine ulaşılamaz?",
    diff: 2,
    expl: "Yol yapım maliyetleri yer şekilleri ve engebe ile (özel konum) ilgilidir, koordinat bilgilerinden bu sonuca ulaşılamaz.",
    answers: [
      { text: "Yol yapım maliyetinin fazla olması", ok: true },
      { text: "Cephesel yağışların etkisinde kalması", ok: false },
      { text: "23 Eylül tarihinde sonbahar başlangıcı olması", ok: false },
      { text: "II. ve III. saat dilimlerinde toprakları olması", ok: false },
      { text: "Başlangıç meridyeninin doğusunda olması", ok: false }
    ]
  },
  {
    text: "Aşağıda verilen durumlardan hangisi Türkiye'nin matematiksel konumundan etkilenmez?",
    diff: 2,
    expl: "Toprak yapısı ana kaya, iklim ve zamanla oluşur ancak doğrudan matematiksel konumun (enlem/boylam) bir sonucu değildir; jeolojik yapıya dahildir.",
    answers: [
      { text: "Jeolojik yapı", ok: false },
      { text: "Aydınlanma süresi", ok: false },
      { text: "Yetiştirilen tarım ürünleri", ok: false },
      { text: "Toprak yapısı", ok: true },
      { text: "Yerel saat", ok: false }
    ]
  },
  {
    text: "Aşağıda verilen tarih aralıklarından hangisinde Türkiye'de gündüzler 12 saatten uzun olup ve uzamaya devam etmektedir?",
    diff: 3,
    expl: "21 Mart'ta gece-gündüz eşittir (12 saat). 21 Mart'tan 21 Haziran'a kadar gündüzler 12 saati geçer ve en uzun güne kadar uzamaya devam eder.",
    answers: [
      { text: "21 Aralık – 21 Mart", ok: false },
      { text: "21 Mart – 21 Haziran", ok: true },
      { text: "21 Haziran – 23 Eylül", ok: false },
      { text: "23 Eylül – 21 Aralık", ok: false },
      { text: "21 Mart – 23 Eylül", ok: false }
    ]
  },
  {
    text: "I. Bakü-Tiflis-Ceyhan bor hattı\nII. Ortadoğu'daki siyasi karışıklıklar\nIII. İklim ve bitki örtüsünün çeşitlilik göstermesi\nIV. Nehirlerin kaynağını Türkiye'den alması\nYukarıda verilen bilgilerden hangileri Türkiye'nin jeopolitik önemini daha az etkilemektedir?",
    diff: 2,
    expl: "İklim ve bitki örtüsü (III) doğrudan bir dış siyaset veya stratejik güç unsuru (jeopolitik) olmaktan ziyade fiziki coğrafya özelliğidir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "Buzul aşınım ve birikim şekillerine ülkemizde daha az rastlanılmaktadır. Bu durumun temel nedeni aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Türkiye orta kuşakta yer aldığı için (matematiksel konum) kalıcı karlar ve buzullar sadece çok yüksek dağlarda görülür, deniz seviyesine inmez.",
    answers: [
      { text: "Dağların uzanış yönü", ok: false },
      { text: "Düz ve düze yakın arazilerin varlığı", ok: false },
      { text: "Matematiksel konum", ok: true },
      { text: "Jeolojik zaman", ok: false },
      { text: "Jeolojik yapı", ok: false }
    ]
  },
  {
    text: "21 Haziran tarihinde aşağıdaki haritada verilen merkezlerden hangisinde güneşin doğuşundan batışına kadar geçen süre daha uzundur?",
    img: "image_88bfbd_soru14.jpg",
    diff: 2,
    expl: "21 Haziran'da Türkiye'de en kuzeydeki noktada gündüz süresi en uzundur. Haritadaki en kuzey nokta V numaralı merkezdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "Ankara 40° kuzey ve 33° doğu boylamındadır. Aşağıda koordinatları verilen merkezlerden hangisinin yerel saati Ankara'dan ileri olup tan ve gurup süresi daha kısadır?",
    diff: 3,
    expl: "Yerel saatin ileri olması için daha doğuda (33°'den büyük), tan/gurup süresinin kısa olması için daha güneyde (40°'den küçük) olmalıdır. 36° K - 44° D bu şartı sağlar.",
    answers: [
      { text: "40° Kuzey – 38° Doğu", ok: false },
      { text: "37° Kuzey – 28° Doğu", ok: false },
      { text: "36° Kuzey – 44° Doğu", ok: true },
      { text: "42° Kuzey – 33° Doğu", ok: false },
      { text: "39° Kuzey – 26° Doğu", ok: false }
    ]
  }
];

// ============================================================================
// TÜRKİYE'NİN COĞRAFİ KONUMU - TEST 2
// ============================================================================
export const COG_TURKIYENIN_COGRAFIK_KONUMU_TEST_2: McQ[] = [
  {
    text: "I. Ulaşım açısından önemli boğazlara sahip olması\nII. Yer şekilleri bakımından dağlık ve engebeli olması\nIII. Önemli enerji nakil hatlarının Türkiye'den geçmesi\nIV. Doğu-batı yönlü geniş alan kaplaması\nYukarıda verilenlerden hangilerinin Türkiye'nin jeopolitik öneminin artmasında rol oynadığı söylenebilir?",
    diff: 2,
    expl: "Boğazlar (I) ve enerji nakil hatları (III), Türkiye'nin dünya siyasetindeki stratejik ve ekonomik gücünü (jeopolitik) doğrudan artıran unsurlardır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "Yalnızca haritadaki bilgilerden yararlanarak aşağıdakilerden hangisine ulaşılamaz?",
    img: "image_88b0f1_soru2.jpg",
    diff: 2,
    expl: "Gece-gündüz süre değişimi enlemin bir sonucudur. Sivas, Bursa ile hemen hemen aynı enlemde olduğu için sürenin 'en fazla değiştiği' il olduğu söylenemez. En fazla değişim en kuzeydeki Samsun'da olur.",
    answers: [
      { text: "Yıl boyunca Bursa'da yerel saat Bitlis'ten geridir.", ok: false },
      { text: "Yıl içinde gece gündüz süresinin en fazla değiştiği il Sivas'tır.", ok: true },
      { text: "23 Eylül tarihinde güneş en erken Bitlis'te doğar.", ok: false },
      { text: "21 Haziran'da en uzun gündüz Samsun'da yaşanmaktadır.", ok: false },
      { text: "Aksaray'a güneş ışınları her zaman Bursa'ya göre daha büyük açı ile ulaşır.", ok: false }
    ]
  },
  {
    text: "Renklendirme yöntemi ile çizilen bir Türkiye fiziki haritası incelendiğinde aşağıdaki bilgilerden hangisine ulaşılamaz?",
    diff: 2,
    expl: "Renklendirme yönteminde renkler yer şekillerini (dağ, plato vb.) değil, sadece yükselti basamaklarını gösterir. Kahverengi bir yer dağ da olabilir, yüksek bir düzlük (plato) de.",
    answers: [
      { text: "Çatalca - Kocaeli bölümünde kullanılan renk sayısı Güney Marmara bölümünden daha azdır.", ok: false },
      { text: "Kahverenginin en fazla kullanıldığı bölge Doğu Anadolu'dur.", ok: false },
      { text: "Kahverengi dağları, sarı platoları, yeşil renk ovaları göstermektedir.", ok: true },
      { text: "Yeşil ve tonlarının en fazla kullanıldığı bölge Marmara Bölgesi'dir.", ok: false },
      { text: "Beyaz renk kalıcı karları göstermektedir.", ok: false }
    ]
  },
  {
    text: "21 Haziran tarihinde Malatya'dan aşağıdaki kentlerden hangisine gidildiğinde yerel saatin daha ileri ve gündüz süresinin daha uzun olduğu gözlemlenir?",
    img: "image_88b0f1_soru4.jpg",
    diff: 2,
    expl: "Yerel saatin ileri olması için doğuya (Kars), 21 Haziran'da gündüzün uzun olması için kuzeye gidilmelidir. Kars, Malatya'nın hem kuzeyinde hem doğusundadır.",
    answers: [
      { text: "Muğla", ok: false },
      { text: "Bartın", ok: false },
      { text: "Kilis", ok: false },
      { text: "Mardin", ok: false },
      { text: "Kars", ok: true }
    ]
  },
  {
    text: "Haritada aynı boylam üzerinde yer alan bazı merkezler gösterilmiştir. Buna göre verilen merkezlerde hangi özelliklerin ortak olduğu söylenebilir?",
    img: "image_88b097_soru5.jpg",
    diff: 2,
    expl: "Aynı boylam üzerindeki noktalarda yıl boyunca yerel saatler ve öğle vakitleri ortaktır. Ayrıca başlangıç meridyeni ile aralarındaki zaman farkı da aynıdır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "Türkiye'de; I. En uzun gölge boyunun yaşandığı tarih, II. Gündüzlerin uzamaya başladığı tarih, III. İlkbaharın başladığı tarih sırasıyla hangisidir?",
    diff: 2,
    expl: "En uzun gölge 21 Aralık (en küçük açı), gündüzler 21 Aralık'tan itibaren uzamaya başlar, İlkbahar ekinoksu ise 21 Mart'tır.",
    answers: [
      { text: "21 Aralık - 21 Haziran - 21 Mart", ok: false },
      { text: "21 Aralık - 21 Aralık - 21 Mart", ok: true },
      { text: "21 Aralık - 23 Eylül - 21 Haziran", ok: false },
      { text: "21 Haziran - 21 Aralık - 21 Mart", ok: false },
      { text: "21 Mart - 21 Aralık - 23 Eylül", ok: false }
    ]
  },
  {
    text: "Aşağıda verilen bilgilerden hangisine bakılarak Türkiye'nin kuzey yarım kürede yer aldığı söylenemez?",
    diff: 3,
    expl: "Samsun'un (kuzey) Ankara'dan (güney) sıcak olması enlem etkisine terstir ve denizellikle (özel konum) ilgilidir. Bu durum KYK'de olduğumuzu kanıtlamaz, aksine matematiksel konuma ters bir durumdur.",
    answers: [
      { text: "Dağların kuzey yamaçlarında kalıcı kar sınırının daha düşük olması", ok: false },
      { text: "En uzun gecelerin 21 Aralık'ta yaşanması", ok: false },
      { text: "Güneye doğru gidildikçe gölge boyunun kısalması", ok: false },
      { text: "Samsun'da ortalama sıcaklığın Ankara'dan fazla olması", ok: true },
      { text: "Kuzeyden gelen rüzgarların sıcaklığı düşürmesi", ok: false }
    ]
  },
  {
    text: "Haritada verilenlerden hareketle aşağıdakilerden hangisinin bu merkezlerin coğrafi koordinatları ile ilgili olduğu söylenemez?",
    img: "image_88b097_soru8.jpg",
    diff: 3,
    expl: "Tarımsal ürünlerin hasat edilmesi sadece matematiksel konuma (enlem) bağlı değildir; yükselti, nem ve karasallık (özel konum) hasat süresini doğrudan etkiler.",
    answers: [
      { text: "II ve III'te yerel saatin aynı olması", ok: false },
      { text: "Yıl boyunca en uzun gölge boyunun II'de ölçülmesi", ok: false },
      { text: "I'de tarım ürünlerinin V'ten erken hasat edilmesi", ok: true },
      { text: "Yer çekiminin en az III'te olması", ok: false },
      { text: "II'de yerel saatin I'den ileri olması", ok: false }
    ]
  },
  {
    text: "Yukarıdaki haritada A merkezinden B merkezine giden bir gözlemci aşağıdakilerden hangisinin değişmediğini görür?",
    img: "image_88b097_soru9.jpg",
    diff: 2,
    expl: "A ve B merkezleri aynı enlem üzerindedir. Aynı enlemde yer alan noktalarda gece ve gündüz süreleri (ve değişimleri) yıl boyunca aynıdır.",
    answers: [
      { text: "Yükseltinin", ok: false },
      { text: "Bitki örtüsünün", ok: false },
      { text: "Aynı tarım ürününün olgunlaşma süresinin", ok: false },
      { text: "Yaşanan gündüz süresinin", ok: true },
      { text: "Karın yerde kalma süresinin", ok: false }
    ]
  },
  {
    text: "Türkiye'de aşağıda verilen durumlardan hangisinin ortaya çıkmasında göreceli (özel) konum koşulları etkili olmamıştır?",
    diff: 2,
    expl: "Akdeniz iklimi bitkileri olan zeytin, defne ve zakkumun (maki) varlığı, Türkiye'nin orta kuşakta (matematiksel konum) yer almasının bir sonucudur.",
    answers: [
      { text: "Zeytin, defne, zakkum gibi ağaçların yetişmesi", ok: true },
      { text: "Transit ticaretin gelişmesi", ok: false },
      { text: "Turizm faaliyetlerinin çeşitlilik göstermesi", ok: false },
      { text: "Yer altı kaynaklarının çeşitlilik göstermesi", ok: false },
      { text: "Karasal iklimin geniş alanlarda etkili olması", ok: false }
    ]
  }
];