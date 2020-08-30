import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { css } from "@emotion/core";
import { useForm } from "react-hook-form";
import StButton from "./StButton";
import { colors } from "../util/globalStyles";
import Loader from "react-loader-spinner";

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

const subtextStyle = css`
  font-size: 0.7rem;
  margin-top: 0;
  margin-bottom: 15px;
  height: 15px;
`;

const StErrorMessage = styled.p`
  ${subtextStyle}
  color: ${colors.highlight};
  font-weight: bold;
`;

const StRequirementsText = styled.p`
  ${subtextStyle}
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

function Form({ config, method, action, onSuccess, onError }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const { register, handleSubmit, watch, errors, reset } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    setIsProcessing(true);

    const response = await fetch(action, {
      method: method,
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    setIsProcessing(false);

    if (response.ok) {
      onSuccess(response);
      reset(response);
    } else {
      onError(response);
    }
  };

  return (
    <StForm onSubmit={handleSubmit(onSubmit)}>
      {config({ register, handleSubmit, watch, errors }).map(
        ({
          key,
          type,
          placeholder = " ",
          validation = {},
          label = "",
          requirements = "",
        }) => (
          <div key={key}>
            <StLabel htmlFor={key}>
              {label || key}
              {!validation.required ? " (optional)" : ""}
            </StLabel>
            <StInput
              type={type}
              name={key}
              id={key}
              ref={register(validation)}
              className={`${errors[key] ? "error" : ""}`}
              placeholder={placeholder}
            />
            {errors[key] ? (
              <StErrorMessage>{errors[key]?.message}</StErrorMessage>
            ) : (
              <StRequirementsText>{requirements}</StRequirementsText>
            )}
          </div>
        )
      )}
      {isProcessing ? (
        <StButton type="button" disabled={true}>
          <Loader type="Oval" color="#ffffff" height={10} width={10} />
        </StButton>
      ) : (
        <StButton type="submit">Submit</StButton>
      )}
    </StForm>
  );
}

Form.propTypes = {
  config: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
  method: PropTypes.oneOf(["POST", "GET", "PUT", "PATCH", "DELETE"]).isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

Form.defaultProps = {
  onError: () => {},
};

export default Form;
