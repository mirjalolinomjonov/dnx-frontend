<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    url: string
    alt?: string
    fallbackText?: string
    size?: string
  }>(),
  {
    alt: 'Avatar',
    fallbackText: 'AB',
    size: '52px',
  },
)

// DATA
const hasError = ref<boolean>(false)

// METHODS
function onError(e: Event) {
  console.log('[ERROR]', e)
  hasError.value = true
}
</script>

<template>
  <div
    :style="{ width: size, height: size }"
    class="cursor-pointer rounded-full flex-center-center overflow-hidden bg-gray-100 text-sm font-medium text-secondary-400"
  >
    <img
      loading="lazy"
      @error="onError"
      v-if="url && !hasError"
      :src="url"
      :alt="alt"
      class="w-full h-full object-cover"
    />
    <span v-else>
      {{ fallbackText }}
    </span>
  </div>
</template>

<style scoped></style>
