<script setup>
  import { ref, computed, onMounted } from 'vue';
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

  // importar api de datos
  import { useProductsStore } from '@/stores/products'
  const apiProducts = useProductsStore()

</script>

<template>
  <div class="bg-primary-50">
    <div class=" max-w-5xl mx-auto">

    <!-- portada -->
    <ImageHero 
      class="mb-2" 
      :companiesDates="apiProducts.companiesDates"
    />

    <ListProduct 
      class=""
      :class="apiProducts.companiesDates.list_product ? 'block' : 'hidden'"
    />

    <!-- seleccionar menu -->

    <div class="flex flex-col justify-center my-7 items-center max-w-lg mx-auto lg:rounded-md">
      <p class="italic text-xs text-center">Selecciona el menu facilmente desde la demo</p>
      <select 
        id="apiProducts.menuSelected" 
        v-model="apiProducts.menuSelected"
        placeholder="Formato del menu" 
        class=" my-2 mx-5 px-4 py-2 text-center border font-bold bg-primary-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-3/4">
        <!-- <option selected>Choose a country</option> -->
        <option class="text-sm font-light mx-auto italic" value="1">Desplegable</option>
        <option class="text-sm font-light mx-auto italic" value="2">Listado</option>
        <option class="text-sm font-light mx-auto italic" value="3">Secciones</option>
        <option class="text-sm font-light mx-auto italic" value="4">Tabla</option>
      </select>
    </div>


    <!-- accordion -->
    <div v-if="apiProducts.menuSelected == '1'">
      <Accordion
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
        :companiesDates="apiProducts.companiesDates"
      />
    </div>
  
    <!-- list -->
    <div v-if="apiProducts.menuSelected == '2'">
      <List
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
        :companiesDates="apiProducts.companiesDates"
      />
    </div>
  
    <!-- Con Router -->
    <div v-if="apiProducts.menuSelected == '3'">
      <MenuRouter
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
        :companiesDates="apiProducts.companiesDates"
      />
    </div>
  
    <!-- Con Tabla -->
    <div v-if="apiProducts.menuSelected == '4'">
      <Table
        class="mb-10 max-w-lg mx-auto lg:rounded-md"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
        :companiesDates="apiProducts.companiesDates"
      />
    </div>


    <!-- imagen con descripcion -->
    <ImageDescription 
      class="mb-10" 
      :companiesDates="apiProducts.companiesDates"
    />

    <div v-if="apiProducts.offersDates.length > 0" class="mb-10 max-w-lg mx-auto lg:rounded-md bg-primary-100 pb-2 pt-5">
        <h2 class="text-center font-bold text-4xl mb-2">Ofertas</h2>
      
          <SwiperSlider 
          :offersDates="apiProducts.offersDates"
          :addToListButton="apiProducts.companiesDates.list_product"
          />

    </div>
  
    <!-- sugeridos -->
    <div v-if="apiProducts.suggestionsDates.length > 0" class="mb-10 max-w-lg mx-auto lg:rounded-md">
        <h2 class="text-center font-bold text-4xl mb-5">Sugeridos</h2>
      
        <div v-for="suggetion in apiProducts.suggestionsDates" :key="suggetion.id" class="my-2 px-2">

          <CardProductSuggestion 
            :product="suggetion"
            :addToListButton="apiProducts.companiesDates.list_product"
          />
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