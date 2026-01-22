<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import WelcomeHeader from '@/components/WelcomeHeader.vue'
import RunningTask from '@/components/RunningTask.vue'
import MentorItem from '@/components/MentorItem.vue'
import TaskItem from '@/components/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import Calendar from '@/components/shared/Calendar.vue'
import TaskToday from '@/components/TaskToday.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import LineChart from '@/components/shared/LineChart.vue'

// COMPOSABLES
const route = useRoute()

// DATA
const userName = 'Hi, Dennis Nzioki'

// COMPUTED
const isHome = computed(() => route.name === 'Home')
const title = computed<string>(() => {
  return (route.meta.headerTitle as string) || userName
})
</script>

<template>
  <div class="flex">
    <div class="grow min-w-0">
      <AppHeader />
      <div class="px-8 pb-8 pt-4 space-y-8 max-h-[calc(100dvh-132px)] overflow-y-auto">
        <WelcomeHeader v-if="0" :title="title" :is-show-subtitle="isHome" />
        <section class="flex gap-6">
          <RunningTask :count="45" :total="100" :percentage="45" />
          <LineChart />
        </section>

        <SwiperLayout title="Monthly Mentors" width="w-164">
          <swiper-slide v-for="item in 20" :key="item">
            <MentorItem />
          </swiper-slide>
        </SwiperLayout>
        <SwiperLayout title="Upcoming Task" width="w-164">
          <swiper-slide v-for="item in 20" :key="item">
            <TaskItem :id="item" />
          </swiper-slide>
        </SwiperLayout>
      </div>
    </div>
    <aside class="w-109 p-8 shrink-0 space-y-8 bg-secondary-light max-h-dvh overflow-y-auto">
      <Calendar />
      <TaskToday />
    </aside>
  </div>
</template>

<style scoped></style>
