<script setup lang="ts">
import SearchIcon from "./SearchIcon.vue";

import { ref } from "vue";

const players = ref(null);
const search = ref(null);
const fields = ["Nickname", "Rating"];

const onInputSearch = async () => {
  await fetch(
    `https://hcn-rating-system-e3c67355a6ec.herokuapp.com/api/v1/players/nickname/${search.value}/`
  )
    .then((response) => response.json())
    .then((data) => {
      players.value = data;
    })
    .catch((error) => {
      console.error(error);
    });
};
</script>

<template>
  <div class="search-player">
    <div class="input-group search">
      <input
        v-model="search"
        type="text"
        class="form-control"
        aria-label="Text input for search player by nickname"
      />
      <button
        class="btn btn-outline-light"
        type="button"
        @click="onInputSearch"
      >
        <SearchIcon />
      </button>
    </div>

    <table
      v-if="players?.length > 0"
      class="table table-striped table-bordered table-hover"
    >
      <thead>
        <tr>
          <th scope="col" v-for="field in fields" :key="field">
            {{ field }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(player, index) in players" :key="index">
          <td>{{ player.nickname }}</td>
          <td>{{ player.rating }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.search-player {
  width: 20rem * (100vw / 1rem);
  max-width: 90vw * (100vw / 1rem);

  color: white;
}

.search {
  margin-bottom: 1.25rem;
}
input {
  color: white !important;
}

th,
td {
  border: 0.063rem solid #ddd;

  color: white;
}
</style>
