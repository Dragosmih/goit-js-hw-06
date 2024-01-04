const validationInput = document.getElementById("validation-input");
validationInput.addEventListener("blur", function () {
  const expectedLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );
  const currentLength = validationInput.value.length;
  if (currentLength === expectedLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
