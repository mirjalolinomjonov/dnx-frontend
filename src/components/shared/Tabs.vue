<script setup lang="ts">
import { ref } from 'vue'
import { SettingsTab } from '@/enums/settings.enum'
import type { ITabs } from '@/types/settings.type'

const emit = defineEmits<{
  (e: 'tab', value: SettingsTab): void
}>()

withDefaults(defineProps<{ tabs?: ITabs[] }>(), {
  tabs: () => [
    { label: 'General', action: SettingsTab.General },
    { label: 'Notification', action: SettingsTab.Notification },
  ],
})

const activeTab = ref<SettingsTab>(SettingsTab.General)

// METHODS
function onChange(tab: SettingsTab): void {
  activeTab.value = tab
  emit('tab', tab)
}
</script>

<template>
  <ul class="flex-center gap-6 h-8.75 border-b border-secondary-light">
    <button
      v-for="item in tabs"
      :key="item.action"
      @click="onChange(item.action)"
      class="pb-3 border-b-2 border-b-transparent title-base text-secondary-300 hover:text-secondary-500 hover:border-b-primary-200"
      :class="{
        'border-b-primary-500! text-secondary-500': activeTab === item.action,
      }"
    >
      {{ item.label }}
    </button>
  </ul>
</template>

<style scoped></style>
