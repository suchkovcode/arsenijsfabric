<template>
   <div class="flex items-center gap-1">
      <div class="flex items-center gap-1 text-transparent">
         <svg
            v-for="(item, index) in 5"
            :key="index"
            :data-index="index + 1"
            :class="{ 'text-primary': ratingHoverData === index + 1 || ratingHoverData > index + 1 }"
            class="cursor-pointer w-5 h-5"
            @mouseover="hoverIcon"
            @mouseout="ratingClickData ? ratingHoverData : (rating.hoverItem = 0)"
            @click="clickItem">
            <use xlink:href="/img/sprite.svg#iconStar"></use>
         </svg>
      </div>
      <span class="text-tertiary">{{ ratingHoverData }}</span>
      <span class="text-tertiary">({{ ratingVoteData }})</span>
   </div>
</template>

<script>
export default {
   props: {
      ratingStorage: {
         type: Object,
         required: true,
      },
   },

   emits: ["rating-data"],

   data() {
      return {
         rating: {
            hoverItem: 0,
            countVote: 0,
            clickUser: false,
         },
      };
   },

   computed: {
      ratingHoverData() {
         return this.ratingStorage.ratingSelect !== undefined ? this.ratingStorage.ratingSelect : this.rating.hoverItem;
      },

      ratingVoteData() {
         return this.ratingStorage.ratingVote !== undefined ? this.ratingStorage.ratingVote : this.rating.countVote;
      },

      ratingClickData() {
         return this.ratingStorage.ratingClick !== undefined ? this.ratingStorage.ratingClick : this.rating.clickUser;
      },
   },

   methods: {
      hoverIcon(event) {
         if (!this.ratingClickData) {
            const index = Number(event.currentTarget.dataset.index);
            this.rating.hoverItem = index;
         }
      },

      clickItem() {
         if (!this.ratingClickData) {
            this.rating.countVote += 1;
            this.rating.clickUser = true;
            this.$emit("rating-data", this.rating);
         }
      },
   },
};
</script>
