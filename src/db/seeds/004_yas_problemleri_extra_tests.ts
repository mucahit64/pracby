import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Find the Yaş Problemleri step
  const yasStep = await knex("steps").where({ name: "Yaş Problemleri" }).first();
  if (!yasStep) return;

  // tests_required = 3 (3 normal test; final is step_final type, not counted here)
  await knex("steps").where({ id: yasStep.id }).update({ tests_required: 3 });

  // Check existing tests
  const existingTests = await knex("tests").where({ step_id: yasStep.id }).select("sort_order");
  const existingSortOrders = new Set(existingTests.map((t) => t.sort_order));

  // === TEST 2: true_false ===
  if (!existingSortOrders.has(2)) {
    const [test2] = await knex("tests")
      .insert({
        step_id: yasStep.id,
        sort_order: 2,
        name: "Yaş Problemleri Test 2",
      })
      .returning("*");

    // true_false: question_text is a statement; "Doğru" answer is correct for true statements
    const test2Questions: { text: string; isTrue: boolean; explanation: string }[] = [
      {
        text: "İki kişinin yaş farkı hiçbir zaman değişmez.",
        isTrue: true,
        explanation: "İki kişinin yaş farkı sabit kalır; her yıl ikisi de 1 yaş büyür.",
      },
      {
        text: "A, B'den 6 yaş büyük ve B 10 yaşındaysa A 16 yaşındadır.",
        isTrue: true,
        explanation: "A = B + 6 = 10 + 6 = 16.",
      },
      {
        text: "Bir babanın yaşı oğlunun tam 4 katıysa, 4 yıl sonra da tam 4 katı olabilir.",
        isTrue: false,
        explanation: "4 yıl sonra B+4 = 4(O+4) → B=4O → 4O+4=4O+16 → 4=16, imkânsız.",
      },
      {
        text: "x + 5 = 2(x - 3) denkleminin çözümü x = 11'dir.",
        isTrue: true,
        explanation: "x+5=2x-6 → x=11. ✓",
      },
      {
        text: "Dede torunundan tam 60 yaş büyük olabilir.",
        isTrue: true,
        explanation: "Biyolojik olarak mümkün; örneğin dede 60 yaşında, torun 0.",
      },
      {
        text: "Anne ile kızı aynı yaşta olamaz.",
        isTrue: true,
        explanation: "Anne her zaman en az 12-14 yaş daha büyüktür.",
      },
      {
        text: "Şimdiki yaşı y olan birinin 10 yıl önceki yaşı (y + 10) şeklinde yazılır.",
        isTrue: false,
        explanation: "10 yıl önceki yaş = y - 10, toplama değil çıkarma yapılır.",
      },
      {
        text: "A ve B'nin yaşları toplamı 50 ve farkı 10 ise büyüğün yaşı 30'dur.",
        isTrue: true,
        explanation: "B+K=50, B-K=10 → 2B=60 → B=30. ✓",
      },
      {
        text: "5 yıl önce yaşların oranı 1:2 olan iki kişinin şimdiki yaşları toplamı kesin olarak çift sayıdır.",
        isTrue: false,
        explanation: "Yaşlar tek sayı da olabilir; örneğin 6 ve 11: tek+çift=tek (tek sayı).",
      },
      {
        text: "25 yaşında biri ile 5 yaşında birinin yaş oranı 5:1'dir.",
        isTrue: true,
        explanation: "25/5 = 5, oran 5:1. ✓",
      },
    ];

    for (let i = 0; i < test2Questions.length; i++) {
      const q = test2Questions[i];
      const [question] = await knex("questions")
        .insert({
          topic_id: yasStep.topic_id,
          step_id: yasStep.id,
          test_id: test2.id,
          question_text: q.text,
          question_type: "true_false",
          difficulty: 2,
          status: "approved",
          point_value: 10,
          explanation: q.explanation,
          sort_order: i + 1,
        })
        .returning("*");

      await knex("answers").insert([
        { question_id: question.id, answer_text: "Doğru", is_correct: q.isTrue },
        { question_id: question.id, answer_text: "Yanlış", is_correct: !q.isTrue },
      ]);
    }
  }

  // === TEST 3: fill_blank (5) + matching (3) + ordering (2) ===
  if (!existingSortOrders.has(3)) {
    const [test3] = await knex("tests")
      .insert({
        step_id: yasStep.id,
        sort_order: 3,
        name: "Yaş Problemleri Test 3",
      })
      .returning("*");

    // --- fill_blank questions (5 adet, word_options chip modu) ---
    const fillBlankQuestions = [
      {
        text: "Ali, Ayşe'den 5 yaş büyüktür. Ayşe 12 yaşındaysa Ali ______ yaşındadır.",
        acceptable: ["17"],
        wordOptions: ["15", "17", "19", "21"],
        explanation: "Ali = 12 + 5 = 17.",
      },
      {
        text: "İki kardeşin yaşları toplamı 24, yaşları farkı 4 ise büyüğün yaşı ______ 'dir.",
        acceptable: ["14"],
        wordOptions: ["10", "12", "14", "16"],
        explanation: "B+K=24, B-K=4 → 2B=28 → B=14.",
      },
      {
        text: "Bir kişinin 3 yıl sonraki yaşı şimdiki yaşının 2 katından 5 eksik olacaksa şimdiki yaşı ______ 'dir.",
        acceptable: ["8"],
        wordOptions: ["6", "7", "8", "9"],
        explanation: "x+3 = 2x-5 → x = 8.",
      },
      {
        text: "Baba şu an oğlunun 5 katı yaşındadır. Oğul 6 yaşındaysa babanın yaşı ______ 'dir.",
        acceptable: ["30"],
        wordOptions: ["24", "28", "30", "35"],
        explanation: "Baba = 5 × 6 = 30.",
      },
      {
        text: "10 yıl önce yaşı 15 olan birinin şimdiki yaşı ______ 'dir.",
        acceptable: ["25"],
        wordOptions: ["20", "23", "25", "28"],
        explanation: "15 + 10 = 25.",
      },
    ];

    for (let i = 0; i < fillBlankQuestions.length; i++) {
      const q = fillBlankQuestions[i];
      await knex("questions").insert({
        topic_id: yasStep.topic_id,
        step_id: yasStep.id,
        test_id: test3.id,
        question_text: q.text,
        question_type: "fill_blank",
        difficulty: 2,
        status: "approved",
        point_value: 10,
        explanation: q.explanation,
        sort_order: i + 1,
        type_data: JSON.stringify({
          acceptable_answers: q.acceptable,
          word_options: q.wordOptions,
        }),
      });
    }

    // --- matching questions (3 adet) ---
    const matchingQuestions = [
      {
        text: "Her ifadeyi doğru matematik işlemiyle eşleştirin.",
        explanation: "Yaş problemlerinde temel işlemler: büyük+fark=küçük vb.",
        pairs: [
          { left: "A, B'den 3 yaş büyük → A =", right: "B + 3" },
          { left: "5 yıl sonraki yaş → x =", right: "x + 5" },
          { left: "4 yıl önceki yaş → x =", right: "x − 4" },
          { left: "Yaş farkı d ise büyük =", right: "Küçük + d" },
        ],
      },
      {
        text: "Kişileri yaşlarıyla eşleştirin. (A+B=30, A-B=4)",
        explanation: "2A=34 → A=17, B=13.",
        pairs: [
          { left: "A'nın yaşı", right: "17" },
          { left: "B'nin yaşı", right: "13" },
          { left: "A+B toplamı", right: "30" },
          { left: "A-B farkı", right: "4" },
        ],
      },
      {
        text: "Zaman ifadelerini birbirleriyle eşleştirin.",
        explanation: "Geçmiş çıkarma, gelecek toplama ile ifade edilir.",
        pairs: [
          { left: "x yıl önce", right: "y − x" },
          { left: "x yıl sonra", right: "y + x" },
          { left: "şimdiki yaş 2 katı", right: "2y" },
          { left: "yarısı kadar", right: "y / 2" },
        ],
      },
    ];

    for (let i = 0; i < matchingQuestions.length; i++) {
      const q = matchingQuestions[i];
      await knex("questions").insert({
        topic_id: yasStep.topic_id,
        step_id: yasStep.id,
        test_id: test3.id,
        question_text: q.text,
        question_type: "matching",
        difficulty: 3,
        status: "approved",
        point_value: 10,
        explanation: q.explanation,
        sort_order: fillBlankQuestions.length + i + 1,
        type_data: JSON.stringify({ pairs: q.pairs }),
      });
    }

    // --- ordering questions (2 adet) ---
    const orderingQuestions = [
      {
        text: "Aşağıdaki adımları 'Yaş Problemi Çözümü' için doğru sıraya koy.",
        explanation: "Yaş probleminde: bilinmeyeni tanımla → denklemi yaz → sadeleştir → çöz.",
        items: [
          { text: "Bilinmeyeni x ile ifade et", position: 1 },
          { text: "Verilen ilişkiyle denklemi yaz", position: 2 },
          { text: "Denklemi sadeleştir", position: 3 },
          { text: "x'i bul ve kontrol et", position: 4 },
        ],
      },
      {
        text: "Bu kişileri küçükten büyüğe yaş sırasına diz. (A=25, B=12, C=40, D=7)",
        explanation: "Küçükten büyüğe: D(7) → B(12) → A(25) → C(40).",
        items: [
          { text: "D — 7 yaş", position: 1 },
          { text: "B — 12 yaş", position: 2 },
          { text: "A — 25 yaş", position: 3 },
          { text: "C — 40 yaş", position: 4 },
        ],
      },
    ];

    for (let i = 0; i < orderingQuestions.length; i++) {
      const q = orderingQuestions[i];
      await knex("questions").insert({
        topic_id: yasStep.topic_id,
        step_id: yasStep.id,
        test_id: test3.id,
        question_text: q.text,
        question_type: "ordering",
        difficulty: 2,
        status: "approved",
        point_value: 10,
        explanation: q.explanation,
        sort_order: fillBlankQuestions.length + matchingQuestions.length + i + 1,
        type_data: JSON.stringify({ items: q.items }),
      });
    }
  }
}
