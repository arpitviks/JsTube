tipper("80");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}
// Lets take another example....
//console.log(bigtip("200"));
/*this will throw an error as functions are scanned and globle execution context made it available.
but not the variables, variable declarations are scanned and made undefined.*/

var bigtip = function (a) {
    var bill = parseInt(a);
    console.log(bill + 50);
}

bigtip("200");

console.log(name);//It will show undefined as v ariable declarations are scanned and made undefined
var name = "Arpit";

function sayName() {
    var name = "Mr. A";
    console.log(name);
}

sayName();
console.log(name);
