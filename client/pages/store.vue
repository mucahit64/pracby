<template>
  <div class="store-page">
    <div class="store-header">
      <h1 class="store-title">🌰 Market</h1>
      <div class="store-balance">
        <span class="store-balance-icon">🌰</span>
        <span class="store-balance-val">{{ balance }}</span>
        <span class="store-balance-label">Acorn</span>
      </div>
    </div>

    <!-- Store items (non-heart) -->
    <div class="store-section">
      <div class="store-section-title">Ürünler</div>
      <!-- Guest banner -->
      <div v-if="isGuest" class="store-guest-banner">
        <span class="store-guest-banner-icon">🌰</span>
        <div class="store-guest-banner-body">
          <strong>{{ balance }} palamut kazandın!</strong>
          <span> Mağazada harcamak için bir profil oluştur!</span>
        </div>
        <NuxtLink to="/auth/register" class="store-guest-banner-btn">Profil Oluştur</NuxtLink>
      </div>
      <div v-if="loadingItems" class="store-loading">Yükleniyor…</div>
      <div v-else class="store-grid">
        <div
          v-for="item in regularItems"
          :key="item.id"
          class="store-item-card"
          :class="{ 'store-item-card--dimmed': isGuest }"
        >
          <div class="store-item-icon">{{ item.icon_url || '📦' }}</div>
          <div class="store-item-info">
            <div class="store-item-name">{{ item.name }}</div>
            <div class="store-item-desc">{{ item.description }}</div>
            <div v-if="item.duration_hours" class="store-item-duration">
              ⏱️ {{ item.duration_hours }}s süre
            </div>
          </div>
          <button
            class="store-item-buy"
            :disabled="isGuest || balance < item.price_acorn"
            @click="openPurchaseModal(item)"
          >
            🌰 {{ item.price_acorn }}
          </button>
        </div>
      </div>
    </div>

    <!-- Heart refill packages -->
    <div v-if="heartItems.length > 0" class="store-section">
      <div class="store-section-title">❤️ Can Doldur</div>
      <div class="store-grid">
        <div
          v-for="item in heartItems"
          :key="item.id"
          class="store-item-card store-item-card--heart"
        >
          <div class="store-item-icon">{{ item.icon_url || '❤️' }}</div>
          <div class="store-item-info">
            <div class="store-item-name">{{ item.name }}</div>
            <div class="store-item-desc">{{ item.description }}</div>
          </div>
          <button
            class="store-item-buy"
            :disabled="balance < item.price_acorn"
            @click="openPurchaseModal(item)"
          >
            🌰 {{ item.price_acorn }}
          </button>
        </div>
      </div>
    </div>

    <!-- Active effects (logged-in only) -->
    <div v-if="!isGuest && effects.length > 0" class="store-section">
      <div class="store-section-title">Aktif Etkiler</div>
      <div class="store-effects">
        <div v-for="effect in effects" :key="effect.item_type" class="store-effect-card">
          <span class="store-effect-type">{{ effectLabel(effect.item_type) }}</span>
          <span class="store-effect-expires">{{ formatExpiry(effect.expires_at) }} kaldı</span>
        </div>
      </div>
    </div>

    <!-- Inventory (logged-in only) -->
    <div v-if="!isGuest" class="store-section">
      <div class="store-section-title">Envanter</div>
      <div v-if="loadingInventory" class="store-loading">Yükleniyor…</div>
      <div v-else-if="inventory.length === 0" class="store-empty">Henüz hiç ürün almadınız.</div>
      <div v-else class="store-inventory">
        <div v-for="item in inventory" :key="item.id" class="store-inv-card">
          <span class="store-inv-icon">{{ item.icon_url || '📦' }}</span>
          <span class="store-inv-name">{{ item.name }}</span>
          <span class="store-inv-qty">x{{ item.quantity }}</span>
          <button
            v-if="item.duration_hours"
            class="store-inv-use"
            @click="activateItem(item)"
          >
            Kullan
          </button>
        </div>
      </div>
    </div>

    <!-- Acorn packages (logged-in only) -->
    <div v-if="!isGuest" class="store-section">
      <div class="store-section-title">🌰 Buy Acorn</div>
      <div class="store-packages">
        <div v-for="pkg in packages" :key="pkg.id" class="store-package-card">
          <div class="store-package-amount">🌰 {{ pkg.amount }}</div>
          <div class="store-package-label">{{ pkg.label }}</div>
          <button class="store-package-btn" @click="buyAcorn(pkg)">
            Satın Al
          </button>
        </div>
      </div>
    </div>

    <!-- Purchase modal -->
    <div v-if="purchaseModal" class="store-modal-overlay" @click.self="purchaseModal = null">
      <div class="store-modal">
        <div class="store-modal-icon">{{ purchaseModal.icon_url || '📦' }}</div>
        <h2>{{ purchaseModal.name }}</h2>
        <p>{{ purchaseModal.description }}</p>
        <div class="store-modal-price">🌰 {{ purchaseModal.price_acorn }}</div>
        <div class="store-modal-actions">
          <button class="pb-btn-primary" :disabled="purchasing" @click="confirmPurchase">
            {{ purchasing ? 'İşleniyor…' : 'Satın Al' }}
          </button>
          <button class="pb-btn-outline" @click="purchaseModal = null">İptal</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface StoreItem {
  id: string;
  name: string;
  description: string;
  icon_url: string;
  price_acorn: number;
  item_type: string;
  duration_hours: number | null;
  metadata?: { heart_count?: number };
}

