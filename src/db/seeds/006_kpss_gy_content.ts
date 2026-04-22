import type { Knex } from "knex";

// ============================================================
// SEED 006 — KPSS Genel Yetenek İçeriği
// ============================================================
// Yol: exam_groups(KPSS) → exam_types(KPSS Lisans/Önlisans/Ortaöğretim)
//        → modules(Genel Yetenek) → courses(Matematik, Türkçe)
//            → topics → steps → tests → questions + answers
//
// Matematik:
//   Topic: "Temel Matematik"
//     Step 1: "Sayı Sistemleri" → 2 test (MC + TF)
//     Step 2: "Oran ve Orantı"  → 2 test (MC + fill_blank)
//
// Türkçe:
//   Topic: "Dil Bilgisi"
//     Step 1: "Sözcük Türleri" → 2 test (MC + TF)
//     Step 2: "Cümle Yapısı"   → 2 test (MC + fill_blank)
//
// Idempotent: "Temel Matematik" ve "Dil Bilgisi" topic varsa atlanır.
// ============================================================

interface InsertedRow { id: string }

async function ins(knex: Knex, table: string, data: object): Promise<InsertedRow> {
  const [row] = await knex(table).insert(data).returning("*");
  return row as InsertedRow;
}

// ─── Matematik Questions ─────────────────────────────────────────────────────

type McQ = { text: string; diff: number; expl: string; hint?: string; answers: { text: string; ok: boolean }[] };
type TfQ = { text: string; diff: number; expl: string; isTrue: boolean };
type FbQ = { text: string; diff: number; expl: string; acceptable: string[]; words: string[] };

// Step 1 – Test 1 – Multiple Choice (Sayı Sistemleri d1-2)
const MAT_S1_T1: McQ[] = [
  {
    text: "12'nin asal çarpanlarının toplamı kaçtır?",
    diff: 1, expl: "12 = 2² × 3. Asal çarpanlar: 2 ve 3. Toplam = 2 + 3 = 5.",
    hint: "Önce asal çarpanlara ayır.",
    answers: [{ text: "5", ok: true }, { text: "7", ok: false }, { text: "6", ok: false }, { text: "9", ok: false }],
  },
  {
    text: "EBOB(12, 18) kaçtır?",
    diff: 1, expl: "12 = 2²×3, 18 = 2×3². EBOB = 2×3 = 6.",
    answers: [{ text: "4", ok: false }, { text: "6", ok: true }, { text: "9", ok: false }, { text: "12", ok: false }],
  },
  {
    text: "EKOK(4, 6) kaçtır?",
    diff: 1, expl: "EKOK = 4×6 / EBOB(4,6) = 24/2 = 12.",
    answers: [{ text: "8", ok: false }, { text: "10", ok: false }, { text: "12", ok: true }, { text: "24", ok: false }],
  },
  {
    text: "Bir sayı 5'e bölündüğünde 2 kalıyor, 7'ye bölündüğünde 3 kalıyor. Bu sayı kaç olabilir?",
    diff: 2, expl: "5k+2 = 7m+3. k=5 → 27; 27 mod 7 = 6 (hayır). k=2 → 12; 12 mod 7 = 5 (hayır). k=1 → 7; 7 mod 7 = 0 (hayır). 17: 17 mod 5 = 2 ✓, 17 mod 7 = 3 ✓",
    hint: "Deneme-yanılma veya denklem kur.",
    answers: [{ text: "12", ok: false }, { text: "17", ok: true }, { text: "22", ok: false }, { text: "27", ok: false }],
  },
  {
    text: "1'den 20'ye kadar olan çift sayıların toplamı kaçtır?",
    diff: 1, expl: "2+4+…+20 = 2×(1+2+…+10) = 2×55 = 110.",
    answers: [{ text: "90", ok: false }, { text: "100", ok: false }, { text: "110", ok: true }, { text: "120", ok: false }],
  },
  {
    text: "3⁴ × 3² / 3³ = ?",
    diff: 2, expl: "3^(4+2-3) = 3³ = 27.",
    answers: [{ text: "9", ok: false }, { text: "27", ok: true }, { text: "81", ok: false }, { text: "243", ok: false }],
  },
  {
    text: "√144 + √25 = ?",
    diff: 1, expl: "12 + 5 = 17.",
    answers: [{ text: "13", ok: false }, { text: "15", ok: false }, { text: "17", ok: true }, { text: "19", ok: false }],
  },
  {
    text: "Basamak değeri ile sayı değeri eşit olan tek basamaklı sayı hangisidir?",
    diff: 1, expl: "Tek basamaklı sayılarda basamak değeri = sayı değeri. Koşul zaten sağlanır, 5 doğru bir örnektir.",
    answers: [{ text: "0", ok: false }, { text: "5", ok: true }, { text: "10", ok: false }, { text: "15", ok: false }],
  },
  {
    text: "2^10 kaçtır?",
    diff: 1, expl: "2^10 = 1024.",
    answers: [{ text: "512", ok: false }, { text: "1000", ok: false }, { text: "1024", ok: true }, { text: "2048", ok: false }],
  },
  {
    text: "|-7| + |3| - |-2| = ?",
    diff: 1, expl: "7 + 3 - 2 = 8.",
    answers: [{ text: "6", ok: false }, { text: "7", ok: false }, { text: "8", ok: true }, { text: "12", ok: false }],
  },
];

