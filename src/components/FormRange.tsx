import { FC, useState } from 'react';
import { formatPrice } from '../utils';

interface FormRangeProps {
  label: string;
  name: string;
  size: string;
  price: string;
}

const FormRange: FC<FormRangeProps> = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setSelectedPrice] = useState(Number(price) || maxPrice);

  return (
    <div>
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice + '')}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(Number(e.target.value))}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">
          Max : {formatPrice(maxPrice + '')}
        </span>
      </div>
    </div>
  );
};

export default FormRange;
