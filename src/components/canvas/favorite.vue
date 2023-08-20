<template>
   <div
      class="favorite fixed top-0 -right-full z-50 block w-full h-screen max-w-[450px] bg-white transition-[right] duration-500 sm:border-l border-l-border lg:max-w-[550px]"
      :class="{ 'overflow-hidden right-0': isActive }">
      <canvas-header @close-canvas="updateStateActiveCanvas($event)">
         Favorites:
      </canvas-header>
      <div v-if="false" class="overflow-y-scroll flex flex-col gap-5 h-full mb-5 p-6 pb-32">
         <!-- <v-canvas-favorite-item v-for="item in cards" :key="item.id" favoriteItem="item" /> -->
      </div>
      <p v-else class="m-6 p-6 rounded-xl text-tertiary bg-violet opacity-70">Favorites list is empty</p>
   </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFavoriteStore } from "@/store/favorite";

export default {
   computed: {
      ...mapState(useFavoriteStore, ["isActive"]),
   },

   methods: {
      ...mapActions(useFavoriteStore, ["updateStateActiveCanvas"]),
   },
};
</script>
