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
                  class="flex justify-center items-center w-40 h-20 bg-white text-tertiary rounded-[55px] font-bold border border-tertiary hover:bg-secondary hover:text-white transition-all mx-auto mb-10 lg:mx-0 lg:mb-20 xl:mb-24 2xl:mb-28"
                  to="/">
                  <span>SHOP NOW</span>
               </NuxtLink>
            </div>
            <div class="relative">
               <nuxt-picture
                  src="/index__img-1.png"
                  alt="picture"
                  loading="lazy"
                  width="750"
                  height="580"
                  :img-attrs="{
                     class: 'relative block top-1 z-[1] w-[180%] h-auto max-w-[800px] translate-x-[-31%] md:translate-x-[-20%] lg:translate-x-0 lg:absolute lg:-left-40 lg:w-[800px] lg:-top-28 xl:-left-5 xl:-top-40 xl:w-[900px] xl:max-w-[900px] 2xl:left-10 2xl:-top-[150px]',
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
   <section class="relative bg-violet pb-12 lg:pb-14 xl:pb-12">
      <div class="container">
         <div
            class="grid grid-cols-2 items-center justify-items-center gap-6 max-w-[400px] mx-auto py-10 lg:py-12 xl:py-13 md:grid-cols-4 md:max-w-none">
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-1"></use>
               </svg>
               <span class="text-center lg:text-left leading-none"> Natural Ingredients </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-2"></use>
               </svg>
               <span class="text-center lg:text-left leading-none"> Cruelty free </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-3"></use>
               </svg>
               <span class="text-center lg:text-left leading-none"> Handmade </span>
            </div>
            <div class="inline-flex flex-col items-center gap-2 w-28 lg:flex-row lg:w-auto lg:gap-3">
               <svg class="w-12 h-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconProduct-4"></use>
               </svg>
               <span class="text-center lg:text-left leading-none"> Vegan cosmetics </span>
            </div>
         </div>
         <nav>
            <ul class="grid grid-cols-12 grid-rows-mini-2 gap-3 md:gap-4 xl:gap-5">
               <li
                  class="overflow-hidden col-span-7 relative h-[200px] rounded-3xl sm:h-[250px] md:h-[300px] lg:h-[355px] lg:col-span-5 lg:row-span-2 xl:h-[460px]">
                  <NuxtLink class="relative" to="/">
                     <h2 class="absolute top-3 left-3 z-10 text-white font-Giga eading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret uppercase md:text-xl xl:text-2xl">Cosmetics</span>
                     </h2>
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
                     <h2
                        class="absolute top-3 left-3 z-10 w-[85%] text-white font-Giga leading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret relative flex justify-between items-center uppercase md:text-xl xl:text-2xl">
                           Soap bouquets
                           <svg class="hidden w-6 h-6 md:block" fill="none">
                              <use xlink:href="@/assets/img/sprite.svg#iconHand"></use>
                           </svg>
                        </span>
                     </h2>
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
                     <h2
                        class="absolute top-3 left-3 z-10 w-[85%] text-white font-Giga leading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret relative flex justify-between items-centeruppercase md:text-xl xl:text-2xl">
                           Soap
                           <svg class="hidden w-6 h-6 md:block" fill="none">
                              <use xlink:href="@/assets/img/sprite.svg#iconHand"></use>
                           </svg>
                        </span>
                     </h2>
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
                     <h2 class="absolute top-3 left-3 z-10 text-white font-Giga eading-tight sm:top-5 sm:left-5 xl:top-5 xl:left-5 xl:text-lg">
                        <span class="inline-block font-normal text-sm mb-[2px]">The</span> <br />
                        <span class="font-Beret uppercase md:text-xl xl:text-2xl">Bath bombs</span>
                     </h2>
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
   <section class="py-16 sm:py-20 md:py-24 lg:py-28">
      <div class="container">
         <div class="mb-8 sm:mb-10 md:mb-12 lg:mb-14 lg:flex lg:justify-between lg:items-center">
            <h2 class="relative text-center lg:text-left">
               <svg class="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-9 lg:translate-x-0 lg:left-10" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-5"></use>
               </svg>
               <span class="font-Beret text-primary text-[50px] leading-none lg:text-[55px]"> Bestsellers </span>
            </h2>
            <nuxt-link
               class="hidden lg:flex justify-center items-center w-40 h-20 font-Beret bg-orange text-secondary rounded-[55px] uppercase hover:bg-secondary hover:border hover:border-tertiary hover:text-white transition-all"
               to="/">
               ALL PRODUCTS
            </nuxt-link>
         </div>
         <app-catalog class="mb-10" :data-item="products" />
         <button
            class="flex justify-center items-center w-full h-11 max-w-[180px] mx-auto rounded-[55px] border border-tertiary font-Beret bg-secondary text-white tracking-wide"
            type="button">
            Load more
         </button>
      </div>
   </section>
   <section class="overflow-hidden relative bg-violet py-16 lg:py-20 xl:py-24 2xl:pt-32">
      <svg
         class="absolute -top-72 -left-[330px] block w-[600px] h-[820px] rotate-12 sm:-left-[280px] sm:w-[700px] lg:-left-[200px] lg:top-[-350px] xl:w-[700px] 2xl:-left-[50px] 2xl:top-[-300px] 2xl:rotate-0">
         <use xlink:href="@/assets/img/sprite.svg#about-bg"></use>
      </svg>
      <div class="relative container z-20 mb-16 lg:mb-20 xl:mb-28">
         <div class="lg:flex">
            <div class="mb-7 text-center lg:text-left lg:mb-0">
               <h2 class="relative font-Beret text-[50px] text-primary leading-none mb-2">
                  <svg class="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-9 lg:translate-x-0 lg:left-10" fill="none">
                     <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-3"></use>
                  </svg>
                  ARSENIJS FABRICA
               </h2>
               <div class="text-sm mx-auto text-tertiary opacity-60 leading-snug font-Giga tracking-wide sm:text-lg sm:max-w-[460px]">
                  <p class="mb-5 xl:mb-10">is a natural and modern cosmetics.</p>
                  <p class="mb-5">
                     The story on which the Arsenijs fabrica brand is based is about a 12-year-old redheaded boy, who in the evenings on the first
                     floor of his house was doing his favorite thing - making soap!
                  </p>
                  <p>Every night he dreamed that one day he would have his own factory.</p>
               </div>
            </div>
            <nuxt-img
               class="block w-full max-w-[440px] mx-auto h-auto mb-12 sm:mb-16 lg:mb-0 lg:mx-0 lg:ml-auto xl:max-w-[560px] xl:-mt-16"
               src="/about__hero.png"
               loading="lazy"
               alt="picture"
               width="1030"
               height="1190" />
         </div>
         <div class="justify-center gap-6 sm:flex lg:justify-start lg:-mt-28 xl:-mt-48 xl:mb-5">
            <div class="relative">
               <svg
                  class="absolute -top-14 left-1/2 -translate-x-1/2 w-20 h-20 rotate-[26deg] sm:left-[30%] sm:-top-12 sm:rotate-[20deg]"
                  fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#indexTitleIcon-4"></use>
               </svg>
               <nuxt-img class="hidden w-40 h-40 sm:block" src="/yana-bruk__ava.png" alt="picture" loading="lazy" width="330" height="330" />
            </div>
            <div>
               <p class="hidden mb-2 text-xs font-medium text-[#8b91a6] sm:block">@yanaabruk</p>
               <nuxt-img
                  class="block w-52 h-auto mx-auto mb-5 sm:hidden"
                  src="/about__logo.png"
                  alt="picture"
                  loading="lazy"
                  width="400"
                  height="100" />
               <nuxt-img
                  class="hidden w-52 h-auto mx-auto mb-5 sm:block sm:mx-0 md:w-56"
                  src="/about__logo--left.png"
                  alt="picture"
                  loading="lazy"
                  width="400"
                  height="100" />
               <p
                  class="text-sm text-center opacity-60 text-tertiary leading-snug font-Giga tracking-wide max-w-[300px] mx-auto sm:text-left sm:mx-0 md:text-base md:max-w-[350px]">
                  this is the first and unique collaboration in Latvia with a famous blogger and influencer Yana Bruk
               </p>
            </div>
         </div>
      </div>
      <div class="relative container">
         <div
            class="overflow-hidden relative flex justify-center items-center w-full p-5 bg-primary rounded-[35px] text-white text-center max-w-[480px] h-[500px] mx-auto sm:max-w-[640px] lg:max-w-none">
            <svg class="absolute -top-9 -left-3 w-[150px] sm:w-[180px] sm:-top-7 sm:-left-10 md:w-[230px] md:-top-3 md:-left-16 lg:w-[260px] lg:-top-1 lg:-left-2" fill="none">
               <use xlink:href="@/assets/img/sprite.svg#about-img-1"></use>
            </svg>
            <svg class="absolute -top-8 -right-4 z-10 w-[150px] md:w-[250px] md:-right-20 md:-top-2 lg:w-[300px] lg:-right-12 lg:top-10" fill="none">
               <use xlink:href="@/assets/img/sprite.svg#about-img-2"></use>
            </svg>

            <nuxt-img class="hidden sm:block absolute z-0 top-16 -right-20 opacity-25 w-full md:-right-40 md:top-12 lg:max-w-[600px] lg:-right-24 xl:-right-20" src="about__hero-1.png" alt="picture" loading="lazy" />

            <div class="relative z-20">
               <h2 class="mb-5 font-Beret text-[50px] leading-none md:text-[60px]">
                  GREENING <br />
                  THE PLANET
               </h2>
               <p class="mb-5 font-Giga lg:text-lg">
                  Every 5% we donate to charity <br />
                  for the greening of the planet
               </p>
               <nuxt-link
                  class="flex justify-center items-center w-40 h-20 bg-secondary text-white rounded-[55px] font-bold border border-tertiary hover:bg-white hover:text-primary transition-all mx-auto text-sm"
                  to="/">
                  SHOP NOW
               </nuxt-link>
            </div>

            <svg class="absolute -left-12 bottom-0 md:w-[300px] md:h-[210px] lg:w-[350px] lg:h-[260px] lg:-left-10 xl:h-[290px] xl:-left-0" fill="none">
               <use xlink:href="@/assets/img/sprite.svg#about-img-3"></use>
            </svg>
            <svg class="hidden absolute left-7 -bottom-10 sm:block md:-bottom-4 md:left-16 lg:w-[200px] lg:h-[180px] lg:left-40 xl:left-60 xl:h-[220px]" fill="none">
               <use xlink:href="@/assets/img/sprite.svg#about-img-5"></use>
            </svg>
            <svg class="absolute right-10 -bottom-10 w-[100px] md:w-[150px] md:-bottom-0 lg:w-[220px] lg:h-[170px] xl:h-[190px]" fill="none">
               <use xlink:href="@/assets/img/sprite.svg#about-img-4"></use>
            </svg>
         </div>
      </div>
   </section>
   <section class="pt-14 sm:pt-24">
      <div class="container">
         <h2 class="mb-9 font-Beret text-primary text-[50px] leading-none text-center md:mb-12 lg:mb-16 lg:text-left">
            <span>
               We work
               <svg class="inline w-14 h-14 rotate-12" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconHeath"></use>
               </svg>
            </span>
            <span> with love</span>
         </h2>
         <div
            class="flex flex-col items-center gap-5 mb-8 sm:grid sm:grid-cols-2 sm:gap-7 sm:justify-items-center lg:grid-cols-4 lg:justify-items-start lg:mb-20">
            <div class="flex flex-col gap-3 text-center max-w-[280px] text-tertiary sm:max-w-[210px] md:max-w-[250px] lg:text-left">
               <svg class="block w-9 h-9 mx-auto lg:m-0" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconWork-1"></use>
               </svg>
               <h3 class="font-semibold text-xl">Quality</h3>
               <p class="opacity-70">We are the #1 firm by handmade soap and value to our clients. We like what we do.</p>
            </div>
            <div class="flex flex-col gap-3 text-center max-w-[280px] text-tertiary sm:max-w-[210px] md:max-w-[250px] lg:text-left">
               <svg class="block w-9 h-9 mx-auto lg:m-0" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconWork-2"></use>
               </svg>
               <h3 class="font-semibold text-xl">Efficiency</h3>
               <p class="opacity-70">We take care about our clients time. Just call us — and we will help you with all the questions.</p>
            </div>
            <div class="flex flex-col gap-3 text-center max-w-[280px] text-tertiary sm:max-w-[210px] md:max-w-[250px] lg:text-left">
               <svg class="block w-9 h-9 mx-auto lg:m-0" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconWork-3"></use>
               </svg>
               <h3 class="font-semibold text-xl">Experience</h3>
               <p class="opacity-70">All our professionals have more than 5 years experiences. They use their knowledge in work.</p>
            </div>
            <div class="flex flex-col gap-3 text-center max-w-[280px] text-tertiary sm:max-w-[210px] md:max-w-[250px] lg:text-left">
               <svg class="block w-9 h-9 mx-auto lg:m-0" fill="none">
                  <use xlink:href="@/assets/img/sprite.svg#iconWork-4"></use>
               </svg>
               <h3 class="font-semibold text-xl">Presents</h3>
               <p class="opacity-70">We like to make people happy. We ask our clients about their wishes and prepare cool presents.</p>
            </div>
         </div>
         <hr class="mb-9 border-secondary opacity-50 md:mb-12 lg:mb-20" />
         <div
            class="flex flex-col items-center gap-9 sm:flex-row sm:justify-center md:grid md:grid-cols-2 md:justify-items-center lg:justify-items-start">
            <div
               class="flex flex-col items-center gap-3 max-w-[230px] text-center text-tertiary sm:max-w-[250px] lg:max-w-[360px] lg:flex-row lg:text-left xl:max-w-none">
               <svg class="block w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2248_49)">
                     <mask id="mask0_2248_49" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <path
                           d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
                           fill="white"></path>
                     </mask>
                     <g mask="url(#mask0_2248_49)">
                        <path
                           d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
                           fill="#BFE8FB"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M98.4721 138.998C97.9466 136.029 97.4648 133.052 97.027 130.068C96.8192 128.652 96.6165 127.234 96.4342 125.814C96.3065 124.819 96.1121 123.682 96.7888 122.945C97.741 121.907 98.6059 121.02 98.7225 119.534C98.8321 118.136 98.3596 116.612 98.0642 115.256C97.4446 112.41 96.6733 109.6 95.821 106.816C94.9552 103.988 94.0057 101.187 93.0426 98.3906C92.1422 95.7763 91.2767 93.1384 90.1039 90.6301C87.8782 85.87 84.1129 82.345 79.4594 79.9912C78.302 79.4058 75.9414 77.3161 74.7323 76.8482C73.6207 76.418 73.6247 77.6742 72.5307 77.201C71.6561 76.8228 70.8417 76.3184 70.352 75.4736C69.8203 74.5564 68.487 73.2734 68.284 72.2057C67.8539 69.9426 68.3198 68.0164 66.7052 66.313C65.2718 64.8004 63.3452 63.7642 61.3517 63.2079C56.9663 61.9843 51.1178 62.8398 48.4719 66.9164C47.2081 68.8632 46.7665 71.2163 45.0613 72.8052C43.5722 74.1925 43.9055 75.1409 41.9769 75.8559C41.8676 75.8965 38.9071 75.2612 38.7978 75.3018C36.688 74.8502 34.6715 76.1145 32.7359 76.8482C29.8503 77.9418 27.1029 79.3653 24.5218 81.057C19.3172 84.4685 14.8596 88.8983 11.1846 93.9111C7.47922 98.9652 4.60424 104.63 2.55716 110.551C2.06003 111.989 1.61348 113.444 1.21961 114.914C0.999138 115.737 0.763543 116.59 1.03199 117.432C1.25155 118.121 1.73995 118.634 2.31348 119.047C3.09093 119.608 4.65039 119.972 4.62002 121.099C4.59681 121.956 4.30619 122.858 4.16434 123.705C3.9955 124.714 3.85678 125.728 3.71805 126.741C3.08702 131.352 2.59588 135.988 2.37867 140.638C2.16485 145.216 1.98741 149.888 2.30488 154.465C2.32587 154.767 2.41583 155.044 2.56094 155.278C2.42548 155.33 2.41505 155.583 2.58363 155.619C2.70175 155.644 2.81961 155.669 2.93774 155.694C3.18311 155.879 3.48911 155.993 3.84126 156.004C4.07999 156.012 4.31858 156.023 4.55704 156.035C7.07348 156.561 9.58953 157.058 12.1388 157.435C15.2377 157.892 18.3456 158.265 21.4632 158.569C27.8694 159.192 34.2251 158.985 40.6397 158.649C47.0445 158.314 53.4454 158.235 59.8568 158.402C66.2738 158.569 72.6884 158.848 79.1068 158.963C86.2775 159.09 93.4373 158.894 100.588 158.324C101.568 158.246 102.175 157.466 101.981 156.492C100.823 150.656 99.5096 144.859 98.4721 138.998Z"
                           fill="white"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M36.7975 75.1582C37.4606 75.1293 38.1367 75.2367 38.7983 75.3018C38.8559 75.3074 38.8778 75.3963 38.8129 75.4099C37.6289 75.6573 36.458 75.9958 35.2952 76.3396L34.7974 76.487C33.4861 76.875 32.2134 77.2753 30.944 77.7928C28.4141 78.8243 26.0114 80.2165 23.8 81.8159C15.2847 87.975 9.12173 97.2999 5.23253 106.954C4.17633 109.576 3.28141 112.263 2.5565 114.996C2.38023 115.661 2.21439 116.328 2.05715 116.997C2.011 117.194 1.80982 117.696 1.92012 117.897C2.01765 118.075 2.39679 118.184 2.57293 118.277L3.1676 118.585C4.32757 119.183 6.25976 120.166 6.45352 120.262L6.75572 120.411C11.6985 122.835 16.9797 124.891 22.5419 125.033L22.5854 124.558C22.8334 121.931 23.1588 119.29 23.8691 116.744C23.9073 116.607 24.0814 116.653 24.0973 116.775C24.493 119.789 24.3665 122.827 24.2285 125.855C23.984 131.219 23.6594 136.579 23.3708 141.941C23.2264 144.623 23.0397 147.303 22.8711 149.983C22.7022 152.669 22.6476 155.42 22.2621 158.084C22.1762 158.677 21.481 159 20.9545 158.938C20.372 158.868 19.9239 158.355 19.9211 157.767C19.9141 156.215 20.109 154.645 20.2174 153.097C20.3202 151.626 20.4307 150.156 20.5438 148.686C20.9574 143.321 21.4331 137.963 21.8732 132.601C22.0291 130.699 22.1975 128.798 22.3709 126.898C16.4787 126.708 10.974 124.525 5.72262 121.974C5.64661 123.701 5.46304 125.424 5.28533 127.143C4.78924 131.941 4.35182 136.737 4.02444 141.55C3.85912 143.981 3.73878 146.415 3.63395 148.849C3.58245 150.045 3.54047 151.242 3.50827 152.439C3.49749 152.838 3.48775 153.237 3.47914 153.636L3.46123 154.55C3.44657 155.129 3.38772 155.666 2.90057 156.087C2.40579 156.515 1.73746 156.538 1.24776 156.087C0.592216 155.483 0.708123 154.661 0.727549 153.85C0.743716 153.166 0.763142 152.482 0.785698 151.798C0.830939 150.43 0.888697 149.062 0.958972 147.696C1.20488 142.917 1.69622 138.158 2.33834 133.418L2.589 131.588C3.05709 128.186 3.571 124.707 4.6174 121.431C4.20997 121.228 3.80371 121.024 3.39901 120.819C2.68114 120.455 1.9389 120.114 1.24111 119.712C0.687523 119.394 0.210076 118.957 0.055968 118.313C-0.115901 117.595 0.146913 116.81 0.32151 116.109L0.336674 116.048C0.507861 115.342 0.692216 114.64 0.886742 113.941C1.67553 111.105 2.6509 108.325 3.79236 105.613C6.0779 100.183 9.02798 95.0244 12.6315 90.3601C15.8752 86.1616 19.707 82.3541 24.1981 79.4985C26.3937 78.1023 28.7334 76.956 31.2079 76.1455C32.3645 75.7667 33.6229 75.4373 34.8339 75.3016C35.4871 75.2286 36.1412 75.1867 36.7975 75.1582ZM48.5464 66.5537C49.3344 65.7072 50.9 66.5832 50.5216 67.7041C49.6317 70.3413 48.2144 72.7468 46.0027 74.4797C43.9237 76.1088 41.4445 77.1667 38.7746 76.9409C38.754 76.9391 38.7362 76.9339 38.7204 76.9264L38.9505 77.2386C40.7568 79.683 42.6625 82.0936 44.9593 84.0916C49.639 88.1624 56.0106 90.3581 62.1632 88.7962C67.0039 87.5674 71.2685 83.7381 72.5228 78.858C72.343 78.9386 72.1293 78.9661 71.8948 78.9151C70.8912 78.6971 69.8977 77.6413 69.2505 76.8843C68.5504 76.0653 68.0036 75.181 67.6028 74.1814C66.8693 72.352 66.6341 69.9966 67.6357 68.2244C67.7593 68.0059 68.0443 68.1284 68.0685 68.3417L68.1067 68.6745C68.2998 70.3354 68.5403 71.9419 69.323 73.456C69.7061 74.1968 70.1653 74.9199 70.7242 75.5404C71.0233 75.8723 71.3476 76.1895 71.6976 76.4678C72.0388 76.739 72.4516 76.9351 72.7574 77.2462L72.8134 77.306L72.815 77.2953C72.8923 76.6378 73.3532 76.3481 73.8042 76.3662C74.2406 76.3838 74.7532 76.576 74.9517 76.668L74.9705 76.6769C78.0151 78.139 80.8192 80.0447 83.458 82.159C88.9152 86.5315 93.004 92.2476 94.9851 98.9788C95.9574 102.282 96.5154 105.686 97.1044 109.075L97.4669 111.151C98.0167 114.279 98.6307 117.468 99.8717 120.378C100.193 121.13 99.9452 121.836 99.1581 122.132C98.1753 122.502 97.1889 122.86 96.2009 123.213C96.686 125.295 96.9818 127.449 97.3453 129.542C98.118 133.989 99.0646 138.408 99.8764 142.85C100.291 145.121 100.666 147.4 101.08 149.671C101.28 150.765 101.488 151.857 101.691 152.95C101.8 153.54 101.899 154.131 102.003 154.722L102.021 154.82C102.081 155.131 102.156 155.453 102.07 155.765C101.973 156.12 101.695 156.371 101.448 156.626C101.244 156.836 100.95 156.837 100.7 156.723L100.618 156.685C100.172 156.476 99.8225 156.268 99.6643 155.765C99.5641 155.446 99.528 155.087 99.4626 154.759C99.337 154.13 99.218 153.499 99.1056 152.868C98.8808 151.603 98.6612 150.338 98.4469 149.072L98.2467 147.886C97.5596 143.8 96.907 139.689 96.5771 135.559C96.4308 133.728 96.2757 131.897 96.1192 130.066L96.0017 128.693C95.853 126.955 95.6714 125.173 95.6457 123.412L95.0549 123.622L92.1722 124.641C91.4574 124.894 90.5474 125.412 89.7782 125.317C89.4016 125.271 89.1145 125.153 88.8929 124.937C89.1583 128.685 89.5177 132.426 89.9965 136.148C90.4323 139.535 90.9153 142.917 91.4859 146.284C91.7684 147.951 92.0587 149.617 92.3741 151.278C92.5318 152.108 92.6945 152.938 92.8621 153.767C92.9457 154.18 93.0452 154.594 93.1104 155.011C93.185 155.488 93.0535 155.782 92.7869 156.175C92.568 156.497 92.1301 156.663 91.775 156.44C91.3049 156.145 91.0597 155.889 90.9213 155.352C90.7956 154.864 90.7192 154.354 90.622 153.86C90.4424 152.947 90.2689 152.033 90.1014 151.118C89.751 149.204 89.4281 147.286 89.1397 145.362C88.1234 138.583 87.4785 131.748 87.1528 124.902C86.9921 121.525 86.9424 118.144 86.971 114.763C86.9856 113.029 87.0422 111.291 87.1647 109.562C87.2888 107.812 87.547 106.097 87.7775 104.364C87.7856 104.303 87.8716 104.3 87.8753 104.364C87.9844 106.307 88.1555 108.248 88.2393 110.197C88.3193 112.056 88.3544 113.918 88.418 115.777C88.5016 118.222 88.6175 120.668 88.771 123.112C89.0488 122.808 89.4676 122.633 89.8866 122.701C90.4937 122.574 91.1471 122.255 91.7259 122.062L93.9076 121.332C95.0546 120.949 96.2015 120.569 97.3525 120.2C96.3235 116.736 95.6185 113.221 95.0166 109.655L94.7481 108.051C94.2168 104.894 93.6438 101.736 92.6813 98.6789C91.6694 95.4648 90.1552 92.4767 88.1465 89.7706C86.1664 87.1037 83.7574 84.7555 81.2771 82.559C79.1536 80.6788 76.882 78.9811 74.7162 77.1525C74.7388 77.2736 74.7437 77.4071 74.7237 77.5537C74.2632 80.9253 72.5051 84.0651 70.0548 86.4005C65.1324 91.0921 57.8459 92.0655 51.5458 89.8655C45.4515 87.7374 40.0633 82.6973 38.1596 76.4605C38.127 76.3538 38.2699 76.3115 38.3273 76.3898C38.4329 76.5346 38.539 76.6794 38.6453 76.8242C38.6381 76.7667 38.668 76.704 38.7389 76.6767C40.96 75.8187 43.1411 74.6019 44.8061 72.8806C45.6176 72.0416 46.3258 71.091 46.8848 70.0658C47.1526 69.5748 47.3932 69.0662 47.5851 68.5407L47.6339 68.4047C47.8665 67.7465 48.0608 67.0752 48.5464 66.5537Z"
                           fill="black"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M46.9372 14.7393L48.0633 16.079C47.4397 16.5186 46.8511 16.9603 46.2974 17.4041L46.2969 17.4027C48.8616 15.7288 51.7019 14.7393 54.7703 14.7393C60.6802 14.7393 72.6844 19.8178 75.3981 23.481C76.7448 25.2989 79.2473 30.8797 80.5455 36.947C81.5885 41.8219 83.1398 55.5945 81.5885 60.7696C79.6031 67.3929 73.0709 73.5144 66.3355 73.5144C59.6001 73.5144 49.1432 68.6499 41.7009 57.9897C41.3606 57.5022 37.4527 56.9372 34.6648 55.1076L35.3968 63.1744L35.9531 67.867L35.8303 68.2009C33.8336 73.6029 32.2514 76.4212 31.0836 76.6557C29.892 76.8949 27.4652 74.9408 23.8033 70.7933L23.3354 68.8286C22.147 63.8168 21.5527 61.1266 21.5527 60.758L21.5535 60.6908C21.5711 59.8426 21.8631 55.0417 21.8692 53.7497L21.8693 34.3855C25.8075 21.288 29.5657 14.7393 33.1438 14.7393H46.9372Z"
                           fill="white"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M37.6076 10.2789C38.7655 9.83022 40.1069 9.915 41.206 10.5906C43.3639 10.498 45.51 11.7606 46.635 13.6036C46.6585 13.6296 46.6834 13.6557 46.7055 13.6818L46.944 13.9598C47.1698 14.2253 47.4079 14.5179 47.5966 14.8201C46.6724 14.8412 45.9025 15.218 45.3651 15.9791C44.9817 16.5221 45.8601 17.0381 46.252 16.5245L46.2658 16.5057C46.5885 16.0489 47.0756 15.8719 47.6178 15.8626C47.7735 15.86 47.8916 15.8004 47.975 15.7125C48.0083 15.8336 48.038 15.9561 48.0653 16.0791C50.7957 15.0168 53.7391 14.7354 56.6707 14.9874C56.5421 15.1956 56.4347 15.4186 56.352 15.653C56.2583 15.9187 56.4583 16.2238 56.7163 16.2947C56.9953 16.3714 57.2475 16.2078 57.3485 15.955L57.3578 15.9303C57.4704 15.611 57.6544 15.337 57.9013 15.1245C59.2814 15.3117 60.6516 15.6093 61.9884 15.993C63.5951 16.4546 65.1866 17.0179 66.7431 17.6629C66.4794 17.7664 66.2517 17.9411 66.0922 18.2329C65.7739 18.8153 66.6491 19.3369 66.9811 18.7802L66.9929 18.7596C67.0254 18.6999 67.0543 18.664 67.0754 18.6435L67.083 18.6366L67.1289 18.6155L67.2144 18.5909L67.2472 18.5829C67.2762 18.5763 67.2882 18.5768 67.3645 18.5725C67.4659 18.5668 67.5675 18.5673 67.669 18.5672C67.9079 18.5671 68.0603 18.4339 68.1293 18.2636C68.8973 18.6104 69.6556 18.9756 70.4005 19.3581L70.5775 19.4498C72.8767 20.6516 75.0548 22.2297 76.3183 24.5518C76.4019 24.707 76.4279 24.8766 76.4071 25.0383C76.6769 25.3618 76.9376 25.6957 77.188 26.0348C77.952 27.073 78.5113 28.2534 79.0407 29.4234C80.1059 31.7763 80.8229 34.1932 81.3823 36.7131C81.9235 39.1417 82.3601 41.5964 82.7657 44.0511C83.2154 46.7784 83.5896 49.5291 83.6679 52.2956C83.8061 57.2271 82.8425 62.1874 80.0746 66.3389C77.6053 70.0431 73.8869 72.9843 69.4774 73.926C64.9923 74.8834 60.2466 73.9495 56.7121 70.9601C56.1422 70.4788 56.2206 69.5071 56.7121 69.0141C57.2688 68.4584 58.0901 68.5354 58.6572 69.0141C61.9858 71.83 66.8307 72.2644 70.8413 70.8296C74.5492 69.5019 77.4539 66.4394 79.2362 62.9999C81.4109 58.8053 81.7774 53.9872 81.4435 49.3465C81.2611 46.7979 80.8816 44.2702 80.4905 41.7464L80.2544 40.2272C79.9968 38.5817 79.7262 36.9384 79.3733 35.3097L79.2906 34.9302C78.8593 32.9661 78.354 30.9516 77.5727 29.1051C77.1632 28.136 76.6705 27.2022 76.1659 26.28C76.0682 26.1013 75.9676 25.92 75.8646 25.7374C75.7264 25.7857 75.5687 25.7935 75.4031 25.7414C73.9781 25.2979 72.5139 25.0005 71.0238 24.9014C70.3449 24.856 69.665 24.849 68.9858 24.8754C67.8233 24.8077 66.6282 24.91 65.5208 25.2666C65.4124 25.1736 65.3026 25.0826 65.1927 24.9915C65.1631 24.9892 65.1335 24.986 65.1038 24.9802C64.8213 24.9246 64.6226 24.7237 64.5029 24.4701C64.4966 24.4566 64.491 24.4432 64.4857 24.4298C64.344 24.3214 64.2011 24.2147 64.0569 24.1094C63.7054 24.2006 63.3974 23.908 63.3145 23.5874C63.2363 23.5346 63.1567 23.4835 63.0777 23.4317C63.0158 23.4468 62.9543 23.4594 62.8943 23.4638C62.6355 23.4824 62.3855 23.4428 62.1562 23.3193C61.8659 23.1629 61.6803 22.9106 61.5562 22.6241C61.1171 22.6511 60.6728 22.5085 60.2802 22.2508C59.9615 22.0417 59.7175 21.7531 59.4748 21.465C56.5181 20.1457 53.304 19.3667 50.0824 19.1672C49.765 19.2282 49.4499 19.3009 49.1387 19.3854C49.065 19.4055 48.9604 19.4449 48.8401 19.4921C49.5584 19.4052 50.2859 19.3966 51.0237 19.5029C54.5249 20.0094 57.2518 22.6318 59.5987 25.1072C60.157 24.9944 60.7213 25.7176 60.2046 26.1966L56.1763 29.9309C56.2751 30.3485 55.7963 30.7602 55.3769 30.6599C54.6736 30.4908 53.9692 30.3265 53.2643 30.1649C52.5289 30.5208 51.6044 30.4599 50.9374 29.9439C50.9064 29.9199 50.8389 29.8816 50.7804 29.8435C50.7256 29.8888 50.652 29.9341 50.6226 29.9535C50.3855 30.1105 50.0966 30.1567 49.8195 30.1126C49.5345 30.0673 49.2773 29.9227 49.0555 29.7425C48.9143 29.6278 48.5853 29.1491 48.4022 29.1138L48.3844 29.1118C48.5066 29.1153 48.1139 29.4804 48.0084 29.5559C47.7623 29.7316 47.4902 29.8239 47.1839 29.7903C46.6501 29.7315 46.1912 29.2449 45.9302 28.7955L45.9105 28.7611L45.9023 28.7397L45.8953 28.7628C45.8941 28.7669 45.8926 28.7713 45.8908 28.7762C45.8517 28.882 45.7289 29.0022 45.6454 29.0762C45.4076 29.2866 45.1132 29.379 44.7988 29.3241C44.5326 29.2778 44.3088 29.1169 44.1289 28.9222L44.1008 28.8912C44.0476 28.8312 43.697 28.3599 43.7523 28.2469L43.7587 28.2374L43.7413 28.2337C43.528 28.2862 43.3489 28.2336 43.2178 28.1237C42.4858 27.9632 41.7634 27.7763 41.0641 27.5387C41.0093 27.6926 40.9557 27.8465 40.9037 28.0017C41.2856 28.2378 41.6389 28.5743 41.9635 28.8143C42.5791 29.2682 43.1943 29.7221 43.8084 30.1773L46.2415 31.9728L46.5198 31.898C46.8753 31.8025 47.1803 32.0096 47.3108 32.3261L47.3216 32.3535C47.3733 32.4921 47.4357 32.6204 47.5089 32.7431C48.1172 32.7188 48.6322 33.0924 48.7986 33.6282C48.9488 33.6248 49.1006 33.6305 49.2558 33.6476C49.6807 33.6943 49.9671 34.0099 49.8901 34.4434L49.8843 34.4731L49.874 34.5214C50.1203 34.626 50.2989 34.828 50.3386 35.1335C50.4045 35.2327 50.4577 35.3407 50.4917 35.461C50.6695 36.085 50.3237 36.8563 50.1396 37.4541L50.1254 37.5009C50.0072 37.8938 49.8848 38.2847 49.7611 38.6755L49.4528 39.6458C48.598 42.3499 47.7647 45.2009 48.4564 48.0357C48.6039 48.6357 47.8371 48.907 47.5046 48.4374C46.6986 47.3006 45.8278 46.2294 44.9135 45.2011L44.8692 45.194C44.2289 45.0653 43.9802 44.6128 43.6864 44.1517C43.5132 44.2026 43.327 44.2146 43.1471 44.18C42.8866 44.1297 42.6532 43.9809 42.469 43.793C42.313 43.6336 42.1699 43.2248 41.9854 43.1235C41.7547 42.9968 41.2908 43.1779 41.0152 43.1372C40.791 43.1042 40.5818 43.0272 40.3788 42.9306C40.0056 43.4394 39.7583 44.0375 39.6977 44.6824C39.6741 44.9276 39.6011 45.135 39.4955 45.3071C39.884 45.2928 40.2738 45.3202 40.6586 45.3919C42.0823 45.6567 43.1032 46.5358 43.6768 47.8453C43.7015 47.9027 43.6272 47.9496 43.5933 47.8949C42.742 46.584 40.8892 46.5175 39.5437 46.9792C38.1148 47.4697 37.3129 48.7283 37.0275 50.1643C36.7146 51.7386 37.1161 53.4355 37.9728 54.7763C38.3703 55.3998 38.9128 55.9685 39.6337 56.198C40.4904 56.4706 41.2817 55.9828 42.1591 56.2345C42.7562 56.4054 43.0197 56.9832 42.9114 57.561C42.8684 57.788 42.7888 57.9862 42.6819 58.1584C42.9976 58.7844 43.2895 59.4288 43.6611 60.0209C44.2347 60.9352 44.9285 61.6917 45.6846 62.4547C46.4655 63.2425 47.2608 64.0147 48.0966 64.7451C48.8972 65.4455 49.8151 65.9437 50.6547 66.5854C51.244 67.0354 51.5359 67.6667 51.2452 68.3893C51.0054 68.9867 50.197 69.4953 49.5425 69.2253C48.2895 68.7088 47.193 67.8297 46.1945 66.9246C45.2688 66.0846 44.4629 65.0803 43.854 63.9899C43.2797 62.9619 42.8564 61.7945 42.4994 60.6699L42.4551 60.5296C42.2869 59.9948 42.1097 59.3935 41.995 58.7871C41.3079 59.1627 40.3755 59.2175 39.6403 59.1157C38.4524 58.9527 37.369 58.354 36.5502 57.4814C36.1686 57.0754 35.8313 56.6123 35.54 56.1102C35.5665 56.4158 35.5823 56.7115 35.5992 56.9806C36.2799 57.7264 36.553 58.8027 36.3114 59.7847C36.8809 60.3711 37.0404 61.2514 36.7432 62.0008C37.3665 62.6193 37.343 63.6036 37.0736 64.4974C37.8105 65.3213 37.8802 66.6049 37.3048 67.5346L37.2875 67.6014C37.8685 68.5738 37.7374 69.8307 37.0095 70.6894C37.5067 71.6541 37.4297 72.9516 36.1874 73.3259C35.7346 73.4622 35.2957 73.3459 34.9673 73.0921C35.2672 74.5841 35.4013 76.0987 35.0014 77.5976C34.8423 78.1924 34.2608 78.6267 33.6493 78.6267C33.1382 78.6267 32.7666 78.3698 32.5099 77.9915C32.5399 78.7441 32.4943 79.5006 32.3339 80.2636C32.2372 80.7244 31.8099 81.0838 31.3563 81.195C31.5199 81.3796 31.5851 81.6466 31.4283 81.9245C30.7632 83.1023 29.1563 82.6138 29.0477 81.4855C28.5938 81.1466 28.3829 80.5902 28.2955 79.9891C28.1683 79.1123 28.1221 78.25 27.9779 77.3845L27.9228 77.4361L27.8944 77.4607L27.8852 77.5233C27.8026 77.9511 27.5614 78.2507 27.2483 78.4294C27.3164 79.1757 27.1905 79.9357 26.7172 80.5024C26.4019 80.8802 25.8649 81.0289 25.4045 80.9469C25.3756 80.9484 25.346 80.9482 25.3152 80.9442C24.2726 80.8056 23.6693 79.8162 23.9438 78.9082C23.5239 78.3935 23.3471 77.7405 23.4714 77.0951C22.659 76.5569 22.6756 75.375 22.9569 74.4256C22.1053 73.7532 21.7849 72.4963 22.2128 71.4973C21.4453 70.5437 21.3385 69.2149 21.86 68.1291C21.0156 67.4351 21.0204 66.0952 21.858 65.3854C21.4119 64.4996 21.143 63.4383 21.5887 62.6277C21.2743 62.2805 21.1016 61.7856 21.138 61.3075C21.1913 60.6052 21.6557 60.12 22.232 59.7967L22.2719 59.5771C22.4072 59.5939 22.5514 59.5561 22.6786 59.434C22.8044 59.3131 22.9338 59.2156 23.0677 59.1353C23.2194 59.1333 23.3499 59.0658 23.4417 58.9618C23.6928 58.8765 23.9628 58.8388 24.2623 58.8354C24.9091 58.8284 24.9319 57.8607 24.3299 57.798C24.2349 57.7021 24.104 57.6417 23.962 57.6417L23.8508 57.6422C23.5909 57.6447 23.3285 57.6607 23.0873 57.7641C22.9306 57.8311 22.8097 57.9322 22.7212 58.0559C22.7046 58.2429 22.6029 58.4294 22.3827 58.5834C22.1284 58.7614 21.7805 58.7821 21.5083 58.6211C21.1272 58.3958 21.1233 58.044 21.1672 57.6616C21.2634 56.825 20.7826 56.0377 20.8971 55.1818C20.9478 54.8035 21.0737 54.4767 21.2791 54.2129C20.8461 53.5645 20.7697 52.7275 21.1031 52.0158C20.4085 51.2683 20.2885 50.1161 20.7314 49.2165C20.7377 49.1947 20.7427 49.1724 20.7496 49.1509C20.7997 48.998 20.8686 48.8602 20.9447 48.7283C20.5559 48.0545 20.5587 47.2277 20.9539 46.5568C20.3553 45.8587 20.3363 44.7478 20.8686 43.9958C20.8718 43.9334 20.8783 43.8711 20.8836 43.8088C20.6393 43.1742 20.698 42.4528 21.0079 41.8627C20.8973 41.6077 20.8121 41.3332 20.7576 41.0408C20.6179 40.2869 20.6898 39.5539 20.8984 38.8182C20.9321 38.7022 20.9699 38.5861 21.0104 38.47C21.0171 37.9661 21.0363 37.4645 21.0616 36.9638C20.9625 36.5399 20.9465 36.0741 20.9443 35.6417L20.9437 35.3613C20.9388 34.6477 20.8891 33.6028 21.3401 32.9963C21.0505 32.341 21.1696 31.5154 21.6529 30.996C21.3136 30.4123 21.2424 29.6956 21.5834 29.048C21.6381 28.9438 21.7016 28.8468 21.7713 28.7549C21.7431 28.1619 21.8679 27.5503 22.1838 26.9609C22.389 26.5771 22.6955 26.2449 23.0599 25.9791C23.0538 25.9005 23.05 25.822 23.0513 25.7446C23.0577 25.3995 23.1342 25.0529 23.2631 24.7296C23.0319 24.3349 22.9247 23.89 23.0599 23.4106C23.2112 22.868 23.6089 22.401 24.1056 22.1376C24.1456 21.626 24.2255 21.1175 24.3397 20.6157C24.0345 19.9358 24.2775 19.0384 24.9674 18.6379C24.8774 18.0945 24.9585 17.5311 25.3538 17.1066C25.5036 16.9458 25.6801 16.8239 25.8701 16.743C25.7786 16.1966 25.8818 15.6282 26.2595 15.1833C26.568 14.8201 27.0251 14.5994 27.4903 14.5669C27.6695 13.6166 28.577 12.906 29.5345 12.9626C29.6542 12.5442 29.9401 12.1794 30.3837 11.9944C30.4972 11.9471 30.612 11.9159 30.7263 11.8986C31.5049 11.1129 32.6641 10.5803 33.6677 10.3076C34.6743 10.0351 35.6947 10.0087 36.559 10.3255L36.6219 10.3493L36.6923 10.3402C36.9975 10.3063 37.3025 10.2867 37.6076 10.2789ZM29.9583 74.6768C29.6894 74.5929 29.3895 74.776 29.3167 75.0411C29.2397 75.3212 29.4111 75.5988 29.6809 75.6829C30.0172 75.7878 30.3704 75.814 30.7208 75.8143C31.0026 75.8145 31.2424 75.5743 31.2424 75.2925C31.2424 75.0094 31.0036 74.7711 30.7208 74.7708C30.4358 74.7706 30.2254 74.7601 29.9583 74.6768ZM27.5667 69.1363C27.1648 69.1367 26.82 69.2327 26.522 69.5144C26.3233 69.7023 26.3183 70.0653 26.522 70.2524C26.7277 70.4411 27.0261 70.4521 27.2373 70.2723L27.2779 70.2359C27.2828 70.2314 27.2866 70.2279 27.2897 70.225C27.3066 70.214 27.3237 70.2028 27.3417 70.1934L27.3077 70.2156C27.2818 70.2343 27.3419 70.2038 27.3755 70.1894L27.3861 70.185L27.3895 70.1843L27.4165 70.1822C27.4665 70.1796 27.5167 70.1797 27.5667 70.1797C27.8395 70.1794 28.1008 69.94 28.0882 69.658C28.0755 69.3755 27.859 69.136 27.5667 69.1363ZM35.1519 65.8262C35.7164 65.4799 35.2122 64.5942 34.646 64.9132L34.6256 64.9252C34.3353 65.1034 33.9784 65.0792 33.6495 65.0794C32.9785 65.0798 32.9773 66.1232 33.6495 66.1228L33.7607 66.1224C34.2427 66.1187 34.7302 66.085 35.1519 65.8262ZM30.7092 62.0178C30.2827 61.9375 29.805 61.8658 29.3562 61.9147L29.2817 61.924H29.1437C29.0237 61.924 28.9075 61.9723 28.8143 62.0482C28.6667 62.1095 28.527 62.1917 28.3995 62.3021C27.8914 62.7429 28.6318 63.4782 29.137 63.0401C29.1651 63.0157 29.1976 62.9956 29.2338 62.9791L29.2616 62.9675H29.8195C29.8703 62.9675 29.9197 62.9569 29.9678 62.9416C30.1489 62.9665 30.3176 63.0024 30.4319 63.0239C31.088 63.1474 31.3691 62.142 30.7092 62.0178ZM30.233 52.0034C29.4155 51.6241 28.5101 51.6268 27.7541 52.1535C27.2134 52.5302 27.7156 53.4183 28.2609 53.0676L28.2804 53.0545C28.3482 53.0073 28.4178 52.9678 28.4882 52.9319C28.8721 53.0429 29.2584 53.0481 29.6295 52.9117L29.6778 52.8931L29.7066 52.9043C30.3116 53.185 30.842 52.2859 30.233 52.0034ZM39.1349 50.3685C38.309 50.2759 38.3024 48.9708 39.1349 49.0642C40.8925 49.2614 42.4873 50.0431 43.6553 51.3855C44.1986 52.0098 43.3039 52.9231 42.7504 52.3267L42.7334 52.3077C41.8046 51.2403 40.5512 50.5274 39.1349 50.3685ZM29.8833 43.668C29.6997 43.6479 29.5165 43.6379 29.3362 43.6466C28.9031 43.6675 28.3756 43.9565 28.5657 44.4788C28.7181 44.8972 29.2177 44.9138 29.4644 44.6906C29.567 44.6931 29.6695 44.6998 29.7716 44.7103C30.0439 44.7383 30.3137 44.7902 30.5821 44.8432C31.2378 44.9722 31.5185 43.9667 30.8594 43.8369L30.5679 43.7792C30.4697 43.76 30.3706 43.7412 30.271 43.724C30.2115 43.6943 30.1476 43.6744 30.0793 43.6693L30.0448 43.668H29.8833ZM24.7014 35.5729L24.6401 35.5646C23.7594 35.4519 22.3457 35.5556 22.2388 36.6771C22.1797 37.2982 23.0767 37.3372 23.2538 36.8061C23.9041 36.6888 24.5598 36.6664 25.2057 36.7376C25.4521 36.4872 25.4541 36.0058 25.0439 35.8857C24.986 35.7299 24.8651 35.5965 24.7014 35.5729ZM44.8325 33.6787C44.629 33.4918 44.2952 33.467 44.095 33.6787C43.9796 33.8005 43.8832 33.9359 43.807 34.0848L43.7562 34.1854C43.7476 34.2021 43.7388 34.2187 43.7297 34.2351C43.7126 34.2655 43.6934 34.2944 43.6748 34.3239L43.6622 34.3362C43.6572 34.3413 43.6514 34.3474 43.6444 34.3548C43.4568 34.5532 43.4329 34.8984 43.6444 35.0926C43.8479 35.2796 44.1815 35.3043 44.3819 35.0926C44.4972 34.9708 44.5935 34.8356 44.6699 34.6865L44.7206 34.586C44.7292 34.5693 44.738 34.5528 44.7471 34.5364C44.7642 34.5058 44.7835 34.4769 44.802 34.4474L44.8228 34.4267C44.8258 34.4236 44.829 34.4202 44.8325 34.4165C45.0201 34.2182 45.0439 33.8729 44.8325 33.6787ZM34.1381 32.32C33.4033 31.799 32.5295 31.7748 31.854 32.4015C31.3665 32.8538 32.0827 33.5786 32.5743 33.1548L32.5915 33.1393C32.6094 33.1226 32.6275 33.108 32.6455 33.0941C32.7336 33.1692 32.8456 33.2168 32.9737 33.2169C33.0071 33.217 33.0405 33.2169 33.0739 33.2176L33.124 33.2194L33.1508 33.2216L33.1542 33.2223L33.1777 33.2323C33.2206 33.2516 33.2798 33.2815 33.1986 33.2306C33.2167 33.2402 33.2336 33.2514 33.2508 33.2623L33.2808 33.2896C33.4774 33.4756 33.8176 33.5001 34.0128 33.2944C34.3584 33.1775 34.5419 32.606 34.1381 32.32ZM41.3223 30.6107L41.3356 30.6065C41.98 30.4225 41.706 29.4154 41.0583 29.6002C40.3711 29.7965 40.0429 30.4363 39.9055 31.0916C39.8478 31.3672 39.9863 31.6556 40.2698 31.7334C40.5287 31.8045 40.8532 31.646 40.9114 31.369C40.9522 31.1742 40.9992 31.0089 41.0736 30.8555L41.1187 30.768C41.1397 30.7281 41.1471 30.7214 41.2182 30.6593C41.2301 30.6489 41.2844 30.6236 41.3223 30.6107ZM30.4088 25.3555L30.3081 25.3325C29.6804 25.195 28.8472 25.1232 28.4682 25.7457C28.1227 26.3128 28.9942 26.829 29.3532 26.2929C29.3586 26.2928 29.3649 26.2928 29.3723 26.2934L29.3841 26.2948L29.545 26.2817C29.7454 26.2803 29.9371 26.3158 30.1315 26.3618C30.7842 26.5164 31.0628 25.5105 30.4088 25.3555ZM52.943 21.3443C53.4182 20.8689 52.6809 20.1308 52.2056 20.6066C51.8297 20.9826 51.4671 21.3613 51.2228 21.839C51.0946 22.0897 51.1573 22.4051 51.4099 22.5529C51.6429 22.6892 51.9946 22.6174 52.1234 22.3657C52.3352 21.9516 52.6024 21.6852 52.943 21.3443ZM46.9464 20.0964C46.4769 20.3744 46.1729 20.8325 45.9885 21.3627C45.8959 21.6288 46.0939 21.9333 46.3527 22.0044C46.6309 22.0809 46.885 21.9179 46.985 21.6648L46.9942 21.64C47.0436 21.4982 47.1226 21.3307 47.2203 21.2044C47.3037 21.0965 47.4335 20.9885 47.5312 20.9526C47.7663 20.8663 47.9329 20.6532 47.9112 20.4043C47.5246 20.538 47.1657 20.3772 46.9464 20.0964ZM32.8919 17.8269C32.4182 17.3871 31.7828 17.3288 31.2086 17.595C30.9529 17.7134 30.8889 18.0821 31.0215 18.3088C31.1748 18.5711 31.4785 18.6149 31.7349 18.496C31.6691 18.5265 31.788 18.4862 31.8394 18.4715C31.8459 18.4745 31.932 18.4706 31.9617 18.471L31.9974 18.4733C31.9974 18.4733 31.989 18.4733 31.9712 18.4728C31.9962 18.4784 32.021 18.4852 32.0453 18.4929L32.0764 18.5037C32.0607 18.5004 32.1312 18.5464 32.1508 18.5616L32.1544 18.5646C32.6459 19.021 33.3853 18.2848 32.8919 17.8269Z"
                           fill="black"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M70.7351 58.0423C71.1824 57.2527 72.5172 57.3811 72.7213 58.302C73.1352 60.169 70.9098 61.893 69.2195 61.9361C67.5399 61.9787 65.6552 60.5485 65.8984 58.7421C65.9585 58.2952 66.5551 58.3495 66.7585 58.6297L66.8375 58.7371C67.3899 59.4796 68.1188 60.248 69.1441 60.067C69.569 59.9921 69.9549 59.7266 70.2117 59.3847C70.5215 58.9722 70.4875 58.4795 70.7351 58.0423ZM60.0546 44.3837C60.2822 44.3209 60.512 44.3452 60.7137 44.431C61.164 44.5136 61.5401 44.8892 61.6723 45.318C61.6828 45.3552 61.6944 45.3918 61.7072 45.4281L61.7274 45.4823L61.6734 45.3448C61.6983 45.4802 61.8085 45.6225 61.8481 45.7584C61.8969 45.9255 61.9087 46.1152 61.8923 46.2991C62.0355 46.3006 62.1786 46.3054 62.3215 46.3178L62.4596 46.3302C63.2318 46.402 64.0796 46.5337 64.5374 47.2012C64.7945 47.5763 64.5532 48.2517 64.0808 48.3239C63.3537 48.4352 62.7274 48.0327 62.0027 47.9521C61.3177 47.8758 60.6009 47.9195 59.9247 48.0432C58.5288 48.2986 57.246 48.8646 55.8857 49.2198L55.7005 49.2668C55.4674 49.3231 55.203 48.998 55.4336 48.8084C56.5234 47.9127 57.9187 47.1868 59.2933 46.7448C59.0931 46.4262 59.0311 46.0065 59.168 45.6643C59.1892 45.5934 59.2155 45.5245 59.2433 45.4558L59.3011 45.3144C59.3068 45.2477 59.3195 45.1819 59.338 45.1173L59.341 45.0976L59.3427 45.0988C59.4451 44.7661 59.7124 44.4781 60.0546 44.3837ZM73.9589 44.4351C74.2569 44.1368 74.6758 44.1809 74.9868 44.4157L75.0281 44.4481C75.3213 44.5784 75.5639 44.8631 75.7233 45.1269C75.8887 45.401 75.9986 45.6801 76.0029 45.9818C76.7244 45.9841 77.4156 46.2006 77.9453 46.7834C78.1164 46.9715 78.2332 47.2616 78.1391 47.5165L78.083 47.6682C77.9051 48.1498 77.1054 48.4271 76.8336 47.8607L76.8211 47.8331C76.5323 47.1606 75.4237 47.2312 74.8345 47.2999C74.4238 47.348 74.0182 47.4502 73.6216 47.5645C73.4818 47.6048 73.3433 47.6486 73.205 47.6933L73.0667 47.7381C72.9929 47.762 72.6085 47.9708 72.8476 47.9214C72.9119 47.9081 72.9603 48.0017 72.8947 48.0332C72.6097 48.1695 72.3056 47.8981 72.3247 47.5918C72.3576 47.0602 73.2015 46.7687 73.6076 46.5854L73.6319 46.5743C73.7875 46.5023 73.9506 46.4333 74.119 46.3693C74.0243 46.2284 73.9461 46.0719 73.881 45.9039C73.8195 45.7453 73.7784 45.5911 73.7559 45.4225C73.7337 45.3401 73.7337 45.2576 73.7559 45.1751L73.7592 45.1515C73.7478 45.0969 73.7423 45.0406 73.7431 44.9839L73.7407 44.9618H73.7431C73.751 44.7632 73.8299 44.5641 73.9589 44.4351ZM69.1963 50.0964C70.3415 50.4504 72.2307 51.4147 71.6339 52.903C70.8007 54.2699 68.5909 53.2653 67.5201 52.8237C66.558 52.5049 66.0571 53.8537 66.9873 54.2603C74.6743 57.3025 74.6461 49.2734 69.4751 49.3913C68.9057 49.4042 68.8879 49.9788 69.1963 50.0964ZM59.0262 39.6272L59.2215 39.5702C60.2365 39.276 61.2726 38.7682 62.1738 39.5606C62.5276 39.8718 62.6005 40.5185 62.3473 40.9067C61.7705 41.7911 60.9151 41.656 59.9836 41.7314C59.2743 41.7888 58.5756 41.9972 57.9135 42.2577C57.3725 42.4707 56.8706 42.7705 56.3968 43.1049C55.9314 43.4338 55.6134 43.9478 55.1359 44.2437C54.961 44.3522 54.7589 44.2406 54.6961 44.0646C54.4734 43.4405 54.8496 42.663 55.168 42.1313C55.5567 41.4825 56.147 40.9519 56.7819 40.5505C57.477 40.1108 58.2457 39.8569 59.0262 39.6272ZM73.816 38.9556C75.5317 38.9551 77.1825 39.9097 78.1421 41.3091C78.4682 41.7845 78.2292 42.4889 77.7612 42.7626C77.2361 43.0699 76.6746 42.8486 76.3286 42.4083L76.3081 42.3816C75.7578 41.6485 75.0484 41.0711 74.2074 40.6952C73.7971 40.5117 73.3434 40.3629 72.8996 40.2873L72.7562 40.2627C72.5551 40.229 72.3219 40.1969 72.1401 40.2284C72.0428 40.2412 71.9533 40.2734 71.8709 40.3224C71.9105 40.409 71.8082 40.5134 71.7137 40.4615C71.2873 40.2272 71.3396 39.8093 71.6918 39.4845C72.1899 39.025 73.1726 38.9558 73.816 38.9556Z"
                           fill="black"></path>
                     </g>
                  </g>
                  <defs>
                     <clipPath id="clip0_2248_49">
                        <rect width="100" height="100" fill="white"></rect>
                     </clipPath>
                  </defs>
               </svg>
               <div>
                  <p class="font-Beret text-lg leading-light mb-3 lg:mb-0">"Great patches, very helpful in the morning"</p>
                  <p class="lg:flex lg:items-center lg:gap-3">
                     <svg class="block w-24 h-5 mb-1 mx-auto lg:mx-0" fill="none">
                        <use xlink:href="@/assets/img/sprite.svg#workStar"></use>
                     </svg>
                     <span class="text-secondary text-xs uppercase"> SOFIA </span>
                  </p>
               </div>
            </div>
            <div
               class="flex flex-col items-center gap-3 max-w-[230px] text-center text-tertiary sm:max-w-[250px] lg:max-w-[360px] lg:flex-row lg:text-left xl:max-w-none">
               <svg class="block w-20 h-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_2248_60)">
                     <mask id="mask0_2248_60" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <path
                           d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
                           fill="white"></path>
                     </mask>
                     <g mask="url(#mask0_2248_60)">
                        <path
                           d="M100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100C77.6142 100 100 77.6142 100 50Z"
                           fill="#BFE8FB"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M10.2075 165.764C11.7722 165.86 13.3367 165.937 14.9012 165.995C35.3604 166.758 55.803 164.425 76.2495 163.914C83.3699 163.727 90.4538 163.82 97.5558 164.392C98.2517 164.448 99.0474 163.699 98.9619 162.985C97.6498 151.655 96.0083 140.355 95.1575 128.978C95.1569 128.376 95.2345 127.775 95.4413 127.208C95.4803 127.164 95.6823 126.665 95.862 126.634C95.8034 126.678 96.0693 126.601 95.8999 126.615C96.9268 126.446 97.9338 125.338 97.1887 124.276C89.5122 112.506 79.0331 101.763 75.6617 87.7832C74.8652 84.0035 71.9882 83.7699 68.9231 82.2106C67.9669 81.6417 65.6285 80.0656 65.2479 78.9699C64.3388 75.0207 65.9397 71.1518 61.2627 69.5538C58.1752 68.6975 52.7181 67.973 49.5941 68.8761C45.7834 70.1448 46.0686 74.4406 43.8583 77.3961C42.7151 79.1055 40.7663 81.4461 38.9668 81.708C38.0946 81.8349 37.4522 80.07 36.5814 80.1915C23.0072 83.4895 4.51339 105.988 -1.32072 118.443C-2.63547 122.362 1.60466 121.18 1.34417 125.119C1.02303 132.594 0.320666 142.162 0.73722 149.645C1.12737 153.988 0.838646 158.539 2.18816 162.718C1.82494 163.16 2.34684 163.605 2.77267 163.797C3.30921 164.71 8.58861 165.637 10.2075 165.764Z"
                           fill="white"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M45.5474 72.6891C45.9003 71.1005 48.4268 71.7818 47.9942 73.3638C47.3237 75.8103 45.933 78.1221 43.9699 79.7448C42.4537 80.9974 40.3874 82.1152 38.3378 82.3218C38.5299 82.5089 38.7142 82.709 38.9077 82.8997C39.3442 83.3339 39.8082 83.7366 40.2866 84.1236C41.2696 84.9186 42.2916 85.6338 43.4078 86.2327C47.8661 88.6256 52.9023 89.1774 57.882 88.6203C60.2451 88.3562 62.6435 87.9078 64.8655 87.0434C65.8955 86.6434 66.8966 86.1176 67.7803 85.4535L68.0115 85.2799C68.4761 84.9289 69.0961 84.4337 69.3865 83.8923C68.503 84.0909 67.3854 83.1495 66.7724 82.6018C66.1021 82.0003 65.5373 81.2248 65.1203 80.4298C64.3034 78.87 63.8708 76.8577 64.5558 75.1852C64.6014 75.074 64.7478 75.0925 64.7609 75.2128C64.9635 77.1623 65.4889 78.9903 66.8876 80.4338C67.5084 81.0732 68.252 81.6093 69.0637 81.9818L69.1779 82.0343C69.5237 82.1944 69.8878 82.3821 70.0335 82.7245C70.0898 82.718 70.1459 82.7232 70.1995 82.7377C70.2479 82.7507 70.2923 82.7652 70.3354 82.7809C70.2387 82.5913 70.1879 82.3677 70.1969 82.1034C70.231 81.0796 71.6361 81.0484 71.8307 81.9597C71.7954 81.8395 71.7483 81.9558 71.8372 81.9924C71.8358 81.9818 71.8335 81.9701 71.8307 81.9597L71.8333 81.9693L71.8386 81.9924H71.8372C71.8408 82.0089 71.8437 82.0261 71.8456 82.0434L71.8474 82.0662L71.8463 82.0471C71.8451 82.033 71.8434 82.0204 71.8415 82.0089L71.8386 81.9924C71.8517 81.9988 71.8699 82.0029 71.8908 82.0029L71.8994 82.0063C71.9322 82.0204 72.0477 82.0743 72.0818 82.0879C72.3156 82.1742 72.577 82.2015 72.8162 82.276C73.3352 82.4357 73.7927 82.6998 74.109 83.1495C74.3364 83.4726 74.4631 83.8426 74.5153 84.2269C76.8118 85.3319 78.9854 86.7675 80.8063 88.5446C84.8698 92.5089 87.7034 97.4711 90.0286 102.607C91.2121 105.222 92.2667 107.892 93.2982 110.57L93.4609 110.993C94.5667 113.87 95.5444 116.78 95.7848 119.874C95.807 120.151 95.7155 120.411 95.5574 120.627C95.6136 120.859 95.6425 121.092 95.6345 121.32C95.6332 121.355 95.6307 121.39 95.628 121.426C95.9992 121.419 96.3625 121.575 96.7076 122.011C96.8474 121.967 96.9991 121.962 97.1481 122.01C98.0564 122.3 98.2028 123.298 98.3741 124.134C98.5506 124.997 98.6276 125.88 98.6289 126.76C98.6289 127.076 98.4486 127.473 98.1427 127.608C97.5676 127.861 96.9482 128.027 96.3534 128.258C95.9064 128.43 95.4581 128.594 95.0058 128.747C95.2568 129.184 95.3378 129.794 95.4737 130.255C95.6868 130.976 95.858 131.699 96.0019 132.436C96.9768 137.451 97.6526 142.519 98.5649 147.544C99.021 150.061 99.5518 152.561 100.093 155.061C100.36 156.29 100.644 157.516 100.948 158.738C101.11 159.389 101.279 160.04 101.453 160.687C101.503 160.876 101.554 161.065 101.606 161.253L101.697 161.583C101.896 161.693 102.066 161.859 102.183 162.086C102.613 162.918 102.366 163.856 101.542 164.324C100.645 164.834 99.5741 164.352 99.0799 163.525C98.7322 162.94 98.6185 162.166 98.4473 161.516C98.2538 160.787 98.0695 160.053 97.8918 159.32C96.6842 154.336 95.8755 149.266 95.266 144.176L95.2228 143.812C94.913 141.192 94.6137 138.565 94.4203 135.933C94.3249 134.64 94.249 133.347 94.202 132.051C94.1785 131.384 94.2164 130.713 94.2543 130.047C94.2713 129.756 94.2961 129.463 94.3052 129.172L94.3082 129.13C94.3106 129.1 94.314 129.062 94.3167 129.021L94.3196 128.971C93.4178 129.254 92.5028 129.489 91.5789 129.688C89.613 130.113 87.6014 130.35 85.5951 130.229C85.8748 133.553 86.2395 136.869 86.7492 140.163C87.2407 143.335 87.8079 146.5 88.4484 149.646C88.7688 151.227 89.115 152.804 89.4797 154.376C89.6757 155.215 89.8992 156.049 90.0758 156.893C90.1802 157.395 90.2129 157.815 90.0025 158.284C90.2342 158.915 90.4399 159.55 90.6424 160.147L90.703 160.325C91.0612 161.371 91.7408 162.441 91.0311 163.469C90.664 163.999 90.0653 164.303 89.4627 164.321C89.4522 164.328 89.4404 164.336 89.4287 164.342C89.1045 164.516 88.7307 164.55 88.3752 164.475C87.8354 164.581 87.2943 164.683 86.7519 164.776C85.4121 165.008 84.0659 165.198 82.717 165.359C80.1487 165.665 77.5634 165.833 74.9795 165.925C65.519 166.267 56.0482 165.668 46.584 165.84C41.7622 165.928 36.9406 166.145 32.1267 166.433C29.7244 166.577 27.3207 166.731 24.9171 166.85L24.1731 166.886C22.0235 166.989 19.8724 167.068 17.7245 166.911C17.6826 166.909 17.65 166.892 17.6277 166.868C16.8866 166.785 16.1418 166.102 16.2161 165.314C16.5364 161.956 16.8566 158.598 17.1781 155.239C17.7493 149.254 18.3257 143.27 18.9086 137.286L18.9929 136.422C19.1887 134.406 19.3757 132.385 19.4707 130.361C18.9923 130.327 18.5153 130.284 18.0381 130.232C12.8681 129.666 7.9118 128.101 3.15295 126.046L2.96013 125.963C2.53143 125.776 2.0622 125.589 1.58121 125.389C1.58918 126.303 1.55899 127.218 1.55507 128.123C1.54853 129.625 1.56029 131.128 1.56422 132.629C1.57336 135.722 1.691 138.817 1.84523 141.906C2.11579 147.361 2.4334 152.808 2.91439 158.25C3.03594 159.619 3.20076 160.985 3.31696 162.354C3.38636 163.161 3.22024 163.833 2.48189 164.257C2.1184 164.466 1.83739 164.379 1.47664 164.21C0.5957 163.797 0.570866 162.82 0.487216 161.97C0.423302 161.329 0.364354 160.689 0.306844 160.047C0.184113 158.678 0.0781116 157.309 -0.00815296 155.937C-0.349159 150.487 -0.448625 145.043 -0.213358 139.586C-0.104127 137.034 0.0535645 134.476 0.262856 131.928L0.312072 131.341C0.484601 129.305 0.5957 127.168 0.952522 125.119C-0.486529 124.481 -1.91251 123.669 -2.57387 122.32C-3.43116 120.568 -2.48892 119.069 -1.14659 118.038C-1.15966 117.864 -1.14659 117.691 -1.10999 117.534C-0.72441 115.864 -0.0787331 114.214 0.544725 112.622C1.17341 111.021 1.86745 109.446 2.63076 107.904C5.69446 101.728 9.87961 96.0852 14.8686 91.3308C17.3467 88.9695 20.0588 86.7871 22.9539 84.9565C24.389 84.0505 25.8608 83.2136 27.3848 82.4684L27.6101 82.3586C28.671 81.8436 29.8609 81.2959 31.0407 81.0092C31.1634 80.9176 31.2876 80.8313 31.4131 80.749C31.8771 80.4402 32.5071 80.6638 32.7816 81.1045C32.915 81.0012 33.0691 80.9098 33.2456 80.8273L33.42 80.7476C34.4785 80.2708 35.7496 79.8249 36.8987 80.1383C37.6124 80.3332 38.1744 80.8588 38.4268 81.5283C39.0057 81.2223 39.5742 80.9072 40.1297 80.5214C41.0224 79.9043 41.8315 79.1379 42.5582 78.3338C44.0156 76.7165 45.0743 74.8218 45.5474 72.6891ZM96.1155 123.684C96.0162 123.712 95.9116 123.723 95.8031 123.71C95.9991 123.733 95.6065 123.849 95.4988 123.904L95.4907 123.909C95.2947 124.021 95.0974 124.129 94.8973 124.234C94.4307 124.48 93.9538 124.701 93.4687 124.909C92.5133 125.316 91.5265 125.628 90.5135 125.857C89.5228 126.08 88.4837 126.211 87.4681 126.232C86.7885 126.245 85.982 126.214 85.2788 126.014C85.36 127.247 85.45 128.478 85.5507 129.709L86.9394 129.39C88.3283 129.071 89.7157 128.745 91.086 128.348C92.1146 128.05 93.1289 127.701 94.1314 127.324C94.6568 127.126 95.1783 126.917 95.6933 126.692C95.9496 126.58 96.1899 126.447 96.4274 126.312L96.6305 126.197C96.5834 125.646 96.4971 125.106 96.3718 124.562C96.3065 124.275 96.1952 123.979 96.1155 123.684ZM1.01787 117.877C0.841423 118.45 0.570866 118.984 -0.0460572 119.114C-0.264333 119.16 -0.447187 119.135 -0.598934 119.06L-0.635322 119.134C-1.14256 120.175 -1.29152 121.274 -0.124479 122.077C0.402389 122.439 0.976047 122.753 1.56944 123.034C2.6306 123.539 3.76068 123.945 4.82614 124.358L5.03833 124.441C6.94399 125.189 8.87972 125.87 10.8455 126.44C12.8402 127.017 14.8699 127.479 16.9247 127.774C17.7911 127.897 18.6642 127.983 19.5388 128.039C19.553 126.862 19.5465 125.684 19.5425 124.507C19.2315 124.468 18.923 124.426 18.6251 124.391C17.7179 124.285 16.8134 124.156 15.9142 123.995C14.036 123.659 12.1774 123.195 10.3645 122.601C7.00542 121.499 3.88029 119.923 1.01787 117.877ZM37.8463 81.8302C37.083 81.0222 35.6231 81.3138 34.7017 81.7061C34.4232 81.8251 34.1422 81.9454 33.8755 82.0905L33.8239 82.1194C33.5134 82.2983 33.5149 82.4046 33.6666 82.7611C33.8638 83.2307 34.1383 83.6843 34.3997 84.1197C35.5186 85.9883 36.9915 87.6149 38.6737 88.989C44.6312 93.8531 53.1897 95.5687 60.6398 93.9395C64.2154 93.1585 67.6643 91.5818 70.2965 88.996L70.5362 88.7574C71.5975 87.695 73.0543 86.1572 72.9521 84.5827C72.9038 83.8255 72.2855 83.7823 71.6542 83.636C71.3956 83.5759 71.1484 83.4908 70.9341 83.3706C71.1066 84.1146 70.1879 85.2206 69.7133 85.685C68.7186 86.659 67.5214 87.42 66.255 87.9889C63.8447 89.0728 61.2229 89.5854 58.6126 89.9095C55.6508 90.2784 52.625 90.2457 49.6855 89.7005C47.1276 89.2258 44.6063 88.3275 42.4053 86.9284C41.3963 86.2876 40.4016 85.5567 39.5599 84.7056L39.381 84.5247C38.7733 83.9088 38.0662 83.1642 37.7026 82.3559C37.564 82.3572 37.4268 82.3532 37.2895 82.344C37.1928 82.3389 37.1407 82.2015 37.2373 82.1505C37.3457 82.093 37.4542 82.0356 37.5627 81.9794C37.5445 81.9191 37.5287 81.8604 37.5157 81.8002C37.5052 81.7492 37.5588 81.7022 37.6058 81.7309C37.6712 81.77 37.7339 81.812 37.7954 81.8563C37.8124 81.8486 37.8293 81.8395 37.8463 81.8302Z"
                           fill="black"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M76.6307 44.5556C76.3202 40.5356 76.8014 36.3222 75.2521 32.5013C72.5507 26.1616 64.9756 24.0478 59.1029 21.6342C56.7502 20.9388 48.8337 20.8415 46.079 19.9211C39.8443 17.8379 38.3547 15.3559 33.4008 19.3223C32.5645 19.9999 32.0413 20.7363 31.6597 21.7425L31.6753 21.7468C31.5663 22.1662 31.6832 22.5848 31.9288 22.9045C29.7808 25.1009 28.8819 28.3938 29.984 31.3177C33.5806 38.9262 33.4115 43.0401 32.2527 51.2196C30.7394 58.8557 34.1974 61.6451 39.9243 65.8C39.6912 66.2523 39.6428 66.8534 39.9468 67.2524C46.5692 76.5621 59.0557 81.007 69.7542 76.2818C74.0969 74.3482 76.0356 69.7216 77.142 65.547C78.4309 60.8726 78.8269 55.9471 77.7777 51.1855C77.3544 48.9833 76.8031 46.7971 76.6307 44.5556Z"
                           fill="white"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M38.4317 0.0180522C39.2355 -0.102701 39.8426 0.396225 40.1314 1.09945L40.1465 1.13732C40.2393 1.3766 40.3426 1.60934 40.4537 1.83816C42.4652 0.850962 45.3355 1.10463 46.6085 3.10387C47.5169 4.53172 46.9627 6.22631 46.6203 7.74045L46.3955 8.73811C46.83 9.01476 47.1578 9.51017 47.1424 10.0232L47.1405 10.0627L47.049 11.4539C47.3392 11.1597 47.6045 10.8394 47.8411 10.4981C48.0045 10.1986 48.1809 9.90445 48.3704 9.61941C49.4853 7.94182 51.9883 9.39974 51.0682 11.1963C50.8917 11.5428 50.693 11.871 50.48 12.1874C50.2395 12.6542 50.0421 13.1341 49.8905 13.6271C50.3258 13.8166 50.6604 14.2377 50.6957 14.8731C50.778 16.3572 49.999 17.5955 48.7599 18.3735C48.3953 18.6023 48.0188 18.6467 47.6777 18.5618C47.6176 18.6428 47.5575 18.7239 47.4999 18.8063C47.994 19.2077 48.4397 19.6653 48.8227 20.1727C49.9755 20.0001 51.1348 19.919 52.2942 19.9164C53.711 19.2221 55.4075 19.2364 56.9302 19.4967C57.9105 19.664 58.8516 19.9896 59.8162 20.2236C60.8331 20.4695 61.8656 20.4786 62.8943 20.646C64.1908 20.8565 65.328 21.4554 66.0429 22.4112C66.8285 22.4347 67.6545 22.7564 68.3394 23.1931C69.934 24.2104 71.5194 25.242 73.1101 26.2658C73.7206 26.6589 73.9488 27.2864 73.8366 27.9863L73.829 28.031L73.7754 28.3213L73.9012 28.5C74.388 29.1877 74.9177 29.908 75.2327 30.6671C75.8157 31.5078 76.3424 32.3891 76.809 33.2979C77.4377 34.5191 77.9566 35.8136 78.3082 37.1421C78.3958 37.4781 78.4833 37.8168 78.5408 38.1593C78.6232 38.6431 78.4964 39.0184 78.4271 39.4826C78.3409 40.071 78.3095 40.6672 78.218 41.2569C78.1566 41.6479 77.8246 41.8401 77.4769 41.8506C77.6076 42.8456 77.7017 43.8472 77.7919 44.8409C77.9187 46.2609 78.005 47.6849 78.0795 49.1088C78.4637 49.6671 79.2493 50.1091 79.8165 50.262C80.602 50.4726 81.4255 50.2437 82.1679 49.9757C82.6345 49.807 83.0175 50.3941 82.79 50.7864C82.0751 52.0181 80.5458 52.0128 79.3878 51.4676C78.8977 51.2375 78.4676 50.904 78.1487 50.4699C78.1683 50.8831 78.1892 51.2963 78.2102 51.7108L78.2296 52.0862C78.4651 56.4707 78.9735 61.006 78.15 65.3473C76.7241 72.867 70.5035 78.5927 62.9047 79.0373C58.9172 79.2707 55.5966 78.0924 53.9454 77.4351C52.2942 76.7779 52.9359 75.4377 54.0822 75.8208C56.0569 76.4808 59.6845 77.4639 62.9309 77.0394C70.5823 76.0388 77.0704 72.213 76.4038 55.7354C76.3093 53.3988 76.0183 51.061 75.9555 48.7244C75.8954 46.4401 75.9176 44.1545 75.817 41.8715L75.7834 41.0925C75.7441 40.1824 75.7021 39.268 75.634 38.3568C75.5516 38.0037 75.4837 37.6455 75.383 37.299C75.1099 36.3562 74.753 35.4396 74.31 34.5649C74.2119 34.6394 74.1021 34.693 73.9832 34.7139C73.08 34.8761 72.2331 34.8303 71.3874 34.4537C70.9927 34.2798 70.645 34.0484 70.3209 33.762C70.1666 33.6274 70.0634 33.4966 69.9823 33.3606C69.5732 33.3672 69.1641 33.2443 68.908 32.9501C68.6158 32.6147 68.5672 32.2684 68.6816 31.9478L68.6936 31.9158L68.6648 31.9053C68.3198 32.7984 67.6323 33.5842 66.8781 34.1151C65.6861 34.9571 64.1948 35.2003 62.7649 35.2226C61.186 35.2461 59.5208 35.0029 57.9628 34.7545C57.5511 34.6891 57.142 34.6146 56.7407 34.5139C56.725 34.5296 56.7093 34.5479 56.6924 34.5636C55.3553 35.8437 53.4744 36.1732 51.7779 35.4422C50.7976 35.0199 49.9755 34.34 49.2488 33.5607C49.2383 33.9686 49.2174 34.3766 49.1821 34.7806L49.1675 34.9411C49.0951 35.6936 48.9559 36.4918 48.3874 37.0348C47.4686 37.9148 46.1354 37.5618 45.0754 36.9891C45.0767 37.0165 45.0767 37.0453 45.0767 37.0741C45.3629 38.0469 45.6505 39.021 45.938 39.9951L46 40.2027C46.2091 40.8943 46.4384 41.5869 46.5014 42.3108C46.6216 43.6942 45.7015 45.0606 44.1644 44.5964C43.3581 44.3538 42.7122 43.6756 42.0924 43.1324L41.7019 42.7946C42.7123 46.0988 43.4128 49.5207 43.4782 52.9687C43.4821 53.1556 43.3213 53.2969 43.1436 53.3034C42.7279 53.3204 42.2809 53.238 41.8627 53.072C41.8391 53.0707 41.8156 53.0694 41.7908 53.0654C41.0771 52.9621 40.4145 52.7045 39.8302 52.324C39.9649 52.7516 40.025 53.2106 39.9897 53.6904C39.9805 53.8068 39.7989 53.8473 39.7727 53.7192C39.4355 52.0599 37.4945 50.806 35.8215 51.1237C34.0257 51.465 32.7029 53.0105 32.3788 54.7692C32.0311 56.6586 32.6964 58.8435 33.9289 60.3014C34.4962 60.9735 35.2425 61.5344 36.1287 61.6757C36.5339 61.7397 36.9547 61.7175 37.3482 61.6024C37.5155 61.5527 37.6723 61.4834 37.8318 61.4181C38.0644 61.3239 38.3363 61.3095 38.5559 61.2102C39.0538 60.9866 39.5544 61.4455 39.3022 61.9568C39.0826 62.4027 38.8852 62.7034 38.5206 62.9335C38.816 63.2944 39.0839 63.7965 39.1832 63.9312C39.6904 64.6163 40.2053 65.2636 40.7831 65.8899C41.3712 66.5254 42.013 67.1059 42.6913 67.6433L42.9765 67.8687C43.6299 68.3871 44.1988 68.8675 44.6597 69.6112C45.0231 70.1983 44.5526 70.9946 43.8716 70.9854C41.7411 70.9553 40.1923 69.0829 39.0891 67.4472C38.9323 67.2131 38.7846 66.966 38.6474 66.7123C38.5977 66.7921 38.5428 66.8666 38.4814 66.9346L38.6029 67.2615C38.9637 68.2239 37.4096 68.8528 36.9587 67.9545C36.6306 67.3034 36.2502 66.6836 35.8268 66.0978C35.5771 66.0625 35.3327 65.9108 35.1968 65.7147C34.853 65.2165 34.4674 64.7131 34.142 64.1822C33.9616 64.0109 33.776 63.8462 33.5865 63.6854C33.5316 63.7337 33.4754 63.7821 33.4218 63.8331C33.1839 64.3757 32.8898 64.8713 32.5252 65.3381L32.447 65.4377C31.7484 66.3185 30.8384 67.22 29.7124 67.4354C29.3687 67.5008 29.038 67.0732 29.3425 66.8C30.1307 66.0913 31.0626 65.6088 31.7893 64.8177C32.1474 64.428 32.4761 63.9988 32.7588 63.5489L32.8232 63.4448C32.8702 63.3676 32.9186 63.2905 32.9683 63.212C32.6402 62.9884 32.3121 62.7635 31.9841 62.5386C31.0809 63.3105 29.9049 63.6636 28.9059 64.303L28.8067 64.3679C27.9035 64.972 26.952 63.6357 27.6761 62.9021C28.4743 62.0966 29.1406 61.1359 29.8477 60.2405C29.5152 59.6278 29.3578 58.9033 29.2989 58.171C29.2756 57.9638 29.2574 57.7564 29.2393 57.549C28.7321 57.5569 28.2224 57.383 27.7911 57.0835L27.6277 56.9672C27.1036 57.1345 26.5533 57.2156 26.0266 57.2012C24.7875 57.1646 24.2804 55.7485 25.0554 54.8529C25.8462 53.9376 27.2304 53.7375 28.327 54.1821C28.3623 54.1638 28.3989 54.1442 28.4341 54.1245C28.3819 53.884 28.3935 53.6657 28.453 53.474L28.4357 53.3571C28.1946 52.987 28.036 52.5644 27.9759 52.1178C27.9283 51.7642 27.938 51.4136 28.0198 51.0644C28.047 50.9481 28.1036 50.8277 28.1469 50.7065C28.0577 50.4813 28.0053 50.2486 27.9891 50.0145C27.9641 49.9848 27.9393 49.9544 27.9158 49.9214C27.3717 49.1572 27.4816 48.2362 27.9994 47.6178C28.0018 47.5784 28.0054 47.5391 28.0108 47.5C27.9805 47.4317 27.9526 47.3628 27.9273 47.2931C27.4213 46.7825 27.0499 46.1681 27.1191 45.4067C27.1598 44.9587 27.3438 44.5555 27.6223 44.2541C27.5729 44.1079 27.5682 43.9386 27.6281 43.7972C27.1836 42.6144 27.2398 41.1898 27.5597 39.867C27.4892 39.6656 27.4526 39.4473 27.4604 39.2158C27.497 38.2339 28.3466 37.3317 29.353 37.3434C29.4742 37.3445 29.5876 37.3603 29.6966 37.3834L29.6981 37.36C29.7366 37.0653 29.8176 36.7929 29.9359 36.5486C29.8778 36.5275 29.8239 36.4973 29.7767 36.4572C29.1318 36.8013 28.4494 37.0644 27.734 37.2437C27.2079 37.3755 26.669 36.7773 26.996 36.2833C27.1478 36.054 27.3152 35.8482 27.4956 35.6602C27.2391 35.6617 26.9788 35.679 26.7154 35.7129C26.2422 35.7744 25.7142 35.4514 25.407 35.0147C25.0254 35.386 24.6424 35.7561 24.2595 36.1261C23.2896 37.0662 21.8244 36.3745 21.6715 35.135C21.3827 35.0578 21.1134 34.9271 20.8768 34.7401C19.3476 35.4043 17.702 35.7691 16.0199 35.8384C14.8122 35.8881 14.1064 34.4812 14.671 33.4875C15.0501 32.8206 15.5206 32.2217 16.063 31.7013C15.2213 31.9589 14.3521 32.1446 13.4646 32.2636C12.9849 32.3277 12.3066 31.9302 12.1144 31.4895C11.3799 29.7949 11.4426 28.0284 12.2883 26.3796C12.321 26.3142 12.3575 26.2515 12.3928 26.1887C12.4804 25.9703 12.5758 25.7546 12.6791 25.5428C11.6387 24.4575 11.5485 22.844 12.1092 21.4933C11.8844 21.1285 11.7981 20.6891 11.9511 20.2916C12.3863 19.1475 13.0137 18.091 13.8057 17.1836C13.7299 17.0371 13.6633 16.8815 13.6071 16.7142C13.1614 15.3609 13.6777 13.7277 14.7194 12.785C15.3742 12.1914 16.1271 11.8357 16.9309 11.6082C17.2694 11.0093 17.7046 10.4693 18.2118 10.0143C18.2314 9.97114 18.251 9.92799 18.2732 9.88484C19.0627 8.39684 20.5004 7.59924 22.0414 7.41487C22.1015 6.83301 22.4936 6.2773 23.0635 6.09686C23.2204 5.59345 23.4543 5.11227 23.7759 4.67555C24.2817 3.98778 25.1221 3.66351 25.9142 4.11461C26.3481 4.36174 26.7637 4.64548 27.1532 4.95929C27.3282 4.87722 27.5265 4.82411 27.7503 4.80717L27.8068 4.80369L29.0955 4.73831C29.6353 4.49903 30.1738 4.24798 30.7136 4.00347C31.0378 3.73542 31.3998 3.51183 31.7945 3.34577C32.2416 3.15879 32.699 3.05288 33.1578 3.01758C33.5303 2.89597 33.9054 2.78875 34.2871 2.70507C35.1837 2.50894 36.1222 2.3991 37.0528 2.40826C37.0718 2.16729 37.0813 1.92345 37.0794 1.67672L37.0776 1.55312C37.0567 0.762049 37.688 0.130502 38.4317 0.0180522ZM37.5285 63.3101C37.4004 63.3376 37.271 63.3598 37.1416 63.3755C37.1809 63.4722 37.2201 63.569 37.258 63.6657C37.3625 63.7246 37.4684 63.7808 37.5743 63.8331C37.5429 63.6553 37.5246 63.4762 37.5285 63.3101ZM30.8133 61.3139L30.7265 61.4739C30.7124 61.5001 30.6985 61.526 30.6849 61.5514C30.8692 61.5371 31.0548 61.541 31.2377 61.5619L31.2372 61.5424C31.2137 61.5344 31.1902 61.5271 31.1677 61.5161C31.0414 61.4555 30.9241 61.3875 30.8133 61.3139ZM34.4426 54.0108C35.599 54.0782 36.5787 54.2555 37.6303 54.7616L37.7207 54.8058C38.65 55.2674 40.1871 56.1199 40.0577 57.3424C40.0211 57.6902 39.7688 58.0564 39.3715 58.0289C38.2827 57.9544 37.6605 56.856 36.9234 56.1709C36.1797 55.4805 35.266 54.7705 34.3655 54.2958C34.2382 54.229 34.2883 54.0175 34.4269 54.0107L34.4426 54.0108ZM29.1988 37.9031C28.9217 37.9122 29.0145 38.1816 29.1569 37.9567C29.1687 37.9384 29.1831 37.9201 29.1988 37.9031ZM44.156 19.9213C41.5317 19.9904 38.8906 21.5405 36.9247 23.1073C35.2144 24.4704 33.7376 26.0918 32.4299 27.8394C32.0935 28.7097 31.8046 29.5981 31.5606 30.4932C31.3998 31.0842 31.2992 31.6817 31.1645 32.278L31.1227 32.4608C31.017 32.6585 30.9384 32.8712 30.8812 33.091C31.1195 33.33 31.4286 33.5012 31.7689 33.5824C31.8786 33.6085 31.9697 33.6651 32.0417 33.7402C32.3157 33.2828 32.5551 32.8001 32.6944 32.2883L32.6995 32.2646C33.2261 31.4018 33.7981 30.5657 34.4112 29.7583C36.1025 27.5289 37.9651 25.497 40.204 23.8063C41.9019 22.5249 43.7997 21.5207 45.8178 20.8683C45.3239 20.4696 44.7629 20.1542 44.156 19.9213Z"
                           fill="black"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M64.6169 68.5063C63.7382 68.1477 62.9543 67.5496 62.3811 66.7855C62.1819 66.5199 62.1302 66.2394 62.172 65.9828C62.219 65.6944 62.3896 65.4329 62.6223 65.2576C62.8556 65.0817 63.1476 64.9949 63.4298 65.0391C63.675 65.0776 63.9192 65.2119 64.1124 65.4905L64.1527 65.5462C64.4935 66.0073 64.9375 66.3857 65.4434 66.6296C65.9311 66.8647 66.4764 66.9744 67.0408 66.9106C68.1157 66.7891 68.8566 66.2076 69.644 65.4179C69.7416 65.3182 69.8393 65.2153 69.9375 65.1109C69.9994 65.0161 70.0855 64.9553 70.181 64.9233C70.287 64.8879 70.4069 64.8899 70.5168 64.9282C70.6228 64.9652 70.7175 65.0353 70.781 65.1286C70.8414 65.2173 70.8756 65.3268 70.8645 65.4528C70.7924 66.2713 70.3647 67.0017 69.7572 67.5752C69.0824 68.2121 68.188 68.6528 67.3459 68.8074C66.4182 68.9776 65.4729 68.8556 64.6169 68.5063ZM67.7835 55.8806C68.7705 56.4808 70.2744 57.8803 69.2126 59.3682C67.9628 60.6801 66.1634 59.1759 65.2766 58.4956C64.4544 57.9684 63.5306 59.3244 64.2934 59.94C70.701 64.6858 73.3014 56.0376 68.2827 55.175C67.7302 55.0799 67.525 55.695 67.7835 55.8806ZM56.3011 50.3601C56.4101 49.0059 58.4717 48.6984 58.6767 50.0384C58.8604 51.2387 58.6442 52.3414 58.1037 53.4221C57.5873 54.4545 56.2894 53.9729 56.1912 53.0327C56.0596 51.7725 56.2332 51.2024 56.3011 50.3601ZM71.9939 49.7606C72.2813 49.384 72.6963 49.1269 73.1935 49.2722C74.7469 49.7263 74.289 51.9325 73.7435 53.0064C73.447 53.5896 72.4888 53.7375 72.0558 53.224C71.35 52.3867 71.012 50.7144 71.9093 49.8896C71.9336 49.847 71.9607 49.804 71.9939 49.7606ZM58.0818 44.4348L58.3272 44.3918C59.0863 44.2605 60.0302 44.1343 60.5672 44.7448C60.852 45.0685 60.95 45.6703 60.5672 45.9802C59.8938 46.5254 59.1493 46.3141 58.3423 46.3603C57.6773 46.3985 57.0382 46.5086 56.3976 46.6917C54.9923 47.0936 53.8472 47.8271 52.6469 48.6325C52.4894 48.7382 52.3287 48.5367 52.4038 48.3893C53.0967 47.0317 54.4394 45.9165 55.7843 45.2367C56.5022 44.8739 57.2877 44.5729 58.0818 44.4348ZM70.5778 43.8266L70.7656 43.8651C72.8095 44.2925 75.4649 45.1462 76.4328 47.1545C76.4696 47.4385 76.4307 47.4994 76.399 47.5391L76.3884 47.5524C76.3623 47.5863 76.3415 47.6331 76.2185 47.6718C76.1843 47.6637 76.1498 47.655 76.115 47.6459C75.6713 47.5296 75.3203 47.3694 74.9805 47.2031L74.612 47.0215C74.1846 46.8118 73.7533 46.6098 73.2963 46.4606C72.321 46.1424 71.3178 45.9182 70.299 45.7985C70.0782 45.7725 69.8656 45.698 69.6978 45.5702C69.5386 45.4489 69.417 45.281 69.3615 45.0578C69.2896 44.769 69.3103 44.5503 69.4652 44.2897C69.5817 44.094 69.7484 43.9584 69.9398 43.8805C70.1349 43.8011 70.357 43.7824 70.5778 43.8266Z"
                           fill="black"></path>
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M82.9606 45.9254C82.853 45.9075 82.7453 45.8906 82.6376 45.8748C82.5536 45.8271 82.4549 45.7903 82.3401 45.7682C82.0781 45.7017 81.8179 45.6568 81.558 45.6326C77.8288 44.7931 69.2014 45.9852 68.8453 49.1688C67.6578 49.5654 66.6302 49.2102 65.2537 49.2455C64.206 44.8646 46.0926 45.4829 45.2215 48.1242C45.2182 48.1233 45.215 48.1225 45.2116 48.1214C44.3745 47.8623 43.1406 47.9248 42.1825 47.8837C40.1369 47.8408 38.0889 48.0232 36.0874 48.4549C32.3394 49.0507 27.2243 49.7483 29.831 54.4304C29.8315 54.4312 29.8319 54.4321 29.8325 54.4329C30.2818 54.8935 31.0446 54.5222 31.0729 53.8986C30.1966 51.6805 32.1759 51.4141 33.6989 50.7767C37.4884 49.4147 41.3465 49.2259 45.2658 49.6472C45.5607 49.9945 46.0081 50.2973 46.481 50.4558C49.1015 50.891 47.7204 52.8356 49.3768 53.1184C49.0726 59.897 57.2992 63.5971 62.0659 59.1411C63.969 57.2797 64.4227 54.5222 64.864 52.0366C65.0973 51.9842 65.2456 51.8566 65.3323 51.6877C65.8934 51.1272 66.2459 50.6097 67.3554 50.4558C68.465 50.302 69.3191 50.6108 69.4347 50.7053C69.4638 50.764 69.4951 50.8228 69.5314 50.8817C69.5821 50.9694 69.6511 51.0394 69.7296 51.0944C68.6339 57.8445 73.8721 62.1134 79.1602 58.6124C81.458 56.4501 81.9436 53.1397 82.0395 50.1849C82.351 49.9969 82.5482 49.6324 82.4404 49.1743C82.2918 48.5427 82.6402 47.9959 83.1952 47.7213C83.9163 47.3648 83.7887 46.0626 82.9606 45.9254ZM60.238 49.1277C59.5816 48.9833 59.3013 49.9957 59.9598 50.1405C60.4261 50.2431 60.8213 50.4783 61.0883 50.8768L61.1164 50.9202C61.4747 51.4905 62.3806 50.964 62.0199 50.39C61.614 49.744 60.9832 49.2916 60.238 49.1277ZM79.4628 48.5C79.2314 48.3369 78.8812 48.458 78.7469 48.6884C78.599 48.9422 78.6959 49.2247 78.9126 49.3907L78.9347 49.4069C79.1335 49.547 79.3271 49.7983 79.3514 50.0557L79.3535 50.0879C79.3796 50.7616 80.4262 50.765 80.4 50.0879C80.3745 49.4255 79.9911 48.8721 79.4628 48.5Z"
                           fill="black"></path>
                     </g>
                  </g>
                  <defs>
                     <clipPath id="clip0_2248_60">
                        <rect width="100" height="100" fill="white"></rect>
                     </clipPath>
                  </defs>
               </svg>
               <div>
                  <p class="font-Beret text-lg leading-light mb-3 lg:mb-0">"Just an amazing smell of soap. I will definitely order more"</p>
                  <p class="lg:flex lg:items-center lg:gap-3">
                     <svg class="block w-24 h-5 mb-1 mx-auto lg:mx-0" fill="none">
                        <use xlink:href="@/assets/img/sprite.svg#workStar"></use>
                     </svg>
                     <span class="text-secondary text-xs uppercase"> DIANNE </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="py-16 sm:py-24">
      <v-about></v-about>
   </section>
</template>

<script>
export default {
   data() {
      return {
         products: [
            {
               id: 1,
               name: "card-text",
            },
            {
               id: 2,
               name: "card-text",
            },
            {
               id: 3,
               name: "card-text",
            },
            {
               id: 4,
               name: "card-text",
            },
         ],
      };
   },
};
</script>
