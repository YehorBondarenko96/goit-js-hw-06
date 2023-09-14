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

function createBoxers() {
  const amount = parseInt(dataInput.value);
  let box = boxes.querySelector('div');

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
      boxes.append(box);
    }
  
}

const destroyBoxers = () => {
  boxes.innerHTML = '';
  size = 0;
}

create.addEventListener('click', createBoxers);
destroy.addEventListener('click', destroyBoxers);