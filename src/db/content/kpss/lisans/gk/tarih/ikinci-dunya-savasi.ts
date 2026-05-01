import type { McQ } from "../../../../types";

// ============================================================================
// İKİNCİ DÜNYA SAVAŞI - TEST 1
// ============================================================================
export const TAR_IKINCI_DUNYA_SAVASI_TEST_1: McQ[] = [
  {
    text: "<p><b>II. Dünya Savaşı'nın ardından çok partili hayata geçiş sürecinde;</b></p><p>I. Millî Kalkınma,<br>II. Demokrat,<br>III. Millet</p><p><b>partilerinden hangileri kurulmuştur?</b></p>",
    diff: 2,
    expl: "1945'te Türkiye'nin ilk muhalefet partisi olarak Milli Kalkınma Partisi (Nuri Demirağ), 1946'da Demokrat Parti (Celal Bayar vd.) ve 1948'de Millet Partisi (Fevzi Çakmak vd.) kurularak çok partili siyasi hayata geçiş sağlanmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>Eski bir gazete küpürünü inceleyen Aybüke Öğretmen, gazetenin ilk sayfasında Müttefik Devletlerin Normandiya Çıkartması ile ---- devletini işgalden kurtardıkları haberini okumuştur.</p><p><b>Gazete küpüründe verilen boşluk aşağıdakilerden hangisi ile tamamlanırsa verilen haber doğru bir nitelik kazanmış olur?</b></p>",
    diff: 1,
    expl: "Haziran 1944'te ABD, İngiltere ve Kanada birliklerinden oluşan Müttefik orduları, Nazi (Alman) işgali altındaki Fransa'yı kurtarmak için Avrupa kıtasına Normandiya Çıkarması'nı gerçekleştirmiştir.",
    answers: [
      { text: "Fransa", ok: true },
      { text: "SSCB", ok: false },
      { text: "Yugoslavya", ok: false },
      { text: "İtalya", ok: false },
      { text: "İngiltere", ok: false }
    ]
  },
  {
    text: "<p>II. Dünya Savaşı'nın başlaması ile Müttefik Devletler Türkiye'nin de savaşa katılması için görüş bildirmişlerdir.</p><p><b>Bu doğrultuda aşağıdaki konferansların hangisi ile Müttefik Devletler ve Türk hükûmeti bir araya gelmişlerdir?</b></p>",
    diff: 2,
    expl: "1943 Kahire Konferanslarında (I. ve II. Kahire) Müttefik liderleri olan Churchill ve Roosevelt, Türkiye'yi temsilen katılan Cumhurbaşkanı İsmet İnönü ile Türkiye'nin Müttefikler yanında savaşa girmesi için doğrudan masaya oturmuşlardır.",
    answers: [
      { text: "Quebec", ok: false },
      { text: "Yalta", ok: false },
      { text: "Potsdam", ok: false },
      { text: "Kahire", ok: true },
      { text: "Moskova", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin 1 Ekim 1939 tarihinde Montrö Boğazlar Sözleşmesi'nin içeriğinde birtakım değişiklikler yapılması gerektiğini ifade etmesi Türkiye Cumhuriyeti'ni ilk olarak aşağıdaki diplomatik faaliyetlerden hangisine yöneltmiştir?</b></p>",
    diff: 3,
    expl: "Savaşın başlarında SSCB'nin Boğazlar üzerinde hak iddia edip tehdit oluşturması, Türkiye'yi Batı bloğuna yaklaşmaya itmiş ve 19 Ekim 1939'da İngiltere ve Fransa ile Karşılıklı Yardım Antlaşması (Ankara Paktı) imzalanmıştır.",
    answers: [
      { text: "Yenice Mülakatlarını gerçekleştirme", ok: false },
      { text: "İngiltere ve Fransa ile birlikte Ankara Paktı'nı imzalama", ok: true },
      { text: "Kahire Konferanslarında bulunma", ok: false },
      { text: "Japonya ve Almanya'ya savaş ilan etme", ok: false },
      { text: "Helsinki Sözleşmesi'ni onaylama", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen konferansların hangisinde Mussolini iktidarının düşmesinin ardından Almanya'ya karşı Normandiya Cephesi'nin açılması kararı alınmıştır?</b></p>",
    diff: 3,
    expl: "İtalya'da Mussolini rejiminin çökmesi üzerine Müttefik liderleri (Roosevelt ve Churchill), Ağustos 1943'te Kanada'da düzenlenen Quebec Konferansı'nda Almanya'ya karşı Fransa üzerinden ikinci bir cephe (Normandiya) açma kararını kesinleştirmiştir.",
    answers: [
      { text: "Quebec", ok: true },
      { text: "Yalta", ok: false },
      { text: "Kahire", ok: false },
      { text: "Tahran", ok: false },
      { text: "Atlantik", ok: false }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı'nda yapılan aşağıdaki askerî hareketlerden hangisinin açıklaması <u>yanlış</u> verilmiştir?</b></p>",
    diff: 2,
    expl: "Barbarossa Harekâtı (1941), Hitler komutasındaki Almanya'nın SSCB'ye (Rusya'ya) başlattığı devasa işgal taarruzudur. Ancak SSCB savaştan çekilmemiş, tam aksine müthiş bir direnç göstererek (Stalingrad) Almanları durdurmuş ve karşı saldırıya geçmiştir.",
    answers: [
      { text: "Kartal Hücumu - Almanya'nın İngiltere'ye karşı hava taarruzu", ok: false },
      { text: "Maginot Hattı - Fransa'nın Almanya'ya karşı oluşturduğu güvenlik koridoru", ok: false },
      { text: "Pearl Harbour Baskını - ABD'nin savaşa girmesine neden olan Japonya taarruzu", ok: false },
      { text: "Marita Harekâtı - Almanya'nın Yunan topraklarına saldırısı", ok: false },
      { text: "Barbarossa Harekâtı - SSCB'nin savaştan çekilmesi ile sonuçlanan Alman taarruzu", ok: true }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı Dönemi'nde ABD ile Japonya arasında yaşanan okyanus savaşlarına aşağıdakilerden hangisi örnek <u>gösterilemez</u>?</b></p>",
    diff: 1,
    expl: "Marne Muharebesi (1914), I. Dünya Savaşı'nda Fransa ile Almanya arasında Avrupa'da (Batı Cephesi) gerçekleşen meşhur bir siper (kara) savaşıdır. Pasifik okyanusuyla veya Japonya-ABD deniz savaşlarıyla hiçbir ilgisi yoktur.",
    answers: [
      { text: "Pearl Harbour", ok: false },
      { text: "Midway", ok: false },
      { text: "Mercan", ok: false },
      { text: "Marne", ok: true },
      { text: "Leyte", ok: false }
    ]
  },
  {
    text: "<p><b>1943 - 1945 arası İngiliz ve Amerikan donanmalarının Sicilya üzerine düzenleyerek Almanların mağlup, İtalya'nın da kayıtsız şartsız teslim olmasına neden olan askerî harekât aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Müttefiklerin Kuzey Afrika'yı temizledikten sonra Temmuz 1943'te İtalya yarımadasına çıkmak için başlattıkları ve Mussolini rejiminin çökmesine yol açan büyük Sicilya işgal operasyonunun kod adı Husky Harekâtı'dır.",
    answers: [
      { text: "Yıldırım", ok: false },
      { text: "Husky", ok: true },
      { text: "Barbarossa", ok: false },
      { text: "Kartal", ok: false },
      { text: "Meşale", ok: false }
    ]
  },
  {
    text: "<p>- 1944 yılında 21 Ağustos - 7 Ekim tarihleri arasında düzenlenmiş olup işgal altındaki Fransa katılmamıştır.<br>- Birleşmiş Milletler Sözleşmesi'nin temel ilkeleri belirlenmiş ve güvenlik konseyinin öneminden bahsedilmiştir.</p><p><b>Özellikleri verilen uluslararası konferans aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "II. Dünya Savaşı sonrasında kurulacak olan Birleşmiş Milletler (BM) teşkilatının kurumsal yapısının, taslağının ve veto yetkisine sahip Güvenlik Konseyi'nin temelinin atıldığı diplomatik toplantı 1944 Dumbarton Oaks Konferansı'dır.",
    answers: [
      { text: "Kahire", ok: false },
      { text: "Dumbarton", ok: true },
      { text: "Kazablanka", ok: false },
      { text: "Potsdam", ok: false },
      { text: "Paris", ok: false }
    ]
  },
  {
    text: "<p><b>Birleşmiş Milletler aşağıdaki konferansların hangisinin sonucunda resmî olarak kurulmuştur?</b></p>",
    diff: 2,
    expl: "Nisan-Haziran 1945'te, içlerinde Türkiye'nin de bulunduğu 50 ülkenin temsilcisiyle toplanan San Francisco Konferansı sonucunda BM Antlaşması (Şartı) imzalanmış ve Birleşmiş Milletler teşkilatı resmen vücut bulmuştur.",
    answers: [
      { text: "San Francisco", ok: true },
      { text: "Yalta", ok: false },
      { text: "Moskova", ok: false },
      { text: "Potsdam", ok: false },
      { text: "I. Kahire", ok: false }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı Dönemi'nde Türkiye Devleti'nde karne uygulamasını yöneten birim aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Savaş yıllarında üretimin düşmesi ve karaborsacılığın artması üzerine, devlet temel tüketim mallarının (ekmek, şeker vb.) dağıtımını kontrol altına almak ve karne ile paylaştırmak amacıyla İaşe Müsteşarlığı'nı kurmuştur.",
    answers: [
      { text: "İaşe Müsteşarlığı", ok: true },
      { text: "Türk Tasarruf Cemiyeti", ok: false },
      { text: "Kamu İktisadi Teşebbüsleri", ok: false },
      { text: "Maden Tetkik Arama", ok: false },
      { text: "Sanayi Maadin Bankası", ok: false }
    ]
  },
  {
    text: "<p><b>Almanya'nın aşağıdaki devletlerden hangisine saldırması ile 1 Eylül 1939'da İkinci Dünya Savaşı fiilen başlamıştır?</b></p>",
    diff: 1,
    expl: "Hitler'in emriyle Alman ordularının 1 Eylül 1939 sabahı Polonya sınırını geçerek işgale başlaması bardağı taşıran son damla olmuş, İngiltere ve Fransa'nın Almanya'ya savaş açmasıyla II. Dünya Savaşı fiilen patlak vermiştir.",
    answers: [
      { text: "Çekoslovakya", ok: false },
      { text: "Macaristan", ok: false },
      { text: "SSCB", ok: false },
      { text: "Polonya", ok: true },
      { text: "Belçika", ok: false }
    ]
  },
  {
    text: "<p><b>ABD İkinci Dünya Savaşı yıllarında;</b></p><p>I. Ödünç Verme ve Kiralama Kanunu,<br>II. Truman Doktrini,<br>III. Marshall Planı</p><p><b>unsurlarından hangileri ile savaşan devletlere maddi destekte bulunmuştur?</b></p>",
    diff: 2,
    expl: "ABD, savaşa fiilen girmeden önce \"Ödünç Verme ve Kiralama\" (Lend-Lease) yasası ile Müttefiklere (İngiltere, SSCB) silah, gıda ve malzeme desteği sağlamıştır. Truman Doktrini ve Marshall Planı savaş devam ederken değil, savaş bittikten sonra (Soğuk Savaş) Sovyet tehdidine karşı uygulanmıştır.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1947 Paris Konferansı ile İtalya;</b></p><p>I. On İki Ada,<br>II. Sakız,<br>III. Rodos</p><p><b>adalarından hangilerini Yunanistan'a bırakmıştır?</b></p>",
    diff: 2,
    expl: "II. Dünya Savaşı'nda mağlup olan İtalya, 1947 Paris Barış Antlaşması'yla elinde bulundurduğu On İki Ada ve Rodos'u Müttefiklerin isteğiyle Yunanistan'a bırakmak zorunda kalmıştır. (Sakız Adası zaten Balkan Savaşları'ndan beri Yunanistan'daydı).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Birleşmiş Milletler Teşkilatının kurucu üyeleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 1,
    expl: "Birleşmiş Milletler, II. Dünya Savaşı'nı kazanan Müttefik devletler (ve onlarla hareket eden Türkiye gibi ülkeler) tarafından barışı korumak için kurulmuştur. Savaşın mağlubu ve yıkımın sorumlusu olan Nazi Almanyası kurucu üye olamaz.",
    answers: [
      { text: "SSCB", ok: false },
      { text: "Almanya", ok: true },
      { text: "Türkiye", ok: false },
      { text: "İngiltere", ok: false },
      { text: "Fransa", ok: false }
    ]
  }
];

// ============================================================================
// İKİNCİ DÜNYA SAVAŞI - TEST 2
// ============================================================================
export const TAR_IKINCI_DUNYA_SAVASI_TEST_2: McQ[] = [
  {
    text: "<p><b>Mihver Bloku'nun kurulmasında;</b></p><p>I. Çelik Pakt,<br>II. Anti Komintern Pakt,<br>III. Atlantik Paktı</p><p><b>gelişmelerinden hangileri etkili olmuştur?</b></p>",
    diff: 2,
    expl: "İtalya ile Almanya arasındaki dayanışmayı sağlayan Çelik Pakt ve Japonya ile Almanya'nın komünizme karşı birleştiği Anti-Komintern Pakt, Mihver (Eksen) devletler bloğunun kurulmasını sağlamıştır. Atlantik Paktı ise savaş sonrasındaki NATO'dur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>İkinci Dünya Savaşı'nı ortaya çıkaran nedenler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Japonların 1941'deki Pearl Harbour (İnci Limanı) baskını, savaşın çıkış nedeni değildir. Savaş zaten Avrupa'da başlamışken (1939), ABD'nin de savaşa dâhil olup çatışmanın dünya geneline yayılmasına yol açan tetikleyici askeri olaydır.",
    answers: [
      { text: "Milletler Cemiyetinin barışı sağlamada yetersiz kalması", ok: false },
      { text: "Birinci Dünya Savaşı sonunda ağır antlaşmaların imzalanması", ok: false },
      { text: "Devletler arası tampon bölge sorunlarının olması", ok: false },
      { text: "Pearl Harbour Baskını", ok: true },
      { text: "Berlin - Roma - Tokyo mihverinin kurulması", ok: false }
    ]
  },
  {
    text: "<p><b>Birleşmiş Milletler Teşkilatının temeli aşağıdaki konferansların hangisinde atılmıştır?</b></p>",
    diff: 2,
    expl: "Ağustos 1941'de ABD Başkanı Roosevelt ve İngiltere Başbakanı Churchill'in bir savaş gemisinde yayımladıkları Atlantik Bildirisi, I. Dünya Savaşı'ndaki Wilson İlkeleri'ne benzer evrensel kurallar koyarak Birleşmiş Milletler'in fikirsel temellerini atmıştır.",
    answers: [
      { text: "Atlantik", ok: true },
      { text: "Casablanca", ok: false },
      { text: "Moskova", ok: false },
      { text: "Kahire", ok: false },
      { text: "San Francisco", ok: false }
    ]
  },
  {
    text: "<p>1942 yılında Müttefik Devletler Türkiye'nin savaşa girmesi konusunda baskı yapmaya başlamışlardır.</p><p><b>Aşağıdakilerden hangisi Müttefiklerin bu amacına yönelik girişimlerinden biri <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Adana (Yenice) ve Kahire görüşmelerinde Türkiye Cumhurbaşkanı ile bizzat masaya oturulup savaşa girilmesi için baskı yapılmıştır. Ancak savaşın sonunda (1945) toplanan Potsdam Konferansı'nın amacı Türkiye'yi savaşa sokmak değil, mağlup Almanya'nın nasıl paylaşılacağını belirlemektir.",
    answers: [
      { text: "Adana Görüşmeleri", ok: false },
      { text: "I. Kahire Konferansı", ok: false },
      { text: "II. Kahire Konferansı", ok: false },
      { text: "Quebec Konferansı", ok: false },
      { text: "Potsdam Konferansı", ok: true }
    ]
  },
  {
    text: "<p><b>Uzak Doğu'nun II. Dünya Savaşı'nın cephelerinden biri hâline gelmesinde aşağıdakilerden hangisi etkili olmuştur?</b></p>",
    diff: 1,
    expl: "Japonya'nın, Asya'yı Batılı sömürgecilerden temizleyip kendi liderliğinde birleştirme hedefiyle (Ortak Refah Alanı) yayılmacı bir siyaset izlemesi ve Çin ile Pasifik adalarına saldırması, Uzak Doğu'yu ana savaş cephelerinden biri yapmıştır.",
    answers: [
      { text: "Çin Halk Cumhuriyeti'nin kurulması", ok: false },
      { text: "Cominform'un oluşturulması", ok: false },
      { text: "Japonya'nın yayılmacı siyaset izlemesi", ok: true },
      { text: "ABD'nin Truman Doktrini ile Uzak Doğu ülkelerini güçlendirmesi", ok: false },
      { text: "Hindistan ve Pakistan'da bağımsızlık mücadelelerinin başlaması", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 1941 yılında ABD ve İngiltere tarafından yayımlanan \"Atlantik Bildirisi\" ile ilgili doğru bir bilgi <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Atlantik Bildirisi'nde toprak kazanılmaması, self-determinasyon (halkların kendi kaderini tayini) ve serbest ticaret gibi barışçıl ilkeler yer alır. Ancak savaşan devletlere borç (kredi) verilmesi gibi finansal veya ekonomik yaptırım maddeleri bulunmaz.",
    answers: [
      { text: "ABD savaşa girmeden önce yayımlanmıştır.", ok: false },
      { text: "Ulusların kendi geleceğini kendilerinin belirlemesi kararı alınmıştır.", ok: false },
      { text: "Savaşan devletlere borç verilmesi karara bağlanmıştır.", ok: true },
      { text: "Uluslararası iş birliği esas alınmıştır.", ok: false },
      { text: "Açık denizlerde ticaret serbestliği benimsenmiştir.", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye II. Dünya Savaşı Dönemi'nde sınırlarını korumak ve tarafsızlığını devam ettirebilmek adına;</b></p><p>I. İngiltere,<br>II. Fransa,<br>III. Almanya,<br>IV. SSCB</p><p><b>devletlerinden hangileri ile diplomatik temaslarda bulunmuştur?</b></p>",
    diff: 2,
    expl: "Türkiye savaş boyunca aktif bir 'denge siyaseti' izlemiş, hem Müttefik güçlerle (İngiltere, Fransa, SSCB) ittifak ve yardım müzakereleri yürütmüş hem de Mihver gücü Almanya ile Saldırmazlık Paktı imzalayarak sınırlarını savaşın yıkımından korumuştur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II, III ve IV", ok: false },
      { text: "I, II, III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>1947 Paris Konferansı'nda imzası bulunmayan Mihver Devlet aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "1947 Paris Barış Antlaşması savaşın ikincil derecedeki mağlupları olan İtalya, Romanya, Macaristan, Bulgaristan ve Finlandiya ile imzalanmıştır. Savaşın asıl sorumlusu Almanya ise Doğu ve Batı olarak ikiye bölündüğü için ortak bir barış antlaşması yapılamamıştır.",
    answers: [
      { text: "İtalya", ok: false },
      { text: "Almanya", ok: true },
      { text: "Bulgaristan", ok: false },
      { text: "Macaristan", ok: false },
      { text: "Romanya", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'nin Almanya ve Japonya'ya savaş ilan ederek II. Dünya Savaşı'na katılmasında aşağıdaki konferansların hangisinde alınan kararlar etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Şubat 1945'teki Yalta Konferansı'nda, ABD ve SSCB önderliğindeki Müttefikler, yeni kurulacak Birleşmiş Milletler teşkilatına sadece Mihver devletlere (Almanya ve Japonya) resmen savaş ilan eden ülkelerin kurucu üye olarak kabul edileceğini karara bağlamıştır. Türkiye de bu yüzden kâğıt üzerinde savaş ilan etmiştir.",
    answers: [
      { text: "Kahire", ok: false },
      { text: "Potsdam", ok: false },
      { text: "San Fransisco", ok: false },
      { text: "Yalta", ok: true },
      { text: "Casablanca", ok: false }
    ]
  },
  {
    text: "<p><b>1939 - 1945 yılları arasında Türkiye'de görülen gelişmeler içerisinde aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 3,
    expl: "Milli Kalkınma Partisi (1945), Köy Enstitüleri (1940), Varlık Vergisi (1942) ve İaşe Müsteşarlığı bu dönemde (II. Dünya Savaşı yılları - İsmet İnönü dönemi) ortaya çıkmıştır. Atatürk döneminde açılan Halkevleri ise Demokrat Parti iktidarında (1951) kapatılacaktır.",
    answers: [
      { text: "Millî Kalkınma Partisi'nin kurulması", ok: false },
      { text: "Köy Enstitülerinin açılması", ok: false },
      { text: "Varlık vergisinin toplanması", ok: false },
      { text: "İaşe Müsteşarlığının kurulması", ok: false },
      { text: "Halkevlerinin kapatılması", ok: true }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı'nın ardından ortaya çıkan gelişmeler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Savaş sonrası İtalya cumhuriyet olmuş, IMF (Uluslararası Para Fonu) ve NATO kurulmuş, Naziler Nürnberg'de yargılanmıştır. Ancak Orta Doğu'daki 'mandater rejimler' I. Dünya Savaşı'nın bir sonucuydu, II. Dünya Savaşı sonrasında ise bu rejimler zayıflayıp çökerek yerini bağımsız Arap devletlerine bırakmıştır.",
    answers: [
      { text: "IMF'nin kurulması", ok: false },
      { text: "İtalya'nın cumhuriyet rejimine geçmesi", ok: false },
      { text: "Savaş suçlularını yargılamak için Nünberg Mahkemelerinin kurulması", ok: false },
      { text: "Orta Doğu'da mandater rejimlerin güçlenmesi", ok: true },
      { text: "Kuzey Atlantik Paktı'nın kurulması", ok: false }
    ]
  },
  {
    text: "<p>I. Yenice Görüşmeleri<br>II. Quebec Konferansı<br>III. Kahire Görüşmeleri<br>IV. San Fransisco Konferansı</p><p><b>Türkiye Cumhuriyeti II. Dünya Savaşı Dönemi'nde gerçekleşen yukarıdaki gelişmelerden hangilerine fiilî olarak katılarak görüşlerini bildirmiştir?</b></p>",
    diff: 3,
    expl: "Türkiye, Yenice (Adana) mülakatlarında Churchill ile, Kahire Görüşmelerinde Roosevelt ve Churchill ile bizzat masaya oturmuştur. Savaşın sonunda da San Francisco'ya heyet gönderip BM'nin kuruluşuna katılmıştır. Ancak Kanada'daki Quebec Konferansı tamamen İngiltere-ABD askeri planlama toplantısıdır, Türkiye katılmamıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, III ve IV", ok: true },
      { text: "II, III ve IV", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Cumhuriyeti II. Dünya Savaşı'nın getirdiği ekonomik olumsuzluklara karşı tedbirler alarak yeni ekonomik kanunlar çıkarmıştır.</p><p><b>Bu duruma örnek olarak aşağıdakilerden hangisi <u>gösterilemez</u>?</b></p>",
    diff: 2,
    expl: "Milli Korunma, Varlık Vergisi ve Toprak Mahsulleri gibi yasalar doğrudan 1940'ların savaş ekonomisi tedbirleridir. Ancak Türk Parasının Kıymetini Koruma Kanunu, 1929 Dünya Ekonomik Buhranı'nın etkilerini hafifletmek için Atatürk döneminde (1930) çıkarılmıştır.",
    answers: [
      { text: "Millî Korunma Kanunu", ok: false },
      { text: "Varlık Vergisi Kanunu", ok: false },
      { text: "Toprak Mahsulleri Vergisi Kanunu", ok: false },
      { text: "Türk Parasını Koruma Kanunu", ok: true },
      { text: "Çiftçiyi Topraklandırma Kanunu", ok: false }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı'nda Türkiye Cumhuriyeti dışişleri bakanlığı görevini yürüten kişiler aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "II. Dünya Savaşı yıllarında Türk diplomasisini yöneten Dışişleri Bakanları sırasıyla Şükrü Saracoğlu (1938-1942), zorlu denge politikasını yürüten Numan Menemencioğlu (1942-1944) ve savaşın bitiminde görev alan Hasan Saka (1944-1947)'dır.",
    answers: [
      { text: "Fuad Köprülü - Numan Menemencioğlu", ok: false },
      { text: "Numan Menemencioğlu - Hasan Saka", ok: true },
      { text: "Hasan Saka - Tevfik Rüştü Aras", ok: false },
      { text: "Fatin Rüştü Zorlu - Fuad Köprülü", ok: false },
      { text: "Tevfik Rüştü Aras - Numan Menemencioğlu", ok: false }
    ]
  },
  {
    text: "<p><b>İtalya'nın II. Dünya Savaşı'nda Süveyş Kanalı'nı ele geçirmek istemesi aşağıdaki devletlerden hangisinin çıkarlarını daha fazla tehlikeye düşürmüştür?</b></p>",
    diff: 1,
    expl: "Mısır'da bulunan Süveyş Kanalı, İngiltere'nin Hindistan ve Uzak Doğu'daki en zengin sömürgelerine giden \"can damarı\" niteliğindeydi. İtalya'nın Kuzey Afrika taarruzu doğrudan İngiliz İmparatorluğu'nun çıkarlarını hedef almıştır.",
    answers: [
      { text: "İngiltere", ok: true },
      { text: "Almanya", ok: false },
      { text: "ABD", ok: false },
      { text: "Fransa", ok: false },
      { text: "Yunanistan", ok: false }
    ]
  }
];