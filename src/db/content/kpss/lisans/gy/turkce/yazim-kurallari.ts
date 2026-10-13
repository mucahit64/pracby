import { McQ } from "../../../../types";

// ============================================================================
// YAZIM KURALLARI - TEST 1
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_1: McQ[] = [
  {
    text: "<p><u>I. Kayseri'de</u> az tanınan ama önemli bir meyvemiz var: gilaburu. Sonbaharda olgunlaşan gilaburu, <u>II. ekim</u> ayındaki <u>III. hasatından</u> sonra kışın kullanılmak üzere çömleklere basılıyor. Hem suyu <u>IV. içilebiliyor</u> hem de tanesi yenebiliyor. <u>V. Dışarıdan</u> bakınca üzüme benzeyen gilaburunun, böbrek hastalıklarına iyi geldiği söyleniyor.</p><p><b>Bu parçadaki numaralanmış sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Süreksiz sert ünsüzlerden (p-ç-t-k) biriyle biten 'hasat' sözcüğü ünlüyle başlayan bir ek aldığında ünsüz değişimine (yumuşamasına) uğrar. Bu kurala uyulmadığı için III numaralı 'hasatından' kelimesinin 'hasadından' şeklinde yazılması gerekirdi.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Türk mutfağında önemli yeri olan çamfıstığı, fıstık çamının tohumudur. (II) Genelde yüksek rakımları seven fıstık çamı ülkemizin güney batı bölgelerinde asıl olarak Bergama dolayındaki Kozak Yaylası'nda yetişir. (III) Asılında soğuk sevmeyen bir ağaçtır. (IV) Yapı kerestesi olarak odunu değerlidir. (V) Ama yirmibeş metre boyundaki ağacın gerçek önemi, son yıllarda altın kadar değerli olan fıstığıdır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I. cümlede 'çam fıstığı' ayrı yazılmalıdır. II. cümlede 'güneybatı' ara yön olduğu için bitişik yazılmalıdır. III. cümlede 'aslında' sözcüğünde ünlü düşmesi gösterilmelidir. V. cümlede 'yirmi beş' sayı olduğu için ayrı yazılmalıdır. IV. cümlede herhangi bir yanlışlık yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Birleşmiş Milletler, dünya nüfusunun 21. yüzyılın sonunda 11 milyar olacağını <u>ön görüyor</u>. (II) <u>Dünya Nüfus Günü</u> bize, nüfus artış hızımızın sürdürülemez olduğunu hatırlatıyor (III) Yoksulluk cinsiyet eşitliği, anne sağlığı, insan hakları, aile planlamasının önemi gibi küresel nüfus meseleleri <u>hakkında</u> farkındalık yaratıyor. (IV) <u>Antrparantez</u> kalabalıklaşan nüfus, doğal kaynaklar üzerinde artık yıkıcı sonuçlar doğuruyor. (V) Çoğalmak, her zaman güçlü olmak anlamına <u>gelmeyebiliyor</u>.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde altı çizili sözcüğün yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "'Öngörmek' sözcüğü anlamca kaynaşmış bir birleşik fiildir ve bitişik yazılmalıdır. Cümlede 'ön görüyor' şeklinde ayrı yazılması yanlıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Rüzgârlar, bize birçok şey anlatır. (II) Güçlü esmese de sizi titreten bir rüzgâr tahminen Kuzey'den esiyordur. (III) Ya da üzerimize esen rüzgâr kurudur. (IV) Bu da tenimizde buharlaşma ve ardından terleme nedeniyle ürperme yaşamamıza neden olmuştur. (V) Bu gibi küçük bilgilerle rüzgârın dilini okuyarak gündelik hava durumunu tahmin etmek mümkün olabilmektedir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı bulunmaktadır?</b></p>",
    diff: 2,
    expl: "Yer-yön bildiren (doğu, batı, güney, kuzey) sözcükler tek başlarına ya da özel isimden sonra kullanıldıklarında küçük harfle başlar. II. cümlede 'kuzeyden' şeklinde küçük harfle yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ifadenin okunuşuna <u>uygun bir ek getirilmemesinden</u> kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "Ölçü birimlerinin kısaltmalarında ek, kısaltmanın son harfine göre değil birimin uzun okunuşuna göre getirilir. C şıkkında 'kg'den' ifadesi yanlış olup 'kilogramdan' (kg'dan) şeklinde yazılmalıydı.",
    answers: [
      { text: "Ülkemiz enerji dağıtım sektöründe önemli görevler üstlenen TEDAŞ'ın tasarrufla ilgili çalışmaları devam ediyor.", ok: false },
      { text: "Tac Mahal, 1983 yılında UNESCO'nun Dünya Mirası Listesi'nde yer aldı.", ok: false },
      { text: "Azami yüklü ağırlığı 3500 kg'den fazla olan yük tankerlerine izin verilmiyor.", ok: true },
      { text: "Türkiye'de tasarruf sahiplerinin hak ve menfaatlerini korumak BDDK'nin en önemli görevidir.", ok: false },
      { text: "Araştırmalar, ortalama bir insanın kıyafetlerinin sadece % 20'sini giydiğini ortaya çıkardı.", ok: false }
    ]
  },
  {
    text: "<p>Doğu <u>I. Anadolu'nun</u> güzel çiçeklerinden <u>II. eşek yoncası</u>, kök saldığı ortama bağlı olarak kırk santimden <u>III. iki yüz elli</u> santime dek değişen boylarda büyüyebilir. En fazla iki yıl <u>IV. ömrü</u> vardır. Kokulu yonca adıyla da bilinir. Sarı çiçekleri hem güzeldir hem de <u>V. boyarmadde</u> olarak kullanılmaktadır.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımında yanlışlık vardır?</b></p>",
    diff: 3,
    expl: "'Boyar madde' sözcüğünü oluşturan her iki sözcük de gerçek anlamını koruduğu için bu birleşik sözcük ayrı yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Eğer kurgu olmasaydı ne ölümün ne de hayatın bir anlamı olurdu. (II) Kurgu, hayatın ve ölümün yeknesaklığını ortadan kaldırarak onları yerli yerine oturtur. (III) Anlamını, bağlamını bulmayan hiç birşey yerini de bulamaz hayatta. (IV) Yazar anlatarak anlamı yazma yöntemiyle de anlamın ötesini yaratır. (V) Tek katmana sıkışan hayat ve anlam böylelikle ölümün eteğinden âdeta ölümsüzlük isteğinin kıyısına çekilir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "III. cümledeki 'hiç birşey' ifadesi yanlıştır. 'şey' sözcüğü her zaman ayrı yazılır; 'hiçbir' sözcüğü ise bitişik yazılır. Doğrusu 'hiçbir şey' olmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Manolya çiçeklerinin renk çeşitleri: beyaz, kırmızı, mor, pembe şeklinde sıralanabilir. (II) Türkiye'nin ılıman bölgelerinde kolayca yetişir çünkü nemli toprağı sever. (III) Hoş görünümü nedeniyle süs ağacı olarak da kullanılabilir. (IV) Yaz aylarında kısa süreli açan <u>çiçekleride</u> güzel görünür. (V) Ayrıca odunu da kullanışlıdır çünkü sert ve ağırdır, mobilya ve kaplama imalatında tercih edilmektedir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde \"de\" bağlacının yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "IV. cümledeki 'çiçekleride' sözcüğünde bulunan 'de' bağlaçtır ve ayrı yazılmalıdır. Doğru yazılışı 'çiçekleri de' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Medenileşme</u> derken teknolojik gelişmeler yanında terbiye, <u>II. edep</u>, ahlak, <u>III. zerafet</u>, kültür ve insani değerler gibi kavramları da <u>IV. kastetmiş</u> oluruz. Medeniyet bu anlamıyla çağın bilimsel gereklilikleriyle doğru davranış kalıplarının <u>V. bileşimi</u>, böylelikle oluşturulan bir çağdaş yaşam anlamında da yorumlanabilir.</p><p><b>Bu parçadaki numaralanmış sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "III numaralı 'zerafet' sözcüğünün yazımı yanlıştır. Kelimenin doğru yazılışı 'zarafet' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Kavun, kabakgillerden sürüngen gövdeli bitki türü ve bu bitkinin iri meyvesidir. (II) Anadolu kavun konusunda zengin bir bölgedir. (III) Örneğin İtalyanların ünlü \"kantalup kavunu\" aslında Diyarbakır kökenlidir. (IV) Trakya'da yetişen topatan ve Ege'ye has Kırkağaç Kavunları, bilinen kavun türlerimiz arasında yer alır. (V) Kırkağaç, topatan kavununa göre daha dayanıklı olmasıyla tercih edilir olmuş ama ikisinin de lezzeti ayrıdır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Yer, millet ve kişi adlarıyla kurulan birleşik kelimelerde sadece özel adlar büyük harfle başlar. IV. cümledeki 'Kırkağaç kavunları' tamlamasında 'kavunları' sözcüğü küçük harfle başlatılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>• Hun imparatoru Mete han tarafından M.Ö. 209 yılında kurulan orduyu, tarihimizde kara kuvvetlerinin ilk kurulduğu gün olarak kabul ediyoruz. Bu tarihten günümüze, ordumuz gücünü hep korumuş ve daima göğsümüzü kabartmıştır.<br/>• Kral Arthurda efsanevi bir kişiliktir. Efsaneye göre Keltleri İngiltere topraklarından kovan kral odur. Bu efsane 5. yy'nin sonlarında ortaya çıkmıştır. Yuvarlak masa şövalyeleri, taşa saplanan ve kendini çıkaracak kahramanı bekleyen kılıç gibi pek çok mitolojik hikâye kral Arthur efsanesinde mevcuttur.</p><p>I. Kısaltmaların yazımıyla ilgili yanlışlık yapılmıştır.<br/>II. Bağlacın yazımıyla ilgili yanlışlık yapılmıştır.<br/>III. Büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır.</p><p><b>Numaralanmış cümlelerle ilgili yukarıdaki yargılardan hangileri ortaktır?</b></p>",
    diff: 3,
    expl: "Her iki parçada da kısaltmaların yazımıyla (MÖ, yy.ın) ve büyük harflerin yazımıyla (Hun İmparatoru, Kral Arthur) ilgili yanlışlıklar yapılmıştır. Dolayısıyla I ve III numaralı yargılar ortaktır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true }
    ]
  },
  {
    text: "<p>(I) Samsun'daki Mıntıka Palas oteli, 1902'de Jean İonnis Mantika tarafından inşa edilmiştir. (II) Bina, 1926'da Atatürk'e armağan edilmiştir. (III) 1998'den beri Samsun gazi müzesi olarak hizmet vermektedir. (IV) Binada yüzdoksanbir eser sergilenmektedir. (V) Atatürk'le Samsun'a çıkan 18 silah arkadaşının balmumu heykelleri de vardır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisine yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "II. cümlede yazım yanlışı yoktur. I. cümlede 'Mıntıka Palas Oteli' ve III. cümlede 'Samsun Gazi Müzesi' yapı adlarının bütün kelimeleri büyük harfle başlamalıydı. IV. cümlede sayı 'yüz doksan bir' şeklinde ayrı yazılmalıydı. V. cümlede ise 'bal mumu' birleşik adı ayrı yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// YAZIM KURALLARI - TEST 2
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_2: McQ[] = [
  {
    text: "<p>Divriği'nin 18 km <u>I. kuzeybatısına</u> gitmeyi <u>II. göze alırsanız</u> hayalet bir kasabamızla karşılaşırsınız. Divriği demir madenlerinde çalışan işçilerin aileleriyle birlikte yaşaması için inşa edilen <u>III. Cürek Kasabası</u>, <u>IV. 80'li</u> yıllarda terk edilmiştir. Burası filmleri aratmayacak görünümüyle sizi büyüleyecektir. <u>V. Cumhuriyet'imizi</u> kuranların, işçilerimizin büyük şehirdekilerden farksız yaşaması için nasıl büyük bir organizasyona giriştiklerini görünce hüzünlenmemek olanaksız.</p><p><b>Bu parçadaki altı çizili sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Özel ada dâhil olmayıp tamlama kuran şehir, il, ilçe, belde, köy, kasaba vb. sözler küçük harfle başlar. 'Cürek Kasabası' ifadesinde kasaba sözcüğü küçük harfle başlatılmalıydı: 'Cürek kasabası'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Tıp bayramı ilk kez, Birinci Dünya Savaşı sonunda İstanbul'un işgal edildiği günlerde tıp öğrencilerinin bir tepkisi olarak 1919'da kutlandı.<br/>II. 1945'te Ankara Radyosu'nda saz çalmaya başlayan Ahmet Gazi, Kayseri türkülerini en iyi söyleyen isimlerdendir.<br/>III. Ramazan bayramının ilk günü aynı zamanda Şevval ayının birinci günüdür.<br/>IV. Çok önemli düşüncelerimizi uluorta her yerde söylemek doğru değildir.<br/>V. Sahil Güvenlik Komutanlığı'nın kuruluş tarihi 13 Temmuz 1982'dir.</p><p><b>Numaralanmış cümlelerde yapılan yazım yanlışları, gerekçeleri bakımından ikişerli eşleştirildiğinde hangi cümle <u>dışarıda</u> kalır?</b></p>",
    diff: 3,
    expl: "I ve III numaralı cümlelerde bayram adlarının büyük harfle yazımı (Tıp Bayramı, Ramazan Bayramı) ile ilgili yanlışlık vardır. II ve V numaralı cümlelerde kurum-kuruluş adlarına gelen eklerin kesme ile ayrılması (kurum adlarına gelen ekler ayrılmaz) ile ilgili yanlışlık vardır. IV numaralı cümledeki 'ulu orta' birleşik sözcüğünün yazımı ise tek kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik fiillerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Yardımcı eylemle (etmek, olmak) kurulan birleşik fiillerde herhangi bir ses olayı (düşme veya türeme) yoksa fiil ayrı yazılır. 'Farz edelim' ifadesinde ses olayı olmadığı için ayrı yazılmalıdır. 'Farzedelim' yazımı yanlıştır.",
    answers: [
      { text: "Bir prizmadan geçen ışığın renklere ayrıldığını İtalyan bilim insanları deneyerek keşfetmişlerdir.", ok: false },
      { text: "Vostok 6 uzay aracıyla Dünya'dan ayrılan Sovyet Kozmonotu Valentina Tereşkova, uzaya çıkan ilk kadın olduğu varsayılıyor.", ok: false },
      { text: "Turnalar, gri gövdesi ve yanaklarından boynunun arkasına inen beyaz şeritle hemen ayırt edilir.", ok: false },
      { text: "Otolog kemik iliği nakli, vücut yeterince sağlıklı kemik iliği hücresi üretiyorsa bir seçenek olabilir.", ok: false },
      { text: "Farzedelim ki uzayda canlılar yaşıyor ve bu canlılar oksijen alıp karbondioksit verebiliyor.", ok: true }
    ]
  },
  {
    text: "<p>“Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi birleşme sırasında anlam değişmesine uğramışsa sözcük bitişik yazılır.”</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala <u>uymamaktan</u> kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde geçen 'vezir parmağı' bir tatlı adıdır ve her iki sözcük de gerçek anlamından uzaklaşmıştır. Kural gereği bitişik yazılması gerekirken ayrı yazılması yazım yanlışıdır.",
    answers: [
      { text: "Ana vatanı Amerika'nın tropik bölgeleri olan akşamsefası, akşam saatlerinde çiçek açıp sabah saatlerinde solmaktadır.", ok: false },
      { text: "Bazı insanların çıtkırıldım olmalarının sebebi hiç zorluk yaşamamış olmalarının aksine ağır travmalar atlatmalarıdır.", ok: false },
      { text: "Balıksırtı desenine genel olarak bakıldığında iç içe geometrik bir tasarımdır.", ok: false },
      { text: "Padişahın hayatta olduğunu kutlamak için saray aşçılarının padişaha sunduğu şerbetli ve irmikli tatlıya vezir parmağı adı verildi.", ok: true },
      { text: "Koyu bir renk tonu olan vişneçürüğü, pembe ve kahverenginin karışımından elde edilmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Marco Polo, 8 bölümlük bir mini diziydi. Ama bu tarihî kişilik, ülkemizde <u>I. önceden de</u> bilindiği için kahramanın yolculuklarını anlatan dizi çok tutulmuştu. 1982 yılında ilk kez ABD'de <u>II. yayınlanan</u> dizide, <u>III. Orta Asya'nın</u> bizim de bildiğimiz halkları ve tarihî kişiliklerini <u>IV. seyretme</u> fırsatı bulmuştuk. Dizinin <u>V. Asyalılara</u>, pek alışık olmadığımız şekilde olumlu yaklaşması, sevilmesinde etkili olmuştu kuşkusuz.</p><p><b>Bu parçadaki numaralanmış bölümlerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'yayınlanan' sözcüğü yanlıştır. Diziler, programlar ve eserlerin kamuya sunulması anlamında 'yayımlanan' sözcüğü kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Geçtiğimiz günlerde ardarda sarsıntılar yaşayan bölge yeniden deprem korkusu yaşadı.<br/>II. Öteden beri zaman zaman yapıla gelen bu anketler fikir sahibi olmamızı sağlıyor.<br/>III. Rus mühendis Aleksey Pulitsov tarafından geliştirilen tetris oyunu Sovyetler Birliği'nde piyasaya sürüldü.<br/>IV. Binbir zorlukla bağımsızlığa kavuşan bir ülkenin geleceğe umutla bakan hikayesinin başlangıcıdır Ankara.<br/>V. Altışar kişilik iki takımla yapılan salon sporu voleyboldur.</p><p><b>Numaralanmış cümlelerde aşağıdakilerin hangisinden kaynaklanan bir yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede üleştirme sayısının yazımı (Altışar) doğrudur. Diğerlerinde; I'de ikileme (art arda), II'de birleşik sözcük (yapılagelen), III'te büyük harf (Rus Mühendis), IV'te düzeltme işareti (hikâye) yanlışları vardır.",
    answers: [
      { text: "Sayıların yazımı", ok: true },
      { text: "Düzeltme işaretinin yazımı", ok: false },
      { text: "İkilemelerin yazımı", ok: false },
      { text: "Büyük harflerin yazımı", ok: false },
      { text: "Birleşik sözcüklerin yazımı", ok: false }
    ]
  },
  {
    text: "<p>“Millî Mücadele dönemini ele alan eserler, var olma mücadelesinin edebiyatını oluşturur.”</p><p><b>Aşağıdaki cümlelerin hangisinde bu cümledekiyle özdeş bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "Öncül cümlede 'Mücadele dönemi' ifadesinde dönem adı büyük harfle başlamalı ve ek kesme ile ayrılmalıdır (Mücadele Dönemi'ni). D seçeneğinde de 'ilk çağda' sözü 'İlk Çağ'da' şeklinde büyük harfle yazılmalıdır.",
    answers: [
      { text: "Fatih Sultan Mehmet, İstanbul'u fetih ederek Bizans İmparatorluğu'nu sona erdirdi.", ok: false },
      { text: "Galatasaray futbol takımı 17 mayıs 2000'de UEFA Kupası'nı kazandı.", ok: false },
      { text: "Ortadoğu destanlarının en eski ve en önemlilerinden biri Gılgamış Destanı'dır.", ok: false },
      { text: "İlk çağda bilginler tarih, coğrafyan ve matematikle ilgili bilgileri birlikte işlemişlerdir.", ok: true },
      { text: "Eski Mısırlılar, ayları 10'ar günlük üç bölüme bölmüşlerdi.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'önyargımızı' sözcüğü 'ön yargı' şeklinde ayrı yazılmalıdır. Diğer seçeneklerdeki birleşik kelimeler ve yazımlar doğrudur.",
    answers: [
      { text: "Toplumun küçüklükten itibaren kulağımıza fısıldadığı her kelime önyargımızı oluşturur.", ok: true },
      { text: "Gündüz sıcağında binbir çiçeğin kokusunu getiren rüzgâr, geceleri soğuğu taşırdı.", ok: false },
      { text: "Anadolu şoförlerinin birçoğunda güngörmüş bir hâl mutlaka bulunur.", ok: false },
      { text: "Tanıtılan bu kitaplar tam anlamıyla baş ucu kitaplarıdır.", ok: false },
      { text: "Türkiye'de demir yolunu teşvik edici düzenlemeler yapılmaya başlanmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Akdeniz Üniversitesi Su Ürünleri Fakültesi<u>'</u>nde (I) yapılan çalışmada küresel ısınma ve Süveyş Kanalı<u>'</u>nın (II) derinleşmesi nedeniyle Kızıldeniz<u>'</u>den (III) gelip Akdeniz<u>'</u>i (IV) istila eden balık türü sayısının, iki türün daha katılımıyla 65<u>'</u>e (V) yükseldiği ifade edildi.</p><p><b>Bu parçadaki altı çizili noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Kurum ve kuruluş adlarına getirilen ekler kesme işaretiyle ayrılmaz. I numaralı yerdeki kesme işareti bu nedenle yanlıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Çin'in Şion <u>I. İlinde</u> 2000 yıl öncesine ait, <u>II. aslıyla</u> aynı boyda, savaş donanımlı, kilden yapılmış <u>III. yedi bin</u> bir ordu bulundu. Seramik askerlerin <u>IV. hiçbirinin</u> diğerine benzememesi şaşırtıcıydı. Bu seramik askerler, imparatoru ölümden sonra <u>V. koruyacak</u> askerlerdi.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Özel ada dâhil olmayıp tamlama kuran 'il' sözcüğü küçük harfle başlar. I numaralı 'İlinde' sözcüğü 'ilinde' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde farklı bir nedenden kaynaklı yazım yanlışı bulunmaktadır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'Madem ki' bağlacı kalıplaşmış olduğu için bitişik yazılmalıdır ('mademki'). Diğer seçeneklerdeki yanlışlar birleşik fiillerin ayrı veya bitişik yazılması (farkettim, nakledildi vb.) ile ilgilidir.",
    answers: [
      { text: "Aradan geçen bunca yıla rağmen hiç değişmemiş olduğunu farkettim.", ok: false },
      { text: "Onun iyi bir sanatçı olduğu söylene gelmiştir.", ok: false },
      { text: "Hasankeyf'teki son tarihî yapı özel bir platforma yerleştirilerek nakil edildi.", ok: false },
      { text: "Madem ki buraya kadar geldik, mutlaka bize vereceği bir görev vardır.", ok: true },
      { text: "Keşif edilen yeni gezegenin sağlam bir atmosfere sahip olduğu düşünülüyor.", ok: false }
    ]
  },
  {
    text: "<p><u>I. Sir Derya boylarında</u> ve Aral çevresinde <u>II. 10. yy.da</u> kurulan Oğuz Yabgu Devleti'nde <u>III. Oğuz Türkçesi</u> konuşma dili olsa da yazı dili olarak kullanıldığına dair elimizde herhangi bir dil verisi yoktur. Oğuzların ilk büyük siyasi yapılanması olan Büyük Selçuklu Devleti ise Arapça ve kısmen Farsçayı <u>IV. resmi dil</u> yapmıştır. Bugüne kadar, <u>V. Selçuklular Dönemi'nden</u> günümüze ulaşan herhangi bir Türkçe eser tespit edilememiştir.</p><p><b>Bu parçada altı çizili numaralanmış sözlerden hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'resmi dil' ifadesinde 'resmî' sözcüğündeki 'i' üzerinde düzeltme işareti olmalıdır. Belirtme durumu eki olan 'i' ile karışmaması için nispet eki 'î' ile yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'ilçe' sözcüğü özel ada dâhil olmadığı için küçük harfle başlamalıdır. 'Altındağ ilçesi'ndeki' şeklinde yazılmalıydı.",
    answers: [
      { text: "İstiklâl Marşımızın güftesi, Anadolu'da Millî Mücadele'nin devam ettiği sırada Mehmet Akif Ersoy tarafından yazılmıştır.", ok: false },
      { text: "Prof. Dr. Muharrem Ergin'in kaleme aldığı Orhun Abideleri adlı eseri, geleceğe yönelik umutsuzluğa her kapıldığımda imdadıma yetişiyor.", ok: false },
      { text: "Roma Hamamı, Ankara'nın Altındağ İlçesi'ndeki Çankırı Caddesi'nde yüksek bir höyüğün üzerindedir.", ok: true },
      { text: "Doğu'dan bir Batı çıkmaz çünkü ne Doğu, Batı'nın geçtiği yollardan geçmiş ne de Batı, Doğu'nun yaşadığı ızdırapları yaşamıştır.", ok: false },
      { text: "Tanzimat Dönemi yazarı Ziya Paşa'nın, Girit İsyanı'ndaki olaylar nedeniyle Ali Paşa'yı yermek amacıyla yazdığı hiciv türündeki eseri, Zafername'dir.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yay ayraç içinde verilen kurala uymamaktan kaynaklanan bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki 'bir biriyle' sözcüğü, 'biri + biri' birleşirken ünlü düşmesine uğradığı için bitişik yazılmalıdır ('birbiriyle'). Ayrı yazılması yazım yanlışıdır.",
    answers: [
      { text: "Bazı alanlarda bir biriyle ilişkili bilgileri bir araya yetirerek güncelleme yapabilmekteyiz. (Ses düşmesine uğrayan birleşik kelimeler bitişik yazılır.)", ok: true },
      { text: "Suçlunun serbest bırakılmasına yapılan itiraz reddedildi. (Özgün biçimleri tek heceli bazı Arapça kökenli kelimeler etmek, eylemek, olmak yardımcı fiilleriyle birleşirken ses düşmesine, ses değişmesine veya ses türemesine uğradıklarında bitişik yazılır.)", ok: false },
      { text: "C vitamini konusunda oldukça zengin olan kuşburnu çayı, bu özelliği sayesinde bağışıklık sistemini kuvvetlendirmektedir. (Kelimelerden her ikisi veya ikincisi, birleşme sırasında anlam değişmesine uğradığında bu tür birleşik kelimeler bitişik yazılır.)", ok: false },
      { text: "Esnaf içine düştüğü ekonomik çukura veryansın ediyor. (Bir veya iki ögesi emir kipiyle kurulan kalıplaşmış birleşik kelimeler yazılır.)", ok: false },
      { text: "Birisi çokbilmiş tavrına girdiğinde amacınız, onun zihnini yeni fikirlere açmak olmalıdır. (-an / -ar / -mez / -miş / sıfat fiil ekleriyle kurulan kalıplaşmış birleşik kelimeler bitişik yazılır)", ok: false }
    ]
  }
];

// ============================================================================
// YAZIM KURALLARI - TEST 3
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_3: McQ[] = [
  {
    text: "<p>(I) Karganın pekçok türü bulunmaktadır. (II) Ülkemizde en sık rastlanan türleri, kara ve gri leş kargasıdır. (III) Kara renklisinde, dikkat edilirse yeşil tonlar seçilebilir. (IV) Genellikle sürü hâlinde yaşayan en eski kuşlardan biridir. (V) Sesleri kuşlar âlemindeki en çirkin sestir denebilir ama iletişim anlamın da çok önemlidir.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede 'pekçok' sözü 'pek çok' şeklinde ayrı yazılmalıdır. V numaralı cümlede ise 'anlamın da' ifadesindeki '-da' bulunma hâli ekidir ve bitişik yazılmalıdır: 'anlamında'. Bu nedenlerle I ve V numaralı cümlelerde yazım yanlışı vardır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I ve V", ok: true },
      { text: "II ve III", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Edwin Hubble, 20’inci yüzyıl başının en büyük astronomi dehasıdır. (II) Geçimsizliğiylede ünlü biriydi aynı zamanda. (III) Fakat evren tasavvurunu tamamen değiştiren bilim insanıdır. (IV) Evrenin sınırları olmadığını ayırıca sürekli genişlediğini ilk söyleyen kişidir. (V) Günümüzün en gelişmiş uzay gözlem araçlarından Hobble uzay teleskopu onun anısını yaşatmaktadır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I'de '20'inci' yerine '20. yüzyıl' veya 'yirminci' (20'nci) olmalıydı. II'de 'geçimsizliğiyle de' ayrı yazılmalıydı. IV'te 'ayırıca' sözcüğü 'ayır-' fiilinden türerken ünlü düşmesine uğradığı için 'ayrıca' yazılmalıydı. V'te 'teleskobu' şeklinde yumuşama olmalıydı. III. cümlede yanlışlık yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "B seçeneğindeki 'boş vermişlik' sözcüğü bitişik yazılmalıdır. Sıfat-fiil ekleriyle (-an/-en, -miş/-mış vb.) kurulan kalıplaşmış birleşik kelimeler bitişik yazılır. Örn: 'boşvermişlik'.",
    answers: [
      { text: "Bahsedilen kişi, bir dönem büyük ilgi gören bir yapı inşa etti.", ok: false },
      { text: "O anlarda bir soğukluk ve boş vermişlik hâli insanın içini kaplayıverir.", ok: true },
      { text: "Uyurgezerlik uykuda iken insanların kalkıp yürümelerine neden olan bir rahatsızlıktır.", ok: false },
      { text: "Şifa deposu keçiboynuzu, zengin besin içeriği yanında yüksek düzeyde antioksidan içerir.", ok: false },
      { text: "Fasulyeler genel olarak sırık ve bodur olmak üzere iki temel gruba ayrılmakla birlikte ayşekadın, barbunya sırık fasulyelerden bazılarıdır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde altı çizili sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki 'yalınkat' birleşik sözcüğünün yazımı yanlıştır. Birleşme sırasında kelimelerinden hiçbiri veya ikinci kelimesi anlam değişikliğine uğramayan birleşik kelimeler ayrı yazılır. Doğru yazımı 'yalın kat' şeklindedir.",
    answers: [
      { text: "Bu <u>akılalmaz</u> olay bilim insanları tarafından şaşkınlıkla karşılandı.", ok: false },
      { text: "Sanatçının romanında <u>yalınkat</u> karakterler, bir iki özellikleri ile gözüküp birkaç sözcük ile ifade edilir.", ok: true },
      { text: "Sanatçı “Kitaplar <u>Baş Tacımız</u>” hareketini başlatarak kitap okumayı yaygınlaştırmayı hedefliyor.", ok: false },
      { text: "Çalışma salonlarında tel zımba, telli dosya, klasör, top kâğıt, <u>ataş</u> gibi araçlar bulundurmamız gerekir.", ok: false },
      { text: "Geçen gün aldığı kitabı <u>komodinin</u> üzerine bıraktı, hâlâ ilk sayfasını bile açmadı.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde altı çizili sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Ara yönleri belirten kelimeler (güneybatı, kuzeydoğu vb.) her zaman bitişik yazılır. E seçeneğindeki 'güney batısı' ifadesi 'güneybatısı' şeklinde bitişik yazılmalıydı.",
    answers: [
      { text: "Cunda Adası, <u>akşamüzeri</u> öyle güzel olur ki oradan ayrılmak istenemezsiniz.", ok: false },
      { text: "<u>Yirmisekiz</u> Mehmet Çelebi’nin Sefaretname adlı Paris sefirlik hatıraları önemlidir.", ok: false },
      { text: "Türk milletinin birliğine, vatanın bölünmez bütünlüğüne şuurlu bir şekilde inanmak <u>vatanseverliktir</u>.", ok: false },
      { text: "Halka <u>fil dişi</u> kulelerden bakanlar, halktan cevabı çok sert alırlar.", ok: false },
      { text: "Türkiye’nin <u>güney batısı</u> için kuvvetli yağış uyarısında bulunuldu.", ok: true }
    ]
  },
  {
    text: "<p>Patika, oldukça engebeli olan ayak izleri <u>I. sonucunda</u> ortaya çıkmış, tekerlekli araçların hareketinin oldukça sınırlı olduğu dar yol olarak <u>II. ifade edilebilir</u>. Patikalar çığır, <u>III. keçiyolu</u> ve yolak <u>IV. şeklinde de</u> adlandırılmaktadır. Çoğunlukla bir hedef doğrultusunda ortaya çıkarlar. Ayrıca rotalar <u>V. kuş bakışı</u> teras noktalarıyla birleştirilir.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'keçiyolu' sözcüğü yol ve ulaşım ile ilgili olup anlam değişikliğine uğramadığı için ayrı yazılmalıdır: 'keçi yolu'. Dolayısıyla sadece III numaralı kısımda hata vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Tufan efsaneleri, sadece Nuh <u>tufanından</u> ibaret değildir. (II) Eski Mısır <u>uygarlığında</u> da çok yaygın tufan efsaneleri vardır. (III) <u>Bunlar da</u> Nuh'un hikâyesine benzer. (IV) İnsanoğlu, Tanrı <u>Ra'ya</u> komplo kuracak kadar isyan edince büyük tufan afetiyle cezalandırılır. (V) Kimi tarihçiler, bu kadar yaygın bir efsanenin belki <u>tarihî</u> bir gerçeği yansıtıyor <u>olabileceğini</u> söyler.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisindeki altı çizili sözcüğün yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "I numaralı cümledeki altı çizili 'tufanından' sözcüğü tarihî bir olayı kastettiği için büyük harfle başlamalı ve getirilen ek kesme işaretiyle ayrılmalıydı. Doğru yazılışı 'Nuh Tufanı'ndan' şeklindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yazım yanlışı <u>yapılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "A'da 'demiryolu' ayrı olmalı. B'de 'Ankara Üniversitesi' büyük harfle başlamalı. C'de 'taksidini' değil 'taksitini' olmalı (yumuşama kuralına aykırı). D'de 'Avrupalı' yapım eki aldığı için çekim eki kesme ile ayrılmaz: 'Avrupalının'. E seçeneğinde hata yoktur.",
    answers: [
      { text: "Anadolu'da kurulan ilk demiryolu hattı olan İzmir-Aydın demiryolu 1866'da açıldı.", ok: false },
      { text: "Türkiye'nin cumhuriyet tarihinde kurulan ilk üniversitesi Ankara üniversitesi oldu.", ok: false },
      { text: "Türkiye Cumhuriyeti, Osmanlı Devleti'nden devraldığı dış borçların son taksidini de ödedi.", ok: false },
      { text: "Sıradan bir Avrupalı'nın atmosfere saldığı karbon miktarı on iki tona yakındır.", ok: false },
      { text: "Kıyıdaki tekneleri, dalgaların yıpratıcı etkisinden korumak amacıyla dalgakıran yapılmalıdır.", ok: true }
    ]
  },
  {
    text: "<p>Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi, birleşme sırasında anlam değişmesine uğramışsa sözcükler bitişik; sözcüklerden hiçbiri anlam değişmesine uğramamış ise sözcükler ayrı yazılır.</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala <u>uyulmamasından</u> kaynaklanan bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki 'ipek böceği' bir hayvan türüdür. Kelimelerden ikincisi (böcek) gerçek anlamını koruduğu için bu birleşik kelime ayrı yazılmalıdır. 'İpekböceği' yazımı yanlıştır.",
    answers: [
      { text: "Ayşekadın fasulyesi, ülkemizin her bölgesinde yetiştirilen sıcak iklim bitkisidir.", ok: false },
      { text: "Türkiye, özel konumuyla iklimi bakımından ipekböceği ve dut ağacı yetiştirilmesine uygundur.", ok: true },
      { text: "Kızıl rengin en koyu tonu olan vişneçürüğü rengi, vişne rengi ve mor arasında bir renktir.", ok: false },
      { text: "Türk mutfağının eşsiz lezzetlerinden biri olan bülbülyuvası tatlısı, adını şeklinden almıştır.", ok: false },
      { text: "Çaycıların sıkça kullandığı tavşankanı tabiri, esasen çayın demli olması değil; bereketli olması anlamına gelir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Paris'in simgelerinden Notre Dame katedrali 2019'da büyük bir yangın faciası yaşamıştı. (II) Notre Dame, 12. yüz yılda inşasına başlanan tarihi bir yapıdır. (III) Katedral, 19. asrın sonlarında nerdeyse terkedilmiş durumdaydı ve yıkılmak üzereydi. (IV) Victor Hugo, Notre Dame'ın kamburu romanını, Katedral'in harap hâline dikkat çekmek için yazmıştı. (V) Onun yarattığı heyecan sayesinde Katedral yıkılmaktan kurtuldu.</p><p><b>Bu parçadaki numaralı cümlelerin hangisinde yazım yanlışı <u>yapılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "I'de 'Notre Dame Katedrali' büyük harfle yazılmalı. II'de 'yüzyıl' bitişik yazılmalı, 'tarihî' düzeltme işaretli olmalı. III'te 'terk edilmiş' ayrı yazılmalı (ses olayı yok). IV'te eser adı 'Notre Dame'ın Kamburu' şeklinde büyük harfle yazılmalı. V. cümlede herhangi bir hata yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'hasıraltı' sözcüğü ayrı yazılmalıdır. 'Bir işi isteyerek, bilerek ve haksız olarak yürütmemek, örtbas etmek' anlamındaki 'hasır altı etmek' deyiminde geçen bu söz, TDK'nin 2023 değişikliklerine göre 'hasır altı' şeklinde yazılır.",
    answers: [
      { text: "TÜİK'e göre, kasım ayı itibarıyla yıllık enflasyon tüketici ve üretici fiyat endeksleri açıklanmıştır.", ok: false },
      { text: "Osmanlı Dönemi'nden beri kullanılan peştamal, hızlı bir şekilde kuruma özelliğinden dolayı hâlâ yaz aylarında tercih edilir.", ok: false },
      { text: "Yer fıstığı, soya fasulyesi, kuru fasulye, yeşil fasulye, nohut, bezelye ve mercimek; bakliyat olarak adlandırılan besinlerin en önemlileridir.", ok: false },
      { text: "Toptan kelimesinin karşıtı olarak da söylenebilecek perakende sözcüğü, pek çok farklı malın tek tek ya da ayrı şekilde satılması anlamına gelir.", ok: false },
      { text: "Maalesef uzun yıllardan beri hasıraltı edilmiş sorunların şimdi gündeme gelmesi, tüm dünya için yıpratıcı sonuçlar doğurabilir.", ok: true }
    ]
  },
  {
    text: "<p>I. Çevre sorunları sadece hava kirliliği yada küresel ısınma gibi konulardan ibaret değildir.<br/>II. Osmanlı Devleti ile İngiltere arasında imzalanan anlaşmayla, Kıbrıs adası üzerindeki egemenlik haklarımızdan vazgeçtik.<br/>III. Şiir sanatı, bir sayfa üzerinde yanyana dizilmiş kelimelerden oluşan mısralar dizisidir.<br/>IV. Çanakkale boğazında mart ayı itibarıyla etkili olmaya başlayan müsilaj lodosun etkisiyle Ege Denizi'ne doğru ilerlemeye başladı.<br/>V. Dün yaşanan olay, gazeteciler tarafından saniye saniye kayıt edildi.</p><p><b>Numaralanmış cümlelerin hangilerinde aynı kurala uymamaktan kaynaklanan yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "II numaralı cümlede 'Kıbrıs Adası' ve IV numaralı cümlede 'Çanakkale Boğazı' ifadelerinde yer adlarından sonra gelen tür bildiren (ada, boğaz, deniz vb.) kelimeler büyük harfle başlamalıdır. İkisinde de küçük harf kullanılarak aynı kural ihlal edilmiştir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "II ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  }
];

// ============================================================================
// YAZIM KURALLARI - TEST 4
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_4: McQ[] = [
  {
    text: "<p>Günümüzün <u>I. medeniyeti de</u> büyük bir sınavdan geçiyor. Belki <u>II. 20'nci</u> yüzyıldaki küresel ölçekteki savaşlar yok ama bölgesel savaşlarda, neredeyse <u>III. soy kırıma</u> varan <u>IV. katliamlar</u> yaşanıyor. Yaşadığımız küresel salgında devletlerin bencilce kendi çıkarlarını <u>V. gütmeleri de</u> medeniyet dediğimiz ortak değerlerin bir kez daha sorgulanmasını gerektiriyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı bulunmaktadır?</b></p>",
    diff: 3,
    expl: "III numaralı 'soy kırıma' sözcüğünün yazımı yanlıştır. Kelimelerden her ikisi veya ikincisi, birleşme sırasında anlam değişmesine uğradığında bu tür birleşik kelimeler bitişik yazılır. Doğru yazımı 'soykırıma' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sağlıkta <u>I. şiddetin</u> son yıllarda bu denli sıklık göstermesi, tablonun ağırlaşması <u>II. tesadüf</u> değildir. Bütün itirazlarımıza karşın <u>III. uygulanmakta</u> olan, sağlığın alanını <u>IV. yap boz</u> tahtasına çeviren uygulamalar sağlık alanını <u>V. ticarileştirmiştir</u>.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'yap boz' sözcüğünün yazımı yanlıştır. Bir veya iki ögesi emir kipiyle kurulan kalıplaşmış birleşik kelimeler bitişik yazılır. Doğru yazımı 'yapboz' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde farklı bir nedenden kaynaklı yazım yanlışı bulunmaktadır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'meğer ki' bağlacındaki 'ki' kalıplaştığı için bitişik yazılmalıdır (meğerki). Diğer seçeneklerde (A: seyredildi, B: fark edildi, C: kaybolmak, E: kastedilen) birleşik fiillerin ses olayına göre bitişik veya ayrı yazılması kuralına aykırılık vardır.",
    answers: [
      { text: "Televizyon tarihinin ilk ve en başarılı dizilerinden Bonanza, ülkemizde uzun yıllar seyir edildi.", ok: false },
      { text: "Bu hastalık, erken evrede farkedildiğinde basit müdahalelerle tedavi edilebilir.", ok: false },
      { text: "Bir geminin süzülüp geçtiğini kıyılara bakarak izlemek bir gizemin içinde dalıp kayıp olmak gibidir.", ok: false },
      { text: "Dün gördüğüm kişi, meğer ki daha önce Antalya'da rastladığım bir sanatçıymış.", ok: true },
      { text: "Özgünlüğün ve özgünlük terimi ile kasıt edilen şeyin tam olarak ifade edilmesi gerekir.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ifadelerin okunuşuna uygun bir ek <u>getirilmemesinden</u> kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde '17'inci' yazımı yanlıştır. Sayı 'on yedi' şeklinde ünlüyle bittiği için gelen ek ünsüzle başlamalıdır. Doğru yazım '17'nci' şeklinde olmalıdır. Ayrıca 'Millî' sözcüğündeki nispet i'si üzerinde düzeltme işareti olmalıdır.",
    answers: [
      { text: "29 Haziran 2002'de 17'inci Dünya Kupası'nda Türk Milli Futbol Takımı dünya üçüncüsü oldu.", ok: true },
      { text: "Rosa Parks, 1943'te Amerikan Yurttaş Hakları hareketine katıldı.", ok: false },
      { text: "TDK'nin kuruluşuyla birlikte çağdaş Türkçede Atatürk'ün öncülüğünde özleştirme akımı başlamıştır.", ok: false },
      { text: "Sabah 08.15'te kalkan vapura yetişmek için biraz daha acele etmesi gerekiyordu.", ok: false },
      { text: "TÖMER'in amacı dünyanın en eski ve en çok konuşulan dillerinden biri olan Türkçeyi öğretmenin yanında vatandaşlarımızın gelişimine katkı sağlamaktır.", ok: false }
    ]
  },
  {
    text: "<p>Lale İstanbulla özdeşleşmiş, neredeyse şehirin simgesi olmuş bir çiçektir. İstanbul lale müzesi, bu çiçeğe adanmış bir müzemizdir. Sergiler dışında, burada lale türleri üzerine araştırmalar yapılmakta, tarihî ve yeni türlerin canlandırılmasına çalışılmaktadır.</p><p><b>Bu parçada kaç tane yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "Parçada 4 yazım yanlışı vardır: 'İstanbulla' (İstanbul'la), 'şehirin' (ünlü düşmesi: şehrin), 'İstanbul lale müzesi' ifadesindeki 'lale' ve 'müzesi' sözcükleri (özel ad olduğu için doğrusu 'İstanbul Lale Müzesi').",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>Leylak 5 <u>I. m.ye</u> dek uzayabilen bir ağaçtır. Kolay uyum sağlama <u>II. yeteneğiyle</u> her iklimde her <u>III. ortamda</u> yetişir. <u>IV. Balkanlarda</u> ve ülkemizde doğal olarak yetiştiği <u>V. yerler de</u> vardır.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "I numaralı '5 m.ye' yazımı yanlıştır. Ölçü birimlerinin kısaltmalarında nokta kullanılmaz. Doğru yazımı '5 m'ye' şeklinde kesme işaretiyle ayrılmalıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bode Yasası, daha önceleri üzerinde çalışanlar olduysa da Alman Fizikçi Bode'nin adıyla bilinir. (II) Bu yasaya göre güneş sistemindeki gezegenlerin sırası bir matematik dizisiyle belirlenebilir. (III) Bode'nin hesapları, tüm gezegenlerin sırasını ve birbirlerine uzaklıklarını neredeyse bire bir veriyor. (IV) Tek istisna, Mars ve Jüpiter arasındaki boşluk. (V) Ama oradada neredeyse küçük bir gezegen boyutlarına denk gelen küçük asteroitler kuşağı var.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede herhangi bir yazım yanlışı yoktur. I'de 'Yasası' sözcüğü küçük harfle başlamalı, II'de 'Güneş Sistemi'ndeki' şeklinde büyük harfle yazılmalı, III'te 'birebir' bitişik yazılmalı, V'te 'orada da' ayrı yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) İtalyan yazar Edmondo de Amicis'in yazdığı Çocuk kalbi, yüzyılı aşkın süredir okunan büyük bir çocuk edebiyatı klasiğidir. (II) Edmondo, kendi oğlunun tuttuğu günlüğü temel alarak okula yeni başlayan her hangi bir çocuğun gözünden dünyaya bakmıştır. (III) Sınıf, öğretmenler, dersler, sokakta yaşananlar; kısa bölümler halinde tektek anlatılmıştır. (IV) Bu eseri asıl değerli kılan, bu olaylar aracılığıyla insan ve Yurt sevgisini çocuklara aşılamasıdır. (V) Sözün özü bu kitap, yazıldığı dönemin yoğun milliyetçilik ve vatanseverlik duygularını yansıtan bir çocuk klasiğidir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede yazım yanlışı yoktur. I'de 'Çocuk Kalbi', II'de 'herhangi', III'te 'hâlinde' (düzeltme işareti) ve 'tek tek' (ayrı), IV'te 'yurt' (küçük harf) yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Kutuplardaki</u> buzulların erimesi gündelik <u>II. yaşamımıza</u> bizi ilgilendirmiyor olabilir ama ne kadar sıcak yıllar yaşadığımızı hepimiz <u>III. fark edebiliyoruz</u>. <u>IV. Dünyanın</u> en sıcak yazları hep 2000 yılından sonra yaşandı. Bu tesadüf <u>V. olabilirmi</u>?</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'olabilirmi?' sözcüğünün yazımı yanlıştır. Soru edatı olan 'mi' her zaman kendinden önceki sözcükten ayrı yazılır. Doğru yazımı 'olabilir mi?' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Türkiye'de <u>I. TAI'nın</u>; hava platformlarının tasarımı, geliştirilmesi, üretimi, tamamlanması, yenilenmesi ve satış sonrası hizmetleri alanlarındaki teknoloji merkezi olduğu bilinmektedir. Kurum, <u>II. 8 Haziran 1973'te</u> Türkiye'nin savunma sanayisinde dışa bağımlılığını azaltmak amacıyla <u>III. Sanayi ve Teknoloji Bakanlığı</u> bünyesinde kurulmuştur. Ana faaliyet alanları arasında Türkiye ve bölgedeki diğer ülkelerin envanterinde bulunan sabit ve döner kanatlı <u>IV. askerî</u> ve ticari hava platformlarının modernizasyon, modifikasyon ve sistem entegrasyonu programları ile satış sonrası <u>V. hizmetleri de</u> bulunmaktadır.</p><p><b>Bu parçada altı çizili numaralanmış sözlerden hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "I numaralı kısaltmaya getirilen ek yanlıştır. Kısaltmanın açılımı 'Turkish Aerospace Industry'dir. İngilizcede büyük 'ı' sesi olmadığı için 'I' ile gösterilen bu harf 'i' okunur; bu yüzden kısaltmaya ince ünlülü ek getirilir: TAI'nin.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Büyük bir <u>I. kısmı</u> renkli olan <u>II. uğurböceğinin</u> üst kanatları kırmızı ya da sarı üzerine siyah noktalıdır. <u>III. Tropiklerde</u> mavi ve yeşil renklerine de <u>IV. rastlanır</u>. Dut gibi <u>V. meyvelerin</u> üzerinde bulunurlar.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "II numaralı 'uğurböceğinin' sözcüğünün yazımı yanlıştır. Birleşik sözcüğü oluşturan sözcüklerden her ikisi de anlamını koruyorsa ayrı yazılmalıdır. Doğru yazımı 'uğur böceği' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kurtuluş <u>I. Savaşı</u> sırasında işgal ordularından gizlice kaçılarak <u>II. İnebolu'ya</u> getirilen askeri malzemeleri <u>III. Dumlupınar'a</u> ulaştırılmıştır. <u>IV. İnebolulu'ların</u> kahramanlıkları TBMM tarafından unutulmamış \"Beyaz Şeritli <u>V. İstiklal</u> Madalyası\" ile ödüllendirilmiştir.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'İnebolulu'ların' sözcüğünün yazımı yanlıştır. Özel isimlere getirilen yapım ekleri (İnebolu-lu) kesme işaretiyle ayrılmaz, bu ekten sonra gelen çekim ekleri de ayrılmaz. Doğru yazımı 'İneboluluların' şeklindedir.",
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
// YAZIM KURALLARI - TEST 5
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_5: McQ[] = [
  {
    text: "<p>(I) Hafta, hemen hemen tüm takvimlerde yer alır ve insan icatı tek takvim bileşeni de haftadır. (II) Çünkü hiç bir gök gözlemine ya da mevsimin gelip gitmesine bağlı değildir. (III) Bir hafta yedi gündür ve diğer takvim ölçülerinden hiç etkilenmeden sürekli yenilenmektedir. (IV) Hafta, ilk olarak Pazarların kurulacağı günü belirlemek nedeniyle kullanılmaya başlandı. (V) Daha sonra dinlerde haftaya özel anlamlar yüklemeye başladı.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yapılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "I. cümlede 'icat-ı > icadı' (yumuşama olmalı), II. cümlede 'hiçbir' (bitişik olmalı), IV. cümlede 'pazarların' (küçük olmalı), V. cümlede 'dinler de' (bağlaç olan de ayrı olmalı) hataları vardır. III. cümlede hata yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Etmek, edilmek, eylemek, olmak, olunmak yardımcı fiilleriyle kurulan birleşik sözcüklerde; ses düşmesi, ses değişmesi veya ses türemesi varsa bu sözcükler birleşik yazılır: emretmek, reddetmek, hamdolmak vb. Ancak ilk sözcükte herhangi bir ses düşmesi veya türemesi yoksa bu sözcükler ayrı yazılır: alt etmek, kul olmak, var olmak vb.”</p><p><b>Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'terk etmek' birleşik fiilinde herhangi bir ses olayı (düşme veya türeme) olmadığı için kelimenin ayrı yazılması gerekir. 'terkeden' yazımı yanlıştır.",
    answers: [
      { text: "Yılın her mevsiminde coşkun akan Masat Çayı, sadece bu iki baraj arasında rahatça seyrediyor.", ok: false },
      { text: "Daimî olarak aynı şeyleri yaşamadığımız gibi, her zaman aynı şeyleri hissetmemiz de mümkün değildir.", ok: false },
      { text: "Mühendislik yapıtı olarak değerlendirildiğinde bir kuşun uçma tüylerini alt etmek çok güç.", ok: false },
      { text: "1,75 milyon yıl önce Afrika'yı terkeden tek canlılar, insanlar değildi; Dmanisi'deki kazılarda yüzlerce hayvan kemiği de çıkarıldı.", ok: true },
      { text: "Peri Suyu, üzerinde kurulmuş olan ve yapımı devam eden birçok barajdan dolayı doğal yapısını yitirmiş durumda.", ok: false }
    ]
  },
  {
    text: "<p>Çevre sorunları, <u>I. insanoğlunun</u> elinin değdiği her yerde var. <u>II. Evren de</u> uzay çöpleriyle boğuşmaya başladı bile. <u>III. NASA'nın</u> açıkladığına göre, <u>IV. uzayda</u> boyutları bilyelerden büyük <u>V. beşyüz</u> binden fazla parça vardır.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinde yazımı yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Sayılar, birden fazla sözcükten oluşuyorsa (para işlemleri hariç) her zaman ayrı yazılır. V numaralı 'beşyüz' sözcüğü 'beş yüz' şeklinde ayrı yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Cümleler</b></p><p>I. Her şey mükemmel giderken ergeç bir krizle karşı karşıya kalabilirsiniz.<br/>II. Yeşilgöz, temiz mi temiz doğasının yanı sıra yakınlarında gezebileceğiniz mağaralarıda bulunan bir yer.<br/>III. Bir Osmanlı pilotu olan Feza bey, Osmanlı tayyaresi ile Türk toprakları üzerinden uçmuştu.<br/>IV. Toplar ve atar damarlar, Yunan bilim insanları döneminden beri biliniyordu fakat 1653'te üçüncü bir grup damar daha keşfedildi.</p><p><b>Yazım Yanlışları</b></p><p>a. “-de/-da/-ta/-te” bulunma durum ekinin yanlış yazımı<br/>b. Ünvan sıfatının yanlış yazımı<br/>c. Birleşik sözcüğün yanlış yazımı<br/>d. İkilemelerin yanlış yazımı<br/>e. “de” bağlacının yanlış yazımı</p><p><b>Yukarıda verilen cümleler ile cümlelerdeki yazım yanlışları eşleştirildiğinde hangi yazım yanlışı dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I'de 'ergeç' ikilemesi (er geç), II'de 'mağaralarıda' sözündeki 'de' bağlacı (mağaraları da), III'te ünvan sözcüğü 'bey' (Feza Bey), IV'te 'atar damar' ve 'toplar damar' birleşik sözcükleri (atardamar, toplardamar) yanlış yazılmıştır. Bu nedenle 'a' maddesindeki bulunma durum ekinin yanlış yazımı dışarıda kalır.",
    answers: [
      { text: "a", ok: true },
      { text: "b", ok: false },
      { text: "c", ok: false },
      { text: "d", ok: false },
      { text: "e", ok: false }
    ]
  },
  {
    text: "<p>(I) Türk Dil Kurumu'nun 89. kuruluş yıl dönümü olan 12 Temmuz 2021'de tören yapıldı. (II) Bir ulus oluşturmak, dolayısıyla bir devlet kurmanın öncelikle bir dile sahip olmayı şart koştuğunu söylemek abartılı olmaz. (III) Bu düşünce ışığında, Mustafa Kemal Atatürk'ün, devleti kurarken dilimize özel bir önem verdiğini anlamak kolaydır. (IV) Türk Dil Kurumu da bu felsefeyle kurulmuştur. (V) Ne kadar eleştirilse de Türk Dil Kurumu Türkçeye katkı sağlamış köklü bir kurumumuzdur.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede 'Türk Dil Kurumu'nun' ifadesi yanlıştır. Kurum, kuruluş, kurul, birleşim ve iş yeri adlarına gelen ekler kesme işareti ile ayrılmaz. Doğrusu 'Türk Dil Kurumunun' olmalıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Atlas Okyanusu'nu uçakla tek başına geçen ilk kadın pilot ABD'li Amelia Earhart'tır. (II) Earhart, 1. Dünya Savaşı sırasında askerî hastanelerde hemşirelik yaptı. (III) Savaştan sonra pilot olarak ünlendi. (IV) ABD'yi baştanbaşa geçtiği uçuşundan sonra, Hawaii-California arasını yine tek başına uçan ilk kişi oldu. (V) Yine bir uçuş sırasında kaybolan Earhart, havacılık alanında öncü kadınlardandır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede 'baştanbaşa' ikilemesi bitişik yazılmıştır ancak ikilemeler her zaman ayrı yazılır. Doğru yazımı 'baştan başa' şeklinde olmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğinde geçen 'değer bilmez' sözcüğü bitişik yazılmalıdır. -maz/-mez sıfat-fiil ekleriyle kurulan ve kalıplaşmış olan birleşik kelimeler bitişik yazılır: 'değerbilmez'.",
    answers: [
      { text: "Parka gelen kadınlar, çocuklarını salıncağa ve atlıkarıncaya bindiriyordu.", ok: false },
      { text: "Okuryazarlık, dilin potansiyelini geliştirdiği gibi düşünceyi de yeniden biçimlendirmiştir.", ok: false },
      { text: "Üzülüp kırılmamak için tek çare değer bilmez insanlara değer vermemektir.", ok: true },
      { text: "Film, hayatı altüst olan adamın dünyanın öbür ucuna yaptığı yolculuğu anlatıyor.", ok: false },
      { text: "Asya kökenli olan yalıçapkınının gagaları uzun ve kuvvetlidir.", ok: false }
    ]
  },
  {
    text: "<p><u>I. Türk Tabipler Birliği</u>, çalışmaları arasında önemli bir <u>II. yer tutan</u> <u>III. olağandışı</u> durumlardaki sağlık hizmetleri büyük bir <u>IV. özveriyle</u> <u>V. süregelmiştir</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Dış, iç, sıra sözleriyle oluşturulan birleşik kelime ve terimler ayrı yazılır. III numaralı 'olağandışı' sözcüğü 'olağan dışı' şeklinde ayrı yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kuduz aşısını bulan Louis Pasteur'ü tebrik edenler arasında, dünyadaki gelişmeleri yakından izlemesiyle bilinen <u>I. Osmanlı Padişahı</u> I. Abdülhamit de vardı. Abdülhamit, ünlü bilgini <u>II. tebrik etmekle</u> yetinmemiş, çalışmalarını <u>III. teşvik etmek</u> için mecidiye nişanının <u>IV. yanısıra</u> 10 bin frank <u>V. mükâfat</u> da göndermiştir.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Dış, iç, sıra sözleriyle oluşturulan birleşik kelimeler ayrı yazılır. IV numaralı 'yanısıra' sözcüğü 'yanı sıra' şeklinde ayrı yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. ABD'nin New Mexico Eyaleti'nin Roswell Kasabası'na bir UFO düştüğü ve kazadan sağ kurtulan uzaylıların ABD ordusunca ele geçirildi iddia edildi.<br/>II. Ünlü dağcı Tabei 2016 yılı Temmuz ayında bir grup öğrenciyle Fuji Dağı'na tırmanmıştır.<br/>III. Ege ve Akdeniz kıyılarında dilbalığı avı oldukça yaygındır.<br/>IV. Sizler de hayatınızın gözlerinizin önünden filim şeridi gibi geçtiği deneyimler yaşamışsınızdır.<br/>V. Afyonkarahisar Belediyesi tarafından Zafer meydanında çocuklar keyifli anlar geçirdi.</p><p><b>Numaralanmış cümlelerde aşağıdakilerin hangisine uyulmamasından kaynaklanan yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I'de 'Roswell Kasabası'na' ifadesi 'Roswell kasabasına' şeklinde yazılmalıydı (C). III'te 'dilbalığı' sözcüğü 'dil balığı' şeklinde ayrı yazılmalıydı (B). IV'te 'filim' sözcüğü 'film' şeklinde yazılmalıydı (E). V'te 'Zafer meydanında' ifadesi 'Zafer Meydanı'nda' şeklinde yazılmalıydı (A). Belirli bir tarih bildiren ay ve gün adlarının büyük harfle başlaması kuralına uyulmamasından kaynaklanan bir yazım yanlışı yoktur.",
    answers: [
      { text: "Mahalle, meydan, bulvar, cadde isimleri büyük harfle başlar.", ok: false },
      { text: "Birleşme sırasında kelimelerinden hiçbiri veya ikinci kelimesi anlam değişikliğine uğramıyorsa birleşik kelimeler ayrı yazılır.", ok: false },
      { text: "Özel ada dâhil olmayıp tamlama kuran şehir, ilçe belde ifadeleri küçük harfle başlar.", ok: false },
      { text: "Belirli bir tarih bildiren ay ve gün adları büyük harfle başlar.", ok: true },
      { text: "İki ünsüzle biten Batı kökenli alıntılar, ünsüzler arasına ünlü konmadan yazılır.", ok: false }
    ]
  }
];

// ============================================================================
// YAZIM KURALLARI - TEST 6
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_6: McQ[] = [
  {
    text: "<p><u>I. Türk Dil Kurumuna</u> göre bazı yabancı sözcüklere yeni Türkçe karşılıklar belirlenmeli. Örneğin \"petrol\" kelimesine <u>II. \"yer yağı\"</u>, <u>III. \"doğal gaz\"</u> kelimesine ise \"yer gazı\" karşılıkları bulundu. Böylelikle <u>IV. Türkçe'nin</u> yabancı diller karşısında varlığını sürdürebilmesi ve gelişebilmesi <u>V. mümkün olsun</u>.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Özel adlara getirilen yapım ekleri (Türk-çe) ve bunlardan sonra gelen çekim ekleri kesme işaretiyle ayrılmaz. Doğru yazım 'Türkçenin' şeklinde olmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Son dönemde özellikle pandemi ile birlikte evlerde daha sık vakit geçirmeye başladık. (II) Bu dönemde sağlığımızı olumsuz yönde etkileyen bağımlılık ilk başta teknoloji olmuştur. (III) Hiç fark etmesek de günümüzün büyük bir çoğunluğunu telefon ve bilgisayar başta olmak üzere ekranlara bakarak geçiriyoruz. (IV) Buda zamanla fiziksel organlarımızı etkilediği kadar psikolojimizi de olumsuz yönde etkilemektedir. (V) Teknoloji bağımlılığı davranışsal bağımlılık olarak adlandırılmaktadır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı cümledeki 'Buda' sözcüğünde geçen '-da' bağlaçtır ve ayrı yazılmalıdır. Doğru yazım 'Bu da' şeklinde olmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Virüsler enfeksiyon sürecinde çoğalıyor ve bu çoğalma bir çok hatayla sonuçlanabiliyor. (II) Bu da grip gibi virüslerin hızla mutosyuna uğraması anlamına geliyor. (III) Hergün gelişmeleri yakından takip etmek gerekiyor. (IV) Tedavilerin ve aşıların etkisiz hâle gelmesi önlenmelidir. (V) Ama ne yazıkki küresel vaka sayısı hızla artmaya devam ediyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I'de 'bir çok' (birçok) bitişik, II'de 'mutosyuna' (mutasyona) yazım hatası, III'te 'hergün' (her gün) ayrı, V'te 'ne yazıkki' (ne yazık ki) 'ki' ayrı olmalıdır. IV. cümlede yazım yanlışı yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Şanlıurfa'nın Siverek <u>I. ilçesinde</u> bir grup <u>II. doğasever</u> Fırat <u>III. Nehri'nin</u> eşsiz güzellik ve manzarasında doğa yürüyüşü yaptı. Yaklaşık yetmiş kişinin katıldığı doğa yürüyüşünde keyifli anlar yaşandı. Bu <u>IV. aktivitenin</u> her yıl <u>V. Mayıs</u> ayında yapılmasına karar verildi.</p><p><b>Bu parçada numaralanmış bölümlerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Belirli bir tarih (gün/yıl) bildirmeyen ay ve gün adları küçük harfle başlar. 'mayıs ayında' şeklinde küçük harfle yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde parantez içindeki yazım yanlışı ile açıklama <u>uyuşmamaktadır</u>?</b></p>",
    diff: 3,
    expl: "D'deki cümlede yanlışlık özel adların yazımında değil, kısaltmanın yazımındadır. Büyük harfli kısaltmalarda (T.C. ve T. dışında) nokta kullanılmaz; doğrusu 'MÖ 9. yüzyıl' şeklindedir. Diğer seçeneklerdeki açıklamalar cümlelerdeki yanlışlarla (beşikörtüsü, 2023 Aralık, başladığınızda, hâlâ) uyuşmaktadır.",
    answers: [
      { text: "Birleşik sözcüğün yazımında yanlışlık yapılmıştır. (Beşik örtüsü tarzında uzayan bir kubbe altında dakikalarca yürüdük.)", ok: false },
      { text: "Belirli bir tarih verilmesine rağmen ay adı küçük harfle başlatılmıştır. (Karar, 2023 aralık ayında onaylanmıştı.)", ok: false },
      { text: "Bulunma durum ekinin yazımında yanlışlık bulunmaktadır. (Bir metin kaleme almaya başladığınız da başvuracağınız asıl yöntem önemli sözcükleri sonlara yerleştirmektir.)", ok: false },
      { text: "Özel adın büyük harfle başlamamasından dolayı yazım yanlışı yapılmıştır. (M.Ö. 9. yüzyıl Hint metinlerinde Dünya'nın Güneş çevresinde döndüğü yazılır.)", ok: true },
      { text: "Düzeltme işaretinin kullanılmaması yazım yanlışına neden olmuştur. (Sorunlar hala çözülebilmiş değil ve insanların bir kısmı, evlerinden uzakta hayatlarını sürdürmeye çalışıyor.)", ok: false }
    ]
  },
  {
    text: "<p>I. Ihlamur ağaçlarından yayılan o muhteşem koku her yeri sarmıştı.<br/>II. Yalanlarıyla ailesinin hayatını alt üst etmişti.<br/>III. Artık aralarında bir fark olduğunu ayırt etmeye başlamıştık.<br/>IV. Yurtdışında eğitim görmeye giden öğrencilerin sayısı gittikçe artıyor.<br/>V. Antrenmanlara hafta içi her gün katılmaya çalışıyordu.</p><p><b>Yukarıda numaralanmış cümlelerin hangilerinde yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "II. cümlede 'altüst' (bitişik), IV. cümlede 'yurt dışı' (ayrı) yazılmalıdır. Dolayısıyla II ve IV numaralı cümlelerde hata vardır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>I. Doğu Almanya yönetimi, Berlin'in Batısı'na kaçışları önlemek için sınırını 1961'de \"Utanç Duvarı\" denilen bir duvarla kapattı.<br/>II. ABD'de yaşayan İran'lı Prof. Meryem Mirzahani, \"Matematiğin Nobeli\" olarak görülen Fields Ödülü'nü kazanan ilk kadın olarak tarihe geçti.<br/>III. Türk Dil Kurumu'nun en önemli üyelerinden olan Ömer Asım Aksoy, hem dilimizin sadeleşmesi hem de çağdaş sözcükler hazırlanması alanlarında öncüydü.<br/>IV. 2003'de dört bölümlük bir dizi olarak yayımlanan Havada Bulut, Sait Faik Abasıyanık'ın öykülerinden uyarlanmıştı.<br/>V. Osmanlı Devletinin, I. Dünya Savaşına fiilen katılmasını sağlayan olay, Goeben ve Breslau adındaki iki Alman savaş gemisinin Çanakkale boğazına gelmesidir.</p><p><b>Yukarıda numaralanmış cümlelerin hangisinde birden çok yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "V. cümlede üç özel adın yazımında yanlışlık vardır: 'Osmanlı Devleti'nin', 'I. Dünya Savaşı'na' ve 'Çanakkale Boğazı'na' şeklinde yazılmalıydı. Diğer cümlelerde birer yanlış vardır: I'de 'batısına', II'de 'İranlı', III'te 'Türk Dil Kurumunun', IV'te '2003'te'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Yeşilzeytin</u>, içeriğinde yüksek oranda E vitamini bulunur. Bulundurduğu E vitamini sayesinde ise cilt sağlığına ve göz sağlığına <u>II. çokmu çok</u> etkisi vardır. Ayrıca bağışıklık sisteminin güçlenmesini sağlar. Sindirim sisteminin <u>III. düzenlenmesindede</u> katkısı bulunmaktadır. Günde <u>IV. yanlızca</u> 3 ya da 4 adet tüketildiğinde bir kişinin günlük ihtiyaç duyduğu tüm vitamin ve <u>V. mineraller</u> tam anlamıyla karşılanmış olur.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisinin yazımında yanlışlık <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'mineraller' sözcüğü doğru yazılmıştır. Diğerlerinde: yeşil zeytin (ayrı), çok mu (ayrı), düzenlenmesinde de (ayrı), yalnızca (doğru formu budur, yanlızca hatalıdır) hataları vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Çanakkale'de</u> doğan Melih Cevdet Anday, doğumundan kısa bir süre sonra ailesiyle İstanbul'a geldi. Babasının işi nedeniyle Ankara'ya taşınmalarının ardından liseyi <u>II. Gazi Lisesinde</u> tamamladı. Ukde isimli ilk şiiri <u>III. 1935'te</u> <u>IV. Varlık Dergisi'nde</u> <u>V. yayımlandı</u>.</p><p><b>Bu parçada altı çizili sözcüklerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "Özel ada dâhil olmayan 'gazete, dergi, tablo' vb. sözler büyük harfle başlamaz. IV numaralı 'Varlık dergisinde' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Türkiye'nin üçüncü en uzun akarsuyu Sakarya <u>I. nehri</u>, olanca görkemiyle Eskişehir'in Alpu <u>II. ilçesine</u> bağlı <u>III. Sakarıkaracaören Mahallesi'nden</u> geçiyor. Toplam uzunluğu 824 kilometreyi bulan nehir, Eskişehir <u>IV. Çifteler'den</u> doğuyor ve Sakarya <u>V. Karasu'dan</u> Karadeniz'e dökülüyor.</p><p><b>Bu parçada altı çizili sözcüklerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "I numaralı 'Sakarya nehri' ifadesinde nehir özel ada dahil olduğu için büyük harfle başlamalıdır: 'Sakarya Nehri'.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi birleşme sırasında anlam değişmesine uğramışsa sözcük bitişik yazılır.”</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala uymadığı için bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'ön yargı' sözcüğü anlam kaymasına uğramadığı için ayrı yazılmalıdır. Bitişik yazılması yazım yanlışıdır.",
    answers: [
      { text: "Türkiye'nin sadece kuzey bölgelerinde bulunan kızılkanat, bir sürü balığıdır.", ok: false },
      { text: "Cordifalia çiçeği, gülkurusu rengindedir ve kırmızı sap kısımlarıyla tanınır.", ok: false },
      { text: "Normal olmadığını düşünenler önyargıların ancak kusurlu kişilerde olduğunu savunur.", ok: true },
      { text: "Gaziantep mutfağının en güzel yemeklerinden biri olan alinazik, patlıcan ve et ile yapılan bir ana yemektir.", ok: false },
      { text: "Samanyolu, gece gökyüzünde görülen ve çıplak gözle tek tek ayırt edilemeyen yıldızlardan oluşan puslu bir ışık şerididir.", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanlar gün içerisinde kahvaltıda ne yiyeceğinden bir hafta sonra neler yapacağına kadar pek çok konu da karar verme sürecinden geçerler. (II) Peki, bu karar verme sürecinde insanlar sadece kendi fikirlerinemi önem verirler yoksa başka kişilerin fikirlerinden de etkilenirler mi? (III) Bu sorunun cevabını bir Sosyal psikolog Soloman Asch bir deney yaparak ortaya çıkarmaya çalışmıştır. (IV) 1956 yılında gerçekleştirilen bu deneye bir grup üniversite öğrencisi gönüllü olarak katılmıştır. (V) Deneye katılan gruba öncelikle bir takım sorular yöneltilmiştir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede herhangi bir yazım yanlışı yoktur. I'de 'konu da' bulunma hâli eki olduğu için 'konuda' şeklinde bitişik, II'de 'fikirlerinemi' soru eki ayrı yazılacağı için 'fikirlerine mi', III'te ünvan olarak kullanılan 'psikolog' büyük harfle, V'te belgisiz sıfat olan 'bir takım' ise 'birtakım' şeklinde bitişik yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  }
];