<script setup lang="ts">
import MainHero from './components/MainHero.vue';
import MainNavbar from './components/MainNavbar.vue';


</script>

<template>
  <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🚀 En contrucción!</div>
    <div class="align-items-center hidden lg:flex">
        <span class="line-height-3">Estamos preparando todo para darte el mejor servicio.</span>
    </div>
</div>
<MainNavbar/>
<MainHero/>
</template>

<style>
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 0;
  margin-top: 0;
  width: 100%;
}
</style>
