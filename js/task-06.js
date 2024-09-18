const input = document.querySelector("#validation-input");

// console.log(input);
input.addEventListener("blur", onInputBlur);

function onInputBlur(evt) {
  //   console.log(evt.currentTarget.value);
  if (evt.currentTarget.value.length == input.dataset.length) {
    // console.log(input.dataset);
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
