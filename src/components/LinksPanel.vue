<script setup lang="ts">
import DiscordIcon from "./DiscordIcon.vue";
</script>

<template>
  <div class="discord wrapper__hide-mobile">
    <h2 class="discord__title">{{ $t("discord") }}</h2>
    <a class="discord__link" href="https://discord.gg/7WjykbPG">
      <DiscordIcon />

      https://discord.gg/7WjykbPG
    </a>
  </div>
</template>

<style scoped>
.discord {
  width: 100%;
  max-width: 25rem;

  padding: 1rem;

  border-radius: 0.375rem;
  background-color: #698f8e;
}

.discord__title {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.discord__link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: #314948;
  transition: color var(--transition-time) ease;
}

.discord__link:hover {
  color: #b23d3e;
}
.discord__link svg {
  transition: fill var(--transition-time) ease;
}

.discord__link:hover svg {
  fill: #b23d3e;
}

@media (max-width: 950px) {
  .discord {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
  .discord__title {
    font-size: 1.4rem;
  }
}
</style>
