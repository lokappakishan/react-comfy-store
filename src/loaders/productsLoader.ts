import { LoaderFunctionArgs } from 'react-router-dom';
import { axiosInstance } from '../api/axios';

const PRODUCTS_URL = `products`;

const productsLoader = async ({ request }: LoaderFunctionArgs) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await axiosInstance(PRODUCTS_URL, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

export default productsLoader;
