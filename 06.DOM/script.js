// select elements -> getElementById, getElementByClassName

let one = document.getElementById("one");
console.log(one);
console.dir(one);

let hello = document.getElementsByClassName("hello")
console.log(hello);


// select elements -> querySelector, querySelectorAll

let Aa = document.querySelector("h3")
console.dir(Aa);

let Bb = document.querySelectorAll("h3")
console.dir(Bb);


const box = document.querySelector('#myBox');
console.dir(box);

const item = document.querySelector('.card');
console.dir(item);

const allItems = document.querySelectorAll('.card');
console.dir(allItems);


// TEXT/CONTENT ACCESS: innerText, textContent, innerHTML

// innerHTML - isse html ke tags ko change kar sakte hai uske text sahit.

let New = document.querySelector('#one');

New.innerHTML = '<i>Hello down there!</i>'

console.dir(New);


// innerText - innerText sirf text handle karta hai, matlab text replace ya update, HTML tags ko ignore karta hai.

let first = document.querySelector("h3")

first.innerText = 'FIRSTTTT'
console.log(first);


// textContent - textContent bhi sirf text handle karta hai, but ek chota difference hai innerText se, ye sab text return karta hai, chahe hidden ho ya visible.


let second = document.querySelectorAll('h3')[1];

second.textContent = 'SECONDDD';
console.log(second);


// ATTRIBUTE MANIPULATION: getAttribute, setAttribute, removeAttribute

// getAttribute -> getAttribute attribute ki value read karta hai

let a = document.querySelector('a');
console.log(a.getAttribute('href')); // www.getAttribute.com



// setAttribute -> setAttribute us value ko set ya update karta hai.

let b = document.querySelectorAll('a');

b[1].setAttribute("href", 'https://www.google.com');
b[1].setAttribute('target', '_blank')

console.dir(b[1]);


// removeAttribute -> 

let c = document.querySelectorAll('a');

c[2].removeAttribute('href'); // ancher tag me se href remove ho jayega


// DYNAMIC DOM MANIPULATION : createElement, appendChild, removeChild, prepend


//createElement -> createElement naya HTML element banane ke liye use hota hai.
// NOTE:- createElement sirf element banata hai, page par dikhane ke liye append/prepend use karna padta hai.

let p = document.createElement('p');

p.textContent = 'bharat ka khazana';
console.dir(p);

// append, prepend -> appendChild aur prepend ka use element ko add karne ke liye hota hai.
// -> prepend - start me add karta hai
// -> appendChild/append - end me add karta hai.


document.body.prepend(p);
// document.body.append(p);
console.log(p);


// removeChild/remove() -> removeChild parent element ke andar se kisi child element ko delete karta hai. sirf remove() bhi kaam karta hai — aur aaj-kal yehi zyada use hota hai. remove() direct element par lagta hai, Parent ki zaroorat nahi.

let h1 = document.querySelector('.data');
h1.remove();


// STYLE UPDATES VIA .STYLE AND CLASSLIST (ADD, REMOVE, TOGGLE) 

//.style

let hey = document.querySelector('#hey');

hey.style.color = 'red';
hey.style.backgroundColor = '#fff';
hey.style.textTransform = 'capitalize';


// classList

//add - adding class

let h4 = document.querySelector('h4');

h4.classList.add('hulu');
console.dir(h4);

//remove - remove class

let h5 = document.querySelector('h5');

h5.classList.remove('hulu');


//toggle - agar class element par lagi hai to hata dega or class element par nahi lagi hai to laga dega.

let h6 = document.querySelector('h6');

h6.classList.toggle('hulu'); 