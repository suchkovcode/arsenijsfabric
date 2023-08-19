<template>
   <button
      class="cursor-ponter flex justify-center items-center text-secondary bg-orange w-7 h-7 rounded-full hover:text-white hover:bg-secondary transition-all"
      type="button"
      @click="$router.go(-1)">
      <svg class="inline w-7 h-7">
         <use xlink:href="@/assets/img/sprite.svg#iconArrowBack"></use>
      </svg>
   </button>
</template>
