import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@vueuse/nuxt", "nuxt-file-storage"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    jwtSecret: process.env.JWT_SECRET,
    public: {
      tinyMceApiKey: process.env.TINYMCE_API_KEY,
    },
  },
  fileStorage: {
    mount: process.env.FILE_STORAGE_PATH,
  },
});
