const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
   builder: "vite",
   srcDir: "./src/",
   telemetry: false,
   ssr: true,
   devServer: {
      port: 3000,
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

   app: {
      rootId: "root",
      pageTransition: false,
      layoutTransition: false,
      buildAssetsDir: isDev ? "_nuxt/" : "assets/",
   },

   sourcemap: {
      server: false,
      client: false,
   },

   devtools: {
      enabled: false,

      timeline: {
         enabled: false,
      },
   },

   experimental: {
      payloadExtraction: false,
      headNext: false,
      appManifest: false,
      renderJsonPayloads: false,
      crossOriginPrefetch: false,
      sharedPrerenderData: true,
   },

   features: {
      inlineStyles: false,
      noScripts: false,
   },

   nitro: {
      preset: "cloudflare-pages-static",
      serveStatic: true,
      prerender: {
         autoSubfolderIndex: false,
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
      safelist: ["html", "head", "body", "root", /\w+-(?:\[\d+(px|deg)\])?/],
      fontFace: true,
      variables: true,
      keyframes: true,
   },

   site: {
      url: process.env.NUXT_SITE_URL || "https://arsenijsfabric.net/",
   },

   robots: {
      sitemap: ["/sitemap.xml"],
      credits: false,
   },

   sitemap: {
      sitemaps: false,
      xsl: false,
      xslTips: false,
      discoverImages: true,
   },

   css: ["~/assets/css/app.css"],
   modules: isDev
      ? ["@nuxtjs/eslint-module", "@pinia/nuxt", "nuxt-purgecss"]
      : ["@pinia/nuxt", "nuxt-purgecss"],
});
