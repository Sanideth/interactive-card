import classes from "./CardFront.module.css";
import { ReactComponent as CircleIcon } from "../../images/card-logo.svg";

const CardFront = ({ cardNumber, cardHolder, month, year }) => {
  return (
    <div className={classes.cardFront}>
      <CircleIcon
        className={classes.icon}
        // style={{ width: "100px", height: "47px" }}
      />
      <p className={classes.cardNumber}>0000&nbsp;0000&nbsp;0000&nbsp;0000</p>
      <div className={classes.cardCredentials}>
        <p className={classes.cardHolder}>JANE APPLESEED</p>
        <p className={classes.cardDate}>00/00</p>
      </div>
    </div>
  );
};

export default CardFront;
