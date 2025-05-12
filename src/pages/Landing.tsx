import { FeaturedProducts, Hero } from '../components';

const Landing = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
