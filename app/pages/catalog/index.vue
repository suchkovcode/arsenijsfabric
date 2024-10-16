<template>
   <section class="pb-10 pt-36 lg:pb-14 lg:pt-48 xl:pb-16">
      <div class="container">
         <block-v-breadcrumbs class="mb-8" :roter-link="{ name: 'Catalog', to: '/catalog' }" />
         <div class="mb-5 flex flex-col items-center lg:mb-10 lg:flex-row lg:justify-between">
            <h1
               class="relative mb-5 flex items-center justify-center gap-4 font-Beret text-[50px] leading-none text-primary lg:mb-0 lg:justify-start">
               <btn-back class="hidden lg:flex" />
               <svg class="absolute -top-5 left-1/2 h-8 w-24 -translate-x-1/2 lg:left-11 lg:translate-x-0" fill="none">
                  <use xlink:href="/img/sprite.svg#indexTitleIcon-6"></use>
               </svg>
               Catalog
            </h1>
            <p class="text-center leading-tight text-tertiary opacity-60 lg:max-w-[220px] lg:text-left">Our natural and perfects products</p>
         </div>
         <div class="relative mb-7 flex flex-col gap-3 md:max-w-[600px] md:flex-row md:gap-5 lg:mb-12">
            <div class="goods__search-container relative block w-full lg:max-w-[270px] xl:max-w-[340px]">
               <input
                  v-model="searchQuery"
                  class="focus:border-gray-500 relative h-[60px] w-full rounded-[50px] border-border bg-violet px-[50px] py-[15px] focus:bg-white focus:ring-0"
                  type="text"
                  placeholder="What to find?" />
               <svg class="absolute left-[15px] top-1/2 h-5 w-5 -translate-y-1/2 fill-none text-primary">
                  <use xlink:href="/img/sprite.svg#iconSearch-1"></use>
               </svg>
            </div>
            <button
               class="goods__search-btn relative flex h-[60px] w-full cursor-pointer items-center justify-center rounded-[50px] border border-tertiary bg-primary font-Beret text-white transition-all hover:bg-secondary md:max-w-[170px]">
               SEARCH
            </button>
         </div>
         <div class="grid gap-6 lg:grid-cols-12">
            <div class="lg:col-span-4 xl:col-span-3">
               <app-filter />
            </div>
            <app-catalog class="lg:col-span-8 xl:col-span-9" :data-item="store.products" />
            <!-- <app-pagination class="lg:col-start-5 lg:col-end-12 xl:col-start-4" /> -->
         </div>
      </div>
   </section>
</template>

<script setup>
const store = useProductStore();
</script>
