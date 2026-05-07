import { McQ } from "../../../../types";

// ============================================================================
// EDAT - BAĞLAÇ - ÜNLEM - TEST 1
// ============================================================================
export const TUR_EDAT_BAGLAC_UNLEM_TEST_1: McQ[] = [
  {
    text: "<p>Sözcükler \"anlamlı\" ve \"görevli\" olmak üzere ikiye ayrılır. Bir nesneye ad olan ya da bir hareketi karşılayan sözcükler \"anlamlı sözcükler\", tek başına anlamlı olmayan ama türlü dil bilgisel işlevleri olan sözcükler de \"görevli sözcükler\"dir.</p><p><b>Buna göre, aşağıdaki atasözlerinin hangisinde görevli sözcük <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "Edat (ilgeç), bağlaç ve ünlemler tek başına anlamlı olmadıkları için görevli sözcüklerdir. A'da \"da\" bağlacı ve \"ne...ise\" bağlacı, B'de \"gibi\" edatı, C'de \"için\" edatı, D'de \"kadar\" edatı bulunmaktadır. E seçeneğinde ise tüm sözcükler anlamlıdır; edat, bağlaç veya ünlem (görevli sözcük) yoktur.",
    answers: [
      { text: "İnsan yedisinde ne ise yetmişinde de odur.", ok: false },
      { text: "Ana gibi yâr olmaz, Bağdat gibi diyar olmaz.", ok: false },
      { text: "El için kuyu kazan, evvela kendisi düşer.", ok: false },
      { text: "Arığa su gelene kadar kurbağanın gözü patlar.", ok: false },
      { text: "Bir deli kuyuya bir taş atar, kırk akıllı çıkaramazmış.", ok: true }
    ]
  },
  {
    text: "<p>Ufukların <u>I. üstünde</u>, yeni doğan bir güneşin aydınlattığı bir dağ başı <u>II. gibi</u> <u>III. herkesten</u> evvel <u>IV. ışığı</u> alan esrarengiz başınla <u>V. sen</u>, yüksek bir fikirsin.</p><p><b>Bu cümlede numaralanmış altı çizili sözcükler tür bakımından ikişerli gruplandığında hangisi diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "Cümledeki I numaralı \"üstünde\" ile IV numaralı \"ışığı\" sözcükleri, isim çekim eklerini almış isim türünde sözcüklerdir. III numaralı \"herkesten\" belgisiz zamir, V numaralı \"sen\" sözcüğü ise kişi zamiridir. Fakat II numaralı \"gibi\" sözcüğü tek başına anlamı olmayan, kendinden önceki söz grubuna bağlandığı için edattır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Sınava kadar disiplinli olman gerektiğini sana şimdiden söylemek daha <u>doğru</u>.<br>II. <u>Doğru</u> söylüyorsun Müge ama sen de biliyorsun ki kazın ayağı öyle değil!<br>III. <u>Doğru</u> oraya gitmiş olsaydınız herhâlde daha uygun olurdu.<br>IV. Kışın kaygan olur yamaçlar, tepelerden göle <u>doğru</u> tahta kızaklarla hızlı inişler yapılır.<br>V. Söyleyin <u>doğrusunu</u>, siz insanoğlunun ahlaklı olabileceğine inanmıyorsunuz.</p><p><b>Bu cümlelerdeki \"doğru\" sözcüğü hangisinde diğerlerinden farklı türdedir?</b></p>",
    diff: 3,
    expl: "IV numaralı cümlede \"doğru\" sözcüğü \"karşı, yönünce\" anlamında olup kendinden önceki isme (göle doğru) bağlanarak edat (ilgeç) görevinde kullanılmıştır. I ve V. cümlelerde isim, II ve III. cümlelerde ise fiili nitelediği için zarf görevindedir. Ancak seçeneklerde doğrudan hangisinin farklı türde olduğu sorulduğu için ve edat olarak sadece IV'te yer aldığı için cevap IV'tür.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Yoksulluk kavramı, yaşanılan çağın gereksinimlerine göre değişse de insanlık tarihi kadar eskidir. (II) Yoksulluğun tanımlanması, toplumdaki yoksul kitlelerin ve yoksullukla ilgili politikaların belirlenmesi, her ülke ve her dönem için, tüm toplumların çözmeye çalıştığı ortak sorun niteliğindedir. (III) Yoksulluk kavramı, en genel hâliyle bireylerin gıda, barınma, giyim gibi yaşadıkları koşullarla ilgili yoksunluk hissinin oluşmasıdır. (IV) Yoksulluk, gereksinimlerin yapısına, zamana ve mekâna bağlı değişkenlik gösteren bir kavramdır. (V) Gelişmiş bir ülke için kabul gören yoksulluk ölçütü, az gelişmiş bir ülke için yoksulluk sayılmayabilecektir.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde ilgeç <u>yoktur</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı cümlede ilgeç (edat) kullanılmamıştır. Cümledeki tek başına anlamlı olmayan tek sözcük \"ve\" bağlacıdır. Diğer cümlelerdeki \"göre\", \"kadar\" (I), \"için\" (II, V), \"gibi\" (III) kelimeleri ilgeçtir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>I. Başarmak için çalışıyor.<br>II. Ailem için canımı veririm.<br>III. Üşüdüğü için sıkıca giyindi.<br>IV. Kitap için iyi şeyler söyledi.</p><p><b>Bu cümlelerdeki \"için\" edatının cümleye kattığı anlamlar aşağıdaki seçeneklerle eşleştirilirse hangi boşta kalır?</b></p>",
    diff: 2,
    expl: "Verilen cümlelerdeki 'için' edatının kattığı anlamlar şöyledir: I. Başarmak için (amaç). II. Ailem için (uğruna). III. Üşüdüğü için (sebep). IV. Kitap için (hakkında). Hiçbir cümlede 'için' edatı 'karşılığında' (Örn: Bu eşyalar için kaç lira verdin?) anlamında kullanılmamıştır.",
    answers: [
      { text: "karşılığında", ok: true },
      { text: "sebep", ok: false },
      { text: "amaç", ok: false },
      { text: "hakkında", ok: false },
      { text: "uğruna", ok: false }
    ]
  },
  {
    text: "<p>Sağlıklı bir bağlanmanın, güvenin <u>I. ve</u> yeterli bakımın olduğu iyimser bir ailede yetişen bireyler, strese karşı daha dayanıklı olur. Sosyokültürel çevresinden aldığı sosyal destek <u>II. de</u> bireyin strese karşı dayanıklı olmasına katkıda bulunur. Bazen dayanıklı olmak tek başına yeterli olmaz <u>III. çünkü</u> bireyler zorlayıcı durumlar <u>IV. ile</u> her zaman kendi başlarına mücadele edemezler. Bundandır <u>V. ki</u> bu bireyler destek arayışı içine girerler.</p><p><b>Bu parçada altı çizili numaralanmış sözcüklerden hangisi bağlaç görevinde <u>değildir</u>?</b></p>",
    diff: 2,
    expl: "IV numaralı \"ile\" cümlede edat (vasıta/birliktelik ilgeci) olarak kullanılmıştır. Cümle içinde aynı görevde bulunan iki ögeyi birbirine bağlama (ve anlamı katma) görevi olmadığı için bağlaç değildir. I (ve), II (de), III (çünkü) ve V (ki) bağlaç görevindedir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>Boğuk bir bakışın oluyor senin<br>Bir girdap derinliğinde kayboluyor <u>I. gibiyim</u><br>Yok <u>II. gibi</u> yaşamak bu,<br>Kalkıp kurtulmak <u>III. gibi</u> kalabalıktan<br>Durma bana türkü söyle Anadolu olsun<br>Susuz dudak <u>IV. gibi</u> çatlamış olsun<br>Karanfil <u>V. gibi</u> olsun kara çiçek gibi yüzün</p><p><b>Bu dizelerdeki numaralanmış altı çizili \"gibi\" sözcüğüyle ilgili aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "C seçeneğinde \"III. sözcük, bir isim-fiile bağlanmış ve sıfat görevinde kullanılmıştır\" denmektedir. Oysa \"Kalkıp kurtulmak gibi kalabalıktan\" dizesi \"Kalabalıktan kalkıp kurtulmak gibi(dir)\" şeklinde yüklem görevindedir. Yüklem olduğu için sıfat görevinde kullanılması imkânsızdır.",
    answers: [
      { text: "I. sözcük, cümle biçimindeki bir yargıya bağlanmış, cümlede yüklem olarak kullanılmıştır.", ok: false },
      { text: "II. sözcük, bağlandığı isimle cümlede zarf görevinde kullanılmıştır.", ok: false },
      { text: "III. sözcük, bir isim-fiile bağlanmış ve sıfat görevinde kullanılmıştır.", ok: true },
      { text: "IV. sözcük, bir sıfat tamlamasına bağlanmış ve zarf olarak kullanılmıştır.", ok: false },
      { text: "V. sözcük, bir söz grubuna bağlanmış ve sıfat görevinde kullanılmıştır.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki verilen cümlelerin hangisinde bir edat, isim olarak kullanılmıştır?</b></p>",
    diff: 3,
    expl: "Edatlar da diğer görevli sözcükler gibi tek başlarına anlam taşımaz ve normalde isim çekim eklerini almazlar. Alırlarsa cümlede isim olarak kullanılırlar. E'deki cümlede \"gibi\" edatı \"-si\" iyelik eki almış ve isim tamlaması (Benim gibisi) kurmuştur; bu nedenle cümlede isim olarak kullanılmıştır.",
    answers: [
      { text: "Bir gün sabaha karşı, incecik bir mekiğe benzeyen kayığıyla Nil'in üzerinde gezintiye çıkmıştı.", ok: false },
      { text: "Senelerin yığdığı pislik, kir ve tozla uğraşan Büşra'nın kalbi; su gibi hafifti.", ok: false },
      { text: "Yüzünü bir kere görebilmek için bulunma ihtimalinin olduğu her yeri yürüyerek gezdim.", ok: false },
      { text: "Ne çok film izlerdim üniversitedeyken şimdi eskisi kadar herhangi bir görüntüye dikkat kesilemiyorum.", ok: false },
      { text: "Benim gibisi olmayacak aranızda, hiçbirinize benzemediğim kadar hiçbiriniz benzemeyeceksiniz bana.", ok: true }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde edat grubu zarf görevinde kullanılmıştır?</b></p>",
    diff: 2,
    expl: "C seçeneğindeki \"Göğsümün içinde ateş var gibi çarpardı kalbim.\" cümlesindeki \"ateş var gibi\" ifadesi edat grubudur ve \"çarpardı\" fiilini nitelediği (Nasıl çarpardı?) için cümlede zarf (durum zarfı) görevinde kullanılmıştır.",
    answers: [
      { text: "Bin atlı o gün dev gibi bir orduyu yendik.", ok: false },
      { text: "Dostlar ırmak gibidir; kiminin suyu az, kiminin çok.", ok: false },
      { text: "Göğsümün içinde ateş var gibi çarpardı kalbim.", ok: true },
      { text: "Gözlerin bilinmez bir diyar gibi, yüzün çiçeklerin en güzelidir.", ok: false },
      { text: "Cennet gibi bir semte taşındık ailece bu yaz.", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıdaki cümlelerin hangisinde \"ki\" sözcüğünün cümledeki işlevinin örneklendirilmesinde yanlışlık yapılmıştır?</b></p>",
    diff: 3,
    expl: "C seçeneğinde \"Anlam bakımından birbirleriyle ilgili cümleleri birbirine bağlayan bir söz: Elimi çantama attım ki cüzdan yok!\" denilmiştir. Ancak buradaki \"ki\" yargıları bağlamaktadır ama daha çok birinci hareketin yapılışı sırasında fark edildiği ve duruma şaşıldığı anlamını (A şıkkındakine benzer şekilde) vermektedir. Anlam bakımından ilgili cümleleri bağlamaya örnek olarak \"Sosyal yönü gelişmemiş ki iyi bir yazar olamamış.\" verilebilirdi.",
    answers: [
      { text: "İkinci cümledeki yargının birincideki hareketin yapılışı sırasında görülerek şaşıldığını bildiren söz: Eve girdim, baktım ki kediler odasında yok.", ok: false },
      { text: "Bir soru cümlesinin sonuna getirildiğinde şüphe veya endişe anlatan bir söz: Artık kaliteli öğretmenlerin kıymeti bilinir mi ki?", ok: false },
      { text: "Anlam bakımından birbirleriyle ilgili cümleleri birbirine bağlayan bir söz: Elimi çantama attım ki cüzdan yok!", ok: true },
      { text: "Yakınma, kınama vb. duyguları anlatmak için bir cümlenin sonuna getirilen bir söz: Yalanla bir yere varılamayacağı hâlâ anlaşılmadı mı ki!", ok: false },
      { text: "Özneyi, tümleci güçlendirerek cümlenin temel bölümüne bağlayan bir söz: Siz ki üniversite mezunusunuz, bu sınavı mı başaramayacaksınız?", ok: false }
    ]
  },
  {
    text: "<p><b>Aşağıda verilen cümlelerin hangisinde ünlem türünde bir sözcüğe yer verilmiştir?</b></p>",
    diff: 1,
    expl: "D seçeneğinde cümlenin sonunda yer alan \"yahu\", konuşulan konu üzerine dikkati çekmek için söylenen, duygu, heyecan veya seslenme bildiren ve söze katılan bir ünlemdir.",
    answers: [
      { text: "Batıl inançlar çocukça, ilkel ve aptalca şeyler ama tahtaya iki kere vurmanın ne maliyeti var ki?", ok: false },
      { text: "Kocaman koltuklarında, karşı karşıya, ikisi de daha bir küçülmüş, birer küçük çocuğa dönüşmüş gibiydi.", ok: false },
      { text: "Her dönemde yaratıcı ve yönlendirici gücüne tanık olduğumuz edebiyat, gücünü yenilemesi için yitirdiği belleğe geri dönmelidir.", ok: false },
      { text: "İnsana yönelik bir sunudur edebiyat ve bu davete yönelmediği zaman insan, belleğini dahi yitirebilir yahu!", ok: true },
      { text: "İnsanı çevresiyle birlikte değiştirip bilinçlendirmede en etkili ögelerden biri de edebiyatın mucizevi gücüdür.", ok: false }
    ]
  },
  {
    text: "<p>(I) Milyonlarca yıl öncesinden günümüze kadar insanlar büyük bir evrim geçirmiştir. (II) Hatta bir görüşe göre insanın evrim süreci fiziksel yapısındaki değişiklik sonucu ayağa kalkması ile başlamıştır. (III) Ancak esas evrim insanın aklını kullanmaya başlaması ve aklının yardımı ile yaratıcı gücünü harekete geçirmesi ile olmuştur. (IV) Tarih öncesi çağlar olarak bilinen Yontma Taş Devri, Cilalı Taş Devri ve Maden Devri insanın aklını kullanmaya başladığı, yaşadığı ortama daha kolay uyum sağladığı için, yaratıcı gücünü geliştirme çabasında olduğu dönemlerdir. (V) İnsanlar bu dönemlerde de çeşitli biçimlerde birbirleriyle iletişim kurmanın gereksinimini duyarak bu alanda yöntemler geliştirmeye başlamışlardır.</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde de hem edat hem bağlaca yer <u>verilmemiştir</u>?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede yalnızca \"kadar\" edatı kullanılmıştır, cümlede bağlaca yer verilmemiştir. Diğer cümlelerde; II'de \"hatta\" (bağlaç) ve \"ile\" (edat), III'te \"ancak / ve\" (bağlaç) ile \"ile\" (edat), IV'te \"ve\" (bağlaç) ile \"için\" (edat), V'te \"de\" (bağlaç) ile \"ile\" (birbirleriyle - edat) birlikte kullanılmıştır.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  }
];
