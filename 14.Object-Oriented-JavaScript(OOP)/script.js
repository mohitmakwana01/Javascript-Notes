//1. CONSTRUCTOR FUNCTIONS AND PROTOTYPES

// CONSTRUCTOR FUNCTION

// Hamein seekhna hai factories banana, matlab ki aap ek baar blueprint bana do ki har object kaisa dikhega and hum log naye naye objects with diffrent values bana paayenge, Yahi upar upar se poora kaam hai OOPS mein.


function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function (text) {
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = color;
        document.body.appendChild(h1);
    }
}

let pencil1 = new CreatePencil('Natraj', 5, 'white', 'Natraj Pencil');

let pencil2 = new CreatePencil('Doms', 10, 'red', 'DOMS');

// Ye jo new hai wo ek blank object hai or ye jo 'this' hai (this.name) etc iski value blank obj ho jaayegi or fir usme ham jo bhi value denge wo hamare new obj me aa jaayegi threw "this".

// har naye obj me sabka apna this hota hai. matlab sabki apni value hogi.

// this ki value function me window hoti hai par jab ham Pass karte hai or new lagate hai to value Obj ho jaati hai.  

// Har object ke andar write function(method) alag-alag banega jisse Memory waste hogi ye naa ho iske liye hum prototype ka use karenge. jo neeche diya hai prototype section mein.


//2. PROTOTYPES


// prototype ek aisa object hota hai jo constructor function ke saath automatically attach hota hai, jisme hum shared methods aur properties rakhte hain, taaki sab objects unhe access kar sake bina duplicate banaye.


function Mobile(company, series, price, color) {
    this.brand = company;
    this.series = series;
    this.price = price;
    this.color = color;
}

let mobile1 = new Mobile('OnePlus', 'Nord', 25000, 'blue');
let mobile2 = new Mobile('Samsung', 'A-Series', 35000, 'green');


Mobile.prototype.write = function (txt) {
    let h1 = document.createElement('h1');
    h1.textContent = txt;
    h1.style.color = this.color;
    document.body.appendChild(h1);
}

console.log(mobile1.write('Hellooooooo'));
console.log(mobile2.write('Hiiiiiiiiii'));

// Yaha mobile1 or mobile2 ke pass write() function directly nahi hai wo prototype chain se aata hai, JS pahle call hua function obj me dhundhta hai or waha nahi milta hai to prototype me check karta hai.

// Yaha Hum dono objects(mobile1 or mobile2) me ye prototype ko access kar sakte hai.

// Real reason kyu use karte hai:

// Memory efficient
// Clean structure
// OOP jaisa behavior (inheritance possible)




//3. NEW KEYWORD BEHAVIOUR

// new ka kaam ek blank obj banana

// "JavaScript mein new keyword ek constructor function ya class se ek naya instance (object) banane ke liye use hota hai, example          let car1 = new Car("BMW", 5000000, "black");

//  Jab hum new use karte hain, toh ye main 4 kaam karta hai:

//1. Ek naya empty object create karta hai.
//2. Us object ko Prototype chain se link karta hai. [prototype mein koi method (jaise drive()) hai, toh ye naya object use access kar payega.]
//3. this keyword ko us naye object se bind kar deta hai. 
//4. Function se us naye object ko return karta hai." [Aapko manually return likhne ki zaroorat nahi padti, new keyword ye kaam khud kar leta hai.]





//4. ES6 CLASSES: CONSTRUCTOR, METHODS, EXTENDS, SUPER

// CLASS JavaScript me ek blueprint hota hai jisse hum multiple similar objects bana sakte hain. (iska use ham tab karte hai jab bulk me similar si obj ko create karna hota hai to unhe ham classes se create karte hai)


class Laptop {
    constructor(company, price, generation, color) {
        this.company = company;
        this.price = price;
        this.generation = generation;
        this.color = color;
    }

    write(txt) {
        let h1 = document.createElement('h1');
        h1.textContent = txt;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase() {
        document.body.querySelectorAll('h1').forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    }
}

let lap1 = new Laptop('DEll', 50000, 'i7', 'blue');
let lap2 = new Laptop('HP', 70000, 'i9', 'green');

console.log(lap1);
console.log(lap2);

// Yaha Constructor ka use ho gaya or write() or erase() method ho gaye.


//  CONSTRUCTOR, METHODS

// constructor ek special method hota hai jo initial values set karta hai or object banate time automatically call hota hai manually karne ki jarurat nhi hoti.


// Constructor obj banate time chalta hai.

// Ye values ko set karne ke kaam aata hai. Jo values ko ham bhejte hai bracket mein ("HP", 65000, 'i9'), wo constructor ke parameters mein  chali jaati hain.

// Default Constructor: Agar aap apni class mein constructor nahi likhte, toh JavaScript piche se ek khali constructor() {} apne aap add kar deta hai.





// EXTENDS(Inheritance), SUPER

// Extends ka use karke ek class dusri class ke properties aur methods inherit karti hai.
// extends = parent se cheeze lena

// Super ka use parent class ke constructor ya methods ko call karne ke liye hota hai.
// super = parent ko call karna


// Jese hum likhte hai:
// class GamingLaptop extends Laptop      // GamingLaptop ko Laptop ke sab features mil jaate hain

// super() = parent (Laptop) ka constructor call

// Simple flow:

//1. Child class banayi (extends)
//2. Parent constructor call kiya (super)
//3. Apni extra properties/methods add ki



class User {
    constructor(name, address, username, email) {
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = 'user'
    }

