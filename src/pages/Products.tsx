import { axiosInstance } from '../api';
import { Filters, PaginationContainer, ProductsContainer } from '../components';

const URL = `products`;

export const loader = async () => {
  const response = await axiosInstance(URL);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
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
