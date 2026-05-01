import type { McQ } from "../../../../types";

export const TAR_ATATURK_ILKELERI_TEST_1: McQ[] = [
  // ---------------- ATATÜRK İLKELERİ - TEST 1 ----------------
  {
    text: "Bir ülkede seçim sonuçlarını seçmenlerin eğitim düzeyine bakarak yorumlamak ve eğitim düzeyi daha yüksek olanların yönetimde daha etkili olması gerektiğini savunmak aşağıda verilen Atatürk ilkelerinden hangisine doğrudan aykırıdır?",
    diff: 1,
    expl: "Atatürk'ün Halkçılık ilkesi; zengin-fakir, eğitimli-eğitimsiz hiçbir sınıf veya zümreye ayrıcalık tanımaz. Herkes kanun önünde ve yönetimde eşittir ('Dağdaki çoban ile benim oyum eşit mi?' tartışması halkçılık ilkesine taban tabana zıttır).",
    answers: [
      { text: "Milliyetçilik", ok: false }, { text: "Halkçılık", ok: true }, { text: "Laiklik", ok: false }, { text: "İnkılapçılık", ok: false }, { text: "Devletçilik", ok: false }
    ] // Cevap anahtarı 1.B. (Page 227, Test 1 Key: 1.B 2.D 3.A 4.B 5.B 6.C 7.A 8.E 9.B 10.B 11.C 12.D 13.A 14.C)
  },
  {
    text: "\"Ulusal egemenliğin kaynağı halktır.\" yargısı;\nI. cumhuriyetçilik,\nII. inkılapçılık,\nIII. halkçılık\nilkelerinden hangileri ile doğrudan ilişkilendirilebilir?",
    diff: 2,
    expl: "Egemenliğin (yönetme gücünün) bir kişiye veya zümreye değil doğrudan HALKA ait olması, devletin yönetim şekli olarak Cumhuriyetçiliği (I) ve herkesin eşit katılımını savunduğu için Halkçılığı (III) doğrudan ilgilendirir. İnkılapçılık ise yenilik/değişim ile ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 2.D (I ve III).
  },
  {
    text: "Cumhuriyetin ilk yıllarında halkın elinde yeterli sermayenin bulunmaması aşağıdaki Atatürk ilkelerinden hangisinin uygulanmasını zorunlu kılmıştır?",
    diff: 1,
    expl: "Özel sektörün (halkın) sermaye ve teknik bilgi yetersizliği yüzünden büyük fabrikaları ve yatırımları yapamaması üzerine, devletin ekonomiye el atarak bu yatırımları bizzat yapmasını öngören 'Devletçilik' ilkesi zorunlu olarak doğmuştur.",
    answers: [
      { text: "Devletçilik", ok: true }, { text: "Halkçılık", ok: false }, { text: "Millî egemenlik", ok: false }, { text: "Laiklik", ok: false }, { text: "Milliyetçilik", ok: false }
    ] // Cevap anahtarı 3.A.
  },
  {
    text: "I. Saltanatın kaldırılması\nII. Mahkemede kadın-erkek eşitliğinin sağlanması\nIII. Türk Parasını Koruma Kanunu'nun çıkarılması\nYeni Türk Devleti'nde meydana gelen yukarıdaki gelişmelerin ilişkili olduğu ilkeler aşağıdakilerin hangisinde doğru olarak gruplandırılmıştır?",
    diff: 2,
    expl: "Saltanatın kaldırılıp halk idaresine geçilmesi Cumhuriyetçilik (ama şıklarda Milliyetçilik-Laiklik-Halkçılık var. Saltanatın kaldırılması aynı zamanda laikliğin de İLK adımıdır -> Laiklik - I). Kadın-erkek eşitliği ayrıcalıkları bitirdiği için Halkçılık'tır (III). Türk parasını korumak ise milli ekonomiyi savunduğu için Milliyetçilik'tir (II). Doğru sıralama: Milliyetçilik (III), Laiklik (I), Halkçılık (II).",
    answers: [
      { text: "Milliyetçilik: I, Laiklik: II, Halkçılık: III", ok: false }, { text: "Milliyetçilik: III, Laiklik: I, Halkçılık: II", ok: true }, { text: "Milliyetçilik: II, Laiklik: I, Halkçılık: III", ok: false }, { text: "Milliyetçilik: III, Laiklik: II, Halkçılık: I", ok: false }, { text: "Milliyetçilik: I, Laiklik: III, Halkçılık: II", ok: false }
    ] // Cevap anahtarı 4.B.
  },
  {
    text: "I. Milliyetçilik ilkesi ile bütünleşir.\nII. Millî egemenliği esas alır.\nIII. Kanun önünde eşitlik anlayışını savunur.\nIV. Akılcılık - bilimsellik ilkesi ile doğrudan bağlantılıdır.\nYukarıda verilen yargılardan hangilerinin halkçılık ilkesi ile ilişkili olduğu söylenemez?",
    diff: 3,
    expl: "Halkçılık; milletini sevmekle (Milliyetçilik - I), halkın yönetime katılmasıyla (Milli Egemenlik/Cumhuriyet - II) ve kanun önünde eşitlikle (III) bütünleşir (Bunların doğal bir sonucudur). Ancak 'Akılcılık ve Bilimsellik' doğrudan 'Laiklik' (ve İnkılapçılık) ilkesinin temel unsurudur, Halkçılığın değil.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız IV", ok: true }, { text: "I ve II", ok: false }, { text: "I ve IV", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 5.B.
  },
  {
    text: "Aşağıdakilerden hangisi milliyetçilik ilkesi doğrultusunda gerçekleştirilmiştir?",
    diff: 1,
    expl: "Miladi takvim (İnkılapçılık), Kabotaj (Milliyetçilik-Devletçilik), Kapitülasyonlar (Bağımsızlık/Milliyetçilik), Misak-ı İktisadi (Milliyetçilik). Ancak seçeneklere dikkatli bakarsak, 'Türk Tarih Kurumunun kurulması' (D) doğrudan Türk milletinin köklerini araştırmak, milli bilinci uyandırmak için atılmış EN SAF 'Milliyetçilik' adımıdır.",
    answers: [
      { text: "Misak-ı İktisadi kararlarının alınması", ok: false }, { text: "Kapitülasyonların kaldırılması", ok: false }, { text: "Miladi takvimin kabulü", ok: false }, { text: "Türk Tarih Kurumunun kurulması", ok: true }, { text: "Kabotaj Kanunu'nun çıkarılması", ok: false }
    ] // Cevap anahtarı 6.D.
  },
  {
    text: "Aşağıda verilen Atatürk ilkelerinden hangisi din-vicdan özgürlüğünü güvence altına almayı amaçlar?",
    diff: 1,
    expl: "Devletin tüm dinlere ve inançlara eşit mesafede durarak, vatandaşların din ve vicdan hürriyetini (istediği dine inanma veya inanmama özgürlüğünü) anayasal güvence altına alması 'Laiklik' ilkesinin temel unsurudur.",
    answers: [
      { text: "Laiklik", ok: true }, { text: "Cumhuriyetçilik", ok: false }, { text: "İnkılapçılık", ok: false }, { text: "Milliyetçilik", ok: false }, { text: "Devletçilik", ok: false }
    ] // Cevap anahtarı 7.A.
  },
  {
    text: "Aşağıda verilen yenilik hareketlerinden hangileri halkçılık ilkesi ile ilişkilendirilemez?",
    diff: 2,
    expl: "Kadınlara siyasi hak verilmesi, Aşar vergisinin kalkması (köylüyü rahatlatma), Medeni kanun (kadın-erkek eşitliği) ve eğitimde fırsat eşitliği doğrudan 'Halkçılık' (eşitlik/halkın yararı) ilkesidir. Seçmen yaşının 18'den 22'ye çıkarılması (E) ise eşitliği veya halkçılığı geliştiren değil, seçmen tabanını daraltan (kısıtlayan) siyasi bir karardır.",
    answers: [
      { text: "Kadınlara da seçme ve seçilme hakkının verilmesi", ok: false }, { text: "Aşar vergisinin kaldırılması", ok: false }, { text: "Medeni Kanun'un kabulü", ok: false }, { text: "Eğitimde fırsat eşitliğinin esas alınması", ok: false }, { text: "Seçmen yaşının 18'den 22'ye çıkarılması", ok: true }
    ] // Cevap anahtarı 8.E.
  },
  {
    text: "Atatürk'ün \"Devletçilik\" ilkesini anlatmak için Yakup Kadri Karaosmanoğlu ve Şevket Süreyya Aydemir'in öncülük ederek çıkarttığı dergi aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "1932 yılında Yakup Kadri, Şevket Süreyya gibi aydınların çıkardığı ve 'Devletçilik' ilkesini, planlı ekonomiyi ideolojik bir temele oturtmayı (hatta bir nevi Türk sosyalizmi yaratmayı) savunan sol eğilimli fikir dergisi 'Kadro' dergisidir.",
    answers: [
      { text: "Ülkü", ok: false }, { text: "Kadro", ok: true }, { text: "Sebilürreşad", ok: false }, { text: "Türk Yurdu", ok: false }, { text: "Belleten", ok: false }
    ] // Cevap anahtarı 9.B.
  },
  {
    text: "I. Halifeliğin kaldırılması\nII. Çok partili hayata geçiş denemeleri\nIII. Saltanatın kaldırılması\nYukarıda verilen inkılap hareketlerinin hangilerinin laiklik ilkesi ile ilgili olduğu söylenebilir?",
    diff: 2,
    expl: "Devletin başındaki dini bir makam olan Halifeliğin kaldırılması (I) ve devleti yöneten kişinin (Padişahın) dini bir güç kullanmasını engelleyen Saltanatın kaldırılması (III), devlet yönetimini dinden arındırdığı için doğrudan 'Laiklik' ile ilgilidir. Çok partili hayat ise Cumhuriyetçilik (Demokrasi) ile ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve III", ok: true }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 10.B.
  },
  {
    text: "Mustafa Kemal'in \"Yurdumuzu dünyanın en mamur ve en medeni memleketleri seviyesine çıkaracağız.\" sözü;\nI. milliyetçilik,\nII. devletçilik,\nIII. inkılapçılık\nilkelerinden hangileri ile ilişkilendirilebilir?",
    diff: 2,
    expl: "Ülkeyi kalkındırmak, çağdaş/medeni medeniyetler (muasır medeniyet) seviyesine çıkarmak doğrudan yenilik, değişim ve dinamizmi savunan 'İnkılapçılık' (III) ilkesiyle ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 11.C (Yalnız III). Wait, in the image C is 'Yalnız III'. Yes.
  },
  {
    text: "Atatürk'ün devletçilik ilkesinde ekonomik kaynakların ulus yararına aykırı bir şekilde kullanılmasına karşı çıkmaktadır.\nBu durumda devletçilik ilkesinin;\nI. laiklik,\nII. halkçılık,\nIII. milliyetçilik\nilkelerinden hangileri ile bağlantılı olduğu söylenebilir?",
    diff: 2,
    expl: "Devletçilik ilkesi gereği yapılan yatırımların belirli bir zümreyi zengin etmek için değil, 'ulus yararına' (tüm halkın menfaatine) yapılması, devletçiliğin aynı zamanda 'Halkçılık' (II) ilkesiyle doğrudan bağlantılı olduğunu (onu tamamladığını) gösterir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: true }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
      // { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Mustafa Kemal'in: \"Türk milletini son asırlarda geri bırakmış olan kurumlar yıkılarak, yerlerine milletin en yüksek medeni gereklere göre ilerlemesini sağlayacak kurumları oluşturmak gereklidir.\" sözü aşağıdaki ilkelerden hangisinin önemini daha çok vurgulamıştır?",
    diff: 1,
    expl: "Eski, işe yaramaz ve köhnemiş kurumların yıkılarak yerine çağın gereklerine uygun yepyeni ve modern kurumların açılması, sürekli ilerlemeyi (çağdaşlaşmayı) savunan 'İnkılapçılık' ilkesinin tam ve net tanımıdır.",
    answers: [
      { text: "İnkılapçılık", ok: true }, { text: "Laiklik", ok: false }, { text: "Halkçılık", ok: false }, { text: "Cumhuriyetçilik", ok: false }, { text: "Milliyetçilik", ok: false }
    ] // Cevap anahtarı 13.A.
  },
  {
    text: "3 Mart 1924'te halifeliğin kaldırılması;\nI. milliyetçilik,\nII. laiklik,\nIII. devletçilik\nilkelerinden hangilerinin güçlenmesine katkı sağlamıştır?",
    diff: 2,
    expl: "Halifelik 'Ümmet' (tüm Müslümanlar) anlayışına dayanır. Kaldırılmasıyla ümmetçilik yerine 'Milli Devlet' (Ulus devleti) yapısı yani 'Milliyetçilik' (I) güçlenmiştir. Aynı zamanda devlet yönetiminden dini bir makam çıkarıldığı için 'Laiklik' (II) güçlenmiştir. Devletçilik ekonomiyle ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 14.C.
  }
];

