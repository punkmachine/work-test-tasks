<template>
  <button
    @click="onClick"
    :class="['ui-button', { 'ui-button--outlined': outlined }]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  outlined: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function onClick(event: Event) {
  if (!props.disabled) {
    emit('click', event);
  }
}
</script>

<style lang="scss" scoped>
.ui-button {
  padding: 10px 20px;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &--outlined {
    background-color: #fff;
    color: #007bff;
    border-color: #007bff;

    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
}
</style>
