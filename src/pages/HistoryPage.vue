<script setup lang="ts">

import Header from "../components/Header.vue";
import PaddingBox from "../components/PaddingBox.vue";
</script>

<template>
  <Header />
  <PaddingBox class="mt-10">
    <div>
      <h1>История</h1>
    </div>
    <DataTable :value="products" stripedRows tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </PaddingBox>
</template>

<style scoped>

</style>