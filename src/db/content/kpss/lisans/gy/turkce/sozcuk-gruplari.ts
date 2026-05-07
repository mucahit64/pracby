import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK GRUPLARI - TEST 1
// ============================================================================
export const TUR_SOZCUK_GRUPLARI_TEST_1: McQ[] = [
  {
    text: "<p>Bir dağın zirvesine çıkmak, sadece fiziksel bir çaba değil, aynı zamanda ruhsal bir dönüşümün parçası olabilir. <u>I. Doğa sevgisi</u> insanı hem güçlendirir hem de huzur verir. Zirveye çıkarken kullandığınız <u>II. tırmanış rotası</u> ve yanınıza aldığınız <u>III. emniyet kemeri</u> gibi araçlar kadar, yanınızdaki <u>IV. dağ rehberi</u> de oldukça önemlidir. Ancak her şeyden önce irade gücünüz size yön verecek <u>V. asıl kaynaktır</u>.</p><p><b>Bu parçada numaralandırılmış sözlerden hangisi tamlama türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I, II, III ve IV numaralı tamlamalar 'belirtisiz isim tamlaması'dır (Doğa sevgisi, tırmanış rotası vb.). V numaralı 'asıl kaynak' ise ismi niteleyen bir sıfat tamlamasıdır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>(I) Emprovize caz yapan müzisyenlerde çok önemli bir yetenek var... (II) Trans hâli olarak da bilinen akış... (III) Örneğin maratonda koşuyorsanız tüm dikkatiniz vücudunuzun hareketlerine odaklanıyor. (IV) Kas hareketlerinizi, ayaklarınızın yerle temasını hissetmeye başlıyor; benliğin kaybolduğunu gözlemliyorsunuz. (V) Böyle durumlarda odaklanılan beceriler en üst seviyede gerçekleştiriliyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat tamlaması yoktur?</b></p>",
    diff: 3,
    expl: "I, II, III ve V numaralı cümlelerde 'önemli bir yetenek', 'tek aktivite', 'tüm dikkatiniz', 'odaklanılan beceriler' gibi sıfat tamlamaları vardır. IV. cümlede ise sadece isim tamlamaları mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Timsahların çene kasları, doğadaki en güçlü kapanma hareketlerinden birini yapabilir. (II) Bir tuzlu su timsahı, insanın tekne boyundaki korkulu rüyasıdır. (III) Timsahların göz kapakları şeffaf bir zarla korunur. (IV) Genellikle sığ sularda avlanan bu sürüngen, hedefini birkaç saniyede etkisiz hâle getirebilir. (V) Sudan çıkan timsahın ani saldırısı, çevredeki hayvanları da paniğe sürükler.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde isim tamlaması yoktur?</b></p>",
    diff: 3,
    expl: "IV. cümlede 'sığ sular', 'bu sürüngen', 'etkisiz hâle' gibi ifadeler sıfat tamlamasıdır; isim tamlaması bulunmamaktadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Göçmen kuşlar... başlayan <u>I. mevsim yolculukları</u>... <u>II. hava katmanları</u>... <u>III. göç rotaları</u>... <u>IV. nehir deltaları</u>... <u>V. kuşların sesi</u>...</p><p><b>Bu parçada numaralanmış isim tamlamalarından hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I, II, III ve IV numaralı tamlamalar tamlayanı ek almamış 'belirtisiz isim tamlaması'dır. V numaralı 'kuşların sesi' tamlamasında tamlayan -ın ekini aldığı için 'belirtili isim tamlaması'dır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>...<u>I. otantik değerlerin</u>... <u>II. doğa yürüyüşçüleri</u>... <u>III. kredi kartıyla</u>... <u>IV. başrol oyuncusu</u>... <u>V. sahne performansını</u>...</p><p><b>Bu parçada altı çizili numaralanmış tamlamalardan hangisi tür bakımından diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'otantik değerler' bir sıfat tamlamasıdır. Diğer tüm seçenekler belirtisiz isim tamlamasıdır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Şunu bilmeni isterim ki evde bir kediyle yaşamak... (II) Siyah beyaz tüyleri olan kedim... (III) Evin sessiz saatleri... (IV) Camdan dışarıyı izlerken... (V) Onun her şeyi duyup algıladığı yer...</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "III. cümledeki 'Evin sessiz saatleri' bir belirtili isim tamlamasıdır (araya sıfat girmiş). Belirtisiz isim tamlaması değildir.",
    answers: [
      { text: "I. cümlede edat grubu vardır.", ok: false },
      { text: "II. cümlede sıfat tamlaması vardır.", ok: false },
      { text: "III. cümlede belirtisiz isim tamlaması vardır.", ok: true },
      { text: "IV. cümlede zarf-fiil grubu vardır.", ok: false },
      { text: "V. cümlede sıfat-fiil grubu vardır.", ok: false }
    ]
  },
  {
    text: "<p>Anti kahraman türü, modern ve postmodern çağda yaşayan insanın yaşantılarının ve söz konusu yaşantıları sonucunda yozlaşmasının bir çeşit dışa vurumunu temsil etmesi açısından günümüzde kaleme alınan yazınsal yapıtlarda oldukça tercih edilen bir karakterdir.</p><p><b>Bu parçada aşağıdakilerden hangisinin örneği yoktur?</b></p>",
    diff: 3,
    expl: "Metinde 'temsil etmesi' (isim-fiil grubu), 'alınan yapıtlar' (sıfat-fiil grubu), 'insanın yaşantıları' (isim tamlaması) ve 'modern ve postmodern' (bağlama grubu) vardır ancak zarf-fiil grubu yoktur.",
    answers: [
      { text: "Zarf-fiil grubu", ok: true },
      { text: "İsim-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "İsim tamlaması", ok: false },
      { text: "Bağlama grubu", ok: false }
    ]
  },
  {
    text: "<p>İçinde bulunduğu tüm zorluklara rağmen yılmadan çalışan insanların başarıya ulaşmaları, kesinlikle mümkündür.</p><p><b>Bu cümlenin öznesinde aşağıdaki kelime gruplarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Özne 'İçinde bulunduğu... insanların başarıya ulaşmaları' kısmıdır. Burada zarf-fiil (yılmadan), sıfat-fiil (çalışan), isim-fiil (ulaşmaları) ve edat (rağmen) grupları vardır ancak belirtisiz isim tamlaması yoktur.",
    answers: [
      { text: "Zarf-fiil grubu", ok: false },
      { text: "Belirtisiz isim tamlaması", ok: true },
      { text: "Edat grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "İsim-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>Kitaplar; düşünsel gelişimin sürekliliğini sağlayan... Bir yazarın oluşturduğu anlatım biçimi, hem içeriğin yapısını hem de okurun metne katılım düzeyini belirler...</p><p><b>Bu parçada aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde isim tamlamaları, bağlama grupları ve zarf-fiil grupları varken edat grubu bulunmamaktadır.",
    answers: [
      { text: "Edat grubu", ok: true },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Belirtisiz isim tamlaması", ok: false },
      { text: "Bağlama grubu", ok: false },
      { text: "Zarf-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>Kalabalığın ortasında <u>bizim kız</u>... <u>cana yakın</u> ilişkiler... <u>sonradan görme</u> bir kadın... <u>ikide bir</u> kapısını çalıp...</p><p><b>Bu parçadaki altı çizili söz grupları seçeneklerle eşleştirilirse hangisi dışta kalır?</b></p>",
    diff: 3,
    expl: "Bizim kız (İsim tamlaması/Sıfat tamlaması benzeri), cana yakın (Yönelme grubu), sonradan görme (Ayrılma grubu), ikide bir (Bulunma grubu) örneklenmiştir. Sıfat tamlaması genel bir kategori olsa da isim tamlaması tam olarak karşılanmamıştır.",
    answers: [
      { text: "Bulunma grubu", ok: false },
      { text: "Ayrılma grubu", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Yönelme grubu", ok: false },
      { text: "İsim tamlaması", ok: true }
    ]
  },
  {
    text: "<p>Kırsal bölgelerde yapılan bazı tarım araştırmaları, toprağın kimyasal yapısına göre değişen verimlilik oranlarını incelemektedir...</p><p><b>Bu parçada aşağıdakilerinden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Metinde edat (göre), isim-fiil (incelemektedir - incelemek), sıfat-fiil (yapılan) ve zarf-fiil (gözlemlenerek) grupları varken bağlama grubu yoktur.",
    answers: [
      { text: "Edat grubu", ok: false },
      { text: "İsim-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "Bağlama grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false }
    ]
  }
];