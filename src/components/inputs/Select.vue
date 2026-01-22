<!-- Select.vue -->
<script setup lang="ts">
interface Option {
  label: string
  value: string
}

interface Props {
  options: Option[]
  placeholder?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Select an option',
  disabled: false,
})

const model = defineModel<string>({ required: true })
</script>

<template>
  <select
    v-model="model"
    :disabled="disabled"
    class="w-full h-12.5 px-4 py-2 border-base rounded-lg focus:ring-1 focus:ring-primary-500 focus:border-primary-500! outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <option v-if="placeholder" value="" disabled hidden>{{ placeholder }}</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>
