<script setup lang="ts">
import CircularProgress from './shared/CircularProgress.vue'

defineProps<{ count: number; total: number; percentage: number }>()
</script>

<template>
  <Card class="flex-col gap-4 bg-secondary-500! p-5! text-white w-53.5">
    <h3 class="title">Running Task</h3>
    <span class="title-2xl">{{ count }}</span>
    <div class="flex-center gap-4.5">
      <!-- <span
        class="text-2xl w-17 h-17 rounded-full grid place-content-center border-border border border-solid"
        >{{ percentage }}%</span
      > -->
      <CircularProgress :percentage="percentage" />
      <div>
        <span class="block title-lg">{{ total }}</span>
        <span class="text-secondary-100 text-sm leading-[150%] tracking-[-2%] font-medium"
          >Tasks</span
        >
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
