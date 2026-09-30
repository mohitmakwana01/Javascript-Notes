// let xx = 5;

// xx += 3;

// console.log(xx)

// xx -= 3;
// console.log(xx)

// xx *= 5;
// console.log(xx);

// xx /= 5;
// console.log(xx);

// xx %= 3;
// console.log(xx);

// xx **= 3;
// console.log(xx);


// ......................................


// What does status equal?

let age = 16;
let status = age >= 18 ? "adult" : "minor";
// ans - minor


// What's the output?

let temperature = 85;
let weather = temperature > 90 ? "hot" : temperature > 70 ? "warm" : temperature > 50 ? "cool" : "cold";
// ans - warm


// What happens if userRole is "guest"?

let userRole = "admin";
let access = userRole === "admin" ? "full access" : userRole === "user" ? "limited access" : "no access";
// ans - full access


// What's the result?

let x = 5;
let y = 10;
let result = x > y ? "x is bigger" : x < y ? "y is bigger" : "they're equal";
// ans - y is bigger


// What's finalScore?

let score = 82;
let bonus = score > 90 ? 100 : score > 80 ? 50 : score > 70 ? 25 : 0;
let finalScore = score + bonus;
// ans - 50 + 82 =  132


// What's wrong with this code?

let password = "abc123";
let isValid = password.length >= 8 ? true : false;
// ans - false


// What's the output?

let users = ["Alice", "Bob"];
let greeting = users.length > 0 ? `Hello ${users[0]}` : "No users found";

// console.log(greeting)


// What are the values of a and b?

let a = 7;
let b = a;

// 7

// What are the values of x, y, and z?

// let x = 15;
// let y = x;
// let z = y;

// 15


// What are the values of p and q?

let p = 5;
let q = p;
p = 10;

// q = 5 , p = 10


// What are the values of first and second?

let first = 8;
let second = first;
first = first + 2;

// first = 10, second = 8


// What are the values of num1 and num2?

let num1 = 12;
let num2 = num1;
num1 = num2 + 3;

// num1 = 15 , num2 = 12 


// What are the values of value and copy?

let value = 6;
let copy = value;
value = copy * 2; // value = 12
copy = value - 1;

// value = 12 , copy = 11


// What are the values of original and duplicate?

let original = 4;
let duplicate = original + 1; // 5
original = duplicate;

// original = 5 , duplicate = 5


//...

let m = 3;
let n = m++;
console.log(m, n);

// m = 4 , n = 3

//....

let p1 = 4;
let q1 = ++p;
console.log(p1, q1);

// p1 = 5 , q1 = 5 

//.....

let c = 10;
console.log(c--);
console.log(c);

// c-- = 10 , c = 9


//....

let f = 5;
let resultt = f++ + ++f;
console.log(resultt);

// 12


//......

let a1 = 2;
let b1 = a1++ + a1;
console.log(b1);

// 5


//.......


let x1 = 4;
let y1 = ++x1 + x1++ + x1;
console.log(y1);

// 16


//.........

let m1 = 6;
let n1 = m1-- - --m1;
console.log(n1);

// 2


//..........

let pp = 3;
let qq = ++pp + ++pp + pp++; // (4 + 5 + 5)
console.log(pp, qq);

// 6 , 14


//.......

let z = 5;
let r = z++ + z++ + ++z; // (5 + 6 + 8 = 19)
console.log(z, r);

// 8 , 19

