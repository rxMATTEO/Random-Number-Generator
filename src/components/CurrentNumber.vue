<script setup lang="ts">
import {useRandomNumberStore} from "../stores/useRandomNumberStore.ts";
import {storeToRefs} from "pinia";

const randomNumberStore = useRandomNumberStore();
const { numbers, timeToNextNumber } = storeToRefs(randomNumberStore);
</script>

<template>
  <div class="flex items-center mt-20 flex-col">
    <div class="text-4xl">
      <p class="bg-gradient-blue text-transparent bg-clip-text">{{ numbers[numbers.length - 1]?.number || 'Нет' }}</p>
    </div>
    <div class="mt-5">
      <p class="text-ultra-violet text-xl">Текущее число</p>
    </div>
    <div class="mt-10">
      <p class="text-ultra-violet">{{ `Следущее число через: ${ timeToNextNumber }` }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>