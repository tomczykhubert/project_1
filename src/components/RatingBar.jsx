import React from "react";

function RatingBar({ rate }) {
  let starsArray = [];
  for (let i = 0; i < 10; i++) {
    starsArray.push(
      i < rate ? <span key={i}>&#9733;</span> : <span key={i}>&#9734;</span>
    );
  }
  return <div>{starsArray.map((element) => element)}</div>;
}

export default RatingBar;