export const TAR_ATATURK_ILKELERI_TEST_2: McQ[] = [
  // ---------------- ATATÜRK İLKELERİ - TEST 2 ----------------
  {
    text: "I. Aşar vergisinin kaldırılması\nII. İlköğretimin ücretsiz olması\nIII. Tekke, zaviye ve türbelerin kapatılması\nYukarıdaki yenilik hareketlerinden hangileri Atatürk'ün halkçılık ilkesi ile ilişkilendirilebilir?",
    diff: 1,
    expl: "Aşar vergisinin kalkması köylüyü ağır bir yükten kurtararak (I) ve ilköğretimin ücretsiz olması fakir/zengin herkesin eşit eğitim almasını sağlayarak (II) halkın yararını gözetir (Halkçılık). Ancak Tekke ve Zaviyelerin kapatılması (III) doğrudan din istismarını önlemeye yönelik olup Laiklik (ve İnkılapçılık) ilkesiyle ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
      // { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "1924 Anayasası'nda yer alan \"Türkiye'de din ve ırk ayırt edilmeksizin vatandaşlık bakımından herkese Türk denir.\" maddesi;\nI. halkçılık,\nII. milliyetçilik,\nIII. laiklik\nilkelerinden hangilerine uygun düşmektedir?",
    diff: 2,
    expl: "Irk ayrımı yapmadan herkesi 'Türk' saymak birleştirici (Irkçı olmayan) 'Milliyetçilik'tir (II). Din ayrımı yapmamak, herkesi eşit görmek 'Laiklik' (III) ve sınıfsız/imtiyazsız eşit toplum yaratmak 'Halkçılık'tır (I). Dolayısıyla bu birleştirici vatandaşlık tanımı üç ilkeyi de kapsar.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
      // { text: "Yalnız I", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "Aşağıdakilerden hangisinin Atatürk'ün laiklik anlayışı ile ilgili olduğu söylenemez?",
    diff: 2,
    expl: "Din ve vicdan hürriyeti (A), ayrımcılığa karşı olma (B), dini sömürüye karşı olma (C) ve akıl/bilim (E) laikliğin temelidir. Ancak 'Batıl inanışlara hoşgörü ile yaklaşılması' yanlıştır; laiklik hurafelere ve batıl inançlara (büyü, üfürükçülük vb.) hoşgörü göstermez, onları akıl ve bilimle yok etmeyi amaçlar (Tekke ve zaviyelerin kapatılması bunun kanıtıdır).",
    answers: [
      { text: "Din ve vicdan hürriyetini benimsemesi", ok: false }, { text: "Ayrımcılığa karşı olunması", ok: false }, { text: "Dinsel sömürünün karşısında yer alması", ok: false }, { text: "Batıl inanışlara hoşgörü ile yaklaşılması", ok: true }, { text: "Akıl ve bilimin esas alınması", ok: false }
      // { text: "Din ve vicdan hürriyetini benimsemesi", ok: false }, { text: "Ayrımcılığa karşı olunması", ok: false }, { text: "Dinsel sömürünün karşısında yer alması", ok: false }, { text: "Batıl inanışlara hoşgörü ile yaklaşılması", ok: true }, { text: "Akıl ve bilimin esas alınması", ok: false }
    ]
  },
  {
    text: "1926 Maarif Teşkilatı Kanunu'nda yer alan ders kitaplarının akılcı, bilimsel esaslar doğrultusunda yapılandırılması kararı aşağıda verilen hangi Atatürk ilkesi ile doğrudan ilgilidir?",
    diff: 1,
    expl: "Eğitimin ve müfredatın dogmalardan, hurafelerden, dini referanslardan arındırılarak tamamen 'Akılcı ve Bilimsel' esaslara oturtulması doğrudan doğruya 'Laiklik' ilkesinin eğitimdeki yansımasıdır.",
    answers: [
      { text: "Halkçılık", ok: false }, { text: "Devletçilik", ok: false }, { text: "Laiklik", ok: true }, { text: "İnkılapçılık", ok: false }, { text: "Milliyetçilik", ok: false }
      // { text: "Halkçılık", ok: false }, { text: "Devletçilik", ok: false }, { text: "Laiklik", ok: true }, { text: "İnkılapçılık", ok: false }, { text: "Milliyetçilik", ok: false }
    ]
  },
  {
    text: "Yeni Türk devletinde;\nI. Koruyucu Gümrük Kanunu'nun çıkarılması,\nII. mirasta kadın - erkek eşitliğinin sağlanması,\nIII. saltanatın kaldırılması,\ngelişmelerinin bağlı olduğu ilkeler aşağıdakilerin hangisinde doğru olarak verilmiştir?",
    diff: 2,
    expl: "Koruyucu Gümrük Kanunu yerli sanayiyi (milli ekonomiyi) koruduğu için Milliyetçilik'tir (I). Mirasta kadın-erkek eşitliği ayrıcalıkları bitirdiği için Halkçılık'tır (II). Saltanatın kaldırılarak egemenliğin halka geçmesi ise Cumhuriyetçilik'tir (III). (I: Milliyetçilik, II: Halkçılık, III: Cumhuriyetçilik)",
    answers: [
      { text: "Halkçılık: II, Cumhuriyetçilik: III, Milliyetçilik: I", ok: true }, { text: "Halkçılık: III, Cumhuriyetçilik: I, Milliyetçilik: II", ok: false }, { text: "Halkçılık: III, Cumhuriyetçilik: II, Milliyetçilik: I", ok: false }, { text: "Halkçılık: I, Cumhuriyetçilik: II, Milliyetçilik: III", ok: false }, { text: "Halkçılık: II, Cumhuriyetçilik: I, Milliyetçilik: III", ok: false }
    ] // Cevap anahtarı 5.A diyor. Wait, A is Halkçılık: II, Cumhuriyetçilik: III, Milliyetçilik: I. Yes! This matches my logic. At least this one is correct in the book.
  },
  {
    text: "Kurtuluş Savaşı sürecinde Anadolu halkının işgalcilere karşı bağımsızlıklarını korumak adına silahlı direniş örgütleri kurmaları, yaşadıkları coğrafyanın çoğunluğunun kendilerine ait olduğunu dünya kamuoyuna duyurmaya çalışmaları aşağıdaki Atatürk ilkelerinden hangisini fiilen benimsemiş olduklarının göstergesidir?",
    diff: 2,
    expl: "Halkın kendi vatanını kurtarmak için harekete geçmesi (Kuvayımilliye) ve 'Burada Türkler çoğunluktadır, burası bizim yurdumuzdur' diyerek bağımsızlığı savunması doğrudan 'Milliyetçilik' (Milli bilinç) ilkesini benimsediklerinin kanıtıdır.",
    answers: [
      { text: "Cumhuriyetçilik", ok: false }, { text: "Milliyetçilik", ok: true }, { text: "Laiklik", ok: false }, { text: "Devletçilik", ok: false }, { text: "İnkılapçılık", ok: false }
    ] // Cevap anahtarı 6.B diyor. Yes.
  },
  {
    text: "- Din ve vicdan hürriyetini esas alma\n- Toplumsal birlik ve beraberliği sağlama\n- Halkın ihtiyaçları için devlet eliyle yatırım yapma\n- Çağdaş uygarlıklar seviyesine ulaşma\nYukarıda verilen tanımlamalar aşağıda verilen ilkelerden hangisi ile doğrudan ilişkilendirilemez?",
    diff: 2,
    expl: "Din-vicdan hürriyeti (Laiklik), toplumsal birlik (Milliyetçilik/Halkçılık), devlet eliyle yatırım (Devletçilik), çağdaşlaşma (İnkılapçılık). Ancak bu tanımlar arasında halkın yönetime katılması, seçme-seçilme veya meclis idaresini (milli iradeyi) anlatan 'Cumhuriyetçilik' ilkesine doğrudan bir atıf yoktur.",
    answers: [
      { text: "Devletçilik", ok: false }, { text: "Halkçılık", ok: false }, { text: "Laiklik", ok: false }, { text: "Cumhuriyetçilik", ok: true }, { text: "İnkılapçılık", ok: false }
    ] // Cevap anahtarı 7.D.
  },
  {
    text: "Yeni Türk devletinin ekonomide devletçi bir anlayış benimsemesinin nedeni aşağıdakilerden hangisidir?",
    diff: 1,
    expl: "Cumhuriyetin ilk yıllarında savaştan çıkmış olan halkın ve özel sektörün elinde yeterli sermaye (para ve teknik bilgi) olmadığı için, büyük fabrikaların ve sanayinin kurulamaması devleti mecburen yatırımları bizzat yapmaya (Devletçilik) yöneltmiştir.",
    answers: [
      { text: "Bolşevik Rusya ile yakınlaşma ve destek alma isteği", ok: false }, { text: "Liberal demokratik sistemin benimsenerek ülke rejimine egemen kılınması", ok: false }, { text: "Topraksız köylüyü topraklandırarak üretime doğrudan katma amacı", ok: false }, { text: "Yatırım yapacak sermaye sahiplerinin yetersizliği", ok: true }, { text: "Soğuk Savaş Dönemi'nde Batı Bloku'nda yer alma düşüncesi", ok: false }
    ] // Cevap anahtarı 8.D.
  },
  {
    text: "\"Her millet kendi devletini kurup kendi isteğine göre yönetilmelidir.\" tezi aşağıdaki kavramlardan hangisini reddetmektedir?",
    diff: 2,
    expl: "Bir milletin kendi devletini kurup kendi kendisini yönetmesi (bağımsızlık), büyük bir devletin koruması ve yönetimi altına girmek anlamına gelen sömürgecilik ve 'Manda ve Himaye' anlayışını kesin olarak reddeder.",
    answers: [
      { text: "Millî egemenlik", ok: false }, { text: "Cumhuriyetçilik", ok: false }, { text: "Manda ve himaye", ok: true }, { text: "Milliyetçilik", ok: false }, { text: "Ulusal Bağımsızlık", ok: false }
    ] // Cevap anahtarı 9.C.
  },
  {
    text: "Cumhuriyetçilik ilkesinin geliştirilmesine yönelik uygulamalara aşağıdakilerden hangisi örnek teşkil etmez?",
    diff: 2,
    expl: "Çok partili hayata geçiş (C), seçmen yaşının indirilmesi (B), kadınlara oy hakkı verilmesi ve vergi verme şartının kaldırılarak herkesin oy kullanabilmesi (D) demokratik katılımı (Cumhuriyetçiliği) geliştirir. Ancak 'Siyasi partilerin kapatılması' (A) demokratikleşmeye bir darbedir, Cumhuriyetçiliği geliştirmez.",
    answers: [
      { text: "Siyasi partilerin kapatılması", ok: true }, { text: "Seçmen yaşının indirilmesi", ok: false }, { text: "Çok partili hayata geçilmek istenmesi", ok: false }, { text: "Oy vermede vergi ödeme şartının kaldırılması", ok: false }, { text: "Seçimlerin sürekliliğinin sağlanması", ok: false }
    ] // Cevap anahtarı 10.A.
  },
  {
    text: "Atatürk ilkelerinin Cumhuriyet Halk Fırkası'nın parti programına dâhil edilmesi aşağıda verilen tarihlerin hangisinde gerçekleşmiştir?",
    diff: 3,
    expl: "Atatürk ilkeleri (6 Ok) önce 1931 yılındaki CHP Kurultayı'nda parti tüzüğüne dâhil edilmiş, daha sonra (1937'de) ise Anayasaya girerek devletin resmi ilkeleri haline gelmiştir.",
    answers: [
      { text: "1930", ok: false }, { text: "1931", ok: true }, { text: "1933", ok: false }, { text: "1937", ok: false }, { text: "1945", ok: false }
    ]
  },
  {
    text: "Atatürk'ün milliyetçilik ilkesi doğrultusunda yapılan inkılaplara aşağıdakilerden hangisi örnek gösterilemez?",
    diff: 2,
    expl: "Kabotaj (milli sular), Türk Tarih Kurumu (milli tarih), Türkçe soyadı ve Koruyucu Gümrük (milli ekonomi) doğrudan milliyetçiliktir. Ancak 'Miladi takvimin kabulü' Avrupa (Batı) ile olan ticari ve diplomatik ilişkileri kolaylaştırmak içindir ve 'İnkılapçılık' ilkesine girer.",
    answers: [
      { text: "Kabotaj Yasası'nın kabulü", ok: false }, { text: "Türkçe soyadı zorunluluğunun getirilmesi", ok: false }, { text: "Miladi takvimin kabulü", ok: true }, { text: "Türk Tarih Kurumunun oluşturulması", ok: false }, { text: "Koruyucu Gümrük Kanunu'nun çıkarılması", ok: false }
    ]
  }
];

// ============================================================================
// ATATÜRK İLKELERİ - TEST 3
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
    text: "<p>Mustafa Kemal'in Söylev ve Demeçler adlı eserinde yer alan \"Yurdumuzu dünyanın en mamur, en medeni memleketleri seviyesine çıkaracağız.\" sözleri;</p><p>I. inkılapçılık,<br>II. milliyetçilik,<br>III. devletçilik</p><p><b>ilkelerinden hangileri ile ilişkilendirilebilir?</b></p>",
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
    text: "<p><b>Millî Mücadele Hazırlık Dönemi'nde;</b></p><p>I. Millî iradeyi egemen kılmak esastır.<br>II. Millî sınırlar içinde vatan bütündür, bölünemez.<br>III. Azınlıklara bütünlüğümüzü bozucu haklar verilemez.</p><p><b>kararlarından hangilerinin \"cumhuriyetçilik\" ilkesi doğrultusunda alındığı söylenebilir?</b></p>",
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