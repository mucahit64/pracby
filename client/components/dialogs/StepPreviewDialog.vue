<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="open && node"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5"
        @click.self="$emit('close')"
      >
        <!-- FINAL dialog -->
        <div
          v-if="node.isFinalAvailable || node.type === 'boss'"
          class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5"
        >
          <div
            class="w-full rounded-2xl p-5 flex flex-col items-center gap-1"
            :class="node.isBossNext ? 'bg-gradient-to-br from-primary to-negative' : 'bg-gradient-to-br from-amber-700 to-warning'"
          >
            <span class="text-4xl">⚔️</span>
            <div class="text-lg font-black text-white">{{ node.type === 'boss' ? 'Konu Finali' : 'Adım Finali' }}</div>
            <div class="text-sm font-semibold text-white/80">{{ node.name }}</div>
          </div>
          <div class="flex flex-col items-center gap-2 w-full">
            <div v-if="node.type !== 'boss'" class="flex items-center gap-2 text-sm font-bold text-positive">
              <span>✓</span>
              <span>{{ node.testsRequired }} / {{ node.testsRequired }} test tamamlandı</span>
            </div>
            <p class="text-sm text-gray-500 font-semibold text-center">
              {{ node.isBossNext ? 'Bu final testini geçerek adımı tamamla!' : 'Tüm adım sorularından karma olarak sınav yapılacak.' }}
            </p>
          </div>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button
              class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer"
              @click="$emit('start')"
            >
              ⚔️ ŞIMDI BAŞLAT
            </button>
            <button
              class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer"
              @click="$emit('close')"
            >
              Kapat
            </button>
          </div>
        </div>

        <!-- NORMAL test dialog -->
        <div v-else class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5">
          <div class="flex flex-col items-center gap-1.5">
            <span class="text-4xl">📝</span>
            <div class="text-lg font-black text-gray-800 text-center">{{ node.name }}</div>
          </div>
          <div class="text-sm font-extrabold text-primary tracking-wide uppercase">
            Test {{ node.testsCompleted + 1 }} / {{ node.testsRequired + 1 }}
          </div>
          <!-- Progress dots row -->
          <div class="flex gap-2 items-center">
            <span
              v-for="t in node.testsRequired"
              :key="'sd-t' + t"
              class="w-3 h-3 rounded-full transition-colors"
              :class="{
                'bg-positive': t <= node.testsCompleted,
                'bg-primary w-3.5 h-3.5 ring-2 ring-primary/40': t === node.testsCompleted + 1,
                'bg-gray-200': t > node.testsCompleted + 1,
              }"
            />
            <span class="w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-amber-700" />
          </div>
          <p class="text-sm text-gray-500 font-semibold text-center">Bu testi tamamladığında bir sonraki adıma geçeceksin.</p>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button
              class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer"
              @click="$emit('start')"
            >
              BAŞLAT
            </button>
            <button
              class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer"
              @click="$emit('close')"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Test {
  id: string;
  name: string;
  sort_order: number;
}

interface LessonNode {
  id: string;
  name: string;
  icon: string;
  type: 'lesson' | 'chest' | 'boss';
  status: 'completed' | 'active' | 'locked';
  crowns: number;
  topicId: string;
  stepId?: string;
  testId?: string;
  sessionType: string;
  testsCompleted: number;
  testsRequired: number;
  isFinalAvailable: boolean;
  isBossNext: boolean;
  nextTestId?: string;
  tests: Test[];
}

defineProps<{
  open: boolean;
  node: LessonNode | null;
}>();

defineEmits<{
  close: [];
  start: [];
}>();
</script>
