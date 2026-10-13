import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFTA YER DEĞIŞTIRILMESI GEREKEN CÜMLE - TEST 1
// ============================================================================
export const PARAGRAFTA_YER_DEGISTIRMESI_GEREKEN_CUMLE_TEST_1: McQ[] = [
  {
    text: "<p>(I) İncinin istiridye içerisinde oluşması aslında istiridyenin bir çeşit kendini koruma mekanizmasının sonucudur. (II) Kabuklarının arasından içine giren bir kum tanesi ya da herhangi bir parçacık istiridye tarafından yabancı madde olarak algılanır. (III) Zaman geçtikçe daha çok sedef ile kaplanan bu yabancı madde en sonunda parlak ve sert bir taşa dönüşür. (IV) İstiridye kendini korumak için bu yabancı maddeyi “incinin annesi” adı verilen sert, katı, güçlü ve parlak yapıdaki sedef mineraliyle sarmaya başlar. (V) İşte bu taşa “inci” adı verilir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 2,
    expl: "II. cümlede yabancı maddenin içeri girmesinden bahsedildikten sonra IV. cümlede bu maddenin nasıl sarmalanmaya başlandığı anlatılmalıdır. III. cümle ise bu sarmalanma sürecinin sonucunu (taşa dönüşmeyi) anlatır. Bu nedenle III ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "II ve V", ok: false },
      { text: "III ve IV", ok: true }, { text: "III ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Sosyal medyada her şeyden önce yeni bir iletişim dili ve kimlik inşa edilmektedir. II. Teknolojik ilerlemeye bağımlılığı nedeniyle takibi neredeyse imkânsız olan bu yeni dil, bireylerin hem üretim hem de tüketim kaynağı hâline gelmesiyle çoğulcu ama denetlenemez, öngörülemez bir mecrada vücut bulmuştur. III. Sosyal medyaya hiçbir kısıtlama, şart olmadan herkes girebilmekte, türettikleri bu anlamsız sözcüklere paylaşımlarında yer vermektedir ve bu paylaşımlar da hiçbir şekilde denetimden geçmediği için hem etik ihlalleri doğurmakta hem de dilin yozlaşmasına neden olmaktadır. IV. Çünkü dili kullanan bireylerdir ve sosyal medyada kullanılan anlamsız kısaltmalar, yabancı terimler, bu kullanıcılar tarafından türetilmektedir. V. Kullanıcı türevli özelliği ve her kesimden kullanıcının sosyal medya ortamında bulunması nedeniyle dilin kullanımı konusunda sıkıntılar yaşanmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "II. cümledeki “çoğulcu ama denetlenemez, öngörülemez bir mecra” ifadesi, V. cümledeki “her kesimden kullanıcının sosyal medya ortamında bulunması” ile devam etmeli; V. cümledeki “sıkıntılar”ın nedeni IV. cümlede “çünkü” ile açıklanmalı; IV. cümlede geçen “türetilen anlamsız sözcükler” de III. cümlede “türettikleri bu anlamsız sözcükler” diye sürdürülmelidir. Bu nedenle III ve V yer değiştirmelidir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "III ve IV", ok: false },
      { text: "III ve V", ok: true }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Eylemci bir tasarımcı, tüm canlıların yaşamını etkileyen ya da tehdit eden sosyal, politik ve çevresel faktörleri kendi algı süzgecinden geçirerek kendi söylemlerini oluşturur. II. Başka deyişle sosyal sorumluluk tasarımı, tasarımcının çevresine duyduğu hassasiyet ile onu iyi bir amaç doğrultusunda değiştirme, başkalarına fark ettirme isteğiyle oluşan eylem olarak tanımlanabilir. III. Sosyal sorumluluk tasarımı, hayatın içinde farkındalık ile başlar. IV. Çünkü sosyal sorumluluk tasarımının tek gayesi, toplumun eski alışkanlıklarını azaltmak ya da değiştirmek ve yenilerini kazandırmaktır. V. Bu yaklaşımda tasarım çalışmaları üreterek toplumsal farkındalık yaratmayı ve değişimi getirmeyi amaçlayan birçok bağımsız grafik tasarımcı ve tasarım ofisleri bulunmaktadır.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturması için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "Parça genel bir yargı olan III. cümle ile başlamalıdır. I numaralı cümle ise eylemci tasarımcıyı tanımlar. Giriş cümlesinin yanlış yerde olması nedeniyle I ve III yer değiştirmelidir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Görünüşte münakaşa Asya’nın en hoşa gitmeyecek, en verimsiz toprağı üzerinde oluyordu ve buranın tabii zenginliklerinden de mucizeler beklenemezdi. II. İç Asya’ya sahip olmak için başlayan mücadeleyi ve boğazlaşmaya kadar varan ve şüphesiz bugün bile bitmiş gözüyle bakılamayacak olan savaşın manasını, işin iç yüzünü bilmeyenler pek de kavrayamazlar. III. Büyük kısmı kumsal ve tuzlu çölden, su bakımından fakir bozkırlardan ibaret olan İç Asya’nın nüfus sıklığı da göze çarpacak derecede düşüktür. IV. Doğu bölgesinde kilometre kare başına bir kişi bile düşmediği gibi, daha kalabalık olan batı parçasında da 20’yi geçmez. V. Yalnız Sirderya ve Amuderya bölgelerinde kolayca anlaşılır sebeplerden dolayı, yerleşmiş nüfus daha sıktır.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturması için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "I. cümlede geçen 'en verimsiz toprağı' ifadesi, III. cümledeki kumsal ve çöl tasviriyle doğrudan bağlantılıdır. II. cümle ise genel bir giriştir. I ve II yer değiştirmelidir.",
    answers: [
      { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Küresel ısınma, karbondioksit gibi ısıyı tutan gazların atmosferde artmasıyla oluşan ve atmosfere salınan sera gazlarının neden olduğu düşünülen sera etkisinin sonucunda da Dünya üzerinde yıl boyunca kara, deniz ve havada ölçülen ortalama sıcaklıklarda görülen artışa verilen isimdir. (II) Bu iklim değişiklikleri kuraklık, çölleşme, yağışlardaki dengesizlik ve su baskınları gibi belirtilerle kendini gösterir. (III) Küresel iklim değişikliği insani fosil yakıtların tüketimi, endüstriyel ve tarımsal faaliyetlerin sonucu olarak atmosferdeki miktarı ve yoğunluğu artan sera gazlarının neden olduğu küresel ısınmanın neden olduğu iklim değişiklikleridir. (IV) Paris Antlaşması'na göre Dünya'nın ortalama ısısı en fazla 2 °C olmalıdır. (V) Bu hedefe ulaşma yollarından en önemlileri arasında fosil yakıt kullanımının bırakılması ve az et tüketilmesi sayılabilir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 2,
    expl: "I. cümlede ısınmanın tanımı yapıldıktan sonra III. cümlede bu değişikliğin nedenleri (fosil yakıtlar vb.) anlatılmalı, ardından II. cümlede bu nedenlerin doğurduğu 'belirtiler' (kuraklık vb.) sıralanmalıdır. Bu nedenle II ve III yer değiştirmelidir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false }, { text: "III ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Yaşam serüveninde birçok şey öğrenen ve bilgilerine bilgi katan insan, yaşamını en iyi şekilde nasıl idame eder buna bakmaktadır. II. Eğitim beraberinde refah seviyesini, insanların çatışmadan bir arada yaşamasını, erdemli toplumu ve huzuru getirmektedir. III. Bu bağlamda eğitim, toplum için vazgeçilmez bir unsur olup bu da öğrenmeyle gerçekleşmektedir. IV. Bir toplumu maddi manevi olarak ileri taşıyacak olan eğitim, ideal toplum için çok önemli bir süreçtir ki bu süreç toplumu her anlamda yükseltmektedir. V. Çünkü insanın eğitim süreci doğduğu andan itibaren başlamaktadır ve bireyleri mutlu edecek, onların refah içinde yaşamasını sağlayabilecek olan tek şey eğitimdir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "Giriş cümlesi yanlış yerdedir. Eğitimi genel olarak tanımlayan IV. cümle parçanın girişi olmalı; III. cümlede geçen “öğrenme” de I. cümledeki “birçok şey öğrenen insan” ile sürdürülmelidir. Bu nedenle I ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ve III", ok: false }, { text: "I ve IV", ok: true }, { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan karakteri büyük ölçüde şekillendiği ilk altı yıl, eğitim açısından son derece önemlidir ve bilim adamları tarafından “hayati dönem” olarak nitelendirilmektedir. II. Çünkü eğitimin temel taşı ailedir ve sağlıklı bir aile eğitimi olmadan çocuklarımızı iyi yetiştirmek, zararlı etkilerden onları korumak hayli zordur. III. Bu kritik dönemde çocuğu tanımak, yeteneklerini keşfederek bilinçli yardımda bulunmak yetişkinler ve ebeveynler olarak görevimizdir. IV. Çocuklarımızın iyi insan, iyi vatandaş olabilmeleri için teknolojinin esiri olmadan ama bilim ve teknolojinin imkânlarından da faydalanarak eğitilmelerine katkı sağlayabiliriz. V. Birçok çeldiricinin bulunduğu günümüzde duygusal rehberlik yaparak çocuklarımızı yetiştirebiliriz.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I. cümlede bahsedilen 'ilk altı yıl' (hayati dönem), III. cümledeki 'bu kritik dönem' ifadesiyle karşılanır. II. cümle ise aile eğitimine dair bir açıklama olup III'ten sonra gelmelidir. II ve III yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: true }, { text: "III ve IV", ok: false },
      { text: "III ve V", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Bireylerin dünyaya gelmesi ile ilk tanıştıkları halk şiiri türü, ninnilerdir. II. Ninni, “çocuğun ağlamasını yatıştırıp onu uyutmak için bakım sorumluluğunu üstlenen kişi” yani çoğunlukla anne tarafından söylenen, içeriğinde yaşanmışlık deneyimleri bulunduran, ezgili, ritmik müzikal yapılardır. III. Bu sebeple ninniler, sadece bebeği uyutmak için icra edilen ritmik ses unsurları olmayıp, aynı zamanda bebeği besleyip büyütürken, korku, stres ve endişeden koruyan, rahatlatan ve anne çocuk arasındaki iletişimi kuran güçlü bir bağdır. IV. Çünkü anne; duygularını, düşüncelerini, hayallerini, sevgisini bebeğine irticalen söyleyerek bu ninniler aracılığıyla aktarır. V. Bir taraftan çocuğun uyumasını, susmasını, sevilmesini veya oynatılmasını sağlayan ninniler diğer taraftan çocuk ile anneleri arasında psikolojik bir bağ kurmalarını sağlar.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "Ninninin tanımından (II) sonra ninnilerin anne ile çocuk arasında psikolojik bağ kurduğunu anlatan V. cümle gelmeli, bunun nedeni IV. cümlede “çünkü” ile açıklanmalı, “Bu sebeple ninniler...” diye başlayan III. cümle de sonuç olarak parçayı bitirmelidir. Bu nedenle III ve V yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: false }, { text: "III ve IV", ok: false },
      { text: "III ve V", ok: true }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Sosyal medya gibi platformların, dünyayla eş zamanlı olarak ülkemiz genelinde büyük bir merak ve ilgiyle takip edildiğini görmekteyiz. II. Hatta buna alarm verici boyutlar demek daha doğru olacaktır çünkü artık sosyal ilişkilerin araçsal bir görünüm kazandığı, her şeyin metalaştırıldığı ve standartlaştığı böyle bir sosyokültürel ortamda yaşadığımızı, kendimize yüksek sesle itiraf etme vakti çoktan gelip çatmıştır. III. Bir anlamda soyut sosyal mecralar olarak da nitelendirebileceğimiz bu alanlarda paylaşılan video, fotoğraf, ses ve mesaj gibi yazılı ve görsellere baktığımızda, bunların hem nicelik hem de nitelik itibarıyla dikkat çekici boyutlara ulaştığını görmekteyiz. IV. Öyle ki belli bir süredir, işlerimizi, ticaretimizi, randevularımızı bu alan marifetiyle görmeye başladık. V. Tabii böyle bir toplumda, artık mektupların yerini telefonların aldığını, onların yerine de bilgisayar ve cep telefonlarının geçtiğini ve sonra bunların internetle birbirine bağlandığını söyleyip geçmek, bir realite olarak bu olgunun arka planındakileri açıklamada ve kavramada yetersiz kalmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I. cümleden sonra III. cümle gelerek sosyal medya mecralarının içeriğini anlatmalı, ardından II. cümledeki 'alarm verici boyutlar' ifadesi bu içeriğin yoğunluğunu nitelemelidir. II ve III yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: true }, { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Sosyal medyada enformasyonun işlenmesi anlamında, hem haberin hem de bilgi veren unsurların doğruluğunun kontrolü gerekmektedir. II. Bir başka ifadeyle, içeriğin üretiminde hem kamuya sunulabilir hem de reklam içeriğinden ya da tanıtıcı içerikten ayırt edilebilir bir içerik elde etmek için düzenleyiciler tarafından yapılacak kontrole ihtiyaç duyulmaktadır. III. Kullanıcılar, duyduğu bir haberi doğruluğunu kontrol etmeden, araştırmadan paylaşmaktadır. IV. Ancak sosyal medyanın kullanıcı türevli olması nedeniyle bu tür kontrollerin yapılması zordur. V. Böylelikle de bilgi kirliliği ortaya çıkmakta ve etik sorunlarla karşılaşılmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "II. cümlede sözü edilen kontrol ihtiyacının ardından “Ancak... bu tür kontrollerin yapılması zordur.” diyen IV. cümle gelmeli; IV. cümlede geçen “kullanıcı türevli” ifadesi de “Kullanıcılar...” diye başlayan III. cümleyle sürdürülmelidir. Bu nedenle III ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: false }, { text: "III ve IV", ok: true },
      { text: "III ve V", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Özel gereksinimli bireylerin geçmişten günümüze, farklı şekillerde toplumdan uzaklaştırma ve izole edilme gibi durumlarla karşı karşıya kaldığı bilinmektedir. II. Ancak bunlarla birlikte toplumdaki bireylerin özel gereksinimli bireylere yönelik olumlu tutumlara sahip olması da kritik bir öneme sahiptir. III. Günümüzde uluslararası ve ulusal politikalar doğrultusunda hazırlanan kanun, yasa ve yönetmelikler özel gereksinimli bireylerin her alanda toplumla bütünleştirilmesini desteklemekte ve özel gereksinimli bireylere yönelik ayrımcılığa karşı çıkmaktadır. IV. Geleneksel bakış açısıyla yetersizliği olan birey ve ailelerinin trajik bir sorunu olarak algılanan özel gereksinimlilik olgusu, günümüzde toplumsal dünyaya yönelmiş; tutum, damgalama ve ayrımcılık gibi toplumsal durumları odağa almıştır. V. Ne yazık ki toplumun özel gereksinimli bireylere karşı tutumu genellikle, kalıp yargı, cehalet, acıma, dışlama ve merak hisleriyle özdeşleşmektedir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I. cümledeki toplumdan uzaklaştırma ve izole edilme, IV. cümledeki geleneksel bakış açısıyla devam etmeli; IV. cümlenin “günümüzde” vurgusu III. cümleyle sürmeli, ardından “Ancak bunlarla birlikte...” diye başlayan II. cümle ve V. cümle gelmelidir. Bu nedenle II ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: false }, { text: "II ve IV", ok: true },
      { text: "III ve V", ok: false }, { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Çağdaş Türk edebiyatının özgün isimlerinden Bilge Karasu’nun, yazınının “sorunlar alanı”nda kendisine yer edinen en belirgin meselelerinden birisi de hayvan sorusudur. II. Bilge Karasu’nun yazı evreninde insan, dünyada “kendi başına” bir varlık değil, ancak hayvanlarla ve bitkilerle; doğanın tüm unsurlarıyla yani “dirim ortakları”yla tamamlanan bir bütündür. III. Her yazınında da insanın ve hayvanın bir aradalığını, eşitlik düzleminde sağlamanın yollarını arar. IV. Karasu, doğaya ve onun bir parçası olarak yaşam ortağımız olan hayvanlara bakışını, insan merkezli olmayacak şekilde her türlü şiddet ve zorbalık ilişkisinden arındırarak kurmak ister ve bunu sağlamanın yollarını tartışır. V. Bu nedenle de hayvanlarımız konuğumuz değil, yaşam ortağımızdır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "III. cümledeki “eşitlik düzlemi” vurgusu, “Bu nedenle de hayvanlarımız konuğumuz değil, yaşam ortağımızdır.” diyen V. cümleyle devam etmeli; V. cümledeki “yaşam ortağımız” ifadesi de IV. cümlede “yaşam ortağımız olan hayvanlara” diye sürdürülmelidir. Bu nedenle IV ve V yer değiştirmelidir.",
    answers: [
      { text: "I ve IV", ok: false }, { text: "II ve III", ok: false }, { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false }, { text: "IV ve V", ok: true }
    ]
  }
];
