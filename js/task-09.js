const refs = {
  container: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onChangeColor);

function onChangeColor(getRandomHexColor) {
  // console.log("This is onChangeColor");
  console.dir(document.body);
  document.body.style.backgroundColor = "getRandomHexColor()";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
