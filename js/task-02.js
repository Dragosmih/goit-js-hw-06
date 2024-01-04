const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  const ingredientsList = document.getElementById('ingredients');
  ingredients.forEach((ingredient) => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    ingredientsList.appendChild(listItem);
  });