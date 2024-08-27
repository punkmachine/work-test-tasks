<template>
  <div class="pagination">
    <UIButton
      @click="onPreviousPage"
      :disabled="currentPage === 1"
      outlined
    >
      Назад
    </UIButton>

    <UIButton
      v-for="page in displayedPages"
      :key="page"
      :outlined="currentPage !== page"
      @click="onPageChange(page)"
    >
      {{ page }}
    </UIButton>

    <span class="pagination__ellipsis">...</span>

    <UIButton
      v-for="page in rightPages"
      :key="page"
      :outlined="currentPage !== page"
      @click="onPageChange(page)"
    >
      {{ page }}
    </UIButton>

    <UIButton
      @click="onNextPage"
      :disabled="currentPage === pagesCount"
      outlined
    >
      Вперёд
    </UIButton>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps, defineEmits } from 'vue';
import UIButton from '@/components/UIButton.vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pagesCount: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['change-page']);

const displayedPages = computed(() => {
  const leftPages = Math.max(props.currentPage - 1, 1);
  const rightPages = Math.min(props.currentPage + 1, props.pagesCount);
  return [leftPages, props.currentPage, rightPages].filter(
    (page, index, self) => self.indexOf(page) === index && page > 0 && page <= props.pagesCount
  );
});

const rightPages = computed(() => {
  return Array.from({ length: 3 }, (_, i) => props.pagesCount - 2 + i).filter(
    (page) => page > displayedPages.value[displayedPages.value.length - 1]
  );
});

function onPageChange(page: number) {
  emit('change-page', page);
}

function onPreviousPage() {
  if (props.currentPage > 1) {
    emit('change-page', props.currentPage - 1);
  }
}

function onNextPage() {
  if (props.currentPage < props.pagesCount) {
    emit('change-page', props.currentPage + 1);
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.pagination__button {
  &__ellipsis {
    align-self: center;
    padding: 10px 15px;
    font-size: 16px;
    color: #666;
  }
}
</style>
