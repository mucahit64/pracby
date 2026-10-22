<template>
  <div class="coin" :class="{ 'is-dim': dim }" :style="vars">
    <!-- Score ring: the grey track and the part of it the best score fills. Its room
         is kept even without a ring, so all buttons line up. -->
    <svg
      v-if="ringScore !== null"
      class="coin-ring"
      :width="ring.size"
      :height="ring.size"
      :viewBox="`0 0 ${ring.size} ${ring.size}`"
      aria-hidden="true"
    >
      <circle class="coin-ring-track" :cx="ring.size / 2" :cy="ring.size / 2" :r="ring.radius" />
      <!-- Nothing at 0: a round line cap would draw a dot. -->
      <circle
        v-if="ringScore > 0"
        class="coin-ring-score"
        :cx="ring.size / 2"
        :cy="ring.size / 2"
        :r="ring.radius"
        pathLength="100"
        :stroke-dasharray="`${ringScore} 100`"
      />
    </svg>

    <button
      v-bind="$attrs"
      class="coin-button"
      :disabled="disabled"
      :aria-label="label"
      type="button"
    >
      <span class="coin-base" aria-hidden="true" />
      <span class="coin-top">
        <!-- One colour, as if struck into the coin. -->
        <svg v-if="iconName === 'trophy'" class="coin-icon coin-icon-trophy" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6 3h12v2h2.5a1 1 0 0 1 1 1v1.5A4.5 4.5 0 0 1 17.3 12 6 6 0 0 1 13 15.9V18h3a1 1 0 0 1 1 1v2H7v-2a1 1 0 0 1 1-1h3v-2.1A6 6 0 0 1 6.7 12 4.5 4.5 0 0 1 2.5 7.5V6a1 1 0 0 1 1-1H6V3Zm0 4H4.5v.5A2.5 2.5 0 0 0 6.2 9.9 6 6 0 0 1 6 9V7Zm12 0v2a6 6 0 0 1-.2 .9 2.5 2.5 0 0 0 1.7-2.4V7H18Z"
          />
        </svg>
        <!-- A boss with a full score: a crown, apart from a lesson's trophy. -->
        <svg v-else-if="iconName === 'crown'" class="coin-icon coin-icon-trophy" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M2.5 7.5a1.5 1.5 0 0 1 2.4-1.2l3.4 2.6 2.4-4.1a1.5 1.5 0 0 1 2.6 0l2.4 4.1 3.4-2.6a1.5 1.5 0 0 1 2.4 1.4l-1.5 9.3a1 1 0 0 1-1 .8H5a1 1 0 0 1-1-.8L2.5 7.7ZM5 19.5h14a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1Z"
          />
        </svg>
        <!-- The map's opened gift box (pages/index.vue). -->
        <svg v-else-if="iconName === 'gift-open'" class="coin-icon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 26h28v14a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z" fill="#f59e0b" />
          <path d="M21 26h6v16h-6z" fill="#dc2626" />
          <path d="M7 17.5 38.5 9.5 40.5 17 9 25z" fill="#fbbf24" />
          <path d="M20.5 13.8 26.3 12.3 28.3 19.8 22.5 21.3z" fill="#ef4444" />
          <path d="M23.4 13c-4-3-9-3.5-9.3-.5s5 2.6 9.3.5zM23.4 13c2-4.5 6.5-7 8.2-4.5s-3.6 4.4-8.2 4.5z" fill="#ef4444" />
        </svg>
        <PbIcon v-else :name="iconName" class="coin-icon" :class="{ 'is-faded': fadedIcon }" />
      </span>
    </button>
  </div>
</template>

<script setup lang="ts">
// A lesson map button (lesson, chest or boss) drawn as a tilted coin: a face with a rim
// band over a cylinder side, and a best-score ring around it. The mobile app draws the
// same (lesson_map_node.dart). Listeners such as @click go to the button, so a locked
// coin and the ring around it don't take clicks.
defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    /** Diameter in px; everything else scales with it. */
    size?: number
    color: string
    shadow: string
    icon: string
    label: string
    /** Best score 0…100 for a completed lesson; null shows no ring. 100 is gold. */
    score?: number | null
    /** Locked: can't be pressed. */
    disabled?: boolean
    /** Faded, like a locked chest. */
    dim?: boolean
    /** Greys the icon out (a locked boss). */
    fadedIcon?: boolean
  }>(),
  { size: 70, score: null, disabled: false, dim: false, fadedIcon: false },
)

// The map's ring around its 70px button: 6px away and 8px wide.
const ring = computed(() => {
  const gap = (props.size * 6) / 70
  const width = (props.size * 8) / 70
  return { size: props.size + 2 * (gap + width), radius: props.size / 2 + gap + width / 2, width }
})

