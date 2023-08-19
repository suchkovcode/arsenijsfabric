<template>
   <div class="flex justify-end items-center py-7 px-6 border-b border-b-border lg:p-8">
      <p class="block w-full font-Giga font-medium text-lg">
         <slot />
      </p>
      <button
         class="cursor-pointer relative w-6 h-6 after:content-[''] after:absolute top-1/2 after:left-0 after:block after:w-full after:h-[2px] after:bg-border after:-rotate-45 after:transition-all before:content-[''] before:absolute before:top-1/2 before:left-0 before:block before:w-full before:h-[2px] before:bg-border before:rotate-45 before:transition-all hover:before:bg-secondary hover:after:bg-secondary"
         aria-label="Close canvas btn"
         @click="$emit('close-canvas', false)"></button>
   </div>
</template>

<script>
export default {
   emits: ["close-canvas"],

   data() {
      return {
         isActive: false,
      };
   },
};
</script>
