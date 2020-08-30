import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";
import { colors } from "../util/globalStyles";

const StButton = styled.button`
  background: ${colors.highlight};
  color: white;
  border: none;
  padding: 12px 0;
  width: 100%;
  border-radius: 100em;
  font-size: 0.8rem;
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

StButton.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default StButton;
