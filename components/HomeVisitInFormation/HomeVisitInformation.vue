<template>
  <div class="relative w-full h-full text-white">
    <div class="mb-5">
      <span class="px-4 py-1 text-xl bg-white rounded-full sm:text-base text-text-0-Color">參觀資訊 Visit</span>
    </div>

    <div>
      <div class="sm:text-sm sm:my-1">免費入場</div>
      <div>-</div>
      <div class="text-base  sm:text-sm sm:my-1">周一休館</div>
      <div class="text-base  sm:text-sm sm:my-1">週二至週日 9:00-17:00</div>
      <div class="text-base  sm:text-sm sm:my-1">國定假日照常開館</div>
    </div>

    <div class="absolute bottom-20 right-0 hover:scale-110 md:bottom-2">
      <NuxtLink to="/vistInformation">
        <span class="px-3 py-1 text-base bg-yellow-400 rounded-full text-text-0-Color sm:text-sm"> more</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
