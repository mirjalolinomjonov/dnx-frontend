<script setup lang="ts">
interface Day {
  label: string
  date: number
  active?: boolean
}

const days: Day[] = [
  { label: 'S', date: 18 },
  { label: 'M', date: 19 },
  { label: 'T', date: 20 },
  { label: 'W', date: 21 },
  { label: 'T', date: 22, active: true },
  { label: 'F', date: 23 },
  { label: 'S', date: 24 },
]
</script>

<template>
  <Card class="space-y-8">
    <!-- header -->
    <div class="flex-center-between gap-3">
      <button class="text-secondary-400 hover:text-secondary-500">
        <AppIcon name="arrow-left" />
      </button>
      <span class="title-base text-secondary-500 font-semibold!">January 2026</span>
      <button class="text-secondary-400 hover:text-secondary-500">
        <AppIcon name="arrow-right" />
      </button>
    </div>
    <!-- weekdays -->
    <div class="grid grid-cols-7 gap-x-4.5">
      <div
        v-for="day in days"
        :key="day.label"
        class="py-1.5 px-1 rounded-[23px] w-10"
        :class="{ 'bg-secondary-500': day.active }"
      >
        <span
          class="text font-medium! text-secondary-500 w-8 h-7 flex-center-center"
          :class="{ 'text-white': day.active }"
        >
          {{ day.label }}
        </span>
        <span
          class="cursor-pointer text font-medium! text-secondary-500 w-8 h-8 rounded-full bg-secondary-light hover:bg-secondary-100 flex-center-center"
          :class="{ 'text-white bg-primary-500!': day.active }"
        >
          {{ day.date }}
        </span>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
