<template>
  <div>
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col" v-for="field in fields" :key="field">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(player, index) in players" :key="index">
          <td>{{ player[0] }}</td>
          <td>{{ player[1] }}</td>
          <td>{{ player[2] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import i18n from "@/plugins/i18n";

const { players } = defineProps(["players"]);

const fields = [
  i18n.global.messages.value[i18n.global.locale.value]["global-rank"],
  i18n.global.messages.value[i18n.global.locale.value]["nickname"],
  i18n.global.messages.value[i18n.global.locale.value]["rating"],
];
</script>

<style scoped>
.table {
  width: 50rem * (100vw / 1rem);
  max-width: 90vw * (100vw / 1rem);
}

th,
td {
  border: 0.063rem solid #ddd;

  color: white;
}
</style>
