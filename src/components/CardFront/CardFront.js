import classes from "./CardFront.module.css";
import { ReactComponent as CircleIcon } from "../../images/card-logo.svg";

const CardFront = ({ cardNumber, cardName, cardMonth, cardYear }) => {
  const defaultNumber = "0000000000000000";
  return (
    <div className={classes.cardFront}>
      <CircleIcon
        className={classes.icon}
        // style={{ width: "100px", height: "47px" }}
      />
      <p className={classes.cardNumber}>
        {cardNumber
          ? cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
          : defaultNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")}
      </p>

      <div className={classes.cardCredentials}>
        <p className={classes.cardHolder}>
          {cardName ? cardName.toUpperCase() : "JANE APPLESEED"}
        </p>
        <p className={classes.cardDate}>
          {cardMonth ? cardMonth : "00"}/{cardYear ? cardYear : "00"}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
