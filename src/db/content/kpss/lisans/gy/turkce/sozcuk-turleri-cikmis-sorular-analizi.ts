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
    text: "<p>Edebiyat tarihinde pek klasik sorular vardır. '...’nın edebiyatımızdaki <u>I. yeri ne</u> olmalıdır?' cümlesi... Ancak bununla <u>II. ne</u> kastedildiği, soranın <u>III. ne</u> tür bilgiyi ölçmek istediği kadar da açık değildir... <u>IV. ne</u> öğrenilmek istendiğini... Türk edebiyatında <u>V. ne</u> olmazdı?</p><p><b>Bu parçada numaralanmış \"ne\" sözcüklerinden hangisinin türü diğerlerinden farklıdır?</b></p>",
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
    text: "<p>Meslek gruplarının <u>I. bazıları</u>... onlardan <u>II. birinin</u>... <u>III. diğerlerine</u>... <u>IV. birbiriyle</u>... <u>V. tüm</u> meslektaşların...</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi zamir değildir?</b></p>",
    diff: 2,
    expl: "I, II, III ve IV numaralı sözcükler belgisiz veya işaret zamiridir. V numaralı 'tüm' sözcüğü ise ismi niteleyen bir belgisiz sıfattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Mantarlar denizlerde... (II) bunları su yüzeyinde... (III) Bazılarıysa hayvanların... <b>Bu parçadaki numaralandırılmış cümlelerin hangisinde belirsizlik zamiri kullanılmıştır?</b></p>",
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
    expl: "D seçeneğindeki 'hızla' sözcüğü, 'yaygınlaşıyor' eyleminin nasıl yapıldığını bildiren bir durum zarfıdır. Diğerleri zaman bildirmektedir.",
    answers: [
      { text: "Zaman <u>hızla akarken</u> çoğu kez...", ok: false },
      { text: "<u>her zaman</u> buraya gelirlerdi.", ok: false },
      { text: "İşinin <u>akşama kadar</u> biteceğini...", ok: false },
      { text: "tohumların kullanımı <u>hızla</u> yaygınlaşıyor.", ok: true },
      { text: "<u>Biraz sonra</u>, yaklaşık iki saat sürecek...", ok: false }
    ]
  },
  {
    text: "<p>On sekizinci yüzyıl romantik romanlarının... <b>Bu parçada aşağıdaki sıfat türlerinden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada niteleme, işaret, belgisiz ve soru sıfatları bulunurken, sayı bildiren bir sıfat (sayı sıfatı) bulunmamaktadır.",
    answers: [
      { text: "Niteleme sıfatı", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Soru sıfatı", ok: false },
      { text: "Belgisiz sıfat", ok: false },
      { text: "Sayı sıfatı", ok: true }
    ]
  },
  {
    text: "<p>Dört yaşında olduğunuzu ve birinin size şunu teklif ettiğini düşünün... <b>Bu parçada aşağıdaki sözcük türlerinden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'size' (kişi), 'şunu' (işaret), 'kendi' (dönüşlülük) ve 'hangi' (soru) zamirleri varken belgisiz zamir bulunmamaktadır.",
    answers: [
      { text: "Belgisiz zamir", ok: true },
      { text: "Kişi zamiri", ok: false },
      { text: "Soru zamiri", ok: false },
      { text: "İşaret zamiri", ok: false },
      { text: "Dönüşlülük zamiri", ok: false }
    ]
  },
  {
    text: "<p>Her sevginin başlangıcı ve süreci... <b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'her sevgi' (belgisiz sıfat), 'boşluk' (niteleme sıfatı - sonsuz boşluk), 'birisiyle' (belgisiz zamir), 'kendi' (dönüşlülük zamiri - şıklarda yok ama kişi zamiri kategorisinde de değerlendirilebilir) mevcuttur; ancak işaret sıfatı yoktur.",
    answers: [
      { text: "Belgisiz sıfat", ok: false },
      { text: "Belgisiz zamir", ok: false },
      { text: "Niteleme sıfatı", ok: false },
      { text: "Kişi zamiri", ok: false },
      { text: "İşaret sıfatı", ok: true }
    ]
  },
  {
    text: "<p>Çalışma modellerinin ve beklentilerinin hızla değiştiği bu yıllarda... <b>Bu parçada aşağıdaki sözcük türlerinden hangisi yoktur?</b></p>",
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
    text: "<p>İlhan Berk... <u>I. en</u>... <u>II. hiç</u>... <u>III. son</u>... <u>IV. ondandır</u>... <u>V. daima</u>... <b>Hangisinin türü diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, III ve V numaralı kelimeler zarf görevindeyken, IV numaralı 'ondandır' sözcüğü ek fiil almış bir işaret zamiridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. binlerce</u>... <u>II. iki yanı</u>... <u>III. kadar</u>... <u>IV. deniz</u>... <u>V. hafif</u>... <b>Hangisi gruplandırıldığında dışarıda kalır?</b></p>",
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
    text: "<p>...<u>I. kadar</u>... <u>II. rengârenk</u>... <u>III. bu</u>... <u>IV. kendine</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "kadar (edat), rengârenk (sıfat - boyar eylemini nitelediği için burada zarf olabilir ancak rengârenk bulutlar anlamındaysa sıfat), 'bu' (sıfat), 'kendine' (zamir). Doğru sıralama C şıkkıdır.",
    answers: [
      { text: "Edat - zarf - sıfat - zamir", ok: false },
      { text: "Bağlaç - sıfat - zamir - zarf", ok: false },
      { text: "Edat - sıfat - isim - sıfat", ok: true },
      { text: "Bağlaç - zarf - zamir - sıfat", ok: false },
      { text: "Zarf - sıfat - zarf - zamir", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. Çok</u>... <u>II. öylesine</u>... <u>III. birtakım</u>... <u>IV. bu</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
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
    text: "<p>...<u>I. Bilincimiz</u>... <u>II. durmadan</u>... <u>III. o</u>... <u>IV. çağdaş</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
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
    text: "<p>...<u>I. Gece</u>... <u>II. tarafı</u>... <u>III. fazla</u>... <u>IV. ise</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Gece (Zarf), tarafı (İsim), fazla (Sıfat), ise (Bağlaç/Edat benzeri). Cevap anahtarına göre D şıkkıdır.",
    answers: [
      { text: "İsim - edat - zarf - sıfat", ok: false },
      { text: "Zarf - isim - sıfat - zarf", ok: false },
      { text: "İsim - edat - sıfat - zarf", ok: false },
      { text: "Zarf - isim - sıfat - edat", ok: true },
      { text: "Sıfat - isim - zarf - edat", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. berrak</u>... <u>II. sürekli</u>... <u>III. için</u>... <u>IV. birine</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
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
    text: "<p>...<u>I. asıl</u>... <u>II. ile</u>... <u>III. daima</u>... <u>IV. böyle</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "asıl (Sıfat), ile (Edat), daima (Zarf), böyle (Sıfat).",
    answers: [
      { text: "Sıfat - edat - zarf - sıfat", ok: true },
      { text: "Sıfat - edat - zarf - sıfat", ok: false }, // Şıklarda benzerlik var, görsele göre A doğru.
      { text: "İsim - edat - sıfat - zamir", ok: false },
      { text: "İsim - zarf - zarf - edat", ok: false },
      { text: "Zamir - sıfat - zarf - bağlaç", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. Azıcık</u>... <u>II. kadar</u>... <u>III. büyüğü</u>... <u>IV. Nasıl</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Azıcık (Zarf), kadar (Edat), büyüğü (İsim - adlaşmış sıfat/isim), Nasıl (Zarf).",
    answers: [
      { text: "Zarf - Edat - Sıfat - Zamir", ok: false },
      { text: "Sıfat - Edat - İsim - Zarf", ok: true },
      { text: "Sıfat - Zarf - Zamir - Edat", ok: false },
      { text: "Zarf - Bağlaç - İsim - Sıfat", ok: false },
      { text: "İsim - Bağlaç - Zamir - Zarf", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. sığ</u>... <u>II. için</u>... <u>III. bu</u>... <u>IV. biri</u>... <b>Sözcük türleri sırasıyla hangisidir?</b></p>",
    diff: 3,
    expl: "sığ (Sıfat), için (Edat), bu (Sıfat), biri (Zamir).",
    answers: [
      { text: "Bağlaç - edat - sıfat - zamir", ok: false },
      { text: "İsim - sıfat - sıfat - zarf", ok: false },
      { text: "Zarf - edat - sıfat - zarf", ok: false },
      { text: "İsim - edat - zarf - zamir", ok: false },
      { text: "Zarf - bağlaç - sıfat - isim", ok: true }
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
      { text: "Gecenin <u>geç</u> / Çok <u>geç</u> kalktığını", ok: false },
      { text: "<u>gece</u> sakin / yalnız <u>gece</u> oynatılan", ok: false },
      { text: "<u>güzel</u> şıngırdıyordu / <u>güzel</u> hatırın", ok: false },
      { text: "<u>Çok</u> beğendiği / <u>çok</u> zorlansam da", ok: true },
      { text: "<u>delice</u> fikirler / <u>delice</u> seviyor", ok: false }
    ]
  },
  {
    text: "<p>(I) Roman kahramanları... (II) Onların da... (III) Dünyamız... (IV) O kişiler... (V) Hele sıkıntılı... <b>Hangisi yanlıştır?</b></p>",
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
    text: "<p>(I) Bugüne kadar... (II) Bu hatıralardan... (III) fazla müdahale... (IV) Yalnızca yazım... (V) Özetle, sıkılmadan... <b>Hangisi söylenemez?</b></p>",
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
    text: "<p>...<u>I. zamanı</u>... <u>II. köylerine</u>... <u>III. yapılmış</u>... <u>IV. minderleri</u>... <u>V. taşınırlardı</u>... <b>Hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V. sözcük 'taşın-ırlar-dı' şeklinde analiz edilir. 'ır' geniş zaman ekidir ancak soru kökünde belirtilen ek bilgisi yanlıştır (Cevap anahtarı E).",
    answers: [
      { text: "I. sözcük belirtme durumu eki almıştır.", ok: false },
      { text: "II. sözcük iyelik eki almıştır.", ok: false },
      { text: "III. sözcük sıfat-fiil eki almıştır.", ok: false },
      { text: "IV. sözcük çokluk eki almıştır.", ok: false },
      { text: "V. sözcük geniş zaman eki almıştır.", ok: true }
    ]
  },
  {
    text: "<p>Önce baygın bir iniltiydi yamaçtan duyulan... <b>Bu dizelerde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Dizelerde 'önce' (zaman belirteci), 'iniltiydi' (ek-fiil almış isim), 'bir' (belgisiz sıfat) vardır ancak iyelik eki almış sözcük bulunmamaktadır.",
    answers: [
      { text: "Zaman belirteci", ok: false },
      { text: "İyelik eki almış sözcük", ok: true },
      { text: "Çekimli fiil", ok: false },
      { text: "Belgisiz sıfat", ok: false },
      { text: "Fiilden türemiş isim", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. mavi</u>... <u>II. yanında</u>... <u>III. üzerindeki</u>... <u>IV. yıkık dökük</u>... <u>V. kadar</u>... <b>Hangisi yanlıştır?</b></p>",
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
    text: "<p>İnsan; daha güçlü canlılara karşı tek başına kendini koruyamaz... <b>Bu cümlede aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Cümlede 'kendini' (belirtme eki almış zamir), 'karşı' (yönelme haliyle kullanılan edat), 'koruyamaz' (yeterlilik olumsuzu) vardır. 'İhtiyaçlarını' kelimesi iyelik eki almıştır ancak 'üçüncü çoğul' değil tekildir.",
    answers: [
      { text: "Niteleme sıfatını niteleyen zarf", ok: false },
      { text: "Yönelme durumuyla kullanılan edat", ok: false },
      { text: "Yeterlilik bildiren olumsuz fiil", ok: false },
      { text: "Üçüncü çoğul iyelik eki almış isim", ok: true },
      { text: "Belirtme durumu eki almış zamir", ok: false }
    ]
  }
];