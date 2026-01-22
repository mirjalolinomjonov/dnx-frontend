<script setup lang="ts">
import AppButton from '../shared/AppButton.vue'
</script>

<template>
  <Card class="w-93! shrink-0 space-y-6 h-full">
    <h5 class="title-base font-semibold! text-secondary-500">Assigned Assignments</h5>
    <section>
      <h2 class="title-xl text-secondary-500 mb-3">Creating Awesome Mobile Apps</h2>
      <p class="text-base text-secondary-400">UI UX Design . Apps Design</p>
    </section>

    <section class="space-y-5">
      <h3 class="title-lg text-secondary-500">Detail Student</h3>
      <li class="flex-center-between">
        <span class="title-base text-secondary-400">Student's name</span>
        <span class="title-base font-semibold! text-secondary-500"> Dennis Nzioki </span>
      </li>
      <li class="flex-center-between">
        <span class="title-base text-secondary-400">Student Class</span>
        <span class="title-base font-semibold! text-secondary-500"> MIPA 2 </span>
      </li>
      <li class="flex-center-between">
        <span class="title-base text-secondary-400">Student Number</span>
        <span class="title-base font-semibold! text-secondary-500"> 10 </span>
      </li>
    </section>
    <section class="space-y-5 mb-15">
      <h3 class="title-lg text-secondary-500">File Task</h3>
      <li class="flex-center-between">
        <span class="title-base text-secondary-400">Last Modified</span>
        <span class="title-base font-semibold! text-secondary-500"> 1 July 2022 </span>
      </li>

      <label class="title-base text-secondary-400">File submissions</label>
      <label
        for="file"
        class="grid place-content-center cursor-pointer h-40 rounded-base border border-dashed border-primary-500 mt-4 mb-3"
      >
        <input type="file" id="file" class="hidden" />
        <AppIcon name="file-upload" />
      </label>
      <p class="text text-secondary-400">*drag or browser from device</p>
    </section>
    <AppButton>Submit</AppButton>
  </Card>
</template>

<style scoped></style>
