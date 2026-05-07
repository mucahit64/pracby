import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFTA ANA DÜŞÜNCE - TEST 1
// ============================================================================
export const TUR_PARAGRAFTA_ANA_DUSUNCE_TEST_1: McQ[] = [
  {
    text: "<p>Bir bakıma bilgilerle hem de bilimsel bile demeye sakınca görülmeyen bilgilerle dolup taşar en gözde edebiyat yapıtları... Sosyolojiyle, ekonomiyle, tarihle yüklü yapıtların yazarı değil mi bütün bu yazarlar?</p><p><b>Bu parçada <u>asıl anlatılmak istenen</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Parçada edebiyat yapıtlarının bilimsel bilgilerle (fizik, psikoloji, sosyoloji vb.) dolu olduğu ve bu bilgilerin edebiyata kaynaklık ettiği vurgulanmaktadır.",
    answers: [
      { text: "Edebî eserler, bilimsel çalışmalara ilham kaynağı olabilir.", ok: false },
      { text: "Edebî eserden hareketle bilim insanları yeni buluşlar gerçekleştirebilir.", ok: false },
      { text: "Bilim, edebiyata kaynaklık etmektedir.", ok: true },
      { text: "Edebiyatla bilim etkileşim içinde varlıklarını sürdürür.", ok: false },
      { text: "Yazar; bilimlere ait olguları, ilkeleri edebiyatın kuralları içinde kullanmalıdır.", ok: false }
    ]
  },
  {
    text: "<p>\"Yeni roman\" bize bir şeyler gösterdi. Yaşam, ne denli ilginç, ne denli serüvenlerle dolu olursa olsun roman değildir... Roman kimsenin yaşamı değildir; kendisine özgü bir yaşamı, dünyası vardır.</p><p><b>Bu parçada <u>asıl anlatılmak istenen</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Parçada romanın gerçek yaşamın birebir kopyası olmadığı, kendine has bir kurgusal dünyası ve dili olduğu anlatılmaktadır.",
    answers: [
      { text: "Yaşam, romanın konusu olmak için yeterlidir.", ok: false },
      { text: "Roman, yaşamı kendine has bir kurgu ve dille yansıtır.", ok: true },
      { text: "Serüvenlerle dolu bir yaşam ancak romanın konusu olabilir.", ok: false },
      { text: "Roman hakkında bilgisi olmayanlar romandaki yaşamı gerçek sanır.", ok: false },
      { text: "Roman gerçek yaşamı konu almazsa başarısız olur.", ok: false }
    ]
  },
  {
    text: "<p>Bir kokunun yaratacağı çağrışımlarla o sırada yaşanan ruh durumunun uyuşması zorunluluğu vardır... İşte parfüm kullanma sanatının bütün gizi <u>budur</u>.</p><p><b>Bu parçada altı çizili söz ile;</b></p><p>I. kişinin belirlediği, duygu durumuna uygun kokuyu yanında taşıması,<br>II. ilgi çekici bir parfümün sahip olduğu özelliklerin bilinmesi,<br>III. kokuların anımsattığı duyguyu algılama yetisini geliştirmesi</p><p><b>durumlarından hangilerine gönderme yapılmıştır?</b></p>",
    diff: 3,
    expl: "Parçada 'budur' sözüyle, kişinin ruh haline uygun parfümü seçmesi (I) ve kokuların gönderimlerini/çağrışımlarını algılama yetisini geliştirmesi (III) kastedilmiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true }
    ]
  },
  {
    text: "<p>\"Kendi tabii hâlinde bulunan hiçbir varlık bahtsız olamaz.\" diyor ünlü düşünür... Ama bir insan tasavvur ediniz ki atın börek istemesi gibi yapamayacağı, hazırlamasına imkân olmayan bir şeyi gönlüne koyar ve onu istemeye başlarsa işte o andan itibaren saadetin eşiğinden uzaklaşmış olur.</p><p><b>Bu parçaya göre, insanın mutlu olma ölçütü aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Parçada, insanın kendi doğasını/sınırlarını bilmesi ve yapamayacağı şeylerin peşinde koşmamasının mutluluk getirdiği, yani yaradılış özelliklerini kabullenmesi gerektiği vurgulanmıştır.",
    answers: [
      { text: "Yaradılış özelliklerini kabullenmesi", ok: true },
      { text: "Varlıkların sınırlarını zorlaması", ok: false },
      { text: "Hâlihazırdaki yetilerinin farkında olması", ok: false },
      { text: "Doğuştan gelen yetenekleri geliştirmesi", ok: false },
      { text: "Canlılardaki kalıtsal ögelerin aktarılması", ok: false }
    ]
  },
  {
    text: "<p>...Şiir sanatı; şiiri yaratanda başta özgünlük olmak üzere, iyimserlik dolu, gerçeğe gönül vermiş bir tutum ister ki zaten asıl yetkinlik de bunun ardında gizlidir. Dışardan gelen her türlü baskı bu temiz gücü yok edecektir ve bundan sonra şiir, şiir olmaktan çıkar...</p><p><b>Bu parçada eleştirilen düşünce aşağıdaki cümlelerin hangisinde özetlenmiştir?</b></p>",
    diff: 2,
    expl: "Parçada şiirin dış baskılarla veya başkalarının istediği şekilde (ısmarlama) yazılamayacağı, bunun şiirin özgünlüğünü ve sanat değerini yok ettiği eleştirilmektedir.",
    answers: [
      { text: "Birçok sanat dalında olduğu gibi ısmarlama şiir olmaz.", ok: true },
      { text: "Şiir, toplum gerçeklerini akıcı bir dille aktarmaktadır.", ok: false },
      { text: "Şiiri, şairlere yapılan dış baskılar olgunlaştırır.", ok: false },
      { text: "Bir sanat eserinin mükemmelliğini, toplumun beklentisi belirler.", ok: false },
      { text: "Şiirin özgün olması, kurgusal olmaması ile mümkündür.", ok: false }
    ]
  },
  {
    text: "<p>Çok güç yazarım çünkü yazı yazmak benim için hakiki ızdıraptır... Nerede olursa yazayım, herhangi kâğıda, her şekilde kalemle yazarım. Yalnız bildiğim bir şey varsa nerede olsa aynı güçlükle yazdığımdır.</p><p><b>Bu sözler aşağıdaki sorulardan hangisine karşılık söylenmiş olabilir?</b></p>",
    diff: 2,
    expl: "Yazar, yazma sürecinin zorluğunu ve hangi fiziksel şartlar altında (kâğıt, kalem, mekan) nasıl yazdığını anlattığı için bu bir 'Eserlerinizi nasıl kaleme alırsınız?' sorusuna cevaptır.",
    answers: [
      { text: "Eserlerinizi nasıl kaleme alırsınız?", ok: true },
      { text: "Yazma sürecinizi neler etkiler?", ok: false },
      { text: "Fiziki şartlar sizi engeller mi?", ok: false },
      { text: "Yazmaya sizi iten şey nedir?", ok: false },
      { text: "Bir yazıda ne gibi özellikler olmalıdır?", ok: false }
    ]
  },
  {
    text: "<p>Bu soruyu düşünür Montaigne ünlü \"Denemeler\"inde şöyle yanıtlıyor: \"Gerçek felsefe, bize yaşamayı öğreten felsefedir... felsefe bir bilimse bilimlerin en zoru, en çetini de hayatı iyi yaşamayı bilmektir. Çünkü insanın en büyük ve en onurlu eseri, hayatı doğru dürüst yaşamaktır.</p><p><b>Bu sözler aşağıdaki sorulardan hangisine karşılık söylenmiş olabilir?</b></p>",
    diff: 2,
    expl: "Parçada felsefenin yaşamayı öğretmesi ve insanın hayatına kattığı anlam/kalite üzerinde durulduğu için 'Felsefenin yaşama etkisi var mıdır?' sorusuna yönelik bir açıklamadır.",
    answers: [
      { text: "Sizce yaşamın tanımı nasıl olmalıdır?", ok: false },
      { text: "Felsefenin yaşama etkisi var mıdır?", ok: true },
      { text: "Yaşama yön veren felsefe midir?", ok: false },
      { text: "Bilimin hayatımızdaki yeri nedir?", ok: false },
      { text: "Hayatın evreleri nasıl yaşanmalıdır?", ok: false }
    ]
  },
  {
    text: "<p>...Demek ki kitle iletişimi artık sınırları ortadan kaldırmış, dünyayı küçük bir köy hâline getirmiştir, bu da dile yansımıştır.</p><p><b>Bu parçada <u>asıl anlatılmak istenen</u> aşağıdakiler-den hangisidir?</b></p>",
    diff: 2,
    expl: "Parçada toplumsal ve teknolojik değişimin (internet, kitle iletişimi vb.) dünyayı küçülttüğü ve bu değişimin en nihayetinde dili etkilediği vurgulanmaktadır.",
    answers: [
      { text: "Teknoloji, dünyayı insanların odasına taşımaktadır.", ok: false },
      { text: "İnsandaki sosyalleşme ihtiyacı dillerin doğuşunda etkilidir.", ok: false },
      { text: "Sanayi toplumunda insan, sosyal medya dili ile kendini ifade eder.", ok: false },
      { text: "İnsanın kendini anlatma ihtiyacı, günümüzde daha kolaydır.", ok: false },
      { text: "Toplumsal değişim, teknoloji, sosyal medya gibi unsurlar dili etkilemektedir.", ok: true }
    ]
  },
  {
    text: "<p>Yazın çevirmenliği her şeyden önce, kaynak dil ve amaç dilin iyi bilinmesini gerektirir... Oysa bizdeki eğitimin her düzeyinde ana dili öğretiminin yetersizliği hepimizin bildiği bir gerçektir. Ana dili eğitimindeki bu eksiklik de ancak sonradan alınacak yazın çevirmenliği eğitimi ile giderilir.</p><p><b>Aşağıdakilerden hangisi bu paragrafın ana düşüncesidir?</b></p>",
    diff: 2,
    expl: "Parçada çevirmenlik için ana dilin çok iyi bilinmesi gerektiği ancak Türkiye'deki ana dili eğitiminin yetersiz olduğu vurgulandığından, asıl sorun ana dili öğretiminin yeterince yapılmamasıdır.",
    answers: [
      { text: "Ana dili eğitiminin küçük yaşta kazandırılması çok önemlidir.", ok: false },
      { text: "Ana dili öğretimi okullarımızda yeterince öğretilmemektedir.", ok: true },
      { text: "Türkçenin öğrenilmesi ve doğru kullanılması edebî çevirmenlikte gerekliliktir.", ok: false },
      { text: "Çevirmenler, Türkçeye gereken özeni göstermemektedir.", ok: false },
      { text: "Yazın çevirmenliği, yabancı dil bilen her bireyin yapabileceği bir iştir.", ok: false }
    ]
  },
  {
    text: "<p><b>Gazeteci:</b> Günümüz edebiyat anlayışını nasıl buluyorsunuz?<br><b>Eleştirmen:</b> Bence felaket... \"Anlaşılmıyorsa sanattır!\" düşüncesine sahip, \"Kral çıplak!\" diyemeyenlerce yapılan sanat, deli ediyor beni.</p><p><b>Bu diyalogda eleştirmenin bir sanat yapıtından bekledikleri arasında;</b><br>I. anlatımın sade olması,<br>II. metnin kapalı olmaması,<br>III. imgelere yer verilmesi<br><b>özelliklerinden hangileri gösterilebilir?</b></p>",
    diff: 3,
    expl: "Eleştirmen 'anlaşılmıyorsa sanattır' anlayışına karşı çıktığına göre, metnin anlaşılır (kapalı olmaması) ve sade bir anlatıma sahip olmasını beklemektedir. İmge kapalı anlatıma yol açabileceği için istenen özelliklerden biri olamaz.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p>Her edebî eserin ortağıdır okur. Bir yazın yapıtı da ancak okurda yaşar... Onlar; okurca yaşandıklarında, okurların belleğinde yaşam kazanır, ölümsüzleşir.</p><p><b>Bu parçada aşağıdaki yargılardan özellikle hangisi vurgulanmaktadır?</b></p>",
    diff: 2,
    expl: "Parçada bir edebî eserin kalıcı/ölümsüz olmasının ancak okur tarafından okunması ve belleğinde yaşatılmasıyla mümkün olduğu belirtilmiştir.",
    answers: [
      { text: "Edebî bir yapıt ancak yazarın yaşamını yansıtırsa kalıcı olabilir.", ok: false },
      { text: "Bir yapıtın özgünlüğü okura ulaşmasına bağlıdır.", ok: false },
      { text: "Ancak okurla yaşam bulan eserler kalıcılığı yakalayabilir.", ok: true },
      { text: "Bir metnin tanınması, yapıtın okur tarafından sevilmesine bağlıdır.", ok: false },
      { text: "Gerçek okur, edebî eseri yorumlayarak eserin anlamını çoğaltan kişidir.", ok: false }
    ]
  },
  {
    text: "<p>...Üstelik geri kalanı, maliyeti birçokları tarafından tahmin dahi edilemeyen maddelerden oluşuyor. Aralarında en vurucu olanlardan biri de ışık kirliliği... yolumuzu aydınlatan ışık, yaşama tutunmak için ışığa olduğu kadar karanlığa da gereksinim duyan canlıların habitatını parçalıyor...</p><p><b>Bu parçada yazarın <u>asıl eleştirdiği</u> durum aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yazar, ışığın kontrolsüz/gereksiz kullanımının (ışık kirliliği) karanlığa ihtiyaç duyan canlılara ve ekolojik dengeye zarar vermesini eleştirmektedir.",
    answers: [
      { text: "Işık, birçok bitkinin üreyip gelişebilmesi, yaşamını sürdürebilmesi için gerekli bir fiziksel çevre faktörüdür.", ok: false },
      { text: "Gelecek nesillere yaşanabilir bir dünya bırakmamız adına doğanın korunması büyük öneme sahiptir.", ok: false },
      { text: "Işık, birçok alanda büyük ihtiyaç olmasına rağmen yanlış yerde, yanlış miktarda kullanılması canlılara zarar vermektedir.", ok: true },
      { text: "Cadde ve sokak lambalarının yanı sıra çeşitli ışık oyunları ve ışık gösterileri ışığın gereksiz kullanıldığını göstermektedir.", ok: false },
      { text: "Nüfus artışı, doğal kaynakların bilinçsiz kullanılması, plansız endüstrileşme gibi etkenler çevre kirliliğine sebep olmaktadır.", ok: false }
    ]
  }
];

