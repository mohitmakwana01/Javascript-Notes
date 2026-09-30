// Q5: Use rest parameters to accept any number of scores and return the total.

function getScore(...score) {
    let total = 0;
    score.forEach((val) => {
        total = total + val;
    })
    return total;
}

console.log(getScore(22,33,44,55,66));


