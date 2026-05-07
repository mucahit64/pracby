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
    text: "<p>I. Sosyal medyada her şeyden önce yeni bir iletişim dili ve kimlik inşa edilmektedir. II. Teknolojik ilerlemeye bağımlılığı nedeniyle takibi neredeyse imkânsız olan bu yeni dil... III. Sosyal medyaya hiçbir kısıtlama, şart olmadan herkes girebilmekte... IV. Çünkü dili kullanan bireylerdir ve sosyal medyada kullanılan anlamsız kısaltmalar... V. Kullanıcı türevli özelliği ve her kesimden kullanıcının sosyal medya ortamında bulunması nedeniyle dilin kullanımı konusunda sıkıntılar yaşanmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "II. cümlede 'bu yeni dil'den bahsedildikten sonra, IV. cümlede bu dilin neden denetlenemediği ve bozulduğu (çünkü dili kullanan bireylerdir) açıklanmalıdır. III ve IV yer değiştirerek anlam akışı sağlanır.",
    answers: [
      { text: "A) I ve II", ok: false }, { text: "B) II ve III", ok: false }, { text: "C) III ve IV", ok: true },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Eylemci bir tasarımcı, tüm canlıların yaşamını etkileyen ya da tehdit eden sosyal, politik ve çevresel faktörleri kendi algı süzgecinden geçirerek kendi söylemlerini oluşturur. II. Başka deyişle sosyal sorumluluk tasarımı, tasarımcının çevresine duyduğu hassasiyet ile... III. Sosyal sorumluluk tasarımı, hayatın içinde farkındalık ile başlar. IV. Çünkü sosyal sorumluluk tasarımının tek gayesi, toplumun eski alışkanlıklarını azaltmak... V. Bu yaklaşımda tasarım çalışmaları üreterek toplumsal farkındalık yaratmayı... hedefleyen birçok bağımsız grafik tasarımcı ve tasarım ofisleri bulunmaktadır.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturması için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "Parça genel bir yargı olan III. cümle ile başlamalıdır. I numaralı cümle ise eylemci tasarımcıyı tanımlar. Giriş cümlesinin yanlış yerde olması nedeniyle I ve III yer değiştirmelidir.",
    answers: [
      { text: "A) I ve II", ok: false }, { text: "B) I ve III", ok: true }, { text: "C) II ve III", ok: false },
      { text: "D) III ve IV", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Görünüşte münakaşa Asya’nın en hoşa gitmeyecek, en verimsiz toprağı üzerinde oluyordu... II. İç Asya’ya sahip olmak için başlayan mücadeleyi ve boğazlaşmaya kadar varan... III. Büyük kısmı kumsal ve tuzlu çölden, su bakımından fakir bozkırlardan ibaret olan İç Asya’nın nüfus sıklığı... IV. Doğu bölgesinde kilometre kare başına bir kişi bile düşmediği gibi... V. Yalnız Sirderya ve Amuderya bölgelerinde kolayca anlaşılır sebeplerden dolayı, yerleşmiş nüfus daha sıktır.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturması için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "I. cümlede geçen 'en verimsiz toprağı' ifadesi, III. cümledeki kumsal ve çöl tasviriyle doğrudan bağlantılıdır. II. cümle ise genel bir giriştir. I ve II yer değiştirmelidir.",
    answers: [
      { text: "A) I ve II", ok: true }, { text: "B) I ve III", ok: false }, { text: "C) II ve III", ok: false },
      { text: "D) III ve IV", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Küresel ısınma, karbondioksit gibi ısıyı tutan gazların atmosferde artmasıyla oluşan... (II) Bu iklim değişiklikleri kuraklık, çölleşme, yağışlardaki dengesizlik ve su baskınları gibi belirtilerle kendini gösterir. (III) Küresel iklim değişikliği insani fosil yakıtların tüketimi, endüstriyel ve tarımsal faaliyetlerin sonucu olarak... (IV) Paris Antlaşması'na göre Dünya'nın ortalama ısısı en fazla 2 °C olmalıdır. (V) Bu hedefe ulaşma yollarından en önemlileri arasında fosil yakıt kullanımının bırakılması ve az et tüketilmesi sayılabilir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 2,
    expl: "I. cümlede ısınmanın tanımı yapıldıktan sonra III. cümlede bu değişikliğin nedenleri (fosil yakıtlar vb.) anlatılmalı, ardından II. cümlede bu nedenlerin doğurduğu 'belirtiler' (kuraklık vb.) sıralanmalıdır. Bu nedenle II ve III yer değiştirmelidir.",
    answers: [
      { text: "A) I ve II", ok: false }, { text: "B) II ve III", ok: true }, { text: "C) II ve V", ok: false },
      { text: "D) III ve IV", ok: false }, { text: "E) III ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Bir toplumu maddi manevi olarak ileri taşıyacak olan eğitim, ideal toplum için çok önemli bir süreçtir... II. Eğitim beraberinde refah seviyesini, insanların çatışmadan bir arada yaşamasını... getirir. III. Bu bağlamda eğitim, toplum için vazgeçilmez bir unsur olup bu da öğrenmeyle gerçekleşmektedir. IV. Yaşam serüveninde birçok şey öğrenen ve bilgilerine bilgi katan insan, yaşamını en iyi şekilde nasıl idame eder buna bakmaktadır. V. Çünkü insanın eğitim süreci doğduğu andan itibaren başlamaktadır...</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "III. cümledeki 'bu bağlamda' ifadesi kendinden önceki süreci özetler. Ancak IV. cümle bireysel öğrenmeye geçerken, I. cümle ideal toplumsal süreçten bahseder. Akışa göre I ve IV yer değiştirmelidir.",
    answers: [
      { text: "A) I ve III", ok: false }, { text: "B) I ve IV", ok: true }, { text: "C) II ve IV", ok: false },
      { text: "D) III ve IV", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan karakteri büyük ölçüde şekillendiği ilk altı yıl, eğitim açısından son derece önemlidir... II. Çünkü eğitimin temel taşı ailedir ve sağlıklı bir aile eğitimi olmadan çocukları iyi yetiştirmek... zordur. III. Bu kritik dönemde çocuğu tanımak, yeteneklerini keşfederek bilinçli yardımda bulunmak yetişkinler ve ebeveynler olarak görevimizdir. IV. Çocuklarımızın iyi insan, iyi vatandaş olabilmeleri için teknolojinin esiri olmadan... V. Birçok çeldiricinin bulunduğu günümüzde duygusal rehberlik yaparak çocuklarımızı yetiştirebiliriz.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I. cümlede bahsedilen 'ilk altı yıl' (hayati dönem), III. cümledeki 'bu kritik dönem' ifadesiyle karşılanır. II. cümle ise aile eğitimine dair bir açıklama olup III'ten sonra gelmelidir. II ve III yer değiştirmelidir.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: true }, { text: "C) III ve IV", ok: false },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Bireylerin dünyaya gelmesi ile ilk tanıştıkları halk şiiri türü, ninnilerdir. II. Ninni, “çocuğun ağlamasını yatıştırıp onu uyutmak için bakım sorumluluğunu üstlenen kişi” yani çoğunlukla anne tarafından söylenen... III. Bu sebeple ninniler, sadece bebeği uyutmak için icra edilen ritmik ses unsurları olmayıp... IV. Çünkü anne; duygularını, düşüncelerini, hayallerini... bu ninniler aracılığıyla aktarır. V. Bir taraftan çocuğun uyumasını, susmasını... sağlayan ninniler diğer taraftan çocuk ile anneleri arasında psikolojik bir bağ kurmalarını sağlar.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "IV. cümle ninnilerin anne duygularını aktarma işlevini anlatırken, V. cümle anne-çocuk bağını kurar. III. cümle ise tüm bunları özetleyen 'bu sebeple' sonuç cümlesidir. III ve IV yer değiştirerek akış düzelir.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: false }, { text: "C) III ve IV", ok: true },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Sosyal medya gibi platformların, dünyayla eş zamanlı olarak ülkemiz genelinde büyük bir merak ve ilgiyle takip edildiğini görmekteyiz. II. Hatta buna alarm verici boyutlar demek daha doğru olacaktır çünkü artık sosyal ilişkilerin araçsal bir görünüm kazandığı... III. Bir anlamda soyut sosyal mecralar olarak da nitelendirebileceğimiz bu alanlarda paylaşılan video, fotoğraf... IV. Öyle ki belli bir süredir, işlerimizi, ticaretimizi, randevularımızı bu alan marifetiyle görmeye başladık. V. Tabii böyle bir toplumda, artık mektupların yerini telefonların aldığını... söyleyip geçmek... yetersiz kalmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I. cümleden sonra III. cümle gelerek sosyal medya mecralarının içeriğini anlatmalı, ardından II. cümledeki 'alarm verici boyutlar' ifadesi bu içeriğin yoğunluğunu nitelemelidir. II ve III yer değiştirmelidir.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: true }, { text: "C) II ve IV", ok: false },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Sosyal medyada enformasyonun işlenmesi anlamında, hem haberin hem de bilgi veren unsurların doğruluğunun kontrolü gerekmektedir. II. Bir başka ifadeyle, içeriğin üretiminde hem kamuya sunulabilir hem de reklam içeriğinden... bir içerik elde etmek için düzenleyiciler tarafından yapılacak kontrole ihtiyaç duyulmaktadır. III. Ancak sosyal medyanın kullanıcı türevli olması nedeniyle bu tür kontrollerin yapılması zordur. IV. Kullanıcılar, duyduğu bir haberi doğruluğunu kontrol etmeden, araştırmadan paylaşmaktadır. V. Böylelikle de bilgi kirliliği ortaya çıkmakta ve etik sorunlarla karşılaşılmaktadır.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "I ve II kontrol ihtiyacını anlatır. III. cümle bu kontrolün 'zorluğunu' söyler. IV. cümle ise bu zorluğun bir yansıması olarak kullanıcıların davranışını anlatır. Akışta bir bozulma yoktur; ancak III ve IV yer değiştirirse kontrol-sorun ilişkisi daha net kurulur.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: false }, { text: "C) III ve IV", ok: true },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Özel gereksinimli bireylerin geçmişten günümüze, farklı şekillerde toplumdan uzaklaştırma ve izole edilme gibi durumlarla karşı karşıya kaldığı bilinmektedir. II. Geleneksel bakış açısıyla yetersizliği olan birey ve ailelerinin trajik bir sorunu olarak algılanan özel gereksinimlilik olgusu... III. Günümüzde uluslararası ve ulusal politikalar doğrultusunda hazırlanan kanun, yasa ve yönetmelikler... ayrımcılığa karşı çıkmaktadır. IV. Ancak bunlarla birlikte toplumdaki bireylerin özel gereksinimli bireylere yönelik olumlu tutumlara sahip olması da kritik bir öneme sahiptir. V. Ne yazık ki toplumun özel gereksinimli bireylere karşı tutumu genellikle, kalıp yargı... ile özdeşleşmektedir.</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "II. cümlede geleneksel trajik bakış anlatıldıktan sonra, V. cümledeki 'ne yazık ki tutumlar hala olumsuz' tespiti gelmelidir. Ardından III ve IV numaralı cümleler çözüm ve ideal durumu anlatır. II ve V yer değiştirirse 'olumsuz-olumsuz' ve 'olumlu-olumlu' silsilesi kurulur.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: false }, { text: "C) II ve V", ok: true },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Çağdaş Türk edebiyatının özgün isimlerinden Bilge Karasu’nun, yazınının “sorunlar alanı”nda kendisine yer edinen en belirgin meselelerinden birisi de hayvan sorusudur. II. Bilge Karasu’nun yazı evreninde insan, dünyada “kendi başına” bir varlık değil... III. Her yazınında da insanın ve hayvanın bir aradalığını, eşitlik düzleminde sağlamanın yollarını arar. IV. Bu nedenle de hayvanlarımız konuğumuz değil, yaşam ortağımızdır. V. Karasu, doğaya ve onun bir parçası olarak yaşam ortağımız olan hayvanlara bakışını... zorbalık ilişkisinden arındırarak kurmak ister...</p><p><b>Bu parçanın anlam bütünlüğünün sağlanması için numaralanmış cümlelerden hangileri birbiriyle yer değiştirmelidir?</b></p>",
    diff: 3,
    expl: "IV. cümledeki 'bu nedenle' ifadesi kendisinden önceki bütünleyici bir yargıyı (V. cümledeki bakış açısını) gerektirir. IV ve V yer değiştirirse 'yaşam ortağımızdır' vurgusu metni anlamlı şekilde kapatır.",
    answers: [
      { text: "A) I ve IV", ok: false }, { text: "B) II ve III", ok: false }, { text: "C) II ve IV", ok: false },
      { text: "D) III ve V", ok: false }, { text: "E) IV ve V", ok: true }
    ]
  }
];