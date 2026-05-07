import { McQ } from "../../../../types";

// ============================================================================
// ZARF (BELİRTEÇ) - TEST 1
// ============================================================================
export const TUR_ZARF_TEST_1: McQ[] = [
  {
    text: "<p>Karanlıkta bir gece kuşu öter yahut bir cırcır böceği. Alır sizi <u>I. uzaklara</u> götürür. <u>II. Birden</u> çocukluğunuzu hatırlarsınız. Şerit gözünüzün önünden <u>III. ağır aksak</u> geçer. Her şeyi <u>IV. bir bir</u> hatırlarsınız. Bir daha yaşarsınız yeni baştan. Başka zaman yıldırım hızı ile düşündükleriniz <u>V. yavaş yavaş</u> gelirler, sizi içlerine alırlar, sararlar. Vakit geçer farkında olmazsınız.</p><p><b>Bu parçadaki numaralanmış sözcüklerin hangisi fiili <u>nitelememektedir</u>?</b></p>",
    diff: 2,
    expl: "Zarflar fiil ve fiilimsileri niteler. I numaralı \"uzaklara\" sözcüğü sırasıyla çokluk ve yönelme hâl eki almış bir isimdir ve fiili niteleme (zarf olma) özelliği taşımaz. Diğerleri (birden, ağır aksak, bir bir, yavaş yavaş) durum zarfı görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yol onun, varlık onun, <u>I. gerisi</u> <u>II. hep</u> angarya; <u>III. yüzüstü</u> <u>IV. çok</u> süründün, <u>V. şimdi</u> ayağa kalk Sakarya!</p><p><b>Bu parçadaki numaralanmış sözcüklerin hangisi zarf görevinde <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "I numaralı \"gerisi\" sözcüğü, bir şeyin son kalan bölümü anlamında olup isimdir. Diğerlerindeki \"hep\" (durum/zaman), \"yüzüstü\" (durum), \"çok\" (miktar), \"şimdi\" (zaman) fiilleri sınırlandıran zarflardır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Elbette</u> ki serbest nazım <u>II. en</u> güç olanıdır. <u>III. Hele</u> okuyanın anlaması <u>IV. büsbütün</u> zordur çünkü her şairin ahengini keşfetmesi lâzımdır. Bunun için serbest nazmın <u>V. ne kadar</u> yerleşirse yerleşsin aruzu ve heceyi büsbütün ortadan kaldırması imkânsızdır.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "III numaralı \"hele\" sözcüğü cümleler arası anlam bağı sağladığı için bağlaçtır. Diğerleri ise zarftır (elbette: durum zarfı, en: derecelendirme zarfı, büsbütün: durum zarfı, ne kadar: soru zarfı).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İnsanı ancak kendisi tamamlar<br>İçinde başka dışında başkasın<br>Eksiğin fazlana elbet bulaşacak</p><p><b>Bu şiirde aşağıdakilerden hangisi örneklenmemiştir?</b></p>",
    diff: 3,
    expl: "Şiirde derecelendirme zarfı (en, daha, çok vb.) kullanılmamıştır. İnsanı (tekil ad), ancak (zarf), kendisi (zamir), elbet (durum zarfı), eksiğin (adlaşmış sıfat) sözcükleri diğer seçenekleri örnekler.",
    answers: [
      { text: "Durum zarfı", ok: false },
      { text: "Zamir", ok: false },
      { text: "Adlaşmış sıfat", ok: false },
      { text: "Tekil ad", ok: false },
      { text: "Derecelendirme zarfı", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde pekiştirmeli sözcük, diğerlerinden farklı görevde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki \"perperişan\" pekiştirmeli sözcüğü, \"bırakır\" fiilini nitelediği (Nasıl bırakır?) için zarf görevindedir. Diğerlerindeki pekiştirmeli sözcükler (koskoca dünyanın, yepyeni bir adam, yemyeşil bir ışık, yusyuvarlak gözler) ismin önüne gelerek sıfat görevini üstlenmiştir.",
    answers: [
      { text: "<u>Koskoca</u> dünyanın içinde tek başına kalmış gibiyim.", ok: false },
      { text: "Hayatın bütün zorluklarına rağmen her daim <u>yepyeni</u> bir adam olacaktı.", ok: false },
      { text: "<u>Yemyeşil</u> bir ışığın altına küçük masalar ve tabureler konmuştu.", ok: false },
      { text: "Uzun tüyleri, <u>yusyuvarlak</u> gözleriyle kendisini sevmemi istiyordu.", ok: false },
      { text: "Gün ağardı mı zavallıyı ter içinde <u>perperişan</u> bırakır giderdi.", ok: true }
    ]
  },
  {
    text: "<p><u>I. Bazı günler</u> sadece <u>II. gökyüzüne</u> <u>III. birkaç dakika</u> bakmak, var olduğunu kendime hatırlatmak için <u>IV. dışarı</u> çıkıyorum. Kriz <u>V. her ne ise</u> hepimiz, <u>VI. aynı gökyüzünün</u> altındayız.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisi farklı türdedir?</b></p>",
    diff: 2,
    expl: "IV numaralı \"dışarı\" sözcüğü \"çıkıyorum\" fiilinin yönünü (Nereye çıkıyorum?) yalın hâlde bildirdiğine göre yön zarfıdır. Parçadaki diğer altı çizili kelimeler veya gruplar ise isim veya sıfat (bazı, birkaç, aynı vb.) görevlerindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "IV (dışarı)", ok: true },
      { text: "V", ok: false },
      { text: "VI", ok: false }
    ]
  },
  {
    text: "<p><u>I. Bugünü</u>, dünün sözcükleriyle ifade edemeyeceğimiz gibi, <u>II. yarının</u> dünyasını da <u>III. bugünün</u> anlamlarıyla anlatamayız. <u>IV. Şu an</u> kullandığımız sözcükler, toplumsal değişim sürecine ister istemez ayak uyduracaktır.</p><p><b>Bu parçadaki numaralanmış altı çizili sözcüklerden hangisi zaman bildirme görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı \"şu an\" sözcüğü \"kullandığımız\" sıfat-fiilini zaman bakımından (Ne zaman kullandığımız?) kısıtladığı için zaman zarfıdır. Diğerlerindeki zaman bildiren kelimeler (bugünü, yarının vb.) çekim ekleri aldıkları için isimleşmişlerdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "Soru metnindeki V (kitap baskı hatası)", ok: false }
    ]
  },
  {
    text: "<p>Merdivenlerin oraya koşuyorum,<br>Beklemek gövde gösterisi zamanın;<br><u>Çok</u> erken gelmişim seni bulamıyorum,<br>Bir şeyin provası yapılıyor sanki.</p><p><b>Aşağıdaki cümlelerin hangisinde bu dizedeki altı çizili sözcükle aynı işlevde bir sözcüğe yer <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "Öncüldeki dizelerde geçen \"çok\" sözcüğü \"erken\" zaman zarfını derecelendirdiği için derecelendirme zarfıdır. C seçeneğinde derecelendirme zarfına yer verilmemiştir. Diğerlerindeki 'çok', 'hayli', 'en', 'pek' sözcükleri derecelendirme zarfıdır.",
    answers: [
      { text: "Sosyal hayatın <u>çok</u> boyutlu yapısının, birtakım olumsuzluklar doğurduğu yadsınamaz bir gerçektir.", ok: false },
      { text: "Pandemi başladığından beri öğrencilerden, sınıf ortamından <u>hayli</u> uzakta kalmış bulunuyoruz.", ok: false },
      { text: "Bugünkü şartlar eskiyi aramak değil, yeniyi kurmağa çalışmaktır.", ok: true },
      { text: "Büyüklerimiz mutlu bir anda dahi <u>en</u> kötü günümüz böyle olsun, derlerdi.", ok: false },
      { text: "Son zamanlarda <u>pek</u> de elverişli olmayan bir çalışma temposu içerisinde olmaktan yorgun düştü.", ok: false }
    ]
  },
  {
    text: "<p>Yılın ilk karı <u>I. bugün</u> yağdı. Hem de lapa lapa... <u>II. Uzun zamandır</u>, ilk karın yağışına şahit olmamıştım. <u>III. Bir sabah</u> <u>IV. uyandığımda</u> her yeri karla kaplı bulurdum. <u>V. Akşam</u> saatlerinde kar yağdı. Bu bize çok güzel bir sürpriz oldu. Hayat sürprizlerle dolu. Hoş geldin kış.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi belirteç (zarf) <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "V numaralı \"akşam\" sözcüğü \"akşam saatleri\" belirtisiz isim tamlamasında tamlayan görevinde olup isimdir. Diğerleri ise fiilleri zaman bakımından kısıtlandıran zaman zarflarıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Türkmenler, insanın ruhunun ölümden sonra <u>I. uçup</u> giden ve <u>II. asla</u> ölmeyen bir kuşa dönüştüğüne inanır. <u>III. Ayrıca</u> yazılı kaynaklarda kümes hayvanı yetiştiriciliği, şahin ve kuş avcılığı ile ilgili <u>IV. oldukça</u> önemli bilgilere <u>V. tek tek</u> yer verilmiştir. Bu durum, Türkmencede kuşlarla ilişkili birçok kelimenin oluşmasına ve kelime servetinin artmasına yol açmıştır.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi durum zarfı <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı \"oldukça\" sözcüğü \"önemli bilgiler\" sıfat tamlamasındaki \"önemli\" sıfatını derecelendirdiği (Ne kadar önemli?) için derecelendirme (miktar) zarfıdır, durum zarfı değildir. Diğerleri durum zarfıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Şiirde sesi <u>nasıl</u> kullandığımız, <u>hangi</u> kelimeyi veya heceyi vurguladığımız, <u>nasıl</u> bir ses tonu ile okuduğumuz, uzun-kısa, kalın-ince ses özelliklerini <u>nasıl</u> kullandığımız, <u>nasıl</u> bir hece ölçüsü seçtiğimiz ve ses benzerliğini <u>nasıl</u> sağladığımız şiirin ritmine yöneliktir. Ritmi <u>ne kadar</u> duyurabildiğimiz, <u>hangi</u> kelimeyi <u>ne zaman</u>, <u>nerede</u>, <u>niye</u> kullandığımız, <u>ne</u> tür bir yapı kurguladığımız önemlidir.</p><p><b>Bu parçadaki numaralanmış on iki soru sözcüğünü, türleri bakımından sınıflandırırsak aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Parçadaki soru sözcüklerinden 6'sı zarf (nasıl kullandığımız, nasıl kullandığımız, nasıl sağladığımız, ne kadar duyurabildiğimiz, ne zaman, niye), 1'i zamir (nerede), 5'i sıfattır (hangi kelime, nasıl bir ses, nasıl bir hece, hangi kelime, ne tür).",
    answers: [
      { text: "7 Zarf, 1 Zamir, 4 Sıfat", ok: false },
      { text: "6 Zarf, 2 Zamir, 4 Sıfat", ok: false },
      { text: "6 Zarf, 1 Zamir, 5 Sıfat", ok: true },
      { text: "7 Zarf, 0 Zamir, 5 Sıfat", ok: false },
      { text: "6 Zarf, 3 Zamir, 3 Sıfat", ok: false }
    ]
  },
  {
    text: "<p>I. Son zamanlarda <u>pek yorgun</u> görünüyordu.<br>II. Dediğim gibi yaparsan olayı <u>daha kolay</u> çözersin, dedi.<br>III. Aslında <u>çok daha hızlı</u> konuşmasına rağmen videoda yavaş konuşuyordu.<br>IV. Her şeyin <u>en güzelini</u> hak ediyorsun ve her şey yoluna girecek, merak etme.<br>V. Az evvel onun defterlerine baktım da <u>gayet düzenli</u> çalışıyor.</p><p><b>Bu cümlelerin hangisinde zarf, farklı türde bir sözcüğü derecelendirmektedir?</b></p>",
    diff: 3,
    expl: "IV. cümlede \"en\" derecelendirme zarfı \"güzelini\" şeklindeki adlaşmış sıfatı derecelendirmektedir. Diğer cümlelerde yer alan \"pek\", \"daha\", \"çok daha\", \"gayet\" zarfları ise, fiilleri niteleyen zarfları (yorgun, kolay, hızlı, düzenli) derecelendirmektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  }
];