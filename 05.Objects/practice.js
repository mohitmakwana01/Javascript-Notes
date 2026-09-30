//1. Can an object key be a number or boolean? try this

const obj = {
    true: "Yes",
    23: "answer",
};

console.log(obj.true);
console.log(obj[23]);

// ho sakti hai...


//2. Access the value fo "first-name" from this objects:

const user = {
    "first-name": "Mohit",
};

// user.first-name // this is not allowed..
console.log(user["first-name"]);


//3. given a dynamic key let key = "age", how will you access user[key]?


let student = {
    name: "Aman",
    age: 22
};

let key = "age";

console.log(student[key]);


//4. From the object below, print the latitude:

let Location = {
    city: 'Bhopal',
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

console.log(Location.coordinates.lat);


//.5 What will happen if coordinates is missing? How can you prevent errors?

let area = {
    city: 'Bhopal',
    coordinatess: {
        lat: 23.2,
        lng: 77.4,
    },
};

area?.coordinates?.lng  // undefined


//6. Destructure the city and lat from the loaction object above.

let { city } = area;
let { lat } = area.coordinatess;

console.log(city);
console.log(lat);


//7. Destructure the key "first-name" as a variable called firstName.

const User = {
    "first-name": "Mohit",
};

let { "first-name": firstName } = User;
console.log(firstName);


//8. Use for-in loop to log all keys in this objects:

const course = {
    title: 'JavaScript',
    duration: '4 Weeks',
};

for (let key in course) {
    console.log(key);
}

//9. Use Object.entries() to print all key-value pairs as:
// title: JavaScirpt
// duration: 4 weeks

const Course = {
    title: 'JavaScript',
    duration: '4 Weeks',
};

Object.entries(Course).forEach((val) => {
    console.log(val[0] + ":", val[1]);
});


//10. Copy this object using spread operator?

const original = { a: 1, b: 2 };

const copy = { ...original };


// 11. what is the problem with this code?

const obj1 = { info: { score: 80 } };
const clone = { ...obj1 };

clone.info.score = 100;
console.log(obj1); // score : 100


//12. Deep clone the obj1 safely.

let obj2 = JSON.parse(JSON.stringify(obj1));

obj2.info.score = 150;
console.log(obj2); //150
console.log(obj1); //100


//13. Rewrite this safely using optional chaining:

const person = {};
// console.log(person.profile.name); // ❌

console.log(person?.profile?.name); 


// Use a variable to dynamically assign a property?

let Key = "role";

let assign = {
    name: 'Mohit',
    [Key]: 'Admin'
};

console.log(assign);


