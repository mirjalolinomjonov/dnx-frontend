<script setup lang="ts">
import { ref, computed } from 'vue'

interface IDay {
  label: string
  date: number
  fullDate: Date
  isCurrentMonth: boolean
  isToday: boolean
}

const today = new Date()
const currentDate = ref<Date>(new Date()) // Joriy oy
const selectedDate = ref<Date>(new Date()) // Bugungi kun tanlangan

// Get month name
const monthYear = computed(() => {
  const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' }
  return currentDate.value.toLocaleDateString('en-US', options)
})

// Check if date is today
function isDateToday(date: Date): boolean {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  )
}

// Get week days for current view
const weekDays = computed((): IDay[] => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  // Get the selected date's week
  const selectedDay = selectedDate.value.getDate()
  const selectedWeekDay = selectedDate.value.getDay() // 0 = Sunday, 6 = Saturday

  // Calculate the start of the week (Sunday)
  const startOfWeek = selectedDay - selectedWeekDay

  const days: IDay[] = []
  const weekLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  for (let i = 0; i < 7; i++) {
    const date = new Date(year, month, startOfWeek + i)
    days.push({
      label: weekLabels[i] as string,
      date: date.getDate(),
      fullDate: date,
      isCurrentMonth: date.getMonth() === month,
      isToday: isDateToday(date),
    })
  }

  return days
})

// Check if day is selected
function isSelected(day: IDay): boolean {
  return (
    day.fullDate.getDate() === selectedDate.value.getDate() &&
    day.fullDate.getMonth() === selectedDate.value.getMonth() &&
    day.fullDate.getFullYear() === selectedDate.value.getFullYear()
  )
}

// Select a day
function selectDay(day: IDay): void {
  selectedDate.value = new Date(day.fullDate)

  // If clicked day is from different month, change current month
  if (!day.isCurrentMonth) {
    currentDate.value = new Date(day.fullDate)
  }
}

// Navigate to previous week
function previousWeek(): void {
  const newDate = new Date(selectedDate.value)
  newDate.setDate(newDate.getDate() - 7)
  selectedDate.value = newDate

  // Update current month if needed
  if (newDate.getMonth() !== currentDate.value.getMonth()) {
    currentDate.value = new Date(newDate)
  }
}

// Navigate to next week
function nextWeek(): void {
  const newDate = new Date(selectedDate.value)
  newDate.setDate(newDate.getDate() + 7)
  selectedDate.value = newDate

  // Update current month if needed
  if (newDate.getMonth() !== currentDate.value.getMonth()) {
    currentDate.value = new Date(newDate)
  }
}
</script>

<template>
  <Card class="space-y-8">
    <!-- header -->
    <div class="flex-center-between gap-3">
      <button
        @click="previousWeek"
        class="text-secondary-400 hover:text-secondary-500 transition-colors"
      >
        <AppIcon name="arrow-left" />
      </button>
      <span class="title-base text-secondary-500 font-semibold!">{{ monthYear }}</span>
      <button
        @click="nextWeek"
        class="text-secondary-400 hover:text-secondary-500 transition-colors"
      >
        <AppIcon name="arrow-right" />
      </button>
    </div>

    <!-- weekdays -->
    <div class="grid grid-cols-7 gap-x-4.5">
      <div
        v-for="(day, index) in weekDays"
        :key="`${day.fullDate.getTime()}-${index}`"
        class="py-1.5 px-1 rounded-[23px] w-10 transition-colors"
        :class="{ 'bg-secondary-500': isSelected(day) }"
      >
        <span
          class="text font-medium! text-secondary-500 w-8 h-7 flex-center-center"
          :class="{
            'text-white': isSelected(day),
            'opacity-40': !day.isCurrentMonth,
          }"
        >
          {{ day.label }}
        </span>
        <span
          @click="selectDay(day)"
          class="cursor-pointer text font-medium! text-secondary-500 w-8 h-8 rounded-full bg-secondary-light hover:bg-secondary-100 flex-center-center transition-all"
          :class="{
            'text-white bg-primary-500! hover:bg-primary-600!': isSelected(day),
            'opacity-40': !day.isCurrentMonth,
            'text-white bg-primary-300!': !isSelected(day) && day.isToday,
          }"
        >
          {{ day.date }}
        </span>
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
