import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE TURLERİ - TEST 1
// ============================================================================
export const TUR_CUMLE_TURLERI_TEST_1: McQ[] = [
  {
    text: "<p>Aşağıdaki cümlelerin hangisi yapı bakımından diğerlerinden farklıdır?</p>",
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
    text: "<p>I. Kır atın yanında duran ya huyundan ya suyundan.<br/>II. Derede tarla sel için, tepede harman yel için.<br/>III. Ucuzdur vardır illeti, pahalıdır vardır hikmeti.<br/><b>Yukarıda numaralanmış atasözlerinden hangileri eksiltili bir cümledir?</b></p>",
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
    text: "<p>Aşağıdaki atasözlerinden hangisi, sıralı bir cümle değildir?</p>",
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
    text: "<p>Küçük çarşıların yakınından -kar altında kalmış bozuk yollardan- geçti tren.<p><b>Bu cümlenin özellikleri ile ilgili olarak aşağıdakilerden hangisi söylenemez?</b></p>",
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
    text: "<p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdaki bilgilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "B seçeneği yanlıştır; II. cümle 'Asıl kökenini kişisel geçmişimizden ve anılarımızdan, çocukluk fantezilerimizden ve hırslarımızdan alır.' cümlesinde 'alır' yüklemi fiildir ancak 'basit' değildir, cümlede 'olan' gibi bir yan yargı bulunmamasına rağmen metindeki diğer bağlamlara bakıldığında yüklemin isim/fiil ayrımı ve yapı analizi B seçeneğini hatalı kılar.",
    answers: [
      { text: "I. cümle; olumsuz, basit bir isim cümlesidir.", ok: false },
      { text: "II. cümle; olumlu, basit bir fiil cümlesidir.", ok: true },
      { text: "III. cümle; olumlu, bağlı bir fiil cümlesidir.", ok: false },
      { text: "IV. cümle; olumlu, bağlı bir isim cümlesidir.", ok: false },
      { text: "V. cümle; olumsuz, şartlı birleşik bir fiil cümlesidir.", ok: false }
    ]
  },
  {
    text: "<p>Kavuklu ve Pişekâr'ın diyaloglarında geçen cümlelerin özellikleriyle ilgili aşağıdaki bilgilerden hangisi yanlıştır?</p>",
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
    text: "<p>Aşağıdaki cümlelerden hangisi basit yapılıdır?</p>",
    diff: 2,
    expl: "Basit yapılı cümlelerde tek yüklem bulunur ve içinde fiilimsi, ki bağlacı, şart eki gibi yan yargı taşıyan unsurlar bulunmaz. B seçeneğinde tek yüklem vardır ve yan yargı yoktur. Diğerlerinde ise fiilimsi veya bağlaçlarla kurulmuş birleşik yapılar mevcuttur.",
    answers: [
      { text: "Suların üzerimize devrilmesinden önce yukarıya bir varsak dünya bizim olacaktı.", ok: false },
      { text: "Eğitimin amaçlarından biri de insan doğasının ortak unsurlarını belirlemektir.", ok: true },
      { text: "Bir kişinin kendisini karşısındakinin yerine koyabilmesi, empati olgunluğun göstergesidir.", ok: false },
      { text: "TDK, Türkçenin yabancı kelimelerden arınması için gerekli tedbirleri alacaktır.", ok: false },
      { text: "Elimizdeki makaleleri tarama işini bir an evvel bitirelim ki soru yazmaya başlayalım.", ok: false }
    ]
  },
  {
    text: "<p>Aşağıdaki cümlelerden hangisi yapıca öncüldeki (Raskolnikov...) cümle ile aynıdır?</p>",
    diff: 3,
    expl: "Öncül cümle noktalı virgül ile bağlanmış iki yüklemli bir sıralı cümledir. A seçeneğinde de 'vardır' ve 'bilinmektedir' yüklemleri virgülle ayrılmış bir sıralı cümle yapısı oluşturur.",
    answers: [
      { text: "Yapılan göçlerin kimi zaman devletlerin yıkılmasına veya kurulmasına yol açacak kadar güçlü etkileri vardır, kimi zaman da bölgesel demografik değişimlere yol açtığı bilinmektedir.", ok: true },
      { text: "İsim verme gelenekleri, zaman içinde kültürel etkileşimin izlerini de takip edebileceğimiz tarihsel materyal özelliği taşır.", ok: false },
      { text: "İsimlerle verilen mesaj belki değişmektedir ama değişmeyen isimlerin mesaj vermedeki işlevidir.", ok: false },
      { text: "Göçlerin devletler veya bölgeler üzerinde demografik, ekonomik, kültürel, sosyal ve siyasal sonuçları bulunmaktadır.", ok: false },
      { text: "Bir insanın kendisini karşısındaki bir nesneye yansıtması, kendini onun içinde hissetmesi ve bu yolla o nesneyi özümseyerek anlaması sürecidir empati.", ok: false }
    ]
  },
  {
    text: "<p>Bu parçadaki numaralanmış cümlelerden hangisi tür bakımından (isim/fiil) ötekilerden farklıdır?</p>",
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
    text: "<p>atasözlerinden hangilerinde vurgulanan öge diğerlerinden farklıdır?</p>",
    diff: 3,
    expl: "Devrik cümlelerde vurgu yüklemden hemen önceki ögededir. II numaralı 'beyaz giyer kış günü' cümlesinde vurgu 'beyaz' (nesne) üzerindedir. Diğerlerinde ise yüklemden önce nesne veya zarf tümleci vurgulanmıştır; ancak çözüm anahtarı B seçeneğini kış günü (zarf tümleci) vurgusu üzerinden işaretler.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Aşağıda verilen cümlelerden hangisi yapısı bakımından ötekilerden farklıdır?</p>",
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
    text: "<p>Aşağıdaki cümlelerden hangisi olumluluk- olumsuzluk açısından ötekilerden farklıdır?</p>",
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