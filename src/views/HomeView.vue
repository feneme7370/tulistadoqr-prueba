<script setup>
  import ImageHero from '../components/layouts/ImageHero.vue';
  import Footer from '../components/layouts/Footer.vue'
  import Accordion from '../components/menus/Accordion.vue'
  import List from '../components/menus/List.vue'
  import MenuRouter from '../components/menus/MenuRouter.vue'
  import CardProductSuggestion from '../components/cards/CardProductSuggestion.vue';

  import { useProductsStore } from '../stores/products'

  const apiProducts = useProductsStore()
  
</script>

<template>
  <div class="bg-orange-50">

    <ImageHero 
      class="mb-10" 
      :companiesDates="apiProducts.companiesDates"
    />
  
    <!-- accordion -->
    <div v-if="apiProducts.menuSelected == '1'">
      <Accordion
        class="mb-10"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <div v-if="apiProducts.menuSelected == '2'">
      <!-- list -->
      <List
        class="mb-10"
        :productsDates="apiProducts.productsDates"
        :levelsDates="apiProducts.levelsDates"
        :categoriesDates="apiProducts.categoriesDates"
      />
    </div>
  
    <div v-if="apiProducts.menuSelected == '3'">
      <!-- Con Router -->
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
      
        <div v-for="suggetion in apiProducts.suggestionsDates" class="my-2 px-2">

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