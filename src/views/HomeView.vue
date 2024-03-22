<script setup>
  import { ref, onMounted, watch } from 'vue';

  import ImageHero from '@/components/2-demo1/layouts/ImageHero.vue';

  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter()
  const route = useRoute()
  // importar api de datos
  import { useProductsStore } from '@/stores/products'
  const apiProducts = useProductsStore()

  // cargar datos con id
  onMounted(async ()=>{
        await apiProducts.loadDates(5)
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