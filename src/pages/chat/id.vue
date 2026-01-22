<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import ChatTextarea from '@/components/chat/ChatTextarea.vue'
import ChatMessageItem from '@/components/chat/ChatMessageItem.vue'
import ChatItemHeader from '@/components/chat/ChatItemHeader.vue'
import type { IMsg } from '@/types/chat.type'

import { messages as initialMessages } from '@/db/chat.db'

// DATA
const messages = ref([...initialMessages])
const conversationRef = ref<HTMLLIElement | null>(null)

// METHODS
function onSend(msg: string): void {
  const payload: IMsg = {
    id: Date.now(),
    senderId: 'me',
    type: 'text',
    text: msg,
    createdAt: new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    status: 'delivered',
  }
  messages.value.push(payload)
  nextTick(scrollToBottom)

  // mock reply
  setTimeout(() => {
    const mock: IMsg = {
      id: Date.now(),
      senderId: 102,
      type: 'text',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      createdAt: new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'delivered',
    }
    messages.value.push(mock)
    nextTick(scrollToBottom)
  }, 2000)
}

function scrollToBottom() {
  if (!conversationRef.value) return

  conversationRef.value.scrollTo({
    top: conversationRef.value.scrollHeight,
    behavior: 'smooth',
  })
}

// LIFECYCLE HOOKS
onMounted(() => {
  nextTick(scrollToBottom)
})
</script>

<template>
  <div class="flex-col h-full max-h-dvh lg:max-h-[calc(100dvh-117px)] overflow-y-auto">
    <ChatItemHeader class="sticky top-0 z-90" />

    <div ref="conversationRef" class="p-6 md:p-8 flex-col gap-5.75">
      <!-- date -->
      <div class="flex">
        <span class="mx-auto px-3 py-2 rounded-base bg-secondary-500 title text-[14px]! text-white">
          Today
        </span>
      </div>
      <ChatMessageItem v-for="msg in messages" :key="msg.id" :msg="msg" />
    </div>

    <ChatTextarea class="sticky bottom-0 z-90" @send="onSend" />
  </div>
</template>

<style scoped></style>
