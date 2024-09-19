const refs = {
  inputNum: document.querySelector("#controls>input"),
  createrBtn: document.querySelector("button[data-create]"),
  destroyerBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const elementsToAdd = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    elementsToAdd.push(div);
  }
  return elementsToAdd;
};

refs.createrBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(refs.inputNum.value);
  boxes.append(...boxesToAdd);
});

const destroyBoxes = () => {
  boxes.innerHTML = "";
};

console.log(refs.inputNum.value);

refs.destroyerBtn.addEventListener("click", () => {
  destroyBoxes.call();
});
