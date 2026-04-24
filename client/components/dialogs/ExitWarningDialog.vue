<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="visible" class="fixed inset-0 bg-black/60 z-[1000] flex items-end justify-center" @click.self="$emit('continue')">
        <div class="bg-white border-2 border-gray-200 rounded-t-3xl p-7 pb-11 w-full max-w-[480px] flex flex-col items-center gap-3.5 animate-slide-up">
          <span class="text-5xl">⚠️</span>
          <h2 class="text-2xl font-black text-gray-800">Bekle!</h2>
          <p class="text-sm font-semibold text-gray-400 text-center">Şimdi çıkarsan tüm ilerlemeni kaybedeceksin!</p>
          <div class="flex flex-col gap-3 w-full pt-1">
            <button class="w-full bg-primary text-white font-black text-base py-4 rounded-2xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer font-[inherit]" @click="$emit('continue')">💪 Öğrenmeye Devam</button>
            <button class="w-full bg-white text-gray-400 font-extrabold text-sm py-3.5 rounded-2xl border-2 border-gray-200 hover:border-negative hover:text-negative transition-all cursor-pointer font-[inherit]" @click="$emit('exit')">🚪 Testten Çık</button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

defineEmits<{
  continue: []
  exit: []
}>()
</script>
