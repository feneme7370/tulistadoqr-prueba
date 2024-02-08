<script setup>
  import { ref, computed } from 'vue';
  import ImageHero from '../components/layouts/ImageHero.vue';
  import Footer from '../components/layouts/Footer.vue'
  import Accordion from '../components/menus/Accordion.vue'
  import List from '../components/menus/List.vue'
  import MenuRouter from '../components/menus/MenuRouter.vue'
  import CardProductSuggestion from '../components/cards/CardProductSuggestion.vue';

  // importar api de datos
  import { useProductsStore } from '../stores/products'
  const apiProducts = useProductsStore()

</script>

<template>
  <div class="bg-orange-50">

    <!-- portada -->
    <ImageHero 
      class="mb-2" 
      :companiesDates="apiProducts.companiesDates"
    />

    <!-- seleccionar menu -->

    <div class="flex justify-center items-center">
      <select 
        id="apiProducts.menuSelected" 
        v-model="apiProducts.menuSelected"
        placeholder="Formato del menu" 
        class="bg-orange-50 my-2 mx-5 px-4 py-2 text-center border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-3/4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500">
        <!-- <option selected>Choose a country</option> -->
        <option value="1">Acordion</option>
        <option value="2">Listado</option>
        <option value="3">Secciones</option>
      </select>
    </div>

  
    <!-- accordion -->
    <div v-if="apiProducts.menuSelected == '1'">
      <Accordion
        class="mb-10"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- list -->
    <div v-if="apiProducts.menuSelected == '2'">
      <List
        class="mb-10"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- Con Router -->
    <div v-if="apiProducts.menuSelected == '3'">
      <MenuRouter
        class="mb-10"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- sugeridos -->
    <div class="mb-10">
      <div v-if="apiProducts.suggestionsDates[0]">
        <h2 class="text-center font-bold text-4xl mb-5">Sugeridos</h2>
      
        <div v-for="suggetion in apiProducts.suggestionsDates" :key="suggetion.id" class="my-2 px-2">

          <CardProductSuggestion 
            :product="suggetion.product"
          />
        </div>
      </div>
    </div>
  
    <!-- footer -->
    <Footer
      :companiesDates="apiProducts.companiesDates"
    />
  </div>
</template>

<style scoped>

</style>