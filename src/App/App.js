import { useState } from "react";
import Button from "../components/Button/Button";
import CardBack from "../components/CardBack/CardBack";
import CardFront from "../components/CardFront/CardFront";

import classes from "./App.module.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import valid from "card-validator";
import SubmitComponent from "../components/SubmitComponent/SubmitComponent";
function App() {
  const [formState, setFormState] = useState({
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvc: "",
  });
  const [submited, setIsSubmited] = useState(false);

  const { cardCvc, cardMonth, cardName, cardNumber, cardYear } = formState;

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
    setFormState(values);
    setIsSubmited(true);
  };

  return (
    <div className={classes.app}>
      <div className={classes.cardContainer}>
        <CardFront
          cardName={cardName}
          cardNumber={cardNumber}
          cardMonth={cardMonth}
          cardYear={cardYear}
        />
        <CardBack cardCvc={cardCvc} />
      </div>
      <div className={classes.formContainer}>
        {submited ? (
          <SubmitComponent onClick={() => setIsSubmited(false)} />
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default App;
