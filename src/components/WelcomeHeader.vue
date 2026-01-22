<script setup lang="ts">
defineProps<{ title: string; isShowSubtitle: boolean }>()
</script>

<template>
  <div>
    <h2 class="title-xl text-secondary-500">{{ title }}</h2>
    <span
      v-if="isShowSubtitle"
      class="text-[16px] text-[#54577A] font-medium leading-[150%] tracking-[-2%] mt-2 block"
      >Let's finish your task today!</span
    >
  </div>
</template>

<style scoped></style>
