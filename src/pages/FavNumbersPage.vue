<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import AddFavNumber from "../components/AddFavNumber.vue";
import {ref} from "vue";

const isVisible = ref(false);
function addFav(number: number){
  isVisible.value = true;
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
</template>

<style scoped>

</style>