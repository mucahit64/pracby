import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Find the Yaş Problemleri step
  const yasStep = await knex("steps").where({ name: "Yaş Problemleri" }).first();
  if (!yasStep) return;

  // Check if boss test (sort_order=4) already exists
  const existing = await knex("tests")
    .where({ step_id: yasStep.id, sort_order: 4 })
    .first();
  if (existing) return;

  // Create boss test (4th test, after the 3 required tests)
  const [bossTest] = await knex("tests")
    .insert({
      step_id: yasStep.id,
      sort_order: 4,
      name: "Yaş Problemleri Final Testi",
    })
    .returning("*");

  let sortOrder = 0;

  // === 4× MULTIPLE CHOICE (1×d1, 2×d2, 1×d3) ===
  const mcQuestions: {
    text: string;
    difficulty: number;
    explanation: string;
    options: { text: string; correct: boolean }[];
  }[] = [
    {
      text: "Bir baba, oğlundan 30 yaş büyüktür. 5 yıl sonra babanın yaşı oğlunun yaşının 3 katı olacaktır. Baba şu an kaç yaşındadır?",
      difficulty: 1,
      explanation: "Oğul = x, Baba = x+30. 5 yıl sonra: x+35 = 3(x+5) → x+35 = 3x+15 → 2x = 20 → x = 10. Baba = 40.",
      options: [
        { text: "35", correct: false },
        { text: "40", correct: true },
        { text: "45", correct: false },
        { text: "50", correct: false },
      ],
    },
    {
      text: "Ali ve Veli'nin yaşları toplamı 48'dir. Ali, Veli'den 6 yaş büyüktür. 4 yıl önce Ali kaç yaşındaydı?",
      difficulty: 2,
      explanation: "A+V=48, A=V+6 → 2V+6=48 → V=21, A=27. 4 yıl önce Ali = 27-4 = 23.",
      options: [
        { text: "21", correct: false },
        { text: "23", correct: true },
        { text: "25", correct: false },
        { text: "27", correct: false },
      ],
    },
    {
      text: "Bir annenin yaşı, kızının yaşının 4 katıdır. 8 yıl sonra annenin yaşı kızının yaşının 2 katından 4 fazla olacaktır. Anne şu an kaç yaşındadır?",
      difficulty: 2,
      explanation: "Kız = x, Anne = 4x. 8 yıl sonra: 4x+8 = 2(x+8)+4 → 4x+8 = 2x+20 → 2x = 12 → x = 6. Anne = 24.",
      options: [
        { text: "20", correct: false },
        { text: "24", correct: true },
        { text: "28", correct: false },
        { text: "32", correct: false },
      ],
    },
    {
      text: "Üç kardeşin yaş ortalaması 18'dir. Büyük kardeş ortancanın 2 katı, küçük kardeş ortancadan 6 yaş küçüktür. Ortancanın yaşı kaçtır?",
      difficulty: 3,
      explanation: "Ortanca = x, Büyük = 2x, Küçük = x-6. Toplam = 4x-6 = 54 → 4x = 60 → x = 15.",
      options: [
        { text: "12", correct: false },
        { text: "14", correct: false },
        { text: "15", correct: true },
        { text: "18", correct: false },
      ],
    },
  ];

  for (const q of mcQuestions) {
    sortOrder++;
    const [question] = await knex("questions")
      .insert({
        topic_id: yasStep.topic_id,
        step_id: yasStep.id,
        test_id: bossTest.id,
        question_text: q.text,
        question_type: "multiple_choice",
        difficulty: q.difficulty,
        status: "approved",
        point_value: 10,
        explanation: q.explanation,
        sort_order: sortOrder,
      })
      .returning("*");

    await knex("answers").insert(
      q.options.map((o) => ({
        question_id: question.id,
        answer_text: o.text,
        is_correct: o.correct,
      })),
    );
  }

  // === 3× TRUE/FALSE (2×d2, 1×d3) ===
  const tfQuestions: {
    text: string;
    isTrue: boolean;
    difficulty: number;
    explanation: string;
  }[] = [
    {
      text: "İki kardeşin yaşları toplamı 36 ve farkı 8 ise küçük kardeşin yaşı 14'tür.",
      isTrue: true,
      difficulty: 2,
      explanation: "B+K=36, B-K=8 → 2K=28 → K=14. ✓",
    },
    {
      text: "Bir kişinin 6 yıl önceki yaşının 3 katı, şimdiki yaşına eşitse bu kişi 9 yaşındadır.",
      isTrue: true,
      difficulty: 2,
      explanation: "3(x-6) = x → 3x-18 = x → 2x = 18 → x = 9. ✓",
    },
    {
      text: "Anne ve kızı arasındaki yaş farkı sabit kalmakla birlikte yaş oranları da her zaman sabittir.",
      isTrue: false,
      difficulty: 3,
      explanation: "Yaş farkı sabittir ancak oran değişir. Örn: 30/10=3, ama 40/20=2.",
    },
  ];

  for (const q of tfQuestions) {
    sortOrder++;
    const [question] = await knex("questions")
      .insert({
        topic_id: yasStep.topic_id,
        step_id: yasStep.id,
        test_id: bossTest.id,
        question_text: q.text,
        question_type: "true_false",
        difficulty: q.difficulty,
        status: "approved",
        point_value: 10,
        explanation: q.explanation,
        sort_order: sortOrder,
      })
      .returning("*");

    await knex("answers").insert([
      { question_id: question.id, answer_text: "Doğru", is_correct: q.isTrue },
      { question_id: question.id, answer_text: "Yanlış", is_correct: !q.isTrue },
    ]);
  }

  // === 3× FILL_BLANK (1×d1, 1×d2, 1×d3) ===
  const fillQuestions: {
    text: string;
    acceptable: string[];
    wordOptions: string[];
    difficulty: number;
    explanation: string;
  }[] = [
    {
      text: "Baba ve oğlunun yaşları toplamı 50, farkı 30 ise oğlun yaşı ______ 'dir.",
      acceptable: ["10"],
      wordOptions: ["8", "10", "12", "15"],
      difficulty: 1,
      explanation: "B+O=50, B-O=30 → 2O=20 → O=10.",
    },
    {
      text: "3 yıl sonra yaşı şimdiki yaşının 2 katından 1 eksik olacak biri şimdi ______ yaşındadır.",
      acceptable: ["4"],
      wordOptions: ["3", "4", "5", "6"],
      difficulty: 2,
      explanation: "x+3 = 2x-1 → x = 4.",
    },
    {
      text: "A, B'den 8 yaş büyük; C, A'dan 5 yaş küçüktür. B 11 ise C ______ yaşındadır.",
      acceptable: ["14"],
      wordOptions: ["12", "13", "14", "16"],
      difficulty: 3,
      explanation: "B=11, A=11+8=19, C=19-5=14.",
    },
  ];

  for (const q of fillQuestions) {
    sortOrder++;
    await knex("questions").insert({
      topic_id: yasStep.topic_id,
      step_id: yasStep.id,
      test_id: bossTest.id,
      question_text: q.text,
      question_type: "fill_blank",
      difficulty: q.difficulty,
      status: "approved",
      point_value: 10,
      explanation: q.explanation,
      sort_order: sortOrder,
      type_data: JSON.stringify({
        acceptable_answers: q.acceptable,
        word_options: q.wordOptions,
      }),
    });
  }

  // === 3× MATCHING (1×d2, 2×d3) ===
  const matchingQuestions: {
    text: string;
    difficulty: number;
    explanation: string;
    pairs: { left: string; right: string }[];
  }[] = [
    {
      text: "Her yaş ifadesini doğru değişken karşılığıyla eşleştirin.",
      difficulty: 2,
      explanation: "Temel yaş cebiri: geçmiş=çıkarma, gelecek=toplama, kat=çarpma.",
      pairs: [
        { left: "x yıl sonraki yaşı (y)", right: "y + x" },
        { left: "x yıl önceki yaşı (y)", right: "y − x" },
        { left: "Yaşının 3 katı (y)", right: "3y" },
        { left: "Yaşının yarısı (y)", right: "y / 2" },
      ],
    },
    {
      text: "Aile bireylerini yaşlarıyla eşleştirin. (Anne=Baba−3, Çocuk=Baba/4, Baba=40)",
      difficulty: 3,
      explanation: "Baba=40, Anne=37, Çocuk=10.",
      pairs: [
        { left: "Baba", right: "40" },
        { left: "Anne", right: "37" },
        { left: "Çocuk", right: "10" },
        { left: "Anne-Çocuk farkı", right: "27" },
      ],
    },
    {
      text: "Problemi çözüm adımlarıyla eşleştirin: A, B'den 5 yaş büyük. 3 yıl sonra toplamları 31.",
      difficulty: 3,
      explanation: "A=B+5; (B+5+3)+(B+3)=31 → 2B+11=31 → B=10, A=15.",
      pairs: [
        { left: "B'nin yaşı", right: "10" },
        { left: "A'nın yaşı", right: "15" },
        { left: "Denklem", right: "2B + 11 = 31" },
        { left: "Toplam (3 yıl sonra)", right: "31" },
      ],
    },
  ];

  for (const q of matchingQuestions) {
    sortOrder++;
    await knex("questions").insert({
      topic_id: yasStep.topic_id,
      step_id: yasStep.id,
      test_id: bossTest.id,
      question_text: q.text,
      question_type: "matching",
      difficulty: q.difficulty,
      status: "approved",
      point_value: 10,
      explanation: q.explanation,
      sort_order: sortOrder,
      type_data: JSON.stringify({ pairs: q.pairs }),
    });
  }

  // === 2× ORDERING (1×d2, 1×d3) ===
  const orderingQuestions: {
    text: string;
    difficulty: number;
    explanation: string;
    items: { text: string; position: number }[];
  }[] = [
    {
      text: "Yaş problemini çözmek için adımları doğru sıraya koyun.",
      difficulty: 2,
      explanation: "1) Değişken tanımla → 2) İlişkiyi denklemle yaz → 3) Denklemi çöz → 4) Sonucu doğrula.",
      items: [
        { text: "Yaşları x, y gibi değişkenlerle ifade et", position: 1 },
        { text: "Verilen bilgilerle denklemi kur", position: 2 },
        { text: "Denklemi çözerek değişkenleri bul", position: 3 },
        { text: "Bulunan değerleri soruda kontrol et", position: 4 },
      ],
    },
    {
      text: "Aile üyelerini en gençten en yaşlıya sıralayın. (Dede=72, Baba=40, Anne=38, Çocuk=12, Bebek=1)",
      difficulty: 3,
      explanation: "Bebek(1) → Çocuk(12) → Anne(38) → Baba(40) → Dede(72).",
      items: [
        { text: "Bebek — 1 yaş", position: 1 },
        { text: "Çocuk — 12 yaş", position: 2 },
        { text: "Anne — 38 yaş", position: 3 },
        { text: "Baba — 40 yaş", position: 4 },
        { text: "Dede — 72 yaş", position: 5 },
      ],
    },
  ];

  for (const q of orderingQuestions) {
    sortOrder++;
    await knex("questions").insert({
      topic_id: yasStep.topic_id,
      step_id: yasStep.id,
      test_id: bossTest.id,
      question_text: q.text,
      question_type: "ordering",
      difficulty: q.difficulty,
      status: "approved",
      point_value: 10,
      explanation: q.explanation,
      sort_order: sortOrder,
      type_data: JSON.stringify({ items: q.items }),
    });
  }
}
