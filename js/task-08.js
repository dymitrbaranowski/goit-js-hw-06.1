const refs = {
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  if (!mail || !password) {
    alert("Must be fullfiled All filds");
  } else {
    const data = {
      mail,
      password,
    };

    // const form = evt.currentTarget;
    // const formData = new FormData(form);

    // const data = {};
    // for (const keyValue of formData.entries()) {
    //   data[keyValue[0]] = keyValue[1];
    // }

    console.log(data);
    refs.form.reset();
  }
}
