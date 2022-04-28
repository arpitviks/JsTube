var name = "Hitesh";

console.log("Line no 3", name);

function sayName() {
    var name = "My A";
    console.log("Line no 7", name);
    sayName2()

    function sayName2() {
        var name = "Mr. HC";
        console.log("Line no 11", name);
    }
}

sayName();

//scope chaining means a JS engine will look for a variable value upwords direction , like if the value of the "name" is commented on line no. 1 then JS will look upwards
//and in the console log it will print the value of name declared at line no 6.