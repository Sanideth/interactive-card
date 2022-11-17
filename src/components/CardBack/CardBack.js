import classes from "./CardBack.module.css";

const CardBack = ({ cvcNumber }) => {
  return (
    <div className={classes.cardBack}>
      <p className={classes.cardCvc}>{cvcNumber ? cvcNumber : "000"}</p>
    </div>
  );
};

export default CardBack;
