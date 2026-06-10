import { McQ } from "../../../../types";

// ============================================================================
// İDARE HUKUKU - TEST 1
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_1: McQ[] = [
  {
    text: "<p>Bir hukuk dersinde, öğretim görevlisi şu örneği verir:<br><br>\"Ayşe henüz 19 yaşındadır ve üniversite öğrencisidir. Her ne kadar kendi isteğiyle kayıt yaptırmış olsa da öğrenci olmanın getirdiği hak ve yükümlülükler yasa ile belirlenmiştir\".<br><br><b>Bu ifadede idare hukukunun hangi özelliği vurgulanmıştır?</b></p>",
    diff: 1,
    expl: "İdare hukuku, bireylerin toplum içindeki konumlarını (memuriyet, öğrencilik, askerlik gibi) önceden tanımlayan ve bu statüye bağlı hak ve yükümlülükleri düzenleyen statü hukukudur. Bu statüler soyut, kişilik dışı ve süreklidir.",
    answers: [
      { text: "Statü hukukudur.", ok: true },
      { text: "İçtihat hukukudur.", ok: false },
      { text: "Genç bir hukuk dalıdır.", ok: false },
      { text: "Kanunlaştırılmamış bir hukuk dalıdır.", ok: false },
      { text: "Uyuşmazlıkları idari yargıda çözüme bağlanır.", ok: false }
    ]
  },
  {
    text: "<p>İdare hukukunun doğuşunda, Fransız Danıştayı Conseil d'État'nın kararları belirleyici rol oynamıştır. Uzun yıllar boyunca verilen bu kararlar, idare hukukunun temel ilkelerini şekillendirmiş ve birçok ülkede kanunlara yön vermiştir.<br><br><b>Bu durum idare hukukunun hangi özelliğinin bir sonucudur?</b></p>",
    diff: 1,
    expl: "İdare hukukunun var oluşu yargı kararlarına dayanması nedeniyle idare hukukunun içtihatlardan doğan bir hukuk dalı olduğu ifade edilmektedir. İdare hukukunun ortaya çıktığı ve geliştiği ülke olan Fransa'da Conseil d'etat (Fransız Danıştayı) tarafından verilen kararların idare hukukunun doğuşu ve gelişmesinde temel etken olduğu bilinmektedir.",
    answers: [
      { text: "Statü hukuku olması", ok: false },
      { text: "İçtihat hukuku olması", ok: true },
      { text: "Genç bir hukuk olması", ok: false },
      { text: "Bağımsız bir hukuk dalı olması", ok: false },
      { text: "Tedvin edilmemiş bir hukuk dalı olması", ok: false }
    ]
  },
  {
    text: "<p>Medeni hukuk alanında Medeni Kanun veya ceza hukuku alanında Ceza Kanunu gibi kanunlar varken; idare hukukunda \"idare kanunu\" diye genel bir kanun yoktur.<br><br><b>Bu durum idare hukukunun hangi özelliğinin bir sonucudur?</b></p>",
    diff: 1,
    expl: "İdare hukuku kuralları özel hukuk dallarında hatta ceza hukukunda olduğu gibi tek bir metin hâlinde değildir. Keza bu hukuk dallarını düzenleyen metinler de dahi idare hukukuna ilişkin hükümlere rastlamak mümkündür. Dolayısıyla idare hukuku dağınık bir hukuk dalı olarak nitelendirilmektedir. Bu durum idare hukukunun tedvin edilmemiş (kodifiye edilmemiş, derlenmemiş) olmasının bir sonucudur.",
    answers: [
      { text: "İdare hukuku işlemleri tek taraflıdır.", ok: false },
      { text: "İdare hukuku tedvin edilmemiş dağınık bir hukuk dalıdır.", ok: true },
      { text: "İdare hukuku bağımsız bir hukuk dalıdır.", ok: false },
      { text: "İdari hukuk bir statü hukukudur.", ok: false },
      { text: "İdare hukuku genç bir hukuk dalıdır.", ok: false }
    ]
  },
  {
    text: "<p>I. Millî güvenliğin sağlanması<br>II. Kamu hizmetleri<br>III. Kolluk faaliyetleri<br>IV. Özendirme ve destekleme faaliyetleri<br><br><b>Yukarıdakilerden hangileri Türkiye idaresinin görevleri arasında yer alır?</b></p>",
    diff: 1,
    expl: "İdarenin, toplumun gündelik ve ortak ihtiyaçlarını karşılamak ve böylece kamu yararını gerçekleştirmek için yürüttüğü faaliyetlerin tümü idarenin görevlerini oluşturur. Millî güvenliğin korunması, kolluk faaliyetleri, kamu hizmetleri, özendirme ve teşvik faaliyetleri, iç düzen faaliyetleri ve planlama faaliyetleri idarenin görevleri arasındadır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "I, II ve IV", ok: false },
      { text: "II, III ve IV", ok: false },
      { text: "I, II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p>• İdari birimlerin kuruluşu ve teşkilatlanmasının kanunla belirlenmesi<br>• İdarenin ancak yasaların verdiği yetkilerle işlem yapabilmesi<br>• İdarenin keyfi davranmasının önlenmesi<br><br><b>Yukarıdaki ifadeler idare hukuku ilkelerinden hangisinin kapsamına girmektedir?</b></p>",
    diff: 2,
    expl: "Anayasa'nın 123. maddesine göre; idare, kuruluş ve görevleriyle bir bütündür ve kanunla düzenlenir. İdarenin kuruluşu ve görevleri kanunla düzenlenir. Bu ifadeden yola çıkarak idarenin kanuna dayanması gerektiği, diğer bir deyişle idareyi düzenleme yetkisinin TBMM'ye ait olduğunu söylemek gerekir. Bu ilkeye \"idarenin kanuniliği\" ilkesi denir.",
    answers: [
      { text: "Yetki genişliği", ok: false },
      { text: "Merkezden yönetim", ok: false },
      { text: "İdarenin kanuniliği", ok: true },
      { text: "Yerinden yönetim", ok: false },
      { text: "İdarenin bütünlüğü", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, merkezden yönetim ilkesinin sonucu değildir?</b></p>",
    diff: 3,
    expl: "Merkezden yönetim, kamu hizmetlerinin merkezî otorite tarafından yürütüldüğü ve taşradaki kamu görevlilerinin merkeze bağlı olarak faaliyet gösterdiği bir idari örgütlenme biçimidir. A, B, D ve E seçenekleri, merkezî yönetimin taşra uzantıları olan kurum ve görevliler aracılığıyla yürütülen hizmetlere örnektir. C seçeneği ise, yerel yönetim olan belediye meclisinin aldığı karara ilişkindir ve merkezî hiyerarşiye tabi değildir.",
    answers: [
      { text: "Sağlık Bakanlığının il müdürlükleri aracılığıyla aşı kampanyası yürütmesi", ok: false },
      { text: "Valinin, ilçelere personel görevlendirmesi", ok: false },
      { text: "Belediye meclisinin, kentteki otopark ücretlerini belirlemesi", ok: true },
      { text: "Millî Eğitim Bakanlığının, tüm okullarda ortak sınav yapılmasına karar vermesi", ok: false },
      { text: "Kaymakamın ilçe müftülüğü üzerindeki hiyerarşik denetimi", ok: false }
    ]
  },
  {
    text: "<p>I. Mali denetimi güçleştirmesi<br>II. Bürokrasi ve kırtasiyeciliğe neden olması<br>III. Bölgeler arası eşitsizlikleri artırması<br>IV. Demokratik ilkelere uygun olmaması<br><br><b>Yukarıdakilerden hangileri idare hukukunda yerinden yönetimin sakıncaları arasında yer alır?</b></p>",
    diff: 2,
    expl: "Yerinden yönetimin sakıncaları: Ülke bütünlüğünün sarsılması tehlikesi vardır. Hizmetlerin tüm ülke çapında standart yürütülmesi güçleşir (bölgeler arası eşitsizlikleri artırır). Partizanca uygulamalar yüzünden kamu görevlileri yerel etki altında kalırlar. Mali denetiminde güçlükler yaşanabilir. Bürokrasiye neden olması ve demokratik ilkelere uygun olmaması ise 'merkezden yönetimin' sakıncalarıdır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>I. Hiyerarşi<br>II. İdari vesayet<br>III. Yetki genişliği<br>IV. Kanuni idare<br><br><b>İdarenin bütünlüğü yukarıdaki hukuki araçlardan hangileri ile sağlanır?</b></p>",
    diff: 1,
    expl: "İdareyi oluşturan örgütlerin görevleri yönüyle de bir bütünlük göstermeleri gerekmektedir. İdarenin gerek kuruluş ve gerek görevleri yönünden bütünlüğü, hiyerarşi ve idari vesayet olarak adlandırılan belli başlı iki hukuki araç ile gerçekleştirilmektedir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Danıştay bir kararında \"Silsile-i meratip gereği üst, astın işlemlerini yerindelik ve hukukilik bakımından denetleyerek işlemi iptal edebilir, geri alabilir, düzeltebilir, ancak astın yerine geçerek karar alamaz, ast da yargısal başvuru hakkına sahip değildir.\" demiştir.<br><br><b>Bu ifadede belirtilen dava açma yasağı, aşağıdaki idare hukukuna ilişkin kavramlardan hangisinin bir gereğidir?</b></p>",
    diff: 2,
    expl: "Danıştayın bu kararında açıklanan yapı, aynı kamu tüzel kişiliği içinde üst-ast ilişkisini düzenleyen ve astın işlemlerini denetleme yetkisi veren \"hiyerarşi\" kavramına özgüdür. Hiyerarşide ast, idari makamlar üstlerinin kararlarına karşı dava açamaz, çünkü aynı kamu tüzel kişiliği içindedirler ve meşru menfaat ilişkisi yoktur.",
    answers: [
      { text: "Hukuka uygunluk karinesi", ok: false },
      { text: "İdari vesayet", ok: false },
      { text: "Tek taraflı işlem", ok: false },
      { text: "Hiyerarşi", ok: true },
      { text: "Takdir yetkisi", ok: false }
    ]
  },
  {
    text: "<p>Danıştay kararında; \"---- Anayasamıza göre sadece il idaresinde uygulanabilmekte ve merkeze ait olan karar alma yetkisinin illerde Valiler tarafından kullanılması sonucunu yaratmakta, sonuçta merkezî idarenin ortaya çıkardığı sorunların kısmen de olsa giderilmesini amaçlamaktadır.\" şeklinde açıkladığı idare hukukuna ilişkin anayasal ilke aşağıdakilerden hangisidir?</p>",
    diff: 1,
    expl: "Danıştay kararında tanımlanan bu yapı, 1982 Anayasası'nın 126. maddesi ile bağlantılı olan 'yetki genişliği' ilkesine işaret etmektedir. Sadece valiler için geçerli olan bu anayasal ilkeye göre, valiler merkezî idare adına illerde görev yapar ve bazı konularda merkeze danışmadan karar alabilir.",
    answers: [
      { text: "Kamu tüzel kişiliği", ok: false },
      { text: "Yetki devri", ok: false },
      { text: "İdari vesayet", ok: false },
      { text: "Hiyerarşi", ok: false },
      { text: "Yetki genişliği", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdaki idari birimlerden hangisi yetki genişliği ile yönetilmektedir?</b></p>",
    diff: 1,
    expl: "Yetki genişliği ilkesi, merkezden yönetim sisteminde görev yapan taşra yöneticilerinin (sadece Valilerin), sadece merkezden gelen emirleri uygulamakla kalmayıp, kanunla doğrudan kendilerine tanınan bazı karar alma yetkilerini de kullanabilmesini ifade eder. İller merkezî idarenin taşra teşkilatıdır ve bu ilke sadece 'illerde' (Valilerde) uygulanır.",
    answers: [
      { text: "Merkezden yönetimin taşra örgütü olan iller", ok: true },
      { text: "Ankara Büyükşehir Belediyesi", ok: false },
      { text: "Merkezden yönetimin taşra örgütü olan ilçeler", ok: false },
      { text: "Çorum İl Özel İdaresi", ok: false },
      { text: "Yükseköğretim Kurulu", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi \"yetki genişliği ilkesi\" ile ilgili doğru bir ifade değildir?</b></p>",
    diff: 2,
    expl: "Yetki genişliği ilkesi, 1982 Anayasası'nın 126. maddesinde düzenlenmiş olup, sadece illerde görev yapan valilere tanınmış anayasal bir esneklik ilkesidir. Bu yetki merkezî idarenin taşra temsilcisi olan valilere özgüdür. \"Yerel yönetimlerin hizmet alanlarını genişletir.\" ifadesi yanlıştır; çünkü yetki genişliği yerel yönetimlerle değil, merkezî idarenin taşra teşkilatıyla ilgilidir.",
    answers: [
      { text: "Taşra örgütü olan \"iller\"de uygulanmaktadır.", ok: false },
      { text: "Yalnızca Valiler tarafından kullanılır.", ok: false },
      { text: "Yerel yönetimlerin hizmet alanlarını genişletir.", ok: true },
      { text: "Merkezden yönetimin bir istisnasıdır.", ok: false },
      { text: "Bürokrasi ve kırtasiyeciliği azaltır.", ok: false }
    ]
  },
  {
    text: "<p>Kamu görevlileri, kendilerine verilmiş olan görevleri, kendi görüş ve anlayışlarına göre değil, amirlerinin istediği şekilde ve yönde yerine getirmek zorundadırlar.<br><br><b>Memurun, amirinin vermiş olduğu emirlere uyma zorunluluğunun istisnası aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Hiyerarşik amir, astın işlemlerini değiştirebilir. Ancak astın yerine geçerek işlem tesis edemez. Yine hiyerarşide üst asta emir verebilir ancak KANUNSUZ EMİR bu durumun istisnasıdır.",
    answers: [
      { text: "Şartlı emir", ok: false },
      { text: "Kanunsuz emir", ok: true },
      { text: "Yetki devri", ok: false },
      { text: "Dengeleyici emir", ok: false },
      { text: "Kanuna uygun emir", ok: false }
    ]
  },
  {
    text: "<p>Sabri, bir kamu kurumunda çalışan memurdur. Bir gün, amirinden, kurumun iç düzenlemelerine aykırı bir şekilde bazı dosyaların gizlenmesi talimatı alır. Sabri, bu durumun suç olduğunu fark eder ve hemen amirine durumu bildirir. Ancak, amiri, Sabri'nin itirazını dinlemeden aynı talimatı yazılı olarak yeniden verir.<br><br><b>1982 Anayasası'na göre, yukarıdaki olay ile ilgili verilenlerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Kanunsuz emir kurallarına göre konusu suç teşkil eden emir, hiçbir suretle yerine getirilmez; yerine getiren kimse sorumluluktan kurtulamaz (B doğru, A doğru, E doğru). Amir emri yazılı olarak yenilese bile konusu suç ise yerine getirilmez (C doğru). Ancak 'Yazılı olarak yenilenen hukuka aykırı bir emir, suç teşkil etmiyorsa yerine getirilir ve sorumluluk emri verene aittir' kuralı geçerlidir. Olayda emir 'suç teşkil ettiği' için Sabri yazılı yenilense bile emri yerine getirmemelidir.",
    answers: [
      { text: "Sabri, konusu suç teşkil ettiği için bu emri hiçbir şekilde yerine getiremez.", ok: false },
      { text: "Konusu suç teşkil eden emri yerine getiren kişi sorumluluktan kurtulamaz.", ok: false },
      { text: "Talimat yazılı olarak yenilense bile Sabri'nin bu talimatı uygulamaması gerekir.", ok: false },
      { text: "Yazılı olarak yenilenen hukuka aykırı bir emir, suç teşkil etmiyorsa yerine getirilir ve sorumluluk emri verene aittir.", ok: true },
      { text: "Konusu suç teşkil eden yazılı emir yerine getirilirse yalnızca emri veren sorumlu olur.", ok: false }
    ]
  },
  {
    text: "<p>Danıştay bir kararında \"---- Kamu düzenini ve idarede bütünlüğü sağlamak için kamu yararı amacıyla, kanunların verdiği yetkiye dayanarak, merkezî idarenin, yerel yönetim organları ve bunların bazı işlemleri ile harcamaları üzerinde, kamu hizmetlerinin gereklerine uygun olarak kullanılan bir denetim şeklidir.\" şeklinde ifade etmiştir.<br><br><b>Buna göre yukarıda ifade edilen idare hukuku terimi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Bu tanım idari vesayet kavramını birebir karşılamaktadır. İdari vesayet, merkezî idarenin yerinden yönetim kuruluşları (örneğin belediyeler, il özel idareleri, üniversiteler, meslek kuruluşları) üzerinde kanunla sınırlı şekilde ve kamu yararı amacıyla yaptığı hukuka uygunluk denetimidir.",
    answers: [
      { text: "Yetki genişliği", ok: false },
      { text: "İdari vesayet", ok: true },
      { text: "Düzenli idare", ok: false },
      { text: "Yetkide paralellik", ok: false },
      { text: "Hiyerarşi", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 2
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_2: McQ[] = [
  {
    text: "<p>Köy Kanunu m. 40'ta yer alan, \"Köy muhtarının köylü faydasına olmayan kararlarını kaymakam bozabilir. Fakat, onun yerine kaymakam kendiliğinden karar veremez.\" ifadesi aşağıdakilerden hangisi ile ilişkilidir?<br><br><b> </b></p>",
    diff: 2,
    expl: "Köy Kanunu m. 40'ta geçen \"kaymakamın muhtarın kararını bozabileceği ancak yerine geçip karar veremeyeceği\" düzenlemesi, idari vesayet ilkesinin temel özelliğini yansıtır. Merkezî idarenin yerinden yönetim kuruluşları (köy idaresi) üzerindeki sınırlı ve istisnai nitelikteki denetimi idari vesayettir.",
    answers: [
      { text: "Hiyerarşi", ok: false },
      { text: "İdari vesayet", ok: true },
      { text: "Yetki genişliği", ok: false },
      { text: "Düzenli idare", ok: false },
      { text: "Kanuni idare", ok: false }
    ]
  },
  {
    text: "<p>Belediye Kanunu madde 6'ya göre, \"Belediye sınırları, belediye meclisinin kararı ve kaymakamın görüşü üzerine valinin onayı ile kesinleşir.\" ifadesinde belediye kararının merkezden yönetimin görevlilerinin onamasına sunulması idare hukukuna ilişkin aşağıdaki ilkelerden hangisinin bir sonucudur?<br><br><b> </b></p>",
    diff: 1,
    expl: "Devlet tüzel kişiliğini temsil eden merkezî yönetimin (kaymakam ve vali), yerinden yönetim kuruluşları (belediye) üzerinde sahip olduğu denetim yetkisine idari vesayet denir.",
    answers: [
      { text: "Yetki genişliği", ok: false },
      { text: "Yetkide paralellik", ok: false },
      { text: "Hiyerarşi", ok: false },
      { text: "Takdir yetkisi", ok: false },
      { text: "İdari vesayet", ok: true }
    ]
  },
  {
    text: "<p>İdari vesayet, özellikle üniter yapılı devletlerde merkezden yönetim ile yerinden yönetim alanı arasında idari açıdan bütünlük sağlamaya yarayan denetim mekanizmasıdır.<br><br><b>Aşağıdakilerden hangisi idari vesayet ile denetlenemez?</b></p>",
    diff: 2,
    expl: "İl Emniyet Müdürü, doğrudan merkezden yönetimin taşra teşkilatı içinde (Devlet tüzel kişiliği içinde) yer alır. Dolayısıyla İl Emniyet Müdürü üzerindeki denetim idari vesayet değil, hiyerarşik denetimdir.",
    answers: [
      { text: "Köy muhtarı", ok: false },
      { text: "Belediye meclisi", ok: false },
      { text: "İl genel meclisi", ok: false },
      { text: "Belediye başkanı", ok: false },
      { text: "İl emniyet müdürü", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangileri arasındaki ilişki \"hiyerarşi\" ilişkisi değildir?</b></p>",
    diff: 2,
    expl: "Hiyerarşi, tüzel kişinin kendi içindeki astlık-üstlük ilişkisidir. Bakan-vali, vali-il millî eğitim müdürü, kaymakam-ilçe nüfus müdürü aynı tüzel kişilik (Devlet) içindedir ve aralarında hiyerarşi vardır. Belediye başkanı-belediye zabıta müdürü de aynı tüzel kişilik (Belediye) içindedir ve hiyerarşi vardır. Ancak vali (Devlet) ile belediye başkanı (Belediye) ayrı kamu tüzel kişilikleri oldukları için aralarındaki ilişki idari vesayettir, hiyerarşi değildir.",
    answers: [
      { text: "Bakan – vali", ok: false },
      { text: "Vali – belediye başkanı", ok: true },
      { text: "Vali – il millî eğitim müdürü", ok: false },
      { text: "Kaymakam – ilçe nüfus müdürü", ok: false },
      { text: "Belediye başkanı – belediye zabıta müdürü", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangi ikisi arasında \"idari vesayet\" ilişkisi yoktur?</b></p>",
    diff: 2,
    expl: "İdari vesayet farklı kamu tüzel kişilikleri arasında (Devletin yerinden yönetimleri denetlemesi veya bir yerinden yönetimin diğerini denetlemesi) olur. Kaymakam ve İlçe Millî Eğitim Müdürü ikisi de 'Devlet Tüzel Kişiliği' içinde yer aldıkları için aralarındaki ilişki idari vesayet değil, 'hiyerarşi' ilişkisidir.",
    answers: [
      { text: "İçişleri Bakanı – Belediye başkanı", ok: false },
      { text: "Vali – Belediye başkanı", ok: false },
      { text: "Kaymakam – Köy muhtarı", ok: false },
      { text: "Vali – Köy muhtarı", ok: false },
      { text: "Kaymakam – Millî eğitim müdürü", ok: true }
    ]
  },
  {
    text: "<p>I. Kanun<br>II. Cumhurbaşkanı Kararnamesi<br>III. Yönetmelik<br><br><b>1982 Anayasası'na göre, kamu tüzel kişiliği yukarıdakilerden hangileri ile kurulur?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre (m.123), kamu tüzel kişiliği kanunla veya Cumhurbaşkanlığı Kararnamesi ile kurulur. Yönetmelikle kamu tüzel kişiliği kurulamaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisinin kamu tüzel kişiliği Anayasa'da belirtilmemiştir?</b></p>",
    diff: 3,
    expl: "Anayasa'da bizzat kamu tüzel kişiliği düzenlenmiş kurumlar: Devlet, il özel idaresi, belediyeler, köyler, üniversiteler, TRT, Atatürk Kültür, Dil ve Tarih Yüksek Kurumu ve kamu kurumu niteliğindeki meslek kuruluşlarıdır. Yükseköğretim Kurulu (YÖK), Anayasa'da düzenlenen bir kuruluş olmakla birlikte, tüzel kişiliğini Anayasa'dan alan bir kurum değildir (kanunla kurulur).",
    answers: [
      { text: "TRT", ok: false },
      { text: "Atatürk Kültür, Dil ve Tarih Yüksek Kurumu", ok: false },
      { text: "Üniversiteler", ok: false },
      { text: "Belediyeler", ok: false },
      { text: "Yükseköğretim Kurulu", ok: true }
    ]
  },
  {
    text: "<p>I. Belediye idaresi<br>II. Büyükşehir belediye idaresi<br>III. İl özel idaresi<br>IV. Diyanet İşleri Başkanlığı<br>V. Emniyet Genel Müdürlüğü<br><br><b>Yukarıdaki idare organlarından hangilerinin kamu tüzel kişiliği yoktur?</b></p>",
    diff: 2,
    expl: "Belediye idaresi, büyükşehir belediye idaresi ve il özel idaresi birer kamu tüzel kişisidir (Mahalli idareler). Ancak Diyanet İşleri Başkanlığı ve Emniyet Genel Müdürlüğü doğrudan Devlet tüzel kişiliği içinde yer alırlar, kendilerine ait ayrı bir kamu tüzel kişilikleri yoktur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "IV ve V", ok: true },
      { text: "II, III ve IV", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "I, III ve V", ok: false }
    ]
  },
  {
    text: "<p>Yargıtay içtihadına göre \"Hukuk devleti ilkesinin idare bakımından diğer bir gereği de idari faaliyetlerin belirliliği ilkesidir. Hukuk devletinde idarenin eylem ve işlemlerinin nitelikleri ve sonuçları önceden tahmin edilebilir olması gerekir. İdare takdir yetkisine sahip olduğu durumlarda dahi tam bir serbestiye sahip değildir. İdare bu yetkisini tüzük ve yönetmelik gibi genel kurallarla düzenlemek ve bu düzenlemelere kendi de uymak zorundadır.\"<br><br><b>Buna göre yukarıda ifade edilen idare hukuku terimi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Bu içtihat, hukuk devleti ilkesinin idare hukukuna yansıması olan \"düzenli idare ilkesi\"ni (belirlilik ilkesi) açıkça ifade etmektedir. Bu ilke uyarınca idare keyfi davranamaz, kurallara uymalı, işlemleri öngörülebilir ve istikrarlı olmalıdır.",
    answers: [
      { text: "Yetki genişliği ilkesi", ok: false },
      { text: "Düzenli idare ilkesi", ok: true },
      { text: "Yetkide ve usulde paralellik ilkesi", ok: false },
      { text: "Hiyerarşi", ok: false },
      { text: "Fiilî yol", ok: false }
    ]
  },
  {
    text: "<p><b>1 sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, en yüksek dereceli devlet memuru olan kişi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1 sayılı Cumhurbaşkanlığı Kararnamesi'ne göre (m.12), en yüksek dereceli devlet memuru Cumhurbaşkanlığı İdari İşler Başkanı'dır (eski adıyla Cumhurbaşkanlığı Genel Sekreteri).",
    answers: [
      { text: "Vali", ok: false },
      { text: "Cumhurbaşkanlığı İletişim Başkanı", ok: false },
      { text: "Cumhurbaşkanı Yardımcısı", ok: false },
      { text: "Cumhurbaşkanlığı Genel Sekreteri", ok: true },
      { text: "Strateji ve Bütçe Başkanı", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Yüksek Askerî Şûranın üyeleri arasında yer almaz?</b></p>",
    diff: 3,
    expl: "Yüksek Askerî Şûranın üyeleri; Cumhurbaşkanı yardımcıları, Adalet Bakanı, Dışişleri Bakanı, İçişleri Bakanı, Hazine ve Maliye Bakanı, Millî Eğitim Bakanı, Millî Savunma Bakanı ve Genelkurmay Başkanı ile Kuvvet Komutanlarıdır. Sağlık Bakanı bu kurulun üyesi değildir.",
    answers: [
      { text: "Adalet Bakanı", ok: false },
      { text: "Hazine ve Maliye Bakanı", ok: false },
      { text: "Sağlık Bakanı", ok: true },
      { text: "Millî Eğitim Bakanı", ok: false },
      { text: "Genelkurmay Başkanı", ok: false }
    ]
  },
  {
    text: "<p><b>1 sayılı Cumhurbaşkanlığı Kararnamesi'ne göre, Cumhurbaşkanlığına bağlı, özel bütçeli, kamu tüzel kişiliğini haiz, idarî ve malî özerkliğe sahip ofis aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Cumhurbaşkanlığı Kararnamesi'ne göre Cumhurbaşkanlığına bağlı olarak İletişim Ofisi (Başkanlığı değil), Yatırım ve Finans Ofisi, Dijital Dönüşüm Ofisi, İnsan Kaynakları Ofisi gibi kurumlar kurulmuştur. Bunlar arasında kamu tüzel kişiliğine ve özel bütçeye sahip olarak tanımlanan ofis \"Yatırım ve Finans Ofisi\"dir.",
    answers: [
      { text: "İletişim Ofisi", ok: false },
      { text: "Yatırım ve Finans Ofisi", ok: true },
      { text: "Dijital Dönüşüm Ofisi", ok: false },
      { text: "Güvenlik Ofisi", ok: false },
      { text: "İnsan Kaynakları Ofisi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Cumhurbaşkanlığına bağlı kurum ve kuruluşlar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Devlet Arşivleri Başkanlığı, Strateji ve Bütçe Başkanlığı, Millî Saraylar İdaresi Başkanlığı, Millî İstihbarat Teşkilatı vb. doğrudan Cumhurbaşkanlığına bağlı kurumlardır. Avrupa Birliği Başkanlığı da bağlıdır. Ancak 'Siber Güvenlik Başkanlığı' adında doğrudan Cumhurbaşkanlığına bağlı bir başkanlık bulunmamaktadır (Siber Güvenlik Kurulu vardır).",
    answers: [
      { text: "Devlet Arşivleri Başkanlığı", ok: false },
      { text: "Strateji ve Bütçe Başkanlığı", ok: false },
      { text: "Avrupa Birliği Başkanlığı", ok: false },
      { text: "Siber Güvenlik Başkanlığı", ok: true },
      { text: "Millî Saraylar İdaresi Başkanlığı", ok: false }
    ]
  },
  {
    text: "<p>I. Kurullar, en az üç üyeden oluşur.<br>II. Cumhurbaşkanı, kurulların başkanıdır.<br>III. Kurul üyeleri, Cumhurbaşkanı tarafından atanır.<br><br><b>Cumhurbaşkanlığına bağlı politika kurulları hakkında yukarıda verilen ifadelerden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Cumhurbaşkanlığı politika kurulları en az 3 üyeden oluşur. Kurul üyeleri Cumhurbaşkanınca atanır ve kurulların başkanı Cumhurbaşkanı'dır. (Cumhurbaşkanı kurul üyelerinden birini başkan vekili olarak görevlendirir). Her üç ifade de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Başkente yardımcı kuruluşlar, Cumhurbaşkanı ve bakanlıklara görevlerinde yardımcı olmak, görüş bildirmek üzere teşkil edilmiş olan kurul ve kuruluşlardır.<br><br><b>Aşağıdaki kurumlardan hangisi bu kuruluşlar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Danıştay, Sayıştay, Millî Güvenlik Kurulu ve Ekonomik ve Sosyal Konsey merkezî idareye yardımcı kuruluşlardır. Ancak Yüksek Seçim Kurulu (YSK) anayasal bir yargı ve seçim merciidir, yürütmeye/idareye yardımcı kuruluş statüsünde değildir.",
    answers: [
      { text: "Millî Güvenlik Kurulu", ok: false },
      { text: "Ekonomik ve Sosyal Konsey", ok: false },
      { text: "Sayıştay", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: true },
      { text: "Danıştay", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Ekonomik ve Sosyal Konsey hangi organa istişarî nitelikte görüş bildirmekle görevlidir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın mülga olmayan hükümlerine göre Ekonomik ve Sosyal Konsey, ekonomik ve sosyal politikaların belirlenmesinde Cumhurbaşkanı'na istişari nitelikte görüş bildirmekle görevlidir.",
    answers: [
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Hazine ve Maliye Bakanlığı", ok: false },
      { text: "Ticaret Bakanlığı", ok: false },
      { text: "Sanayi ve Teknoloji Bakanlığı", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 3
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_3: McQ[] = [
  {
    text: "<p>İdare hukuku açısından devlet tüzel kişiliğine \"merkezî idare\" veya \"genel idare\" denilmektedir. Merkezî idare ise başkent ve taşra olmak üzere ikiye ayrılmıştır.<br><br><b>Buna göre merkezî idare içinde aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 1,
    expl: "Devlet tüzel kişiliği, merkezî idare olarak adlandırılır ve başkent (Bakanlıklar, Genel Müdürlükler) ile taşra (Valilik, Kaymakamlık) teşkilatından oluşur. Adalet Bakanlığı, Emniyet Genel Müdürlüğü, Ankara Valiliği ve Buca Kaymakamlığı merkezî idarenin parçalarıdır. Ege Üniversitesi ise özerk bir kamu tüzel kişiliğine sahip olan yerinden yönetim kuruluşudur.",
    answers: [
      { text: "Adalet Bakanlığı", ok: false },
      { text: "Emniyet Genel Müdürlüğü", ok: false },
      { text: "Ankara Valiliği", ok: false },
      { text: "Buca Kaymakamlığı", ok: false },
      { text: "Ege Üniversitesi", ok: true }
    ]
  },
  {
    text: "<p>Yönetim reformu kapsamında İçişleri Bakanlığı,<br>• Bazı ilçelerin il yapılmasını,<br>• Bazı illerin adlarının değiştirilmesini,<br>• Bazı ilçelerin başka bir ile bağlanmasını<br>• Bazı illerin merkezlerinin değiştirilmesini<br>önermiştir.<br><br><b>5442 sayılı İl İdare Kanunu'na göre, bu önerinin gerçekleşmesi aşağıdakilerden hangisine bağlıdır?</b></p>",
    diff: 2,
    expl: "İl İdaresi Kanunu'na göre; yeni bir ilin kurulması, mevcut bir ilin adının değiştirilmesi, bir ilçenin il yapılması, il merkezinin değiştirilmesi gibi idari statüyü etkileyen işlemler ancak kanunla yapılabilir. İçişleri Bakanlığı öneride bulunabilir ancak bu değişikliklerin hayata geçmesi için TBMM tarafından bir kanun kabul edilmesi gerekir.",
    answers: [
      { text: "Cumhurbaşkanlığı Kararnamesi", ok: false },
      { text: "İçişleri Bakanı onayı", ok: false },
      { text: "İl genel meclisi kararı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi tarafından kabul edilen kanun", ok: true },
      { text: "Danıştay kararı", ok: false }
    ]
  },
  {
    text: "<p>I. Adliye teşkilatı<br>II. Emniyet teşkilatı<br>III. Askerî teşkilat<br><br><b>5442 sayılı İl İdare Kanunu'na göre, yukarıdakilerden hangileri valinin idari denetim ve gözetim yetkisi kapsamında olan birimlerden biri değildir?</b></p>",
    diff: 2,
    expl: "İlgili kanunun 9. maddesine göre, vali ve kaymakam 'adli ve askerî teşkilat dışında' kalan bütün devlet daire, müessese ve işletmelerini, özel iş yerlerini, özel idare, belediye, köy idareleriyle bunlara bağlı tekmil müesseseleri denetler, teftiş eder. Adliye (I) ve Askerî (III) teşkilat denetim dışıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türk idare hukukunda \"il genel idaresi\" ile ilgili olarak;</b><br><br>I. İllerin idaresi yetki genişliğine dayanır.<br>II. Türkiye illere, iller de kademeli bölümlere ayrılır.<br>III. Vali, ilin mülki amiridir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Türkiye illere, iller de diğer kademeli bölümlere (ilçe, bucak vb.) ayrılır. İllerin idaresi anayasal bir ilke olan 'yetki genişliği' esasına dayanır. İlin en yüksek hiyerarşik (mülki) amiri validir. Her üç ifade de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>5442 sayılı İl İdare Kanunu'na göre, vali hakkında aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Vali, ilde Cumhurbaşkanı'nın temsilcisi olup, idari yürütme vasıtasıdır. Ataması Cumhurbaşkanı kararıyla yapılır ve istisnai memuriyet statüsündedir. Cumhurbaşkanı yardımcıları ve bakanlar, valilere doğrudan emir ve talimat verebilirler. Ancak valinin mahallî idareler (belediye, il özel idaresi, köy idaresi) üzerindeki yetkisi hiyerarşi değil, 'idari vesayet' yetkisidir. Hiyerarşi yalnızca aynı tüzel kişilik (Devlet) içinde geçerlidir.",
    answers: [
      { text: "Cumhurbaşkanı kararıyla atanır.", ok: false },
      { text: "İlde, Cumhurbaşkanının temsilcisi, idari yürütme vasıtasıdır.", ok: false },
      { text: "İstisnai memuriyet statüsündedir.", ok: false },
      { text: "İldeki mahallî idareler üzerinde hiyerarşi yetkisini kullanır.", ok: true },
      { text: "Cumhurbaşkanı yardımcıları ve bakanlar, valiye re'sen emir verebilirler.", ok: false }
    ]
  },
  {
    text: "<p><b>5442 sayılı İl İdaresi Kanunu'na göre, kaymakamlık mesleğiyle ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Kaymakam, ilçede Cumhurbaşkanı'nın ve devletin temsilcisidir. Ataması Cumhurbaşkanı onayıyla yapılır. Ancak kaymakamlık, valilik gibi 'istisnai memuriyet' değil; sınav, staj gibi aşamalardan geçilerek girilen bir kariyer (güvenceli) mesleğidir.",
    answers: [
      { text: "Kaymakam, ilçedeki en yüksek mülki idare amiridir.", ok: false },
      { text: "Kaymakam, ilçede Cumhurbaşkanı'nın temsilcisi ve idari yürütme vasıtasıdır.", ok: false },
      { text: "Kaymakam, ilçedeki kamu düzeninin sağlanmasından ve genel yönetimin yürütülmesinden sorumludur.", ok: false },
      { text: "Kaymakam, Cumhurbaşkanı onayı ile görevlendirilir.", ok: false },
      { text: "Kaymakamlık, istisnai memuriyet statüsündedir.", ok: true }
    ]
  },
  {
    text: "<p><b>5442 sayılı İl İdare Kanunu'na göre, aşağıdakilerden hangisi il idare kurulu üyeleri arasında yer almaz?</b></p>",
    diff: 3,
    expl: "İl idare kurulu, valinin başkanlığı altında; hukuk işleri müdürü, defterdar, millî eğitim müdürü, bayındırlık müdürü (çevre ve şehircilik), sağlık ve sosyal yardım müdürü, tarım ve veteriner müdürlerinden teşekkül eder. Emniyet müdürü bu kurulun bir üyesi değildir.",
    answers: [
      { text: "Emniyet müdürü", ok: true },
      { text: "Hukuk işleri müdürü", ok: false },
      { text: "Defterdar", ok: false },
      { text: "Millî eğitim müdürü", ok: false },
      { text: "Tarım ve veteriner müdürü", ok: false }
    ]
  },
  {
    text: "<p>5442 sayılı İl İdare Kanunu'na göre,<br>• bir ilin sınırlarının değiştirilmesi,<br>• bir ilin kurulması,<br>• bir ilçenin adının değiştirilmesi<br><br><b>sırasıyla aşağıdaki işlemlerden hangisi ile olur?</b></p>",
    diff: 3,
    expl: "İllerin kurulması, kaldırılması, adlarının değiştirilmesi KANUN ile olur. İlçelerin kurulması, kaldırılması, adlarının değiştirilmesi KANUN ile olur. Bir ilin veya ilçenin sınırlarının değiştirilmesi (başka bir ile bağlanması vb.) ise CUMHURBAŞKANI ONAYI ile olur. Sırasıyla: İl sınırı (CB Onayı) - İl kurulması (Kanun) - İlçe adının değiştirilmesi (Kanun).",
    answers: [
      { text: "Kanun – Cumhurbaşkanı onayı – Kanun", ok: false },
      { text: "Cumhurbaşkanı onayı – Kanun – Kanun", ok: true },
      { text: "Kanun – Kanun – Kanun", ok: false },
      { text: "Cumhurbaşkanı onayı – Cumhurbaşkanı onayı– Kanun", ok: false },
      { text: "Kanun – Kanun – Cumhurbaşkanı Kararnamesi", ok: false }
    ]
  },
  {
    text: "<p>Demir arkadaşı Mehmet'e merkezden yönetim içerisinde bir kadroya memur olarak atandığını söylemiştir.<br><br><b>Buna göre Demir, aşağıdakilerden hangisinde görev yapıyor olamaz?</b></p>",
    diff: 2,
    expl: "Merkezden yönetim (Devlet tüzel kişiliği), başkent ve taşra teşkilatlarından oluşur. Valilik, Kaymakamlık, İl Millî Eğitim Müdürlüğü, İlçe Emniyet Müdürlüğü devletin taşra teşkilatı (merkezden yönetim) içindedir. Ancak Belediye, yerinden yönetim kuruluşudur (ayrı bir kamu tüzel kişiliğidir). Demir, Tunceli Belediyesi'nde görev yapıyor olamaz.",
    answers: [
      { text: "Tunceli Belediyesi", ok: true },
      { text: "Burdur Valiliği", ok: false },
      { text: "Rize İl Millî Eğitim Müdürlüğü", ok: false },
      { text: "Biga Kaymakamlığı", ok: false },
      { text: "Mersin Emniyet Müdürlüğü", ok: false }
    ]
  },
  {
    text: "<p>Mahallî idareler; ----, ---- ve ---- olmak üzere üç ana birimden oluşur ve her biri kamu tüzel kişiliğine sahiptir.<br><br><b>1982 Anayasası m. 127'ye göre, yukarıdaki boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 127. maddesine göre mahallî idareler; il özel idaresi, belediye ve köy halkının mahallî müşterek ihtiyaçlarını karşılamak üzere kurulan kamu tüzel kişileridir. Valilik ve Kaymakamlık taşra teşkilatıdır (merkezden yönetim). Mahalle ise tüzel kişiliği olmayan bir birimdir.",
    answers: [
      { text: "Valilik – Belediye – Köy", ok: false },
      { text: "İl özel idaresi – Kaymakamlık – Belediye", ok: false },
      { text: "İl özel idaresi – Belediye – Köy", ok: true },
      { text: "Belediye – Mahalle – İl emniyeti", ok: false },
      { text: "İl özel idaresi – Belediye – Mahalle", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, mahallî idareler ile ilgili;</b><br><br>I. Seçimleri 5 yılda bir yapılır.<br>II. Birer kamu tüzel kişisidir.<br>III. Seçilmiş organlarının organlık sıfatına İçişleri Bakanı son verir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Mahalli idarelerin seçimleri 5 yılda bir yapılır (I doğru) ve her biri birer kamu tüzel kişisidir (II doğru). Ancak mahalli idarelerin seçilmiş organlarının organlık sıfatını kaybetmeleri yargı yoluyla (Danıştay kararıyla) olur. İçişleri Bakanı sadece geçici olarak görevden uzaklaştırabilir, sıfata son veremez (III yanlış).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Isparta Ticaret Odası<br>II. Kutlu Mahallesi<br>III. Erzurum Büyükşehir Belediyesi<br><br><b>Yukarıdakilerden hangileri mahallî idare kuruluşları arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Mahallî idareler; il özel idaresi, belediye (büyükşehir dahil) ve köyden oluşur. Ticaret Odası, kamu kurumu niteliğinde meslek kuruluşudur, mahallî idare değildir. Mahalle ise, belediye sınırları içinde tüzel kişiliği olmayan bir birimdir, ayrı bir mahallî idare değildir. Dolayısıyla Ticaret Odası (I) ve Mahalle (II) mahallî idare sayılmaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, mahallî idarelerin belirli kamu hizmetlerinin görülmesi amacı ile kendi aralarında aşağıdakilerden hangisinin izni ile birlik kurmaları mümkündür?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 127. maddesine göre; Mahallî idarelerin belirli kamu hizmetlerinin görülmesi amacı ile kendi aralarında Cumhurbaşkanının izni ile birlik kurmaları mümkündür.",
    answers: [
      { text: "İçişleri Bakanı", ok: false },
      { text: "Mahallî idare meclisleri", ok: false },
      { text: "Cumhurbaşkanı", ok: true },
      { text: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı", ok: false },
      { text: "Danıştay", ok: false }
    ]
  },
  {
    text: "<p><b>İl halkının mahallî ve müşterek nitelikteki ihtiyaçlarını karşılamak üzere kurulan ve karar organı seçmenler tarafından seçilerek oluşturulan, idari ve mali özerkliğe sahip kamu tüzel kişisi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İl halkının (tüm il sınırları içindeki) mahalli ve müşterek ihtiyaçlarını karşılamak üzere kurulan, karar organı seçmenlerce seçilen yerel yönetim birimi \"İl Özel İdaresi\"dir. İl genel idaresi merkezî yönetimin taşra teşkilatıdır (tüzel kişiliği yoktur). Belediye ise belde halkının ihtiyaçları için kurulur.",
    answers: [
      { text: "İl genel idaresi", ok: false },
      { text: "Büyükşehir belediye idaresi", ok: false },
      { text: "İl özel idaresi", ok: true },
      { text: "Bakanlık bölge müdürlüğü", ok: false },
      { text: "Belediye idaresi", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de kaç ilde il özel idaresi tüzel kişiliği bulunmaktadır?</b></p>",
    diff: 2,
    expl: "2012 yılında yayımlanan 6360 sayılı Kanun ile büyükşehir belediyesi olan 30 ilde, il özel idarelerinin tüzel kişiliği kaldırılmıştır. Türkiye'de toplam 81 il bulunduğuna göre; büyükşehir olmayan geriye kalan 51 ilde il özel idaresi tüzel kişiliği bulunmaya devam etmektedir.",
    answers: [
      { text: "28", ok: false },
      { text: "30", ok: false },
      { text: "51", ok: true },
      { text: "75", ok: false },
      { text: "81", ok: false }
    ]
  },
  {
    text: "<p>I. Tüzel kişiliğinin temsilcisi, idari yürütme vasıtası validir.<br>II. Karar organı il genel meclisidir.<br>III. Görev alanı il sınırlarını kapsar.<br><br><b>Yukarıda verilen bilgiler aşağıdaki idarelerden hangisine ilişkindir?</b></p>",
    diff: 1,
    expl: "Verilen özellikler \"İl Özel İdaresi\"ne aittir. İl özel idaresinin temsilcisi ve yürütme organı validir. Karar organı il genel meclisi, danışma organı il encümenidir. Görev alanı ise tüm il sınırlarını kapsar.",
    answers: [
      { text: "İl genel idaresi", ok: false },
      { text: "Büyükşehir belediyesi", ok: false },
      { text: "İl özel idaresi", ok: true },
      { text: "Belde belediyesi", ok: false },
      { text: "Mahalle", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 4
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_4: McQ[] = [
  {
    text: "<p><b>Belde sakinlerinin mahallî müşterek nitelikteki ihtiyaçlarını karşılamak üzere kurulan ve karar organı seçmenler tarafından seçilerek oluşturulan, idarî ve mali özerkliğe sahip kamu tüzel kişisi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "5393 sayılı Belediye Kanunu'na göre, belde sakinlerinin mahallî müşterek nitelikteki ihtiyaçlarını karşılamak amacıyla kurulan ve karar organları halk tarafından seçilen, idari ve mali özerkliğe sahip kamu tüzel kişisine \"belediye\" denir. Mahalle ve bucak birer idari birim olup tüzel kişiliğe sahip değildir.",
    answers: [
      { text: "Mahalle", ok: false },
      { text: "Bucak", ok: false },
      { text: "Kaymakamlık", ok: false },
      { text: "Belediye", ok: true },
      { text: "İl idare kurulu", ok: false }
    ]
  },
  {
    text: "<p><b>5393 sayılı Belediye Kanunu'na göre, bir beldenin adı, aşağıdakilerden hangisinin onayıyla değişir?</b></p>",
    diff: 2,
    expl: "Bir beldenin adı, belediye meclisi üye tam sayısının en az dörtte üç çoğunluğunun kararı ve valinin görüşü üzerine İçişleri Bakanlığının onayı ile değiştirilir.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Mülki amir", ok: false },
      { text: "İçişleri Bakanlığı", ok: true },
      { text: "Belediye meclisi", ok: false },
      { text: "Çevre, Şehircilik ve İklim Değişikliği Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki tabloda, il özel idaresi, belediye ve köy idaresine ait organlar verilmiştir.<br><br>• İl Özel İdaresi / Karar Organı: İl genel meclisi / Yürütme Organı: Genel sekreter / Danışma Organı: İl encümeni<br>• Belediye / Karar Organı: Belediye meclisi / Yürütme Organı: Belediye başkanı / Danışma Organı: Belediye encümeni<br>• Köy / Karar Organı: İhtiyar meclisi / Yürütme Organı: Muhtar / Danışma Organı: Köy encümeni<br><br><b>Yukarıda verilen organlardan hangi ikisi hatalı yazılmıştır?</b></p>",
    diff: 3,
    expl: "İl özel idaresinin yürütme organı validir (Genel sekreter değildir). Köy idaresinin danışma organı ise köy derneğidir (Köy encümeni diye bir organ yoktur). Diğer organlar (Belediye meclisi, ihtiyar meclisi, belediye encümeni vb.) doğru eşleştirilmiştir.",
    answers: [
      { text: "Belediye başkanı – il genel meclisi", ok: false },
      { text: "Genel sekreter – köy encümeni", ok: true },
      { text: "Belediye meclisi – köy muhtarı", ok: false },
      { text: "Genel sekreter – belediye encümeni", ok: false },
      { text: "İl encümeni – köy encümeni", ok: false }
    ]
  },
  {
    text: "<p>Çankırı'nın Orta ilçesine bağlı Dodurga Köyü 28 Nisan 2022'de belde olmuştur.<br><br><b>5393 sayılı Belediye Kanunu m. 4'e göre, bir yerleşim yerinde belediye kurulabilmesi için asgari nüfus aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Nüfusu 5.000 ve üzerinde olan yerleşim birimlerinde belediye kurulabilir. İl ve ilçe merkezlerinde belediye kurulması zorunludur.",
    answers: [
      { text: "2.000", ok: false },
      { text: "3.000", ok: false },
      { text: "5.000", ok: true },
      { text: "7.5000", ok: false },
      { text: "10.000", ok: false }
    ]
  },
  {
    text: "<p><b>Köylerin veya muhtelif köy kısımlarının birleşerek belediye kurabilmeleri için meskûn sahalarının, merkez kabul edilecek yerleşim yerinin meskûn sahasına azami ne kadar metre mesafede bulunması gerekir?</b></p>",
    diff: 2,
    expl: "Köylerin veya muhtelif köy kısımlarının birleşerek belediye kurabilmeleri için meskûn sahalarının, merkez kabul edilecek yerleşim yerinin meskûn sahasına azami 5.000 metre mesafede bulunması ve nüfusları toplamının 5.000 ve üzerinde olması gerekir.",
    answers: [
      { text: "1.000", ok: false },
      { text: "2.000", ok: false },
      { text: "3.000", ok: false },
      { text: "5.000", ok: true },
      { text: "7.500", ok: false }
    ]
  },
  {
    text: "<p><b>5393 sayılı Belediye Kanunu m. 4'e göre,</b><br><br>I. il merkezlerinde,<br>II. büyük köy merkezlerinde,<br>III. ilçe merkezlerinde<br><br><b>hangilerinde belediye kurulması zorunludur?</b></p>",
    diff: 1,
    expl: "Nüfusu 5.000 ve üzerinde olan yerleşim birimlerinde belediye kurulabilir. Ancak nüfusa bakılmaksızın \"İl ve ilçe merkezlerinde\" belediye kurulması zorunludur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>5216 sayılı Büyükşehir Belediye Kanunu'na göre büyükşehir belediyeleri ile ilgili olarak;</b><br><br>I. Kanunla kurulur.<br>II. Sınırları il mülki sınırlarıdır.<br>III. Toplam nüfusu 750.000'den fazla olan illerde kurulabilir.<br><br><b>ifadelerinden hangileri doğrudur?</b></p>",
    diff: 1,
    expl: "Toplam nüfusu 750.000'den fazla olan illerin il belediyeleri KANUNLA büyükşehir belediyesine dönüştürülebilir. Büyükşehir belediyelerinin sınırları, il mülki sınırlarıdır. Her üç ifade de doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. İl özel idaresi<br>II. Köy<br>III. Mahalle<br><br>Ali, arkadaşı Murat'a, büyükşehir belediyesi olan illerdeki idari birimleri merak ederek, \"Peki Murat, bu tür bir şehirde hangi idari birimler yoktur?\" diye soruyor.<br><br><b>Murat, yukarıdaki idari birimlerden hangileri söylerse doğru cevabı vermiş olur?</b></p>",
    diff: 3,
    expl: "Büyükşehir belediyesi kurulan illerde (örneğin İstanbul, Ankara vb.), il özel idaresi ve köy tüzel kişilikleri tamamen kaldırılmıştır. Köyler mahalleye dönüştürülmüştür. Ancak Mahalle, büyükşehir belediyesi sisteminde varlığını devam ettiren en küçük yerel idari birimdir. Yani \"İl Özel İdaresi\" ve \"Köy\" yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. İstanbul İl Özel İdaresi<br>II. Ağva Beldesi<br>III. Kadıköy Belediyesi<br>IV. İshaklı Köyü<br>V. Çanakçı Mahallesi<br><br><b>5216 sayılı Büyükşehir Belediyesi Kanunu dikkate alındığında İstanbul sınırları içerisinde görev yapan vergi memuru Derya, yukarıdaki idari birimlerden hangilerinde denetim yapmış olamaz?</b></p>",
    diff: 3,
    expl: "İstanbul bir Büyükşehir Belediyesidir. Büyükşehir belediyesi olan tüm illerde; il özel idareleri, belde belediyeleri ve köylerin tüzel kişiliği kaldırılmış, belde ve köyler mahalleye dönüştürülmüştür. Dolayısıyla İstanbul'da İl Özel İdaresi (I), Belde (II) ve Köy (IV) bulunmaz. Sadece büyükşehir belediyesi, ilçe belediyesi ve mahalleler vardır.",
    answers: [
      { text: "I, II ve III", ok: false },
      { text: "I, II ve IV", ok: true },
      { text: "II, III ve V", ok: false },
      { text: "I, IV ve V", ok: false },
      { text: "II, IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Eşref, iş arkadaşı Rüya'ya bundan sonraki memurluk hizmetini büyükşehir belediyesi olan bir ilde yapmak istediğini söyler. Rüya, arkadaşı Eşref'e, \"Türkiye'de kaç büyükşehir belediyesi olan il var biliyor musun?\" diye sorar.<br><br><b>Eşref aşağıdaki cevaplardan hangisini verirse doğru olur?</b></p>",
    diff: 1,
    expl: "Türkiye'de şu anda 30 ilde büyükşehir belediyesi bulunmaktadır. (En son büyükşehir belediyesi olan il Ordu'dur).",
    answers: [
      { text: "14", ok: false },
      { text: "18", ok: false },
      { text: "24", ok: false },
      { text: "28", ok: false },
      { text: "30", ok: true }
    ]
  },
  {
    text: "<p><b>5393 sayılı Belediye Kanunu'na göre, \"Belediye sınırları içinde ihtiyaç ve öncelikleri benzer özellikler gösteren ve sakinleri arasında komşuluk ilişkisi bulunan idari birim\" aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Belediye sınırları içinde, ihtiyaç ve öncelikleri benzer özellikler gösteren ve sakinleri arasında komşuluk ilişkisi bulunan idarî birimi ifade eden kavram 'Mahalle'dir.",
    answers: [
      { text: "Mahalle", ok: true },
      { text: "Köy", ok: false },
      { text: "Mezra", ok: false },
      { text: "Belde", ok: false },
      { text: "Şehir", ok: false }
    ]
  },
  {
    text: "<p>M belediyesinde, belediye başkanı A ile belediye meclisi üyeleri B ve C'nin belediye kaynaklarını usulsüz kullandığına ilişkin savcılığa yapılan ihbar üzerine haklarında soruşturma başlatılmıştır. Soruşturma süreci devam ederken, bu kişilerin görevde kalmalarının kamu yararına aykırı olabileceği değerlendirilmiştir.<br><br><b>5393 sayılı Belediye Kanunu'na göre, hakkında soruşturma veya kovuşturma açılan belediye başkanı ve meclis üyelerini kesin hükme kadar aşağıdakilerden hangisi geçici olarak görevden uzaklaştırabilir?</b></p>",
    diff: 2,
    expl: "Belediye Kanunu m.47 ve Anayasa m.127 uyarınca, belediye başkanları ve meclis üyeleri hakkında görevleriyle ilgili soruşturma veya kovuşturma açılması durumunda, İçişleri Bakanı tarafından geçici olarak görevden uzaklaştırılabilirler (İdari vesayet yetkisinin bir yansımasıdır). Kesin olarak görevden alma (görevine son verme) yetkisi ise Danıştay'a aittir.",
    answers: [
      { text: "Çevre, Şehircilik ve İklim Değişikliği Bakanı", ok: false },
      { text: "Danıştay", ok: false },
      { text: "İçişleri Bakanı", ok: true },
      { text: "Belediye meclisi", ok: false },
      { text: "Cumhurbaşkanı", ok: false }
    ]
  },
  {
    text: "<p>Belediye sınırları içinde mahalle kurulması, kaldırılması, birleştirilmesi, bölünmesi, adlarıyla sınırlarının tespiti ve değiştirilmesi, belediye meclisinin kararı ve kaymakamın görüşü üzerine valinin onayı ile olur.<br><br><b>5393 sayılı Belediye Kanunu'na göre, belediye sınırları içinde nüfusu hangi sayının altında olan yerlerde mahalle kurulamaz?</b></p>",
    diff: 1,
    expl: "5393 sayılı Belediye Kanunu'na göre, belediye sınırları içinde nüfusu 500'ün altında mahalle kurulamaz.",
    answers: [
      { text: "250", ok: false },
      { text: "500", ok: true },
      { text: "750", ok: false },
      { text: "1.000", ok: false },
      { text: "2.000", ok: false }
    ]
  },
  {
    text: "<p>Nevzat Bey, A ilçesinin belediye başkanıdır. Belediye meclisi, son bir yıl içinde ısrarla mevzuata aykırı kararlar almış, bu gerekçeyle meclisin feshine karar verilmiştir. Ancak yapılan denetimlerde, alınan bu kararların çoğunun Nevzat Bey'in bilgisi ve yönlendirmesiyle gerçekleştiği ve başkanın toplantılarda aktif rol oynadığı tespit edilmiştir.<br><br><b>Bu durumda, İçişleri Bakanlığının başvurusu ile Belediye Başkanı Nevzat Bey'in başkanlık sıfatına son verilmesi aşağıdakilerden hangisinin kararıyla mümkün olur?</b></p>",
    diff: 2,
    expl: "Belediye başkanının mazeretsiz görevi terk etmesi, seçilme yeterliğini kaybetmesi veya meclisin feshine neden olan eylem ve işlemlere katılması hâllerinden birinin meydana gelmesi durumunda İçişleri Bakanlığının başvurusu üzerine 'Danıştay kararıyla' başkanlık sıfatı sona erer.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Belediye meclisi", ok: false },
      { text: "Danıştay kararıyla", ok: true },
      { text: "Valilik", ok: false }
    ]
  },
  {
    text: "<p>Cami, mektep, otlak, yaylak, baltalık gibi orta malları bulunan ve toplu veya dağınık evlerde oturan insanlar bağ ve bahçe ve tarlalarıyla birlikte bir köy teşkil ederler.<br><br><b>442 sayılı Köy Kanunu'nun 1. maddesine göre, nüfusu kaçtan aşağı olan yurtlara köy adı verilir?</b></p>",
    diff: 1,
    expl: "Köy Kanunu'na göre, nüfusu 2000'den aşağı olan yerlere köy denir.",
    answers: [
      { text: "1000", ok: false },
      { text: "1500", ok: false },
      { text: "2000", ok: true },
      { text: "2500", ok: false },
      { text: "3000", ok: false }
    ]
  },
  {
    text: "<p>İdare hukuku dersinde \"Köyün kurulması ve adının değiştirilmesi hangi işlem ile olur?\" sorusuna aşağıdaki öğrencilerden hangisi doğru cevap vermiştir?<br><br><b> </b></p>",
    diff: 2,
    expl: "Köy Kanunu'na göre, nüfusu 2000'den aşağı olan yerleşim birimlerine köy adı verilir. Bir yerleşim yerinde yeniden köy kurulması, kaldırılması, isminin değiştirilmesi 'İçişleri Bakanının kararı' ile olur.",
    answers: [
      { text: "Şenol: Cumhurbaşkanı kararıyla kurulur ve adı değiştirilir.", ok: false },
      { text: "Zeliha: İçişleri Bakanı kararıyla kurulur ve adı değiştirilir.", ok: true },
      { text: "Görkem: Belediye meclisi kararıyla kurulur ve adı değiştirilir.", ok: false },
      { text: "Merve: Hazine ve Maliye Bakanı kararıyla kurulur ve adı değiştirilir.", ok: false },
      { text: "Gökhan: Çevre, Şehircilik ve İklim Değişikliği Bakanı kararıyla kurulur ve adı değiştirilir.", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 5
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_5: McQ[] = [
  {
    text: "<p>Murat, son 6 aydan beri köyde ikamet eden, okuma yazma bilen bir köy sakinidir. 2029'da yapılacak yerel seçimlerde köy muhtarı olmak için aday olmuştur.<br><br><b>442 sayılı Köy Kanunu'na göre, köy muhtarı ve ihtiyar meclisinin seçimle gelen üyeleri aşağıdakilerden hangisi tarafından seçilir?</b></p>",
    diff: 1,
    expl: "Köy idaresinin başı muhtardır. Köy derneği tarafından seçilir. Muhtar olmak için siyasi partiler aday gösteremez. Okuma yazma bilmesi ve son 6 aydan beridir köyde ikamet etmesi yeterlidir.",
    answers: [
      { text: "Belediye meclisi", ok: false },
      { text: "Köy derneği", ok: true },
      { text: "İl meclisi", ok: false },
      { text: "Kaymakam", ok: false },
      { text: "İl idare kurulu", ok: false }
    ]
  },
  {
    text: "<p>Mülki idare amirleri muhtarın köy işlerini ve kanunlarla verilen diğer görevlerini yapmadığını görürlerse muhtara yazılı ihtarda bulunurlar.<br><br><b>Buna rağmen iş görmeyen muhtar, aşağıdakilerden hangisinin kararıyla görevinden uzaklaştırılır?</b></p>",
    diff: 2,
    expl: "Muhtarın görevden alınması diğer mahalli idare organlarından farklıdır. Muhtar, bağlı olduğu il veya ilçe idare kurulları tarafından görevden alınır.",
    answers: [
      { text: "Belediye meclisi", ok: false },
      { text: "İl ya da ilçe idare kurulu", ok: true },
      { text: "İçişleri Bakanı", ok: false },
      { text: "Danıştay", ok: false },
      { text: "Köy ihtiyar heyeti", ok: false }
    ]
  },
  {
    text: "<p><b>442 sayılı Köy Kanunu'na göre, köy muhtarını ve ihtiyar meclisi azalarını seçmeye hakkı olan kadın ve erkek köylülerin toplanmasına ne ad verilir?</b></p>",
    diff: 1,
    expl: "Köyde 24. maddeye göre köy muhtarını ve ihtiyar meclisi azalarını seçmeye hakkı olan kadın ve erkek köylülerin toplanmasına köy derneği derler.",
    answers: [
      { text: "Köy seçim kurulu", ok: false },
      { text: "Köy konseyi", ok: false },
      { text: "Köy derneği", ok: true },
      { text: "Köy ihtiyar heyetinin doğal üyeleri", ok: false },
      { text: "Köy birliği", ok: false }
    ]
  },
  {
    text: "<p>I. Köy imamı<br>II. Köy öğretmeni<br>III. Köy korucuları<br>IV. Köy kâtibi<br><br><b>442 sayılı Köy Kanunu'na göre, yukarıdakilerden hangileri köy ihtiyar meclisinin doğal üyeleridir?</b></p>",
    diff: 1,
    expl: "Köy muhtarlığı ve köy ihtiyar meclisi üyeliği seçimlerinde adaylık usulü yoktur. Köyün imamı ile öğretmeni veya başöğretmeni ihtiyar meclisinin doğal üyesidir.",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p>Köydeki dere üstüne köprü yapılması, yolun onarılması ve mezarlık etrafına duvar çekilmesi gibi işler için köy ihtiyar heyeti bir karar alır.<br><br><b>442 sayılı Köy Kanunu'na göre, köylünün birleşerek köy işlerini birlikte yaptığı bu uygulama aşağıdaki kavramlardan hangisiyle ifade edilir?</b></p>",
    diff: 1,
    expl: "İmece, 442 sayılı Köy Kanunu'na göre köy yararına yapılacak işlerde tüm köy halkının bir araya gelerek ortaklaşa çalışması anlamına gelir. Bu usul, özellikle altyapı, bakım ve onarım gibi kamusal işlerde uygulanır ve köy dayanışmasının bir parçasıdır.",
    answers: [
      { text: "Ortakçı", ok: false },
      { text: "İmece", ok: true },
      { text: "Yarıcı", ok: false },
      { text: "Tevzi", ok: false },
      { text: "Müşterek", ok: false }
    ]
  },
  {
    text: "<p>Kavaklı köyünde su deposunun bakım giderlerinin karşılanması amacıyla köy ihtiyar meclisi bir karar alır. Karara göre, köyde oturan veya köyde toprağı, bağı ya da dükkânı bulunan kişilerden, hâl ve gelir durumlarına göre belirli bir miktarda para alınacaktır.<br><br><b>442 sayılı Köy Kanunu'na göre, bu uygulama aşağıdaki kavramlardan hangisiyle adlandırılır?</b></p>",
    diff: 1,
    expl: "Salma, 442 sayılı Köy Kanunu'nda, köyün kamu yararına yapacağı küçük işlerde kullanılmak üzere köyde oturanlardan veya köyde maddi bağı bulunanlardan, herkesin hâline göre alınan parasal katkıyı ifade eder.",
    answers: [
      { text: "İstikraz", ok: false },
      { text: "Salma", ok: true },
      { text: "İmtiyaz", ok: false },
      { text: "Harç", ok: false },
      { text: "İmece", ok: false }
    ]
  },
  {
    text: "<p>Hüseyin, arkadaşı İsa'ya Türkiye'de bazı idari birimlerin kanunlar revize edilmediği için hukukumuzda var olsa da uygulamada yeri olmadığını belirtmiştir.<br><br><b>Hüseyin'in bu ifadesini;</b><br><br>I. bucak,<br>II. kasaba,<br>III. belde<br><br><b>kanunlarımızda yer alan idari birimlerden hangileri doğrulamaktadır?</b></p>",
    diff: 3,
    expl: "1924 kabul tarihli ve hâlen yürürlükte olan Köy Kanunu'nda kasabanın ne olduğu tanımlansa da hukukumuzda 'kasaba' diye bir kamu tüzel kişisi bulunmamaktadır. 1949'da kabul edilen 5442 sayılı İl İdaresi Kanunu'na göre bucaklar tanımlanmıştır; ancak 2012 ve 2014 yıllarında çıkarılan kanunlarla tüm bucak tüzel kişilikleri ve teşkilatları resmî olarak kaldırılmıştır. Beldeler ise belediye kanununa göre 5000 ve üzeri olan yerleşim birimlerinde kurulabilir ve büyükşehir olmayan illerimizde hâlen varlığını sürdürmektedir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>5393 sayılı Belediye Kanunu'na göre, belediye başkanının mazeretsiz ve kesintisiz olarak kaç günden fazla görevini terk etmesi ve bu durumun mahallîn mülki idare amiri tarafından belirlenmesi hâlinde İçişleri Bakanlığının başvurusu üzerine Danıştay kararıyla başkanlık sıfatı sona erer?</b></p>",
    diff: 2,
    expl: "Belediye başkanının; mazeretsiz ve kesintisiz olarak 20 günden fazla görevini terk etmesi ve bu durumun mahallin mülki idare amiri tarafından belirlenmesi hâlinde İçişleri Bakanlığının başvurusu üzerine Danıştay kararıyla başkanlık sıfatı sona erer.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: false },
      { text: "20", ok: true },
      { text: "30", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili F'nin Türkiye Büyük Millet Meclisine sunacağı kanun teklifi ile;<br><br>I. il,<br>II. büyükşehir belediyesi,<br>III. üniversite,<br>IV. ilçe<br><br><b>verilenlerden hangileri kurulabilir?</b></p>",
    diff: 2,
    expl: "İl ve ilçeler, kanunla kurulur, kaldırılır, ismi değiştirilir. Büyükşehir belediyesi kurulması kanunla olur. Üniversiteler de kanunla kurulur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p>Mert, arkadaşı Elif'e Türk idare yapılanmasında yer alan idarelerin kuruluşu hakkında aşağıdaki bilgileri vermiştir.<br><br>I. İl, ilçe ve büyükşehir belediyeleri kanunla kurulur.<br>II. Köyler, İçişleri Bakanı kararı ile kurulur.<br>III. Bakanlıklar, Cumhurbaşkanı Kararnamesi ile kurulur.<br>IV. İl ve ilçelerde belediye kurulması zorunludur.<br><br><b>Buna göre yukarıda verilen ifadelerden hangileri doğrudur?</b></p>",
    diff: 2,
    expl: "Köy Kanunu'na göre, nüfusu 150 ile 2000 arası yerleşim yerlerinde İçişleri bakanı kararıyla köy kurulabilir. Belediye Kanunu'na göre il ve ilçe merkezlerinde belediye kurulması zorunludur. Büyükşehir Belediye Kanunu'na göre büyükşehir belediyesi kanunla kurulur. İl İdaresi Kanunu'na göre il ve ilçeler kanunla kurulur. Bakanlıklar Cumhurbaşkanı Kararnamesi ile kurulur. İfadelerin tümü doğrudur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve IV", ok: false },
      { text: "I, II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>2972 sayılı Mahallî İdareler Seçimi Kanunu'na göre,</b><br><br>I. belediye başkanı,<br>II. il genel meclisi üyeleri,<br>III. muhtar ve ihtiyar heyeti üyeleri<br><br><b>verilenlerden hangilerinin seçimlerinde siyasi parti adaylığı yoktur?</b></p>",
    diff: 1,
    expl: "Anayasa ve kanunlarda yazılı şartlara uygun olarak, seçilme yeterliğine sahip olan her vatandaş, bir siyasi parti listesinden veya bağımsız olarak il genel meclisi, belediye başkanlığı veya belediye meclisi üyeliğine adaylığını koyabilir. Ancak köy muhtarlığı ve köy ihtiyar meclisi üyeliği, mahalle muhtarlığı ve mahalle ihtiyar heyeti üyeliği seçimlerinde siyasi parti adaylık usulü yoktur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde genel sekreterlik teşkilatı bulunmaktadır?</b></p>",
    diff: 2,
    expl: "İl, ilçe ve belde belediyelerinde genel sekreter kadrosu olmaz; belediye başkanına yardımcı olmak üzere başkan yardımcıları bulunur. Genel Sekreterlik Teşkilatının bulunduğu idari birimler il özel idareleri ve Büyükşehir belediyeleridir. Tekirdağ Büyükşehir Belediyesi olduğundan genel sekreterlik teşkilatı bulunur.",
    answers: [
      { text: "Kadıköy Büyükşehir İlçe Belediyesi", ok: false },
      { text: "Sungurlu İlçe Belediyesi", ok: false },
      { text: "Batman İl Belediyesi", ok: false },
      { text: "Tekirdağ Büyükşehir Belediyesi", ok: true },
      { text: "Kıyıköy Belde Belediyesi", ok: false }
    ]
  },
  {
    text: "<p>Belediye başkanı, belediye meclisi ve il genel meclisi üyeliklerine aday olabilmek için en az ---- olmak gerekirken; köy ve mahalle muhtarlığı ile ihtiyar heyeti üyeliğine adaylık için yalnızca ---- olmak yeterlidir.<br><br><b>2972 sayılı Mahallî İdareler ile Mahalle Muhtarlıkları ve İhtiyar Heyetleri Seçimi Hakkında Kanun'a göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Belediye başkanlığı, il genel meclisi, belediye meclisi ve büyükşehir belediye başkanlığı gibi mahallî idare organlarına aday olabilmek için en az ilkokul mezunu olmak şarttır. Ancak köy ve mahalle muhtarlığı ile ihtiyar heyeti üyeliklerine aday olmak için yalnızca okuryazar olmak yeterlidir.",
    answers: [
      { text: "ortaokul mezunu – ilkokul mezunu", ok: false },
      { text: "ilkokul mezunu – okuryazar", ok: true },
      { text: "lise mezunu – okuryazar", ok: false },
      { text: "ilkokul mezunu – ortaokul mezunu", ok: false },
      { text: "okuryazar – ilkokul mezunu", ok: false }
    ]
  },
  {
    text: "<p>Mercan, bir mahallî idare kuruluşunda memur olarak görev yapmaktadır.<br><br><b>Buna göre Mercan, aşağıdaki idari birimlerden hangisinde görevli olabilir?</b></p>",
    diff: 1,
    expl: "Mahallî idareler; il (il özel idaresi), belediye veya köy halkının mahallî müşterek ihtiyaçlarını karşılamak üzere kuruluş esasları kanunla belirtilen ve karar organları seçmenler tarafından seçilerek oluşturulan kamu tüzel kişileridir. Buna göre, Artvin İl Özel İdaresi bir mahallî idare kuruluşudur.",
    answers: [
      { text: "Adana Emniyet Müdürlüğü", ok: false },
      { text: "Van Ticaret Odası", ok: false },
      { text: "Aksu İlçesi", ok: false },
      { text: "Artvin İl Özel İdaresi", ok: true },
      { text: "Bursa Millî Eğitim Müdürlüğü", ok: false }
    ]
  },
  {
    text: "<p>Erdem, merkezî idarenin taşra örgütünde görev yapan çalışandan biridir.<br><br><b>Buna göre Erdem, aşağıdaki kamu görevlilerinden hangisi olabilir?</b></p>",
    diff: 2,
    expl: "Merkezî idare, genel bütçeli bakanlıklar ve bunların taşra teşkilatlarından oluşur. Bu taşra teşkilatları il (valilik), ilçe (kaymakamlık) ve bölge düzeyinde örgütlenmiştir. İl millî eğitim müdürlükleri, Millî Eğitim Bakanlığının il düzeyindeki taşra birimleridir ve bu yapıda görev yapan şube müdürleri, merkezî idarenin taşra teşkilatında görevli memurlardır.",
    answers: [
      { text: "Büyükşehir belediyesinde itfaiye eri", ok: false },
      { text: "Köy muhtarı", ok: false },
      { text: "İl millî eğitim müdürlüğünde şube müdürü", ok: true },
      { text: "Belediyede zabıta", ok: false },
      { text: "İl özel idaresi meclis üyesi", ok: false }
    ]
  },
  {
    text: "<p><b>Mahallî idarelerde \"encümen\" ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Encümen, mahallî idarelerde (belediye ve il özel idaresi) karar organı değildir, yardımcı ve danışma organıdır. Mahallî idarelerin ana karar organları il özel idaresinde il genel meclisi, belediyede ise belediye meclisidir.",
    answers: [
      { text: "Hem il özel idaresinde hem de belediyede bulunur.", ok: false },
      { text: "Mahallî idarelerde ana karar organıdır.", ok: true },
      { text: "Seçilmiş üyeler ve atanmış üyelerden oluşur.", ok: false },
      { text: "İl özel idaresinde vali, belediyede ise başkanının başkanlığında toplanır.", ok: false },
      { text: "İdarede danışma ve yardımcı organ niteliğindedir.", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 6
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_6: McQ[] = [
  {
    text: "<p><b>Aşağıdakilerden hangisi Türkiye'deki illerin tamamında bulunur?</b></p>",
    diff: 1,
    expl: "İl idare kurulu, 5442 sayılı İl İdaresi Kanunu'na göre, her ilde bulunması zorunlu bir kuruldur. Köy ihtiyar heyeti sadece köylerde bulunur. Belde belediye meclisi sadece beldelerde bulunur. İl özel idaresi teşkilatı ve il encümeni büyükşehir belediyesi olan 30 ilde kaldırılmıştır.",
    answers: [
      { text: "Köy ihtiyar heyeti", ok: false },
      { text: "İl encümeni", ok: false },
      { text: "İl özel idaresi teşkilatı", ok: false },
      { text: "Belde belediye meclisi", ok: false },
      { text: "İl idare kurulu", ok: true }
    ]
  },
  {
    text: "<p>Mülkiye müfettişi M, sırasıyla Konya, Aksaray ve Kayseri illerinde denetimde bulunur.<br><br><b>Buna göre aşağıdakilerden hangisi M'nin denetlediği idari kuruluşlar arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Kayseri bir büyükşehir belediyesidir. Büyükşehir belediyesi kurulan tüm 30 ilde il özel idaresi teşkilatı kaldırılmıştır. Dolayısıyla Kayseri'de 'İl Özel İdaresi' bulunmaz ve denetlenemez. (Aksaray büyükşehir olmadığı için İl Özel İdaresi vardır).",
    answers: [
      { text: "Konya Büyükşehir Belediyesi", ok: false },
      { text: "Kayseri İl Özel İdaresi", ok: true },
      { text: "Meram Belediyesi", ok: false },
      { text: "Aksaray İl Özel İdaresi", ok: false },
      { text: "Kayseri Büyükşehir Belediyesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki düzenleyici ve denetleyici kurumların hangisine 1982 Anayasası'nda yer verilmiştir?</b></p>",
    diff: 1,
    expl: "Düzenleyici ve denetleyici kurumlar arasında 1982 Anayasası'nda düzenlenen tek kurum Radyo ve Televizyon Üst Kurulu'dur (RTÜK). Diğer kurullar (BDDK, EPDK, KİK, Rekabet Kurumu vb.) kanunla kurulmuştur.",
    answers: [
      { text: "Bankacılık Düzenleme ve Denetleme Kurumu", ok: false },
      { text: "Radyo ve Televizyon Üst Kurulu", ok: true },
      { text: "Enerji Piyasası Düzenleme Kurumu", ok: false },
      { text: "Kamu İhale Kurumu", ok: false },
      { text: "Rekabet Kurumu", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi hizmet bakımından yerinden yönetim kuruluşu değildir?</b></p>",
    diff: 2,
    expl: "Yerinden yönetimler ikiye ayrılır: Yer yönünden (mahallî) idareler (il özel idaresi, belediye, köy) ve hizmet yönünden (hizmet yerinden) yönetimler (üniversiteler, KİT'ler, SGK, Karayolları Gn. Md. vb.). İstanbul Büyükşehir Belediyesi 'yer (mahallî) bakımından' yerinden yönetim kuruluşudur, hizmet bakımından değildir.",
    answers: [
      { text: "Dokuz Eylül Üniversitesi", ok: false },
      { text: "Türkiye Cumhuriyet Devlet Demir Yolları", ok: false },
      { text: "Karayolları Genel Müdürlüğü", ok: false },
      { text: "İstanbul Büyükşehir Belediyesi", ok: true },
      { text: "Sosyal Güvenlik Kurumu", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi kamu kurumu niteliğindeki bir meslek kuruluşudur?</b></p>",
    diff: 1,
    expl: "Barolar (örn. Diyarbakır Barosu), odalar, tabip odaları, ziraat odaları vb. kamu kurumu niteliğindeki meslek kuruluşlarıdır. Bunlar Anayasa'da tanımlanmış, belirli bir meslek mensuplarının oluşturduğu, kamu tüzel kişiliğine sahip kurumlardır.",
    answers: [
      { text: "Diyarbakır Barosu", ok: true },
      { text: "Sosyal Güvenlik Kurulu", ok: false },
      { text: "Karayolları Genel Müdürlüğü", ok: false },
      { text: "Sermaye Piyasası Kurulu", ok: false },
      { text: "Karadeniz Teknik Üniversitesi", ok: false }
    ]
  },
  {
    text: "<p>Kanunun belirlediği usul ve esaslara göre; rektörler ----, dekanlar ise ---- seçilir ve atanır.<br><br><b>1982 Anayasası'na göre, yukarıdaki bırakılan boşluğa sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 130. maddesine göre; Rektörler, Yükseköğretim Kurulunun önerdiği adaylar arasından Cumhurbaşkanı tarafından atanır. Dekanlar ise, üniversitelerde Yükseköğretim Kurulu tarafından seçilir ve yine YÖK tarafından atanır.",
    answers: [
      { text: "Cumhurbaşkanı – Yükseköğretim Kurulu", ok: true },
      { text: "Yükseköğretim Kurulu – Cumhurbaşkanı", ok: false },
      { text: "Cumhurbaşkanı – Millî Eğitim Bakanı", ok: false },
      { text: "Millî Eğitim Bakanı – Yükseköğretim Kurulu", ok: false },
      { text: "Yükseköğretim Kurulu – Millî Eğitim Bakanı", ok: false }
    ]
  },
  {
    text: "<p><b>İdarenin kamu düzenini sağlama, koruma ve bu düzenin bozulması hâlinde eski hâle getirme için bireysel ve toplumsal davranışları düzenlemesi ve toplum düzenine aykırı eylemleri kuvvet kullanarak önlemesi amacıyla yürüttüğü faaliyete ne ad verilir?</b></p>",
    diff: 1,
    expl: "Kolluk kavramı, idarenin kamu düzenini sağlama, koruma ve bu düzenin bozulması hâlinde eski hâle getirme için bireysel ve toplumsal davranışları düzenlemesi ve toplum düzenine aykırı eylemleri kuvvet kullanarak önlemesi amacıyla yürüttüğü faaliyettir.",
    answers: [
      { text: "Kolluk", ok: true },
      { text: "İmtiyaz", ok: false },
      { text: "Mal edinme", ok: false },
      { text: "Etik", ok: false },
      { text: "İdari teamül", ok: false }
    ]
  },
  {
    text: "<p>Kamu düzeni, idarenin korumak ve sağlamakla görevli olduğu maddi düzendir ve idarenin kolluk faaliyetinin nihai amacını oluşturur.<br><br><b>Buna göre aşağıdakilerden hangisi, kamu düzeni ögelerinden biri değildir?</b></p>",
    diff: 1,
    expl: "Kamu düzeninin unsurları: Güvenlik, dirlik ve esenlik, genel sağlık, genel ahlakın korunmasıdır. Laik devletin gereği olarak \"inanç (din)\" kamu düzeninin bir unsuru (kolluğun korumakla görevli olduğu bir öge) olarak kabul edilmez, devletin müdahale alanı dışındadır.",
    answers: [
      { text: "İnanç", ok: true },
      { text: "Sağlık", ok: false },
      { text: "Ahlak", ok: false },
      { text: "Güvenlik", ok: false },
      { text: "Esenlik", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, bireylerin günlük yaşamda gürültü, kötü koku, toz, duman gibi dış etkenlerle rahatsız edilmemesi ve yaşamın olağan akışının bozulmaması amacıyla korunmak istenen kamu düzeni unsurudur?</b></p>",
    diff: 2,
    expl: "Günlük hayatta bireylerin gürültü, toz, pislik, duman, kötü koku, rahatsız edici ışık ve benzeri dış etkenlerle rahatsız edilmemeleri, yaşamın normal seyrini bozacak düzensizliklerin olmaması 'dirlik ve esenlik' (huzur/sükun) unsurudur.",
    answers: [
      { text: "Güvenlik", ok: false },
      { text: "Dirlik ve esenlik", ok: true },
      { text: "Genel sağlık", ok: false },
      { text: "Genel ahlak", ok: false },
      { text: "Genel inanç", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi idari kolluk faaliyeti değildir?</b></p>",
    diff: 2,
    expl: "Kamu düzeni bozulmadan önce (olaydan önce) yürütülen kolluk faaliyeti 'idari kolluk', kamu düzeni bozulduktan sonra (olaydan sonra, suç oluştuktan sonra) yürütülen kolluk faaliyeti ise 'adli kolluk'tur. Cinayet sonrası polisin evde delil toplaması bir suç şüphesi üzerine yapılan 'adli kolluk' işlemidir.",
    answers: [
      { text: "Ruhsatsız iş yerinin belediye zabıtası tarafından mühürlenmesi", ok: false },
      { text: "Polis ekiplerinin gösteri yürüyüşünü dağıtması", ok: false },
      { text: "Cinayet sonrası polisin evde delil toplaması", ok: true },
      { text: "Sağlık müdürlüğünün hijyen denetimi yapması", ok: false },
      { text: "Trafik ekiplerinin hız kontrolü yapması", ok: false }
    ]
  },
  {
    text: "<p>I. Emniyet Genel Müdürlüğü<br>II. Jandarma Genel Komutanlığı<br>III. Sahil Güvenlik Komutanlığı<br><br><b>Yukarıdakilerden hangileri İçişleri Bakanlığına bağlıdır?</b></p>",
    diff: 1,
    expl: "Emniyet Genel Müdürlüğü, Sahil Güvenlik Komutanlığı ve Jandarma Genel Komutanlığı İçişleri Bakanlığına bağlı kuruluşlardır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi genel idare kolluk personeli değildir?</b></p>",
    diff: 2,
    expl: "Genel idari kolluk, merkezden yönetimin (Devlet tüzel kişiliğinin) kolluğudur ve personeli polis, jandarma, sahil güvenlik personeli ve mahalle bekçileridir. Zabıta ise mahallî idare (Belediye) kolluğu olduğundan 'özel idare kolluk' personelidir.",
    answers: [
      { text: "Polis", ok: false },
      { text: "Jandarma", ok: false },
      { text: "Mahalle bekçisi", ok: false },
      { text: "Sahil güvenlik personeli", ok: false },
      { text: "Zabıta", ok: true }
    ]
  },
  {
    text: "<p><b>Devletin millî güvenliği için oluşturulan ve bu sebeple siyasi kolluk faaliyetleri yürüten Millî İstihbarat Teşkilatı Başkanlığı aşağıdakilerden hangisinin bağlı kuruluşudur?</b></p>",
    diff: 1,
    expl: "Millî İstihbarat Teşkilatı (MİT), Türkiye'nin Cumhurbaşkanlığına bağlı resmî istihbarat örgütüdür.",
    answers: [
      { text: "Cumhurbaşkanlığı", ok: true },
      { text: "Emniyet Genel Müdürlüğü", ok: false },
      { text: "Genelkurmay Başkanlığı", ok: false },
      { text: "İçişleri Bakanlığı", ok: false },
      { text: "Millî Savunma Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1 sayılı Cumhurbaşkanı Kararnamesi'ne göre, Genelkurmay Başkanlığı ve kuvvet komutanlıkları aşağıdakilerden hangisine bağlıdır?</b></p>",
    diff: 2,
    expl: "1 sayılı Cumhurbaşkanı Kararnamesi madde 338'e göre Genelkurmay Başkanlığı ile Kara, Deniz ve Hava Kuvvetleri Komutanlıkları Millî Savunma Bakanına bağlıdır. (Genelkurmay Başkanını Cumhurbaşkanı atar ancak MSB'ye bağlıdır).",
    answers: [
      { text: "Cumhurbaşkanlığı", ok: false },
      { text: "Millî Savunma Bakanlığı", ok: true },
      { text: "İçişleri Bakanlığı", ok: false },
      { text: "TBMM Başkanlığı", ok: false },
      { text: "Adalet Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p>Kamu tüzel kişilerinin kamunun yararlanmasına bırakılmış mallara kamu malları adı verilir.<br><br><b>Buna göre aşağıdakilerden hangisi hizmet malları statüsündeki kamu malları sınıflandırmasına dâhil değildir?</b></p>",
    diff: 2,
    expl: "Kamu malları üçe ayrılır: Sahipsiz mallar, Orta malları, Hizmet malları. Hastane, okul, adliye, belediye binası, müze, kütüphane bir kamu hizmetine tahsis edilmiş 'Hizmet Malları'dır. Pazar yerleri, meydanlar, parklar, yollar ise kamunun doğrudan yararlanmasına bırakılan 'Orta Malları'dır.",
    answers: [
      { text: "Belediye binası", ok: false },
      { text: "Kütüphane", ok: false },
      { text: "Hastane", ok: false },
      { text: "Müze", ok: false },
      { text: "Pazar yeri", ok: true }
    ]
  },
  {
    text: "<p><b>İdarenin mal edinme yetkileri ile ilgili olarak;</b><br><br>I. idarenin olağanüstü durumlarda taşınır malların kullanım hakkını elde etmesi,<br>II. devletin ya da diğer kamu tüzel kişilerinin, kamu yararı amacıyla özel mülkiyetteki bir taşınmaza, bedeli peşin ödenerek el koyması,<br>III. devletin kamu hizmeti niteliği taşıyan özel teşebbüslere ait işletmeleri, kamu yararı amacıyla mülkiyetine geçirmesi<br><br><b>verilen tanımlar sırasıyla hangilerine karşılık gelmektedir?</b></p>",
    diff: 2,
    expl: "I. İdarenin olağanüstü durumlarda (savaş vb.) TAŞINIR malların kullanım hakkını elde etmesi 'İstimval'dir. II. Özel mülkiyetteki bir TAŞINMAZA kamu yararı amacıyla bedeli peşin ödenerek el konulması 'Kamulaştırma'dır. III. Kamu hizmeti niteliği taşıyan özel teşebbüslere ait İŞLETMELERİN mülkiyete geçirilmesi 'Devletleştirme'dir. Sırasıyla: İstimval - Kamulaştırma - Devletleştirme. Doğru eşleştirme tablosu Kamulaştırma(II), Devletleştirme(III), İstimval(I) şeklindedir.",
    answers: [
      { text: "Kamulaştırma: I, Devletleştirme: II, İstimval: III", ok: false },
      { text: "Kamulaştırma: III, Devletleştirme: II, İstimval: I", ok: false },
      { text: "Kamulaştırma: II, Devletleştirme: III, İstimval: I", ok: true },
      { text: "Kamulaştırma: II, Devletleştirme: I, İstimval: III", ok: false },
      { text: "Kamulaştırma: III, Devletleştirme: I, İstimval: II", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 7
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_7: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, istisnai hâllerde kamulaştırma bedeli en fazla kaç yılda eşit taksitler ile ödenir?</b></p>",
    diff: 1,
    expl: "Kamulaştırma bedeli ile kesin hükme bağlanan artırım bedeli nakden ve peşin olarak ödenir. Ancak, tarım reformunun uygulanması, büyük enerji ve sulama projeleri ile iskân projelerinin gerçekleştirilmesi, yeni ormanların yetiştirilmesi, kıyıların korunması ve turizm amacıyla kamulaştırılan toprakların bedellerinin ödenme şekli kanunla gösterilir. Kanunun taksitle ödemeyi öngörebileceği bu hâllerde, taksitlendirme süresi 5 yılı aşamaz; bu takdirde taksitler eşit olarak ödenir.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: false },
      { text: "5", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde kamulaştırma bedeli taksitle ödenmez?</b></p>",
    diff: 2,
    expl: "Kamulaştırılan topraktan, o toprağı doğrudan doğruya işleten küçük çiftçiye ait olanlarının bedeli, her hâlde (istisnai projeler kapsamında olsa dahi) peşin ödenir. Taksitlendirme yapılamaz.",
    answers: [
      { text: "Tarım reformunun uygulanması amacıyla yapılan kamulaştırma", ok: false },
      { text: "Büyük enerji ve sulama projeleri ile iskân projelerinin gerçekleştirilmesi amacıyla yapılan kamulaştırma", ok: false },
      { text: "Küçük çiftçiye ait topraktan kara yolu yapımcıları lehine yapılan kamulaştırma", ok: true },
      { text: "Yeni ormanların yetiştirilmesi amacıyla yapılan kamulaştırma", ok: false },
      { text: "Kıyılanın korunması ve turizm amacıyla yapılan kamulaştırma", ok: false }
    ]
  },
  {
    text: "<p><b>İdarenin mal edinme yetkilerinden hangisi Türkiye Büyük Millet Meclisi tarafından çıkarılan bir kanunla yapılır?</b></p>",
    diff: 2,
    expl: "Devletleştirme, 1982 Anayasası'nın 47. maddesine göre, özel teşebbüslere ait işletmelerin kamu yararı amacıyla devlet mülkiyetine geçirilmesidir. Bu işlem diğerlerinden farklı olarak sadece 'kanunla' (TBMM tarafından) yapılabilir. Diğer işlemler idari organlarca yapılır.",
    answers: [
      { text: "Kamulaştırma", ok: false },
      { text: "Geçici işgal", ok: false },
      { text: "Devletleştirme", ok: true },
      { text: "Kamulaştırmasız el atma", ok: false },
      { text: "İstimval", ok: false }
    ]
  },
  {
    text: "<p>Bir bölgede uzun süren doğal afet nedeniyle olağanüstü hâl ilan edilmiştir. Afetten etkilenen vatandaşlara yardım ulaştırmak isteyen idare, yeterli aracı bulunmadığı için bölgede faaliyet gösteren iki özel şirkete ait iş makinelerine, görev belgesi düzenleyerek geçici olarak el koymuştur.<br><br><b>İdarenin gerçekleştirdiği bu işlem aşağıdaki idarenin mal edinme yetkilerinden hangisinin kapsamındadır?</b></p>",
    diff: 1,
    expl: "İstimval, olağanüstü durumlarda (savaş, seferberlik, olağanüstü hâl vb.) taşınır malların (araç, iş makinesi vb.) kamu hizmetinde geçici kullanımı amacıyla idare tarafından (bedeli ödenerek) alınmasıdır.",
    answers: [
      { text: "Kamulaştırma", ok: false },
      { text: "Devletleştirme", ok: false },
      { text: "Kamulaştırmasız el atma", ok: false },
      { text: "İstimval", ok: true },
      { text: "Geçici işgal", ok: false }
    ]
  },
  {
    text: "<p>Danıştay bir kararında \"Bilindiği üzere umuma arz edilen, sürekli ve kesintisiz bir biçimde işlemesi zorunlu, toplumun genel ve ortak gereksinimlerini karşılamak amacıyla kanunla kurulan idarenin, doğrudan ya da yakın gözetim ve sorumluluğu altında kamusal yetki ve usuller kullanarak yürüttüğü faaliyetlerdir.\"<br><br><b>şeklinde tanımını yaptığı idare hukuk terimi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Danıştayın bu tanımı, idare hukukunun temel kavramlarından biri olan \"kamu hizmeti\" ilkesine yöneliktir. Toplumsal gereksinimi karşılar, süreklilik arz eder, kamusal usullerle yürütülür ve kamu otoritesinin sorumluluğu altındadır.",
    answers: [
      { text: "Sıralı işlem", ok: false },
      { text: "Hükûmet tasarrufu", ok: false },
      { text: "Kamu hizmeti", ok: true },
      { text: "İdari işlem", ok: false },
      { text: "Kamu gücü", ok: false }
    ]
  },
  {
    text: "<p>• Eğitim müfredatının çağdaş gelişmelere göre güncellenmesi<br>• Öğretmenlere grev yasağının uygulanması<br>• Eğitimde hiçbir kişiye, aileye, zümreye veya sınıfa imtiyaz tanınmaması<br><br><b>Bu uygulamalar sırasıyla aşağıdaki kamu hizmeti ilkelerinden hangileridir?</b></p>",
    diff: 2,
    expl: "Müfredatın gelişmelere göre güncellenmesi idarenin değişen şartlara 'uyarlanabilirliği' (değişkenlik) ilkesidir. Grev yasağı, hizmetin kesintiye uğramaması yani 'süreklilik' ilkesinin bir sonucudur. Hiçbir zümreye imtiyaz tanınmaması ise kamu hizmetinden yararlanmada 'eşitlik' (tarafsızlık) ilkesidir.",
    answers: [
      { text: "uyarlanabilirlik – eşitlik – süreklilik", ok: false },
      { text: "değişkenlik – süreklilik – tarafsızlık", ok: false },
      { text: "uyarlanabilirlik – süreklilik – eşitlik", ok: true },
      { text: "değişkenlik – bedelsizlik – tarafsızlık", ok: false },
      { text: "eşitlik – süreklilik – uyarlanabilirlik", ok: false }
    ]
  },
  {
    text: "<p>• Arızalanan içme suyu hattının birkaç saat içinde onarılması<br>• Nüfus cüzdanı başvurularında başvuru sahibinin kimliğine göre farklı muamele yapılmaması<br>• Devlet okullarında kayıt ücreti alınmadan eğitim hizmeti sunulması<br><br><b>Bu uygulamalar sırasıyla aşağıdaki kamu hizmeti ilkelerinden hangilerini ifade etmektedir?</b></p>",
    diff: 1,
    expl: "Su hattının hızla onarılması, hizmetin kesintisiz yürütülmesi gerektiğini (süreklilik) gösterir. Kimliğe göre ayrım yapılmaması işlemin tarafsızlığını (eşitlik) yansıtır. Devlet okulunda kayıt ücreti alınmaması, bazı hizmetlerin karşılıksız (bedelsizlik) sunulabileceğini gösterir. Sırasıyla: süreklilik - tarafsızlık - bedelsizlik.",
    answers: [
      { text: "süreklilik – tarafsızlık – bedelsizlik", ok: true },
      { text: "uyarlanabilirlik – eşitlik – bedelsizlik", ok: false },
      { text: "süreklilik – tarafsızlık – uyarlanabilirlik", ok: false },
      { text: "genellik – tarafsızlık – bedelsizlik", ok: false },
      { text: "süreklilik – eşitlik – bedelsizlik", ok: false }
    ]
  },
  {
    text: "<p>Danıştayın bir kararında \"İdari bir makam tarafından bir kamu hizmetinin yürütülmesi amacıyla idare hukukunun kendisine tanımış olduğu kamu gücünü kullanarak ve tek yönlü irade açıklamasıyla yapılan kesin ve yürütülmesi zorunlu işlemlerdir\"<br><br><b>şeklinde ifade ettiği idare hukuk terimi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Danıştayın tanımında geçen tüm unsurlar (idari makamlarca, kamu gücü kullanılarak, tek taraflı irade beyanı ile, kesin ve yürütülmesi zorunlu), \"İdari İşlem\" kavramının klasik ögelerini yansıtmaktadır.",
    answers: [
      { text: "Kamu yararı", ok: false },
      { text: "İdari işlem", ok: true },
      { text: "Kamu hizmeti", ok: false },
      { text: "İdari istikrar", ok: false },
      { text: "Fiilî memur", ok: false }
    ]
  },
  {
    text: "<p><b>İdari işlemlerin unsurları arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 1,
    expl: "İdari işlemler, idarenin tek taraflı iradesiyle hukuki sonuç doğurmak amacıyla yaptığı işlemlerdir. Bu işlemler beş temel unsurla değerlendirilir: Yetki, Şekil, Sebep, Konu, Amaç. 'Öneri' idari işlemin bir unsuru değildir.",
    answers: [
      { text: "Yetki", ok: false },
      { text: "Şekil", ok: false },
      { text: "Sebep", ok: false },
      { text: "Öneri", ok: true },
      { text: "Amaç", ok: false }
    ]
  },
  {
    text: "<p>İdareler tarafından yapılan idari işlemlerde iradenin açıklanması keyfîlikten uzak olup, kendine özgü kural ve usullere bağlanmıştır.<br><br><b>Buna göre idarenin yaptığı işlemlerin aksi kanıtlanıncaya kadar hukuka uygun kabul edilmesine ne ad verilir?</b></p>",
    diff: 1,
    expl: "İdari işlemler, tesis edildikleri an itibarıyla herhangi bir yargı organının onayına ihtiyaç duymaksızın resen etkilerini doğurduklarından, mahkeme kararıyla iptal edilene veya idarece geri alınana/kaldırılana kadar hukuka uygun sayılırlar. Buna 'hukuka uygunluk karinesi' denir.",
    answers: [
      { text: "Kanunilik ilkesi", ok: false },
      { text: "Ölçülülük ilkesi", ok: false },
      { text: "İcrailik", ok: false },
      { text: "Hukuk devleti", ok: false },
      { text: "Hukuka uygunluk karinesi", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki işlemlerden hangisi düzenleyici idari işlemdir?</b></p>",
    diff: 2,
    expl: "Düzenleyici işlemler, genel, soyut ve tekrarlanabilir nitelikte olup, tüm bireyleri kapsayacak şekilde kurallar koyar (Yönetmelikler, tüzükler, genelgeler bu kapsamdadır). 'İmar planlarının uygulanmasına ilişkin yönetmeliğin yayımlanması' düzenleyici bir işlemdir. Diğer seçenekler (mezuniyet belgesi, yapı ruhsatı, kınama cezası, memur ataması) tek bir kişiye veya duruma özgü olduğu için 'birel (bireysel) işlem'dir.",
    answers: [
      { text: "Bir öğrenciye mezuniyet belgesi düzenlenmesi", ok: false },
      { text: "Binaya yapı ruhsatı verilmesi", ok: false },
      { text: "Disiplin suçu işleyen memura kınama cezası verilmesi", ok: false },
      { text: "İmar planlarının uygulanmasına ilişkin yönetmeliğin yayımlanması", ok: true },
      { text: "Bir memurun başka bir birime atanması", ok: false }
    ]
  },
  {
    text: "<p>Danıştay bir kararında; \"Bir işlemi ilk kez hangi organ veya makam yapmışsa, o işlemi geri almaya, değiştirmeye, kaldırmaya, düzeltmeye de kanunda aksi öngörülmedikçe aynı organ veya makam yetkilidir.\" demiştir.<br><br><b>Buna göre Danıştay kararında belirtilen idare hukuku ilkesi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Danıştayın tanımında, bir idari işlemin tesis edildiği makamın, o işlemi geri alma, değiştirme veya kaldırma yetkisinin de kendisinde olduğu belirtilmektedir. Bu ilke idare hukukunda \"yetkide paralellik ilkesi\" olarak bilinir.",
    answers: [
      { text: "Takdir yetkisi", ok: false },
      { text: "Fiilî yol", ok: false },
      { text: "Yetkide paralellik", ok: true },
      { text: "Hiyerarşi", ok: false },
      { text: "Düzenli idare", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen idari örgütlerden hangisi idari işlem ile kurulabilir?</b></p>",
    diff: 2,
    expl: "Türk hukukunda il, ilçe, büyükşehir belediyesi ve üniversiteler kanunla (TBMM'nin yasama işlemi) kurulur. Bakanlıklar Cumhurbaşkanlığı Kararnamesi ile kurulur. Ancak Kamu iktisadi teşebbüsleri (KİT) Cumhurbaşkanı kararıyla, köyler ise İçişleri Bakanı kararıyla kurulur. Yani 'Kamu iktisadi teşebbüsleri' (ve köyler) birer idari işlemle (yürütmenin kararıyla) kurulur.",
    answers: [
      { text: "İl idaresi", ok: false },
      { text: "Kamu iktisadi teşebbüsleri", ok: true },
      { text: "Üniversite", ok: false },
      { text: "İlçe idaresi", ok: false },
      { text: "Büyükşehir belediyesi", ok: false }
    ]
  },
  {
    text: "<p>Danıştay bir kararında \"Resmî Gazete'de yayımlanarak yürürlüğe giren düzenleyici işlemlerin tesisinde izlenen yöntemin bu işlemlerin değiştirilmesinde de aynen uygulanması zorunlu olup ... bu zorunluluk yerine getirilmeksizin Genelge ile yapılan değişikliğin şekil yönünden hukuka aykırı olduğunu....\" kabul etmiştir.<br><br><b>Bu durum idare hukukundaki aşağıdaki ilkelerden hangisinin bir sonucudur?</b></p>",
    diff: 2,
    expl: "Usulde paralellik; bir idari işlemin geri alınmasının, kaldırılmasının ya da değiştirilmesinin, o işlemin tesisinde izlenen yönteme (usule) göre yapılması gerekliliğini ifade eder. Yani Resmî Gazete'de yayımlanarak (belli bir usulle) yürürlüğe giren bir işlemin, genelge gibi daha basit bir usulle değiştirilememesi 'usulde paralellik' ilkesinin sonucudur.",
    answers: [
      { text: "Usulde paralellik ilkesi", ok: true },
      { text: "Yetki saptırması ilkesi", ok: false },
      { text: "Bağlı yetki ilkesi", ok: false },
      { text: "İdarenin takdir yetkisi ilkesi", ok: false },
      { text: "Yetki genişliği ilkesi", ok: false }
    ]
  },
  {
    text: "<p>Kaymakam A, kendisine yapılan başvuru neticesinde Elif ve Hakan hakkında boşanma kararı verir.<br><br><b>Buna göre idarenin yargı organının yerine geçerek onun yapması gereken bir işlemi yapması şeklinde ortaya çıkan ve idari işlemi hukuka aykırı hâle getiren sakatlık hâli aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 2,
    expl: "Fonksiyon gaspı, bir idari makamın (örn. kaymakam), kendi görev alanı dışında kalan ve başka bir erk (yasama veya yargı) tarafından kullanılması gereken bir yetkiyi (örn. boşanma kararı vermek) kullanmasıdır. Bu tür işlemler 'yok hükmündedir'.",
    answers: [
      { text: "Yetki gaspı", ok: false },
      { text: "Fonksiyon gaspı", ok: true },
      { text: "Yetki tecavüzü", ok: false },
      { text: "Yetki devri", ok: false },
      { text: "İmza devri", ok: false }
    ]
  },
  {
    text: "<p>Bir belediye, imar planına uygun şekilde düzenlenmiş ve ruhsatı yasal olarak alınmış bir otelin işletme ruhsatını, otel sahibinin belediye başkanı hakkında açtığı tazminat davasına tepki olarak iptal etmiştir. Ruhsat iptal gerekçesi olarak \"çevre düzenine aykırılık\" gösterilmiş, ancak denetim raporlarında bu duruma rastlanmamıştır.<br><br><b>Yukarıdaki olayda idari işlemin hangi sakatlık türü vurgulanmıştır?</b></p>",
    diff: 3,
    expl: "Yetki saptırması, idarenin sahip olduğu yetkiyi kanunda öngörülen amaca aykırı, kamu yararı gözetilmeden gizli bir amaç için (kin, garez, intikam, siyasi amaç vb.) kullanmasıdır. Olayda belediyenin ruhsat iptal yetkisi var, ancak bu yetkiyi kamu yararı için değil, 'intikam almak' amacıyla kullanmıştır.",
    answers: [
      { text: "Yetki tecavüzü", ok: false },
      { text: "Yetki gaspı", ok: false },
      { text: "Ağır ve bariz yetki tecavüzü", ok: false },
      { text: "Fonksiyon gaspı", ok: false },
      { text: "Yetki saptırması", ok: true }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 8
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_8: McQ[] = [
  {
    text: "<p>Bir üniversitede dekan tarafından alınması gereken kararı rektör veriyor.<br><br><b>Bu durumda ortaya çıkan yetki sakatlığı aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 2,
    expl: "İdarenin kendi içinde üstün ast yerine astın üst yerine veya bir makamın başka bir makam yerine karar alması 'yetki tecavüzü'dür. Örneğin üniversitede dekanın alması gereken bir kararı rektörün (üstün astın yerine geçerek) alması yetki tecavüzü sayılır.",
    answers: [
      { text: "Fonksiyon gaspı", ok: false },
      { text: "Ağır ve bariz yetki tecavüzü", ok: false },
      { text: "Yetki gaspı", ok: false },
      { text: "Yetki tecavüzü", ok: true },
      { text: "Yetki saptırması", ok: false }
    ]
  },
  {
    text: "<p>İdare hukuku doktrininde \"İdarenin icraya ilişkin maddi faaliyet ve hareketleri sırasında ağır bir surette usulsüz hareketleriyle, bir başka deyişle, usul dışı sayılacak maddi fiil ve hareketleriyle bireyin mülkiyet hakkını veya kamu özgürlüklerini ihlal etmesi\" olarak tanımlanan kavram aşağıdakilerden hangisidir?<br><br><b> </b></p>",
    diff: 1,
    expl: "Fiilî yol (Sıddık Sami Onar'ın tanımıyla), idarenin icraya ilişkin maddi faaliyet ve hareketleri sırasında ağır bir surette usulsüz hareketleriyle (örneğin kamulaştırmasız el atma, gözaltındaki birine işkence edilmesi) bireyin mülkiyet hakkına veya temel hak ve hürriyetlerine hukuk dışı müdahalesidir.",
    answers: [
      { text: "Kamu hizmeti", ok: false },
      { text: "Sosyal risk ilkesi", ok: false },
      { text: "Kolluk", ok: false },
      { text: "İdari işlem", ok: false },
      { text: "Fiilî yol", ok: true }
    ]
  },
  {
    text: "<p>Bazı durumlarda, devlet memuru olmayan, idari hiyerarşinin tamamen dışında bulunan kişilerin idare adına giriştikleri eylem ve işlemler, idareden çıkmış gibi geçerli kabul edilmektedir.<br><br><b>İdare hukukunda bu kavrama ne ad verilir?</b></p>",
    diff: 1,
    expl: "Bazen, devlet memuru olmayan, idari hiyerarşinin tamamen dışında bulunan kişilerin idare adına giriştikleri eylem ve işlemler idareden çıkmış gibi geçerli kabul edilmektedir (örneğin yangını söndürmeye çalışan vatandaşın eylemleri). Bu kişilere fiili memur statüsü tanınarak işlemleri geçerli kabul edilir. Buna 'fiili memur teorisi' denir.",
    answers: [
      { text: "Yetki gaspı", ok: false },
      { text: "Bağlı yetki", ok: false },
      { text: "Fonksiyon gaspı", ok: false },
      { text: "Fiili memur teorisi", ok: true },
      { text: "Yetki tecavüzü", ok: false }
    ]
  },
  {
    text: "<p>657 sayılı Devlet Memurları Kanunu'nun 57'nci maddesine göre \"Adaylık süresi içinde aylıktan kesme veya kademe ilerlemesinin durdurulması cezası almış olanların disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir.\"<br><br><b>hükmünde de görüleceği üzere idareye bazı konularda takdir hakkı tanınmaması idare hukukunun hangi kavramı ile ilgilidir?</b></p>",
    diff: 2,
    expl: "İdareye bir tercih imkânı sağlanmamış, belirli şartların gerçekleşmesi hâlinde belli bir çözüm şeklini uygulama ödevi yüklenmişse idarenin 'bağlı yetkisi' söz konusudur. Kanun hükmünde 'ilişikleri kesilir' denilerek idareye takdir hakkı tanınmamıştır, bu açık bir 'bağlı yetki'dir.",
    answers: [
      { text: "Çekilme hakkı", ok: false },
      { text: "İdari vesayet", ok: false },
      { text: "Kanunsuz emir", ok: false },
      { text: "Bağlı yetki", ok: true },
      { text: "Yetki devri", ok: false }
    ]
  },
  {
    text: "<p>• İdari işlemin hukuka aykırılığı sebebiyle geçmişe etkili olarak ortadan kaldırmak amacıyla açılan davadır.<br>• İdarenin işlem veya eylemi nedeniyle kişisel zararın tazmini amacıyla açılan davadır.<br><br><b>Bu açıklamalar sırasıyla aşağıdaki idari dava türlerinden hangilerine karşılık gelir?</b></p>",
    diff: 1,
    expl: "İlk açıklamada hukuka aykırı olduğu iddia edilen işlemin iptal edilmesi (geçmişe etkili ortadan kaldırılması) talep edilmektedir; bu 'İptal davası'dır. İkinci açıklamada ise idarenin işlemi/eylemi sonucu doğan kişisel zararın tazmini (maddi/manevi) istenmektedir; bu 'Tam yargı davası'dır. Sırasıyla İptal davası - Tam yargı davası.",
    answers: [
      { text: "Bileşik dava – İptal davası", ok: false },
      { text: "İptal davası – Eda davası", ok: false },
      { text: "İptal davası – Tam yargı davası", ok: true },
      { text: "Tam yargı davası – İptal davası", ok: false },
      { text: "Tespit davası – Tam yargı davası", ok: false }
    ]
  },
  {
    text: "<p>I. Bir idari işlemin, yetkili idari yargı organı tarafından hukuka aykırılığı nedeniyle geçmişe etkili olarak ortadan kaldırılmasıdır.<br>II. Bir idari işlemin, idarenin kendi iradesiyle geçmişe etkili olarak ortadan kaldırılmasıdır.<br><br><b>Bu durumlar aşağıdaki idare hukukuna özgü yaptırımlarla eşleştirildiğinde hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "İlk cümlede idari yargı organı (mahkeme) tarafından işlemin hukuka aykırılık nedeniyle geçmişe etkili ortadan kaldırılması anlatılmaktadır, bu 'İptal'dir. İkinci cümlede idarenin 'kendi iradesiyle' (mahkeme kararı olmadan) hukuka aykırı işlemi geçmişe etkili ortadan kaldırması anlatılmaktadır, bu da 'Geri alma'dır.",
    answers: [
      { text: "I – İptal / II – Değiştirme", ok: false },
      { text: "I – Yokluk / II – Düzeltme", ok: false },
      { text: "I – Tazminat / II – Geri alma", ok: false },
      { text: "I – İptal / II – Geri alma", ok: true },
      { text: "I – Değiştirme / II – İptal", ok: false }
    ]
  },
  {
    text: "<p><b>Sözleşmenin taraflarının iradesinden bağımsız olarak ortaya çıkan, sözleşmenin yapıldığı zamanda öngörülemeyen olaylar sebebiyle, sözleşmecinin olağan dışı şekilde ağırlaşan yükünün bir kısmının idare tarafından karşılanmasını ifade eden ilke aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Öngörülmezlik (İmprevision) İlkesi: Sözleşmenin taraflarının iradesinden bağımsız olarak ortaya çıkan, sözleşmenin yapıldığı zamanda öngörülemeyen olaylar sebebiyle (savaş, ekonomik kriz vb.), sözleşmecinin olağan dışı şekilde ağırlaşan yükünün bir kısmının idare tarafından karşılanmasını (tazminini) ifade eder.",
    answers: [
      { text: "Öngörülmezlik (İmprevision) İlkesi", ok: true },
      { text: "Res'en icra", ok: false },
      { text: "Risk sorumluluğu", ok: false },
      { text: "Fait Du Prince", ok: false },
      { text: "Fedakârlığın Denkleştirilmesi İlkesi", ok: false }
    ]
  },
  {
    text: "<p><b>İdarenin bir mahkeme kararına gerek duyulmadan, kendiliğinden davranarak kamu düzenini tehdit eden eylemleri önlemek ve bozulan düzeni geri getirmek yetkisi idare hukukunda aşağıdakilerden hangisi ile ifade edilir?</b></p>",
    diff: 1,
    expl: "Re'sen icra yetkisi, idarenin aldığı kararı mahkeme kararına gerek olmaksızın uygulaması, hukuk aleminde tesis ettiği işlemin hukuki sonuçlarını maddi âleme aktarmasıdır (gerektiğinde zor kullanarak).",
    answers: [
      { text: "İdari yaptırım", ok: false },
      { text: "Zor kullanma", ok: false },
      { text: "Res'en icra edilebilirlik", ok: true },
      { text: "Cezai yaptırım", ok: false },
      { text: "Belli bir faaliyeti yapmaktan men edilme", ok: false }
    ]
  },
  {
    text: "<p>I. Eşitlik<br>II. Serbestlik<br>III. Görevin gerektirdiği nitelikleri taşıma<br><br>1982 Anayasası m. 70'e göre, \"Her Türk, kamu hizmetlerine girme hakkına sahiptir. Hizmete alınmada, görevin gerektirdiği niteliklerden başka hiçbir ayırım gözetilemez.\"<br><br><b>ifadesi kamu hizmetine girmede yukarıdaki ilkelerden hangilerinin geçerli olduğunu gösterir?</b></p>",
    diff: 2,
    expl: "Anayasa m.70'te belirtilen \"her Türk girme hakkına sahiptir\" (eşitlik), \"görevin gerektirdiği niteliklerden başka hiçbir ayrım gözetilemez\" (görevin gerektirdiği nitelikleri taşıma/liyakat) ilkeleridir. Ayrıca \"kimse memur olmaya zorlanamaz\" kuralı (serbestlik) de memurluğa girişte geçerli anayasal bir ilkedir. Metin tüm bu ilkeleri (serbestlik, eşitlik, görevin niteliği) kapsar.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, \"Mevcut kuruluş biçimine bakılmaksızın, devlet ve diğer kamu tüzel kişiliklerince genel idare esaslarına göre yürütülen asli ve sürekli kamu hizmetlerini ifa ile görevlendirilenler\" aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "657 sayılı Devlet Memurları Kanunu m.4 uyarınca; \"Mevcut kuruluş biçimine bakılmaksızın, devlet ve diğer kamu tüzel kişiliklerince genel idare esaslarına göre yürütülen asli ve sürekli kamu hizmetlerini ifa ile görevlendirilenler\" MEMUR olarak istihdam edilirler.",
    answers: [
      { text: "Memur", ok: true },
      { text: "Sözleşmeli personel", ok: false },
      { text: "Yardımcı personel", ok: false },
      { text: "İşçi", ok: false },
      { text: "Ücretli personel", ok: false }
    ]
  },
  {
    text: "<p>Demet, Millî Eğitim Bakanlığında veri hazırlama memuru kadrosuna aday memur olarak atanır.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, Demet'in aday memurluk süresi aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Memurluk sınavını kazanan kişiler sıraya göre ilan edilen kadrolara ilgili kurumca önce aday memur olarak alınırlar. Adaylık süresi en az 1 yıl, en çok 2 yıldır.",
    answers: [
      { text: "En az 3 ay, en çok 6 ay", ok: false },
      { text: "En az 6 ay, en çok 1 yıl", ok: false },
      { text: "En az 6 ay, en çok 2 yıl", ok: false },
      { text: "En az 1 yıl, en çok 2 yıl", ok: true },
      { text: "En az 1 yıl, en çok 3 yıl", ok: false }
    ]
  },
  {
    text: "<p>657 sayılı Devlet Memurları Kanunu'na göre, \"Devlet memurlarına, yaptıkları hizmetler için lüzumlu bilgilere ve yetişme şartlarına uygun şekilde, sınıfları içinde en yüksek derecelere kadar ilerleme imkânını sağlamaktır.\" ifadesi aşağıdaki temel ilkelerden hangisini vurgulamaktadır?<br><br><b> </b></p>",
    diff: 1,
    expl: "657 sayılı Kanunun temel ilkelerinden olan Kariyere göre: Devlet memurlarına, yaptıkları hizmetler için lüzumlu bilgilere ve yetişme şartlarına uygun şekilde, sınıfları içinde en yüksek derecelere kadar ilerleme imkânı sağlanmasıdır.",
    answers: [
      { text: "Sınıflandırma", ok: false },
      { text: "Kademe", ok: false },
      { text: "Kariyer", ok: true },
      { text: "Liyakat", ok: false },
      { text: "Kadro", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, aşağıdakilerden hangisi memur olmanın genel şartları arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Memur olmanın genel şartları arasında 'kasten işlenen bir suçtan dolayı 1 yıl veya daha fazla süreyle hapis cezasına mahkûm olmamak' vardır. Taksirli suçlardan (süre ne olursa olsun, örneğin trafik kazası) hüküm giymiş olmak devlet memuru olmaya engel değildir.",
    answers: [
      { text: "En az ortaokul mezunu olmak", ok: false },
      { text: "Askerlikle ilişiği olmamak", ok: false },
      { text: "Görevini devamlı yapmaya engel bir sağlık engeli bulunmamak", ok: false },
      { text: "Taksirli suçlardan hüküm giymemiş olmak", ok: true },
      { text: "Türk vatandaşı olmak", ok: false }
    ]
  },
  {
    text: "<p>Kars'ın Digor ilçesinde görev yapan memur Furkan, yer değiştirme suretiyle Iğdır'ın Tuzluca ilçesindeki bir göreve atanır.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre memur Furkan, atama emrinin kendisine tebliğ tarihinden itibaren kural olarak en fazla ne kadar süre içinde Tuzluca'ya hareket ederek belli yol süresini izleyen iş günü içinde işe başlamak zorundadır?</b></p>",
    diff: 2,
    expl: "Başka yerdeki görevlere atanan memurlar, atama emirlerinin kendilerine tebliğ tarihinden itibaren 15 gün içerisinde o yere hareket ederek belli yol süresini izleyen iş günü içinde işe başlamak zorundadırlar.",
    answers: [
      { text: "2 ay", ok: false },
      { text: "1 ay", ok: false },
      { text: "20 gün", ok: false },
      { text: "15 gün", ok: true },
      { text: "5 gün", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, bir göreve ilk defa veya yeniden atananlardan belge ile ispatı mümkün zorlayıcı sebepler olmaksızın kanunda belirtilen süre içinde işe başlamayanların atanmaları iptal edilir ve bunlar ne kadar süreyle Devlet memuru olarak istihdam edilemezler?</b></p>",
    diff: 1,
    expl: "Bir göreve ilk defa veya yeniden atananlardan belge ile ispatı mümkün zorlayıcı sebepler olmaksızın yasal süre içinde işe başlamayanların atanmaları iptal edilir ve bunlar 1 yıl süreyle Devlet memuru olarak istihdam edilemezler.",
    answers: [
      { text: "1 yıl", ok: true },
      { text: "2 yıl", ok: false },
      { text: "3 yıl", ok: false },
      { text: "5 yıl", ok: false },
      { text: "10 yıl", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 9
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_9: McQ[] = [
  {
    text: "<p>I. Kınama<br>II. Aylıktan kesme<br>III. Kademe ilerlemesinin durdurulması<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, Sağlık Bakanlığına büro personeli atanan Burcu, adaylık süresi içinde yukarıdaki disiplin cezalarından hangilerini alırsa, disiplin amirinin teklifi ve atamaya yetkili amirinin onayı ile memurluk ile ilişiği kesilir?</b></p>",
    diff: 2,
    expl: "Adaylık süresi sonunda başarısızlık: Adaylık süresi içinde aylıktan kesme veya kademe ilerlemesinin durdurulması cezası almış olanların disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Devlet Memurları Kanunu'na tabi kurumlarda görevlendirilen memurlara hizmetlerinin karşılığında, kadroya dayanılarak ay itibarıyla ödenen para aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "657 sayılı Devlet Memurları Kanunu'na tabi kurumlarda görevlendirilen memurlara hizmetlerinin karşılığında, kadroya dayanılarak ay itibarıyla ödenen paraya aylık denir. Aylık peşin alınan paraya denir. İşçi ise emeğin karşılığı olan ücreti alır.",
    answers: [
      { text: "Aylık", ok: true },
      { text: "Sözleşmeli ücreti", ok: false },
      { text: "Temsil giderleri", ok: false },
      { text: "Ödül", ok: false },
      { text: "Temininde güçlük zammı", ok: false }
    ]
  },
  {
    text: "<p>Aday olarak atanan memurların önce bütün memurların ortak vasıfları ile ilgili temel eğitime, daha sonra sınıfları ile ilgili hazırlayıcı eğitime ve staja tabi tutulmaları ve devlet memuru olarak atanabilmeleri için başarılı olmaları şarttır.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, adaylık sürecinde başarısızlığı nedeniyle memurlukla ilişiği kesilen bir memur (sağlık nedenleri hariç) kaç yıl boyunca memurluğa tekrar alınamaz?</b></p>",
    diff: 2,
    expl: "Adaylık süresi içinde temel ve hazırlayıcı eğitim ve staj devrelerinin her birinde başarısız olanlarla adaylık süresi içinde hâl ve hareketlerinde memuriyetle bağdaşmayacak durumları, göreve devamsızlıkları tespit edilenlerin disiplin amirlerinin teklifi ve atamaya yetkili amirin onayı ile ilişikleri kesilir. Adaylık devresi içinde veya sonunda, 56'ncı ve bu madde hükümlerine göre ilişikleri kesilenler (sağlık nedenleri hariç) 3 yıl süre ile devlet memurluğuna alınmazlar.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "7", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Devlet memurları \"Asli Devlet Memurluğuna\" atandıktan sonra en geç bir ay içinde kurumlarınca düzenlenecek merasimle yetkili amirlerin huzurunda yemin ederler ve özlük dosyalarına \"Yemin Belgesi\" ni imzalayarak göreve başlarlar.<br><br><b>Yukarıda verilen ifade 657 sayılı Devlet Memurları Kanunu'nda yer alan ödev ve sorumluluklardan hangisinin gereğidir?</b></p>",
    diff: 1,
    expl: "Sadakat. Devlet memurları, Türkiye Cumhuriyeti Anayasası'na ve kanunlarına sadakatle bağlı kalmak ve milletin hizmetinde Türkiye Cumhuriyeti kanunlarını sadakatle uygulamak zorundadırlar. Devlet memurları bu hususu \"Asli Devlet Memurluğuna\" atandıktan sonra en geç bir ay içinde kurumlarınca düzenlenecek merasimle yetkili amirlerin huzurunda yapacakları yeminle belirtirler ve özlük dosyalarına konulacak \"Yemin Belgesi\"ni imzalayarak göreve başlarlar.",
    answers: [
      { text: "Tarafsızlık ve devlete bağlılık", ok: false },
      { text: "Sadakat", ok: true },
      { text: "Davranış ve iş birliği", ok: false },
      { text: "Basına bilgi ve demeç verme", ok: false },
      { text: "Kişisel sorumluluk ve zarar", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre \"Kanunlarda yazılı haller dışında Devlet memurunun memurluğuna son verilmez, aylık ve başka hakları elinden alınamaz.\" hükmü aşağıdaki memurun genel haklarından hangisi kapsamında düzenlenmiştir?</b></p>",
    diff: 1,
    expl: "Güvenlik: Madde 18 – Kanunlarda yazılı haller dışında Devlet memurunun memurluğuna son verilmez, aylık ve başka hakları elinden alınamaz.",
    answers: [
      { text: "Sendika kurma", ok: false },
      { text: "Güvenlik", ok: true },
      { text: "Kovuşturma ve yargılama", ok: false },
      { text: "Uygulamayı isteme", ok: false },
      { text: "İsnat ve iftiralara karşı koruma", ok: false }
    ]
  },
  {
    text: "<p>• Devlet memurları herhangi bir siyasi parti, kişi veya zümrenin yararını veya zararını hedef tutan bir davranışta bulunamazlar, hiçbir şekilde siyasi ve ideolojik amaçlı beyanda ve eylemde bulunamazlar.<br>• Devlet memurları Türkiye Cumhuriyeti Anayasası'na ve kanunlarına aykırı olan, memleketin bağımsızlığını ve bütünlüğünü bozan Türkiye Cumhuriyeti'nin güvenliğini tehlikeye düşüren herhangi bir faaliyette bulunamazlar.<br><br><b>657 sayılı Devlet Memurları Kanunu'nun bu hükümleri aşağıdaki ödev ve sorumluluklardan hangisi kapsamında düzenlenmiştir?</b></p>",
    diff: 1,
    expl: "Tarafsızlık ve devlete bağlılık: Madde 7 - Devlet memurları siyasi partiye üye olamazlar, herhangi bir siyasi parti, kişi veya zümrenin yararını veya zararını hedef tutan bir davranışta bulunamazlar; görevlerini yerine getirirlerken dil, ırk, cinsiyet, siyasi düşünce, felsefi inanç, din ve mezhep gibi ayırım yapamazlar; hiçbir şekilde siyasi ve ideolojik amaçlı beyanda ve eylemde bulunamazlar ve bu eylemlere katılamazlar. Devlet memurları her durumda Devletin menfaatlerini korumak mecburiyetindedirler.",
    answers: [
      { text: "Yurt dışında davranış", ok: false },
      { text: "Mal bildirimi", ok: false },
      { text: "Basına bilgi ve demeç verme", ok: false },
      { text: "Kişisel sorumluluk ve zarar", ok: false },
      { text: "Tarafsızlık ve devlete bağlılık", ok: true }
    ]
  },
  {
    text: "<p>Zeynep, bir kamu hastanesinde hemşire olarak çalışmaktadır. Görev yaptığı bir gün, ilaç dağıtımı sırasında karışıklık yaşanır ve bir hasta yanlış ilaç aldığı için zarar görür. Hasta ve ailesi, zararın tazmini için dava açmaya karar verir.<br><br><b>1982 Anayasası'na göre, bu dava;</b><br><br>I. Hemşire Zeynep,<br>II. Hastanenin bağlı olduğu idare,<br>III. Zeynep'in en üst amiri<br><br><b>verilenlerden hangileri aleyhine açılabilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 129. maddesinin 5. fıkrası, kamu görevlilerinin görevlerinden doğan zararlardan dolayı doğrudan dava açılacak kişi veya kurumu şu şekilde düzenler: \"Memurlar ve diğer kamu görevlilerinin yetkilerini kullanırken işledikleri kusurlardan doğan tazminatlar, ancak idare aleyhine açılacak davayla istenebilir. İdare, ilgiliye rücu eder\".",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, \"memurun yasakları\" başlığı altında düzenlenen konular arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Memurun Yasakları şunlardır: Toplu eylem ve hareketlerde bulunma yasağı, Grev yasağı, Ticaret ve diğer kazanç getirici faaliyetlerde bulunma yasağı, Hediye alma, menfaat sağlama yasağı, Gizli bilgileri açıklama yasağı, Denetimindeki teşebbüsten menfaat sağlama yasağı, Siyasi partilere üye olma yasağı. Müracaat, şikâyet ve dava açma ise \"memurun hakları\" başlığı altında düzenlenmiştir.",
    answers: [
      { text: "Toplu eylem ve hareketlerde bulunma", ok: false },
      { text: "Müracaat, şikâyet ve dava açma", ok: true },
      { text: "Hediye alma ve menfaat sağlama", ok: false },
      { text: "Gizli bilgileri açıklama", ok: false },
      { text: "Denetimindeki teşebbüsten menfaat sağlama", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre eşleri, reşit olmayan veya mahcur olan çocukları, yasaklanan faaliyetlerde bulunan memurlar bu durumu kaç gün içinde bağlı oldukları kuruma bildirmekle yükümlüdürler?</b></p>",
    diff: 1,
    expl: "657 sayılı Devlet Memurları Kanunu'na göre, eşleri, reşit olmayan veya mahcur olan çocukları, yasaklanan faaliyetlerde bulunan memurlar bu durumu 15 gün içinde bağlı oldukları kuruma bildirmekle yükümlüdürler.",
    answers: [
      { text: "7", ok: false },
      { text: "10", ok: false },
      { text: "15", ok: true },
      { text: "30", ok: false },
      { text: "45", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Devlet Memurları Kanunu'nda öngörülen hizmet sınıflarından biri değildir?</b></p>",
    diff: 1,
    expl: "Devlet Memurları Kanunu'na tabi kurumlarda çalıştırılan 12 hizmet sınıfı vardır. Bunlar: Genel idare hizmetleri sınıfı, Teknik hizmetler sınıfı, Sağlık ve yardımcı sağlık hizmetleri sınıfı, Eğitim ve öğretim hizmetleri sınıfı, Yardımcı hizmetler sınıfı, Emniyet hizmetleri sınıfı, Din hizmetleri sınıfı, Avukatlık hizmetleri sınıfı, Mülki idare hizmetleri sınıfı, Millî istihbarat hizmetleri sınıfı, Jandarma hizmetleri sınıfı (2016), Sahil güvenlik hizmetleri sınıfı (2016). Hâkimlik hizmetleri sınıfı diye bir sınıf yoktur.",
    answers: [
      { text: "Yardımcı hizmetler sınıfı", ok: false },
      { text: "Teknik hizmetler sınıfı", ok: false },
      { text: "Hâkimlik hizmetleri sınıfı", ok: true },
      { text: "Din hizmetleri sınıfı", ok: false },
      { text: "Jandarma hizmetleri sınıfı", ok: false }
    ]
  },
  {
    text: "<p>Dışişleri Bakanlığında memur olan Ahmet'e arkadaşı Gamze 657 sayılı Kanun'a tabi hizmet sınıflarından hangisinin içinde görev yaptığını soruyor. Ahmet, Gamze'ye cevap olarak benim sınıfım kanunda yönetim, icra, büro ve benzeri hizmetler olarak geçiyor diyor.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, Ahmet'in görev yaptığı hizmet sınıfı bu Kanun'a tabi aşağıdaki hizmet sınıflarından hangisidir?</b></p>",
    diff: 1,
    expl: "Genel İdare Hizmetleri Sınıfı: Bu Kanunun kapsamına dahil kurumlarda yönetim, icra, büro ve benzeri hizmetleri gören ve bu Kanunla tespit edilen diğer sınıflara girmeyen memurlar Genel İdare Hizmetleri sınıfını teşkil eder.",
    answers: [
      { text: "Teknik hizmetler sınıfı", ok: false },
      { text: "Yardımcı hizmetler sınıfı", ok: false },
      { text: "Mülki idare hizmetleri sınıfı", ok: false },
      { text: "Genel idare hizmetleri sınıfı", ok: true },
      { text: "Avukatlık hizmetleri sınıfı", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, aşağıdakilerden hangisi istisnai memurlardan biri değildir?</b></p>",
    diff: 2,
    expl: "Kaymakamlık meslek memurluğudur. Kaymakam olmak için yazılı sınava girme şartı vardır ve kaymakamlık güvenceli memuriyettir. Valiler, büyükelçiler, TBMM memurları, Cumhurbaşkanlığı memurları, MİT memurları, bakan yardımcıları istisnai memur kadrolarıdır.",
    answers: [
      { text: "Büyükelçi", ok: false },
      { text: "Meclis memuru", ok: false },
      { text: "Kaymakam", ok: true },
      { text: "Cumhurbaşkanlığı memuru", ok: false },
      { text: "Bakan yardımcısı", ok: false }
    ]
  },
  {
    text: "<p>Çekilen devlet memurlarından devir ve teslim ile yükümlü olanlar, bu işlemlerin sonuna kadar görevlerini bırakamazlar.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, bu kurala aykırı davrananlar ne kadar süre geçmeden Devlet memurluğuna yeniden alınamazlar?</b></p>",
    diff: 2,
    expl: "Çekilen devlet memurlarından devir ve teslim ile yükümlü olanlar, bu işlemlerin sonuna kadar görevlerini bırakamazlar. Bu maddede yazılı zorunluluklara uymayanlar 3 yıl geçmeden devlet memurluğuna alınamazlar.",
    answers: [
      { text: "6 ay", ok: false },
      { text: "1 yıl", ok: false },
      { text: "2 yıl", ok: false },
      { text: "3 yıl", ok: true },
      { text: "5 yıl", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, \"yıllık izinlerin kullanılması\" ile ilgili aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Yıllık izinler, amirin uygun bulacağı zamanlarda, toptan veya ihtiyaca göre kısım kısım kullanılabilir. Birbirini izleyen iki yılın izni bir arada kullanılabilir. Cari yıl ile bir önceki yıl hariç, önceki yıllara ait kullanılmayan izin hakları düşer. Dolayısıyla kullanılmayan izinlerin hiçbir şekilde devredilemeyeceği ifadesi yanlıştır, bir önceki yılın izni cari yıla devredilebilir.",
    answers: [
      { text: "Yıllık izin, amirin uygun göreceği zamanlarda verilir.", ok: false },
      { text: "Hizmeti 1 yıldan 10 yıla kadar (on yıl dahil) olanlar için 20 gündür.", ok: false },
      { text: "Yıllık izin hakkı, memurun 1 yıl fiilî çalışmasından sonra doğar.", ok: false },
      { text: "Kullanılmayan yıllık izinler hiçbir şekilde devredilemez.", ok: true },
      { text: "Hizmeti 10 yıldan fazla olanlar için 30 gündür.", ok: false }
    ]
  },
  {
    text: "<p>Millî Eğitim Bakanlığında öğretmen olarak görev yapan Fatma, analık iznine ayrılır. Ancak analık izninin bitmesine iki hafta kala erken doğum yapar.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre Fatma, doğumdan sonra ne kadar süre analık izni kullanabilir?</b></p>",
    diff: 3,
    expl: "Kadın memura; doğumdan önce 8, doğumdan sonra 8 hafta olmak üzere toplam 16 hafta süreyle analık izni verilir. Doğumun erken gerçekleşmesi sebebiyle, doğum öncesi analık izninin kullanılamayan bölümü de doğum sonrası analık izni süresine ilave edilir. Doğumdan önce kullanılamayan 2 hafta, doğum sonrası 8 haftaya ekleneceğinden toplam 10 hafta analık izni kullanabilir.",
    answers: [
      { text: "6 hafta", ok: false },
      { text: "8 hafta", ok: false },
      { text: "9 hafta", ok: false },
      { text: "10 hafta", ok: true },
      { text: "12 hafta", ok: false }
    ]
  },
  {
    text: "<p><b>Devlet Memurları Kanunu'na göre, kamu kurum ve kuruluşlarının engelli memur çalıştırma yükümlülük oranı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Kurum ve kuruluşlar bu kanuna göre çalıştırdıkları personele ait kadrolarda %3 oranında engelli çalıştırmak zorundadır.",
    answers: [
      { text: "%1", ok: false },
      { text: "%2", ok: false },
      { text: "%3", ok: true },
      { text: "%4", ok: false },
      { text: "%5", ok: false }
    ]
  }
];

// ============================================================================
// İDARE HUKUKU - TEST 10
// ============================================================================
export const VAT_IDARE_HUKUKU_TEST_10: McQ[] = [
  {
    text: "<p>06.11.2025'te Millî Eğitim Bakanlığına öğretmen olarak atanan Fuat, göreve başlarken mal bildiriminde bulunur.<br><br><b>3628 sayılı Mal Bildirimi ve Yolsuzlukla Mücadele Kanunu'na göre, Fuat'ın bu süreç içerisinde mal varlığında önemli bir değişiklik olmadığı düşünüldüğünde, mal bildirimini en geç aşağıdaki tarihlerden hangisinde yenilemesi gerekir?</b></p>",
    diff: 2,
    expl: "Bu kanun kapsamındaki görevlere devam edenler, sonu (0) ve (5) ile biten yılların en geç şubat ayı sonuna kadar bildirimlerini yenilerler. 06.11.2025 tarihinde mal bildiriminde bulunan Fuat, sonu 0 veya 5 ile biten bir tarihte mal beyanında bulunacaktır. Bu tarih de sonu 0 ile biten 2030 yılının şubat ayı sonu, yani 25.02.2030'dur.",
    answers: [
      { text: "31.12.2025", ok: false },
      { text: "10.07.2025", ok: false },
      { text: "27.02.2026", ok: false },
      { text: "25.02.2027", ok: false },
      { text: "25.02.2030", ok: true }
    ]
  },
  {
    text: "<p>Denizli Valiliğinde nüfus memuru olarak görev yapan M'nin 12 gün boyunca kesintisiz ve özürsüz olarak göreve gelmediği tespit edilir.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre memur M için aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "657 sayılı DMK'ya göre bir memur; 1 ila 2 gün göreve mazeretsiz gelmez ise aylıktan kesme disiplin cezası, 3 ila 9 gün göreve gelmez ise kademe ilerlemesinin durdurulması disiplin cezası alır. Mazeretsiz veya kurumlarınca kabul edilen mazereti olmaksızın görevin terk edilmesi ve bu terkin kesintisiz 10 gün devam etmesi hâlinde, yazılı müracaat şartı aranmaksızın çekilmiş sayılır. 12 gün kesintisiz ve özürsüz göreve gelmeyen M, çekilmiş sayılır.",
    answers: [
      { text: "Hakkında memurluktan çıkarma kararı verilir.", ok: false },
      { text: "Uyarma disiplin cezası alır.", ok: false },
      { text: "Çekilmiş sayılır.", ok: true },
      { text: "Kademe ilerlemesinin durdurulması disiplin cezası alır.", ok: false },
      { text: "Aylıktan kesme disiplin cezası alır.", ok: false }
    ]
  },
  {
    text: "<p>Özel bir iş yerinde çalışan Ali, arkadaşı Mert'e devlet memurluğunun haftalık çalışma süresi bakımından kendi çalışma koşullarından daha avantajlı olduğunu söyler.<br><br><b>Devlet Memurları Kanunu'na göre, memurların haftalık çalışma süresi genel olarak kaç saattir?</b></p>",
    diff: 1,
    expl: "Memurların haftalık çalışma süresi genel olarak 40 saattir. Bu süre cumartesi ve pazar günleri tatil olmak üzere düzenlenir.",
    answers: [
      { text: "30", ok: false },
      { text: "25", ok: false },
      { text: "40", ok: true },
      { text: "45", ok: false },
      { text: "50", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, son kaç yıl içinde herhangi bir disiplin cezası almayan memurlara, aylık derecelerinin yükseltilmesinde dikkate alınmak üzere bir kademe ilerlemesi uygulanır?</b></p>",
    diff: 2,
    expl: "Son sekiz yıl içinde herhangi bir disiplin cezası almayan memurlara, aylık derecelerinin yükseltilmesinde dikkate alınmak üzere bir kademe ilerlemesi uygulanır.",
    answers: [
      { text: "4", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: true },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p>Fikret, memura verilen disiplin cezalarını aşağıdaki gibi deftere not alıyor.<br><br><i>(Not defteri: 657 sayılı Devlet Memurları Kanunu'na göre, memura verilebilecek disiplin cezaları: Görevden uzaklaştırma, Sürgün, Yer değiştirme, Alt düzeydeki bir göreve atanma, Kademe ilerlemesinin durdurulması)</i><br><br><b>Buna göre Fikret, 657 sayılı Devlet Memurları Kanunu'nda yer alan disiplin cezalarından hangisini doğru yazmıştır?</b></p>",
    diff: 2,
    expl: "657 sayılı DMK'ya göre memurlara verilebilecek disiplin cezaları beş tanedir: uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve memurluktan çıkarmadır. Fikret'in not defterinde yalnızca 'kademe ilerlemesinin durdurulması' doğru yazılmıştır. Görevden uzaklaştırma bir disiplin cezası değil ihtiyati tedbirdir; sürgün, yer değiştirme ve alt düzeydeki göreve atanma ise 657 sayılı Kanun'da yer almayan ifadelerdir.",
    answers: [
      { text: "Sürgün", ok: false },
      { text: "Kademe ilerlemesinin durdurulması", ok: true },
      { text: "Yer değiştirme", ok: false },
      { text: "Görevden uzaklaştırma", ok: false },
      { text: "Alt düzeydeki bir göreve atanma", ok: false }
    ]
  },
  {
    text: "<p>Ferit, devlete ait resmî belge, araç, gereç ve benzerlerini özel menfaat sağlamak için kullanmaktan aylıktan kesme disiplin cezası alıyor.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, aylıktan kesme memurun brüt aylığının kaçta kaçında kesinti yapılmasıdır?</b></p>",
    diff: 2,
    expl: "Aylıktan kesme: Memurun brüt aylığından 1/30 – 1/8 arasında kesinti yapılmasıdır.",
    answers: [
      { text: "1/30 – 1/3", ok: false },
      { text: "1/30 – 1/5", ok: false },
      { text: "1/30 – 1/6", ok: false },
      { text: "1/30 – 1/8", ok: true },
      { text: "1/30 – 1/10", ok: false }
    ]
  },
  {
    text: "<p>M, özürsüz olarak 3-9 gün göreve gelmemekten dolayı kademe ilerlemesinin durdurulması cezası alıyor.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, kademe ilerlemesinin durdurulması cezası verilen M'nin bulunduğu kademede ilerlemesi en fazla kaç yıl durdurulabilir?</b></p>",
    diff: 2,
    expl: "Kademe ilerlemesinin durdurulması: Fiilin ağırlık derecesine göre memurun, bulunduğu kademede ilerlemesinin 1-3 yıl durdurulmasıdır.",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: true },
      { text: "5", ok: false },
      { text: "10", ok: false }
    ]
  },
  {
    text: "<p><b>657 Sayılı Devlet Memurları Kanunu'na göre, aşağıdaki fiillerden hangisi diğerlerinden daha ağır bir disiplin cezası gerektirir?</b></p>",
    diff: 3,
    expl: "Devlet memurlarına verilecek disiplin cezaları sırasıyla uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve Devlet memurluğundan çıkarmadır. Belirlenen kılık ve kıyafet hükümlerine aykırı davranmak (uyarma), borçlarını kasten ödememek (kınama), ticaret yapmak veya kazanç getirici faaliyetlerde bulunmak ile verilen görev ve emirleri kasten yapmamak (kademe ilerlemesinin durdurulması) cezasını gerektirirken; özürsüz olarak bir yılda toplam 20 gün göreve gelmemek Devlet memurluğundan çıkarma disiplin cezasını gerektirir.",
    answers: [
      { text: "Borçlarını kasten ödeyerek hakkında yasal yollara başvurulmasına neden olmak", ok: false },
      { text: "Ticaret yapmak veya Devlet memurlarına yasaklanan diğer kazanç getirici faaliyetlerde bulunmak", ok: false },
      { text: "Verilen görev ve emirleri kasten yapmamak", ok: false },
      { text: "Özürsüz olarak bir yılda toplam 20 gün göreve gelmemek", ok: true },
      { text: "Belirlenen kılık ve kıyafet hükümlerine aykırı davranmak", ok: false }
    ]
  },
  {
    text: "<p><b>Devlet Memurları Kanunu'na göre, aşağıdakilerden hangisi memurluktan çıkarma disiplin cezasını gerektiren fiillerden biri <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "Memurluktan çıkarma cezasını gerektiren fiiller arasında; siyasi partiye girmek, 5816 sayılı Atatürk Aleyhine İşlenen Suçlar Hakkındaki Kanun'a aykırı fiilleri işlemek, yetki almadan gizli bilgileri açıklamak, amirlerine/maiyetindekilere ve iş sahiplerine fiilî tecavüzde bulunmak yer almaktadır. Ancak 'belirlenen sürede mal bildiriminde bulunmamak' memurluktan çıkarma cezasını değil, kademe ilerlemesinin durdurulması disiplin cezasını gerektirir.",
    answers: [
      { text: "Belirlenen sürede mal bildiriminde bulunmamak", ok: true },
      { text: "Siyasi partiye girmek", ok: false },
      { text: "5816 sayılı Atatürk Aleyhine İşlenen Suçlar Hakkındaki Kanun'a aykırı fiilleri işlemek", ok: false },
      { text: "Yetki almadan gizli bilgileri açıklamak", ok: false },
      { text: "Amirlerine, maiyetindekilere ve iş sahiplerine fiilî tecavüzde bulunmak", ok: false }
    ]
  },
  {
    text: "<p>Aylıktan kesme cezası ile tecziye edilenler ____ yıl, kademe ilerlemesinin durdurulması cezası ile tecziye edilenler ____ yıl boyunca daire başkanı kadrolarına, daire başkanı kadrosunun dengi ve daha üstü kadrolara, bölge ve il teşkilatlarının en üst yönetici kadrolarına, düzenleyici ve denetleyici kurumların başkanlık ve üyeliklerine, vali ve büyükelçi kadrolarına atanamazlar.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, yukarıda bırakılan boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "657 sayılı DMK'ya göre aylıktan kesme cezası ile tecziye edilenler 5 yıl, kademe ilerlemesinin durdurulması cezası ile tecziye edilenler 10 yıl boyunca ilgili kadrolara atanamazlar.",
    answers: [
      { text: "bir – 2", ok: false },
      { text: "iki – 4", ok: false },
      { text: "üç – 6", ok: false },
      { text: "dört – 8", ok: false },
      { text: "beş – 10", ok: true }
    ]
  },
  {
    text: "<p>Devlete ait resmî belge, araç, gereç ve benzerlerini özel menfaat sağlamak için kullanması nedeniyle okul müdürü Nazlı'ya aylıktan kesme disiplin cezası verilmiştir.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre Nazlı; bu cezanın uygulanmasından başlayarak en az kaç yıl sonra atamaya yetkili amirine başvurarak özlük dosyasından silinmesini isteyebilir?</b></p>",
    diff: 2,
    expl: "Disiplin cezaları memurun özlük dosyasına işlenir. Devlet memurluğundan çıkarma cezasından başka bir disiplin cezasına çarptırılmış olan memur; uyarma ve kınama cezalarının uygulanmasından 5 sene, diğer cezaların uygulanmasından 10 sene sonra atamaya yetkili amire başvurarak, verilmiş olan cezalarının özlük dosyasından silinmesini isteyebilir. Aylıktan kesme 'diğer cezalar' kapsamında olduğundan 10 yıl gerekir.",
    answers: [
      { text: "2", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false },
      { text: "8", ok: false },
      { text: "10", ok: true }
    ]
  },
  {
    text: "<p>Gümrük memuru A, zimmetine para geçirmekten hakkında açılan ceza soruşturması nedeniyle görevden uzaklaştırılıyor.<br><br><b>657 sayılı Devlet Memurları Kanunu'na göre, görevden uzaklaştırılan memur A'ya bu süre içinde aylığının ne kadarı ödenir?</b></p>",
    diff: 2,
    expl: "Görevden uzaklaştırılan ve görevi ile ilgili olsun veya olmasın herhangi bir suçtan tutuklanan veya gözaltına alınan memurlara bu süre içinde aylıklarının üçte ikisi ödenir.",
    answers: [
      { text: "Tamamı", ok: false },
      { text: "Yarısı", ok: false },
      { text: "Üçte biri", ok: false },
      { text: "Dörtte üçü", ok: false },
      { text: "Üçte ikisi", ok: true }
    ]
  },
  {
    text: "<p>Devlet Memurları Kanunu'na göre, devlet memuru hakkında savunması alınmadan disiplin cezası verilemez.<br><br><b>Buna göre savunma için devlet memuruna tanınacak en az süre aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Soruşturmayı yapan veya yetkili disiplin kurulunun 7 günden az olmamak üzere verdiği süre içinde veya belirtilen bir tarihte savunmasını yapmayan memur, savunma hakkından vazgeçmiş sayılır.",
    answers: [
      { text: "1 gün", ok: false },
      { text: "3 gün", ok: false },
      { text: "5 gün", ok: false },
      { text: "7 gün", ok: true },
      { text: "15 gün", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre disiplin cezasını gerektiren fiil ve hâllerin işlendiği tarihten itibaren nihayet ne kadar süre içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zaman aşımına uğrar?</b></p>",
    diff: 2,
    expl: "Zaman aşımı: Disiplin cezasını gerektiren fiil ve hallerin işlendiği tarihten itibaren nihayet 2 yıl içinde disiplin cezası verilmediği takdirde ceza verme yetkisi zaman aşımına uğrar. (Uyarma, kınama, aylıktan kesme ve kademe ilerlemesinin durdurulması cezalarında 1 ay içinde disiplin soruşturmasına; memurluktan çıkarma cezasında 6 ay içinde disiplin kovuşturmasına başlanmadığı takdirde de zaman aşımı söz konusudur.)",
    answers: [
      { text: "6 ay", ok: false },
      { text: "1 yıl", ok: false },
      { text: "2 yıl", ok: true },
      { text: "5 yıl", ok: false },
      { text: "10 yıl", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre memurların,</b><br>I. görevden uzaklaştırılmaları,<br>II. kadrolarının kaldırılması,<br>III. emekliliğe ayrılma<br><br><b>hâllerinin hangilerinde memurluk sona erer?</b></p>",
    diff: 2,
    expl: "Devlet memurluğunu sona erdiren hâller: ölüm, emeklilik, memurluktan çıkarılma, bağdaşmazlık, koşullarda eksiklik, çekilmiş sayılma ve çekilmedir. Görevden uzaklaştırma memuruluğu sona erdirmez; kadrolarının kaldırılması da memuruluğu sona erdirmez (memur başka kadroya atanır). Emekliliğe ayrılma ise memuruluğu sona erdirir. Dolayısıyla yalnızca III memuruluğu sona erdirir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>657 sayılı Devlet Memurları Kanunu'na göre, aşağıda verilen ifadelerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "2 yıl süreli yükseköğrenim bitirenlerin memurluğa giriş derece ve kademesi 10/2'dir. A, B, C ve E seçeneklerinde verilen bilgiler doğrudur.",
    answers: [
      { text: "Cenaze ve evlilik izni 7 gün babalık izni ise 10 gündür.", ok: false },
      { text: "Kanunda sayılan istihdam biçimleri memur, sözleşmeli personel ve işçilerdir.", ok: false },
      { text: "4 yıl süreli yükseköğrenim bitirenlerin memurluğa giriş derece ve kademesi 9/1'dir.", ok: false },
      { text: "2 yıl süreli yükseköğrenim bitirenlerin memurluğa giriş derece ve kademesi 9/2'dir.", ok: true },
      { text: "Devlet memurları kanununun temel ilkeleri sınıflandırma, kariyer ve liyakattir.", ok: false }
    ]
  }
];
 