import { LoaderFunctionArgs } from 'react-router-dom';
import { axiosInstance } from '../api';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const PRODUCTS_URL = `products`;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await axiosInstance(PRODUCTS_URL, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-2">
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
