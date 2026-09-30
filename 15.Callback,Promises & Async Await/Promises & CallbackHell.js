// Synchronous Vs Asynchronous JS


// Synchronous JS -> Code line by line execute hota hai, ek task complete hue bina next task start nahi hota.

console.log("1");
console.log("2");
console.log("3");

// Output: 1, 2, 3


// Asynchronous JS -> Code execution wait nahi karta kisi slow operation (jaise API call, file read, timer) ke liye. Wo operation background mein chalta hai aur baaki code aage execute hota rehta hai.

console.log("1");

setTimeout(() => console.log("2"), 1000);

console.log("3");

// Output: 1, 3, 2 (2 delayed hai)

// ==================================================================


// CALLBACK PATTERN AND CALLBACK HELL


// Ek function ko doosre function mein argument ke roop mein pass karna, callback kehlata hai.


function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

greet('Mohit', function () {
    console.log('Ye function baad mein chala.');
});


// CALLBACK HELL

// Multiple nested callbacks that make asynchronous code difficult to read and maintain.

// getUser(function (user) {
//     getPost(user, function (post) {
//         getComments(post, function (comments) {
//             getLikes(comments, function (likes) {
//                 console.log(likes);
//             });
//         });
//     });
// });


//==========================================================================================================


// PROMISES: RESOLVE, REJECT, THEN, CATCH

// Promise JavaScript ka ek object hai jo represent karta hai ki koi asynchronous operation future mein complete hoga ya fail hoga.


const ticket = new Promise(function (resolve, reject) {
    const isBorded = true;
    if (isBorded) {
        resolve()
    }
    else {
        reject()
    }
});


ticket.then((data) => {
    // console.log('wohoo ', data);
    console.log('You are in the flight');
}).catch((data) => {
    // console.log('oh no ', data);
    console.log('Your flight has been cancelled');
});


// .then() ek method hai jo har Promise object pe available hota hai(JavaScript khud provide karta hai) Iska kaam hai jab Promise resolve ho jaaye, tab ek function ko call karna aur us function ko resolve wali value pass karna.


// .then() ka parameter = resolve() ke andar bheji hui value
// .catch() ka parameter = reject() ke andar bheji hui value


// Yahan data ke andar ye value aa jayegi: "You are in the flight" or Catch mein bhi same concept hai.


// Another Example

let random = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const randomNum = Math.floor(Math.random() * 10)
        if (randomNum > 5) {
            resolve('resolve with ' + randomNum);
        } else {
            reject('reject with ' + randomNum);
        }
    }, 2000)
});

random.then((data) => {
    console.log(data);
}).catch((data) => {
    console.log(data);
});



// Fetch the data from the APIs, using the promises.



// Fetch kya hai: fetch() ek built in JavaScript function hai jo browser provide karta hai, jiska kaam hai HTTP request bhejna kisi URL/Server pe aur response wapas laana - bina page reload kiye.

// YA..

// fetch() JavaScript ka built-in function hai, jiska use server/API se data request karne ke liye hota hai.

// JSON Kya hai :
// “JSON stands for JavaScript Object Notation. Ye ek lightweight data format hai, jiska use client aur server ke beech data ko store aur exchange karne ke liye kiya jata hai. Isme data key-value pair format mein hota hai aur ise humans aur machines dono easily read kar sakte hain.”

// IN ENGLISH

// “JSON stands for JavaScript Object Notation. It is a lightweight data format used to store and exchange data between a client and a server. It represents data in a key-value pair format and is easy for both humans and machines to read.”



fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        console.log('fetching the data', data);
    })
    .catch((error) => {
        console.log('error fetching post', error);
    });



// 1. Sabse pehle fetch() kya hai ?


// fetch() JavaScript ka built -in function hai, jiska use server / API se data request karne ke liye hota hai.
// Yahan hum server ko request bhej rahe hain Matlab Mujhe is URL se posts ka data chahiye.

// IMP - fetch() khud immediately data nahi deta, Ye ek Promise return karta hai. Isi wajah se hum uske saath .then() aur .catch() use kar sakte hain.


// 2. .then((res) => res.json())


// Ab fetch() ne server ko request bheji. Jab server ka response aa jata hai, to pehla .then() execute hota hai.
// (res) => res.json() => Yahan res ek parameter hai, res mein server ka Response object aata hai.

/* fetch()
   ↓
 Server ko request
   ↓
 Server ka response
   ↓
 res */


// 3. res.json() kya kar raha hai?

// Server ne jo response body bheji hai, wo JSON format mein ho sakti hai. res.json() us response body ko parse karke JavaScript object/array mein convert karta hai. Aur important baat: res.json() bhi Promise return karta hai.

/*

Server Response
      ↓
   res.json()
      ↓
Promise
      ↓
JavaScript Object/Array

*/


// 4. Ab doosra.then((data) => ...)

/*

.then((data) => {
    console.log('fetching the data', data);
})

*/

// Jab res.json() ka Promise successfully resolve ho jata hai, tab doosra.then() execute hota hai. Yahan: data mein parsed JavaScript data aa jata hai.


// 5. .catch((error) => ...)

// Agar Promise chain mein koi error/rejection hoti hai, to .catch() execute hota hai.




//                                  🔥 Pura code ek flow mein


/*

fetch(URL)
   ↓
Server ko request bheji
   ↓
Promise return hua
   ↓
Server ne response diya
   ↓
.then((res) => ...)
   ↓
res = Response object
   ↓
res.json()
   ↓
JSON response ko JS object / array mein parse kiya
   ↓
Promise return hua
   ↓
.then((data) => ...)
   ↓
data = actual parsed posts
   ↓
console.log(data)

*/


//          Aur agar kahin error:


/*
        ❌ Error
           ↓
       .catch ()
           ↓
        error

*/


// Ek line mein:  fetch() request bhejta hai → res response receive karta hai → res.json() response ko parse karta hai → data mein actual JavaScript data milta hai.



// ===========================================================================

// Fetch the data from the APIs Using functions


// 'https://jsonplaceholder.typicode.com/users'
// 'https://jsonplaceholder.typicode.com/posts'           



function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data) => {
            console.log('fetching user data', data);
        })
        .catch((data) => {
            console.log('error fetching data', data);
        })
}

function fetchPost() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            console.log('fetching post data', data);
        })
        .catch((data) => {
            console.log('error fetching data', data);
        })
}


// Yaha hamne resolve or reject ka use nahi kiya kyonki fetch() khud ek Promise return karta hai (built-in), aur uske andar resolve/reject already JavaScript engine handle kar raha hai internally,  resolve/reject sirf tab manually likhne padte hain jab ham khud ka custom Promise banata hai. (new Promise((resolve, reject) => {...})


fetchUser().then(() => {
    fetchPost()
});


// Yaha ham iss tarike se call isliye karenge kyonki hame pahle fetchUser ka data chahiye or wo mil jaayega yaa resolve hoga  to  .then chalega or usme hamne fetchPost call kiya hai to wo chal jaayega ye ek chaining pattern hai taaki fetchPost() tabhi chale jab fetchUser() pura complete ho chuka ho, ek ke baad ek (sequential), parallel nahi.. pahle fetchUser chala wo resolve hua to fetchPost agar iski jagah ham fetchPost() or next line mein fetchUser() ko call kar dete to dono ek saath (parallel) shuru ho jaate - kaun pehle finish karega ye guarantee nahi hota.



