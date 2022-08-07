
<template>
    <div class="relative z-30">
        <NavBar/>
    </div>

    <div class="relative min-h-screen pt-56 pb-40 xl:pt-36 xl:pb-60 md:pb-72 sm:pb-80">
        <NuxtPage />
    </div>

    <div class="relative z-20 -mt-56 xl:-mt-72 sm:-mt-80" id="foot">
        <FootBar />
    </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    touch-action: manipulation;
    @apply bg-bg-0-Color;
}

@layer base {
    body {
        @apply m-0 p-0;
    }
}

@layer utilities {
    .w-1\/15 {
        width: 6.6666667%;
    }
}
</style>