import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // head: {
  //   title:"夢境漫遊：繪本藝術展",
  //   script: [
  //     {
  //       type: "module",
  //       src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
  //       body: true,
  //     },
  //     {
  //       nomodule: true,
  //       src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
  //       body: true,
  //     },
  //   ],
  // },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["@/assets/css/main.css"],
});
