<template>
<div class="relative p-8 overflow-hidden">
    <!-- <img src="/images/hero-6-vector-full.svg" alt="Image" class="absolute top-0 left-0 w-auto h-full block lg:w-full"> -->
<div class="container-pic" style="background: linear-gradient(to right, #280538, #14073c);">
    <picture>
  <source media="(min-width: 1600px)" srcset="/images/hero-6-vector-large.svg" class="absolute top-0 left-0 w-auto h-full block">
  <source media="(min-width: 1330px) and (max-width: 1599px)" srcset="/images/hero-6-vector-mid.svg" class="absolute top-0 left-0 w-auto h-full block ">
  <img src="/images/hero-6-vector-square.svg" alt="Imagen" class="absolute top-0 left-0 w-auto h-full block">
</picture>
</div>

    <div class="text-center my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">Únete a una nueva</div>
        <div class="text-6xl text-white font-bold mb-4">experiencia digital</div>
        <p class="mt-0 mb-4 mx-auto line-height-3 text-center  text-white" style="max-width:500px">Impulsa la modernización de tu negocio, expande tu alcance y optimiza la eficiencia operativa de tu empresa, todo ello a un precio accesible.</p>
        <Main3dButton2/>

        <p class="text-sm mt-4 mb-4 line-height-3 text-white">Obtén una experiencia personalizada</p>
        <div class="flex justify-content-center  align-items-center">
            <!-- <a href="https://www.apple.com" class="text-white mr-3">
                <i class="pi pi-instagram text-2xl"></i>
            </a> -->
            <a href="https://wa.me/529512649959?text=Vengo%20desde%20Vianca%20Studio" class="text-white mr-3">
                <i class="pi pi-whatsapp text-2xl"></i>
            </a>
            <a href="mailto:juliangomezsuaz@gmail.com" class="text-white">
                <i class="pi pi-at text-2xl"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import Main3dButton2 from './Main3dButton2.vue';


</script>

<style scoped>

</style>