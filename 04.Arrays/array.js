// Create, access, modify arrays

let marks = [12, 13, 44, 56, 59, 99]

marks[2] // 44;

marks[8] // undefined

marks[2] = 50;

console.log(marks) //  [12, 13, 50, 56, 59, 99]




//      .....ARRAY METHODS.....



// 1. push

let arr = [1, 2, 3, 4, 5]

arr.push(50)

console.log(arr); // End me 50 add ho jayega... [modify the orignal array]


// 2. pop

let Arr = [1, 2, 3, 4, 5, 50]

Arr.pop();

console.log(Arr); // End me se 50 remove ho jayega... [modify the orignal array]


// 3. shift

let arrr = [10, 20, 30, 40, 50]

arrr.shift()

console.log(arrr); // Shuru me se 10 remove kar dega... [modify the orignal array]


// 4. unshift

let Arrr = [20, 30, 40, 50]

Arrr.unshift(10);

console.log(Arrr); // Shuru me kuchh add karta hai... [modify the orignal array]


// 5. slice - slice out a piece from an array and create a new array.

let fruits = ['angoor', 'kela', 'santra', 'Aam', 'chiku']

// slice(startIdx, endIdx)

console.log(fruits.slice(1, 3)); // ['kela', 'santra']

// Pure array me se Jo value chahiye wo value indexing ke threw de dega... [ye naya array return kar deta hai orignal array me change nahi karta hai]



// 6. splice

let cars = ['BMW', 'Audi', 'Tesla', 'Honda', 'Alto', 'Kia', 'Fronx', 'Ford'];

// splice [startIdx, delCount, AddNewElement]

cars.splice(4, 2, 'Mercedes')

console.log(cars);

// ['BMW', 'Audi', 'Tesla', 'Honda', 'Mercedes', 'Fronx', 'Ford']


// splice() array me beech se items hataane, new items insert karne, ya dono kaam ek saath karne ke liye use hota hai. Ye hamesha original array ko modify karta hai

//. Pehla number batata hai kis index se changes start honge.
//. Dusra number batata hai kitne items delete karne hain.
//. Uske baad jitne values doge, wo insert ho jayengi.

// Index 4 pe jo item hai:
// 'Alto' → ye delete hoga.
// Usi jagah 'Mercedes' add ho jayega.


// ANOTHER ONE

let color = ['red', 'blue', 'green', 'yellow', 'purple']

color.splice(3, 1)  // ['red', 'blue', 'green', 'purple']
// 3rd index par 1 element delete kar do

console.log(color);


// Agar kuchh delete nahi karna ho or add bhi karna ho tab...

let heros = ['ironman', 'thor', 'hulk', 'spiderman', 'loki']

heros.splice(5, 0, 'Dr.Strange');

console.log(heros); // ['ironman', 'thor', 'hulk', 'spiderman', 'loki', 'Dr. Strange']


// 7. Reverse - reverse the array [modify the orignal array]

let rev = [22, 33, 44, 55, 66, 77];

rev.reverse()

console.log(rev); // [77, 66, 55, 44, 22, 33]


// 8. sort - sort hamesha function ko accept karega and original array ko hi modify kar dega.

let srt = [1, 2, 34, 65, 11, 23, 8, 50]

srt.sort(function (a, b) {
    // return a - b
    return b - a
})

console.log(srt);

// a - b return karenge to Array Ascending order me return hoga [1, 2, 8, 11, 23, 34, 50, 65] OR b - a return karenge to Array Descending order me return karega [65, 50, 34, 23, 11, 8, 2, 1].



//           ....ForEach Loop....

// forEach Loop - forEach array ka har element ek ek karke chalata hai / array ke har element par ek function chalata hai.

//  Ye bas action karta hai - jaise print karna, sum banana, message dikhana. Par ye return kuch nahi karta, matlab forEach ke andar jo function pass karenge usme agar kuchh return karenge to return accept nahi hoga, sirf console.log hoga.

// forEach kabhi array return nahi karta.


let fech = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

fech.forEach(function (val) {
    console.log(val * 5);
});



// NOW SOME IMP METHODS

// map, filter, reduce, find, some, every


