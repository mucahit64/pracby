<template>
  <div>
    <h1 class="text-2xl font-bold text-white mb-6">Sınav Yapısı Yönetimi</h1>

    <!-- Loading -->
    <div v-if="loading" class="text-center text-gray-400 py-12">Yükleniyor...</div>

    <!-- Tree View -->
    <div v-else class="space-y-4">
      <!-- Exam Groups -->
      <div v-for="group in examGroups" :key="group.id" class="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <!-- Group Header -->
        <div class="flex items-center justify-between px-5 py-4 bg-gray-750 cursor-pointer" @click="toggleGroup(group.id)">
          <div class="flex items-center gap-3">
            <svg class="w-5 h-5 text-purple-400 transition-transform" :class="{ 'rotate-90': expandedGroups.has(group.id) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="text-lg font-semibold text-white">{{ group.name }}</span>
            <span class="text-xs text-gray-500">({{ group.exam_types?.length || 0 }} sınav türü)</span>
            <span v-if="!group.is_active" class="px-2 py-0.5 text-xs bg-red-900/30 text-red-400 rounded">Pasif</span>
          </div>
          <div class="flex items-center gap-2">
            <button class="text-gray-400 hover:text-blue-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="editExamGroup(group)">Düzenle</button>
            <button class="text-gray-400 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="confirmDeleteExamGroup(group)">Sil</button>
          </div>
        </div>

        <!-- Exam Types under this group -->
        <div v-if="expandedGroups.has(group.id)" class="border-t border-gray-700">
          <div v-for="examType in group.exam_types" :key="examType.id" class="border-b border-gray-700 last:border-b-0">
            <!-- Exam Type Row -->
            <div class="flex items-center justify-between px-5 py-3 pl-10 cursor-pointer hover:bg-gray-750/50" @click="toggleExamType(examType.id)">
              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-blue-400 transition-transform" :class="{ 'rotate-90': expandedExamTypes.has(examType.id) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span class="text-white font-medium">{{ examType.name }}</span>
                <span class="text-xs text-gray-500">({{ getModulesForType(examType.id).length }} modül)</span>
                <span v-if="!examType.is_active" class="px-2 py-0.5 text-xs bg-red-900/30 text-red-400 rounded">Pasif</span>
              </div>
              <div class="flex items-center gap-2">
                <button class="text-gray-400 hover:text-green-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="addModule(examType)">+ Modül</button>
                <button class="text-gray-400 hover:text-blue-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="editExamType(examType)">Düzenle</button>
                <button class="text-gray-400 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="confirmDeleteExamType(examType)">Sil</button>
              </div>
            </div>

            <!-- Modules under this exam type -->
            <div v-if="expandedExamTypes.has(examType.id)">
              <div v-for="mod in getModulesForType(examType.id)" :key="mod.id" class="border-t border-gray-700/50">
                <!-- Module Row -->
                <div class="flex items-center justify-between px-5 py-2.5 pl-16 cursor-pointer hover:bg-gray-750/30" @click="toggleModule(mod.id)">
                  <div class="flex items-center gap-3">
                    <svg class="w-3.5 h-3.5 text-yellow-400 transition-transform" :class="{ 'rotate-90': expandedModules.has(mod.id) }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    <span class="text-gray-200">{{ mod.name }}</span>
                    <span class="text-xs text-gray-500">({{ getCoursesForModule(mod.id).length }} ders)</span>
                    <span v-if="!mod.is_active" class="px-2 py-0.5 text-xs bg-red-900/30 text-red-400 rounded">Pasif</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <button class="text-gray-400 hover:text-green-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="addCourse(mod, examType)">+ Ders</button>
                    <button class="text-gray-400 hover:text-blue-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="editModule(mod)">Düzenle</button>
                    <button class="text-gray-400 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click.stop="confirmDeleteModule(mod)">Sil</button>
                  </div>
                </div>

                <!-- Courses under this module -->
                <div v-if="expandedModules.has(mod.id)">
                  <div
v-for="course in getCoursesForModule(mod.id)" :key="course.id"
                    class="flex items-center justify-between px-5 py-2 pl-24 border-t border-gray-700/30 hover:bg-gray-750/20">
                    <div class="flex items-center gap-2">
                      <span class="w-2 h-2 rounded-full bg-green-500"/>
                      <span class="text-gray-300 text-sm">{{ course.name }}</span>
                      <span class="text-xs text-gray-600">sıra: {{ course.sort_order }}</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <button class="text-gray-400 hover:text-blue-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click="editCourse(course)">Düzenle</button>
                      <button class="text-gray-400 hover:text-red-400 text-xs px-2 py-1 rounded hover:bg-gray-700" @click="confirmDeleteCourse(course)">Sil</button>
                    </div>
                  </div>
                  <div v-if="!getCoursesForModule(mod.id).length" class="px-5 py-2 pl-24 text-gray-600 text-xs italic">
                    Ders bulunamadı
                  </div>
                </div>
              </div>
              <div v-if="!getModulesForType(examType.id).length" class="px-5 py-2 pl-16 text-gray-600 text-xs italic border-t border-gray-700/50">
                Modül bulunamadı
              </div>
            </div>
          </div>

          <!-- Add exam type button -->
          <div class="px-5 py-3 pl-10 border-t border-gray-700">
            <button class="text-purple-400 hover:text-purple-300 text-xs font-medium" @click="addExamType(group)">+ Yeni Sınav Türü Ekle</button>
          </div>
        </div>
      </div>

      <!-- Add exam group button -->
      <button class="w-full py-3 border-2 border-dashed border-gray-700 rounded-xl text-gray-400 hover:text-purple-400 hover:border-purple-600 transition-colors text-sm font-medium" @click="openCreateGroup">
        + Yeni Sınav Grubu Ekle
      </button>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="modal.open" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50" @click.self="closeModal">
        <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-md shadow-xl">
          <h2 class="text-lg font-bold text-white mb-5">{{ modal.title }}</h2>

          <div class="space-y-4">
            <div v-if="modal.fields.includes('name')">
              <label class="admin-label">Ad</label>
              <input v-model="form.name" class="admin-input" placeholder="Ad girin" >
            </div>
            <div v-if="modal.fields.includes('slug')">
              <label class="admin-label">Slug</label>
              <input v-model="form.slug" class="admin-input" placeholder="slug-formatinda" >
            </div>
            <div v-if="modal.fields.includes('description')">
              <label class="admin-label">Açıklama</label>
              <input v-model="form.description" class="admin-input" placeholder="Opsiyonel" >
            </div>
            <div v-if="modal.fields.includes('sort_order')">
              <label class="admin-label">Sıra</label>
              <input v-model.number="form.sort_order" type="number" class="admin-input" >
            </div>
            <div v-if="modal.fields.includes('is_active')">
              <label class="flex items-center gap-2 cursor-pointer">
                <input v-model="form.is_active" type="checkbox" class="w-4 h-4 rounded bg-gray-700 border-gray-600 accent-purple-500" >
                <span class="text-sm text-gray-300">Aktif</span>
              </label>
            </div>
          </div>

          <div class="flex gap-3 mt-6">
            <button :disabled="saving" class="flex-1 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors disabled:opacity-50" @click="submitModal">
              {{ saving ? 'Kaydediliyor...' : 'Kaydet' }}
            </button>
            <button class="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium transition-colors" @click="closeModal">
              İptal
            </button>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- Delete Confirmation -->
    <Teleport to="body">
      <div v-if="deleteConfirm.open" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50" @click.self="deleteConfirm.open = false">
        <div class="bg-gray-800 border border-gray-700 rounded-2xl p-6 w-full max-w-sm shadow-xl">
          <h2 class="text-lg font-bold text-white mb-2">Silme Onayı</h2>
          <p class="text-gray-400 text-sm mb-6">
            <span class="text-white font-medium">{{ deleteConfirm.name }}</span> silinecek. Bu işlem geri alınamaz ve alt öğeleri de etkileyebilir.
          </p>
          <div class="flex gap-3">
            <button :disabled="saving" class="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors disabled:opacity-50" @click="executeDelete">
              {{ saving ? 'Siliniyor...' : 'Sil' }}
            </button>
            <button class="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium transition-colors" @click="deleteConfirm.open = false">
              İptal
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: ['admin'] });

