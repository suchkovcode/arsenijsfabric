<template>
   <div class="backetItem grid gap-4 border-b border-b-border pb-5">
      <img class="backetItem__img h-[70px] w-[70px] rounded-lg object-cover" src="" alt="Картинка товара" width="70" height="70" />
      <NuxtLink class="backetItem__name font-Giga font-medium text-tertiary" :to="`/catalog`"> Grapefruit handmade soap </NuxtLink>
      <div class="backetItem__count flex items-center justify-between">
         <div class="relative flex items-center gap-3">
            <div
               class="backetItem__minus after:conent-[''] relative h-5 w-5 cursor-pointer rounded-full border border-backet transition-all after:absolute after:left-1/2 after:top-1/2 after:block after:h-px after:w-[10px] after:translate-x-[-5px] after:bg-backet after:transition-all hover:border-secondary hover:after:bg-secondary"></div>
            <p class="backetItem__total text-sm leading-none text-tertiary opacity-70">0</p>
            <div
               class="backetItem__plus after:conent-[''] before:conent-[''] relative h-5 w-5 cursor-pointer rounded-full border border-backet transition-all before:absolute before:left-1/2 before:top-1/2 before:block before:h-px before:w-[10px] before:translate-x-[-5px] before:rotate-90 before:bg-backet before:transition-all after:absolute after:left-1/2 after:top-1/2 after:block after:h-px after:w-[10px] after:translate-x-[-5px] after:bg-backet after:transition-all hover:border-secondary hover:before:bg-secondary hover:after:bg-secondary"></div>
         </div>
         <p class="text-tertiary opacity-70">$</p>
      </div>
      <div
         class="backetItem__remove relative ml-auto h-6 w-6 cursor-pointer self-center rounded-full border border-backet transition-all before:absolute before:left-1/2 before:top-1/2 before:block before:h-px before:w-[14px] before:-translate-x-[7px] before:rotate-45 before:bg-backet before:transition-all before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:block after:h-px after:w-[14px] after:-translate-x-[7px] after:-rotate-45 after:bg-backet after:transition-all after:content-[''] hover:border-[red] hover:before:bg-[red] hover:after:bg-[red]"></div>
   </div>
</template>

<script setup>
const props = defineProps({
   backetItem: {
      type: Object,
      required: true,
   },
});

const store = useBacketStore();
</script>
