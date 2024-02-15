import { defineStore } from "pinia";

export const useConfigStore = defineStore( 'apiConfig', () => {

    const urlFront = 'http://localhost:5137/'
    // const urlBack = 'http://localhost:8000/'
    const urlBack = 'https://tumenuqr.femaser.com/'

    return {
        urlBack,
        urlFront,
    }
})