<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'default' | 'outline'
  }>(),
  { variant: 'default' },
)
</script>

<template>
  <button
    class="bg-primary-500 flex-center-center text-nowrap text-white text-[12px] py-3 px-6 w-full cursor-pointer rounded-base font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed!"
    :class="variant === 'outline' && 'bg-white  text-secondary-500!'"
  >
    <slot />
  </button>
</template>

<style scoped></style>
