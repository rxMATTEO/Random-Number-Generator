<script setup lang="ts">

</script>

<template>
  <div class="shadow-lg shadow p-5">
    <p class="text-center text-3xl bg-gradient-blue bg-clip-text text-transparent">
      <slot name="header" />
    </p>
    <p class="mt-10 text-sm text-ultra-violet">
      <slot />
    </p>
  </div>
</template>

<style scoped>

</style>