<template>
  <div class="flex flex-col gap-7 max-w-[600px] mx-auto pb-10">
    <div class="flex items-center justify-between py-2">
      <h1 class="text-2xl font-black text-gray-800">🌰 Market</h1>
    </div>

    <!-- Store Items -->
    <div class="flex flex-col gap-3">
      <h2 class="text-base font-extrabold text-gray-800">Ürünler</h2>

      <!-- Guest banner -->
      <div v-if="isGuest" class="flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl px-4 py-3">
        <span class="text-2xl shrink-0">🌰</span>
        <div class="flex-1 text-sm font-semibold text-gray-800 leading-snug">
          <strong>{{ balance }} palamut kazandın!</strong> Mağazada harcamak için bir profil oluştur!
        </div>
        <NuxtLink to="/auth/register" class="shrink-0 bg-primary text-white font-bold text-xs px-3 py-2 rounded-xl border-b-3 border-primary-dark active:border-b-0 active:translate-y-0.5 transition-all">Profil Oluştur</NuxtLink>
      </div>

      <div v-if="loadingItems" class="text-sm font-semibold text-gray-400 py-3">Yükleniyor…</div>
      <div v-else class="flex flex-col gap-2.5">
        <div
          v-for="item in regularItems"
          :key="item.id"
          class="flex items-center gap-3.5 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 hover:bg-gray-50 transition-colors"
          :class="{ 'opacity-50': isGuest }"
        >
          <span class="text-3xl shrink-0">{{ item.icon_url || '📦' }}</span>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-extrabold text-gray-800">{{ item.name }}</div>
            <div class="text-xs font-semibold text-gray-400 mt-0.5">{{ item.description }}</div>
            <div v-if="item.duration_hours" class="text-[0.7rem] font-semibold text-gray-400 mt-1">⏱️ {{ item.duration_hours }}s süre</div>
          </div>
          <button
            class="shrink-0 bg-amber-50 border-2 border-amber-600 text-amber-700 font-extrabold text-sm px-4 py-2.5 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-[inherit]"
            :disabled="isGuest || balance < item.price_acorn"
            @click="openPurchaseModal(item)"
          >🌰 {{ item.price_acorn }}</button>
        </div>
      </div>
    </div>

    <!-- Heart refill -->
    <div v-if="heartItems.length > 0" class="flex flex-col gap-3">
      <h2 class="text-base font-extrabold text-gray-800">❤️ Can Doldur</h2>
      <div class="flex flex-col gap-2.5">
        <div
          v-for="item in heartItems"
          :key="item.id"
          class="flex items-center gap-3.5 bg-white border-2 border-gray-200 rounded-2xl px-4 py-3.5 hover:bg-gray-50 transition-colors"
        >
          <span class="text-3xl shrink-0">{{ item.icon_url || '❤️' }}</span>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-extrabold text-gray-800">{{ item.name }}</div>
            <div class="text-xs font-semibold text-gray-400 mt-0.5">{{ item.description }}</div>
          </div>
          <button
            class="shrink-0 bg-amber-50 border-2 border-amber-600 text-amber-700 font-extrabold text-sm px-4 py-2.5 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed font-[inherit]"
            :disabled="balance < item.price_acorn"
            @click="openPurchaseModal(item)"
          >🌰 {{ item.price_acorn }}</button>
        </div>
      </div>
    </div>

    <!-- Active Effects -->
    <div v-if="!isGuest && effects.length > 0" class="flex flex-col gap-3">
      <h2 class="text-base font-extrabold text-gray-800">Aktif Etkiler</h2>
      <div class="flex flex-col gap-2">
        <div v-for="effect in effects" :key="effect.item_type" class="flex items-center justify-between bg-primary/5 border-2 border-primary rounded-2xl px-4 py-3">
          <span class="text-sm font-extrabold text-gray-800">{{ effectLabel(effect.item_type) }}</span>
          <span class="text-xs font-bold text-gray-400">{{ formatExpiry(effect.expires_at) }} kaldı</span>
        </div>
      </div>
    </div>

    <!-- Inventory -->
    <div v-if="!isGuest" class="flex flex-col gap-3">
      <h2 class="text-base font-extrabold text-gray-800">Envanter</h2>
      <div v-if="loadingInventory" class="text-sm font-semibold text-gray-400 py-3">Yükleniyor…</div>
      <div v-else-if="inventory.length === 0" class="text-sm font-semibold text-gray-400 py-3">Henüz hiç ürün almadınız.</div>
      <div v-else class="flex flex-col gap-2">
        <div v-for="item in inventory" :key="item.id" class="flex items-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-4 py-3">
          <span class="text-xl">{{ item.icon_url || '📦' }}</span>
          <span class="flex-1 text-sm font-bold text-gray-800">{{ item.name }}</span>
          <span class="text-sm font-extrabold text-gray-400">x{{ item.quantity }}</span>
          <button
            v-if="item.duration_hours"
            class="bg-primary text-white font-bold text-xs px-3 py-1.5 rounded-lg border-b-2 border-primary-dark active:border-b-0 active:translate-y-0.5 transition-all cursor-pointer font-[inherit]"
            @click="activateItem(item)"
          >Kullan</button>
        </div>
      </div>
    </div>

    <!-- Acorn packages -->
    <div v-if="!isGuest" class="flex flex-col gap-3">
      <h2 class="text-base font-extrabold text-gray-800">🌰 Buy Acorn</h2>
      <div class="flex gap-3">
        <div v-for="pkg in packages" :key="pkg.id" class="flex-1 bg-white border-2 border-gray-200 rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
          <div class="text-xl font-black text-amber-700">🌰 {{ pkg.amount }}</div>
          <div class="text-xs font-bold text-gray-400">{{ pkg.label }}</div>
          <button class="w-full bg-amber-50 border-2 border-amber-600 text-amber-700 font-extrabold text-xs py-2 rounded-xl cursor-pointer hover:bg-amber-100 transition-colors font-[inherit]" @click="buyAcorn(pkg)">Satın Al</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Purchase Modal -->
  <Teleport to="body">
    <transition name="fade">
      <div v-if="purchaseModal" class="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-5" @click.self="purchaseModal = null">
        <div class="bg-white border-2 border-gray-200 rounded-3xl max-w-[360px] w-full p-8 text-center flex flex-col items-center gap-3">
          <span class="text-5xl">{{ purchaseModal.icon_url || '📦' }}</span>
          <h2 class="text-lg font-black text-gray-800">{{ purchaseModal.name }}</h2>
          <p class="text-sm font-semibold text-gray-400">{{ purchaseModal.description }}</p>
          <div class="text-xl font-black text-amber-700">🌰 {{ purchaseModal.price_acorn }}</div>
          <div class="flex flex-col gap-2 w-full mt-2">
            <button class="w-full bg-primary text-white font-black text-sm py-3 rounded-xl border-b-4 border-primary-dark active:border-b-0 active:translate-y-1 transition-all duration-100 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed" :disabled="purchasing" @click="confirmPurchase">
              {{ purchasing ? 'İşleniyor…' : 'Satın Al' }}
            </button>
            <button class="w-full bg-white text-gray-400 font-bold text-sm py-2.5 rounded-xl border-2 border-gray-200 hover:border-gray-400 hover:text-gray-800 transition-all cursor-pointer font-[inherit]" @click="purchaseModal = null">İptal</button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
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
const { setAcornBalance } = useAcornBalance();
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
    setAcornBalance(balance.value);
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

  if (isGuest.value) {
    if (purchaseModal.value.item_type === 'heart_refill') {
      const { spendAcorns, setHearts } = useGuestState();
      if (spendAcorns(purchaseModal.value.price_acorn)) {
        balance.value -= purchaseModal.value.price_acorn;
        setAcornBalance(balance.value);
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
    setAcornBalance(result.balance);
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
    const { state: gs } = useGuestState();
    balance.value = gs.value.acornBalance;
    sharedHearts.value = gs.value.heartsCount;
    fetchItems();
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
