const container = document.querySelector("#counter");
const value = document.querySelector("#value");

// console.log(container.children);

let counterValue = 0;
const decrementBtn = container.firstElementChild;
// console.log(decrementBtn);
const incrementBtn = container.lastElementChild;
// console.log(incrementBtn);

//Var-1--------------------------------------

decrementBtn.addEventListener("click", onDecrement);
incrementBtn.addEventListener("click", onIncrement);

function onDecrement() {
  console.log("This is onDecrement");
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrement() {
  console.log("This is onIncrement");
  counterValue += 1;
  value.textContent = counterValue;
}

//Var-2----------------------------------------

// decrementBtn.addEventListener("click", handlerCounter);
// incrementBtn.addEventListener("click", handlerCounter);

// function handlerCounter(evt) {
//   value.textContent = counterValue +=
//     evt.currentTarget.dataset.action === "increment" ? 1 : -1;
// }
