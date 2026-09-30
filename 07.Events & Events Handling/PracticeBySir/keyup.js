// keyup

// Ye event tab trigger hota hai jab key chhod di jaati hai.
// Key chhodne par sirf ek baar fire hota hai.

let h1 = document.querySelector('h1')

window.addEventListener('keyup', function (dets) {
    // console.log(dets.key);
    if (dets.key === ' ') {
        h1.textContent = 'SPC'
    }
    else {
        h1.textContent = dets.key;
    }
});