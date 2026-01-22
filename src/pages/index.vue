<script setup lang="ts">
import { computed, provide } from 'vue'
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

// DB
import { mentorsMock } from '@/db/mentors.db'
import { tasksMock } from '@/db/tasks.db'

// COMPOSABLES
const route = useRoute()

// DATA
const userName = 'Hi, Dennis Nzioki'
const breakpoints = {
  '320': {
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

// PROVIDE
provide('taskToday', tasksMock[0])
</script>

<template>
  <div class="flex flex-wrap xl:flex-nowrap max-h-dvh overflow-y-auto">
    <div class="min-w-0">
      <AppHeader class="sticky top-0 z-100" />
      <div class="px-6 pb-6 md:px-8 md:pb-8 pt-4 space-y-8">
        <WelcomeHeader class="md:hidden" :title="title" :is-show-subtitle="isHome" />
        <section class="flex-col 2md:flex-row! flex gap-6">
          <RunningTask :count="45" :total="100" :percentage="45" />
          <LineChart />
        </section>

        <SwiperLayout title="Monthly Mentors" :breakpoints="breakpoints">
          <swiper-slide v-for="item in mentorsMock" :key="item.id">
            <MentorItem :mentor="item" />
          </swiper-slide>
        </SwiperLayout>
        <SwiperLayout title="Upcoming Task" :breakpoints="breakpoints">
          <swiper-slide v-for="item in tasksMock" :key="item.id">
            <TaskItem :data="item" />
          </swiper-slide>
        </SwiperLayout>
      </div>
    </div>
    <HomeRightSidebar />
  </div>
</template>

<style scoped></style>
