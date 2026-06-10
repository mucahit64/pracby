import { McQ } from "../../../../types";

// ============================================================================
// TARAMA - TEST 1
// ============================================================================
export const VAT_TARAMA_TEST_1: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, siyasi partilere üye olabilmesine rağmen siyasi partilerin sadece merkez organlarında görev alabilen kamu görevlisi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre memurlar ve diğer kamu görevlileri siyasi partilere üye olabilir; ancak yalnızca partilerin merkez organlarında görev alabilirler. Öğretim elemanları ise siyasi partilere üye olamazlar. Sözleşmeli personel, işçiler ve yükseköğretim öğrencileri bu kısıtlamaya tabi değildir.",
    answers: [
      { text: "Sözleşmeli personel", ok: false },
      { text: "Öğretim elemanları", ok: false },
      { text: "Memurlar", ok: true },
      { text: "İşçiler", ok: false },
      { text: "Yükseköğretim öğrencileri", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda idareye ilişkin aşağıdaki ilkelerden hangisi belirtilmemiştir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nda idareye ilişkin belirtilen temel ilkeler şunlardır: yetkide ve usulde paralellik ilkesi, idarenin bütünlüğü ilkesi, merkezden yönetim ilkesi ve kanuni idare ilkesi. 'Yetki genişliği ilkesi' ise Anayasa'da ayrıca ve açıkça bir ilke olarak adlandırılarak belirtilmemiştir.",
    answers: [
      { text: "Yetkide ve usulde paralellik ilkesi", ok: false },
      { text: "İdarenin bütünlüğü ilkesi", ok: false },
      { text: "Yetki genişliği ilkesi", ok: true },
      { text: "Merkezden yönetim ilkesi", ok: false },
      { text: "Kanuni idare ilkesi", ok: false }
    ]
  },
  {
    text: "<p>I. Anayasa Mahkemesi<br>II. Yargıtay<br>III. Uyuşmazlık Mahkemesi<br>IV. Danıştay<br><br><b>1982 Anayasası'na göre yukarıdakilerden hangilerinin başkanı, kendi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğu ile seçilir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre Yargıtay ve Danıştay başkanları, kendi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğuyla seçilir. Anayasa Mahkemesi Başkanı da kendi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğuyla seçilir. Uyuşmazlık Mahkemesi ise başkanını üyeleri arasından Anayasa Mahkemesi'nin belirleyeceği üye arasından seçer. Dolayısıyla I, II ve IV bu yöntemle başkanını seçer.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve IV", ok: true }
    ]
  },
  {
    text: "<p>I. Eğitim ve öğretim hakkı ve ödevi<br>II. Kamu hizmetine girme hakkı<br>III. Bilgi edinme hakkı<br>IV. Siyasi faaliyette bulunma hakkı<br><br><b>1982 Anayasası'na göre, yukarıdaki hakların hangilerinden yabancılar yararlanabilir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre temel haklar kural olarak herkese (Türk vatandaşları ve yabancılar) tanınmıştır; ancak bazı haklar yalnızca Türk vatandaşlarına aittir. Kamu hizmetine girme hakkı (md. 70) ve siyasi faaliyette bulunma hakkı (siyasi parti kurma, üye olma vb.) yalnızca Türk vatandaşlarına tanınmıştır. Eğitim ve öğretim hakkı ile bilgi edinme hakkı yabancılar dahil herkese tanınmıştır. Dolayısıyla yabancılar I ve III'ten yararlanabilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "I, II ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, seçim kanunlarında yapılan değişiklikler, yürürlüğe girdiği tarihten itibaren kaç yıl içinde yapılacak seçimlerde uygulanmaz?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre seçim kanunlarında yapılan değişiklikler, yürürlüğe girdiği tarihten itibaren bir yıl içinde yapılacak seçimlerde uygulanmaz.",
    answers: [
      { text: "1", ok: true },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "5", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p>Borçlarını ödeyemeyen borçlunun, mal varlığının mahkeme kararıyla alacaklılara dağıtılması amacıyla yasal süreç başlatılması işlemi aşağıdakilerden hangisi ile ifade edilir?</p>",
    diff: 2,
    expl: "İflas, ödeme güçlüğü içindeki bir borçlunun tüm mal varlığının mahkeme kararıyla alacaklılara dağıtılması amacıyla başlatılan yasal süreçtir. Tasfiye mal varlığının tasfiyesini, rehin bir güvence türünü, ipotek taşınmaz üzerindeki rehin hakkını, gabin ise aşırı yararlanma (fahiş fiyat) durumunu ifade eder.",
    answers: [
      { text: "Tasfiye", ok: false },
      { text: "Rehin", ok: false },
      { text: "İpotek", ok: false },
      { text: "İflas", ok: true },
      { text: "Gabin", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türkiye Büyük Millet Meclisi üyeleri aşağıdakilerden hangisini temsil eder?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre TBMM üyeleri seçildikleri bölgeyi veya kendilerini seçenleri değil, tüm milleti temsil eder. Bu, milletvekili temsilinin genel niteliğinin bir gereğidir.",
    answers: [
      { text: "Seçildikleri ili", ok: false },
      { text: "Tüm milleti", ok: true },
      { text: "Seçildikleri ilçeyi", ok: false },
      { text: "Yüksek yargıyı", ok: false },
      { text: "Siyasi partileri", ok: false }
    ]
  },
  {
    text: "<p>I. Dicle Üniversitesi<br>II. Çankırı Belediyesi<br>III. Bursa Barosu<br><br><b>Yönetmelik yapmaya ilişkin 1982 Anayasası hükümleri dikkate alındığında yukarıdaki birimlerden hangileri yönetmelik çıkarabilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre yönetmelik çıkarabilecek kurumlar: Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri. Üniversiteler ve belediyeler kamu tüzel kişisi niteliğinde olduğundan yönetmelik çıkarabilir. Barolar ise kamu kurumu niteliğinde meslek kuruluşu olup yönetmelik değil, ağırlıklı olarak yönerge/iç düzenleme çıkarır; Anayasa'da yönetmelik çıkarma yetkisi açıkça verilmemiştir. Dolayısıyla I ve II yönetmelik çıkarabilir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türk vatandaşlığı aşağıdakilerden hangisiyle kazanılamaz?</b></p>",
    diff: 2,
    expl: "Türk vatandaşlığı; doğum (soy ve toprak esasına göre), yetkili makam kararı (귀화/vatandaşlığa alma), mahkeme kararıyla ve evlenme yoluyla kazanılabilir. Seçme hakkının kullanılması vatandaşlık kazandırmaz; aksine vatandaşlık, seçme hakkının ön koşuludur.",
    answers: [
      { text: "Doğum", ok: false },
      { text: "Yetkili makam kararı", ok: false },
      { text: "Seçme hakkının kullanılması", ok: true },
      { text: "Mahkeme kararıyla", ok: false },
      { text: "Evlenme yoluyla", ok: false }
    ]
  },
  {
    text: "<p>Eşler, ancak birlikte evlât edinebilirler; evli olmayanlar birlikte evlât edinemezler.<br><br><b>Buna göre evlat edinebilmek için eşlerin en az kaç yıldan beri evli olmaları veya kaç yaşını doldurmuş bulunmaları gerekir?</b></p>",
    diff: 2,
    expl: "Medeni Kanun'a göre eşlerin birlikte evlat edinebilmesi için en az 5 yıldan beri evli olmaları veya her ikisinin de 30 yaşını doldurmuş bulunmaları gerekir.",
    answers: [
      { text: "1 yıl – 20 yaş", ok: false },
      { text: "3 yıl – 25 yaş", ok: false },
      { text: "3 yıl – 30 yaş", ok: false },
      { text: "5 yıl – 25 yaş", ok: false },
      { text: "5 yıl – 30 yaş", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda yarı doğrudan demokrasinin araçlarından hangisi düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Yarı doğrudan demokrasinin araçları; referandum (halk oylaması), halk teşebbüsü (halk inisiyatifi), halk vetosu ve temsilcilerin azlidir. 1982 Anayasası'nda bu araçlardan yalnızca referandum (halk oylaması) düzenlenmiştir.",
    answers: [
      { text: "Halk teşebbüsü", ok: false },
      { text: "Halk meclisi", ok: false },
      { text: "Referandum", ok: true },
      { text: "Halk vetosu", ok: false },
      { text: "Temsilcilerin azli", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki mahkemelerin hangileri arasındaki görev ve hüküm uyuşmazlıkları Uyuşmazlık Mahkemesi tarafından çözümlenir?</b></p>",
    diff: 2,
    expl: "Uyuşmazlık Mahkemesi, adli ve idari yargı kolları arasındaki görev ve hüküm uyuşmazlıklarını çözümler. İdare mahkemesi ile vergi mahkemesi arasındaki uyuşmazlıklar her ikisi de idari yargı koluna ait olduğundan Uyuşmazlık Mahkemesi'nin değil, bölge idare mahkemesinin görev alanına girer. Diğer seçeneklerde ise biri adli biri idari yargı kolundan mahkemeler karşı karşıya değil, aynı yargı kolundan mahkemeler yer almaktadır. İdare mahkemesi (idari yargı) – vergi mahkemesi (idari yargı) çifti Uyuşmazlık Mahkemesi'nin görev alanı dışındadır.",
    answers: [
      { text: "aile mahkemesi – idare mahkemesi", ok: false },
      { text: "asliye ticaret mahkemesi – asliye hukuk mahkemesi", ok: false },
      { text: "idare mahkemesi – vergi mahkemesi", ok: false },
      { text: "icra mahkemesi – asliye ceza mahkemesi", ok: false },
      { text: "tüketici mahkemesi – iş mahkemesi", ok: false }
    ]
  },
  {
    text: "<p>Ödeme güçlüğü içinde bulunan borçlunun, alacaklıları ile yaptığı ve mahkeme tarafından onaylanarak borçların ödenmesinin ertelenmesini veya yeniden yapılandırılmasını sağlayan hukuki işleme ne ad verilir?</p>",
    diff: 2,
    expl: "Konkordato, ödeme güçlüğü içindeki borçlunun alacaklılarıyla yaptığı ve mahkeme onayıyla geçerlilik kazanan, borçların ertelenmesini veya yeniden yapılandırılmasını sağlayan bir hukuki işlemdir. İrtifak bir ayni hak türü, ipotek taşınmaz rehni, muvazaa muvazaalı işlem, kefalet ise bir güvence sözleşmesidir.",
    answers: [
      { text: "İrtifak", ok: false },
      { text: "İpotek", ok: false },
      { text: "Muvazaa", ok: false },
      { text: "Kefalet", ok: false },
      { text: "Konkordato", ok: true }
    ]
  },
  {
    text: "<p>Türkiye'de en son mahallî idare seçimleri 31 Mart 2024'te yapılmıştır.<br><br><b>Buna göre bir sonraki mahallî idare seçiminde belediye başkanı adayı olmayı düşünen A, hangi yıl yapılacak seçimlerde başkan seçilebilir?</b></p>",
    diff: 2,
    expl: "Mahalli idare seçimleri beş yılda bir yapılır. 31 Mart 2024'te yapılan seçimlerin ardından bir sonraki mahalli idare seçimleri 2029 yılında yapılacaktır.",
    answers: [
      { text: "2027", ok: false },
      { text: "2028", ok: false },
      { text: "2029", ok: true },
      { text: "2030", ok: false },
      { text: "2031", ok: false }
    ]
  },
  {
    text: "<p>Tazminat, haksız fiil sonucunda ortaya çıkan aşağıdaki unsurlardan hangisini ortadan kaldırmak amacıyla uygulanır?</p>",
    diff: 2,
    expl: "Tazminat, haksız fiil sonucunda ortaya çıkan zararı gidermek amacıyla uygulanır. Kusur, hukuka aykırılık, fiil ve illiyet bağı haksız fiilin diğer unsurlarıdır; tazminat bu unsurları ortadan kaldırmaz, zararı tazmin eder.",
    answers: [
      { text: "Kusur", ok: false },
      { text: "Zarar", ok: true },
      { text: "Hukuka aykırılık", ok: false },
      { text: "Fiil", ok: false },
      { text: "İlliyet bağı", ok: false }
    ]
  },
  {
    text: "<p>Devlet Memurları Kanunu'nda yer alan \"Kamu hizmetleri görevlerine girmek, sınıflar içinde ilerlemek ve yükselmek, görevin sona erdirilmesini belirli bir sisteme dayandırmak ve bu sistemin eşit imkânlarla uygulanmasında Devlet memurlarını güveniğe sahip kılmak\" ifadesi ile aşağıdakilerden hangisi tanımlanmaktadır?</p>",
    diff: 2,
    expl: "657 sayılı Devlet Memurları Kanunu'nda kariyer ilkesi; kamu hizmetleri görevlerine girmek, sınıflar içinde ilerlemek ve yükselmek, görevin sona erdirilmesini belirli bir sisteme dayandırmak ve bu sistemin eşit imkânlarla uygulanmasında devlet memurlarını güvenliğe sahip kılmak olarak tanımlanmaktadır.",
    answers: [
      { text: "Sınıflandırma", ok: false },
      { text: "Yer değiştirme", ok: false },
      { text: "Liyakat", ok: false },
      { text: "Kariyer", ok: true },
      { text: "Sadakat", ok: false }
    ]
  },
  {
    text: "<p>Medeni hukuk gibi geniş ve dağınık alanlarda yer alan normların, sistematik bir şekilde düzenlenerek tek bir kanun metnine dönüştürülmesi süreci aşağıdakilerden hangisiyle ifade edilir?</p>",
    diff: 2,
    expl: "Kodifikasyon, geniş ve dağınık hukuk alanlarında yer alan normların sistematik biçimde düzenlenerek tek bir kanun metnine (kanun kitabına/code'a) dönüştürülmesi sürecidir. Norm çatışması, kanun boşluğu, normlar hiyerarşisi ve yorum ise hukukun farklı kavramlarıdır.",
    answers: [
      { text: "Norm çatışması", ok: false },
      { text: "Kanun boşluğu", ok: false },
      { text: "Kodifikasyon", ok: true },
      { text: "Normlar hiyerarşisi", ok: false },
      { text: "Yorum", ok: false }
    ]
  }
];