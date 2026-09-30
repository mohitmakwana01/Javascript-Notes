let obj = {
    name: "Mohit",
    age: 25,
    language: "Javascirpt",
    city: "Indore"
};

console.log(obj.name); // Mohit

/* Agar hume object ki kisi property ko indirectly access karna ho, to hum us property ka naam ek variable me save kar sakte hain.
Phir us variable ko square brackets [] ke andar rakh kar access karenge. */

let address = "city";
console.log(obj[address]); // Indore

//..........................................................//


//1. KEY-VALUE STRUCTURE

// KEY left side hoti hai or colon ke baad VALUE hoti hai.

let objs = {
    pen: "Trimax",
};


//2. DOT VS BRACKET NOTATION

objs.pen // Trimax

objs['pen'] // Trimax


//3. NESTING AND DEEP ACCESS

const user = {
    name: "Harsh",
    address: {
        city: "Bhopal",
        pin: 462001,
        location: {
            lat: 23.2,
            lng: 77.4,
        },
    },
};

user.address.location.lng; // 77.4


//4. OBJECT DESTRUCTURING

// user.address.location.lng; => agar lng chahiye to ise baar-baar likhna padegha, iski jagah hume object/nested object se jo bhi obj access karna ho to hum use obj ko usi ke same name se ek variable me store kar lenge, jese...

let { lat, lng } = user.address.location;

console.log(lat); // 23.2
console.log(lng); // 77.4

// ab ise hum har jagah baar-baar use kar sakenge


//5. LOOPING: for-in, Object.keys, Object.entries

// for-in

let person = {
    name: "Mohit",
    age: 25,
    city: "Indore",
};

for (let key in person) {
    console.log(key, person[key]);
};


// Object.keys

// object ki keys ko array me convert karna ho to tab use karenge.

Object.keys(person);  // ['name', 'age', 'city']


// Object.entries

// isse arrays of arrays banta hai, array ke andar array.

Object.entries(person)

console.log(Object.entries(person)); // [ [ 'name', 'Mohit' ], [ 'age', 25 ], [ 'city', 'Indore' ] ]


//6. Copying objects: spread, Object.assign, deep clone

// spread

let person1 = { ...person };

console.log(person1);


// Object.assign

// isme bhi spread ki tarah object ko copy kar sakte hai or copy me values ko add bhi kar sakte hai.

let person2 = Object.assign({}, person);
console.log(person2);

let person3 = Object.assign({ state: "Madhya Pradesh" }, person2);
console.log(person3);


// DEEP CLONING - (IMP)

let student = {
    name: "Aman",
    age: 25,
    address: {
        city: "bhopal",
    },
};

let student1 = { ...student };
student1.address.city = "Indore"

console.log(student); //{ name: 'Aman', age: 25, address: { city: 'Indore' } }
console.log(student1); //{ name: 'Aman', age: 25, address: { city: 'Indore' } }

// spread operator se copy karenge obj ko or agar obj me nested obj ko change karenge to orignal obj ka nasted obj bhi change ho jaayega, iske liye deep clone ka use karenge


let settings = {
    theme: "dark",
    fontSize: 18,
    user: {
        name: "Mohit",
        location: "Surat"
    }
};


let settings1 = JSON.parse(JSON.stringify(settings));
console.log(settings1);

settings1.user.location = "Indore";
console.log(settings1); // location: 'Indore'

console.log(settings); // location: 'Surat'

//# JSON.stringify() -> Ye JavaScript object ko string (text form) me convert karta hai.

//# JSON.parse() -> Ye string ko wapas object me convert karta hai.

// yaha nested objects ki copy me change kiya to orginal me koi change nahi aaya.
// agar nested object me kuchh change karna ho to JSON.parse(JSON.stringify()) ka use karenge.



//7. OPTIONAL CHAINING, COMPUTED PROPERTIES

// Optional chaining

let car = {
    brand: "Toyota",
    model: "Innova",
    engines: {
        type: "Diesel",
        horsepower: 150
    }
};

// console.log(car.engine.type) // --> yaha engines ki jagah engine diya hai to error aayega.

// car?.engine?.type // --> esi situation me error ki jagah undefined dega.


// Computed Properties => Jab variable se key generate karna ho ya variable ki value ko obj me insert karna ho.

let a = "Logo"

let laptop = {
    brand: "Dell",
    price: 45000,
    [a]: "Good"
};

console.log(laptop);

//

let keyName = "color";

let bike = {
    company: "Honda",
    [keyName]: "Red"
}

console.log(bike.color);
