<template>
   <div class="favoriteItem gap-4 pb-5 border-b border-b-border">
      <img class="favoriteItem__img w-[70px] h-[70px] min-w-[70px] rounded-lg object-cover" src="" alt="Картинка товара" width="70" height="70" />
      <router-link class="favoriteItem__option sont-Giga text-tertiary font-medium leading-tight" :to="`/catalog/`"></router-link>
      <div class="favoriteItem__count block sm:ml-auto self-center opacity-60 text-tertiary font-Giga">$</div>
      <button
         class="favoriteItem__remove cursor-pointer relative self-center w-6 h-6 ml-auto rounded-full border border-tertiary opacity-50 transition-all before:content-[''] before:absolute before:top-1/2 before:block before:w-[14px] before:h-px before:bg-tertiary before:transition-all before:left-1/2 before:-translate-x-[7px] after:content-[''] after:absolute after:top-1/2 after:block after:w-[14px] after:h-px after:bg-tertiary after:transition-all after:left-1/2 after:-translate-x-[7px] before:rotate-45 after:-rotate-45 hover:border-[red] hover:before:bg-[red] hover:after:bg-[red]"
         @click="$emit('delFavorite', false)"></button>
   </div>
</template>

<script>
export default {
   props: {
      favoriteItem: {
         type: Object,
         required: true,
      },
   },
};
</script>
