import { ref, watch } from 'vue'

interface Module {
  id: string
  name: string
  icon_url: string
  sort_order: number
}

interface Course {
  id: string
  name: string
  icon_url: string
  color: string
  sort_order: number
}

interface StepProgress {
  tests_completed: number
  is_step_completed: boolean
  step_final_passed: boolean
  best_score?: number
}

interface Step {
  id: string
  sort_order: number
  step_type: string
  tests_required: number
  reward_amount?: number
  progress: StepProgress | null
}

interface TopicProgress {
  crown_level: number
  is_unlocked: boolean
  lessons_completed: number
}

interface Topic {
  id: string
  name: string
  sort_order: number
  steps: Step[]
  progress: TopicProgress | null
}

interface CourseFull extends Course {
  topics: Topic[]
}

export function useExamContent() {
  const { activeExamTypeId: globalActiveExamTypeId } = useUserSession()

  const activeExamName = ref('')
  const activeExamTypeId = ref('')
  const modules = ref<Module[]>([])
  const selectedModuleId = ref('')
  const courses = ref<Course[]>([])
  const selectedCourseId = ref('')
  const courseFull = ref<CourseFull | null>(null)
  const loadingFull = ref(false)

  function getToken() {
    return localStorage.getItem('pb_token') ?? ''
  }

  async function selectCourse(courseId: string) {
    selectedCourseId.value = courseId
    localStorage.setItem('pb_selectedCourseId', courseId)
    loadingFull.value = true
    const token = getToken()
    const headers: Record<string, string> = {}
    if (token) headers.Authorization = `Bearer ${token}`

    try {
      const data = await $fetch<CourseFull>(`/api/courses/${courseId}/full`, { headers })
      if (!token) {
        const { overlayGuestProgress } = useGuestState()
        overlayGuestProgress(data.topics)
      }
      courseFull.value = data
    } catch {
      courseFull.value = null
    } finally {
      loadingFull.value = false
    }
  }

  async function selectModule(moduleId: string, preferredCourseId?: string) {
    selectedModuleId.value = moduleId
    localStorage.setItem('pb_selectedModuleId', moduleId)
    const token = getToken()
    const headers: Record<string, string> = {}
    if (token) headers.Authorization = `Bearer ${token}`

    try {
      const data = await $fetch<Course[]>(`/api/courses?module_id=${moduleId}`, { headers })
      courses.value = data

      if (data.length > 0) {
        const target = preferredCourseId && data.find((c) => c.id === preferredCourseId)
          ? preferredCourseId
          : data[0].id
        await selectCourse(target)
      } else {
        selectedCourseId.value = ''
        courseFull.value = null
      }
    } catch {
      courses.value = []
    }
  }

  // clearSaved=true when switching exams so stale module/course from old exam is ignored
  async function loadForExam(examTypeId: string, clearSaved = false) {
    if (!examTypeId) return
    activeExamTypeId.value = examTypeId
    try {
      const examGroups = await $fetch<Array<{ exam_types: Array<{ id: string; name: string }> }>>('/api/exam-groups')
      const allTypes = examGroups.flatMap((g) => g.exam_types)
      const match = allTypes.find((t) => t.id === examTypeId)
      if (!match) {
        localStorage.removeItem('guestExamTypeId')
        
        activeExamTypeId.value = ''
        modules.value = []
        const router = useRouter()
        if (router.currentRoute.value.path !== '/welcome') {
          navigateTo('/welcome')
        }
        return
      }
      if (match) activeExamName.value = match.name

      const token = getToken()
      const headers: Record<string, string> = {}
      if (token) headers.Authorization = `Bearer ${token}`
      const mods = await $fetch<Module[]>(`/api/modules?exam_type_id=${examTypeId}`, { headers })
      modules.value = mods
      if (mods.length > 0) {
        const savedModuleId = clearSaved ? null : localStorage.getItem('pb_selectedModuleId')
        const savedCourseId = clearSaved ? null : localStorage.getItem('pb_selectedCourseId')
        const targetModule = savedModuleId && mods.find((m) => m.id === savedModuleId) ? savedModuleId : mods[0].id
        await selectModule(targetModule, savedCourseId ?? undefined)
      }
    } catch {
      // ignore
    }
  }

  // Initialize on client only — localStorage is not available during SSR
  if (process.client) {
    if (globalActiveExamTypeId.value) {
      loadForExam(globalActiveExamTypeId.value)
    } else {
      const guestExamTypeId = localStorage.getItem('guestExamTypeId')
      if (guestExamTypeId) loadForExam(guestExamTypeId)
    }
  }

  // When the active exam changes (e.g. after switchExam), reload content fresh
  watch(globalActiveExamTypeId, (newId, oldId) => {
    if (newId && newId !== oldId) loadForExam(newId, true)
  })

  function reset() {
    activeExamName.value = ''
    activeExamTypeId.value = ''
    modules.value = []
    selectedModuleId.value = ''
    courses.value = []
    selectedCourseId.value = ''
    courseFull.value = null
    loadingFull.value = false
    if (process.client) {
      localStorage.removeItem('pb_selectedModuleId')
      localStorage.removeItem('pb_selectedCourseId')
    }
  }

  return {
    activeExamName,
    activeExamTypeId,
    modules,
    selectedModuleId,
    courses,
    selectedCourseId,
    courseFull,
    loadingFull,
    selectModule,
    selectCourse,
    loadForExam,
    reset,
  }
}
