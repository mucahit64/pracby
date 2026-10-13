import { McQ } from "../../../../types";

// ============================================================================
// NOKTALAMA İŞARETLERİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Tek başına yürütülen <u>(,)</u>(I) insanlardan yalıtılmış bir hayat yaşamak mıdır mutluluk? Yoksa herkesle aynı şeylere inanarak <u>(,)</u>(II) inanıyormuş gibi yaparak rahat bir hayat yaşamak mı? Herkesle uyum içinde <u>(,)</u>(III) sakince yaşar gibi görünürken kimsenin fark etmediği <u>(,)</u>(IV) bir yerde yazı yazmak mutluluk mudur? Eğer <u>(,)</u>(V) bu sorulara cevap vermek hayli zor.</p><p><b>Bu parçada numaralanmış virgüllerden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı virgül yanlış kullanılmıştır. 'kimsenin fark etmediği bir yerde' bir sıfat tamlamasıdır; sıfat ile nitelediği isim arasına virgül konmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Görünüşü itibarıyla çok ilginç bir tür olan yeleli kurtların Güney Amerika'da yaşadığını kaçımız biliyorduk ( ) bunu hiç araştırdık mı ( ) Adı kurt, görünüşü tilki gibi olmasına rağmen bu canlılar ne kurt ne de tilkidir ( ) vücutları sırtlanı ( ) kafa yapıları av köpeğini andırır. bu tür ( ) tilkiler ve kurtların dâhil olduğu köpekgiller ailesindendir.</p><p><b>Bu parçada ayraçlarla ( ) belirtilen yerlere aşağıdakilerin hangisinde verilen noktalama işaretleri sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: sıralı soru cümlelerini ayırmak için (,), soru bittiği için (?), virgül içeren sıralı cümleleri ayırmak için (;), sıralı cümleleri ayırmak için (,) ve özneyi belirtmek için (,) getirilmelidir.",
    answers: [
      { text: "(?) (...) (,) (;) (,)", ok: false },
      { text: "(,) (?) (;) (,) (,)", ok: true },
      { text: "(,) (?) (:) (,) (;)", ok: false },
      { text: "(,) (!) (;) (,) (,)", ok: false },
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
    expl: "I, II, IV ve V numaralı yerlere eş görevli sözcük ve söz öbeklerini ayırmak için virgül (,) gelmelidir. III numaralı yere ise kendi içinde virgülle ayrılmış eş görevli grupları ('sokaklarına, kaldırımlarına' ile 'nelere üzüldüğüne, nelere sevindiğine...') birbirinden ayırmak için noktalı virgül (;) getirilmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Eskiden Boğaziçi yalılarında oturanların çoğu; kışın İstanbul'a iner ve nisan sonucu <u>(,)</u>(I) mayıs başında Boğaziçi'ne dönerlerdi. Taşıdıkları eşyaların ağırlıklarından başka hiçbir özelliğine aldırış etmeyen <u>(,)</u>(II) ağırları yüklenirken zorlanan fakat ağır olmayanların hafifliklerini de küçümseyen bir edayla kaldıran <u>(,)</u>(III) eşya az gelmiş gibi bir de ağır semerlerini taşıyan emektar hamallar bu göç işini üzerlerine alırlardı. En mahrem <u>(,)</u>(IV) en nadide eşyalarımız bile sanki onların olur ve bize ise yalnız <u>(,)</u>(V) kalplerimizle taşınacak sevinçler kalırdı.</p><p><b>Bu parçada numaralanmış virgüllerden hangisi \"bir kelimenin kendisinden sonra gelen kelime veya kelime grubuyla yapı ve anlam bakımından bağlantısı olmadığını göstermek ve anlam karışıklığını önlemek\" amacıyla kullanılmıştır?</b></p>",
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
    expl: "D seçeneğinde virgül, sıralı cümleleri ayırmak için kullanılmıştır. A, B, C ve E seçeneklerinde ise virgül özneden sonra kullanılarak özneyi belirtmiştir.",
    answers: [
      { text: "Lider kişinin özellikle kriz zamanlarında ortaya çıkan kararlı duruşu, grubun psikolojisini etkilediği gibi geleceğe yönelik kaygılarına da tesir eder.", ok: false },
      { text: "Grubun uyumunu artırmak için yapılması gerekenlerden biri, açık iletişimi teşvik etmek ve üyeler arasındaki anlaşmazlıklara çözüm getirmektir.", ok: false },
      { text: "Yönetici, oluşturduğu küçük gruplardaki iletişim süreçlerinin sağlıklı bir şekilde ilerlemesine zemin hazırlayarak herkesin kendini güvende hissetmesini sağlamalıdır.", ok: false },
      { text: "Normların oluşturulmasında ve devam ettirilmesinde yöneticinin rolüne dikkat edilmeli, grubun sağlıklı normlar oluşturabilmesi için gerekli müdahaleler yapılmalıdır.", ok: true },
      { text: "Grubun başlangıç aşamasında oturumları açan ve gündemi belirleyen başkan, grup üyelerinin ihtiyaçlarını göz önünde bulundurmalıdır.", ok: false }
    ]
  },
  {
    text: "<p>İçimdeki coşkuyu hiç kaybetmedim. Kendimi bildim bileli şu üç şeye âşığım ( ) insana ( ) tabiata ( ) şiire ( ) Bu aşktır insanı diri ve dinç tutan ( ) Altmış yaşımda da Yirmi Yaş Şiirleri'ni yazmıştım.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdaki noktalama işaretlerinden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Açıklama yapılacağı için (:), eş görevli örnekler arasında (,), (,), örnekler bittiği için (.) ve cümle tamamlandığı için (.) getirilmelidir.",
    answers: [
      { text: "(;) (,) (,) (!) (!)", ok: false },
      { text: "(:) (,) (,) (.) (.)", ok: true },
      { text: "(;) (,) (,) (...) (.)", ok: false },
      { text: "(,) (,) (,) (...) (!)", ok: false },
      { text: "(:) (;) (,) (.) (...)", ok: false }
    ]
  },
  {
    text: "<p>Son eserim hakkında bir şair dost dedi ki <u>(:)</u>(I) \"Senin günlüğünde sen çok az varsın <u>(;)</u>(II) ben kendine daha çok yer ayırmanı isterdim <u>(.)</u>(III)\" Oysa bir insanın kendini bilmesi <u>(,)</u>(IV) tanıması öyle kolay bir iş değildir <u>(;)</u>(V) kendini yazdıklarıyla anlatması ise daha da zordur.</p><p><b>Bu parçada numaralanmış noktalama işaretlerinden hangisinin kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı yerdeki noktalı virgül (;) yanlıştır. Ögeleri arasında virgül bulunmayan sıralı cümleleri ayırmak için virgül kullanılmalıdır. V numaralı noktalı virgül ise içinde virgül bulunan sıralı cümleleri ayırdığı için doğrudur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Her dönemin temelde iki tür davranışı vardır ( ) Bir taraftan tanık olduğunu \"saklamak\" ( ) diğer taraftan ise geleceğe \"aktarmak\" ister ( ) işte bunlar ( ) hangi şartlar altında ( ) hangi duygularla yazılmış olursa olsun üretilen edebî eserlerin muhatap aldığı iki eşik olarak beliriyor.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: açıklama yapılacağı için (:), sıralı cümleleri ayırmak için (,), cümle bittiği için (.), virgül içeren cümlede özneyi ayırmak için (;) ve eş görevli söz öbeklerini ayırmak için (,) getirilmelidir.",
    answers: [
      { text: "(.) (,) (...) (;) (,)", ok: false },
      { text: "(:) (;) (.) (,) (;)", ok: false },
      { text: "(:) (,) (.) (;) (,)", ok: true },
      { text: "(.) (;) (...) (;) (,)", ok: false },
      { text: "(:) (,) (.) (,) (;)", ok: false }
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
  },
  {
    text: "<p>Yaz mevsimi; pastanelerin girişlerindeki dondurma tezgâhlarında, plaj önlerinde, mahalle aralarında \"Dondurmam kaymak!\" diye bağıran dondurmacılarla belli ederdi geldiğini. Şimdilerde ise dondurma her mevsimde tüketilir; yaz, kış... Bugün yediğimiz dondurma XVI. yüzyılda İtalya'da ortaya çıkar, önce Avrupa'ya oradan da Amerika'ya yayılır. Dondurma ülkemizde yaklaşık yüz yıl önce tüketilmeye başlanır. İlk modern dondurma fabrikamız 1957'de Atatürk Orman Çiftliği'nde açılır.</p><p><b>bu parçada noktalama işaretleriyle ilgili aşağıdaki kurallardan hangisinin bir örneği <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'Yaz mevsimi;' özneden sonra noktalı virgül (A), 'ortaya çıkar, önce...' sıralı cümleler arasında virgül (B), '1957'de' sayıya gelen ekte kesme işareti (C), \"Dondurmam kaymak!\" aktarılan sözde tırnak işareti (D) vardır. Ünlem ve seslenmelerden sonra pekiştirme için kullanılan üç nokta ise yoktur ('yaz, kış...' örneklerin sürdüğünü gösterir).",
    answers: [
      { text: "Eş değer ögeleri arasında virgül bulunan cümlelerde özneden sonra noktalı virgül konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için virgül konur.", ok: false },
      { text: "Sayılara getirilen ekleri ayırmak için kesme işareti konur.", ok: false },
      { text: "Başka bir kimseden aktarılan sözlerin başına sonuna tırnak işareti konur.", ok: false },
      { text: "Ünlem ve seslenmelerden sonra anlatımı pekiştirmek için üç nokta konur.", ok: true }
    ]
  },
  {
    text: "<p>Öğrencilerim hep aynı soruyla karşıma dikiliyor (I) \"Nasıl iyi bir yazar olabiliriz?\" Bu sorunun cevabı o kadar kolay değil. Çünkü hemen her mesleğin uzun zaman isteyen üç aşaması olduğuna inanırım (II) çıraklık, kalfalık, ustalık. \"Peki usta bir yazardan birkaç yıl ders alsak biz de onun gibi olabilir miyiz?\" diye sorduklarında yanlış anlaşıldığımı fark edip açıklama yapmaya devam ederim (III) \"Yetenek de gerekir!\" Yeteneği olmayan kişinin bir mesleğe başlaması da bu yolda gelişip zirveye çıkması da mümkün değildir bana göre (IV) Sonra yine sorarlar (V) \"Yeteneği nasıl ediniriz?\" Bir kez daha tebessüm eder ve \"kader\" derim</p><p><b>Bu parçada numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 2,
    expl: "I, II, III ve V numaralı yerlerden sonra aktarma ya da açıklama geldiği için iki nokta (:) konmalıdır. IV numaralı yerde ise cümle bittiği için nokta (.) konmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir kentin renkleri olabilir mi? Çocukluğumu geçirdiğim İstanbul'un, rüyalarıma bile giren renkleri vardı ( ) Mesela evlerin yakut kırmızısı, zebercet yeşili, gece mavisi, kehribar sarısı kapıları hiç çıkmaz aklımdan. Çocukken hepsini hayran hayran izler ( ) defterime resimlerini çizerdim. Şimdi gökdelenlerin karanlık camlarının renkleri süslüyor şehri. Ben de o korkunç binaları her gördüğümde içimden haykırıyorum ( ) Çocukluğumun renkleri, geri dönün ( )</p><p><b>Bu parçada parantezle belirtilen yerlere, sırasıyla aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?</b></p>",
    diff: 2,
    expl: "Cümle bittiği için (.), sıralı cümleleri ayırmak için (,), aktarılan sözden önce (:) ve seslenme/istek bildiren cümlenin sonuna (!) getirilmelidir.",
    answers: [
      { text: "(.) (,) (:) (!)", ok: true },
      { text: "(.) (,) (;) (.)", ok: false },
      { text: "(:) (;) (.) (!)", ok: false },
      { text: "(:) (;) (:) (!)", ok: false },
      { text: "(.) (;) (,) (.)", ok: false }
    ]
  },
  {
    text: "<p>• Anlatım olarak tanımlanmamış cümlelerden sonra konur.<br>• Ünlem ve seslenmelerde anlamı pekiştirmek için konur.<br>• Herhangi bir sebepten açık yazılmak istenmeyen kelimelerin yerine konur.<br>• Alıntılarda başta, ortada ve sonda alınmayan kelime veya bölümlerin yerine konur.</p><p><b>Üç noktanın kullanımıyla ilgili bu kuralların hangisinin örneği aşağıda verilmemiştir?</b></p>",
    diff: 3,
    expl: "A'da alıntıda alınmayan bölümler, B'de seslenmede pekiştirme ('Hey Nazif...'), D'de açık yazılmak istenmeyen ad ('C...'), E'de tamamlanmamış cümle ('bu hâli...') için üç nokta kullanılmıştır. C'deki üç nokta cevapsız kalan soruyu göstermektedir; bu kullanım verilen kurallar arasında yoktur.",
    answers: [
      { text: "Shakespeare'in bir oyununda geçen şu sözler beni hep etkiler:<br>... Kavgaya girmekten sakın ama girdikten sonra sıkı dayan ki karşısındakinin gözü senden korksun. Herkesi dinle...", ok: false },
      { text: "Gecenin karanlığınca onu kimse görmez, görse de tanıyamaz sanıyordu. Yanılmıştı. Ses kulağına geldiğinde sırtı ürpertiyle gerildi:<br>– Hey Nazif... Nazif diyorum, Nazif...", ok: false },
      { text: "– Her şey olup bittikten sonra çantanı alıp öylece gidebileceğini sanıyorsan aldanıyorsun. Uçağın saat kaçta?<br>– ...<br>– Cevap ver lütfen!", ok: true },
      { text: "Bunca zaman sanki onu biz yetiştirmemişiz gibi, bambaşka davranış kalıplarını benimseyip karşıma C...'in tıpatıp bir kopyası gibi çıkması beni deli ediyor.", ok: false },
      { text: "Oturduğu masadan etrafında dans eden ve havalarda uçuşan kelebekleri görüyor ama yine de dudaklarını kıpırdatıp tek kelime söyleyemiyordu ve bu hâli...", ok: false }
    ]
  },
  {
    text: "<p><u>Gülün Adı'nın</u>(I) ünlü yazarı Umberto Eco 1932 yılında İtalya'nın Alessandria kasabasında doğdu. <u>1950'li</u>(II) yıllarda Radio Audizioni Italiane yani <u>RAI'nin</u>(III) kültür programlarını yönetti. 1959-1975 yılları arasında edebiyat dışı yayınların editörlüğünü üstlendi. Makalelerini ülkesinin önde gelen gazetesi <u>Corriere delta Sera'da</u>(IV) yayımladı. 38 yaşında intisap ettiği <u>Bologna Üniversitesi'nde</u>(V) göstergebilim dersleri verdi.</p><p><b>Bu parçada numaralanmış sözlerin hangisinde kesme işaretinin kullanımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "Kurum, kuruluş ve kurul adlarına getirilen ekler kesme işaretiyle ayrılmaz. Bu nedenle V numaralı söz 'Bologna Üniversitesinde' şeklinde yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Hayatımı derinden etkileyen bazı kitaplardan söz etmek istiyorum <u>(:)</u>(I) İlki yıllarca sürecek bir merakı tutuşturan Rıza Tevfik'in Kamûs-ı Felsefî <u>(,)</u>(II) bir diğer ise Selim Sırrı'nın Terbiye-i Bedeniye Nazariyatı adlı eseridir. Bu ikinci kitap yalnız merakımı alevlendirmekle kalmadı <u>(,)</u>(III) sağlam bir kafanın sağlam bir vücutta olabileceğini telkin ederek jimnastiğe yönelmemi de sağladı. Bunların dışında Suç ve Ceza <u>(;)</u>(IV) baştan sona okuduğum, büyük bir kısmını çevirdiğim <u>(;)</u>(V) hayata bakış açımı değiştiren ilk yabancı kitaptır.</p><p><b>Bu parçada numaralanmış noktalama işaretlerinden hangisinin kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı noktalı virgül yanlıştır. 'baştan sona okuduğum, büyük bir kısmını çevirdiğim, hayata bakış açımı değiştiren' eş görevli söz öbekleridir; aralarına virgül konmalıdır. IV numaralı noktalı virgül, virgül içeren cümlede özneyi ayırdığı için doğrudur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Yüzlerce yıl önce Isaac Newton <u>(,)</u>(I) zamanın mutlak olduğu hükmüne varmıştı. Ona göre zaman daha hızlı veya daha yavaş ilerlemiyordu ve bu <u>(,)</u>(II) evrenin değişmezliğinden kaynaklanıyordu. Newton'ın ortaya attığı fikir <u>(,)</u>(III) peşinden gelenlerin aklında derinlemesine yer etti. Bu görüş <u>(,)</u>(IV) bilimsel bilginin temeli sayıldı. Bu konuda çalışanlar \"zamanın mutlak olması\" kuralını <u>(,)</u>(V) yıkmayı hayal bile edemedikleri için uzun süre aksini düşünemediler.</p><p><b>Bu parçada numaralanmış virgüllerden (,) hangisinin kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "I, II, III ve IV numaralı virgüller özneyi belirtmek için doğru kullanılmıştır. V numaralı virgül ise 'kuralını yıkmayı' söz öbeğini gereksiz yere bölmektedir; burada virgül kullanılmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>İri gövdesi güneşte devasa bir petek gibi ışıldayan palmiyenin yaprakları altında üç kadın oturuyor (I) Fatma Aliye, Halide Edip, Samiha Ayverdi (II) Uzaktan güçlükle işitebildiğim sesleri, vecd hâlinde kovalarına girip çıkan bal arılarının seslerini andırıyor (III) Ne etrafta onları sezen bir baş var ne de onlarda etrafla ilgilenen bir telaş (IV) İki ayrı zaman, aynı tarihî konağın avlusunda akıyor biteviye (V).</p><p><b>Bu parçada numaralanmış yerlerden hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 2,
    expl: "I numaralı yerden sonra 'üç kadın'ın kimler olduğu açıklandığı için iki nokta (:) getirilmelidir. Diğer yerlerde cümle bittiği için nokta (.) getirilmelidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>• Kendinden sonraki cümleye bağlı olarak ret, kabul, teşvik bildiren kelimelerden sonra konur.<br>• Tırnak içinde olmayan alıntı cümlelerden sonra konur.<br>• Anlamı güçlendirmek için tekrarlanan kelimeler arasına konur.<br>• Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.</p><p><b>Aşağıdaki cümlelerin hangisi, virgülün kullanımıyla ilgili bu bilgilerden birine örnek <u>gösterilemez</u>?</b></p>",
    diff: 3,
    expl: "A'da tırnak içinde olmayan alıntı cümleden sonra, B'de teşvik bildiren 'Haydi' sözünden sonra, C'de tekrarlanan 'iyilik' kelimeleri arasında, E'de zarf-fiil eki almış 'sevip' kelimesinden sonra virgül kullanılmıştır. D'deki virgül ise özneyi ('O') belirtmek için konmuştur; bu kural verilenler arasında yoktur.",
    answers: [
      { text: "Benim de söyleyeceklerim vardı elbet sana ama gözlerine bakmakla yetinmeyi bildim, dedi usulca.", ok: false },
      { text: "Haydi, biraz da sen tutun rengârenk kanatlı yaban kuşlarının çıkardığı umut rüzgârına.", ok: false },
      { text: "Hayatta neyin önemli olduğunu anlamak için arkama dönüp bakıyorum ki iyilik, iyilik, hep iyilik.", ok: false },
      { text: "O, bundan yıllar önce her şeyi arkasında bırakıp yeni bir şehre taşındığında kalbindeki aşkı da yitirmişti.", ok: true },
      { text: "İnsan kendini sevip,yaptığı hatalardan ders çıkardıkça içindeki olgunlaşma hissi de tüm benliğini kaplar.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde noktalama yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "C seçeneğinde 'hem... hem de' tekrarlı bağlacı kullanılmıştır. Tekrarlı bağlaçlarla kurulan cümlelerde bağlaçlar arasına virgül konmaz.",
    answers: [
      { text: "Yunus Emre, Divan'ında Türkçenin anlatım zenginliğini ortaya koymuştur.", ok: false },
      { text: "O; romanlardan Huzur'u, şiirlerden ise Kaldırımlar'ı öğrencilerine tavsiye ederdi.", ok: false },
      { text: "Hem bu işten bir pay istiyor, hem de kendine verilince almıyordu.", ok: true },
      { text: "Tarihin her döneminde yeni nesil; farklı, sabırsız, aceleci olarak nitelendirilmiştir.", ok: false },
      { text: "Bu sonuç,katılımcıların 1/3'ünün yeni müzik türlerine ılımlı yaklaştığını göstermektedir.", ok: false }
    ]
  },
  {
    text: "<p>Sahaflar <u>(,)</u>(I) hayatlarını idame ettirmek için bir yandan ticaret yapar bir yandan da tarihî mirasa hiç küçümsenmeyecek katkıda bulunurlar. Bazen bir depodan, tavan arasından <u>(,)</u>(II) bir müştemilat veya kömürlükten çıkarılan eserler hem buralarda telef olmaktan kurtarılmış olur <u>(,)</u>(III) hem de gerekli restorasyon aşamasından geçirilerek onlara direnç kazandırılır. Cildi çürümüş <u>(,)</u>(IV) dağılmış kitaplar ciltlenir. Tozu <u>(,)</u>(V) küfü alınarak varsa rutubeti giderilir; yıpranmış kâğıtlar takviye edilerek güçlendirilir.</p><p><b>Bu parçada numaralanmış virgüllerden hangisinin kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "III numaralı virgül yanlıştır. 'hem... hem de' tekrarlı bağlacıyla kurulan yapılarda bağlaçlar arasına virgül konmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Umberto Eco kendisine yöneltilen bir soru üzerine \"Her türlü bilgiyi hikâye edebilirsiniz.\" der ve bunu özetle şöyle açıklar <u>( )</u>(I) Çocuklara kaplanları anlatmaya çalışıyorsunuz diyelim. Kaplanlar <u>( )</u>(II) kedigiller familyasındandır, boyları şu kadardır <u>( )</u>(III) kuyrukları şöyledir. Bu <u>( )</u>(IV) bilgiyi aktarmadır. Hikâye etmekse şudur <u>( )</u>(V) Kaplanlar ormanlarda yaşar. Turuncu üzerine siyah veya kahverengi elbiseleri vardır. El yerler ama kaldıklarında insanlara bile saldırabilirler.</p><p><b>Bu parçada numaralanmış yerlere sırasıyla aşağıdaki noktalama işaretlerinden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "I: açıklama yapılacağı için (:); II: virgül içeren cümlede özneyi ayırmak için (;); III: sıralı cümleleri ayırmak için (,); IV: özneyi belirtmek için (,); V: açıklama yapılacağı için (:) getirilmelidir.",
    answers: [
      { text: "(;) (:) (;) (,) (.)", ok: false },
      { text: "(:) (;) (,) (,) (:)", ok: true },
      { text: "(.) (;) (,) (;) (:)", ok: false },
      { text: "(.) (,) (:) (,) (;)", ok: false },
      { text: "(:) (;) (,) (;) (.)", ok: false }
    ]
  },
  {
    text: "<p>(I) Halil İnalcık'ı diğer tarihçilerden ayıran önemli hususlardan biri, araştırmalarında tarih dışındaki beşerî bilimlerden de yararlanmasıydı. (II) Edebiyat, hukuk,sosyoloji, soslay antropoloji, iktisat,İslamiyet ve siyaset bilimi; onun araştırmalarındaki temel alanlardandı. (III) İnalcık, hukuk ve sosyolojiyle çok genç yaşlarda tanıştı. (IV) Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi bünyesinde yapılan sınavı kazanarak bu kurumun öğrencisi oldu. (V) Daha sonra Ankara Üniversitesi Hukuk Fakültesi'ne de kayıt yaptırarak eğitim hayatı yoğun bir tempoda devam etti.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde bir noktalama yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "Kurum ve kuruluş adlarına getirilen ekler kesme işaretiyle ayrılmaz. V. cümledeki 'Hukuk Fakültesi'ne' sözü 'Hukuk Fakültesine' şeklinde yazılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Dünya'nın merkezine ulaşmak için binlerce kilometre içeri doğru yol almak gerekir. Merkeze doğru ilerlerken sıcaklık dayanamayacağımız kadar; yaklaşık altı bin derece, yükselir. Bu sebeple Dünya'nın merkezine gidip, orada araştırmalar yapıp dönmemiz kesinlikle mümkün değildir. Hatta bir makine, bir robot göndermemiz bile imkânsızdır. Çünkü göndereceğimiz robot basınç sebebiyle parçalanır, sıcaklıktan dolayı yanar.</p><p><b>Bu parçada virgülün aşağıdaki işlevlerinden hangisinin kullanımı <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada eş görevli kelime grupları ('bir makine, bir robot'), ara söz ('yaklaşık altı bin derece,'), art arda gelen zarf-fiil ('gidip,') ve sıralı cümleler ('parçalanır, ... yanar') için virgül kullanılmıştır. Yüklemden uzak düşmüş özneyi belirtmek için kullanılan virgül ise yoktur.",
    answers: [
      { text: "Birbiri ardınca sıralanan eş görevli kelime gruplarının arasına konur.", ok: false },
      { text: "Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna konur.", ok: false },
      { text: "Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.", ok: false },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için konur.", ok: true },
      { text: "Sıralı cümleleri birbirinden ayırmak için konur.", ok: false }
    ]
  },
  {
    text: "<p>Boğaz ( ) sanki Marmara Denizi'ne inat olsun diye ve kırılgan geçecek bir mevsimi haber verircesine her şeyi birbirine yaklaştırmıştı ( ) mavi suları, balıkları, martıları ( ) Bu mavi gerdanlık ( ) esmeyi unutmuş eski bir rüzgârı, yeni boyanmış ama kurumamış bir sandalı ve Beykozluların komşu seslerini bir arada tutuyordu.</p><p><b>Bu parçada ayraçla ( ) belirtilen yerlere aşağıdakilerin hangisinde verilen noktalama işaretleri sırasıyla getirilebilir?</b></p>",
    diff: 3,
    expl: "Özneyi belirtmek için (,), açıklama yapılacağı için (:), sayılabilecek örneklerin sürdüğünü göstermek için (...) ve virgül içeren cümlede özneyi ayırmak için (;) getirilmelidir.",
    answers: [
      { text: "(;) (,) (...) (:)", ok: false },
      { text: "(,) (;) (.) (:)", ok: false },
      { text: "(,) (,) (...) (;)", ok: false },
      { text: "(,) (:) (.) (,)", ok: false },
      { text: "(,) (:) (...) (;)", ok: true }
    ]
  },
  {
    text: "<p>\"Farklı bir gezegene oradaki kayaların yapısını incelemek için araç gönderebilecek kapasiteye sahip insanlık, milyonlarca insanın açlıkla mücadele etmesini umursamayabiliyor. Mars'a gitmek, yanı başındaki komşuyu ziyaret etmekten daha kolay görünüyor.\" Jose Saramago, 1998 yılında Nobel Edebiyat Ödülü'nü aldığı törende söylüyor bunları. İnsanın yakınındakini görmeden yaşamasına ve insan hayatının değersizleştirilmesine karşı hayatı boyunca mücadele eden yazar; kitaplarında da bu konulara eğilmiş, incelemeler yapmış, kendine özgü ironisiyle insanlığın içinde bulunduğu durumun yıkıcılığını yeşeren bir umutla göstermiştir. Peki bunları nasıl fark ederiz? Özenli okumalarla...</p><p><b>Bu parçada noktalama işaretleriyle ilgili aşağıdaki kurallardan hangisine örnek bir kullanım <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'yazar;' özneden sonra noktalı virgül (A), 'okumalarla...' tamamlanmamış cümle sonunda üç nokta (C), 'Mars'a' kesme işareti (D) ve aktarılan sözde tırnak işareti (E) vardır. Anlama güç kazandırmak için tekrarlanan kelimeler arasında kullanılan virgül ise yoktur.",
    answers: [
      { text: "Virgül bulunan cümlelerde özneden sonra konulan noktalı virgül", ok: false },
      { text: "Anlama güç kazandırmak için tekrarlanan kelimeler arasına konulan virgül", ok: true },
      { text: "Tamamlanmamış cümlelerin sonuna konulan üç nokta", ok: false },
      { text: "özel adlara getirilen durum ekini ayırmak için kullanılan kesme işareti", ok: false },
      { text: "Bir kimseden olduğu gibi aktarılan sözler için kullanılan tırnak işareti", ok: false }
    ]
  },
  {
    text: "<p>XX. yüzyılın son çeyreğinde plansız iç göçler sebebiyle kalabalıklaşan İstanbul; benzer kaderi yaşayan Ankara, İzmir, Bursa gibi şehirlere göre daha çok sorunla baş başa kalmıştır.</p><p><b>Aşağıdakilerin hangisinde noktalı virgül (;) bu cümledeki işleviyle kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Verilen cümlede noktalı virgül, ögeleri arasında virgül bulunan cümlede özneden ('İstanbul') sonra kullanılmıştır. B seçeneğinde de noktalı virgül aynı işlevle özneden ('bu melez metin') sonra kullanılmıştır.",
    answers: [
      { text: "Yazar değil, eleştirmenler; metinler değil, yorumlar yani bakış açıları değiştiği için edebiyat eserlerinin anlamı daima zenginleşmektedir.", ok: false },
      { text: "Kopuk dizelerin, anlatı parçacıklarının, çizimin sınırlarında dolaşan bu melez metin; onun yaşam haritasına göre farklılıklar gösterir.", ok: true },
      { text: "Türkiye, İran, Rusya; Ankara, Tahran,Moskova isimlerinin birbirleriyle münasebetleri açık seçik ortadadır.", ok: false },
      { text: "Tokat'ta yetiştirilen ürünlerin başında domates, biber, fasulye, patates; kiraz, vişne, elma, erik gelir.", ok: false },
      { text: "Lale, sümbül ve karanfil motifleriyle ebru sanatına farklı bir yorum getirmiş; bu sanatın genç kuşaklarca tanınmasına katkıda bulunmuştur.", ok: false }
    ]
  },
  {
    text: "<p>Resim sanatının bizde uyandırdığı duygular kesinlikle renklerden gelmez ( ) incelikle ayırt edilmiş güzel renkler görme duyumuza haz verir ama bu renklere yaşam ve ruh veren şey çizimdir ( ) Etkileyici bir tablonun hatları bir oyma baskıda da bizi etkilemeyi sürdürür ( ) Bu hatları tablodan çıkarın ( ) o zaman renklerin hiçbir şey ifade etmediğini göreceksiniz.</p><p><b>Bu parçada ayraçla gösterilen yerlere sırasıyla aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: anlatılmak istenenin tamamının söylenmediğini göstermek için (...), virgül içeren sıralı cümleleri ayırmak için (;), sıralı cümleleri ayırmak için (,) ve cümle sonunda (!) getirilmelidir.",
    answers: [
      { text: "(.) (;) (,) (.)", ok: false },
      { text: "(...) (;) (,) (!)", ok: true },
      { text: "(,) (.) (.) (,)", ok: false },
      { text: "(!) (.) (;) (.)", ok: false },
      { text: "(;) (.) (,) (...)", ok: false }
    ]
  },
  {
    text: "<p>(I) Demir kapıdan içeri girdik; ağaçlarla çevrili apartmanın girişinde küçük, beyaz perdeli bir dükkâna yaklaştık. (II) Dışarıdan bir resim atölyesi, üstelik Türk sanatının en eski ustalarından birinin atölyesi gibi görünmüyordu. (III) Acaba doğru yere mi geldik diye düşündük? (IV) İçeri girince mütevazı, sevimli, dört bir yanı rengârenk tablolarla çevrilmiş bir atölye ile karşılaştık. (V) Duvarda asılı Afrika maskı, ilk dikkatimizi çeken görüntü oldu.</p><p><b>Bu parçadaki numaralandırılmış cümlelerin hangisinde bir noktalama yanlışı vardır?</b></p>",
    diff: 2,
    expl: "III. cümlede soru, 'diye düşündük' yüklemine bağlı bir iç cümle olarak verilmiştir. Cümlenin yüklemi soru bildirmediği için sonuna soru işareti değil nokta konmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İzohips eğrilerinin özellikleri şöyledir (I) Yeryüzü şekillerinin kuş bakışı görünüşünü tasvir ederler (II) İç içe geçmiş kapalı eğrilerdir (III) Yar (IV) falez gibi yeryüzü şekillerini tam olarak gösteremezler. Dağ doruklarında nokta hâlini alırlar ki (V) bu noktalar da tepeyi işaret eder.</p><p><b>Bu parçadaki numaralanmış yerlerin hangisine herhangi bir noktalama işareti <u>getirilemez</u>?</b></p>",
    diff: 2,
    expl: "I numaralı yere (:), II ve III numaralı yerlere (.), IV numaralı yere (,) getirilebilir. V numaralı yerde ise 'ki' bağlacından sonra noktalama işareti konmaz.",
    answers: [
      { text: "I.", ok: false },
      { text: "II.", ok: false },
      { text: "III.", ok: false },
      { text: "IV.", ok: false },
      { text: "V.", ok: true }
    ]
  }
];
