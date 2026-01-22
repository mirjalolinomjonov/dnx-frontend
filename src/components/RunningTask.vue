<script setup lang="ts">
import CircularProgress from './shared/CircularProgress.vue'

defineProps<{ count: number; total: number; percentage: number }>()
</script>

<template>
  <Card class="flex-col gap-4 shrink-0 bg-secondary-500! p-5! text-white w-full 2md:w-48.5! h-53.5">
    <h3 class="title">Running Task</h3>
    <span class="title-2xl">{{ count }}</span>
    <div class="flex-center gap-4.5">
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
