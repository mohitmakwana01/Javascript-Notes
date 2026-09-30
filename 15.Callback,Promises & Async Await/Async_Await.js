// ASYNC AWAIT

// Async/await is a modern way to handle asynchronous operations in JavaScript.It allows us to write asynchronous code in a synchronous looking and more readable way.

// "Async/await JavaScript mein asynchronous operations ko handle karne ka ek simple aur readable way hai.Isse asynchronous code ko hum synchronous code jaisa likh sakte hain, jisse code samajhna aur maintain karna easy hota hai."


// async keyword

// async is a keyword used before a function to make it an asynchronous function. An async function always returns a Promise.
// async keyword function ko asynchronous banata hai, aur async function hamesha ek Promise return karta hai.


// await keyword

// await is used inside an async function to wait for a Promise to settle and get its resolved value.
// await ka use Promise ke result ka wait karne ke liye hota hai. Promise resolve hone ke baad uski value milti hai.


// async function ko asynchronous banata hai aur Promise return karta hai, while await async function ke andar Promise ke result ka wait karke uski resolved value provide karta hai.



//  .then() / .catch() mein code promise chaining ke form mein hota hai wahi Async/await mein same flow step-by-step dikhta hai isliye Async/await Promises ke saath kaam karne ka cleaner aur readable syntax hai, jo .then() aur .catch() ki chaining ko simple banata hai.



// let randomNum = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let rn = Math.floor(Math.random() * 10);
//         if (rn < 5) {
//             resolve('resolve with ' + rn)
//         }
//         else {
//             reject('reject with ' + rn)
//         }
//     }, 1000);
// });

// async function getRandomNum() {
//     try {
//         let data = await randomNum;
//         console.log(data);
//     } catch (data) {
//         console.log(data);
//     }
// }

// getRandomNum(); 


//...............................................................


async function fetchUserData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await res.json()
        console.log(data.name);
    }
    catch (error) {
        console.log('error fetching data', error);
    }
}

fetchUserData();


async function fetchUserPost() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await res.json()
        console.log(data.title);
    }
    catch (error) {
        console.log('error fetching data', error);
    }

}

fetchUserPost();






