import { ref } from 'vue'
import { defineStore } from 'pinia'
import APIProduct from '@/services/APIProduct'

export const useProductsStore = defineStore('apiProducts', () => {

    const productsDates = ref([])
    const suggestionsDates = ref([])
    const categoriesDates = ref([])
    const levelsDates = ref([])
    const companiesDates = ref({})
    const tagsDates = ref([])
    const offersDates = ref([])

    const menuSelected = ref('')

    const loadDates = async (id) => {
        const dataProducts = await APIProduct.getProducts(id)
        
        levelsDates.value = await dataProducts.data['responseLevels']
        categoriesDates.value = await dataProducts.data['responseCategories']
        companiesDates.value = await dataProducts.data['responseCompany'][0]
        tagsDates.value = await dataProducts.data['responseTag']

        // offersDates.value = await dataProducts.data['responseOffers']
        // suggestionsDates.value = await dataProducts.data['responseSuggestions']
        productsDates.value = await dataProducts.data['responseProducts']
        offersDates.value = await dataProducts.data['responseProducts'].filter(offers => offers.offer === true)
        suggestionsDates.value = await dataProducts.data['responseProducts'].filter(suggestions => suggestions.suggestion === true)
        // console.log(offersDates.value);
        // console.log(suggestionsDates.value);
        
        menuSelected.value = await dataProducts.data['responseCompany'][0].type_menu
    }
    // onMounted(async()=>{
    //     loadDates()
    // })

    return {
        productsDates,
        categoriesDates,
        levelsDates,
        companiesDates,
        suggestionsDates,
        tagsDates,
        offersDates,
        menuSelected,

        loadDates
    }
 
})
