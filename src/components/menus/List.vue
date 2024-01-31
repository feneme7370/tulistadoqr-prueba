<script setup>
import { useConfigStore } from '@/stores/config';
const apiConfig = useConfigStore()
const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})
</script>

<template>
  <!-- listado de productos -->
  <div v-for="level in levelsDates" :key="level.id">
    <h2 class="text-center font-bold text-4xl mb-2">{{ level.name }}</h2>

    <div v-for="category in categoriesDates" :key="category.id">
      <div v-if="category.level_id === level.id">

        <h3 class="text-center text-xl mb-2">{{ category.name }}</h3>
    
        <hr>

        <div v-for="product in productsDates" :key="product.id">
          <div v-if="product.category_id === category.id">
            <div class="flex gap-1 mx-2 mt-1 mb-3 bg-gray-200 rounded-lg text-gray-500 dark:text-gray-400">

            <div class="w-2/3 py-1 px-2">
              <p class="text-gray-900">{{ product.name }}</p>
              <p class=" text-green-900">{{ product.price_seller }}</p>
              <p>{{ product.description }}</p>
            </div>

            <img 
                loading="lazy"
                class="w-1/3 object-cover rounded-r-lg"
                :src="apiConfig.urlBack+'archives/images/product_hero/'+ product.image_hero" 
                alt="imagen portada"
            >
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>