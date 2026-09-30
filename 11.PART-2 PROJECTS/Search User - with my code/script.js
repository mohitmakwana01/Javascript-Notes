let users = [
    {
        name: "Ryan Carter",
        pic: "https://images.unsplash.com/photo-1549237511-bbe6a0979d6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        bio: "walking through midnight thoughts 🌙🖤 | late night thinker"
    },
    {
        name: "Daniel Brooks",
        pic: "https://images.unsplash.com/photo-1531860494978-9326a0388ef4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
        bio: "city lights in my veins 🌆✨ | living after midnight"
    },
    {
        name: "Alex Turner",
        pic: "https://plus.unsplash.com/premium_photo-1680539025215-65826de9c3a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
        bio: "coffee stained mornings ☕🖤 | calm mind energy"
    },
    {
        name: "Noah Bennett",
        pic: "https://images.unsplash.com/photo-1628277097324-e0cd3071dae3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
        bio: "main character energy 🎬✨ | walking my own story"
    },
    {
        name: "Liam Hayes",
        pic: "https://plus.unsplash.com/premium_photo-1759758128918-60b9ec35cd11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
        bio: "built from quiet ambition 🧠⚡ | chasing bigger visions"
    },
    {
        name: "Lucas Reed",
        pic: "https://images.unsplash.com/photo-1545596108-7ff09a2c5e20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
        bio: "weekend escapes 🧭🌅 | collecting quiet moments"
    },
    {
        name: "Ethan Walker",
        pic: "https://images.unsplash.com/photo-1598221860044-ba285dc06dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
        bio: "code after midnight 💻🌙 | coffee runs deep"
    },
    {
        name: "Oliver Grant",
        pic: "https://images.unsplash.com/photo-1631541410781-39f7fd63e850?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
        bio: "creative chaos 🎨🖤 | finding art in everything"
    },
    {
        name: "Jacob Miles",
        pic: "https://images.unsplash.com/photo-1587056169065-008f8ef7d334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
        bio: "golden hour addict 🌅✨ | chasing light & calm"
    },
    {
        name: "Matthew Cole",
        pic: "https://images.unsplash.com/photo-1740102073570-7620b74df2b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg2fHx8ZW58MHx8fHx8",
        bio: "focused mind 🎯⚡ | building something bigger"
    },
    {
        name: "Adrian Scott",
        pic: "https://images.unsplash.com/photo-1729818176929-a71ae3f37ffd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDg3fHx8ZW58MHx8fHx8",
        bio: "minimal soul 🌿🕊️ | living quietly, dreaming loudly"
    }
];


let showUser = ((arr) => {
    arr.forEach((user) => {

        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.classList.add('bg-img');
        img.src = user.pic;

        let content = document.createElement('div');
        content.classList.add('content');

        let h3 = document.createElement('h3');
        h3.textContent = user.name;

        let p = document.createElement('p');
        p.textContent = user.bio;


        content.appendChild(h3)
        content.appendChild(p)

        card.appendChild(img);
        card.appendChild(content);

        document.querySelector('.cards').appendChild(card);

    });
});

showUser(users);


let inp = document.querySelector('.inp');

inp.addEventListener('input', function () {
    let newUser = users.filter((user) => {
        // return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
        return user.name.toLowerCase().includes(inp.value.toLowerCase())
    });

    let cards = document.querySelector('.cards');
    cards.innerHTML = "";

    if (inp.value !== "" && newUser.length === 0) {
        cards.innerHTML = "<p class = 'error'>User Not Found</p>"
    }
    else {
        showUser(newUser);
    }
});


// empty is not equals to empty (condition false) && filterd array jo newUser hai uski length tabhi increase hogi jab ham wo saare words ko pass karenge jo hamare filterd array ki name ki property me honge, hamne kuchh type kiya or wo name property se match hua to condition false ho jaayegi fir hamara else ka code chalega , or condition true hui to 'error' show hoga......

// condition true hogi to if ka code chalega nahi to else ka....