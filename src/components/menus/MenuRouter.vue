<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import CardProduct from '/src/components/cards/CardProduct.vue';
import { useConfigStore } from '../../stores/config';
const apiConfig = useConfigStore()

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})

const levelId = ref('')
const categoryId = ref('')

const levelIdSelected = (id) => {
  levelId.value = id
  categoryId.value = ''
}


</script>

<template>

  <div>
    <h2 class="text-center font-bold text-2xl mb-5">Categorias Generales</h2>

    <!-- listado de niveles -->
    <div class="flex flex-wrap justify-center items-center py-10 bg-primary-200">
      <div v-for="level in levelsDates" :key="level.id" >
        
        <div v-if="categoriesDates.some(category => category.level_id === level.id)" >

          <div @click="levelIdSelected(level.id)" class="my-2 bg-center bg-no-repeat w-28 h-28 px-1 mx-5 relative">
                <img 
                    loading="lazy"
                    class="w-full h-full object-cover rounded-lg"
                    :src="apiConfig.urlBack+level.image_hero_uri+level.image_hero" 
                    alt="imagen portada"
                >
                
    
                <div class="absolute right-0 -bottom-5 left-0 px-1 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col cursor-pointer">
                  <a class="bg-primary-100 rounded-lg block w-full border-2 border-primary-200">
                    <h1 class="my-2 text-base sm:text-xl font-extrabold text-gray-800 ">{{ level.name }}</h1>
                  </a>
                </div>
    
          </div>

        </div>
  
      </div>
    </div>
    
    <!-- listado de categorias segun level -->
    <div v-if="levelId" class="mt-5">
      <h2 class="text-center font-bold text-lg mb-5">Categorias</h2>
      <!-- mini cards -->
      <div class="flex flex-wrap items-center justify-center">
        
        <div v-for="category in categoriesDates" :key="category.id">
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <div 
              v-if="category.level_id == levelId" 
              class="mb-10 bg-center bg-no-repeat w-20 h-20 cursor-pointer relative mx-5"
              @click="categoryId = category.id"
            >
                <img 
                    loading="lazy"
                    class="w-20 h-20 object-cover rounded-lg"
                    :src="apiConfig.urlBack+category.image_hero_uri+category.image_hero" 
                    alt="imagen portada"
                >

                <div class="absolute right-0 -bottom-5 left-0 mx-auto text-center flex items-center justify-center flex-col">
                    <a class="bg-primary-100 rounded-lg w-full border-2 border-primary-200 py-1 text-sm text-gray-800">
                      {{ category.name }}
                    </a>
                </div>

            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- listados de productos de cada categoria -->
    <div v-if="categoryId" class="mt-5">
      <div v-for="product in productsDates" :key="product.id">
  
          <div v-if="product.category_id === categoryId">
      
            <CardProduct 
              class=" max-w-lg mx-auto lg:rounded-md"
              :product="product"
            />
      
          </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>