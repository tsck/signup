import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled/macro";
import ClickableButton from "./ClickableButton";
import { colors } from "../util/globalStyles";

const StBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
`;

const StMessageBox = styled.div`
  max-width: 400px;
  width: 100%;
  background: white;
  margin-left: -200px;
  position: absolute;
  top: 200px;
  left: 50%;
  padding: 40px;
`;

const circleSymbolStyle = css`
  height: 100px;
  width: 100px;
  border-radius: 100px;
  text-align: center;
  margin: 0 auto;
  line-height: 100px;
  font-size: 4rem;
  font-weight: bold;
  border-width: 5px;
  border-style: solid;
`;

const StRedCircleSymbol = styled.div`
  ${circleSymbolStyle}
  color: ${colors.highlight};
  border-color: ${colors.highlight};
`;

const StGreenCircleSymbol = styled.div`
  ${circleSymbolStyle}
  color: green;
  border-color: green;
`;

const StBoldMessage = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

const StDescription = styled.p`
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const Modal = ({ message, buttonText, clickHandler, type }) => {
  const keypressHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      clickHandlerAdv(e);
    }
  };

  const clickHandlerAdv = (e) => {
    window.removeEventListener("keypress", keypressHandler);
    clickHandler(e);
  };

  window.addEventListener("keypress", keypressHandler);

  return (
    <StBackground>
      <StMessageBox>
        {type === "error" && (
          <>
            <StRedCircleSymbol>X</StRedCircleSymbol>
            <StBoldMessage>Oops!</StBoldMessage>
          </>
        )}

        {type === "success" && (
          <>
            <StGreenCircleSymbol>✓</StGreenCircleSymbol>
            <StBoldMessage>Success!</StBoldMessage>
          </>
        )}
        <StDescription>{message}</StDescription>
        <ClickableButton type="button" clickHandler={clickHandlerAdv}>
          {buttonText}
        </ClickableButton>
      </StMessageBox>
    </StBackground>
  );
};

Modal.propTypes = {
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  message: PropTypes.string,
  buttonText: PropTypes.string,
  clickHandler: PropTypes.func,
};

Modal.defaultProps = {
  message: "",
  buttonText: "OK",
  clickHandler: () => {},
};

export default Modal;
