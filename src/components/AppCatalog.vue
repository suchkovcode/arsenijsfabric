<template>
   <div class="grid grid-cols-catalog justify-items-center gap-8">
      <card v-for="item in dataItem" :key="item.id" :card-data="item"></card>
   </div>
</template>

<script>
export default {
   props: {
      dataItem: {
         type: Array,
         required: true,
      },
   },
};
</script>
