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
    <form @submit.prevent="onInputSearch" class="input-group search">
      <input
        v-model="search"
        type="text"
        class="form-control"
        aria-label="Text input for search player by nickname"
        placeholder="Enter your nickname..."
      />
      <button class="btn btn-outline-light" type="submit">
        <SearchIcon />
      </button>
    </form>

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
  width: 100%;
  min-width: 18rem;
  max-width: 25rem;

  color: white;
}

td {
  overflow-wrap: anywhere;
}

.search {
  margin-bottom: 1.25rem;
}
input {
  color: white !important;
}

input::placeholder {
  color: #c4c0b6;
}

th,
td {
  border: 0.063rem solid #ddd;

  color: white;
}

@media (max-width: 950px) {
  .search-player {
    width: 100%;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
}
</style>
