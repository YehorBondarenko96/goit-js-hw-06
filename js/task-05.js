const formText = document.querySelector('#name-input');
const massageText = document.querySelector('#name-output');
const copyName = (event) => {
    if (formText.value === "") {
        
        massageText.textContent = 'Anonymous';
    } else {
        massageText.textContent = event.currentTarget.value;
    }
};
    formText.addEventListener("input", copyName);

