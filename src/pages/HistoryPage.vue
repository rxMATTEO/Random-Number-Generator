<script setup lang="ts">

import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
const history = [
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
];
</script>

<template>
  <Header />
  <PaddingBox class="mt-10">
    <div>
      <h1>История</h1>
    </div>
    <DataTable class="mt-10" paginatorTemplate="- PrevPageLink - PageLinks - NextPageLink" paginator :rows="4" :value="history" stripedRows tableStyle="min-width: 50rem">
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
      }" field="code" header="Дата"></Column>
      <Column :pt="{
        headerCell: {
          class: ['bg-blue-100']
        }
      }" field="name" header="Номер запуска"></Column>
      <Column :pt="{
        headerCell: {
          class: ['bg-blue-100']
        }
      }" field="category" header="Число"></Column>
    </DataTable>
  </PaddingBox>
</template>

<style scoped>

</style>