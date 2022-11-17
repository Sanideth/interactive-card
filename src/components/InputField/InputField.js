const InputField = ({
  className,
  label,
  name,
  id,
  onChange,
  value,
  type,
  placeholder,
  ...props
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default InputField;
