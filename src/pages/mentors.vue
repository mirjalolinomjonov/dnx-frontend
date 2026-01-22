<script setup lang="ts">
import AppHeaderFilter from '@/components/AppHeaderFilter.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import MentorItem from '@/components/MentorItem.vue'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <AppHeaderFilter placeholder="Search  Mentors" />
  <div class="p-6 md:p-8 space-y-8 max-h-[calc(100dvh-192px)] overflow-y-auto min-w-0">
    <SwiperLayout title="Recent Mentors" :slides-per-view="3.3">
      <swiper-slide v-for="item in 20" :key="item">
        <MentorItem />
      </swiper-slide>
    </SwiperLayout>

    <section>
      <h2 class="title-xl text-secondary-500 mb-5">Mentors</h2>
      <div class="mentors-section">
        <MentorItem v-for="item in 5" :key="item">
          <p class="my-6 text-secondary-300 font-medium leading-[200%] line-clamp-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quo eaque enim
            perspiciatis, sapiente voluptatum tempora itaque ullam et tenetur velit nesciunt esse
            doloremque officiis! Ipsum maiores rem ratione repellat?
          </p>
        </MentorItem>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mentors-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}
</style>
