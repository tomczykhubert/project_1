import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import RatingBar from "./RatingBar";
import { useContext } from "react";
import AppContext from "../data/AppContext";
import { Link } from "react-router-dom";

function PersonProfile({ person, columns }) {
  const buttonClass = "btn btn-primary mx-1";
  const context = useContext(AppContext);
  const dispatch = context.dispatch;

  return (
    <div className={columns}>
      <Card className="mx-3 my-4">
        <h3>{person.name}</h3>
        <p>Date of birth: {person.dateOfBirth}</p>
        <p>Eye color: {person.eyesColor}</p>
        <p>Rating: {person.rating}</p>
        <RatingBar rate={person.rating} />
        <div className="d-flex justify-content-center">
          <Link
            className={buttonClass}
            to="/lab4/edit"
            state={{ id: person.id }}
          >
            Edit
          </Link>
          <button
            className={buttonClass}
            onClick={() => {
              dispatch({
                type: "delete",
                id: person.id,
              });
            }}
          >
            Delete
          </button>
          <button
            className={buttonClass}
            onClick={() => {
              dispatch({
                type: "rate",
                rating: person.rating,
                id: person.id,
              });
            }}
          >
            Rate
          </button>
        </div>
      </Card>
    </div>
  );
}

export default PersonProfile;
