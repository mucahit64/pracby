import { McQ } from "../../../../types";

// ============================================================================
// YAZIM KURALLARI ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_YAZIM_KURALLARI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "Akarsu, göl, dağ gibi coğrafi adlarda tür bildiren sözcük de özel ada dahildir ve büyük harfle başlar. C seçeneğinde 'Neretva nehri' yerine 'Neretva Nehri' yazılmalıydı.",
    answers: [
      { text: "Bu yıl en çok ziyaret edilen yerlerden biri Ankara Kalesi olmuştur.", ok: false },
      { text: "Ağrı'nın Doğubeyazıt ilçesinde bulunan İshakpaşa Sarayı 1785 yılında yapılmıştır.", ok: false },
      { text: "Neretva nehri üzerindeki köprü, Osmanlı mimarisinin nadide bir örneğidir.", ok: true },
      { text: "Bilge Kağan Anıtı, içerdiği bilgilerle Türk tarihinin eşsiz bir tanığıdır.", ok: false },
      { text: "Batı mimarisine uygun olarak yapılan Beyazıt Kulesi, yüzyıllardan beri kullanılagelmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Fiziğin XX. yüzyıl boyunca gerçekleştirdiği <u>I. olağanüstü</u> gelişmelere benzer başarıların <u>II. kaydedildiği</u> bir diğer <u>III. bilim dalı</u> astronomidir. Uzak geçmişten modern çağa kadar <u>IV. gökbilimciler</u>; her dönem evreni tanımak, onun nasıl oluştuğunu ve <u>V. katettiği</u> evreleri belirlemek için büyük çaba göstermiştir.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı 'gökbilimciler' sözcüğü 'gök bilimciler' şeklinde ayrı yazılmalıdır. Diğer numaralanmış sözlerin yazımı doğrudur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözün yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "'Bilinçaltı' sözcüğü somut bir yer bildirmeyen 'alt' sözcüğüyle kurulduğu için bitişik yazılır. D seçeneğinde 'bilinç altındaki' yerine 'bilinçaltındaki' yazılmalıydı.",
    answers: [
      { text: "İnsanların <u>sosyoekonomik</u> koşulları, yaşanan coğrafyayla uyumlu üretimlerinin çeşitlilik kazanmasında önem taşır.", ok: false },
      { text: "Tasarımcının <u>gülkurusu</u> rengindeki elbisesinin motifleri, moda tarihi için bir ilk niteliği taşıyacak detaylar içeriyor.", ok: false },
      { text: "Üç senaristin bir araya gelerek senaryosunu yazdığı ve çekimleri bir yıl süren film, <u>sinemaseverlerin</u> beğenisine sunuldu.", ok: false },
      { text: "Ana dili kullanıcıları ilk defa duyduğu bir sözcüğün anlamını, <u>bilinç altındaki</u> dile ait bilgileri kullanarak tahmin edebilir.", ok: true },
      { text: "Arşivlerden alınan tarihî belgeler ve yapılan araştırmalarla bu ailenin <u>soy kütüğünü</u> ortaya çıkarabilecek yeni bilgilere sahibiz.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "Semt ve bölge adlarında tür bildiren sözcük de özel ada dahildir. A seçeneğinde 'Asya yakası' yerine 'Asya Yakası' yazılmalıydı.",
    answers: [
      { text: "Asya yakası, deprem simülasyonunun gerçekleştirildiği ilk yer olmuştur.", ok: true },
      { text: "Romanlarında Uzak Doğu mistisizminden büyük ölçüde yararlanmıştır.", ok: false },
      { text: "Davetiyedeki program akışına göre serginin açılışını Vali yapacakmış.", ok: false },
      { text: "Yoğun sis nedeniyle Erciyes Dağı neredeyse görünmez hâle gelmişti.", ok: false },
      { text: "Hemen herkes Ay tutulması olayına hayatında bir kez tanık olmuştur.", ok: false }
    ]
  },
  {
    text: "<p>-an/-en, -r/-ar/-er/-ır/-ir, -maz/-mez ve -mış/-miş sıfat-fiil ekleriyle kurulan kalıplaşmış birleşik kelimeler bitişik yazılır.</p><p><b>Buna göre aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "'Güler yüz' sözcüğü kalıplaşmış bir birleşik kelime olmadığından ayrı yazılır. C seçeneğinde 'güleryüzle' yerine 'güler yüzle' yazılmalıydı.",
    answers: [
      { text: "Kıyıya yanaşmaya çalışan yük gemisi, limandaki dalgakırana çarpmaktan son anda kurtuldu.", ok: false },
      { text: "Kültürel mirasın en önemli eserleri, değerbilmez kişilerin elinde yok olmaya mahkûm ediliyor.", ok: false },
      { text: "Yıllarca kalbinde biriktirdiği tüm kırgınlıklarına rağmen gelen konuklarını samimiyetle ve güleryüzle karşıladı.", ok: true },
      { text: "Son zamanlarda sinemaseverlerin beğenisini kazanan yönetmen, vizyondaki filmiyle bir kez daha alkışları topladı.", ok: false },
      { text: "Dijital göstergeli sıcaklıkölçer kullanım kolaylığı sunmakla birlikte pil tüketiminin artmasına da yol açıyor.", ok: false }
    ]
  },
  {
    text: "<p>Şiirlerimin her zaman bir bütün olması için çalıştım. Taktikleri attım, <u>I. dizeleri de</u> bütüne çevirdim. Aynı sayıda hecelerin durgularından doğan <u>II. ezgilerden de</u> uzak durdum. Kulağa <u>III. hiç de</u> hoş gelmeyen sağır gürültüleri ortadan kaldırmaya çalıştım. Ancak <u>IV. şiirlerim de</u> dikkatli gözlerin yakalayacağı <u>V. ihmallerin de</u> bile bile olduğunu söylemek isterim.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "IV numaralı sözdeki 'de' bağlaç değil, bulunma hâli ekidir ('şiirlerimde dikkatli gözlerin yakalayacağı ihmaller'); bu nedenle bitişik yazılmalıdır: 'şiirlerimde'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Bir <u>I. başyapıt</u> niteliği taşıyan Homerros'un İlyada'sından bu yana binlerce eser yazıldığını, on binlerce kahramanın hayatımıza girdiğini biliyoruz. <u>II. Gerçek üstü</u> kahramanları bir yana bırakırsak lider, <u>III. yurtsever</u>, savaşçı, maceracı, bencil gibi kimliklerin hepsi bizden. Öyle ki günlük hayatımızda <u>IV. arka planda</u> kalan, sıradan bir karakter <u>V. birdenbire</u>, bir eserde karşımıza çıkıp etkileyici bir kimlik olarak bir süre hayatımıza eşlik edebiliyor.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "'Üst' sözcüğü somut bir yer bildirmediğinde kurulan birleşik kelime bitişik yazılır. II numaralı 'Gerçek üstü' sözcüğü 'Gerçeküstü' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“etmek, edilmek, eylemek, olmak, olunmak” yardımcı fiilleriyle oluşturulan birleşik sözcüklerde; ses düşmesi, ses değişmesi veya ses türemesi varsa bu sözcükler birleşik yazılır: emretmek, hissetmek vb. Ancak ilk sözcükte herhangi bir ses düşmesi veya türemesi yoksa bu sözcükler ayrı yazılır: arz etmek, kabul etmek vb.</p><p><b>Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "'Terk' sözcüğünde 'edilmek' yardımcı fiiliyle birleşirken herhangi bir ses olayı gerçekleşmez; bu nedenle ayrı yazılmalıdır. E seçeneğinde 'terkedilmesinden' yerine 'terk edilmesinden' yazılmalıydı.",
    answers: [
      { text: "Süleymaniye Camisi'ni yapan Mimar Sinan, bütün ömrünü eşsiz eserler ortaya koymaya vakfetmiştir.", ok: false },
      { text: "Osmanlı zamanında kentin önemli iskelelerinden olan bu yer, her daim teknelerle resmedilmiştir.", ok: false },
      { text: "Pera semtindeki ahşap evler, XIX. yüzyılda yavaş yavaş kaybolmuş, yerini apartmanlara bırakmıştır.", ok: false },
      { text: "Sarayda yüksek rütbelere gelmiş hanımlar, sultanlar tarafından yaptırılan türbelere defnedilmiştir.", ok: false },
      { text: "Topkapı Sarayı'nın terkedilmesinden sonra ambar olarak kullanılan yerin çevresine barakalar yapılmıştır.", ok: true }
    ]
  },
  {
    text: "<p>Garip akımı temsilcilerinden Orhan Veli; 1945 yılında Vazgeçemediğim 1946'da ise Destan Gibi adlı kitabını çıkarır. Bu iki <u>I. eserde</u> şairin Garip'teki şiir anlayışını barındırmakla birlikte yeni <u>II. temalar da</u> içerir. Bu <u>III. şiirlerde</u> ironi ve şaşırtıcı son dikkat çeker. Kederin işlendiği “İstanbul Türküsü”, türkülerin söyleyiş özelliğinden <u>IV. yararlanıldığının da</u> göstergesidir. Hüzün ve üzüntü; “Tren Sesi”, “Giderayak” ve “Değil” başlıklı <u>V. manzumeler de</u> iç içedir.</p><p><b>Bu parçada numaralanmış sözcüklerden hangilerinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "I numaralı sözde 'de' bağlaçtır ('Bu iki eser de ... içerir'), ayrı yazılmalıdır: 'eser de'. V numaralı sözde ise 'de' bulunma hâli ekidir ('manzumelerde iç içedir'), bitişik yazılmalıdır: 'manzumelerde'.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve V", ok: true },
      { text: "II ve III", ok: false },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "Belirli bir kişiyi karşılayan unvanlar büyük harfle başlar. E seçeneğinde belirli bir kişi kastedildiği için 'bakan' yerine 'Bakan' yazılmalıydı.",
    answers: [
      { text: "Uzun süreden beri ziyarete kapalı olan Yozgat Çamlığı Millî Parkı bu yıl tekrar açıldı.", ok: false },
      { text: "Türkiye Cumhuriyeti, yüzüncü yılını ülkenin dört bir yanında etkinliklerle kutladı.", ok: false },
      { text: "Türk tarihi açısından 29 Mayıs 1453 Salı günü kutlu bir fetih gerçekleşti.", ok: false },
      { text: "Kutlamalar için şehrin en güzel yeri olan Zafer Meydanı tercih edildi.", ok: false },
      { text: "Yurt dışından gelen resmî heyeti bakan geçtiğimiz hafta Ankara'da kabul etti.", ok: true }
    ]
  },
  {
    text: "<p>Birleşme sırasında kelimelerden her ikisi veya ikincisi anlam değişmesine uğradığında bu tür birleşik kelimeler bitişik yazılır.</p><p><b>Buna göre aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "'Cırcır böceği' birleşiminde 'böcek' sözcüğü gerçek anlamını koruduğu için ayrı yazılır. D seçeneğinde 'Cırcırböceği' yerine 'Cırcır böceği' yazılmalıydı.",
    answers: [
      { text: "Sıcak yaz günlerinde dondurmanın yanında çokça tüketilen tatlıların başında bülbülyuvası ve kadayıf gelir.", ok: false },
      { text: "Ekim ve kasım ayları elma, nar, ayva ve beşbıyık gibi meyvelerin pazar tezgâhlarını süslediği zamanlardır.", ok: false },
      { text: "Çok sevdiği kavuniçi elbisesini dolaptan özenle çıkardı, ütüleyerek ertesi gün giymek üzere hazırladı.", ok: false },
      { text: "Cırcırböceği ile karıncanın macerası, kardeşimin annemden ve benden en çok dinlediği masaldır.", ok: true },
      { text: "Narçiçeği rengindeki şapkasıyla kalabalık içinde çok uzaklardan bile ayırt edilebiliyordu.", ok: false }
    ]
  },
  {
    text: "<p>Birleşme sırasında kelimelerden her ikisi veya ikincisi anlam değişmesine uğradığında bu tür birleşik kelimeler bitişik yazılır.</p><p><b>Buna göre aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "'Denizatı' birleşiminde 'at' sözcüğü gerçek anlamını yitirmiştir (bir balık türü); bu nedenle bitişik yazılmalıdır. C seçeneğinde 'deniz atı' yerine 'denizatı' yazılmalıydı.",
    answers: [
      { text: "Türkiye'nin denizlerinde çokça avlanan dil balığı sofralarda yeterince tüketilmemektedir.", ok: false },
      { text: "Adamcağız tek başına yaşadığından evde bir ses olsun diye muhabbet kuşu beslemekteydi.", ok: false },
      { text: "Araştırmacılara göre son zamanlarda deniz atı türü azalma eğilimi göstermektedir.", ok: true },
      { text: "Anadolu'da yol ve tarla kenarlarında yetişen deve dikenine sütlü kengel de denilmektedir.", ok: false },
      { text: "Badem ağaçlarının arasından kumsala inen keçi yolunda yürümek çok hoşuna gitmekteydi.", ok: false }
    ]
  },
  {
    text: "<p>Romanın karakteri Mümtaz, Sahaflar Çarşısı'ndan geçerken tanıdık bir sahafın uzattığı birkaç kitabı <u>I. ayaküstü</u> karıştırır. Aslında <u>II. bilinçaltı</u>, kısa süre önce ayrıldığı Nuran'ın hayaliyle doludur. Mümtaz <u>III. yanı başında</u> yaşayan bu kadını, âdeta ortada olmayan bir varlık gibi sevmektedir. Nuran, gönlüne düşünce dışarıya çıkış amacını bir anda unutur ve sahaftan ayrılıp sanki <u>IV. uyur gezer</u> biri gibi çarşıyı <u>V. baştan başa</u> adımlar.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımında yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı 'uyur gezer' sözcüğü geniş zaman sıfat-fiil ekiyle kurulmuş kalıplaşmış bir birleşik kelimedir ve bitişik yazılmalıdır: 'uyurgezer'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“<u>I. Türkiye Cumhuriyeti'nin</u> temeli kültürdür. Kültür; okumak, anlamak, görebilmek, görebildiğinden anlam çıkarmak, ders almak, düşünmek, zekâyı eğitmektir.” diyen <u>II. Ulu Önder Mustafa Kemal Atatürk'ün</u> 1924 yılında <u>III. Topkapı Sarayı'nın</u> müze olarak düzenlenmesi fikriyle yurdun dört bir yanında müzeler açılmış ve eski eserlerin toplanarak depolanması için yurt çapında çalışmaların devam etmesi sağlanmıştır. Bu sayede bugün Türk halkı, <u>IV. Batı'daki</u> ve <u>V. Dünya'daki</u> benzerleriyle kıyaslanabilecek müzelere sahip olmuştur.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "'Dünya' sözcüğü yalnızca gök bilimi bağlamında gezegen adı olarak kullanıldığında büyük harfle başlar. Parçada bu anlamda kullanılmadığı için V numaralı söz 'dünyadaki' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Türkçede her iki kelimesi de -di (-dı / -du / -dü, -tı / -ti / -tu / -tü) belirli geçmiş zaman veya -r / -ar / -er geniş zaman eklerini almış ve kalıplaşmış olan birleşik isimler bitişik yazılır: dedikodu, uyurgezer vb.</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala aykırı bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "E seçeneğindeki 'çekti gitti' kalıplaşmış bir birleşik isim değil, iki ayrı çekimli fiildir; bu nedenle ayrı yazılmalıdır. 'çektigitti' yazımı yanlıştır.",
    answers: [
      { text: "Kışın daha sıcak ovalarda konaklayıp yazın dağların eteklerinde yaylaya çıkanlar konargöçer diye adlandırılır.", ok: false },
      { text: "Semt pazarcısının eski püskü kaptıkaçtı gibi görünen arabası, mahalle çocuklarının oyuncağı hâline gelmişti.", ok: false },
      { text: "Artan şehirleşmeyle birlikte ülkemizde yaşayan gençlerin hemen hemen hepsi, artık okuryazardır.", ok: false },
      { text: "Bugün Anadolu'nun tarlalarındaki ekinleri hasat etmek için insan gücünün yerine biçerdöver kullanılmaktadır.", ok: false },
      { text: "Onun yaptığı hataları tek tek söyleyince yüzüme dahi bakamadan toplantı salonundan çektigitti.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımında yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "'Ana dili' sözcüğü ayrı yazılır. C seçeneğinde 'anadili' yerine 'ana dili' yazılmalıydı.",
    answers: [
      { text: "Bütün gün balık tuttuktan sonra <u>akşamüzeri</u> sakin bir koyda kamp kurduk.", ok: false },
      { text: "Dedemin verdiği antika <u>kargaburnu</u> ile diğer tamir aletlerini alet çantasına koyduk.", ok: false },
      { text: "Dilin birey ve toplum hayatında taşıdığı önem, <u>anadili</u> öğretimini de önemli kılmaktadır.", ok: true },
      { text: "Bizim çocuklar bu yaz, İstanbul'un en güzel yerinde denize nazır bir <u>yazıhane</u> açacak.", ok: false },
      { text: "Zorlu bir tırmanıştı, Ağrı Dağı'nın zirvesine yaklaştığımızda <u>basınçölçer</u> alarma geçti.", ok: false }
    ]
  },
  {
    text: "<p>Yeni açtığı sahaf dükkânı merkezî bir yerde olduğundan herkesin <u>I. çat kapı</u> uğrayabileceği bir konumdaydı. Mahalle arasında <u>II. fırdöndüleriyle</u> oynayan çocuklar bu dükkânı dışardan merakla inceliyorlardı. Öyle ki ilk kez mahallelerinde açılan bu sahaf dükkânı, gerek <u>III. cam göbeği</u> rengi duvarlarıyla gerekse diğer <u>IV. albenileriyle</u> onları <u>V. cezbediyordu</u>.</p><p><b>Bu parçada numaralanmış sözlerin hangisinin yazımında bir yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "Renk adı olarak kullanılan 'camgöbeği' sözcüğü bitişik yazılır. III numaralı 'cam göbeği' yazımı yanlıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "'Sarf etmek' birleşik fiilinde herhangi bir ses olayı gerçekleşmediği için ayrı yazılır. B seçeneğinde 'sarfettiğin' yerine 'sarf ettiğin' yazılmalıydı.",
    answers: [
      { text: "Bir gün bu hayatı bırakıp uzaklara gittiğini farz et, tüm yaşadıkların anlamsız gelecek.", ok: false },
      { text: "Mücadeleyi kazanmak için sarfettiğin üstün çabayı, her seferinde yeniden hatırlamalısın.", ok: true },
      { text: "İstediğin bölüme kaydolduğunu ve yeni bir hayata başladığını düşünsene.", ok: false },
      { text: "Otomobillerin park ettiği yerden geçince sağa dön, orada beni göreceksin.", ok: false },
      { text: "İşinden ayrıldıktan sonra hayatının mahvolduğunu düşünmeye başladı.", ok: false }
    ]
  },
  {
    text: "<p>O, hem müzik kuramcısı <u>I. hem de</u> iyi bir yazardır. Onun müziği, <u>II. müzikseverler</u> tarafından belirsizliğin müziği olarak tanımlanabilir. Ancak kesin olan bir şey <u>III. varki</u> yenilikçi <u>IV. bakış açısıyla</u> müziği <u>V. yepyeni</u> bir boyuta taşıdı.</p><p><b>Bu parçada altı çizili sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "III numaralı 'varki' sözündeki 'ki' bağlaçtır ve ayrı yazılmalıdır: 'var ki'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Kendimi eski mahallemin Arnavut kaldırımlarında çocukluğumu ararken buluverdim geçenlerde. (II) Bahçelerinde saklambaç oynadığım evlerin bakımsız, hüzünlü hâllerine bakarken saçılıverdi birden etrafa anılarım. (III) Limon sarısı gibi görünen eskiliğin yüzü, sadece bakımsızlıktan ibaret değildi elbette. (IV) Benim zihnimdeki eskilik: Duvarlarda çiviler, lekeler, paslanmış salça kutusundan saksılar... (V) Yoğurtçuya karşı pencereden seslenen Fatma teyzemin nidalarının yokluğu da eskitmişti bu evleri.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "İki noktadan sonra gelen ifade cümle niteliğinde değilse küçük harfle başlar. IV numaralı cümlede iki noktadan sonra gelen sıralama cümle olmadığı için 'Duvarlarda' yerine 'duvarlarda' yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Oldum olası</u> kendime <u>II. çekidüzen</u> vermeyi hiç bilmem. Sakal bir karış, saçlar öylesine, günlerce dolaştığım olur. Bir Mehmet Bey vardı, komşumuz. Tanışır, konuşurdum ama adımı hiç merak etmemiş mi yoksa <u>III. unutumuvermiş</u>, nedir? Bir gün benim için “Hani, <u>IV. saçı sakalı</u> akar gibi bir adam geliyor buraya, o işte!” demiş. Üstüme başıma özen göstermeyi beceremem. Çoraplarım hep düşer, yakamla <u>V. boyun bağımın</u> biri bir yanda diğeri bir yanda.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Tezlik fiili 'unut-' fiil kökünden '-uver-' ile kurulur ve 'unutuvermiş' şeklinde yazılır. III numaralı 'unutumuvermiş' yazımı yanlıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Dinî bayram adlarının her sözcüğü büyük harfle başlar. D seçeneğinde 'Ramazan bayramı' yerine 'Ramazan Bayramı' yazılmalıydı.",
    answers: [
      { text: "Mahmut Hoca, Hababam Sınıfı romanının unutulmaz karakterlerindendir.", ok: false },
      { text: "Fatih Sultan Mehmet Köprüsü, Boğaz üzerinde bir gerdanlık gibi durmaktadır.", ok: false },
      { text: "Doğu ve Batı medeniyetleri arasında dünya görüşü bakımından bir fark vardır.", ok: false },
      { text: "Ramazan bayramı mistik bir tema olarak şiirimizde hep vardı.", ok: true },
      { text: "Kaplumbağa Terbiyecisi tablosu Türk resminde önemli bir yere sahiptir.", ok: false }
    ]
  },
  {
    text: "<p>Tramvay, <u>I. Galata Köprüsü</u> üzerinden tarihî yarımadaya geçerek Sultanahmet'e vardığında sırasıyla iki farklı şehrin çehresine şahit olan yolcu, burada bir müddet beklemek zorunda kalacak. <u>II. Roma hipodromu</u> olan <u>III. At Meydanı</u> çevresindeki yapıların ışıltısı karşısında büyülenecek; üç devrin mabedi bin beş yüz yıllık <u>IV. Ayasofya Camisi</u>, etrafı süsleyen <u>V. Alman çeşmesi</u> gibi anıtlar geçidinin ortasında başı dönecektir.</p><p><b>Bu parçada numaralanmış sözlerin hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Yapı adlarında tür bildiren sözcük de özel ada dahildir ve büyük harfle başlar. V numaralı söz 'Alman Çeşmesi' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımı ile ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "Cevap anahtarına göre doğru seçenek E'dir. A, B, C ve D seçeneklerindeki özel adlar (Resmî Gazete, Leyla ile Mecnun, Çanakkale Boğazı, Kültigin Anıtı, Orhun Vadisi) kurallara uygun yazılmıştır; E seçeneğindeki sempozyum adında büyük harf kullanımıyla ilgili yanlışlık vardır.",
    answers: [
      { text: "Bu konuyla ilgili kanun, Resmî Gazete'de yayımlanarak yürürlüğe girdi.", ok: false },
      { text: "Leyla ile Mecnun, Türk edebiyatında en çok işlenen anlatılardandır.", ok: false },
      { text: "Bahar mevsiminde bu tepeden Çanakkale Boğazı'nın seyrine doyum olmaz.", ok: false },
      { text: "Kültigin Anıtı, uçsuz bucaksız Orhun Vadisi'nin orta yerinde ziyaretçilerini bekler.", ok: false },
      { text: "XII. Uluslararası Dünya Dili Türkçe Sempozyumu bu yıl Ankara'da yapılacak.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde ifadenin okunuşuna uygun bir ek <u>getirilmemesinden</u> kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Kısaltmalara gelen ekler kısaltmanın okunuşuna göre getirilir. 'KYK' (ka-ye-ka) son hecesi ince okunduğu için 'KYK'de' yazılmalıydı; C seçeneğindeki 'KYK'da' yazımı yanlıştır.",
    answers: [
      { text: "Doktora araştırmasını TÜBİTAK'ın bursuyla yürütmüştü.", ok: false },
      { text: "Saat 16.30'da başlayan maç TRT'den naklen yayınlanıyordu.", ok: false },
      { text: "Öğrenciliği zamanında Zonguldak'ın Ereğli ilçesindeki KYK'da kalmıştı.", ok: true },
      { text: "Kulüplerin 5. olağan toplantısı TFF'nin tesislerinde gerçekleştirildi.", ok: false },
      { text: "Bir yaz günü saat 19.00'da TBMM'nin önünde buluşup yola çıkmışlardı.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımı ile ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "Tanrı sözcüğü çok tanrılı dinlerdeki tanrıları karşıladığında küçük harfle başlar. D seçeneğinde 'Tanrılar' yerine 'tanrılar' yazılmalıydı.",
    answers: [
      { text: "40 yıl önce yayımlanan ve güncelliğini hâlâ koruyan Türk Düşününde Batı Sorunu adlı eser yeni baskısıyla okurun karşısında.", ok: false },
      { text: "Tarih yazılarında akademik yetkinliğinin yanı sıra güçlü üslubuyla da öne çıkan Profesör İlber Ortaylı, bu kitapta kadınların Osmanlıdaki varlık sahasını tartışıyor.", ok: false },
      { text: "Sokağın yüzlerini; söz gelimi esnafı, arzuhâlciyi ustalıkla birer kahramana dönüştüren yazara, Vali tarafından bir plaket verildi.", ok: false },
      { text: "Antik Yunan'da Tanrılar ve dönemin sıradan insanları arasında yaşananlar, sonraki çağlarda bilimden sanata pek çok alana ilham kaynağı olmuştur.", ok: true },
      { text: "Bu kitap, Deli Ozan takma adıyla da bilinen Fazıl Hüsnü Dağlarca'nın daha önce yayımlanmamış şiirlerini bir araya getiriyor.", ok: false }
    ]
  },
  {
    text: "<p>(I) Kişiye odaklı söyleşilerde amaç; soru sorulan kişinin yaşamını, yaptıklarını veya fikirlerini gündeme getirmektir. (II) Bu tür söyleşilerin öznesi, toplumda merak uyandıran ünlü şahsiyetler olabilir. (III) Örneğin sporcular, sanatçılar ve politikacılar bu söyleşilerde sıklıkla yer alır. (IV) Kimi zamanda tanınmamış ancak yaşamı ve yaptıklarıyla dikkatleri çekmiş kişiler seçilir. (V) Sorular aracılığıyla onların iç dünyalarında neler yaşadıkları okura aktarılmak istenir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde “de” bağlacının yazımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı cümlede 'da' bağlaç olarak kullanıldığı ('Kimi zaman da ... seçilir') hâlde bitişik yazılmıştır. Doğrusu 'Kimi zaman da' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>“Birleşik sözcüğü oluşturan sözcüklerden biri veya her ikisi birleşme sırasında anlam değişmesine uğramışsa sözcük bitişik yazılır.”</p><p><b>Aşağıdaki cümlelerin hangisinde bu kurala uyulmadığı için bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "'Deniz yılanı' birleşiminde 'yılan' sözcüğü gerçek anlamını koruduğu için ayrı yazılır. D seçeneğinde 'denizyılanı' yerine 'deniz yılanı' yazılmalıydı.",
    answers: [
      { text: "Adını şarkılarda duyduğumuz yalıçapkını, adalarda yaşayan bir kuş türüdür.", ok: false },
      { text: "Yemekten sonra tatlı olarak birer porsiyon bülbülyuvası siparişi verdik.", ok: false },
      { text: "Doğum günüm için annem bana camgöbeği renginde bir kazak örmüş.", ok: false },
      { text: "Pek çok kişinin sandığının aksine denizyılanı nehirlerde de yaşayabilir.", ok: true },
      { text: "Yazar bu öyküsünde semt pazarlarındaki ayaküstü sohbetlere önemli bir yer ayırmış.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "E seçeneğinde 'değer bilir' kalıplaşmış bir birleşik sıfat olarak değil, 'ne ... ne ...' yapısı içinde 'değer bilmek' fiilinin çekimli biçimi olarak kullanılmıştır; bu nedenle ayrı yazılmalıdır: 'değer bilir'.",
    answers: [
      { text: "Bu araştırmada bizi şaşırtan bulgu, çevreciliğin <u>barışsever</u> akımlarla çatışmasıdır.", ok: false },
      { text: "O kadar merhametlidir ki yakın arkadaşları arasında <u>karıncaincitmez</u> olarak anılır.", ok: false },
      { text: "Başkentin ortasındaki <u>gökdelenler</u>, etrafındaki binaları yutacakmış gibi duruyordu.", ok: false },
      { text: "İnsanlar, <u>çokbilmiş</u> olarak tanınan kişilerle arkadaşlık kurmaktan uzak dururlar.", ok: false },
      { text: "Orada yaşamamış, o insanlarla hiç bağ kurmamış gibi ne <u>değerbilir</u> ne yol yordam.", ok: true }
    ]
  },
  {
    text: "<p>(I) Zevki, mizacı ve hayata karşı tavırı ile Yahya Kemal, tam bir Osmanlıydı. (II) Sohbetlerine katılanlar, onun büyük Osmanlı seferlerini hâl içindeymiş gibi heyecanla anlattığını ve yaşattığını görmüşlerdir. (III) Eğer onun sözleri vaktiyle kaydedilebilmiş olsaydı tarihi konu edinen edebiyatımız Ahmet Refik'ten sonra tam takır denecek kadar boş kalmayacak belki de şaheserlerle dolu olacaktı. (IV) Bence şiirlerindeki şahsiyetinden çok, onun asıl kudretli tarafı, Osmanlı Tarihine duyduğu büyük heyecanı ifade eden konuşmalarıydı. (V) Yahya Kemal'in bu emsalsiz tarih sevgisini hiç bir iz bırakmadan beraberinde götürmüş olması, kültürümüzün en büyük kayıplarındandır.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 3,
    expl: "I. cümlede 'Osmanlıydı' sözcüğü 'Osmanlı'ydı' şeklinde yazılmalıdır. III. cümlede 'tarihi' sözcüğü ilgi anlamı taşıdığı için 'tarihî' olmalıdır. IV. cümlede 'Osmanlı Tarihine' yerine 'Osmanlı tarihine' yazılmalıdır. V. cümlede 'hiç bir' sözcüğü 'hiçbir' şeklinde bitişik yazılmalıdır. II. cümlede yazım yanlışı yoktur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Arkeologlara</u> göre Buzul Dönemi insanları, hayvanlardan yalnızca gıda ve barınak gibi <u>II. stratejik</u> ihtiyaçları için yararlanmadı. Kazılarda hayvanların diş, kemik ve boynuzlarından yapılmış birçok <u>III. aksesuvar</u> bulunması, bunun en önemli göstergesiydi. Bulunan <u>IV. objelerin</u> bazıları, yaklaşık 30.000 yıl önce kemik, taş ve kil gibi çok çeşitli malzemelerden oyulmuş hayvan ve insan <u>V. figürleriydi</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "III numaralı 'aksesuvar' sözcüğünün doğru yazımı 'aksesuar' şeklindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Hancının ihsan ettiği şövalye unvanı, destanlar dünyasında hiç bir değer taşımaz. (II) Kahramanımız artık bu kubbe de hoş bir seda bırakmak amacındadır. (III) Birşeyler yaptığını vahmetmektedir. (IV) Gerçekte ise yalnız kendisinin yaşadığı bir iç dramın ana karakteridir. (V) Hiç kimse onun dünyasına izni olmadan girmek istemez.</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "I. cümlede 'hiç bir' yerine 'hiçbir', II. cümlede bulunma eki olduğu için 'kubbe de' yerine 'kubbede', III. cümlede 'Birşeyler' yerine 'Bir şeyler' ve 'vahmetmektedir' yerine 'vehmetmektedir' yazılmalıdır. Cevap anahtarına göre yazım yanlışı bulunmayan cümle V'tir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Geçen <u>I. temmuzda</u> <u>II. Uzak Doğu'dan</u> beni ziyarete gelen eski bir dostumla hasret giderdik. Dostumun bana hediye olarak getirdiği vazonun <u>III. Çin'de</u> yapıldığını öğrendim. <u>IV. Çin'lilerin</u> sanat anlayışını gösteren bu vazo, <u>V. 1800'lü</u> yıllardan izler taşımakta.</p><p><b>Bu parçada numaralandırılmış sözlerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "Özel adlara getirilen yapım ekleri kesme işaretiyle ayrılmaz. IV numaralı 'Çin'lilerin' sözcüğü 'Çinlilerin' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Oluz Höyük kazılarında</u> bu yıl bir <u>II. Roma Sikkesi</u> bulundu. Gümüşten üretilmiş 1,8 cm çapında ve 3,6 gram <u>III. ağırlığındaki</u> paranın önemi, Roma'da basılmış olması. Yapılan <u>IV. ön incelemeler</u>, gümüş sikkenin <u>V. MÖ 142'de</u> bastırıldığına işaret ediyor.</p><p><b>Bu parçadaki numaralandırılmış sözlerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "II numaralı sözde 'sikke' sözcüğü özel ada dahil olmayan bir tür adıdır ve küçük harfle yazılmalıdır: 'Roma sikkesi'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdakilerin hangisinde büyük harflerin kullanımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "Anıt adlarında tür bildiren sözcük de özel ada dahildir ve büyük harfle başlar. C seçeneğinde 'Bilge Kağan anıtındaki' yerine 'Bilge Kağan Anıtı'ndaki' yazılmalıydı.",
    answers: [
      { text: "Türkçenin sözcük türetme imkânları oldukça geniştir.", ok: false },
      { text: "Mehmet Bey, konuyla ilgili görüşmeler yapmak üzere cumartesi günü İstanbul'a gidecek.", ok: false },
      { text: "Bilge Kağan anıtındaki yazıları okumaya çalışıyor ancak pek başarılı olamıyordu.", ok: true },
      { text: "Sabahleyin yedide yola çıkabilirsek en geç öğleden sonra ikide Tokat'tayız.", ok: false },
      { text: "Cumhuriyet Bayramı, bütün Türkiye'de büyük bir coşkuyla kutlandı.", ok: false }
    ]
  },
  {
    text: "<p>Birisinin, imrenme dürtüsü ile gururunu koruma isteği arasında yaşadığı <u>I. gelgiti</u>, “Çikolata” kadar iyi anlatan <u>II. başka bir</u> hikâye bulmak zordur. Mahalle şekercisinin vitrininde <u>III. renkrenk</u> kâğıtlara sarılı binbir çeşit çikolata vardır. Vitrinin karşısında duran kişi hayatı boyunca çikolata yememiştir, alacak parası da yoktur. Duyguları <u>IV. karmakarışıktır</u>, çikolatayı tatma isteğiyle imrendiğini belli etmeme çabası arasında <u>V. gidip gelir</u>.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "İkilemeler ayrı yazılır. III numaralı 'renkrenk' sözcüğü 'renk renk' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Bir şey</u> okurken veya gündelik işlerimizle ilgili bir plan yaparken kelimeleri sesli olarak söylemesek de kafamızın içinde onları <u>II. bir an</u> duyar gibi oluruz. Konuşma, <u>III. bir sürü</u> karmaşık sürecin birlikte gerçekleşmesiyle ortaya çıkan bir işlevdir. Bazı araştırmacılar, <u>IV. bir hayli</u> uğraş sonucu geliştirdikleri yapay zekâ uygulaması ve kafaya takılan kulaklığa benzer <u>V. bir takım</u> cihazlar yardımıyla iç konuşmalarımızı yazıya dönüştürmeyi başardı.</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "'Bazı, birçok' anlamındaki 'birtakım' sözcüğü bitişik yazılır. V numaralı 'bir takım' yazımı yanlıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinde altı çizili sözcüğün yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Nispet (ilgi) -î'si alan sözcüklerde düzeltme işareti kullanılır. B seçeneğinde 'tarihi' sözcüğü 'tarihe ait' anlamında olduğu için 'tarihî' şeklinde yazılmalıydı.",
    answers: [
      { text: "Hedefe çabuk ulaşmak için <u>tali</u> yollarda oyalanmamak lazım.", ok: false },
      { text: "Şehrimizin <u>tarihi</u> yerlerini tanıtmak amacıyla bir belgesel hazırlandı.", ok: true },
      { text: "<u>Edebî</u> kişiliğiyle Yahya Kemal, Türk şiirinin abidelerindendir.", ok: false },
      { text: "İş yerinize <u>ticari</u> ünvanınızı gösteren vergi levhasını asmalısınız.", ok: false },
      { text: "<u>Siyasi</u> sorunların üstesinden gelmenin en iyi yolu birlik olmaktır.", ok: false }
    ]
  },
  {
    text: "<p>Sokaklarını dolaştıktan sonra çarşısından hediyelik eşya ve <u>I. ayçiçeği yağı</u> satın alabilir, kıyıda <u>II. yanyana</u> dizilmiş kahvelerde soluklanabilirsiniz. <u>III. Acıktınız mı?</u> <u>IV. Pek çok</u> yöresel yiyecek sizi bekliyor. Ayrıca deniz ürünleri <u>V. açısından da</u> oldukça zengin bir yerdesiniz.</p><p><b>Bu parçadaki numaralandırılmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "İkilemeler ayrı yazılır. II numaralı 'yanyana' sözcüğü 'yan yana' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Gökova Körfezi'ndeki</u> Okluk Koyu'nun girişinde bir <u>II. heykeltıraşımızın</u> yaptığı deniz kızı heykeli var. Kayalıklar üzerindeki heykel, 1995 yılının <u>III. 28 Ekim Günü</u> “bir <u>IV. şükran borcu</u> olarak” dikilmiş. Heykelin üzerinde şu sözler yazılı: “Bu deniz kızı, düşlerini süsleyen cennete erişebilmek için, nice engin denizler, ufuklar aştı. Kıtalar, adalar, koylar dolaştı. Ta ki <u>V. Gökova'ya</u> ulaşana kadar.”</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Belirli bir tarih bildiren ay adı büyük harfle başlar ancak 'gün' sözcüğü bu tarihe dahil değildir. III numaralı söz '28 Ekim günü' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Osmanlı ordusu, batı yönünde hareket etmekteydi. Görünürde <u>I. olağan üstü</u> bir durum yoktu <u>II. sanki</u>. Her şey yolunda <u>III. seyrediyor</u> gibiydi. Ancak Tuna kıyısına yaklaşınca bir hareketlilik <u>IV. başlayıverdi</u>. <u>V. Sultan da</u> bu duruma bir anlam veremedi.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "'Üst' sözcüğü somut bir yer bildirmediğinde kurulan birleşik kelime bitişik yazılır. I numaralı 'olağan üstü' sözcüğü 'olağanüstü' şeklinde yazılmalıydı.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Binaların imaj tasarımında kullanılan terimlerden biri olan <u>I. ritim</u>, görsel unsurların düzenli bir <u>II. biçimde</u> dizilişi anlamına gelir. Simetri ise bir cismin bir doğruya göre eşit <u>III. uzaklıkta ki</u> görüntüsüdür. Binaların tasarım unsurları <u>IV. arasındaki</u> büyüklük ve görsel ağırlık dengesini ifade eder. Doku, bu iki tasarım unsurundan farklı olarak fiziksel kanıtların <u>V. hissedilebilmesine de</u> olanak sağlar.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "III numaralı sözdeki '-ki' sıfat yapan ektir ve bitişik yazılmalıdır: 'uzaklıktaki'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];
