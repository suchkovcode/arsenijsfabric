<template>
   <section class="mt-16 lg:mt-24">
      <div class="container py-12">
         <block-v-breadcrumbs class="mb-6" :roter-link="{ catalog: true, name: 'cards.title', to: $route.fullPath }" />
         <article class="flex flex-col gap-5 lg:flex-row lg:gap-8">
            <img
               class="w-full mx-auto max-w-[460px] rounded-xl lg:mx-0"
               src="@/assets/img/hero__card-1.jpeg"
               alt="card picture"
               loading="lazy"
               width="400"
               height="400" />
            <div class="mx-auto max-w-[460px] lg:mx-0 lg:max-w-none">
               <card-rating class="mb-3" :rating-storage="currentCardData" @rating-data="addRatingData" />
               <h2 class="mb-5 font-Beret text-tertiary text-2xl uppercase leading-none">HOT SETTING ANTI AGING Alginate Face mask</h2>
               <div class="flex items-center gap-2 mb-5 font-Giga">
                  <p class="text-[#b4b3bd] line-through text-xl">9,95 €</p>
                  <p class="text-tertiary font-medium text-xl">5,95 €</p>
               </div>
               <div class="relative flex items-center gap-3 mb-5">
                  <card-count :count-data="1" />
                  <button
                     class="flex justify-center items-center gap-2 w-full h-11 rounded-[55px] border border-tertiary font-Beret bg-primary text-white tracking-wide max-w-[150px]">
                     <svg class="w-5 h-5">
                        <use xlink:href="@/assets/img/sprite.svg#iconBag"></use>
                     </svg>
                     Buy now
                  </button>
                  <card-favorite class="relative !top-0 !left-0" />
               </div>
               <div>
                  <p class="mb-3 text-tertiary text-sm font-Giga">
                     Hot Setting ANTI AGING face mask with black caviar extract. Black caviar saturates the skin with essential antioxidants, they are
                     needed to prevent and slow down premature aging, which begins due to the negative effects of free radicals. In addition, it
                     increases the content of collagen and elastin in the epidermis, which are responsible for the evenness and elasticity of the
                     skin.
                  </p>
                  <p class="mb-3 text-tertiary text-sm font-Giga">
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

<script>
export default {
   data() {
      return {
         currentCardData: {},
         isHover: false,
      };
   },

   methods: {
      addRatingData(event) {
         console.log(event);
      },
   },
};
</script>