// Step 1 – Test 2 – True/False (Sayı Sistemleri d2)
const MAT_S1_T2: TfQ[] = [
  { text: "Her asal sayı tek sayıdır.", diff: 2, expl: "2 asal ama çifttir — bu önerme yanlıştır.", isTrue: false },
  { text: "Bir sayının 9'a bölünebilmesi için rakamlar toplamının 9'a bölünebilmesi gerekir.", diff: 1, expl: "Doğru, 9'a bölünebilme kuralı.", isTrue: true },
  { text: "0 (sıfır) ne pozitif ne negatiftir.", diff: 1, expl: "Doğru. Sıfır, işaretsiz bir sayıdır.", isTrue: true },
  { text: "EBOB her zaman EKOK'dan büyüktür.", diff: 2, expl: "Yanlış. EBOB ≤ EKOK.", isTrue: false },
  { text: "İki asal sayının EBOB'u 1'dir.", diff: 1, expl: "Doğru. Asal sayılar sadece 1 ile bölünür.", isTrue: true },
  { text: "3^0 = 0.", diff: 1, expl: "Yanlış. Her sayının sıfırıncı kuvveti 1'dir.", isTrue: false },
  { text: "Negatif bir sayının karesi her zaman pozitiftir.", diff: 1, expl: "Doğru. (-a)² = a² > 0.", isTrue: true },
  { text: "100'den küçük asal sayıların sayısı 25'tir.", diff: 2, expl: "Doğru. 2,3,5,7,…,97 → 25 asal sayı.", isTrue: true },
  { text: "Bir sayı ile onun onikide biri arasındaki fark her zaman tam sayıdır.", diff: 2, expl: "Yanlış. 13 / 12 = 1,08... — tam değil.", isTrue: false },
  { text: "Çift sayıların toplamı her zaman çifttir.", diff: 1, expl: "Doğru. 2k + 2m = 2(k+m).", isTrue: true },
];

