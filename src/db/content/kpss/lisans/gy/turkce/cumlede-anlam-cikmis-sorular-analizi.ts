import { McQ } from "../../../../types";

// ============================================================================
// CÜMLEDE ANLAM ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_CUMLEDE_ANLAM_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Alışkanlık hâline gelmiş bir iş yapılmaya başlandığı zaman beyin; karar verme sürecine ----, çok çalışmayı bırakır ya da ---- başka işlere kaydırır.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Alışkanlık hâline gelen işlerde beyin karar verme sürecine 'ara verir', çok çalışmayı bırakır ya da 'önceliğini' başka işlere kaydırır. Beynin geçici olarak bu süreci durdurması ve önem sırasını değiştirmesi anlatıldığı için doğru eşleşme E seçeneğidir.",
    answers: [
      { text: "yoğunlaşır - dikkatini", ok: false },
      { text: "ket vurur - eğilimini", ok: false },
      { text: "odaklanır - enerjisini", ok: false },
      { text: "geçiş yapar - gücünü", ok: false },
      { text: "ara verir - önceliğini", ok: true }
    ]
  },
  {
    text: "<p>Edebiyat takipçilerinin bir bölümü, kitaba dokunmanın ---- düşüncesinden hareketle basılı kitapların yıllar içinde ortadan kalkacağı öngörüsüne karşı çıksa da elektronik kitapların taşınma kolaylıkları ve düşük maliyetleri bu tahminin gerçekleşme ---- artırıyor.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Basılı kitabı savunanlar, kitaba dokunmanın 'mutluluk verdiği' düşüncesinden hareket eder; buna karşın elektronik kitapların avantajları basılı kitabın ortadan kalkması tahmininin gerçekleşme 'olasılığını' artırır.",
    answers: [
      { text: "yaratıcılığı geliştirdiği - beklentisini", ok: false },
      { text: "mutluluk verdiği - olasılığını", ok: true },
      { text: "heyecan yaşattığı - oranını", ok: false },
      { text: "kaygıyı artırdığı - ihtimalini", ok: false },
      { text: "huzur sağladığı - sıklığını", ok: false }
    ]
  },
  {
    text: "<p>Yedinci Sanat olarak da adlandırılan sinema; hemen hemen bütün sanatlardan ----, diğerlerinden aldığı malzemeleri kurmaca bir yapıyla ---- film hâlinde seyirciye sunan bir sanat dalıdır.</p><p><b>Bu cümlede boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Sinema diğer sanatlardan 'beslenen' (ilham/materyal alan) ve bu farklı disiplinlerden gelen malzemeleri kendi içinde 'birleştirerek' yeni bir eser çıkaran bir sanat dalıdır.",
    answers: [
      { text: "beslenen - birleştirerek", ok: true },
      { text: "üretilen - çözümleyerek", ok: false },
      { text: "etkilenen - parçalayarak", ok: false },
      { text: "esinlenen - soyutlayarak", ok: false },
      { text: "çoğaltılan - özgürleştirerek", ok: false }
    ]
  },
  {
    text: "<p>Hastalanmış veya hasar görmüş bir organın sağlam olanıyla değiştirilmesi fikri ve bu düşünce çerçevesinde gerçekleştirilen deneysel girişimler çok eskilere ----. Ancak efsaneler bir yana bırakılacak olursa organ naklinin tarihçesi büyük ölçüde son 60-70 yıllık ----.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Fikirlerin çok eskilere 'dayandığı' (temellendiği) ancak somut tıbbi gerçeklerin (efsaneler hariç) yakın bir süreci 'kapsadığı' belirtilmelidir.",
    answers: [
      { text: "tarihleniyor - gösteriyor", ok: false },
      { text: "dayanıyor - kapsıyor", ok: true },
      { text: "uzanıyor - düşündürüyor", ok: false },
      { text: "bağlanıyor - takip ediyor", ok: false },
      { text: "işaret ediyor - içeriyor", ok: false }
    ]
  },
  {
    text: "<p>Kimi yazarlar romanın toplum hayatındaki aksaklıkların ortadan kalkmasına yardım etmesini, ---- isterken kimileri ise romanın bir toplum bilimi kitabı değil bir sanat eseri olduğunu, ondan ancak ---- beklenebileceğini ileri sürer.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "İlk grup romanın topluma 'kılavuzluk yapmasını' veya 'doğru yolu göstermesini' isterken, ikinci grup romanı bir sanat eseri olarak gördüğü için ondan 'edebî güzellik' bekler.",
    answers: [
      { text: "doğru yolu göstermesini - edebî güzelliğin", ok: true },
      { text: "gerçekleri yansıtmasını - kılavuzluk yapmasının", ok: false },
      { text: "güzellikleri anlatmasını - kusursuz dil kullanımının", ok: false },
      { text: "ironiyi öne çıkarmasını - iyi bir anlatımın", ok: false },
      { text: "geleneği aktarmasını - mantıksal bir akışın", ok: false }
    ]
  },
  {
    text: "<p>Modernliğin gölgesine hapsedilen gelenek; sosyal bilimlerde uzun yıllar ----, en ılımlı yazarlardan en keskin görüşlü olanlara dek bir dizi sert eleştirinin ---- olmuştur.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Modernliğin gölgesinde kalan gelenek, olumsuz bir bakışla 'kötü bir şöhretle anılmış' ve ılımlı ya da keskin pek çok yazarın sert eleştirilerinin 'odağı' olmuştur. 'Sert eleştiri' ifadesiyle uyumlu olan olumsuz anlam E seçeneğindedir.",
    answers: [
      { text: "gelişimin dayanağı sayılmış - merkezi", ok: false },
      { text: "farklı açılardan tartışılmış - amacı", ok: false },
      { text: "bir ideal olarak görülmüş - konusu", ok: false },
      { text: "detaylı bir şekilde incelemiş - önceliği", ok: false },
      { text: "kötü bir şöhretle anılmış - odağı", ok: true }
    ]
  },
  {
    text: "<p>Geri dönüşüm, ---- eşyaları alıp onları var olan biçimleriyle veya parçalarına ayırdıktan sonra başka şekillerde yeniden üretmektir. Araç lastiklerini öğütüp çocuk bahçeleri için yumuşak yer kaplamaları yapmak veya toplanan cam şişeleri eritip yenilerini üretmek geri dönüşüm ---- bazılarıdır.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Geri dönüşüm, 'kullanılmış' eşyaların yeniden üretilmesidir. Lastiklerin öğütülmesi ve cam şişelerin eritilmesi de geri dönüşüm 'uygulamalarından' bazılarıdır.",
    answers: [
      { text: "eski - eşyalarından", ok: false },
      { text: "hasarlı - aşamalarından", ok: false },
      { text: "ucuz - yollarından", ok: false },
      { text: "atık - düzeneklerinden", ok: false },
      { text: "kullanılmış - uygulamalarından", ok: true }
    ]
  },
  {
    text: "<p>Çektiğimiz fotoğrafları paylaşmak günümüzde o kadar ---- bir deneyim hâline geldi ki yemeklerden elbiselere, tablolardan binalara çevremizdeki hemen her şey ---- üretilmeye başlandı.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Fotoğraf paylaşmak o kadar 'yaygın' bir deneyim hâline gelmiştir ki çevremizdeki hemen her şey fotoğraflanıp paylaşılacak, yani 'sergilenecekmiş gibi' üretilmeye başlanmıştır.",
    answers: [
      { text: "gerçekçi - sanal âlemde", ok: false },
      { text: "karmaşık - son teknolojiyle", ok: false },
      { text: "başarılı - görünürlüğü azaltılarak", ok: false },
      { text: "cazip - sıradan tasarımlarla", ok: false },
      { text: "yaygın - sergilenecekmiş gibi", ok: true }
    ]
  },
  {
    text: "<p>Olaylar, sözler, davranışlar; fotoğrafta ışığın gümüşlü duyar katmanı etkilemesi gibi ---- birtakım izler bırakır. Bu izler, kişilerin ruhsal ---- göre kiminde açık seçik kiminde belli belirsizdir.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Işığın fotoğraf filmini etkilemesi gibi olaylar ve sözler de 'belleğimizde' iz bırakır; bu izlerin açık ya da belirsiz olması kişilerin ruhsal 'durumlarına' bağlıdır.",
    answers: [
      { text: "belleğimizde - durumlarına", ok: true },
      { text: "yaşamımızda - konumlarına", ok: false },
      { text: "tavırlarımızda - süreçlerine", ok: false },
      { text: "geçmişimizde - olgunluklarına", ok: false },
      { text: "çevremizde - eğilimlerine", ok: false }
    ]
  },
  {
    text: "<p>Sinemaya en yakın olan türün roman olduğu görüşüne katılmadığını ifade eden yönetmen; sinemanın tek ve kesin tanımını şimdiye kadar bulamamış olmakla birlikte sinemanın derdinin ---- olmadığını, filmin gerçek gücünün konuştuğu değil susup düşünceye ---- anlarda açığa çıktığını söyler.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Yönetmen, sinemanın romana yakın olduğu görüşüne katılmadığı için sinemanın derdinin romandaki gibi 'hikâye anlatmak' olmadığını; filmin gücünün sustuğu ve düşünceye 'yer açtığı' anlarda ortaya çıktığını söyler.",
    answers: [
      { text: "doğruyu göstermek - zaman ayırdığı", ok: false },
      { text: "kendini tanımlamak - gölge düşürdüğü", ok: false },
      { text: "duyarlılık oluşturmak - tepki gösterdiği", ok: false },
      { text: "hikâye anlatmak - yer açtığı", ok: true },
      { text: "telkinde bulunmak - boşluk bıraktığı", ok: false }
    ]
  },
  {
    text: "<p>Hayatımızı sahte fotoğraflarla, yalancı mutluluk kurmacalarıyla ---- bir tür kendi hikâyemizden kaçma çabasıdır ve bütün bu süslü kurmacalar kendimizle olan ---- üstünü örtmektir aslında.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Hayatı sahte fotoğraflarla 'teşhir etmek' kendi hikâyemizden kaçma çabasıdır; bu süslü kurmacalar da kendimizle olan 'kavgamızın' (iç çatışmamızın) üstünü örter.",
    answers: [
      { text: "teşhir etmek - kavgamızın", ok: true },
      { text: "bezemek - yarışımızın", ok: false },
      { text: "ortaya dökmek - uyumumuzun", ok: false },
      { text: "ifşa etmek - çatışmamızın", ok: false },
      { text: "yok etmek - mücadelemizin", ok: false }
    ]
  },
  {
    text: "<p>---- benlikten sıyrılıp farklılaşma arayışına girerek özgün bir varoluş biçimi bulma isteği taşıyanlar, yaşam tarzlarının küreselleşmeye bağlı olarak ---- şeklinde görülen modernliğin güncel biçimlerine karşı eleştirel bir uyanıklığa sahiptir.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Farklılaşma ve özgünlük arayışındaki kişiler 'taklitçi' benlikten sıyrılmak ister; eleştirdikleri modernlik ise yaşam tarzlarının küreselleşmeyle birlikte birbirine benzemesi, yani 'aynılaşması' şeklinde görülür.",
    answers: [
      { text: "Bağımsız - zenginleşmesi", ok: false },
      { text: "Taklitçi - aynılaşması", ok: true },
      { text: "Basmakalıp - özelleşmesi", ok: false },
      { text: "Tekdüzeleşen - aşırılaşması", ok: false },
      { text: "Bireyselleşen - yaygınlaşması", ok: false }
    ]
  },
  {
    text: "<p>(I) Japonya'nın en prestijli edebiyat ödülü sayılan Akutagawa Ödülü'ne, Rie Kudan layık görüldü. (II) Ödülü kazandığı kitabı hakkında eleştirmenler \"O kadar mükemmel ki hata bulmak zor.\" yorumunu yaptı. (III) Ancak ödül töreninde Kudan, kitabını yazmak için yapay zekâyı kullandığını açıklayarak herkesi şaşırttı. (IV) Kitabının yaklaşık yüzde beşinin yapay zekâ üretimi olduğunu söyleyen yazar, yaratıcılık potansiyelinin açığa çıkmasında yapay zekânın yardımcı olduğunu belirtti. (V) Yazarın uyguladığı yöntemi kimileri desteklerken kimileri onun bu ödülü hak edip etmediğini hâlâ sorguluyor.</p><p><b>Bu parçada numaralanmış cümlelerde Rie Kudan ile ilgili aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "IV. cümlede yazar, yapay zekânın kendi yaratıcılık potansiyelinin açığa çıkmasında yardımcı olduğunu belirtmiştir; ancak kitap yazımında yapay zekâdan faydalanmayı önerdiğine dair bir ifade yoktur. Diğer seçeneklerdeki yargılar ilgili cümlelerde yer almaktadır.",
    answers: [
      { text: "I. cümlede, elde ettiği bir başarının önemine değinilmiştir.", ok: false },
      { text: "II. cümlede, eserinin eleştirmenlerce olumlu değerlendirildiği vurgulanmıştır.", ok: false },
      { text: "III. cümlede, ödül aldığı kitabın yazımında yararlandığı teknolojik imkândan söz edilmiştir.", ok: false },
      { text: "IV. cümlede, kitap yazımında yapay zekâdan faydalanmayı önerdiği belirtilmiştir.", ok: true },
      { text: "V. cümlede, uyguladığı yöntemle ilgili farklı görüşlerin olduğu ifade edilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Rol mesafesi kavramı, bireylerin kendilerini içinde bulundukları rollerden ayırmalarıyla ilgilidir. (II) Söz gelimi yaşı büyük bir çocuk atlıkarıncaya bindiğinde böyle bir deneyimi yaşamayacak kadar büyük olduğunu düşünebilir ve bundan rahatsızlık duyabilir. (III) Bu hisle mücadele yollarından biri, çocuğun atlıkarınca üzerindeyken tehlikeli eylemler sergileyerek rolle olan mesafesini göstermesidir. (IV) Çocuk eylemleriyle etkinliğe küçük çocukların yakıştığı kadar yakışmadığını veya etkinliğe katılmasının nedeninin yaptığı özel hareketler olduğunu açıklamaya çalışır. (V) Çocuk aslında bu davranışları sergilerken atlıkarıncayla küçük bir çocuk gibi ilgilenmediğini kanıtlama, rol mesafesini gösterme amacındadır.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>yanlıştır?</u></b></p>",
    diff: 3,
    expl: "IV. cümlede çocuğun sergilediği eylemlerle neyi anlatmaya çalıştığı açıklanmıştır; kavramı somutlaştırmak için başvurulan bir yöntem irdelenmemiştir. Kavram, II. cümledeki örnekle somutlaştırılmıştır.",
    answers: [
      { text: "I. cümlede konu hakkındaki kavramla ilgili tanımlayıcı bilgiye yer verilmiştir.", ok: false },
      { text: "II. cümlede kavramın anlamını pekiştiren kurgusal bir durumdan bahsedilmiştir.", ok: false },
      { text: "III. cümlede kavramın yarattığı olumsuz duygularla baş etme yöntemi örneklenmiştir.", ok: false },
      { text: "IV. cümlede kavramı somutlaştırmak için başvurulan yöntem irdelenmiştir.", ok: true },
      { text: "V. cümlede kavramın sebep olduğu eylemin temel nedeni vurgulanmıştır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Yeni bir araştırmada bilim insanları; gen düzenleme ve yapay zekâ kullanarak, evcilleştirilmiş bitkileri yabani otlardan ayıracak bir yöntem önerisi ortaya koydu. (II) Evcilleştirilmiş mahsullerin robot ayıklayıcılar tarafından kolayca tanınmasını hedefleyen bu yeni yöntemle yabani otları ayıklama sırasında kimyasal kullanımı da rafa kalkıyor. (III) Böylece hem yabani ot kontrolü kolaylaşıyor hem de mahsullerin çevresel strese karşı dayanıklılığı ve besin değeri artıyor. (IV) Genetik ve robotikteki son teknolojilerin bütünleştiği bu çalışma, daha sürdürülebilir ve verimli tarım uygulamalarına geçiş yapılabileceğini ortaya koyması bakımından oldukça heyecan verici. (V) Bu yeni yöntemin, yaygın kullanımına geçilirse tarımsal uygulamalarda ürün yönetimi konusunda çığır açacağı düşünülüyor.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerin hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "III. cümlede yeni yöntemin sağlayacağı yararlardan (yabani ot kontrolünün kolaylaşması, dayanıklılık ve besin değerinin artması) söz edilmiştir; yöntemin uygulanmasında dikkat edilecek hususlara değinilmemiştir.",
    answers: [
      { text: "I. cümlede, farklı yollarla gerçekleştirilecek yeni bir tarımsal yöntemden bahsedilmiştir.", ok: false },
      { text: "II. cümlede, yeni bulunan tarımsal yöntemin amacıyla ilgili bilgiye yer verilmiştir.", ok: false },
      { text: "III. cümlede, yeni yöntemin uygulanmasında dikkat edilecek hususlardan söz edilmiştir.", ok: true },
      { text: "IV. cümlede, bu yeni araştırmanın tarımsal faaliyetler açısından önemi vurgulanmıştır.", ok: false },
      { text: "V. cümlede, yeni yöntemin hayata geçirilmesi durumunda alana sunacağı katkı belirtilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Popüler kültür satın alınan, halk kültürü ise kendisi tarafından imal edilendir, bunun örneklerinden biri oyuncak bebeklerdir. (II) Eskiden insanlar günümüzdeki gibi oyuncak bebek satın almaz ellerindeki artık malzemelerden masal kahramanlarına veya anne ve baba figürlerine benzer oyuncak bebekler yaparlardı. (III) Popüler kültür, bir taraftan zamanı da yeni bir biçimde düzenlemeye başladığından şimdi oyuncak bebekler dev firmalar tarafından üretiliyor. (IV) İş insanları ve reklamcılar, kendi çıkarları doğrultusunda bir oyuncak bebek sektörü yaratarak bundan para kazanmaya başladı. (V) Böylece halk kültürü yok edildi, işlevini kaybetmeyenler ise birer popüler kültür nesnesine dönüştürüldü.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "IV. cümlede iş insanlarının ve reklamcıların oyuncak bebek sektörü yaratarak para kazanmaya başladığı bilgisi verilmiştir; bu cümlede örneklemeye yer verilmemiştir. Örnekleme (oyuncak bebekler) I. cümlede yapılmıştır.",
    answers: [
      { text: "I. cümlede tanımlama yapılmıştır.", ok: false },
      { text: "II. cümlede karşılaştırmadan yararlanılmıştır.", ok: false },
      { text: "III. cümlede güncel bir durumdan söz edilmiştir.", ok: false },
      { text: "IV. cümlede örneklemeye yer verilmiştir.", ok: true },
      { text: "V. cümlede bir sonuca değinilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Parlak mor çizgileriyle bir masal kitabına aitmiş gibi görünen bir balık türü; Tanzanya açıklarında, Hint Okyanusu'nun 80 metre derinliklerinde keşfedildi. (II) Cirrhilabrus wakanda denilen bu balık, ismini çizgi roman evreninin süper kahraman hikâyesi Kara Panter'den alıyor. (III) Araştırmacılar balığın göz alıcı renklerinin, Kara Panter'in ülkesi olan Wakanda halkının geleneksel elbiselerini andırdığını söylüyor. (IV) Söz konusu tür, dalma limitlerini zorlayan derinliklerde yaşadığı için bulunduğu mercan resifleri alaca karanlık bölgesi olarak adlandırılıyor. (V) Herkes tarafından ulaşılamayacak bir derinlikte kendine yaşam alanı bulan bu tür, böylelikle neslinin sürekliliğini garanti altına alıyor.</p><p><b>Bu parçada numaralanmış cümlelerde söz edilen Cirrhilabrus wakanda ile ilgili aşağıdakilerden hangisi <u>yanlıştır?</u></b></p>",
    diff: 3,
    expl: "IV. cümlede türün yaşadığı bölgeyi seçme nedeni değil, bulunduğu mercan resiflerinin neden 'alaca karanlık bölgesi' olarak adlandırıldığı açıklanmıştır. Diğer yargılar parçayla uyumludur: I. cümlede parlak mor çizgilerinden, II. cümlede adını Kara Panter'den aldığından, III. cümlede renklerinin Wakanda halkının elbiselerini andırdığından, V. cümlede neslinin sürekliliğinden söz edilmiştir.",
    answers: [
      { text: "I. cümlede, öne çıkan fiziksel özelliğinden bahsedilmiştir.", ok: false },
      { text: "II. cümlede, adının esinlenildiği kaynaktan söz edilmiştir.", ok: false },
      { text: "III. cümlede, hikâyedeki halkın giysileriyle benzer yönüne değinilmiştir.", ok: false },
      { text: "IV. cümlede, yaşadığı bölgeyi seçme nedenleri ifade edilmiştir.", ok: true },
      { text: "V. cümlede, türlerinin devamlılığıyla ilgili bilgi verilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Gerçekte kurmaca arasındaki sınır kimilerine belirgin kimilerine muğlak görünür. (II) Sınırın belirgin olduğuna emin olanlar Londra'daki üç katlı evi gezmeliler. (III) Bu ev, İngiliz yazar Arthur Conan Doyle'un yarattığı ünlü dedektif Sherlock Holmes'un yani gerçekte hiç yaşamamış, sadece bir roman karakteri olarak var olmuş birinin evidir. (IV) Holmes için kurulan müzeyi gezmek ve Victoria Dönemi'nde kullanılan nesnelerin fotoğraflarını çekmek ziyaretçilere yeni bir Sherlock Holmes hikâyesinin içine girme şansı verir. (V) Bu örneğe bakıldığında kurmacanın bir noktada gerçekliğe nüfuz ettiği ve kişilerin alımlama süreçlerinde bu etkinin rol oynadığı söylenebilir.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "IV. cümlede müzeyi gezmenin ve dönemin nesnelerini fotoğraflamanın ziyaretçilere bir Holmes hikâyesinin içine girme şansı verdiği söylenmiştir; karakterin yaşam tarzının somutlaştırılarak gerçekliğin yeniden üretildiği vurgulanmamıştır.",
    answers: [
      { text: "I. cümlede, gerçeklik ile kurmaca arasındaki ayrımın göreceli olduğundan bahsedilmektedir.", ok: false },
      { text: "II. cümlede, yazar kurmacanın gerçekliğe mesafeli olduğunu düşünen kitleye bir öneride bulunmuştur.", ok: false },
      { text: "III. cümlede, hayali bir varlığın mekânsal bir düzleme oturtulduğu ifade edilmektedir.", ok: false },
      { text: "IV. cümlede, karakterin yaşam tarzının somutlaştırılarak gerçekliğin yeniden üretildiği vurgulanmaktadır.", ok: true },
      { text: "V. cümlede, kurmaca ile gerçek dünya arasında bir ilişkinin var olduğu iddia edilmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Tarihçilerin sıklıkla ifade ettiği üzere geçmişi anımsayamayanlar onu yinelemek durumunda kalır.</p><p><b>Aşağıdakilerden hangisi bu cümle ile anlamca aynı doğrultudadır?</b></p>",
    diff: 2,
    expl: "Cümlede geçmişi hatırlamayanların aynı yaşananları tekrar etmek zorunda kalacağı, yani geçmişin ders alınarak bugüne ve geleceğe yol göstermesi gerektiği anlatılmaktadır. Bu düşünceyle aynı doğrultudaki yargı 'Geçmişte olanlar şimdiki zamana ve geleceğe kılavuzluk eder.' cümlesidir.",
    answers: [
      { text: "Geçmişin mirası ancak sürekli hatırlatılarak canlı tutulur.", ok: false },
      { text: "Geçmişte yaşananlar zaman geçtikçe anlaşılabilir hâle gelir.", ok: false },
      { text: "Geçmiş ancak geleceğe uyarlanabildiği ölçüde değer kazanır.", ok: false },
      { text: "Geçmişten uzaklaşamayanlar eskiye saplanıp geleceği ıskalar.", ok: false },
      { text: "Geçmişte olanlar şimdiki zamana ve geleceğe kılavuzluk eder.", ok: true }
    ]
  },
  {
    text: "<p>İçinde olmadığım bir dünyayı kitaplarla bana ait kılmak için durmadan okuyor, hiç gitmediğim ülkelere gidip bilmediğim hayatlar yaşıyordum.</p><p><b>Bu cümlede yazarın anlatmak istediği aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Yazar, içinde olmadığı dünyaları ve bilmediği hayatları kitaplar sayesinde tanıyıp yaşadığını anlatmaktadır. Bu da insanların kendilerine uzak ve haberdar olmadıkları yaşamları kitaplar aracılığıyla keşfedip deneyimleyebileceği anlamına gelir.",
    answers: [
      { text: "Kitaplar, okurlarına başka hayatlar sunarak onların kendi iç dünyalarını keşfetmesine yardımcı olabilir.", ok: false },
      { text: "İnsanlar, kendilerine uzak ve haberdar olmadıkları yaşamları kitaplar sayesinde keşfedip deneyimleyebilir.", ok: true },
      { text: "İnsan, zamanla kendini kitapların sunduğu farklı dünyalara ait hissederek buradaki yaşamları benimseyebilir.", ok: false },
      { text: "Farklı hayatlara sahip karakterlerin hikâyelerini okuyan insanlar, kitaplardaki hayatlarla bütünleşebilir.", ok: false },
      { text: "Kendi isteklerinin farkına vararak onları elde etmek isteyenler, kitapların zengin dünyasına sığınabilir.", ok: false }
    ]
  },
  {
    text: "<p>Van Gogh'a göre sanatçı, geçici heyecan ve hırslara kapılarak değil kalbinin derinliklerindeki cevheri sabırla işleyerek yüceliğe ulaşabilir.</p><p><b>Bu cümlede sanatçıyla ilgili vurgulanmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cümlede sanatçının dış etkenlere (geçici heyecan ve hırslara) kapılmadan, kalbinin derinliklerindeki cevheri, yani iç dünyasını işleyerek yüceliğe ulaşacağı vurgulanmıştır. Bu da kendini çeşitli etkilere kapatarak iç dünyasına yönelmesi anlamına gelir.",
    answers: [
      { text: "Başarının göreceliğini kabul edip kendine has çizgisini koruması", ok: false },
      { text: "Kendini çeşitli etkilere kapatarak iç dünyasına yönelmesi", ok: true },
      { text: "Eleştirilere kulak tıkayarak çalışmalarını hedef odaklı sürdürmesi", ok: false },
      { text: "Azimle çalışarak amacına kısa sürede ulaşmaya çabalaması", ok: false },
      { text: "Sınırları içine hapsolmayıp kendini sürekli yenilemesi", ok: false }
    ]
  },
  {
    text: "<p>Çocuklukta kelimeler düşünmeden ağzımızdan dökülüverir, onları nasıl giydireceğimizi ise büyümeye başlayınca öğreniriz.</p><p><b>Bu cümlede anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cümledeki 'kelimeleri giydirmek' ifadesi, düşünceleri etkili, doğru ve yerinde ifade etme biçimlerini seçmek demektir. Bu beceri de çocukluktaki doğallığın aksine zamanla ve tecrübeyle kazanılır.",
    answers: [
      { text: "Dili etkili kullanmak çaba isteyen bir uğraştır.", ok: false },
      { text: "Etkili ifade biçimleri zaman ve tecrübeyle kazanılır.", ok: true },
      { text: "Kelime dağarcığı gençlik döneminde zenginleşir.", ok: false },
      { text: "Olgun bireyler, ifade şekilleri doğru olan kişilerdir.", ok: false },
      { text: "Hızlı konuşma becerisi çocuklara özgüdür.", ok: false }
    ]
  },
  {
    text: "<p>İnsanlar, kitaplar aracılığıyla hiç karşılaşmadıkları kendileriyle konuşur.</p><p><b>Bu cümlede kitaplarla ilgili anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İnsanın kitaplar sayesinde 'hiç karşılaşmadığı kendisiyle' konuşması, kitapların kişinin kendi iç dünyasının bilinmeyen yönlerini fark etmesini sağladığını anlatır.",
    answers: [
      { text: "Hayal gücünün geliştirilmesine katkı sağladıkları", ok: false },
      { text: "Farklı hayatları görme fırsatı sundukları", ok: false },
      { text: "Yalnızlığı gideren bir yol arkadaşı oldukları", ok: false },
      { text: "Beklentilerin gerçekleşme umudunu artırdıkları", ok: false },
      { text: "İç dünyanın bilinmeyen taraflarını aydınlattıkları", ok: true }
    ]
  },
  {
    text: "<p>İstanbul Araştırmaları Enstitüsü; Osmanlı'nın çok dilli toplumunda, erken modern dönemin sınırları geçişken coğrafyasında, şekillenerek ortaya çıkan ancak matbaanın Osmanlı'ya gelişiyle birlikte XIX. yüzyılda önemini kaybetmeye başlayan el yazması kültürünü, \"Hafıza-i Beşer: Osmanlı Yazmalarından Hikâyeler\" başlıklı sergiyle yeniden gündeme taşıyor.</p><p><b>Bu cümleden aşağıdakilerin hangisine ulaşılabilir?</b></p>",
    diff: 3,
    expl: "Cümlede el yazması kültürünün Osmanlı'nın çok dilli toplumunda şekillenerek ortaya çıktığı ve XIX. yüzyılda matbaanın gelişiyle önemini kaybetmeye başladığı belirtilmiştir. Buradan, farklı dillerin etkisiyle bir kültür hâline gelen el yazması geleneğinin XIX. yüzyıla kadar önemini sürdürdüğü sonucuna ulaşılır.",
    answers: [
      { text: "Osmanlı'nın el yazması kültürü hakkındaki ilk çalışmaları, İstanbul Araştırmaları Enstitüsü yapmıştır.", ok: false },
      { text: "Matbaanın yaygınlaşmasından dolayı Osmanlı'da XIX. yüzyıldan itibaren el yazması eserler kaleme alınmamıştır.", ok: false },
      { text: "Farklı dillerin etkisiyle bir kültür hâline gelen el yazması geleneği, Osmanlı'da XIX. yüzyıla kadar önemini sürdürmüştür.", ok: true },
      { text: "\"Hafıza-i Beşer: Osmanlı Yazmalarından Hikâyeler\" sergisinde XIX. yüzyıldan önceki eserler bulunmaktadır.", ok: false },
      { text: "Osmanlı topraklarında çok uluslu bir toplumun yaşaması, el yazması eserlere verilen önemin artmasını sağlamıştır.", ok: false }
    ]
  },
  {
    text: "<p>I. Acıkan bir bebek ağlayarak kendini nasıl ifade ediyorsa yavru kuşlar da yemek isteklerini annelerine yalvaran ötüşlerle belli ediyor ancak anne kuşlar buna her zaman yemek ödülüyle karşılık vermiyor.<br>II. Kuşların yaşadığı ortam yiyecek kaynakları bakımından zenginse anne en çok sesi çıkan yavrularını besliyor, ortam kaynak bakımından zayıfsa anne ötüşlere kayıtsız kalıp sınırlı yiyeceği daha çok iri yavrularına veriyor.</p><p><b>Verilen II. cümleyle ilgili aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "I. cümlede anne kuşların yavruların ötüşlerine her zaman yemekle karşılık vermediği söylenmiş, II. cümlede ise bu durumun hangi şartlarda (ortamın zengin ya da zayıf olmasına göre) ortaya çıktığı açıklanmıştır.",
    answers: [
      { text: "I. cümlede söz edilen durumun hangi şartlarda ortaya çıktığı belirtilmiştir.", ok: true },
      { text: "I. cümlede belirtilen konuyla çelişen farklı bir durumdan söz edilmiştir.", ok: false },
      { text: "I. cümlede ifade edilen durumu örneklendirmek üzere bir çıkarım yapılmıştır.", ok: false },
      { text: "I. cümlede anlatılan durumun yol açtığı bazı olumsuz etkilerden bahsedilmiştir.", ok: false },
      { text: "I. cümlede değinilen davranışın farklı türlerde nasıl ortaya çıktığı açıklanmıştır.", ok: false }
    ]
  },
  {
    text: "<p>I. İster ebeveyn isterse eğitimci olsun çoğu yetişkin, çocuğunun okuduğu her kitaptan \"iyi, yararlı ve gündelik hayattaki pratiklerini kolaylaştıracağı\" bir şeyler öğrenmesini beklemektedir.<br>II. Toplumun bazı kesimlerinde edebî eserler; -onların oluşum yöntemi, araç ve süreçlerinin bilincinde olunmadığından- kurgusal olmayan eğitsel amaçlı kitaplarla aynı kefeye konulmaktadır.</p><p><b>Verilen I. cümleyle ilgili aşağıdakilerden hangisi söylenebilir?</b></p>",
    diff: 3,
    expl: "II. cümlede edebî eserlerin eğitsel amaçlı kitaplarla aynı kefeye konulduğu belirtilmiştir. I. cümlede ise bunun sonucu olarak yetişkinlerin çocuklarının okuduğu her kitaptan yararlı ve pratik bilgiler öğrenmesini beklediği anlatılmıştır. Yani I. cümle, II. cümlede belirtilen durumun yol açtığı bir sonuçtan bahsetmektedir.",
    answers: [
      { text: "II. cümlede yer alan açıklamaya yönelik karşılaştırma yapmaktadır.", ok: false },
      { text: "II. cümlede belirtilen durumun yol açtığı bir sonuçtan bahsetmektedir.", ok: true },
      { text: "II. cümlede ortaya konulan durum hakkında öngörüde bulunmaktadır.", ok: false },
      { text: "II. cümlede verilen durumun koşulunu belirtmektedir.", ok: false },
      { text: "II. cümlede yapılan açıklamayı çürütmek için yeni bir bilgi sunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>• Balinalar, beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini bulur.<br>• Dünya'nın manyetik alanındaki değişimler, balinaların karaya vurmalarına sebep olabilir.</p><p><b>Bu iki cümlede ifade edilenlerin doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Birinci cümlede balinaların yönlerini beyinlerindeki manyetik kristallerle bulduğu, ikinci cümlede ise Dünya'nın manyetik alanındaki değişimlerin onların karaya vurmasına sebep olabileceği belirtilmiştir. Bu iki bilgiyi neden-sonuç ilişkisiyle ve anlamı bozmadan birleştiren A seçeneğidir.",
    answers: [
      { text: "Balinalar, beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini buldukları için Dünya'nın manyetik alanındaki değişimler onların karaya vurmalarına yol açabilir.", ok: true },
      { text: "Beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini bulan balinaların karaya vurma nedenleri Dünya'nın manyetik alanındaki değişimler kullanılarak açıklanabilir.", ok: false },
      { text: "Balinalar yönlerini kaybederek karaya vursalar da beyinlerindeki kristaller sayesinde Dünya'nın manyetik alanındaki değişimleri takip edebilir.", ok: false },
      { text: "Balinalar, beyinlerindeki manyetik kristallere rağmen Dünya'nın manyetik alanından gerçekleşen değişikliklerden etkilenerek karaya vurabilir.", ok: false },
      { text: "Beyinlerindeki manyetik kristaller yardımıyla yönlerini bulan balinaların Dünya'nın manyetik alanıyla girdiği etkileşim karaya vurmalarına sebep olabilir.", ok: false }
    ]
  },
  {
    text: "<p>İnsan, doğası gereği kendi eksikliklerini, zayıflıklarını görmez; görse de bunları tarafsız bir şekilde değerlendiremez. Ancak aynı kusurları başka birinde fark edince o kişiyi hemen yargılar. Oysa insanın başkalarını doğrudan yargılamaması gerekir. Çünkü hakikat aynası kendine tutulduğunda zor durumda kalabilir.</p><p><b>Bu parçada anlatılmak istenen düşünceyle aşağıdaki atasözlerinden hangisi anlamca örtüşmektedir?</b></p>",
    diff: 3,
    expl: "Metinde insanın kendi hatasını görmeyip başkasını eleştirmesi eleştirilmektedir. 'Sırça köşkte oturan, komşusuna taş atmamalı' atasözü, kendi açığı/kusuru olanın başkasının kusuruyla uğraşmaması gerektiğini öğütleyerek bu düşünceyle örtüşür.",
    answers: [
      { text: "El için kuyu kazan, kuyuya evvela kendi düşer.", ok: false },
      { text: "Elin ağzı torba değil ki büzesin.", ok: false },
      { text: "Komşunun tavuğu, komşuya kaz görünür.", ok: false },
      { text: "Damdan düşen, damdan düşenin hâlini bilir.", ok: false },
      { text: "Sırça köşkte oturan, komşusuna taş atmamalı.", ok: true }
    ]
  }
];
