<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5"
        @click.self="$emit('close')"
      >
        <div class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-4">
          <!-- Icon -->
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center text-4xl border-4"
            :class="locked ? 'bg-gray-100 border-gray-200' : 'bg-amber-50 border-amber-300'"
          >
            🎁
          </div>

          <!-- Locked state -->
          <template v-if="locked">
            <div class="flex flex-col items-center gap-1.5">
              <div class="text-lg font-black text-gray-800 text-center">Ödül Seni Bekliyor!</div>
              <p class="text-sm text-gray-500 font-semibold text-center">Bu ödülü kazanmak için önceki adımları tamamla.</p>
            </div>
            <div class="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 rounded-2xl px-5 py-3">
              <span class="text-2xl opacity-50">🌰</span>
              <span class="text-xl font-black text-gray-400">+{{ rewardAmount ?? 10 }}</span>
            </div>
            <button
              class="w-full bg-transparent text-primary font-extrabold text-sm py-3 rounded-xl border-2 border-primary hover:bg-primary/5 transition-all duration-150 cursor-pointer"
              @click="$emit('close')"
            >
              Tamam
            </button>
          </template>

          <!-- Unlocked state -->
          <template v-else>
            <div class="flex flex-col items-center gap-1.5">
              <div class="text-lg font-black text-gray-800 text-center">Tebrikler! 🎉</div>
              <p class="text-sm text-gray-500 font-semibold text-center">Bu bölümü tamamladın. Ödülünü almaya hazır mısın?</p>
            </div>
            <div class="flex items-center gap-2 bg-amber-50 border-2 border-amber-200 rounded-2xl px-5 py-3">
              <span class="text-2xl">🌰</span>
              <span class="text-xl font-black text-amber-700">+{{ rewardAmount ?? 10 }}</span>
            </div>
            <div class="flex flex-col gap-2.5 w-full mt-1">
              <button
                class="w-full bg-warning text-white font-black text-base py-3.5 rounded-xl border-b-4 border-amber-700 active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer"
                @click="$emit('claim')"
              >
                ÖDÜLÜ AL
              </button>
              <button
                class="w-full bg-transparent text-gray-500 font-extrabold text-sm py-3 rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all duration-150 cursor-pointer"
                @click="$emit('close')"
              >
                Kapat
              </button>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  open: boolean;
  locked: boolean;
  rewardAmount?: number;
}>();

defineEmits<{
  close: [];
  claim: [];
}>();
</script>
