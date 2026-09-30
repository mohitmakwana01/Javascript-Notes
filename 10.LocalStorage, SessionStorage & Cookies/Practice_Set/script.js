//agar system ki theme dark hai to website ki theme dark hogi nahi to light hogi par agar ham system ki theme change karenge to ye code nahi chalega , uske liye ham addEventListener ka use karenge jo neeche hai.

function setlightOrdark() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark');
        document.body.classList.remove('light');
    }
    else {
        document.body.classList.add('light');
        document.body.classList.remove('dark');
    }
}

setlightOrdark(); 

//jese hi ham windows ki theme change karenge hamara upar wala function chal jaayega.

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    setlightOrdark();
});


let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
    }
    else {
        document.body.classList.remove('light');
        document.body.classList.add('dark')
    }
});