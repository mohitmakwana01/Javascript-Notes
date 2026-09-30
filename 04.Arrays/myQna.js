//                                                              .PUSH()


// 1. Create an array of 3 games and push "Cricket" into it.

let game = ['football', 'basketball', 'tennis'];

game.push('Cricket');
console.log(game);


// 2. Push 2 numbers at once into this array → [10, 20, 30]

let num = [10, 20, 30];

num.push(40, 50);
console.log(num);


// 3. Push one new fruit and print the new length of array → ["Apple", "Banana"]

let fruit = ["Apple", "Banana",];

fruit.push("Grapes");
console.log(fruit.length);


// 4. Create an empty array and push 5 names one-by-one using push().

let emt = [];

emt.push('one', 'two', 'three', 'four', 'five');
console.log(emt);


// 5. Write a function addStudent(arr, name) jo array me name push kare aur updated array return kare.


let addStudent = (arr, name) => {
    arr.push(name);
    return arr;
}

let student = ['Aman', 'Riya'];
console.log(addStudent(student, 'Mohit'));


// 6. Write a function addColor(palette, color) that uses the spread operator to create a new array, adds the given color at the beginning of that new array without modifying the original palette, and then returns the updated array.


let addColor = (palette, color) => {
    let newArr = [...palette];
    newArr.push(color);
    return newArr;
}

let palette = ["Blue", "Green"];
console.log(addColor(palette, "Red"));



//                                                              .POP()


// 1. Pop the last item from this array → [1, 2, 3, 4]

let itm = [1, 2, 3, 4];

itm.pop();
console.log(itm);


// 2. Pop last item & print which item was removed → ["Red", "Blue", "Green"]

let color = ["Red", "Blue", "Green"];

console.log(color.pop())


// 3. Pop 2 items from this array (use pop twice) → ["A", "B", "C", "D"]

let letters = ["A", "B", "C", "D"];

letters.pop()
letters.pop()

console.log(letters);


// 4. After popping, print updated array length → [5, 6, 7]

let number = [5, 6, 7];

number.pop()
console.log(number.length);


// 5. Write a function removeLast(arr) jo last item remove kare aur removed item return kare.

let arr = ['Audi', 'Tesla', 'BMW', 'Fortunar'];

let removeLast = (arr) => {
    return arr.pop()
}

console.log(removeLast(arr));


// 6. Given an array let phones = ["Samsung", "iPhone", "Pixel", "OnePlus"]; write a program that removes the last two items from the array using the pop() method. Print the removed items as they are removed, and then print the updated array at the end.

let phones = ["Samsung", "iPhone", "Pixel", "OnePlus"];

console.log(phones.pop());
console.log(phones.pop());

console.log(phones);



//                                                              shift()


// 1. Create an array ["Red", "Blue", "Green"], Shift the first color and print updated array.

let colors = ["Red", "Blue", "Green"];

colors.shift();
console.log(colors);


// 2. Remove the first item using shift() and print removed element. Array [10, 20, 30, 40], 

let numbers = [10, 20, 30, 40];

console.log(numbers.shift());


// 3. Remove two elements from start using shift (2 times) → then print updated array. let fruits = ["Apple", "Banana", "Cherry", "Mango"];

let fruits = ["Apple", "Banana", "Cherry", "Mango"];

fruits.shift();
fruits.shift();

console.log(fruits);


// 4. Write a function removeFirst(arr) that removes the first element from the given array using the shift() method and returns the removed element. Call the function and print the returned value.


let heros = ['superman', 'spiderman', 'ironman', 'Thor'];

let removeFirst = (arr) => {
    return arr.shift()
}

console.log(removeFirst(heros));
console.log(heros);


// 5. Given the array let tasks = ["Task1", "Task2", "Task3"];, write a program that keeps removing one task at a time from the beginning of the array using the shift() method, and prints each removed task in the format:

// Task Processing: TaskX
// Continue this process until the array becomes empty.

