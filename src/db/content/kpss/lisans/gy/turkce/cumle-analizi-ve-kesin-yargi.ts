import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE ANALİZİ VE KESİN YARGI - TEST 1
// ============================================================================
export const TUR_CUMLE_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>(I) Sanatın zaman zaman açmaza düştüğü, gerçek amacının dışına çıktığı olmuştur. (II) Böyle zamanlarda sanat, bir seçkinler grubunun uğraşı olarak görülmüştür. (III) Oysa sanat, insanlardan kopmakla gerçekliğini yitirir. (IV) O, insan içindir; yaşamdan gelir ve yaşama yansır. (V) İnsanları ortak bir geçmiş ve gelecekte birleştirir.</p><p><b>Sanata ilişkin bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "II. cümlede sanatın farklı kesimlere göre şekillendiği değil, amacından saptığı dönemlerde sadece bir 'seçkinler grubu'na hitap eden dar bir çerçeveye hapsolduğu vurgulanmıştır.",
    answers: [
      { text: "I. cümlede, sanatın içinde bulunduğu durum hakkında bir tespitte bulunulmuştur.", ok: false },
      { text: "II. cümlede, sanatın farklı kesimlere göre şekillendiği vurgulanmıştır.", ok: true },
      { text: "III. cümlede, sanatın gerçekliğinin insanla ilişkisinden kaynaklandığı ifade edilmiştir.", ok: false },
      { text: "IV. cümlede, sanatın yaşamdan temellendiği ifade edilmiştir.", ok: false },
      { text: "V. cümlede, sanatın bir özelliğinden söz edilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) İtalyancada komik ve gülünç anlamına gelen \"buffo\", İtalyan operası türlerinden birine ad olup genellikle komedi temalarını işleyen, hafif ve esprili bir operadır... (IV) Müzikal olarak eğlenceli melodilere dayanan bu opera türünde karakterler, genellikle sıradan insanlardır.</p><p><b>Bu parçada numaralanmış cümlelerde söz edilen Buffo operasıyla ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "IV. cümlede karakterlerin 'sıradan insanlar' olduğu belirtilerek karakter yapısına (türün özelliğine) değinilmiştir, ancak türün belli bir kitleye (izleyici kitlesine) yönelik olduğuna dair bir bilgi verilmemiştir.",
    answers: [
      { text: "I. cümlede, ne tür bir opera olduğu hakkında bilgi verilmiştir.", ok: false },
      { text: "II. cümle, bu türün nerede ve ne zaman herkesçe tanındığından söz edilmiştir.", ok: false },
      { text: "III. cümlede, muhtevasıyla ilgili bir bilgiden bahsedilmiştir.", ok: false },
      { text: "IV. cümlede, türün belli bir kitleye yönelik olduğuna işaret edilmiştir.", ok: true },
      { text: "V. cümlede, bu türün belli başlı örnekleri belirtilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Ahmet Mithat Efendi, 1890'larda Batı edebiyatında da güçlü etkileri olan natüralizm akımına kayıtsız kalmayarak natüralist bir roman addettiği Müşahedat'ı kaleme alır... (IV) Roman iyi bir üst kurmaca örneği olarak döneminde farklı ve yeni olmasına, natüralist olma iddiasıyla yola çıkılmasına rağmen, birçok yönden Émile Zola'nın natüralizm anlayışından farklılık gösterir.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV. cümlede Müşahedat romanının Émile Zola'nın natüralizminden farkı anlatılmış, 'üst kurmaca' ve 'natüralizm'den bahsedilmiştir. Ancak burada 'farklı akımların' (natüralizm dışındaki akımlar gibi) etkisinden söz edilmemiştir.",
    answers: [
      { text: "I. cümlede, söz konusu romanda Batı etkisi olduğu belirtilmiştir.", ok: false },
      { text: "II. cümlede, romanın metinler arası bir özellik taşıdığı söylenmiştir.", ok: false },
      { text: "III. cümlede, romanın dikkat çeken tarafları açıklanmıştır.", ok: false },
      { text: "IV. cümlede, romanda farklı akımların etkisinden söz edilmiştir.", ok: true },
      { text: "V. cümlede, romana dair olumsuz bir eleştiride bulunulmuştur.", ok: false }
    ]
  },
  {
    text: "<p>(I) Doğu'nun mimari biçimleri ve şehir görüntüleri yüzyıllar boyunca çeşitli çizimlerle Batı'ya aktarıldı. (II) Seyahatnamelerdeki betimlemeler, oryantalist mimariyi besleyen önemli kaynaklardı. (III) Egzotik şekillerin... Elhamra Sarayı'nın ünlenmesiyle gerçekleşti. (IV) Kıvrımlı hatlar içeren bu 14. yüzyıl yapısı... esin kaynağı oldu.</p><p><b>Bu parçadaki numaralandırılmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "II. cümlede seyahatnamelerin oryantalist mimariyi beslediği söylenerek bir tespit yapılmıştır. Bu bir 'çıkarım' (verilerden yola çıkarak bir sonuç üretme) değil, bir durum tespitidir.",
    answers: [
      { text: "I. cümlede, bir tespitten bahsedilmiştir.", ok: false },
      { text: "II. cümlede, bir çıkarıma yer verilmiştir.", ok: true },
      { text: "III. cümlede, bir durumun sebebi belirtilmiştir.", ok: false },
      { text: "IV. cümlede, bazı kavramlar sıralanmıştır.", ok: false },
      { text: "V. cümlede, örneklemeye yer verilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Gaslighting, bir psikolojik manipülasyon ve taciz yöntemidir... (V) Filmdeki erkek karakter, eşini deli olduğuna ikna etmeye çalışır ve her gece evdeki gaz lambasını bir önceki güne göre giderek daha fazla kısar; kadın bu durumu sorguladığında eşi, ışığın hep aynı olduğunu söyler.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V. cümlede filmdeki karakterin uyguladığı yöntem (manipülasyon tekniği) detaylandırılmıştır, ancak bu tekniğin 'başarısı' veya hedefe ulaşıp ulaşmadığı hakkında bir değerlendirme yapılmamıştır.",
    answers: [
      { text: "I. cümlede, terimin içeriğine yer verilmiştir.", ok: false },
      { text: "II. cümlede, yöntemin olumsuz özelliği aktarılmıştır.", ok: false },
      { text: "III. cümlede, yöntemin gerçekleştirilme şekline değinilmiştir.", ok: false },
      { text: "IV. cümlede, terimin isminin nereden geldiği hakkında bilgi verilmiştir.", ok: false },
      { text: "V. cümlede, filmde uygulanan tekniğin başarısından bahsedilmiştir.", ok: true }
    ]
  },
  {
    text: "<p>(I) Edward Munch, en çok işlediği ruhsal ve duygusal konulu resimleriyle tanındı. (II) Alman dışavurumculuk akımının gelişmesine önemli katkıları olmuştur... (V) İki elini kafatasına benzeyen kafasının iki yanına kaldırmış bir vaziyette duran bu tablo, 2012 yılında açık artırma yoluyla satılan en pahalı sanat eserlerinden biri olmuştur.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili aşağıdakileriden hangisi söylenemez?</b></p>",
    diff: 2,
    expl: "II. cümlede Munch'un katkılarının 'önemli' olduğu ifade edilmiştir. Bu, söyleyenin takdirini içeren 'öznel' bir değerlendirmedir; 'nesnel' değildir.",
    answers: [
      { text: "I. cümlede, sanatçının resimlerinde ağırlıklı olarak nelerin konu edildiği belirtilmiştir.", ok: false },
      { text: "II. cümlede, nesnel bir değerlendirme söz konusudur.", ok: true },
      { text: "III. cümlede, eserlerindeki zaman içindeki değişimi hakkında bilgi verilmiştir.", ok: false },
      { text: "IV. cümlede, resmini yaptığı figürün özellikleri belirtilmiştir.", ok: false },
      { text: "V. cümlede, karşılaştırma yoluyla tablonun özelliği belirtilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Dünya Sağlık Örgütüne göre küresel sıcaklıkların yükselmesi... virüslerin etkisini artırıyor... (IV) Bir başka açıdan bakıldığında da artan küresel sıcaklıklar nedeniyle orman yangınları tetikleniyor, bitkilerde tozlaşma aktivitesi artıyor.</p><p><b>Küresel ısınmaya ilişkin bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV. cümlede sıcaklık artışının orman yangınlarını 'tetiklediği' söylenmiştir. Yani küresel ısınma yangınların bir 'nedeni'dir. Seçenekte ise yangınların ısınmaya sebep olduğu (tersi) iddia edildiği için yanlıştır.",
    answers: [
      { text: "I. cümlede küresel ısınmayla yağış dağılımındaki dengesizlikler sonucunda hastalıklara neden olan virüslerin etkisini artırdığından söz edilmiştir.", ok: false },
      { text: "II. cümlede küresel ısınma sonucu ortaya çıkan salgın hastalıkların hangileri olduğu belirtilmiştir.", ok: false },
      { text: "III. cümlede küresel ısınma sonucu ortaya çıkan bazı durumların, hastalıklara karşı direnci düşürdüğünden bahsedilmiştir.", ok: false },
      { text: "IV. cümlede orman yangınlarının da küresel ısınmaya sebep olduğuna işaret edilmiştir.", ok: true },
      { text: "V. cümlede küresel ısınma neticesi oluşan tozlaşmanın polenler vasıtasıyla solunum yolları hastalıklarına ve hastalıklarının yayılmasına sebep olduğuna değinilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Norveçli enerji üreticisi Statoil bakmış ki Kyoto Protokolü kapsamında atmosfere yaydığı karbondioksit gazına karşı ödediği vergilerin önüne geçemiyor, bir proje geliştirmiş... (III) Statoil, zengin bir metan kuyusu olan Sleipner platformundan aldığı gazdan günde 20 milyon metreküp metan üretiyor, gaz içerisindeki karbondioksiti metandan ayrıştırıp denizin 900 metre altındaki platforma geri enjekte ederek saklıyor.</p><p><b>Karbondioksit gazına ilişkin bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "III. cümlede şirketin operasyonel süreci (metan üretimi ve CO2 ayrıştırma) anlatılmıştır. Ancak şirketin bu işten 'iyi kazanç sağladığına' dair mali bir bilgi verilmemiştir.",
    answers: [
      { text: "I. cümlede karbondioksit gazının atmosfere yayılım bedeli olarak şirketlerin yüksek vergiler ödediğinden söz edilmiştir.", ok: false },
      { text: "II. cümlede Statoil şirketinin karbondioksit gazını Sleipner platformunun altındaki kayalıklara depolamayı planladığı ifade edilmiştir.", ok: false },
      { text: "III. cümlede sözü edilen şirketin bahsedilen platformda karbondioksit gazını metan gazına dönüştürdüğü ve bundan iyi kazanç sağladığına işaret edilmiştir.", ok: true },
      { text: "IV. cümlede karbondioksit gazının yıllık ortalama atmosfere yayılım oranı ve ekosistemdeki dengeyle emilim miktarından bahsedilmiştir.", ok: false },
      { text: "V. cümlede yapılan projeyle atmosfere daha az karbondioksit gazı salınacağına ve bunun olumlu sonuçlarına değinilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsan davranışları ile ilgili araştırmalarda en çok tartışılan konulardan biri olan \"duygu-zekâ\" kavramları arasındaki ilişkide alışılagelmiş anlayış... (V) Goleman, duygusal zekâyı \"bütünüyle bilişsel yeteneklerle ölçülen, IQ olarak adlandırılan akademik zekâyı tamamlayıcı farklı yetenekler\" şeklinde ifade etmektedir.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "V. cümlede duygusal zekânın IQ'yu 'tamamlayıcı' olduğu söylenmiştir. Bu, IQ'nun duygusal zekâ üzerinde bir etkisi olduğu anlamına gelmez, sadece ikisinin farklı ama birbirini bütünleyen yetenekler olduğunu belirtir.",
    answers: [
      { text: "I. cümlede, iki kavram arasındaki ilişkinin nasıl anlamlandırıldığıyla ilgili genel kanılardan bahsedilmiştir.", ok: false },
      { text: "II. cümlede, iyi bir yaşam söz konusu olduğunda duyguların geri planda kalması gerektiğine değinilmiştir.", ok: false },
      { text: "III. cümlede, duygu kavramı zekâ kavramıyla birlikte değerlendirilerek duygunun geliştirilebilir olduğu dile getirilmiştir.", ok: false },
      { text: "IV. cümlede, duygusal zekâ kavramı ile empati kavramı arasında ilişki olduğuna dair bir görüşten söz edilmiştir.", ok: false },
      { text: "V. cümlede, IQ'nun duygusal zekâ üzerinde etkisi olduğuyla ilgili bir görüşe değinilmiştir.", ok: true }
    ]
  },
  {
    text: "<p>... sağlıklı yaşam biçiminin parçası olarak aşırıya kaçmadan dijital oyunları oynamanın normal olduğu hatta oyunların duygusal yönden rahatlatma gibi olumlu katkılarının bulunduğu tespit edilse de eğer oyun oynama isteği kişi tarafından kontrol edilemiyorsa... bir problemden... söz edilmektedir.</p><p><b>Bu cümleden hareketle aşağıdakilerin hangisine kesin olarak ulaşılabilir?</b></p>",
    diff: 2,
    expl: "Cümlede 'dijital oyunları oynamanın... duygusal yönden rahatlatma gibi olumlu katkılarının bulunduğu tespit edilse de' denilerek, kontrollü oyunun olumlu etkileri olduğu açıkça belirtilmiştir.",
    answers: [
      { text: "Dijital oyunlar kişilerde bağımlılığına sebep olmakta, bu da onların hayat başarısını ve sağlığını etkilemektedir.", ok: false },
      { text: "Yapılan araştırmalar, dijital oyunları oynamanın normal olduğunu ancak bu oyunların kişilerin psikolojisini bozduğunu ortaya koymaktadır.", ok: false },
      { text: "Kontrollü oynanan dijital oyunların bireyde duygusal açıdan olumlu etkilerinin olduğu tespit edilmiştir.", ok: true },
      { text: "Dijital oyun bağımlısı olmamak için bireyin hayatını kontrol altına alması ve günlük işlerine odaklanması gerekmektedir.", ok: false },
      { text: "Sağlıklı yaşam için aşırıya kaçmadan dijital oyun oynanması bilim insanlarınca önerilmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Elektronik spor meraklılarının %65'ini 18-34 yaş aralığındaki, satın alma gücü yüksek insanlar oluştururken kadın hayranların katılımının %38'e ulaşmış olması, yatırımcılara ulaşılabilecek çok yönlü bir kitle sunmuş; ... bankalar ve otomobil üreticileri gibi birçok farklı sektör bu alana yatırım yapmaya başlamıştır.</p><p><b>Bu cümleden kesin olarak çıkarılacak yargı aşağıdakilerin hangisidir?</b></p>",
    diff: 2,
    expl: "Cümlede kitlenin 'satın alma gücü yüksek' ve 'çok yönlü' (kadın katılımı dahil) olması, yatırımcıların (farklı sektörlerin) bu alana ilgi göstermesine neden olmuştur. Bu durum D seçeneğinde tam olarak karşılanmaktadır.",
    answers: [
      { text: "18-34 yaş arası erkeklerin elektronik sporla ilgilenmesi reklam verenlerin ilgisini bu alana çekmiştir.", ok: false },
      { text: "Bankalar ve otomobil firmaları televizyon reklamlarından kaçan müşteri kitlesini yeniden kazanmaya çalışmaktadır.", ok: false },
      { text: "Genç nüfusun elektronik spora yönelmesi bu alanda iyi gelişmeler olacağı kanaati uyandırmış ve yeni spor kulüpleri kurulmaya başlanmıştır.", ok: false },
      { text: "Elektronik spor meraklılarının alım gücü yüksek ve çok yönlü insanlardan oluşması yatırımcıları bu alana yöneltmiş ve birçok sektör bu alana yatırım yapmaya başlamıştır.", ok: true },
      { text: "Satın alma gücü yüksek kadınların elektronik spora yönelmesi otomobil firmalarının dikkatini çekmiş ve kadınların tercihi olan modellerin reklamlarıyla bu sektöre yönelmişlerdir.", ok: false }
    ]
  },
  {
    text: "<p>Japonya'da 2021'de yapılan bir araştırma kapsamında 280 katılımcının yarısı ormanlık bir bölgeye yarısı da şehir merkezine gönderildi... araştırma sonucunda bir gününü ormanda geçirenlerin, şehirde bulunanlara göre daha düşük kan basıncına sahip olduklarını ve daha az strese maruz kaldıklarını ortaya koydu.</p><p><b>Bu cümleden kesin olarak çıkarılacak yargı aşağıdakilerin hangisidir?</b></p>",
    diff: 2,
    expl: "Araştırma verileri, ormanda vakit geçirenlerin şehirdekilere göre daha az stresli olduğunu kanıtlamıştır. Bu durum E seçeneğinde nesnel bir yargı olarak sunulmuştur.",
    answers: [
      { text: "Japonların şehirde yaşama arzusu doğada yaşama isteğinden daha fazladır.", ok: false },
      { text: "Japonlar doğada yaşamayı seven ve şehir hayatından kaçan bir toplumdur.", ok: false },
      { text: "Şehir hayatı Japonları yeni uğraşlarla kendilerini rahatlatma yöntemleri bulmaya yönlendirmiştir.", ok: false },
      { text: "Şehir hayatının stresi insanların doğaya ilgi duymasını sağlamıştır.", ok: false },
      { text: "Ormanlık bölgede yaşayan insanlar, şehirde yaşayanlara oranla stresten daha az etkilenirler.", ok: true }
    ]
  },
  {
    text: "<p>Teknolojinin ve yaşam standartlarının kalitesi ile birbir ilişkili olan matematik eğitimi olmadan; bir ülkede gelişimden, kalkınmadan, bilimden ve teknolojik ilerlemeden bahsetmek kolay değildir.</p><p><b>Bu cümleden kesin olarak çıkarılacak yargı aşağıdakilerin hangisidir?</b></p>",
    diff: 2,
    expl: "Cümlede matematik eğitiminin gelişim, bilim ve teknoloji için bir ön şart (temel) olduğu vurgulanmıştır. Dolayısıyla matematik eğitiminin iyi olduğu ülkelerde bu alanların geliştiği çıkarımı yapılabilir.",
    answers: [
      { text: "Matematik eğitimi ülkemizin uzun süredir aşamadığı bir sorundur.", ok: false },
      { text: "İyi matematik eğitimi almış toplumlar teknolojide başarılı olsalar bile ekonomik kalkınmayı gerçekleştirememektedirler.", ok: false },
      { text: "Bir ülkenin kalkınma eğilimi ekonomiye verdiği değerle matematiksel olarak ortaya konulur.", ok: false },
      { text: "Teknolojik gelişmeleri takip eden toplumlar, yaşam standartlarını yüksek tutmakta başarılı olmuşlardır.", ok: false },
      { text: "Matematik eğitiminin iyi olduğu ülkelerde bilim ve teknoloji ilerlemekte, ülke birçok yönden gelişmektedir.", ok: true }
    ]
  }
];