// Sözel Mantık
import type { McQ } from "../../../../types";

// ============================================================================
// SÖZEL MANTIK - TEST 1
// ============================================================================
const CTX85A =
  "<p><b>1. - 4. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bayram, Dilek, Erdal, İlyas, Ömür, Ramazan, Sadettin ve Yelda adlı kişiler hafta sonu; bilim kurgu, komedi ve macera türünde bir filme gitmiştir. Bu kişilerin gittikleri filmlere ve güne ilişkin kimi bilgiler şunlardır:</p>" +
  "<ul>" +
  "<li>Herkes sadece bir filme gitmiştir.</li>" +
  "<li>Pazar günü, her film türüne birer kişi gitmiştir.</li>" +
  "<li>Bilim kurgu ve komedi filmlerine üçer kişi gitmiştir.</li>" +
  "<li>İlyas, cumartesi günü bilim kurgu filmine gitmiştir.</li>" +
  "<li>Erdal, macera filmine gitmiştir.</li>" +
  "<li>Bayram ve Yelda aynı gün, aynı filme gitmiştir.</li>" +
  "<li>Erdal ile Bayram farklı günlerde filme gitmiştir.</li>" +
  "<li>Ramazan ve Sadettin aynı filme gitmiştir.</li>" +
  "</ul>";

const CTX85B =
  "<p><b>5. - 8. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bir kursun hafta sonu düzenlediği TYT ve KPSS seminerlerine katılan A, B, C, D, E, F ve G adlı öğrencilere ilişkin kimi bilgiler şunlardır:</p>" +
  "<ul>" +
  "<li>Her öğrenci yalnızca bir seminere katılmıştır.</li>" +
  "<li>Pazar günkü seminerlere toplam üç öğrenci katılmıştır.</li>" +
  "<li>TYT seminerine toplam dört öğrenci katılmıştır.</li>" +
  "<li>Pazar günü KPSS seminerine yalnızca bir kişi katılmıştır.</li>" +
  "<li>C ile E aynı seminere farklı günlerde katılmıştır.</li>" +
  "<li>A ile D farklı seminerlere aynı gün katılmıştır.</li>" +
  "<li>B ile G cumartesi aynı seminere katılmıştır.</li>" +
  "</ul>";

export const TUR_SOZEL_MANTIK_TEST_1: McQ[] = [
  // --- SENARYO 1 (1-4) ---
  {
    text: CTX85A + "<p><b>1. Buna göre; I. Bayram, II. Ömür, III. Ramazan adlı kişilerden hangileri pazar günü bir filme gitmiş olabilir?</b></p>",
    diff: 3,
    expl: "Çözüm tablosuna göre Bayram'ın cumartesi günü filme gittiği kesindir. Ancak Ömür ve Ramazan'ın pazar günü bir filme gitmiş olma olasılığı vardır. Bu yüzden doğru seçenek II ve III yani E'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true }
    ],
  },
  {
    text: CTX85A + "<p><b>2. Buna göre; I. Dilek, II. Sadettin, III. Yelda adlı kişilerden hangilerinin gittiği film türü kesin olarak bilinmektedir?</b></p>",
    diff: 3,
    expl: "Yelda'nın komedi, Sadettin'in ise bilim kurgu filmine gittiği kesinleşmiştir. Dilek'in gittiği film türü ve günü ise olasılıklıdır. Bu yüzden doğru cevap II ve III'tür.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: true }
    ],
  },
  {
    text: CTX85A + "<p><b>3. Aşağıdakilerden hangisi <u>kesin olarak yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "Analize göre Ramazan ve Sadettin bilim kurgu filmine gitmiştir. İlyas cumartesi günü bu filme gittiğine göre, bu kişilerden biri cumartesi diğeri pazar günü bu filme gitmiştir. Aynı gün gitmeleri mümkün değildir.",
    answers: [
      { text: "Bayram ve Yelda komedi filmine gitmiştir.", ok: false },
      { text: "Ramazan ve Sadettin aynı gün filme gitmiştir.", ok: true },
      { text: "Ömür ve Dilek farklı günlerde filme gitmiştir.", ok: false },
      { text: "İlyas ve Ramazan aynı gün filme gitmiştir.", ok: false },
      { text: "Sadettin ve Erdal aynı gün filme gitmiştir.", ok: false }
    ],
  },
  {
    text: CTX85A + "<p><b>4. Dilek ve Erdal'ın aynı gün filme gittiği bilindiğine göre aşağıdakiler-den hangisi <u>kesin olarak doğrudur</u>?</b></p>",
    diff: 3,
    expl: "Dilek ve Erdal pazar günü filme gitmişse, Ömür cumartesi komediye gitmiştir. Bu durumda Ömür ve İlyas'ın her ikisinin de cumartesi günü filme gittiği kesinleşir.",
    answers: [
      { text: "Ömür ve İlyas aynı gün filme gitmiştir.", ok: true },
      { text: "Ramazan ve Dilek aynı gün filme gitmiştir.", ok: false },
      { text: "Sadettin ve Erdal farklı günlerde filme gitmiştir.", ok: false },
      { text: "Bayram ve Ömür farklı günlerde filme gitmiştir.", ok: false },
      { text: "Yelda ve Ramazan aynı gün filme gitmiştir.", ok: false }
    ],
  },
  // --- SENARYO 2 (5-8) ---
  {
    text: CTX85B + "<p><b>5. Buna göre; I. D, II. E, III. G adlı öğrencilerden hangileri TYT seminerine katılmış olabilir?</b></p>",
    diff: 3,
    expl: "D ve E'nin TYT seminerine katılmış olma olasılığı vardır. Ancak G'nin cumartesi günü KPSS seminerine katıldığı kesinleşmiştir. Bu nedenle cevap D ve E yani D seçeneğidir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "I ve III", ok: false }
    ],
  },
  {
    text: CTX85B + "<p><b>6. Aşağıdakilerden hangisi <u>kesin olarak doğrudur</u>?</b></p>",
    diff: 2,
    expl: "Tablo analizi yapıldığında F'nin cumartesi günü TYT seminerine katıldığı bilgisi net bir şekilde ortaya çıkar.",
    answers: [
      { text: "A, cumartesi seminere katılmıştır.", ok: false },
      { text: "C, pazar seminerine katılmıştır.", ok: false },
      { text: "D, cumartesi seminerine katılmıştır.", ok: false },
      { text: "E, pazar seminerine katılmıştır.", ok: false },
      { text: "F, cumartesi seminere katılmıştır.", ok: true }
    ],
  },
  {
    text: CTX85B + "<p><b>7. Aşağıdakilerden hangisi <u>kesin olarak yanlıştır</u>?</b></p>",
    diff: 2,
    expl: "E'nin TYT seminerine katıldığı kesin bir bilgidir. Bu yüzden E'nin KPSS seminerine katıldığını iddia eden D seçeneği kesinlikle yanlıştır.",
    answers: [
      { text: "A, TYT seminerine katılmıştır.", ok: false },
      { text: "B, KPSS seminerine katılmıştır.", ok: false },
      { text: "C, TYT seminerine katılmıştır.", ok: false },
      { text: "E, KPSS seminerine katılmıştır.", ok: true },
      { text: "F, TYT seminerine katılmıştır.", ok: false }
    ],
  },
  {
    text: CTX85B + "<p><b>8. Tüm öğrencilerin katıldıkları seminerin ve günün tam olarak belirlenebilmesi için aşağıdakilerden hangisinin bilinmesi yeterlidir?</b></p>",
    diff: 3,
    expl: "Olasılıkları ortadan kaldırmak için C'nin seminer günü ile A'nın katıldığı seminer türünün bilinmesi tüm tablonun netleşmesini sağlar.",
    answers: [
      { text: "A'nın seminere katıldığı günün ve C'nin katıldığı seminerin", ok: false },
      { text: "B'nin seminere katıldığı günün ve F'nin katıldığı seminerin", ok: false },
      { text: "C'nin seminere katıldığı günün ve A'nın katıldığı seminerin", ok: true },
      { text: "D'nin seminere katıldığı günün ve E'nin katıldığı seminerin", ok: false },
      { text: "G'nin seminere katıldığı günün ve D'nin katıldığı seminerin", ok: false }
    ],
  }
];

