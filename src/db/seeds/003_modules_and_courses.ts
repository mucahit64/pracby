import type { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Get all active exam types
  const examTypes = await knex("exam_types").where({ is_active: true });
  if (examTypes.length === 0) return;

  // Check if modules already exist
  const existingModules = await knex("modules").select("name", "exam_type_id");
  const existingKeys = new Set(existingModules.map((m) => `${m.exam_type_id}:${m.name}`));

  const moduleDefinitions = [
    { name: "Genel Yetenek", icon_url: "🧠", sort_order: 1 },
    { name: "Genel Kültür", icon_url: "📚", sort_order: 2 },
  ];

  // Insert modules for each exam type
  for (const examType of examTypes) {
    for (const def of moduleDefinitions) {
      const key = `${examType.id}:${def.name}`;
      if (existingKeys.has(key)) continue;

      await knex("modules").insert({
        exam_type_id: examType.id,
        name: def.name,
        description: `${examType.name} - ${def.name}`,
        icon_url: def.icon_url,
        sort_order: def.sort_order,
        is_active: true,
      });
    }
  }

  // Use first exam type (KPSS Lisans) for course seeding
  const primaryExamType = examTypes[0];
  const modules = await knex("modules").where({ exam_type_id: primaryExamType.id });
  const gyModule = modules.find((m) => m.name === "Genel Yetenek");
  const gkModule = modules.find((m) => m.name === "Genel Kültür");

  if (!gyModule || !gkModule) return;

  // ==========================================
  // COURSES
  // ==========================================
  const existingCourses = await knex("courses").select("name", "module_id");
  const existingCourseKeys = new Set(existingCourses.map((c) => `${c.module_id}:${c.name}`));

  const courseDefinitions = [
    // GY
    { name: "Türkçe", icon_url: "📝", color: "#3b82f6", sort_order: 1, module: gyModule },
    { name: "Matematik", icon_url: "🔢", color: "#8b5cf6", sort_order: 2, module: gyModule },
    // GK
    { name: "Tarih", icon_url: "🏛️", color: "#ef4444", sort_order: 1, module: gkModule },
    { name: "Coğrafya", icon_url: "🗺️", color: "#10b981", sort_order: 2, module: gkModule },
    { name: "Vatandaşlık Bilgisi", icon_url: "⚖️", color: "#f59e0b", sort_order: 3, module: gkModule },
  ];

  for (const def of courseDefinitions) {
    const key = `${def.module.id}:${def.name}`;
    if (existingCourseKeys.has(key)) continue;

    await knex("courses").insert({
      name: def.name,
      description: `${def.module.name} - ${def.name}`,
      icon_url: def.icon_url,
      color: def.color,
      sort_order: def.sort_order,
      exam_type_id: primaryExamType.id,
      module_id: def.module.id,
    });
  }

  // ==========================================
  // MATEMATIK — Full Set
  // ==========================================
  const mathCourse = await knex("courses")
    .where({ name: "Matematik", module_id: gyModule.id })
    .first();

  if (mathCourse) {
    const existingTopics = await knex("topics").where({ course_id: mathCourse.id }).select("name");
    if (existingTopics.length === 0) {
      // Topic: Problemler
      const [problemlerTopic] = await knex("topics")
        .insert({
          course_id: mathCourse.id,
          name: "Problemler",
          description: "Temel problem çözme becerileri",
          icon_url: "🧮",
          sort_order: 1,
          total_lessons: 3,
          max_crown_level: 5,
        })
        .returning("*");

      // Step 1: Yaş Problemleri
      const [yasStep] = await knex("steps")
        .insert({
          topic_id: problemlerTopic.id,
          name: "Yaş Problemleri",
          description: "Yaş ile ilgili problemler",
          sort_order: 1,
          tests_required: 1,
          step_type: "lesson",
        })
        .returning("*");

      const [yasTest] = await knex("tests")
        .insert({
          step_id: yasStep.id,
          sort_order: 1,
          name: "Yaş Problemleri Test 1",
        })
        .returning("*");

      // Yaş Problemleri Questions
      const yasQuestions = [
        {
          text: "Ali, Ayşe'den 8 yaş büyüktür. Toplam yaşları 42 ise Ali kaç yaşındadır?",
          answers: [
            { text: "17", correct: false },
            { text: "22", correct: false },
            { text: "25", correct: true },
            { text: "30", correct: false },
          ],
          explanation: "Ali = x, Ayşe = x-8. x + (x-8) = 42 → 2x = 50 → x = 25",
        },
        {
          text: "Bir babanın yaşı oğlunun 4 katıdır. 12 yıl sonra baba oğlunun 2 katı olacak. Oğulun şimdiki yaşı kaçtır?",
          answers: [
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
            { text: "12", correct: false },
          ],
          explanation: "Oğul = x, Baba = 4x. 4x+12 = 2(x+12) → 4x+12 = 2x+24 → x = 6",
        },
        {
          text: "Annesi ile kızının yaşları toplamı 56'dır. 4 yıl önce annenin yaşı kızının 5 katıydı. Kızın şimdiki yaşı kaçtır?",
          answers: [
            { text: "8", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
          ],
          explanation: "K + A = 56, A-4 = 5(K-4) → 56-K-4 = 5K-20 → 72 = 6K → K = 12",
        },
        {
          text: "3 yıl sonra yaşı, 5 yıl önceki yaşının 2 katı olacak kişi şimdi kaç yaşındadır?",
          answers: [
            { text: "11", correct: false },
            { text: "13", correct: true },
            { text: "15", correct: false },
            { text: "17", correct: false },
          ],
          explanation: "x+3 = 2(x-5) → x+3 = 2x-10 → x = 13",
        },
        {
          text: "İki kardeşin yaşları farkı 6, çarpımı 72 ise büyük kardeş kaç yaşındadır?",
          answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
          ],
          explanation: "a - b = 6, a×b = 72. a = b+6 → (b+6)b = 72 → b²+6b-72 = 0 → b = 6, a = 12",
        },
        {
          text: "4 yıl sonra bir annenin yaşı oğlunun yaşının 3 katı olacaktır. Şimdi annenin yaşı 38 ise oğul kaç yaşındadır?",
          answers: [
            { text: "10", correct: true },
            { text: "12", correct: false },
            { text: "14", correct: false },
            { text: "8", correct: false },
          ],
          explanation: "38+4 = 3(x+4) → 42 = 3x+12 → 3x = 30 → x = 10",
        },
        {
          text: "Ahmet 5 yıl önceki yaşı ile 3 yıl sonraki yaşı toplamı 32'dir. Ahmet şimdi kaç yaşındadır?",
          answers: [
            { text: "15", correct: false },
            { text: "17", correct: true },
            { text: "19", correct: false },
            { text: "21", correct: false },
          ],
          explanation: "(x-5) + (x+3) = 32 → 2x - 2 = 32 → x = 17",
        },
        {
          text: "Bir öğretmenin yaşı, öğrencisinin yaşının 3 katından 2 eksiktir. Yaşları toplamı 50 ise öğretmen kaç yaşındadır?",
          answers: [
            { text: "35", correct: false },
            { text: "37", correct: true },
            { text: "39", correct: false },
            { text: "41", correct: false },
          ],
          explanation: "Ö = 3x-2, x + 3x-2 = 50 → 4x = 52 → x = 13, Ö = 37",
        },
        {
          text: "Bir ailedeki 4 çocuğun yaşları ardışık çift sayılardır. Toplam yaşları 36 ise en büyük çocuk kaç yaşındadır?",
          answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "16", correct: false },
          ],
          explanation: "x + (x+2) + (x+4) + (x+6) = 36 → 4x+12 = 36 → x = 6. En büyük = 12",
        },
        {
          text: "Bir dede, torununa 'Senin yaşın benim yaşımın 1/5'i olunca ben 70 yaşında olacağım' diyor. Dede şimdi 60 yaşında ise torun şimdi kaç yaşındadır?",
          answers: [
            { text: "2", correct: false },
            { text: "4", correct: true },
            { text: "6", correct: false },
            { text: "8", correct: false },
          ],
          explanation: "70/5 = 14 yaşında torun olacak. Aradaki fark 10 yıl. Torun şimdi = 14-10 = 4",
        },
      ];

      for (let i = 0; i < yasQuestions.length; i++) {
        const q = yasQuestions[i];
        const [question] = await knex("questions")
          .insert({
            topic_id: problemlerTopic.id,
            step_id: yasStep.id,
            test_id: yasTest.id,
            question_text: q.text,
            question_type: "multiple_choice",
            difficulty: 2,
            status: "approved",
            point_value: 10,
            explanation: q.explanation,
            sort_order: i + 1,
          })
          .returning("*");

        await knex("answers").insert(
          q.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.text,
            is_correct: a.correct,
          })),
        );
      }

      // Step 2: Hız-Zaman-Mesafe
      const [hizStep] = await knex("steps")
        .insert({
          topic_id: problemlerTopic.id,
          name: "Hız-Zaman-Mesafe Problemleri",
          description: "Hız, zaman ve mesafe problemleri",
          sort_order: 2,
          tests_required: 1,
          step_type: "lesson",
        })
        .returning("*");

      const [hizTest] = await knex("tests")
        .insert({
          step_id: hizStep.id,
          sort_order: 1,
          name: "Hız-Zaman-Mesafe Test 1",
        })
        .returning("*");

      const hizQuestions = [
        {
          text: "Saatte 60 km hızla giden araba 3 saatte kaç km yol alır?",
          answers: [
            { text: "120 km", correct: false },
            { text: "180 km", correct: true },
            { text: "200 km", correct: false },
            { text: "240 km", correct: false },
          ],
          explanation: "Yol = Hız × Zaman = 60 × 3 = 180 km",
        },
        {
          text: "240 km'lik yolu 4 saatte alan bir aracın ortalama hızı kaç km/saat'tir?",
          answers: [
            { text: "40", correct: false },
            { text: "50", correct: false },
            { text: "60", correct: true },
            { text: "80", correct: false },
          ],
          explanation: "Hız = Yol / Zaman = 240 / 4 = 60 km/saat",
        },
        {
          text: "Bir otobüs 90 km/saat hızla gidiyor. 450 km yolu kaç saatte tamamlar?",
          answers: [
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false },
            { text: "7", correct: false },
          ],
          explanation: "Zaman = Yol / Hız = 450 / 90 = 5 saat",
        },
        {
          text: "A şehri ile B şehri arası 300 km'dir. Bir araç giderken 100 km/saat, dönerken 60 km/saat hızla gitmiştir. Ortalama hız kaç km/saat'tir?",
          answers: [
            { text: "75", correct: true },
            { text: "80", correct: false },
            { text: "70", correct: false },
            { text: "85", correct: false },
          ],
          explanation: "Toplam yol = 600 km. Gidiş süresi = 3 saat, dönüş = 5 saat. Ortalama = 600/8 = 75",
        },
        {
          text: "İki şehir arası 120 km'dir. Bir bisikletçi 20 km/saat, bir araba 60 km/saat hızla aynı anda karşılıklı hareket ederse kaç saat sonra karşılaşırlar?",
          answers: [
            { text: "1", correct: false },
            { text: "1.5", correct: true },
            { text: "2", correct: false },
            { text: "2.5", correct: false },
          ],
          explanation: "Yaklaşma hızı = 20+60 = 80 km/saat. Zaman = 120/80 = 1.5 saat",
        },
        {
          text: "Bir tren 150 metre uzunluğunda bir köprüyü 10 saniyede geçiyor. Trenin hızı 72 km/saat ise trenin uzunluğu kaç metredir?",
          answers: [
            { text: "40 m", correct: false },
            { text: "50 m", correct: true },
            { text: "60 m", correct: false },
            { text: "70 m", correct: false },
          ],
          explanation: "72 km/saat = 20 m/s. Toplam yol = 20×10 = 200 m. Tren = 200-150 = 50 m",
        },
        {
          text: "Saatte 80 km hızla giden bir araç, hızını %25 artırırsa yeni hızı kaç km/saat olur?",
          answers: [
            { text: "90", correct: false },
            { text: "95", correct: false },
            { text: "100", correct: true },
            { text: "105", correct: false },
          ],
          explanation: "80 × 1.25 = 100 km/saat",
        },
        {
          text: "İki araç aynı noktadan aynı yöne hareket ediyor. Birinci 50 km/saat, ikinci 70 km/saat hızla gidiyor. 3 saat sonra aralarındaki mesafe kaç km'dir?",
          answers: [
            { text: "40", correct: false },
            { text: "50", correct: false },
            { text: "60", correct: true },
            { text: "70", correct: false },
          ],
          explanation: "Fark hızı = 70-50 = 20 km/saat. Mesafe = 20×3 = 60 km",
        },
        {
          text: "Bir kişi giderken 4 km/saat, dönerken 6 km/saat hızla yürüyor. Toplamda 5 saat yürüdüyse gidiş yolu kaç km'dir?",
          answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "14", correct: false },
            { text: "15", correct: false },
          ],
          explanation: "Yol = x. x/4 + x/6 = 5 → 5x/12 = 5 → x = 12 km",
        },
        {
          text: "Bir araba 200 km'lik yolun ilk yarısını 50 km/saat, ikinci yarısını 100 km/saat hızla gitmiştir. Ortalama hız kaç km/saat'tir?",
          answers: [
            { text: "60", correct: false },
            { text: "200/3", correct: true },
            { text: "70", correct: false },
            { text: "75", correct: false },
          ],
          explanation: "1. yarı = 100/50 = 2 saat, 2. yarı = 100/100 = 1 saat. Ortalama = 200/3 ≈ 66.67",
        },
      ];

      for (let i = 0; i < hizQuestions.length; i++) {
        const q = hizQuestions[i];
        const [question] = await knex("questions")
          .insert({
            topic_id: problemlerTopic.id,
            step_id: hizStep.id,
            test_id: hizTest.id,
            question_text: q.text,
            question_type: "multiple_choice",
            difficulty: 2,
            status: "approved",
            point_value: 10,
            explanation: q.explanation,
            sort_order: i + 1,
          })
          .returning("*");

        await knex("answers").insert(
          q.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.text,
            is_correct: a.correct,
          })),
        );
      }

      // Step 3: Karışım ve Oran
      const [karisimStep] = await knex("steps")
        .insert({
          topic_id: problemlerTopic.id,
          name: "Karışım ve Oran Problemleri",
          description: "Karışım ve oran problemleri",
          sort_order: 3,
          tests_required: 1,
          step_type: "lesson",
        })
        .returning("*");

      const [karisimTest] = await knex("tests")
        .insert({
          step_id: karisimStep.id,
          sort_order: 1,
          name: "Karışım Test 1",
        })
        .returning("*");

      const karisimQuestions = [
        {
          text: "5 litre %20 tuzlu su ile 3 litre %40 tuzlu su karıştırılırsa karışımın tuz oranı yüzde kaçtır?",
          answers: [
            { text: "25", correct: false },
            { text: "27.5", correct: true },
            { text: "30", correct: false },
            { text: "32.5", correct: false },
          ],
          explanation: "(5×20 + 3×40) / (5+3) = (100+120)/8 = 220/8 = %27.5",
        },
        {
          text: "A ve B'nin para miktarları oranı 3/5'tir. B'nin 40 TL'si varsa A'nın kaç TL'si vardır?",
          answers: [
            { text: "20", correct: false },
            { text: "24", correct: true },
            { text: "28", correct: false },
            { text: "30", correct: false },
          ],
          explanation: "A/B = 3/5, B = 40 → A = 40 × 3/5 = 24",
        },
        {
          text: "Bir sınıftaki kız-erkek oranı 2/3'tür. Sınıfta 30 öğrenci varsa kaç kız öğrenci vardır?",
          answers: [
            { text: "10", correct: false },
            { text: "12", correct: true },
            { text: "15", correct: false },
            { text: "18", correct: false },
          ],
          explanation: "Kız = 2x, Erkek = 3x. 5x = 30 → x = 6. Kız = 12",
        },
        {
          text: "10 litre %30 şekerli suya kaç litre saf su eklenirse %20 şekerli su elde edilir?",
          answers: [
            { text: "3", correct: false },
            { text: "5", correct: true },
            { text: "7", correct: false },
            { text: "10", correct: false },
          ],
          explanation: "10×30 = (10+x)×20 → 300 = 200+20x → x = 5",
        },
        {
          text: "3 işçinin 12 günde yaptığı işi 4 işçi kaç günde yapar?",
          answers: [
            { text: "7", correct: false },
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false },
          ],
          explanation: "3 × 12 = 4 × x → x = 36/4 = 9 gün",
        },
        {
          text: "Bir alaşımda bakır ve çinko oranı 7/3'tür. 500 gr alaşımda kaç gr bakır vardır?",
          answers: [
            { text: "300", correct: false },
            { text: "350", correct: true },
            { text: "400", correct: false },
            { text: "250", correct: false },
          ],
          explanation: "Bakır = 7x, Çinko = 3x. 10x = 500 → x = 50. Bakır = 350",
        },
        {
          text: "A'nın B'ye oranı 4/5, B'nin C'ye oranı 2/3'tür. A'nın C'ye oranı kaçtır?",
          answers: [
            { text: "8/15", correct: true },
            { text: "4/3", correct: false },
            { text: "2/5", correct: false },
            { text: "6/15", correct: false },
          ],
          explanation: "A/B = 4/5, B/C = 2/3. A/C = (A/B) × (B/C) = 4/5 × 2/3 = 8/15",
        },
        {
          text: "20 litre %60 alkollü çözeltiden 5 litre alınıp yerine saf su konursa yeni alkol oranı yüzde kaçtır?",
          answers: [
            { text: "40", correct: false },
            { text: "45", correct: true },
            { text: "50", correct: false },
            { text: "55", correct: false },
          ],
          explanation: "Kalan alkol = 20×0.6 - 5×0.6 = 12-3 = 9 litre. Oran = 9/20 = %45",
        },
        {
          text: "Bir haritada 2 cm, gerçekte 50 km'yi temsil ediyor. Haritada 7 cm olan mesafe gerçekte kaç km'dir?",
          answers: [
            { text: "150", correct: false },
            { text: "175", correct: true },
            { text: "200", correct: false },
            { text: "225", correct: false },
          ],
          explanation: "2 cm → 50 km, 1 cm → 25 km, 7 cm → 175 km",
        },
        {
          text: "Bir işi A tek başına 6 günde, B tek başına 12 günde yapıyor. Birlikte kaç günde yaparlar?",
          answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false },
          ],
          explanation: "1/6 + 1/12 = 3/12 = 1/4. Birlikte 4 günde yaparlar.",
        },
      ];

      for (let i = 0; i < karisimQuestions.length; i++) {
        const q = karisimQuestions[i];
        const [question] = await knex("questions")
          .insert({
            topic_id: problemlerTopic.id,
            step_id: karisimStep.id,
            test_id: karisimTest.id,
            question_text: q.text,
            question_type: "multiple_choice",
            difficulty: 2,
            status: "approved",
            point_value: 10,
            explanation: q.explanation,
            sort_order: i + 1,
          })
          .returning("*");

        await knex("answers").insert(
          q.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.text,
            is_correct: a.correct,
          })),
        );
      }
    }
  }

  // ==========================================
  // TARİH — Full Set
  // ==========================================
  const tarihCourse = await knex("courses")
    .where({ name: "Tarih", module_id: gkModule.id })
    .first();

  if (tarihCourse) {
    const existingTopics = await knex("topics").where({ course_id: tarihCourse.id }).select("name");
    if (existingTopics.length === 0) {
      // Topic: İslamiyet Öncesi Türk Tarihi
      const [islamiyetTopic] = await knex("topics")
        .insert({
          course_id: tarihCourse.id,
          name: "İslamiyet Öncesi Türk Tarihi",
          description: "İslamiyet öncesi Türk devletleri ve kültürü",
          icon_url: "⚔️",
          sort_order: 1,
          total_lessons: 2,
          max_crown_level: 5,
        })
        .returning("*");

      // Step 1: İlk Türk Devletleri
      const [ilkDevletStep] = await knex("steps")
        .insert({
          topic_id: islamiyetTopic.id,
          name: "İlk Türk Devletleri",
          description: "Hun, Göktürk ve Uygur devletleri",
          sort_order: 1,
          tests_required: 1,
          step_type: "lesson",
        })
        .returning("*");

      const [ilkDevletTest] = await knex("tests")
        .insert({
          step_id: ilkDevletStep.id,
          sort_order: 1,
          name: "İlk Türk Devletleri Test 1",
        })
        .returning("*");

      const tarihQuestions1 = [
        {
          text: "Asya Hun Devleti'ni kuran hükümdar kimdir?",
          answers: [
            { text: "Mete Han", correct: false },
            { text: "Attila", correct: false },
            { text: "Bumin Kağan", correct: false },
            { text: "Teoman", correct: true },
          ],
          explanation: "Asya Hun Devleti'nin kurucusu Teoman'dır. Mete Han ise devleti en güçlü dönemine taşımıştır.",
        },
        {
          text: "Göktürk Devleti kaçıncı yüzyılda kurulmuştur?",
          answers: [
            { text: "4. yy", correct: false },
            { text: "5. yy", correct: false },
            { text: "6. yy", correct: true },
            { text: "7. yy", correct: false },
          ],
          explanation: "Göktürk Devleti 552 yılında (6. yy) Bumin Kağan tarafından kurulmuştur.",
        },
        {
          text: "Orhun Yazıtları hangi Türk devleti dönemine aittir?",
          answers: [
            { text: "Hunlar", correct: false },
            { text: "Göktürkler", correct: true },
            { text: "Uygurlar", correct: false },
            { text: "Avarlar", correct: false },
          ],
          explanation: "Orhun Yazıtları (Göktürk Kitabeleri) II. Göktürk Devleti döneminde dikilmiştir.",
        },
        {
          text: "Aşağıdakilerden hangisi Uygurların özelliklerinden biri değildir?",
          answers: [
            { text: "Yerleşik hayata geçmeleri", correct: false },
            { text: "Maniheizm'i benimsemeleri", correct: false },
            { text: "Matbaayı kullanmaları", correct: false },
            { text: "Denizcilikle uğraşmaları", correct: true },
          ],
          explanation: "Uygurlar İç Asya'da yaşamış olup denizcilikle ilgilenmemişlerdir.",
        },
        {
          text: "Mete Han hangi sistemi kurarak Türk ordusunu düzenlemiştir?",
          answers: [
            { text: "Onluk sistem", correct: true },
            { text: "Tımar sistemi", correct: false },
            { text: "Yeniçeri sistemi", correct: false },
            { text: "Devşirme sistemi", correct: false },
          ],
          explanation: "Mete Han onluk askeri teşkilat sistemini kurmuştur (onbaşı, yüzbaşı, binbaşı vb.).",
        },
        {
          text: "Türklerin kullandığı ilk alfabe hangisidir?",
          answers: [
            { text: "Uygur alfabesi", correct: false },
            { text: "Göktürk alfabesi", correct: true },
            { text: "Arap alfabesi", correct: false },
            { text: "Latin alfabesi", correct: false },
          ],
          explanation: "Türklerin kullandığı bilinen ilk alfabe Göktürk (Orhun) alfabesidir.",
        },
        {
          text: "Avrupa Hun Devleti'nin en güçlü hükümdarı kimdir?",
          answers: [
            { text: "Balamir", correct: false },
            { text: "Uldız", correct: false },
            { text: "Attila", correct: true },
            { text: "Bleda", correct: false },
          ],
          explanation: "Attila, Avrupa Hun Devleti'nin en ünlü ve güçlü hükümdarıdır.",
        },
        {
          text: "Türklerde 'Kut' anlayışı neyi ifade eder?",
          answers: [
            { text: "Askeri güç", correct: false },
            { text: "Tanrı tarafından verilen yönetme yetkisi", correct: true },
            { text: "Toprak mülkiyeti", correct: false },
            { text: "Ticaret hakkı", correct: false },
          ],
          explanation: "Kut, Tanrı tarafından hükümdara verilen yönetme yetkisi ve hakkıdır.",
        },
        {
          text: "İslamiyet öncesi Türklerde devlet meclisine ne ad verilir?",
          answers: [
            { text: "Divan", correct: false },
            { text: "Kurultay", correct: true },
            { text: "Meclis-i Mebusan", correct: false },
            { text: "Senato", correct: false },
          ],
          explanation: "Kurultay (Toy/Kengeş), Türk devletlerinde önemli kararların alındığı meclistir.",
        },
        {
          text: "Göktürk Devleti aşağıdaki hangi devletin egemenliğinden kurtularak bağımsızlığını kazanmıştır?",
          answers: [
            { text: "Sasaniler", correct: false },
            { text: "Çin", correct: false },
            { text: "Avarlar (Juan-Juanlar)", correct: true },
            { text: "Bizans", correct: false },
          ],
          explanation: "Göktürkler, Avar (Juan-Juan) hakimiyetine karşı ayaklanarak 552'de bağımsız olmuşlardır.",
        },
      ];

      for (let i = 0; i < tarihQuestions1.length; i++) {
        const q = tarihQuestions1[i];
        const [question] = await knex("questions")
          .insert({
            topic_id: islamiyetTopic.id,
            step_id: ilkDevletStep.id,
            test_id: ilkDevletTest.id,
            question_text: q.text,
            question_type: "multiple_choice",
            difficulty: 2,
            status: "approved",
            point_value: 10,
            explanation: q.explanation,
            sort_order: i + 1,
          })
          .returning("*");

        await knex("answers").insert(
          q.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.text,
            is_correct: a.correct,
          })),
        );
      }

      // Step 2: Göktürkler ve Uygurlar
      const [gokturkStep] = await knex("steps")
        .insert({
          topic_id: islamiyetTopic.id,
          name: "Göktürkler ve Uygurlar",
          description: "Göktürk ve Uygur devletleri detayları",
          sort_order: 2,
          tests_required: 1,
          step_type: "lesson",
        })
        .returning("*");

      const [gokturkTest] = await knex("tests")
        .insert({
          step_id: gokturkStep.id,
          sort_order: 1,
          name: "Göktürkler Test 1",
        })
        .returning("*");

      const tarihQuestions2 = [
        {
          text: "I. Göktürk Devleti'nin kurucusu kimdir?",
          answers: [
            { text: "İstemi Yabgu", correct: false },
            { text: "Bumin Kağan", correct: true },
            { text: "Bilge Kağan", correct: false },
            { text: "Kapgan Kağan", correct: false },
          ],
          explanation: "I. Göktürk Devleti 552 yılında Bumin Kağan tarafından kurulmuştur.",
        },
        {
          text: "Göktürk Devleti'nin batı kanadını kim yönetmiştir?",
          answers: [
            { text: "Bumin Kağan", correct: false },
            { text: "İstemi Yabgu", correct: true },
            { text: "Kül Tigin", correct: false },
            { text: "Tonyukuk", correct: false },
          ],
          explanation: "Göktürk Devleti'nin batı kanadı İstemi Yabgu tarafından yönetilmiştir.",
        },
        {
          text: "Bilge Kağan ve Kül Tigin adına dikilen yazıtlar nerede bulunmaktadır?",
          answers: [
            { text: "Altay Dağları", correct: false },
            { text: "Orhun Nehri kıyısı", correct: true },
            { text: "Tanrı Dağları", correct: false },
            { text: "Gobi Çölü", correct: false },
          ],
          explanation: "Bu yazıtlar Orhun Nehri kıyısında (bugünkü Moğolistan) bulunmuştur.",
        },
        {
          text: "Uygur Devleti'nin başkenti hangisidir?",
          answers: [
            { text: "Ötüken", correct: false },
            { text: "Balasagun", correct: false },
            { text: "Ordu-Balık (Karabalgasun)", correct: true },
            { text: "Beşbalık", correct: false },
          ],
          explanation: "Uygur Devleti'nin başkenti Ordu-Balık (Karabalgasun) şehridir.",
        },
        {
          text: "Uygurların kabul ettiği Maniheizm dini hangi etkiyi yaratmıştır?",
          answers: [
            { text: "Savaşçılıkları artmıştır", correct: false },
            { text: "Et yemek yasaklanmış, savaşçılıkları azalmıştır", correct: true },
            { text: "Denizcilikle uğraşmışlardır", correct: false },
            { text: "Göçebe yaşama dönmüşlerdir", correct: false },
          ],
          explanation: "Maniheizm et yemeyi ve savaşı yasakladığı için Uygurların savaşçılığı azalmıştır.",
        },
        {
          text: "Türk tarihinde matbaayı ilk kullanan devlet hangisidir?",
          answers: [
            { text: "Göktürkler", correct: false },
            { text: "Hunlar", correct: false },
            { text: "Uygurlar", correct: true },
            { text: "Karahanlılar", correct: false },
          ],
          explanation: "Uygurlar hareketli harflerle matbaayı kullanan ilk Türk devletidir.",
        },
        {
          text: "Göktürk alfabesi kaç harften oluşur?",
          answers: [
            { text: "18", correct: false },
            { text: "28", correct: false },
            { text: "38", correct: true },
            { text: "48", correct: false },
          ],
          explanation: "Göktürk (Orhun) alfabesi 38 harften oluşur.",
        },
        {
          text: "II. Göktürk Devleti'ni kim yeniden kurmuştur?",
          answers: [
            { text: "Bilge Kağan", correct: false },
            { text: "Kutluk (İlteriş) Kağan", correct: true },
            { text: "Kapgan Kağan", correct: false },
            { text: "Kül Tigin", correct: false },
          ],
          explanation: "II. Göktürk Devleti 682'de Kutluk (İlteriş) Kağan tarafından kurulmuştur.",
        },
        {
          text: "Göktürklerde devlet yönetiminde kağana danışmanlık yapan kişi kimdir?",
          answers: [
            { text: "Yabgu", correct: false },
            { text: "Tigin", correct: false },
            { text: "Apa", correct: false },
            { text: "Tonyukuk (Vezir)", correct: true },
          ],
          explanation: "Tonyukuk, Göktürk Devleti'nde vezirlik (danışmanlık) yapmıştır.",
        },
        {
          text: "Uygur Devleti hangi yılda yıkılmıştır?",
          answers: [
            { text: "745", correct: false },
            { text: "840", correct: true },
            { text: "932", correct: false },
            { text: "1040", correct: false },
          ],
          explanation: "Uygur Devleti 840 yılında Kırgızlar tarafından yıkılmıştır.",
        },
      ];

      for (let i = 0; i < tarihQuestions2.length; i++) {
        const q = tarihQuestions2[i];
        const [question] = await knex("questions")
          .insert({
            topic_id: islamiyetTopic.id,
            step_id: gokturkStep.id,
            test_id: gokturkTest.id,
            question_text: q.text,
            question_type: "multiple_choice",
            difficulty: 2,
            status: "approved",
            point_value: 10,
            explanation: q.explanation,
            sort_order: i + 1,
          })
          .returning("*");

        await knex("answers").insert(
          q.answers.map((a) => ({
            question_id: question.id,
            answer_text: a.text,
            is_correct: a.correct,
          })),
        );
      }
    }
  }
}
