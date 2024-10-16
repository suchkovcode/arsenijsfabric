<template>
   <button
      v-if="isEmpty"
      class="flex h-11 w-full items-center justify-center gap-2 rounded-[55px] border border-tertiary bg-primary font-Beret tracking-wide text-white">
      <svg class="h-5 w-5">
         <use xlink:href="/img/sprite.svg#iconBag"></use>
      </svg>
      Buy now
   </button>
   <button
      v-else
      class="flex h-11 w-full items-center justify-center gap-2 rounded-[55px] border border-tertiary bg-primary font-Beret tracking-wide text-white opacity-65"
      disabled>
      <svg class="h-5 w-5">
         <use xlink:href="/img/sprite.svg#iconBag"></use>
      </svg>
      Not available
   </button>
</template>

<script setup>
const props = defineProps({
   isEmpty: Boolean,
});
</script>
