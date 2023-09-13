const counterValue = document.querySelector('#value');
const increasesButton = document.querySelector('[data-action="increment"]');
const decreasesButton = document.querySelector('[data-action="decrement"]');
let value = 0;
counterValue.textContent = value;
const increasesValue = () => {
    value += 1;
    counterValue.textContent = value;
};
const decreasesValue = () => {
    value -= 1;
    counterValue.textContent = value;
};
increasesButton.addEventListener("click", increasesValue);
decreasesButton.addEventListener("click", decreasesValue);
