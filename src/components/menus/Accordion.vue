<script setup>
import { ref } from 'vue'
import CardProduct from '../../components/cards/CardProduct.vue'
import ImgTumbLightbox from '/src/components/sistem/ImgTumbLightbox.vue'
import { useConfigStore } from '../../stores/config';

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})

const apiConfig = useConfigStore()
const activeIndices  = ref([]);

const toggleAccordion = (index) => {
    const indexPosition = activeIndices.value.indexOf(index);
      if (indexPosition === -1) {
        // Si el índice no está en el array, lo añade
        activeIndices.value.push(index);
      } else {
        // Si el índice está en el array, lo quita
        activeIndices.value.splice(indexPosition, 1);
      }
};
</script>

<template>
  <div>
    <!-- titulo nivel -->
    <div v-for="level in levelsDates" :key="level.id" class="mb-3">
        <!-- evaluar si tiene categorias, sino no se muestra -->
        <div v-if="categoriesDates.some(category => category.level_id === level.id)">

          <hr class="mx-10 mb-5 border-primary-300">
          
          <div class="flex justify-center items-center gap-3 px-3">
            <h2 class="text-center font-bold text-4xl mb-2">{{ level.name }}</h2>
          </div>
    
          <!-- categorias si corresponden con el nivel -->
          <div v-for="(category, index) in categoriesDates" :key="index">

            <div v-if="productsDates.some(product => product.category_id === category.id)">

              <div v-if="category.level_id === level.id">
              
                <!-- datos de las categorias -->
      
                <h2 :id="'accordion-collapse-heading-' + (index + 1)" class="bg-primary-200 h-20 mb-1 lg:rounded-md transition-all ease-in-out">
                  <button
                    type="button"
                    class="accordion-button py-3 mb-2 w-full flex justify-between items-center"
                    :class="{ 'active': activeIndices.includes(index) }"
                    @click.native="toggleAccordion(index)"
                  >
      
                  <div class="flex justify-start items-center gap-3">
                    <ImgTumbLightbox 
                        class="w-12 h-12 rounded-lg"
                        :uri="apiConfig.urlBack+category.image_hero_uri"
                        :name="category.image_hero"
                        :nameImg="category.name"
                    />
                    <span class="font-semibold text-xl">{{ category.name }}</span>
                  </div>
      
                    <svg
                      data-accordion-icon
                      class="w-3 h-3 mx-3 rotate-180 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                    </svg>
      
                  </button>
                </h2>
      
                <div
                  :id="'accordion-collapse-body-' + (index + 1)"
                  class="accordion-body"
                  :aria-labelledby="'accordion-collapse-heading-' + (index + 1)"
                  v-show="activeIndices.includes(index)"
                >
                  <div class="" :class="{ 'border-t-0': index === 0 }">
                    
                    <!-- listados de productos de cada categoria -->
                    <div v-for="product in productsDates" :key="product.id">
                        <div class="" v-if="product.category_id === category.id">
      
                          <CardProduct 
                            :product="product"
                          />
      
                        </div>
                    </div>
                  
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