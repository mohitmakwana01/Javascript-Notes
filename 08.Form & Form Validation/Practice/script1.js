let form = document.querySelector('form');

let email = document.querySelector('#email');
let password = document.querySelector('#password');




form.addEventListener('submit', function (dets) {
    dets.preventDefault();

    document.querySelector('#emailError').style.display = 'none';
    document.querySelector('#passError').style.display = 'none';


    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passAns = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailAns) {
        document.querySelector('#emailError').style.display = 'initial';
        isValid = false;
    }

    if (!passAns) {
        document.querySelector('#passError').style.display = 'initial';
        isValid = false;
    }

    if (isValid) {
        document.querySelector('#resultMsg').style.display = 'block';
    }
});