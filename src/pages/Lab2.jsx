import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PersonProfile from "../components/PersonProfile.jsx";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import useData from "../data/functions/useData";

function Lab2() {
  const data = useData();
  const { id } = useParams();
  const navigate = useNavigate();
  let person = data.find((item) => item.id == id);
  let newId = null;

  return (
    <div className="col-4 m-auto pt-5">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="number"
          onChange={(e) => {
            newId = e.target.value;
          }}
          name="id"
        />
        <Button
          onClick={(e) => {
            if (newId == null || newId == "") {
              alert("No id given for search!");
            } else {
              navigate(`/lab2/${newId}`);
            }
          }}
        >
          Find person
        </Button>
      </div>
      {person ? (
        <PersonProfile key={person.id} person={person} />
      ) : (
        <div>No person found for given id!</div>
      )}
    </div>
  );
}

export default Lab2;
