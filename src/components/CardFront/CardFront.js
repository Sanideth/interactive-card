import classes from "./CardFront.module.css";
import { ReactComponent as CircleIcon } from "../../images/card-logo.svg";

const CardFront = ({ cardNumber, cardName, month, year }) => {
  return (
    <div className={classes.cardFront}>
      <CircleIcon
        className={classes.icon}
        // style={{ width: "100px", height: "47px" }}
      />
      <p className={classes.cardNumber}>
        {cardNumber ? cardNumber.substring(0, 4) : "0000"}
        &nbsp;{cardNumber ? cardNumber.substring(4, 8) : "0000"}&nbsp;
        {cardNumber ? cardNumber.substring(8, 12) : "0000"}&nbsp;
        {cardNumber ? cardNumber.substring(12, 16) : "0000"}
      </p>

      <div className={classes.cardCredentials}>
        <p className={classes.cardHolder}>
          {cardName ? cardName.toUpperCase() : "JANE APPLESEED"}
        </p>
        <p className={classes.cardDate}>
          {month ? month : "00"}/{year ? year : "00"}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
