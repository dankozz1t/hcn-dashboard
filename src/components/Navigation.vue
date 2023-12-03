<script setup lang="ts">
import SwitchLanguage from "@/components/SwitchLanguage.vue";
</script>

<template>
  <nav class="nav">
    <ul class="list">
      <li>
        <RouterLink class="link" to="/"> Leaderboard </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/about"> About </RouterLink>
      </li>
    </ul>

    <SwitchLanguage class="switch" />
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch {
  position: absolute;
  right: 3rem;
  padding: 0 1rem;
}

.link {
  color: #ffff;
  padding: 0 1rem;
  transition: color var(--transition-time) ease;
}

.link:hover {
  color: #b23d3e;
}

.router-link-active {
  color: #b23d3e;
}

.list {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;

  list-style: none;
}

@media (max-width: 950px) {
  .switch {
    position: static;
    right: 1rem;
  }
}
</style>
