import { McQ } from "../../../../types";

// ============================================================================
// SIFAT (ÖN AD) - TEST 1
// ============================================================================
export const TUR_SIFAT_TEST_1: McQ[] = [
  {
    text: "<p>Tohum <u>I. ekmeyen</u> çiftçi ürün <u>II. alamayacağı</u> gibi aşısı sevgi olmayan eğitim de insan yetiştiremeyecektir. Öyleyse <u>III. sevgisiz</u> eğitim, <u>IV. beklenen</u> meyvesini veremeyecektir. <u>V. meyvesini</u></p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi niteleme görevinde <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı 'alamayacağı' sözcüğü '-acak' sıfat-fiil ekiyle çekimlenmiş olmasına rağmen herhangi bir ismi nitelemediği için adlaşmıştır, isim görevinde kullanılmıştır. Diğerleri sıfat-fiil veya türemiş sıfat olarak isim nitelemiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İsviçre'nin kışı başka, yazı başka güzel. Kışın, bembeyaz, <u>I. gıcır gıcır</u> bir kar dünyayı kaplamış; yazın her taraf alabildiğine yemyeşil ve her yerde <u>II. rengârenk</u> çiçekler fışkırır, Leman Gölü ise yaz kış mavi ile yeşil <u>III. arası</u>.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangileri niteleme görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Parçadaki 'gıcır gıcır' ikilemesi 'bir kar' söz grubunu; 'rengârenk' sözcüğü ise 'çiçekler' ismini nitelediği için sıfattır. Bu ikisi niteleme görevindedir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Gerçek bir ay <u>I. başlangıcı</u>. Hava sıcak ve boğucu. Bozkır, <u>II. yaz</u> mevsiminin geldiğinin farkında. Ankara'da yaz başlangıcı böyle <u>III. mattır</u>; kaldırımlardan, topraktan fışkırmaz <u>IV. sıcak</u>. Yayılır, havada durur, renkleri parlaklaştırır. Güneş, <u>V. uzun</u> süre yerine çakılı kalır.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangileri niteleme görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Parçadaki 'uzun' sözcüğü, 'süre' isminden hemen önce geldiği ve onunla ilgili nitelik bildirdiği için sıfattır (uzun süre). Fakat diğer sözcükler herhangi bir isimden önce gelip niteleme görevinde kullanılmadıkları için isimdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerin hangisinde belirsizlik sıfatı <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'kimi' sözcüğü bir isimden hemen önce gelmediği, ismin yerini tuttuğu için zamirdir. Diğer seçeneklerdeki 'onlarca insan', 'on on beş kişi', 'birçok göl', 'nice zamandır' tamlamalarında altı çizili türdeki sözcükler belgisiz sıfattır.",
    answers: [
      { text: "<u>Onlarca</u> insan bankanın önünde sıraya girmiş, maaşlarını çekmeyi bekliyordu.", ok: false },
      { text: "Öğretmenler <u>on on beş</u> kişiyi bir araya getirmiş, onları çalışma kampına almışlardı.", ok: false },
      { text: "Mağaranın içine girince gördük ki mağarada aynı zamanda <u>birçok</u> göl bulunuyordu.", ok: false },
      { text: "<u>Nice</u> zamandır memleketime gidemiyor, büyüklerimi ziyaret edemiyorum.", ok: false },
      { text: "Bu konuda <u>kimi</u> akademik kaynağa yönelir <u>kimi</u> de öğretmenlere danışır.", ok: true }
    ]
  },
  {
    text: "<p>Kılıç, eski dönem savaşlarında <u>I. kullanılmış</u> bir silahtır. <u>II. Savaşçı</u> bir toplum olarak bilinen Türkler, kılıçlarını baştan sona kendileri yapmışlardır. Demirden yapılan, kullanması <u>III. ayrı</u> bir güç ve yetenek isteyen, <u>IV. bire bir</u> karşılaşmalarda kullanılan kılıcın kültürümüzde <u>V. özel</u> bir yeri vardır.</p><p><b>Bu parçadaki numaralanmış altı çizili sıfatlardan hangisi, bir sıfat tamlamasını <u>nitelememektedir</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'bire bir (tıpkı)' sözcüğü, yalnızca 'karşılaşmalar' ismini nitelemektedir. Fakat diğer sözcükler 'bir' belgisiz sıfatı almış isimleri ('bir silah', 'bir toplum', 'bir güç', 'bir yer') niteledikleri için aslında yalnızca bir ismi değil, bir sıfat tamlamasını nitelemektedirler.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki dizelerin hangisinde ön ad <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğinde geçen 'nasıl' sözcüğü zarf (nasıl yaşayacağım), 'senden' sözcüğü ise zamirdir. Bu dizede sıfat (ön ad) yoktur. Diğerlerinde 'bir damla', 'bütün gemiciler', 'her gece', 'yarılanmamış rüzgâr' gibi sıfatlar vardır.",
    answers: [
      { text: "Gözümde bir damla su deniz olup taşıyor, Çöllerde kalmış gibi yanıyor, yanıyorum.", ok: false },
      { text: "Bütün gemicilerin ruhu bende yaşıyor; Başımdaki gökleri bir deniz sanıyorum.", ok: false },
      { text: "Nasıl yaşayacağım ey deniz, senden uzak? / Yanıp sönüyor gibi gözlerimde fenerin!", ok: true },
      { text: "Uyuyor mu limanda her gece sallanarak / Altından çivilerle çakılmış gemilerin?", ok: false },
      { text: "Sevmiyorum suyunda yıkanmamış rüzgârı; / Dalgaların gözümce tütüyor mavi, yeşil...", ok: false }
    ]
  },
  {
    text: "<p>Senaryonun kaynağı <u>I. olan</u> kitabı daha <u>II. iyi</u> <u>III. yansıtsın</u> diye filmin senaryosunda <u>IV. büyük</u> çaplı değil, <u>V. ufak</u> birkaç değişiklik yaptık.</p><p><b>Numaralanmış sözcüklerden hangisi tür bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "II numaralı 'iyi' sözcüğü 'yansıtsın' fiilini nitelediği için zarftır. I (olan kitap), III (büyük çap), IV (ufak değişiklik) sözcükleri ise ismi niteledikleri için sıfattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bugün şehir beni pırıl pırıl bir havayla karşılıyor. (II) Bu güzel havada yeni keşifler için otelden ayrılıyorum. (III) Burası için metropol denemez ama oldukça hareketli bir şehir. (IV) Bu şehrin en güzel tarafı eşsiz tarihî güzellikleri ve leziz yemekleri. (V) Tarih yolculuğu ise hemen şehrin girişinde sizleri karşılıyor.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede 'hemen' sözcüğü 'çok' anlamında bir zarftır. Cümlede sıfat görevi gören veya niteleme yapan bir sözcük yoktur ('tarih yolculuğu' ve 'şehrin girişi' isim tamlamalarıdır).",
    answers: [
      { text: "I. cümlede ikileme, niteleme sıfatı görevindedir.", ok: false },
      { text: "II. cümlede farklı türde sıfatlar bulunmaktadır.", ok: false },
      { text: "III. cümlede türemiş sıfat vardır.", ok: false },
      { text: "IV. cümlede birden fazla sıfat tamlaması vardır.", ok: false },
      { text: "V. cümlede sıfata yer verilmemiştir.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen altı çizili sözcüklerden hangisi cümlede sıfat görevinde <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'kolaydan zora doğru' ifadesinde 'kolaydan' sözcüğü '-dan' çıkma hâl eki almış bir isimdir. Çekim ekleri sıfatların niteleme/belirtme işlevlerini bozarak onları adlaştırır. Diğerlerindeki altı çizili sözcükler 'sözde özne', 'baş mimar', 'yazlık belde', 'candan insan' sıfat tamlaması kurmuştur.",
    answers: [
      { text: "Edilgen cümlelerde <u>sözde</u> özne dediğimiz, işten etkilenen nesnenin kendisidir.", ok: false },
      { text: "Aileler arasındaki tartışmaların <u>baş</u> mimarı nedir dersiniz: uzaktan kumanda!", ok: false },
      { text: "Bu yıl gittiğimiz <u>yazlık</u> beldede, orada yaşayan herkes dizmiş bahçeye tahtadan iskemlelerini.", ok: false },
      { text: "Etrafınız <u>candan</u> insanlarla dolsun taşsın ki her zaman kendiniz olabilin.", ok: false },
      { text: "Soru bankasını hazırlarken soruları <u>kolaydan</u> zora doğru düzenledim, beğendiniz mi?", ok: true }
    ]
  },
  {
    text: "<p>Müzik sadece <u>I. birtakım</u> hastalarda terapi aracı olarak kullanılmakla kalmayıp koruyucu olarak da insanlara <u>II. büyük</u> faydalar sağlayabilir. Örneğin kent kent <u>III. yaşantısındaki</u> stresli insan tipi için fabrikada işçilerin iş üretim miktarını artırabilmek için ve hatta hayvanların süt ve yumurta gibi üretimlerini artırabilmek için seçilecek <u>IV. uygun</u> müzik türleri <u>V. olumlu</u> etkiler yaratabilir.</p><p><b>Bu parçada altı çizili numaralanmış sıfatlardan hangisi yapıca ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'birtakım' sözcüğü 'bir' ve 'takım' sözcüklerinin birleşmesinden oluştuğu için birleşik yapılı sıfattır. Diğer sözcükler (büyük, yaşantısındaki, uygun, olumlu) yapım eki aldıkları için türemiş sıfattır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Her ne kadar, türkü tanımıyla ilgili alıntı yaptığımız <u>I. kimi sözlük</u>, kitap ve ansiklopedilerde halk şiiri nazım şekli olarak verilmişse de <u>II. genel kabule</u> ve <u>III. eldeki verilere</u> göre türkü, <u>IV. nazım şekli</u> olarak düşünülmemelidir. Çünkü mâni, koşma, gazel vb. nazım şekillerinden oluşturulmuş kimi şiirler türkü olarak <u>V. repertuvardaki yerini</u> alabilmektedir. Bu nedenle türkünün nazım şekli değil, bir tür olarak düşünülmesi gerekir.</p><p><b>Bu parçada altı çizili tamlamalardan hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "Tamlamalar tür bakımından ikiye ayrılır: isim ve sıfat tamlaması. IV numaralı 'nazım şekli' tamlamasında iyelik ekiyle anlamlı bir bütünlük oluştuğuna göre bu tamlama (belirtisiz) isim tamlamasıdır. Diğer tamlamalar (kimi sözlük, genel kabul vb.) sıfat tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sıfat tamlamalarında isim unsuruna \"-lı, -lık, -sız\" yapım eklerinden uygun olanı getirilerek yapılan sıfatlara kurallı birleşik sıfat denir.</p><p><b>Aşağıda verilen cümlelerin hangisinde bu durumu örnekleyecek bir sıfata yer <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "E seçeneğinde verilen durumu örnekleyen kurallı birleşik sıfata yer verilmemiştir. Cümlede 'cimri insanlar' sıfat tamlamasıdır ama basit yapılıdır. A'da 'uzun kol-lu giysi', B'de 'iki kişi-lik oda', C'de 'üç gün-lük dünya', D'de 'bir milyon-luk ev' ifadeleri kurallı birleşik sıfattır.",
    answers: [
      { text: "Artık Ankara'da iki mevsim yaşanıyor; <u>uzun kollu</u>, ince giysiler giyilemiyor maalesef.", ok: false },
      { text: "Bu yaz da <u>iki kişilik</u> bir oda kiralamışlar, yemeklerini kendileri yapmışlar.", ok: false },
      { text: "<u>Üç günlük</u> dünyada insanları kırmaya, keşkelerle yaşamaya değer mi?", ok: false },
      { text: "<u>Bir milyonluk</u> evde oturacağına, küçük bir evde otur da kalan paraya hayvan barınağı yaptır.", ok: false },
      { text: "Cimri insanlardan kaçının; parasını esirgeyen, koşulsuz sever mi seni?", ok: true }
    ]
  }
];