// ============================================================================
// SÖZEL MANTIK - TEST 2
// ============================================================================
const CTX86A =
  "<p><b>1. - 4. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bir okulun A ve B şubelerinde öğrenim gören Kemal, Leyla, Mine, Nurgül ve Sevil adlı öğrenciler tarih, coğrafya ve Türkçeden ödev hazırlamışlardır. Bu öğrencilerin şubelerine ve seçtikleri ödevlere ilişkin kimi bilgiler şunlardır:</p>" +
  "<ul>" +
  "<li>Her öğrenci yalnızca bir ödev hazırlamıştır.</li>" +
  "<li>B şubesinde toplam iki öğrenci ödev hazırlamıştır.</li>" +
  "<li>Tarih ve coğrafyadan ikişer öğrenci ödev hazırlamıştır.</li>" +
  "<li>Sevil, tarihten ödev hazırlamıştır.</li>" +
  "<li>Farklı şubelerdeki Kemal ile Mine aynı dersten ödev hazırlamıştır.</li>" +
  "<li>Leyla ve Nurgül aynı şubede öğrenim görmektedir.</li>" +
  "</ul>";

const CTX86B =
  "<p><b>5. - 8. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Ayşegül, Bülent, Can, Erdal, Ramazan, Sabri ve Zeynep adlı öğretmenlerin hazırladığı konu anlatımı, soru bankası ve video ders notu olmak üzere üç farklı kitap, Benim Hocam Yayınevi tarafından belli bir sırada yayımlanmıştır. Bilgiler şöyledir:</p>" +
  "<ul>" +
  "<li>Her öğretmenin yayımlanan sadece bir tür kitabı vardır.</li>" +
  "<li>Öğretmenlerden üçünün video ders notu, ikisinin konu anlatımlı kitabı vardır.</li>" +
  "<li>Zeynep'in soru bankası, ikinci sırada yayımlanmıştır.</li>" +
  "<li>Beşinci ve altıncı sırada yayımlanan ürünlerin türü aynıdır.</li>" +
  "<li>Can'ın kitabından hemen önce Sabri'nin, hemen sonra da Ayşegül'ün kitabı yayımlanmıştır ve üçünün de kitabı farklı türdedir.</li>" +
  "<li>Ayşegül, konu anlatımlı kitap hazırlamıştır.</li>" +
  "<li>Ramazan ve Erdal'ın kitapları art arda yayımlanmıştır.</li>" +
  "</ul>";

