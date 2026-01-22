<script setup lang="ts">
import AppMenu from '@/components/AppMenu.vue'
</script>

<template>
  <div class="flex h-screen">
    <AppMenu class="shrink-0 hidden md:block" />
    <main class="grow min-w-0">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
