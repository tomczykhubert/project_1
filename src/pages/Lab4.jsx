import React from "react";
import FlexContainer from "../components/FlexContainer";
import PersonProfile from "../components/PersonProfile.jsx";
import { useContext } from "react";
import AppContext from "../data/AppContext.jsx";

function Lab4() {
  const context = useContext(AppContext);
  const items = context.items;

  const Item = (person) => (
    <PersonProfile key={person.id} person={person} columns="col-4" />
  );
  return (
    <>
      <FlexContainer element={Item} data={items} />
    </>
  );
}

export default Lab4;
