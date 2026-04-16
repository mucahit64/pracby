<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

:root {
  --pb-purple: #7c3aed;
  --pb-purple-light: #8b5cf6;
  --pb-purple-dark: #6d28d9;
  --pb-purple-xlight: #ede9fe;
  --pb-bg: #131221;
  --pb-bg-card: #1e1c35;
  --pb-bg-card-hover: #252342;
  --pb-text: #e8e7f4;
  --pb-text-muted: #7a79a0;
  --pb-border: #2d2b50;
  --pb-green: #58cc02;
  --pb-green-dark: #45a000;
  --pb-green-bg: #0d3d00;
  --pb-red: #ff4b4b;
  --pb-red-bg: #3d0000;
  --pb-gold: #ffd700;
  --pb-orange: #ff9600;
  --pb-blue: #1cb0f6;
  --pb-sidebar-width: 250px;
  --pb-right-panel-width: 296px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body, #__nuxt {
  height: 100%;
  background: var(--pb-bg);
  color: var(--pb-text);
  font-family: 'Nunito', 'Segoe UI', sans-serif;
}

a { text-decoration: none; color: inherit; }
</style>
