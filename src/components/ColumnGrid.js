import React from "react";
import styled from "@emotion/styled/macro";

const StMain = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 0;
  display: grid;
  grid-template-columns: 50% 50%;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

function ColumnGrid(props) {
  return (
    <StMain>
      <div>{props.children[0]}</div>
      <div>{props.children[1]}</div>
    </StMain>
  );
}

export default ColumnGrid;