const { api } = useApi();

const loading = ref(true);
const saving = ref(false);
const examGroups = ref<any[]>([]);
const allModules = ref<any[]>([]);
const allCourses = ref<any[]>([]);

const expandedGroups = ref(new Set<string>());
const expandedExamTypes = ref(new Set<string>());
const expandedModules = ref(new Set<string>());

// Modal state
const modal = ref({
  open: false,
  title: '',
  type: '' as 'exam_group' | 'exam_type' | 'module' | 'course',
  mode: '' as 'create' | 'edit',
  editId: '',
  parentId: '', // group_id for exam_type, exam_type_id for module, module_id for course
  parentExamTypeId: '', // used for course creation
  fields: [] as string[],
});

const form = ref({
  name: '',
  slug: '',
  description: '',
  sort_order: 1,
  is_active: true,
});

const deleteConfirm = ref({
  open: false,
  name: '',
  type: '' as 'exam_group' | 'exam_type' | 'module' | 'course',
  id: '',
});

// ── Data Loading ──

async function loadData() {
  loading.value = true;
  try {
    const [groups, modules, courses] = await Promise.all([
      api<any[]>('/api/admin/exam-groups'),
      api<any[]>('/api/admin/modules'),
      api<any[]>('/api/admin/courses'),
    ]);
    examGroups.value = groups;
    allModules.value = modules;
    allCourses.value = courses;
  } finally {
    loading.value = false;
  }
}