export const TUR_SOZEL_MANTIK_TEST_2: McQ[] = [
  // --- SENARYO 1 (1-4) ---
  {
    text: CTX86A + "<p><b>1. Aşağıdakilerden hangisi <u>yanlıştır</u>?</b></p>",
    diff: 3,
    expl: "Çözüm tablosuna göre B şubesinde tarihten ödev hazırlayan Sevil ve coğrafyadan ödev hazırlayan Kemal veya Mine vardır. B şubesinden birinin Türkçeden ödev hazırlama olasılığı yoktur. Bu nedenle B şıkkı kesinlikle yanlıştır.",
    answers: [
      { text: "B şubesinden bir öğrenci tarihten ödev hazırlamıştır.", ok: false },
      { text: "B şubesinden bir öğrenci Türkçeden ödev hazırlamıştır.", ok: true },
      { text: "A şubesinden bir öğrenci tarihten ödev hazırlamıştır.", ok: false },
      { text: "A şubesinden bir öğrenci Türkçeden ödev hazırlamıştır.", ok: false },
      { text: "A şubesinden bir öğrenci coğrafyadan ödev hazırlamıştır.", ok: false }
    ],
  },
  {
    text: CTX86A + "<p><b>2. Buna göre; I. Leyla, II. Mine, III. Nurgül adlı öğrencilerden hangilerinin seçtiği ders kesin olarak bilinmektedir?</b></p>",
    diff: 3,
    expl: "Tablo analizi yapıldığında Mine'nin coğrafyadan ödev hazırladığı kesinleşir. Leyla ve Nurgül'ün dersleri ise tarih ve Türkçe arasında olasılıklıdır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: true },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: false },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX86A + "<p><b>3. Buna göre; I. Kemal, II. Leyla, III. Sevil adlı öğrencilerden hangileri A şubesinde öğrenim görüyor olabilir?</b></p>",
    diff: 2,
    expl: "Leyla'nın A şubesinde olduğu kesindir. Kemal ise B veya A şubesinde (Mine ile yer değişerek) olabilir. Sevil kesinlikle B şubesindedir. Dolayısıyla I ve II olabilir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX86A + "<p><b>4. Tüm öğrencilerin yaptıkları ödevin ve öğrenim gördükleri şubenin ne olduğunun belirlenebilmesi için aşağıdakilerden hangisinin bilinmesi yeterlidir?</b></p>",
    diff: 3,
    expl: "A şıkkındaki 'Leyla'nın seçtiği ders ile Mine'nin öğrenim gördüğü şube' bilgisi verilirse, tüm öğrencilerin şube ve dersleri matematiksel olarak kesinleşir.",
    answers: [
      { text: "Leyla'nın seçtiği ders ile Mine'nin öğrenim gördüğü şubenin", ok: true },
      { text: "Sevil'in öğrenim gördüğü şube ile Leyla'nın seçtiği dersin", ok: false },
      { text: "Nurgül'ün öğrenim gördüğü şube ile Kemal'in seçtiği dersin", ok: false },
      { text: "Leyla'nın seçtiği ders ile Nurgül'ün öğrenim gördüğü şubenin", ok: false },
      { text: "Kemal'in öğrenim gördüğü şube ile Mine'nın seçtiği dersin", ok: false }
    ],
  },
  // --- SENARYO 2 (5-8) ---
  {
    text: CTX86B + "<p><b>5. Buna göre; I. Ayşegül, II. Bülent, III. Ramazan adlı öğretmenlerden hangilerinin kitabının yayımlanma sırası kesin olarak bilinmektedir?</b></p>",
    diff: 3,
    expl: "Ayşegül'ün kitabı 5. sırada, Bülent'in kitabı ise 1. sırada kesin olarak yayımlanmıştır. Ramazan'ın sırası ise 6 veya 7 olarak olasılıklıdır. Bu yüzden I ve II kesindir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX86B + "<p><b>6. Buna göre; I. Can, II. Erdal, III. Sabri adlı öğretmenlerden hangileri soru bankası hazırlamış olabilir?</b></p>",
    diff: 3,
    expl: "Can ve Sabri'den birinin soru bankası hazırladığı olasılıklar dahilindedir. Erdal ise video ders notu veya konu anlatımlı kitap hazırlamıştır.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX86B + "<p><b>7. Aşağıdaki sıralardan hangisinde kitabı yayımlanan öğretmenlerin hazırladığı kitapların türleri kesin olarak aynıdır?</b></p>",
    diff: 2,
    expl: "Birinci sırada (Bülent) ve yedinci sırada (Erdal/Ramazan) yayımlanan kitapların türü kesinlikle video ders notudur.",
    answers: [
      { text: "Birinci ve ikinci", ok: false },
      { text: "Birinci ve yedinci", ok: true },
      { text: "İkinci ve üçüncü", ok: false },
      { text: "Üçüncü ve beşinci", ok: false },
      { text: "Dördüncü ve yedinci", ok: false }
    ],
  },
  {
    text: CTX86B + "<p><b>8. Tüm öğretmenlerin hazırladığı kitap türlerinin ve kitaplarının yayımlanma sırasının belirlenebilmesi için aşağıdakilerden hangisinin bilinmesi yeterlidir?</b></p>",
    diff: 3,
    expl: "Can ve Erdal'ın kitap türlerinin aynı olduğu bilinirse, Sabri'nin soru bankası olduğu kesinleşir ve tüm tablo netleşir. Bu yüzden cevap A'dır.",
    answers: [
      { text: "Can ve Erdal'ın hazırladığı kitap türlerinin aynı olduğunun", ok: true },
      { text: "Ramazan'ın kitabının, Erdal'ın kitabından sonra yayımlandığının", ok: false },
      { text: "Sabri'nin kitabının, Zeynep'in kitabından hemen sonra yayımlandığının", ok: false },
      { text: "Ramazan ve Ayşegül'ün hazırladığı kitap türlerinin farklı olduğunun", ok: false },
      { text: "Bülent ve Erdal'ın hazırladığı kitap türlerinin aynı olduğunun", ok: false }
    ],
  }
];