let tasks = ["Task1", "Task2", "Task3"];

while (tasks.length > 0) {
    let current = tasks.shift()
    console.log("Task Processing:", current);
}


// 6. Write a function enqueueDequeue(queue, item):

// Agar queue empty hai → item ko push karo
// Agar queue empty nahi hai → shift() se ek item remove karo
// Return updated queue

let queue = [];

let enqueueDequeue = (queue, item) => {
    if (queue.length === 0) {
        queue.push(item)
    }
    else {
        queue.shift()
    }

    return queue;
}

console.log(enqueueDequeue(queue, "Item1"));
console.log(enqueueDequeue(queue, "Item2"));
console.log(enqueueDequeue(queue, "Item3"));



//                                                                  unshift()


//1. Use unshift("Cow") and print updated array.

let animals = ["Dog", "Cat"];

animals.unshift("Cow");
console.log(animals);

//2. Add 0 to the beginning using unshift() and print updated array.

let add = [5, 10, 15]

add.unshift(0)
console.log(add);

//3. Create a function addAtStart(arr, item)

// Start me item insert kare using unshift()
// Updated array return kare
// Function test karke print karo

let Arr = ['two', 'three']

let addAtStart = (Arr, item) => {
    Arr.unshift(item)
    return Arr;
}

console.log(addAtStart(Arr, 'one'));


//4. Given an array ["Pen", "Pencil", "Eraser"], add "Marker" to the beginning of the array using the unshift() method. After that, add "Sharpener" to the beginning as well. Finally, print the updated array.

let items = ["Pen", "Pencil", "Eraser"];

items.unshift("Sharpener", "Marker");
console.log(items);


//5. Given an array let line = ["Person2", "Person3"];

// Add "Person1" to the beginning of the array using the unshift() method.
// Then remove one person from the front of the array using the shift() method.
// Finally, print the updated array.

let line = ["Person2", "Person3"];

line.unshift("Person1");
line.shift()

console.log(line);


//6. Given the array let numbers = [30, 40, 50]; Write a loop that adds the numbers 1, 2, and 3 to the beginning of the array using unshift(). After the loop, the final result should be: [3, 2, 1, 30, 40, 50]

let Numbers = [30, 40, 50];

for (let i = 1; i <= 3; i++) {
    Numbers.unshift(i)
}

console.log(Numbers);


//                                                          slice()



//1. Use slice to copy the entire array into a new array and print the new array. Create an array ["A", "B", "C", "D"]

let slc = ["A", "B", "C", "D"];

let newSlc = slc.slice()
console.log(newSlc);


//2. Given let nums = [10, 20, 30, 40, 50]; Use slice to extract [20, 30] and print result.

let nums = [10, 20, 30, 40, 50];

let NewNums = nums.slice(1, 3)
console.log(NewNums);


//3. Given let cities = ["Delhi", "Mumbai", "Pune", "Goa", "Chennai"]; Use slice to print only the middle three cities → "Mumbai", "Pune", "Goa"

let cities = ["Delhi", "Mumbai", "Pune", "Goa", "Chennai"];

let NewCities = cities.slice(1, 4);
console.log(NewCities);


//4. Write a function getLastTwo(val) Jo array ke last 2 elements return kare slice() se.

let pen = ['Cello', 'Montex', 'Goldex', 'Traimax'];

let getLastTwo = (val) => {
    return val.slice(-2);
}

console.log(getLastTwo(pen));


//5. Given let items = ["Pen", "Pencil", "Eraser", "Sharpener", "Scale"]; Use slice to extract: First 2 items, Last 2 items Print both separately.

let Items = ["Pen", "Pencil", "Eraser", "Sharpener", "Scale"];

let firstItem = Items.slice(0, 2)
console.log(firstItem);

let lastItem = Items.slice(-2)
console.log(lastItem);


//6. Write a function copyWithoutLast(arr), Jo last element ko remove karta hua new array return kare, Original array modify nahi hona chahiye, Use only slice().

