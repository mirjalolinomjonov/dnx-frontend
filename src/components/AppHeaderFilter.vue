<script setup lang="ts">
import { computed } from 'vue'
import AppButton from './shared/AppButton.vue'
import SearchInput from './shared/SearchInput.vue'

const props = defineProps<{ placeholder?: string; query: string }>()
const emit = defineEmits<{
  (e: 'update:query', value: string): void
}>()

const query = computed<string>({
  get() {
    return props.query
  },
  set(value: string) {
    emit('update:query', value)
  },
})
</script>

<template>
  <div class="flex-center-between gap-x-6 bg-white px-6 pb-6 md:px-8 md:pb-8">
    <SearchInput v-model="query" :placeholder="placeholder" />
    <div class="hidden 2md:flex 2md:gap-4 lg:gap-6">
      <AppButton variant="outline" class="border-base flex-center">
        <AppIcon name="category" class="mr-2 shrink-0" />
        Category
      </AppButton>
      <AppButton variant="outline" class="shrink-0 w-auto! border-base flex-center">
        <AppIcon name="filter" class="mr-2 shrink-0" />
        Sort By: Deadline
      </AppButton>
    </div>
    <AppButton variant="outline" class="shrink w-13! border-base 2md:hidden!">
      <AppIcon name="filter-settings" class="shrink-0" />
    </AppButton>
  </div>
</template>

<style scoped></style>
