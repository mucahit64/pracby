<template>
  <!-- eslint-disable-next-line vue/no-v-html -- local SVG files from assets/icons -->
  <span class="pb-icon" role="img" :aria-hidden="!label" :aria-label="label" v-html="svg" />
</template>

<script setup lang="ts">
// Same SVG files as the mobile app (pracby_mobile/assets/icons). Sized to 1.2em so the
// icon matches the emoji it replaces; set the size with a text-* class.
const files = import.meta.glob('~/assets/icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const icons = Object.fromEntries(
  Object.entries(files).map(([path, svg]) => [path.split('/').pop()!.replace('.svg', ''), svg]),
)

const props = defineProps<{ name: string; label?: string }>()
const svg = computed(() => icons[props.name] ?? '')
</script>

<style scoped>
.pb-icon {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.25em;
  flex-shrink: 0;
}
.pb-icon :deep(svg) {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
