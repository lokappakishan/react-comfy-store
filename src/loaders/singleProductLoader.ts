// src/loaders/singleProductLoader.ts
import { LoaderFunctionArgs } from 'react-router-dom';
import { axiosInstance } from '../api/axios';

const singleProductLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;
  const response = await axiosInstance(`/products/${id}`);
  return response.data.data;
};

export default singleProductLoader;