// ============================================================================
// SÖZEL MANTIK - TEST 3
// ============================================================================
const CTX87A =
  "<p><b>1. - 4. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Hacettepe, Ankara ve Gazi Üniversitelerinde birinci veya ikinci sınıfta öğrenim gören Kemal, Leman, Mine, Nuray, Orhan, Ömer ve Pelin adlı öğrencilerin eğitim aldıkları üniversiteye ve sınıflarına ilişkin kimi bilgiler şu şekildedir:</p>" +
  "<ul>" +
  "<li>İkinci sınıfta öğrenim gören öğrenci sayısı dörttür.</li>" +
  "<li>Hacettepe Üniversitesinde yalnızca bir öğrenci öğrenim görmektedir.</li>" +
  "<li>Gazi Üniversitesinde öğrenim gören öğrenci sayısı, Ankara Üniversitesinde öğrenim gören öğrenci sayısından fazladır.</li>" +
  "<li>Orhan, Ankara Üniversitesinde birinci sınıfta öğrenim görmektedir.</li>" +
  "<li>Kemal, Mine ve Nuray farklı üniversitelerde aynı sınıfta öğrenim görmektedir.</li>" +
  "<li>Farklı sınıflarda öğrenim gören Ömer ve Kemal, aynı üniversitededir.</li>" +
  "</ul>";

const CTX87B =
  "<p><b>5. - 8. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bir konserde A, B ve C adlı bestecilere ait şarkıları; Kemal, Leman, Metin, Oya, Ömer, Pınar ve Rüya adlı sanatçılar belli bir sırada söylemişlerdir. Her kişinin sadece bir şarkı söylediği konsere ilişkin kimi bilgiler şu şekildedir:</p>" +
  "<ul>" +
  "<li>Aynı besteciye ait şarkılar, art arda söylenmemiştir.</li>" +
  "<li>İlk sırada B, son sırada A adlı besteciye ait şarkılar söylenmiştir.</li>" +
  "<li>Rüya üçüncü sırada şarkı söylemiştir.</li>" +
  "<li>Altıncı sırada şarkı söyleyen Pınar, B adlı besteciye ait bir şarkı söylememiştir.</li>" +
  "<li>Ömer, A adlı besteciye ait bir şarkı söylemiştir.</li>" +
  "<li>Ömer, Rüya'dan önce şarkı söylemiştir.</li>" +
  "<li>Kemal'den hemen sonra Oya şarkı söylemiştir.</li>" +
  "<li>Üçüncü ve beşinci sırada aynı besteciye ait şarkı söylenmiştir.</li>" +
  "</ul>";

export const TUR_SOZEL_MANTIK_TEST_3: McQ[] = [
  // --- SENARYO 1 (1-4) ---
  {
    text: CTX87A + "<p><b>1. Aşağıdaki öğrencilerden hangileri aynı üniversitede öğrenim görmektedir?</b></p>",
    diff: 3,
    expl: "Analize göre Kemal, Leman, Ömer ve Pelin Gazi Üniversitesindedir. Bu durumda Leman ve Pelin aynı üniversitededir.",
    answers: [
      { text: "Leman ve Mine", ok: false },
      { text: "Leman ve Orhan", ok: false },
      { text: "Leman ve Pelin", ok: true },
      { text: "Mine ve Orhan", ok: false },
      { text: "Nuray ve Ömer", ok: false }
    ],
  },
  {
    text: CTX87A + "<p><b>2. Bu bilgilere göre, aşağıdakilerden hangisi kesinlikle yanlıştır?</b></p>",
    diff: 3,
    expl: "Ömer'in birinci sınıfta öğrenim gördüğü kesindir. Bu nedenle 'Ömer Gazi Üniversitesinde ikinci sınıfta öğrenim görmektedir' yargısı kesinlikle yanlıştır.",
    answers: [
      { text: "Pelin ve Ömer aynı üniversitede aynı sınıfta öğrenim görmektedir.", ok: false },
      { text: "Hacettepe Üniversitesinde ikinci sınıfta öğrenim gören Nuray'dır.", ok: false },
      { text: "Ömer, Gazi Üniversitesinde ikinci sınıfta öğrenim görmektedir.", ok: true },
      { text: "Leman, Gazi Üniversitesinde birinci sınıfta öğrenim görmektedir.", ok: false },
      { text: "Mine ve Orhan aynı üniversitede farklı sınıflarda öğrenim görmektedir.", ok: false }
    ],
  },
  {
    text: CTX87A + "<p><b>3. Buna göre; I. Kemal, II. Leman, III. Mine adlı öğrencilerden hangileri Gazi Üniversitesinde öğrenim görmektedir?</b></p>",
    diff: 3,
    expl: "Tabloya göre Kemal, Leman, Ömer ve Pelin Gazi Üniversitesinde öğrenim görmektedir. Mine ise Hacettepe veya Ankara Üniversitesindedir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: true },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX87A + "<p><b>4. Mine ve Leman'ın aynı sınıflarda öğrenim gördüğü bilinirse aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Mine ve Leman aynı sınıftaysa (ikinci sınıf), bu durumda Pelin'in birinci sınıfta olması kesinleşir. Ömer ve Pelin'in aynı sınıfta (birinci sınıf) öğrenim gördüğü yargısı doğru olur.",
    answers: [
      { text: "Pelin ve Orhan farklı sınıfta öğrenim görmektedir.", ok: false },
      { text: "Ömer ve Pelin aynı sınıfta öğrenim görmektedir.", ok: true },
      { text: "Mine ve Pelin aynı sınıfta öğrenim görmektedir.", ok: false },
      { text: "Kemal ve Pelin aynı sınıfta öğrenim görmektedir.", ok: false },
      { text: "Leman ve Nuray farklı sınıfta öğrenim görmektedir.", ok: false }
    ],
  },
  // --- SENARYO 2 (5-8) ---
  {
    text: CTX87B + "<p><b>5. Buna göre; I. Kemal, II. Leman, III. Metin adlı kişilerden hangileri C adlı besteciye ait bir şarkı söylemiş olabilir?</b></p>",
    diff: 3,
    expl: "Çözüm tablosuna göre Kemal (4. sıra) A veya C bestecisine ait şarkı söylemiş olabilir. Leman ve Metin ise 1. veya 7. sıradadır ve B veya A bestecisine aittirler.",
    answers: [
      { text: "Yalnız I", ok: true },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false }
    ],
  },
  {
    text: CTX87B + "<p><b>6. Oya ---- sırada ---- adlı besteciye ait bir şarkı söylemiştir. Boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?</b></p>",
    diff: 2,
    expl: "Kemal 4. sırada, Oya ise hemen ardından 5. sıradadır. 3. ve 5. sırada aynı besteci (B) olduğu için Oya, 5. sırada B bestecisine ait şarkı söylemiştir.",
    answers: [
      { text: "ikinci - A", ok: false },
      { text: "ikinci - B", ok: false },
      { text: "dördüncü - C", ok: false },
      { text: "beşinci - B", ok: true },
      { text: "beşinci - C", ok: false }
    ],
  },
  {
    text: CTX87B + "<p><b>7. Aşağıdakilerden hangisi kesin olarak bilinmektedir?</b></p>",
    diff: 2,
    expl: "Tablo yerleştirildiğinde B adlı besteciye ait toplam şarkı sayısının (1, 3 ve 5. sıralar) 3 olduğu kesin olarak bilinmektedir.",
    answers: [
      { text: "A adlı besteciye ait toplam şarkı sayısı", ok: false },
      { text: "B adlı besteciye ait toplam şarkı sayısı", ok: true },
      { text: "C adlı besteciye ait toplam şarkı sayısı", ok: false },
      { text: "Birinci sırada şarkı söyleyen kişi", ok: false },
      { text: "Yedinci sırada şarkı söyleyen kişi", ok: false }
    ],
  },
  {
    text: CTX87B + "<p><b>8. Kemal ve Leman'ın aynı bestecinin şarkılarını söyledikleri biliniyorsa aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 3,
    expl: "Kemal ve Leman aynı besteciyi (A) söylüyorsa, Leman 7. sıradadır. Bu durumda Metin ve Oya'nın her ikisinin de B bestecisine ait şarkı söylediği kesinleşir.",
    answers: [
      { text: "Metin ve Oya aynı bestecinin şarkılarını söylemiştir.", ok: true },
      { text: "Kemal ve Ömer farklı bestecilerin şarkılarını söylemiştir.", ok: false },
      { text: "Leman ve Metin aynı bestecinin şarkılarını söylemiştir.", ok: false },
      { text: "Oya ve Rüya farklı bestecilerin şarkılarını söylemiştir.", ok: false },
      { text: "Pınar ve Rüya aynı bestecinin şarkılarını söylemiştir.", ok: false }
    ],
  }
];

