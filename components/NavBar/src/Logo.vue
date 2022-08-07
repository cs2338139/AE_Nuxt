<script setup>
defineProps({
  img: String,
  width: String,
  href: String,
});
</script>

<template>
  <NuxtLink :to="href" class="inline-block align-middle">
    <img :src="img" :style="width" />
  </NuxtLink>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
