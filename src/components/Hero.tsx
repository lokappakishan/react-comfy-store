import { FC } from 'react';

import { Link } from 'react-router-dom';
import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const Hero: FC = () => {
  const carouselImages = [hero1, hero2, hero3, hero4];

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        {/* HEADLINE */}
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl ">
          We’re changing the way people shop.
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-8 max-w-xl text-lg leading-8">
          Comfy Store curates premium, sustainably crafted furniture and home
          living accessories that turn any space into a warm retreat. You will
          find cloud soft sofas, ergonomic office chairs, solid oak dining sets,
          and hand loomed rugs, all designed for modern style and long lasting
          comfort.
        </p>
        <div className="mt-10 ">
          <Link to="products" className="btn btn-primary ">
            Our Products
          </Link>
        </div>
      </div>

      {/* PRODUCT IMAGE CAROUSEL */}
      <div className="hidden  h-[28rem] lg:carousel carousel-center   p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
