<script setup lang="ts">
import { ref } from 'vue'
import { Swiper } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

withDefaults(
  defineProps<{
    title?: string
    slidesPerView?: number
  }>(),
  {
    slidesPerView: 2,
  },
)

const swiperRef = ref<SwiperType | null>(null)

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
      >
        <slot />
      </swiper>
    </div>
  </section>
</template>

<style scoped></style>
