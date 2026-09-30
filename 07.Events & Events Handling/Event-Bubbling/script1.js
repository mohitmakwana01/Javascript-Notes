// Event Bubbling And Capturing

// jispe event aayega agar uspar listener nahi hua to hamara event uske parent par listener dhundhega aur aisa karte karte upar ki taraf move karega. ise event bubbling kahte hai.


// Event Bubbling

// Jab kisi child element par event hota hai,
// to wo event child se parent, phir grandparent tak upar ki taraf propagate hota hai.


document.querySelector('#nav').addEventListener('click', function() {
    alert('clicked');
});


// yaha navbar par click karenge to event chalega, par agar hum button ya <a> par click karenge to tab bhi event chalega jabki button or <a> child element hai, jese hi ham button par click karenge to button par check hoga ki kya isme eventListener hai agar nahi hai to click event jump karke parent ke pass jayega or check karega waha hai or agar waha hai to chal jaayega, agar nahi hai to wo agle parent element ki taraf move karega,  jese iss case me nav par event hai to chal gaya, ise kahte hai event bubbling. 

// its keep moving upwords until its found eventListener


//.........................................................//


// EXAMPLE

let ul = document.querySelector('ul');

ul.addEventListener('click', function(dets) {
    dets.target.classList.toggle('lt');
});

