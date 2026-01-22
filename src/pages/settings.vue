<script setup lang="ts">
import { reactive, ref, type Component } from 'vue'
import Tabs from '@/components/shared/Tabs.vue'
import General from '@/components/settings/General.vue'
import Notification from '@/components/settings/Notification.vue'
import { SettingsTab, Language, Timezone, TimeFormat } from '@/enums/settings.enum'
import type { GeneralSettings, NotificationSettings, Settings } from '@/types/settings.type'
import AppButton from '@/components/shared/AppButton.vue'
import AppHeader from '@/components/AppHeader.vue'

interface SettingsState {
  activeTab: SettingsTab
  general: GeneralSettings
  notification: NotificationSettings
  isSaving: boolean
  hasChanges: boolean
}

// DATA
const state = reactive<SettingsState>({
  activeTab: SettingsTab.General,
  general: {
    language: Language.English,
    timezone: Timezone.UTC,
    timeFormat: TimeFormat.TwentyFourHours,
  },
  notification: {
    message: true,
    taskUpdate: true,
    taskDeadline: true,
    mentorHelp: false,
  },
  isSaving: false,
  hasChanges: false,
})
const activeComponent = ref<Component>(General)

function onHandle(tab: SettingsTab): void {
  switch (tab) {
    case SettingsTab.General:
      activeComponent.value = General
      state.activeTab = SettingsTab.General
      break
    case SettingsTab.Notification:
      activeComponent.value = Notification
      state.activeTab = SettingsTab.Notification
      break
    default:
      activeComponent.value = General
      break
  }
}
const handleGeneralUpdate = (settings: GeneralSettings): void => {
  state.general = settings
  state.hasChanges = true
}

const handleNotificationUpdate = (settings: NotificationSettings): void => {
  state.notification = settings
  state.hasChanges = true
}

const handleSave = async (): Promise<void> => {
  if (!state.hasChanges) return

  state.isSaving = true

  try {
    const settingsData: Settings = {
      general: state.general,
      notification: state.notification,
    }

    await saveSettings(settingsData)
    state.hasChanges = false
    console.log('Settings saved successfully')
  } catch (error) {
    console.error('Failed to save settings:', error)
  } finally {
    state.isSaving = false
  }
}

// Mock API call
const saveSettings = async (settings: Settings): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Saving settings:', settings)
      resolve()
    }, 1000)
  })
}
</script>

<template>
  <AppHeader />
  <div class="p-6 md:p-8 max-h-[calc(100dvh-117px)] overflow-y-auto">
    <Card class="p-6 md:p-8">
      <Tabs @tab="onHandle" />
      <div class="max-w-100 space-y-16 mt-8">
        <General
          v-if="state.activeTab === SettingsTab.General"
          :model-value="state.general"
          @update:model-value="handleGeneralUpdate"
        />

        <Notification
          v-else-if="state.activeTab === SettingsTab.Notification"
          :model-value="state.notification"
          @update:model-value="handleNotificationUpdate"
        />

        <!-- Save Button -->
        <AppButton
          class="max-w-54"
          @click="handleSave"
          :disabled="!state.hasChanges || state.isSaving"
        >
          {{ state.isSaving ? 'Saving...' : 'Save Changes' }}
        </AppButton>
      </div>
    </Card>
    <!-- <pre>{{ state }}</pre> -->
  </div>
</template>

<style scoped></style>
