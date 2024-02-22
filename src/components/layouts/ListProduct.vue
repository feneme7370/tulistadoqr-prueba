<script setup>
    import { computed } from 'vue';
  import { formatearCantidad } from '@/helpers/price'
  import { useListStore } from '@/stores/list';
//   import { useProductsStore } from '@/stores/products'
//   const apiProducts = useProductsStore()
  const apiList = useListStore()



  const totalAmount = computed(()=>{
        return apiList.ListProduct.reduce((total, product) => 
            total + (product.cantidad * (product.price_seller > 0 ? product.price_seller : product.price_original)), 0
        )
    })

</script>

<template>

    <div class="px-2" >



        <div>
        <!-- Modal toggle -->
        <button data-modal-target="list-product-modal" data-modal-toggle="list-product-modal" class="bg-primary-900 text-gray-200 w-full text-lg font-bold my-2 me-2 px-3 py-2 rounded dark:bg-primary-900 dark:text-primary-300" type="button">
        Voy a pedir al mozo
        </button>

        <!-- Main modal -->
        <div id="list-product-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white p-4 rounded-lg shadow dark:bg-gray-700">

                    
                    <div class="w-full flex justify-between items-center">
                        <span></span>
                        <button class=" bg-primary-200 text-primary-900 text-xs font-medium my-2 me-2 px-3 py-2 rounded dark:bg-primary-900 dark:text-primary-300"  @click="apiList.clearList">Vaciar lista</button>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="list-product-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    
                    <hr class="border-primary-300 w-10/12 mx-auto">
                    <div v-for="product in apiList.ListProduct">
                    
                        <!-- <hr class="border-primary-300 w-2/3 mx-auto"> -->
                        <div class="flex items-center justify-between gap-1">
                        <div>
                            <div class="flex items-center gap-2">
                                <span class="text-gray-700 text-sm font-medium">({{ product.cantidad }})</span>
                                <span class="text-gray-800 text-sm font-bold">{{ product.name }}</span>
                            </div>
                            <div class="flex items-center justify-between gap-1">
                        
                                <span class="text-gray-700 text-xs font-medium">c/u:{{ formatearCantidad(product.price_seller > 0 ? product.price_seller : product.price_original)}}</span>
                                
                                <!-- <button class="block whitespace-nowrap  bg-red-100 text-red-800 text-xs font-medium my-2 me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300" @click="apiList.deleteProduct(product.id)">Quitar</button> -->
                            </div>
                        </div>
                    
                        <div class="flex items-center gap-1">
                        <button class="block whitespace-nowrap  bg-primary-100 text-primary-800 text-sm font-medium my-2 px-2.5 py-0.5 w-6 h-6 rounded dark:bg-primary-900 dark:text-primary-300" @click="apiList.lessAmount(product.id)">-</button>
                        <span class="text-gray-700 text-xs font-medium">{{ formatearCantidad(product.cantidad * (product.price_seller > 0 ? product.price_seller : product.price_original))}}</span>
                        <button class="block whitespace-nowrap  bg-primary-100 text-primary-800 text-sm font-medium my-2 px-2.5 py-0.5 w-6 h-6 rounded dark:bg-primary-900 dark:text-primary-300" @click="apiList.moreAmount(product.id)">+</button>
                    
                        </div>
                    </div>
                    <hr class="border-primary-300 mb-1 w-10/12 mx-auto">
                    
                    </div>
                    
                    
                    <p v-if="totalAmount" class="flex justify-between mt-10 items-center text-gray-800 text-base font-bold">
                        <span>Total a pagar:</span>
                        <span>{{ formatearCantidad(totalAmount) }}</span>
                    </p>
                    <p v-else class="font-bold italic text-center my-5">Agregue productos a su pedido</p>




                </div>
            </div>
        </div>

        </div>
    </div>
    
</template>

<style scoped>

</style>