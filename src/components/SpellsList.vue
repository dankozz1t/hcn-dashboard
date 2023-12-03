<script setup lang="ts">
import { defineProps } from "vue";

const { abilities } = defineProps(["abilities"]);
</script>

<template>
  <ul class="abilities">
    <li class="ability" v-for="ability in abilities" :key="ability.name">
      <div class="ability__top">
        <div class="ability__box ability__box--between">
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
      </div>

      <p v-if="ability.description">{{ $t(ability.description) }}</p>

      <div :class="['ability__demo-box', !ability.demo && 'hide-mobile']">
        <img v-if="ability.demo" class="ability__demo" :src="ability.demo" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
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

  max-width: 100%;
}

.ability {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 40rem;

  padding: 1rem;
  border-radius: 1rem;
  background-color: #698f8e;
}

.ability__top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.ability__name {
  color: #314948;
  font-size: 2.5rem;
  font-weight: 800;
}

.ability__box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.ability__spell {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.ability__spell-img {
  height: 7rem;
  width: min-content;
}

.ability__spell-hit {
  font-size: 4rem;
  margin: 0;
}

.ability__spell-plus {
  font-size: 2rem;
  margin: 0;
}

.ability__demo {
  border-radius: 1rem;
  height: 20rem;
  object-fit: cover;
}

.ability__demo-box {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  height: 20rem;
}

.ability__type {
  width: max-content;
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
  background-color: #b23d3e;
}

@media (max-width: 950px) {
  .hide-mobile {
    display: none;
  }

  .ability {
    width: 100%;
    align-self: flex-start;
  }

  .ability__name {
    font-size: 1.5rem;
  }

  .ability__spell {
    gap: 0.2rem;
  }
  .ability__box {
    gap: 0.2rem;
  }

  .ability__box--between {
    justify-content: space-between;
    width: 100%;
  }

  .ability__spell-img {
    height: 5rem;
  }

  .ability__demo-box {
    height: 15rem;
  }

  .ability__demo {
    width: 100%;
  }

  .ability__spell-hit {
    font-size: 1rem;
  }

  .ability__spell-plus {
    font-size: 1rem;
  }
}
</style>
