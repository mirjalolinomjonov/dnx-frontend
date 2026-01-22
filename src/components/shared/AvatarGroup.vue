<script setup lang="ts">
import Avatar from './Avatar.vue'
withDefaults(
  defineProps<{
    urls: string[]
    size?: string
  }>(),
  {
    size: '24px',
  },
)
</script>

<template>
  <div class="inline-flex-center">
    <Avatar
      v-for="item in urls"
      :key="item"
      :url="item"
      :size="size"
      class="-ml-2 border-[1.5px] border-solid border-white"
    />
  </div>
</template>

<style scoped></style>
