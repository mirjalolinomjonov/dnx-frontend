<script setup lang="ts">
import { computed } from 'vue'
import type { NotificationSettings, NotificationItem } from '@/types/settings.type'
import Switch from '../inputs/Switch.vue'

interface IProps {
  modelValue: NotificationSettings
}
interface IEmits {
  (e: 'update:modelValue', value: NotificationSettings): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

// DATA
const notifications: NotificationItem[] = [
  { key: 'message', label: 'Message' },
  { key: 'taskUpdate', label: 'Task Update' },
  { key: 'taskDeadline', label: 'Task Deadline' },
  { key: 'mentorHelp', label: 'Mentor Help' },
]

// Har bir notification uchun computed model
const getNotificationModel = (key: keyof NotificationSettings) => {
  return computed<boolean>({
    get: () => props.modelValue[key],
    set: (value: boolean) => {
      emit('update:modelValue', {
        ...props.modelValue,
        [key]: value,
      })
    },
  })
}

const models = {
  message: getNotificationModel('message'),
  taskUpdate: getNotificationModel('taskUpdate'),
  taskDeadline: getNotificationModel('taskDeadline'),
  mentorHelp: getNotificationModel('mentorHelp'),
} satisfies Record<keyof NotificationSettings, ReturnType<typeof getNotificationModel>>
</script>

<template>
  <div class="space-y-6">
    <div v-for="item in notifications" :key="item.key" class="flex-center gap-5">
      <Switch v-model="models[item.key].value" />
      <label class="title-base text-secondary-500 cursor-pointer select-none">
        {{ item.label }}
      </label>
    </div>
  </div>
</template>
