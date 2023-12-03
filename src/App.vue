<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <div class="hcn-container">
    <header class="header">
      <Navigation />
    </header>

    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.header {
  padding: 1rem 0;
}
.main {
  padding: 2rem;
  margin: 0 auto;
}

@media (max-width: 950px) {
  .header {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
  }
  .main {
    padding: 0.8rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
