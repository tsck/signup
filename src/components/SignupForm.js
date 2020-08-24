import React, { useState } from "react";
import styled from "@emotion/styled/macro";

const StSignupForm = styled.form`
  display: inline-block;
  padding: 0 25px;
  width: calc(50% - 50px);
  label {
    display: block;
    margin-bottom: 5px;
    font-size: 0.7rem;
  }
  input {
    border: 2px solid rgba(0, 0, 0, 0.1);
    padding: 0 15px;
    height: 35px;
    width: calc(100% - 30px);
    margin-bottom: 5px;
    border-radius: 5px;
    transition: border 0.2s linear;
    &:focus {
      border: 2px solid #3f2b4f;
    }
    &.error {
      border: 2px solid #ff5543;
      &:focus {
        border: 2px solid #ff5543;
      }
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;

const StErrorMessage = styled.p`
  color: #ff5543;
  font-weight: bold;
  font-size: 0.7rem;
  margin-top: 0;
  margin-bottom: 15px;
  height: 15px;
`;

const StButton = styled.button`
  background: #ff5543;
  color: white;
  border: none;
  padding: 12px 0;
  width: 100%;
  border-radius: 100em;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: #ef2e25;
    cursor: pointer;
  }
  &:disabled {
    background: rgba(0, 0, 0, 0.5);
    &:hover {
      cursor: default;
    }
  }
`;

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [idealWeight, setIdealWeight] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] = useState(
    ""
  );
  const [nameError, setNameError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [idealWeightError, setIdealWeightError] = useState("");

  function createChangeHandler(setter) {
    return (e) => {
      setter(e.target.value);
    };
  }

  function createBlurHandler(errorSetter) {
    return (e) => {
      e.target.checkValidity();
      errorSetter(e.target.validationMessage);
    };
  }

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

  return (
    <StSignupForm>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          className={`${emailError ? "error" : ""}`}
          onChange={createChangeHandler(setEmail)}
          onBlur={createBlurHandler(setEmailError)}
          placeholder="eg. homerj@email.com"
          required
        />
        <StErrorMessage>{emailError}</StErrorMessage>
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          className={`${passwordError ? "error" : ""}`}
          onChange={createChangeHandler(setPassword)}
          onBlur={(e) => {
            debugger;
            if (!isValidPassword(e.target.value)) {
              setPasswordError(
                "Password must contain 1 number, 1 letter, and 1 special character."
              );
            } else {
              setPasswordError(e.target.validationMessage);
            }
          }}
          placeholder="Must be at least 8 characters - 1 number, 1 letter, 1 special"
          required
          minLength="8"
        />
        <StErrorMessage>{passwordError}</StErrorMessage>
      </div>
      <div>
        <label htmlFor="passwordConfirmation">confirm password</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="passwordConfirmation"
          value={passwordConfirmation}
          className={`${passwordConfirmationError ? "error" : ""}`}
          onChange={createChangeHandler(setPasswordConfirmation)}
          onBlur={(e) => {
            if (password !== passwordConfirmation) {
              setPasswordConfirmationError(
                "Password confirmation doesn't match the entered password."
              );
            } else {
              setPasswordConfirmationError(e.target.validationMessage);
            }
          }}
          placeholder=" "
          required
        />
        <StErrorMessage>{passwordConfirmationError}</StErrorMessage>
      </div>
      <div>
        <label htmlFor="name">pet name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className={`${nameError ? "error" : ""}`}
          onChange={createChangeHandler(setName)}
          onBlur={createBlurHandler(setNameError)}
          placeholder="eg. Brian Griffin"
          required
        />
        <StErrorMessage>{nameError}</StErrorMessage>
      </div>
      <div>
        <label htmlFor="weight">pet weight - lbs</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={weight}
          className={`${weightError ? "error" : ""}`}
          onChange={createChangeHandler(setWeight)}
          onBlur={createBlurHandler(setWeightError)}
          placeholder="Min 3 lbs - max 180 lbs"
          required
          min="3"
          max="180"
        />
        <StErrorMessage>{weightError}</StErrorMessage>
      </div>
      <div>
        <label htmlFor="ideal-weight">ideal pet weight - lbs (optional)</label>
        <input
          type="number"
          name="ideal-weight"
          id="ideal-weight"
          value={idealWeight}
          className={`${idealWeightError ? "error" : ""}`}
          onChange={createChangeHandler(setIdealWeight)}
          onBlur={createBlurHandler(setIdealWeightError)}
          placeholder="Min 3 lbs - max 180 lbs"
          min="3"
          max="180"
        />
        <StErrorMessage>{idealWeightError}</StErrorMessage>
      </div>
      <StButton type="submit">Submit</StButton>
    </StSignupForm>
  );
}

export default App;
