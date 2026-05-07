import { McQ } from "../../../../types";

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 1
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_24: McQ[] = [
  {
    text: "<p>Sanat, insanın psikolojik hayatının temellerinden birini oluşturan güzellik duygusunun dışa yansımış somut bir ifadesidir.</p><p><b>Bu cümlenin ögeleri sırasıyla aşağıdakilerin hangisinde verilmiştir?</b></p>",
    diff: 2,
    expl: "Cümlede 'Sanat' özne görevindedir. Geri kalan 'insanın psikolojik hayatının... somut bir ifadesidir' kısmı bir tamlama grubu olduğu için bölünemez ve yüklemi oluşturur. Bu nedenle cümle Özne ve Yüklemden oluşur.",
    answers: [
      { text: "Özne - Nesne - Yüklem", ok: false },
      { text: "Özne - Yüklem", ok: true },
      { text: "Nesne - Yüklem", ok: false },
      { text: "Özne - Dolaylı tümleç - Yüklem", ok: false },
      { text: "Nesne - Dolaylı tümleç - Yüklem", ok: false }
    ]
  },
  {
    text: "<p>İnsanoğlu; fizyolojik ve psikolojik yönleriyle çok karmaşık olan bu nedenle de anlaşılmayan, âdeta bir sorular ve bilinmezler yumağı olan bir varlıktır.</p><p><b>Bu cümlenin yükleminde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Yüklem içerisinde 'sorular ve bilinmezler yumağı' isim tamlaması, 'yönleriyle' edat, 'âdeta' durum zarfı ve 'karmaşık olan' sıfat-fiil grubu mevcuttur. Ancak yüklemde zarf-fiil eki almış bir sözcük bulunmamaktadır.",
    answers: [
      { text: "İsim tamlaması", ok: false },
      { text: "Edat", ok: false },
      { text: "Zarf", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "Zarf-fiil", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde soru diğerlerinden farklı bir ögeyi buldurmaya yöneliktir?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'kim' soru zamiri 'bıraktı' fiilini gerçekleştiren kişiyi yani özneyi sormaktadır. Diğer seçeneklerde ise soru sözcükleri ek-eylem alarak yüklemi buldurmaya yöneliktir.",
    answers: [
      { text: "Dün akşam tamamlamadığım kitabım neredeydi?", ok: false },
      { text: "Yıllarca bu kitaplar arasında saatler geçiren sen miydin?", ok: false },
      { text: "O gün okuduğun eserin yazarı kimdi?", ok: false },
      { text: "Yine bu çöpleri buraya kim bıraktı?", ok: true },
      { text: "Sabaha kadar piyano çalan hanginizdi?", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisi yalnızca temel ögelerden (Özne ve Yüklem) oluşmaktadır?</b></p>",
    diff: 3,
    expl: "B seçeneğinde 'Günlüklü Koyu'ndaki muhteşem manzara' özne, 'ziyaretçilerin ağzını açık bırakıyordu' ise deyimleşmiş bir yüklemdir. Cümlede yardımcı öge bulunmaz.",
    answers: [
      { text: "Egeli kadınların yaptıkları leziz yemekleri görenler şaşkınlıkla tezgâhlara bakakaldılar.", ok: false },
      { text: "Günlüklü Koyu'ndaki muhteşem manzara, ziyaretçilerin ağzını açık bırakıyordu.", ok: true },
      { text: "Muhtaç olduğun kudret, damarlarındaki asil kanda mevcuttur.", ok: false },
      { text: "Yüzlerce yıllık çam ve iğde ağaçlarının büyüleyici görüntüsü fotoğrafçıların dikkatini çekti sonunda.", ok: false },
      { text: "Yazarın bu son eserine yapılan ağır eleştiriler edebiyat dünyasında tepki çekti.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde vurgulanan öge diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "Fiil cümlelerinde vurgu yüklemden önceki ögededir. E seçeneğinde 'bugünlere' dolaylı tümleci (yer tamlayıcısı) vurgulanmıştır. Diğer seçeneklerde yüklem isim soylu olduğu için vurgu yüklemin kendisindedir.",
    answers: [
      { text: "Batı edebiyatının temel kaynağı Yunan kültürüdür.", ok: false },
      { text: "Akşamki organizasyondan akılda kalacak tek şey müzik ziyafetiydi.", ok: false },
      { text: "Üniversitemizin ilk mezunu maalesef bu akşam aramızda değil.", ok: false },
      { text: "Eski yaz günlerinin tadı maalesef bu kasabada artık yok.", ok: false },
      { text: "Çok uzun ve disiplinli bir çalışma sonunda sanatçı bugünlere vardı.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde belirtili nesne vurgulanmıştır?</b></p>",
    diff: 3,
    expl: "E seçeneğinde yüklem olan 'belirlemişti' fiilinden hemen önce gelen 'en sevdiği kitaplarını nereye yerleştireceğini' grubu belirtili nesnedir ve vurgulanan ögedir.",
    answers: [
      { text: "Evin her yerini kaplayan kaktüsler onun mutluluk kaynağıydı.", ok: false },
      { text: "Karşısında saygısızca konuşan kadına dayanamayıp odadan çıktı.", ok: false },
      { text: "Yemek yapmanın onu mutlu eden bir yanı olduğunu her zaman söylerdi.", ok: false },
      { text: "Bu mevsimde köyün her yerini iğde ağaçlarının kokusu sarardı.", ok: false },
      { text: "Özenle boyadığı kitaplığında, en sevdiği kitaplarını nereye yerleştireceğini belirlemişti çoktan.", ok: true }
    ]
  },
  {
    text: "<p>Çağın, toplumun ve dünyanın bireyden beklentileri değiştiğinden bireyin sıkça başvurduğu okuma becerisinin tanımı tarihten günümüze birçok kez farklı tanımlarla ifade edilmiştir.</p><p><b>Bu cümlede öge bulunurken aşağıdaki sorulardan hangisinin cevabı yoktur?</b></p>",
    diff: 2,
    expl: "Cümlede 'Neden?' (beklentiler değiştiğinden), 'Ne?' (okuma becerisinin tanımı), 'Ne zaman?' (tarihten günümüze) ve 'Nasıl?' (farklı tanımlarla) sorularının cevabı varken, 'Nereden?' sorusunun cevabı yoktur.",
    answers: [
      { text: "Neden?", ok: false },
      { text: "Ne?", ok: false },
      { text: "Ne zaman?", ok: false },
      { text: "Nasıl?", ok: false },
      { text: "Nereden?", ok: true }
    ]
  },
  {
    text: "<p>Nice zaman sonra bana en yakın ve hüzünlü gelen ses, bir yara acısına benzettiğim o haykırış, gevşemiş bir karıncanın rüzgâr uğultusuna benzeyen gürültüsüymüş.</p><p><b>Bu cümledeki ara sözün işlevi aşağıdakilerin hangisiyle ortaktır?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümlede 'bir yara acısına benzettiğim o haykırış' ara sözü öznenin açıklayıcısıdır. A seçeneğinde de 'günün iple çektiği anlarıydı' ara sözü 'en zevkli saatler' öznesini açıklamaktadır.",
    answers: [
      { text: "Bilgisayar başında geçirdiği vakit, onun için en zevkli saatler, günün iple çektiği anlarıydı.", ok: true },
      { text: "Can dostuna, uzun tüylü kedisine, sevgi dolu gözlerle bakıyordu.", ok: false },
      { text: "Eski fotoğraflara her baktığında, gençlik günlerini anımsadığı o anlara gittiğinde, gözleri dolardı.", ok: false },
      { text: "O sıcak günlerde, yaz aylarında, o küçük kasabadan kaçmak isterdi.", ok: false },
      { text: "Büyük babasının evinde, çocukluğunun mabedinde, unutmuştu eşyalarını.", ok: false }
    ]
  },
  {
    text: "<p>Film festivalleri; sanatı, sanatçıyı ve izleyiciyi bir araya getirirken izleyenlere muhteşem bir sinema seli sunar.</p><p><b>Bu cümlede eylemden etkilenen öge (nesne) aşağıdakilerden hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 2,
    expl: "Cümlede 'sunar' yüklemine sorulan 'Ne sunar?' sorusunun cevabı olan 'muhteşem bir sinema seli' belirtisiz nesnedir ve eylemden etkilenen ögedir.",
    answers: [
      { text: "sanatı, sanatçıyı", ok: false },
      { text: "sanatçıyı ve izleyiciyi", ok: false },
      { text: "izleyenlere", ok: false },
      { text: "muhteşem bir sinema seli", ok: true },
      { text: "bir sinema seli", ok: false }
    ]
  },
  {
    text: "<p>Bir kelebeğin kanatlarının üzerindeki pullar vasıtasıyla ışığın yansıyarak ortaya çıkması, gerçekte olmayan ama akıl almaz güzellik sergileyen renkleri görmemizi sağlar.</p><p><b>Bu cümlenin öznesinde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Özne 'Bir kelebeğin kanatlarının üzerindeki pullar vasıtasıyla ışığın yansıyarak ortaya çıkması' grubudur. Bu grupta isim-fiil, edat öbeği ve zincirleme isim tamlaması varken sıfat-fiil grubu bulunmamaktadır.",
    answers: [
      { text: "Zincirleme isim tamlaması", ok: false },
      { text: "Sıfat-fiil grubu", ok: true },
      { text: "Çekim ekinden sonra gelen yapım eki", ok: false },
      { text: "İsim-fiil grubu", ok: false },
      { text: "Edat öbeği", ok: false }
    ]
  },
  {
    text: "<p>Mantık, Aristoteles'in sistemleştirdiği şeklini koruyarak yaklaşık yirmi asırdır önemli bir değişikliğe uğramamıştır.</p><p><b>Bu cümlede numaralanmış sözcüklerin hangisi tek başına cümlenin bir ögesini oluşturmaktadır?</b></p>",
    diff: 3,
    expl: "Cümlede 'Mantık' (I) tek başına özne görevindedir. Diğer numaralı kısımlar zarf tümleci veya dolaylı tümleç gruplarının birer parçasıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Atmosfere çeşitli etkilerle yayılan gazların sera etkisi yaratması sonucunda, Dünya yüzeyinde sıcaklığın artmasıdır küresel ısınma.</p><p><b>Bu cümlenin ögelerinin doğru sıralaması aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cümlede 'Atmosfere... artmasıdır' kısmı ek-eylem alarak yüklem olmuştur. 'küresel ısınma' ise öznedir. Ancak cümle 'zarf tümleci - yüklem - özne' şeklinde de analiz edilebilir.",
    answers: [
      { text: "Zarf tümleci - özne - yüklem", ok: false },
      { text: "Zarf tümleci - yüklem - nesne", ok: false },
      { text: "Dolaylı tümleç - özne - yüklem", ok: false },
      { text: "Zarf tümleci - yüklem - özne", ok: true },
      { text: "Dolaylı tümleç - yüklem - özne", ok: false }
    ]
  }
];

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 2
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_2: McQ[] = [
  {
    text: "<p>(I) Ziyaretçiler, (II) Trakya Ovası'nı geride bıraktıktan sonra (III) Yıldız Dağları'nın kıvrımlı yollarını takip ederek (IV) meşe ve kayın ormanlarının derinliklerine (V) kavuşuyorlar.</p><p><b>Bu cümlenin dolaylı tümleci, numaralanmış yerlerin hangileri arasında kalan kısımdır?</b></p>",
    diff: 3,
    expl: "Cümlede 'kavuşuyorlar' yüklemine sorulan 'Nereye?' sorusunun cevabı 'meşe ve kayın ormanlarının derinliklerine' ifadesidir. Bu öbek dolaylı tümleçtir ve IV ile V numaralı işaretler arasında yer alır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ögelerine ayırmada yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'bilim insanlarının dikkati' bir zincirleme isim tamlamasıdır. 'dikkatini çekmek' ise deyimleşmiş bir birleşik fiildir ve bölünemez. Yüklem 'dikkatini çekmiştir' şeklinde bir bütün olarak alınmalıydı.",
    answers: [
      { text: "Bahar / toprak ananın o kendine özgü telaşıyla çırpınan kalbini dinlemenin tam zamanıdır.", ok: false },
      { text: "Böcekler uyanmaya, yollar tozlanmaya kırlar çiçeklenmeye / başlamıştı / bahar gelince.", ok: false },
      { text: "Kapı eşiklerimizde uyuyan kedi ve köpeklerle çatılarımızda tüneyen güvercinlerle / yaşamımızı / paylaşıyoruz.", ok: false },
      { text: "İnsanlar ve hayvanlar arasındaki ilişkilerin tarihi / her daim / bilim insanlarının dikkatini / çekmiştir.", ok: true },
      { text: "Minyatür / küçük boyutlardaki resimlere ve küçük boyutlardaki nesnelere yapılan çizimlerin boyanması sanatına verilen isimdir.", ok: false }
    ]
  },
  {
    text: "<p>Postmodernizm; modern yaşamın bireyden aldığı değerleri sorgulama, elinden alınanlara uzanma, varoluş kaynaklarına dönme, büyüsü bozulan hayatta tutunmaya çalışma projesidir.</p><p><b>Aşağıdakilerden hangisi ögelerinin sıralanışı bakımından bu cümleyle özdeştir?</b></p>",
    diff: 3,
    expl: "Öncül cümle 'Özne' ve 'Yüklem'den oluşmaktadır. B seçeneğindeki cümle de 'Geleneksel Türk sanatlarından olan ebru' (özne) ve geri kalan uzun tamlama grubu (yüklem) şeklinde sadece iki temel ögeden oluşur.",
    answers: [
      { text: "İnsanların yeni coğrafyaları keşfetme isteği, teknoloji ve ulaşım olanaklarının çoğalmasıyla her geçen gün artmaktadır.", ok: false },
      { text: "Geleneksel Türk sanatlarından olan ebru; yoğunluğu artırılmış maddelerle su yüzeyine, toprak boyaların, at kılından yapılan fırçalar kullanılarak serpilmesi ile elde edilen renkli desenin kâğıda aktarılması sanatıdır.", ok: true },
      { text: "İnsanın yaşamını sürdürebilmesi için en önemli nesne olan aletler, günümüz insanının mülkiyetçi yapısı dolayısıyla insan hayatının vazgeçilmez bir parçasıdır.", ok: false },
      { text: "Psikoloji, bir bilim olarak ortaya çıkmadan önce uzun bir süre felsefe içerisinde ele alınmıştır.", ok: false },
      { text: "Festival nedeniyle açılan ot temalı el ürünlerinin satıldığı stantların sayısı bu sene beş yüz civarındaydı.", ok: false }
    ]
  },
  {
    text: "<p>Küçük burjuva çevrelerindeki yozlaşmış aile ilişkilerini en ince ayrıntılarına kadar irdeleyen \"Dönüşüm\"; toplumun dayattığı, işlevini çoktan yitirmiş kalıplara bilinç düzeyinde başkaldıran bireyin tragedyasını çarpıcı bir biçimde dile getirir.</p><p><b>Bu cümlenin ögeleri sırasıyla aşağıdakilerden hangisinde verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: Küçük burjuva... 'Dönüşüm'; Nesne: toplumun dayattığı... bireyin tragedyasını; Zarf Tümleci: çarpıcı bir biçimde; Yüklem: dile getirir.",
    answers: [
      { text: "Özne - dolaylı tümleç - zarf tümleci - yüklem", ok: false },
      { text: "Nesne - dolaylı tümleç - zarf tümleci - yüklem", ok: false },
      { text: "Özne - nesne - zarf tümleci - yüklem", ok: true },
      { text: "Özne - zarf tümleci - yüklem", ok: false },
      { text: "Nesne - zarf tümleci - yüklem", ok: false }
    ]
  },
  {
    text: "<p>Bozuk kaldırımların üzerinde buz tutmuş çamur parçalarına dikkatle basarak işe gidenler, yol üzerindeki fabrikanın önünde biraz soluklanırlardı.</p><p><b>Bu cümlenin öznesinde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Özne 'Bozuk kaldırımların üzerinde buz tutmuş çamur parçalarına dikkatle basarak işe gidenler' kısmıdır. Burada 'dikkatle' (ilgeç/edat), 'basarak' (zarf-fiil), 'tutmuş' (sıfat-fiil) ve 'bozuk kaldırım' (tamlama) vardır; ancak isim-fiil yoktur.",
    answers: [
      { text: "Sıfat-fiil", ok: false },
      { text: "İsim-fiil", ok: true },
      { text: "İlgeç", ok: false },
      { text: "Zarf-fiil", ok: false },
      { text: "Tamlama", ok: false }
    ]
  },
  {
    text: "<p>Bu yarı aydınlık gecede, siyahımtırak bir mavinin bütün değişik şekillerini kucakladığı bu bahçede, insanın içini bayıltan hanımeli kokuları, sessiz yaz gecelerini anımsatıyordu.</p><p><b>Bu cümlenin ögeleriyle ilgili olarak aşağıda verilen bilgilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Yüklem olan 'anımsatıyordu', 'anımsa-' fiilinden türemiş birleşik zamanlı (hikaye) bir fiildir. Ancak 'gövdeden türemiş basit zamanlı' ifadesi yanlıştır çünkü fiil hem türemiştir hem de birleşik zamanlıdır.",
    answers: [
      { text: "Öznesinde birden fazla isim tamlaması vardır.", ok: false },
      { text: "Zarf tümlecinde belirtme ve niteleme sıfatı almış isim vardır.", ok: false },
      { text: "Dolaylı tümleç, sıfat-fiil grubudur.", ok: false },
      { text: "Nesne, sıfatla nitelenmiş belirtisiz isim tamlamasıdır.", ok: false },
      { text: "Yüklem, gövdeden türemiş basit zamanlı fiildir.", ok: true }
    ]
  },
  {
    text: "<p>Şehrin uğultusundan usanmış ruhumuzun / Nadir duyabileceği taze bir heyecanla / Karıştım Bingöl yaylalarının mavi dumanlarına</p><p><b>Bu dizelerdeki zarf tümleci aşağıdakilerin hangisinde doğru verilmiştir?</b></p>",
    diff: 2,
    expl: "Cümlede 'Nasıl karıştım?' sorusunun cevabı 'Şehrin uğultusundan usanmış ruhumuzun nadir duyabileceği taze bir heyecanla' öbeğidir ve zarf tümleci görevindedir.",
    answers: [
      { text: "Nadir duyabileceği taze bir heyecanla", ok: false },
      { text: "Şehrin uğultusundan usanmış ruhumuzun nadir duyabileceği taze bir heyecanla", ok: true },
      { text: "Şehrin uğultusundan usanmış ruhumuzun", ok: false },
      { text: "Bingöl yaylalarının mavi dumanlarına", ok: false },
      { text: "Nadir duyabileceği taze bir heyecanla Bingöl yaylalarının mavi dumanlarına", ok: false }
    ]
  },
  {
    text: "<p><u>Bu bakışları</u>; <u>kucaklaşma hıçkırıklarına benzeyen gülüşlerine</u> <u>gece gündüz</u> <u>yârenlik eder</u>.</p><p><b>Bu cümle ögelerine ayrıldığında numaralanmış ifadelerden hangileri yanlış bir öge gösterimi olacaktır?</b></p>",
    diff: 3,
    expl: "II numaralı 'kucaklaşma hıçkırıklarına benzeyen gülüşlerine' öbeği bir bütündür ve yer tamlayıcısıdır, bölünemez. Bu yüzden gösterim yanlıştır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Mustafa Kemal Atatürk, bilimin önemini \"Eğer bir gün benim sözlerim bilimle ters düşerse bilimi seçin.\" sözüyle vurgulamıştır.</p><p><b>Bu cümleyle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "Yüklem 'vurgulamıştır' basit zamanlı bir fiildir. Seçenekte belirtilen 'birleşik zamanlı türemiş fiil' ifadesi yanlıştır. Bildirme eki (-dır) fiili birleşik zamanlı yapmaz.",
    answers: [
      { text: "Dört ögeli bir cümledir.", ok: false },
      { text: "Nesnesi belirtili isim tamlamasıdır.", ok: false },
      { text: "Edat grubu zarf tümleci görevindedir.", ok: false },
      { text: "Yüklemi birleşik zamanlı türemiş fiildir.", ok: true },
      { text: "Alıntı cümlesi tamlayan görevindedir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Cümle... ana unsuru yargıyı taşıyan yüklem olan kelime veya kelime dizisidir... (V) Bu vasıftaki söz dizilerinin art arda sıralanmasıyla metinler oluşturulur.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V numaralı cümle 'Bu vasıftaki söz dizilerinin art arda sıralanmasıyla' (zarf tümleci), 'metinler' (özne), 'oluşturulur' (yüklem) şeklinde üç ögelidir. İki ögeli olduğu bilgisi yanlıştır.",
    answers: [
      { text: "I. cümlenin yüklemi sıfat-fiil grubudur.", ok: false },
      { text: "II. cümlenin yüklemi bağlama grubudur.", ok: false },
      { text: "III. cümle, üç ögeli bir cümledir.", ok: false },
      { text: "IV. cümlenin öznesi sıfat tamlamasıdır.", ok: false },
      { text: "V. cümle, iki ögeli bir cümledir.", ok: true }
    ]
  },
  {
    text: "<p>\"Sonsuz mor bir kubbeyi andıran dumanlı göklerden hayatın gelip geçiciliği yansıyordu ağaçlardaki yaprakların üzerine.\"</p><p><b>Bu cümleyle ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "Cümlede isim-fiil (-ma, -ış, -mak) eki almış bir sözcük bulunmamaktadır. Dolayısıyla üç fiilimsi türünün de örneklendiği bilgisi yanlıştır.",
    answers: [
      { text: "Dolaylı tümleçlerden biri, sıfat tamlamasından oluşmaktadır.", ok: false },
      { text: "Öznesinde zarf-fiil vardır.", ok: false },
      { text: "Dolaylı tümleçlerden biri, isim tamlamasıdır.", ok: false },
      { text: "Yüklem birleşik zamanlı bir fiildir.", ok: false },
      { text: "Tümleçlerde üç fiilimsi türü de örneklenmiştir.", ok: true }
    ]
  },
  {
    text: "<p>Onu her gördüğümde, etrafımdaki havanın birdenbire bir yıldız doğmuş gibi altın akislerle aydınlandığını hissediyorum.</p><p><b>Bu cümlenin ögelerinin doğru sıralaması aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "Zarf Tümleci: Onu her gördüğümde; Nesne: etrafımdaki havanın... aydınlandığını; Yüklem: hissediyorum. Gizli özne (Ben) sıralamaya dahil edilmez.",
    answers: [
      { text: "Nesne - zarf tümleci - yüklem", ok: false },
      { text: "Özne - zarf tümleci - yüklem", ok: false },
      { text: "Nesne - yüklem", ok: false },
      { text: "Zarf tümleci - nesne - yüklem", ok: true },
      { text: "Zarf tümleci - özne - yüklem", ok: false }
    ]
  }
];

// ============================================================================
// CÜMLENİN ÖGELERİ - TEST 3
// ============================================================================
export const TUR_CUMLE_OGELERI_TEST_3: McQ[] = [
  {
    text: "<p>İstanbul'da çok uzun zaman yaşamış, yaşadıkça birçok semtini sevmiş bir insan bir süre sonra bu şehrin sonu gelmez güzellikleri olduğuna inanır.</p><p><b>Bu cümlenin öge sıralanışı aşağıdakilerin hangisinde sırasıyla doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "Özne: İstanbul'da... sevmiş bir insan / Zarf Tümleci: bir süre sonra / Dolaylı Tümleç: bu şehrin sonu gelmez güzellikleri olduğuna / Yüklem: inanır.",
    answers: [
      { text: "Özne - zarf tümleci - dolaylı tümleç - yüklem", ok: true },
      { text: "Özne - zarf tümleci - zarf tümleci - yüklem", ok: false },
      { text: "Dolaylı tümleç - zarf tümleci - özne - yüklem", ok: false },
      { text: "Dolaylı tümleç - zarf tümleci - nesne - yüklem", ok: false },
      { text: "Özne - nesne - dolaylı tümleç - yüklem", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinin yüklemi diğerlerinden farklı bir tamlamadan oluşmaktadır?</b></p>",
    diff: 3,
    expl: "E seçeneğinde yüklem 'ömrümün en talihli günlerinden biriydi' isim tamlamasıdır. Diğer şıklarda yüklemler sıfat-fiil grubundan (sıfat tamlaması) oluşmaktadır.",
    answers: [
      { text: "Orası ağaçların yapraklarını hiç dökmediği bir diyardır.", ok: false },
      { text: "Bu bahçenin göz alıcı yanı her mevsim ayrı açan çiçeklerdir.", ok: false },
      { text: "Unutulmuş küçük bir köyün havasıdır yürekleri titreten bu ses.", ok: false },
      { text: "Mevlâna, dünya ile sınırlı kalmayıp kâinatı birlik içinde gören bir dehadır.", ok: false },
      { text: "Ege kıyılarında geçirdiği o günler ömrümün en talihli günlerinden biriydi.", ok: true }
    ]
  },
  {
    text: "<p>Ölümün zaferinin yanı başında imkânsız bir kışın kasıp kavurduğu bir bahçede buzların kilidi çözülür çözülmez başlayan bahar gibi bir hayat türküsü yükseliyordu.</p><p><b>Bu cümlenin öznesinde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Özne 'buzların... hayat türküsü' kısmıdır. 'çözülür çözülmez' zarf-fiildir, 'başlayan' sıfat-fiildir, 'hayat türküsü' isim tamlamasıdır, 'gibi' edat grubudur. Öznede isim-fiil bulunmamaktadır.",
    answers: [
      { text: "İsim tamlaması", ok: false },
      { text: "Zarf-fiil", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "İsim-fiil", ok: true },
      { text: "Edat grubu", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerinde hangisinde \"özne\" yoktur?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'gözü dönmek' bir deyimdir ve bu tür deyimleşmiş yüklemler (geçişsiz/edilgen karakterli olanlar) bazen mantıksal bir özne gerektirmez. Diğer şıklarda özneler sırasıyla: Ben, o, o ve onlar'dır.",
    answers: [
      { text: "Bir ara onun çalışmalarına da göz atacağım.", ok: false },
      { text: "Çizimlerinde Van Gogh'dan ilham almış.", ok: false },
      { text: "Her istediğini yaparsan ilk fırsatta surat asar.", ok: false },
      { text: "Yapılan baskı hatalarını görünce gözü döndü.", ok: true },
      { text: "Bana büyük bir sevgiyle kucaklarını açmışlardı.", ok: false }
    ]
  },
  {
    text: "<p>I. Bizden yüz çevirmişler, bizimle hasım olmuşlardı.<br/>II. Mide hastası olduğunu öğrenene kadar yaşadığı her şeyi içine atıyordu.<br/>III. Bu sırrı çözmeye kalkışırsan dibini bulamazsın.<br/>IV. Topluma örnek niteliğindeki davranışlarıyla herkesin gözüne girdi.</p><p><b>Yukarıda numaralanmış cümlelerin hangilerinde \"nesne\" vardır?</b></p>",
    diff: 3,
    expl: "II. cümlede 'yaşadığı her şeyi' nesnedir. III. cümlede 'dibini' nesnedir. I ve IV. cümlelerde nesne bulunmamaktadır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve IV", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"deyim\" diğerlerinden farklı bir öge içinde yer almaktadır?</b></p>",
    diff: 3,
    expl: "A seçeneğinde 'surat asınca' zarf-fiil ekiyle zarf tümleci olmuştur. Diğer şıklardaki deyimler (surat etmek, suratını ekşitmek, surat mahkeme duvarı, surat kalmamak) yüklem grubunda yer alır.",
    answers: [
      { text: "Babam biraz surat asınca annem katıldı gülmekten.", ok: true },
      { text: "Şimdi eve dönsek çocuklar ağlar, kadın surat eder.", ok: false },
      { text: "Ona söylediğimi başkalarına anlattığını duyunca suratımı ekşittim.", ok: false },
      { text: "Maşallah, sizin kızdaki surat da mahkeme duvarı.", ok: false },
      { text: "Olaylar duyulunca ikimizde de birbirimize bakacak surat kalmamıştı.", ok: false }
    ]
  },
  {
    text: "<p>Ey mavi göklerin beyaz ve kızıl süsü<br/>Kız kardeşimin gelinliği, şehidimin son örtüsü<br/>Işık ışık, dalga dalga bayrağım,<br/>Senin destanını okudum, senin destanını yazacağım.</p><p><b>Bu dörtlükteki ünlem grubunda aşağıdakilerden hangisine yer verilmemiştir?</b></p>",
    diff: 3,
    expl: "Ünlem grubunda tamlayanı kişi zamiri olan belirtili isim tamlaması (senin destanın) bulunmamaktadır; çünkü 'senin destanın' ünlem grubunda değil, cümlenin nesnesi konumundadır.",
    answers: [
      { text: "Tamlananı sıfat tamlaması olan isim tamlaması", ok: false },
      { text: "Tamlayanı sıfat tamlaması olan isim tamlaması", ok: false },
      { text: "Tamlananı bağlama grubu olan isim tamlaması", ok: false },
      { text: "Her iki unsuru da sıfat tamlaması olan isim tamlaması", ok: false },
      { text: "Tamlayanı kişi zamiri olan belirtili isim tamlaması", ok: true }
    ]
  },
  {
    text: "<p>Türkçenin söz diziminde bir cümlede birden fazla, farklı yer tamlayıcısı bulunabilir.</p><p><b>Aşağıdaki cümlelerin hangisinde bu durumu örnekleyecek bir kullanım yoktur?</b></p>",
    diff: 3,
    expl: "C seçeneğinde altı çizili olan tüm yer bildiren ifadeler (ormanlardan, derelerden, köprülerden...) tek bir 'Nereden?' sorusuna yanıt verir, dolayısıyla tek bir ögedir. Diğer şıklarda farklı sorulara (Nerede, Kime, Neyden vb.) yanıt veren ayrı ögeler vardır.",
    answers: [
      { text: "Ben, bizim dut ağacının dibinde, mahalle çocuklarına o günkü oynadığımız oyundan, sudan ve su kenarından bahsetmekteyim.", ok: false },
      { text: "Seni biraz olsun mutlu edebilmek için tozlu yollarından geçtiğim uzak iklimden şarkılar getirdim sana.", ok: false },
      { text: "Ormanlardan, derelerden, köprülerden, tepelerden, uçurumlardan şimşek gibi geçti.", ok: true },
      { text: "Yazın tüm akrabaları Ankara'dan onun deniz kenarındaki evine gidiyor.", ok: false },
      { text: "Şimdi Van'dan, Adana'dan, Trabzon'dan geliyor birbirinden farklı karakterde insanlar yanıma.", ok: false }
    ]
  },
  {
    text: "<p>Türkçenin söz diziminde bir cümlede birden fazla, farklı zarf tümleci bulunabilir.</p><p><b>Aşağıdaki cümlelerin hangisinde bu durum örneklenmiştir?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'Onu köydeki ahşap evimizin önünde ilk defa gördüğümde' (Ne zaman?) ve 'çok ama çok' (Ne kadar?) sorularına yanıt veren iki farklı zarf tümleci vardır.",
    answers: [
      { text: "Geçmiş günleri, kaybettiği yerleri düşünerek benliği sarsıla sarsıla dinliyordu.", ok: false },
      { text: "Birden uyanan deniz aygırları gibi hiddetli bir gürültü çıkararak kımıldandı.", ok: false },
      { text: "Buzların kilidi çözülür çözülmez başlayan o acayip baharlar gibi yavaş yavaş hayatın türküsü yükseliyordu.", ok: false },
      { text: "Onu köydeki ahşap evimizin önünde ilk defa gördüğümde çok ama çok heyecanlanmıştım.", ok: true },
      { text: "Yavaş yavaş akın ediyordu insanlar köyden kente tüm hayallerini de yanına alarak.", ok: false }
    ]
  },
  {
    text: "<p>İstanbul'un fethinin beş yüzüncü yıldönümüne ait bahislerin gazetelerde sık sık yer aldığı bu günlerde, bu gazel bana birdenbire bu fethin genç yaşlarıma karışmış canlı bir hatırası gibi göründü.</p><p><b>Bu cümleyle ilgili olarak aşağıdaki değerlendirmelerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "C seçeneği yanlıştır; çünkü cümlede iki farklı sıfat-fiil grubu (Biri 'gazetelerde... yer aldığı', diğeri 'bu fethin... hatırası') vardır fakat her ikisi de zarf tümlecinin içinde yer alır. Yer tamlayıcısı değildir.",
    answers: [
      { text: "Öznesi sıfat tamlamasıdır.", ok: false },
      { text: "Edat grubu zarf tümleci görevindedir.", ok: false },
      { text: "Sıfat-fiil grubu yer tamlayıcısıdır.", ok: true },
      { text: "Zincirleme isim tamlamasına yer verilmiştir.", ok: false },
      { text: "Birden çok zarf tümleci bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"özne\" bulunmaktadır?</b></p>",
    diff: 3,
    expl: "E seçeneğinde 'bu insanlar, bu kalabalık' özne görevindedir. Diğer seçenekler edilgen yapıda veya özne gerektirmeyen kalıplaşmış (deyimleşmiş) yapılardır.",
    answers: [
      { text: "Yol tehlikeli bir hâl aldığı için yürüyüşten vazgeçildi.", ok: false },
      { text: "Diplomalar dağıtıldıktan sonra gece sabaha kadar eğlenildi.", ok: false },
      { text: "Bu yıl çift yıl olduğu için sınavı mutlaka başarmak gerek.", ok: false },
      { text: "Doğum gününde onun için hazırladığım sofrayı görünce etekleri zil çaldı.", ok: false },
      { text: "Bu insanlar, bu kalabalık niçin geliyor benim canım memleketime?", ok: true }
    ]
  },
  {
    text: "<p>(I) En büyük zaafım çocuklardır. (II) Küçük bir çocukla, saatlerce sohbet ederim. (III) Onların temiz ve riyasız ruhları benim için tesellidir. (IV) Şu koca apartmandaki çocukların hepsi, benim en büyük dostlarımdır. (V) Yanıma geldiklerinde yazımı yarıda bırakıp konuşurum onlarla.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde cümle dışı bir unsura yer verilmiştir?</b></p>",
    diff: 3,
    expl: "III. cümlede 've' bağlacı yer almaktadır. Bağlaçlar, ünlemler ve hitap sözleri cümle çözümlemesinde cümle dışı unsur (CDU) olarak kabul edilir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];