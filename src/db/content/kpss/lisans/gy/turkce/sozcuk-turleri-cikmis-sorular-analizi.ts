import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK TÜRLERİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SOZCUK_TURLERI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde \"fena\" sözcüğü diğerlerinden <b>farklı türdedir?</b></p>",
    diff: 2,
    expl: "A, C, D ve E seçeneklerinde 'fena' sözcüğü fiilleri niteleyerek zarf (belirteç) görevinde kullanılmıştır. B seçeneğinde ise 'hâl' ismini niteleyerek sıfat (ön ad) görevinde kullanılmıştır.",
    answers: [
      { text: "Burası gerçekten de çok fena kokuyor.", ok: false },
      { text: "Fena hâlde kızgın olan çocuk, bütün oyuncaklarını döktü.", ok: true },
      { text: "Merdivenlerden inerken bileğimi fena burktum.", ok: false },
      { text: "Fena konuşmadı bence, dinleyiciler ilgiyle takip ettiler.", ok: false },
      { text: "Karnım fena acıktı, bir şeyler mi yesek!", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde \"yeni\" sözcüğü diğerlerinden <b>farklı bir görevde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "A, B, D ve E seçeneklerinde 'yeni' sözcüğü isimleri niteleyen bir sıfattır. C seçeneğinde ise 'başladılar' fiilinin zamanını belirten bir zarf görevindedir.",
    answers: [
      { text: "Beni hayata bağlayan, ailemize katılan yeni misafirimizdi.", ok: false },
      { text: "Etrafına baktıkça daha önce görmediği yeni eşyalar görmeye başlıyordu.", ok: false },
      { text: "Yan masada oturan arkadaşlar, işe yeni başladılar.", ok: true },
      { text: "Yeni elbiselerinin içinde o kadar değişmişti ki onu kimse tanıyamadı.", ok: false },
      { text: "Yaşanan değişiklikler,yeni kararlar almamızı gerektirdi.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde \"bu\" sözcüğü, sözcük türü bakımından <b>ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "B, C, D ve E seçeneklerinde 'bu' sözcüğü ismin yerini tutan bir zamirdir. A seçeneğinde ise 'sonuçlar' ismini işaret eden bir sıfattır.",
    answers: [
      { text: "Bu sonuçlara ulaşmak hepimiz için oldukça zor oldu.", ok: true },
      { text: "Herkesin yaşama hakkı vardır ve bu kutsaldır.", ok: false },
      { text: "Görsel veriler yardımıyla bunların öğretilmesi daha etkili.", ok: false },
      { text: "Ne kadar açıklamaya çalışsa da bunun bir yararı olmayacaktı.", ok: false },
      { text: "Bu onun tek başına üstesinden gelebileceği bir sorun değildi.", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat tarihinde pek klasik sorular vardır. \"...'nın edebiyatımızdaki yeri <u>ne</u> (I) olmalıdır?\" cümlesi, edebiyat sınavlarında daima karşılaşılan sorulardandır. Ancak bununla <u>ne</u> (II) kastedildiği, soranın <u>ne</u> (III) tür bilgiyi ölçmek istediği kadar da açık değildir. Aynı soruyu Ömer Seyfettin için açıklayıcı biçimde sorarak <u>ne</u> (IV) öğrenilmek istendiğini ortaya koyabiliriz: Ömer Seyfettin olmasaydı Türk edebiyatında <u>ne</u> (V) olmazdı?</p><p><b>Bu parçada numaralanmış \"ne\" sözcüklerinden hangisinin türü diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı 'ne' sözcükleri zamir görevindeyken, III numaralı 'ne' sözcüğü 'tür' ismini nitelediği için soru sıfatıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Meslek gruplarının <u>bazıları</u> (I) üyelerinin davranışlarından sorumlu tutulur. Anneliğin de kimi açılardan bir meslek grubu sayılmasına rağmen onlardan <u>birinin</u> (II) kötü davranışı <u>diğerlerine</u> (III) duyulan saygıyı pek etkilemez. Ancak iyi örgütlenmiş meslek gruplarının üyeleri, insanların gözünde <u>birbiriyle</u> (IV) öyle özdeşleşmiştir ki mesleği icra eden birinin tutumu <u>tüm</u> (V) meslektaşların itibarını etkiler.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi zamir <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "I, II, III ve IV numaralı sözcükler belgisiz zamirdir. V numaralı 'tüm' sözcüğü ise 'meslektaşlar' ismini niteleyen bir belgisiz sıfattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Mantarlar denizlerde ve tatlı sularda bulunur. (II) Kimi zaman bunları su yüzeyinde köpükler şeklinde görürüz. (III) Bazılarıysa hayvanların derilerinde yaşarlar. (IV) Birçok deri hastalığına, ağız ve kulak iltihaplarına bu mantarlar neden olur. (V) Ancak mantarlar yararlı da olabilirler. (VI) Hayat kurtaran antibiyotiklerden penisilin, küf mantarından üretilmiştir.</p><p><b>Bu parçadaki numaralandırılmış cümlelerin hangisinde belirsizlik zamiri kullanılmıştır?</b></p>",
    diff: 2,
    expl: "III. cümledeki 'Bazılarıysa' kelimesi, hangi mantarlar olduğu tam belli olmayan bir topluluğun yerini tuttuğu için belgisiz (belirsizlik) zamiridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde soru anlamı, <b>diğerlerinden farklı türde bir sözcükle sağlanmıştır?</b></p>",
    diff: 3,
    expl: "A, C, D ve E seçeneklerinde soru anlamı zamirle (kim, neydi, kimden, kime) sağlanmıştır. B seçeneğinde ise 'Hangi öğrenci' tamlamasında 'hangi' soru sıfatıdır.",
    answers: [
      { text: "Sabahın bu saatinde kapıyı çalan kim?", ok: false },
      { text: "Hangi öğrenciydi soruların cevabını soran?", ok: true },
      { text: "Neydi onun deminden beri sizden öğrenmek istediği?", ok: false },
      { text: "Kimden haber bekliyormuş değerli dostum?", ok: false },
      { text: "İçinizden kime vereyim bu zor görevi?", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde altı çizili söz, <b>eylemin nasıl gerçekleştiğini bildirmektedir?</b></p>",
    diff: 2,
    expl: "D seçeneğindeki 'hızla' sözcüğü, 'yaygınlaşıyor' eyleminin nasıl gerçekleştiğini bildiren bir durum zarfıdır. Diğerleri zaman bildirmektedir.",
    answers: [
      { text: "Zaman hızla akarken <u>çoğu kez</u>, çevremizdeki güzelliklerin farkına varamıyoruz.", ok: false },
      { text: "Güvercinler yiyecek bulmak için <u>her zaman</u> buraya gelirlerdi.", ok: false },
      { text: "İşinin <u>akşama kadar</u> biteceğini umuyordu ama düşündüğü gibi olmadı.", ok: false },
      { text: "Genleriyle oynanmış tohumların kullanımı <u>hızla</u> yaygınlaşıyor.", ok: true },
      { text: "<u>Biraz sonra</u>, yaklaşık iki saat sürecek maceralı bir yolculuğa çıkacağız.", ok: false }
    ]
  },
  {
    text: "<p>On sekizinci yüzyıl romantik romanlarının atmosferini yaşatan <i>Seven Ne Yapmaz</i>'da başka bir kültürden gelen ve yabancı adlar taşıyan roman kahramanları yer alıyor. İçerdiği bazı klişelerle bu roman, yerli duyarlılığa da seslenen, Yeşilçam filmlerinin formülüne yaslanan bir eser olarak değerlendirilebilir.</p><p><b>Bu parçada aşağıdaki sıfat türlerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'On sekizinci' (sayı sıfatı), 'romantik, yabancı, yerli' (niteleme sıfatı), 'bu roman' (işaret sıfatı), 'başka, bazı, bir' (belgisiz sıfat) vardır; ancak soru sıfatı yoktur.",
    answers: [
      { text: "Niteleme sıfatı", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Soru sıfatı", ok: true },
      { text: "Belgisiz sıfat", ok: false },
      { text: "Sayı sıfatı", ok: false }
    ]
  },
  {
    text: "<p>Dört yaşında olduğunuzu ve birinin size şunu teklif ettiğini düşünün: Eğer yapmakta olduğum görevi bitirmemi beklersen iki lokum alabilirsin. O zamana kadar bekleyemezsen hemen şimdi ama sadece bir tane alabilirsin. Çocuğun hangi tercihte bulunduğu, onun kendi yaşamında izleyeceği yol hakkında sizce de bir fikir vermez mi?</p><p><b>Bu parçada aşağıdaki sözcük türlerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'birinin' (belgisiz zamir), 'size, sizce, onun' (kişi zamiri), 'şunu' (işaret zamiri) ve 'kendi' (dönüşlülük zamiri) vardır. 'Hangi tercihte' ifadesindeki 'hangi' ise soru sıfatıdır; parçada soru zamiri yoktur.",
    answers: [
      { text: "Belgisiz zamir", ok: false },
      { text: "Kişi zamiri", ok: false },
      { text: "Soru zamiri", ok: true },
      { text: "İşaret zamiri", ok: false },
      { text: "Dönüşlülük zamiri", ok: false }
    ]
  },
  {
    text: "<p>Her sevginin başlangıcı ve süreci, o sevginin bitişinin getireceği sonsuz boşluk ve yalnızlıkla dolu. Belirsizlikler arasında belirlemeye çalıştığımız yaşam gibi. Sevgi isteği, kendi kendine yaşamı kanıtlama dileği kadar büyük. Birisiyle yan yana olmak, kendi mevcudiyetini unutmak mı?</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'her sevgi' (belgisiz sıfat), 'Birisiyle' (belgisiz zamir), 'sonsuz boşluk' (niteleme sıfatı) ve 'o sevginin' (işaret sıfatı) vardır; ancak kişi zamiri yoktur.",
    answers: [
      { text: "Belgisiz sıfat", ok: false },
      { text: "Belgisiz zamir", ok: false },
      { text: "Niteleme sıfatı", ok: false },
      { text: "Kişi zamiri", ok: true },
      { text: "İşaret sıfatı", ok: false }
    ]
  },
  {
    text: "<p>Çalışma modellerinin ve beklentilerinin hızla değiştiği bu yıllarda, hibrit modeli benimseyen şirketlerin çalışanlarına hangi destekleri sağlayacağı konusunda bazı tereddütler yaşanmaktadır. Hibrit modelde sunulan desteklerde günlük yemek ücreti ve çevrim içi sağlık destekleri kadar internet ücreti ve ofis mobilyaları da oldukça önem arz etmektedir.</p><p><b>Bu parçada aşağıdaki sözcük türlerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'hızla' (durum zarfı), 'bu yıllarda' (işaret sıfatı), 'hangi' (soru sıfatı), 'bazı' (belgisiz sıfat) vardır. Zaman zarfı bulunmamaktadır.",
    answers: [
      { text: "Durum zarfı", ok: false },
      { text: "Zaman zarfı", ok: true },
      { text: "Soru sıfatı", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Belgisiz sıfat", ok: false }
    ]
  },
  {
    text: "<p>İlhan Berk, Türk edebiyatının <u>en</u> (I) etkili şairlerindendir. <u>Hayattayken</u> (II) şiirsel arayışlarından hiç vazgeçmedi, ömrünün son yıllarında bile tekrara düşmedi. <u>Sınırsız</u> (III) bir yenilik ve genişlemeydi onun derdi. Şiirleri, ondandır, <u>hep</u> (IV) diri kaldı. Şiir yazma uğraşı bir tutku olarak <u>daima</u> (V) sürdü onda.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I (en), II (Hayattayken), IV (hep) ve V (daima) numaralı sözcükler zarf görevindedir. III numaralı 'Sınırsız' sözcüğü ise 'yenilik' ismini nitelediği için sıfattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yüzlerce belki <u>binlerce</u> (I) senelik zeytin ağaçlarının arasında uzanan, çukur, iki <u>yanı</u> (II) böğürtlen ve hayıtlarla örtülü yolda ağır ağır yürüyordum. Arkamdan yükselen güneş, gölgemi araba izlerinin kıvrımları üzerine serip uzaklara <u>kadar</u> (III) götürüyor; <u>deniz</u> (IV) tarafından yüzüme doğru esen <u>hafif</u> (V) fakat serin bahar rüzgârı, kasabadan uzaklaştığımı hatırlatıyordu.</p><p><b>Bu parçada numaralanmış sözcükler tür bakımından gruplandırıldığında hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I ve V sıfat, II ve IV isimdir. III numaralı 'kadar' ise edattır ve tek başına kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sonbaharda İstanbul, bir ressamın paleti <u>kadar</u> (I) renklidir. Kuruyan yapraklar bulutları, bulutlar da denizi <u>rengârenk</u> (II) boyar. Bir de lodos çıkmışsa insanın başı döner <u>bu</u> (III) cümbüşün içinde, kendini sokaklara atıveresi gelir. Martılar, adalar çağırır <u>kendine</u> (IV).</p><p><b>Bu parçada numaralanmış sözcüklerin türleri aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "'kadar' edat, 'rengârenk' (boyar eylemini nitelediği için) zarf, 'bu' (cümbüş ismini işaret ettiği için) sıfat, 'kendine' zamirdir. Doğru sıralama A seçeneğidir.",
    answers: [
      { text: "Edat - zarf - sıfat - zamir", ok: true },
      { text: "Bağlaç - sıfat - zamir - zarf", ok: false },
      { text: "Edat - sıfat - isim - sıfat", ok: false },
      { text: "Bağlaç - zarf - zamir - sıfat", ok: false },
      { text: "Zarf - sıfat - zarf - zamir", ok: false }
    ]
  },
  {
    text: "<p><u>Çok</u> (I) sevdiğiniz insanlar hakkında konuşmak zordur. Sevginiz <u>öylesine</u> (II) taşar ki kalbinizden yükselen heyecan dalgası nefesinizi keser. Kelimeler dilinizden bir türlü dökülmez, dışarıdan bakana anlamsız gelecek <u>birtakım</u> (III) jest ve mimiklere dönüşür. En azından benim için böyledir <u>bu</u> (IV).</p><p><b>Bu parçadaki altı çizili sözcüklerin türleri aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Çok (Zarf), öylesine (Zarf), birtakım (Sıfat), bu (Zamir).",
    answers: [
      { text: "Zarf - zamir - sıfat - sıfat", ok: false },
      { text: "Sıfat - zamir - zarf - sıfat", ok: false },
      { text: "Zarf - zarf - sıfat - zamir", ok: true },
      { text: "Zarf - edat - sıfat - zamir", ok: false },
      { text: "Sıfat - edat - zarf - sıfat", ok: false }
    ]
  },
  {
    text: "<p><u>Bilincimiz</u> (I) ve dolayısıyla bilincimizdeki kavramlar değişiyor <u>durmadan</u> (II). Bir yüzyıldan öbürüne \"şair\" kavramının da değiştiğini söyleyebiliriz. Dünün <u>o</u> (III) duygulu şairi gitti,yerine tam anlamıyla bir \"insan araştırmacısı\" olan <u>çağdaş</u> (IV) şair geldi.</p><p><b>Bu parçada altı çizili sözcüklerin türleri aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "Bilincimiz (İsim), durmadan (Zarf), o (Sıfat - 'o duygulu şairi'), çağdaş (Sıfat).",
    answers: [
      { text: "İsim - zarf - sıfat - sıfat", ok: true },
      { text: "İsim - zarf - zamir - sıfat", ok: false },
      { text: "İsim - edat - zamir - zarf", ok: false },
      { text: "Edat - zarf - isim - zarf", ok: false },
      { text: "Edat - zarf - sıfat - isim", ok: false }
    ]
  },
  {
    text: "<p>Cisimler, ısındığında veya soğuduğunda ya enerji kazanır ya da enerji kaybeder. <u>Gece</u> (I) yanan bir ateşin karşısında ayakta durursanız vücudunuzun ateşe dönük <u>tarafı</u> (II), diğer tarafınıza göre kaybettiğinden daha <u>fazla</u> (III) enerji kazandığı için ısınır. Sırtınız ise havaya, kazandığından daha fazla enerji verdiği <u>için</u> (IV) soğuyarak üşür.</p><p><b>Bu parçadaki altı çizili sözcüklerin türleri aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Gece (zarf), tarafı (isim), fazla ('enerji' ismini nitelediği için sıfat), için (edat).",
    answers: [
      { text: "İsim - edat - zarf - sıfat", ok: false },
      { text: "Zarf - isim - sıfat - zarf", ok: false },
      { text: "İsim - edat - sıfat - zarf", ok: false },
      { text: "Zarf - isim - sıfat - edat", ok: true },
      { text: "Sıfat - isim - zarf - edat", ok: false }
    ]
  },
  {
    text: "<p>Yemyeşil ağaçlar, <u>berrak</u> (I) bir dere,dere kenarında su içen ve dinlenen ceylanlar, her yeri kaplayan rengârenk çiçekler... Bu tasvir, hepimizin <u>sürekli</u> (II) gördüğü manzaraya değil, bilgisayar ekranlarımızı süslemesi <u>için</u> (III) seçtiğimiz ekran koruyuculardan <u>birine</u> (IV) ait.</p><p><b>Bu parçada numaralanmış sözcüklerin türü aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "berrak (Sıfat), sürekli (Zarf), için (Edat), birine (Zamir).",
    answers: [
      { text: "Sıfat - zarf - bağlaç - edat", ok: false },
      { text: "Sıfat - zarf - edat - zamir", ok: true },
      { text: "Zarf - sıfat - bağlaç - isim", ok: false },
      { text: "Sıfat - sıfat - zarf - zamir", ok: false },
      { text: "Zarf - zarf - bağlaç - isim", ok: false }
    ]
  },
  {
    text: "<p>Ahmet Hamdi Tanpınar, ilk baskısı 1946'da yayımlanan <i>Beş Şehir</i> denemesinin <u>asıl</u> (I) konusunun hayatımızda kaybolan şeylerin ardından duyulan üzüntü ile yeniye <u>karşı</u> (II) beslenen özlem olduğunu söyler. Sadece milletlerin değil bireyin asıl manasını maziyle tanımlayabileceğini düşünen yazara göre mazi, <u>daima</u> (III) vardır. Kendimiz olabilmek için maziyle hesaplaşmaya mecburuz. İşte <i>Beş Şehir</i> <u>böyle</u> (IV) bir mecburiyetin sesidir.</p><p><b>Bu parçada numaralanmış sözcüklerin türü aşağıdakilerin hangisinde sırasıyla verilmiştir?</b></p>",
    diff: 3,
    expl: "asıl (Sıfat), karşı (Edat), daima (Zarf), böyle (Sıfat). Kitapta A ve B seçenekleri aynı verilmiştir; cevap anahtarında doğru cevap B'dir.",
    answers: [
      { text: "Sıfat - edat - zarf - edat", ok: false },
      { text: "Sıfat - edat - zarf - sıfat", ok: true }, // Kitapta A ve B seçenekleri aynı; cevap anahtarı B.
      { text: "İsim - edat - sıfat - zamir", ok: false },
      { text: "İsim - zarf - zarf - edat", ok: false },
      { text: "Zamir - sıfat - zarf - bağlaç", ok: false }
    ]
  },
  {
    text: "<p><u>Azıcık</u> (I) esinti olmasa insanı eritecek <u>kadar</u> (II) sıcak bir İstanbul gününde şehrimin yağmurlarını özleyerek Tophane-i Amire'deki Büyük Ustalar Sergisi'ne doğru yol alıyorum. Rönesans'ın üç <u>büyüğü</u> (III) Leonardo, Michelangelo ve Raphael... <u>Nasıl</u> (IV) olmuş da üçü aynı zamanda, aynı coğrafyada yetişmiş?</p><p><b>Bu parçada numaralanmış sözcüklerin türü aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Azıcık ('esinti' ismini nitelediği için sıfat), kadar (edat), büyüğü (adlaşmış sıfat, isim), Nasıl (zarf).",
    answers: [
      { text: "Zarf - Edat - Sıfat - Zamir", ok: false },
      { text: "Sıfat - Edat - İsim - Zarf", ok: true },
      { text: "Sıfat - Zarf - Zamir - Edat", ok: false },
      { text: "Zarf - Bağlaç - İsim - Sıfat", ok: false },
      { text: "İsim - Bağlaç - Zamir - Zarf", ok: false }
    ]
  },
  {
    text: "<p>Tahiti açıklarında, 30 m <u>derinlikte</u> (I), el değmemiş bir mercan resifi keşfedildi. Mercan resifleri genellikle daha <u>sığ</u> (II) sularla özdeşleştirildiği için söz konusu keşif biraz şaşırtıcı bulundu. 3 km uzunluğa sahip olan doğa harikasının <u>bu</u> (III) derinlikte bulunan <u>en</u> (IV) büyük resiflerden biri olduğu bildirildi.</p><p><b>Bu parçada numaralanmış sözcüklerin türü aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?</b></p>",
    diff: 3,
    expl: "derinlikte (isim), sığ ('sular' ismini nitelediği için sıfat), bu ('derinlik' ismini işaret ettiği için sıfat), en ('büyük' sıfatını derece yönünden belirttiği için zarf).",
    answers: [
      { text: "Bağlaç - edat - sıfat - zamir", ok: false },
      { text: "İsim - sıfat - sıfat - zarf", ok: true },
      { text: "Zarf - edat - sıfat - zarf", ok: false },
      { text: "İsim - edat - zarf - zamir", ok: false },
      { text: "Zarf - bağlaç - sıfat - isim", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde <b>işi başkasına yaptırma anlamı bulunmaktadır?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'kaldırttı' fiili, eylemin başkasına yaptırıldığını bildiren ettirgen/oldurgan çatılı bir fiildir.",
    answers: [
      { text: "Fakültede kullandığı kitapları depoya kaldırttı.", ok: true },
      { text: "Dün akşam boyunca arabaları yıkayıp temizledi.", ok: false },
      { text: "Tatilden döndüğünde giysilerinin tümünü düzenledi.", ok: false },
      { text: "Eve gelir gelmez, annem görmeden odamı topladım.", ok: false },
      { text: "Bu sene gerçekleştirilecek işlerin planını yaptık.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdakilerin hangisinde <b>altı çizili sözcükler tür bakımından aynıdır?</b></p>",
    diff: 3,
    expl: "B seçeneğinde ilk 'gece' isim, ikinci 'gece' zarf görevindedir. D seçeneğinde ise 'çok' sözcüklerinin ikisi de zarf görevinde kullanılmıştır.",
    answers: [
      { text: "Gecenin <u>geç</u> ve yıldızsız bir saatinde gökyüzüne baktı.<br>Çok <u>geç</u> kalktığını, saate bakınca anladı ne yazık ki.", ok: false },
      { text: "Eski güzel günlerdeki gibi, <u>gece</u> sakin ve huzur vericiydi.<br>Çocukluk yıllarımda, yalnız <u>gece</u> oynatılan kuklalar vardı.", ok: false },
      { text: "Arabayı koştururken boynundaki ziller <u>güzel</u> şıngırdıyordu atın.<br>İnan ki senin <u>güzel</u> hatırın olmasa bu işe kesinlikle girişmezdim.", ok: false },
      { text: "<u>Çok</u> beğendiği ve sevdiği hâlde yine de almadı o elbiseyi.<br>Çalışırken <u>çok</u> zorlansam da emeklerimin karşılığını aldım.", ok: true },
      { text: "Çekmecesindeki deftere ne <u>delice</u> fikirler yazmıştı, kim bilir.<br>Mesleğin <u>delice</u> seviyor ve kariyer basamaklarını bir bir tırmanıyordu.", ok: false }
    ]
  },
  {
    text: "<p>(I) Roman kahramanları; gerçek dediğimiz insanlar gibi hatta onlardan daha çok düşünen, sevinen ve acı duyan kişilerdir. (II) Onların da bizim gibi yaşadıklarını hangimiz düşünmedik ki? (III) Dünyamız, hayalî dediğimiz ancak hakikatte bizden daha canlı olan roman kişileriyle doludur. (IV) O kişiler aramızda dolaşıp dururlar. (V) Hele sıkıntılı zamanlarımızda aradıklarımız onlardır fakat roman kahramanları bütün gerçeklikleri ile asıl kendilerini ortaya çıkaranlar için vardır.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV. cümlede 'O kişiler' ifadesindeki 'o' sözcüğü zamir değil, ismi işaret eden bir işaret sıfatıdır.",
    answers: [
      { text: "I. cümlede, bağlaç vardır.", ok: false },
      { text: "II. cümlede, edat kullanılmıştır.", ok: false },
      { text: "III. cümlede, birinci çoğul iyelik eki almış sözcük vardır.", ok: false },
      { text: "IV. cümlede, işaret zamiri kullanılmıştır.", ok: true },
      { text: "V. cümlede, dönüşlülük zamiri vardır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Bugüne kadar yaptığım mülakatların hemen hepsiyle ilgili hoş hatıralarım var. (II) Bu hatıralardan birkaçına kitabımın giriş bölümünde yer verdim. (III) Kitapta yer alan metinlere fazla müdahale etmedim. (IV) Yalnızca yazım birliğini sağlamak için küçük düzenlemeler yaptım. (V) Özetle, sıkılmadan okuyacağınızı ümit ettiğim bir kitap yazdım.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "V. cümlede 'sıkılmadan' sözcüğü zarf-fiildir, 'özetle' ise edat/bağlaç görevindedir. Yer-yön zarfı (aşağı, yukarı vb.) yoktur.",
    answers: [
      { text: "I. cümlede, belgisiz zamir vardır.", ok: false },
      { text: "II. cümlede, işaret sıfatı vardır.", ok: false },
      { text: "III. cümlede, miktar zarfı vardır.", ok: false },
      { text: "IV. cümlede, niteleme sıfatı vardır.", ok: false },
      { text: "V. cümlede, yer-yön zarfı vardır.", ok: true }
    ]
  },
  {
    text: "<p>Her sene, <u>zamanı</u> (I) gelince İstanbul'un mahallelerinden Boğaz'ın <u>köylerine</u> (II) göçler başlardı. Eski İstanbullular; Boğaziçi'nin kenarlarına <u>yapılmış</u> (III) ve eski erkân sedirleriyle, kerevet, şilte ve halılar üstünde yer <u>minderleri</u> (IV) gibi eski eşyalarla döşenmiş geniş odalı, gönül ferahlatıcı yalılara <u>taşınırlardı</u> (V).</p><p><b>Bu parçada altı çizili sözcüklerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "'zamanı gelince' ifadesindeki 'zamanı' sözcüğündeki '-ı' eki belirtme durumu eki değil, iyelik ekidir. Bu nedenle A seçeneğindeki yargı yanlıştır.",
    answers: [
      { text: "I. sözcük belirtme durumu eki almıştır.", ok: true },
      { text: "II.sözcük iyelik eki almıştır.", ok: false },
      { text: "III. sözcük sıfat-fiil eki almıştır.", ok: false },
      { text: "IV. sözcük çokluk eki almıştır.", ok: false },
      { text: "V. sözcük geniş zaman eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p>Önce baygın bir iniltiydi yamaçtan duyulan<br>Sonra bir gölge belirmişti kuş uçmaz yoldan</p><p><b>Bu dizelerde aşağıdakilerin hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde 'önce, sonra' (zaman belirteci), 'belirmişti' (çekimli fiil), 'bir' (belgisiz sıfat) ve 'inilti' (fiilden türemiş isim) vardır ancak iyelik eki almış sözcük bulunmamaktadır.",
    answers: [
      { text: "Zaman belirteci", ok: false },
      { text: "İyelik eki almış sözcük", ok: true },
      { text: "Çekimli fiil", ok: false },
      { text: "Belgisiz sıfat", ok: false },
      { text: "Fiilden türemiş isim", ok: false }
    ]
  },
  {
    text: "<p>Şanlıurfa iline bağlı olan Birecik, <u>mavi</u> (I) suları durgun akan Fırat'ın <u>yanında</u> (II), Asurlulardan kalma surlar <u>üzerindeki</u> (III) on iki burçlu kalesiyle, tarihî mimarısını <u>yıkık dökük</u> (IV) de olsa günümüze <u>kadar</u> (V) taşıyan güzel bir yer.</p><p><b>Bu cümledeki numaralanmış sözlerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III. numaralı 'üzerindeki' sözcüğündeki '-ki' bağlaç değil, sıfat yapan ektir.",
    answers: [
      { text: "I'inci, niteleme amacıyla kullanılmıştır.", ok: false },
      { text: "II'ncide birden fazla çekim eki vardır.", ok: false },
      { text: "III'üncüde bağlaç olan \"ki\" kullanılmıştır.", ok: true },
      { text: "IV'üncü, ikilemeden oluşmuştur.", ok: false },
      { text: "V'inci, sözcük türü olarak edattır.", ok: false }
    ]
  },
  {
    text: "<p>İnsan; daha güçlü canlılara karşı tek başına kendini koruyamaz, tek başına ihtiyaçlarını karşılayamaz dolayısıyla bir arada yaşamak tabii ve zaruridir.</p><p><b>Bu cümlede aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Cümlede 'daha güçlü' (niteleme sıfatını niteleyen zarf), 'canlılara karşı' (yönelme durumuyla kullanılan edat), 'koruyamaz, karşılayamaz' (yeterlilik bildiren olumsuz fiil) ve 'kendini' (belirtme durumu eki almış zamir) vardır. 'İhtiyaçlarını' sözcüğündeki iyelik eki üçüncü tekil kişi iyelik ekidir; üçüncü çoğul iyelik eki almış isim yoktur.",
    answers: [
      { text: "Niteleme sıfatını niteleyen zarf", ok: false },
      { text: "Yönelme durumuyla kullanılan edat", ok: false },
      { text: "Yeterlilik bildiren olumsuz fiil", ok: false },
      { text: "Üçüncü çoğul iyelik eki almış isim", ok: true },
      { text: "Belirtme durumu eki almış zamir", ok: false }
    ]
  }
];
