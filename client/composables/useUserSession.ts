export interface Enrollment {
  exam_type_id: string
  exam_type_name: string
  exam_group_name: string
}

export interface StreakDay {
  label: string
  date: string
  done: boolean
  isToday: boolean
}

// Module-level timer — safe because the energy countdown is a single layout-level
// concern that only runs on the client (inside onMounted).
let energyTimer: ReturnType<typeof setInterval> | null = null

export function useUserSession() {
  const { setAcornBalance } = useAcornBalance()
  const { energyCount, energyCountdown, unlimitedEnergy, nextEnergyAt } = useEnergyTimer()

  const streakCount = useState('pbStreakCount', () => 0)
  const enrollments = useState<Enrollment[]>('pbEnrollments', () => [])
  const activeExamTypeId = useState('pbActiveExamTypeId', () => '')
  const switchingExam = useState('pbSwitchingExam', () => false)
  const streakHistory = useState<StreakDay[]>('pbStreakHistory', () => [])
  const isLoggedIn = useState('pbIsLoggedIn', () => false)
  const userRole = useState<string>('pbUserRole', () => '')
  const userPermissions = useState<string[]>('pbUserPermissions', () => [])

  function formatCountdown(diff: number) {
    const mins = Math.floor(diff / 60000)
    const secs = Math.floor((diff % 60000) / 1000)
    return `${mins}:${String(secs).padStart(2, '0')}`
  }

  function startEnergyCountdown(onRefresh: () => Promise<void>) {
    if (energyTimer) clearInterval(energyTimer)
    energyTimer = setInterval(async () => {
      if (!nextEnergyAt.value || energyCount.value >= 25) {
        energyCountdown.value = ''
        return
      }
      const diff = new Date(nextEnergyAt.value).getTime() - Date.now()
      if (diff <= 0) {
        energyCountdown.value = ''
        await onRefresh()
        return
      }
      energyCountdown.value = formatCountdown(diff)
    }, 1000)
  }

  function stopEnergyCountdown() {
    if (energyTimer) clearInterval(energyTimer)
    energyTimer = null
  }

  async function init() {
    const token = localStorage.getItem('pb_token')

    if (!token) {
      const { state: gs, getNextEnergyAt, refreshEnergy } = useGuestState()
      refreshEnergy()
      setAcornBalance(gs.value.acornBalance)
      energyCount.value = gs.value.energyCount
      nextEnergyAt.value = getNextEnergyAt()?.toISOString() ?? null
      isLoggedIn.value = false
      startEnergyCountdown(async () => {
        const { state: gs2, getNextEnergyAt: getNext2, refreshEnergy: refresh2 } = useGuestState()
        refresh2()
        energyCount.value = gs2.value.energyCount
        nextEnergyAt.value = getNext2()?.toISOString() ?? null
      })
      return
    }

    try {
      const [user, userStats, enrollmentList, streakHist, effects] = await Promise.all([
        $fetch<{
          acorn_balance?: number
          energy?: number
          next_energy_at?: string | null
          active_exam_type_id?: string
          role?: string
          permissions?: string[]
        }>('/api/users/me', { headers: { Authorization: `Bearer ${token}` } }),
        $fetch<{ streak?: number }>('/api/users/me/stats', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        $fetch<Enrollment[]>('/api/users/me/enrollments', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        $fetch<StreakDay[]>('/api/users/me/streak-history', {
          headers: { Authorization: `Bearer ${token}` },
        }).catch(() => [] as StreakDay[]),
        $fetch<{ item_type: string; expires_at: string }[]>('/api/store/effects', {
          headers: { Authorization: `Bearer ${token}` },
        }).catch(() => [] as { item_type: string; expires_at: string }[]),
      ])

      setAcornBalance(user.acorn_balance ?? 0)
      energyCount.value = user.energy ?? 25
      streakCount.value = userStats.streak ?? 0
      nextEnergyAt.value = user.next_energy_at ?? null
      activeExamTypeId.value = user.active_exam_type_id ?? ''
      enrollments.value = enrollmentList
      streakHistory.value = streakHist
      unlimitedEnergy.value = effects.some(e => e.item_type === 'unlimited_energy')
      isLoggedIn.value = true
      userRole.value = user.role ?? ''
      userPermissions.value = user.permissions ?? []

      startEnergyCountdown(async () => {
        const fresh = await $fetch<{ energy?: number; next_energy_at?: string | null }>('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        })
        energyCount.value = fresh.energy ?? energyCount.value
        nextEnergyAt.value = fresh.next_energy_at ?? null
      })
    } catch (err: any) {
      // If the token is rejected by the server (user deleted or token revoked),
      // remove the stale token so the app treats the visitor as a guest.
      if (err && typeof err === 'object' && 'statusCode' in err &&
          (err.statusCode === 401 || err.statusCode === 403)) {
        localStorage.removeItem('pb_token')
      }
    }
  }

  async function switchExam(examTypeId: string) {
    if (examTypeId === activeExamTypeId.value) return
    const token = localStorage.getItem('pb_token')
    if (!token) return
    switchingExam.value = true
    try {
      await $fetch('/api/users/me/active-exam', {
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: { exam_type_id: examTypeId },
      })
      // Optimistically set active exam so UI can respond immediately.
      activeExamTypeId.value = examTypeId
      // Refresh full session state (enrollments, stats, etc.) while showing loader.
      await init()
    } catch {
      /* skip */
    } finally {
      switchingExam.value = false
    }
  }

  return {
    streakCount,
    enrollments,
    activeExamTypeId,
    streakHistory,
    isLoggedIn,
    userRole,
    userPermissions,
    init,
    switchExam,
    switchingExam,
    stopEnergyCountdown,
  }
}
