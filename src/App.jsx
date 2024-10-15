import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { data } from "./module-data.js";
import PersonProfile from "./PersonProfile.jsx";

function App() {
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
    <div className="row">
      {shuffledData.map((element) => (
        <PersonProfile
          key={element.id}
          name={element.name}
          dateOfBirth={element.dateOfBirth}
          eyesColor={element.eyesColor}
        />
      ))}
    </div>
  );
}

export default App;
