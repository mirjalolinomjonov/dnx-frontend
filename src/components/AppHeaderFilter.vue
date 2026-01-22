<script setup lang="ts">
import AppButton from './shared/AppButton.vue'
import SearchInput from './shared/SearchInput.vue'

defineProps<{ placeholder?: string }>()
</script>

<template>
  <div class="flex-center-between bg-white px-8 pb-8">
    <SearchInput :placeholder="placeholder" />
    <div class="flex-center gap-6">
      <AppButton variant="outline" class="border-base flex-center">
        <AppIcon name="category" class="mr-2 shrink-0" />
        Category
      </AppButton>
      <AppButton variant="outline" class="shrink-0 w-auto! border-base flex-center">
        <AppIcon name="filter" class="mr-2 shrink-0" />
        Sort By: Deadline
      </AppButton>
    </div>
  </div>
</template>

<style scoped></style>
