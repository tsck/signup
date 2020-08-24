import React from "react";
import styled from "@emotion/styled/macro";
import SignupForm from "./components/SignupForm";

const StHeader = styled.header`
  height: 48px;
  padding: 0 25px;
  box-shadow: 0 0 10px hsla(0, 0%, 60%, 0.5);
  text-align: center;
  position: fixed;
  width: 100%;
  background: white;
`;

const StLogo = styled.img`
  margin-top: 10px;
`;

const StPlaceholderImg = styled.img`
  float: left;
  width: 50%;
`;

const StMain = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
`;

function App() {
  return (
    <>
      <StHeader>
        <StLogo src="logo.svg" height="28px" alt="ollie logo" />
      </StHeader>
      <StMain>
        <StPlaceholderImg
          src="https://via.placeholder.com/600"
          alt="signup placeholder"
        />
        <SignupForm />
      </StMain>
    </>
  );
}

export default App;
