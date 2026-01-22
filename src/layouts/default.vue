<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
import { useLayout } from '@/composables'
const { isSidebarOpen, closeSidebar } = useLayout()
</script>

<template>
  <div class="flex h-screen relative overflow-hidden">
    <!-- MOBILE OVERLAY -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 z-190 bg-black/40 md:hidden"
      @click="closeSidebar"
    />
    <!-- SIDEBAR -->
    <aside
      class="fixed z-200 h-full w-64 bg-white transition-transform duration-300 ease-out md:static md:translate-x-0"
      :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <AppMenu />
    </aside>
    <!-- CONTENT -->
    <main class="grow min-w-0">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
