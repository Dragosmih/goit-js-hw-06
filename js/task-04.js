let counterValue = 0;
const valueSpan = document.getElementById("value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
decrementButton.addEventListener("click", function () {
  counterValue--;
  valueSpan.textContent = counterValue;
});
incrementButton.addEventListener("click", function () {
  counterValue++;
  valueSpan.textContent = counterValue;
});
