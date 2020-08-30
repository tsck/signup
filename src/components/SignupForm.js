import React, { useState } from "react";
import Form from "../common/Form";
import { isValidPassword } from "../util/stringValidators";
import Modal from "../common/Modal";

const config = ({ watch }) => [
  {
    key: "email",
    type: "email",
    validation: {
      required: "This field is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Must be a valid email address.",
      },
    },
  },
  {
    key: "password",
    type: "password",
    requirements: "Min. 8 characters w/ a number, a letter, and a symbol",
    validation: {
      required: "This field is required.",
      validate: (value) =>
        isValidPassword(value) ||
        "Must contain a number, a letter, and a special",
      minLength: {
        value: 8,
        message: "Must be at least 8 characters.",
      },
    },
  },
  {
    label: "password confirmation",
    key: "passwordConfirmation",
    type: "password",
    validation: {
      required: "This field is required.",
      validate: (value) =>
        value === watch("password") ||
        "Must match previously entered password.",
    },
  },
  {
    key: "name",
    type: "text",
    validation: {
      required: "This field is required.",
    },
  },
  {
    key: "weight",
    type: "number",
    requirements: "Must be between 3 and 180",
    validation: {
      required: "This field is required.",
      min: {
        value: 3,
        message: "Must be at least 3.",
      },
      max: {
        value: 180,
        message: "Must be at most 180.",
      },
    },
  },
  {
    label: "ideal weight",
    key: "idealWeight",
    type: "number",
    requirements: "Must be between 3 and 180",
    validation: {
      min: {
        value: 3,
        message: "Must be at least 3.",
      },
      max: {
        value: 180,
        message: "Must be at most 180.",
      },
    },
  },
];

function SignupForm() {
  const [showingErrorModal, setShowingErrorModal] = useState(false);
  const [showingSuccessModal, setShowingSuccessModal] = useState(false);

  const onSuccess = (response) => {
    setShowingSuccessModal(true);
  };

  const successModalClickHandler = () => {
    setShowingSuccessModal(false);
  };

  const onError = (response) => {
    setShowingErrorModal(true);
  };

  const errorModalClickHandler = () => {
    setShowingErrorModal(false);
  };

  const errorMessage = "Something went wrong. Please try again.";
  const successMessage = "Your info was successfully submitted.";

  return (
    <>
      {showingErrorModal && (
        <Modal
          clickHandler={errorModalClickHandler}
          message={errorMessage}
          type="error"
        />
      )}
      {showingSuccessModal && (
        <Modal
          clickHandler={successModalClickHandler}
          message={successMessage}
          type="success"
        />
      )}
      <Form
        config={config}
        method="POST"
        action={process.env.REACT_APP_API}
        onSuccess={onSuccess}
        onError={onError}
      />
    </>
  );
}

export default SignupForm;
