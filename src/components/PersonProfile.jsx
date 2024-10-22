import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import RatingBar from "./RatingBar";

function PersonProfile({ person, columns, dispatch }) {
  const buttonClass = "btn btn-primary mx-1";

  return (
    <div className={columns}>
      <Card className="mx-3 my-4">
        <h3>{name}</h3>
        <p>Date of birth: {person.dateOfBirth}</p>
        <p>Eye color: {person.eyesColor}</p>
        <p>Rating: {person.rating}</p>
        <RatingBar rate={person.rating} />
        <div className="d-flex justify-content-center">
          <button
            className={buttonClass}
            onClick={() => {
              dispatch({
                type: "edit",
                id: person.id,
              });
            }}
          >
            Edit
          </button>
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
