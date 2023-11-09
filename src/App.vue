<script setup lang="ts">
import Dashboard from "@/components/Dashboard.vue";
</script>

<template>
  <Suspense>
    <Dashboard />

    <template #fallback> Loading... </template>
  </Suspense>
</template>

<style scoped></style>

