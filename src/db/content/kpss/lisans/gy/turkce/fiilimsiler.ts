import { McQ } from "../../../../types";

// ============================================================================
// FİİLİMSİLER - TEST 1
// ============================================================================
export const TUR_FIILIMSILER_TEST_1: McQ[] = [
  {
    text: "<p><u>Gezi</u> (I) yazısının başarılı olması iyi bir gözlemci olmaktan geçer. Geziye <u>çıkmadan</u> (II) önce <u>gezilecek</u> (III) yerler hakkında çeşitli kaynaklardan bilgi edinmek, <u>görülenleri</u> (IV) bu bilgilerle <u>karşılaştırmak</u> (V) gözlemin başarısını arttırır.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi eylemsi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "I numaralı 'gez-i' sözcüğü fiilden isim yapım eki almış bir isimdir, fiilimsi değildir. II numaralı 'çık-madan' zarf-fiil, III numaralı 'gez-il-ecek' ve IV numaralı 'gör-ül-en-ler-i' sıfat-fiil, V numaralı 'karşılaştır-mak' isim-fiildir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sanatı bir yansıtma olarak <u>yorumlayanlara</u> (I) göre edebiyat, dünyaya <u>tutulmuş</u> (II) bir aynadır; toplumu, gerçekliği yansıtır. Dolayısıyla da insanı, yaşamı açıklar. Yansıtma kuramını <u>benimseyen</u> (III) kimi düşünürlerse bunu yeterli bulmaz, edebiyatın eğitici bir nitelik <u>taşıması</u> (IV) <u>gerektiğini</u> (V) öne sürerler.</p><p><b>Bu parçada numaralanmış eylemsilerden hangisi diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I, II, III ve V numaralı sözcükler sıfat-fiil (-an, -muş, -en, -dik) eklerini almıştır. IV numaralı 'taşıması' sözcüğü ise isim-fiil (-ma) ekini almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Çaresiz hesaplaşacaksın kendi kendinle! Senden <u>taşmış</u> (I), senden <u>çıkmış</u> (II) o hesapçılarla! Yaşantının, düşüncelerinin, düşlerinin hesabını vereceksin. Soracaklar \"Bunu neden yaptın, şunu niçin söyledin, öyle yaparken neydi amacın, falancanın ardından, filancanın önünden <u>konuşurken</u> (III) neydi o sözcüklerin anlamı?\" Daha da gerilere <u>gidecek</u> (IV) sorgular: İlkokul günlerine dek. <u>Yaşadıklarının</u> (V) tek tek hesabını vermeye başlayacaksın!</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'gidecek' sözcüğüne gelen '-ecek' eki gelecek zaman çekim ekidir ve sözcük cümlenin yüklemidir, bu yüzden fiilimsi değildir. I ve II sıfat-fiil, III zarf-fiil, V adlaşmış sıfat-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda verilen dizelerin hangisinde <b><u>birden çok</u> eylemsi vardır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'durmadan' (zarf-fiil) ve 'oynadıkça' (zarf-fiil) olmak üzere iki adet eylemsi bulunmaktadır.",
    answers: [
      { text: "Senin sorunlarınla diridir sahne<br>Öz benliğinle yüzleşme yeridir sahne.", ok: false },
      { text: "Dünya sahneden sunar sana kendini<br>İnsanın ölümsüzleşme yeridir sahne", ok: false },
      { text: "Oyunda durmadan kendini ararsın.<br>Şu göklerin altında oynadıkça varsın.", ok: true },
      { text: "Aşkın, kederin, umutların, sevincin...<br>Sen bunları oynayabildiğin kadarsın.", ok: false },
      { text: "Dünün, bugünün, yarının sahnededir<br>Sahnedir sana tüm boyutlarını veren.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda verilen cümlelerin hangisinde isim-fiil, <b>sıfat görevinde <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "A, B, C ve D seçeneklerinde isim-fiiller (asma, dönme, süzme, sıkma) bir ismi niteleyerek sıfat görevindedir. E seçeneğinde ise 'gelişme' ve 'olgunlaşma' sözcükleri isim tamlamasının tamlayanı olarak isim görevindedir.",
    answers: [
      { text: "Bugün piyasadaki tüm tavan yapıları arasında en popüler model, modüler asma tavandır.", ok: false },
      { text: "Dönme dolap aslında harem ve selamlık arasına yerleştirilen bir servis dolabının adıdır.", ok: false },
      { text: "Kalsiyum ve demir fosfat takviyesinde çok tercih edilen süzme balda meyve nektarı yoğundur.", ok: false },
      { text: "Sıkma portakal suyunun bir bardağı iki üç adet meyvenin kalorisi içerir.", ok: false },
      { text: "Kışa dayanıklı dikilen sebzeler, haziranda gelişme ve olgunlaşma olasılığına sahiptir.", ok: true }
    ]
  },
  {
    text: "<p>Gözleri çakmak çakmak ona bakardı. <u>Hoşgörmez</u> (I) bakışlarına karşın, babası gibi dedesinin de kendisiyle <u>övündüğünü</u> (II) bilirdi. Dağ başlarına <u>döne döne</u> (III) <u>çıkan</u> (IV) yolları, maviliklerde <u>süzülen</u> (V) bir tepkili uçağı ikisi de akıl etmemişti.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi niteleme amacıyla <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı 'övündüğünü' sözcüğü isim çekim eklerini aldığı için isim görevindedir ve bir niteleme amacı taşımaz. I 'bakışlarına', III 'çıkan', IV 'yolları', V 'uçağı' sözcüğünü nitelemektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat ve psikolojinin en belirgin ve <u>genelleştirilebilir</u> (I) ortak özelliği kendilerine insanın bütününü hedef ve malzeme olarak <u>seçmiş</u> (II) olmalarıdır. Gerçekten de beşeri ve sosyal bilimler içinde edebiyat ve psikoloji dışında insanı bütünüyle <u>kavramaya</u> (III) ve onun doğasını tanımaya <u>çalışarak</u> (IV) yakinen bilmeye dönük bir çabaları yoktur. Her biri insanın bir başka yönünü ele alma <u>uğraşındadır</u> (V). Bunu yapabilmek için de insanı iyi analiz etmek gerekir.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'uğraşındadır' sözcüğü herhangi bir fiilimsi eki almamış bir isimdir. I 'genelleştirilebil-ir' ve II 'seç-miş' sıfat-fiil, III 'kavra-ma-ya' isim-fiil, IV 'çalış-arak' zarf-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>\"Zihinsel üretim ve yapıyı temel alan bir başka tanıma göre <u>kalıp</u> (I) sözler, önceden belirli bir biçime <u>girip</u> (II) öylece hafızada saklanan, söyleneceği sırada yeniden <u>üretilmeden</u> (III) veya dil bilgisel olarak <u>ayrıştırılmadan</u> (IV) olduğu gibi <u>hatırlanarak</u> (V) kullanılan, ardışık veya aralı sözcüklerden oluşan dizidir.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı 'kalıp' sözcüğü '-ıp' yapım eki almış ve 'sözler' ismini nitelediği için sıfattır. Diğerleri (gir-ip, üretil-meden, ayrıştırıl-madan, hatırlan-arak) zarf-fiildir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde isim-fiil, <b>isim tamlamasında tamlayan görevindedir?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki 'otur-uş şekline' tamlamasında 'oturuş' bir isim-fiildir ve tamlamanın tamlayanı durumundadır. A, C ve E seçeneklerindeki isim-fiiller (uçuşu, dönmesi, alınması) tamlanan görevindedir.",
    answers: [
      { text: "Aynı boylam üzerinde iki paralel arası kuş uçuşu uzaklık dünyanın her yerinde 111 km’dir.", ok: false },
      { text: "Bir kişinin yalnızca oturuş şekline bakarak bile nasıl bir karakterde olduğunu öğrenebilirmişiz.", ok: true },
      { text: "Bir gezegenin kendi ekseni etrafında daha hızlı dönmesi yüzeyindeki rüzgârların daha şiddetli esmesine yol açabilirdi.", ok: false },
      { text: "Altı çizili kelime ve kelime grubunun anlamı kullanıldıkları cümlenin bağlamından hareketle tahmin edilir.", ok: false },
      { text: "Psikolojinin, bir bilim olarak ortaya çıkıp ele alınması Freud'la başlar.", ok: false }
    ]
  },
  {
    text: "<p>Doğan Cüceloğlu insanı; <u>düşünen</u> (I), düşündükleriyle yeni şeyler <u>üreten</u> (II), sonra da <u>ürettiklerini</u> (III) başkalarıyla paylaşma gereği <u>duyan</u> (IV) sosyal bir varlık <u>olarak</u> (V) tanımlar.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi niteleme amacıyla <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'ürettiklerini' sözcüğü adlaşmış sıfat-fiil olup belirtme hâl eki aldığı için isim görevindedir, niteleme görevi yoktur. I, II ve IV 'varlık' ismini, V ise 'tanımlar' fiilini niteler.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki verilen dizelerin hangisinde altı çizili <b>sözcük zarf-fiil <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki 'ümit-in-ce-dir' sözcüğünün kökü isim olduğu için zarf-fiil olamaz; buradaki '-ce' eşitlik ekidir. Diğerlerindeki '-IncA' eki fiillere (bit, erit, git, işit) gelerek zarf-fiil oluşturmuştur.",
    answers: [
      { text: "Âlemde gündüz gönlüme işkencedir;<br>Bence bayram ufukta gün <u>bitincedir.</u>", ok: false },
      { text: "Günün geçit vermez karlı dağlarını<br>Sanki sihirbaz bir el <u>eritincedir.</u>", ok: false },
      { text: "Bütün gün beklediğim bahar ki gece,<br>Gökte yıldızların da <u>ümidincedir.</u>", ok: true },
      { text: "Yollar, yollarda nihayet içime denk,<br>Sonsuzlaşarak başı boş <u>gidincedir.</u>", ok: false },
      { text: "Ben ister güleyim, ister ağlayayım,<br>Sesimi yalnız kendim <u>işitincedir.</u>", ok: false }
    ]
  },
  {
    text: "<p>Sigmund Freud ruh sağlığını \"sevmek ve çalışmak\" <u>diye</u> (I) özetler. Bu tanıma göre kendisini, insanları, canlıları, doğayı seven ve rutin işlerini <u>aksatmadan</u> (II) verimli bir şekilde çalışabilen insan ruhsal <u>olarak</u> (III) sağlıklıdır. Ruhsal yönden sağlıklı olan insan, <u>yaşadığı</u> (IV) toplumun kurallarına, gelenek ve göreneklerine uyar; kurallara <u>uymadığında</u> (V) ise çevreyi rahatsız etmeden yaşadığı çatışmayı çözmeyi başarabilir.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi bağ - fiil <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'yaşa-dık-ı' sözcüğü '-dık' sıfat-fiil ekini almıştır. Diğerleri (de-y-e, aksat-madan, ol-arak, uy-ma-dığında) zarf-fiil (bağ-fiil) ekleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Pek hevesli <u>oldukları</u> (I) hâlde, şiirin düğmelerini bir türlü <u>çözemeyip</u> (II) de denemenin peşine <u>düşenler</u> (III) vardır. Şair <u>olamamanın</u> (IV) bütün ezikliğini, hıncını düzyazıdan çıkarmaya <u>çalışır</u> (V) böyleleri. O zavallı cümleler, talihsiz paragraflar neler çeker elinden!</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi fiilimsi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'çalışır' sözcüğü geniş zaman haber kipiyle çekimlenmiş bir fiildir, fiilimsi değildir. I 'ol-duk-lar-ı' ve III 'düş-en-ler' sıfat-fiil, II 'çöz-eme-y-ip' zarf-fiil, IV 'ol-ama-ma-nın' isim-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde sıfat-fiil, <b>ötekilerden farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki 'yaşananları' sözcüğü bir ismi nitelemek yerine adlaşmış sıfat-fiil olarak isim görevinde kullanılmıştır. Diğerleri bir ismi niteler.",
    answers: [
      { text: "Çağının duygu ve düşüncelerini yansıtan bir sanatçıydı.", ok: false },
      { text: "Dün aldığımız yarım bilete amorti çıktı yine.", ok: false },
      { text: "Orada yaşananları henüz kimseye anlatmadı.", ok: true },
      { text: "Bu beşinci yaz oldu doğduğum yere gitmeyeli.", ok: false },
      { text: "Yarışmayı kazanan çift, otelimizde ücretsiz kalacak.", ok: false }
    ]
  },
  {
    text: "<p><u>Aradığınız</u> (I) tüm yanıtları görmek size bağlı. Yapmanız gereken tek şey içinize bakmak, <u>dilemek</u> (II) ve kendinize <u>güvenmektir</u> (III). İçinizdeki en derin sorunların herhangi birine yanıt bulmaya <u>çalışarak</u> (IV) derinliklerinizde bilmeniz <u>gereken</u> (V) her şeye ulaşabilirsiniz.</p><p><b>Bu parçadaki numaralanmış fiilimsiler, türce ikişerli eşleştiğinde hangisi <u>dışarıda</u> kalır?</b></p>",
    diff: 3,
    expl: "I ve V sıfat-fiil, II ve III isim-fiildir. IV numaralı 'çalışarak' sözcüğü zarf-fiildir ve tek kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir şey bildiğin zaman, onu bildiğini göstermeye çalış; bir şey bilmiyorken onu bilmediğini kabul et, işte bu bilgidir.</p><p><b>Bu parçayla ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Parçada yalnızca 'göster-me-y-e' sözcüğü ad eylemdir (isim-fiil); başka ad eylem yoktur. Bu nedenle A yanlıştır. 'Bil-dik-in' sıfat-fiil, 'bilmiyor-ken' zarf-fiil, 'göstermeye' isim-fiil olmak üzere üç farklı fiilimsi vardır. 'Bilmiyorken' cümleye zaman anlamı katmıştır; 'bilmediğini' adlaşmış sıfat-fiildir; 'göstermeye' ise 'Neye?' sorusunun cevabı olarak dolaylı tümleç görevindedir.",
    answers: [
      { text: "Birden fazla ad eylem kullanılmıştır.", ok: true },
      { text: "Üç farklı türde fiilimsi vardır.", ok: false },
      { text: "Bağ fiil cümleye zaman anlamı katmıştır.", ok: false },
      { text: "Adlaşmış sıfat-fiil vardır.", ok: false },
      { text: "İsim-fiil, dolaylı tümleç görevindedir.", ok: false }
    ]
  },
  {
    text: "<p>Geçen günlere yazık, yazık etmişsin gönül sen!<br>Öyleyse hiç sevmemiş, sevilmemişsin gönül sen!<br>Albümdeki o resme bakarken ağladın mı hiç?<br>Çılgın gibi koşarak kırlara uzandın mı hiç?<br>Unutmayıp adını senelerce andın mı hiç?</p><p><b>Bu dizelerle ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "II. dizedeki 'sevmemiş' ve 'sevilmemişsin' sözcükleri fiilimsi değil, öğrenilen geçmiş zaman kipiyle (-miş) çekimlenmiş fiillerdir; bu dizede sıfat-fiil yoktur.",
    answers: [
      { text: "I. dizede, ortaç sıfat görevinde kullanılmıştır.", ok: false },
      { text: "II. dizede, birden fazla sıfat-fiil vardır.", ok: true },
      { text: "III. dizede, zarf-fiil bulunmaktadır.", ok: false },
      { text: "IV. dizede, edat grubu eylemsiyi nitelemektedir.", ok: false },
      { text: "V. dizede, bağ fiil durum belirtmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Ahmet, sınav gününe doğru <u>oldukça</u> (I) stresli bir hâle büründü ama ders çalışmayı her zamankinden daha yoğun bir şekilde sürdürmeye başardı. <u>Giderek</u> (II) artan bir endişeyle notlarını gözden geçirirken, sınavdan yüksek not <u>alacakmışçasına</u> (III) çalışmaya devam etti. Tüm sosyal aktivitelerini <u>bırakıp</u> (IV) sadece sınava odaklandı. Sabah akşam <u>demeden</u> (V) başarıya ulaşmak için elinden geleni yapıyordu.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi zarf-fiil <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "I numaralı 'oldukça' sözcüğü 'stresli' sıfatını derecelendiren bir zarftır; '-dukça' eki temel işlevinin dışına çıktığı için fiilimsi özelliğini yitirmiştir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];
