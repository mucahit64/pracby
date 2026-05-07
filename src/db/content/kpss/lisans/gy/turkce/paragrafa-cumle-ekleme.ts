import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFA CÜMLE EKLEME - TEST 1
// ============================================================================
export const PARAGRAFA_CUMLE_EKLEME_TEST_1: McQ[] = [
  {
    text: "<p>(I) Bilindiği üzere görme engelliler, diğer duyularında gören insanlara göre daha beceriklidirler. (II) Araştırmacılar bu işgalin hızını merak ederler ve laboratuvar ortamında bir deney yaparlar. (III) Beynin fonksiyonel MR ile ölçülen aktiviteleri, bu deneylerle görme engelli ve görme engelli olmayan insanlar arasındaki farkı defalarca ortaya koymuştur. (IV) Araştırmalarda, gözlerini bağladıkları deneklerin beynin göz retinasından gelen bilgiyi alıp yorumlayan görsel korteks kısımlarının işitsel ve dokunsal alanlarca işgalinin ne kadar sürede başladığını ölçmeye çalışırlar. (V) Sonuç hızlı ve şaşırtıcıdır: Görsel korteks 40 ile 60 dakika arasında işgal edilir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden sonra düşüncenin akışına uygun olarak “Çünkü beynin görmeyle ilgili alanları bir süre sonra diğer duyu alanları tarafından işgal edilir.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "Soru kökündeki cümle, beynin görmeyle ilgili alanlarının diğer duyular tarafından işgal edilme nedenini açıklamaktadır. I. cümlede görme engellilerin diğer duyulardaki becerisi belirtilmiş, eklenen cümle bu durumun sebebini açıkladığı için I. cümleden sonra gelmelidir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Çok iyi bir eleştirmen olmasam da şiirlerini dikkatle okudum. (II) Ama açıklıkla yapmaktan çekinmediğim bir yönüm var. (III) Eğer söylediklerimde yanılmıyorsam ve karşımdaki kavrayışı derin bir kişi ise bunun yararı oluyor. (IV) İşte bu çerçeve içerisinde sana, “Şairliğin özel hayatının bir parçası gibi kalsın.” diyorum. (V) Bunu bendeki örneklere bakarak söylüyorum. (VI) Devam etmekte yarar görürsen nasıl bir gelişme gösterirsin bilemem.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisine düşüncenin akışına uygun olarak “O da okuduğum şiirlerin ne kadar şiir olduğunu anlayabildiğim kadarı ile çekinmeden söylemek.” cümlesi getirilebilir?</b></p>",
    diff: 2,
    expl: "II. cümlede yazarın 'çekinmediği bir yönü' olduğundan bahsediliyor. Eklenecek cümle bu çekinilmeyen yönün ne olduğunu (dürüstlük) açıkladığı için III numaralı yere (yani II'den hemen sonraya) getirilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Tarihî eserler, insanlık tarihindeki gelişmeleri günümüze taşıyan en somut belgelerdir. (II) Geçmişi günümüze taşıyan bu belgeler daha çok mimari, heykel, resim ve el sanatları alanındaki çalışmalardır. (III) Çağdaş bir ülke olmanın koşullarından biri de bu eserleri korumak, saklamak ve insanların yararlanabileceği şekilde sergilemektir. (IV) Sanat eserlerinin korunması bu eserlerin bakımı, onarımı, kaçakçılığının önlenmesi ve insanların bilinçlendirilmesiyle olur. (V) Bu ancak eğitimle gerçekleşir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden önce düşüncenin akışına uygun olarak “İnsanlığın binlerce yıllık gelenek ve inançları sanat eserlerine yansımıştır.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "Eklenecek cümle sanat eserlerinin içeriğine (gelenek ve inançlar) değinmektedir. III. cümlede ise bu eserlerin 'korunması' gerektiği belirtiliyor. Anlam akışına göre eserlerin değerinden bahseden cümle, koruma fikrinden (III. cümle) önce gelmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Sevgi hiç beklemediğiniz zamanda, sevgiyi aramadığınızda gelir. (II) O hâlde sevgi arama çabaları size doğru insanı getirir mi? (III) Emin olun, bu arayışlar sadece özlem ve mutsuzluk yaratır sizde. (IV) Hem sevgiyi dışarıda aramak niye? (V) O yüzden önce kendinizle ilgilenin, “unuttuğunuz kendinize” bir sevgi bakımı yapın. (VI) Geldiği zaman da sevgiye, sevgiyi beslemeye hazır olun. (VII) Sevgiyi hayatınıza çekecek kadar gelişmemişseniz ve ona gerçekten hazır değilseniz yine yanlış insanlar karşınıza çıkmaya devam edecektir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden önce düşüncenin akışına uygun olarak “Sevgi hiçbir zaman dışımızda olmadı ki o, her daim içimizdedir.” cümlesi getirilebilir?</b></p>",
    diff: 2,
    expl: "IV. cümlede sevginin neden dışarıda arandığı soruluyor. Eklenecek cümle bu soruya cevap niteliğindedir ('içimizdedir'). Bu yüzden V. cümleden hemen önce gelmesi akışı sağlar.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: false },
      { text: "V", ok: true }, { text: "VII", ok: false }
    ]
  },
  {
    text: "<p>(I) Sanatı bir yansıtma olarak yorumlayanlara göre edebiyat, dünyaya tutulmuş bir aynadır; toplumu, gerçekliği yansıtır. (II) Dolayısıyla da insanı, yaşamı açıklar. (III) Yansıtma kuramını benimseyen kimi düşünürlerse bunu yeterli bulmaz, edebiyatın eğitici bir nitelik taşıması gerektiğini öne sürerler. (IV) Bu görüşlere bağlı olarak bir edebiyat yapıtının değerlendirilmesinde iki ölçüt geçerlidir. (V) Bunlar, gerçekliğin yansıtılışındaki başarı ve okur ya da toplum üzerindeki etkinin niteliğidir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisine düşüncenin akışına uygun olarak “Onlara göre edebiyat yapıtı gerçekliği yansıtmakla yetinmemeli, toplumsal ya da siyasal açıdan insanları eğitmeli, bilinçlendirmelidir.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "III. cümlede edebiyatın eğitici niteliği olması gerektiğini savunan düşünürlerden bahsedilmektedir. Eklenecek cümle bu düşünürlerin görüşünü detaylandırdığı için IV numaralı yere getirilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Dünya edebiyatında seçkin bir yere sahip olan Tolstoy için sanatın özü “güzellik” değil, dinî bilince dayalı “ahlaki değerler” oluşturmaktadır. (II) Bu tutumun temelinde tamamen dinî ve ahlaki kaygıların yattığı anlaşılmaktadır. (III) O dinî ve ahlaki değerleri içeren bir sanatı, iyi sanat; onun dışında kalan bütün sanat türlerini ve eserlerini ise kötü sanat olarak nitelendirir. (IV) Bu bağlamda Tolstoy’un sanat ile din ve ahlak arasında nasıl bir ilişki kurduğunu ve bu ilişkinin mahiyetini açığa çıkarmak önemlidir. (V) Daha da önemlisi, bu ilişkinin felsefi bir analizini, eleştirisini ve değerlendirmesini yapmaktır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden sonra düşüncenin akışına uygun olarak “Bu yüzden o, güzelliğe ve güzelliğin yol açtığı estetik hazza karşı olumsuz bir tutum takınmıştır.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "I. cümlede Tolstoy'un güzellik yerine ahlaki değerleri önemsediği belirtiliyor. Eklenecek cümle 'bu yüzden' diye başlayarak güzelliğe karşı olumsuz tutumunu gerekçelendirdiği için I. cümleden sonra gelmelidir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Tasarımın dünyadaki büyük zorlukların ve çözüm önerilerinin çekirdeği olmasından ötürü, tasarımcıların asli sosyal sorumlulukları bulunmaktadır. (II) Tasarımın, yaşam biçimini etkileyen muazzam bir gücü vardır. (III) Bu gücü tasarımcı, müşterisinin ticari ürününü pazarlamak için kullanırken aynı zamanda dünyadaki çevresel, sosyokültürel problemleri çözerek farkındalık kazandırmak için de kullanabilmektedir. (IV) Tasarımcının neleri yapabileceği ya da yapamayacağı, müşteri, proje, takım arkadaşlarının inançları doğrultusunda belirlemek kişisel bir yaklaşımdır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisine düşüncenin akışına uygun olarak “Sosyal sorumluluk tasarımında önemli bir konu da etiktir.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "IV. cümlede kişisel bir seçim olan örneklerden bahsediliyor (silah/sigara amblemi). Eklenecek cümle etiğin önemine değinerek bu örneklere giriş yaptığı için IV numaralı yere getirilmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Çocuklar, zararlı alışkanlıklarından kurtulmaları için en önemli alternatif olabilecek spora yönlendirilmelidir. (II) Son zamanlarda spora yönelen çocukların nasıl kazanıldığını, kötü alışkanlıkları bıraktıklarını basından öğreniyoruz. (III) Ebeveynler öncelikle çocukların yaşama hangi bakış açısıyla baktıklarını, dünyayı nasıl anlamlandırdıklarını anlamaya çalışmalıdır. (IV) Bilim adamlarının “duygusal rehberlik” diye tanımladıkları sevgi, empati ve dinlemenin yanında; problem çözme becerisini de kazandırabileceğimiz bir iletişimi çocuklarımızla kurmamız gerekmektedir. (V) Çocuğu kucağa almak, elinden tutmak, başını okşamak, konuşurken diz çökerek onun boyu hizasına inmek gibi davranışları bu tür yakınlıklar olarak sayabiliriz.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden önce düşüncenin akışına uygun olarak “Empatinin olabilmesi için de fiziksel yakınlık ve iyi bir diyalog şarttır.” cümlesi getirilebilir?</b></p>",
    diff: 2,
    expl: "V. cümlede empatiyi sağlayan 'fiziksel yakınlık' örnekleri (kucağa almak, elini tutmak) verilmektedir. Eklenecek cümle bu fiziksel yakınlığın şart olduğunu belirttiği için V. cümleden hemen önce gelmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) İnsanın tarihsel serüveninden günümüze değin doğa, çeşitli değişimlere girerek insan üzerinde etkisini göstermiştir. (II) Doğanın tüm yıkıcı unsurlarına karşı insan, beceri ve düşünme potansiyelini geliştirdikçe doğayı tanımaya başlamış ve kendine faydalı olabilecek tüm kaynakları elde etme yeteneğini geliştirmiştir. (III) Fakat tarihsel olarak insanoğlunun doğa ile olan ilişkisi, özellikle Aydınlanma ve 19. yüzyıl sonrasında gelen endüstriyel gelişmeler ile birlikte kopma noktasına gelmiştir. (IV) Bu olumsuz etkilerin sonucunda “Ekoloji bilimi”, hem büyük bir önem hem de küresel kapitalizmin sosyal dengeleri etkilemesinden dolayı politik bir boyut kazanmıştır. (V) 1960 sonrası iklim değişiklikleri başta olmak üzere çevre sorunlarının artmaya başlamasıyla birlikte ortaya çıkan ekolojik bilinç, insanın yalnızca doğaya dönmesi ile kalmamış bu durum sanat ve sanatçı üzerinde de etkisini göstermiştir. (VI) Doğanın tahribatına karşı sanatçılar doğayı yaşanır kılmak ve sanat aracılığıyla yeniden insanın doğayı keşfetmesini sağlamak için ekoloji temalı işler üretmeye başlamışlardır. (VII) Ekoloji temalı bu işler “Ekolojik Sanat” olarak da nitelendirilen sanatın temel dinamiklerini oluşturmuştur.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden önce düşüncenin akışına uygun olarak “Sanayileşme ve teknolojinin yarattığı aşırı tüketimle birlikte, zehirli salınımlar toprak, hava ve su kirliliğine, iklim değişikliğine, çölleşme ile beraber göç hareketlerine ve biyolojik çeşitliliğin azalması gibi değişikliklere neden olmuştur.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "Eklenecek cümlede sanayileşmenin yarattığı olumsuz sonuçlar sıralanmıştır. IV. cümlede ise 'bu olumsuz etkilerin sonucunda ekoloji biliminin önem kazandığı' belirtildiğine göre, eklenen cümle IV'ten önce gelmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Okuma alışkanlığı insanlarda çocukluk çağında başlamaktadır fakat teknolojik bağımlılık -televizyon seyretme ve bilgisayar kullanımı- okuma alışkanlığı kazanmayı ve bu alışkanlığı sürdürmeyi olumsuz yönde etkilemektedir. (II) Bu konuda günümüze kadar yapılan araştırmaların çoğunda toplumun önemli bir kısmının dinlenme vakitlerinin önemli bir kısmını televizyon başında geçirdiği tespit edilmiştir. (III) O hâlde iş, önce ailelere sonra okullara düşmektedir; ailede kitap okuyan bireyler olmalı, öğretmenler de öğrencilerin kitap okumalarını motive etmek için okul çapında çabalarının bir parçası olarak uzun vadeli okuryazarlığı teşvik etmede rol almalıdır. (IV) Öğrenciler, evlerinde kitap okuyan anne-baba görmediği ve zevkli bir aktivite olarak okumayı sık sık deneyimlemedikleri sürece hayat boyu okuyucu olmayacaktır. (V) Bu durumda öğretmenler, okumak için sınıf ortamı sağlayarak uzun süreli okuma alışkanlığını teşvik etmelidir. (VI) Öğretmenler, kendilerini öğrencilerde okuma alışkanlığı oluşturmaya adarken kendinde de bu alışkanlığı oluşturması ve çevresine model olması gerekir.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden sonra düşüncenin akışına uygun olarak “İşte bu noktada öğretmenlerin öncelikli olarak okuma eylemini tüm boyutları ve özellikleriyle kavraması, okuma ilgisi ve alışkanlığı kazandırma konusunda önce kendini geliştirmesi gerekmektedir.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "VI. cümlede öğretmenlerin okuma alışkanlığında 'model olması' gerekliliği vurgulanmıştır. Eklenecek cümle bu model olmanın nasıl olacağını (kendini geliştirme) açıkladığı için VI. cümleden sonra gelmelidir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: false },
      { text: "V", ok: false }, { text: "VI", ok: true }
    ]
  },
  {
    text: "<p>(I) Bugün içinde bulunduğumuz toplum ve kültürün doğuşuna yol açan “modernleşme” sadece değer, norm ve anlamların genelleşmesi değil; aynı zamanda ahlaki bağlayıcısızlığın ve yükümsüzlüğün ön plana çıktığı bir süreçtir. (II) Bir bilim insanı, ilişkilerin değerini ve anlamını yitirdiği bu durumu, soyut toplum olarak adlandırır. (III) Soyut toplumun bugün refah devleti olarak adlandırdığımız bir yapı tarafından kuşatıldığını ve bu refah devleti anlayışında ise vurgunun giderek üretimden tüketime kaydığını ifade eder. (IV) Kısacası, modern zamanlar adını verdiğimiz bu süreçte belirli bir kalıp ve yaşam stili söz konusu olup buradan kayıtsızlık durumu ortaya çıkmaktadır. (V) Bu şekilde soyutlaşan, kayıtsız bir toplumda da sadakat ve sorumluluk gibi hasletler ikinci veya üçüncü plana düşmektedir. (VI) Modern devlet ve kültürde, dolayısıyla refah devleti ve tüketimcilik kültüründe, sadakat ve sorumluluk duygularının yanı sıra, şeref ve namus hissiyatları da kaybolmaktadır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden önce düşüncenin akışına uygun olarak “Artık kişi, sadece refah devletinin imkânlarını aşırı derecede ve düşüncesizce tüketmekle kalmayıp, giderek insani ilişkileri (evlilikler, arkadaşlıklar vb.) fikir ve teorileri de (dinî ve politik ideolojiler) tüketmektedir.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "III. cümlede üretimden tüketime geçişten bahsediliyor. Eklenecek cümlede kişinin sadece maddi imkanları değil insani ilişkileri de tükettiği (tüketimin boyutu) anlatılmaktadır. Bu yüzden IV. cümleden önce gelerek konuyu pekiştirmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Psikologlar yalanları üçe ayırırlar: kaba yalanlar, abartmalar ve gizli yalanlar. (II) Kaba yalanlar, kaynağın doğru olduğuna inandığı bilginin tamamen aksini alıcıya iletmesi durumudur ve sınavda kopya çektiği hâlde öğretmenine çekmediğini söyleyen öğrencinin yalanı bu kapsamdadır. (III) Kaba yalan söyleyenler, söyledikleri yalanların ayrıntılarını, daha sonra karşılarına çıkabileceği için hatırlamak zorundadırlar. (IV) Abartmalar, gerçeklerin olduğundan fazla ya da hafif gösterildiği yalanlardır; insanların, yapılmayan bir görevden ya da işledikleri bir suçtan dolayı duydukları pişmanlığı çok fazla abartmaları bu kapsamda değerlendirilir. (V) Cinayet işleyen şahsın, mahkemede öldürdüğüne çok pişman olduğunu ileri sürmesi ya da gereksiz ve yüklü miktarlarda alışveriş yapan kadının eşine bu alışverişi anlatırken azımsaması abartmalar arasında sayılabilir. (VI) Gizli yalanlar, gerçeğin kibar bir şekilde saklanması ya da anlaşılmayacak bir biçimde ifade edilmesidir. (VII) Misafirlikte yapılan mantı yemeğini beğenmeyen şahsın bunu söylememek için hamur işleri yemediğini söylemesi gizli bir yalandır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinden sonra düşüncenin akışına uygun olarak “Aynı biçimde hırsızlık yaptığı hâlde şüphelinin suçunu inkâr etmesi veya sabah uyanamadığı için işe geç kalan çalışanın, patronuna yolda kaza olduğunu ve bunun için geç kaldığını ifade etmesi yine bu yalan türüne örnektir.” cümlesi getirilebilir?</b></p>",
    diff: 2,
    expl: "Eklenecek cümle 'kaba yalanlar' türüne örnekler içermektedir. II. cümlede kaba yalanın tanımı yapılıp öğrenci örneği verilmiş, eklenen cümle de bu örneklere devam ettiği için II. cümleden hemen sonra gelmelidir.",
    answers: [
      { text: "II", ok: true }, { text: "III", ok: false }, { text: "IV", ok: false },
      { text: "VI", ok: false }, { text: "VII", ok: false }
    ]
  }
];