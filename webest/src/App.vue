<script setup lang="ts">
import { RouterView } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';

const lastScrollY = ref(0);
const headerRef = ref<HTMLElement | null>(null);
const ticking = ref(false);

const handleScroll = () => {
  if (!ticking.value && headerRef.value) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > lastScrollY.value && window.scrollY > 100) {
        headerRef.value?.classList.add('hidden');
      } else if (window.scrollY < lastScrollY.value) {
        headerRef.value?.classList.remove('hidden');
      }

      lastScrollY.value = window.scrollY;
      ticking.value = false;
    });
    ticking.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header ref="headerRef">
    <h1>
      Webest Test Task
    </h1>
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  transform: translateY(0);
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
  padding: 1rem;
  z-index: 1000;
  transition: transform 0.5s ease, opacity 0.5s ease;

  &.hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  h1 {
    font-weight: 600;
    font-size: 1.5rem;
    background: linear-gradient(45deg, #bdc3c7, #2ecc71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

main {
  padding-top: 100px;
  min-height: 100vh;
  background-color: #ecf0f1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active в версиях до v2.1.8 */ {
  opacity: 0;
}
</style>
