import type { McQ } from "../../../../types";

// ============================================================================
// ANAYASA TARİHİ - TEST 1
// ============================================================================
export const VAT_ANAYASA_TARIHI_TEST_1: McQ[] = [
  {
    text: "<p><b>Anayasa'da öngörülen usul ve yetkileri kullanarak mevcut Anayasa üzerinde değişiklik yapan iktidar aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Anayasa hukuku doktrininde Anayasa yapan iktidara 'kurucu iktidar' denir. Yeni bir anayasa yapma yetkisine sahip sınırsız iktidar 'Asli kurucu iktidar'dır. Mevcut anayasanın çizdiği sınırlar içinde anayasada değişiklik yapan (örn: 2017 değişikliği) yetki ise 'Türevsel (tali) kurucu iktidar'dır.",
    answers: [
      { text: "Kurucu iktidar", ok: false },
      { text: "Yasama iktidarı", ok: false },
      { text: "Türevsel (tali) kurucu iktidar", ok: true },
      { text: "Sınırsız iktidar", ok: false },
      { text: "Asli kurucu iktidar", ok: false }
    ]
  },
  {
    text: "<p>Bir öğrenci Türkiye'deki anayasaların yapısı hakkında aşağıdaki notları oluşturur:</p><ul><li><b>Çerçeve:</b> 1921 Anayasası</li><li><b>Kazuistik:</b> 1924, 1961 ve 1982 Anayasası</li><li><b>Yumuşak:</b> 1921 Anayasası</li><li><b>Sert:</b> 1924, 1961 ve 1982 Anayasası</li></ul><p><b>Bu bilgilere göre aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "1921 Anayasası olağanüstü dönemde hazırlanmış 23 maddelik kısa bir anayasadır (çerçeve) ve değiştirilmesi için özel, zorlaştırıcı bir usul öngörülmemiştir (yumuşak). Bu nedenle E seçeneğindeki 'değiştirilmesi zorlaştırılmıştır' ifadesi yanlıştır, aksine normal kanunlar gibi kolayca değiştirilebilir.",
    answers: [
      { text: "1982 Anayasası ayrıntılı hükümler içermektedir.", ok: false },
      { text: "1921 Anayasası kısa ve öz hükümlerden oluşur.", ok: false },
      { text: "1924 Anayasası'nın değiştirilmesi normal kanunlara göre daha zordur.", ok: false },
      { text: "1961 Anayasası uzun ve ayrıntılıdır.", ok: false },
      { text: "1921 Anayasası'nın değiştirilmesi zorlaştırılmıştır.", ok: true }
    ]
  },
  {
    text: "<p><ul><li>Her federe devletin kendine ait yasama organı ve anayasası vardır.</li><li>Merkezî yönetim ile federe birimler arasında yetki paylaşımı anayasa ile yapılır.</li><li>Federe devletler, kendi iç işlerinde geniş bir özerkliğe sahiptir.</li></ul></p><p><b>Bu bilgilere göre, aşağıdaki devletlerden hangisi federal bir devlet olarak değerlendirilemez?</b></p>",
    diff: 2,
    expl: "Brezilya, İsviçre, Almanya ve ABD eyaletlerden/kantonlardan oluşan federal yapıya sahip devletlerdir. Ancak Fransa eyaletlerden oluşmayan, merkezden yönetilen (üniter) bir devlettir.",
    answers: [
      { text: "Brezilya", ok: false },
      { text: "İsviçre", ok: false },
      { text: "Almanya", ok: false },
      { text: "Fransa", ok: true },
      { text: "ABD", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi sert anayasa özelliklerinden biri değildir?</b></p>",
    diff: 2,
    expl: "Sert anayasalar, normal (sıradan) kanunlardan daha zor usullerle değiştirilebilen anayasalardır. Nitelikli çoğunluk aranması, referandum zorunluluğu, değiştirilemez maddelerin varlığı sertlik göstergesidir. Ancak 'kanunlarla aynı usulle değiştirilebilmesi' yumuşak anayasa (örn: 1921 Anayasası) özelliğidir.",
    answers: [
      { text: "Anayasa değişikliği için nitelikli çoğunluk aranması", ok: false },
      { text: "Anayasa değişikliklerinin halkoyuna sunulması", ok: false },
      { text: "Anayasa yargısının bulunması", ok: false },
      { text: "Anayasa'nın, kanunlarla aynı usulle değiştirilebilmesi", ok: true },
      { text: "Anayasada değiştirilemez maddelerin varlığı", ok: false }
    ]
  },
  {
    text: "<p>Ahmet, derste anlatılanları şu şekilde not alıyor:</p><ul><li><b>Üniter Devletler:</b> Fransa, Yunanistan, Türkiye</li><li><b>Federal Devletler:</b> İngiltere, Rusya, ABD</li><li><b>Bölgeli Devlet:</b> İspanya</li></ul><p><b>Buna göre Ahmet'in notlarını aldığı devlet çeşitlerinden hangisi yanlış yere yazılmıştır?</b></p>",
    diff: 2,
    expl: "İngiltere; İskoçya, Galler gibi farklı bileşenlere sahip olsa da federal bir devlet değil, 'Üniter' bir devlettir. Federal devletler; ABD, Rusya, Almanya gibi eyalet sistemli devletlerdir.",
    answers: [
      { text: "Fransa", ok: false },
      { text: "ABD", ok: false },
      { text: "İspanya", ok: false },
      { text: "İngiltere", ok: true },
      { text: "Yunanistan", ok: false }
    ]
  },
  {
    text: "<p><b>\"Kanunların Ruhu Üzerine\" adlı eserinde yasama, yürütme ve yargı erklerinin birbirinden bağımsız olması gerektiğini savunarak modern anlamda kuvvetler ayrılığı ilkesini sistemleştiren ilk düşünür aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yasama, yürütme ve yargı güçlerinin ayrı organlarda toplanması gerektiğini 'Kanunların Ruhu Üzerine' eserinde sistemleştiren Fransız aydınlatmacı düşünür Montesquieu'dür.",
    answers: [
      { text: "Montesquieu", ok: true },
      { text: "John Locke", ok: false },
      { text: "Machiavelli", ok: false },
      { text: "Jean Jack Rousseau", ok: false },
      { text: "Thomas Hobbes", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Başkanlık sistemi</li><li>II. Yarı başkanlık sistemi</li><li>III. Parlamenter sistem</li></ul></p><p><b>Yukarıda verilen hükûmet sistemlerinden hangilerinde yürütme organı, yetki ve görev paylaşımı bakımından iki başlı bir yapıdadır?</b></p>",
    diff: 3,
    expl: "Başkanlık sisteminde yürütme organı tek başlıdır (Sadece Başkan vardır). Yarı başkanlık ve parlamenter sistemlerde ise yürütme organı iki başlıdır; biri Devlet Başkanı (Cumhurbaşkanı/Kral), diğeri Hükûmet Başkanı (Başbakan/Bakanlar Kurulu)'dır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p>A ülkesinde yasama organı olan parlamento, yürütme organının başı olan devlet başkanını görevden alamamaktadır. Aynı şekilde yürütme organı da yasama organını feshedememektedir. Yürütme yetkisi halk tarafından doğrudan seçilen devlet başkanına aittir ve devlet başkanı yasama organına karşı siyasi olarak sorumlu değildir.</p><p><b>Buna göre A ülkesi, aşağıdaki hükûmet sistemlerinden hangisini benimsemiş olabilir?</b></p>",
    diff: 2,
    expl: "Yasama ve yürütme güçlerinin birbirinden kesin, sert çizgilerle ayrıldığı, yürütmenin tek başlı olup doğrudan halk tarafından seçildiği sisteme 'Başkanlık Sistemi' (Örn: ABD) denir.",
    answers: [
      { text: "Parlamenter sistem", ok: false },
      { text: "Başkanlık sistemi", ok: true },
      { text: "Yarı başkanlık sistemi", ok: false },
      { text: "Meclis hükûmeti sistemi", ok: false },
      { text: "Mutlak monarşi", ok: false }
    ]
  },
  {
    text: "<p>K ülkesinde devlet başkanı, yürütme yetkisini sembolik olarak kullanmakta ve uluslararası toplantılarda ülkesini temsil etmektedir. Ancak, asıl yürütme yetkisi Başbakan ve Bakanlar Kuruluna aittir. Bakanlar kurulu, yasama organı tarafından verilen güvenoyuna dayanarak görev yapmaktadır.</p><p><b>Bu bilgilere göre, K ülkesi aşağıdaki hükûmet sistemlerinden hangisini benimsemiştir?</b></p>",
    diff: 2,
    expl: "Yürütmenin iki başlı olduğu, devlet başkanının sembolik (sorumsuz), asıl yetkinin Başbakan ve Bakanlar Kurulunda (sorumlu) bulunduğu ve hükümetin meclisten 'güvenoyu' aldığı sistem 'Parlamenter Sistem'dir.",
    answers: [
      { text: "Başkanlık sistemi", ok: false },
      { text: "Parlamenter sistem", ok: true },
      { text: "Yarı başkanlık sistemi", ok: false },
      { text: "Meclis hükûmeti sistemi", ok: false },
      { text: "Tek-parti yönetimi", ok: false }
    ]
  },
  {
    text: "<p>L ülkesinde parlamento üyeleri belli aralıklarla yapılan seçimle göreve gelmektedirler. Kanunlar her ne kadar milletvekilleri tarafından yapılıyor olsalar da bazı kanunlar referanduma sunulmakta ve referandumda kabul edilirse yürürlüğe girmektedirler.</p><p><b>Buna göre L ülkesi ile ilgili aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Halkın hem temsilcilerini seçtiği (temsili) hem de referandum, halk vetosu gibi araçlarla kanun yapım sürecine doğrudan dâhil olduğu sisteme 'Yarı Doğrudan Demokrasi' denir.",
    answers: [
      { text: "L ülkesinde yarı doğrudan demokrasi uygulanmaktadır.", ok: true },
      { text: "L ülkesi federal yapılı bir devlettir.", ok: false },
      { text: "L ülkesinde temsili demokrasi uygulanmaktadır.", ok: false },
      { text: "L ülkesi üniter bir devlettir.", ok: false },
      { text: "L ülkesinde doğrudan demokrasi uygulanmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>Türk hukuk sisteminde yer alan,</p><ul><li>I. 1921 Anayasası - meclis hükûmeti sistemi</li><li>II. 1924 Anayasası - karma hükûmet sistemi</li><li>III. 1961 Anayasası - parlamenter hükûmet sistemi</li></ul><p><b>anayasaların hangilerinde verilen hükûmet sistemi doğrudur?</b></p>",
    diff: 2,
    expl: "Türkiye'de anayasaların benimsediği sistemler: 1921 (Meclis Hükûmeti), 1924 (Karma sistem - güçler birliği/görevler ayrılığı), 1961 ve 1982 (2017'ye kadar Parlamenter), 2017 sonrası ise Cumhurbaşkanlığı Hükûmet Sistemi'dir. Öncüllerin üçü de doğrudur.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Bir hukuk öğrencisi, Türkiye'de anayasal sistemin değişim süreçlerini inceleyen bir tez hazırlamaktadır. Öğrenci, 1921'den günümüze kadar uygulanan anayasal rejimleri analiz ederken, yapılan Anayasa değişikliğiyle parlamenter sistemin sona erdiğini ve yerine yeni bir yönetim sisteminin geldiğini fark etmiştir.</p><p><b>Buna göre bu öğrencinin incelediği değişiklik aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Türkiye'de 1961'den beri uygulanan Parlamenter Hükûmet Sistemi, 2017 yılında yapılan Anayasa değişikliği (referandum) ile kaldırılarak yerine 'Cumhurbaşkanlığı Hükûmet Sistemi' getirilmiştir.",
    answers: [
      { text: "1961 Anayasası ile kuvvetler ayrılığı sistemine geçiş", ok: false },
      { text: "1924 Anayasası ile güçler birliği sisteminin kurulması", ok: false },
      { text: "1982 Anayasası ile güçlü yürütme modeline geçiş", ok: false },
      { text: "2017 Anayasa değişikliği ile Cumhurbaşkanlığı hükûmet sistemine geçiş", ok: true },
      { text: "1921 Anayasası ile meclis hükûmeti sisteminin sona ermesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi demokrasinin dayandığı temel ilkeler arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Demokrasinin temel unsurları; millî egemenlik, özgürlük, insan haklarının korunması, hukuk devleti ve çok partili siyasi hayattır. Ancak muhalefetin olmadığı 'Tek partili siyasal sistem', demokratik bir rejimin değil, otoriter/totaliter rejimlerin özelliğidir.",
    answers: [
      { text: "Millî egemenlik", ok: false },
      { text: "Özgürlük", ok: false },
      { text: "İnsan haklarının korunması", ok: false },
      { text: "Hukuk devleti", ok: false },
      { text: "Tek partili siyasal sistem", ok: true }
    ]
  },
  {
    text: "<p><b>Yarı doğrudan demokrasinin araçları arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Halk vetosu, halk girişimi, geri çağırma (recall) ve referandum yarı doğrudan demokrasinin araçlarıdır. Ancak yöneticilerin atanması antidemokratiktir; demokraside temsilciler atanmaz, doğrudan halk tarafından seçilir.",
    answers: [
      { text: "Halk vetosu", ok: false },
      { text: "Temsilcilerin atanması", ok: true },
      { text: "Halk girişimi", ok: false },
      { text: "Geri çağırma", ok: false },
      { text: "Referandum", ok: false }
    ]
  },
  {
    text: "<p>D ülkesinde yasalar mecliste kabul edilmelerinden itibaren 90 gün içinde yürürlüğe girerler. Bu 90 günlük süre içerisinde 100.000 seçmenin imzası ile yasayı halkoyuna sunmak mümkündür. 90 günlük süre içinde oylama talebi olmazsa, bu sürenin bitimi ile yasalar yürürlüğe girebilmektedir.</p><p><b>Buna göre D ülkesinde yarı doğrudan demokrasinin hangi aracı uygulanmaktadır?</b></p>",
    diff: 3,
    expl: "Mecliste kabul edilen bir yasanın yürürlüğe girmeden önce belirli sayıda seçmenin imzasıyla referanduma (halkoyuna) götürülmesi ve iptalinin istenebilmesi uygulamasına 'Halk vetosu' adı verilir.",
    answers: [
      { text: "Halk vetosu", ok: true },
      { text: "Referandum", ok: false },
      { text: "Halk girişimi", ok: false },
      { text: "Recall (Temsilcilerin azli)", ok: false },
      { text: "Geri çağırma", ok: false }
    ]
  }
];

// ============================================================================
// ANAYASA TARİHİ - TEST 2
// ============================================================================
export const VAT_ANAYASA_TARIHI_TEST_2: McQ[] = [
  {
    text: "<p><b>Türk hukuk tarihinde aşağıdakilerden hangisi için halk oylaması yapılmamıştır?</b></p>",
    diff: 3,
    expl: "Türkiye'de anayasal referandumlar 1961, 1982, 1987, 1988, 2007, 2010 ve 2017 yıllarında yapılmıştır. Ancak 2004 yılında yapılan anayasa değişiklikleri referanduma gidilmeden TBMM'de kabul edilerek yürürlüğe girmiştir.",
    answers: [
      { text: "1961 Anayasası'nın yürürlüğe girmesi", ok: false },
      { text: "1982 Anayasası'nın yürürlüğe girmesi", ok: false },
      { text: "1987'de siyasi yasakların kaldırılması", ok: false },
      { text: "2004 Anayasa değişiklikleri", ok: true },
      { text: "2010 Anayasa değişiklikleri", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, Tanzimat Fermanı'nda yer alan ilkelerden biri değildir?</b></p>",
    diff: 3,
    expl: "1839 Tanzimat Fermanı hukuki eşitliğe ve can/mal güvenliğine yer verir. Ferman, padişahın kendi lütfuyla yetkilerini sınırlamasıdır; bir anayasa değildir. Dolayısıyla 'Padişahın yetkilerinin anayasa ile sınırlandırılması' ilkesi Tanzimat Fermanında değil, daha sonraki 1876 Kanunuesasi döneminde gerçekleşmiştir.",
    answers: [
      { text: "Herkesin can, mal ve namus güvenliğinin sağlanması", ok: false },
      { text: "Vergilerin herkesin gelirine göre belirlenmesi", ok: false },
      { text: "Mahkemelerin açık ve adil şekilde işlemesi", ok: false },
      { text: "Padişahın yetkilerinin anayasa ile sınırlandırılması", ok: true },
      { text: "Askerlik süresinin belirli kurallara bağlanması", ok: false }
    ]
  },
  {
    text: "<p><b>1876 tarihli Kanunuesasi'nin özellikleri arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 3,
    expl: "1876 Kanunuesasi'nde çift meclisli yapı vardır ve yürütme organı olan Hükûmet (Bakanlar), Meclise karşı değil, doğrudan Padişaha karşı siyasal olarak sorumludur. 'Hükûmetin meclise karşı sorumlu olması' ifadesi bu anayasanın değil, modern parlamenter sistemin (Örn: 1909 Değişiklikleri) özelliğidir.",
    answers: [
      { text: "Padişah, Meclis-i Mebusanı süresiz olarak feshedebilir.", ok: false },
      { text: "Yasama yetkisi Meclis-i Âyan ve Meclis-i Mebusandan oluşan çift meclise aittir.", ok: false },
      { text: "Meclisi açma ve kapama yetkisi padişahındır.", ok: false },
      { text: "Hükûmet, Meclise karşı siyasal olarak sorumludur.", ok: true },
      { text: "Meclis-i Âyan üyeleri padişah tarafından seçilir.", ok: false }
    ]
  },
  {
    text: "<p>Anayasalarda yer alan meclisler:</p><ul><li>I. Meclisi Âyan</li><li>II. Millet Meclisi</li><li>III. Meclisi Mebusan</li><li>IV. Cumhuriyet Senatosu</li></ul><p><b>1876 Kanunuesasi ve 1961 Anayasası'nda yer alan meclisler, aşağıdaki eşleştirmelerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Çift kanatlı meclis olan 1876 Kanunuesasi'nde Meclis-i Umumi, 'Meclis-i Âyan' (I) ve 'Meclis-i Mebusan' (III) olarak ikiye ayrılır. Çift kanatlı meclis olan 1961 Anayasasında ise TBMM, 'Millet Meclisi' (II) ve 'Cumhuriyet Senatosu' (IV) olarak ikiye ayrılmıştır.",
    answers: [
      { text: "1876: I ve II / 1961: III ve IV", ok: false },
      { text: "1876: I ve III / 1961: II ve IV", ok: true },
      { text: "1876: I ve IV / 1961: II ve III", ok: false },
      { text: "1876: II ve III / 1961: I ve IV", ok: false },
      { text: "1876: II ve IV / 1961: I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1876 Kanunuesasi'de yasama yetkisi Heyet-i Âyan ve Heyet-i Mebusan olmak üzere aşağıdakilerden hangisine verilmiştir?</b></p>",
    diff: 2,
    expl: "1876 Anayasasında (Kanunuesasi) yasama yetkisi; Padişahın seçtiği Heyet-i Âyan ve halkın seçtiği Heyet-i Mebusan'dan oluşan üst çatı 'Meclis-i Umumi'ye verilmiştir.",
    answers: [
      { text: "Meclis-i Meşveret", ok: false },
      { text: "Meclis-i Umumi", ok: true },
      { text: "Meclis-i Vâlâ", ok: false },
      { text: "Meclis-i Ahkam-ı Adliye", ok: false },
      { text: "Meclis-i Şûra", ok: false }
    ]
  },
  {
    text: "<p><b>Kanunuesasi'de 1909 yılında yapılan değişiklikler arasında aşağıdakilerden hangisi gösterilemez?</b></p>",
    diff: 3,
    expl: "1909 Değişiklikleri ile padişahın yetkileri daraltılmış, meclis güçlendirilmiştir (sürgün yetkisi kalkmış, hükümet meclise sorumlu olmuştur vb). Ancak Devletin rejiminin 'Cumhuriyet' olduğu kararı, 1921 Anayasasına 1923 yılında yapılan değişiklikle eklenmiştir. 1909'da Osmanlı halen monarşiydi.",
    answers: [
      { text: "Padişahın sürgüne gönderme yetkisinin kaldırılması", ok: false },
      { text: "Meclis üyelerin kanun teklif etme yetkisi üzerindeki Padişah denetiminin kaldırılması", ok: false },
      { text: "Devletin şeklinin Cumhuriyet olduğunun belirtilmesi", ok: true },
      { text: "Padişahın Meclisi tek başına dağıtma yetkisinin kaldırılması", ok: false },
      { text: "Bakanlar Kurulunun meclis tarafından denetlenebilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>20 Ocak 1921'de yürürlüğe giren Teşkilat-ı Esasiye Kanunu'nda düzenlenen konular arasında aşağıdakilerden hangisi bulunmaz?</b></p>",
    diff: 3,
    expl: "1921 Anayasası savaş (Kurtuluş Savaşı) döneminde hazırlandığı için yalnızca 23 maddelik en temel devlet işleyişini belirler. Bu nedenle 'Temel Hak ve Hürriyetler' (Kamu özgürlükleri) ile yargı bu anayasada hiç düzenlenmemiştir.",
    answers: [
      { text: "İl yönetimi", ok: false },
      { text: "Yasama ve yürütme yetkileri", ok: false },
      { text: "Seçimlerin yenilenmesi", ok: false },
      { text: "Kamu özgürlükleri", ok: true },
      { text: "Egemenliğin kaynağı", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 1921 Anayasası'nın 1923 değişikliklerinden biri değildir?</b></p>",
    diff: 3,
    expl: "1923'teki tarihi değişikliklerle 'Devletin şekli Cumhuriyettir', 'Dini İslamdır', 'Resmi dili Türkçedir' ve 'Devlet başkanı Cumhurbaşkanıdır' hükümleri eklenmiştir. 'İstiklal Marşı' ise 1921'de kanunla kabul edilse de anayasal bir hüküm olarak metne ilk kez 1982 Anayasası ile girmiştir.",
    answers: [
      { text: "Türkiye devletinin hükûmet şekli Cumhuriyet'tir.", ok: false },
      { text: "Devletin millî marşı İstiklal Marşı'dır.", ok: true },
      { text: "Devletin resmî dili Türkçedir.", ok: false },
      { text: "Devletin başkanı Cumhurbaşkanıdır.", ok: false },
      { text: "Devletin resmî dini İslam'dır.", ok: false }
    ]
  },
  {
    text: "<p>Zeynep, bitirme tezinde Türk anayasalarında millî egemenlik ilkesinin gelişimini incelemektedir. Tezinde şu ifadeleri kullanmıştır:</p><p><i>\"Bu anayasa, egemenliğin millete ait olduğunu açıkça vurgulayan ilk anayasal düzenlemedir. Yürütme yetkisi ve görevi tamamen Türkiye Büyük Millet Meclisi'ne aittir. Yasama ve yürütme kuvvetleri meclis içinde birleşmiş, yasalar mecliste görüşülüp yürütme tarafından değil, yine meclis tarafından uygulanmıştır.\"</i></p><p><b>Zeynep'in bahsettiği anayasa aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Egemenliğin kayıtsız şartsız millete ait olduğunu ilk kez belirten ve yasama/yürütme yetkilerini TBMM'de toplayarak (güçler birliği/meclis hükûmeti) kuvvetleri meclis içinde birleştiren belge '1921 Teşkilat-ı Esasiye Kanunu'dur.",
    answers: [
      { text: "1876 Kanunuesasi", ok: false },
      { text: "1921 Teşkilat-ı Esasiye Kanunu", ok: true },
      { text: "1924 Anayasası", ok: false },
      { text: "1961 Anayasası", ok: false },
      { text: "1982 Anayasası", ok: false }
    ]
  },
  {
    text: "<p><b>Türk hukuk tarihinde, birden fazla anayasanın aynı anda yürürlükte olduğu \"ikili anayasa dönemi\" aşağıdaki anayasalardan hangisinin ilan edilmesiyle başlamıştır?</b></p>",
    diff: 2,
    expl: "1921 Teşkilat-ı Esasiye Kanunu ilan edildiğinde çok kısa (23 madde) olduğu için 1876 Kanunuesasi'ni tamamen ilga etmemiştir. Böylece 1921 ve 1876 anayasalarının çelişmeyen hükümleri 1924 yılına kadar birlikte uygulanmıştır. Bu sürece ikili anayasa dönemi denir.",
    answers: [
      { text: "1876 Kanunuesasi", ok: false },
      { text: "1921 Teşkilat-ı Esasiye Kanunu", ok: true },
      { text: "1924 Anayasası", ok: false },
      { text: "1961 Anayasası", ok: false },
      { text: "1982 Anayasası", ok: false }
    ]
  },
  {
    text: "<p><b>Ufuk:</b> \"Nüfusun yarısını oluşturan kadınların karar alma süreçlerine katılamaması, siyasette eşit oranda temsil edilememesi, her şeyden önce bir demokrasi meselesidir.\"</p><p><b>Beril:</b> \"Hâlbuki birçok Avrupa ülkesinden önce ülkemizde kadınlara milletvekili seçme ve seçilme hakkı Anayasa ile tanınmıştır\".</p><p><b>Buna göre Beril, kadınlara ülkemizde milletvekili seçme ve seçilme hakkının ilk kez hangi yıl yapılan anayasa değişikliği ile verildiğini söylerse doğru bilgi vermiş olur?</b></p>",
    diff: 2,
    expl: "Türkiye'de kadınlara siyasi haklar sırasıyla 1930'da Belediye, 1933'te Muhtar, 1934'te ise Milletvekili seçme ve seçilme hakkı olarak verilmiştir (034 - BMW kısaltması olarak da bilinir).",
    answers: [
      { text: "1930", ok: false },
      { text: "1933", ok: false },
      { text: "1934", ok: true },
      { text: "1945", ok: false },
      { text: "1961", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. 1921 Anayasası</li><li>II. 1924 Anayasası</li><li>III. 1961 Anayasası</li></ul></p><p><b>Yukarıdaki anayasalardan hangilerinde yasama ve yürütme yetkileri mecliste toplanmıştır?</b></p>",
    diff: 3,
    expl: "Yasama ve yürütme yetkisinin Mecliste toplandığı sistem 'Güçler (kuvvetler) birliği' sistemidir. 1921 Anayasasında tam güçler birliği (Meclis hükûmeti), 1924 Anayasasında ise güçler birliği görevler ayrılığı (karma sistem) vardır. 1961 Anayasası'nda ise kuvvetler ayrılığı sistemine (parlamenter rejim) geçilmiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1924 Anayasası'nda yapılan değişiklikler arasında aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Şeriye ve Evkaf Vekâletinin (Din işleri bakanlığı) kaldırılması işlemi 3 Mart 1924'te çıkarılan kanunla gerçekleşmiştir. 1924 Anayasası ise 20 Nisan 1924'te kabul edilmiştir. Bu yüzden vekaletin kaldırılması işlemi bir 'anayasa değişikliği' değil, sıradan bir kanundur.",
    answers: [
      { text: "1924'te Şeriye ve Evkâf Vekâletinin kaldırılması", ok: true },
      { text: "1928'de \"Devletin dini İslam'dır.\" maddesinin anayasadan çıkarılması", ok: false },
      { text: "1928'de TBMM'nin yetkileri arasından şer'i hükümlerin çıkarılması", ok: false },
      { text: "1934'te kadınlara milletvekili seçme ve seçilme hakkının verilmesi", ok: false },
      { text: "1937'de Atatürk ilkelerinin anayasaya girmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de çok partili ve tek dereceli ilk seçimler ile gizli oy açık sayım ve döküme dayalı ilk seçimler sırasıyla hangi yıllarda yapılmıştır?</b></p>",
    diff: 3,
    expl: "Türk siyasi tarihinde tek dereceli ve çok partili seçimler ilk defa 1946 yılında yapılmıştır. Ancak demokrasi standartlarına uygun 'Gizli oy, açık sayım' esasına dayanan ilk seçimler 'Beyaz Devrim' olarak da anılan 1950 seçimleridir.",
    answers: [
      { text: "1934 – 1937", ok: false },
      { text: "1937 – 1945", ok: false },
      { text: "1945 – 1946", ok: false },
      { text: "1946 – 1950", ok: true },
      { text: "1950 – 1954", ok: false }
    ]
  },
  {
    text: "<p><b>1961 Anayasası ve 1982 Anayasası'nın hazırlanmasında asli kurucu iktidar olarak;</b></p><ul><li>I. Temsilciler Meclisi</li><li>II. Danışma Meclisi</li><li>III. Millî Güvenlik Konseyi</li><li>IV. Millî Birlik Komitesi</li></ul><p><b>organlarından hangileri yer almıştır?</b></p>",
    diff: 3,
    expl: "1961 Anayasası darbe sonrasında askerî kanat (Millî Birlik Komitesi - IV) ve sivil kanat (Temsilciler Meclisi - I) tarafından; 1982 Anayasası ise askerî kanat (Millî Güvenlik Konseyi - III) ve sivil kanat (Danışma Meclisi - II) tarafından hazırlanmıştır.",
    answers: [
      { text: "1961: I ve II / 1982: III ve IV", ok: false },
      { text: "1961: I ve III / 1982: II ve IV", ok: false },
      { text: "1961: I ve IV / 1982: II ve III", ok: true },
      { text: "1961: II ve III / 1982: I ve IV", ok: false },
      { text: "1961: II ve IV / 1982: I ve III", ok: false }
    ]
  },
  {
    text: "<p>Kuvvetler ayrılığını <i>\"Türk milleti, egemenliğini, anayasanın koyduğu esaslara göre, yetkili organları eliyle kullanır.\"</i> şeklinde düzenleyerek <b>güçler ayrılığı ilkesini benimseyen ilk anayasa aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Türkiye'de kuvvetler ayrılığı prensibi (yasama, yürütme ve yargının katı bir biçimde birbirinden ayrıldığı parlamenter sistem) ilk kez 1961 Anayasası ile benimsenmiştir.",
    answers: [
      { text: "1876 Kanunuesasi", ok: false },
      { text: "1921 Anayasası", ok: false },
      { text: "1924 Anayasası", ok: false },
      { text: "1961 Anayasası", ok: true },
      { text: "1982 Anayasası", ok: false }
    ]
  }
];

// ============================================================================
// ANAYASA TARİHİ - TEST 3
// ============================================================================
export const VAT_ANAYASA_TARIHI_TEST_3: McQ[] = [
  {
    text: "<p><b>1961 Anayasası ile ilk kez hukukumuza giren kurum ve kavramlar arasında;</b></p><ul><li>I. insan hakları,</li><li>II. Anayasa Mahkemesi,</li><li>III. kuvvetler ayrılığı,</li><li>IV. Millî Güvenlik Kurulu,</li><li>V. sosyal devlet</li></ul><p><b>verilenlerden hangileri yer almaktadır?</b></p>",
    diff: 3,
    expl: "1961 Anayasası ile hukukumuza birçok yenilik girmiştir: Anayasa Mahkemesi, Sosyal Devlet, Hukuk Devleti, İnsan Haklarına Dayalı Devlet, Kuvvetler Ayrılığı, Millî Güvenlik Kurulu, Yüksek Seçim Kurulu, Diyanet İşleri Başkanlığı ve Başlangıç Hükümleri ilk kez bu anayasada düzenlenmiştir. (Öncüllerdeki 'insan hakları' ifadesi ile kastedilen 'insan haklarına dayalı devlet' ilkesidir).",
    answers: [
      { text: "I, II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "II, III ve V", ok: false },
      { text: "I, II ve V", ok: false },
      { text: "I, II, III, IV ve V", ok: true }
    ]
  },
  {
    text: "<p><b>1961 Anayasası'nda yapılan 1971 - 1973 değişiklikleri arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 3,
    expl: "Bakanlar Kuruluna KHK çıkarma yetkisi verilmesi, TRT ve üniversite özerkliklerinin zayıflatılması, Devlet Güvenlik Mahkemelerinin (DGM) kurulması ve memurlara verilen sendikal hakların kaldırılması 1971-1973 muhtıra değişikliklerindendir. Ancak Millî Güvenlik Kurulu (MGK) zaten 1961 Anayasası'nın ilk (orijinal) hâlinde kurulmuştur, bir değişiklik maddesi değildir.",
    answers: [
      { text: "Bakanlar Kuruluna kanun hükmünde kararname çıkarma yetkisi verildi.", ok: false },
      { text: "Millî Güvenlik Kurulu kuruldu.", ok: true },
      { text: "TRT'nin özerkliği kaldırıldı, üniversitelerin özerkliği ise zayıflatıldı.", ok: false },
      { text: "Devlet Güvenlik Mahkemeleri kuruldu.", ok: false },
      { text: "Memurlara verilen sendikal haklar kaldırıldı.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 1982 Anayasası'nın özelliklerinden biri değildir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası sert ve kazuistik (ayrıntılı) bir anayasadır. İlk üç maddesi değiştirilemez, halk oylaması ile kabul edilmiş ve başlangıç metnine sahiptir. Ancak 'Çift meclis sistemi' sadece 1876 Kanunuesasi'nde (Ayan-Mebusan) ve 1961 Anayasası'nda (Millet Meclisi-Senato) uygulanmıştır; 1982'de sadece TBMM vardır.",
    answers: [
      { text: "Sert ve kazuistik bir anayasadır.", ok: false },
      { text: "Halk oylaması ile kabul edilmiştir.", ok: false },
      { text: "İlk üç maddesi değiştirilemez.", ok: false },
      { text: "Başlangıç metni ile başlar.", ok: false },
      { text: "Çift meclis sistemini benimsemiştir.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda ilk kez yer almış kurum ve yargı organları arasında;</b></p><ul><li>I. Anayasa Mahkemesi,</li><li>II. Atatürk Kültür, Dil ve Tarih Yüksek Kurumu,</li><li>III. Devlet Denetleme Kurulu,</li><li>IV. Yükseköğretim Kurulu</li></ul><p><b>verilenlerden hangileri yer almaktadır?</b></p>",
    diff: 3,
    expl: "Atatürk Kültür, Dil ve Tarih Yüksek Kurumu (AKDTYK), Devlet Denetleme Kurulu (DDK) ve Yükseköğretim Kurulu (YÖK) ilk kez 1982 Anayasası ile kurulmuştur. Anayasa Mahkemesi (I) ise ilk kez 1961 Anayasası'nda yer almıştır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p><ul><li>I. 1924 Anayasası</li><li>II. 1961 Anayasası</li><li>III. 1982 Anayasası</li></ul></p><p><b>Yukarıdaki anayasalardan hangilerinde başlangıç metnine yer verilmiştir?</b></p>",
    diff: 2,
    expl: "Anayasanın dayandığı felsefeyi ve temel ilkeleri özetleyen 'Başlangıç Metni', Türk anayasa tarihinde ilk kez 1961 Anayasası'nda yer almış, ardından 1982 Anayasası'nda da korunarak anayasa metnine dâhil edilmiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki anayasalardan hangisinde, TBMM'ye yasama yoluyla çıkardığı kanunları bağlayıcı biçimde açıklama (yasama yorumu) yetkisi verilmiştir?</b></p>",
    diff: 3,
    expl: "Yasama organının (Meclisin) kanunların ne anlama geldiğini yine bir yasama işlemiyle açıklamasına 'yasama yorumu' (tevil-i kanun) denir. Bu yetki yalnızca 1924 Anayasası'nda TBMM'ye tanınmış, kuvvetler ayrılığına aykırı görülerek 1961'de kaldırılmıştır.",
    answers: [
      { text: "1876 Kanunuesasi", ok: false },
      { text: "1921 Anayasası", ok: false },
      { text: "1924 Anayasası", ok: true },
      { text: "1961 Anayasası", ok: false },
      { text: "1982 Anayasası", ok: false }
    ]
  },
  {
    text: "<p><b>Ülkemizde, Cumhuriyet'in ilan edildiği 29 Ekim 1923 tarihinde yürürlükte bulunan 1921 Anayasası da göz önüne tutulacak olursa o günden bu yana kaç farklı Anayasal rejim uygulanmıştır?</b></p>",
    diff: 2,
    expl: "Cumhuriyetin ilanı (1923) sırasında yürürlükte olan 1921 Anayasası dâhil olmak üzere sırasıyla; 1921, 1924, 1961 ve 1982 anayasaları uygulanmıştır. Toplamda 4 farklı anayasal rejim vardır.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. 1924 Anayasası - TBMM kararı</li><li>II. 1961 Anayasası - Halk oylaması (referandum)</li><li>III. 1982 Anayasası - Halk oylaması (referandum)</li></ul></p><p><b>Yukarıdaki anayasalardan hangilerinin kabul yöntemleri doğru verilmiştir?</b></p>",
    diff: 2,
    expl: "1924 Anayasası mecliste vekillerin oylamasıyla (TBMM kararı) yürürlüğe girmiştir. 1961 ve 1982 Anayasaları ise askerî müdahaleler sonrası kurucu meclislerce hazırlanmış ve doğrudan halk oylaması (referandum) ile kabul edilmiştir. Üç eşleştirme de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><ul><li>Devletin şekli Cumhuriyet olacak ve bu madde değiştirilemeyecektir.</li><li>Yasama ve yürütme yetkisi mecliste toplanacaktır.</li><li>Milletvekilleri genel oyla seçilecektir.</li><li>Devletin başkenti açıkça belirtilmiştir.</li></ul></p><p><b>Bu esaslar aşağıdaki anayasalardan hangisinin yapısal özellikleriyle en çok benzerlik göstermektedir?</b></p>",
    diff: 3,
    expl: "Devletin şeklinin Cumhuriyet olduğunun değiştirilemez madde yapılması, başkentin anayasada belirtilmesi ve yasama ile yürütme yetkilerinin (kuvvetler birliği - görevler ayrılığı) mecliste toplanması 1924 Anayasası'nın temel özellikleridir.",
    answers: [
      { text: "1876 Kanunuesasi", ok: false },
      { text: "1921 Anayasası", ok: false },
      { text: "1924 Anayasası", ok: true },
      { text: "1961 Anayasası", ok: false },
      { text: "1982 Anayasası", ok: false }
    ]
  },
  {
    text: "<p><ul><li>Yasama organı çift meclisli yapıdadır.</li><li>Anayasa Mahkemesi kurulmuştur.</li><li>Sosyal ve ekonomik haklara ilk kez sistematik şekilde yer verilmiştir.</li><li>Kuvvetler ayrılığı açıkça benimsenmiştir.</li><li>Anayasaya ilk kez başlangıç metni konulmuştur.</li></ul></p><p><b>Yukarıda bilgileri verilen anayasa aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Sayılan özellikler (Çift meclis, Anayasa Mahkemesi, kuvvetler ayrılığı, sosyal devlet ve başlangıç metni) tamamen özgürlükçü yapısıyla bilinen 1961 Anayasası'nın kurumsal yenilikleridir.",
    answers: [
      { text: "1921 Anayasası", ok: false },
      { text: "1924 Anayasası", ok: false },
      { text: "1961 Anayasası", ok: true },
      { text: "1982 Anayasası", ok: false },
      { text: "1876 Kanunuesasi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 1982 Anayasası ile birlikte ilk kez kurulan bir kurumdur?</b></p>",
    diff: 2,
    expl: "Anayasa Mahkemesi, Yüksek Seçim Kurulu ve Millî Güvenlik Kurulu 1961'de; Diyanet İşleri Başkanlığı ise 1924'te kurulmuştur. Cumhurbaşkanlığına bağlı çalışan 'Devlet Denetleme Kurulu (DDK)' ise ilk kez 1982 Anayasası ile kurulmuştur.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Millî Güvenlik Kurulu", ok: false },
      { text: "Devlet Denetleme Kurulu", ok: true },
      { text: "Yüksek Seçim Kurulu", ok: false },
      { text: "Diyanet İşleri Başkanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1961 Anayasası ve 1982 Anayasası'nda birlikte düzenlenen kurumlar arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 3,
    expl: "Anayasa Mahkemesi, MGK, Yüksek Seçim Kurulu ve Sayıştay her iki anayasada da yer almıştır. Ancak 'Atatürk Kültür, Dil ve Tarih Yüksek Kurumu' ilk ve tek olarak 1982 Anayasası'nda düzenlenmiştir; 1961 Anayasası'nda yoktur.",
    answers: [
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Atatürk Kültür, Dil ve Tarih Yüksek Kurumu", ok: true },
      { text: "Millî Güvenlik Kurulu", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: false },
      { text: "Sayıştay", ok: false }
    ]
  },
  {
    text: "<p><b>Türk siyasi tarihinde kaç kez Anayasa referandumu (halk oylaması) yapılmıştır?</b></p>",
    diff: 3,
    expl: "Türkiye'de bugüne kadar 1961 (Yeni Anayasa), 1982 (Yeni Anayasa), 1987 (Siyasi yasakların kaldırılması), 1988 (Yerel seçimlerin öne alınması), 2007 (CB'nin halkça seçilmesi), 2010 (Kapsamlı değişiklik) ve 2017 (CB Hükûmet Sistemi) olmak üzere toplam 7 kez referandum yapılmıştır.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "6", ok: false },
      { text: "7", ok: true },
      { text: "8", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de aşağıdaki gelişmelerden hangisi diğerlerinden sonra gerçekleşmiştir?</b></p>",
    diff: 3,
    expl: "Genel oy (kadınlara vekil olma hakkı) 1934, Laiklik ilkesinin Anayasaya girmesi 1937, Çok partili hayat ve tek dereceli seçimler 1946'da gerçekleşmiştir. 'Gizli oy, açık sayım ve döküm' esası ise demokratikleşmenin en önemli adımı olarak ilk kez 1950 seçimlerinde (diğerlerinden sonra) uygulanmıştır.",
    answers: [
      { text: "Çok partili hayata geçilmesi", ok: false },
      { text: "Seçimlerin tek dereceli hale gelmesi", ok: false },
      { text: "Gizli oy, açık sayım ve döküm esasının ilk kez uygulanması", ok: true },
      { text: "Anayasa'da genel oy ilkesinin benimsenmesi", ok: false },
      { text: "Laiklik ilkesinin Anayasa'ya girmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki anayasal ilkeler ile ilk kez açıkça yer aldıkları anayasa eşleştirmelerinden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Kuvvetler ayrılığı ve sosyal devlet 1961'de, laiklik 1937 değişikliğiyle 1924'te, egemenliğin millete ait olması 1921'de anayasaya girmiştir. Ancak 'Hukuk devleti' ilkesi 1982'de değil, ilk kez 1961 Anayasası'nda düzenlenmiştir.",
    answers: [
      { text: "Kuvvetler ayrılığı - 1961 Anayasası", ok: false },
      { text: "Sosyal devlet - 1961 Anayasası", ok: false },
      { text: "Laiklik - 1924 Anayasası", ok: false },
      { text: "Hukuk devleti - 1982 Anayasası", ok: true },
      { text: "Egemenliğin kayıtsız şartsız millete ait olması - 1921 Anayasası", ok: false }
    ]
  },
  {
    text: "<p>M ülkesinin anayasasına göre, 1.000.000 vatandaşın imzası ile meclise kanun teklif edilebilmektedir. Bu teklif yasama organında görüşülmekte, kabul veya reddedilmektedir.</p><p><b>Buna göre M ülkesinin anayasasında aşağıdaki yarı doğrudan demokrasinin araçlarından hangisinin benimsendiği söylenebilir?</b></p>",
    diff: 2,
    expl: "Halkın, anayasada belirtilen sayıda imza toplayarak (örn: 1 milyon kişi) somut bir kanun teklifi veya yasa tasarısı hazırlayıp bunu Meclise sunmasına yarı doğrudan demokrasi araçlarından 'Halk girişimi' denir.",
    answers: [
      { text: "Referandum", ok: false },
      { text: "Halk vetosu", ok: false },
      { text: "Geri çağırma", ok: false },
      { text: "Halk girişimi", ok: true },
      { text: "Temsilcilerin azli", ok: false }
    ]
  }
];
