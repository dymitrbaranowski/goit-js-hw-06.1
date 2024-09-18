const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
// console.log((span.style.fontSize = "24px"));

// console.log(input);
input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  //console.log(evt.currentTarget.value);
  const valueEl = evt.currentTarget.value * 3;
  //   console.log(valueEl);
  span.style.fontSize = `${valueEl}px`;
}
