<template>
   <section class="pt-28 pb-10 lg:pt-36 lg:pb-14 xl:pb-16">
      <div class="container">
         <block-v-breadcrumbs class="mb-8 lg:mb-12 xl:mb-16" :roter-link="roterData" />
         <div class="flex flex-col items-center mb-5 lg:flex-row lg:justify-between lg:mb-10">
            <h1
               class="relative flex justify-center items-center gap-4 mb-5 text-[50px] text-primary font-Beret leading-none lg:justify-start lg:mb-0">
               <ui-btn-back class="hidden lg:flex" />
               <svg class="absolute -top-5 left-1/2 -translate-x-1/2 w-24 h-9 lg:translate-x-0 lg:left-11" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-7"></use>
               </svg>
               Bestsellers
            </h1>
            <p class="text-center text-tertiary opacity-60 leading-tight lg:max-w-[220px] lg:text-left">Our natural and perfects products</p>
         </div>
         <nav class="mb-9 lg:mb-10 xl:mb-12">
            <ul class="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
               <catalog-v-cosmetics></catalog-v-cosmetics>
               <catalog-v-bouquets></catalog-v-bouquets>
               <catalog-v-soap></catalog-v-soap>
               <catalog-v-bombs></catalog-v-bombs>
               <catalog-v-all></catalog-v-all>
            </ul>
         </nav>
         <app-catalog class="" :data-item="products" />
      </div>
   </section>
</template>

<script>
import { mapState } from "pinia";
import { useProductStore } from "@/store/product";

export default {
   setup() {
      useHead({
         title: "Arsenijs Fabric | Bestseller",
      });
   },

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
               last: false,
            },
            {
               id: 3,
               name: "Bestseller",
               to: "/catalog/bestsellers",
               last: true,
            },
         ],
      };
   },

   computed: {
      ...mapState(useProductStore, ["products"]),
   },
};
</script>
