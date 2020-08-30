import React from "react";
import styled from "@emotion/styled/macro";
import { dimensions } from "../util/globalStyles";

const StHeader = styled.header`
  height: ${dimensions.header.height + "px"};
  box-shadow: 0 0 10px hsla(0, 0%, 60%, 0.5);
  position: fixed;
  width: 100%;
  background: white;
`;

const StLogo = styled.img`
  margin: 10px 0 0 25px;
`;

function Header() {
  return (
    <StHeader>
      <StLogo src="logo.svg" height="28px" alt="ollie logo" />
    </StHeader>
  );
}

export default Header;