// ============================================================================
// SÖZEL MANTIK - TEST 4
// ============================================================================
const CTX88A =
  "<p><b>1. - 4. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bilim kurgu, komedi ve macera filmlerine bilet almak için bir sinema gişesinde sırada bekleyen Pelin, Raşit, Tuna, Ümit, Vedat, Yasemin ve Zerrin adlı kişilerin bilet alma sıralarına ve bilet aldıkları filmlerin türlerine ilişkin kimi bilgiler şöyledir:</p>" +
  "<ul>" +
  "<li>Her bir kişi, sadece bir bilet almıştır.</li>" +
  "<li>İkinci ve üçüncü sırada bekleyen kişiler, aynı türdeki filme bilet almıştır.</li>" +
  "<li>Ümit'ten hemen önce Raşit, hemen sonra da Zerrin bilet almıştır.</li>" +
  "<li>Raşit, Ümit ve Zerrin farklı türdeki filmlere bilet almışlardır.</li>" +
  "<li>Bilim kurgu türünde bir filme bilet alan Vedat, altıncı sıradadır.</li>" +
  "<li>Tuna ve Yasemin art arda bilet almışlardır.</li>" +
  "<li>Komedi filmine üç, macera filmine ise iki kişi bilet almıştır.</li>" +
  "<li>Raşit, macera filmine bilet almıştır.</li>" +
  "</ul>";

const CTX88B =
  "<p><b>5. - 8. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Etrabe ile Selim adlı yönetmenler haftanın farklı günlerinde Türkçe ve matematik derslerinin videolarını çekmektedirler. Bu redaktörlerin hangi gün hangi videoyu çektiğine ilişkin bilgiler şöyledir:</p>" +
  "<ul>" +
  "<li>Her gün yalnızca bir video çekimi yapılmıştır.</li>" +
  "<li>Etrabe, dört gün çekim yapmıştır.</li>" +
  "<li>Haftanın ilk ve son günü aynı yönetmen çekim yapmıştır.</li>" +
  "<li>Çarşamba ve cumartesi aynı dersin çekimleri yapılmıştır.</li>" +
  "<li>Türkçe videoları art arda çekilmemiştir.</li>" +
  "<li>Üçüncü gün Etrabe tarafından çekim yapılmıştır.</li>" +
  "<li>Dördüncü gün Selim, Türkçe videosu çekmiştir.</li>" +
  "<li>Etrabe'nin çektiği Türkçe videosundan sonra Selim matematik videosu çekmiştir.</li>" +
  "</ul>";

