<template>
   <button
      class="absolute right-4 top-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary bg-violet text-transparent hover:fill-primary hover:text-primary"
      :class="{ '!text-primary': isSelect }"
      type="button"
      aria-label="Favorite btn product card"
      @click="toggleCard">
      <svg class="h-6 w-6">
         <use xlink:href="/img/sprite.svg#iconLike"></use>
      </svg>
   </button>
</template>

<script setup>
const props = defineProps({
   cardId: {
      type: Number,
      required: true,
   },
});

const isSelect = ref(false);
const store = useFavoriteStore();
const { cards } = storeToRefs(store);

const toggleCard = () => {
   isSelect.value = !isSelect.value;
   // isSelect.value ? store.addCardFavorite(props.cardId) : store.delCardFavorite(props.cardId);
};

watch(cards, () => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});

onMounted(() => {
   isSelect.value = store.cards.some((item) => item.uid === props.cardId);
});
</script>
