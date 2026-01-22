<script setup lang="ts">
defineProps<{ progress: number }>()
</script>

<template>
  <input
    :value="progress"
    class="custom-range"
    type="range"
    min="0"
    max="100"
    :style="{ '--value': progress + '%' }"
  />
</template>

<style scoped>
.custom-range {
  pointer-events: none;
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(
    to right,
    #546fff 0%,
    #546fff var(--value),
    #bac8ff var(--value),
    #bac8ff 100%
  );
  outline: none;
}

/* Chrome, Edge, Safari */
.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #546fff;
  cursor: grab;
  box-shadow: 0 0 0 4px rgba(79, 108, 255, 0.2);
  transition: all 0.2s ease;
}
.custom-range::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 8px rgba(84, 111, 255, 0.5);
}
.custom-range::-webkit-slider-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}

/* Firefox */
.custom-range::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #546fff;
  cursor: pointer;
}
.custom-range::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 3px 8px rgba(84, 111, 255, 0.5);
}

.custom-range::-moz-range-thumb:active {
  cursor: grabbing;
  transform: scale(1.1);
}
</style>
