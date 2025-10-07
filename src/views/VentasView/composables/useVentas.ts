import { useVentasStore } from "../../../store/useVentasStore";
import { ref,computed } from "vue";

export function useVentas(){
    const ventasStore = useVentasStore();
    const ventas = computed(()=>ventasStore.ventas);
    const pagination = computed(()=>ventasStore.pagination)

    const cargarVentas = async()=>{
        await ventasStore.getVentas();
    }


    return {
        ventas,
        pagination,
        cargarVentas
    }

}