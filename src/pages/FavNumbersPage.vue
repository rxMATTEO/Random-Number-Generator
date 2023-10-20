<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import AddFavNumber from "../components/AddFavNumber.vue";
import {ref} from "vue";
import {useFavNumbersStore} from "../stores/favNumbersStore.ts";
import {storeToRefs} from "pinia";

const isVisible = ref(false);
const favNumbersStore = useFavNumbersStore();
const {numbers} = storeToRefs(favNumbersStore);
function addFav(number: number){
  favNumbersStore.addNumber(number);
  isVisible.value = false;
}
</script>

<template>
  <Header />
  <Dialog v-model:visible="isVisible">
    <AddFavNumber @close="isVisible = false" @add="addFav" />
  </Dialog>
  <PaddingBox>
    <div class="mt-10">
      <div class="flex items-center gap-5">
        <img src="../assets/heart.png" alt="heart" />
        <h1>
          Любимые
          <br />
          числа
        </h1>
        <Button size="small" label="+ Добавить" @click="isVisible = true" />
      </div>
    </div>
  </PaddingBox>
  <div class="m-20 flex gap-10">
    <span v-for="number in numbers" :key="number" class="p-3 text-xl rounded-xl bg-blue-200">
      {{ number }}
    </span>
  </div>
</template>

<style scoped>

</style>