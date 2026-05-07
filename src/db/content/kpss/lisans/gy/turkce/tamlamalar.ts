import { McQ } from "../../../../types";

// ============================================================================
// TAMLAMALAR - TEST 1
// ============================================================================
export const TUR_TAMLAMALAR_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıda verilen mısraların hangisinde \"kar\" sözcüğü bir sıfat tamlamasının unsurudur?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki \"ipek gibi bir kar\" ifadesinde \"ipek gibi\" edat grubu sıfat görevinde olup \"kar\" ismini nitelemiştir. Yani \"kar\" sözcüğü sıfat tamlamasının tamlananıdır (unsurudur). Diğer seçeneklerde \"kar\" sözcüğü isim tamlamasının unsurudur (kızakların kar-ı, kar sesi-dir, kar yağış-ı-ndan, kar gecesi).",
    answers: [
      { text: "İpek gibi bir kar yağdı üzerime / Bir kız gitti ipeğin üzerinden", ok: true },
      { text: "Çıngırakların, kızakların karı / Yağdı her şeyin üstüne sessizce", ok: false },
      { text: "Bin yıldan uzun bir gecenin bestesidir bu / Bin yıl sürecek zannedilen kar sesidir bu", ok: false },
      { text: "Ey aşkı bilen, geçmedi üşümem! / Ben bir aşkın kar yağışından geliyorum.", ok: false },
      { text: "Kar gecesi uyandırır tüm korkuları / Yalnızlık bir samanyoludur genişler.", ok: false }
    ]
  },
  {
    text: "<p>I. Sonbahar geldi hüzün<br>II. İlkbahar geldi kara hüzün<br>III. Ey en akıllı kişisi dünyanın<br>IV. Bazen yaz ortasında gündüzün sevgim acıyor.</p><p><b>Bu dizelerin hangilerinde tamlayanı ile tamlananı yer değiştirmiş tamlama bulunmaktadır?</b></p>",
    diff: 2,
    expl: "III numaralı dizedeki \"Ey en akıllı kişisi (tamlanan) dünyanın (tamlayan)\" tamlamasında tamlayan ile tamlanan yer değiştirmiştir. Tamlamanın kurallı (düzenlenmiş) hâli \"Ey dünyanın en akıllı kişisi\" şeklindedir. IV. dizedeki 'gündüzün' sözcüğü ise zarftır, tamlama unsuru değildir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde sadece tamlananı zamir olan isim tamlaması vardır?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki \"hayat-ın nere-si\" belirtili isim tamlamasında \"hayatın\" tamlayanı isim, \"neresi\" tamlananı ise soru zamiridir. A'da \"senin sesini\" (tamlayan zamir), B'de \"neyin nesi\" (ikisi de zamir), D'de \"birinin hayatı\" (tamlayan zamir), E'de \"kimsenin ahı\" (tamlayan zamir) şeklindedir.",
    answers: [
      { text: "Hangi türküyü dinlesem senin sesini duyuyorum.", ok: false },
      { text: "Kasabaya gelen adam, neyin nesi hiçbirimiz bilmiyorduk.", ok: false },
      { text: "Yaşam, hayatın neresinden baktığına bağlı olarak yeşeriyor.", ok: true },
      { text: "Tanımadığınız birinin hayatına belki de farkında olmadan dokunuyoruz.", ok: false },
      { text: "Kimsenin ahı kimsede kalmaz derdi, dedelerimiz.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde bir isim tamlaması, sıfat tamlamasının tamlayanı durumundadır?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki \"kül rengi\" belirtisiz isim tamlamasıdır. Bu tamlama \"bulutlar\" ismini niteleyerek sıfat görevine geçmiş ve \"kül rengi bulutlar\" sıfat tamlamasını oluşturmuştur. Böylece isim tamlaması, sıfat tamlamasının tamlayanı olmuştur.",
    answers: [
      { text: "Kül rengi bulutlar şehre hüzün getirmişlerdi.", ok: true },
      { text: "Vadideki sessizlik içimizde tuhaf bir tılsım bıraktı.", ok: false },
      { text: "Yaz aylarında bu şehirden katar katar kervanlar geçer.", ok: false },
      { text: "Binbir medeniyete eşiklik eden Hatay'ın antik sokaklarında soluklandık.", ok: false },
      { text: "Bilinmeyen zamanlardan gelen çeşit çeşit gelenekler, bozkırın ortasında hâlâ devam ediyordu.", ok: false }
    ]
  },
  {
    text: "<p>Bir insanın ilişkilerinin niteliği o insanın <u>I. yaşam kalitesini</u> belirler. <u>II. İlişki sorunları</u> gerçekte düşünce alışverişi durumundadır ve yaşamın değişik yönlerinde kendini gösterir. <u>III. Aile yaşamında</u>, iş hayatınızda, <u>IV. özel hayatta</u> bu tür sorunları görmezden gelmek bir <u>V. buz dağı</u> oluşturmaktadır.</p><p><b>Bu parçada altı çizili tamlamalardan hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "IV numaralı \"özel hayat\" tamlaması, sıfat tamlamasıdır (Nasıl hayat? Özel). Fakat diğer tamlamalar (yaşam kalite-si, ilişki sorunlar-ı, aile yaşam-ı, buz dağ-ı) belirtisiz isim tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>\"<u>Sabah gazetesi</u> 1875'te yayın hayatına başlar.\" cümlesindeki altı çizili tamlamanın türce özdeşi aşağıdakilerin hangisinde <u>yoktur</u>?</p>",
    diff: 2,
    expl: "Soru kökündeki \"Sabah gazete-si\" belirtisiz isim tamlamasıdır. E seçeneğindeki \"ikinci özel gazetemiz\" ve \"bu dönemde\" tamlamaları sıfat tamlamasıdır, isim tamlaması yoktur. Diğerlerinde ise (1860 yılı, Tercüman-ı Ahval gazetesi, Edebiyat kavramı vb.) belirtisiz isim tamlaması vardır.",
    answers: [
      { text: "Türk edebiyatının ilk makalesi 1860 yılında Tercüman-ı Ahval gazetesinde yayımlanır.", ok: false },
      { text: "Edebiyat kavramı Şinasi tarafından ilk kez gazetede yer alır.", ok: false },
      { text: "Şiir ve İnşa makalesinde Ziya Paşa divan edebiyatını eleştirir.", ok: false },
      { text: "Noktalama işaretleri ilk kez Tazminat Dönemi'nde kullanılmıştır.", ok: false },
      { text: "İkinci özel gazetemiz bu dönemde yayımlanan Tasvir-i Efkâr'dır.", ok: true }
    ]
  },
  {
    text: "<p>Belirtisiz isim tamlamalarında tamlayan sözcük; tamlananın çıktığı, yetiştiği, ait olduğu yeri belirtir.</p><p><b>Aşağıdaki cümlelerin hangisinde bu durumu örnekleyen bir kullanım vardır?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki \"ağaç mantarı\", ağaçta yetişen bir mantar türüdür. Bu tamlamada tamlayan (ağaç), tamlananın (mantar) çıktığı, yetiştiği yer bilgisini vermektedir. Diğerlerindeki tamlayanlar (misafir, kömür, öğrenci) türe, amaca veya kime özgü olduğuna dair bilgi verir.",
    answers: [
      { text: "<u>Ağaç mantarı</u>; birçok isimlerle bilinen, doğada yetişebilen ve yenilebilen mantar türlerinden bir tanesidir.", ok: true },
      { text: "Eskiden bir odamız misafirlere ayrılırdı; sürekli o <u>misafir odası</u> temizlenir, havalandırılırdı.", ok: false },
      { text: "Karadeniz'in doğasıyla tanışmak için büyük bir tura katılmıştık; <u>kömür sobası</u> etrafındaki sohbeti hâlâ anımsarım.", ok: false },
      { text: "Üniversiteden mezun olan çoğu genç, otobüse bindiklerinde <u>öğrenci bileti</u> parası verdiği zamanları özlüyor.", ok: false },
      { text: "<u>Varis çorabı</u>; hastalığın ilerlemesini yavaşlatan ve şikâyetleri hafifleten bir üründür.", ok: false }
    ]
  },
  {
    text: "<p>(I) 1961 Anayasası bir darbe sonrası kabul edilmiştir. (II) Anayasanın üstünlüğünü kabul eden bir anayasadır. (III) İlk defa kuvvetler ayrılığı ilkesi benimsenmiştir. (IV) Sosyal hak ve ödevler ilk defa düzenlenmiştir. (V) İnsan haklarına dayanan devlet, demokratik devlet, hukuk devleti ilkeleri kabul edilmiştir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde isim tamlaması <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı cümlede yer alan \"sosyal haklar\", \"sosyal ödevler\", \"ilk defa\" söz grupları sıfat tamlamasıdır. Bu cümlede isim tamlaması yoktur. Diğer cümlelerde; 1961 Anayasa-sı (I), Anayasa-nın üstünlüğ-ü (II), kuvvetler ayrılığı ilke-si (III), insan haklar-ı (V) isim tamlamalarıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Cumartesi Yalnızlığı<br>II. Dostlukların Son Günü<br>III. Bir Deniz Eteklerinde<br>IV. Son Yaz Akşamı<br>V. Gönül İşi</p><p><b>Yukarıdaki tamlama şeklinde oluşmuş eser isimleri, tamlamalarının kuruluşuna göre ikişerli eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "II numaralı eser \"Dostluklar-ın Son Gün-ü\" belirtili isim tamlamasıdır. I (Cumartesi Yalnızlığ-ı) ve V (Gönül İş-i) belirtisiz isim tamlamasıdır. III (Bir Deniz Eteklerinde) ve IV (Son Yaz Akşamı) tamlananı belirtisiz isim tamlaması olan sıfat tamlamasıdır. Belirtili olan II numara dışarıda kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde isim tamlaması zarf görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "B seçeneğindeki \"akşam vakti\" (akşam vakt-i) belirtisiz isim tamlamasıdır. Bu tamlama, eylemin (düşer) gerçekleşme zamanını bildirdiği (Ne zaman düşer?) için cümlede zarf (belirteç) görevinde kullanılmıştır.",
    answers: [
      { text: "Ay ışığı şavkını vurur simsiyah denizin ortasına.", ok: false },
      { text: "Hüzünlü hikâyeler akşam vakti düşer hapishanenin damına.", ok: true },
      { text: "Her yaz bu mahallede geleneksel şenlikler düzenlenir.", ok: false },
      { text: "Denize bakan adama güneşin ilk ışıkları perdenin arkasından usul usul sızıyordu.", ok: false },
      { text: "Duygu patlamaları her kişinin bedeninde farklı izler bırakır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde hem tamlayanı hem tamlananı niteleme sıfatı almış belirtili isim tamlaması bulunmaktadır?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki \"hayata ayak direyen (sıfat) insan-ın (isim - tamlayan) mistik (sıfat) koku-su (isim - tamlanan)\" tamlamasında, hem tamlayan (insan) hem de tamlanan (koku) niteleme sıfatı alarak nitelenmiştir.",
    answers: [
      { text: "Turgut Uyar'ın ilk dönem şiirleri; ölçülü, kafiyeli ve daha somuttur.", ok: false },
      { text: "II. Yeni şairleri, 1960 sonrasında Marksist ve sosyalist düşünceler içine girer.", ok: false },
      { text: "Sezai Karakoç'un şiirleri, hayata ayak direyen insanın mistik kokusunu barındırır.", ok: true },
      { text: "1957'de yayımlanan \"Yerçekimli Karanfil\", şairin kendine özgü evrenini anlatır.", ok: false },
      { text: "Şiiri her türlü başkaldırı olarak gören Süreya, şiirin kural tanımadığı düşüncesini savunur.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerin hangisinde farklı türde tamlamalar vardır?</b></p>",
    diff: 3,
    expl: "Tamlamalar isim tamlaması ve sıfat tamlaması olarak ikiye ayrılır. C seçeneğindeki \"Hümanist edebiyatın amacı\" zincirleme isim tamlamasıdır; \"cennetteki kusursuzluk\" ise sıfat tamlamasıdır. Bu seçenekte iki farklı tamlama türüne de yer verilmiştir.",
    answers: [
      { text: "Hümanizm, gücünü Antik Çağ'a dönüşten almaktadır.", ok: false },
      { text: "İnsan, nefes aldığı her an bir denge kuran varlık olarak nitelendirilir.", ok: false },
      { text: "Hümanist edebiyatın amacı, insanı cennetteki kusursuzluğa götürmektedir.", ok: true },
      { text: "Sanatın muhtevası, düzen kavramları çerçevesinde ifadesini bulur.", ok: false },
      { text: "Sanatkârın içinde, insanlığı kucaklama arzusu vardır.", ok: false }
    ]
  }
];