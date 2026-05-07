import type { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFA BAĞLI ÇOKLU SORULAR - TEST 1
// ============================================================================
const CTX1A =
  "<p>Bugünün film senaryolarına bakıyorum da gerçek hayatla çok da bağlantısı olmayan, gerçekleşmesi neredeyse imkânsız kurgular üzerine oturtulmuş onlarca konu, kahraman ve mekân görüyorum. O an ne popülerse onu yazan, çizen, çeken, yöneten insanlar topluluğu kol geziyor. Sinema dünyasındaki <u>gündelik kıpırdanışların</u> ürünü olmaktan öte gidemeyen bu ürünlerin yıllar sonra hatırlanmayacak olması da beni derinden etkiliyor. Teknolojik imkânların kullanılması ve farklı yapım tekniklerine yer verilmesi onları birer sanat ürünü hâline getirmeye yetmiyor hiçbir zaman. Sonunda ne mi olacak? Yalnızca insanların beğeni ve beklentilerini karşılayacak, onların o an görmek istediği ve gerçeklerden uzak bu niteliksiz yapıtlar zamanla unutulacak ve sinema dünyasının çöplüğündeki yerini alacak. İşte bu durum üzüyor beni.</p>";

const CTX1B =
  "<p>Kolostrum (ağız sütü); doğumdan hemen sonra ilk 3-5 günde salgılanan, bileşim özellikleri ile yenidoğan bebeğin ilk günlerdeki gereksinimlerini karşılamak açısından büyük önem taşıyan anne sütüdür. Hastalıklardan koruyucu ve bağışıklık sistemini güçlendirici maddeler içerir. Kolostrum 5-10 gün arasında geçiş sütü şeklini alır. Genellikle 3. haftadan sonra anne sütü olgun süt özelliğini taşır. Anne sütünün protein içeriği 100 gramda %0,8-1,2 g arasındadır. Bu sütün enerjisinin yaklaşık yarısı yağlardan gelir. Kolostrumda daha fazla olmak üzere çoklu doymamış yağ asitleri yönünden anne sütünün zengin olması; sinir ve beyin hücrelerinin gelişimi, görme işlevinin daha etkin olması gibi pek çok vücut işlevinde önemli rol oynar.</p>";

const CTX1C =
  "<p>(I) Tarih bilimi; toplulukların geçmiş yaşantılarını, medeniyet ve kültürlerini, toplumlar arası ilişkileri, zaman ve yer göstererek, neden-sonuç ilişkileri çerçevesinde, yazılı belgelere dayandırarak tarafsız bir şekilde inceleyen bilimdir. (II) Bu bilimin ortaya çıkışındaki en önemli faktörlerden biri, bir olayın neden meydana geldiğini ortaya koymaya çalışmaktır. (III) Tarihî olayların ortaya çıkmasında yaşanan olayın gerçekleştiği bölgenin coğrafi koşullarının etkisi çok büyüktür. (IV) Bu koşulların gerçekleşen olaydaki etkisi göz önünde bulundurulmadan sadece somut kanıtlardan yararlanmak ve birtakım sonuçlara ulaşmak asla mümkün değildir. (V) Bu bakımdan tarih biliminin oluşmasında tarihî olaylar esnasındaki ekolojik etkenler kadar iklimsel etkenlerin de katkısı hiçbir zaman yadsınamaz.</p>";

const CTX1D =
  "<p>Etrafı ağaçlarla kaplı, mükemmel manzarası olan üç katlı bir dağ evi düşünün. Kış gelmiş ve her yer kara bürünmüş olsun. Dışarıda dondurucu bir soğuk var. Dağ evinin birinci katında bir şair kalıyor. Hemen üst katında bir aile var. Yeni doğmuş bebeklerini sıkıca sarıp sarmalamışlar. Bebek ağlıyor. En üst katta da yeni evli bir çift... Balkona çıkmış sarmaş dolaş doğanın güzelliğini mutlu gözlerle izliyor. Bu hikâyede geçen her birey dağ eviyle ilgili deneyimlerini farklı şekilde dile getirebilir. Şair, hayatının şiirini yazmak için beklediği anın geldiğini, ailenin bireyleri bebeklerinin üşüyüp hasta olacaklarından endişelendiklerini, mutlu çift ise hayatlarının en güzel günlerinden biri olduğunu ifade eder. Bir olgu karşısındaki tutumla insanları ortak noktada buluşturan dondurucu soğuktaki dağ evi ise olgudur. Bu örnek, olgu ile olay arasındaki farkı da ortaya koymaktadır.</p>";

const CTX1E =
  "<p>Sosyal hizmet uzmanı; maddi, sosyal ve kültürel yönden sıkıntı yaşayan birey, grup ya da topluluklara tanılar koyarak içlerinde bulundukları problemleri çözmelerinde onlara yardımcı olan kişidir. Bu uzmanlık alanı, toplumsal düzen açısından oldukça önemli bir alandır. Toplumda yardıma muhtaç olan her bir bireyin zaman içerisindeki değişimi ve gelişimi için toplumsal olarak çözüm üretmek, bu sorunların çözülmesi için gerekli kurumlar aracılığı ile çalışmalar yapmak sosyal hizmet uzmanının yükümlülükleri arasında yer alır. Bu nedenle sosyal hizmet uzmanının toplumun refahı, mutluluğu ve düzenini sağlamak açısından ne kadar önemli olduğu <u>su götürmez</u> bir gerçek olarak karşımıza çıkar.</p>";

const CTX1F =
  "<p>Üniversite sınavlarına hazırlanan öğrenciler arasından seçilen 900 öğrenciye bir araştırma ekibi tarafından hangi bölümü tercih edecekleri sorulmuştur. Araştırma sonucunda katılımcıların %65'i \"Bir üniversite kazanayım da hangi bölüm olursa olsun.\" dediği, %18'inin \"İstediğim bölüm olmazsa tercih yapmam.\" cevabını verdiği, %17'sinin ise \"Henüz kararsızım, alacağım puana göre karar vereceğim.\" tespit edilmiştir. Araştırma sonuçları, meslek seçimi konusunda kararsızlık ve belirsizlik yaşayan %82'lik dilimde yer alan öğrencilere destek olmak adına uzmanların nasıl bir yol haritası çizecekleri konusunda fikir sahibi olmalarını sağlamıştır.</p>";

export const TUR_PARAGRAF_COKLU_SORULAR_TEST_1: McQ[] = [
  // --- 1. ve 2. Sorular (Senaryo A) ---
  {
    text: CTX1A + "<p><b>1. Bu parçadaki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Altı çizili 'gündelik kıpırdanışlar' ifadesi, kalıcı olmayan, o anlık moda olan ve çabuk tüketilen kısa süreli eğilimleri ifade etmektedir.",
    answers: [
      { text: "Yönetmenlerin hep aynı konulara yönelmesi", ok: false },
      { text: "Sanat çevrelerindeki beğenilerin aynı olması", ok: false },
      { text: "Sinema dünyasına yön veren eserlerin çokluğu", ok: false },
      { text: "Yaşanması mümkün olmayan eserlerin varlığı", ok: false },
      { text: "Sinema sektöründe yaşanan kısa süreli eğilimler", ok: true }
    ]
  },
  {
    text: CTX1A + "<p><b>2. Bu parçaya göre günümüz film senaryolarıyla ilgili olarak aşağıdakilerden hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Parçada senaryoların insanların beğeni ve beklentilerini karşılayacak (izleyici odaklı) şekilde oluşturulduğu belirtilmiştir. Bu nedenle izleyici beğenisinin göz önünde bulundurulmadığı yargısı yanlıştır.",
    answers: [
      { text: "Gerçeği yansıtmayan olaylar üzerine kurulmuş olması", ok: false },
      { text: "İzleyicilerin beğeni düzeyini göz önünde bulundurmaması", ok: true },
      { text: "Uzun soluklu ürünler olmamaları", ok: false },
      { text: "Günümüzün teknolojik özelliklerinin kullanılmış olması", ok: false },
      { text: "Sanatsal değer taşımayan ürünler olmaları", ok: false }
    ]
  },
  // --- 3. ve 4. Sorular (Senaryo B) ---
  {
    text: CTX1B + "<p><b>3. Bu parçadan hareketle kolostrum ile ilgili aşağıdakilerin hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Metinde kolostrumun içeriği ve gelişim üzerindeki etkileri anlatılmıştır ancak çeşitli hastalıkların tedavisinde kullanıldığına dair bir bilgi yoktur.",
    answers: [
      { text: "Belli bir zaman diliminde meydana gelmesi", ok: false },
      { text: "Doymamış yağ asidi yönünden zengin olması", ok: false },
      { text: "Çeşitli hastalıkların tedavisinde kullanılması", ok: true },
      { text: "İçerdiği yararlı maddelerin miktarı", ok: false },
      { text: "Vücut fonksiyonlarının gelişmesindeki etkisi", ok: false }
    ]
  },
  {
    text: CTX1B + "<p><b>4. Bu parçanın anlatımında aşağıdakilerden hangisine yer <u>verilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Metinde sayısal veriler, açıklama, örnekleme ve genelleme yapılmış ancak pekiştirme (bir sözün anlamını kuvvetlendirme) sanatına yer verilmemiştir.",
    answers: [
      { text: "Sayısal verilere", ok: false },
      { text: "Açıklamaya", ok: false },
      { text: "Örneklemeye", ok: false },
      { text: "Genellemelere", ok: false },
      { text: "Pekiştirmeye", ok: true }
    ]
  },
  // --- 5. ve 6. Sorular (Senaryo C) ---
  {
    text: CTX1C + "<p><b>5. Bu parçadan hareketle aşağıdaki önermelerden hangisine ulaşılabilir?</b></p>",
    diff: 3,
    expl: "Parçanın genelinde tarih biliminin ortaya çıkışında coğrafi, iklimsel ve ekolojik koşulların çok önemli olduğu vurgulanmıştır.",
    answers: [
      { text: "Tarihte yaşanan olayların çoğu birbirine benzer sonuçlar doğurur.", ok: false },
      { text: "Tarih biliminde bir olayın sonucu başka bir olayın nedenidir.", ok: false },
      { text: "Yaşanan tarihî olaylarda, coğrafi etkenler ön plandadır.", ok: true },
      { text: "Tarih bilimi sadece kanıtlanabilir verileri baz almaktadır.", ok: false },
      { text: "Tarih biliminde tarafsız olabilmenin yolu yalnızca yazılı belgelere bağlılıktır.", ok: false }
    ]
  },
  {
    text: CTX1C + "<p><b>6. Bu parçadaki numaralanmış cümlelerden hangisi kanıtlanabilirlik açısından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı cümle nesnel bir tanım cümlesidir. Diğer cümleler ise 'en önemli', 'çok büyüktür', 'asla mümkün değildir' gibi kişisel yorumlar (öznel ifadeler) içermektedir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  // --- 7. ve 8. Sorular (Senaryo D) ---
  {
    text: CTX1D + "<p><b>7. Bu parçadan hareketle olgu, aşağıdakilerin hangisinde doğru tanımlanmıştır?</b></p>",
    diff: 2,
    expl: "Metindeki dağ evi örneği, olaylar karşısında insanların takındığı genel tavır ve düşünceler bütününü yani 'olgu'yu temsil eder.",
    answers: [
      { text: "Yaşananlar karşısında sergilenen tavır ve düşünceler bütünüdür.", ok: true },
      { text: "Kısa bir süre içinde gerçekleşen durumlardır.", ok: false },
      { text: "İlgi çekebilecek nitelikte olan şeylerdir.", ok: false },
      { text: "Birtakım durumların olası sonuçlarını ortaya çıkaran etkendir.", ok: false },
      { text: "Bireyin gerçekleştirdiği veya gerçekleştirmek istediği eylemlerdir.", ok: false }
    ]
  },
  {
    text: CTX1D + "<p><b>8. Bu parçaya göre aşağıda verilen olay - olgu eşleştirmelerinden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Hava sıcaklığının yüksek olması genel bir durumdur (olgu), buna bağlı olarak kişinin terlemesi ise bu durumun bir sonucudur (olay).",
    answers: [
      { text: "Olgu: Hava sıcaklığının yüksek olması - Olay: Kişinin çok terlemesi", ok: true },
      { text: "Olgu: Sınavın kötü geçmesi - Olay: Soruların zor olması", ok: false },
      { text: "Olgu: Firmanın iflas etmesi - Olay: Firma satışlarının durması", ok: false },
      { text: "Olgu: Hastanın hayatını kaybetmesi - Olay: Hastanın kalbinin durması", ok: false },
      { text: "Olgu: Evli çiftin boşanması - Olay: Çiftin şiddetli kavga etmesi", ok: false }
    ]
  },
  // --- 9. ve 10. Sorular (Senaryo E) ---
  {
    text: CTX1E + "<p><b>9. Bu parçadan hareketle sosyal hizmet uzmanlarıyla ilgili olarak aşağıdakilerden hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Parçada uzmanın tanımı, rolü ve çalışma alanları verilmiş ancak hangi eğitimleri aldığına (okul/bölüm) dair bilgi verilmemiştir.",
    answers: [
      { text: "Hangi alanlarda eğitim aldıklarına", ok: true },
      { text: "Toplumsal düzen içindeki rolüne", ok: false },
      { text: "Çalışma alanlarından bazılarının neler olduğuna", ok: false },
      { text: "Problem çözme odaklı faaliyet gösterdiklerine", ok: false },
      { text: "Bireylerin farklı sorunlarına çözüm üretmeye çalıştıklarına", ok: false }
    ]
  },
  {
    text: CTX1E + "<p><b>10. Aşağıdaki cümlelerin hangisinde parçada geçen altı çizili sözün anlamını karşılayacak bir ifadeye yer verilmiştir?</b></p>",
    diff: 2,
    expl: "'Su götürmez' ifadesi 'kesin, tartışmasız' anlamına gelir. C seçeneğindeki 'katî' sözcüğü bu anlamı karşılar.",
    answers: [
      { text: "Bazı birleşik sözcükler ayrı yazılmasına karşın anlamsal açıdan ayrılmaz.", ok: false },
      { text: "Bazı olaylara ve bu olayların oluşum şekillerine subjektif olarak yaklaşmak gerekir.", ok: false },
      { text: "ÖSYM, sınavdaki sorularda hata olmadığını katî bir dille ifade etti.", ok: true },
      { text: "Yapılan kazılarda kesin olmayan bazı sonuçlara ulaşıldı.", ok: false },
      { text: "Meramını açıklarken tartışmaya açık yorumlardan kaçınmalısın.", ok: false }
    ]
  },
  // --- 11. ve 12. Sorular (Senaryo F) ---
  {
    text: CTX1F + "<p><b>11. Bu parçayla ilgili olarak aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 2,
    expl: "Parçada öğrencilerin tercihleri üzerinden kendi içinde farklılıklar gösteren durumlardan ve oranlardan bahsedilmiştir.",
    answers: [
      { text: "Sayısal verilerin gerçeği yansıtmada yetersiz kaldığı anlatılmıştır.", ok: false },
      { text: "Kendi içinde farklılık içeren durumlardan söz edilmiştir.", ok: true },
      { text: "Bireysel kararsızlıkların tüm toplumlarda aynı sonuçlar ortaya çıkardığı ifade edilmiştir.", ok: false },
      { text: "Kişisel düşüncelerin sonuç odaklı olmadığı vurgulanmıştır.", ok: false },
      { text: "Toplumların geleceğini ilgilendiren bir konuda tavsiyelerde bulunulmuştur.", ok: false }
    ]
  },
  {
    text: CTX1F + "<p><b>12. Bu parçanın anlatımında; I. açıklama, II. sayısal verilerden yararlanma, III. tartışma yöntemlerinin hangilerinden yararlanılmıştır?</b></p>",
    diff: 2,
    expl: "Metinde bir araştırma sonucu açıklandığı için (Açıklama) ve %65, %18 gibi veriler kullanıldığı için (Sayısal Veriler) I ve II numaralı yöntemler kullanılmıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ]
  }
];

// ============================================================================
// PARAGRAFA BAĞLI ÇOKLU SORULAR - TEST 2
// ============================================================================
const CTX2A =
  "<p>Mitomani, hiçbir şekilde sosyal çıkar gözetmeksizin yalan söyleyen kişilerin yakalandığı hastalığa verilen isimdir. Genel olarak toplum tarafından dışlanmış kişilerde bu hastalık görülür... Yalan söylemeyi alışkanlık hâline getiren mitomanlar, bir süre sonra kontrolü kaybederler. <u>Zihinsel imgelemin doğrusal yansımaları hayatlarına nükseder.</u> Yaşanmamış bir olayı yaşanmış gibi insanlara aktarırlar. İlerleyen zamanlarda ise anlattıkları bu yalanlara kendileri de gerçekmiş gibi inanmaya başlarlar.</p>";

const CTX2B =
  "<p>Pfizer-BioNTech tarafından üretilen COVID-19 aşısı, 16 yaş ve üzeri bireylere yapılmak üzere, 11 Aralık 2020'de acil kullanım onayı alan bir aşıdır. BioNTech aşısı mrna (mesajcı rna) tabanlı aşıdır... BioNTech aşısı iki doz olmayı gerektirir ve tam etki için ideal olarak 6-8 hafta arayla iki doz olunur. Lancet'te yayımlanan 2021 tarihli bir araştırmaya göre... İkinci dozun almanın sonunda BioNTech aşısının koruyuculuğu yüzde 95.3 olarak açıklanmıştır.</p>";

const CTX2C =
  "<p>(I) Bazı insanlar, çevresinde yaşayan ve düşman olarak gördüğü veya kendisine hata yapma potansiyeli olan kişileri eleştirdikleri için kendisinde gerçekten var olan hataların, yanlışlıkların farkına varamayabilir... (III) Her zaman başkaları suçludur o insanların gözünde. (IV) Bu nedenle aynayı kendisine çevirmeyi unutur böyleleri. (V) Kendi hatalarını görmez olur, ruhunun derinliklerinde kalır zayıflıkları. (VI) Bunlar kendini hep sütten çıkmış ak kaşık gibi hisseder ama durum maalesef böyle değildir.</p>";

const CTX2D =
  "<p>Osmanlı Devleti, Rumeli'de fetihler yapmaya başladıktan sonra Anadolu'dan bu bölgeye iskâna başlamıştır. (I) Zamanla genişleyen toprakların korunma ihtiyacı doğmuştur. (II) Bu sebeple yardımcı birlikler oluşturulmaya hız verilmiştir... (V) Bu oluşuma verilen \"Deli\" adı; aklını kaybetmiş, mecnun gibi anlamlara gelse de buradaki asıl manası; gözünü budaktan sakınmayan, ordunun en ön safında çarpışan, düşmanın üzerine vahşi haykırışlarla saldırarak onları korkutan heybetli askerdir...</p>";

export const TUR_PARAGRAF_COKLU_SORULAR_TEST_2: McQ[] = [
  // --- SENARYO 1 (1-3) ---
  {
    text: CTX2A + "<p><b>1. Bu parçaya göre mitomani hastalığının ortaya çıkmasındaki <u>temel etken</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Parçanın başında mitomaninin toplum tarafından dışlanmış kişilerde görüldüğü belirtilmiştir. Bu durum, hastaların temel amacının 'toplum tarafından kabul edilme' isteği olduğunu gösterir.",
    answers: [
      { text: "Toplum tarafından kabul edilme", ok: true },
      { text: "İstenilen hayatı gerçekleştirmeye çalışma", ok: false },
      { text: "Gelecekle ilgili planları hayata geçirme", ok: false },
      { text: "Sevilen ve takdir edilen biri olmaya çalışma", ok: false },
      { text: "Olumsuz özelliklerini gizlemeye çalışma", ok: false }
    ],
  },
  {
    text: CTX2A + "<p><b>2. Bu parçadaki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisinde en doğru biçimde verilmiştir?</b></p>",
    diff: 3,
    expl: "'Zihinsel imgelem' (düşsel ögeler) ve 'nüksetme' (etki etme) kavramları birleştiğinde, mitomanların hayal dünyasındaki kurguların gerçek yaşama tesir etmesi kastedilmektedir.",
    answers: [
      { text: "Doğaüstü olayların bir anda ortaya çıkması", ok: false },
      { text: "Kişinin hayal gücünü ön planda tutması", ok: false },
      { text: "Düşsel ögelerin gerçek yaşama tesir etmesi", ok: true },
      { text: "Doğru sanılan düşüncelerin etkileri", ok: false },
      { text: "Hayatlarının kontrolünü elinde tutamama", ok: false }
    ],
  },
  {
    text: CTX2A + "<p><b>3. Bu parçaya göre mitomanlarla ilgili olarak aşağıdakilerden hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Metinde mitomanların yalan söyledikleri, kontrolü kaybettikleri ve dışlandıkları belirtilmiştir; ancak 'hayal güçleri gelişmiş, sosyal insanlar' olduklarına dair bir ifade yer almamaktadır.",
    answers: [
      { text: "Toplum nazarında takdir edilmeyen kişilerdir.", ok: false },
      { text: "Sosyal hayatta belli bir konumda olmayı amaçlarlar.", ok: false },
      { text: "Söyledikleri yalanların birçoğu, bir yenisini ortaya çıkarır.", ok: false },
      { text: "Hayal güçleri gelişmiş, sosyal insanlardır.", ok: true },
      { text: "Mitomanlar, söyledikleri yalanı bir süre sonra kanıksarlar.", ok: false }
    ],
  },
  // --- SENARYO 2 (4-6) ---
  {
    text: CTX2B + "<p><b>4. Bu parçaya göre BioNTech aşısı ile ilgili olarak aşağıdakilerden hangisine <u>değinilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Parçada doz sayısı, koruyuculuk oranı ve araştırmalardan bahsedilmiştir. Koronavirüse karşı antikor üreten şeyin aşı değil, bağışıklık sistemimiz olduğu vurgulanmıştır.",
    answers: [
      { text: "Koronavirüse karşı antikorlar geliştirdiğine", ok: true },
      { text: "Etkisini tam anlamıyla gösterebilmesi için iki doz olunması gerektiğine", ok: false },
      { text: "Koruyuculuk oranının oldukça yüksek olduğuna", ok: false },
      { text: "Uygulama aşamasında belli sınırlar içerdiğine", ok: false },
      { text: "Hakkında çeşitli araştırmalar yapıldığına", ok: false }
    ],
  },
  {
    text: CTX2B + "<p><b>5. Bu parçaya göre BioNTech aşısının hangi özelliği koruyuculuğunun artmasını sağlayan temel etkendir?</b></p>",
    diff: 2,
    expl: "Metinde araştırmalara dayanılarak 'ideal aralıklarla yapılan iki dozun' koruyuculuğu %95.3 gibi yüksek bir seviyeye çıkardığı açıklanmıştır.",
    answers: [
      { text: "Mrna tabanlı (mesajcı Rna) olması", ok: false },
      { text: "Koronavirüse karşı spike adı verilen proteini üretmesi", ok: false },
      { text: "Belli aralıklarla iki doz şeklinde uygulanması", ok: true },
      { text: "Acil kullanım onayı almış olması", ok: false },
      { text: "Antikor oluşumuna katkı sağlaması", ok: false }
    ],
  },
  {
    text: CTX2B + "<p><b>6. Bu parçanın anlatımında aşağıdakilerden hangisine yer <u>verilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Metin açıklayıcı bir dille yazılmış; sayısal veriler, örneklemeler ve terimler kullanılmıştır. Ancak karşılıklı fikirlerin çarpıştığı bir 'tartışma' ortamı yoktur.",
    answers: [
      { text: "Sayısal verilere", ok: false },
      { text: "Nesnel ifadelere", ok: false },
      { text: "Örneklemeye", ok: false },
      { text: "Tartışmaya", ok: true },
      { text: "Terimsel söylemlere", ok: false }
    ],
  },
  // --- SENARYO 3 (7-9) ---
  {
    text: CTX2C + "<p><b>7. Bu parçadan hareketle aşağıdakilerden hangisine ulaşılabilir?</b></p>",
    diff: 2,
    expl: "Parçanın genelinde başkalarını eleştirmeye odaklanan insanların, kendi kusurlarını görmezden geldiği ve bu yüzden hatalarının farkına varamadığı vurgulanmıştır.",
    answers: [
      { text: "Başkalarının kusurlarına odaklanan kişiler, kendi hatalarının farkına varamaz.", ok: true },
      { text: "Toplumdaki diğer bireylerin kusurlarına odaklanan kişilerin hayata bakış açıları gelişir.", ok: false },
      { text: "Başkalarının eksikliklerini onların yüzüne vuran bireyler daha sağlıklı ilişkiler kurarlar.", ok: false },
      { text: "Kendi hatalarından pay çıkarmanın en doğru yolu başkalarının hatalarını göz ardı etmektir.", ok: false },
      { text: "Başkalarını eleştirebilen bireyler kendi hatalarının farkına daha çabuk varır.", ok: false }
    ],
  },
  {
    text: CTX2C + "<p><b>8. Aşağıdakilerden hangisi bu parçada söz edilen kişilerin sergileyebilecekleri tutumlardan birine örnek <u>gösterilemez</u>?</b></p>",
    diff: 3,
    expl: "Metinde hatayı hep başkasında arayanlar anlatılır. E seçeneğindeki öğretmen hatayı kendisi yapmış (notları yanlış hesaplamış) ve sonuçlarına katlanmıştır, suçu başkasına atmamıştır.",
    answers: [
      { text: "Kendi şirketinin iflas etmesinden yalnızca çalışanların sorumlu olduğunu düşünen patron", ok: false },
      { text: "Çevreyi kirlettiği hâlde başka insanların çevreyi kirletmesinden yakınan birey", ok: false },
      { text: "Maçta hatalı gol yemesine rağmen defans oyuncularını suçlayan kaleci", ok: false },
      { text: "Evrakları zamanında yetiştiremeyip kendisine idarecilerin eksik bilgi verdiğini iddia eden çalışan", ok: false },
      { text: "Öğrencilerinin notlarını yanlış hesaplayıp birçoğunun sınıfta kalmasına neden olan öğretmen", ok: true }
    ],
  },
  {
    text: CTX2C + "<p><b>9. Bu parçadaki numaralanmış cümlelerden hangileri kendinden sonraki durumun gerekçesidir?</b></p>",
    diff: 3,
    expl: "III. cümledeki başkalarını suçlama durumu, IV. cümledeki aynayı kendine çevirmeyi unutmanın gerekçesidir. Benzer şekilde V. cümledeki zayıflıkların derinlerde kalması da sonucun gerekçesidir.",
    answers: [
      { text: "II ve IV", ok: false },
      { text: "II ve V", ok: false },
      { text: "III ve IV", ok: true },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ],
  },
  // --- SENARYO 4 (10-12) ---
  {
    text: CTX2D + "<p><b>10. Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisinden sonra başlar?</b></p>",
    diff: 2,
    expl: "V. cümleye kadar Deliler birliğinin genel kuruluş amacı anlatılırken, VI. cümleden itibaren bu birliğin nerelerde görev aldığına (farklı bir boyutuna) geçilmiştir.",
    answers: [
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true },
      { text: "VI", ok: false },
      { text: "VII", ok: false }
    ],
  },
  {
    text: CTX2D + "<p><b>11. Bu parçadaki numaralanmış cümlelerin hangisinde amaç söz konusudur?</b></p>",
    diff: 2,
    expl: "III. cümlede 'Düşman topraklarına sızmak, istihbarat ve sınır güvenliği gibi faaliyetleri yürütebilmek için' ifadesi bir amaç-sonuç ilişkisi kurmaktadır.",
    answers: [
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "VI", ok: false },
      { text: "VII", ok: false }
    ],
  },
  {
    text: CTX2D + "<p><b>12. Bu parçaya göre Deliler adlı birlikle ilgili olarak aşağıdakilerden hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Parçada başka devletlerden bilgi edinme (casusluk/istihbarat) görevi Akıncılara aittir, Deliler bu birliğin içinde savaşan heybetli askerlerdir.",
    answers: [
      { text: "Gözü pek kişiler arasından seçildiklerine", ok: false },
      { text: "Belli bir amaç doğrultusunda oluşturulduklarına", ok: false },
      { text: "Başka devletlerden bilgi edinmeyle görevlendirildiklerine", ok: true },
      { text: "Psikolojik bir etkilerinin olduğuna", ok: false },
      { text: "Birbirinden farklı görevlerinin olduğuna", ok: false }
    ],
  }
];

