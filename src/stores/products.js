import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIProduct from '@/services/APIProduct'

export const useProductsStore = defineStore('apiProducts', () => {

    const productsDates = ref({})
    const suggestionsDates = ref({})
    const categoriesDates = ref({})
    const levelsDates = ref({})
    const companiesDates = ref({})

    onMounted(async()=>{
            const dataProducts = await APIProduct.getProducts()

            productsDates.value = dataProducts.data['responseProducts']
            suggestionsDates.value = dataProducts.data['responseSuggestions']
            levelsDates.value = dataProducts.data['responseLevels']
            categoriesDates.value = dataProducts.data['responseCategories']
            companiesDates.value = dataProducts.data['responseCompany'][0]
    })

    // async function getProductsDates(){
    //     const data = await APIProduct.getProducts()
    //     productsDates = data
    // }

    return {
        productsDates,
        categoriesDates,
        levelsDates,
        companiesDates,
        suggestionsDates,
    }
 
})
