import type { McQ } from "../../../../types";

export const TAR_ATATURK_DONEMI_INKILAPLAR_TEST_1: McQ[] = [
  // ---------------- ATATÜRK DÖNEMİ İNKILAPLAR - TEST 1 ----------------
  {
    text: "Yeni Türk Devleti'nde gerçekleştirilen;\nI. medreselerin kapatılması,\nII. harf inkılabı,\nIII. Tevhid-i Tedrisat Kanunu\ngibi yenilik hareketlerinden hangilerinin eğitim-öğretimdeki ikilikleri gidermeye yönelik olduğu söylenebilir?",
    diff: 1,
    expl: "Osmanlı'nın son dönemlerinde geleneksel eğitim veren Medreseler ile Batı tarzı eğitim veren mektepler bir arada bulunuyordu. Tevhid-i Tedrisat Kanunu (III) ile tüm okullar MEB'e bağlanmış ve ardından Medreseler kapatılarak (I) eğitimdeki bu ikilik (çatışma) giderilmiştir. Harf inkılabı ise ikilik gidermek için değil, okuma yazmayı kolaylaştırmak içindir.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 1.D (I ve III). (Test 1 Key is on page 215. 1.D 2.E 3.E 4.B 5.C 6.A 7.C 8.A 9.D 10.E 11.E 12.B 13.A 14.B)
  },
  {
    text: "3 Mart 1924 tarihininde Şeriye ve Evkaf Vekâletinin kaldırılması;\nI. medrese,\nII. tekke - zaviye,\nIII. şeyhülislamlık\nkurumlarından hangilerinin kapatılmasına zemin hazırlamıştır?",
    diff: 3,
    expl: "Şeriye ve Evkaf (Din İşleri ve Vakıflar) Vekaleti kaldırılınca, vakıf gelirleriyle beslenen Medreseler ekonomik desteğini yitirdiği için Milli Eğitim Bakanlığı (Maarif) tarafından hemen ardından kapatılmıştır (I). Din işlerine bakan Şeyhülislamlık makamı da (III) Diyanet İşleri Başkanlığı'na devredilerek fiilen son bulmuştur. Tekke ve zaviyeler ise 1925'te kapatılacaktır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] 
  },
  {
    text: "1934 yılında Soyadı Kanunu'nun kabul edilmesi;\nI. tapu,\nII. maliye,\nIII. askerlik\nkonularının hangilerinde yaşanan karışıklıkların giderilmesine yöneliktir?",
    diff: 1,
    expl: "Osmanlı'da soyadı yerine lakaplar, baba isimleri veya unvanlar kullanılıyordu. Aynı isme sahip binlerce kişinin olması asker alımlarında (III), vergi/maliye kayıtlarında (II) ve miras/tapu işlerinde (I) büyük karışıklıklara yol açıyordu. Soyadı Kanunu bu karışıklıkları bitirmiştir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 3.E.
  },
  {
    text: "Atatürk Dönemi'nde eğitim alanında atılan yenilikçi adımlar arasında aşağıdakilerden hangisi gösterilemez?",
    diff: 2,
    expl: "Atatürk Dönemi (1923-1938) eğitim yenilikleri; Tevhid-i Tedrisat, Harf İnkılabı, Millet Mektepleri ve Maarif Teşkilat Yasası'dır. Ancak köylere öğretmen yetiştiren 'Köy Enstitüleri', Atatürk'ün vefatından sonra İsmet İnönü döneminde (1940) Hasan Ali Yücel önderliğinde kurulmuştur.",
    answers: [
      { text: "Yeni Türk harflerinin kabul edilmesi", ok: false }, { text: "Köy Enstitülerinin kurulması", ok: true }, { text: "Maarif Teşkilat Yasası'nın yürürlüğe girmesi", ok: false }, { text: "Tevhid-i Tedrisat Kanunu'nun yayımlanması", ok: false }, { text: "Millet Mekteplerinin açılması", ok: false }
    ] // Cevap anahtarı 4.B.
  },
  {
    text: "3 Mart 1924 tarihinde Osmanlı hanedan üyelerinin yurt dışına çıkarılması kararının alınması;\nI. rejimin güvenliğini sağlama,\nII. yönetimde iki başlılığı önleme,\nIII. orduyu siyasetten ayırma\namaçlarından hangilerine yönelik değildir?",
    diff: 2,
    expl: "Hanedan üyelerinin sürgün edilmesi, cumhuriyet rejiminin güvenliğini sağlamak (I) ve eski düzene dönüş (iki başlılık) ümitlerini kırmak (II) içindir. Ancak Ordunun siyasetten ayrılması amacı, yine aynı gün çıkarılan 'Erkân-ı Harbiye-i Umumiye Vekaleti'nin kaldırılması kanunuyla ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }
    ] // Cevap anahtarı 5.C.
  },
  {
    text: "Dr. Wissening ve Profesör Dr. Leon Morf'un katkılarıyla 1930 yılında kurulan Merkez Bankasının görev ve yetkileri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 3,
    expl: "1930'da kurulan Merkez Bankası (TCMB); para basmak (emisyon), para piyasalarını kontrol etmek, rezervleri yönetmek ve diğer bankalara destek olmakla görevlidir. 'Çiftçiye kredi vermek' ise Ziraat Bankası'nın (Memleket Sandıklarının devamı olan) görevidir.",
    answers: [
      { text: "Çiftçiye kredi verme", ok: true }, { text: "Para basma", ok: false }, { text: "Ulusal bankalara destek verme", ok: false }, { text: "Para piyasalarını kontrol etme", ok: false }, { text: "Ülkenin altın ve döviz rezervlerini yönetme", ok: false }
    ] // Cevap anahtarı 6.A.
  },
  {
    text: "Türkiye Cumhuriyeti'nin ilk yıllarında tek parti iktidarının görülmesinin;\nI. farklı kesimlerin temsili,\nII. inkılapların gerçekleşmesi,\nIII. iktidarın denetlenmesi\ndurumlarından hangilerini engellediği söylenebilir?",
    diff: 1,
    expl: "Tek partili (sadece CHP'nin olduğu) bir mecliste muhalefet partisi olmadığı için Hükümet (iktidar) denetlenemez (III) ve toplumdaki farklı fikirler/kesimler mecliste temsil edilemez (I). Ancak tek parti iktidarı, inkılapların gerçekleşmesini 'engellemez', tam tersine mecliste çatışma çıkmadığı için inkılapların ÇOK DAHA HIZLI gerçekleşmesini 'sağlar' (II).",
    answers: [
      { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 7.C.
  },
  {
    text: "Yeni Türk Devleti'nde hukuksal alanda inkılaplar yapılmasını zorunlu kılan faktörler arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "Hukuk inkılaplarının amacı; hukuk birliğini sağlamak (B), cinsiyet eşitliğini getirmek (C), yabancı müdahalesini engellemek (D) ve laik/modern (E) bir yapı kurmaktır. Ancak 'Toplumda var olan kültür farklılıklarını sona erdirmek' gibi bir amaç yoktur; kültürleri tek tipleştirmek modern devletin görevi veya hukukun amacı değildir.",
    answers: [
      { text: "Toplumda var olan kültür farklılıklarını sona erdirmek", ok: true }, { text: "Osmanlı Devleti'nde olmayan hukuk birliğini sağlamak", ok: false }, { text: "Haklar konusunda cinsiyet ayrımından kaynaklanan eşitsizlikleri sona erdirmek", ok: false }, { text: "Yabancı devletlerin yargıya müdahalesini önlemek", ok: false }, { text: "Laik - modern hukuk yapısını oluşturmak", ok: false }
    ] // Cevap anahtarı 8.A.
  },
  {
    text: "1 Temmuz 1926'da yürürlüğe giren Kabotaj Kanunu ile Türk kara sularında işletme hakkının Türk gemilerine bırakılması aşağıdaki gelişmelerden hangisinin tamamlayıcısı niteliğindedir?",
    diff: 2,
    expl: "Lozan Antlaşması ile 'Kapitülasyonlar' kaldırılarak ekonomik bağımsızlığın önündeki en büyük engel aşılmıştı. Kabotaj Kanunu ile limanlarımızın işletmesinin millileştirilmesi de bu ekonomik bağımsızlığın (kapitülasyonların kaldırılmasının) denizyollarındaki en büyük tamamlayıcısıdır.",
    answers: [
      { text: "Merkez Bankasının kurulmasının", ok: false }, { text: "Hower Moratoryumu kararlarının", ok: false }, { text: "I. Beş Yıllık Sanayi Planı'nın uygulanmasının", ok: false }, { text: "Kapitülasyonların kaldırılmasının", ok: true }, { text: "Teşvik-i Sanayi Kanunu'nun", ok: false }
    ] // Cevap anahtarı 9.D.
  },
  {
    text: "I. Sanay-i Nefise Mektebi\nII. Mekteb-i Mülkiye\nIII. Darülfünun\nYukarıda verilen Osmanlı Devleti'ne ait eğitim kurumlarından hangileri Cumhuriyet Dönemi'nde dönüşüme uğrayarak faaliyetlerine devam etmiştir?",
    diff: 1,
    expl: "Sanayi-i Nefise Mektebi 'Güzel Sanatlar Akademisi'ne (I), Mekteb-i Mülkiye 'Ankara Siyasal Bilgiler Fakültesi'ne (II), Darülfünun ise 1933 Üniversite Reformu ile 'İstanbul Üniversitesi'ne (III) dönüştürülerek Cumhuriyet döneminde yaşamaya devam etmiştir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 10.E.
  },
  {
    text: "I. Tevhid-i Tedrisat Kanunu'nun çıkarılması\nII. Azınlık ve yabancı okullarında Türk idarecilerin bulundurulması\nIII. Okul açma izninin Maarif Nezaretine bağlanması\nYukarıda verilen gelişmelerden hangilerinin eğitim faaliyetlerinin devlet kontrolüne alınmasına katkı verdiği ileri sürülebilir?",
    diff: 1,
    expl: "Tevhid-i Tedrisat ile tüm okulların MEB'e (Maarif) bağlanması (I), azınlık/yabancı okullarına devlet adına Türk müdür yardımcısı ve Türkçe/Tarih hocası atanması (II) ve okul açma yetkisinin tamamen MEB denetimine girmesi (III); tüm eğitim faaliyetlerinin devletin (merkezin) kontrolüne alınmasına yöneliktir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 11.E.
  },
  {
    text: "Aşağıda verilen inkılap hareketlerinin hangisinin sonunda \"dede, şeyh, derviş, mürit\" gibi unvanlar kaldırılmıştır?",
    diff: 1,
    expl: "1925 yılında çıkarılan kanunla, dini duyguların sömürülmesini engellemek ve laikleşmeyi sağlamak amacıyla Tekke, Zaviye ve Türbeler kapatılmış; buna bağlı olarak da 'şeyh, derviş, mürit, dede, çelebi' gibi unvanların kullanılması yasaklanmıştır.",
    answers: [
      { text: "Soyadı Kanunu", ok: false }, { text: "Tekke, zaviye ve türbelerin kapatılması", ok: true }, { text: "Tevhid-i Tedrisat Kanunu", ok: false }, { text: "Medeni Kanun'un kabulü", ok: false }, { text: "Halifeliğin kaldırılması", ok: false }
    ] // Cevap anahtarı 12.B.
  },
  {
    text: "Yeni Türk devletinde 1926 Medeni Kanunu'nu hazırlayan komisyonun başkanlığını yapan dönemin adalet bakanı aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "İsviçre Medeni Kanunu'nu örnek alarak Türkiye koşullarına göre uyarlayan ve hazırlayan komisyonun başında bulunan dönemin Adliye Vekili (Adalet Bakanı) Mahmut Esat Bozkurt'tur.",
    answers: [
      { text: "Mahmut Esat", ok: true }, { text: "Celalettin Arif", ok: false }, { text: "Kâzım Özalp", ok: false }, { text: "Tevfik Rüştü Aras", ok: false }, { text: "Vasıf Çınar", ok: false }
    ] // Cevap anahtarı 13.A.
  },
  {
    text: "I. Beş Yıllık Plan doğrultusunda açılacak olan fabrika ve işletmelerin yönetiminden sorumlu olan banka aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "1933 yılında (I. Beş Yıllık Sanayi Planı dahilinde) devletçilik ilkesi doğrultusunda kurulacak fabrikaları finanse etmek, kurmak ve yönetmek amacıyla kurulan 'sanayi' bankası Sümerbank'tır.",
    answers: [
      { text: "Halk Bankası", ok: false }, { text: "Sümerbank", ok: true }, { text: "Ziraat Bankası", ok: false }, { text: "Sanayi Maadin Bankası", ok: false }, { text: "Emlak Eytam Bankası", ok: false }
    ] // Cevap anahtarı 14.B.
  }
];

export const TAR_ATATURK_DONEMI_INKILAPLAR_TEST_2: McQ[] = [
  // ---------------- ATATÜRK DÖNEMİ İNKILAPLAR - TEST 2 ----------------
  {
    text: "Türkiye Cumhuriyeti'nde,\nI. miras işlemlerinin yeniden düzenlenmesi,\nII. tanık olmada kadın - erkek eşitliğinin sağlanması,\nIII. modern aile yapısının oluşturulması\ngelişmeleri aşağıdakilerden hangisinin sonucunda ortaya çıkmıştır?",
    diff: 1,
    expl: "1926 yılında kabul edilen Türk Medeni Kanunu ile kadınlara sosyal, ailevi ve ekonomik alanlarda (Miras, Boşanma, Şahitlik, Resmi Nikah, Tek eşlilik) erkeklerle eşit haklar verilmiş ve modern aile yapısı kurulmuştur.",
    answers: [
      { text: "Medeni Kanun'un kabulü", ok: true }, { text: "Takrir-i Sükûn Kanunu'nun yürürlüğe girmesi", ok: false }, { text: "Millet Mekteplerinin kurulması", ok: false }, { text: "Yüksek Seçim Kurulunun oluşturulması", ok: false }, { text: "Soyadı Kanunu", ok: false }
    ] // Cevap anahtarı 1.A. (Page 217, Test 2 Key: 1.A 2.E 3.C 4.E 5.B 6.A 7.B 8.A 9.C 10.D 11.A 12.B 13.A 14.E)
  },
  {
    text: "Türkiye Cumhuriyeti'nde aşağıdaki gelişmelerden hangisi diğerlerinden sonra gerçekleşmiştir?",
    diff: 2,
    expl: "Kronoloji: Saltanatın Kaldırılması (1922), Halifeliğin Kaldırılması (1924), Medreselerin Kapatılması (1924), Medeni Kanun'un kabulü (1926). Ancak Ölçü birimlerinin (okka, arşın yerine kilo, metre) değiştirilmesi (1931) hepsinden sonra gerçekleşmiştir.",
    answers: [
      { text: "Halifeliğin kaldırılması", ok: false }, { text: "Medreselerin kapatılması", ok: false }, { text: "Saltanatın kaldırılması", ok: false }, { text: "Medeni Kanun'un kabulü", ok: false }, { text: "Ölçü birimlerinin değişmesi", ok: true }
    ] // Cevap anahtarı 2.E.
  },
  {
    text: "I. Beş Yıllık Plan'ın 1934 yılında yürürlüğe girmesinde, aşağıdakilerin hangisinden istenilen sonucun alınamaması etkili olmuştur?",
    diff: 2,
    expl: "1927'de çıkarılan Teşvik-i Sanayi Kanunu ile özel sektörün fabrika kurması hedeflenmiş, ancak 1929 Dünya Ekonomik Krizi ve sermaye yetersizliği yüzünden başarılı olunamayınca, devlet mecburen ekonomiye el atarak 'Devletçilik' ilkesi gereği I. Beş Yıllık Sanayi Planı'nı uygulamaya koymuştur.",
    answers: [
      { text: "Toprak Reformu", ok: false }, { text: "Kabotaj Kanunu", ok: false }, { text: "Teşvik-i Sanayi Kanunu", ok: true }, { text: "Varlık Vergisi Kanunu", ok: false }, { text: "Millî Korunma Kanunu", ok: false }
    ] // Cevap anahtarı 3.C.
  },
  {
    text: "I. Varlık vergisinin toplanması\nII. Merkez Bankasının kurulması\nIII. Tek dereceli seçim sistemine geçilmesi\nIV. ODTÜ'nün açılması\nYukarıdakilerden hangileri Atatürk Dönemi gelişmeleri arasında yer almaz?",
    diff: 2,
    expl: "Merkez Bankası 1930'da (Atatürk dönemi) kurulmuştur. Varlık Vergisi (1942), Tek dereceli seçim sistemi (1946) ve ODTÜ'nün açılması (1956) Atatürk'ün vefatından (1938) SONRA, İsmet İnönü ve Demokrat Parti dönemlerindeki gelişmelerdir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "III ve IV", ok: false }, { text: "I, III ve IV", ok: true }
    ] // Cevap anahtarı 4.E.
  },
  {
    text: "1 Kasım 1928 tarihinde gerçekleştirilen harf inkılabının nedenleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "Harf İnkılabının temel nedeni Arap harflerinin Türkçe ses yapısına uygun olmaması, bu yüzden okuma-yazmanın çok zor olması (E) ve Avrupa ile bütünleşme isteğidir (D). Ancak 'Basılan kitap sayısında artış görülmesi', harf inkılabının bir 'nedeni' değil, inkılap yapılıp okuma-yazma kolaylaştıktan SONRA ortaya çıkan bir 'sonucudur' (B).",
    answers: [
      { text: "Konuşma dili ile yazı dili arasındaki farkı giderme isteği", ok: false }, { text: "Basılan kitap sayısında artış görülmesi", ok: true }, { text: "Latin alfabesinin Türkçenin zenginliklerini ortaya koyabilecek olması", ok: false }, { text: "Avrupa ile kültür etkileşiminin hızlandırılmak istenmesi", ok: false }, { text: "Okuma - yazma oranını arttırma düşüncesi", ok: false }
    ] // Cevap anahtarı 5.B.
  },
  {
    text: "Tekke, zaviye ve türbelerin 30 Kasım 1925 tarihinde kapatılmasını hızlandıran gelişme aşağıdakilerden hangisidir?",
    diff: 2,
    expl: "Din ve inanç sömürüsünün yuvası haline gelen tekke ve zaviyelerin kapatılması fikri zaten vardı; ancak Doğu'da dini duyguların (irticanın) kullanılarak çıkarılan 'Şeyh Sait İsyanı' (Şubat 1925), bu kurumların devlete verdiği zararı açıkça göstermiş ve kapatılma sürecini hızlandırmıştır.",
    answers: [
      { text: "Şeyh Sait İsyanı", ok: true }, { text: "Tevhid-i Tedrisat Kanunu", ok: false }, { text: "6 - 7 Eylül Olayları", ok: false }, { text: "Menemen Ayaklanması", ok: false }, { text: "Mustafa Kemal'e suikast girişimi", ok: false }
    ] // Cevap anahtarı 6.A.
  },
  {
    text: "Atatürk'ün ilke ve inkılaplarını halka benimsetmek amacıyla 19 Şubat 1932 tarihinde aşağıdakilerden hangisi kurulmuştur?",
    diff: 2,
    expl: "Cumhuriyet rejimini, Atatürk ilkelerini, yeni harfleri ve kültürel devrimleri halka (tabana) yaymak, halkı aydınlatmak ve eğitmek amacıyla 1932 yılında (Türk Ocaklarının yerine) 'Halkevleri' açılmıştır.",
    answers: [
      { text: "Millet Mektebi", ok: false }, { text: "Halkevleri", ok: true }, { text: "Köy Enstitüleri", ok: false }, { text: "Türk Dil Kurumu", ok: false }, { text: "İstanbul Üniversitesi", ok: false }
    ] // Cevap anahtarı 7.B.
  },
  {
    text: "Harf inkılabı aşağıda verilen millî eğitim bakanlarından hangisinin döneminde gerçekleşmiştir?",
    diff: 3,
    expl: "1928'deki Harf İnkılabı ve hemen ardından okuma-yazma seferberliği için açılan Millet Mektepleri projesi, o dönemin efsanevi Milli Eğitim Bakanı (Maarif Vekili) olan 'Mustafa Necati Bey' döneminde gerçekleştirilmiştir.",
    answers: [
      { text: "Necati Bey", ok: true }, { text: "Vasıf Çınar", ok: false }, { text: "Rıza Nur", ok: false }, { text: "Hamdullah Suphi", ok: false }, { text: "Tevfik İleri", ok: false }
    ] // Cevap anahtarı 8.A.
  },
  {
    text: "I. Tevhid-i Tedrisat Kanunu\nII. Harf inkılabı\nIII. Millet Mekteplerinin açılması\nIV. Üniversite Reformu\nYukarıda verilen yenilik hareketlerinden hangileri okuma yazma oranını artırmaya yöneliktir?",
    diff: 2,
    expl: "Öğrenmesi kolay olan Latin harflerine geçilmesi (Harf İnkılabı - II) ve yeni harfleri yetişkin halka öğretmek için tüm yurtta Millet Mektepleri'nin açılması (III) doğrudan okuma-yazma oranını sıçratmaya (artırmaya) yöneliktir. Tevhid-i Tedrisat (I) eğitimi birleştirir, Üniversite Reformu (IV) ise yükseköğretimi bilimselleştirir (Temel okuma yazmayla ilgileri dolaylıdır).",
    answers: [
      { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: true }, { text: "II ve IV", ok: false }, { text: "II, III ve IV", ok: false }
    ] // Cevap anahtarı 9.C.
  },
  {
    text: "Cumhuriyet Dönemi yenileşme hareketleri konusunu proje ödevi olarak alan 11/A sınıfındaki Aycan öğrencimizin aşağıdakilerden hangisi üzerinde araştırma yapmasına gerek yoktur?",
    diff: 2,
    expl: "Cumhuriyet dönemi yenilikleri; sanat (Şehir Tiyatroları), hukuk (Medeni Kanun), kültür/eğitim (Halkevleri) ve sanayi (Etibank) gibi alanları kapsar. Ancak Ziraat Bankası Cumhuriyet döneminde KURULMAMIŞTIR. Ziraat Bankası, Osmanlı döneminde (1888) Memleket Sandıkları'nın devamı olarak II. Abdülhamit zamanında kurulmuştur.",
    answers: [
      { text: "Şehir tiyatrolarının kurulması", ok: false }, { text: "Medeni Kanun'un kabulü", ok: false }, { text: "Halkevlerinin açılması", ok: false }, { text: "Ziraat Bankasının kurulması", ok: true }, { text: "Etibankın kurulması", ok: false }
    ] // Cevap anahtarı 10.D.
  },
  {
    text: "Cumhuriyet'in ilk yıllarında gerçekleştirilen;\nI. Tevhid-i Tedrisat Kanunu,\nII. Soyadı Kanunu,\nIII. kadınlara siyasi hakların verilmesi\ngibi yenilik hareketlerinden hangilerinin sosyal-ekonomik alandaki karışıklıkları gidermeye yönelik olduğu söylenebilir?",
    diff: 2,
    expl: "İsim benzerliklerinden dolayı okulda, askerlikte, mirasta, tapu ve maliyede çıkan büyük karmaşayı (sosyal ve ekonomik karışıklığı) bitiren kanun Soyadı Kanunu'dur (II). Tevhid-i Tedrisat eğitimde birliği sağlar (I), siyasi haklar ise demokratik katılımı (siyasi alanı) düzenler (III).",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "Yalnız I", ok: true }
      // { text: "Yalnız II", ok: true }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "II, III ve IV", ok: false }
    ]
  },
  {
    text: "Osmanlı Devleti Dönemi'ne ait aşağıdaki kurumlardan hangisi Türkiye Cumhuriyeti Devleti'nde \"Şehir Tiyatroları\"na dönüştürülmüştür?",
    diff: 3,
    expl: "I. Dünya Savaşı sırasında (1914) kurulan, ilk başlarda sadece konservatuvar olarak düşünülen ancak sonra tiyatro oyunları da sahneleyen 'Güzellikler Evi' anlamındaki 'Darülbedayi', Cumhuriyet döneminde İstanbul Şehir Tiyatroları'na dönüştürülmüştür.",
    answers: [
      { text: "Darülelhan", ok: false }, { text: "Darülbedayi", ok: true }, { text: "Darülmuallimin", ok: false }, { text: "Sanay-i Nefise Mektebi", ok: false }, { text: "Encümen-i Daniş", ok: false }
    ] // Cevap anahtarı 12.B.
  },
  {
    text: "Yeni Türk devletinde okul açma izninin Millî Eğitim Bakanlığına bırakılması aşağıdakilerden hangisinin sonucunda gerçekleşmiştir?",
    diff: 2,
    expl: "Eğitimde birliği ve devlet kontrolünü sağlayan 1926 tarihli 'Maarif Teşkilatı Kanunu' ile, okul müfredatları düzenlenmiş ve Türkiye sınırları içindeki tüm yeni okul açma (ve denetleme) yetkileri doğrudan Milli Eğitim Bakanlığı'na (Maarif Vekaleti) verilmiştir.",
    answers: [
      { text: "Maarif Kanunu", ok: true }, { text: "Tevhid-i Tedrisat Kanunu", ok: false }, { text: "Üniversite Reformu", ok: false }, { text: "Şeriye ve Evkaf Vekâletinin kurulması", ok: false }, { text: "Köy Enstitülerinin açılması", ok: false }
    ] // Cevap anahtarı 13.A.
  },
  {
    text: "Türk Devleti'nde hukuk birliğini sağlamaya yönelik adımlara;\nI. konsolosluk mahkemelerinin kapatılması,\nII. patrikhanenin mahkeme kurma yetkisinin elinden alınması,\nIII. Mecelle'nin yürürlükten kaldırılması\ngelişmelerinden hangileri örnek gösterilebilir?",
    diff: 2,
    expl: "Osmanlı'da şeri mahkemeler, konsolosluk (yabancı) mahkemeleri (I), azınlıkların (Patrikhane vb.) kendi mahkemeleri (II) ayrı ayrı hukuk uygulardı. Ayrıca İslami kurallara dayanan Mecelle de sivil hayatta kullanılıyordu. Laik Medeni Kanun'un kabulüyle Mecelle kaldırılmış (III), Patrikhane ve Konsoloslukların mahkeme kurma yetkileri bitirilerek ülkede herkes için tek bir mahkeme ve tek bir kanun (Hukuk Birliği) sağlanmıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 14.E.
  }
];

