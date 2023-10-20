<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import {computed, ref} from "vue";
import axios from "axios";
import {useRandomNumberStore} from "../stores/randomNumberStore.ts";

const minMax = ref([20, 80]);
const frequency = ref(30);
const id = computed(() => +Math.random().toFixed(2) * 100 )
const randomNumberStore = useRandomNumberStore();
function onStart() {
  randomNumberStore.setGenerator(id.value, frequency.value);
  axios.post(`${import.meta.env.VITE_SERVER}/number`, {
    minMax: minMax.value,
    frequency: frequency.value,
    id: id.value,
  });
}

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
            <InputNumber :min="0" :max="99" v-model="minMax[0]" class="w-12" :pt="{input: { class: 'w-12' }}" />
            <Slider v-model="minMax" range class="w-full" />
            <InputNumber :min="minMax[0]" :max="100" v-model="minMax[1]" class="w-12" :pt="{input: { class: 'w-12' }}" />
          </div>
        </div>
        <div class="mt-10">
          <div>
            <p>{{ `Частота генерации чисел: ${frequency} секунд`}}</p>
          </div>
          <div class="mt-5 w-full flex place-content-between items-center gap-5">
            <p>1</p>
            <Slider v-model="frequency" class="w-full" />
            <p>100</p>
          </div>
        </div>
        <div class="mt-10 flex gap-10">
          <Button @click="onStart" label="Начать" size="small"/>
          <Button label="Остановить" severity="secondary" size="small"/>
          <Button label="Завершить" severity="secondary" size="small"/>
        </div>
        <div class="mt-10">
          <p>{{ `Запуск №: ${ id }` }}</p>
        </div>
      </div>
    </div>
  </PaddingBox>
</template>

<style scoped>

</style>