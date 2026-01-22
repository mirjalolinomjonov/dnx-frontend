<script setup lang="ts">
import Calendar from '@/components/shared/Calendar.vue'
import TaskToday from '@/components/task/TaskToday.vue'
</script>

<template>
  <!-- max-h-dvh overflow-y-auto -->
  <aside class="w-full xl:w-109 p-6 md:p-8 shrink-0 space-y-8 bg-secondary-light">
    <Calendar />
    <TaskToday />
  </aside>
</template>

<style scoped></style>
