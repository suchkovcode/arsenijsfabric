<template>
   <div
      class="favorite fixed -right-full top-0 z-50 block h-screen w-full max-w-[450px] border-l-border bg-white transition-[right] duration-500 sm:border-l lg:max-w-[550px]"
      :class="{ 'right-0 overflow-hidden': store.isActive }">
      <canvas-header @close-canvas="store.updateStateActiveCanvas($event)">
         Your order:
      </canvas-header>
      <div v-if="false" class="mb-5 flex h-full flex-col gap-5 overflow-y-scroll p-6 pb-32">
         <canvas-backet-item />
      </div>
      <p v-else class="m-6 rounded-xl bg-violet p-6 text-tertiary opacity-70">Your order list is empty</p>
   </div>
</template>

<script setup>
const store = useProductStore();
</script>
