import { McQ } from "../../../../types";

// ============================================================================
// PARAGRAFTA YAPI (ÇIKMIŞ SORULAR ANALİZİ) - TEST 1
// ============================================================================
export const PARAGRAFTA_YAPI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>(I) Farklı nitelikleriyle sizi etkileyen bir yazarın çok beğendiğiniz hikâyeleri olduğu kadar sizin ruhunuza dokunmayan eserleri de olabilir. (II) Edebiyat evreninde kimi yazarlar dildeki kıvraklığıyla sivrilir, kimileri de şairane buluşlarıyla. (III) Sizi yüreğinizden yakalamayı başararak hatıranızda kalan yazarlar bulunduğu gibi ince zekâsından etkilendikleriniz de olabilir. (IV) Biri hikâye anlatmakta çok iyidir, hep anlatsın istersiniz; diğerinin sohbeti keyiflidir, sizi sabaha kadar tutsa ses etmezsiniz. (V) Bazılarının olaylara, ilişkilere bakış açısı bazılarının da sözleri ve bilgeliği sizi tesiri altına alabilir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Parçada farklı yazarların farklı nitelikleriyle (dil kıvraklığı, şairane buluşlar, zekâ, anlatım, bakış açısı) okuru nasıl etkilediği anlatılmaktadır. I. cümlede ise tek bir yazarın okurun ruhuna dokunmayan eserlerinin de olabileceğinden söz edilerek akış bozulmuştur.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Zambia'daki Kalambo Şelaleleri'nin yakınlarında yapılan kazılarda en az 476 bin yıl öncesine ait ahşap yapılar keşfedildi. (II) Keşfin yapıldığı tarihe kadar bölgedeki toplulukların kazıcı aletler ve mızraklar üretmede ahşap kullanımını geliştirdiği biliniyordu. (III) Söz konusu keşif; dünyanın herhangi bir yerinde, maksatlı bir şekilde bir araya getirilmiş ahşap malzemelere ilişkin en eski kanıt oldu. (IV) Ahşap malzeme, zaman içinde çürüyerek yok olan bir yapıda olduğundan bu kadar eski tarihli alanlarda nadiren bulunmaktadır. (V) Ancak Kalambo Şelaleleri'nde sürekli yüksek kalan su seviyeleri sayesinde ahşap kalıntılar, günümüze kadar ulaşmayı başarmıştır.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Metin keşfedilen ahşap yapıların önemi ve korunma durumu üzerinedir. II. cümlede bölgedeki toplulukların alet üretme alışkanlıklarına değinilmesi genel akışı bozmaktadır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bir müzik aleti mi çalmak istiyorsunuz, temel ilkelerini uzun uzadıya düşünmeye gerek duymayana kadar sistemli uygulama yapmak zorundasınız. (II) Disiplinli bir şekilde defalarca tekrarlayabildiğiniz temel uygulamalar bir süre sonra otomatikleşip kas hafızanıza yerleşir. (III) Bu iş için harcadığınız enerjinin fiziksel yapı ve kişisel kabiliyetlerinizle uyumlu olup olmadığı da önemlidir. (IV) Ancak harcadığınız saatler oranında ödüllendirilmeyeceğinizi hatırlamalı, yalnızca tekrarın değil iyi tekrarın gerekli olduğunu bilmelisiniz. (V) Çünkü ancak yüksek nitelikli, amaca uygun ve düzenli yapılandırılmış tekrar, gelişmeyi sağlar.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "III. cümlede harcanan enerjinin fiziksel yapı ile uyumuna değinilmiştir ancak parçanın bütünü sistemli tekrarın önemi üzerinedir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) \"Komşunu sev.\" ilkesinin insanlık tarihi kadar eski olduğu düşünülür. (II) İnsanın ortak yaşamının vazgeçilmezleri arasında bu ilke yer alır. (III) Eğer bu göz ardı edilir veya reddedilirse toplum yapısı temelinden sarsılır. (IV) Komşumuzu severken gerekçe sevdiğimiz şey, sevilmeye layık olan benliğimizdir. (V) Bu öğreti, modern çağın ünlü düşünürleri tarafından da toplumsal yaşamın temel kurallarından biri olarak tanımlanmıştır.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "İlk üç cümle ve son cümle toplumsal yaşam ve bu ilkenin önemi üzerinedir. IV. cümlede ise sevginin öznesine (benliğe) odaklanılarak konu saptırılmıştır.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ebbinghaus 1895'te yaptığı araştırmayla yeni bir sorulama alanı açmış ve psikolojinin bilimsel bir disiplin olarak yerleşmesine yardımcı olmuştur. (II) Öğrenme ve hafıza üzerine yaptığı bir deneyde Ebbinghaus, çağrışım unsurunu ortadan kaldırmak için ünsüz-ünlü-ünsüz biçiminde (ZUC ve NAG gibi) 2300 tane 3 harfli anlamsız hece oluşturmuştur. (III) Listeler hâlinde grupladığı hecelerin her birine saniyenin küçük bir bölümü boyunca bakmış, listeye ikinci kez göz atmadan 15 saniye beklemiş ve bu işlemi tüm seriyi hızla tekrarlayabilene kadar sürdürmüştür. (IV) Ebbinghaus, her seferinde farklı uzunlukta listeler ve farklı öğrenme aralıkları deneyerek öğrenme ve unutma hızlarını not etmiştir. (V) Bulgularına göre anımsamadaki en hızlı kayıp ilk saatte yaşanmakta, sonra hafifçe yavaşlamakta ve 9 saat sonunda öğrenilenler yüzde 60 oranında unutulmaktadır.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 3,
    expl: "Metinde Ebbinghaus'un bellek üzerine yaptığı spesifik deney ve sonuçları anlatılırken, I. cümlede psikoloji bilimine genel katkısından bahsedilmesi akışı bozmaktadır.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ankara'nın şirin ilçelerinden Beypazarı, misafirlerini ahşap evleri, özgün mutfağı ve kaybolmaya yüz tutmuş zanaatların ustalarını barındıran tarihî çarşısıyla karşılıyor. (II) Beypazarı, çokça özlem duyulan sakin yaşam temposuyla insanı metropolün bunaltıcı kargaşasından uzaklaştırıp gündelik hayatın stresinden arındırıyor. (III) İlçe, sınırlarına adımınızı attığınız andan itibaren sizi bir zaman yolculuğuna çıkarıyor ve geçmiş zamanlara götürüyor. (IV) Suluhan, meşhur Alaaddin Sokak, müzeler ve bin beş yüzü aşkın tarihî ev, bu yolculuktaki ana duraklarınız oluyor. (V) Semerci, dokumacı, kalaycı ve yorgancının eksilmeyen bir şevkle iş başında olduğu tarihî çarşıda ilerlerken önünden geçtiğiniz heybetli Osmanlı konağı sizi Hanlarönü Meydanı'na uğurluyor.</p><p><b>Bu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?</b></p>",
    diff: 2,
    expl: "Beypazarı'nın turistik ve tarihi mekanları tanıtılırken, II. cümlede insanların büyükşehir stresinden uzaklaşma isteği gibi genel bir yoruma yer verilmesi akışı bozmuştur.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: true }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Endonezya'ya bağlı Mentawai, dört adadan oluşan bir bölgedir. (II) Her biri tropikal bir cennet olan adaların en büyüğü, dört bin kilometrekarelik Siberut'tur. (III) Yağmur ormanlarının kapladığı, bitki ve hayvan varlığı açısından son derece zengin olan Siberut, aynı zamanda Mentawai halkının yaşadığı en kalabalık bölge olarak biliniyor. (IV) Yarı göçebe Mentawaililer, zengin kültürel unsurlarıyla dikkat çekiyor ve bunları yaşatmak için mücadele ediyor. (V) İnançlarının temelinde doğadaki ruhların önemli yer tuttuğu, canlı ve cansız bütün varlıkların bir ruhu olduğu düşüncesi yer alıyor. (VI) Asırlardır sürdürdükleri dişleri sivriltme, bedeni dövmelerle kaplama gibi âdetlerin hepsi bu inanışın bir parçası olarak görülüyor.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede Mentawai adalarının fiziki ve coğrafi özellikleri anlatılırken, IV. cümleden itibaren burada yaşayan halkın kültürel özelliklerine geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) İç Anadolu bozkırının göz alabildiğine uzanan coğrafyasında bir höyük, üstünde de bir köy vardır. (II) Şimdilerde Çorum'un önemli yerlerinden biri olan bu köye gitmek isteyenler, Alaca adlı bir kasabadan geçmek zorundadır. (III) Civar halkı tarafından başlangıçta kullanılan \"Alaca'dan höyüğe gitme\" tabiri, zamanla buranın Alacahöyük adıyla anılmasını sağlamıştır. (IV) Alacahöyük, her ne kadar bölge insanı tarafından bilinse de bilim dünyasına 1907'de arkeolog Theodore Macridy'nin yaptığı kazılar sonucunda tanıtılır. (V) 1930'lara kadar kısa süreli ve düşük bütçeyle devam eden Alacahöyük kazıları devletin de desteğiyle 1930'lardan sonra hızlanır. (VI) 1935'e gelindiğinde Atatürk'ün kişisel servetinden aktardığı bütçe ve verdiği talimatla başlayan kazı çalışmaları sonucunda da dünyaya açılır.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede höyüğün konumu ve adlandırılması işlenirken, IV. cümleden itibaren arkeolojik kazı süreci ve bilimsel tanınma aşaması anlatılmaya başlanmıştır.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Masallarda genellikle mekânlar kesin bir şekilde betimlenmez. (II) Anlatan daha \"Bir varmış, bir yokmuş...\" derken dinleyici içinde yaşadığı fiziksel dünyayı terk ederek düşsel bir evrene yerleşir. (III) Aktarılan uzak ülkeler, büyülü ormanlar, gizemli mağaralar her dinleyicinin kendi düş gücüyle kurduğu evrenin içinde devinip durur. (IV) Düş gücü belirli göstergelerle işler; içinde yaşanılan dünyadan alınmış olan bu göstergeler masallarda dinleyiciye dönüştürülerek aktarılır. (V) Aynı kültürel kodlara sahip anlatıcı ve dinleyiciler ortaklıklardan yola çıkarak kendi anlatılarını üretir. (VI) Bir başka ülkeye ait olan masalların anlaşılması ise o masallardaki göstergelerin düş gücü aracılığıyla bilinen göstergelere dönüşmesi sayesinde mümkün olur.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk üç cümlede masalların mekân ve atmosfer özelliklerinden bahsedilirken, IV. cümleden itibaren masallarda düş gücünün nasıl işlediği konusuna geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Modern toplumun dönüşümü, XVII. yüzyılda başlamış ve zirve noktasına ulaşması için iki yüzyıl geçmesi gerekmiştir. (II) Rönesans'ın, Fransız İhtilali'nin ve Sanayi Devrimi'nin modern devletin doğuşuna önemli katkılar sağladığı açıktır. (III) Modernleşme sürecine en önemli katkı ise XVIII. yüzyıl boyunca sürecek olan aydınlanma projesinden gelmiştir. (IV) Modernite kavramının tarihsel anlamı, aklın anlamının tarihsel gelişimine paralel olarak gelişmiştir. (V) Aklın kendi kendisinin ispatı olduğu anlayışının zirve noktası, modernizmin tanımlandığı an olarak belirlenebilir. (VI) Bu çerçevede moderniteyi sadece bir değişim, yenileşme süreci olarak nitelemek, onu ve temelindeki akılcılığı basite indirgemek anlamına gelebilir.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 3,
    expl: "Metnin ilk üç cümlesi modernleşmenin tarihsel süreci ve olayları (Rönesans, Sanayi Devrimi) üzerinedir. IV. cümleden itibaren ise modernitenin kavramsal ve düşünsel (akılcı) temellerine geçilmiştir.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: true },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) Ankara'da bulunan Gökyay Satranç Müzesi, bin metrekarelik bir alanda kurulmuştur. (II) Merkezî bir konumda yer alan müze, eski Ankara evi tarzındaki bir binada hizmet vermektedir. (III) Guinness Rekorlar Kitabı'na 2012 yılında giren Gökyay Satranç Müzesinde insanların ilgisini çeken satranç takımları sergilenmektedir. (IV) Madagaskar'dan Şili'ye, Fransa'dan Kazakistan'a kadar geniş bir coğrafyadan temin edilen 723 satranç takımının birçoğunda yerel kültür özelliklerini görmek mümkündür. (V) Ayrıca modern çizgide süper kahramanlardan, Şirinler ve Harry Potter karakterlerinden oluşan satranç takımları da müzede yer almaktadır. (VI) Bu takımlar; başta ahşap olmak üzere metal, mermer, keçe, cam gibi birçok materyalden üretilmiştir.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 2,
    expl: "İlk iki cümlede müzenin kurulduğu alan ve konumu (bina) anlatılmıştır. III. cümleden itibaren müzede sergilenen satranç takımlarına ve bunların özelliklerine geçildiği için ikinci paragraf III. cümleyle başlar.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: true }, { text: "IV", ok: false },
      { text: "V", ok: false }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>(I) İdeoloji, içerdiği bütün çelişik anlamlara rağmen geniş bir alanda etkinliğini sürdürüyor. (II) Nitekim ideolojinin salt toplumsal ve siyasal uygulamalarla sınırlı olmaması onun geniş nüfuz alanına işaret eder. (III) Doğru veya yanlış bir bilinç hâli olarak tezahür eden ideoloji, siyasal ve toplumsal uygulamaların yanı sıra dinden bilime, dil biliminden sanata, modernizmden küreselleşmeye geniş bir alanda etkinliğini sürdürür. (IV) İdeolojinin kendisini dönüştürerek yeniden üretebilme niteliği, onu ve geniş nüfuz alanını ilgiyle izlemeyi zorunlu kılıyor. (V) Her ideolojinin gerçeklik değeri, aslında onun içinde yaşadığı toplumun zayıf yanlarına yaslanan davranış ve düşünüş biçimiyle doğru orantılıdır. (VI) İdeolojinin beslendiği hakiki temel olan bu zayıf yanlar, aynı zamanda bir gücü temsil eder.</p><p><b>Bu parça iki paragrafa ayrılmak istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?</b></p>",
    diff: 3,
    expl: "İlk dört cümlede ideolojinin geniş nüfuz alanı ve bu alanı ilgiyle izlemenin gerekliliği anlatılmıştır. V. cümleden itibaren ise ideolojinin gerçeklik değeri ve beslendiği temel (toplumun zayıf yanları) konusuna geçildiği için ikinci paragraf V. cümleyle başlar.",
    answers: [
      { text: "II", ok: false }, { text: "III", ok: false }, { text: "IV", ok: false },
      { text: "V", ok: true }, { text: "VI", ok: false }
    ]
  },
  {
    text: "<p>I. İnsan; diğer canlılardan farklılaştığı dönem olan Paleolitik Çağ'da ilk aletleri yapmış, ateşi bulmuş, el becerisini ve soyutlama yetisini geliştirmiştir.<br>II. Avlanabilmek için ok uçları, dikiş dikebilmek için kemik iğneler icat etmiş ve mağara duvarlarına resimler çizmiştir.<br>III. Aynı zamanda “Uzak atalarımız neden duvarlara resim çizme ihtiyacı hissetti, bu sanatsal bir arayış mıydı yoksa bir ifade biçimi miydi?” sorularını akla getiriyor.<br>IV. Ulaşılabilen en eskisi 32 bin yıl öncesine giden bu resimler, çizildiği döneme dair insan yaşayışı ve kavrayışı hakkında önemli bilgiler içeriyor.<br>V. Binlerce yıl mağara duvarlarının karanlıklarında kalan resimler keşfedildikçe uzak atalarımızın gerçekleriyle ilgili yeni bilgiler gün yüzüne çıkıyor.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "II. cümlede mağara duvarlarına çizilen resimlerden söz edildikten sonra bu resimlerin keşfedildikçe yeni bilgiler ortaya çıkardığını anlatan V. cümle gelmeli; ardından IV. cümle ve \"Aynı zamanda\" ifadesiyle ek bir durum bildiren III. cümle ile parça tamamlanmalıdır. Bu nedenle III ile V yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile III", ok: false },
      { text: "III ile V", ok: true }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Pek çok ülkede bir restorana gittiğinizde soğuk su servis edilirken Asya kıtasının bazı bölgelerinde önünüze bir sürahi ılık su getirilir.<br>II. Soğuk içilen suyun yiyeceklerin içindeki yağları katılaştırarak sindirimi zorlaştırdığı düşünüldüğünde bu gayet mantıklı geliyor.<br>III. Dolayısıyla yiyecek ve içeceklerin vücut sıcaklığına yakın bir sıcaklık olan 37°C'de servis edilmesini uygun görüyorlar.<br>IV. Bu yörelerdeki insanlar yiyecek ve içeceklerin ne buz gibi soğuk ne de çok sıcak tüketilmesi gerektiğine inanıyor.<br>V. Ayrıca buz gibi soğuk suyun, sıcak bir günde serinletse de mideye oturma ihtimali ortadan kalkıyor.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "I. cümleden sonra II. cümlenin gelmesi akışı bozar. Önce yöre halkının inancı (IV), sonra bu inancın sonucu olan sıcaklık tercihi (III) ve en son bunun mantıklı gerekçesi (II) gelmelidir. Bu yüzden II ve IV yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "II ile III", ok: false }, { text: "II ile IV", ok: true },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Havaalanındaki her bir öge insanı yolculuğa çağırır ancak bunlar arasında en can alıcı olanı terminalin tavanından sarkıtılan, uçuş saatlerini gösteren ekranlardır.<br>II. Estetik açıdan hiç de şaşaalı olmayan bu ekranlar, üzerlerindeki donuk fontlu yazılara rağmen çağrıştırdıkları duygusal anlamları hiç yitirmezler.<br>III. Ruh hâlimizin gelgitleri içinde bir o yana bir bu yana savrulup dururken bir uçağın kalktığını bilmek, yeniden başlama ihtimalini hatırlattığı için büyük zevktir.<br>IV. Uçak bizi bilmediğimiz bir yere götürecektir, insanların adımızı bilmediği, her şeye yeniden başlayabileceğimiz bir yere.<br>V. Ekranda gördüğümüz bu sıkıcı harfler varış noktalarını gösteren şehir isimlerine dönüştüğünde zorlu yaşamlarımızın kolaylıkla değiştirilebileceğini ima eder; tek yapmamız gereken, o koridordan geçmek ve o uçağa binmektir.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "I ve II. cümlelerde ekranlardan söz edildiği için ekrandaki harflerden bahseden V. cümle III. cümlenin yerine gelmelidir. V. cümle \"o uçağa binmektir\" diye bittiğinden ardından \"Uçak bizi...\" diye başlayan IV. cümle, en sonda da uçağın kalkışının verdiği zevki anlatan III. cümle gelmelidir. Bu nedenle III ile V yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "II ile III", ok: false }, { text: "III ile IV", ok: false },
      { text: "III ile V", ok: true }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Günümüzde enerji gereksinimimizin büyük bir kısmı petrol ve kömür gibi fosil yakıtlardan karşılanıyor.<br>II. Bu kaynakların kullanımıyla ilgili pek çok tartışmanın odağında fosil yakıtların sürdürülebilir olmamaları bulunuyor.<br>III. Artan enerji ihtiyacı sebebiyle insanlar bu kaynakları doğanın yeniden üretebileceğinden çok daha hızlı tüketiyor.<br>IV. Atmosferdeki sera gazı miktarının artması, ortalama sıcaklığın yükselmesine ve iklim değişikliklerine yol açıyor.<br>V. Uzmanlar tarafından önemle vurgulanan diğer sorun ise fosil yakıt kullanımının yüksek miktarda sera gazı oluşumuna yol açması.</p><p><b>Yukarıda numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "Fosil yakıtların sürdürülebilir olmaması (II, III) anlatıldıktan sonra \"diğer sorun\" olan sera gazı oluşumundan söz eden V. cümle gelmeli, sera gazı artışının sonuçlarını anlatan IV. cümle de en sona yerleşmelidir. Bu nedenle IV ile V yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile III", ok: false },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: true }
    ]
  },
  {
    text: "<p>I. Geleneksel tarımda verimi artırmak ve zararlı organizmalarla mücadele etmek amacıyla yaygın olarak tarım ilaçları kullanılıyor.<br>II. Biyolojik mücadelede tarımsal alandaki zararlı organizmayı kontrol etmek amacıyla o türün doğal düşmanı olan canlılardan yararlanılıyor.<br>III. Son yıllarda yaygınlaşan organik tarımda ise zararlı organizmalarla baş etmek için tarım ilaçları yerine biyolojik mücadele yöntemine başvuruluyor.<br>IV. Doğal düşmanlar, zararlı organizmaların çoğalmalarını çeşitli yollarla engelleyerek onlarla mücadele ediyor.<br>V. Bu uygulamaların birbirini olumsuz etkilediğini belirten uzmanlar, organik ve geleneksel tarım yöntemlerinin kullanıldığı alanların ayrı tutulması gerektiğini vurguluyor.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 2,
    expl: "Metin geleneksel ve biyolojik mücadeleyi karşılaştırıyor. III. cümledeki 'tarım ilaçları yerine' ifadesi II'den sonra gelmelidir. Bu yüzden II ve III yer değiştirmelidir.",
    answers: [
      { text: "I ile II", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile III", ok: true },
      { text: "III ile V", ok: false }, { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Daha önce defalarca okumuş olduğunuz ve artık neredeyse ezbere bildiğinizi düşündüğünüz bir romanı ortasından bir yerden açıp yeniden okumaya başlayın.<br>II. Önceki okuma deneyiminizin kılavuzluğunun hiçbir işe yaramayacağını anladığınız böyle bir tecrübeyi hepinizin bence en az bir defa yaşaması gerekir.<br>III. Adı geçen herkesin açığa vurulamayan öyle korkunç sırları vardır ki konunun ucunu, bölümün başını yakalamak için sayfaları ileri geri çevirmeye başlarsınız.<br>IV. Her adımınızda daha da derinlere indiğinizi, şehrin yabancıya kapalı bölgelerine doğru iyice süzüldüğünüzü, giderek düpedüz kaybolduğunuzu görürsünüz.<br>V. İlk kez gelmiş olduğunuz bir şehirde gibi hissedersiniz kendinizi, bu iki tanıdık isme rastlarsınız ama nerede olduğunuzu da tam olarak çıkaramazsınız.</p><p><b>Bu parçada numaralanmış cümlelerin anlamlı bir bütün oluşturabilmesi için hangilerinin birbiriyle yer değiştirmesi gerekir?</b></p>",
    diff: 3,
    expl: "Romanı ortasından açıp okumaya başlama önerisinden (I) sonra okurun kendini ilk kez geldiği bir şehirde gibi hissettiğini anlatan V. cümle gelmelidir. Ardından sayfaları ileri geri çevirme (III) ve kaybolma (IV) anlatılmalı, \"böyle bir tecrübe\" diyerek yaşanan her şeyi özetleyen II. cümle sonuç olarak en sona yerleşmelidir. Bu nedenle II ile V yer değiştirmelidir.",
    answers: [
      { text: "I ile III", ok: false }, { text: "I ile IV", ok: false }, { text: "II ile IV", ok: false },
      { text: "II ile V", ok: true }, { text: "III ile V", ok: false }
    ]
  },
  {
    text: "<p>I. Yaratıcı yaşam enerjisi kapandığında bu durum, hızlıca depresyona ve diğer rahatsızlıklara yol açabiliyor.<br>II. Yaşamını çevreleyen tüm değişimleri yakalamak yerine ilgi duyduğu bir alana odaklanmaya çalışmak bu noktada bireyi rehabilite edebilir.<br>III. İnsanlık tarihinin hiçbir döneminde XXI. yüzyıldaki kadar hızlı ve küresel değişimler meydana gelmedi.<br>IV. Duygular etraftaki değişimin hızına ayak uyduramadığında, kişinin duygusal sistemi tıkanıyor ve sonrasında tamamen kapanıyor.<br>V. Bu değişimlerin hızı, günümüzde depresyonda olan insan sayısında büyük bir artışa neden oluyor.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi <u>baştan dördüncü</u> olur?</b></p>",
    diff: 3,
    expl: "Sıralama: III (Genel giriş) - V (Günümüzdeki durum) - IV (Neden) - I (Sonuç/Hastalık) - II (Rehabilitasyon) şeklinde olmalıdır. Bu durumda baştan dördüncü I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Roket kullanmadan uzay deneyimi yaşamak isteyen Eustace, basınçlı bir uzay kıyafeti giymişti ve ince bir polietilen balonun altına asılıydı.<br>II. İlkin gevşek bir dörtgen hâlinde göğe doğru yükseldi sonra pürüzsüz ve şişkin bir damla biçimi aldı.<br>III. Eustace hedefine yani gezegen yüzeyinden 25 mil yüksekliğe ulaştığında ise balon; futbol stadı büyüklüğünde, ışıl ışıl parlayan, kusursuz bir küreye dönüştü.<br>IV. Balon göğe sorunsuzca yükselirken içindeki helyum gazı genişlemeye başladı ve kat ettiği her mesafede balonun şekli değişti.<br>V. Geçtiğimiz ay 57 yaşındaki Alan Eustace, kayış gıcırtısı dışında hiçbir ses çıkarmadan New Mexico Çölü'nden gökyüzüne doğru hareket etti.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi <u>baştan üçüncü</u> olur?</b></p>",
    diff: 2,
    expl: "Sıralama: V (Başlangıç) - I (Kıyafet ve balon) - IV (Balonun şeklinin değişmeye başlaması) - II (Dörtgenden damla biçimine geçiş) - III (Hedefe varış ve küre biçimi) şeklindedir. Baştan üçüncü IV'tür.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Ancak kullanılan arındırma sistemlerinin yüksek maliyetli olması ve çok enerji tüketmesi, bu yöntemin dezavantajları arasında yer alıyor.<br>II. Bu durum, aşırı tuzlu suların gerekli işlemlerden geçirilmeden doğaya bırakılması hâlinde çevre için önemli bir tehdit oluşturuyor.<br>III. Deniz suyunun tuzdan arındırılmasıyla içme suyu üretilmesi, bu soruna çare olması için başvurulan yöntemlerden biri.<br>IV. Ayrıca yan ürün olarak ortaya çıkan aşırı tuzlu sularda, üretim sürecinde kullanılan zararlı kimyasal maddeler bulunabiliyor.<br>V. İklim değişikliği ve giderek artan nüfus nedeniyle dünya genelinde milyonlarca insan, içme suyu kıtlığı yaşıyor.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi <u>baştan üçüncü</u> olur?</b></p>",
    diff: 2,
    expl: "Sıralama: V (Sorun) - III (Çözüm/Arındırma) - I (Çözümün dezavantajı) - IV (Yan ürün sorunu) - II (Çevre tehdidi) şeklindedir. Baştan üçüncü I'dir.",
    answers: [
      { text: "I", ok: true }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Cümlelerin altını renkli kalemlerle çizenler olduğu gibi sayfalara yazdıkları notlarla ayrı bir dünya yaratanlar da vardır.<br>II. Neyse ki onlar da bireysel okuma tercihlerimizi tatmin edecek sanat formülleri üretmeye başladılar.<br>III. Elektronik okuma araçları hayatımıza girdiğinden beri ise tekdüzeleşme kaygısı duyar olduk.<br>IV. Kişisel alışkanlıklar, bireylerin okuma biçimlerini etkiler.<br>V. Buna karşın kimileri de kitabı katlama yeri izi bile bırakmadan okumayı sever.</p><p><b>Yukarıda numaralanmış cümleler anlamlı bir bütün oluşturacak biçimde sıralandığında hangisi <u>baştan dördüncü</u> olur?</b></p>",
    diff: 3,
    expl: "Sıralama: IV (Genel giriş) - I (Bir alışkanlık) - V (Karşıt alışkanlık) - III (Elektronik araçlar/Değişim) - II (Bireysel tercihler) şeklindedir. Baştan dördüncü III'tür.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: true },
      { text: "IV", ok: false }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir hükümdar değer verdiği çay kâsesini kazara kırar fakat kâseden vazgeçmek istemez. Ülkesinin zanaatkârlarını sarayına çağırır, onlardan kâseyi onarmalarını ister. Günlerce titizlikle sürdürülen uğraşlar sonunda kâsenin kırık parçaları, altından bir malzeme kullanılarak birleştirilir ve çatlaklar giderilir. Böylece kusurlu noktaların bir açıdan gizlendiği başka bir açıdansa vurgulandığı benzersiz bir kâse ortaya çıkar ve hükümdar kâsenin bu yeni görünümünü çok beğenir. Hikâyesi böyle başlayan kintsugi sanatı, ---- bir anlayışa kaynaklık eder.</p><p><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
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
    text: "<p><b>Muhabir:</b> (I) ---- ?<br><b>Tarihçi:</b> Tarihi, betimleyici olmaktan çıkarıp daha analitik yapmak zorundayız. Sadece anlatısal kaynakları değil sayısal malzemeyi de kullanmalıyız. İstatistik alanının unsurları da işte bu tür malzemeyi işleme ve genelgeçer kabul görecek sonuçlara ulaşma noktasında son derece yararlı olmaktadır.<br><b>Muhabir:</b> (II) ---- ?<br><b>Tarihçi:</b> Tarihçi herhangi bir karşılaştırmaya girişmeden hiç bilinmeyen bir konuyu ele alıp ortaya koyan ilk kişi olabilir. Öte yandan ortaya çıkardığı ürünü karşılaştırmalı bir çerçevede ele almak da isteyebilir. Tek bir akış belirleyip çizgiyi çekmek doğru olmaz.</p><p><b>Bu diyalogda boş bırakılan yerlere aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "İlk cevap istatistiksel ve sayısal verilerin önemine (istatistiksel yöntem), ikinci cevap ise karşılaştırmalı analizin (karşılaştırmalı analiz) gerekliliğine yöneliktir.",
    answers: [
      { text: "(I) Bir tarihçi kullandığı kaynaktaki sayısal verilerin güvenirliğinden nasıl emin olur<br>(II) Neyin tarihsel bilgisi olabilir veya başka bir deyişle tarihin konusu nedir", ok: false },
      { text: "(I) İstatistiksel tekniklerin kullanılması tarih yazımında nasıl bir dönüşüme neden olmuştur<br>(II) Tarihin kategorik olarak geçmişten farklı bir söylem olduğu yorumuna katılır mısınız", ok: false },
      { text: "(I) Tarihçi, görgü tanığı olmadığı geçmişi nasıl ve hangi koşullarda bilebilir<br>(II) Tarihe yardımcı bilim alanları içinde tarihçinin en sık başvurduğu hangisidir", ok: false },
      { text: "(I) Tarihçilerin sözlü ve yazılı kaynak kullanımına dair istatistiksel bir çalışma var mı<br>(II) Tarihçilerin aynı konuda farklı görüşler savunması konusunda ne düşünüyorsunuz", ok: false },
      { text: "(I) İstatistiksel yöntem kullanımının tarih araştırmalarındaki yeri nedir<br>(II) Karşılaştırmalı analiz, bir tarih çalışmasının olmazsa olmazıdır diyebilir miyiz", ok: true }
    ]
  },
  {
    text: "<p>Popüler kültür eleştirisi hayli zor bir iş. İş zorluğu analiz konusunun kendine has özellikleri kadar eleştirmenin konusuyla olan ilişkisinin problemli olmasından da kaynaklanıyor. Çünkü popüler kültür; hemen burada elimizin altında, neredeyse soluduğumuz hava kadar içinde olduğumuz bir şey. Böylesine içli dışlı olduğumuz popüler kültürü analiz konusu hâline getirdiğimizde bu ilişkimizi yok saymak gerçekçi olmuyor. Yani ----.</p><p><b>Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
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
    text: "<p>Güçlü bir duygunun etkisindeyken hissettiğimiz şeyi aktarmak için fazla düşünmez, aklımıza ilk gelen sözleri söyleriz. Genellikle bunlar zihnimizde yer etmiş ancak çok derin anlamlar taşımayan sözlerdir. Amacımız, deneyimlediğimiz ve aslında ne olduğunu tam olarak kavrayamadığımız bir hissi bir an önce aktarmaktır. Ancak ezbere tepkilerimiz çoğu zaman karşımızdakine gerçekte ne hissettiğimizi anlatmakta yetersiz kalır. Verdiğimiz tepkiler bizi ----.</p><p><b>Bu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Ezbere ve derin anlam taşımayan tepkilerimiz gerçekte ne hissettiğimizi karşımızdakine anlatmakta yetersiz kaldığından bizi çevremizle sağlıklı bir iletişim kuramayan, etrafımıza yabancılaşmış bir konuma iter. Bu nedenle parça \"etrafımıza yabancılaştıran buzlu bir camın ardına hapseder\" ifadesiyle tamamlanmalıdır.",
    answers: [
      { text: "etrafımıza yabancılaştıran buzlu bir camın ardına hapseder", ok: true },
      { text: "kendi sınırlarımız dışına çıkmadığımızdan güvende hissettirir", ok: false },
      { text: "duygularımızı açık bir şekilde göstermek için cesaretlendirir", ok: false },
      { text: "bağlamdan kopararak anlık düşüncelerimizden uzaklaştırır", ok: false },
      { text: "sahnenin içine çekerek farkındalık geliştirmemizi sağlar", ok: false }
    ]
  },
  {
    text: "<p>İnsanlığın avcılık ve toplayıcılıkla hayatını sürdürmesi Neolitik Dönem'le geride kalmıştır. Neolitik Dönem'le insan, hayvanları evcilleştirip bitkilerin dünyasını tanıyarak tabiat karşısındaki pasif konumundan sıyrılmıştır. Tabiatla kurulan bu yeni ilişki, insanlık tarihinde ilk önemli sıçrama olmuştur. İkinci sıçrama ise ilk olarak Mezopotamya'da Sümerler tarafından gerçekleştirilen yerleşik tarımla deneyimlenir. Yerleşik tarım; karmaşık şehir hayatının, devlet örgütünün ve iş bölümünün ortaya çıkmasını sağlamıştır. ----. Uygarlık tarihi, Sümerlerle birlikte başlamıştır demek mümkündür.</p><p><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
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
    text: "<p>(I) Romalıların harita yapım etkinlikleri, günümüze kalan belgelerden anlaşıldığına göre siyasi amaçlarda ve inşaat mühendisliği uygulamalarında yoğunlaşıyordu. (II) Roma İmparatorluğu'nda bir merkezde toplanan harita yapım çalışmalarının varlığından bahsedemesek de haritaların çeşitli nedenlerle kullanılmış olduğunu gösteren pek çok kanıt vardır. (III) İster denizde ister karada kullanılmak için hazırlanmış olsunlar, haritalara dönemin yazılı seyahat rehberlerinde rastlamak mümkündür. (IV) Aynı zamanda Romalılarda miladi ikinci yüzyılda zirveye ulaşan bir dörtgen arazi parselleme yöntemi olduğuna dair çok fazla kanıt bulunmaktadır. (V) Ancak günümüze ulaşan tabletlerden ve el yazmalarından bu haritaların neye benzeyebileceğine ilişkin bir fikir edinilebilir.</p><p><b>Bu parçada numaralanmış cümlelerin <u>hangisinden sonra</u> “Roma döneminde bu sistemle yapılmış hiçbir harita örneği günümüze ulaşmamıştır.” cümlesi getirilebilir?</b></p>",
    diff: 3,
    expl: "Eklenecek cümle 'örneklerin ulaşmadığını' söylüyor, V. cümle ise 'ancak' diyerek dolaylı yoldan fikir edinilebileceğini söylüyor. Bu yüzden IV'ten sonra gelmelidir.",
    answers: [
      { text: "I", ok: false }, { text: "II", ok: false }, { text: "III", ok: false },
      { text: "IV", ok: true }, { text: "V", ok: false }
    ]
  },
  {
    text: "<p>----. Tarım faaliyetlerini engelleyen bu durum çölleşmedir ve bunun en önemli nedenlerinden biri uzun süren kuraklık dönemleridir. Küresel ısınma, aşırı otlatma ve ormanların azalması insan kaynaklı nedenler arasındadır. Yarı kurak alanların aşırı ekilmesi de çölleşmeye neden olur. Artan sıcaklıklar buharlaşma oranını yükseltir, toprağı kurutur ve yağış düzenini değiştirir. Küresel ısınmanın önüne geçilmezse yağış ve sıcaklıklardaki ortalama değişimler, pek çok bölgede tarım alanlarını elverişsiz hâle getirecektir.</p><p><b>Bu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Boşluktan sonra gelen \"Tarım faaliyetlerini engelleyen bu durum\" ifadesi, boşluğa tarımsal faaliyetlerin sürdürülmesini engelleyen bir durumu anlatan cümlenin gelmesi gerektiğini gösterir. Dünyanın tüm kara alanlarının tarımsal faaliyetler için uygun imkânlara sahip olmadığını belirten B seçeneği bu durumu karşılar ve sonraki cümlede bu durum çölleşme olarak adlandırılır.",
    answers: [
      { text: "İklim değişikliğinin hızla artan yıkıcı etkileri pek çok ülkenin farklı politikalar geliştirmesini zorunlu kılmıştır", ok: false },
      { text: "Dünyanın tüm kara alanları tarımsal faaliyetlerin etkin biçimde sürdürülmesi için uygun imkânlara sahip değildir", ok: true },
      { text: "Güncel tarım politikaları elde edilen ürünlerin verimini artırmada beklenen etkiyi göstermekte yetersiz kalmıştır", ok: false },
      { text: "Tarım faaliyetlerini daha işlevsel hâle getirmek için üretim süreçlerini başından sonuna titizlikle yönetmek gerekir", ok: false },
      { text: "Her yıl milyonlarca kilometre tarım alanı ve kırsal alan tarım yapılamayacak hâle gelmektedir", ok: false }
    ]
  },
  {
    text: "<p>Hep söyledikleri gibi her yaşın ve çağın kendine has bir özelliği olsa da kimileri hayatlarının sonlarında “Yaşadım.” diyemeyecek kadar sıkıntılı olurlar. Açıkçası ben, dünyaya geldiğim için pişman olmak gibi büyük bir olumsuzlukla karşılaşmadım hiç. ----. Ama böyle bir durumda içimden gelen bir ses hemen bana karşılık vererek beni kendime getirmiştir. “O kötü bildiğin tecrübeler olmasaydı yaşamın tadına daha çok mu varacaktın?”</p><p><b>Bu parçada boş bırakılan yere, düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "Yazar pişman olmadığını ve içinden gelen bir sesin ona tecrübelerin önemini hatırlattığını söylüyor. Bu yüzden geçmişteki zorluklar için karamsarlığa kapıldığı anları anlatan B seçeneği akışa uygundur.",
    answers: [
      { text: "Kimi zaman da “yaşam şöyle, yaşam böyle” diye başkalarına akıl vererek insanların üzüntüleriyle mutlu olabileceklerini söylemişimdir", ok: false },
      { text: "Belki zaman zaman, yaşadığım zorluklar bu kadar ağır olmasaydı da yaşamın tadını daha iyi çıkarabilseydim diye karamsarlığa kapılmışımdır", ok: true },
      { text: "Sadece gerçekleşmemiş gençlik düşlerimin besbelli bundan sora da gerçekleşmeyeceğini kabullendiğim zamanlarda üzülmüşümdür", ok: false },
      { text: "Tabii ki beni üzen durumlar olmuştur hayatımda, ben deneyimlerimden her zaman ders alarak yoluma devam etmeyi seçmek istemişimdir", ok: false },
      { text: "Hayatı boyunca geçmiş günlere özlem duyan ve içinde bulundukları anı kaçırarak eskilere dönmek isteyen insanlarla birçok kez karşılaşmışımdır", ok: false }
    ]
  }
];
