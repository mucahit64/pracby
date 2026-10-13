import { McQ } from "../../../../types";

// ============================================================================
// SÖZCÜK GRUPLARI - TEST 1
// ============================================================================
export const TUR_SOZCUK_GRUPLARI_TEST_1: McQ[] = [
  {
    text: "<p>Bir dağın zirvesine çıkmak, sadece fiziksel bir çaba değil, aynı zamanda ruhsal bir dönüşümün de parçası olabilir. <u>Doğa sevgisi</u> (I) insanı hem güçlendirir hem de huzur verir. Zirveye çıkarken kullandığınız <u>tırmanış rotası</u> (II) ve yanınıza aldığınız <u>emniyet kemeri</u> (III) gibi araçlar kadar, yanınızdaki <u>dağ rehberi</u> (IV) de oldukça önemlidir. Ancak her şeyden önce irade gücünüz size yön verecek <u>asıl kaynaktır</u> (V).</p><p><b>Bu parçada numaralandırılmış sözlerden hangisi tamlama türü bakımından diğerlerinden farklıdır?</b></p>",
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
    text: "<p>(I) Emprovize caz yapan müzisyenlerde çok önemli bir yetenek var: Zihnin akış hâlini kullanmak. (II) Trans hâli olarak da bilinen akış, bütünüyle tek aktiviteye odaklandığımız durumlarda beliriyor. (III) Örneğin, maratonda koşuyorsanız tüm dikkatiniz vücudunuzun hareketlerine odaklanıyor. (IV) Kas hareketlerinizi, ayaklarınızın yerle temasını hissetmeye başlıyor; benliğin kaybolduğunu gözlemliyorsunuz. (V) Böyle durumlarda odaklanılan beceriler en üst seviyede gerçekleştiriliyor.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat tamlaması <u>yoktur</u>?</b></p>",
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
    text: "<p>(I) Timsahların çene kasları, doğadaki en güçlü kapanma hareketlerinden birini yapabilir. (II) Bir tuzlu su timsahı, insanın tekne boyundaki korkulu rüyasıdır. (III) Timsahların göz kapakları şeffaf bir zarla korunur. (IV) Genellikle sığ sularda avlanan bu sürüngen, hedefini birkaç saniyede etkisiz hâle getirebilir. (V) Sudan çıkan timsahın ani saldırısı, çevredeki hayvanları da paniğe sürükler.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde isim tamlaması <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "IV. cümlede isim tamlaması yoktur; 'hedefini' sözcüğü tamlanan eki almıştır ama tamlayanı düşmüştür. I. cümlede 'Timsahların çene kasları', II. cümlede 'su timsahı', III. cümlede 'Timsahların göz kapakları', V. cümlede 'timsahın ani saldırısı' isim tamlamaları vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Göçmen kuşlar, doğanın en etkileyici ritimlerinden birini oluşturur. Kuzey yarımkürenin sertleşen iklim koşullarıyla birlikte başlayan <u>mevsim yolculukları</u> (I), yalnızca hayatta kalma içgüdüsüyle açıklanamayacak kadar kompleks bir düzene sahiptir. Bu türlerdeki yön bulma kabiliyeti, özellikle <u>hava katmanları</u> (II) arasındaki sıcaklık değişimlerini anlık algılayabilme yetisiyle ilişkilendirilir. Yapılan araştırmalar, farklı türlerin <u>göç rotaları</u> (III) üzerinde belirli yıllarda tekrarlanan mikro duraklamaların olduğunu ortaya koymuştur. Kimi türler, özellikle iç bölgelerdeki <u>nehir deltaları</u> (IV) gibi verimli alanları geçici konaklama bölgeleri olarak kullanmaktadır. Fakat tüm bu gözlemler içinde en dikkat çekici olanı, bazı <u>kuşların sesi</u> (V) sayesinde hem türdaşlarını yönlendirmesi hem de tehditleri uzaklaştırma becerisidir.</p><p><b>Bu parçada numaralanmış isim tamlamalarından hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
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
    text: "<p>Turizm, <u>otantik değerlerin</u> (I) ve yaşam biçimlerinin yapay olarak yeniden üretilip uygun fiyatla paketlenerek 'gelişmiş' batılılara sunulmasıdır. Bu paket, yerli halkın işe giderken otantik üniformasını giydiği, kırsal alanın işaretli patikalarla '<u>doğa yürüyüşçüleri</u> (II)' için tanzim edildiği, yerel yiyeceklerin seri olarak üretilip ambalajlandığı hepimizin <u>kredi kartıyla</u> (III) üç taksitle ödemek koşuluyla birer <u>başrol oyuncusu</u> (IV) alabileceğimiz bir <u>sahne performansını</u> (V) içermektedir.</p><p><b>Bu parçada altı çizili numaralanmış tamlamalardan hangisi tür bakımından diğerlerinden farklıdır?</b></p>",
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
    text: "<p>(I) Şunu bilmeni isterim ki evde bir kediyle yaşamak, rutini bambaşka bir boyuta taşır. (II) Siyah beyaz tüyleri olan kedim her sabah penceremin kenarına oturur. (III) Evin sessiz saatleri onun en huzurlu zamanlarıdır. (IV) Camdan dışarıyı izlerken göz bebekleri büyür, vücudu gerilir. (V) Onun her şeyi duyup algıladığı yer, pencerenin kenarındaki minder.</p><p><b>Bu parçada numaralanmış cümlelerle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III. cümledeki 'Evin sessiz saatleri' ve 'onun en huzurlu zamanları' tamlamaları, tamlananı sıfat tamlaması olan belirtili isim tamlamasıdır. Bu cümlede belirtisiz isim tamlaması yoktur.",
    answers: [
      { text: "I. cümlede edat grubu vardır.", ok: false },
      { text: "II. cümlede sıfat tamlaması vardır.", ok: false },
      { text: "III. cümlede belirtisiz isim tamlaması vardır.", ok: true },
      { text: "IV. cümlede zarf-fiil grubu vardır.", ok: false },
      { text: "V. cümlede sıfat-fiil grubu vardır.", ok: false }
    ]
  },
  {
    text: "<p>Anti kahraman türü, modern ve postmodern çağda yaşayan insanın yaşantılarının ve söz konusu yaşantıları sonucunda yozlaşmasının bir çeşit dışa vurumunu temsil etmesi açısından günümüzde kaleme alınan yazınsal yapıtlarda oldukça tercih edilen bir karakterdir.</p><p><b>Bu parçada aşağıdakilerden hangisinin örneği <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Metinde 'temsil etmesi' (isim-fiil grubu), '... çağda yaşayan insanın' (sıfat-fiil grubu), 'kahraman türü, insanın yaşantıları' (isim tamlaması) ve 'modern ve postmodern' (bağlama grubu) vardır ancak zarf-fiil grubu yoktur. 'Oldukça' sözcüğündeki '-dıkça' eki zarf-fiil işlevini kaybetmiş, sözcük zarf olmuştur.",
    answers: [
      { text: "Zarf-fiil grubu", ok: true },
      { text: "İsim-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "İsim tamlaması", ok: false },
      { text: "Bağlama grubu", ok: false }
    ]
  },
  {
    text: "<p>İçinde bulunduğu tüm zorluklara rağmen yılmadan çalışan insanların başarıya ulaşmaları, kesinlikle mümkündür.</p><p><b>Bu cümlenin öznesinde aşağıdaki kelime gruplarından hangisi <u>yoktur</u>?</b></p>",
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
    text: "<p>Kitaplar; düşünsel gelişimin sürekliliğini sağlayan, kavramların biçimsel derinliğini artıran ve zihinsel süreçleri yönlendiren araçlardır. Bir yazarın oluşturduğu anlatım biçimi, hem içeriğin yapısını hem de okurun metne katılım düzeyini belirler. Hatta bazı edebî türler, okuyucuyu pasif konumdan çıkarıp metne aktif katılımcı hâline getirmeyi amaçlar.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada edat olmadığı için edat grubu da yoktur. 'anlatım biçimi' belirtisiz isim tamlaması, 'gelişimin sürekliliği' belirtili isim tamlaması, 'artıran ve zihinsel süreçleri yönlendiren' ile 'hem içeriğin yapısını hem de okurun metne katılım düzeyini' bağlama grubu, 'okuyucuyu pasif konumdan çıkarıp' zarf-fiil grubudur.",
    answers: [
      { text: "Edat grubu", ok: true },
      { text: "Belirtili isim tamlaması", ok: false },
      { text: "Belirtisiz isim tamlaması", ok: false },
      { text: "Bağlama grubu", ok: false },
      { text: "Zarf-fiil grubu", ok: false }
    ]
  },
  {
    text: "<p>Kalabalığın ortasında <u>bizim kız</u>, her zamanki gibi güler yüzlüydü. Yeni taşındıkları apartmandaki komşularla kısa sürede <u>cana yakın</u> ilişkiler kurmayı başarmıştı. Gerçi üst kattaki <u>sonradan görme</u> bir kadının bakışları zaman zaman rahatsız edici oluyordu ama bizim kız buna da takılmıyordu. Yine de <u>ikide bir</u> kapısını çalıp sorular sorması, biraz fazla geliyordu doğrusu.</p><p><b>Bu parçadaki altı çizili söz grupları aşağıdaki seçeneklerle eşleştirilirse hangi söz grubu dışta kalır?</b></p>",
    diff: 3,
    expl: "'Bizim kız' (zamir + ilgi eki + isim şeklinde oluşan ilgi öbeği) sıfat tamlaması, 'cana yakın' yönelme grubu, 'sonradan görme' ayrılma grubu, 'ikide bir' bulunma grubudur. İsim tamlaması örneklendirilmemiştir.",
    answers: [
      { text: "Bulunma grubu", ok: false },
      { text: "Ayrılma grubu", ok: false },
      { text: "Sıfat tamlaması", ok: false },
      { text: "Yönelme grubu", ok: false },
      { text: "İsim tamlaması", ok: true }
    ]
  },
  {
    text: "<p>Kırsal bölgelerde yapılan bazı tarım araştırmaları, toprağın kimyasal yapısına göre değişen verimlilik oranlarını incelemektedir. Bu araştırmalar, özellikle fosfor eksikliğinin giderilmesi konusunda yeni çözüm yolları önermektedir. Toprak analizlerinden elde edilen bulgular sayesinde, üreticiler daha bilinçli gübreleme uygulamalarına yönelmiştir. Ancak her toprağın aynı sonucu vermediği göz önünde bulundurulmalı, bilimsel temelli ölçütler esas alınmalıdır. Yapılan uygulamaların etkisi, zamanla gözlemlenerek daha sürdürülebilir sonuçlara ulaşılabilir.</p><p><b>Bu parçada aşağıdakilerden hangisi <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "Parçada yalnızca 'ancak' bağlacı vardır ama bu bağlaç söz veya söz gruplarını bağlamadığı için bağlama grubu yoktur. 'fosfor eksikliğinin giderilmesi' isim-fiil grubu, 'yapısına göre' edat grubu, 'kırsal bölgelerde yapılan' sıfat-fiil grubu, 'zamanla gözlemlenerek' zarf-fiil grubudur.",
    answers: [
      { text: "Edat grubu", ok: false },
      { text: "İsim-fiil grubu", ok: false },
      { text: "Sıfat-fiil grubu", ok: false },
      { text: "Bağlama grubu", ok: true },
      { text: "Zarf-fiil grubu", ok: false }
    ]
  }
];