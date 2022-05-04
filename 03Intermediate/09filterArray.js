var testArray = [2, 4, 6, 8, 1, 9, 3, 5];
console.log(testArray.fill("h", 2));

const myNumbers = [23, 24, 25, 55, 57, 58, 56];

const result = myNumbers.filter((num) => num < 55);

console.log(result);

var user = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
//Slicing an array(it's just prints the values of the range)
console.log(user.slice(1, 6));

//Splicing an array(It replaces the value of the specified range with the mentioned string)
user.splice(1, 3, "Hi");
console.log(user);