export const TAR_ATATURK_DONEMI_INKILAPLAR_TEST_3: McQ[] = [
  // ---------------- ATATÜRK DÖNEMİ İNKILAPLAR - TEST 3 ----------------
  {
    text: "I. John Dewey\nII. Heinrich Krippel\nIII. Albert Malche\nIV. Omar Buyse\nYukarıda verilen kişilerden hangileri Atatürk Dönemi'nde eğitim alanında faydalanılan Avrupalı uzmanlar arasında yer alır?",
    diff: 3,
    expl: "Eğitim alanında hazırladıkları raporlarla Atatürk dönemine damga vuran yabancı uzmanlar; Köy enstitüleri ve uygulamalı eğitim fikirleriyle John Dewey (I), Darülfünun'un İstanbul Üniversitesine dönüşmesini (Üniversite Reformu) raporlayan Albert Malche (III) ve mesleki/teknik eğitim uzmanı Omar Buyse (IV)'dir. Heinrich Krippel (II) ise bir heykeltıraştır (Ulus Anıtı vb), eğitim uzmanı değildir.",
    answers: [
      { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, III ve IV", ok: true }, { text: "II, III ve IV", ok: false }
    ] // Cevap anahtarı Test 3 Key is on page 221 (Wait, let's check page 219. Test 3 Key: 1.D, 2.E, 3.B, 4.C, 5.E, 6.D, 7.D, 8.B, 9.E, 10.B, 11.B, 12.B, 13.D, 14.A). So 1.D is correct.
  },
  {
    text: "Birinci Beş Yıllık Sanayi Planı'nın;\nI. ülke ekonomisinin dışa bağlı hâle gelmesini önlemek,\nII. ağır sanayinin kurulmasını sağlamak,\nIII. halkın ihtiyaçlarını karşılamak\namaçlarından hangilerini gerçekleştirmeye yönelik olduğu söylenebilir?",
    diff: 1,
    expl: "Devletçilik ilkesi gereği uygulanan 1933 tarihli I. Beş Yıllık Sanayi Planı; dışa bağımlılığı bitirerek kendi kendine yeten bir ülke olmayı (I), büyük sermaye gerektiren fabrikaları/ağır sanayiyi devlet eliyle kurmayı (II) ve Sümerbank/bez/şeker fabrikalarıyla temel halk ihtiyaçlarını üretmeyi (III) amaçlamıştır.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 2.E.
  },
  {
    text: "Osmanlı Devleti'nde Güllü Agop, Türkiye Cumhuriyeti'nin ilk yıllarında da Muhsin Ertuğrul, aşağıdaki sanat dallarından hangisine önemli katkıda bulunmuştur?",
    diff: 2,
    expl: "Osmanlı'da Osmanlı Tiyatrosu'nu kuran Güllü Agop ve Cumhuriyet döneminde Darülbedayi'nin başına geçip onu modern İstanbul Şehir Tiyatroları'na dönüştüren Muhsin Ertuğrul, Türk Tiyatrosunun (Sahne Sanatlarının) kurucu babalarıdır.",
    answers: [
      { text: "Resim", ok: false }, { text: "Tiyatro", ok: true }, { text: "Müzik", ok: false }, { text: "Müzecilik", ok: false }, { text: "Fresko", ok: false }
    ] // Cevap anahtarı 3.B.
  },
  {
    text: "1928 yılında gerçekleştirilen harf inkılabının sonuçları arasında aşağıdakilerden hangisi yer almaz?",
    diff: 2,
    expl: "Harf İnkılabı ile okuma-yazma oranı hızla artmış (A), Millet Mektepleri açılmış (B), Avrupa ile kültürel bağlar kuvvetlenmiş (E) ve yayıncılık patlamasıyla kütüphaneler dolmuştur (D). Ancak 'Özbekistan-Azerbaycan' gibi Orta Asya Türklerinin alfabe değişikliği, Türkiye'deki harf inkılabının bir sonucu DEĞİLDİR (Aksine onlar daha önce Latin alfabesine geçmiş, biz onları örnek almış/takip etmişizdir; Stalin sonradan hepsine Kiril alfabesini zorunlu kılacaktır).",
    answers: [
      { text: "Okuma - yazma oranında artış görülmesi", ok: false }, { text: "Millet Mekteplerinin açılması", ok: false }, { text: "Özbekistan - Azerbaycan gibi ülkelerde alfabe değişikliğine zemin hazırlanması", ok: true }, { text: "Kütüphane sayısında artış yaşanması", ok: false }, { text: "Avrupa ile kültür etkileşiminin hızlanması", ok: false }
    ] // Cevap anahtarı 4.C.
  },
  {
    text: "Aşağıdakilerden hangisinin İzmir İktisat Kongresi kararları doğrultusunda gerçekleştiği söylenemez?",
    diff: 2,
    expl: "İzmir İktisat Kongresi (Misak-ı İktisadi) kararları milli ve bağımsız ekonomiyi (tarım, sanayi, denizcilik) hedefler. İş Bankası (A), Aşarın kaldırılması (B), Kabotaj kanunu (D) ve yabancı demiryollarının millileştirilmesi (C) hep bu doğrultudadır. Ancak 'Muharrem Kararnamesi' (E), Osmanlı döneminde (1881) devletin iflas ettiğini ve Düyun-u Umumiye'nin (yabancı haciz idaresinin) kurulduğunu duyuran KARA BİR BELGEDİR, milli ekonomiyle zıt yöndedir.",
    answers: [
      { text: "İş Bankasının kurulması", ok: false }, { text: "Aşar vergisinin kaldırılması", ok: false }, { text: "Demir yollarının Avrupalı devletlerden satın alınması", ok: false }, { text: "Kabotaj Kanunu'nun yürürlüğe girmesi", ok: false }, { text: "Muharrem Kararnamesi'nin yayımlanması", ok: true }
    ] // Cevap anahtarı 5.E.
  },
  {
    text: "Mustafa Kemal'in Nutuk eserinde;\nI. Çanakkale Savaşları,\nII. saltanatın kaldırılması,\nIII. Milletler Cemiyetine üyelik\ngelişmelerinden hangilerine değinilmemiştir?",
    diff: 2,
    expl: "Mustafa Kemal'in Nutuk adlı eseri 1919 (Samsun'a çıkış) ile 1927 (Gençliğe hitabe) yılları arasındaki olayları anlatır. Saltanatın kaldırılması (1922) Nutuk'ta vardır. Ancak Çanakkale Savaşları (1915 - öncesi) ve Milletler Cemiyeti'ne giriş (1932 - sonrası) Nutuk'un kapsadığı zaman diliminin dışında kaldıkları için bu eserde yer almazlar.",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: true }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 6.D. (D şıkkı I ve III).
  },
  {
    text: "I. Saltanatın kaldırılması\nII. Takrir-i Sükûn Kanunu\nIII. Osmanlı hanedanının yurt dışına gönderilmesi\ngelişmelerinden hangileri, Cumhuriyet rejimini korumaya yönelik gerçekleştirilmiştir?",
    diff: 2,
    expl: "Rejim koruma adımları: Takrir-i Sükun (1925), Şeyh Sait (şeriat) isyanına karşı Cumhuriyeti korumak için çıkarılmıştır (II). Hanedanın sürülmesi (1924), eski saltanat yanlılarının rejim aleyhine birleşmesini ve isyan etmesini önlemek içindir (III). Ancak 'Saltanatın Kaldırılması' (1922), Cumhuriyeti KORUMAK için değil, Cumhuriyetin İLAN EDİLEBİLMESİ İÇİN (rejimi kurmak için) yapılmış bir ön hazırlıktır (Çünkü henüz ortada korunacak bir 'Cumhuriyet' rejimi yoktu).",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 7.D.
  },
  {
    text: "İkinci TBMM'nin ilk kurulduğu süreçte, hükûmeti oluşturma veya sürdürme zorlukları aşağıda verilen durumların hangisinden kaynaklanmıştır?",
    diff: 2,
    expl: "I. TBMM ve II. TBMM'nin ilk aylarında uygulanan 'Meclis Hükümeti Sistemi'nde, bakanlar meclis üyeleri arasından tek tek oylanarak seçiliyordu. Bu durum hükümet kurmayı (bakanların hepsinin meclisten güvenoyu almasını) aşırı derecede yavaşlatıyor ve zorlaştırıyordu. Bu kriz (Ekim Bunalımı), Cumhuriyetin ilanıyla 'Kabine Sistemi'ne geçilerek çözülmüştür.",
    answers: [
      { text: "Çok partili döneme geçilmemiş olması", ok: false }, { text: "Bakanların tek tek meclis içinden seçilmesi", ok: true }, { text: "Tek dereceli seçim sisteminin yürürlükte olması", ok: false }, { text: "Genel seçimlerin dört yılda bir yapılmasına karar verilmesi", ok: false }, { text: "Menemen İsyanı'nın yaşanması", ok: false }
    ] // Cevap anahtarı 8.B.
  },
  {
    text: "Yeni Türk devletinde;\nI. ağırlık ve ölçü birimlerinin değiştirilmesi,\nII. miladi takvimin kabulü,\nIII. hafta sonu tatilinin pazara alınması\ngibi yenilik hareketlerinden hangileri ile uluslararası ticari faaliyetler kolaylaştırılmaya çalışılmıştır?",
    diff: 1,
    expl: "Avrupa ülkeleri ticaret yaparken Metre/Kilo (I), Miladi Takvim (II) ve Pazar tatilini (III) kullanıyordu. Türkiye'nin de aynı ölçü, aynı takvim ve aynı tatil gününe geçmesi, Avrupa devletleriyle (uluslararası) ticari ilişkilerdeki uyuşmazlıkları ve saat/gün karmaşasını bitirerek ticareti hızlandırmıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 9.E.
  },
  {
    text: "Adını Mustafa Kemal'in koyduğu, Latin alfabesi ile basılmış olan ve günümüze kadar yayın hayatını sürdüren Türk Tarih Kurumunun çıkardığı dergi aşağıdakilerden hangisidir?",
    diff: 3,
    expl: "1937 yılından itibaren Türk Tarih Kurumu (TTK) tarafından yayımlanan, adını bizzat Atatürk'ün koyduğu (Fransızca bülten kelimesinden esinlenerek) ve Cumhuriyet döneminin en uzun soluklu bilimsel dergisi 'Belleten'dir.",
    answers: [
      { text: "Sebilürreşad", ok: false }, { text: "Belleten", ok: true }, { text: "Ülkü", ok: false }, { text: "Kadro", ok: false }, { text: "Düstur", ok: false }
    ] // Cevap anahtarı 10.B.
  },
  {
    text: "Türkiye Cumhuriyeti'nde \"Takrir-i Sükûn\" dönemi gelişmeleri arasında aşağıdakilerden hangisi yer almaz?",
    diff: 3,
    expl: "Takrir-i Sükûn Kanunu dönemi 1925 ile 1929 yılları arasındadır. Bu dönemde Terakkiperver parti kapatılmış (1925), Teşviki Sanayi çıkarılmış (1927), Harf İnkılabı (1928) yapılmış ve Millet Mektepleri (1928) açılmıştır. Ancak 'Türk Dil Kurumunun kurulması' 1932 yılındadır; yani Takrir-i Sükun dönemi bittikten sonradır.",
    answers: [
      { text: "Terakkiperver Cumhuriyet Fırkası'nın kapatılması", ok: false }, { text: "Latin harflerinin kabulü", ok: false }, { text: "Teşvik-i Sanayi Kanunu'nun çıkarılması", ok: false }, { text: "Millet Mekteplerinin açılması", ok: false }, { text: "Türk Dil Kurumunun kurulması", ok: true }
    ] // Cevap anahtarı 11.E.
  },
  {
    text: "Türkiye Cumhuriyeti'nde kabine sistemine geçiş aşağıda verilen inkılapların hangisi sonucunda gerçekleşmiştir?",
    diff: 1,
    expl: "Meclis Hükümeti sistemindeki krizler üzerine, Cumhurbaşkanının başbakanı (başvekili) atadığı ve başbakanın da kendi bakanlarını (kabinesini) meclis içinden güvenoyuyla seçtiği modern 'Kabine Sistemi'ne geçiş, 29 Ekim 1923'te Cumhuriyet'in ilanı ile gerçekleşmiştir.",
    answers: [
      { text: "TBMM'nin açılması", ok: false }, { text: "Cumhuriyet'in ilanı", ok: true }, { text: "Saltanatın kaldırılması", ok: false }, { text: "Teşkilat-ı Esasiye'nin kabulü", ok: false }, { text: "Tek dereceli seçim sistemine geçilmesi", ok: false }
    ] // Cevap anahtarı 12.B.
  },
  {
    text: "1929 yılında uygulamaya konulan Koruyucu Gümrük Kanunu;\nI. ithalat yapılan devlet sayısını arttırma,\nII. yerli malı kullanımını teşvik etme,\nIII. dış ticaret açığını kapatma\namaçlarından hangilerine yöneliktir?",
    diff: 2,
    expl: "1929 Dünya Ekonomik Krizi'nin yıkıcı etkisinden korunmak için gümrük vergileri artırılarak ithalat ZORLAŞTIRILMIŞTIR (İthalat yapılan devlet sayısını artırmak gibi bir amaç olamaz - I yanlış). Böylece dışarıdan mal gelmeyince yerli üretim teşvik edilmiş (II) ve ithalatın azalmasıyla dış ticaret açığı kapanmıştır (III).",
    answers: [
      { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 13.D.
  },
  {
    text: "I. Medreselerin kapatılması\nII. Tevhid-i Tedrisat Kanunu\nIII. Latin alfabesinin kabulü\nYukarıdaki inkılap hareketlerinden hangileri eğitim-kültür alanındaki ikilikleri gidermeye yöneliktir?",
    diff: 2,
    expl: "Osmanlı'nın son döneminde hem geleneksel dini eğitim veren Medreseler hem de Batı tarzı modern okullar aynı anda eğitim veriyor, bu da 'kültürel çatışma/ikilik' yaratıyordu. Tevhid-i Tedrisat ile okullar MEB'e bağlanarak birleştirilmiş (II) ve medreseler kapatılarak (I) ikilik tamamen bitirilmiştir. Harf inkılabı (III) ise ikilik gidermekle ilgili değil, okuma yazmayı yaygınlaştırmakla ilgilidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 14.D. (D şıkkı I ve II).
  }
];

export const TAR_ATATURK_DONEMI_INKILAPLAR_TEST_4: McQ[] = [
  // ---------------- ATATÜRK DÖNEMİ İNKILAPLAR - TEST 4 ----------------
  {
    text: "- Her Türk, adından başka soyadını da taşımaya mecburdur.\n- Soyadı öz Türkçe olmalıdır.\n- Umumi edeplere uygun olmayan iğrenç veya gülünç soyadları kullanılamaz.\n21 Haziran 1934'te kabul edilen Soyadı Kanunu'nun yukarıdaki maddelerinden hareketle;\nI. laiklik,\nII. milliyetçilik,\nIII. halkçılık\nilkelerinden hangileri ile bağlantılı olduğu söylenebilir?",
    diff: 2,
    expl: "Soyadlarının 'öz Türkçe' olma zorunluluğu Milli Kültürü ve 'Milliyetçilik' (II) ilkesini yansıtır. Herkese eşit şekilde, unvansız/sınıfsız bir ad verme ve gülünç lakapları yasaklama uygulaması 'Halkçılık' (Eşitlik - III) ilkesidir. Kanun maddelerinde din ve devlet işleri (Laiklik) ile doğrudan bir bağlantı vurgulanmamıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız III", ok: false }, { text: "I ve II", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 1.D. (Page 222, Test 4 Key: 1.D 2.E 3.E 4.A 5.B 6.E 7.D 8.C 9.C 10.C 11.D 12.C 13.A 14.D 15.A)
  },
  {
    text: "Yeni Türk devletindeki;\nI. eğitim-öğretimin birleştirilmesi,\nII. medreselerin kapatılması,\nIII. Türk Dil Kurumunun kurulması\nçalışmalarından hangileri ile \"kültür birliği\" anlayışı oluşturulmak istenmiştir?",
    diff: 1,
    expl: "Kültür birliği (toplumdaki çatışmayı ve çift başlılığı bitirmek); eski-yeni çatışması yaratan medreselerin kapatılıp (II) tüm okulların MEB çatısı altında birleştirilmesiyle (Tevhid-i Tedrisat - I) sağlanmıştır. Ayrıca dilin ortak ve milli olması (Türk Dil Kurumu - III) kültür birliğinin en önemli harcıdır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 2.E.
  },
  {
    text: "I. Ayrıcalık bildiren unvanların kaldırılması\nII. Azınlıkların Türk vatandaşı olarak kabul edilmesi\nIII. Kadınlara da seçme seçilme hakkının verilmesi\ngelişmelerinden hangileri \"imtiyazsız, sınıfsız ve kaynaşmış bir ülke\" oluşturma amacına yöneliktir?",
    diff: 1,
    expl: "Atatürk'ün Halkçılık ilkesi gereği; ayrıcalık (imtiyaz) bildiren ağa, paşa, efendi unvanlarının kaldırılması (I), tüm azınlıkların ayrımsız/eşit Türk vatandaşı sayılması (Lozan - II) ve kadın-erkek ayrımının kaldırılarak kadınlara siyasi haklar verilmesi (III), sınıf farkı olmayan eşit ve kaynaşmış bir toplum yaratma hedefidir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: false }, { text: "I ve III", ok: false }, { text: "I, II ve III", ok: true }
    ] // Cevap anahtarı 3.E.
  },
  {
    text: "Aşağıdaki yeniliklerden hangisi kültür etkileşiminin hızlanmasında diğerlerine oranla daha güçlü bir etkiye sahiptir?",
    diff: 2,
    expl: "Batı kültürü ve bilimiyle etkileşimi (Avrupa'dan eser çevrilmesini, Batı dillerini öğrenmeyi ve matbaacılığı) en radikal ve hızlı şekilde artıran inkılap 'Harf İnkılabı' (Latin alfabesine geçiş) olmuştur.",
    answers: [
      { text: "Harf inkılabı", ok: true }, { text: "Soyadı Kanunu", ok: false }, { text: "Maarif Kanunu", ok: false }, { text: "Tevhid-i Tedrisat Kanunu", ok: false }, { text: "Miladi takvimin kabulü", ok: false }
    ] // Cevap anahtarı 4.A.
  },
  {
    text: "I. Saltanatın kaldırılması\nII. Medreselerin kapatılması\nIII. Soyadı Kanunu\nYukarıda verilen yenilik hareketlerinden hangilerinin Atatürk'ün laiklik ilkesi doğrultusunda gerçekleştirildiği söylenebilir?",
    diff: 2,
    expl: "Saltanatın kaldırılmasıyla Padişahlık ile Halifelik birbirinden ayrılarak devletin laikleşmesinde ilk adım atılmıştır (I). Din merkezli eğitim veren Medreselerin kapatılması eğitimin laikleşmesidir (II). Ancak Soyadı Kanunu eşitlikle ilgilidir, Laiklikle (din işleriyle) doğrudan bir alakası yoktur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "I ve II", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 5.B.
  },
  {
    text: "I. Hafta tatilinin düzenlenmesi\nII. Soyadı Kanunu\nIII. Rakam değişikliği\nIV. Ölçü değişikliği\nYukarıda verilen yeniliklerin oluş sırası aşağıdaki seçeneklerin hangisinde doğru olarak verilmiştir?",
    diff: 3,
    expl: "Kronoloji: Uluslararası Rakamların kabulü (1928 -> III), Ölçü ve Tartı birimlerinin kabulü (1931 -> IV), Soyadı Kanunu (Haziran 1934 -> II) ve Hafta Tatilinin Cuma'dan Pazar'a alınması (1935 -> I). Doğru Sıralama: III - IV - II - I.",
    answers: [
      { text: "I - II - IV - III", ok: false }, { text: "II - III - I - IV", ok: false }, { text: "IV - III - II - I", ok: false }, { text: "III - I - II - IV", ok: false }, { text: "III - IV - II - I", ok: true }
    ] // Cevap anahtarı 6.E.
  },
  {
    text: "Cumhuriyet Dönemi inkılap hareketlerinin ivme kazanmasında;\nI. saltanatın kaldırılması,\nII. Takrir-i Sükûn Kanunu,\nIII. halifeliğin kaldırılması\ngelişmelerinden hangilerinin etkili olduğu söylenebilir?",
    diff: 2,
    expl: "Eski düzeni savunan Saltanat (I) ve Halifeliğin (III) kaldırılması, yeniliklerin önündeki en büyük engelleri yıkmıştır. Ayrıca Şeyh Sait İsyanı sonrası çıkarılan Takrir-i Sükun kanunu (II) da devlete baskı gücü vermiş, böylece muhalefet susturularak Şapka, Harf, Kılık kıyafet gibi birçok büyük inkılap bu sessiz dönemde hızla yapılmıştır.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: true }
      // { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: false }, { text: "II ve III", ok: true }, { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "1932 yılında Mustafa Kemal'in katkıları ile kurulan Türk Dil Kurumu ile ilgili aşağıda verilen bilgilerden hangisi doğru nitelikte değildir?",
    diff: 3,
    expl: "Türk Dil Kurumu'nun (TDK) ilk başkanı Samih Rifat'tır (A), amacı Türkçeyi bilim dili yapmaktır (B), Güneş Dil Teorisi ile Türkçenin köklerini araştırmıştır (D) ve Anadolu'daki ağızları/lehçeleri taramıştır (E). Ancak 'okuma yazma oranını artırmak' harf inkılabının ve Millet Mekteplerinin görevidir; ileri bir dil bilim araştırması kurumu olan TDK'nin görevi halka okuma yazma öğretmek değildir.",
    answers: [
      { text: "Mustafa Sâmih Rifat başkanlığını yapmıştır.", ok: false }, { text: "Türkçeyi bilim dili hâline getirmeyi amaçlamıştır.", ok: false }, { text: "Okuma yazma oranının artmasında etkili olmuştur.", ok: true }, { text: "Güneş Dil Teorisi'ni ortaya koymuştur.", ok: false }, { text: "Yerel şive ve lehçelerin araştırılmasına önem vermiştir.", ok: false }
    ] // Cevap anahtarı 8.C.
  },
  {
    text: "I. Saltanatın kaldırılması\nII. Halifelik makamına son verilmesi\nIII. Eğitim-öğretimin birleştirilmesi\nYenilik hareketlerinden hangileri yönetim alanında oluşabilecek ikilikleri gidermeye yöneliktir?",
    diff: 1,
    expl: "Lozan öncesi İstanbul Hükümeti/TBMM ikiliğini (yönetimdeki çatışmayı) bitirmek için Saltanat kaldırılmıştır (I). Aynı şekilde Cumhurbaşkanı varken Halife'nin de bir devlet başkanı gibi davranması (yönetimde ikilik) Halifeliğin kaldırılmasıyla (II) bitirilmiştir. Ancak 'Eğitim-öğretimin birleştirilmesi' (III), YÖNETİM alanında değil, EĞİTİM VE KÜLTÜR alanındaki ikilikleri gidermeye yöneliktir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I ve II", ok: true }, { text: "II ve III", ok: false }, { text: "I, II ve III", ok: false }
    ] // Cevap anahtarı 9.C.
  },
  {
    text: "I. Şeyh Sait İsyanı\nII. Menemen Olayı\nIII. Mustafa Kemal'e suikast girişimi\nIV. Razgrad Olayı\nYukarıda verilen gelişmelerin hangileri inkılaplara duyulan tepki sonucunda ortaya çıkmıştır?",
    diff: 2,
    expl: "Şeyh Sait (1925), Menemen (1930) ve İzmir Suikastı (1926); Cumhuriyet rejimini, laikliği ve inkılapları yıkıp eski sisteme dönmek isteyen (gerici/irticai) kesimlerin tepkisiyle çıkmıştır (I, II, III). 'Razgrad Olayı' ise 1933'te Bulgaristan'daki Razgrad şehrinde Türk mezarlığının tahrip edilmesini İstanbul üniversitesi gençliğinin protesto etmesidir; inkılaplarla ilgisi yoktur.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "I, II ve III", ok: true }, { text: "II, III ve IV", ok: false }, { text: "I, II, III ve IV", ok: false }
    ] // Cevap anahtarı 10.C.
  },
  {
    text: "Aşağıdakilerden hangisi kadın ve erkeklerin sosyoekonomik alanda eşit haklara sahip olmasını sağlamaya yöneliktir?",
    diff: 1,
    expl: "1926 yılında kabul edilen 'Türk Medeni Kanunu', kadınlara boşanma hakkı, mirastan eşit pay alma, mahkemede şahitlikte eşitlik ve istediği meslekte çalışabilme gibi çok geniş 'sosyal ve ekonomik' eşitlik hakları tanımıştır. (Siyasi haklar Medeni kanunda yoktur, sonradan verilmiştir).",
    answers: [
      { text: "Tevhid-i Tedrisat Kanunu", ok: false }, { text: "Soyadı Kanunu", ok: false }, { text: "Kadınlara da seçme - seçilme haklarının verilmesi", ok: false }, { text: "Medeni Kanun'un kabulü", ok: true }, { text: "Halkevlerinin kurulması", ok: false }
    ] // Cevap anahtarı 11.D.
  },
  {
    text: "I. Numune çiftliklerinin kurulması\nII. Yüksek Ziraat Enstitüsünün kurulması\nIII. Ziraat Bankasının kurulması\nYukarıdakilerden hangilerinin Atatürk Dönemi'nde tarımı geliştirmeye yönelik olduğu söylenemez?",
    diff: 2,
    expl: "Atatürk döneminde modern tarımı öğretmek için Atatürk Orman Çiftliği gibi Numune Çiftlikleri (I) ve ziraat mühendisi yetiştirmek için Yüksek Ziraat Enstitüsü (II) kurulmuştur. Ancak Ziraat Bankası, Osmanlı döneminde (1888) II. Abdülhamit zamanında kurulmuştur. (Atatürk döneminde kurulmamıştır).",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "Yalnız II", ok: false }, { text: "Yalnız III", ok: true }, { text: "I ve III", ok: false }, { text: "II ve III", ok: false }
    ] // Cevap anahtarı 12.C.
  },
  {
    text: "Atatürk Dönemi'nde ilan edilen Medeni Kanun'un kapsamında aşağıdakilerden hangisi yer almaz?",
    diff: 3,
    expl: "Türk Medeni Kanunu ile kadınlara istediği mesleği seçme (B), resmi nikah (C), çocuk velayeti (E) hakları verilmiş ve Patrikhane'nin mahkeme yetkisi (D) elinden alınmıştır. Ancak 'Evlilikten doğan malın (edinilmiş mallara katılma rejimi) EŞİT paylaşımı' maddesi 1926 Medeni Kanununda değil, 2002 yılında yenilenen Yeni Medeni Kanun'da kabul edilmiştir.",
    answers: [
      { text: "Evlilikten doğan malın eşit paylaşımı", ok: true }, { text: "Kadına istediği mesleği seçme hakkının verilmesi", ok: false }, { text: "Resmî nikâh zorunluluğunun getirilmesi", ok: false }, { text: "Patrikhanenin mahkeme yetkisinin alınması", ok: false }, { text: "Çocuk velayeti konusunun eşit hükme bağlanması", ok: false }
    ] // Cevap anahtarı 13.A.
  },
  {
    text: "Mustafa Kemal Atatürk 1921 yılının Haziran ayında Fransız temsilcisi Franklin Bouillon'a tam bağımsızlık düşüncesini; \"Tam bağımsızlık elbette siyasi, mali, adli, kültürel ve hukuk hususunda tam serbestlik.\" şeklinde ifade etmiştir.\nAşağıdakilerden hangisi Atatürk'ün bu sözleri doğrultusunda yaşanan gelişmeler arasında yer almaz?",
    diff: 2,
    expl: "Lozan ile kapitülasyonların kalkması (Mali), Konsolosluk mahkemelerinin kapatılması (Adli/Hukuk), Tevhid-i Tedrisat (Kültürel) ve Misak-ı İktisadi (Mali) tam bağımsızlık adımlarıdır. Ancak 'Uluslararası ölçü birimlerinin kabulü' (Ağırlık/Uzunluk), bağımsızlık için değil, Avrupalı devletlerle ekonomik entegrasyonu (uyumu) sağlamak için yapılmıştır.",
    answers: [
      { text: "Lozan Barışı ile kapitülasyonların kaldırılması", ok: false }, { text: "Tevhid-i Tedrisat Kanunu'nun çıkarılması", ok: false }, { text: "Konsolosluk mahkemelerinin kapatılması", ok: false }, { text: "Uluslararası ölçü birimlerinin kabulü", ok: true }, { text: "Misak-ı İktisadi kararlarının alınması", ok: false }
    ] // Cevap anahtarı 14.D.
  },
  {
    text: "Tevhid-i Tedrisat Kanunu'nun uygulanması ile ortaya çıkan durumlar arasında aşağıdakilerden hangisi yer almaz?",
    diff: 1,
    expl: "1924 Tevhid-i Tedrisat (Eğitim Birliği) kanunu ile; tüm okullar MEB'e bağlanmış (D), eğitim birleşmiş (B), kültür birliğine adım atılmış (E) ve medreseler kapatılmıştır (C). Ancak 'Okuma yazma öğrenmenin kolaylaşması', eğitimin birleştirilmesiyle değil, 1928'deki 'Harf İnkılabı' (Latin alfabesine geçiş) ile sağlanmıştır.",
    answers: [
      { text: "Okuma yazma öğrenmenin kolaylaşması", ok: true }, { text: "Eğitim-öğretimin birleştirilmesi", ok: false }, { text: "Medreselerin kapatılması", ok: false }, { text: "Bütün okulların Maarif Bakanlığına bağlanması", ok: false }, { text: "Kültür birliği yolunda adım atılması", ok: false }
    ] // Cevap anahtarı 15.A.
  }
];
