<template>
  <div class="pb-auth-page">
    <NuxtLink to="/" class="pb-auth-close">✕</NuxtLink>
    <div class="pb-auth-card">
      <div class="pb-auth-logo">
        <PbMascot :width="64" :height="80" />
        <h1 class="pb-auth-logo-text">pracby</h1>
      </div>

      <h2 class="pb-auth-title">Tekrar hoş geldin!</h2>

      <form class="pb-auth-form" @submit.prevent="submit">
        <div class="pb-field">
          <label class="pb-label">E-posta veya Kullanıcı Adı</label>
          <input
            v-model="form.identifier"
            type="text"
            class="pb-input"
            placeholder="E-posta veya kullanıcı adı"
            autocomplete="username"
            required
          />
        </div>

        <div class="pb-field">
          <label class="pb-label">Şifre</label>
          <input
            v-model="form.password"
            type="password"
            class="pb-input"
            placeholder="••••••"
            autocomplete="current-password"
            required
          />
        </div>

        <p v-if="error" class="pb-auth-error">{{ error }}</p>

        <button type="submit" class="pb-btn-primary" :disabled="loading">
          <span v-if="loading">Giriş yapılıyor…</span>
          <span v-else>Giriş Yap</span>
        </button>
      </form>

      <p class="pb-auth-switch">
        Hesabın yok mu?
        <NuxtLink to="/auth/register" class="pb-auth-link">Kayıt Ol</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false });

const router = useRouter();
const form = reactive({ identifier: '', password: '' });
const error = ref('');
const loading = ref(false);

const submit = async () => {
  error.value = '';
  loading.value = true;
  try {
    const data = await $fetch<{ token: string }>('/api/auth/login', {
      method: 'POST',
      body: form,
    });
    localStorage.setItem('pb_token', data.token);
    await router.push('/');
  } catch (e: unknown) {
    const err = e as { data?: { message?: string } };
    error.value = err?.data?.message ?? 'Giriş başarısız. Bilgilerini kontrol et.';
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.pb-auth-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--pb-bg);
  padding: 24px;
  position: relative;
}

.pb-auth-close {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  color: var(--pb-text);
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  z-index: 10;
  transition: background 0.15s;
}

.pb-auth-close:hover {
  background: var(--pb-border);
}

.pb-auth-card {
  width: 100%;
  max-width: 420px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.pb-auth-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.pb-auth-logo-text {
  font-size: 2rem;
  font-weight: 900;
  color: var(--pb-purple-light);
}

.pb-auth-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--pb-text);
  text-align: center;
  margin-top: -8px;
}

.pb-auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.pb-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.pb-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.pb-input {
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 12px 16px;
  color: var(--pb-text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.15s;
  outline: none;
}

.pb-input:focus {
  border-color: var(--pb-purple-light);
}

.pb-auth-error {
  color: var(--pb-red);
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.pb-btn-primary {
  background: var(--pb-purple);
  color: #fff;
  border: none;
  border-radius: 14px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
  margin-top: 4px;
}

.pb-btn-primary:hover:not(:disabled) {
  background: var(--pb-purple-light);
}

.pb-btn-primary:active:not(:disabled) {
  transform: scale(0.98);
}

.pb-btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.pb-auth-switch {
  text-align: center;
  font-size: 0.9rem;
  color: var(--pb-text-muted);
}

.pb-auth-link {
  color: var(--pb-purple-light);
  font-weight: 700;
  text-decoration: underline;
}
</style>
