let inp = document.querySelector('#inp');

let newinp = document.querySelector('#btn');

newinp.addEventListener('click', function () {
    inp.click();
});

inp.addEventListener('change', function (dets) {
    console.log(dets);
    const file = dets.target.files[0]
    if (file) {
        newinp.textContent = file.name;
    };
});
