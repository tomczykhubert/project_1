#!/usr/bin/env node
const fs = require("fs");

const count = Number(process.argv[2]);

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
    .toISOString()
    .split("T")[0];
}

function readProps(path) {
  return fs
    .readFileSync(path, "utf8")
    .split("\n")
    .map((s) => s.trim())
    .filter((n) => n.length != 0);
}
function getRandomProp(props) {
  return props[~~((Math.random() * props.length) / 1)];
}

function generateContent(names, eyesColors) {
  let content = "export const data = [";

  for (let i = 0; i < count; i++) {
    content += `
    {
        id: ${i + 1}, 
        dateOfBirth: "${getRandomDate(new Date("1980-01-01"), new Date())}",
        name: "${getRandomProp(names)}",
        eyesColor: "${getRandomProp(eyesColors)}",
    },`;
  }

  content += "];";

  return content;
}

let names = readProps("src/data/names.txt");
let eyesColors = readProps("src/data/eyes-colors.txt");

fs.writeFile(
  "src/data/module-data.js",
  generateContent(names, eyesColors),
  (err) => {
    if (err) {
      console.error(err);
    }
    console.log("module-data.js generated");
  }
);
