import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE TURLERİ - TEST 1
// ============================================================================
export const TUR_CUMLE_TURLERI_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisi yapı bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "Cümle yapısı incelendiğinde A, B, C ve E seçenekleri iki yüklemli (sıralı) cümlelerdir. D seçeneğinde ise tek yüklem ('tanınmıştır') vardır ve yüklem dışında 'kurarak' ile 'veren' fiilimsileri bulunduğu için yapıca girişik birleşik cümledir.",
    answers: [
      { text: "Akşam yemeğine kalmamışlar, hava kararmaya yüz tutarken gitmişlerdi.", ok: false },
      { text: "Tren ariden sarsıldı, masalardaki bardaklar tıngırdadı, sonra her şey yine aynı hareketsizliğe gömüldü.", ok: false },
      { text: "Devrinin en önemli Türk ve Arap ölümleriyle tanışmış, İstanbul'a gelerek saray âlimleriyle bilgi alışverişi yapmıştır.", ok: false },
      { text: "Bir edebî topluluk kurarak ilk edebî eserlerini bu topluluk bünyesinde veren sanatçı, daha sonra bireysel çalışmalarıyla tanınmıştır.", ok: true },
      { text: "İzmir'e, bu ılık rüzgârların dans ettiği şehre, kar yağdığını gördü; şaşkınlıkla açılan gözlerini beyaz kar taneleri bir türlü ayıramadı.", ok: false }
    ]
  },
  {
    text: "<p>I. Kır atın yanında duran ya huyundan ya suyundan.<br/>II. Derede tarla sel için, tepede harman yel için.<br/>III. Ucuzdur vardır illeti, pahalıdır vardır hikmeti.</p><p><b>Yukarıda numaralanmış atasözlerinden hangileri eksiltili bir cümledir?</b></p>",
    diff: 2,
    expl: "Eksiltili cümleler yüklemi söylenmemiş cümlelerdir. I numaralı cümlede '...etkilenir/kapar' gibi bir yüklem, II numaralı cümlede '...elverişlidir/yapılır' gibi bir yüklem eksiktir. III numaralı cümlede ise 'ucuzdur', 'vardır', 'pahalıdır' yüklemleri bulunmaktadır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki atasözlerinden hangisi, sıralı bir cümle <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "Sıralı cümleler en az iki yüklemin virgül veya noktalı virgülle bağlanmasıyla oluşur. A, B, C ve D seçeneklerinde birden fazla yüklem vardır. E seçeneğinde ise tek bir yüklem ('beden sağlığıdır') vardır ve yan yargı bulunmadığı için basit yapılıdır.",
    answers: [
      { text: "Ustamın adı Hıdır, elimden gelen budur.", ok: false },
      { text: "Paranın gittiğine bakma, işinin bittiğine bak.", ok: false },
      { text: "Akıllar gelin olmuş, herkes kendininkini beğenmiş.", ok: false },
      { text: "Ayak almadık taş olmaz, başa gelmedik iş olmaz.", ok: false },
      { text: "En büyük zenginlik, beden sağlığıdır.", ok: true }
    ]
  },
  {
    text: "<p>Küçük çarşıların yakınından -kar altında kalmış bozuk yollardan- geçti tren.</p><p><b>Bu cümlenin özellikleri ile ilgili olarak aşağıdakilerden hangisi <u>söylenemez</u>?</b></p>",
    diff: 3,
    expl: "C seçeneği yanlıştır; çünkü bu cümle tek yüklemli olup içerisinde yan yargı (fiilimsi, şart vb.) bulundurmaz. Ara söz (kar altında kalmış bozuk yollardan) cümle dışı unsurdur ve cümlenin temel yapısını 'birleşik' yapmaz. Cümle basit yapılıdır.",
    answers: [
      { text: "Yüklemin yerine göre devrik cümledir.", ok: false },
      { text: "Yüklemin türü bakımından fiil cümlesidir.", ok: false },
      { text: "Yapı bakımından birleşik cümledir.", ok: true },
      { text: "Anlam ve biçim yönünden olumludur.", ok: false },
      { text: "Ara söz, sıfat-fiil grubudur.", ok: false }
    ]
  },
  {
    text: "<p>(I) Kimlik devamlılığı, geleceğe yapılan yatırımla ilgili değildir. (II) Asıl kökenini kişisel geçmişimizden ve anılarımızdan, çocukluk fantezilerimizden ve hırslarımızdan alır. (III) Bu hırstan kaynaklanan bir ego ideali, aynı zamanda bizim geçmişimizle de bağ oluşturur ve bu bağ da kimlik devamlılığına yardımcı olur. (IV) Kişisel geçmişimizle ve tarihimizle sağlam bağlar kurmayı başarabilecek olan da yine güçlü ve sınırları belli bir egodur. (V) Eğer ego ideali, kişi için asla bitmeyen bir arayış hâline gelirse kişi geçmişiyle bağını sabit bir biçimde oluşturamaz.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdaki bilgilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV. cümle 'Kişisel geçmişimizle ve tarihimizle sağlam bağlar kurmayı başarabilecek olan (özne) / da / yine (zarf tümleci) / güçlü ve sınırları belli bir egodur (yüklem).' tek yüklemlidir ve yüklem dışındaki kısımda eylemsi bulunduğu için girişik birleşik, olumlu bir isim cümlesidir. Bağlı cümle olduğu bilgisi yanlıştır.",
    answers: [
      { text: "I. cümle; olumsuz, basit bir isim cümlesidir.", ok: false },
      { text: "II. cümle; olumlu, basit bir fiil cümlesidir.", ok: false },
      { text: "III. cümle; olumlu, bağlı bir fiil cümlesidir.", ok: false },
      { text: "IV. cümle; olumlu, bağlı bir isim cümlesidir.", ok: true },
      { text: "V. cümle; olumsuz, şartlı birleşik bir fiil cümlesidir.", ok: false }
    ]
  },
  {
    text: "<p><b>KAVUKLU:</b> Bana bak! Daha çok gideceksen ben her şeyden vazgeçtim. Yahu, yarım saattir meydanı fıldır fıldır dönüyorsun ama halâ olduğumuz yerdeyiz!</p><p><b>PİŞEKÂR:</b> Aman birader! Şu dağlara bak! Eteklerinde hafif dumanlar içinde köyler, sonra çağıl çağıl akıp giden dereler ya şu vadinin tarlaları… A birader, sende hiç tabiat-ı şairane yok mu?</p><p><b>Kavuklu ve Pişekâr'ın diyaloglarında geçen cümlelerin özellikleriyle ilgili aşağıdaki bilgilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Kavuklu'nun kurduğu cümleler incelendiğinde; 'Bana bak!' (basit), 'Gideceksen... vazgeçtim.' (birleşik), 'Dönüyorsun ama... yerdeyiz!' (bağlı) cümleleri vardır. Sıralı bir cümle bulunmadığı için E seçeneği yanlıştır.",
    answers: [
      { text: "Kavuklu, şartlı birleşik cümle kurmuştur.", ok: false },
      { text: "Pişekâr, eksiltili cümle kurmuştur.", ok: false },
      { text: "Kavuklu, olumlu bağlı cümle kurmuştur.", ok: false },
      { text: "Pişekâr, hem emir hem soru cümlesi kurmuştur.", ok: false },
      { text: "Kavuklu; sıralı ve kurallı bir fiil cümlesi kurmuştur.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisi basit yapılıdır?</b></p>",
    diff: 2,
    expl: "Basit yapılı cümlelerde tek yüklem bulunur ve içinde fiilimsi, ki bağlacı, şart eki gibi yan yargı taşıyan unsurlar bulunmaz. B seçeneğinde tek yüklem vardır ve yan yargı yoktur. Diğerlerinde ise fiilimsi veya bağlaçlarla kurulmuş birleşik yapılar mevcuttur.",
    answers: [
      { text: "Suların üzerimize devrilmesinden önce yukarıya bir varsak dünya bizim olacaktı.", ok: false },
      { text: "Eğitimin amaçlarından biri de insan doğasının ortak unsurlarını belirlemektir.", ok: true },
      { text: "Bir kişinin kendisini karşısındaki kişinin yerine koyabilmesi, empati olgunluğun göstergesidir.", ok: false },
      { text: "TDK, Türkçenin yabancı kelimelerden arınması için gerekli tedbirleri alacaktır.", ok: false },
      { text: "Elimizdeki makaleleri tarama işini bir an evvel bitirelim ki soru yazmaya başlayalım.", ok: false }
    ]
  },
  {
    text: "<p>Raskolnikov, ceplerinde ne varsa masanın üzerine hemen boşaltmaya başladı; her şeyi çıkardıktan hatta bir şey kalmadığından emin olmak için ceplerini ters yüz ettikten sonra, bunları toplayıp odanın en dip köşesine götürdü.</p><p><b>Aşağıdaki cümlelerden hangisi yapıca öncüldeki cümle ile aynıdır?</b></p>",
    diff: 3,
    expl: "Öncül cümle noktalı virgül ile bağlanmış iki yüklemli bir sıralı cümledir. A seçeneğinde de 'vardır' ve 'bilinmektedir' yüklemleri virgülle ayrılmış bir sıralı cümle yapısı oluşturur.",
    answers: [
      { text: "Yapılan göçlerin kimi zaman devletlerin yıkılmasına veya kurulmasına yol açacak kadar güçlü etkileri vardır, kimi zaman da bölgesel demografik değişimlere yol açtığı bilinmektedir.", ok: true },
      { text: "İsim verme gelenekleri, zaman içinde kültürel etkileşimin izlerini de takip edebileceğimiz tarihsel materyal özelliği taşır.", ok: false },
      { text: "İsimlerle verilen mesaj belki değişmektedir ama değişmeyen isimlerin mesaj vermedeki sembolik işlevidir.", ok: false },
      { text: "Göçlerin devletler veya bölgeler üzerinde demografik, ekonomik, kültürel, sosyal ve siyasal sonuçları bulunmaktadır.", ok: false },
      { text: "Bir insanın kendisini karşısındaki bir nesneye yansıtması, kendini onun içinde hissetmesi ve bu yolla o nesneyi özümseyerek anlaması sürecidir empati.", ok: false }
    ]
  },
  {
    text: "<p>(I) Bir kültür ve sanat akımı olarak postmodernizm uzun yıllar, edebiyatı etkisi altına almıştır. (II) Türkiye'de edebiyatta postmodernizm olgusuna odaklanan birçok çalışma, genellikle roman ve öykü gibi kurmaca metinleri inceler. (III) Buna karşın şiirde postmodernizm olgusuna yönelen çalışmalar yok denecek kadar azdır. (IV) Oysaki Avrupa ve Amerika'da kurmaca metinlerin yanında şiir metinlerinde de postmodernizmin etkilerinin incelendiği ve postmodern şiir denilen bir fenomenin varlığının kabul edildiği görülür. (V) Postmodern şiir denilen fenomen, birçok açıdan avangart modernist akımlardan izler taşımasına rağmen sanayi sonrası dönemin şartlarına göre ortaya çıkmıştır.</p><p><b>Bu parçadaki numaralanmış cümlelerden hangisi tür bakımından ötekilerden farklıdır?</b></p>",
    diff: 2,
    expl: "I, II, IV ve V numaralı cümlelerin yüklemleri ('almıştır', 'inceler', 'görülür', 'çıkmıştır') fiildir. III numaralı cümlenin yüklemi ise 'yok denecek kadar azdır' söz öbeğidir ve 'az' sözcüğü isim soylu olduğu için bu bir isim cümlesidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Atasözlerindeki devrik cümlelerde, yüklemden sonraki ögeler genellikle vurgulanmak istenen ögelerdir. Bu nedenle devrik cümleler atasözlerinde anlatımın akışını bozmamış, aksine anlatıma akıcılık katmıştır. Ayrıca atasözlerindeki devrik cümleler kurallı cümleye dönüştürüldüklerinde aynı anlatım zenginliği ve anlamı da vermezler.</p><p><b>Buna göre;</b></p><p>I. Besle kargayı, oysun gözünü.<br/>II. Fukaranın düşkünü, beyaz giyer kış günü.<br/>III. Kazma elin kuyusunu, kazarlar kuyunu.<br/>IV. Ek tohumun hasını, çekme yiyecek yasını.<br/>V. Açtırma kutuyu, söyletme kötüyü.</p><p><b>atasözlerinden hangilerinde vurgulanan öge diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "Verilen açıklamaya göre devrik cümlelerde yüklemden sonraki ögeler vurgulanır. II numaralı atasözünde yüklemden sonra gelen 'kış günü' zarf tümlecidir. Diğerlerinde ise yüklemden sonra gelen ve vurgulanan öge nesnedir (gözünü, kuyunu, yasını, kötüyü).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerden hangisi yapısı bakımından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "A, B, D ve E seçenekleri birleşik yapılı cümlelerdir (fiilimsi veya bağlaç içerirler). C seçeneğinde tek yüklem vardır ('sürmektir') ve cümlede yan yargı bulunmadığı için yapıca basittir.",
    answers: [
      { text: "Bir şeyin yapılamaz olduğunu düşünerek uyursan başkasının o şeyi yaparken çıkardığı gürültüyle uyanırsın.", ok: false },
      { text: "Yaşadığı bütün olumsuzluklara rağmen hayata gülümseyerek bakıyordu.", ok: false },
      { text: "Hayatta en önemli şey, huzurlu ve sağlıklı olduğun bir yaşam sürmektir.", ok: true },
      { text: "Annem yanıma geldi mi sanırsın dünyalar benim oldu.", ok: false },
      { text: "Yolda giderken Neşet Baba'nın türkülerini dinle ki o yol sana hikâyeler yazsın.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisi olumluluk- olumsuzluk açısından ötekilerden farklıdır?</b></p>",
    diff: 3,
    expl: "B seçeneği biçimce olumlu görünse de anlamca 'hak iddia edemez' manasına geldiği için olumsuzdur. Diğer seçenekler (A, C, D, E) anlamca olumludur (mesela D: 'biliyorum', E: 'duyar' anlamına gelir).",
    answers: [
      { text: "Sanki benim dediği eserde benim hiç payım yok!", ok: false },
      { text: "Bunca laftan sonra karşıma geçip de hak iddia edecek değildir!", ok: true },
      { text: "Gel de hayvanlara eziyet eden insanları bir kaşık suda boğma!", ok: false },
      { text: "Onun ne kadar yalancı bir insan olduğunu bilmiyor değilim.", ok: false },
      { text: "İnsan, böyle bir kitaba nasıl hayranlık duymaz?", ok: false }
    ]
  }
];