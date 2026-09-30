// Mousemove - Ye event tab trigger hota hai jab mouse pointer kisi element ke upar ya windows screen par move karta hai. Mouse thoda sa bhi move hota hai to ye event baar-baar fire hota rehta hai.

let move = document.querySelector('.move');

window.addEventListener('mousemove', function(dets) {
    // console.log(dets);
    // console.log(dets.clientX, dets.clientY);
    move.style.top = dets.clientY + 'px';
    move.style.left = dets.clientX + 'px';
});