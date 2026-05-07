import { McQ } from "../../../../types";

// ============================================================================
// YAZIM KURALLARI - TEST 1
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_1: McQ[] = [
  {
    text: "<p>Kayseri'de az tanınan ama önemli bir meyvemiz var: gilaburu. Sonbaharda olgunlaşan gilaburu, ekim ayındaki <u>I. hasatından</u> sonra kışın <u>II. kullanılmak</u> üzere <u>III. çömleklere</u> basılıyor. Hem suyu <u>IV. içilebiliyor</u> hem de tanesi yenebiliyor. <u>V. Dışarıdan</u> bakınca üzüme benzeyen gilaburunun, böbrek hastalıklarına iyi geldiği söyleniyor.</p><p><b>Bu parçadaki numaralanmış sözlerin hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "Süreksiz sert ünsüzlerden (p-ç-t-k) biriyle biten 'hasat' sözcüğü ünlüyle başlayan bir ek aldığında ünsüz değişimine (yumuşamasına) uğrar. Bu kurala uyulmadığı için 'hasatından' kelimesinin 'hasadından' şeklinde yazılması gerekirdi.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Türk mutfağında önemli yeri olan çamfıstığı, fıstık çamının tohumudur. (II) Genelde yüksek rakımları seven fıstık çamı ülkemizin güney batı bölgelerinde asıl olarak Bergama dolayındaki Kozak Yaylası'nda yetişir. (III) Asılında soğuk sevmeyen bir ağaçtır. (IV) Yapı kerestesi olarak odunu değerlidir. (V) Ama yirmibeş metre boyundaki ağacın gerçek önemi, son yıllarda altın kadar değerli olan fıstığıdır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
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
    text: "<p>(I) Birleşmiş Milletler, dünya nüfusunun 21. yüzyılın sonunda 11 milyar olacağını <u>ön görüyor</u>. (II) <u>Dünya Nüfus Günü</u> bize, nüfus artış hızımızın sürdürülemez olduğunu hatırlatıyor... (IV) <u>Antrparantez</u> kalabalıklaşan nüfus... (V) <u>Çoğalmak</u>, her zaman güçlü olmak anlamına gelmeyebiliyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ifadenin okunuşuna uygun bir ek getirilmemesinden kaynaklanan yazım yanlışı vardır?</b></p>",
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
    text: "<p>Doğu <u>I. Anadolu'nun</u> güzel çiçeklerinden <u>II. eşek yoncası</u>, kök saldığı ortama bağlı olarak <u>III. iki yüz elli</u> santime dek... En fazla <u>IV. iki yıl ömrü</u> vardır. Kokulu yonca adıyla da bilinir. Sarı çiçekleri hem güzeldir hem de <u>V. boyarmadde</u> olarak kullanılmaktadır.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımında yanlışlık vardır?</b></p>",
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
    text: "<p>(I) Eğer kurgu olmasaydı ne ölümün ne de hayatın bir anlamı olurdu. (II) Kurgu, hayatın ve ölümün yeknesaklığını ortadan kaldırarak onları yerli yerine oturtur. (III) Anlamını, bağlamını bulmayan <u>hiç birşey</u> yerini de bulamaz hayatta. (IV) Yazar anlatarak anlamı yazma yöntemiyle de anlamın ötesini yaratır. (V) Tek katmana sıkışan hayat ve anlam böylelikle ölümün eteğinden âdeta ölümsüzlük isteğinin kıyısına çekilir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
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
    text: "<p>Medenileşme derken teknolojik gelişmeler yanında terbiye, edep, ahlak, <u>zerafet</u>, kültür ve insani değerler gibi kavramları da <u>kastetmiş</u> oluruz. Medeniyet bu anlamıyla çağın bilimsel gereklilikleriyle doğru davranış kalıplarının <u>bileşimi</u>, böylelikle oluşturulan bir çağdaş yaşam anlamında da yorumlanabilir.</p><p><b>Bu parçadaki numaralanmış sözlerin hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>(I) Kavun, kabakgillerden sürüngen gövdeli bitki türü ve bu bitkinin iri meyvesidir. (II) Anadolu kavun konusunda zengin bir bölgedir. (III) Örneğin İtalyanların ünlü 'kantalup kavunu' aslında Diyarbakır kökenlidir. (IV) Trakya'da yetişen topatan ve Ege'ye has <u>Kırkağaç Kavunları</u>, bilinen kavun türlerimiz arasında yer alır. (V) Kırkağaç, topatan kavununa göre daha dayanıklı olmasıyla tercih edilir olmuş ama ikisinin de lezzeti ayrıdır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
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
    text: "<p>• Hun imparatoru Mete han tarafından <u>M.Ö. 209</u> yılında kurulan orduyu...<br/>• <u>kral Arthur</u> efsanevi bir kişiliktir. Efsaneye göre Keltleri İngiltere topraklarından kovan <u>kral</u> odur. Bu efsane <u>5. yy'nın</u> sonlarında ortaya çıkmıştır.</p><p><b>Numaralanmış cümlelerle ilgili yargılardan hangileri ortaktır?</b></p>",
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
    text: "<p>(I) Samsun'daki <u>Mırtıka Palas oteli</u>, 1902'de Jean İonnis Mantika tarafından inşa edilmiştir. (II) Bina, 1926'da Atatürk'e armağan edilmiştir. (III) 1998'den beri Samsun gazi müzesi olarak hizmet vermektedir. (IV) Binada <u>yüzdoksanbir</u> eser sergilenmektedir. (V) Atatürk'le Samsun'a çıkan 18 silah arkadaşının <u>bal mumu</u> heykelleri de vardır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "I. cümlede 'oteli' küçük yazılmış (büyük olmalı). III. cümlede 'Gazi Müzesi' büyük harfle yazılmalıydı. IV. cümlede sayılar (yüz doksan bir) ayrı yazılmalıydı. V. cümlede 'balmumu' bitişik yazılmalıydı (belirtilen kurala göre tartışmalı olsa da). Çözüm anahtarı II. cümlede yanlış olmadığını belirtmektedir.",
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
    text: "<p>Divriği'nin 18 km <u>I. kuzeybatısına</u> gitmeyi <u>II. göze</u> alırsanız hayalet bir kasabamızla karşılaşırsınız. Divriği demir madenlerinde çalışan işçilerin aileleriyle birlikte yaşaması için inşa edilen <u>III. Cürek Kasabası</u>, <u>IV. 80'li</u> yıllarda terk edilmiştir. Burası filmleri aratmayacak görünümüyle sizi büyüleyecektir. <u>V. Cumhuriyet'imizi</u> kuranların, işçilerimizin büyük şehirdekilerden farksız yaşaması için nasıl büyük bir organizasyona giriştiklerini görünce hüzünlenmemek olanaksız.</p><p><b>Bu parçadaki altı çizili sözlerin hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>I. Tıp bayramı ilk kez, Birinci Dünya Savaşı sonunda İstanbul'un işgal edildiği günlerde tıp öğrencilerinin bir tepkisi olarak 1919'da kutlandı.<br/>II. 1945'te Ankara Radyosu'nda saz çalmaya başlayan Ahmet Gazi, Kayseri türkülerini en iyi söyleyen isimlerdendir.<br/>III. Ramazan bayramının ilk günü aynı zamanda Şevval ayının birinci günüdür.<br/>IV. Çok önemli düşüncelerimizi uluorta her yerde söylemek doğru değildir.<br/>V. Sahil Güvenlik Komutanlığı'nın kuruluş tarihi 13 Temmuz 1982'dir.</p><p><b>Numaralanmış cümlelerde yapılan yazım yanlışları, gerekçeleri bakımından ikişerli eşleştirildiğinde hangi cümle dışarıda kalır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik fiillerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "Yardımcı eylemle (etmek, olmak) kurulan birleşik fiillerde herhangi bir ses olayı (düşme veya türeme) yoksa fiil ayrı yazılır. 'Farz edelim' ifadesinde ses olayı olmadığı için ayrı yazılmalıdır. 'Farzedelim' yazımı yanlıştır.",
    answers: [
      { text: "İtalyan bilim insanları deneyerek keşfetmişlerdir.", ok: false },
      { text: "ilk kadın olduğu varsayılıyor.", ok: false },
      { text: "beyaz şeritle hemen ayırt edilir.", ok: false },
      { text: "hücresi üretiyorsa bir seçenek olabilir.", ok: false },
      { text: "Farzedelim ki uzayda canlılar yaşıyor ve bu canlılar oksijen alıp karbondioksit verebiliyor.", ok: true }
    ]
  },
  {
    text: "<p>“Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi birleşme sırasında anlam değişmesine uğramışsa sözcük bitişik yazılır.”</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala uymamaktan kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde geçen 'vezir parmağı' bir tatlı adıdır ve her iki sözcük de gerçek anlamından uzaklaşmıştır. Kural gereği bitişik yazılması gerekirken ayrı yazılması yazım yanlışıdır.",
    answers: [
      { text: "akşamsefası, akşam saatlerinde çiçek açıp sabah saatlerinde solmaktadır.", ok: false },
      { text: "Bazı insanların çıtkırıldım olmalarının sebebi...", ok: false },
      { text: "Balıksırtı desenine genel olarak bakıldığında...", ok: false },
      { text: "irmikli tatlıya vezir parmağı adı verildi.", ok: true },
      { text: "vişneçürüğü, pembe ve kahverenginin karışımından elde edilmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Marco Polo, 8 bölümlük bir mini diziydi. Ama bu tarihî kişilik, ülkemizde <u>I. önceden</u> de bilindiği için kahramanın yolculuklarını anlatan dizi çok tutulmuştu. 1982 yılında ilk kez ABD'de <u>II. yayınlanan</u> dizide, <u>III. Orta Asya'nın</u> bizim de bildiğimiz halkları ve tarihî kişiliklerini <u>IV. seyretme</u> fırsatı bulmuştuk. Dizinin <u>V. Asyalılara</u>, pek alışık olmadığımız şekilde olumlu yaklaşması, sevilmesinde etkili olmuştu kuşkusuz.</p><p><b>Bu parçadaki numaralanmış bölümlerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
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
    text: "<p>I. Geçtiğimiz günlerde ardarda sarsıntılar yaşayan bölge yeniden deprem korkusu yaşadı.<br/>II. Öteden beri zaman zaman yapıla gelen bu anketler fikir sahibi olmamızı sağlıyor.<br/>III. Rus mühendis Aleksey Pulitsov tarafından geliştirilen tetris oyunu Sovyetler Birliği'nde piyasaya sürüldü.<br/>IV. Binbir zorlukla bağımsızlığa kavuşan bir ülkenin geleceğe umutla bakan hikayesinin başlangıcıdır Ankara.<br/>V. Altışar kişilik iki takımla yapılan salon sporu voleyboldur.</p><p><b>Numaralanmış cümlelerde aşağıdakilerin hangisinden kaynaklanan bir yazım yanlışı yoktur?</b></p>",
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
      { text: "ilk çağda bilginler tarih, coğrafyanın ve matematikle ilgili bilgileri birlikte işlemişlerdir.", ok: true },
      { text: "Eski Mısırlılar, ayları 10'ar günlük üç bölüme bölmüşlerdi.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'önyargımızı' sözcüğü 'ön yargı' şeklinde ayrı yazılmalıdır. Diğer seçeneklerdeki birleşik kelimeler ve yazımlar doğrudur.",
    answers: [
      { text: "Toplumun küçüklükten itibaren kulağımıza fısıldadığı her kelime önyargımızı oluşturur.", ok: true },
      { text: "Gündüz sıcağında binbir çiçeğin kokusunu getiren rüzgâr...", ok: false },
      { text: "Anadolu şoförlerinin birçoğunda güngörmüş bir hâl mutlaka bulunur.", ok: false },
      { text: "Tanıtılan bu kitaplar tam anlamıyla baş ucu kitaplarıdır.", ok: false },
      { text: "Türkiye'de demir yolunu teşvik edici düzenlemeler...", ok: false }
    ]
  },
  {
    text: "<p>Akdeniz Üniversitesi Su Ürünleri Fakültesi'nde <u>I</u> yapılan çalışmada küresel ısınma ve Süveyş Kanalı'nın <u>II</u> derinleşmesi nedeniyle Kızıldeniz'den gelip Akdeniz'i <u>III</u> istila eden balık türü <u>IV</u> sayısının, iki türün daha katılımıyla 65'e yükseldiği <u>V</u> ifade edildi.</p><p><b>Bu parçadaki altı çizili noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
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
    text: "<p>Çin'in Şion <u>I. ilinde</u> 2000 yıl öncesine ait, <u>II. aslıyla</u> aynı boyda, savaş donanımlı, kilden yapılmış <u>III. yedi bin bir</u> ordu bulundu. Seramik askerlerin <u>IV. hiçbirinin</u> diğerine benzememesi şaşırtıcıydı. Bu seramik askerler, imparatoru ölümden sonra <u>V. koruyacak</u> askerlerdi.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "Özel ada dâhil olmayıp tamlama kuran 'il' sözcüğü küçük harfle başlar. 'Şion ilinde' şeklinde yazılmalıydı. Ayrıca sayılar (yedi bin bir) ayrı yazılır; ancak burada temel hata I numaralı kelimedir.",
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
      { text: "Hasankeyf'teki tarihî yapı özel bir platforma yerleştirilerek nakil edildi.", ok: false },
      { text: "Madem ki buraya kadar geldik, mutlaka bize vereceği bir görev vardır.", ok: true },
      { text: "Keşif edilen yeni gezegenin sağlam bir atmosfere sahip olduğu düşünülüyor.", ok: false }
    ]
  },
  {
    text: "<p>Sir Derya boylarında ve Aral çevresinde <u>I. 10. yy.da</u> kurulan Oğuz Yabgu Devleti'nde <u>II. Oğuz Türkçesi</u> konuşma dili olsa da yazı dili olarak kullanıldığına dair elimizde herhangi bir dil verisi yoktur. Oğuzların ilk büyük siyasi yapılanması olan Büyük Selçuklu Devleti ise Arapça ve kısmen Farsçayı <u>III. resmi dil</u> yapmıştır. Bugüne kadar, <u>IV. Selçuklular Dönemi'nden</u> günümüze ulaşan herhangi bir Türkçe eser tespit edilememiştir.</p><p><b>Bu parçada altı çizili numaralanmış sözlerden hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "III numaralı 'resmi dil' ifadesinde 'resmî' sözcüğündeki 'i' üzerinde düzeltme işareti olmalıdır. Belirtme durumu eki olan 'i' ile karışmaması için nispet eki 'î' ile yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'ilçe' sözcüğü özel ada dâhil olmadığı için küçük harfle başlamalıdır. 'Altındağ ilçesi'ndeki' şeklinde yazılmalıydı.",
    answers: [
      { text: "İstiklâl Marşımızın güftesi, Anadolu'da Millî Mücadele'nin devam ettiği sırada...", ok: false },
      { text: "Prof. Dr. Muharrem Ergin'in kaleme aldığı Orhun Abideleri adlı eseri...", ok: false },
      { text: "Roma Hamamı, Ankara'nın Altındağ İlçesi'ndeki Çankırı Caddesi'nce yüksek bir höyüğün üzerindedir.", ok: true },
      { text: "Doğu'dan bir Batı çıkmaz çünkü ne Doğu, Batı'nın geçtiği yollardan geçmiş...", ok: false },
      { text: "Tanzimat Dönemi yazarı Ziya Paşa'nın, Girit İsyanı'ndaki olaylar nedeniyle...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde yay ayraç içinde verilen kurala uymamaktan kaynaklanan bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki 'bir biriyle' sözcüğü, 'biri + biri' birleşirken ünlü düşmesine uğradığı için bitişik yazılmalıdır ('birbiriyle'). Ayrı yazılması yazım yanlışıdır.",
    answers: [
      { text: "Bazı alanlarda bir biriyle ilişkili bilgileri bir araya getirerek güncelleme yapabilmekteyiz.", ok: true },
      { text: "Suçlunun serbest bırakılmasına yapılan itiraz reddedildi.", ok: false },
      { text: "C vitamini konusunda oldukça zengin olan kuşburnu çayı...", ok: false },
      { text: "Esnaf içine düştüğü ekonomik çukura veryansın ediyor.", ok: false },
      { text: "Birisi çokbilmiş tavrına girdiğinde amacınız, onun zihnini yeni fikirlere açmak olmalıdır.", ok: false }
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
    expl: "I numaralı cümlede 'pek çok' sözcüğü ayrı yazılmalıdır. V numaralı cümlede ise 'iletişim anlamın da' ifadesindeki 'da' bağlaç olduğu için ayrı yazılmalıdır. Bu nedenlerle I ve V numaralı cümlelerde yazım yanlışı vardır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I ve V", ok: true },
      { text: "II ve III", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Edwin Hubble, 20’inci yüzyıl başının en büyük astronomi dehasıdır. (II) Geçimsizliğiylede ünlü biriydi aynı zamanda. (III) Fakat evren tasavvurunu tamamen değiştiren bilim insanıdır. (IV) Evrenin sınırları olmadığını ayrıca sürekli genişlediğini ilk söyleyen kişidir. (V) Günümüzün en gelişmiş uzay gözlem araçlarından Hobble uzay teleskopu onun anısını yaşatmaktadır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "I'de '20'inci' yerine '20. yüzyıl' veya 'yirminci' (20'nci) olmalıydı. II'de 'geçimsizliğiyle de' ayrı yazılmalıydı. IV'te 'ayır-' fiili 'ayrıca' olurken ünlü düşmesine uğrar. V'te 'teleskobu' şeklinde yumuşama olmalıydı. III. cümlede yanlışlık yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerde altı çizili sözlerin hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "B seçeneğinde geçen 'yalınkat' sözcüğü birleşik bir kelimedir ve 'tek katlı, basit' anlamlarına gelir. Bu kelimenin doğru yazımı bitişik yani 'yalınkat' şeklindedir.",
    answers: [
      { text: "Bu <u>akılalmaz</u> olay bilim insanları tarafından şaşkınlıkla karşılandı.", ok: false },
      { text: "Sanatçının romanında <u>yalınkat</u> karakterler, bir iki özellikleri ile gözüküp birkaç sözcük ile ifade edilir.", ok: true },
      { text: "Sanatçı “Kitaplar <u>Baş Tacımız</u>” hareketini başlatarak kitap okumayı yaygınlaştırmayı hedefliyor.", ok: false },
      { text: "Çalışma salonlarında tel zımba, telli dosya, klasör, top kâğıt, <u>ataş</u> gibi araçlar bulundurmamız gerekir.", ok: false },
      { text: "Geçen gün aldığı kitabı <u>komodinin</u> üzerine bıraktı, hâlâ ilk sayfasını bile açmadı.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerde altı çizili sözlerin hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "Ara yönleri belirten kelimeler (güneybatı, kuzeydoğu vb.) her zaman bitişik yazılır. E seçeneğindeki 'güney batısı' ifadesi 'güneybatısı' şeklinde bitişik yazılmalıydı.",
    answers: [
      { text: "Cunda Adası, <u>akşamüzeri</u> öyle güzel olur ki oradan ayrılmak istenemezsiniz.", ok: false },
      { text: "<u>Yirmisekiz</u> Mehmet Çelebi’nin Sefaretname adlı Paris sefirlik hatıraları önemlidir.", ok: false },
      { text: "Türk milletinin birliğine, vatanın bölünmez bütünlüğüne şuurlu bir şekilde inanmak <u>vatanseverliktir</u>.", ok: false },
      { text: "Halka <u>fildişi</u> kulelerden bakanlar, halktan cevabı çok sert alırlar.", ok: false },
      { text: "Türkiye’nin <u>güney batısı</u> için kuvvetli yağış uyarısında bulunuldu.", ok: true }
    ]
  },
  {
    text: "<p>Patika, oldukça engebeli olan ayak izleri <u>I. sonucunda</u> ortaya çıkmış, tekerlekli araçların hareketinin oldukça sınırlı olduğu dar yol olarak <u>II. ifade edilebilir</u>. Patikalar çığır, <u>III. keçiyolu</u> ve yolak <u>IV. şeklinde</u> de adlandırılmaktadır. Çoğunlukla bir hedef doğrultusunda ortaya çıkarlar. Ayrıca rotalar <u>V. kuş bakışı</u> teras noktalarıyla birleştirilir.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde yazım yanlışı yapılmıştır?</b></p>",
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
    text: "<p>(I) <u>Tufan efsaneleri</u>, sadece Nuh tufanından ibaret değildir. (II) Eski Mısır uygarlığında da çok yaygın tufan efsaneleri vardır. (III) Bunlar da Nuh'un hikâyesine benzer. (IV) İnsanoğlu, <u>Tanrı Ra'ya</u> komplo kuracak kadar isyan edince büyük tufan afetiyle cezalandırılır. (V) Kimi tarihçiler, bu kadar yaygın bir efsanenin belki <u>tarihî</u> bir gerçeği yansıtıyor olabileceğini söyler.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisindeki altı çizili sözcüğün yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "I numaralı cümledeki 'Tufan efsaneleri' ifadesindeki 'Tufan' sözcüğü özel bir tarihî olayı (Nuh Tufanı) kastettiği için büyük harfle başlamalı ve gelen ek kesme ile ayrılmalıdır: 'Tufanı'ndan'.",
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
    text: "<p><b>Aşağıdaki cümlelerin hangisinde birleşme sırasında sözcüklerin anlamını koruması veya kaybetmesi kuralına uymamaktan kaynaklanan bir yazım yanlışı vardır?</b></p>",
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
    text: "<p>(I) Paris'in simgelerinden Notre Dame katedrali... (II) Notre Dame, 12. yüz yılda inşasına başlanan... (III) Katedral... nerdeyse terkedilmiş durumdaydı... (IV) Victor Hugo, Notre Dame’ın kamburu romanını... (V) Onun yarattığı heyecan sayesinde Katedral yıkılmaktan kurtuldu.</p><p><b>Bu parçadaki numaralı cümlelerin hangisinde yazım yanlışı <u>yapılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "I'de 'Katedrali' büyük olmalı. II'de 'yüzyıl' bitişik olmalı. III'te 'terk edilmiş' ayrı olmalı (ses olayı yok). IV'te 'Kamburu' büyük ve 'Katedral'in' şeklinde olmalı. V. cümlede herhangi bir hata yoktur.",
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
    expl: "E seçeneğindeki 'hasıraltı' sözcüğü 'bir işi örtbas etmek' anlamında kullanılan kalıplaşmış bir birleşik sözcüktür ve bitişik yazılmalıdır. 'hasır altı' şeklinde ayrı yazılması yanlıştır.",
    answers: [
      { text: "TÜİK'e göre, kasım ayı itibarıyla yıllık enflasyon tüketici ve üretici fiyat endeksleri açıklanmıştır.", ok: false },
      { text: "Osmanlı Dönemi'nden beri kullanılan peştamal, hızlı bir şekilde kuruma özelliğinden dolayı hâlâ tercih edilir.", ok: false },
      { text: "Yer fıstığı, soya fasulyesi, kuru fasulye, yeşil fasulye... besinlerin en önemlileridir.", ok: false },
      { text: "Toptan kelimesinin karşıtı olarak da söylenebilecek perakende sözcüğü...", ok: false },
      { text: "Maalesef uzun yıllardan beri hasır altı edilmiş sorunların şimdi gündeme gelmesi...", ok: true }
    ]
  },
  {
    text: "<p>I. Çevre sorunları sadece hava kirliliği <u>yada</u> küresel ısınma...<br/>II. ...Kıbrıs <u>adası</u> üzerindeki egemenlik...<br/>III. ...mısralar <u>dizisidir</u>.<br/>IV. Çanakkale <u>boğazında</u> mart ayı itibarıyla...<br/>V. ...saniye saniye <u>kaydedildi</u>.</p><p><b>Numaralanmış cümlelerin hangilerinde aynı kurala uymamaktan kaynaklanan yazım yanlışı yapılmıştır?</b></p>",
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
    text: "<p>(I) Günümüzün medeniyeti de büyük bir sınavdan geçiyor. (II) Belki 20’nci yüzyıldaki küresel ölçekteki savaşlar yok ama bölgesel savaşlarda, neredeyse <u>III. soy kırıma</u> varan katliamlar yaşanıyor. (IV) Yaşadığımız küresel salgında devletlerin bencilce kendi çıkarlarını <u>V. gütmeleri</u> de medeniyet dediğimiz ortak değerlerin bir kez daha sorgulanmasını gerektiriyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı bulunmaktadır?</b></p>",
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
    text: "<p>Sağlıkta <u>I. şiddetin</u> son yıllarda bu denli sıklık göstermesi, tablonun ağırlaşması <u>II. tesadüf</u> değildir. Bütün itirazlarımıza karşın <u>III. uygulanmakta</u> olan, sağlığın alanını <u>IV. yap boz</u> tahtasına çeviren uygulamalar sağlık alanını <u>V. ticarileştirmiştir.</u></p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ifadelerin okunuşuna uygun bir ek getirilmemesinden kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde '17'inci' yazımı yanlıştır. Sayı 'on yedi' şeklinde ünlüyle bittiği için gelen ek ünsüzle başlamalıdır. Doğru yazım '17'nci' şeklinde olmalıdır. Ayrıca 'Millî' sözcüğündeki nispet i'si üzerinde düzeltme işareti olmalıdır.",
    answers: [
      { text: "29 Haziran 2002'de 17'inci Dünya Kupası'nda Türk Milli Futbol Takımı dünya üçüncüsü oldu.", ok: true },
      { text: "Rosa Parks, 1943'te Amerikan Yurttaş Hakları hareketine katıldı.", ok: false },
      { text: "TDK'nin kuruluşuyla birlikte çağdaş Türkçede Atatürk'ün öncülüğünde özleştirme akımı başlamıştır.", ok: false },
      { text: "Sabah 08.15'te kalkan vapura yetişmek için biraz daha acele etmesi gerekiyordu.", ok: false },
      { text: "TÖMER'in amacı dünyanın en eski ve en çok konuşulan dillerinden biri olan Türkçeyi öğretmektir.", ok: false }
    ]
  },
  {
    text: "<p>Lale İstanbulla özdeşleşmiş, neredeyse şehirin simgesi olmuş bir çiçektir. İstanbul lale müzesi, bu çiçeğe adanmış bir müzemizdir. Sergiler dışında, burada lale türleri üzerine araştırmalar yapılmakta, tarihî ve yeni türlerin canlandırılmasına çalışılmaktadır.</p><p><b>Bu parçada kaç tane yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "Parçada 4 hata vardır: 1. İstanbulla (İstanbul'la), 2. şehirin (şehrin - ünlü düşmesi), 3. İstanbul lale müzesi (İstanbul Lale Müzesi - özel ad), 4. tarihî (Metinde şapkalı i kullanımı doğrudur ancak müze adındaki kelimeler büyük başlamalıdır).",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "6", ok: false }
    ]
  },
  {
    text: "<p>Leylak <u>I. 5 m.ye</u> dek uzayabilen bir ağaçtır. Kolay uyum sağlama <u>II. yeteneğiyle</u> her iklimde her <u>III. ortamda</u> yetişir. <u>IV. Balkanlarda</u> ve ülkemizde doğal olarak yetiştiği <u>V. yerler de</u> vardır.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>(I) Bode Yasası, daha önceleri üzerinde çalışanlar olduysa da Alman Fizikçi Bode'nin adıyla bilinir. (II) Bu yasaya göre güneş sistemindeki gezegenlerin sırası... (III) Bode'nin hesapları... neredeyse bire bir veriyor. (IV) Tek istisna, Mars ve Jüpiter arasındaki boşluk. (V) Ama oradada neredeyse küçük bir gezegen boyutlarına denk gelen küçük asteroitler kuşağı var.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede herhangi bir yazım yanlışı yoktur. I'de 'fizikçi' küçük olmalı, II'de 'Güneş Sistemi'ndeki' büyük olmalı, III'te 'bire bir' ayrı yazılmalı, V'te 'orada da' ayrı yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) İtalyan yazar Edmondo de Amicis'in yazdığı Çocuk kalbi... (II) Edmondo... her hangi bir çocuğun... (III) Sınıf, öğretmenler, dersler... hâlinde tektek anlatılmıştır. (IV) Bu eseri asıl değerli kılan... insan ve Yurt sevgisini... (V) Sözün özü bu kitap... bir çocuk klasiğidir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
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
    text: "<p>Kutuplardaki buzulların erimesi gündelik <u>I. yaşamımızı</u> <u>II. za</u> bizi ilgilendirmiyor olabilir ama ne kadar sıcak yıllar <u>III. yaşadığımızı</u> hepimiz fark edebiliyoruz. Dünyanın en sıcak yazları hep 2000 yılından sonra <u>IV. yaşandı</u>. Bu tesadüf <u>V. olabilirmi?</u></p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>Türkiye'de <u>I. TAl'nın</u>; hava platformlarının tasarımı... <u>II. 8 Haziran 1973'te</u> Türkiye'nin savunma sanayisinde dışa bağımlılığını azaltmak amacıyla <u>III. Sanayi ve Teknoloji Bakanlığı</u> bünyesinde kurulmuştur. ... döner kanatlı <u>IV. askerî</u> ve ticari hava platformlarının... satış sonrası <u>V. hizmetleri</u> de bulunmaktadır.</p><p><b>Bu parçada altı çizili numaralanmış sözlerden hangisinde bir yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "I numaralı kısaltmaya getirilen ek yanlıştır. Kısaltmanın açılımı 'TAİ' (Türk Havacılık ve Uzay Sanayii) şeklindedir. İ harfiyle bittiği için ince ünlülü ek gelmelidir: TAİ'nin.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Büyük bir kısmı renkli olan <u>II. uğrböceğinin</u> üst kanatları kırmızı ya da sarı üzerine siyah noktalıdır. <u>III. Tropiklerde</u> mavi ve yeşil renklerine de <u>IV. rastlanır</u>. <u>V. Dut</u> gibi meyvelerin üzerinde bulunurlar.</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "II numaralı 'uğrböceğinin' sözcüğünün yazımı yanlıştır. Birleşik sözcüğü oluşturan sözcüklerden her ikisi de anlamını koruyorsa ayrı yazılmalıdır. Doğru yazımı 'uğur böceği' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kurtuluş Savaşı sırasında... <u>II. İnebolu'ya</u> getirilen askerî malzemeleri <u>III. Dumlupınar'a</u> ulaştırılmıştır. <u>IV. İnebolulu'ların</u> kahramanlıkları TBMM tarafından unutulmamış...</p><p><b>Bu parçadaki altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>(I) Hafta, hemen hemen tüm takvimlerde yer alır ve insan icatı tek takvim bileşeni de haftadır. (II) Çünkü hiç bir gök gözlemine ya da mevsimin gelip gitmesine bağlı değildir. (III) Bir hafta yedi gündür ve diğer takvim ölçülerinden hiç etkilenmeden sürekli yenilenmektedir. (IV) Hafta, ilk olarak Pazarların kurulacağı günü belirlemek nedeniyle kullanılmaya başlandı. (V) Daha sonra dinlerde haftaya özel anlamlar yüklemeye başladı.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yapılmamıştır?</b></p>",
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
    text: "<p>“Etmek, edilmek, eylemek, olmak, olunmak yardımcı fiilleriyle kurulan birleşik sözcüklerde; ses düşmesi, ses değişmesi veya ses türemesi varsa bu sözcükler birleşik yazılır. Ancak ilk sözcükte herhangi bir ses olayı yoksa bu sözcükler ayrı yazılır.”</p><p><b>Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'terk etmek' birleşik fiilinde herhangi bir ses olayı (düşme veya türeme) olmadığı için kelimenin ayrı yazılması gerekir. 'terkeden' yazımı yanlıştır.",
    answers: [
      { text: "Yılın her mevsiminde coşkun akan Masat Çayı, sadece bu iki baraj arasında rahatça seyrediyor.", ok: false },
      { text: "Daimî olarak aynı şeyleri yaşamadığımız gibi, her zaman aynı şeyleri hissetmemiz de mümkün değildir.", ok: false },
      { text: "Mühendislik yapıtı olarak değerlendirildiğinde bir kuşun uçma tüylerini alt etmek çok güç.", ok: false },
      { text: "1,75 milyon yıl önce Afrika'yı terkeden tek canlılar, insanlar değildi.", ok: true },
      { text: "Peri Suyu, üzerinde kurulmuş olan ve yapımı devam eden birçok barajdan dolayı doğal yapısını yitirmiş durumda.", ok: false }
    ]
  },
  {
    text: "<p>Çevre sorunları, <u>I. insanoğlunun</u> elinin değdiği her yerde var. Evren de <u>II. uzay çöpleriyle</u> boğuşmaya başladı bile. <u>III. NASA'nın</u> açıkladığına göre, <u>IV. uzayda</u> boyutları bilyelerden büyük <u>V. beşyüz</u> binden fazla parça vardır.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinde yazımı yanlışı vardır?</b></p>",
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
    text: "<p>I. Her şey mükemmel giderken er geç bir krizle karşı karşıya kalabilirsiniz.<br/>II. Yeşilgöz, temiz mi temiz doğasının yanı sıra yakınlarında gezebileceğiniz mağaralarıda bulunan bir yer.<br/>III. Bir Osmanlı pilotu olan Feza bey, Osmanlı tayyaresi ile Türk toprakları üzerinden uçmuştu.<br/>IV. Toplar ve atar damarlar, Yunan bilim insanları döneminden beri biliniyordu.<br/><b>Yukarıda verilen cümleler ile yazım yanlışları eşleştirildiğinde hangi madde dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I'de ikileme (er geç), II'de bulunma durumu/bağlaç (mağaraları da), III'te ünvan (Feza Bey), IV'te birleşik sözcük (atardamar) hataları vardır. 'de bağlacının' yanlış yazımı maddesi dışarıda kalır.",
    answers: [
      { text: "Bulunma durumu ekinin yanlış yazımı", ok: false },
      { text: "Ünvan sıfatının yanlış yazımı", ok: false },
      { text: "Birleşik sözcüğün yanlış yazımı", ok: false },
      { text: "İkilemelerin yanlış yazımı", ok: false },
      { text: "“de” bağlacının yanlış yazımı", ok: true }
    ]
  },
  {
    text: "<p><b>Bu parçada (Türk Dil Kurumu...) numaralanmış cümlelerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
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
    text: "<p><b>Bu parçada (Amelia Earhart...) numaralanmış cümlelerin hangisinde bir yazım yanlışı vardır?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerde yer alan birleşik sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>Türk Tabipler Birliği, <u>I. çalışmaları</u> arasında önemli bir <u>II. yer tutan</u> <u>III. olağandışı</u> durumlardaki sağlık hizmetleri <u>IV. büyük bir özveriyle</u> <u>V. süregelmiştir</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>...bilinen Osmanlı Padişahı I. Abdülhamit de vardı. <u>II. Abdülhamit</u>, ünlü bilgini <u>III. tebrik etmekle</u> yetinmemiş, çalışmalarını teşvik etmek için mecidiyen nişanının <u>IV. yanısıra</u> 10 bin frank mükafat da göndermiştir.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>I. ...Roswell Kasabası'na...<br/>II. ...2016 yılı Temmuz ayında...<br/>III. ...dilbalığı avı...<br/>IV. ...film şeridi gibi...<br/>V. ...Zafer meydanında...<p><b>Numaralanmış cümlelerde aşağıdakilerin hangisine uyulmamasından kaynaklanan yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "Metindeki II. cümlede 'Temmuz' kelimesinin büyük harfle başlatılması (belirli tarih olduğu için) doğrudur. D şıkkındaki kurala uyulmuştur, hata yoktur.",
    answers: [
      { text: "Mahalle, meydan, bulvar, cadde isimleri büyük harfle başlar.", ok: false },
      { text: "Birleşme sırasında kelimeler anlamını koruyorsa ayrı yazılır.", ok: false },
      { text: "Özel ada dâhil olmayıp tamlama kuran şehir, ilçe, belde adları küçük başlar.", ok: false },
      { text: "Belirli bir tarih bildiren ay ve gün adları büyük harfle başlar.", ok: true },
      { text: "İki ünsüzle biten Batı kökenli alıntılar arasına ünlü konmaz.", ok: false }
    ]
  }
];

// ============================================================================
// YAZIM KURALLARI - TEST 6
// ============================================================================
export const TUR_YAZIM_KURALLARI_TEST_6: McQ[] = [
  {
    text: "<p>Türk Dil Kurumuna göre bazı yabancı sözcüklere yeni Türkçe karşılıklar belirlenmeli. Örneğin 'petrol' kelimesine 'yer yağı', 'doğal gaz' kelimesine ise 'yer gazı' karşılıkları bulundu. Böylelikle <u>IV. Türkçe'nin</u> yabancı diller karşısında varlığını sürdürebilmesi ve gelişebilmesi mümkün olsun.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
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
    text: "<p>(I) Son dönemde özellikle pandemi ile birlikte evlerde daha sık vakit geçirmeye başladık. ... (IV) Buda zamanla fiziksel organlarımızı etkilediği kadar psikolojimizi de olumsuz yönde etkilemektedir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde bir yazım yanlışı yapılmıştır?</b></p>",
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
    text: "<p>(I) Virüsler enfeksiyon sürecinde çoğalıyor ve bu çoğalma bir çok hatayla sonuçlanabiliyor. ... (IV) Tedavilerin ve aşıların etkisiz hâle gelmesi önlenmelidir. (V) Ama ne yazıkki küresel vaka sayısı hızla artmaya devam ediyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
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
    text: "<p>Şanlıurfa'nın Siverek <u>I. ilçesinde</u> bir grup <u>II. doğasever</u> <u>III. Fırat Nehri'nin</u> eşsiz güzellik ve manzarasında doğa yürüyüşü yaptı... Bu aktivitenin her yıl <u>V. Mayıs</u> ayında yapılmasına karar verildi.</p><p><b>Bu parçada numaralanmış bölümlerin hangisinde yazım yanlışı vardır?</b></p>",
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
    text: "<p><b>Aşağıdakilerin hangisinde parantez içindeki yazım yanlışı ile açıklama uyuşmamaktadır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'Dünya' ve 'Güneş' terim anlamında kullanıldığı için büyük harfle başlaması doğrudur. Burada bir yazım yanlışı yoktur, dolayısıyla açıklama uyuşmaz.",
    answers: [
      { text: "Birleşik sözcüğün yazımında yanlışlık yapılmıştır. (Beşik örtüsü...)", ok: false },
      { text: "Belirli bir tarih verilmesine rağmen ay adı küçük harfle başlatılmıştır. (Karar, 2023 aralık...)", ok: false },
      { text: "Bulunma durum ekinin yazımında yanlışlık bulunmaktadır. (Bir metin kaleme almaya başladığınız da...)", ok: false },
      { text: "Özel adın büyük harfle başlamamasından dolayı yazım yanlışı yapılmıştır. (Hint metinlerinde Dünya'nın Güneş çevresinde döndüğü yazılır.)", ok: true },
      { text: "Düzeltme işaretinin kullanılmaması yazım yanlışına neden olmuştur. (Sorunlar hala çözülebilmiş değil...)", ok: false }
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
    text: "<p><b>Yukarıdaki numaralanmış (Doğu Almanya...) cümlelerin hangisinde birden çok yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "V. cümlede 'Osmanlı Devleti'nin' (kesme yok), 'I. Dünya Savaşı'na' (büyük harf kuralı) ve yer adlarındaki boğaz (Çanakkale Boğazı) gibi özel adlarda birden fazla hata mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Yeşilzeytin</u>... <u>II. çokmu</u>... <u>III. düzenlenmesindede</u>... <u>IV. yanlızca</u>... <u>V. mineraller</u>... <b>Bu parçada numaralanmış sözcüklerden hangisinin yazımında yanlışlık yoktur?</b></p>",
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
    text: "<p>Çanakkale'de doğan <u>I</u>... <u>II. Gazi Lisesinde</u>... <u>III</u>... <u>IV. Varlık Dergisi'nde</u>... <u>V</u>... <b>Bu parçada altı çizili sözcüklerin hangisinde yazım yanlışı vardır?</b></p>",
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
    text: "<p>Türkiye'nin üçüncü en uzun akarsuyu <u>I. Sakarya nehri</u>... <u>II. Alpu ilçesine</u>... <u>III. Sakarıkaracaören Mahallesi'nden</u>... <u>IV. Çifteler'den</u>... <u>V. Karasu'dan</u>...</p><p><b>Bu parçada altı çizili sözcüklerin hangisinde yazım yanlışı vardır?</b></p>",
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
    text: "<p>“Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi birleşme sırasında anlam değişmesine uğramışsa sözcük bitişik yazılır.” <b>Hangisinde bu kurala uymadığı için yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'ön yargı' sözcüğü anlam kaymasına uğramadığı için ayrı yazılmalıdır. Bitişik yazılması yazım yanlışıdır.",
    answers: [
      { text: "kızılkanat, bir sürü balığıdır.", ok: false },
      { text: "gülkurusu rengindedir.", ok: false },
      { text: "önyargıların ancak kusurlu kişilerde olduğunu savunur.", ok: true },
      { text: "alinazik, patlıcan ve et ile yapılan bir ana yemektir.", ok: false },
      { text: "Samanyolu, gece gökyüzünde görülen...", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanlar gün içerisinde... (II) Peki, bu karar verme sürecinde... (III) Bu sorunun cevabını... (IV) 1956 yılında gerçekleştirilen bu deneye bir grup üniversite öğrencisi gönüllü olarak katılmıştır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede herhangi bir yazım yanlışı yoktur. I'de 'gün içerisinde' (ayrı olmalı), II'de 'fikirlerine mi' (ayrı olmalı), III'te 'Asch' (yardımcı sesle ilgili kullanım), V'te 'bir takım' (birleşik olmalı) hataları vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  }
];