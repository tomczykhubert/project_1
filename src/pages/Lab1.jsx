import React from "react";
import { data } from "../data/module-data.js";
import PersonProfile from "../components/PersonProfile.jsx";

function Lab1() {
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  let shuffledData = shuffle(data);
  return (
    <div className="row px-5">
      {shuffledData.map((element) => (
        <div className="col-4">
          <div className="mb-4">
            <PersonProfile
              key={element.id}
              name={element.name}
              dateOfBirth={element.dateOfBirth}
              eyesColor={element.eyesColor}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Lab1;
