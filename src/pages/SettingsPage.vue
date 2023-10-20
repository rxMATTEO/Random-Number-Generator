<script setup lang="ts">
import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import {computed, Ref, ref} from "vue";
import axios from "axios";
import {State, useRandomNumberStore} from "../stores/randomNumberStore.ts";
import {storeToRefs} from "pinia";

type Binding = {
  minMax: State['minMax'];
  frequency: Ref<State['interval']>;
  id: Ref<State['currentLaunch']>;
}
const minMax = ref<[number, number]>([20, 80]);
const frequency = ref(30);
const id = computed(() => +Math.random().toFixed(2) * 100 );
const randomNumberStore = useRandomNumberStore();
const { minMax: storedMinMax, interval: storedFrequency, currentLaunch: storedId } = storeToRefs(randomNumberStore);
const unstartedBinding: Binding = {
  minMax,
  frequency,
  id,
};
const startedBinding: Binding = {
  minMax: storedMinMax,
  frequency: storedFrequency,
  id: storedId,
}
const bindingTarget = computed(() => startedBinding.id.value ? startedBinding : unstartedBinding);

function onStart() {
  const { id, minMax, frequency } = bindingTarget.value;
  randomNumberStore.setGenerator(id.value, frequency.value as number, minMax.value);
  axios.post(`${import.meta.env.VITE_SERVER}/number`, {
    minMax: minMax.value,
    frequency: frequency.value,
    id: id.value,
  });
}

function onStop() {
  randomNumberStore.stop(bindingTarget.value.id.value);
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
            <InputNumber :min="0" :max="99" v-model="bindingTarget.minMax.value[0]" class="w-12" :pt="{input: { class: 'w-12' }}" />
            <Slider v-model="bindingTarget.minMax.value" range class="w-full" />
            <InputNumber :min="bindingTarget.minMax.value[0]" :max="100" v-model="bindingTarget.minMax.value[1]" class="w-12" :pt="{input: { class: 'w-12' }}" />
          </div>
        </div>
        <div class="mt-10">
          <div>
            <p>{{ `Частота генерации чисел: ${bindingTarget.frequency.value} секунд`}}</p>
          </div>
          <div class="mt-5 w-full flex place-content-between items-center gap-5">
            <p>1</p>
            <Slider :min="1" v-model="bindingTarget.frequency.value as number" class="w-full" />
            <p>100</p>
          </div>
        </div>
        <div class="mt-10 flex gap-10">
          <Button @click="onStart" label="Начать" size="small"/>
          <Button @click="onStop" label="Остановить" severity="secondary" size="small"/>
          <Button label="Завершить" severity="secondary" size="small"/>
        </div>
        <div class="mt-10">
          <p>{{ `Запуск №: ${ bindingTarget.id.value }` }}</p>
        </div>
      </div>
    </div>
  </PaddingBox>
</template>

<style scoped>

</style>