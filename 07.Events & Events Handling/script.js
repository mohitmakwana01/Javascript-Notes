//# EVENT BINDING: addEventListener, removeEventListener


// addEventListener

let p = document.querySelector('p');

function dblclick() {
    p.style.color = 'yellow';
}

p.addEventListener('dblclick', dblclick)


// removeEventListener

p.removeEventListener('dblclick', dblclick);


//# COMMON EVENTS: Click, input, change, submit, mouseover, keyup

// click

let click = document.querySelector('#click');

click.addEventListener('click', function () {
    click.style.color = 'blue';
})


// input


let inp = document.querySelector('input');

/* inp.addEventListener('input', function(dets) {
    console.log(dets.data);
}) */

inp.addEventListener('input', function (dets) {
    if (dets.data !== null) {
        console.log(dets.data);
    }
});


// change - change event tab chalta hai jab aapka koi input select yaa textarea mein koi chage ho jaaye.

let sel = document.querySelector('select');

let device = document.querySelector('#device')

sel.addEventListener('change', function (dets) {
    device.textContent = `${dets.target.value} Device Selected`
    device.style.textTransform = 'capitalize'
})


// keydown - iska practiceBySir wale folder me hai.

// submit -  iska practiceBySir wale folder me hai.


// Mouseover - Ye event tab trigger hota hai jab mouse pointer kisi element ke upar enter karta hai.

let abcd = document.querySelector('.abcd');

abcd.addEventListener('mouseover', function () {
    abcd.style.backgroundColor = 'teal';
});


// Mouseout - Ye event tab trigger hota hai jab mouse pointer kisi element se bahar nikalta hai.

abcd.addEventListener('mouseout', function () {
    abcd.style.backgroundColor = 'cornflowerblue'
});


// Mousemove - iska practiceBySir wale folder me hai.


//.........................................................................//


// EVENT OBJECT: TARGET, TYPE, PREVENTDEFAULT


abcd.addEventListener('click', function (dets) {
    console.log(dets);
});

// yaha jo details accept hoti hai function me use hi event object kahte hai. yaha dets ki jagah 'e' yaa 'evt' bhi likh dete hai.


// TARGET

// jab bhi hamara eventListener chalta hai to jo event object milta hai console par usme hi target naam ki field hoti hai, target wahi field hoti hai jis par eventListener chalta hai.


// TYPE

// ham jo bhi eventListener lagate hai, event obj me hame uska type mil jata hai, upar wale case me 'click' eventListener milega.


// PREVENTDEFAULT()

// iska mainly form me use hota hai, ye form ko submit hone par page reload hone se rokta hai.
// dets.preventdefault();


//.............................................//


// Event Bubbling And Capturing - ye sab new index file me -> index1.html