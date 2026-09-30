// keydown 

let h1 = document.querySelector('h1');

window.addEventListener('keydown', function(dets) {
    // console.log(dets.key);
    // h1.textContent = dets.key
    if(dets.key === " ") {
        h1.textContent = 'SPC'
    }
    else {
        h1.textContent = dets.key;
    }
});