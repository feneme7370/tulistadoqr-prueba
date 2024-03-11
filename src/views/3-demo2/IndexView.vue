<script setup>
  import { ref, onMounted, watch } from 'vue';
  import SocialIcons from '@/components/sistem/SocialIcons.vue';

  import ImageHero from '@/components/3-demo2/layouts/ImageHero.vue';
  import ImageDescription from '@/components/3-demo2/layouts/ImageDescription.vue';
  import CardProductSuggestion from '@/components/3-demo2/cards/CardProductSuggestion.vue';

  import ListProduct from '@/components/3-demo2/layouts/ListProduct.vue'
  import Footer from '@/components/3-demo2/layouts/Footer.vue'

  import Accordion from '@/components/3-demo2/menus/Accordion.vue'
  import List from '@/components/3-demo2/menus/List.vue'
  import Table from '@/components/3-demo2/menus/Table.vue'
  import MenuRouter from '@/components/3-demo2/menus/MenuRouter.vue'

  import SwiperSlider from '@/components/3-demo2/layouts/SwiperSlider.vue'

  // importar api de datos
  import { useProductsStore } from '@/stores/products'
  const apiProducts = useProductsStore()

  // cargar datos con id
  onMounted(async ()=>{
        await apiProducts.loadDates(3)
  })

  const urlDeWhatsapp = ref('')
    
    // Utilizar el hook watch para esperar cambios en props.companiesDates
    watch(() => apiProducts.companiesDates, (newCompaniesDates) => {
      // Verificar si props.companiesDates tiene datos antes de acceder a la URL de WhatsApp
      if (newCompaniesDates && newCompaniesDates.socialMedia) {
        const whatsappObj = newCompaniesDates.socialMedia.find(media => media.slug === 'whatsapp');
        urlDeWhatsapp.value = whatsappObj ? whatsappObj.pivot.url : '';
      }
    });
</script>

<template>
  <!-- pantalla completa -->
  <div class="bg-gray-300">

    <!-- contenedor de todos los datos -->
    <div class="bg-secondary-50 max-w-5xl mx-auto">

      <!-- portada -->
      <ImageHero 
        class="mb-2" 
        :companiesDates="apiProducts.companiesDates"
      />

      <!-- boton y listado modal de productos -->
      <ListProduct 
        class=""
        :companiesDates="apiProducts.companiesDates"
        :urlDeWhatsapp="urlDeWhatsapp"
        :class="apiProducts.companiesDates.list_product ? 'block' : 'hidden'"
      />

      <!-- direccion, localidad y boton a whatsapp -->
      <div class="p-2 flex flex-col gap-2">
        <p ><a class="flex items-center gap-1 text-secondary-800 hover:underline" target="_blank" :href="'https://api.whatsapp.com/send/?phone='+urlDeWhatsapp+'&amp;text='+encodeURIComponent('\*Quiero consultar\*: \n')">
          <SocialIcons icon="whatsapp"/>
          <span>Enviar WhatsApp</span>
        </a></p>
        <p class="italic"><span class="font-bold">Direccion:</span> {{ apiProducts.companiesDates.adress }}</p>
        <p class="italic"><span class="font-bold">Localidad:</span> {{ apiProducts.companiesDates.city }}</p>
      </div>

      <!-- seleccionar menu solo en demo -->
      <div class="flex flex-col justify-center my-7 items-center max-w-lg mx-auto lg:rounded-md">
        <p class="italic text-xs text-center">Selecciona el menu facilmente desde la demo</p>
        <select 
          id="apiProducts.menuSelected" 
          v-model="apiProducts.menuSelected"
          placeholder="Formato del menu" 
          class=" my-2 mx-5 px-4 py-2 text-center border font-bold bg-secondary-200 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-3/4">
          <!-- <option selected>Choose a country</option> -->
          <option class="text-sm font-light mx-auto italic" value="1">Desplegable</option>
          <option class="text-sm font-light mx-auto italic" value="2">Listado</option>
          <option class="text-sm font-light mx-auto italic" value="3">Secciones</option>
          <option class="text-sm font-light mx-auto italic" value="4">Tabla</option>
        </select>
      </div>

      <!-- ////////////////////////////////////////////////////////////////// -->
        <!-- menu accordion -->
        <div v-if="apiProducts.menuSelected == '1'">
          <Accordion
            class="mb-10 max-w-lg mx-auto lg:rounded-md"
            :productsDates="apiProducts.productsDates"
            :levelsDates="apiProducts.levelsDates"
            :categoriesDates="apiProducts.categoriesDates"
            :companiesDates="apiProducts.companiesDates"
          />
        </div>
    
        <!-- menu list -->
        <div v-if="apiProducts.menuSelected == '2'">
          <List
            class="mb-10 max-w-lg mx-auto lg:rounded-md"
            :productsDates="apiProducts.productsDates"
            :levelsDates="apiProducts.levelsDates"
            :categoriesDates="apiProducts.categoriesDates"
            :companiesDates="apiProducts.companiesDates"
          />
        </div>
      
        <!-- menu con secciones -->
        <div v-if="apiProducts.menuSelected == '3'">
          <MenuRouter
            class="mb-10 max-w-lg mx-auto lg:rounded-md"
            :productsDates="apiProducts.productsDates"
            :levelsDates="apiProducts.levelsDates"
            :categoriesDates="apiProducts.categoriesDates"
            :companiesDates="apiProducts.companiesDates"
          />
        </div>
      
        <!-- menu forma tabla -->
        <div v-if="apiProducts.menuSelected == '4'">
          <Table
            class="mb-10 max-w-lg mx-auto lg:rounded-md"
            :productsDates="apiProducts.productsDates"
            :levelsDates="apiProducts.levelsDates"
            :categoriesDates="apiProducts.categoriesDates"
            :companiesDates="apiProducts.companiesDates"
          />
        </div>
      <!-- ////////////////////////////////////////////////////////////////// -->
      
      <!-- imagen con descripcion -->
      <ImageDescription 
        class="mb-10" 
        :companiesDates="apiProducts.companiesDates"
      />

      <!-- seccion de ofertas -->
      <div v-if="apiProducts.offersDates.length > 0" class="mb-10 w-full mx-auto lg:rounded-md bg-secondary-100 pb-2 pt-5">
          <h2 class="text-center font-bold text-4xl mb-2">Ofertas</h2>
        
            <SwiperSlider 
            :offersDates="apiProducts.offersDates"
            :addToListButton="apiProducts.companiesDates.list_product"
            />

      </div>
  
      <!-- seccion de sugeridos -->
      <div v-if="apiProducts.suggestionsDates.length > 0" class="mb-10 max-w-lg mx-auto lg:rounded-md">
          <h2 class="text-center font-bold text-4xl mb-5">Sugeridos</h2>
        
            <CardProductSuggestion 
              v-for="suggetion in apiProducts.suggestionsDates" :key="suggetion.id"
              :product="suggetion"
              :addToListButton="apiProducts.companiesDates.list_product"
            />
            
      </div>
  
      <!-- footer -->
      <Footer
        class="max-w-5xl mx-auto lg:rounded-md"
        :companiesDates="apiProducts.companiesDates"
      />

    </div>
  
  </div>
</template>

<style scoped>

</style>