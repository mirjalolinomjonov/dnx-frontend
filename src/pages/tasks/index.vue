<script setup lang="ts">
import AppHeaderFilter from '@/components/AppHeaderFilter.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import TaskItem from '@/components/task/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <AppHeaderFilter placeholder="Search Task" />
  <div class="p-6 md:p-8 space-y-8 max-h-[calc(100dvh-192px)] overflow-y-auto">
    <SwiperLayout title="Time Limit" :slides-per-view="3.3">
      <swiper-slide v-for="item in 20" :key="item">
        <TaskItem :id="item" />
      </swiper-slide>
    </SwiperLayout>

    <SwiperLayout title="New Task" :slides-per-view="3.3">
      <swiper-slide v-for="item in 20" :key="item">
        <TaskItem :id="item" />
      </swiper-slide>
    </SwiperLayout>
  </div>
</template>

<style scoped></style>
