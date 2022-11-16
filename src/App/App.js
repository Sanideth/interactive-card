import Button from "../components/Button/Button";
import CardBack from "../components/CardBack/CardBack";
import CardFront from "../components/CardFront/CardFront";
import InputField from "../components/InputField/InputField";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <div className={classes.cardContainer}>
        <CardFront />
        <CardBack />
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
          <div className={classes.inputContainer}>
            <InputField
              label="Cardholder Name"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className={classes.inputContainer}>
            <InputField
              label="Card Number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className={classes.inputDateContainer}>
            <InputField label="Exp. Date (MM/YY)" placeholder="MM" />

            <InputField placeholder="YY" />
          </div>

          <div className={classes.inputCvcContainer}>
            <InputField
              label="CVC"
              className={classes.inputContainer}
              placeholder="CVC"
            />
          </div>

          <Button text="Confirm" />
        </form>
      </div>
    </div>
  );
}

export default App;
