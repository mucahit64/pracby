import { McQ } from "../../../../types";

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 1
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_1: McQ[] = [
  {
    text: "<p>Baltık Denizi'nin Finlandiya ve İsveç arasındaki <u>I. bölgesinde</u> keşfedilen bir cisim gizemini koruyor. \"Ocean X\" adındaki dalış ekibinin 86 metre derinlikte <u>II. bulduğu cisim</u>, <u>III. kendisine</u> 200 metre yaklaşıldığında tüm <u>IV. cihazları</u> kilitliyor. 60 metre <u>V. genişliğe</u> sahip olan bu cismin, bir göktaşı olma olasılığı üzerinde duruluyor.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisi, tek başına, içinde bulunduğu cümlenin ögelerinden biridir?</b></p>",
    diff: 3,
    expl: "IV numaralı 'cihazları' sözcüğü, 'tüm cihazları kilitliyor' cümlesinde 'Neyi kilitliyor?' sorusuna cevap vererek tek başına belirtili nesne görevini üstlenmiştir. Diğer numaralı sözcükler ait oldukları tamlama veya öbek yapılarından ayrılamazlar.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Islak nisan akşamlarında çocukluğuma açılan kapının <u>I. önünde bulurum</u> kendimi. Sisler içerisinde duran yoldan, önce yavaş sonra hızlı adımlarla <u>II. ilerlerim</u>. Kestane ağaçlarının arasından sessizce akıp <u>III. denize</u> ulaşırım. Ayaklarımı kumlara gömüp yavaşça <u>IV. vadiye</u> yönelirim. Aklımı bıraktığım uçurtmaların <u>V. kuyruğunda</u> gezinirim.</p><p><b>Bu parçada numaralanmış sözlerden hangisi diğerlerinden farklı bir cümle ögesidir?</b></p>",
    diff: 3,
    expl: "I numaralı öbekte 'bulurum' yüklemdir. Diğer altı çizili sözcükler (denize, vadiye, kuyruğunda) yer tamlayıcısı (dolaylı tümleç) görevindeyken, II numaralı 'ilerlerim' de bir yüklemdir. Ancak soru kökü ve yapı incelendiğinde I numaralı 'önünde' kelimesi yer tamlayıcısının parçasıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yüklemi zaman yönünden tamamlayan bir öge (zarf tümleci) kullanılmamıştır?</b></p>",
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
      { text: "<u>Saatini düşürdüğünü</u>, her nasılsa anlamamamış.", ok: false }
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
    text: "<p>Daima, bu şehre ilk giren ve onu yeni baştan bir Türk şehri olarak kuran dedelerimizin yaşayışlarındaki hatırafa hayran oldum.</p><p><b>Bu cümlenin yer tamlayıcısında (dolaylı tümlecinde) aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Cümlede dolaylı tümleç: 'bu şehre ilk giren... yaşayışlarındaki hatıralara' kısmıdır. Bu bölümde isim-fiil (yaşayış), sıfat-fiil (giren, kuran), edat (olarak) ve bağlaç (ve) vardır. Zarf-fiil bulunmamaktadır.",
    answers: [
      { text: "İsim-fiil", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "Edat", ok: false },
      { text: "Bağlaç", ok: false },
      { text: "Zarf-fiil", ok: true }
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
    text: "<p>(I) Avrupa Arkeologlar Birliği, arkeoloji ve kültürel mirasın korunması alanlarında saygın meslek kuruluşlarının başında gelmektedir. (II) Arkeolojide yeni yaklaşımların geliştirilmesi... (III) Her yıl başka bir Avrupa ülkesinde... (IV) Bu çerçevede... (V) İstanbul Teknik Üniversitesi... tahsis etmiştir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde özne, bir kelime grubundan <u>oluşmamıştır</u>?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki II. cümlede özne 'yeni yaklaşımların geliştirilmesi' bir isim tamlamasıdır. Soru köküne göre III. cümlede özne 'Bu çerçevede, Avrupa Arkeologlar Birliğinin 20. yıl kongresi' koca bir öbektir. IV. cümlede özne yoktur (gizli). V. cümlede özne 'İstanbul Teknik Üniversitesi'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinin öznesi, sıfat tamlamasından oluşmuştur?</b></p>",
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
    text: "<p><b>Bu parçadaki numaralanmış cümlelerden hangisinin öznesi sıfat tamlamasından oluşmaktadır?</b></p>",
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
    text: "<p>(I) Su ürünleri mühendisleri... (II) Fakat uzmanların dışında kalanlar... (III) Bu canlıların bazıları... (IV) Genetik yapılarından dolayı bu canlılar... (V) ilaç sektöründen kozmetik ürünlere kadar...</p><p><b>Bu parçada numaralanmış cümlelerden hangisinin öznesi \"sıfat-fiil grubu\"ndan oluşmaktadır?</b></p>",
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
    expl: "C seçeneğinde yüklem 'çocuk tecrübesizliğini yeniden deneyimleme hevesidir' kısmıdır. ' Tecrübesizliğini deneyimleme hevesi' belirtisiz olsa da genel yapı tamlama grubudur. Ancak cevap anahtarı B şıkkını ('yıllardır' yüklemini) değil E şıkkını 'sürecin en önemli adımıdır' (belirtili tamlama) olarak işaret eder.",
    answers: [
      { text: "Hayatın nefes kesen zorlu yokuşunu bıkmadan usanmadan tırmanırken çocuk kitaplarıyla ilgilenmek boş bir uğraşıdır.", ok: false },
      { text: "Doymak bilmeyen iştahlı bir okur olarak geçirdiğim mutlu çocukluğum sözcüklerin büyüsüne kapıldığım yıllardır.", ok: false },
      { text: "Yetişkinlerin unuttukları sahici sadeliğe ulaşabilmelerinin yolu çocuk tecrübesizliğini yeniden deneyimleme hevesidir.", ok: false },
      { text: "Çarpık modernleşmenin yaşandığı kültür dünyamızın çocuk edebiyatına yansımalarındaki asıl sorun bir ileri iki geri yaşanan gelgitlerdir.", ok: false },
      { text: "Çocuğun etkin okur kimliği kazanmasında nitelikli çocuk kitapları ile buluşması sürecin en önemli adımıdır.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde nesnelerden biri, diğerinin açıklayıcısı durumundadır? (Ara söz nesne görevinde)</b></p>",
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
    text: "<p>(I) Sözsüz iletişimin pek çok yolu vardır. (II) Örneğin, Türkiye'nin Karadeniz bölgesindeki bazı köylerde evler... (III) Uzaktan uzağa haberleşmek isteyen köylüler... (IV) Yüz yüze konuşamayan bu insanlar... (V) Tıpkı, rengine ve duruşuna göre farklı anlamlara gelen bayraklarla haberleşen eski denizciler gibi...</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde işin yapıldığı yeri belirten bir tümleç (yer tamlayıcısı) vardır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerden hangisi sadece özne ve yüklemden oluşmamaktadır?</b></p>",
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
    text: "<p>(I) Burası; köye bir hayli uzak... su değirmeniydi. (II) Güneş sırtların arkasındaki boşluğa gömülünce... (III) Yalnızca yüksek kavak ağaçlarının... (IV) Onlar da sönüp kaybolunca... (V) Bazen de rutubetli bir hamam gibi...</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisi yalnızca özne ve yüklemden oluşmuştur?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede 'Burası' özne, geri kalan 'köye bir hayli uzak... su değirmeniydi' kısmı ise komple yüklemdir. Başka bir yardımcı öge yoktur.",
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
      { text: "Özne - belirtili nesne - zarf tümleci - belirtili nesne - yüklem", ok: false }
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
      { text: "Özne - dolaylı tümleci - belirtili nesne - zarf tümleci - yüklem", ok: false }
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
    expl: "Özne: Modern şehir... bırakan yapısı / Yer Tamlayıcısı: insana / Belirtili Nesne: daha önce deneyimlemediği bir uyum sürecini / Yüklem: dayatıyor. Şıklarda Belirtisiz Nesne olarak verilmiş olması tartışmalı olsa da cevap D'dir.",
    answers: [
      { text: "Özne - zarf tümleci - belirtisiz nesne - yüklem", ok: false },
      { text: "Belirtisiz nesne - özne - belirtili nesne - yüklem", ok: false },
      { text: "Zarf tümleci - yer tamlayıcısı (dolaylı tümleç) - özne - yüklem", ok: false },
      { text: "Özne - yer tamlayıcısı (dolaylı tümleç) - belirtili nesne - yüklem", ok: true },
      { text: "Belirtili nesne - zarf tümleci - özne - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Sırf kendi için okuyan, gezen, eğlenen bir aydın kendini yaşarken öldürmüyor mu?</p><p><b>Bu cümledeki ögelerin doğru sıralanışı aşağıdakilerin hangisinde verilmiştir?</b></p>",
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
    expl: "E seçeneğinde; Özne: Kalemimiz / Zarf Tümleci: bu dümdüz alanın üstünde / Yüklem: gezinmeye başlar. Sıralama özne - zarf tümleci - yüklem olsa da dolaylı tümleçli yapı B şıkkında incelenebilir: İnsanın değeri (Ö), sahip olduğu düşünceye göre (ZT), yavaş yavaş (ZT), ortaya çıkar (Y). Cevap anahtarına göre D şıkkı 'yazılmış' ile biter.",
    answers: [
      { text: "Bütün heyecanlarımız böyle bir yapıya sahip oluşumuzdan kaynaklanır.", ok: false },
      { text: "İnsanın değeri, sahip olduğu düşünceye göre yavaş yavaş ortaya çıkar.", ok: false },
      { text: "İnsanın eski deyimle 'eşrefi mahlukat' olması, onun bu niteliğinden gelir.", ok: false },
      { text: "Bu şiirlerin hepsi birkaç ayda büyülü bir mekânda yazılmış.", ok: true },
      { text: "Kalemimiz bu dümdüz alanın üstünde gezinmeye başlar.", ok: false }
    ]
  },
  {
    text: "<p>(I) Arkeologlar yeni kalıntılar ortaya çıkarmak ve daha fazla bilgi elde etmek için teknolojik gelişmelerden yararlanıyorlar. ... (V) Bu yüzden arkeologlar, buldukları en küçük parçalar üzerinde büyük bir dikkatle çalışıyorlar.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinin öge sıralanışı \"özne - zarf tümleci - yüklem\" şeklindedir?</b></p>",
    diff: 3,
    expl: "B seçeneği (II. cümle): Ama geçmişte olup bitenler hakkındaki her şeyi (Nesne) tam olarak (ZT) bilemeyecekler (Y). E seçeneği (V. cümle): Bu yüzden (ZT) arkeologlar (Ö), buldukları... üzerinde (YT) büyük bir dikkatle (ZT) çalışıyorlar (Y). Cevap B'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];