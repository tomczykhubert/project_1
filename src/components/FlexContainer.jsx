import React from "react";
import AppReducer from "../data/AppReducer";
import { useReducer } from "react";

function FlexContainer({ element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);
  return (
    <div className="row">{items.map((item) => element(item, dispatch))}</div>
  );
}

export default FlexContainer;
