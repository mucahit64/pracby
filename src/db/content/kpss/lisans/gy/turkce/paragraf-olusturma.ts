import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAF OLUŞTURMA - TEST 1
// ============================================================================
export const PARAGRAF_OLUSTURMA_TEST_1: McQ[] = [
  {
    text: "<p>I. Her dönemde geçerli olabilecek kesin bir tanımın güç olduğu “sorumluluk” kavramı zaman, görev, yetki ve otorite kavramları ile birlikte düşünülerek açıklanabilir.<br>II. Sorumluluk bu bağlamda “Bir kişiye birtakım görevler verildiği zaman ortaya çıkmaktadır.” denilebilir.<br>III. Literatürde çeşitli tanımları bulunan “sorumluluk” kelimesinin anlamı, “bir işi üstüne alan ve o işi yapmak zorunda olan bir şahıstan beklenen yükümlülüklerin tümü” olarak belirtilmiştir.<br>IV. TDK, sorumluluğu “kişinin kendi davranışlarını veya kendi yetki alanına giren herhangi bir olayın sonuçlarını üstlenmesi akıl, özgür irade ve yetki sahibi olmasına bağlı olarak tanımlamaktadır.<br>V. Sorumluluk, kişinin kendi davranışlarını veya kendi yetki alanına giren herhangi bir olayın sonuçlarını üstlenmesi, mesuliyet anlamına gelmektedir.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi ilk cümle <u>olamaz</u>?</b></p>",
    diff: 3,
    expl: "II numaralı cümle 'bu bağlamda' ifadesiyle başladığı için kendisinden önce bir açıklama yapıldığını gösterir. Bu nedenle parçanın giriş cümlesi olmaya uygun değildir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. İlk çağlarda sözlü olarak destan ve masallarla ulaşılan insana...<br>II. Dünyayı küçülten bu toplumsal değişim... dili de etkilemiştir.<br>III. Doğan Cüceloğlu insanı... sosyal bir varlık olarak tanımlar.<br>IV. Doğal olarak kitle iletişimi artık... dünyayı küçük bir köy hâline getirmiştir.<br>V. Bu çağın insanı, bu paylaşımın yoğun bir biçimde yaşandığının tanığıdır.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan ikinci olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III - V - I - IV - II şeklindedir. İnsan tanımıyla başlanır (III), 'bu çağın insanı' (V) ile devam edilir. Baştan ikinci cümle V'dir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. Ancak edebiyatta dil nasıl kullanılır?<br>II. Edebiyatın malzemesinin dil olduğu bilinmektedir.<br>III. Bu sorular pek çok defa sorulmuştur.<br>IV. Edebiyat dili ile günlük dil arasında ne tür bir ilişki vardır?<br>V. Bazen bu sorulara farklı cevaplar verildiği hâlde bazı ortak sonuçlara da ulaşılmıştır.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan üçüncü olur?</b></p>",
    diff: 2,
    expl: "Sıralama: II - I - IV - III - V şeklindedir. Edebiyatın malzemesi dildir (II), kullanım sorusu (I) ve ilişki sorusu (IV) takip eder. Baştan üçüncü IV'tür.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Bireyin istendik bir biçimde eğitilmesi...<br>II. Eğitim bu bağlamda ikili bir yapı arz etmektedir...<br>III. Eğitim, kavrayış kabiliyeti olan bireye onun hayat serüveninde...<br>IV. Eğitim genel anlamıyla istendik davranış biçimlerinin... süreci olarak ele alınmaktadır.<br>V. Böylece eğitim süreci hem bireysel fayda hem de toplumsal fayda sağlayan bir süreçtir.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi sondan ikinci olur?</b></p>",
    diff: 3,
    expl: "Sıralama: IV - III - II - I - V şeklindedir. Genel tanımla (IV) başlanır, bireysel ve toplumsal faydayla (V) biter. Sondan ikinci I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Sanat, onun için bir haz aracı değil, hayatın asli bir unsuru...<br>II. Diğer bir deyişle bu iletişim... sanatkar ile bunlardan etkilenen insanlar arasında kurulmaktadır.<br>III. Tolstoy'a göre sanatın haz aracı olarak görülmesi... diyalog kurucu işlevine terstir.<br>IV. Ancak böyle bir iletişimde öne çıkan şey... duygulardır.<br>V. Sanata böyle bakıldığı takdirde onun aynı zamanda önemli bir iletişim aracı olduğu fark edilmektedir.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan dördüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III - I - V - II - IV şeklindedir. Tolstoy'un görüşüyle başlanır, sanata bakış (V) ve iletişimin tanımı (II) gelir. Baştan dördüncü II'dir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Şiirden düzyazıya nasıl geçilmiş, düzyazının doğuşu nasıl olmuştur?<br>II. Bu oluşum ortak bir yaratı olan şiiri de etkilemiş...<br>III. Bu konuda da türlü varsayımlar öne sürülmüştür.<br>IV. Öte yandan değişim esasına dayanan bir alışveriş düzeni oluşmuştur.<br>V. En yaygını şudur: İlkel toplum düzeninden kopma... iş bölümünün doğmasına yol açmıştır.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi sonuncu olur?</b></p>",
    diff: 3,
    expl: "Sıralama: I - III - V - IV - II şeklindedir. Düzyazının doğuşuna dair soruyla (I) başlanır, şiir üzerindeki etkisiyle (II) biter. Sonuncu cümle II'dir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Hayvan sahibi olmanın bu olumlu sonuçları... talebi artırmıştır.<br>II. Bunun nedenleri arasında köpeklerin... en güvenilir ev hayvanları olarak düşünülmeleri sayılabilir.<br>III. Evlerde beslenen hayvanlar arasında ise köpekler başı çekmektedir.<br>IV. Son yıllarda, Türkiye'de evlerde pet hayvanı beslemek oldukça popüler hâle gelmiştir.<br>V. Ayrıca hayvan sahibi olmanın stresi azalttığı... rapor edilmiştir.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi sonuncu olur?</b></p>",
    diff: 2,
    expl: "Sıralama: IV - III - II - V - I şeklindedir. Pet hayvanı besleme popülaritesi (IV) giriş, bu durumun talebi artırması (I) sonuçtur. Sonuncu cümle I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Sürekli olarak ulaşılamayan hedefler yaratan zayıf ego idealidir...<br>II. Yetişkin ego ise meselelerin aniden çözülmeyeceğini bilir...<br>III. Çocuk büyüdükçe ve etrafındaki nesnelerle ilişkiye girdikçe ego güçlenir...<br>IV. Psikanalizin içinde bütün kuramcıların belirttiği üzere çocukluk çağında ego yapısı zayıf olduğu için...<br>V. Sorun hepimiz için yetişkinlik yaşamında da kendimize sürekli olarak asla ulaşamayacağımız idealler belirlememizle başlar.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan dördüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: IV - III - II - V - I şeklindedir. Çocukluktaki zayıf egoyla başlanır (IV), gelişim anlatılır, yetişkinlikteki sorun (V) dördüncü sıradadır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. Gezegenin durumu ve gıdanın geleceği için kilit role sahip arıların... dünyadan yok olması...<br>II. Sorumlusu elbette yine insanoğlu çünkü tarım ilaçları...<br>III. Albert Einstein, “Eğer arılar yeryüzünden kaybolursa insanın sadece 4 yıl ömrü kalır... ” demiş.<br>IV. Bu durumu açıklamak rahatsız edici olsa da gerçekten arılar ortadan kaybolmaya başladılar...<br>V. Aslında muhtemelen bunu söylemedi ancak söylemde kesinlikle gerçeklik payı var.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan üçüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III - V - IV - II - I şeklindedir. Einstein'ın sözüyle başlanır (III), sözün doğruluğu (V) tartışılır, arıların kaybolma durumu (IV) üçüncü sıradadır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Araştırmalar... bu kişilik değişkenlerinin kişinin yaşamının farklı alanlarında etkisi olduğunu göstermektedir.<br>II. Makyavelizmde, kişinin kendi olumsuz özelliklerini gizleyerek diğer insanları manipüle etmesi...<br>III. Kişiliğin olumsuz ve günlük hayatın içinde istenmeyen şekillerde karşılaşılan karanlık tarafları... “karanlık üçlü” terimi ile tanımlanmaktadır.<br>IV. Psikopati ise yüksek dürtüsellik ile empati yoksunluğu...<br>V. Subklinik narsisizm; yüksek statü düşkünlüğü, lider olma arzusu...</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi sondan ikinci olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III - V - II - IV - I şeklindedir. 'Karanlık üçlü' tanımıyla başlanır (III), alt başlıklar sıralanır (V, II, IV). Sondan ikinci IV'tür.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Sokrates, Platon ve Aristoteles ile birlikte eğitim ile ilgili sistemli bir düşünme geleneğine geçildi.<br>II. Bu sayede sofistlerle birlikte önemli yol alan felsefe ve eğitim olgusu ilk defa gerçek öğretmenini ortaya çıkardı.<br>III. Felsefe tarihine bakıldığında İlk Çağ filozoflarından beri eğitim faaliyetinin devam ettiği görülmektedir.<br>IV. Sofistlere gelindiğinde insan bu merak ve ilginin içine kendini de katarak kendi varlığı ile ilgili sorular sormaya başladı.<br>V. Bu eğitimin temel problemi insanın evrene duyduğu ilgi ve meraktan kaynaklanmaktadır.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi sondan dördüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III - V - IV - II - I şeklindedir. İlk Çağ'la başlanır (III), temel problem (V) açıklanır. Sondan dördüncü V'dir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. Çünkü duyu organlarımızın algılama kapasitesi sınırlıdır.<br>II. Bu durumda dikkat en genel anlamda “hedefe yönelik bilinçli ve yoğun algı” olarak tanımlanabilir.<br>III. Günlük hayatımızda çevremizden gelen, sayılamayacak kadar çok sayıda uyaran... ile karşılaşmaktayız.<br>IV. Dikkat ise bu uyaranlardan ihtiyacımız olan bir ya da birkaçıına yoğunlaşma... zihinsel işleme alabilme durumudur.<br>V. Bu uyaranların hepsinin bizim tarafımızdan fark edilip işleme konması mümkün görünmemektedir.</p><p><b>Yukarıdaki numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan üçüncü olur?</b></p>",
    diff: 2,
    expl: "Sıralama: III - V - I - IV - II şeklindedir. Uyaranlarla başlanır (III), hepsinin fark edilemeyeceği (V) ve bunun nedeni olan kapasite sınırlılığı (I) üçüncü sıradadır.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  }
];