// Step 2 – Test 1 – Multiple Choice (Oran-Orantı d1-2)
const MAT_S2_T1: McQ[] = [
  {
    text: "3/4 = x/20 denkleminde x kaçtır?",
    diff: 1, expl: "x = 3×20/4 = 15.",
    answers: [{ text: "12", ok: false }, { text: "15", ok: true }, { text: "18", ok: false }, { text: "20", ok: false }],
  },
  {
    text: "5 işçi bir işi 12 günde bitiriyor. 4 işçi aynı işi kaç günde bitirir?",
    diff: 2, expl: "Ters orantı: 5×12 = 4×x → x = 15.",
    hint: "İşçi sayısı azaldıkça gün artar → ters orantı.",
    answers: [{ text: "12", ok: false }, { text: "14", ok: false }, { text: "15", ok: true }, { text: "16", ok: false }],
  },
  {
    text: "A:B = 2:3, B:C = 4:5 ise A:C kaçtır?",
    diff: 2, expl: "B ortak: B = 12. A:B = 8:12, B:C = 12:15. A:C = 8:15.",
    answers: [{ text: "2:5", ok: false }, { text: "8:15", ok: true }, { text: "4:5", ok: false }, { text: "6:10", ok: false }],
  },
  {
    text: "Bir arabanın hızı saatte 90 km. 4,5 saatte kaç km yol alır?",
    diff: 1, expl: "90 × 4,5 = 405 km.",
    answers: [{ text: "360", ok: false }, { text: "395", ok: false }, { text: "405", ok: true }, { text: "450", ok: false }],
  },
  {
    text: "15 liralık bir malın üstüne %20 kâr eklenirse satış fiyatı ne olur?",
    diff: 1, expl: "15 × 1,20 = 18 TL.",
    answers: [{ text: "17", ok: false }, { text: "18", ok: true }, { text: "19", ok: false }, { text: "20", ok: false }],
  },
  {
    text: "120'nin %35'i kaçtır?",
    diff: 1, expl: "120 × 0,35 = 42.",
    answers: [{ text: "36", ok: false }, { text: "40", ok: false }, { text: "42", ok: true }, { text: "48", ok: false }],
  },
  {
    text: "Bir sayının %40'ı 60 ise sayı kaçtır?",
    diff: 1, expl: "x × 0,40 = 60 → x = 150.",
    answers: [{ text: "120", ok: false }, { text: "140", ok: false }, { text: "150", ok: true }, { text: "160", ok: false }],
  },
  {
    text: "180 km yolu 2 saatte alan arabanın ortalama hızı nedir?",
    diff: 1, expl: "180 / 2 = 90 km/s.",
    answers: [{ text: "80", ok: false }, { text: "85", ok: false }, { text: "90", ok: true }, { text: "95", ok: false }],
  },
  {
    text: "A ve B, 3:5 oranında para paylaşıyor. Toplam 240 TL ise B'nin payı kaçtır?",
    diff: 2, expl: "B = 5/(3+5) × 240 = 150.",
    answers: [{ text: "90", ok: false }, { text: "120", ok: false }, { text: "150", ok: true }, { text: "180", ok: false }],
  },
  {
    text: "4 pompa bir havuzu 6 saatte dolduruyor. 6 pompa aynı havuzu kaç saatte doldurur?",
    diff: 2, expl: "Ters orantı: 4×6 = 6×x → x = 4.",
    answers: [{ text: "3", ok: false }, { text: "4", ok: true }, { text: "5", ok: false }, { text: "6", ok: false }],
  },
];

// Step 2 – Test 2 – Fill in the Blank (Oran-Orantı d2-3)
const MAT_S2_T2: FbQ[] = [
  {
    text: "5 metre kumaşın fiyatı 75 TL ise 8 metre kumaşın fiyatı ___ TL'dir.",
    diff: 2, expl: "1 metre = 15 TL, 8 metre = 120 TL.", acceptable: ["120"], words: ["100", "110", "120", "130"],
  },
  {
    text: "3:4 oranında bir toplam 35 ise küçük parça ___ olur.",
    diff: 2, expl: "3/(3+4) × 35 = 3/7 × 35 = 15.", acceptable: ["15"], words: ["12", "15", "20", "21"],
  },
  {
    text: "100'ün %25'i ___ sayısına eşittir.",
    diff: 1, expl: "100 × 0,25 = 25.", acceptable: ["25"], words: ["20", "25", "30", "40"],
  },
  {
    text: "300 km yolu 3 saatte giden aracın hızı ___ km/s'dir.",
    diff: 1, expl: "300 / 3 = 100.", acceptable: ["100"], words: ["80", "90", "100", "120"],
  },
  {
    text: "Bir ürün %20 indirimle 160 TL'ye satılıyor. Ürünün orijinal fiyatı ___ TL'dir.",
    diff: 3, expl: "x × 0,8 = 160 → x = 200.", acceptable: ["200"], words: ["180", "192", "200", "210"],
  },
];

