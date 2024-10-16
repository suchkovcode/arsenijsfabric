<template>
   <div class="flex items-center justify-end border-b border-b-border px-6 py-7 lg:p-8">
      <p class="block w-full font-Giga text-lg font-medium">
         <slot />
      </p>
      <button
         class="relative top-1/2 h-6 w-6 cursor-pointer before:absolute before:left-0 before:top-1/2 before:block before:h-[2px] before:w-full before:rotate-45 before:bg-border before:transition-all before:content-[''] after:absolute after:left-0 after:block after:h-[2px] after:w-full after:-rotate-45 after:bg-border after:transition-all after:content-[''] hover:before:bg-secondary hover:after:bg-secondary"
         aria-label="Close canvas btn"
         @click="$emit('closeCanvas', false)"></button>
   </div>
</template>

<script setup>
const emit = defineEmits(["closeCanvas"]);
</script>
