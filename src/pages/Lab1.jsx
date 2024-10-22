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
        <PersonProfile key={element.id} person={element} columns="col-4" />
      ))}
    </div>
  );
}

export default Lab1;
