import Button from "../components/Button/Button";
import CardBack from "../components/CardBack/CardBack";
import CardFront from "../components/CardFront/CardFront";
import InputField from "../components/InputField/InputField";
import classes from "./App.module.css";

function App() {
  return (
    <div>
      <div className={classes.cardContainer}>
        <CardFront />
        <CardBack />
      </div>
      <div className={classes.formContainer}>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField />
          <InputField />
          <InputField />
          <InputField />
          <InputField />
          <Button />
        </form>
      </div>
    </div>
  );
}

export default App;
