<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
import ogImage from "~/assets/img/preview.png";
export default {
   setup() {
      useHead({
         htmlAttrs: {
            lang: "lt",
         },
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         meta: [
            { hid: "description", name: "description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "og:title", property: "og:title", content: "Arsenijs Fabric | Home" },
            { hid: "og:url", property: "og:url", content: "https://arsenijsfabric.net" },
            { hid: "og:description", property: "og:description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "og:image", property: "og:image", content: ogImage },

            { hid: "twitter:title", name: "twitter:title", content: "Arsenijs Fabric | Home" },
            { hid: "twitter:url", name: "twitter:url", content: "https://arsenijsfabric.net" },
            { hid: "twitter:description", name: "twitter:description", content: "Our natural and perfects products. We are here to show you that natural is perfect. This is what our products are." },
            { hid: "twitter:image", name: "twitter:image", content: ogImage },
         ],
         link: [{ hid: "canonical", rel: "canonical", href: "https://arsenijsfabric.net" }],
      });
      defineRobotMeta();
   },
};
</script>
