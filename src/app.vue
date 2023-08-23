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
            { hid: "description", name: "description", content: "" },
            { hid: "og:title", property: "og:title", content: "" },
            { hid: "og:url", property: "og:url", content: "" },
            { hid: "og:description", property: "og:description", content: "" },
            { hid: "og:image", property: "og:image", content: ogImage },

            { hid: "twitter:title", name: "twitter:title", content: "" },
            { hid: "twitter:url", name: "twitter:url", content: "" },
            { hid: "twitter:description", name: "twitter:description", content: "" },
            { hid: "twitter:image", name: "twitter:image", content: ogImage },
         ],
         link: [{ hid: "canonical", rel: "canonical", href: "https://arsenijsfabric.net" }],
      });
      defineRobotMeta();
   },
};
</script>
