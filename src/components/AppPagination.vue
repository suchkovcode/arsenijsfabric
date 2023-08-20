<template>
   <div class="flex justify-center items-center flex-wrap gap-3 lg:justify-start">
      <button
         v-for="n in 5"
         :key="n"
         class="cursor-pointer flex justify-center items-center w-10 h-10 border border-border rounded-full font-Giga text-sm text-tertiary transition-all hover:border-secondary hover:bg-orange"
         :class="{ 'border-secondary font-medium': n === pageNumber }"
         @click="paginationHandler(n)">
         <span class="opacity-60">
            {{ n }}
         </span>
      </button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         pageNumber: 1,
      };
   },

   methods: {
      paginationHandler(n) {
         this.pageNumber = n;
      },
   },
};
</script>
