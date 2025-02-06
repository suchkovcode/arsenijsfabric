import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favoriteStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   actions: {
      async addCardFavorite(cardId) {},

      delCardFavorite(cardId) {
         this.cards = this.cards.filter((item) => item.uid !== cardId);
      },
   },

   persist: true,
});
