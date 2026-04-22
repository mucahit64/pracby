<template>
  <div v-if="visible" class="hd-overlay">
    <div class="hd-modal">
      <div class="hd-icon">💔</div>
      <div class="hd-title">Canın Bitti!</div>
      <div class="hd-sub">Devam etmek için can satın al.</div>

      <div class="hd-balance">
        <span class="hd-balance-icon">🌰</span>
        <span class="hd-balance-val">{{ acornBalance }}</span>
        <span class="hd-balance-label">Palamut</span>
      </div>

      <div v-if="loading" class="hd-loading">
        <div class="hd-spinner" />
      </div>
      <div v-else class="hd-packages">
        <button
          v-for="pkg in packages"
          :key="pkg.id"
          class="hd-pkg"
          :class="{ 'hd-pkg--disabled': acornBalance < pkg.price_acorn || purchasingId !== null }"
          :disabled="acornBalance < pkg.price_acorn || purchasingId !== null"
          @click="$emit('buy', pkg)"
        >
          <span class="hd-pkg-icon">{{ pkg.icon_url }}</span>
          <span class="hd-pkg-name">{{ pkg.name }}</span>
          <span class="hd-pkg-price">
            <span v-if="purchasingId === pkg.id" class="hd-pkg-spinner" />
            <template v-else>🌰 {{ pkg.price_acorn }}</template>
          </span>
        </button>
      </div>

      <div v-if="error" class="hd-error">{{ error }}</div>

      <button class="hd-decline" @click="$emit('decline')">Hayır, teşekkürler</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { HeartPackage } from '~/composables/useHeartDialog'

defineProps<{
  visible: boolean
  packages: HeartPackage[]
  acornBalance: number
  purchasingId: string | null
  loading: boolean
  error: string
}>()

defineEmits<{
  buy: [pkg: HeartPackage]
  decline: []
}>()
</script>

<style scoped>
.hd-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 0;
  animation: hdFadeIn 0.2s ease;
}

@keyframes hdFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.hd-modal {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 24px 24px 0 0;
  padding: 28px 24px 44px;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  animation: hdSlideUp 0.3s ease;
}

@keyframes hdSlideUp {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.hd-icon {
  font-size: 3rem;
  line-height: 1;
}

.hd-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--pb-text);
}

.hd-sub {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--pb-text-muted);
  text-align: center;
}

.hd-balance {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 99px;
  padding: 8px 20px;
  margin: 4px 0;
}

.hd-balance-icon { font-size: 1.2rem; }

.hd-balance-val {
  font-size: 1.1rem;
  font-weight: 900;
  color: #cd853f;
}

.hd-balance-label {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--pb-text-muted);
  text-transform: uppercase;
}

.hd-loading {
  display: flex;
  justify-content: center;
  padding: 12px 0;
}

.hd-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid var(--pb-border);
  border-top-color: var(--pb-purple);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.hd-packages {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.hd-pkg {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--pb-bg);
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px 18px;
  cursor: pointer;
  font-family: inherit;
  color: var(--pb-text);
  transition: all 0.12s;
  width: 100%;
}

.hd-pkg:hover:not(:disabled) {
  border-color: var(--pb-purple-light);
  background: var(--pb-bg-card-hover);
}

.hd-pkg--disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.hd-pkg-icon { font-size: 1.4rem; flex-shrink: 0; }

.hd-pkg-name {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 800;
  text-align: left;
}

.hd-pkg-price {
  font-size: 0.88rem;
  font-weight: 800;
  color: #cd853f;
  background: rgba(205, 133, 63, 0.12);
  padding: 4px 12px;
  border-radius: 99px;
  min-width: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hd-pkg-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(205, 133, 63, 0.3);
  border-top-color: #cd853f;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  display: inline-block;
}

.hd-error {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--pb-red);
  text-align: center;
}

.hd-decline {
  background: none;
  border: none;
  color: var(--pb-text-muted);
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  padding: 8px 16px;
  border-radius: 8px;
  transition: color 0.12s;
  margin-top: 4px;
}

.hd-decline:hover { color: var(--pb-text); }
</style>
