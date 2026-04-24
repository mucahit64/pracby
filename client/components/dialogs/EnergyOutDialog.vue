<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="open"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5"
        @click.self="$emit('close')"
      >
        <div class="bg-white border-2 border-gray-200 rounded-3xl p-7 max-w-[360px] w-full flex flex-col items-center gap-3.5">
          <div class="text-4xl">🪫</div>
          <div class="text-xl font-black text-gray-800 text-center">Enerjin Bitti!</div>
          <div class="text-sm font-semibold text-gray-500 text-center">Enerjinin yenilenmesini bekle veya marketten satın al.</div>
          <div class="flex flex-col gap-2.5 w-full mt-1">
            <button
              class="w-full bg-primary text-white font-black text-base py-3.5 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 tracking-wide cursor-pointer"
              @click="$emit('go-store')"
            >
              🛒 Markete Git
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
defineProps<{
  open: boolean;
}>();

defineEmits<{
  close: [];
  'go-store': [];
}>();
</script>
