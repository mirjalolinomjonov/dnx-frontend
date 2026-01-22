<script setup lang="ts">
import AppButton from './shared/AppButton.vue'
import TaskDetail from './TaskDetail.vue'
import TaskItem from './TaskItem.vue'
</script>

<template>
  <Card>
    <!-- header -->
    <div class="flex-center-between mb-5">
      <h3 class="title-base text-secondary-500 font-semibold!">Task Today</h3>
      <button>
        <AppIcon name="more" />
      </button>
    </div>
    <div class="space-y-8 mb-14">
      <TaskItem :id="98" class="p-0!" />
      <hr class="text-secondary-light" />
      <TaskDetail />
    </div>
    <AppButton>Go To Detail</AppButton>
  </Card>
</template>

<style scoped></style>
