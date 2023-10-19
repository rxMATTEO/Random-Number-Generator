<script setup lang="ts">
import Card from  "./Card.vue";
import {useRandomNumberStore} from "../stores/useRandomNumberStore.ts";
import {storeToRefs} from "pinia";

const randomNumberStore = useRandomNumberStore();
const { generated, currentLaunch, interval } = storeToRefs(randomNumberStore);
</script>

<template>
  <div class="mt-10 flex justify-center gap-5">
    <Card>
      <template #header>
        {{ generated }}
      </template>
      <template #default>
        <p>Сгенерировано чисел</p>
      </template>
    </Card>
    <Card>
      <template #header>
        {{ currentLaunch || 'Нет' }}
      </template>
      <template #default>
        <p>Номер текущего запуска</p>
      </template>
    </Card>
    <Card>
      <template #header>
        {{ interval || 'Нет' }}
      </template>
      <template #default>
        <p>Текущий интервал (сек)</p>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>