    checkRole() {
        return `You are a: ${this.role}`
    }

    write(text) {
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name}: ${text}`;
        document.body.appendChild(h1);
    }
}


let u1 = new User('Mohit', 'Indore', 'mohit_01', 'mohitm@mail.com');
let u2 = new User('Sudeep', 'Hariyana', 'sudeep_09', 'sudeepk@mail.com');

console.log(u1.write('Hello'));
console.log(u2.write('Hello'));


class Admin extends User {
    constructor(name, address, username, email, department) {
        super(name, address, username, email)
        this.role = 'admin';
        this.department = department;
    }
    remove() {
        document.querySelectorAll('h1').forEach((elem) => {
            elem.remove();
        })
    }
}

let a1 = new Admin('Sumit', 'India', 'admin-sumit', 'admin@123.com', 'Finance');

console.log(a1.write('admin here'));

console.log(a1.remove()); // a1 ne User or Admin ki saari h1 remove kar dii.

// yaha admin ka khud ka constructor hai 

// Jab child class (Admin) ka apna koi naya property ho, tab constructor likhna padta hai. Aur jab constructor likha, toh super() bhi compulsory hai.

// super() mein sirf wahi bhejenge jo User(Parent) ka constructor maangta hai:

// “Jab Admin class, User ko extend karti hai, aur agar Admin me constructor banate hain, to hame parent class (User) ke constructor ko super() ke through call karna padta hai, aur usme required values pass karni hoti hain. Uske baad hum Admin ki apni properties bhi add kar sakte hain.”

// Agar Admin me constructor hi na likhe, to JS automatically parent ka constructor use kar lega Tumhe super() likhne ki zarurat nahi padegi. lekin ye line chhoot jaati - this.role = 'admin' kabhi set nahi hota. Toh constructor likha sirf isliye ki ek extra kaam karna tha - role ko 'admin' set karna.

// super(name, address, username, email) basically ye keh raha hai: "Pehle User(Parent) ka constructor chala, uske saare kaam ho jaane de - this.name etc, set ho jaane de - phir mein this.role = 'admin' set karunga.

// Agar super() nahi likhe to - ❌ Error aayega: ReferenceError: Must call super constructor in derived class before accessing 'this'



//   CLASSICAL INHERITANCE VS PROTOTYPAL INHERITANCE


// CLASSICAL INHERITANCE

// classes banana and unhe extend kardena
// In short: Class-based style inheritance using class and extends.

// Ye modern JavaScript ka style hai jisme tum classes use karte ho - bilkul Java ya C++ jaisa feel aata hai. Tum ek parent class banate ho aur phir child class usko inherit karti hai.

// Iska main advantage ye hai ki code clean, readable aur easy lagta hai. But ek important baat - ye asli classical inheritance nahi hai, sirf upar se aisa dikhta hai. Andar se ye bhi prototype system hi use karta hai.


// example

class Animal {
    constructor(type) {
        this.type = type;
    }

    sound() {
        console.log(`This is a ${this.type}`);
    }
}

class Dog extends Animal {
    constructor(type, breed) {
        super(type);
        this.breed = breed;
    }
}

const dog1 = new Dog("animal", "Labrador");
dog1.sound();


// PROTOTYPAL INHERITANCE

// Ek object hai aap chaaho to uski saari props/methods ko inherit kara dete ho doosre object mein.

let a = {};
let b = Object.create(a);

// Object.create(a) ka matlab hai a me jo bhi hoga wo b ke paas bhi hai. b, a object se hi linked hai as prototype Na ki a ke prototype se directly.

// In short: Objects directly inherit from other objects using prototypes.


// Ye JavaScript ka original system hai.
// Yaha par objects directly dusre objects se properties aur methods lete hain using prototype chain.

// Simple words me - ek object dusre object se linked hota hai, aur agar usme koi cheez nahi milti to wo upar wale (parent) object me search karta hai.

// Ye thoda complex lag sakta hai samajhne me, lekin ye hi JS ka real core concept hai.


function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.showBrand = function () {
    console.log(`Brand is ${this.brand}`);
};

function Car(brand, model) {
    Vehicle.call(this, brand);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car1 = new Car("Toyota", "Camry");
car1.showBrand();


