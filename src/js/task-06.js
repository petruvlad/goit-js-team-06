const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = validationInput.dataset.length;
  const enteredValue = validationInput.value.trim();

  if (enteredValue.length === Number(expectedLength)) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
