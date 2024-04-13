<template>
   <article class="w-full max-w-[340px] overflow-hidden rounded-3xl">
      <header class="relative">
         <v-favorite />
         <img class="block h-[230px] w-full object-cover md:h-[250px]" src="" alt="card picture" loading="lazy" width="400" height="400" />
      </header>
      <div class="flex flex-col gap-3 bg-violet p-5">
         <v-rating />
         <h2 class="max-w-[230px] font-Beret text-lg leading-none text-tertiary">HOT SETTING ANTI AGING Alginate Face mask</h2>
         <p class="mb-3 min-h-[30px] text-sm text-tertiary opacity-60">with Tea Tree Leaf oil; Sea Silt Extract and Burdock Root Extract</p>
         <div class="flex items-center gap-2 font-Giga">
            <p class="text-xl text-[#b4b3bd] line-through">9,95 €</p>
            <p class="text-xl font-medium text-tertiary">5,95 €</p>
         </div>
      </div>
      <footer class="flex flex-col gap-3 bg-violet p-5">
         <NuxtLink
            class="flex h-11 w-full items-center justify-center rounded-[55px] border border-tertiary bg-secondary font-Beret tracking-wide text-white"
            :to="`/catalog/${1}`">
            Learn more
         </NuxtLink>
         <button
            class="flex h-11 w-full items-center justify-center gap-2 rounded-[55px] border border-tertiary bg-primary font-Beret tracking-wide text-white">
            <svg class="h-5 w-5">
               <use xlink:href="/img/sprite.svg#iconBag"></use>
            </svg>
            Buy now
         </button>
      </footer>
   </article>
</template>

<script setup>
const props = defineProps({
   cardData: {
      type: Object,
      required: true,
   },
});

const currentCardData = ref();
const isHover = ref(false);
</script>
