<template>
   <div class="favoriteItem gap-4 border-b border-b-border pb-5">
      <img class="favoriteItem__img h-[70px] w-[70px] min-w-[70px] rounded-lg object-cover" src="" alt="Картинка товара" width="70" height="70" />
      <router-link class="favoriteItem__option sont-Giga font-medium leading-tight text-tertiary" :to="`/catalog/`"></router-link>
      <p class="favoriteItem__count block self-center font-Giga text-tertiary opacity-60 sm:ml-auto">$</p>
      <button
         class="favoriteItem__remove relative ml-auto h-6 w-6 cursor-pointer self-center rounded-full border border-tertiary opacity-50 transition-all before:absolute before:left-1/2 before:top-1/2 before:block before:h-px before:w-[14px] before:-translate-x-[7px] before:rotate-45 before:bg-tertiary before:transition-all before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:block after:h-px after:w-[14px] after:-translate-x-[7px] after:-rotate-45 after:bg-tertiary after:transition-all after:content-[''] hover:border-[red] hover:before:bg-[red] hover:after:bg-[red]"
         @click="$emit('delFavorite', false)"></button>
   </div>
</template>

<script setup>
const emit = defineEmits(["delFavorite", "closeCanvas"]);

const props = defineProps({
   favoriteItem: {
      type: Object,
      required: true,
   },
});
</script>
