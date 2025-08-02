// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 3000,
    host: "0.0.0.0",
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["assets/css/all.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  icon: {
    size: "24px", // default <Icon> size applied
    mode: "svg", // default <Icon> mode applied
  },
  app: {
    head: {
      title: "FluxRSS -",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "fr",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
