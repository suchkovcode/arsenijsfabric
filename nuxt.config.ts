const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   srcDir: "./src/",
   telemetry: false,
   ssr: true,

   sourcemap: {
      server: isDev ? true : false,
      client: isDev ? true : false,
   },

   app: {
      head: {
         title: "Arsenijs Fabrica |",
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
      },
      pageTransition: false,
      layoutTransition: false,
   },

   devtools: {
      enabled: false,

      timeline: {
         enabled: false,
      },
   },

   devServer: {
      port: 3000,
   },

   nitro: {
      serveStatic: true,
   },

   eslint: {
      lintOnStart: false,
   },

   image: {
      inject: false,
      quality: 80,
      domains: ["localhost"],
      provider: "ipx",
      dir: "assets/img",
   },

   postcss: {
      plugins: {
         "tailwindcss": {},
         "autoprefixer": {},
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
   },

   purgecss: {
      enabled: isDev ? false : true,
      content: ["./src/**/*.vue"],
      safelist: {
         standard: ["body", "html", /\w+-\[\d+px\]/],
      },
      fontFace: true,
      variables: true,
   },

   experimental: {
      inlineSSRStyles: false,
      payloadExtraction: false,
   },

   css: ["~/assets/css/app.css"],
   modules: ["@nuxt/image", "@nuxtjs/eslint-module", "@pinia/nuxt", "nuxt-purgecss"],
});
