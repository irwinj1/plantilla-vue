import { reactive, ref } from "vue";
import { iniciarSesion } from "../../../../services";

export function useLogin(){
    const results = ref<any>({});
    const error = ref<any>(null);

    const loginUser = async(user:Object)=>{
        try {
            const response = await iniciarSesion(user)            
            results.value = response?.data?.data           
            
        } catch (err) {
            error.value = err
        }

    }

    return {
        loginUser,
        results,
        error
    }

}