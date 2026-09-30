
// for


// for(start; end; change;) {}


for (i = 1; i < 101; i++) {
    console.log(i);
}



// while

// start 
// while(end){
//     //code
//     change
// }

let j = 1;

while (j < 31) {
    console.log(j)
    j++;
}


// do while

let k = 12;

do {
    console.log(k)
    k++;
} while (k < 10);



// for loop with break and continue

//...... break

for(i = 1; i < 101; i++) {
    console.log(i);
    if (i === 33) 
        break;
}

// 33 par loop ruk jayega


//....... continue

for(i = 1; i < 101; i++) {
    if (i === 20){
        continue;
    }
    console.log(i);
}

// 20 print nahi hoga



