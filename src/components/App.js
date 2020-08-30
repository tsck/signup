import React from "react";
import styled from "@emotion/styled/macro";
import Header from "./Header";
import ColumnGrid from "./ColumnGrid";
import SignupForm from "./SignupForm";

const StPlaceholderImg = styled.img`
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    max-width: 600px;
    margin: 0 auto 20px;
  }
`;

function App() {
  return (
    <>
      <Header />
      <ColumnGrid>
        <StPlaceholderImg
          src="https://via.placeholder.com/600"
          alt="signup image"
        />
        <SignupForm />
      </ColumnGrid>
    </>
  );
}

export default App;
