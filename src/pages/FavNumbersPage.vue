<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
function addFav(){

}
</script>

<template>
  <Header />
  <PaddingBox>
    <div class="mt-10">
      <div class="flex items-center gap-5">
        <img src="../assets/heart.png" alt="heart" />
        <h1>
          Любимые
          <br />
          числа
        </h1>
        <Button size="small" label="+ Добавить" @click="addFav" />
      </div>
    </div>
  </PaddingBox>
</template>

<style scoped>

</style>