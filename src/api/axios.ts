import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});
