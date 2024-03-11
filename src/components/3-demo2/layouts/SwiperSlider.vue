<script setup>
    // componentes de vue
    import { defineProps } from 'vue';
    // importar card offers
    import CardProductOffer from '@/components/3-demo2/cards/CardProductOffer.vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    // recibir datos desde home
    const props = defineProps({
        offersDates: {type: Object, required: true},
        addToListButton: {type: Number},
    })

    const modules = [Navigation, Pagination, Scrollbar, A11y];

</script>

<template>
    <div>
        <swiper
            :modules="modules"
            :effect="'cards'"
            :slides-per-view="1.8"
            :space-between="5"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
        >
      
            <swiper-slide v-for="product in offersDates" :key="product.id" class="px-1 mb-10">
                <CardProductOffer :product="product" :addToListButton="addToListButton"/>
            </swiper-slide>
            ...
        </swiper>
    </div>
</template>

<style>
    .swiper-button-prev, .swiper-button-next, .swiper-pagination, .swiper-scrollbar{
        @apply  text-gray-900;
    }

    .swiper-pagination-bullet-active{
        @apply bg-gray-900;
    }
</style>