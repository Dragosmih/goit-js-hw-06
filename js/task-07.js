const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
fontSizeControl.addEventListener("input", function () {
  const fontSizeValue = fontSizeControl.value;
  textElement.style.fontSize = `${fontSizeValue}px`;
});
