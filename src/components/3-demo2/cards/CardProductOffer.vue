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
   
    <div class="my-2 px-2 py-1 bg-secondary-200">

        <hr class="border-hr">

        <div class="card__product">
            <ImgTumbLightbox 
                v-if="product.image_hero != ''"
                class="card__product-img"
                :uri="urlBack()+product.image_hero_uri"
                :name="product.image_hero"
                :nameImg="product.category + ' - ' + product.name"
                nameAlbum="offers"
                tumb=true
            />


            <div class="card__product-descriptions-prices">
                <div v-if="product.price_original < product.price_seller || product.price_seller == '' || product.price_seller == '0'">
                    <p class="card__product-descriptions-price-green">{{ formatCurrency(product.price_original)}}</p>
                </div>
                <div v-else>
                    <span class="mr-2 card__product-descriptions-price-green">{{ formatCurrency(product.price_seller)}}</span>
                    <span class="card__product-descriptions-price-red">{{ formatCurrency(product.price_original)}}</span>
                </div>

                <div>
                    <p class="card__product-descriptions-name">{{ product.name }}</p>

                    <p class="card__product-descriptions-description">{{ product.description }}</p>
                </div>

                <div class="card__product-descriptions-tags">

                    <span v-for="tag in product.tags" class="card__product-descriptions-tag ">{{ tag.name }}</span>

                </div>

                <div v-if="addToListButton">
                    <button class="card__product-descriptions-add" @click="apiList.addToList(product)">Agregar</button>
                </div>
            </div>

        </div>

        <hr class="border-hr">
    </div>


</template>

<style scoped>
    .border-hr{
        @apply border-secondary-300;
    }
    .card__product{
        @apply flex flex-col md:flex-row items-start justify-between gap-1 my-2  text-gray-700 w-full min-h-36;
    }
    .card__product-descriptions-name{
        @apply text-gray-800 text-base font-bold;
    }
    .card__product-descriptions-description{
        @apply mb-1 font-light text-sm line-clamp-2;
    }
    .card__product-descriptions-tags{
        @apply my-1 flex items-center gap-1 overflow-x-auto overflow-hidden;
    }
    .card__product-descriptions-tag{
        @apply block whitespace-nowrap  bg-secondary-100 text-secondary-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded;
    }
    .card__product-descriptions-prices{
        @apply py-1 px-2 flex flex-col justify-between w-full;
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
        @apply max-w-48 h-48 mx-auto rounded-sm overflow-hidden md:mr-5;
    }
</style>