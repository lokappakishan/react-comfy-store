import { axiosInstance } from '../api';
import { FeaturedProducts, Hero } from '../components';

const URL = `/products?featured=true`;

export const loader = async () => {
  const response = await axiosInstance(URL);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
