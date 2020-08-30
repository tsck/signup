import React from "react";
import styled from "@emotion/styled/macro";
import Header from "./Header";
import ColumnGrid from "../common/ColumnGrid";
import SignupForm from "./SignupForm";
import breakpoints from "../util/breakpoints";

const StPlaceholderImg = styled.img`
  width: 100%;
  @media (max-width: ${breakpoints[0]}px) {
    display: block;
    max-width: 600px;
    margin: 0 auto 20px;
  }
`;

function App() {
  return (
    <>
      <Header />
      <ColumnGrid maxNumOfCols="2" minNumOfCols="1" breakpoint={breakpoints[0]}>
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
