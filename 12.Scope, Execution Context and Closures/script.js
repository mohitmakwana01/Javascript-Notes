// .....VARIABLE SCOPE: GLOBAL, BLOCK, FUNCTIONAL.....

// Scope - scope hai ke aap apne created variables and functions kaha tak use kar sakte ho 


//1. function scope - function ke andar hi use ho sakte hai.

function abc() {
    var a = 2;
}

// console.log(a); -> // ❌ Uncaught ReferenceError: a is not defined


//2. global scope - poore code mein kahi bhi use ho sakti hai.

let a = 10;

function test() {
    console.log(a); // 10
}

test();
console.log(a); // 10


//3. block scope -> {} curly braces mein hi use ho sakti hai.jese if me ham use kar sakte hai.

{
    let a = 10;
    console.log(a); // 10
}

// console.log(a); -> ❌ error (block ke bahar use nahi kar sakte)


if (true) {
    const b = 20;
    console.log(b); // 20
}

// console.log(b); -> ❌ error


{
    var c = 30;
}

console.log(c); // ✅ 30 (block ke bahar bhi mil raha hai)



//...Execution context: memory creation & execution phase...

// Execution context - js sabse pahle jaise hi aapka function dekhta hai sabse pahle js banaata hai execution context, ye ek process hai jo ki do different phase mein chalta hai, memory phase and doosre ka naam hai execution phase

// simply function dikhte hi saath fucntion chalane ke liye ek space allocate ho jaata hai, usi me saare variables Aa jaate hai, usi me hamara code bhi aa jata hai or code bhi usi me chalta hai or ye sirf function ke saath hi hota hai or ye hi execution context hai... for ex..

function abcd() {
    var a = 12;
    let b = 13;
    const c = 14;

    //... hamara code...

}

// Isi me Memory Phase -> hamare variables or code or 
// Execution phase -> code chalana - dono aa gaye. ise hi execution context kahte hai.



//...Lexical scope vs dynamic scope...

// lexical scope 

// JS scope chain follow karta hai:
// Pehle apna scope check karega 
// Phir parent 
// Phir global

let x = 10;

function outer() {
    let y = 20;

    function inner() {
        console.log(x, y); //10,20
    }

    inner();
}

outer();

// Function kaha likha hai → uske basis par scope decide hota hai.

// inner ko x aur y dono mil gaye kyunki wo inner ke lexical scope me hai.


// Dynamic Scope (JS mein nahi hota)

let one = 10;

function inner() {
    console.log(one);
}

function outer() {
    let one = 20;
    inner();
}

outer(); // JS me output: 10

// Agar JS dynamic hota:
// Output 20 aata (call ke basis par)

// But JS me:
// Output 10 aata (kyunki function kaha likha hai wo matter karta hai)


// Simple 

// Lexical scope (JS) → function likhne ki location se decide hota
// Dynamic scope → function call hone ki jagah se decide hota


//....CLOSURE DEFINATION AND HOW VARIABLES ARE PRESERVED....

// closures hote hai functions jo ki kisi parent fnc ke andar ho or andar wala fnc return ho raha ho and returing fnc use kare, parent fnc ka koi variable 

function aaa() {
    let a = 77;
    return function () {
        console.log(a);
    }
}

// Ye sach hai ki fnc ke use ho jaane pe aapka fnc and uske varibles khatam ho jaate hai, par jab bhi closure banta hai to aapka fnc or uske variables ka ek backlink banaya jata hai or uska naam hota hai [[environment]]

function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

const fn = outer();
fn(); // 10

// Yaha return function(inner) Aa gaya fn variable me or use chala diya gaya.

// Yahan kya ho raha hai?
// outer() khatam ho gaya
// Normally a delete ho jana chahiye tha
// BUT inner abhi bhi a use kar raha hai
// 👉 Isliye JS engine a ko delete nahi karta


// [[Environment]] kya hota hai?
// Simple language me:

// Jab inner banta hai, tab wo apne surrounding variables ko yaad rakh leta hai
// Ye memory link ko internally bola jata hai → [[Environment]]
// 👉 Ye basically ek hidden reference (backlink) hota hai:





// .....USE CASES: PRIVATE COUNTERS, ENCAPSULATION.....

//          PRIVATE COUNTERS

function count() {
    let c = 0;

    return function () {
        c++;
        console.log(c);
    };
}

let fnc = count();
fnc(); //1
fnc(); //2
fnc(); //3

// yaha same closure reuse ho raha hai, isliye value increase ho rahi


// yaha count() sirf function return karta hai, call nahi karta sirf count ko chalayenge to nahi chalega, andar ke return hue function ko chalane ke liye hame hamare funciton ko ek varibale me save karna hoga or fir use chala denge ya fir ham ese bhi chala sakte hai count()(); // ✅ 1 , par iss tarike me har baar ek naya count aayega 1,1,1 na ki 1,2,3.

// count()() //1
// count()() //1
// count()() //1


// ye naya closure hai (fresh c = 0)

let fnc2 = count();
fnc2(); //1
fnc2(); //2
fnc2(); //3
fnc2(); //4
fnc2(); //5



//           ENCAPSULATION



function clickLimiter() {
    let click = 0;
    return function () {
        if (click < 5) {
            click++
            console.log(`clicked : ${click} times`);
        }
        else {
            console.error("LIMIT EXCEED, TRY AFTER SOME TIME");
        }
    }
}

// let clicked = clickLimiter();
// clicked(); // clicked : 1 times
// clicked(); // clicked : 2 times
// clicked(); // clicked : 3 times
// clicked(); // clicked : 4 times
// clicked(); // clicked : 5 times
// clicked(); // LIMIT EXCEED, TRY AFTER SOME TIME


