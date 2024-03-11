<script setup>

    // importar lightbox
    import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
    
    // helper de moneda y uri
    import { formatCurrency } from '@/helpers/price'
    import { urlBack, urlFront } from '@/helpers/config'

    // carrito
    import { useListStore } from '@/stores/list';

    
    const apiList = useListStore()

    const props = defineProps({
        product: {type: Object, required: true},
        addToListButton: {type: Number},
    })
</script>

<template>
   
    <div class="my-2 px-2">
        
        <hr class="border-hr">

        <div class="card__product">

            <div 
                class="card__product-descriptions" 
                :class="product.image_hero != '' ? 'w-8/12': 'w-11/12'"
            >

                <div>
                    <p class="card__product-descriptions-name">{{ product.name }}</p>
                    <p class="card__product-descriptions-description">{{ product.description }}</p>
                </div>

                <div class="card__product-descriptions-tags">

                        <span v-for="tag in product.tags" class="card__product-descriptions-tag">{{ tag.name }}</span>

                </div>

                <div class="card__product-descriptions-prices">
                    <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                        <p class="card__product-descriptions-price-green">{{ formatCurrency(product.price_original)}}</p>
                    </div>
                    <div v-else>
                        <span class="mr-2 card__product-descriptions-price-green">{{ formatCurrency(product.price_seller)}}</span>
                        <span class="card__product-descriptions-price-red">{{ formatCurrency(product.price_original)}}</span>
                    </div>
                    <div v-if="addToListButton">
                        <button class="card__product-descriptions-add" @click="apiList.addToList(product)">Agregar</button>
                    </div>
                </div>

            </div>
            <ImgTumbLightbox 
                v-if="product.image_hero != ''"
                class="w-4/12 card__product-img"
                :uri="urlBack()+product.image_hero_uri"
                :name="product.image_hero"
                :nameImg="product.category + ' - ' + product.name"
                nameAlbum="productos"
            />

        </div>

    </div>


</template>

<style scoped>
    .border-hr{
        @apply border-primary-300;
    }
    .card__product{
        @apply flex justify-center gap-1 my-2 text-gray-700 min-h-28;
    }
    .card__product-descriptions{
        @apply py-1 px-2 flex flex-col justify-between;
    }
    .card__product-descriptions-name{
        @apply text-gray-800 text-sm font-bold;
    }
    .card__product-descriptions-description{
        @apply mb-1 font-light text-sm line-clamp-2;
    }
    .card__product-descriptions-tags{
        @apply my-1 flex items-center gap-1 overflow-x-auto overflow-hidden;
    }
    .card__product-descriptions-tag{
        @apply block whitespace-nowrap  bg-primary-200 text-primary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded;
    }
    .card__product-descriptions-prices{
        @apply flex justify-between items-center;
    }
    .card__product-descriptions-price-green{
        @apply mb-1 text-sm font-bold text-green-900;
    }
    .card__product-descriptions-price-red{
        @apply line-through mb-1 text-xs text-red-700;
    }
    .card__product-descriptions-add{
        @apply block whitespace-nowrap bg-green-200 text-green-800 text-sm font-bold my-2 me-2 px-2.5 py-0.5 rounded focus:scale-110;
    }
    .card__product-img{
        @apply max-w-32 max-h-32 rounded-sm overflow-hidden;
    }
</style>