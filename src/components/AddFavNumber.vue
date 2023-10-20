<script setup lang="ts">
import {ref} from "vue";

const favNumber = ref(0);
defineEmits(['close', 'add']);
</script>

<template>
  <div>
    <div>
      <p>Добавить любимое число</p>
    </div>
    <Divider />
    <div>
      <InputNumber v-model="favNumber" />
    </div>
    <div class="mt-5 flex gap-5">
      <Button severity="success" @click="$emit('add', favNumber)">Добавить</Button>
      <Button severity="warning" @click="$emit('close')">Закрыть</Button>
    </div>
  </div>
</template>

<style scoped>

</style>