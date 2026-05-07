import { McQ } from "../../../../types";

// ============================================================================
// FİİLİMSİLER - TEST 1
// ============================================================================
export const TUR_FIILIMSILER_TEST_1: McQ[] = [
  {
    text: "<p>Gezi yazısının başarılı <u>I. olması</u> iyi bir gözlemci <u>II. olmaktan</u> geçer. Geziye <u>III. çıkmadan</u> önce <u>IV. gezilecek</u> yerler hakkında çeşitli kaynaklardan bilgi edinmek, <u>V. görülenleri</u> bu bilgilerle karşılaştırmak gözlemin başarısını arttırır.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi eylemsi değildir?</b></p>",
    diff: 2,
    expl: "I numaralı 'olması' sözcüğü 'ol-ma' şeklinde isim-fiil ekini değil, iyelik ekiyle karıştırılmamalıdır; ancak metne bakıldığında 'gez-i' sözcüğü fiilden isim yapım eki almış bir kalıplaşmış isimdir. Diğerleri isim-fiil, zarf-fiil ve sıfat-fiildir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sanatı bir yansıtma olarak <u>I. yorumlayanlara</u> göre edebiyat, dünyaya <u>II. tutulmuş</u> bir aynadır... <u>III. benimseyen</u> kimi düşünürler... eğitici bir nitelik <u>IV. taşıması</u> <u>V. gerektiğini</u> öne sürerler.</p><p><b>Bu parçada numaralanmış eylemsilerden hangisi diğerlerinden farklıdır?</b></p>",
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
    text: "<p>...Senden <u>I. taşmış</u>, senden <u>II. çıkmış</u> o hesapçılarla!... <u>III. konuşurken</u> neydi o sözcüklerin anlamı?... <u>IV. gidecek</u> sorgular... <u>V. Yaşadıklarının</u> tek tek hesabını vermeye başlayacaksın!</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi fiilimsi değildir?</b></p>",
    diff: 3,
    expl: "IV numaralı 'gidecek' sözcüğü cümlede yüklem görevinde kullanılan gelecek zaman kipi (-ecek) ekini almıştır ve bir ismi nitelememektedir, bu yüzden fiilimsi değildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda verilen dizelerin hangisinde <b>birden çok eylemsi vardır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'durmadan' (zarf-fiil) ve 'oynadıkça' (zarf-fiil) olmak üzere iki adet eylemsi bulunmaktadır.",
    answers: [
      { text: "Senin sorunlarınla diridir sahne / Öz benliğinle yüzleşme yeridir sahne.", ok: false },
      { text: "Dünya sahneden sunar sana kendini / İnsanın ölümsüzleşme yeridir sahne", ok: false },
      { text: "Oyunda durmadan kendini ararsın. / Şu göklerin altında oynadıkça varsın.", ok: true },
      { text: "Aşkın, kederin, umutların, sevincin... / Sen bunları oynayabildiğin kadarsın.", ok: false },
      { text: "Dünün, bugünün, yarının sahnededir / Sahnedir sana tüm boyutlarını veren.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda verilen cümlelerin hangisinde isim-fiil, <b>sıfat görevinde kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "A, B, C ve D seçeneklerinde isim-fiiller (asma, dönme, süzme, sıkma) bir ismi niteleyerek sıfat görevindedir. E seçeneğinde ise 'gelişme' ve 'olgunlaşma' sözcükleri isim görevindedir.",
    answers: [
      { text: "Bugün piyasadaki tüm tavan yapıları arasında en popüler model, modüler asma tavandır.", ok: false },
      { text: "Dönme dolap aslında harem ve selamlık arasına yerleştirilen bir servis dolabının adıdır.", ok: false },
      { text: "Kalsiyum ve demir fosfat takviyesinde çok tercih edilen süzme balda meyve nektarı yoğundur.", ok: false },
      { text: "Sıkma portakal suyunun bir bardağı iki üç adet meyvenin kalorisi içerir.", ok: false },
      { text: "Kışa dayanıklı dikilen sebzeler, haziranda gelişme ve olgunlaşma olasılığına sahiptir.", ok: true }
    ]
  },
  {
    text: "<p>...<u>I. Hoşgörmez</u> bakışlarına karşın... <u>II. övündüğünü</u> bildiği. Dağ başlarına <u>III. döne döne</u> çıkan yolları... <u>IV. çıkan</u> yolları... <u>V. süzülen</u> bir tepkili uçağı...</p><p><b>Bu parçada altı çizili sözcüklerden hangisi niteleme amacıyla kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'övündüğünü' sözcüğü belirtme eki aldığı için artık isim görevindedir ve bir niteleme amacı taşımaz. Diğerleri bir ismi nitelemektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...en belirgin ve <u>I. genelleştirilebilir</u> ortak özelliği... <u>II. seçmiş</u> olmalarıdır... <u>III. kavramaya</u> ve onun doğasını <u>IV. tanımaya çalışarak</u>... <u>V. uğraşındadır</u>...</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi fiilimsi değildir?</b></p>",
    diff: 2,
    expl: "V numaralı 'uğraşındadır' sözcüğü herhangi bir fiilimsi eki almamış bir isimdir. Diğerleri sıfat-fiil, isim-fiil veya zarf-fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>...<u>I. kalıp</u> sözler... <u>II. saklanan</u>... <u>III. üretilmeden</u>... <u>IV. ayrıştırılmadan</u>... <u>V. hatırlanarak</u>...</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı 'kalıp' sözcüğü metinde bir ismi nitelediği için sıfattır. Diğerleri (-en, -meden, -arak) fiilimsi (sıfat-fiil ve zarf-fiil) görevindedir.",
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
    expl: "B seçeneğindeki 'otur-uş şekline' tamlamasında 'oturuş' bir isim-fiildir ve tamlamanın tamlayanı durumundadır.",
    answers: [
      { text: "Aynı boylam üzerinde iki paralel arası kuş uçuşu uzaklık dünyanın her yerinde 111 km’dir.", ok: false },
      { text: "Bir kişinin yalnızca oturuş şekline bakarak bile nasıl bir karakterde olduğunu öğrenebilirmişiz.", ok: true },
      { text: "Bir gezegenin kendi ekseni etrafında daha hızlı dönmesi yüzeyindeki rüzgârların daha şiddetli esmesine yol açabilirdi.", ok: false },
      { text: "Altı çizili kelime ve kelime grubunun anlamı kullanıldıkları cümlenin bağlamından hareketle tahmin edilir.", ok: false },
      { text: "Psikolojinin, bir bilim olarak ortaya çıkıp ele alınması Freud'la başlar.", ok: false }
    ]
  },
  {
    text: "<p>Doğan Cüceloğlu insanı; <u>I. düşünen</u>, <u>II. üreten</u>... <u>III. ürettiklerini</u>... <u>IV. duyuyan</u>... <u>V. olarak</u> tanımlar.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi niteleme amacıyla kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'ürettiklerini' sözcüğü adlaşmış sıfat-fiil olup nesne görevinde kullanılmıştır, niteleme görevi yoktur. Diğerleri sıfat-fiil olarak niteleme yapar.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki verilen dizelerin hangisinde altı çizili <b>sözcük zarf-fiil değildir?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki 'ümidin-ce-dir' sözcüğündeki '-ce' eki eşitlik ekidir, zarf-fiil eki değildir. Diğerlerindeki ekler fiillere gelerek zarf-fiil oluşturmuştur.",
    answers: [
      { text: "bayram ufukta gün bitincedir.", ok: false },
      { text: "Sanki sihirbaz bir el eritincedir.", ok: false },
      { text: "Gökte yıldızların da ümidincedir.", ok: true },
      { text: "Sonsuzlaşarak başı boş gidincedir.", ok: false },
      { text: "Sesimi yalnız kendim işitincedir.", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. diye</u>... <u>II. aksatmadan</u>... <u>III. olarak</u>... <u>IV. yaşadığı</u>... <u>V. uymadığında</u>...</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi bağ-fiil değildir?</b></p>",
    diff: 3,
    expl: "IV numaralı 'yaşadığı' sözcüğü '-dik' sıfat-fiil ekini almıştır. Diğerleri (-a, -madan, -arak, -dığında) zarf-fiil (bağ-fiil) ekleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. oldukları</u>... <u>II. çözemeyip</u>... <u>III. düşenler</u>... <u>IV. olamamanın</u>... <u>V. çalışır</u>...</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi fiilimsi değildir?</b></p>",
    diff: 2,
    expl: "V numaralı 'çalışır' sözcüğü geniş zaman kipiyle çekimlenmiş bir fiildir, fiilimsi değildir.",
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
    expl: "C seçeneğindeki 'yaşananları' sözcüğü bir ismi nitelemek yerine adlaşmış sıfat-fiil görevinde kullanılmıştır. Diğerleri bir ismi niteler.",
    answers: [
      { text: "Çağının duygu ve düşüncelerini yansıtan bir sanatçıydı.", ok: false },
      { text: "Dün aldığımız yarım bilete amorti çıktı yine.", ok: false },
      { text: "Orada yaşananları henüz kimseye anlatmadı.", ok: true },
      { text: "Bu beşinci yaz oldu doğduğum yere gitmeyeli.", ok: false },
      { text: "Yarışmayı kazanan çift, otelimizde ücretsiz kalacak.", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. Aradığınız</u>... <u>II. dilemek</u>... <u>III. güvenmektir</u>... <u>IV. çalışarak</u>... <u>V. gereken</u>...</p><p><b>Numaralanmış fiilimsiler türce eşleştiğinde hangisi dışarıda kalır?</b></p>",
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
    text: "<p>Bir şey bildiğin zaman, onu bildiğini göstermeye çalış... <b>Bu parçayla ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Parçada 'göstermeye' isim-fiili dolaylı tümleç değil, nesne görevindedir. Diğer seçenekler metne uygundur.",
    answers: [
      { text: "Birden fazla ad eylem kullanılmıştır.", ok: true },
      { text: "Üç farklı türde fiilimsi vardır.", ok: false },
      { text: "Bağ fiil cümleye zaman anlamı katmıştır.", ok: false },
      { text: "Adlaşmış sıfat-fiil vardır.", ok: false },
      { text: "İsim-fiil, dolaylı tümleç görevindedir.", ok: false }
    ]
  },
  {
    text: "<p>Geçen günlere yazık... II. dizede birden fazla sıfat-fiil vardır... <b>Bu dizelerle ilgili aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "II. dizedeki 'sevmemiş' ve 'sevilmemişsin' sözcükleri fiilimsi değil, öğrenilen geçmiş zaman kipiyle çekimlenmiş fiillerdir.",
    answers: [
      { text: "I. dizede, ortaç sıfat görevinde kullanılmıştır.", ok: false },
      { text: "II. dizede, birden fazla sıfat-fiil vardır.", ok: true },
      { text: "III. dizede, zarf-fiil bulunmaktadır.", ok: false },
      { text: "IV. dizede, edat grubu eylemsiyi nitelemektedir.", ok: false },
      { text: "V. dizede, bağ fiil durum belirtmektedir.", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. oldukça</u>... <u>II. Giderek</u>... <u>III. alacakmışçasına</u>... <u>IV. bırakıp</u>... <u>V. demeden</u>...</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi zarf-fiil değildir?</b></p>",
    diff: 3,
    expl: "I numaralı 'oldukça' sözcüğü metinde fiili nitelemek yerine bir sıfatın derecesini belirten 'zarf' görevindedir ve fiilimsi özelliğini yitirmiştir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];