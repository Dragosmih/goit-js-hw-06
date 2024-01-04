const categoriesList = document.getElementById("ul#categories");
const categoryItems = categoriesList.getElementsByClassName("item");
console.log("Number of categories:", categoryItems.length);
for (const item of categoryItems) {
  const categoryName = item.querySelector("h2").textContent;
  const elementsList = item.querySelectorAll("ul > li");
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsList.length}`);
}
