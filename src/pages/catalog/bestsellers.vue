<template>
   <section class="pb-10 pt-28 lg:pb-14 lg:pt-36 xl:pb-16">
      <div class="container">
         <block-v-breadcrumbs class="mb-8 lg:mb-12 xl:mb-16" :roter-link="{ catalog: true, name: 'Bestseller', to: '/catalog/bestsellers' }" />
         <div class="mb-5 flex flex-col items-center lg:mb-10 lg:flex-row lg:justify-between">
            <h1
               class="relative mb-5 flex items-center justify-center gap-4 font-Beret text-[50px] leading-none text-primary lg:mb-0 lg:justify-start">
               <ui-btn-back class="hidden lg:flex" />
               <svg class="absolute -top-5 left-1/2 h-9 w-24 -translate-x-1/2 lg:left-11 lg:translate-x-0" fill="none">
                  <use xlink:href="/img/sprite.svg#indexTitleIcon-7"></use>
               </svg>
               Bestsellers
            </h1>
            <p class="text-center leading-tight text-tertiary opacity-60 lg:max-w-[220px] lg:text-left">Our natural and perfects products</p>
         </div>
         <nav class="mb-9 lg:mb-10 xl:mb-12">
            <ul class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
               <catalog-v-cosmetics />
               <catalog-v-bouquets />
               <catalog-v-soap />
               <catalog-v-bombs />
               <catalog-v-all />
            </ul>
         </nav>
         <app-catalog :data-item="store.products" />
      </div>
   </section>
</template>

<script setup>
const store = useProductStore();
</script>