interface InventoryItem {
  id: string;
  name: string;
  icon_url: string;
  item_type: string;
  quantity: number;
  duration_hours: number | null;
  item_id?: string;
}

interface ActiveEffect {
  item_type: string;
  expires_at: string;
}

interface AcornPackage {
  id: string;
  amount: number;
  label: string;
}

const balance = ref(0);
const isGuest = ref(false);
const sharedHearts = useState('userHearts', () => 5);
const items = ref<StoreItem[]>([]);
const inventory = ref<InventoryItem[]>([]);
const effects = ref<ActiveEffect[]>([]);
const packages = ref<AcornPackage[]>([]);
const loadingItems = ref(true);
const loadingInventory = ref(true);
const purchaseModal = ref<StoreItem | null>(null);
const purchasing = ref(false);

const regularItems = computed(() => items.value.filter((i) => i.item_type !== 'heart_refill'));
const heartItems = computed(() => items.value.filter((i) => i.item_type === 'heart_refill'));

function getToken() {
  return localStorage.getItem('pb_token') ?? '';
}

function headers() {
  return { Authorization: `Bearer ${getToken()}` };
}

async function fetchBalance() {
  try {
    const user = await $fetch<{ acorn_balance: number }>('/api/users/me', { headers: headers() });
    balance.value = user.acorn_balance ?? 0;
  } catch { /* skip */ }
}

async function fetchItems() {
  try {
    items.value = await $fetch<StoreItem[]>('/api/store/items', { headers: headers() });
  } catch { /* skip */ }
  loadingItems.value = false;
}

async function fetchInventory() {
  try {
    inventory.value = await $fetch<InventoryItem[]>('/api/store/inventory', { headers: headers() });
  } catch { /* skip */ }
  loadingInventory.value = false;
}

async function fetchEffects() {
  try {
    effects.value = await $fetch<ActiveEffect[]>('/api/store/effects', { headers: headers() });
  } catch { /* skip */ }
}

async function fetchPackages() {
  try {
    packages.value = await $fetch<AcornPackage[]>('/api/store/acorn-packages', { headers: headers() });
  } catch { /* skip */ }
}

function openPurchaseModal(item: StoreItem) {
  purchaseModal.value = item;
}

async function confirmPurchase() {
  if (!purchaseModal.value) return;
  purchasing.value = true;

  // Guest: only heart refills, handled locally
  if (isGuest.value) {
    if (purchaseModal.value.item_type === 'heart_refill') {
      const { spendAcorns, setHearts } = useGuestState();
      if (spendAcorns(purchaseModal.value.price_acorn)) {
        balance.value -= purchaseModal.value.price_acorn;
        const heartsToAdd = purchaseModal.value.metadata?.heart_count ?? 1;
        const newHearts = Math.min(5, sharedHearts.value + heartsToAdd);
        sharedHearts.value = newHearts;
        setHearts(newHearts);
      }
    }
    purchaseModal.value = null;
    purchasing.value = false;
    return;
  }

  try {
    const result = await $fetch<{ balance: number; hearts?: number }>('/api/store/purchase', {
      method: 'POST',
      headers: headers(),
      body: { itemId: purchaseModal.value.id, quantity: 1 },
    });
    balance.value = result.balance;
    if (result.hearts !== undefined) {
      const heartsState = useState('userHearts', () => 5);
      heartsState.value = result.hearts;
    }
    purchaseModal.value = null;
    await fetchInventory();
  } catch { /* skip */ }
  purchasing.value = false;
}

async function activateItem(item: InventoryItem) {
  try {
    await $fetch(`/api/store/activate/${item.item_id}`, {
      method: 'POST',
      headers: headers(),
    });
    await Promise.all([fetchInventory(), fetchEffects()]);
  } catch { /* skip */ }
}

function buyAcorn(_pkg: AcornPackage) {
  alert('Payment system coming soon!');
}

function effectLabel(type: string) {
  const labels: Record<string, string> = {
    streak_freeze: '🧊 Seri Dondurma',
    unlimited_lives: '❤️‍🔥 Sınırsız Can',
    xp_boost: '⚡ XP Boost',
  };
  return labels[type] || type;
}

function formatExpiry(expiresAt: string) {
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return 'Bitti';
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  if (hours > 0) return `${hours}s ${mins}dk`;
  return `${mins}dk`;
}

onMounted(() => {
  const token = getToken();
  isGuest.value = !token;

  if (!token) {
    // Guest mode: read from local state
    const { state: gs } = useGuestState();
    balance.value = gs.value.acornBalance;
    sharedHearts.value = gs.value.heartsCount;
    fetchItems(); // items are public
    loadingInventory.value = false;
    return;
  }

  fetchBalance();
  fetchItems();
  fetchInventory();
  fetchEffects();
  fetchPackages();
});
</script>