export const TUR_SOZEL_MANTIK_TEST_4: McQ[] = [
  // --- SENARYO 1 (1-4) ---
  {
    text: CTX88A + "<p><b>1. Buna göre; I. birinci, II. üçüncü, III. beşinci sırada bilet alan kişilerden hangileri komedi türünde bir filme bilet almış olabilir?</b></p>",
    diff: 3,
    expl: "Çözüm tablosuna göre 1. ve 7. sıradaki kişiler komedi filmi almıştır. Ayrıca 4. veya 5. sıradaki kişilerden biri de komedi almış olabilir. Bu durumda 1. ve 5. sıra olasılık dahilindedir.",
    answers: [
      { text: "Yalnız I", ok: false }, { text: "B) Yalnız II", ok: false }, { text: "C) I ve II", ok: false },
      { text: "D) I ve III", ok: true }, { text: "E) II ve III", ok: false }
    ],
  },
  {
    text: CTX88A + "<p><b>2. Buna göre; I. Pelin, II. Tuna, III. Ümit adlı kişilerden hangilerinin bilet aldığı filmin türü kesin olarak bilinmektedir?</b></p>",
    diff: 3,
    expl: "Pelin'in 7. sırada olduğu ve komedi filmine bilet aldığı kesindir. Tuna ve Ümit'in film türleri ise yer değişim olasılıkları nedeniyle kesin değildir.",
    answers: [
      { text: "A) Yalnız I", ok: true }, { text: "B) Yalnız II", ok: false }, { text: "C) Yalnız III", ok: false },
      { text: "D) I ve III", ok: false }, { text: "E) II ve III", ok: false }
    ],
  },
  {
    text: CTX88A + "<p><b>3. Aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl: "Tabloya göre Vedat 6. sırada, Zerrin ise 5. sıradadır. Dolayısıyla Vedat, Zerrin'den hemen sonra bilet almıştır ifadesi doğrudur.",
    answers: [
      { text: "A) Pelin, Tuna'dan önce bilet almıştır.", ok: false }, { text: "B) Raşit, Yasemin'den önce bilet almıştır.", ok: false },
      { text: "C) Tuna, Ümit'ten sonra bilet almıştır.", ok: false }, { text: "D) Ümit, Pelin'den sonra bilet almıştır.", ok: false },
      { text: "E) Vedat, Zerrin'den sonra bilet almıştır.", ok: true }
    ],
  },
  {
    text: CTX88A + "<p><b>4. Tuna ve Ümit'in aynı filme bilet aldığı biliniyorsa aşağıdakilerden hangisi kesin olarak doğrudur?</b></p>",
    diff: 3,
    expl: "Tuna ve Ümit aynı filme bilet alıyorsa bu film komedidir. Bu durumda Zerrin'in bilim kurgu türünde bilet aldığı kesinleşir.",
    answers: [
      { text: "A) Yasemin, bilim kurgu türünde bir filme bilet almıştır.", ok: false }, { text: "B) Zerrin, bilim kurgu türünde bir filme bilet almıştır.", ok: true },
      { text: "C) Pelin, macera türünde bir filme bilet almıştır.", ok: false }, { text: "D) Raşit, ikinci sırada bilet almıştır.", ok: false },
      { text: "E) Ümit, beşinci sırada bilet almıştır.", ok: false }
    ],
  },
  // --- SENARYO 2 (5-8) ---
  {
    text: CTX88B + "<p><b>5. Buna göre; I. çarşamba, II. cuma, III. pazar günlerinin hangilerinde matematik dersinin videosu çekilmiş olabilir?</b></p>",
    diff: 3,
    expl: "Analize göre matematik videoları Salı, Çarşamba, Cuma, Cumartesi ve Pazar günlerinden herhangi birinde çekilmiş olabilir. Öncüllerdeki tüm günler matematik çekimine uygundur.",
    answers: [
      { text: "A) Yalnız I", ok: false }, { text: "B) Yalnız III", ok: false }, { text: "C) I ve II", ok: false },
      { text: "D) II ve III", ok: false }, { text: "E) I, II ve III", ok: true }
    ],
  },
  {
    text: CTX88B + "<p><b>6. Buna göre Etrabe; I. salı, II. cuma, III. cumartesi günlerinin hangilerinde çekim yapmış olabilir?</b></p>",
    diff: 3,
    expl: "Etrabe'nin Pazartesi, Çarşamba ve Pazar günleri kesin çekim yaptığı; Cuma veya Cumartesi günlerinden birinde de 4. çekimini yaptığı bilinmektedir. Salı günü ise Selim çekim yapmıştır.",
    answers: [
      { text: "A) Yalnız I", ok: false }, { text: "B) Yalnız II", ok: false }, { text: "C) Yalnız III", ok: false },
      { text: "D) I ve II", ok: false }, { text: "E) II ve III", ok: true }
    ],
  },
  {
    text: CTX88B + "<p><b>7. Aşağıdakilerden hangisi kesin olarak doğrudur?</b></p>",
    diff: 2,
    expl: "Selim Salı günü matematik, Perşembe ve Cumartesi/Cuma günlerinden birinde de matematik çekmiştir. Türkçe videosu ise sadece Perşembe günü Selim tarafından çekilmiştir.",
    answers: [
      { text: "A) Etrabe, iki matematik videosu çekimi yapmıştır.", ok: false }, { text: "B) Selim, yalnızca bir Türkçe videosu çekimi yapmıştır.", ok: true },
      { text: "C) Selim, art arda iki gün video çekimi yapmıştır.", ok: false }, { text: "D) Hafta sonu Etrabe, video çekimi yapmıştır.", ok: false },
      { text: "E) Etrabe en az iki Türkçe videosu çekimi yapmıştır.", ok: false }
    ],
  },
  {
    text: CTX88B + "<p><b>8. Etrabe'nin art arda iki gün matematik videosu çekimi yaptığı bilinirse aşağıdakilerden hangisi kesin olarak yanlıştır?</b></p>",
    diff: 3,
    expl: "Haftanın ilk günü (Pazartesi) Türkçe, son günü (Pazar) matematik ya da Türkçe olabilir. Ancak kurallara göre haftanın ilk ve son günü farklı derslerin videoları çekilmiştir yargısı kesin yanlıştır.",
    answers: [
      { text: "A) Selim, cuma günü matematik videosu çekmiştir.", ok: false }, { text: "B) Etrabe, yalnızca bir Türkçe videosu çekimi yapmıştır.", ok: false },
      { text: "C) Haftanın ilk ve son günü aynı dersin videosu çekilmiştir.", ok: true }, { text: "D) Selim, art arda iki gün farklı derslerin videosunu çekmiştir.", ok: false },
      { text: "E) Hafta sonu matematik dersinin videoları çekilmiştir.", ok: false }
    ],
  },
];

