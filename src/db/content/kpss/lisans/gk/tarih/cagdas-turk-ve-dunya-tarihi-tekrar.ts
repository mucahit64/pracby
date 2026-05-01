import type { McQ } from "../../../../types";

// ============================================================================
// ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ TEKRAR TESTİ - TEST 1
// ============================================================================
export const TAR_CAGDAS_TURK_VE_DUNYA_TARIHI_TEKRAR_TEST_1: McQ[] = [
  {
    text: "<p><b>Cumhuriyet tarihinin ilk erken ve aynı zamanda çok partili seçimi aşağıda verilen tarihlerin hangisinde yapılmıştır?</b></p>",
    diff: 1,
    expl: "Türkiye'de çok partili hayata geçişin ardından yapılan ilk çok partili seçim (ve aynı zamanda ilk erken seçim) 1946 seçimleridir (Açık oy, gizli tasnif usulüyle yapılmıştır).",
    answers: [
      { text: "1946", ok: true },
      { text: "1950", ok: false },
      { text: "1954", ok: false },
      { text: "1923", ok: false },
      { text: "1957", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'nin Kıbrıs'a müdahalesini önlemek amacıyla ABD başkanı tarafından yazılan Johnson Mektubu 5 Haziran 1964'te aşağıda verilen hangi Türk başbakanına gönderilmiştir?</b></p>",
    diff: 1,
    expl: "1964'te Kıbrıs'ta artan Rum saldırılarına karşı Türkiye'nin adaya müdahale kararı alması üzerine, ABD Başkanı Lyndon B. Johnson tarafından Türkiye'yi tehdit eden o meşhur mektup dönemin Başbakanı İsmet İnönü'ye gönderilmiştir.",
    answers: [
      { text: "Bülent Ecevit", ok: false },
      { text: "Adnan Menderes", ok: false },
      { text: "İsmet İnönü", ok: true },
      { text: "Nihat Erim", ok: false },
      { text: "Süleyman Demirel", ok: false }
    ]
  },
  {
    text: "<p><b>Demokrat Parti Dönemi Türk dış politikası gelişmeleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Demokrat Parti dönemi (1950-1960) dış politikasında ABD'ye ilk ziyaret (Celal Bayar), Bağdat Paktı, Kore'ye asker gönderme ve AET'ye (Avrupa Ekonomik Topluluğu - 1959) başvuru vardır. Ancak Kyoto Protokolü (1997) çok sonraki küresel ısınma sözleşmesidir.",
    answers: [
      { text: "ABD'ye ziyaret gerçekleştirme", ok: false },
      { text: "Bağdat Paktına dâhil olma", ok: false },
      { text: "Kore'ye asker gönderme", ok: false },
      { text: "Avrupa Ekonomik Topluluğuna başvuru yapma", ok: false },
      { text: "Kyoto Protokolü'nü imzalama", ok: true }
    ]
  },
  {
    text: "<p>I. Kuzey Atlantik Paktı<br>II. COMECON<br>III. SEATO</p><p><b>Yukarıdaki örgütlerden hangileri Doğu Bloku yapılanması içerisinde <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "COMECON (Karşılıklı Ekonomik Yardımlaşma Konseyi), Doğu Bloku'nun (SSCB) ekonomik örgütüdür. NATO (Kuzey Atlantik Paktı) ve SEATO ise Batı Bloku'nun (ABD) askerî örgütleridir. Bu nedenle I ve III Doğu Bloku'nda yer almaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Çekoslovakya'da ortaya çıkan İnsancıl Komünizm ve Prag Baharı olarak bilinen hareketin öncüsü olan devlet adamı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1968 yılında Çekoslovakya'da komünizmi demokratikleştirip daha özgür bir yapıya kavuşturmak için başlatılan 'Prag Baharı'nın lideri Alexander Dubçek'tir.",
    answers: [
      { text: "İmre Nagy", ok: false },
      { text: "Alexander Dupçek", ok: true },
      { text: "Mihail Gorbaçov", ok: false },
      { text: "Nehru", ok: false },
      { text: "Josip Tito", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin 1979 yılında Afganistan'ı işgal etmesi üzerine ABD senatosu tarafından onaylanmayan uluslararası antlaşma aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yumuşama döneminde nükleer silahları sınırlandırmak için 1979'da imzalanan SALT-II Antlaşması, SSCB'nin aynı yıl Afganistan'ı işgal etmesi üzerine ABD Kongresi tarafından onaylanmamış ve yürürlüğe girmemiştir.",
    answers: [
      { text: "Helsinki", ok: false },
      { text: "Salt - I", ok: false },
      { text: "Camp David", ok: false },
      { text: "Zürih", ok: false },
      { text: "Salt - II", ok: true }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı'nın sonucunda 38. enlemin sınır olarak kabul edilmesi ile ikiye ayrılarak siyasi varlığını devam ettiren devlet aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "II. Dünya Savaşı sonrasında ABD ve SSCB arasında paylaşılamayan ve 38. enlem sınır kabul edilerek Kuzey (Komünist) ve Güney (Kapitalist) olarak ikiye ayrılan devlet Kore'dir.",
    answers: [
      { text: "Vietnam", ok: false },
      { text: "Kore", ok: true },
      { text: "Almanya", ok: false },
      { text: "Hindistan", ok: false },
      { text: "Pakistan", ok: false }
    ]
  },
  {
    text: "<p><b>1948 yılında Demokrat Parti'den istifa ederek Millet Partisi'ni kuran siyasetçiler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 3,
    expl: "Fevzi Çakmak, Osman Bölükbaşı, Hikmet Bayur, Kenan Öner gibi isimler DP'nin muhalefetini yetersiz bularak ayrılmış ve Millet Partisi'ni kurmuştur. Celâl Bayar ise Demokrat Parti'nin kurucusudur ve partiden ayrılmamıştır.",
    answers: [
      { text: "Celâl Bayar", ok: true },
      { text: "Hikmet Bayur", ok: false },
      { text: "Fevzi Çakmak", ok: false },
      { text: "Osman Bölükbaşı", ok: false },
      { text: "Kenan Öner", ok: false }
    ]
  },
  {
    text: "<p>1954 Colombo, 1955 Bandung konferansları ile temeli atılan, 1961 Belgrad Konferansı ile resmen kurulan Bağlantısızlık Hareketi'ne aşağıda verilen devletlerden hangisi Doğu Bloku'ndan ayrılarak öncülük etmiştir?</p>",
    diff: 2,
    expl: "SSCB lideri Stalin ile ters düşerek 1948'de Cominform'dan (Doğu Bloku'ndan) kopan Yugoslavya (Tito), daha sonra Hindistan ve Mısır ile birlikte Bağlantısızlar Hareketi'nin kurucu önderlerinden biri olmuştur.",
    answers: [
      { text: "Hindistan", ok: false },
      { text: "Yugoslavya", ok: true },
      { text: "Mısır", ok: false },
      { text: "Bulgaristan", ok: false },
      { text: "Çekoslovakya", ok: false }
    ]
  },
  {
    text: "<p><b>ABD Başkanı Truman tarafından 12 Mart 1947'de açıklanan \"Truman Doktrini\"nde komünizm baskısı altındaki ülkelere yapılacak yardımın;</b></p><p>I. askerî,<br>II. mali,<br>III. kültürel</p><p><b>alanlarından hangilerini kapsadığı söylenebilir?</b></p>",
    diff: 2,
    expl: "Truman Doktrini, Türkiye ve Yunanistan gibi Sovyet tehdidi altındaki ülkelere acil silah ve para sağlamak için çıkarılmıştır. Bu nedenle yardımın içeriği askerî ve malidir. Kültürel bir boyut içermez.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1964 yılında Kıbrıs Türklerinin haklarını korumak için uyarı uçuşunu düzenlediğimiz sırada Rumlar tarafından uçağı vurulan Cumhuriyet'in ilk hava harp şehidi kabul edilen savaş pilotumuz aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Ağustos 1964'te Kıbrıs semalarında uyarı uçuşu yaparken uçağı Rumlar tarafından düşürülen ve esir düştükten sonra işkenceyle şehit edilen ilk hava harp şehidimiz Yüzbaşı Cengiz Topel'dir.",
    answers: [
      { text: "Cengiz Topel", ok: true },
      { text: "Vecihi Hürkuş", ok: false },
      { text: "Ayfer Gök", ok: false },
      { text: "Sabiha Gökçen", ok: false },
      { text: "Fethi Bey", ok: false }
    ]
  },
  {
    text: "<p><b>1992 yılında başlayan Bosna Savaşı aşağıdaki antlaşmalardan hangisi ile sona ermiştir?</b></p>",
    diff: 1,
    expl: "Sırpların on binlerce Boşnak sivili katlettiği Bosna Savaşı (1992-1995), ABD'nin aracılığıyla 1995 yılında imzalanan Dayton Antlaşması ile sona ermiş ve Bosna-Hersek devleti kurulmuştur.",
    answers: [
      { text: "Camp David", ok: false },
      { text: "Washington", ok: false },
      { text: "Dayton", ok: true },
      { text: "Panmunjom", ok: false },
      { text: "Maastricht", ok: false }
    ]
  },
  {
    text: "<p><b>Demokrat Parti Dönemi'nde bir süre görev alan ve Türkiye'nin 1952 yılında NATO'ya katılmasında etkin rol oynayan dışişleri bakanı aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Demokrat Parti'nin kurucularından olan ve partinin ilk Dışişleri Bakanlığını (1950-1955) yapan, Türkiye'nin NATO'ya kabul sürecini yürüten ünlü tarihçi ve siyasetçi Fuat Köprülü'dür.",
    answers: [
      { text: "Fuat Köprülü", ok: true },
      { text: "Fatin Rüştü Zorlu", ok: false },
      { text: "Bekir Sami Kunduh", ok: false },
      { text: "Numan Menemencioğlu", ok: false },
      { text: "Tevfik Rüştü Aras", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi Sovyetler Dönemi'nde Rusya'da yaşayan Türklere karşı uygulanan olumsuz politikalardan biri <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "Rusya'daki Çarlık döneminde 'Duma' adında bir meclis vardı ve 1905 devrimi sonrası Türkler buraya temsilci göndermişti. Ancak Sovyetler Birliği (SSCB) döneminde meclisin adı Duma değil Yüksek Sovyet'ti ve Türklere bağımsız siyasi temsil hakkı verilmemiştir.",
    answers: [
      { text: "Türklerin nüfus yoğunluklarını kaybedeceği bölgeye göçe zorlanması", ok: false },
      { text: "Kiril alfabesinin zorla öğretilmesi", ok: false },
      { text: "Bazı Türk aydınlarının çalışmalarının engellenmesi", ok: false },
      { text: "Duma meclisine Türklerin temsilcisi göndermesi", ok: true },
      { text: "10 ciltlik Sovyet tarihinde Türk topluluklarına yer verilmemesi", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Cumhuriyeti'nin ilk koalisyon hükûmetini oluşturan partiler aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "1960 Darbesi sonrası yapılan 1961 seçimlerinde hiçbir parti tek başına iktidar olamayınca, İsmet İnönü başbakanlığında Cumhuriyet Halk Partisi (CHP) ile Adalet Partisi (AP) arasında Cumhuriyet tarihinin ilk koalisyon hükûmeti kurulmuştur.",
    answers: [
      { text: "Anavatan - Milliyetçi Hareket", ok: false },
      { text: "Cumhuriyet Halk - Adalet", ok: true },
      { text: "Doğru Yol - Refah", ok: false },
      { text: "Cumhuriyet Halk - Millî Selamet", ok: false },
      { text: "Millî Selamet - Milliyetçi Hareket", ok: false }
    ]
  }
];

// ============================================================================
// ÇAĞDAŞ TÜRK VE DÜNYA TARİHİ TEKRAR TESTİ - TEST 2
// ============================================================================
export const TAR_CAGDAS_TURK_VE_DUNYA_TARIHI_TEKRAR_TEST_2: McQ[] = [
  {
    text: "<p><b>1939 yılında Cumhuriyet Halk Partisi'nde parti içi denetimi sağlamak amaçlı oluşturulan birim aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Tek parti dönemi olan 1939'da, CHP içinde demokratik bir denetim mekanizması oluşturmak, hükûmeti parti içinden eleştirip sorgulayabilmek amacıyla \"Müstakil Grup\" adıyla bağımsız bir milletvekili grubu kurulmuştur.",
    answers: [
      { text: "Tesanüt", ok: false },
      { text: "Vatan Cephesi", ok: false },
      { text: "Müstakil Grup", ok: true },
      { text: "Dörtlü Takrir", ok: false },
      { text: "Millî Birlik Komitesi", ok: false }
    ]
  },
  {
    text: "<p><b>1974 yılında \"Ayşe Tatile Çıksın\" sloganı ile başlayan Kıbrıs Harekâtı'nın operasyon adı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Dönemin Dışişleri Bakanı Turan Güneş'in kızı Ayşe'nin adının parola olarak kullanıldığı 1974 Kıbrıs Barış Harekâtı'nın askerî operasyon kodu \"Attila Harekâtı\"dır.",
    answers: [
      { text: "Attila", ok: true },
      { text: "Zeytin Dalı", ok: false },
      { text: "Şah Fırat", ok: false },
      { text: "Bahar Kalkanı", ok: false },
      { text: "Barış Pınarı", ok: false }
    ]
  },
  {
    text: "<p><b>Azerbaycan ve Ermenistan devletleri arasında yaşanan sorunlar arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Dağlık Karabağ sorunu, Hocalı Katliamı ve ateşkes ihlalleri iki ülke arasındaki temel sorunlardır. Çin ve Rusya'nın öncülüğünde kurulan Şangay Beşlisi (İşbirliği Örgütü) ile Azerbaycan veya Ermenistan'ın doğrudan bir üyelik bağı veya sorunu yoktur.",
    answers: [
      { text: "Hocalı Katliamı", ok: false },
      { text: "Karabağ", ok: false },
      { text: "Bakü - Tiflis Boru Hattı", ok: false },
      { text: "Şangay Beşlisi üyeliği", ok: true },
      { text: "Ateşkes ihlalleri", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye II. Dünya Savaşı sırasında;</b></p><p>I. Adana,<br>II. Moskova,<br>III. Kahire</p><p><b>konferanslarının hangilerinde diplomatik temsilcilerini bulundurmuştur?</b></p>",
    diff: 2,
    expl: "Türkiye, II. Dünya Savaşı yıllarında savaşa girmesi için yapılan baskıları müzakere etmek üzere 1943'te Adana (Yenice) ve yine 1943'te Kahire konferanslarına (İsmet İnönü ve Numan Menemencioğlu ile) katılmıştır. Moskova Konferansına katılmamıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true }
    ]
  },
  {
    text: "<p>5 Eylül 1955 tarihli İstanbul Ekspres gazetesinde çıkan haberde Mustafa Kemal'in Selanik'teki evinin bombalandığına dair bilgilere yer verilmiştir.</p><p><b>Bu durum aşağıdaki gelişmelerden hangisinin yaşanmasına neden olmuştur?</b></p>",
    diff: 1,
    expl: "Yalan bir haberle provokasyon yaratılan bu gazete manşeti üzerine, İstanbul'da azınlıklara (özellikle Rumlara) ait ev, iş yeri ve kiliselerin yağmalandığı trajik 6-7 Eylül Olayları yaşanmıştır.",
    answers: [
      { text: "Tehcir Kanunu olayları", ok: false },
      { text: "6-7 Eylül Olayları", ok: true },
      { text: "Ahali Sözleşmesi'nin imzalanması", ok: false },
      { text: "Kara sularının sorun hâline gelmesi", ok: false },
      { text: "147'ler tasfiyesinin gerçekleşmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Devleti'ne \"Türk Cumhuriyetlerine yol gösteren bir seher yıldızı\" benzetmesinde bulunan Kırgızistan'ın ilk cumhurbaşkanlığı görevini üstlenen devlet adamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "SSCB'nin dağılmasıyla 1991'de bağımsızlığını kazanan Kırgızistan'ın ilk Cumhurbaşkanı Askar Akayev'dir. Türkiye'nin bağımsız Türk devletlerini hemen tanıması ve destek olması üzerine bu benzetmeyi yapmıştır.",
    answers: [
      { text: "Askar Akayev", ok: true },
      { text: "Ebulfeyz Elçibey", ok: false },
      { text: "Sadık Ahmet", ok: false },
      { text: "İslam Kerimov", ok: false },
      { text: "Sapar Murat Niyazov", ok: false }
    ]
  },
  {
    text: "<p><b>Viktor Yuşçenko'nun öncülük ettiği \"Turuncu Devrim\" aşağıdaki ülkelerin hangisinde meydana gelmiştir?</b></p>",
    diff: 1,
    expl: "2004 yılında Ukrayna'da yapılan şaibeli seçim sonuçlarına karşı, Batı yanlısı Viktor Yuşçenko destekçilerinin turuncu renkli giysiler ve bayraklarla başlattığı barışçıl demokratik eylemlere 'Turuncu Devrim' adı verilir.",
    answers: [
      { text: "Gürcistan", ok: false },
      { text: "Tunus", ok: false },
      { text: "Ukrayna", ok: true },
      { text: "Hindistan", ok: false },
      { text: "Çekoslovakya", ok: false }
    ]
  },
  {
    text: "<p><b>Filistin meselesinin çözümü için gerçekleştirilen diplomatik faaliyetler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 3,
    expl: "Fahd Planı, Oslo Konferansı, Venedik Deklarasyonu ve Camp David Antlaşması Orta Doğu'daki Arap-İsrail veya Filistin sorununun çözümüne yönelik adımlardır. Almatı Konferansı (1991) ise SSCB'nin dağılması sonrası BDT'nin (Bağımsız Devletler Topluluğu) kurulmasıyla ilgilidir.",
    answers: [
      { text: "Fahd Planı", ok: false },
      { text: "Oslo Konferansı", ok: false },
      { text: "Almatı Konferansı", ok: true },
      { text: "Venedik Deklarasyonu", ok: false },
      { text: "Camp David Antlaşması", ok: false }
    ]
  },
  {
    text: "<p>I. Almatı Konferansı<br>II. Minsk Antlaşması<br>III. Kopenhag Kriterleri</p><p><b>Yukarıda verilen diplomatik faaliyetlerden hangileri Bağımsız Devletler Topluluğu'nun kurulmasına katkı sağlamıştır?</b></p>",
    diff: 3,
    expl: "SSCB'nin dağılması sürecinde Rusya, Ukrayna ve Belarus'un imzaladığı Minsk Antlaşması ve ardından Orta Asya cumhuriyetlerinin de katılımıyla yayınlanan Almatı Zirvesi Bildirisi ile Bağımsız Devletler Topluluğu (BDT) kurulmuştur. Kopenhag Kriterleri ise Avrupa Birliği'nin tam üyelik şartlarıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Cumhuriyeti;</b></p><p>I. Bağdat Paktı,<br>II. NATO,<br>III. TİKA</p><p><b>teşkilatlarından hangilerine Demokrat Parti Dönemi'nde üye olmuştur?</b></p>",
    diff: 2,
    expl: "Türkiye, NATO'ya 1952 yılında ve Bağdat Paktı'na 1955 yılında (Her ikisi de Demokrat Parti dönemi) üye olmuştur. TİKA ise SSCB'nin dağılmasının ardından 1992 yılında kurulmuştur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı'nın ardından Türk - Yunan ilişkilerini bozan nedenler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Kıbrıs sorunu, Ege kıta sahanlığı, FIR hattı krizi, karasuları ve Kardak krizi II. Dünya Savaşı sonrasındaki başlıca krizlerdir. Ancak 'Nüfus Mübadelesi' (Etabli) sorunu 1920'lerde yaşanmış ve 1930'da (Atatürk dönemi) çözüme kavuşturulmuştur.",
    answers: [
      { text: "Nüfus Mübadelesi", ok: true },
      { text: "Kıbrıs", ok: false },
      { text: "Kardak", ok: false },
      { text: "Fır Hattı", ok: false },
      { text: "Kara Suları", ok: false }
    ]
  },
  {
    text: "<p><b>II. Dünya Savaşı yıllarında İngiliz Başbakan Churchill ile ABD Başkanı Roosevelt'in 14 Ağustos 1941'de birlikte yayımladıkları bildiri aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "ABD savaşa fiilen girmeden hemen önce, iki liderin Newfoundland açıklarında bir savaş gemisinde yayımladıkları ve savaş sonrası barışın temel ilkelerini (Birleşmiş Milletler'in zeminini) belirleyen metin Atlantik Bildirisi'dir.",
    answers: [
      { text: "Wilson", ok: false },
      { text: "Atlantik", ok: true },
      { text: "Truman", ok: false },
      { text: "Helsinki", ok: false },
      { text: "İnsan Hakları Evrensel Beyannamesi", ok: false }
    ]
  },
  {
    text: "<p><b>I. Körfez Savaşı'nın ardından ekonomik olumsuzluklardan etkilenen Türkiye'de, bu durumdan kurtulmak isteyen o dönemin koalisyon hükûmeti 1994 yılında aşağıdaki çalışmalardan hangisini yapmıştır?</b></p>",
    diff: 2,
    expl: "1994 yılındaki ağır ekonomik kriz, devalüasyon ve borç yükünden kurtulmak amacıyla Tansu Çiller (DYP) - Murat Karayalçın (SHP) koalisyon hükûmeti tarafından 5 Nisan Kararları (Kemer Sıkma Politikası) yürürlüğe konmuştur.",
    answers: [
      { text: "24 Ocak Kararları", ok: false },
      { text: "5 Nisan Kararları", ok: true },
      { text: "Türk lirasından sıfır atılması", ok: false },
      { text: "IMF'ye ilk kez borç başvurusu yapılması", ok: false },
      { text: "İthal ikameci anlayışa ağırlık verilmesi", ok: false }
    ]
  },
  {
    text: "<p><b>Avrupa Güvenlik ve İşbirliği Konferansları sonucunda 1975 yılında imzalanan uluslararası sözleşme aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Detant (Yumuşama) döneminin zirvesi sayılan, sınırların değişmezliği ve insan hakları gibi konularda Doğu-Batı bloğunu uzlaştıran AGİK sözleşmesi \"Helsinki Nihai Senedi\"dir.",
    answers: [
      { text: "Salt-I", ok: false },
      { text: "Kopenhag", ok: false },
      { text: "Helsinki", ok: true },
      { text: "Atlantik", ok: false },
      { text: "Kyoto", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi II. Dünya Savaşı sırasında Türkiye'de yaşanan gelişmelerden biri <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Köy Enstitüleri, Varlık Vergisi ve Karne uygulaması İsmet İnönü döneminde II. Dünya Savaşı (1939-1945) sırasındadır. Ancak Kore'ye asker gönderilmesi Soğuk Savaş yıllarında, Demokrat Parti döneminde (1950) gerçekleşmiştir.",
    answers: [
      { text: "Et - Balık Kurumunun açılması", ok: false },
      { text: "Köy Enstitülerinin kurulması", ok: false },
      { text: "Varlık Vergisi Kanunu'nun çıkarılması", ok: false },
      { text: "Karne ve karartma uygulaması", ok: false },
      { text: "Kore'ye asker gönderilmesi", ok: true }
    ]
  }
];