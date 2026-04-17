<template>
  <div class="rw-page">
    <div class="rw-card">
      <PbMascot :width="80" :height="100" />
      <h1 class="rw-title">Harika gidiyorsun! 🎉</h1>
      <p class="rw-message">
        İlerlemeni kaydetmek ve ücretsiz olarak öğrenmeye devam etmek için bir profil oluştur.
      </p>
      <div class="rw-actions">
        <NuxtLink to="/auth/register" class="pb-btn-primary rw-btn">Profil Oluştur</NuxtLink>
        <NuxtLink to="/auth/login" class="pb-btn-outline rw-btn">Giriş Yap</NuxtLink>
      </div>
      <button class="rw-skip" @click="navigateTo('/')">← Ana sayfaya dön</button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' });

onMounted(() => {
  if (localStorage.getItem('pb_token')) {
    navigateTo('/');
  }
});
</script>

<style scoped>
.rw-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 20px;
}

.rw-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: 420px;
  width: 100%;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
}

.rw-title {
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--pb-text);
}

.rw-message {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  line-height: 1.5;
}

.rw-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
}

.rw-btn {
  width: 100%;
  text-align: center;
}

.rw-skip {
  background: none;
  border: none;
  color: var(--pb-text-muted);
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  margin-top: 8px;
}

.rw-skip:hover {
  color: var(--pb-purple-light);
}
</style>
