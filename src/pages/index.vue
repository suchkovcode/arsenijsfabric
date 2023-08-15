<template>
   <section class="relative bg-primary font-Giga overflow-hidden pt-20 md:pt-24 lg:pt-36 xl:pt-44">
      <div class="container pt-32 lg:pt-40 xl:pt-52">
         <svg
            class="absolute top-[-350px] left-[-340px] z-[-0] w-[700px] h-[700px] sm:top-[-300px] sm:left-[-300px] md:w-[800px] md:h-[800px]"
            fill="none">
            <use xlink:href="@/assets/img/sprite.svg#indexStain-1"></use>
         </svg>
         <div class="relative lg:flex">
            <div>
               <h1
                  class="relative z-[1] block w-fit font-Beret text-[48px] leading-tight text-white font-bold text-center uppercase mx-auto mb-6 sm:text-[54px] md:text-[68px] md:leading-none lg:text-left lg:mx-0 lg:mb-8 2xl:text-[72px]">
                  All you need <br />
                  to glowy <br />
                  skin & body
                  <svg class="absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-12 sm:w-36 sm:h-16 sm:-top-12 lg:translate-x-0 lg:left-11" fill="none">
                     <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-1"></use>
                  </svg>
                  <svg class="absolute -top-16 -right-4 w-8 h-8 sm:-right-12 md:-right-20 lg:-right-14" fill="none">
                     <use xlink:href="@/assets/img/sprite.svg#indexIcon-1"></use>
                  </svg>
               </h1>
               <p class="relative z-[1]font-Giga text-white text-center leading-snug max-w-[350px] mx-auto mb-6 lg:mb-8 lg:mx-0 lg:text-left">
                  Our natural and perfects products. We are here to show you that natural is perfect. <br />
                  This is what our products are.
               </p>
               <NuxtLink
                  class="flex justify-center items-center w-40 h-20 bg-white text-tertiary rounded-[55px] font-bold border border-tertiary hover:bg-secondary hover:text-white transition-all mx-auto mb-10 lg:mx-0 lg:mb-20 xl:mb-24"
                  to="/">
                  <span>SHOP NOW</span>
               </NuxtLink>
            </div>
            <div class="relative">
               <nuxt-picture
                  src="/index__img-1.png"
                  alt="picture"
                  loading="lazy"
                  :img-attrs="{
                     class: 'relative block top-1 z-[1] w-[180%] h-auto max-w-[800px] translate-x-[-31%] md:translate-x-[-20%] lg:translate-x-0 lg:absolute lg:-left-40 lg:w-[800px] lg:-top-28 xl:-left-5 xl:-top-40 xl:w-[900px] xl:max-w-[900px] 2xl:left-10',
                  }" />
               <svg
                  class="absolute bottom-[-280px] left-[-100px] z-0 w-[600px] h-[600px] sm:left-[-20px] sm:bottom-[-150px] md:left-[30px] md:w-[700px] md:h-[700px] md:bottom-[-300px] xl:left-40 2xl:left-64 2xl:bottom-[-250px]"
                  fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#indexStain-2"></use>
               </svg>
            </div>
         </div>
      </div>
   </section>
   <section class="relative bg-violet pb-12 lg:pb-14 xl:pb-16">
      <div class="container">
         <div
            class="grid grid-cols-2 items-center justify-items-center gap-6 max-w-[400px] mx-auto py-10 lg:py-12 xl:py-13 md:grid-cols-4 md:max-w-none">
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-1"></use>
               </svg>
               <span class="text-center lg:text-left leading-none">
                  Natural Ingredients
               </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-2"></use>
               </svg>
               <span class="text-center lg:text-left leading-none">
                  Cruelty free
               </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-3"></use>
               </svg>
               <span class="text-center lg:text-left leading-none">
                  Handmade
               </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-4"></use>
               </svg>
               <span class="text-center lg:text-left leading-none">
                  Vegan cosmetics
               </span>
            </div>
         </div>
         <nav>
            <ul class="grid grid-cols-12 grid-rows-mini-2 gap-3 md:gap-4 xl:gap-5">
               <li
                  class="overflow-hidden col-span-7 relative h-[200px] rounded-3xl sm:h-[250px] md:h-[300px] lg:h-[355px] lg:col-span-5 lg:row-span-2 xl:h-[460px]">
                  <NuxtLink class="relative" to="/">
                     <span class="absolute top-3 left-3 z-10 text-white font-Giga eading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret uppercase md:text-xl xl:text-2xl">Cosmetics</span>
                     </span>
                     <nuxt-img
                        class="block w-full h-full hover:scale-125 transition-all duration-300 object-cover"
                        src="/header__link-1.png"
                        alt="picture"
                        loading="lazy" />
                     <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                        <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                     </svg>
                  </NuxtLink>
               </li>
               <li class="overflow-hidden col-span-5 relative h-[200px] rounded-3xl sm:h-[250px] md:h-[300px] lg:h-full lg:col-span-3 lg:row-span-2">
                  <NuxtLink class="relative" to="/">
                     <span
                        class="absolute top-3 left-3 z-10 w-[85%] text-white font-Giga leading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret relative flex justify-between items-center uppercase md:text-xl xl:text-2xl">
                           Soap bouquets
                           <svg class="hidden w-6 h-6 md:block" fill="none">
                              <use xlink:href="@/assets/img/sprite.svg#iconHand"></use>
                           </svg>
                        </span>
                     </span>
                     <nuxt-img
                        class="block w-full h-full hover:scale-125 transition-all duration-300 object-cover"
                        src="/product__item-2.png"
                        alt="picture"
                        loading="lazy" />
                     <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                        <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                     </svg>
                  </NuxtLink>
               </li>
               <li
                  class="overflow-hidden col-span-6 relative h-[120px] rounded-3xl sm:h-[180px] md:h-[200px] lg:h-[170px] lg:col-span-4 lg:row-span-1 xl:h-[220px]">
                  <NuxtLink class="relative" to="/">
                     <span
                        class="absolute top-3 left-3 z-10 w-[85%] text-white font-Giga leading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret relative flex justify-between items-centeruppercase md:text-xl xl:text-2xl">
                           Soap
                           <svg class="hidden w-6 h-6 md:block" fill="none">
                              <use xlink:href="@/assets/img/sprite.svg#iconHand"></use>
                           </svg>
                        </span>
                     </span>
                     <nuxt-img
                        class="block w-full h-full hover:scale-125 transition-all duration-300 object-cover"
                        src="/header__link-3.png"
                        alt="picture"
                        loading="lazy" />
                     <svg class="absolute bottom-3 left-3 w-7 h-7 xl:bottom-5 xl:left-5" fill="none">
                        <use xlink:href="@/assets/img/sprite.svg#iconArrow"></use>
                     </svg>
                  </NuxtLink>
               </li>
               <li
                  class="overflow-hidden col-span-6 relative h-[120px] rounded-3xl sm:h-[180px] md:h-[200px] lg:h-[170px] lg:col-span-4 lg:row-span-1 xl:h-[220px]">
                  <NuxtLink class="relative" to="/">
                     <span class="absolute top-3 left-3 z-10 text-white font-Giga eading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret uppercase md:text-xl xl:text-2xl">Bath bombs</span>
                     </span>
                     <nuxt-img
                        class="block w-full h-full hover:scale-125 transition-all duration-300 object-cover"
                        src="/header__link-4.png"
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
   </section>
</template>
