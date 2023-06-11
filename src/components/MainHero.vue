<template>
<div class="relative p-8 overflow-hidden">
    <img src="/images/hero-4.png" alt="Image" class="absolute top-0 left-0 w-auto h-full block md:w-full">

    <div class="text-center lg:text-left my-6 relative">
        <div class="text-6xl text-white font-bold mb-1">Únete a una nueva</div>
        <div class="text-6xl text-white font-bold mb-4">experiencia digital</div>
        <p class="mt-0 mb-4 line-height-3 text-center lg:text-left text-white" style="max-width:500px">Moderniza tu negocio, aumenta tu alcance y mejora la eficiencia de tu empresa a un costo accesible.</p>
        <Main3dButton/>

        <p class="text-sm mt-4 mb-4 line-height-3 text-white">Obtén una experiencia personalizada</p>
        <div class="flex justify-content-center lg:justify-content-start align-items-center">
            <a href="https://www.apple.com" class="text-white mr-3">
                <i class="pi pi-instagram text-2xl"></i>
            </a>
            <a href="https://play.google.com" class="text-white mr-3">
                <i class="pi pi-whatsapp text-2xl"></i>
            </a>
            <a href="https://www.facebook.com" class="text-white">
                <i class="pi pi-google text-2xl"></i>
            </a>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import Main3dButton from './Main3dButton.vue';


</script>

<style scoped>

</style>