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
    name: "about:blink",
    type: "about:attack-defense",
    description: "about:blink:description",
    spells: ["../spells/blink.jpg"],
    demo: "../spells/blink.gif",
  },
  {
    name: "about:orb-of-preparation",
    type: "about:attack",
    description: "about:orb-of-preparation:description",
    spells: ["../spells/refresh.jpg"],
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
]);

const combinations = ref([
  {
    name: "about:double-blink",
    type: "",
    spells: [
      "../spells/blink.jpg",
      "../spells/refresh.jpg",
      "../spells/blink.jpg",
    ],
    demo: "../spells/DB.gif",
  },
  {
    name: "about:wr",
    type: "",
    spells: ["about:hit", "../spells/dagger2.jpg"],
    demo: "../spells/WR.gif",
  },
  {
    name: "about:predict-wave",
    type: "",
    description: "about:predict-wave:description",
    spells: ["../spells/wave.jpg", "../spells/eye.jpg"],
    demo: "../spells/predict_wave.gif",
  },
  {
    name: "about:chop",
    type: "",
    spells: ["../spells/blink.jpg", "about:hit"],
    demo: "../spells/chop.gif",
  },
  {
    name: "about:double-blink-chop",
    type: "",
    spells: [
      "../spells/blink.jpg",
      "../spells/refresh.jpg",
      "../spells/blink.jpg",
      "about:hit",
    ],
    demo: "../spells/dbchop.gif",
  },
]);
</script>

<template>
  <div class="about">
    <h1 class="title ability__type">DEVELOPMENT IN PROGRESS...</h1>
    <h1 class="title">{{ $t("about:title") }}</h1>
    <p>{{ $t("about:description") }}</p>
    <p>{{ $t("about:condition") }}</p>

    <h3 class="title mt-2">{{ $t("about:abilities") }}:</h3>
    <ul class="abilities">
      <li class="ability" v-for="ability in abilities" :key="ability.name">
        <div class="ability__box">
          <h2 class="ability__name">{{ $t(ability.name) }}</h2>
          <p v-if="ability.type" class="ability__type">
            {{ $t(ability.type) }}
          </p>
        </div>

        <ul class="ability__box">
          <li v-for="(spell, index) in ability.spells" :key="spell">
            <div class="ability__spell">
              <img
                v-if="spell.includes('/')"
                class="ability__spell-img"
                :src="spell"
                :alt="ability.name"
              />
              <p v-else class="ability__spell-hit">{{ $t(spell) }}</p>

              <p
                v-if="index < ability.spells.length - 1"
                class="ability__spell-plus"
              >
                +
              </p>
            </div>
          </li>
        </ul>

        <p v-if="ability.description">{{ $t(ability.description) }}</p>

        <img class="ability__demo" :src="ability.demo" />
      </li>
    </ul>

    <h3 class="title mt-2">{{ $t("about:combinations") }}:</h3>
    <ul class="abilities">
      <li class="ability" v-for="ability in combinations" :key="ability.name">
        <div class="ability__box">
          <h2 class="ability__name">{{ $t(ability.name) }}</h2>
          <p v-if="ability.type" class="ability__type">
            {{ $t(ability.type) }}
          </p>
        </div>

        <ul class="ability__box">
          <li v-for="(spell, index) in ability.spells" :key="spell">
            <div class="ability__spell">
              <img
                v-if="spell.includes('/')"
                class="ability__spell-img"
                :src="spell"
                :alt="ability.name"
              />
              <p v-else class="ability__spell-hit">{{ $t(spell) }}</p>

              <p
                v-if="index < ability.spells.length - 1"
                class="ability__spell-plus"
              >
                +
              </p>
            </div>
          </li>
        </ul>

        <p v-if="ability.description">{{ $t(ability.description) }}</p>

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
  width: 45rem;

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
  align-items: center;
  gap: 1rem;
}
.ability__spell-img {
  height: 8rem;
  width: min-content;
}

.ability__spell-hit {
  font-size: 5rem;
}

.ability__demo {
  height: 20rem;
  border-radius: 1rem;
}

.ability__type {
  width: max-content;
  padding: 0.4rem 0.9rem;
  border-radius: 1rem;
  background-color: #b23d3e;
}
</style>
