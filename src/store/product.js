import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
   state: () => {
      return {
         products: [
            {
               id: 1,
               name: "card-text",
            },
            {
               id: 2,
               name: "card-text",
            },
            {
               id: 3,
               name: "card-text",
            },
            {
               id: 4,
               name: "card-text",
            },
            {
               id: 5,
               name: "card-text",
            },
            {
               id: 6,
               name: "card-text",
            },
            {
               id: 7,
               name: "card-text",
            },
            {
               id: 8,
               name: "card-text",
            },
         ],
      };
   },

   getters: {},

   actions: {},
});
