<template>
   <nav class="mb-30">
      <ol class="flex flex-wrap justify-center items-center lg:justify-start" itemscope itemtype="http://schema.org/BreadcrumbList">
         <li class="breadcrumbs__item cursor-pointer text-base" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link font-Giga text-tertiary text-sm"
               to="/"
               itemscope
               itemprop="item"
               itemtype="http://schema.org/Thing"
               itemid="/">
               <span itemprop="name">Home</span>
            </nuxt-link>
            <meta itemprop="position" content="1" />
         </li>

         <li
            v-if="roterLink.catalog"
            class="breadcrumbs__item cursor-pointer text-base"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link font-Giga text-tertiary text-sm"
               to="/catalog"
               itemscopeitemprop="item"
               itemtype="http://schema.org/Thing"
               itemid="/catalog">
               <span itemprop="name">Catalog</span>
            </nuxt-link>
            <meta itemprop="position" content="2" />
         </li>

         <li
            v-if="roterLink.subpage"
            class="breadcrumbs__item cursor-pointer text-base"
            itemscope
            itemprop="itemListElement"
            itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link font-Giga text-tertiary text-sm"
               :to="roterLink.subpage.to"
               itemscopeitemprop="item"
               itemtype="http://schema.org/Thing"
               :itemid="roterLink.subpage.to">
               <span itemprop="name">{{ roterLink.subpage.name }}</span>
            </nuxt-link>
            <meta itemprop="position" content="3" />
         </li>

         <li class="breadcrumbs__item cursor-pointer text-base active" itemscope itemprop="itemListElement" itemtype="http://schema.org/ListItem">
            <nuxt-link
               class="breadcrumbs__link font-Giga text-tertiary text-sm"
               :to="roterLink.to"
               itemscope
               itemprop="item"
               itemtype="http://schema.org/Thing"
               :itemid="roterLink.to">
               <span itemprop="name"> {{ roterLink.name }}</span>
            </nuxt-link>
            <meta v-if="!roterLink.catalog" itemprop="position" content="2" />
            <meta v-if="roterLink.catalog && !roterLink.subpage" itemprop="position" content="3" />
            <meta v-if="roterLink.subpage" itemprop="position" content="4" />
         </li>
      </ol>
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
