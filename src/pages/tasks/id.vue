<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import TaskDetailAside from '@/components/task/TaskDetailAside.vue'
import VideoContainer from '@/components/video/VideoContainer.vue'

const essenceOfAssessment = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  'Designing a mobile application using figma',
  'Presenting the design flow',
]
</script>

<template>
  <AppHeader />
  <div class="p-8 max-h-[calc(100dvh-116px)] overflow-y-auto flex gap-6">
    <div class="bg-white rounded-base h-full">
      <VideoContainer />
      <div class="p-6 space-y-6">
        <!-- title -->
        <section>
          <h2 class="title-3xl text-secondary-500">Creating Awesome Mobile Apps</h2>
          <div class="flex-center gap-2.5 my-4">
            <span class="text-secondary-400 title-base pr-2.5 border-r border-[#dfdfdf]">
              UI UX Design . Apps Design
            </span>
            <span class="text-primary-300 title-base">+ Get Mentors</span>
          </div>
          <div class="flex-center gap-5">
            <span class="inline-flex-center gap-1.25 title-base text-secondary-500">
              <AppIcon name="users" />
              200 Students Involved
            </span>
            <span class="inline-flex-center gap-1.25 title-base text-secondary-500">
              <AppIcon name="clock" size="16px" />
              1 Hour
            </span>
          </div>
        </section>
        <!-- Description -->
        <section>
          <h3 class="title-xl text-secondary-500 mb-4">Description</h3>
          <p class="text-sm text-secondary-500 font-normal leading-[200%]">
            Follow the video tutorial above. Understand how to use each tool in the Figma
            application. Also learn how to make a good and correct design. Starting from spacing,
            typography, content, and many other design hierarchies. Then try to make it yourself
            with your imagination and inspiration.
          </p>
        </section>
        <!-- Essence of Assessment -->
        <section class="space-y-5">
          <h3 class="title-xl text-secondary-500">Essence of Assessment</h3>
          <li
            class="flex-center gap-2.5 text-secondary-500 text-sm font-medium leading-[200%]"
            v-for="(item, index) in essenceOfAssessment"
            :key="`esse_${index}`"
          >
            <AppIcon name="blue-circle-checkbox" />
            {{ item }}
          </li>
        </section>
      </div>
    </div>

    <TaskDetailAside />
  </div>
</template>

<style scoped></style>
