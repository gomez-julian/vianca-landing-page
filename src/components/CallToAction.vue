<template>

<div class=" px-4 md:px-6 lg:px-8" id="contact">
    <div class="grid grid-nogutter p-2 lg:p-4 border-round mb-4 text-center lg:text-left" >
        <div class="col-12 lg:col-6 p-4 flex flex-column justify-content-center">
            <span class="text-3xl block font-bold">Obtén un servicio personalizado</span>
            <span class="block mt-3">Nos pondremos en contacto contigo lo más pronto posible.</span>
            <div class="p-inputgroup relative mt-4" style="border-radius:30px; max-width: 90%;">
                <InputText v-model="inputContact"  type="text" placeholder="Ingresa tu correo o número de teléfono" style="border-radius:30px; height:3.5rem;" class="bg-white-alpha-90 text-black-alpha-90 px-4" />
                <Button @click="send" type="button" :disabled="inputContact.length<5" label="Enviar" class="border-none absolute text-white z-1" style="border-radius: 30px; right: 8px; top: 8px; height: 2.5rem;"></Button>
            </div>
            <span class="block mt-2" v-if="submited">¡Gracias! Nos podremos en contacto contigo muy pronto.</span>
        </div>
        <div class="col-12 lg:col-6 p-4">
            <div class="w-full h-full bg-no-repeat bg-center bg-cover p-5" style="background: url(/images/hero-6-vector-square.svg); border-radius:30px;">
                <span class="text-white text-xl font-bold block  line-height-3">Inicio del proceso</span>
                <span class="text-white font-bold block mt-3">Luego de explorar tu caso, te daremos una propuesta junto con el presupuesto. Siempre bajo negociación.</span>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import usePageClip from '../composables/usePageClip';
const {sendData} = usePageClip()
const inputContact = ref<string>('')
const submited = ref<boolean>(false)

const send = () =>{
    sendData(inputContact.value)
    submited.value = true;
    inputContact.value = ''
}
</script>

<style scoped>

</style>