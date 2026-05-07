import { McQ } from "../../../../types";

// ============================================================================
// SOZCUKTE ANLAM ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SOZCUKTE_ANLAM_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Türkçede baş kelimesiyle kurulmuş deyimler önemli bir yere sahiptir. Örneğin başarı kazanmak ve gücü yetmek anlamında <u>baş etmek (I)</u>, ortaya çıkmak anlamında <u>baş göstermek (II)</u>, bir kimseyi kötü duruma düşürmek anlamında <u>baş yakmak (III)</u>, bir konuda ısrarcı olmak anlamında <u>başını dik tutmak (IV)</u>, bir kimseye çok saygı duymak anlamında <u>başta taşımak (V)</u> deyimleri kullanılır.</p><p><b>Yukarıda numaralanmış sözlerden hangisi parçadaki açıklamasıyla <u>uyuşmamaktadır?</u></b></p>",
    diff: 2,
    expl: "'Başını dik tutmak' deyimi, bir konuda ısrarcı olmak değil; onurunu korumak, yenilgiye rağmen sarsılmamak veya kimseden korkusu olmadığını göstermek anlamlarına gelir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Tiyatro tıpkı destanlar gibi toplumsal bir <u>özellik (nitelik) (I)</u> taşır. Çoğu zaman, <u>ele aldığı (incelediği) (II)</u> konular ve başvurulduğu tekniklerle bireyciliğin kurallarını <u>göz ardı eder (boşa çıkarır) (III)</u>. Sahnedeki doğal performanslar <u>sayesinde (aracılığıyla) (IV)</u> izleyicilere daha yakından dokunur. Beğenilerdeki benzerlikler üzerinden kişilerle değil kitlelerle <u>temas kurmayı (bağlantı sağlamayı) (V)</u> başarır.</p><p><b>Bu parçada numaralanmış sözlerle hangisinin anlamı parantez ( ) içinde verilen açıklamayla <u>uyuşmamaktadır?</u></b></p>",
    diff: 3,
    expl: "'Göz ardı etmek' ifadesi 'gereken önemi vermemek, dikkate almamak' demektir. 'Boşa çıkarmak' ise bir çabayı veya beklentiyi sonuçsuz bırakmak anlamına geldiği için birbirini karşılamaz.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>• Birini veya bir şeyi göstermemek<br>• Bir işi belirlenen zamanda yapamamak<br>• Bir daha ele geçmemek üzere yitirmek<br>• Ölçüyü, sınırı aşmak</p><p><b>Aşağıdaki cümlelerin hangisinde \"kaçırmak\" sözcüğü, verilen anlamlarından birini karşılayacak şekilde <u>kullanılmamıştır?</u></b></p>",
    diff: 2,
    expl: "D seçeneğinde müşterilerin 'kaçırılması', müşterilerin uzaklaşmasına sebep olmak anlamındadır ve yukarıdaki tanımların hiçbirine (gizlemek, vakit geçirmek, yitirmek, ölçüyü aşmak) uymaz.",
    answers: [
      { text: "Sabahları zamanında uyanamadığı için otobüsü kaçırmak alışkanlığı hâline geldi.", ok: false },
      { text: "Bu zamana kadar eline geçen fırsatları sırf bu gereksiz inadı yüzünden kaçırmayı başardı.", ok: false },
      { text: "Öğün atlamak ve akşam yemeğinde fazla kaçırmak metabolizmanın dengesini bozuyor.", ok: false },
      { text: "Gürültü yapanların müşterileri kaçırması mekânın bu eşsiz güzelliğine gölge düşürüyor.", ok: true },
      { text: "Çocuğu hasta olacak kaygısıyla herkesten kaçırıyor, evden dışarı da çıkarmıyor.", ok: false }
    ]
  },
  {
    text: "<p>• <b>açmak:</b> Yakışmak, güzel göstermek.<br>• <b>basamak:</b> Derece, aşama, kerte, evre.<br>• <b>çekmek:</b> Güç durumlara dayanmak, katlanmak.</p><p><b>Aşağıdaki cümlelerin hangisinde \"açmak, basamak, çekmek\" sözcükleri belirtilen anlamlarını karşılayacak şekilde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde 'basamaklar' aşama/derece anlamında, 'çeken' güç durumlara katlanan anlamında, 'açtığı' ise yakıştığı/güzel gösterdiği anlamında kullanılarak tüm şartları sağlar.",
    answers: [
      { text: "Başarının basamaklarını tırmanırken pek çok zorluk çeken öğrenci, kendini açtığına inandığı beyaz elbisesiyle diplomasını aldı.", ok: true },
      { text: "Çetin kış şartlarının daha çekilebilir olması için evin basamaklarına döşenen kilimler içimizi açıyordu.", ok: false },
      { text: "Kilitli tahta kapıyı açıp basamaklardan ağır ağır inen kedi, çıkardığı seslerle tüm dikkatleri üzerine çekti.", ok: false },
      { text: "Rüzgâr, bulutları eteklerinden çekerek havanın açmasını ve gökyüzünde basamak basamak gökkuşağının oluşmasını sağlamıştı.", ok: false },
      { text: "Okuldan dönen kardeşim, defterini açarak ödevini yapmaya başlamış ve sayı basamakları konusunda çektiği zorlukların üstesinden gelmişti.", ok: false }
    ]
  },
  {
    text: "<p>... Dünyanın yükünü sırtlanmış omuzlarını biraz kısarak eğreti oturduğu sandalyeden kalkıp pencereye doğru yöneldi.</p><p><b>Bu parçada \"kısmak\" sözcüğü aşağıdaki anlamlardan hangisine karşılık gelecek şekilde <u>kullanılmamıştır?</u></b></p>",
    diff: 3,
    expl: "Metinde 'göz kapaklarını kısmak' (biraz kapamak), 'sesini kısmak' (azaltmak), 'omuzlarını kısmak' (büzmek) ve 'lambayı kısmak' (eksiltmek/sınırlandırmak) anlamları vardır ancak 'yatıştırmak' anlamı yoktur.",
    answers: [
      { text: "Biraz kapamak", ok: false },
      { text: "Azaltmak, alçaltmak", ok: false },
      { text: "Büzmek, daraltmak", ok: false },
      { text: "Yatıştırmak", ok: true },
      { text: "Eksiltmek, sınırlandırmak", ok: false }
    ]
  },
  {
    text: "<p>... J. K. Rowling'in Harry Potter <u>kitaplarıyla (I)</u> <u>canlanan (II)</u> ve S. Meyer'in Alacakaranlık serisinin, kelimenin tam anlamıyla <u>parlattığı (III)</u> kahramanlarla devam eden süreç, özellikle S. Collins'in Açlık Oyunları'yla <u>taçlandırıldığı (IV)</u> yoldan ilerliyor. Bu sürece... <u>inanılmaz (V)</u>...</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisi mecaz anlamda <u>kullanılmamıştır?</u></b></p>",
    diff: 2,
    expl: "'Kitaplarıyla' sözcüğü gerçek anlamında, basılı eserleri ifade etmek için kullanılmıştır. Diğerleri (canlanmak, parlatmak, taçlandırmak, inanılmaz) mecaz anlam kazanmıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yönetmenin son filmi... Bu filmi izlerken <u>kavuşturduğumuz kolları çözmemiz</u> gerekiyor. Çünkü artık hazırlıklı değiliz...</p><p><b>Bu parçada altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "'Kolları çözmek' ifadesi burada edilgenliği bırakıp, önyargılardan sıyrılıp eseri anlamak için aktif bir zihinsel çaba harcamayı simgeler.",
    answers: [
      { text: "Örtük anlamları ortaya çıkarmak için ön hazırlık yapma", ok: false },
      { text: "Filmde verilmek isteneni anlamak için çaba harcama", ok: true },
      { text: "Hayal gücüyle kurguya katkıda bulunmaya çalışma", ok: false },
      { text: "Kişiden kişiye değişen mesajlar vermeye uğraşma", ok: false },
      { text: "İçeriği çözümleyip başkalarına iletme işini üstlenme", ok: false }
    ]
  },
  {
    text: "<p>... Bu nedenle tablo, resim alanında <u>renkler korosu</u> olarak adlandırılır.</p><p><b>Bu parçada altı çizili sözle tabloyla ilgili aşağıdakilerden hangisi vurgulanmaktadır?</b></p>",
    diff: 3,
    expl: "'Koro' çok sesliliğin uyumudur. 'Renkler korosu' ifadesi, tablodaki farklı renk ve öğelerin bir araya gelerek oluşturduğu büyük ahengi ve bütünlüğü temsil eder.",
    answers: [
      { text: "Aralarındaki uyuma bakılmaksızın farklı çağrışımların bir karışımını sunduğu", ok: false },
      { text: "Eserin içerdiği kompozisyondaki ahengin büyük bir yankı uyandırdığı", ok: true },
      { text: "Disiplinlerin kendine has özelliklerini soyutlayarak bir düzen içinde yansıttığı", ok: false },
      { text: "Bir sanat dalının diğerinde baskın etkiyle değişim meydana getirdiği", ok: false },
      { text: "Sanatın amacını farklı bakış açılarıyla özgün bir şekilde yeniden ürettiği", ok: false }
    ]
  },
  {
    text: "<p>... Bu, bereketli topraklardan hasat edilen zeytinleri sızma yağa dönüştürmek gibi bir şey aslında...</p><p><b>Bu parçada altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Zeytini yağa dönüştürmek, ham maddeyi işleyerek daha kıymetli ve rafine bir ürün elde etmektir. Bu da coğrafyanın sunduğu malzemeden nitelikli eserler üretmeyi karşılar.",
    answers: [
      { text: "Bir coğrafyayı anlamaya kaynaklık edecek eserleri titizlikle hazırlamak", ok: false },
      { text: "Bir edebî eseri uzun bir çalışma sürecinden geçirerek kaleme almak", ok: false },
      { text: "Eserlerin konu seçiminde yazıldığı ortamın koşullarını gözetmek", ok: false },
      { text: "Tarihî gerçekleri yazarın süzgecinden geçirerek okuyucuya aktarmak", ok: false },
      { text: "Coğrafyanın sunduğu zengin malzemeyle değerli eserler oluşturmak", ok: true }
    ]
  },
  {
    text: "<p>... Çağımızın birçok tenkitçisi de <u>yaşayan, değişen, binbir kılığa giren bir türü</u> herhangi bir tanıma hapsetmenin budalalık olduğunu düşünüyor.</p><p><b>Bu parçada altı çizili sözle, roman türü ile ilgili anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Romanın 'yaşayan, değişen ve binbir kılığa giren' bir tür olması, onun sürekli devinim halinde olan yapısı nedeniyle sabit bir tanıma sığdırılamayacağını gösterir.",
    answers: [
      { text: "Değişken yapısının, eleştirmenlerin aklını karıştırması", ok: false },
      { text: "Tanımının nesnel ölçütlere göre yapılması", ok: false },
      { text: "Dinamik ve dönüşen yapısının, tarifini anlamsız kılması", ok: true },
      { text: "Edebiyat ansiklopedisinin yaklaşımının yerinde bulunması", ok: false },
      { text: "Bilinen bir kavramın tarifini yapmanın imkânsız sayılması", ok: false }
    ]
  },
  {
    text: "<p>... Muhakkak çok değerli çalışmalar var ama Osmanlıların olgunluk dönemiyle kıyaslayacak olursak <u>çok yetersiz. Burada doğurganlığa hazır bir birikim problemi var.</u></p><p><b>Bu parçaya göre altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "'Doğurganlığa hazır bir birikim problemi', mevcut çalışmaların yeni sentezlere, kapsayıcı teorilere veya bütüncül bakış açılarına dönüşecek nicelik ve nitelikte olmadığını anlatır.",
    answers: [
      { text: "Ortaya konan eserlerde dönemin özelliklerinin tek bir boyutla öne çıkarılmasının niteliği düşürmesi", ok: false },
      { text: "Alana özgü kaliteli çalışmalar yapılmış olmasına rağmen bu çalışmaların istenilen düzeyde olmaması", ok: false },
      { text: "Yapılan çalışmalarla ulaşılan sonuçlar genellenebilir olmadığı için alana özgü kavramsal bilginin eksik olması", ok: false },
      { text: "Konu seçiminde ölçütler belirlenmediği için genel çerçeveyi görmekte başarılı olunamaması", ok: false },
      { text: "Alanın bütüncül bir bakış açısıyla değerlendirilmesini sağlayacak ölçüde çalışmanın yapılmaması", ok: true }
    ]
  },
  {
    text: "<p>... Bir yere gittiğinde mekânla bütünleşmek yerine oranın yüzlerce fotoğrafını çekip anında başkalarına sunmak... <u>Görülmeyi, yaşamaya tercih etmek</u> bunun bir göstergesi değil mi?</p><p><b>Bu parçada altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Metin, insanların anı bizzat deneyimlemek yerine, o anı başkalarına gösterip 'beğeni' alma çabasını, yani onaylanma kaygısını eleştirmektedir.",
    answers: [
      { text: "Görülmeyi, yaşamaya tercih etmek", ok: false },
      { text: "Beğenilme kaygısı içinde olmak", ok: true },
      { text: "Güncel olanı, anında kayda geçirmek", ok: false },
      { text: "Belli yaşantıları kalıcı kılmayı istemek", ok: false },
      { text: "Deneyimlerini başkalarına aktarmak", ok: false }
    ]
  },
  {
    text: "<p>... Einstein bu deneyimi... bir <u>kristalleştirici deneyim</u> onun uyuyan dehasını harekete geçirmiştir.</p><p><b>Bu parçada altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "'Kristalleştirici deneyim', dağınık olan potansiyelin netleştiği, bir amaca yöneldiği ve gelişimin başladığı dönüm noktasını ifade eder.",
    answers: [
      { text: "Bir bireyin yetenek ve potansiyellerinin gelişiminde dönüm noktası sayılabilecek yaşantılar", ok: true },
      { text: "Bireyin bakış açısını şekillendiren ve küçük yaşta edinilen ayırt edici farkındalıklar", ok: false },
      { text: "Doğuştan gelen ve sonrasında birey tarafından eğitimle geliştirilen birtakım yetiler", ok: false },
      { text: "Bireyin öz yeterliklerini ortaya çıkarmasını sağlayan kendi eğitim hayatındaki tecrübeler", ok: false },
      { text: "Farkında olunmadan gündelik yaşantıdaki tecrübelerle birlikte şekillenen bireysel özellikler", ok: false }
    ]
  },
  {
    text: "<p>... Teklifisizlerdir, resmiyetten nefret ederler. Bir dostun yakınlığına sığınırlar. Tanıdıklarınıza tanıştırarak hiç gitmediğiniz <u>yeni ufukları önünüze sererler.</u></p><p><b>Bu parçada altı çizili ifadeyle deneme türü ile ilgili anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "'Yeni ufuklar sermek', bir konuya alışılagelmişin dışında, farklı ve geniş bir perspektiften bakabilme imkânı sunmak demektir.",
    answers: [
      { text: "Kişisel görüşlerin yaygınlaşabilmesini kolaylaştırması", ok: false },
      { text: "Görüşlerin ispatlanabilirliğinin ikinci plana atılması", ok: false },
      { text: "Gerçeklerin farklı görülebilmesine imkân tanıması", ok: true },
      { text: "Düşünceleri özgürce aktarma serbestliğini sağlaması", ok: false },
      { text: "Gelişigüzel bir üslubun kullanılmasına öncelik tanıması", ok: false }
    ]
  },
  {
    text: "<p>... Edebiyatın <u>sağaltıcı</u>, kurtarıcı veya dönüştürücü yanını giderek daha az dile getiriyoruz.</p><p><b>Bu parçada altı çizili sözcüğü anlamca karşılayabilecek bir kullanım aşağıdakilerin hangisinde vardır?</b></p>",
    diff: 2,
    expl: "'Sağaltıcı' kelimesi 'iyileştirici, tedavi edici' anlamına gelir. B seçeneğindeki 'tedavi edici güç' ifadesi bu anlamı doğrudan karşılar.",
    answers: [
      { text: "Romanları vasıtasıyla okurunu haspolduğu dar çevre içerisinden çıkarmak için nasıl çabaladığı görülüyor.", ok: false },
      { text: "İnsanın zor durumda olduğunda sanata daha çok ihtiyaç duyması, bize sanatın tedavi edici bir gücü olduğunu ispatlıyor.", ok: true },
      { text: "Çevremizden gelen dayanaksız övgüler, bize iyi gelmek yerine aldığımız kararların gerçeklikten uzaklaşmasına neden oluyor.", ok: false },
      { text: "Tüm olanları aklında bir süzgeçten geçirip iyiyi kötüden ayırt edebilme yetisini kazandığını düşünmek istiyor.", ok: false },
      { text: "Kişisel gelişim kitaplarının son yıllarda bu kadar rağbet görmesi, insanların yeni arayışlara girdiğini gösteriyor.", ok: false }
    ]
  },
  {
    text: "<p>... Bütün uğraşıma, edebiyat tarihi duvarındaki <u>kırık bir tuğlanın eksik bir parçasını yerine koyma çabası</u> denilebilir; o kadar.</p><p><b>Bu parçada altı çizili sözle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "'Eksik bir parçayı yerine koymak', mevcut bir yapıya (literatüre) küçük de olsa yeni ve özgün bir katkıda bulunmak anlamına gelir.",
    answers: [
      { text: "Büyük şahsiyetler ve eserleri üzerine odaklanma", ok: false },
      { text: "Unutulmaya yüz tutmuş yazarları yeniden gündeme getirme", ok: false },
      { text: "Bir yazara daha olgun eserler vermesi için yol gösterme", ok: false },
      { text: "Toplumun sanat zevkinin yükselmesi için uğraşma", ok: false },
      { text: "Mevcut literatüre bir yazarla ilgili katkı sunma", ok: true }
    ]
  },
  {
    text: "<p>... Dergilerin imbiğinden süzerek biriktirdiği malzemesi ona, düşünce yazılarında bir <u>uzun mesafe koşucusu</u> özelliği kazandırdı.</p><p><b>Bu parçada altı çizili ifadeyle söz edilen yazarla ilgili anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "'Uzun mesafe koşucusu' ifadesi, bir işte sabırla, sebat ederek ve uzun süre emek vererek çalışmayı, yani yazılar üzerinde titizlikle ve uzun süreli uğraşmayı simgeler.",
    answers: [
      { text: "Düzyazı eserleriyle ön planda olmayı amaçlaması", ok: false },
      { text: "Düzyazı eserleriyle birçok yazarı geride bırakması", ok: false },
      { text: "Kaleme aldığı yazılarına uzun süre uğraş vermesi", ok: true },
      { text: "Sürekli bir değişim ve gelişim içinde yer alması", ok: false },
      { text: "Çağdaşlarıyla uzun zamandır yarış içinde olması", ok: false }
    ]
  },
  {
    text: "<p>... Terzi \"Evet, onu bilerek yaptım. Aslında ceketin güzelliğini o potluk gösteriyor. Hesaplanmış kusurda <u>aklın izi</u>, kusursuz olanınkinden daha derindir.\" diyerek...</p><p><b>Bu parçada altı çizili ifadeyle anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "'Aklın izi', hatanın kazaen değil, belirli bir estetik veya teknik amaçla, bilinçli ve zekice yapıldığını ifade eder.",
    answers: [
      { text: "Bütünün güzelliği, parçaların mükemmel şekilde bir araya getirilmesiyle oluşur.", ok: false },
      { text: "Görme alışkanlığını sekteye uğratan hatalar, güzelliğin algılanmasına hizmet eder.", ok: false },
      { text: "Ayrıntıları göz önüne seren kurgulanmış bir güzellik, doğal güzelliğe oranla daha etkileyicidir.", ok: false },
      { text: "Eksik parçanın bütüne yerleştirilmesi, yapıtın daha doğru değerlendirilmesini sağlar.", ok: false },
      { text: "Bilinçli yapılan hata, mükemmeli ortaya çıkarmaktan daha incelikli bir iştir.", ok: true }
    ]
  }
];