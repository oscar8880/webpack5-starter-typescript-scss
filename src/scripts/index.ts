import "../styles/style.scss";
import Cat from "../assets/cat.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = "Hello, I was added to the page with Javascript";

  element.classList.add("blue");

  const catImage = new Image();
  catImage.src = Cat;
  element.appendChild(catImage);

  return element;
}

document.body.appendChild(component());
