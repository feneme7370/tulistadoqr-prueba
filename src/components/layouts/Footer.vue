<script setup>
    import SocialIcons from '@/components/layouts/SocialIcons.vue'
    import { useConfigStore } from '@/stores/config';
    const apiConfig = useConfigStore()

    const props = defineProps({
        companiesDates: {type: Object, required: true},
    })

    const date = new Date()
    const dateYear = date.getFullYear()
</script>

<template>


<footer class="bg-gray-100 border-t border-gray-300 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="flex flex-col justify-between w-full">
          <div class="mb-3">
              <a class="flex items-center justify-center">
                  <img
                    loading="lazy" 
                    :src="apiConfig.urlBack+'archives/images/logo/'+ companiesDates.image_logo" 
                    class="h-8 me-3" 
                    alt="Logo" 
                   />
                  <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">{{ companiesDates.name }}</span>
              </a>
              <hr class="my-6 border border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          </div>


          <div class="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 text-center mb-4">
              <div>
                  <h2 class="mb-2 text-lg font-semibold text-gray-900 uppercase dark:text-white">Datos</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
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
                <h2 class="mb-2 text-lg font-semibold text-gray-900 uppercase dark:text-white">Nosotros</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-2">
                          <a class="text-sm">{{ companiesDates.description }}</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div>
            <h2 class="mb-4 text-center text-lg font-semibold text-gray-900 uppercase dark:text-white">Redes Sociales</h2>
                <div class="flex flex-wrap justify-center items-center gap-8 mt-4 sm:mt-0">
                    <div v-for="social in companiesDates.socialMedia">
                        <a :href="'https://'+social.pivot.url" target="_blank" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <SocialIcons :icon="social.slug" />
                            <span class="sr-only">{{social.slug}}</span>
                        </a>
                    </div>
                </div>

          </div> 
      </div>

      <hr class="my-6 border border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {{ dateYear }} - <a href="https://tumenuqr.femaser.com" target="_blank" class="hover:underline">TuMenuQR</a>. All Rights Reserved.
                </span>
            </div>
      </div>
    </div>
</footer>

</template>

<style scoped>

</style>