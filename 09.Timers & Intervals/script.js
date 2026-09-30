// SetTimeout & ClearTimeout

let tm = setTimeout(function () {
    console.log("hello!");
}, 3000);

clearTimeout(tm);


// setInterval & clearInterval

let a = setInterval(function () {
    console.log('hey!');
}, 2000);

clearInterval(a);


// example

// countdown 10 to 0

let count = 10;

let timer = setInterval(function () {
    if (count >= 0) {
        console.log(count);
        count--;
    }
    else{
        clearInterval(timer);
    }
}, 1000);


// else me clearInterval lagana zaroori hai, warna interval kabhi rukega nahi backgruond me chalta rahega.


let h1 = document.querySelector('h1');

window.addEventListener('click', function() {

    let count = 10;

    let timer = setInterval(function(){
        if(count >= 0) {
            h1.textContent = count--;
        }
        else{
            clearInterval(timer);
        } 
    }, 1000)
})