// ─── Türkçe Questions ────────────────────────────────────────────────────────

// Step 1 – Test 1 – Multiple Choice (Sözcük Türleri d1-2)
const TUR_S1_T1: McQ[] = [
  {
    text: '"Güzel" sözcüğü aşağıdaki cümlelerin hangisinde sıfat görevindedir?',
    diff: 1, expl: '"Güzel çiçek" ifadesinde çiçeği nitelendirdiği için sıfattır.',
    answers: [
      { text: "Güzel çiçek aldı.", ok: true },
      { text: "Güzel konuştu.", ok: false },
      { text: "O güzel biridir.", ok: false },
      { text: "Güzel mi gittin?", ok: false },
    ],
  },
  {
    text: '"Ben" sözcüğü hangi sözcük türüdür?',
    diff: 1, expl: '"Ben" birinci tekil şahıs zamiridir.',
    answers: [{ text: "Ad", ok: false }, { text: "Zamir", ok: true }, { text: "Sıfat", ok: false }, { text: "Zarf", ok: false }],
  },
  {
    text: '"Hızlıca" sözcüğü hangi sözcük türüdür?',
    diff: 1, expl: 'Eylemi niteleyen sözcük zarftır. "Hızlıca" koşmak → fiil zarfı.',
    answers: [{ text: "Sıfat", ok: false }, { text: "Zarf", ok: true }, { text: "Bağlaç", ok: false }, { text: "Zamir", ok: false }],
  },
  {
    text: '"Ve" sözcüğü hangi türdendir?',
    diff: 1, expl: '"Ve" sözcükleri veya cümleleri birbirine bağlayan bağlaçtır.',
    answers: [{ text: "Edat", ok: false }, { text: "Ünlem", ok: false }, { text: "Bağlaç", ok: true }, { text: "Zarf", ok: false }],
  },
  {
    text: '"Ah!" sözcüğü hangi türdendir?',
    diff: 1, expl: '"Ah!" duygu ve heyecan bildiren ünlemdir.',
    answers: [{ text: "Bağlaç", ok: false }, { text: "Edat", ok: false }, { text: "Zarf", ok: false }, { text: "Ünlem", ok: true }],
  },
  {
    text: "Aşağıdakilerden hangisi somut addır?",
    diff: 2, expl: '"Kalem" elle tutulur, gözle görülür. Sevgi, umut, varlık soyuttur.',
    answers: [{ text: "Sevgi", ok: false }, { text: "Umut", ok: false }, { text: "Kalem", ok: true }, { text: "Varlık", ok: false }],
  },
  {
    text: '"Onlar" zamiri hangi kişiyi karşılar?',
    diff: 1, expl: '"Onlar" 3. çoğul şahıs zamiridir.',
    answers: [{ text: "1. çoğul şahıs", ok: false }, { text: "2. çoğul şahıs", ok: false }, { text: "3. tekil şahıs", ok: false }, { text: "3. çoğul şahıs", ok: true }],
  },
  {
    text: '"Koşmak" fiilinin kip eki almış biçimi aşağıdakilerden hangisidir?',
    diff: 2, expl: '"Koştu" geçmiş zaman kipiyle çekimlenmiştir.',
    answers: [{ text: "Koşma", ok: false }, { text: "Koştu", ok: true }, { text: "Koşucu", ok: false }, { text: "Koşarak", ok: false }],
  },
  {
    text: "Aşağıdakilerden hangisi eylem (fiil) değildir?",
    diff: 1, expl: '"Güzel" bir sıfattır; diğerleri eylem anlamı taşır.',
    answers: [{ text: "Yürümek", ok: false }, { text: "Güzel", ok: true }, { text: "Düşünmek", ok: false }, { text: "Gelmek", ok: false }],
  },
  {
    text: '"ile" sözcüğü hangi türdendir?',
    diff: 2, expl: '"ile" sözcükler arasında anlam ilişkisi kuran edattır.',
    answers: [{ text: "Bağlaç", ok: false }, { text: "Edat", ok: true }, { text: "Zarf", ok: false }, { text: "Zamir", ok: false }],
  },
];

