<script setup lang="ts">
import Table from "@/components/Table.vue";
import IconDiscord from "@/components/icons/IconDiscord.vue";
import SearchPlayer from "@/components/SearchPlayer.vue";
import { ref, onMounted } from "vue";

const playersData = ref(null);

onMounted(async () => {
  await fetch(
    "https://hcn-rating-system-e3c67355a6ec.herokuapp.com/api/v1/players/"
  )
    .then((response) => response.json())
    .then((data) => {
      playersData.value = data;
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>

<template>
  <div class="wrapper">
    <div class="form-search">
      <SearchPlayer />
    </div>

    <div>
      <h1 class="title">Hardcore Ninja Leaderboard</h1>
      <Table v-if="playersData" :players="playersData" />
    </div>

    <div class="discord">
      <h2 class="discord__title">Join our Discord channel!</h2>
      <a class="discord__link" href="https://discord.gg/7WjykbPG">
        <IconDiscord />

        https://discord.gg/7WjykbPG
      </a>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 3.125rem;
  margin-bottom: 1.25rem;
}

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;
}

.discord {
  padding: 1rem;

  border-radius: 0.375rem;
  background-color: #698f8e;
}

.discord__title {
  text-align: center;
  font-size: 2rem;
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
  .wrapper {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-left: 0;
  }
}
</style>
