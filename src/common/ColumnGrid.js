import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled/macro";

function ColumnGrid({ children, maxNumOfCols, minNumOfCols, breakpoint }) {
  const maxNumOfColsInt = parseInt(maxNumOfCols);
  const minNumOfColsInt = parseInt(minNumOfCols);
  const maxColumnWidth = `${(1 / maxNumOfColsInt) * 100}%`;
  const minColumnWidth = `${(1 / minNumOfCols) * 100}%`;
  let maxGridTemplateColumns = "";
  let minGridTemplateColumns = "";

  for (let i = 0; i < maxNumOfColsInt; i++) {
    maxGridTemplateColumns += `${maxColumnWidth} `;
  }

  for (let i = 0; i < minNumOfColsInt; i++) {
    minGridTemplateColumns += `${minColumnWidth} `;
  }

  const StContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 100px 0;
    display: grid;
    grid-template-columns: ${maxGridTemplateColumns};
    @media (max-width: ${breakpoint}px) {
      grid-template-columns: ${minGridTemplateColumns};
    }
  `;

  return (
    <StContainer>
      {[...Array(maxNumOfColsInt)].map((elem, i) => (
        <div key={i}>{children[i]}</div>
      ))}
    </StContainer>
  );
}

ColumnGrid.propTypes = {
  children: PropTypes.array,
  maxNumOfCols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minNumOfCols: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  breakpoint: PropTypes.number,
};

ColumnGrid.defaultProps = {
  maxNumOfCols: 2,
  minNumOfCols: 1,
  breakpoint: 0,
};

export default ColumnGrid;
