// THE THIS KEYWORD

//1. this in global scope, function, method, event handler, class

// GLOBAL SCOPE

console.log(this);

// global scope me this ki value -> window


// FUNCTION SCOPE

function abc() {
    console.log(this);
}

abc();

// function scope me this ki value -> window


// METHOD

// Ek esa function jo ki obj ke andar ho use method kahte hai.

let obj = {
    name: 'mohit',
    age: 26,
    sayName: function () {
        console.log(this);
    }
}

obj.sayName();

// method me this ki value -> obj

// method ke andar this ki value obj ho jaati hai, matlab method ke andar this hai to wo pure obj ko cover kar lega, jese this.name kar de to hame name ki value mil jaayegi.
// akela this console.log karenge to pura obj aayega console par.

// Agar obj me method ko, function ki jagah Arrow function bana diya to this ab obj ke barabar nahi hoga, this apni value ko loose kar dega or Window ke barabar ho jaayega.

// Arrow function → parent ka this use hota hai, for ex. arrow function ka parent obj bana or obj global scope me likha hua hai or global scope me this ki value window hoti hai.

// let abc = {
//     name: 'mohit',
//     sayName: () => {
//         console.log(this);
//     }
// }


// Obj me method wale function me agar ek or function pass kar diya to again this apni value ko Window show karega, lekin function ke andar Arrow function ko pass karenge to value Obj ke barabar hogi.


// sayName: function () {
//     function def() {
//         console.log(this);  // WINDOW BAN GAYA
//     }
//     def();
// }


// sayName: function () {
//     let def = () => {
//         console.log(this);  // OBJ BAN GAYA
//     }
//     def();
// }





// EVENT HANDLER 

document.querySelector('h1').addEventListener('click', function () {
    console.log(this.style.color = 'red');
})

// this us element ko point karta hai jis par event laga hai
// Yaha this = <h1> element

// Event handler me this = jis element par event laga hai


// CLASS


class Abcd {
    constructor() {
        console.log('hehehe');
        this.a = 12;
    }
}

let val = new Abcd();
// Class me this ki value -> blank obj hoti hai


// Class me this: this newly create hue object ko point karta hai (jo new se bana hai)

// Kya ho raha hai:
// new Abcd() → ek naya object create hota hai
// Constructor run hota hai
// this → us naye object ko point karta hai
// this.a = 12 → object me property add ho gayi

// Final object:
val = {
    a: 12
}

// Class me this = new bana hua object
// new lagaya → this = naya object


// inshort - this ki value

//1. global - window
//2. function - window
//3. method with es5 fnc - object
//4. method with es6 arrow fnc - window
//5. es5 function inside es5 method - window 
//6. arrow function inside es5 method - object
//7. event handler - element
//8. class - blank object



//............................................................//


//2. MANUAL BINDING: BIND, CALL, APPLY

// CALL 

// Function ko call karte time aap this ki value set kar sakte ho → using call()


let device = {
    mobile: 'Oneplus'
};

function aaa() {
    console.log(this.mobile);
}

aaa.call(device);

// function me this ki value global(Window)  hoti hai, ham chahte hai ki this ki value global naa hoke upar wala obj ho jaaye to yaha ham call()  ka use karenge.

// call() me ham arguments bhi de sakte hai kyonki kabhi-kabhi function ko different objects ke saath reuse karna hota hai aur saath me data bhi dena hota hai, for example....

let obj1 = { name: 'mohit' };
let obj2 = { name: 'rahul' };


function introduce(age, city) {
    console.log(this.name, age, city);
}


introduce.call(obj1, 26, 'Raipur'); // mohit 26 Raipur
introduce.call(obj2, 30, 'Delhi');  // rahul 30 Delhi


// Iska fayda ye hua ki ek hi function use hua multiple objects ke liye.


// APPLY

// apply() bhi call() jaisa hi hota hai — this set karta hai aur function ko turant run karta hai Bas difference ye hai ki ham isme sirf 2 hi arguments ko pass kar sakte hai or arguments array me pass hote hain. ye rarely use hota hai.

let obj3 = { name: 'sumit' };

function bbb(age, city) {
    console.log(this.name, age, city);
}

bbb.apply(obj3, [28, 'rajsthan'])


// BIND

// bind() bhi apply or call ki tarah function ka this set karta hai or ye ek naya function return karta hai.

let obj4 = { country: 'india' };

function ccc(state, city) {
    console.log(this.country, state, city);
}

let newFnc = ccc.bind(obj4, 'madhya pradesh', 'indore');
newFnc();


