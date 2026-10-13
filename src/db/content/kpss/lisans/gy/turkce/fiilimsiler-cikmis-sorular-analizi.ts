import { McQ } from "../../../../types";

// ============================================================================
// FİİLİMSİLER ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_FIILLIMSILER_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Tuz; eski devirlerden bu yana ölçünün, kıymet bilmenin sembolü <u>olmuş</u> (I) âdeta. Gıdaları saklamanın başlıca yolu tuzlamak olduğundan tüketim artmış ve zor <u>bulunur</u> (II) bir meta olmuştur. Kullanılır hâle <u>gelmesi</u> (III) için pek çok işlemden geçmesi değerli <u>kılmış</u> (IV) onu. Tuz üretimi, ticareti hatta tüketimi tuz verisiyle denetim altında <u>tutulmuş</u> (V) tarih boyunca.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri fiilimsidir?</b></p>",
    diff: 3,
    expl: "II numaralı 'bulunur' sözcüğü 'meta' ismini niteleyen sıfat-fiil, III numaralı 'gelmesi' ise isim-fiildir. I, IV ve V numaralı sözcükler (olmuş, kılmış, tutulmuş) yüklem görevinde kullanılan çekimli fiillerdir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Çırak törpü çizgileriyle <u>işaretlenmiş</u> (I) tahta parçalarını uzatıyordu fırıncıya. Bütün tahtalar birbirinden farklıydı, tahtalardan kimi <u>yontulmuş</u> (II) kimi dört köşeliydi. Fırıncıda bunların bir kayışa <u>dizilmiş</u> (III) çiftleri vardı. Fırıncı kendi tahtalarının tepesine <u>yazılmış</u> (IV) adı arıyor, müşterilerinki ile karşılaştırıyordu. Müşterilerin tahta parçalarındaki çentikler ile fırıncıdakiler birbirine tamı tamına uyuyordu; I, V, X gibi Romen rakamları müşterilerce <u>alınmış</u> (V) ekmeğin ağırlığını gösteriyordu.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi fiilimsi eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı 'yontulmuş' sözcüğü cümlede yüklem görevindedir ve öğrenilen geçmiş zaman kipi eki almıştır. Diğerleri (-miş) bir ismi niteleyen sıfat-fiil ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanı diğer canlılardan ayıran özelliklerin başında soyut düşünebilmesi ve düşüncelerini dil aracılığıyla ifade edebilmesi gelir. (II) Düşünme, insan davranışlarının en karışık formunu oluştururken zihinsel faaliyetlerinin de en üst düzeyini belirler. (III) İmajlar, şekiller, hayaller ve deneyimlerin yer aldığı bu süreç son derece karmaşıktır. (IV) Bu sürecin birbirinden farklı biçimleri vardır. (V) Örneğin bir matematik problemi çözen veya yaz tatili için plan yapan bir öğrenci, değişik formlarda düşünmektedir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde fiilimsi <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "IV. cümlede herhangi bir fiilimsi (isim-fiil, sıfat-fiil veya zarf-fiil) bulunmamaktadır. Diğer cümlelerde 'ayıran', 'düşünme', 'yer aldığı', 'çözen' gibi fiilimsiler mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bilim insanları, kutup bölgelerinde eriyen buzulları yeniden dondurmanın bir yolunu bulduklarını açıkladı. (II) Bu yönteme göre mikroskobik aerosoller, jetler yardımıyla yeryüzünden 13 km yükseklikteki atmosfere bırakılacak. (III) Kutup bölgelerinin üstünü örten bu aerosoller, güneş ışınlarından gelen radyasyonu uzaya geri dağıtarak ısınmayı engelleyebilecek. (IV) Böylelikle buzul erimesinin engellenmesiyle deniz seviyesinin yükselmesinin önüne geçilecek. (V) Araştırmacılar bu çalışmanın küresel ısınmanın yan etkilerinden yalnızca bir tanesine çare olacağını söylüyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde fiilimsi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "II numaralı cümlede fiilimsi eki almış herhangi bir sözcük bulunmamaktadır. Diğer cümlelerde 'eriyen', 'dağıtarak', 'yükselmesinin', 'olacağını' gibi fiilimsiler vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Tıpkı insanlar gibi şehirlerin de bir yazgısı, ömrü, doğumu ve ölümü vardır. (II) Zamanın karanlık katmanları arasından günümüze ulaşan antik şehirler; farklı dönemlerin, kültürlerin, inançların ve yaşama biçimlerinin tanıklığını yaparlar. (III) Bu nedenle şehirler, uygarlıkların kendi öykülerini yazdıkları bir kitap gibidir. (IV) Onların sayfaları arasında, mazinin acı tatlı anıları gömülüdür ve bunların pek azı tarihin açık sayfalarına yansımıştır. (V) Herhangi bir antik kentin sokaklarını dolaştığınızda, bu kentin tanıtım broşürlerinde yazılandan çok daha fazlasını göreceksiniz.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde fiilimsi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I. cümlede fiilimsi yoktur. IV. cümlede 'gömülüdür' ve 'yansımıştır' çekimli fiillerdir, fiilimsi yoktur. Diğerlerinde 'ulaşan', 'yaşama', 'yazdıkları', 'dolaştığınızda', 'yazılandan' gibi fiilimsiler bulunur.",
    answers: [
      { text: "I ve III", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Gecenin geç saatlerinde her şeyin <u>sustuğu</u> (I), havanın durulduğu anlarda bir köşeye çekilip şiir okurum. Kapalı pencereler ansızın açılır, uyuklayan perdeler birden <u>uçuşmaya</u> (II) başlar. Odaya ilkbahar meltemiyle birlikte taze bir ışık dolar. İçime dolan mısralarda onların <u>atan</u> (III) kalbini duyarım. Bu duyuş, beni benden <u>alır</u> (IV) götürür. Kendimi bu dünyadan değilmişim gibi <u>hafiflemiş</u> (V) bulurum.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'alır' sözcüğü geniş zaman kipiyle çekimlenmiş bir fiildir ('alır götürür'), fiilimsi değildir. I 'sus-tuğ-u' ve III 'at-an' sıfat-fiil, II 'uçuş-ma-ya' isim-fiil, V 'hafifle-miş' sıfat-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Belli belirsiz <u>görünen</u> (I) ağartı, gecenin içinde bir ada gibi yüzüyor. <u>Baktıkça</u> (II) yukarıda bu koyu karanlıkta bile ton <u>değiştirmeleri</u> (III) ile düzensiz çizgiler oluşturan tepeler, tepelerde de gölgeler hâlinde evler beliriyor. Hiç <u>yaşamadığım</u> (IV) bu yerin donuk görüntüsünde, bir ana yurdun silik anısı gömülü. Sabırsızca oradan oraya çarpan kanatlarıyla, doğan günün ışıkları <u>dağıtacak</u> (V) karşımdaki bu buzdan perdeyi.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'dağıtacak' sözcüğü cümlede gelecek zaman kipi eki almış çekimli bir fiildir ve cümlenin yüklemidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Ön yargılar olumlu veya olumsuz olabilen peşin hükümlerdir. (II) Olumlu ön yargılarımız bizi, kendimize benzeyen insanların erdemlerini abartmaya yönlendirir. (III) Olumsuz ön yargılarımız ise bizden farklı kişileri kınamakla sonuçlanır. (IV) Olumsuz ön yargı, belli belirsiz bir hoşnutsuzluk veya ciddi boyutta bir ayrımcılık gibi farklı şekillerde ortaya çıkar. (V) Kültürde kökleşmiş bu tip tutumlar, herkesin bir parça ön yargıya sahip olduğunu gösterir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde fiilimsi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "IV. cümlede fiilimsi bulunmamaktadır. I. cümlede 'olabilen', II. cümlede 'benzeyen' ve 'abartmaya', III. cümlede 'kınamakla', V. cümlede 'kökleşmiş' ve 'olduğunu' fiilimsileri vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Babamın bir yazara fazlasıyla yetecek bin beş yüz kitaplık bir kütüphanesi vardı. (II) Bu kütüphanede bulunan kitapları henüz okumamıştım. (III) Ama hepsini tek tek tanır, kolay okunur kitapları bilirdim. (IV) Bazen bir gün sen de böyle bir kütüphaneye sahip olacaksın derdim kendi kendime. (V) Uzaktan baktığımda babamın kütüphanesi bana bütün âlemin İstanbul'dan baktığımız küçük bir resmi gibi gelirdi.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat-fiile <u>yer verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "IV. cümlede sıfat-fiil yoktur; 'olacaksın' ve 'derdim' çekimli fiillerdir. I. cümlede 'yetecek', II. cümlede 'bulunan', III. cümlede 'okunur', V. cümlede 'baktığımız' sıfat-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ünlü seyyah ve tarihçi İbn Battuta, bir grup insanla birlikte 28 yıl sürecek bir seyahate çıkar. (II) Yolculuk süreci tamamlandığında tecrübe ve izlenimlerinin büyük bir bölümünü kitaplaştırır. (III) Seyahatname türünün ilk örnekleri arasında sayılan bu eser, kaynaklarda <i>Er-Rıhle</i> olarak da geçer. (IV) Kitap, XIV. yüzyıl İslam dünyasının sosyokültürel ve siyasi tarihi için pahabiçilmez bir belgedir. (V) İbn Battuta'nın tespitleri, zamanının tarih yazımına göre alışılmadık tarzda,insan odaklı bir yaklaşımla ortaya konulmuştur.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat-fiil <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "II. cümlede 'tamamlandığında' zarf-fiildir; bu cümlede sıfat-fiil yoktur. I. cümlede 'sürecek', III. cümlede 'sayılan', IV. cümlede 'pahabiçilmez', V. cümlede 'alışılmadık' sıfat-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>ALS hastalığının yanlış <u>katlanmış</u> (I) proteinlerin kümelenip birikmesiyle ilişkisi <u>olduğu</u> (II) biliniyordu. Yine bir araştırmada, bu sürecin bağırsak bakterileri tarafından üretilen proteinlerle başlama ihtimali üzerinde duruldu. Bağırsak bakterilerinin <u>ürettiği</u> (III) amiloid proteininin <u>incelendiği</u> (IV) araştırmalarda, bunun yapısal anlamda beyindeki sorunlu proteinlere çok <u>benzediği</u> (V) fark edildi.</p><p><b>Bu parçadaki altı çizili sözcüklerin hangileri niteleme görevinde <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı 'olduğu' ve V numaralı 'benzediği' sözcükleri adlaşmış sıfat-fiil olarak isim görevinde kullanılmıştır. I 'proteinlerin', III 'amiloid proteininin', IV ise 'araştırmalarda' sözcüğünü nitelemektedir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve V", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Bahar bende umudu, enerjiyi ve <u>yenilenmeyi</u> (I) çağrıştırır. Bahar <u>yaklaştıkça</u> (II) coşkum artar. Çok sıcak <u>olmayan</u> (III) güneşli havaları severim. Yoğun iş tempoma rağmen evimde huzurla vakit <u>geçirmekten</u> (IV) hoşlanırım. Evimde de genelde baharı <u>çağrıştıracak</u> (V) renkler kullanırım.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi zarf-fiildir?</b></p>",
    diff: 2,
    expl: "II numaralı 'yaklaştıkça' sözcüğü '-dıkça' zarf-fiil ekini almıştır. I ve IV isim-fiil, III ve V sıfat-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Eski Troya kenti, Çanakkale'de, bugün Hisarlık olarak <u>adlandırılan</u> (I) yerde bulunuyormuş. Arkeolojik kazılar sonucu <u>kentin kalıntıları</u> (II) büyük ölçüde gün ışığına çıkarılmış. Uluslararası bir <u>araştırma</u> (III) ekibi, toprak örneklerindeki fosillerin yaşını <u>hesaplayarak</u> (IV) Eski Troya kentinin farklı zaman <u>dilimlerindeki</u> (V) durumunu ortaya koymuş.</p><p><b>Bu parçadaki numaralanmış sözlerin hangisi bir zarf-fiildir?</b></p>",
    diff: 2,
    expl: "IV numaralı 'hesaplayarak' sözcüğü '-arak' zarf-fiil ekini almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Orhan Gazi; büyük bir devletin ve medeniyetin kurucusu <u>olmuş</u> (I), Geyikli Baba'nın <u>diktiği</u> (II) çınarla <u>sembolleşen</u> (III) devletin gövdesinin <u>sağlamlaşmasını</u> (IV) ve köklerinin toprağa <u>kopmaz</u> (V) bir bağ ile tutunmasını sağlamış bir şahsiyettir.</p><p><b>Bu cümlede altı çizili fiilimsilerden hangisi, türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'sağlamlaşmasını' sözcüğü isim-fiildir. Diğerleri (-muş, -diği, -en, -maz) sıfat-fiil ekleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İnsanların, başlarına <u>gelen</u> (I) iyi veya kötü her olayı Olympos Dağı'ndaki insan görünümü mitolojik tanrılara bağladığı dönemde doğan Thales; mitolojiden doğa bilimlerine <u>geçişin</u> (II) ilk adımlarını atar. Thales; olayların sebeplerini Olympos'ta değil, doğada <u>arayarak</u> (III) tarihe geçer. Döneminde yadırgansa da akla ve somut gözleme <u>dayandırdığı</u> (IV) fikirleri, pozitif bilimlerin atası olarak <u>görülmesini</u> (V) sağlar.</p><p><b>Bu parçada numaralanmış fiilimsiler tür bakımından ikişerli gruplandırıldığında hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I 'gel-en' ve IV 'dayandır-dığ-ı' sıfat-fiil, II 'geç-iş-in' ve V 'gör-ül-me-si-ni' isim-fiildir. III numaralı 'ara-y-arak' ise zarf-fiildir ve dışarıda kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Japonya'da Batılılaşma <u>olarak</u> (I) adlandırılabileceğimiz Meiji Devrimi'nin genç yöneticileri, ülkelerini dünya lideri <u>yapacak</u> (II) gücü sağlamak için disiplin, <u>tükenmez</u> (III) bir bağlılık, fedakârlık ve <u>yaptığı</u> (IV) işe kendini <u>adayan</u> (V) çalışma tarzı biçimindeki geleneksel samuray değerlerini bu uğurda çok güzel kullandılar.</p><p><b>Bu parçada altı çizili fiilimsilerden hangisinin türü diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'olarak' sözcüğü zarf-fiildir. Diğerleri sıfat-fiil görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Okyanusların ısınmasına aşırı avlanma, kitlesel turizm ve kirliliğin eklenmesiyle yeryüzünün cennet köşelerinden üzüntü veren haberler gelmeye devam ediyor. (II) Örneğin Avustralya'daki Büyük Set Resifi, gerçekleşen iklim değişikliğiyle yakından ilişkili bu olumsuz etkileri en üst seviyede yaşıyor. (III) Mercan resiflerinin beyazlayarak ölmesi okyanusların iklim değişikliğine gösterdiği en açık tepkilerden biri. (IV) Kızıldeniz'in bir ucundaki Akabe Körfezi'nden gelen haberler ise ümit verici. (V) Körfezin yarı kapalı bir havzada bulunması ve aldığı yıllık yağışın azlığı sayesinde buradaki mercan resifleri çok sağlıklı.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde hem isim-fiil hem sıfat-fiil hem de zarf-fiil yer almaktadır?</b></p>",
    diff: 3,
    expl: "III. cümlede 'beyazla-y-arak' (zarf-fiil), 'öl-me-si' (isim-fiil) ve 'göster-diğ-i' (sıfat-fiil) olmak üzere üç fiilimsi türü de yer almaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İnsan bu, su misali, kıvrım kıvrım akar ya;<br>Bir yanda akan benim, öbür yanda Sakarya.<br>Su iner yokuşlardan, hep basamak basamak;<br>Benimse alın yazım, yokuşlarda susamak.<br>Her şey akar; su, tarih, yıldız, insan ve fikir;<br>Oluklar çift; birinden nur akar, birinden kir.<br>Akışta demetlenmiş, büyük, küçük, kâinat;<br>Şu çıkan buluta bak, bu inen suya inat!</p><p><b>Bu şiirde aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Şiirde 'Her şey' (belgisiz sıfat), 'akan, çıkan, inen' (sıfat-fiil), 'susamak' (isim-fiil), 'Şu çıkan buluta, bu inen suya' (işaret sıfatı) vardır; ancak zarf-fiil bulunmamaktadır.",
    answers: [
      { text: "Belgisiz sıfat", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "İsim-fiil", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Zarf-fiil", ok: true }
    ]
  },
  {
    text: "<p>(I) İnsan omurgasında bulunan omurların arasındaki diskler, yer çekiminin etkisiyle sürekli baskı altındadır. (II) Uzayda diskler üzerinde böyle bir baskı oluşmaz. (III) Bu durum, disklerin arasının biraz daha açılmasına sebep olur. (IV) Sonuç olarak uzayda astronotların boyunun uzadığı görülür. (V) Astronotların sırt ağrısı çekmelerinin nedeni de budur.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "II. cümlede edat bulunmamaktadır ('üzerinde' isimdir). I. cümlede 'bulunan' sıfat-fiil, III. cümlede 'açılmasına' isim-fiil, IV. cümlede 'olarak' zarf-fiil, V. cümlede 'de' bağlacı vardır. Bu nedenle B yanlıştır.",
    answers: [
      { text: "I. cümlede sıfat-fiil kullanılmıştır.", ok: false },
      { text: "II. cümlede edat bulunmaktadır.", ok: true },
      { text: "III. cümlede isim-fiil vardır.", ok: false },
      { text: "IV. cümlede zarf-fiil kullanılmıştır.", ok: false },
      { text: "V. cümlede bağlaç bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Küçük Asya'nın en fark edilemeyen noktası Anamur... (II) Dâhil olduğu bölgenin sanki dışında, karadaki ada misali yalnız kalmış bir yer. (III) Hakkında etraflı bilgi edinmek için kaynakları karıştıran birine küçük çapta bir hayal kırıklığı da yaşatabilir. (IV) Çünkü keşfedilmemiş gibi gizemli. (V) Kimsenin tanımadığı ama anlatacak çok şeyi olan bir yabancı gibi...</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıda verilenlerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III. cümledeki 'birine' sözcüğü belgisiz zamirdir; bu cümlede kişi zamiri yoktur. Bu nedenle C yanlıştır. I. cümlede 'en' derecelendirme zarfı, II. cümlede 'kalmış' sıfat-fiili, IV. cümlede 'gibi' edatı, V. cümlede 'ama' bağlacı vardır.",
    answers: [
      { text: "I. cümlede derecelendirme zarfı vardır.", ok: false },
      { text: "II. cümlede sıfat-fiil kullanılmıştır.", ok: false },
      { text: "III. cümlede kişi zamiri bulunmaktadır.", ok: true },
      { text: "IV. cümlede edat kullanılmıştır.", ok: false },
      { text: "V. cümlede bağlaç yer almaktadır.", ok: false }
    ]
  },
  {
    text: "<p>Duvara bir titiz örümcek gibi,<br>İnce dertlerimle işledim bir ağ.<br>Ruhum, gün doğunca sönecek gibi,<br>Şimdiden hayata ediyor veda.</p><p><b>Bu dizelerde aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde 'Şimdiden' (zaman zarfı), 'gibi' (edat), 'veda ediyor' (birleşik eylem), 'bir ağ' (belgisiz sıfat) vardır; ancak isim-fiil (-ma, -ış, -mak) eki almış herhangi bir sözcük bulunmamaktadır.",
    answers: [
      { text: "Zaman zarfı", ok: false },
      { text: "Edat", ok: false },
      { text: "İsim-fiil", ok: true },
      { text: "Birleşik eylem", ok: false },
      { text: "Belgisiz sıfat", ok: false }
    ]
  }
];
