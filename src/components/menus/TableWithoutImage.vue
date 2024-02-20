<script setup>
import {  usePriceCurrency } from '../../composables/usePriceCurrency.js'
import ImgTumbLightbox from '/src/components/sistem/ImgTumbLightbox.vue'
import { useConfigStore } from '../../stores/config';

const apiPriceCurrency = usePriceCurrency()
const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})

const apiConfig = useConfigStore()


</script>

<template>
  <div>

    <div v-for="level in levelsDates" :key="level.id" class="mb-8">
      <div v-if="categoriesDates.some(category => category.level_id === level.id)">

        <h2 class="text-center font-bold text-3xl italic mb-5">{{ level.name }}</h2>
    
        <div v-for="category in categoriesDates" :key="category.id">
          <div v-if="productsDates.some(product => product.category_id === category.id)">

            <div v-if="category.level_id == level.id">
      
              <div class="flex justify-start items-center mt-4 gap-3 sm:px-3 bg-primary-200 h-20 lg:rounded-md">
                <h3 class="font-semibold text-xl ml-4 mb-2">{{ category.name }}</h3>
                <div></div>
                <div></div>
              </div>
   
              
              <table class="text-xs mt-1 w-full">
                      <!-- <thead>
                          <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                          </tr>
                      </thead> -->
                      <tbody class="">
                        <tr v-for="product in productsDates" :key="product.id" class="border-t border-primary-200">
                          <td v-if="product.category_id == category.id" class="p-3">
                            <div class="h-20 flex flex-col justify-start">
                              <p class="text-lg font-bold italic">{{ product.name }}</p>
                              <p>{{ product.description }}</p>
                            </div>
                          </td>
                          <td v-if="product.category_id == category.id" class="p-3">
                            <div class="h-20 flex flex-col justify-between items-end">
                              <p class="text-base font-bold">{{ product.price_seller > 0 ? apiPriceCurrency.formatterCurrency.format(product.price_seller) : apiPriceCurrency.formatterCurrency.format(product.price_original) }}</p>
                              <div></div>
                            </div>
                          </td>
                      </tr>
<!-- 
                      <div v-for="product in productsDates" :key="product.id">
                        <div v-if="product.category_id == category.id">
                  

                          <TableProduct 
                            :product="product"
                          />

                  
      
                        </div>
                      </div>
               -->
                    </tbody>
                  </table>


            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>