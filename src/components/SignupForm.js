import React from "react";
import Form from "../common/Form";
import { isValidPassword } from "../util/stringValidators";

const config = ({ watch }) => [
  {
    key: "email",
    type: "email",
    placeholder: "eg. homerjsimpson@email.com",
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
    placeholder:
      "Must be at least 8 characters - 1 number, 1 letter, 1 special",
    validation: {
      required: "This field is required.",
      validate: (value) =>
        isValidPassword(value) ||
        "Must contain 1 number, 1 letter, and 1 special character.",
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
    placeholder: "eg. Brian Griffin",
    validation: {
      required: "This field is required.",
    },
  },
  {
    key: "weight",
    type: "number",
    placeholder: "Min 3 lbs - max 180 lbs",
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
    placeholder: "Min 3 lbs - max 180 lbs",
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
  function onSubmit(data, e) {
    console.log(data);
  }

  function onError(data, e) {
    console.log(data);
  }

  return <Form config={config} onSubmit={onSubmit} onError={onError} />;
}

export default SignupForm;
