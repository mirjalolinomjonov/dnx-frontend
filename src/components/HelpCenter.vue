<script setup lang="ts">
import AppButton from './shared/AppButton.vue'
</script>

<template>
  <div class="relative">
    <AppIcon class="mark z-1" name="help-center-mark" />
    <Card
      class="help-center flex-col p-4! overflow-hidden relative min-h-62 bg-secondary-500! text-white text-center"
    >
      <div class="mt-auto">
        <h3 class="title">Help Center</h3>
        <p class="text mt-3 mb-11.25">
          Having Trouble in Learning. Please contact us for more questions.
        </p>
        <AppButton variant="outline">Go To Help Center</AppButton>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.help-center {
  &::before,
  &::after {
    content: '';
    width: 160px;
    height: 160px;
    background: #ffffff14;
    border-radius: 50%;
    position: absolute;
  }
  &::before {
    top: -100px;
    left: -94px;
  }
  &::after {
    top: 168px;
    left: 120px;
  }
}

.mark {
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
