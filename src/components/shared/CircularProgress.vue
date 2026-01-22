<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

interface Props {
  percentage: number
  size?: number
  strokeWidth?: number
  trackColor?: string
  progressColor?: string
  showPercentage?: boolean
  backgroundColor?: string
  animated?: boolean
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 68,
  strokeWidth: 3,
  trackColor: '#1E1E2D',
  progressColor: '#546FFF',
  showPercentage: true,
  backgroundColor: '#141522',
  animated: true,
  duration: 1000,
})

const displayPercentage = ref(0)

const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const strokeDashoffset = computed(() => {
  const progress = Math.min(Math.max(displayPercentage.value, 0), 100)
  return circumference.value - (progress / 100) * circumference.value
})

const animateProgress = (target: number) => {
  if (!props.animated) {
    displayPercentage.value = target
    return
  }

  const start = displayPercentage.value
  const diff = target - start
  const startTime = Date.now()

  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    // Easing function (easeOutCubic)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayPercentage.value = start + diff * eased

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayPercentage.value = target
    }
  }

  requestAnimationFrame(animate)
}

watch(
  () => props.percentage,
  (newVal) => {
    animateProgress(newVal)
  },
)

onMounted(() => {
  animateProgress(props.percentage)
})
</script>

<template>
  <div
    class="circular-progress"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: backgroundColor,
    }"
  >
    <svg :width="size" :height="size" class="circular-progress-svg">
      <circle
        class="circular-progress-track"
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="trackColor"
        :stroke-width="strokeWidth"
        fill="none"
      />

      <circle
        class="circular-progress-bar"
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        :stroke="progressColor"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        fill="none"
        stroke-linecap="round"
      />
    </svg>

    <div v-if="showPercentage" class="circular-progress-text">
      {{ Math.round(displayPercentage) }}%
    </div>
  </div>
</template>

<style scoped>
.circular-progress {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.circular-progress-svg {
  transform: rotate(-90deg);
}

.circular-progress-track {
  opacity: 0.15;
}

.circular-progress-bar {
  transition: stroke-dashoffset 0.3s ease;
}

.circular-progress-text {
  position: absolute;
  color: white;
  font-weight: 500;
  font-style: Medium;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: -2%;
  user-select: none;
}
</style>
