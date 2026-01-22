<!-- GeneralTab.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { Language, Timezone, TimeFormat } from '@/enums/settings.enum'
import type {
  GeneralSettings,
  LanguageOption,
  TimezoneOption,
  TimeFormatOption,
} from '@/types/settings.type'
import Select from '../inputs/Select.vue'

interface Props {
  modelValue: GeneralSettings
}

interface Emits {
  (e: 'update:modelValue', value: GeneralSettings): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const languageOptions: LanguageOption[] = [
  { value: Language.English, label: 'English (Default)' },
  { value: Language.Spanish, label: 'Spanish' },
  { value: Language.French, label: 'French' },
  { value: Language.German, label: 'German' },
  { value: Language.Russian, label: 'Russian' },
  { value: Language.Uzbek, label: 'Uzbek' },
]

const timezoneOptions: TimezoneOption[] = [
  { value: Timezone.UTC, label: 'UTC (+00:00)' },
  { value: Timezone.EST, label: 'Eastern Time (US) (-05:00)' },
  { value: Timezone.PST, label: 'Pacific Time (US) (-08:00)' },
  { value: Timezone.GMT, label: 'GMT (London) (+00:00)' },
  { value: Timezone.CET, label: 'Central European Time (+01:00)' },
  { value: Timezone.JST, label: 'Japan Standard Time (+09:00)' },
  { value: Timezone.UZT, label: 'Uzbekistan Time (+05:00)' },
]

const timeFormatOptions: TimeFormatOption[] = [
  { value: TimeFormat.TwentyFourHours, label: '24 hours', example: '14:30' },
  { value: TimeFormat.TwelveHours, label: '12 hours', example: '2:30 PM' },
]

const localLanguage = computed<Language>({
  get: () => props.modelValue.language,
  set: (value: Language) => {
    emit('update:modelValue', {
      ...props.modelValue,
      language: value,
    })
  },
})

const localTimezone = computed<Timezone>({
  get: () => props.modelValue.timezone,
  set: (value: Timezone) => {
    emit('update:modelValue', {
      ...props.modelValue,
      timezone: value,
    })
  },
})

const updateTimeFormat = (value: TimeFormat): void => {
  emit('update:modelValue', {
    ...props.modelValue,
    timeFormat: value,
  })
}
</script>

<template>
  <div class="space-y-8">
    <!-- Language -->
    <div>
      <label class="block title-base text-secondary-500 mb-4">Language</label>
      <Select v-model="localLanguage" :options="languageOptions" />
    </div>

    <!-- Timezone -->
    <div>
      <label class="block title-base text-secondary-500 mb-4">Timezone</label>
      <Select v-model="localTimezone" :options="timezoneOptions" />
    </div>

    <!-- Time Format -->
    <div>
      <label class="block title-base text-secondary-500 mb-4">Time Format</label>
      <div class="flex gap-4">
        <label
          v-for="option in timeFormatOptions"
          :key="option.value"
          class="h-12.5 flex-center-between gap-3 px-6 py-3 border-base rounded-lg cursor-pointer transition-all flex-1"
          :class="{
            'border-primary-500!': modelValue.timeFormat === option.value,
            'border-gray-300! hover:border-gray-400!': modelValue.timeFormat !== option.value,
          }"
        >
          <span class="text-sm font-medium">{{ option.label }}</span>
          <input
            type="radio"
            :value="option.value"
            :checked="modelValue.timeFormat === option.value"
            @change="updateTimeFormat(option.value)"
            class="w-5 h-5 text-primary-500 border-secondary-light focus:ring-primary-500"
          />
        </label>
      </div>
    </div>
  </div>
</template>
