<script setup lang="ts">
import { inject } from 'vue'
import type { ITask } from '@/types/tasks.type'

import AppButton from '../shared/AppButton.vue'
import TaskDetail from './TaskDetail.vue'
import TaskItem from './TaskItem.vue'

const data: ITask = inject('taskToday') as ITask
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
      <TaskItem :data="data" class="p-0!" />
      <hr class="text-secondary-light" />
      <TaskDetail />
    </div>
    <router-link :to="{ name: 'TasksId', params: { id: data.id } }">
      <AppButton>Go To Detail</AppButton>
    </router-link>
  </Card>
</template>

<style scoped></style>
