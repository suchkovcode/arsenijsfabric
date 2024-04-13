<template>
   <div
      class="relative flex h-[45px] w-full max-w-[100px] items-center justify-center rounded-[55px] border border-solid border-border bg-white font-Giga text-tertiary transition duration-[0.2s] ease-[ease-in-out] md:flex-[0_0_calc(50%_-_5px)] lg:max-w-[120px]">
      <button
         class="btncount__minus absolute left-0 top-0 block h-full w-[30px] cursor-pointer rounded-[50px_0_0_50px] before:absolute before:left-2.5 before:top-2/4 before:block before:h-px before:w-[15px] before:bg-tertiary before:transition-all before:duration-[0.2s] before:ease-[ease-in-out] before:content-[''] hover:before:bg-secondary"
         aria-label="Btn card minus"
         @click="countDecrement"></button>
      <p class="btncount__value">{{ count }}</p>
      <button
         class="btncount__plus absolute right-0 top-0 block h-full w-[30px] cursor-pointer rounded-[0_50px_50px_0] before:absolute before:right-2.5 before:top-2/4 before:block before:h-px before:w-[15px] before:bg-tertiary before:transition-all before:duration-[0.2s] before:ease-[ease-in-out] before:content-[''] after:absolute after:right-2.5 after:top-2/4 after:block after:h-px after:w-[15px] after:rotate-90 after:bg-tertiary after:transition-all after:duration-[0.2s] after:ease-[ease-in-out] after:content-[''] hover:before:bg-secondary hover:after:bg-secondary"
         aria-label="Btn card plus"
         @click="countIncrement"></button>
   </div>
</template>

<script setup>
const emit = defineEmits(["countItem"]);
const props = defineProps({
   countData: {
      type: Number,
      required: true,
   },
});

const count = ref(props.countData);

const countIncrement = () => {
   count.value === 10 ? (count.value = 10) : count.value++;
};

const countDecrement = () => {
   count.value === 1 ? (count.value = 1) : count.value--;
};

watch(count, (newValue) => {
   emit("countItem", newValue);
   count.value = newValue;
});
</script>
