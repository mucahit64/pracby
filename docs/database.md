-- =============================================
-- PRACBY DATABASE SCHEMA
-- Duolingo tarzı mikro öğrenme uygulaması
-- KPSS & YKS öğrencileri için
-- =============================================

-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  avatar_url TEXT,
  daily_goal_xp INT DEFAULT 50, -- günlük XP hedefi (10, 20, 50, 100)
  hearts INT DEFAULT 5, -- can sistemi (Duolingo tarzı)
  hearts_refreshed_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- USER STATS (XP, LEVEL, STREAK)
CREATE TABLE user_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  xp INT DEFAULT 0,
  level INT DEFAULT 1,
  streak INT DEFAULT 0,
  total_xp INT DEFAULT 0,
  max_streak INT DEFAULT 0,
  daily_xp INT DEFAULT 0, -- bugün kazanılan XP
  weekly_xp INT DEFAULT 0, -- bu hafta kazanılan XP
  updated_at TIMESTAMP DEFAULT NOW(),
  last_active_date DATE
);

-- STREAK HISTORY (günlük aktivite kaydı)
CREATE TABLE streak_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  xp_earned INT DEFAULT 0,
  quizzes_completed INT DEFAULT 0,
  UNIQUE(user_id, date)
);

-- FRIENDS (bidirectional)
CREATE TABLE friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  friend_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW(),
  status INT NOT NULL DEFAULT 0, -- 0: pending, 1: accepted, 2: rejected
  UNIQUE(user_id, friend_id)
);

-- COURSES (örn: Tarih, Matematik)
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  color TEXT, -- UI renk kodu
  sort_order INT DEFAULT 0
);

-- TOPICS (örn: Osmanlı, İnkilaplar) — Duolingo'daki "skill" karşılığı
CREATE TABLE topics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  sort_order INT DEFAULT 0, -- skill tree sıralaması
  total_lessons INT DEFAULT 5, -- bu topic'teki toplam ders sayısı
  max_crown_level INT DEFAULT 5, -- maksimum taç seviyesi (0-5)
  unlock_after UUID REFERENCES topics(id) -- önceki topic tamamlanınca açılır (skill tree)
);

-- USER TOPIC PROGRESS (kullanıcının her topic'teki ilerlemesi)
CREATE TABLE user_topic_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  crown_level INT DEFAULT 0, -- taç seviyesi (0-5, Duolingo tarzı)
  lessons_completed INT DEFAULT 0,
  is_unlocked BOOLEAN DEFAULT FALSE,
  last_practiced_at TIMESTAMP,
  strength FLOAT DEFAULT 1.0, -- 0.0-1.0 arası, zamanla azalır (spaced repetition)
  next_review_at TIMESTAMP, -- tekrar zamanı
  UNIQUE(user_id, topic_id)
);

-- QUESTIONS
CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type TEXT DEFAULT 'multiple_choice', -- multiple_choice, true_false, fill_blank
  difficulty INT DEFAULT 1, -- 1-5 arası
  status TEXT DEFAULT 'pending', -- pending / approved / rejected
  hint TEXT,
  tags TEXT[],
  difficulty_weight FLOAT DEFAULT 1.0,
  created_by UUID REFERENCES users(id),
  explanation TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- ANSWERS (çoktan seçmeli)
CREATE TABLE answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID REFERENCES questions(id) ON DELETE CASCADE,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN DEFAULT FALSE
);

-- QUIZ SESSION
CREATE TABLE quiz_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  topic_id UUID REFERENCES topics(id), -- hangi topic'ten quiz yapıldı
  session_type TEXT DEFAULT 'lesson', -- lesson, review, practice
  started_at TIMESTAMP DEFAULT NOW(),
  finished_at TIMESTAMP,
  score INT DEFAULT 0,
  xp_earned INT DEFAULT 0,
  duration INT, -- saniye cinsinden
  total_questions INT DEFAULT 0,
  correct_answers INT DEFAULT 0,
  hearts_lost INT DEFAULT 0
);

-- USER ANSWERS (hangi soruya ne cevap verdi)
CREATE TABLE user_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id UUID REFERENCES quiz_sessions(id) ON DELETE CASCADE,
  question_id UUID REFERENCES questions(id),
  answer_id UUID REFERENCES answers(id),
  is_correct BOOLEAN,
  answered_at TIMESTAMP DEFAULT NOW(),
  time_spent INT, -- milisaniye
  is_skipped BOOLEAN DEFAULT FALSE
);

-- ACHIEVEMENTS / BADGES (başarım sistemi)
CREATE TABLE achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  icon_url TEXT,
  category TEXT, -- streak, xp, quiz, social
  requirement_type TEXT NOT NULL, -- streak_days, total_xp, quizzes_completed, friends_count
  requirement_value INT NOT NULL -- hedef değer (örn: 7 gün streak)
);

-- USER ACHIEVEMENTS (kazanılan başarımlar)
CREATE TABLE user_achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, achievement_id)
);

-- LEADERBOARD (haftalık liderlik tablosu)
CREATE TABLE leaderboard (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  week_start DATE NOT NULL, -- haftanın başlangıç tarihi
  xp_earned INT DEFAULT 0,
  rank INT,
  league TEXT DEFAULT 'bronze', -- bronze, silver, gold, diamond
  UNIQUE(user_id, week_start)
);

-- NOTIFICATIONS (bildirimler)
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- streak_reminder, friend_request, achievement, leaderboard
  title TEXT NOT NULL,
  body TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- INDEXLER (performans için kritik)
-- =============================================
CREATE INDEX idx_questions_topic ON questions(topic_id);
CREATE INDEX idx_questions_status ON questions(status);
CREATE INDEX idx_answers_question ON answers(question_id);
CREATE INDEX idx_user_answers_session ON user_answers(session_id);
CREATE INDEX idx_quiz_sessions_user ON quiz_sessions(user_id);
CREATE INDEX idx_quiz_sessions_topic ON quiz_sessions(topic_id);
CREATE INDEX idx_friendships_user ON friendships(user_id);
CREATE INDEX idx_friendships_friend ON friendships(friend_id);
CREATE INDEX idx_friendships_status ON friendships(status);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_topics_course ON topics(course_id);
CREATE INDEX idx_topics_sort ON topics(course_id, sort_order);
CREATE INDEX idx_user_topic_progress_user ON user_topic_progress(user_id);
CREATE INDEX idx_user_topic_progress_topic ON user_topic_progress(topic_id);
CREATE INDEX idx_user_topic_progress_review ON user_topic_progress(next_review_at);
CREATE INDEX idx_streak_history_user_date ON streak_history(user_id, date);
CREATE INDEX idx_leaderboard_week ON leaderboard(week_start, xp_earned DESC);
CREATE INDEX idx_leaderboard_league ON leaderboard(league, week_start);
CREATE INDEX idx_notifications_user ON notifications(user_id, is_read);
CREATE INDEX idx_user_achievements_user ON user_achievements(user_id);