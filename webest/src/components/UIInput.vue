<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    type="text"
    class="ui-input"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  modelValue: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emits('update:modelValue', target.value);
};
</script>

<style lang="scss" scoped>
.ui-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>