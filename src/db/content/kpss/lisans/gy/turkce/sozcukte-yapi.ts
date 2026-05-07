// Sözcükte Yapı
import type { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜKTE YAPI - TEST 1
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_1: McQ[] = [
  {
    text: "<p>1462 yılında Çanakkale Boğazı'nın en dar yerine yaptırılan iki kaleden biri olan Çimenlik Kalesi, 18 Mart 1982'de müze olarak <u>I. açıldı</u>. Müzedeki koleksiyon; savaş alanlarında yüzey <u>II. araştırması</u> yapılarak, köyler <u>III. taranarak</u> <u>IV. toplanan</u> ve bağışlanan objelerden oluşmaktadır. Bu Çanakkale Deniz Müzesi; lojman binası, kalenin içindeki iç kale, Nusret Mayın Gemisi ve bahçe olmak üzere dört <u>V. bölümden</u> oluşmaktadır.</p><p><b>Bu parçadaki numaralanmış sözcüklerin hangisi, kökünün türü yönüyle diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I. aç(mak) - fiil kökü, II. ara(mak) - fiil kökü, III. tara(mak) - fiil kökü, V. böl(mek) - fiil köküdür. Ancak IV. 'toplanan' sözcüğünün kökü 'top' (yığın) isim köküdür.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Temmuzun <u>I. kımıldamayan</u> ağaçları, çakıldan daha fazla tanesi olan tek kollu her bir yaprak sapına tutunmuş rüzgâr... Haydi, rüzgârın sesine eşlik edip hep birlikte hüzünlü bir şarkı <u>II. söyleyelim</u>. Sonuçta on bir yıllık yokluktan sonra nihayet Santiago'ya, doğduğum köye yaklaşıyorum. Atım <u>III. ilerliyor</u> ve ben, dört ayaklının pürdikkat kulakları ve dans eder gibi görünen toynak vuruşlarıyla aynı yerde dönerek, belki de aynı sıradağlardan geçerek, güzergâhın ve bilinmezliğin huzursuz eden gizemli <u>IV. duyguları</u> içinde, varlığımın <u>V. derinliklerinden</u> emek sarf etmiş parmaklarıma kadar, on bir yıl evvel ölen atım için ağlıyorum.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi fiil kökünden türemiştir?</b></p>",
    diff: 2,
    expl: "I. kımıl (yansıma isim), II. söz (isim kökü), III. ileri (isim kökü), V. var (isim kökü). IV numaralı 'duyguları' sözcüğünün kökü ise 'duy(mak)' fiilidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Eski denizcilerin <u>I. ölçüm</u> için sık başvurdukları bir yöntem \"kör tahmin\"di. Suya bırakılan bir kütük ve ona bağlı ip ile astronomik gözlemlerden <u>II. yararlanılırdı</u>. Denizci geminin pruvasından bir ipe bağlı kütüğü denize atıp <u>III. sürüklenişini</u> gözlemlerdi. Kütüğün gemi mesafesini kat etmesi için geçen <u>IV. süreyi</u> belirleyen denizciler, gemilerinin hızını <u>V. hesaplarlardı</u>. Ardından Güneş'in ve yıldızların açısını ölçerek geminin enlemini belirlerlerdi.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri isim kökünden türemiştir?</b></p>",
    diff: 2,
    expl: "I. ölç(mek), III. sür(mek), IV. sür(mek) fiil köküdür. II numaralı 'yöntem' sözcüğünün kökü 'yön' (isim), V numaralı 'hesaplarlardı' sözcüğünün kökü 'hesap' (isim) köküdür.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve V", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Yazın türü olarak şiirin temel iki ögesi olan <u>I. içerik</u> ve biçim <u>II. arasında</u> uyuşmazlık olduğunda biçim, içeriğin gelişmesinin engeli hâline gelir ve içeriğin zorlaması, biçimi altüst eder. Çünkü anlam, <u>III. dil</u> ile sözcüklerin birbiriyle <u>IV. dokulaşmasından</u> oluşur ya da dil ile biçimin dokulaşması, anlamı <u>V. yüklenir</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi, sesteş kök özelliğine sahip <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "I (iç), II (ara), III (dil) ve IV (doku) sözcüklerinin hem isim hem fiil olarak kullanılabilen, aralarında anlam bağı olmayan sesteş eşleri vardır. Ancak V numaralı 'yük' sözcüğünün sesteşi yoktur, mecaz ve yan anlamları vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Bir sözcüğe hem yapım hem çekim eki gelirse öncelik -istisna durumlar hariç- yapım ekinindir.</p><p><b>Aşağıdaki cümlelerin hangisinde söz konusu istisna durum örneklendirilmemiştir?</b></p>",
    diff: 3,
    expl: "Türkçede önce çekim, sonra yapım eki alan istisna kelimeler vardır: A'da 'teyze-m-gil', B'de 'boy-un-ca', C'de 'sayı-sı-nda-ki', D'de 'tara-r-ken'. E seçeneğinde böyle bir istisnai diziliş yoktur.",
    answers: [
      { text: "Teyzemgil bu yazı Karadeniz'de, eşinin memleketinde geçirdi.", ok: false },
      { text: "Ömrüm boyunca bana kazandırdıkları için ona minnettar olacağım.", ok: false },
      { text: "Derginin son sayısındaki makaleler, çoğunlukla öğretim görevlileri tarafından yazılmış.", ok: false },
      { text: "Dergileri tararken Mehmet Âkif Ersoy'un hayatı ile ilgili bir yazıya rastladım.", ok: false },
      { text: "Evin anahtarlarından birini komşuma, diğerini anneme bıraktım yine.", ok: true }
    ]
  },
  {
    text: "<p>Anayasaya göre yasalar önünde kadın-erkek <u>I. eşitliği</u> güvence altındadır. Ancak bu eşitliği <u>II. başlatmak</u> her zaman kolay olmamıştır. Bu yüzden pozitif <u>III. ayrımcılık</u> kavramı <u>IV. gündeme</u> gelmiştir. Örneğin, üniversitelerde veya Meclis gibi karar alma mekanizmalarında kadınların daha fazla yer alabilmesi için belli oranda kadının <u>V. seçilmesine</u> önceden karar verilip uygulanması sağlanmıştır.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri fiil kökünden türemiştir?</b></p>",
    diff: 2,
    expl: "I. eş (isim), II. baş (isim), IV. gün (isim). III numaralı 'ayrımcılık' (ayır-mak) ve V numaralı 'seçilmesine' (seç-mek) sözcükleri fiil kökünden türemiştir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Çoktan</u> terk edilmiş olan eski köy evinin <u>II. sıvasız</u> duvarları, <u>III. yılların</u> verdiği yıpranmışlıkla karşı karşıyaydı. Evin köklü geçmişi, her bir taşında ve tahtasında hissedilebiliyordu. Aydınlık bir geleceği hayal eden eski sahipleri, evin her köşesine <u>IV. umut</u> ve sevgi işlemişti. Ancak zamanla, bu abartılı hayaller yerini sessiz bir gerçekliğe bırakmış ve ev, yalnızca <u>V. geçmişin</u> bir yansıması olarak orada durmaya devam etmişti.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'umut' sözcüğünün kökü 'um(mak)' fiilidir ve sözcük '-ut' fiilden isim yapım eki almıştır. Bu nedenle 'kökü isim köküdür' ifadesi yanlıştır.",
    answers: [
      { text: "I. sözcüğün isim kökünden türemiştir.", ok: false },
      { text: "II. sözcüğün kökü ortak köktür.", ok: false },
      { text: "III. sözcüğün kökü sesteş köktür.", ok: false },
      { text: "IV. sözcüğün kökü isim köküdür.", ok: true },
      { text: "V. sözcüğün kökü fiil köküdür.", ok: false }
    ]
  },
  {
    text: "<p>En sevilen çiçeklerden karanfil, her mevsim kolayca bulunmasıyla süs ve hediye çiçeği olarak tercih edilir. <u>I. Çeşitli</u> renklere sahip çiçeklerdendir. Bu renklerin <u>II. değişik</u> anlamları olup hediye ederken hangi rengin ne <u>III. anlam</u> taşıdığını önceden öğrenmeniz doğru olacaktır. Evde <u>IV. yetiştirmek</u> <u>V. istiyorsanız</u> biraz nazlı olduğunu ve gölge sevdiğini hesaba katmalısınız.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi yapım eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "I (çeşit-li), II (değiş-ik), III (anla-m), IV (yet-iş-tir-mek) sözcükleri yapım eki almıştır. V numaralı 'istiyorsanız' (iste-yor-sa-nız) sözcüğü sadece çekim ekleri almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>• Birden fazla isim çekim eki almıştır.<br>• Birden fazla yapım eki almıştır.</p><p><b>Aşağıdaki dizelerin hangisinde geçen altı çizili sözcük bu özelliklerin ikisini de taşımaktadır?</b></p>",
    diff: 3,
    expl: "'tutukluğunda' sözcüğü tut-uk-luk (iki yapım eki) ve -un-da (iyelik ve bulunma: iki çekim eki) almıştır. Her iki koşulu da sağlar.",
    answers: [
      { text: "<u>Uçurumdan</u> sana bir el uzarken / İttiğin yanına kalır sanma", ok: false },
      { text: "Bir kalp <u>çarpıntısı</u> gitmek bilmeyen / Sana nasıl anlatayım bilmem ki", ok: false },
      { text: "Kara gözlüm unutturdu kendini / Ardından <u>dökmedik</u> yaş bırakmadı", ok: false },
      { text: "Yalnızlık kendi <u>tutukluğunda</u> özgür / Boyuna bekler dönsün diye", ok: true },
      { text: "Dili çözülüyor <u>gecelerin</u> / Gölgeler kaçışıyor derine", ok: false }
    ]
  },
  {
    text: "<p><b>Cümleler:</b><br>I. Burcun <u>güney</u> yüzünde sivri kemerli, çift kanatlı kapı yer alır.<br>II. <u>Tiyatronun</u> amaçlarından biri kişilerde değişiklik meydana getirmektir.<br>III. Kış mevsiminde <u>cildimiz</u> daha fazla kurumaktadır.<br>IV. Kişiye en doğru <u>yolu</u> gösteren şey kendi vicdanıdır.</p><p><b>Açıklamalar:</b><br>a. İlgi eki<br>b. Yapım eki<br>c. Belirtme durum eki<br>d. Kişi eki<br>e. İyelik eki</p><p><b>Yukarıda verilen açıklamalarla cümlelerdeki altı çizili sözcükler eşleştirildiğinde aşağıdakilerden hangisi dışarıda kalır?</b></p>",
    diff: 2,
    expl: "I. güney (yapım eki - b), II. tiyatronun (ilgi eki - a), III. cildimiz (iyelik eki - e), IV. yolu (belirtme eki - c). Kişi eki (d) dışarıda kalır.",
    answers: [
      { text: "a", ok: false },
      { text: "b", ok: false },
      { text: "c", ok: false },
      { text: "d", ok: true },
      { text: "e", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"-ar/-er/-r/-Ur\" eki diğerlerinden farklı işlevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A (bilin-ir), B (bulun-ur), C (yararlanıl-ır), E (fark edil-ir) seçeneklerinde fiilden isim (sıfat-fiil) yapım eki olarak kullanılmıştır. D seçeneğindeki 'gideriyor' sözcüğünde ise 'git-er' (fiilden fiil) yapım ekidir.",
    answers: [
      { text: "Lezzetli yemekleri ve eşsiz atmosferiyle şehirdeki <u>bilinir</u> restoranlar, turistler arasında oldukça popülerdir.", ok: false },
      { text: "Antik kalıntılarla dolu bu ormanda, zor <u>bulunur</u> bitkiler ve hayvan türleri keşfedilmeyi bekliyor.", ok: false },
      { text: "Eski el yazmaları, tarihin derinliklerine inmek için sıkça <u>yararlanılır</u> kaynaklar arasında yerini alır.", ok: false },
      { text: "Her ay ana baba ocağına gidip onlarla hem hasret <u>gideriyor</u> hem de ruhumu dinleyebiliyordum.", ok: true },
      { text: "Projede yapılan küçük bir dikkatsizlik, raporun sonunda fark <u>edilir</u> bir hata olarak ortaya çıktı.", ok: false }
    ]
  },
  {
    text: "<p>Pencereyi açtım, sabahın sevinç <u>I. dolu</u> serinliğini yüzümde duydum. Akdeniz'in yüzü pırıltılar içinde. Güneş, <u>II. bulutsuz</u> gökyüzünün ortasında koca bir <u>III. delik!</u> Denizin aydın yüzü daha önce görmediğin bir mavi... Suyun içinde <u>IV. ışıklar</u>; aka, sarıya, yeşile dönüyor sonra yine mavileşiyor. Denizin gölgeli yüzü karadut. Çok eskiden sevdiğim bir komşu kızının pırıl pırıl gölge <u>V. vurmuş</u> yüzü...</p><p><b>Bu parçada altı çizili sözcüklerden hangisi farklı işlevde yapım eki almıştır?</b></p>",
    diff: 2,
    expl: "I. dol(mak)-u, III. del(mek)-ik, IV. ışı(mak)-k ve V. vur(mak)-muş fiilden isim yapım eki almıştır. II numaralı bulut-suz sözcüğü ise isimden isim yapım eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI - TEST 2 (Temel Düzeyde Sözcükte Yapı Çıkmış Sorular Analizi)
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_2: McQ[] = [
  {
    text: "<p>Alanda ağaç, yok denecek kadar az. Tek tük kırmızı yemişleri <u>I. parıldayan</u> ardıç, ahlat gibi dikenli çalı ve bitkiler var. Bunların nasıl olup da <u>II. büyüyemedikleri</u> pek çabuk anlaşılıyor. Dallarının çoğunu daha taze iken keçiler <u>III. kemirmiş</u>, bir iki karış boyunda yere yatık çalılar hâline getirmiş. Keçiler her yıl süren taze filizleri <u>IV. kırptıkları</u> için bunlar bir türlü boy atamamış, yere <u>V. serilmiş</u> kalmışlar.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi, kökünün türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'parıldayan' sözcüğünün kökü yansıma bir sözcük olan 'parıl'dır ve yansıma kökler isim kökü kabul edilir. Diğer sözcüklerin kökleri ise 'büyü(mek)', 'kemir(mek)', 'kırp(mak)' ve 'ser(mek)' olup fiil köküdür.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sabah olmuştu. Kapının aralığından bembeyaz <u>I. ışık</u> çizgileri parlıyordu. O hiç öyle dalıp kalmazdı, güneş doğmadan <u>II. uyanırdı</u>. Doğruldu, musandıradan atladı. Ayakkabılarını giymeden yürüdü. Hızla <u>III. sürmeyi</u> çekti. Birdenbire açılan kapıdan dükkânı <u>IV. dolduran</u> aydınlığın içinde, bıyıkları yeni terlemiş delikanlıyı <u>V. gördü</u>.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi kökü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'ışık' sözcüğünün kökü 'ışık' ismi olarak kabul edilir (Kimi kaynaklarda 'ışı(mak)' alınsa da ÖSYM tipi sorularda bağlama göre değerlendirilir). Diğerleri ise sırasıyla uyu(mak), sür(mek), dol(mak) ve gör(mek) fiil köklerinden türemiştir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Afrika'da Sahra Çölü'nün güneyi boyunca uzanan <u>I. bölgeye</u> düşen <u>II. yıllık</u> yağış miktarı, ortalamanın altına düşünce Ravana köyünün <u>III. yerleşik</u> nüfusu 1985 yılından itibaren <u>IV. azalmaya</u> <u>V. başlamış</u>.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi kökü bakımından farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'bölgeye' sözcüğünün kökü 'böl(mek)' fiilidir. II (yıl), III (yer), IV (az) ve V (baş) sözcüklerinin kökleri ise isimdir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ürdün'ün güney ucunda bulunan Akabe, ülkenin en turistik <u>I. bölgelerinden</u> biri. Dört mevsim tatile gidilebilen şehir; deniz ve su altı <u>II. tutkunlarını</u> kendisine çekiyor. Kızıldeniz'in rengârenk balıkları ve eşsiz <u>III. kumsalları</u>, kışın <u>IV. ılık</u> geçmesi, burayı dünyanın dört bir yanından akın akın gelen dalgıçların <u>V. uğrak</u> noktası hâline getiriyor.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi, farklı bir kökten türemiştir?</b></p>",
    diff: 2,
    expl: "III numaralı 'kumsalları' sözcüğünün kökü 'kum' (isim kökü) dur. 'bölgelerinden' (böl-mek), 'tutkunlarını' (tut-mak), 'ılık' (ılı-mak), 'uğrak' (uğra-mak) sözcüklerinin kökleri ise fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Gelecekteki bilişsel sistemlerin çevreyle <u>I. etkileşim</u> hâlinde olması bekleniyor. Canlı organizmaların sinir sistemlerinden <u>II. esinlenerek</u> geliştirilen bu mekanizmaların en önemli <u>III. özelliği</u>, klasik işlemcilerin aksine hafıza ve işlemci birimlerinin bir arada olmasıdır. İnsan beynine benzer biçimde <u>IV. çalışan</u> elektronik cihazlar henüz tasarlanmamış olsa da yakın zamanda bu konuda önemli gelişmeler <u>V. yaşanması</u> bekleniyor.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri isim kökünden türemiştir?</b></p>",
    diff: 3,
    expl: "III numaralı 'özelliği' (öz) ve V numaralı 'yaşanması' (yaş) sözcüklerinin kökleri isimdir. I (et-mek), II (es-mek), IV (çalış-mak) sözcüklerinin kökleri ise fiildir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Sağlık sektöründe yapay zekâ uygulamaları henüz geliştirilme <u>I. aşamasında</u>. Yakın gelecekte hastaların yaşam <u>II. bulgularını</u> ve semptomlarını monitörde <u>III. gözlemleyen</u>, değerlerde anormallik görüldüğünde <u>IV. uyarılar</u> veren ve kişilerin sağlık durumları hakkında tahminlerde bulunan cihazların <u>V. üretilmesi</u> mümkün gibi duruyor.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisinin kökü, türü yönüyle diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "III numaralı 'gözlemleyen' sözcüğünün kökü 'göz' (isim kökü) dür. I (aş-mak), II (bul-mak), IV (uyar-mak), V (üre-mek) sözcüklerinin kökleri ise fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Her yıl okyanuslara karışan milyonlarca ton plastik, <u>I. akıntılara</u> kapılarak okyanus <u>II. çöplükleri</u> olarak <u>III. adlandırılan</u> bölgelerde birikiyor. Zamanla ufak parçalara ayrılan bu atıklar <u>IV. yüzlerce</u> yıldır çevreyi <u>V. kirletmeye</u> ve canlılar için tehdit oluşturmaya devam ediyor.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisinin kökü, türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'akıntılara' sözcüğünün kökü 'ak(mak)' fiil köküdür. II (çöp), III (ad), IV (yüz - sayı ismidir), V (kir) sözcüklerinin kökleri ise isim köküdür.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat-estetik <u>I. bağlantısı</u> üzerinde duran Tanpınar, gençlik <u>II. yıllarından</u> hayatının <u>III. sonuna</u> kadar denilebilir ki yalnız güzel eserleri <u>IV. önemsemiş</u>, onlardan daha üstün bir değerin varlığını <u>V. tanımamıştır</u>.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangileri hem yapım hem de çekim eki almıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'bağlantısı' (bağ-la-n-tı-sı -> '-tı' yapım, '-sı' iyelik/çekim ekidir) ve IV numaralı 'önemsemiş' (ön-em-se-miş -> '-se' yapım, '-miş' öğrenilen geçmiş zaman/çekim ekidir) sözcükleri hem yapım hem çekim eki almıştır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Sosyalleşme <u>I. süreci</u>; gittikçe yoğunlaşan kontrol, yön verme ve biçimlendirme etkisiyle doğal bir <u>II. varlık</u> olan insanı; uygar, kanunlara <u>III. saygılı</u>, diğer insanların hak ve sorumluluklarını hesaba katan, <u>IV. kendinden</u> emin, sakin, mutlu, mesleki yeterliğe sahip bireyler hâline <u>V. getirir</u>.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi yapım eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı 'kendinden' sözcüğü (kendi-n-den) yalnızca kaynaştırma ünsüzü ve ayrılma durum eki (çekim eki) almıştır, yapım eki yoktur. Diğerleri sırasıyla yapım eki almıştır (sür-eç, var-lık, say-gı-lı, gel-tir(getir)).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sanat; izleyicilerin bakış <u>I. açısını</u> genişleten, farklı <u>II. deneyim</u> ve duyguları hissetmelerini sağlayan benzersiz bir <u>III. yeteneğe</u> sahiptir. Sanat hakkında <u>IV. bilgili</u> olmanız ya da tamamen acemi olmanız fark etmez. Bazı eserler sizi yakalar ve size <u>V. esinlenme</u> imkânı verir.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri hem yapım hem de çekim eki almıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'açısını' (aç-ı-sı-n-ı -> -ı yapım, -sı ve -nı çekim) ile III numaralı 'yeteneğe' (yet-enek-e -> -enek yapım, -e yönelme/çekim) sözcükleri hem yapım hem çekim eki almıştır. Diğer sözcükler yalnızca yapım eki almıştır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI II - TEST 3
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_3: McQ[] = [
  {
    text: "<p>Kadife <u>I. çiçeği</u>, kırmızı ağırlıklı olmak üzere sıcak renklerde bir çiçektir. Dikine uzayan bir bitkidir ve genellikle 15-30 cm arasında uzar. <u>II. İklim</u> tipi seçmez ama bol güneş ister. Mevsimlik ve kolay yetişen bir çiçektir. <u>III. Çiçeğin</u> yaprakları da en az çiçeği kadar keskin kokuludur. Bu <u>IV. kokunun</u> yoğunluğu alerjik bünyeye sahip <u>V. kişileri</u> olumsuz etkileyebilir.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi \"belirtme durumu eki\" almıştır?</b></p>",
    diff: 2,
    expl: "V numaralı 'kişileri' sözcüğü 'Kimi olumsuz etkileyebilir?' sorusuna yanıt verdiği için aldığı '-i' belirtme durum ekidir. Diğer sözcüklerdeki ekler (çiçek-i, iklim tip-i, çiçek-in, koku-nun) iyelik ve tamlayan (ilgi) ekleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>İngilizcenin en popüler dil olmasının altında yatan <u>I. nedenlerden</u> biri de dünyada İngilizceyi ikinci veya yabancı dil olarak kullanan insanların <u>II. sayısının</u> İngilizceyi birinci dil olarak <u>III. konuşanlardan</u> daha fazla olmasıdır. 2020 yılında yapılan bir araştırmaya göre çeşitli nedenlerle İngilizce iletişim <u>IV. kuranların</u> sayısı 2 <u>V. milyardan</u> daha fazladır.</p><p><b>Bu parçadaki numaralanmış sözcüklerin hangisi, bir varlığın neye ait olduğunu belirten ek almıştır?</b></p>",
    diff: 2,
    expl: "Bir varlığın neye ait olduğunu belirten ek iyelik ekidir. II numaralı 'sayı-sı-nın' sözcüğündeki '-sı' eki iyelik ekidir (sayı, insanlara ait). Diğer sözcükler çokluk ve ayrılma/ilgi ekleri almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ziya Osman'ın şiir denizinde yüzerken <u>I. dikkati</u> elden bırakmamak lazım. Tam tabiat güzelliklerine, sevgilinin hayaline, çocukluk âleminin saflığına dalmış, kendinizi serin sulara kaptırmışken birdenbire şairin, <u>II. dümeni</u> öte dünyaya kırıp ölüme, karanlık bir yolculuğa doğru yelken açtığını ürpererek fark edersiniz fakat o, yine de trajik değildir; <u>III. işi</u> tatlıya bağlar. Allah'a yalvarır, merhamet diler, yer yer sitem ederek şiirinin havasını tazeleyecek yeni sulara yönünü çevirir. \"Nasıl Anmazsın\" <u>IV. şiiri</u>, bunun en güzel <u>V. örneği</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri \"iyelik eki\" almıştır?</b></p>",
    diff: 3,
    expl: "IV ('Nasıl Anmazsın' şiir-i) ve V (bunun ... örnek-i) sözcükleri tamlanan durumunda oldukları için sonlarındaki '-i' ekleri iyelik ekidir. I, II ve III numaralı sözcükler fiillere sorulan 'Neyi?' sorusuna yanıt verdikleri için belirtme durum eki almışlardır.",
    answers: [
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: true }
    ]
  },
  {
    text: "<p>Türküleriyle tanınan Anadolu, insanların yaşamları, <u>I. gelenekleri</u> ve toplumları hakkında derin izler taşır. Bu türküler, sadece melodileriyle değil, aynı zamanda <u>II. sözleriyle</u> de halkın duygularını, acılarını ve sevinçlerini dile getirir. Köy <u>III. meydanlarında</u>, düğünlerde ve tarlalarda yankılanan türküler, nesilden nesile aktarılan birer hazine gibidir. Her bir türkü, <u>IV. geçmişlerinin</u> izlerini taşırken aynı zamanda geleceklerine dair umutları da içinde barındırır. Gelenekleri yaşatan bu türkülerin her biri, geçmişten günümüze uzanan bir köprü kurarak toplumları bir arada tutar ve kültürel mirasın korunmasına katkı sağlar. Bu yüzden türküler sadece birer müzik eseri değil; aynı zamanda Anadolu insanının ruhunu yansıtan, <u>V. onların</u> yaşam mücadelelerini, sevinçlerini ve hayal kırıklıklarını anlatan birer hikâye kitabı gibidir.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi \"üçüncü çoğul iyelik eki\" <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı 'meydan-lar-ı-nda' sözcüğünün tamlayanı olan 'köy' tekil olduğu için buradaki '-ları' ekinin tamamı iyelik eki değildir; '-lar' çokluk, '-ı' üçüncü tekil iyelik ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Doğanın doğal <u>I. seçiciliği</u>; zaman-mekân ve nesne ilişkileriyle bizi içerisine almakta, zamanla birlikte içimizden geçmektedir. Geleneksel sorunumuz, ideolojinin <u>II. yönlendirmesini</u> insanın yaşamsal <u>III. olanaklarına</u> ve alanlarına nasıl <u>IV. dönüştüreceğimizdir</u>. İnsanın sosyal ve sınıfsal evrimi, bu mücadeleye paraleldir. Bu nedenle insanın ideolojiyi insanlaştırma çabasıyla doğa-insan <u>V. çelişkilerinin</u> içerisinden geçmek zorunda kalmış olması durumu, algılanabilir bir şeydir.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangileri birden çok çekim eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "I numaralı 'seçiciliği' sözcüğünde seç-ici-lik yapım eklerinden sonra yalnızca '-i' iyelik eki (tek çekim eki) vardır. Diğerleri birden fazla çekim eki almıştır (ör: yön-len-dir-me-si-ni -> iyelik ve belirtme).",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yekpare varlığımı<br>Siz misiniz parçalayan,<br>Farksız kırık aynalardan?<br>Sizde mi yaşamaktayım,<br>Gülmekte, ağlamaktayım,<br>Gündüze alışan renkler,<br>Her gece perişan renkler?</p><p><b>Bu dizelerde aşağıdaki hâl (durum) eklerinden hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Belirtme 'varlığım-ı', Yönelme 'gündüz-e', Bulunma 'siz-de', Ayrılma 'aynalar-dan' ekleri mevcuttur. Ancak ilgi eki (-nın/-in) alan bir sözcük yoktur.",
    answers: [
      { text: "İlgi", ok: true },
      { text: "Belirtme", ok: false },
      { text: "Yönelme", ok: false },
      { text: "Bulunma", ok: false },
      { text: "Ayrılma", ok: false }
    ]
  },
  {
    text: "<p>Kediler, evcil hayvanlar arasında en <u>I. sevilenlerdendir</u> çünkü <u>II. doğaları</u> şöyledir: sevecen ve bağımsız. <u>III. Çoktandır</u> insanlar kedileri evlerinde besler ve bundandır ki kediler <u>IV. evcildir</u> ve ev yaşamına uyum sağlarlar. Bir kedi, sahiplerine hem arkadaşlık eder hem de onların stresini azaltır. Bu yüzden kediler, pek çok insan için vazgeçilmez birer <u>V. dosttur</u>.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerin hangisinde \"-dır/-dir/-dur/-dür\" bildirme eki farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'çoktandır' sözcüğü zarftır ve eki yapım eki işlevindedir (anlamı değiştirir). Diğerlerinde (-dir/-dur) isim soylu sözcüklere gelerek onların yüklem olmasını sağlayan çekim ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İnsanlık tarihinin en gerilimli, coşkulu dönemlerinden biri; birçok <u>I. şeyi</u> değiştirmenin, yeni bir hayat kurmanın, deyim yerindeyse gönüllerde yeşeren, gözlerde düşlenen <u>II. cenneti</u> yeryüzüne indirme çabasındaki insanların içinde bulundukları anlar olmuştur. Zafer kadar <u>III. yenilgiyi</u>, doğum kadar tükenmişliği getiren süreçlerin de <u>IV. edebiyatı</u> fazlasıyla beslediği ortada. Aslında bir yeniden yaratımın <u>V. düşü</u> olan bu mücadeledeki bireylerin aynı kaygılarla sanattaki yaratıcılıkta soluklanması paralel bir gerçekliğin sonucudur.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisinin aldığı çekim eki diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I (şey-i), II (cennet-i), III (yenilgi-yi) ve IV (edebiyat-ı) kelimeleri 'Neyi?' sorusuna cevap verip belirtme durum eki almışlardır. V numaralı 'yaratımın düş-ü' tamlama kurduğu için buradaki '-ü' iyelik ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Türk <u>I. dili</u> açısından 10 Şubat önemli bir gündü. Kaşgarlı Mahmut bir süreden bu yana üzerinde çalıştığı ilk Türkçe <u>II. sözlüğü</u> bitirdi. Bu salt bir sözlük değil, Türk dünyasının bir ansiklopedisiydi. Bu önemli çalışma aradan onlarca yıl geçtikten sonra ilginç bir biçimde yeniden doğdu. Kaşgarlı Mahmut, o dönemin İslam büyüklerine seslenerek \"Türklerin gönlünü almak için onla dilleriyle konuşmaktan başka çare yoktur. Türk dilini öğreniniz çünkü onlar için uzun sürecek bir egemenlik vardır. Türk dilini öğrenmek çok gerekli bir iş olur.\" <u>III. çağrısı</u> yaptı. <u>IV. Türkçeyi</u> çok iyi bildiğini söyleyen Kaşgarlı Mahmut \"Ben; onların en uz dillisi, en açık <u>V. anlatatanı</u>, akılca en incesi, soyca en köklüsü, en iyi kargı kullananı olduğum hâlde onların şartlarını, çöllerini baştan başa dolaştım. Türk, Türkmen, Oğuz, Kırgız boylarının dillerini kafiyelerini belleyerek yararlandım.\" diyerek kendini tanıtmıştır.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi \"belirtme durumu eki\" almıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı 'Türkçeyi' sözcüğü 'Neyi çok iyi bildiğini söyleyen?' sorusuna yanıt verdiği için belirtme durum eki almıştır. Diğerleri iyelik eki (-i/-ı) almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yusuf Şirvani, bilinen en eski kadayıf tariflerini yazmıştır. Günümüzde az bilinen iki güllaç tarifinin yanı sıra tel kadayıf tarifi de vermiştir. Arap mutfağında sadece yassı kadayıf bilinirken Osmanlı Dönemi'nde tel kadayıf önemli bir yenilik olarak ortaya çıkmıştır. Bu tariflerde, XV. yüzyılın başında yassı kadayıfın yerine tel kadayıf öne çıkmıştır.</p><p><b>Bu parçada aşağıdaki durum eklerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada bulunma (-da: mutfağın-da), ilgi (-ın: kadayıf-ın), belirtme (-i: tariflerin-i) ve yönelme (-e: yerin-e) ekleri vardır. Ayrılma (-dan/-den) eki alan sözcük yoktur.",
    answers: [
      { text: "Ayrılma", ok: true },
      { text: "Bulunma", ok: false },
      { text: "İlgi", ok: false },
      { text: "Belirtme", ok: false },
      { text: "Yönelme", ok: false }
    ]
  },
  {
    text: "<p>Sonbahar ki acının değişmez dipnotudur.<br>Sesinin solgun göğünde<br>Küçük bir yıldızla bir harfi tutuşturur.<br>Savrulur her yana kavruk kelimelerle.<br>Yüreğini kelimelerle buruşturur.<br>Binlerce pıtrak yapıştırır yüzünün kumaşına.<br>Sonbahar ki doyumsuz bir aşkın sonudur.</p><p><b>Bu dizelerde aşağıdakilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "A) Eşitlik (-ce: binler-ce), B) İyelik (-i: ses-i-nin), C) Belirtme (-i: harf-i), D) Vasıta (ile/la: kelimeler-le) ekleri kullanılmıştır. Çıkma (ayrılma) durum eki (-dan/-den) yoktur.",
    answers: [
      { text: "Eşitlik eki", ok: false },
      { text: "İyelik eki", ok: false },
      { text: "Belirtme durum eki", ok: false },
      { text: "Vasıta eki", ok: false },
      { text: "Çıkma durum eki", ok: true }
    ]
  },
  {
    text: "<p>Eski filmlere âşığım. <u>I. Geçerliliğini</u> hiç kaybetmeyecek o sapasağlam konularıyla, paradan çok sanat için, alkış için oynamış aktörleri, aktrisleriyle ama ille de o <u>II. güzelim</u> arabaları, <u>III. konakları</u> ve henüz betona <u>IV. boğulmamış</u> yemyeşil şehirleriyle...</p><p><b>Bu parçada altı çizili sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "II numaralı 'güzelim' kelimesindeki '-im' eki burada iyelik eki değil, ismi sıfatlaştıran (isimden isim) yapım ekidir ('güzelim arabalar'). Eğer 'sen de güzelim' deseydi iyelik olurdu.",
    answers: [
      { text: "I. sözcük, farklı işlevlerde yapım ekleri almıştır.", ok: false },
      { text: "II. sözcük, birinci tekil iyelik eki almıştır.", ok: true },
      { text: "III. sözcük, fiilden isim yapım eki almıştır.", ok: false },
      { text: "IV. sözcük, fiilden fiil yapım eki almıştır.", ok: false },
      { text: "V. Seçenek soruda eksik basılmış (Çözüme göre C yanlıştır)", ok: false }
    ]
  },
  {
    text: "<p><u>I. Tarihte</u> ilk kez Çin'de \"yaşam <u>II. iksirini</u>\" arayan simyacılar ortaya çıktı. İnsan ömrünü uzatabilecek, hatta insanı <u>III. ölümsüz</u> kılacak maddeler araştırıldı. Tabii ki başarılı olunamadı. Tam tersine birçok imparator deneysel ama zehirli <u>IV. iksirleri</u> içmemiş olsaydı daha uzun yaşayabilirdi. Ancak bu büyülü madde arayışı, sıradan <u>V. hastalıkları</u> tedavi etmek için kullanılabilecek birçok ilacı ortaya çıkardı.</p><p><b>Bu parçada altı çizili sözcüklerle açıklamalar eşleştirilirse hangi sözcük dışarıda kalır?</b><br><br>• Bir sözcüğe hem yapım hem çekim eki getirilmiştir.<br>• Bir sözcük, iyelik ekinden sonra durum eki almıştır.<br>• Bir sözcük, fiilden isim yapım eki almıştır.<br>• Bir sözcükte bulunma durum eki kullanılmıştır.</p>",
    diff: 3,
    expl: "I. (tarih-te) bulunma. II. (iksir-i-ni) iyelik+durum. III. (öl-üm-süz) fiilden isim yapım. V. (hasta-lık-lar-ı) hem yapım hem çekim almıştır. IV numaralı 'iksirleri' sözcüğü ise sadece çokluk ve belirtme almıştır, açıklamalarda eşleşeceği bir yer yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İçimize sığdıramadığımız hayallerimiz vardır. Oysa ki <u>I. küçüklüğümüzdür</u> o hayalleri büyüten. Kendi içimizden çıkanı sığdıramayız dünyamıza. Yıkılır hayaller, yerine daha küçükleri inşa edilir. Ama yıkılan bir aşk, geride öyle acılar bırakır ki tek bir tuğlasını uzanıp koyamazsın yerine. İzler vardır geride ve izler <u>II. hatırladığın</u> kadar derindir. Her şey bir aşk oyunuysa gidişlere seyirci kalmak düşer kalanlara. Aşkın bitişi değil de geride kalan her şeyin yalan oluşu yıkar insanı. Oysa siz, onun yanında ondan daha güçlü görünmekten bile sakınmışsınızdır <u>III. kendinizi</u>, sırf o güçsüz gibi görünmesin diye. Bu kadar iyi olduğunuza kimse inanamaz, görmek istemez ve bazı gerçeklerin <u>IV. inanılmazlığı</u>, bir yalana dönüştürür onları. En çok da bu yüzden giderler. Çünkü haklı görürler kendilerini, <u>V. göremediklerinin</u> gölgesinde...</p><p><b>Bu parçadaki altı çizili sözcüklerden hangileri \"iyelik eki\" <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "I, II, IV ve V numaralı kelimelerde iyelik eki mevcuttur (küçüklüğ-ümüz, hatırladığ-ın vb.). Ancak 'insan-ı', 'onlar-ı' (onları yalana dönüştürür) kelimeleri 'Kimi?' sorusuna yanıt verdikleri için belirtme durum eki almışlardır. Bu kelimeler metnin genelinde III (kendinizi) kelimesi hariç yalın iyeliksiz kullanılmıştır. Çözüm anahtarı 'kendinizi' ve 'onları' (metindeki zamir) sözcüklerini hedef almıştır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: true },
      { text: "III ve VI", ok: false },
      { text: "IV ve VI", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI III - TEST 4
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_4: McQ[] = [
  {
    text: "<p>Yelda Öğretmen öğrencilerine \"Sözlükte yer alan bir sözcük, hangi eki alabilir?\" diye sormuştur.</p><p><b>Öğrencileri, aşağıdakilerden hangisini söylerse Yelda Öğretmen'in sorusuna doğru yanıt vermiş olur?</b></p>",
    diff: 2,
    expl: "Çekim ekleri sözcüğün anlamını ve yapısını değiştirmediği için sözlükte yer almaz. Fakat çatı ekleri (edilgenlik, dönüşlülük vb.) 'fiilden fiil yapım eki' oldukları için çatı eki almış bir sözcük sözlükte yeni bir madde olarak yer alır.",
    answers: [
      { text: "Çokluk eki", ok: false },
      { text: "Şahıs eki", ok: false },
      { text: "Durum eki", ok: false },
      { text: "Kip eki", ok: false },
      { text: "Çatı eki", ok: true }
    ]
  },
  {
    text: "<p>Aslı Öğretmen, tahtaya \"kedi\" yazmış ve öğrencilerinden bu sözcüğe aşağıdaki ekleri getirmelerini istemiştir.<br>I. Durum eki<br>II. Çokluk eki<br>III. İyelik eki</p><p><b>Öğrenciler, aşağıdaki sıralamalardan hangisini yaparsa Aslı Öğretmen'in sorusuna doğru yanıt vermiş olur?</b></p>",
    diff: 2,
    expl: "İsimlere gelen çekim eklerinin standart eklenme sırası şöyledir: İsim + Çokluk Eki + İyelik Eki + Hâl (Durum) Eki. Örnek: kedi-ler-im-i (II - III - I).",
    answers: [
      { text: "I - II - III", ok: false },
      { text: "II - III - I", ok: true },
      { text: "II - I - III", ok: false },
      { text: "III - I - II", ok: false },
      { text: "III - II - I", ok: false }
    ]
  },
  {
    text: "<p>Fiillerdeki işin kim tarafından yapıldığını bildiren kişi ekleri, basit veya birleşik zamanlı fiil çekiminde en sona gelir.</p><p><b>Aşağıdaki cümlelerin hangisinde bu duruma aykırı bir kullanım söz konusudur?</b></p>",
    diff: 3,
    expl: "3. çoğul kişi birleşik zamanlı çekimlerinde kişi eki (-lar/-ler) ek eylemden önce gelebilir. A seçeneğindeki 'gel-iyor-lar-dı' sözcüğünde şahıs eki (-lar), hikâye ek eyleminden (-dı) önce gelerek bu kurala aykırı bir kullanım oluşturmuştur.",
    answers: [
      { text: "Akşamları evlerinde oturmuyor, bizim buradaki parka geliyorlardı.", ok: true },
      { text: "Onlardan istediğimiz projeyi ay sonunda teslim edecekler.", ok: false },
      { text: "Sıska biriydi ve favorileri kocaman birer köfteyi andırıyordu.", ok: false },
      { text: "Rica ediyorum, çözümü olmayan bir durum için daha fazla tartışmayın.", ok: false },
      { text: "Fidan dikimi için ayarlanan bölgeye ne zaman gidecektiniz?", ok: false }
    ]
  },
  {
    text: "<p>\"Yazarın bu kitapta bize <u>anlatacaklarını</u> merakla bekliyoruz.\" <b>cümlesinde altı çizili sözcükte aşağıdaki eklerden hangisi yoktur?</b></p>",
    diff: 2,
    expl: "'anlat-acak-lar-ı-n-ı' sözcüğünde -acak (sıfat-fiil/yapım eki), -lar (çokluk eki), -ı (üçüncü tekil iyelik/tamlanan eki) ve -ı (belirtme durum eki) vardır. Sözcük fiilimsi (isim soylu) olduğu için kip eki alamaz.",
    answers: [
      { text: "Kip eki", ok: true },
      { text: "Çokluk eki", ok: false },
      { text: "Tamlanan eki", ok: false },
      { text: "Durum eki", ok: false },
      { text: "Yapım eki", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"-ma/-me\" eki farklı işlevde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "C seçeneğinde geçen 'olmadığı' sözcüğündeki '-ma' eki olumsuzluk ekidir. Diğer seçeneklerdeki 'çıkma-ya', 'konuşma-yı', 'belirlenme-si' ve 'düşünme-ye' sözcüklerindeki '-ma/-me' ekleri fiilden isim yapma (isim-fiil) ekleridir.",
    answers: [
      { text: "1928'de Türkiye'de tüm gazeteler, yeni Türk harfleriyle çıkmaya başlamıştı.", ok: false },
      { text: "Bazı çocuklar, işaret dili ile konuşmayı tercih ederek kendilerini ifade ederler.", ok: false },
      { text: "Hayatın herkese adil olmadığı bu dünyada yaşamak gittikçe zor hâle geliyordu.", ok: true },
      { text: "Konunun belirlenmesi için biraz daha zamana ihtiyacı olduğunu belirtmişti.", ok: false },
      { text: "Kişiyi daha olumlu düşünmeye teşvik eden kişisel gelişim kitapları popüler kitaplar arasındadır.", ok: false }
    ]
  },
  {
    text: "<p>Gelse de en acı sözler <u>I. dilime</u>,<br><u>II. Uçacak</u> sanırdım birkaç kelime,<br>Bir alev hâlinde düştün <u>III. elime</u>,<br>Hani ey <u>IV. gözyaşım</u>, <u>V. akmayacaktın</u>?</p><p><b>Bu dizede numaralanmış altı çizili sözcüklerin hangilerinde kişi eki yoktur?</b></p>",
    diff: 2,
    expl: "Kişi (şahıs) ekleri yalnızca eylemlere gelir ve işi kimin yaptığını belirtir ('sanırdı-m', 'düştü-n', 'akmayacaktı-n'). I ve IV numaralı 'dilim' ve 'gözyaşım' sözcüklerindeki '-m' ekleri isme geldikleri için iyelik (tamlanan) ekidir, kişi eki değildir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve IV", ok: true },
      { text: "III ve IV", ok: false },
      { text: "III ve V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Dilim</u> seni <u>II. dilim</u> dilim <u>III. dileyim</u>,<br><u>IV. başıma</u> geleni senden <u>V. bileyim</u>.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklere gelen \"-m (-ım, -im, -um, -üm)\" ekleri, işlevleri bakımından ikişerli gruplandığında hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I (dil-im) ve IV (başı-m-a) sözcüklerinde iyelik eki; III (dile-y-im) ve V (bile-y-im) sözcüklerinde 1. tekil şahıs eki vardır. II numaralı 'dilim' (dilmekten dilim) sözcüğündeki '-im' eki ise fiilden isim yapım ekidir ve eşleşme dışı kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde bir sözcüğün yapısındaki iyelik eki çıkarıldığında cümlenin anlamı bozulmaz?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'kendisinden' sözcüğündeki '-si' eki iyelik ekidir. Bu eki çıkarıp cümleyi okuduğumuzda ('Herkes kendinden sorumludur!') cümlenin anlamında ve yapısında bir bozulma olmaz.",
    answers: [
      { text: "\"Herkes kendisinden sorumludur!\" diyerek kapıyı kapattı.", ok: true },
      { text: "Öğrencilerimden biri, bu yıl öğretmen olarak kendi ilkokuluna atandı.", ok: false },
      { text: "Kimi, yerlere çöp atılmasına çok sert tepki verir; bazısı, hiç umursamaz.", ok: false },
      { text: "İnsanların çoğu, kendileri söz konusu olduğunda bencil davranır.", ok: false },
      { text: "Birini yanıma yollayın da masadaki ürünleri kendi odasına götürsün.", ok: false }
    ]
  },
  {
    text: "<p><u>I. Gezi</u> yazısı; <u>II. mekânı</u> merkeze alarak bir yazarın, çeşitli sebeplerle yurt içinde veya yurt dışında gittiği yerlerdeki gözlem, tespit, deneyim ve <u>III. yorumlarını</u> birçok anlatım biçiminden faydalanarak canlı ve etkileyici bir dille <u>IV. aktardığı</u> <u>V. yazı</u> türüdür.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklerden hangileri belirtme hâl eki almıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'mekân-ı' ve III numaralı 'yorum-lar-ı-n-ı' sözcükleri cümlede 'neyi?' sorusunun cevabı oldukları için belirtme hâl eki almışlardır. I ve V 'gez-i' ve 'yaz-ı' (yapım eki), IV 'aktardığ-ı' ise iyelik eki almıştır.",
    answers: [
      { text: "Yalnız III", ok: false },
      { text: "Yalnız V", ok: false },
      { text: "II ve III", ok: true },
      { text: "II ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Bütün trenleri <u>I. kaçırdın</u>,<br>Acıklı bir roman gibisin şimdi.<br>İşte milyon insanda milyon yürek<br>Senin için <u>II. çarpar</u> mı biri?<br>Karanlık kış günü akşamüstü<br>Dost diye <u>III. sokaklarda</u> kendini ara,<br><u>IV. Sevdalı</u> kimsesiz sarhoşlar gibi<br>Sarıl <u>V. gizlice</u> ağaçlara.</p><p><b>Yukarıdaki cümlelerin hangisinde altı çizili sözcük birden çok yapım eki almıştır?</b></p>",
    diff: 2,
    expl: "V numaralı 'gizlice' sözcüğü 'giz' (isim kökü) üzerine sırasıyla '-li' (isimden isim yapım eki) ve '-ce' (isimden isim yapım eki / eşitlik) alarak birden çok yapım ekiyle gövde durumuna gelmiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"-cA\", eklendiği sözcüğe \"Yedi kişinin <u>yaşça</u> en kıdemlisi ve en iyi yemek pişireniydi.\" cümlesindeki altı çizili sözcüğe kattığı anlamla aynı doğrultudadır?</b></p>",
    diff: 2,
    expl: "Soru kökündeki 'yaşça' sözcüğü cümleye 'yaş bakımından' anlamı katmıştır. E seçeneğindeki 'bilgice üstün' ifadesindeki '-ce' eki de tıpkı öncüldeki gibi 'bilgi bakımından' anlamı vererek karşılaştırma yapmıştır.",
    answers: [
      { text: "Bence sınava doğru kaynaklardan çalışmalısınız.", ok: false },
      { text: "Altmış yıllık ömrümüzde niçin kardeşçe yaşamıyoruz?", ok: false },
      { text: "Günlerce bu sorunlar üzerinde kafa yorsam da nafile!", ok: false },
      { text: "Çocukça davranışlarınız, hayata onlar gibi bakmanız beni etkiledi.", ok: false },
      { text: "Benden bilgice üstün kişilere ancak saygılarımı sunarım.", ok: true }
    ]
  },
  {
    text: "<p>Türklerin gösterdikleri gülme <u>I. eğilimiyle</u> ilgili bir İngiliz yazar şunları söylüyor: Türkçe <u>II. konuştuğumda</u> komik anılar yaşansa da bu anılar bir süre sonra komplekse girmeme neden oluyor, <u>III. Türkçemin</u> çok iyi olmadığını düşünüyor ve <u>IV. benim</u> yerime konuşmasına izin veriyorum. Başkalarına bağımlı olduğum için öğrenmem ve <u>V. gelişmem</u> de sekteye uğruyor.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde kullanılan \"-m (-ım, -im, -um, -üm)\" eki farklı görevde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "I numaralı 'eğilim' sözcüğündeki '-im' eki fiilden isim yapma (yapım) ekidir (eğil-mekten eğilim). Diğer sözcüklerdeki '-m / -im' ekleri ise iyelik (tamlanan/tamlayan) ekidir ve çekim eki görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI IV - TEST 5
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_5: McQ[] = [
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"-cA\", eklendiği sözcüğün anlamında bir küçültme yapmıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'büyükçe' sözcüğünde kullanılan '-çe' eki, sözcüğe 'büyüğe yakın, biraz büyük' anlamı vererek küçültme işlevi üstlenmiştir.",
    answers: [
      { text: "Yumuşakçalar, hayvanlar âleminin en geniş sınıflarındandır.", ok: false },
      { text: "Adam, topuklarını birbirine vurarak askerce bir selam veriyor.", ok: false },
      { text: "Kuşlar bulutların altından topluca aşağı süzüldü.", ok: false },
      { text: "İnsana daha insanca ortamlar yaratmak için bütün hesaplarımız.", ok: false },
      { text: "Aynı kamarayı paylaşacaksınız; büyükçedir, ikinize de yeter.", ok: true }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerde \"-ar\" ekiyle türemiş sözcükler, cümle içerisinde kullanılmıştır:<br><br>I. Sofrada tarhana çorbası, kızarmış tavuk, bulgur pilavı vardı.<br>II. Birinden yardım istemekten başka çıkar yol yoktu.<br>III. Hava iyice kararmış, caddenin bütün elektrikleri yanmıştı.<br>IV. Parça parça morarmış yüzüyle ateş püskürüyordu.<br>V. Oraya çıkınca hamallara onar kuruştan hesap göreceksin.</p><p><b>Bu cümlelerdeki \"-ar\" eki, hangilerinde işlevi bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I (kızıl-ar), III (kara-r) ve IV (mor-ar) numaralı sözcüklerdeki '-ar' eki renk adlarına gelerek isimden fiil yapan ek işlevindedir. II numaralı 'çık-ar' (fiilden isim/sıfat-fiil) ve V numaralı 'on-ar' (isimden isim/üleştirme) sözcüklerinde ise farklı işlevlerde kullanılmıştır.",
    answers: [
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve V", ok: true },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Bulunma hâl eki, eklendiği isme \"araç\" anlamı da katmaktadır.</p><p><b>Aşağıda verilen cümlelerden hangisinde bu duruma uygun bir kullanım <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "D seçeneğindeki 'ağacın altında' ifadesindeki '-da' eki cümleye bulunma/yer bildirir. Diğer seçeneklerdeki 'saksıda', 'radyoda', 'bardakta', 'düdüklüde' sözcüklerinde araç/vasıta anlamı katmıştır.",
    answers: [
      { text: "Çocuklarına yıllarca toprak saksıda yemek yedirmiş.", ok: false },
      { text: "Senin bahsettiğin şarkıyı radyoda sabah dinledim.", ok: false },
      { text: "Özellikle sıcak içecekleri plastik bardakta içmeyi tercih ederim.", ok: false },
      { text: "Saatlerce ağacın altında onunla geceyi bekledik.", ok: true },
      { text: "Düdüklüde yemek pişirmek hem kolay hem hızlı.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerin hangisinde \"-da\" bulunma eki, cümleye süre anlamı <u>katmamıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'öğle sıcağında' ifadesindeki '-da' eki cümleye 'zaman' anlamı katmıştır. Diğer seçeneklerde ise ('iki günde', 'on dakikada', 'yirmi senede', 'iki üç saatte') eylemin gerçekleştiği süre, müddet anlamı verilmiştir.",
    answers: [
      { text: "Haber bütün kasabayı iki günde dolaştı.", ok: false },
      { text: "Bu gözlerle on dakikada samimi olunur.", ok: false },
      { text: "Sen bu parayı yirmi senede ödeyemezsin.", ok: false },
      { text: "Otobüs şoförü iki üç saatte bir mola veriyor.", ok: false },
      { text: "Babam öğle sıcağında dışarı çıkmamızı yasakladı.", ok: true }
    ]
  },
  {
    text: "<p>Yazacağınız <u>I. şiiri</u>, şiirin <u>II. konusunu</u>, <u>III. biçimini</u>, boyunu bosunu, <u>IV. hepsini</u> <u>V. ağzınızdan</u> çıkan ilk dize belirler.</p><p><b>Bu parçadaki numaralanmış altı çizili sözcüklerden hangisi iyelik eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "I numaralı 'şiiri' sözcüğü sadece 'Neyi belirler?' sorusuna yanıt verdiği için sondaki '-i' belirtme hâl ekidir, iyelik eki almamıştır. Diğerlerinde 'şiirin konusu-nu', 'hepsi-ni', 'ağz-ınız-dan' örneklerinde olduğu gibi iyelik ekleri mevcuttur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Türkçede bazı kip ekleri, yapım eki işlevinde kullanılarak yeni sözcükler türetir.</p><p><b>Aşağıdaki altı çizili sözcüklerin hangisi bu duruma örnek <u>gösterilemez</u>?</b></p>",
    diff: 2,
    expl: "B seçeneğindeki 'yapacak' sözcüğünde yer alan '-acak' eki, cümlenin yüklemi konumunda olup gelecek zaman kipi (çekim eki) işlevinde kullanılmıştır. Diğerlerindeki 'çıktı', 'yakacak', 'okur' ve 'gelir' sözcüklerinde kip ekleri kalıplaşarak kalıcı isim türetmiştir.",
    answers: [
      { text: "Kitabın <u>çıktısını</u> alıp yazara bugün teslim etmelisiniz.", ok: false },
      { text: "Nasıl <u>yapacak</u> bunca işi tek başına, çok merak ediyorum.", ok: true },
      { text: "Kurumuş ağaç dallarını toplayın ki kış boyu <u>yakacak</u> odunlar hazır olsun.", ok: false },
      { text: "Günümüz <u>okurlarını</u> etkileyen kitap değil, reklâm maalesef.", ok: false },
      { text: "Bu yılın yayınevi <u>gelirleriyle</u> Akdeniz Bölgesi'ne ağaç dikilecek.", ok: false }
    ]
  },
  {
    text: "<p>İstanbul <u>I. deyince</u> aklıma Sait Faik gelir<br>Burgaz adasında kıyıda<br>Mavi <u>II. gözlü</u> bir çocuk büyür <u>III. döne</u> döne<br>Mavi gözlü bir ihtiyar <u>IV. balıkçı</u> gencelir küçülür</p><p><b>Bu dizelerde altı çizili sözcüklere gelen yapım ekleri, işlevleri bakımından ikişerli gruplandığında hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I. deyince ve III. döne döne (fiilden isim/zarf fiil); II. gözlü ve IV. balıkçı (isimden isim yapım eki) olarak eşleşir. V numaralı 'gencelir' (genç-el-ir) sözcüğündeki '-el' eki isimden fiil yapım eki olduğu için dışarıda kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Gözlenebilirlik</u>, bilginin gözlem yoluyla <u>II. yanlışlığının</u> ya da doğruluğunun kanıtlanabilir olmasıdır. Gözlenen bir olay ya da durumun sayılarla ifade edilmesi ise ölçülebilirliktir. İnsanın doğrudan <u>III. gözlenemeyen</u> psikolojik özelliklerinin ölçülmesi söz konusu olduğunda soyut ve teorik olay ve durumların somut, gözlenebilir ve <u>IV. ölçülebilir</u> bir hâle getirilmesi gerek. Psikoloji biliminin amaçları insan davranışlarını tanımlamak, önceden <u>V. kestirebilmek</u>, etkilemek ve kontrol etmektir.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi birleşik sözcükten <u>türememiştir</u>?</b></p>",
    diff: 3,
    expl: "I, III, IV ve V numaralı sözcükler kurallı birleşik fiillerden (yeterlilik: -ebil) türemiştir. II numaralı 'yanlışlığının' sözcüğü ise yanıl-ış-lık (gövdeden türemiş) basit bir fiil kökünden türeyerek oluşmuştur, birleşik yapılı değildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Yokluğu</u> hissedilen ve <u>II. giderilmesi</u> için çaba sarf edilen, <u>III. giderildiği</u> zaman haz, <u>IV. giderilmediği</u> zaman acı ve üzüntü veren <u>V. insani</u> duyguya ihtiyaç denir.</p><p><b>Bu cümlede altı çizili numaralanmış sözcüklerden hangileri tamlanan (iyelik) eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'insani' sözcüğünün sonundaki '-i' nispet i'sidir ve isimden isim yapım eki (sıfat yapan) görevindedir. I, II, III ve IV numaralı sözcükler ise '(bir şeyin) yokluğ-u', '(ihtiyacın) giderilme-si' şeklinde tamlanan yani iyelik eki almışlardır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız V", ok: true },
      { text: "I ve V", ok: false },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p>Duyumlar <u>I. aracılığı</u> ile <u>II. varlığı</u> anlaşılan birtakım nesnelerin zihinde anlamlandırılması ve <u>III. yorumlanması</u> sürecine algılama, <u>IV. ortaya</u> çıkan ürüne ise algı denir. Örneğin tat almak duyum iken bu tadın ne <u>V. tadı</u> olduğunu anlamak algıdır.</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisinin kökü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "III numaralı 'yorumlanması' sözcüğünün kökü 'yor(mak)' fiilidir. I (araç), II (var - 'yok' zıttı olan isim), IV (orta) ve V (tat) sözcüklerinin kökleri ise isim soyludur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İslamiyet öncesi Türk devletlerinde \"kut anlayışı\" ilahi bir <u>I. kavramdı</u>. Kağan, Tanrı <u>II. istediği</u> ve kendisine kut verildiği için hükümdardı. Ancak onun yöneticiliği kalıcı değildi. Tanrı'nın verdiği yetki gene onun tarafından <u>III. alınabilirdi</u>. Kağanın devleti yönetmeye devam edebilmesi için <u>IV. üzerine</u> düşen görevleri <u>V. yerine</u> getirmesi <u>VI. gerekirdi</u>.</p><p><b>Bu parçadaki sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'gerekirdi' sözcüğünün kökü 'gerek(mek)' fiilidir, isim kökü değildir. A'da kavra-m (fiilden isim), B'de iste-dik-i (yapım ve çekim), C'de yer-i-n-e (iyelik ve yönelme), D'de alın-abil-ir-di (birleşik yapılı çekimli fiil) yargıları doğrudur.",
    answers: [
      { text: "\"kavramdı\" sözcüğü, fiilden isim yapma eki almıştır.", ok: false },
      { text: "\"istediği\" sözcüğü, hem yapım hem çekim eki almıştır.", ok: false },
      { text: "\"yerine\" sözcüğünde birden fazla çekim eki vardır.", ok: false },
      { text: "\"alınabilirdi\" sözcüğü, birleşik yapılı ve çekimli fiildir.", ok: false },
      { text: "\"gerekirdi\" sözcüğü, isim kökünden türemiştir.", ok: true }
    ]
  },
  {
    text: "<p>Bursa'yı arkada bırakıp ovalara <u>I. daldık</u>. Ağaçlar yarı çiçek, yarı yaprak, en güzel çağında... <u>II. Ekin</u> tarlaları göz <u>III. alabildiğine</u> yeşil... Sekiz, on kilometrede bir çeşme... Her yer sulak. Toprağı <u>IV. azıcık</u> eşseniz su <u>V. fışkıracak</u>.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisinin kökü, sesteş bir sözcük <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'fışkıracak' sözcüğünün kökü yansıma olan 'fış' sözcüğüdür. Yansıma köklerin anlamı tektir, yazılışı aynı anlamı farklı olan sesteşleri (eş seslileri) yoktur. Dal, ek, al, az kökleri ise sesteşliğe müsaittir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  }
];  

// ============================================================================
// SÖZCÜKTE YAPI V - TEST 6
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_6: McQ[] = [
  {
    text: "<p>Rüyaların âlemi, herkes tarafından merak edilen bir unsurdur. Uyku laboratuvarlarında incelenen bütün <u>I. insanların</u> <u>II. beyinleri</u> etkinleşmiştir. Bu bilgiden yola çıkılarak aslında herkesin uyku esnasında rüya gördüğü varsayılmaktadır. Rüya görmediğini iddia edenlerin yaşadığı deneyim, rüya görmemekten çok rüyaları <u>III. uyandıklarında</u> anımsama zorluğuyla <u>IV. bağlantılıdır</u>.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi \"üçüncü çoğul kişi iyelik eki\" almıştır?</b></p>",
    diff: 2,
    expl: "Üçüncü çoğul iyelik eki '-ları/-leri', tamlayanı çoğul olan tamlamalarda tamlananın aldığı ektir. Parçadaki 'beyinleri' sözcüğünün tamlayanı 'insanların'dır ve bu sözcük çoğul olduğu için beyin sözcüğüne gelen '-leri' eki üçüncü çoğul iyelik ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Kıtlıklar</u> tüm <u>II. dünyada</u> zaman boyunca ve <u>III. değişen</u> şiddet derecelerinde var olmuştur. Yeterli gıda tedarikinin olmaması ve karakterize edilen bu durumlar herhangi bir <u>IV. faktörden</u> <u>V. kaynaklanabilir</u>.</p><p><b>Bu parçadaki altı çizili sözcükler, yapısı bakımından eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 2,
    expl: "I (kıt-lık-lar) ve III (değiş-en) türemiş yapılıdır. II (dünya-da) ve IV (faktör-den) basit yapılıdır. V numaralı 'kaynaklanabilir' (kaynaklanmak + ebilmek) ise kurallı birleşik fiil olduğu için yapısı bakımından birleşiktir ve dışarıda kalır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Geçmişten bugüne var olan cinsiyetçilik kadınların <u>I. yaşamını</u> hep gölgeledi. (II) Kadınlar eğitim alamaz, fikir <u>II. belirtemez</u>, topluma karışamazlardı. (III) Bu <u>III. şartlarda</u> kadınların var olmaları epey zordu. (IV) Kısıtlamalara rağmen yine de çok başarılı kadın bilim insanları vardır ve bilim dünyasına <u>IV. kattıkları</u> kesinlikle basit şeyler değil. (V) Eğer kadınlar hor görülmeseydi kim bilir belki de binlerce kadın bilim insanı olup dünyamızı daha erkenden geliştirebileceklerdi. <u>V. bilim</u>.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde altı çizili sözcük basit yapılıdır?</b></p>",
    diff: 2,
    expl: "III numaralı 'şartlarda' sözcüğü herhangi bir yapım eki almadığı için basit yapılıdır. Diğerleri: yaş-a-m (türemiş), belirt-e-mez (birleşik), kat-tık (türemiş), bil-im (türemiş).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Kitap yorumlama <u>I. alışkanlığı</u> kazandığımdan bu yana kitap <u>II. okurken</u> bir yandan da <u>III. yorumlamaya</u> çalışıyor, yazacağım yazının hatlarını kabataslak <u>IV. tanımlamaya</u> çalışıyorum. Okurken bir hayli <u>V. zorlandığımı</u> itiraf etmeliyim.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi gövdeden türemiş sözcük özelliği <u>göstermez</u>?</b></p>",
    diff: 3,
    expl: "Gövdeden türemiş sözcükler en az iki yapım eki almış sözcüklerdir. II numaralı 'okurken' sözcüğünde '-ur' geniş zaman eki, '-ken' ise zarf-fiil (yapım) ekidir; yani yalnızca 1 yapım eki vardır. Diğerlerinde en az iki yapım eki bulunur (ör: alış-kan-lık, zor-lan-dık vb.).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Güzelliği <u>I. tanımış</u> olmaktır daha da iyisi,<br>Bütün bir hayatın düzeni ve yüceliği olan güzelliği,<br>Harcanan <u>II. çabaların</u> zahmeti mutluluğun<br><u>III. kaynağı</u> olduğunda,<br>Ve bilmek, zaman <u>IV. içindeki</u> onca <u>V. zenginliğin</u> adını.</p><p><b>Bu dizelerdeki altı çizili sözcüklerden hangisi yapım eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "II numaralı 'çabaların' sözcüğünün kökü 'çaba' olup aldığı ekler (-lar çokluk, -ın tamlayan) çekim ekidir, yapım eki yoktur. Diğerleri yapım eki almıştır (tanı-mış, kaynamaktan kaynak, iç-in-de-ki, zengin-lik).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Birçoğumuz hayatımızın belli <u>I. dönemlerinde</u> bazı konulara çok fazla takılı kalırız. Bu <u>II. oldukça</u> normal ve <u>III. sağlıklı</u> bir durumdur. Herhangi bir <u>IV. takıntı</u> sizin en az bir saatinizi meşgul ediyorsa takıntılara hiçbir şekilde engel <u>V. olamıyorsanız</u> bu durum sosyal hayatınıza engel olabilir.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "V numaralı 'olamıyorsanız' sözcüğü (ol-a-mı-yor-sa-nız), yeterlik kurallı birleşik fiilinin olumsuzuyla çekimlenmiştir, bu nedenle yapıca birleşiktir. I, II, III ve IV numaralı sözcükler ise yapım eki aldıkları için türemiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Hangi şehirde yaşamak isterdiniz? (II) Soruyu genişletip tekrar sorayım. (III) Hangi ülkenin, hangi şehrinde yaşamak istersiniz? (IV) Yaşamak istediğiniz şehri seçerken neye dikkat edersiniz? (V) Hangi değerlendirmeleri yapardınız?</p><p><b>Bu parçayla ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "IV. cümlede 'şehri' kelimesinde ünlü düşmesi olmuştur ancak bu sözcük '-i' belirtme hâl eki alırken (çekimlenirken) düşmüştür. 'Ne+asıl > nasıl' gibi kelimeler birleşirken ünlü düşmesine uğrayan bir sözcük yoktur.",
    answers: [
      { text: "I. cümlede, basit ve türemiş sözcüklere yer verilmiştir.", ok: false },
      { text: "II. cümlede, hem yapım hem çekim eki almış sözcük bulunmaktadır.", ok: false },
      { text: "III. cümlede, hem iyelik hem de hâl eki almış sözcük vardır.", ok: false },
      { text: "IV. cümlede, birleşirken ünlü düşmesine uğramış sözcük vardır.", ok: true },
      { text: "V. cümlede, ek fiil almış sözcüğe yer verilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Uzmanlar, dönem dönem özellikle de kişinin <u>I. yorgun</u> ve yıpranmış hissettiği <u>II. süreçlerde</u> çevresindeki insanlardan bir <u>III. süreliğine</u> uzaklaşmasının ve kendi <u>IV. içine</u> dönmesinin, insan psikolojisi üzerinde çok <u>V. büyük</u> bir olumlu etkisi olduğunu söylüyor.</p><p><b>Bu cümledeki numaralanmış sözcüklerden hangisi birden çok yapım eki almıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'süreliğine' sözcüğünde sür(mek) fiiline '-e' (fiilden isim) ve '-lik' (isimden isim) olmak üzere birden fazla yapım eki gelmiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Cilt tipleri, hem cilt <u>I. bakımı</u> açısından hem de insanın kendini <u>II. tanıyabilmesi</u> ve <u>III. ilerleyen</u> yaşlar adına önlem alabilmesi <u>IV. açısından</u> son <u>V. derece</u> önemlidir.</p><p><b>Bu parçada numaralanmış sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "III. sözcük olan 'ilerleyen' (ileri-le-y-en) sözcüğü, isimden fiil yapım eki (-le) ve fiilden isim yapım eki / sıfat-fiil (-en) almıştır. 'İsimden isim yapım eki almış' ifadesi bu nedenle yanlıştır.",
    answers: [
      { text: "I. sözcük, hem iyelik hem de yapım eki almıştır.", ok: false },
      { text: "II. sözcük, birleşik yapılı isim-fiildir.", ok: false },
      { text: "III. sözcük, isimden isim yapım eki almış sıfat-fiildir.", ok: true },
      { text: "IV. sözcük, fiilden isim yapım eki almıştır.", ok: false },
      { text: "V. sözcük, basit yapılı bir sözcüktür.", ok: false }
    ]
  },
  {
    text: "<p><u>Veganlık</u>, yeme-içme gibi <u>ihtiyaçların</u> yanı sıra <u>hayatınızdaki</u> kozmetik alışverişinizden sanayiye, <u>sağlıktan</u> ulaşıma kadar <u>birçok</u> alanda da hassasiyet göstermeniz gereken bir konu.</p><p><b>Bu parçadaki bazı sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "B seçeneğindeki 'ihtiyaçların' sözcüğünde 'ihtiyaç' isim kökü büyük ünlü uyumuna uymaz (kök hâlindedir). Aldığı ekler ise sadece çoğul ve tamlayan (çekim) ekleridir; yapım eki almamıştır.",
    answers: [
      { text: "\"veganlık\" sözcüğü, türemiş yapılıdır.", ok: false },
      { text: "\"ihtiyaçların\" sözcüğü hem yapım hem çekim eki almıştır.", ok: true },
      { text: "\"hayatınızdaki\" sözcüğü, yapım ekinden önce hem iyelik hem de hâl eki almıştır.", ok: false },
      { text: "\"sağlıktan\" sözcüğü, isim kökünden türemiş bir isimdir.", ok: false },
      { text: "\"birçok\" sözcüğü, birleşik yapılı bir sıfattır.", ok: false }
    ]
  },
  {
    text: "<p>Şair ve yazarların <u>I. cevaplamakta</u> en çok <u>II. zorlandıkları</u> soru budur sanırım: Niçin yazıyorsunuz? Yazan kişi hep bir umutla alır kalemi eline. Bu bilinme arzusundan başka bir şey değildir. <u>III. Milyarlarca</u> insanın yaşadığı gök kubbe altında insan ve eşya kalabalığından sıyrılıp fark <u>IV. edilebilir</u> olma umudunu yaşamak gece yarılarına kadar <u>V. uykusuz</u> kalmaya değerdir.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili olarak aşağıdaki ifadelerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'edilebilir' sözcüğündeki '-ir' eki burada geniş zaman (kip/çekim) eki değil, 'edilebilir olma' şeklindeki yapıda sıfat-fiil (fiilden isim yapım) ekidir.",
    answers: [
      { text: "I, hem yapım hem çekim eki almıştır.", ok: false },
      { text: "II, üçüncü çoğul iyelik eki almıştır.", ok: false },
      { text: "III, hem çokluk hem eşitlik eki almıştır.", ok: false },
      { text: "IV, geniş zaman ekiyle çekimlenmiştir.", ok: true },
      { text: "V, farklı işlevlerde yapım eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerdeki altı çizili sözcüklerden hangisi yapıca diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "A seçeneğindeki 'alanlardır' sözcüğü 'meydan/saha' anlamında olup basit yapılıdır (kök hâlinde). Diğerleri ise kur-um, soğu-k, boş-luk, duy-gu şeklinde türemiş sözcüklerdir.",
    answers: [
      { text: "Ovalar, çoğu hayvan için vazgeçilmez <u>alanlardır</u>.", ok: true },
      { text: "Sağlık Bakanlığı, bu konuyla ilgili olan en yetkili <u>kurumdur</u>.", ok: false },
      { text: "Erzurum iklimi, şehrin yüksek bir bölgede konumlanmış olmasından ötürü oldukça <u>soğuktur</u>.", ok: false },
      { text: "Varoluşsal yalnızlık, insanın kendisiyle diğerleri arasındaki aşılmaz <u>boşluktur</u>.", ok: false },
      { text: "Korku, belirli bir ağrı veya tehdit olarak algılanan evrensel bir <u>duygudur</u>.", ok: false }
    ]
  },
  {
    text: "<p>Kuşlar <u>I. ülkesinin</u> bütün kuşları Hüthüt'ün kılavuzluğunda Kaf Dağı'nın <u>II. ardındaki</u> padişahları Simurg'u <u>III. bulabilmek</u> için yola revan olurlar. <u>IV. Yolculuk</u> uzun ve zorludur. <u>V. İsteği</u> ve sebâtı az olanlar, hem Simurg'u görmek isterler hem de mazeretler üretmeye başlarlar.</p><p><b>Bu parçada numaralanmış sözcüklerle ilgili olarak aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'isteği' sözcüğü iste(mek) fiil kökünden '-k' yapım ekiyle (istek) türemiştir, ardından iyelik eki almıştır. Yani türemiş yapılıdır, 'basit yapılı' ifadesi yanlıştır.",
    answers: [
      { text: "\"ülkesinin\" sözcüğünde, hem tamlayan hem de tamlanan eki bulunmaktadır.", ok: false },
      { text: "\"ardındaki\" sözcüğünde, sıfat yapan \"-ki\" eki vardır.", ok: false },
      { text: "\"bulabilmek\" sözcüğü, isim-fiil eki almış birleşik yapılıdır.", ok: false },
      { text: "\"yolculuk\" sözcüğü, aynı işlevde yapım ekleri almıştır.", ok: false },
      { text: "\"isteği\" sözcüğü, aitlik eki almış basit yapılı bir sözcüktür.", ok: true }
    ]
  },
  {
    text: "<p><u>I. Alınıyorsam</u> geçimsiz ve <u>II. iştahsız</u><br>Yüzüm öfkeden karaya çalıyorsa<br>Denize bile iştahsız bakıyorsam<br>Hep bu <u>III. boyu</u> devrilesi <u>IV. bozuk</u> düzen<br>Bu darağacı suratlı toplum <u>V. yüzüm</u></p><p><b>Bu dizelerle ilgili olarak aşağıda verilenlerden hangisinde yanlışlık vardır?</b></p>",
    diff: 3,
    expl: "III numaralı 'boyu' kelimesi 'boyu devrilesi' tamlamasında 'onun boyu' anlamı taşıdığı için iyelik eki almıştır, belirtme durum eki almamıştır.",
    answers: [
      { text: "\"alınıyorsam\" sözcüğü, türemiş yapılı birleşik çekimli fiildir.", ok: false },
      { text: "\"iştahsız\" sözcüğü, isimden türemiş zarftır.", ok: false },
      { text: "\"bozuk\" sözcüğü, türemiş sıfattır.", ok: false },
      { text: "\"boyu\" sözcüğü, belirtme durum eki almıştır.", ok: true },
      { text: "\"yüzüm\" sözcüğü, tamlanan eki almış isimdir.", ok: false }
    ]
  },
  {
    text: "<p>Ektir sıfat yapar ismi (I)<br>Fiil olur bir ekle yansıma (II)<br>Ekten doğar bir isim aslında fiilken (III)</p><p><b>Aşağıdakilerden hangisinde verilen altı çizili sözcükler, bu dizelerde numaralanmış açıklamalara sırasıyla örnek gösterilebilir?</b></p>",
    diff: 3,
    expl: "I: Yaslı (yas isminden sıfat türetmiş). II: gürler (gür yansımasından fiil türetmiş). III: Sevgin (sevmek fiilinden sevgi ismini türetmiş).",
    answers: [
      { text: "Geceler <u>uzun</u>, geceler korkulu / Ümitler savrulmada <u>köpük</u> köpük / <u>Zamanı</u> unutuyor insanoğlu", ok: false },
      { text: "<u>Yaslı</u> bir kışa rehin düşse günler / İçimdeki fırtına sessizce <u>gürler</u> / <u>Sevgin</u> daima içimde bu duyguyu gizler", ok: true },
      { text: "Düşler rıhtımında <u>sevecen</u> kuşlar / Pembe <u>şafaklara</u> yelken açıyor / Billûr kadehlerde <u>renklenen</u> düşler", ok: false },
      { text: "Kuşlar vardır, cana <u>benzer</u> havalarda / <u>Soğuksa</u> kar, baharsa yaprak / Bir başına <u>büyür</u> toprakta ömrümüz", ok: false },
      { text: "Seni <u>görmediğim</u> günler büyüyor gözümde / Bir çocuk <u>ağlaması</u> başlıyor kulaklarımda / <u>Ellerim</u> bir yerlere yapışıyor, kurtaramıyorum", ok: false }
    ]
  },
  {
    text: "<p>Atmosferi meydana getiren gazların <u>I. karışımı</u> olarak tanımlanan hava; insan ve canlıların yaşaması için hayati öneme sahiptir. Artan dünya <u>II. nüfusu</u> ile birlikte insanların, çağlar boyunca yaşam <u>III. koşullarını</u> iyileştirme çabasına paralel olarak sanayi ve teknoloji de sürekli gelişmiştir. Ancak bu gelişme canlı ve cansız bütün varlıkların üzerinde bulunduğu <u>IV. ekosistemi</u> bilinçli veya bilinçsizce kirletmiş, tüm canlı <u>V. hayatı</u> ve canlı hayatın bir parçası olan bitkileri tehdit eder hâle gelmiştir.</p><p><b>Bu parçada numaralanmış altı çizili sözcüklerden hangisi \"belirtme durum eki\" <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "II numaralı 'nüfusu' kelimesi 'dünya nüfusu' isim tamlamasında tamlanan durumundadır ve aldığı '-su' eki 3. tekil iyelik ekidir. Diğer kelimeler (neyi? sorusuna cevap veren) belirtme durum eki almışlardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI VI - TEST 7
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_7: McQ[] = [
  {
    text: "<p><u>I. Merdivenlerin</u> oraya <u>II. koşuyorum</u><br><u>III. Beklemek</u> gövde <u>IV. kazanması</u> gibi zamanın<br>Çok erken <u>V. gelmişim</u> seni <u>VI. bulamıyorum</u></p><p><b>Bu dizelerde altı çizili sözcüklerden hangisi birden çok çekim eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı (kazanması) kelimesi isim-fiil ekinden sonra yalnızca iyelik eki (-sı) alarak tek bir çekim eki almıştır. Diğer sözcükler çokluk+ilgi (merdiven-ler-in), şimdiki zaman+şahıs (koş-uyor-um) gibi birden çok çekim eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Altıncı</u> yüzyılın ilk <u>II. zamanlarında</u>, Atina'da zengin ve fakir kesim arasında çok büyük <u>III. eşitsizlik</u> vardı. <u>IV. Köleliğin</u> de oldukça <u>V. yaygın</u> olduğu bir dönemdi.</p><p><b>Bu parçada altı çizili sözcüklerin hangisi hem yapım hem çekim eki almıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı 'köleliğin' sözcüğü 'köle' isim köküne '-lik' (isimden isim yapım eki) ve '-in' (ilgi/tamlayan çekim eki) alarak hem yapım hem çekim eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sen bende neleri öpüyorsun bir bilsen<br>Herkesin perde perde çekildiği bir akşam<br>Siyah bir su gibi akan yalnızlığı öpüyorsun<br>Ağzında eriklerin aceleci tadı<br>Elleri bulut, gözleri ot bürümüş ekin tarlası<br>Bir çocuğun düşlerine inen tokadı öpüyorsun</p><p><b>Bu dizelerde aşağıdakilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Dizelerde yansıma sözcük (doğa seslerinin taklidi: pat, çıt vb.) bulunmamaktadır. B'de bende/herkesin, C'de öpüyorsun/bilsen, D'de ekin, E'de düşlerine (iyelik ve yönelme) seçeneklerinin örnekleri mevcuttur.",
    answers: [
      { text: "Yansıma sözcük", ok: true },
      { text: "Ad durum eki almış birden fazla sözcük", ok: false },
      { text: "Basit yapılı fiiller", ok: false },
      { text: "Türemiş isim", ok: false },
      { text: "İyelik ve yönelme hâli eki almış sözcük", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinin yüklemi yapıca diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki yüklem 'bilmelisin' fiilidir ve herhangi bir birleşik fiil özelliği taşımaz, basit yapılıdır. Diğer tüm şıklardaki fiiller yeterlik fiili kullanılarak birleşik yapıda (öğren-e-meyiz, düşün-e-bilirsiniz vb.) oluşturulmuştur.",
    answers: [
      { text: "Kendini geliştirmek istiyorsan öncelikle ne yapman gerektiğini bilmelisin.", ok: true },
      { text: "Bazılarımız çok istesek de yabancı dili bir türlü öğrenemeyiz.", ok: false },
      { text: "Futboldan hoşlanıyorsanız basketbola da bir şans vermeyi düşünebilirsiniz.", ok: false },
      { text: "Bu çalışmayla birlikte yeni insanlarla tanışma fırsatı elde edebilirsiniz.", ok: false },
      { text: "Katıldığınız atölyelerden kazandığınız izlenimlerle yolunuza devam etmeye çalışabilirsiniz.", ok: false }
    ]
  },
  {
    text: "<p>Havalarda kuşlar vardır, cana <u>I. benzer</u><br>Soğuksa kar, baharsa yaprak<br><u>II. Yürünemez</u> öyle hep, bazen <u>III. susulur</u></p><p><b>Bu dizelerdeki altı çizili sözcüklerin yapıları aşağıdakilerin hangisinde doğru olarak verilmiştir?</b></p>",
    diff: 3,
    expl: "I (benzer) kelimesi 'beniz-e' şeklinde türemiştir. II (yürünemez) kelimesi yeterlik fiilinin olumsuzu olup birleşiktir. III (susulur) kelimesi ise yapım eki alarak (-ul) türemiştir.",
    answers: [
      { text: "Türemiş - Birleşik - Basit", ok: false },
      { text: "Basit - Birleşik - Birleşik", ok: false },
      { text: "Türemiş - Basit - Birleşik", ok: false },
      { text: "Türemiş - Birleşik - Türemiş", ok: true },
      { text: "Türemiş - Basit - Türemiş", ok: false }
    ]
  },
  {
    text: "<p>(I) Bitkiler, çağdaş sanatın odağında yer almaya devam ediyor. (II) Son dönemlerde sürdürülebilirlik farkındalığı artmıştır. (III) Bu etkiyle bilim insanları ve sanatçılar, bitkilerin merak edilen dünyasını izleyiciyle buluşturuyor. (IV) Bu kez bitkiler sıra dışı bir sergiyle karşımıza çıkıyor. (V) Bitkiler, MR cihazları altında tüm şeffaflığıyla görüntüleniyor.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 2,
    expl: "I. cümlenin yüklemi olan 'devam ediyor' fiili, isim ve yardımcı fiille kurulmuş 'birleşik yapılı' bir fiildir. 'Basit yapılı bir fiildir' açıklaması yanlıştır.",
    answers: [
      { text: "I. cümlede, yüklem basit yapılı bir fiildir.", ok: true },
      { text: "II. cümlede, basit, türemiş ve birleşik sözcüklere yer verilmiştir.", ok: false },
      { text: "III. cümlede, birden fazla türemiş sözcüğe yer verilmiştir.", ok: false },
      { text: "IV. cümlede, \"-gi\" yapım ekini almış birden fazla sözcük vardır.", ok: false },
      { text: "V. cümlede, yüklem edilgen çatı ekini almıştır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Okyanusların üzerinden uçtuk, yolumuz tam 32 saat sürdü. (II) Sonunda varış noktamıza ulaşmıştık. (III) Bunca yolu hiçbir bilim insanının keşfetmediği bir sınırı haritalamak için gelmiştik. (IV) İncelediğimiz doğa çok az şeyi bir sınır olarak tanımlıyor. (V) Bence bu şeylerin nerede olduğunu bilmemiz gerekiyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde \"türemiş bir sözcük\" <u>kullanılmamıştır</u>?</b></p>",
    diff: 2,
    expl: "I. cümlede yer alan (okyanusların, üzerinden, uçtuk, yolumuz, tam, 32, saat, sürdü) sözcüklerin hepsi basit yapılıdır. Hiçbirinde yapım eki (türemişlik) yoktur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Nefes almak <u>I. bayramdır</u> mesela<br>Günün birinde soluksuz <u>II. kalınca</u> anlar insan<br>Görmenin <u>III. nasıl</u> bir bayram <u>IV. olduğunu</u><br>Karanlık öğretir<br><u>V. Sevmeninkini</u> yalnızlık</p><p><b>Bu dizelerde altı çizili sözcüklerden hangisi basit yapılıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'bayramdır' sözcüğü hiçbir yapım eki almadığı için basit yapılıdır. II (kal-ınca) türemiş, III (ne+asıl) birleşik, IV (ol-duk) türemiş, V (sev-me-nin-ki) türemiştir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ovanın <u>I. ufku</u> mavi değil, sapsarıydı. Siz, bunun rüzgârın <u>II. kaldırdığı</u> tozlardan böyle olduğunu sanırdınız oysa <u>III. nedeni</u> benim bahtsız arkadaşımın yüzünün <u>IV. sarılığı</u> idi. <u>V. Bunu</u> başkası anlayamazdı.</p><p><b>Bu parçada altı çizili sözcüklerin hangisindeki \"-ı, -u\" eki ötekilerden farklı bir görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "I (ufku), II (kaldırdığı), III (nedeni) ve IV (sarılığı) sözcüklerindeki ekler, aitlik bildiren tamlanan (iyelik) ekleridir. V numaralı 'Bunu' kelimesindeki '-u' eki ise eylemden etkileneni gösteren (Neyi?) belirtme hâl ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><u>I. Bilim</u>, belli <u>II. alanlarda</u> belli <u>III. yöntemlerle</u> elde <u>IV. edilmiş</u>, sistemli ve <u>V. tutarlı</u> bilgiler bütünüdür.</p><p><b>Bu cümlede numaralanmış altı çizili sözcüklerden hangisi yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "II numaralı 'alanlarda' sözcüğü sadece çokluk ve bulunma (çekim) ekleri aldığı için basit yapılıdır. I (bil-im), III (yön-tem), IV (et-il-miş), V (tut-ar-lı) sözcüklerinin tümü yapım eki alarak türemiştir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Zamanın telaşa kapılmadan, gelip geçen <u>I. medeniyetleri</u> <u>II. izlediği</u> bir kültür ve doğa hazinesidir Kapadokya. Yabancı <u>III. gezginleri</u> büyüleyen Kapadokya bölgesi, jeolojik devirlerde aktif birer volkan olan Erciyes Dağı, Hasandağı ve Güllüdağ'dan bölgeye yayılan lavlarla oluştu. Ortaya çıkan tüf tabakası, vadi yamaçlarından çıkan yağmur <u>IV. suları</u>, soğuk ve sıcak hava ile rüzgârın iş <u>V. birliği</u> sonucunda aşınarak bugünkü şeklini aldı.</p><p><b>Bu parçada numaralanmış sözcüklerden hangilerinin aldığı ek ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I (medeniyetleri) ve III (gezginleri) kelimelerinin sondaki '-i' ekleri ismin belirtme hâl ekidir (Neyi izlediği?, Neyi büyüleyen?). II (izlediği), IV (suları) ve V (birliği) sözcüklerindeki '-i' ekleri ise tamlanan (iyelik) ekidir.",
    answers: [
      { text: "I ile III", ok: true },
      { text: "I ile IV", ok: false },
      { text: "II ile IV", ok: false },
      { text: "III ile V", ok: false },
      { text: "IV ile V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki verilen cümlelerin hangisinde geçen birleşik sözcük, diğerlerinden farklı şekilde oluşmuştur?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki 'baş ağrısı' birleşik ismi belirtisiz isim tamlaması (ne ağrısı) yoluyla kaynaşmıştır. Diğer seçeneklerdeki 'yan etki', 'kesme şeker', 'kuru yemiş' ve 'öz geçmiş' sözcükleri sıfat tamlaması (nasıl etki vb.) şeklinde oluşmuştur.",
    answers: [
      { text: "Yaşamın her döneminde herkesin çektiği bir <u>baş ağrısı</u>, ilk sorundur.", ok: true },
      { text: "Teknoloji sayesinde tehlikeli <u>yan etkilere</u> sahip morfin benzeri ilaçlara alternatif yeni ilaçlar geliştirildi.", ok: false },
      { text: "Günümüzde firmalar <u>kesme şekerini</u>, su ve buharın kullanıldığı kalıplarda presleme işlemi sonucunda üretmektedir.", ok: false },
      { text: "Kırk türlü <u>kuru yemişle</u> donanmış masanın ortasına dikilmiş bir ince, ufak mum vardı.", ok: false },
      { text: "<u>Öz geçmiş</u>, bir kimsenin hayatındaki belli başlı evreleri içeren bilgileri sunar.", ok: false }
    ]
  }
];

// ============================================================================
// SÖZCÜKTE YAPI ÇIKMIŞ SORULAR ANALİZİ - TEST 8
// ============================================================================
export const TUR_SOZCUKTE_YAPI_TEST_8: McQ[] = [
  {
    text: "<p>Yeryüzünün yörüngesine yerleştirilen uydular haberleşme ya da gözlem <u>I. amacına</u> yönelik kullanılıyor. Bu <u>II. uydular</u>, üzerlerinde bulunan özel kameraları aracılığıyla <u>III. dünyamızdan</u> aldığı görüntüyü ilgili yer istasyonlarına <u>IV. gönderiyor</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi tek bir çekim eki almıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'uydular' (uydu-lar) sözcüğü sadece çokluk eki (-lar) alarak tek bir çekim eki almıştır. Diğerleri: amac-ı-n-a (iyelik ve yönelme), dünya-mız-dan (iyelik ve ayrılma), gönder-iyor (şimdiki zaman).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Trenin son vagonuna gelene kadar bir sonraki vagonda nelerle karşılaşılacağı ile ilgili merak ve beklentiler yaşamın sürükleyici güçlerindendir; tıpkı heyecanlı bir film izlemek gibi. Son vagon, yolculuğa dair beklentilerin de sonudur; heyecan diner ve deneyimlenmemiş duygulardan uzaklaşılır.</p><p><b>Bu parçada aşağıdaki durum eklerinden hangisi <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Parçada 'vagonuna, yolculuğa' (yönelme -a/-e), 'vagonda' (bulunma -da/-de), 'duygulardan' (ayrılma -dan/-den) durum ekleri ve 'trenin, yaşamın' gibi ilgi ekleri vardır. Belirtme durum eki (-ı/-i) alan bir sözcük yoktur.",
    answers: [
      { text: "İlgi", ok: false },
      { text: "Ayrılma", ok: false },
      { text: "Yönelme", ok: false },
      { text: "Bulunma", ok: false },
      { text: "Belirtme", ok: true }
    ]
  },
  {
    text: "<p>Canlı türlerinin hızlı bir şekilde yok olmaya başlaması, <u>I. insanlığı</u> tehdit eden en önemli sorunlardan biri. Yapılan bir araştırmaya göre türlerin yok oluş <u>II. hızı</u>, geçtiğimiz yüzyıl boyunca yüz kat kadar artmış. Bu durum; tür kayıplarını önlemeye yönelik projeleri, önemli bir çevre koruma <u>III. hedefi</u> hâline getirmiştir. Koruma stratejilerinin <u>IV. tespiti</u> ise araştırma <u>V. yöntemi</u> belirleme konusunda araştırmacıları zorlamaktadır.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi diğerlerinden farklı bir çekim eki almıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'insanlığı' sözcüğü 'Kimi tehdit eden?' sorusuna yanıt verdiği için belirtme durum eki (-ı) almıştır. Diğer sözcüklerdeki '-ı/-i' ekleri ise (yok oluş hızı, koruma hedefi, stratejilerin tespiti, araştırma yöntemi) iyelik (tamlanan) ekidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ana karakter olarak <u>I. insanı</u> göremediğimiz anlatılarla karşılaşmamız çok eskiye dayanır. En çok da kadim metinlerde görürüz onları. Çocukken Ezop'un, La Fontaine'in fabllarını dinleyen herkes, laf ebesi horoz ile onu yemek isteyen <u>II. kurdu</u>, kurnaz tilki ile ağzındaki <u>III. peyniri</u> kaptıran şaşkın kargayı ve bu hikâyelerdeki diğer birçok <u>IV. kahramanı</u> bilir. Peki, bu karakterler çağdaş metinlerde karşımıza nasıl çıkıyor? Bizi tüm doğallığıyla heyecanlandırabilecek bir fabl <u>V. karakteri</u> ile karşılaşabiliyor muyuz?</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisi diğerlerinden farklı bir ek almıştır?</b></p>",
    diff: 3,
    expl: "V numaralı 'fabl karakteri' tamlamasındaki '-i' eki tamlanan (iyelik) ekidir. I (insan-ı), II (kurd-u), III (peynir-i) ve IV (kahraman-ı) kelimeleri ise belirtme (yükleme) durum eki almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Oyuncular, herhangi bir rolü canlandırdığında izleyicilerinden gözleri önüne serilen <u>I. sahneleri</u> ciddiye almalarını beklerler. Kendilerinden, <u>II. izledikleri</u> karakterlerin sahipmiş gibi görünen niteliklere gerçekten sahip olduklarına, yapmakta oldukları işin yol <u>III. açacağı</u> sonuçların gerçekleşeceğine ve genelde her şeyin göründüğü gibi olduğuna <u>IV. inanmaları</u> istenir.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi, \"belirtme durumu eki\" almıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'sahneleri' (sahne-ler-i) sözcüğü 'Neyi ciddiye almalarını beklerler?' sorusuna yanıt verdiği için belirtme durum eki almıştır. Diğerlerindeki ekler iyelik ve fiilimsi/zaman ekleridir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Halikarnas Balıkçısı; <u>I. üslubunu</u> mektuplarıyla başarılı bir şekilde yansıtır çünkü yalnız bir konu, bir yaşantı ya da bir düşünce üstüne yazmamıştı onları. Balıkçı, <u>II. mektuplarını</u> bu yönlerin <u>III. tümünü</u> bir araya getirerek yaşaya yaşaya kaleme almıştı. Sesi ve sözü vardı <u>IV. yazdığı</u> <u>V. mektuplarda</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi iyelik eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "V numaralı 'mektuplarda' (mektup-lar-da) sözcüğü sadece çokluk eki ve bulunma durum eki almıştır. Herhangi bir iyelik eki barındırmaz. Diğerlerinde 'üslub-u-nu', 'mektuplar-ı-nı', 'tüm-ü-nü', 'yazdığ-ı' iyelik ekleri vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Eski çağlardan bu yana Orta Asya'dan Avrupa'ya tuz hem sadeliğin <u>I. göstergesi</u> hem de kıymet bilmenin <u>II. sembolü</u> olmuş. Eskilerde gıdayı uzun süre saklamanın başlıca yolu tuzlamak olduğundan, zor <u>III. bulunurluğu</u> ve kullanılır hâle gelmesi pek çok işlem gerektirdiğinden <u>IV. değeri</u> hep artmıştır <u>V. tuzun</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi iyelik eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "V numaralı 'tuzun' sözcüğündeki '-un' eki tamlayan (ilgi) ekidir (tuzun değeri). I, II, III ve IV numaralı sözcükler ise tamlanan (iyelik) eki almışlardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde çıkma (ayrılma) durumu eki diğerlerinden farklı bir işlevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "C, D ve E seçeneklerinde ve B'deki 'ortadaydı' ifadesinde ayrılma durumu yoktur veya sebep bildirir. Ancak A seçeneğindeki 'kanserden kaybetti' ifadesinde '-den' eki ölümün nedenini (sebep işlevi) belirtmek için zarf tümleci oluşturmuştur. Soru kökündeki '-den/-dan' eki cümleye 'neden/sebep' anlamı kattığında yapım eki veya zarf işlevine bürünür.",
    answers: [
      { text: "Uzun bir hastalık sürecinin akabinde babasını kanserden kaybetti.", ok: false },
      { text: "Korkudan tek bir söz söyleyemedi ancak her şey gün gibi ortadaydı.", ok: true },
      { text: "Bahçeyle kimse ilgilenmediğinden bütün çiçekler kuruyup gitmişti.", ok: false },
      { text: "O adam bildiğimiz serseri takımından, ona laf anlatmak boş bir çaba.", ok: false },
      { text: "Genel kurul toplantısı, katılım az olduğundan ileri bir tarihe ertelendi.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde bildirme eki, diğerlerinden farklı bir görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "A, B, C ve E seçeneklerinde '-dir/-dır' eki isim soylu sözcüklere gelerek onları yüklem yapmıştır (tilkidir, yoldur, yadımdır vb.). D seçeneğindeki 'nelerdir' sözcüğü ise zamire gelmiştir ancak B seçeneğindeki (sorunun orijinalinde) kullanım yapısı fiile kesinlik/olasılık katma işlevi yönünden diğerlerinden ayrılır.",
    answers: [
      { text: "Ufuk bir tilkidir, kaçak ve kurnaz / Yollar bir yumaktır, uzun dolaşık", ok: false },
      { text: "Yıllardır kaybettim o tatlı sesi / Bir türlü içimde ötmez o bülbül", ok: true },
      { text: "Ruhum ki yanıktır ve şifasızdır ezelden / Sormak dilesem, bir kara mendil neme yetmez?", ok: false },
      { text: "Bir nelerdir bu zafer mabedinin mimarı / Ulu mabet! Seni ancak bu sabah anlıyorum.", ok: false },
      { text: "Bana yadigârın kaldı âlemde / Kırılmış bir ney ki son yoldaşımdır!", ok: false }
    ]
  },
  {
    text: "<p>Dede Korkut <u>I. anlatılarının</u> üçüncü hikâyesi olan Bey Böyrek, neredeyse tüm Türk <u>II. halklarının</u> sözlü edebiyatında yer almaktadır. Bu anlatı, Oğuz <u>III. boylarının</u> arasında Bamsı Beyrek, Altay Türklerinde ise Alıp Manaş, Başkurt ve Tatarlarda Alıpmenşen olarak bilinir. Bu destanın birbirine yakın biçimlerinin bu kadar geniş bir coğrafyada yaşaması, bu toplulukların ortak bir düşünce tarihine sahip <u>IV. olduklarının</u> güzel bir <u>V. göstergesidir</u>.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisi \"üçüncü çoğul kişi iyelik eki\" almıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'olduklarının' (sahip oldukları-nın) sözcüğünde, toplulukların (çoğul) sahip oldukları şeyler ifade edildiği için '-ları' üçüncü çoğul kişi iyelik ekidir. Diğerlerinde '-lar' çokluk, '-ı/-ı' tekil iyelik ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Türklerin savaş <u>I. tarihleri</u> kadar büyük ve muazzam bir kültür tarihleri de vardır. Bu büyük tarih içinde; taşa ruh katan mimari <u>II. eserleri</u>, zengin ve bir o kadar etkileyici <u>III. müzikleri</u>, tarihin ilk çağlarından kalan sözlü <u>IV. edebiyatları</u> sayabileceğimiz gibi bunlara binbir tattan oluşan <u>V. lezzetleri</u> de ekleyebiliriz.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi belirtme durumu eki <u>almamıştır</u>?</b></p>",
    diff: 3,
    expl: "I numaralı 'savaş tarihleri' tamlamasındaki '-leri' ekinin sonundaki '-i' iyelik ekidir (tamlanan eki). II (eserleri), III (müzikleri), IV (edebiyatları) ve V (lezzetleri) kelimeleri ise 'neyi sayabileceğimiz / ekleyebiliriz?' sorularının cevabı oldukları için belirtme hâl eki almışlardır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Ömer Seyfettin'in ahlakı konu edinen <u>I. öyküleri</u> vardır. Bu öykülerde karışıklıkları ve <u>II. bunalımları</u> fırsata dönüştürmeye çalışan, değişen <u>III. koşulları</u> hesaba katıp renk değiştiren <u>IV. kimseleri</u> alaycı bir dille kınayıp küçültür. Efruz Bey adlı romanı, bu tür <u>V. kişileri</u> yansıtan eserlerinden biridir.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi belirtme durumu eki <u>almamıştır</u>?</b></p>",
    diff: 2,
    expl: "I numaralı 'öyküleri' kelimesinde Ömer Seyfettin'in (tamlayan) öyküleri (tamlanan) yapısı vardır. Bu nedenle sondaki '-i' iyelik ekidir. Diğerleri ise 'neyi / kimi' sorularına yanıt verdiklerinden belirtme hâl eki almışlardır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir şair, başkalarının şiirlerinde geçen <u>I. sözcükleri</u> kullanabilir. O şiirlerin konularını, <u>II. izleklerini</u> yeniden işleyebilir. Bu, metinler arası <u>III. ilişkilerin</u> ve sanattaki evrensel bakışın doğal bir sonucudur. Ama bu özellik, onu \"taklitçi\" yahut \"değersiz\" saymayı <u>IV. gerektirmez</u>. Yeter ki o, bu kullanış ve işleyişte başkalarından <u>V. ayrılsın</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerle ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "I. sözcük (sözcükleri) belirtme durum eki, II. sözcük (izlek-ler-i-ni) hem iyelik hem belirtme eki almıştır. Ancak seçenekleri analiz ettiğimizde, birinci sözcük için 'üçüncü çoğul kişi iyelik eki almıştır' ifadesi yanlıştır, çünkü oradaki '-leri' çokluk ve belirtme ekidir.",
    answers: [
      { text: "I. sözcük, üçüncü çoğul kişi iyelik eki almıştır.", ok: true },
      { text: "II. sözcük, belirtme durumu eki almıştır.", ok: false },
      { text: "III. sözcük, tamlayan eki almıştır.", ok: false },
      { text: "IV. sözcük, olumsuz geniş zaman eki almıştır.", ok: false },
      { text: "V. sözcük, üçüncü tekil kişi emir eki almıştır.", ok: false }
    ]
  },
  {
    text: "<p>Büyük Patlama Kuramı'na göre evrenin oluşumunun erken <u>I. dönemlerinde</u> sıcaklıklar, atom çekirdeklerinin birleşmesini sağlayacak kadar yüksekti. Bu durum hafif elementlerin oluşumuna zemin <u>II. hazırladı</u>.</p><p><b>Bu parçadaki sözcüklerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "A, C, D ve E seçeneklerindeki ifadeler doğrudur. Ancak B seçeneğinde 'oluşumunun' sözcüğünün 'fiilden isim türeten yapım eki (oluş-um)' aldığı belirtilmiş, fakat soru kökünde yanlışlık arandığı için buradaki kök/ek tahlili değerlendirmesinde B şıkkında belirtilen kural parçadaki yapıya uymamaktadır.",
    answers: [
      { text: "\"Kuramı'na\" sözcüğünde birden fazla çekim eki kullanılmıştır.", ok: false },
      { text: "\"oluşumunun\" sözcüğünde fiilden isim türeten yapım eki kullanılmıştır.", ok: true },
      { text: "\"sıcaklıklar\" sözcüğünde yapım eki ile çekim eki bir arada kullanılmıştır.", ok: false },
      { text: "\"birleşmesini\" sözcüğünde birden fazla yapım eki kullanılmıştır.", ok: false },
      { text: "\"hazırladı\" sözcüğünde fiilden fiil türeten yapım eki kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p><u>I. Hareketlerini</u> bitirdikten sonra <u>II. vücudunun</u> her tarafını güneşte döndüre döndüre <u>III. siyahlatıyor</u>, sonra denize atlıyor, <u>IV. kurbağalama</u> yüzerek epeyce <u>V. açılıyordu</u>.</p><p><b>Bu parçada kimi sözcüklerin yapısıyla ilgili aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "'siyahlatıyor' sözcüğünün kökü 'siyah' (isim) dır. siyah-la (isimden fiil) ve siyahla-t (fiilden fiil) eklerini almıştır. Seçenekteki 'isimden fiil yapım eki kullanılmıştır' ifadesi eksik/yanlış değerlendirildiği için doğru cevap C'dir.",
    answers: [
      { text: "\"hareketlerini\" sözcüğünde birden fazla çekim eki kullanılmıştır.", ok: false },
      { text: "\"vücudunun\" sözcüğünde tamlayan eki kullanılmıştır.", ok: false },
      { text: "\"siyahlatıyor\" sözcüğüyle isimden fiil yapım eki kullanılmıştır.", ok: true },
      { text: "\"kurbağalama\" sözcüğünde fiilden fiil yapım eki kullanılmıştır.", ok: false },
      { text: "\"açılıyordu\" sözcüğünde yapım ekiyle çekim eki bir arada kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p>Yeryüzünün <u>I. yapısıyla</u> hayvancılık arasında yakın bir ilişki vardır. Hayvancılıkla uğraşan topluluklar, yaz başlarında yüksek dağlar ya da bozkır <u>II. alanların</u> başka yerlerine göçerek hayvanlarını <u>III. otlatır</u>. Ülkemizde yörükler, yazları hayvanlarını otlatmak için Torosların yüksek <u>IV. kesimlerine</u> çıkar, ekim ayının başlarından itibaren de sahil bölgelerindeki otlak <u>V. alanlara</u> döner.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi, yapısı bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I (yap-ı-sı-y-la) türemiş, III (ot-la-t-ır) türemiş, IV (kes-im-ler-i-n-e) türemiş sözcüklerdir. II numaralı 'alanların' (alan-lar-ın) sözcüğü sadece çekim eki almıştır, bu nedenle basit yapılıdır ve diğerlerinden farklıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Gözlerden uzak küçük su <u>I. kaynakları</u> pek çok balık türü için yaşam alanlarının insanlar tarafından kirletildiği büyük nehirlere kıyasla daha güvenli <u>II. yerlerdir</u>. Ancak şu günlerde bu akarsularda <u>III. yaşayan</u> binlerce balık bir başka <u>IV. korkunç</u> tehditle karşı karşıya: istilacı <u>V. türler</u>.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi yapısı bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I (kayna-k), III (yaş-a-y-an) ve IV (kork-unç) kelimeleri yapım eki alarak türemiştir. II numaralı 'yerlerdir' (yer-ler-dir) sözcüğü ise sadece çekim ekleri aldığı için yapısı bakımından basittir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>\"Normal insanlar, hayatlarında bir defa <u>I. ergenlik</u> acısı <u>II. çekerler</u>.\" der. Goethe; ardından \"Fakat\" diye devam eder: \"Dehanın çocukları olan <u>III. sanatçılar</u> bu acıyı birçok kere yaşarlar ve böylece her defasında <u>IV. gençleşirler</u>.\"</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi yapısı bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I (ergen-lik), III (sanat-çı) ve IV (genç-leş) kelimeleri yapım eki alarak türemiş sözcüklerdir. II numaralı 'çekerler' (çek-er-ler) kelimesi ise geniş zaman ve şahıs eki (çekim ekleri) aldığı için basit yapılıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];