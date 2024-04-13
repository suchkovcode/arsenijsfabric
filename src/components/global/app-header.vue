<template>
   <header class="fixed top-0 z-50 mx-auto w-full max-w-[1800px] bg-white font-Giga" :class="{ 'border-b border-border': $route.fullPath !== '/' }">
      <p class="leading-light bg-primary p-1 text-center text-xs text-white">
         Free delivery in Latvia - on order from 50 € &nbsp;
         <NuxtLink class="whitespace-nowrap text-[10px] text-secondary no-underline transition-all duration-500 ease-linear hover:underline" to="/">
            SHOP NOW
         </NuxtLink>
      </p>
      <div class="container flex items-center justify-between bg-white py-3 lg:py-6">
         <button
            class="burger relative flex h-auto cursor-pointer flex-col items-start justify-start gap-[6px] lg:hidden"
            type="button"
            aria-label="Menu button"
            @click="store.updateMenuCanvas(true)">
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
            <span class="relative block h-[2px] w-7 bg-tertiary transition-all"></span>
         </button>
         <nav class="hidden lg:block">
            <ul class="items-center gap-9 text-sm text-tertiary lg:flex">
               <li
                  class="lg:relative lg:flex lg:cursor-pointer lg:items-center lg:gap-2 lg:transition-all lg:hover:text-secondary"
                  :class="{ 'text-secondary': shopHover }"
                  @mouseover="shopHover = true">
                  <NuxtLink to="/">SHOP</NuxtLink>
                  <span :class="[shopHover ? arrowActive : arrowDefault]"></span>
               </li>
               <li class="transition-all lg:relative lg:hover:text-secondary">
                  <NuxtLink to="/" @click="scrollToAboutUs">ABOUT US</NuxtLink>
               </li>
            </ul>
            <div
               class="absolute left-0 top-[121px] -z-10 hidden w-full border-t border-border bg-white py-7"
               :class="{ 'lg:block': shopHover }"
               @mouseover="shopHover = true"
               @mouseout="shopHover = false">
               <div class="container flex justify-between">
                  <div class="flex flex-col justify-between py-3 text-tertiary">
                     <p class="relative font-medium leading-none xl:text-lg">
                        <svg class="absolute -top-6 left-0 h-7 w-12 xl:-top-5" fill="none">
                           <use xlink:href="/img/sprite.svg#iconHeaderNav"></use>
                        </svg>
                        Bestsellers
                     </p>
                     <NuxtLink class="text-xs leading-none underline transition-all hover:text-secondary" to="/catalog" @click="shopHover = false">
                        ALL PRODUCTS
                     </NuxtLink>
                  </div>
                  <nav>
                     <ul class="flex justify-end gap-3">
                        <li class="relative overflow-hidden rounded-xl xl:rounded-3xl" @click="shopHover = false">
                           <NuxtLink class="relative" to="/catalog/cosmetics">
                              <span class="absolute left-3 top-3 z-50 font-Giga font-medium text-white xl:left-5 xl:top-5 xl:text-lg">Cosmetics</span>
                              <img
                                 class="block h-[140px] w-44 object-cover transition-all duration-300 hover:scale-125 xl:h-48 xl:w-60"
                                 src="/img/header__link-1.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 h-7 w-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="relative overflow-hidden rounded-xl xl:rounded-3xl" @click="shopHover = false">
                           <NuxtLink class="relative" to="/catalog/bouquets">
                              <span class="absolute left-3 top-3 z-50 font-Giga font-medium text-white xl:left-5 xl:top-5 xl:text-lg">
                                 Soap bouquets
                              </span>
                              <img
                                 class="block h-[140px] w-44 object-cover transition-all duration-300 hover:scale-125 xl:h-48 xl:w-60"
                                 src="/img/header__link-2.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 h-7 w-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="relative overflow-hidden rounded-xl xl:rounded-3xl" @click="shopHover = false">
                           <NuxtLink class="relative" to="/catalog/soap">
                              <span class="absolute left-3 top-3 z-50 font-Giga font-medium text-white xl:left-5 xl:top-5 xl:text-lg">Soap</span>
                              <img
                                 class="block h-[140px] w-44 object-cover transition-all duration-300 hover:scale-125 xl:h-48 xl:w-60"
                                 src="/img/header__link-3.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 h-7 w-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                        <li class="relative overflow-hidden rounded-xl xl:rounded-3xl" @click="shopHover = false">
                           <NuxtLink class="relative" to="/catalog/bombs">
                              <span class="absolute left-3 top-3 z-50 font-Giga font-medium text-white xl:left-5 xl:top-5 xl:text-lg">
                                 Bath bombs
                              </span>
                              <img
                                 class="block h-[140px] w-44 object-cover transition-all duration-300 hover:scale-125 xl:h-48 xl:w-60"
                                 src="/img/header__link-4.png"
                                 alt="picture"
                                 loading="lazy" />
                              <svg class="absolute bottom-3 left-3 h-7 w-7 xl:bottom-5 xl:left-5" fill="none">
                                 <use xlink:href="/img/sprite.svg#iconArrow"></use>
                              </svg>
                           </NuxtLink>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
         </nav>
         <NuxtLink to="/" aria-label="Logo link" class="ml-11 text-tertiary sm:ml-[52px] lg:ml-0 lg:mr-[100px] xl:ml-[20px] xl:mr-0">
            <svg class="h-10 w-24 md:h-11 md:w-32 lg:h-12 lg:w-36">
               <use xlink:href="/img/sprite.svg#logo"></use>
            </svg>
         </NuxtLink>
         <div class="flex items-center gap-4 sm:gap-6">
            <nav class="relative mr-8 hidden xl:block">
               <ul class="relative items-center gap-9 text-sm text-tertiary lg:flex">
                  <li
                     class="absolute -left-[80px] top-0 flex cursor-pointer items-start gap-2 leading-none transition-all hover:text-secondary"
                     :class="{ 'h-[140px]': infoHover }"
                     @mouseover="infoHover = true"
                     @mouseout="infoHover = false">
                     <NuxtLink :class="{ 'text-secondary': infoHover }" to="/">INFO</NuxtLink>
                     <span class="pb-0 pt-[6px]" :class="[infoHover ? arrowActive : arrowDefault]"></span>
                  </li>
                  <li class="leading-none transition-all lg:relative lg:hover:text-secondary">
                     <button type="button" @click="scrollToContact">CONTACTS</button>
                  </li>
               </ul>
               <div
                  class="absolute -left-[140px] top-[70px] hidden h-auto w-fit rounded-lg bg-white px-7 py-4 shadow before:absolute before:-top-5 before:left-1/2 before:h-0 before:w-0 before:-translate-x-1/2 before:border-x-[12px] before:border-b-[20px] before:border-solid before:border-x-transparent before:border-b-white before:bg-transparent before:content-['']"
                  :class="{ 'xl:block': infoHover }"
                  @mouseover="infoHover = true"
                  @mouseout="infoHover = false">
                  <nav>
                     <ul class="flex flex-col gap-2">
                        <li class="text-center transition-all hover:text-secondary">
                           <NuxtLink class="whitespace-nowrap" to="/policy">Privacy policy</NuxtLink>
                        </li>
                        <li class="text-center transition-all hover:text-secondary">
                           <NuxtLink class="whitespace-nowrap" to="/" @click="scrollToAbout">Delivery</NuxtLink>
                        </li>
                     </ul>
                  </nav>
               </div>
            </nav>
            <button class="relative cursor-pointer" type="button" @click="store.updateFavoriteCanvas(true)">
               <svg class="h-7 w-7 text-tertiary transition-all hover:text-secondary" fill="none">
                  <use xlink:href="/img/sprite.svg#iconFavorite"></use>
               </svg>
               <span
                  class="absolute -bottom-3 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs leading-none text-white">
                  0
               </span>
            </button>
            <button class="relative cursor-pointer" type="button" @click="store.updateBacketCanvas(true)">
               <svg class="h-7 w-7 text-tertiary transition-all hover:text-secondary" fill="none">
                  <use xlink:href="/img/sprite.svg#iconBacket"></use>
               </svg>
               <span
                  class="absolute -bottom-3 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs leading-none text-white">
                  0
               </span>
            </button>
         </div>
      </div>
   </header>
