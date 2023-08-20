<template>
   <section class="pt-28 pb-10 lg:pt-36 lg:pb-14 xl:pb-16">
      <div class="container">
         <block-v-breadcrumbs class="mb-8 lg:mb-12 xl:mb-16" :roter-link="roterData" />
         <div class="flex flex-col items-center mb-5 lg:flex-row lg:justify-between lg:mb-10">
            <h1
               class="relative flex justify-center items-center gap-4 mb-5 text-[50px] text-primary font-Beret leading-none lg:justify-start lg:mb-0">
               <ui-btn-back class="hidden lg:flex" />
               <svg class="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-8 lg:translate-x-0 lg:left-11" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-6"></use>
               </svg>
               Catalog
            </h1>
            <p class="text-center text-tertiary opacity-60 leading-tight lg:max-w-[220px] lg:text-left">Our natural and perfects products</p>
         </div>
         <div class="relative flex flex-col gap-3 mb-7 md:flex-row md:gap-5 md:max-w-[600px] lg:mb-12">
            <div class="goods__search-container relative block w-full lg:max-w-[270px] xl:max-w-[340px]">
               <input
                  class="relative w-full h-[60px] px-[50px] py-[15px] border-border rounded-[50px] bg-violet focus:border-gray-500 focus:bg-white focus:ring-0"
                  type="text"
                  placeholder="What to find?"
                  v-model="searchQuery" />
               <svg class="absolute top-1/2 left-[15px] w-5 h-5 -translate-y-1/2 fill-none text-primary">
                  <use xlink:href="@/assets/img/sprite.svg#iconSearch-1"></use>
               </svg>
            </div>
            <button class="goods__search-btn cursor-pointer relative flex justify-center items-center w-full h-[60px] rounded-[50px] font-Beret text-white bg-primary transition-all md:max-w-[170px] border border-tertiary hover:bg-secondary">SEARCH</button>
         </div>
         <div class="grid gap-6 lg:grid-cols-12">
            <div class="lg:col-span-4 xl:col-span-3">
               <app-filter />
            </div>
            <app-catalog class="lg:col-span-8 xl:col-span-9" :data-item="products" />
            <app-pagination class="lg:col-start-5 lg:col-end-12 xl:col-start-4" />
         </div>
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "@/store/product";

export default {
   data() {
      return {
         roterData: [
            {
               id: 1,
               name: "Home",
               to: "/",
               last: false,
            },
            {
               id: 2,
               name: "Catalog",
               to: "/catalog",
               last: true,
            },
         ],

         searchQuery: "",
      };
   },

   computed: {
      ...mapState(useProductStore, ["products"]),
   },
};
</script>
