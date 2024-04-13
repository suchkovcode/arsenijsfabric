<template>
   <div class="flex items-center gap-1" itemscope itemprop="aggregateRating" itemtype="https://schema.org/AggregateRating">
      <div class="flex items-center gap-1 text-transparent">
         <svg
            v-for="(item, index) in 5"
            :key="index"
            :data-index="index + 1"
            :class="{ 'text-primary': ratingHoverData === index + 1 || ratingHoverData > index + 1 }"
            class="h-5 w-5 cursor-pointer"
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

<script setup>
const rating = ref({
   hoverItem: 0,
   countVote: 0,
   clickUser: false,
});

const ratingHoverData = computed(() => rating.value.hoverItem);
const ratingVoteData = computed(() => rating.value.countVote);
const ratingClickData = computed(() => rating.value.clickUser);

const hoverIcon = (event) => {
   if (!ratingClickData.value) {
      const index = Number(event.currentTarget.dataset.index);
      rating.value.hoverItem = index;
   }
};

const clickItem = () => {
   if (!ratingClickData.value) {
      rating.value.countVote += 1;
      rating.value.clickUser = true;
   }
};
</script>