</template>

<script setup>
const store = useAppStore();

const arrowDefault =
   "lg:relative lg:block lg:after:content-[''] lg:after:absolute lg:after:block lg:after:w-[8px] lg:after:h-px lg:after:bg-tertiary lg:after:rotate-45 lg:after:transition-all lg:before:content-[''] lg:before:absolute lg:before:right-[-13px] lg:before:block lg:before:w-[8px] lg:before:h-px lg:before:bg-tertiary lg:before:rotate-[130deg] lg:before:transition-all pb-[3px]";

const arrowActive =
   "lg:relative lg:block lg:after:content-[''] lg:after:absolute lg:after:block lg:after:w-[8px] lg:after:h-px lg:after:bg-secondary lg:after:-rotate-45 lg:after:transition-all lg:before:content-[''] lg:before:absolute lg:before:right-[-13px] lg:before:block lg:before:w-[8px] lg:before:h-px lg:before:bg-secondary lg:before:rotate-[-130deg] lg:before:transition-all pb-[3px]";

const shopHover = ref(false);
const infoHover = ref(false);

const scrollToAbout = () => {
   setTimeout(() => {
      document.querySelector("#about").scrollIntoView({
         block: "center",
         behavior: "smooth",
      });
   }, 200);
};

const scrollToAboutUs = () => {
   setTimeout(() => {
      document.querySelector("#aboutUs").scrollIntoView({
         block: "start",
         behavior: "smooth",
      });
   }, 200);
};

const scrollToContact = () => {
   setTimeout(() => {
      document.querySelector("#footer").scrollIntoView({
         block: "center",
         behavior: "smooth",
      });
   }, 200);
};
</script>