let copyWithoutLast = (val) => {
    return val.slice(0, val.length - 1)
}

let pensil = ['Apsara', 'Natraj', 'Doms']

console.log(copyWithoutLast(pensil));
console.log(pensil);


//                                                          splice()

//1. Given ["Red", "Blue", "Green"], Use splice to remove "Blue" and print updated array.

let clr = ["Red", "Blue", "Green"];

clr.splice(1, 1)
console.log(clr);


//2. Given [100, 200, 300, 400]; Use splice to remove last element using (3, 1) Print updated array.

let nmb = [100, 200, 300, 400];

nmb.splice(3, 1);
console.log(nmb);


//3. Insert "Banana" and "Kiwi" into: let fruits = ["Apple", "Orange", "Grapes"]; Insert at index 1, No removal

let frt = ["Apple", "Orange", "Grapes"];

frt.splice(1, 0, "Banana", "Kiwi")
console.log(frt); // [ 'Apple', 'Banana', 'Kiwi', 'Orange', 'Grapes' ]


//4. Write function removeAt(arr, index) splice se remove karo removed element return karo.

let count = ['one', 'two', 'three', 'four', 'five'];

let removeAt = (arr, index) => {
    return arr.splice(index, 1)[0];
}

console.log(removeAt(count, 2)); // three
console.log(count); // ['one','two','four','five']


//5. Given: let score = [10, 20, 30, 40, 50];, Remove 20, 30. Insert 25, 35 in place, Print updated array.

let score = [10, 20, 30, 40, 50];

score.splice(1, 2, 25, 35);
console.log(score); // [ 10, 25, 35, 40, 50 ]


//6. Given: let cart = ["Item1", "Item2", "Item3", "Item4"];. Write a function updateCart(val): Pehla item remove karo, Last me "NewItem" add karo (splice use karke), Updated array return karo.

let cart = ["Item1", "Item2", "Item3", "Item4"];

let updateCart = (val) => {
    val.splice(0, 1,);
    val.splice(val.length, 0, 'NewItem');
    return val;
}

console.log(updateCart(cart));


//                                                   reverse(), sort()

//1. reverse() use karke reverse order me print karo.

let Letters = ["A", "B", "C", "D"];

Letters.reverse()
console.log(Letters);

//2. sort() se array ko ascending order me sort karo aur print karo.

let numbs = [9, 5, 2, 8];

numbs.sort()
console.log(numbs);


//3. let names = ["Riya", "Aman", "Karan", "Zara"];. Alphabetically sort karo, Fir reverse karo, Final array print karo.


let names = ["Riya", "Aman", "Karan", "Zara"];

names.sort()
names.reverse()
console.log(names);


//4. Write a function sortFruits(arr), Jo fruits ko alphabetically sort karke return kare. Call karke print karo.


let sortFruits = (arr) => {
    return arr.sort()
}

let frts = ['Grapes', 'Papaya', 'Mango', 'Apple', 'Banana']
console.log(sortFruits(frts));


//5. let numbers = [100, 5, 20, 300, 15];. sort() default string compare karta hai, To numbers ko increasing order me sort karo sahi tarike se (use correct compare function).

let nmbrs = [100, 5, 20, 300, 15];

nmbrs.sort((a, b) => a - b)
console.log(nmbrs);

//6. let mix = ["Banana", "Apple", "Orange", "Kiwi", "Mango"];
// First alphabetically sort karo
// Last 2 fruits reverse order me show karo.

let mix = ["Banana", "Apple", "Orange", "Kiwi", "Mango"];

mix.sort();
console.log(mix); // ['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']

let lastTwoReverse = mix.slice(-2).reverse();
console.log(lastTwoReverse); // [ 'Orange', 'Mango' ]


//                                                        MAP()

//1. map use karke har number ko 2 se multiply karein

let nbrs = [1, 2, 3, 4];

