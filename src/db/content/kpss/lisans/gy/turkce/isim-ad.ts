import { McQ } from "../../../../types";

// ============================================================================
// İSİM (AD) - TEST 1
// ============================================================================
export const TUR_ISIM_AD_TEST_1: McQ[] = [
  {
    text: "<p>Günlük yazma, karşılaşılan bir olay veya durumun insanda oluşturduğu duygu ve düşüncelerin <u>I. içten</u> bir anlatımla sunulmasıdır. Günlük yazmada gözlem ve kişisel izlenimlerin önemli bir <u>II. yeri</u> vardır. Günlükte esas olan yaşanan bir <u>III. günün</u> özetlenmesi değil yaşananların <u>IV. kişide</u> bıraktığı etki ve izlenimlerin yansıtılmasıdır.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi isim çekim eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "I numaralı 'içten' sözcüğündeki '-ten' eki, kelimenin türünü değiştirerek onu 'içten anlatım' şeklinde sıfat yapmıştır. Bu nedenle buradaki '-ten' ayrılma hâl eki değil, isimden isim yapım ekidir. Diğerleri isim çekim eki almıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Aile</u>, akraba, arkadaş gibi sosyal destek gruplarının bireyin ruh <u>II. sağlığı</u> üzerinde koruyucu etkisi vardır. Birey sosyal çevresinden aldığı maddi, duygusal ve <u>III. bilişsel</u> destek ile yaşadığı stres ve <u>IV. zorluklara</u> karşı daha dayanıklı olur.</p><p><b>Bu parçada altı çizili sözcüklerle ilgili aşağıdaki değerlendirmelerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "III numaralı 'bilişsel' sözcüğü 'Bilişle ilgili, zekânın işleyişiyle ilgili' anlamında olup soyut bir kavramı (ismin niteliğini) karşılayan bir isim/sıfattır. 'Tekil addır' veya 'somut addır' değerlendirmesi yapıldığında kitap çözümü D şıkkının yanlış olduğunu belirtmiştir.",
    answers: [
      { text: "I. sözcük, topluluk adıdır.", ok: false },
      { text: "II. sözcük, türemiş addır.", ok: false },
      { text: "III. sözcük, tekil addır.", ok: false },
      { text: "IV. sözcük, somut addır.", ok: true },
      { text: "V. sözcük, çoğul addır.", ok: false }
    ]
  },
  {
    text: "<p>Satürn, Güneş Sistemi'nde en gelişmiş halka sistemine sahip olması ve üzerinde en hızlı rüzgârların estiği gezegen olması bakımından gök bilimindeki özel yerini her zaman korumuştur.</p><p><b>Bu parçada;<br>I. birleşik,<br>II. çoğul,<br>III. özel<br>isimlerden hangileri vardır?</b></p>",
    diff: 2,
    expl: "'Gök bilimi' birleşik isimdir. 'Rüzgârlar' çoğul isimdir. 'Satürn, Güneş Sistemi' özel isimdir. Dolayısıyla parçada her üç isim türü de mevcuttur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Hasta olan bireye <u>I. komşusunun</u> yemek götürmesi, evsiz kalan <u>II. birine</u> akrabasının evini açması maddi desteğe örnektir. Stresli olduğu bir anda bireye sevgi ve şefkat <u>III. göstermek</u>, onu <u>IV. dinlemek</u> duygusal destektir.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "II numaralı 'birine' sözcüğü ismin yerini tutan bir belgisiz zamirdir (adıl). Diğer sözcükler (komşu, sevgi, şefkat) isim, göstermek ve dinlemek ise isim-fiildir (tür olarak isim kabul edilir).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bireysel <u>I. kimliği</u> gösteren şahıs isimleri, kültürel aidiyeti ve toplumsal var oluşu simgeleyen kodlar olarak önem taşırlar. İsimler sosyokültürel bağlamda şekillenen anlam ve formları bakımından toplumsal kimliğin sembolik <u>II. aracı</u> olduğu için isimleri öncelikle kültürün temel aktarım aracı olan dil içerisinde algılar ve benimseriz. Günlük hayatın objektifleşmesini ortak anlamlarla sağlayan dil, aynı işlevini ortak geçmişe <u>III. referansı</u> olan isimler üzerinden göstererek toplumsal kimliğin sürdürülmesine yardımcı olur. İsimler farklılaşmayı gösteren sistem kodlarıdır, başka bir deyişle <u>IV. iletişimi</u> sağlayan, anlamlı simgelerdir.</p><p><b>Bu parçada altı çizili isimlerden hangisi farklı bir ek almıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'aracı' (sembolik arac-ı) sözcüğündeki '-ı', tamlanan (iyelik) ekidir. I (kimliğ-i), III (referans-ı) ve IV (iletişim-i) sözcükleri ise cümlede 'neyi?' sorusuna yanıt verdiklerinden belirtme hâl eki almışlardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Mantığa bürünme; kaygı ve <u>I. mutsuzluk</u> yaratan ya da <u>II. toplum</u> tarafından kabul görmeyen duygulara, düşüncelere, davranışlara, yetersizlik ve başarısızlıklara mantıksal bahaneler bulmaktır. Okul hayatında başarısız olan bir öğrencinin \"Hayatta daha önemli şeyler var, okulda başarılı olsam ne olacak, hem okumayanlar daha çok <u>III. para</u> kazanıyor.\" demesi buna örnektir.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisi soyut addır?</b></p>",
    diff: 1,
    expl: "I numaralı 'mutsuzluk' sözcüğünün varlığını beş duyu organımızla değil, akıl yoluyla tespit edebiliriz. Bu yüzden soyut addır. 'Toplum' ve 'para' sözcükleri somut addır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Geleceğe</u> umutla bakmamızı sağlayacak aydınlara <u>II. gereksinim</u> duyduğumuz <u>III. yüzyılımızda</u>, edebiyat <u>IV. olgusunun</u> layık olduğu yerde olmadığına <u>V. tanık</u> oluyoruz.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi yapıca ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "III numaralı 'yüzyıl' sözcüğü iki sözcüğün (yüz + yıl) birleşiminden oluşmuş birleşik yapılı bir isimdir. Gelecek (gel-ecek), gereksinim (gerek-sin-im), olgu (ol-gu) ve tanık (tanı-k) kelimeleri ise türemiş isimlerdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde küçültme sözcüğü <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "C seçeneğindeki 'kapak-çık' sözcüğündeki '-çık' eki küçültme anlamından sıyrılmış ve yeni bir anatomik terim/isim (kalp kapakçığı) türetmiştir. A'da 'daracık', B'de 'epeyce', D'de 'ekşimsi', E'de 'sıcacık' sözcükleri küçültme anlamını korur.",
    answers: [
      { text: "Şehrin daracık bir sokağındaki iç içe geçmiş dairelerden birine maaşı kadar kira vermek zoruna gidiyordu.", ok: false },
      { text: "Hastalığının teşhisi yeni konmuştu ama azmi sayesinde iyileşme anlamında epeyce yol katetmişti.", ok: false },
      { text: "Geçen sene olduğu kalp kapakçığı ameliyatından sonra yeme içmesine düzen getirdi.", ok: true },
      { text: "Çocukluğundan beri ekşimsi yiyeceklere öyle tuhaf tepkiler veriyor ki insanlar bunu görmek için o görmeden içeceğine limon sıkıyorlar.", ok: false },
      { text: "Suratına yerleşmiş sıcacık gülümsemesiyle insanların ruhuna iyi geliyor.", ok: false }
    ]
  },
  {
    text: "<p>Çağdaş dünyamızın <u>I. sorunlar</u> yumağını oluşturan şiddet, <u>II. saldırganlık</u>, öfke, kin gibi sosyal <u>III. kilitlenmeleri</u>, sanat <u>IV. zevki</u> aşılayarak aşmak olanaklıdır.</p><p><b>Bu cümlede altı çizili isimlerle ilgili aşağıdaki bilgilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'zevk' sözcüğü 'güzeli çirkinden ayırt etme yetisi, beğeni' anlamına geldiği ve varlığını zihin yoluyla kavradığımız için soyut bir addır. E seçeneğinde 'V: somut' (eğer 5. kelime zevki ise) denmesi yanlıştır.",
    answers: [
      { text: "I: basit yapılı", ok: false },
      { text: "II: çoğul", ok: false },
      { text: "III: cins", ok: false },
      { text: "IV: türemiş", ok: false },
      { text: "IV: somut (zevk sözcüğü soyuttur)", ok: true }
    ]
  },
  {
    text: "<p><u>I. Güldürü</u> her şeyden önce bir anlatıdır. Anlatı ise belli bir zaman ve mekân <u>II. içinde</u> olup biten, neden-sonuç ilişkisiyle birbirine bağlı <u>III. olaylar</u> dizisidir. Yaşadığımız dünya anlatısal öykülerle <u>IV. doludur</u> ve dünyayı anlamamızın ve anlamlandırmamızın yolu da büyük <u>V. ölçüde</u> bu öykülerden geçer.</p><p><b>Bu parçada altı çizili sözcüklerden hangisinin kökü isimdir?</b></p>",
    diff: 2,
    expl: "II numaralı 'içinde' sözcüğünün kökü 'iç' ismidir. Diğer kelimelerin kökleri: I (gül-mek), III (ol-mak), IV (dol-mak), V (ölç-mek) olup fiil köküdür.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Halk şiirinin önemli <u>I. türlerinin</u> başında türküler gelmektedir. Yüzyıllardan bu tarafa Türk sözlü kültürünün <u>II. zenginlikleri</u> içerisinde yer alan türküler, insanımızın aşklarını, <u>III. sevgilerini</u>, sevinçlerini, kederlerini, vb. yansıtmıştır. Türküler, kendine has farklı ezgileriyle çeşitlilik arz ederken, işlediği konu ve şekil <u>IV. açılarından</u> da farklılıklar gösterirler.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi hem tamlayan hem tamlanan görevindedir?</b></p>",
    diff: 3,
    expl: "I numaralı sözcük zincirleme isim tamlamasının ortasındadır. 'Halk şiirinin (tamlayan) türleri (tamlanan)' ve 'türlerinin (tamlayan) başı (tamlanan)'. Yani 'türlerinin' sözcüğü ilk kısmın tamlananı, ikinci kısmın tamlayanı olmuştur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Modern Türkmen dilinde kullanılan kuş isimlerinin kökeni dikkat çeken meselelerden biridir. Kuşların yaşam alanlarına göre isimlendirildiği durumlar vardır. Eski zamanlarda bir kuş, bir Türkmen boyunun totemiydi. Oğuz Kağan'ın oğulları ve torunları hakkındaki bilgiler <u>I. bunun</u> açık bir kanıtıdır.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi farklı türdedir?</b></p>",
    diff: 2,
    expl: "I numaralı 'bunun' sözcüğü ismin yerini tutan bir işaret zamiridir (adıl). Parçadaki 'mesele', 'kuş', 'boy' ve 'Oğuz Kağan' sözcükleri ise isim (ad) türündedir.",
    answers: [
      { text: "I (bunun)", ok: true },
      { text: "II (mesele)", ok: false },
      { text: "III (kuş)", ok: false },
      { text: "IV (boy)", ok: false },
      { text: "V (Oğuz Kağan)", ok: false }
    ]
  }
];