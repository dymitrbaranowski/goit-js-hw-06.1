const refs = {
  form: document.querySelector(".login-form"),
};

// console.log(refs.form);

refs.form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);

  //   console.log(formData);
  formData.forEach((value, name) => {
    return (
      console.log("onFormSubmit -> name", name),
      console.log("onFormSubmit -> value", value)
    );
  });

  if (formData.values) {
    return alert("All fields must be filled.");
  } else {
    const formDataResult = {
      value,
      value,
    };
    console.log(formDataResult);
  }
  //   console.dir(evt.currentTarget.elements.email.value);
  //   console.dir(evt.currentTarget.elements.password.value);

  //   const formElements = evt.currentTarget.elements;

  //   console.log(formElements);

  //   const mail = formElements.email.value;
  //   const password = formElements.password.value;

  //   const formData = {
  //     mail,
  //     password,
  //   };

  //   console.log(formData);
}
