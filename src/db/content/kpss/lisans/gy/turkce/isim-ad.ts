import { McQ } from "../../../../types";

// ============================================================================
// İSİM (AD) - TEST 1
// ============================================================================
export const TUR_ISIM_AD_TEST_1: McQ[] = [
  {
    text: "<p>Günlük yazma, karşılaşılan bir olay veya durumun <u>I. insanda</u> oluşturduğu duygu ve düşüncelerin <u>II. içten</u> bir anlatımla sunulmasıdır. Günlük yazmada gözlem ve kişisel izlenimlerin önemli bir <u>III. yeri</u> vardır. Günlükte esas olan yaşanan bir <u>IV. günün</u> özetlenmesi değil yaşananların <u>V. kişide</u> bıraktığı etki ve izlenimlerin yansıtılmasıdır.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi isim çekim eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "II numaralı 'içten' sözcüğündeki '-ten' eki, 'iç' sözcüğünün anlamını ve türünü değiştirdiği için yapım ekidir, çıkma eki değildir. I numaralı 'insanda' bulunma hâl eki, III numaralı 'yeri' iyelik eki, IV numaralı 'günün' ilgi eki, V numaralı 'kişide' bulunma hâl eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Aile</u>, akraba, arkadaş gibi sosyal destek gruplarının bireyin ruh <u>II. sağlığı</u> üzerinde koruyucu etkisi vardır. <u>III. Birey</u> sosyal çevresinden aldığı maddi, duygusal ve <u>IV. bilişsel</u> destek ile yaşadığı stres ve <u>V. zorluklara</u> karşı daha dayanıklı olur.</p><p><b>Bu parçada altı çizili sözcüklerle ilgili aşağıdaki değerlendirmelerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'bilişsel' sözcüğü 'Bilişle ilgili, zekânın işleyişiyle ilgili' anlamında olup soyut bir addır. Bu nedenle 'somut addır' değerlendirmesi yanlıştır.",
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
    text: "<p>Hasta olan bireye <u>I. komşusunun</u> yemek <u>II. götürmesi</u>, evsiz kalan <u>III. birine</u> akrabasının evini açması maddi desteğe örnektir. Stresli olduğu bir anda <u>IV. bireye</u> sevgi ve şefkat göstermek, onu <u>V. dinlemek</u> duygusal destektir.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "III numaralı 'birine' sözcüğü zamirdir (adıl), diğerleri isimdir. İsim-fiiller (götürmesi, dinlemek) bir ismi nitelemediğinde tür olarak isim kabul edilir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bireysel <u>I. kimliği</u> gösteren şahıs isimleri, kültürel <u>II. aidiyeti</u> ve toplumsal var oluşu simgeleyen kodlar olarak önem taşırlar. İsimler sosyokültürel bağlamda şekillenen anlam ve formları bakımından toplumsal kimliğin sembolik <u>III. aracı</u> olduğu için isimleri öncelikle kültürün temel aktarım aracı olan dil içerisinde algılar ve benimseriz. Günlük hayatın objektifleşmesini ortak anlamlarla sağlayan dil, aynı işlevini ortak geçmişe <u>IV. referansı</u> olan isimler üzerinden göstererek toplumsal kimliğin sürdürülmesine yardımcı olur. İsimler farklılaşmayı gösteren sistem kodlarıdır, başka bir deyişle <u>V. iletişimi</u> sağlayan, anlamlı simgelerdir. Kültürel bir sembol olarak isimler, hem yatay (toplumsal) hem de dikey (zaman) sistem sınırlarını gözeten, sosyal çevrede iletişim sağlayan araçlar olarak işlevseldir.</p><p><b>Bu parçada altı çizili isimlerden hangisi farklı bir ek almıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'aracı' sözcüğü 'toplumsal kimliğin sembolik aracı' ifadesinde tamlanan görevinde olduğu için aldığı ek tamlanan (iyelik) ekidir. Diğer sözcükler 'neyi?' sorusuna yanıt verdikleri için belirtme hâl eki almıştır (kimliği, aidiyeti, referansı, iletişimi).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Mantığa bürünme; kaygı ve <u>I. mutsuzluk</u> yaratan ya da <u>II. toplum</u> tarafından kabul görmeyen duygulara, düşüncelere, davranışlara, yetersizlik ve başarısızlıklara <u>III. mantıksal</u> bahaneler bulmaktır. <u>IV. Okul</u> hayatında başarısız olan bir öğrencinin \"Hayatta daha önemli şeyler var, okulda başarılı olsam ne olacak, hem okumayanlar daha çok <u>V. para</u> kazanıyor.\" demesi buna örnektir.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisi soyut addır?</b></p>",
    diff: 1,
    expl: "I numaralı 'mutsuzluk' sözcüğünün varlığı beş duyu organıyla değil, akıl yoluyla tespit edilebilir ve cümlede isim görevindedir; bu yüzden soyut addır. 'Toplum, okul ve para' somut addır. III numaralı 'mantıksal' sözcüğü de soyuttur fakat 'bahane' ismini nitelediği için sıfat görevindedir.",
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
    text: "<p>Çağdaş <u>I. dünyamızın</u> <u>II. sorunlar</u> yumağını oluşturan <u>III. şiddet</u>, <u>IV. saldırganlık</u>, öfke, kin gibi sosyal kilitlenmeleri, sanat <u>V. zevki</u> aşılayarak aşmak olanaklıdır.</p><p><b>Bu cümlede altı çizili isimlerle ilgili aşağıdaki bilgilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'zevk' sözcüğü 'güzeli çirkinden ayırt etme yetisi, beğeni' anlamına geldiği ve varlığını zihin yoluyla tespit edebildiğimiz için soyut bir addır. Bu nedenle 'V: somut' bilgisi yanlıştır.",
    answers: [
      { text: "I: basit yapılı", ok: false },
      { text: "II: çoğul", ok: false },
      { text: "III: cins", ok: false },
      { text: "IV: türemiş", ok: false },
      { text: "V: somut", ok: true }
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
    text: "<p>Halk <u>I. şiirinin</u> önemli türlerinin <u>II. başında</u> türküler gelmektedir. Yüzyıllardan bu tarafa Türk sözlü kültürünün <u>III. zenginlikleri</u> içerisinde yer alan türküler, insanımızın aşklarını, <u>IV. sevgilerini</u>, sevinçlerini, kederlerini, vb. yansıtmıştır. Türküler, kendine has farklı ezgileriyle çeşitlilik arz ederken, işlediği konu ve şekil <u>V. açılarından</u> da farklılıklar gösterirler.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi hem tamlayan hem tamlanan görevindedir?</b></p>",
    diff: 3,
    expl: "'Halk şiirinin önemli türlerinin' tamlamasında 'şiir' sözcüğü, 'halk' sözcüğünün tamlananı, 'tür' sözcüğünün tamlayanıdır. II (baş-ı), III (zenginlikler-i), IV (sevgiler-i) ve V (açılar-ı) sözcükleri yalnızca tamlanan görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Modern Türkmen dilinde kullanılan kuş isimlerinin kökeni dikkat çeken <u>I. meselelerden</u> biridir. <u>II. Kuşların</u> yaşam alanlarına göre isimlendirildiği durumlar vardır. Eski zamanlarda bir kuş, bir Türkmen <u>III. boyunun</u> totemiydi. <u>IV. Oğuz Kağan'ın</u> oğulları ve torunları hakkındaki bilgiler <u>V. bunun</u> açık bir kanıtıdır.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi farklı türdedir?</b></p>",
    diff: 2,
    expl: "V numaralı 'bunun' sözcüğü 'eski zamanlarda bir kuşun, bir Türkmen boyunun totemi olduğunun' ifadesinin yerini tutan bir zamirdir. 'Mesele', 'kuş', 'boy' ve 'Oğuz Kağan' sözcükleri ise birer isimdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  }
];