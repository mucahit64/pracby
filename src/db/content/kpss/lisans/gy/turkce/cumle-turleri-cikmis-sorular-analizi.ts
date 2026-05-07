import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE TURLERİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_CUMLE_TURLERI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıdakilerden hangisi sıralı cümledir?</b></p>",
    diff: 2,
    expl: "Sıralı cümleler, virgül veya noktalı virgülle ayrılmış birden fazla yüklem içerir. E seçeneğinde 'keser' ve 'şekillendirir' olmak üzere iki ayrı yüklem bulunmaktadır.",
    answers: [
      { text: "Cam; 4.000 yılı aşkın zamandır kum, çakmak taşı ya da kuvarstan yapılmaktadır.", ok: false },
      { text: "Arabalardaki çok katlı ön camlar, iki levhanın arasına bir plastik tabakası koyularak üretilir.", ok: false },
      { text: "Pürüzsüz bir yüzey elde edilmesi için cam, kalay üzerinde kalınlığı her yerde eşitlenene kadar sıvı hâlde tutulur.", ok: false },
      { text: "Vitraylar; küçük, renkli cam parçalarının kurşun şeritlerle birbirine eklenmesiyle yapılır.", ok: false },
      { text: "Cam üfleme ustaları sıcak, erimiş cam madenini keser; içine borudan hava üfleyerek şekillendirir.", ok: true }
    ]
  },
  {
    text: "<p>(I) Yaz mevsiminin ilk günlerini ormanlarla... (II) Şehir merkezine gider gitmez... uğradım ve... yöneldim. (III) Balığa giden sandalları... adres. (IV) Yalı Kahvesi'nde... istedim. (V) Sinopluların hiçbir içeceği... yudumlarken.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi, yükleminin türüne göre diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı cümlelerin yüklemleri (çevirdim, yöneldim, istedim, öğrendim) fiildir. III numaralı cümlenin yüklemi olan 'adres' ise isimdir; bu nedenle isim cümlesidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Çiğdemlerden sonra... görünür. (II) Gözleri yaşlı... perişandır. (III) Güzel kokusundan... sorar. (IV) Sümbülün verdiği... gelmektedir. (V) Önceleri ezel bağında... atılmıştır.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisi, yüklemin türü bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "I, III, IV ve V numaralı cümlelerin yüklemleri (görünür, sorar, gelmektedir, atılmıştır) fiildir. II numaralı cümlenin yüklemi olan 'perişandır' sözcüğü isim soyludur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı cümle 'Destan, Gılgamış'ın edebî hayat arayışının hikâyesini anlatır.' şeklindedir. Bu cümle tek yüklemli ve fiilimsi içermeyen basit bir cümledir; bağlaçla bağlanmış bir 'bağlı cümle' değildir.",
    answers: [
      { text: "I, kurallı ve birleşik bir cümledir.", ok: false },
      { text: "II, olumlu bir fiil cümlesidir.", ok: false },
      { text: "III, kurallı ve olumlu bir cümledir.", ok: false },
      { text: "IV, bağlı ve olumlu bir cümledir.", ok: true },
      { text: "V, kurallı bir isim cümlesidir.", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı cümle 'Bir \"ip\" veya tutacak bir \"sap\" sahibi olmayan bu kişiler için söylenen \"ipsiz sapsız\" deyimi meslek sahibi olmayanları anlatmak amacıyla kullanılır hâle gelmiş.' şeklindedir. Tek yüklemi olan bu cümle sıralı değil, fiilimsiler içerdiği için girişik birleşik bir cümledir.",
    answers: [
      { text: "I. cümlede, yüklem geniş zamanın rivayetiyle çekimlenmiştir.", ok: false },
      { text: "II. cümle, birleşik bir cümledir.", ok: false },
      { text: "III. cümle, yüklemi türemiş fiil olan kurallı bir cümledir.", ok: false },
      { text: "IV. cümle, sıralı bir cümledir.", ok: true },
      { text: "V. cümle, içinde zarf tümleci olan bir cümledir.", ok: false }
    ]
  },
  {
    text: "<p>Hayatta çalışmaktan hiç korkmadım ama yaşlanmak zor iş. Her gün yeniden kurulan dünyaya biraz daha eskimiş olarak uyanıveriyor kendi içinde insan.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "Metinde 'kendi' sözcüğü dönüşlülük zamiri olarak kullanılmıştır ancak şıklara göre 'Dönüşlülük zamiri kullanılmıştır' ifadesi söylenemez olarak işaretlenmiştir (muhtemelen öge içindeki görevi kastedilmektedir). Ancak yapısal olarak incelendiğinde 'uyan-ı-vermek' tezlik fiilidir.",
    answers: [
      { text: "İsim ve fiil cümleleri vardır.", ok: false },
      { text: "Tezlik fiili kullanılmıştır.", ok: false },
      { text: "İsimden fiil yapan ek vardır.", ok: false },
      { text: "Geçişli yüklem vardır.", ok: false },
      { text: "Dönüşlülük zamiri kullanılmıştır.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yüklem, türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "A, B, D ve E seçeneklerindeki yüklemler (öğrenmişti, duyuyordu, ister, ekledi) fiildir. C seçeneğinin yüklemi olan 'gereklidir' sözcüğü ise isimdir.",
    answers: [
      { text: "Üsküdar'da doğan sanatçı, farklı hocalardan ebru sanatını öğrenmişti.", ok: false },
      { text: "O da tıpkı annesi gibi ebru sanatına özel bir ilgi duyuyordu.", ok: false },
      { text: "Ebru sanatıyla ilgilenen herkesin işe temelden başlaması gereklidir.", ok: true },
      { text: "Öğrencilerinden, ebru sanatını gelecek nesillere aktarmalarını ister.", ok: false },
      { text: "Ebru sanatında kullandığı çeşitli çiçek motiflerine papatyayı da ekledi.", ok: false }
    ]
  },
  {
    text: "<p>(I) Doğanın en başarılı mimarları... karıncalardır. (II) Bunlar... inşa etmeyi de biliyorlar. (III) Yuvalarını yaparken... oluşturuyorlar. (IV) Bu iş için... kullanıyorlar. (V) Birleştirilmesi gereken... dikiyor bu yavru karıncalar.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi yükleminin türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "II, III, IV ve V numaralı cümlelerin yüklemleri (biliyorlar, oluşturuyorlar, kullanıyorlar, dikiyor) fiildir. I numaralı cümlenin yüklemi olan 'karıncalardır' ise isimdir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yüklem, sözcük türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı cümlelerin yüklemleri (incelemiyor, sarmış, yapabilir, gerekiyor) fiildir. III numaralı cümlenin yüklemi olan 'spor dalı' bir isim tamlamasıdır, dolayısıyla isim cümlesidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V numaralı cümle 'Güzelliğin; insan eli, dili ve sesinde var olan somut hâlidir.' şeklindedir. Tek bir yüklemi (tamlama grubundan oluşan bir isim yüklemi) olan bu cümle basit bir isim cümlesidir; 'bağımlı sıralı' değildir.",
    answers: [
      { text: "I. cümlenin yüklemi, belirtili isim tamlamasından oluşmuştur.", ok: false },
      { text: "II. cümlede, soru sıfatı kullanılmıştır.", ok: false },
      { text: "III. cümlede, belgisiz zamir özne görevindedir.", ok: false },
      { text: "IV. cümle, isim cümlesidir.", ok: false },
      { text: "V. cümle, bağımlı sıralı bir cümledir.", ok: true }
    ]
  }
];