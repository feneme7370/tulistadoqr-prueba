<script setup>
import { RouterLink } from 'vue-router';
import { useConfigStore } from '@/stores/config';
const apiConfig = useConfigStore()

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})
</script>

<template>

  <h2 class="text-center font-bold text-4xl mb-5">Categorias</h2>
  <!-- listado de productos -->
  <div v-for="level in levelsDates" :key="level.id">
  
      <div class="mb-10 bg-center bg-no-repeat bg-gray-800 bg-blend-multiply w-full relative">
          <img 
              loading="lazy"
              class="w-full object-cover"
              :src="apiConfig.urlBack+level.image_hero_uri+level.image_hero" 
              alt="imagen portada"
          >
          <router-link :to="{name: 'categories', params: {levelId: level.id}}">
          <div class="absolute right-0 -bottom-5 left-0 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col cursor-pointer">
              <a class="bg-gray-100 w-full border-2 border-gray-400">
                <h1 class="mb-2 text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">{{ level.name }}</h1>
                <p class="mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48">{{ level.name}}</p>
              </a>
            </div>
          </router-link>
      </div>

  </div>
</template>

<style scoped>

</style>