<script setup lang="ts">
import MainFeatures from './components/MainFeatures.vue';
import MainHero from './components/MainHero.vue';
import MainNavbar from './components/MainNavbar.vue';
import MainPresentation from './components/MainPresentation.vue';
import CallToAction from './components/CallToAction.vue';
import MainProducts2 from './components/MainProducts2.vue';
import MainFooter from './components/MainFooter.vue';


</script>

<template>
  <div class="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
    <div class="font-bold mr-8">🚀 ¡Primer lanzamiento!</div>
    <div class="align-items-center lg:flex">
        <span class="line-height-3">Aún estamos ajustando algunas cosas, pero estamos listos para ayudarte.</span>
    </div>
</div>
<MainNavbar/>
<MainHero/>
<MainFeatures/>
<MainPresentation/>
<MainProducts2/>
<CallToAction/>
<MainFooter/>
</template>

<style>
body {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  width: 100%;
}
html {
  scroll-behavior: smooth;
}
</style>
