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
let size = 0; 

function createBoxes() {
  const amount = parseInt(dataInput.value);
  let box = boxes.querySelector('div');
  const conteiner = [];

    for (let i = 1; i <= amount; i++) {
      
      if (!box) {
        size = 30;
      } else {
        size += 10;
      };
      box = document.createElement('div');
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      box.style.backgroundColor = getRandomHexColor();
      conteiner.push(box);
    }
  boxes.append(...conteiner);
  
}

const destroyBoxes = () => {
  boxes.innerHTML = '';
  size = 0;
}

create.addEventListener('click', createBoxes);
destroy.addEventListener('click', destroyBoxes);