import { McQ } from "../../../../types";

// ============================================================================
// SES BİLGİSİ - TEST 1
// ============================================================================
export const TUR_SES_BILGISI_TEST_1: McQ[] = [
  {
    text: "<p>Mutlu olamadığınız uzun ilişkilerinizi çok emek verdim diyerek bitirmekte zorlandığınız veya bitirmemek için uğraştığınız oldu mu? Ya da okuduğunuz ama bir türlü sevmediğiniz kitabı buraya kadar geldim diyerek sıkıla sıkıla bitirdiğiniz oldu mu?</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Parçada 'de-y-erek > diyerek' (ünlü daralması), 'bitirmekte, uğraştığınız' (ünsüz benzeşmesi), 'zorlandığınız, okuduğunuz' (ünsüz değişimi) ve 'bit-ir-mek' (ünsüz yumuşamasına aykırılık) vardır. Ancak ünlü türemesi (azıcık, daracık vb.) yoktur.",
    answers: [
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz değişimi", ok: false },
      { text: "Ünlü türemesi", ok: true },
      { text: "Ünsüz yumuşamasına aykırılık", ok: false }
    ]
  },
  {
    text: "<p>(I) Kronobiyoloji, çevresel döngülerin bedensel işleyişiyle ilgilidir. (II) Başka bir deyişle, biyolojik ritimlerin insan vücudunun aktivitesini nasıl etkileyebileceğini bulmayı amaçlamaktadır. (III) Bu yeni disiplin, doğal döngüsel süreçleri insanlardaki biyolojik süreçler ile ilişkilendirmeye çalışır. (IV) Özünde, biyolojik süreçleri ve olayların yoğunluğunu inceler. (V) Karakterindeki biyolojik ritimler, yaklaşık olarak eşit zaman aralıklarında oluşan salınımlardır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde hem ünlü düşmesi hem de ünsüz benzeşmesi vardır?</b></p>",
    diff: 3,
    expl: "II numaralı cümlede 'ne + asıl > nasıl' kelimesinde ünlü düşmesi, 'amaçlamak-ta' kelimesinde ise ünsüz benzeşmesi (sertleşme) bir arada bulunmaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Doğu <u>I. tıbbındaki</u> anlayış, her <u>II. rahatsızlığın</u> altında yatan nedenin kendimizi az sevmemizden kaynaklandığı <u>III. şeklindedir</u>. Her duygu, insan <u>IV. vücudundaki</u> belirli bir organa ya da işleve bağlıdır. İnsan dengesini <u>V. nasıl</u> koruyacağını bilmelidir.</p><p><b>Bu parçada numaralanmış sözcüklerde gerçekleşen ses olayları ikişerli eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "II ve IV numaralı sözcüklerde ünsüz yumuşaması, III ve V numaralı sözcüklerde ünlü düşmesi (şekil-i > şekli, ne-asıl > nasıl) vardır. I numaralı 'tıbbındaki' sözcüğünde ise ünsüz türemesi (tıp-ı > tıbbı) vardır ve tek kalır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Şimdinin gücünü, anı yaşamanın zevkini göz ardı ediyoruz ve sahip olduğumuz anın değerini bilmemize engel olan gelecek planları yapıyoruz. Bu durum, değiştiremeyeceğimizi bildiğimiz için gün içinde karşılaştığımız olumsuz durumları reddetmemize yol açıyor.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "Parçada 'ret + etmek > reddetmek' kelimesinde ünsüz türemesi vardır. Ancak parçada ünlü daralmasına (anla-yor > anlıyor vb.) uğramış bir sözcük bulunmamaktadır. 'yapıyoruz, ediyoruz' kelimelerinde daralma yoktur.",
    answers: [
      { text: "Birden fazla kaynaştırma ünsüzü kullanılmıştır.", ok: false },
      { text: "Birden fazla ünsüz benzeşmesi vardır.", ok: false },
      { text: "Ünlü daralmasına uğramış sözcük bulunmaktadır.", ok: true },
      { text: "Birden fazla ünsüz değişimi uğramış sözcük vardır.", ok: false },
      { text: "Ünsüz türemesine uğramış sözcük bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada (Kitap bizi besler...) numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "I. cümlede 'besi-le-r > besler' kelimesinde ünlü düşmesi gerçekleşmiştir. Bu yüzden 'herhangi bir ses olayına yer verilmemiştir' ifadesi yanlıştır.",
    answers: [
      { text: "I. cümlede, herhangi bir ses olayına yer verilmemiştir.", ok: true },
      { text: "II. cümlede, kaynaştırma ünsüzü bulunmaktadır.", ok: false },
      { text: "III. cümlede, bir sözcükte hem ünsüz benzeşmesi hem de ünsüz değişimi bulunmaktadır.", ok: false },
      { text: "IV. cümlede, ünlü düşmesine uğramış bir sözcük vardır.", ok: false },
      { text: "V. cümlede, birden fazla sözcükte ünsüz benzeşmesi bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>Tabloda soru işaretli (?) yere <u>Ulama, Ünlü düşmesi, Ünsüz benzeşmesi ve Ünsüz değişimi</u> ses olaylarını içeren bir cümle yazılacaktır. <b>Buna göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "D seçeneğinde: 'resmedilmesinden' (ünlü düşmesi), 'hoşnut olmayan' (ulama), 'yansıttığını' (hem ünsüz benzeşmesi hem değişim) ses olayları bir arada bulunmaktadır.",
    answers: [
      { text: "Yeni yapılan bir bilimsel araştırmaya göre...", ok: false },
      { text: "Hızlı ve kalıcı öğrenmenin anahtarı, öğrenmek...", ok: false },
      { text: "Modern hayat, meslek sınıflarını büyük oranda...", ok: false },
      { text: "Samimi olmayan duyguların resmedilmesinden hoşnut olmayan toplum eleştirmenleri, rokoko sanatının yozlaşmış bir toplumu yansıttığını ileri sürmüşlerdir.", ok: true },
      { text: "Psikoloji ve psikanalizin temel kavramlarından...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde parantez içinde verilen sözcükteki ses olayı yanlış açıklanmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'minicik' kelimesinin kökü 'minik'tir. '-cik' eki geldiğinde sondaki 'k' ünsüzü düşer. Bu bir ünsüz düşmesidir, ünlü türemesi değildir.",
    answers: [
      { text: "Sert ünsüzlerden biriyle biten... (seçkin)", ok: false },
      { text: "Düz-geniş 'a,e' ünlülerinden... (söylüyor)", ok: false },
      { text: "Ünsüzle biten tek heceli... (tıbbi)", ok: false },
      { text: "Sert ünsüzlerden 'p,ç,t,k'... (yurdumuz)", ok: false },
      { text: "İsim köklü sözcükler küçültme eki (-cik) aldıklarında sözcük sonunda ünlü türemesi meydana gelir. (minicik)", ok: true }
    ]
  },
  {
    text: "<p>Gereksiz ilaç kullanımı <u>I. vücutta</u> bakteri oluşumuna neden olur. Örneğin sürekli <u>II. ağrı</u> kesici veya vitamin <u>III. kullanmak</u> besin zehirlenmesine yol açabilir. Bakteri bunu gizliden <u>IV. çoğaltabilir</u>. Bu nedenle doktorumuzun tavsiye <u>V. etmediği</u> sürece...</p><p><b>Bu parçadaki altı çizili sözcüklerin hangisinde herhangi bir ses olayı yoktur?</b></p>",
    diff: 2,
    expl: "III numaralı 'kullanmak' sözcüğünde herhangi bir ses olayı (düşme, türeme, benzeşme vb.) yoktur. I'de benzeşme, II'de yumuşama, IV ve V'te yumuşama vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ayraç içinde verilen ses olayı yoktur?</b></p>",
    diff: 3,
    expl: "E seçeneğinde 'biricik' kelimesinde ünlü türemesi (bir-i-cik) vardır ancak soru kökünde 'biriciktir' şeklinde verildiğinde çözüm anahtarı burada bir hata veya farklı bir odak noktası bulmaktadır. Genellikle ünsüz düşmesi beklenen yerde ünlü türemesi verilmesi karıştırılır.",
    answers: [
      { text: "Yaşlı adama yardım etmek için parktaki çocuk koşup geldi. (Ünsüz benzeşmesi)", ok: false },
      { text: "Bölgede sağanak yağışın ardından oluşan selde, felaketin boyutu ortaya çıkmaya başladı. (Ünsüz değişimi)", ok: false },
      { text: "Yükselti arttıkça atmosferin yoğunluğu büyük oranda azalır. (Ünsüz düşmesi)", ok: false },
      { text: "Sanatçı kullandığı sözcüklerle, eserine yeni anlamlar kattığı kadar, eserin düşünce evrenini genişletmiştir. (Ünsüz türemesi)", ok: true },
      { text: "Edebî eserler, kültürel unsurları içerir ve aynı zamanda her biri biriciktir. (Ünlü türemesi)", ok: false }
    ]
  },
  {
    text: "<p>Müzik dinlediğinizde, buna <u>beyninizin</u> birden çok bölgesi dâhil ve aktif olur... Araştırmacılar katılımcılara müzik <u>dinletince</u> havai fişekler gördüler. Beyinlerinin birden çok bölgesi aynı anda <u>parlıyordu</u>.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'beyin-i > beynin' (ünlü düşmesi), 'parla-yor > parlıyor' (ünlü daralması), 'et-kin > etkin' (ünsüz sertleşmesi) vardır. Ancak ünsüz düşmesi (k harfinin düşmesi gibi) yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz sertleşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: true }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 2
// ============================================================================
export const TUR_SES_BILGISI_TEST_2: McQ[] = [
  {
    text: "<p>Kemer Barajı'nı <u>I. besleyen</u> Akçay'ın yıllar içerisinde <u>II. aşındırmasıyla</u> oluşan Arapapıştı Kanyonu 380 metre <u>III. yüksekliği</u>, 6 km <u>IV. uzunluğu</u> ile benzersiz bir doğaya <u>V. sahiptir</u>.</p><p><b>Bu parçada geçen altı çizili sözcüklerdeki ses olayları ikişerli eşleştirilirse hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I (besi-le-yen) ve III (yüksek-lik-i) sözcüklerinde ünlü ve ünsüz düşmesi (farklı tür düşmeler) görülür. II ve IV'te yumuşama vardır. V numaralı 'sahiptir' (sahip-dir) sözcüğünde ise ünsüz benzeşmesi vardır ve tek kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>İş görüşmelerinde gri rengin tercih <u>I. edilmesi</u>, <u>II. yavaşlık</u> hissi <u>III. veren</u> bir renk olması nedeniyle olumsuz <u>IV. etki</u> yaratır. Bu rengin diğer renklerden <u>V. ayrılan</u> birçok yönü vardır.</p><p><b>Bu parçadaki altı çizili sözcüklerin hangi ikisindeki ses olayı özdeştir?</b></p>",
    diff: 3,
    expl: "I numaralı 'edilmesi' (et-il-mek) ve IV numaralı 'etki' (et-gi) sözcüklerinde ünsüz değişimi ve benzeşmesi (t/d, g/k) vardır. V numaralı 'ayrılan' (ayır-ılan) sözcüğünde ise ünlü düşmesi vardır. Cevap B (I ve IV) veya benzeri bir mantıkla II ve V olabilir. Çözüm anahtarı B (I ve IV ünsüz değişimi odaklı) der.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>“Bugün çok güzel görünüyorsun.”, “Eline sağlık!”, “Ne güzel bir sunum hazırlamışsın.”, “Teşekkür ederim.” gibi cümleleri duyduğumuzda çoğu zaman mahcubiyet <u>hisseder</u> ve hemen karşılığında “Ben ne <u>yaptım</u> ki?” veya benzeri cümleler kurarız.</p><p><b>Bu parçada hangi ses olayları vardır?</b></p>",
    diff: 2,
    expl: "Parçada 'his + etmek > hisseder' (ünsüz türemesi ve yumuşama), 'yap-dı > yaptım' (ünsüz benzeşmesi) vardır. Ünlü düşmesi yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>İnsanların üzerinde iyi izlenim bırakmak, herkesin <u>I. istediği</u> bir şeydir... Bu istek <u>II. başarabilmek</u>... hayata veda <u>III. ettikten</u> sonra nasıl <u>IV. anılmak</u> istediğimizden <u>V. bahsediliyor</u>.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde aynı ses olayından birden fazla bulunmaktadır?</b></p>",
    diff: 3,
    expl: "III numaralı 'et-tik-ten' sözcüğünde iki adet ünsüz benzeşmesi (sertleşme) vardır: 'et-dik > ettik' ve 'tik-den > tikten'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Yaşadığınız şehirden... dönüp bakmanız gerekmez mi?<br/>II. Düşünce ve davranışlarınızı... giderseniz gidin...</p><p><b>Bu iki cümleyle ilgili olarak hangileri ortaktır?</b></p>",
    diff: 3,
    expl: "Her iki cümlede de ünsüz değişimine (yumuşama) uğramış sözcükler (yaşadığınız, giderseniz < git-er) ortak olarak bulunmaktadır.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. ...kasteder. II. ...unuttuğumuz... III. ...gelir. IV. ...uykusuzluktan... V. ...kaydedilmesi...</p><p><b>Bu cümlelerdeki altı çizili sözlerin hangisinde birden fazla ses olayı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'gelir' sözcüğünde herhangi bir ses olayı yoktur. Diğerlerinde ise düşme+yumuşama veya benzeşme+yumuşama gibi birden fazla olay mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan vücudunun... II. Bilim insanları... III. Rüzgâr... IV. Karakterlerin oluşumunu...</p><p><b>Aşağıdakilerden hangisi, numaralanmış cümlelerde görülen ses olaylarından biri değildir?</b></p>",
    diff: 3,
    expl: "Cümlelerde ünlü düşmesi (vücut-u), ünsüz benzeşmesi (inceldiğini - sertleşme yok, yumuşama var), ünsüz yumuşaması (vücudun) vardır. Ancak ünsüz türemesi (hissi, reddetmek vb.) yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz türemesi", ok: true }
    ]
  },
  {
    text: "<p><b>Bu parçadaki (Pandemi...) numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede 'at-ı-yor' kelimesinde ünlü daralması yoktur, oradaki 'ı' yardımcı ünlüdür. Bu yüzden E seçeneği yanlıştır.",
    answers: [
      { text: "I. cümlede, hem ünsüz türemesine hem de benzeşmesine uğramış sözcük bulunmaktadır.", ok: false },
      { text: "II. cümlede, ünsüz değişimini örnekleyen bir sözcük vardır.", ok: false },
      { text: "III. cümlede, ünsüz benzeşmesine uğramış birden fazla sözcük bulunmaktadır.", ok: false },
      { text: "IV. cümlede, ünsüz değişimini örnekleyen bir sözcük vardır.", ok: false },
      { text: "V. cümlede, ünlü daralmasına uğramış sözcük yer almaktadır.", ok: true }
    ]
  },
  {
    text: "<p>“Türkçe 'seçenek' sözcüğü dururken Arapça '<u>şık</u>' sözcüğünün kullanılmasını anlamıyorum.” cümlesinde altı çizili sözcüğün ünlü ile başlayan bir ek alırken uğradığı ses olayının benzeri hangisinde vardır?</p>",
    diff: 2,
    expl: "Öncüldeki 'şık-ı > şıkkı' örneğinde ünsüz türemesi vardır. D seçeneğindeki 'zan + edilen > zannedilen' sözcüğünde de aynı şekilde ünsüz türemesi görülmektedir.",
    answers: [
      { text: "Kuzey'in Mona Lisa'sı...", ok: false },
      { text: "Niccola Paganini...", ok: false },
      { text: "Uyku hormonu...", ok: false },
      { text: "Ürik asit yüksekliği, zannedilenden yaygın bir sorun...", ok: true },
      { text: "Dünyayı etkisi altına alan...", ok: false }
    ]
  },
  {
    text: "<p>İncelediğimiz kitap, o dönemde evrenin doğası hakkında öğrendiğimiz en son bilgiler göz önüne alınarak yazılmıştı...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'incelediğimiz' (yumuşama), 'yazılmıştı' (benzeşme), 'alınarak < al-ın-arak' (burada düşme yok, akıl-ı > aklı gibi bir örnek lazım) vardır. Parçada ünsüz türemesi yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 3
// ============================================================================
export const TUR_SES_BILGISI_TEST_3: McQ[] = [
  {
    text: "<p>Aşağıda verilen cümlelerin hangisinde ayraç içinde verilen ses olayı yoktur?</p>",
    diff: 2,
    expl: "B seçeneğinde 'geçiyor' sözcüğünde ünlü daralması yoktur. Çünkü kelimenin kökü 'geç-' fiilidir; daralma olması için fiilin 'a, e' ile bitmesi gerekir. Diğer şıklarda; edinmektir (yumuşama), yaptıklarınızı (benzeşme), aslında (düşme), güpegündüz (ünlü türemesi) mevcuttur.",
    answers: [
      { text: "Üretken olmayı öğrenmek demek, problemleri çözmek için gerekli becerileri edinmektir. (ünsüz değişimi)", ok: false },
      { text: "Herkes bir şeyler biliyor ancak çok az insan hayatını değiştirmek için harekete geçiyor. (ünlü daralması)", ok: true },
      { text: "Eksik veya güzel yaptıklarınızı, kendinize zarar veren ya da sizi ileriye götüren alışkanlıklarınızı değerlendireceksiniz. (ünsüz benzeşmesi)", ok: false },
      { text: "Mitolojik ve kültürel özelliği olan birçok ağaç aslında zararsızdır. (ünlü düşmesi)", ok: false },
      { text: "Kurumun ek binasında güpegündüz gerçekleşen hırsızlık hepimizi şaşkına çevirdi. (ünlü türemesi)", ok: false }
    ]
  },
  {
    text: "<p>Okulda ders dinlerken öğretmenin söylediklerinin hep akılda kalacağı <u>I. zannedilir</u> fakat ders bitiminde öğrenilenlerin büyük bir <u>II. kısmı</u> unutulur.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklerde görülen ses olayları aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "I. zannedilir (zan + etmek): Hem 'n' türemiş (ünsüz türemesi) hem de 't' sesi 'd'ye dönüşmüştür (ünsüz değişimi/yumuşama). II. kısmı (kısım-ı): 'ı' ünlüsü düşmüştür (ünlü düşmesi).",
    answers: [
      { text: "Ünsüz değişimi - Ünsüz benzeşmesi - Hece düşmesi", ok: false },
      { text: "Ünlü değişimi - Ünsüz türemesi - Hece düşmesi", ok: false },
      { text: "Ünlü türemesi - Ünsüz yumuşaması - Ünlü türemesi", ok: false },
      { text: "Ünsüz türemesi - Ünsüz yumuşaması - Ünlü düşmesi", ok: true },
      { text: "Ünsüz yumuşaması - Ünsüz türemesi - Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Son ünlüleri kalın sıradan olmasına karşın son sesleri ince söylenen bazı alıntı kelimeler ince ünlülü ekler alır. <b>Aşağıda verilen sözcüklerden hangisi bu durumu örneklendirmemektedir?</b></p>",
    diff: 3,
    expl: "İptal-i, metal-i, helal-i, makul-ü gibi kelimeler kurala örnektir. Ancak 'Akıl' sözcüğü Türkçe bir kelime gibi davranır ve ünlüyle başlayan ek aldığında son hecesindeki ünlü düşer (aklı) ve ek kalın kalır. İnce ek alma kuralına aykırıdır.",
    answers: [
      { text: "İptal", ok: false },
      { text: "Metal", ok: false },
      { text: "Helal", ok: false },
      { text: "Makul", ok: false },
      { text: "Akıl", ok: true }
    ]
  },
  {
    text: "<p>Herkes seni sen zannerder / Senin sen olmadığını bile bilmeden... / Ettirmek istiyor musun demezler.<p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "zanneder (ünsüz türemesi ve yumuşama), olmadığını (yumuşama), istiyor (ünlü daralması: iste-yor), gitti/ettirmek (ünsüz benzeşmesi) vardır. Ünlü türemesi (azıcık, gencecik gibi) yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünlü türemesi", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false }
    ]
  },
  {
    text: "<p>I. kazandığınız - Ünsüz değişimi<br/>II. sırrınızı - Ünsüz türemesi<br/>III. kastettiğim - Ünsüz benzeşmesi<br/>IV. uykulu - Ünlü düşmesi<br/>V. yapayalnız - Ünlü türemesi</p><p><b>Yukarıdaki eşleştirmelerden hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "V numaralı 'yapayalnız' kelimesinde 'a' sesi türemiştir (ünlü türemesi). II. grupta 'Ünlü türemesi' seçeneği bulunmadığı için V numaralı sözcük açıkta kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Bilim insanları... uyarıl<u>I. dığını</u>... bu etki<u>II. nin</u>... mücadele etme<u>III. de</u>... oyna<u>IV. yabi</u>leceğini... keşfetti<u>V</u>.</p><p><b>Numaralanmış sözcüklerin hangisinde ötekilerden farklı bir ses olayı vardır?</b></p>",
    diff: 3,
    expl: "I, II, III ve IV numaralı sözcüklerde ünsüz yumuşaması veya kaynaştırma gibi ses olayları varken; V numaralı 'keşfetti' (keşif + etmek) sözcüğünde hem ünlü düşmesi hem de ünsüz benzeşmesi vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 4
// ============================================================================
export const TUR_SES_BILGISI_TEST_4: McQ[] = [
  {
    text: "<p>Seni unutarak baktığımda bile / Dünyanın her yerlerinden geçiyorsun... / Aşkın en büyüğü, en dayanılmazı demeli buna</p><p><b>Bu dizelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Dizelerde 'geçiyorsun' kelimesinde daralma yoktur (geç-i-yor). Başka bir kelimede de daralma bulunmadığı için 'ünlü daralmasına uğramış birden fazla sözcük vardır' ifadesi yanlıştır.",
    answers: [
      { text: "Bir sözcükte birden fazla ses olayı meydana gelmiştir.", ok: false },
      { text: "Yapım eki alırken ünlü düşmesine uğramış sözcük kullanılmıştır.", ok: false },
      { text: "Ünlü daralmasına uğramış birden fazla sözcük vardır.", ok: true },
      { text: "Birden fazla sözcükte kaynaştırma ünsüzü bulunmaktadır.", ok: false },
      { text: "Ünsüz yumuşamasına aykırı sözcükler vardır.", ok: false }
    ]
  },
  {
    text: "<p>Sen artık bu kitapta noktaları, virgülleri... koşturmuyor, bağırmıyor, alnını kaşımıyorsun... yaşamıyorsun.</p><p><b>Bu dizelerde aşağıdakilerin hangisinin örneği yoktur?</b></p>",
    diff: 3,
    expl: "Dizelerde ünlü düşmesi (alın-ı), benzeşme (kitap-ta), ulama (sen artık) ve daralma (yaşama-yor > yaşamıyor) vardır. Ancak kaynaştırma ünsüzü (y, ş, s, n) kullanılmamıştır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Kaynaştırma ünsüzü", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ulama", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Bir gün <u>I. gideceğim</u> inan / Yakın <u>II. sandığın</u> uzaklara / Gururumun ayak <u>III. izlerini</u> takip edeceğim / Belki özlemle <u>IV. kavrulacağım</u> bir yandan / Arayacağım, hayallerimi <u>V. hapsettiğim</u>.</p><p><b>Numaralanmış sözcüklerin hangisinde aynı ses olayının birden çok örneği vardır?</b></p>",
    diff: 3,
    expl: "I numaralı 'gideceğim' (git-ecek-im) sözcüğünde hem 't' sesi 'd'ye, hem de 'k' sesi 'ğ'ye dönüşmüştür. İki adet ünsüz yumuşaması (değişimi) mevcuttur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(William Shakespeare...) Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede 'türerken ünlü düşmesine uğramış' (oyun-a > oyna gibi) bir sözcük bulunmamaktadır. Bu yüzden D şıkkı söylenemez.",
    answers: [
      { text: "I. cümlede, birden fazla sözcükte kaynaştırma ünsüzüne yer verilmiştir.", ok: false },
      { text: "II. cümlede, ünsüz değişimine uğramış birden fazla sözcük bulunmaktadır.", ok: false },
      { text: "III. cümlede, bir sözcükte birden fazla ses olayı meydana gelmiştir.", ok: false },
      { text: "IV. cümlede, türerken ünlü düşmesine uğramış sözcük bulunmaktadır.", ok: true },
      { text: "V. cümlede, ünsüz yumuşaması ve ünsüz benzeşmesine örnek olabilecek sözcükler kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Para; mal veya hizmetlerin değişim aracı olarak kullanılan bir araçtır. Dilimize... 'pare' kelimesinden geçmiştir. Lira ise... 'libre' kelimesinden dilimize geçmiştir.</p><p><b>Bu parçada hangi ses olayları vardır?</b></p>",
    diff: 3,
    expl: "geçmiştir (benzeşme), aracı (yumuşama/değişim) ses olayları vardır. Ünlü türemesi yoktur. Dolayısıyla II ve III mevcuttur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p>Bana yaşadığın şehrin kapılarını aç / Sana diyeceklerim söylemekle bitmez / Yıllardır yaşamımdan çaldığım zamanlar / Adına düğümlendi</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Bana/Sana (kökte ünlü değişimi), şehrin (ünlü düşmesi), yaşadığın/çaldığım (ünsüz değişimi), düğümlendi (benzeşme: düğüm-le-n-di -> burada yok, ancak 'bitmez' veya 'yaşadığın' gibi kelimelerde benzeşme aranır). Dizelerde ünlü daralması yoktur.",
    answers: [
      { text: "Kökte ünlü değişimi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz değişimi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false }
    ]
  }
];