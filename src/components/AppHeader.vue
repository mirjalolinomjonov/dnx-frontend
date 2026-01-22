<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import WelcomeHeader from './WelcomeHeader.vue'
import Avatar from './shared/Avatar.vue'

import { useRouteFlags } from '@/composables/useRouteFlags'

// COMPOSABLES
const route = useRoute()
const { isChatOrSettingsPage } = useRouteFlags()

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
    class="flex-center-between p-8 max-md:border-b max-md:border-secondary-light"
    :class="{
      'bg-white lg:bg-transparent!': route.name === 'Home',
      'bg-white': route.name !== 'Home',
      'pb-6!': isTaskOrMentorPage,
      'border-b border-secondary-light': isChatOrSettingsPage,
    }"
  >
    <span class="md:hidden! circle-outline-btn border-base">
      <AppIcon name="burger" />
    </span>
    <WelcomeHeader class="hidden md:block" :title="title" :is-show-subtitle="isHome" />
    <div class="flex-center gap-6">
      <span class="circle-outline-btn border-base">
        <AppIcon name="notif" />
      </span>
      <Avatar url="https://github.com/shadcn.png" />
    </div>
  </header>
</template>

<style scoped></style>
