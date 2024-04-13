<template>
   <section class="mt-16 lg:mt-24">
      <div class="container py-12">
         <block-v-breadcrumbs class="mb-6" :roter-link="{ catalog: true, name: 'cards.title', to: $route.fullPath }" />
         <article class="flex flex-col gap-5 lg:flex-row lg:gap-8">
            <img
               class="mx-auto w-full max-w-[460px] rounded-xl lg:mx-0"
               src=""
               alt="card picture"
               loading="lazy"
               width="400"
               height="400" />
            <div class="mx-auto max-w-[460px] lg:mx-0 lg:max-w-none">
               <card-rating class="mb-3" :rating-storage="currentCardData" @rating-data="addRatingData" />
               <h2 class="mb-5 font-Beret text-2xl uppercase leading-none text-tertiary">HOT SETTING ANTI AGING Alginate Face mask</h2>
               <div class="mb-5 flex items-center gap-2 font-Giga">
                  <p class="text-xl text-[#b4b3bd] line-through">9,95 €</p>
                  <p class="text-xl font-medium text-tertiary">5,95 €</p>
               </div>
               <div class="relative mb-5 flex items-center gap-3">
                  <card-count :count-data="1" />
                  <button
                     class="flex h-11 w-full max-w-[150px] items-center justify-center gap-2 rounded-[55px] border border-tertiary bg-primary font-Beret tracking-wide text-white">
                     <svg class="h-5 w-5">
                        <use xlink:href="/img/sprite.svg#iconBag"></use>
                     </svg>
                     Buy now
                  </button>
                  <card-favorite class="relative !left-0 !top-0" />
               </div>
               <div>
                  <p class="mb-3 font-Giga text-sm text-tertiary">
                     Hot Setting ANTI AGING face mask with black caviar extract. Black caviar saturates the skin with essential antioxidants, they are
                     needed to prevent and slow down premature aging, which begins due to the negative effects of free radicals. In addition, it
                     increases the content of collagen and elastin in the epidermis, which are responsible for the evenness and elasticity of the
                     skin.
                  </p>
                  <p class="mb-3 font-Giga text-sm text-tertiary">
                     How to use: Content of 1 pack is advised for 1 use. Add 90 ml of warm water(40°C) and mix to a thick consistency. Quickly apply a
                     thick layer on clean skin, avoiding the area around eyes and eyebrows. In 15 min carefully remove the mask by grabbing the bottom
                     edge. Does not require rinsing. Use 1-2 times a week
                  </p>
               </div>
            </div>
         </article>
      </div>
   </section>
</template>

<script setup>
const currentCardData = ref({});
const isHover = ref(false);
</script>
