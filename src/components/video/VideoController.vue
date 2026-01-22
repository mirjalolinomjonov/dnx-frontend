<script setup lang="ts">
import { ref, computed } from 'vue'

interface Props {
  isPlaying?: boolean
  currentTime?: number
  duration?: number
  volume?: number
  currentTimeFormatted?: string
  durationFormatted?: string
}

interface IEmits {
  (e: 'toggle', value: boolean): void
  (e: 'timeUpdate', value: number): void
  (e: 'volumeChange', value: number): void
  (e: 'fullscreen'): void
  (e: 'pictureInPicture'): void
}

const props = withDefaults(defineProps<Props>(), {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  volume: 100,
  currentTimeFormatted: '0:00',
  durationFormatted: '0:00',
})

const emit = defineEmits<IEmits>()

// DATA
const localTime = ref<number>(props.currentTime)
const localVolume = ref<number>(props.volume)
const showVolumeSlider = ref<boolean>(false)
const isMuted = ref<boolean>(false)
const previousVolume = ref<number>(100)

// COMPUTED
const volumeIcon = computed(() => {
  if (isMuted.value || localVolume.value === 0) return 'volume-mute'
  if (localVolume.value < 50) return 'volume-low'
  return 'volume'
})

// METHODS
function toggleVideo() {
  emit('toggle', !props.isPlaying)
}

function handleTimeChange() {
  emit('timeUpdate', localTime.value)
}

function handleVolumeChange() {
  isMuted.value = false
  emit('volumeChange', localVolume.value)
}

function toggleMute() {
  if (isMuted.value) {
    isMuted.value = false
    localVolume.value = previousVolume.value
    emit('volumeChange', localVolume.value)
  } else {
    isMuted.value = true
    previousVolume.value = localVolume.value
    localVolume.value = 0
    emit('volumeChange', 0)
  }
}

function handleFullscreen() {
  emit('fullscreen')
}

function handlePictureInPicture() {
  emit('pictureInPicture')
}

// Watch for external updates
import { watch } from 'vue'
watch(
  () => props.currentTime,
  (newVal) => {
    localTime.value = newVal
  },
)

watch(
  () => props.volume,
  (newVal) => {
    localVolume.value = newVal
  },
)
</script>

<template>
  <Card class="py-3 px-6">
    <div class="flex-center-between gap-10">
      <div class="grow flex-center gap-6">
        <button
          @click="toggleVideo"
          class="w-5 text-secondary-400 hover:text-secondary-500 transition-colors"
        >
          <AppIcon v-if="isPlaying" name="pause" />
          <AppIcon v-else name="play" />
        </button>
        <input
          v-model.number="localTime"
          @input="handleTimeChange"
          class="grow time-range"
          type="range"
          min="0"
          max="100"
          step="0.1"
          :style="{ '--value': localTime + '%' }"
        />
        <span class="text-sm font-medium whitespace-nowrap">
          {{ currentTimeFormatted }}/{{ durationFormatted }}
        </span>
      </div>

      <div class="flex-center gap-3">
        <!-- Volume Control -->
        <div
          class="relative flex-center gap-2"
          @mouseenter="showVolumeSlider = true"
          @mouseleave="showVolumeSlider = false"
        >
          <button
            @click="toggleMute"
            class="text-secondary-400 hover:text-secondary-500 transition-colors w-5 h-5"
          >
            <AppIcon v-if="volumeIcon === 'volume'" name="volume" />
            <AppIcon v-else-if="volumeIcon === 'volume-low'" name="volume-low" />
            <AppIcon v-else-if="volumeIcon === 'volume-mute'" name="volume-mute" />
          </button>

          <transition name="volume-slider">
            <div
              v-show="showVolumeSlider"
              class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2"
            >
              <div class="bg-white rounded-lg shadow-lg p-3">
                <input
                  v-model.number="localVolume"
                  @input="handleVolumeChange"
                  class="volume-range"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  :style="{ '--value': localVolume + '%' }"
                  orient="vertical"
                />
              </div>
            </div>
          </transition>
        </div>

        <!-- Picture in Picture -->
        <button
          @click="handlePictureInPicture"
          class="text-secondary-400 hover:text-secondary-500 transition-colors"
          title="Picture in Picture"
        >
          <AppIcon name="screen-flow" />
        </button>

        <!-- Fullscreen -->
        <button
          @click="handleFullscreen"
          class="text-secondary-400 hover:text-secondary-500 transition-colors"
          title="Fullscreen"
        >
          <AppIcon name="screen-zoom" />
        </button>
      </div>
    </div>
  </Card>
</template>

<style scoped>
/* Time Range Slider */
.time-range {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(
    to right,
    #141522 0%,
    #141522 var(--value),
    #f5f5f7 var(--value),
    #f5f5f7 100%
  );
  outline: none;
  cursor: pointer;
}

.time-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #141522;
  cursor: grab;
  box-shadow: 0 0 0 4px rgba(20, 21, 34, 0.15);
  transition: all 0.2s ease;
  opacity: 0;
}

.time-range:hover::-webkit-slider-thumb {
  opacity: 1;
}

.time-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 6px rgba(20, 21, 34, 0.2);
}

.time-range::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}

.time-range::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #141522;
  cursor: grab;
  border: none;
  box-shadow: 0 0 0 4px rgba(20, 21, 34, 0.15);
  transition: all 0.2s ease;
}

.time-range::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 6px rgba(20, 21, 34, 0.2);
}

.time-range::-moz-range-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}

/* Volume Range Slider */
.volume-range {
  -webkit-appearance: none;
  width: 4px;
  height: 100px;
  border-radius: 999px;
  background: linear-gradient(
    to top,
    #141522 0%,
    #141522 var(--value),
    #f5f5f7 var(--value),
    #f5f5f7 100%
  );
  outline: none;
  cursor: pointer;
  writing-mode: bt-lr;
  -webkit-appearance: slider-vertical;
}

.volume-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #141522;
  cursor: grab;
  box-shadow: 0 0 0 3px rgba(20, 21, 34, 0.15);
  transition: all 0.2s ease;
}

.volume-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 4px rgba(20, 21, 34, 0.2);
}

.volume-range::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}

.volume-range::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #141522;
  cursor: grab;
  border: none;
  box-shadow: 0 0 0 3px rgba(20, 21, 34, 0.15);
  transition: all 0.2s ease;
}

.volume-range::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 0 4px rgba(20, 21, 34, 0.2);
}

/* Volume Slider Transition */
.volume-slider-enter-active,
.volume-slider-leave-active {
  transition: all 0.2s ease;
}

.volume-slider-enter-from,
.volume-slider-leave-to {
  opacity: 0;
}
</style>
