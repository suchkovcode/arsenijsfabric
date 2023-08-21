const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   builder: "vite",

   sourcemap: {
      server: isDev ? true : false,
      client: isDev ? true : false,
   },

   app: {
      head: {
         title: "Arsenijs Fabrica",
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

   experimental: {
      inlineSSRStyles: false,
      payloadExtraction: false,
   },

   nitro: {
      preset: "cloudflare",
      serveStatic: true,
   },

   eslint: {
      lintOnStart: false,
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
         standard: ["body", "html", "a", /\w+-(?:\[\d+(px|deg)\])?/],
      },
      fontFace: true,
      variables: true,
   },

   image: {
      domains: ["assets.arsenijsfabric.net"],
      provider: "cloudflare",
      cloudflare: {
         baseURL: "https://assets.arsenijsfabric.net",
      },
      inject: true,
      format: ["webp"],
      quality: 80,
      dir: "assets/img",
   },

   css: ["~/assets/css/app.css"],
   modules: ["@nuxtjs/eslint-module", "@pinia/nuxt", "nuxt-purgecss", "nuxt-simple-sitemap", "nuxt-simple-robots", "@nuxt/image"],
});
