<template>
  <div v-if="tender">
    <div class="tender-details__back">
      <UIButton
        outlined
        @click="$router.back()"
      >
        Назад
      </UIButton>
    </div>

    <div class="tender-details__card">
      <h1>{{ tender.title }}</h1>
      <p><strong>Дата тендера:</strong> {{ tender.date }}</p>
      <p><strong>Дата дедлайна:</strong> {{ tender.deadline_date }}</p>
      <p><strong>Категория:</strong> {{ tender.category }}</p>
      <p><strong>Описание:</strong> {{ tender.description }}</p>
      <p><strong>Фаза:</strong> {{ tender.phase }} ({{ tender.phase_en }})</p>
      <p><strong>Место:</strong> {{ tender.place }}</p>
      <p><strong>ID тендера:</strong> {{ tender.sid }}</p>
      <p><strong>Код тендера:</strong> {{ tender.eid }}</p>
      <p><strong>Стоимость присуждена:</strong> {{ tender.awarded_value }} {{ tender.awarded_currency }} ({{ tender.awarded_value_eur }} EUR)</p>
    </div>

    <div class="tender-details">
      <div class="tender-details__card tender-details__card--border">
        <h2>Детали заказчика</h2>
        <p><strong>ID:</strong> {{ tender.purchaser.id }}</p>
        <p><strong>SID:</strong> {{ tender.purchaser.sid }}</p>
        <p><strong>Имя:</strong> {{ tender.purchaser.name }}</p>
      </div>

      <div class="tender-details__card tender-details__card--border">
        <h2>Тип тендера</h2>
        <p><strong>ID:</strong> {{ tender.type.id }}</p>
        <p><strong>Название:</strong> {{ tender.type.name }}</p>
        <p><strong>Slug:</strong> {{ tender.type.slug }}</p>
      </div>

      <div class="tender-details__card tender-details__card--border">
        <h2>Присуждение тендера</h2>
        <ul>
          <li v-for="award in tender.awarded" :key="award.date">
            <p><strong>Дата присуждения:</strong> {{ award.date }}</p>
            <p><strong>Стоимость:</strong> {{ award.value }} {{ award.value_eur }} EUR</p>
            <p><strong>Поставщики:</strong> {{ award.suppliers_name }}</p>
            <p><strong>Количество предложений:</strong> {{ award.count }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="tender-details__loader">
    <UILoader />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { TenderRepository } from '@/api/TenderRepository';
import UILoader from '@/components/UILoader.vue';
import UIButton from '@/components/UIButton.vue';
import type { TenderWithDetails } from '@/models/tender';

const route = useRoute();
const tender = ref<TenderWithDetails | null>(null);

async function fetchTender() {
  const id = route.params.id as string;
  tender.value = await TenderRepository.getById(id);
}

onMounted(() => {
  fetchTender();
});
</script>

<style lang="scss" scoped>
.tender-details {
  display: flex;
  justify-content: space-between;
  gap: 20px;

  &__back {
    margin-bottom: 12px;
  }

  &__loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
  }

  &__card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, opacity 0.5s;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    flex: 1;

    &--border {
      border-left: 4px solid #09f;
    }
  }
}

h1 {
  font-size: 24px;
  margin-bottom: 16px;
  color: #333;
}

p {
  margin-bottom: 8px;
  color: #555;
}

h2 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #666;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 16px;
  padding-left: 8px;
  border-left: 2px solid #09f;
}

strong {
  color: #000;
}
</style>
