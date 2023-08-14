<template>
   <header class="fixed top-0 z-50 font-Giga bg-white w-full">
      <p class="text-center p-1 bg-primary text-white text-xs leading-light">
         Free delivery in Latvia - on order from 50 € &nbsp;
         <NuxtLink
            class="text-[10px] text-secondary no-underline transition-all duration-500 ease-linear hover:underline whitespace-nowrap"
            to="/">
            SHOP NOW
         </NuxtLink>
      </p>
      <div class="container py-3 flex justify-between items-center bg-white lg:py-6">
         <button class="burger relative cursor-pointer flex flex-col items-start justify-start gap-[6px] h-auto lg:hidden" aria-label="Menu button">
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
         </button>
         <nav class="hidden lg:block">
            <ul class="lg:flex gap-9 items-center text-sm text-tertiary">
               <li
                  class="lg:relative lg:cursor-pointer lg:flex lg:items-center lg:gap-2 lg:hover:text-secondary lg:transition-all"
                  :class="{ 'text-secondary': shopHover }"
                  @mouseover="shopHover = true">
                  <NuxtLink to="/">SHOP</NuxtLink>
                  <span :class="[shopHover ? arrowActive : arrowDefault]"></span>
               </li>
               <li class="lg:relative lg:hover:text-secondary transition-all">
                  <NuxtLink to="/">ABOUT US</NuxtLink>
               </li>
            </ul>
            <div
               class="hidden border-t border-border absolute top-[121px] -z-10 left-0 w-full bg-white py-7"
               :class="{ 'lg:block': shopHover }"
               @mouseover="shopHover = true"
               @mouseout="shopHover = false">
               <div class="container flex justify-between">
                  <div class="flex flex-col justify-between py-3 text-tertiary">
                     <p class="relative font-medium leading-none xl:text-lg">
                        <svg class="absolute -top-6 left-0 w-12 h-7 xl:-top-5" fill="none">
                           <use xlink:href="@/assets/img/sprite.svg#iconHeaderNav"></use>
                        </svg>
                        Bestsellers
                     </p>
                     <NuxtLink class="text-xs underline leading-none transition-all hover:text-secondary" to="/">ALL PRODUCTS</NuxtLink>
                  </div>
                  <nav>
                     <ul class="flex gap-3 justify-end">
                        <li class="overflow-hidden relative rounded-xl xl:rounded-3xl">
                           <NuxtLink class="relative" to="/">
                              <span class="absolute top-3 left-3 z-50 text-white font-Giga font-medium xl:top-5 xl:left-5 xl:text-lg">Cosmetics</span>
                              <img
                                 class="w-44 h-[140px] hover:scale-125 transition-all duration-300 object-cover xl:w-60 xl:h-48"
                                 src="@/assets/img//header__link-1.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="overflow-hidden relative rounded-xl xl:rounded-3xl">
                           <NuxtLink class="relative" to="/">
                              <span class="absolute top-3 left-3 z-50 text-white font-Giga font-medium xl:top-5 xl:left-5 xl:text-lg">
                                 Soap bouquets
                              </span>
                              <img
                                 class="w-44 h-[140px] hover:scale-125 transition-all duration-300 object-cover xl:w-60 xl:h-48"
                                 src="@/assets/img/header__link-2.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="overflow-hidden relative rounded-xl xl:rounded-3xl">
                           <NuxtLink class="relative" to="/">
                              <span class="absolute top-3 left-3 z-50 text-white font-Giga font-medium xl:top-5 xl:left-5 xl:text-lg">Soap</span>
                              <img
                                 class="w-44 h-[140px] hover:scale-125 transition-all duration-300 object-cover xl:w-60 xl:h-48"
                                 src="@/assets/img/header__link-3.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="overflow-hidden relative rounded-xl xl:rounded-3xl">
                           <NuxtLink class="relative" to="/">
                              <span class="absolute top-3 left-3 z-50 text-white font-Giga font-medium xl:top-5 xl:left-5 xl:text-lg">
                                 Bath bombs
                              </span>
                              <img
                                 class="w-44 h-[140px]‰ hover:scale-125 transition-all duration-30 object-cover xl:w-60 xl:h-488"
                                 src="@/assets/img/header__link-4.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </nav>
         <NuxtLink to="/" aria-label="Logo link" class="ml-11 sm:ml-[52px] lg:ml-0 lg:mr-[100px] xl:mr-0 xl:ml-[20px]">
            <svg class="w-24 h-10 md:w-32 md:h-11 lg:w-36 lg:h-12">
               <use xlink:href="@/assets/img/sprite.svg#logo"></use>
            </svg>
         </NuxtLink>
         <div class="flex items-center gap-4 sm:gap-6">
            <nav class="relative hidden xl:block mr-8">
               <ul class="relative lg:flex gap-9 items-center text-sm text-tertiary">
                  <li
                     class="absolute top-0 -left-[80px] cursor-pointer flex items-start gap-2 hover:text-secondary transition-all leading-none"
                     :class="{ 'h-[140px]': infoHover }"
                     @mouseover="infoHover = true"
                     @mouseout="infoHover = false">
                     <NuxtLink :class="{ 'text-secondary': infoHover }" to="/">INFO</NuxtLink>
                     <span class="pt-[6px] pb-0" :class="[infoHover ? arrowActive : arrowDefault]"></span>
                  </li>
                  <li class="lg:relative lg:hover:text-secondary transition-all leading-none">
                     <button>CONTACTS</button>
                  </li>
               </ul>
               <div
                  class="hidden absolute top-[70px] -left-[140px] w-fit h-auto py-4 px-7 bg-white rounded-lg before:content-[''] before:absolute before:-top-5 before:left-1/2 before:w-0 before:h-0 before:bg-transparent before:border-b-[20px] before:border-b-white before:border-x-[12px] before:border-x-transparent before:border-solid before:-translate-x-1/2 shadow"
                  :class="{ 'xl:block': infoHover }"
                  @mouseover="infoHover = true"
                  @mouseout="infoHover = false">
                  <nav>
                     <ul class="flex flex-col gap-2">
                        <li class="text-center hover:text-secondary transition-all">
                           <NuxtLink class="whitespace-nowrap" to="/">Privacy policy</NuxtLink>
                        </li>
                        <li class="text-center hover:text-secondary transition-all">
                           <NuxtLink class="whitespace-nowrap" to="/">Delivery</NuxtLink>
                        </li>
                     </ul>
                  </nav>
               </div>
            </nav>
            <button class="cursor-pointer relative">
               <svg class="w-7 h-7 text-tertiary transition-all hover:text-secondary" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconFavorite"></use>
               </svg>
               <span
                  class="absolute -bottom-3 -right-1 flex justify-center items-center w-5 h-5 bg-primary text-white rounded-full leading-none text-xs">
                  0
               </span>
            </button>
            <button class="cursor-pointer relative">
               <svg class="w-7 h-7 text-tertiary transition-all hover:text-secondary" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconBacket"></use>
               </svg>
               <span
                  class="absolute -bottom-3 -right-1 flex justify-center items-center w-5 h-5 bg-primary text-white rounded-full leading-none text-xs">
                  0
               </span>
            </button>
         </div>
      </div>
   </header>
</template>

<script>
export default {
   data() {
      return {
         arrowDefault:
            "lg:relative lg:block lg:after:content-[''] lg:after:absolute lg:after:block lg:after:w-[8px] lg:after:h-px lg:after:bg-tertiary lg:after:rotate-45 lg:after:transition-all lg:before:content-[''] lg:before:absolute lg:before:right-[-13px] lg:before:block lg:before:w-[8px] lg:before:h-px lg:before:bg-tertiary lg:before:rotate-[130deg] lg:before:transition-all pb-[3px]",
         arrowActive:
            "lg:relative lg:block lg:after:content-[''] lg:after:absolute lg:after:block lg:after:w-[8px] lg:after:h-px lg:after:bg-secondary lg:after:-rotate-45 lg:after:transition-all lg:before:content-[''] lg:before:absolute lg:before:right-[-13px] lg:before:block lg:before:w-[8px] lg:before:h-px lg:before:bg-secondary lg:before:rotate-[-130deg] lg:before:transition-all pb-[3px]",
         shopHover: false,
         infoHover: false,
      };
   },
};
</script>
