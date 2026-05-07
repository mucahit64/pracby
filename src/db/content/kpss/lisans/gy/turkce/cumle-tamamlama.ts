import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE TAMAMLAMA - TEST 1
// ============================================================================
export const TUR_CUMLE_TAMAMLAMA_TEST_1: McQ[] = [
  {
    text: "<p>Gerçekte Yunus'un şiirlerini ----, yaşlanmaz kılan birçok etken gösterilebilir. Bana göre ana etken, ondaki ---- söyleyiş biçimidir. Sözü ---- kılmanın gizini, özlü söyleyişte bulmasıdır.</p><p><b>Bu parçada boş bırakılan yerler aşağıdakilerden hangileriyle en uygun biçimde doldurulabilir?</b></p>",
    diff: 3,
    expl: "Cümlede Yunus Emre'nin şiirlerinin kalıcılığı ve yaşlanmazlığı vurgulanmaktadır. 'Yaşlanmaz' ifadesini 'eskimez' sözcüğü, 'özlü söyleyiş' vurgusunu ise 'sade' ve 'yaşsız' kelimeleri en iyi şekilde tamamlar.",
    answers: [
      { text: "A) sarsılmaz – detaylı – etkili", ok: false },
      { text: "B) eskimez – sade – yaşsız", ok: true },
      { text: "C) çarpıcı – duru – kabul edilir", ok: false },
      { text: "D) kalıcı – yalın – genel geçer", ok: false },
      { text: "E) popüler – kestirme – açık", ok: false }
    ]
  },
  {
    text: "<p>Ağır sanayi ve hafif sanayi devrimleri ardından bilişim dönemiyle \"beyin\" para ---- başladı. İnternet, bilgisayar programları ve internet ile alakalı işlerden Batı milyar dolarlar ---- başlarken ağır sanayi ve hafif sanayi gelişmekte olan ülkelere devredildi. Batı; internet alan adları, internet üzerinden yapılan ticaret, Google, Facebook, Twitter gibi daha birkaç yıl önce kurulmuş sitelerle birçok ülkenin ---- gelirinden çok kazanmaya başladı.</p><p><b>Bu parçada boş bırakılan yerler aşağıdakilerden hangileriyle en uygun biçimde doldurulabilir?</b></p>",
    diff: 3,
    expl: "Parçada bilginin (beyin) ekonomik bir güce dönüşmesi anlatılıyor. 'Beyin para etmeye başladı', 'milyar dolarlar kazanmaya' ve 'ülkelerin yıllık gelirinden' ifadeleri anlam akışına tam uygundur.",
    answers: [
      { text: "A) getirmeye – biriktirmeye – turizm", ok: false },
      { text: "B) olmaya – toplamaya – toplam", ok: false },
      { text: "C) etmeye – kazanmaya – yıllık", ok: true },
      { text: "D) konuşmaya – elde etmeye – aylık", ok: false },
      { text: "E) sağlamaya – getirmeye – yarı", ok: false }
    ]
  },
  {
    text: "<p>Hemen şunu söyleyelim: Rıfat Ilgaz'ı herkes bilir; onun şiirlerinin, düzyazılarının ve gazete yazılarının ---- yaşamdır. O, bütün yaratılarını yaşamın ---- çıkarır.</p><p><b>Bu parçada boş bırakılan yerler aşağıdakilerden hangileriyle en uygun biçimde <u>doldurulamaz</u>?</b></p>",
    diff: 3,
    expl: "Rıfat Ilgaz toplumcu bir yazardır. Şiirlerinin 'merkezi', 'odak noktası', 'kaynağı' veya 'referansı' yaşam olabilir. Ancak 'çelişkili yanı yaşamdır' ifadesi yazarın sanat anlayışıyla ve cümlenin devamıyla uyum sağlamaz.",
    answers: [
      { text: "A) merkezi – karşıtlıklarından", ok: false },
      { text: "B) odak noktası – zorluklarından", ok: false },
      { text: "C) kaynağı – gerçeklerinden", ok: false },
      { text: "D) çelişkili yanı – olanaklarından", ok: true },
      { text: "E) referansı – çelişkilerinden", ok: false }
    ]
  },
  {
    text: "<p>Üstbiliş stratejileri kişinin kendi özelliklerini bilmesine ve kendisini tanımasına bağlı olduğundan öğretmen, öncelikle öğrencilerin kendi okumalarını değerlendirebilecekleri eğitim-öğretim ortamları hazırlamalı; onların kendilerini tanımalarına ---- etmelidir. Öğrencilerin okuma becerileriyle ilgili eksikliklerini belirlemeleri, üstbiliş stratejilerinin uygulandığı bir ileri okuma sürecinin her ne kadar ilk adımıysa da ileri okurun becerileri bu adımla ---- değildir.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Öğretmenin görevi öğrencilere 'kılavuzluk' etmektir. Cümlenin devamında ise bu ilk adımın önemli olduğu fakat becerilerin sadece bununla 'sınırlı' kalmadığı anlatılmaktadır.",
    answers: [
      { text: "A) kılavuzluk – sınırlı", ok: true },
      { text: "B) modellik – açıklanabilir", ok: false },
      { text: "C) rehberlik – belirgin", ok: false },
      { text: "D) örneklik – olası", ok: false },
      { text: "E) yardım – mümkün", ok: false }
    ]
  },
  {
    text: "<p>Ben siyaseti öğrenmeliyim ki çocuklarımın sanayi ve ticareti öğrenme ---- olsun; çocuklarım sanayi ve ticareti öğrenmeliler ki onların çocukları sanat, edebiyat ve felsefeyi öğrenme ---- sahip olsunlar.</p><p><b>Bu cümlede boş bırakılan yerler aşağıdakilerden hangileriyle en uygun biçimde doldurulabilir?</b></p>",
    diff: 2,
    expl: "Nesiller arası gelişimi anlatan bu cümlede, bir önceki neslin çabası bir sonraki nesil için 'imkân' veya 'olanak' yaratır. 'İmkânı' ve 'şansına' kelimeleri boşluklara tam oturur.",
    answers: [
      { text: "A) özgürlükleri – yoluna", ok: false },
      { text: "B) deneyimi – isteğine", ok: false },
      { text: "C) imkânı – şansına", ok: true },
      { text: "D) durumu – zahmetine", ok: false },
      { text: "E) olanağı – kriterine", ok: false }
    ]
  },
  {
    text: "<p>Onun en büyük erdemi bence şiire olan ---- hiç azaltmadan sürdürebilmesiydi. Daha ilk yazdıklarıyla sevilmişti. Bunlarla bile kendi dünyasında beklediği aşamaya gelmişti fakat daha fazlasını istemedi. İyi bir ozandı ama ---- bir ozan değildi.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Şairin şiire olan 'tutkusunu' sürdürmesi bir erdemdir. Cümlenin sonundaki 'ama' bağlacı karşıtlık bildirir; başarılı ve iyi bir ozan olmasına rağmen geniş kitlelerce tanınan 'popüler' biri olmadığı vurgulanmıştır.",
    answers: [
      { text: "A) güvenini – bilindik", ok: false },
      { text: "B) tarzını – tanınmış", ok: false },
      { text: "C) tutkusunu – popüler", ok: true },
      { text: "D) inancını – sevilen", ok: false },
      { text: "E) saygısını – yapıcı", ok: false }
    ]
  },
  {
    text: "<p>Romanın doğuşu, Don Kişot'un kılıcını, kalkanını kuşanıp evinden çıkmasıyla başlar ve günümüze kadar gelir. Don Kişot'u önemli kılan sadece anlattığı hikâyelerin ---- değildir. Burada önemli olan içeriğinde okuru, yazarı ve metni bir bütün olarak ele alınmasını sağlayan toplumun sorunlarını değil bireyin ---- anlatan bir türün, yani ilk romanın ortaya çıkmasıdır.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Don Kişot 'özgünlüğü' ile tanınır. Parçanın sonunda romanın toplumdan ziyade bireyin iç dünyasını veya 'yalnızlığını' (veya varoluşunu) işlemesine değinilmiştir.",
    answers: [
      { text: "A) sadeliği – hikâyesini", ok: false },
      { text: "B) özgünlüğü – varoluşunu", ok: true },
      { text: "C) özgüllüğü – yalnızlığını", ok: false },
      { text: "D) eşsizliği – korkusunu", ok: false },
      { text: "E) kalıcılığı – egosunu", ok: false }
    ]
  },
  {
    text: "<p>Otizmli bireylerin ---- yetersizlik alanı sosyal iletişim becerileri olduğu için akranları ile birlikte ---- olmayan ortamlarda eğitim almaları, ---- için şarttır.</p><p><b>Bu cümlede boş bırakılan yerlere aşağıdakiler den hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Otizmin 'temel' alanı iletişimdir. Bireyin gelişimi için 'kısıtlayıcı' olmayan ortamlar ve bu durumun onların 'gelişimleri' için gerekliliği vurgulanmıştır.",
    answers: [
      { text: "A) temel – kısıtlayıcı – gelişimleri", ok: true },
      { text: "B) ana – zararlı – ilerlemeleri", ok: false },
      { text: "C) başlıca – tehlikeli – büyümeleri", ok: false },
      { text: "D) esas – sınırlayıcı – iyileşmeleri", ok: false },
      { text: "E) mevcut – belirleyici – olgunlaşmaları", ok: false }
    ]
  },
  {
    text: "<p>---- nesillerin giderek düşünme fonksiyonu ----, fikir üretme yetenekleri gerilemekte, ---- kelime hazinesi ile başarılı iletişim kurma özelliği kazanılamamaktadır.</p><p><b>Bu cümlede boş bırakılan yerlere aşağıdakiler den hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Cümledeki olumsuz gidişatı 'Kitap okumayan' nesiller, fonksiyonların 'körelmesi' ve 'yetersiz' kelime hazinesi ifadeleri en mantıklı şekilde tamamlar.",
    answers: [
      { text: "A) Kitap okumayan – körelmekte – yetersiz", ok: true },
      { text: "B) Araştırma yapmayan – zayıflamakta – oldukça fazla", ok: false },
      { text: "C) Herhangi bir dergiye abone olan – gelişmekte – zengin", ok: false },
      { text: "D) Kendini geliştirebilen – derinleşmemekte – ileri derecede", ok: false },
      { text: "E) Okumayı sevmeyen – etkilenmekte – hayli çok", ok: false }
    ]
  },
  {
    text: "<p>Çevre sorunlarını ---- çevrenin kirletilmesi veya bilinçsizce kullanılması olarak değil; ---- toplumsal, siyasal, ekonomik, kültürel, dinî ve ahlaki boyutları da olan son derece karmaşık bir sorunlar yumağı olarak görmek daha doğru olacaktır.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Yazar çevre sorununa 'yalnızca' dar bir açıdan bakılmaması gerektiğini, 'daha geniş açıdan bakıldığında' bunun çok boyutlu olduğunu belirtmektedir.",
    answers: [
      { text: "A) yalnızca – daha geniş açıdan bakıldığında", ok: true },
      { text: "B) bugün – fotoğrafın bütünü incelendiğinde", ok: false },
      { text: "C) sırf – bakış açımızı değiştirdiğimizde", ok: false },
      { text: "D) günümüzde – görüş açımızı büyüttüğümüzde", ok: false },
      { text: "E) sadece – doğru bir açıdan yaklaşıldığında", ok: false }
    ]
  },
  {
    text: "<p>... Doğadan insanın emrine sunulmuş ve her türlü ---- bir ürünmüş gibi değerlendirilmesini de içeren bu yeni paradigma etkili olmuştur. Doğa merkezli anlayış yerine insan merkezli anlayış ---- olmuş...</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Doğanın 'tüketilebilir' bir kaynak olarak görülmesi ve bu süreçte insan merkezli anlayışın 'hâkim' olması metnin ana fikridir. 'Belirgin' bir tahribat ifadesi de ilk boşluğa uygundur.",
    answers: [
      { text: "A) göze çarpar – yok edilecek – baskın", ok: false },
      { text: "B) belirgin – tüketilebilir – hâkim", ok: true },
      { text: "C) bariz bir – zarar verilebilecek – geçersiz", ok: false },
      { text: "D) olumsuz – ihtiyacı karşılayabilecek – egemen", ok: false },
      { text: "E) can alıcı – isteğine cevap verebilecek – ön planda", ok: false }
    ]
  },
  {
    text: "<p>Dil öğretimini yenileştirme arayışları, ---- ürettiği ve dilimizin yaratıcı ---- sergileyen, dolayısıyla çok yönlü dil çalışmalarına olanak sağlayan ---- bu bağlamdaki işlevini ve kullanımını yeni bakış açılarıyla sorgulamayı da gündeme getiriyor.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Dilin yaratıcı 'yanlarını' sergileyen 'söz ustalarımızın' (yazarların) ürettiği 'yazın metinlerinin' (edebi metinler) incelenmesi dil öğretimi için esastır.",
    answers: [
      { text: "A) sanatçılarımızın – zekâlarını – eserlerinin", ok: false },
      { text: "B) edebiyatçılarımızın – taraflarını – söz varlığına katkılarının", ok: false },
      { text: "C) şairlerimizin – yönlerini – şiirlerinin", ok: false },
      { text: "D) söz ustalarımızın – yanlarını – yazın metinlerinin", ok: true },
      { text: "E) ressamlarımızın – durumlarını – resimlerinin", ok: false }
    ]
  }
];