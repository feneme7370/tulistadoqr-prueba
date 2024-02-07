import { defineStore } from "pinia";

export const usePriceCurrency = defineStore('apiPriceCurrency', () => {
    const formatterCurrency = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
    });

    return {
        formatterCurrency
    }
}) 
