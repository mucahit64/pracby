import { McQ } from "../../../../types";

// ============================================================================
// NOKTALAMA İŞARETLERİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Tek başına yürütülen <u>(I)</u> insanlardan yalıtılmış bir hayat yaşamak mıdır mutluluk? Yoksa herkesle aynı şeylere inanarak <u>(II)</u> inanıyormuş gibi yaparak rahat bir hayat yaşamak mı? Herkesle uyum içinde <u>(III)</u> sakince yaşar gibi görünürken kimsenin fark etmediği <u>(IV)</u> bir yerde yazı yazmak mutluluk mudur? Eğer <u>(V)</u> bu sorulara cevap vermek hayli zor.</p><p><b>Bu parçada numaralanmış virgüllerden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "V numaralı virgülün kullanımı yanlıştır. 'Eğer' gibi şart bağlaçlarından sonra virgül kullanılmaz. Cümle akışını bozmaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Görünüşü itibarıyla çok ilginç bir tür olan yeleli kurtların Güney Amerika'da yaşadığını kaçımız biliyorduk ( ) bunu hiç araştırdık mı ( ) Adı kurt, görünüşü tilki gibi olmasına rağmen bu canlılar ne kurt ne de tilkidir ( ) vücutları sırtlanı ( ) kafa yapıları av köpeğini andırır. bu tür ( ) tilkiler ve kurtların dâhil olduğu köpekgiller ailesindendir.</p><p><b>Bu parçada ayraçlarla ( ) belirtilen yerlere aşağıdakilerin hangisinde verilen noktalama işaretleri sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Sıralı soru olduğu için (,), soru bittiği için (?), açıklama/sıralama öncesi (:), eş görevli öge (,) ve özneyi vurgulamak için (;) getirilmelidir.",
    answers: [
      { text: "(?) (...) (,) (;) (,)", ok: false },
      { text: "(,) (?) (:) (,) (;)", ok: true },
      { text: "(,) (?) (:) (,) (;)", ok: false },
      { text: "(,) (!) (:) (,) (,)", ok: false },
      { text: "(?) (!) (;) (,) (;)", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanlar, rasyonel temellere dayandırdıkları görüşlerini gerekçeleriyle ortaya koyar ve etkilerini bekler. (II) Böyle durumlarda bunları ateşli bir şekilde savunmaz, sükûnetini korur ve sonrasında da nedenleri soğukkanlılıkla açıklar. (III) Görüşünü ateşli bir şekilde savunanlar,düşüncelerini rasyonel temellere dayandırmadıkları için şiddetli duygusallık gösterir. (IV) Bu tavır, neredeyse tamamen aşırı duygusallıkla bağlantılıdır. (V) Duygusal tavrı benimseyen kişiler, rasyonel davrananlara göre toplumda daha çok sorun yaşar.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde virgül (,) diğerlerinden farklı bir işlevde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "II. cümlede virgül, sıralı cümleleri ('savunmaz' ve 'korur') ayırmak için kullanılmıştır. Diğer cümlelerde ise özneyi belirtmek için kullanılmıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Şarkılar vesilesiyle hakkında epey bilgiye sahip olduğumuz (I) gitmesek de görmesek de tanıdığımız şehirler var. O şehrin sokaklarına (II) kaldırımlarına (III) insanlarının nelere üzüldüğüne (IV) nelere sevindiğine (V) neleri dert ettiğine dair epey bir bilgi sahibi oluyoruz şarkılarla.</p><p><b>Bu parçada numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 2,
    expl: "II, III, IV ve V numaralı yerlere eş görevli sözcükleri ayırmak için virgül (,) gelmelidir. I numaralı yer ise sıfat tamlamasının arasındadır, herhangi bir işaret gelmez veya anlam akışına göre farklı değerlendirilir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Eskiden Boğaziçi yalılarında oturanların çoğu; kışın İstanbul'a iner ve nisan sonucu <u>(I)</u> mayıs başında Boğaziçi'ne dönerlerdi. Taşıdıkları eşyaların ağırlıklarından başka hiçbir özelliğine aldırış etmeyen <u>(II)</u> ağırları yüklenirken zorlanan fakat ağır olmayanların hafifliklerini de küçümseyen bir edayla kaldıran <u>(III)</u> eşya az gelmiş gibi bir de ağır semerlerini taşıyan emektar hamallar bu göç işini üzerlerine alırlardı. En mahrem <u>(IV)</u> en nadide eşyalarımız bile sanki onların olur ve bize ise yalnız <u>(V)</u> kalplerimizle taşınacak sevinçler kalırdı.</p><p><b>Bu parçada numaralanmış virgüllerden hangisi \"bir kelimenin kendisinden sonra gelen kelime veya kelime grubuyla yapı ve anlam bakımından bağlantısı olmadığını göstermek ve anlam karışıklığını önlemek\" amacıyla kullanılmıştır?</b></p>",
    diff: 3,
    expl: "V numaralı virgül, 'yalnız' kelimesinin sıfat mı yoksa zarf mı olduğu veya cümlede nasıl bağlandığı konusundaki anlam karışıklığını önlemek için kullanılmıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde virgül farklı bir görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A, B, C ve D seçeneklerinde virgül, özneden sonra kullanılarak özneyi vurgulamıştır. E seçeneğinde ise 'başkan' sözcüğünden sonra gelerek eş görevli sözcük gruplarını ayırmıştır.",
    answers: [
      { text: "Lider kişinin özellikle kriz zamanlarında ortaya çıkan kararlı duruşu, grubun psikolojisini etkilediği gibi geleceğe yönelik kaygılarına da tesir eder.", ok: false },
      { text: "Grubun uyumunu artırmak için yapılması gerekenlerden biri, açık iletişimi teşvik etmek ve üyeler arasındaki anlaşmazlıklara çözüm getirmektir.", ok: false },
      { text: "Yöneltici, oluşturduğu küçük gruplardaki iletişim süreçlerinin sağlıklı bir şekilde ilerlemesine zemin hazırlayarak herkesin kendini güvende hissetmesini sağlamalıdır.", ok: false },
      { text: "Normların oluşturulmasında ve devam ettirilmesinde yöneticinin rolüne dikkat edilmeli, grubun sağlıklı normlar oluşturabilmesi için gerekli müdahaleler yapılmalıdır.", ok: true },
      { text: "Grubun başlangıç aşamasında oturumları açan ve gündemi belirleyen başkan, grup üyelerinin ihtiyaçlarını göz önünde bulundurmalıdır.", ok: false }
    ]
  },
  {
    text: "<p>İçimdeki coşkuyu hiç kaybetmedim. Kendimi bildim bileli şu üç şeye âşığım ( ) insana ( ) tabiata ( ) şiire ( ) Bu aşktır insanı diri ve dinç tutan ( ) Altmış yaşımda da Yirmi Yaş Şiirleri'ni yazmıştım.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdaki noktalama işaretlerinden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Açıklama yapılacağı için (:), eş görevli örnekler arasında (,), (,), örnekler bittiği için (.) ve cümle tamamlandığı için (.) getirilmelidir.",
    answers: [
      { text: "(:) (,) (,) (!) (!)", ok: false },
      { text: "(:) (,) (,) (.) (.)", ok: true },
      { text: "(;) (,) (,) (...) (.)", ok: false },
      { text: "(:) (,) (,) (...) (!)", ok: false },
      { text: "(:) (;) (,) (...) (...)", ok: false }
    ]
  },
  {
    text: "<p>Son eserim hakkında bir şair dost dedi ki <u>(:)</u> \"Senin <u>(I)</u> günlüğünde sen çok az varsın <u>(;)</u> ben kendime daha <u>(II)</u> çok yer ayırmanı isterdim <u>(.)</u>\" Oysa bir insanın ken- <u>(III)</u> dini bilmesi <u>(,)</u> tanıması öyle kolay bir iş değildir <u>(;)</u> <u>(IV)</u> kendini yazdıklarıyla anlatması ise daha da zordur. <u>(V)</u></p><p><b>Bu parçada numaralanmış noktalama işaretlerinden hangisinin kullanımı yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı yerdeki noktalı virgül (;) kullanımı yanlıştır. Karşılaştırma yapılan iki yargı arasında virgül yeterlidir veya yapıya göre nokta kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Her dönemin temelde iki tür davranışı vardır ( ) Bir taraftan tanık olduğunu \"saklamak\" ( ) diğer taraftan ise geleceğe \"aktarmak\" ister ( ) İşte bunlar ( ) hangi şartlar altında ( ) hangi duygularla yazılmış olursa olsun üretilen edebî eserlerin muhatap aldığı iki eşik olarak belirliyor.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: (:) açıklama başlar, (;) karşıt durumları ayırır, (.) cümle biter, (,) özne vurgusu ve (,) eş görevli kelime grubu.",
    answers: [
      { text: "(:) (,) (...) (;) (,)", ok: false },
      { text: "(:) (;) (.) (,) (,)", ok: true },
      { text: "(:) (,) (.) (;) (,)", ok: false },
      { text: "(:) (,) (...) (;) (;)", ok: false },
      { text: "(:) (;) (.) (,) (;)", ok: false }
    ]
  },
  {
    text: "<p>(I) Yıldırım Bayazid; kuşatılmış Niğbolu Kalesi'nden haber almak, düşmanın asker sayısını öğrenmek niyetiyle Evrenos Bey'i kaleye yolladı. (II) Fakat Evrenos Bey ne düşmandan esir, ne de içeriden haber alabildi. (III) Yıldırım'ın buna canı sıkıldı, uykuları kaçtı ve gece kimseye haber vermeden atına binip hızla kaleye gitti. (IV) Yüksek bir yere çıktı, biraz soluklanıp gök gürler gibi bir sesle \"Bre Doğan! Bre Doğan! Hâliniz nicedir?\" diye bağırdı. (V) Zaten kale duvarının üzerinde bulunan Doğan Bey, onun sesini duyunca \"Merak buyurmayın Hünkârım! Her taraf muhkem, muhafızlar gece gündüz uyanık, yeteri kadar zahirem mevcut.\" diye karşılık verdi.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde virgül kullanımında yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "II. cümlede 'ne... ne...' tekrarlı bağlacı kullanılmıştır. Kural gereği tekrarlı bağlaçların arasına virgül konulmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];