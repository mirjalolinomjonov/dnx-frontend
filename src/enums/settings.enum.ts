/**
 * Language options
 */
export enum Language {
  English = 'en',
  Spanish = 'es',
  French = 'fr',
  German = 'de',
  Russian = 'ru',
  Uzbek = 'uz',
}

/**
 * Timezone options
 */
export enum Timezone {
  UTC = 'UTC',
  EST = 'America/New_York',
  PST = 'America/Los_Angeles',
  GMT = 'Europe/London',
  CET = 'Europe/Paris',
  JST = 'Asia/Tokyo',
  UZT = 'Asia/Tashkent',
}

/**
 * Time format options
 */
export enum TimeFormat {
  TwentyFourHours = '24hours',
  TwelveHours = '12hours',
}

/**
 * Settings tab types
 */
export enum SettingsTab {
  General = 'general',
  Notification = 'notification',
}
