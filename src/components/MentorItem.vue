<script setup lang="ts">
import { ref } from 'vue'
import Avatar from './shared/Avatar.vue'

const isFollow = ref<boolean>(false)

function handleFollow(): void {
  isFollow.value = !isFollow.value
}
</script>

<template>
  <Card>
    <div class="flex-center-between gap-2 mb-5">
      <div class="flex-center gap-2">
        <Avatar
          url="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          size="48px"
        />
        <div>
          <h3 class="title text-secondary-500 mb-1">Name</h3>
          <p class="text text-xs! tracking-[-1%] text-secondary-400">Lorem, ipsum dolor.</p>
        </div>
      </div>
      <span
        @click="handleFollow"
        :class="isFollow && 'text-secondary-400!'"
        class="text-primary-500 cursor-pointer font-medium text-base"
      >
        {{ !isFollow ? '+ Follow' : 'Followed' }}
      </span>
    </div>
    <slot />
    <!-- <p class="my-6 text-secondary-300 font-medium leading-[200%] line-clamp-2">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus quo eaque enim perspiciatis,
      sapiente voluptatum tempora itaque ullam et tenetur velit nesciunt esse doloremque officiis!
      Ipsum maiores rem ratione repellat?
    </p> -->
    <div class="flex-center-between gap-2">
      <div class="flex-center gap-2 text-base text-secondary-500">
        <AppIcon name="note" />
        40 Task
      </div>
      <div class="flex-center gap-2 text-base text-secondary-500">
        <AppIcon name="star" />
        4,7 (750 Reviews)
      </div>
    </div>
  </Card>
</template>

<style scoped></style>
