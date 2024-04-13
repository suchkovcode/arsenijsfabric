<template>
   <footer id="footer" class="rounded-tl-[70px] rounded-tr-[70px] bg-tertiary">
      <div class="container py-12 xl:grid xl:grid-cols-12 xl:py-20 2xl:py-24">
         <div class="mb-9 md:mb-12 xl:col-span-2">
            <NuxtLink class="mb-3 block text-white" to="/" aria-label="Logo link">
               <svg class="mx-auto block h-16 w-44 md:h-20 md:w-52 xl:mx-0 xl:hidden">
                  <use xlink:href="/img/sprite.svg#logo"></use>
               </svg>
               <svg class="mx-auto hidden h-16 w-44 md:h-20 md:w-52 xl:mx-0 xl:block xl:w-44">
                  <use xlink:href="/img/sprite.svg#logoFooter"></use>
               </svg>
            </NuxtLink>
            <p class="text-center text-xs text-white opacity-50 xl:text-left">2019-2024 ARSENIJS FABRIC</p>
         </div>
         <div
            class="mx-auto grid max-w-[500px] grid-cols-2 grid-rows-mini-2 justify-items-center gap-8 text-center font-Giga text-white lg:max-w-none lg:grid-cols-3 lg:grid-rows-1 lg:text-left xl:col-span-10 xl:justify-items-start">
            <nav class="col-span-1 row-span-1 lg:col-span-1">
               <span class="mb-4 block font-Beret text-xl uppercase text-white opacity-30 lg:mb-6"> CATALOG </span>
               <ul class="flex flex-col gap-2">
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/catalog/bestsellers">Bestseller</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/catalog/cosmetics">Cosmetics</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/catalog/bouquets">
                        Soap bouquets
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/catalog/soap">Soap</NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/catalog/bombs">Bath bombs</NuxtLink>
                  </li>
               </ul>
            </nav>
            <nav class="col-span-1 row-span-1 lg:col-span-1">
               <span class="mb-4 block font-Beret text-xl uppercase text-white opacity-30 lg:mb-6"> INFO </span>
               <ul class="flex flex-col gap-2">
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/" @click="scrollToAboutUs">
                        About Us
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/" @click="scrollToAbout">
                        Delivery
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink class="font-Giga text-xs uppercase transition-all hover:text-secondary" to="/policy">Privacy policy</NuxtLink>
                  </li>
               </ul>
            </nav>
            <div class="col-span-2 row-span-1 lg:col-span-1">
               <p class="mb-4 block font-Beret text-xl uppercase text-white opacity-30 lg:mb-6">CONTACTS</p>
               <a class="block font-Giga text-xl font-medium transition-all hover:text-secondary" href="mailto:arsenijsfabrica@inbox.lv">
                  arsenijsfabrica@inbox.lv
               </a>
               <a class="mb-6 block font-Giga text-secondary" href="mailto:arsenijsfabrica@inbox.lv"> send message </a>
               <p class="mb-8 text-xs opacity-60">
                  ARSENIJS FABRICA SIA <br />
                  REG.NUMBER. 50203415881 <br />
                  SWEDBANKA LV39HABA0551053035908 <br />
                  PUDIĶA IELA 33 - 1, RĪGA, LV-1006 <br />
               </p>
               <ul class="flex justify-center gap-3 lg:justify-start">
                  <li class="rounded-full border border-[#342470] transition-all hover:border-secondary">
                     <a
                        class="flex h-11 w-11 items-center justify-center"
                        href="https://m.facebook.com/pages/category/Health-Beauty/arsenijs_fabrica-107780641046133/posts/"
                        aria-label="Social link">
                        <svg class="block h-5 w-5 opacity-80" aria-label="Social link">
                           <use xlink:href="/img/sprite.svg#iconFacebook"></use>
                        </svg>
                     </a>
                  </li>
                  <li class="rounded-full border border-[#342470] transition-all hover:border-secondary">
                     <a
                        class="flex h-11 w-11 items-center justify-center"
                        href="https://www.instagram.com/arsenijs_fabrica/?igshid=1gpw8a87oqahf"
                        aria-label="Social link">
                        <svg class="block h-5 w-5 opacity-80">
                           <use xlink:href="/img/sprite.svg#iconInstagram"></use>
                        </svg>
                     </a>
                  </li>
                  <li class="rounded-full border border-[#342470] transition-all hover:border-secondary">
                     <a
                        class="flex h-11 w-11 items-center justify-center"
                        href="https://www.tiktok.com/@arsenijsfabrica?_t=8UzCTnU8AXV&_r=1"
                        aria-label="Social link">
                        <svg class="block h-5 w-5 opacity-80">
                           <use xlink:href="/img/sprite.svg#iconTikTok"></use>
                        </svg>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div class="w-full bg-[#2b1e59] py-3">
         <div class="container flex flex-col gap-2 text-center md:flex-row md:justify-between">
            <p class="text-xs text-white opacity-70">© Copyrighted. Copying materials is prohibited</p>
            <span class="cursor-pointer">
               <a class="text-xs text-white opacity-70 transition-all hover:text-secondary" href="https://github.com/suchkovcode/"> Develop </a>
            </span>
         </div>
      </div>
   </footer>
   <canvas-menu />
   <canvas-backet />
   <canvas-favorite />
</template>

<script setup>
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
