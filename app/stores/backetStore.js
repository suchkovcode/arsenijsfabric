import { defineStore } from "pinia";

export const useBacketStore = defineStore("backetStore", {
   state: () => {
      return {
         cards: [],
      };
   },

   getters: {
      getSumAddition() {
         return this.cards
            .reduce((total, element) => {
               const multiplySum = element.price * element.count;
               return total + multiplySum;
            }, 0)
            .toFixed(2);
      },
   },

   actions: {
      async addCardBacket(cardData) {},

      async sumCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card) {
            card.total = parseFloat((card.price * card.count).toFixed(2));
         }
      },

      async delCardBacket(cardCode) {
         this.cards = this.cards.filter((item) => item.article !== cardCode);
      },

      async incrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card && card.count < 10) {
            card.count += 1;
            this.sumCard(codeCard);
         }
      },

      async decrementCountCard(codeCard) {
         const card = this.cards.find((item) => item.article === codeCard);
         if (card && card.count > 1) {
            card.count -= 1;
            this.sumCard(codeCard);
         }
      },
   },

   persist: {
      storage: persistedState.localStorage,
   },
});
