var user = 2;
var usr = '';

if (2 == user) {
    console.log('Without strict type checking');
}

if (usr) {
    console.log('this is false');
}
if (2 === user) {
    console.log('With strict type checking');
}

// undefined
// null
// 0
// ''
// NaN