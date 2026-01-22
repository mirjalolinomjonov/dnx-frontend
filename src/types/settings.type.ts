import { SettingsTab, Language, Timezone, TimeFormat } from '@/enums/settings.enum'

export interface ITabs {
  label: string
  action: SettingsTab
}

/**
 * General settings interface
 */
export interface GeneralSettings {
  language: Language
  timezone: Timezone
  timeFormat: TimeFormat
}

/**
 * Notification settings interface
 */
export interface NotificationSettings {
  message: boolean
  taskUpdate: boolean
  taskDeadline: boolean
  mentorHelp: boolean
}

/**
 * Complete settings interface
 */
export interface Settings {
  general: GeneralSettings
  notification: NotificationSettings
}

/**
 * Language option for select
 */
export interface LanguageOption {
  value: Language
  label: string
}

/**
 * Timezone option for select
 */
export interface TimezoneOption {
  value: Timezone
  label: string
  offset?: string
}

/**
 * Time format option
 */
export interface TimeFormatOption {
  value: TimeFormat
  label: string
  example: string
}

/**
 * Notification item for list
 */
export interface NotificationItem {
  key: keyof NotificationSettings
  label: string
}
