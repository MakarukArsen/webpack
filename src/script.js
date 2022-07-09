import "./style.scss";

import getNumberToPow from "./HW-functions/script.js";
import {students, getPairs} from "./HW-arrays/script.js";
import getAverage from "./HW-arrays2/script.js";
import {ukraine, getMiddleTaxes} from "./HW-functional-programing/script.js";
import studentInfo from "./HW-proto/script.js";
import getRandomColor from "./HW-DOM/script.js";
import sound from './HW-events/audio.mp3';
import playSound from "./HW-events/script.js";
import getRandomChinese from "./HW-async/script.js";
import getPlanets from "./HW-server-work/script.js";
import generator from "./HW-generators/script.js";

import homer from "/src/images/homer.png";


const homerElement = document.createElement("img");
document.body.append(homerElement);
homerElement.setAttribute('src', homer);

const button = document.createElement("button");
button.innerHTML = "click me";
button.classList.add("btn");
document.body.append(button);
button.addEventListener("click", () => {
    playSound(sound);
})   

console.log(`HW functions: ${getNumberToPow(3, 3)}`);
console.log(`HW arrays: ${getPairs(students)}`);
console.log(`HW arrays2: ${getAverage(3, 2, 7, 2, 2, 2, 7, 4, 9, 1)}`);
console.log(`HW functional-programing: ${getMiddleTaxes.call(ukraine)}`);
console.log(`HW prototypes: ${studentInfo.getInfo()}`);
console.log(`HW DOM: ${getRandomColor()}`);
console.log('HW-events: press the button');
console.log(`HW async: Символи виводяться нижче ${getRandomChinese(5)}`);
console.log(`HW server work: через проміс також виводить нижче ${getPlanets(1)}`);
console.log(`HW-generators: ${generator.next().value}`);
console.log(`HW-generators: ${generator.next().value}`);
console.log(`HW-generators: ${generator.next().value}`);