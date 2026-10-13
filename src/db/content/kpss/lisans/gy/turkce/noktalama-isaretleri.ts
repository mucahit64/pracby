import { McQ } from "../../../../types";

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 1
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_1: McQ[] = [
  {
    text: "<p>• Kendinden sonraki cümleye bağlı olarak ret, kabul, teşvik bildiren kelimelerden sonra konur.<br>• Tırnak içinde olmayan alıntı cümlelerden sonra konur.<br>• Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna konur.<br>• Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.</p><p><b>Aşağıdaki cümlelerin hangisi, virgülün kullanımıyla ilgili bu bilgilerden birine örnek <u>gösterilemez</u>?</b></p>",
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
    text: "<p>Çocukluğunuzdaki en önemli insanları düşünmeye çalışın ( ) Genel olarak nasıllardı ( ) size nasıl davrandılar ( ) neden bu şekilde davrandılar ( ) sizden neyi esirgediler ve sizce bunu neden yaptılar ( )</p><p><b>Bu parçada ayraçlarla belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi <u>sırasıyla</u> getirilmelidir?</b></p>",
    diff: 2,
    expl: "İlk paranteze açıklama yapılacağı için iki nokta (:), ara cümleler küçük harfle devam ettiği ve sıralı cümle yapısı olduğu için aralara virgül (,), en sona ise soru anlamı taşıdığı için soru işareti (?) getirilmelidir.",
    answers: [
      { text: "(!) (,) (?) (,) (?)", ok: false },
      { text: "(;) (?) (?) (?) (?)", ok: false },
      { text: "(;) (,) (;) (,) (?)", ok: false },
      { text: "(:) (,) (,) (,) (?)", ok: true },
      { text: "(:) (,) (,) (;) (?)", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde noktalama <u>yanlışı</u> bulunmaktadır?</b></p>",
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
    text: "<p>Gök bilimciler, Dünya'(I)dan yaklaşık 25 000 ışık yılı uzaklıkta garip bir yıldız buldular. İskoçya'daki Edinburg Üniversitesi'(II)nden gök bilimci Sergey Koposov:(III) “Bizimle uzak yıldız arasında karanlık,(IV) büyük ve uzun bir nesnenin geçişini gözlememiz şaşırtıcı ve sadece kökeninin ne olduğunu tahminedebiliyoruz.(V)” dedi.</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
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
    text: "<p>I. Eserde insanların apolitikleştirildikleri, her şeyden korkan birey hâline getirildikleri aktarılmaya çalışılmıştır.<br>II. Matematik sayesinde sistemlerin doğası modellenir, bu modellemeyle kuantum mekaniğinin esas kavramları çözülmeye çalışılır.<br>III. Homeros, MÖ 9. yüzyılda Sakız Adası'nda doğmuş olduğu tahmin edilen bir halk ozanıdır.<br>IV. Zihinlerimizin kendini koruyan, olayları olduğu gibi görmekten alıkoyan savunma mekanizmaları bulunmaktadır.<br>V. Optik illüzyon, görsel olarak algılanan görüntüler ile nesnel gerçekliğin farklı olması durumudur.</p><p><b>Numaralanmış cümlelerde kullanılan virgüller (,) görevleri bakımından ikişerli eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
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
    text: "<p>Bağışıklık sistemi üzerinde birçok olumlu etkileri bulunan probiyotiklerin yüksek dozda, sürekli ve yanlış tüketimi; bu takviyenin eksikliği kadar tehlikeli ve risklidir.</p><p><b>Aşağıdakilerin hangisinde noktalı virgül (;) bu cümledeki işleviyle kullanılmıştır?</b></p>",
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
    text: "<p>Uzmanlar bazı uyarılarda bulunuyor (I) Zayıflama çayı adıyla satılan karışık bitki çaylarının içeriğinin ne olduğuna mutlaka bakılmalı (II) bu çaylar asla kontrolsüzce tüketilmemeli (III) Çünkü zayıflama veya ödem atıcı çaylar kalp ritim bozukluğu ve bağırsak yapısında bozulma gibi birçok olumsuz sonuca yol açabiliyor (IV) bu yüzden bitki çaylarını doktorunuza danışmadan tüketmeyiniz (V)</p><p><b>Bu parçadaki numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
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
    text: "<p>Eserde anlatılanlar yazarın yaşadığı şeyler mi acaba ( ) Gerçekten oralara gitti mi ( ) Hayal dünyasında kendisi mi oluşturdu bütün bunları ( ) Herkesi akıcı anlatımıyla kendine bağlayan bu eserde anlatılanlar hayal miydi ( ) yoksa gerçek miydi ( )</p><p><b>Bu parçada numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
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
    text: "<p>Yazınsallık içeren metinle,(I) yazınsallık içermeyen metin arasında nasıl bir ayrım vardır?(II) Bu ayrım tam olarak nerede başlar, nerede biter?(III) Bu ayrımı her zaman görebilir,(IV) tanıyabilir, ölçebilir miyiz?(V)</p><p><b>Bu parçada numaralanmış yerlerin hangisinde noktalama işareti <u>yanlış</u> kullanılmıştır?</b></p>",
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
    text: "<p>Andre Gide ( ) sanatçılara şöyle bir öğüt vermiştir ( ) ( ) Sen yalnız şeklin güzel olmasına bak ( ) güzel bir bina hiç müşterisiz kalır mı ( ) ( ) Gide ( ) doğru söylemiş gerçekten ( )</p><p><b>Bu parçada ayraçlarla belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi <u>getirilemez</u>?</b></p>",
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
    text: "<p>Venedik denince aklınıza neler gelir,(I) desem nasıl bir cevap verirsiniz acaba.(II) Sormadan bunu bilemem ama tahmin edebilirim:(III) gondollar,(IV) aşk, müzik, karnaval...(V)</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlıştır</u>?</b></p>",
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
    text: "<p>Noktalama işaretlerinin tarihi, Bizanslı dil bilgini Aristophanes'e dek gider (I) Bu işaretlerin (II) kullanılmasına 16. yüzyılda matbaanın bulunuşu ile başlanmıştır (III) 19. yüzyılda ise noktalama işareti genelleşmiş ve kesin kurallara bağlanmıştır (IV) Noktalama işaretlerinin bizde kullanılması (V) Tanzimat Dönemi'yle başlar.</p><p><b>Bu parçadaki numaralanmış yerlerin hangisine noktalama işareti <u>getirilemez</u>?</b></p>",
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
    text: "<p>• Anlatım olarak tamamlanmamış cümlelerden sonra konur.<br>• Ünlem ve seslenmelerde anlamı pekiştirmek için konur.<br>• Herhangi bir sebepten açık yazılmak istenmeyen kelimelerin yerine konur.<br>• Alıntılarda başta, ortada ve sonda alınmayan kelime veya bölümlerin yerine konur.</p><p><b>Üç noktanın kullanımıyla ilgili bu kuralların hangisinin örneği aşağıda <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğinde üç nokta, karşılıklı konuşmalarda yeterli olmayan, eksik bırakılan cevapların yerine kullanılmıştır; ancak yukarıdaki öncüllerde bu göreve dair bir kural bulunmamaktadır.",
    answers: [
      { text: "Victor Hugo'nun bir romanında geçen şu satırlar beni çok etkilemiştir:<br>... Gölgeyi takip edersen ışığı kaçırırsın. Kalbini dinle, yola çıkmaktan korkma. Gerisi kendiliğinden gelir...", ok: false },
      { text: "Kapı çalındı ama açan olmadı. Bir süre bekledi. Sonra yavaşça fısıldadı:<br>– Demet... Demet diyorum, Demet...", ok: false },
      { text: "– Çantayı alıp öylece gidebileceğini mi sanıyorsun? Gerçekten mi?<br>– Otobüsün saati kaçta?<br>– Lütfen bir şey söyle artık!<br>– ...", ok: true },
      { text: "Onca zaman sanki hiçbir şey olmamış gibi davranıyordu. Karşısındakinin gözleri doldu dolacak. D...'yi tekrar görmek bile başlı başına bir yüktü.", ok: false },
      { text: "Bahçede dolaşırken bir anda durdu. Gözleri çimenlerin üzerindeki serçeye takılmıştı. Ağzını açtı ama...", ok: false }
    ]
  }
]

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 2
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_2: McQ[] = [
  {
    text: "<p>Filmleriyle herkesi çok güldürdü, çok düşündürdü o. Çoğunda hiç konuşmadan, kimilerindeyse çok konuşarak... O; \"Sir\", \"Kont\" ve bir \"Baron\" olarak rol aldı ama en önemli rolü \"baba\" idi. Babam, hem özel yaşamımızda hem de okul yaşamımızda her daim disiplinli olmamız gerektiğini aşılardı bize. Okuldaki durumuzla yakından ilgilenir, düşük bir not aldığımızda sert bir biçimde bizi cezalandırırdı. Evden çıkmamızı yasaklar, harçlığımızı keserdi ama her şeye karşın babam, sıcak bir insandı; bizi güldürdüğü zamanlar da ziyadesiyle fazlaydı. Örneğin, tatillerde yerleştiğimiz otel odasında bizi yanına çağırır, tuhaf bir gülümsemeyi yüzüne yerleştirip \"Hey, bakın! Şurada gizli bir tünel var galiba!\" derdi. Sonra da birden ortadan kaybolup bizden saklanırdı.</p><p><b>Bu parçada virgülün aşağıdaki işlevlerinden hangisinin kullanımı <u>yoktur</u>?</b></p>",
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
    text: "<p>• Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için kullanılır.<br/>• Soru anlamı taşıyan cümlelerin sonunda kullanılır.<br/>• Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözleri belirtmek için kullanılır.<br/>• Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için kullanılır.<br/><b>Yukarıdaki öncüllerde hangi noktalama işaretiyle ilgili bir açıklama <u>yoktur</u>?</b></p>",
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
    text: "<p><b>Aşağıdaki cümlelerin hangisindeki noktalama işaretinin kullanımı parantez içerisinde verilen bilgi ile <u>uyuşmamaktadır</u>?</b></p>",
    diff: 3,
    expl: "E seçeneğinde ünlem işareti (!) parantez içinde alay, kinaye veya küçümseme anlamı katmak için kullanılmıştır. Parantez içindeki 'sevinç, kıvanç, acı, korku' açıklaması bu cümledeki özel kullanımla (kinaye) uyuşmamaktadır.",
    answers: [
      { text: "Uludağ ve Abant gibi klasik rotalardan sıkılanlar için iki önerimiz olacak: Birincisi Isparta'daki Davraz Dağı, ikincisi Gümüşhane'deki Zigand. (İki nokta kendisiyle ilgili açıklama verilecek cümlelerin sonuna getirilir.)", ok: false },
      { text: "Ahmet Hamdi Tanpınar'ın 120'nci doğum günü (23 Haziran 1901) nedeniyle Beyoğlu Belediyesi tarafından Tarık Zafer Tunaya Kültür Merkezinde bir dizi etkinlik düzenlendi. (Yay ayraç cümledeki anlamı tamamlayan ve cümlenin dışında kalan ek bilgiler için kullanılır)", ok: false },
      { text: "Yüzeyinin renginden dolayı \"Kızıl Gezegen\" olarak adlandırılan Mars, Dünya'dan çıplak gözle görülebiliyor. (Kesme işareti, özel adlara getirilen iyelik, durum ve bildirme eklerini ayırmak için kullanılır.)", ok: false },
      { text: "Onu bir defacık görebilmek için neler yapmazdım ki ... (Üç nokta, anlatım olarak tamamlanmamış cümlelerin sonunda kullanılır.)", ok: false },
      { text: "Son romanını bir haftada bitirebilirmiş(!) ama diğer işleri çok yoğunmuş. (Ünlem işareti, sevinç, kıvanç, acı, korku, şaşma gibi duyguları anlatan cümlelerde kullanılır.)", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde noktalama <u>yanlışı</u> yapılmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'olsalar da' ifadesindeki 'da' bağlaçtır. Türkçede 'da/de' bağlacından önce veya sonra virgül kullanılmaz.",
    answers: [
      { text: "Sıfatlar ikiye ayrılır: niteleme sıfatları, belirtme sıfatları.", ok: false },
      { text: "Şair; yaşadığı dönemin sosyal ve siyasal olaylarını, kültürünü, inançlarını şiire yansıtır.", ok: false },
      { text: "Bu pazarda her türü meyve bulunur: nar, incir, üzüm...", ok: false },
      { text: "Boşa koydum, dolmadı; doluya koydum, almadı.", ok: false },
      { text: "Bazı yaralar vardır ki kapanmış olsalar da, dokununca sızlar.", ok: true }
    ]
  },
  {
    text: "<p>Büyük yazar Borgess,(I) yolda yürüyormuş;(II) Bir hayranı yaklaşmış yanına.(III) Emin olmak için \"Siz Sinyor Borgess misiniz acaba?(IV)\" diye sormuş. Borgess cevap vermiş: Bazen...(V)</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yerinde <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "II numaralı yerde noktalı virgül (;) kullanımı yanlıştır. 'Büyük yazar Borgess, yolda yürüyormuş' cümlesi tamamlanmıştır ve ardından gelen cümle büyük harfle başladığı için buraya nokta (.) getirilmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Narsist insanlar (I) her zaman başarıya ve güce kavuşma yolunu bulmaya çalışır. Bu insanlar (II) diğer kişilerin kendilerine özel muamele göstermelerinden hoşlanır. Mümkün olan en iyi şekilde davranılmayı hak ettiklerini düşünen narsist kişiler (III) ayrıcalıklar talep eder. Özel olduklarına inanırlar (IV) başkalarının onlara böyle davranması gerektiğini düşünürler. Narsist insanları tanımak istiyorsanız (V) başkalarının onlarla çelişip eleştirdiklerinde rahatsızlık duyduklarına dikkat etmeniz gerekir.</p><p><b>Bu parçada numaralanmış yerlerden hangisine virgül (,) <u>getirilemez</u>?</b></p>",
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
    text: "<p>Ay( ) gelgit kilitlemesine iyi bir örnektir( ) Gökyüzünün neresinde olursa olsun veya hangi aşamada olursa olsun, Ay( )ın yalnızca bir tarafını görüyoruz çünkü Ay, gelgitte Dünya( )ya kilitlendi belki de( )</p><p><b>Bu parçada parantezle gösterilen yerlere <u>sırasıyla</u> aşağıdaki noktalama işaretlerinden hangileri getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: Özne için virgül (,), cümle bitimi için nokta (.), özel adlara gelen ekleri ayırmak için kesme işareti (') (Ay'ın ve Dünya'ya) ve son cümle bitimi için nokta (.) gelmelidir.",
    answers: [
      { text: "(,) (...) (,) (,) (...)", ok: false },
      { text: "(,) (:) (') (') (.)", ok: false },
      { text: "(;) (.) (') (') (...)", ok: false },
      { text: "(,) (.) (') (') (.)", ok: true },
      { text: "(;) (.) (') (') (.)", ok: false }
    ]
  },
  {
    text: "<p>Beyni zinde tutmak için en önemli prensip çeşitlilik ve meraktır.(I) Dolayısıyla beyni zinde tutmak için onun sürekli merak içerisinde olmasını sağlamalısın.(II) Çevrendeki dünyayla ilgilenmelisin;(III) neler olduğunu ve neler yapılabildiğini sorgulamalısın.(IV) Böylece beynini hızlı ve verimli bir şekilde çalıştırmayı başarabilirsin.(V)</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi yerinde <u>kullanılmamıştır</u>?</b></p>",
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
    text: "<p>Senin çabanla ayakta duran hiçbir samimiyete ( ) ilişkiye yer verme hayatında ( ) Zoraki sevmeler ve ısmarlama duygular tat vermez insana ( ) Sevmiyor mu ( ) Sen de sevme ( ) Sen ( ) seni güzel sevene mucizesin.</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi <u>sırasıyla</u> getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: virgül (,), nokta (.), nokta (.), soru işareti (?), nokta (.) ve özne sonrası vurgu için virgül (,) getirilmelidir.",
    answers: [
      { text: "(,) (.) (.) (?) (.) (,)", ok: true },
      { text: "(;) (...) (:) (?) (!) (,)", ok: false },
      { text: "(,) (...) (.) (!) (.) (;)", ok: false },
      { text: "(,) (.) (:) (!) (...) (;)", ok: false },
      { text: "(,) (;) (!) (?) (.) (,)", ok: false }
    ]
  },
  {
    text: "<p>Yazın kuramcıları,(I) yazın tarihçileri ve kimi eleştirmenlere göre dilsel ürünler,(II) şiirin,(III) toprağında boy atıp gelişmiştir. Düşünceler,(IV) bilgi ve gözlemler uzun süre şiirle aktarılmıştır. Ayrıca duygulardan,(V) imgelerden oluşmuş bir yaşantı birikiminin ürünüdür.</p><p><b>Bu parçadaki numaralanmış virgüllerden hangisinin kullanımında <u>yanlışlık</u> yapılmıştır?</b></p>",
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
    expl: "Virgül dört farklı görevde kullanılmıştır: 1) Eş görevli sözcükleri ayırma (I. cümle), 2) Yüklemden uzak düşmüş özneyi belirtme (II. ve V. cümle), 3) Kendinden sonraki cümleye bağlı olarak onay, ret, teşvik bildiren sözcüklerden sonra kullanma (III. cümle), 4) Ara sözü ayırma (IV. cümle).",
    answers: [
      { text: "1", ok: false },
      { text: "2", ok: false },
      { text: "3", ok: false },
      { text: "4", ok: true },
      { text: "5", ok: false }
    ]
  },
  {
    text: "<p>Basılı Eğitim Malzemeleri Merkezi'(I)nden iki ay önce ben de ayrıldım.(II) Şimdi kitap verirlerse yazacağım.(III) Her şey ve her yer,(IV) az gelişmiş bir ülkede yetersizlerin,(V) sığların eline geçiyor.</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 2,
    expl: "I numaralı yerde 'Merkezi'nden' ifadesinde kesme işareti yanlış kullanılmıştır. Kurum, kuruluş ve kurul adlarına gelen ekler kesme işaretiyle ayrılmaz. Doğru yazım 'Basılı Eğitim Malzemeleri Merkezinden' şeklinde olmalıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat kendi alanındaki üretiminde öznel bir bakışla güzelliğe ulaşmayı( ) kişiye estetik zevk kazandırmayı amaçlar. Bilim ise deney, gözlem vb. yöntemlerle gerçeğe ve doğru bilgiye ulaşmayı amaçlar. Bununla birlikte sanatçının da belirttiği gibi( ) ( ) Bu iki insan çabasını birbirinden ayırmak için yapılan her girişim daha çok onları birleştirmek doğrultusundadır( ) ( )</p><p><b>Bu parçada ayraçlarla belirtilen yerlere aşağıdakilerden hangisinde verilen noktalama işaretleri <u>sırasıyla</u> getirilmelidir?</b></p>",
    diff: 3,
    expl: "Sırasıyla: eş görevli sözcükler arasına virgül (,), alıntı sözden önce iki nokta (:), alıntıyı açmak için tırnak işareti (\"), cümle tamamlandığı için nokta (.) ve alıntıyı kapatmak için tırnak işareti (\") gelmelidir.",
    answers: [
      { text: "(;) (:) (\") (...) (\")", ok: false },
      { text: "(,) (:) (\") (\") (.)", ok: false },
      { text: "(,) (:) (\") (.) (\")", ok: true },
      { text: "(;) (,) (\") (.) (\")", ok: false },
      { text: "(;) (:) (\") (.) (\")", ok: false }
    ]
  },
  {
    text: "<p>• Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına konur.<br/>• Sıralı cümleleri birbirinden ayırmak için kullanılır.<br/>• Cümle içinde ara sözleri veya ara cümleleri ayırmak için ara sözlerin veya ara cümlelerin başına ve sonuna getirilir.<br/>• Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için kullanılır.</p><p><b>Yukarıda verilen virgülün kullanımıyla ilgili kuralların hangisinin örneği aşağıda <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "B seçeneğindeki virgül, tırnak içinde olmayan alıntı cümlenin sonuna konmuştur; bu kullanım öncüllerde yer almamaktadır. A'da özneyi belirtme (Bilinçaltı,), C'de eş görevli kelimeleri ayırma (çim, kum, kil), D'de ara sözü ayırma (ne yazık ki geçen yıl katılamadım), E'de sıralı cümleleri ayırma görevi örneklenmiştir.",
    answers: [
      { text: "Bilinçaltı, beynimizin biz farkında olmadan bilincimizin dışında çalışarak algıladığımız her şeyi kaydedip bilincimizin emrine veren bir parçamızdır.", ok: false },
      { text: "En güzel romanlar bir bunalım devrinde kaleme alınmıştır, der Dostoyevski.", ok: true },
      { text: "Her gün 40 dakika çıplak ayakla çim, kum, kil ve betonda dolaşmak topraklama için idealdir.", ok: false },
      { text: "Tüyap Kitap Fuarı, ne yazık ki geçen yıl katılamadım, bu yıl da Bursa'da büyük bir kitap şölenine dönüştü.", ok: false },
      { text: "D vitamini dişleri güçlendiriyor, hücrelerin büyümesinde ve sinir sisteminin düzenli çalışmasında önemli rol oynuyor.", ok: false }
    ]
  },
  {
    text: "<p>Manzum hikâyelerin şiirlerden tek farkı, olay örgüsüne bağlı olması; kişi (I) zaman (II) mekân ögelerine yer verilmesidir. Söz konusu hikâyelerin en önemli temsilcileri Tevfik Fikret ve Mehmet Âkif Ersoy'dur. Tevfik Fikret'in Balıkçılar ve Hasta Çocuk (III) Mehmet Âkif'in Küfe (IV) Seyfi Baba (V) Hasta gibi eserleri edebiyatımızın önemli manzum hikâyeleri arasında yer alır.</p><p><b>Bu parçadaki numaralanmış yerlerin hangisine diğerlerinden farklı bir noktalama işareti getirilmelidir?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı yerlere eş görevli sözcükleri ayırmak için virgül (,) gelmelidir. III numaralı yere ise virgüllerle ayrılmış takımları (Tevfik Fikret'in eserleri ile Mehmet Âkif'in eserleri) birbirinden ayırmak için noktalı virgül (;) getirilmelidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kurtuluş Savaşı'nı zaferle sonuçlandırıp Türkiye Cumhuriyeti'ni kuran Atatürk'ün her alanda gerçekleştirdiği devrimlerinin içinde \"dil devrimi\" önemli bir yer tutmaktadır. Atatürk, Türkçenin ulusal nitelik kazanmasının ulusal bağımsızlığın ön koşulu olduğunu belirtiyordu. Bunu şu sözlerle ifade etmiştir: \"Millî duygu ve dil arasındaki bağ çok kuvvetlidir. Dilin millî ve zengin olması, millî duygunun gelişmesinde başlıca etkendir.\"</p><p><b>Bu parçada noktalama işaretleriyle ilgili hangi kurala yer <u>verilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'dil devrimi' sözü vurgulanmak için tırnak içine alınmış (A), 'Kurtuluş Savaşı'nı, Atatürk'ün' gibi özel adlara gelen ekler kesme işaretiyle ayrılmış (B), 'Atatürk,' sözcüğünden sonra yüklemden uzak düşen özne virgülle belirtilmiş (D), Atatürk'ün sözü tırnak içinde aktarılmıştır (E). Ancak parçada birbiri ardınca sıralanan eş görevli söz bulunmadığından C'deki kurala örnek yoktur.",
    answers: [
      { text: "Özel olarak vurgulanmak istenen sözler tırnak içine alınır.", ok: false },
      { text: "Özel adlara getirilen iyelik, durum ve bildirme ekleri kesme işaretiyle ayrılır.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasında virgül kullanılır.", ok: true },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için virgül kullanılır.", ok: false },
      { text: "Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözler tırnak içine alınır.", ok: false }
    ]
  },
  {
    text: "<p>Birazcık dikkat edince, (I) insanın okuyup gördüğü hatta öğrendiği birçok bilgiyi sorgusuz sualsiz kabul etmeye ne kadar yatkın olduğunu görürüz. (II) Bu yatkınlık çoğu zaman yanlışları da \"doğru\" kabul etmemize sebep olur. Örneğin, (III) boğaların kırmızı renge saldırdığını biliriz ama işin gerçeği böyle midir, (IV) sihirbazların \"hokus pokus\" dediğini biliriz ama bu sözcük gerçekten bir sihir sözcüğü müdür? (V)</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı yerde virgül kullanımı yanlıştır; çünkü zarf-fiil eki almış kelimeden sonra virgül kullanılmaz. Ancak cümlede birden fazla zarf-fiil art arda sıralanırsa eş görevli sözcükleri ayırmak için virgül kullanılabilir; burada tek bir zarf-fiil ('dikkat edince') vardır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Çarşıya çıkmak acı veriyor artık insana; mağazaların, dükkânların, parkların adları ya İngilizce sözcüklerden oluşuyor ya da Türkçe isimler bile İngilizce sözcükler gibi yazılıyor.</p><p><b>Aşağıdakilerden hangisinde noktalı virgül (;) bu cümledeki işleviyle kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümlede noktalı virgül, içinde virgül bulunan sıralı cümleleri birbirinden ayırmak için kullanılmıştır. E seçeneğindeki 'Ona güveniyor, inanıyoruz; birçok başarıya imza attığını görüyor, onu her daim destekliyoruz.' cümlesinde de aynı işlevdedir. A, B ve C'de virgülle ayrılmış takımları ayırma, D'de ise özneden sonra kullanılma görevindedir.",
    answers: [
      { text: "Bursa'da yetiştirilen ürünler arasında patates, pırasa, biber; şeftali, üzüm, vişne ve kayısı sayılabilir.", ok: false },
      { text: "Ders programında sayısal derslerden matematik, fizik, kimya; sözel derslerden Türkçe, tarih, coğrafya, felsefe derslerine yer verilmiştir.", ok: false },
      { text: "Türkiye, Almanya, İngiltere; Ankara, Berlin ve Londra arasında doğrudan bir ilişki olduğu kesin.", ok: false },
      { text: "Edebiyat; resim, heykel, mimariden farklı olarak fonetik sanatlar içerisinde yer alır.", ok: false },
      { text: "Ona güveniyor, inanıyoruz; birçok başarıya imza attığını görüyor, onu her daim destekliyoruz.", ok: true }
    ]
  },
  {
    text: "<p>Sarıgerme, (I) Dalaman Havalimanı'na (II) yaklaşık 20 kilometre uzaklıkta. (III) Su altı yaşam türleri ve zengin tabiat alanlarıyla bölgenin dalış potansiyeli oldukça yüksektir. (IV) Ayrıca bu kıyılar, (V) nesli tükenme tehlikesiyle karşı karşıya olan Akdeniz foklarının da yaşam alanıdır.</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 2,
    expl: "II numaralı yerde kesme işaretinin kullanımı yanlıştır. 'Dalaman Havalimanı' bir kuruluş adıdır ve kurum, kuruluş adlarına gelen ekler kesme işaretiyle ayrılmaz. Doğrusu 'Dalaman Havalimanına' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Tesla ve Edison arasındaki efsanevi çekişmenin temelinde, elektriği uzun mesafelere iletme yatar ( ) Çünkü Edison'un sisteminde üretilen elektriği uzak mesafelere iletmek sorundu çünkü tellerin ısınma sorunu aşılamıyordu ( ) Tesla bir dönüştürücü yardımıyla bu sorunu çözmüştü ( ) böylece alternatif akımı icat etti. Çekişmenin şu boyutu da ilgi çekiciydi ( ) İkisinin arkasında da kâr peşinde koşan büyük ABD şirketleri vardı.</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi <u>sırasıyla</u> getirilmelidir?</b></p>",
    diff: 3,
    expl: "I ve II numaralı yerlere cümle tamamlandığı için nokta (.), III numaralı yere sıralı cümleleri ayırmak için virgül (,), IV numaralı yere ise kendisinden sonra açıklama yapıldığı için iki nokta (:) getirilmelidir.",
    answers: [
      { text: "(.) (;) (;) (,)", ok: false },
      { text: "(:) (,) (,) (:)", ok: false },
      { text: "(.) (;) (;) (;)", ok: false },
      { text: "(.) (.) (;) (;)", ok: false },
      { text: "(.) (.) (,) (:)", ok: true }
    ]
  },
  {
    text: "<p>Her şeyin geçip gittiğine,(I) yaşadıklarımızın geçmişte kaldığına kim inandırabilir bizi? Anılarımızı avuç dolusu su gibi her sabah yüzümüze çarpmanın işe yaramayacağına nasıl inanabiliriz? Tanıklarla,(II) kanıtlarla,(III) uygun adım yürümek için ikide bir ayak değiştirme imkânı veren gerçeklerle üstümüze gelseler de boşuna! Tam şimdi,(IV) bir yaz öğlesi,(V) kendimi koskocaman bir boşluk içerisinde hissediyorum.</p><p><b>Bu parçada numaralanmış virgüllerden hangisi diğerlerinden farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I numaralı yerde virgül eş görevli sözcükleri ayırma görevinde kullanılmıştır. II ve III ile IV ve V numaralı yerlerde ise virgül ara sözleri ayırma görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bahçelerinde Yas, Füruzan kitaplarının tek tek incelendiği yazılardan oluyor. Füruzan çok sevilen bir yazar olsa da edebiyatı hakkında az yazıldığını, hakkında az kitap olduğunu düşünerek giriştik böyle bir çalışmaya. Yazı istemek için önce yakın çevremize çevirdik yüzümüzü, sonra da hayli uzaklara. Bu derlemede, Füruzan edebiyatını olabildiğince geniş kucaklayabileceğimizi, tabii Albert Camus'un sözünü aklımızda tutarak, umuyoruz.</p><p><b>Bu parçada virgülün aşağıdaki işlevlerinden hangisinin kullanımı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "'Bahçelerinde Yas,' sözünde özneyi belirtme (A), 'yazıldığını, hakkında az kitap olduğunu' sözünde eş görevli söz gruplarını ayırma (B), 'çevirdik yüzümüzü, sonra da hayli uzaklara' sözünde sıralı cümleleri ayırma (C), 'tabii Albert Camus'un sözünü aklımızda tutarak' sözünde ara sözü ayırma (E) görevi vardır. Parçada alıntı cümle kullanılmadığı için D'deki işlevin örneği yoktur.",
    answers: [
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için konur.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için konur.", ok: false },
      { text: "Tırnak içinde olmayan alıntı cümlelerinden sonra konur.", ok: true },
      { text: "Cümle içinde ara sözleri veya ara cümleleri ayırmak için ara sözlerin veya ara cümlelerin başına ve sonuna konur.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde noktalı virgül (;) farklı işlevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde noktalı virgül, içinde virgül bulunan sıralı cümleleri ayırmak için kullanılmıştır. B, C, D ve E seçeneklerinde ise cümle içinde virgülle sıralanmış tür ve takımları birbirinden ayırmak için kullanılmıştır.",
    answers: [
      { text: "Gerçekleşmesini istediğiniz şeyler bizim beklentilerimizdir; beklentilerimizde ısrarcı olup, onları sürekli dileyip enerjinizi yükseltmeniz gerekir.", ok: true },
      { text: "Millî edebiyat zevk ve anlayışını sürdüren sanatçılar Reşat Nuri, Yakup Kadri, Halide Edip; toplumcu gerçekçi anlayışla eser veren sanatçılar Kemal Tahir, Orhan Kemal, Yaşar Kemal'dir.", ok: false },
      { text: "Şinasi, Ahmet Refik Paşa, Direktör Ali Bey klasisizm akımının; Namık Kemal, Ahmet Mithat Efendi romantizm akımının Türk edebiyatındaki temsilcileridir.", ok: false },
      { text: "Enfeksiyon, diyabet, tiroit gibi rahatsızlıklara iç hastalıkları; osteoartrit, romatoid artrit gibi rahatsızlıklara ise romatoloji bölümü bakmaktadır.", ok: false },
      { text: "Baş ağrısına neden olan çevresel faktörler egzoz, sigara, fabrika dumanları; psikolojik faktörler arasında stres, gereksiz konuları kafaya takmak yer almaktadır.", ok: false }
    ]
  },
  {
    text: "<p>• Özel adlara getirilen iyelik, durum ve bildirme ekleri kesme işaretiyle ayrılır.<br/>• Kişi adlarından sonra gelen saygı ve ünvan sözlerine getirilen ekleri ayırmak için kullanılır.<br/>• Kısaltmalara getirilen ekleri ayırmak için kullanılır.<br/>• Sayılara getirilen ekleri ayırmak için kullanılır.</p><p><b>Aşağıdaki cümlelerin hangisi kesme işaretinin kullanımıyla ilgili bu bilgilerden birine örnek <u>gösterilemez</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki 'n'oldu' sözünde kesme işareti, ölçü ve söyleyiş gereği düşen 'e' sesini göstermek için kullanılmıştır; bu işlev öncüllerde yer almamaktadır. A'da sayıya (1925'te), B'de özel adlara (Akdeniz'in, Kıbrıs Adası'nın), D'de unvana (Paşa'nın), E'de kısaltmaya (TBMM'nin) gelen ekler ayrılmıştır.",
    answers: [
      { text: "16 Şubat 1925'te kurulan Türk Hava Kurumu, havacılık sanayisini kurmak, havacılığın gelişmesini sağlamak amacını gütmektedir.", ok: false },
      { text: "Akdeniz'in üçüncü büyük adası Kıbrıs Adası'nın fethi 1570 yılında başladı.", ok: false },
      { text: "Yüzler gülmez olmuş, gözler derinlere dalar olmuş; n'oldu bize böyle?", ok: true },
      { text: "Erzurum Kongresi, 1919 yılında Mustafa Kemal Paşa'nın girişimleriyle toplandı.", ok: false },
      { text: "1920 yılında TBMM'nin çıkardığı ilk kanun, Ağnam Resmi Kanunu oldu.", ok: false }
    ]
  }
];

// ============================================================================
// NOKTALAMA İŞARETLERİNİN KULLANIMI - TEST 4
// ============================================================================
export const TUR_NOKTALAMA_ISARETLERININ_KULLANIMI_TEST_4: McQ[] = [
  {
    text: "<p>XX. yüzyılın başından itibaren modern sanatın gelişmesine, ilerlemesine, içeriğinin önceki dönemlere oranla farklılaşmasına yardımcı olan ana kaynaklardan birinin psikanaliz, özellikle de Freud'un kuramları olduğu, açıkça söylenebilir. Bilindiği üzere Freud, sanat ve sanatçılarla ilgilidir; bilime, arkeolojiye ve antik eserlere ilgi duymuştur. Ancak Freud'un dikkati ve yoğunluğu \"klasik sanat\" üzerinedir, kendi çağının devrim yaratan sanatı onu pek etkilememiştir. Bu durumun ironik tarafı, fikirleri zaman içinde modern bilincin merkezi hâline gelirken Freud'un bu bilincin diğer tezahürlerinden büyük ölçüde kopuk olmasıdır. O, Viyana'nın canlı kültürel hayatını ıskalamıştı; 1895'te Fliess'e \"Dünyayı gördüğüm yok, pek duyduğum da söylenemez.\" diye yazmıştı.</p><p><b>Bu parçada bazı noktalama işaretlerinin aşağıdaki işlevlerinden hangisinin kullanımı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "'özellikle de Freud'un kuramları' ara sözdür ve virgüllerle ayrılmıştır (A). 'Freud, sanat ve sanatçılarla ilgilidir' cümlesinde özne virgülle belirtilmiştir (B). 'Dünyayı gördüğüm yok, pek duyduğum da söylenemez.' alıntısı tırnak içine alınmıştır (C). 'Bilindiği üzere Freud, ... ilgilidir; bilime, arkeolojiye ... duymuştur.' cümlesinde noktalı virgül, ögeleri arasında virgül bulunan sıralı cümleleri ayırmıştır (E). Ancak özneden sonra konan noktalı virgül (D) örneklenmemiştir.",
    answers: [
      { text: "Cümle içindeki ara sözleri ayırmak için ara sözlerin başına ve sonuna virgül konur.", ok: false },
      { text: "Uzun cümlelerde yüklemden uzak düşmüş olan özneyi belirtmek için virgül kullanılır.", ok: false },
      { text: "Başka bir kimseden veya yazıdan olduğu gibi aktarılan sözler tırnak içine alınır.", ok: false },
      { text: "İkiden fazla eş değer ögeler arasında virgül bulunan cümlelerde özneden sonra noktalı virgül konabilir.", ok: true },
      { text: "Noktalı virgül, ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için konur.", ok: false }
    ]
  },
  {
    text: "<p>Şiirli yastık olur mu demeyin.(I) Sivas Kongresi için kente gelen Mustafa Kemal Paşa'ya Sivas Sultanisi'nin(II) ikinci katındaki bir oda ayrılır. Yatağının üstünde bir genç kızın çeyiz sandığından alınan çiçek motifli ipek bir örtü vardır. Mustafa Kemal,(III) yastıklara işlenmiş iki dizeyi okuyunca Mazhar Müfit Bey'i(IV) yanına çağırır. Mustafa Kemal şiirdeki uyarının herkes için doğru olduğunu söyler. Sivas Kongresi günlerinde Mustafa Kemal'in başını koyduğu yastık kılıflarına yazılı şiirin ilk dizesi şöyledir:(V) \"Dünyanın makamıyla gururlanıp incitme insanı.\"</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 2,
    expl: "II numaralı yerde kesme işaretinin kullanımı yanlıştır. 'Sivas Sultanisi' bir kurum adıdır ve kurum, kuruluş adlarına gelen ekler kesme işaretiyle ayrılmaz. Doğrusu 'Sivas Sultanisinin' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Hikmet Münir, o dönem Prag'da elçilik görevinde olan Yakup Kadri'yi İstanbul'da yakalamış ve \"Yakup Kadri ile Bir Saat\" başlıklı bir röportaj yapmıştır. \"Bir Sürgün\" adlı romanıyla o günlerde epeyce tartışmayı ateşlemiş olan Yakup Kadri,(I) memleketimizde bir edebî cereyan görüyor musunuz,(II) sorusuna şu cevabı vermiştir(III) \"(IV)Memlekette belli başlı bir edebiyat cereyan müşahede etmiyorum. Mamafih her istihale devrine mahsus bugünkü edebî kargaşalığın içinde bazı simalar gözüme çarpıyor.(V)\"</p><p><b>Bu parçadaki numaralanmış noktalama işaretlerinden hangisi <u>yanlış</u> kullanılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı yerde noktalı virgül (;) kullanımı yanlıştır. Alıntı sözlerden önce noktalı virgül değil, iki nokta (:) kullanılmalıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Geniş kitlelerin oyuncu olarak tanıdığı sanatçı, ikinci öykü kitabı \"Zamansız\"da sade bir dille okurunu başka türlü zamanlara çağırıyor. Çıkarsız, hesapsız, anlayışlı zamanları anımsatan; nahif, dolaysız ve küçük sürprizlerle biten öyküler bunlar.</p><p><b>Bu parçada noktalama işaretleriyle ilgili aşağıdaki kurallardan hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada cümle sonlarında nokta (A), 'Çıkarsız, hesapsız' ve 'nahif, dolaysız' sözlerinde eş görevli sözcükleri ayıran virgül (B), virgüllerle ayrılmış takımları ayıran noktalı virgül (D) ve eser adını gösteren tırnak işareti (E) vardır. Ancak sıralı cümleleri ayırmak için kullanılan virgül örneklenmemiştir.",
    answers: [
      { text: "Tamamlanmış cümlelerin sonuna nokta konur.", ok: false },
      { text: "Birbiri ardınca sıralanan eş görevli kelime ve kelime gruplarının arasına virgül konur.", ok: false },
      { text: "Sıralı cümleleri birbirinden ayırmak için virgül kullanılır.", ok: true },
      { text: "Cümle içinde virgüllerle ayrılmış tür veya takımları birbirinden ayırmak için noktalı virgül kullanılır.", ok: false },
      { text: "Cümle içerisinde eserlerin ve yazıların adları, bölüm başlıkları tırnak içine alınır.", ok: false }
    ]
  },
  {
    text: "<p>Ben bilmek istiyorum ( ) diyor Küçük Kara Balık ( ) Hayat gerçekten bir avuç yerde durmadan dönüp durmak ( ) sonra da yaşlanıp ölüp gitmek mi ( ) yoksa bu dünyada başka türlü yaşamak da mümkün mü ( )</p><p><b>Bu parçada parantezle ( ) belirtilen yerlere aşağıdaki noktalama işaretlerinden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 3,
    expl: "I. yere tırnak içine alınmayan alıntı cümleden sonra virgül (,), II. yere cümle tamamlandığı için nokta (.), III. ve IV. yerlere art arda sıralanan ve küçük harfle başlayan soru cümleleri arasında virgül (,), V. yere ise soru cümlelerinin bittiği yerde soru işareti (?) getirilmelidir.",
    answers: [
      { text: "(.) (.) (;) (,) (?)", ok: false },
      { text: "(,) (...) (,) (;) (!)", ok: false },
      { text: "(,) (.) (,) (,) (?)", ok: true },
      { text: "(;) (;) (,) (,) (...)", ok: false },
      { text: "(,) (...) (,) (,) (?)", ok: false }
    ]
  },
  {
    text: "<p>(I) Şiirin gerisinde olduğu gibi ötesinde de bir hikâye (mythos) saklı... (II) Şiirimizi yaparken bir şekilde kendi hikâyemizi de yaparız; bu kendilik hikâyesi, gerçek ile gerçek olmayanın iç içe geçtiği küçük yalanlar ansiklopedisi gibidir. (III) İnsanın otobiyografyası, şiir yoluyla dile gelirken kişisel bir mitolojiye de dönüşür. (IV) Çağdaş şiiri, bir karşı mitoloji olarak okumanız gerekir. (V) Hayal ile gerçeği uygunsuz bir zeminde bir araya getiren şiirsel imgelem, yitip giden üstü örtülü bir hakikati aydınlatır.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde bir noktalama yanlışlığı yapılmıştır?</b></p>",
    diff: 2,
    expl: "I numaralı cümlede yargı tamamlandığı için cümle sonuna üç nokta değil, nokta (.) getirilmelidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) \"İnsan neden güler ve nelere güler?\" sorusu, insan doğasına dair merak uyandıran konulardan biridir. (II) Peki, insanın gülmesinin bir anlamı var mıdır? (III) Bu soruya rahatlıkla şunu söyleyebiliriz; Gülme, kendiliğinden bir duygu boşalımı şeklinde öznel ve psikolojik bir hüviyetle karşımıza çıktığı gibi toplumsal ve politik düzlemlerde de görünür hâldedir. (IV) Bu görünüş, mizah ve komedya ile sanatsal bir anlatıya dönüşmektedir; gülme, en nihayetinde bir sonuçtur. (V) Bazen estetik, bazen etik, bazen de ontolojik bakışla yöneldiğimiz \"gülme\"; Antik Çağ'dan günümüze değin tartışılmaktadır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde bir noktalama yanlışlığı yapılmıştır?</b></p>",
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
    text: "<p>Yeşilçam filmlerinin (I) melodram örgüsü, yıldızları ve şarkılarıyla Türk sinemasında kendine özel bir yer edinmiş olduğu düşünülmektedir. Filmlerde kullanılan şarkılar (II) söylendikleri dönemin ruhunu, tarihini (III) estetiğini taşıyan bir mektup olma özelliğine sahiptir. Yerli ile Batı (IV) klasik ile modernin iç içe geçmiş olduğu (V) bu şarkılar ortak hafızamızı ve kültürümüzü yansıtabilmektedir.</p><p><b>Bu parçadaki numaralanmış yerlerden hangisine herhangi bir noktalama işareti <u>getirilemez</u>?</b></p>",
    diff: 3,
    expl: "I ve II numaralı yerlere noktalı virgül (;), III ve IV numaralı yerlere virgül (,) getirilir. V numaralı yere ise noktalama işareti getirilemez; çünkü 'Yerli ile Batı, klasik ile modernin iç içe geçmiş olduğu' sıfat-fiil grubu ve 'bu' belirtme sıfatı 'şarkılar' ismini nitelemektedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Virgülle ilgili aşağıdaki örneklerden hangisi yay ayraç içindeki açıklamayla <u>uyuşmamaktadır</u>?</b></p>",
    diff: 3,
    expl: "B seçeneğinde virgül sıralı cümleleri ayırmak için değil, 'filmin' sözcüğünün kendisinden sonra gelen 'günümüz düşünce dünyası' tamlamasıyla bağlantısı olmadığını göstermek ve anlam karışıklığını önlemek için kullanılmıştır.",
    answers: [
      { text: "Herhangi bir neden sunmadan, etrafındaki herkese de anlaşılmaz bir tavır takınarak ortamdan uzaklaştı. (Metin içinde art arda gelen zarf-fiil eki almış kelimelerden sonra konur.)", ok: false },
      { text: "Yaşanmış olayları aktarmayı amaç edinen ve Kapadokya'da çekilen filmin, günümüz düşünce dünyasına hizmet etmediği de açıktır. (Sıralı cümleleri birbirinden ayırmak için konur.)", ok: true },
      { text: "Film içerisinde kullanılan müzikler; bazı sahnelerin, mekânların, kişilerin, olayların, nesnelerin, repliklerin akılda kalmasında yardımcı bir etkendir. (Birbiri ardınca sıralanan eş görevli kelime gruplarının arasına konur.)", ok: false },
      { text: "Bu, yönetmenin kendi bakışı ve mekânlar ile birlikte bir arada düşünülmesi gereken bir yapıdır. (Özne olarak kullanıldıklarında bu, şu, o zamirlerinden sonra konur.)", ok: false },
      { text: "Sinema, hayatımıza girdiği andan itibaren topluma yön veren çok önemli sanat dallarının başında gelmektedir. (Uzun cümlelerde yüklemden uzak düşmüş özneyi belirtmek için konur.)", ok: false }
    ]
  },
  {
    text: "<p>Orhan Veli'nin öldüğü gün, Çetin Altan şunu yazmış: \"Orhan Veli öldü. Ben bu satırları yazarken Orhan,(I) İstanbul morgunun teşrih masası üstünde yatıyor. 36 yaşında öldü Orhan. O; Türk şiirini kökünden sarsmış,(II) yüzlerce şairi tesiri altında bırakmış,(III) genç yaşta pek az kimseye nasip olan bir şöhret kazanmıştı. Orhan,(IV) başka bir millette doğsa,(V) milletlerarası bir şöhrete ulaşırdı.\"</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde virgülün kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı yerde virgül kullanımı yanlıştır; çünkü şart eki '-se/-sa'dan sonra virgül kullanılmaz. Ancak birden fazla şart eki almış sözcük art arda sıralandığında aralarına virgül getirilebilir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Attila İlhan'ın şiir kitapları arasında en ünlülerinden biri, \"Ben Sana Mecburum\"dur. (II) İlhan, en güzel aşk şiirlerini bu kitabında bir araya getirmiştir. (III) Attila İlhan şiirinin tek teması aşk değil elbette; bu kitapta beş bölümde topladığı şiirlerinde dönemin havasını, çalkantılarını, gerilimi, direnişi, imkânsız aşkları ve özgürlük özlemini bulacaksınız. (IV) Hem çağdaş şiirimizin başarılı örneklerini bulabileceğiniz, hem de aşk üzerine yazılmış iyi şiirler okuyabileceğiniz çok başarılı bir kitaptır. (V) Attila İlhan'ın bu kitapta topladığı şiirleri, şiirseverlerin kütüphanelerinde de ayrı bir yere sahiptir.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisinde virgülün kullanımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede 'hem ... hem' tekrarlı bağlacı kullanılmıştır. Tekrarlı bağlaçların arasına virgül konmaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ergoterapi; kişilerin aktivitelerini seçme, organize etme, tatmin edici bir şekilde yapma ve bağımsız bir şekilde yaşama işlevsel bir şekilde katılmalarına yardımcı olan destekleyici bir sağlık hizmetidir.</p><p><b>Aşağıdakilerin hangisinde noktalı virgül (;) bu cümledeki işleviyle <u>kullanılmamıştır</u>?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümlede noktalı virgül, ikiden fazla eş değer ögesi arasında virgül bulunan cümlede özneden sonra konmuştur. A, B, D ve E seçeneklerinde de bu işlevle kullanılmıştır. C seçeneğinde ise ögeleri arasında virgül bulunan sıralı cümleleri birbirinden ayırmak için konmuştur.",
    answers: [
      { text: "Tarihî incelemeler; medeni, bedevi hatta vahşi insanların hepsinde inanma ve tapınma gibi niteliklerin genel bir ihtiyaç olduğunu göstermektedir.", ok: false },
      { text: "Edebiyat eğitimi; ne tamamıyla metotsuz, pedagojik kurallardan uzak, keyfî ve rastgele bir öğretim faaliyeti ne büsbütün soyut birtakım bilgilerin ezberlettirilmesi ne de sadece ahlak, tarih, sosyoloji ve dil dersidir.", ok: false },
      { text: "Hışırtı çıkaran veya gökyüzünün altında var olan hiçbir şey yoktu; her şey, gecenin ve karanlığın içinde sessiz ve hareketsizdi.", ok: true },
      { text: "Nörobilimcilere göre bilinç; duyularımızdan, algılarımızdan ve eylemlerimizden oluşan bir kompozisyondur.", ok: false },
      { text: "Çevresindeki diğer tonların ve şekillerin yarattığı uzam, resmin içindeki ve üzerindeki ışık, nesnelerin düşme ve gerileme oranlarını belirleyen konum; her tonu farklılaştırır.", ok: false }
    ]
  },
  {
    text: "<p>I. Dünya'nın atmosferi, Ay'ın paslanmasına sebep oluyor olabilir.<br/>II. Rapor, 2040 yılı itibarıyla kömüre olan talebin %20'lerin altına ineceğini öngörüyor.<br/>III. Dünyanın en büyük onuncu kahve üreticisi Guatemala, üretiminin çoğunu ABD'ye ihraç etmektedir.<br/>IV. El yanmazken ben yanarım derdine, engel aramızı açtı n'eyleyim.<br/>V. Ali Bey'in bu konudaki tutumu, eleştirmenlerin de dikkatini fazlasıyla çekti.</p><p><b>Numaralanmış cümlelerde kesme işareti ile ilgili aşağıdaki verilen bilgilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I. cümlede özel adlara gelen durum eki (A), II. cümlede sayıya gelen ek (B), III. cümlede kısaltmaya gelen ek (C), IV. cümlede ölçü ve söyleyiş gereği düşen ses (E) kesme işaretiyle gösterilmiştir. Ancak '16 Haziran'da' gibi belirli bir tarih bildiren ay adına gelen ek (D) örneklenmemiştir.",
    answers: [
      { text: "Özel adlara getirilen durum eklerini ayırmak için kullanılır.", ok: false },
      { text: "Sayılara getirilen ekleri ayırmak için konur.", ok: false },
      { text: "Kısaltmalara getirilen ekleri ayırmak için konur.", ok: false },
      { text: "Belirli bir tarih bildiren ay adlarına gelen ekleri ayırmak için konur.", ok: true },
      { text: "Seslerin ölçü ve söyleyiş gereği düştüğünü göstermek için kullanılır.", ok: false }
    ]
  },
  {
    text: "<p>Suzy Lee ( ) ifade gücünü sadeliğinden alan bir sanatçı ( ) Büyük ( ) beyaz sayfalarda, eteklerine serpiştirilmiş turuncu rengi hariç kömürle resmedilmiş bir kız çocuğu ve onun aynadaki görüntüsü dışında hiçbir şey yok. Sanatçı, malzeme seçimini kömürden yana kullanmasını şöyle açıklıyor ( ) ( ) Aynı anda iki etkiyi dinamik hacim duygusu yaratarak elde edebiliyorum ( )</p><p><b>Bu parçadaki yay ayraçla gösterilen yerlere uygun noktalama işaretleri getirildiğinde aşağıdakilerden hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "Sırasıyla virgül (Suzy Lee,), nokta (sanatçı.), virgül (Büyük,), iki nokta (açıklıyor:) ve tırnak işaretleri (\"Aynı ... edebiliyorum\") getirilmelidir. Parçada üç nokta kullanılabilecek bir yer yoktur.",
    answers: [
      { text: "Virgül", ok: false },
      { text: "İki nokta", ok: false },
      { text: "Nokta", ok: false },
      { text: "Üç nokta", ok: true },
      { text: "Tırnak işareti", ok: false }
    ]
  }
];
