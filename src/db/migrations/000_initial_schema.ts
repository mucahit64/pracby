import type { Knex } from "knex";

// Consolidated schema — replaces all 001–041 individual migration files.
// Tables are created in topological order so no ALTER TABLE is needed.

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');

  // ── 1. exam_groups ───────────────────────────────────────────────────────
  await knex.schema.createTable("exam_groups", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("slug").unique().notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.boolean("is_active").defaultTo(true);
  });

  await knex("exam_groups").insert([
    { name: "KPSS", slug: "kpss", description: "Kamu Personeli Seçme Sınavı", sort_order: 1 },
    { name: "YKS", slug: "yks", description: "Yükseköğretim Kurumları Sınavı", sort_order: 2, is_active: false },
    { name: "ALES", slug: "ales", description: "Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı", sort_order: 3, is_active: false },
    { name: "DGS", slug: "dgs", description: "Dikey Geçiş Sınavı", sort_order: 4, is_active: false },
  ]);

  // ── 2. exam_types ────────────────────────────────────────────────────────
  await knex.schema.createTable("exam_types", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("exam_group_id").references("id").inTable("exam_groups").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("slug").notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.boolean("is_active").defaultTo(true);
    table.unique(["exam_group_id", "slug"]);
  });

  await knex.raw("CREATE INDEX idx_exam_types_group ON exam_types(exam_group_id)");

  const kpss = await knex("exam_groups").where({ slug: "kpss" }).first();
  if (kpss) {
    await knex("exam_types").insert([
      { exam_group_id: kpss.id, name: "KPSS Lisans", slug: "lisans", description: "4 yıllık lisans mezunları için KPSS", sort_order: 1 },
      { exam_group_id: kpss.id, name: "KPSS Önlisans", slug: "onlisans", description: "2 yıllık önlisans mezunları için KPSS", sort_order: 2 },
      { exam_group_id: kpss.id, name: "KPSS Ortaöğretim", slug: "ortaogretim", description: "Ortaöğretim (lise) mezunları için KPSS", sort_order: 3 },
    ]);
  }

  // ── 3. users ─────────────────────────────────────────────────────────────
  // Includes: active_exam_type_id (020), acorn_balance (022), role (041)
  await knex.schema.createTable("users", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("email").unique().notNullable();
    table.text("username").unique().notNullable();
    table.text("password_hash").notNullable();
    table.text("avatar_url");
    table.integer("daily_goal_xp").defaultTo(50);
    table.integer("energy").defaultTo(25);
    table.timestamp("energy_refreshed_at").defaultTo(knex.fn.now());
    table.uuid("active_exam_type_id").references("id").inTable("exam_types").onDelete("SET NULL").nullable();
    table.integer("acorn_balance").defaultTo(0).notNullable();
    table.text("role").notNullable().defaultTo("user");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_users_email ON users(email)");
  await knex.raw("CREATE INDEX idx_users_username ON users(username)");
  await knex.raw("ALTER TABLE users ADD CONSTRAINT chk_energy_non_negative CHECK (energy >= 0)");
  await knex.raw("ALTER TABLE users ADD CONSTRAINT chk_acorn_balance_non_negative CHECK (acorn_balance >= 0)");
  await knex.raw("ALTER TABLE users ADD CONSTRAINT chk_users_role CHECK (role IN ('user', 'admin'))");

  // ── 4. user_stats ────────────────────────────────────────────────────────
  // Includes: current_streak, quizzes_completed (036)
  await knex.schema.createTable("user_stats", (table) => {
    table.uuid("user_id").primary().references("id").inTable("users").onDelete("CASCADE");
    table.integer("xp").defaultTo(0);
    table.integer("level").defaultTo(1);
    table.integer("streak").defaultTo(0);
    table.integer("total_xp").defaultTo(0);
    table.integer("max_streak").defaultTo(0);
    table.integer("daily_xp").defaultTo(0);
    table.integer("weekly_xp").defaultTo(0);
    table.integer("current_streak").defaultTo(0);
    table.integer("quizzes_completed").defaultTo(0);
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.date("last_active_date");
  });

  // ── 5. streak_history ────────────────────────────────────────────────────
  await knex.schema.createTable("streak_history", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.date("date").notNullable();
    table.integer("xp_earned").defaultTo(0);
    table.integer("quizzes_completed").defaultTo(0);
    table.unique(["user_id", "date"]);
  });

  await knex.raw("CREATE INDEX idx_streak_history_user_date ON streak_history(user_id, date)");

  // ── 6. friendships ───────────────────────────────────────────────────────
  await knex.schema.createTable("friendships", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("friend_id").references("id").inTable("users").onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.integer("status").notNullable().defaultTo(0);
    table.unique(["user_id", "friend_id"]);
  });

  await knex.raw("CREATE INDEX idx_friendships_user ON friendships(user_id)");
  await knex.raw("CREATE INDEX idx_friendships_friend ON friendships(friend_id)");
  await knex.raw("CREATE INDEX idx_friendships_status ON friendships(status)");

  // ── 7. store_items ───────────────────────────────────────────────────────
  // Includes: metadata (039)
  await knex.schema.createTable("store_items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("price_acorn").notNullable();
    table.text("item_type").notNullable(); // streak_freeze | unlimited_energy | xp_boost | energy_refill
    table.integer("duration_hours"); // null = permanent/one-time use
    table.boolean("is_active").defaultTo(true).notNullable();
    table.jsonb("metadata").defaultTo("{}").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_store_items_active ON store_items(is_active)");

  // ── 8. modules ───────────────────────────────────────────────────────────
  await knex.schema.createTable("modules", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("sort_order").defaultTo(0).notNullable();
    table.boolean("is_active").defaultTo(true).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_modules_exam_type ON modules(exam_type_id)");

  // ── 9. courses ───────────────────────────────────────────────────────────
  // Includes: exam_type_id (018), module_id (038)
  await knex.schema.createTable("courses", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.text("color");
    table.integer("sort_order").defaultTo(0);
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("SET NULL").nullable();
    table.uuid("module_id").references("id").inTable("modules").onDelete("SET NULL").nullable();
  });

  await knex.raw("CREATE INDEX idx_courses_exam_type ON courses(exam_type_id)");
  await knex.raw("CREATE INDEX idx_courses_module ON courses(module_id)");

  // ── 10. topics ───────────────────────────────────────────────────────────
  await knex.schema.createTable("topics", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("course_id").references("id").inTable("courses").onDelete("CASCADE");
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.integer("sort_order").defaultTo(0);
    table.integer("total_lessons").defaultTo(5);
    table.integer("max_crown_level").defaultTo(5);
    table.uuid("unlock_after").references("id").inTable("topics");
  });

  await knex.raw("CREATE INDEX idx_topics_course ON topics(course_id)");
  await knex.raw("CREATE INDEX idx_topics_sort ON topics(course_id, sort_order)");

  // ── 11. user_topic_progress ──────────────────────────────────────────────
  await knex.schema.createTable("user_topic_progress", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE");
    table.integer("crown_level").defaultTo(0);
    table.integer("lessons_completed").defaultTo(0);
    table.boolean("is_unlocked").defaultTo(false);
    table.timestamp("last_practiced_at");
    table.float("strength").defaultTo(1.0);
    table.timestamp("next_review_at");
    table.unique(["user_id", "topic_id"]);
  });

  await knex.raw("CREATE INDEX idx_user_topic_progress_user ON user_topic_progress(user_id)");
  await knex.raw("CREATE INDEX idx_user_topic_progress_topic ON user_topic_progress(topic_id)");
  await knex.raw("CREATE INDEX idx_user_topic_progress_review ON user_topic_progress(next_review_at)");

  // ── 12. steps ────────────────────────────────────────────────────────────
  // Includes: step_type, reward_type, reward_amount, reward_item_id (032)
  await knex.schema.createTable("steps", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE").notNullable();
    table.text("name").notNullable();
    table.text("description");
    table.integer("sort_order").defaultTo(0);
    table.integer("tests_required").defaultTo(5).notNullable();
    table.text("step_type").defaultTo("lesson").notNullable(); // lesson | reward
    table.text("reward_type"); // acorn | store_item
    table.integer("reward_amount");
    table.uuid("reward_item_id").references("id").inTable("store_items").onDelete("SET NULL");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_steps_topic ON steps(topic_id)");

  // ── 13. tests ────────────────────────────────────────────────────────────
  await knex.schema.createTable("tests", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("step_id").references("id").inTable("steps").onDelete("CASCADE").notNullable();
    table.integer("sort_order").defaultTo(0).notNullable();
    table.text("name");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_tests_step ON tests(step_id)");

  // ── 14. questions ────────────────────────────────────────────────────────
  // Includes: point_value (021), step_id (025), type_data (026), test_id + sort_order (034)
  await knex.schema.createTable("questions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("topic_id").references("id").inTable("topics").onDelete("CASCADE");
    table.text("question_text").notNullable();
    table.text("image_url");
    table.text("question_type").defaultTo("multiple_choice");
    table.integer("difficulty").defaultTo(1);
    table.text("status").defaultTo("pending");
    table.text("hint");
    table.specificType("tags", "text[]");
    table.float("difficulty_weight").defaultTo(1.0);
    table.uuid("created_by").references("id").inTable("users");
    table.text("explanation");
    table.integer("point_value").defaultTo(1).notNullable();
    table.uuid("step_id").references("id").inTable("steps").onDelete("SET NULL");
    table.jsonb("type_data");
    table.uuid("test_id").references("id").inTable("tests").onDelete("SET NULL");
    table.integer("sort_order").defaultTo(0).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_questions_topic ON questions(topic_id)");
  await knex.raw("CREATE INDEX idx_questions_status ON questions(status)");
  await knex.raw("CREATE INDEX idx_questions_step ON questions(step_id)");
  await knex.raw("CREATE INDEX idx_questions_test ON questions(test_id)");
  await knex.raw("CREATE INDEX idx_questions_test_sort ON questions(test_id, sort_order)");
  await knex.raw("ALTER TABLE questions ADD CONSTRAINT chk_difficulty_range CHECK (difficulty >= 1 AND difficulty <= 3)");

  // ── 15. answers ──────────────────────────────────────────────────────────
  await knex.schema.createTable("answers", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("question_id").references("id").inTable("questions").onDelete("CASCADE");
    table.text("answer_text").notNullable();
    table.boolean("is_correct").defaultTo(false);
  });

  await knex.raw("CREATE INDEX idx_answers_question ON answers(question_id)");

  // ── 16. quiz_sessions ────────────────────────────────────────────────────
  // Includes: step_id + is_final_test (027), test_id (035)
  await knex.schema.createTable("quiz_sessions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("topic_id").references("id").inTable("topics");
    table.text("session_type").defaultTo("lesson");
    table.uuid("step_id").references("id").inTable("steps").onDelete("SET NULL");
    table.boolean("is_final_test").defaultTo(false).notNullable();
    table.uuid("test_id").references("id").inTable("tests").onDelete("SET NULL");
    table.timestamp("started_at").defaultTo(knex.fn.now());
    table.timestamp("finished_at");
    table.integer("score").defaultTo(0);
    table.integer("xp_earned").defaultTo(0);
    table.integer("duration");
    table.integer("total_questions").defaultTo(0);
    table.integer("correct_answers").defaultTo(0);
    table.integer("energy_lost").defaultTo(0);
  });

  await knex.raw("CREATE INDEX idx_quiz_sessions_user ON quiz_sessions(user_id)");
  await knex.raw("CREATE INDEX idx_quiz_sessions_topic ON quiz_sessions(topic_id)");
  await knex.raw("CREATE INDEX idx_quiz_sessions_step ON quiz_sessions(step_id)");
  await knex.raw("CREATE INDEX idx_quiz_sessions_test ON quiz_sessions(test_id)");
  await knex.raw("CREATE INDEX idx_quiz_sessions_finished ON quiz_sessions(finished_at)");

  // ── 17. user_answers ─────────────────────────────────────────────────────
  await knex.schema.createTable("user_answers", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("session_id").references("id").inTable("quiz_sessions").onDelete("CASCADE");
    table.uuid("question_id").references("id").inTable("questions");
    table.uuid("answer_id").references("id").inTable("answers");
    table.boolean("is_correct");
    table.timestamp("answered_at").defaultTo(knex.fn.now());
    table.integer("time_spent");
    table.boolean("is_skipped").defaultTo(false);
  });

  await knex.raw("CREATE INDEX idx_user_answers_session ON user_answers(session_id)");

  // ── 18. achievements ─────────────────────────────────────────────────────
  await knex.schema.createTable("achievements", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.text("name").notNullable();
    table.text("description");
    table.text("icon_url");
    table.text("category");
    table.text("requirement_type").notNullable();
    table.integer("requirement_value").notNullable();
  });

  // ── 19. user_achievements ────────────────────────────────────────────────
  await knex.schema.createTable("user_achievements", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.uuid("achievement_id").references("id").inTable("achievements").onDelete("CASCADE");
    table.timestamp("earned_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "achievement_id"]);
  });

  await knex.raw("CREATE INDEX idx_user_achievements_user ON user_achievements(user_id)");

  // ── 20. leaderboard ──────────────────────────────────────────────────────
  await knex.schema.createTable("leaderboard", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.date("week_start").notNullable();
    table.integer("xp_earned").defaultTo(0);
    table.integer("rank");
    table.text("league").defaultTo("bronze");
    table.unique(["user_id", "week_start"]);
  });

  await knex.raw("CREATE INDEX idx_leaderboard_week ON leaderboard(week_start, xp_earned DESC)");
  await knex.raw("CREATE INDEX idx_leaderboard_league ON leaderboard(league, week_start)");

  // ── 21. notifications ────────────────────────────────────────────────────
  await knex.schema.createTable("notifications", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE");
    table.text("type").notNullable();
    table.text("title").notNullable();
    table.text("body");
    table.boolean("is_read").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_notifications_user ON notifications(user_id, is_read)");

  // ── 22. user_exam_enrollments ────────────────────────────────────────────
  await knex.schema.createTable("user_exam_enrollments", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("exam_type_id").references("id").inTable("exam_types").onDelete("CASCADE").notNullable();
    table.timestamp("enrolled_at").defaultTo(knex.fn.now());
    table.boolean("is_active").defaultTo(true);
    table.unique(["user_id", "exam_type_id"]);
  });

  await knex.raw("CREATE INDEX idx_enrollments_user ON user_exam_enrollments(user_id)");

  // ── 23. user_step_progress ───────────────────────────────────────────────
  await knex.schema.createTable("user_step_progress", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("step_id").references("id").inTable("steps").onDelete("CASCADE").notNullable();
    table.integer("tests_completed").defaultTo(0).notNullable();
    table.boolean("is_step_completed").defaultTo(false).notNullable();
    table.boolean("step_final_passed").defaultTo(false).notNullable();
    table.integer("stars").defaultTo(0).notNullable();
    table.timestamp("completed_at");
    table.unique(["user_id", "step_id"]);
  });

  await knex.raw("CREATE INDEX idx_user_step_progress_user ON user_step_progress(user_id)");

  // ── 24. user_items ───────────────────────────────────────────────────────
  await knex.schema.createTable("user_items", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("item_id").references("id").inTable("store_items").onDelete("CASCADE").notNullable();
    table.integer("quantity").defaultTo(1).notNullable();
    table.timestamp("purchased_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_user_items_user ON user_items(user_id)");

  // ── 25. user_active_effects ──────────────────────────────────────────────
  await knex.schema.createTable("user_active_effects", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.text("item_type").notNullable(); // streak_freeze | unlimited_energy | xp_boost
    table.timestamp("expires_at").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "item_type"]);
  });

  await knex.raw("CREATE INDEX idx_user_active_effects_user ON user_active_effects(user_id)");
  await knex.raw("CREATE INDEX idx_user_active_effects_expires ON user_active_effects(expires_at)");

  // ── 26. user_reward_claims ───────────────────────────────────────────────
  await knex.schema.createTable("user_reward_claims", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.uuid("step_id").references("id").inTable("steps").onDelete("CASCADE").notNullable();
    table.timestamp("claimed_at").defaultTo(knex.fn.now());
    table.unique(["user_id", "step_id"]);
  });

  // ── 27. acorn_transactions ───────────────────────────────────────────────
  await knex.schema.createTable("acorn_transactions", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.integer("amount").notNullable();
    table.text("type").notNullable(); // earned_quiz | earned_achievement | purchased | spent_store
    table.uuid("reference_id");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });

  await knex.raw("CREATE INDEX idx_acorn_transactions_user ON acorn_transactions(user_id)");
  await knex.raw("CREATE INDEX idx_acorn_transactions_created ON acorn_transactions(created_at)");
  await knex.raw("CREATE INDEX idx_acorn_transactions_user_type ON acorn_transactions(user_id, type)");
}

