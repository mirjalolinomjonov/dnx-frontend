<script setup lang="ts">
import AppHeaderFilter from '@/components/AppHeaderFilter.vue'
import SwiperLayout from '@/components/SwiperLayout.vue'
import { SwiperSlide } from 'swiper/vue'
import MentorItem from '@/components/MentorItem.vue'
import AppHeader from '@/components/AppHeader.vue'

// DB
import { mentorsMock } from '@/db/mentors.db'
import { computed, ref } from 'vue'
import NoData from '@/components/shared/NoData.vue'

const qs = ref<string>('')

const filterData = computed(() => {
  return mentorsMock.filter((item) => item.name.toLowerCase().includes(qs.value.toLowerCase()))
})
</script>

<template>
  <div class="max-h-dvh overflow-y-auto">
    <div class="sticky top-0 z-100 border-b border-b-secondary-light md:border-none">
      <AppHeader />
      <AppHeaderFilter v-model:query="qs" placeholder="Search  Mentors" />
    </div>
    <div class="p-6 md:p-8 space-y-8 min-w-0">
      <SwiperLayout title="Recent Mentors" :slides-per-view="3.3">
        <template v-if="filterData.length">
          <swiper-slide v-for="item in filterData" :key="item.id">
            <MentorItem :mentor="item" />
          </swiper-slide>
        </template>
        <NoData v-else />
      </SwiperLayout>

      <section>
        <h2 class="title-xl text-secondary-500 mb-5">Mentors</h2>
        <div class="mentors-section">
          <template v-if="filterData.length">
            <MentorItem :mentor="item" v-for="item in filterData" :key="item.id">
              <p class="my-6 text-secondary-300 font-medium leading-[200%] line-clamp-2">
                {{ item.bio }}
              </p>
            </MentorItem>
          </template>
          <NoData v-else class="col-span-full" />
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.mentors-section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
}
</style>
