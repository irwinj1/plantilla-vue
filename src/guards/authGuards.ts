import {jwtDecode} from "jwt-decode";
import { validateToken, refreshToken } from "../services";

export const authGuard = async (to, from, next) => {
  const publicRoutes: string[] = ['/login', '/register', '/forgot-password'];

  if (publicRoutes.includes(to.path)) {
    return next();
  }

  let token: any = localStorage.getItem('token');


  if (!token) {
    localStorage.clear();
    return next('/login');
  }

  try {
    const decoded: any = jwtDecode(token);
    const dateExp = new Date(decoded.exp * 1000);
    const now = new Date();
    
    if (dateExp < now) {
      console.warn('Token expirado');
      
      const response = await refreshToken();

      if (response.data?.status === 200) {
        token = response.data.data.access_token;
        localStorage.setItem('token', token);
      } else {
        localStorage.clear();
        return next('/login');
      }
    }
    // Validar token con backend
    const obj = { token };
    const response = await validateToken(obj);

    if (!response || response.status !== 200) {
      console.warn('Token inválido en backend');
      localStorage.clear();
      return next('/login');
    }

    return next();

  } catch (error) {
    console.error('Error decodificando token:', error);
    localStorage.clear();
    return next('/login');
  }
};
