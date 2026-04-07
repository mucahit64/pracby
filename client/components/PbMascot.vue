<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 80 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Bushy tail (behind body) -->
    <path
      d="M48 72 C72 68 78 48 74 30 C70 14 56 10 50 20"
      stroke="#5b21b6"
      stroke-width="16"
      stroke-linecap="round"
      fill="none"
    />
    <path
      d="M48 72 C72 68 78 48 74 30 C70 14 56 10 50 20"
      stroke="#7c3aed"
      stroke-width="11"
      stroke-linecap="round"
      fill="none"
    />
    <path
      d="M48 72 C72 68 78 48 74 30 C70 14 56 10 50 20"
      stroke="#a78bfa"
      stroke-width="5"
      stroke-linecap="round"
      fill="none"
    />

    <!-- Body -->
    <ellipse cx="36" cy="78" rx="20" ry="22" fill="#6d28d9" />

    <!-- Belly -->
    <ellipse cx="36" cy="82" rx="12" ry="14" fill="#ddd6fe" />

    <!-- Left arm -->
    <path
      d="M20 72 C12 67 11 79 18 82"
      stroke="#6d28d9"
      stroke-width="8"
      stroke-linecap="round"
      fill="none"
    />
    <!-- Right arm -->
    <path
      d="M52 72 C60 67 61 79 54 82"
      stroke="#6d28d9"
      stroke-width="8"
      stroke-linecap="round"
      fill="none"
    />

    <!-- Acorn in hands -->
    <ellipse cx="36" cy="87" rx="7" ry="5" fill="#92400e" />
    <ellipse cx="36" cy="83" rx="7" ry="5" fill="#d97706" />
    <rect x="33" y="78" width="6" height="4" rx="1" fill="#78350f" />
    <line x1="36" y1="75" x2="36" y2="79" stroke="#78350f" stroke-width="1.5" stroke-linecap="round" />

    <!-- Left ear -->
    <ellipse cx="20" cy="30" rx="7" ry="9" fill="#6d28d9" />
    <ellipse cx="20" cy="30" rx="4" ry="6" fill="#c4b5fd" />

    <!-- Right ear -->
    <ellipse cx="52" cy="30" rx="7" ry="9" fill="#6d28d9" />
    <ellipse cx="52" cy="30" rx="4" ry="6" fill="#c4b5fd" />

    <!-- Head -->
    <circle cx="36" cy="46" r="21" fill="#7c3aed" />

    <!-- Eyes white -->
    <circle cx="28" cy="44" r="7" fill="white" />
    <circle cx="44" cy="44" r="7" fill="white" />

    <!-- Pupils -->
    <circle cx="29.5" cy="45.5" r="4.5" fill="#1e1b4b" />
    <circle cx="45.5" cy="45.5" r="4.5" fill="#1e1b4b" />

    <!-- Eye shine -->
    <circle cx="31" cy="43.5" r="2" fill="white" />
    <circle cx="47" cy="43.5" r="2" fill="white" />

    <!-- Blush left -->
    <circle cx="21" cy="52" r="5" fill="#f9a8d4" opacity="0.55" />
    <!-- Blush right -->
    <circle cx="51" cy="52" r="5" fill="#f9a8d4" opacity="0.55" />

    <!-- Nose -->
    <ellipse cx="36" cy="56" rx="4.5" ry="3" fill="#ede9fe" />

    <!-- Mouth -->
    <path
      d="M30 61 Q36 67 42 61"
      stroke="#a78bfa"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: number | string;
    height?: number | string;
  }>(),
  { width: 80, height: 100 }
);
</script>
