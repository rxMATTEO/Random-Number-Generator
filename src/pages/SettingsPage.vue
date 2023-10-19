<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import { ref } from "vue";

const minMax = ref([20, 80]);
const frequency = ref(30)
</script>

<template>
  <Header />
  <PaddingBox class="mt-10">
    <div>
      <h1>Настройки</h1>
    </div>

    <div class="mt-20 flex flex-col items-center justify-center">
      <div class="w-1/3">
        <div>
          <div>
            <p>Интервал значений чисел:</p>
          </div>
          <div class="mt-5 w-full flex place-content-between items-center gap-5">
            <InputText :value="minMax[0]" class="block w-12" />
            <Slider v-model="minMax" range class="w-full" />
            <InputText :value="minMax[1]" class="block w-12" />
          </div>
        </div>
        <div class="mt-10">
          <div>
            <p>{{ `Частота генерации чисел: ${frequency} секунд`}}</p>
          </div>
          <div class="mt-5 w-full flex place-content-between items-center gap-5">
            <p>1</p>
            <Slider :model-value="frequency" v-model="frequency" class="w-full" />
            <p>100</p>
          </div>
        </div>
        <div class="mt-10 flex gap-10">
          <Button label="Начать" size="small"/>
          <Button label="Остановить" severity="secondary" size="small"/>
          <Button label="Завершить" severity="secondary" size="small"/>
        </div>
      </div>
    </div>
  </PaddingBox>
</template>

<style scoped>

</style>