// ============================================================================
// PARAGRAFTA ANA DÜŞÜNCE - TEST 2
// ============================================================================
export const TUR_PARAGRAFTA_ANA_DUSUNCE_TEST_2: McQ[] = [
  {
    text: "<p>Yaşadığımız salgın dönemi pek çok yeni gerçeklikle yüzleştiriyor bizi... O hikâyelerden birine, Yoko Tawada'nın kaleminden çıkan \"Tokyo'nun Son Çocukları\" örnek gösterilebilir... Yaşadığımız pandemi süreciyle benzerlik taşıyan distopik romanda Yoko Tawada \"Yaşamanın yolunu bir şekilde bulmayı beceren insan n sadece nefes alıp vermesine yaşamak diyebilir miyiz?\" sorusunu gündeme getiriyor.</p><p><b>Bu parçadan hareketle aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "Metinde, pandemi gibi gerçek hayatta yaşanan sıkıntıların ve küresel felaketlerin edebî eserlere (distopik romanlara) konu olabildiği anlatılmaktadır.",
    answers: [
      { text: "Küresel salgınla birlikte birçok insanın yaşamını kaybettiği", ok: false },
      { text: "Yaşanan sıkıntıların edebî eserlerde konu olarak işlenebildiği", ok: true },
      { text: "Yoko Tawada'nın eserlerinin büyük oranda birbirine benzerlik gösterdiği", ok: false },
      { text: "Hikâyenin kahramanlarından birinin Tokyo'da yaşayan, yüz yaşını aşmış bir kişi olduğu", ok: false },
      { text: "Yoko Tawada'nın eserlerinde daha çok Franz Kafka'nın etkisi olduğu", ok: false }
    ]
  },
  {
    text: "<p>Kapalılık, gizlilik bir sığınaktır kimi insanlara. Karanlığa bürünmek, kurtarır aydınlıkta bazı davranışlara girişmekten korkanları... Göremezsin gerçeği, yolu yanlış sanılar ağır basar... Yaşamın her alanında böyledir, en ufak işten en büyüğüne dek!</p><p><b>Bu parçada <u>asıl anlatılmak istenen</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Parçada insanların dürüst olmamasının ve görüşlerini açıkça ifade etmemesinin (kapalılığın) başarı kazanmanın önündeki bir engel olduğu, açık görüşlülüğün ise kazandıracağı vurgulanmıştır.",
    answers: [
      { text: "Günümüzde farklı kişiliklere sahip insanlar bulunmaktadır.", ok: false },
      { text: "Görüşlerini dürüst bir şekilde açıklayan insanlar kapalılıktan hoşlanmaz.", ok: true },
      { text: "Bazı insanlar düşüncelerini gizleyerek hedeflerine ulaştıklarını zannerderler.", ok: false },
      { text: "Taraf tutmak, her alanda bireylere çok şey kazandırmaktadır.", ok: false },
      { text: "Karanlıkta kalmayı, gizliliği tercih eden insanlara güven duymak oldukça zordur.", ok: false }
    ]
  },
  {
    text: "<p>İnsanoğlu hatalı bir davranışı çoğu zaman haklı göstermeye çalışır... Kıvılcım küçük olsa da şartlar hazır olduğunda yangını başlatmak için yeterlidir... Tekrarlar alışkanlığa dönüşür ve doğal kabul edilmeye başlanır. Dürüstlüğün, herkese olması gereken bir değer iken günümüzde \"üstün bir nitelik\" hâlini alması garip değil mi?</p><p><b>Bu parçadan çıkarılabilecek <u>en kapsamlı yargı</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Küçük hataların zamanla normalleşmesi, dürüstlük gibi temel erdemlerin artık 'üstün nitelik' sanılmasına ve doğruluğun bir meziyet gibi algılanmasına yol açmıştır.",
    answers: [
      { text: "İnsanlar, yanlış davranışlarının üstünü örtmek için her zaman bir gerekçe bulurlar.", ok: false },
      { text: "Dürüstlük, her insanda olması gereken en önemli erdemdir.", ok: false },
      { text: "Yanlış bir davranışımız her zaman daha büyük yanlışları da beraberinde getirir.", ok: false },
      { text: "Yanlışlar normalleştirildiğinden doğruluk, meziyet hâline geldi.", ok: true },
      { text: "Prensiplerden ödün vermek, insani değerlerin zamanla yozlaşmasına neden olur.", ok: false }
    ]
  },
  {
    text: "<p>...Görüldüğü gibi Piri Reis, imkânları kısıtlı olmasına rağmen bilime büyük katkılarda bulunmuştur. İnsanlar onun haritalarıyla dünyayı tanımış, dünyanın neresinde ne olduğunu öğrenmişlerdir.</p><p><b>Bu parçadan hareketle Piri Reis ile ilgili aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 2,
    expl: "Piri Reis'in o dönemin kısıtlı imkânlarına rağmen hazırladığı haritalarla tüm insanlığa dünyayı tanıttığı vurgulanmıştır.",
    answers: [
      { text: "Piri Reis'in coğrafya alanında birçok araştırması bulunmaktadır.", ok: false },
      { text: "Antarktika kıtasının yüzyıllar boyu buzul örtüsüyle kaplı olması, onun keşfedilmesini engellemiştir.", ok: false },
      { text: "Piri Reis, tüm olanaksızlıklara rağmen insanlığa dünyayı tanıtmıştır.", ok: true },
      { text: "Hazırladığı harita ile dönemin en önemli denizcisi olduğunu göstermiştir.", ok: false },
      { text: "Yaşamı boyunca birçok harita çizen Piri Reis'in bu çizimleri günümüzde çizilen uydu fotoğraflarıyla uyuşmamaktadır.", ok: false }
    ]
  },
  {
    text: "<p>...Ahmet Mithat, Paris'i gördükten sonra bir de şiir yazar ama bu şiir hiç beğenilmez... Cemal Süreya, Kars'ı gördükten sonra bu kente ilişkin bir şiir daha yazdığını ama Kars'ı görmeden yazdığı şiirin, ikincisinden çok daha güzel olduğunu, bu yüzden, ikinci şiiri yırtıp attığını sık sık anlatmıştır.</p><p><b>Bu parçada aşağıdakilerden hangisi vurgulanmaktadır?</b></p>",
    diff: 3,
    expl: "Parçada sanatçıların görmedikleri yerler hakkında sadece hayal güçlerini kullanarak yazdıkları eserlerin, gördükten sonra yazdıklarından daha nitelikli olabildiği anlatılmaktadır.",
    answers: [
      { text: "Düşlenerek yazılan yapıtlar daha kalıcı nitelik taşırlar.", ok: false },
      { text: "Düş gücünün gelişmişliğiyle sanatçının yetkinliği arasında sıkı bir ilişki vardır.", ok: false },
      { text: "Aynı konu, farklı sanatçılar tarafından değişik şekillerde işlenebilir.", ok: false },
      { text: "Düş gücüne yaslanılarak yazılan yapıtlar, gözlemlenerek yazılanlardan nitelikli olabilir.", ok: true },
      { text: "Sanatçıyı sıradan insandan ayıran nitelik, düş gücünün gelişmişliğidir.", ok: false }
    ]
  },
  {
    text: "<p>Yıllardır deneyimlerim sayesinde beklemenin güzelliğini öğrendim. Yaşanan en güzel şey bile bekleme sürecinin değerine ulaşamaz bence. Çünkü heyecan dolu bir eylem olan beklemenin büyülü bir güzelliği vardır. Sonuca ulaşılınca bu büyü uçup gider...</p><p><b>Bu parçada beklemeyle ilgili olarak <u>asıl anlatılmak istenen</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yazar, bir şeyi bekleme sürecinin ve o andaki heyecanın, ulaşılan sonuçtan (neticeden) çok daha değerli ve güzel olduğunu savunmaktadır.",
    answers: [
      { text: "İnsana sabırlı olmayı öğrettiği", ok: false },
      { text: "Yaşamımızı yönlendirmede payının olduğu", ok: false },
      { text: "Beklemenin neticeden daha güzel olduğu", ok: true },
      { text: "Umulanın her zaman gerçekleşmediği", ok: false },
      { text: "İnsanı geçmişi üzerine düşündürdüğü", ok: false }
    ]
  },
  {
    text: "<p>İnat etmeyi, inanmayı ya da geleceğe iyimser bakmayı mı seçersiniz bilemiyorum ama bu üçünden en az ikisi bir araya geldiğinde iyi şeylerin gerçekleşmesi mümkün... Biz inandığımız şeyi yapmaya çalıştıkça çoğunlukla inandığını yapmayan insanlar \"Yapamazsın, boş ver!\" diyerek yapmak istediğimiz şeyden bizi caydırmaya çalışıyor...</p><p><b>Bu parçadan çıkarılabilecek <u>en kapsamlı yargı</u> aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Kişinin inandığı yolda gitmesi, başkalarının olumsuz telkinlerine (caydırıcılara) rağmen inandığı şeyi yapmaya devam etmesi gerektiği anlatılmaktadır.",
    answers: [
      { text: "İnandığı şeyin peşinden giden güçlüklere de direnmelidir.", ok: true },
      { text: "Umut, ortak bir inançla hareket eden insanlarda daha fazladır.", ok: false },
      { text: "Olaylara gerçekçi bir açıdan bakmak, hayata karşı sağlam durmamızı sağlar.", ok: false },
      { text: "Çıkar gözetmeden içimizden geldiği gibi hareket etmek mutluluk getirir.", ok: false },
      { text: "Hedeflerimize engel olmak isteyen insanlardan uzak durmak gerekir.", ok: false }
    ]
  },
  {
    text: "<p>İyi roman; anlatılan insanların yaşamlarından ders alınacak, kıssadan hisse çıkarılacak, en azından insana \"Peki, ben ne yapıyorum?\" dedirtecek türden olmalıdır. Bunun için romancı önce filozof olmalı; hayatı sorgulamalı, doğruyu yanlışı görebilmeli ve bunu açıkça eserinde dile getirebilmelidir.</p><p><b>Bu sözleri söyleyen kişiye göre roman nasıl olmalıdır?</b></p>",
    diff: 2,
    expl: "Yazar, romanın okuyucuyu sorgulatan, ona hayatı öğreten ve yaşamını yönlendiren bir eğitici yönü (filozof gibi) olması gerektiğini savunmaktadır.",
    answers: [
      { text: "Birçok insanın yaşamından izler taşımalıdır.", ok: false },
      { text: "Okura gerçek hayatı tüm nesnelliğiyle anlatmalıdır.", ok: false },
      { text: "Yaşamı yönlendirecek eğiticilikte olmalıdır.", ok: true },
      { text: "Okuru tanımadığı dünyalara götürmelidir.", ok: false },
      { text: "Herkesin anlayabileceği bir dille yazılmalıdır.", ok: false }
    ]
  }
];