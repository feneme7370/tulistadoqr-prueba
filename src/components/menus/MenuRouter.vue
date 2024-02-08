<script setup>
import { RouterLink } from 'vue-router';
import { useConfigStore } from '../../stores/config';
const apiConfig = useConfigStore()

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})
</script>

<template>

  <div>
    <h2 class="text-center font-bold text-4xl mb-5">Categorias</h2>
    <!-- listado de productos -->
    <div class="grid grid-cols-2 gap-2">
      <div v-for="level in levelsDates" :key="level.id">
    
  
        <div class="mb-10 bg-center bg-no-repeat w-full px-1 relative">
            <router-link :to="{name: 'categories', params: {levelId: level.id}}">
              <img 
                  loading="lazy"
                  class="w-full object-cover"
                  :src="apiConfig.urlBack+level.image_hero_uri+level.image_hero" 
                  alt="imagen portada"
              >
              
  
              <div class="absolute right-0 -bottom-5 left-0 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col cursor-pointer">
                <a class="bg-orange-100 w-full border-2 border-orange-200">
                  <h1 class="my-2 text-lg sm:text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">{{ level.name }}</h1>
                  <!-- <p class="mb-2 text-base sm:text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">{{ level.name}}</p> -->
                </a>
              </div>
  
            </router-link>
  
          </div>
      </div>
  
    </div>
  </div>
</template>

<style scoped>

</style>