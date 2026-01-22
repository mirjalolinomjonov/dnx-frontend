<script setup lang="ts">
import AppHeaderFilter from '@/components/AppHeaderFilter.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import TaskItem from '@/components/task/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'

// DB
import { tasksMock } from '@/db/tasks.db'
</script>

<template>
  <div class="max-h-dvh overflow-y-auto">
    <div class="sticky top-0 z-100 border-b border-b-secondary-light md:border-none">
      <AppHeader />
      <AppHeaderFilter placeholder="Search Task" />
    </div>
    <div class="p-6 md:p-8 space-y-8">
      <SwiperLayout title="Time Limit" :slides-per-view="3.3">
        <swiper-slide v-for="item in tasksMock" :key="item.id">
          <TaskItem :data="item" />
        </swiper-slide>
      </SwiperLayout>

      <SwiperLayout title="New Task" :slides-per-view="3.3">
        <swiper-slide v-for="item in tasksMock" :key="item.id">
          <TaskItem :data="item" />
        </swiper-slide>
      </SwiperLayout>
    </div>
  </div>
</template>

<style scoped></style>
