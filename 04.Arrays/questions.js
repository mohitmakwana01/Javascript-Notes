// Q.1 create an array with 3 fruit and print the second fruit.

let frt = ['apple', 'chiku', 'banana'];

console.log(frt[1]);


// Q.2 Add "Mango" at the end and "Pineapple" at the beginning of this array:

let fruits = ['apple', 'banana'];

fruits.push("Mango");
fruits.unshift("Pineapple");

console.log(fruits);


// Q.3 Replace "banana" with "Kiwi" in the array above.

let Fruits = ['apple', 'banana'];

Fruits.splice(1, 1, "Kiwi");

console.log(Fruits);


// Q.4 Remove the last item from this array using a method:

let numbers = [1, 2, 3, 4];

numbers.pop();
console.log(numbers);


// Q.5 Insert "Red" and "Blue" at index 1 in this array:

let colors = ["Green", "Yellow"];

colors.splice(1, 0, 'Red', 'Blue');
console.log(colors);


// Q.6 Extract only the middle 3 elements from this array.

let items = [1, 2, 3, 4, 5, 6, 7];

let NewItmes = items.slice(2, 5);
console.log(NewItmes);


// Q.7 Sort this array alphabetically and then reverse it:

let names = ['Zara', 'Arjun', 'Mira', 'Bhavya'];

names.sort().reverse();
console.log(names);


// Q.8 Use .map() to square each number:

let arr = [1, 2, 3, 4];

let newarr = arr.map(function (val) {
    return val * val;
});

console.log(newarr);


// Q.9 Use .filter() to keep numbers greater than 10:

let flt = [5, 12, 8, 20, 3];

let newflt = flt.filter(function (val) {
    if (val > 10) return true;
});

console.log(newflt);


// Q.10 Use .reduce() to find the sum of this array:

let rdc = [10, 20, 30];

let newrdc = rdc.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log(newrdc);


// Q.11 Use .find() to get the first number less than 10:

let fnd = [12, 15, 3, 8, 20];

let newfnd = fnd.find((val) => {
    return val < 10;
});

console.log(newfnd);


// Q. 12 Use .some() to check if any student has scored below 35:

let sm = [45, 60, 28, 90];

let newsm = sm.some((val) => {
    return val < 35;
});

console.log(newsm);


// Q.13: Use .every() to check if all numbers are even:

let evr = [2, 4, 6, 8, 10];

let newevr = evr.every((val) => {
    return val % 2 === 0;
});

console.log(newevr);


// Q.14 Destructure this array to get firstName and lastName.

let fullName = ["Mohit", "Makwana"];

let [firstName, lastName] = fullName;


// Q.15: Merge two arrays using spread operator:

let a = [1, 2];
let b = [3, 4];

let c = [...a, ...b]

let f = [55, 66];
let g = [77, 88];

let h = [...f, ...g];
console.log(h);


// Q.16: Add "India" to the start of this array using spread:

let countries = ["USA", "UK"];

countries = ["INDIA", ...countries];

console.log(countries);


// Q.17: Clone this array properly (not by reference):

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);