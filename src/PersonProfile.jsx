import React from "react";

function PersonProfile({ name, dateOfBirth, eyesColor }) {
  return (
    <div className="col-4">
      <div className="card mb-4">
        <h3>{name}</h3>
        <p>Date of birth: {dateOfBirth}</p>
        <p>Eye color: {eyesColor}</p>
      </div>
    </div>
  );
}

export default PersonProfile;
