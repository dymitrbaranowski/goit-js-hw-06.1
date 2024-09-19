const refs = {
  container: document.querySelector("#controls"),
  inputNum: document.querySelector("#controls>input"),
  createrBtn: document.querySelector("button[data-create]"),
  destroyerBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

// refs.createrBtn.addEventListener("click", createBoxes);
refs.destroyerBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
refs.inputNum.addEventListener("change", onInputAmount);
console.log(refs.inputNum);

function onInputAmount(evt) {
  console.log(evt.target);
  const amount = evt.currentTarget.valueAsNumber;
  // console.log(amount);
  refs.createrBtn.addEventListener("click", createBoxes);
  // createBoxes(amount);
}
// console.log(amount);

function createBoxes(amount) {
  onInputAmount();
  console.log("This is createBoxes");
  console.log(amount);

  const boxesMarkup = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxesMarkup.push(div);
  }

  // console.log(boxesMarkup);

  refs.boxes.append(...boxesMarkup);
}
function destroyBoxes() {
  console.log("This is destroyBoxes");
  // refs.boxes;
}
