<template>
  <div class="switch">
    <div class="custom-select">
      <p @click="toggleDropdown">
        {{ $t("lang:" + selectedLanguage) }} &#8628;
      </p>

      <ul class="dropdown" v-if="isDropdownOpen">
        <li
          class="item"
          v-for="language in languages"
          :key="language"
          @click="selectLanguage(language)"
        >
          {{ $t("lang:" + language) }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import i18n from "@/plugins/i18n";
const selectedLanguage = ref(localStorage.getItem("language") || "en");
const isDropdownOpen = ref(false);

const languages = ["en", "ua", "ru"];

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectLanguage = (language: string) => {
  selectedLanguage.value = language;
  isDropdownOpen.value = false;

  i18n.global.locale.value = language;
  localStorage.setItem("language", language);
};
</script>

<style scoped>
.switch {
  transition: color var(--transition-time) ease;
}
.switch:hover {
  color: #b23d3e;
}

p {
  margin: 0;
}

.custom-select {
  cursor: pointer;
}

.dropdown {
  list-style: none;
  padding: 0;
  margin: 0;

  position: absolute;
  color: black;
  background-color: #f9f9f9;
  box-shadow: 1rem rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.item {
  padding: 0.5rem;
}
</style>