// MAP()

// map sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par. orignal array change nahi hota.

// map method me sirf return karta hai console.log nahi, kyonki ye new array deta hai.

// map dikhte hi saath mann me ek blank array bana liya karo.

let arrMp = [21, 43, 54, 76, 95];

let newarr = arrMp.map(function (val) {
    return 12;
})

console.log(newarr); // [12, 12, 12, 12, 12] - new array

// another

let abc = [1, 2, 3, 4, 5];

let newone = abc.map(function (val) {
    return val * 3
});

console.log(newone); // [3, 6, 9, 12, 15]


//       FILTER

// filter() array ke elements ko condition ke hisaab se chunta hai. Jo pass ho gaye → new array me. Jo fail ho gaye → skip.Original array safe rehta hai.

let flt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newflt = flt.filter(function (val) {
    return val % 2 === 0;
});

console.log(newflt); // [2, 4, 6, 8, 10]

// another

let ant = [1, 2, 3, 4, 5, 6, 7, 8];

let newAnt = ant.filter(function (val) {
    if (val > 4) return true;
});

console.log(newAnt); // [5, 6, 7, 8]


//     REDUCE - reduce an array to a single value. Ye new array nahi banata.

// reduce ke paas ek accumulator hota hai jisme value collect hoti rehti hai.

let rdc = [1, 2, 3, 4, 5];

let NewRdc = rdc.reduce(function (accumulator, val) {
    return accumulator + val;
}, 0);

console.log(NewRdc); // 15



//   FIND -  find() array me pehla element return karta hai jo condition match kare. find sirf ek hi value deta hai, array nahi.
// Sirf first matching element deta hai. Agar koi match na mile → undefined return hota hai. Original array change nahi hota.

// find() kab use hota hai?

// Jab tum sirf pehla match chahte ho.

// Example: pehla odd number, pehla true value, pehla matching object, etc.


let nums = [10, 25, 37, 40, 55];

let result = nums.find(function (val) {
    return val > 30;
});

console.log(result); // 37


//another


let fnd = [
    { id: 1, key: 1 },
    { id: 2, key: 2 },
    { id: 3, key: 1 },
]

let Newfnd = fnd.find(function (val) {
    return val.key === 1;
});

console.log(Newfnd);


// SOME - some() check karta hai ki array me koi bhi ek element condition ko pass karta hai ya nahi.

// Agar ek bhi element condition pass kare → true
// Agar ek bhi element match na kare → false
// Original array change nahi hota.

let sm = [67, 89, 45, 77, 55];

let NewSm = sm.some(function (val) {
    return val > 85;
})

console.log(NewSm); // true


// EVERY - every() check karta hai ki array ke saare elements condition pass karte hain ya nahi.

// Agar sab elements condition pass kare → true
// Agar ek bhi element fail kare → false
// Original array change nahi hota.

let ev = [10, 20, 30, 40, 50];

let NewEv = ev.every(function (val) {
    return val > 25;
});

console.log(NewEv); // false



// DESTRUCTURING, SPREAD OPERATOR...

// DESTRUCTURING -

let num = [10, 20, 30, 40, 50];

let [a, b, , c] = num  // a = 10, b = 20, c = 40


// SPREAD OPERATOR -

let a1 = [1, 2, 3, 4, 5, 6];

let a2 = a1;

a2.pop();

console.log(a2); // [1, 2, 3, 4, 5]
console.log(a1); // [1, 2, 3, 4, 5]

// agar hum iss tarike se copy karenge array ko to jab bhi hum a2 me badlav karenge a1 me bhi changes aa jayenge. ise thik se copy karne ke liye hum spread operator ka use karte hai.

// Spread operator sirf SHALLOW COPY banata hai. Agar array ke andar objects ya nested arrays hain, to unke andar change karoge to original bhi change ho jayega, because reference share hota hai.


let arr1 = [10, 20, 30, 40, 50];

let arr2 = [...arr1];

arr2.push(60);

console.log(arr2); // [10, 20, 30, 40, 50, 60];
console.log(arr1); // [10, 20, 30, 40, 50];

// yaha sirf copy me change aaya orignal same hai.

