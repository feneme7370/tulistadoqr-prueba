<script setup>

  // importar componentes de vue
  import { ref } from 'vue';
  // importar forma de card
  import CardProduct from '@/components/3-demo2/cards/CardProduct.vue'
  // helper de uri
  import { urlBack, urlFront } from '@/helpers/config'

  const props = defineProps({
      productsDates: { type: Object, required: true },
      levelsDates: { type: Object, required: true },
      categoriesDates: { type: Object, required: true },
      companiesDates: { type: Object, required: true },
  })

  // variables para filtar categorias
  const levelId = ref('')
  const categoryId = ref('')

  const levelIdSelected = (id) => {
    levelId.value = id
    categoryId.value = ''
  }

</script>

<template>

  <div>
    <!-- titulo de categoria general -->
    <h2 class="text-center font-bold italic underline text-3xl mb-2">Categorias Generales</h2>

    <!-- listado de niveles -->
    <div class="flex flex-wrap justify-center items-center gap-3 py-10 bg-secondary-200">
      <div v-for="level in levelsDates" :key="level.id" >
        
        <!-- mostrar categorias generales que tengan categorias asignadas -->
        <div v-if="categoriesDates.some(category => category.level_id === level.id)" >

          <!-- imagen y nombre de la categoria general, con evento click para marcar id -->
          <div @click="levelIdSelected(level.id)" class="my-2 bg-center bg-no-repeat w-28 h-28 px-1 mx-5 relative cursor-pointer animate__animated animate__backInUp animate__faster">
            
            <img 
                loading="lazy"
                class="w-full h-full object-cover rounded-t-lg border border-secondary-800"
                :src="urlBack()+level.image_hero_uri+level.image_hero" 
                alt="imagen portada"
            >
            
            <div class="absolute right-0 -bottom-5 left-0 px-1 mx-auto max-w-screen-xl text-center flex items-center justify-center flex-col">
              <a class="bg-secondary-100 rounded-b-lg block w-full border border-secondary-800">
                <h1 class="my-2 text-base sm:text-xl font-extrabold text-gray-800 ">{{ level.name }}</h1>
              </a>
            </div>
    
          </div>

        </div>
  
      </div>
    </div>
    <!-- listado de niveles end -->
    
    <!-- listado de categorias segun level -->
    <div v-if="levelId" class="mt-5">
      <!-- titulo -->
      <h2 class="text-center font-bold text-lg mb-5 italic">Categorias</h2>

      <!-- listado de categorias -->
      <div class="flex flex-wrap items-center justify-center">
        <!-- recorrer categorias -->
        <div v-for="category in categoriesDates" :key="category.id">
          <!-- mostrar solo las que tengan productos asignados -->
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <!-- imagen y titulo de las categorias correspondientes al nivel seleccionado -->
            <div 
              v-if="category.level_id == levelId" 
              class="animate__animated animate__backInUp animate__faster mb-10 bg-center bg-no-repeat w-20 h-20 cursor-pointer relative mx-5"
              @click="categoryId = category.id"
            >
                <img 
                    loading="lazy"
                    class="w-20 h-20 object-cover rounded-t-lg border border-secondary-800"
                    :src="urlBack()+category.image_hero_uri+category.image_hero" 
                    alt="imagen portada"
                >

                <div class="absolute right-0 -bottom-5 left-0 mx-auto text-center flex items-center justify-center flex-col">
                    <a class="bg-secondary-100 w-full rounded-b-lg border border-secondary-800 py-1 text-sm text-gray-800">
                      {{ category.name }}
                    </a>
                </div>

            </div>

          </div>
        </div>

      </div>
    </div>
    <!-- listado de categorias segun level end -->

    <!-- listados de productos de cada categoria -->
    <div v-if="categoryId" class="mt-5">

      <!-- recorrer productos -->
      <div v-for="product in productsDates" :key="product.id">
  
        <!-- mostrar productos correspondientes a la categoria -->
        <div v-if="product.category_id === categoryId">
    
          <CardProduct 
            class=" max-w-lg mx-auto lg:rounded-md animate__animated animate__backInUp animate__faster"
            :product="product"
            :addToListButton="companiesDates.membership.list_product"
          />
    
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>