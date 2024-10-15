import React from "react";

function PersonProfile({ name, dateOfBirth, eyesColor }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Date of birth: {dateOfBirth}</p>
      <p>Eye color: {eyesColor}</p>
    </div>
  );
}

export default PersonProfile;
