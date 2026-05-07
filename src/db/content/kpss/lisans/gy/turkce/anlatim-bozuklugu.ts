import { McQ } from "../../../../types";

// ============================================================================
// ANLATIM BOZUKLUĞU - TEST 1
// ============================================================================
export const TUR_ANLATIM_BOZUKLUGU_TEST_1: McQ[] = [
  {
    text: "<p><b>1. Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "D seçeneğinde herhangi bir anlatım bozukluğu yoktur. A'da 'sağlamıyor' (engelliyor olmalı), B'de 'yanları' (yanı olmalı), C'de 'baltayı taşa dokundurmak' (vurmak olmalı), E'de ise tamlayan eki eksikliği (ilçemizin olmalı) vardır.",
    answers: [
      { text: "Elimizdeki şiirler bu şairi tanıyabilme olanağını sağlamıyor.", ok: false },
      { text: "Bu çiçeklerin en ilginç yanları yapraklarıdır.", ok: false },
      { text: "Neden sonra anladım ki baltayı taşa dokundurmuşum meğer.", ok: false },
      { text: "Bütün bu iddialara karşı ben yine seni savundum.", ok: true },
      { text: "İlçemiz, istihdam olanakları çok fazla ve sürekli artan bir cazibesi var.", ok: false }
    ]
  },
  {
    text: "<p>“İstanbul, dünyanın en güzel kenti ama ben hâlâ görmedim.”</p><p><b>Bu cümledeki anlatım bozukluğunun benzeri aşağıdakilerden hangisinde vardır?</b></p>",
    diff: 2,
    expl: "Örnek cümlede 'İstanbul'u' nesnesi eksiktir. C seçeneğinde de 'onu' (İstanbul'u) nesnesi eksik olduğu için benzer bir bozukluk vardır.",
    answers: [
      { text: "Futbolumuzun üzerindeki karanlık bulutlar dağıtılmadıkça layık olduğu yere gelemeyecek.", ok: false },
      { text: "Genç kaymakam bu kasabaya gelirken yolda çok ilginç bir olaya tanık olmuş.", ok: false },
      { text: "Onunla buraya gelirken tanıştık ve çok sevdik.", ok: true },
      { text: "1990’lı yıllarda onlar İstanbul’da, biz de İzmir’deydik.", ok: false },
      { text: "Divan edebiyatının anlamı açık ve yalın değildir.", ok: false }
    ]
  },
  {
    text: "<p><b>3. Aşağıdakilerden hangisinde farklı bir nedenden kaynaklı anlatım bozukluğu vardır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde tamlayan eksikliği (benim fikrimi de 'senin fikrini de' olmalı) varken; diğer şıklarda yüklem eksikliği (yüklem uyuşmazlığı) vardır.",
    answers: [
      { text: "İşin bu kısmını şimdi de eskiden de sevmiyorum.", ok: false },
      { text: "Ona nasihat etmekten ben yorulmuş ama o dinlemekten yorulmamıştı.", ok: false },
      { text: "Kesin karar vermeden senin ve benim fikrimi de almalıydı.", ok: true },
      { text: "Kitabın ilk sayfasına kitabın sahibi imzasını ve adını yazmıştı.", ok: false },
      { text: "Bu sözleri duyunca hem ben hem de arkadaşım rahatlamıştı.", ok: false }
    ]
  },
  {
    text: "<p>(I) Sanat ilhama dayanır, insan bilincinin emeğiyle ortaya çıkar. (II) Sanat sadece insanı anlatmaz, doğayı ve toplumu da anlatır. (III) İnsan bir toplum içinde yaşar. (IV) Bununla birlikte onu etkiler ve etkilenir. (V) İnsanın bilincini belirleyen, toplumsal yaşantılardır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde anlatım bozukluğu vardır?</b></p>",
    diff: 2,
    expl: "IV. cümlede dolaylı tümleç eksikliği vardır. 'etkilenir' fiilinden önce 'ondan' ifadesi getirilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Ele avuca sığmayan, afacan bir çocuktu; onun yüzünden çok başımız ağrıdı.”</p><p><b>Bu cümledeki anlatım bozukluğu aşağıdaki değişikliklerden hangisiyle giderilebilir?</b></p>",
    diff: 2,
    expl: "Cümlede 'çok' sözcüğü yanlış yerde kullanılmıştır. 'Başımız çok ağrıdı' şeklinde fiilden önce gelmelidir.",
    answers: [
      { text: "“ele avuca sığmayan” deyimi yerine “ele avuca sığan” sözcük grubu getirilerek", ok: false },
      { text: "“onun yüzünden” yerine “ondan dolayı” getirilerek", ok: false },
      { text: "“ağrıdı” sözcüğünden önce “çok” sözcüğü getirilerek", ok: true },
      { text: "“ele” sözcüğünden önce “avuca” sözcüğü getirilerek", ok: false },
      { text: "“afacan bir çocuktu” yerine “afacandır” sözcüğü getirilerek", ok: false }
    ]
  },
  {
    text: "<p>“2002 tarihinde üniversiteden mezun olmuş, kendine iyi bir iş bulmuştu.”</p><p><b>Bu cümledeki anlatım bozukluğu aşağıdakilerin hangisinden kaynaklanmaktadır?</b></p>",
    diff: 2,
    expl: "'Tarihinde' sözcüğü yanlış anlamda kullanılmıştır. Gün ve ay belli değilse 'yılında' denilmelidir.",
    answers: [
      { text: "Gereksiz yardımcı eylem kullanılması", ok: false },
      { text: "Dolaylı tümlecin yanlış yerde kullanılması", ok: false },
      { text: "Ek eylemin yanlış kullanılması", ok: false },
      { text: "İsmin birden fazla sıfatla nitelenmesi", ok: false },
      { text: "Bir sözcüğün yanlış anlamda kullanılması", ok: true }
    ]
  },
  {
    text: "<p>(I) Kış aylarında daha çok gözlem yapıyorum ve yazacağım kitabı planlıyorum. (II) Uzun bir süre kafamın içinde yarattığım karakterlerle yaşıyorum. (III) Genelde yazı işlerini gece vakti herkes uyuduktan sonra gerçekleştiriyorum. (IV) Masa başında oturduğum zaman çok zorluk çekiyorum ve bu sancılı süreç âdeta o eserin doğum aşaması oluyor. (V) Çalıştığım ortam sessiz olması gerekiyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde anlatım bozukluğu vardır?</b></p>",
    diff: 2,
    expl: "V. cümlede tamlayan eki eksikliği vardır. 'Çalıştığım ortamın sessiz olması...' şeklinde düzeltilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. Herkes görüyor ama yardım etmiyordu.</p><p>II. İnsanın isteyip de başaramadığı çok az ya da hiçbir şey yoktur.</p><p>III. Kitabın fiyatı oldukça yüksekti ama çok yararlıydı.</p><p>IV. Montumun yakasını kaldırıp soğuktan korumaya çalıştım.</p><p><b>Yukarıda numaralanmış cümlelerden hangi ikisinde <u>özne eksikliğinden</u> kaynaklanan anlatım bozukluğu vardır?</b></p>",
    diff: 3,
    expl: "I. cümlede 'kimse' (yardım etmiyordu), III. cümlede 'kitap' (çok yararlıydı) özneleri eksiktir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false }, { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>9. Aşağıdaki cümlelerin hangisindeki altı çizili sözcüğün çıkarılması anlatım bozukluğuna yol <u>açmaz</u>?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'süreyle' sözcüğü gereksizdir. 'Beş saat görüştüler' ifadesi zaten süreyi belirtir.",
    answers: [
      { text: "İki lider, beş saat <u>süreyle</u> görüştüler.", ok: true },
      { text: "O kadar konuşmadan sonra bir sonuca <u>varamadık</u>.", ok: false },
      { text: "Suçlu yakalanıp <u>müebbet</u> hapse mahkûm edildi.", ok: false },
      { text: "O, <u>ağzıyla</u> kuş tutsa yine de kendini affettiremez.", ok: false },
      { text: "Hepimiz sürprizler karşısında <u>şaşakalmıştık</u>.", ok: false }
    ]
  },
  {
    text: "<p>“Ekonomik gelişmeler konusundaki fikir ve düşüncelerinizi merak ediyorum.”</p><p><b>Bu cümledeki anlatım bozukluğu aşağıdakilerin hangisinden kaynaklanmaktadır?</b></p>",
    diff: 2,
    expl: "'Fikir' ve 'düşünce' sözcükleri eş anlamlıdır. İkisinin bir arada kullanılması gereksiz sözcük kullanımıdır.",
    answers: [
      { text: "Çokluk ekinin gereksiz kullanılması", ok: false },
      { text: "Yanlış anlamda sözcük kullanılması", ok: false },
      { text: "Bir sözcüğün yanlış yerde kullanılması", ok: false },
      { text: "Gereksiz sözcük kullanılması", ok: true },
      { text: "Tamlama yanlışlığı", ok: false }
    ]
  },
  {
    text: "<p><b>11. Aşağıdakilerin hangisinde anlatım bozukluğu <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "B seçeneğinde anlatım bozukluğu yoktur. A'da virgül eksikliği, C'de gereksiz sözcük (mevcut), D'de gereksiz olumsuzluk eki, E'de ise gereksiz sözcük (ikinci) vardır.",
    answers: [
      { text: "Çocuk işçilerin dramını anlatan bir sunum hazırlamıştı.", ok: false },
      { text: "Bu bölgenin her koyunda, birbirinden güzel tatil siteleri vardır.", ok: true },
      { text: "İki şirket arasında mevcut bir yazılı anlaşma vardı.", ok: false },
      { text: "Öğrenciler ne İngilizce ne de İspanyolca bilmiyorlardı.", ok: false },
      { text: "Yapılan bir ebrunun ikinci bir kopyasını yapmak mümkün değildi.", ok: false }
    ]
  },
  {
    text: "<p>I. Gömlekler ve pantolonlar itinayla ütülenip gardıroba kaldırmalıdır.</p><p>II. Bu tür piyesleri sevmem buna karşın dün akşam gidip izledim.</p><p>III. Ben gereken her şeyi söyledim ancak ne var ki öteki üyeler olaya tepkisiz kaldılar.</p><p>IV. Dünyadaki yaşanan felaketlere karşı tedbir almak gerekmez mi?</p><p><b>Yukarıdaki numaralanmış cümlelerdeki anlatım bozukluklarının nedenleri aşağıdakilerden hangisinde <u>sırasıyla</u> verilmiştir?</b></p>",
    diff: 3,
    expl: "I. Çatı uyuşmazlığı, II. Nesne eksikliği, III. Gereksiz bağlaç kullanımı, IV. Gereksiz ek kullanımı.",
    answers: [
      { text: "Öge eksikliği - Nesne eksikliği - Yanlış sözcük seçimi - Gereksiz ek kullanımı", ok: false },
      { text: "Nesne eksikliği - Çatı uyuşmazlığı - Gereksiz sözcük kullanımı - Mantık hatası", ok: false },
      { text: "Çatı uyuşmazlığı - Nesne eksikliği - Gereksiz sözcük kullanımı - Gereksiz ek kullanımı", ok: true },
      { text: "Özne - yüklem uyuşmazlığı - Yanlış sözcük kullanımı - Sözcüğün yanlış yerde kullanılması - Tamlama yanlışı", ok: false },
      { text: "Çatı uyuşmazlığı - Dolaylı tümleç eksikliği - Tamlama yanlışı - Mantık hatası", ok: false }
    ]
  },
  {
    text: "<p>(I) Cenap Şahabettin kendisine Fransız şiirini örnek almıştır. (II) Doktorluk ihtisası için gittiği Fransa’da sembolik şairlere ilgi duymuş, takip etmiştir. (III) Şiir kadar nesirle de ilgilenmiştir. (IV) Aşk ve tabiat, şiirlerinin değişmez temalarıdır. (V) Tabiat şiirleri, dış dünya ile kendi iç dünyasının çok başarılı kompozisyonu durumundadır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde anlatım bozukluğu vardır?</b></p>",
    diff: 2,
    expl: "II. cümlede 'onları' nesnesi eksiktir. 'Sembolik şairlere ilgi duymuş, (onları) takip etmiştir.'",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Gençlerden çok şey bekliyoruz fakat değer vermiyoruz.</p><p>II. Bu maçı da yenersek şampiyonluğu garantilemiş oluruz.</p><p>III. Sanırım biraz geç de olsa bizden kesinlikle özür dileyecek.</p><p>IV. Emekli oldum, artık çocuklarıma ve eşime daha çok zaman harcayabilirim.</p><p>V. Dostları, yaşamını zenginleştiriyor; anlam kazandırıyordu.</p><p><b>Yukarıdaki cümlelerdeki anlatım bozuklukları nedenleri bakımından ikişerli eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I ve V Dolaylı Tümleç eksikliği, II ve IV Yanlış Sözcük kullanımıdır. III (Anlamca çelişen ifadeler) dışarıda kalır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>15. Aşağıdakilerin hangisinde anlatım bozukluğu vardır?</b></p>",
    diff: 2,
    expl: "A seçeneğinde 'önceden' sözcüğü gereksizdir. Rezervasyon zaten önceden yapılır.",
    answers: [
      { text: "Bu mekânda parti vermek istiyorsanız önceden rezervasyon yaptırmanız gerekir.", ok: true },
      { text: "Eserlerini yoğun bir duygusallıkla kaleme almıştır.", ok: false },
      { text: "Felsefe anlama ve gerçeği görme ihtiyacını giderir.", ok: false },
      { text: "Bu topluluğun gelenek ve göreneklerine sıkı sıkıya bağlı bir yaşamları vardı.", ok: false },
      { text: "Bu işin kendisine uygun olduğunu anlayınca işine dört elle sarıldı.", ok: false }
    ]
  },
  {
    text: "<p><b>16. Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğinde herhangi bir bozukluk yoktur. A'da 'liste başı oldu' (liste başına yerleşti), B'de 'üstüne' (üzerine), C'de 'görevli' (gereksiz), D'de 'siyasi' (gereksiz) hataları vardır.",
    answers: [
      { text: "İki gün içinde yazdığım bu roman liste başı oldu.", ok: false },
      { text: "Sahnedeki hataları üstüne akıl yoruyor, sonra yığınla düş kuruyordu.", ok: false },
      { text: "Görevli memura rüşvet teklif etmekten tutuklanan üç kişi mahkemeye sevk edildi.", ok: false },
      { text: "Yunan Hükümetinin Kıbrıs konusunda izlediği siyasi politika kolay kolay değişmez.", ok: false },
      { text: "Cyrano de Bergerac, edebiyat tarihinin en yaman âşığıdır, karşılıksız bir aşkın doruğudur.", ok: true }
    ]
  },
  {
    text: "<p><b>17. Aşağıdakilerden hangisinde farklı bir nedenden kaynaklı anlatım bozukluğu vardır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde gereksiz sözcük kullanımı (geri) varken; diğer şıklarda sözcüğün yanlış yerde kullanımı veya nesne/özne eksikliği gibi hatalar mevcuttur.",
    answers: [
      { text: "Şimdi “Divan edebiyatına niçin sahip çıkmalıyız?” sorusuna geri dönebiliriz.", ok: true },
      { text: "İçinizde en az olaylara karışmış kişi sensin.", ok: false },
      { text: "İlk Derya'yı orada gördüğümü çok iyi hatırlıyorum.", ok: false },
      { text: "Çok moralim bozuldu, bu son olaydan sonra.", ok: false },
      { text: "Kimse bu bir avuç müzik yapmak isteyen gence engel olmasın.", ok: false }
    ]
  },
  {
    text: "<p>“Bilimde dogmatizm diye bir şey olamaz, tersine her zaman şüphecilikten yana olmuştur.”</p><p><b>Bu cümledeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cümlede ikinci yargı için özne eksiktir. 'Bilim' her zaman şüphecilikten yana olmuştur.",
    answers: [
      { text: "Çatı uyuşmazlığı", ok: false },
      { text: "Özne eksikliği", ok: true },
      { text: "Nesne eksikliği", ok: false },
      { text: "Yardımcı eylemin gereksiz kullanımı", ok: false },
      { text: "Tamlama yanlışı", ok: false }
    ]
  },
  {
    text: "<p>(I) Türk yazınında öykü türünün akla gelen ilk adı kuşkusuz Sait Faik’tir. (II) Balıkçılar, kenar mahalleler, yoksulluk, İstanbul’un sokakları ve denizi, bütün bunları içeren bir yaşantı biçimi; onun öykülerinin her zaman rastladığımız konularıdır. (III) Denebilir ki kişiliği nasılsa öyküleri de ona uygun biçimde oluştu. (IV) Bizim için önemli olan kuşkusuz onun öyküleridir. (V) Öykücülüğümüzde çağcıl ve yenilikçi bir değişimin başlıca yaratıcısı olmasıdır bizi ilgilendiren.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde anlatım bozukluğu vardır?</b></p>",
    diff: 2,
    expl: "II. cümlede 'yaşantı' sözcüğü yanlış kullanılmıştır; yerine 'yaşam' getirilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Geçenlerde bir dergide bu araştırmayla ilgili birkaç haber duydum.”</p><p><b>Bu cümledeki anlatım bozukluğunun benzeri aşağıdakilerden hangisinde vardır?</b></p>",
    diff: 3,
    expl: "Örnekte 'haber duydum' değil 'haber okudum' olmalıdır (Yanlış sözcük kullanımı). A'da 'ayrıntı' yerine 'ayrım/fark' olmalıdır.",
    answers: [
      { text: "İki edebî eser arasındaki ayrıntıyı görüp eserleri karşılaştırdım.", ok: true },
      { text: "Arkadaşım fazla dışarıda beklediği için bana sinirlenmişti.", ok: false },
      { text: "Bu durumu herkes kabul ediyor, hiçbir şekilde karşı çıkmıyordu.", ok: false },
      { text: "Şiddetli yağmur yağdığından dolayı bu haftaki geziyi ertelemek zorunda kaldık.", ok: false },
      { text: "Konferans salonunda tamı tamına iki yüz elli civarında dinleyici vardı.", ok: false }
    ]
  },
  {
    text: "<p><b>21. Aşağıdaki cümlelerin hangisinde bir anlatım bozukluğu <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "C seçeneği doğrudur. A'da 'baba da' (babası da) tamlama hatası, B'de tamlama hatası, D'de anlamca çelişen sözcükler, E'de yanlış sözcük (sağlıyor) vardır.",
    answers: [
      { text: "Rubens'in aile portresinde anne elini çocuğun omzuna koymuştur ve baba da sarılmaktadır.", ok: false },
      { text: "Çocuklara zarar verilmesi konusunda ahlak ve yasal bir sınırlama yok.", ok: false },
      { text: "Antibiyotikler, bakterilerin üremelerini engelliyor veya onları yok ediyor.", ok: true },
      { text: "Bir yetişkinin beyninin ve kalbinin neredeyse tam dörtte üçü sudur.", ok: false },
      { text: "Günümüz olumsuz koşullarının etkili olması insan ve toplum ilişkilerinin bozulmasını sağlıyor.", ok: false }
    ]
  },
  {
    text: "<p>“Karşıdaki bireyin yerine kendimizi koyarak olaylara onun bakış açısıyla bakmak ve tarafsız olarak değerlendirmek gerekir.” cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?</p>",
    diff: 2,
    expl: "'Değerlendirmek' fiilinden önce 'olayları' nesnesi getirilmelidir. Nesne eksikliği vardır.",
    answers: [
      { text: "Gereksiz sözcük kullanımı", ok: false },
      { text: "Nesne eksikliği", ok: true },
      { text: "Ek fazlalığı", ok: false },
      { text: "Özne eksikliği", ok: false },
      { text: "Yanlış yerde sözcük kullanımı", ok: false }
    ]
  },
  {
    text: "<p><b>23. Aşağıdaki cümlelerin hangisinde anlatım bozukluğu <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "D seçeneğinde bozukluk yoktur. A'da iyelik eki gereksiz, B'de edat grubu eksik (stresle), C'de tamlama hatası (insanlar), E'de tamlayan eki gereksizdir.",
    answers: [
      { text: "Sağlıklı bir yaşam için hepimizin doğru besinlere ihtiyacımız vardır.", ok: false },
      { text: "Müzik dinlemek stresten arınmamızı ve baş etmemizi sağlar.", ok: false },
      { text: "Pek çok gezgin insanlar, gittikleri ülkeleri araştırmayıp öğrenmedikleri için sorun yaşamaktadır.", ok: false },
      { text: "Oyun, çocukların kendi kendine yönettikleri ve kendi seçtikleri bir aktivitedir.", ok: true },
      { text: "Ekmeklerin küflenmeden kalabilmesi için ekmeklerin saklandığı kapların sirkeli bezle temizlenmelidir.", ok: false }
    ]
  },
  {
    text: "<p><b>24. Aşağıdaki cümlelerin hangisinde bir sözcüğün yanlış anlamda kullanımı anlatım bozukluğuna yol açmıştır?</b></p>",
    diff: 2,
    expl: "C seçeneğinde 'ayrım' sözcüğü yanlış kullanılmıştır; yerine 'ayrıcalık' getirilmelidir.",
    answers: [
      { text: "Oraya bir an önce gidebilmek için kalkan ilk vapura bindi.", ok: false },
      { text: "Eskiden bu civarda tek tük binalar vardı.", ok: false },
      { text: "Ona yapılan ayrım hepimiz tarafından fark edildi.", ok: true },
      { text: "Şair, bazen duygularını sanatlı bir şekilde ifade ediyordu.", ok: false },
      { text: "Kitapları tek tek dolaba yerleştirdi ve numara yazdı.", ok: false }
    ]
  }
];