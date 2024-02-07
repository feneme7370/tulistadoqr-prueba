<script setup>
  import { useConfigStore } from '@/stores/config';
  const apiConfig = useConfigStore()

    const props = defineProps({
        productsDates: {type: Object, required: true},
        suggestionsDates: {type: Object, required: true},
    })
</script>

<template>
<div v-if="suggestionsDates[0]">
    <h2 class="text-center font-bold text-4xl mb-5">Sugeridos</h2>
   
    <div v-for="suggestion in suggestionsDates" class="my-2 px-2">
        <!-- <div class="max-w-sm flex justify-between items-center gap-3 w-full bg-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <a class="w-1/2">
                <img class="rounded-l-lg" 
                :src="apiConfig.urlBack+'archives/images/product_hero/'+suggestion.product.image_hero" 
                alt="" />
            </a>
            <div class="w-1/2 flex flex-col justify-between">
                <a>
                    <h5 class="mb-2 text-sm sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ suggestion.product.name }}</h5>
                </a>
                <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">{{ suggestion.product.description }}</p>
    
                <div v-if="suggestion.product.price_original === suggestion.product.price_seller">
                    <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">${{ suggestion.product.price_original }}</p>
                </div>
                <div v-else>
                    <span class="mb-3 mr-3 text-sm text-gray-700 dark:text-gray-400">${{ suggestion.product.price_seller }}</span>
                    <span class="line-through mb-3 text-xs text-red-700 dark:text-red-400">${{ suggestion.product.price_original }}</span>
                </div>
    
            </div>
        </div> -->

        <hr class="border-orange-300">

        <div class="flex gap-1 my-2 bg-orange-200 text-gray-700 dark:text-gray-400 min-h-28">

            <img 
                loading="lazy"
                class="w-4/12 object-cover object-center max-w-28"
                :src="apiConfig.urlBack+'archives/images/product_hero/'+ suggestion.product.image_hero" 
                alt="imagen portada"
            >
            <div class="w-8/12 py-1 px-2 flex flex-col justify-between">
                <div>
                <p class="text-gray-800 text-sm font-bold">{{ suggestion.product.name }}</p>

                <p class="mb-1 font-light text-sm line-clamp-2 dark:text-gray-400">{{ suggestion.product.description }}</p>
                </div>

                <div v-if="suggestion.product.price_original === suggestion.product.price_seller">
                    <p class="mb-1 text-sm font-bold text-green-900 dark:text-gray-400">{{ suggestion.product.price_original }}</p>
                </div>
                <div v-else>
                    <span class="mb-1 mr-2 font-bold text-sm text-green-900 dark:text-gray-400">{{ suggestion.product.price_seller }}</span>
                    <span class="line-through mb-1 text-xs text-red-700 dark:text-red-400">{{ suggestion.product.price_original }}</span>
                </div>

            </div>

        </div>
    </div>
</div>


</template>

<style scoped>

</style>