// Step 1 – Test 2 – True/False (Sözcük Türleri d2)
const TUR_S1_T2: TfQ[] = [
  { text: "Sıfatlar isimleri niteler veya belirtir.", diff: 1, expl: "Doğru.", isTrue: true },
  { text: "Fiiller yalnızca iş bildiren sözcüklerdir.", diff: 2, expl: "Yanlış. Fiiller iş, oluş ve durum bildirir.", isTrue: false },
  { text: "\"Hızlı\" sözcüğü hem sıfat hem zarf olarak kullanılabilir.", diff: 2, expl: "Doğru. 'Hızlı araba' (sıfat) — 'Hızlı koştu' (zarf).", isTrue: true },
  { text: "Zamirler isimlerin yerini tutar.", diff: 1, expl: "Doğru.", isTrue: true },
  { text: "Ünlemler cümle içinde anlam taşırlar.", diff: 2, expl: "Doğru. 'Ah, ne güzelmiş!' cümlesinde 'Ah' üzüntü bildirir.", isTrue: true },
  { text: "Türkçede sözcük türü değişmez.", diff: 2, expl: "Yanlış. Sözcükler cümlede kullanımına göre tür değiştirebilir.", isTrue: false },
  { text: "Bağlaçlar tek başlarına kullanıldığında anlam taşır.", diff: 2, expl: "Yanlış. Bağlaçlar tek başına anlam taşımaz.", isTrue: false },
  { text: "\"Gelmek\" sözcüğü eylem (fiil) köküdür.", diff: 1, expl: "Doğru.", isTrue: true },
  { text: "Edatlar isimlerle birlikte kullanılır.", diff: 2, expl: "Doğru. Edatlar isimler ve zamirlerle ilişki kurar.", isTrue: true },
  { text: "\"Bizim\" zamiri iyelik eklidir.", diff: 2, expl: "Doğru. 'Biz' zamirinin iyelik biçimi 'bizim'dir.", isTrue: true },
];

