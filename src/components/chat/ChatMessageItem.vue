<script setup lang="ts">
import type { IMsg } from '@/types/chat.type'
import { computed } from 'vue'

const props = defineProps<{ msg: IMsg }>()

const currentUser = {
  id: 'me',
  name: 'You',
}

const isMine = computed(() => props.msg.senderId === currentUser.id)
</script>

<template>
  <div class="flex-col gap-2.5">
    <div
      class="chat-item title"
      :class="
        isMine
          ? 'ml-auto  bg-primary-500! text-white! rounded-tr-none!'
          : 'mr-auto rounded-tl-none!'
      "
    >
      <figure v-if="msg.file?.url" class="h-35.25 rounded-[5px] overflow-hidden mb-3 bg-gray-200">
        <img :src="msg.file?.url" alt="img" class="w-full h-full object-cover" />
      </figure>
      {{ msg.text }}
    </div>

    <span
      class="text-base font-normal! tracking-[-1%] text-secondary-300"
      :class="{ 'ml-auto!': isMine }"
    >
      {{ msg.createdAt }}
    </span>
  </div>
</template>
