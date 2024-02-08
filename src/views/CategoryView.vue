<script setup>
  import ImageHero from '../components/layouts/ImageHero.vue';
  import Footer from '../components/layouts/Footer.vue'
  import CardProduct from '../components/cards/CardProduct.vue';
  import CardProductSuggestion from '../components/cards/CardProductSuggestion.vue';

  import { ref, onMounted } from 'vue';
  import { useProductsStore } from '../stores/products'
  import { useConfigStore } from '../stores/config';
  import { useRoute, useRouter } from 'vue-router';
  import { RouterLink } from 'vue-router';
  
  const apiProducts = useProductsStore()
  apiProducts.loadDates()
    const apiConfig = useConfigStore()

    const route = useRoute()
    const router = useRouter()


    // capturar id de la ruta
    const {levelId} = route.params
    const categoryId = ref('')

 
    // if(!apiProducts.categoriesDates[0].id || apiProducts.categoriesDates[0].id == null || apiProducts.categoriesDates[0].id == ''){
    //   router.push({name: home})
    // }
    // console.log(apiProducts.categoriesDates[0].id);
    console.log(levelId);
    console.log(categoryId);
    // console.log(apiProducts.categoriesDates[0].id);

    if(!levelId){
      router.push({ name : home })
    }
    if(!apiProducts){
      router.push({ name : home })
    }

</script>

<template>

    
    <ImageHero 
    class="mb-10" 
    :companiesDates="apiProducts.companiesDates"
    />
    <router-link :to="{name: 'home'}">
          <div class="mb-5 px-5 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col">
              <a class="bg-orange-100 w-full border-2 border-orange-200">
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
            <div 
              v-if="category.level_id == levelId" 
              class="mb-10 bg-center bg-no-repeat w-16 h-16 cursor-pointer relative"
              v-on:click.native="categoryId = category.id"
            >
                <img 
                    loading="lazy"
                    class="w-16 h-16 object-cover rounded-xl"
                    :src="apiConfig.urlBack+category.image_hero_uri+category.image_hero" 
                    alt="imagen portada"
                >
                <div class="absolute right-0 -bottom-5 left-0 px-1 mx-auto text-center flex items-center justify-center flex-col">
                    <a class="bg-orange-100 w-full border-2 border-orange-200 py-1 text-xs tracking-tight leading-none text-gray-800 md:text-md lg:text-lg">
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

      <CardProduct 
        :product="product"
      />

    </div>
</div>


    <!-- sugeridos -->
    <div class="mb-10">
      <div v-if="apiProducts.suggestionsDates[0]">
        <h2 class="text-center font-bold text-4xl mb-5">Sugeridos</h2>
      
        <div v-for="suggestion in apiProducts.suggestionsDates" :key="suggestion.id" class="my-2 px-2">

          <CardProductSuggestion 
            :product="suggestion.product"
          />
        </div>
      </div>
    </div>

  <!-- footer -->
  <Footer
    :companiesDates="apiProducts.companiesDates"
  />

</template>

<style scoped>

</style>