import axios from "axios";
import type { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8015/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: Array<{resolve: (token: string) => void, reject: (err: any) => void}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token!);
    }
  });
  failedQueue = [];
};

// 🔹 Interceptor de request → agrega token a cada petición
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Interceptor de response → intenta refrescar el token si expira
httpClient.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
        .then(token => {
          if (originalRequest.headers)
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
          return httpClient(originalRequest);
        })
        .catch(Promise.reject);
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Aquí puedes usar refresh token si tu backend lo devuelve

        const response = await axios.post(
          `${import.meta.env.VITE_API_URL || "http://localhost:8015/api"}/auth/refresh`,
          {}, // body vacío si tu backend solo necesita refresh desde el header
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        const newToken = response.data.data?.access_token || response.data?.access_token;

        localStorage.setItem("token", newToken);
       ;

        processQueue(null, newToken);

        if (originalRequest.headers)
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        return httpClient(originalRequest);
      } catch (err) {
        processQueue(err, null);
        localStorage.removeItem("token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login";
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export { httpClient };