// Step 2 – Test 1 – Multiple Choice (Cümle Yapısı d1-2)
const TUR_S2_T1: McQ[] = [
  {
    text: '"Kitabı okuyorum." cümlesinin yüklemi hangisidir?',
    diff: 1, expl: '"okuyorum" cümlenin yüklemidir (fiil).',
    answers: [{ text: "Kitabı", ok: false }, { text: "okuyorum", ok: true }, { text: "Ben", ok: false }, { text: "Kitap", ok: false }],
  },
  {
    text: '"Ali eve geldi." cümlesinde özne hangisidir?',
    diff: 1, expl: '"Ali" eylemi yapan kişidir, öznedir.',
    answers: [{ text: "eve", ok: false }, { text: "geldi", ok: false }, { text: "Ali", ok: true }, { text: "eve geldi", ok: false }],
  },
  {
    text: '"Masanın üstünde kalem var." cümlesinde yer tamlayıcısı hangisidir?',
    diff: 2, expl: '"Masanın üstünde" yer bildirir → yer tamlayıcısı.',
    answers: [{ text: "Masanın", ok: false }, { text: "kalem", ok: false }, { text: "var", ok: false }, { text: "Masanın üstünde", ok: true }],
  },
  {
    text: "Aşağıdakilerden hangisi basit cümledir?",
    diff: 2, expl: '"Yağmur yağdı." tek yargılı, yani basit cümledir.',
    answers: [
      { text: "Yağmur yağdı ve biz ıslandık.", ok: false },
      { text: "Yağmur yağdı.", ok: true },
      { text: "Yağmur yağsa da çıktım.", ok: false },
      { text: "Hem yağmur yağdı hem kar.", ok: false },
    ],
  },
  {
    text: '"Dün sinemaya gittim." cümlesinde zaman zarfı hangisidir?',
    diff: 1, expl: '"Dün" eylemi zaman açısından niteler → zaman zarfı.',
    answers: [{ text: "sinemaya", ok: false }, { text: "gittim", ok: false }, { text: "Dün", ok: true }, { text: "Ben", ok: false }],
  },
  {
    text: '"Güzel bir kitap okudum." cümlesinde nesne hangisidir?',
    diff: 2, expl: '"Kitap" (belirtisiz nesne), okunan şey.',
    answers: [{ text: "Güzel", ok: false }, { text: "bir", ok: false }, { text: "kitap", ok: true }, { text: "okudum", ok: false }],
  },
  {
    text: "Sıralı cümle hangisidir?",
    diff: 2, expl: 'Sıralı cümlede yüklemler yan yana virgülle sıralanır.',
    answers: [
      { text: "Hem çalıştı hem dinlendi.", ok: false },
      { text: "Koştu, bağırdı, döndü.", ok: true },
      { text: "Çalışırsa başarır.", ok: false },
      { text: "Çalışmak iyidir.", ok: false },
    ],
  },
  {
    text: '"Ne kitap okudum ne ders çalıştım." cümlesinde bağlaç türü nedir?',
    diff: 2, expl: '"Ne…ne…" olumsuzluk bildiren bağlaç çiftidir.',
    answers: [{ text: "Olumlu bağlaç", ok: false }, { text: "Sıralama bağlacı", ok: false }, { text: "Karşıtlık bağlacı", ok: false }, { text: "Olumsuz bağlaç çifti", ok: true }],
  },
  {
    text: "Yüklem fiil olmayan cümle hangi türdendir?",
    diff: 2, expl: 'Yüklemi ad veya ad soylu sözcük olan cümle "isim cümlesi"dir.',
    answers: [{ text: "Fiil cümlesi", ok: false }, { text: "İsim cümlesi", ok: true }, { text: "Sıralı cümle", ok: false }, { text: "Bağlı cümle", ok: false }],
  },
  {
    text: '"Bana kitap ver." cümlesinin türü nedir?',
    diff: 1, expl: 'Emir kipiyle kurulan cümle "emir cümlesi"dir.',
    answers: [{ text: "Soru cümlesi", ok: false }, { text: "Emir cümlesi", ok: true }, { text: "Ünlem cümlesi", ok: false }, { text: "Şart cümlesi", ok: false }],
  },
];

// Step 2 – Test 2 – Fill in the Blank (Cümle Yapısı d2-3)
const TUR_S2_T2: FbQ[] = [
  {
    text: "Cümlede eylemi yapan veya olan kişi ya da varlığa ___ denir.",
    diff: 1, expl: "Özne.", acceptable: ["özne", "Özne"], words: ["özne", "yüklem", "nesne", "tümleç"],
  },
  {
    text: "Cümlenin en temel ögesi ve olmazsa olmazı ___'dir.",
    diff: 2, expl: "Yüklem olmadan cümle kurulamaz.", acceptable: ["yüklem", "Yüklem"], words: ["özne", "yüklem", "nesne", "zarf"],
  },
  {
    text: "\"Eve gittim.\" cümlesinde \"eve\" sözcüğü ___ görevindedir.",
    diff: 2, expl: "Yer tamlayıcısı (dolaylı tümleç).", acceptable: ["yer tamlayıcısı", "dolaylı tümleç"], words: ["özne", "nesne", "yer tamlayıcısı", "zarf tümleci"],
  },
  {
    text: "Birden fazla yargı içeren cümleye ___ cümle denir.",
    diff: 2, expl: "Birleşik cümle.", acceptable: ["birleşik", "Birleşik"], words: ["basit", "birleşik", "sıralı", "bağlı"],
  },
  {
    text: "\"Dün\" sözcüğü cümlede ___ görevi üstlenir.",
    diff: 1, expl: "Zaman zarfı.", acceptable: ["zaman zarfı", "zarf"], words: ["sıfat", "zarf", "zaman zarfı", "nesne"],
  },
];

