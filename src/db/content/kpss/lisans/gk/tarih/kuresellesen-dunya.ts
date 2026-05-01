import type { McQ } from "../../../../types";

// ============================================================================
// KÜRESELLEŞEN DÜNYA - TEST 1
// ============================================================================
export const TAR_KURESELLESEN_DUNYA_TEST_1: McQ[] = [
  {
    text: "<p><b>1980 - 1988 yılları arasında yaşanan Irak - İran savaşlarının nedenleri arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "Irak'ın nükleer silah (veya kitle imha silahı) ürettiği iddiası, 2003 yılında ABD'nin Irak'ı işgal ettiği II. Körfez Savaşı'nın gerekçesidir. 1980'lerdeki İran-Irak savaşının nedeni değildir.",
    answers: [
      { text: "Şattülarap su yolları meselesi", ok: false },
      { text: "Basra Körfezi'ndeki hâkimiyet mücadelesi", ok: false },
      { text: "İran'da Humeyni'nin gerçekleştirdiği Şii Devrimi'nin Irak'ta yaşayan Şiileri etkilemesi", ok: false },
      { text: "Irak'ın nükleer silah üretmesi", ok: true },
      { text: "Irak Devleti'nin İran'da yaşayan Sünni azınlığa karşı kışkırtıcı politika izlemesi", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin dağılması ile Çekoslovakya'nın demokrasiye geçişini sağlayan gelişme aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1989 yılında Çekoslovakya'da komünist rejimin kan dökülmeden, barışçıl halk eylemleriyle yıkılıp demokrasiye geçilmesine \"Kadife Devrim\" adı verilmiştir.",
    answers: [
      { text: "Kadife Devrim", ok: true },
      { text: "Beyaz Devrim", ok: false },
      { text: "Turuncu Devrim", ok: false },
      { text: "Gül Devrimi", ok: false },
      { text: "Sessiz Devrim", ok: false }
    ]
  },
  {
    text: "<p><b>1957 Roma Antlaşması ile temeli atılan Avrupa Ekonomik Topluluğu aşağıdaki antlaşmalardan hangisi ile Avrupa Birliği adını almıştır?</b></p>",
    diff: 2,
    expl: "1992'de imzalanan ve 1993'te yürürlüğe giren Maastricht Antlaşması ile Avrupa Ekonomik Topluluğu (AET), sadece ekonomik değil siyasi bir birliğe de dönüşerek resmen \"Avrupa Birliği\" (AB) adını almıştır.",
    answers: [
      { text: "Londra Antlaşması", ok: false },
      { text: "Maastricht Antlaşması", ok: true },
      { text: "Zürih Antlaşması", ok: false },
      { text: "Washington Antlaşması", ok: false },
      { text: "Dayton Antlaşması", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Devleti'nde 5 Nisan 1994'te tarihe \"5 Nisan Kararları\" olarak geçen ekonomik kararların alınmasında aşağıdaki gelişmelerin hangisinin olumsuz sonuçları etkili olmuştur?</b></p>",
    diff: 3,
    expl: "1990'daki I. Körfez Savaşı sırasında Irak'a uygulanan BM ambargosuna katılan Türkiye, Kerkük-Yumurtalık petrol boru hattını kapatmış ve sınır ticaretinin durmasıyla milyarlarca dolar zarara uğramıştır. Bu darboğaz, 1994'te 5 Nisan (kemer sıkma ve devalüasyon) Kararları'nı zorunlu kılmıştır.",
    answers: [
      { text: "İran - Irak savaşları", ok: false },
      { text: "Birinci Körfez Savaşı", ok: true },
      { text: "Ürdün - İsrail Savaşı", ok: false },
      { text: "Bosna Savaşı", ok: false },
      { text: "11 Eylül Saldırıları", ok: false }
    ]
  },
  {
    text: "<p><b>Yugoslavya'nın dağılma sürecine girmesi ile ilk olarak bağımsızlığını ilan eden devlet aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "1991 yılında Yugoslavya'dan ayrılarak bağımsızlığını ilan eden ve federasyonun dağılma sürecini başlatan ilk devletler Slovenya ve Hırvatistan'dır (İlk adım Slovenya'dan gelmiştir).",
    answers: [
      { text: "Makedonya", ok: false },
      { text: "Sırbistan", ok: false },
      { text: "Kosova", ok: false },
      { text: "Slovenya", ok: true },
      { text: "Karadağ", ok: false }
    ]
  },
  {
    text: "<p><b>1996 yılında kurulan Şangay Beşlisi Teşkilatı'na aşağıdakilerden hangisi üye <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "1996'da kurulan Şangay Beşlisi'nin kurucuları Çin, Rusya, Kazakistan, Kırgızistan ve Tacikistan'dır. Tarafsızlık politikası izleyen Türkmenistan bu örgüte üye değildir.",
    answers: [
      { text: "Çin", ok: false },
      { text: "Rusya", ok: false },
      { text: "Özbekistan", ok: false },
      { text: "Türkmenistan", ok: true },
      { text: "Tacikistan", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin dağılması ile;</b></p><p>I. Gürcistan,<br>II. Slovenya,<br>III. Estonya,<br>IV. Tacikistan</p><p><b>devletlerinden hangileri bağımsızlığını kazanmıştır?</b></p>",
    diff: 2,
    expl: "Gürcistan, Estonya ve Tacikistan, Sovyetler Birliği'nin (SSCB) dağılmasıyla kurulan devletlerdir. Slovenya ise Yugoslavya'nın dağılmasıyla bağımsız olmuştur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve III", ok: false },
      { text: "II, III ve IV", ok: false },
      { text: "I, III ve IV", ok: true }
    ]
  },
  {
    text: "<p><b>Özbekistan'ın kurucu cumhurbaşkanlığı görevini aşağıdakilerden hangisi yürütmüştür?</b></p>",
    diff: 1,
    expl: "1991'de SSCB'den ayrılarak bağımsızlığını ilan eden Özbekistan Cumhuriyeti'nin kurucusu ve ilk cumhurbaşkanı İslam Kerimov'dur.",
    answers: [
      { text: "İslam Kerimov", ok: true },
      { text: "Mehmet Emin Resulzade", ok: false },
      { text: "Nursultan Nazarbayev", ok: false },
      { text: "Askar Akayev", ok: false },
      { text: "Ebulfeyz Elçibey", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin uyguladığı Glasnost ve Perestroyka politikaları ile ılımlı ilişkiler kuran, Komünist Parti'nin son genel sekreterliği görevini yapan devlet adamı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "SSCB'yi \"Yeniden Yapılandırma\" (Perestroyka) ve \"Açıklık\" (Glasnost) politikalarıyla kurtarmaya çalışan ancak sürecin sonunda Sovyetlerin dağılmasına engel olamayan son SSCB lideri Mihail Gorbaçov'dur.",
    answers: [
      { text: "Mihail Gorbaçov", ok: true },
      { text: "Boris Yeltsin", ok: false },
      { text: "Tito", ok: false },
      { text: "Çavuşesku", ok: false },
      { text: "Kruşçev", ok: false }
    ]
  },
  {
    text: "<p><b>Orta Doğu, Balkanlar ve Kafkasya'da sürekli sorunlar yaşanmasında;</b></p><p>I. stratejik konumları,<br>II. dinî ve etnik ayrımların belirgin hâle gelmesi,<br>III. büyük devletlerin dağılmaları sonucunda ortaya çıkan siyasi yapı</p><p><b>durumlarından hangileri etkili olmuştur?</b></p>",
    diff: 2,
    expl: "Bu bölgelerin jeopolitik önemi (stratejik konum), Osmanlı/SSCB/Yugoslavya gibi büyük devletlerin çökmesiyle oluşan otorite boşluğu ve etnik/dini çeşitliliğin milliyetçilikle çatışmaya dönüşmesi sürekli sorunlara neden olmuştur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>Azerbaycan'ın 1918 yılında ilk kez bağımsızlığını kazanmasında etkili olan devlet adamı aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "1918'de kurulan ilk Azerbaycan Demokratik Cumhuriyeti'nin kurucusu ve ilk Cumhurbaşkanı, \"Bir kere yükselen bayrak bir daha inmez\" sözüyle tanınan Mehmet Emin Resulzade'dir.",
    answers: [
      { text: "Ebulfeyz Elçibey", ok: false },
      { text: "Mehmet Emin Resulzade", ok: true },
      { text: "İslam Kerimov", ok: false },
      { text: "Nur Sultan Nazarbayev", ok: false },
      { text: "Aliya İzzetbegoviç", ok: false }
    ]
  },
  {
    text: "<p><b>Küresel ısınma sorununun çözümlenmesi amacıyla oluşturulan ve 2009 yılında Türkiye'nin de imzalayarak destek verdiği sözleşme aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Sera gazı emisyonlarını azaltmak ve küresel ısınmayla mücadele etmek için 1997'de kabul edilen, Türkiye'nin ise 2009'da taraf olduğu uluslararası çevre antlaşması Kyoto Protokolü'dür.",
    answers: [
      { text: "Helsinki Nihai Senedi", ok: false },
      { text: "Maastricht Antlaşması", ok: false },
      { text: "Kyoto Protokolü", ok: true },
      { text: "Şangay Beşlisi", ok: false },
      { text: "İslam Konferansı Örgütü", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinin Türkiye'de 1960 - 2000 yılları arasında görülen bilimsel ya da teknolojik gelişmelerden biri olduğu <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Türkiye'de televizyon, internet, organ nakli ve TÜBİTAK (1963) bu dönemde (1960-2000) hayata geçmiştir. Ancak ilk radyo yayını 1927 yılında, yani Cumhuriyetin ilk yıllarında (Atatürk dönemi) yapılmıştır.",
    answers: [
      { text: "İnternetin ilk kez kullanılması", ok: false },
      { text: "İlk organ naklinin yapılması", ok: false },
      { text: "Televizyon yayınlarının başlaması", ok: false },
      { text: "TÜBİTAK'ın Kurulması", ok: false },
      { text: "İlk kez radyo yayınının yapılması", ok: true }
    ]
  },
  {
    text: "<p><b>1940 yılında kurulan İslamcı-Sosyalist akımı benimseyen siyasi oluşum aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Arap milliyetçiliği (Pan-Arabizm) ile sosyalizmi sentezleyerek 1940'larda Michel Eflak ve Salah Bitar tarafından Suriye'de kurulan ve sonrasında Irak'ta da (Saddam dönemi) iktidara gelen yapı Baas Partisi'dir.",
    answers: [
      { text: "İslam Konferansı Örgütü", ok: false },
      { text: "OPEC", ok: false },
      { text: "HAMAS", ok: false },
      { text: "Baas Partisi", ok: true },
      { text: "İntifada", ok: false }
    ]
  },
  {
    text: "<p><b>I. Camp David,<br>II. Washington,<br>III. Zürih</b></p><p><b>antlaşmalarından hangileri Orta Doğu coğrafyasında savaş durumuna son vermeye yöneliktir?</b></p>",
    diff: 3,
    expl: "1978 Camp David Antlaşmaları, Orta Doğu'da İsrail ile Mısır arasındaki savaşlara son vermiştir. Washington ve Zürih antlaşmaları Orta Doğu'daki Arap-İsrail savaşlarıyla ilgili değildir (Örn: Zürih, Kıbrıs meselesi içindir).",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  }
];

// ============================================================================
// KÜRESELLEŞEN DÜNYA - TEST 2
// ============================================================================
export const TAR_KURESELLESEN_DUNYA_TEST_2: McQ[] = [
  {
    text: "<p><b>SSCB'nin dağılması ile ortaya çıkan gelişmeler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "SSCB'nin dağılmasıyla Bağımsız Devletler Topluluğu (BDT) kurulmuş, Minsk antlaşması imzalanmış ve Soğuk Savaş bitmiştir. Ancak 1992'de başlayan Bosna Savaşı, SSCB'nin değil Yugoslavya'nın dağılması sürecinin bir parçasıdır.",
    answers: [
      { text: "Bağımsız Devletler Topluluğunun kurulması", ok: false },
      { text: "Minsk Antlaşması'nın imzalanması", ok: false },
      { text: "Soğuk Savaş Dönemi'nin sona ermesi", ok: false },
      { text: "Komünist iktidarların yıkılması", ok: false },
      { text: "Bosna Savaşı'nın başlaması", ok: true }
    ]
  },
  {
    text: "<p><b>İran İslam devriminin gerçekleşmesi ve Humeyni'nin iktidara gelmesinde aşağıdaki devletlerden hangisinin katkısı daha fazla olmuştur?</b></p>",
    diff: 3,
    expl: "Şah yönetimine karşı muhalefet eden Ayetullah Humeyni, sürgün yıllarını (özellikle son dönemini) Fransa'da (Paris yakınlarında) geçirmiş ve devrimi kasetler, mesajlar yoluyla oradan yöneterek 1979'da İran'a dönmüştür.",
    answers: [
      { text: "Fransa", ok: true },
      { text: "SSCB", ok: false },
      { text: "Türkiye", ok: false },
      { text: "ABD", ok: false },
      { text: "İtalya", ok: false }
    ]
  },
  {
    text: "<p><b>1980 yılında Irak-İran Savaşı'nın başlaması aşağıdaki oluşumlardan hangisinin önemini kaybettiğinin göstergesidir?</b></p>",
    diff: 2,
    expl: "Orta Doğu'daki en büyük iki İslam ülkesinin 8 yıl boyunca birbirleriyle savaşması, İslam dünyasında birlik ve barışı sağlamak için 1969'da kurulan \"İslam Konferansı Örgütü\"nün (İİT) işlevsiz kaldığını ve önemini yitirdiğini gösterir.",
    answers: [
      { text: "İslam Konferansı Örgütü", ok: true },
      { text: "Bağdat Paktı", ok: false },
      { text: "Bağlantısızlar Hareketi", ok: false },
      { text: "Şangay Beşlisi", ok: false },
      { text: "COMECON", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB'nin dağılması ile;</b></p><p>I. Cominform,<br>II. Varşova Paktı,<br>III. COMECON</p><p><b>teşkilatlarından hangileri önemini kaybetmiştir?</b></p>",
    diff: 1,
    expl: "SSCB'nin (Doğu Blokunun) çökmesiyle, bu bloğun siyasi (Cominform), askeri (Varşova Paktı) ve ekonomik (COMECON) tüm teşkilatları varlık nedenini yitirerek tamamen dağılmış ve tarihe karışmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p>I. Sırp lider Miloşeviç'in izlediği politikalar<br>II. Tito'nun ölümü ile ortaya çıkan yönetim anlayışı<br>III. Bosna Savaşı'nın başlaması</p><p><b>durumlarından hangilerinin Yugoslavya'nın dağılış sürecine etki ettiği söylenebilir?</b></p>",
    diff: 3,
    expl: "Yugoslavya'yı bir arada tutan lider Tito'nun ölümü ve ardından gelen Sırp lider Slobodan Miloşeviç'in aşırı Sırp milliyetçisi politikaları dağılmanın asıl nedenleridir. Bosna Savaşı ise dağılma sürecinin bir nedeni değil, en acı 'sonucudur'.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1980 sonrası Türkiye'de görülen gelişmeler arasında aşağıdakilerden hangisi <u>yer almaz</u>?</b></p>",
    diff: 2,
    expl: "24 Ocak Kararları (1980), YÖK (1981), özel kanallar (1990'lar) ve 6 sıfırın atılması (2005) 1980 sonrasıdır. Ancak Devlet Planlama Teşkilatı'nın (DPT) kurulması 27 Mayıs 1960 darbesinden sonradır (1980 öncesi).",
    answers: [
      { text: "24 Ocak Kararları", ok: false },
      { text: "YÖK'ün kurulması", ok: false },
      { text: "Türk lirasından altı sıfır atılması", ok: false },
      { text: "Devlet Planlama Teşkilatının kurulması", ok: true },
      { text: "Özel televizyon kanallarının yayına başlaması", ok: false }
    ]
  },
  {
    text: "<p><b>I. Körfez Savaşı ile ilgili aşağıdakilerden hangisi doğru nitelikte <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "Irak'ın Kuveyt'i işgaliyle başlayan I. Körfez Savaşı 1990-1991 tarihindedir. 1 Mart Tezkeresi (2003) ise ABD'nin Irak'ı ikinci kez işgal ettiği II. Körfez Savaşı öncesinde TBMM'de reddedilerek Türkiye-ABD ilişkilerini geren olaydır.",
    answers: [
      { text: "Irak'ın Kuveyt'e saldırması ile savaş başlamıştır.", ok: false },
      { text: "ABD ve Arap ülkeleri Kuveyt'ten yana tavır sergilemiştir.", ok: false },
      { text: "ABD tarafından Irak'a \"Çöl Fırtınası\" operasyonu yapılmıştır.", ok: false },
      { text: "Savaş sonucunda Irak tazminata mahkûm edilmiştir.", ok: false },
      { text: "1 Mart Tezkiresi sebebi ile Türkiye ve ABD arasındaki ilişkilerin bozulmasına etki etmiştir.", ok: true }
    ]
  },
  {
    text: "<p><b>Güney Osetya Savaşı'ndan sonra Bağımsız Devletler Topluluğu üyeliğinden ayrılan devlet aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "2008 yılında Güney Osetya nedeniyle Rusya ile savaşa giren ve toprakları (Abhazya dâhil) işgal edilen Gürcistan, bu olayın ardından 2009 yılında BDT (Bağımsız Devletler Topluluğu) üyeliğinden resmen ayrılmıştır.",
    answers: [
      { text: "Gürcistan", ok: true },
      { text: "Özbekistan", ok: false },
      { text: "Türkmenistan", ok: false },
      { text: "Beyaz Rusya", ok: false },
      { text: "Azerbaycan", ok: false }
    ]
  },
  {
    text: "<p><b>SSCB lideri Mihail Gorbaçov;</b></p><p>I. Glasnost,<br>II. Perestroyka,<br>III. New Deal</p><p><b>politikalarından hangilerini uygulamıştır?</b></p>",
    diff: 1,
    expl: "Gorbaçov, SSCB'yi kurtarmak için Glasnost (Açıklık/Şeffaflık) ve Perestroyka (Yeniden Yapılandırma) politikalarını uygulamıştır. New Deal (Yeni Düzen) ise 1929 krizine karşı ABD Başkanı Roosevelt'in uyguladığı politikadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1991'de Nur Sultan Nazarbayev önderliğinde bağımsızlığını kazanan Orta Asya Türk Cumhuriyeti aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1991 yılında SSCB'nin dağılmasıyla bağımsız olan ve 2019 yılına kadar ülkeyi yöneten Kurucu Cumhurbaşkanı Nursultan Nazarbayev'in önderlik ettiği ülke Kazakistan'dır.",
    answers: [
      { text: "Özbekistan", ok: false },
      { text: "Kırgızistan", ok: false },
      { text: "Türkmenistan", ok: false },
      { text: "Azerbaycan", ok: false },
      { text: "Kazakistan", ok: true }
    ]
  },
  {
    text: "<p><b>24 Ocak 1992'de Türk dilinin konuşulduğu ülkeler ve Türkiye'ye komşu ülkeler arasında ticari, ekonomik, teknik, sosyal, kültürel ve eğitim alanlarında iş birliğini geliştirme amaçlı kurulan teşkilat aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "SSCB'nin dağılmasıyla bağımsız olan Türk cumhuriyetleri başta olmak üzere, komşu ve akraba topluluklara kalkınma yardımı sağlamak ve koordinasyonu yürütmek için 1992'de TİKA (Türk İşbirliği ve Koordinasyon Ajansı Başkanlığı) kurulmuştur.",
    answers: [
      { text: "TİKA", ok: true },
      { text: "TÜRKSOY", ok: false },
      { text: "KEİ", ok: false },
      { text: "Kyoto Protokolü", ok: false },
      { text: "Yurt Dışı Türkler ve Akraba Topluluklar Başkanlığı", ok: false }
    ]
  },
  {
    text: "<p><b>Türk mühendisler tarafından üretilen Türkiye'deki ilk otomotiv aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1961 yılında dönemin Cumhurbaşkanı Cemal Gürsel'in talimatıyla Eskişehir'de tamamen Türk mühendisler tarafından tasarlanıp üretilen ilk yerli otomobilin adı 'Devrim'dir.",
    answers: [
      { text: "Kanuni", ok: false },
      { text: "Proton", ok: false },
      { text: "Doğan", ok: false },
      { text: "Devrim", ok: true },
      { text: "Türk Kuşu", ok: false }
    ]
  },
  {
    text: "<p><b>2015 Nobel Kimya Ödülü'nü kazanan Türk bilim insanı aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Hücrelerin hasar gören DNA'ları nasıl onardığını ve genetik bilgisini nasıl koruduğunu haritalandıran çalışmalarıyla 2015 Nobel Kimya Ödülü'nü kazanan dünyaca ünlü Türk bilim insanı Prof. Dr. Aziz Sancar'dır.",
    answers: [
      { text: "Aziz Sancar", ok: true },
      { text: "Fuad Köprülü", ok: false },
      { text: "Oktay Sinanoğlu", ok: false },
      { text: "Ercüment Ovalı", ok: false },
      { text: "Mehmet Öz", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye Cumhuriyeti'nde 12 Eylül 1980 sonrasında;</b></p><p>I. Cumhuriyet Senatosunun faaliyete geçmesi,<br>II. 12 Temmuz Beyannamesi'nin yayımlanması,<br>III. Yükseköğretim Kurulunun oluşturulması</p><p><b>gelişmelerinden hangileri yaşanmıştır?</b></p>",
    diff: 3,
    expl: "Yükseköğretim Kurulu (YÖK) 1981 yılında (12 Eylül 1980 darbesinden sonra) kurulmuştur. Cumhuriyet Senatosu 1961'de kurulup 1980 darbesiyle kapatılmış, 12 Temmuz Beyannamesi ise 1947'de yayımlanmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Prof Dr. Turan Yazgan tarafından İsmail Gaspıralı'nın \"Dilde, fikirde, işte birlik\" ilkesini yaşama geçirmek için kurulan kültürel teşkilat aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Türk dünyası ile bağları güçlendirmek, Gaspıralı İsmail Bey'in idealini yaşatmak için Prof. Dr. Turan Yazgan tarafından kurulan sivil ve kültürel organizasyon Türk Dünyası Araştırmaları Vakfı'dır.",
    answers: [
      { text: "Yunus Emre Enstitüsü", ok: false },
      { text: "TÜRKSOY", ok: false },
      { text: "Türk Dünyası Araştırmaları Vakfı", ok: true },
      { text: "Türk İşbirliği ve Koordinasyon Ajansı Başkanlığı", ok: false },
      { text: "Türk Ocakları", ok: false }
    ]
  }
];