<style scoped>
.store-page {
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 40px;
}

.store-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 24px;
}

.store-title {
  font-size: 1.5rem;
  font-weight: 900;
}

.store-balance {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 99px;
  padding: 8px 16px;
}

.store-balance-icon { font-size: 1.2rem; }
.store-balance-val { font-weight: 900; font-size: 1.1rem; color: #cd853f; }
.store-balance-label { font-size: 0.75rem; font-weight: 700; color: var(--pb-text-muted); }

.store-section {
  margin-bottom: 28px;
}

.store-section-title {
  font-size: 1rem;
  font-weight: 800;
  margin-bottom: 12px;
  color: var(--pb-text);
}

.store-loading, .store-empty {
  color: var(--pb-text-muted);
  font-weight: 600;
  padding: 12px 0;
}

/* Item grid */
.store-grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.store-item-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 16px;
  transition: background 0.12s;
}

.store-item-card:hover {
  background: var(--pb-bg-card-hover);
}

.store-item-icon { font-size: 2rem; flex-shrink: 0; }

.store-item-info { flex: 1; }
.store-item-name { font-weight: 800; font-size: 0.95rem; }
.store-item-desc { font-size: 0.78rem; color: var(--pb-text-muted); font-weight: 600; margin-top: 2px; }
.store-item-duration { font-size: 0.72rem; color: var(--pb-text-muted); margin-top: 4px; }

.store-item-buy {
  background: rgba(205, 133, 63, 0.15);
  border: 2px solid #cd853f;
  border-radius: 12px;
  padding: 10px 16px;
  font-family: inherit;
  font-weight: 800;
  font-size: 0.85rem;
  color: #cd853f;
  cursor: pointer;
  transition: all 0.12s;
  flex-shrink: 0;
}

.store-item-buy:hover:not(:disabled) {
  background: rgba(205, 133, 63, 0.25);
}

.store-item-buy:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Effects */
.store-effects {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.store-effect-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(124, 58, 237, 0.1);
  border: 2px solid var(--pb-purple);
  border-radius: 14px;
  padding: 12px 16px;
}

.store-effect-type { font-weight: 800; font-size: 0.9rem; }
.store-effect-expires { font-size: 0.8rem; color: var(--pb-text-muted); font-weight: 600; }

/* Inventory */
.store-inventory {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.store-inv-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 12px;
  padding: 12px 16px;
}

.store-inv-icon { font-size: 1.3rem; }
.store-inv-name { flex: 1; font-weight: 700; font-size: 0.9rem; }
.store-inv-qty { font-weight: 800; font-size: 0.85rem; color: var(--pb-text-muted); }

.store-inv-use {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 14px;
  font-family: inherit;
  font-weight: 800;
  font-size: 0.78rem;
  cursor: pointer;
  border-bottom: 2px solid var(--pb-purple-dark);
}

/* Packages */
.store-packages {
  display: flex;
  gap: 10px;
}

.store-package-card {
  flex: 1;
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 16px;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.store-package-amount { font-size: 1.3rem; font-weight: 900; color: #cd853f; }
.store-package-label { font-size: 0.75rem; font-weight: 700; color: var(--pb-text-muted); }

.store-package-btn {
  background: rgba(205, 133, 63, 0.15);
  border: 2px solid #cd853f;
  border-radius: 10px;
  padding: 8px 16px;
  font-family: inherit;
  font-weight: 800;
  font-size: 0.78rem;
  color: #cd853f;
  cursor: pointer;
  transition: all 0.12s;
}

.store-package-btn:hover {
  background: rgba(205, 133, 63, 0.25);
}

/* Guest banner */
.store-guest-banner {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(205, 133, 63, 0.12);
  border: 2px solid rgba(205, 133, 63, 0.35);
  border-radius: 14px;
  padding: 12px 16px;
  margin-bottom: 12px;
}

.store-guest-banner-icon { font-size: 1.4rem; flex-shrink: 0; }

.store-guest-banner-body {
  flex: 1;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--pb-text);
  line-height: 1.4;
}

.store-guest-banner-btn {
  background: var(--pb-purple);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 14px;
  font-size: 0.78rem;
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
}

.store-item-card--dimmed {
  opacity: 0.6;
}

/* Modal */
.store-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.store-modal {
  background: var(--pb-bg-card);
  border: 2px solid var(--pb-border);
  border-radius: 20px;
  padding: 32px 28px;
  max-width: 360px;
  width: 90%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.store-modal-icon { font-size: 3rem; }
.store-modal h2 { font-size: 1.1rem; font-weight: 900; }
.store-modal p { font-size: 0.85rem; color: var(--pb-text-muted); font-weight: 600; }
.store-modal-price { font-size: 1.2rem; font-weight: 900; color: #cd853f; }

.store-modal-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-top: 8px;
}

.store-modal-actions .pb-btn-primary,
.store-modal-actions .pb-btn-outline {
  width: 100%;
}
</style>
