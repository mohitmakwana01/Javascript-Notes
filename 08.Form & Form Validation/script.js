// Reading values from input, textarea, select & Prevent default submission & Inline and JS-based validation

let nm = document.querySelector('#name');

let form = document.querySelector('form');
let hide = document.querySelector('#hide');

form.addEventListener('submit', function (dets) {
    dets.preventDefault();

    if (nm.value.length <= 2) {
        hide.style.display = 'initial'
    }
    else {
        hide.style.display = 'none'
    }
});


// PATTERN ATTRIBUTE VS CUSTOM REGEX 

/* pattern attribute html me use hota hai par ise rarely use karte hai iski jagah custom regex ka use karte hai */

/* Custom regex matlab tum apne rule ke hisaab se ek pattern banate ho jisse text ko check ya match karte ho - jaise sirf number allow karna, email validate karna, etc. */

// CUSTOM REGEX GOOGLE YAA CHATGPT SE LE SAKTE HAI YAAD KARNE KI JAROORAT NAHI HAI

// I want you to give me a regex code to check valid email.
// Create a regex which allows a username.


// Regex ka use practice me karenge