// 1️⃣ Object Destructuring

// Ek object {name: "Aman", age: 22, city: "Delhi"} se name aur city destructure karke variables me store karo.

let student = {
    name: 'Aman',
    age: 22,
    city: 'Delhi',
};

let { name } = student;
let { city } = student;

console.log(name);
console.log(city);


// Function banao jo object {width: 10, height: 5} le aur destructuring se area calculate kare.

let area = {
    width: 10,
    height: 5,
};

let calculate = ({ width, height }) => {
    return width * height;
}

console.log(calculate(area));


// Nested object {user: {id: 1, profile: {email: "a@mail.com"}}} se email destructure karo.


let obj = {
    user: {
        id: 1,
        profile: {
            email: "a@mail.com",
        },
    },
};

let { email } = obj.user.profile;
console.log(email);



// 2️⃣ Object.keys()

// Ek object me kitni properties hain wo count karo using Object.keys().

console.log(Object.keys(student).length)


// Object ke saare keys ko uppercase me print karo.


Object.keys(student).forEach((val) => {
    console.log(val.toUpperCase());
})

// Check karo ki object me "email" key exist karti hai ya nahi using Object.keys().

let exist = Object.keys(student).includes('email');
console.log(exist);



// 3️⃣ Object.entries()

// Object ke har key-value pair ko "key : value" format me print karo using Object.entries().

let abc = {
    name: 'Aman',
    age: 22,
};

Object.entries(abc).forEach((val) => {
    console.log(`${val[0]} : ${val[1]}`);
})

// {a: 1, b: 2, c: 3} ko array of strings me convert karo → ["a=1", "b=2", "c=3"].

let hui = {
    a: 1,
    b: 2,
    c: 3,
};

let result = Object.entries(hui).map(([key, val]) => {
    return `${key}=${val}`
})

console.log(result);


// Object ke entries use karke values ka sum nikalo.

let sum = 0;

Object.entries(hui).forEach(([key, val]) => {
    sum = sum + val
})

console.log(sum);


// ye [key, value] array destructuring hai jo Object.entries() se aaye array of pairs ko unpack karne ke liye use hota hai.

Object.entries(hui).forEach(([key, val]) => {
    console.log(key, val);
});



// 4️⃣ for...in Loop

// Ek object ke saare properties aur unki values print karo using for...in.

let product = {
    id: 101,
    name: "Laptop",
    price: 45000,
    inStock: true,
    brand: "Dell"
};

for (let key in product) {
    console.log(key, product[key]);
}

// Object me se sirf number values ka sum nikaalo using for...in.

let number = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
}

let total = 0;

for (let key in number) {
    total += number[key]
}

console.log(total);


// Ek function likho jo object ke keys ko ek array me store kare using for...in.


let car = {
    model: "Swift",
    year: 2022,
    color: "white",
    mileage: 22
};


let store = (val) => {
    let arr = [];
    for (let key in val) {
        arr.push(key)
    }
    return arr;
}

console.log(store(car));


// 5️⃣ Spread Operator (Objects)

// Do objects merge karo using spread operator.

let a = {
    x: 1,
}

let b = {
    y: 2,
}

let c = { ...a, ...b };
console.log(c);

// Ek object ki copy banao aur ek property update karo bina original ko change kiye.

let balak = {
    name: "Rahul",
    age: 20,
    marks: 85,
    city: "Mumbai"
};

let updateBalak = { ...balak };

updateBalak.name = 'Vikas';

console.log(updateBalak);
console.log(balak);


// Ek function likho jo object me nayi property add kare using spread.

let book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    pages: 350,
    isRead: false
};



let addNew = (obj, key, val) => {
    return {
        ...obj,
        [key]: val,
    };
};

let update = addNew(book, 'isGood', true);
console.log(update);
console.log(book);


// 6️⃣ Object.assign()

// Object.assign() se do objects merge karo.

let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }

let merge = Object.assign({}, obj1, obj2);
console.log(merge);


// Ek empty object me dusre object ki copy banao using Object.assign().

let emt = {};

let copy = Object.assign({}, book);
console.log(copy);

// Multiple source objects ko ek target object me merge karo.

let target = { a: 1 };

let source1 = { b: 2 };
let source2 = { c: 3 };
let source3 = { d: 4 };

Object.assign(target, source1, source2, source3);

console.log(target);


// 7️⃣ Deep Clone

// Nested object ka deep clone banao aur original change karne par clone change nahi hona chahiye.

let employee = {
    name: "Sneha Patel",
    id: "EMP456",
    salary: 60000,
    department: {
        name: "Marketing",
    },
    contact: {
        email: "sneha@company.com",
    }
};

let newOne = JSON.parse(JSON.stringify(employee));
console.log(newOne);