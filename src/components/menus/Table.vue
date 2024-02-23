<script setup>
import CardTable from '@/components/cards/CardTable.vue';
import ImgTumbLightbox from '@/components/sistem/ImgTumbLightbox.vue'
import { urlBack, urlFront } from '@/helpers/config'

const props = defineProps({
    productsDates: { type: Object, required: true },
    levelsDates: { type: Object, required: true },
    categoriesDates: { type: Object, required: true },
    companiesDates: { type: Object, required: true },
})

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
                <ImgTumbLightbox 
                        class="w-12 h-12"
                        :uri="urlBack()+category.image_hero_uri"
                        :name="category.image_hero"
                        :nameImg="category.name"
                    />
                <h3 class="font-semibold text-xl mb-2">{{ category.name }}</h3>
                <div></div>
              </div>
   
          
              <div v-for="product in productsDates" :key="product.id" class="">
                <CardTable
                  v-if="product.category_id == category.id"
                  class=" max-w-lg mx-auto lg:rounded-md"
                  :product="product"
                  :addToListButton="companiesDates.membership.list_product"
                />
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