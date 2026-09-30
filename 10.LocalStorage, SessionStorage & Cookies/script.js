// LocalStorage, SessionStorage and Cookies

// localStorage -> aapke browser ke andar data store karna jo ki browser band hone par bhi delete nahi hoga.

// localStorage or sessionStorage me nearly 5MB tak deta store hota hai.


// localStorage -


// store kaise kare.....

localStorage.setItem("name", "Mohit");

// console par jaake localStorage likhenge to hamne localStorage me jo save kiya wo dikhega, agar browser close karenge or reopen karenge tab bhi hamari property usme dikhegi


// data fetch kaise kare....

let val = localStorage.getItem("name");

// localStorage me jo bhi item hamne save kiya use fatch karne ke liye ham getItem ka use karenge or brackets me wo property ka naam likhenge jo hame chahiye or ise ek varibale me save kar lenge fir ham console par variable ka naam likhenge to hame wo property mil jaayegi.


// remove kaise kare......

localStorage.removeItem('name');

// localStorage me jo property hai use remove karne ke liye removeItem ka use karenge or brackets me uss property ko likhenge, item remove ho jaayega.


// update kaise kare......

localStorage.setItem('name', 'Mohita');

// setItem agar koi property nahi ho to bana dega or ho to use overright kar dega yaa update kar dega.


// clear - sab clear karna....

localStorage.clear();

// Ye sab hata dega.


// localStorage sirf string store karta hai arryas or obj nahi, matlab directly ham array or obj nahi store kara sakte hai

// localStorage.setItem('Mobile', ['Apple', 'OnePlus']);

// Yaha hamne array diya par console par string ke formate me save hoga, agar hame array ke formate me save karana hai to JSON.Stringify or JSON.parse ka use karenge.

localStorage.setItem('friends', JSON.stringify(['Shubham', 'Lokendra']));

// ab ham console par localStorage.getItem("friends") likhenge to hame array ke formate me hamari value milegi, ise use karne ke liye ham JSON.parse() property ka use karenge

let fr = JSON.parse(localStorage.getItem('friends'));

// console par fr likhenge to hame hamara arrya mil jaayega



//..........................................................//


// SessionStorage -> ye aapka data temporarily store karta hai matlab ki Tab band hua or data gaya.

// Data tab close hote hi automatically delete ho jata hai
// Sirf same tab me access hota hai
// Page refresh karne par data rehta hai


// store, update , remove baaki same localStorage jesa hi....

sessionStorage.setItem("fruit", "Apple");

let a = sessionStorage.getItem('fruit');

sessionStorage.removeItem('fruit');

sessionStorage.setItem('fruit', 'grapes');

sessionStorage.clear();



// Cookies -> ye bhi data store karta hai and aapka data brwoser ke cookies naam ki property me save hota hai or ye cookie concept kam data ya light data ke liye hota hai. Nearly 4kb tak ka data store hota hai

// Cookies = small data jo browser server ke liye store karta hai

// cookie add karna

document.cookie = "username=Mohit";



/* Easy comparison (1 line rule)

localStorage - permanent storage (browser only)
sessionStorage - tab tak temporary
cookies - server communication ke liye */