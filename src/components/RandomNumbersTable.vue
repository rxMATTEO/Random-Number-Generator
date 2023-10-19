<script setup lang="ts">
import Card from  "./Card.vue";
</script>

<template>
  <div class="mt-10 flex justify-center gap-5">
    <Card>
      <template #header>
        249
      </template>
      <template #default>
        <p>Сгенерировано чисел</p>
      </template>
    </Card>
    <Card>
      <template #header>
        10
      </template>
      <template #default>
        <p>Номер текущего запуска</p>
      </template>
    </Card>
    <Card>
      <template #header>
        76
      </template>
      <template #default>
        <p>Текущий интервал (сек)</p>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>