<template>


    <header class="flex flex-row w-full relative bg-gradient-to-r from-purple-500 via-lime-400 to-cyan-500 p-4 shadow-xl max-sm:justify-between max-sm:relative">
      <div class="basis-1/4 items-center justify-start px-8 max-sm:basis-auto">
        <img src="assets/images/pop.png" class="w-16 h-16">
      </div>
      <div class="basis-1/4 max-sm:basis-auto">
      </div>
      <nav :class="{'basis-1/2 flex flex-row items-center justify-end px-8' :!burger || burger, 'max-sm:basis-auto max-sm:absolute max-sm:top-full max-sm:w-full max-sm:justify-center max-sm:flex-col max-sm:gap-0 max-sm:bg-white max-sm:px-0': !burger}">
        <NuxtLink to="/" class="my-auto p-2 hover:bg-pink-500 hover:text-black max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Home</NuxtLink>
        
        <div class = " group my-auto p-2 text-gray-300 font-semibold hover:bg-gray-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center max-sm:px-0 " @click = "switch_submenu">Labs
          <div class = "flex flex-col absolute top-[100%] right-0 bg-white text-black w-56 text-center max-sm:relative max-sm:w-full max-sm:bg-red-100" v-show = "submenu">
          
            <NuxtLink to="/Lab3" class="my-auto p-2 hover:bg-gray-500 border-b-2 border-purple-300 text-yellow-300 font-semibold hover:text-red-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Lab3</NuxtLink>
            <NuxtLink to="/Lab3" class="my-auto p-2 hover:bg-gray-500 border-b-2 border-purple-300 text-yellow-300 font-semibold hover:text-red-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Lab4</NuxtLink>
            <NuxtLink to="/Lab3" class="my-auto p-2 hover:bg-gray-500 border-b-2 border-purple-300 text-yellow-300 font-semibold hover:text-red-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Lab5</NuxtLink>
            <NuxtLink to="/Lab3" class="my-auto p-2 hover:bg-gray-500 border-b-2 border-purple-300 text-yellow-300 font-semibold hover:text-red-500 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">Lab6</NuxtLink>

          </div>
        </div>
      
        <NuxtLink to="/login" :class="{'my-auto p-2 text-green-300 font-semibold hover:text-blue-400 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center': submenu,
          'my-auto p-2 text-green-300 font-semibold hover:text-blue-400 max-sm:w-full max-sm:border-b-2   max-sm:border-black max-sm:text-center': !submenu}">LogIn</NuxtLink>
        <NuxtLink to="/logout" class="my-auto p-2 text-red-300 font-semibold hover:text-purple-400 max-sm:w-full max-sm:border-b-2 max-sm:border-black max-sm:text-center">LogOut</NuxtLink>
      </nav>
      <div v-if="burger" @click="switch_burger" class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6">
        <span class="h-[3px] w-full bg-blue-950"></span>
        <span class="h-[3px] w-full bg-blue-950"></span>
        <span class="h-[3px] w-full bg-blue-950"></span>
      </div>
      <div v-else class="max-sm:flex max-sm:flex-col max-sm:mr-8 max-sm:justify-between max-sm:items-center max-sm:w-8 max-sm:h-6" @click="switch_burger">
        <span class="h-[3px] w-full bg-blue-950 rotate-45 relative top-[9px]"></span>
        <span class="h-[3px] w-full bg-blue-950 opacity-0"></span>
        <span class="h-[3px] w-full bg-blue-950 relative bottom-3 rotate-[-45deg]"></span>
      </div>
    </header>


    <main class="p-5 flex bg-green-100 h-screen">
    <slot />
  </main>

  <footer class="flex flex-row w-full bg-green-400 border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
    <a href="https://www.youtube.com/"><img src="assets/images/cat1.png" class="w-16 h-16"></a>
    <a href="https://github.com/"><img src="assets/images/cat2.png" class="w-16 h-16"></a>
    <a href="https://www.facebook.com/"><img src="assets/images/cat3.png" class="w-16 h-16 bg-transparent"></a>
  </footer>
</template>
  


<script setup lang="ts">
import { useHead } from '#app';
import {ref} from "vue";

useHead({
  script: [
    {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-3CTDYM027H",
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-3CTDYM027H');
      `,
      type: "text/javascript",
    },
  ],
  dangerouslyDisableSanitizersByTagID: {
    'gtag': ['innerHTML'],
  },
});


const burger = ref<boolean>(false)
const submenu = ref<boolean>(false)

const switch_burger = ()=> {burger.value = !burger.value}
const switch_submenu = ()=> {submenu.value = !submenu.value}
</script>

