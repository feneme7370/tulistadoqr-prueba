<script setup>
  import ImageHero from '@/components/layouts/ImageHero.vue';
  import Footer from '@/components/layouts/Footer.vue'
  import CardSuggestion from '@/components/cards/CardSuggestion.vue'

  import { ref } from 'vue';
  import { useProductsStore } from '@/stores/products'
  import { useConfigStore } from '@/stores/config';
  import { useRoute } from 'vue-router';
  import { RouterLink } from 'vue-router';

    const apiProducts = useProductsStore()
    const apiConfig = useConfigStore()

    const route = useRoute()

    // capturar id de la ruta
    const {levelId} = route.params
    const categoryId = ref('')

</script>

<template>

    
    <ImageHero 
    class="mb-10" 
    :companiesDates="apiProducts.companiesDates"
    />
    <router-link :to="{name: 'home'}">
          <div class="mb-5 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col">
              <a class="bg-gray-100 w-full border-2 border-gray-400">
                <h1 class="my-2 text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-5xl lg:text-6xl">Inicio</h1>
              </a>
            </div>
    </router-link>


    <!-- titulo -->
    <div v-for="level in apiProducts.levelsDates" :key="level.id">
        <h2 v-if="level.id == levelId" class="text-center font-bold text-4xl mb-5">{{ level.name }}</h2>
    </div>

    <!-- mini cards -->
    <div class="flex flex-wrap items-center justify-center gap-3">

      <div v-for="category in apiProducts.categoriesDates" :key="category.id">
        
            <div class="mb-10 bg-center bg-no-repeat bg-gray-800 bg-blend-multiply w-16 h-16 relative">
                <img 
                    loading="lazy"
                    class="w-16 h-16 opacity-40 object-cover"
                    src="http://localhost:8000/archives/images/hero/1706537690_2_2.jpg" 
                    alt="imagen portada"
                >
                <div class="absolute right-0 -bottom-5 left-0 px-1 mx-auto text-center flex items-center justify-center flex-col cursor-pointer" @click="categoryId = category.id">
                    <a class="bg-gray-100 w-full border-2 border-gray-400 py-2 text-xs tracking-tight leading-none text-gray-800 md:text-md lg:text-lg">
                      {{ category.name }}
                    </a>
                </div>
            </div>
        </div>

    </div>

    <!-- listados de productos de cada categoria -->
    <div v-for="category in apiProducts.categoriesDates">
      <h2 v-if="category.id === categoryId" class="text-center font-bold text-2xl mb-5">{{ category.name }}</h2>
    </div>

    <div v-for="product in apiProducts.productsDates" :key="product.id">

    <div v-if="product.category_id === categoryId">
      <div class="flex gap-1 mb-3 bg-gray-200 rounded-lg text-gray-600 dark:text-gray-400">

        <div class="w-2/3 py-1 px-2">
          <p class="text-gray-900 text-sm font-bold">{{ product.name }}</p>
          <div v-if="product.price_original === product.price_seller">
              <p class="mb-3 text-sm text-green-900 dark:text-gray-400">{{ product.price_original }}</p>
          </div>
          <div v-else>
              <span class="mb-3 mr-3 text-sm text-green-900 dark:text-gray-400">{{ product.price_seller }}</span>
              <span class="line-through mb-3 text-xs text-red-700 dark:text-red-400">{{ product.price_original }}</span>
          </div>
          <p class="mb-3 text-sm dark:text-gray-400">{{ product.description }}</p>
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


      <!-- sugeridos -->
  <div class="mb-10">
    <h2 class="text-center font-bold text-4xl mb-2">Sugeridos</h2>

    <CardSuggestion 
      :productsDates="apiProducts.productsDates"
      :suggestionsDates="apiProducts.suggestionsDates"
    />
  </div>

  <!-- footer -->
  <Footer
    :companiesDates="apiProducts.companiesDates"
  />

</template>

<style scoped>

</style>