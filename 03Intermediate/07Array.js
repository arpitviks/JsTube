var countries = ["India", "USA", "JAPAN", "RUSSIA"];

var states = new Array("Mumbai", "Delhi", "Maharashtra", "Assam");

console.log(states);

console.log(states.length);
states[0] = "Punjab";
console.log(states);

var user = ["Arpit", "Arpit@gm.com", 3, 34, true];
console.log(user);

user.pop();
user.pop();
console.log(user);
user.unshift("NEW VALUE");
console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf(3));

console.log(Array.from("Arpit"));