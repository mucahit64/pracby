// iOS Safari ignores user-scalable=no in the viewport meta (app.vue), so pinch
// zoom is blocked here. gesturestart only fires on iOS/Safari.
export default defineNuxtPlugin(() => {
  document.addEventListener('gesturestart', (e) => e.preventDefault(), { passive: false })
})
