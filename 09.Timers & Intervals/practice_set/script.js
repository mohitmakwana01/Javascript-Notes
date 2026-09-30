let count = 0;

let progress = document.querySelector('.progress-bar');
let percent = document.querySelector('#percent');

let timer = setInterval(function () {
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`
        percent.textContent = `${count}%`
    }
    else {
        document.querySelector('h2').textContent = 'Downloaded';
        clearInterval(timer);
    }
}, 3000 / 100)