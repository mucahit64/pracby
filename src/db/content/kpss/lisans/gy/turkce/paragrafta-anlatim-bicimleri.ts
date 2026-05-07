import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFTA ANLATIM BİÇİMLERİ - TEST 1
// ============================================================================
export const TUR_PARAGRAF_ANLATIM_BICIMLERI_TEST_1: McQ[] = [
  {
    text: "<p>Bu parçada aşağıdaki <b>düşünceyi geliştirme yollarından</b> hangisi ağır basmaktadır?</p>",
    diff: 2,
    expl: "Parçada ilk Türk devletlerindeki eğitim ve destanlardaki yansımaları anlatılırken Oğuz Kağan, Manas ve Ergenekon Destanları art arda sıralanarak 'sayıp dökme' yapılmıştır.",
    answers: [
      { text: "A) Örnekleme", ok: false },
      { text: "B) Tanımlama", ok: false },
      { text: "C) Karşılaştırma", ok: false },
      { text: "D) Tanık gösterme", ok: false },
      { text: "E) Sayıp dökme", ok: true }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdakilerden hangisi <b>ağır basmaktadır?</b></p>",
    diff: 2,
    expl: "Parçada yazınsal metinler ile bilimsel metinler arasındaki farklar 'karşılaştırma' yoluyla ve R. Barthes'ın sözleriyle desteklenerek ortaya konmuştur.",
    answers: [
      { text: "A) Betimleme", ok: false },
      { text: "B) Kişileştirme", ok: false },
      { text: "C) Karşılaştırma", ok: true },
      { text: "D) Öyküleme", ok: false },
      { text: "E) Açıklama", ok: false }
    ]
  },
  {
    text: "<p>Bu parçada hangi <b>duyu ile algılanan ayrıntılar</b> ağır basmaktadır?</p>",
    diff: 1,
    expl: "Parçada 'uzun bacakları', 'seyrek saçlı kafası', 'bulanık küçük gözleri', 'sarkan rengi belirsiz bıyıkları' gibi görsel ayrıntılar ağırlıklı olarak verilmiştir.",
    answers: [
      { text: "A) Tatma", ok: false },
      { text: "B) Görme", ok: true },
      { text: "C) Koklama", ok: false },
      { text: "D) Dokunma", ok: false },
      { text: "E) İşitme", ok: false }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdakilerden hangisine <b>yer verilmemiştir?</b></p>",
    diff: 3,
    expl: "Parçada niteleyici sözcükler (uzayan geceler), karşılaştırma (önceleri yeşil olan), açıklama ve sebep-sonuç cümleleri vardır. Ancak ikilemelere yer verilmemiştir.",
    answers: [
      { text: "A) Niteleyici sözcüklere", ok: false },
      { text: "B) Karşılaştırmaya", ok: false },
      { text: "C) Açıklama cümlesine", ok: false },
      { text: "D) Sebep-sonuç cümlesine", ok: false },
      { text: "E) İkilemelere", ok: true }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımıyla ilgili olarak aşağıdakilerden hangisi <b>söylenemez?</b></p>",
    diff: 3,
    expl: "Parçada bir olay (kahvaltı hazırlığı) anlatıldığı için öyküleme vardır; 'suçluluk duygusu epey para kazandırıyor' derken eleştirel tutum ve karşıt ifadeler mevcuttur. Ancak kişileştirme yapılmamıştır.",
    answers: [
      { text: "A) Öyküleyici anlatıma yer verildiği", ok: false },
      { text: "B) Eleştirel bir tutum sergilendiği", ok: false },
      { text: "C) Tekrarlanan sözcüklerle anlamın pekiştirildiği", ok: false },
      { text: "D) Karşıt çağrışımlı ifadelerin kullanıldığı", ok: false },
      { text: "E) Kişileştirmeden yararlanıldığı", ok: true }
    ]
  },
  {
    text: "<p>Bu parçada aşağıdaki <b>anlatım özelliklerinin hangilerinden</b> yararlanılmıştır?</p>",
    diff: 2,
    expl: "Parçada Uygurlardaki eğitim anlayışı hakkında bilgi verildiği için 'Açıklama', bu anlayışın Kök Türklerinki ile benzer ve farklı yönleri verildiği için 'Karşılaştırma' yapılmıştır.",
    answers: [
      { text: "A) Açıklama - Karşılaştırma", ok: true },
      { text: "B) Örnekleme - Tanımlama", ok: false },
      { text: "C) Tartışma - Karşılaştırma", ok: false },
      { text: "D) Tartışma - Örnekleme", ok: false },
      { text: "E) Açıklama - Tartışma", ok: false }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdaki <b>anlam özelliklerinin hangisinden yararlanılmamıştır?</b></p>",
    diff: 3,
    expl: "Parçada 'eğer... çalışmış olsalardı' (koşul), 'dünyadaki en iyi' (karşılaştırma), 'en kesin zaman tutucular' (açıklama) ve 'mümkün olan veya olabilecek' durumlar (olasılık) vardır. Ancak 'tasarı' (yapılması planlanan şey) yoktur.",
    answers: [
      { text: "A) Koşul", ok: false },
      { text: "B) Açıklama", ok: false },
      { text: "C) Karşılaştırma", ok: false },
      { text: "D) Olasılık", ok: false },
      { text: "E) Tasarı", ok: true }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdakilerden hangisi <b>yoktur?</b></p>",
    diff: 3,
    expl: "Parçada ebabil kuşları tanımlanmış, özellikleri açıklanmış ve saptanmıştır. Ayrıca 'en belirgin özellik' denilerek karşılaştırma yapılmıştır. Ancak 'benzetme'ye yer verilmemiştir.",
    answers: [
      { text: "A) Açıklama", ok: false },
      { text: "B) Tanımlama", ok: false },
      { text: "C) Karşılaştırma", ok: false },
      { text: "D) Benzetme", ok: true },
      { text: "E) Saptama", ok: false }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdakilerden hangisi <b>yoktur?</b></p>",
    diff: 3,
    expl: "Parçada vandalizmin tanımı yapılmış, Abbé Grégoire'ın ismi verilerek (ancak sözü değil) örnekleme yapılmıştır. Fakat parçada bir kişinin sözüne yer verilmediği için 'tanık gösterme' yoktur.",
    answers: [
      { text: "A) Tanımlama", ok: false },
      { text: "B) Tanık gösterme", ok: true },
      { text: "C) Karşılaştırma", ok: false },
      { text: "D) Açıklama", ok: false },
      { text: "E) Nesnellik", ok: false }
    ]
  },
  {
    text: "<p>Bu parçada büyüme ve öğrenme kavramlarının anlatımında <b>hangilerinden yararlanılmıştır?</b></p>",
    diff: 2,
    expl: "Büyüme tanımlanmış (Tanımlama), öğrenme ile karşılaştırılmış (Karşılaştırma) ve her ikisi için örnekler (Örnekleme) verilmiştir. Dolayısıyla her üçünden de yararlanılmıştır.",
    answers: [
      { text: "A) Yalnız I", ok: false },
      { text: "B) Yalnız II", ok: false },
      { text: "C) I ve II", ok: false },
      { text: "D) I ve III", ok: false },
      { text: "E) I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımıyla ilgili olarak aşağıdakilerden hangisi <b>yanlıştır?</b></p>",
    diff: 3,
    expl: "Parçada Ayder Yaylası'na ait fiziksel özellikler insana aktarılmamıştır (kişileştirme yoktur); aksine Zil Kalesi insana benzetilmiştir.",
    answers: [
      { text: "A) Öznel yargılar vardır.", ok: false },
      { text: "B) Benzetmeden faydalanılmıştır.", ok: false },
      { text: "C) Doğaya ait özellikler insana aktarılmıştır.", ok: true },
      { text: "D) Farklı duyulara seslenen ögelerden yararlanılmıştır.", ok: false },
      { text: "E) Karşılaştırmaya başvurulmuştur.", ok: false }
    ]
  },
  {
    text: "<p>Bu parçanın anlatımında aşağıdakilerden hangisi <b>vardır?</b></p>",
    diff: 2,
    expl: "Parçada İhsan Oktay Anar'ın roman anlayışı hakkındaki kendi sözlerine yer verilerek görüş ispatlanmıştır. Bu 'tanık gösterme' yöntemidir.",
    answers: [
      { text: "A) Tanık gösterme", ok: true },
      { text: "B) Tanımlama", ok: false },
      { text: "C) Benzetme", ok: false },
      { text: "D) Öyküleme", ok: false },
      { text: "E) Betimleme", ok: false }
    ]
  }
];

// ============================================================================
// PARAGRAFTA ANLATIM BİÇİMLERİ - TEST 2
// ============================================================================
export const TUR_PARAGRAFTA_ANLATIM_BICIMLERI_TEST_2: McQ[] = [
  {
    text: "<p>Norveç orman kedisi; sıra dışı görünümüyle gizemli bir havaya sahip, oldukça popüler bir ırktır. Bu özel canlı, isminden de anlaşıldığı üzere İsveç kökenlidir... Günümüzde ise kedi severlerin ilk görüşte kendine hayran bırakan görüntüleri, zekâları ve sevgi dolu oluşlarıyla dikkatleri hâlâ üzerlerine çekmektedirler.</p><p><b>Bu parçanın anlatımında aşağıdakilerin hangisine başvurulmuştur?</b></p>",
    diff: 2,
    expl: "Parçanın genelinde Norveç orman kedisinin kökeni, fiziksel özellikleri ve popülaritesi hakkında bilgi verildiği için 'açıklama' anlatım tekniği kullanılmıştır.",
    answers: [
      { text: "Somutlamaya", ok: false },
      { text: "Benzetmeye", ok: false },
      { text: "Açıklamaya", ok: true },
      { text: "Öykülemeye", ok: false },
      { text: "Betimlemeye", ok: false }
    ]
  },
  {
    text: "<p>Türkiye, subtropikal iklim kuşağında yer almaktadır... Üç yanı denizlerle çevrili ve ortalama yüksekliği yaklaşık 1100 m olan Türkiye'de, birçok alt iklim tipi de belirmiştir... Buna, topografik özelliklerinin karmaşıklığı ve kısa mesafelerde değişme eğiliminde olması vb. fiziki coğrafya etmenleri de eklenebilir.</p><p><b>Bu parçanın anlatımıyla ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Parçada Türkiye'nin iklimsel özellikleri nesnel verilerle açıklanmaktadır. Bilgi verme amacı, nesnellik, göndergesel işlev ve gerekçeli cümleler mevcuttur; ancak parçada herhangi bir 'koşul cümlesine' yer verilmemiştir.",
    answers: [
      { text: "Bilgi vermek amacıyla yazılmıştır.", ok: false },
      { text: "Nesnellik ön plandadır.", ok: false },
      { text: "Koşul cümlesine yer verilmiştir.", ok: true },
      { text: "Dil, göndergesel işlevde kullanılmıştır.", ok: false },
      { text: "Gerekçeli cümlelerden yararlanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Mutfakta, üzeri damalı bir muşambayla kaplı, açılır kapanır masada, yaşamımın birçok dönemine tanıklık etmiş bu eski nesnede, çelik bir tastan çorba içiyorum. Masanın ağırlaşmış yüzü, hafif dalgalı bir denizi andırıyor... Kalın dilimlenmiş ekmekler arasında dolaşan karıncalar görüyorum. Amaçsız bir geziye çıkmış gibiler.</p><p><b>Bu parçanın anlatımında aşağıdakilerden hangisi <u>yoktur?</u></b></p>",
    diff: 3,
    expl: "Metinde betimleme (mutfak ve masa tasviri), insandan doğaya aktarım (karıncaların geziye çıkması), benzetme (denizi andırması) ve mecazlı ifadeler mevcuttur. Ancak 'masmavi, tertemiz' gibi pekiştirmeli sözlere yer verilmemiştir.",
    answers: [
      { text: "Betimleme", ok: false },
      { text: "İnsandan doğaya aktarım", ok: false },
      { text: "Benzetme", ok: false },
      { text: "Mecazlı ifadeler", ok: false },
      { text: "Pekiştirmeli sözler", ok: true }
    ]
  },
  {
    text: "<p>Echenoz'un \"Ravel\" adlı romanını bir oturuşta okudum. Ertesi gün, birkaç paragrafa geri dönmek istedim, kitabı yeniden elime aldım. İleride bir kez daha okuma isteği sarabilir beni sarmayabilir de.</p><p><b>Bu parçada sözü edilen romanın özelliği aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yazarın kitabı 'bir oturuşta' okuduğunu belirtmesi, romanın kesintiye uğramayan, sürükleyici ve 'akıcı' bir yapıda olduğunu gösterir.",
    answers: [
      { text: "Kalıcılık", ok: false },
      { text: "Akıcılık", ok: true },
      { text: "Özgünlük", ok: false },
      { text: "Ulusal lık", ok: false },
      { text: "Evrensellik", ok: false }
    ]
  },
  {
    text: "<p>Komşuluk, yapay hatta zorlama bir ilişkidir. Günün herhangi bir anında, farklı ruh durumu ve saç biçimlerinde komşunuza rastlayabilirsiniz... Komşunuz size, siz komşunuza tuhaf, aykırı ve hatta zevksiz geliyor olabilir ama komşu evin sahibi siz olmadıkça komşunuzu seçemezsiniz.</p><p><b>Bu parçanın anlatımında aşağıdakilerden hangisi <u>yoktur?</u></b></p>",
    diff: 3,
    expl: "Parçada niteleyici unsurlar (yapay, zorlama), sayıp dökme (rastlaşma anları), ikinci kişili anlatım (siz) ve açıklama tekniği vardır. Ancak metinde bir 'deyim' kullanılmamıştır. (Çözüm anahtarında 'surat asmak' veya benzeri bir deyimin yokluğuna vurgu yapılmıştır).",
    answers: [
      { text: "Niteleyici unsurlar", ok: false },
      { text: "Sayıp dökme", ok: false },
      { text: "İkinci kişili anlatım", ok: false },
      { text: "Açıklama", ok: false },
      { text: "Deyim", ok: true }
    ]
  },
  {
    text: "<p>İyi bir anlatımda bulunması gereken özelliklerden biri açıklıktır... Buna göre,<br>I. Bu masa, eski masa kadar sağlam değil.<br>II. Böreğinin tarifini kimseye vermez.<br>III. Genç kadına doğru dikkatlice bakıyordu.<br>IV. Kitabın her satırını ben kendim yazdım.<br><b>yargılarının hangilerinde anlatımda açıklık ilkelerine uyulmamıştır?</b></p>",
    diff: 3,
    expl: "II. cümlede 'senin böreğin' mi yoksa 'onun böreği' mi olduğu belli değildir (zamir eksikliği). III. cümlede 'genç' kelimesinden sonra virgül gelmezse öznenin kim olduğu (genç olan kadın mı yoksa genç birisi kadına mı bakıyor) belirsizdir. Bu iki durum açıklığı bozar.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve IV", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p>Türk yazı dillerinin, lehçelerinin ve ağızlarının dil özelliklerini belirleyen... Kâşgarlı Mahmud Arapça kökenli divan sözünü \"sözlük\" anlamında kullanmıştır. Arapça kökenli lugat ise \"sözcük, kelime, söz\" anlamlarının yanı sıra \"dil\" anlamını taşımaktadır.</p><p><b>Bu parçada bilginin aktarımında aşağıdaki düşünceyi geliştirme yollarından hangisi ağır basmaktadır?</b></p>",
    diff: 2,
    expl: "Metinde 'divan' ve 'lugat' kavramlarının ne anlama geldiği açıklandığı için 'tanımlama' yolu ağır basmaktadır.",
    answers: [
      { text: "Tanımlama", ok: true },
      { text: "Karşılaştırma", ok: false },
      { text: "Örnekleme", ok: false },
      { text: "Benzetme", ok: false },
      { text: "Tanık gösterme", ok: false }
    ]
  },
  {
    text: "<p>Sanatçı hiçbir zaman bilime, bilimselliğe... ters düşmemelidir... Bu kuralı yaparken de bir cümlede anlattığı bir durumu bir sonraki cümlede inkâr etmemeli, aktarılanlar mantık çerçevesinde verilmelidir.</p><p><b>Bu parçada yazar, aşağıdaki anlatım ilkelerinden hangisinin öneminden söz etmektedir?</b></p>",
    diff: 2,
    expl: "Bir sanatçının kendi içinde çelişmemesi ve anlattıklarının mantık çerçevesinde birbirini desteklemesi 'tutarlılık' ilkesi ile ilgilidir.",
    answers: [
      { text: "Açıklık", ok: false },
      { text: "Tutarlılık", ok: true },
      { text: "Doğallık", ok: false },
      { text: "Duruluk", ok: false },
      { text: "Doğruluk", ok: false }
    ]
  },
  {
    text: "<p>Atatürk, dünya barışına verdiği önemi \"Yurtta barış, dünyada barış.\" özdeyişiyle dile getirmiştir... Yine \"Dünyanın filan yerinde bir rahatsızlık varsa 'Bana ne?' dememeliyiz...\" sözleriyle dünyanın bir bütün, her milletin onun bir parçası olduğunu ve dünya barışının sağlanmasında bütün milletlere görev düştüğünü vurgulamıştır.</p><p><b>Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b></p>",
    diff: 2,
    expl: "Yazar, dünya barışı konusundaki düşüncelerini desteklemek ve inandırıcılığı artırmak amacıyla Mustafa Kemal Atatürk'ün sözlerine başvurduğu için 'tanık gösterme' tekniğini kullanmıştır.",
    answers: [
      { text: "Açıklama", ok: false },
      { text: "Tanımlama", ok: false },
      { text: "Karşılaştırma", ok: false },
      { text: "Tanık gösterme", ok: true },
      { text: "Örnekleme", ok: false }
    ]
  },
  {
    text: "<p>Küçük istasyon binasının arkasında... eski bir vagonda kalıyorduk... Annem de o saatlerde dışarıda olur, tavuklara yem verirdi... Vagonun çatısına çekilmiş iplere dolaşık ebruli, mavi kahkaha çiçekleri, cennet süpürgeleri... vardı... Annem tulumbadan su çeker, elimi yüzümü yıkardı.</p><p><b>Bu parçanın anlatımıyla ilgili olarak aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "Parçada olaylar bir akış içerisinde (öyküleme) ve tasvirlerle (betimleme) verilmiştir. Sayıp dökmeler ve farklı cümle türleri mevcuttur. Ancak olayların 'iç konuşmalarla' aktarıldığına dair bir veri yoktur.",
    answers: [
      { text: "Sayıp dökmelere yer verilmiştir.", ok: false },
      { text: "Farklı cümle türleri kullanılmıştır.", ok: false },
      { text: "İzlenimsel bir havası vardır.", ok: false },
      { text: "Öyküleyici anlatım yeğlenmiştir.", ok: false },
      { text: "Olaylar, iç konuşmalarla aktarılmıştır.", ok: true }
    ]
  },
  {
    text: "<p>Bilimsel adı Quercus Volcanica olan kasnak meşesi, sadece Anadolu'ya özgü bir ağaçtır... Kerestesi değerli olan bu ağaç, 25-30 m boya ve 1,6 m çapa ulaşabilir.<br><b>Bu parçanın anlatımında;</b><br>I. betimleme ögelerine ağırlık verme,<br>II. sayısal verilerden yararlanma,<br>III. uzmanların tanıklığına başvurma,<br>IV. düşünceleri tartışma havasında ortaya koyma<br><b>gibi anlatım özelliklerinden hangilerine başvurulmuştur?</b></p>",
    diff: 2,
    expl: "Ağacın fiziksel özelliklerinin (yaprak boyutu, kenar yapısı) anlatılması betimleme; boy ve çap ölçülerinin verilmesi ise sayısal verilerden yararlanma örnekleridir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p>Akılcılık ve coşumculuk kavramlarının bir arada telaffuz edilmeleri, ilk bakışta sorunlu görünebilir. Fikir ve kültür akımları tarihinde duyguya, hayal gücüne ve sezgiye... olan birincisine kısmen bir tepki olarak geliştiği açıktır.</p><p><b>Bu parçanın anlatımıyla ilgili aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "Parçada akılcılık ve coşumculuk karşılaştırılarak açıklanmış, yorumlar yapılmış ve devrik cümlelere yer verilmemiştir. Ancak metin 'nesnellikten yararlanılarak' değil, kişisel yorum ve değerlendirmelerle (öznellik) oluşturulmuştur.",
    answers: [
      { text: "Kavramlar karşılaştırılarak açıklamalara yer verilmiştir.", ok: false },
      { text: "Yorum yapılarak durum değerlendirilmesi yapılmıştır.", ok: false },
      { text: "Anlatım nesnellikten yararlanılarak oluşturulmuştur.", ok: true },
      { text: "Konuyu kapalı bir anlatımla verecek şekilde sanatlı bir dil kullanılmıştır.", ok: false },
      { text: "Devrik cümlelere yer verilmemiştir.", ok: false }
    ]
  }
];