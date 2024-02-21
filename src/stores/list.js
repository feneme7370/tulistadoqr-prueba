import { defineStore } from "pinia";
import { reactive, ref, onMounted, watch } from 'vue';

export const useListStore = defineStore( 'apiList', () => {

    const ListProduct = ref([])
 
    watch(ListProduct, () => {
        guardarLocalStorage()
    }, {
        deep: true
    })

    onMounted(() => {       
        const ListProductStorage = localStorage.getItem('ListProduct')
        if(ListProductStorage){
            ListProduct.value = JSON.parse(ListProductStorage)
        }
    })

    const addToList = (product)=>{
        
        //devuelve la posicion del producto en el ListProduct
        const existProduct = ListProduct.value.findIndex(producto => producto.id === product.id)
        // console.log(existProduct);
        
        //si no existe es -1, al clickear por segunda vez tiene posicion y es 0 o mas
        if(existProduct >= 0){
            // if(ListProduct.value[existProduct].cantidad >= maxListProduct) return
            ListProduct.value[existProduct].cantidad++;
            // console.log(ListProduct.value[existProduct].cantidad);
        }else{
            product.cantidad = 1;
            ListProduct.value.push(product);
        }
        Toastify({
            text: 'Agregado al pedido',
            duration: 4000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#f0fdf4",
              color: "#166534",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        // guardarLocalStorage()
    }

    const lessAmount = (id) => {
        //busca el id en el ListProduct y tomo el producto
        const index = ListProduct.value.findIndex(producto => producto.id == id)
        if(ListProduct.value[index].cantidad <= 1){
            deleteProduct(id)
            return
        }
        ListProduct.value[index].cantidad--
        // guardarLocalStorage()
    }
    const moreAmount = (id) => {
        const index = ListProduct.value.findIndex(producto => producto.id == id)
        // if(ListProduct.value[index].cantidad >= maxListProduct) return
        ListProduct.value[index].cantidad++
        // guardarLocalStorage()
    }

    const deleteProduct = (id) => {
        ListProduct.value = ListProduct.value.filter(producto => producto.id !== id)
        // guardarLocalStorage()
        Toastify({
            text: 'Se quito el producto',
            duration: 4000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#f0fdf4",
              color: "#166534",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    const clearList = () => {
        ListProduct.value = []
        // guardarLocalStorage()
        Toastify({
            text: 'Se vacio el pedido',
            duration: 4000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#f0fdf4",
              color: "#166534",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    const guardarLocalStorage = () => {
        //convierto ListProduct en string para almacenar
        localStorage.setItem('ListProduct', JSON.stringify(ListProduct.value))
    }
    return {
        ListProduct,
        addToList,
        deleteProduct,
        clearList,
        moreAmount,
        lessAmount,
    }
})