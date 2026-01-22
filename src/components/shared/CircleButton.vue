<script setup lang="ts">
defineProps<{ iconName: string }>()
</script>
<template>
  <button class="circle-outline-btn border-base">
    <AppIcon :name="iconName" />
  </button>
</template>
