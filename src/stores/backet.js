import { defineStore } from "pinia";

export const useBacketStore = defineStore("backet", {
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
