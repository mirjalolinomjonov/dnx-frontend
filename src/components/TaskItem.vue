<script setup lang="ts">
import { ref } from 'vue'
import AvatarGroup from './shared/AvatarGroup.vue'
import ProgressBar from './shared/ProgressBar.vue'

defineProps<{ id: number }>()

const users = [
  'https://i.pravatar.cc/150?img=1',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=3',
  'https://i.pravatar.cc/150?img=4',
  'https://i.pravatar.cc/150?img=5',
]
const progress = ref(70)
</script>

<template>
  <Card>
    <figure class="w-full h-27.5 overflow-hidden rounded-base bg-gray-100">
      <img class="w-full h-full object-cover" src="https://picsum.photos/250/150" alt="" />
    </figure>
    <router-link class="group" :to="{ name: 'TasksId', params: { id } }">
      <div class="my-4">
        <h3
          class="title text-secondary-500 mb-1 group-hover:text-primary-500 group-hover:underline"
        >
          Creating Awesome Mobile Apps
        </h3>
        <p class="text text-secondary-400">UI UX Design</p>
      </div>
    </router-link>
    <div class="mb-4">
      <div class="flex-center-between">
        <span class="title font-medium! text-secondary-500">Progress</span>
        <span class="title font-medium! text-primary-500">{{ progress }}%</span>
      </div>
      <ProgressBar v-model="progress" />
    </div>
    <div class="flex-center-between">
      <span class="title font-medium! text-secondary-500 inline-flex-center gap-2">
        <AppIcon name="time" />
        1 Hour
      </span>
      <AvatarGroup :urls="users" size="24px" />
    </div>
  </Card>
</template>

<style scoped></style>
