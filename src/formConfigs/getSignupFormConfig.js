function hasSpecialCharacter(str) {
  return /\W/.test(str);
}

function hasLetter(str) {
  return /[a-zA-Z]/.test(str);
}

function hasNumber(str) {
  return /\d/.test(str);
}

function isValidPassword(str) {
  return hasSpecialCharacter(str) && hasLetter(str) && hasNumber(str);
}

export default function getSignupFormConfig({ watch }) {
  return [
    {
      key: "email",
      type: "email",
      placeholder: "eg. homerj@email.com",
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
}
