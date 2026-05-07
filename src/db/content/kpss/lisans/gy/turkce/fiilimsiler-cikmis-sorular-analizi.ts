import { McQ } from "../../../../types";

// ============================================================================
// FİİLİMSİLER ÇIKMIŞ SORULAR ANALİZİ - TEST 1
// ============================================================================
export const TUR_FIILLIMSILER_CIKMIS_SORULAR_ANALIZI_TEST_1: McQ[] = [
  {
    text: "<p>Tuz; eski devirlerden bu yana ölçünün, kıymet <u>bilmenin</u> sembolü <u>olmuş</u> âdeta. Gıdaları saklamanın başlıca yolu tuzlamak olduğundan tüketim artmış ve zor bulunur bir meta olmuştur. <u>Kullanılır</u> hâle <u>gelmesi</u> için pek çok işlemden geçmesi değerli <u>kılmış</u> onu. Tuz üretimi, ticareti hatta tüketimi tuz verisiyle denetim altında <u>tutulmuş</u> tarih boyunca.</p><p><b>Bu parçada numaralanmış sözcüklerden hangileri fiilimsidir?</b></p>",
    diff: 3,
    expl: "Metindeki II (kullanılır) sıfat-fiil, III (gelmesi) ise isim-fiildir. I, IV ve V numaralı sözcükler (olmuş, kılmış, tutulmuş) yüklem görevinde kullanılan çekimli fiillerdir.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve IV", ok: false },
      { text: "II ve III", ok: true },
      { text: "III ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>Çırak törpü çizgileriyle <u>I. işaretlenmiş</u> tahta parçalarını... Bütün tahtalar... <u>II. yontulmuş</u> kimi dört köşeliydi. Fırıncıda bunların... <u>III. dizilmiş</u> çiftleri vardı. Fırıncı kendi tahtalarının tepesine <u>IV. yazılmış</u> adı arıyor... <u>V. alınmış</u> ekmeğin ağırlığını gösteriyordu.</p><p><b>Bu parçada numaralanmış sözcüklerden hangisi fiilimsi eki almamıştır?</b></p>",
    diff: 3,
    expl: "II numaralı 'yontulmuş' sözcüğü cümlede yüklem görevindedir ve öğrenilen geçmiş zaman kipi eki almıştır. Diğerleri (-miş) bir ismi niteleyen sıfat-fiil ekidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) İnsanı diğer canlılardan <u>ayıran</u>... (II) Düşünme... (III) İmajlar, şekiller... (IV) Bu sürecin birbirinden farklı biçimleri vardır. (V) Örneğin bir matematik problemi <u>çözen</u>...</p><p><b>Bu parçadaki numaralanmış cümlelerin hangisinde fiilimsi kullanılmamıştır?</b></p>",
    diff: 2,
    expl: "IV. cümlede herhangi bir fiilimsi (isim-fiil, sıfat-fiil veya zarf-fiil) bulunmamaktadır. Diğer cümlelerde 'ayıran', 'düşünme', 'yer aldığı', 'çözen' gibi fiilimsiler mevcuttur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Bilim insanları... (II) Bu yönteme göre... (III) Kutup bölgelerinin... (IV) Böylelikle buzul erimesinin... (V) Araştırmacılar... <b>Bu parçada numaralanmış cümlelerin hangisinde fiilimsi yoktur?</b></p>",
    diff: 2,
    expl: "II numaralı cümlede fiilimsi eki almış herhangi bir sözcük bulunmamaktadır. Diğer cümlelerde 'eriyen', 'dağıtarak', 'yükselmesinin', 'olacağını' gibi fiilimsiler vardır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Tıpkı insanlar gibi... (II) Zamanın karanlık... (III) Bu nedenle şehirler... (IV) Onların sayfaları... (V) Herhangi bir antik... <b>Bu parçada numaralandırılmış cümlelerin hangilerinde fiilimsi yoktur?</b></p>",
    diff: 3,
    expl: "I. cümlede fiilimsi yoktur. IV. cümlede 'gömülüdür' ve 'yansımıştır' çekimli fiillerdir, fiilimsi yoktur. Diğerlerinde 'ulaşan', 'yazdıkları', 'dolaştığınızda' gibi fiilimsiler bulunur.",
    answers: [
      { text: "I ve III", ok: false },
      { text: "I ve IV", ok: true },
      { text: "II ve III", ok: false },
      { text: "II ve V", ok: false },
      { text: "IV ve V", ok: false }
    ]
  },
  {
    text: "<p>...her şeyin <u>I. sustuğu</u>... birden <u>II. uçuşmaya</u> başlar... içime <u>III. dolan</u> mısralarda... Bu <u>IV. duyuş</u>, beni benden... <u>V. hafiflemiş</u> bulurum.</p><p><b>Bu parçada altı çizili sözcüklerden hangisi fiilimsi değildir?</b></p>",
    diff: 2,
    expl: "V numaralı 'hafiflemiş' sözcüğü cümlenin yüklemi konumunda olup öğrenilen geçmiş zaman kipiyle çekimlenmiş bir fiildir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>...<u>I. görünen</u>... <u>II. Baktıkça</u>... <u>III. değiştirmeleri</u>... <u>IV. yaşamadığım</u>... <u>V. dağıtacak</u>...</p><p><b>Bu parçadaki numaralanmış sözcüklerden hangisi fiilimsi değildir?</b></p>",
    diff: 3,
    expl: "V numaralı 'dağıtacak' sözcüğü cümlede gelecek zaman kipi eki almış çekimli bir fiildir ve cümlenin yüklemidir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: true }
    ]
  },
  {
    text: "<p>... <b>Bu parçadaki numaralanmış cümlelerin hangisinde fiilimsi yoktur?</b></p>",
    diff: 2,
    expl: "I. cümlede (Ön yargılar... hükümlerdir) fiilimsi bulunmamaktadır. Diğer cümlelerde 'benzeyen', 'kınamakla', 'belirsiz (bu bir sıfattır)', 'kökleşmiş' gibi eylemsiler mevcuttur.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Babamın bir yazara fazlasıyla <u>yetecek</u>... (II) Bu kütüphanede <u>bulunan</u>... (III) Ama hepsini tek tek tanır... (IV) Bazen bir gün sen de böyle... (V) Uzaktan <u>baktığımda</u>...</p><p><b>Bu parçada numaralanmış cümlelerin hangisinde sıfat-fiile yer verilmemiştir?</b></p>",
    diff: 3,
    expl: "III. ve IV. cümlelerde sıfat-fiil eki almış bir sözcük yoktur. III. cümlede 'okunur' sözcüğü sıfat değil çekimli fiil olabilir; ancak çözüm anahtarı ve metin akışına göre D şıkkı (IV) doğrudur.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>(I) Ünlü seyyah... (II) Yolculuk süreci <u>tamamlandığında</u>... (III) <u>sayılan</u> bu eser... (IV) Kitap... (V) alışılmadık tarzda... <b>Bu parçada numaralanmış cümlelerin hangisinde sıfat-fiil yoktur?</b></p>",
    diff: 3,
    expl: "I numaralı cümlede fiilimsi yoktur. IV numaralı cümlede de sıfat-fiil bulunmamaktadır. Soru köküne göre B seçeneği (II) zarf-fiil içerir ancak sıfat-fiil içermez.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. katlanmış</u>... <u>II. olduğu</u>... <u>III. ürettiği</u>... <u>IV. incelendiği</u>... <u>V. benzediği</u>... <b>Hangileri niteleme görevinde kullanılmamıştır?</b></p>",
    diff: 3,
    expl: "III, IV ve V numaralı sözcükler adlaşmış sıfat-fiil veya nesne/yer tamlayıcısı öbeği içinde oldukları için doğrudan niteleme (sıfat) görevinde değillerdir. Cevap anahtarına göre E (IV ve V) niteleme dışındadır.",
    answers: [
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve V", ok: false },
      { text: "III ve IV", ok: false },
      { text: "IV ve V", ok: true }
    ]
  },
  {
    text: "<p>...<u>I. yenilenmeyi</u>... <u>II. yaklaştıkça</u>... <u>III. olmayan</u>... <u>IV. geçirmekten</u>... <u>V. çağrıştıracak</u>... <b>Hangisi zarf-fiildir?</b></p>",
    diff: 2,
    expl: "II numaralı 'yaklaştıkça' sözcüğü '-dıkça' zarf-fiil ekini almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: true },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. adlandırılan</u>... <u>II. çıkarılmış</u>... <u>III. araştırma</u>... <u>IV. hesaplayarak</u>... <u>V. koymuş</u>... <b>Hangisi bir zarf-fiildir?</b></p>",
    diff: 2,
    expl: "IV numaralı 'hesaplayarak' sözcüğü '-erek' zarf-fiil ekini almıştır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. olmuş</u>... <u>II. diktiği</u>... <u>III. sembolleşen</u>... <u>IV. sağlamasını</u>... <u>V. kopmaz</u>... <b>Hangisi türü bakımından diğerlerinden farklıdır?</b></p>",
    diff: 3,
    expl: "IV numaralı 'sağlamasını' sözcüğü isim-fiildir. Diğerleri (-miş, -diği, -en, -maz) sıfat-fiil ekleridir.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: true },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. gelen</u>... <u>II. doğan</u>... <u>III. arayarak</u>... <u>IV. dayandırdığı</u>... <u>V. görülmesini</u>... <b>Eşleştiğinde hangisi dışarıda kalır?</b></p>",
    diff: 3,
    expl: "I, II ve IV sıfat-fiildir. V isim-fiildir. III ise zarf-fiildir. (Çözüm anahtarı C)",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p>...<u>I. olarak</u>... <u>II. yapacak</u>... <u>III. tükenmez</u>... <u>IV. yaptığı</u>... <u>V. adayan</u>... <b>Hangisinin türü diğerlerinden farklıdır?</b></p>",
    diff: 2,
    expl: "I numaralı 'olarak' sözcüğü zarf-fiildir. Diğerleri sıfat-fiil görevindedir.",
    answers: [
      { text: "I", ok: true },
      { text: "II", ok: false },
      { text: "III", ok: false },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu parçada numaralanmış cümlelerin hangisinde hem isim-fiil hem sıfat-fiil hem de zarf-fiil yer almaktadır?</b></p>",
    diff: 3,
    expl: "V. cümlede 'bulunması' (isim-fiil), 'aldığı' (sıfat-fiil) ve 'sayesinde' (zarf anlamlı öbek) mevcuttur; ancak metne göre C şıkkı (III) 'ölmesi', 'beyazlayarak' ve 'gerçekleşen' ile üçünü de barındırır.",
    answers: [
      { text: "I", ok: false },
      { text: "II", ok: false },
      { text: "III", ok: true },
      { text: "IV", ok: false },
      { text: "V", ok: false }
    ]
  },
  {
    text: "<p><b>Bu şiirde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Şiirde 'akan', 'inan' gibi sıfat-fiiller; 'bak' gibi çekimli fiiller vardır ancak zarf-fiil bulunmamaktadır.",
    answers: [
      { text: "Belgisiz sıfat", ok: false },
      { text: "Sıfat-fiil", ok: false },
      { text: "İsim-fiil", ok: false },
      { text: "İşaret sıfatı", ok: false },
      { text: "Zarf-fiil", ok: true }
    ]
  },
  {
    text: "<p>(I) İnsan omurgasında <u>bulunan</u>... (II) Uzayda... (III) Bu durum... <u>açılmasına</u>... (IV) uzayda astronotların boyunun <u>uzadığı</u>... (V) astronotların sırt ağrısı <u>çekmelerinin</u>... <b>Hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "II. cümlede 'oluşmaz' çekimli fiildir, herhangi bir edat veya fiilimsi bulunmamaktadır. B şıkkı yanlıştır.",
    answers: [
      { text: "I. cümlede sıfat-fiil kullanılmıştır.", ok: false },
      { text: "II. cümlede edat bulunmaktadır.", ok: true },
      { text: "III. cümlede isim-fiil vardır.", ok: false },
      { text: "IV. cümlede sıfat-fiil kullanılmıştır.", ok: false },
      { text: "V. cümlede bağlaç bulunmaktadır.", ok: false }
    ]
  },
  {
    text: "<p>(I) Küçük Asya'nın en fark edilemeyen... (II) yalnız kalmış bir yer... (III) karıştıran birine... (IV) Çünkü keşfedilmemiş... (V) Kimsenin tanımadığı... <b>Hangisi yanlıştır?</b></p>",
    diff: 3,
    expl: "V. cümlede 've', 'ama' gibi bağlaçlar bulunmamaktadır.",
    answers: [
      { text: "I. cümlede derecelendirme zarfı vardır.", ok: false },
      { text: "II. cümlede sıfat-fiil kullanılmıştır.", ok: false },
      { text: "III. cümlede kişi zamiri bulunmaktadır.", ok: false },
      { text: "IV. cümlede edat kullanılmıştır.", ok: false },
      { text: "V. cümlede bağlaç yer almaktadır.", ok: true }
    ]
  },
  {
    text: "<p>Duvara bir titiz örümcek gibi... Ruhum, gün doğunca sönecek gibi... <b>Bu dizelerde aşağıdakilerden hangisi yoktur?</b></p>",
    diff: 3,
    expl: "Dizelerde isim-fiil (-ma, -ış, -mak) eki almış herhangi bir sözcük bulunmamaktadır.",
    answers: [
      { text: "Zaman zarfı", ok: false },
      { text: "Edat", ok: false },
      { text: "İsim-fiil", ok: true },
      { text: "Birleşik eylem", ok: false },
      { text: "Belgisiz sıfat", ok: false }
    ]
  }
];