const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
const items = [];
ingredients.forEach((ingredient) => {
  const liIngredients = document.createElement("li");
  liIngredients.classList.add('item');
  liIngredients.textContent = ingredient;
  items.push(liIngredients);
});

listIngredients.append(...items);
console.log(listIngredients);
  