// ============================================================================
// SÖZEL MANTIK - TEST 5
// ============================================================================
const CTX5A =
  "<p><b>1. - 4. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bir kursta hafta sonu; fizik, matematik ve Türkçe derslerinden etüt alan Ali, Buket, Can, Demet, Emre, Gül ve Halil adlı öğrencilerin hangi gün hangi dersten etüt aldıklarıyla ilgili şunlar bilinmektedir:</p>" +
  "<ul>" +
  "<li>Her bir öğrenci yalnızca bir gün bir dersten etüt almıştır.</li>" +
  "<li>Matematikten üç, fizikten iki öğrenci etüt almıştır.</li>" +
  "<li>Pazar günü eğitim alan dört öğrenci vardır.</li>" +
  "<li>Buket ve Emre aynı gün farklı derslerden etüt almıştır.</li>" +
  "<li>Can ve Gül farklı günlerde aynı dersten etüt almıştır.</li>" +
  "<li>Buket ve Halil aynı gün matematikten etüt almıştır.</li>" +
  "<li>Demet, cumartesi fizikten etüt almıştır.</li>" +
  "</ul>";

const CTX5B =
  "<p><b>5. - 8. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.</b></p>" +
  "<p>Bir yayınevinde çalışan Erkan ve Hüseyin adlı redaktörler; K, L, M, N, P, R, S adlı kitapları haftanın farklı günlerinde yayıma hazır hâle getirmek üzere incelemiştir. Bu redaktörlerin hangi gün hangi kitabı incelediğine ilişkin kimi bilgiler şunlardır:</p>" +
  "<ul>" +
  "<li>Her ikisi de her gün birer kitabı olmak üzere tüm kitapları incelemiştir.</li>" +
  "<li>Erkan ve Hüseyin'in yalnızca üçüncü ve altıncı sırada incelediği kitaplar aynıdır.</li>" +
  "<li>Erkan'ın salı günü incelediği N adlı kitabı, Hüseyin perşembe günü incelemiştir.</li>" +
  "<li>Her iki kişi de M ve P adlı kitapları art arda günlerde incelemiştir.</li>" +
  "<li>Her iki kişi de K ile S adlı kitapları art arda günlerde incelemiştir.</li>" +
  "<li>Erkan'ın ilk gün incelediği kitabı, Hüseyin son gün incelemiştir.</li>" +
  "<li>Erkan R adlı kitaptan hemen sonra M adlı kitabı, Hüseyin ise M adlı kitaptan hemen sonra R adlı kitabı incelemiştir.</li>" +
  "</ul>";

