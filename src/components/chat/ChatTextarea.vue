<script setup lang="ts">
import { ref, nextTick } from 'vue'

const emit = defineEmits<{
  (e: 'send', value: string): void
}>()

// DATA
const msg = ref<string>('')
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const MAX_HEIGHT = 120

// METHODS
function autoResize() {
  const el = textareaRef.value
  if (!el) return

  el.style.height = 'auto'
  el.style.height = Math.min(el.scrollHeight, MAX_HEIGHT) + 'px'
}
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    onSend()
  }
}
function onSend(): void {
  const trimMsg = msg.value.trim()
  if (!trimMsg) {
    msg.value = ''
    autoResize()
    return
  }
  emit('send', trimMsg)
  msg.value = ''
  nextTick(autoResize)
}
</script>

<template>
  <label
    for="msg"
    class="bg-white mt-auto py-4.5 px-8 cursor-text flex-center gap-5 border-t border-t-secondary-light"
  >
    <textarea
      ref="textareaRef"
      v-model="msg"
      rows="1"
      id="msg"
      placeholder="Send your message…"
      class="h-full grow resize-none outline-none leading-6 max-h-30 overflow-y-auto"
      @input="autoResize"
      @keydown="onKeydown"
      autocomplete="off"
    />
    <div class="inline-flex-center gap-5 self-end">
      <label for="attach" class="cursor-pointer text-secondary-100 hover:text-secondary-500">
        <input id="attach" type="file" class="hidden" />
        <AppIcon name="attach-circle" />
      </label>
      <button @click="onSend" @keydown="onSend" class="hover:opacity-90">
        <AppIcon name="send-msg" />
      </button>
    </div>
  </label>
</template>

<style scoped></style>
