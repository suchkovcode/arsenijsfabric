import { defineStore } from "pinia";

export const useBacketStore = defineStore("backet", {
   state: () => {
      return {
         isActive: false,
      };
   },

   getters: {},

   actions: {
      updateStateActiveCanvas(state) {
         this.isActive = state;
      },
   },
});
