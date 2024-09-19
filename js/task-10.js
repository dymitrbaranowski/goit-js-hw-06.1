const refs = {
  container: document.querySelector("#controls"),
  boxes: document.querySelector("#boxes"),
};

const genValue = refs.container.firstElementChild;
// console.log(genValue);

genValue.addEventListener("");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
