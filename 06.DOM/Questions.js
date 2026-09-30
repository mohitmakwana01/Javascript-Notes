//                      QUESTIONS

//1. What is the DOM? How does it represent the HTML structure?

//2. Name the types of nodes in the DOM tree.

//3. What's the difference between an element node and a text node?

//4. Inspect the following HTML in the browser and identify each node:

/* <div>
    Hello <span>World</span>
 </div> */

//5. What is defference between getElementById and querySelector?

//6. What does getElementByClassName return? Is it an array?

//7. Use querySelectorAll to select all the buttons with class ".buy-now"

let buynow = document.querySelectorAll('.buy-now');
console.log(buynow);


//8. Task1: Select the heading of a page by ID and change its text to "Welcome to Sheriyans!".

let heading = document.querySelector('#heading');

heading.textContent = "Welcome to Sheriyans!";


//9. Select all <li> elements and print their text using a loop.

let lis = document.querySelectorAll('li');

lis.forEach((val) => {
    console.log(val.textContent);
});

//FOR LOOP SE BHI KAR SAKTE HAI...

// for (let i = 0; i < lis.length; i++) {
//     console.log(lis[i].textContent);
// }

//10. What's the difference between innerText, textContent and innerHtml?

//11. When should you use textContent instead of innerText?

//12. Task3: Select a paragraph and replace its content with:   <b>Update</b> by JavaScript

let p = document.querySelectorAll('p');
p[1].innerHTML = '<b>Update</b> by JavaScript'


//13. How do you get the src of an image using JavaScript?

let img = document.querySelector('img');

console.log(img.getAttribute('src'));
console.log(img.src);

//14. What does setAttribute() do?

img.setAttribute('src', 'https://images.unsplash.com/photo-1765466441202-76252154d4fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D')


//15. Select a link and update its href to point to https://sheryians.com

let a = document.querySelector('a');

a.setAttribute('href', 'https://sheryians.com');
a.target = '_blank';


//16. Add a title attribute to a div dynamically.

let title = document.querySelector('div');

title.setAttribute('title','Hello');


//17. Remove the disabled attribute from a button.

let btn = document.querySelector('#btn')
btn.removeAttribute('disabled');


//18. What does createElement() do? What's returned?

let h1 = document.createElement('h1');
console.log(h1);


//19. What's the difference between appendChild() and prepend()

//20. Can you remove an element using removeChild()?

//21. TASK: Create a new list item <li>New Task</li> and add it to the end of a <ul>.

let lst = document.querySelector('#lst');

let li = document.createElement('li');
li.textContent = 'New Task';

lst.append(li);


// 22. TASK: Create a new image element with a placeholder source and add it at the top of a div.

let newImg = document.createElement('img');

newImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTliktEyXdZqLz7-MSCE46M85HCdE1Ipp55dg&s')

document.querySelector('#newDiv').prepend(newImg);


// 23. TASK: Select the first item in a list and delete it from the DOM.

let newLst = document.querySelector('#newLst');

let newLi = newLst.querySelector('li');

newLst.removeChild(newLi);

 
// 24. How do you change the background color of an element?

    // element.style.backgroundColor = black;


// 25. What's teh difference between .classList .add() and .classList.toggle()?


// 26. TASK: Add a highlight class to every even item in a list.

let myList = document.querySelector('#myList');

let evnLst = myList.querySelectorAll('li');

evnLst.forEach((val, index)=> {
    if (index % 2 !== 0) {
        val.classList.add('highlight');
    }
});

// practice ke liye mene blue color add kiya odd number ke liye or ye dusra tarika hai

let oddli = document.querySelectorAll('#myList li:nth-child(odd)');

oddli.forEach((elem) => {
    elem.classList.add('bluelight');
})


// 27. Set the font size of all <p> elements to 18px using .style?

let para = document.querySelectorAll('p');

para.forEach((elem)=> {
    elem.style.fontSize = '18px';
});
