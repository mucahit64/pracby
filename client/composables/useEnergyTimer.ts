// Shared reactive energy state — used by layout components and quiz pages.
// Timer management lives in useUserSession; this composable only owns the state.
export function useEnergyTimer() {
  const energyCount = useState('userEnergy', () => 25)
  const energyCountdown = useState('energyCountdown', () => '')
  const unlimitedEnergy = useState('unlimitedEnergy', () => false)
  const nextEnergyAt = useState<string | null>('pbNextEnergyAt', () => null)

  return { energyCount, energyCountdown, unlimitedEnergy, nextEnergyAt }
}
