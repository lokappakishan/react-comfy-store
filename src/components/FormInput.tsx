interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  size?: string;
  [key: string]: unknown;
}

const FormInput = ({
  label,
  name,
  type = 'text',
  defaultValue = '',
  size = '',
  ...rest
}: FormInputProps) => {
  return (
    <div className="form-control">
      <label className="label" htmlFor={name}>
        <span className="label-text capitalize mr-2">{label}</span>
      </label>
      <input
        id={name}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
        {...rest}
      />
    </div>
  );
};

export default FormInput;
