<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import WelcomeHeader from '@/components/WelcomeHeader.vue'
import RunningTask from '@/components/RunningTask.vue'
import MentorItem from '@/components/MentorItem.vue'
import TaskItem from '@/components/task/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import LineChart from '@/components/shared/LineChart.vue'
import HomeRightSidebar from '@/components/HomeRightSidebar.vue'

// COMPOSABLES
const route = useRoute()

// DATA
const userName = 'Hi, Dennis Nzioki'
const breakpoints = {
  '640': {
    slidesPerView: 1,
    spaceBetween: 0,
  },
  '768': {
    slidesPerView: 1.1,
    spaceBetween: 25,
  },
  '860': {
    slidesPerView: 1.3,
    spaceBetween: 25,
  },
  '960': {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  '1024': {
    slidesPerView: 2.2,
    spaceBetween: 25,
  },
  '1280': {
    slidesPerView: 1.3,
    spaceBetween: 25,
  },
  '1440': {
    slidesPerView: 2.2,
    spaceBetween: 25,
  },
  '1800': {
    slidesPerView: 3.3,
    spaceBetween: 32,
  },
  '2100': {
    slidesPerView: 4.3,
    spaceBetween: 32,
  },
}

// COMPUTED
const isHome = computed(() => route.name === 'Home')
const title = computed<string>(() => {
  return (route.meta.headerTitle as string) || userName
})
</script>

<template>
  <div class="flex flex-wrap xl:flex-nowrap">
    <div class="grow min-w-0">
      <AppHeader />
      <div
        class="px-6 pb-6 md:px-8 md:pb-8 pt-4 space-y-8 max-h-[calc(100dvh-132px)] overflow-y-auto"
      >
        <WelcomeHeader v-if="0" :title="title" :is-show-subtitle="isHome" />
        <section class="flex-col 2md:flex-row! flex gap-6">
          <RunningTask :count="45" :total="100" :percentage="45" />
          <LineChart />
        </section>

        <SwiperLayout title="Monthly Mentors" :breakpoints="breakpoints">
          <swiper-slide v-for="item in 20" :key="item">
            <MentorItem />
          </swiper-slide>
        </SwiperLayout>
        <SwiperLayout title="Upcoming Task" :breakpoints="breakpoints">
          <swiper-slide v-for="item in 20" :key="item">
            <TaskItem :id="item" />
          </swiper-slide>
        </SwiperLayout>
        <HomeRightSidebar class="block xl:hidden" />
      </div>
    </div>
    <HomeRightSidebar class="hidden xl:block" />
  </div>
</template>

<style scoped></style>
