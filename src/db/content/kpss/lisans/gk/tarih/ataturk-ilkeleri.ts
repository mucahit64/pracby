import type { McQ } from "../../../../types";

export const TAR_ATATURK_ILKELERI_TEST_1: McQ[] = [
  // ---------------- ATATÜRK İLKELERİ - TEST 1 ----------------
  // Cevap anahtarı (s. 225): 1.B 2.D 3.A 4.B 5.B 6.C 7.A 8.E 9.B 10.B 11.C 12.D 13.A 14.C
  {
    text: "<p><b>Bir ülkede seçim sonuçlarını seçmenlerin eğitim düzeyine bakarak yorumlamak ve eğitim düzeyi daha yüksek olanların yönetimde daha etkili olması gerektiğini savunmak aşağıda verilen Atatürk ilkelerinden hangisine doğrudan aykırıdır?</b></p>",
    diff: 1,
    expl: "Halkçılık ilkesi; hiçbir kişi, sınıf veya zümreye ayrıcalık tanımaz ve herkesin yönetime eşit katılımını esas alır. Eğitim düzeyi yüksek olanların yönetimde daha etkili olmasını savunmak bu eşitlik anlayışına doğrudan aykırıdır.",
    answers: [
      { text: "Milliyetçilik", ok: false }, { text: "Halkçılık", ok: true }, { text: "Laiklik", ok: false }, { text: "İnkılapçılık", ok: false }, { text: "Devletçilik", ok: false }
    ]
  },
  {
    text: "<p>\"Ulusal egemenliğin kaynağı halktır.\" <b>yargısı;</b></p><p>I. cumhuriyetçilik,<br>II. inkılapçılık,<br>III. halkçılık</p><p><b>ilkelerinden hangileri ile doğrudan ilişkilendirilebilir?</b></p>",
    diff: 2,
    expl: "Egemenliğin kaynağının halk olması, millî egemenliğe dayanan Cumhuriyetçilik (I) ilkesi ile ve halkın yönetime eşit katılımını savunan Halkçılık (III) ilkesi ile doğrudan ilgilidir. İnkılapçılık ise yenilik ve çağdaşlaşma ile ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Cumhuriyetin ilk yıllarında halkın elinde yeterli sermayenin bulunmaması aşağıdaki Atatürk ilkelerinden hangisinin uygulanmasını zorunlu kılmıştır?</b></p>",
    diff: 1,
    expl: "Özel sektörün sermaye ve teknik bilgi yetersizliği nedeniyle büyük yatırımları yapamaması, devletin ekonomiye doğrudan katılmasını öngören Devletçilik ilkesini zorunlu kılmıştır.",
    answers: [
      { text: "Devletçilik", ok: true }, { text: "Halkçılık", ok: false }, { text: "Millî egemenlik", ok: false }, { text: "Laiklik", ok: false }, { text: "Milliyetçilik", ok: false }
    ]
  },
  {
    text: "<p>I. Saltanatın kaldırılması<br>II. Mahkemede kadın-erkek eşitliğinin sağlanması<br>III. Türk Parasını Koruma Kanunu'nun çıkarılması</p><p><b>Yeni Türk Devleti'nde meydana gelen yukarıdaki gelişmelerin ilişkili olduğu ilkeler aşağıdakilerin hangisinde doğru olarak gruplandırılmıştır?</b></p>",
    diff: 2,
    expl: "Saltanatın kaldırılmasıyla saltanat ile halifelik birbirinden ayrılmış, laikleşme yolunda ilk adım atılmıştır (Laiklik: I). Mahkemede kadın-erkek eşitliği ayrıcalıkları ortadan kaldırdığı için Halkçılık (II), Türk parasının korunması ise millî ekonomiyi savunduğu için Milliyetçilik (III) ile ilgilidir.",
    answers: [
      { text: "Milliyetçilik: I, Laiklik: II, Halkçılık: III", ok: false }, { text: "Milliyetçilik: III, Laiklik: I, Halkçılık: II", ok: true }, { text: "Milliyetçilik: II, Laiklik: I, Halkçılık: III", ok: false }, { text: "Milliyetçilik: III, Laiklik: II, Halkçılık: I", ok: false }, { text: "Milliyetçilik: I, Laiklik: III, Halkçılık: II", ok: false }
    ]
  },
  {
    text: "<p>I. Milliyetçilik ilkesi ile bütünleşir.<br>II. Millî egemenliği esas alır.<br>III. Kanun önünde eşitlik anlayışını savunur.<br>IV. Akılcılık - bilimsellik ilkesi ile doğrudan bağlantılıdır.</p><p><b>Yukarıda verilen yargılardan hangilerinin halkçılık ilkesi ile ilişkili olduğu <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "Halkçılık; milliyetçilik ilkesi ile bütünleşir (I), millî egemenliği esas alır (II) ve kanun önünde eşitliği savunur (III). Akılcılık ve bilimsellik ise doğrudan laiklik ilkesinin temel unsurudur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız IV", ok: true }, { text: "I ve II", ok: false }, { text: "I ve IV", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi milliyetçilik ilkesi doğrultusunda gerçekleştirilmiştir?</b></p>",
    diff: 1,
    expl: "Kitabın cevap anahtarında C (Miladi takvimin kabulü) verilmiştir. Ancak Misak-ı İktisadi kararları, kapitülasyonların kaldırılması, Türk Tarih Kurumunun kurulması ve Kabotaj Kanunu millî ekonomi, tam bağımsızlık ve millî kültürle ilgili milliyetçilik uygulamalarıdır; miladi takvimin kabulü ise Batı ile ilişkileri kolaylaştırmaya yönelik bir inkılapçılık uygulamasıdır. Bu nedenle cevap anahtarındaki C seçeneği, sorunun aslında 'gerçekleştirilmemiştir' biçiminde düşünüldüğünü göstermektedir.",
    answers: [
      { text: "Misak-ı İktisadi kararlarının alınması", ok: false }, { text: "Kapitülasyonların kaldırılması", ok: false }, { text: "Miladi takvimin kabulü", ok: true }, { text: "Türk Tarih Kurumunun kurulması", ok: false }, { text: "Kabotaj Kanunu'nun çıkarılması", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen Atatürk ilkelerinden hangisi din-vicdan özgürlüğünü güvence altına almayı amaçlar?</b></p>",
    diff: 1,
    expl: "Devletin tüm din ve inançlara eşit mesafede durarak vatandaşların din ve vicdan hürriyetini güvence altına alması Laiklik ilkesinin temel unsurudur.",
    answers: [
      { text: "Laiklik", ok: true }, { text: "Cumhuriyetçilik", ok: false }, { text: "İnkılapçılık", ok: false }, { text: "Milliyetçilik", ok: false }, { text: "Devletçilik", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen yenilik hareketlerinden hangileri halkçılık ilkesi ile <u>ilişkilendirilemez</u>?</b></p>",
    diff: 2,
    expl: "Kadınlara siyasi hakların verilmesi, aşar vergisinin kaldırılması, Medeni Kanun'un kabulü ve eğitimde fırsat eşitliği halkçılık ilkesiyle ilgilidir. Seçmen yaşının 18'den 22'ye çıkarılması ise yönetime katılımı genişletmeyip daralttığı için halkçılıkla ilişkilendirilemez.",
    answers: [
      { text: "Kadınlara da seçme ve seçilme hakkının verilmesi", ok: false }, { text: "Aşar vergisinin kaldırılması", ok: false }, { text: "Medeni Kanun'un kabulü", ok: false }, { text: "Eğitimde fırsat eşitliğinin esas alınması", ok: false }, { text: "Seçmen yaşının 18'den 22'ye çıkarılması", ok: true }
    ]
  },
  {
    text: "<p><b>Atatürk'ün</b> \"Devletçilik\" <b>ilkesini anlatmak için Yakup Kadri Karaosmanoğlu ve Şevket Süreyya Aydemir'in öncülük ederek çıkarttığı dergi aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "1932'de Yakup Kadri Karaosmanoğlu ve Şevket Süreyya Aydemir'in öncülüğünde çıkarılan ve devletçilik ilkesini kuramsal bir temele oturtmaya çalışan dergi Kadro'dur.",
    answers: [
      { text: "Ülkü", ok: false }, { text: "Kadro", ok: true }, { text: "Sebilürreşad", ok: false }, { text: "Türk Yurdu", ok: false }, { text: "Belleten", ok: false }
    ]
  },
  {
    text: "<p>I. Halifeliğin kaldırılması<br>II. Çok partili hayata geçiş denemeleri<br>III. Saltanatın kaldırılması</p><p><b>Yukarıda verilen inkılap hareketlerinin hangilerinin laiklik ilkesi ile ilgili olduğu söylenebilir?</b></p>",
    diff: 2,
    expl: "Halifeliğin kaldırılması (I) ve saltanatın kaldırılarak siyasi otoritenin dinî makamdan ayrılması (III) devlet yönetiminin laikleşmesini sağlamıştır. Çok partili hayata geçiş denemeleri ise cumhuriyetçilik ve demokrasi ile ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve III", ok: true }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Mustafa Kemal'in</b> \"Yurdumuzu dünyanın en mamur en medeni memleketleri seviyesine çıkaracağız.\" <b>sözü;</b></p><p>I. milliyetçilik,<br>II. devletçilik,<br>III. inkılapçılık</p><p><b>ilkelerinden hangileri ile ilişkilendirilebilir?</b></p>",
    diff: 2,
    expl: "Yurdu en medeni memleketler seviyesine çıkarma hedefi çağdaşlaşmayı esas alan İnkılapçılık (III) ilkesiyle; bu hedefin vatanın ve milletin yüceltilmesine yönelik olması ise Milliyetçilik (I) ilkesiyle ilgilidir. Sözde devletin ekonomiye müdahalesine dair bir vurgu olmadığı için Devletçilik ile ilişkilendirilemez.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>Atatürk'ün devletçilik ilkesinde ekonomik kaynakların ulus yararına aykırı bir şekilde kullanılmasına karşı çıkmaktadır.</p><p><b>Bu durumda devletçilik ilkesinin;</b></p><p>I. laiklik,<br>II. halkçılık,<br>III. milliyetçilik</p><p><b>ilkelerinden hangileri ile bağlantılı olduğu söylenebilir?</b></p>",
    diff: 2,
    expl: "Ekonomik kaynakların belirli bir zümrenin değil halkın yararına kullanılması Halkçılık (II); ulusun çıkarlarının gözetilmesi ve millî ekonominin korunması ise Milliyetçilik (III) ilkesiyle bağlantılıdır. Laiklik ile doğrudan bir ilişki yoktur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Mustafa Kemal'in:</b> \"Türk milletini son asırlarda geri bırakmış olan kurumlar yıkılarak, yerlerine milletin en yüksek medeni gereklere göre ilerlemesini sağlayacak kurumları oluşturmak gereklidir.\" <b>sözü aşağıdaki ilkelerden hangisinin önemini <u>daha çok</u> vurgulamıştır?</b></p>",
    diff: 1,
    expl: "Geri kalmış kurumların yıkılarak yerine çağın gereklerine uygun yeni kurumların oluşturulması, sürekli ilerlemeyi ve çağdaşlaşmayı savunan İnkılapçılık ilkesinin tanımıdır.",
    answers: [
      { text: "İnkılapçılık", ok: true }, { text: "Laiklik", ok: false }, { text: "Halkçılık", ok: false }, { text: "Cumhuriyetçilik", ok: false }, { text: "Milliyetçilik", ok: false }
    ]
  },
  {
    text: "<p><b>3 Mart 1924'te halifeliğin kaldırılması;</b></p><p>I. milliyetçilik,<br>II. laiklik,<br>III. devletçilik</p><p><b>ilkelerinden hangilerinin güçlenmesine katkı sağlamıştır?</b></p>",
    diff: 2,
    expl: "Halifelik ümmet anlayışına dayanır; kaldırılmasıyla ulus devlet anlayışı, yani Milliyetçilik (I) güçlenmiştir. Devlet yönetiminden dinî bir makamın çıkarılması da Laiklik (II) ilkesini güçlendirmiştir. Devletçilik ise ekonomiyle ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  }
];

export const TAR_ATATURK_ILKELERI_TEST_2: McQ[] = [
  // ---------------- ATATÜRK İLKELERİ - TEST 2 ----------------
  // Cevap anahtarı (s. 228): 1.E 2.E 3.D 4.C 5.A 6.B 7.D 8.D 9.C 10.A 11.B 12.C 13.E 14.C 15.D
  {
    text: "<p>I. Aşar vergisinin kaldırılması<br>II. İlköğretimin ücretsiz olması<br>III. Tekke, zaviye ve türbelerin kapatılması</p><p><b>Yukarıdaki yenilik hareketlerinden hangileri Atatürk'ün halkçılık ilkesi ile ilişkilendirilebilir?</b></p>",
    diff: 1,
    expl: "Aşar vergisinin kaldırılması köylüyü ağır bir yükten kurtarmış (I), ilköğretimin ücretsiz olması herkese eşit eğitim imkânı sağlamıştır (II). Tekke, zaviye ve türbelerin kapatılmasıyla da şeyh, derviş, mürit gibi ayrıcalık bildiren unvanlar kaldırılmış ve halkın dinî duygularının sömürülmesi önlenmiştir (III). Üçü de halkın yararını ve eşitliği gözeten halkçılık ilkesiyle ilişkilendirilebilir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1924 Anayasası'nda yer alan</b> \"Türkiye'de din ve ırk ayırt edilmeksizin vatandaşlık bakımından herkese Türk denir.\" <b>maddesi;</b></p><p>I. halkçılık,<br>II. milliyetçilik,<br>III. laiklik</p><p><b>ilkelerinden hangilerine uygun düşmektedir?</b></p>",
    diff: 2,
    expl: "Irk ayrımı yapmadan vatandaşlık bağıyla herkesi Türk saymak Milliyetçilik (II), din ayrımı yapmamak Laiklik (III), herkesi eşit kabul etmek ise Halkçılık (I) ilkesine uygundur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinin Atatürk'ün laiklik anlayışı ile ilgili olduğu <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Din ve vicdan hürriyeti (A), ayrımcılığa karşı olma (B), dinsel sömürüye karşı olma (C) ve akıl ile bilimin esas alınması (E) laikliğin temel unsurlarıdır. Laiklik batıl inançlara hoşgörü göstermez; onları akıl ve bilimle ortadan kaldırmayı amaçlar.",
    answers: [
      { text: "Din ve vicdan hürriyetini benimsemesi", ok: false }, { text: "Ayrımcılığa karşı olunması", ok: false }, { text: "Dinsel sömürünün karşısında yer alması", ok: false }, { text: "Batıl inanışlara hoşgörü ile yaklaşılması", ok: true }, { text: "Akıl ve bilimin esas alınması", ok: false }
    ]
  },
  {
    text: "<p><b>1926 Maarif Teşkilatı Kanunu'nda yer alan ders kitaplarının akılcı, bilimsel esaslar doğrultusunda yapılandırılması kararı aşağıda verilen hangi Atatürk ilkesi ile doğrudan ilgilidir?</b></p>",
    diff: 1,
    expl: "Eğitimin ve ders kitaplarının akılcı ve bilimsel esaslara dayandırılması, laiklik ilkesinin eğitimdeki yansımasıdır.",
    answers: [
      { text: "Halkçılık", ok: false }, { text: "Devletçilik", ok: false }, { text: "Laiklik", ok: true }, { text: "İnkılapçılık", ok: false }, { text: "Milliyetçilik", ok: false }
    ]
  },
  {
    text: "<p><b>Yeni Türk devletinde;</b></p><p>I. Koruyucu Gümrük Kanunu'nun çıkarılması,<br>II. mirasta kadın - erkek eşitliğinin sağlanması,<br>III. saltanatın kaldırılması,</p><p><b>gelişmelerinin bağlı olduğu ilkeler aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "Koruyucu Gümrük Kanunu millî ekonomiyi koruduğu için Milliyetçilik (I), mirasta kadın-erkek eşitliği Halkçılık (II), saltanatın kaldırılarak egemenliğin millete geçmesi ise Cumhuriyetçilik (III) ile ilgilidir.",
    answers: [
      { text: "Halkçılık: II, Cumhuriyetçilik: III, Milliyetçilik: I", ok: true }, { text: "Halkçılık: III, Cumhuriyetçilik: I, Milliyetçilik: II", ok: false }, { text: "Halkçılık: III, Cumhuriyetçilik: II, Milliyetçilik: I", ok: false }, { text: "Halkçılık: I, Cumhuriyetçilik: II, Milliyetçilik: III", ok: false }, { text: "Halkçılık: II, Cumhuriyetçilik: I, Milliyetçilik: III", ok: false }
    ]
  },
  {
    text: "<p><b>Kurtuluş Savaşı sürecinde Anadolu halkının işgalcilere karşı bağımsızlıklarını korumak adına silahlı direniş örgütleri kurmaları, yaşadıkları coğrafyanın çoğunluğunun kendilerine ait olduğunu dünya kamuoyuna duyurmaya çalışmaları aşağıdaki Atatürk ilkelerinden hangisini fiilen benimsemiş olduklarının göstergesidir?</b></p>",
    diff: 2,
    expl: "Halkın vatanını kurtarmak için örgütlenmesi ve bölgede çoğunluğu oluşturduğunu dünyaya duyurarak bağımsızlığını savunması, millî bilincin yani Milliyetçilik ilkesinin fiilen benimsendiğini gösterir.",
    answers: [
      { text: "Cumhuriyetçilik", ok: false }, { text: "Milliyetçilik", ok: true }, { text: "Laiklik", ok: false }, { text: "Devletçilik", ok: false }, { text: "İnkılapçılık", ok: false }
    ]
  },
  {
    text: "<p>- Din ve vicdan hürriyetini esas alma<br>- Toplumsal birlik ve beraberliği sağlama<br>- Halkın ihtiyaçları için devlet eliyle yatırım yapma<br>- Çağdaş uygarlıklar seviyesine ulaşma</p><p><b>Yukarıda verilen tanımlamalar aşağıda verilen Atatürk ilkelerinden hangisi ile doğrudan <u>ilişkilendirilemez</u>?</b></p>",
    diff: 2,
    expl: "Din ve vicdan hürriyeti Laiklik, toplumsal birlik Halkçılık, devlet eliyle yatırım Devletçilik, çağdaşlaşma İnkılapçılık ile ilgilidir. Tanımlar arasında millî egemenliği ve yönetim biçimini ifade eden Cumhuriyetçilik ilkesine doğrudan bir atıf yoktur.",
    answers: [
      { text: "Devletçilik", ok: false }, { text: "Halkçılık", ok: false }, { text: "Laiklik", ok: false }, { text: "Cumhuriyetçilik", ok: true }, { text: "İnkılapçılık", ok: false }
    ]
  },
  {
    text: "<p><b>Yeni Türk devletinin ekonomide devletçi bir anlayış benimsemesinin nedeni aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Cumhuriyetin ilk yıllarında yatırım yapacak yeterli sermaye ve sermaye sahibi bulunmaması, devleti ekonomide doğrudan yatırımcı olmaya, yani devletçiliğe yöneltmiştir.",
    answers: [
      { text: "Bolşevik Rusya ile yakınlaşma ve destek alma isteği", ok: false }, { text: "Liberal demokratik sistemin benimsenerek ülke rejimine egemen kılınması", ok: false }, { text: "Topraksız köylüyü topraklandırarak üretime doğrudan katma amacı", ok: false }, { text: "Yatırım yapacak sermaye sahiplerinin yetersizliği", ok: true }, { text: "Soğuk Savaş Dönemi'nde Batı Bloku'nda yer alma düşüncesi", ok: false }
    ]
  },
  {
    text: "<p>\"Her millet kendi devletini kurup kendi isteğine göre yönetilmelidir.\" <b>tezi aşağıdaki kavramlardan hangisini reddetmektedir?</b></p>",
    diff: 2,
    expl: "Bir milletin kendi devletini kurup kendi iradesiyle yönetilmesi, başka bir devletin koruması ve yönetimi altına girmek anlamına gelen manda ve himaye anlayışını reddeder.",
    answers: [
      { text: "Millî egemenlik", ok: false }, { text: "Cumhuriyetçilik", ok: false }, { text: "Manda ve himaye", ok: true }, { text: "Milliyetçilik", ok: false }, { text: "Ulusal Bağımsızlık", ok: false }
    ]
  },
  {
    text: "<p><b>Cumhuriyetçilik ilkesinin geliştirilmesine yönelik uygulamalara aşağıdakilerden hangisi örnek teşkil <u>etmez</u>?</b></p>",
    diff: 2,
    expl: "Seçmen yaşının indirilmesi (B), çok partili hayata geçiş denemeleri (C), oy vermede vergi şartının kaldırılması (D) ve seçimlerin sürekliliği (E) halkın yönetime katılımını artırarak cumhuriyetçiliği geliştirir. Siyasi partilerin kapatılması ise bu ilkeyi geliştirmez.",
    answers: [
      { text: "Siyasi partilerin kapatılması", ok: true }, { text: "Seçmen yaşının indirilmesi", ok: false }, { text: "Çok partili hayata geçilmek istenmesi", ok: false }, { text: "Oy vermede vergi ödeme şartının kaldırılması", ok: false }, { text: "Seçimlerin sürekliliğinin sağlanması", ok: false }
    ]
  },
  {
    text: "<p><b>Atatürk ilkelerinin Cumhuriyet Halk Fırkası'nın parti programına dâhil edilmesi aşağıda verilen tarihlerin hangisinde gerçekleşmiştir?</b></p>",
    diff: 3,
    expl: "Atatürk ilkeleri 1931'deki CHF Kurultayı'nda parti programına alınmış, 1937'de ise Anayasaya girmiştir.",
    answers: [
      { text: "1930", ok: false }, { text: "1931", ok: true }, { text: "1933", ok: false }, { text: "1937", ok: false }, { text: "1945", ok: false }
    ]
  },
  {
    text: "<p><b>Atatürk'ün milliyetçilik ilkesi doğrultusunda yapılan inkılaplara aşağıdakilerden hangisi örnek <u>gösterilemez</u>?</b></p>",
    diff: 2,
    expl: "Kabotaj Yasası, Türkçe soyadı zorunluluğu, Türk Tarih Kurumu ve Koruyucu Gümrük Kanunu milliyetçilik ilkesiyle ilgilidir. Miladi takvimin kabulü ise Batı ile ticari ve diplomatik ilişkileri kolaylaştırmaya yönelik olup inkılapçılık ilkesiyle ilgilidir.",
    answers: [
      { text: "Kabotaj Yasası'nın kabulü", ok: false }, { text: "Türkçe soyadı zorunluluğunun getirilmesi", ok: false }, { text: "Miladi takvimin kabulü", ok: true }, { text: "Türk Tarih Kurumunun oluşturulması", ok: false }, { text: "Koruyucu Gümrük Kanunu'nun çıkarılması", ok: false }
    ]
  },
  {
    text: "<p><b>Halkçılık ilkesinin demokratik olma özelliğini;</b></p><p>I. seçme seçilme hakkının kadınlara da verilmesi,<br>II. herkesin kanun önünde eşit olması,<br>III. sınıfsal ayrımı reddetmesi</p><p><b>durumlarından hangileri destekler?</b></p>",
    diff: 2,
    expl: "Kadınlara da seçme ve seçilme hakkı verilerek siyasal eşitliğin sağlanması (I), herkesin kanun önünde eşit olması (II) ve hiçbir sınıfa ayrıcalık tanınmaması (III), halkçılık ilkesinin demokratik niteliğini destekler.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>- Kapitülasyonların kaldırılması<br>- Türk Parasını Koruma Kanunu'nun çıkarılması</p><p><b>Yukarıda verilen gelişmelerde aşağıdaki ilkelerden hangisinin temel alındığı savunulabilir?</b></p>",
    diff: 1,
    expl: "Kapitülasyonların kaldırılması ekonomik bağımsızlığı, Türk Parasını Koruma Kanunu ise millî paranın ve millî ekonominin korunmasını amaçlar. Her iki gelişme de millî çıkarları esas alan milliyetçilik ilkesine dayanır.",
    answers: [
      { text: "Devletçilik", ok: false }, { text: "Halkçılık", ok: false }, { text: "Milliyetçilik", ok: true }, { text: "Laiklik", ok: false }, { text: "Cumhuriyetçilik", ok: false }
    ]
  },
  {
    text: "<p>Yeni Türk devleti gelirleri çok sınırlı hâlde bütçe gelirinin %60'ını karşılayan aşar vergisini kaldırmış ve üreticiyi rahatlatmaya çalışmıştır.</p><p><b>Bu durum Mustafa Kemal'in aşağıdaki ilkelerinden hangisi ile doğrudan ilgilidir?</b></p>",
    diff: 1,
    expl: "Devlet gelirlerinin önemli bir kısmından vazgeçilerek nüfusun büyük çoğunluğunu oluşturan köylü ve üreticinin yükünün hafifletilmesi, halkın yararını gözeten halkçılık ilkesiyle doğrudan ilgilidir.",
    answers: [
      { text: "Laiklik", ok: false }, { text: "Devletçilik", ok: false }, { text: "Milliyetçilik", ok: false }, { text: "Halkçılık", ok: true }, { text: "Cumhuriyetçilik", ok: false }
    ]
  }
];

// ============================================================================
// ATATÜRK İLKELERİ - TEST 3
// Cevap anahtarı (s. 230): 1.E 2.C 3.E 4.A 5.B 6.A 7.B 8.D 9.A 10.A 11.C 12.E
// ============================================================================
export const TAR_ATATURK_ILKELERI_TEST_3: McQ[] = [
  {
    text: "<p>Mustafa Kemal ekonomi politikamızı \"Toplumun genel çıkarlarını doğrudan doğruya ilgilendirecek kuruluşlarla ekonomik alandaki teşebbüsleri mali teknik gücümüzün ölçülerine uygun olarak devletleştirmektir.\" şeklinde özetlemiştir.</p><p><b>Bu durum Türk ekonomisinin;</b></p><p>I. milliyetçilik,<br>II. devletçilik,<br>III. halkçılık</p><p><b>ilkelerinden hangileri doğrultusunda yapılandırılacağının göstergesidir?</b></p>",
    diff: 2,
    expl: "\"Devletleştirmek\" ifadesi doğrudan Devletçilik ilkesini, \"toplumun genel çıkarları\" ifadesi Halkçılık ilkesini ve Türk devletinin kendi mali gücüyle ekonomik teşebbüslere girmesi Milliyetçilik ilkesini gösterir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Mustafa Kemal'in Söylev ve Demeçler adlı eserinde yer alan</b> \"Yurdumuzu dünyanın en mamur, en medeni memleketleri seviyesine çıkaracağız.\" <b>sözleri;</b></p><p>I. inkılapçılık,<br>II. milliyetçilik,<br>III. devletçilik</p><p><b>ilkelerinden hangileri ile ilişkilendirilebilir?</b></p>",
    diff: 2,
    expl: "\"En medeni memleketler seviyesine çıkarma\" (çağdaşlaşma/muasır medeniyet) hedefi İnkılapçılık ile ilgilidir. Bu gelişimi \"Yurdumuz\" (kendi vatanımız/milletimiz) için yapma vurgusu ise Milliyetçilik ilkesini barındırır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi halkçılık ilkesinin uygulanması ile ilgili bir gelişme <u>değildir</u>?</b></p>",
    diff: 1,
    expl: "Kabotaj Kanunu, Türk karasularında yolcu ve yük taşıma hakkını yabancılardan alarak yalnızca Türk gemilerine ve vatandaşlarına verdiği için doğrudan Milliyetçilik ilkesinin bir sonucudur. Diğer seçenekler eşitliği sağladığı için halkçılıktır.",
    answers: [
      { text: "Medeni Kanun'un hazırlanması", ok: false },
      { text: "Ayrıcalıklı unvanların kaldırılması", ok: false },
      { text: "Kadınlara seçme - seçilme haklarının tanınması", ok: false },
      { text: "Aşar vergisinin kaldırılması", ok: false },
      { text: "Kabotaj Kanunu'nun kabulü", ok: true }
    ]
  },
  {
    text: "<p><b>Mustafa Kemal'in devletçilik anlayışı;</b></p><p>I. halkçılık,<br>II. laiklik,<br>III. cumhuriyetçilik</p><p><b>ilkelerinden hangileri ile doğrudan bağlantılıdır?</b></p>",
    diff: 2,
    expl: "Devletçilik ilkesi; halkın refahını artırmak, temel ihtiyaçlarını karşılamak ve bölgeler arası ekonomik eşitsizliği gidermek amacıyla uygulandığı için doğrudan Halkçılık ilkesinin zorunlu bir sonucudur.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p>Atatürk'ün milliyetçilik anlayışında ırk, mezhep ve sınıf ayrılıklarına karşı bir tutum vardır.</p><p><b>Buna göre Atatürk milliyetçiliğinin;</b></p><p>I. halkçılık,<br>II. laiklik,<br>III. devletçilik</p><p><b>ilkelerinden hangileri ile ilişkili olduğu söylenebilir?</b></p>",
    diff: 2,
    expl: "Irk ve sınıf ayrılığına karşı olması, kanun önünde herkesin eşit olmasını savunduğu için Halkçılık ile; mezhep ayrılığına karşı olması ise din ve vicdan hürriyetini güvence altına aldığı için Laiklik ilkesi ile ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Halkçılık ilkesinin sonucu olarak uygulamaya konulan Atatürk ilkesi aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Özel sektörün sermaye yetersizliği nedeniyle yapamadığı büyük yatırımları halkın ihtiyaçlarını karşılamak adına devletin üstlenmesi durumu (Devletçilik), halkın yararı gözetildiği için Halkçılık ilkesinin doğal bir sonucudur.",
    answers: [
      { text: "Devletçilik", ok: true },
      { text: "Halkçılık", ok: false },
      { text: "Laiklik", ok: false },
      { text: "Cumhuriyetçilik", ok: false },
      { text: "Milliyetçilik", ok: false }
    ]
  },
  {
    text: "<p>Osmanlı Devleti'nde kültür birliğinin olmaması ve yönetimde teokratik özelliklerin görülmesi Atatürkçü düşünce yapısına aykırıdır.</p><p><b>Bu durumun çeliştiği Atatürk ilkeleri aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "Kültür birliğinin olmaması, ümmetçi ve çok uluslu yapıdan kaynaklandığı için Milliyetçilik ilkesine aykırıdır. Yönetimde teokratik (dini kurallara dayalı) özelliklerin görülmesi ise Laiklik ilkesine aykırıdır.",
    answers: [
      { text: "Cumhuriyetçilik - Milliyetçilik", ok: false },
      { text: "Milliyetçilik - Laiklik", ok: true },
      { text: "Devletçilik - İnkılapçılık", ok: false },
      { text: "Laiklik - Devletçilik", ok: false },
      { text: "İnkılapçılık - Cumhuriyetçilik", ok: false }
    ]
  },
  {
    text: "<p>1934 yılında kadınlara seçme - seçilme hakkı tanınmış ve ilk kez 1935 yılında kadınlar 17 vekillik elde ederek Mecliste yer almışlardır.</p><p><b>Yapılan bu yenilikler, Atatürk'ün;</b></p><p>I. devletçilik,<br>II. cumhuriyetçilik,<br>III. halkçılık</p><p><b>ilkelerinden hangileri ile bağlantılıdır?</b></p>",
    diff: 1,
    expl: "Seçme ve seçilme hakkının verilmesi, yönetime katılmayı sağladığı için Cumhuriyetçilik ilkesi ile ilgilidir. Bu siyasi hakkın erkeklerden sonra kadınlara da verilerek cinsiyet eşitliğinin sağlanması ise Halkçılık ilkesi ile ilgilidir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>I. Medeni Kanun'un kabulü<br>II. Saltanatın kaldırılması<br>III. TBMM'nin açılması</p><p><b>Yukarıda verilen gelişmelerden hangileri Atatürk'ün hem cumhuriyetçilik hem de laiklik ilkeleri ile ilgilidir?</b></p>",
    diff: 3,
    expl: "Saltanatın kaldırılması ile monarşi yıkılmış (Cumhuriyetçilik adımı atılmış) ve siyasi makam olan saltanat, dini makam olan halifelikten ayrılarak Laiklik yolunda ilk ve en büyük adım atılmıştır.",
    answers: [
      { text: "Yalnız II", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Millî Mücadele Hazırlık Dönemi'nde;</b></p><p>I. Millî iradeyi egemen kılmak esastır.<br>II. Millî sınırlar içinde vatan bütündür, bölünemez.<br>III. Azınlıklara bütünlüğümüzü bozucu haklar verilemez.</p><p><b>kararlarından hangilerinin</b> \"cumhuriyetçilik\" <b>ilkesi doğrultusunda alındığı söylenebilir?</b></p>",
    diff: 2,
    expl: "\"Milli iradeyi (halkın kararını) egemen kılmak\" kararı doğrudan halk yönetimi olan Cumhuriyetçilik ilkesini vurgular. Sınırların bölünmezliği ve azınlık haklarına karşı çıkılması ise tam bağımsızlık ve Milliyetçilik ilkesiyle ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Atatürk'ün devletçilik ilkesi ile ilgili aşağıdaki yargılardan hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Devletçilik ilkesi, 1929 Dünya Ekonomik Krizi'nin etkileri ve özel sektörün sermaye yetersizliği üzerine Türkiye'nin kendi ihtiyaçlarından doğmuş pratik bir uygulamadır. Fransız İhtilali ile ortaya çıkan evrensel akım Milliyetçiliktir.",
    answers: [
      { text: "Halkçılık ilkesinin tamamlayıcısı niteliğindedir.", ok: false },
      { text: "1929 Krizi'nin etkisi ile ön plana çıkmıştır.", ok: false },
      { text: "Fransız İhtilali ile evrensel boyut kazanmıştır.", ok: true },
      { text: "Yabancı sermayeye karşı değildir.", ok: false },
      { text: "Devletin ekonomik alanda etkin olmasını esas alır.", ok: false }
    ]
  },
  {
    text: "<p>Mustafa Kemal yeni Türk devletinin eğitim sistemi ile ilgili: \"Dünyanın her türlü ilminden, ilerlemelerinden yararlanılacaktır; ancak temel kendi içimizden çıkarılmalıdır.\" şeklinde görüşlerini belirtmiştir.</p><p><b>Mustafa Kemal'in bu sözleri;</b></p><p>I. laiklik,<br>II. milliyetçilik,<br>III. inkılapçılık</p><p><b>ilkelerinden hangileri ile ilişkilendirilebilir?</b></p>",
    diff: 2,
    expl: "Dünyanın ilmini (bilimini) rehber almak aklın ve bilimin öncülüğü olan Laiklik; ilerlemelerden yararlanmak çağdaşlaşma olan İnkılapçılık; temelin kendi içimizden (milli kültüre dayalı) çıkarılması ise Milliyetçilik ilkesiyle örtüşür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  }
];
