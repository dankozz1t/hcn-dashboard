<script setup lang="ts">
import SpellsList from "@/components/SpellsList.vue";
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
    name: "about:orb-of-preparation",
    type: "about:attack",
    description: "about:orb-of-preparation:description",
    spells: ["../spells/refresh.jpg"],
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
    spells: ["../spells/blink.jpg", "../spells/dagger2.jpg"],
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
    <h1 class="title">{{ $t("about:title") }}</h1>
    <p>{{ $t("about:description") }}</p>
    <p>{{ $t("about:condition") }}</p>

    <h3 class="title mt-2">{{ $t("about:abilities") }}:</h3>
    <SpellsList :abilities="abilities" />

    <h3 class="title mt-2">{{ $t("about:combinations") }}:</h3>
    <SpellsList :abilities="combinations" />
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
