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
      });
   },
};
</script>
