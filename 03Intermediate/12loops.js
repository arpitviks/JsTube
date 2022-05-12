const mystates = [
    "Maharashtra",
    "Mumbai",
    "Assam",
    2022,
    "Tamil Nadu",
    "Rajasthan"
];

for (let i = 0; i < mystates.length; i++) {
    console.log(mystates[i]);
}
console.log('/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/');
for (let i = 0; i < mystates.length; i++) {
    if (typeof mystates[i] !== "string") continue;
    console.log(mystates[i]);
}
console.log('/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/');

let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);