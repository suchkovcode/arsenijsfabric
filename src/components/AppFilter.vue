<template>
   <div class="flex flex-row flex-wrap justify-center gap-y-[10px] gap-x-5 mb-7 lg:flex-col lg:flex-nowrap">
      <label class="cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="All" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base">All</span>
      </label>
      <label class="filter__label cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="Bestsellers" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base"> Bestsellers </span>
      </label>
      <label class="filter__label cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="Cosmetics" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base"> Cosmetics </span>
      </label>
      <label class="filter__label cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="Soap bouquets" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base"> Soap bouquets </span>
      </label>
      <label class="filter__label cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="Bath bombs" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base"> Bath bombs </span>
      </label>
      <label class="filter__label cursor-pointer">
         <input v-model="filter.category" class="hidden" type="radio" value="Soap" />
         <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base"> Soap </span>
      </label>
      <!-- <label v-for="item in categoryData" :key="item" class="cursor-pointer">
            <input v-model="filter.category" class="hidden" type="radio" :value="item" />
            <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base">
               {{ item.slice(0, 1).toUpperCase() + item.slice(1) }}
            </span>
         </label> -->
   </div>
   <div class="flex items-center gap-3 mb-5 lg:hidden">
      <svg class="filter__title-icon w-4 h-4 fill-tertiary">
         <use xlink:href="/img/sprite.svg#catalogFilter"></use>
      </svg>
      <p class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 lg:text-base">Filter</p>
   </div>
   <div
      class="filter__sort h-fit py-3 border-t border-b border-t-border border-b-border lg:border-t-0 lg:border-b-0"
      :class="{ active: isClickSort }">
      <button
         class="filter__sort-btn relative cursor-pointer block w-full text-sm text-tertiary font-Giga text-left transition-all lg:cursor-default"
         @click="isClickSort = !isClickSort">
         <span class="opacity-70"> Sort </span>
      </button>
      <div class="filter__sort-drobdown hidden flex-col gap-1 py-3 lg:flex">
         <label class="filter__label cursor-pointer">
            <input v-model="filter.sort" class="hidden" type="radio" value="new" />
            <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 transition-all lg:text-base">Sort: newest first</span>
         </label>
         <label class="filter__label cursor-pointer">
            <input v-model="filter.sort" class="hidden" type="radio" value="old" />
            <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 transition-all lg:text-base">Sort: oldest first</span>
         </label>
         <label class="filter__label cursor-pointer">
            <input v-model="filter.sort" class="hidden" type="radio" value="start" />
            <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 transition-all lg:text-base">Title: A—Z</span>
         </label>
         <label class="filter__label cursor-pointer">
            <input v-model="filter.sort" class="hidden" type="radio" value="end" />
            <span class="cursor-pointer font-Giga text-sm text-tertiary opacity-70 transition-all lg:text-base">Title: Z—A</span>
         </label>
      </div>
   </div>
   <div
      class="filter__sort h-fit py-3 border-t border-b border-t-border border-b-border lg:border-t-0 lg:border-b-0"
      :class="{ active: isClickPrice }">
      <button
         class="filter__sort-btn relative cursor-pointer block w-full text-sm text-tertiary font-Giga text-left transition-all lg:cursor-default"
         @click="isClickPrice = !isClickPrice">
         <span class="opacity-70"> Price </span>
      </button>
      <div class="filter__sort-drobdown hidden items-center gap-3 py-3 lg:flex">
         <input
            v-model.number="filter.price.start"
            type="number"
            min="0"
            class="mt-1 block w-full rounded-md bg-violet border-transparent text-tertiary focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="0" />
         <span> — </span>
         <input
            v-model.number="filter.price.end"
            type="number"
            max="100"
            class="mt-1 block w-full rounded-md bg-violet border-transparent text-tertiary focus:border-gray-500 focus:bg-white focus:ring-0"
            placeholder="0" />
      </div>
   </div>
</template>

<script>
export default {
   props: {
      categoryData: {
         type: Array,
         required: true,
      },
   },

   data() {
      return {
         filter: {
            category: "All",
            sort: "new",
            price: {
               start: 0,
               end: 100,
            },
         },

         isClickSort: false,
         isClickPrice: false,
      };
   },
};
</script>
