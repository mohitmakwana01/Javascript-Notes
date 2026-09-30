// Auto Hide Alert Banner After 3s

let count = 0;

let progress = document.querySelector('#progress');
let percent = document.querySelector('#percent');

let popup = document.querySelector('.alert');


let timer = setInterval(function () {
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`
        percent.textContent = `${count}%`
    }
    else {
        document.querySelector('h2').textContent = 'Download'
        clearInterval(timer);

        popup.style.display = 'block';

        setTimeout(function () {
            if (percent.textContent === '100%') {
                popup.style.display = 'none';
            }
        }, 3000)
    }
}, 5000 / 100);



