<template>
   <button
      class="cursor-pointer absolute top-4 right-4 flex justify-center items-center w-11 h-11 border border-primary rounded-full bg-violet text-transparent hover:text-primary hover:fill-primary"
      type="button"
      aria-label="Favorite btn product card"
      @mouseover="isHover = true"
      @mouseleave="isHover = false">
      <svg class="w-6 h-6" :class="{ 'fill-primary': isHover }">
         <use xlink:href="/img/sprite.svg#iconLike"></use>
      </svg>
   </button>
</template>

<script>
export default {
   data() {
      return {
         isHover: false,
      };
   },
};
</script>
