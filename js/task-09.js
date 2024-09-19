const refs = {
  // container: document.querySelector(".widget"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

refs.button.addEventListener("click", onChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onChangeColor() {
  // console.log("This is onChangeColor");
  // console.dir(document.body);
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  refs.span.textContent = color;
}
