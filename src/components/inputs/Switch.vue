<script setup lang="ts">
const model = defineModel<boolean>({ required: true })
</script>

<template>
  <label class="switch">
    <input v-model="model" type="checkbox" class="hidden" />
    <span class="mark"></span>
  </label>
</template>

<style scoped>
.switch {
  position: relative;
  width: 55px;
  height: 30px;
  border-radius: 100px;
  border: 1px solid #f5f5f7;
  padding: 5px;
  display: block;
  cursor: pointer;
}

.switch .mark {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #f5f5f7;
  transition: all 0.2s linear;
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translate(0%, -50%);
}

.switch input:checked + .mark {
  transform: translate(100%, -50%);
  background: #546fff;
  box-shadow: 0px 1px 3px 0px #546fff33;
}
</style>
