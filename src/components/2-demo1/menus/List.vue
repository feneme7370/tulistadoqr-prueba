<script setup>
  // importar forma de card
  import CardProduct from '@/components/2-demo1/cards/CardProduct.vue'

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

</script>

<template>
  <!-- div para recibir los estilos -->
  <div>

    <!-- recorrer categorias generales -->
    <div v-for="level in levelsDates" :key="level.id" class="mb-8">

      <!-- filtar categorias correspondientes a categorias generales -->
      <div v-if="categoriesDates.some(category => category.level_id === level.id)">

        <!-- titulo de categoria general -->
        <h2 class="text-center font-bold text-3xl italic mb-5">{{ level.name }}</h2>
    
        <!-- recorrer categorias -->
        <div v-for="category in categoriesDates" :key="category.id">

          <!-- mostrar solo categorias que tengan productos -->
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <!-- mostrar solo categorias correspondientes a la categoria general -->
            <div v-if="category.level_id == level.id">
      
              <!-- barra con imagen y titulo de la categoria -->
              <div class="flex justify-start items-center gap-3 sm:px-3 bg-primary-200 h-20 lg:rounded-md">
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
          
              <!-- recorrer productos correspondientes a la categoria -->
              <div v-for="product in productsDates" :key="product.id">
                <div v-if="product.category_id == category.id">
                  
                  <CardProduct 
                    class="animate__animated animate__faster animate__bounceIn"
                    :product="product"
                    :addToListButton="companiesDates.membership.list_product"
                  />
      
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </div>

    </div>
    
  </div>
</template>

<style scoped>

</style>