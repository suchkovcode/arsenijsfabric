<template>
   <div v-if="paginationData > 1" class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
      <button
         v-for="n in displayedPagination"
         :key="n"
         class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border font-Giga text-sm text-tertiary transition-all hover:border-secondary hover:bg-orange"
         :class="{ 'border-secondary font-medium': n === store.pageNumber }"
         @click="changePage(n)">
         <span class="opacity-60">
            {{ n }}
         </span>
      </button>
   </div>
</template>

<script setup>
const store = useAppStore();
const props = defineProps({
   paginationData: {
      type: Number,
      required: true,
   },
});

const displayedPagination = computed(() => {
   const visibleItems = Math.min(props.paginationData, 5);
   const start = Math.max(1, Math.min(store.pageNumber - Math.floor(visibleItems / 2), props.paginationData - visibleItems + 1));
   const end = Math.min(start + visibleItems - 1, props.paginationData);
   return Array.from({ length: end - start + 1 }, (_, i) => start + i);
});

const changePage = (newPage) => {
   window.scrollTo(0, 350);
   store.setPageNumber(newPage);
};
</script>
