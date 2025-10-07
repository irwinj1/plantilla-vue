import { defineStore } from "pinia";

interface Cliente{
    id:number,
    nombre:string,
    telefono:number,
    direccion:string,
    dui:string|null,
    nit:string|null,
    createdAt:Date;
}

interface DetalleVenta{
    id:number,
    id_venta:number,
    descripcion:string,
    cantidad:number,
    precioUnitario:number,
    ventasAfectadas:number,
    createdAt:Date
}

interface Venta {
    id: number;
    cliente:Cliente,
    detalleVentas:DetalleVenta[]
    total:number
  }
  
  interface Pagination {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  }
  
  interface VentasState {
    ventas: Venta[]|null;
    venta: Venta | null;
    pagination: Pagination | null;
  }
  
export const useVentasStore = defineStore('storeVentas',{
    state: ():VentasState=>({
        ventas:[],
        venta:null,
        pagination:null
    }),
    actions:{
       async getVentas(){
            try {
                this.ventas = [
                    {
                        id:1,
                        cliente:{
                            id:1,
                            nombre:"OPLS",
                            telefono:12345678,
                            direccion:"Casa",
                            dui:"1236589",
                            nit:null,
                            createdAt:new Date()

                        },
                        detalleVentas:[
                            {
                                id:1,
                                id_venta:1,
                                descripcion:"venta de tranporte",
                                cantidad:1,
                                precioUnitario:80,
                                ventasAfectadas:80,
                                createdAt:new Date()
                            },
                            {
                                id:1,
                                id_venta:2,
                                descripcion:"Flete 1",
                                cantidad:1,
                                precioUnitario:80,
                                ventasAfectadas:80,
                                createdAt:new Date()
                            }

                        ],
                        total:160
                    }
                ]
            } catch (error) {
                console.error(error);
                
            }
        }
    }
})