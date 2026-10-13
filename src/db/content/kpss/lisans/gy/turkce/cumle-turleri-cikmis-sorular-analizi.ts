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
    text: "<p>(I) Yaz mevsiminin ilk günlerini ormanlarla, dağlarla ve denizle karşılamak için çevirdim rotamı Sinop'a. (II) Şehir merkezine gider gitmez, methini önceden duyduğum yerel pazara uğradım ve kahvaltılıklarımı alıp doğruca limandaki çay bahçesine yöneldim. (III) Balığa giden sandalları ve küçük tekneleri izlemek, Sinop'ta neler olup bittiğini öğrenmek için bu çay bahçeleri en doğru adres. (IV) Yalı Kahvesi'nde denize nazır bir masaya yerleşip müşterilerinin adını, kahvesini yahut çayını nasıl içtiğini bildiği rivayet edilen Mükremin'den bir çay da ben istedim. (V) Sinopluların hiçbir içeceği, soğuk tüketmeyi sevmediğini öğrendim Mükremin'in getirdiği sımsıcak çayı yudumlarken.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi, yükleminin türüne göre diğerlerinden farklıdır?</b></p>",
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
    text: "<p>(I) Çiğdemlerden sonra gök rengindeki elbisesiyle yeni açmış sümbül görünür. (II) Gözleri yaşlı, saçları dağınık ve hâli perişandır. (III) Güzel kokusundan sarhoşa dönen şair, ona bu gönül okşayıcı kokuyu nereden, hangi aktardan aldığını sorar. (IV) Sümbülün verdiği cevap çiğdemin cevabına karşılık gelmektedir. (V) Önceleri ezel bağında henüz açılmadık bir gonca olan ve güzel kokusunu sevgilinin rüzgârından alan sümbül, bu bahar ülkesinden hicran sahiline atılmıştır.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisi, yüklemin türü bakımından ötekilerden farklıdır?</b></p>",
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
    text: "<p>(I) Gılgamış Destanı en eski edebî eserlerden biri olmasıyla tanınır. (II) Babil versiyonunu içeren en eski tabletlerin MÖ ikinci bin yılın başında yazıldığı sanılmaktadır. (III) Bu metin 11 tablete yazılmış olan yaklaşık 3.600 mısradan oluşur. (IV) Destan, Gılgamış'ın edebî hayat arayışının hikâyesini anlatır. (V) Destanın şöhretine rağmen ondan günümüze kalan tek şey, Gılgamış'ın Uruk kenti çevresinde yaptırdığı surdur.</p><p><b>Bu parçadaki numaralandırılmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
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
    text: "<p>(I) Şimdi olduğu gibi eskiden de Anadolu'dan İstanbul'a çalışmak üzere insanlar gelirmiş. (II) Bunların çoğu herhangi bir mesleğe sahip olmadıklarından ya hamallıkla ya da kazma kürekle çalışarak işe başlarlarmış. (III) Bunlar içinde öyleleri olurmuş ki ne hamallık yapacak bir ipleri ne de işçilik yapacak kazmaları, kürekleri bulunurmuş. (IV) Bir \"ip\" veya tutacak bir \"sap\" sahibi olmayan bu kişiler için söylenen \"ipsiz sapsız\" deyimi meslek sahibi olmayanları anlatmak amacıyla kullanılır hâle gelmiş. (V) Hâlen, haylazlık eden, geçim derdinin ne olduğunu bilmeyen sorumsuz insanlar için de bu deyim kullanılmaktadır.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
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
    text: "<p>Hayatta çalışmaktan hiç korkmadım ama yaşlanmak zor iş. Her gün yeniden kurulan dünyaya biraz daha eskimiş olarak uyanıveriyor kendi içinde insan.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Parçadaki yüklemler 'korkmadım', 'zor iş' ve 'uyanıveriyor'dur. 'Korkmak' ve 'uyanmak' nesne almayan geçişsiz fiillerdir, 'zor iş' ise isim soylu yüklemdir; bu nedenle geçişli yüklem yoktur. Parçada isim ve fiil cümleleri, tezlik fiili (uyanıveriyor), isimden fiil yapan ek (yaş-la-n-mak) ve dönüşlülük zamiri (kendi) vardır.",
    answers: [
      { text: "İsim ve fiil cümleleri vardır.", ok: false },
      { text: "Tezlik fiili kullanılmıştır.", ok: false },
      { text: "İsimden fiil yapan ek vardır.", ok: false },
      { text: "Geçişli yüklem vardır.", ok: true },
      { text: "Dönüşlülük zamiri kullanılmıştır.", ok: false }
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
    text: "<p>(I) Doğanın en başarılı mimarları olarak kabul edebileceğimiz oecophyllalar, dokumacı karıncalardır. (II) Bunlar, mantarların üzerinden atlayarak eğlendikleri gibi, mükemmel yuvalar inşa etmeyi de biliyorlar. (III) Yuvalarını yaparken yaprakları dolma sarar gibi kıvırarak birbirine sıkıca kenetleyip karınca köprüsü oluşturuyorlar. (IV) Bu iş için özel yetiştirilmiş yavru karıncaları dikiş makinesinin iğnesi gibi kullanıyorlar. (V) Birleştirilmesi gereken noktaları, salgıladıkları ipekle dikiyor bu yavru karıncalar.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi yükleminin türü bakımından diğerlerinden farklıdır?</b></p>",
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
    text: "<p>(I) Mağaraları yalnızca bilim insanları incelemiyor. (II) Doğa sporlarına ilgi duyanların bazıları da mağaracılığa merak sarmış. (III) Onlar için mağaracılık, bir yandan keşif gezisi yaparken bir yandan da mağaraların derinliklerine ulaşmayı amaçlayan bir spor dalı. (IV) Doğayla iç içe olmayı, yeni yerler görmeyi seven herkes bu sporu yapabilir. (V) Ama kapalı ve karanlık yerlerde kalmaktan rahatsızlık duymamaları gerekiyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yüklem, sözcük türü bakımından diğerlerinden <u>farklıdır</u>?</b></p>",
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
    text: "<p>(I) Mimari, heykel, resim, müzik, edebiyat olmak üzere beş ana daldan oluşan güzel sanatlar, insanın ve insanlık tarihinin inkâr edilmez bir gerçeğidir. (II) Hangi çağa, hangi coğrafyaya, hangi milletin tarihine bakarsanız bakın, sanat hep var olmuş. (III) Belki güzel sanatlardan bazıları öne çıkmış, bazıları nitelikleri yönüyle bugünkünden farklılıklar göstermiş ama sanat hep var olmuştur. (IV) Çünkü sanat, insan ruhunun vazgeçilemez aşklarından biri olan güzelliği esas alan bir insan faaliyetidir. (V) Güzelliğin; insan eli, dili ve sesinde var olan somut hâlidir.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümle 'Güzelliğin; insan eli, dili ve sesinde var olan somut hâlidir.' şeklindedir. Tek bir yüklemi (tamlama grubundan oluşan bir isim yüklemi) olan bu cümle sıralı değildir; bu nedenle 'bağımlı sıralı' bilgisi yanlıştır.",
    answers: [
      { text: "I. cümlenin yüklemi, belirtili isim tamlamasından oluşmuştur.", ok: false },
      { text: "II. cümlede, soru sıfatı kullanılmıştır.", ok: false },
      { text: "III. cümlede, belgisiz zamir özne görevindedir.", ok: false },
      { text: "IV. cümle, isim cümlesidir.", ok: false },
      { text: "V. cümle, bağımlı sıralı bir cümledir.", ok: true }
    ]
  }
];