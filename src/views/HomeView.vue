<script setup>
  import ImageHero from '../components/layouts/ImageHero.vue';

  import Footer from '../components/layouts/Footer.vue'

  import Accordion from '../components/menus/Accordion.vue'
  import List from '../components/menus/List.vue'
  // import Table from '../components/menus/Table.vue'
  import MenuRouter from '../components/menus/MenuRouter.vue'

  import CardProductSuggestion from '../components/cards/CardProductSuggestion.vue';

  // importar api de datos
  import { useProductsStore } from '../stores/products'
  const apiProducts = useProductsStore()

</script>

<template>
  <div class="bg-orange-50">
    <div class=" max-w-5xl mx-auto">


    <!-- portada -->
    <ImageHero 
      class="mb-2" 
      :companiesDates="apiProducts.companiesDates"
    />

    <!-- seleccionar menu -->

    <div class="flex justify-center items-center  max-w-lg mx-auto lg:rounded-md">
      <select 
        id="apiProducts.menuSelected" 
        v-model="apiProducts.menuSelected"
        placeholder="Formato del menu" 
        class=" my-2 mx-5 px-4 py-2 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-3/4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
        <!-- <option selected>Choose a country</option> -->
        <option class="text-sm mx-auto italic" value="1">Acordion</option>
        <option class="text-sm mx-auto italic" value="2">Listado</option>
        <option class="text-sm mx-auto italic" value="3">Secciones</option>
        <option class="text-sm mx-auto italic" value="4">Tabla</option>
      </select>
    </div>

  
    <!-- accordion -->
    <div v-if="apiProducts.menuSelected == '1'">
      <Accordion
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- list -->
    <div v-if="apiProducts.menuSelected == '2'">
      <List
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- Con Router -->
    <div v-if="apiProducts.menuSelected == '3'">
      <MenuRouter
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- Con Tabla -->
    <div v-if="apiProducts.menuSelected == '4'">
      <Table
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <!-- sugeridos -->
    <div class="mb-10 max-w-lg mx-auto lg:rounded-md">
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
      class="max-w-5xl mx-auto lg:rounded-md"
      :companiesDates="apiProducts.companiesDates"
    />

  </div>
</div>
</template>

<style scoped>

</style>