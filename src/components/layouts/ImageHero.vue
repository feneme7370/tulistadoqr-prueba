<script setup>
    import { useConfigStore } from '@/stores/config';
    const apiConfig = useConfigStore()
    const props = defineProps({
        companiesDates: {type: Object, required: true}
    })

</script>

<template>

<section class="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply w-full relative overflow-hidden">
    <img 
        loading="lazy"
        class="w-full opacity-40 object-cover"
        :src="apiConfig.urlBack+'archives/images/hero/'+ companiesDates.image_hero" 
        alt="imagen portada"
    >
    <div class="absolute top-0 right-0 bottom-0 left-0 px-1 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col">
        <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{{ companiesDates.name }}</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{{ companiesDates.description}}</p>
    </div>
</section>

</template>

<style scoped>

</style>