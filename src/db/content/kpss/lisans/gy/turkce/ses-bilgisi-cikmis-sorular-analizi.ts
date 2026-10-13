import { McQ } from "../../../../types";

// ============================================================================
// SES BİLGİSİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SES_BILGISI_TEST_1: McQ[] = [
  {
    text: "<p>“Bir Dağ Dibinde Gece vakti Birlikte Yapılan Raks İçin Söylediğim Başlangıç” adlı şiirin içinde dağ kelimesi hiç geçmiyor. Ama şiirin başladığı ile şiirde toprakla gök arasında çizilen resim, bir dağ imgesinde birleşiyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'toprak-ile > toprakla' (ünlü düşmesi), 'söylediğim, başladığı' (ünsüz yumuşaması), 'birlikte' (ünsüz benzeşmesi), 'geç-me-yor > geçmiyor' (ünlü daralması) vardır. Ünsüz türemesine uğramış bir sözcük bulunmamaktadır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz türemesi", ok: true }
    ]
  },
  {
    text: "<p>Şehir hayatı, kuşlar için bazı riskleri beraberinde getiriyor. Binalar, camlar ve gökdelenler her yıl milyonlarca kuşun hayatını kaybetmesine yol açıyor. Şehirlerdeki doğal alanların insanlar tarafından işgal edilmesi; kuşları, küçücük yuvalarını inşa ettiğimiz binalarda yapmaya mecbur bırakıyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'küçücük' (küçük-cük: ünsüz düşmesi), 'kaybetmesine' (kayıp: ünlü düşmesi), 'ettiğimiz' (et-dik-imiz: hem benzeşme hem yumuşama) vardır. Ancak 'getiriyor, bırakıyor' gibi kelimelerde ünlü daralması yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true }
    ]
  },
  {
    text: "<p>Yazar, son çıkan kitabında birçok insanın erken yaşta karşılaştığı çeşitli zorlukları ufacık bir kızın yüreğinden bize aktarıyor. Öyle ki bu samimi üslup okuyucuyu da hemen sarıp sarmalıyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'kitabında, karşılaştığı, yüreğinden' (ünsüz yumuşaması), 'yaşta' (ünsüz benzeşmesi), 'ufacık' (ufak-cık: ünsüz düşmesi), 'sarmala-yor > sarmalıyor' (ünlü daralması) vardır. Ünlü düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünlü düşmesi", ok: true }
    ]
  },
  {
    text: "<p>Ortalık iyiden iyiye ışıyınca ufacık bir kaya kovuğu buldular ve oraya sığındılar. Ayakta durmuşlardı, ikisi de çok üşüyordu. Saçlarının ucundan hâlâ yağmur altında yürüyor gibi sular damlıyordu.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'ufacık' (ünsüz düşmesi), 'kovuğu' (ünsüz yumuşaması), 'ayakta' (ünsüz benzeşmesi), 'damlıyordu' (damla-yor: ünlü daralması) vardır. Ancak ünlü türemesi (azıcık vb.) yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü türemesi", ok: true },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Bugün hâlâ daracık sokaklarında çocukların oynadığı, insanların birbirlerinin hayatlarından haberdar olduğu, acıları ve sevinçleri paylaşarak ortak bir belleğe dönüştüren mahallelerin bulunduğu kentler, geleceğe dair umutları diri tutan mekânlar olarak varlığını koruyor. Yıkmak yerine iyileştirmeyi esas alan, nasıl daha iyi var edebileceğine odaklanan bu mahalle kültürü, gelecekte de şehri yaşanabilir kılacak.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'daracık' (dar-a-cık: ünlü türemesi), 'oynadığı' (oyun-a: ünlü düşmesi ve yumuşama), 'gelecekte' (ünsüz benzeşmesi) vardır. Ünlü daralması örneği bulunmamaktadır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Desem ki vakitlerden bir insan akşamıdır, / Rüzgârların en ferahlatıcısı senden esiyor, / Sende seyrediyorum denizlerin mavisini, / Ormanların en kuytusunu sende gezmekteyim. / Ben sende yaşıyorum, / Sen bende hüküm sürmektesin / Bırak ben söyleyeyim güzelliğini, / Rüzgârlarla, nehirlerle, kuşlarla beraber.</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde 'seyrediyorum' (seyir + et-: ünlü düşmesi ve ünsüz yumuşaması), 'gezmekteyim, sürmektesin' (ünsüz benzeşmesi), 'yaşa-yor-um > yaşıyorum' (ünlü daralması) vardır. Ünsüz düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: true }
    ]
  },
  {
    text: "<p>Tokat'ın Taşhan'ı, şehrin en gözde yerinde, en rağbet gören mekânı. Burada tarihin şahitlerini görmek mümkün. Ortası, göğe açılan bir pencere gibi bulutları selamlıyor. Etrafında küçücük odalar var. Her bir oda sanki bir dünyayı taşıyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'selamlıyor' (selamla-yor: ünlü daralması), 'şehrin' (şehir-in: ünlü düşmesi), 'göğe' (gök-e: yumuşama), 'küçücük' (küçük-cük: ünsüz düşmesi) vardır. Ünsüz benzeşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true }
    ]
  },
  {
    text: "<p>Filozof Wittgenstein insan aklını bir şişenin içine girmiş ufacık sineğe benzetiyor. Sinek, içine girdiği şişenin camını fark edemiyor ve her çıkmak istediğinde başını cama vuruyor ama buna bir anlam veremiyor. Şişenin ağzına doğru bir tünel var fakat onu bir türlü bulamıyor. Ancak birinin yolu göstermesiyle içine girdiği dünya şişenin çıkabiliyor, özgürlüğüne kavuşabiliyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'aklını, ağzına' (ünlü düşmesi), 'ufacık' (ufak-cık: ünsüz düşmesi), 'girdiği, sineğe' (ünsüz yumuşaması), 'edemiyor, veremiyor, bulamıyor' (ünlü daralması) vardır. Ünsüz benzeşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true }
    ]
  },
  {
    text: "<p>Bir roman yazma amacım olabilir. Peki bu, roman yazmanın gerektirdiği yeterliklere sahip olduğum anlamına gelir mi?</p><p><b>Bu parçada aşağıdakilerden hangisi <u>görülmez</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'amacım' (yumuşama), 'gerektirdiği' (benzeşme ve yumuşama) vardır. Ancak ses türemesi (ünlü veya ünsüz türemesi) yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Hece düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Yardımcı ses", ok: false },
      { text: "Ses türemesi", ok: true }
    ]
  },
  {
    text: "<p>Ben geldim geleli açmadı gökler; / Ya ben bulutları anlamıyorum, / Ya bulutlar benden bir şey bekler. / Hayat bir ölümdür, aşk bir uçurum; / Ben geldim geleli açmadı gökler.</p><p><b>Bu parçada, aşağıdaki ses olaylarından hangisi vardır?</b></p>",
    diff: 2,
    expl: "Parçadaki 'anla-ma-yor > anlamıyorum' sözcüğünde ünlü daralması vardır. Parçada ünsüz türemesi, ünlü düşmesi, ünsüz düşmesi ve ünsüz yumuşamasına uğramış bir sözcük bulunmamaktadır.",
    answers: [
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false }
    ]
  },
  {
    text: "<p>Apartmanın daracık kapısından içeri girer girmez içim ürperdi. Onun bu binaya her gün girişini, merdivenleri tırmanışını hayal ettim. Kimi zaman yanındakilerle gülüştüğünü, kimi zaman sinirlendiği birilerine söylendiğini duyuyor gibi oldum. Hatta bir an sanki topuklu ayakkabılarından çıkan telaşlı tıkırtılarla burnumun dibinde belirecekmiş gibi hissettim.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'daracık' (ünlü türemesi), 'burnumun' (ünlü düşmesi), 'ettim' (benzeşme), 'hissettim' (ünsüz türemesi) vardır. Ünlü daralması yoktur.",
    answers: [
      { text: "Ünlü türemesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ünlü düşmesine uğramış bir sözcük <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "C seçeneğinde ünlü düşmesine uğramış bir sözcük yoktur. Diğer seçeneklerde; sabrımı (sabır), izni (izin), emreden (emir + et-), devrilen (devir-il-) kelimelerinde ünlü düşmesi vardır.",
    answers: [
      { text: "Onun için yaptığım onca şeyden sonra bu olay sabrımı taşıran son damla oldu.", ok: false },
      { text: "Ağır yaralarına rağmen doktorun izni olmadan hastaneden çıktı.", ok: false },
      { text: "İnsanların birlikte hareket ettiği sürece başarılı olabilecekleri zaten bilinen bir gerçek.", ok: true },
      { text: "İsteklerini emreden bir üslupla dile getirmeye devam edersen yanında kimse kalmayacak.", ok: false },
      { text: "İkindiye devrilen günün tadını dakika dakika çıkarmak insana huzur veriyor.", ok: false }
    ]
  },
  {
    text: "<p>Denizdeyiz... Gemi hafifçe sallanarak yoluna devam ediyor. Gittikçe ufka yaklaşıyorsunuz. Etrafınız sonsuzluğa uzanan huzur verici bir mavilikte. Her yer masmavi, gök ile deniz sanki bir bütün oluvermiş. Arkamızda köpüklü beyaz bir çizgi uzanıp gidiyor. Uzakta hava ile suların birleştiği yerde; incecik, daracık bir çizgi beliriyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'hafifçe, gittikçe, mavilikte' (ünsüz benzeşmesi), 'ufuk-a > ufka' (ünlü düşmesi), 'ediyor, sonsuzluğa, birleştiği' (ünsüz yumuşaması), 'daracık' (ünlü türemesi) vardır. Ünsüz düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Günümüzde bazı sağlık merkezleri vücudumuzu iyileştirirken aynı zamanda ruhumuza da iyi gelecek terapi bahçeleri oluşturmaya başlıyor. Bu bahçelerin amacı, hastaları hastanelerin ve tedavi merkezlerinin soğuk ve stresli ortamından bedenen ve fikren bir nebze olsun uzaklaştırabilmek ve tedavi sürecini kısaltabilmektir.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'vücudumuzu, sürecini' (ünsüz yumuşaması), 'iyileştirirken, uzaklaştırabilmek' (ünsüz benzeşmesi), 'başla-yor > başlıyor' (ünlü daralması), 'fikir-en > fikren' (ünlü düşmesi) vardır. Ünsüz türemesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Hırkasını çekiştirdi, bir sandalyenin kenarına ilişti ve azıcık soluklandı. Bir iki kere konuşmaya yeltendi, sonra eliyle ağzını hafifçe kapatarak şarkı söylüyormuşçasına mırıldanmaya başladı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>görülmemektedir</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'azıcık' (ünlü türemesi), 'ilişti, hafifçe' (benzeşme), 'ağzını' (ünlü düşmesi), 'söylüyormuşçasına' (ünlü daralması) vardır. Ünsüz yumuşaması yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz yumuşaması", ok: true },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Çağdaş Balkan edebiyatı, <u>I. Türkçe</u> için hâlâ <u>II. keşfedilmeyi</u> bekleyen bir ada gibi. Son yıllarda Balkan dillerinden Türkçeye çevrilen kitap <u>III. adedi</u> arttı ancak bu yeterli değil. Bu durumun en önemli <u>IV. sebebi</u>, bu dillerden çeviri yapan <u>V. yetkin</u> çevirmenlerin sayısının az olması.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde birden fazla ses olayı vardır?</b></p>",
    diff: 3,
    expl: "II numaralı 'keşfedilmeyi' sözcüğünde hem ünlü düşmesi (keşif) hem de ünsüz yumuşaması (et-il > ed-il) vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İleri yaşına rağmen hep genç hissetti kendini. Yüzünün aydınlığı ve gözlerinin ışıltısı bağı kurduğu çevresini sıcaklık duygulara boğardı. Yanına gelip aç ayrılan, hoşnut kalmayan hiç olmazdı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'hissetti' (ünsüz türemesi), 'aydınlığı, kurduğu' (ünsüz yumuşaması), 'çevresini, ayrılan' (ünlü düşmesi), 'ışık-ıl-tı > ışıltı' (ünsüz düşmesi) vardır. Ünlü daralmasına uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false }
    ]
  },
  {
    text: "<p>(I) İçi dolu bir kumbara, veznedar tarafından açılmak üzere bir banka şubesine ilk kez Şükrü Bey'in oğlu tarafından götürülür. (II) Süha adlı bu çocuğun hesabına yatan paranın ayrıntıları bilinmez. (III) Ancak bundan sonra çocukların el öpme gibi yollara başvurarak kumbara canavarını büyütmeye çalıştıkları bilinmektedir. (IV) Böylelikle çocukların düşlerini hapseden kumbaralar, birer oyuncağa dönüşür zaman içinde. (V) Kumbaranın metali, bozuk parayla artan çocuk düşünün sıcaklığına dayanamamış ve eriyip çocuk düşlerinin şeklini almış gibidir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde “ünlü düşmesi” <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "III numaralı cümlede ünlü düşmesine uğramış bir sözcük yoktur. I'de 'oğul-u > oğlu', II'de 'ayır-ıntı > ayrıntıları', IV'te 'hapis + et- > hapseden', V'te 'şekil-i > şeklini' sözcüklerinde ünlü düşmesi vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aristo, “İncelenmeyen hayat <u>I. yaşanmaya</u> değmez.” demiş. Bugün bizler, “<u>II. Kaydedilmeyen</u> hayat yaşanmaya değmez.” der gibiyiz. Yediğimiz yemekten kaybettiğimiz yakınımıza, sevincimizden <u>III. kederimize</u> her şeyi sosyal paylaşım ağlarına kaydediyoruz. Hayatlarımızın bir tür günlüğünü tutuyor, çoğu zaman gerçek ilişkilerin yerine sanal ilişkileri koyuyoruz. “Tanınıyorum, o hâlde varım.” <u>IV. diyoruz</u>. Bu kalabalık dünyada yalnız kalma korkusu, ruhumuzu endişeyle <u>V. dolduruyor</u>.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde birden çok ses olayı vardır?</b></p>",
    diff: 3,
    expl: "II numaralı 'Kaydedilmeyen' sözcüğünde hem ünlü düşmesi (kayıt) hem de ünsüz yumuşaması (t > d) vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Botanikte pistacia lentiscus adı verilen sakız ağacının kendine has pek çok özelliği var. (II) Her şeyden önce çok güçlü olduğu için sonbahar veya kış şartları onu etkilemiyor. (III) Yaz kış yaprağını dökmüyor, koruyor, dolayısıyla da üşümüyor. (IV) Çok seçici, öyle her iklimde ve toprakta yetişmiyor. (V) Kalabalığı sevmiyor, bir bahçede kendi başına göğe yükselmeyi tercih ediyor.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde ünsüz yumuşamasına uğramış sözcük <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede ünsüz yumuşamasına uğramış bir sözcük yoktur. I'de 'ağacının, özelliği', II'de 'olduğu', III'te 'yaprağını', V'te 'kalabalığı, göğe, ediyor' sözcüklerinde ünsüz yumuşaması vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İlk önce değişikliğin farkına varmadı. Sadece çalışmak istemiyordu. Cansız ve neşesizdi. Bütün gün ya bir köşede oturuyor ya da aklı başında değilmiş gibi dalgın dolaşıyordu. Sanki hayatında çok mühim bir şey eksikti. Sonra yavaş yavaş yorgun ve isteksiz kalktığını, sabaha kadar karışık rüyalar gördüğünü ve bunların kendisini yorduğunu anladı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada yumuşama (değişikliğin), daralma (iste-me-yor > istemiyordu), benzeşme (eksikti, kalktığını), ünlü düşmesi (aklı) vardır. Ünsüz düşmesi yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Niçin tuval boyamadığını, beste yapmadığını, yanıtlayabilecek sözcükleri yoktu. Yazmak için yeterli söz dağarcığı veya görüş açıklığına sahip olduğu da tartışıldı. Yazmayı istemekten başka bir güdü taşımıyordu aslında eline kalemi alırken.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'taşımıyordu' (daralma), 'boyamadığını, dağarcığı' (yumuşama), 'istemekten' (benzeşme), 'aslında' (ünlü düşmesi) vardır. Ünsüz düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: true }
    ]
  },
  {
    text: "<p>Rüzgâr yüzüme şefkatle <u>I. çarptığında</u> ya da nehir kıvrılarak kaynağa <u>II. geldiğinde</u> kendimi <u>III. hiçliğin</u> derinliklerinde buluyor ve <u>IV. mutluluğu</u> iliklerime kadar <u>V. hissedebiliyorum</u>.</p><p><b>Bu cümlede numaralanmış sözcüklerin hangisinde hem ünsüz yumuşaması hem de ünsüz benzeşmesi vardır?</b></p>",
    diff: 3,
    expl: "I numaralı 'çarp-dık-ı-nda > çarptığında' sözcüğünde hem ünsüz benzeşmesi (d > t) hem de ünsüz yumuşaması (k > ğ) bir arada bulunur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yeşil alanlardan uzakta olmak, stresli bir yaşamı beraberinde getiriyor. Çünkü doğayı yok eden karmaşık düzendeki yapılar, algılarımızı etkiliyor ve zihinsel yorgunluğu yoğun şekilde hissetmemize neden oluyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'yorgunluğu' (yumuşama), 'uzakta, etkiliyor' (benzeşme), 'etkile-yor > etkiliyor' (ünlü daralması), 'hissetmemize' (ünsüz türemesi) vardır. Ünlü düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz türemesi", ok: false }
    ]
  },
  {
    text: "<p>Sevgili günlük,<br/>Nerede olursam olayım yağmur peşimde, yağdıkça yağıyor. Yağmurun küçücük damlaları içinde saklanan ilham perileri aklıma düştüğünden mi, yağmur sonrası toprak kokusunu sevdiğimden mi benimle geliyor? Kim bilir?</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'yağdıkça' (benzeşme), 'küçücük' (ünsüz düşmesi), 'aklıma' (ünlü düşmesi), 'düştüğünden, sevdiğimden' (yumuşama) vardır. Ünlü daralması yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz düşmesi", ok: false }
    ]
  },
  {
    text: "<p>İşte ben hep böyle garip mahzun, / Bir şey beklemişçesine yaşıyorum. / Bazen öyle günlerim oluyor ki Elâgözlüm, / Ne oldu, nasıl bitti şaşıyorum. / Bazı bilmem, gün nasıl başladığında, / Kayıp kayıp gidiyor dünya bıkkın bakışlarımdan. / Yaşıyorum, yaşıyorum da bitmiyor, / Bir tutam sakız oluyor ağzımda zaman.</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Dizelerde 'başladığında, gidiyor' (ünsüz yumuşaması), 'ağzımda, nasıl' (ünlü düşmesi), 'beklemişçesine' (benzeşme), 'yaşa-yor > yaşıyorum' (ünlü daralması) vardır. Ünsüz düşmesine uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Tüm hayvanların vücudu dokulardan ve dokuların birleşmesiyle meydana gelen organlardan oluşur. Dokular vücudun çeşitli kısımlarını ve organlarını oluştururken küçücük, kıvrımlı ve karmaşık yapılara dönüşür. Epitel hücreler bu yapıların oluşmasında temel bir işleve sahiptir. Bu hücreler sıkı bir şekilde istiflenerek derinin, kan damarlarının ve organların dış tabakalarını meydana getirir.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'vücudu' (yumuşama), 'sahiptir' (benzeşme), 'kıvır-ım > kıvrımlı' (ünlü düşmesi), 'küçücük' (ünsüz düşmesi) vardır. Ünlü daralmasına uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü daralması", ok: true }
    ]
  },
  {
    text: "<p>Ben, sisi zihnin bazı hâllerine <u>I. benzetirim</u>. Sis içindeyken sanki başka bir dünyada, başka bir nizam içinde <u>II. oynayan</u> muhayyilem, beni daima şaşırtır. Kimi zaman temel karakterler üzerinde kalıp <u>III. ayrıntılardan</u> uzaklaşmanın mutluluğunu yaşarım. Kimi zaman da zihnim ayrıntılara dalıp <u>IV. çevreyi</u> kolaçan etmeye başlar. Birkaç gündür İstanbul'un üstünü bütünüyle örten sis de zihnim gibi oyunlar oynuyor ve görülen, <u>V. işitilen</u> her şeyi farklı bir şekle sokuyor.</p><p><b>Bu parçadaki altı çizili sözcüklerin hangisinde ünlü düşmesi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I (beniz-et-), II (oyun-a), III (ayır-ın-tı) ve IV (çevir-e) sözcüklerinde ünlü düşmesi varken, V numaralı 'işitilen' sözcüğünde düşme yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Öğretmen olmanın, o küçücük çocukların hayatlarına dokunmanın benliğinde bıraktığı derin iz, zaman ilerledikçe onu daha mutlu eder olmuştu. Öğrencilerine yeni şeyler öğretme hazzı, geçmişine olan özlemini çoktan alıp götürmüştü.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada 'küçücük' (ünsüz düşmesi), 'hazzı' (ünsüz türemesi), 'ilerledikçe, götürmüştü' (benzeşme), 'ileri-le > ilerle' (ünlü düşmesi) vardır. Ünlü daralmasına uğramış bir sözcük yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p><u>I. Çevresi</u> büyük bir piknik alanı olarak düzenlenip halka açılan Mogan Gölü'nün kuşların kuluçka ve yavrulamasına <u>II. ayrılan</u> doğal park <u>III. kısmında</u> <u>IV. kıvrımlı</u> ahşap yayla <u>V. yolları</u> ve kuş gözlemevleri yapılmış.</p><p><b>Bu cümledeki altı çizili sözcüklerin hangisinde ünlü düşmesi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I (çevir-e > çevre), II (ayır-ıl-an), III (kısım-ı-nda) ve IV (kıvır-ım-lı) sözcüklerinde ünlü düşmesi vardır. V numaralı 'yolları' sözcüğünde ünlü düşmesi yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  }
];
