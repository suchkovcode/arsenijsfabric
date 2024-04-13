<template>
   <footer id="footer" class="rounded-tr-[70px] rounded-tl-[70px] bg-tertiary">
      <div class="container py-12 xl:grid xl:grid-cols-12 xl:py-20 2xl:py-24">
         <div class="mb-9 md:mb-12 xl:col-span-2">
            <NuxtLink class="block mb-3 text-white" to="/" aria-label="Logo link">
               <svg class="block w-44 h-16 mx-auto md:w-52 md:h-20 xl:mx-0 xl:hidden">
                  <use xlink:href="/img/sprite.svg#logo"></use>
               </svg>
               <svg class="hidden w-44 h-16 mx-auto md:w-52 md:h-20 xl:mx-0 xl:block xl:w-44">
                  <use xlink:href="/img/sprite.svg#logoFooter"></use>
               </svg>
            </NuxtLink>
            <p class="text-xs text-center text-white opacity-50 xl:text-left">2019 ARSENIJS FABRIC</p>
         </div>
         <div
            class="text-white font-Giga grid grid-cols-2 grid-rows-mini-2 justify-items-center gap-8 text-center max-w-[500px] mx-auto lg:max-w-none lg:grid-cols-3 lg:grid-rows-1 lg:text-left xl:col-span-10 xl:justify-items-start">
            <nav class="col-span-1 row-span-1 lg:col-span-1">
               <span class="block mb-4 uppercase font-Beret text-xl text-white opacity-30 lg:mb-6"> CATALOG </span>
               <ul class="flex flex-col gap-2">
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Bestseller</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Cosmetics</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Soap bouquets</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Soap</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Bath bombs</NuxtLink>
                  </li>
               </ul>
            </nav>
            <nav class="col-span-1 row-span-1 lg:col-span-1">
               <span class="block mb-4 uppercase font-Beret text-xl text-white opacity-30 lg:mb-6"> INFO </span>
               <ul class="flex flex-col gap-2">
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">About Us</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Delivery</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="uppercase text-xs font-Giga hover:text-secondary transition-all" to="/">Privacy policy</NuxtLink>
                  </li>
               </ul>
            </nav>
            <div class="col-span-2 row-span-1 lg:col-span-1">
               <p class="block mb-4 uppercase font-Beret text-xl text-white opacity-30 lg:mb-6">CONTACTS</p>
               <a class="block font-Giga font-medium text-xl hover:text-secondary transition-all" href="mailto:arsenijsfabrica@inbox.lv">
                  arsenijsfabrica@inbox.lv
               </a>
               <a class="block mb-6 font-Giga text-secondary" href="mailto:arsenijsfabrica@inbox.lv"> send message </a>
               <p class="opacity-60 text-xs mb-8">
                  ARSENIJS FABRICA SIA <br />
                  REG.NUMBER. 50203415881 <br />
                  SWEDBANKA LV39HABA0551053035908 <br />
                  PUDIĶA IELA 33 - 1, RĪGA, LV-1006 <br />
               </p>
               <ul class="flex justify-center gap-3 lg:justify-start">
                  <li class="border border-[#342470] rounded-full hover:border-secondary transition-all">
                     <a
                        class="flex justify-center items-center w-11 h-11"
                        href="https://m.facebook.com/pages/category/Health-Beauty/arsenijs_fabrica-107780641046133/posts/"
                        aria-label="Social link">
                        <svg class="block w-5 h-5 opacity-80" aria-label="Social link">
                           <use xlink:href="/img/sprite.svg#iconFacebook"></use>
                        </svg>
                     </a>
                  </li>
                  <li class="border border-[#342470] rounded-full hover:border-secondary transition-all">
                     <a
                        class="flex justify-center items-center w-11 h-11"
                        href="https://www.instagram.com/arsenijs_fabrica/?igshid=1gpw8a87oqahf"
                        aria-label="Social link">
                        <svg class="block w-5 h-5 opacity-80">
                           <use xlink:href="/img/sprite.svg#iconInstagram"></use>
                        </svg>
                     </a>
                  </li>
                  <li class="border border-[#342470] rounded-full hover:border-secondary transition-all">
                     <a
                        class="flex justify-center items-center w-11 h-11"
                        href="https://www.tiktok.com/@arsenijsfabrica?_t=8UzCTnU8AXV&_r=1"
                        aria-label="Social link">
                        <svg class="block w-5 h-5 opacity-80">
                           <use xlink:href="/img/sprite.svg#iconTikTok"></use>
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="bg-[#2b1e59] w-full py-3">
         <div class="container flex flex-col gap-2 text-center md:flex-row md:justify-between">
            <p class="text-xs text-white opacity-70">© Copyrighted. Copying materials is prohibited</p>
            <span class="cursor-pointer">
               <a class="text-xs text-white opacity-70 hover:text-secondary transition-all" href="https://github.com/suchkovcode/"> Develop </a>
               <span class="text-xs text-white opacity-70"> |</span>
               <a class="text-xs text-white opacity-70 hover:text-secondary transition-all" href="https://mssg.me/d.purple"> Design </a>
            </span>
         </div>
      </div>
   </footer>
   <canvas-favorite />
   <canvas-backet />
   <canvas-menu />
</template>
