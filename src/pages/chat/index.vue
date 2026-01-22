<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ChatItem from '@/components/chat/ChatItem.vue'

import SearchInput from '@/components/shared/SearchInput.vue'
</script>

<template>
  <AppHeader />
  <div class="flex h-[calc(100dvh-117px)]">
    <section
      class="shrink-0 bg-white p-8 w-100 max-h-full overflow-y-auto border-r border-r-secondary-light"
    >
      <search-input placeholder="Search Name" />
      <ul class="space-y-4 mt-8">
        <li v-for="chat in 10" :key="chat" class="space-y-4 group">
          <chat-item :id="chat" />
          <hr class="text-secondary-light w-[calc(100%-40px)] mx-auto group-last:hidden" />
        </li>
      </ul>
    </section>
    <section class="grow">
      <router-view />
    </section>
  </div>
</template>

<style scoped></style>
