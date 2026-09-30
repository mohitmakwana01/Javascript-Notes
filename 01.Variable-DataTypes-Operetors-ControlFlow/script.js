// var a = 33;
// a = 44;

// var a = 334
// console.log(a);

// let b = 44;
// let = 49;
// console.log(b);


// Temporal Dead Zone....
// console.log(a);

// var a = 3;


// let b;

// const c;

// QUE...1

// var A = 22;   // Global

// {
// var A = 33;  // Global
// }

// console.log(A);


// QUE...2


// let a = 10;  // Block Scope // Global


// {
//     let a = 20;
//     console.log("Inside:", a);
// }

// console.log("outside", a);



// DataTypes

// 1. premetive
// string, number, boolean, null, undefined, symbol, bigint

// 2. refrence
// arrays, objects, functions


// true + false; = (1 + 0) = 1

// null + 1 = (0 + 1) = 1

// "5" + 5 = '55'


//0.

12 < 13 ? console.log("true") : console.log("false");

// 1.

let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "fail";

console.log(grade);

//  if, if, if : else


// 2.


let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";

console.log(access);


// 3.

let x = 3;
++x;
console.log(x);

let y = 4;
y++;
console.log(y);


// 4.

let m = 3;
let n = m++;
console.log(m, n); 

// 5.

let p = 4;
let q = ++p;
console.log(p, q);

// 6.

let c = 10;
console.log(c--);
console.log(c)

// 7.

let f = 5;
let result = f++ + ++f;
console.log(result);

// 8.

let likes = 100;

function likePost() {
    return ++likes;
}

console.log(likePost());
console.log(likes);


//or

let Likes = 100;

function LikePost() {
    return Likes + 1;
}

console.log(LikePost());
console.log(Likes);

// 9.

let count = 5;

if (count-- === 5) {
    console.log("Matched")
}
else {
    console.log("Not Matched")
}



// IF ELSE ELSE-IF
// SWITCH CASE
// EARLY RETURN PATTERN

//QUE..

// Write a function getGrade(score) that:
// * Takes a student's marks (0 to 100)
// * Returns the grade based on this logic:

// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else        Invalid marks ❌

// Solve this with: 

// 1. If Else statement
// 2. Early return pattern

// 1. If Else statement

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    }
    else if (score >= 80 && score <= 89) {
        return "A";
    }
    else if (score >= 70 && score <= 79) {
        return "B";
    }
    else if (score >= 60 && score <= 69) {
        return "C";
    }
    else if (score >= 33 && score <= 59) {
        return "D";
    }
    else if (score >= 0 && score <= 32) {
        return "Fail"
    }
    else {
        return "Invalid marks ❌";
    }
}

console.log(getGrade(73));


// 2. Early return pattern


function gettGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    if (score >= 80 && score <= 89) return "A";
    if (score >= 70 && score <= 79) return "B";
    if (score >= 60 && score <= 69) return "C";
    if (score >= 33 && score <= 59) return "D";
    if (score >= 0 && score <= 32) return "Fail";
    return "Invalid marks ❌";
}

console.log(gettGrade(90));



// Rock-Paper-Scissors logic

// rock === rock : DRAW
// rock === paper : PAPER 
// rock === scissor : ROCK 

// paper === paper : DRAW
// paper === rock : PAPER 
// paper === scissor : SCISSOR

// scissor === scissor : DRAW
// scissor === rock : ROCK 
// scissor === paper : SCISSOR

function rps(user, computer) {

    if (user === "rock" && computer === "scissor") return "userWin";
    if (user === "paper" && computer === "rock") return "userWin";
    if (user === "scissor" && computer === "paper") return "userWin";

    if (user === "" || computer === "") return 'Invalid Value ❌';
    if (user === computer) return "Draw";
    return "computerWin";
}

console.log(rps("", "paper"))


function RockPaperScissor(User, Computer) {

    if (User === "rock" && Computer === "paper") {
        return "ComputerWin";
    }
    else if (User === "rock" && Computer === "scissor") {
        return "UserWin";
    }
    else if (User === "paper" && Computer === "rock") {
        return "UserWin";
    }
    else if (User === "paper" && Computer === "scissor") {
        return "CompterWin"
    }
    else if (User === "scissor" && Computer === "rock") {
        return "ComputerWin";
    }
    else if (User === "scissor" && Computer === "paper") {
        return "UserWin";
    }
    else if (User === Computer) {
        return "Draw";
    }
    else {
        return "Invalid Value ❌"
    }
}

console.log(RockPaperScissor("", ""))




// Write a switch statement that takes a day number (1-7) and returns the day name. What happens if someone passes 8?


let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invailid Day Number";
}

console.log(dayName);


// Same Question With Function....


function GetDayName(dayNumber) {

    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
};

console.log(GetDayName(8));



// Create a switch case for a simple calculator that handles +, -, *, / operations. How would you handle division by zero?



function calculate(a, b, operator) {

    let result;

    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b === 0) {
                result = "Error: division by zero";
            } else {
                result = a / b;
            }
            break;
        default:
            result = "Error: Invailid operator";
    }

    return result;

}

console.log(calculate(10, 8, '+'))
console.log(calculate(10, 8, '-'))
console.log(calculate(10, 10, '*'))
console.log(calculate(10, 0, '/'))