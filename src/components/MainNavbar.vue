<template>

<div class=" py-3 px-6 flex align-items-center justify-content-between relative lg:static">
    <img src="/images/logo-simple.png" alt="Image" height="60">
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-5 shadow-2 lg:shadow-none">
        <section></section>
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
            <li class="relative">
                <!-- <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Products</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a> -->
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Soluciones</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>Productos</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Clientes</span>
                        </a>
                    </li>
                    <!-- <li class="relative">
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple"
                            v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                            <i class="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                            <span>Support</span>
                            <i class="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                        </a>
                        <ul class="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                            <li>
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-cloud mr-2"></i>
                                    <span class="font-medium">Help Center</span>
                                </a>
                            </li>
                            <li class="relative">
                                <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                                    <i class="pi pi-question-circle mr-2"></i>
                                    <span class="font-medium">Faq</span>
                                </a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </li>
            <li>
                <a href="#features" v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Soluciones</span>
                </a>
            </li>
            <li>
                <a href="#products" v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Productos</span>
                </a>
            </li>
            <li>
                <a href="#contact" v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Contacto</span>
                </a>
            </li>
        </ul>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
            <Main3dButton />
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import Main3dButton from './Main3dButton.vue';


</script>

<style scoped>
a{
    text-decoration: none;
}
</style>