// ============================================================================
// PARAGRAFA BAĞLI ÇOKLU SORULAR - TEST 3
// ============================================================================
const CTX3A =
  "<p>Yaşanmış bir olaydan esinlenilerek oluşturulan Mucize adlı sinema filmi, izleyicilerden büyük beğeni topladı. Yönetmenliğini ve senaristliğini Mahsun Kırmızıgül’ün yaptığı filmde, 1960 yılında Mahir isimli öğretmenin İzmir’den doğu illerinden birine tayini ve sonrasında yaşadıkları anlatılsa da asıl işlenen konu, engelli insanlara diğer bireylerin bakış açılarıyla ilgili. O yıllarda yaşanan bazı siyasi olaylar ve ülkede yaşanan değişimler de filmde çeşitli yönleriyle ele alınıyor. Bir öğretmenin; engelli bir birey olan Aziz’in, onun ailesinin ve belki de tüm köyün hayatını nasıl değiştirebileceği gözler önüne seriliyor. ----. Aşkın ne şartlarda olursa olsun her zorluğun üstesinden gelebilecek güçte bir duygu olduğu çarpıcı bir biçimde ele alınıyor filmde.</p>";

const CTX3B =
  "<p>Kubat, 1974’te Belçika Antwerpen’de dünyaya geldi. İlk ve ortaöğrenimini Antwerpen’de tamamladı. Kubat’ın müziğe olan yeteneği, 5. doğum gününde babasının ona hediye ettiği cura ile ortaya çıktı. 8 yaşında sahnede mikrofonla tanıştı. Daha sonra aldığı klasik gitar ve solfej eğitimi ile müzik kariyerine yön verdi. Güçlü sesi ve özgün yorumuyla adından söz ettirmeye başlayan Kubat, 1995 yılında İstanbul’a gelerek kendi adını taşıyan ilk albümünü çıkardı. <u>Gönlünden geçenle diline düşenin bir olmadığı</u> sanatçıların aksine Kubat, eserlerini yüreğinden çıkan seslermişçesine okudu. Batı müziği eğitimi almasına rağmen Türk halk müziğine olan sevdasını modern bir yorumla birleştiren Kubat, bu mirası korumanın yanı sıra özgün çalışmalarıyla da gençleri peşinden sürüklemeyi başardı.</p>";

