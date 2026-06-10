import type { McQ } from "../../../../types";

// ============================================================================
// TEMEL HAK VE ÖZGÜRLÜKLER - TEST 1
// ============================================================================
export const VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_1: McQ[] = [
  {
    text: "<p>Hukuk öğrencisi Kadir, temel hak ve hürriyetlerin sınırlandırılması ile ilgili bir araştırma yapmaktadır. Olağan dönemlerde hak ve özgürlüklerin hangi ilkelere bağlı olarak sınırlandırılabileceğini öğrenmek ister.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisi, Kadir'in araştırması kapsamında ulaştığı sonuçlardan biri olamaz?</b></p>",
    diff: 2,
    expl: "Temel hak ve hürriyetler, özlerine dokunulmaksızın yalnızca Anayasanın ilgili maddelerinde belirtilen sebeplere bağlı olarak ve ancak kanunla sınırlanabilir. Cumhurbaşkanlığı kararnamesi ile (olağan dönemlerde) temel haklar sınırlandırılamaz.",
    answers: [
      { text: "Sınırlamalar, demokratik toplum düzenine aykırı olamaz.", ok: false },
      { text: "Cumhurbaşkanı kararnamesi ile temel haklar sınırlandırılabilir.", ok: true },
      { text: "Sınırlamalar, Anayasa'nın sözüne ve ruhuna aykırı olamaz.", ok: false },
      { text: "Ölçülülük ilkesi gözetilmelidir.", ok: false },
      { text: "Sınırlamalar, Anayasa'nın ilgili maddelerinde belirtilen özel sınırlama sebeplerine dayanmalıdır.", ok: false }
    ]
  },
  {
    text: "<p>I. Savaş<br>II. Sıkıyönetim<br>III. Olağanüstü hâl<br><br><b>1982 Anayasası'na göre, yukarıdakilerden hangileri temel hak ve hürriyetlerin kullanılmasının kısmen veya tamamen durdurulmasını gerektiren sebepler arasında yer alır?</b></p>",
    diff: 2,
    expl: "Savaş, seferberlik veya olağanüstü hâllerde, milletlerarası hukuktan doğan yükümlülükler ihlal edilmemek kaydıyla, durumun gerektirdiği ölçüde temel hak ve hürriyetlerin kullanılması kısmen veya tamamen durdurulabilir. (Not: 2017 değişikliği öncesi Sıkıyönetim de bu kapsamdaydı, soru bu tarihi yapıyı yansıtmaktadır).",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda düzenlenen çekirdek alana dokunma yasağı ile ilgili olarak aşağıda verilen bilgilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Savaş, seferberlik ve olağanüstü hâllerde mutlak dokunulmaz haklar olan çekirdek haklar dışında diğer tüm temel hak ve hürriyetler kısmen veya tamamen durdurulabilir. Ancak 'İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz' kuralı çekirdek haklardan biri değil, olağan dönem kanuni hakim güvencesinin bir parçasıdır.",
    answers: [
      { text: "Savaş hukukuna uygun fiiller sonucu meydana gelen ölümler dışında, kişinin yaşama hakkına dokunulamaz.", ok: false },
      { text: "İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz.", ok: true },
      { text: "Kimsenin maddi ve manevi bütünlüğüne dokunulamaz, işkence yasaktır.", ok: false },
      { text: "Kimse din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanamaz ve bunlardan dolayı suçlanamaz.", ok: false },
      { text: "Suçluluğu mahkeme kararıyla saptanuncaya kadar kimse suçlu sayılamaz, masumiyet karinesi esastır.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, olağanüstü dönemlerde temel hak ve hürriyetlerin kullanılmasının durdurulmasıyla ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Temel hak ve hürriyetlerin kullanılması olağanüstü hâllerde durumun gerektirdiği ölçüde kısmen veya tamamen durdurulabilir. 'Tamamen durdurulamaz' ifadesi Anayasa'ya aykırıdır.",
    answers: [
      { text: "Savaş, seferberlik veya olağanüstü hâller dışında temel hak ve hürriyetler durdurulamaz.", ok: false },
      { text: "Temel hak ve hürriyetler durdurulurken durumun gerektirdiği ölçüye aykırı davranılamaz.", ok: false },
      { text: "Temel hak ve hürriyetlerin kullanılması kısmen durdurulabilir ancak tamamen durdurulamaz.", ok: true },
      { text: "Savaş hukukuna uygun fiiller sonucu meydana gelen ölümler dışında, kişinin yaşama hakkına dokunulamaz.", ok: false },
      { text: "Kimse din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanamaz ve bunlardan dolayı suçlanamaz.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, olağanüstü hâl ilan edilen yerde aşağıdaki tedbirlerden hangisinin alınması mümkün değildir?</b></p>",
    diff: 3,
    expl: "Olağanüstü hâllerde bile çekirdek haklara dokunulamaz. Kişinin din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanması çekirdek hak ihlalidir ve olağanüstü hâlde dahi mümkün değildir.",
    answers: [
      { text: "Anayasada belirtilen azami gözaltı sürelerinin uzatılması", ok: false },
      { text: "Yurt dışına çıkmanın izne bağlanması", ok: false },
      { text: "Gözaltında bulunan kişinin din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanması", ok: true },
      { text: "Haberleşme araçlarına erişimin kısıtlanması", ok: false },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkının askıya alınması", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, devletin hem olağan hem de olağanüstü durumlarda temel hak ve hürriyetleri sınırlandırmasının ortak sınırı;</b><br><br>I. ölçülülük ilkesi,<br>II. Anayasa'nın sözüne ve ruhuna uygunluk,<br>III. kanunla sınırlama<br><br><b>verilenlerden hangileridir?</b></p>",
    diff: 3,
    expl: "Temel hak ve hürriyetlerin sınırlandırılmasında olağan dönemlerde kanunla sınırlama, anayasanın sözüne ve ruhuna uygunluk aranırken; olağanüstü hâllerde devlet kamu düzenini sağlamak amacıyla daha geniş şekilde sınırlayabilir. Ancak hangi dönem olursa olsun 'ölçülülük ilkesi' her iki rejim için de ortak sınır olarak kabul edilmiştir.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, yabancılar için temel hak ve hürriyetlerin sınırlanması ile ilgili aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "Temel hak ve hürriyetler, yabancılar için milletlerarası hukuka uygun olarak kanunla sınırlanabilir.",
    answers: [
      { text: "Kanunla", ok: false },
      { text: "Herhangi bir idari işlemle", ok: false },
      { text: "Milletlerarası hukuka uygun olarak kanunla", ok: true },
      { text: "Kolluk makamlarının emriyle", ok: false },
      { text: "Mahkeme kararıyla", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, 1982 Anayasası'nın \"Kişinin Hakları ve Ödevleri\" bölümünde yer almaz?</b></p>",
    diff: 2,
    expl: "Kıyılardan yararlanma hakkı, kamu yararı amacı güden sosyal ve ekonomik haklar başlığı altında düzenlenmiştir (Pozitif statü hakları). Diğer seçenekler kişinin temel hak ve ödevleri (Negatif statü) arasındadır.",
    answers: [
      { text: "Dernek kurma hürriyeti", ok: false },
      { text: "Düzeltme ve cevap hakkı", ok: false },
      { text: "Hak arama hürriyeti", ok: false },
      { text: "Kıyılardan yararlanma", ok: true },
      { text: "Zorla çalıştırma yasağı", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi \"Siyasi Hak ve Ödevler\" bölümünde düzenlenen haklardan değildir?</b></p>",
    diff: 2,
    expl: "Toplantı ve gösteri yürüyüşü düzenleme hakkı kişi hak ve hürriyetleri (Negatif Statü Hakları) kapsamında düzenlenmiştir. Siyasi haklar arasında yer almaz.",
    answers: [
      { text: "Dilekçe hakkı", ok: false },
      { text: "Vatan hizmeti", ok: false },
      { text: "Bilgi edinme hakkı", ok: false },
      { text: "Kamu hizmetine girme hakkı", ok: false },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkı", ok: true }
    ]
  },
  {
    text: "<p>Mert, insan hakları dersinde Anayasa'da düzenlenen temel hak ve hürriyetleri aşağıdaki gibi not alıyor.<br><br><b>Kişi Hakları ve Ödevleri</b><br>• Toplantı ve gösteri yürüyüşü düzenleme hakkı<br>• İspat hakkı<br><br><b>Sosyal ve Ekonomik Hak ve Ödevler</b><br>• Mülkiyet hakkı<br>• Devletleştirme ve özelleştirme<br><br><b>Siyasi Hak ve Ödevler</b><br>• Vatan hizmeti<br>• Vergi ödevi<br><br><b>1982 Anayasası'na göre Mert, temel hak ve hürriyetlerden hangisini yanlış tarafa yazmıştır?</b></p>",
    diff: 2,
    expl: "Mülkiyet hakkı, Anayasa'da 'Kişi hak ve ödevleri' (Negatif statü) kapsamında düzenlenmiştir. Sosyal ve ekonomik haklar arasında değildir.",
    answers: [
      { text: "İspat hakkı", ok: false },
      { text: "Mülkiyet hakkı", ok: true },
      { text: "Vergi ödevi", ok: false },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkı", ok: false },
      { text: "Devletleştirme ve özelleştirme", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda kişinin yaşam hakkına Devletin müdahale edebilmesinin haklı gerekçeleri arasında aşağıdakilerden hangisi gösterilemez?</b></p>",
    diff: 2,
    expl: "Mahkemelerce verilen ölüm cezalarının infazı Anayasamızdan 2004 yılında tamamen çıkarılmıştır. Yaşam hakkına müdahale gerekçeleri arasında sayılamaz.",
    answers: [
      { text: "Meşru müdafaa hâli", ok: false },
      { text: "Bir ayaklanmanın bastırılması", ok: false },
      { text: "Mahkemelerce verilen ölüm cezalarının infazı", ok: true },
      { text: "Yakalama kararlarının yerine getirilmesi", ok: false },
      { text: "Bir hükümlünün kaçmasının önlenmesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi devletin kişileri zorla çalıştırabileceği durumlardan biri değildir?</b></p>",
    diff: 2,
    expl: "Madde 18'e göre zorla çalıştırma (angarya) yasaktır. Ancak hükümlülük/tutukluluk süreleri içindeki çalışmalar, OHAL'de istenecek hizmetler ve vatandaşlık ödevi niteliğindeki çalışmalar angarya sayılmaz. Eğitim süreci içindeki çalışmalar bu istisnalar arasında anayasal olarak listelenmemiştir.",
    answers: [
      { text: "Tutukluluk süresi içindeki çalışmalar", ok: false },
      { text: "Olağanüstü hâllerde vatandaşlardan istenecek hizmetler", ok: false },
      { text: "Hükümlülük süresi içindeki çalışmalar", ok: false },
      { text: "Ülke ihtiyaçlarının zorunlu kıldığı alanlarda öngörülen vatandaşlık ödevi niteliğindeki beden ve fikir çalışmaları", ok: false },
      { text: "Eğitim süreci içindeki çalışmalar", ok: true }
    ]
  },
  {
    text: "<p>• Polis ekipleri, hırsızlık suçu şüphesiyle yakalanan bir kişiyi gözaltına alıyor.<br>• Benzer bir olayın organize suç çetesi tarafından gerçekleştirildiği tespit ediliyor ve sekiz kişi gözaltına alınıyor.<br><br><b>1982 Anayasası'na göre, bu kişilerin sırasıyla tutulma yerine en yakın mahkemeye gönderilmesi için gerekli süreler hariç en geç ne kadar süre içerisinde hâkim karşısına çıkarılmaları gerekir?</b></p>",
    diff: 3,
    expl: "Anayasa'nın 19. maddesine göre, yakalanan bir kişi en geç 48 saat içinde hâkim önüne çıkarılmalıdır. Eğer suç toplu olarak işlenmişse (organize), bu süre en fazla 4 güne kadar uzatılabilir.",
    answers: [
      { text: "24 saat - 3 gün", ok: false },
      { text: "48 saat - 4 gün", ok: true },
      { text: "48 saat - 6 gün", ok: false },
      { text: "72 saat - 4 gün", ok: false },
      { text: "96 saat - 8 gün", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi, 1982 Anayasası'na göre tutuklamayı meşru kılan unsurlardan biri değildir?</b></p>",
    diff: 2,
    expl: "Suçluluğu hakkında kuvvetli belirti bulunan kişiler, ancak kaçmalarını, delillerin yok edilmesini veya değiştirilmesini önlemek maksadıyla hâkim kararıyla tutuklanabilir. Suçun cezasının 5 yıldan fazla olması Anayasal bir tutuklama kriteri değildir.",
    answers: [
      { text: "Delil karartma tehlikesi", ok: false },
      { text: "Kuvvetli suç şüphesi", ok: false },
      { text: "Hâkim kararı", ok: false },
      { text: "Suçun cezasının 5 yıldan fazla olması", ok: true },
      { text: "Kaçma ihtimali", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi kişinin yerleşme hürriyetine müdahale edilmesinin haklı gerekçelerinden biri olamaz?</b></p>",
    diff: 2,
    expl: "Yerleşme hürriyeti; suç işlenmesini önlemek, sosyal ve ekonomik gelişmeyi sağlamak, sağlıklı ve düzenli kentleşmeyi gerçekleştirmek ve kamu mallarını korumak amaçlarıyla sınırlanabilir. 'Genel ahlakı korumak' yerleşme hürriyetinin özel sınırlandırma sebepleri arasında yoktur.",
    answers: [
      { text: "Suç işlenmesini önlemek", ok: false },
      { text: "Kamu mallarını korumak", ok: false },
      { text: "Sağlıklı ve düzenli kentleşmeyi sağlamak", ok: false },
      { text: "Genel ahlakı korumak", ok: true },
      { text: "Sosyal ve ekonomik gelişmeyi sağlamak", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HAK VE ÖZGÜRLÜKLER - TEST 2
// ============================================================================
export const VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_2: McQ[] = [
  {
    text: "<p>İş insanı Erdem, yurt dışında bir toplantıya katılmak için havalimanına gelir. Ancak Erdem'in yurt dışına çıkışı yetkililerce engellenir. Bunun üzerine Erdem, yetkililere bu kararın hangi makam tarafından alındığını sorar.<br><br><b>1982 Anayasası'na göre, Erdem'in yurt dışına çıkışının sınırlandırılması suç soruşturması ve kovuşturması sebebiyle hangi merci tarafından karara bağlanmış olmalıdır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, vatandaşın yurt dışına çıkma hürriyeti, ancak suç soruşturması veya kovuşturması sebebiyle hâkim kararına bağlı olarak sınırlanabilir. Vatandaş sınır dışı edilemez ve yurda girme hakkından yoksun bırakılamaz.",
    answers: [
      { text: "İçişleri Bakanlığı", ok: false },
      { text: "Cumhuriyet Başsavcılığı", ok: false },
      { text: "Hâkim", ok: true },
      { text: "Kolluk amiri", ok: false },
      { text: "Ticaret odası", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, \"Hiç kimse, yalnızca sözleşmeden doğan bir yükümlülüğü yerine getirememesinden dolayı özgürlüğünden alıkonulamaz.\" güvencesi aşağıdaki başlıklardan hangisinin altında düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Anayasa'nın 38. maddesinde yer alan 'Hiç kimse, yalnızca sözleşmeden doğan bir yükümlülüğü yerine getirememesinden dolayı özgürlüğünden alıkonulamaz' hükmü, 'Suç ve cezalara ilişkin esaslar' başlığı altında düzenlenmiştir.",
    answers: [
      { text: "Zorla çalıştırılma yasağı", ok: false },
      { text: "Çalışma ve sözleşme özgürlüğü", ok: false },
      { text: "Suç ve cezalara ilişkin esaslar", ok: true },
      { text: "Kişi hürriyeti ve güvenliği", ok: false },
      { text: "Kişi dokunulmazlığı, maddi ve manevi varlığı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'ndaki \"Kimseye işkence ve eziyet yapılamaz; kimse insan haysiyetiyle bağdaşmayan bir cezaya veya muameleye tabi tutulamaz.\" güvencesini içeren hüküm aşağıdaki başlıklardan hangisinin altında düzenlenmiştir?</b></p>",
    diff: 1,
    expl: "Anayasa madde 17'ye göre, herkes yaşama, maddi ve manevi varlığını koruma ve geliştirme hakkına sahiptir. Kimseye işkence ve eziyet yapılamaz. Bu hükümler 'Kişinin dokunulmazlığı, maddi ve manevi varlığı' başlığı altında yer alır.",
    answers: [
      { text: "Kişi hürriyeti ve güvenliği", ok: false },
      { text: "Kişi dokunulmazlığı, maddi ve manevi varlığı", ok: true },
      { text: "Zorla çalıştırılma yasağı", ok: false },
      { text: "Bilim ve sanat hürriyeti", ok: false },
      { text: "Kanuni hâkim güvencesi", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de kişisel verilerin korunmasını isteme hakkı, 1982 Anayasası'na hangi yıl yapılan değişiklikle eklenerek yasal güvence altına alınmıştır?</b></p>",
    diff: 3,
    expl: "2010 yılında yapılan Anayasa değişikliği ile, herkes, kendisiyle ilgili kişisel verilerin korunmasını isteme hakkına sahip olmuştur. Bu hak, özel hayatın gizliliği kapsamındadır.",
    answers: [
      { text: "1995", ok: false },
      { text: "2001", ok: false },
      { text: "2004", ok: false },
      { text: "2007", ok: false },
      { text: "2010", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'ndaki \"Herkes, kendisiyle ilgili kişisel verilerin korunmasını isteme hakkına sahiptir.\" güvencesini içeren hüküm aşağıdaki başlıklardan hangisinin altında düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Herkes, özel hayatına ve aile hayatına saygı gösterilmesini isteme hakkına sahiptir. Kişisel verilerin korunmasını isteme hakkı da 2010 değişikliği ile Anayasa'nın 'Özel hayatın gizliliği' maddesi kapsamına eklenmiştir.",
    answers: [
      { text: "Kişi hürriyeti ve güvenliği", ok: false },
      { text: "Özel hayatın gizliliği", ok: true },
      { text: "Kişinin dokunulmazlığı, maddi ve manevi varlığı", ok: false },
      { text: "Düşünce ve kanaat hürriyeti", ok: false },
      { text: "Haberleşme hürriyeti", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na aşağıdakilerden hangisi Anayasa'nın 1'inci, 2'nci ve 3'üncü maddeleri hükümlerinin değiştirilmesini sağlamak amacıyla kullanılamaz?</b></p>",
    diff: 3,
    expl: "Madde 27 - Herkes, bilim ve sanatı serbestçe öğrenme ve öğretme, açıklama, yayma ve bu alanlarda her türlü araştırma hakkına sahiptir. Yayma hakkı, Anayasa'nın 1'inci, 2'nci ve 3'üncü maddeleri hükümlerinin değiştirilmesini sağlamak amacıyla kullanılamaz.",
    answers: [
      { text: "Düşünce ve kanaat hürriyeti", ok: false },
      { text: "Bilim ve sanatı yayma hakkı", ok: true },
      { text: "Dernek kurma hürriyeti", ok: false },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkı", ok: false },
      { text: "Haberleşme hürriyeti", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, kişilerin haysiyet ve şereflerine dokunulması veya kendileriyle ilgili gerçeğe aykırı yayınlar yapılması hâllerinde tanınan ve kanunla düzenlenen hak aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Madde 32 - Düzeltme ve cevap hakkı, ancak kişilerin haysiyet ve şereflerine dokunulması veya kendileriyle ilgili gerçeğe aykırı yayınlar yapılması hâllerinde tanınır ve kanunla düzenlenir.",
    answers: [
      { text: "Basın hürriyeti", ok: false },
      { text: "Hak arama hürriyeti", ok: false },
      { text: "Düzeltme ve cevap hakkı", ok: true },
      { text: "İspat hakkı", ok: false },
      { text: "Kanuni hâkim güvencesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, suç ve cezalara ilişkin esaslar ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Anayasa madde 38'e göre; kanuna aykırı olarak elde edilmiş bulgular, delil olarak kabul edilemez.",
    answers: [
      { text: "İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz.", ok: false },
      { text: "Kimse yalnızca sözleşmeden doğan bir yükümlülüğü yerine getiremediği için hürriyetinden alıkonulamaz.", ok: false },
      { text: "Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konur.", ok: false },
      { text: "Kanuna aykırı elde edilen bulgular delil olarak kabul edilebilir.", ok: true },
      { text: "Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz.", ok: false }
    ]
  },
  {
    text: "<p>I. Devlet<br>II. Vatandaşlar<br>III. Türkiye'de ikamet eden yabancılar<br><br><b>1982 Anayasası'na göre, çevreyi geliştirmek, çevre sağlığını korumak ve çevrenin kirlenmesini önlemek yukarıdakilerden hangilerinin ödevidir?</b></p>",
    diff: 2,
    expl: "Madde 56 - Herkes, sağlıklı ve dengeli bir çevrede yaşama hakkına sahiptir. Çevreyi geliştirmek, çevre sağlığını korumak ve çevre kirlenmesini önlemek devletin ve vatandaşların ödevidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nın 38. maddesinin son fıkrasında yer alan; \"--- taraf olmanın gerektirdiği yükümlülükler hariç olmak üzere, vatandaş, suç sebebiyle yabancı bir ülkeye verilemez.\" ifadesinde boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Bu ifade, Türkiye'nin Roma Statüsü'ne taraf olması durumunda, Uluslararası Ceza Divanına (UCD/ICC) vatandaş iadesi yapılabileceğini öngörmektedir.",
    answers: [
      { text: "Avrupa İnsan Hakları Mahkemesi", ok: false },
      { text: "Uluslararası Ceza Divanı", ok: true },
      { text: "Lahey Adalet Divanı", ok: false },
      { text: "Avrupa Toplulukları Adalet Divanı", ok: false },
      { text: "Uluslararası Deniz Hukuku Mahkemesi", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisi 1982 Anayasası ile güvence altına alınan masumiyet karinesinin ihlali olarak değerlendirilebilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, suçluluğu mahkeme kararı ile saptanıncaya kadar kimse suçlu sayılamaz. Masumiyet karinesi gereği, bir kişi mahkeme kararı olmadan suçlu ilan edilemez. Soruşturma aşamasındaki kişinin suçlu tanıtılması ihlaldir.",
    answers: [
      { text: "Mahkeme kararıyla hüküm giymiş bir kişinin suçlu ilan edilmesi", ok: false },
      { text: "Şüpheli bir kişi hakkında savcının iddianame hazırlanması", ok: false },
      { text: "Soruşturma aşamasındaki bir kişinin \"suçlu\" olarak tanıtılması", ok: true },
      { text: "Sanığın delil sunarak kendini savunması", ok: false },
      { text: "Savcı tarafından bir kişi hakkında kamu davası açılması", ok: false }
    ]
  },
  {
    text: "<p>Seyyar satıcı Osman, belediye zabıta ekipleri tarafından tutulur ve bir gün boyunca serbest bırakılmaz.<br><br><b>1982 Anayasası'na göre, belediyenin bu uygulaması aşağıdakilerden hangisine aykırıdır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'na göre, idare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz. Kişi özgürlüğünü kısıtlayan müeyyideler yalnızca yargı kararlarıyla uygulanabilir.",
    answers: [
      { text: "İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz.", ok: true },
      { text: "Kimse yalnızca sözleşmeden doğan bir yükümlülüğünü yerine getiremediği için hürriyetinden alıkonulamaz.", ok: false },
      { text: "Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konur.", ok: false },
      { text: "Kanuna aykırı elde edilen bulgular delil olarak kabul edilebilir.", ok: false },
      { text: "Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz.", ok: false }
    ]
  },
  {
    text: "<p>Ahmet, 2022 yılında işlediği bir fiilden dolayı 2024 yılında yürürlüğe giren yeni bir ceza yasasına göre yargılanmaktadır. Ancak avukatı, bu durumun Anayasa'ya aykırı olduğunu iddia ederek itiraz eder.<br><br><b>Bu itiraz, aşağıdaki anayasal ilkelerden hangisine dayanmaktadır?</b></p>",
    diff: 1,
    expl: "Anayasa Md. 38/1'e göre, suçun işlendiği tarihte yürürlükte olmayan bir yasa, sanık aleyhine uygulanamaz. Cezaların geçmişe yürütülememesi ilkesi, hukukun temel prensiplerindendir.",
    answers: [
      { text: "Ceza sorumluluğu şahsidir.", ok: false },
      { text: "Ceza ve güvenlik tedbirleri ancak kanunla konulur.", ok: false },
      { text: "Hukuka aykırı deliller delil olarak kullanılamaz.", ok: false },
      { text: "Suç ve cezalar geçmişe yürütülemez.", ok: true },
      { text: "Hiç kimse kendisini suçlayan bir beyanda bulunmaya zorlanamaz.", ok: false }
    ]
  },
  {
    text: "<p>Bir kamu kurumunda çalışan Zeynep, zimmete para geçirme suçundan yargılanır ve soruşturma kapsamında görevden uzaklaştırılır. Sosyal medyada yapılan paylaşımlarda, \"Kişi devletin güvenini sarsacak bir suç işlediyse, ailesi de kamu kurumlarında çalışmamalı!\" diyerek tüm aile fertlerinin cezalandırılması gerektiği savunulur.<br><br><b>1982 Anayasası'na göre, bu ifade aşağıdaki anayasal ilkelerden hangisine aykırıdır?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 38. maddesi açıkça \"Ceza sorumluluğu şahsidir.\" ilkesini benimsemiştir. Bu ilkeye göre, bir kişinin işlediği suçtan yalnızca kendisi sorumlu tutulabilir; ailesi veya yakınları cezalandırılamaz.",
    answers: [
      { text: "Masumiyet karinesi", ok: false },
      { text: "Ceza sorumluluğu şahsidir", ok: true },
      { text: "Hukuka aykırı delil yasağı", ok: false },
      { text: "Kanunilik ilkesi", ok: false },
      { text: "Geçmişe yürütülme yasağı", ok: false }
    ]
  },
  {
    text: "<p>Bir cinayet davasında polis, sanığın evinde yetkili mercilerden izin almadan yaptığı aramada elde ettiği DNA örneklerini mahkemeye sunar. Hâkim, bu DNA örneklerini dikkate alarak sanık hakkında hüküm verir.<br><br><b>1982 Anayasası'na göre, hâkimin bu kararı, aşağıdakilerden hangisine aykırıdır?</b></p>",
    diff: 2,
    expl: "1982 Anayasası m. 38'e göre, kanuna aykırı olarak elde edilmiş bulgular, delil olarak kabul edilemez. Hukuka aykırı elde edilen deliller, mahkemede delil olarak kullanılamaz.",
    answers: [
      { text: "Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konulur.", ok: false },
      { text: "Ceza sorumluluğu şahsidir.", ok: false },
      { text: "Masumiyet karinesi gereği, kimse suçlu sayılamaz.", ok: false },
      { text: "Hukuka aykırı elde edilen deliller, delil olarak kullanılamaz.", ok: true },
      { text: "Suç ve cezalar geçmişe yürütülemez.", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HAK VE ÖZGÜRLÜKLER - TEST 3
// ============================================================================
export const VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_3: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'nın suç ve cezalara ilişkin esaslar bölümünde yer alan \"Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konulur.\" ifadesi aşağıdakilerden hangisine ilişkindir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nın 38. maddesinde yer alan \"Ceza ve ceza yerine geçen güvenlik tedbirleri ancak kanunla konulur\" hükmü, kanunilik ilkesini ifade eder. Bu ilkeye göre, bir fiilin suç sayılabilmesi ve buna ceza uygulanabilmesi ancak önceden çıkarılmış bir kanunla mümkündür.",
    answers: [
      { text: "Cezaların şahsiliği ilkesi", ok: false },
      { text: "Kusursuz ceza olmaz ilkesi", ok: false },
      { text: "Kanunilik ilkesi", ok: true },
      { text: "Devredilmezlik ilkesi", ok: false },
      { text: "Hukuka aykırılık ilkesi", ok: false }
    ]
  },
  {
    text: "<p>Bir mahkemede, sanığa ağır suçlar nedeniyle ---- cezası verilmesi talep edilmiştir. Avukat, bu ceza türlerinin anayasaya aykırı olduğunu belirterek itirazda bulunur.<br><br><b>1982 Anayasa'nın 38. maddesinde yer alan hükümlere göre, yukarıda bırakılan boşluğa;</b><br><br>I. hapis cezası,<br>II. ölüm cezası,<br>III. para cezası,<br>IV. genel müsadere cezası<br><br><b>verilenlerden hangileri getirilebilir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nda 2004 yılında yapılan Anayasa değişikliğiyle her ne sebeple olursa olsun sanık hakkında ölüm cezası ve genel müsadere cezası verilemez.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "III ve IV", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi \"kanuni hâkim güvencesi\" ilkesini doğru tanımlar?</b></p>",
    diff: 1,
    expl: "Kanuni hâkim güvencesi: Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz. Bir kimseyi kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarma sonucunu doğuran yargı yetkisine sahip olağanüstü merciler kurulamaz.",
    answers: [
      { text: "Suçluluğu hükmen sabit oluncaya kadar, kimse suçlu sayılamaz.", ok: false },
      { text: "Hiç kimse kanunen tabi olduğu mahkemeden başka bir merci önüne çıkarılamaz.", ok: true },
      { text: "İdare, kişi hürriyetinin kısıtlanması sonucunu doğuran bir müeyyide uygulayamaz.", ok: false },
      { text: "Kanuna aykırı olarak elde edilmiş bulgular, delil olarak kabul edilemez.", ok: false },
      { text: "Hâkimler, görevlerinde bağımsızdırlar; Anayasaya, kanuna ve hukuka uygun olarak vicdani kanaatlerine göre hüküm verirler.", ok: false }
    ]
  },
  {
    text: "<p>Murat ve arkadaşı Emre, bir kafede sohbet ederken, Emre, \"İdarenin mahkeme kararı olmadan bir kişiyi hürriyetinden yoksun bırakması Anayasa'ya aykırıdır.\" der. Ancak Murat, avukat olan arkadaşı Cem'e danıştığında, Cem ona Anayasa'da bunun bir istisnasının bulunduğunu söyler.<br><br><b>1982 Anayasası'na göre, bu istisna aşağıdakilerden hangisi için geçerlidir?</b></p>",
    diff: 3,
    expl: "Anayasa Md. 38/10'a göre, idare kişi özgürlüğünü doğrudan kısıtlayamaz. Bu kurala tek istisna, Türk Silahlı Kuvvetleri mensuplarına yönelik disiplin cezalarıdır.",
    answers: [
      { text: "Silahlı Kuvvetler", ok: true },
      { text: "Emniyet Genel Müdürlüğü", ok: false },
      { text: "Millî İstihbarat Başkanlığı", ok: false },
      { text: "Üniversiteler", ok: false },
      { text: "Devlet Denetleme Kurulu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre devlet, sosyal ve ekonomik alanlardaki görevlerini, bu görevlerin amaçlarına uygun öncelikleri gözeterek hangi ölçüte göre yerine getirir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'na göre, devlet, sosyal ve ekonomik alanlarda Anayasa ile belirlenen görevlerini, bu görevlerin amaçlarına uygun öncelikleri gözeterek malî kaynaklarının yeterliliği ölçüsünde yerine getirir.",
    answers: [
      { text: "Kamu düzeni ilkesi", ok: false },
      { text: "Mali kaynaklarının yeterliliği", ok: true },
      { text: "Kamu personeli ihtiyacı", ok: false },
      { text: "Planlı kalkınma ilkesi", ok: false },
      { text: "Kamu yararı ilkesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, sosyal güvenlik bakımından özel olarak korunması gerekenler arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 2,
    expl: "Sosyal güvenlik bakımından özel olarak korunması gerekenler: Harp ve vazife şehitlerinin dul ve yetimleriyle, malül ve gaziler, sakatlar, yaşlılar ve korunmaya muhtaç çocuklardır. Yoksullar bu özel sayılan gruplar arasında Anayasa'da açıkça yer almaz.",
    answers: [
      { text: "Korunmaya muhtaç çocuklar", ok: false },
      { text: "Yaşlılar", ok: false },
      { text: "Engelliler", ok: false },
      { text: "Yoksullar", ok: true },
      { text: "Gaziler", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasa'nın 13. maddesinde yer alan ve temel hakların sınırlanmasında kullanılacak \"aracın amaca uygun, zorunlu ve orantılı olmasını gerektiren\" ilke aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 13. maddesinde, temel hak ve özgürlüklerin sınırlanmasında \"ölçülülük\" ilkesine vurgu yapılmaktadır. Bu ilkeye göre, kullanılan sınırlama aracı, ulaşılmak istenen meşru amaç için gerekli, elverişli ve orantılı olmalıdır.",
    answers: [
      { text: "Kanun önünde eşitlik", ok: false },
      { text: "Hakkın kötüye kullanılmaması", ok: false },
      { text: "Demokratik toplum düzeni", ok: false },
      { text: "Ölçülülük", ok: true },
      { text: "Hakkın özü", ok: false }
    ]
  },
  {
    text: "<p>M işletmesinde, toplu iş sözleşmesi görüşmeleri sırasında, işçilerin üye olduğu sendika grev kararı alır. Ancak bu grev, genel sağlığı bozucu nitelikte olduğu gerekçesiyle ertelenir.<br><br><b>1982 Anayasası'na göre, erteleme süresi sonunda da taraflar arasında anlaşma sağlanamazsa uyuşmazlık aşağıdakilerden hangisi tarafından çözüme kavuşturulur?</b></p>",
    diff: 2,
    expl: "Madde 54 - Grev ve lokavtın yasaklandığı hâllerde veya ertelendiği durumlarda ertelemenin sonunda, uyuşmazlık Yüksek Hakem Kurulunca çözülür. Uyuşmazlığın her safhasında taraflar da anlaşarak Yüksek Hakem Kuruluna başvurabilir. Yüksek Hakem Kurulunun kararları kesindir.",
    answers: [
      { text: "Kamu Denetçiliği Kurumu", ok: false },
      { text: "Devlet Denetleme Kurulu", ok: false },
      { text: "Yüksek Hakem Kurulu", ok: true },
      { text: "Kamu Görevlileri Hakem Kurulu", ok: false },
      { text: "İşverenin bağlı olduğu meslek kuruluşu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'ndaki, \"kamu yararı\" başlığı altında aşağıdaki haklardan hangisi düzenlenmemiştir?</b></p>",
    diff: 2,
    expl: "Kamu yararı alt başlığında düzenlenen haklar şunlardır: Kıyılardan yararlanma, Toprak mülkiyeti, Tarım, hayvancılık ve bu üretim dallarında çalışanların korunması, Kamulaştırma, Devletleştirme ve Özelleştirme. Grev hakkı ve lokavt ise çalışma ile ilgili haklar arasındadır.",
    answers: [
      { text: "Kıyılardan yararlanma", ok: false },
      { text: "Tarım, hayvancılık ve bu üretim dallarında çalışanların korunması", ok: false },
      { text: "Grev hakkı ve lokavt", ok: true },
      { text: "Toprak mülkiyeti", ok: false },
      { text: "Devletleştirme ve özelleştirme", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'na göre, \"Devlet; işlemlerinde, ilgili kişilerin hangi kanun yolları ve mercilere başvuracağını ve süresini belirtmek zorundadır.\"<br><br><b>Bu hüküm, 1982 Anayasası'nda yer alan aşağıdaki başlıkların hangisinin altında düzenlenmiştir?</b></p>",
    diff: 3,
    expl: "Madde 40 - Anayasa ile tanınmış hak ve hürriyetleri ihlal edilen herkes, yetkili makama geciktirilmeden başvurma imkanının sağlanmasını isteme hakkına sahiptir. (Temel hak ve hürriyetlerin korunması başlığı altındadır). Devlet, işlemlerinde, ilgili kişilerin hangi kanun yolları ve mercilere başvuracağını ve sürelerini belirtmek zorundadır.",
    answers: [
      { text: "Hak arama hürriyeti", ok: false },
      { text: "Kişi hürriyeti ve güvenliği", ok: false },
      { text: "Temel hak ve hürriyetlerin korunması", ok: true },
      { text: "Kanuni hâkim güvencesi", ok: false },
      { text: "Düzeltme ve cevap hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki gruplardan hangisi için 1982 Anayasası'nda devlet tarafından korunma sağlanacağı belirtilmemiştir?</b></p>",
    diff: 2,
    expl: "1982 Anayasası'nda korunması gerekenler: Çocuklar, kadınlar, engelliler, yaşlılar, şehit dul ve yetimleri, gaziler, sporcular (sporun kitlelere yayılması), sanatçılar, çalışanlar ve işsizlerdir. Memurlar için özel bir korunma grubu belirtilmemiştir.",
    answers: [
      { text: "Sanatçılar", ok: false },
      { text: "Çocuklar", ok: false },
      { text: "Sporcular", ok: false },
      { text: "Memurlar", ok: true },
      { text: "İşsizler", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıda verilen eşleştirmelerden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Kilit Bilgi: Memurlar ve sözleşmeli personeller siyasi partilere üye olamaz ancak işçiler siyasi partilere üye olabilir. Bu yüzden memurların siyasi partilere üye olma hakkı yoktur.",
    answers: [
      { text: "Siyasi partilere üye olma hakkı – memurlar", ok: true },
      { text: "Grev yapma hakkı – işçiler", ok: false },
      { text: "Toplu iş sözleşmesi yapma hakkı – işçiler", ok: false },
      { text: "Sendika kurma hakkı – İşçiler ve memurlar", ok: false },
      { text: "Lokavt yapma hakkı – işveren", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Futbol Federasyonu, 2025-2026 sezonu için klasman hakem listesini yayımlar. Mehmet, açıklanan klasman hakem listesinde adının yer almadığını fark eder ve bu duruma itiraz etmek ister.<br><br><b>1982 Anayasası'na göre, Mehmet'in başvurabileceği ve kararları kesin olan yetkili merci aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Spor federasyonlarının spor faaliyetlerinin yönetimine ve disiplinine ilişkin kararlarına karşı ancak zorunlu tahkim yoluna başvurulabilir. Tahkim Kurulu kararları kesin olup bu kararlara karşı hiçbir yargı merciine başvurulamaz.",
    answers: [
      { text: "Kamu Görevlileri Hakem Kurulu", ok: false },
      { text: "Devlet Denetleme Kurulu", ok: false },
      { text: "Yüksek Hakem Kurulu", ok: false },
      { text: "Tahkim Kurulu", ok: true },
      { text: "Kamu Denetçiliği Kurumu", ok: false }
    ]
  },
  {
    text: "<p>Memurların ekonomik ve özlük haklarının iyileştirilmesi için memurlar tarafından kurulan ve üyesi oldukları Memurun Hakları Sendikası ile yapılan toplu sözleşme görüşmeleri neticesinde uyuşmazlık olur.<br><br><b>1982 Anayasası'na göre Memurun Hakları Grubu Sendikası, bu uyuşmazlığın çözümü ve yapılan görüşmelerin toplu sözleşme hükmünde olması için aşağıdakilerden hangisine başvurmalıdır?</b></p>",
    diff: 2,
    expl: "Memurlar ve diğer kamu görevlileri, toplu sözleşme yapma hakkına sahiptirler. Toplu sözleşme yapılması sırasında uyuşmazlık çıkması hâlinde taraflar Kamu Görevlileri Hakem Kuruluna başvurabilir. Kamu Görevlileri Hakem kurulu kararları kesindir ve toplu sözleşme hükmündedir.",
    answers: [
      { text: "Yüksek Hakem Kurulu", ok: false },
      { text: "Kamu Denetçiliği Kurumu", ok: false },
      { text: "Çalışma ve Sosyal Güvenlik Bakanlığı", ok: false },
      { text: "Kamu Görevlileri Hakem Kurulu", ok: true },
      { text: "Tahkim Kurulu", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Türk vatandaşlığına ilişkin aşağıda verilen ifadelerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Vatandaşlıktan çıkarma işlemlerine karşı yargı yolunun açık olduğunu unutmayalım. Bu konu ile ilgili sorularda genellikle \"Yargı yolu kapatılamaz.\" ifadesi tuzak olarak \"Yargı yolu kapalıdır.\" şeklinde sorulmaktadır.",
    answers: [
      { text: "Vatandaşlık kanunun gösterdiği şartlarda kazanılır ve kaybedilir.", ok: false },
      { text: "Türk babanın veya Türk annenin çocuğu Türk'tür.", ok: false },
      { text: "Türk devletine vatandaşlık bağı ile bağlı olan herkes Türk'tür.", ok: false },
      { text: "Vatandaşlıktan çıkarma ile ilgili işlemlere karşı yargı yolu kapalıdır.", ok: true },
      { text: "Hiçbir Türk vatana bağlılıkla bağdaşmayan bir eylemde bulunmadıkça vatandaşlıktan çıkarılamaz.", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HAK VE ÖZGÜRLÜKLER - TEST 4
// ============================================================================
export const VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_4: McQ[] = [
  {
    text: "<p>1982 Anayasası'na göre, seçimlere ilişkin ilkeler arasında;<br><br>I. genel oy,<br>II. çift dereceli seçim,<br>III. gizli oy açık sayım ve döküm,<br>IV. sınırlı oy,<br>V. yargı yönetim ve denetimi<br><br><b>verilenlerden hangileri yer almaz?</b></p>",
    diff: 2,
    expl: "Seçimler ve halk oylaması serbest, eşit, gizli, tek dereceli, genel oy, açık sayım ve döküm esaslarına göre, yargı yönetim ve denetimi altında yapılır. Çift dereceli seçim ve sınırlı oy sistemleri Anayasamıza göre uygulanamaz.",
    answers: [
      { text: "I ve III", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "II ve IV", ok: true },
      { text: "IV ve V", ok: false },
      { text: "I ve V", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre,</b><br><br>• servet, vergi, eğitim, ırk, cinsiyet ve benzeri sınırlamalar olmadan herkesin oy hakkına sahip olması,<br>• oy kullanan her vatandaşın oyunun, sonuç üzerinde aynı ağırlıkta etkili olması<br><br><b>sırasıyla aşağıdaki ilkelerden hangisine aittir?</b></p>",
    diff: 1,
    expl: "Eğitim, servet veya cinsiyet gibi farklılıklar gözetilmeksizin herkesin oy kullanabilmesi 'genel oy' ilkesidir. Her vatandaşın oyunun seçim sonucuna eşit derecede etki etmesi ise 'eşit oy' ilkesine karşılık gelir.",
    answers: [
      { text: "eşit oy - genel oy", ok: false },
      { text: "genel oy - serbest seçim", ok: false },
      { text: "genel oy - eşit oy", ok: true },
      { text: "eşit oy - tek dereceli seçim", ok: false },
      { text: "genel oy - gizli oy", ok: false }
    ]
  },
  {
    text: "<p>Siyaset bilimci Ahmet, M Vakfının düzenlediği bir söyleşide, siyasi partilere üye olamayacak kişiler hakkında bilgi vermektedir.<br><br><b>Buna göre Ahmet, aşağıdakilerden hangisi siyasi parti üyesi olabilir derse yanlış bilgi vermiş olur?</b></p>",
    diff: 3,
    expl: "Sözleşmeli kamu personeli 'kamu görevlisi' statüsünde olduğu için siyasi partilere üye olamaz. Oysa yükseköğretim elemanları, işçi statüsündeki kamu görevlileri, adalet meslek yüksekokulu öğrencileri, belediye başkanı ve meclis üyelerinin üyelikleri mümkündür.",
    answers: [
      { text: "Yükseköğretim elemanları", ok: false },
      { text: "İşçi niteliği taşıyan kamu görevlileri", ok: false },
      { text: "Adalet meslek yüksekokulu öğrencileri", ok: false },
      { text: "Sözleşmeli kamu personelleri", ok: true },
      { text: "Belediye başkanı ve belediye meclis üyeleri", ok: false }
    ]
  },
  {
    text: "<p>Anayasa madde 67'ye göre, seçim kanunları, ---- ve ---- ilkelerini bağdaştıracak biçimde düzenlenir.<br><br><b>1982 Anayasası'na göre, yukarıda boş bırakılan yerlere sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 1,
    expl: "Anayasa m.67/son fıkra: 'Seçim kanunları, temsilde adalet ile yönetimde istikrar ilkelerini bağdaştıracak biçimde düzenlenir.' Az oy alan partilerin dışlanmaması (temsilde adalet) ile hükûmetin kurulabilir olması (yönetimde istikrar) arasında denge kurulması amaçlanır.",
    answers: [
      { text: "ölçülülük - laiklik", ok: false },
      { text: "temsilde adalet - yönetimde istikrar", ok: true },
      { text: "hukuk devleti - demokratik devlet", ok: false },
      { text: "kanun önünde eşitlik - millî egemenlik", ok: false },
      { text: "yönetimde istikrar - ölçülülük", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'ndaki diğer koşulları sağlayan aşağıdakilerden hangisi seçimler ve halk oylamalarında oy kullanabilir?</b></p>",
    diff: 2,
    expl: "Silahaltında bulunan er ve erbaşlar, askerî öğrenciler ve taksirli suçlardan hüküm giyenler hariç ceza infaz kurumlarında bulunan hükümlüler oy kullanamazlar. Ancak ceza infaz kurumlarında bulunan tutuklular (henüz hüküm giymemiş olanlar) oy kullanabilir.",
    answers: [
      { text: "Silahaltındaki er", ok: false },
      { text: "Askerî öğrenci", ok: false },
      { text: "Ceza infaz kurumunda bulunan kasıtlı suçlardan hükümlüler", ok: false },
      { text: "Ceza infaz kurumlarında bulunan tutuklular", ok: true },
      { text: "Silahaltındaki erbaş", ok: false }
    ]
  },
  {
    text: "<p>TBMM'de kabul edilen yeni seçim kanunu ile seçim barajı %7'ye düşürülür. Bu değişiklik Resmî Gazete'de yayımlanır.<br><br><b>1982 Anayasası'na göre, seçim kanunu değişikliği ne zaman uygulanacaktır?</b></p>",
    diff: 1,
    expl: "Anayasa Md. 67'ye göre, seçim kanunlarıyla ilgili değişiklikler yürürlüğe girdikten sonra 1 yıl içinde yapılacak seçimlere uygulanamaz. Bu hüküm, seçim kurallarının aniden değiştirilerek seçmen iradesinin yönlendirilmesini engellemek içindir.",
    answers: [
      { text: "Yürürlüğe girdiği gün uygulanır.", ok: false },
      { text: "Bir yıl geçtikten sonra yapılacak ilk seçimde uygulanır.", ok: true },
      { text: "Yürürlüğe girdiği yıl içindeki tüm seçimlerde uygulanır.", ok: false },
      { text: "TBMM'nin belirleyeceği bir tarihte uygulanır.", ok: false },
      { text: "Yüksek Seçim Kurulu tarafından belirlenecek bir tarihte uygulanır.", ok: false }
    ]
  },
  {
    text: "<p><b>2820 sayılı Siyasi Partiler Kanunu'na göre, bir siyasi partinin kurulabilmesi için, siyasi partiye üye olma yeterliliğine sahip en az kaç Türk vatandaşı gereklidir?</b></p>",
    diff: 1,
    expl: "2820 sayılı Siyasi Partiler Kanunu'nun 8. maddesine göre, bir siyasi partinin kurulabilmesi için, siyasi partiye üye olma yeterliliğine sahip en az 30 (otuz) Türk vatandaşı gereklidir.",
    answers: [
      { text: "15", ok: false },
      { text: "20", ok: false },
      { text: "25", ok: false },
      { text: "30", ok: true },
      { text: "60", ok: false }
    ]
  },
  {
    text: "<p>Hukuk fakültesi birinci sınıf Anayasa hukuku dersinde Özgür, arkadaşı Murat'a siyasi partilere üye olamayacakları sorar.<br><br><b>Buna göre Murat, aşağıdaki cevaplardan hangisini verirse 1982 Anayasası'na göre, yanlış olur?</b></p>",
    diff: 2,
    expl: "18 yaşını doldurmuş yükseköğretim (üniversite) öğrencileri siyasi partilere üye olabilirler. Ancak yükseköğretim öncesi öğrencileri (lise öğrencileri vb.) üye olamaz. Bu nedenle 20 yaşındaki üniversite öğrencisinin üye olamayacağı bilgisi yanlıştır.",
    answers: [
      { text: "Kamu kurumlarında görev yapan memurlar partilere üye olamazlar.", ok: false },
      { text: "20 yaşındaki üniversite öğrencisi siyasi partiye üye olamaz.", ok: true },
      { text: "18 yaşındaki lise öğrencisi siyasi partiye üye olamaz.", ok: false },
      { text: "Kamu hizmetlerinden yasaklılar siyasi partiye üye olamaz.", ok: false },
      { text: "Silahlı kuvvetler mensupları siyasi partiye üye olamaz.", ok: false }
    ]
  },
  {
    text: "<p>Bir siyasi parti hakkında yapılan inceleme sonucunda partinin gelir kaynaklarını usule uygun bildirmediği anlaşılır.<br><br><b>1982 Anayasası'na göre, partinin mali denetimini aşağıdakilerden hangisi gerçekleştirmekle yükümlüdür?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 69. maddesine göre, siyasi partilerin mali denetimi Sayıştay yardımıyla Anayasa Mahkemesi tarafından yapılır.",
    answers: [
      { text: "TBMM Anayasa Komisyonu", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcılığı", ok: false },
      { text: "Anayasa Mahkemesi", ok: true },
      { text: "Sayıştay", ok: false },
      { text: "Hazine ve Maliye Bakanlığı", ok: false }
    ]
  },
  {
    text: "<p>Bir siyasi partinin;<br>• Ülke genelinde oyların % --- alması durumunda Hazine yardımı alması,<br>• Ülke genelinde oyların % --- alması durumunda milletvekili çıkararak TBMM'ye girmesi mümkündür.<br><br><b>Yukarıdaki boşluklara sırasıyla hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "2820 sayılı Siyasi Partiler Kanunu'na göre, genel seçimlerde %3 ve üzeri oy alan partilere Hazine yardımı yapılır. Milletvekili Seçimi Kanunu'na göre ise bir partinin Türkiye genelinde en az %7 oy alması, ülke barajını aşarak TBMM'ye girebilmesi için zorunludur.",
    answers: [
      { text: "%3 - %10", ok: false },
      { text: "%7 - %7", ok: false },
      { text: "%3 - %7", ok: true },
      { text: "%5 - %7", ok: false },
      { text: "%7 - %3", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi, siyasi partilerin mali denetim görevini yerine getirirken aşağıdakilerden hangisinden yardım alır?</b></p>",
    diff: 1,
    expl: "Anayasa Mahkemesi, siyasi partilerin mali denetimini gerçekleştirirken bu denetim görevini yerine getirmek için Sayıştaydan yardım alır. Kararı Anayasa Mahkemesi verir.",
    answers: [
      { text: "Yargıtay", ok: false },
      { text: "Hazine ve Maliye Bakanlığı", ok: false },
      { text: "Strateji ve Bütçe Başkanlığı", ok: false },
      { text: "Yüksek Seçim Kurulu", ok: false },
      { text: "Sayıştay", ok: true }
    ]
  },
  {
    text: "<p>I. Suç işlenmesini teşvik etmek<br>II. Demokratik hukuk devleti ilkesine aykırı davranmak<br>III. Yurt dışında teşkilatlanıp faaliyette bulunmak<br>IV. Yabancı devletlerden maddi yardım almak<br><br><b>1982 Anayasası'na göre, yukarıdakilerden hangileri siyasi partilerin kapatılma sebepleri arasında yer almaz?</b></p>",
    diff: 2,
    expl: "Suç işlenmesini teşvik etmek, demokratik hukuk devleti ilkesine aykırı davranmak ve yabancı devletlerden maddi yardım almak kapatılma sebebidir. Ancak yurt dışında teşkilatlanıp faaliyette bulunmak, kanunlara uygun olduğu sürece siyasi partiler için bir kapatılma sebebi değildir.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve IV", ok: false },
      { text: "II ve IV", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre</b><br><br>• siyasi partiler hakkında resen kapatma davası açmaya,<br>• siyasi partilerin kapatılmasına, Devlet yardımından kısmen veya tamamen yoksun bırakılmasına<br><br><b>yetkili merciler sırasıyla aşağıdakilerden hangisi doğru verilmiştir?</b></p>",
    diff: 1,
    expl: "Siyasi partilerin kapatılması davasını Yargıtay Cumhuriyet Başsavcısı açar, davayı kesin karara bağlayan merci ise Anayasa Mahkemesi'dir.",
    answers: [
      { text: "Danıştay Başsavcısı – Danıştay", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı – Anayasa Mahkemesi", ok: true },
      { text: "Danıştay Başsavcısı – Anayasa Mahkemesi", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı – Yargıtay", ok: false },
      { text: "Yargıtay Cumhuriyet Başsavcısı – Yüksek Seçim Kurulu", ok: false }
    ]
  },
  {
    text: "<p>A Partisi, milletvekili B ve C'nin beyan ve eylemleri sebebiyle temelli kapatılır.<br><br><b>1982 Anayasası'na göre, aşağıdakilerden hangisi A Partisi'nin kapatılmasının sonuçlarından biri değildir?</b></p>",
    diff: 3,
    expl: "Partinin tüzel kişiliği sona erer, mal varlığı hazineye geçer. Kapatılmaya beyan ve eylemleriyle sebep olan üyeler 5 yıl süreyle başka partinin kurucusu, üyesi veya yöneticisi olamaz. Ancak 2010 yılında yapılan değişiklikle, kapatılmaya sebep olanlar da dâhil milletvekillerinin TBMM üyeliği sona ermez.",
    answers: [
      { text: "Partinin tüzel kişiliğinin sona ermesi", ok: false },
      { text: "Partinin mal varlığının Hazineye devredilmesi", ok: false },
      { text: "Partinin milletvekillerinin TBMM üyeliğinin düşmesi", ok: true },
      { text: "Milletvekili B ve C'nin beş yıl süreyle başka bir parti kuramaması", ok: false },
      { text: "Partinin seçimlere katılmasının engellenmesi", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi gerçekleştiğinde siyasi parti hakkında sadece temelli kapatılma kararı verilir?</b></p>",
    diff: 3,
    expl: "Yabancı devletlerden, uluslararası kuruluşlardan ve Türk uyrukluğunda olmayan gerçek ve tüzel kişilerden maddi yardım alan siyasi partiler temelli olarak kapatılır. Bu ihlalde Anayasa Mahkemesi'nin 'kısmen veya tamamen hazine yardımından yoksun bırakma' gibi alternatif bir yaptırım uygulama yetkisi yoktur, doğrudan temelli kapatma kararı verilir.",
    answers: [
      { text: "Sınıf veya zümre diktatörlüğünü savunmak", ok: false },
      { text: "İnsan haklarına ve eşitlik ilkesine aykırı hareket etmek", ok: false },
      { text: "Türk uyrukluğunda olmayan kişilerden maddi yardım almak", ok: true },
      { text: "Demokratik Cumhuriyet ilkesine aykırı faaliyet yürütmek", ok: false },
      { text: "Suç işlenmesini teşvik etmek", ok: false }
    ]
  }
];

// ============================================================================
// TEMEL HAK VE ÖZGÜRLÜKLER - TEST 5
// ============================================================================
export const VAT_TEMEL_HAK_VE_OZGURLUKLER_TEST_5: McQ[] = [
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi siyasi hak ve ödevler arasında yer alır?</b></p>",
    diff: 2,
    expl: "Kamu hizmetine girme hakkı, 1982 Anayasası'nın Dördüncü Kısmı - Siyasi Haklar ve Ödevler bölümünde (m.70) yer alırken; grev hakkı (m.54) ve toplu iş sözleşmesi hakkı (m.53) sosyal haklar arasında, toplantı ve gösteri yürüyüşü düzenleme hakkı (m.34) ile ispat hakkı (m.39) ise kişi hak ve özgürlükleri (negatif statü) bölümünde düzenlenmiştir.",
    answers: [
      { text: "Grev hakkı", ok: false },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkı", ok: false },
      { text: "Kamu hizmetine girme hakkı", ok: true },
      { text: "İspat hakkı", ok: false },
      { text: "Toplu iş sözleşmesi yapma hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>Türkiye'de ikamet eden yabancılarla ilgili aşağıdaki siyasi hak ve hürriyetlerden hangisinin kullanımının \"karşılıklılık esası gözetilmek kaydıyla\" olabileceği 1982 Anayasası'nda açıkça öngörülmüştür?</b></p>",
    diff: 2,
    expl: "Vatandaşlar ve karşılıklılık esası gözetilmek kaydıyla Türkiye'de ikamet eden yabancılar kendileriyle veya kamu ile ilgili dilek ve şikayetleri hakkında, yetkili makamlara ve Türkiye Büyük Millet Meclisine yazı ile başvurma hakkına (dilekçe hakkı) sahiptir.",
    answers: [
      { text: "Seçme ve seçilme hakkı", ok: false },
      { text: "Kamu hizmetine girme hakkı", ok: false },
      { text: "Dilekçe hakkı", ok: true },
      { text: "Vatan hizmeti yükümlülüğü", ok: false },
      { text: "Siyasi partilere üye olma hakkı", ok: false }
    ]
  },
  {
    text: "<p>Milletvekili K, beyan ve eylemleri sebebiyle Anayasa Mahkemesince partisinin kapatılmasına neden olur.<br><br><b>1982 Anayasası'na göre K hakkında aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Bir siyasi partinin temelli kapatılmasına beyan veya faaliyetleriyle sebep olan kurucuları dahil üyeleri, Anayasa Mahkemesinin temelli kapatmaya ilişkin kesin kararının Resmî Gazete'de gerekçeli olarak yayımlanmasından başlayarak beş yıl süreyle bir başka partinin kurucusu, üyesi, yöneticisi ve deneticisi olamazlar. (Milletvekilliği düşmez, bağımsız milletvekili olarak devam edebilir).",
    answers: [
      { text: "Milletvekilliği sona erer.", ok: false },
      { text: "5 yıl boyunca milletvekili olamaz.", ok: false },
      { text: "Cumhurbaşkanlığı seçimlerinde aday olamaz.", ok: false },
      { text: "5 yıl boyunca siyasi parti üyesi olamaz.", ok: true },
      { text: "Mahallî idare seçimlerde aday olamaz.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, siyasal partilerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Siyasi partiler önceden izin almadan kurulurlar, ticari faaliyette bulunamazlar ve temelli kapatılan bir parti, başka bir ad altında kurulamaz. Ancak 'siyasi partiler kadın ve gençlik kolları teşkilatı kuramazlar' ifadesi yanlıştır. Siyasi partilerin kadın ve gençlik kolları gibi yardımcı örgütlenmeler kurabileceği kabul edilmektedir.",
    answers: [
      { text: "Siyasi partiler önceden izin almadan kurulurlar.", ok: false },
      { text: "Siyasi partiler, ticari faaliyetlere girişemezler.", ok: false },
      { text: "Temelli kapatılan bir parti başka bir ad altında kurulamaz.", ok: false },
      { text: "Siyasi partiler, kadın ve gençlik kolları teşkilatı kuramazlar.", ok: true },
      { text: "Yükseköğretim elemanları siyasi partilere üye olabilirler.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Anayasa Mahkemesi tarafından temelli kapatılan bir parti hakkında aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 1,
    expl: "1982 Anayasası'nın 69. maddesine göre temelli kapatılan bir parti, başka bir ad altında kurulamaz. Kapatmaya sebep olan üyeler 5 yıl süreyle başka partinin kurucusu, üyesi, yöneticisi olamaz ancak siyaset yapmaları (örneğin bağımsız aday olmaları) tamamen engellenmez.",
    answers: [
      { text: "Başka bir ad altında kurulabilir.", ok: false },
      { text: "Üyeleri ömür boyu siyaset yapamaz.", ok: false },
      { text: "Başka bir ad altında kurulamaz.", ok: true },
      { text: "Üyeleri beş yıl boyunca siyaset yapamaz.", ok: false },
      { text: "Üyeleri siyaset yapabilir ancak beş yıl boyunca herhangi bir partiye üye olamazlar.", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, idarenin işleyişi ile ilgili şikâyetleri incelemek üzere kurulan Kamu Denetçiliği Kurumu (Ombudsmanlık) aşağıdakilerden hangisine bağlı olarak kurulmuştur?</b></p>",
    diff: 1,
    expl: "Kamu Denetçiliği Kurumu idarenin işleyişiyle ilgili şikâyetleri inceler. Bu kurum, Türkiye Büyük Millet Meclisi (TBMM) Başkanlığına bağlı olarak kurulmuştur.",
    answers: [
      { text: "Cumhurbaşkanlığı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "Devlet Denetleme Kurulu", ok: false },
      { text: "Adalet Bakanlığı", ok: false },
      { text: "Anayasa Mahkemesi", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'na göre, yabancıların dilekçe hakkından yararlanma şartları arasında;<br><br>I. Türkiye'de ikamet etmek,<br>II. karşılıklılık esası gözetilmek,<br>III. yalnızca Türkiye Büyük Millet Meclisine başvurabilmek<br><br><b>verilenlerden hangileri yer alır?</b></p>",
    diff: 2,
    expl: "Yabancılar, Türkiye'de ikamet etmek ve karşılıklılık esası gözetilmek şartıyla dilekçe hakkından yararlanabilir. Ancak sadece TBMM'ye değil, ilgili tüm yetkili makamlara başvurabilirler (III. öncül yanlıştır).",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: false }
    ]
  },
  {
    text: "<p>1982 Anayasası'na göre, bazı temel hak ve özgürlüklerin kullanımı, önceden izin alma şartına bağlanmamıştır. Bu hak ve özgürlükler ya doğrudan serbestçe kullanılır ya da yalnızca önceden bildirim yükümlülüğü ile sınırlandırılmıştır.<br><br><b>Buna göre aşağıdakilerden hangisi bu kapsamdaki haklardan biri değildir?</b></p>",
    diff: 3,
    expl: "Sendika kurma hakkı, süreli ve süresiz yayın hakkı, siyasi parti kurma hakkı ile toplantı ve gösteri yürüyüşü düzenleme hakkı önceden izin alınmaksızın kullanılan anayasal haklardandır. Ancak Anayasa'nın 26. maddesine göre radyo, televizyon, sinema veya benzeri yollarla yapılan yayımların izin sistemine bağlanmasına engel değildir.",
    answers: [
      { text: "Sendika kurma hakkı", ok: false },
      { text: "Süreli ve süresiz yayın hakkı", ok: false },
      { text: "Siyasi parti kurma hakkı", ok: false },
      { text: "Radyo ve televizyon yoluyla yayım yapma hakkı", ok: true },
      { text: "Toplantı ve gösteri yürüyüşü düzenleme hakkı", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, aşağıdakilerden hangisi yalnızca Türk vatandaşlarına tanınmış bir haktır?</b></p>",
    diff: 2,
    expl: "Kamu hizmetine girme hakkı (memur olma) siyasi bir hak olup, bu haktan doğrudan sadece Türk vatandaşları yararlanabilir. Dilekçe ve bilgi edinme hakları şartlı olarak (karşılıklılık ve ikamet) yabancılara da tanınmıştır.",
    answers: [
      { text: "Sendika kurma hakkı", ok: false },
      { text: "Haberleşme hürriyeti", ok: false },
      { text: "Dilekçe hakkı", ok: false },
      { text: "Bilgi edinme hakkı", ok: false },
      { text: "Kamu hizmetlerine girme hakkı", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda aşağıdakilerden hangisi \"sosyal ve ekonomik haklar ve ödevler\" arasında düzenlenmiştir?</b></p>",
    diff: 2,
    expl: "Eğitim ve öğrenim hakkı ve ödevi, Anayasa'nın sosyal devlet ilkesi doğrultusunda sosyal ve ekonomik haklar (pozitif statü hakları) sınıfına girer. Mülkiyet hakkı, süreli yayın hakkı ve dernek kurma kişi haklarıdır; dilekçe hakkı ise siyasi haktır.",
    answers: [
      { text: "Mülkiyet hakkı", ok: false },
      { text: "Dilekçe hakkı", ok: false },
      { text: "Eğitim ve öğrenim hakkı ve ödevi", ok: true },
      { text: "Süreli ve süresiz yayın hakkı", ok: false },
      { text: "Dernek kurma hürriyeti", ok: false }
    ]
  },
  {
    text: "<p>Türkiye Büyük Millet Meclisi Başkanlığına bağlı olarak kurulan Kamu Denetçiliği Kurumu idarenin işleyişiyle ilgili şikâyetleri inceler.<br><br><b>1982 Anayasası'na göre, Kamu Başdenetçisi aşağıdakilerden hangisi tarafından seçilir?</b></p>",
    diff: 1,
    expl: "Kamu Başdenetçisi Türkiye Büyük Millet Meclisi (TBMM) tarafından gizli oyla seçilir.",
    answers: [
      { text: "Cumhurbaşkanı", ok: false },
      { text: "Anayasa Mahkemesi", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: true },
      { text: "Hazine ve Maliye Bakanı", ok: false },
      { text: "Adalet Bakanı", ok: false }
    ]
  },
  {
    text: "<p>Anayasa dersi sınavına hazırlanan Beril, seçim hukukuyla ilgili tekrar yaparken hocasının şu cümlesini not alır.<br><br><i>\"Seçimlere ilişkin bazı ilkeler Anayasa'da doğrudan düzenlenmiştir. Ancak teknik hükümler kanunla belirlenmiştir.\"</i><br><br><b>Buna göre Beril, aşağıdakilerden hangisinin kanunla belirlendiğini söylerse doğru olur?</b></p>",
    diff: 2,
    expl: "Seçimlerin genel, eşit, gizli oy, tek dereceli olması, yargı yönetiminde yapılması ve temsilde adalet-yönetimde istikrar ilkeleri doğrudan Anayasa'da yer alır. Ancak %7'lik ülke seçim barajı gibi teknik kurallar Milletvekili Seçimi Kanunu ile düzenlenmiştir.",
    answers: [
      { text: "Seçimlerin tek dereceli olması", ok: false },
      { text: "Genel, eşit ve gizli oy ilkeleri", ok: false },
      { text: "Seçimlerin serbest yapılması", ok: false },
      { text: "Seçimlerin temsilde adalet, yönetimde istikrar ilkesine göre düzenlenmesi", ok: false },
      { text: "Milletvekili genel seçimlerinde %7 ülke barajı uygulanması", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, vergi, resim, harç ve benzeri mali yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi aşağıdakilerden hangisine verilebilir?</b></p>",
    diff: 2,
    expl: "Vergi, resim, harç ve benzeri mali yükümlülüklerin muaflık, istisnalar ve indirimleriyle oranlarına ilişkin hükümlerinde kanunun belirttiği yukarı ve aşağı sınırlar içinde değişiklik yapmak yetkisi Cumhurbaşkanı'na verilebilir.",
    answers: [
      { text: "Hazine ve Maliye Bakanı", ok: false },
      { text: "Türkiye Büyük Millet Meclisi", ok: false },
      { text: "Çalışma ve Sosyal Güvenlik Bakanı", ok: false },
      { text: "Sayıştay", ok: false },
      { text: "Cumhurbaşkanı", ok: true }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'na göre, Kamu Başdenetçisi Türkiye Büyük Millet Meclisi tarafından kaç yıllığına seçilir?</b></p>",
    diff: 1,
    expl: "Türkiye Büyük Millet Meclisi Başkanlığına bağlı olarak kurulan Kamu Denetçiliği Kurumu idarenin işleyişiyle ilgili şikâyetleri inceler. Kamu Başdenetçisi Türkiye Büyük Millet Meclisi tarafından gizli oyla dört (4) yıl için seçilir.",
    answers: [
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false },
      { text: "7", ok: false }
    ]
  },
  {
    text: "<p><b>1982 Anayasası'nda çalışma hakkının güvence altına alınmasına ilişkin hükümler arasında aşağıdakilerden hangisi yer almaz?</b></p>",
    diff: 3,
    expl: "1982 Anayasası'nda çalışanlara ilişkin olarak angaryanın yasaklanması (m.18), adil ücret, çalışma ve dinlenme hakkı (m.49-50) ile sözleşme özgürlüğü (m.48) gibi hükümler yer alır. Konut hakkı (m.57) ise sosyal bir haktır ancak doğrudan çalışma hakkının veya çalışanların bir güvencesi olarak tasnif edilmemiştir.",
    answers: [
      { text: "Angarya yasağı", ok: false },
      { text: "Adil ücret hakkı", ok: false },
      { text: "Sözleşme özgürlüğü", ok: false },
      { text: "Konut hakkı", ok: true },
      { text: "Dinlenme hakkı", ok: false }
    ]
  }
];