export const TUR_SOZEL_MANTIK_TEST_5: McQ[] = [
  // ── Soru 1 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5A +
      "<p><b>Buna göre;</b><br>I. Ali,<br>II. Emre,<br>III. Gül<br><b>adlı öğrencilerden hangileri Türkçeden etüt almıştır?</b></p>",
    diff: 2,
    expl:
      "Demet cumartesi fizikten, Buket ve Halil pazar günü matematikten etüt almıştır. Matematikten 3, fizikten 2, dolayısıyla Türkçeden 2 öğrenci etüt almıştır. Buket ile Emre aynı gün farklı dersten olduğundan Emre pazarda fizikten etüt almıştır. Can ve Gül farklı günlerde aynı dersten aldığından bu ders Türkçedir. Ali ise cumartesi matematikten etüt almıştır. Türkçeden kesin olarak Gül ve Can almıştır; seçenekler arasından yalnızca Gül (III) bulunduğundan doğru cevap C'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: true },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
    ],
  },
  // ── Soru 2 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5A +
      "<p><b>Buna göre;</b><br>I. Ali,<br>II. Buket,<br>III. Can<br><b>adlı öğrencilerden hangileri cumartesi etüt almış olabilir?</b></p>",
    diff: 2,
    expl:
      "Çözüm tablosuna göre cumartesi: Demet (fizik), Ali (matematik), Can veya Gül (Türkçe); pazar: Emre (fizik), Buket ve Halil (matematik), Gül veya Can (Türkçe). Ali kesinlikle cumartesi etüt almıştır (I ✓). Buket kesinlikle pazar günündedir (II ✗). Can hem cumartesi hem pazar olasılığını korumaktadır (III ✓). Doğru cevap D'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "I ve II", ok: false },
      { text: "I ve III", ok: true },
      { text: "II ve III", ok: false },
    ],
  },
  // ── Soru 3 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5A +
      "<p><b>Tüm öğrencilerin hangi gün, hangi dersten etüt aldığının bilinmesi için aşağıdakilerden hangisinin bilinmesi yeterlidir?</b></p>",
    diff: 2,
    expl:
      "Tabloda yalnızca Can ile Gül'ün hangi gün etüt aldığı belirsizdir; ikisi farklı günlerde Türkçeden almaktadır. 'Demet ve Gül'ün aynı gün etüt aldığı' bilinirse, Demet cumartesi olduğundan Gül de cumartesi, Can ise pazar olur ve tüm tablo kesinleşir. Doğru cevap B'dir.",
    answers: [
      { text: "Ali ve Demet'in aynı gün etüt aldığının", ok: false },
      { text: "Demet ve Gül'ün aynı gün etüt aldığının", ok: true },
      { text: "Ali ve Halil'in aynı dersten etüt aldığının", ok: false },
      { text: "Demet ile Gül'ün aynı dersten etüt aldığının", ok: false },
      { text: "Gül ve Halil'in aynı dersten etüt aldığının", ok: false },
    ],
  },
  // ── Soru 4 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5A +
      "<p><b>Can ile Halil'in aynı gün etüt aldığı biliniyorsa aşağıdakilerden hangisi doğrudur?</b></p>",
    diff: 2,
    expl:
      "Halil pazar günü Buket ile birlikte matematikten etüt almaktadır. Can ve Halil aynı gündeyse Can da pazar günü etüt almıştır. Bu durumda Gül cumartesi, Türkçeden etüt almıştır. Doğru cevap E'dir.",
    answers: [
      { text: "Ali, cumartesi günü fizik dersinden etüt almıştır.", ok: false },
      { text: "Ali, pazar günü fizik dersinden etüt almıştır.", ok: false },
      { text: "Emre, cumartesi günü fizik dersinden etüt almıştır.", ok: false },
      { text: "Gül, pazar günü fizik dersinden etüt almıştır.", ok: false },
      { text: "Gül, cumartesi günü Türkçe dersinden etüt almıştır.", ok: true },
    ],
  },
  // ── Soru 5 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5B +
      "<p><b>Buna göre hem Erkan'ın hem Hüseyin'in;</b><br>I. K,<br>II. L,<br>III. M<br><b>adlı kitaplardan hangilerini hangi gün incelediği kesin olarak bilinmektedir?</b></p>",
    diff: 3,
    expl:
      "Her iki olasılıkta da Erkan'ın düzeni: L(Pzt), N(Sal), R(Çar), M(Per), P(Cum) şeklinde sabittir; yalnızca son iki gün K ve S yer değiştirebilir. Hüseyin için: P(Pzt), M(Sal), R(Çar), N(Per) sabittir. Her iki olasılıkta L'yi Erkan pazartesi, Hüseyin pazar incelemiştir (kesin, II ✓). M'yi Erkan perşembe, Hüseyin salı incelemiştir (kesin, III ✓). K'nın konumu Hüseyin için değişkendir (I ✗). Doğru cevap E'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız II", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: true },
    ],
  },
  // ── Soru 6 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5B +
      "<p><b>Buna göre Erkan ve Hüseyin;</b><br>I. K,<br>II. R,<br>III. S<br><b>adlı kitaplardan hangilerini aynı gün incelemiş olabilir?</b></p>",
    diff: 3,
    expl:
      "Üçüncü sıra (Çarşamba) her iki olasılıkta da R'dir; R her zaman aynı gün incelenmektedir (II ✓). I. olasılıkta altıncı sıra K olduğundan K aynı gün incelenebilir (I ✓). II. olasılıkta altıncı sıra S olduğundan S de aynı gün incelenebilir (III ✓). Dolayısıyla K, R ve S'nin tümü aynı gün incelemiş olabilir. Doğru cevap E'dir.",
    answers: [
      { text: "Yalnız I", ok: false },
      { text: "Yalnız III", ok: false },
      { text: "I ve II", ok: false },
      { text: "II ve III", ok: false },
      { text: "I, II ve III", ok: true },
    ],
  },
  // ── Soru 7 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5B +
      "<p><b>Buna göre, Hüseyin aşağıdaki kitaplardan hangisini art arda incelemiştir?</b></p>",
    diff: 3,
    expl:
      "Her iki olasılıkta da Hüseyin'in düzeni başından: P(Pzt), M(Sal), R(Çar), N(Per) şeklindedir. R Çarşamba (3. gün), N Perşembe (4. gün) olduğundan R ile N art arda incelenmiştir. Bu sonuç her iki olasılıkta da sabittir. Doğru cevap D'dir.",
    answers: [
      { text: "R ile S", ok: false },
      { text: "S ile L", ok: false },
      { text: "S ile N", ok: false },
      { text: "R ile N", ok: true },
      { text: "N ile K", ok: false },
    ],
  },
  // ── Soru 8 ─────────────────────────────────────────────────────────────
  {
    text:
      CTX5B +
      "<p><b>Her iki redaktörün de hangi gün hangi kitabı incelediğinin belirlenebilmesi için aşağıdakilerden hangisinin bilinmesi gerekir?</b></p>",
    diff: 3,
    expl:
      "İki olasılık arasındaki fark Hüseyin'in 5. ve 6. günüdür: I. olasılıkta S(Cum), K(Cts); II. olasılıkta K(Cum), S(Cts). I. olasılıkta Hüseyin K(Cts=6.) ile L(Pzr=7.) art ardadır. II. olasılıkta ise K(Cum=5.) ile L(Pzr=7.) arasında S bulunduğundan art arda değildir. 'Hüseyin'in K ile L adlı kitapları art arda incelediği' bilinirse II. olasılık elenir ve I. olasılık kesinleşerek tablo tamamen netleşir. Doğru cevap B'dir.",
    answers: [
      { text: "Erkan'ın M ile P adlı kitapları art arda incelediğinin", ok: false },
      { text: "Hüseyin'in K ile L adlı kitapları art arda incelediğinin", ok: true },
      { text: "Erkan'ın N ile S adlı kitapları art arda incelediğinin", ok: false },
      { text: "Hüseyin'in K ile S adlı kitapları art arda incelediğinin", ok: false },
      { text: "Erkan'ın S ile K adlı kitapları art arda incelediğinin", ok: false },
    ],
  },
];