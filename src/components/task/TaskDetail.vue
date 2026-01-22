<script setup lang="ts">
const list = [
  'Understanding the tools in Figma',
  'Understand the basics of making designs',
  ' Design a mobile application with figma',
]
</script>

<template>
  <div class="space-y-5">
    <div class="flex-center-between">
      <h3 class="title-base text-secondary-500 font-semibold!">Detail Task</h3>
      <span class="text text-secondary-400">UI / UX Designer</span>
    </div>
    <div v-for="(item, index) in list" :key="index" class="space-x-3">
      <span
        class="w-9 h-9 rounded-base inline-flex-center-center bg-secondary-light title-base font-semibold!"
      >
        {{ index + 1 }}
      </span>
      <span class="title-base text-secondary-500"> Design a mobile application with figma </span>
    </div>
  </div>
</template>

<style scoped></style>
