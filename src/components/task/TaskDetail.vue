<script setup lang="ts">
const list = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  'Design a mobile application with figma',
]
</script>

<template>
  <div class="space-y-5">
    <div class="flex-center-between">
      <h3 class="title-base text-secondary-500 font-semibold!">Detail Task</h3>
      <span class="text text-secondary-400">UI / UX Designer</span>
    </div>
    <div v-for="(item, index) in list" :key="index" class="flex-center gap-3">
      <span
        class="shrink-0 w-9 h-9 rounded-base inline-flex-center-center bg-secondary-light title-base font-semibold!"
      >
        {{ index + 1 }}
      </span>
      <span
        :title="item"
        class="title-base text-secondary-500 inline-block max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
