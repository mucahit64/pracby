import { McQ } from "../../../../types";

// ============================================================================
// ZAMİR (ADIL) - TEST 1
// ============================================================================
export const TUR_ZAMIR_TEST_1: McQ[] = [
  {
    text: "<p>Yelda Öğretmen, derse girince öğrencilerine \"Zamirler bilindiği gibi isimlerin yerine kullanılan kelimelerdir. Dilde zamire duyulan ihtiyaç dilin anlatımda kısaltmaya olan eğiliminden kaynaklanır. Zaten bilinen bir ismi tekrarlamak, bir tür sözü uzatmak, muhatabı sıkan önemli sebeplerden biridir.\" dedikten sonra tahtaya şu cümleyi yazmıştır:</p><p>Kedi; istediği zaman sokulan, göçünü hep gizleyebilen, saldırıya ne zaman geçebileceği çok az kestirilebilen bir yaratık.</p><p>Yelda Öğretmen, öğrencilerinden bu cümleyi yukarıdaki metni örneklendirecek şekilde zamir kullanarak devam etmelerini istemiştir.</p><p><b>Bu öğrencilerin hangisi, istenen soruya doğru yanıt vermiştir?</b></p>",
    diff: 2,
    expl: "Yelda Öğretmen öncülde zamirlerin bizi tekrardan kurtardığından bahsetmiştir. Büşra'nın cümlesindeki 'onlara' ve 'onlar' zamirleri, ismi (kedi) tekrar etmemek için kullanılmış ve doğrudan kedilerin yerini tutmuştur.",
    answers: [
      { text: "<b>Merve:</b> Çocukluğumdan beri beni büyülemiştir her zaman kediler.", ok: false },
      { text: "<b>Nurgül:</b> Kediyle ilişki güzeldir, bizlerin tembelleşmesine izin vermezler.", ok: false },
      { text: "<b>Şeyma:</b> Kedi sevmek, karşısındaki kişinin umursamaz bağımsızlığını baştan kabul etmek demektir bence.", ok: false },
      { text: "<b>Elif:</b> Kedi, canı istediği zaman sokulur size; canı istemiyorsa çağrılarınızı karşılıksız bırakır.", ok: false },
      { text: "<b>Büşra:</b> Keşke onlara benzeyebilseydik, yaşadığımız anda kalabilseydik onlar gibi.", ok: true }
    ]
  },
  {
    text: "<p>(I) Pasajdakilerin hiçbirini sevmiyor, onların da kendisini sevmediklerini biliyordu. (II) Gene de her akşam beraberce otururlar orada bulunmayanları çekiştirirlerdi. (III) Çekiştirilen kimse pasajın kapısında görünürse eğer çekiştirme hemen onun da katılmasıyla bir başkasına yöneltilirdi. (IV) Oradakilerin hepsi iyi, hepsi değerli, hepsi dosttu. (V) Değersiz, kötü olanlar işlerine dalıp da o akşam pasaja gelmeyenlerdi.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde kelime hâlinde zamir <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "V. cümlede kelime hâlinde zamir yoktur. Cümledeki 'olanlar' ve 'gelmeyenlerdi' sözcükleri adlaşmış sıfat-fiildir. I'de (hiçbirini, onların, kendisini), II'de (orada), III'te (kimse, onun, başkasına), IV'te (oradakilerin, hepsi) zamir vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisindeki \"ne\" sözcüğü, \"İnsanın eti yenmez, derisi giyilmez; tatlı dilinden başka <u>nesi</u> var?\" atasözündeki altı çizili sözcükle aynı görevde <u>değildir</u>?</b></p>",
    diff: 3,
    expl: "Soru kökündeki 'nesi' sözcüğü zamirdir. C seçeneğindeki 'Dağ ne kadar yüce olsa...' cümlesindeki 'ne kadar' ifadesi miktar bildiren bir sıfat tamlamasını derecelendirdiği için soru zarfıdır. Diğerlerindeki 'ne' sözcükleri zamirdir.",
    answers: [
      { text: "<u>Ne</u> oldum dememeli, <u>ne</u> olacağım demeli.", ok: false },
      { text: "Çanağa <u>ne</u> doğrarsan kaşığında o çıkar.", ok: false },
      { text: "Dağ <u>ne</u> kadar yüce olsa yol üstünden aşar.", ok: true },
      { text: "Bir adama kırk gün <u>ne</u> dersen o olur.", ok: false },
      { text: "<u>Ne</u> verirsen elinle o gider seninle.", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsan, kendisini bilmek yoluyla ancak dünyayı anlar çünkü kendi beninde insanlığı bulan, kendini tanımak yoluyla dünyayı ve insanlığı bilir, anlar. (II) O hâlde dünyayı anlamam için her şeyden önce onu, \"kendi dünyam\" yapmalıyım. (III) Bu da dünyada olup biten her şeye karşı duyarlı olmamı gerektirir. (IV) Böylece ben insanlığı kendi benimde tutarak kendi dünyamın sınırını insanlığın sınırı yaparım. (V) Ben eğer kendi dünyamı bencilliğimle sınırlarsam geri kalan insanlığı benim dünyamın dışına atar, ona \"ötekiler\" der, onu nesne olarak görür, araç olarak kullanırım.</p><p><b>Bu parçada numaralanmış cümlelerin hangilerinde kişi yerini tutan bir sözcüğe yer <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "III. cümlede geçen 'bu' ve 'şey' sözcükleri sırasıyla işaret ve belgisiz zamirdir. Bu cümlede kişi yerini tutan bir zamir (şahıs zamiri veya dönüşlülük zamiri) yoktur. I, II, IV ve V'te 'kendi' ve 'ben' kişi/dönüşlülük zamirleri vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Kim bu cennet vatanın uğruna olmaz ki feda?<br>II. Sana olmaz dökülen kanlarımız sonra helal!<br>III. Olsun artık dökülen kanlarımın hepsi helal.<br>IV. Ben ezelden beridir hür yaşadım, hür yaşarım.<br>V. Dalgalan sen de şafaklar gibi ey şanlı hilal!</p><p><b>İstiklal Marşı'ndan alınan bu dizelerin hangilerinde diğerlerinden farklı türde bir zamire yer verilmiştir?</b></p>",
    diff: 2,
    expl: "I. dizede 'kim' soru zamiri, III. dizede 'hepsi' belgisiz zamirdir. Fakat diğer dizelerde (II. sana, IV. ben, V. sen) kişi (şahıs) zamirlerine yer verilmiştir. Dolayısıyla I ve III farklıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Gelen gazetelerde, boş yere <u>I. orada burada</u> bir neşe yankısı arıyorum, <u>II. ona buna</u> soruyorum ne olup bittiğini ama hiçbir yerde yanıt bulamıyorum. Belki Anadolu'nun uçsuz bucaksız bir kasabasında, Ankara'da, <u>III. şuraya buraya</u> asılmış, <u>IV. tek tük</u> kandiller, bu zaferin tek şenlik aydınlıklarıdır. Hayalimde, <u>V. oradan buradan</u> alıp yaktığım bu ışıklar, bana engin ve karanlık bir gurbet diyarı olan Türkiye'de donmuş ve kör olmuş gönüllerin tek hayat mihrakları gibi geliyor.</p><p><b>Bu parçada numaralanmış ikilemelerden hangisi diğerlerinden farklı görevdedir?</b></p>",
    diff: 3,
    expl: "IV numaralı 'tek tük' ikilemesi, 'kandiller' ismini nitelediği için sıfat görevindedir. Cümledeki diğer ikilemeler ise zamirlerle (ora bura, o bu vb.) kurulmuş olup işaret zamiri görevindedirler.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ben <u>I. kendi</u> hesabıma sanatım olmadan yaşayamam. Ama bu, sanatı her şeyin üstüne koymuş da değilim. Tersine, <u>II. onsuz</u> yapamayışım, <u>III. onun</u> beni herkesle bir etmesi ve olduğumdan başka türlü olmaksızın herkesle bir düzeyde yaşatmasıdır. Sanat, <u>IV. benim</u> için tek başına tadı çıkarılan bir şey değildir. Sanat <u>V. bence</u>, en büyük sayıda insanı, ortak acılar ve sevinçlerle coşturacak görüntüleri, biçimleri bulmaktır.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangileri tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "II numaralı 'onsuz' sözcüğünün kökü zamirdir fakat '-suz' yapım ekini almış, türemiştir ve cümlede fiilimsiyi nitelediği için zarf görevindedir. V numaralı 'bence' sözcüğünün kökü de zamirdir ama '-ce' eşitlik eki almış ve cümleye görecelik anlamı kattığı için zarf olmuştur. 'Kendi' dönüşlülük zamiri, 'onun' işaret zamiri, 'benim' ise kişi zamiridir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız V", ok: false },
      { text: "II ve V", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Öğretmenlerimiz, bizim öncülerimiz, örneklerimizdir. (II) Onları dinlerken, yakınında bulunurken sahip oldukları bazı meziyetleri yahut özellikleri alır benimseriz veya onlara özeniriz. (III) Zamanla bunlar bizim hayatımız için belirleyici olmaya, bizde bir tavır, davranış yahut hayat tarzı olarak birleşip bütünleşmeye başlar. (IV) Hangi özelliğimizi kimden aldığımızı çok kere bilmeyiz çünkü \"Bizi biz yapan da zaten hep o başkalarıdır.\" (V) Bir yazar arkadaşımın şu cümlesi beni çok etkilemiştir: \"Öğretmenlik iki ruh arasında karşılıksız kurulan ilişkilerin mesleğidir.\"</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde belirsizlik zamiri kullanılmıştır?</b></p>",
    diff: 2,
    expl: "IV. cümledeki 'başkalarıdır' sözcüğü miktar ve nitelik bilgisi vermeden birilerinin yerini tuttuğu için belgisiz (belirsizlik) zamiridir. Diğerlerindeki zamirler kişi, işaret veya soru zamirleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir sanatçıdan, yazardan beklenen en önce onun kendi tarzını yaratmasıdır, yani kendine ait bir görme, duyma biçimi geliştirmesidir; kalıcı olmak büyük ölçüde buna bağlıdır. Sıradan üretimler, taklitler bir insanı ne yaratıcı yapar ne de kalıcı. Sanatçıların üretimi daha çok bilgiye dayanır ve dayanmalıdır da. İlham denen şey aslında bilgilenmek, derinleşmek, dolmak ve taşmak demektir.</p><p><b>Bu cümlede aşağıdaki zamir türlerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'onun' (kişi zamiri), 'kendi / kendine' (dönüşlülük zamiri), 'şey' (belgisiz zamir) ve 'buna' (işaret zamiri) kullanılmıştır. İlgi zamiri olan '-ki' parçada yoktur.",
    answers: [
      { text: "Kişi zamiri", ok: false },
      { text: "İşaret zamiri", ok: false },
      { text: "Belgisiz zamir", ok: false },
      { text: "Dönüşlülük zamiri", ok: false },
      { text: "İlgi zamiri", ok: true }
    ]
  },
  {
    text: "<p>Sen nereye, ben oraya, adım adım<br>İnsan sevdikçe iyileşiyor artık anladım.</p><p><b>Turgut Uyar'ın bu sözlerindeki zamir çeşitleri, aşağıdaki Cemal Süreya şiirlerinin hangisinde vardır?</b></p>",
    diff: 3,
    expl: "Turgut Uyar'ın şiirinde 'sen/ben' (kişi zamiri), 'nereye' (soru zamiri) ve 'oraya' (işaret zamiri) vardır. B seçeneğindeki 'Ben nerede bir çift göz gördümse / Tuttum onu...' dizelerinde 'ben' (kişi zamiri), 'nerede' (soru zamiri) ve 'onu' (işaret zamiri) olarak üç tür de mevcuttur.",
    answers: [
      { text: "Bir bir denemişim bütün kelimeleri, / Yeni sözler buldum seni görmeyeli.", ok: false },
      { text: "Ben nerede bir çift göz gördümse / Tuttum onu, güzelce sana tamamladım.", ok: true },
      { text: "Öyle büyümüş ki içimizdeki yalnızlık, / Sevilmeyi beklerken beklemeyi sevmişiz.", ok: false },
      { text: "Kapanan evin kapısı değil, / Senin kapın olsun açılan.", ok: false },
      { text: "Kuşlar toplanmışlar göçüyorlar, / Keşke yalnız bunun için sevseydim seni.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ismin yerini tutan bir sözcük <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "İsmin yerini tutan sözcük zamirdir. B seçeneğindeki 'çoğu' sözcüğü 'bitki' isminden hemen önce gelip bitkiyi genelleyici bir şekilde belirttiği için belgisiz sıfattır, zamir değildir. Diğer şıklarda biri, öbürü, topu, diğeri gibi zamirler mevcuttur.",
    answers: [
      { text: "Dağa çıkan iki patika yoldan biri taşlı, öbürü de çok tehlikeliydi.", ok: false },
      { text: "Çoğu bitki, alıştığı yeri değiştirildiğinde insan gibi küsüyor.", ok: true },
      { text: "Sarf edilen gayretlerin topu, kıymet bilmeyen insanlara olmamalıydı.", ok: false },
      { text: "Karşı parkta oturan gençlerden biri çok güzel şarkı söylüyordu.", ok: false },
      { text: "Kızlarının diğeri de Ankara dışında bir üniversiteyi kazanmış.", ok: false }
    ]
  },
  {
    text: "<p>Ey Türk gençliği!<br>Birinci vazifen; Türk <u>I. istiklalini</u>, Türk <u>II. cumhuriyetini</u>, ilelebet muhafaza ve müdafaa etmektir. Mevcudiyetinin ve istikbalinin yegâne temeli budur. Bu temel, senin en kıymetli <u>III. hazinendir</u>. İstikbalde dahi seni bu hazineden mahrum etmek isteyecek dâhili ve harici bedhahların olacaktır. Bir gün, istiklal ve cumhuriyeti müdafaa <u>IV. mecburiyetine</u> düşersen, vazifeye atılmak için içinde bulunacağın vaziyetin imkân ve <u>V. şeraitini</u> düşünmeyeceksin.</p><p>Üçüncü şahıs iyelik eki almış bir sözcüğe hâl ekleri ilave edildiğinde, aralarında bir n sesi ortaya çıkar. Bu ses de yardımcı ses olarak kabul edilir.</p><p><b>Mustafa Kemal Atatürk'ün Gençliğe Hitabesi'nde numaralanmış altı çizili sözcüklerden hangisi bu durumu <u>örneklendirmemektedir</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'hazinendir' sözcüğü 'senin hazine-n-dir' şeklinde 2. tekil kişi iyelik eki almıştır. Üçüncü şahıs iyelik eki (-i) ve sonrasında gelen belirtme hâl eki yoktur. Diğer kelimelerde (istiklal-i-n-i, cumhuriyet-i-n-i vb.) 3. şahıs iyelik eki, 'n' yardımcı sesi ve hâl eki mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sen <u>I. o</u> (işaret zamiri) karanfile eğilimlisin,<br>Bir ağaç işliyor tıkır tıkır <u>II. yanımızda</u> (iyelik zamiri)<br>Alıp <u>III. sana</u> (şahıs zamiri) veriyorum işte<br>Sen de bir <u>IV. başkasına</u> (belgisiz zamir) veriyorsun<br>Sana değiniyorum, sana ısınıyorum<br><u>V. Bu</u> (işaret zamiri) o değil</p><p><b>Bu dizelerdeki sözcüklerden hangisi, ayraç içindeki açıklamayla <u>uyuşmamaktadır</u>?</b></p>",
    diff: 2,
    expl: "I numaralı 'o' sözcüğü, bir ismin yerini tutmadığı için zamir değildir. Bu sözcük 'karanfil' isminden hemen önce gelerek onu işaret ettiği için 'işaret sıfatı' görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerden hangisinde ismin yerini tutan bir sözcük kullanılmıştır?</b></p>",
    diff: 2,
    expl: "İsmin yerini tutan sözcük zamirdir. C seçeneğinde geçen 'şey' sözcüğü miktar ve nitelik bilgisi geçmeden belirsiz bir ismin yerini tuttuğu için belgisiz zamirdir.",
    answers: [
      { text: "Geri dönüşüm, çöp olarak gördüğümüz çoğu malzemenin yeniden işlenmesidir.", ok: false },
      { text: "2000'li yıllarda elektronik cihaz atıklarında büyük bir artış meydana gelmiştir.", ok: false },
      { text: "Atıkların geri dönüştürülmesi her şeyden önce ham madde ihtiyacını azaltıyor.", ok: true },
      { text: "Ağaçlar, su kaynakları ve mineraller gibi doğal kaynaklara her zaman ihtiyacımız olacak.", ok: false },
      { text: "Bir otomobilin hemen hemen bütün parçaları geri dönüştürülebilmektedir.", ok: false }
    ]
  },
  {
    text: "<p>Onları yenilikçi yaklaşımları, sıra dışı reklamları ve etkileyici sözleriyle tanıyoruz. Tüketicilerin gözünde hepsi birer ikna sanatçısı. Elbette pazarlamacılardan bahsediyoruz. Çoğumuz onların dünyasını reklamlarda göründüğü kadarı ile biliriz. Peki, işin mutfağında neler yapıldığını hiç merak ettiniz mi?</p><p><b>Bu parçada aşağıdakilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçadaki 'onları' reklamcıların yerini tuttuğu için kişi zamiri, 'hepsi' ve 'çoğumuz' belgisiz zamir, 'neler' soru zamiri, göz-ü-nde gibi sözcüklerdeki ekler iyelik zamiridir (iyelik ekleri iyelik zamiri kabul edilir). İşaret yoluyla bir ismin yerini tutan 'işaret zamiri'ne parçada yer verilmemiştir.",
    answers: [
      { text: "Kişi zamiri", ok: false },
      { text: "Belirsizlik zamiri", ok: false },
      { text: "Soru zamiri", ok: false },
      { text: "İyelik zamiri", ok: false },
      { text: "İşaret zamiri", ok: true }
    ]
  },
  {
    text: "<p>(I) İklim değişikliği, kirlenme, doğal kaynakların çoğunun kullanımı biyolojik çeşitliliğin azalmasına neden oluyor. (II) Tarım konusunda yaşadığımız, ileride bizi daha da kötü etkileyecek bir sorun da mahsul çeşitliliğindeki daralma. (III) Geriye gitmeyelim, sadece 20. yüzyılda dünya mahsul çeşitliliğinin neredeyse hepsini kaybettik. (IV) Bu, yakın gelecekte pek çok gıdadan yoksun kalmamız sonucunu doğuracak. (V) Nerede o eski sebze-meyveler, sorusunu hep birlikte soracağız ama iş işten geçmiş olacak.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "V numaralı cümlede yalnızca 'nerede' soru zamiri vardır. Farklı türde zamirlere (örneğin hem belgisiz hem işaret vb.) aynı cümle içerisinde yer verilmemiştir. 'o' sözcüğü ise ismin önüne geldiği için işaret sıfatıdır.",
    answers: [
      { text: "I. cümlede, belgisiz zamir bulunmaktadır.", ok: false },
      { text: "II. cümlede, kişi adılına yer verilmiştir.", ok: false },
      { text: "III. cümlede, tamlanan durumundaki sözcük belgisiz adıldır.", ok: false },
      { text: "IV. cümlede, bir cümlenin yerini tutan zamir kullanılmıştır.", ok: false },
      { text: "V. cümlede, farklı türde zamirlere yer verilmiştir.", ok: true }
    ]
  }
];