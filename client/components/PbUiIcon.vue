<template>
  <!-- eslint-disable-next-line vue/no-v-html -- fixed paths below -->
  <svg class="pb-ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" v-html="PATHS[name]" />
</template>

<script setup lang="ts">
// Small single-color control icons (the mobile app uses Material icons for
// these). Brand icons are PbIcon.
const PATHS = {
  'eye': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off': '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/><path d="M3 3l18 18"/>',
  'pencil': '<path d="M4 20h4L19 9l-4-4L4 16v4Z"/><path d="m14 6 4 4"/>',
  'clock': '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  'refresh': '<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/>',
} as const

defineProps<{ name: keyof typeof PATHS }>()
</script>

<style scoped>
.pb-ui-icon {
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  vertical-align: -0.2em;
  flex-shrink: 0;
}
</style>
