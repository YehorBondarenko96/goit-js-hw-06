const form = document.querySelector(".login-form");
const formData = {};
function submission(event) {
    event.preventDefault();
    const input = event.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === '' || password === '') {
        alert('All forms must be completed!');
    }

    formData.email = email;
    formData.password = password;
    console.log(formData);
    form.reset();
};
form.addEventListener('submit', submission)