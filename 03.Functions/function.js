//functions.....

//type - 1  // [function statement / function declaration]

function hny() {
    console.log("Happy New Year");
}

hny();

//type - 2   // [function expression]

let abcd = function () {
    console.log("ABCD");
}

abcd();

//type - 3  // [arrow function]

let fnc = () => {
    console.log('hihiihihihihihi');
}

fnc();

//...........//

// FUNCTION WITH PARAMETERS

function mult(v1, v2) {
    x = (v1 * v2)
    return x;
}

console.log(mult(3, 3));

// (v1, v2 - parameters)
// (3, 3 arguments)


//...................//

// DEFAULT PARAMETERS

function add(v1 = 0, v2 = 0) {
    console.log(v1 + v2);
}

add(3, 4);

// parameters ki value ko shuru me hi define kar sakte he ise default parameters kahte he.


//REST PARAMETERS

// jab argument kai saare ho to hame utne hi parameter banane padenge, issey bachne ke liye rest ka use karte hai. agar (...) function ke parameters me lage to wo rest operators hai or agar wo arrays and objects mein lage to wo spread operators hai.


function abc(...val) {
    console.log(val);
}

abc(1, 2, 3, 4, 5, 6, 7, 8);

//

function def(a, b, c, ...val) {
    console.log(a, b, c, val);
}

def(1, 2, 3, 4, 5, 6, 7, 8)


//RETURN VALUES AND EARLY RETURNS


function hello(v) {
    return 13 + v;
}

let val = hello(2)
console.log(val);


//FIRST CLASS FUNCTIONS

// inn functions ko values ki tarah treat kiya jaa sakta hai.

function aaa(val) {
    val();
}

aaa(function () {
    console.log('hey!');
});


//HIGHER ORDER FUNCTION

// wo function hota he jo ki return kare function ya fir accept kare ek function apne parameter me.


function a1(val) {    // this is higher order function...

}

a1(function () {

})

// Yaha parameter me function accept kar raha he, upar wale function ko higher order function kahte he.

//

function abcde() {
    return function () {
        console.log('hehehehehehehe');
    }
}

abcde()();


// PURE VS IMPURE FUNCTIONS

// Aisa function jo ki bahar ki value ko naa badle wo hai pure function.


function ab() {
    console.log('haha');
}


// Aisa function jo baahar ki value ko badal de wo hai impure function.

let a = 12;

function ac() {
    a++;
}


// CLOSURES AND LEXICAL SCOPING      //IMP//


// Closures -> ek funciton jo return kare ek or function or return hone wala function hamesha use karega parent function ka koi variable.

function acd() {
    let a = 12;
    return function () {
        console.log(a);
    }
}


// Lexical Scoping -> jo function jaha likha gaya hai, wo apne parent function ke variables ko use kar sakta hai.


function one() {
    let a = 11;
    function two() {
        let b = 12;
        function three() {
            let c = 13;
        };
    };
};


// e.i.


function One() {
    let a = 11;
    function Two() {
        let b = 12;
        function Three() {
            let c = 13;
            console.log(a, b, c);
        }
        Three();
    }
    Two();
}
One();


/* Yahan three() ne a aur b ko access kiya,
kyunki wo dono uske lexical (outer) scope me defined hain.
Lekin agar tum two() ke andar console.log(c) likhoge,
to error aayega, kyunki c uske lexical scope me nahi hai. */



// IIFE (Immediately Invoked Function Expressions)

(function () {
    console.log('hello!');
})();

// EXAMPLE

(function () {
    let message = 'I am private!'
    console.log(message);
})();

// console.log(message);  // Error: message is not defined

// Yaha message sirf IIFE ke andar accessible he, bahar nahi...



// HOISTING DIFFERENCES BETWEEN DECLARATION AND EXPRESSION


// Function Declaration

abb();

function abb() {
    console.log('Hello down there');
}

// Function Statement

acc();

let acc = function () {
    console.log('Heyeyeyeye');
}














////

