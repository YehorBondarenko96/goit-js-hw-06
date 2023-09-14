function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const boxes = document.querySelector('#boxes');
const create = document.querySelector('[data-create]');
const destroy = document.querySelector('[data-destroy]');
const dataInput = controls.querySelector('input');


function createBoxers() {
  const amount = parseInt(dataInput.value);
    for (let i = 1; i <= amount; i++) {
      const box = document.createElement('div');
      if (i === 1) {
        box.style.width = '30px';
        } else{
        box.style.width = () => {
          box.style.width += '10px';
        }
      };
      box.style.height = "30px";
      box.style.backgroundColor = getRandomHexColor();
      boxes.append(box);
  }
}

const destroyBoxers = () => {
  boxes.innerHTML = '';
}

create.addEventListener('click', createBoxers);
destroy.addEventListener('click', destroyBoxers);