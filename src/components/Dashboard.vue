<script setup lang="ts">
import Table from "@/components/Table.vue";
import SearchPlayer from "@/components/SearchPlayer.vue";
import LinksPanel from "@/components/LinksPanel.vue";
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
    <LinksPanel class="wrapper__show-mobile" />

    <div class="form-search">
      <SearchPlayer />
    </div>

    <div class="table-board">
      <h1 class="title">{{ $t("name") }}</h1>
      <Table v-if="playersData" :players="playersData" />
    </div>

    <LinksPanel class="wrapper__hide-mobile" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 6rem;

  width: 100%;
}

.wrapper__hide-mobile {
  display: block;
}
.wrapper__show-mobile {
  display: none;
}

.table-board {
  width: 100%;
}

@media (max-width: 950px) {
  .wrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 2rem;
    margin-left: 0;

    max-width: 600px;
  }

  .wrapper__hide-mobile {
    display: none;
  }
  .wrapper__show-mobile {
    display: block;
  }

  .form-search {
    width: 100%;
  }

  .table-board {
    width: auto;
  }
}
</style>