let NewNbrs = nbrs.map((val) => {
    return val * 2
})

console.log(NewNbrs);

//2. map use karke har naam ka first letter capital karo

let Names = ["mohit", "riya", "arjun"];

let update = Names.map((val) => {
    return val[0].toUpperCase() + val.slice(1)
})

console.log(update);


//3. GST 18% add karke new array return karo.
// Output: [118, 236, 354]

let prices = [100, 200, 300];

let NewPrices = prices.map((val) => {
    return val * 1.18
})

console.log(NewPrices);

//4. Write a function doubleValues(arr). Array ke each number ko double karke return kare, Function call karke print karo.

let doubleValues = (arr) => {
    return arr.map((val) => val * 2)
}

let double = [3, 4, 5, 6, 7];
console.log(doubleValues(double));

//5. map se sirf names ki array banao
// Output: ["Aman", "Riya", "Karan"]

let users = [
    { name: "Aman", age: 18 },
    { name: "Riya", age: 22 },
    { name: "Karan", age: 25 }
];

let namesArr = users.map((val) => val.name)
console.log(namesArr);

//6. map() se har word ko:

// uppercase
// aur uski length ke saath string banani hai.
// Output: ["HELLO (5)", "WORLD (5)"]


let words = ["hello", "world"];

let NewArr = words.map((val) => {
    return `${val.toUpperCase()} (${val.length})`
})

console.log(NewArr);

// another

let mobile = ['oneplus', 'samsung', 'apple', 'oppo', 'motorola'];

let result = mobile.map((val) => `${val.toUpperCase()} (${val.length})`).sort()

console.log(result);


//                                                         FILTER()


//1. You are given an array of numbers: let digits = [3, 10, 7, 8, 21, 14];
// Write a program that returns a new array containing only the even numbers from this list.

let digits = [3, 10, 7, 8, 21, 14];

let newDigits = digits.filter((val) => val % 2 === 0)
console.log(newDigits);


//2. Consider the array: let texts = ['cat', 'elephant', 'sun', 'flower', 'moon']; Create a filtered array that contains only the words whose length is greater than 5.

let texts = ['cat', 'elephant', 'sun', 'flower', 'moon'];

let NewText = texts.filter((val) => {
    if (val.length > 5) return true;
})

console.log(NewText);

//3. You have an array of user objects: Write a program that filters and returns only the users who are 18 years old or above.

let people = [
    { name: 'Aarav', age: 16 },
    { name: 'Mira', age: 20 },
    { name: 'Karan', age: 14 },
    { name: 'Sara', age: 22 }
];

let NewPeople = people.filter((val) => {
    if (val.age >= 18) return true;
})

console.log(NewPeople);


//4. Given an array of items: Filter this array to return only the items that cost less than 500.

let elements = [
    { title: 'Bag', price: 1200 },
    { title: 'Pen', price: 40 },
    { title: 'Shoes', price: 800 },
    { title: 'Cover', price: 150 }
];

let NewElements = elements.filter((val) => {
    return val.price < 500;
})

console.log(NewElements);


//5. You have the following array containing truthy and falsy values: let mixed = [0, 1, false, 2, '', 3, null, 'hello', undefined, 5];. Write a filter-based solution that removes all falsy values and returns only the truthy ones.

let mixed = [0, 1, false, 2, '', 3, null, 'hello', undefined, 5];

let NewMixed = mixed.filter((val) => val)

console.log(NewMixed);

//6. Given an array of product names: Filter and return only the products that contain the word "Apple" in their name.

let products = [
    'Apple iPhone',
    'Samsung Galaxy',
    'Apple Watch',
    'Vivo V29',
    'Samsung Buds',
    'Apple MacBook'
];

let filterProduct = products.filter((val) => {
    return val.includes("Apple")
})

console.log(filterProduct);



//                                                          REDUCE()

//1. You are given an array of numbers:. let points = [10, 20, 30, 40];. Write a program using reduce() that returns the total sum of all numbers.

