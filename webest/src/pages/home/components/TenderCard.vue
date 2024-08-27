<template>
  <div class="tender-card">
    <h2 class="tender-card__title">{{ tender.title }}</h2>
    <p class="tender-card__deadline">Дедлайн: {{ formatDate(tender.deadline_date) }}</p>
    <p class="tender-card__description">{{ tender.description }}</p>
    <p class="tender-card__value">
      Бюджет: <b>{{ tender.awarded_value }} {{ tender.awarded_currency }}</b>
    </p>
    <RouterLink :to="`/tender-detail/${tender.id}`" class="tender-card__link">
      <div class="tender-card__link-content">
        <span>Подробнее</span>
        <div class="tender-card__link-img">
          <svg>
            <use xlink:href="@/assets/sprites/btns.svg#arrow"></use>
          </svg>
        </div>
      </div>
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';
import type { Tender } from '@/models/tender';
import { formatDate } from '@/lib/helpers/formatDate';

interface Props {
  tender: Tender
}

const props = defineProps<Props>();
</script>

<style lang="scss" scoped>
.tender-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 300px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, opacity 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__title {
    font-size: 18px;
    margin-bottom: 8px;
  }

  &__description {
    font-size: 14px;
    margin-bottom: 16px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  &__deadline {
    font-size: 14px;
    margin-bottom: 8px;
    color: #333;
  }

  &__value {
    font-size: 16px;
  }

  &__link {
    align-self: flex-end;
    margin-top: 12px;
    color: #007bff;
    background-image: linear-gradient(to right, #007bff, #0056b3);
    background-repeat: no-repeat;
    background-size: 10px 2px;
    background-position: left bottom;
    padding-bottom: 2px;
    text-decoration: none;
    transition: 0.3s;

    &-content {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &-img {
      width: 16px;
      height: 16px;
      transform: rotate(90deg);

      svg {
        width: 100%;
        height: 100%;
        fill: #007bff;
      }
    }

    &:hover {
      background-size: 100% 2px;
    }
  }
}
</style>