// ─── Seeding Function ────────────────────────────────────────────────────────

async function seedMatematik(knex: Knex, courseId: string): Promise<void> {
  // Topic
  const topic = await ins(knex, "topics", {
    course_id: courseId,
    name: "Temel Matematik",
    description: "Sayı sistemleri ve oran-orantı konuları",
    icon_url: "🔢",
    sort_order: 1,
  });

  // ─ Step 1: Sayı Sistemleri ─
  const step1 = await ins(knex, "steps", {
    topic_id: topic.id,
    name: "Sayı Sistemleri",
    description: "Sayılar ve işlemler",
    sort_order: 1,
    tests_required: 2,
    step_type: "lesson",
  });

  // Test 1 – MC
  const t1 = await ins(knex, "tests", { step_id: step1.id, sort_order: 1, name: "Test 1" });
  for (let i = 0; i < MAT_S1_T1.length; i++) {
    const q = MAT_S1_T1[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step1.id,
      test_id: t1.id,
      question_text: q.text,
      question_type: "multiple_choice",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      hint: q.hint ?? null,
      sort_order: i + 1,
      point_value: 1,
    });
    for (const a of q.answers) {
      await knex("answers").insert({ question_id: question.id, answer_text: a.text, is_correct: a.ok });
    }
  }

  // Test 2 – TF
  const t2 = await ins(knex, "tests", { step_id: step1.id, sort_order: 2, name: "Test 2" });
  for (let i = 0; i < MAT_S1_T2.length; i++) {
    const q = MAT_S1_T2[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step1.id,
      test_id: t2.id,
      question_text: q.text,
      question_type: "true_false",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
    });
    await knex("answers").insert([
      { question_id: question.id, answer_text: "Doğru", is_correct: q.isTrue },
      { question_id: question.id, answer_text: "Yanlış", is_correct: !q.isTrue },
    ]);
  }

  // ─ Step 2: Oran ve Orantı ─
  const step2 = await ins(knex, "steps", {
    topic_id: topic.id,
    name: "Oran ve Orantı",
    description: "Oran, yüzde ve hız-zaman soruları",
    sort_order: 2,
    tests_required: 2,
    step_type: "lesson",
  });

  // Test 1 – MC
  const t3 = await ins(knex, "tests", { step_id: step2.id, sort_order: 1, name: "Test 1" });
  for (let i = 0; i < MAT_S2_T1.length; i++) {
    const q = MAT_S2_T1[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step2.id,
      test_id: t3.id,
      question_text: q.text,
      question_type: "multiple_choice",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      hint: q.hint ?? null,
      sort_order: i + 1,
      point_value: 1,
    });
    for (const a of q.answers) {
      await knex("answers").insert({ question_id: question.id, answer_text: a.text, is_correct: a.ok });
    }
  }

  // Test 2 – Fill Blank
  const t4 = await ins(knex, "tests", { step_id: step2.id, sort_order: 2, name: "Test 2" });
  for (let i = 0; i < MAT_S2_T2.length; i++) {
    const q = MAT_S2_T2[i];
    await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step2.id,
      test_id: t4.id,
      question_text: q.text,
      question_type: "fill_blank",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
      type_data: JSON.stringify({ acceptable_answers: q.acceptable, word_options: q.words }),
    });
  }
}

