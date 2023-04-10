import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  // custom request config
}

interface CustomAxiosInstance extends AxiosInstance {
  (config: CustomAxiosRequestConfig): Promise<any>;
}

const api: CustomAxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

export default api;
