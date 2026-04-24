export interface EnergyPackage {
  id: string
  name: string
  description: string
  icon_url: string
  price_acorn: number
  item_type: string
  metadata?: { energy_count?: number }
}

export function useEnergyDialog() {
  const energyEmptyVisible = ref(false)
  const exitWarningVisible = ref(false)

  const energyPackages = ref<EnergyPackage[]>([])
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
        const items = await $fetch<EnergyPackage[]>('/api/store/items')
        energyPackages.value = items.filter((i) => i.item_type === 'energy_refill')
      } catch {
        energyPackages.value = []
      }
    } else {
      const token = localStorage.getItem('pb_token') ?? ''
      try {
        const [items, user] = await Promise.all([
          $fetch<EnergyPackage[]>('/api/store/items', { headers: { Authorization: `Bearer ${token}` } }),
          $fetch<{ acorn_balance?: number }>('/api/users/me', { headers: { Authorization: `Bearer ${token}` } }),
        ])
        energyPackages.value = items.filter((i) => i.item_type === 'energy_refill')
        acornBalance.value = user.acorn_balance ?? 0
      } catch {
        /* skip */
      }
    }
    loadingPackages.value = false
  }

  function openEnergyEmpty(guestMode: boolean) {
    energyEmptyVisible.value = true
    fetchPackages(guestMode)
  }

  function closeEnergyEmpty() {
    energyEmptyVisible.value = false
    purchasingId.value = null
  }

  function openExitWarning() {
    exitWarningVisible.value = true
  }

  function closeExitWarning() {
    exitWarningVisible.value = false
  }

  return {
    energyEmptyVisible,
    exitWarningVisible,
    energyPackages,
    acornBalance,
    purchasingId,
    loadingPackages,
    purchaseError,
    openEnergyEmpty,
    closeEnergyEmpty,
    openExitWarning,
    closeExitWarning,
  }
}
