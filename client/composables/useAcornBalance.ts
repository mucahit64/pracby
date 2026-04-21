export function useAcornBalance() {
  const acornBalance = useState('pbAcornBalance', () => 0);

  function setAcornBalance(amount: number) {
    acornBalance.value = amount;
  }

  function incrementAcornBalance(amount: number) {
    acornBalance.value += amount;
  }

  return {
    acornBalance,
    setAcornBalance,
    incrementAcornBalance,
  };
}
