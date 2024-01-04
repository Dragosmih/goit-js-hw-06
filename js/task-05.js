const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
nameInput.addEventListener("input", function () {
  const inputValue = nameInput.value.trim();
  nameOutput.textContent = inputValue !== "" ? inputValue : "Anonymous";
});
