//Spread operator

function sumOne(a, b) {
    return a + b;
}

var myA = [5, 4, 1];
console.log(sumOne(...myA));


//rest operator
function sumTwo(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(2, 3, 4, 5, 1, 2, 6));
