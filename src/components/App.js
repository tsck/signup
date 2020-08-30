import React from "react";
import styled from "@emotion/styled/macro";
import Header from "./Header";
import ColumnGrid from "../common/ColumnGrid";
import SignupForm from "./SignupForm";
import breakpoints from "../util/breakpoints";
import { dimensions } from "../util/globalStyles";

const StPlaceholderImg = styled.img`
  width: 100%;
  @media (max-width: ${breakpoints[0]}px) {
    display: block;
    max-width: ${dimensions.mobile.content.maxWidth + "px"};
    margin: 0 auto 40px;
  }
`;

const StContent = styled.div`
  padding-top: ${dimensions.header.height * 2 + "px"};
  padding-bottom: 100px;
`;

function App() {
  return (
    <>
      <Header />
      <StContent>
        <ColumnGrid
          maxNumOfCols="2"
          minNumOfCols="1"
          breakpoint={breakpoints[0]}
        >
          <StPlaceholderImg
            src="https://via.placeholder.com/600"
            alt="signup image"
          />
          <SignupForm />
        </ColumnGrid>
      </StContent>
    </>
  );
}

export default App;
