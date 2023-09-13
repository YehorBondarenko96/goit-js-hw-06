const form = document.querySelector('#validation-input');
const numberCharacters = document.querySelector('input.data-length');
const comparison = () => {
    if (form.value.length === Number(form.getAttribute('data-length'))) {
        form.classList.contains('invalid')?form.classList.replace('invalid', 'valid'):form.classList.add('valid');
    } else {
        form.classList.contains('valid')?form.classList.replace('valid', 'invalid'):form.classList.add('invalid');
    }
};

form.addEventListener("blur", comparison);