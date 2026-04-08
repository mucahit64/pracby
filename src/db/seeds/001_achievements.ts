import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Don't delete existing achievements, only insert missing ones
  const existing = await knex("achievements").select("requirement_type", "requirement_value");
  const existingKeys = new Set(existing.map((a) => `${a.requirement_type}:${a.requirement_value}`));

  const achievements = [
    {
      name: "Nişancı",
      description: "Bir testte %85 ve üzeri doğruluk oranı",
      icon_url: "🎯",
      category: "quiz",
      requirement_type: "quiz_accuracy",
      requirement_value: 85,
    },
    {
      name: "Mükemmeliyetçi",
      description: "Bir testte tüm soruları doğru yanıtla",
      icon_url: "🌟",
      category: "quiz",
      requirement_type: "quiz_perfect",
      requirement_value: 1,
    },
    {
      name: "İlk Adım",
      description: "İlk testini tamamla",
      icon_url: "🌱",
      category: "quiz",
      requirement_type: "quizzes_completed",
      requirement_value: 1,
    },
    {
      name: "Hızlı Öğrenci",
      description: "10 test tamamla",
      icon_url: "📚",
      category: "quiz",
      requirement_type: "quizzes_completed",
      requirement_value: 10,
    },
    {
      name: "Çalışkan",
      description: "50 test tamamla",
      icon_url: "🏆",
      category: "quiz",
      requirement_type: "quizzes_completed",
      requirement_value: 50,
    },
    {
      name: "Azimli",
      description: "7 gün üst üste çalış",
      icon_url: "🔥",
      category: "streak",
      requirement_type: "streak_days",
      requirement_value: 7,
    },
    {
      name: "Tutkulu",
      description: "30 gün üst üste çalış",
      icon_url: "⚡",
      category: "streak",
      requirement_type: "streak_days",
      requirement_value: 30,
    },
  ];

  const toInsert = achievements.filter(
    (a) => !existingKeys.has(`${a.requirement_type}:${a.requirement_value}`),
  );

  if (toInsert.length > 0) {
    await knex("achievements").insert(toInsert);
  }
}
