<script setup lang="ts">
import { useRoute, type RouteRecordName } from 'vue-router'

import HelpCenter from './HelpCenter.vue'
import AppIcon from './shared/app-icon/AppIcon.vue'
import { useRouteFlags } from '@/composables/useRouteFlags'

// COMPOSABLES
const route = useRoute()
const { isChatOrSettingsPage } = useRouteFlags()

// INTERFACE
interface IMenuItem {
  icon: string
  name: string
  routeName: RouteRecordName
}

// DATA
const menuList: IMenuItem[] = [
  { icon: 'menu-item-home', name: 'Overview', routeName: 'Home' },
  { icon: 'menu-item-task', name: 'Task', routeName: 'Tasks' },
  { icon: 'menu-item-mentors', name: 'Mentors', routeName: 'Mentors' },
  { icon: 'menu-item-chat', name: 'Chat', routeName: 'Chat' },
  { icon: 'menu-item-settings', name: 'Settings', routeName: 'Settings' },
]

// METHODS
const isActive = (routeName: RouteRecordName): boolean => {
  if (route.name === routeName) {
    return true
  }

  const currentRouteName = route.name as string
  const routeNameStr = routeName as string

  if (currentRouteName?.startsWith(routeNameStr)) {
    return true
  }

  return false
}
</script>

<template>
  <aside
    class="p-8 w-63 bg-white"
    :class="isChatOrSettingsPage && 'border-r border-secondary-light'"
  >
    <router-link to="/" class="w-47 h-10 block">
      <AppIcon name="logo" />
      <!-- <AppIcon name="logo-mark" /> -->
      <!-- <AppIcon name="panel-toggle" /> -->
    </router-link>
    <ul class="pt-15 flex-col h-full gap-6 max-h-[calc(100vh-104px)] overflow-y-auto w-full">
      <li v-for="item in menuList" :key="item.name">
        <router-link
          :to="{ name: item.routeName }"
          :class="isActive(item.routeName) && 'active-menu-item'"
          class="flex-center gap-3 px-5 py-2.5 rounded-base text-[#8E92BC] hover:bg-secondary-light hover:text-foreground group"
        >
          <AppIcon :name="item.icon" class="group-hover:text-secondary-500" />
          {{ item.name }}
        </router-link>
      </li>
      <br />
      <HelpCenter class="mt-auto" />
    </ul>
  </aside>
</template>

<style scoped>
.active-menu-item {
  background: #f5f5f7;
  color: #141522;
  svg {
    path {
      fill: #141522;
    }
  }
}
</style>
