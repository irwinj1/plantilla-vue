import { httpClient } from "../config/utils";

export const validateToken = async (token:string)=>  await httpClient.post('/auth/validate-token',token);

export const refreshToken = async () => await httpClient.get('/auth/refresh')

export const iniciarSesion = async (user:Object) => await httpClient.post('/auth/login',user)