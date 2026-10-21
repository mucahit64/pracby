// Mobile map picker: the header shows the selected course and opens the
// picker; the learn page owns the exam content and renders the picker.
// Replaces the module / course rows, which took too much of a phone screen.
export function useMapPicker() {
  // Empty when the current page has no map (the header hides the button).
  const courseLabel = useState<string>('pbMapPickerLabel', () => '')
  const open = useState<boolean>('pbMapPickerOpen', () => false)
  return { courseLabel, open }
}
