<template>
   <NuxtLayout>
      <NuxtPage />
   </NuxtLayout>
</template>

<script>
export default {
   setup() {
      useHead({
         htmlAttrs: {
            lang: "lt",
         },
         titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} Site Title` : "Site Title";
         },
      });
   },
};
</script>
