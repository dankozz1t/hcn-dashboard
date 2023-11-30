<script setup lang="ts"></script>

<template>
  <nav>
    <ul class="list">
      <li>
        <RouterLink class="link" to="/"> Leaderboard </RouterLink>
      </li>
      <li>
        <RouterLink class="link" to="/about"> About </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
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
</style>
