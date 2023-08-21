<template>
   <div class="backetItem grid gap-4 pb-5 border-b border-b-border">
      <img
         class="backetItem__img w-[70px] h-[70px] rounded-lg object-cover"
         src=""
         alt="Картинка товара"
         width="70"
         height="70" />
      <router-link class="backetItem__name font-Giga font-medium text-tertiary" :to="`/catalog`">
         Grapefruit handmade soap
      </router-link>

      <div class="backetItem__count flex justify-between items-center">
         <div class="relative flex items-center gap-3">
            <div
               class="backetItem__minus cursor-pointer relative w-5 h-5 border border-backet rounded-full transition-all hover:border-secondary after:conent-[''] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-5px] after:block after:w-[10px] after:h-px after:bg-backet after:transition-all hover:after:bg-secondary"></div>
            <p class="backetItem__total text-tertiary text-sm leading-none opacity-70">0</p>
            <div
               class="backetItem__plus cursor-pointer relative w-5 h-5 border border-backet rounded-full transition-all hover:border-secondary after:conent-[''] after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-5px] after:block after:w-[10px] after:h-px after:bg-backet after:transition-all hover:after:bg-secondary before:conent-[''] before:absolute before:top-1/2 before:left-1/2 before:translate-x-[-5px] before:block before:w-[10px] before:h-px before:bg-backet before:rotate-90 before:transition-all hover:before:bg-secondary"></div>
         </div>
         <p class="text-tertiary opacity-70">$ </p>
      </div>
      <div
         class="backetItem__remove cursor-pointer relative self-center w-6 h-6 ml-auto rounded-full border border-backet transition-all before:content-[''] before:absolute before:top-1/2 before:block before:w-[14px] before:h-px before:bg-backet before:transition-all before:left-1/2 before:-translate-x-[7px] after:content-[''] after:absolute after:top-1/2 after:block after:w-[14px] after:h-px after:bg-backet after:transition-all after:left-1/2 after:-translate-x-[7px] before:rotate-45 after:-rotate-45 hover:border-[red] hover:before:bg-[red] hover:after:bg-[red]"></div>
   </div>
</template>

<script>
export default {
};
</script>
