<template>
    <v-container class="flex justify-center align-center h-screen"  >
        <v-card class="mx-auto" width="400">
            <v-card-text class="bg-surface-light pt-4">
                <v-text-field variant="outlined" label="Correo" v-model="user.email" type="email" required />
                <v-text-field type="password" variant="outlined" label="Password" v-model="user.password" required />
                <v-btn class="text-none mt-4" color="primary" block @click="login">
                    Iniciar sesión
                </v-btn>
            </v-card-text>
        </v-card>
        <loadign-component :overlay="overlay" />
    </v-container>
</template>

<script setup lang="ts">
import { reactive,ref } from 'vue';
import { useLogin } from './composables/useLogin';
import LoadignComponent from '../../../components/LoadignComponent.vue';

const overlay = ref<boolean>(false)
const {results,loginUser,error} = useLogin()
// Tipado del usuario
interface LoginPayload {
  email: string
  password: string
}

const user = reactive<LoginPayload>({
  email: '',
  password: '',
})


const login = async () => {
   try {
    overlay.value=true
     
    await loginUser(user)
    console.log(results);
   } catch (error) {
    console.error(error);
    
   } finally{
    localStorage.setItem('token',results.value?.access_token)
    overlay.value=false
    window.location.replace('/')
   }
}

</script>