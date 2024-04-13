<template>
   <section class="flex h-screen w-full items-center justify-center bg-primary">
      <div class="container">
         <h1 class="mb-5 text-center font-Beret text-[110px] text-white">404</h1>
         <p class="mb-8 text-center font-Giga text-lg text-white opacity-70">
            This page does not exist <br />
            or has it been removed
         </p>
         <NuxtLink
            class="mx-auto flex h-11 w-full max-w-[240px] items-center justify-center rounded-[55px] border border-tertiary bg-secondary font-Beret uppercase tracking-wide text-white transition-all hover:bg-white hover:text-secondary"
            to="/">
            Go back
         </NuxtLink>
      </div>
   </section>
</template>
<script setup>
useSeoMeta({
   title: "Arsenijs Fabric | 404",
});
</script>
