<template>
   <div class="grid grid-cols-catalog justify-items-center gap-6">
      <v-card v-for="item in dataItem" :key="item.id" :card-data="item" />
   </div>
</template>

<script setup>
const props = defineProps({
   dataItem: {
      type: Array,
      required: true,
   },
});
</script>
