<template>
  <div class="min-h-screen bg-[#f7f8fc] text-gray-900">
    <header class="border-b border-gray-200 bg-white/95">
      <div class="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
        <NuxtLink to="/" aria-label="Pracby ana sayfa">
          <span class="text-xl font-black text-primary sm:text-2xl">pracby</span>
        </NuxtLink>
      </div>
    </header>

    <main class="mx-auto max-w-3xl px-4 py-8 sm:px-5 sm:py-12">
      <h1 class="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">{{ title }}</h1>
      <p class="mt-2 text-sm font-semibold text-gray-400">Son güncelleme: {{ LEGAL.updatedAt }}</p>
      <div class="legal mt-8">
        <slot />
      </div>
    </main>

    <footer class="border-t border-gray-200 bg-white">
      <div class="mx-auto flex max-w-3xl flex-col gap-3 px-4 py-6 text-sm font-semibold text-gray-500 sm:px-5 sm:flex-row sm:items-center sm:justify-between">
        <span>© {{ new Date().getFullYear() }} Pracby</span>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <NuxtLink v-for="link in LEGAL_LINKS" :key="link.to" :to="link.to" class="hover:text-primary">{{ link.label }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.legal { color: #374151; font-size: 0.975rem; line-height: 1.7; }
.legal :deep(h2) { margin: 2rem 0 0.75rem; font-size: 1.2rem; font-weight: 900; color: #111827; }
.legal :deep(p) { margin: 0 0 0.9rem; }
.legal :deep(ul) { margin: 0 0 0.9rem; padding-left: 1.25rem; list-style: disc; }
.legal :deep(li) { margin-bottom: 0.35rem; }
.legal :deep(strong) { color: #111827; }
.legal :deep(a) { @apply text-primary font-bold underline; }
</style>
