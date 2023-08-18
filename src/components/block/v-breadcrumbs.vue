<template>
   <nav class="mb-30">
      <ul class="flex flex-wrap justify-center items-center lg:justify-start">
         <li v-for="item in roterLink" :key="item.id" :class="{ active: item.last }" class="breadcrumbs__item cursor-pointer text-base">
            <router-link class="breadcrumbs__link font-Giga text-tertiary text-sm" :to="item.to">
               {{ item.name }}
            </router-link>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   props: {
      roterLink: {
         type: Array,
         required: true,
      },
   },
};
</script>
