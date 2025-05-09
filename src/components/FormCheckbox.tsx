import { FC } from 'react';

interface FormCheckboxProps {
  label: string;
  name: string;
  defaultValue?: boolean | undefined;
  size: string;
  [key: string]: unknown;
}

const FormCheckbox: FC<FormCheckboxProps> = ({
  label,
  name,
  defaultValue,
  size,
}) => {
  return (
    <div className="form-control items-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize mr-2">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size}`}
      />
    </div>
  );
};
export default FormCheckbox;