function getModulesForType(examTypeId: string) {
  return allModules.value.filter((m) => m.exam_type_id === examTypeId);
}

function getCoursesForModule(moduleId: string) {
  return allCourses.value.filter((c) => c.module_id === moduleId);
}

// ── Toggle Expand ──

function toggleGroup(id: string) {
  if (expandedGroups.value.has(id)) expandedGroups.value.delete(id);
  else expandedGroups.value.add(id);
}

function toggleExamType(id: string) {
  if (expandedExamTypes.value.has(id)) expandedExamTypes.value.delete(id);
  else expandedExamTypes.value.add(id);
}

function toggleModule(id: string) {
  if (expandedModules.value.has(id)) expandedModules.value.delete(id);
  else expandedModules.value.add(id);
}

// ── Modal Actions ──

function resetForm() {
  form.value = { name: '', slug: '', description: '', sort_order: 1, is_active: true };
}

function closeModal() {
  modal.value.open = false;
}

function openCreateGroup() {
  resetForm();
  modal.value = { open: true, title: 'Yeni Sınav Grubu', type: 'exam_group', mode: 'create', editId: '', parentId: '', parentExamTypeId: '', fields: ['name', 'slug', 'description', 'sort_order'] };
}

function editExamGroup(group: any) {
  form.value = { name: group.name, slug: group.slug, description: group.description || '', sort_order: group.sort_order, is_active: group.is_active };
  modal.value = { open: true, title: 'Sınav Grubu Düzenle', type: 'exam_group', mode: 'edit', editId: group.id, parentId: '', parentExamTypeId: '', fields: ['name', 'description', 'sort_order', 'is_active'] };
}

function addExamType(group: any) {
  resetForm();
  modal.value = { open: true, title: `Yeni Sınav Türü (${group.name})`, type: 'exam_type', mode: 'create', editId: '', parentId: group.id, parentExamTypeId: '', fields: ['name', 'slug', 'description', 'sort_order'] };
}

function editExamType(et: any) {
  form.value = { name: et.name, slug: et.slug, description: et.description || '', sort_order: et.sort_order, is_active: et.is_active };
  modal.value = { open: true, title: 'Sınav Türü Düzenle', type: 'exam_type', mode: 'edit', editId: et.id, parentId: '', parentExamTypeId: '', fields: ['name', 'description', 'sort_order', 'is_active'] };
}

function addModule(et: any) {
  resetForm();
  modal.value = { open: true, title: `Yeni Modül (${et.name})`, type: 'module', mode: 'create', editId: '', parentId: et.id, parentExamTypeId: '', fields: ['name', 'slug', 'description', 'sort_order'] };
}

function editModule(mod: any) {
  form.value = { name: mod.name, slug: mod.slug || '', description: mod.description || '', sort_order: mod.sort_order, is_active: mod.is_active };
  modal.value = { open: true, title: 'Modül Düzenle', type: 'module', mode: 'edit', editId: mod.id, parentId: '', parentExamTypeId: '', fields: ['name', 'description', 'sort_order', 'is_active'] };
}

