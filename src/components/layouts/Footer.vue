<script setup>
    import SocialIcons from '@/components/layouts/SocialIcons.vue'
    import { urlBack, urlFront } from '@/helpers/config'

    const props = defineProps({
        companiesDates: {type: Object, required: true},
    })

    const date = new Date()
    const dateYear = date.getFullYear()

</script>

<template>


<footer class="bg-gray-900 border-t border-gray-300">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="flex flex-col justify-between w-full">
          <div class="mb-3">
              <a class="flex items-center justify-center">
                  <img
                    loading="lazy" 
                    :src="urlBack()+companiesDates.image_logo_uri+ companiesDates.image_logo" 
                    class="h-8 me-3" 
                    alt="Logo" 
                   />
                  <span class="self-center text-3xl font-semibold whitespace-nowrap text-gray-100">{{ companiesDates.name }}</span>
              </a>
              <hr class="my-6 border border-gray-700 sm:mx-auto lg:my-8" />
          </div>


          <div class="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 text-center mb-4">
              <div>
                  <h2 class="mb-2 text-lg font-semibold text-gray-100 uppercase">Datos</h2>
                  <ul class="text-gray-400 font-medium">
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.email }}</a>
                      </li>
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.phone }}</a>
                      </li>
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.city }}</a>
                      </li>
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.url }}</a>
                      </li>
                  </ul>
              </div>
              <div>
                <h2 class="mb-2 text-lg font-semibold text-gray-100 uppercase ">Nosotros</h2>
                  <ul class="text-gray-400  font-medium">
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.times_description }}</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div>
            <h2 class="mb-4 text-center text-lg font-semibold text-gray-100 uppercase ">Redes Sociales</h2>
                <div class="flex flex-wrap justify-center items-center mt-4 sm:mt-0">
                <!-- <div v-if="companiesDates.socialMedia.some(item => item.pivot.url === '')"> -->

                    <!-- <div v-for="social in companiesDates.socialMedia"> -->
                        <div v-for="social in companiesDates.socialMedia" :key="social.id" class="flex justify-center flex-wrap">
                            <a  v-if="social.pivot.url != '' && social.pivot.url.includes('www')" :href="(social.pivot.url.includes('http') ? '' : 'https://')+social.pivot.url" target="_blank" class="m-2 text-gray-500 hover:text-gray-100">
                                <SocialIcons :icon="social.slug" class="bg-gray-200 p-2 rounded-3xl"/>
                                <!-- <span class="sr-only ">{{social.slug}}</span> -->
                            </a>
                        </div>
                        
                <!-- </div> -->
                    
            </div>
          </div> 
      </div>

      <hr class="my-6 border border-gray-700 sm:mx-auto lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center">
                <span class="text-sm text-gray-400 sm:text-center ">© {{ dateYear }} - <a href="https://tumenuqr.femaser.com" target="_blank" class="hover:underline">TuListadoQR</a>. All Rights Reserved.
                </span>
            </div>
      </div>
    </div>
</footer>

</template>

<style scoped>

</style>