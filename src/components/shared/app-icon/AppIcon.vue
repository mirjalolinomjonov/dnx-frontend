<script setup lang="ts">
import useAppIcon from './useAppIcon'

const props = defineProps<{ name: string; size?: string; color?: string }>()
// Name - icon ning nomi
// Size - icon size yani props dan kerakli size ni bersangiz bo'ladi
// Color - icon ni rangi, bu uchun svg file da currentColor bo'lishi kerak

const { SVGComponent, isSlot } = useAppIcon(props.name)
</script>

<template>
  <i class="base-icon" :style="{ color: props.color, fontSize: size ?? '24px' }">
    <template v-if="isSlot">
      <slot />
    </template>

    <SVGComponent v-else />
  </i>
</template>

<style scoped>
.base-icon svg {
  font-size: inherit;
  width: 100%;
  height: 100%;
}
</style>
