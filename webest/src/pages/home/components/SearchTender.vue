<template>
  <article class="tenders-list__search">
    <UIInput
      :value="searchQuery"
      placeholder="Поиск..."
      @input="onInput"
      class="mr-2-5"
    />
    <UIButton @click="$emits('onSearch', searchQuery)">
      Найти
    </UIButton>
  </article>
</template>

<script lang="ts" setup>
import { watch, defineEmits, ref, defineProps } from 'vue';
import UIButton from '@/components/UIButton.vue';
import UIInput from '@/components/UIInput.vue';

const props = defineProps<{
  searchQuery: string;
}>();

const emits = defineEmits<{
  (e: 'onSearch', value: string): void;
  (e: 'update:searchQuery', value: string): void;
}>();

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;

  emits('update:searchQuery', target.value);
};
</script>

<style lang="scss" scoped>
.tenders-list {
  &__search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    min-width: 100%;
  }
}

// сюда бы tailwind для модификаторов.
.mr-2-5 {
  margin-right: 10px;
}
</style>