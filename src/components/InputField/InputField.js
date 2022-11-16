const InputField = ({
  className,
  label,
  name,
  id,
  onChange,
  value,
  type,
  placeholder,
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
      />
    </>
  );
};

export default InputField;
