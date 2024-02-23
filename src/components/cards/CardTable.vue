<script setup>
  import { formatCurrency } from '@/helpers/price'
  import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
  import { urlBack, urlFront } from '@/helpers/config'
  import { useListStore } from '@/stores/list';
  const apiList = useListStore()

    const props = defineProps({
        product: {type: Object, required: true},
        addToListButton: {type: Number},
    })
</script>

<template>
   
    <div class="my-2 px-2">

        <hr class="border-primary-300">

        <div class="flex justify-center gap-1 my-2  text-gray-700 min-h-28">
            <ImgTumbLightbox 
                v-if="product.image_hero != ''"
                class="w-1/4 max-w-32 max-h-32"
                :uri="urlBack()+product.image_hero_uri"
                :name="product.image_hero"
                :nameImg="product.category + ' - ' + product.name"
                nameAlbum="productos"
            />

            <div 
                class="py-1 px-2 flex justify-between" 
                :class="product.image_hero != '' ? 'w-8/12': 'w-11/12'"
            >
                <div class="w-2/3">
                    <div>
                    <p class="text-gray-800 text-sm font-bold">{{ product.name }}</p>
    
                    <p class="mb-1 font-light text-sm line-clamp-2 ">{{ product.description }}</p>
                    </div>
    
                    <div class="my-1 flex items-center gap-1 overflow-x-auto overflow-hidden">
    
                            <span v-for="tag in product.tags" class="block whitespace-nowrap  bg-primary-100 text-primary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">{{ tag.name }}</span>
    
                    </div>
    
                </div>

                <div class="1/3 flex flex-col justify-between">
                    <div v-if="product.price_original === product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                        <p class="mb-1 text-sm font-bold text-green-900 ">{{ formatCurrency(product.price_original) }}</p>
                    </div>
                    <div class="flex flex-col " v-else>
                        <span class="mb-1 mr-2 font-bold text-sm text-green-900 ">{{ formatCurrency(product.price_seller)}}</span>
                        <span class="line-through mb-1 text-xs text-red-700 ">{{ formatCurrency(product.price_original)}}</span>
                    </div>
                    <div v-if="addToListButton">
                        <button class="block whitespace-nowrap bg-green-100 text-green-800 text-sm font-bold my-2 me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300" @click="apiList.addToList(product)">Agregar</button>
                    </div>
                </div>

            </div>

        </div>
    </div>


</template>

<style scoped>

</style>