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
  const item = `<li class = "item">${ingredient}</li>`;
  items.push(item);
});
listIngredients.insertAdjacentHTML("afterbegin", items.join(''));
console.log(listIngredients);
