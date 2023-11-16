import "./index.scss";
import logoImg from "./images/logo.png";

const userName: string = "World";
const h1: HTMLHeadingElement = document.createElement("h1");
const textNode: Text = document.createTextNode(`Hello ${userName}`);
h1.appendChild(textNode);
document.getElementById("textContainer")?.appendChild(h1);

const img: HTMLImageElement = document.createElement("img");
img.src = logoImg;
document.getElementById("imageContainer")?.appendChild(img);
