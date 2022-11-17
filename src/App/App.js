import { useState } from "react";
import Button from "../components/Button/Button";
import CardBack from "../components/CardBack/CardBack";
import CardFront from "../components/CardFront/CardFront";
import InputField from "../components/InputField/InputField";
import classes from "./App.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import valid from "card-validator";
function App() {
  // const [cardName, setCardName] = useState("");
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardMonth, setCardMonth] = useState("");
  // const [cardYear, setCardYear] = useState("");
  // const [cardCvc, setCardCvc] = useState("");
  // const [error, setError] = useState({
  //   nameError: null,
  //   numberError: null,
  //   monthError: null,
  //   yearError: null,
  //   cvcError: null,
  // });

  // const { cvcError, monthError, nameError, numberError, yearError } = error;

  // const [formData, setFormData] = useState({
  //   submittedCardName: "",
  //   submittedCardNumber: "",
  //   submittedCardMonth: "",
  //   submittedCardYear: "",
  //   submittedCardCvc: "",
  // });

  // const {
  //   submittedCardCvc,
  //   submittedCardMonth,
  //   submittedCardName,
  //   submittedCardNumber,
  //   submittedCardYear,
  // } = formData;

  // const handleCardNameChange = (event) => {
  //   setCardName(event.target.value);
  // };

  // const handleCardNumberChange = (event) => {
  //   setCardNumber(event.target.value);
  // };
  // const handleCardMonthChange = (event) => {
  //   setCardMonth(event.target.value);
  // };
  // const handleCardYearChange = (event) => {
  //   setCardYear(event.target.value);
  // };
  // const handleCardCvcChange = (event) => {
  //   setCardCvc(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (cardName.length === 0) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       nameError: "Provide a valid name!",
  //     }));

  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       submittedCardName: cardName,
  //     }));
  //     setError((prevState) => ({
  //       ...prevState,
  //       nameError: "",
  //     }));
  //   }
  //   const validCardNumber = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  //   if (!validCardNumber.test(cardNumber)) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       numberError: "Provide a valid Visa number!",
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       submittedCardNumber: cardNumber,
  //     }));
  //     setError((prevState) => ({
  //       ...prevState,
  //       numberError: "",
  //     }));
  //   }
  //   if (cardMonth.length === 0 || cardMonth > 12) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       monthError: "Provide a valid month!",
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       submittedCardMonth: cardMonth,
  //     }));
  //     setError((prevState) => ({
  //       ...prevState,
  //       monthError: "",
  //     }));
  //   }
  //   if (cardYear > 9999 || cardYear < 2022) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       yearError: "Provide a valid year!",
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       submittedCardYear: cardYear,
  //     }));
  //     setError((prevState) => ({
  //       ...prevState,
  //       yearError: "",
  //     }));
  //   }
  //   if (cardCvc === 0 || cardYear < 100) {
  //     setError((prevState) => ({
  //       ...prevState,
  //       cvcError: "Provide a valid CVC!",
  //     }));
  //   } else {
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       submittedCardCvc: cardCvc,
  //     }));
  //     setError((prevState) => ({
  //       ...prevState,
  //       cvcError: "",
  //     }));
  //   }
  // };

  const validationSchema = Yup.object({
    cardName: Yup.string().required("Please provide a valid name!"),
    cardNumber: Yup.number()
      .test(
        "test-number",
        "Please provide a valid credit card number",
        (value) => valid.number(value).isValid
      )
      .required(),
    cardMonth: Yup.number()
      .test(
        "test-number",
        "Please provide a valid month",
        (value) => value && valid.expirationMonth(value.toString()).isValid
      )
      .required(),
    cardYear: Yup.number()
      .test(
        "test-number",
        "Please provide a valid year",
        (value) => value && valid.expirationYear(value.toString()).isValid
      )
      .required(),
    cardCvc: Yup.number()
      .test(
        "test-number",
        "Please provide a valid CVV",
        (value) => value && valid.cvv(value.toString()).isValid
      )
      .required(),
  });
  const initialValues = {
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  };

  const renderError = (message, className) => (
    <p className={classes.error}>{message}</p>
  );
  const renderMonthError = (message) => (
    <p className={classes.monthError}>{message}</p>
  );
  const renderYearError = (message) => (
    <p className={classes.yearError}>{message}</p>
  );
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={classes.app}>
      <div className={classes.cardContainer}>
        <CardFront />
        <CardBack />
      </div>
      <div className={classes.formContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            await onSubmit(values);
            resetForm();
          }}
        >
          <Form className={classes.form}>
            <div className={classes.inputContainer}>
              <label htmlFor="cardName">Card Holder</label>

              <Field
                name="cardName"
                type="text"
                placeholder="e.g. Jane Appleseed"
              />
              <ErrorMessage
                name="cardName"
                render={renderError}
                className={classes.error}
              />
            </div>
            <div className={classes.inputContainer}>
              <label className="label" htmlFor="cardNumber">
                Card Number
              </label>

              <Field
                name="cardNumber"
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
              />
              <ErrorMessage
                name="cardNumber"
                render={renderError}
                className={classes.error}
              />
            </div>

            <div className={classes.inputDateContainer}>
              <label htmlFor="cardMonth">Exp. Date (MM/YY)</label>

              <Field name="cardMonth" type="number" placeholder="MM" />

              <Field name="cardYear" type="number" placeholder="YY" />
            </div>
            <div className={classes.inputCvcContainer}>
              <label htmlFor="cardCvc">CVC Number</label>

              <Field name="cardCvc" type="number" placeholder="CVC" />
            </div>
            <div className={classes.errorDateContainer}>
              <ErrorMessage name="cardMonth" render={renderMonthError} />
              <ErrorMessage name="cardYear" render={renderYearError} />
            </div>
            <div>
              <ErrorMessage name="cardCvc" render={renderError} />
            </div>

            <Button type="submit" text="Submit"></Button>
          </Form>
        </Formik>
      </div>

      {/* <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputContainer}>
            <InputField
              label="Cardholder Name"
              placeholder="e.g. Jane Appleseed"
              id="cardholderName"
              name="cardholderName"
              onChange={handleCardNameChange}
              value={cardName}
              type="text"
            />
            {nameError ? <p className={classes.error}>{nameError}</p> : null}
          </div>
          <div className={classes.inputContainer}>
            <InputField
              label="Card Number"
              placeholder="e.g. 1234 5678 9123 0000"
              id="cardNumber"
              name="cardNumber"
              value={cardNumber}
              type="number"
              onChange={handleCardNumberChange}
            />
            {numberError ? (
              <p className={classes.error}>{numberError}</p>
            ) : null}
          </div>
          <div className={classes.inputDateContainer}>
            <InputField
              label="Exp. Date (MM/YY)"
              placeholder="MM"
              id="month"
              name="month"
              value={cardMonth}
              type="number"
              onChange={handleCardMonthChange}
            />
            {monthError ? <p className={classes.error}>{monthError}</p> : null}
            <InputField
              placeholder="YY"
              id="year"
              name="year"
              value={cardYear}
              type="number"
              onChange={handleCardYearChange}
            />
            {yearError ? <p className={classes.error}>{yearError}</p> : null}
          </div>

          <div className={classes.inputCvcContainer}>
            <InputField
              label="CVC"
              className={classes.inputContainer}
              placeholder="CVC"
              id="cvc"
              name="cvc"
              value={cardCvc}
              type="number"
              onChange={handleCardCvcChange}
            />
            {cvcError ? <p className={classes.cvcError}>{cvcError}</p> : null}
          </div>

          <Button text="Confirm" />
        </form> */}
    </div>
  );
}

export default App;
