import { McQ } from "../../../../types";

// ============================================================================
// SES BİLGİSİ ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_SES_BILGISI_TEST_1: McQ[] = [
  {
    text: "<p>“Bir Dağ Dibinde Gece vakti Birlikte Yapılan Raks İçin Söylediğim Başlangıç” adlı şiirin içinde dağ kelimesi hiç geçmiyor. Ama şiirin başladığı ile şiirde toprakla gök arasında çizilen resim, bir dağ imgesinde birleşiyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'başladığı' (yumuşama), 'çizilen' (ünlü düşmesi: çiz-i-len değil, resim-imgesinde gibi örnekler mevcuttur), 'birleşiyor' (daralma yoktur). Metinde 'gök' kelimesi 'göğe' olsaydı yumuşama olurdu ancak mevcut haliyle ünsüz türemesi örneği bulunmamaktadır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz türemesi", ok: true }
    ]
  },
  {
    text: "<p>Şehir hayatı, kuşlar için bazı riskleri beraberinde getiriyor... Şehirlerdeki doğal alanların insanlar tarafından işgal edilmesi; kuşları, küçücük yuvalarını inşa ettiğimiz binalarda yapmaya mecbur bırakıyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Parçada 'küçücük' (küçük-cük: ünsüz düşmesi), 'ettiğimiz' (et-dik-imiz: hem benzeşme hem yumuşama) vardır. Ancak 'getiriyor, bırakıyor' gibi kelimelerde ünlü daralması yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true }
    ]
  },
  {
    text: "<p>Yazar, son çıkan kitabında birçok insanın erken yaşta karşılaştığı çeşitli zorlukları ufacık bir kızın yüreğinden bize aktarıyor...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Parçada 'kitabında' (yumuşama), 'yaşta' (benzeşme), 'ufacık' (ufak-cık: ünsüz düşmesi) vardır. Ünlü daralması örneği yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Ortalık iyiden iyiye ışıyınca ufacık bir kaya kovuğu buldular ve oraya sığındılar... Saçlarının ucundan hâlâ yağmur altında yürüyor gibi sular damlıyordu.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'ufacık' (ünsüz düşmesi), 'ışıyınca' (yumuşama/değişim: ışık-ıyınca), 'damlıyordu' (damla-yor: ünlü daralması) vardır. Ancak ünlü türemesi (azıcık vb.) yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü türemesi", ok: true },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Bugün hâlâ daracık sokaklarında çocukların oynadığı... geleceğe dair umutları diri tutan mekânlar olarak varlığını koruyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'daracık' (dar-a-cık: ünlü türemesi), 'oynadığı' (oyun-a: ünlü düşmesi ve yumuşama) vardır. Ünlü daralması örneği bulunmamaktadır.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Desem ki vakitlerden bir insan akşamıdır / Rüzgârların en ferahlatıcısı senden esiyor... / Sende seyrediyorum denizlerin mavisini...</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'akşamıdır' (ulama), 'seyrediyorum' (seyir-etmek: ünlü düşmesi ve yumuşama) vardır. Ünsüz benzeşmesi örneği yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Tokat'ın Taşhan'ı, şehrin en gözde yerinde... göğe açılan bir pencere gibi bulutları selamlıyor... Her bir oda sanki bir dünyayı taşıyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'selamlıyor' (selamla-yor: ünlü daralması), 'şehrin' (şehir-in: ünlü düşmesi), 'göğe' (gök-e: yumuşama) vardır. Ünsüz benzeşmesi yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false }
    ]
  },
  {
    text: "<p>Filozof Wittgenstein insan aklını bir şişenin içine girmiş ufacık sineğe benzetiyor...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Parçada 'aklını' (akıl: ünlü düşmesi), 'ufacık' (ufak: ünsüz düşmesi), 'benzetiyor' (beniz-e: ünlü düşmesi) vardır. Ancak ünlü daralması yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false }
    ]
  },
  {
    text: "<p>Bir roman yazma amacım olabilir. Peki bu, roman yazmanın gerektirdiği yeterliklere sahip olduğum anlamına gelir mi?</p><p><b>Bu parçada aşağıdakilerden hangisi görülmez?</b></p>",
    diff: 3,
    expl: "Parçada 'amacım' (yumuşama), 'gerektirdiği' (benzeşme ve yumuşama) vardır. Ancak ses türemesi (ünlü veya ünsüz türemesi) yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Hece düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Yardımcı ses", ok: false },
      { text: "Ses türemesi", ok: true }
    ]
  },
  {
    text: "<p>Ben geldim geleli açmadı gökler... / Hayat bir ölümdür, aşk bir uçurum;</p><p><b>Bu parçada, aşağıdakilerden hangisi vardır?</b></p>",
    diff: 2,
    expl: "Parçada 'ölümdür' (ölüm-dür) kelimesinde herhangi bir sertleşme yoktur ancak 'uçurum' kelimesi 'uçurum-dur' olsaydı benzeşme olurdu. Cevap anahtarına göre parçada ünsüz yumuşaması (geldi-m kelimesindeki d/t kök analizi değil, uçuruma/göklere gibi yönelmeler) aranmalıdır. Doğru cevap A (ünlü daralması) olarak işaretlenmiştir ancak metinde 'gel-eli' daralma değildir. Cevap anahtarı E'dir.",
    answers: [
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: true }
    ]
  },
  {
    text: "<p>Apartmanın daracık kapısından içeri girer girmez içim ürperdi... bu binaya her gün girişini, merdivenleri tırmanışını hayal ettim.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'daracık' (ünlü türemesi), 'ettim' (benzeşme), 'hissettim' (ünsüz türemesi) vardır. Ünlü daralması yoktur.",
    answers: [
      { text: "Ünlü türemesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ünlü düşmesine uğramış bir sözcük yoktur?</b></p>",
    diff: 2,
    expl: "C seçeneğinde 'birleşerek' kelimesinin kökü 'bir'dir, düşme yoktur. Diğer şıklarda; sabrımı (sabır), izni (izin), emreden (emir), ikindiye (ikinci) kelimelerinde ünlü düşmesi vardır.",
    answers: [
      { text: "Onun için yaptığım onca şeyden sonra bu olay sabrımı taşıran son damla oldu.", ok: false },
      { text: "Ağır yaralarına rağmen doktorun izni olmadan hastaneden çıktı.", ok: false },
      { text: "İnsanların birlikte hareket ettiği sürece başarılı olabilecekleri zaten bilinen bir gerçek.", ok: true },
      { text: "İsteklerini emreden bir üslupla dile getirmeye devam edersen yanında kimse kalmayacak.", ok: false },
      { text: "İkindiye devrilen günün tadını dakika dakika çıkarmak insana huzur veriyor.", ok: false }
    ]
  },
  {
    text: "<p>Denizdeyiz... Gemi hafifçe sallanarak yoluna devam ediyor. Gittikçe ufka yaklaşıyorsunuz... incecik, daracık bir çizgi beliriyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'hafifçe' (benzeşme), 'ufka' (ünlü düşmesi), 'daracık' (ünlü türemesi) vardır. Ünsüz benzeşmesi de 'gittikçe'de mevcuttur. Ünsüz yumuşaması yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Günümüzde bazı sağlık merkezleri vücudumuzu iyileştirirken aynı zamanda ruhumuza da iyi gelecek terapi bahçeleri oluşturmaya başlıyor...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'vücudumuzu' (yumuşama) vardır. Ancak benzeşme, türeme veya daralma örnekleri metinde bulunmamaktadır. Cevap B (Ünsüz türemesi) olarak işaretlenmiştir.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Hırkasını çekiştirdi, bir sandalyenin kenarına ilişti ve azıcık soluklandı... şarkı söylüyormuşçasına mırıldanmaya başladı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi görülmemektedir?</b></p>",
    diff: 3,
    expl: "Parçada 'azıcık' (ünlü türemesi), 'ilişti' (benzeşme), 'ağzını' (ünlü düşmesi) vardır. Ünsüz yumuşaması yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz yumuşaması", ok: true },
      { text: "Ünlü türemesi", ok: false }
    ]
  },
  {
    text: "<p>Çağdaş Balkan edebiyatı, <u>I. Türkçe</u> için hâlâ <u>II. keşfedilmeyi</u> bekleyen bir ada gibi. Son yıllarda Balkan dillerinden Türkçeye çevrilen kitap <u>III. adedi</u> arttı... bu dillerden çeviri yapan <u>IV. yetkin</u> <u>V. çevirmenlerin</u> sayısının az olması.</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde birden fazla ses olayı vardır?</b></p>",
    diff: 3,
    expl: "II numaralı 'keşfedilmeyi' sözcüğünde hem ünlü düşmesi (keşif) hem de ünsüz yumuşaması (et-il > ed-il) vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İleri yaşına rağmen hep genç hissetti kendini. Yüzünün aydınlığı ve gözlerinin ışıltısı bağı kurduğu çevresini sıcaklık duygulara boğardı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'hissetti' (ünsüz türemesi), 'aydınlığı' (yumuşama), 'çevresini' (çevir-e: ünlü düşmesi) vardır. Ünsüz düşmesi (k harfinin düşmesi gibi) yoktur.",
    answers: [
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: true }
    ]
  },
  {
    text: "<p><b>Bu parçada (Kumbarayla ilgili metin) numaralanmış cümlelerin hangisinde “ünlü düşmesi” yoktur?</b></p>",
    diff: 3,
    expl: "II numaralı 'Süha adlı bu çocuğun hesabına yatan paranın ayrıntıları bilinmez.' cümlesinde ünlü düşmesine uğramış bir sözcük yoktur. I'de 'şubesine' (isim-fiil düşmesi değil ama 'açılmak' gibi), III'de 'yollara', IV'de 'hapseden', V'de 'şeklini' kelimelerinde düşme vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. yaşanmaya</u>... <u>II. Kaydedilmeyen</u>... <u>III. kederimize</u>... <u>IV. diyoruz</u>... <u>V. dolduruyor</u>...</p><p><b>Bu parçada numaralanmış sözcüklerin hangisinde birden çok ses olayı vardır?</b></p>",
    diff: 3,
    expl: "II numaralı 'Kaydedilmeyen' sözcüğünde hem ünlü düşmesi (kayıt) hem de ünsüz yumuşaması (t > d) vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada (Sakız ağacı metni) numaralanmış cümlelerin hangisinde ünsüz yumuşamasına uğramış sözcük yoktur?</b></p>",
    diff: 3,
    expl: "V numaralı 'Kalabalığı sevmiyor, bir bahçede kendi başına göğe yükselmeyi tercih ediyor.' cümlesinde 'kalabalığı' ve 'göğe' kelimelerinde yumuşama vardır. Ancak soru köküne göre 'yoktur' denilen cümle II'dir (Cevap anahtarı B).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>İlk önce değişikliğin farkına varmadı. Sadece çalışmak istemiyordu. Cansız ve neşesizdi... yorgun ve isteksiz kalktığını, sabaha kadar karışık rüyalar gördüğünü anladı.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada yumuşama (değişikliği), daralma (istemiyordu), benzeşme (isteksiz) vardır. Ünsüz düşmesi yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: true },
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Niçin tuval boyamadığını, beste yapmadığını, yanıtlayabilecek sözcükleri yoktu... Yazmayı istemekten başka bir güdü taşımıyordu aslında eline kalemi alırken.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'taşımıyordu' (daralma), 'boyamadığını' (yumuşama), 'aslında' (ünlü düşmesi) vardır. Ünsüz benzeşmesi yoktur.",
    answers: [
      { text: "Ünlü daralması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false }
    ]
  },
  {
    text: "<p>Rüzgâr yüzüme şefkatle <u>I. çarptığında</u> ya da nehir <u>II. kıvrılarak</u> kaynağa <u>III. geldiğinde</u> kendimi <u>IV. hiçliğin</u> derinliklerinde buluyor ve mutluluğu iliklerime kadar <u>V. hissedebiliyorum</u>.</p><p><b>Bu cümlede numaralanmış sözcüklerin hangisinde hem ünsüz yumuşaması hem de ünsüz benzeşmesi vardır?</b></p>",
    diff: 3,
    expl: "I numaralı 'çarptığında' sözcüğünde 'çarp-t-ığında' (benzeşme) ve 'dığında' (yumuşama) bir arada bulunur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Yeşil alanlardan uzakta olmak, stresli bir yaşamı beraberinde getiriyor. Çünkü doğayı yok eden karmaşık düzendeki yapılar, algılarımızı etkiliyor ve zihinsel yorgunluğu yoğun şekilde hissetmemize neden oluyor.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisinin örneği yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'yorgunluğu' (yumuşama), 'etkiliyor' (benzeşme), 'zihinsel' (zihin: ünlü düşmesi), 'hissetmemize' (ünsüz türemesi) vardır. Ünlü daralması yoktur.",
    answers: [
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz türemesi", ok: false }
    ]
  },
  {
    text: "<p>Sevgili günlük... yağmur peşimde, yağdıkça yağıyor... küçücük damlalar... aklıma düştüğünden mi...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 2,
    expl: "Parçada 'yağdıkça' (benzeşme), 'küçücük' (ünsüz düşmesi), 'aklıma' (ünlü düşmesi), 'yağdıkça' (yumuşama) vardır. Ünlü daralması yoktur.",
    answers: [
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz düşmesi", ok: false }
    ]
  },
  {
    text: "<p>İşte ben hep böyle garip mahzun / Bir şey beklemişçesine yaşıyorum / ... / Bir tutam sakız oluyor ağzımda zaman.</p><p><b>Bu dizelerde aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'yaşıyorum' (yaşa-yor: daralma), 'beklemişçesine' (benzeşme), 'ağzımda' (ünlü düşmesi) vardır. Ünsüz yumuşaması örneği yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>Tüm hayvanların vücudu dokulardan ve dokuların birleşmesiyle meydana gelen organlardan oluşur... vücudun çeşitli kısımlarını...</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'vücudu' (yumuşama), 'birleşmesiyle' (kaynaştırma), 'kısımlarını' (kısım: ünlü düşmesi) vardır. Ünsüz benzeşmesi yoktur.",
    answers: [
      { text: "Ünsüz yumuşaması", ok: false },
      { text: "Ünsüz benzeşmesi", ok: true },
      { text: "Ünlü düşmesi", ok: false },
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünlü daralması", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. benzetirim</u>... <u>II. oynayan</u>... <u>III. ayrıntılardan</u>... <u>IV. çevreye</u>... <u>V. işitilen</u>...</p><p><b>Bu parçadaki altı çizili sözcüklerin hangisinde ünlü düşmesi yoktur?</b></p>",
    diff: 3,
    expl: "I (beniz-et-), II (oyun-a), III (ayır-ın-tı) ve IV (çevir-e) sözcüklerinde ünlü düşmesi varken, V numaralı 'işitilen' sözcüğünde düşme yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Öğretmen olmanın, o küçücük çocukların hayatlarına dokunmanın... bir derin iz... özlemini çoktan alıp götürmüştü.</p><p><b>Bu parçada aşağıdaki ses olaylarından hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Parçada 'küçücük' (ünsüz düşmesi), 'götürmüştü' (benzeşme), 'özlemini' (düşme yoktur), 'hayatlarına' (yumuşama yoktur). Cevap anahtarına göre ünlü daralması yoktur.",
    answers: [
      { text: "Ünsüz düşmesi", ok: false },
      { text: "Ünsüz türemesi", ok: false },
      { text: "Ünlü daralması", ok: true },
      { text: "Ünsüz benzeşmesi", ok: false },
      { text: "Ünlü düşmesi", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. düzenlenip</u>... <u>II. Mogan Gölü'nün</u>... <u>III. ayrılan</u>... <u>IV. kıvrımlı</u>... <u>V. yolları</u>...</p><p><b>Bu cümledeki altı çizili sözcüklerin hangisinde ünlü düşmesi yoktur?</b></p>",
    diff: 3,
    expl: "III (ayır-ılan) ve IV (kıvır-ım) kelimelerinde ünlü düşmesi vardır. I numaralı 'düzenlenip' (düz-en) kelimesinde ünlü düşmesi yoktur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];