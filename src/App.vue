<script setup lang="ts">
import {useFavNumbersStore} from "./stores/favNumbersStore.ts";
import {storeToRefs} from "pinia";
import {useRandomNumberStore} from "./stores/randomNumberStore.ts";
import {useToast} from "primevue/usetoast";

const randomNumberStore = useRandomNumberStore();
const favNumbersStore = useFavNumbersStore();
const toast = useToast();
const { numbers } = storeToRefs(favNumbersStore);
randomNumberStore.$subscribe((mutation, state) => {
  if(!(mutation.events?.newValue?.number)) return;
  const newNumber = state.numbers[state.numbers.length - 1].number;
  if(numbers.value.has(newNumber)){
    toast.add({ severity: 'success', detail: `Выпало ваше счастливое число ${newNumber}`, life: 3000 });
  }
});
</script>

<template>
  <Toast />
  <router-view>
  </router-view>
</template>
<style scoped>
</style>
