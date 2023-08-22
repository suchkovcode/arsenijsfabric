<template>
   <li class="overflow-hidden relative rounded-3xl md:rounded-[34px]">
      <NuxtLink class="relative" to="/catalog/bouquets">
         <span class="absolute top-6 left-6 z-10 text-white font-Giga font-medium xl:top-5 xl:left-5 xl:text-lg"> Soap bouquets </span>
         <img
            class="block w-full h-[160px] hover:scale-125 transition-all duration-300 object-cover"
            src="@/assets/img/header__link-2.png"
            alt="picture"
            loading="lazy" />
         <svg class="absolute bottom-3 left-3 w-7 h-7 md:bottom-5 md:left-5 xl:bottom-5 xl:left-5" fill="none">
            <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
         </svg>
      </NuxtLink>
   </li>
</template>
