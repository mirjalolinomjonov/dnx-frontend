<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import ChatItem from '@/components/chat/ChatItem.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="max-h-dvh overflow-auto">
    <AppHeader class="sticky top-0 z-100" :class="{ 'hidden lg:block': route.params.id }" />
    <div class="flex">
      <!-- USERS ASIDE -->
      <section
        class="shrink-0 bg-white p-6 md:p-8 w-100 max-h-[calc(100dvh-117px)] overflow-y-auto border-r border-r-secondary-light"
        :class="{ 'hidden lg:block': route.params.id }"
      >
        <SearchInput placeholder="Search Name" />
        <!-- user list | chat item -->
        <ul class="space-y-4 mt-8">
          <li v-for="chat in 10" :key="chat" class="space-y-4 group">
            <ChatItem :id="chat" />
            <hr class="text-secondary-light w-[calc(100%-40px)] mx-auto group-last:hidden" />
          </li>
        </ul>
      </section>

      <!-- CONVERSATION WRAPPER -->
      <section class="grow hidden lg:block" :class="{ 'block!': route.params.id }">
        <router-view />
      </section>
    </div>
  </div>
</template>

<style scoped></style>