const CTX3C =
  "<p>(I) Sefiller, Victor Hugo tarafından yazılan ve 19. yüzyılın en popüler eserlerinden biri olarak kabul edilen tarihî romandır. (II) İngilizce konuşulan ülkelerde yapılan başarısız çeviriler yüzünden çoğunlukla Fransızca ismi olan Les Misérables ile anılır. (III) Hikâye 1815'te başlar ve 1832'deki Paris Haziran Ayaklanması'nda son bulur. (IV) Birkaç karakterin yaşamını ve birbirleriyle alakasını anlatan roman daha çok eski mahkûm Jean Valjean’ın kendi kefaretini ödemek için verdiği yaşam mücadelesine odaklanır. (V) Yasanın ve merhametin doğasının incelendiği romanda ayrıca Fransa tarihi, mimarisi ve kentsel tasarımı, siyaset, ahlak felsefesi, antimonarşizm, adalet, din; ailevi ve romantik sevginin türleri ve doğası gibi konular anlaşılır bir dille ve özenle ele alınır. (VI) Sefiller, aralarında bir müzikal ve müzikalden uyarlanan bir filmin de bulunduğu birçok tiyatro, televizyon ve sinema eserine uyarlanarak büyük popülarite elde etmiştir.</p>";

const CTX3D =
  "<p>Son zamanlarda denizlerimizde görülen ve hem görüntüsü hem de etkileri yönüyle kaygı uyandıran müsilaj (deniz salyası), hemen hemen tüm bitkiler ve bazı mikroorganizmalar tarafından üretilen kalın, yapışkan bir maddedir. Sümüksü yapıya sahip olan müsilaj, deniz sıcaklığının yükselmesi ile artan bakteriler sonucunda oluşur. Ayrıca çevre kirliliğinin denizlere yansıması, denizlerdeki kirliliğin ve atıkların çoğalması deniz salyasının oluşmasındaki en önemli etkenlerden biridir. Ayrıca suyun çok uzun süre durgun olması da diğer oluşum faktörlerinden biridir. Denizlerdeki müsilaj özellikle balıkçıların kabusudur. Balıkçı ağlarına yapışan müsilaj, onların avlanmasını zorlaştırır. Oluşan kötü görünüm, ülke ekonomisine ve turizmine büyük zararlar verir. Deniz canlılarının beslenme, üreme ve göç etme faaliyetlerini olumsuz etkiler. Bitkilerdeki müsilaj ise su ve gıdanın depolanmasında, tohumun çimlenmesinde ve zar kalınlaşmasında rol oynar. Kaktüsler, sukulentler ve keten tohumları zengin müsilaj kaynaklarıdır.</p>";

