<template>
   <div
      class="favorite fixed -right-full top-0 z-50 block h-screen w-full max-w-[350px] bg-tertiary transition-[right] duration-500 lg:hidden"
      :class="{ 'right-0 overflow-hidden': store.isActiveMenu }">
      <canvas-header class="text-white" @close-canvas="store.updateMenuCanvas($event)"> Menu </canvas-header>
      <div class="flex h-[550px] w-full flex-col justify-between gap-8 p-6 lg:p-8">
         <nav>
            <ul class="flex flex-col gap-4">
               <li class="cursor-pointer">
                  <span
                     class="menu__drobdown-title relative font-Giga uppercase text-white transition-all before:absolute before:-right-5 before:top-1 before:block before:rounded-[1px] before:border-l-4 before:border-r-4 before:border-t-[6px] before:border-l-transparent before:border-r-transparent before:border-t-secondary before:content-[''] hover:text-secondary"
                     :class="{ active: isActiveCatalog }"
                     @click="isActiveCatalog = !isActiveCatalog">
                     SHOP
                  </span>
                  <ul class="menu__drobdown-submenu hidden flex-col gap-3 p-3">
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> All product </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Cosmetics </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Soap bouquets </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Soap </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Bath bombs </NuxtLink>
                     </li>
                  </ul>
               </li>
               <li>
                  <NuxtLink class="relative font-Giga uppercase text-white transition-all hover:text-secondary" to="/"> ABOUT US </NuxtLink>
               </li>
               <li class="cursor-pointer">
                  <span
                     class="menu__drobdown-title relative font-Giga uppercase text-white transition-all before:absolute before:-right-5 before:top-1 before:block before:rounded-[1px] before:border-l-4 before:border-r-4 before:border-t-[6px] before:border-l-transparent before:border-r-transparent before:border-t-secondary before:content-[''] hover:text-secondary"
                     :class="{ active: isActiveClient }"
                     @click="isActiveClient = !isActiveClient">
                     INFO
                  </span>
                  <ul class="menu__drobdown-submenu hidden flex-col gap-3 p-3">
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Delivery </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink class="text-white transition-all hover:text-secondary" to="/"> Privacy policy </NuxtLink>
                     </li>
                  </ul>
               </li>
               <li>
                  <span class="relative cursor-pointer font-Giga uppercase text-white transition-all hover:text-secondary"> CONTACTS </span>
               </li>
            </ul>
         </nav>
         <div class="flex flex-col gap-5">
            <a class="text-secondary" href="mailto:arsenijsfabrica@inbox.lv">arsenijsfabrica@inbox.lv</a>
            <p class="text-sm text-white">
               ALL YOU NEED TO GLOWY <br />
               SKIN & BODY
            </p>
            <ul class="flex gap-3 lg:justify-start">
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
</template>

<script setup>
const store = useAppStore();
const isActiveCatalog = ref(false);
const isActiveClient = ref(false);
</script>
