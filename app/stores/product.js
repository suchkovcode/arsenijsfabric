import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
   state: () => {
      return {
         products: [
            {
               id: 1,
               title: "FULL COLLECTION COCKTAIL BAR",
               previews:
                  "New Year's limited collection of cosmetics, produced in Latvia and inspired by cocktail culture, is a set of bright and festive shades that give the skin both radiance and a special fresh look.",
               description:
                  "New Year's limited collection of cosmetics, produced in Latvia and inspired by cocktail culture, is a set of bright and festive shades that give the skin both radiance and a special fresh look. Each product in the collection reflects the unique flavors and textures of cocktails to create a magical holiday atmosphere.",
               blurhash: "LkSrffnOysXno#ayjEkCyYbbQ,nh",
               img: "/img/card__hero-2.jpeg",
               price: {
                  old: "92.85",
                  new: "75",
               },
            },
            {
               id: 2,
               title: "MEDIUM COLLECTION COCKTAIL BAR",
               previews:
                  "New Year's limited collection of cosmetics, produced in Latvia and inspired by cocktail culture, is a set of bright and festive shades that give the skin both radiance and a special fresh look.",
               description:
                  "New Year's limited collection of cosmetics, produced in Latvia and inspired by cocktail culture, is a set of bright and festive shades that give the skin both radiance and a special fresh look. Each product in the collection reflects the unique flavors and textures of cocktails to create a magical holiday atmosphere.",
               blurhash: "LkSrffnOysXno#ayjEkCyYbbQ,nh",
               img: "/img/card__hero-4.jpeg",
               price: {
                  old: "70.95",
                  new: "60",
               },
            },

            {
               id: 3,
               title: "TEA TREE + RED PALM HYDROPHILIC OIL",
               previews: "Hidrofila eļļa mazgāšanai- ideāls līdzeklis saudzīgai, bet efektīvai attīrīšanai un kosmētikas noņemšanai.",
               description:
                  "Hidrofila eļļa mazgāšanai- ideāls līdzeklis saudzīgai, bet efektīvai attīrīšanai un kosmētikas noņemšanai. Tā neatstāj taukainu spīdumu un lipīguma sajūtu. Sastāvā esošā eļļa intensīvi palīdz atjaunot sejas ādu, cīnās pret izsitumiem, novērš ādas lobīšanos, padara ādu patīkamu un veselīgu!",
               blurhash: "LkSrffnOysXno#ayjEkCyYbbQ,nh",
               img: "/img/card__hero-1.png",
               price: {
                  old: "",
                  new: "28",
               },
            },

            {
               id: 4,
               title: "HOT SETTING ANTI AGING ALGINATE FACE MASK",
               previews: "Hot Setting ANTI AGING face mask with black caviar extract.",
               description:
                  "Hot Setting ANTI AGING face mask with black caviar extract. Black caviar saturates the skin with essential antioxidants, they are needed to prevent and slow down premature aging, which begins due to the negative effects of free radicals. In addition, it increases the content of collagen and elastin in the epidermis, which are responsible for the evenness and elasticity of the skin.",
               blurhash: "LkSrffnOysXno#ayjEkCyYbbQ,nh",
               img: "/img/card__hero-3.jpeg",
               price: {
                  old: "",
                  new: "5.95",
               },
            },
         ],
      };
   },
});
