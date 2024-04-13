const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   devServer: {
      port: 3000,
   },

   app: {
      rootId: "root",
      pageTransition: false,
      layoutTransition: false,
      buildAssetsDir: isDev ? "/_nuxt/" : "assets/",
   },

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

   experimental: {
      componentIslands: false,
      payloadExtraction: false,
      headNext: true,
      appManifest: true,
      renderJsonPayloads: false,
      crossOriginPrefetch: true,
      sharedPrerenderData: true,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   components: [
      {
         path: "~/components",
         pathPrefix: false,
      },
   ],

   nitro: {
      preset: "node-server",
      prerender: {
         autoSubfolderIndex: false,
         crawlLinks: true,
         routes: ["/sitemap.xml"],
      },
   },

   eslint: {
      lintOnStart: false,
   },


   postcss: {
      plugins: {
         "tailwindcss": {},
         "postcss-combine-media-query": {},
         "postcss-combine-duplicated-selectors": {},
         "cssnano": ["default", { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true }],
      },
   },


   purgecss: {
      enabled: isDev ? false : true,
      content: ["./src/**/*.vue"],
      safelist: ["html", "head", "body", "root",  /\w+-(?:\[\d+(px|deg)\])?/],
      fontFace: true,
      variables: true,
      keyframes: true,
   },

   site: {
      url: process.env.NUXT_SITE_URL || "https://arsenijsfabric.suchkov.cc/",
   },

   unlazy: {
      ssr: isDev ? false : true,
      placeholderSize: 24,
   },


   css: ["~/assets/styles/app.scss"],
   modules: isDev
      ? ["@nuxtjs/eslint-module", "@pinia/nuxt", "@unlazy/nuxt", "@pinia-plugin-persistedstate/nuxt"]
      : ["@nuxtjs/strapi", "@pinia/nuxt", "@unlazy/nuxt", "@pinia-plugin-persistedstate/nuxt"],
});
