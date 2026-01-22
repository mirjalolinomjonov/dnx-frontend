<script setup lang="ts">
import { ref } from 'vue'
import { Swiper } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

interface SwiperBreakpoint {
  slidesPerView: number
  spaceBetween: number
}

interface SwiperBreakpoints {
  [key: string]: SwiperBreakpoint
}
interface IProps {
  title?: string
  slidesPerView?: number
  breakpoints?: SwiperBreakpoints
}

withDefaults(defineProps<IProps>(), {
  slidesPerView: 2,
  breakpoints: () => ({
    '320': {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    '768': {
      slidesPerView: 1.4,
      spaceBetween: 25,
    },
    '1024': {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    '1200': {
      slidesPerView: 2.3,
      spaceBetween: 25,
    },
    '1440': {
      slidesPerView: 3.3,
      spaceBetween: 32,
    },
    '1800': {
      slidesPerView: 4.3,
      spaceBetween: 28,
    },
    '2560': {
      slidesPerView: 5.3,
      spaceBetween: 45,
    },
  }),
})

// DATA
const swiperRef = ref<SwiperType | null>(null)

// METHODS
const onSwiper = (swiper: SwiperType): void => {
  swiperRef.value = swiper
}
const slidePrev = (): void => {
  swiperRef.value?.slidePrev()
}
const slideNext = (): void => {
  swiperRef.value?.slideNext()
}
</script>

<template>
  <section class="w-full">
    <div class="mb-5 flex-center-between">
      <h2 class="title-xl text-secondary-500">{{ title }}</h2>
      <div class="flex-center gap-2.5">
        <button @click="slidePrev" class="text-secondary-400 hover:text-secondary-500">
          <AppIcon name="arrow-left" />
        </button>
        <button @click="slideNext" class="text-secondary-400 hover:text-secondary-500">
          <AppIcon name="arrow-right" />
        </button>
      </div>
    </div>
    <div class="relative w-full max-w-full overflow-hidden">
      <swiper
        class="w-full max-w-full"
        @swiper="onSwiper"
        :slides-per-view="slidesPerView"
        :space-between="32"
        :breakpoints="breakpoints"
      >
        <slot />
      </swiper>
    </div>
  </section>
</template>

<style scoped></style>
