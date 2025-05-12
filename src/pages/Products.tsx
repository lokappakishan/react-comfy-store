import { Filters, PaginationContainer, ProductsContainer } from '../components';

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
