<script setup lang="ts">

import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
import {useRandomNumberStore} from "../stores/useRandomNumberStore.ts";
import {storeToRefs} from "pinia";

const randomNumberStore = useRandomNumberStore();
const { numbers } = storeToRefs(randomNumberStore);
</script>

<template>
  <Header />
  <PaddingBox class="mt-10">
    <div>
      <h1>История</h1>
    </div>
    <DataTable class="mt-10" paginatorTemplate="- PrevPageLink - PageLinks - NextPageLink" paginator :rows="4" :value="numbers" stripedRows tableStyle="min-width: 50rem">
      <template #paginatorprevpagelinkicon>
        <p class="p-3">
          Предыдущая
        </p>
      </template>
      <template #paginatornextpagelinkicon>
        <p class="p-3">
          Следущая
        </p>
      </template>
      <Column :pt="{
        headerCell: {
          class: ['bg-blue-100']
        }
      }" field="date" header="Дата" class="w-1/4"></Column>
      <Column :pt="{
        headerCell: {
          class: ['bg-blue-100']
        }
      }" field="currentLaunch" header="Номер запуска"></Column>
      <Column :pt="{
        headerCell: {
          class: ['bg-blue-100']
        }
      }" field="number" header="Число"></Column>
    </DataTable>
  </PaddingBox>
</template>

<style scoped>

</style>