let points = [10, 20, 30, 40];

let NewPoints = points.reduce((acc, val) => acc + val, 0);
console.log(NewPoints);


//2. Consider the following list of expenses for a week:. let expenses = [120, 80, 50, 200, 100];. Use reduce() to calculate the total money spent.

let expenses = [120, 80, 50, 200, 100];

let TotalExpenses = expenses.reduce((acc, val) => acc + val, 0)
console.log(TotalExpenses);


//3. You have an array of strings representing messages:. let msgs = ["Hi", "Hello", "How", "Are", "You"];. Use reduce() to combine all words into one single sentence (with spaces).

let msgs = ["Hi", "Hello", "How", "Are", "You"];

let sentence = msgs.reduce((acc, val) => {
    return acc + " " + val
})

console.log(sentence);


//4. You are given an array of products with their prices:. Use reduce() to calculate the total price of all products.

let store = [
    { item: "Pen", price: 20 },
    { item: "Notebook", price: 50 },
    { item: "Bag", price: 700 }
];

let totalPrice = store.reduce((acc, val) => acc + val.price, 0);
console.log(totalPrice);


//5. You have a list of numbers including positive and negative values: let values = [5, -2, 10, -4, 7, -1];. Using reduce(), calculate the sum of only the positive numbers.

let values = [5, -2, 10, -4, 7, -1];

let newValues = values.reduce((acc, val) => {
    if (val > 0) return acc + val;
    return acc;
}, 0)

console.log(newValues);

//6. Consider an array representing the marks of students in a test:. let marks = [85, 92, 76, 88, 95];. Use reduce() to find the highest mark in the list.

let marks = [85, 92, 76, 88, 95];

let highestMark = marks.reduce((acc, val) => {
    return acc > val ? acc : val;
})

console.log(highestMark);



//                                                            FIND()

//1. You have an array of numbers:, let scores = [12, 5, 8, 130, 44];, return the first number greater than 10.

let scores = [12, 5, 8, 130, 44];

let newScore = scores.find((val) => val > 10);
console.log(newScore);


//2. Consider an array of strings:, let names = ["Riya", "Aman", "Karan", "Zara"];,  return the first name starting with "K".

let clients = ["Riya", "Aman", "Karan", "Zara"];

let clientsNew = clients.find((val) => val.includes("K"))
console.log(clientsNew);


//3. You are given an array of objects representing students, Use find() to return the first student who is 18 or older.

let students = [
    { name: "Aarav", age: 16 },
    { name: "Mira", age: 20 },
    { name: "Sara", age: 18 }
];

let fndStudent = students.find((val) => val.age > 18);
console.log(fndStudent);


//4. Given an array of numbers:, let data = [3, 9, 12, 7, 15];, return the first number divisible by 3 and greater than 10.

let data = [3, 9, 12, 7, 15];

let newData = data.find((val) => {
    if (val > 10 && val % 3 === 0) return val;
})

console.log(newData);


//5. You have an array of orders: Use find() to get the first order that is still pending.

let orders = [
    { id: 1, status: "pending" },
    { id: 2, status: "delivered" },
    { id: 3, status: "pending" }
];

let fndOrder = orders.find((val) => val.status === "pending")
console.log(fndOrder);


//6. Consider an array of products:, Use find() to return the first product that costs less than 100.

let things = [
    { name: "Bag", price: 500 },
    { name: "Shoes", price: 800 },
    { name: "Pen", price: 50 }
];

let fndThings = things.find((val) => val.price < 100);
console.log(fndThings);


//                                                   some() & every()

//.1 You are given a list of digits representing test scores. Write a program using some() to check whether at least one score is greater than 90.

let numbersList = [45, 78, 93, 76, 99, 91];

let newNumberList = numbersList.some((val) => val > 90);
console.log(newNumberList);


//2. You have a collection of small text fragments. Use every() to verify if all texts have a length of at least 3 characters.

