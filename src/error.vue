<template>
   <section class="flex justify-center items-center w-full h-screen bg-primary">
      <div class="container">
         <h1 class="mb-5 font-Beret text-[110px] text-center text-white">404</h1>
         <p class="mb-8 text-center text-lg text-white font-Giga opacity-70">
            This page does not exist <br />
            or has it been removed
         </p>
         <router-link
            class="flex justify-center items-center w-full h-11 max-w-[240px] mx-auto rounded-[55px] border border-tertiary font-Beret bg-secondary text-white tracking-wide uppercase hover:bg-white hover:text-secondary transition-all"
            to="/">
            Go back
         </router-link>
      </div>
   </section>
</template>
