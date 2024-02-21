<script setup>
  import ImageHero from '@/components/layouts/ImageHero.vue';
  import ImageDescription from '@/components/layouts/ImageDescription.vue';

  import Footer from '@/components/layouts/Footer.vue'

  import Accordion from '@/components/menus/Accordion.vue'
  import List from '@/components/menus/List.vue'
  import Table from '@/components/menus/Table.vue'
  import MenuRouter from '@/components/menus/MenuRouter.vue'

  import SwiperSlider from '@/components/sistem/SwiperSlider.vue'
  import CardProductSuggestion from '@/components/cards/CardProductSuggestion.vue';
  import ListProduct from '@/components/layouts/ListProduct.vue'

  import {  usePriceCurrency } from '@/composables/usePriceCurrency.js'
  import { formatearCantidad } from '@/helpers/price'
  // importar api de datos
  import { useListStore } from '@/stores/list';
  import { useProductsStore } from '@/stores/products'
  const apiProducts = useProductsStore()
  const apiList = useListStore()

</script>

<template>
  <div class="bg-primary-50">
    <div class=" max-w-5xl mx-auto">

    <!-- portada -->
    <ImageHero 
      class="mb-2" 
      :companiesDates="apiProducts.companiesDates"
    />

    <ListProduct  />
    <!-- seleccionar menu -->

    <div class="flex justify-center items-center  max-w-lg mx-auto lg:rounded-md">
      <select 
        id="apiProducts.menuSelected" 
        v-model="apiProducts.menuSelected"
        placeholder="Formato del menu" 
        class=" my-2 mx-5 px-4 py-2 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-3/4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500">
        <!-- <option selected>Choose a country</option> -->
        <option class="text-sm mx-auto italic" value="1">Desplegable</option>
        <option class="text-sm mx-auto italic" value="2">Listado</option>
        <option class="text-sm mx-auto italic" value="3">Secciones</option>
        <option class="text-sm mx-auto italic" value="4">Tabla</option>
      </select>
    </div>

    <!-- <button @click="apiList.clearList">Vaciar lista</button>
    
    <div v-for="product in apiList.ListProduct">
      <div class="flex items-center justify-between gap-1">
        <div class="flex items-center gap-1">
          <span class="text-gray-800 text-sm font-bold">{{ product.name }}</span>
          <span class="text-gray-700 text-xs font-medium">({{ product.cantidad }})</span>
        </div>
        <div class="flex items-center gap-1">
          <button class="block whitespace-nowrap  bg-primary-100 text-primary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 w-6 h-6 rounded dark:bg-primary-900 dark:text-primary-300" @click="apiList.lessAmount(product.id)">-</button>
          <span class="text-gray-700 text-xs font-medium">{{ formatearCantidad(product.price_seller > 0 ? product.price_seller : product.price_original)}} </span>
          <button class="block whitespace-nowrap  bg-primary-100 text-primary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 w-6 h-6 rounded dark:bg-primary-900 dark:text-primary-300" @click="apiList.moreAmount(product.id)">+</button>
          <button class="block whitespace-nowrap  bg-red-100 text-red-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" @click="apiList.deleteProduct(product.id)">Quitar</button>
        </div>
      </div>
      <div class="flex items-center justify-between gap-1">
        
        <span class="text-gray-700 text-xs font-medium">Total: {{ formatearCantidad(product.cantidad * (product.price_seller > 0 ? product.price_seller : product.price_original))}} </span>
      </div>
         



      
    </div> -->


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


    <!-- imagen con descripcion -->
    <ImageDescription 
      class="mb-10" 
      :companiesDates="apiProducts.companiesDates"
    />

    <!-- ofertas -->
    <!-- <div class="mb-10 max-w-lg mx-auto lg:rounded-md bg-primary-300 pb-2 pt-5">
      <div v-if="apiProducts.offersDates[0]">
        <h2 class="text-center font-bold text-4xl mb-5">Ofertas</h2>
      
        <div v-for="offers in apiProducts.offersDates" :key="offers.id" class="my-2 px-2">

          <CardProductSuggestion 
            :product="offers"
          />
        </div>
      </div>
    </div> -->

    <!-- ofertas -->
    <div class="mb-10 max-w-lg mx-auto lg:rounded-md bg-primary-100 pb-2 pt-5">
      <div v-if="apiProducts.offersDates[0]">
        <h2 class="text-center font-bold text-4xl mb-2">Ofertas</h2>
      

          <SwiperSlider 
          :offersDates="apiProducts.offersDates"
          />

      </div>
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