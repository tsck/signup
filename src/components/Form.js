import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { useForm } from "react-hook-form";
import { colors } from "../util/globalStyles";

const StForm = styled.form`
  display: inline-block;
  padding: 0 25px;
  width: calc(100% - 50px);
`;

const StLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const StInput = styled.input`
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  height: 35px;
  width: calc(100% - 30px);
  margin-bottom: 5px;
  border-radius: 5px;
  transition: border 0.2s linear;
  &:focus {
    border: 2px solid ${colors.font};
    outline: none;
  }
  &.error {
    border: 2px solid ${colors.highlight};
    &:focus {
      border: 2px solid ${colors.highlight};
    }
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;

const StErrorMessage = styled.p`
  color: ${colors.highlight};
  font-weight: bold;
  font-size: 0.7rem;
  margin-top: 0;
  margin-bottom: 15px;
  height: 15px;
`;

const StButton = styled.button`
  background: ${colors.highlight};
  color: white;
  border: none;
  padding: 12px 0;
  width: 100%;
  border-radius: 100em;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s ease-in-out;
  &:hover {
    background: ${colors.darkHighlight};
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

function Form({ config, onSubmit, onError }) {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
  });

  return (
    <StForm onSubmit={handleSubmit(onSubmit, onError)}>
      {config({ register, handleSubmit, watch, errors }).map(
        ({ key, type, placeholder = " ", validation = {}, label = "" }) => (
          <div key={key}>
            <StLabel htmlFor={key}>{label || key}</StLabel>
            <StInput
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

Form.propTypes = {
  config: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default Form;
