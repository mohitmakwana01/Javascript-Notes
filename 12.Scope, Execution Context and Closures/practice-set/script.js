function createToaster(config) {
    return function (str) {
        let div = document.createElement('div');
        div.classList.add("fixed");
        div.textContent = str;

        let toast = document.querySelector('.toast');
        toast.appendChild(div);

        setTimeout(() => {
            toast.removeChild(div)
        }, config.duration * 1000)

    }

}

let toaster = createToaster({
    duration: 3,
});

toaster("This is a toaster notification!")

setTimeout(() => {
    toaster("This is also a toaster notification!")
}, 2000);


setTimeout(() => {
    toaster("ye wala nahi daalenge git par.....")
}, 4000);


//ye wala nahi daalenge git par.....