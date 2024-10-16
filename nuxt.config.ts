const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   builder: "vite",
   telemetry: false,
   ssr: true,

   hooks: {
      "build:manifest": (manifest) => {
         for (const key in manifest) {
            const file = manifest[key];
            if (file.assets) {
               file.assets = file.assets.filter(
                  (asset) =>
                     !asset.endsWith(".webp") &&
                     !asset.endsWith(".jpg") &&
                     !asset.endsWith(".png") &&
                     !asset.endsWith(".jpeg") &&
                     !asset.endsWith(".svg"),
               );
            }
         }
      },
   },

   app: {
      rootId: "root",
      pageTransition: false,
      layoutTransition: false,
      buildAssetsDir: isDev ? "/_nuxt/" : "assets/",
   },

   devtools: {
      enabled: false,
      timeline: {
         enabled: false,
      },
   },

   sourcemap: {
      server: false,
      client: false,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   future: {
      compatibilityVersion: 4,
   },

   components: [
      {
         path: "~/components",
         pathPrefix: false,
      },
   ],

   nitro: {
      preset: "node-server",
      serveStatic: "node",
      prerender: {
         autoSubfolderIndex: false,
         crawlLinks: true,
      },
      output: {
         dir: ".output",
         serverDir: ".output/server",
         publicDir: ".output/public",
      },

      minify: false,
   },

   eslint: {
      lintOnStart: false,
   },
   postcss: {
      plugins: {
         "tailwindcss": {},
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "postcss-hover-media-feature": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
   },

   purgecss: {
      enabled: isDev ? false : true,
      content: ["./src/**/*.vue", "./src/**/*.js"],
      safelist: ["html", "head", "body", "root", /\w+-(?:\[\d+(px|deg)\])?/],
      fontFace: false,
      variables: false,
      keyframes: false,
   },

   site: {
      url: process.env.NUXT_SITE_URL || "https://arsenijsfabrica.suchkov.cc/",
   },

   unlazy: {
      ssr: isDev ? false : true,
      placeholderSize: 24,
   },

   css: ["~/assets/styles/app.scss"],
   modules: isDev
      ? ["@pinia/nuxt", "@unlazy/nuxt", "@pinia-plugin-persistedstate/nuxt"]
      : ["@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
