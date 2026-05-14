<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center px-4">
    <div class="w-full max-w-sm">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-purple-400">Pracby Admin</h1>
        <p class="text-gray-400 mt-2">Yönetim paneline giriş yapın</p>
      </div>

      <form @submit.prevent="handleLogin" class="bg-gray-800 rounded-xl p-6 space-y-4 border border-gray-700">
        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Email veya Kullanıcı Adı</label>
          <input
            v-model="identifier"
            type="text"
            required
            class="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="admin@pracby.com"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-300 mb-1">Şifre</label>
          <div class="relative flex items-center">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              required
              class="w-full px-3 py-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="••••••••"
            />
            <button type="button" class="absolute right-2.5 bg-transparent border-0 cursor-pointer text-lg p-1 text-gray-400" tabindex="-1" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '🐵' }}
            </button>
          </div>
        </div>

        <p v-if="error" class="text-red-400 text-sm">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full py-2.5 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors"
        >
          {{ loading ? 'Giriş yapılıyor...' : 'Giriş Yap' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: false })

const identifier = ref('')
const password = ref('')

const showPassword = ref(false)

const error = ref('')
const loading = ref(false)

async function handleLogin() {
  error.value = ''
  loading.value = true

  try {
    const res = await $fetch<{ token: string; user: { id: string; email: string; username: string } }>('/api/auth/login', {
      method: 'POST',
      body: { identifier: identifier.value, password: password.value },
    })

    localStorage.setItem('pb_token', res.token)

    // Check if user is admin
    const profile = await $fetch<{ role?: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${res.token}` },
    })

    if (profile.role !== 'admin') {
      localStorage.removeItem('pb_token')
      error.value = 'Bu hesap admin yetkisine sahip değil.'
      return
    }

    await navigateTo('/admin')
  } catch (e: unknown) {
    const err = e as { data?: { error?: string; message?: string } }
    error.value = err?.data?.error ?? err?.data?.message ?? 'Giriş başarısız.'
  } finally {
    loading.value = false
  }
}
</script>
