import { McQ } from "../../../../types";

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 1
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_1: McQ[] = [
  {
    text: "<p>Baltık Denizi'nin Finlandiya ve İsveç arasındaki <u>I. bölgesinde</u> keşfedilen bir cisim gizemini koruyor. \"Ocean X\" adındaki dalış ekibinin 86 metre derinlikte <u>II. bulduğu cisim</u>, <u>III. kendisine</u> 200 metre yaklaşıldığında <u>IV. tüm cihazları</u> kilitliyor. 60 metre <u>V. genişliğe</u> sahip olan bu cismin, bir göktaşı olma olasılığı üzerinde duruluyor.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisi, <u>tek başına</u>, içinde bulunduğu cümlenin ögelerinden biridir?</b></p>",
    diff: 3,
    expl: "IV numaralı 'tüm cihazları' sözü, 'tüm cihazları kilitliyor' cümlesinde 'Neyi kilitliyor?' sorusuna cevap vererek tek başına belirtili nesne görevini üstlenmiştir. Diğer numaralı sözcükler ait oldukları tamlama veya öbek yapılarından ayrılamazlar.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Islak nisan akşamlarında</u> çocukluğuma açılan kapının önünde bulurum kendimi. <u>II. Sisler içerisinde duran yoldan</u>, önce yavaş sonra hızlı adımlarla ilerlerim. Kestane ağaçlarının arasından sessizce akıp <u>III. denize</u> ulaşırım. Ayaklarımı kumlara gömüp yavaşça <u>IV. vadiye</u> yönelirim. <u>V. Aklımı bıraktığım uçurtmaların kuyruğunda</u> gezinirim.</p><p><b>Bu parçada numaralanmış sözlerden hangisi diğerlerinden farklı bir cümle ögesidir?</b></p>",
    diff: 3,
    expl: "I numaralı 'Islak nisan akşamlarında' sözü 'Ne zaman?' sorusuna cevap veren zarf tümlecidir. II 'Sisler içerisinde duran yoldan', III 'denize', IV 'vadiye' ve V 'Aklımı bıraktığım uçurtmaların kuyruğunda' sözleri ise yer tamlayıcısıdır (dolaylı tümleç).",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yüklemi zaman yönünden tamamlayan bir öge <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'yaygın olarak' bir durum zarfıdır, zaman bildirmez. Diğer şıklarda 'başlanmadan önce', 'edilirken', 'tamamlandıktan sonra', 'ilk başlarda' ifadeleri zaman bildiren zarf tümleçleridir.",
    answers: [
      { text: "Tedaviye başlanmadan önce hastanın kilosu sabitlenmelidir.", ok: false },
      { text: "Hasta tedavi edilirken robot destekli sistemler tercih edilebilir.", ok: false },
      { text: "Tedavi tamamlandıktan sonra hastanın durumu bir süre gözlemlenir.", ok: false },
      { text: "Bazı yenilikler ilk başlarda herkes tarafından anlaşılamayabilir.", ok: false },
      { text: "Doğal tedavi yöntemleri ülkemizde yaygın olarak kullanılır.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde altı çizili söz, cümlenin nesnesi görevinde <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'Büyükannesi' sözcüğü 'yürüyordu' eylemini gerçekleştiren kişi olduğu için özne görevindedir. Diğer şıklardaki altı çizili kelimeler belirtili nesne görevindedir.",
    answers: [
      { text: "<u>Bu mısraları</u>, henüz on yaşındayken okumuştum.", ok: false },
      { text: "<u>İlk şiir kitabını</u>, 1923 yılında İstanbul'dan almış.", ok: false },
      { text: "<u>Dün akşamki filmi</u>, daha önce defalarca seyrettik.", ok: false },
      { text: "<u>Büyükannesi</u>, haftada bir kez bu parkta yürüyordu.", ok: true },
      { text: "<u>Saatini düşürdüğünü</u>, her nasılsa anlamamış.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde nesne, sadece isim tamlaması oluşmuştur?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'sokak satıcılarının seslerini' nesnesi bir zincirleme isim tamlamasıdır. A'da sıfat tamlaması, B'de sıfat tamlaması, D'de nesne yoktur (özne tamlamadır), E'de nesne yoktur.",
    answers: [
      { text: "Uzunca bir süre trenin penceresinden ağaçlarla kaplı köyleri seyretti.", ok: false },
      { text: "Büyükbabam, ailenin en küçüğüne en güzel odayı vermişti.", ok: false },
      { text: "Bunca yılın ardından sokak satıcılarının seslerini hâlâ özlüyorum.", ok: true },
      { text: "Geçmiş günlerin özlemi içimde her gün biraz daha büyüyordu.", ok: false },
      { text: "Emekliye ayrılınca evinin bahçesi âdeta sığınağı olmuştu.", ok: false }
    ]
  },
  {
    text: "<p>Daima, bu şehre ilk giren ve onu yeni baştan bir Türk şehri olarak kuran dedelerimizin yaşayışlarındaki halis tarafa hayran oldum.</p><p><b>Bu cümlenin yer tamlayıcısında (dolaylı tümlecinde) aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Cümlenin yer tamlayıcısı 'bu şehre ilk giren ve onu yeni baştan bir Türk şehri olarak kuran dedelerimizin yaşayışlarındaki halis tarafa' kısmıdır. Bu bölümde isim-fiil (yaşayış), sıfat-fiil (giren, kuran), zarf-fiil (olarak) ve bağlaç (ve) vardır; edat bulunmamaktadır.",
    answers: [
      { text: "İsim-fiil", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "Edat", ok: true },
      { text: "Bağlaç", ok: false },
      { text: "Zarf-fiil", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsan, doğumundan itibaren bir geleneğin içinde yer alır. (II) Yağmurdan sonra ormanın nemli zemininden yüzlerce mantar fışkırmış. (III) Arabalar, yağmurdan kayganlaşan yolda güçlükle ilerliyordu. (IV) Konak, büyükçe bir gölün kıyısına inşa edilmiştir. (V) Rengârenk kamyon kasalarından buğday taneleri dökülüyor.</p><p><b>Numaralanmış cümlelerin yer tamlayıcılarıyla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "B seçeneği yanlıştır; II. cümlenin yer tamlayıcısı 'ormanın nemli zemininden' kısmıdır ve burada edat (ilgeç) bulunmamaktadır.",
    answers: [
      { text: "I. cümlenin yer tamlayıcısında belirtili isim tamlaması vardır.", ok: false },
      { text: "II. cümlenin yer tamlayıcısında edat vardır.", ok: true },
      { text: "III. cümlenin yer tamlayıcısında sıfat-fiil vardır.", ok: false },
      { text: "IV. cümlenin yer tamlayıcısında sıfat tamlaması vardır.", ok: false },
      { text: "V. cümlenin yer tamlayıcısında belirtisiz isim tamlaması vardır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Avrupa Arkeologlar Birliği, arkeoloji ve kültürel mirasın korunması alanlarında saygın meslek kuruluşlarının başında gelmektedir. (II) Arkeolojide yeni yaklaşımların geliştirilmesi ve kültürel mirasın korunması gibi alanlarda Kurum, çalışma ortamları hazırlamaktadır. (III) Her yıl başka bir Avrupa ülkesinde düzenlenen kongreler yeni kuramların geliştirilmesi ve sorunlara çözüm aranmasında bir \"açık forum\" niteliği taşımaktadır. (IV) Bu çerçevede, Avrupa Arkeologlar Birliğinin 20. yıl kongresi, eylül ayında İstanbul'da yapılacaktır. (V) İstanbul Teknik Üniversitesi, bu kongre için Taşkışla'daki tarihî binasını tahsis etmiştir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde özne, bir kelime grubundan <u>oluşmamıştır</u>?</b></p>",
    diff: 3,
    expl: "II. cümlenin öznesi tek bir sözcük olan 'Kurum'dur. Diğer cümlelerin özneleri kelime grubudur: I 'Avrupa Arkeologlar Birliği', III 'Her yıl başka bir Avrupa ülkesinde düzenlenen kongreler', IV 'Avrupa Arkeologlar Birliğinin 20. yıl kongresi', V 'İstanbul Teknik Üniversitesi'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinin öznesi, sıfat tamlamasından oluşmaktadır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'Çocukluğundan kalma anılarında' yer tamlayıcısı, 'hayal meyal hazırladığı bir bahçe' ise öznedir. Bu özne bir sıfat tamlamasıdır.",
    answers: [
      { text: "Kitaplardan öğrenilenlerle kendine bir dünya kurmak, onun içinde yaşayabilmek demektir.", ok: false },
      { text: "Babamın verdiği parayla köşe başındaki butikten yeni bir takım satın aldım.", ok: false },
      { text: "İnsana bir alışkanlık edindirmeye çalışmak, zannedildiği kadar kolay bir iş değildir.", ok: false },
      { text: "Çocukluğundan kalma anılarında hayal meyal hazırladığı bir bahçe vardı.", ok: true },
      { text: "Dolu yüzünden vişne ağaçlarının çiçekleri döküldüğü için dallarda meyve yoktu.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinin öznesi, sıfat tamlamasından oluşmuştur?</b></p>",
    diff: 3,
    expl: "A seçeneğinde 'Bireyin benliğini bütünüyle saran duygular' kısmındaki '-an' sıfat-fiil ekiyle kurulmuş olan grup bir sıfat tamlamasıdır ve cümlenin öznesidir.",
    answers: [
      { text: "Bireyin benliğini bütünüyle saran duygular, hayatın her alanında bireyin düşüncelerine yön verecek en temel etkendir.", ok: true },
      { text: "“Duygular mı düşüncelere, düşünceler mi duygulara yön verir?” sorusunu, insan zihni kolaylıkla yanıtlayamaz.", ok: false },
      { text: "İçinde yaşadığı toplumun düşünce dünyasını sorgularken insanlar her zaman zorlanmıştır.", ok: false },
      { text: "Buzulların hızla erimesi, okyanus sularının yükselmesi ve kıyıların sular altında kalmasını beraberinde getirecektir.", ok: false },
      { text: "Yazma eylemi; boş vakit geçirme etkinliği değil, aksine insanın bir duygu ve düşünce âlemine bağlanma isteğidir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Gıdaların paketlenme ve saklanma koşulları özellikle yaz aylarında dikkat edilmesi gereken bir husustur. (II) Tükettiğimiz paketli gıdalarda oluşan bazı bakteriler, çeşitli hastalıklara sebep olmaktadır. (III) Konunun önemi üzerine bilim insanları, bu sorunun çözümüne katkı sağlayabilmek amacıyla bir sensör geliştirdi. (IV) Bakteri tespit etme sensörü, insanlarda birçok hastalığın oluşmasına neden olan Eschericha coli bakterisini belirlediğinde ışık yayıyor. (V) Gıda ambalajlarının içine yerleştirilen sensör sayesinde tüketiciler, gıda ürünlerine temas etmeden bakterilerin varlığından haberdar olabilecekler.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinin öznesi sıfat tamlamasından oluşmaktadır?</b></p>",
    diff: 3,
    expl: "II. cümlede 'Tükettiğimiz paketli gıdalarda oluşan bazı bakteriler' öznesi bir sıfat tamlamasıdır. Diğer cümlelerde özneler isim tamlaması veya isim-fiil grubudur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinin öznesi, sıfat tamlamasından oluşmuştur?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'Eserin her ayrıntısını özümseyerek derinliklerine inen dikkatli bir okur' bir sıfat tamlamasıdır ve cümlenin öznesidir.",
    answers: [
      { text: "Eserleri kapsamlı bir biçimde ele alınıp incelendiğinde satırlar arasında bir anlam denizinin saklı olduğu fark edilir.", ok: false },
      { text: "Eserlerinin ötesine geçip kendini her kuşaktan okura kabul ettiren kimsedir halkın sanatçısı.", ok: false },
      { text: "Eserin her ayrıntısını özümseyerek derinliklerine inen dikkatli bir okur, farklı tatlara ve tarifsiz hislere rast gelir.", ok: true },
      { text: "Romanın yazarı, kurgusal eserlerinde bile kahramanlarını kendisiyle özdeşleştirerek okuruna sunuyor.", ok: false },
      { text: "Yazar, denemelerinde titiz ve dikkatli biçimde yazdığı cümlelerinde her bir sözcüğün hakkını vermeye çalışıyor.", ok: false }
    ]
  },
  {
    text: "<p>(I) Su ürünleri mühendisleri, Türkiye'deki denizlerde 296 genetik patentli canlının bulunduğunu söylüyor. (II) Fakat uzmanların dışında kalanlar, bunların çoğunun varlığından bile haberdar değil. (III) Bu canlıların bazıları ülkemizdeki denizlerin derinliklerinde yaşamlarını sürdürüyor. (IV) Genetik yapılarından dolayı bu canlılar zorlu çevre koşullarına çok kolay uyum sağlayabiliyor. (V) Ayrıca bu deniz canlıları, ilaç sektöründen kozmetik ürünlere kadar çok çeşitli alanlarda da kullanılıyor.</p><p><b>Bu parçada numaralanmış cümlelerden hangisinin öznesi \"sıfat-fiil grubu\"ndan oluşmaktadır?</b></p>",
    diff: 3,
    expl: "II numaralı cümlede 'uzmanların dışında kalanlar' öznesi '-an' sıfat-fiil ekiyle oluşmuş bir gruptur (adlaşmış sıfat-fiil grubu).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yüklem, belirtili isim tamlamasından oluşmaktadır?</b></p>",
    diff: 3,
    expl: "E seçeneğinde yüklem 'sürecin en önemli adımıdır' sözüdür; tamlayan ilgi hâli eki (-in), tamlanan iyelik eki almış olduğundan belirtili isim tamlamasıdır. Diğer seçeneklerde yüklemler sıfat tamlaması (boş bir uğraşıdır, ... yıllardır, ... gelgitlerdir) ya da belirtisiz isim tamlaması (deneyimleme hevesidir) yapısındadır.",
    answers: [
      { text: "Hayatın nefes kesen zorlu yokuşunu bıkmadan usanmadan tırmanırken çocuk kitaplarıyla ilgilenmek boş bir uğraşıdır.", ok: false },
      { text: "Doymak bilmeyen iştahlı bir okur olarak geçirdiğim mutlu çocukluğum sözcüklerin büyüsüne kapıldığım yıllardır.", ok: false },
      { text: "Yetişkinlerin unuttukları sahici sadeliğe ulaşabilmelerinin yolu çocuk tecrübesizliğini yeniden deneyimleme hevesidir.", ok: false },
      { text: "Çarpık modernleşmenin yaşandığı kültür dünyamızın çocuk edebiyatına yansımalarındaki asıl sorun bir ileri iki geri yaşanan gelgitlerdir.", ok: false },
      { text: "Çocuğun etkin okur kimliği kazanmasında nitelikli çocuk kitapları ile buluşması sürecin en önemli adımıdır.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde nesnelerden biri, diğerinin açıklayıcısı durumundadır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde 'Hayatının en önemli insanını' nesnesinden sonra gelen 'annesini' sözcüğü ara sözdür ve nesnenin açıklayıcısıdır.",
    answers: [
      { text: "Hayatının en önemli insanını, annesini büyük bir özlemle andı.", ok: true },
      { text: "Örgülü beyaz saçlarını, rüzgârda uçuşan şapkasını tuttu.", ok: false },
      { text: "Acaba hiç üstü kapalı bir ev, karnını doyuracak sıcak bir aş bulamadı mı?", ok: false },
      { text: "Her çağ kendi rüyalarını, kendi emellerini söyletmiş şairlere.", ok: false },
      { text: "Kimsesiz çocuklar için eskimiş ayakkabılar, yamanmış giysiler topluyordu.", ok: false }
    ]
  },
  {
    text: "<p>(I) Sözsüz iletişimin pek çok yolu vardır. (II) Örneğin, Türkiye'nin Karadeniz bölgesindeki bazı köylerde evler, yöre koşullarından dolayı sarp kayaların ya da birbirinden uzak tepelerin üzerinde kurulmuştur. (III) Uzaktan uzağa haberleşmek isteyen köylüler, bugün bile seslerini birbirlerine ıslıkla duyururlar. (IV) Yüz yüze konuşamayan bu insanlar, keskin ıslık sesleriyle haberleşirler ve her ıslık türü farklı bir anlam taşır. (V) Tıpkı, rengine ve duruşuna göre farklı anlamlara gelen bayraklarla haberleşen eski denizciler gibi...</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde işin yapıldığı yeri belirten bir tümleç vardır?</b></p>",
    diff: 2,
    expl: "II numaralı cümlede 'Türkiye'nin Karadeniz bölgesindeki bazı köylerde' ifadesi eylemin (kurulmuştur) yapıldığı yeri belirten yer tamlayıcısıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisi sadece özne ve yüklemden <u>oluşmamaktadır</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'Kameraman' (özne), 'kartalları yuvalarında' (nesne), 'görüntülemek istedi' (yüklem) şeklinde nesne ögesi de bulunduğu için sadece iki ögeden oluşmaz.",
    answers: [
      { text: "Alınan kararları sorgulamak, bizim işimiz değil.", ok: false },
      { text: "Bu durumu belgeleriyle kanıtlamak mümkündür.", ok: false },
      { text: "Kameraman, kartalları yuvalarında görüntülemek istedi.", ok: true },
      { text: "Bizim görevimiz, beyefendiyi kapıda karşılamak.", ok: false },
      { text: "Eserlerin tümünü müzede sergilemek güzel bir fikir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Burası; köye bir hayli uzak, eski mi eski bir su değirmeniydi. (II) Güneş sırtların arkasındaki boşluğa gömülünce değirmen, gölgelere bürünüp kararmaya başlardı. (III) Yalnızca yüksek kavak ağaçlarının tepelerindeki yapraklar, birer renkli fener gibi bir süre daha ışıklı kalırdı. (IV) Onlar da sönüp kaybolunca değirmen, gecenin karanlığına gömülmüş kimliksiz bir ses hâlini alırdı. (V) Bazen de rutubetli bir hamam gibi en kısık sesi bile abartarak sabaha kadar uğuldardı.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisi yalnızca özne ve yüklemden oluşmuştur?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede 'Burası' özne, geri kalan 'köye bir hayli uzak, eski mi eski bir su değirmeniydi' kısmı ise komple yüklemdir. Başka bir yardımcı öge yoktur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 2
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_2: McQ[] = [
  {
    text: "<p>Hubble Uzay Teleskobu yaklaşık 8000 yıl önce patlayan devasa bir yıldıza ait kalıntıların küçük bir bölümünü geçtiğimiz günlerde keşfetti.</p><p><b>Bu cümlenin öge dizilişi aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 2,
    expl: "Özne: Hubble Uzay Teleskobu / Belirtili Nesne: yaklaşık 8000 yıl... küçük bir bölümünü / Zarf Tümleci: geçtiğimiz günlerde / Yüklem: keşfetti.",
    answers: [
      { text: "Belirtisiz nesne - zarf tümleci - yer tamlayıcısı - yüklem", ok: false },
      { text: "Özne - belirtili nesne - zarf tümleci - yüklem", ok: true },
      { text: "Özne - zarf tümleci - belirtili nesne - yüklem", ok: false },
      { text: "Belirtisiz nesne - yer tamlayıcısı - zarf tümleci - yüklem", ok: false },
      { text: "Özne - belirtisiz nesne - yer tamlayıcısı - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Yazar, tüm amacının unutulmaya yüz tutmuş bir dili yeniden gün yüzüne çıkarmak olduğunu eserinin başında açık yüreklilikle belirtir.</p><p><b>Bu cümlenin öge dizilişi aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Yazar / Belirtili Nesne: tüm amacının... olduğunu / Yer Tamlayıcısı: eserinin başında / Zarf Tümleci: açık yüreklilikle / Yüklem: belirtir.",
    answers: [
      { text: "Özne - belirtili nesne - yer tamlayıcısı - zarf tümleci - yüklem", ok: true },
      { text: "Belirtisiz nesne - özne - belirtili nesne - yer tamlayıcısı - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı - belirtili nesne - zarf tümleci - yüklem", ok: false },
      { text: "Özne - zarf tümleci - yer tamlayıcısı - yüklem", ok: false },
      { text: "Belirtili nesne - yer tamlayıcısı - zarf tümleci - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Barış Manço, 1974 yılına ait olduğunu sandığım siyah beyaz bir klipte, parmaklarında tavuk teleği mızrabı, elinde sazıyla bu şarkıyı okuyor.</p><p><b>Bu cümlenin ögelerinin dizilişi aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Barış Manço / Yer Tamlayıcısı: 1974 yılına... bir klipte / Zarf Tümleci: parmaklarında... sazıyla / Belirtili Nesne: bu şarkıyı / Yüklem: okuyor.",
    answers: [
      { text: "Özne - yer tamlayıcısı - zarf tümleci - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı - belirtili nesne - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı - zarf tümleci - belirtili nesne - yüklem", ok: true },
      { text: "Özne - zarf tümleci - yer tamlayıcısı - yüklem", ok: false },
      { text: "Özne - zarf tümleci - zarf tümleci - belirtili nesne - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Ben on bir yaşındayken babam beni önceleri üç sinemanın bulunduğu Şehzadebaşı semtine götürürdü.</p><p><b>Bu cümlenin ögeleri sırasıyla aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Zarf Tümleci: Ben on bir yaşındayken / Özne: babam / Belirtili Nesne: beni / Zarf Tümleci: önceleri / Yer Tamlayıcısı: üç sinemanın... semtine / Yüklem: götürürdü. Şıklara göre en uygunu Zarf Tümleci - Özne - Belirtili Nesne - Yer Tamlayıcısı - Yüklem dizilişidir.",
    answers: [
      { text: "Zarf tümleci - belirtili nesne - özne - dolaylı tümleç - yüklem", ok: false },
      { text: "Özne - zarf tümleci - belirtili nesne - dolaylı tümleç - yüklem", ok: false },
      { text: "Zarf tümleci - özne - belirtili nesne - dolaylı tümleç - yüklem", ok: true },
      { text: "Dolaylı tümleç - özne - belirtili nesne - zarf tümleci - yüklem", ok: false },
      { text: "Özne - dolaylı tümleç - belirtili nesne - zarf tümleci - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Bu caddenin taşlarının üzerinden yüzyıllar boyunca geçen insanların ayak seslerini takip edenler, bir kalenin oya gibi işlenmiş kapısı önünde bulurlar izlerini.</p><p><b>Bu cümledeki ögelerin dizilişi aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Bu caddenin... takip edenler / Yer Tamlayıcısı: bir kalenin... kapısı önünde / Yüklem: bulurlar / Belirtili Nesne: izlerini.",
    answers: [
      { text: "Özne - yüklem - belirtili nesne", ok: false },
      { text: "Zarf tümleci - özne - belirtili nesne - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı - yüklem - belirtili nesne", ok: true },
      { text: "Zarf tümleci - belirtili nesne - yüklem - özne", ok: false },
      { text: "Belirtili nesne - yer tamlayıcısı - yüklem - özne", ok: false }
    ]
  },
  {
    text: "<p>Kromofor adı verilen pigment molekülleri fotosentez sırasında güneş enerjisini tepkime merkezlerine hızlı taşıdığından güneş enerjisinin hemen hepsi arada hiç ısı kaybı olmadan kimyasal enerjiye dönüşür.</p><p><b>Bu cümledeki ögelerin doğru sıralanışı aşağıdakilerin hangisidir?</b></p>",
    diff: 3,
    expl: "Zarf Tümleci: Kromofor... taşıdığından / Özne: güneş enerjisinin hemen hepsi / Zarf Tümleci: arada hiç ısı kaybı olmadan / Yer Tamlayıcısı: kimyasal enerjiye / Yüklem: dönüşür.",
    answers: [
      { text: "Belirtisiz nesne - zarf tümleci - zarf tümleci - özne - yer tamlayıcısı - yüklem", ok: false },
      { text: "Belirtili nesne - zarf tümleci - zarf tümleci - özne - yer tamlayıcısı - yüklem", ok: false },
      { text: "Özne - zarf tümleci - yer tamlayıcısı - zarf tümleci - yüklem", ok: false },
      { text: "Zarf tümleci - özne - zarf tümleci - yüklem", ok: false },
      { text: "Zarf tümleci - özne - zarf tümleci - yer tamlayıcısı - yüklem", ok: true }
    ]
  },
  {
    text: "<p>Modern şehir hayatının gün içerisinde onlarca kişiyle iletişime geçmeyi zorunlu kılan ve kişileri binlerce mesaja maruz bırakan yapısı, insana daha önce deneyimlemediği bir uyum sürecini dayatıyor.</p><p><b>Bu cümledeki ögelerin doğru sıralanışı aşağıdakilerin hangisinde verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Modern şehir... bırakan yapısı / Yer Tamlayıcısı: insana / Belirtili Nesne: daha önce deneyimlemediği bir uyum sürecini / Yüklem: dayatıyor.",
    answers: [
      { text: "Özne - zarf tümleci - belirtisiz nesne - yüklem", ok: false },
      { text: "Belirtisiz nesne - özne - belirtili nesne - yüklem", ok: false },
      { text: "Zarf tümleci - yer tamlayıcısı (dolaylı tümleç) - özne - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı (dolaylı tümleç) - belirtili nesne - yüklem", ok: true },
      { text: "Belirtili nesne - zarf tümleci - özne - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Sırf kendi için okuyan, gezen, eğlenen bir aydın kendini yaşarken öldürmüyor mu?</p><p><b>Bu cümledeki ögelerin doğru sıralanışı aşağıdakilerden hangisinde verilmiştir?</b></p>",
    diff: 2,
    expl: "Özne: Sırf kendi için okuyan, gezen, eğlenen bir aydın / Belirtili Nesne: kendini / Zarf Tümleci: yaşarken / Yüklem: öldürmüyor mu?",
    answers: [
      { text: "Belirtisiz nesne - özne - zarf tümleci - yüklem", ok: false },
      { text: "Zarf tümleci - belirtili nesne - yüklem", ok: false },
      { text: "Özne - belirtili nesne - zarf tümleci - yüklem", ok: true },
      { text: "Özne - zarf tümleci - yüklem", ok: false },
      { text: "Belirtisiz nesne - zarf tümleci - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Okuyucuların bitirmekte en çok zorlandıkları on kitap arasında yer alan Ulysses, anlatımının farklı kurgusuna etkisinden edebiyat severleri cezbediyor.</p><p><b>Bu cümledeki ögelerin dizilişi aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Okuyucuların... yer alan Ulysses / Zarf Tümleci: anlatımının... etkisinden / Belirtili Nesne: edebiyat severleri / Yüklem: cezbediyor.",
    answers: [
      { text: "Özne - Zarf tümleci - Belirtili nesne - Yüklem", ok: true },
      { text: "Yer tamlayıcısı - Özne - Belirtili nesne - Yüklem", ok: false },
      { text: "Belirtisiz nesne - Zarf tümleci - Özne - Yüklem", ok: false },
      { text: "Belirtisiz nesne - Zarf tümleci - Belirtili nesne - Yüklem", ok: false },
      { text: "Özne - Zarf tümleci - Yer tamlayıcısı - Yüklem", ok: false }
    ]
  },
  {
    text: "<p>Karbondioksit kullanarak çözülebilir plastik üreten bilim insanları, bu yeni teknolojinin doğada çözünemeyen plastik kullanımının önüne geçmede önemli bir adım olacağını duyurdu.</p><p><b>Bu cümledeki ögelerin doğru sıralanışı aşağıdakilerin hangisinde verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Karbondioksit... bilim insanları / Belirtili Nesne: bu yeni teknolojinin... olacağını / Yüklem: duyurdu.",
    answers: [
      { text: "Özne - belirtili nesne - yer tamlayıcısı - yüklem", ok: false },
      { text: "Zarf tümleci - özne - yer tamlayıcısı - yüklem", ok: false },
      { text: "Özne - belirtili nesne - yüklem", ok: true },
      { text: "Zarf tümleci - belirtili nesne - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı - zarf tümleci - yüklem", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinin ögelerinin dizilişi \"özne - zarf tümleci - dolaylı tümleç - yüklem\" şeklindedir?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'Bu şiirlerin hepsi' özne, 'birkaç ayda' zarf tümleci, 'büyülü bir mekânda' dolaylı tümleç (yer tamlayıcısı), 'yazılmış' yüklemdir. Dizilişi özne - zarf tümleci - dolaylı tümleç - yüklem şeklindedir.",
    answers: [
      { text: "Bütün heyecanlarımız böyle bir yapıya sahip oluşumuzdan kaynaklanır.", ok: false },
      { text: "İnsanın değeri, sahip olduğu düşünceye göre yavaş yavaş ortaya çıkar.", ok: false },
      { text: "İnsanın eski deyimle 'eşrefi mahlûkat' olması, onun bu niteliğinden gelir.", ok: false },
      { text: "Bu şiirlerin hepsi birkaç ayda büyülü bir mekânda yazılmış.", ok: true },
      { text: "Kalemimiz bu dümdüz alanın üstünde gezinmeye başlar.", ok: false }
    ]
  },
  {
    text: "<p>(I) Arkeologlar yeni kalıntılar ortaya çıkarmak ve daha fazla bilgi elde etmek için teknolojik gelişmelerden yararlanıyorlar. (II) Ama geçmişte olup bitenler hakkındaki her şeyi tam olarak bilemeyecekler. (III) Zira eski kalıntıların önemli bir bölümünün, zamanın yok edici gücüne dayanamadığını görebiliyoruz. (IV) Geçmişe ait düşünceler ve inançlar gibi çok önemli şeyler, hemen hemen hiç iz bırakmadan yitip gidebiliyor. (V) Bu yüzden arkeologlar, buldukları en küçük parçalar üzerinde büyük bir dikkatle çalışıyorlar.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinin öge sıralanışı \"özne - zarf tümleci - yüklem\" şeklindedir?</b></p>",
    diff: 3,
    expl: "IV. cümlede 'Geçmişe ait düşünceler ve inançlar gibi çok önemli şeyler' özne, 'hemen hemen hiç iz bırakmadan' zarf tümleci, 'yitip gidebiliyor' yüklemdir. II. cümle nesne - zarf tümleci - yüklem; V. cümle zarf tümleci - özne - yer tamlayıcısı - zarf tümleci - yüklem dizilişindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinin öge dizilişi \"özne - belirtili nesne - yer tamlayıcısı - yüklem\" şeklindedir?</b></p>",
    diff: 3,
    expl: "E seçeneğinde 'Karçal Dağları'nın eteklerine serilen ve Karadeniz'in yağmurlarıyla can bulan Papart Vadisi' özne, 'farklı tonlardaki tüm renkleri' belirtili nesne, 'içinde' yer tamlayıcısı, 'barındırıyordu' yüklemdir.",
    answers: [
      { text: "Papart Ormanı ve Karçal Dağları gezisi, farklı şehirlerden gelen on iki fotoğraf gönüllüsünün Trabzon'da buluşmasıyla başladı.", ok: false },
      { text: "Birbirini ilk kez gören insanlardan oluşan bu ekip, yaklaşık iki saat sonra Borçka'ya, gezinin başlangıç noktası olan ilçeye ulaştı.", ok: false },
      { text: "Yolda birbirleriyle tanışan fotoğraf gönüllüleri, burada kızarmış alabalık, salata ve baklavadan oluşan bir öğle yemeği yediler.", ok: false },
      { text: "Yemekten sonra yoluna devam eden grubu, ilk defa gittikleri bu vadide sonbaharın renkleri ve nefis yansımaları karşılamıştı.", ok: false },
      { text: "Karçal Dağları'nın eteklerine serilen ve Karadeniz'in yağmurlarıyla can bulan Papart Vadisi, farklı tonlardaki tüm renkleri içinde barındırıyordu.", ok: true }
    ]
  },
  {
    text: "<p>(I) Varlığı bilinen kara deliklerin çoğuna uzaydaki hareketleri sırasında eşlik eden bir yıldız bulunur. (II) Kara deliğin bu yıldızdan yakaladığı maddeler, kara deliğin etrafında dikkat çekici bir disk oluşturur. (III) Oluşan diskteki elektrik yüklü parçacıklar, kara deliğin kütle çekimi etkisiyle ivmelendikçe ışık yayar. (IV) Bu yüzden bir yıldızın yakınlarında dolanan bu kara delikleri keşfetmek görece kolaydır. (V) Keşfedilmesi çok daha zor olansa çevrelerinden izole bir biçimde uzayda dolaşan başıboş kara deliklerdir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinin öge dizilişi \"özne - yer tamlayıcısı - belirtisiz nesne - yüklem\" şeklindedir?</b></p>",
    diff: 3,
    expl: "II. cümlede 'Kara deliğin bu yıldızdan yakaladığı maddeler' özne, 'kara deliğin etrafında' yer tamlayıcısı, 'dikkat çekici bir disk' belirtisiz nesne, 'oluşturur' yüklemdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisi öge sıralanışı bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "Diğer cümlelerde yüklemden sonra yalnızca yer tamlayıcısı (bana, çocuklarından, insanlığa, sakinlerine) gelmiştir. E seçeneğinde ise 'Annesinin kendisine verdiği öğütleri dikkatle dinleyen çocuk' (özne) / 'asla' (zarf tümleci) / 'çıkarmazdı' (yüklem) / 'onları' (nesne) / 'aklından' (yer tamlayıcısı) şeklinde nesne de yüklemden sonra gelmiştir.",
    answers: [
      { text: "Tatlı bir esintiyle etrafa yayılan çiçeklerin kokusu bir Akdeniz şehrinin nasıl olabileceğini düşündürttü bana.", ok: false },
      { text: "Gün gelip de eli ekmek tutan bu genç adam yardımını esirgememişti güzelim köy çocuklarından.", ok: false },
      { text: "Yazmaktan usanmayan bu şair sevginin en büyük değer olduğunu anlatacak bütün insanlığa.", ok: false },
      { text: "Sabah vakti ufukta beliren gün ışığı yeni bir günün umut ve heyecanını hissettiriyordu şehrin sakinlerine.", ok: false },
      { text: "Annesinin kendisine verdiği öğütleri dikkatle dinleyen çocuk asla çıkarmazdı onları aklından.", ok: true }
    ]
  },
  {
    text: "<p>Ahmet, geçen gün beni telaşla durdurdu.</p><p><b>Aşağıdakilerden hangisi ögelerinin dizilişi bakımından bu cümleyle özdeştir?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümle 'Ahmet (özne) / geçen gün (zarf tümleci) / beni (belirtili nesne) / telaşla (zarf tümleci) / durdurdu (yüklem)' dizilişindedir. E seçeneği de 'Bu çocuk (özne) / fırsatını bulunca (zarf tümleci) / seni (belirtili nesne) / gözünü kırpmadan (zarf tümleci) / üzer (yüklem)' şeklindedir.",
    answers: [
      { text: "Ankara'dan gelen uçak, dün hava alanına bir saat geç indi.", ok: false },
      { text: "Yaşam sofrasında, çalışmayanların yeri yoktur.", ok: false },
      { text: "Kız kardeşim, dün İstanbul'dan trenle beş saatte geldi.", ok: false },
      { text: "İnsan severek çalışırsa her işi başarır, diye düşünüyorum.", ok: false },
      { text: "Bu çocuk, fırsatını bulunca seni gözünü kırpmadan üzer.", ok: true }
    ]
  },
  {
    text: "<p>Eski otel odalarındaki not defterlerinde en içten sırları açığa çıkaran düşünceler bulunabiliyordu.</p><p><b>Bu cümlenin ögelerinin dizilişi, aşağıdakilerden hangisiyle özdeştir?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümle 'Eski otel odalarındaki not defterlerinde (yer tamlayıcısı) / en içten sırları açığa çıkaran düşünceler (özne) / bulunabiliyordu (yüklem)' dizilişindedir. B seçeneği de 'O çardakla bırakanın yanında (yer tamlayıcısı) / içinde kocaman kırmızı balıkların yüzdüğü derin bir kuyu (özne) / vardı (yüklem)' şeklindedir.",
    answers: [
      { text: "Babam bu üç katlı, daireleri seksen metrekarelik küçük apartmanı yaptırmaya başladığında 1953 yılıydı.", ok: false },
      { text: "O çardakla bırakanın yanında, içinde kocaman kırmızı balıkların yüzdüğü derin bir kuyu vardı.", ok: true },
      { text: "Kapısında güvenlik görevlilerinin bulunduğu yeni moda sitelerin birinde; sessiz sakin, huzur içinde yaşamaktayım.", ok: false },
      { text: "Sobalarda yakılan odun kokusu; insana, sığınacağı bir evi olmanın mutluluğunu hissettirirdi.", ok: false },
      { text: "Sabaha karşı ağaçlı ve dolambaçlı bir yolda arabayla ilerlerken farlarımız, önümüzdeki çayın olduğu gibi aydınlatıyordu.", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat akımlarının güzellik, sanat ve edebiyat anlayışlarını içeren kurallar manzumesi çoğu kez yazılı değildir.</p><p><b>Aşağıdaki cümlelerin hangisinde ögelerin dizilişi bu cümleninkiyle aynıdır?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümle 'Edebiyat akımlarının ... kurallar manzumesi (özne) / çoğu kez (zarf tümleci) / yazılı değildir (yüklem)' dizilişindedir. D seçeneği de 'Edebiyat akımları (özne) / belli bir dünya görüşünün, güzellik ve sanat anlayışının etkisiyle (zarf tümleci) / oluşur (yüklem)' şeklindedir.",
    answers: [
      { text: "Edebiyat akımlarının zemininde çeşitli sosyal, siyasi, ekonomik ve kültürel hadiseler yer alır.", ok: false },
      { text: "Belirtili bir dönemde verilen eserlerin ardındaki fikri kavramak için edebiyat akımlarını layıkıyla bilmek gerekir.", ok: false },
      { text: "Edebiyat akımlarının filizlenip yeşermesinin ve çözülüp dağılmasının nedenlerini kavramak önemlidir.", ok: false },
      { text: "Edebiyat akımları belli bir dünya görüşünün, güzellik ve sanat anlayışının etkisiyle oluşur.", ok: true },
      { text: "Edebiyat akımları benimsedikleri ilke ve değerlere sıkı sıkıya bağlıdır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Kendisini en iyi romanla ifade ettiğini her röportajında yineliyor. (II) Fakat yazar bu kez bavulunca biriktirdiği sevgiyi, hasreti, öfkeyi, hayal kırıklıklarını öyküleriyle hayata haykırıyor. (III) Yeni kitabı Bavula Sığmayan birbiriyle konuşan ve birbirine omuz veren öykülerden oluşan bir kitap. (IV) Bir ilaç prospektüsü tadında öyküler eserin birbiriyle bağlantılı bölümlerini oluşturuyor. (V) Bir bakıma yazar, öykülerinde iyileşmenin reçetesini sunuyor okura.</p><p><b>Yukarıda numaralanmış cümlelerden hangisinin öge dizilişi \"Seçtiği sıradan konu ve temalar okurun kendini eserin bir parçası olarak görmesini sağlıyor.\" cümlesi ile aynıdır?</b></p>",
    diff: 3,
    expl: "Verilen cümle 'Seçtiği sıradan konu ve temalar (özne) / okurun kendini eserin bir parçası olarak görmesini (belirtili nesne) / sağlıyor (yüklem)' dizilişindedir. IV. cümle de 'Bir ilaç prospektüsü tadında öyküler (özne) / eserin birbiriyle bağlantılı bölümlerini (belirtili nesne) / oluşturuyor (yüklem)' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat sahnesine 1960'lı yılların başında çıkan Nichita Stanescu; ----.</p><p><b>Bu cümle aşağıdakilerden hangisiyle tamamlanırsa cümlenin ögeleri sırasıyla \"Özne - Zarf Tümleci - Yer Tamlayıcısı (Dolaylı Tümleç) - Yüklem\" şeklinde olur?</b></p>",
    diff: 3,
    expl: "B seçeneğiyle tamamlanan cümlede 'Edebiyat sahnesine ... çıkan Nichita Stanescu' özne, 'daha ilk zamanlarında' zarf tümleci, 'Romanya'daki edebiyat çevrelerinde' yer tamlayıcısı, 'fırtınalar kopardı' yüklemdir.",
    answers: [
      { text: "çeşitli gazete ve dergilerde redaktörlük ve başyazarlık görevlerinde bulundu", ok: false },
      { text: "daha ilk zamanlarında Romanya'daki edebiyat çevrelerinde fırtınalar kopardı", ok: true },
      { text: "yarım yüzyıllık yaşamına her biri diğerini aşan mükemmel eserler sığdırdı", ok: false },
      { text: "yazdıklarıyla kısa zamanda ülkesinin en sevilen şairlerinden biri oldu", ok: false },
      { text: "ikinci şiir kitabıyla Romanya'daki sanatseverlerin ilgisini çekmeyi başardı", ok: false }
    ]
  },
  {
    text: "<p>Vücudumuzdaki proteinlerin üçte birini oluşturan kolajen ----.</p><p><b>Bu cümle aşağıdakilerden hangisiyle tamamlanırsa öge dizilişi \"özne - zarf tümleci - belirtisiz nesne - yüklem\" şeklinde olur?</b></p>",
    diff: 3,
    expl: "D seçeneğiyle tamamlanan cümlede 'Vücudumuzdaki proteinlerin üçte birini oluşturan kolajen' özne, 'bulunduğu dokudaki işlevine göre' zarf tümleci, 'karmaşık yapılar' belirtisiz nesne, 'ortaya çıkarır' yüklemdir.",
    answers: [
      { text: "aynı zamanda bilinen en sağlam malzemelerden biridir", ok: false },
      { text: "başta kemik ve deri olmak üzere tüm dokularda bulunur", ok: false },
      { text: "genç ve pürüzsüz bir cilde sahip olmamıza yardımcı olur", ok: false },
      { text: "bulunduğu dokudaki işlevine göre karmaşık yapılar ortaya çıkarır", ok: true },
      { text: "hayli uzun ömürlü olmakla birlikte belli bir yaşam süresine sahiptir", ok: false }
    ]
  },
  {
    text: "<p>\"Bir yöreye veya topluluğa özgü konuşma biçimi\" şeklinde tanımlanan ağızlar ----.</p><p><b>Bu cümle, aşağıdakilerden hangisiyle tamamlanırsa öge dizilişi \"özne - belirtili nesne - zarf tümleci - yüklem\" şeklinde olur?</b></p>",
    diff: 3,
    expl: "C seçeneğiyle tamamlanan cümlede '\"Bir yöreye veya topluluğa özgü konuşma biçimi\" şeklinde tanımlanan ağızlar' özne, 'söz dağarcığında yer alan eski kelime ve deyimleri' belirtili nesne, 'günümüze kadar' zarf tümleci, 'ulaştırmıştır' yüklemdir.",
    answers: [
      { text: "eski kelime, deyim ve diğer sözleri koruyarak geleceğe adım adım taşımaktadır", ok: false },
      { text: "söz varlığı unsurları bakımından yazı dilini besleyen kaynakların başında yer almıştır", ok: false },
      { text: "söz dağarcığında yer alan eski kelime ve deyimleri günümüze kadar ulaştırmıştır", ok: true },
      { text: "bünyesinde standart dilin sözlüklerinde görülmeyen pek çok kelime ve söz barındırır", ok: false },
      { text: "tarihî metinlerde geçen fakat bugün kullanılmayan kelimelerin yaşamasını sağlamıştır", ok: false }
    ]
  },
  {
    text: "<p>(I) Süper kahramanların çizgi romanlarda güçlerine kavuşmaları, genellikle belli başlı şekillerde olmaktadır. (II) Bilinmeyen bir dünyadan ya da doğrudan uzaydan gelen insanüstü güçlere sahip süper kahramanlar, en yaygın bilinen örneklerdendir. (III) İkinci sıradakiler radyoaktif etki sonucu güçlerine kavuşan süper kahramanlardır. (IV) Radyoaktif bir hayvan tarafından ısırılan karakter, bir süper kahramana dönüşüp onu ısıran hayvanın özelliklerine sahip olur. (V) Başvurulan yöntemlerden bir diğeri de deneykazaları sonucu ortaya çıkan kahramanlardır.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV. cümlenin öznesi 'Radyoaktif bir hayvan tarafından ısırılan karakter' sözüdür; bu söz sıfat-fiil grubuyla kurulmuş bir sıfat tamlamasıdır, belirtisiz isim tamlaması değildir.",
    answers: [
      { text: "I. cümlenin öznesi, belirtili isim tamlamasıdır.", ok: false },
      { text: "II. cümlenin öznesi, sıfat tamlamasıdır.", ok: false },
      { text: "III. cümlenin yüklemi, sıfat tamlamasıdır.", ok: false },
      { text: "IV. cümlenin öznesi, belirtisiz isim tamlamasıdır.", ok: true },
      { text: "V. cümlenin yüklemi, sıfat tamlamasıdır.", ok: false }
    ]
  }
];
