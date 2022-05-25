var mp = new Map();

mp.set("0", "null");
mp.set("1", "eins");
mp.set("2", "zwei");
mp.set("3", "drei");

console.log(mp);

//Printing keys
for (let key of mp.keys()) {
    console.log(`Key is ${key}`);
}

//Printing values
for (let value of mp.values()) {
    console.log(`Value is ${value}`);
}

//Printing keys and values 
for (let [key, value] of mp) {
    console.log(`keys is ${key} AND value is ${value}`);
}


//In for Each loop the values will be printed first instead of keys
mp.forEach((key) => {
    console.log(`${key}`);
})

//In for Each loop the values will be printed first instead of keys
mp.forEach((value) => {
    console.log(`${value}`);
})