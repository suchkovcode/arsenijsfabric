import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favorite", {
   state: () => {
      return {
         isActive: false,
      };
   },

   actions: {
      updateStateActiveCanvas(state) {
         this.isActive = state;
      },
   },
});