export async function down(knex: Knex): Promise<void> {
  // Drop in reverse dependency order
  await knex.schema.dropTableIfExists("acorn_transactions");
  await knex.schema.dropTableIfExists("user_reward_claims");
  await knex.schema.dropTableIfExists("user_active_effects");
  await knex.schema.dropTableIfExists("user_items");
  await knex.schema.dropTableIfExists("user_step_progress");
  await knex.schema.dropTableIfExists("user_exam_enrollments");
  await knex.schema.dropTableIfExists("notifications");
  await knex.schema.dropTableIfExists("leaderboard");
  await knex.schema.dropTableIfExists("user_achievements");
  await knex.schema.dropTableIfExists("achievements");
  await knex.schema.dropTableIfExists("user_answers");
  await knex.schema.dropTableIfExists("quiz_sessions");
  await knex.schema.dropTableIfExists("answers");
  await knex.schema.dropTableIfExists("questions");
  await knex.schema.dropTableIfExists("tests");
  await knex.schema.dropTableIfExists("steps");
  await knex.schema.dropTableIfExists("user_topic_progress");
  await knex.schema.dropTableIfExists("topics");
  await knex.schema.dropTableIfExists("courses");
  await knex.schema.dropTableIfExists("modules");
  await knex.schema.dropTableIfExists("store_items");
  await knex.schema.dropTableIfExists("friendships");
  await knex.schema.dropTableIfExists("streak_history");
  await knex.schema.dropTableIfExists("user_stats");
  await knex.schema.dropTableIfExists("users");
  await knex.schema.dropTableIfExists("exam_types");
  await knex.schema.dropTableIfExists("exam_groups");
  await knex.raw('DROP EXTENSION IF EXISTS "pgcrypto"');
}
