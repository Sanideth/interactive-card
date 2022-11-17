import classes from "./Button.module.css";

const Button = ({ onClick, text, className, type }) => {
  return (
    <button
      className={className ? className : classes.button}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
