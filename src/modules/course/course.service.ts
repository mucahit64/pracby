import db from "../../db/knex";
import { AppError } from "../../middleware/error";

export const getCourses = async (examTypeId?: string, moduleId?: string) => {
  const query = db("courses").orderBy("sort_order");
  if (moduleId) {
    query.where({ module_id: moduleId });
  } else if (examTypeId) {
    query.where({ exam_type_id: examTypeId });
  }
  return query;
};

export const getCourseById = async (id: string) => {
  const course = await db("courses").where({ id }).first();
  if (!course) throw new AppError(404, "Course not found");
  return course;
};

export const getTopicsByCourse = async (courseId: string) => {
  await getCourseById(courseId);
  return db("topics").where({ course_id: courseId, status: "approved" }).orderBy("sort_order");
};

export const getCourseFull = async (courseId: string, userId?: string) => {
  const course = await getCourseById(courseId);

  const topics = await db("topics")
    .where({ course_id: courseId, status: "approved" })
    .orderBy("sort_order");

  const topicIds = topics.map((t) => t.id);
  if (topicIds.length === 0) return { ...course, topics: [] };

  const steps = await db("steps")
    .whereIn("topic_id", topicIds)
    .orderBy("sort_order");

  const stepIds = steps.map((s) => s.id);

  // User progress
  let userTopicProgress: Record<string, unknown>[] = [];
  let userStepProgress: Record<string, unknown>[] = [];

  if (userId) {
    userTopicProgress = await db("user_topic_progress")
      .where({ user_id: userId })
      .whereIn("topic_id", topicIds);

    if (stepIds.length > 0) {
      userStepProgress = await db("user_step_progress")
        .where({ user_id: userId })
        .whereIn("step_id", stepIds);
    }
  }

  const topicProgressMap = new Map(
    userTopicProgress.map((p: Record<string, unknown>) => [p.topic_id as string, p]),
  );
  const stepProgressMap = new Map(
    userStepProgress.map((p: Record<string, unknown>) => [p.step_id as string, p]),
  );

  const enrichedTopics = topics.map((topic) => {
    const topicSteps = steps.filter((s) => s.topic_id === topic.id);
    const enrichedSteps = topicSteps.map((step) => ({
      ...step,
      progress: stepProgressMap.get(step.id) ?? null,
    }));

    return {
      ...topic,
      steps: enrichedSteps,
      progress: topicProgressMap.get(topic.id) ?? null,
    };
  });

  return { ...course, topics: enrichedTopics };
};
