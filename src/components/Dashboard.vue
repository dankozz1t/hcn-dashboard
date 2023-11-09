<script setup lang="ts">
import Table from "@/components/Table.vue";
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
  <div>
    <h1 class="title">Dashboard</h1>

    <Table v-if="playersData" :players="playersData" />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 30px;
}
</style>
