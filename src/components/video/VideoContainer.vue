<script setup lang="ts">
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import VideoController from './VideoController.vue'
import AppIcon from '../shared/app-icon/AppIcon.vue'

defineProps<{ url: string }>()

const SEEK_STEP = 15 // seconds
const VOLUME_STEP = 5 // percent
const showBackward = ref(false)
const showForward = ref(false)
let backwardTimeout: ReturnType<typeof setTimeout> | null = null
let forwardTimeout: ReturnType<typeof setTimeout> | null = null

const video = ref<HTMLVideoElement | null>(null)
const videoContainer = ref<HTMLDivElement | null>(null)

// Video state
const currentTime = ref<number>(0)
const duration = ref<number>(0)
const volume = ref<number>(100)
const isPlaying = ref<boolean>(false)
const isShowController = ref<boolean>(false)

// METHODS
function onToggle(playing: boolean): void {
  nextTick(() => {
    if (!video.value) return
    if (playing) {
      video.value.play()
      isPlaying.value = true
    } else {
      video.value.pause()
      isPlaying.value = false
    }
  })
}
function onPlay() {
  isPlaying.value = !isPlaying.value
  onToggle(isPlaying.value)
}

function onTimeUpdate(time: number): void {
  if (!video.value || !duration.value) return
  const newTime = (time / 100) * duration.value
  video.value.currentTime = newTime
}

function onVolumeChange(vol: number): void {
  if (!video.value) return
  volume.value = vol
  video.value.volume = vol / 100
}

function onFullscreen(): void {
  if (!videoContainer.value) return

  if (!document.fullscreenElement) {
    videoContainer.value.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

function onPictureInPicture(): void {
  if (!video.value) return

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture()
  } else {
    video.value.requestPictureInPicture()
  }
}

// Video event listeners
function handleTimeUpdate(): void {
  if (!video.value || !duration.value) return
  currentTime.value = (video.value.currentTime / duration.value) * 100
}

function handleLoadedMetadata(): void {
  if (!video.value) return
  duration.value = video.value.duration
}

function handlePlay(): void {
  isPlaying.value = true
}

function handlePause(): void {
  isPlaying.value = false
}

// Format time helper
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

// Controller visibility logic
let hideTimeout: ReturnType<typeof setTimeout> | null = null
function onMouseEnter() {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  isShowController.value = true
}
function onMouseLeave() {
  hideTimeout = setTimeout(() => {
    isShowController.value = false
    hideTimeout = null
  }, 1500)
}

// --- ICON VISIBILITY HELPERS ---
function triggerBackward() {
  showBackward.value = true
  if (backwardTimeout) clearTimeout(backwardTimeout)
  backwardTimeout = setTimeout(() => {
    showBackward.value = false
    backwardTimeout = null
  }, 1000) // 1 soniya ko‘rsatiladi
}

function triggerForward() {
  showForward.value = true
  if (forwardTimeout) clearTimeout(forwardTimeout)
  forwardTimeout = setTimeout(() => {
    showForward.value = false
    forwardTimeout = null
  }, 1000)
}

function handleKeydown(e: KeyboardEvent): void {
  const target = e.target as HTMLElement
  // Input, textarea ichida bo‘lsa ishlamasin
  if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return
  if (!video.value) return

  switch (e.code) {
    case 'Space':
      e.preventDefault()
      onPlay()
      break

    case 'KeyF':
      e.preventDefault()
      onFullscreen()
      break

    case 'ArrowUp':
      e.preventDefault()
      volume.value = Math.min(100, volume.value + VOLUME_STEP)
      video.value.volume = volume.value / 100
      break

    case 'ArrowDown':
      e.preventDefault()
      volume.value = Math.max(0, volume.value - VOLUME_STEP)
      video.value.volume = volume.value / 100
      break

    case 'ArrowRight':
      e.preventDefault()
      video.value.currentTime = Math.min(duration.value, video.value.currentTime + SEEK_STEP)
      triggerForward()
      break

    case 'ArrowLeft':
      e.preventDefault()
      video.value.currentTime = Math.max(0, video.value.currentTime - SEEK_STEP)
      triggerBackward()
      break
  }
}

// LIFECYCLE HOOKS
onMounted(() => {
  if (!video.value) return

  video.value.addEventListener('timeupdate', handleTimeUpdate)
  video.value.addEventListener('loadedmetadata', handleLoadedMetadata)
  video.value.addEventListener('play', handlePlay)
  video.value.addEventListener('pause', handlePause)

  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  if (!video.value) return

  video.value.removeEventListener('timeupdate', handleTimeUpdate)
  video.value.removeEventListener('loadedmetadata', handleLoadedMetadata)
  video.value.removeEventListener('play', handlePlay)
  video.value.removeEventListener('pause', handlePause)

  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    @click="onPlay"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    ref="videoContainer"
    class="relative w-full h-52 md:h-90 rounded-base bg-gray-200 cursor-pointer group"
  >
    <video ref="video" class="w-full h-full object-cover rounded-base">
      <source :src="url" type="video/mp4" />
      Your browser does not support HTML video.
    </video>

    <div>
      <transition name="fade">
        <AppIcon
          v-if="showBackward"
          name="backward-15"
          class="absolute top-1/2 left-40 -translate-y-1/2"
        />
      </transition>
      <transition name="fade">
        <AppIcon
          v-if="showForward"
          name="forward-15"
          class="absolute top-1/2 right-40 -translate-y-1/2"
        />
      </transition>
    </div>
    <transition name="fade">
      <VideoController
        v-show="isShowController"
        :is-playing="isPlaying"
        :current-time="currentTime"
        :duration="duration"
        :volume="volume"
        :current-time-formatted="formatTime((currentTime / 100) * duration)"
        :duration-formatted="formatTime(duration)"
        @click.stop
        @toggle="onToggle"
        @time-update="onTimeUpdate"
        @volume-change="onVolumeChange"
        @fullscreen="onFullscreen"
        @picture-in-picture="onPictureInPicture"
        class="absolute z-10 bottom-3 md:bottom-6 left-3 md:left-6 md:max-w-[calc(100%-48px)] max-w-[calc(100%-24px)]"
      />
    </transition>
  </div>
</template>

<style scoped>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
