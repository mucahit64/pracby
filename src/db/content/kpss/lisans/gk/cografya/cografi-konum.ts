import type { McQ } from "../../../../types";

// ============================================================================
// COĞRAFİ KONUM - TEST 1
// ============================================================================
export const COGRAFI_KONUM_TEST1: McQ[] = [
  {
    text: "<p><b>(2024 KPSS-LİSANS)</b><br><br>Türkiye'nin coğrafi konumu ifade edilirken kuzey, güney, doğu ve batı yönlerindeki uç noktalarına da yer verilir.<br><br><b>Aşağıdakilerden hangisi bu uç noktalardan biri değildir?</b></p>",
    diff: 1,
    expl: "Türkiye'nin uç noktaları; Kuzeyde Sinop (İnceburun), Güneyde Hatay (Topraktutan), Doğuda Iğdır (Dilucu) ve Batıda Gökçeada (Avlaka Burnu/İnceburun)'dır. İzmir - Karaburun bu uç noktalardan biri değildir.",
    answers: [
      { text: "Sinop - İnceburun", ok: false },
      { text: "Dil Yöresi - Dilucu", ok: false },
      { text: "Yayladağı - Topraktutan Köyü", ok: false },
      { text: "Gökçeada - İnceburun", ok: false },
      { text: "İzmir - Karaburun", ok: true }
    ]
  },
  {
    text: "<p><b>(2024 KPSS-ÖNLİSANS)</b><br><br>Aşağıdaki grafikte Türkiye'deki iki merkezde yıl içerisindeki gündüz süresinin değişimi gösterilmiştir. (Grafikte I. Merkez'in gündüz süresi değişimi II. Merkez'e göre daha azdır.)<br><br><b>Bu merkezlerin aşağıdakilerden hangisi olduğu söylenebilir?</b></p>",
    diff: 2,
    expl: "Gündüz süresi değişimi Ekvator'dan kutuplara doğru artar. Grafikte I. merkezin değişimi daha az olduğu için Ekvator'a (güneye) daha yakındır, II. merkez ise daha kuzeydedir. Seçenekler arasında I'in güneyde, II'nin kuzeyde olduğu tek eşleşme Antalya - Sinop'tur.",
    answers: [
      { text: "I: Antalya, II: Sinop", ok: true },
      { text: "I: İstanbul, II: Adana", ok: false },
      { text: "I: Çanakkale, II: Hatay", ok: false },
      { text: "I: Ardahan, II: Mardin", ok: false },
      { text: "I: Balıkesir, II: Adıyaman", ok: false }
    ]
  },
  {
    text: "<p><b>(2023 KPSS-LİSANS)</b><br><br>I. Uluslararası enerji transferinde üs konumunda olması<br>II. Hidrolik enerji potansiyelinin yüksek olması<br>III. Yer altı ve yer üstü tatlı su kaynaklarının zengin olması<br><br><b>Yukarıdakilerden hangileri Türkiye'nin Orta Doğu ülkelerine göre jeopolitik açıdan daha güçlü olduğu doğal unsurlar arasında bulunur?</b></p>",
    diff: 2,
    expl: "Türkiye'nin hidrolik enerji potansiyeli ve tatlı su kaynakları 'doğal' unsurlardır (II ve III). Enerji transferinde üs konumunda olması (I) ise beşeri ve ekonomik bir unsurdur.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true }
    ]
  },
  {
    text: "<p><b>(2023 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Türkiye'nin konum özellikleri ile ilgili aşağıdaki ifadelerden hangisi yanlıştır?</b></p>",
    diff: 1,
    expl: "Türkiye 26°-45° Doğu meridyenleri arasında yer alır. Bu nedenle Başlangıç Meridyeni'nin (Greenwich) batısında değil, doğusunda yer almaktadır.",
    answers: [
      { text: "Orta enlemlerde yer aldığı için dört mevsim belirgin olarak yaşanır.", ok: false },
      { text: "Asya, Afrika ve Avrupa kıtalarının birbirine en yakın olduğu yerde bulunur.", ok: false },
      { text: "Alp-Himalaya Orojenik Kuşağı üzerinde yer alır.", ok: false },
      { text: "Başlangıç meridyeninin batısında yer alır.", ok: true },
      { text: "Başlangıç paralelinin kuzeyindedir.", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 KPSS-LİSANS)</b><br><br>Türkiye'nin iklimiyle ilgili olarak;<br>I. dört mevsimin belirgin olarak yaşanması<br>II. yıllık sıcaklık farklarının belirgin olması<br>III. kısa mesafelerde sıcaklık farkının görülmesi<br>IV. doğuya gidildikçe karın yerde kalma süresinin artması<br><br><b>özelliklerinden hangileri üzerinde mutlak konum daha fazla etkili olmaktadır?</b></p>",
    diff: 2,
    expl: "Dört mevsimin belirgin yaşanması ve yıllık sıcaklık farkları (I ve II) Orta Kuşakta bulunmanın, yani mutlak konumun sonucudur. Kısa mesafelerde sıcaklık farkı ve doğuya gidildikçe kar süresinin artması ise yükselti ve yer şekilleriyle (göreceli konum) ilgilidir.",
    answers: [
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ORTAÖĞRETİM)</b><br><br>I. Akdeniz kıyısında bulunması<br>II. Başlangıç Meridyeni'nin doğusunda yer alması<br>III. Kuzey Yarım Küre'nin orta kuşağında bulunması<br>IV. Asya ile Avrupa arasında köprü konumunda olması<br><br><b>Yukarıdakilerden hangileri Türkiye'nin mutlak konumuyla ilişkilidir?</b></p>",
    diff: 1,
    expl: "Başlangıç meridyeninin doğusunda olması (II) ve orta kuşakta bulunması (III) koordinatlarla belirtilen mutlak konum özellikleridir. Deniz kıyısında ve köprü konumunda olması göreceli (özel) konumdur.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin mutlak konumuna ait bir özelliktir?</b></p>",
    diff: 1,
    expl: "İklim sınıflamalarına göre ılıman (orta) kuşakta yer alması Türkiye'nin mutlak (matematik) konumunun doğrudan bir sonucudur. Diğer seçenekler Türkiye'nin göreceli konumudur.",
    answers: [
      { text: "Üç tarafının denizlerle çevrili olması", ok: false },
      { text: "Tarihi ticaret yolları üzerinde bulunması", ok: false },
      { text: "İklim sınıflamalarına göre ılıman kuşakta yer alması", ok: true },
      { text: "Önemli enerji nakil hatlarının üzerinde bulunması", ok: false },
      { text: "Eski dünya karalarının temas noktasında yer alması", ok: false }
    ]
  },
  {
    text: "<p><b>(2022 EKPSS-ORTAÖĞRETİM)</b><br><br>Aşağıdaki haritada Ankara'dan yola çıkan beş ayrı gözlemcinin ulaştığı merkezler gösterilmiştir.<br><br><b>Buna göre hangi gözlemcinin ulaştığı yerde Ankara'ya göre hem enlem hem de boylam dereceleri büyümüştür?</b></p>",
    diff: 2,
    expl: "Türkiye, Kuzey Yarım Küre ve Doğu Yarım Küre'dedir. Enlem derecesinin büyümesi için kuzeye, boylam derecesinin büyümesi için doğuya gidilmelidir. Haritada Ankara'dan kuzeydoğuya doğru hareket eden gözlemci (I) bu şarta uyar.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 KPSS-LİSANS)</b><br><br>Türkiye, eski dünya karaları olarak bilinen Asya, Afrika ve Avrupa ana karalarının birbirine en fazla yaklaştıkları bir konumda bulunur.<br><br><b>Buna göre; I. ulaşım güzergâhları, II. balık avlanma alanları, III. sanayi üretiminde çeşitlilik unsurlarından hangileri Türkiye için avantaj oluşturur?</b></p>",
    diff: 2,
    expl: "Kıtaların birbirine yaklaşması ve köprü konumunda olması doğrudan ulaşım ve transit ticaret (ulaşım güzergâhları) açısından avantaj sağlar.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 KPSS-LİSANS)</b><br><br>Türkiye'de güneşin doğuş ve batış saatleri yaz ile kış mevsimlerinde değişiklik gösterir. Ortalama güneşlenme süresi kış aylarında daha kısa iken yaz aylarında daha uzundur.<br><br><b>Bu süre farkının temel nedeni aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Gündüz sürelerinin mevsimlere göre değişmesi (yazın uzun, kışın kısa olması) eksen eğikliği ve enlem, yani Türkiye'nin mutlak konumu ile ilgilidir.",
    answers: [
      { text: "Yükselti", ok: false },
      { text: "Göreceli konum", ok: false },
      { text: "Bakı faktörü", ok: false },
      { text: "Mutlak konum", ok: true },
      { text: "Ülkenin sınırları", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Sinop Yarımadası'nda yer alan Türkiye'nin en kuzey uç noktası aşağıdakilerden hangisidir?</b></p>",
    diff: 1,
    expl: "Türkiye'nin en kuzey uç noktası Sinop ilindeki İnceburun'dur.",
    answers: [
      { text: "Baba Burnu", ok: false },
      { text: "İğneada Burnu", ok: false },
      { text: "Avlaka Burnu", ok: false },
      { text: "İnceburun", ok: true },
      { text: "Karaburun", ok: false }
    ]
  },
  {
    text: "<p><b>(2021 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Türkiye'nin gerçek yüzölçümü aşağıdaki değerlerden hangisine daha yakındır?</b></p>",
    diff: 1,
    expl: "Türkiye'nin izdüşüm yüzölçümü yaklaşık 783 bin km² iken, dağlık ve engebeli yapısı hesaba katıldığında gerçek yüzölçümü yaklaşık 814.000 km² değerine yakındır.",
    answers: [
      { text: "556.000 km²", ok: false },
      { text: "637.000 km²", ok: false },
      { text: "814.000 km²", ok: true },
      { text: "977.000 km²", ok: false },
      { text: "456.000 km²", ok: false }
    ]
  }
];

// ============================================================================
// COĞRAFİ KONUM - TEST 2
// ============================================================================
export const COGRAFI_KONUM_TEST2: McQ[] = [
  {
    text: "<p><b>(2021 MEB-EKYS)</b><br><br>Türkiye'de;<br>I. dört mevsimin belirgin olarak yaşanması,<br>II. batıdan doğuya doğru gidildikçe sıcaklıkların düşmesi,<br>III. ortalama yükseltisinin fazla olması<br><br><b>özelliklerinden hangileri, Türkiye'nin orta kuşakta yer aldığını gösterir?</b></p>",
    diff: 2,
    expl: "Orta kuşakta yer almanın en kesin kanıtı dört mevsimin belirgin olarak yaşanmasıdır. Yükselti ve batıdan doğuya sıcaklık düşüşü göreceli konumdur.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-LİSANS)</b><br><br><b>Aşağıdakilerin hangisinde 21 Haziran'da belirtilen doğrultuda hareket edildiğinde hem gündüz süresi uzar hem de yerel saat daha geri olur?</b></p>",
    diff: 3,
    expl: "21 Haziran'da gündüzün uzaması için kuzeye, yerel saatin daha geri olması için ise batıya gidilmelidir. Adana'dan (Güneydoğu) Edirne'ye (Kuzeybatı) giden biri hem kuzeye hem de batıya gitmiş olur.",
    answers: [
      { text: "İzmir'den Van'a", ok: false },
      { text: "Sinop'tan Muğla'ya", ok: false },
      { text: "Adana'dan Edirne'ye", ok: true },
      { text: "Antalya'dan Ardahan'a", ok: false },
      { text: "Samsun'dan Adıyaman'a", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ORTAÖĞRETİM)</b><br><br>Aşağıdaki haritada bazı alanlar numaralandırılarak gösterilmiştir.<br><br><b>Bu alanların hangisinde 21 Haziran tarihinde gündüz süresi daha uzundur?</b></p>",
    diff: 2,
    expl: "21 Haziran tarihinde Kuzey Yarım Küre'de kuzeye doğru gidildikçe gündüz süresi uzar. Haritada (Kars-Ardahan yöresine denk gelen) V numaralı merkez en kuzeyde yer aldığı için gündüz süresi en uzundur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdaki özelliklerden hangisi Türkiye'nin göreceli konumuyla ilgilidir?</b></p>",
    diff: 2,
    expl: "Güneyden esen rüzgarların sıcak olması (Enlem), mevsimlerin belirgin yaşanması (Orta Kuşak), Akdeniz iklimi görülmesi mutlak konum sonuçlarıdır. Yükseltinin batıdan doğuya artması ise yer şekilleri ile ilgili olup göreceli (özel) konumdur.",
    answers: [
      { text: "Genel olarak güneyden esen rüzgarların sıcak olması", ok: false },
      { text: "Yazın dinamik yüksek basıncın etkili olması", ok: false },
      { text: "Akdeniz makro iklim alanının etkisinde bulunması", ok: false },
      { text: "Mevsimlerin belirgin olarak yaşanması", ok: false },
      { text: "Yükseltinin batıdan doğuya doğru artması", ok: true }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-ÖNLİSANS)</b><br><br>I. Akdeniz'den Karadeniz'e doğru gidildikçe tuzluluk oranı azalır.<br>II. Çanakkale'den Erzurum'a doğru gidildikçe ağaçlar daha geç çiçeklenir.<br>III. 21 Mart günü cisimlerin öğle vakti oluşan gölge boyları kuzeye doğru gidildikçe uzar.<br>IV. Temmuz ayında Adana'dan Mardin'e doğru gidildiğinde sıcaklık ortalaması artar.<br><br><b>Yukarıdakilerden hangileri Türkiye'nin mutlak konumuyla ilgilidir?</b></p>",
    diff: 3,
    expl: "Kuzeye gidildikçe denizlerdeki tuzluluğun azalması ve gölge boyunun uzaması enlem (mutlak konum) etkisidir (I ve III). Batıdan doğuya sıcaklık değişimi ise yükselti/karasallık (göreceli konum) etkisidir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve IV", ok: false },
      { text: "III ve IV", ok: false }
    ]
  },
  {
    text: "<p><b>(2020 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin mutlak konumunun özellikleri arasında bulunur?</b></p>",
    diff: 1,
    expl: "Türkiye'nin Kuzey Yarım Küre'de yer alması doğrudan mutlak (matematik) konumudur. Diğer seçenekler (denizlerle çevrili olması, boğazlara sahip olması vs.) özel konumudur.",
    answers: [
      { text: "Üç tarafının denizlerle çevrili olması", ok: false },
      { text: "Sıcaklığın batıdan doğuya doğru azalması", ok: false },
      { text: "Kuzey Yarım Küre'de yer alması", ok: true },
      { text: "Stratejik boğazlara sahip olması", ok: false },
      { text: "Asya ile Avrupa Ülkeleri arasında köprü ülke konumunda olması", ok: false }
    ]
  },
  {
    text: "<p><b>(2019 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Sinop Yarımadası üzerinde yer alan, Türkiye'nin en kuzeyindeki burnun adı nedir?</b></p>",
    diff: 1,
    expl: "Türkiye'nin haritadaki en uç kuzey noktası Sinop'ta bulunan İnce Burun'dur.",
    answers: [
      { text: "Kerempe Burnu", ok: false },
      { text: "İnce Burun", ok: true },
      { text: "Avlaka Burnu", ok: false },
      { text: "Kara Burun", ok: false },
      { text: "Yason Burnu", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-LİSANS)</b><br><br><b>Aşağıdaki coğrafi koordinatlardan hangisi Türkiye sınırları içinde kalmaktadır?</b></p>",
    diff: 1,
    expl: "Türkiye, 36° - 42° Kuzey enlemleri ile 26° - 45° Doğu boylamları arasındadır. 38° Kuzey ve 36° Doğu koordinatları (D seçeneği) bu aralığa denk gelir.",
    answers: [
      { text: "28° Doğu 35° Kuzey", ok: false },
      { text: "40° Doğu 30° Kuzey", ok: false },
      { text: "38° Doğu 28° Kuzey", ok: false },
      { text: "36° Doğu 38° Kuzey", ok: true },
      { text: "26° Doğu 45° Kuzey", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin mutlak konumunun etkisiyle ortaya çıkan özelliklerden biridir?</b></p>",
    diff: 2,
    expl: "Türkiye'de güneyden kuzeye doğru gidildikçe ortalama sıcaklıkların azalması Ekvator'dan uzaklaşmanın (enlemin), yani mutlak konumun bir sonucudur.",
    answers: [
      { text: "Karadeniz ve Akdeniz kıyısında dağların denize paralel uzanması", ok: false },
      { text: "Batıdan doğuya doğru ortalama yükseltinin artması", ok: false },
      { text: "Güneyden kuzeye doğru ortalama sıcaklığın azalması", ok: true },
      { text: "Nüfusun batı bölgelerinde yoğunlaşması", ok: false },
      { text: "Tarih boyunca medeniyetlere ev sahipliği yapması", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 EKPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin mutlak konumuna ait bir özellik değildir?</b></p>",
    diff: 2,
    expl: "Batıdan doğuya doğru gidildikçe yükseltinin artması ülkenin yer şekilleriyle ilgilidir ve göreceli (özel) konum özelliğidir, mutlak konumla açıklanamaz.",
    answers: [
      { text: "Orta Kuşakta ve Doğu Yarım Küre'de bulunur.", ok: false },
      { text: "Batıdan doğuya doğru gidildikçe yükselti artar.", ok: true },
      { text: "2. ve 3. saat dilimleri içinde yer alır", ok: false },
      { text: "En batısı ile en doğusu arasında 76 dakikalık zaman farkı vardır.", ok: false },
      { text: "En kuzeyi ile en güneyi arasında yaklaşık 666 kilometre mesafe vardır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2018 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Aşağıdaki şehirlerimizden hangileri arasında yerel saat farkı daha fazladır?</b></p>",
    diff: 1,
    expl: "Yerel saat farkının fazla olması için şehirlerin doğu-batı ekseninde birbirine en uzak olması gerekir. İzmir (en batı) ile Kars (en doğu) arası yerel saat farkı en fazladır.",
    answers: [
      { text: "Edirne - İstanbul", ok: false },
      { text: "Sinop - Trabzon", ok: false },
      { text: "İzmir - Kars", ok: true },
      { text: "Şırnak - Batman", ok: false },
      { text: "Adana - Samsun", ok: false }
    ]
  },
  {
    text: "<p><b>(2017 KPSS-LİSANS)</b><br><br><b>Aşağıdakilerden hangisi Türkiye'nin özel konumuyla ilgilidir?</b></p>",
    diff: 2,
    expl: "Ankara ve Erzurum yaklaşık olarak aynı enlemlerde bulunmalarına rağmen, Erzurum'un Ankara'ya göre çok daha soğuk olması (yükseltisinin fazla olmasından dolayı) özel konumla ilgilidir.",
    answers: [
      { text: "Dört mevsimin belirgin olarak yaşanması", ok: false },
      { text: "Karadeniz'deki ortalama deniz suyu sıcaklıklarının Akdeniz'den düşük olması", ok: false },
      { text: "Ankara'da ortalama sıcaklıkların Erzurum'dan yüksek olması", ok: true },
      { text: "Diyarbakır'da güneyden esen rüzgârların sıcaklığı artırması", ok: false },
      { text: "Antalya'da ortalama sıcaklıkların İstanbul'dan fazla olması", ok: false }
    ]
  },
  {
    text: "<p><b>(2015 KPSS-LİSANS)</b><br><br>Türkiye kışın genellikle kuzey sektörlü soğuk ve nemli hava kütlelerinin, yazın ise güney sektörlü sıcak ve kuru hava kütlelerinin etkisinde kalır.<br><br><b>Bu durum Türkiye'nin başlıca hangi özelliğinden kaynaklanmaktadır?</b></p>",
    diff: 2,
    expl: "Türkiye'ye kuzeyden soğuk, güneyden sıcak hava kütlelerinin gelmesi, Ekvator'un kuzeyinde (Kuzey Yarım Küre'de) yer almasının, yani mutlak konumunun doğrudan bir sonucudur.",
    answers: [
      { text: "Orta kesimlerinde geniş düzlüklerin bulunmasından", ok: false },
      { text: "Üç tarafının denizlerle çevrili olmasından", ok: false },
      { text: "Kuzeyinde ve güneyinde yüksek dağ sıralarının bulunmasından", ok: false },
      { text: "Ortalama yükseltisinin fazla olmasından", ok: false },
      { text: "Mutlak konumundan", ok: true }
    ]
  }
];

// ============================================================================
// COĞRAFİ KONUM - TEST 3
// ============================================================================
export const COGRAFI_KONUM_TEST3: McQ[] = [
  {
    text: "<p><b>(2015 KPSS-LİSANS)</b><br><br>Tatilini geçirmek üzere Türkiye'ye gelen bir turist, Türkiye'de kaldığı dönemde gece süresinin gittikçe kısalmakla birlikte gündüz süresine göre daha uzun olduğunu fark etmiştir.<br><br><b>Buna göre turistin hangi tarihler arasında Türkiye'de olduğu söylenebilir?</b></p>",
    diff: 3,
    expl: "Gece süresi gündüzden daha uzunsa kış dönemi yaşanıyordur (23 Eylül - 21 Mart arası). Geceler 'gittikçe kısalıyorsa' tarih 21 Aralık'ı geçmiş olmalıdır. 31 Ocak - 11 Şubat bu iki kurala uyan tek dönemdir.",
    answers: [
      { text: "31 Ocak - 11 Şubat", ok: true },
      { text: "1 - 11 Nisan", ok: false },
      { text: "8 - 18 Temmuz", ok: false },
      { text: "30 Eylül - 11 Ekim", ok: false },
      { text: "11 - 21 Aralık", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-LİSANS)</b><br><br>Türkiye'de, • dört mevsim belirgin olarak yaşanır, • Akdeniz iklimi etkilidir, • cephesel yağışlar görülür, • Batı rüzgârları etkilidir.<br><br><b>Bu özelliklerin ortaya çıkmasında aşağıdakilerden hangisinin etkisi daha fazladır?</b></p>",
    diff: 1,
    expl: "Verilen bu dört temel özellik (ABCD Kuralı: Akdeniz iklimi, Batı rüzgarları, Cephe yağışları, Dört mevsim belirginliği) Türkiye'nin Orta Kuşakta yer almasının sonucudur.",
    answers: [
      { text: "Kuzey yarım kürede yer almasının", ok: false },
      { text: "Orta kuşakta yer almasının", ok: true },
      { text: "Üç tarafının denizlerle çevrili olmasının", ok: false },
      { text: "Yüzey şekillerinin çok çeşitli olmasının", ok: false },
      { text: "26° - 45° doğu meridyenleri arasında bulunmasının", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ORTAÖĞRETİM)</b><br><br>Türkiye, coğrafi konumu nedeniyle Dünya'da ve içinde bulunduğu bölgede jeopolitik öneme sahip bir ülkedir.<br><br><b>Bu durumun oluşmasında aşağıdakilerden hangisinin bir etkisi yoktur?</b></p>",
    diff: 2,
    expl: "Türkiye petrol ve doğalgaz gibi fosil yakıtlar bakımından zengin değildir, dışarıdan ithal eder. Dolayısıyla fosil yakıt dış satımının (ihracatının) fazla olması söz konusu olamaz.",
    answers: [
      { text: "Fosil yakıt dış satımının fazla olmasının", ok: true },
      { text: "Çevresindeki deniz ve karalara göre konumunun", ok: false },
      { text: "Uluslararası ulaşım yollarının kavşak noktasında olmasının", ok: false },
      { text: "Zengin petrol ve doğal gaz kaynaklarına yakınlığının", ok: false },
      { text: "Nüfusunun ve doğal kaynak potansiyelinin", ok: false }
    ]
  },
  {
    text: "<p><b>(2014 KPSS-ORTAÖĞRETİM)</b><br><br><b>Aşağıda coğrafi koordinatları verilen alanlardan hangisi, Türkiye sınırları içerisinde yer almaktadır?</b></p>",
    diff: 3,
    expl: "Türkiye 36° - 42° Kuzey paralelleri ile 26° - 45° Doğu meridyenleri arasındadır. 39°27' Kuzey ile 35°27' Doğu aralıklarında bulunan merkez bu sınırların tam içine düşer.",
    answers: [
      { text: "37°27' - 37°29' Kuzey, 37°29' - 37°27' Doğu", ok: false },
      { text: "36°29' - 36°27' Kuzey, 38°27' - 38°29' Doğu", ok: false },
      { text: "39°27' - 39°29' Kuzey, 35°27' - 35°29' Doğu", ok: true },
      { text: "38°27' - 38°29' Kuzey, 40°29' - 40°27' Doğu", ok: false },
      { text: "41°27' - 41°29' Kuzey, 39°29' - 39°27' Doğu", ok: false }
    ]
  },
  {
    text: "<p><b>(2013 MEB-YURTDIŞI ÖĞRETMENLİK)</b><br><br><b>Türkiye'nin en doğusu ile en batısı arasında meridyen farkından dolayı kaç dakikalık fark bulunmaktadır?</b></p>",
    diff: 1,
    expl: "Türkiye 26° ve 45° Doğu meridyenleri arasındadır. 45 - 26 = 19 meridyen fark vardır. 19 x 4 dakika = 76 dakika yerel saat farkı bulunur.",
    answers: [
      { text: "34", ok: false },
      { text: "52", ok: false },
      { text: "65", ok: false },
      { text: "76", ok: true },
      { text: "84", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 EKPSS-LİSANS)</b><br><br><b>Akdeniz kıyısında bulunan X kentiyle Karadeniz kıyısında bulunan Y kenti arasında aşağıdakilerden hangisinin değişim göstermesi kesin olarak enleme bağlıdır?</b></p>",
    diff: 2,
    expl: "Kuzey-güney yönlü yer değiştirmelerde gece-gündüz süreleri arasındaki farkın değişmesi tamamen mutlak konuma (enleme) bağlıdır.",
    answers: [
      { text: "Ulaşım koşulları", ok: false },
      { text: "Gece-gündüz sürelerinin farkı", ok: true },
      { text: "Yağışın mevsimlere göre dağılışı", ok: false },
      { text: "Yıllık ortalama sıcaklıklarını dağılışı", ok: false },
      { text: "Yerel saat farkı", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-ORTAÖĞRETİM)</b><br><br><b>Türkiye'ye ulaşmaya çalışan bir hava aracı aşağıdaki alanların hangisinden hareket ederse en kısa mesafeyi kullanmış olur?</b></p>",
    diff: 3,
    expl: "Dünyanın küresel şeklinden dolayı Kutup noktasına (Kuzey Kutbu 90°) çok yakın olan bir merkezden zıt boylam üzerinden gelindiğinde mesafe çok kısa olur. 84°-88° Kuzey / 140°-145° Batı konumundan Kuzey Kutbu'nu aşarak zıt boylamı olan 35°-40° Doğu'ya (Türkiye'ye) inmek en kestirme yoldur.",
    answers: [
      { text: "84° - 89° Kuzey / 5° - 10° Batı", ok: false },
      { text: "36° - 41° Kuzey / 149° - 154° Batı", ok: false },
      { text: "84° - 88° Kuzey / 140° - 145° Batı", ok: true },
      { text: "36° - 41° Güney / 105° - 110° Batı", ok: false },
      { text: "83° - 88° Güney / 26° - 31° Doğu", ok: false }
    ]
  },
  {
    text: "<p><b>(2012 KPSS-LİSANS)</b><br><br><b>Türkiye'nin jeopolitik önemi üzerinde aşağıdakilerden hangisinin etkisi daha azdır?</b></p>",
    diff: 2,
    expl: "Jeopolitik önem ülkenin siyasi, ekonomik ve stratejik konumuyla ölçülür. Dört mevsimin yaşanması bir iklim (mutlak konum) özelliği olup küresel siyasetteki (jeopolitik) etkisi diğer ekonomik ve stratejik özelliklere kıyasla daha zayıftır.",
    answers: [
      { text: "Eski dünya karaları arasında merkezî bir konuma sahip olmasının", ok: false },
      { text: "Ekonomik ve siyasal bir güç merkezi olan Avrupa Birliği ülkelerine komşu olmasının", ok: false },
      { text: "Dört mevsimin belirgin olarak yaşanmasının ve aynı anda farklı iklim özelliklerinin görülmesinin", ok: true },
      { text: "Önemli petrol ve doğal gaz yataklarına sahip ülkelere komşu olmasının", ok: false },
      { text: "Uluslararası deniz ulaşımı açısından önemli bir bölgede bulunmasının", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-LİSANS)</b><br><br>21 haziranda, haritada gösterilen kentlerin hangisinde, Kırşehir'e göre hem gündüz süresi daha kısadır hem de güneş daha erken doğar?<br><br><b>Bu merkez aşağıdakilerden hangisidir?</b></p>",
    diff: 3,
    expl: "21 Haziran'da gündüz süresinin Kırşehir'den daha kısa olması için güneye inilmesi gerekir. Güneşin daha erken doğması için doğuya gidilmesi gerekir. Kırşehir'in güneydoğusunda kalan tek il Siirt'tir.",
    answers: [
      { text: "Bolu", ok: false },
      { text: "Sinop", ok: false },
      { text: "Artvin", ok: false },
      { text: "Siirt", ok: true },
      { text: "Antalya", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-LİSANS)</b><br><br><b>Türkiye'nin orta kuşakta bulunması, aşağıdaki ekonomik özelliklerinden hangisini etkilemiştir?</b></p>",
    diff: 2,
    expl: "Orta kuşakta bulunmak dört mevsimin görülmesine ve dolayısıyla çok çeşitli iklim tiplerinin oluşmasına sebep olur. İklim çeşitliliği de doğrudan çeşitli tarım ürünlerinin yetiştirilmesini sağlar.",
    answers: [
      { text: "Tarihi eserlerin ve doğal güzelliklerin olması", ok: false },
      { text: "Kişi başına düşen ulusal gelirin büyük kentlerde daha yüksek olması", ok: false },
      { text: "İşletilen ve işletmeye açılacak çeşitli madenlerin olması", ok: false },
      { text: "Çeşitli tarım ürünlerinin yetiştirilmesi", ok: true },
      { text: "Kara yolu ve deniz yolu transit taşımacılığının gelişmiş olması", ok: false }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-ÖNLİSANS)</b><br><br><b>Aşağıdakilerden hangisi, sıcaklık dağılışında bakının etkisine örnek olarak gösterilebilir?</b></p>",
    diff: 2,
    expl: "Kuzey Yarım Küre'deki dağların güneye dönük yamaçları güneşi doğrudan aldığı için daha sıcaktır (Bakı Etkisi). Giresun'da dağların güney yamacında karların erken erimesi bunun göstergesidir.",
    answers: [
      { text: "Mersin'de yıllık sıcaklık ortalamasının Sinop'tan yüksek olması", ok: false },
      { text: "Antalya kıyılarında deniz suyu sıcaklığının Samsun kıyılarındakinden yüksek olması", ok: false },
      { text: "Edirne'de karın yerde kalma süresinin İstanbul'dan fazla olması", ok: false },
      { text: "Kışın İzmir'den Afyonkarahisar'a gidildikçe yağmurun yerini kar yağışının alması", ok: false },
      { text: "Giresun'da dağların güney yamaçlarında kar erimelerinin kuzeydekinden erken başlaması", ok: true }
    ]
  },
  {
    text: "<p><b>(2010 KPSS-ORTAÖĞRETİM)</b><br><br><b>Türkiye'nin coğrafi konumuyla ilgili olarak aşağıdaki bilgilerden hangisi yanlıştır?</b></p>",
    diff: 2,
    expl: "21 Haziran'da Kuzey Yarım Küre'de kuzeye gidildikçe gündüzler uzar. Güneye gidildikçe uzamaz, aksine kısalır.",
    answers: [
      { text: "Yengeç Dönencesi'nin kuzeyinde yer alır.", ok: false },
      { text: "21 haziranda gündüz süresi güneye gidildikçe uzar.", ok: true },
      { text: "En batısı ile en doğusu arasında bir saatten fazla yerel saat farkı vardır.", ok: false },
      { text: "Avrupa, Asya ve Afrika kıtalarının birbirine en çok yaklaştığı yerdedir.", ok: false },
      { text: "Kuzey Yarım Küre'de, Orta Kuşak'ta yer alır.", ok: false }
    ]
  },
  {
    text: "<p><b>(2005 MEB-MÜFETTİŞ YARDIMCILIĞI)</b><br><br><b>21 Haziran tarihinde aşağıdakilerden hangisinde gündüz süresi diğerlerinden daha uzundur?</b></p>",
    diff: 1,
    expl: "21 Haziran tarihinde Kuzey Yarım Küre'de kuzeye doğru çıkıldıkça gündüz süresi uzar. Seçeneklerdeki iller arasında en kuzeyde yer alan il Sinop'tur.",
    answers: [
      { text: "Sinop", ok: true },
      { text: "Mersin", ok: false },
      { text: "Gazi Antep", ok: false },
      { text: "Antalya", ok: false },
      { text: "İzmir", ok: false }
    ]
  }
];