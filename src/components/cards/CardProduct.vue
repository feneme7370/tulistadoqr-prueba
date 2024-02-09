<script setup>
  import { useConfigStore } from '../../stores/config';
  import {  usePriceCurrency } from '../../composables/usePriceCurrency.js'
  const apiPriceCurrency = usePriceCurrency()
  const apiConfig = useConfigStore()

    const props = defineProps({
        product: {type: Object, required: true},
    })
</script>

<template>
   
    <div class="my-2 px-2">

        <hr class="border-orange-300">

        <div class="flex justify-center gap-1 my-2  text-gray-700 dark:text-gray-400 min-h-28">


            <div class="w-8/12 py-1 px-2 flex flex-col justify-between">
                <div>
                <p class="text-gray-800 text-sm font-bold">{{ product.name }}</p>

                <p class="mb-1 font-light text-sm line-clamp-2 dark:text-gray-400">{{ product.description }}</p>
                </div>

                <div v-if="product.price_original === product.price_seller">
                    <p class="mb-1 text-sm font-bold text-green-900 dark:text-gray-400">{{ apiPriceCurrency.formatterCurrency.format(product.price_original) }}</p>
                </div>
                <div v-else>
                    <span class="mb-1 mr-2 font-bold text-sm text-green-900 dark:text-gray-400">{{ apiPriceCurrency.formatterCurrency.format(product.price_seller) }}</span>
                    <span class="line-through mb-1 text-xs text-red-700 dark:text-red-400">{{ apiPriceCurrency.formatterCurrency.format(product.price_original) }}</span>
                </div>

            </div>
            <img 
                loading="lazy"
                class="w-4/12 object-cover object-center max-w-28"
                :src="apiConfig.urlBack+product.image_hero_uri+ product.image_hero" 
                alt="imagen portada"
            >
        </div>
    </div>


</template>

<style scoped>

</style>