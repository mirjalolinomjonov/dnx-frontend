<script setup lang="ts">
withDefaults(defineProps<{ info?: string }>(), {
  info: 'No Data',
})
</script>

<template>
  <p class="title-base text-center text-primary-300">{{ info }}</p>
</template>
