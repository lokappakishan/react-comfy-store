import { FC } from 'react';

interface FormSelectProps {
  label: string;
  name: string;
  list: string[];
  defaultValue?: string;
  size?: string;
  [key: string]: unknown;
}

const FormSelect: FC<FormSelectProps> = ({
  label,
  name,
  list,
  defaultValue,
  size,
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <select
        name={name}
        id={name}
        className={`select select-bordered ${size}`}
        defaultValue={defaultValue}
      >
        {list.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormSelect;
