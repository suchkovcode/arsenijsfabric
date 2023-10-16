<template>
   <div
      class="relative flex justify-center items-center w-full max-w-[100px] h-[45px] border border-border text-tertiary bg-white transition duration-[0.2s] ease-[ease-in-out] rounded-[55px] border-solid font-Giga md:flex-[0_0_calc(50%_-_5px)] lg:max-w-[120px]">
      <button
         class="btncount__minus cursor-pointer absolute block w-[30px] h-full rounded-[50px_0_0_50px] left-0 top-0 before:content-[''] before:absolute before:block before:w-[15px] before:h-px before:bg-tertiary before:transition-all before:duration-[0.2s] before:ease-[ease-in-out] before:left-2.5 before:top-2/4 hover:before:bg-secondary"
         aria-label="Btn card minus"
         @click="countDecrement"></button>
      <p class="btncount__value">{{ count }}</p>
      <button
         class="btncount__plus cursor-pointer absolute block w-[30px] h-full rounded-[0_50px_50px_0] right-0 top-0 after:rotate-90 before:content-[''] before:absolute before:block before:w-[15px] before:h-px before:bg-tertiary before:transition-all before:duration-[0.2s] before:ease-[ease-in-out] before:right-2.5 before:top-2/4 after:content-[''] after:absolute after:block after:w-[15px] after:h-px after:bg-tertiary after:transition-all after:duration-[0.2s] after:ease-[ease-in-out] after:right-2.5 after:top-2/4 hover:before:bg-secondary hover:after:bg-secondary"
         aria-label="Btn card plus"
         @click="countIncrement"></button>
   </div>
</template>

<script>
export default {
   props: {
      countData: {
         type: Number,
         required: true,
      },
   },

   emits: ["countItem"],

   data() {
      return {
         count: this.countData,
      };
   },

   watch: {
      count(newValue) {
         this.$emit("countItem", newValue);
      },

      countData(newValue) {
         this.count = newValue;
      },
   },

   methods: {
      countIncrement() {
         this.count === 10 ? (this.count = 10) : this.count++;
      },

      countDecrement() {
         this.count === 1 ? (this.count = 1) : this.count--;
      },
   },
};
</script>
