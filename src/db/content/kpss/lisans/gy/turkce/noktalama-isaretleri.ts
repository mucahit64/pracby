import { McQ } from "../../../../types";

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 1
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_1: McQ[] = [
  {
    text: "<p>• Kendinden sonraki cümleye bağlı olarak ret, kabul, teşvik bildiren kelimelerden sonra konur.<br>• Tırnak içinde olmayan alıntı cümlelerden sonra konur.<br>• Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna konur.<br>• Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.</p><p>Aşağıdaki cümlelerin hangisi, virgülün kullanımıyla ilgili bu bilgilerden birine <b>örnek gösterilemez?</b></p>",
    diff: 3,
    expl: "A seçeneğinde virgül, özne olan 'Sait Faik Abasıyanık' ismini vurgulamak için kullanılmıştır; ancak öncüllerde virgülün özneyi belirtme görevine dair bir bilgi verilmemiştir.",
    answers: [
      { text: "Sait Faik Abasıyanık, sadece Cumhuriyet Dönemi Türk edebiyatının değil; dünya edebiyatında da Çehov tarzı hikâyecileri arasında yer alan çok önemli bir isimdir.", ok: true },
      { text: "Sait Faik bu öyküsünde, itibari alemin imkânları dâhilinde ortaya çıkan insanlar çerçevesinde, kendi dünya görüşünü ve insanın hareketlerini yönlendiren değerlerle ilişkisini anlatır.", ok: false },
      { text: "Sait Faik üzerine araştırma yapmak isteyen bir yazar; onun sosyal hayatındaki bilinmeyen yönlerini anlayamadan, yüreğine bile sığmayan aşkı duyumsayamadan kaleme alamaz.", ok: false },
      { text: "Sait Faik'in Alemdağ'da Var Bir Yılan adlı muhteşem öyküsünde, bir insanı sevmekle başlar her şey, diyerek sevme olgusunun insanda başladığını vurgular.", ok: false },
      { text: "Sait Faik bir öyküsüne şöyle başlar: \"Haydi, hep birlikte günün birinde ağaçların arasında kuşların melodisi ile dolu evlerin içinde vazife hissi ile çarpan yüreklerle dolu bir âlemde yaşayacağımızı düşünelim.\"", ok: false }
    ]
  },
  {
    text: "<p>Çocukluğunuzdaki en önemli insanları düşünmeye çalışın ( ) Genel olarak nasıllardı ( ) size nasıl davrandılar ( ) neden bu şekilde davrandılar ( ) sizden neyi esirgediler ve sizce bunu neden yaptılar ( )</p><p>Bu parçada ayraçlarla belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi <b>sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "İlk paranteze açıklama yapılacağı için iki nokta (:), ara cümleler küçük harfle devam ettiği ve sıralı cümle yapısı olduğu için aralara virgül (,), en sona ise soru anlamı taşıdığı için soru işareti (?) getirilmelidir.",
    answers: [
      { text: "(!) (.) (?) (.) (?)", ok: false },
      { text: "(;) (?) (?) (?) (?)", ok: false },
      { text: "(;) (,) (;) (,) (?)", ok: false },
      { text: "(:) (,) (,) (,) (?)", ok: true },
      { text: "(:) (,) (,) (;) (?)", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerin hangisinde <b>noktalama yanlışı bulunmaktadır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'şamdanlar' öznesinden sonra virgül kullanılması yanlıştır. Özneden sonra virgül ile ayrılmış eş görevli ögeler geliyorsa, özneyi belirginleştirmek için özne noktalı virgül (;) ile ayrılmalıdır.",
    answers: [
      { text: "İnançlarınız, ne yiyip içtiğiniz, geçmişte yaşadığınız travmalar, karakter yapınız, hastalıklarınız, hobileriniz ve sosyoekonomik düzeyiniz sizinle ilgili tahminleri doğrular niteliktedir.", ok: false },
      { text: "Beyaz kumsalı ve turkuaz rengindeki suyuyla \"Türkiye'nin Maldivleri\" olarak ünlenen Salda Gölü ve çevresinde başlatılan biyoçeşitlilik araştırması, koruma çalışmalarına da kılavuzluk edecek.", ok: false },
      { text: "Şamdanlar, farklı boyutlarda, sade ya da bezemeli bir forma sahip, tepesinde ya da kollarında mumluklar bulunan, aydınlatma aracı olarak kullanılan araçlardır.", ok: true },
      { text: "Kişisel gelişim; rutinden farklı olarak kişinin bilinçli yaptığı, kendisini daha iyiye götürmek için gerçekleştirdiği olumlu çabaların sonucu oluşan değişimdir.", ok: false },
      { text: "Akdeniz Bölgesi'nde yer alan Taşeli Platosu'nun yüksekliği 1500 ila 2000 metre aralığında değişmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Gök bilimciler, Dünya'dan yaklaşık 25 000 ışık yılı (I) uzaklıkta garip bir yıldız buldular. İskoçya'daki Edinburg Üniversitesi'nden (II) gök bilimci Sergey Koposov: (III) \"Bizimle uzak yıldız arasında karanlık, büyük ve uzun (IV) bir nesnenin geçişini gözlemlememiz şaşırtıcı ve sadece kökeninin ne olduğunu tahmin edebiliyoruz.\" dedi. (V)</p><p>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <b>yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Kurum, kuruluş, kurul ve iş yeri adlarına gelen ekler kesme işaretiyle ayrılmaz. Dolayısıyla 'Edinburg Üniversitesi'nden' ifadesindeki kesme işareti kullanımı yanlıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Eserde insanların apolitikleştirildikleri, her şeyden korkan birey hâline getirildikleri aktarılmaya çalışılmıştır.<br>II. Matematik sayesinde sistemlerin doğası modellenir, bu modellemeyle kuantum mekaniğinin esas kavramları çözülmeye çalışılır.<br>III. Homeros, MÖ 9. yüzyılda Sakız Adası'nda doğmuş olduğu tahmin edilen bir halk ozanıdır.<br>IV. Zihinlerimizin kendini koruyan, olayları olduğu gibi görmekten alıkoyan savunma mekanizmaları bulunmaktadır.<br>V. Optik illüzyon, görsel olarak algılanan görüntüler ile nesnel gerçekliğin farklı olması durumudur.</p><p>Numaralanmış cümlelerde kullanılan virgüller (,) görevleri bakımından ikişerli eşleştirildiğinde hangisi <b>dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I ve IV numaralı cümlelerde virgül eş görevli sözcükleri ayırmıştır. III ve V numaralı cümlelerde özneyi belirtmek için kullanılmıştır. II numaralı cümlede ise sıralı cümleleri ayırmak için kullanıldığından tek kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bağışıklık sistemi üzerinde birçok olumlu etkileri bulunan probiyotiklerin yüksek dozda, sürekli ve yanlış tüketimi; bu takviyenin eksikliği kadar tehlikeli ve risklidir.</p><p>Aşağıdakilerin hangisinde noktalı virgül (;) bu cümledeki <b>işleviyle kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Örnek cümlede noktalı virgül, içinde virgül bulunan cümlenin öznesini diğer ögelerden ayırmak için kullanılmıştır. A seçeneğinde de aynı işlevle 'Erzurum' öznesinden sonra kullanılmıştır.",
    answers: [
      { text: "Erzurum; kara, hava ve demir yolu ile yurdun her tarafına bağlanmış durumdadır.", ok: true },
      { text: "Sınav Türkçe, tarih, coğrafya derslerini içeren sözel bölüm; matematik, fizik, kimya, biyoloji derslerini içeren sayısal bölümden oluşmaktadır.", ok: false },
      { text: "İngiltere, Fransa, Almanya hükümetleri; Londra, Paris, Berlin şehirlerinde farklı oluşumlara izin verdi.", ok: false },
      { text: "Brokoli, havuç, ıspanak A vitamini; portakal, mandalina, kivi C vitamini içeren besinlerdir.", ok: false },
      { text: "Harap olmuş, yıkılmış bir şehirdi; bu şehirde sorunlar çözülmüyor, aksine üst üste geliyordu.", ok: false }
    ]
  },
  {
    text: "<p>Uzmanlar bazı uyarılarda bulunuyor (I) Zayıflama çayı adıyla satılan karışık bitki çaylarının içeriğinin ne olduğuna mutlaka bakılmalı (II) bu çaylar asla kontrolsüzce tüketilmemeli (III) Çünkü zayıflama veya ödem atıcı çaylar kalp ritim bozukluğu ve bağırsak yapısında bozulma gibi birçok olumsuz sonuca yol açabiliyor (IV) bu yüzden bitki çaylarını doktorunuza danışmadan tüketmeyiniz (V)</p><p>Bu parçadaki numaralanmış yerlerin hangisine diğerlerinden <b>farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 2,
    expl: "I numaralı yere açıklama geleceği için iki nokta (:) konmalıdır. II, III ve IV numaralı yerlere yargı tamamlandığı veya sıralı cümle olduğu için nokta (.) veya virgül (,) gelirken, I numaralı yer farklıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Eserde anlatılanlar yazarın yaşadığı şeyler mi acaba ( ) Gerçekten oralara gitti mi ( ) Hayal dünyasında kendisi mi oluşturdu bütün bunları ( ) Herkesi akıcı anlatımıyla kendine bağlayan bu eserde anlatılanlar hayal miydi ( ) yoksa gerçek miydi ( )</p><p>Bu parçada numaralanmış yerlerin hangisine diğerlerinden <b>farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 2,
    expl: "IV numaralı yerde, soru ifadeleri ('hayal miydi yoksa gerçek miydi') birbiriyle bağlantılı sıralandığı için araya virgül (,) konur. Diğer yerlerin tamamına soru işareti (?) gelmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yazınsallık içeren metinle (I) yazınsallık içermeyen metin arasında nasıl bir ayrım vardır? Bu ayrım tam (II) olarak nerede başlar, nerede biter? (III) Bu ayrımı her zaman görebilir, (IV) tanıyabilir, ölçebilir miyiz? (V)</p><p>Bu parçada numaralanmış yerlerin hangisinde noktalama işareti <b>yanlış kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı yerdeki virgül kullanımı yanlıştır; çünkü 'ile' edatı/bağlacı görevinde kullanılan bir yapının yerine virgül getirilmez. Metin içerisinde 've, veya, ile' gibi bağlaçlardan önce veya sonra virgül konmaz.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Andre Gide ( ) sanatçılara şöyle bir öğüt vermiştir ( ) ( ) Sen yalnız şeklin güzel olmasına bak ( ) güzel bir bina hiç müşterisiz kalır mı ( ) ( ) Gide ( ) doğru söylemiş gerçekten ( )</p><p>Bu parçada ayraçlarla belirtilen yerlere aşağıdaki noktalama işaretlerinden <b>hangisi getirilemez?</b></p>",
    diff: 3,
    expl: "Parçada virgül, iki nokta, tırnak işareti ve soru işareti kullanılması gerekirken; herhangi bir yerde anlatımı eksik bırakılan veya duraksanan bir durum olmadığı için 'Üç nokta' (...) kullanımı gerekli değildir.",
    answers: [
      { text: "Soru işareti", ok: false },
      { text: "Virgül", ok: false },
      { text: "İki nokta", ok: false },
      { text: "Tırnak işareti", ok: false },
      { text: "Üç nokta", ok: true }
    ]
  },
  {
    text: "<p>Venedik denince aklınıza neler gelir (I) desem nasıl bir cevap verirsiniz acaba (II) Sormadan bunu bilemem ama tahmin edebilirim (III) gondollar (IV) aşk, müzik, karnaval... (V)</p><p>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <b>yanlıştır?</b></p>",
    diff: 2,
    expl: "II numaralı yerde nokta (.) değil, soru işareti (?) kullanılmalıdır; çünkü cümle soru anlamı taşımaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Noktalama işaretlerinin tarihi, Bizanslı dil bilgini Aristophanes'e dek gider (I) Bu işaretlerin (II) kullanılmasına 16. yüzyılda matbaanın bulunuşu ile başlanmıştır (III) 19. yüzyılda ise noktalama işareti genelleşmiş ve kesin kurallara bağlanmıştır (IV) Noktalama işaretlerinin bizde kullanılması (V) Tanzimat Dönemi'yle başlar.</p><p>Bu parçadaki numaralanmış yerlerin hangisine noktalama işareti <b>getirilemez?</b></p>",
    diff: 2,
    expl: "II numaralı yerde 'bu işaretlerin kullanılmasına' bir isim tamlamasıdır. Tamlayan ile tamlanan arasına noktalama işareti girmez.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>• Anlatım olarak tamamlanmamış cümlelerden sonra konur.<br>• Ünlem ve seslenmelerde anlamı pekiştirmek için konur.<br>• Herhangi bir sebepten açık yazılmak istenmeyen kelimelerin yerine konur.<br>• Alıntılarda başta, ortada ve sonda alınmayan kelime veya bölümlerin yerine konur.</p><p>Üç noktanın kullanımıyla ilgili bu kuralların hangisinin <b>örneği aşağıda verilmemiştir?</b></p>",
    diff: 3,
    expl: "C seçeneğinde üç nokta, karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevapların yerine kullanılmıştır; ancak yukarıdaki öncüllerde bu göreve dair bir kural bulunmamaktadır.",
    answers: [
      { text: "Victor Hugo'nun bir romanında geçen şu satırlar beni çok etkilemiştir: ... Gölgeyi takip edersen ışığı kaçırırsın.", ok: false },
      { text: "Kapı çalındı ama açan olmadı. Bir süre bekledi. Sonra yavaşça fısıldadı: - Demet... Demet diyorum, Demet...", ok: false },
      { text: "- Otobüsün saati kaçta? - Lütfen bir şey söyle artık! - ...", ok: true },
      { text: "Onca zaman sanki hiçbir şey olmamış gibi davranıyordu. Karşısındakinin gözleri dolu dolacak. D...'yi tekrar görmek bile başlı başına bir yüktü.", ok: false },
      { text: "Bahçede dolaşırken bir anda durdu. Gözleri çimenlerin üzerindeki serçeye takılmıştı. Ağzını açtı ama...", ok: false }
    ]
  }
]

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 2
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_2: McQ[] = [
  {
    text: "<p>Filmleriyle herkesi çok güldürdü, çok düşündürdü o... O; \"Sir\", \"Kont\" ve bir \"Baron\" olarak rol aldı... Babam, hem özel yaşamımızda hem de okul yaşamımızda her daim disiplinli olmamız gerektiğini aşılardı bize... Örneğin, tatillerde yerleştiğimiz otel odasında bizi yanına çağırır, tuhaf bir gülümsemeyi yüzüne yerleştirip \"Hey, bakın! Şurada gizli bir tünel var galiba!\" derdi.</p><p><b>Bu parçada virgülün aşağıdaki işlevlerinden hangisinin kullanımı yoktur?</b></p>",
    diff: 3,
    expl: "Metinde ara söz kullanılmadığı için B seçeneğindeki 'Ara sözleri ayırmak için ara sözlerin başına ve sonuna konur' işlevinin örneği yoktur. Diğer işlevler (eş görevli kelimeler, zarf-fiilden sonra konma kuralı ihlali olmayan sıralı kullanımlar, özne belirtme ve sıralı cümle ayırma) metinde örneklendirilmiştir.",
    answers: [
      { text: "Birbiri ardınca sıralanan eş görevli kelime gruplarının arasına konur.", ok: false },
      { text: "Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna konur.", ok: true },
      { text: "Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.", ok: false },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için konur.", ok: false }
    ]
  },
  {
    text: "<p>• Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için kullanılır.<br/>• Soru anlamı taşıyan cümlelerin sonunda kullanılır.<br/>• Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözleri belirtmek için kullanılır.<br/>• Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için kullanılır.<br/><b>Yukarıdaki öncüllerde hangi noktalama işaretiyle ilgili bir açıklama yoktur?</b></p>",
    diff: 2,
    expl: "Öncüllerde sırasıyla noktalı virgül (;), soru işareti (?), tırnak işareti (\") ve virgül (,) açıklanmıştır. İki nokta (:) ile ilgili bir açıklama bulunmamaktadır.",
    answers: [
      { text: "Tırnak işareti (\" \")", ok: false },
      { text: "Virgül (,)", ok: false },
      { text: "İki nokta (:)", ok: true },
      { text: "Noktalı virgül (;)", ok: false },
      { text: "Soru işareti (?)", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisindeki noktalama işaretinin kullanımı parantez içerisinde verilen bilgi ile uyuşmamaktadır?</b></p>",
    diff: 3,
    expl: "E seçeneğinde ünlem işareti (!) parantez içinde alay, kinaye veya küçümseme anlamı katmak için kullanılmıştır. Parantez içindeki 'sevinç, kıvanç, acı, korku' açıklaması bu cümledeki özel kullanımla (kinaye) uyuşmamaktadır.",
    answers: [
      { text: "A) Uludağ ve Abant gibi klasik rotalardan sıkılanlar için iki önerimiz olacak: ...", ok: false },
      { text: "B) Ahmet Hamdi Tanpınar'ın 120'nci doğum günü (23 Haziran 1901) nedeniyle...", ok: false },
      { text: "C) Yüzeyinin renginden dolayı \"Kızıl Gezegen\" olarak adlandırılan Mars...", ok: false },
      { text: "D) Onu bir defacık görebilmek için neler yapmazdım ki ...", ok: false },
      { text: "E) Son romanını bir haftada bitirebilirmiş(!) ama diğer işleri çok yoğunmuş.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde noktalama yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'olsalar da' ifadesindeki 'da' bağlaçtır. Türkçede 'da/de' bağlacından önce veya sonra virgül kullanılmaz.",
    answers: [
      { text: "Sıfatlar ikiye ayrılır: niteleme sıfatları, belirtme sıfatları.", ok: false },
      { text: "Şair; yaşadığı dönemin sosyal ve siyasal olaylarını... şiire yansıtır.", ok: false },
      { text: "Bu pazarda her türü meyve bulunur: nar, incir, üzüm...", ok: false },
      { text: "Boşa koydum, dolmadı; doluya koydum, almadı.", ok: false },
      { text: "Bazı yaralar vardır ki kapanmış olsalar da, dokununca sızlar.", ok: true }
    ]
  },
  {
    text: "<p>Büyük yazar Borgess, yolda <u>I. yürüyormuş;</u> Bir hayranı yaklaşmış yanına. Emin olmak için <u>II. \"Siz</u> Sinyor Borgess misiniz <u>III. acaba?\"</u> diye sormuş. Borgess cevap <u>IV. vermiş:</u> <u>V. Bazen...</u></p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yerinde kullanılmamıştır?</b></p>",
    diff: 2,
    expl: "I numaralı yerde noktalı virgül (;) kullanımı yanlıştır. Cümle tamamlanmıştır ve ardından gelen cümle büyük harfle başladığı için buraya nokta (.) getirilmelidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Narsist insanlar (I) her zaman başarıya ve güce kavuşma yolunu bulmaya çalışır. Bu insanlar (II) diğer kişilerin kendilerine özel muamele göstermelerinden hoşlanır. Mümkün olan en iyi şekilde davranılmayı hak ettiklerini düşünen narsist kişiler (III) ayrıcalıklar talep eder. Özel olduklarına inanırlar (IV) başkalarının onlara böyle davranması gerektiğini düşünürler. Narsist insanları tanımak istiyorsanız (V) başkalarının onlarla çelişip eleştirdiklerinde rahatsızlık duyduklarına dikkat etmeniz gerekir.</p><p><b>Bu parçada numaralanmış yerlerden hangisine virgül (,) getirilemez?</b></p>",
    diff: 3,
    expl: "V numaralı yere virgül getirilemez. Çünkü Türkçede şart ekinden (-sa/-se) sonra virgül kullanılmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Kurgusal metinler roman(I) öykü(II) masal ve fabl gibi türlerdir(III) biyografi(IV) makale(V) deneme türünde kaleme alınan eserler ise düşünce yazıları grubunda yer alır.</p><p><b>Bu parçada numaralanmış yerlerden hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı yerlere eş görevli sözcükleri ayırmak için virgül (,) getirilmelidir. III numaralı yere ise virgüllerle ayrılmış tür veya takımları ayırmak için noktalı virgül (;) getirilmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ay( ) gelgit kilitlemesine iyi bir örnektir( ) Gökyüzünün neresinde olursa olsun veya hangi aşamada olursa olsun, Ay( )ın yalnızca bir tarafını görüyoruz çünkü Ay, gelgitte Dünya( )ya kilitlendi belki de ( )</p><p><b>Bu parçada parantezle gösterilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Özne için virgül (,), cümle bitimi için nokta (.), özel adlara gelen ekleri ayırmak için kesme işareti (') (Ay'ın ve Dünya'ya) ve son cümle bitimi için nokta (.) gelmelidir.",
    answers: [
      { text: "(,) (...) (,) (,) (...)", ok: false },
      { text: "(,) (.) (') (') (.)", ok: true },
      { text: "(;) (.) (') (') (...)", ok: false },
      { text: "(,) (.) (,) (') (.)", ok: false },
      { text: "(;) (.) (') (') (.)", ok: false }
    ]
  },
  {
    text: "<p>Beyni zinde tutmak için en önemli prensip çeşitlilik ve meraktır<u>(I)</u> Dolayısıyla beyni zinde tutmak için onun sürekli merak içerisinde olmasını sağlamalısın<u>(II)</u> Çevrendeki dünyayla ilgilenmelisin<u>(III)</u> neler olduğunu ve neler yapılabildiğini sorgulamalısın<u>(IV)</u> Böylece beynini hızlı ve verimli bir şekilde çalıştırmayı başarabilirsin<u>(V)</u></p><p><b>Bu parçada numaralanmış noktalama işaretlerinden hangisi yerinde kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "III numaralı yerde noktalı virgül (;) kullanımı yanlıştır. İki sıralı cümleyi birbirine bağlarken aralarında virgül bulunmadığı sürece virgül (,) kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Senin çabanla ayakta duran hiçbir samimiyete ( ) ilişkiye yer verme hayatında ( ) Zoraki sevmeler ve ısmarlama duygular tat vermez insana ( ) Sevmiyor mu ( ) Sen de sevme ( ) Sen ( ) seni güzel sevene mucizesin.</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere aşağıdakilerinden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: virgül (,), nokta (.), nokta (.), soru işareti (?), nokta (.) ve özne sonrası vurgu için virgül (,) getirilmelidir.",
    answers: [
      { text: "(,) (.) (.) (?) (.) (,)", ok: true },
      { text: "(;) (,) (...) (:) (?) (!)", ok: false },
      { text: "(,) (...) (.) (!) (.) (;)", ok: false },
      { text: "(,) (.) (.) (!) (!) (...)", ok: false },
      { text: "(,) (;) (!) (?) (.) (,)", ok: false }
    ]
  },
  {
    text: "<p>Yazın kuramcıları<u>(I)</u> yazın tarihçileri ve kimi eleştirmenlere göre dilsel ürünler, şiirin<u>(II)</u> toprağında<u>(III)</u> boy atıp gelişmiştir. Düşünceler<u>(IV)</u> bilgi ve gözlemler uzun süre şiirle aktarılmıştır. Ayrıca duygulardan<u>(V)</u> imgelerden oluşmuş bir yaşantı birikiminin ürünüdür.</p><p><b>Bu parçadaki numaralanmış virgüllerden hangisinin kullanımında yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı virgülün kullanımı yanlıştır. 'Şiirin toprağı' bir isim tamlamasıdır. İsim tamlamalarında tamlayan ile tamlanan arasına virgül konulamaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 3
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_3: McQ[] = [
  {
    text: "<p>I. Kars'ı Kars yapanların başında bugünkü mimarisine, çok kültürlü yapısına ve zenginliğine ulaştıran tarihi geliyor.<br/>II. Eser, Nemrut'taki meşhur heykellerin tarihine dair yeni bilgiler içeriyor.<br/>III. Evet, o eserleri incelemek de bize katkı sağlıyor.<br/>IV. Alaçatı'daki evlerine, özlemini çektikleri yere, sonunda ulaşmışlardı.<br/>V. Sanat, yaratıcılığın ve hayal gücünün en güzel ifadesidir.</p><p><b>Bu cümlelerde virgül kaç farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Virgül dört farklı görevde kullanılmıştır: 1) Eş görevli sözcükleri ayırma (I. cümle), 2) Yüklemden uzak düşmüş özneyi belirtme (II. ve V. cümle), 3) Onay/ret kelimesinden sonra kullanma (III. cümle), 4) Ara sözleri belirtme (IV. cümle).",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Basılı <u>I. Eğitim Malzemeleri Merkezi'nden</u> iki ay önce <u>II. ben de ayrıldım.</u> Şimdi kitap verirlerse <u>III. yazacağım.</u> Her şey ve her yer, az gelişmiş bir ülkede <u>IV. yetersizlerin,</u> <u>V. sığların</u> eline geçiyor.</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "I numaralı yerde 'Merkezi'nden' ifadesinde kesme işareti yanlış kullanılmıştır. Kurum, kuruluş ve kurul adlarına gelen ekler kesme işaretiyle ayrılmaz. Doğru yazım 'Eğitim Malzemeleri Merkezinden' şeklinde olmalıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat kendi alanındaki üretiminde öznel bir bakışla güzelliğe ulaşmayı( ) kişiye estetik zevk kazandırmayı amaçlar. Bilim ise deney, gözlem vb. yöntemlerle gerçeğe ve doğru bilgiye ulaşmayı amaçlar. Bununla birlikte sanatçının da belirttiği gibi( )( ) ( ) Bu iki insan çabasını birbirinden ayırmak için yapılan her girişim daha çok onları birleştirmek doğrultusundadır.( )( ) ( )</p><p><b>Bu parçada ayraçlarla belirtilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Eş görevli sözcükler için virgül (,), açıklama/konuşma öncesi iki nokta (:), alıntı için tırnak açma (\"), cümlenin bitişi için nokta (.) ve alıntıyı kapatmak için tırnak işareti (\") gelmelidir.",
    answers: [
      { text: "(:) (;) (\") (...) (\")", ok: false },
      { text: "(,) (:) (\") (\") (.)", ok: false },
      { text: "(,) (:) (\") (.) (\")", ok: true },
      { text: "(;) (,) (\") (.) (\")", ok: false },
      { text: "(,) (;) (\") (.) (\")", ok: false }
    ]
  },
  {
    text: "<p>• Birbiri ardınca sıralanan eş görevli kelime grupları arasına konur.<br/>• Sıralı cümleleri birbirinden ayırmak için kullanılır.<br/>• Cümle içinde ara sözleri ayırmak için kullanılır.<br/>• Uzun cümlelerde yüklemden uzak düşmüş özneyi belirtmek için kullanılır.<br/><b>Yukarıda verilen virgülün kullanımıyla ilgili kuralların hangisinin örneği aşağıda verilmemiştir?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki virgül, tırnak içinde olmayan alıntı bir cümlenin sonuna konulmuştur. Bu görev yukarıdaki öncüllerde yer almamaktadır.",
    answers: [
      { text: "Bilinçaltı, beynimizin biz farkında olmadan... bir parçamızdır.", ok: false },
      { text: "En güzel romanlar bir bunalım devrinde kaleme alınmıştır, der Dostoyevski.", ok: true },
      { text: "Her gün 40 dakika çıplak ayakla çim, kum, kil ve betonda...", ok: false },
      { text: "Tüyap Kitap Fuarı, ne yazık ki geçen yıl katılamadım, bu yıl...", ok: false },
      { text: "D vitamini dişleri güçlendiriyor, hücrelerin büyümesinde...", ok: false }
    ]
  },
  {
    text: "<p>Manzum hikâyelerin şiirlerden tek farkı, olay örgüsüne bağlı olması; kişi (I) zaman (II) mekân ögelerine yer verilmesidir. Söz konusu hikâyelerin en önemli temsilcileri Tevfik Fikret ve Mehmet Akif Ersoy'dur. Tevfik Fikret'in Balıkçılar ve Hasta Çocuk (III) Mehmet Akif'in Küfe (IV) Seyfi Baba (V) Hasta gibi eserleri...</p><p><b>Bu parçadaki numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı yerlere eş görevli sözcükleri ayırmak için virgül (,) gelmelidir. III numaralı yere ise farklı tür veya grupları (Tevfik Fikret'in eserleri ile Mehmet Akif'in eserlerini) ayırmak için noktalı virgül (;) getirilmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Kurtuluş Savaşı'nı zaferle sonuçlandırıp... 'dil devrimi' önemli bir yer tutmaktadır. Atatürk... 'Millî duygu ve dil arasındaki bağ çok kuvvetlidir...' demiştir.”</p><p><b>Bu parçada noktalama işaretleriyle ilgili hangi kurala yer verilmemiştir?</b></p>",
    diff: 2,
    expl: "Parçada 'dil devrimi' ifadesi tırnak içine alınmış, Atatürk özel adına gelen ek kesme ile ayrılmış, özne virgülle belirtilmiş ve doğrudan alıntı tırnakla verilmiştir. Ancak 'birbiri ardınca sıralanan eş görevli kelimeler' (C şıkkı) örneği yoktur.",
    answers: [
      { text: "Özel olarak vurgulanmak istenen sözler tırnak içine alınır.", ok: false },
      { text: "Özel adlara getirilen iyelik, durum ve bildirme ekleri kesme işaretiyle ayrılır.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasında virgül kullanılır.", ok: true },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için virgül kullanılır.", ok: false },
      { text: "Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözler tırnak içine alınır.", ok: false }
    ]
  },
  {
    text: "<p>... (I) insanın okuyup gördüğü hatta öğrendiği... (II) Bu yatkınlık... (III) boğaların kırmızı renge saldırdığını biliriz ama... (IV) sihirbazların 'hokus pokus' dediğini... (V) gerçekten bir sihir sözcüğü müdür?</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı yerde virgül kullanımı yanlıştır çünkü zarf-fiil eki (-ınca) almış kelimelerden sonra virgül konulmaz. Metinde 'dikkat edince'den sonra virgül gelmemelidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde noktalı virgül (;) bu cümledeki (Çarşıya çıkmak...; mağazaların...) işleviyle kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümlede noktalı virgül, içinde virgül bulunan sıralı cümleleri birbirinden ayırmak için kullanılmıştır. E seçeneğindeki 'Ona güveniyor, inanıyoruz; birçok başarıya imza attığını görüyor...' cümlesinde de aynı işlevdedir.",
    answers: [
      { text: "Bursa'da yetiştirilen ürünler arasında patates, pırasa, biber; şeftali, üzüm...", ok: false },
      { text: "Ders programında sayısal derslerden matematik, fizik; sözel derslerden...", ok: false },
      { text: "Türkiye, Almanya, İngiltere; Ankara, Berlin ve Londra arasında...", ok: false },
      { text: "Edebiyat; resim, heykel, mimariden farklı olarak...", ok: false },
      { text: "Ona güveniyor, inanıyoruz; birçok başarıya imza attığını görüyor, onu her daim destekliyoruz.", ok: true }
    ]
  },
  {
    text: "<p>Sarıgerme, (I) Dalaman Havalimanı'na (II) yaklaşık 20 kilometre uzaklıkta... (V) Akdeniz foklarının da yaşam alanıdır.</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "II numaralı yerde kesme işaretinin kullanımı yanlıştır. Kurum ve kuruluş adlarına (Dalaman Havalimanı bir işletme/kurumdur) gelen ekler kesme işaretiyle ayrılmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Tesla ve Edison arasındaki... iletme yatar ( ) Çünkü Edison'un... aşılamıyordu ( ) Tesla bir dönüştürücü yardımıyla bu sorunu çözmüştü ( ) böylece alternatif akımı icat etti. ...ilgi çekiciydi ( ) İkisinin arkasında...</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere sırasıyla hangi işaretler getirilmelidir?</b></p>",
    diff: 3,
    expl: "I ve II'ye cümle bittiği için nokta (.), III'e sıralı cümleleri ayırmak için virgül (,), IV'e ise kendisinden sonra açıklama geldiği için iki nokta (:) konulmalıdır.",
    answers: [
      { text: "(.) (.) (;) (,)", ok: false },
      { text: "(:) (,) (,) (:)", ok: false },
      { text: "(.) (.) (,) (:)", ok: true },
      { text: "(.) (.) (;) (:)", ok: false },
      { text: "(.) (.) (.) (;)", ok: false }
    ]
  },
  {
    text: "<p>Her şeyin geçip gittiğine, yaşadıklarımızın geçmiş- <u>I. te</u> kaldığına kim inandırabilir bizi? ... Tanıklarla, kanıt- <u>II. larla,</u> uygun adım yürümek için ikide bir ayak değiş- <u>III. tirme</u> imkânı veren gerçeklerle üstümüze gelseler de boşuna! Tam şimdi, bir yaz öğlesi, kendimi koskoca- <u>IV. man</u> bir boşluk içerisinde <u>V. hissediyorum.</u></p><p><b>Bu parçada numaralanmış virgüllerden hangisi diğerlerinden farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı virgül eş görevli sözcükleri (geçip gittiğine, geçmişte kaldığına) ayırırken; II, III, IV ve V numaralı yerlerde virgüller ara sözleri veya farklı ögeleri belirtmek için kullanılmıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada virgülün aşağıdaki işlevlerinden hangisinin kullanımı yoktur?</b></p>",
    diff: 3,
    expl: "Metinde alıntı bir cümle tırnak içinde ('...') verilmiştir. Bu nedenle 'Tırnak içinde olmayan alıntı cümlelerinden sonra konur' kuralının örneği yoktur.",
    answers: [
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için konur.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için konur.", ok: false },
      { text: "Tırnak içinde olmayan alıntı cümlelerinden sonra konur.", ok: true },
      { text: "Cümle içinde ara sözleri ayırmak için konur.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde noktalı virgül (;) farklı işlevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde noktalı virgül, ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için kullanılmıştır. Diğer seçeneklerde (B, C, D, E) ise tür veya grupları birbirinden ayırmak için kullanılmıştır.",
    answers: [
      { text: "Gerçekleşmesini istediğiniz şeyler bizim beklentilerimizdir; beklentilerimizde ısrarcı olup...", ok: true },
      { text: "Millî edebiyat... sürdüren sanatçılar Reşat Nuri, Yakup Kadri; toplumcu gerçekçiler Kemal Tahir...", ok: false },
      { text: "Şinasi, Ahmet Refik Paşa... klasisizm akımının; Namık Kemal, Ahmet Mithat Efendi romantizm...", ok: false },
      { text: "Enfeksiyon, diyabet... iç hastalıkları; osteoartrit, romatoid artrit romatoloji bölümü...", ok: false },
      { text: "Baş ağrısına neden olan çevresel faktörler egzoz, sigara; psikolojik faktörler stres...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisi kesme işaretinin kullanımıyla ilgili bu bilgilerden (Özel adlar, Saygı/ünvan, Kısaltma, Sayılar) birine örnek gösterilemez?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki 'n'oldu' kelimesindeki kesme işareti, bir sesin (e) düştüğünü göstermek için kullanılmıştır. Bu işlev yukarıdaki öncüllerde yer almamaktadır.",
    answers: [
      { text: "16 Şubat 1925'te kurulan Türk Hava Kurumu...", ok: false },
      { text: "Akdeniz'in üçüncü büyük adası Kıbrıs Adası'nın...", ok: false },
      { text: "Yüzler gülmez olmuş, gözler derinlere dalar olmuş; n'oldu bize böyle?", ok: true },
      { text: "Mustafa Kemal Paşa'nın girişimleriyle toplandı.", ok: false },
      { text: "1920 yılında TBMM'nin çıkardığı ilk kanun...", ok: false }
    ]
  }
];

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 4
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_4: McQ[] = [
  {
    text: "<p>XX. yüzyılın başından itibaren modern sanatın gelişmesine... Bilindiği üzere Freud, sanat ve sanatçılarla ilgilidir; bilime, arkeolojiye ve antik eserlere ilgi duymuştur. Ancak Freud'un dikkati... 1895'te Fliess'e \"Dünyayı gördüğüm yok, pek duyduğum da söylenemez.\" diye yazmıştı.</p><p><b>Bu parçada bazı noktalama işaretlerinin aşağıdaki işlevlerinden hangisinin kullanımı yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'özellikle de Freud'un kuramları olduğu' kısmı ara sözdür ve virgülle ayrılmıştır (A). 'Freud' öznedir ve yüklemden uzak düştüğü için virgülle belirtilmiştir (B). Alıntı tırnak içine alınmıştır (C). Ögeleri arasında virgül bulunan sıralı cümleler noktalı virgülle ayrılmıştır (E). Ancak ikiden fazla eş değer öge arasında virgül bulunan cümlelerde özneden sonra noktalı virgül konulması (D) örneği yoktur.",
    answers: [
      { text: "Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna virgül konur.", ok: false },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için virgül kullanılır.", ok: false },
      { text: "Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözler tırnak içine alınır.", ok: false },
      { text: "İkiden fazla eş değer ögeler arasında virgül bulunan cümlelerde özneden sonra noktalı virgül konabilir.", ok: true },
      { text: "Noktalı virgül, ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için konur.", ok: false }
    ]
  },
  {
    text: "<p>Şiirli yastık olur mu demeyin. (I) Sivas Kongresi için kente gelen Mustafa Kemal Paşa'ya Sivas Sulta-nisi'nin <u>(II)</u> ikinci katındaki bir oda ayrılır... Mustafa Kemal, <u>(III)</u> yastıklara işlenmiş iki dizeyi okuyunca Mazhar Mü-fit Bey'i <u>(IV)</u> yanına çağırır... şiirin ilk dizesi şöyledir: <u>(V)</u> \"Dünyanın makamıyla gururlanıp incitme insanı.\"</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 2,
    expl: "II numaralı yerde 'Sivas Sultanisi'nin' ifadesindeki kesme işareti yanlıştır. Kurum ve kuruluş adlarına gelen ekler kesme işaretiyle ayrılmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Hikmet Münir... Yakup Kadri, <u>(I)</u> memleketimizde bir edebî cereyan görüyor musunuz, <u>(II)</u> sorusuna şu cevabı vermiştir <u>(III)</u> <u>(IV)</u> \"Memlekette belli başlı bir edebiyat cereyanı müşahede etmiyorum... <u>(V)</u>\"</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yanlış kullanılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı yerde noktalı virgül (;) değil, kendisinden sonra bir alıntı cümle geleceği için iki nokta (:) kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Geniş kitlelerin oyuncu olarak tanıdığı sanatçı... Çıkarsız, hesapsız, anlayışlı zamanları anımsatan; nahif, dolaysız ve küçük sürprizlerle biten öyküler bunlar.</p><p><b>Bu parçada noktalama işaretleriyle ilgili aşağıda ki kurallardan hangisinin örneği yoktur?</b></p>",
    diff: 3,
    expl: "Parçada sıralı cümleleri (en az iki yüklemli yapıları) birbirinden ayırmak için kullanılan bir virgül örneği bulunmamaktadır.",
    answers: [
      { text: "Tamamlanmış cümlelerin sonuna nokta konur.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına virgül konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için virgül kullanılır.", ok: true },
      { text: "Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için noktalı virgül kullanılır.", ok: false },
      { text: "Cümle içerisinde eserlerin ve yazıların adları, bölüm başlıkları tırnak içine alınır.", ok: false }
    ]
  },
  {
    text: "<p>Ben bilmek istiyorum ( ) diyor Küçük Kara Balık ( ) Hayat gerçekten bir avuç yerde durmadan dönüp durmak ( ) sonra da yaşlanıp ölüp gitmek mi ( ) yoksa bu dünyada başka türlü yaşamak da mümkün mü ( )</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere aşağı daki noktalama işaretleri sırasıyla hangileri getirilmelidir?</b></p>",
    diff: 3,
    expl: "I: Virgül (,) alıntı bitimi. II: Nokta (.) cümle sonu. III: Virgül (,) eş görevli fiilimsiler. IV: Virgül (,) 'mı... yoksa...' yapısı içinde eş değer ögeler. V: Soru işareti (?).",
    answers: [
      { text: "(.) (.) (;) (,) (?)", ok: false },
      { text: "(,) (...) (,) (;) (!)", ok: false },
      { text: "(,) (.) (,) (,) (?)", ok: true },
      { text: "(;) (;) (,) (,) (...)", ok: false },
      { text: "(,) (...) (,) (,) (?)", ok: false }
    ]
  },
  {
    text: "<p>(I) Şiirin gerisinde olduğu gibi ötesinde de bir hikâye (mythos) saklı... (II) Şiirimizi yaparken... (V) Hayal ile gerçeği uygunsuz bir zeminde bir araya getiren şiirsel imgelem, yitip giden üstü örtülü bir hakikati aydınlatır.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde bir noktalama yanlışlığı yapılmıştır?</b></p>",
    diff: 2,
    expl: "I numaralı cümlede yargı tamamlandığı için sonuna üç nokta değil, nokta (.) getirilmelidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) “İnsan neden güler ve nelere güler?” sorusu... (III) Bu soruya rahatlıkla şunu söyleyebiliriz; Gülme, kendiliğinden bir duygu boşalımı...</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde bir noktalama yanlışlığı yapılmıştır?</b></p>",
    diff: 2,
    expl: "III numaralı cümlede 'şunu söyleyebiliriz' ifadesinden sonra açıklama yapıldığı için noktalı virgül (;) değil, iki nokta (:) kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yeşilçam filmlerinin (I) melodram örgüsü... (II) söylendikleri dönemin ruhunu, tarihini (III) estetiğini taşıyan... (IV) klasik ile modernin iç içe geçmiş olduğu (V) bu şarkılar...</p><p><b>Bu parçadaki numaralanmış yerlerden hangisine herhangi bir noktalama işareti getirilemez?</b></p>",
    diff: 3,
    expl: "V numaralı yere herhangi bir işaret gelmez; çünkü 'Yerli ile Batı klasik ile modernin iç içe geçmiş olduğu' sıfat-fiil grubu 'bu şarkılar' ismini nitelemektedir. Sıfat ile isim arasına noktalama konulmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Virgülle ilgili aşağıdaki örneklerden hangisi yay ayraç içindeki açıklamayla uyuşmamaktadır?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki virgül sıralı cümleleri ayırmak için değil, özneyi belirtmek veya eş görevli öbekleri ayırmak için kullanılmıştır. 'Yaşanmış olayları aktarmayı amaç edinen' kısmı özne grubudur.",
    answers: [
      { text: "Herhangi bir neden sunmadan, etrafındaki herkese... (Zarf-fiilden sonra konur.)", ok: false },
      { text: "Yaşanmış olayları aktarmayı amaç edinen ve Kapadokya'da çekilen filmin... (Sıralı cümleleri ayırmak için konur.)", ok: true },
      { text: "Film içerisinde kullanılan müzikler; bazı sahnelerin... (Eş görevli kelimeler arasına konur.)", ok: false },
      { text: "Bu, yönetmenin kendi bakışı ve mekânlar ile... (Zamirlerden sonra konur.)", ok: false },
      { text: "Sinema, hayatımıza girdiği andan itibaren topluma... (Yüklemden uzak düşmüş özneyi belirtmek için konur.)", ok: false }
    ]
  },
  {
    text: "<p>...Orhan Veli öldü. Ben bu satırları yazarken Orhan, (I) İstanbul morgunun teşrih masası üstünde yatıyor... (IV) başka bir millette doğsa, (V) milletlerarası bir şöhrete ulaşırdı.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde virgülün kullanımı yanlıştır?</b></p>",
    diff: 3,
    expl: "V numaralı yerde virgül kullanımı yanlıştır. Türkçede şart ekinden (-sa/-se) sonra virgül kullanılmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>... (IV) Hem çağdaş şiirimizin başarılı örneklerini bulabileceğiniz, hem de aşk üzerine yazılmış iyi şiirler... (V) Attila İlhan'ın bu kitapta topladığı şiirleri...</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde virgülün kullanımı yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede 'Hem... hem...' tekrarlı bağlacı kullanılmıştır. Tekrarlı bağlaçların arasına virgül konulmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde noktalı virgül (;) bu cümledeki (Ergoterapi; kişilerin...) işleviyle kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "Öncülde noktalı virgül, özneden sonra gelen eş değer ögeler arasındaki karışıklığı önlemek için kullanılmıştır. C seçeneğinde ise ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için kullanılmıştır.",
    answers: [
      { text: "Tarihî incelemeler; medeni, bedevi hatta vahşi...", ok: false },
      { text: "Edebiyat eğitimi; ne tamamıyla metotsuz, pedagojik kurallardan uzak...", ok: false },
      { text: "Hışırtı çıkaran veya gökyüzünün altında var olan hiçbir şey yoktu; her şey...", ok: true },
      { text: "Nörobilimcilere göre bilinç; duyularımızdan, algılarımızdan...", ok: false },
      { text: "Çevresindeki diğer tonların ve şekillerin yarattığı uzam...", ok: false }
    ]
  },
  {
    text: "<p>I. Ay'ın... II. %20'lerin... III. ABD'ye... IV. n'eyleyim... V. Ali Bey'in... </p><p><b>Numaralanmış cümlelerde kesme işareti ile ilgili aşağıdaki verilen bilgilerden hangisinin örneği yoktur?</b></p>",
    diff: 3,
    expl: "Cümlelerde özel ad (A), sayılar (B), kısaltma (C) ve ses düşmesi (E) örnekleri vardır. Ancak 'belirli bir tarih bildiren ay adlarına gelen ekler' (D) (Örn: 29 Mayıs'ın) örneği yoktur.",
    answers: [
      { text: "Özel adlara getirilen durum eklerini ayırmak için kullanılır.", ok: false },
      { text: "Sayılara getirilen ekleri ayırmak için konur.", ok: false },
      { text: "Kısaltmalara getirilen ekleri ayırmak için konur.", ok: false },
      { text: "Belirli bir tarih bildiren ay adlarına gelen ekleri ayırmak için konur.", ok: true },
      { text: "Seslerin ölçü ve söyleyiş gereği düştüğünü göstermek için kullanılır.", ok: false }
    ]
  },
  {
    text: "<p>Suzy Lee ( ) ifade gücünü sadeliğinden alan bir sanatçı ( ) Büyük ( ) beyaz sayfalarda... şöyle açıklıyor ( ) ( ) Aynı anda iki etkiyi... edebiliyorum ( )</p><p><b>Bu parçadaki yay ayraçla gösterilen yerlere uygun işaretler getirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "Sırasıyla: virgül (Suzy Lee,), nokta (sanatçı.), virgül (Büyük,), iki nokta (açıklıyor:), tırnak işareti (\"Aynı...). Üç nokta (...) işaretine ihtiyaç duyulan bir yer yoktur.",
    answers: [
      { text: "Virgül", ok: false },
      { text: "İki nokta", ok: false },
      { text: "Nokta", ok: false },
      { text: "Üç nokta", ok: true },
      { text: "Tırnak işareti", ok: false }
    ]
  }
];