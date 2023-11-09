<script setup lang="ts">
import Table from "@/components/Table.vue";
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
  gap: 6.25rem;

  margin-left: -20rem;
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
