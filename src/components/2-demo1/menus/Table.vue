<script setup>

  // importar forma de card
  import CardTable from '@/components/2-demo1/cards/CardTable.vue';
  // lightbox
  import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
  // helper de uri
  import { urlBack, urlFront } from '@/helpers/config'

  const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
    companiesDates: { type: Object, required: true },
  })

  // mostrar solo las que pertenencen al level
  const filterCategories = (levelId) => {
    return props.categoriesDates.filter( category => category.level_id === levelId)
  }

  // mostrar solo las que pertenecen a la categoria
  const filterProducts = (categoryId) => {
    return props.productsDates.filter( product => product.category_id === categoryId)
  }

</script>

<template>

  <!-- div para recibir los estilos -->
  <div>

    <!-- recorrer categorias generales -->
    <div v-for="level in levelsDates" :key="level.id" class="mb-8">
      <!-- mostrar solo las que tengan categorias asignadas -->
      <div v-if="categoriesDates.some(category => category.level_id === level.id)">

        <!-- titulo -->
        <h2 class="text-center font-bold text-3xl italic mb-5">{{ level.name }}</h2>
    
        <!-- recorrer categorias -->
        <!-- <div v-for="category in categoriesDates" :key="category.id"> -->
        <div v-for="category in filterCategories(level.id)" :key="category.id">
          <!-- mostrar categorias que tengan productos -->
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <!-- mostrar categorias que correspondan a la categoria general -->
            <!-- <div v-if="category.level_id == level.id"> -->
      
              <!-- imagen y titulo de la categoria -->
              <div class="flex justify-start items-center mt-4 gap-3 sm:px-3 bg-primary-200 h-20 lg:rounded-md">
                <ImgTumbLightbox 
                      v-if="category.image_hero"
                      class="w-12 h-12 rounded-r-xl overflow-hidden"
                      :uri="urlBack()+category.image_hero_uri"
                      :name="category.image_hero"
                      :nameImg="category.name"
                    />
                <h3 class="font-semibold text-xl ml-3 mb-2">{{ category.name }}</h3>
                <div></div>
              </div>
    
              <!-- recorrer productos -->
              <!-- <div v-for="product in productsDates" :key="product.id"> -->

                <CardTable
                  v-for="product in filterProducts(category.id)" 
                  :key="product.id"
                  
                  class="animate__animated animate__flipInX animate__faster max-w-lg mx-auto lg:rounded-md"
                  :product="product"
                  :addToListButton="companiesDates.membership.list_product"
                />
              <!-- </div> -->

            <!-- </div> -->

          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped>

</style>