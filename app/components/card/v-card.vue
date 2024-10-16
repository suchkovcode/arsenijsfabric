<template>
   <article class="w-full max-w-[340px] overflow-hidden rounded-3xl">
      <header class="relative">
         <v-favorite :card-id="cardData.id" />
         <UnLazyImage
            class="block h-[230px] w-full object-cover md:h-[250px]"
            :blurhash="cardData.blurhash"
            :src-set="cardData.img"
            width="400"
            height="400" />
      </header>
      <div class="flex flex-col gap-3 bg-violet p-5">
         <v-rating />
         <h2 class="max-w-[230px] font-Beret text-lg leading-none text-tertiary">
            {{ cardData.title }}
         </h2>
         <p class="mb-3 h-[60px] min-h-[30px] overflow-hidden text-ellipsis text-sm text-tertiary opacity-60">
            {{ cardData.previews }}
         </p>
         <div class="flex items-center gap-2 font-Giga">
            <p v-if="cardData.price.old" class="text-xl text-[#b4b3bd] line-through">{{ cardData.price.old }} €</p>
            <p class="text-xl font-medium text-tertiary">{{ cardData.price.new }} €</p>
         </div>
      </div>
      <footer class="flex flex-col gap-3 bg-violet p-5">
         <NuxtLink
            class="flex h-11 w-full items-center justify-center rounded-[55px] border border-tertiary bg-secondary font-Beret tracking-wide text-white"
            :to="`/catalog/item-${cardData.id}`">
            Learn more
         </NuxtLink>
         <v-btn-add :is-empty="true" />
      </footer>
   </article>
</template>

<script setup>
const props = defineProps({
   cardData: {
      type: Object,
      required: true,
   },
});

const store = useBacketStore();
const card = ref({
   id: props.cardData.uid,
   count: 1,
});

const addCardBacket = () => {
   if (props.cardData.isStock) {
      const cardData = { ...card.value };
      store.addCardBacket(cardData);
      card.value.count = 1;
      card.value.size = "small";
   }
};
</script>
