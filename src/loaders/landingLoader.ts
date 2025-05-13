import { axiosInstance } from '../api/axios';

const URL = `/products?featured=true`;

const landingLoader = async () => {
  const response = await axiosInstance(URL);
  const products = response.data.data;
  return { products };
};

export default landingLoader;
