<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="visible" class="fixed inset-0 bg-black/60 z-[1000] flex items-end justify-center">
        <div class="bg-white border-2 border-gray-200 rounded-t-3xl p-7 pb-11 w-full max-w-[480px] flex flex-col items-center gap-3.5 animate-slide-up">
          <span class="text-5xl">💔</span>
          <h2 class="text-2xl font-black text-gray-800">Canın Bitti!</h2>
          <p class="text-sm font-semibold text-gray-400 text-center">Devam etmek için can satın al.</p>

          <!-- Balance pill -->
          <div class="flex items-center gap-2 bg-gray-50 border-2 border-gray-200 rounded-full px-5 py-2 my-1">
            <span class="text-lg">🌰</span>
            <span class="text-lg font-black text-amber-700">{{ acornBalance }}</span>
            <span class="text-xs font-bold text-gray-400 uppercase">Palamut</span>
          </div>

          <!-- Loading -->
          <div v-if="loading" class="flex justify-center py-3">
            <div class="w-7 h-7 border-3 border-gray-200 border-t-primary rounded-full animate-spin" />
          </div>

          <!-- Packages -->
          <div v-else class="flex flex-col gap-2.5 w-full">
            <button
              v-for="pkg in packages"
              :key="pkg.id"
              class="flex items-center gap-3.5 bg-gray-50 border-2 border-gray-200 rounded-2xl px-4 py-3.5 cursor-pointer transition-all hover:border-primary hover:bg-primary/5 disabled:opacity-40 disabled:cursor-not-allowed w-full font-[inherit]"
              :disabled="acornBalance < pkg.price_acorn || purchasingId !== null"
              @click="$emit('buy', pkg)"
            >
              <span class="text-2xl shrink-0">{{ pkg.icon_url }}</span>
              <span class="flex-1 text-sm font-extrabold text-gray-800 text-left">{{ pkg.name }}</span>
              <span class="shrink-0 text-sm font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full min-w-[64px] flex items-center justify-center">
                <span v-if="purchasingId === pkg.id" class="w-3.5 h-3.5 border-2 border-amber-200 border-t-amber-700 rounded-full animate-spin" />
                <template v-else>🌰 {{ pkg.price_acorn }}</template>
              </span>
            </button>
          </div>

          <div v-if="error" class="text-negative text-sm font-semibold text-center">{{ error }}</div>

          <button class="bg-transparent border-0 text-gray-400 text-sm font-bold cursor-pointer mt-1 hover:text-gray-800 transition-colors font-[inherit]" @click="$emit('decline')">Hayır, teşekkürler</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { HeartPackage } from '~/composables/useHeartDialog'

defineProps<{
  visible: boolean
  packages: HeartPackage[]
  acornBalance: number
  purchasingId: string | null
  loading: boolean
  error: string
}>()

defineEmits<{
  buy: [pkg: HeartPackage]
  decline: []
}>()
</script>
