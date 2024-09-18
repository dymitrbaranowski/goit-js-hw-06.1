const refs = {
  input: document.querySelector("#name-input"),
  text: document.querySelector("#name-output"),
};

// console.log(refs.input);
// console.log(refs.text);

refs.input.addEventListener("input", onInputChange);

function onInputChange(evt) {
  //   console.log(evt.currentTarget.value);
  refs.text.textContent = evt.currentTarget.value;
  if (!evt.currentTarget.value) {
    refs.text.textContent = "Anonymous";
  }
}
