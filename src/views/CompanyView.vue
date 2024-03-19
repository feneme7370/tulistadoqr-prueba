<script setup>
    import {onMounted} from 'vue'
    // importar api de datos
    import { useProductsStore } from '@/stores/products'
    const apiProducts = useProductsStore()
    import { useRoute } from 'vue-router'
    const route = useRoute()

    // importar image
    import ImageHero from '@/components/2-demo1/layouts/ImageHero.vue';
    // cargar datos con id
    onMounted(async ()=>{
        await apiProducts.loadDates(route.params.id)
    })
</script>

<template>
    <!-- pantalla completa -->
    <div class="bg-gray-300">

        <!-- contenedor de todos los datos -->
        <div class="bg-primary-50 max-w-5xl mx-auto relative">

            <!-- portada -->
            <ImageHero 
                class="mb-2" 
                :companiesDates="apiProducts.companiesDates"
            />

        </div>

    </div>
</template>

<style scoped>

</style>