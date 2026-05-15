<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-gray-200 px-5 py-3">

    <div v-if="activeTooltip" class="fixed inset-0 z-[40]" @click="close" />

    <div class="relative z-[50] flex items-center justify-center gap-6 pointer-events-none">

      <!-- Streak -->
      <div class="relative pointer-events-auto">
        <button
          class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1"
          @click="toggle('streak')"
        >
          🔥 {{ streakCount }}
        </button>
        <div v-if="activeTooltip === 'streak'" class="absolute top-full mt-2 left-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] left-8 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Bu Haftaki Serin</div>
          <div v-if="streakHistory.length" class="flex justify-between gap-0.5">
            <div v-for="day in streakHistory" :key="day.date" class="flex flex-col items-center gap-1 flex-1">
              <div
                class="w-5 h-5 rounded-full"
                :class="{
                  'bg-positive': day.done && !day.isToday,
                  'bg-primary ring-2 ring-primary/40': day.isToday,
                  'bg-gray-200': !day.done && !day.isToday,
                }"
              />
              <span class="text-[0.6rem] font-bold text-gray-400">{{ day.label }}</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5">
            <span>🔥</span>
            <span class="text-xl font-black text-gray-800">{{ streakCount }}</span>
            <span class="text-sm font-semibold text-gray-400">günlük seri</span>
          </div>
        </div>
      </div>

      <!-- Acorns -->
      <div class="relative pointer-events-auto">
        <button
          class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1"
          @click="toggle('acorns')"
        >
          🌰 {{ acornBalance }}
        </button>
        <div v-if="activeTooltip === 'acorns'" class="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Palamutların</div>
          <div class="flex items-center gap-2">
            <span class="text-3xl">🌰</span>
            <span class="text-xl font-black text-gray-800">{{ acornBalance }}</span>
          </div>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Doğru cevap = 1 🌰</p>
          <p class="text-xs text-gray-400 font-semibold leading-relaxed">Palamutlarınla mağazadan ürün al!</p>
          <NuxtLink
            to="/store"
            class="w-full bg-primary text-white font-extrabold text-sm py-2.5 rounded-xl border-b-[3px] border-primary-dark text-center block"
            @click="close"
          >
            Mağazaya Git →
          </NuxtLink>
        </div>
      </div>

      <!-- Energy -->
      <div class="relative pointer-events-auto">
        <button
          class="flex items-center gap-1 text-base font-extrabold text-gray-800 cursor-pointer bg-transparent border-0 font-[inherit] p-1"
          @click="toggle('energy')"
        >
          <template v-if="unlimitedEnergy">♾️🔋</template>
          <template v-else>
            🔋 {{ energyCount }}
            <span v-if="energyCountdown" class="ml-1 text-xs font-bold text-white bg-negative px-1.5 py-0.5 rounded-full tabular-nums tracking-wide">
              {{ energyCountdown }}
            </span>
          </template>
        </button>
        <div v-if="activeTooltip === 'energy'" class="absolute top-full mt-2 right-0 z-[500] w-60 bg-white border-2 border-gray-200 rounded-2xl p-3.5 flex flex-col gap-2.5 shadow-lg">
          <div class="absolute -top-[8px] right-8 w-3.5 h-3.5 bg-white border-t-2 border-l-2 border-gray-200 rotate-45 rounded-tl-[2px]" />
          <div class="text-[0.72rem] font-extrabold text-gray-400 uppercase tracking-widest">Enerjin</div>
          <template v-if="unlimitedEnergy">
            <div class="flex items-center gap-2">
              <span class="text-2xl">♾️🔋</span>
            </div>
            <div class="text-sm font-bold text-positive text-center">Sınırsız enerji aktif!</div>
          </template>
          <template v-else>
            <div class="flex items-center gap-2">
              <span class="text-2xl">🔋</span>
              <span class="text-2xl font-black text-gray-800">{{ energyCount }}</span>
              <span class="text-sm font-semibold text-gray-400">/ 25</span>
            </div>
            <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-primary rounded-full transition-all duration-300" :style="{ width: `${(energyCount / 25) * 100}%` }" />
            </div>
            <div v-if="energyCountdown" class="flex items-center gap-2 bg-negative/10 rounded-xl px-2.5 py-2">
              <span class="text-xs font-bold text-gray-400">Sonraki enerji</span>
              <span class="text-xs font-extrabold text-negative tabular-nums tracking-wide">⏱ {{ energyCountdown }}</span>
            </div>
            <div v-else-if="energyCount >= 25" class="text-sm font-bold text-positive text-center">Enerjin dolu! 🎉</div>
            <NuxtLink
              to="/store"
              class="w-full bg-primary text-white font-extrabold text-sm py-2.5 rounded-xl border-b-[3px] border-primary-dark text-center block"
              @click="close"
            >
              Enerji Satın Al →
            </NuxtLink>
          </template>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
type MobileTooltip = 'streak' | 'acorns' | 'energy'

const { acornBalance } = useAcornBalance()
const { energyCount, energyCountdown, unlimitedEnergy } = useEnergyTimer()
const { streakCount, streakHistory } = useUserSession()

const activeTooltip = useState<MobileTooltip | null>('pbMobileTooltip', () => null)

function toggle(name: MobileTooltip) {
  activeTooltip.value = activeTooltip.value === name ? null : name
}

function close() {
  activeTooltip.value = null
}
</script>
