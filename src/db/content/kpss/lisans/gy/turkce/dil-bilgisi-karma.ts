import { McQ } from "../../../../types";

// ============================================================================
// DİL BİLGİSİ (KARMA) - TEST 1
// ============================================================================
export const TUR_DIL_BILGISI_KARMA_TEST_1: McQ[] = [
  {
    text: "<p>“Ey Türk milleti!<br/>Üstte mavi gök çökmedikçe,<br/>Altta yağız yer delinmedikçe<br/>Senin ilini ve töreni kim bozabilir!”</p><p><b>Bu dörtlükte aşağıdakilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Dörtlükte zamir (senin, kim), ünlem (Ey), sıfat (mavi, yağız) ve bağlaç (ve) mevcuttur. Ancak edat (ilgeç) örneği bulunmamaktadır. 'Çökmedikçe' ve 'delinmedikçe' sözcükleri zarf-fiildir.",
    answers: [
      { text: "Zamir", ok: false },
      { text: "Ünlem", ok: false },
      { text: "Bağlaç", ok: false },
      { text: "Sıfat", ok: false },
      { text: "Edat", ok: true }
    ]
  },
  {
    text: "<p>Köşede <u>I. rahat</u> bir <u>II. koltuk gibi</u><br/><u>III. Her zaman</u> beni bekleyen<br/>İçime gömülüp<br/><u>IV. Işıklı</u> bir günün orta <u>V. yerinde</u> uyumak!</p><p><b>Bu dörtlükte altı çizili sözler görevleri bakımından ikişerli eşleştirildiğinde hangisi <u>dışarıda</u> kalır?</b></p>",
    diff: 3,
    expl: "I (rahat) ve IV (ışıklı) sözcükleri ismi niteleyen sıfatlardır. II (koltuk gibi) durum zarfı, III (her zaman) zaman zarfıdır. V numaralı 'yerinde' sözcüğü ise isim çekim eki almış bir isimdir ve dışarıda kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Gece uykusundan <u>I. henüz</u> uyanmamış şehir, <u>II. lapa lapa</u> yağan karların altında bembeyazdı. Kar aracının koca tekerlekleri, <u>III. bütün</u> gece yığılmış karları <u>IV. zorlukla</u> yarıyordu. Arabacı köşeyi <u>V. dönüp</u> üç katlı evin kaldırımına yanaştı.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi görev bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I (henüz), II (lapa lapa), IV (zorlukla) ve V (dönüp) sözcükleri eylemi veya eylemsiyi niteleyen zarf görevindedir. III numaralı 'bütün' sözcüğü ise 'gece' ismini niteleyen bir belgisiz sıfattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Hem sen hem başkası olmaktır oynamak<br/>İnsanlığı kendinde bulmaktır oynamak<br/>Hayatı şeklin büyüsüyle avlayıp<br/>Evrende coşkuyla yer almaktır oynamak.</p><p><b>Bu dörtlükte;<br/>I. zamir,<br/>II. isim,<br/>III. edat<br/>türlerinin hangilerinden <u>birden fazla</u> vardır?</b></p>",
    diff: 3,
    expl: "Zamirler: sen (kişi), başkası (belgisiz), kendinde (dönüşlülük). İsimler: oynamak (isim-fiil), insanlık, hayat, şeklin, evren, coşku. Edatlar: büyüsüyle (ile), coşkuyla (ile). Her üç türden de birden fazla örnek vardır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Yollar benimmiş gibilerden<br/>Durmaklı yürümekli bir gece<br/>Kahvenin etrafında şiirler uçuşur<br/>Herkes bir şeyler bırakır çarşıların içinde</p><p><b>Bu dörtlükte aşağıdakilerden hangisi <u>yer almamaktadır</u>?</b></p>",
    diff: 3,
    expl: "Dörtlükte 'uçuşur' (işteş fiil), 'benim-(i)miş' (ek-fiil), 'çarşıların içi' (isim tamlaması) ve 'ben, herkes, şey' (farklı türde zamirler) vardır. Ancak eylemi niteleyen bir zarf bulunmamaktadır.",
    answers: [
      { text: "İşteş çatılı fiil", ok: false },
      { text: "Ek fiil", ok: false },
      { text: "Zarf", ok: true },
      { text: "İsim tamlaması", ok: false },
      { text: "Farklı türde zamirler", ok: false }
    ]
  },
  {
    text: "<p>(I) Gerçek bir ay başlangıcı. (II) Yazın geldiği ortada. (III) Hava sıcak ama boğucu değil. (IV) Bozkır, yazın geldiğinin farkında. (V) Ankara'da yaz başlangıcı böyle mattır; kaldırımlardan, topraktan fışkırmaz sıcak.</p><p><b>Bu parçada numaralanmış cümlelerden hangisinin yüklemi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, III ve IV numaralı cümlelerin yüklemleri isim soylu sözcüklerdir. V numaralı cümle sıralı bir cümledir ve sonundaki 'fışkırmaz' sözcüğü bir fiildir. Bu yüzden yüklemin türü fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>• Üstadım efendim, askerliğim sırasında -yanılmıyorsam- ayak üstü şöyle tanışmıştık, konuşmamıza bile fırsat olmamıştı.<br/>• Aslında bu mektubu yazma cesaretini o tanışmadan değil, çeşitli yazılarınızın ve kitaplarınızın bendeki sağlam ve zengin izleniminden alıyorum.<br/>• Özellikle klasik edebiyatımız üzerinde ne zaman kafa yoracak olsam hep aklıma siz gelirsiniz, her defasında size yazmayı düşünürüm, her defasında da şu ya da bu çekingenlikten vazgeçerim.</p><p><b>Bu cümlelerin tamamında;<br/>I. bağlaç,<br/>II. zarf,<br/>III. edat<br/>türlerinden hangileri bulunmaktadır?</b></p>",
    diff: 3,
    expl: "Birinci cümlede 'bile' (bağlaç) ve 'şöyle' (zarf); ikinci cümlede 've' (bağlaç) ve 'aslında' (zarf); üçüncü cümlede 'da, ya da' (bağlaç) ve 'ne zaman, hep' (zarf) vardır. Üç cümlede de ortak olan bağlaç ve zarftır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p>Çevresine kulak vermeyen, <u>kendi çemberini</u> çevirmekte direnen bir şair büyük bir yanılgının içindedir.</p><p><b>Bu cümledeki altı çizili tamlamayla özdeş tamlama aşağıdaki cümlelerin hangisinde vardır?</b></p>",
    diff: 3,
    expl: "Öncüldeki 'kendi çemberi' (ne çemberi?) bir belirtisiz isim tamlamasıdır. C seçeneğindeki 'şairler sınıfı' (ne sınıfı?) tamlaması da belirtisiz isim tamlamasıdır.",
    answers: [
      { text: "O, büyük umutlar uyandıran ama sonrasında bu umutlara karşılık veremeyen bir şair oldu.", ok: false },
      { text: "Şairin kitabında basit şiirlerin de bulunduğunu belirtmek zorundayım.", ok: false },
      { text: "Onu, kendine özgü bir yol tutturan şairler sınıfında gördüm her zaman.", ok: true },
      { text: "Şair, şiirde ahenge gereken önemi vermediği için şiiri uzun soluklu olamadı.", ok: false },
      { text: "Şair, hayallerini herkesten farklı bir şekilde kaleme alan kişidir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Modern dünyada çok az bitki zeytin kadar insanların ilgisini çekebilmiş ve <u>ilgi odağı</u> olmaya devam etmiştir. (II) Ayrıca hiçbir coğrafyada zeytinin tarihi ve <u>kültürel izlerini</u> Akdeniz'de olduğu kadar net bir şekilde takip edebilmek mümkün olmamıştır. (III) Antik Yunan'da sporcuların, hekimlerin ve devlet adamlarının kutsal kabul ettiği bir bitki olan zeytinin yaprakları aynı zamanda zafer, akıl ve <u>barış simgesi</u> olmuştur. (IV) Nuh'un gemisine ağzında bir <u>zeytin dalıyla</u> dönen güvercin, sel felaketinin bittiğinin habercisi sayılmıştır. (V) Zeytinyağı birçok dinde <u>vaftiz törenlerinde</u> kutsal ateş ve lambalara yağ olarak kullanılmıştır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde altı çizili tamlama tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I, III, IV ve V numaralı cümlelerdeki altı çizili tamlamalar belirtisiz isim tamlamasıdır (ilgi odağı, barış simgesi vb.). II numaralı 'kültürel izler' tamlamasında 'kültürel' sözcüğü sıfat olduğu için bu bir sıfat tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Modern dünyada çok az bitki zeytin kadar insanların ilgisini çekebilmiş ve ilgi odağı olmaya devam etmiştir. (II) Ayrıca hiçbir coğrafyada zeytinin tarihi ve kültürel izlerini Akdeniz'de olduğu kadar net bir şekilde takip edebilmek mümkün olmamıştır. (III) Antik Yunan'da sporcuların, hekimlerin ve devlet adamlarının kutsal kabul ettiği bir bitki olan zeytinin yaprakları aynı zamanda zafer, akıl ve barış simgesi olmuştur. (IV) Nuh'un gemisine ağzında bir zeytin dalıyla dönen güvercin, sel felaketinin bittiğinin habercisi sayılmıştır. (V) Zeytinyağı birçok dinde vaftiz törenlerinde kutsal ateş ve lambalara yağ olarak kullanılmıştır.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi yapıca ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede 'çekebilmiş' ve 'devam etmiştir' olmak üzere iki yüklem vardır ve bağlaçla bağlandığı için bağlı cümledir. Diğer cümleler (II, III, IV, V) tek yüklemli olup içinde fiilimsi barındırdıkları için girişik birleşik cümledir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Türk maden sanatı içinde Büyük Selçuklu Dönemi, gerek yapım tekniği gerek form <u>I. bakımından</u> öncü <u>II. tiplerin</u> ortaya çıktığı bir dönemdir. Büyük Selçukluların maden sanatı konusunda <u>III. verdikleri</u> ürünler, dünya <u>IV. müzelerindeki</u> koleksiyonlar <u>V. arasında</u> önde gelen örneklerdir.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi <u>birden çok</u> çekim eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'verdikleri' sözcüğü 'onların verdik-leri' şeklinde 3. çoğul iyelik eki almıştır; ancak bu sözcükte iyelik eki dışında başka bir çekim eki yoktur. Diğerlerinde ise hem iyelik hem de hâl ekleri mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat ve toplum ilişkisi, zaman üstü bir değer olarak yerini bugün de korumaktadır. Yazar, okur ve edebiyat evreni, toplumların gelişmişlik ve refah düzeyinin en belirgin göstergeleridir.</p><p><b>Bu parçada kimi sözcüklerin yapısıyla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'düzeyinin' sözcüğünün kökü 'düz' ismidir ancak 'düz-ey' şeklinde isimden isim yapım eki almıştır. Fiilden isim yapma eki aldığı bilgisi yanlıştır.",
    answers: [
      { text: "“ilişkisi” sözcüğünde yapım ve çekim eki bulunmaktadır.", ok: false },
      { text: "“bugün” sözcüğü birleşik yapılı zarftır.", ok: false },
      { text: "“gelişmişlik” sözcüğünde farklı işlevde yapım ekleri bulunmaktadır.", ok: false },
      { text: "“düzeyinin” sözcüğünde fiilden isim yapma eki vardır.", ok: true },
      { text: "“göstergeleridir” sözcüğünde birden fazla çekim eki vardır.", ok: false }
    ]
  }
];

// ============================================================================
// DİL BİLGİSİ (KARMA) TEST 2
// ============================================================================
export const TUR_DIL_BILGISI_KARMA_TEST_2: McQ[] = [
  {
    text: "<p>Sonbahar aylarında kendisiyle birlikte tenha Yakacık kırlarında al meyveli koca yemiş fidanları arasında dolaştığımız o günleri özlemle anıyorum.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "'Sonbahar aylarında' tamlayanı birleşik isim olan belirtisiz isim tamlaması, 'özlemle' zarf görevinde edat grubu, 'al meyveli' ve 'koca yemiş' kurallı birleşik sıfat, 'dolaştığımız o günleri' sıfat-fiil öbeğidir. Cümlede yalnızca 'kendi' dönüşlülük zamiri vardır; farklı türde zamir yoktur.",
    answers: [
      { text: "Tamlayanı birleşik isim olan belirtisiz isim tamlaması", ok: false },
      { text: "Zarf görevinde kullanılan edat grubu", ok: false },
      { text: "Kurallı bileşik sıfat", ok: false },
      { text: "Sıfat-fiil öbeği", ok: false },
      { text: "Farklı türde zamirler", ok: true }
    ]
  },
  {
    text: "<p>“Nur topu gibi bahar yoğuruluyor şimdi bizim memlekette.”</p><p><b>Bu cümleyle ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Cümlede 'Nur topu gibi' ifadesi bahar ismini niteleyen bir sıfat görevindedir (Edat öbeği sıfat görevindedir). 'Nur topu' ise belirtisiz isim tamlamasıdır. Ancak 'Nur topu' öbeği hem niteleme hem belirtme sıfatı almış bir isim barındırmaz.",
    answers: [
      { text: "Edat öbeği sıfat görevindedir.", ok: false },
      { text: "Bir isim hem niteleme hem de belirtme sıfatı almıştır.", ok: true },
      { text: "Belirtisiz isim tamlaması edat öbeği oluşturmuştur.", ok: false },
      { text: "Sözde özne tamlama grubudur.", ok: false },
      { text: "İyelik grubu yer tamlayıcısıdır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde isim tamlaması diğerlerinden farklı bir ögede yer almaktadır?</b></p>",
    diff: 3,
    expl: "A, B, D ve E seçeneklerinde isim tamlamaları özne görevindeyken, C seçeneğinde 'sezgi dehası' belirtisiz isim tamlaması 'olduğunu sanıyordum' yan yargısının nesnesi (belirtili nesne grubu) içerisinde yer almaktadır.",
    answers: [
      { text: "Hiç tükenmeyecek gibi görünen mavinin en ağır tonu her yeri sarmıştı.", ok: false },
      { text: "Pencerenin pervazından görünen ağacın dallarının gölgesi içini ürpertiyordu.", ok: false },
      { text: "Onun anlattıklarını kavrayabilecek bir sezgi dehası olduğunu sanıyordum.", ok: true },
      { text: "O eski evde tatil günleri âdeta bir şenlik olurdu.", ok: false },
      { text: "Ocağın başına asılı duran sisli kandilin gölgesi evdekileri mest etti.", ok: false }
    ]
  },
  {
    text: "<p>“Yerden yedi kat arşa kanatlandık o hızla.”</p><p><b>Yukarıda verilen cümle ile ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Yüklem olan 'kanatlandık' sözcüğü 'kanat' isminden 'kanat-lan-mak' şeklinde isimden fiil yapım eki almıştır. 'Fiilden isim yapım eki almıştır' ifadesi yanlıştır.",
    answers: [
      { text: "Yüklem fiilden isim yapım eki almıştır.", ok: true },
      { text: "Dolaylı tümleç sıfat tamlamasıdır.", ok: false },
      { text: "Zarf tümlecinde edat öbeği vardır.", ok: false },
      { text: "Yüklemi, birinci çoğul kişi eki ile çekimlenmiştir.", ok: false },
      { text: "Yapısı bakımından basit bir fiil cümlesidir.", ok: false }
    ]
  },
  {
    text: "<p>“Bu yazarın çok sevilen çalışmaları, bu eserde toplanmıştı.”</p><p><b>Bu cümleyle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Cümlenin yüklemi 'toplanmıştı' (topla-n-mak), işi yapan belli olmadığı için edilgen çatılıdır. Dönüşlü ve geçişsiz fiil özelliği bir arada yüklem için söylenemez (edilgenlik baskındır).",
    answers: [
      { text: "Edilgen çatılı fiilimsi tamlayan görevindedir.", ok: false },
      { text: "Tamlananı isim-fiil olan sıfat tamlaması vardır.", ok: false },
      { text: "Hem tamlayanı hem tamlananı sıfat almış belirtili isim tamlaması vardır.", ok: false },
      { text: "Zarf, fiilimsiyi derecelendirme görevinde kullanılmıştır.", ok: false },
      { text: "Yüklem dönüşlü - geçişsiz çatı özelliği göstermektedir.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde zincirleme ad tamlaması vardır?</b></p>",
    diff: 2,
    expl: "B seçeneğinde 'Necip Fazıl Kısakürek'in Türk edebiyatı tarihindeki' kısmında 'Türk edebiyatı tarihi' bir zincirleme isim tamlamasıdır.",
    answers: [
      { text: "Modern romanın kurucusu sayılan Halit Ziya Uşaklıgil romanlarında seçkin insanlara yer verir.", ok: false },
      { text: "Necip Fazıl Kısakürek'in Türk edebiyatı tarihinde ayrı bir yer vardır.", ok: true },
      { text: "Neşat Ertaş her daim kültürel değerlerimizi korumuş ve onlara sahip çıkmıştır.", ok: false },
      { text: "Dün, bugün, yarın çatışması; modernist romanlarda vazgeçilmez bir öge olarak var olmuştur.", ok: false },
      { text: "Toplumcu gerçekçi yazarlarımız, halkın sorunlarına duyarsız kalmamış, ömürlerini bu uğurda feda etmişlerdir.", ok: false }
    ]
  },
  {
    text: "<p>Günlük hayatta kullandığımız her cümle, yaşadığımız durumlara göre anlamlanır; ya şahlanır ya da gecenin karanlığında yok olur. Seni seviyorum cümlesi herkesin dünyasında işte bu sebepten farklı pencerelerden dışarıyı izler.</p><p><b>Bu metinde aşağıdakilerden hangisine <u>yer verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "Metinde zincirleme isim tamlaması (en az üç ismin birbirine bağlanması) örneği bulunmamaktadır.",
    answers: [
      { text: "Belirtili isim tamlamasına", ok: false },
      { text: "Tamlayanı cümle biçiminde olan isim tamlamasına", ok: false },
      { text: "Birden fazla sıfat tamlamasına", ok: false },
      { text: "Tamlayanı belgisiz zamir olan belirtili isim tamlamasına", ok: false },
      { text: "Zincirleme isim tamlamasına", ok: true }
    ]
  },
  {
    text: "<p>Bir mektup bir telgraf alındısı değil<br/>Unutulmuş bir sevdadır kapısını çalan<br/>Ve sevimsiz bir terlik gibi duran odan<br/>Kimse artık bir şey giymek istemiyor</p><p><b>Bu metin için aşağıdakilerin hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Dizelerin hiçbirinde tamlayanı ve tamlananı ek almış bir 'belirtili isim tamlaması' yer almamaktadır.",
    answers: [
      { text: "Belirtisiz isim tamlaması vardır.", ok: false },
      { text: "Bütün dizelerde sıfat tamlaması yer almaktadır.", ok: false },
      { text: "Hem niteleme hem belirtme sıfatı almış sözcük yer alır.", ok: false },
      { text: "Tamlayanı düşmüş isim tamlaması bulunmaktadır.", ok: false },
      { text: "Belirtili isim tamlaması yer alır.", ok: true }
    ]
  },
  {
    text: "<p>Yaptıklarında sevgi, dostluk, korku, ölüm, bireyin yalnızlığı inanç ve baskı ikilemi; başkaldırma ve boyun eğme gibi temaları özgün bir söz dizimiyle yansıtır. “Göçmüş Kediler Bahçesi”nde acılar içinde bulunan kişisini gizemli dünyasında yücelterek anlatır.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde isimlerin birbirine bağlandığı bir zincirleme isim tamlaması örneği yoktur. 'İnanç ve baskı ikilemi' ortak tamlananlı belirtisiz tamlamadır.",
    answers: [
      { text: "Tamlananı ortak belirtisiz isim tamlaması", ok: false },
      { text: "Zincirleme isim tamlaması", ok: true },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Tamlayanı söz öbeği olan sıfat tamlaması", ok: false },
      { text: "Tamlayanı düşmüş isim tamlaması", ok: false }
    ]
  },
  {
    text: "<p>Erzurum, Türk tarihine, Türk coğrafyasına 1945 metreden bakar. Bu <u>I. şehrin</u> macerası düşünülürse bu yükseklik daima göz önünde tutulması gereken bir özelliktir. Malazgirt Zaferi'nin açtığı gedikten yeni vatana giren cetlerimizin ilk fethettikleri büyük merkezî şehirlerden <u>II. biridir</u>. Tarihimizin ikinci dönüm <u>III. noktasında</u>, Millî Mücadele'nin <u>IV. temeli</u> gene Erzurum'da atılır. Her şeye rağmen hür ve müstakil yaşamak <u>V. iradesi</u> ilkin bu kartal yuvasında kanatlanır.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi hem tamlayan hem tamlanan durumundadır?</b></p>",
    diff: 3,
    expl: "I numaralı 'şehrin' sözcüğü 'bu' işaret sıfatıyla belirtildiği için 'bu şehir' sıfat tamlamasının tamlananı, 'şehrin macerası' belirtili isim tamlamasının ise tamlayanıdır. Diğer sözcükler isim tamlamalarının tamlananı durumundadır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yazar karakterlerin <u>I. yaşamlarını</u> siyasal ve sosyal olayların <u>II. belirlediği</u> yeni romanında; bir ülkenin <u>III. geçmişini</u>, bir adada geçen <u>IV. olayları</u> kuş <u>V. bakışı</u> olarak ele alıyor.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklerden hangisi bir sıfat tamlamasının tamlananıdır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'olayları' sözcüğü 'bir adada geçen olayları' sıfat tamlamasının tamlananıdır. I (karakterlerin yaşamları), II (olayların belirlediği), III (ülkenin geçmişi) ve V (kuş bakışı) ise isim tamlamalarının tamlananıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Geçmiş dönemlerde uyku, insanların dinlendikleri, <u>I. günün yorgunluğunu</u> silmek üzere geçirdikleri bir <u>II. zaman dilimi</u> olarak kabul edilirdi. Günümüzde ise uykunun, <u>III. kendi içinde</u> bir bütünlük oluşturacak şekilde organize bir durum olduğu <u>IV. bilim insanlarınca</u> kabul edilmektedir. Uykunun, sinir sisteminin <u>V. aktif katılımı</u> ile ortaya çıkan, belirli bir amaca hizmet eden bir dönem olduğu kabul edilmektedir.</p><p><b>Bu parçada numaralanmış tamlamalardan hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "V numaralı 'aktif katılım' bir sıfat tamlamasıdır. Diğer numaralı öbekler ise belirtili veya belirtisiz isim tamlamalarıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  }
];

// ============================================================================
// DİL BİLGİSİ (KARMA) - TEST 3
// ============================================================================
export const TUR_DIL_BILGISI_KARMA_TEST_3: McQ[] = [
  {
    text: "<p>“Beni bohça gibi sırtına bağlar, kızgın güneşin altında dolaştırır ve hurma ağaçlarının tepesine çıkarırmış.”</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Cümlede fiilimsi (isim-fiil, sıfat-fiil veya zarf-fiil) eki almış bir sözcük bulunmamaktadır. 'Kızgın' niteleme sıfatı, 'beni' kişi zamiri, 'gibi' ilgeci ve 've' bağlacı mevcuttur.",
    answers: [
      { text: "Niteleme sıfatı", ok: false },
      { text: "Kişi zamiri", ok: false },
      { text: "İlgeç", ok: false },
      { text: "Fiilimsi", ok: true },
      { text: "Bağlaç", ok: false }
    ]
  },
  {
    text: "<p>(I) Dehlizin sonlarında görünmeden açılıp kapanan bir kapının gıcırtısı. (II) Muşambalara sürtünen bir ayak sesi. (III) Köpüklenerek uçan ve uzaklarda kaybolan bir gömlek. (IV) Kırık dökük pencerenin önünde çoktan solmuş fesleğenler. (V) Çoktan unutularak terk edilmiş bu evin ağlamaklı bakışını resmediyordu.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde tüm fiilimsi türlerine yer verilmiştir?</b></p>",
    diff: 3,
    expl: "V. cümlede 'unutularak' (zarf-fiil), 'terk edilmiş' (sıfat-fiil) ve 'bakışını' (isim-fiil) sözcükleri ile üç fiilimsi türü de örneklendiği için cevap E'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>“Kasabanın doğuya meyilli sokaklarında sağlı sollu ırmaklar peyda olmuştu.”</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Cümlede isimden türemiş bir fiil (peyda olmak yardımcı eylemle kurulmuştur) bulunmamaktadır. 'Sağlı sollu' sıfat görevinde ikilemedir.",
    answers: [
      { text: "Fiilden türemiş isim", ok: false },
      { text: "Sıfat görevinde ikileme", ok: false },
      { text: "İsimden türemiş fiil", ok: true },
      { text: "Birleşik fiil", ok: false },
      { text: "İyelik ve hâl eki almış isim", ok: false }
    ]
  },
  {
    text: "<p>Surların önünde kemerlerinde hâlâ o ilk adımdan bir akış saklayan kapılar sapasağlam duruyordu.</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Cümlede 'o' (işaret sıfatı), 'bir' (belgisiz sıfat), 'ilk' (sayı sıfatı - sıra sayı) ve 'saklayan' (niteleme sıfatı görevi) vardır. Ancak 'sapasağlam' sözcüğü yüklemi etkilediği için zarftır, pekiştirme sıfatı değildir.",
    answers: [
      { text: "İşaret sıfatı", ok: false },
      { text: "Sayı sıfatı", ok: false },
      { text: "Belgisiz sıfat", ok: false },
      { text: "Niteleme sıfatı", ok: false },
      { text: "Pekiştirme sıfatı", ok: true }
    ]
  },
  {
    text: "<p>“Sırlar Odası” rüyaların <u>I. sanrıların</u> ve <u>II. inanılmaz</u> bir hayal gücünün somut <u>III. ipuçlarından</u> çok daha <u>IV. önemli</u> olduğunu postmodern bir <u>V. dedektiflik</u> öyküsü.</p><p><b>Bu cümlede numaralanmış sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'dedektiflik' sözcüğü 'dedektif' ismine gelen '-lik' ekiyle isimden isim yapım eki almıştır. İsimden fiil yapan ek aldığı bilgisi yanlıştır.",
    answers: [
      { text: "I. sözcük, fiilden türemiş isimdir.", ok: false },
      { text: "II. sözcük, edilgen bir sıfat-fiildir.", ok: false },
      { text: "III. sözcük, birden fazla çekim almış birleşik isimdir.", ok: false },
      { text: "IV. sözcük, gövdeden türemiş isimdir.", ok: false },
      { text: "V. sözcük, isimden fiil yapan ek almıştır.", ok: true }
    ]
  },
  {
    text: "<p>“Kar nedeniyle trenin yolda <u>I. kaldığı</u> uzun ve gerilimli yolculuk <u>II. sırasında</u> üç <u>III. yabancının</u> zihinlerinden geçenler ve <u>IV. aralarındaki</u> <u>V. konuşmaları</u> kitabın ana konusunu oluşturmakta.”</p><p><b>Yukarıda numaralanmış sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'konuşmaları' sözcüğü 'konuş-ma-ları' şeklinde fiilden isim yapan ek ve 3. çoğul iyelik eki (-ları) almıştır; 'üç yabancının (onların) konuşmaları' tamlamasında '-ları' çokluk eki değil, 3. çoğul iyelik ekidir. Bu nedenle çokluk eki aldığı bilgisi yanlıştır.",
    answers: [
      { text: "I. sözcük, fiilden isim yapan ek ve iyelik eki almıştır.", ok: false },
      { text: "II. sözcük, iyelik ekinin üzerine bulunma hâl eki almıştır.", ok: false },
      { text: "III. sözcük, isimden isim yapan ekin üzerine ilgi eki almıştır.", ok: false },
      { text: "IV. sözcük, yapım ekinden önce çekim eki alan sözcüktür.", ok: false },
      { text: "V. sözcük, fiilden isim yapan ek, çokluk ve iyelik eki almıştır.", ok: true }
    ]
  },
  {
    text: "<p>“O günler eskide kalmıştı, kendi rüzgârının uçuşan yaprağı gelmemişti bir daha.”</p><p><b>Bu cümledeki tamlamalarla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Cümlede 'tamlayanı sıfat-fiil öbeği olan zincirleme isim tamlaması' bulunmamaktadır. 'Kendi rüzgârının uçuşan yaprağı' ifadesi tamlananı sıfat-fiil öbeği olan zincirleme isim tamlamasıdır.",
    answers: [
      { text: "Tamlayanı belirtme sıfatı olan tamlama", ok: false },
      { text: "Tamlayanı dönüşlülük zamiri olan belirtisiz isim tamlaması", ok: false },
      { text: "Tamlayanı sıfat-fiil öbeği olan zincirleme isim tamlaması", ok: true },
      { text: "Tamlananı birden fazla çekim eki almış belirtisiz isim tamlaması", ok: false },
      { text: "Tamlayanı işteş çatılı sıfat-fiil olan sıfat tamlaması", ok: false }
    ]
  },
  {
    text: "<p>Elleriyle duvarlara tutunarak yürürken içinde hemen düşmek üzere olduğu bir uçurumdan kurtulmuş olanların sevinci vardı.</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Cümlede 'tamlayan görevinde isim-fiil' bulunmamaktadır. 'Tutunarak' (durum zarf-fiil), 'yürürken' (zaman zarf-fiil), 'düşmek' (isim-fiil) ve 'olanların' (adlaşmış sıfat-fiil) mevcuttur.",
    answers: [
      { text: "Durum görevli zarf-fiil", ok: false },
      { text: "Zaman görevli zarf-fiil", ok: false },
      { text: "İsim-fiil", ok: false },
      { text: "Tamlayan görevinde isim-fiil", ok: true },
      { text: "Adlaşmış sıfat-fiil", ok: false }
    ]
  },
  {
    text: "<p><u>I. Dağılmış</u> eşyaları <u>II. oraya buraya</u> <u>III. şaşkın</u> koşuşan kadınları <u>IV. buğulu buğulu</u> gördüm.</p><p><b>Bu cümlede altı çizili sözcüklerin görevleri aşağıdakilerin hangisinde <u>sırasıyla</u> doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "I: Dağılmış (sıfat), II: oraya buraya (zamir/zarf grubu), III: şaşkın (zarf - fiili nitelediği için), IV: buğulu buğulu (zarf). Sıralama B şıkkına uygundur.",
    answers: [
      { text: "Sıfat-fiil - zarf - sıfat - zarf", ok: false },
      { text: "Sıfat-fiil - zamir - zarf - zarf", ok: true },
      { text: "Sıfat - zamir - zarf - isim", ok: false },
      { text: "Sıfat - zarf - sıfat - isim", ok: false },
      { text: "Sıfat-fiil - zamir - sıfat - isim", ok: false }
    ]
  },
  {
    text: "<p>“Yalnız başıma bir köşeye ilişirdim, kımıldamazdım, beklerdim, korkudan rengimin uçtuğunu hissederdim.”</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Cümlede gövdeden türemiş bir isim (yapım eki almış isim) bulunmamaktadır. Yüklemler birleşik zamanlı fiillerdir.",
    answers: [
      { text: "Zarf görevinde sıfat tamlaması", ok: false },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "İyelik ve belirtme eki almış sıfat-fiil", ok: false },
      { text: "Birleşik zamanlı, birleşik yapılı fiil", ok: false },
      { text: "Gövdeden türemiş isim", ok: true }
    ]
  },
  {
    text: "<p>El dokuması halılarda her motif, düğüm ve ilmeğin ayrı bir <u>I. anlamı</u> vardır. Halılardaki “eli belinde <u>II. motifi</u>”, dişiliğin simgesidir. Sadece analık ve <u>III. doğurganlığı</u> değil, aynı zamanda uğur, bereket, kısmet, mutluluk ve neşeyi de sembolize etmektedir. Bugünkü dokumalarda kullanılan ana tanrıça kültürünün <u>IV. devamı</u> niteliğindeki eli belinde motifi, ana tanrıça ile ilgili inancın kültürel miras olarak günümüze geldiğinin bir <u>V. kanıtı</u>.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi diğerlerinden farklı bir çekim eki almıştır?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı sözcükler isim tamlaması içinde tamlanan eki (iyelik eki) almıştır. III numaralı 'doğurganlığı' sözcüğü ise cümlede nesne görevindedir ve belirtme hâl eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Olan biteni tartışmayan, konuşmayan, gündem dışı bulan, yarı yarıya sağırlaştırılmış bir toplumsal ortamda yaşıyorduk.”</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>örneklendirilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "Cümlede 'işteş çatılı' (karşılıklı veya birlikte yapma anlamı taşıyan) bir isim-fiil örneği bulunmamaktadır.",
    answers: [
      { text: "Belirtisiz isim tamlaması", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Edilgen çatılı sözcük", ok: false },
      { text: "İşteş çatılı isim-fiil", ok: true },
      { text: "Birleşik zamanlı fiil", ok: false }
    ]
  }
];

// ============================================================================
// DİL BİLGİSİ (KARMA) - TEST 4
// ============================================================================
export const TUR_DIL_BILGISI_KARMA_TEST_4: McQ[] = [
  {
    text: "<p>Zanaat, zaman <u>I. içinde</u> ortadan kalkmasına <u>II. karşın</u> meslek <u>III. niteliğini</u> korumuş ve endüstriyel <u>IV. değişimler</u> doğrultusunda yeni meslekler <u>V. biçiminde</u> ortaya çıkmıştır.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi isim görevinde <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "II numaralı 'karşın' sözcüğü 'rağmen' anlamında kullanılan bir edattır (ilgeç). Diğer numaralı sözcükler isim görevindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bilimsel bir gözlem, bilimde başka edebiyatta başka bir anlam değeriyle ortaya çıkar, o <u>I. bilgi içeriği</u> iki yerde tıpatıp aynı olsa da. <u>II. Söz gelimi</u> bir <u>III. biyoloji kitabında</u>, <u>IV. yaşlılık sorunlarını</u> işleyen bir <u>V. uzmanlık tümcesi</u> okuyoruz.</p><p><b>Bu cümlede altı çizili tamlamalardan hangisi görev bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "II numaralı 'Söz gelimi' söz grubu TDK'ye göre bağlaç görevindedir. Diğerleri isim tamlaması olup cümlede isim görevi üstlenmişlerdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Bir <u>çanta dolusu</u> kitap getirdi bu sefer<br/>II. <u>Baş ağrısı</u> dostlarından kurtulamıyordu bir türlü<br/>III. <u>Yürekler acısı</u> bir durum yaşanıyordu başka yerlerde<br/>IV. <u>Avuç dolusu</u> fındık getirdi bana öğrencim<br/>V. <u>Can sıkıntısı</u> içinde kıvranıyordu bu sefer de</p><p><b>Bu cümlelerdeki altı çizili isim tamlamalarından hangisi diğerlerinden farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I, II, III ve IV numaralı cümlelerdeki belirtisiz isim tamlamaları kendilerinden sonra gelen ismi niteleyerek sıfat görevi üstlenmiştir. V numaralı 'Can sıkıntısı' ise zincirleme isim tamlamasının bir parçası olup isim görevindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Seni yitiriyorum<br/><u>I. Çok</u> <u>II. karanlık</u> <u>III. bir</u> andan<br/><u>IV. Birden</u> uyanıyorum<br/>Bakıyorum aydınlık<br/>Uyuyorsun yanımda<br/><u>V. Güzelce</u></p><p><b>Bu dizelerde numaralanmış sözcüklerden hangileri sıfat görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "'Çok karanlık bir andan' sözlerinde 'an' ismine sorulan 'nasıl?' sorusuna cevap veren II numaralı 'karanlık' ve 'hangi?' sorusuna cevap veren III numaralı 'bir' sözcükleri sıfattır. I numaralı 'çok' sözcüğü 'karanlık' sıfatını derecelendirdiği için zarftır. IV numaralı 'birden' ve V numaralı 'güzelce' ise durum zarfıdır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Göklerden süzüldüm <u>I. tertemiz</u> indim / Yere indim <u>II. yedi</u> renge boyandım / <u>III. Boz bulanık</u> bir sel oldum yürüdüm / <u>IV. Çeşit çeşit</u>, <u>V. türlü türlü</u> renge boyandım.</p><p><b>Bu dörtlükte altı çizili numaralanmış sözlerden hangisi diğerlerinden farklı görevdedir?</b></p>",
    diff: 3,
    expl: "II, III, IV ve V numaralı sözcükler isimleri niteleyen sıfatlardır. I numaralı 'tertemiz' ise 'indim' fiilini niteleyen bir durum zarfıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yelda Öğretmen, sınıfa girince sorular yoluyla beyin fırtınası tekniği kullanılır; öğrencilere aşağıdaki soruları sorar ve onlardan aldığı yanıtları tahtaya yazar. Ekrana yansıttığı çiçeklerle ilgili öğrencilere sorduğu sorular şunlardır:<br/>Şeyma: <u>Neye</u> benziyor?<br/>Recep: <u>Nerede</u> görürsün çiçekleri?<br/>Hüseyin: Koklayınca <u>ne</u> hissedersin?<br/>Yeşim: <u>Nasıl</u> davranalım çiçeklere?<br/>Ahmet: Koparırsak su vermezsek <u>ne</u> olur?</p><p><b>Yelda Öğretmen, öğrencilerinin hangisine zarf türünde bir soru yöneltmiştir?</b></p>",
    diff: 2,
    expl: "Yeşim'e yöneltilen 'Nasıl' sorusu, eylemin (davranalım) yapılış şeklini sorguladığı için soru zarfıdır. Diğerleri soru zamiridir.",
    answers: [
      { text: "Şeyma", ok: false },
      { text: "Recep", ok: false },
      { text: "Hüseyin", ok: false },
      { text: "Yeşim", ok: true },
      { text: "Ahmet", ok: false }
    ]
  },
  {
    text: "<p>Birdenbire, derin bir mağaranın bağrından çıkıvermiş gibi kalın bir ses, “Hangi rüzgâr kesiliyor?” diye sordu. Amcamın sesini tanıdım. Donakaldım. Başım, göğsüm sırsıklamdı. Amcam yanaştı: “Mahmut sen misin?” dedi. (...) “Burada bu saatte ne yapıyorsun?” dedi. Ona elimdeki kayığı verdim.</p><p><b>Bu parçayla ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'kesiliyor, sordu, tanıdı' gibi fiiller yalnızca tek zaman eki aldıkları için basit zamanlıdır. Birleşik zamanlı fiillere yer verilmemiştir.",
    answers: [
      { text: "Kurallı birleşik fiil vardır.", ok: false },
      { text: "Edat grubu sıfat görevinde kullanılmıştır.", ok: false },
      { text: "Belirtili isim tamlaması bir cümlede nesne görevindedir.", ok: false },
      { text: "Birleşik zamanlı fiillere yer verilmiştir.", ok: true },
      { text: "Pekiştirmeli sözcük cümlede yüklem görevindedir.", ok: false }
    ]
  },
  {
    text: "<p>Yaşanan olaylara daima aynı pencereden baktığı için hiçbir zaman farklı bir şey göremeyecekti.</p><p><b>Bu cümlede aşağıdaki sözcük türlerinden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Cümlede 'için' edat, 'daima' zarf, 'aynı' sıfat, 'şey' zamirdir. Ancak cümlede bağlaç örneği bulunmamaktadır.",
    answers: [
      { text: "Edat", ok: false },
      { text: "Zarf", ok: false },
      { text: "Sıfat", ok: false },
      { text: "Zamir", ok: false },
      { text: "Bağlaç", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki dizelerin hangisinde birleşik fiile <u>yer verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "D seçeneğinde geçen fiiller basit veya türemiş yapılıdır, birleşik fiil (yardımcı eylem, deyimleşmiş veya kurallı birleşik) yoktur. Diğerlerinde 'yer etmedi', 'mutlu et', 'terk etmedi', 'memnun etmedi' birleşik fiillerdir.",
    answers: [
      { text: "Girmem, girmedim mangalara<br>Yer etmedi adalet duygusu içimde benim.", ok: false },
      { text: "Hayat, acıya değmez.<br>Sen mutlu et kendini.", ok: false },
      { text: "Terk etmedi sevdan beni<br>Aç kaldım, susuz kaldım.", ok: false },
      { text: "Başkalarının aşkıyla başlıyor<br>hayatımız, düşünceleriyle değil.", ok: true },
      { text: "Kimseyi memnun etmedi oysa<br>Apansız bırakıp gidişin.", ok: false }
    ]
  },
  {
    text: "<p>Fransızlar yüzyıllardır kendilerine özgü cümle yapılarını korumalarına rağmen, her iki dilde de bazı sözcüklerin yüklendikleri anlamlar zaman içinde genelleşmiş, genişlemiş, daralmıştır. Kimileri anlam güzelleşmesine, anlam kötüleşmesine uğramış, kimileri bambaşka anlamlara geçmiştir. Bütün bu dil olaylarının temelinde toplumsal, bilimsel, ruhsal ve elbette dilsel anlayıştaki değişimlerin izleri görülmektedir.</p><p><b>Bu parçadaki kimi sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "“yüzyıllardır” sözcüğündeki “-dır” eki bildirme eki (ek-fiil) değil, zarf-fiil anlamı katan veya zaman belirten bir yapım eki işlevindedir.",
    answers: [
      { text: "“yüzyıllardır” sözcüğündeki bildirme eki çekim eki işlevindedir.", ok: true },
      { text: "“bambaşka” ikilemesi sıfat tamlamasının unsurudur.", ok: false },
      { text: "“anlayıştaki” sözcüğünde hem yapım hem çekim eki bulunmaktadır.", ok: false },
      { text: "“rağmen” edatı isim-fiil grubuna bağlanmıştır.", ok: false },
      { text: "“kimileri” zamiri “bazı sözcüklerin” yerini tutmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>Âkif, “şiir anlayışı bakımından <u>I. millî</u> duyarlılığı <u>II. gerçekçi</u> bakış açısıyla <u>III. yansıtan</u>, toplumu yönlendirmeyi kendine amaç edinen, <u>IV. idealist</u> <u>V. bir</u> şairdir.”</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi niteleme sıfatı <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "İsimlere sorulan 'nasıl?' sorusuna cevap veren sözler niteleme sıfatıdır. I, II, III ve IV numaralı sözler bu soruya cevap verirken V numaralı 'bir' sözcüğü 'rastgele, herhangi bir' anlamında kullanılan belgisiz sıfattır ve 'hangi?' sorusuna cevap verir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Her <u>I. bölgenin</u> kendine has motifleri vardır. Motiflerde hikâyelerin <u>II. oluşumu</u> ve anlamları Anadolu'da <u>III. dokunan</u> ilk halıya kadar <u>IV. uzanmaktadır</u>. Halıyı dokuyan kişi duygu ve düşüncelerini çoğunlukla motiflerle <u>V. yansıtmıştır</u>.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisinin kökü, tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'uzanmaktadır' sözcüğünün kökü 'uz' ismidir. Diğerlerinin kökleri (böl-, ol-, doku-, yans-) fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// DİL BİLGİSİ (KARMA) - TEST 5
// ============================================================================
export const TUR_DIL_BILGISI_KARMA_TEST_5: McQ[] = [
  {
    text: "<p><u>I. Hep</u> sen mi ağladın, hep sen mi yandın?<br/>Ben de gülemedim yalan dünyada<br/>Sen beni <u>II. gönlümce</u> mutlu mu sandın?<br/>Ömrümü <u>III. boş yere</u> çalan dünyada<br/>Ah yalan dünyada, <u>IV. yalan</u> dünyada<br/><u>V. Yalandan</u> yüzüme gülen dünyada</p><p><b>Neşet Ertaş'ın bu sözlerindeki altı çizili ifadelerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'yalan' sözcüğü 'dünya' ismini nitelediği için sıfattır. I (hep) 'ağladın', II (gönlümce) 'sandın' fiilini; III (boş yere) 'çalan', V (yalandan) 'gülen' fiilimsisini nitelediği için zarftır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki devrik atasözlerinden hangisi yapıca ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "A, B, C ve E seçenekleri iki ayrı yüklemi olan sıralı cümlelerdir. D seçeneği ise '-sa' şart ekiyle bağlandığı için şartlı birleşik cümledir.",
    answers: [
      { text: "İnanma dostuna, saman doldurur postuna.", ok: false },
      { text: "Para isteme benden, buz gibi soğurum senden.", ok: false },
      { text: "Sabreyle işine, hayır gelsin başına.", ok: false },
      { text: "Ne doğrarsan aşına, o çıkar karşına.", ok: true },
      { text: "Al malın iyisini, çekme kaygısını.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki atasözlerinden hangisi, yüklemi ortak olan bağımsız sıralı bir cümle özelliği <u>göstermez</u>?</b></p>",
    diff: 3,
    expl: "A'da 'gerek', B'de 'istemez', C'de 'olmaz', D'de 'bakar' yüklemleri ortaktır. E seçeneğinde ise ortak olan öge yüklem değil, belirtili nesne görevindeki 'mazlumun ahını' sözleridir.",
    answers: [
      { text: "Cambaz ipte, balık dipte gerek.", ok: false },
      { text: "Dilenci dilenciyi istemez, ev sahibi ikisini de.", ok: false },
      { text: "Çok mal haramsız, çok laf yalansız olmaz.", ok: false },
      { text: "Dost başa bakar, düşman ayağa.", ok: false },
      { text: "Alma mazlumun ahını, çıkar aheste aheste.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisi biçimce olumsuz, anlamca olumludur?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'anlamıyor değilsin' ifadesi biçimce olumsuzluk eki içerse de anlamca 'anlıyorsun' yani olumlu bir yargı bildirmektedir.",
    answers: [
      { text: "Onun için ne kedilerimden ne kaktüslerimden vazgeçecek biriyim.", ok: false },
      { text: "Evimdeki çiçeklerin çoğunun boyu ne kısa ne uzun.", ok: false },
      { text: "Bir evlat, anasını babasını üzer mi hiç?", ok: false },
      { text: "Onun bazı hareketlerine kızdığımı sen de anlamıyor değilsin.", ok: true },
      { text: "Yaşadığın bunca acı deneyimden sonra insanlara koşulsuz güvenebilirsen.", ok: false }
    ]
  },
  {
    text: "<p>(I) Ben yemek pişirmeyi hiç bilmeden yetiştim. (II) Buna rağmen annemi yemek pişirirken seyrederek ve ufak tefek yardım ederek zamanla bilgi sahibi oldum ve yemek kitaplarından aldığım tarifleri deneyerek başladım yemek yapmaya. (III) Şimdi gayet güzel yemek yapabiliyorum hatta kendime göre yemek tariflerini değiştirerek ve yeni bir şeyler katarak yeni yemek tarifleri bile üretebiliyorum ama bu benim iyi bir “şef” olduğum anlamına gelmiyor. (IV) Yazmak ya da yazabilmek dil çalışmalarında önemlidir ama doğuştan gelen bir yetenekten çok üzerinde çalışmayı gerektiren bir etkinliktir. (V) Yazabilmenin çaresi bol bol yazmaktan geçer çünkü yazmayı öğrenmek bir süreçtir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı cümle tek yüklemli olup içerisinde fiilimsi (pişirmeyi) bulundurduğu için girişik birleşik cümledir. Diğer cümleler ise bağlaçlarla bağlanmış bağlı cümlelerdir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Bu dünyanın direği yok,<br/>II. Merhameti, yüreği yok,<br/>III. Kılavuzun gereği yok,<br/>IV. Yolun sonu görünüyor.</p><p><b>Bu dizelerle ilgili aşağıdaki bilgilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde 'tamlayanı ortak belirtisiz isim tamlaması' bulunmamaktadır. I ve III. dizelerde belirtili isim tamlaması mevcuttur.",
    answers: [
      { text: "Tamlayanı sıfat almış belirtili isim tamlaması vardır.", ok: false },
      { text: "Dizelerde yer alan isim tamlamaları özne görevindedir.", ok: false },
      { text: "Tamlayanı ortak belirtisiz isim tamlaması bulunmaktadır.", ok: true },
      { text: "Dördüncü dizede yer alan tamlama sözde özne olarak kullanılmıştır.", ok: false },
      { text: "İkinci dizede tamlayanı düşmüş isim tamlaması yer alır.", ok: false }
    ]
  },
  {
    text: "<p>Gelincik tarlalarını, küçük dereleri, böğürtlen kümelerini soluk soluğa geçiyorum. Solmuş, siyah önlüğünden kurtulmuş bir çocuk sevinci, kuş seslerine, bulutların kayıp giden gölgelerine karışıyor, önümde yeşil bir okyanus gibi çoğalıyor.</p><p><b>Bu parçayla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Parçada durum eklerinden birini almış bir özel isim (Yelda'ya, İstanbul'da vb.) bulunmamaktadır.",
    answers: [
      { text: "Birden fazla çoğul isim bulunmaktadır.", ok: false },
      { text: "Birden fazla sıfat tarafından nitelenmiş isme yer verilmiştir.", ok: false },
      { text: "Durum eklerinden birini almış özel isim bulunmaktadır.", ok: true },
      { text: "Somut adlar tamlama oluşturarak söz öbeği şeklinde kullanılmıştır.", ok: false },
      { text: "İyelik eki alan isimlere yer verilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Adlar, varlıkların oluşuna göre somut ve soyut adlar olmak üzere ikiye ayrılır.</p><p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcük varlıkların oluşuna göre diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "C seçeneğindeki 'kokusu' sözcüğü duyu organıyla algılanabildiği için somut bir addır. Diğer şıklardaki (sorun, kin, özlem, gerçek) sözcükler ise soyut adlardır.",
    answers: [
      { text: "<u>Sorunlarımı</u> başkalarıyla paylaşmak istemem.", ok: false },
      { text: "<u>Kine</u>, nefrete yüzümüzü dönelim.", ok: false },
      { text: "Yağmurun ardından toprak <u>kokusu</u> her yeri sarmıştı.", ok: true },
      { text: "Büyüdüğü şehre olan <u>özlemi</u> hiç tükenmiyordu.", ok: false },
      { text: "Ben, aklın gücünden başka <u>gerçek</u> tanımam.", ok: false }
    ]
  },
  {
    text: "<p>(I) Karlara bata çıka bir yokuşu daha tırmandık. (II) Rüzgârın keskin ıslığı kulaklarımızı tırmalıyordu. (III) Servi ve çam ağaçlarıyla kaplı tepeye son bir gayretle ulaştık. (IV) Bizden ve atlarımızdan fışkıran buz beyazı nefes buharlarının arasından, önümüzde uzanan manzaraya baktık. (V) Şato da yolun bittiği yerde bütün korkutuculuğuyla yükseliyordu.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde ögelerin sıralanışı “Gerçek, saklandığı derinliklerden aniden su yüzüne çıkar.” cümlesiyle aynıdır?</b></p>",
    diff: 3,
    expl: "Öncül cümle: Özne - Dolaylı Tümleç - Zarf Tümleci - Yüklem şeklindedir. V numaralı cümle de: Şato (Özne) - yolun bittiği yerde (Dolaylı Tümleç) - bütün korkutuculuğuyla (Zarf Tümleci) - yükseliyordu (Yüklem) dizilişine sahiptir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Önce evimizi aradım elbet, daha doğrusu evlerimizi. <u>I. Doğduğum</u> demeyeceğim ama -çünkü Gaziantep'te doğdum- <u>II. tanıdık</u> dünyaya yani <u>III. anımsadığım</u> ilk mekâna gözlerimi <u>IV. açtığım</u> Meral Apartmanı'nı, Emek Sineması'nın <u>V. bitişiğinde</u> elimle koymuş gibi buldum.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "I (doğ-duk-um), II (tanı-dık), III (anımsa-dık-ım) ve IV (aç-tık-ım) sözcükleri '-DIk' sıfat-fiil ekini almış fiilimsilerdir. V numaralı 'bitişiğinde' sözcüğü ise 'bit-iş-ik-i-n-de' şeklinde ayrılan bir isimdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Ata binmeyi özledim. (II) Çoktandır ata binmiyorum. (III) Kışın, ağaçların arasından sızan güneş ışıklarıyla cam çubuklar gibi parlayan buz tutmuş dalların altından zaman zaman başını eğerek geçmek zorunda kaldığın karlı orman patikalarında dörtnala koştururduk atları. (IV) Kar tozlarından beyaz bir bulut bırakırdık arkamızda. (V) Sessizliğin içinde sadece nal sesleri duyulurdu.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "I. cümle tek yüklemli olduğu ve içerisinde 'binmeyi' isim-fiili bulunduğu için basit değil, girişik birleşik bir cümledir. Yükleminde (özledim) olumsuzluk bulunmadığı için olumlu bir fiil cümlesidir.",
    answers: [
      { text: "I. cümle basit yapılı, olumlu fiil cümlesidir.", ok: true },
      { text: "II. cümle, içinde dolaylı tümleç bulunan kurallı fiil cümlesidir.", ok: false },
      { text: "III. cümle, içinde zarf tümleci bulunan devrik fiil cümlesidir.", ok: false },
      { text: "IV. cümlenin öge sıralaması: Belirtisiz nesne, yüklem, dolaylı tümleç şeklindedir.", ok: false },
      { text: "V. cümle, basit, kurallı ve fiil cümlesidir.", ok: false }
    ]
  },
  {
    text: "<p>(I) En çok sevdiğim oyundu çelik çomak. (II) Denizde serin serin yeller esmeye başlayınca köyü tren istasyonuna bağlayan iki yanı ağaçlı yollarda dolaşmaya başlardık. (III) Çomak arardık kendimize çünkü çomağı olmayan oynayamazdı. (IV) Ayıptı ödünç çomak istemek. (V) Hafif olursa çomak ayarlayamazsınız vuruşları.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümle 'Ayıptı ödünç çomak istemek.' cümlesinde yüklem 'Ayıptı' (isim), özne 'ödünç çomak istemek'tir. Tek ögeli değil, iki ögeli bir isim cümlesidir.",
    answers: [
      { text: "I. cümle, yüklemi söz öbeğinden oluşan devrik isim cümlesidir.", ok: false },
      { text: "II. cümlede birden fazla yan cümlecik bulunmaktadır.", ok: false },
      { text: "III. cümle, yapısı bakımından bağlı cümledir.", ok: false },
      { text: "IV. cümle, tek ögeli basit yapılı isim cümlesidir.", ok: true },
      { text: "V. cümle, şartlı birleşik cümle özelliği gösterir.", ok: false }
    ]
  }
];