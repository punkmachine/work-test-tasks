<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    header text
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  color: blue;
  font-size: 22px;
}
</style>
