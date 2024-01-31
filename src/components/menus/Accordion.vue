<script setup>
import { ref } from 'vue'
import { useConfigStore } from '@/stores/config';
const apiConfig = useConfigStore()
const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
})
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
    <div v-for="level in levelsDates" :key="level.id">
    <h2 class="text-center font-bold text-4xl mb-2">{{ level.name }}</h2>

    <!-- categorias si corresponden con el nivel -->
    <div v-for="(category, index) in categoriesDates" :key="index">
      <div v-if="category.level_id === level.id">
      
        <!-- datos de las categorias -->
        <h2 :id="'accordion-collapse-heading-' + (index + 1)">
          <button
            type="button"
            class="accordion-button px-4 py-3 mb-2 w-full flex justify-between items-center"
            :class="{ 'active': activeIndices.includes(index) }"
            @click="toggleAccordion(index)"
          >
            <span class="font-semibold text-xl">{{ category.name }}</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
          <div class="p-3 border" :class="{ 'border-t-0': index === 0 }">
            
            <!-- listados de productos de cada categoria -->
            <div v-for="product in productsDates" :key="product.id">
                <div v-if="product.category_id === category.id">
                  <div class="flex gap-1 mb-3 bg-gray-200 rounded-lg text-gray-600 dark:text-gray-400">

                    <div class="w-2/3 py-1 px-2">
                      <p class="text-gray-900 text-sm font-bold">{{ product.name }}</p>
                      <div v-if="product.price_original === product.price_seller">
                          <p class="mb-3 text-sm text-green-900 dark:text-gray-400">{{ product.price_original }}</p>
                      </div>
                      <div v-else>
                          <span class="mb-3 mr-3 text-sm text-green-900 dark:text-gray-400">{{ product.price_seller }}</span>
                          <span class="line-through mb-3 text-xs text-red-700 dark:text-red-400">{{ product.price_original }}</span>
                      </div>
                      <p class="mb-3 text-sm dark:text-gray-400">{{ product.description }}</p>
                    </div>

                    <img 
                        loading="lazy"
                        class="w-1/3 object-cover rounded-r-lg"
                        :src="apiConfig.urlBack+'archives/images/product_hero/'+ product.image_hero" 
                        alt="imagen portada"
                    >
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