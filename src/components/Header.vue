<script setup lang="ts">

</script>

<template>
  <div class="p-3 bg-blue-100 flex place-content-between text-sm">
    <div>
      <router-link to="/">Генератор случайных чисел</router-link>
    </div>
    <div class="flex gap-5 text-blue-500">
      <router-link to="/history">История</router-link>
      <router-link to="/settings">Настройки</router-link>
      <router-link to="/favorite">Любимые числа</router-link>
    </div>
  </div>
</template>

<style scoped>

</style>