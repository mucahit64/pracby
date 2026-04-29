import type { McQ } from "../../../../types";

export const TAR_CUMHURIYET_DONEMI_IC_POLITIKA: McQ[] = [
  // ---------------- CUMHURİYET DÖNEMİ İÇ POLİTİKA - TEST 1 ----------------
  {
    text: "29 Ekim 1923'te ilan edilen Cumhuriyet'in bayram olarak kutlanmaya başlanması kararı aşağıda verilen tarihlerden hangisinde alınmıştır?",
    diff: 3,
    expl: "Cumhuriyet 29 Ekim 1923'te ilan edilmiştir, ancak bu günün her yıl 'Cumhuriyet Bayramı' olarak kutlanması kararı, ilandan bir buçuk yıl sonra (19 Nisan 1925'te) TBMM tarafından kanunla kabul edilmiştir.",
    answers: [
      { text: "1923", ok: false }, { text: "1924", ok: false }, { text: "1925", ok: true }, { text: "1928", ok: false }, { text: "1937", ok: false }
    ] // Cevap anahtarı 1.C. (Page 209, Test 1 Key: 1.C 2.D 3.A 4.B 5.A 6.B 7.B 8.A 9.E 10.B 11.D 12.E 13.D 14.D 15.C)
  },
  {
    text: "Cumhuriyet Halk Partisinde parti içi denetimi sağlamak amacı ile 1939'da oluşturulan birim aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Tek parti dönemi olan 1939 yılında, CHP içinde meclis çalışmalarını ve hükümeti denetlemek amacıyla parti içi bir muhalefet grubu gibi çalışması planlanan 'Müstakil Grup' (Bağımsız Grup) kurulmuştur.",
    answers: [
      { text: "Vatan Cephesi", ok: false }, { text: "Dörtlü Takrir", ok: false }, { text: "Millî Birlik Komitesi", ok: false }, { text: "Müstakil Grup", ok: true }, { text: "Dokuz Umde", ok: false }
    ] // Cevap anahtarı 2.D.
  },
  {
    text: "19 Mayıs 1924'te Musul için toplanan Haliç Konferansı'nda sonuç alınamaması, ilk olarak aşağıdakilerden hangisine ortam hazırlamıştır?",
    diff: 2,
    expl: "Haliç Konferansı'nda İngiltere ile Türkiye arasında Musul (Irak sınırı) konusunda uzlaşma sağlanamamış ve konu Milletler Cemiyeti'ne taşınmıştır. Bu gergin ortamda İngiltere, Türkiye'yi içeriden zayıflatmak için Doğu'da Şeyh Sait İsyanı'nı (1925) kışkırtmıştır.",
    answers: [
      { text: "Şeyh Sait İsyanı", ok: true }, { text: "Nasturi İsyanı", ok: false }, { text: "Tunceli Olayları", ok: false }, { text: "Ahali Sözleşmesi", ok: false }, { text: "Vali Cemal Bey Ayaklanması", ok: false }
    ] // Cevap anahtarı 3.A. (Aslında Nasturi isyanı Ağustos 1924'te, Şeyh Sait Şubat 1925'te çıkmıştır. İkisi de Musul meselesiyle ilgilidir ancak cevap anahtarı A diyor, çünkü Musul'un kaybedilmesinde asıl büyük etken Şeyh Sait isyanıdır. Veya Haliç Konferansı (Mayıs 1924) sonrası 'ilk' isyan Nasturi (Ağustos) de olabilir. Wait, key says 3.A. I will follow the key.)
  },
  {
    text: "Saltanatın kaldırılması ile istifa eden İstanbul Hükûmeti'nin son sadrazamı aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "1 Kasım 1922'de TBMM tarafından Saltanatın kaldırılması kararı üzerine, İstanbul'daki Osmanlı Hükümeti'nin sadrazamı (ve Osmanlı'nın son sadrazamı) olan Ahmet Tevfik Paşa, 4 Kasım'da istifa etmiş ve Osmanlı Hükümeti fiilen sona ermiştir.",
    answers: [
      { text: "Damat Ferit", ok: false }, { text: "Tevfik Paşa", ok: true }, { text: "Rauf Orbay", ok: false }, { text: "Ahmet İzzet", ok: false }, { text: "Salih Paşa", ok: false }
    ] // Cevap anahtarı 4.B.
  },
  {
    text: "I. TBMM'de tartışılan konular arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "I. TBMM (1920-1923) döneminde; meclisin Kayseri'ye taşınması (Sakarya öncesi), Başkomutanlık yasası, Sakarya doğusuna çekilme ve Saltanatın kaldırılması (1922) tartışılmıştır. Ancak Şeyh Sait isyanı için çıkarılan 'Takrir-i Sükûn Kanunu' (1925), II. TBMM döneminde tartışılmış ve uygulanmıştır.",
    answers: [
      { text: "Takrir-i Sükûn Kanunu'nun uygulanması", ok: true }, { text: "Saltanatın kaldırılması", ok: false }, { text: "Meclisin Kayseri'ye taşınması fikri", ok: false }, { text: "Başkomutanlık Kanunu'nun çıkartılması", ok: false }, { text: "Türk ordusunun Sakarya'nın doğusuna çekilmesi", ok: false }
    ] // Cevap anahtarı 5.A.
  },
  {
    text: "Cumhuriyetin ilanı ile çözülen meseleler arasında aşağıdakilerden hangisi yer almaz?",
    diff: 1,
    expl: "29 Ekim 1923'te Cumhuriyetin ilanıyla; devletin adı konmuş (E), rejim sorunu (D), devlet başkanlığı sorunu (C) ve güz aylarında yaşanan Hükümet Bunalımı (A) (Meclis hükümetinden Kabine sistemine geçilerek) çözülmüştür. Ancak 'Seçim sistemi' Cumhuriyetin ilanıyla değil, 1946'da (Tek dereceli seçime geçilerek) çözülmüştür.",
    answers: [
      { text: "Hükûmet bunalımı", ok: false }, { text: "Seçim sistemi", ok: true }, { text: "Devlet başkanlığı", ok: false }, { text: "Rejim sorunu", ok: false }, { text: "Devletin adı", ok: false }
    ] // Cevap anahtarı 6.B.
  },
  {
    text: "I. Şeyh Sait\nII. Cemil Çeto\nIII. Menemen\nisyanlarından hangileri Cumhuriyet Dönemi'nde gerçekleştirilen inkılaplara tepki niteliğinde değildir?",
    diff: 2,
    expl: "Şeyh Sait (1925) ve Menemen (1930) isyanları Cumhuriyet rejimini ve laik inkılapları yıkmaya yönelik irticai (gerici) isyanlardır. Cemil Çeto isyanı ise 1920 yılında, henüz I. TBMM döneminde, ayrılıkçı (Kürt devleti kurma) amaçla çıkmış bir isyandır, Cumhuriyet dönemi inkılaplarına tepki değildir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: true }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 7.B.
  },
  {
    text: "I. Menemen İsyanı\nII. Şeyh Sait Ayaklanması\nIII. Mustafa Kemal'e suikast girişimi\nYukarıda verilen gelişmelerin hangilerinde İstiklal Mahkemeleri görev almamıştır?",
    diff: 2,
    expl: "Şeyh Sait (II) isyanında (Şark İstiklal) ve Atatürk'e Suikast Girişimi'nde (III) (İzmir İstiklal) İstiklal Mahkemeleri görev almıştır. Ancak 1930'daki Menemen İsyanı (Kubilay Olayı) failleri İstiklal Mahkemesi'nde değil, askeri idare olan 'Divan-ı Harp' mahkemelerinde yargılanmıştır.",
    answers: [
      { text: "Yalnız I", ok: true }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 8.A.
  },
  {
    text: "Serbest Cumhuriyet Fırkası ile ilgili aşağıda verilen yargılardan hangisi doğru nitelikte değildir?",
    diff: 3,
    expl: "Serbest Cumhuriyet Fırkası (1930); Ali Fethi Okyar tarafından (başkan), Nuri Conker'in genel sekreterliğinde kurulmuş, ekonomide liberalizmi (A), siyasette laikliği (B) savunmuştur. Aydın teşkilatını ise Adnan Menderes kurmuştur (C). Ancak 'Menemen İsyanı sonucunda faaliyetine ara vermek zorunda kalmıştır' (E) YANLIŞTIR; parti Menemen isyanından BİRKAÇ AY ÖNCE (Kasım 1930) kendi kendini feshetmiştir. (Menemen Aralık 1930'dadır).",
    answers: [
      { text: "Ekonomide liberal anlayışı benimsemiştir.", ok: false }, { text: "Laik devlet anlayışını savunmuştur.", ok: false }, { text: "Aydın ili teşkilatlanmasında Adnan Menderes aktif rol almıştır.", ok: false }, { text: "Genel başkanlık görevini Ali Fethi Okyar, genel sekreterliğini ise Nuri Conker üstlenmiştir.", ok: false }, { text: "Menemen İsyanı sonucunda siyasi faaliyetlerine ara vermek zorunda kalmıştır.", ok: true }
    ] // Cevap anahtarı 9.E.
  },
  {
    text: "Saltanatın kaldırılması ile ilgili kanun teklifini TBMM'ye sunan devlet adamı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "Lozan'a İstanbul Hükümeti'nin de çağrılması üzerine, saltanatın kaldırılmasının şart olduğunu belirten ve 78 arkadaşıyla birlikte TBMM'ye bu yönde kanun teklifi sunan Sinop Milletvekili Dr. Rıza Nur'dur.",
    answers: [
      { text: "Saffet Arıkan", ok: false }, { text: "Rıza Nur", ok: true }, { text: "Vasıf Temel", ok: false }, { text: "Şeyh Saffet Bey", ok: false }, { text: "Rauf Orbay", ok: false }
    ] // Cevap anahtarı 10.B.
  },
  {
    text: "- Devlet başkanlığı\n- Rejim boşluğu\nsorunları aşağıda verilen hangi inkılabın sonucunda ortaya çıkmıştır?",
    diff: 2,
    expl: "1 Kasım 1922'de 'Saltanatın Kaldırılması' ile birlikte Osmanlı Devleti resmen yıkılmış, padişah ülkeden ayrılmış; bu da devlette 'Rejimin adı ne olacak?' ve 'Devletin başkanı kim olacak?' krizlerini ortaya çıkarmıştır. (Bu krizler 1 yıl sonra Cumhuriyet'in ilanıyla çözülecektir).",
    answers: [
      { text: "Cumhuriyet'in ilanı", ok: false }, { text: "Halifeliğin kaldırılması", ok: false }, { text: "1921 Anayasası'nın kabulü", ok: false }, { text: "Saltanatın kaldırılması", ok: true }, { text: "Meclis hükûmeti sisteminin uygulanması", ok: false }
    ] // Cevap anahtarı 11.D.
  },
  {
    text: "3 Mart 1924 tarihinde Osmanlı hanedan üyelerinin yurt dışına çıkarılması kararının alınması;\nI. yönetimde iki başlılığı önleme,\nII. rejimin güvenliğini sağlama,\nIII. inkılapları hızlandıracak koşulları oluşturma\namaçlarından hangilerine yöneliktir?",
    diff: 2,
    expl: "Halifeliğin kaldırıldığı gün (3 Mart 1924) çıkarılan yasa ile tüm hanedan üyelerinin (sürgüne) yurtdışına çıkarılması; saltanat/hilafet yanlılarının (iki başlılık) isyan edip rejimi tehlikeye atmasını (II) engellemek ve yapılacak olan yeniliklerin (inkılapların - III) önündeki engelleri kaldırmak içindir.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 12.E. Wait! Let me check Test 1 Key. 12.E. Yes, I, II, III.
  },
  {
    text: "I. Demokrat Parti\nII. Cumhuriyet Halk Fırkası\nIII. Serbest Cumhuriyet Fırkası\nYukarıda verilen siyasi oluşumların hangilerinde Mustafa Kemal'in rolü veya katkısının olduğu söylenebilir?",
    diff: 2,
    expl: "Cumhuriyet Halk Fırkası'nı (CHP) Mustafa Kemal kendisi kurmuştur (II). Serbest Cumhuriyet Fırkası'nı ise arkadaşı Ali Fethi Bey'e (demokrasiye geçiş denemesi için) yine bizzat kendisi kurdurmuştur (III). Ancak Demokrat Parti (DP), Atatürk'ün ölümünden yıllar sonra (1946) kurulmuştur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 13.D.
  },
  {
    text: "Lozan Görüşmelerinde İstanbul Hükûmeti'nin katılmasını engelleyen, Osmanlı Devleti'nin resmen sona ermesi anlamına gelen ve 1936'ya kadar \"Hâkimiyet Bayramı\" olarak kutlanan gelişme aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Lozan Barış Konferansı öncesinde İtilaf Devletlerinin İstanbul Hükümeti'ni de davet etmesi üzerine, ikilik çıkmasını önlemek için 1 Kasım 1922'de Saltanat kaldırılmıştır. Bu gün, uzun yıllar 'Milli Hakimiyet Bayramı' olarak kutlanmıştır.",
    answers: [
      { text: "Cumhuriyetin ilanı", ok: false }, { text: "Halifeliğin kaldırılması", ok: false }, { text: "TBMM'nin açılması", ok: false }, { text: "Saltanatın kaldırılması", ok: true }, { text: "Takrir-i Sükûn Kanunu'nun çıkarılması", ok: false }
    ] // Cevap anahtarı 14.D.
  },
  {
    text: "Cumhuriyetin ilk yıllarında çok partili hayata geçiş denemelerinin başarısız olmasında aşağıdakilerden hangisi etkili olmamıştır?",
    diff: 1,
    expl: "Çok partili hayata geçiş (TCF ve SCF); Şeyh Sait ve Menemen gibi rejim karşıtı isyanlar çıkması (A), halkın henüz demokratik olgunluğa erişememesi (D) ve laiklik ilkesinin tam yerleşmemesi (B) yüzünden başarısız olmuştur. Ancak 'II. Dünya Savaşı'nın çıkması' çok daha sonraki (1939) bir olaydır, ilk yıllardaki (1924-1930) partilerin kapanma nedeni olamaz.",
    answers: [
      { text: "Rejim karşıtı isyanların görülmesi", ok: false }, { text: "Laikliğin tam olarak yerleşmemesi", ok: false }, { text: "Tek dereceli seçim sistemine geçilmesi", ok: false }, { text: "Bazı kesimlerin yeterli siyasi olgunluğa erişememesi", ok: false }, { text: "II. Dünya Savaşı'nın çıkması", ok: true }
    ]
  },

  // ---------------- CUMHURİYET DÖNEMİ İÇ POLİTİKA - TEST 2 ----------------
  {
    text: "I. Tek dereceli seçim sistemini savunması\nII. Ekonomide devletçiliği esas alması\nIII. Laiklik ilkesini benimsemesi\nIV. Menemen İsyanı sonucunda siyasi faaliyetlerine son verilmesi\nYukarıda verilen durumların hangilerinin Serbest Cumhuriyet Fırkası ile ilgili olduğu söylenebilir?",
    diff: 2,
    expl: "SCF (1930), tek dereceli seçimi savunmuş (I) ve laikliği benimsemiştir (III). Ancak ekonomide 'Devletçilik' yerine 'Liberalizmi' savunmuştur (II yanlış). Ayrıca Menemen isyanından SONRA değil, ÖNCE (kendi isteğiyle) kapatılmıştır (IV yanlış).",
    answers: [
      { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }, { text: "I, II, III ve IV", ok: false }
    ] // Cevap anahtarı 1.B. (Page 214, Test 2 Key: 1.B 2.C 3.C 4.E 5.C 6.B 7.D 8.A 9.B 10.C 11.A 12.A 13.D 14.B 15.C)
  },
  {
    text: "Takrir-i Sükûn Dönemi'nde meydana gelen gelişmeler arasında aşağıdakilerden hangisi yer almaz?",
    diff: 3,
    expl: "Takrir-i Sükûn Kanunu 1925 (Şeyh Sait İsyanı) ile 1929 yılları arasında uygulanmış sert tedbirler dönemidir. Bu dönemde Şapka (1925), Tekke zaviye (1925), Harf devrimi (1928) yapılmış ve Basına sansür uygulanmıştır. Ancak Ölçü ve Tartı birimlerinin değişmesi (1931) bu kanunun yürürlükte olduğu dönemin dışındadır.",
    answers: [
      { text: "Harf devriminin gerçekleştirilmesi", ok: false }, { text: "Basına sansür uygulanması", ok: false }, { text: "Ölçü birimlerinin değiştirilmesi", ok: true }, { text: "Şapka Kanunu'nun çıkartılması", ok: false }, { text: "Tekke, zaviye ve türbelerin kapatılması", ok: false }
    ] // Cevap anahtarı 2.C.
  },
  {
    text: "\"Şeyh Sait İsyanı sadece çok partili siyasi yaşamı geciktirmemiş aynı zamanda Misakımillî'den büyük bir taviz verilmesini zorunlu hâle getirerek bugün hâlâ enerjide dışa bağımlı bir Türkiye'nin ortaya çıkmasına neden olmuştur.\" tezini savunan bir tarihçinin buna delil olarak aşağıdakilerden hangisini göstermesi beklenir?",
    diff: 2,
    expl: "Şeyh Sait isyanı yüzünden Türk ordusu yıpranmış ve İngiltere ile savaş göze alınamadığı için 1926 Ankara Antlaşması imzalanarak zengin petrol yataklarına sahip olan Musul-Kerkük bölgesi (Misak-ı Milli'den taviz verilerek) Irak'a (İngiliz mandasına) bırakılmıştır.",
    answers: [
      { text: "İsyan bölgesinde olağanüstü hâl ilan edilerek sıkı tedbirler alınması", ok: false }, { text: "Terakkiperver Cumhuriyet Fırkası'nın siyasi yaşamına son verilmesi", ok: false }, { text: "Ankara Antlaşması'nın imzalanmasıyla Musul - Kerkük bölgesinin Irak'a bırakılması", ok: true }, { text: "Hükûmet değişikliğinin yaşanması", ok: false }, { text: "Takrir-i Sükûn Kanunu'nun yürürlüğe girmesi", ok: false }
    ] // Cevap anahtarı 3.C.
  },
  {
    text: "Serbest Cumhuriyet Fırkası'nın kendini feshetmesinden sonra uzun bir süre çok partili siyasi yaşama geçme adına adım atılmamış ve tek partili durum 1946'ya kadar devam etmiştir.\nÇok partili yaşama geçiş çalışmalarına uzun süre ara verilmesinde;\nI. yapılan inkılapların halk tarafından benimsenme sürecini oluşturma,\nII. yaklaşan II. Dünya Savaşı tehdidine yönelik tedbirler alma,\nIII. rejim karşıtı isyanların oluşumunu engelleme\namaçlarından hangilerinin etkili olduğu savunulabilir?",
    diff: 2,
    expl: "Menemen gibi olaylar halkın henüz inkılapları tam benimsemediğini ve isyana (III) meyilli olduğunu göstermiştir, bu yüzden inkılapların kökleşmesi (I) beklenmiştir. 1930'ların sonuna doğru ise faşizmin yükselmesi ve II. Dünya Savaşı'nın yaklaşması (II) devletin iç siyasette (partilerle) bölünmek yerine tek bir yumruk halinde kalmasını zorunlu kılmıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 4.E.
  },
  {
    text: "I. Cumhuriyetçilik\nII. Devletçilik\nIII. Milliyetçilik\nYukarıdaki ilkelerden hangileri Atatürk Dönemi'nde kurulmuş olan Serbest Cumhuriyet Fırkası'nın parti programında yer almaktadır?",
    diff: 3,
    expl: "Serbest Cumhuriyet Fırkası (SCF) Cumhuriyetçilik (I) ve Milliyetçilik (III) (ve laiklik) ilkelerine sonuna kadar bağlıydı. Ancak ekonomide Atatürk'ün (CHP'nin) benimsediği Devletçilik (II) ilkesine karşı çıkarak 'Liberalizm'i (serbest piyasa ekonomisini) savunmuştur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 5.C.
  },
  {
    text: "Türkiye Cumhuriyeti'nin ilk yıllarında rejim karşıtı isyan ve faaliyetler görülmüş, bu durum Cumhuriyet idaresini tehlikeye düşürmüştür.\nBu doğrultuda aşağıdakilerden hangisinin rejimin güvenliğini sağlamaya yönelik olduğu söylenemez?",
    diff: 2,
    expl: "Takrir-i Sükûn kanunu, Tekke ve Zaviyelerin kapatılması ve Halifeliğin kaldırılması rejimi korumaya yönelik köklü adımlardır. Cumhuriyet'in güvenliği tehlikede olduğu için de 'Tek Parti' (CHP) iktidarı zorunlu olarak bir süre devam etmiştir (C). Padişahın (Vahdettin'in) yurt dışına çıkması ise (Kasım 1922) Cumhuriyetin ilanından ve bu isyanlardan ÇOK ÖNCEDİR, rejimin güvenliği için yapılmış bir 'karar/eylem' değil, kendi kaçışıdır.",
    answers: [
      { text: "Takrir-i Sükûn Kanunu'nun çıkarılması", ok: false }, { text: "Padişahın yurt dışına çıkması", ok: true }, { text: "Tek parti iktidarının bir süre devam etmesi", ok: false }, { text: "Tekke, zaviye ve türbelerin kaldırılması", ok: false }, { text: "Halifeliğin kaldırılması", ok: false }
    ] // Cevap anahtarı 6.B.
  },
  {
    text: "3 Mart 1924 tarihinde gerçekleşen yenilikler arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "3 Mart 1924'te: Halifelik kaldırıldı, Şeriye ve Evkaf Vekaleti kaldırılarak Diyanet İşleri kuruldu, Tevhid-i Tedrisat kabul edildi, Erkan-ı Harbiye kaldırılarak ordu siyasetten ayrıldı. Ancak 'Tekke, zaviye ve türbelerin kapatılması' 1925 yılındadır (Şeyh Sait İsyanı sonrasıdır).",
    answers: [
      { text: "Diyanet İşleri Başkanlığının kurulması", ok: false }, { text: "Halifeliğin kaldırılması", ok: false }, { text: "Tevhid-i Tedrisat Kanunu'nun yayımlanması", ok: false }, { text: "Tekke, zaviye ve türbelerin kapatılması", ok: true }, { text: "Ordunun siyasetten ayrılmasına çalışılması", ok: false }
    ] // Cevap anahtarı 7.D.
  },
  {
    text: "Mustafa Kemal, Temsil Heyeti'nin Ankara'ya gelişinden bir gün sonra \"Teşkilatımızda millî güçlerin etkin ve millî iradenin egemen olması esas kabul edilmiştir. Bugün bütün cihanın milletleri yalnız bir egemenlik tanıdılar. O da millî egemenlik.\" sözüyle bu ilkeye verdiği önemi belirtmiştir.\nAşağıdakilerden hangisinin millî egemenlik doğrultusunda gerçekleştirildiği söylenemez?",
    diff: 1,
    expl: "TBMM'nin açılması, Cumhuriyetin ilanı, Saltanatın kaldırılması ve çok partili hayata geçiş denemeleri hep 'halkın yönetime katılması' yani Milli Egemenlik adımlarıdır. Ancak 'Terakkiperver Cumhuriyet Fırkası'nın kapatılması' (Şeyh Sait İsyanı nedeniyle), zorunlu da olsa demokrasinin/milli egemenliğin kesintiye uğramasıdır (Geliştirilmesi değil).",
    answers: [
      { text: "Terakkiperver Cumhuriyet Fırkası'nın kapatılması", ok: true }, { text: "TBMM'nin açılması", ok: false }, { text: "Cumhuriyet'in ilanı", ok: false }, { text: "Çok partili hayata geçiş denemelerinin yapılması", ok: false }, { text: "Saltanatın kaldırılması", ok: false }
    ] // Cevap anahtarı 8.A.
  },
  {
    text: "I. Nasturi\nII. Menemen\nIII. Şeyh Sait\nisyanlarından hangilerinin II. TBMM Dönemi'nde gerçekleştiği söylenemez?",
    diff: 3,
    expl: "II. TBMM Dönemi 1923 ile 1927 yılları arasıdır. Bu dönemde Şeyh Sait İsyanı (1925) ve Nasturi Ayaklanması (1924) çıkmıştır. Ancak Menemen (Kubilay) Olayı 1930 yılında, yani III. TBMM döneminde (veya daha sonra) çıkmıştır, II. TBMM döneminde değildir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: true }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 9.B.
  },
  {
    text: "I. Ankara'nın başkent ilan edilmesi\nII. Lozan Antlaşması'nın onaylanması\nIII. İstanbul'un yönetiminin alınması\nIV. Cumhuriyet'in ilanı\ngelişmelerinin oluş sırası aşağıdakilerin hangisinde doğru olarak verilmiştir?",
    diff: 2,
    expl: "Sıralama: Mudanya Ateşkesinden sonra Refet Bele komutasında İstanbul'un idaresi teslim alındı (Kasım 1922 -> III). II. TBMM açılınca Lozan Antlaşması onaylandı (Ağustos 1923 -> II). Hemen ardından Ankara resmen başkent ilan edildi (13 Ekim 1923 -> I). Son olarak Cumhuriyet ilan edildi (29 Ekim 1923 -> IV). Sıralama: III - II - I - IV.",
    answers: [
      { text: "I - III - II - IV", ok: false }, { text: "II - I - III - IV", ok: false }, { text: "III - II - I - IV", ok: true }, { text: "I - II - III - IV", ok: false }, { text: "IV - III - II - I", ok: false }
    ] // Cevap anahtarı 10.C.
  },
  {
    text: "Terakkiperver Cumhuriyet Fırkası'nın genel sekreterlik görevini aşağıdakilerden hangisi yürütmüştür?",
    diff: 3,
    expl: "Mustafa Kemal'e muhalefet eden Kurtuluş Savaşı komutanlarının kurduğu İlk Muhalefet partisi olan Terakkiperver Cumhuriyet Fırkası'nın Genel Başkanı Kazım Karabekir, Genel Sekreteri ise Ali Fuat Cebesoy'dur.",
    answers: [
      { text: "Ali Fuat Cebesoy", ok: true }, { text: "Ali Fethi Okyar", ok: false }, { text: "Nuri Conker", ok: false }, { text: "Rauf Orbay", ok: false }, { text: "Kâzım Karabekir", ok: false }
    ] // Cevap anahtarı 11.A.
  },
  {
    text: "Mustafa Kemal'in Nutuk adlı eserinde;\nI. 1929 Krizi,\nII. saltanatın kaldırılması,\nIII. Şeyh Sait İsyanı\ngelişmelerinden hangilerinin yer aldığı söylenemez?",
    diff: 2,
    expl: "Mustafa Kemal'in ulu eseri 'Nutuk', 1919 (Samsun'a çıkış) ile 1927 (Gençliğe Hitabe) yılları arasındaki olayları kapsar. Bu yüzden 1922'deki Saltanatın kaldırılması (II) ve 1925'teki Şeyh Sait İsyanı (III) anlatılır. Ancak 1929 Dünya Ekonomik Krizi (Büyük Buhran), Nutuk yazıldıktan SONRA olduğu için bu eserde yer almaz.",
    answers: [
      { text: "Yalnız I", ok: true }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 12.A.
  },
  {
    text: "13 Şubat 1925 tarihinde çıkartılan Takrir-i Sükûn Kanunu ile ilgili aşağıdaki yargılardan hangisine ulaşılamaz?",
    diff: 2,
    expl: "Takrir-i Sükun Kanunu (Huzuru Sağlama Yasası), Şeyh Sait isyanı (irtica) üzerine Rejimi (Cumhuriyet) korumak için çıkarılmış sert bir yasadır (A, B). Terakkiperver Fırkası bu yasaya dayanılarak kapatılmıştır (D). Anti-demokratik uygulamalar (basın sansürü vb) içerir (E). Ancak yasa 1929'da yürürlükten kalkmıştır. Şıklarda C (1929 yılına kadar yürürlükte kalmıştır) ve E var. Cevap anahtarı D diyor! Wait! \n Let's re-read D: \"Serbest Cumhuriyet Fırkası'nın siyasi yaşamını sonlandırmasında etkili olmuştur.\"\n WOW. Serbest Cumhuriyet Fırkası (SCF) 1930'da kuruldu! Takrir-i Sükun (1925-1929) zaten kalkmıştı. TCF (Terakkiperver) kapatıldı, SCF değil. Excellent distractor.",
    answers: [
      { text: "Rejim güvenliğini sağlama amaçlı çıkarılmıştır.", ok: false }, { text: "Otoritenin güçlenmesine yöneliktir.", ok: false }, { text: "1929 yılına kadar yürürlükte kalmıştır.", ok: false }, { text: "Serbest Cumhuriyet Fırkası'nın siyasi yaşamını sonlandırmasında etkili olmuştur.", ok: true }, { text: "Antidemokratik hükümler içermektedir.", ok: false }
    ] // Cevap anahtarı 13.D.
  },
  {
    text: "Mustafa Kemal'in \"Bu bir paşalar komplosudur.\" sözleri ile nitelendirdiği siyasi parti aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Mustafa Kemal'in eski silah arkadaşları olan Kazım Karabekir, Rauf Orbay, Ali Fuat Cebesoy, Refet Bele (Hepsi Paşa rütbesindedir) gibi isimlerin bir araya gelerek CHP'den ayrılıp 'Terakkiperver Cumhuriyet Fırkası'nı kurması üzerine, Mustafa Kemal bu durumu kendisine karşı yapılmış bir 'Paşalar Komplosu' olarak nitelendirmiştir.",
    answers: [
      { text: "Hürriyet Partisi", ok: false }, { text: "Terakkiperver Cumhuriyet Fırkası", ok: true }, { text: "Serbest Cumhuriyet Fırkası", ok: false }, { text: "Yeşil Ordu", ok: false }, { text: "İşçi ve Amele Partisi", ok: false }
    ] // Cevap anahtarı 14.B.
  },
  {
    text: "Mustafa Kemal \"Benim naçiz vücudum elbet bir gün toprak olacaktır, ancak Türkiye Cumhuriyeti ilelebet payidar kalacaktır.\" sözlerini aşağıdaki gelişmelerin hangisinin sonucunda söylemiştir?",
    diff: 1,
    expl: "İttihatçı kalıntılar ve rejim karşıtları tarafından 1926 yılında İzmir'de Mustafa Kemal Paşa'ya yönelik düzenlenen ve son anda ortaya çıkarılan (Ziya Hurşit, Laz İsmail vb.) 'İzmir Suikastı Girişimi' üzerine, Atatürk bu tarihi sözü söylemiştir.",
    answers: [
      { text: "Şeyh Sait İsyanı", ok: false }, { text: "Kubilay Olayı", ok: false }, { text: "1926 suikast girişimi", ok: true }, { text: "Nasturi İsyanı", ok: false }, { text: "6 - 7 Eylül Olayları", ok: false }
    ] // Cevap anahtarı 15.C.
  }
];
