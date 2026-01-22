<script setup lang="ts">
import Avatar from '../shared/Avatar.vue'
</script>

<template>
  <section class="flex-center-between bg-white px-12 py-6">
    <div class="inline-flex-center gap-3">
      <Avatar url="https://i.pravatar.cc/150?img=50" />
      <div>
        <h3 class="title text-[14px]! text-secondary-500">Angelie Crison</h3>
        <span class="inline-flex-center gap-2 text text-secondary-500">
          <span class="point bg-green-500!"></span> Online
        </span>
      </div>
    </div>

    <div class="inline-flex-center gap-6">
      <span class="circle-outline-btn border-base">
        <AppIcon name="video-call" />
      </span>
      <span class="circle-outline-btn border-base">
        <AppIcon name="voice-call" />
      </span>
    </div>
  </section>
</template>

<style scoped></style>
