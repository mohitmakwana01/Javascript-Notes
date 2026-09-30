let form = document.querySelector('#form');

let email = document.querySelector('#email');
let password = document.querySelector('#password');

let emailError = document.querySelector('#emailError');
let passError = document.querySelector('#passError');

let resultMsg = document.querySelector('#resultMsg');


form.addEventListener('submit', function (dets) {
    dets.preventDefault()

    emailError.style.display = "none";
    passError.style.display = "none";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


    let emailCheck = emailRegex.test(email.value);
    let passwordCheck = passwordRegex.test(password.value);

    let = isValid = true;

    if (!emailCheck) {
        emailError.style.display = 'initial'
        isValid = false
    }

    if (!passwordCheck) {
        passError.style.display = 'initial'
        isValid = false
    }

    if (isValid) {
        resultMsg.style.display = 'block';
    }

});