import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIProduct from '../services/APIProduct'

export const useProductsStore = defineStore('apiProducts', () => {

    const productsDates = ref({})
    const suggestionsDates = ref({})
    const categoriesDates = ref({})
    const levelsDates = ref({})
    const companiesDates = ref({})

    const menuSelected = ref('')

    const loadDates = async () => {
        const dataProducts = await APIProduct.getProducts()

        productsDates.value = await dataProducts.data['responseProducts']
        suggestionsDates.value = await dataProducts.data['responseSuggestions']
        levelsDates.value = await dataProducts.data['responseLevels']
        categoriesDates.value = await dataProducts.data['responseCategories']
        companiesDates.value = await dataProducts.data['responseCompany'][0]

        menuSelected.value = await dataProducts.data['responseCompany'][0].type_menu
    }
    onMounted(async()=>{
        loadDates()
    })

    return {
        productsDates,
        categoriesDates,
        levelsDates,
        companiesDates,
        suggestionsDates,
        menuSelected,

        loadDates
    }
 
})
