const names = ["YouTube", "FaceBook", "InstaGram", "NetFlix", "AmaZon"];

//use "For of" loop for traversing elements in the array
for (const n of names) {
    console.log(n);
}

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "FaceBook",
    lco: "Learn Code Online"
};
console.log(`${symbols.yt}`);
//use "For in" for traversing elements in the object
for (const n in symbols) {
    console.log(`${symbols.n}`);
}