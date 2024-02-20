<script setup>

    // importar configuraciones
    import { useConfigStore } from '../../stores/config';
    const apiConfig = useConfigStore()

    // recibir datos
    const props = defineProps({
        companiesDates: {type: Object, required: true}
    })

</script>

<template>

<section class="bg-center bg-no-repeat bg-gray-700 w-full p-2 relative overflow-hidden">

    <img 
        loading="lazy"
        class="w-full opacity-30 object-cover min-h-48"
        :src="apiConfig.urlBack+companiesDates.image_hero_uri+ companiesDates.image_hero" 
        alt="imagen portada"
    >

    <div class="absolute top-0 right-0 bottom-0 left-0 px-1 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col text-gray-100 f-dosis">

        <h1 class="mb-4 text-xl sm:text-2xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">{{ companiesDates.name }}</h1>

        <p class="mb-8 text-lg font-normal lg:text-lg sm:px-16 leading-none ease-linear">{{ companiesDates.short_description}}</p>

    </div>
</section>

</template>

<style scoped>

</style>