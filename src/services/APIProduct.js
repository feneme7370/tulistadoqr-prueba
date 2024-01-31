import api from "../lib/axios";

// tomar api de productos, ya tiene la url el termino api
export default {
    getProducts(){
        return api.get('/products/2')
        // return api.get('/list.php?c=list')
    },
    getCategories(){
        return api.get('categories/2')
    },
    getLevels(){
        return api.get('levels/2')
    },
    getCompanies(){
        return api.get('companies/2')
    },
}