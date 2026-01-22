<script setup lang="ts">
import Avatar from './shared/Avatar.vue'
import type { IMentor } from '@/types/mentors.type'

defineProps<{ mentor: IMentor }>()
</script>

<template>
  <Card>
    <div class="flex-center-between gap-2 mb-5">
      <div class="flex-center gap-2">
        <Avatar :url="mentor.avatar" size="48px" />
        <div>
          <h3 class="title text-secondary-500 mb-1">{{ mentor.name }}</h3>
          <p class="text text-xs! tracking-[-1%] text-secondary-400">{{ mentor.role }}</p>
        </div>
      </div>
      <span
        :class="mentor.followed && 'text-secondary-400!'"
        class="text-primary-500 cursor-pointer font-medium text-base"
      >
        {{ !mentor.followed ? '+ Follow' : 'Followed' }}
      </span>
    </div>

    <slot />

    <div class="flex-center-between gap-2">
      <div class="flex-center gap-2 text-base text-secondary-500">
        <AppIcon name="note" />
        {{ mentor.tasks }} Task
      </div>
      <div class="flex-center gap-2 text-base text-secondary-500">
        <AppIcon name="star" />
        {{ mentor.rating }} ({{ mentor.reviews }} Reviews)
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
