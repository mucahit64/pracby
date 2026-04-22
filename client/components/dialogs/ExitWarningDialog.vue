<template>
  <div v-if="visible" class="hd-overlay">
    <div class="hd-modal">
      <div class="hd-icon">⚠️</div>
      <div class="hd-title">Bekle!</div>
      <div class="hd-sub">Şimdi çıkarsan tüm ilerlemeni kaybedeceksin!</div>

      <div class="hd-warn-actions">
        <button class="hd-btn-continue" @click="$emit('continue')">💪 Öğrenmeye Devam</button>
        <button class="hd-btn-exit" @click="$emit('exit')">🚪 Testten Çık</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

defineEmits<{
  continue: []
  exit: []
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

.hd-warn-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-top: 4px;
}

.hd-btn-continue {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-bottom: 3px solid var(--pb-purple-dark);
  border-radius: 14px;
  padding: 16px;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  font-family: inherit;
  width: 100%;
  letter-spacing: 0.02em;
  transition: transform 0.12s;
}

.hd-btn-continue:hover { transform: translateY(-1px); }

.hd-btn-exit {
  background: none;
  border: 2px solid var(--pb-border);
  border-radius: 14px;
  padding: 14px;
  font-size: 0.95rem;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  color: var(--pb-text-muted);
  width: 100%;
  transition: all 0.12s;
}

.hd-btn-exit:hover {
  border-color: var(--pb-red);
  color: var(--pb-red);
}
</style>
