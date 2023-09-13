function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const background = document.querySelector('.widget');
const button = document.querySelector('.change-color');
const codColor = document.querySelector('.color');
button.addEventListener("click", () => {
  background.style.backgroundColor = getRandomHexColor();
  codColor.textContent = getRandomHexColor();
})


