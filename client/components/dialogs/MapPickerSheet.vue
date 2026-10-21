<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 flex items-end justify-center z-[1000]"
        @click.self="$emit('close')"
      >
        <div class="bg-white rounded-t-3xl w-full max-w-[600px] max-h-[80vh] overflow-y-auto px-6 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))] flex flex-col gap-5">
          <div class="w-10 h-1 bg-gray-300 rounded-full self-center" />

          <section v-if="enrollments.length > 1" class="flex flex-col gap-2.5">
            <div class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Sınav</div>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="enr in enrollments"
                :key="enr.exam_type_id"
                class="px-4 py-2.5 rounded-xl border-2 text-[0.95rem] font-extrabold cursor-pointer transition-colors font-[inherit]"
                :class="enr.exam_type_id === examTypeId ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-600'"
                @click="pickExam(enr.exam_type_id)"
              >
                {{ enr.exam_type_name }}
              </button>
            </div>
          </section>

          <section v-if="modules.length > 0" class="flex flex-col gap-2.5">
            <div class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Modül</div>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="mod in modules"
                :key="mod.id"
                class="px-4 py-2.5 rounded-xl border-2 text-[0.95rem] font-extrabold cursor-pointer transition-colors font-[inherit]"
                :class="mod.id === moduleId ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 text-gray-600'"
                @click="pickModule(mod.id)"
              >
                {{ mod.name }}
              </button>
            </div>
          </section>

          <section class="flex flex-col gap-2.5">
            <div class="text-xs font-extrabold text-gray-400 uppercase tracking-widest">Ders</div>
            <div v-if="loading" class="py-4 flex justify-center">
              <div class="w-6 h-6 border-2 border-gray-200 border-t-primary rounded-full animate-spin" />
            </div>
            <p v-else-if="courses.length === 0" class="text-sm font-semibold text-gray-400">Bu sınav için henüz içerik eklenmedi.</p>
            <div v-else class="flex flex-wrap gap-2">
              <button
                v-for="course in courses"
                :key="course.id"
                class="px-4 py-2.5 rounded-xl border-2 text-[0.95rem] font-extrabold cursor-pointer transition-colors font-[inherit]"
                :class="course.id === selectedCourseId ? 'bg-primary/10 border-primary text-primary' : 'bg-white border-gray-200 text-gray-600'"
                @click="$emit('select', { examTypeId, moduleId, courseId: course.id })"
              >
                {{ course.name }}
              </button>
            </div>
          </section>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Item {
  id: string
  name: string
}

export interface MapPick {
  examTypeId: string
  moduleId: string
  courseId: string
}

// Starts from the map's current exam / module / courses; another exam or
// module loads its own lists here, so the map changes only when a course is
// picked.
const props = defineProps<{
  open: boolean
  activeExamTypeId: string
  activeModules: Item[]
  activeModuleId: string
  activeCourses: Item[]
  selectedCourseId: string
}>()

defineEmits<{
  close: []
  select: [pick: MapPick]
}>()

const { enrollments } = useUserSession()

const examTypeId = ref('')
const moduleId = ref('')
const modules = ref<Item[]>([])
const courses = ref<Item[]>([])
const loading = ref(false)

watch(() => props.open, (isOpen) => {
  if (!isOpen) return
  examTypeId.value = props.activeExamTypeId
  modules.value = props.activeModules
  moduleId.value = props.activeModuleId
  courses.value = props.activeCourses
}, { immediate: true })

function authHeaders(): Record<string, string> {
  const token = localStorage.getItem('pb_token')
  return token ? { Authorization: `Bearer ${token}` } : {}
}

async function pickExam(id: string) {
  if (id === examTypeId.value) return
  examTypeId.value = id
  loading.value = true
  try {
    modules.value = await cachedFetch<Item[]>(`/api/modules?exam_type_id=${id}`, { headers: authHeaders() })
  } catch {
    modules.value = []
  }
  await pickModule(modules.value[0]?.id ?? '')
}

async function pickModule(id: string) {
  moduleId.value = id
  if (!id) {
    courses.value = []
    loading.value = false
    return
  }
  if (id === props.activeModuleId) {
    courses.value = props.activeCourses
    return
  }
  loading.value = true
  try {
    courses.value = await cachedFetch<Item[]>(`/api/courses?module_id=${id}`, { headers: authHeaders() })
  } catch {
    courses.value = []
  } finally {
    loading.value = false
  }
}
</script>
