import classes from "./CardBack.module.css";

const CardBack = ({ cvcNumber }) => {
  return (
    <div className={classes.cardBack}>
      <p className={classes.cardCvc}>000</p>
    </div>
  );
};

export default CardBack;
