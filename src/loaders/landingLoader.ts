import { axiosInstance } from '../api/axios';

const URL = `/products?featured=true`;

export const landingLoader = async () => {
  const response = await axiosInstance(URL);
  const products = response.data.data;
  return { products };
};
