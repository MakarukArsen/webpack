import "./style.scss"
import homer from "/src/images/homer.png"
const homerElement = document.createElement("img");
document.body.append(homerElement)
homerElement.setAttribute('src', homer)
const header = document.querySelector(".header");
header.style.backgroundColor = "black"