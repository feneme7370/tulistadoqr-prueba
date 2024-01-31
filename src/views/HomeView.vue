<script setup>
  import ImageHero from '@/components/layouts/ImageHero.vue';
  import Footer from '@/components/layouts/Footer.vue'
  import Accordion from '@/components/menus/Accordion.vue'
  import List from '@/components/menus/List.vue'
  import MenuRouter from '@/components/menus/MenuRouter.vue'
  import CardSuggestion from '@/components/cards/CardSuggestion.vue'

  import { ref } from 'vue';
  import { useProductsStore } from '../stores/products.js'

  const apiProducts = useProductsStore()
  const menuSelected = ref(3)

  
</script>

<template>
  <!-- <h1>{{ infoCompany.productsDates }}</h1> -->
  <ImageHero 
    class="mb-10" 
    :companiesDates="apiProducts.companiesDates"
  />

  <!-- accordion -->
  <div v-if="menuSelected === 1">
    <Accordion
      class="mb-10"
      :productsDates="apiProducts.productsDates"
      :levelsDates="apiProducts.levelsDates"
      :categoriesDates="apiProducts.categoriesDates"
    />
  </div>

  <div v-if="menuSelected === 2">
    <!-- list -->
    <List
      class="mb-10"
      :productsDates="apiProducts.productsDates"
      :levelsDates="apiProducts.levelsDates"
      :categoriesDates="apiProducts.categoriesDates"
    />
  </div>

  <div v-if="menuSelected === 3">
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