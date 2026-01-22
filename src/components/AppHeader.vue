<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayout } from '@/composables'
import { useRouteFlags } from '@/composables/useRouteFlags'

import WelcomeHeader from './WelcomeHeader.vue'
import Avatar from './shared/Avatar.vue'
import CircleButton from './shared/CircleButton.vue'

// COMPOSABLES
const route = useRoute()
const { isChatOrSettingsPage } = useRouteFlags()
const { toggleSidebar } = useLayout()

// DATA
const userName = 'Hi, Dennis Nzioki'

// COMPUTED
const isHome = computed(() => route.name === 'Home')
const title = computed<string>(() => {
  return (route.meta.headerTitle as string) || userName
})
const isTaskOrMentorPage = computed(() => {
  return route.name === 'Tasks' || route.name === 'Mentors'
})
</script>

<template>
  <header
    class="p-6 md:p-8"
    :class="{
      'bg-white lg:bg-[#f9fafb]! max-md:border-b max-md:border-secondary-light':
        route.name === 'Home',
      'bg-white': route.name !== 'Home',
      'pb-6!': isTaskOrMentorPage,
      'border-b border-secondary-light': isChatOrSettingsPage,
    }"
  >
    <div class="flex-center-between">
      <CircleButton @click="toggleSidebar" icon-name="burger" class="md:hidden!" />

      <WelcomeHeader class="hidden md:block" :title="title" :is-show-subtitle="isHome" />
      <div class="flex-center gap-6">
        <CircleButton icon-name="notif" />
        <Avatar url="https://github.com/shadcn.png" />
      </div>
    </div>

    <!-- FOR MOBILE -->
    <WelcomeHeader
      v-if="route.name !== 'Home'"
      class="block md:hidden mt-6"
      :title="title"
      :is-show-subtitle="isHome"
    />
  </header>
</template>

<style scoped></style>
