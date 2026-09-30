// Q.1 Print numbers from 1 to 10 using a for loop.


for (let i = 1; i < 11; i++) {
    console.log(i);
}

console.log("Que1...Done")


// Q.2 Print numbers from 10 to 1 using a while loop.

let j = 10;

while (j >= 1) {
    console.log(j)
    j--
}

console.log("Que2...Done")

// Q.3 Print even numbers from 1 to 20 using a for loop.

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("Que3...Done")


// Q.4 Print odd numbers from 1 to 15 using a while loop.


let i = 1;

while (i <= 15) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++;
}

console.log("Que4...Done")


// Q.5 Print the multiplication table of 5 (i.e., 5 * 1 = 5.. 5 *10 = 50)

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("Que5...Done")


// Q.6 Find the sum of numbers from 1 to 100 using a loop.

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log(sum);

console.log("Que6...Done")


// Q.7 Print all numbers between 1 to 50 that are divisible by 3.


let d = 1;

while (d <= 50) {
    if (d % 3 === 0)
        console.log(d)
    d++;
}

console.log("Que7...Done")



// Q.8 Ask the user for a number and print whether each number from 1 to that number is even or odd.

// (e.g. "1 is odd", "2 is even", ....)


// let val = prompt("Ask the number");

// for(let i = 1; i <= val; i++) {
//     if(i % 2 === 0) {
//         console.log(`${i} is even`)
//     }
//     else {
//         console.log(`${i} is odd`)
//     }
// }


console.log("Que8...Done")


// Q.9 Count how many numbers between 1 to 100 are divisible by both 3 and 5.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


console.log("Que9...Done")


// Break and Continue QUE....

// Q.1 Stop at First Multiple of 7

// write a loop from 1 to 100 that:

// * Prints each numbers
// * Stops completely when it finds the first number divisible by 7


for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 7 === 0) {
        break;
    }
}

console.log("Que1...Done")


// Q.2 Skip Multiples of 3 

// Write a loop from 1 to 20 that:

// * Skips numbers divisible by 3
// * Prints all others

// Use continue

// Expected output:
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)


for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

console.log("Que2...Done")


// Q.3: Print first 5 odd numbers only

// Write a loop from 1 to 100 that:

// # Print only 5 odd numbers
// # Then stops the loop

// Use both if, continue and a counter + break

// Expected output:
// 1 3 5 7 9

let count = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 1) {
        count++;
        console.log(i);
    }
    if (count === 5) break;
}

console.log("Que3...Done")



//...............................................................//


// Q. Sum of First 10 Natural Numbers.

let plus = 0;

for (let i = 1; i <= 10; i++) {
    plus = plus + i;
}

console.log(plus);

console.log("Done")



// Q. Print Numbers from 10 to 1 (Reverse) using while loop.


let p = 10;
while (p >= 1) {
    console.log(p);
    p--;
}

console.log("Done");


// Q. Print First 5 Odd Numbers.

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

console.log("Done");


// Q. Print the multiplication table of 5 using a loop. (i.e., 5, 10, 15, ..., 50)

for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}

console.log("Done");


// Q. Print numbers from 100 down to 90 using any loop.

for (let i = 100; i >= 90; i--) {
    console.log(i);
}

console.log("Done");


// Q. Use a loop to print numbers between 1 to 50 which are divisible by 7.

for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

console.log("Done");


// Q. Loop from 1 to 100, and stop the loop when you find the first number divisible by 9.

for (let i = 1; i <= 100; i++) {
    console.log(i);
    if (i % 9 === 0) break;
}

console.log("Done");


// Q. Print squares of numbers from 1 to 5 (like 1, 4, 9, 16, 25).


for (let i = 1; i <= 5; i++) {
    console.log(i * i);
}

console.log("Done");


//Q. Print numbers from 1 to 100, but skip numbers divisible by 3.


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

console.log("Done");


// Q. Find the product of first 5 natural numbers

let mult = 1;

for (let i = 1; i <= 5; i++) {
    mult = mult * i
}

console.log(mult);

console.log("Done");

// Q. Print numbers from 1 to 50, but stop when number becomes greater than 33.


for (let i = 1; i <= 50; i++) {
    if (i > 33) {
        break;
    }
    console.log(i);
}

console.log("Done");


// Q. Count how many numbers between 1 and 30 are even.


let countt = 0;

for (let i = 1; i <= 30; i++) {
    if (i % 2 === 0) {
        countt++;
    }
}

console.log(countt);

console.log("Done");


// Q. Print the square of only even numbers from 1 to 20.


for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i * i);
    }
}

console.log("Done");


// Q. Print numbers from 1 to 30, but print “Skip” if number is 13.


for (let i = 1; i <= 30; i++) {
    if (i === 13) {
        console.log("Skip");
        continue;
    }
    console.log(i);
}

console.log("Done");


// Q. Calculate the sum of all numbers from 50 to 100.

let summ = 0;

for (let i = 50; i <= 100; i++) {
    summ = summ + i;
}
console.log(summ);

console.log("Done");


// Q. Print only numbers divisible by both 2 and 5 from 1 to 100.

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

console.log("Done");


// Q. Create a countdown from 20 to 0 that only prints even numbers.

for (let i = 20; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Done");


// Q. Print the cube of numbers from 1 to 10.


for (let i = 1; i <= 10; i++) {
    console.log(i * i * i);
}

console.log("Done");



// Q1. Sum of all numbers from 1 to 100 that are not divisible by 2 or 5.

let num = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0 && i % 5 !== 0) {
        num = num + i;
    }
}
console.log(num);

console.log("Done");


// Q2. Find the smallest number between 1 and 100 which is divisible by 7 and 9 both.


for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0 && i % 9 === 0) {
        console.log(i);
        break;
    }
}

console.log("Done");



// Q3. Count how many numbers between 1 and 200 have remainder 3 when divided by 7.

let countNum = 0;

for(let i = 1; i <= 200; i++) {
    if(i % 7 === 3) {
        countNum++;
    }
}
console.log(countNum);

console.log("Done");


// Q4. Print this pattern:

// *
// * *
// * * *
// * * * *








