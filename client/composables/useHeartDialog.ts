export interface HeartPackage {
  id: string
  name: string
  description: string
  icon_url: string
  price_acorn: number
  item_type: string
  metadata?: { heart_count?: number }
}

export function useHeartDialog() {
  const heartsEmptyVisible = ref(false)
  const exitWarningVisible = ref(false)

  const heartPackages = ref<HeartPackage[]>([])
  const acornBalance = ref(0)
  const purchasingId = ref<string | null>(null)
  const loadingPackages = ref(false)
  const purchaseError = ref('')

  async function fetchPackages(guestMode: boolean) {
    loadingPackages.value = true
    purchaseError.value = ''

    if (guestMode) {
      const { state: gs } = useGuestState()
      acornBalance.value = gs.value.acornBalance
      try {
        const items = await $fetch<HeartPackage[]>('/api/store/items')
        heartPackages.value = items.filter((i) => i.item_type === 'heart_refill')
      } catch {
        heartPackages.value = []
      }
    } else {
      const token = localStorage.getItem('pb_token') ?? ''
      try {
        const [items, user] = await Promise.all([
          $fetch<HeartPackage[]>('/api/store/items', { headers: { Authorization: `Bearer ${token}` } }),
          $fetch<{ acorn_balance?: number }>('/api/users/me', { headers: { Authorization: `Bearer ${token}` } }),
        ])
        heartPackages.value = items.filter((i) => i.item_type === 'heart_refill')
        acornBalance.value = user.acorn_balance ?? 0
      } catch {
        /* skip */
      }
    }
    loadingPackages.value = false
  }

  function openHeartsEmpty(guestMode: boolean) {
    heartsEmptyVisible.value = true
    fetchPackages(guestMode)
  }

  function closeHeartsEmpty() {
    heartsEmptyVisible.value = false
    purchasingId.value = null
  }

  function openExitWarning() {
    exitWarningVisible.value = true
  }

  function closeExitWarning() {
    exitWarningVisible.value = false
  }

  return {
    heartsEmptyVisible,
    exitWarningVisible,
    heartPackages,
    acornBalance,
    purchasingId,
    loadingPackages,
    purchaseError,
    openHeartsEmpty,
    closeHeartsEmpty,
    openExitWarning,
    closeExitWarning,
  }
}
