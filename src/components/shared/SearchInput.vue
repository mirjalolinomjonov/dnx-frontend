<script setup lang="ts">
import { debounce } from '@/utils/debounce'

defineProps<{ placeholder?: string }>()

// METHODS
const search = (value: string) => {
  console.log('API call:', value)
}

const debouncedSearch = debounce(search, 500)

const onInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value
  debouncedSearch(value)
}
</script>

<template>
  <label
    for="search"
    class="flex-center gap-2 border-base rounded-base px-4 py-2 w-full h-13 max-w-md cursor-text"
  >
    <input
      @input="onInput"
      class="w-full h-full text-secondary-400 text-xs placeholder:text-secondary-100 leading-[100%] tracking-[-1%] bg-transparent"
      type="search"
      id="search"
      :placeholder="placeholder || 'Search...'"
      autocomplete="off"
    />
    <AppIcon name="search" class="shrink-0" />
  </label>
</template>

<style scoped></style>
