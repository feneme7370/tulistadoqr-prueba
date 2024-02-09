<script setup>
import { ref } from 'vue'
import CardProduct from '../../components/cards/CardProduct.vue'
import { useConfigStore } from '../../stores/config';

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})

const apiConfig = useConfigStore()


</script>

<template>
  <div>

    <div v-for="level in levelsDates" :key="level.id" class="mb-8">
      <h2 class="text-center font-bold text-3xl italic mb-5">{{ level.name }}</h2>
  
      <div v-for="category in categoriesDates" :key="category.id">
        <div v-if="category.level_id == level.id">
  
          <div class="flex justify-between items-center gap-3 sm:px-3 bg-orange-200 h-20">
            <img 
                loading="lazy"
                class="h-16 w-16 object-cover rounded-r-lg"
                :src="apiConfig.urlBack+category.image_hero_uri+ category.image_hero" 
                alt="imagen portada"
            >
            <h3 class="text-center text-xl mb-2">{{ category.name }}</h3>
            <div></div>
          </div>
      
          <div v-for="product in productsDates" :key="product.id">
            <div v-if="product.category_id == category.id">
              
              <CardProduct 
                :product="product"
              />
  
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>