import React from "react";
import styled from "@emotion/styled/macro";

const StHeader = styled.header`
  height: 48px;
  box-shadow: 0 0 10px hsla(0, 0%, 60%, 0.5);
  text-align: center;
  position: fixed;
  width: 100%;
  background: white;
`;

const StLogo = styled.img`
  margin-top: 10px;
`;

function Header() {
  return (
    <StHeader>
      <StLogo src="logo.svg" height="28px" alt="ollie logo" />
    </StHeader>
  );
}

export default Header;
