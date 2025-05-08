import { FC } from 'react';
import SectionTitle from './SectionTitle';
import ProductGrid from './ProductGrid';

const FeaturedProducts: FC = () => {
  return (
    <div className="pt-24">
      <SectionTitle text="featured products" />
      <ProductGrid />
    </div>
  );
};

export default FeaturedProducts;
