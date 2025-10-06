import { defineStore } from "pinia";


export const useVentasStore = defineStore('storeVentas',{
    state: ()=>({
        ventas:[],
        venta:{},
        pagination:{}
    }),
    actions:{
       async getVentas(){
            try {
                
            } catch (error) {
                
            }
        }
    }
})