let text = ['one', 'two', 'three', 'four', 'five'];

let newText = text.every((val) => val.length >= 3);
console.log(newText);

//3. You are given an inventory of product records, each containing a price field. Use some() to check whether the catalog contains any product costing less than 100.

let catalog = [
    { title: "Keyboard", price: 450 },
    { title: "Pen", price: 30 },
    { title: "Headphones", price: 1200 }
];

let newCatalog = catalog.some((val) => val.price < 100);
console.log(newCatalog);

//4. You have an array of user profiles with a boolean field verified. Use every() to determine if all users in the list are verified.

let profiles = [
    { user: "Aarav", verified: true },
    { user: "Mira", verified: true },
    { user: "Karan", verified: false }
];

let check = profiles.every((val) => val.verified);
console.log(check);

//5. A dataset contains multiple employee objects, each with fields name, department, and experience.
// Use some() to check whether there exists at least one employee who works in the "IT" department and has more than 5 years of experience.

let employees = [
    { name: "Rohit", department: "Sales", experience: 3 },
    { name: "Neha", department: "IT", experience: 2 },
    { name: "Arjun", department: "IT", experience: 7 }
];

let experience = employees.some((val) => {
    if (val.department === "IT" && val.experience > 5) return val;
});
console.log(experience);

//6. You are given a collection of order objects. Each order contains an array of items with a quantity.
// Use every() to check whether all orders are valid — meaning each order must have at least one item whose quantity is greater than 0.

let Orders = [
    {
        id: 1,
        items: [{ product: "Pen", quantity: 2 }, { product: "Notebook", quantity: 1 }]
    },
    {
        id: 2,
        items: [{ product: "Bag", quantity: 0 }, { product: "Shoes", quantity: 1 }]
    },
    {
        id: 3,
        items: [{ product: "Bottle", quantity: 3 }]
    }
];

let output = Orders.every((val) => val.items.some(item => item.quantity > 0));
console.log(output);


//                                           Destructuring – Practice Questions

//1. You are given an object containing profile details such as name, age, and city. Write a program using destructuring to extract all three fields into separate variables.

let profile = {
    name: "Aarav",
    age: 22,
    city: "Mumbai"
};

let { name, age, city } = profile
console.log(name);
console.log(age);
console.log(city);


//2. A function returns an array containing the top three most purchased products. Use array destructuring to assign each product to a separate constant.

let topProducts = ["Laptop", "Earphones", "Smartwatch"];

let [a, b, c] = topProducts;
console.log(a);
console.log(b);
console.log(c);

//3. You have an object representing a laptop with nested properties like specs.processor and specs.ram. Use nested destructuring to extract both processor and RAM into individual variables.

let laptop = {
    brand: "Dell",
    specs: {
        processor: "i5",
        ram: "16GB"
    }
};

let {one} = laptop.specs[processor]
console.log(one);

//4. A list contains information about an exam result in the form [score, grade, passed]. Use destructuring to assign each item to its correct variable.

//5. You receive an object representing a book with fields title, author, and a nested field publisher.name. Use destructuring to extract title, author, and publisher name.

//6. Create a function that takes an object containing x and y coordinates and logs them. Use parameter destructuring inside the function.



//                                          Spread Operator – Practice Questions

//1. A list of city names is given. Use the spread operator to create a new list where a few extra city names are added at the end.

//2. You are given two arrays representing morning and evening tasks. Use the spread operator to merge them into one combined task list.

//3. A user object contains fields like name and email. Create a new object using the spread operator that adds a new field called status without modifying the original object.

//4. You have an array of numbers and want to pass them as individual arguments to a function that calculates the maximum value. Use the spread operator to do this.

//5. A product object contains multiple details such as id, name, and price. Use the spread operator to create a modified copy where only the price is changed.

//6. You maintain a list of favorite movies and want to clone it so you can modify the new one without affecting the original. Use the spread operator to create a perfect copy.