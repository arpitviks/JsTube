//Another method to create the object and accessing them.
var User = {
    name: "",
    getUserName: function () {
        console.log(`User name is : ${this.name}`);
    }
}
//This will return empty
var Arpit = Object.create(User);
console.log(Arpit);
Arpit.getUserName();

//Adding values to the object file 

var sam = Object.create(User, {
    name: { value: "Sam" },
    courseCount: { value: 3 }
});

sam.getUserName();
