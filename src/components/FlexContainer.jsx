import React from "react";

function FlexContainer({ element, data }) {
  return <div className="row">{data.map((item) => element(item))}</div>;
}

export default FlexContainer;
