import { McQ } from "../../../../types";

// ============================================================================
// CÜMLEDE ANLAM ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_CUMLEDE_ANLAM_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Alışkanlık hâline gelmiş bir iş yapılmaya başlandığı zaman beyin; karar verme sürecine ----, çok çalışmayı bırakır ya da ---- başka işlere kaydırır.</p><p><b>Bu parçada boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Cümlede beynin alışkanlık anındaki tasarrufu anlatılmaktadır. Alışkanlıklar otomatikleştiği için beyin karar verme sürecine 'ket vurur' (durdurur/engeller) ve çalışmayı azaltarak 'eğilimini' (ilgisini) başka yönlere kaydırır.",
    answers: [
      { text: "yoğunlaşır - dikkatini", ok: false },
      { text: "ket vurur - eğilimini", ok: true },
      { text: "odaklanır - enerjisini", ok: false },
      { text: "geçiş yapar - gücünü", ok: false },
      { text: "ara verir - önceliğini", ok: false }
    ]
  },
  {
    text: "<p>Edebiyat takipçilerinin bir bölümü, kitaba dokunmanın ---- düşüncesinden hareketle basılı kitapların yıllar içinde ortadan kalkacağı öngörüsüne karşı çıksa da elektronik kitapların taşınma kolaylıkları ve düşük maliyetleri bu tahminin gerçekleşme ---- artırıyor.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Kitaba dokunmanın verdiği 'huzur' veya 'mutluluk' gibi duygusal bağlar basılı kitabı savunsa da, dijitalin avantajları basılı kitabın bitme 'ihtimalini' (olasılığını) güçlendirir. D şıkkındaki 'kaygı' ve 'ihtimal' kelimeleri metnin bağlamına tam uymaktadır.",
    answers: [
      { text: "yaratıcılığı geliştirdiği - beklentisini", ok: false },
      { text: "mutluluk verdiği - olasılığını", ok: false },
      { text: "heyecan yaşattığı - oranını", ok: false },
      { text: "kaygıyı artırdığı - ihtimalini", ok: true },
      { text: "huzur sağladığı - sıklığını", ok: false }
    ]
  },
  {
    text: "<p>Yedinci Sanat olarak da adlandırılan sinema; hemen hemen bütün sanatlardan ----, diğerlerinden aldığı malzemeleri kurmaca bir yapıyla ---- film hâlinde seyirciye sunan bir sanat dalıdır.</p><p><b>Bu cümlede boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Sinema diğer sanatlardan 'beslenen' (ilham/materyal alan) ve bu farklı disiplinlerden gelen malzemeleri kendi içinde 'birleştirerek' yeni bir eser çıkaran bir sanat dalıdır.",
    answers: [
      { text: "beslenen - birleştirerek", ok: true },
      { text: "üretilen - çözümleyerek", ok: false },
      { text: "etkilenen - parçalayarak", ok: false },
      { text: "esinlenen - soyutlayarak", ok: false },
      { text: "çoğaltılan - özgürleştirerek", ok: false }
    ]
  },
  {
    text: "<p>Hastalanmış veya hasar görmüş bir organın sağlam olanıyla değiştirilmesi fikri ve bu düşünce çerçevesinde gerçekleştirilen deneysel girişimler çok eskilere ----. Ancak efsaneler bir yana bırakılacak olursa organ naklinin tarihçesi büyük ölçüde son 60-70 yıllık ----.</p><p><b>Bu parçada boş bırakılan yerlere aşağıdakilerden hangisi sırasıyla getirilmelidir?</b></p>",
    diff: 2,
    expl: "Fikirlerin çok eskilere 'dayandığı' (temellendiği) ancak somut tıbbi gerçeklerin (efsaneler hariç) yakın bir süreci 'kapsadığı' belirtilmelidir.",
    answers: [
      { text: "tarihleniyor - gösteriyor", ok: false },
      { text: "dayanıyor - kapsıyor", ok: true },
      { text: "uzanıyor - düşündürüyor", ok: false },
      { text: "bağlanıyor - takip ediyor", ok: false },
      { text: "işaret ediyor - içeriyor", ok: false }
    ]
  },
  {
    text: "<p>Kimi yazarlar romanın toplum hayatındaki aksaklıkların ortadan kalkmasına yardım etmesini, ---- isterken kimileri ise romanın bir toplum bilimi kitabı değil bir sanat eseri olduğunu, ondan ancak ---- beklenebileceğini ileri sürer.</p><p><b>Bu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 3,
    expl: "İlk grup romanın topluma 'kılavuzluk yapmasını' veya 'doğru yolu göstermesini' isterken, ikinci grup romanı bir sanat eseri olarak gördüğü için ondan 'edebî güzellik' bekler.",
    answers: [
      { text: "doğru yolu göstermesini - edebî güzelliğin", ok: true },
      { text: "gerçekleri yansıtmasını - kılavuzluk yapmasının", ok: false },
      { text: "güzellikleri anlatmasını - kusursuz dil kullanımının", ok: false },
      { text: "ironiyi öne çıkarmasını - iyi bir anlatımın", ok: false },
      { text: "geleneği aktarmasını - mantıksal bir akışın", ok: false }
    ]
  },
  {
    text: "<p>(I) Japonya'nın en prestijli edebiyat ödülü sayılan Akutagawa Ödülü'ne, Rie Kudan layık görüldü. ... (V) Yazarın uyguladığı yöntemi kimileri desteklerken kimileri onun bu ödülü hak edip etmediğini hâlâ sorguluyor.</p><p><b>Bu parçada numaralanmış cümlelerde Rie Kudan ile ilgili aşağıdakilerden hangisi <u>söylenemez?</u></b></p>",
    diff: 3,
    expl: "II. cümlede eleştirmenlerin 'o kadar mükemmel ki hata bulmak zor' yorumu yaptığı belirtilse de, bu Rie Kudan'ın değil, yazarın (Rie Kudan) kitaba yönelik kendi değerlendirmesi veya genel bir aktarımdır. Seçenekteki 'eleştirmenlerce olumlu değerlendirildiği' yargısı doğrudan II. cümleden çıkarılamaz.",
    answers: [
      { text: "I. cümlede, elde ettiği bir başarının önemine değinilmiştir.", ok: false },
      { text: "II. cümlede, eserinin eleştirmenlerce olumlu değerlendirildiği vurgulanmıştır.", ok: true },
      { text: "III. cümlede, ödül aldığı kitabın yazımında yararlandığı teknolojik imkândan söz edilmiştir.", ok: false },
      { text: "IV. cümlede, kitap yazımında yapay zekâdan faydalanmayı önerdiği belirtilmiştir.", ok: false },
      { text: "V. cümlede, uyguladığı yöntemle ilgili farklı görüşlerin olduğu ifade edilmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Tarihçilerin sıklıkla ifade ettiği üzere geçmişi anımsayamayanlar onu yinelemek durumunda kalır.</p><p><b>Aşağıdakilerden hangisi bu cümle ile anlamca aynı doğrultudadır?</b></p>",
    diff: 2,
    expl: "Geçmişi hatırlamamak aynı hataları tekrar etmeye (yinelemeye) neden olur. Bu da ancak sürekli hatırlayarak (ders çıkararak) geçmişin mirasının canlı tutulabileceği ve tekerrürden kurtulunabileceği anlamına gelir.",
    answers: [
      { text: "Geçmişin mirası ancak sürekli hatırlatılarak canlı tutulur.", ok: true },
      { text: "Geçmişte yaşananlar zaman geçtikçe anlaşılabilir hâle gelir.", ok: false },
      { text: "Geçmiş ancak geleceğe uyarlanabildiği ölçüde değer kazanır.", ok: false },
      { text: "Geçmişten uzaklaşamayanlar eskiye saplanıp geleceği ıskalar.", ok: false },
      { text: "Geçmişte olanlar şimdiki zamana ve geleceğe kılavuzluk eder.", ok: false }
    ]
  },
  {
    text: "<p>Çocuklukta kelimeler düşünmeden ağzımızdan dökülüverir, onları nasıl giydireceğimizi ise büyümeye başlayınca öğreniriz.</p><p><b>Bu cümlede anlatılmak istenen aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "Cümledeki 'kelimeleri giydirmek' ifadesi, düşünceleri etkili, doğru ve yerinde ifade etme biçimlerini seçmek demektir. Bu beceri de çocukluktaki doğallığın aksine zamanla ve tecrübeyle kazanılır.",
    answers: [
      { text: "Dili etkili kullanmak çaba isteyen bir uğraştır.", ok: false },
      { text: "Etkili ifade biçimleri zaman ve tecrübeyle kazanılır.", ok: true },
      { text: "Kelime dağarcığı gençlik döneminde zenginleşir.", ok: false },
      { text: "Olgun bireyler, ifade şekilleri doğru olan kişilerdir.", ok: false },
      { text: "Hızlı konuşma becerisi çocuklara özgüdür.", ok: false }
    ]
  },
  {
    text: "<p>• Balinalar, beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini bulur.<br>• Dünya'nın manyetik alanındaki değişimler, balinaların karaya vurmalarına sebep olabilir.</p><p><b>Bu iki cümlede ifade edilenlerin doğru bir biçimde birleştirilmiş hâli aşağıdakilerden hangisidir?</b></p>",
    diff: 2,
    expl: "İki cümleyi sebep-sonuç ilişkisiyle birleştiren en kapsamlı ifade E şıkkıdır: Balinaların yön bulma mekanizması (manyetik kristaller) ile Dünya'nın manyetik alanı arasındaki etkileşimin bozulması karaya vurma nedenidir.",
    answers: [
      { text: "Balinalar, beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini buldukları için Dünya'nın manyetik alanındaki değişimler onların karaya vurmalarına yol açabilir.", ok: false },
      { text: "Beyinlerindeki manyetik özelliğe sahip kristallerle yönlerini bulan balinaların karaya vurma nedenleri Dünya'nın manyetik alanındaki değişimler kullanılarak açıklanabilir.", ok: false },
      { text: "Balinalar yönlerini kaybederek karaya vursalar da beyinlerindeki kristaller sayesinde Dünya'nın manyetik alanındaki değişimleri takip edebilir.", ok: false },
      { text: "Balinalar, beyinlerindeki manyetik kristallere rağmen Dünya'nın manyetik alanından gerçekleşen değişikliklerden etkilenerek karaya vurabilir.", ok: false },
      { text: "Beyinlerindeki manyetik kristaller yardımıyla yönlerini bulan balinaların Dünya'nın manyetik alanıyla girdiği etkileşim karaya vurmalarına sebep olabilir.", ok: true }
    ]
  },
  {
    text: "<p>İnsan, doğası gereği kendi eksikliklerini, zayıflıklarını görmez; görse de bunları tarafsız bir şekilde değerlendiremez. Ancak aynı kusurları başka birinde fark edince o kişiyi hemen yargılar...</p><p><b>Bu parçada anlatılmak istenen düşünceyle aşağıdaki atasözlerinden hangisi anlamca örtüşmektedir?</b></p>",
    diff: 3,
    expl: "Metinde insanın kendi hatasını görmeyip başkasını eleştirmesi eleştirilmektedir. 'Sırça köşkte oturan, komşusuna taş atmamalı' atasözü, kendi açığı/kusuru olanın başkasının kusuruyla uğraşmaması gerektiğini öğütleyerek bu düşünceyle örtüşür.",
    answers: [
      { text: "El için kuyu kazan, kuyuya evvela kendi düşer.", ok: false },
      { text: "Elin ağzı torba değil ki büzesin.", ok: false },
      { text: "Komşunun tavuğu, komşuya kaz görünür.", ok: false },
      { text: "Damdan düşen, damdan düşenin hâlini bilir.", ok: false },
      { text: "Sırça köşkte oturan, komşusuna taş atmamalı.", ok: true }
    ]
  }
];
