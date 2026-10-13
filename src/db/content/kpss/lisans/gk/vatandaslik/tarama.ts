import { McQ } from "../../../../types";

// ============================================================================
// TARAMA - TEST 1
// ============================================================================
export const VAT_TARAMA_TEST_1: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, siyasi partilere üye olabilmesine rağmen siyasi partilerin sadece merkez organlarında görev alabilen kamu görevlisi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 68. maddesine göre yükseköğretim elemanları (öğretim elemanları) siyasi partilere üye olabilir; ancak partilerin merkez organları dışında görev alamazlar. Memurlar, hâkim ve savcılar, silahlı kuvvetler mensupları ve yükseköğretim öncesi öğrenciler ise siyasi partilere üye olamaz. Sözleşmeli personel ve işçiler için böyle bir sınırlama yoktur.",
    answers: [
      { text: "Sözleşmeli personel", ok: false },
      { text: "Öğretim elemanları", ok: true },
      { text: "Memurlar", ok: false },
      { text: "İşçiler", ok: false },
      { text: "Yükseköğretim öğrencileri", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda idareye ilişkin aşağıdaki ilkelerden hangisi <u>belirtilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nda idareye ilişkin olarak idarenin kanuniliği (m.123), idarenin bütünlüğü (m.123), merkezden yönetim ve yerinden yönetim (m.123) ile yetki genişliği (m.126) ilkeleri düzenlenmiştir. 'Yetkide ve usulde paralellik ilkesi' ise Anayasa'da belirtilmemiş, idare hukuku öğretisinde ve yargı kararlarında geliştirilmiş bir ilkedir.",
    answers: [
      { text: "Yetkide ve usulde paralellik ilkesi", ok: true },
      { text: "İdarenin bütünlüğü ilkesi", ok: false },
      { text: "Yetki genişliği ilkesi", ok: false },
      { text: "Merkezden yönetim ilkesi", ok: false },
      { text: "Kanuni idare ilkesi", ok: false }
    ]
  },
  {
    text: "<p>I. Anayasa Mahkemesi<br>II. Yargıtay<br>III. Uyuşmazlık Mahkemesi<br>IV. Danıştay</p><p><b>1982 Anayasası'na göre yukarıdakilerden hangilerinin başkanı, kendi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğu ile seçilir?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'na göre Anayasa Mahkemesi, Yargıtay ve Danıştay başkanları kendi üyeleri arasından gizli oyla ve üye tam sayısının salt çoğunluğuyla seçilir. Uyuşmazlık Mahkemesine ise Anayasa Mahkemesinin kendi üyeleri arasından görevlendirdiği üye başkanlık eder. Dolayısıyla I, II ve IV doğrudur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve IV", ok: true }
    ]
  },
  {
    text: "<p>I. Eğitim ve öğretim hakkı ve ödevi<br>II. Kamu hizmetine girme hakkı<br>III. Bilgi edinme hakkı<br>IV. Siyasi faaliyette bulunma hakkı</p><p><b>1982 Anayasası'na göre, yukarıdaki hakların hangilerinden yabancılar yararlanabilir?</b></p>",
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
    text: "<p><b>1982 Anayasası'na göre, seçim kanunlarında yapılan değişiklikler, yürürlüğe girdiği tarihten itibaren kaç yıl içinde yapılacak seçimlerde <u>uygulanmaz</u>?</b></p>",
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
    text: "<p><b>Borçlarını ödeyemeyen borçlunun, mal varlığının mahkeme kararıyla alacaklılara dağıtılması amacıyla yasal süreç başlatılması işlemi aşağıdakilerden hangisi ile ifade edilir?</b></p>",
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
    text: "<p>I. Dicle Üniversitesi<br>II. Çankırı Belediyesi<br>III. Bursa Barosu</p><p><b>Yönetmelik yapmaya ilişkin 1982 Anayasası hükümleri dikkate alındığında yukarıdaki birimlerden hangileri yönetmelik çıkarabilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 124. maddesine göre Cumhurbaşkanı, bakanlıklar ve kamu tüzel kişileri kendi görev alanlarını ilgilendiren kanunların ve Cumhurbaşkanlığı kararnamelerinin uygulanmasını sağlamak amacıyla yönetmelik çıkarabilir. Üniversiteler ve belediyeler ile kamu kurumu niteliğindeki meslek kuruluşu olan barolar kamu tüzel kişisi olduğundan üçü de yönetmelik çıkarabilir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Türk vatandaşlığı aşağıdakilerden hangisiyle <u>kazanılamaz</u>?</b></p>",
    diff: 2,
    expl: "5901 sayılı Türk Vatandaşlığı Kanunu'na göre Türk vatandaşlığı doğumla (soy bağı veya doğum yeri esası) ya da sonradan yetkili makam kararı, evlat edinilme ve seçme hakkının kullanılması yoluyla kazanılır. Evlenme tek başına vatandaşlık kazandırmaz; Türk vatandaşıyla evli yabancı yetkili makam kararıyla vatandaşlık kazanabilir. Mahkeme kararı ise Kanun'da vatandaşlık kazanma yolu olarak sayılmamıştır.",
    answers: [
      { text: "Doğum", ok: false },
      { text: "Yetkili makam kararı", ok: false },
      { text: "Seçme hakkının kullanılması", ok: false },
      { text: "Mahkeme kararıyla", ok: true },
      { text: "Evlenme yoluyla", ok: false }
    ]
  },
  {
    text: "<p>Eşler, ancak birlikte evlât edinebilirler; evli olmayanlar birlikte evlât edinemezler.</p><p><b>Buna göre evlat edinebilmek için eşlerin <u>en az</u> kaç yıldan beri evli olmaları veya kaç yaşını doldurmuş bulunmaları gerekir?</b></p>",
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
    expl: "Uyuşmazlık Mahkemesi, adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözümler. Aile mahkemesi adli yargı, idare mahkemesi ise idari yargı merciidir; bu nedenle aralarındaki uyuşmazlık Uyuşmazlık Mahkemesince çözülür. Diğer seçeneklerdeki mahkemeler aynı yargı koluna (asliye ticaret–asliye hukuk, icra–asliye ceza, tüketici–iş: adli yargı; idare–vergi: idari yargı) aittir.",
    answers: [
      { text: "aile mahkemesi – idare mahkemesi", ok: true },
      { text: "asliye ticaret mahkemesi – asliye hukuk mahkemesi", ok: false },
      { text: "idare mahkemesi – vergi mahkemesi", ok: false },
      { text: "icra mahkemesi – asliye ceza mahkemesi", ok: false },
      { text: "tüketici mahkemesi – iş mahkemesi", ok: false }
    ]
  },
  {
    text: "<p><b>Ödeme güçlüğü içinde bulunan borçlunun, alacaklıları ile yaptığı ve mahkeme tarafından onaylanarak borçların ödenmesinin ertelenmesini veya yeniden yapılandırılmasını sağlayan hukuki işleme ne ad verilir?</b></p>",
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
    text: "<p>Türkiye'de en son mahallî idare seçimleri 31 Mart 2024'te yapılmıştır.</p><p><b>Buna göre bir sonraki mahallî idare seçiminde belediye başkanı adayı olmayı düşünen A, hangi yıl yapılacak seçimlerde başkan seçilebilir?</b></p>",
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
    text: "<p><b>Tazminat, haksız fiil sonucunda ortaya çıkan aşağıdaki unsurlardan hangisini ortadan kaldırmak amacıyla uygulanır?</b></p>",
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
    text: "<p><b>Devlet Memurları Kanunu'nda yer alan \"Kamu hizmetleri görevlerine girmek, sınıflar içinde ilerlemek ve yükselmek, görevin sona erdirilmesini belirli bir sisteme dayandırmak ve bu sistemin eşit imkânlarla uygulanmasında Devlet memurlarını güvenliğe sahip kılmak\" ifadesi ile aşağıdakilerden hangisi tanımlanmaktadır?</b></p>",
    diff: 2,
    expl: "657 sayılı Devlet Memurları Kanunu'nun 3. maddesinde liyakat ilkesi; Devlet kamu hizmetleri görevlerine girmeyi, sınıflar içinde ilerleme ve yükselmeyi, görevin sona erdirilmesini liyakat sistemine dayandırmak ve bu sistemin eşit imkânlarla uygulanmasında Devlet memurlarını güvenliğe sahip kılmak olarak tanımlanmıştır. Kariyer ilkesi ise memurlara sınıfları içinde en yüksek derecelere kadar ilerleme imkânı sağlanmasını ifade eder.",
    answers: [
      { text: "Sınıflandırma", ok: false },
      { text: "Yer değiştirme", ok: false },
      { text: "Liyakat", ok: true },
      { text: "Kariyer", ok: false },
      { text: "Sadakat", ok: false }
    ]
  },
  {
    text: "<p><b>Medeni hukuk gibi geniş ve dağınık alanlarda yer alan normların, sistematik bir şekilde düzenlenerek tek bir kanun metnine dönüştürülmesi süreci aşağıdakilerden hangisiyle ifade edilir?</b></p>",
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