import { ReactComponent as CheckIcon } from "../../images/icon-complete.svg";
import Button from "../Button/Button";
import classes from "./SubmitComponent.module.css";
const SubmitComponent = ({ onClick }) => {
  return (
    <div className={classes.submitComponent}>
      <CheckIcon className={classes.icon} />
      <p className={classes.heading}>Thank You!</p>
      <p className={classes.text}>We’ve added your card details</p>
      <Button text="Continue" className={classes.button} onClick={onClick} />
    </div>
  );
};

export default SubmitComponent;
