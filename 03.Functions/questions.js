// Q1: What's the difference between function delaration and expression in terms of hoisting?


// Q2: convert this function into arrow function?

// function multiply(a, b) {
//     return a * b;
// }

//here

let multiply = (a, b) => {
    return a * b;
}

// Q3: Predict the output?

function sayHi(name = "Guest") {
    console.log("Hi", name);
}

sayHi(); //Hi, Guest


// Q4: What does the ... operator mean in parameters?


// Q5: Use rest parameters to accept any number of scores and return the total.



function getScore(...scores) {
    total = 0;
    scores.forEach(function (val) {
        total = total + val;
    })
    return total;
}

console.log(getScore(10, 12, 14, 16, 18, 20))


// Q6: Fix the function using early return?

// function checkAge(age) {
//     if (age < 18) {
//         console.log("Too young");
//     }
//     else {
//         console.log("Allowed");
//     }
// }


function checkAge(age) {
    if (age < 18) return "Too Young";
    return "Allowed"
}

console.log(checkAge(6));


// Q7: Function kya return karega?

function f() {
    return
}

console.log(f());  // undefined



// Q8: What does it mean when we say "function" are first-class citizens"?


// Q9: Can you asign a funciton to a variable and then call it? Show how.


let a = function () {

}

a();


// Q10: Pass a funciton into another function and execute it inside.


function abc(val) {
    val()
}

abc(function () {
    console.log('haha');
})


// Q11: What is a higher-order function?

// function ke andar return kare ek function or parameter me accept kare ek function.


// Q12: Identify which is higher order function?


// [1,2,3].map(function (x) {
//     return x * 2;
// });

// map is (higher order function).



// Q13: Convert the function into a pure function?


// let total = 0;

// function addToTotal(num) {
//     total += num;
// }


function addToTotal(num) {
    let newTotal = total;
    newTotal += num;
}


//Q14: What is a closure? When is it created?

function abcd() {
    let a = 1;
    return function () {
        console.log(a);
    }
}


//Q15: 

function outer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

let counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3



//Q16: Convert this normal function into an IIFE:

// function init() {
//     console.log("Initialized");
// }

(function init() {
    console.log('Initialized');
})();


//Q17: What will be the output and why?

// greet();

// var greet = function () {
//     console.log('Hi!');
// };


//error - because ye function expression hai.


// Q18: What will be the output and why?

greet();

function greet() {
    console.log('Hi!');
};

//Hi! - because ye function statement he.





console.log(".......PRACTICE SESSION.......");


// Write a BMI calculator?


function BMI(weight, height) {
    return weight / (height * height)
}

console.log(BMI(50, 1.4).toFixed(2));

//.toFixed(2) means point ke baad kitne number chahiye.



// Creat a reusable discount calculator (HOF - Higher order funciton)?


//Build a counter using closre.


function counterr() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

let c = counterr();
console.log(c()); //1
console.log(c()); //2
console.log(c()); //3

let d = counterr();
console.log(d()); //1
console.log(d()); //2
console.log(d()); //3


// Create a pure function to transform a value.


function double (val) {
    return val * 2;
}

console.log(double(100));



// Use IIFE to isolate vairable.


(function() {
    const password = "secret password";
    console.log(password);
})();

// console.log(password);    // Error 