async function seedTurkce(knex: Knex, courseId: string): Promise<void> {
  // Topic
  const topic = await ins(knex, "topics", {
    course_id: courseId,
    name: "Dil Bilgisi",
    description: "Sözcük türleri ve cümle yapısı",
    icon_url: "📝",
    sort_order: 1,
  });

  // ─ Step 1: Sözcük Türleri ─
  const step1 = await ins(knex, "steps", {
    topic_id: topic.id,
    name: "Sözcük Türleri",
    description: "Ad, sıfat, zamir, fiil ve diğerleri",
    sort_order: 1,
    tests_required: 2,
    step_type: "lesson",
  });

  const t1 = await ins(knex, "tests", { step_id: step1.id, sort_order: 1, name: "Test 1" });
  for (let i = 0; i < TUR_S1_T1.length; i++) {
    const q = TUR_S1_T1[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step1.id,
      test_id: t1.id,
      question_text: q.text,
      question_type: "multiple_choice",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
    });
    for (const a of q.answers) {
      await knex("answers").insert({ question_id: question.id, answer_text: a.text, is_correct: a.ok });
    }
  }

  const t2 = await ins(knex, "tests", { step_id: step1.id, sort_order: 2, name: "Test 2" });
  for (let i = 0; i < TUR_S1_T2.length; i++) {
    const q = TUR_S1_T2[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step1.id,
      test_id: t2.id,
      question_text: q.text,
      question_type: "true_false",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
    });
    await knex("answers").insert([
      { question_id: question.id, answer_text: "Doğru", is_correct: q.isTrue },
      { question_id: question.id, answer_text: "Yanlış", is_correct: !q.isTrue },
    ]);
  }

  // ─ Step 2: Cümle Yapısı ─
  const step2 = await ins(knex, "steps", {
    topic_id: topic.id,
    name: "Cümle Yapısı",
    description: "Özne, yüklem, nesne ve tümleçler",
    sort_order: 2,
    tests_required: 2,
    step_type: "lesson",
  });

  const t3 = await ins(knex, "tests", { step_id: step2.id, sort_order: 1, name: "Test 1" });
  for (let i = 0; i < TUR_S2_T1.length; i++) {
    const q = TUR_S2_T1[i];
    const question = await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step2.id,
      test_id: t3.id,
      question_text: q.text,
      question_type: "multiple_choice",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
    });
    for (const a of q.answers) {
      await knex("answers").insert({ question_id: question.id, answer_text: a.text, is_correct: a.ok });
    }
  }

  const t4 = await ins(knex, "tests", { step_id: step2.id, sort_order: 2, name: "Test 2" });
  for (let i = 0; i < TUR_S2_T2.length; i++) {
    const q = TUR_S2_T2[i];
    await ins(knex, "questions", {
      topic_id: topic.id,
      step_id: step2.id,
      test_id: t4.id,
      question_text: q.text,
      question_type: "fill_blank",
      difficulty: q.diff,
      status: "approved",
      explanation: q.expl,
      sort_order: i + 1,
      point_value: 1,
      type_data: JSON.stringify({ acceptable_answers: q.acceptable, word_options: q.words }),
    });
  }
}

// ─── Main Export ─────────────────────────────────────────────────────────────

export async function seed(knex: Knex): Promise<void> {
  // Idempotent guard
  const existing = await knex("topics").whereIn(
    "name", ["Temel Matematik", "Dil Bilgisi"]
  ).select("name");
  if (existing.length > 0) {
    console.log("006: KPSS Genel Yetenek içeriği zaten mevcut, atlanıyor.");
    return;
  }

  // Find all KPSS Genel Yetenek modules (one per exam type: Lisans, Önlisans, Ortaöğretim)
  const gyModules = await knex("modules")
    .join("exam_types", "modules.exam_type_id", "exam_types.id")
    .join("exam_groups", "exam_types.exam_group_id", "exam_groups.id")
    .where("exam_groups.slug", "kpss")
    .where("modules.name", "Genel Yetenek")
    .where("modules.is_active", true)
    .select("modules.id as module_id");

  if (gyModules.length === 0) {
    throw new Error("006: KPSS Genel Yetenek modülü bulunamadı — 003_exam_structure seed çalıştırıldı mı?");
  }

  for (const mod of gyModules) {
    // Matematik course in this module
    const matCourse = await knex("courses")
      .where({ module_id: mod.module_id, name: "Matematik" })
      .first();
    if (matCourse) await seedMatematik(knex, matCourse.id);

    // Türkçe course in this module
    const turCourse = await knex("courses")
      .where({ module_id: mod.module_id, name: "Türkçe" })
      .first();
    if (turCourse) await seedTurkce(knex, turCourse.id);
  }

  console.log("006: KPSS Genel Yetenek içeriği eklendi.");
}
