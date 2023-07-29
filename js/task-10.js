function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');
const input = document.querySelector('input');

buttonCreate.addEventListener('click', createBoxes);


let step = 30;

function createBoxes(amount) {
   step += 10;
  let box = document.createElement('div');
  divBoxes.appendChild(box);
  box.style.width = `${step}px`;
  box.style.height = `${step}px`;
  
  box.style.backgroundColor = getRandomHexColor();
  amount = Number(input.value);
    
}


