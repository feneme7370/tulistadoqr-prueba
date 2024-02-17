<script setup>
  import { useConfigStore } from '../../stores/config';
  import {  usePriceCurrency } from '../../composables/usePriceCurrency.js'
  import ImgTumbLightbox from '/src/components/sistem/ImgTumbLightbox.vue'
  const apiPriceCurrency = usePriceCurrency()
  const apiConfig = useConfigStore()

    const props = defineProps({
        product: {type: Object, required: true},
    })
</script>

<template>
   
    <div class="my-2 px-2">

        <hr class="border-primary-300">

        <div class="flex flex-col items-start justify-between gap-1 my-2  text-gray-700 w-full min-h-36">
            <ImgTumbLightbox 
                class="w-full"
                :uri="apiConfig.urlBack+product.image_hero_uri"
                :name="product.image_hero"
                :nameImg="product.category + ' - ' + product.name"
                nameAlbum="productos"
            />


            <div class=" py-1 px-2 flex flex-col justify-between">
                <div v-if="product.price_original === product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                    <p class="mb-1 text-base font-bold text-green-900 ">{{ apiPriceCurrency.formatterCurrency.format(product.price_original) }}</p>
                </div>
                <div v-else>
                    <span class="mb-1 mr-2 font-bold text-base text-green-900 ">{{ apiPriceCurrency.formatterCurrency.format(product.price_seller) }}</span>
                    <span class="line-through mb-1 text-xs text-red-700 ">{{ apiPriceCurrency.formatterCurrency.format(product.price_original) }}</span>
                </div>

                <div>
                    <p class="text-gray-800 text-base font-bold">{{ product.name }}</p>

                    <p class="mb-1 font-light text-sm line-clamp-2 ">{{ product.description }}</p>
                </div>

                

            </div>

        </div>

        <hr class="border-primary-300">
    </div>


</template>

<style scoped>

</style>