const perfect = computed(() => props.score === 100)
// A full score has no ring: the button turns gold instead.
const ringScore = computed(() => (props.score === null || perfect.value ? null : props.score))
// A full score shows a trophy, or a crown for a boss.
const iconName = computed(() => {
  if (!perfect.value) return props.icon
  return props.icon === 'swords' ? 'crown' : 'trophy'
})

const vars = computed(() => ({
  '--step-diameter': `${props.size}px`,
  '--step-color': perfect.value ? '#ffc800' : props.color,
  '--step-shadow': perfect.value ? '#e5a500' : props.shadow,
  '--ring-size': `${ring.value.size}px`,
  '--ring-width': `${ring.value.width}px`,
}))
</script>

<style scoped>
.coin {
  /* Tilted back, the face looks this much of its diameter tall. */
  --step-tilt: 0.88;
  /* Thickness under the face, as a share of the diameter. */
  --step-thickness: 0.12;
  /* Coin rim along the face's edge: width as a share of the diameter, and how much
     lighter than the face it is (OKLCH lightness). */
  --step-rim-width: 0.1;
  --step-rim-lighten: 0.06;

  --step-face-height: calc(var(--step-diameter) * var(--step-tilt));
  --step-depth: calc(var(--step-diameter) * var(--step-thickness));

  position: relative;
  width: var(--ring-size);
  height: var(--ring-size);
  display: flex;
  align-items: center;
  justify-content: center;
}

.coin.is-dim {
  opacity: 0.6;
}

/* Starts at the top and fills clockwise. */
.coin-ring {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
  pointer-events: none;
}

.coin-ring circle {
  fill: none;
  stroke-width: var(--ring-width);
}

.coin-ring-track {
  stroke: #e5e7eb;
}

.coin-ring-score {
  stroke: var(--step-color);
  stroke-linecap: round;
}

/* The outline never moves: pressing only lowers the face by --step-press. */
.coin-button {
  --step-press: 0px;

  position: absolute;
  width: var(--step-diameter);
  height: calc(var(--step-face-height) + var(--step-depth));
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
}

.coin-button:disabled {
  cursor: not-allowed;
}

.coin-base,
.coin-top {
  position: absolute;
  left: 0;
  width: 100%;
}

/* The side of a cylinder: straight down from the face's widest line, closed by the
   lower half of the face's ellipse. It follows the face down when pressed so the face
   never uncovers its corners. */
.coin-base {
  top: calc(var(--step-face-height) / 2 + var(--step-press));
  height: calc(var(--step-face-height) / 2 + var(--step-depth) - var(--step-press));
  border-radius: 0 0 50% 50% / 0 0 calc(var(--step-face-height) / 2) calc(var(--step-face-height) / 2);
  background: var(--step-shadow);
  transition: top 150ms, height 150ms;
}

.coin-top {
  top: 0;
  height: var(--step-face-height);
  border-radius: 50%;
  background: var(--step-color);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(var(--step-press));
  transition: transform 150ms;
}

/* The coin's rim: a band along the face's edge, thinner at the top and bottom by the
   tilt. The same OKLCH lightness step looks the same on every colour. */
.coin-top::before {
  content: '';
  position: absolute;
  inset: 0;
  border-style: solid;
  border-color: color-mix(in oklab, var(--step-color), white 20%);
  border-color: oklch(from var(--step-color) calc(l + var(--step-rim-lighten)) c h);
  border-width: calc(var(--step-diameter) * var(--step-rim-width) * var(--step-tilt))
    calc(var(--step-diameter) * var(--step-rim-width));
  border-radius: 50%;
  pointer-events: none;
}

/* Only with a mouse: on a touch screen :hover sticks after a tap. */
@media (hover: hover) {
  .coin-button:not(:disabled):hover {
    --step-press: calc(var(--step-depth) / 4);
  }
}

.coin-button:not(:disabled):active {
  --step-press: var(--step-depth);
}

/* Keyboard focus: a ring around the face's shape. */
.coin-button:focus {
  outline: none;
}

.coin-button:focus-visible .coin-top {
  box-shadow:
    0 0 0 3px #fff,
    0 0 0 6px var(--step-shadow);
}

/* Scales with the button. */
.coin-icon {
  position: relative;
  font-size: calc(var(--step-diameter) * 0.42);
}

svg.coin-icon {
  width: 1.2em;
  height: 1.2em;
}

.coin-icon-trophy {
  color: #c98a00;
}

.coin-icon.is-faded {
  filter: grayscale(1);
  opacity: 0.5;
}
</style>
