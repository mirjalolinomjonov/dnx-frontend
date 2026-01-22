<script setup lang="ts">
import Avatar from '@/components/shared/Avatar.vue'
defineProps<{ id: number }>()
</script>

<template>
  <router-link
    :to="{ name: 'ChatId', params: { id } }"
    class="px-5 py-2.5 rounded-base hover:bg-secondary-50 flex-center gap-2"
  >
    <Avatar :url="`https://i.pravatar.cc/150?img=${id + 47}`" size="48px" />
    <div class="grow">
      <div class="flex-center-between gap-2 w-full mb-2">
        <h3 class="title text-[14px]! text-secondary-500">Angelie Crison</h3>
        <span class="text font-normal! text-secondary-300 tracking-[-1%]">1m</span>
      </div>
      <div class="flex-center-between gap-2">
        <p class="text tracking-[-1%]! text-truncate max-w-47.5">
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
        <AppIcon v-if="1" name="dbl-check" />
        <span v-else class="point"></span>
      </div>
    </div>
  </router-link>
</template>

<style scoped></style>
