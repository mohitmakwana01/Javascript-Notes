//data stored a character but value stored whole name like aaa and we want whole lenght of given value/text.

// Live Character Counter

let inp = document.querySelector('input');

let span = document.querySelector('span');

inp.addEventListener('input', function () {
    // console.log(inp.value.length);
    const left = 20 - inp.value.length;
    span.textContent = left;
    if (left < 0) {
        span.style.color = 'red';
    }
    else {
        span.style.color = 'white';
    }
});


// another


let textArea = document.querySelector('textarea');

let spn = document.querySelector('#spn');

textArea.addEventListener('input', function () {
    // console.log(textArea.value.length);
    const textLeft = 200 - textArea.value.length;
    spn.textContent = textLeft;
    if (textLeft < 0) {
        spn.style.color = 'red'
    }
    else {
        spn.style.color = 'white'
    }
});