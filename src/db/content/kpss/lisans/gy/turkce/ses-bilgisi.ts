import { McQ } from "../../../../types";

// ============================================================================
// SES BİLGİSİ - TEST 1
// ============================================================================
export const TUR_SES_BILGISI_TEST_1: McQ[] = [
  {
    text: "<p>Mutlu olamadığınız uzun ilişkilerinizi çok emek verdim diyerek bitirmekte zorlandığınız veya bitirmemek için uğraştığınız oldu mu? Ya da okuduğunuz ama bir türlü sevmediğiniz kitabı buraya kadar geldim diyerek sıkıla sıkıla bitirdiğiniz oldu mu?</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p>Doğu <u>I. tıbbındaki</u> anlayış, her <u>II. rahatsızlığın</u> altında yatan nedenin kendimizi az sevmemizden kaynaklandığı <u>III. şeklindedir</u>. Her duygu, insan <u>IV. vücudundaki</u> belirli bir organa ya da işleve bağlıdır. İnsan dengesini <u>V. nasıl</u> koruyacağını bilmelidir.</p><p><b>Bu parçada numaralanmış sözcüklerde gerçekleşen ses olayları ikişerli eşleştirildiğinde hangisi <u>dışarıda</u> kalır?</b></p>",
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
    text: "<p>Şimdinin gücünü, anı yaşamanın zevkini göz ardı ediyoruz ve sahip olduğumuz anın değerini bilmemize engel olan gelecek planları yapıyoruz. Bu durum, değiştiremeyeceğimizi bildiğimiz için gün içinde karşılaştığımız olumsuz durumları reddetmemize yol açıyor.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
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
    text: "<p>(I) Bir kitap bizi besler, sorgular ve bize yeni bakış açıları sunar. (II) Tüm duyularımızı ona açarsak okumak bizi zenginleştirir. (III) Bir kitabın sayfalarında hızlıca dolaşmak aynı şey değildir çünkü bu şekilde yazarın bize kitabının sayfaları aracılığıyla anlatmaya çalıştığı şeylerle asla bağlantı kuramayız. (IV) Karakterlerin zihinlerine girebilir ve başlarına gelen her şeyi yaşayabilir, konuşmaları kendi zihnimizde yeniden canlandırabiliriz. (V) Yazarların bize aktarmaya çalıştığı farklı teoriler veya kavramlar hakkında da daha fazla bilgi edinebiliriz.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
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
    text: "<p>Tabloda soru işaretli (?) yere, belirtilen ses olaylarını (<u>Ulama, Ünlü düşmesi, Ünsüz benzeşmesi ve Ünsüz değişimi</u>) içeren bir cümle yazılacaktır.</p><p><b>Buna göre soru işaretli yere, aşağıdaki cümlelerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "D seçeneğinde: 'resmedilmesinden' (ünlü düşmesi), 'hoşnut olmayan' (ulama), 'yansıttığını' (hem ünsüz benzeşmesi hem değişim) ses olayları bir arada bulunmaktadır.",
    answers: [
      { text: "Yeni yapılan bir bilimsel araştırmaya göre, çocuklar elleriyle yazı yazdıklarında daha iyi öğreniyor ve hatırlıyorlar.", ok: false },
      { text: "Hızlı ve kalıcı öğrenmenin anahtarı, öğrenmek ve çalışmak için daha fazla zamana ihtiyacımızın olması değil, öğrenmek için harcanan zamanın etkinliğini en üst düzeye çıkarmaktır.", ok: false },
      { text: "Modern hayat, meslek sınıflarını büyük oranda hizmet sınıfına dönüştürünce meslek hayatında başarı daha çok anlama, anlatma ve ikna noktalarında şekillenir hâle geldi.", ok: false },
      { text: "Samimi olmayan duyguların resmedilmesinden hoşnut olmayan toplum eleştirmenleri, rokoko sanatının yozlaşmış bir toplumu yansıttığını ileri sürmüşlerdir.", ok: true },
      { text: "Psikoloji ve psikanalizin temel kavramlarından olan bilinçaltı, bilinç alanının dışına itilmiş ve devamlı olarak yeniden ortaya çıkma ihtimali olan bazı ruhsal etkilerden oluşur.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde parantez içinde verilen sözcükteki ses olayı yanlış açıklanmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'minicik' kelimesinin kökü 'minik'tir. '-cik' eki geldiğinde sondaki 'k' ünsüzü düşer. Bu bir ünsüz düşmesidir, ünlü türemesi değildir.",
    answers: [
      { text: "Sert ünsüzlerden biriyle biten sözcükler “c, d, g” ile başlayan ek aldıklarında “c, d, g” ünsüzleri “ç, t, k” sert ünsüzlerine dönüşür. (seçkin)", ok: false },
      { text: "Düz-geniş “a, e” ünlülerinden biriyle biten sözcükler “y” ile başlayan ek aldıklarında “a, e” ünlüleri, “ı, i, u, ü” dar ünlülerine dönüşür. (söylüyor)", ok: false },
      { text: "Ünsüzle biten tek heceli sözcükler, ünlüyle başlayan ek aldıklarında sözcüğün sonundaki ünsüz ikizleşir. (tıbbı)", ok: false },
      { text: "Sert ünsüzlerden “p, ç, t, k” biriyle biten sözcükler, ünlüyle başlayan bir ek aldıklarında “p, ç, t, k” ünsüzleri “b, c, d, g” yumuşak ünsüzlerine dönüşür. (yurdumuz)", ok: false },
      { text: "İsim köklü sözcükler küçültme eki (-cik) aldıklarında sözcük sonunda ünlü türemesi meydana gelir. (minicik)", ok: true }
    ]
  },
  {
    text: "<p>Gereksiz ilaç kullanımı <u>I. vücutta</u> bakteri oluşumuna neden olur. <u>II. Örneğin</u> sürekli ağrı kesici veya vitamin <u>III. kullanmak</u> besin zehirlenmesine yol açabilir. Bakteri bunu gizliden <u>IV. çoğaltabilir</u>. Bu nedenle doktorumuzun tavsiye <u>V. etmediği</u> sürece gereksiz ilaç kullanımı olmamalıdır.</p><p><b>Bu parçadaki altı çizili sözcüklerin hangisinde herhangi bir ses olayı <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "III numaralı 'kullanmak' sözcüğünde herhangi bir ses olayı yoktur. I'de (vücut-ta) ünsüz benzeşmesi; II'de (örnek-in), IV'te (çok-altabilir) ve V'te (etmedik-i) ünsüz yumuşaması vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ayraç içinde verilen ses olayı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "D'deki cümlede ünsüz türemesine (hakkı, reddetmek vb.) uğramış bir sözcük yoktur. Diğerlerinde: A'da park-da > parkta (ünsüz benzeşmesi), B'de art-ından > ardından (ünsüz değişimi), C'de yüksek-l-i > yükselti (ünsüz düşmesi), E'de bir-i-cik > biricik (ünlü türemesi) vardır.",
    answers: [
      { text: "Yaşlı adama yardım etmek için parktaki çocuk koşup geldi. (Ünsüz benzeşmesi)", ok: false },
      { text: "Bölgede sağanak yağışın ardından oluşan selde, felaketin boyutu ortaya çıkmaya başladı. (Ünsüz değişimi)", ok: false },
      { text: "Yükselti arttıkça atmosferin yoğunluğu büyük oranda azalır. (Ünsüz düşmesi)", ok: false },
      { text: "Sanatçı kullandığı sözcüklerle, eserine yeni anlamlar kattığı kadar, eserin düşünce evrenini genişletmiştir. (Ünsüz türemesi)", ok: true },
      { text: "Edebî eserler, kültürel unsurları içerir ve aynı zamanda her biri biriciktir. (Ünlü türemesi)", ok: false }
    ]
  },
  {
    text: "<p>Müzik dinlediğinizde, buna beyninizin birden çok bölgesi dâhil ve aktif olur. Ama aslında bir enstrüman çaldığınızda bu etkinlik bütün bir beyin egzersizine dönüşür. Araştırmacılar katılımcılara müzik dinletince havai fişekler gördüler. Beyinlerinin birden çok bölgesi aynı anda parlıyordu.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'dinlediğinizde' (ünsüz yumuşaması), 'et-kin > etkin' (ünsüz sertleşmesi), 'beyin-i > beynin' (ünlü düşmesi), 'parla-yor > parlıyor' (ünlü daralması) vardır. Ancak ünsüz düşmesi (k harfinin düşmesi gibi) yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz sertleşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: true }
    ]
  },
  {
    text: "<p>I. Girmez pencerelerden beklediğin o aydınlık / Onun unutamadığın hayali<br/>II. Şimdi tarlalarda güneş vardır / Karlar donmuştur otların uçlarında<br/>III. Aykırım, fizikötem, doğaüstüm, yanlışlığım / Bir gün elbette sana hükmedeceğim<br/>IV. Varsın eskisin sesim kaybetsin ahengini / Geceler kıskanmasın aydınlığın süsünü<br/>V. Bekle de saatlerce yağmurun dinmesini / Bir küçük damla uyku girmesin gözlerine</p><p><b>Yukarıda numaralanmış dizelerin hangisinin hem birinci hem ikinci dizesinde ünsüz değişimi ve ünlü düşmesine örnek bir kullanım vardır?</b></p>",
    diff: 3,
    expl: "III. öncüldeki ikinci dizede 'hüküm + et-ecek-im > hükmedeceğim' sözcüğünde, birinci dizede 'yanlış-lık-ım > yanlışlığım' sözcüğünde hem ünlü düşmesi hem ünsüz değişimi görülmektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kuşlara <u>I. takılıp</u> <u>II. gidiyor</u> <u>III. aklım</u> / Yine de biri çıksa <u>IV. alışkanlıkla</u> / İyiyim <u>V. diyeceğim</u></p><p><b>Bu dizelerde numaralanmış sözcüklerle ilgili olarak aşağıda verilen açıklamalardan hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'alışkanlıkla' sözcüğünde 'alış-' fiili 'ş' sert ünsüzüyle bittiği, '-kan' ekinin ilk ünsüzü de 'k' sert ünsüzü olduğu için ünsüz benzeşmesi; 'ile'nin bitişik yazılmasıyla da ünlü düşmesi vardır. Ünsüz düşmesi yoktur.",
    answers: [
      { text: "I. sözcükte, ünsüz değişimine aykırılık söz konusudur.", ok: false },
      { text: "II. sözcükte, ünsüz yumuşaması gerçekleşmiştir.", ok: false },
      { text: "III. sözcükte, ünlü düşmesi vardır.", ok: false },
      { text: "IV. sözcükte, ünsüz düşmesi görülmektedir.", ok: true },
      { text: "V. sözcükte, hem ünlü daralması hem de ünsüz değişimi gerçekleşmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Çocuklar ve bebekler yetişkinlerden daha fazla tat tomurcuklarına sahiptir. (II) Çocukların yanaklarında ve dudaklarında bile bazı tat tomurcukları vardır. (III) Bu durum, çocukların yiyecek konusunda seçici olduklarını açıklayabilir. (IV) Dil çok esnektir ve bu esnekliği oluşturan sekiz tane iç içe kaslara sahiptir. (V) Dil kasları, vücutta tamamen iskeletten bağımsız olan tek kaslardır.</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede 'vücut-ta' ve 'iskelet-ten' sözcüklerinde ünsüz benzeşmesi vardır. I. cümlede birden fazla sözcükte (yetişkinlerden, sahiptir) benzeşme vardır; II. cümlede her sözcükte birer kaynaştırma ünsüzü vardır; III. cümlede 'yiyecek' sözcüğünde ünlü daralması vardır; IV. cümlede yumuşama ve benzeşme farklı sözcüklerdedir.",
    answers: [
      { text: "I. cümlede, ünsüz benzeşmesi sadece bir sözcükte vardır.", ok: false },
      { text: "II. cümlede, bir sözcükte birden fazla kaynaştırma ünsüzüne yer verilmiştir.", ok: false },
      { text: "III. cümlede, herhangi bir ses olayı bulunmamaktadır.", ok: false },
      { text: "IV. cümlede, bir sözcükte hem ünsüz değişimi hem de ünsüz benzeşmesi bulunmaktadır.", ok: false },
      { text: "V. cümlede, birden fazla sözcükte ünsüz benzeşmesine yer verilmiştir.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcüklerde aynı ses olayı vardır?</b></p>",
    diff: 3,
    expl: "E'deki 'hakkında' ve 'reddedildi' sözcüklerinin her ikisinde de ünsüz türemesi görülmektedir. A'da ünlü türemesi/ünsüz değişimi ve ünlü düşmesi; B'de ünsüz yumuşaması ve ünsüz benzeşmesi; C'de ünlü daralması ve ünsüz benzeşmesi; D'de ünlü düşmesi ve ünsüz yumuşaması vardır.",
    answers: [
      { text: "<u>Gencecik</u> insanları <u>nasıl</u> yetiştirdiğini hepimiz çok iyi biliyoruz.", ok: false },
      { text: "Akıllı bir yaklaşım, <u>belirsizliğin</u> kaçınılmazlığını kabul etmek ve onunla başa çıkmayı <u>öğrenmektir</u>.", ok: false },
      { text: "Düşüncelerini <u>gizliyor</u> ve <u>gerçekten</u> inanıyormuş gibi davranıyordu.", ok: false },
      { text: "Uzmanlar, <u>çevre</u> sorunlarına karşı bizleri sürekli ikaz <u>ediyor</u>.", ok: false },
      { text: "Bu kanun <u>hakkında</u> verilen karar kurul tarafından <u>reddedildi</u>.", ok: true }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 2
// ============================================================================
export const TUR_SES_BILGISI_TEST_2: McQ[] = [
  {
    text: "<p>Kemer Barajı'nı <u>I. besleyen</u> Akçay'ın yıllar içerisinde aşındırmasıyla oluşan Arapapıştı Kanyonu 380 metre <u>II. yüksekliği</u>, 6 km <u>III. uzunluğu</u> ile <u>IV. benzersiz</u> bir doğaya <u>V. sahiptir</u>.</p><p><b>Bu parçada geçen altı çizili sözcüklerdeki ses olayları ikişerli eşleştirilirse hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "V numaralı 'sahip-tir' sözcüğünde ünsüz benzeşmesi görülmektedir ve tek kalır. I ve IV numaralı sözcüklerde ünlü düşmesi, II ve III numaralı sözcüklerde ise ünsüz yumuşaması gerçekleşmiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>İş görüşmelerinde gri rengin tercih <u>I. edilmesi</u>, yavaşlık <u>II. hissi</u> veren bir renk olması nedeniyle olumsuz <u>III. etki</u> yaratır. Bu <u>IV. rengin</u> diğer renklerden <u>V. ayrılan</u> birçok yönü vardır.</p><p><b>Bu parçadaki altı çizili sözcüklerin hangi ikisindeki ses olayı özdeştir?</b></p>",
    diff: 3,
    expl: "I numaralı 'et-ilmesi > edilmesi' ve IV numaralı 'renk-in > rengin' sözcüklerinde ünsüz yumuşaması/ünsüz değişimi görülmektedir. II'de (his-i > hissi) ünsüz türemesi, III'te (et-gi > etki) ünsüz benzeşmesi, V'te (ayır-ıl-an > ayrılan) ünlü düşmesi vardır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>“Bugün çok güzel görünüyorsun.”, “Eline sağlık!”, “Ne güzel bir sunum hazırlamışsın.”, “Teşekkür ederim.” gibi cümleleri duyduğumuzda çoğu zaman mahcubiyet hisseder ve hemen karşılığında “Ben ne yaptım ki?” veya benzeri cümleler kurarız.</p><p>Bu parçada;<br/>I. ünsüz türemesi,<br/>II. ünsüz düşmesi,<br/>III. ünsüz benzeşmesi</p><p><b>ses olaylarından hangileri vardır?</b></p>",
    diff: 2,
    expl: "Parçada 'his + etmek > hisseder' (ünsüz türemesi ve yumuşama), 'yap-dı-m > yaptım' (ünsüz benzeşmesi) vardır. Ünsüz düşmesine uğramış sözcük yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>İnsanların üzerinde iyi izlenim bırakmak, herkesin <u>I. istediği</u> bir şeydir elbette. Bu isteği başarabilmek ve <u>II. öldükten</u> sonra güzel anılmak için ona göre yaşamak gerekir. Bu eserde de hayata veda <u>III. ettikten</u> sonra <u>IV. nasıl</u> anılmak istediğimizden <u>V. bahsediliyor</u>.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde aynı ses olayından <u>birden fazla</u> bulunmaktadır?</b></p>",
    diff: 3,
    expl: "III numaralı 'et-tik-ten' sözcüğünde iki yerde ünsüz benzeşmesi vardır. I'de ünsüz yumuşaması, II'de tek benzeşme, IV'te ünlü düşmesi, V'te hem ünlü düşmesi hem ünsüz yumuşaması vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Yaşadığınız şehirden, işinizden, çevrenizdekilerden mutsuzsanız ve değişiklik arıyorsanız önce kendinize bir dönüp bakmanız gerekmez mi?<br/>II. Düşünce ve davranışlarınızı değiştirmezseniz nereye giderseniz gidin, yine aynı buhranları yaşarsınız.</p><p>Bu iki cümleyle ilgili olarak,<br/>I. Ünsüz değişimine uğramış sözcük kullanılmıştır.<br/>II. Türerken ünlü düşmesine uğramış sözcük vardır.<br/>III. Ünsüz türemesine uğramış sözcük bulunmaktadır.</p><p><b>yargılarından hangileri ortaktır?</b></p>",
    diff: 3,
    expl: "Her iki cümlede de ünsüz değişimine (yumuşama) uğramış sözcükler (yaşadığınız, giderseniz < git-erseniz) ortak olarak bulunmaktadır.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Kaliteli yaşam derken kimilerimiz sahip olduğu varlıkları <u>kasteder</u>.<br/>II. Yaşamayı <u>unuttuğumuz</u> şu günlerde biraz daha nefes almaya ihtiyacımız var.<br/>III. Vitamin <u>sözcüğü</u> Latince yaşam anlamına gelen “vita” sözcüğünden gelir.<br/>IV. <u>Uykusuzluktan</u> yakınan kişiler değişik belirti ve bulgularla doktora başvurur.<br/>V. Kişisel verilerin <u>kaydedilmesi</u> ve özel hayatın gizliliğinin ihlali ilgili kanun maddelerince düzenlenmiştir.</p><p><b>Bu cümlelerdeki altı çizili sözlerin hangisinde <u>birden fazla</u> ses olayı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'sözcük-ü > sözcüğü' sözcüğünde yalnızca ünsüz yumuşaması vardır. I'de (kasıt + et-er) ünlü düşmesi ve yumuşama, II'de (unut-duk-umuz) benzeşme ve değişim, IV'te (uyu-ku-suzluk-dan) ünlü düşmesi ve benzeşme, V'te (kayıt + et-ilmesi) ünlü düşmesi ve yumuşama vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan vücudunun çok karmaşık bir yapıya sahip olduğu düşünülüyor.<br/>II. Bilim insanları tüm buzulların inceldiğini ve kütle kaybettiğini ifade ediyor.<br/>III. Rüzgâr, yükselen kapasiteyle yenilenebilir enerjide payını artırıyor.<br/>IV. Bir canlıda karakterlerin oluşumunu genetik yapı ve çevre koşulları etkiler.</p><p><b>Aşağıdakilerden hangisi, numaralanmış cümlelerde görülen ses olaylarından biri <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "Öncüllerde ünsüz türemesine uğramış bir sözcük yoktur. I'de 'vücut-un > vücudunun' (ünsüz değişimi), II'de 'kayıp + et-tik-ini > kaybettiğini' (ünlü düşmesi, benzeşme ve yumuşama), III'te 'yüksek-l > yüksel' (ünsüz düşmesi), IV'te 'çevir-e > çevre' (ünlü düşmesi) vardır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz türemesi", ok: true }
    ]
  },
  {
    text: "<p>(I) Geniş çaplı aşı çalışmalarına rağmen koronavirüs pandemisi hâlen etkisini hissettirmeye devam ediyor. (II) Ortaya çıkan yeni mutasyonlar nedeniyle korkan birçok kişi hâlen yakınlarıyla kapalı mekânlarda değil açık alanda vakit geçirmeyi tercih ediyor. (III) Pandemi süresinin değiştirdikleri arasında sosyal etkileri kurma şeklimiz dışında çalışma hayatımız da var. (IV) Pandemi sürecinde ofisine gidemeyen birçok kişi, aylardır sadece evde çalışıyor. (V) Evde çalışmaktan sıkılan kişiler ise kendini kalabalıktan uzak, açık alanlara atıyor.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede yalnızca ünsüz benzeşmesine uğramış sözcükler (kalabalık-tan, çalışmak-tan) vardır; ünlü daralmasına uğramış sözcük yoktur. Bu yüzden E seçeneği yanlıştır.",
    answers: [
      { text: "I. cümlede, hem ünsüz türemesine hem de benzeşmesine uğramış sözcük bulunmaktadır.", ok: false },
      { text: "II. cümlede, ünsüz değişimini örnekleyen bir sözcük vardır.", ok: false },
      { text: "III. cümlede, ünsüz benzeşmesine uğramış birden fazla sözcük bulunmaktadır.", ok: false },
      { text: "IV. cümlede, ünsüz değişimini örnekleyen sözcük vardır.", ok: false },
      { text: "V. cümlede, ünlü daralmasına uğramış sözcük yer almaktadır.", ok: true }
    ]
  },
  {
    text: "<p>“Türkçe 'seçenek' sözcüğü dururken Arapça '<u>şık</u>' sözcüğünün kullanılmasını anlamıyorum.” <b>cümlesinde altı çizili sözcüğün ünlü ile başlayan bir ek alırken uğradığı ses olayının benzeri aşağıdakilerin hangisinde vardır?</b></p>",
    diff: 2,
    expl: "Öncüldeki 'şık-ı > şıkkı' örneğinde ünsüz türemesi vardır. D seçeneğindeki 'zan + edilen > zannedilen' sözcüğünde de aynı şekilde ünsüz türemesi görülmektedir.",
    answers: [
      { text: "Çoğu insan tarafından “Kuzey'in Mona Lisa'sı” olarak düşünülen “İnce Küpeli Kız”, 17. yüzyılda resmedilmiştir.", ok: false },
      { text: "Tüm zamanların en büyük kemancılarından biri olarak kabul edilen Niccola Paganini, olağanüstü sanatıyla gündem olmuştur.", ok: false },
      { text: "Uyku hormonu olarak da bilinen melatonin, hayat ritmimizi düzenleyen en önemli moleküllerden biridir.", ok: false },
      { text: "Ürik asit yüksekliği, zannedilenden yaygın bir sorun olmakla birlikte eklemlerde romatizmaya, böbreklerde taşa neden olmaktadır.", ok: true },
      { text: "Dünyayı etkisi altına alan pandemi süreci devam ederken iş ve eğlence için kapalı mekânları değil açık alanları tercih etmeye başladık.", ok: false }
    ]
  },
  {
    text: "<p>İncelediğimiz kitap, o dönemde evrenin doğası hakkında öğrendiğimiz en son bilgiler göz önüne alınarak yazılmıştı; öte yandan o günden bugüne hem atom altı dünyanın hem de büyük ölçekte evrenin gözlem teknolojilerinde olağanüstü ilerlemeler yaşandı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada ünlü daralmasına uğramış sözcük yoktur. 'İncelediğimiz' sözcüğünde ünsüz yumuşaması, 'hakkında' sözcüğünde ünsüz türemesi, 'yazılmış-i-dı' ve 'ileri-lemeler > ilerlemeler' sözcüklerinde ünlü düşmesi, 'ölçek-te' sözcüğünde ünsüz benzeşmesi görülmektedir.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false }
    ]
  },
  {
    text: "<p><u>I. Doğadaki</u> her şeyin eskimesi, yıpranması ve yaşlanması bir <u>II. sonuçtur</u>. Cansız varlıklar için bile geçerli olan bu süreç, canlı varlıklarda yaşamları devam <u>III. ettiği</u> <u>IV. müddetçe</u> organizmaların kendi kendilerini onarıp yenilemesi ile sürdürülmeye çalışılır. Botoks ile kas güçlerinin düzenlenmesi tek başına yeterli <u>V. olmuyor</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "V. sözcükte 'ol-ma-yor > olmuyor' yalnızca ünlü daralması görülmektedir. Sözcükteki a'dan u'ya dönen ses, olumsuzluk ekinin ünlüsüdür; yardımcı ünlü değildir. Bu yüzden E seçeneği söylenemez.",
    answers: [
      { text: "I. sözcük, büyük ünlü uyumuna aykırı bir ek almıştır.", ok: false },
      { text: "II. sözcükte, ünsüz benzeşmesine uğramıştır.", ok: false },
      { text: "III. sözcükte, birden fazla ses olayı görülmektedir.", ok: false },
      { text: "IV. sözcükte, yalnızca ünsüz sertleşmesi görülmektedir.", ok: false },
      { text: "V. sözcükte, yardımcı ünlü vardır.", ok: true }
    ]
  },
  {
    text: "<p>Hava kirliliği küresel olarak ölümlere ve hastalıklara yol açan kaçınılabilir temel nedenlerden biri. Dünyada iç ortam hava kirliliği nedeniyle bir yılda, çoğunluğu gelişmekte olan ülkelerde olmak üzere yaklaşık 43 milyon kişinin yaşamını yitireceği tahmin ediliyor. Hava kirliliğine düşük düzeylerde maruz kalsa dahi hastalıklarda hatta ölümlerde artışa yol açarak sağlıkla ilişkili riskleri yükseltiyor.</p><p>Bu parçayla ilgili olarak;<br/>I. Birden fazla sözcükte ünsüz yumuşamasına aykırılık söz konusudur.<br/>II. Ünsüz düşmesi birden fazla sözcükte gerçekleşmiştir.<br/>III. Bir sözcükte aynı ses olayından birden fazla bulunmaktadır.</p><p><b>yargılarından hangileri doğrudur?</b></p>",
    diff: 3,
    expl: "'Açarak, açan, kaçınılabilir' sözcüklerinde 'ç' sesi, 'yitireceği' sözcüğünde 't' sesi yumuşamadığı için ünsüz yumuşamasına aykırılık vardır (I). 'Çok-un-luk-u > çoğunluğu' sözcüğünde birden fazla ünsüz yumuşaması görülmektedir (III). Ünsüz düşmesi birden fazla sözcükte yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 3
// ============================================================================
export const TUR_SES_BILGISI_TEST_3: McQ[] = [
  {
    text: "<p><b>Aşağıda verilen cümlelerin hangisinde ayraç içinde verilen ses olayı <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "B seçeneğinde ünlü daralmasına uğramış bir sözcük yoktur; 'geçiyor' sözcüğünün kökü 'geç-' olduğundan daralma olmaz. Bu cümlede yalnızca 'değiştirmek' sözcüğünde ünsüz benzeşmesi vardır. Diğer seçeneklerde: edinmektir (ünsüz değişimi), yaptıklarınızı (benzeşme), aslında (ünlü düşmesi), güpegündüz (ünlü türemesi) mevcuttur.",
    answers: [
      { text: "Üretken olmayı öğrenmek demek, problemleri çözmek için gerekli becerileri edinmektir. (ünsüz değişimi)", ok: false },
      { text: "Herkes bir şeyler biliyor ancak çok az insan hayatını değiştirmek için harekete geçiyor. (ünlü daralması)", ok: true },
      { text: "Eksik veya güzel yaptıklarınızı, kendinize zarar veren ya da sizi ileriye götüren alışkanlıklarınızı değerlendireceksiniz. (ünsüz benzeşmesi)", ok: false },
      { text: "Mitolojik ve kültürel özelliği olan birçok ağaç aslında zararsızdır. (ünlü düşmesi)", ok: false },
      { text: "Kurumun ek binasında güpegündüz gerçekleşen hırsızlık hepimizi şaşkına çevirdi. (ünlü türemesi)", ok: false }
    ]
  },
  {
    text: "<p>Okulda ders dinlerken öğretmenin söylediklerinin hep akılda <u>I. kalacağı</u> <u>II. zannedilir</u> fakat ders bitiminde öğrenilenlerin büyük bir <u>III. kısmı</u> unutulur.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklerde görülen ses olayları aşağıdaki seçeneklerin hangisinde <u>sırasıyla</u> doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "I. kalacak-ı > kalacağı: ünsüz değişimi/yumuşaması. II. zan + et-il-ir > zannedilir: hem ünsüz türemesi hem ünsüz değişimi. III. kısım-ı > kısmı: ünlü düşmesi. Buna göre doğru sıralama 'Ünsüz yumuşaması - Ünsüz türemesi - Ünlü düşmesi'dir.",
    answers: [
      { text: "Ünsüz değişimi - Ünsüz benzeşmesi - Hece düşmesi", ok: false },
      { text: "Ünlü değişimi - Ünsüz türemesi - Hece düşmesi", ok: false },
      { text: "Ünlü türemesi - Ünsüz yumuşaması - Ünlü türemesi", ok: false },
      { text: "Ünsüz türemesi - Ünsüz yumuşaması - Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması - Ünsüz türemesi - Ünlü düşmesi", ok: true }
    ]
  },
  {
    text: "<p>Son ünlüleri kalın sıradan olmasına karşın son sesleri ince söylenen bazı alıntı kelimeler ince ünlülü ekler alır.</p><p><b>Aşağıda verilen sözcüklerden hangisi bu durumu <u>örneklendirmemektedir</u>?</b></p>",
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
    text: "<p>Herkes seni sen zanneder, / Senin sen olmadığını bile bilmeden. / Saati sorduklarında, / Derim ki / Onu “O” geçiyordur. / Kimse anlam veremez. / Tamir ettirmedin gitti derler şu saati. / Ettirmek istiyor musun demezler.</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p><b>I. Grup</b><br/>I. kazandığınız<br/>II. sırrınızı<br/>III. kastettiğim<br/>IV. uykulu<br/>V. yapayalnız</p><p><b>II. Grup</b><br/>• Ünsüz türemesi<br/>• Ünsüz değişimi<br/>• Ünlü düşmesi<br/>• Ünsüz benzeşmesi</p><p><b>Yukarıda I. grupta verilen sözcüklerdeki ses olaylarından hangisi, II. gruptakilerden biriyle <u>ilişkilendirilemez</u>?</b></p>",
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
    text: "<p>Bilim insanları, bir fincan kahve <u>I. içildiğinde</u> <u>II. kahverengi</u> yağ hücrelerinin <u>III. uyarıldığını</u> ve bu <u>IV. etkinin</u> obezite ve diyabetle mücadele etmede anahtar rol <u>V. oynayabileceğini</u> keşfetti.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisinde, ötekilerden farklı bir ses olayı vardır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'et-kin > etkinin' sözcüğünde ünsüz benzeşmesi görülmektedir. Diğer sözcükler (içildiğinde, kahverengi, uyarıldığını, oynayabileceğini) ünsüz yumuşamasına uğramıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Korku, hayatın bir noktasında hepimizi etkileyen bir şeydir ve çoğu kişi için büyük rol oynamaya devam ediyor. Her gün karşılaştığımız şeylerden ve fikirlerden insanlara kadar birçok farklı şeyden korkuyoruz. Buna izin verirseniz korku sadece zihinsel değil fiziksel olarak da hayatınızı ele geçirebilir.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada ünlü daralmasına uğramış sözcük yoktur. 'Korkuyoruz' sözcüğünün kökü 'kork-' olup 'a, e' ile bitmediği için buradaki 'u' yardımcı sestir. Parçada 'karşılaştığımız, ediyor' (ünsüz yumuşaması), 'etkileyen' (ünsüz benzeşmesi), 'oyun-a-maya > oynamaya' (ünlü düşmesi), 'oynama-y-a' (kaynaştırma) vardır.",
    answers: [
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Kaynaştırma", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcükteki ünlü düşmesinin sebebi, ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "E'deki 'seyir-i > seyri' sözcüğü iyelik eki aldığı için son hecesindeki 'i' ünlüsü düşmüştür; yani çekime girerken ünlü düşmesine uğramıştır. Diğer seçeneklerdeki sözcükler ise yapım eki alırken, yani türetilirken ünlü düşmesine uğramıştır.",
    answers: [
      { text: "Son zamanlarda ona <u>benzemeye</u> başladı.", ok: false },
      { text: "Sabahtan beri <u>uykusuzluktan</u> gözleri ağrıyordu.", ok: false },
      { text: "Birçok farklı etken <u>çevre</u> kirliliğine yol açmaktadır.", ok: false },
      { text: "Şiirlerini çoğunda <u>yalnızlığı</u> anlatmayı tercih etmiştir.", ok: false },
      { text: "Bu hastalığın <u>seyri</u> ve şiddeti kişiden kişiye değişmektedir.", ok: true }
    ]
  },
  {
    text: "<p>Atatürk, bir toplumun <u>I. kalkınmasında</u> ve <u>II. ilerlemesinde</u> temel öge olarak ilim ve fenni <u>III. göstermiştir</u>. Her açıdan zorluk içindeki Türk <u>IV. milletine</u>, bilimi rehber <u>V. edinmelerini</u> telkin etmiş, bilimsel düşünmeyi teşvik etmiştir.</p><p><b>Bu parçada numaralanmış sözcüklerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'millet' sözcüğü Arapçadan dilimize geçmiş bir sözcüktür ve zaten kök hâlindedir. Bu nedenle bu sözcükte ünsüz ikizleşmesi (türemesi) yoktur.",
    answers: [
      { text: "I. sözcükte, birden fazla kaynaştırma ünsüzü bulunmaktadır.", ok: false },
      { text: "II. sözcükte, ünlü düşmesi meydana gelmiştir.", ok: false },
      { text: "III. sözcükte, ünsüz benzeşmesi vardır.", ok: false },
      { text: "IV. sözcük, ünsüz ikizleşmesine uğramıştır.", ok: true },
      { text: "V. sözcükte, ünsüz değişimi vardır.", ok: false }
    ]
  },
  {
    text: "<p>I. Yalnızlığı da dene oldu olacak<br/>II. Hayat, bilinmeyene yürümekten ibaretti.<br/>III. Sahilde savruluşları başıboş dalgaların<br/>IV. Büyük ayrılıklar bile en güzel yerde<br/>V. Uykusuzluklar yıkıp geçmezdi, kısacık kestirmelerin ardından</p><p><b>Yukarıda numaralanmış dizelerin hangisinde ünlü düşmesi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "II numaralı dizede ünlü düşmesine uğramış bir sözcük yoktur. I'de 'yalnızlığı', III'te 'savruluşları', IV'te 'ayrılıklar' ve V'te 'uykusuzluklar' sözcüklerinde ünlü düşmesi görülmektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Pencereyi aç / Soluğun çıksın dışarı / Sen büyütmedin mi ciğerinde onu / Kokusu hayatı yıkasın diye</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Dizelerde ünsüz benzeşmesine uğramış sözcük yoktur. 'Soluğun' (ünsüz yumuşaması), 'onu' (kaynaştırma ünsüzü), 'de-y-e > diye' (ünlü daralması), 'hayatı' (ünsüz yumuşamasına aykırılık) vardır.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Kaynaştırma ünsüzü", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz yumuşamasına aykırılık", ok: false }
    ]
  },
  {
    text: "<p>Sondan eklemeli bir dil olan Türkçede ekler, kelime köklerine doğrudan eklenirler ve kök ünlülerinde bir değişikliğe sebep olmazlar.</p><p><b>Aşağıdaki cümlelerin hangisinde bu duruma <u>aykırı</u> bir örnek kullanılmıştır?</b></p>",
    diff: 2,
    expl: "B'deki 'bana' sözcüğünde kökte ünlü değişimi (ünlü kalınlaşması) vardır: 'ben' zamiri '-e' yönelme hâl eki aldığında kökteki 'e' sesi 'a'ya dönüşür. Bu durum öncüldeki kurala aykırıdır.",
    answers: [
      { text: "Sorunlar, güçlü yönlerimizi sergilememize izin verir.", ok: false },
      { text: "Olumlu bir tavrın bana başarı getirebileceğini biliyorum.", ok: true },
      { text: "Sıkı çalışmak konusunda disiplinli ve tutarlı olmak zorundayız.", ok: false },
      { text: "Onun zayıf ve iradesiz kişiliği birtakım anlaşmazlıklara yol açıyordu.", ok: false },
      { text: "Kendini geliştirmek istiyorsan öncelikle ne yapman gerektiğini bilmelisin.", ok: false }
    ]
  }
];

// ============================================================================
// SES BİLGİSİ - TEST 4
// ============================================================================
export const TUR_SES_BILGISI_TEST_4: McQ[] = [
  {
    text: "<p>Seni unutarak baktığımda bile / Dünyanın her yerlerinden geçiyorsun / Yayılıyorsun kalabalıklara / Yalnız yayılmak mı / Aşkın en büyüğü, en dayanılmazı demeli buna</p><p><b>Bu dizelerle ilgili olarak aşağıda verilen açıklamalardan hangisi <u>yanlıştır</u>?</b></p>",
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
    text: "<p>Sen artık bu kitapta / noktaları, virgülleri, / satırları taşımıyorsun. / Sen artık bu kitapta / koşmuyor, bağırmıyor, / alnını kaşımıyorsun. / Sen artık bu kitapta / yaşamıyorsun.</p><p><b>Bu dizelerde aşağıdakilerin hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde ünlü düşmesi (alın-ı), benzeşme (kitap-ta), ulama (sen artık) ve daralma (taşı-ma-yor > taşımıyor) vardır. Ancak kaynaştırma ünsüzü (y, ş, s, n) kullanılmamıştır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Kaynaştırma ünsüzü", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ulama", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Bir gün <u>I. gideceğim</u> inan / Yakın <u>II. sandığın</u> uzaklara / Gururumun ayak <u>III. izlerini</u> takip edeceğim / Belki özlemle <u>IV. kavrulacağım</u> bir yandan / Arayacağım, hayallerimi <u>V. hapsettiğim</u>.</p><p><b>Bu dizelerde numaralanmış sözcüklerin hangisinde aynı ses olayının <u>birden çok</u> örneği vardır?</b></p>",
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
    text: "<p>(I) William Shakespeare'in ilk kez 1609 yılında yayımlanmış olan Hamlet adlı eseri trajedi ve drama oyunu özelliklerini taşır. (II) Babasının cinayetinin ardından intikam almak için yola çıkan genç adam her seferinde işini geciktirir. (III) Daha kararlı ve kibar bir genç adamla olan bir savaşta hayatını kaybeder. (IV) Oyun daha çok psikolojik doğruluk ve karmaşıklığı ile öne çıkar. (V) Bu eser, Shakespeare'in yaşadığı dönemde en popüler oyunlardan birisi olmuştur.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede türerken ünlü düşmesine uğramış bir sözcük bulunmamaktadır. Bu yüzden D şıkkı söylenemez.",
    answers: [
      { text: "I. cümlede, birden fazla sözcükte kaynaştırma ünsüzüne yer verilmiştir.", ok: false },
      { text: "II. cümlede, ünsüz değişimine uğramış birden fazla sözcük bulunmaktadır.", ok: false },
      { text: "III. cümlede, bir sözcükte birden fazla ses olayı meydana gelmiştir.", ok: false },
      { text: "IV. cümlede, türerken ünlü düşmesine uğramış sözcük bulunmaktadır.", ok: true },
      { text: "V. cümlede, ünsüz yumuşaması ve ünsüz benzeşmesine örnek olabilecek sözcükler kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Para; mal veya hizmetlerin değişim aracı olarak kullanılan bir araçtır. Dilimize, küçük parça anlamına gelen Farsça “pare” kelimesinden geçmiştir. Lira ise İtalyanca üzerinden, Latince terazi anlamına gelen “libre” kelimesinden dilimize geçmiştir.</p><p>Bu parçada;<br/>I. ünlü türemesi,<br/>II. ünsüz değişimi,<br/>III. ünsüz benzeşmesi</p><p><b>ses olaylarından hangileri vardır?</b></p>",
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
    text: "<p>Bana yaşadığın şehrin kapılarını aç / Sana diyeceklerim söylemekle bitmez / Yıllardır yaşamımdan çaldığım zamanlar / Adına düğümlendi</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Dizelerde ünsüz benzeşmesine uğramış sözcük yoktur. 'Bana' (kökte ünlü değişimi), 'diyeceklerim' (ünlü daralması), 'şehrin' (ünlü düşmesi), 'çaldığım' (ünsüz değişimi) sözcüklerinde ses olayları görülmektedir.",
    answers: [
      { text: "Kökte ünlü değişimi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz değişimi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true }
    ]
  },
  {
    text: "<p>Yöneticiler ve askerî zaferler <u>I. hakkında</u> bilgilerin yer aldığı taşlar, <u>II. uygarlığın</u> <u>III. yontuculukta</u> başarılı olduğunu gösterir. <u>IV. Bahsedilen</u> döneme <u>V. dikkat</u> edersek dünyanın birçok yerinde karanlık bir çağ yaşanmaktaydı.</p><p><b>Bu cümlede numaralanmış sözcüklerin hangisinde herhangi bir ses olayı <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'dikkat' sözcüğü büyük ünlü uyumuna uymadığı için Türkçe değildir ve kök hâlindedir; bu sözcükte herhangi bir ses olayı yoktur. 'hakkında' ve 'yontuculukta' sözcüklerinde ünsüz benzeşmesi, 'uygarlığın' sözcüğünde ünsüz yumuşaması, 'bahsedilen' sözcüğünde ünlü düşmesi ve ünsüz yumuşaması vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Kişiliğin ve kişilik bozukluklarının gelişim <u>I. öyküsünün</u> izini sürmek, <u>II. tıbbi</u> ve psikolojik bilimlerin en zor olan aşamalarından <u>III. birisiydi</u>. Kişilik bozukluklarına dair araştırmalar, <u>IV. geçtiğimiz</u> onlarca yıllık süreçte psikoloji çalışmalarının merkezine <u>V. yerleşti</u>.</p><p><b>Bu parçada numaralanmış sözcüklerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'birisiydi' sözcüğünde ek fiil düştüğü için ünlü düşmesi görülmektedir; sözcükte ayrıca 'y' yardımcı sesi vardır. Ünlü daralması yoktur. Bu yüzden C seçeneği yanlıştır.",
    answers: [
      { text: "I. sözcükte birden fazla kaynaştırma ünsüzü bulunmaktadır.", ok: false },
      { text: "II. sözcükte, hem ünsüz değişimi hem ünsüz türemesi bulunmaktadır.", ok: false },
      { text: "III. sözcükte, hem ünlü daralması hem ünlü düşmesi vardır.", ok: true },
      { text: "IV. sözcükte, hem ünsüz değişimi hem ünsüz benzeşmesi vardır.", ok: false },
      { text: "V. sözcükte, ünsüz benzeşmesi meydana gelmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Yıllar boyunca insanlar, kitap okuma <u>I. alışkanlığı</u> kazanmak ve sürdürmenin gerekli <u>II. olduğunu</u> düşündüler. Çünkü kitap okuma kelime <u>III. haznemizi</u> geliştirmekle <u>IV. birlikte</u> iletişim becerilerimizi de <u>V. geliştirir</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisinde <u>birden çok</u> ses olayı vardır?</b></p>",
    diff: 3,
    expl: "I numaralı 'alış-kan-lık-ı' sözcüğünde hem ünsüz benzeşmesi hem ünsüz yumuşaması vardır. 'olduğunu' sözcüğünde ünsüz yumuşaması, 'haznemizi' sözcüğünde ünlü düşmesi, 'birlikte' ve 'geliştirir' sözcüklerinde ünsüz benzeşmesi vardır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Fecre benzettiği bayrakla kefenlenmiş Ata, / Çıktı bir kar gibi mermer kapısından sarayın / Gönlümüz, bayrağı öğrendiği günden beri ta / Duymamıştır bu kadar hüznünü yıldızla ay'ın!</p><p><b>Bu dörtlükte, aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dörtlükte ünlü daralmasına uğramış sözcük yoktur. 'benzettiği' sözcüğünde ünsüz benzeşmesi ve ünlü düşmesi (beniz-e-t-tik-i), 'kapısı' sözcüğünde kaynaştırma ünsüzü, 'öğrendiği' ve 'bayrağı' sözcüklerinde ünsüz değişimi vardır.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Kaynaştırma ünsüzü", ok: false },
      { text: "Ünsüz değişimi", ok: false }
    ]
  },
  {
    text: "<p>Öğrenme isteğimizi gerçekleştirirken ne kadar iyi bir şekilde öğreniyoruz? Öğrendiklerimizi aklımızda kolay bir şekilde depolayabiliyor muyuz? Günlük hayatta iş ve sosyal yükümlülüklerinden dolayı bazı beyin fonksiyonları dinlenmeye ihtiyaç duyabilir. Bazı insanlar, müzik dinlediğinde veya kitap okuduğunda dinlendiğini hisseder.</p><p>Bu parçada;<br/>I. ünlü daralması,<br/>II. ünsüz türemesi,<br/>III. ünsüz benzeşmesi,<br/>IV. ünsüz yumuşaması</p><p><b>ses olaylarından hangileri <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada ünlü daralmasına uğramış bir sözcük yoktur. 'hisseder' sözcüğünde ünsüz türemesi, 'gerçekleştirirken' sözcüğünde ünsüz benzeşmesi, 'isteğimizi' sözcüğünde ünsüz yumuşaması vardır.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki dizelerin hangisinde <u>birden çok</u> farklı ses olayı örneklendirilmiştir?</b></p>",
    diff: 3,
    expl: "E'deki dizelerde 'sana' sözcüğünde kökte ünlü değişimi, 'git-en > giden' sözcüğünde ünsüz yumuşaması görülmektedir. A'da 'bulmaktan ve sevmekten' sözcüklerinde yalnızca ünsüz benzeşmesi, B'de 'tattım' sözcüğünde ünsüz benzeşmesi, C'de 'yüreğime' sözcüğünde ünsüz yumuşaması, D'de 'serinliyordu' sözcüğünde ünlü daralması vardır.",
    answers: [
      { text: "Seni bulmaktan önce aramak isterim. / Seni sevmekten önce anlamak isterim.", ok: false },
      { text: "Toprakların en bereketlisini sende sürdüm, / Senden tattım yemişlerin cümlesini.", ok: false },
      { text: "Şaşırmış kalmışım birdenbire çaresiz. / Dökülmüş yüreğime gökyüzünden yıldızlar.", ok: false },
      { text: "Gökler bulutlanıyor, rüzgâr serinliyordu. / Serpilmeye başladı bir yağmur ince ince.", ok: false },
      { text: "Biliyorum sana giden yollar kapalı. / Üstelik sen de hiçbir zaman sevmedin beni.", ok: true }
    ]
  }
];