function addCourse(mod: any, et: any) {
  resetForm();
  modal.value = { open: true, title: `Yeni Ders (${mod.name})`, type: 'course', mode: 'create', editId: '', parentId: mod.id, parentExamTypeId: et.id, fields: ['name', 'slug', 'description', 'sort_order'] };
}

function editCourse(course: any) {
  form.value = { name: course.name, slug: course.slug || '', description: course.description || '', sort_order: course.sort_order, is_active: true };
  modal.value = { open: true, title: 'Ders Düzenle', type: 'course', mode: 'edit', editId: course.id, parentId: '', parentExamTypeId: '', fields: ['name', 'description', 'sort_order'] };
}

// ── Delete Confirmation ──

function confirmDeleteExamGroup(group: any) {
  deleteConfirm.value = { open: true, name: group.name, type: 'exam_group', id: group.id };
}

function confirmDeleteExamType(et: any) {
  deleteConfirm.value = { open: true, name: et.name, type: 'exam_type', id: et.id };
}

function confirmDeleteModule(mod: any) {
  deleteConfirm.value = { open: true, name: mod.name, type: 'module', id: mod.id };
}

function confirmDeleteCourse(course: any) {
  deleteConfirm.value = { open: true, name: course.name, type: 'course', id: course.id };
}

// ── Submit ──

async function submitModal() {
  saving.value = true;
  try {
    const { type, mode, editId, parentId, parentExamTypeId } = modal.value;
    let url = '';
    let body: any = {};

    if (type === 'exam_group') {
      if (mode === 'create') {
        url = '/api/admin/exam-groups';
        body = { name: form.value.name, slug: form.value.slug, description: form.value.description || undefined, sort_order: form.value.sort_order };
      } else {
        url = `/api/admin/exam-groups/${editId}`;
        body = { name: form.value.name, description: form.value.description || undefined, sort_order: form.value.sort_order, is_active: form.value.is_active };
      }
    } else if (type === 'exam_type') {
      if (mode === 'create') {
        url = '/api/admin/exam-types';
        body = { exam_group_id: parentId, name: form.value.name, slug: form.value.slug, description: form.value.description || undefined, sort_order: form.value.sort_order };
      } else {
        url = `/api/admin/exam-types/${editId}`;
        body = { name: form.value.name, description: form.value.description || undefined, sort_order: form.value.sort_order, is_active: form.value.is_active };
      }
    } else if (type === 'module') {
      if (mode === 'create') {
        url = '/api/admin/modules';
        body = { exam_type_id: parentId, name: form.value.name, slug: form.value.slug, description: form.value.description || undefined, sort_order: form.value.sort_order };
      } else {
        url = `/api/admin/modules/${editId}`;
        body = { name: form.value.name, description: form.value.description || undefined, sort_order: form.value.sort_order, is_active: form.value.is_active };
      }
    } else if (type === 'course') {
      if (mode === 'create') {
        url = '/api/admin/courses';
        body = { exam_type_id: parentExamTypeId, module_id: parentId, name: form.value.name, slug: form.value.slug, description: form.value.description || undefined, sort_order: form.value.sort_order };
      } else {
        url = `/api/admin/courses/${editId}`;
        body = { name: form.value.name, description: form.value.description || undefined, sort_order: form.value.sort_order };
      }
    }

    if (mode === 'create') {
      await api(url, { method: 'POST', body });
    } else {
      await api(url, { method: 'PATCH', body });
    }

    closeModal();
    await loadData();
  } finally {
    saving.value = false;
  }
}

async function executeDelete() {
  saving.value = true;
  try {
    const { type, id } = deleteConfirm.value;
    const urlMap = {
      exam_group: `/api/admin/exam-groups/${id}`,
      exam_type: `/api/admin/exam-types/${id}`,
      module: `/api/admin/modules/${id}`,
      course: `/api/admin/courses/${id}`,
    };
    await api(urlMap[type], { method: 'DELETE' });
    deleteConfirm.value.open = false;
    await loadData();
  } finally {
    saving.value = false;
  }
}

// ── Init ──
onMounted(loadData);
</script>

<style scoped>
.admin-label {
  @apply block text-sm font-medium text-gray-300 mb-1;
}
.admin-input {
  @apply w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-500;
}
.bg-gray-750 {
  background-color: rgb(42, 48, 60);
}
</style>
