<template>
   <article class="overflow-hidden rounded-3xl w-full max-w-[340px]">
      <header class="relative">
         <card-favorite />
         <nuxt-img
            class="block w-full h-[230px] object-cover md:h-[250px]"
            src="/hero__card-1.jpeg"
            alt="card picture"
            loading="lazy"
            width="400"
            height="400" />
      </header>
      <main class="flex flex-col gap-3 p-5 bg-violet">
         <card-rating :rating-storage="currentCardData" @rating-data="addRatingData" />
         <h2 class="font-Beret text-tertiary text-lg leading-none max-w-[230px]">HOT SETTING ANTI AGING Alginate Face mask</h2>
         <p class="text-sm text-tertiary mb-3 min-h-[30px] opacity-60">with Tea Tree Leaf oil; Sea Silt Extract and Burdock Root Extract</p>
         <div class="flex items-center gap-2 font-Giga">
            <p class="text-[#b4b3bd] line-through text-xl">9,95 €</p>
            <p class="text-tertiary font-medium text-xl">5,95 €</p>
         </div>
      </main>
      <footer class="flex flex-col gap-3 p-5 bg-violet">
         <nuxt-link
            class="flex justify-center items-center w-full h-11 rounded-[55px] border border-tertiary font-Beret bg-secondary text-white tracking-wide"
            to="/">
            Learn more
         </nuxt-link>
         <button
            class="flex justify-center items-center gap-2 w-full h-11 rounded-[55px] border border-tertiary font-Beret bg-primary text-white tracking-wide">
            <svg class="w-5 h-5">
               <use xlink:href="@/assets/img/sprite.svg#iconBag"></use>
            </svg>
            Buy now
         </button>
      </footer>
   </article>
</template>

<script>
export default {
   props: {
      cardData: {
         type: Object,
         required: true,
      },
   },

   data() {
      return {
         currentCardData: {},
         isHover: false,
      };
   },

   methods: {
      addRatingData(event) {
         console.log(event);
      }
   }
};
</script>
