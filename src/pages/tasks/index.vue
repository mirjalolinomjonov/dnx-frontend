<script setup lang="ts">
import AppHeaderFilter from '@/components/AppHeaderFilter.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import TaskItem from '@/components/task/TaskItem.vue'
import AppHeader from '@/components/AppHeader.vue'

// DB
import { tasksMock } from '@/db/tasks.db'
import { computed, ref } from 'vue'
import NoData from '@/components/shared/NoData.vue'

const qs = ref<string>('')

const filterData = computed(() => {
  return tasksMock.filter((item) => item.title.toLowerCase().includes(qs.value.toLowerCase()))
})
</script>

<template>
  <div class="max-h-dvh overflow-y-auto">
    <div class="sticky top-0 z-100 border-b border-b-secondary-light md:border-none">
      <AppHeader />
      <AppHeaderFilter v-model:query="qs" placeholder="Search Task" />
    </div>
    <div class="p-6 md:p-8 space-y-8">
      <SwiperLayout title="Time Limit" :slides-per-view="3.3">
        <template v-if="filterData.length">
          <swiper-slide v-for="item in filterData" :key="item.id">
            <TaskItem :data="item" />
          </swiper-slide>
        </template>
        <NoData v-else />
      </SwiperLayout>

      <SwiperLayout title="New Task" :slides-per-view="3.3">
        <template v-if="filterData.length">
          <swiper-slide v-for="item in filterData.reverse()" :key="item.id">
            <TaskItem :data="item" />
          </swiper-slide>
        </template>
        <NoData v-else />
      </SwiperLayout>
    </div>
  </div>
</template>

<style scoped></style>
