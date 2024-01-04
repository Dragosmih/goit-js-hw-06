function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  const firstBoxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const boxSize = firstBoxSize + i * 10;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createBtn.addEventListener("click", () => {
  const amount = parseInt(controls.querySelector("input").value);
  if (amount > 0) {
    createBoxes(amount);
  }
});
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
