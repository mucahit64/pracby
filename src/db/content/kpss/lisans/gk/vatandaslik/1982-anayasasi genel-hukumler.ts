import type { McQ } from "../../../../types";

// ============================================================================
// 1982 ANAYASASI GENEL HÜKÜMLER - TEST 1
// ============================================================================
export const VAT_1982_GENEL_HUKUMLER_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıdaki ifadelerden hangisi 1982 Anayasası'nın başlangıç kısmında yer alan temel ilkelerden biri değildir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'nın başlangıç metninde; Atatürk inkılaplarına bağlılık, laik Cumhuriyet, kuvvetler ayrılığı, millî egemenlik, yurtta sulh cihanda sulh ve Türk varlığının bölünmezliği ilkeleri yer alır. 'Yürütme organının tek başlı olması' (2017 değişikliğiyle gelse de) Anayasa'nın başlangıç metni ilkeleri arasında sayılmaz; kuvvetler ayrılığı vurgulanır.",
    answers: [
      { text: "İnsan haklarına dayanan devlet anlayışı", ok: false },
      { text: "Laik Cumhuriyet'in korunması", ok: false },
      { text: "Egemenliğin halka ait olması", ok: false },
      { text: "Yürütme organının tek başlı olması", ok: true },
      { text: "Atatürk ilke ve inkılaplarının esas alınması", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Anayasa metnine dâhil değildir?</b></p>",
    diff: 2,
    expl: "Anayasa metninin dayandığı felsefeyi gösteren Başlangıç metni ve geçici/son hükümler Anayasa metnine dâhildir. Ancak maddelerin konusunu veya bağlantılarını gösteren 'Madde kenar başlıkları' sadece okumayı kolaylaştıran etiketlerdir ve anayasa metnine (hükmüne) dâhil değildir.",
    answers: [
      { text: "Başlangıç metni", ok: false },
      { text: "Madde kenar başlıkları", ok: true },
      { text: "Mali ve ekonomik hükümler", ok: false },
      { text: "Geçici hükümler", ok: false },
      { text: "Son hükümler", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, 1982 Anayasası'na göre, devletin şeklini ifade eder?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın değiştirilemez 1. Maddesi devletin şeklini belirler. O hüküm şöyledir: 'Türkiye Devleti bir Cumhuriyettir.' Diğer özellikler (demokratik, laik, vb.) Cumhuriyetin nitelikleridir.",
    answers: [
      { text: "Türkiye Devleti'nin başkenti Ankara'dır.", ok: false },
      { text: "Türkiye devleti bir Cumhuriyettir.", ok: true },
      { text: "Demokratik devlet", ok: false },
      { text: "Millî egemenlik", ok: false },
      { text: "Türkiye Devleti ülkesi ve milletiyle bölünemez bir bütündür.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Cumhuriyet'in nitelikleri arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Anayasanın 2. Maddesi Cumhuriyetin niteliklerini sayar: İnsan haklarına saygılı, demokratik, laik, sosyal bir hukuk devletidir. Türkiye Devleti kuvvetler birliğine değil, 'kuvvetler ayrılığı' ilkesine dayanır.",
    answers: [
      { text: "Türkiye Devleti bir hukuk devletidir.", ok: false },
      { text: "Türkiye Devleti bir sosyal devlettir.", ok: false },
      { text: "Türkiye Devleti insan haklarına saygılı bir devlettir.", ok: false },
      { text: "Türkiye Devleti demokratik bir devlettir.", ok: false },
      { text: "Türkiye Devleti kuvvetler birliğine dayalı bir devlettir.", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın 3. maddesinde aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Anayasanın değiştirilemez 3. Maddesi şunları kapsar: Devletin bütünlüğü (bölünmezlik), resmî dilin Türkçe olması, bayrağın ay yıldızlı al bayrak olması, millî marşın İstiklal Marşı olması ve başkentin Ankara olması. Vatandaşlık tanımı ise 66. Maddede düzenlenmiştir.",
    answers: [
      { text: "Bayrağın şekli kanunda belirtilen ay yıldızlı al bayrak olması", ok: false },
      { text: "Başkentin Ankara olması", ok: false },
      { text: "Türk Devleti'nin vatanı ve milletiyle bölünmez bütünlüğü", ok: false },
      { text: "Millî marşın İstiklal Marşı olması", ok: false },
      { text: "Türk Devleti'ne vatandaşlık bağı ile bağlı olan herkesin Türk olması", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın 3. maddesinde yer alan \"Türkiye devleti ülkesi ve milletiyle bölünemez bir bütündür.\" ifadesi;</b></p><ul><li>I. Atatürk milliyetçiliği,</li><li>II. laik devlet,</li><li>III. üniter devlet</li></ul><p><b>hangi ilkeler ile ilişkilidir?</b></p>",
    diff: 3,
    expl: "Bölünmez bütünlük ilkesi, ülkenin eyaletlere veya bölgelere bölünemeyeceğini belirten 'Üniter devlet' yapısının temelidir. Aynı zamanda ülkedeki tüm vatandaşların tek bir ulus (millet) olduğunu savunan 'Atatürk milliyetçiliği' ile doğrudan bağlantılıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın ilgili maddelerinin değiştirilmesine ilişkin verilen bir teklifin konusu;</b></p><ul><li>I. millî marş,</li><li>II. egemenlik yetkisi,</li><li>III. resmî dil,</li><li>IV. kanun önünde eşitlik ilkesi,</li><li>V. devletin şekli</li></ul><p><b>verilenlerden hangileri olabilir?</b></p>",
    diff: 3,
    expl: "Anayasa m.4 uyarınca ilk üç madde (Devletin şekli, Cumhuriyetin nitelikleri, dil, bayrak, marş, başkent) değiştirilemez ve değiştirilmesi dahi teklif edilemez. Dolayısıyla I (marş), III (dil) ve V (devletin şekli) teklif edilemez. Ancak Egemenlik (m.6) ve Eşitlik (m.10) ilkeleri ilk üç maddede yer almadığı için anayasa değişikliğine konu olabilir.",
    answers: [
      { text: "Yalnız IV", ok: false },
      { text: "II ve IV", ok: true },
      { text: "I ve III", ok: false },
      { text: "IV ve V", ok: false },
      { text: "I, II ve V", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'nın 37. maddesine göre: <i>\"Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz\".</i></p><p><b>Bu hüküm aşağıda verilen hukuk devleti ilkelerinden hangisini güvence altına almaktadır?</b></p>",
    diff: 2,
    expl: "Bu ifade, uyuşmazlıklar yaşanmadan önce, herkes için geçerli soyut kurallarla belirlenmiş, tarafsız mahkemelerde yargılanma hakkı olan 'Kanuni Hâkim Güvencesi (Doğal Hâkim)' ilkesini tanımlar. Bu sayede kişiye özel mahkeme (olağanüstü merci) kurulamaz.",
    answers: [
      { text: "Yargı bağımsızlığı", ok: false },
      { text: "Yargılamanın aleniliği", ok: false },
      { text: "Kuvvetler ayrılığı", ok: false },
      { text: "Kanuni hâkim güvencesi", ok: true },
      { text: "Adil yargılanma", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'nın 11. maddesine göre: <i>\"Anayasa hükümleri, yasama, yürütme ve yargı organlarını, idare makamlarını ve diğer kuruluş ve kişileri bağlayan temel hukuk kurallarıdır. Kanunlar anayasaya aykırı olamaz.\"</i></p><p><b>Hükmü aşağıdakilerden hangisini güvence altına almaktadır?</b></p>",
    diff: 2,
    expl: "Anayasa madde 11, normlar hiyerarşisinde Anayasa'nın en üstte bulunduğunu ve her türlü kanunun, kurumun ve yasanın ona uymak zorunda olduğunu anlatan 'Anayasanın üstün ve bağlayıcı olması' ilkesidir.",
    answers: [
      { text: "Hak arama özgürlüğü", ok: false },
      { text: "Adil yargılanma hakkı", ok: false },
      { text: "Anayasanın üstün ve bağlayıcı olması", ok: true },
      { text: "Mahkemelerin bağımsızlığı", ok: false },
      { text: "Kanuni hâkim güvencesi", ok: false }
    ]
  },
  {
    text: "<p>Türk Milleti, egemenliğini, <b>----</b> koyduğu esaslara göre, <b>----</b> eliyle kullanır.</p><p><b>1982 Anayasası'na göre, yukarıda boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Anayasanın 6. maddesinde yer alan ifadeye göre: 'Türk Milleti, egemenliğini, anayasanın koyduğu esaslara göre, yetkili organları eliyle kullanır.' Bu ifade kuvvetler ayrılığı prensibinin bir sonucudur.",
    answers: [
      { text: "anayasanın - tarafsız ve bağımsız mahkemeler", ok: false },
      { text: "anayasanın - Türkiye Büyük Millet Meclisi", ok: false },
      { text: "anayasanın - yetkili organlar", ok: true },
      { text: "kanunun - Türkiye Büyük Millet Meclisi", ok: false },
      { text: "kanunun - yetkili organlar", ok: false }
    ]
  },
  {
    text: "<p><ul><li>I. Yasama</li><li>II. Yürütme</li><li>III. Yargı</li></ul></p><p><b>1982 Anayasası'nda yukarıdakilerden hangileri hem yetki hem de görev olarak düzenlenmiştir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'nda Yasama (m.7) ve Yargı (m.9) sadece bir 'yetki' olarak verilmiştir. Ancak Yürütme (m.8); Cumhurbaşkanı tarafından anayasa ve kanunlara uygun olarak kullanılan ve yerine getirilen bir 'yetki ve görev' olarak düzenlenmiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Anayasa'nın 10. maddesinde pozitif ayrımcılık yapılabilecek kesimler arasında belirtilmemiştir?</b></p>",
    diff: 2,
    expl: "Anayasa m.10'a göre korunması gereken (pozitif ayrımcılık sağlanan) dezavantajlı gruplar; kadınlar, çocuklar, yaşlılar, engelliler (özürlüler), harp ve vazife şehitlerinin dul ve yetimleri ile maluller ve gazilerdir. Sanatçılar bu kapsamda değildir.",
    answers: [
      { text: "Maluller", ok: false },
      { text: "Sanatçılar", ok: true },
      { text: "Çocuklar", ok: false },
      { text: "Özürlüler", ok: false },
      { text: "Şehit yetimleri", ok: false }
    ]
  },
  {
    text: "<p>Fizik öğretmeni Defne'ye öğretmenliğe giriş mülakat sınavında Anayasası'nın ilk üç maddesine ilişkin sorular sorulmuştur.</p><p><b>Buna göre aşağıdakilerden hangisi 1982 Anayasası'nın ilk üç maddesine ilişkin Defne'nin vereceği bilgiler arasında yer almaz?</b></p>",
    diff: 3,
    expl: "İlk üç madde şunları içerir: Devletin şekli (Cumhuriyet), Cumhuriyetin nitelikleri (Hukuk devleti, sosyal, laik, demokratik), Üniter yapı (Bölünmez bütünlük), Başkent, Bayrak, Marş ve Dil. 'Kanun önünde eşitlik' ilkesi ise ilk üç maddede değil, 10. maddede düzenlenmiştir.",
    answers: [
      { text: "Üniter devlet", ok: false },
      { text: "Devletin şekli", ok: false },
      { text: "Başkent", ok: false },
      { text: "Kanun önünde eşitlik", ok: true },
      { text: "Hukuk devleti", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'nın 2. maddesinde Cumhuriyet'in nitelikleri madde kenar başlığı ile düzenlenen hükümde; <i>\"Türkiye Cumhuriyeti, toplumun huzuru, millî dayanışma ve adalet anlayışı içinde, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, başlangıçta belirtilen temel ilkelere dayanan, demokratik, laik ve sosyal bir <b>----</b> Devletidir.\"</i> şeklinde belirtilmiştir.</p><p><b>Buna göre yukarıda boş bırakılan yere hangisi getirilebilir?</b></p>",
    diff: 2,
    expl: "İlgili cümlenin tam hâli '...demokratik, laik ve sosyal bir Hukuk Devletidir.' şeklindedir. Cumhuriyetin 4 temel niteliği (insan haklarına saygılı, demokratik, laik, sosyal, hukuk devleti) burada sayılmıştır.",
    answers: [
      { text: "Federatif", ok: false },
      { text: "Liberal", ok: false },
      { text: "İnsan haklarına dayalı", ok: false },
      { text: "Demokratik", ok: false },
      { text: "Hukuk", ok: true }
    ]
  },
  {
    text: "<p>Zeynep, derste yazılanları defterine aşağıdaki gibi not alıyor:</p><ul><li>Türkiye Devleti, ülkesi ve milletiyle bölünmez bir bütündür.</li><li>Dili Türkçedir.</li><li>Bayrağı, şekli kanununda belirtilen, beyaz ay yıldızlı al bayraktır.</li><li>Millî marşı \"İstiklal Marşı\"dır.</li><li>Başkenti Ankara'dır.</li></ul><p><b>Zeynep'in defterine not aldığı yukarıdaki ifadeler 1982 Anayasası'nın hangi maddesinde düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Devletin bütünlüğü, bayrağı, resmî dili, millî marşı ve başkenti; 1982 Anayasası'nın değiştirilemez olan 3. maddesinde düzenlenmiştir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi sosyal devletin hukuki yöntemlerinden biri değildir?</b></p>",
    diff: 3,
    expl: "Sosyal devleti gerçekleştirme araçları (yöntemleri) şunlardır: Vergi adaleti (artan oranlı vergi), kamulaştırma, devletleştirme, planlama ve vatandaşlara sosyal haklar tanınmasıdır. 'Tahkim' ise hukuki bir uyuşmazlık çözüm yoludur, sosyal devlet yöntemi değildir.",
    answers: [
      { text: "Tahkim", ok: true },
      { text: "Vergi adaleti", ok: false },
      { text: "Kamulaştırma", ok: false },
      { text: "Devletleştirme", ok: false },
      { text: "Planlama", ok: false }
    ]
  }
];

// ============================================================================
// 1982 ANAYASASI GENEL HÜKÜMLER - TEST 2
// ============================================================================
export const VAT_1982_GENEL_HUKUMLER_TEST_2: McQ[] = [
  {
    text: "<p>Danıştay bir içtihadında \"Anadolu Liselerine girişte kız öğrencilere 3 puan eklenmesi yönündeki yönetmelik değişikliğini eşitlik ilkesine aykırı bulmayarak, Türk toplum yapısı, gelenek ve görenekleri göz önünde bulundurulduğunda kız öğrencilere adı geçen okullarda öncelik tanınmasının Anayasa ve Temel Eğitim Yasası'nda amaçlanan okuma ve fırsat eşitliği ilkelerini zedelemeyeceğine\" şeklinde karar vermiştir.</p><p><b>Buna göre Danıştayın bahsettiği hukuk kavramı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Danıştay kararında, kız öğrencilerin dezavantajlı durumunu gidermek amacıyla yapılan düzenlemenin anayasal eşitlik ilkesini zedelemeyeceği ifade edilmiştir. Bu yaklaşım, eşitliği mutlak bir aynılaştırma olarak değil, dezavantajlı grupları korumayı amaçlayan pozitif ayrımcılık anlayışıyla ele alır. Bu ilke, Anayasa'nın 10. maddesinin son fıkrasında da açıkça düzenlenmiştir.",
    answers: [
      { text: "Dikey eşitlik", ok: false },
      { text: "Pozitif ayrımcılık", ok: true },
      { text: "Sosyal devlet ilkesi", ok: false },
      { text: "Dolaylı ayrımcılık", ok: false },
      { text: "Hukuk devleti ilkesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası madde 6'ya göre</b></p><ul><li>Türk milleti, egemenliğini, Anayasa'nın koyduğu esaslara göre, yetkili organları eliyle kullanır.</li><li>hiçbir kimse veya organ kaynağını Anayasa'dan almayan bir devlet yetkisi kullanamaz.</li></ul><p><b>ifadeleri sırasıyla aşağıdaki kavramlardan hangilerine denk gelmektedir?</b></p>",
    diff: 3,
    expl: "Birinci cümlede egemenliğin millete ait olduğu ve bunun yetkili organlar (Yasama, Yürütme, Yargı) eliyle kullanılacağı ifade edilmektedir. Bu doğrudan 'kuvvetler ayrılığı' ilkesini karşılar. İkinci cümlede ise hiçbir kimsenin veya organın Anayasa'da öngörülmeyen yetkiyi kullanamayacağı vurgulanmaktadır. Bu, yetkinin kaynağının kanun/anayasa olması gerektiğini, yani 'idarenin kanuniliğini' gösterir.",
    answers: [
      { text: "Kanun önünde eşitlik – idarenin kanuniliği", ok: false },
      { text: "Atatürk milliyetçiliği – hukuk devleti", ok: false },
      { text: "Kuvvetler ayrılığı – idarenin kanuniliği", ok: true },
      { text: "Anayasanın üstünlüğü – kanun önünde eşitlik", ok: false },
      { text: "Kuvvetler ayrılığı – Atatürk milliyetçiliği", ok: false }
    ]
  },
  {
    text: "<p>Danıştay verdiği bir kararda şu unsurları bir arada değerlendirerek bir anayasal ilkenin varlığına vurgu yapmıştır:</p><ul><li>Temel hak ve özgürlüklerin güvence altına alınması,</li><li>Kanunların Anayasaya uygunluğunun yargısal denetimi,</li><li>İdarenin hukuka bağlılığı ve yargı denetimi,</li><li>Kuvvetler ayrılığı ve yargı bağımsızlığı,</li><li>Devletin mali sorumluluğu ve demokratik rejim.</li></ul><p><b>Danıştayın bu ifadeleriyle vurgu yaptığı anayasal ilke aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Danıştayın kararında zikrettiği unsurlar doğrudan hukuk devleti ilkesini oluşturan alt unsurlardır. Yargısal denetim, yargı bağımsızlığı, temel haklar güvencesi ve idarenin hukuka bağlılığı hukuk devletinin olmazsa olmazlarıdır.",
    answers: [
      { text: "Laik devlet", ok: false },
      { text: "Demokratik devlet", ok: false },
      { text: "Hukuk devleti", ok: true },
      { text: "Sosyal devlet", ok: false },
      { text: "Üniter devlet", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda yer alan \"Hiçbir kişiye, aileye, zümreye ve sınıfa imtiyaz tanınamaz.\" hükmü aşağıdaki başlıkların hangisinin altında düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Anayasa Madde 10 – Herkes, dil, ırk, renk, cinsiyet, siyasi düşünce, felsefi inanç, din, mezhep ve benzeri sebeplerle ayırım gözetilmeksizin kanun önünde eşittir... Hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınamaz. (Kanun Önünde Eşitlik başlığı altındadır).",
    answers: [
      { text: "Egemenlik", ok: false },
      { text: "Anayasanın üstünlüğü ve bağlayıcılığı", ok: false },
      { text: "Suç ve cezalara ilişkin esaslar", ok: false },
      { text: "Kanun önünde eşitlik", ok: true },
      { text: "Cumhuriyet'in nitelikleri", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi yargı denetimine tabidir?</b></p>",
    diff: 3,
    expl: "2010 yılında yapılan Anayasa değişikliği ile memurlara verilen uyarma ve kınama cezaları dâhil bütün disiplin cezalarına karşı yargı yolu açılmıştır. HSK'nın meslekten çıkarma dışındaki kararları, YAŞ'ın terfi ve kadrosuzluk kararları ile Hakem Kurullarının kararları yargı denetimi dışındadır.",
    answers: [
      { text: "Hâkimler ve Savcılar Kurulunun, meslekten çıkarma cezasına ilişkin olanlar dışındaki kararları", ok: false },
      { text: "Memurlar hakkında verilen disiplin kararları", ok: true },
      { text: "Yüksek Askerî Şûranın kadrosuzluk nedeniyle emekliye ayırma işlemi", ok: false },
      { text: "Yüksek Hakem Kurulu kararları", ok: false },
      { text: "Kamu Görevlileri Hakem Kurulu kararları", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi hukuk devletinin zorunlu bir unsuru değildir?</b></p>",
    diff: 2,
    expl: "Hukuk devleti; idarenin eylemlerinin yargı denetimine tabi olduğu, temel hakların korunduğu, kanuni hâkim güvencesinin olduğu devlettir. Ancak 'Cumhuriyet', bir yönetim biçimidir; hukuk devleti kavramının zorunlu unsuru değildir. Hukuk devleti meşruti bir monarşiyle de bağdaştırılabilir (Örn: İngiltere).",
    answers: [
      { text: "Yargı bağımsızlığı", ok: false },
      { text: "Yönetim şeklinin Cumhuriyet olması", ok: true },
      { text: "Temel hak ve hürriyetlerin güvence altında olması", ok: false },
      { text: "İdarenin kanuniliği", ok: false },
      { text: "Kanuni hâkim güvencesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, demokratik devlet ilkesinin unsurları arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Yasaların Anayasa'ya uygun olması (ve bunun denetlenmesi) 'hukuk devleti' ilkesine aittir. Diğer seçenekler (seçimler, çok partili hayat, halk iradesi, muhalefet) doğrudan demokratik devlet ilkesinin unsurlarıdır.",
    answers: [
      { text: "Siyasal iktidarın halk iradesiyle belirlenmesi", ok: false },
      { text: "Yasaların Anayasa'ya uygun olması", ok: true },
      { text: "Serbest seçimlerin düzenli aralıklarla yapılması", ok: false },
      { text: "Muhalefetin iktidara gelebilme imkânının olması", ok: false },
      { text: "Genel, eşit ve gizli oyla temsilcilerin seçilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi laik devlet ilkesinin şartlarından biri değildir?</b></p>",
    diff: 3,
    expl: "Laiklik ilkesi, inanç özgürlüğünü güvence altına alır ancak bu özgürlük (özellikle ibadet/ayin hürriyeti) mutlak ve sınırsız değildir. Anayasa'nın 14. ve 24. maddelerinde bu özgürlüğün kamu düzeni, genel ahlak gibi sebeplerle sınırlanabileceği açıkça belirtilmiştir.",
    answers: [
      { text: "Dinî ayin ve ibadet hürriyetinin sınırsız olması", ok: true },
      { text: "Hukuk kurallarının din kurallarına dayandırılmaması", ok: false },
      { text: "Devletin her kesime eşit mesafede olması", ok: false },
      { text: "Devletin resmî bir dininin olmaması", ok: false },
      { text: "Din ve devlet işlerinin birbirinden ayrılması", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi devletin temel amaç ve görevleri arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Anayasa Madde 5'e göre Devletin temel amaç ve görevleri; Türk milletinin bağımsızlığını ve bütünlüğünü, ülkenin bölünmezliğini, Cumhuriyeti ve demokrasiyi korumak, kişilerin refahını sağlamaktır. Yasama faaliyetlerini denetlemek ise devletin genel amacı değil, Anayasa Mahkemesinin görevidir.",
    answers: [
      { text: "Ülkenin bölünmezliğini korumak", ok: false },
      { text: "Kişilerin ve toplumun huzur ve mutluluğunu korumak", ok: false },
      { text: "Cumhuriyeti korumak", ok: false },
      { text: "Demokrasiyi korumak", ok: false },
      { text: "Yasama faaliyetlerini denetlemek", ok: true }
    ]
  },
  {
    text: "<p><ul><li>I. Yasama</li><li>II. Yürütme</li><li>III. Yargı</li></ul></p><p><b>1982 Anayasası'na göre, yukarıdakilerden hangileri Türk milleti adına kullanılan yetkiler arasında sayılmıştır?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre; Yasama yetkisi Türk Milleti adına TBMM'nindir (m.7) ve Yargı yetkisi Türk Milleti adına bağımsız mahkemelerce kullanılır (m.9). Ancak Yürütme yetkisi Cumhurbaşkanı tarafından kullanılır; yürütme için 'Türk milleti adına' ibaresi geçmez.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>II. Cumhuriyetin nitelikleri</b><br/><i>Madde 2 – Türkiye Cumhuriyeti, toplumun huzuru, millî dayanışma ve adalet anlayışı içinde, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, başlangıçta belirtilen temel ilkelere dayanan, demokratik, laik ve sosyal bir hukuk devletidir.</i></p><p><b>1982 Anayasası'na göre, yukarıda verilen metin ile ilgili;</b></p><ul><li>I. Değiştirilmez ve değiştirilmesi dahi teklif edilemez.</li><li>II. Madde kenar başlığı Anayasa metnine dâhildir.</li><li>III. Anayasa'nın başlangıç metninde düzenlenmiştir.</li></ul><p><b>verilen ifadelerden hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "Madde 2, Anayasa'nın değiştirilemez (ilk 3) maddelerindendir (I). Madde kenar başlıkları Anayasa metnine dâhil değildir (II). İlk 11 madde başlangıç metninde değil, 'Genel Esaslar' bölümünde düzenlenmiştir (III). Dolayısıyla sadece I. öncül doğrudur.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda yer alan Atatürk milliyetçiliğini yansıtan ifadeler arasında;</b></p><ul><li>I. Resmî dil Türkçedir.</li><li>II. Türkiye Devleti ülkesi ve milletiyle bölünemez bir bütündür.</li><li>III. Türk Devleti'ne vatandaşlık bağı ile bağlı olan herkes Türk'tür.</li></ul><p><b>verilenlerden hangileri yer alır?</b></p>",
    diff: 2,
    expl: "Dilin Türkçe olması ve bölünmez bütünlük (m.3) ile vatandaşlık tanımı (m.66), Atatürk milliyetçiliğinin 'ırkçı/etnik değil, vatandaşlığa dayalı ve birleştirici' özelliğini yansıtan anayasal ifadelerdir. Üçü de yer alır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın 73. maddesinde yer alan \"mali güce göre vergilendirme\" ilkesi aşağıdakilerden hangisini gerçekleştirmeye yönelik bir düzenlemedir?</b></p>",
    diff: 2,
    expl: "Anayasa'nın 73. maddesindeki 'Herkes, mali gücüne göre vergi ödemekle yükümlüdür' ifadesi, gelir dağılımında adalet, fırsat eşitliği ve ekonomik denge sağlama amaçlıdır. Bu durum doğrudan 'sosyal devlet' ilkesinin bir gereğidir.",
    answers: [
      { text: "Sosyal devlet", ok: true },
      { text: "Laik devlet", ok: false },
      { text: "Hukuk devleti", ok: false },
      { text: "Cumhuriyetçilik", ok: false },
      { text: "Demokratik devlet", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın başlangıç kısmında geçen şu ifade:</b><br/><br/><i>\"---- ilkesi, devlet organları arasında bir üstünlük sıralaması anlamına gelmez. Belli Devlet yetki ve görevlerinin kullanılmasından ibaret olup, bununla sınırlı medeni bir iş bölümü ve iş birliği olduğunu anlatır.\"</i></p><p><b>aşağıdaki anayasal ilkelerden hangisini tanımlamaktadır?</b></p>",
    diff: 2,
    expl: "Kuvvetler ayrılığı; devletin üç temel erkini (yasama, yürütme, yargı) ayrı organlara vermeyi amaçlayan bir ilkedir. Ancak anayasanın başlangıç metninde de belirtildiği üzere bu ayrılık bir çatışma ya da hiyerarşi değil, medeni bir iş bölümü ve iş birliği anlamına gelir.",
    answers: [
      { text: "Kuvvetler ayrılığı", ok: true },
      { text: "Laik devlet", ok: false },
      { text: "Atatürk milliyetçiliği", ok: false },
      { text: "Sosyal devlet", ok: false },
      { text: "İdarenin kanuniliği", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda yürürlüğe girdiği tarihten günümüze;</b></p><ul><li>I. milletvekili seçilme yeterliliği,</li><li>II. Cumhuriyet'in nitelikleri,</li><li>III. Anayasa Mahkemesinin yapısı,</li><li>IV. Cumhurbaşkanı'nın görevleri</li></ul><p><b>verilenlerden hangilerinde değişiklik yapılmamıştır?</b></p>",
    diff: 3,
    expl: "Cumhuriyetin nitelikleri (Madde 2) ilk günden bu yana değiştirilemez maddeler arasında korunmaktadır. Ancak milletvekili seçilme yaşı önce 25'e sonra 18'e düşürülmüş (I), Anayasa Mahkemesi yapısı 2010'da değişmiş (III) ve Cumhurbaşkanının görevleri 2017 referandumuyla tamamen yeniden düzenlenmiştir (IV).",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "I ve IV", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi Anayasa'nın üstünlüğünü gösterir?</b></p>",
    diff: 2,
    expl: "Anayasa'nın üstünlüğü ilkesi, normlar hiyerarşisinde anayasanın en tepede olmasını, hiçbir yasa veya işlemin anayasaya aykırı olamamasını ifade eder. Anayasa m.11'de bu durum 'Kanunlar Anayasaya aykırı olamaz' cümlesiyle açıkça belirtilmiştir.",
    answers: [
      { text: "Devletin şeklinin Cumhuriyet olması", ok: false },
      { text: "Herkesin kanun önünde eşit olması", ok: false },
      { text: "Kanunların Anayasa'ya aykırı olmaması", ok: true },
      { text: "Hiçbir zümreye imtiyaz tanınmaması", ok: false },
      { text: "Yargı yetkisinin bağımsız mahkemelerce kullanılması", ok: false }
    ]
  }
];