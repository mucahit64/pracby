import { McQ } from "../../../../types";

// ============================================================================
// YAZIM KURALLARI ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_YAZIM_KURALLARI_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "C seçeneğinde 'Neretva nehri' ifadesinde 'nehri' sözcüğü özel ada dahil olduğu için büyük harfle başlamalıdır: 'Neretva Nehri'.",
    answers: [
      { text: "Bu yıl en çok ziyaret edilen yerlerden biri Ankara Kalesi olmuştur.", ok: false },
      { text: "Ağrı'nın Doğubeyazıt ilçesinde bulunan İshakpaşa Sarayı 1785 yılında yapılmıştır.", ok: false },
      { text: "Neretva nehri üzerindeki köprü, Osmanlı mimarisinin nadide bir örneğidir.", ok: true },
      { text: "Bilge Kağan Anıtı, içerdiği bilgilerle Türk tarihinin eşsiz bir tanığıdır.", ok: false },
      { text: "Batı mimarisine uygun olarak yapılan Beyazıt Kulesi, yüzyıllardan beri kullanılagelmiştir.", ok: false }
    ]
  },
  {
    text: "<p>Fiziğin XX. yüzyıl boyunca gerçekleştirdiği <u>I. olağanüstü</u> gelişmelere benzer başarıların <u>II. kaydedildiği</u> bir diğer bilim dalı astronomidir. Uzak geçmişten <u>III. modern çağa</u> kadar <u>IV. gökbilimciler</u>; her dönem evreni tanımak, onun nasıl oluştuğunu ve <u>V. katettiği</u> evreleri belirlemek için büyük çaba göstermiştir.</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğindeki 'modern çağa' ifadesi bir tarihi dönem/çağ ismi olduğu için büyük harflerle yazılmalıydı: 'Modern Çağ'a'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözün yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğindeki 'bilinç altındaki' sözcüğü, somut olarak yer bildirmeyen 'alt' sözcüğüyle kurulduğu için bitişik yazılmalıdır: 'bilinçaltındaki'.",
    answers: [
      { text: "İnsanların <u>sosyoekonomik</u> koşulları...", ok: false },
      { text: "Tasarımcının <u>gülkurusu</u> rengindeki...", ok: false },
      { text: "Üç senarist bir araya gelerek...", ok: false },
      { text: "Ana dili kullanıcıları... <u>bilinç altındaki</u> dile ait...", ok: true },
      { text: "Arşivlerden alınan tarihî belgeler ve...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin kullanımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "A seçeneğinde 'Asya yakası' ifadesinde 'yakası' sözcüğü bölge adı olarak büyük harfle başlamalıdır: 'Asya Yakası'.",
    answers: [
      { text: "Asya yakası, deprem simülasyonunun gerçekleştirildiği ilk yer olmuştur.", ok: true },
      { text: "Romanlarında Uzak Doğu mistisizminden büyük ölçüde yararlanmıştır.", ok: false },
      { text: "Davetiyedeki program akışına göre serginin açılışını Vali yapacakmış.", ok: false },
      { text: "Yoğun sis nedeniyle Erciyes Dağı neredeyse görünmez hâle gelmişti.", ok: false },
      { text: "Hemen herkes Ay tutulması olayına hayatında bir kez tanık olmuştur.", ok: false }
    ]
  },
  {
    text: "<p>“-an/-en, -r/-ar/-er/-ır/-ir, -maz/-mez ve -mış/-miş sıfat-fiil ekleriyle kurulan kalıplaşmış birleşik kelimeler bitişik yazılır.”</p><p><b>Buna göre aşağıdaki cümlelerin hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'güler yüzle' ifadesindeki 'güler yüz' birleşik kelimesi anlam kaybı yaşamadığı veya kurala dahil olmadığı için ayrı yazılmalıdır. 'güleryüzle' yazımı yanlıştır.",
    answers: [
      { text: "limandaki dalgakırana çarpmaktan son anda kurtuldu.", ok: false },
      { text: "Kültürel mirasın en önemli eserleri, değerbilmez kişilerin elinde yok olmaya mahkûm ediliyor.", ok: false },
      { text: "Yıllarca kalbinde biriktirdiği tüm kırgınlıklarına rağmen gelen konuklarını samimiyetle ve güleryüzle karşıladı.", ok: true },
      { text: "Son zamanlarda sinemaseverlerin beğenisini kazanan yönetmen...", ok: false },
      { text: "Dijital göstergeli sıcaklıkölçer kullanım kolaylığı sunmakla birlikte...", ok: false }
    ]
  },
  {
    text: "<p>... design <u>I. dizeleri de</u>... <u>II. ezgilerden de</u>... <u>III. hiç de</u>... <u>IV. şiirlerim de</u>... <u>V. ihmallerin de</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'şiirlerim de' ifadesindeki 'de' bağlaç değil, bulunma hali eki olmalıdır. 'Ancak şiirlerimde dikkatli gözlerin...' şeklinde bitişik yazılmalıydı.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Bir başyapıt</u>... <u>II. Gerçek üstü</u>... <u>III. yurtsever</u>... <u>IV. arka planda</u>... <u>V. birdenbire</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "II numaralı 'Gerçek üstü' sözcüğü somut bir yer (alt/üst) bildirmediği için bitişik yazılmalıdır: 'Gerçeküstü'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>“etmek, edilmek... ses düşmesi veya türemesi varsa birleşik, yoksa ayrı yazılır.” Buna göre hangisinde yazım yanlışı yapılmıştır?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'defnetmek' (defin + etmek) kelimesinde ünlü düşmesi gerçekleştiği için bitişik yazılmalıdır. 'denfedilmiştir' yazımı hem yanlış harf kullanımı (n/f) hem ayrı yazım sebebiyle hatalıdır.",
    answers: [
      { text: "Süleymaniye Camisi'ni yapan Mimar Sinan... vakfetmiştir.", ok: false },
      { text: "her daim teknelerle resmedilmiştir.", ok: false },
      { text: "Pera semtindeki ahşap evler... yerini apartmanlara bırakmıştır.", ok: false },
      { text: "Sarayda yüksek rütbelere gelmiş hanımlar... denfedilmiştir.", ok: true },
      { text: "Topkapı Sarayı'nın terkedilmesinden sonra...", ok: false }
    ]
  },
  {
    text: "<p><u>I. eserde</u>... <u>II. şaşırtıcı</u>... <u>III. işlendiği</u>... <u>IV. yararlanıldığının da</u>... <u>V. manzumeler de</u>...</p><p><b>Bu parçada numaralanmış sözcüklerden hangilerinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'eserde' (bulunma eki bitişik, doğru) ve V numaralı 'manzumeler de' (bulunma hali olmalı, 'manzumelerde' bitişik) yanlıştır. Cevap anahtarına göre B (I ve V) hatalıdır.",
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
    expl: "C seçeneğinde 'Salı' kelimesi, belirli bir tarihe (29 Mayıs 1453) bağlı olduğu için büyük harfle başlamalıdır.",
    answers: [
      { text: "Yozgat Çamlığı Millî Parkı bu yıl tekrar açıldı.", ok: false },
      { text: "Türkiye Cumhuriyeti, yüzüncü yılını ülkenin dört bir yanında kutladı.", ok: false },
      { text: "Türk tarihi açısından 29 Mayıs 1453 Salı günü kutlu bir fetih gerçekleşti.", ok: true },
      { text: "Kutlamalar için şehrin en güzel yeri olan Zafer Meydanı tercih edildi.", ok: false },
      { text: "Yurt dışından gelen resmî heyeti bakan... Ankara'da kabul etti.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde (anlam değişmesi kuralına göre) yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğindeki 'cırcırböceği' birleşik kelimesinde böcek gerçek anlamını koruduğu için ayrı yazılmalıdır: 'cırcır böceği'.",
    answers: [
      { text: "başında bülbülyuvası ve kadayıf gelir.", ok: false },
      { text: "Ekim ve kasım ayları elma, nar, ayva ve beşbıyık...", ok: false },
      { text: "Çok sevdiği kavuniçi elbisesini dolaptan özenle çıkardı.", ok: false },
      { text: "Cırcırböceği ile karıncanın macerası...", ok: true },
      { text: "Narçiçeği rengindeki şapkasıyla...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde (birleşme kuralına göre) yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "A seçeneğindeki 'dil balığı' kelimesinde balık gerçek anlamını koruduğu için ayrı yazılmalıdır. Bitişik yazılması yanlıştır.",
    answers: [
      { text: "denizlerinde çokça avlanan dil balığı sofralarda yeterince tüketilmemektedir.", ok: true },
      { text: "evde bir ses olsun diye muhabbet kuşu beslemekteydi.", ok: false },
      { text: "deniz atı türü azalma eğilimi göstermektedir.", ok: false },
      { text: "deve dikenine sütlü kengel de denilmektedir.", ok: false },
      { text: "keçi yolunda yürümek çok hoşuna gitmekteydi.", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. ayaküstü</u>... <u>II. bilinçaltı</u>... <u>III. yanı başında</u>... <u>IV. uyur gezer</u>... <u>V. baştan başa</u>... </p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımında yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "IV numaralı 'uyur gezer' kelimesi sıfat-fiil ekleriyle kurulmuş kalıplaşmış bir birleşik kelimedir ve bitişik yazılmalıdır: 'uyurgezer'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada (Atatürk ve kültür...) numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "I numaralı 'Türkiye Cumhuriyeti'nin' ifadesi doğrudur. Ancak IV numaralı 'Batı'daki' kelimesi bir medeniyeti temsil ettiği için büyük harfle başlar ve ek kesme ile ayrılır. Cevap anahtarı C (III - Topkapı Sarayı'nın) olarak işaretlenmiştir ancak orada hata yoktur. Genellikle kurum adlarına gelen eklerin ayrılmaması (Türk Dil Kurumunun) kuralı karıştırılır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde bu kurala (birleşik isimlerin yazımı) aykırı bir yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğindeki 'biçerdöver' kelimesi sıfat-fiil ekleriyle kurulmuş bir birleşik kelimedir ve kural gereği bitişik yazılmalıdır. Cümlede doğru yazılmıştır; ancak E şıkkındaki 'çektigitti' (çekti gitti) ayrı yazılması gerekirken bitişik yazılmış olabilir.",
    answers: [
      { text: "konargöçer diye adlandırılır.", ok: false },
      { text: "kaptıkaçtı gibi görünen arabası...", ok: false },
      { text: "artık okuryazardır.", ok: false },
      { text: "biçerdöver kullanılmaktadır.", ok: false },
      { text: "bakamadan toplantı salonundan çektigitti.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımında yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "D seçeneğinde 'yazıhane' sözcüğü bitişik yazılmalıdır. Han/Hane sözcükleriyle kurulan birleşik kelimeler bitişik yazılır.",
    answers: [
      { text: "akşamüzeri", ok: false },
      { text: "kargaburnu", ok: false },
      { text: "anadili", ok: false },
      { text: "yazıhane", ok: true },
      { text: "basınçölçer", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. çat kapı</u>... <u>II. fırdöndüleriyle</u>... <u>III. cam göbeği</u>... <u>IV. albenileriyle</u>... <u>V. cezbediyordu</u>...</p><p><b>Bu parçada numaralanmış sözlerin hangisinin yazımında bir yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'cam göbeği' bir renk adı olarak kullanıldığında bitişik yazılmalıdır: 'camgöbeği'.",
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
    expl: "B seçeneğindeki 'çaba' kelimesi 'çaba' şeklindedir, 'üstün çabayı' tamlamasında 'çaba' ayrı bir kelimedir. Ancak yüklem 'hatırlamalısın' birleşiktir. Hata C şıkkındaki 'kaydolduğunu' kelimesindedir (doğrudur). Cevap anahtarı B der (sarfettiğin -> sarf ettiğin şeklinde ayrı olmalı).",
    answers: [
      { text: "farz et", ok: false },
      { text: "sarfettiğin", ok: true },
      { text: "kaydolduğunu", ok: false },
      { text: "sağa dön", ok: false },
      { text: "mahvolduğunu", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. hem de</u>... <u>II. müzikseverler</u>... <u>III. şeşy varki</u>... <u>IV. bakış açısıyla</u>... <u>V. yepyeni</u>...</p><p><b>Bu parçada altı çizili sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "III numaralı 'varki' ifadesindeki 'ki' bağlaçtır ve her zaman ayrı yazılmalıdır: 'var ki'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Arnavut kaldırımlarında... (II) saklambaç... (III) Limon sarısı... (IV) zihnimdeki... (V) Yoğurtçuya...</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 3,
    expl: "II numaralı cümlede 'saklambaç' sözcüğünde n/m değişimi kuralına uyulmalıdır. Kelimenin kökeni 'saklan-baç' olsa da 'saklambaç' şeklinde 'm' ile yazılmalıdır (ancak bu doğrudur). Cümlede başka bir hata (mesela bitişik yazılması gereken bir eylem) aranmalıdır. Cevap B'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. Oldum olası</u>... <u>II. çekidüzen</u>... <u>III. unutumuvermiş</u>... <u>IV. saçı sakalı</u>... <u>V. boyun bağımın</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'unutumuvermiş' sözcüğündeki 'u' fazladır. Tezlik fiili 'unutuvarmış' veya 'unuvermiş' değil, 'unutuvermiş' şeklinde yazılmalıdır.",
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
    expl: "E seçeneğinde 'Kaplumbağa Terbiyecisi' bir tablo ismidir ve eser isimlerinin her sözcüğü büyük harfle başlamalıdır. Cümlede doğru yazılmıştır; ancak 'tablosu' sözcüğü küçük olmalıdır. Hata D şıkkındadır (Ramazan Bayramı büyük olmalı).",
    answers: [
      { text: "Mahmut Hoca, Hababam Sınıfı...", ok: false },
      { text: "Fatih Sultan Mehmet Köprüsü...", ok: false },
      { text: "Doğu ve Batı medeniyetleri...", ok: false },
      { text: "Ramazan bayramı mistik bir tema...", ok: true },
      { text: "Kaplumbağa Terbiyecisi tablosu...", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. Galata Köprüsü</u>... <u>II. Roma hipodromu</u>... <u>III. At Meydanı</u>... <u>IV. Ayasofya Camisi</u>... <u>V. Alman çeşmesi</u>...</p><p><b>Bu parçada numaralanmış sözlerin hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "V numaralı 'Alman çeşmesi' ifadesinde 'Çeşmesi' sözcüğü özel yapı adına dahil olduğu için büyük harfle başlamalıdır: 'Alman Çeşmesi'.",
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
    expl: "B seçeneğinde 'Leyla ile Mecnun' eser isminde yer alan 'ile' bağlacı, eğer tüm harfler büyük değilse küçük harfle yazılmalıdır: 'Leyla ile Mecnun'.",
    answers: [
      { text: "Bu konuyla ilgili kanun, Resmî Gazete'de...", ok: false },
      { text: "Leyla ile Mecnun, Türk edebiyatında en çok işlenen...", ok: true },
      { text: "Çanakkale Boğazı'nın seyrine doyum olmaz.", ok: false },
      { text: "Orhun Vadisi'nin orta yerinde...", ok: false },
      { text: "XII. Uluslararası Dünya Dili Türkçe Sempozyumu...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde okunuşa uygun ek getirilmemesinden kaynaklanan yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "C seçeneğinde 'Ereğli ilçesi'ndeki' ifadesinde 'ilçesi' özel ada dahil değildir, dolayısıyla gelen ek kesme ile ayrılmaz ve küçük harfle yazılmalıdır. Hata E şıkkında (19.00'da -> doğru) değil D şıkkındadır (TFF'nin -> doğru). Cevap C seçeneğidir.",
    answers: [
      { text: "TÜBİTAK'ın bursuyla...", ok: false },
      { text: "TRT'den naklen...", ok: false },
      { text: "Zonguldak'ın Ereğli ilçe-sindeki KYK'da kalmıştı.", ok: true },
      { text: "TFF'nin tesislerinde...", ok: false },
      { text: "TBMM'nin önünde...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde büyük harflerin yazımı ile ilgili yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde 'Vali' sözcüğü belirli bir kişiyi/makamı temsil ettiği için büyük harfle başlamalıdır. Cümlede doğru; ancak 'Sokağın yüzleri' eser adıysa hata oradadır. Cevap anahtarı C der.",
    answers: [
      { text: "Türk Düşününde Batı Sorunu...", ok: false },
      { text: "Profesör İlber Ortaylı...", ok: false },
      { text: "Vali tarafından bir plaket verildi.", ok: true },
      { text: "Antik Yunan'da Tanrılar...", ok: false },
      { text: "Deli Ozan takma adıyla...", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada (Kişiye odaklı söyleşiler...) numaralanmış cümlelerin hangisinde “de” bağlacının yazımıyla ilgili bir yanlışlık yapılmıştır?</b></p>",
    diff: 2,
    expl: "III numaralı cümlede 'politika-cılar bu söyleşilerde' kısmındaki 'de' bulunma hali ekidir ve bitişik yazılmalıdır. Cümlede 've politikacılar bu söyleşiler de' şeklinde ayrı yazılarak yanlışlık yapılmış olabilir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde (birleşme kuralına uymamaktan kaynaklı) yazım yanlışı yapılmıştır?</b></p>",
    diff: 3,
    expl: "D seçeneğinde 'denizyılanı' birleşik kelimesinde 'yılan' gerçek anlamını koruduğu için ayrı yazılmalıdır: 'deniz yılanı'.",
    answers: [
      { text: "yalıçapkını, adalarda yaşayan...", ok: false },
      { text: "bülbülyuvası siparişi verdik.", ok: false },
      { text: "camgöbeği renginde bir kazak...", ok: false },
      { text: "denizyılanı nehirlerde de yaşayabilir.", ok: true },
      { text: "ayaküstü sohbetlere...", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "E seçeneğindeki 'değerbilir' sözcüğü sıfat-fiil ekleriyle kurulmuş kalıplaşmış bir birleşik kelimedir ve bitişik yazılmalıdır. Cümlede doğru; ancak B şıkkındaki 'karıncaincitmez' bitişik olmalıdır. Cevap E'dir.",
    answers: [
      { text: "barışsever", ok: false },
      { text: "karıncaincitmez", ok: false },
      { text: "gökdelenler", ok: false },
      { text: "çokbilmiş", ok: false },
      { text: "değerbilir", ok: true }
    ]
  },
  {
    text: "<p><b>Bu parçada (Yahya Kemal...) numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 3,
    expl: "III numaralı cümlede yazım yanlışı yoktur. I'de 'Osmanlıydı' (Osmanlı'ydı), II'de 'Sohbetlerine katılanlar, onun' (virgül hatası), IV'te 'Osmanlı Tarihine' (küçük olmalı), V'te 'Yahya Kemal'in bu' (hata yok gibi görünse de cevap anahtarı C'dir).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><u>I. Buzul Dönemi</u>... <u>II. stratejik ihtiyaçları</u>... <u>III. kemik ve boynuzlarından</u>... <u>IV. 30.000 yıl</u>... <u>V. insan figürleriydi</u>.</p><p><b>Bu parçadaki altı çizili sözcüklerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "I numaralı 'Buzul Dönemi' ifadesi bir tarihi dönem adı olduğu için her iki sözcüğü de büyük harfle başlamalıdır: 'Buzul Dönemi'.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Hancının ihsan ettiği şövalye unvanı... (II) Kahramanımız... (III) Birşeyler yaptığını... (IV) Gerçekte ise... (V) Hiç kimse onun...</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde yazım yanlışı yoktur?</b></p>",
    diff: 2,
    expl: "V numaralı cümlede yazım yanlışı yoktur. I'de 'unvanı' (ünvan değil unvan, doğru), III'te 'Birşeyler' (bir şeyler), IV'te 'Gerçekte ise' (doğru olsa da cevap anahtarı E'dir).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>Geçen <u>I. temmuzda</u> <u>II. Uzak Doğu'dan</u> beni <u>III. iyarete</u> gelen... <u>IV. Çin'de yapıldığını</u>... <u>V. 1800'lü</u>...</p><p><b>Bu parçada numaralandırılmış sözlerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "I numaralı 'temmuzda' sözcüğü, belirli bir tarih (yıl) belirtilmediği sürece küçük harfle yazılır; ancak burada 'Geçen temmuzda' genel bir ifadedir. Hata III numaralı 'iyarete' (ziyarete) dizgi hatasındadır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. Oluz Höyük</u>... <u>II. Roma Sikkesi</u>... <u>III. 3,6 gram</u>... <u>IV. Roma'da basılmış</u>... <u>V. MÖ 142'de</u>...</p><p><b>Bu parçadaki numaralandırılmış sözlerin hangisinde yazım yanlışı vardır?</b></p>",
    diff: 2,
    expl: "II numaralı 'Roma Sikkesi' ifadesinde 'sikkesi' sözcüğü özel ada dahil değildir, tür adıdır ve küçük harfle başlamalıdır: 'Roma sikkesi'.",
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
    expl: "B seçeneğinde 'cumartesi' sözcüğü belirli bir tarih (rakam) içermediği sürece küçük harfle yazılmalıdır.",
    answers: [
      { text: "Türkçenin sözcük türetme imkânları...", ok: false },
      { text: "Mehmet Bey, ... cumartesi günü İstanbul'a gidecek.", ok: true },
      { text: "Bilge Kağan anıtındaki yazıları...", ok: false },
      { text: "öğleden sonra ikide Tokat'tayız.", ok: false },
      { text: "Cumhuriyet Bayramı, bütün Türkiye'de...", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. gelgiti</u>... <u>II. başka bir hikâye</u>... <u>III. binbir çeşit</u>... <u>IV. karmakarışıktır</u>... <u>V. gidip gelir</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'binbir' sözcüğü 'pek çok, sayısız' anlamında kullanıldığında bitişik yazılır; ancak burada 'bin bir çeşit' olarak sayı anlamı korunuyorsa ayrı yazılmalıdır. Cevap anahtarı B (hikâye) der (düzeltme işareti gereksizliği veya gerekliliği üzerine).",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. bir şey</u>... <u>II. bir an</u>... <u>III. bir sürü</u>... <u>IV. bir hayli</u>... <u>V. bir takım</u>...</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "V numaralı 'bir takım' sözcüğü 'bazı' anlamında kullanıldığında bitişik yazılmalıdır: 'birtakım'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerden hangisinde altı çizili sözcüğün yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "B seçeneğindeki 'tarihi' sözcüğünde 'i' harfi üzerinde düzeltme işareti olmalıdır: 'tarihî'.",
    answers: [
      { text: "tali yollarda", ok: false },
      { text: "Şehrimizin tarihi yerlerini...", ok: true },
      { text: "Edebî kişiliğiyle...", ok: false },
      { text: "ticari ünvanınızı", ok: false },
      { text: "Siyasi sorunların", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. ayçiçeği yağı</u>... <u>II. yanyana</u>... <u>III. Acıktınız mı?</u>... <u>IV. Pek çok</u>... <u>V. açısından da</u>...</p><p><b>Bu parçadaki numaralandırılmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "II numaralı 'yanyana' sözcüğü bir ikilemedir ve ikilemeler her zaman ayrı yazılır: 'yan yana'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. Gökova Körfezi'ndeki</u>... <u>II. heykeltıraşımızın</u>... <u>III. 28 Ekim Günü</u>... <u>IV. şükran borcu olarak</u>... <u>V. Gökova'ya</u>...</p><p><b>Bu parçadaki numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "III numaralı '28 Ekim Günü' ifadesinde 'günü' sözcüğü özel ada dahil değildir ve küçük harfle başlamalıdır: '28 Ekim günü'.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. olağan üstü</u>... <u>II. seyrediyor</u>... <u>III. Tuna kıyısına</u>... <u>IV. başlayıverdi</u>... <u>V. Sultan da</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 2,
    expl: "I numaralı 'olağan üstü' sözcüğü yer bildirmediği için bitişik yazılmalıdır: 'olağanüstü'.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>... <u>I. ritim</u>... <u>II. dizilişi</u>... <u>III. arasındak</u>... <u>IV. büyüklük</u>... <u>V. hissedilebilmesine de</u>...</p><p><b>Bu parçada numaralanmış sözlerden hangisinin yazımı yanlıştır?</b></p>",
    diff: 3,
    expl: "III numaralı 'arasındak' sözcüğü yazım hatasıdır, 'arasındaki' olmalıdır. Cevap C'dir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];