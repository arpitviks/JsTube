var user = {
    firstName: "Arpit",
    lastName: "Vikhar",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true
}
console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount = 44;
console.log(user.loginCount);
console.table(user);


var mobile = {
    brand: "Apple",
    Model: "iPhone 11",
    RAM: "4GB",
    Size: "128GB",
    Color: "Red",
    Year: "2019",
    Camera: "12mp"
};
console.table(mobile);