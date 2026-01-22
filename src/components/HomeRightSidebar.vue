<script setup lang="ts">
import Calendar from '@/components/shared/Calendar.vue'
import TaskToday from '@/components/task/TaskToday.vue'
</script>

<template>
  <aside
    class="w-full xl:w-109 p-8 shrink-0 space-y-8 bg-secondary-light max-h-dvh overflow-y-auto"
  >
    <Calendar />
    <TaskToday />
  </aside>
</template>

<style scoped></style>
