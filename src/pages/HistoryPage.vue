<script setup lang="ts">

import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
const history = [
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
  { code: "1", name: "1", category: "1" },
];
</script>

<template>
  <Header />
  <PaddingBox class="mt-10">
    <Button> Click me</Button>
    <div>
      <h1>История</h1>
    </div>
    <DataTable paginator :rows="4" :value="history" stripedRows tableStyle="min-width: 50rem">
      <Column field="code" header="Дата"></Column>
      <Column field="name" header="Номер запуска"></Column>
      <Column field="category" header="Число"></Column>
    </DataTable>
  </PaddingBox>
</template>

<style scoped>

</style>