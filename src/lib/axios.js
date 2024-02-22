import axios from "axios";

// al llamar a api, tomara la url referenciada, sirve para services
const api = axios.create({
    // baseURL : 'https://www.thecocktaildb.com/api/json/v1/1'
    baseURL : 'http://localhost:8000/api/',
    // baseURL : 'https://tumenuqr.femaser.com/api', 
    // baseURL : 'https://www.tumenuqr.up.railway.app/api
    headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'origin': 'http://www.conxn.co.in',
        // 'Access-Control-Allow-Origin': '*'
    }
})

export default api