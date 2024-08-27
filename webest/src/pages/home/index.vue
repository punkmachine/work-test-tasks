<template>
  <div class="container">
    <SearchTender
      v-model:search-query="searchQuery"
      @on-search="onSearch"
    />

    <article class="tenders-list">
      <div v-if="loading" class="tenders-list__loading">
        <UILoader />
      </div>
      <div v-if="!loading">
        <div v-if="filteredTenders.length === 0" class="tenders-list__empty">
          <p>Ничего не найдено</p>
        </div>
        <TransitionGroup name="list" tag="div" class="tenders-list__grid">
          <TenderCard
            v-for="tender in visibleTenders"
            :tender="tender"
            :key="tender.id"
          />
        </TransitionGroup>

        <UIPagination
          :current-page="currentPage"
          :pages-count="pagesCount"
          @change-page="changePage"
        />

        <div id="target-observer" ref="observerElement"></div>
      </div>
    </article>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TenderRepository } from '@/api/TenderRepository';
import UILoader from '@/components/UILoader.vue';
import UIPagination from '@/components/UIPagination.vue';
import TenderCard from './components/TenderCard.vue';
import SearchTender from './components/SearchTender.vue';
import type { Tender } from '@/models/tender';

const tenders = ref<Tender[]>([]);
const loading = ref(true);
const searchQuery = ref('');
const currentPage = ref(1);
const pagesCount = ref(1);
const loadedChunks = ref(1);
const observerElement = ref<HTMLElement | null>(null);

const route = useRoute();
const router = useRouter();

const filteredTenders = computed(() => {
  const lowerCaseQuery = searchQuery.value.toLowerCase().trim();
  return tenders.value.filter(tender =>
    tender.title.toLowerCase().includes(lowerCaseQuery)
  );
});

const visibleTenders = computed(() => {
  return filteredTenders.value.slice(0, loadedChunks.value * 30);
});

watch(route, () => {
  const page = parseInt(route.query.page as string) || 1;
  currentPage.value = page;
  fetchTenders(page);
}, { immediate: true });

async function fetchTenders(page = 1) {
  try {
    loading.value = true;
    const response = await TenderRepository.getAll(page);
    tenders.value = response.data;
    pagesCount.value = response.page_count;
    currentPage.value = page;
    loadedChunks.value = 1;
  } catch (error) {
    console.error('Ошибка при загрузке данных тендеров', error);
  } finally {
    loading.value = false;
    createObserver();
  }
}

function changePage(page) {
  if (page >= 1 && page <= pagesCount.value && page !== currentPage.value) {
    router.push({ query: { ...route.query, page } });
    fetchTenders(page);
    scrollToTop();
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function observeCallback(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && loadedChunks.value < 4) {
      loadedChunks.value += 1;
    }
  });
}

function createObserver() {
  if (observerElement.value) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(observeCallback, options);
    observer.observe(observerElement.value);
  }
}

onMounted(() => {
  const page = parseInt(route.query.page as string) || 1;
  currentPage.value = page;

  fetchTenders(page);
});
</script>

<style lang="scss" scoped>
#target-observer {
  height: 4px;
  width: 100%;
}

.tenders-list {
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  &__grid {
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(auto-fill, 1fr);
    min-height: 50vh;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 1440px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    font-size: 20px;
    color: #666;
  }
}

.list-move {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}
.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
