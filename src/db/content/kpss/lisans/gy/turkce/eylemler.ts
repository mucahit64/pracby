import { McQ } from "../../../../types";

// ============================================================================
// EYLEMLER - TEST 1
// ============================================================================
export const TUR_EYLEMLER_TEST_15: McQ[] = [
  {
    text: "<p>- Ben sana ne soruyorum, sen ne cevap veriyorsun!</p><p><b>Aşağıdaki cümlelerin hangisinde \"-yor\" eki öncüldeki işlevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Öncüldeki cümlede \"-yor\" eki bilinen geçmiş zaman işlevinde kullanılmıştır. Eylem bir saniye önce bile gerçekleşse geçmiş zaman kapsamındadır, \"sorma\" işi şaşırma işinden daha öncedir. E seçeneğindeki \"Niçin böyle yazıyorsun, diye sorunca şaşkınlığımı gizleyemedim.\" cümlesinde de '-yor' eki, geçmişte söylenen bir sözü aktardığı için belirli geçmiş zaman işlevinde (anlam kaymasıyla) kullanılmıştır. Diğer seçeneklerde gelecek (A, D) veya geniş zaman (B, C) işlevi vardır.",
    answers: [
      { text: "Kararım karar, akşama bu evi boşaltıyorum artık.", ok: false },
      { text: "Elbette küs değilim, her fırsatta ona hâl hatır soruyorum.", ok: false },
      { text: "Her öğleden sonra orası senin burası benim geziyoruz.", ok: false },
      { text: "Hiçbirimiz istemesek de yaz kampına o da bizimle geliyor.", ok: false },
      { text: "Niçin böyle yazıyorsun, diye sorunca şaşkınlığımı gizleyemedim.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"yardımcı eylem\" kullanılmıştır?</b></p>",
    diff: 2,
    expl: "Yardımcı eylemler (et-, ol-, eyle-, kıl-, ver-, vb.) isim soylu sözcüklerle birleşerek onları fiil yapar. E seçeneğindeki \"nankörlük edeceğini\" ifadesindeki \"et-\" sözcüğü yardımcı eylemdir (nankörlük etmek). Diğer şıklardaki etmek, vermek, yapmak ve olmak fiilleri kendi temel anlamlarında, asıl fiil olarak kullanılmıştır.",
    answers: [
      { text: "Kira hariç aylık sadece mutfak masrafımız tam yirmi bin ediyor.", ok: false },
      { text: "Adamın bu saldırgan tavırlarını kusurlu ve zayıf oluşuna verdi.", ok: false },
      { text: "Her görevi ayrım gözetmeden aynı titizlikle yapardı.", ok: false },
      { text: "Ardımdan konuşulan, onun açgözlü tavırlarına gösterdiğim öfke oldu.", ok: false },
      { text: "Nankörlük edeceğini bile bile her birimiz onun yanındaydık.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde anlamca kaynaşmış birleşik fiil farklı görevde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğindeki \"akıllara durgunluk veren bir buluş\" sözünde \"akıllara durgunluk vermek\" deyimi (anlamca kaynaşmış birleşik fiil), sıfat-fiil eki alarak bir sıfat tamlaması grubu kurmuş ve cümlede sıfat görevinde kullanılmıştır. Diğer cümlelerdeki deyimler (hakından gelmek, yazık etmek vb.) çekimli fiil olarak cümlenin yüklemi görevindedir.",
    answers: [
      { text: "Projenin tüm ağır işlerini ona yükleyerek işin hamallığını sürekli ona yaptırdılar.", ok: false },
      { text: "Elindeki tüm parayı gereksiz şeylere harcayarak geleceğine yazık etti.", ok: false },
      { text: "Son keşif, akıllara durgunluk veren bir buluş olarak nitelendirildi.", ok: true },
      { text: "Biraz daha fazla para kazanabilmek uğruna başkalarının emeğini basamak yaptı.", ok: false },
      { text: "Yıllardır desteklediğim insanların para için böyle yapması gücüme gidiyor.", ok: false }
    ]
  },
  {
    text: "<p>Elbiselerini masanın üstüne <u>I. atıvermiş</u>, pijamasının ceketini yere <u>II. fırlatmıştı</u>. Ona <u>III. bakamıyordum</u> fakat onunla doluydum. O zaman daha küçüktü, çok <u>IV. hastalanmıştı</u>, ateşi vardı, sürekli kendi kendine <u>V. söyleniyordu</u>. Tabii o, şimdi bunu hatırlamaz ki!</p><p><b>Bu parçada numaralanmış altı çizili fiillerden hangileri yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "I numaralı \"atıvermiş\" sözcüğü \"-iver-\" tezlik kurallı birleşik fiiliyle, III numaralı \"bakamıyordum\" kelimesi ise \"-abil-\" yeterlik kurallı birleşik fiilinin olumsuzuyla çekimlendiği için yapıca birleşiktir. Diğer kelimeler (fırlatmıştı, hastalanmıştı, söyleniyordu) ise yapım eki aldıkları için yapıca türemiştir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve V", ok: false }
    ]
  },
  {
    text: "<p>(I) Yusuf, titreyen elleriyle ılgınları araladı. (II) Yarı kapalı, yumuk yumuk gözlerini büsbütün küçülterek nehrin iki kıyısını inceledi. (III) Önünde bir bataklık, bulanık suların ortasına doğru da bir yarımada vardı. (IV) Yarımada, nehrin en derin noktasına kadar sokulmuştu. (V) Yığın yığın sarı miller, yakıcı mayıs güneşinin altında, ıslak ıslak parlıyordu.</p><p><b>Bu parçada numaralanmış cümlelerden hangisinin yüklemi, kök türü bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "IV numaralı cümlenin yüklemi olan \"sokulmuştu\" sözcüğünün kökü \"sok(mak)\" fiilidir. I (ara-lamak), II (ince-lemek), III (var-dı), V (par-lıyordu - yansıma) cümlelerinin yüklemlerinin kökleri ise isim soyludur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerden hangisinin yüklemi \"oluş fiili\" <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Oluş fiilleri; öznenin kendi iradesi dışında, zamanla kendiliğinden meydana gelen değişimi anlatan fiillerdir (kalınlaşmak, kızarmak, küflenmek, olgunlaşmak vb.). E seçeneğindeki \"bayılmışım\" fiili ise öznenin içinde bulunduğu durumu yansıtan ve nesne alamayan bir \"durum fiili\"dir.",
    answers: [
      { text: "Soğuk hava dalgası yüzünden gölün yüzeyindeki buz tabakası iyice kalınlaştı.", ok: false },
      { text: "İlk defa büyük bir kalabalığa sunum yaptığı için heyecandan yüzü kızardı.", ok: false },
      { text: "Mutfak kapısının koluna astığımız ekmeği unuttuğumuz için ekmek küflenmiş.", ok: false },
      { text: "Bahçedeki domatesler, düzenli sulama ve güneş ışığı sayesinde birkaç hafta içinde tamamen olgunlaştı.", ok: false },
      { text: "Kalabalık ve sıcak bir ortamda uzun süre, aç ve uykusuz bir şekilde ayakta durunca bayılmışım.", ok: true }
    ]
  },
  {
    text: "<p>Fiil çekim eklerinden ikisi; basit, türemiş veya birleşik yapılı fiillerin üzerine gelen sırasıyla kip ve kişi ekleridir. Bu durum hem basit zamanlı hem de birleşik zamanlı fiiller için geçerlidir.</p><p><b>Aşağıda verilen cümlelerin hangisinde bu iki fiil çekim ekinin, eklenme sırasına aykırı bir kullanım söz konusudur?</b></p>",
    diff: 3,
    expl: "Üçüncü çoğul kişi ile yapılan birleşik zamanlı çekimlerde \"-lar\" kişi eki nadiren ek eylemden önce gelebilir (Örn: gel-miş-ler-di). C seçeneğindeki \"sever-ler-miş\" (geniş zaman kip eki + 3. çoğul şahıs eki + rivayet ek eylemi) sözcüğünde bu kural dışı (kip ekinden sonra ek eylemden önce kişi ekinin girmesi) durum görülmektedir.",
    answers: [
      { text: "Bana soğuk davranıyorsun, artık hiç sevmiyor musun beni?", ok: false },
      { text: "Saçların ağarıncaya kadar beni kalbinde mi saklayacaktın?", ok: false },
      { text: "Eskiler çok güzel severlermiş, bunu yine eskilerden öğrendim.", ok: true },
      { text: "Sana daha önce de söylemiştim, bu hayatta önce kendini sevmelisin!", ok: false },
      { text: "Kendini sevemeyen insanlar, diğer canlıları sevebilirler mi?", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanların beden hareketleri tipik olarak bilinçaltı tarafından kontrol edildiğinden, izlediğiniz kişi gönderdiği mesajın farkında olmayabilir. (II) Hatta bilinç seviyesinde o mesajı gönderdiğini kabul etmeyebilir. (III) Beden dilinin insanların iç dünyasını yansıtmasından dolayı bu dili kullanarak, karşımızdakileri daha iyi anlayarak etkili bir iletişim kurabiliriz. (IV) Kendi beden hareketlerimizi denetleyerek sosyal ortamlara daha çabuk uyum sağlayabiliriz. (V) Tüm bunların yapılabilmesi yani beden dilinin taşıdığı mesajların anlaşılabilmesi ise iyi bir gözlem gerektirir.</p><p><b>Bu parçada numaralanmış cümlelerden hangisinin yüklemi yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki cümlenin yüklemi \"gerek(mek)\" fiil kökünden \"-tir\" fiilden fiil yapım eki alarak türemiştir (gerek-tir-ir). Fakat I, II, III ve IV. cümlelerin yüklemleri (ol-ma-y-a-bil-ir, kabul et-me-y-e-bil-ir, iletişim kur-abil-ir-iz, uyum sağla-y-abil-ir-iz) kurallı birleşik veya yardımcı eylemle kurulmuş birleşik fiillerdir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>\"Bir insana kendi zihni mi yoksa kendi bedeni mi daha <u>I. yakındır</u>?\" sorusunu sorarak başlayalım. <u>II. Yıllardır</u> kör, sağır ve üstelik felçli bir insan düşününüz. Bedeninden fazla haberdar olamasa da zihninde geçen düşünme, canı sıkılma ya da canı bir şey isteme, başı dönme gibi olayların <u>III. farkındadır</u>. Yani zihninin içinde geçenlerden <u>IV. haberdardır</u>. Zihnimizle olan bağımız bir anlamda daha <u>V. sıkıdır</u>, zaten bedenimizle olan bağımızı hatta bir bedenimiz olduğu bilgisini bile zihnimiz sayesinde ediniriz.</p><p><b>Bu parçada numaralanmış altı çizili sözlerden hangisinde bildirme eki, diğerlerinden farklı görevdedir?</b></p>",
    diff: 3,
    expl: "Bildirme eki \"-dir\", isim soylu sözcükleri yüklem yapabilir veya zaman zarfı yapabilir. II numaralı \"yıllardır\" sözcüğüne eklenen \"-dır\" bildirme eki, cümlede zaman zarfı (Ne zamandır kör? Yıllardır) yapmıştır. Diğer seçeneklerdeki \"-dır\" ekleri isim soylu sözcükleri cümlenin yüklemi yapmıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>\"Bil-, ver-, yaz-, kal-, gel-, dur-\" tasviri fiilleri, esas fiil olmaktan çıkıp eklendikleri fiillere çeşitli anlam incelikleri katarlar, bu nedenle yardımcı fiil olarak kabul edilirler.</p><p><b>Aşağıdaki cümlelerin hangisinde bu durumu örneklendirecek bir sözcüğe yer <u>verilmemiştir</u>?</b></p>",
    diff: 2,
    expl: "Kurallı (tasviri) birleşik fiiller bu yapıya örnektir. A'da \"açıklayabilmek\" (yeterlik), B'de \"anlatılagelen\" (sürerlik), C'de \"söylemeyiver\" (tezlik), E'de \"düşeyazdı\" (yaklaşma) kurallı birleşik fiilleri kullanılmıştır. D seçeneğinde ise kurallı (tasviri) birleşik fiil yoktur.",
    answers: [
      { text: "Bu kadar karmaşık bir durumu tüm detaylarıyla hatırlayıp açıklayabilmek kolay değil.", ok: false },
      { text: "Bizim köyde, nesilden nesile anlatılagelen efsaneler hâlâ canlılığını koruyor.", ok: false },
      { text: "Ona anlattığın her şeyi, başkalarından duyuyorsan sen de ona hiçbir şeyini söylemeyiver.", ok: false },
      { text: "Oyunun bir süre daha afişte kalması için başarıyla oynanması gerekiyor.", ok: true },
      { text: "Ablam kapıyı açıp da beni yüzü gözü gömgök görünce düşeyazdı.", ok: false }
    ]
  },
  {
    text: "<p>(I) Münazaralar; öğrencilerin konuşma becerilerinin gelişmesine, karşılaştırmalı düşünme alışkanlığı kazanmalarına yardımcı olur. (II) Münazaranın amacı düşüncelerin, kabullerin karşılaştırılmasıdır. (III) Gruplardan biri konuya olumlu yönden yaklaşırken diğer grup olumsuz açıdan yaklaşır. (IV) Amaç karşı tarafın görüşlerini çürütüp tartışmadan galip çıkmaktır. (V) Münazarada belirtilen görüşten çok argüman (gerekçelendirilmiş tez) geliştirmek ve karşı argümanları çürütmek önemli olduğundan ağırlıklı olarak tartışmacı anlatımdan yararlanılır.</p><p><b>Aşağıda verilen cümlelerden hangisinin yüklemi, birleşik yapılı bir fiildir?</b></p>",
    diff: 2,
    expl: "I. cümlenin yüklemi olan \"yardımcı olur\" fiili, isim ve yardımcı eylemle kurulan (yardımcı olmak) birleşik yapılı bir fiildir. Diğer cümlelerin yüklemleri türemiş fiiller veya isim tamlaması yüklemleridir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili fiildeki kip, temel işlevinde kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Fiil kiplerinin kendi zaman anlamları dışında başka bir zaman kastedilerek kullanılmasına anlam (zaman) kayması denir. E seçeneğindeki \"Gecenin geç saatlerinde her şeyin sustuğu anlarda köşeye çekilip şiir okurum.\" cümlesindeki \"okurum\" geniş zamanla çekimlenmiştir ve her zaman (sürekli) yapılan bir eylemi anlattığı için temel işlevindedir. Diğerlerinde ise anlam kayması vardır (A: getirir -> getireceksin, B: yaşadık -> yaşayacağız, C: oluvermiş -> oluverir, D: etmeyeceksin -> etme).",
    answers: [
      { text: "Önce sendeki kitapları <u>getirir</u> sonra da istediklerini alıp <u>götürürsün</u>.", ok: false },
      { text: "Dedelerimizden kalan topraklar o kadar değerli miymiş? <u>Yaşadık</u> desene!", ok: false },
      { text: "Hiç ummadığın sıra bir bakmışsın tüm isteklerin gerçek <u>oluvermiş</u>.", ok: false },
      { text: "Bir daha olumsuzlukları konuşmayacak, onları hayatına davet <u>etmeyeceksin</u>!", ok: false },
      { text: "Gecenin geç saatlerinde, her şeyin sustuğu, anlarda, bir köşeye çekilip şiir <u>okurum</u>.", ok: true }
    ]
  }
];

// ============================================================================
// EYLEMLER - TEST 2
// ============================================================================
export const TUR_EYLEMLER_TEST_2: McQ[] = [
  {
    text: "<p>Tiyatro, insanı insana insanla anlatmayı çok iyi <u>I. başarır.</u> Onun özünde hoşgörüyü ön plana çıkarmak <u>II. vardır.</u> Toplumsal duyarlılığı artırmayı, estetik duyguları <u>III. geliştirmeyi</u> egemen kılmayı <u>IV. amaçlar.</u> Gündelik yaşam sahnemizi aydınlatan tiyatrocularımızın Dünya Tiyatro Gününü <u>V. kutlarız.</u></p><p><b>Bu parçada altı çizili sözcüklerden hangileri çekimlenmiş fiil değildir?</b></p>",
    diff: 2,
    expl: "Çekimli fiil, fiil çekim ekleri olan kip ve kişi ekleri alabilen fiillerdir. Parçadaki II numaralı 'vardır' sözcüğü isim olduğu için, III numaralı 'geliştirmeyi' sözcüğü de isim-fiil eki alarak isimleştiği için çekimli fiil değildir. I (başarır), IV (amaçlar) ve V (kutlarız) sözcükleri geniş zamanla çekimlenmiş fiillerdir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Güzel yüzün görülmezdi<br>Bu aşk bende dirilmezdi<br>Güle kıymet verilmezdi<br>Âşık ve maşuk olmasa</p><p><b>Bu dizelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "Dizelerde yer alan 'olmasa' fiili, dilek kiplerinden şart kipiyle (-sa/-se) çekimlenmiş basit zamanlı bir fiildir. Şiirde istek kipiyle (-a/-e) çekimlenmiş bir fiile yer verilmemiştir.",
    answers: [
      { text: "İstek kipiyle çekimlenmiş fiil bulunmaktadır.", ok: true },
      { text: "Dizelerde hem basit hem birleşik zamanlı fiillere yer verilmiştir.", ok: false },
      { text: "Geniş zamanla çekimlenmiş birden fazla fiil bulunmaktadır.", ok: false },
      { text: "III. tekil şahısla çekimlenmiş fiillere yer verilmiştir.", ok: false },
      { text: "Hem haber hem tasarlama kipiyle çekimlenmiş fiil bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>I. Çocuk kitapları, çocuklara yaşama sevinci aşılar.<br>II. Ülkenin her yanında çocukları doğayla buluşturmayı hedefleyen fikirler filizleniyor.<br>III. İnsan, elinde olan nimetlerin kıymetini ancak bunlar elinden çıktıktan sonra anlayacak.<br>IV. Cehalet kadar büyük kötülük ve yoksulluk düşünülemez.<br>V. Koruma altındaki ormanlar içinde yürüyüş yaparken kaybolmamaya dikkat ediniz.</p><p><b>Yukarıdaki numaralanmış cümlelerin hangisinin eyleminde zaman anlamı yoktur?</b></p>",
    diff: 2,
    expl: "Haber (bildirme) kipleri (geçmiş zaman, şimdiki zaman vb.) zaman anlamı taşırken, dilek (tasarlama) kipleri (emir, şart vb.) zaman anlamı taşımaz. V numaralı cümledeki eylem 'dikkat ediniz' olup emir kipiyle çekimlenmiştir. Bu nedenle bu eylemde zaman anlamı yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Nahit Sırrı Örik yıllarca unutulmuş, değeri tam bilinmemiş bir yazarımız olarak kaldı. (II) Bu kendine özgü yazarımız \"Kıskanmak\" adlı romanıyla karşımıza çıkarak onu yeniden keşfetmemizi sağladı. (III) Bu romanında Türk edebiyatında daha önce değinilmemiş konulara yer vermiştir. (IV) Örik, kıskançlık duygusundan yola çıkarak insanoğlunun içindeki kötülüğü bize ustalıkla anlatır. (V) Alışıldık bir aşk öyküsü olarak başlayan kitabın sürprizlerle dolu ilerleyişi sizi şaşırtacaktır.</p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "IV. cümlenin fiili 'anlatır' olup geniş zamanla çekimlenmiştir. Fakat cümlenin anlamına bakıldığında söz konusu fiil, geçmiş bir zamanda gerçekleşmiş bir olayı (yazarın üslubunu/yaptığını) bugüne taşımaktadır. Bu nedenle bu cümlenin fiilinde kip/zaman kayması görülmektedir. D seçeneğindeki 'kip kayması yoktur' ifadesi yanlıştır.",
    answers: [
      { text: "I. cümlede, bilinen geçmiş zamanla çekimlenmiş fiil bulunmaktadır.", ok: false },
      { text: "II. cümlede, kılış fiili III. tekil şahısla çekimlenmiştir.", ok: false },
      { text: "III. cümlede, fiil duyulan geçmiş zamanla çekimlenmiştir.", ok: false },
      { text: "IV. cümlede, geniş zamanla çekimlenmiş fiilde kip kayması yoktur.", ok: true },
      { text: "V. cümlede, fiil söylendikten sonraki bir zaman diliminde gerçekleşir.", ok: false }
    ]
  },
  {
    text: "<p>Eğer gün içindeki yoğun tempoya bir mola <u>I. arıyorsan</u> öğle uykusunun sağlık ve zindelik için önemli bir rol oynadığı <u>II. söylenebilir</u>. Kısa bir kestirme yapmanın dikkat, konsantrasyon ve hafıza üzerinde olumlu etkileri olduğu <u>III. biliniyor</u>. Özellikle öğle saatlerindeki uyku, enerjiyi yeniden kazanmanıza <u>IV. yardımcı oluyor</u>. Ancak uyku süresinin 20 ila 30 dakikayı aşmaması önemlidir aksi takdirde gece boyunca uykusuzluk <u>V. yaşanır</u>.</p><p><b>Bu parçadaki altı çizili fiiller yapı bakımından ikişerli eşleştirildiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I numaralı fiil (ara-yor-sa-n) yapım eki almadığı için basit yapılıdır. II numaralı (söyl-en-ebil-ir) yeterlik kurallı birleşik fiili ve IV numaralı (yardımcı + ol-uyor) yardımcı eylemle kurulan birleşik fiildir. III numaralı (bil-in-iyor) ve V numaralı (yaş-a-n-ır) fiilleri ise yapım eki aldığı için türemiş yapılıdır. İkişerli eşleştiğinde I numaralı basit fiil dışarıda kalır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Sana gitme <u>I. demeyeceğim</u><br><u>II. Üşüyorsun</u> ceketimi al.<br>Gene de sen bilirsin.<br>Yalanlar <u>III. istiyorsan</u> yalanlar <u>IV. söyleyeyim</u>.<br>Adını <u>V. gizleyeceğim</u><br>Sen de bilme Lavinia.</p><p><b>Bu dizelerdeki numaralanmış sözcüklerle ilgili aşağıdaki yargılardan hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "IV numaralı \"söyle-y-e-yim\" sözcüğü istek kipi 1. tekil kişisiyle çekimlenmiştir. Bu nedenle bu fiil zaman bildiren haber kipiyle değil, dilek (tasarlama) kipiyle çekimlenmiştir. Bu yüzden D şıkkı yanlıştır. (A seçeneğindeki üşümek fiili ise bir durumdan başka bir duruma geçişi bildirdiği için oluş fiilidir ve basit yapılıdır.)",
    answers: [
      { text: "I. sözcük, basit yapılı bir oluş fiilidir.", ok: false },
      { text: "II. sözcük, basit zamanlı eylemdir.", ok: false },
      { text: "III. sözcük, birleşik zamanlı eylemdir.", ok: false },
      { text: "IV. sözcük, haber kipiyle çekimlenmiş eylemdir.", ok: true },
      { text: "V. sözcük, basit çekimli türemiş bir eylemdir.", ok: false }
    ]
  },
  {
    text: "<p>(I) Üç yüzyılı aşkın bir süre en önemli bilimsel ve felsefi çalışmalar İslam ülkelerinde <u>yürütülmüştür.</u> (II) Avrupa uyku hâlindeyken Orta Doğu ve Müslüman İspanya <u>çalışıyordu.</u> (III) En önemli merkezler; Bağdat, Şam, Kahire ve İspanya'daki <u>Kordoba'ydı.</u> (IV) Ayrıca bu şehirlerin ortak bir özelliği <u>bulunuyormuş</u>, o da araştırmaya değer vermektir. (V) Bununla birlikte bu merkezler, her inanca hoşgörüyle yaklaşan aydınlanmış idareciler tarafından <u>yönetiliyordu.</u></p><p><b>Bu parçadaki numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "II numaralı cümlede geçen \"uyku hâlindeyken (hâlinde - iken)\" ile \"çalışıyordu (çalışıyor-idi)\" sözcüklerinin her ikisinde de ek-eylem (ek-fiil) kullanılmıştır. B seçeneğinde ise \"ek-eylemle çekimlenmiş (sadece) bir sözcük bulunmaktadır\" denilerek yanlış bilgi verilmiştir.",
    answers: [
      { text: "I. cümlede, bildirme eki cümleye kesinlik anlamı katmıştır.", ok: false },
      { text: "II. cümlede, ek-eylemle çekimlenmiş bir sözcük bulunmaktadır.", ok: true },
      { text: "III. cümlede, ek-fiil ad soylu sözcüğe gelmiştir.", ok: false },
      { text: "IV. cümlede, şimdiki zamanın rivayet çekimlenmiş fiile yer verilmiştir.", ok: false },
      { text: "V. cümlede, birleşik zamanlı bir fiil bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>İnsanlarda bulunan başlıca sterol tipi yağ, kolesteroldür. Adı kötüye çıkmış olsa da vücudumuz kolesterol olmadan işleyemez. Hücre zarında sabitliği sağlamak için uygun boşluklar oluşmasında kritik bir öneme sahiptir. Ayrıca, östrojen ve testosteron gibi hormonlar kolesterolden türemektedir.</p><p><b>Bu parçada aşağıdakilerden hangisine yer verilmemiştir?</b></p>",
    diff: 3,
    expl: "Parçada '-idi, -imiş, -ise' eklerinden birini almış birleşik zamanlı/çekimli bir fiil olmadığı için 'Birleşik çekimli eyleme' yer verilmemiştir. Kolesterol-dür, sahip-tir (A), işleyemez (C, D), türemekte-dir (D, E - 'mekte' şimdiki zaman ekidir) parçada mevcuttur.",
    answers: [
      { text: "Ek-eylem alarak yüklem olmuş isimlere", ok: false },
      { text: "Birleşik çekimli eyleme", ok: true },
      { text: "Geniş zamanla çekimlenmiş fiile", ok: false },
      { text: "III. tekil kişiyle çekimlenmiş fiillere", ok: false },
      { text: "Şimdiki zamanla çekimlenmiş fiile", ok: false }
    ]
  },
  {
    text: "<p>Öğretmenim bilir misin,<br>Seni nasıl sevdiğimi?<br>Sorsan bana nerede yerin,<br>Gösteririm ben kalbimi.<br>Ana değil, ana gibi<br>Baba değil, baba gibi<br>Öğretmenim bende sevgin<br>Can içinde can gibi!</p><p><b>Bu dizelerle ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "Ek-eylem (ek-fiil), dizelerde yalnızca \"nerede(dir)\", \"değil(dir)\", \"gibi(dir)\" örneklerinde olduğu gibi isim soylu sözcüklerin üzerine gelmiş, tek göreviyle (isimleri yüklem yapma göreviyle) kullanılmıştır. Parçada fiillere gelerek birleşik zamanlı fiil yapan ikinci bir görevine örnek olmadığı için E söylenemez.",
    answers: [
      { text: "Geniş zamanla çekimlenmiş birden fazla fiil bulunmaktadır.", ok: false },
      { text: "Şart kipiyle çekimlenmiş eyleme yer verilmiştir.", ok: false },
      { text: "Ek-fiilin olumsuzu kullanılmıştır.", ok: false },
      { text: "II. tekil şahısla çekimlenmiş fiiller bulunmaktadır.", ok: false },
      { text: "Ek-fiilin iki görevine de örnek vardır.", ok: true }
    ]
  },
  {
    text: "<p>(I) Nasıl ki vücudumuzun bir savunma mekanizması varsa ruhumuzun da aynı şekilde bir savunma mekanizması <u>bulunmaktadır.</u> (II) Psikolojik savunma mekanizması, kişinin başa çıkamadığı negatif durumlara çözüm üretme çabası ile oluşur. (III) Zihin genelde negatif çalışır ve savunma mekanizmalarını aktif ederek kişinin kendisini korumaya yönelik bir reflekste bulunmasını sağlar. (IV) O yüzden beyne bolca kaygı, korku ve endişe pompalanabilir. (V) Bu da benlik algısı için var olan tehdidin alabildiğine büyümesine <u>neden olmaktadır.</u></p><p><b>Bu parçada numaralandırılmış cümlelerle ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
    diff: 3,
    expl: "V. cümlede geçen 'neden olmaktadır' fiili, şimdiki zamanla (-makta) çekimlenmiş basit çekimli bir fiildir ama yardımcı eylemle (olmak) kurulduğu için yapıca 'birleşik' fiildir. E seçeneğindeki 'basit yapılı' ifadesi yanlıştır.",
    answers: [
      { text: "I. cümlede, basit çekimli, türemiş yapılı fiile yer verilmiştir.", ok: false },
      { text: "II. cümlede, geniş zamanla çekimlenmiş türemiş fiil vardır.", ok: false },
      { text: "III. cümlede, farklı yapıda fiillere yer verilmiştir.", ok: false },
      { text: "IV. cümlede, basit çekimli birleşik fiil bulunmaktadır.", ok: false },
      { text: "V. cümlede, basit yapılı ve çekimli fiil vardır.", ok: true }
    ]
  },
  {
    text: "<p>Doğada hiçbir şey kendisi için <u>I. yaşamaz.</u><br>Nehirler kendi suyunu <u>II. içemez.</u><br>Güneş kendisi için <u>III. ısıtmaz.</u><br>Çiçekler kendileri için <u>IV. kokmaz.</u><br>Toprak kendisi için <u>V. doğurmaz.</u></p><p><b>Bu dizelerdeki fiillerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "III. dizede geçen \"ısıtmaz\" sözcüğündeki \"t\" eki fiilden fiil yapım ekidir (ısı-n-mak, ısı-t-mak). Türkçede doğrudan isme gelip fiil yapan bir \"-n\" veya \"-t\" eki olmadığı için bu sözcüğün ortak kökünün \"ısı(mak)\" fiili olması gerekir. C seçeneğindeki 'isimden fiil yapım eki' bilgisi yanlıştır.",
    answers: [
      { text: "I. dizede, yapı bakımından türemiş fiile yer verilmiştir.", ok: false },
      { text: "II. dizede, birleşik yapılı fiil bulunmaktadır.", ok: false },
      { text: "III. dizede, isimden fiil yapım eki almış fiil vardır.", ok: true },
      { text: "IV. dizede, basit yapılı fiil bulunmaktadır.", ok: false },
      { text: "V. dizede, fiilden fiil yapım eki almış fiil vardır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Hintliler için kutsal olan Ganj Nehri'ne Himalaya Dağları'nın kızlarından biri olan Tanrıça Ganga adıyla da <u>tapınılır.</u> (II) Ganga, efsanevi Kral Shamani ile evlenmeyi bir şartla <u>kabul eder.</u> (III) Kral onun hiçbir davranışını <u>sorgulamayacaktır.</u> (IV) Ganga yedi çocuğunu da nehirde <u>boğar.</u> (V) Kral dayanamayıp neden bunu yaptığını sorduğunda yanıtı: Benim çocuklarım tanrıdır ama insan suretinde doğarlar, onları bu lanetten kurtarmak için <u>öldürdüm.</u></p><p><b>Bu parçada numaralanmış cümlelerle ilgili olarak aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "III. cümlede geçen \"sorgulamayacaktır\" fiili, yalnızca gelecek zaman kipiyle çekimlendiği için 'basit çekimli'dir. Bu fiildeki bildirme eki \"-dır\" fiile kesinlik anlamı katmıştır ama onu birleşik çekimli (hikaye, rivayet, şart) yapmaz. C seçeneğinde 'birleşik çekimli' denmesi yanlıştır.",
    answers: [
      { text: "I. cümlede, fiilden fiil yapım eki almış basit çekimli fiil vardır.", ok: false },
      { text: "II. cümlede, yardımcı eylemle kurulmuş birleşik fiil bulunmaktadır.", ok: false },
      { text: "III. cümlede, türemiş yapılı birleşik çekimli fiile yer verilmiştir.", ok: true },
      { text: "IV. cümlede, geniş zamanla çekimlenmiş basit yapılı fiil vardır.", ok: false },
      { text: "V. cümlede, basit ve türemiş yapılı fiiller bulunmaktadır.", ok: false }
    ]
  }
];