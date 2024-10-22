import React from "react";
import FlexContainer from "../components/FlexContainer";
import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx";

function Lab3() {
  const Item = (person, dispatch) => (
    <PersonProfile
      key={person.id}
      person={person}
      columns="col-4"
      dispatch={dispatch}
    />
  );
  return <FlexContainer element={Item} data={data} />;
}

export default Lab3;
