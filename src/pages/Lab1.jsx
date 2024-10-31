import React from "react";
import PersonProfile from "../components/PersonProfile.jsx";
import { useContext } from "react";
import AppContext from "../data/AppContext.jsx";

function Lab1() {
  const context = useContext(AppContext);
  const data = context.items;
  return (
    <div className="row px-5">
      {data.map((element) => (
        <PersonProfile key={element.id} person={element} columns="col-4" />
      ))}
    </div>
  );
}

export default Lab1;
