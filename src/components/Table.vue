<template>
  <table>
    <thead>
      <tr>
        <th>Global Rank</th>
        <th>Nickname</th>
        <th>Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(player, index) in players" :key="index">
        <td>{{ player[0] }}</td>
        <td>{{ player[1] }}</td>
        <td>{{ player[2] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const { players } = defineProps(["players"]);
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

thead tr th {
  color: black;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;

  color: white;
}

th {
  background-color: #f2f2f2;
}
</style>
