import { McQ } from "../../../../types";

// ============================================================================
// CÜMLE OLUŞTURMA - TEST 1
// ============================================================================
export const TUR_CUMLE_OLUSTURMA_TEST_1: McQ[] = [
  {
    text: "<p>I. onlarla paylaşılan ortak hatıraların<br>II. kuşakların anılarının aktarıcısı ve<br>III. birbirine bağladığı gibi, önceki<br>IV. yuvalandığı birer hafıza ortamlarıdır<br>V. evler; birkaç kuşağı mekânsal olarak</p><p><b>Yukarıdaki sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında sondan ikinci hangisi olur?</b></p>",
    diff: 2,
    expl: "Cümlenin mantıksal sıralaması: 'evler; birkaç kuşağı mekânsal olarak (V) - birbirine bağladığı gibi, önceki (III) - kuşakların anılarının aktarıcısı ve (II) - onlarla paylaşılan ortak hatıraların (I) - yuvalandığı birer hafıza ortamlarıdır (IV)'. Sıralama V-III-II-I-IV şeklindedir. Sondan ikinci öge I numaralı söz öbeğidir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. sözleri işite işite çeşitli<br>II. çocuklar, hiçbir şeyi<br>III. ama anlamadıkları<br>IV. biçimlerde anlamlarını kavrarlar<br>V. anlamaz görünürler</p><p><b>Yukarıdaki sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında baştan ikinci hangisi olur?</b></p>",
    diff: 2,
    expl: "Anlamlı sıralama: 'çocuklar, hiçbir şeyi (II) - anlamaz görünürler (V) - ama anlamadıkları (III) - sözleri işite işite çeşitli (I) - biçimlerde anlamlarını kavrarlar (IV)'. Sıralama II-V-III-I-IV şeklindedir. Baştan ikinci V numaralı sözdür.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. düşünen ailelerin sayısı<br>II. araştırmalar sanat yoluyla çocukların önemli kazanımlar edindiğine<br>III. gerektiren programlar olarak gören<br>IV. işaret etse de sanat atölyelerini özel yetenek<br>V. hatta okul başarısına engel olarak<br>VI. azımsanmayacak kadar yüksek</p><p><b>Yukarıdaki sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında baştan ikinci hangisi olur?</b></p>",
    diff: 3,
    expl: "Sıralama: 'Araştırmalar sanat yoluyla çocukların önemli kazanımlar edindiğine (II) - işaret etse de sanat atölyelerini özel yetenek (IV) - gerektiren programlar olarak gören (III) - hatta okul başarısına engel olarak (V) - düşünen ailelerin sayısı (I) - azımsanmayacak kadar yüksek(tir) (VI)'. Baştan ikinci IV olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. yönlendirmesi olmadan öğrencinin<br>II. zihinsel bağımsızlık; başkasının<br>III. güçlüklerini görmesi ve bu güçlüklere<br>IV. kendi öğrenmesi ve çalışmalarını yürütmesi<br>V. kendine göre çözümler üretmesidir</p><p><b>Yukarıdaki sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında üçüncü hangisi olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'zihinsel bağımsızlık; başkasının (II) - yönlendirmesi olmadan öğrencinin (I) - kendi öğrenmesi ve çalışmalarını yürütmesi (IV) - güçlüklerini görmesi ve bu güçlüklere (III) - kendine göre çözümler üretmesidir (V)'. Sıralama II-I-IV-III-V şeklindedir. Üçüncü IV olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. tek yönlü bir bakış açısıyla<br>II. dizgesini içermektedir.<br>III. beynin çalışma sistemi<br>IV. karmaşık işlevler<br>V. izah edilemeyecek kadar</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi üçüncü olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'Beynin çalışma sistemi (III) - tek yönlü bir bakış açısıyla (I) - izah edilemeyecek kadar (V) - karmaşık işlevler (IV) - dizgesini içermektedir (II)'. Sıralama III-I-V-IV-II şeklindedir. Üçüncü V olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>I. hatta dil biliminin eski dönemlerinde<br>II. boş kutular olarak düşünülmüştür<br>III. kimi bilginlerce sözcükler<br>IV. geleneksel dil bilgisinde<br>V. içine anlamların konduğu</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi baştan ikinci olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'geleneksel dil bilgisinde (IV) - hatta dil biliminin eski dönemlerinde (I) - kimi bilginlerce sözcükler (III) - içine anlamların konduğu (V) - boş kutular olarak düşünülmüştür (II)'. Sıralama IV-I-III-V-II şeklindedir. Baştan ikinci I olur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. durabilecek dilsel ve düşünsel donanımda<br>II. iletişimin işleyiş biçimlerini öylesine değiştirdi<br>III. iletişim araçlarının olası olumsuz etkilerine karşı da<br>IV. ki dilin öğretim sürecini yeniden yapılandırmak ve<br>V. teknolojik gelişmeler, iletişim ortamlarını ve<br>VI. bireyleri yetiştirmek kaçınılmaz bir zorunluluk oldu</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi sondan ikinci olur?</b></p>",
    diff: 3,
    expl: "Sıralama: 'Teknolojik gelişmeler, iletişim ortamlarını ve (V) - iletişimin işleyiş biçimlerini öylesine değiştirdi (II) - ki dilin öğretim sürecini yeniden yapılandırmak ve (IV) - iletişim araçlarının olası olumsuz etkilerine karşı da (III) - durabilecek dilsel ve düşünsel donanımda (I) - bireyleri yetiştirmek kaçınılmaz bir zorunluluk oldu (VI)'. Sondan ikinci I olur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. aile ilişkilerini en ince ayrıntılarına kadar<br>II. küçük burjuva çevrelerindeki yozlaşmış<br>III. kalıplara bilinç düzeyinde başkaldıran bireyin<br>IV. irdeleyen \"Dönüşüm\", aynı zamanda<br>V. toplumun dayattığı, işlevini çoktan yitirmiş<br>VI. trajedisini çarpıcı bir biçimde dile getirir</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi sondan ikinci olur?</b></p>",
    diff: 3,
    expl: "Sıralama: 'küçük burjuva çevrelerindeki yozlaşmış (II) - aile ilişkilerini en ince ayrıntılarına kadar (I) - irdeleyen \"Dönüşüm\", aynı zamanda (IV) - toplumun dayattığı, işlevini çoktan yitirmiş (V) - kalıplara bilinç düzeyinde başkaldıran bireyin (III) - trajedisini çarpıcı bir biçimde dile getirir (VI)'. Sondan ikinci III olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. ortamının, insanları doğallığından uzaklaştırarak<br>II. yazar, son kitabında yalanın, aşırmanın ve modern hayatın ritüelleri<br>III. durumlarını artık sorgulaması gerektiğini hatırlatır<br>IV. olan gazetelerin, hazır bilginin, günümüzde daha çok web<br>V. alıklaştırdığını, insanların içinde bulunulan</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi baştan ikinci olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'yazar, son kitabında yalanın, aşırmanın ve modern hayatın ritüelleri (II) - olan gazetelerin, hazır bilginin, günümüzde daha çok web (IV) - ortamının, insanları doğallığından uzaklaştırarak (I) - alıklaştırdığını, insanların içinde bulunulan (V) - durumlarını artık sorgulaması gerektiğini hatırlatır (III)'. Baştan ikinci IV olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. şiirlerinde sosyal hayatın aksayan<br>II. olunması gerektiğini açıkça belirtmektedir<br>III. fikrine bağlı olarak, şiirlerinde toplumsal<br>IV. insanın yaratılıştan gelen eşitliğe sahip olduğu<br>V. yönlerini dile getiren Âşık Veysel<br>VI. açıdan birlik ve beraberlik içerisinde</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi baştan üçüncü olur?</b></p>",
    diff: 3,
    expl: "Sıralama: 'Şiirlerinde sosyal hayatın aksayan (I) - yönlerini dile getiren Âşık Veysel (V) - insanın yaratılıştan gelen eşitliğe sahip olduğu (IV) - fikrine bağlı olarak, şiirlerinde toplumsal (III) - açıdan birlik ve beraberlik içerisinde (VI) - olunması gerektiğini açıkça belirtmektedir (II)'. Baştan üçüncü IV olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. karşı koruyacağı düşüncesine dayanır<br>II. başarmasına izin vereceği ve kendisini<br>III. öz güven, bireyin yetilerinin bir amacı<br>IV. değerlendirilmenin zayıflatıcı sonuçlarına<br>V. başkaları tarafından negatif</p><p><b>Yukarıdaki sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında baştan dördüncü hangisi olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'öz güven, bireyin yetilerinin bir amacı (III) - başarmasına izin vereceği ve kendisini (II) - başkaları tarafından negatif (V) - değerlendirilmenin zayıflatıcı sonuçlarına (IV) - karşı koruyacağı düşüncesine dayanır (I)'. Sıralama III-II-V-IV-I şeklindedir. Baştan dördüncü IV olur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. duran imaj dünyasından bir tezahürdür<br>II. edilen her imge ve görülen her rüya<br>III. şiirsel gerçeklikten bir parça taşır<br>IV. ve bu dünyada kullanılan her kelime, inşa<br>V. şiir sanatı, gerçekliğin öteki tarafında</p><p><b>Yukarıda numaralanmış sözler anlamlı ve kurallı bir cümle oluşturacak biçimde sıralandığında, hangisi baştan ikinci olur?</b></p>",
    diff: 2,
    expl: "Sıralama: 'şiir sanatı, gerçekliğin öteki tarafında (V) - duran imaj dünyasından bir tezahürdür (I) - ve bu dünyada kullanılan her kelime, inşa (IV) - edilen her imge ve görülen her rüya (II) - şiirsel gerçeklikten bir parça taşır (III)'. Sıralama V-I-IV-II-III şeklindedir. Baştan ikinci I olur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];