export const TUR_PARAGRAFA_BAGLI_COKLU_SORULAR_TEST_3: McQ[] = [
  // --- SENARYO 1 (1-2) ---
  {
    text: CTX3A + "<p><b>1. Bu parçada geçen Mucize adlı filmle ilgili olarak aşağıdakilerden hangisine <u>ulaşılamaz</u>?</b></p>",
    diff: 2,
    expl: "Parçada filmin konusundan, esin kaynağından ve toplumsal içeriğinden bahsedilmiş ancak 'önemli bir gişe başarısı elde ettiği'ne dair sayısal veya net bir bilgi verilmemiştir.",
    answers: [
      { text: "Yaşanmış bir olaydan alıntılandığına", ok: false },
      { text: "Sosyal içerikli bir konuya sahip olduğuna", ok: false },
      { text: "Konunun işlendiği döneme ait bilgiler verdiğine", ok: false },
      { text: "Duygusal olayların insan yaşamındaki etkilerine", ok: false },
      { text: "Önemli bir gişe başarısı elde ettiğine", ok: true }
    ],
  },
  {
    text: CTX3A + "<p><b>2. Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Boşluktan sonraki cümlede 'aşkın gücünden' bahsedildiği için, boşluğa bu geçişi sağlayan A seçeneği getirilmelidir.",
    answers: [
      { text: "Tabii sadece öğretmenin köye ve Aziz’e güçlü tesirini değil, aşkın gücünü de çok farklı bir biçimde göstermiş oluyor bu hikâye", ok: true },
      { text: "Gönül ve akıl sağlığı olanlarla olmayanlar olarak insanların ikiye ayrıldığı bu köyde aşk en önemli yeri alıyor", ok: false },
      { text: "Filmde Öğretmen’in, Aziz’in ailesi ve köydeki çocukları bırakmayıp köyde kalmasının başka sebepleri de var elbette", ok: false },
      { text: "Filmin genelinde Aziz karakterinin kardeşlerine kız isteme merasimleri de esprili bir biçimde izleyiciye aktarılıyor", ok: false },
      { text: "Bedensel engellerin üstesinden gelinebileceğinin vurgulandığı bu filmin içine bir tutam aşk da serpilmiş", ok: false }
    ],
  },
  // --- SENARYO 2 (3-4) ---
  {
    text: CTX3B + "<p><b>3. Bu parçadaki altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "'Gönlünden geçenle diline düşenin bir olmaması' dürüst olmamak veya içten olmamak demektir. Kubat bunun aksini yaptığına göre hissettikleri ile söyledikleri uyumludur.",
    answers: [
      { text: "Aklından geçenleri söylemekten çekinmeyenler", ok: false },
      { text: "Düşünceleri ile eylemleri birbirine uyanlar", ok: false },
      { text: "Duygusal yönü mantıksal yönünden ağır basanlar", ok: false },
      { text: "Hissettikleri ile dile getirdikleri farklı olanlar", ok: true },
      { text: "Yaptığı işi severek yapmaya çalışanlar", ok: false }
    ],
  },
  {
    text: CTX3B + "<p><b>4. Bu parçadan hareketle Kubat ile ilgili aşağıdaki-lerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Parçada Kubat'ın cura, gitar, solfej ve Batı müziği eğitimi aldığı belirtilmiştir ancak 'farklı müzik türlerinde (pop, rock vb.) ürünler verdiği'ne dair bir bilgi yoktur.",
    answers: [
      { text: "Ne tür eğitimler aldığına", ok: false },
      { text: "Kendine has bir tarzı olduğuna", ok: false },
      { text: "Farklı müzik türlerinde ürünler verdiğine", ok: true },
      { text: "Başka sanatçılardan farklı özellikleri olduğuna", ok: false },
      { text: "Türk halk müziğine hizmet ettiğine", ok: false }
    ],
  },
  // --- SENARYO 3 (5-6) ---
  {
    text: CTX3C + "<p><b>5. Bu parçada Sefiller adlı romanla ilgili aşağıdaki-lerden hangisine <u>değinilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Parçada romanın içeriği, anılma nedenleri, yazarı ve uyarlamalarından bahsedilmiştir. Ancak 'yayımlandığı dönemin en önemli eseri' olduğu değil, 'en popüler eserlerinden biri' olduğu söylenmiştir.",
    answers: [
      { text: "İçeriğinde neler bulunduğuna", ok: false },
      { text: "Yayımlandığı dönemin en önemli eseri olduğuna", ok: true },
      { text: "Nasıl bir biçemle kaleme alındığına", ok: false },
      { text: "Farklı isimlerle anılma nedenlerine", ok: false },
      { text: "Çeşitli sanat türlerine uyarlandığına", ok: false }
    ],
  },
  {
    text: CTX3C + "<p><b>6. Bu parçadaki numaralanmış cümlelerin hangisinde neden - sonuç ilişkisi söz konusudur?</b></p>",
    diff: 2,
    expl: "II. cümlede eserin Fransızca ismiyle anılmasının 'nedeni' olarak 'başarısız çeviriler' gösterilmiştir.",
    answers: [
      { text: "II", ok: true }, { text: "III", ok: false }, { text: "IV", ok: false },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ],
  },
  // --- SENARYO 4 (7-8) ---
  {
    text: "<p>İdealizm, tinsel güçlerin evrendeki tüm süreçleri ya da olup bitenleri belirlediğini savunan tüm felsefe öğretilerini içerecek biçimde kullanılan terimdir... Gerçekliği \"idea\" olarak belirleyip maddeyi bunun bir yansıması sayar.</p><p><b>7. Bu parçaya göre idealizm ile ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "İdealizm belirli felsefi görüşlere (materyalizm, realizm vb.) karşıttır ancak 'tüm felsefi düşüncelerin birleşimi' olduğu bilgisi yanlıştır.",
    answers: [
      { text: "Tüm varlıkları sabit bir gücün yansıması olarak kabul eder.", ok: false },
      { text: "Düşüncenin her şeyden üstün olduğunu savunmaktadır.", ok: false },
      { text: "Çeşitli felsefi görüşlere aykırı bir görüşe sahiptir.", ok: false },
      { text: "Gerçeğe ulaşmanın yalnızca akılla mümkün olduğunu ileri sürer.", ok: false },
      { text: "Tüm felsefi düşüncelerin birleşimi olarak görülmektedir.", ok: true }
    ],
  },
  {
    text: "<p>İdealizm, tinsel güçlerin evrendeki tüm süreçleri... sayar.</p><p><b>8. Bu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?</b></p>",
    diff: 2,
    expl: "Metnin genelinde idealizm kavramı hakkında bilgi verildiği ve bir kavram açıklandığı için anlatım biçimi 'Açıklama'dır.",
    answers: [
      { text: "Tanımlama", ok: false }, { text: "Örnekleme", ok: false }, { text: "Betimleme", ok: false },
      { text: "Açıklama", ok: true }, { text: "Karşılaştırma", ok: false }
    ],
  },
  // --- SENARYO 5 (9-11) ---
  {
    text: CTX3D + "<p><b>9. Bu parçaya göre müsilajla ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "Parçada müsilajın oluşumundaki en önemli etkenin çevre kirliliği olduğu değil, 'en önemli etkenlerden biri' olduğu belirtilmiştir.",
    answers: [
      { text: "Diğer canlılar tarafından üretilen bir maddedir.", ok: false },
      { text: "Sosyal açıdan çeşitli olumsuzluklara neden olmaktadır.", ok: false },
      { text: "Ekolojik sistemi yakından ilgilendirir.", ok: false },
      { text: "Oluşumundaki en önemli etken çevre kirliliğidir.", ok: true },
      { text: "Bazı canlıların yaşam fonksiyonlarıyla bağlantısı vardır.", ok: false }
    ],
  },
  {
    text: CTX3D + "<p><b>10. Bu parçanın anlatımında aşağıdakilerden hangisine yer <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "Metinde müsilajın etkileri 'sayıp dökülmüş', sümüksü yapıya 'benzetilmiş', etkenler 'karşılaştırılmış' ve genel yargılara varılmıştır ancak 'Tanık gösterme' (bir kişinin sözünü paylaşma) yoktur.",
    answers: [
      { text: "Sayıp dökme", ok: false }, { text: "Benzetme", ok: false }, { text: "Genelleme", ok: false },
      { text: "Karşılaştırma", ok: false }, { text: "Tanık gösterme", ok: true }
    ],
  },
  {
    text: CTX3D + "<p><b>11. Bu parçada aşağıdaki sebep-sonuç ifadelerinden hangisine <u>değinilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "Müsilajın beslenme ve üreme faaliyetlerini etkilediği söylenmiştir ancak bunun sonucunda 'balık çeşitliliğinin azalması' gibi spesifik bir sonuca değinilmemiştir.",
    answers: [
      { text: "Deniz sıcaklığının yükselmesi sonucu denizlerdeki bakterilerin artması", ok: false },
      { text: "Denizlerde oluşturduğu görüntü kirliliği sonucu turizmin ve ekonominin etkilenmesi", ok: false },
      { text: "Ağlara yapışması sonucu balıkçıların avlanamaması", ok: false },
      { text: "Diğer deniz canlılarının yaşam döngülerini etkilemesi sonucu denizlerdeki balık çeşitliliğinin azalması", ok: true },
      { text: "Bitkilerin müsilaj salgılaması sonucu besinlerini depolaması", ok: false }
    ],
  }
];