const volume = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const fontSize = () => {
    text.style.fontSize = volume.value + 'px';
};




volume.addEventListener("input", fontSize);