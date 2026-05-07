import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFTA YAPI (ÇIKMIŞ SORULAR ANALİZİ) - TEST 1
// ============================================================================
export const PARAGRAFTA_YAPI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>(I) Farklı nitelikleriyle sizi etkileyen bir yazarın çok beğendiğiniz hikâyeleri olduğu kadar sizin ruhunuza dokunmayan eserleri de olabilir... (V) Bazılarının olaylara, ilişkilere bakış açısı bazılarının da sözleri ve bilgeliği sizi tesiri altına alabilir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Parçanın genelinde bir yazarın eserlerinin okur üzerindeki etkilerinden söz edilirken, IV. cümlede hikâye anlatma yeteneği ve sohbet keyfi gibi yazarlık yeteneklerine geçilerek akış bozulmuştur.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Zambia'daki Kalambo Şelaleleri'nin yakınlarında yapılan kazılarda en az 476 bin yıl öncesine ait ahşap yapılar keşfedildi... (IV) Ahşap malzeme, zaman içinde çürüyerek yok olan bir yapıda olduğundan bu kadar eski tarihli alanlarda nadiren bulunmaktadır.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Metin keşfedilen ahşap yapıların önemi ve korunma durumu üzerinedir. II. cümlede bölgedeki toplulukların alet üretme alışkanlıklarına değinilmesi genel akışı bozmaktadır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bir müzik aleti mi çalmak istiyorsunuz, temel ilkelerini uzun uzadıya düşünmeye gerek duymayana kadar sistemli uygulama yapmak zorundasınız... (IV) Ancak harcadığınız saatler oranında ödüllendirilmeyeceğinizi hatırlamalı, yalnızca tekrarın değil iyi tekrarın gerekli olduğunu bilmelisiniz.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "III. cümlede harcanan enerjinin fiziksel yapı ile uyumuna değinilmiştir ancak parçanın bütünü sistemli tekrarın önemi üzerinedir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) \"Komşunu sev.\" ilkesinin insanlık tarihi kadar eski olduğu düşünülür... (IV) Komşumuzu severken gerekçe sevdiğimiz şey, sevilmeye layık olan benliğimizdir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "İlk üç cümle ve son cümle toplumsal yaşam ve bu ilkenin önemi üzerinedir. IV. cümlede ise sevginin öznesine (benliğe) odaklanılarak konu saptırılmıştır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ebbinghaus 1895'te yaptığı araştırmayla yeni bir sorulama alanı açmış ve psikolojinin bilimsel bir disiplin olarak yerleşmesine yardımcı olmuştur... (V) Bulgularına göre anımsamadaki en hızlı kayıp ilk saatte yaşanmakta...</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 3,
    expl: "Metinde Ebbinghaus'un bellek üzerine yaptığı spesifik deney ve sonuçları anlatılırken, I. cümlede psikoloji bilimine genel katkısından bahsedilmesi akışı bozmaktadır.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ankara'nın şirin ilçelerinden Beypazarı, misafirlerini ahşap evleri... tarihî çarşısıyla karşılıyor... (IV) Suluhan, meşhur Alaaddin Sokak... bu yolculuktaki ana duraklarınız oluyor.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Beypazarı'nın turistik ve tarihi mekanları tanıtılırken, II. cümlede insanların büyükşehir stresinden uzaklaşma isteği gibi genel bir yoruma yer verilmesi akışı bozmuştur.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Endonezya'ya bağlı Mentawai, dört adadan oluşan bir bölgedir... (IV) Yarı göçebe Mentawaililer, zengin kültürel unsurlarıyla dikkat çekiyor ve bunları yaşatmak için mücadele ediyor.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede Mentawai adalarının fiziki ve coğrafi özellikleri anlatılırken, IV. cümleden itibaren burada yaşayan halkın kültürel özelliklerine geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) İç Anadolu bozkırının göz alabildiğine uzanan coğrafyasında bir höyük... (IV) Alacahöyük, her ne kadar bölge insanı tarafından bilinse de bilim dünyasına 1907'de tanıtılır.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede höyüğün konumu ve adlandırılması işlenirken, IV. cümleden itibaren arkeolojik kazı süreci ve bilimsel tanınma aşaması anlatılmaya başlanmıştır.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Masallarda genellikle mekânlar kesin bir şekilde betimlenmez... (IV) Düş gücü belirli göstergelerle işler; içinde yaşanılan dünyadan alınmış olan bu göstergeler masallarda dinleyiciye dönüştürülerek aktarılır.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede masalların mekân ve atmosfer özelliklerinden bahsedilirken, IV. cümleden itibaren masallarda düş gücünün nasıl işlediği konusuna geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Modern toplumun dönüşümü, XVII. yüzyılda başlamış ve zirve noktasına ulaşması için iki yüzyıl geçmesi gerekmiştir... (V) Modernite kavramının tarihsel anlamı, aklın anlamının tarihsel gelişimine paralel olarak gelişmiştir.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 3,
    expl: "Metnin ilk üç cümlesi modernleşmenin tarihsel süreci ve olayları (Rönesans, Sanayi Devrimi) üzerinedir. IV. cümleden itibaren ise modernitenin kavramsal ve düşünsel (akılcı) temellerine geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Ankara'da bulunan Gökyay Satranç Müzesi, bin metrekarelik bir alanda kurulmuştur... (IV) Madagaskar'dan Şili'ye, Fransa'dan Kazakistan'a kadar geniş bir coğrafyadan temin edilen 723 satranç takımının birçoğunda yerel kültür özelliklerini görmek mümkündür.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "Müzenin fiziki yapısı ve konumu anlatıldıktan sonra, IV. cümleden itibaren koleksiyonda yer alan takımların özellikleri ve çeşitliliği anlatılmaya başlanmıştır.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) İdeoloji, içerdiği bütün çelişik anlamlara rağmen geniş bir alanda etkinliğini sürdürüyor... (IV) İdeolojinin kendisini dönüştürerek yeniden üretebilme niteliği, onu ve geniş nüfuz alanını ilgiyle izlemeyi zorunlu kılıyor.</p><p><b>Bu parça iki paragrafa ayrılmak istenirse ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 3,
    expl: "İdeolojinin genel tanımı ve yayılma alanından sonra, IV. cümleden itibaren ideolojinin dönüşüm yeteneği ve toplumsal gerçeklik değeri üzerine yeni bir başlık açılmıştır.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan; diğer canlılardan farklılaştığı dönem olan Paleolitik Çağ'da ilk aletleri yapmış...<br>II. Avlanabilmek için ok uçları... resimler çizmiştir.<br>III. Aynı zamanda “Uzak atalarımız neden duvarlara resim çizme ihtiyacı hissetti...?” sorularını akla getiriyor.<br>IV. Ulaşılabilen en eskisi 32 bin yıl öncesine giden bu resimler... önemli bilgiler içeriyor.<br>V. Binlerce yıl mağara duvarlarının karanlıklarında kalan resimler... gün yüzüne çıkıyor.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "II. cümlede resimlerden bahsedilmeye başlanmış, ancak IV. cümlede 'bu resimler' diyerek devam edilmiştir. V. cümle resimlerin keşfini, III. cümle ise bu keşfin yarattığı soruları içerir. Akış için IV ve V yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile III", ok: false },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: true }
    ]
  },
  {
    text: "<p>I. Pek çok ülkede bir restorana gittiğinizde soğuk su servis edilirken Asya kıtasının bazı bölgelerinde önünüze bir sürahi ılık su getirilir.<br>II. Soğuk içilen suyun yiyeceklerin içindeki yağları katılaştırarak sindirimi zorlaştırdığı düşünüldüğünden bu gayet mantıklı geliyor.<br>III. Dolayısıyla yiyecek ve içeceklerin vücut sıcaklığına yakın bir sıcaklık olan 37°C'de servis edilmesini uygun görüyorlar.<br>IV. Bu yörelerdeki insanlar yiyecek ve içeceklerin ne buz gibi soğuk ne de çok sıcak tüketilmesi gerektiğine inanıyor.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "I. cümleden sonra II. cümlenin gelmesi akışı bozar. Önce yöre halkının inancı (IV), sonra bu inancın sonucu olan sıcaklık tercihi (III) ve en son bunun mantıklı gerekçesi (II) gelmelidir. Bu yüzden II ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "II ile III", ok: false }, { text: "II ile IV", ok: true },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Havaalanındaki her bir öge insanı yolculuğa çağırır ancak bunlar arasında en can alıcı olanı terminalin tavanından sarkıtılan uçuş saatlerini gösteren ekranlardır...<br>V. Ekranda gördüğümüz bu sıkıcı harfler varış noktalarını gösteren şehir isimlerine dönüştüğünde...</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "Ekranların etkisi ve ruh haliyle ilişkisi anlatılırken, uçak kalkışının verdiği zevk (III) en sona veya yolculuğun başlangıcına çekilmelidir. Akışa göre III ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "II ile III", ok: false }, { text: "III ile IV", ok: true },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Günümüzde enerji gereksinimimizin büyük bir kısmı petrol ve kömür gibi fosil yakıtlardan karşılanıyor...<br>IV. Atmosferdeki sera gazı miktarının artması, ortalama sıcaklığın yükselmesine ve iklim değişikliklerine yol açıyor.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "Fosil yakıt kullanımı ve tükenme riski anlatıldıktan sonra, sera gazı etkisi ve sonuçları sıralanmalıdır. III ve V cümleleri yer değiştirerek mantıksal silsile tamamlanır.",
    answers: [
      { text: "I ile II", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile III", ok: false },
      { text: "III ile V", ok: true }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Geleneksel tarımda verimi artırmak... amacıyla yaygın olarak tarım ilaçları kullanılıyor...<br>V. Bu uygulamaların birbirini olumsuz etkilediğini belirten uzmanlar, organik ve geleneksel tarım yöntemlerinin kullanıldığı alanların ayrı tutulması gerektiğini vurguluyor.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "Metin geleneksel ve biyolojik mücadeleyi karşılaştırıyor. III. cümledeki 'tarım ilaçları yerine' ifadesi II'den sonra gelmelidir. Bu yüzden II ve III yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "II ile III", ok: true }, { text: "II ile IV", ok: false },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Daha önce defalarca okumuş olduğunuz ve artık neredeyse ezbere bildiğiniz... bir romanı ortasından bir yerden açıp yeniden okumaya başlayın...<br>IV. Her adımınızda daha da derinlere indiğinizi... giderek düpedüz kaybolduğunuzu görürsünüz.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "Önce okuma eylemi önerilmiş (I), sonra romanın içindeki sırlar ve sayfaları geri çevirme (III) anlatılmıştır. II. cümledeki 'deneyiminizin kılavuzluğu' sonucu ifade eder. II ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ile III", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile IV", ok: true },
      { text: "II ile V", ok: false }, { text: "III ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Yaratıcı yaşam enerjisi kapandığında bu durum, hızlıca depresyona ve diğer rahatsızlıklara yol açabilir...<br>V. Bu değişimlerin hızı, günümüzde depresyonda olan insan sayısında büyük bir artışa neden oluyor.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan dördüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III (Genel giriş) - V (Günümüzdeki durum) - IV (Neden) - I (Sonuç/Hastalık) - II (Rehabilitasyon) şeklinde olmalıdır. Bu durumda baştan dördüncü I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>V. Geçtiğimiz ay 57 yaşındaki Alan Eustace, kayış gıcırtısı dışında hiçbir ses çıkarmadan New Mexico Çölü'nden gökyüzüne doğru hareket etti...<br>II. İlkin gevşek bir dörtgen hâlinde göğe doğru yükseldi...</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan üçüncü olur?</b></p>",
    diff: 2,
    expl: "Sıralama: V (Başlangıç) - I (Hazırlık/Kıyafet) - II (Yükselişin ilk hali) - IV (Yükseliş süreci) - III (Hedefe varış) şeklindedir. Baştan üçüncü II'dir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>V. İklim değişikliği ve giderek artan nüfus nedeniyle dünya genelinde milyonlarca insan, içme suyu kıtlığı yaşıyor...<br>I. Ancak kullanılan arındırma sistemlerinin yüksek maliyetli olması...</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan üçüncü olur?</b></p>",
    diff: 2,
    expl: "Sıralama: V (Sorun) - III (Çözüm/Arındırma) - I (Çözümün dezavantajı) - IV (Yan ürün sorunu) - II (Çevre tehdidi) şeklindedir. Baştan üçüncü I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Cümlelerin altını renkli kalemlerle çizenler olduğu gibi sayfalara yazdıkları notlarla ayrı bir dünya yaratanlar da vardır...<br>IV. Kişisel alışkanlıklar, bireylerin okuma biçimlerini etkiler.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi baştan dördüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: IV (Genel giriş) - V (Karşıt alışkanlık) - I (Diğer bir alışkanlık) - III (Elektronik araçlar/Değişim) - II (Bireysel tercihler) şeklindedir. Baştan dördüncü III'tür.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir hükümdar değer verdiği çay kâsesini kazara kırar fakat kâseden vazgeçmek istemez... Hikâyesi böyle başlayan kintsugi sanatı, ---- bir anlayışa kaynaklık eder.</p><p><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Kintsugi sanatı kırılan parçaları altınla birleştirerek kusuru gizlemek yerine onu vurgulayıp güzelleştirdiği için E seçeneği en uygundur.",
    answers: [
      { text: "olumsuz duygular karşısında dirençli olmanın önemini ifade eden", ok: false },
      { text: "değerini kaybetmeden önce güzel olanı korumanın gerekliliğini önceleyen", ok: false },
      { text: "özgünlüğün gelenekten bütünüyle koparak sağlanabileceğini vurgulayan", ok: false },
      { text: "bir nesnenin gerçek değerinin yalnızca ehil kişilerce korunabileceğini savunan", ok: false },
      { text: "kusur ve eksikliğin de güzelliğin bir parçası sayılabileceği fikrini benimseyen", ok: true }
    ]
  },
  {
    text: "<p>Muhabir: (I) ---- ?<br>Tarihçi: Tarihi, betimleyici olmaktan çıkarıp daha analitik yapmak zorundayız...<br>Muhabir: (II) ---- ?<br>Tarihçi: Tarihçi herhangi bir karşılaştırmaya girişmeden hiç bilinmeyen bir konuyu ele alıp ortaya koyan ilk kişi olabilir...</p><p><b>Bu diyalogda boş bırakılan yerlere aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "İlk cevap istatistiksel ve sayısal verilerin önemine (istatistiksel yöntem), ikinci cevap ise karşılaştırmalı analizin (karşılaştırmalı analiz) gerekliliğine yöneliktir.",
    answers: [
      { text: "A) İstatistiksel verilerin güvenilirliği - Neyin tarihsel bilgi olabileceği", ok: false },
      { text: "E) İstatistiksel yöntem kullanımının yeri - Karşılaştırmalı analiz olmazsa olmaz mıdır", ok: true }
    ]
  },
  {
    text: "<p>Popüler kültür eleştirisi hayli zor bir iş... Böylesine içli dışlı olduğumuz popüler kültürü analiz konusu hâline getirdiğimizde bu ilişkimizi yok saymak gerçekçi olmuyor. Yani ----.</p><p><b>Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Yazar, popüler kültürün içinde olduğumuz için ona karşı nesnel/tarafsız bir mesafe koymanın imkansızlığından bahsettiği için B seçeneği akışı tamamlar.",
    answers: [
      { text: "bu eleştirinin mümkün olmadığını anlayıp popüler kültürü olduğu gibi kabul edemiyoruz", ok: false },
      { text: "popüler kültürle aramıza tarafsızlığımızı koruyabileceğimiz bir eleştiri mesafesi koyamıyoruz", ok: true },
      { text: "analiz için seçtiğimiz konuyu hakkıyla gözlemlememizi sağlayacak veriye sahip olamıyoruz", ok: false },
      { text: "sahip olduğumuz tarafsız konumun ele aldığımız olguyu kısıtlamasını engelleyemiyoruz", ok: false },
      { text: "popüler kültür eleştirisinin popüler kültür üretmekten daha zor olduğunu anlayamıyoruz", ok: false }
    ]
  },
  {
    text: "<p>Güçlü bir duygunun etkisindeyken hissettiğimiz şeyi aktarmak için fazla düşünmez, aklımıza ilk gelen sözleri söyleriz... Ancak ezbere tepkilerimiz çoğu zaman karşımızdakine gerçekte ne hissettiğimizi anlatmakta yetersiz kalır. Verdiğimiz tepkiler bizi ----.</p><p><b>Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Ezbere ve yüzeysel tepkilerin gerçek duyguları yansıtmada yetersiz kalıp bizi bağlamdan kopardığı vurgulanmaktadır.",
    answers: [
      { text: "etrafımıza yabancılaştıran buzlu bir camın ardına hapseder", ok: false },
      { text: "kendi sınırlarımız dışına çıkmadığımızdan güvende hissettirir", ok: false },
      { text: "duygularımızı açık bir şekilde göstermek için cesaretlendirir", ok: false },
      { text: "bağlamdan kopararak anlık düşüncelerimizden uzaklaştırır", ok: true },
      { text: "sahnenin içine çekerek farkındalık geliştirmemizi sağlar", ok: false }
    ]
  },
  {
    text: "<p>İnsanlığın avcılık ve toplayıcılıkla hayatını sürdürmesi Neolitik Dönem'de geride kalmıştır... Yerleşik tarım; karmaşık şehir hayatının, devlet örgütünün ve iş bölümünün ortaya çıkmasını sağlamıştır. ----.</p><p><b>Bu parçada boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Tarımın şehir hayatı ve devlet gibi kurumları doğurması, bugünkü modern medeniyetin temeli olduğunu gösterir.",
    answers: [
      { text: "Bu ekonomik ve siyasi mekanizma, bugünkü medeniyetin de temelidir", ok: true },
      { text: "Güncel tarım politikalarının kökeni, Neolitik Dönem'e dayanmaktadır", ok: false },
      { text: "Mezopotamya, tarım arazileri bakımından çok verimlidir", ok: false },
      { text: "İnsanların tabiat karşısındaki zaferi, kentleşme ile şekillenmiştir", ok: false },
      { text: "Avcılık ve toplayıcılık, uygarlığa giden yolun önünü kesmiştir", ok: false }
    ]
  },
  {
    text: "<p>(I) Romalıların harita yapım etkinlikleri... askeri amaçlarda ve inşaat mühendisliği uygulamalarında yoğunlaşıyordu... (V) Ancak günümüze ulaşan tabletlerden ve el yazmalarından bu haritaların neye benzeyebileceğine ilişkin bir fikir edinilebilir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinden sonra “Roma döneminde bu sistemle yapılmış hiçbir harita örneği günümüze ulaşmamıştır.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "Eklenecek cümle 'örneklerin ulaşmadığını' söylüyor, V. cümle ise 'ancak' diyerek dolaylı yoldan fikir edinilebileceğini söylüyor. Bu yüzden IV'ten sonra gelmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>----. Tarım faaliyetlerini engelleyen bu durum çölleşmedir ve bunun en önemli nedenlerinden biri uzun süren kuraklık dönemleridir...</p><p><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Metin tarım alanlarının yok olması ve çölleşme üzerine olduğu için, her yıl tarım arazilerinin kaybedildiğini belirten E seçeneği giriş için uygundur.",
    answers: [
      { text: "İklim değişikliğinin hızla artan yıkıcı etkileri pek çok ülkenin farklı politikalar geliştirmesini zorunlu kılmıştır", ok: false },
      { text: "Dünyanın tüm kara alanları tarımsal faaliyetlerin etkin biçimde sürdürülmesi için uygun imkânlara sahip değildir", ok: false },
      { text: "Güncel tarım politikaları elde edilen ürünlerin verimini artırmada beklenen etkiyi göstermekte yetersiz kalmıştır", ok: false },
      { text: "Tarım faaliyetlerini daha işlevsel hâle getirmek için üretim süreçlerini başından sonuna titizlikle yönetmek gerekir", ok: false },
      { text: "Her yıl milyonlarca kilometre tarım alanı ve kırsal alan tarım yapılamayacak hâle gelmektedir", ok: true }
    ]
  },
  {
    text: "<p>Hep söyledikleri gibi her yaşın ve çağın kendine has bir özelliği olsa da kimileri hayatlarının sonlarında “Yaşadım.” diyemeyecek kadar sıkıntılı olurlar... ----. “O kötü bildiğin tecrübeler olmasaydı yaşamın tadına daha çok mu varacaktın?”</p><p><b>Bu parçada boş bırakılan yere aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Yazar pişman olmadığını ve içinden gelen bir sesin ona tecrübelerin önemini hatırlattığını söylüyor. Bu yüzden geçmişteki zorluklar için karamsarlığa kapıldığı anları anlatan B seçeneği akışa uygundur.",
    answers: [
      { text: "Kimi zaman da “yaşam şöyle, yaşam böyle” diye başkalarına akıl vererek insanların üzüntüleriyle mutlu olabileceklerini söylemişimdir", ok: false },
      { text: "Belki zaman zaman, yaşadığım zorluklar bu kadar ağır olmasaydı da yaşamın tadını daha iyi çıkarabilseydim diye karamsarlığa kapılmışımdır", ok: true },
      { text: "Sadece gerçekleşmemiş gençlik düşlerimin belli bundan sora da gerçekleşmeyeceğini kabullendiğim zamanlarda üzülmüşümdür", ok: false },
      { text: "Tabii ki beni üzen durumlar olmuştur hayatımda, ben deneyimlerimden her zaman ders alarak yoluma devam etmeyi seçmek istemişimdir", ok: false },
      { text: "Hayatı boyunca geçmiş günlere özlem duyan ve içinde bulundukları anı kaçırarak eskilere dönmek isteyen insanlarla birçok kez karşılaşmışımdır", ok: false }
    ]
  }
];