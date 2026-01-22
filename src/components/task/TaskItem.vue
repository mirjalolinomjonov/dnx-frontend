<script setup lang="ts">
import { ref } from 'vue'
import AvatarGroup from '../shared/AvatarGroup.vue'
import ProgressBar from '../shared/ProgressBar.vue'
import type { ITask } from '@/types/tasks.type'

const props = defineProps<{ data: ITask }>()

const progress = ref<number>(props.data.progress)
</script>

<template>
  <Card>
    <figure class="w-full h-27.5 overflow-hidden rounded-base bg-gray-100">
      <img loading="lazy" class="w-full h-full object-cover" :src="data.image" alt="" />
    </figure>
    <router-link class="group" :to="{ name: 'TasksId', params: { id: data?.id } }">
      <div class="my-4">
        <h3
          class="title text-secondary-500 mb-1 group-hover:text-primary-500 group-hover:underline"
        >
          {{ data.title }}
        </h3>
        <p class="text text-secondary-400">{{ data.category }}</p>
      </div>
    </router-link>
    <div class="mb-4">
      <div class="flex-center-between">
        <span class="title font-medium! text-secondary-500">Progress</span>
        <span class="title font-medium! text-primary-500">{{ data.progress }}%</span>
      </div>
      <ProgressBar v-model="progress" />
    </div>
    <div class="flex-center-between">
      <span class="title font-medium! text-secondary-500 inline-flex-center gap-2">
        <AppIcon name="time" />
        {{ data.time }}
      </span>
      <AvatarGroup :urls="data.users" size="24px" />
    </div>
  </Card>
</template>

<style scoped></style>
