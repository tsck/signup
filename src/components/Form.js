import React from "react";
import styled from "@emotion/styled/macro";
import { useForm } from "react-hook-form";

const StForm = styled.form`
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

function Form({ getConfig, onSubmit, onError }) {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
  });

  return (
    <StForm onSubmit={handleSubmit(onSubmit, onError)}>
      {getConfig({ register, handleSubmit, watch, errors }).map(
        ({ key, type, placeholder = " ", validation = {}, label = "" }) => (
          <div key={key}>
            <label htmlFor={key}>{label || key}</label>
            <input
              type={type}
              name={key}
              id={key}
              ref={register(validation)}
              className={`${errors[key] ? "error" : ""}`}
              placeholder={placeholder}
            />
            <StErrorMessage>{errors[key]?.message}</StErrorMessage>
          </div>
        )
      )}
      <StButton type="submit">Submit</StButton>
    </StForm>
  );
}

export default Form;
