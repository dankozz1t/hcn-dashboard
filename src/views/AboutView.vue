<script setup lang="ts">
import { ref } from "vue";

const abilities = ref([
  {
    name: "about:deflect",
    type: "about:protection",
    description: "about:deflect:description",
    spells: ["../spells/deflect.jpg"],
    demo: "../spells/deflect.gif",
  },
  {
    name: "about:sword-wave",
    type: "about:attack",
    description: "about:sword-wave:description",
    spells: ["../spells/wave.jpg"],
    demo: "../spells/wave.gif",
  },
  {
    name: "about:dagger-throw",
    type: "about:attack",
    description: "about:dagger-throw:description",
    spells: ["../spells/dagger2.jpg"],
    demo: "../spells/dagger.gif",
  },
  {
    name: "about:predict-wave",
    type: "",
    description: "about:predict-wave:description",
    spells: ["../spells/wave.jpg", "../spells/eye.jpg"],
    demo: "../spells/predict_wave.gif",
  },
]);
</script>

<template>
  <div class="about">
    <h1 class="title ability__type">DEVELOPMENT IN PROGRESS...</h1>
    <h1 class="title">{{ $t("about:title") }}</h1>
    <p>{{ $t("about:description") }}</p>
    <p>{{ $t("about:condition") }}</p>

    <h3>{{ $t("about:abilities") }}:</h3>
    <ul class="abilities">
      <li class="ability" v-for="ability in abilities" :key="ability.name">
        <div class="ability__box">
          <h2 class="ability__name">{{ $t(ability.name) }}</h2>
          <p v-if="ability.type" class="ability__type">
            {{ $t(ability.type) }}
          </p>
        </div>

        <ul class="ability__box">
          <li v-for="spell in ability.spells" :key="spell">
            <div class="ability__spell">
              <img
                class="ability__spell-img"
                :src="spell"
                :alt="ability.name"
              />
            </div>
          </li>
        </ul>

        <p>{{ $t(ability.description) }}</p>

        <img class="ability__demo" :src="ability.demo" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.abilities {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.ability {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border-radius: 1rem;
  background-color: #698f8e;
}
.ability__name {
  color: #314948;
  font-size: 3rem;
}

.ability__box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.ability__spell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.ability__spell-img {
  height: 10rem;
  width: min-content;
}
.ability__demo {
  height: 25rem;
  border-radius: 1rem;
}

.ability__type {
  width: max-content;
  padding: 0.4rem 0.9rem;
  border-radius: 1rem;
  background-color: #b23d3e;
}
</style>
